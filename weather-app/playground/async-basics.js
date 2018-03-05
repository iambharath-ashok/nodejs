
console.log('Starting App');


setTimeout(() => console.log('Inside of Callback'),2000);
setTimeout(() => console.log('Set Timeout'),0);


console.log('Finishing App');