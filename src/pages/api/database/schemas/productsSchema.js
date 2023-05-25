const mongodb = require('mongodb')
const mongoose = require('mongoose')
const connectDB = require('../connectDB')
const {Schema} = mongoose;


// Creates a new schema that uses id as a short url
// The url passed as longUrl
// And the date in which was created
const productsSchema = new Schema({
  inventario: [{
    almacen_id: Number,
    cantidad: Number,
    almacen: String
  }],
  moneda: String,
  descripcion: String,
  sku: String,
  id_seccion: Number,
  peso_bruto: Number,
  id_linea: Number,
  ancho: Number,
  promo: Boolean,
  skuFabricante: String,
  marca: String,
  serie: String,
  seccion: String,
  id_marca: Number,
  id_serie: Number,
  alto: Number,
  volumen: Number,
  precio: Number,
  upc: String,
  largo: Number,
  peso_neto: Number,
  linea: String,
  imgUrl: String,
  fecha: String
});



module.exports = productsSchema