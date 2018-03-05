

const yargs = require('yargs');
const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');



var argv = yargs.options({
    a : {
        alias : 'address',
        description : 'Address to Fetch for',
        demand : true,
        string : true
    }
})
.help()
.alias('help', 'h')
.argv;

console.log('Address Agrument:  ', argv.address)
geocode.geocodeAddress(argv.address, (errorMessage, geocodeResults) => {
    if(errorMessage) {
        console.log(errorMessage);
    } else {
        console.log(geocodeResults.address);
        weather.getWeather(geocodeResults.latitude, geocodeResults.longitude, (errorMessage, weatherResults) => {
            if(errorMessage){
                console.log(errorMessage);
            } else {
                console.log('Temparature : ',weatherResults.temperature);
            }
        });
    }
});












