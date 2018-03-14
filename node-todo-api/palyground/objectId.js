

//const MongoClient = require('mongodb').MongoClient;
/**
 * Object Destructuring
 */
const {MongoClient, ObjectID} = require('mongodb');
var obj = new ObjectID();  
console.log(obj)


//console.log(MongoClient)

/**
 * Object Destructuring
 */
var user = {name :'Sharath', age : '23'};
var {name} = user;
console.log('Name: ',name);


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, dbClient) => {
    if(err) {
        return console.log('Unable to connect to MongoDB Server');
    }

   var db = dbClient.db('TodoApp');
    db.collection('Users').insertOne({
        //_id: 12345,
        name : 'Bharath',
        age: 27
     },(err, res) => {
        if(err) {
            return console.log('Error while inserting');
        }
        console.log(res.ops[0]._id.getTimestamp());
     });

     dbClient.close();

});
