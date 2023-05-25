const urlRequest = require("./urlRequest.js");

async function getProductUrl(sku) {
  // Possible URL that work
  let pchUrls = [
    `https://www.pchmayoreo.com/pub/media/catalog/product/${sku.substring(0, 1)}/${sku.substring(1, 2)}/${sku}.jpg`,
    `https://www.pchmayoreo.com/pub/media/catalog/product/${sku.substring(0, 1)}/${sku.substring(1, 2)}/${sku}.jpg`.toLowerCase(),
    `https://www.pchmayoreo.com/pub/media/catalog/product/${sku.substring(0, 1)}/${sku.substring(1, 2)}/${sku}.png`,
    `https://www.pchmayoreo.com/pub/media/catalog/product/${sku.substring(0, 1)}/${sku.substring(1, 2)}/${sku}.png`.toLowerCase()

  ];

  // Iterate the possible URL to identify the one that works
  for (let i = 0; i < pchUrls.length; i++) {
    const url = pchUrls[i];
    const exists = await urlRequest(url);
    if (exists) {
      return url;
    }
  }

  return "";
}

module.exports = getProductUrl;



    
