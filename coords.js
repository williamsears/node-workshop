//This script will tell you the latitude and longitude of the ISS
var request = require('request');
request("http://api.open-notify.org/iss-now.json", function(err, response, body) {
    var obj = JSON.parse(body);
    console.log("longitude:" + obj.iss_position.longitude);
        console.log("latitude:" + obj.iss_position.latitude);
});
