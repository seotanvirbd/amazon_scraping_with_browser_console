# Scrape Any Website with Just Your Browser Console (2025) | Amazon Example + JSON, CSV, Excel 
[![Watch the video](https://img.youtube.com/vi/Jqp7GOzF6hU/maxresdefault.jpg)](https://youtu.be/Jqp7GOzF6hU)
**Zero-setup web scraping toolkit for absolute beginners!** Extract data from any website using just your browser console - no installations, no coding experience required.

## 🚀 What You Get

- **Instant scraping** - Works on any webpage in seconds
- **Auto-export** - Downloads JSON, CSV & Excel files automatically  
- **Amazon scraper included** - Ready-to-use product data extractor
- **Beginner-friendly** - Copy, paste, run!

## ⚡ Quick Start (30 seconds)

### Step 1: Load Utils
Open any webpage → Press `F12` → Go to Console → Paste this:

```javascript
// Paste entire utils.js content here
```

### Step 2: Run Scraper  
For Amazon products, paste the `amazon_without_pagination.js` code, or create custom scrapers:

```javascript
// Example: Scrape all page links
const links = [];
document.querySelectorAll('a').forEach(link => {
    links.push({
        text: link.textContent.trim(),
        url: link.href
    });
});

```

### Step 3: Export Your Data
```
// Export scraped data in all formats
exportData(products, 'scraped_products');

// ✅ Downloads: scraped_products.json, scraped_products.csv, scraped_products.xlsx
```
<mark>⚠️ Here 1st parameter "products" is a variable which will be changed according to websites and the 2nd parameter 'scraped_products' is the name of the file. You can change it according to your needs</mark>

## 🎯 What You Can Scrape

- **E-commerce sites** - Products, prices, reviews
- **Social media** - Posts, profiles, engagement  
- **Job boards** - Listings, salaries, companies
- **News sites** - Articles, headlines, authors
- **Any website** - Tables, lists, forms

## 🔧 Custom Scraping Template

```javascript
const data = [];
document.querySelectorAll('.item').forEach(item => {
    data.push({
        title: item.querySelector('.title')?.textContent?.trim(),
        price: item.querySelector('.price')?.textContent?.trim(),
        link: item.querySelector('a')?.href
    });
});
exportData(data, 'scraped-data');
```

## 🎬 Tutorial Video

Watch the complete step-by-step tutorial: [https://youtu.be/Jqp7GOzF6hU]

## 💡 Pro Tips

- **Find selectors**: Right-click element → Inspect → Copy selector
- **Test selectors**: Use `$('.your-selector')` in console
- **Handle dynamic content**: Add `await sleep(2000)` for loading delays
- **Large datasets**: Process in chunks to avoid memory issues

## ⚠️ Important Notes

- **Use responsibly** - Respect robots.txt and terms of service
- **Add delays** - Don't spam requests (`await sleep(1000)`)
- **Check legality** - Ensure compliance with local laws
- **For learning** - Educational and research purposes only

## 📁 Files Included

- `utils.js` - Universal export functions (JSON/CSV/Excel)
- `amazon_without_pagination.js` - Ready-to-use Amazon scraper
- `README.md` - This guide

## 🚨 Troubleshooting

**Downloads not working?** Disable pop-up blocker, try incognito mode

**No data scraped?** Check selectors with `$('.selector')`, ensure page is loaded

**Memory errors?** Process smaller chunks, refresh browser between sessions

---

**Happy Scraping!** 🎉 

*Remember: With great scraping power comes great responsibility.*
