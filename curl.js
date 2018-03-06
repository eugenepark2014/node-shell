// const fs = require("fs");
const request = require("request");
module.exports = function(done, url) {
  request(url, function(error, response, body) {
    // done("error", error, "statusCode:". response && response.statusCode, "body:", body)
    if(error){
      done(error);
    }
    else{

      done(body);
      console.log(response)
    }
    // done("statusCode:", response && response.statusCode)
    // done("body:", body)
  });
};
