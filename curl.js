// const fs = require("fs");
const request = require("request");
module.exports = function(url) {
  request(url, function(error, response, body) {
    console.log("error:", error);
    console.log("statusCode:", response && response.statusCode);
    console.log("body:", body);
  });
};
