// Script to create .nojekyll file in the out directory
const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, '../out');
const nojekyllPath = path.join(outDir, '.nojekyll');

try {
  // Create .nojekyll file
  fs.writeFileSync(nojekyllPath, '');
  console.log('Created .nojekyll file in out directory');
} catch (error) {
  console.error('Error creating .nojekyll file:', error);
  process.exit(1);
} 