// Amazon Product Scraper - Run this in browser console
function scrapeAmazonProducts() {
    const products = [];
    
    // Find all product containers
    const productContainers = document.querySelectorAll('[data-component-type="s-search-result"]');
    
    productContainers.forEach((container, index) => {
        try {
            const product = {};
            
            // Product Title
            const titleElement = container.querySelector('h2 a span, .s-line-clamp-4 span');
            product.title = titleElement ? titleElement.textContent.trim() : 'N/A';
            
            // Product URL
            const linkElement = container.querySelector('h2 a, .s-line-clamp-4');
            product.url = linkElement ? 'https://amazon.com' + linkElement.getAttribute('href') : 'N/A';
            
            // ASIN (Product ID)
            product.asin = container.getAttribute('data-asin') || 'N/A';
            
            // Price
            const priceElement = container.querySelector('.a-price .a-offscreen');
            product.price = priceElement ? priceElement.textContent.trim() : 'N/A';
            
            // Original/Typical Price (if on sale)
            const originalPriceElement = container.querySelector('.a-text-price .a-offscreen');
            product.originalPrice = originalPriceElement ? originalPriceElement.textContent.trim() : null;
            
            // Rating
            const ratingElement = container.querySelector('.a-icon-alt');
            product.rating = ratingElement ? ratingElement.textContent.trim() : 'N/A';
            
            // Number of reviews
            const reviewsElement = container.querySelector('[aria-label*="ratings"], a[href*="#customerReviews"] span');
            product.reviewCount = reviewsElement ? reviewsElement.textContent.trim() : 'N/A';
            
            // Image URL
            const imageElement = container.querySelector('.s-image');
            product.imageUrl = imageElement ? imageElement.getAttribute('src') : 'N/A';
            
            // Amazon's Choice badge
            const choiceBadge = container.querySelector('[data-csa-c-content-id*="search-ac-badge"]');
            product.amazonChoice = choiceBadge ? true : false;
            
            // Delivery info
            const deliveryElements = container.querySelectorAll('[aria-label*="Delivery"], .a-color-base, .a-text-bold');
            let deliveryInfo = 'N/A';
            deliveryElements.forEach(el => {
                const ariaLabel = el.getAttribute('aria-label');
                if (ariaLabel && ariaLabel.includes('Delivery')) {
                    deliveryInfo = ariaLabel;
                } else if (el.textContent.includes('Delivery')) {
                    deliveryInfo = el.textContent.trim();
                }
            });
            product.delivery = deliveryInfo;
            
            // Ships to location
            const shipsToElements = container.querySelectorAll('.a-color-base, .a-size-small');
            let shipsToText = 'N/A';
            shipsToElements.forEach(el => {
                if (el.textContent.includes('Ships to')) {
                    shipsToText = el.textContent.trim();
                }
            });
            product.shipsTo = shipsToText;
            
            // Purchase frequency (e.g., "500+ bought in past month")
            const frequencyElements = container.querySelectorAll('.a-color-secondary');
            let purchaseFrequency = 'N/A';
            frequencyElements.forEach(el => {
                if (el.textContent.includes('bought')) {
                    purchaseFrequency = el.textContent.trim();
                }
            });
            product.purchaseFrequency = purchaseFrequency;
            
            // More buying choices price
            const moreBuyingElement = container.querySelector('[data-cy="secondary-offer-recipe"] .a-color-base');
            product.lowestPrice = moreBuyingElement ? moreBuyingElement.textContent.trim() : null;
            
            // Add to products array if we have essential data
            if (product.title !== 'N/A' && product.asin !== 'N/A') {
                products.push(product);
            }
            
        } catch (error) {
            console.warn(`Error scraping product ${index + 1}:`, error);
        }
    });
    
    return products;
}

// Execute the scraper
const scrapedProducts = scrapeAmazonProducts();

// Display results
console.log(`Found ${scrapedProducts.length} products:`);
console.table(scrapedProducts);

// You can also get the data as JSON
console.log('JSON Data:');
console.log(JSON.stringify(scrapedProducts, null, 2));

// Return the data so you can use it in variables
scrapedProducts;
