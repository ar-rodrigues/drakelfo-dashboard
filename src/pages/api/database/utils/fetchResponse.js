const axios = require('axios');
require('dotenv').config();

const today = new Date().toDateString();

const fetchResponse = async (url,customer,key)=> {
    console.log("FETCHING RESPONSE...")
    try {
        const res = await axios.post(url, {
            "customer": customer, "key": key
          });
          console.log(`Response fetched - status: ${res.data.status}`)
          return res;
    } catch (error) {
        console.log(error)
    }
}

module.exports = {fetchResponse}