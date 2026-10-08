const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

const CHROME_PATH = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const PORT = 9333;

async function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

async function getJson(url) {
  const res = await fetch(url);
  return await res.json();
}

async function cdpCall(ws, method, params = {}) {
  const id = Math.floor(Math.random() * 1000000);
  return new Promise((resolve, reject) => {
    const handler = (evt) => {
      const msg = JSON.parse(evt.data);
      if (msg.id === id) {
        ws.removeEventListener('message', handler);
        if (msg.error) reject(msg.error);
        else resolve(msg.result);
      }
    };
    ws.addEventListener('message', handler);
    ws.send(JSON.stringify({ id, method, params }));
  });
}

async function capture(url, outPath, width = 1280, height = 800) {
  const tempDir = path.join(process.cwd(), '.chrome_temp');
  if (!fs.existsSync(tempDir)) fs.mkdirSync(tempDir, { recursive: true });

  const chromeProc = spawn(CHROME_PATH, [
    '--headless',
    `--remote-debugging-port=${PORT}`,
    `--user-data-dir=${tempDir}`,
    '--disable-gpu',
    '--no-first-run',
    '--no-default-browser-check',
  ]);

  chromeProc.stderr.on('data', (d) => console.error('Chrome err:', d.toString()));

  try {
    let wsUrl = null;
    for (let i = 0; i < 20; i++) {
      await sleep(300);
      try {
        const version = await getJson(`http://127.0.0.1:${PORT}/json/version`);
        wsUrl = version.webSocketDebuggerUrl;
        if (wsUrl) break;
      } catch (e) {}
    }

    if (!wsUrl) throw new Error('Chrome did not start debugging port');

    // Create a new target/page
    const newPageRes = await fetch(`http://127.0.0.1:${PORT}/json/new?${encodeURIComponent(url)}`, { method: 'PUT' });
    const newPage = await newPageRes.json();
    const pageWsUrl = newPage.webSocketDebuggerUrl;

    const ws = new WebSocket(pageWsUrl);
    await new Promise((resolve, reject) => {
      ws.onopen = resolve;
      ws.onerror = reject;
    });

    await cdpCall(ws, 'Page.enable');
    await cdpCall(ws, 'DOM.enable');
    await cdpCall(ws, 'Emulation.setDeviceMetricsOverride', {
      width,
      height,
      deviceScaleFactor: 1,
      mobile: width < 600,
    });

    await sleep(2000); // Wait for page to render fully

    // Get page measurements: full document scrollHeight and main content text
    const evalRes = await cdpCall(ws, 'Runtime.evaluate', {
      expression: `(() => {
        const bodyHeight = document.body.scrollHeight;
        const main = document.querySelector('main');
        const mainHeight = main ? main.scrollHeight : bodyHeight;
        const mainText = main ? main.innerText : document.body.innerText;
        const words = mainText.trim().split(/\\s+/).filter(Boolean).length;
        return { bodyHeight, mainHeight, words };
      })()`,
      returnByValue: true,
    });

    const metrics = evalRes.result.value;

    // Set viewport to full height for screenshot
    await cdpCall(ws, 'Emulation.setDeviceMetricsOverride', {
      width,
      height: metrics.bodyHeight || height,
      deviceScaleFactor: 1,
      mobile: width < 600,
    });

    await sleep(500);

    const screenshotRes = await cdpCall(ws, 'Page.captureScreenshot', {
      format: 'png',
      captureBeyondViewport: true,
    });

    const buffer = Buffer.from(screenshotRes.data, 'base64');
    fs.writeFileSync(outPath, buffer);

    ws.close();
    return metrics;
  } finally {
    chromeProc.kill();
  }
}

async function main() {
  const [,, url, outPath, width, height] = process.argv;
  if (!url || !outPath) {
    console.error('Usage: node scripts/capture_metrics.js <url> <outPath> [width] [height]');
    process.exit(1);
  }
  const metrics = await capture(url, outPath, width ? parseInt(width) : 1280, height ? parseInt(height) : 800);
  console.log(JSON.stringify(metrics));
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
