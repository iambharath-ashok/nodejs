

const axios = require('axios');
const yargs = require('yargs');


const argv = yargs.options({
    a: {
        alias : 'address',
        demand: true,
        string: true,
        description: ' Address to Fetch...'
    }
})
.help()
.alias('help','h')
.argv;



var mapApi = 'https://maps.googleapis.com/maps/api/geocode/';
var responseFormat ='json';
var apiKeyValue = 'AIzaSyDBj2JVCp2idthaWHFeL5AITqJElj0gFTc';
var encodedAddress = encodeURIComponent(argv.address);
var geoCodeUrl = `${mapApi}${responseFormat}?address=${encodedAddress}&key=${apiKeyValue}`;
var forecastIOApi = 'dd5adb7cf1924a8c3f2552e5283d0e09';
var forecastHost = 'https://api.darksky.net/forecast';


axios.get(geoCodeUrl).then((geoCodeRepsonse) => {
    if(geoCodeRepsonse.data.status === 'ZERO_RESULTS'){
        throw new Error('Unable to find address');
    }
    console.log(geoCodeRepsonse.data.results[0].formatted_address);
    var  latitude = geoCodeRepsonse.data.results[0].geometry.location.lat;
    var  longitude = geoCodeRepsonse.data.results[0].geometry.location.lng;   
    var forecastIOURL = `${forecastHost}/${forecastIOApi}/${latitude},${longitude}`;
    return axios.get(forecastIOURL).then(forecastIoResponse =>{
        console.log('Temp: ',forecastIoResponse.data.currently.temperature);
    });

}).catch(e => {
    if(e.code === 'ENOTFOUND'){
        console.log('Unable to connect to API servers')
    } else {
        console.log(e.message);
    }
});


