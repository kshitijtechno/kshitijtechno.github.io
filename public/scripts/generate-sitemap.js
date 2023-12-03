const SitemapGenerator = require('sitemap-generator');
const path = require('path');

// Set your website URL
const url = 'https://kshitijtechno.github.io';

// Set the path for the output sitemap file
const outputPath = path.resolve(__dirname, '../sitemap.xml');

// Initialize the sitemap generator
const generator = SitemapGenerator(url, {
  stripQuerystring: false,
  filepath: outputPath,
});

// Register events
generator.on('done', () => {
  console.log(`Sitemap created at: ${outputPath}`);
});

generator.on('error', (error) => {
  console.error(`Error creating sitemap: ${error}`);
});

// Start the generation process
generator.start();
