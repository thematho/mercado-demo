const request = require('request');
const API_URL = require('./../config').API_URL;

module.exports = (id) => {
    return new Promise((resolve, reject) => {
        request(API_URL + `categories/${id}`, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                resolve(JSON.parse(body));
            } else {
                reject({ error: response.statusMessage });
                console.error(`ML categories API error, code ${response.statusCode}.
            Message: ${response.statusMessage}`);
            }
        });
    });
};