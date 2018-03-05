/*
API KEY = dd5adb7cf1924a8c3f2552e5283d0e09
https://api.darksky.net/forecast/dd5adb7cf1924a8c3f2552e5283d0e09/37.8267,-122.4233
*/




const request = require('request');

var forecastIOApi = 'dd5adb7cf1924a8c3f2552e5283d0e09';
var forecastHost = 'https://api.darksky.net/forecast';

var getWeather = (lat, long, callback) => {
    request({
        url : `${forecastHost}/${forecastIOApi}/${lat},${long}`,
        json : true
    }, (error, response, body) => {
        if(error) {
            callback('Unable to connect to Forecast.io servers.')
        } else if(response.statusCode === 400) {
            callback('Unable to fetch weather.');
        } else if (response.statusCode === 200){
            callback(undefined, {
                temperature : body.currently.temperature,
                apparentTemperature :  body.currently.apparentTemperature,
                pressure : body.currently.pressure,
                windSpeed : body.currently.windSpeed
            });
        }
    
    });
    
};






module.exports = {
    getWeather
};






