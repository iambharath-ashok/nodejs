const request = require('request');


var mapApi = 'https://maps.googleapis.com/maps/api/geocode/';
var responseFormat ='json';
var apiKeyValue = 'AIzaSyDBj2JVCp2idthaWHFeL5AITqJElj0gFTc'

var geocodeAddress  = (address, callback) => {
    var encodedAddress = encodeURIComponent(address);
    console.log('Requesting URL: ',`${mapApi}${responseFormat}?address=${encodedAddress}&key=${apiKeyValue}`);
   
    request({
        url : `${mapApi}${responseFormat}?address=${encodedAddress}&key=${apiKeyValue}`,
        json: true 
    
    },(error, response, body) => {
        //console.log('Error: ', error);
        //console.log('Response: ', response);
        //console.log('Body: ',JSON.stringify(response, undefined, 2));
        //1301 lombard street philadelphia
        if(error) {
            callback('Unable to connect to Google servers');
        } else if (body.status === 'ZERO_RESULTS') {
            callback('Invalid location');
        } else if (body.status === 'OK') {
            callback(undefined, {
                address : body.results[0].formatted_address,
                latitude : body.results[0].geometry.location.lat,
                longitude : body.results[0].geometry.location.lng
            });
        }
    });
};


module.exports = {
    geocodeAddress
}