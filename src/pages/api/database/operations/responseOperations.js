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
const url = process.env.URL;

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
    // FIND THE RESPONSE DOCUMENT
    let response = await RESPONSE.findOne()
    if (!response) {
      const data = await fetchResponse(url, customer, key)
      console.log(data.data)
      // IF IT DOESN'T EXIST, CREATE IT
      response = await RESPONSE.create({...data.data, fecha: today})
      console.log("RESPONSE WAS CREATED")
      return {...response._doc}
    } else if (response.fecha !== today) {
      const data = await fetchResponse(url, customer, key)
      // IF IT EXISTS BUT IS NOT UP TO DATE, REPLACE IT
      response = await RESPONSE.findOneAndReplace({_id: response._id}, {...data.data, fecha: today})
      console.log("RESPONSE WAS UPDATED")
      return {...response._doc} // add data property to the returned object
    } else {
      // IF IT EXISTS AND IS UP TO DATE, RETURN IT
      console.log("RESPONSE IS UP TO DATE")
      return {...response._doc} // add data property to the returned object
    }
  } catch (error) {
    console.error(error);
  }
}



module.exports = { updateOrCreateResponse };
