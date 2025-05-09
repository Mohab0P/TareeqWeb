// Script to fix image paths in HTML files to be truly relative
const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, '../out');

// Function to process HTML files recursively
function processDirectory(directory) {
  const entries = fs.readdirSync(directory, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(directory, entry.name);
    
    if (entry.isDirectory()) {
      // Recursively process subdirectories
      processDirectory(fullPath);
    } else if (entry.name.endsWith('.html')) {
      // Process HTML files
      fixImagePaths(fullPath);
    }
  }
}

// Function to fix image paths in an HTML file
function fixImagePaths(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Get relative path to root from the current file
    const relativePath = path.relative(path.dirname(filePath), outDir);
    const relativePrefix = relativePath === '' ? '' : relativePath + '/';
    
    // Replace absolute paths with relative paths
    // 1. Fix src="/TareeqWeb/... paths
    content = content.replace(/src="\/TareeqWeb\//g, `src="${relativePrefix}`);
    
    // 2. Fix srcset="/TareeqWeb/... paths
    content = content.replace(/srcset="\/TareeqWeb\//g, `srcset="${relativePrefix}`);
    
    // 3. Fix href="/TareeqWeb/... paths for stylesheets, etc.
    content = content.replace(/href="\/TareeqWeb\//g, `href="${relativePrefix}`);
    
    // 4. Fix src="/... paths (starting with slash)
    content = content.replace(/src="\//g, `src="${relativePrefix}`);
    
    // 5. Fix srcset="/... paths (starting with slash)
    content = content.replace(/srcset="\//g, `srcset="${relativePrefix}`);
    
    // 6. Fix href="/... paths (starting with slash)
    content = content.replace(/href="\//g, `href="${relativePrefix}`);
    
    // 7. Convert /_next/ references to be relative
    content = content.replace(/\"\/_next\//g, `"${relativePrefix}_next/`);
    
    // Save the updated content
    fs.writeFileSync(filePath, content);
    console.log(`Fixed image paths in: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing paths in ${filePath}:`, error);
  }
}

// Process all HTML files in the out directory
try {
  processDirectory(outDir);
  console.log('Successfully fixed all image paths to be relative');
} catch (error) {
  console.error('Error processing HTML files:', error);
  process.exit(1);
} 