const mongoose = require('mongoose')
const mongodb = require('mongodb')
require('dotenv').config();

const main = async ()=>{
  const DB_PASSWORD = process.env['DB_PASSWORD']
  const DB_NAME = process.env['DB_NAME']
  const uri = process.env['URI_DB']

  try {
        // Connect to the MongoDB cluster
        await mongoose.connect(uri, { bufferCommands: true, useNewUrlParser: true, useUnifiedTopology: true });
    } catch (e) {
        console.error(e);
    }
}

const connectDB = main().catch(console.error);

module.exports = connectDB