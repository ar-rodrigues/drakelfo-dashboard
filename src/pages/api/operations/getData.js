
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
  try {
    // Create or update response file in the database
    const response = await updateOrCreateResponse();
    let products = await getAllProducts();

    // Check response products against database products
    console.log("1. CHECKING THE IMAGES");

    const updatedProducts = await Promise.all(
      response.data.productos.map(async (producto) => {
        const sku = producto.sku;

        // Find products from response in the database
        const productoFromDatabase = products.find((p) => p.sku === sku);

        if (productoFromDatabase) {
          // If product is in the database
          if (productoFromDatabase.imgUrl) {
            // If product has an image URL
            producto.imgUrl = productoFromDatabase.imgUrl;
          } else {
            // If product does not have an image URL
            producto.imgUrl = ""; // await getProductUrl(sku);
          }
        } else {
          // If product is not in the database
          producto.imgUrl = ""; // await getProductUrl(sku);
          console.log(`${sku} not in database`);
        }

        return producto;
      })
    );

    // Update or create the database
    console.log("2. UPDATE OR CREATE THE DATABASE");
    console.log(updatedProducts.length)
    await updateOrCreateProducts(updatedProducts);

    const database = {
      status: 200,
      fecha: today,
      data: updatedProducts,
    };

    return database;
  } catch (error) {
    console.error("Error:", error);
    return { error: error.message };
  }
};

module.exports = { getData };
