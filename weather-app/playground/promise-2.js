

const request = require('request');


var mapApi = 'https://maps.googleapis.com/maps/api/geocode/';
var responseFormat ='json';
var apiKeyValue = 'AIzaSyDBj2JVCp2idthaWHFeL5AITqJElj0gFTc'

var  getAddress = (address) => {
    return new Promise((resolve, reject) =>{
        var encodedAddress = encodeURIComponent(address);
        console.log('Requesting URL: ',`${mapApi}${responseFormat}?address=${encodedAddress}&key=${apiKeyValue}`);
        request({
            url:`${mapApi}${responseFormat}?address=${encodedAddress}&key=${apiKeyValue}`,
            json:true
        },(error,  response, body)=> {
            if(error){
                reject('Unable to connect to Google servers');
            }else if(body.status === 'ZERO_RESULTS'){
                reject('Unable to fecth address')
            } else {
                if(body.status === 'OK'){
                    resolve({
                        address : body.results[0].formatted_address,
                        latitude : body.results[0].geometry.location.lat,
                        longitude : body.results[0].geometry.location.lng
                    });
                }
            }
        });
    });
};

var forecastIOApi = 'dd5adb7cf1924a8c3f2552e5283d0e09';
var forecastHost = 'https://api.darksky.net/forecast';

var getTemparature = (lat,lng) => {

    return new Promise((resolve,reject) => {
        request({
          url : `${forecastHost}/${forecastIOApi}/${lat},${lng}`,
            json : true
        },(error, response, body) => {
            if(error){
                reject('Unable to connect to Forest io servers');
            } else if(response.statusCode === 400) {
                reject('Unable to fetch weather.');
            } else if (response.statusCode === 200){
                resolve({
                    temperature : body.currently.temperature,
                    apparentTemperature :  body.currently.apparentTemperature,
                    pressure : body.currently.pressure,
                    windSpeed : body.currently.windSpeed
                });
            }
        });


    });
}


getAddress('12344').then((address) => {
    console.log('Address: ', JSON.stringify(address,undefined,2));
    getTemparature(address.latitude,address.longitude).then((temparature) => {
            console.log('Tempature: ',JSON.stringify(temparature,undefined,2));
        }
    );
},(eMessage) => {
    console.log(eMessage);
});
