const axios = require('axios'); // Add this if you haven't installed axios
const mongoose = require('mongoose');
const responseSchema = require('../schemas/responseSchema');

// Variables
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
      // Make GET request to the new API endpoint
      const { data } = await axios.get(url);

      if (data.status === 200) {
        response = await RESPONSE.findOneAndUpdate(
          { _id: response?._id },
          { ...data.data, fecha: today, origin: data.origin },
          { upsert: true, new: true }
        );

        console.log(response ? "RESPONSE WAS UPDATED" : "RESPONSE WAS CREATED");
      } else {
        console.log("API responded with an error status:", data.message);
      }
    } else {
      console.log("RESPONSE IS UP TO DATE");
    }

    return { ...response._doc, data: response?.data };
  } catch (error) {
    console.error(error);
  }
}

module.exports = { updateOrCreateResponse };
