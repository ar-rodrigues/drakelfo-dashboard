const mongodb = require('mongodb');
const mongoose = require('mongoose');
const connectDB = require('../connectDB');
const productsSchema = require('../schemas/productsSchema');

// Creates the model with the schema 
let PRODUCTS;

if (mongoose.models.PRODUCTS) {
  PRODUCTS = mongoose.model('PRODUCTS');
} else {
  PRODUCTS = mongoose.model('PRODUCTS', productsSchema);
}

// Find and update function
async function updateOrCreateProducts(data) {
  try {
    console.log("CHECKING IF PRODUCTS ARE IN THE DATABASE");

    const bulkOps = data.map(productData => {
      return {
        updateOne: {
          filter: { sku: productData.sku },
          update: productData,
          upsert: true
        }
      };
    });

    await PRODUCTS.bulkWrite(bulkOps);

    console.log('All products updated or created successfully.');
  } catch (error) {
    console.error(error);
  }
}


// Find all products function
const getAllProducts = async (query) => {
  //console.log(query)
  // Construct a dynamic query object to search for partial matches
  const dynamicQuery = {};
  for (const key in query) {
    if (Object.hasOwnProperty.call(query, key) && query[key] == 'limit') {
      // Create a regular expression to match partial query for each key in query
      if (key === 'imgUrl' && query[key] === '') {
        dynamicQuery[key] = '';
      } else {
        dynamicQuery[key] = new RegExp('^' + query[key] + '.*', 'i');
      }
    }
  }

  // Find all products matching the dynamic query, skip and limit the results, and select the fields to show
  const allProducts = await PRODUCTS.find(dynamicQuery)
                                     .select(`_id sku descripcion imgUrl`)
                                     .limit(query?.limit ? parseInt(query.limit) : 0);

  return allProducts;
};

// Find one and edit product function
const findOneAndUpdate = async function (productId, update) {
  const product = await PRODUCTS.findById(productId);
  if (!product) {
    throw new Error(`Product with id ${productId} not found`);
  }
  Object.assign(product, update);
  await product.save();
  return product;
};

module.exports = { getAllProducts, updateOrCreateProducts, findOneAndUpdate };
