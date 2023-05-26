const mongodb = require('mongodb');
const mongoose = require('mongoose');
const responseSchema = require('../schemas/responseSchema');
const { fetchResponse } = require('../utils/fetchResponse');
const database = require("../response.json")

// Variables
const customer = process.env.CUSTOMER;
const key = process.env.KEY;
const customerTest = process.env.CUSTOMER_TEST;
const keyTest = process.env.KEY_TEST;
const urlTest = process.env.URL_TEST;
const url = process.env.URL_API;

// Creates the model with the schema 
let RESPONSE;

if (mongoose.models.RESPONSE) {
  RESPONSE = mongoose.model('RESPONSE');
} else {
  RESPONSE = mongoose.model('RESPONSE', responseSchema);
}

// UPDATE OR CREATE A RESPONSE DOCUMENT
async function updateOrCreateResponse() {
  try {
    const today = new Date().toDateString();

    let response = await RESPONSE.findOne();

    if (!response || response.fecha !== today) {
      const data = await fetchResponse(url, customer, key);
      response = await RESPONSE.findOneAndUpdate(
        { _id: response?._id },
        { ...data.data, fecha: today },
        { upsert: true, new: true }
      );

      console.log(response ? "RESPONSE WAS UPDATED" : "RESPONSE WAS CREATED");
    } else {
      console.log("RESPONSE IS UP TO DATE");
    }

    return { ...response._doc, data: response?.data };
  } catch (error) {
    console.error(error);
  }
}




module.exports = { updateOrCreateResponse };
