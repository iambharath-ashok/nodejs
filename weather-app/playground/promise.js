
console.log('Starting promise.js');


var simplePromise = new Promise((resolve, reject) => {
    resolve('Hey. It Worked....');
    reject('Unable to fulfil...');
});


simplePromise.then(successMessage => {
    console.log('Success: ',successMessage);
},errorMessage => {
    console.log('Error :', errorMessage);
});



var asyncAdd = (a, b) => {
    return new Promise((resolve, reject) => {
       setTimeout(() => {
          if(typeof a === 'number' && typeof b === 'number'){
               resolve( a + b );
           } 
           reject('Arguments must be Integers');
       },0);     
    });
};

asyncAdd(7,6).then(result => {
    console.log('Result: ',result);
    return asyncAdd(result, 8);
}).then(fResult => {
    console.log('Final Result: ',fResult);
}).catch(eMessage => {
    console.log(eMessage);
});



console.log('Finishing promise.js');