const fs = require('fs');
const path = require('path');

function scanDir(dir, fileList = []) {
  if (!fs.existsSync(dir)) return fileList;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      scanDir(filePath, fileList);
    } else {
      fileList.push(filePath);
    }
  }
  return fileList;
}

const researchFiles = scanDir(path.resolve('research'));
console.log("Auditing research files for sensitive data (" + researchFiles.length + " files)...");

const sensitiveFindings = [];

researchFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  const relPath = path.relative(path.resolve('.'), file);

  // Check for potential secrets, API keys, private tokens
  if (content.match(/(sk-[a-zA-Z0-9]{20,}|ghp_[a-zA-Z0-9]{20,}|password\s*[:=]\s*["'][^"']+["'])/i)) {
    sensitiveFindings.push({ file: relPath, issue: "Potential secret/credential match" });
  }

  // Check for potential private PII or case intake records
  if (content.match(/(ssn\s*[:=]\s*\d{3}-\d{2}-\d{4}|driver'?s?\s*license\s*#?\s*[:=]\s*[a-zA-Z0-9]+)/i)) {
    sensitiveFindings.push({ file: relPath, issue: "Potential PII (SSN or DL) match" });
  }
});

console.log("Sensitive Data Findings:", sensitiveFindings.length);
sensitiveFindings.forEach(f => console.log(`  - [${f.file}]: ${f.issue}`));
