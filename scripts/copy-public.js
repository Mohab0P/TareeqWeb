// Script to copy public directory contents to the out directory
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '../public');
const outDir = path.join(__dirname, '../out');

// Function to copy directory recursively
function copyDir(src, dest) {
  // Create destination directory if it doesn't exist
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }

  // Read contents of source directory
  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      // Recursively copy directory
      copyDir(srcPath, destPath);
    } else {
      // Copy file
      fs.copyFileSync(srcPath, destPath);
      console.log(`Copied: ${srcPath} -> ${destPath}`);
    }
  }
}

// Copy public directory to out
try {
  copyDir(publicDir, outDir);
  console.log('Successfully copied public directory contents to out directory');
} catch (error) {
  console.error('Error copying public directory:', error);
  process.exit(1);
} 