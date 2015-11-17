Number.prototype.toRadians = function() {
    return this * Math.PI / 180;
};

function distance(lat1, lon1, lat2, lon2) {
    var R = 6371000; // metres
    var φ1 = lat1.toRadians();
    var φ2 = lat2.toRadians();
    var Δφ = (lat2 - lat1).toRadians();
    var Δλ = (lon2 - lon1).toRadians();

    var a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
        Math.cos(φ1) * Math.cos(φ2) *
        Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return R * c;

}

var request = require('request');
request("http://api.open-notify.org/iss-now.json", function(err, response, body) {
    var obj = JSON.parse(body);

    var issLat = obj.iss_position.latitude;
    var issLng = obj.iss_position.longitude;


    var prompt = require('prompt');
    prompt.start();
    prompt.get(['city'], function(err, result) {
        var city = result.city;


        request('https://maps.googleapis.com/maps/api/geocode/json?address=' + city, function(err, response, body) {
            var loc = JSON.parse(body);
            var locLat = loc.results[0].geometry.location.lat;
            var locLng = loc.results[0].geometry.location.lng;
            console.log(issLat + issLng + locLat + locLng);

            console.log(issLat + issLng + locLat + locLng);
            console.log("The difference between " + city + " and the ISS is " + distance(issLat, issLng, locLat, locLng));
        });
    });
});