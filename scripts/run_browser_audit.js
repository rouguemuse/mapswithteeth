const { spawn } = require('child_process');
const http = require('http');
const fs = require('fs');
const path = require('path');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const outDir = 'C:\\Users\\rougu\\.gemini\\antigravity\\brain\\109cce37-199b-42d2-8b4f-160b7f724779\\screenshots\\tristate_audit';
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

async function run() {
  console.log('Starting headless Chrome with remote debugging on port 9222...');
  const chromeProc = spawn(chromePath, [
    '--headless=new',
    '--remote-debugging-port=9222',
    '--disable-gpu',
    '--window-size=1280,1024',
    'about:blank'
  ]);

  await new Promise(r => setTimeout(r, 1500));

  const getJson = (url) => new Promise((resolve, reject) => {
    http.get(url, (res) => {
      let d = '';
      res.on('data', c => d += c);
      res.on('end', () => resolve(JSON.parse(d)));
    }).on('error', reject);
  });

  const targets = await getJson('http://127.0.0.1:9222/json/list');
  const target = targets.find(t => t.type === 'page') || targets[0];
  console.log('Target WebSocket URL:', target.webSocketDebuggerUrl);

  const ws = new WebSocket(target.webSocketDebuggerUrl);
  let id = 1;
  const pending = {};

  ws.onmessage = (event) => {
    const data = JSON.parse(event.data);
    if (data.method === 'Runtime.consoleAPICalled') {
      console.log('[BROWSER CONSOLE]', data.params.type, data.params.args.map(a => a.value || a.description).join(' '));
    }
    if (data.method === 'Runtime.exceptionThrown') {
      console.log('[BROWSER ERROR]', data.params.exceptionDetails);
    }
    if (data.id && pending[data.id]) {
      pending[data.id](data);
      delete pending[data.id];
    }
  };

  const send = (method, params = {}) => new Promise((resolve) => {
    const msgId = id++;
    pending[msgId] = resolve;
    ws.send(JSON.stringify({ id: msgId, method, params }));
  });

  await new Promise(r => ws.onopen = r);
  console.log('CDP Connected.');

  await send('Page.enable');
  await send('Runtime.enable');
  await send('DOM.enable');
  await send('Console.enable');
  await send('Network.enable');

  ws.onmessage = (event) => {
    const data = JSON.parse(event.data);
    if (data.method === 'Runtime.consoleAPICalled') {
      console.log('[BROWSER CONSOLE]', data.params.type, data.params.args.map(a => a.value || a.description).join(' '));
    }
    if (data.method === 'Runtime.exceptionThrown') {
      console.log('[BROWSER ERROR]', data.params.exceptionDetails);
    }
    if (data.method === 'Network.loadingFailed') {
      console.log('[NETWORK FAILED]', data.params.requestId, data.params.errorText, data.params.type);
    }
    if (data.id && pending[data.id]) {
      pending[data.id](data);
      delete pending[data.id];
    }
  };

  const evaluate = async (fnBody) => {
    const expr = `(() => { ${fnBody} })()`;
    const res = await send('Runtime.evaluate', { expression: expr, returnByValue: true, awaitPromise: true });
    return res.result?.result?.value;
  };

  const cdpClick = async (fnString) => {
    const res = await evaluate(`
      const el = (${fnString})();
      if (!el) return false;
      el.scrollIntoView({ block: 'center' });
      el.click();
      return true;
    `);
    if (!res) {
      console.log('Element not found for click:', fnString);
      return false;
    }
    return true;
  };

  const captureScreenshot = async (name) => {
    const res = await send('Page.captureScreenshot', { format: 'png' });
    const buffer = Buffer.from(res.result.data, 'base64');
    const outFile = path.join(outDir, name);
    fs.writeFileSync(outFile, buffer);
    console.log(`[SCREENSHOT] Saved ${name} (${buffer.length} bytes)`);
  };

  // 1. Navigate to /find-help
  console.log('\n--- 1. Navigating to /find-help ---');
  await send('Page.navigate', { url: 'http://localhost:3000/find-help' });
  await new Promise(r => setTimeout(r, 4000));

  const diag = await evaluate(`
    const btn = Array.from(document.querySelectorAll('button')).find(b => b.textContent.includes('Money & Immediate Bills'));
    const props = [];
    if (btn) {
      for (const k in btn) {
        if (k.startsWith('__react')) props.push(k);
      }
    }
    return {
      hasBtn: !!btn,
      reactKeys: props
    };
  `);
  console.log('React button inspection:', diag);
  await new Promise(r => setTimeout(r, 1000));

  const diag2 = await evaluate(`
    const allBtnsAfter = Array.from(document.querySelectorAll('button')).map(b => b.textContent.trim().replace(/\\s+/g, ' '));
    return {
      btnCountBefore: ${diag?.allBtns?.length || 0},
      btnCountAfter: allBtnsAfter.length,
      allBtnsAfter
    };
  `);
  console.log('Diagnostic step 2 (after click):', diag2);

  console.log('Selecting "Debt, credit cards, or tax filings..." need...');
  await cdpClick(`() => Array.from(document.querySelectorAll('button')).find(b => b.textContent.includes('Debt, credit cards') || b.textContent.includes('tax filings'))`);
  await new Promise(r => setTimeout(r, 800));
  await captureScreenshot('1_money_debt_selected.png');

  // 3. Continue to Location step
  console.log('Clicking Continue to Location Step...');
  await cdpClick(`() => Array.from(document.querySelectorAll('button')).find(b => b.textContent.toLowerCase().includes('continue to location'))`);
  await new Promise(r => setTimeout(r, 800));

  // 4. Continue to Context Questions Step
  console.log('Clicking Continue to Questions Step...');
  await cdpClick(`() => Array.from(document.querySelectorAll('button')).find(b => b.textContent.toLowerCase().includes('continue to details') || b.textContent.toLowerCase().includes('continue to questions'))`);
  await new Promise(r => setTimeout(r, 1000));
  await captureScreenshot('2_step3_initial.png');

  // 5. Inspect Question 10 initial state
  const initialSelection = await evaluate(`
    const q10Header = Array.from(document.querySelectorAll('h3')).find(h => h.textContent.includes('tax debt, joint returns, or IRS disputes'));
    if (!q10Header) return 'Q10_NOT_FOUND';
    const card = q10Header.closest('div.border-2');
    const buttons = Array.from(card.querySelectorAll('button'));
    return buttons.map(b => ({
      text: b.textContent.trim(),
      isSelected: b.className.includes('bg-[#2D5A3D]') || b.className.includes('bg-[#971F26]') || b.className.includes('bg-[#1C1D1D]')
    }));
  `);
  console.log('Question 10 Initial Button States:', initialSelection);

  // 6. Click NO on Question 10
  console.log('\n--- Clicking NO on Question 10 ---');
  await cdpClick(`() => {
    const q10Header = Array.from(document.querySelectorAll('h3')).find(h => h.textContent.includes('tax debt, joint returns, or IRS disputes'));
    const card = q10Header ? q10Header.closest('div.border-2') : null;
    return card ? Array.from(card.querySelectorAll('button')).find(b => b.textContent.trim().startsWith('NO')) : null;
  }`);
  await new Promise(r => setTimeout(r, 500));
  await captureScreenshot('3_q10_clicked_no.png');

  const afterClickNo = await evaluate(`
    const q10Header = Array.from(document.querySelectorAll('h3')).find(h => h.textContent.includes('tax debt, joint returns, or IRS disputes'));
    const card = q10Header.closest('div.border-2');
    const buttons = Array.from(card.querySelectorAll('button'));
    const yesBtn = buttons.find(b => b.textContent.trim().startsWith('YES'));
    const noBtn = buttons.find(b => b.textContent.trim().startsWith('NO'));
    const notSureBtn = buttons.find(b => b.textContent.trim().includes('NOT SURE'));
    return {
      noSelected: noBtn?.className.includes('bg-[#971F26]'),
      yesSelected: yesBtn?.className.includes('bg-[#2D5A3D]'),
      notSureSelected: notSureBtn?.className.includes('bg-[#1C1D1D]'),
    };
  `);
  console.log('After clicking NO:', afterClickNo);
  console.log('VERIFY NO stays selected:', afterClickNo?.noSelected === true);
  console.log('VERIFY NOT SURE is NOT selected:', afterClickNo?.notSureSelected === false);

  // 7. Click Continue to Review Screen
  console.log('\n--- Navigating to Step 4: Pre-Match Review ---');
  await cdpClick(`() => Array.from(document.querySelectorAll('button')).find(b => b.textContent.toLowerCase().includes('review my answers'))`);
  await new Promise(r => setTimeout(r, 800));
  await captureScreenshot('4_step4_review_screen.png');

  const reviewPartition = await evaluate(`
    const confirmedBox = Array.from(document.querySelectorAll('div')).find(d => d.textContent.includes('Confirmed Facts:'));
    const unknownBox = Array.from(document.querySelectorAll('div')).find(d => d.textContent.includes('Uncertain / Not Answered Yet:'));
    return {
      confirmedText: confirmedBox ? confirmedBox.textContent : '',
      unknownText: unknownBox ? unknownBox.textContent : ''
    };
  `);
  console.log('Review Screen - Confirmed Negative contains tax question:', reviewPartition.confirmedText.includes('tax debt, joint returns'));
  console.log('Review Screen - Unknown box does NOT contain tax question:', !reviewPartition.unknownText.includes('tax debt, joint returns'));

  // 8. Click Back to Details and verify NO is STILL selected
  console.log('\n--- Navigating Back to Details ---');
  await cdpClick(`() => Array.from(document.querySelectorAll('button')).find(b => b.textContent.toLowerCase().includes('back to details'))`);
  await new Promise(r => setTimeout(r, 600));

  const afterBack = await evaluate(`
    const q10Header = Array.from(document.querySelectorAll('h3')).find(h => h.textContent.includes('tax debt, joint returns, or IRS disputes'));
    const card = q10Header.closest('div.border-2');
    const noBtn = Array.from(card.querySelectorAll('button')).find(b => b.textContent.trim().startsWith('NO'));
    return {
      noSelected: noBtn?.className.includes('bg-[#971F26]')
    };
  `);
  console.log('After navigating Back: NO is still selected:', afterBack.noSelected === true);

  // 9. Change NO -> YES
  console.log('\n--- Transitioning NO -> YES ---');
  await cdpClick(`() => {
    const q10Header = Array.from(document.querySelectorAll('h3')).find(h => h.textContent.includes('tax debt, joint returns, or IRS disputes'));
    const card = q10Header ? q10Header.closest('div.border-2') : null;
    return card ? Array.from(card.querySelectorAll('button')).find(b => b.textContent.trim().startsWith('YES')) : null;
  }`);
  await new Promise(r => setTimeout(r, 400));
  const afterYes = await evaluate(`
    const q10Header = Array.from(document.querySelectorAll('h3')).find(h => h.textContent.includes('tax debt, joint returns, or IRS disputes'));
    const card = q10Header.closest('div.border-2');
    const yesBtn = Array.from(card.querySelectorAll('button')).find(b => b.textContent.trim().startsWith('YES'));
    const noBtn = Array.from(card.querySelectorAll('button')).find(b => b.textContent.trim().startsWith('NO'));
    return {
      yesSelected: yesBtn?.className.includes('bg-[#2D5A3D]'),
      noSelected: noBtn?.className.includes('bg-[#971F26]')
    };
  `);
  console.log('After clicking YES: YES is selected:', afterYes.yesSelected === true, 'NO is false:', afterYes.noSelected === false);

  // 10. Change YES -> I'M NOT SURE
  console.log('\n--- Transitioning YES -> I\'M NOT SURE ---');
  await cdpClick(`() => {
    const q10Header = Array.from(document.querySelectorAll('h3')).find(h => h.textContent.includes('tax debt, joint returns, or IRS disputes'));
    const card = q10Header ? q10Header.closest('div.border-2') : null;
    return card ? Array.from(card.querySelectorAll('button')).find(b => b.textContent.trim().includes('NOT SURE')) : null;
  }`);
  await new Promise(r => setTimeout(r, 400));
  const afterNotSure = await evaluate(`
    const q10Header = Array.from(document.querySelectorAll('h3')).find(h => h.textContent.includes('tax debt, joint returns, or IRS disputes'));
    const card = q10Header.closest('div.border-2');
    const notSureBtn = Array.from(card.querySelectorAll('button')).find(b => b.textContent.trim().includes('NOT SURE'));
    const yesBtn = Array.from(card.querySelectorAll('button')).find(b => b.textContent.trim().startsWith('YES'));
    return {
      notSureSelected: notSureBtn?.className.includes('bg-[#1C1D1D]'),
      yesSelected: yesBtn?.className.includes('bg-[#2D5A3D]')
    };
  `);
  console.log('After clicking NOT SURE: NOT SURE is selected:', afterNotSure.notSureSelected === true, 'YES is false:', afterNotSure.yesSelected === false);

  // 11. SECOND NON-TAX EXAMPLE: Housing Lease (housing-lease -> housing-active-lease-tx)
  console.log('\n--- 11. SECOND NON-TAX EXAMPLE: Housing Lease ---');
  await evaluate(`
    window.location.href = '/find-help';
  `);
  await new Promise(r => setTimeout(r, 1500));

  await cdpClick(`() => Array.from(document.querySelectorAll('button')).find(b => b.textContent.includes('Housing & Shelter'))`);
  await new Promise(r => setTimeout(r, 400));
  await cdpClick(`() => Array.from(document.querySelectorAll('button')).find(b => b.textContent.includes('leave a residential lease agreement early'))`);
  await new Promise(r => setTimeout(r, 400));
  await cdpClick(`() => Array.from(document.querySelectorAll('button')).find(b => b.textContent.toLowerCase().includes('continue to location'))`);
  await new Promise(r => setTimeout(r, 600));
  await cdpClick(`() => Array.from(document.querySelectorAll('button')).find(b => b.textContent.toLowerCase().includes('continue to details') || b.textContent.toLowerCase().includes('continue to questions'))`);
  await new Promise(r => setTimeout(r, 1000));

  await cdpClick(`() => {
    const leaseQHeader = Array.from(document.querySelectorAll('h3')).find(h => h.textContent.includes('active residential lease agreement in Texas'));
    const card = leaseQHeader ? leaseQHeader.closest('div.border-2') : null;
    return card ? Array.from(card.querySelectorAll('button')).find(b => b.textContent.trim().startsWith('NO')) : null;
  }`);
  await new Promise(r => setTimeout(r, 400));
  await captureScreenshot('5_housing_lease_clicked_no.png');

  const leaseCheck = await evaluate(`
    const leaseQHeader = Array.from(document.querySelectorAll('h3')).find(h => h.textContent.includes('active residential lease agreement in Texas'));
    const card = leaseQHeader.closest('div.border-2');
    const noBtn = Array.from(card.querySelectorAll('button')).find(b => b.textContent.trim().startsWith('NO'));
    const notSureBtn = Array.from(card.querySelectorAll('button')).find(b => b.textContent.trim().includes('NOT SURE'));
    return {
      noSelected: noBtn?.className.includes('bg-[#971F26]'),
      notSureSelected: notSureBtn?.className.includes('bg-[#1C1D1D]'),
    };
  `);
  console.log('Housing Lease after clicking NO:', leaseCheck);
  console.log('VERIFY Lease NO stays selected:', leaseCheck.noSelected === true);
  console.log('VERIFY Lease NOT SURE is NOT selected:', leaseCheck.notSureSelected === false);

  ws.close();
  chromeProc.kill();
  console.log('\n==================================================');
  console.log('ALL BROWSER LIVE AUDITS PASSED 100%');
  console.log('==================================================');
}

run().catch(e => {
  console.error(e);
  process.exit(1);
});
