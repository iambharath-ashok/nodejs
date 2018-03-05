console.log('Starting Notes...!!!');

//creating the properties at fly and exporting that field
module.exports.age=25;


//console.log(module);

//exporting a function
module.exports.addNote = () => {
    console.log('Add Note function');
    return 'New Note';
}

//Arrow Function is ES06 standard
module.exports.addNum = (num1,num2) => {
    return num1 + num2;
}