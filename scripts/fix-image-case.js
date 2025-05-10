// Script to normalize image filenames to lowercase in the public directory
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '../public');

// Function to normalize filenames to lowercase
function normalizeFilenames(directory) {
  const entries = fs.readdirSync(directory, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(directory, entry.name);
    
    if (entry.isDirectory()) {
      // Recursively process subdirectories
      normalizeFilenames(fullPath);
    } else if (entry.isFile() && (entry.name.endsWith('.png') || entry.name.endsWith('.jpg') || entry.name.endsWith('.jpeg') || entry.name.endsWith('.gif'))) {
      // Process image files
      const lowercaseName = entry.name.toLowerCase();
      if (entry.name !== lowercaseName) {
        const newPath = path.join(directory, lowercaseName);
        fs.renameSync(fullPath, newPath);
        console.log(`Renamed: ${fullPath} -> ${newPath}`);
      }
    }
  }
}

// Normalize filenames in public directory
try {
  normalizeFilenames(publicDir);
  console.log('Successfully normalized image filenames to lowercase');
} catch (error) {
  console.error('Error normalizing filenames:', error);
  process.exit(1);
} 