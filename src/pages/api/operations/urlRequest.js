const request = require('request');

async function urlRequest(url) {
  return new Promise((resolve, reject) => {
    request.head(url, { rejectUnauthorized: false }, (err, res) => {
      if (err) {
        return reject(err);
      }
      const exists = res.statusCode === 200;
      resolve(exists);
    });
  });
}

module.exports = urlRequest;


