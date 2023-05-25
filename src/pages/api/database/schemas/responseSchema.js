const mongodb = require('mongodb')
const mongoose = require('mongoose')
const connectDB = require('../connectDB')
const {Schema} = mongoose;


const responseSchema = new Schema({
  fecha: String,
  status: Number,
  message: String,
  data: Schema.Types.Mixed
});



module.exports = responseSchema