# Browser Console Web Scraping Toolkit (Amazon Scraping)

A powerful, lightweight JavaScript toolkit for scraping websites directly from the browser console. Extract data from any webpage and export it instantly to JSON, CSV, and Excel formats.

## 🚀 Features

- **Zero Dependencies** - Pure JavaScript, works in any modern browser
- **Universal Export** - Automatically exports data in JSON, CSV, and Excel (.xlsx) formats
- **Real-time Scraping** - Extract data from the currently loaded webpage
- **Easy to Use** - Simple copy-paste console execution
- **Extensible** - Easy to modify for different websites
- **Built-in Utilities** - Helper functions for common scraping tasks

## 📁 Files Overview

### `utils.js` - Universal Export Utilities
Core utility functions that handle data export and conversion:
- `exportData()` - Main export function (JSON, CSV, Excel)
- `toCSV()` - Convert array of objects to CSV format
- `toXLSX()` - Convert array of objects to Excel format
- `downloadFile()` - Browser download helper
- `sleep()` - Async delay utility

### `amazon.js` - Amazon Product Scraper
Pre-built scraper for Amazon product search results:
- Product titles, prices, ratings
- ASIN (Amazon product IDs)
- Images, delivery info, reviews
- Amazon's Choice badges
- Purchase frequency data

## 🔧 Quick Start

### 1. Load the Utils
First, copy and paste the entire `utils.js` file into your browser console:

```javascript
// Paste the entire utils.js content here
```

### 2. Run a Scraper
Then execute any scraper script (e.g., `amazon.js`):

```javascript
// Paste the scraper code (e.g., amazon.js content)
```

### 3. Export Your Data
The scraper will automatically export 3 files to your Downloads folder:
- `data.json` - Raw JSON data
- `data.csv` - CSV format for spreadsheets
- `data.xlsx` - Excel format

```javascript
// Export scraped data in all formats
exportData(products, 'scraped_products');
// ✅ Downloads: scraped_products.json, scraped_products.csv, scraped_products.xlsx
```

## 📊 Usage Examples

### Amazon Products
1. Go to any Amazon search results page
2. Open browser console (F12 → Console)
3. Load `utils.js`
4. Run `amazon.js`
5. Files download automatically!

### Custom Scraping
```javascript
// Load utils first, then create custom scrapers
const customData = [];

// Example: Scrape all links on a page
document.querySelectorAll('a').forEach(link => {
    customData.push({
        text: link.textContent.trim(),
        url: link.href,
        target: link.target
    });
});

// Export the data
exportData(customData, 'page-links');
```

## 🛠️ Creating Custom Scrapers

### Basic Template
```javascript
function scrapeWebsite() {
    const results = [];
    
    // Find containers (adjust selector for target site)
    const containers = document.querySelectorAll('.item-container');
    
    containers.forEach((container, index) => {
        try {
            const item = {};
            
            // Extract data (customize for your needs)
            item.title = container.querySelector('.title')?.textContent?.trim() || 'N/A';
            item.price = container.querySelector('.price')?.textContent?.trim() || 'N/A';
            item.link = container.querySelector('a')?.href || 'N/A';
            
            results.push(item);
        } catch (error) {
            console.warn(`Error scraping item ${index + 1}:`, error);
        }
    });
    
    return results;
}

// Execute and export
const scrapedData = scrapeWebsite();
exportData(scrapedData, 'website-data');
```

### Advanced Techniques
```javascript
// Wait for dynamic content
await sleep(2000);

// Handle pagination
let allData = [];
let currentPage = 1;

while (hasNextPage()) {
    const pageData = scrapePage();
    allData.push(...pageData);
    
    // Click next page button
    document.querySelector('.next-page').click();
    await sleep(3000);
    currentPage++;
}

exportData(allData, `all-pages-data`);
```

## 🎯 Supported Websites

Currently includes scrapers for:
- **Amazon** - Product search results
- **Custom** - Easy template for any website

### Adding New Sites
1. Analyze the HTML structure
2. Identify container selectors
3. Map data fields to CSS selectors
4. Test and refine

## 💡 Pro Tips

### Finding Selectors
1. Right-click element → "Inspect"
2. Right-click in DevTools → "Copy selector"
3. Use browser's `$()` function to test: `$('.your-selector')`

### Handling Dynamic Content
```javascript
// Wait for content to load
await sleep(1000);

// Wait for specific element
while (!document.querySelector('.target-element')) {
    await sleep(100);
}
```

### Large Datasets
```javascript
// Process in chunks to avoid memory issues
const chunks = [];
for (let i = 0; i < largeArray.length; i += 1000) {
    chunks.push(largeArray.slice(i, i + 1000));
}

chunks.forEach((chunk, index) => {
    exportData(chunk, `data-chunk-${index + 1}`);
});
```

## 🚨 Important Notes

### Legal & Ethical Considerations
- **Respect robots.txt** and terms of service
- **Don't overload servers** - add delays between requests
- **Use responsibly** - for research, not commercial scraping
- **Check legal requirements** in your jurisdiction

### Browser Limitations
- **CORS restrictions** may apply to some sites
- **Rate limiting** - don't spam requests
- **Memory limits** - large datasets may need chunking
- **Pop-up blockers** may interfere with downloads

### Best Practices
- Always test on small samples first
- Use `try/catch` blocks for error handling
- Add meaningful delays with `sleep()`
- Validate data before exporting
- Save your successful scraper scripts

## 🔍 Troubleshooting

### Common Issues

**Downloads not working?**
- Check if pop-up blocker is enabled
- Try running in incognito mode
- Ensure third-party cookies are allowed

**Selectors not finding elements?**
- Inspect the actual HTML structure
- Check if content is dynamically loaded
- Try more specific or generic selectors

**Getting empty results?**
- Add `console.log()` statements for debugging
- Check if page is fully loaded
- Verify selector accuracy with `$('.selector')`

**Memory errors with large datasets?**
- Process data in smaller chunks
- Clear variables when done: `data = null`
- Refresh page between large scraping sessions

## 📝 Example Output

### JSON Format
```json
[
  {
    "title": "Example Product",
    "price": "$29.99",
    "rating": "4.5 out of 5 stars",
    "asin": "B08XYZ123",
    "imageUrl": "https://...",
    "reviewCount": "1,234"
  }
]
```

### CSV Format
```csv
title,price,rating,asin,imageUrl,reviewCount
"Example Product","$29.99","4.5 out of 5 stars","B08XYZ123","https://...","1,234"
```

## 🤝 Contributing

Feel free to:
- Add scrapers for new websites
- Improve existing utilities
- Share useful scraping patterns
- Report bugs and issues

## ⚖️ License

This toolkit is for educational and research purposes. Users are responsible for complying with website terms of service and applicable laws.

---

**Happy Scraping! 🕷️**

Remember: With great scraping power comes great responsibility. Use ethically and respect the websites you're scraping.
