const fs = require("fs");
const path = require("path");

require("dotenv").config();
const {
  updateOrCreateProducts,
  getAllProducts,
} = require("../database/operations/productsOperations.js");
const {
  updateOrCreateResponse,
} = require("../database/operations/responseOperations");
const getProductUrl = require("./getProductUrl.js");

const today = new Date().toDateString();


const getData = async () => {
  let response;

  try {
    // create or update response file in the database
    response = await updateOrCreateResponse();
    response = response.data.productos;

    // Get array of products from the database
    console.log("GETTING ARRAY OF PRODUCTS")
    const products = await getAllProducts();

    // Check response products against database products
    console.log("CHECKING THE IMAGES")
    for (const producto of response) {
      let sku = producto.sku;

      // Find products from response in the database
      let productoFromDatabase = await products.find((p) => p.sku === sku);

      if (productoFromDatabase) {
        // if product is in the database
        if (productoFromDatabase.imgUrl) {
          // if product has an image url
          producto.imgUrl = productoFromDatabase.imgUrl;
        } else {
          // if product does not have an image url
          producto.imgUrl = ""//await getProductUrl(sku);
          
        }
      } else {
        // if product is not in the database
        producto.imgUrl = ""//await getProductUrl(sku);
        console.log(`${sku} no database`);
      }
    }

    // Update or create the database
    console.log("UPDATE OR CREATE THE DATABASE")
    await updateOrCreateProducts(response);

    const database = await new Promise((resolve) => {
      resolve({ status: 200, fecha: today, data: response });
    })
    return database;
  } catch (error) {
    console.error(`What?`, error);
    return { error: error.message };
  }
};

module.exports = { getData };
