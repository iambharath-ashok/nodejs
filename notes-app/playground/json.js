/*
const object = {
    name : 'Guru'
}

var stringObj = JSON.stringify(object);

console.log(typeof stringObj);
console.log(stringObj);


const personString = '{"name":"Guru"}';
var personObject = JSON.parse(personString);

console.log(typeof personObject);
console.log(personObject);
*/



const fs = require('fs');

var personObject = {
    name : 'Guru',
    age : 349
};

var personString = JSON.stringify(personObject);
fs.writeFileSync('person.json',personString);


personString = JSON.parse(fs.readFileSync('person.json'));
console.log(personString);

