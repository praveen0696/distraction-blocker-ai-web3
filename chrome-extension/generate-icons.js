const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const sizes = [16, 48, 128];
const svgPath = path.join(__dirname, 'icons', 'icon.svg');
const outputDir = path.join(__dirname, 'icons');

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

// Generate icons for each size
sizes.forEach(size => {
  sharp(svgPath)
    .resize(size, size)
    .png()
    .toFile(path.join(outputDir, `icon${size}.png`))
    .then(() => console.log(`Generated ${size}x${size} icon`))
    .catch(err => console.error(`Error generating ${size}x${size} icon:`, err));
}); 