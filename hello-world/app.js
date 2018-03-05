console.log('||Guru Raghavendra Vaibhava||');


const fs = require('fs');
const os = require('os');
/**
 * Loading Custom Files using require
 */
const notes = require('./notes.js')

/**
 * Loading Third part modules
 */
const _ = require('lodash');

console.log(_.isString("Guru"));
console.log(_.isString(234))


var array = ['Guru',1,2,'Guru',2,3,'Bharath',3,4];

console.log(notes.age);
console.log(notes.addNote());
console.log(notes.addNum(9,-2));
console.log(_.uniq(array));



/*
// console.log(fs);
var user = os.userInfo();

console.log(user);
fs.appendFile('greetings.txt',`Hello ${user.username} !`);
*/