const fs = require('fs');
const path = require('path');

function scanDir(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      if (file !== 'node_modules' && file !== '.next') {
        scanDir(filePath, fileList);
      }
    } else if (file.endsWith('.ts') || file.endsWith('.tsx') || file.endsWith('.js') || file.endsWith('.jsx')) {
      fileList.push(filePath);
    }
  }
  return fileList;
}

const allSrcFiles = scanDir(path.resolve('src'));
const deprecatedPaths = [
  '@/data/texasData',
  '@/data/fieldNotes',
  '@/data/provenanceRegistry',
  '@/data/matcher',
  '@/data/dynamicMatcher',
  '@/data/otherWaysThrough',
  '@/data/barriers',
  '@/data/industries',
  '@/data/governance',
  '@/data/pilotBudget',
  '@/data/masterReconciliationLedger',
  'research/'
];

console.log("==================================================");
console.log("AUDITING FOR DEPRECATED COMPATIBILITY IMPORTS & RESEARCH LEAKS");
console.log("==================================================\n");

const violations = [];

allSrcFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  const relPath = path.relative(path.resolve('.'), file);

  deprecatedPaths.forEach(dep => {
    // Check for imports from deprecated root paths or research directory
    const regex = new RegExp(`from\\s+["'][^"']*${dep.replace('/', '\\/')}(\\.[a-z]+)?["']`, 'g');
    if (regex.test(content)) {
      violations.push({ file: relPath, deprecatedImport: dep });
    }
  });
});

if (violations.length > 0) {
  console.error("FAILED: Found violations of deprecated compatibility paths or research imports:");
  violations.forEach(v => console.error(`  - [${v.file}] imports "${v.deprecatedImport}"`));
  process.exit(1);
} else {
  console.log("PASS: 0 deprecated compatibility imports or research leaks detected across all src/ files.\n");
}
