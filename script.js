// This script

var prompt = require('prompt');

  prompt.start();
  
  prompt.get(['location'], function (err, result) {
   var request = require('request');
request("https://maps.googleapis.com/maps/api/geocode/json?address=" + result.location, function(err, response, body) {
        var a = JSON.parse(body);
    console.log("The longitude of " + result.location +" is " + a.results[0].geometry.location.lng);
        console.log("The latitude of " + result.location +" is " + a.results[0].geometry.location.lat);
});
  });



