

const MongoClient = require('mongodb').MongoClient;

var mongoUrl = 'mongodb://localhost:27017/TodoApp';
MongoClient.connect(mongoUrl, (err, dbClient) => {

    if(err) {
        return console.log('Unable to connect to MongoDB Server');
    }
    console.log('Connected to Mongo Server');
    var db = dbClient.db('TodoApp');

    db.collection('Todos').insertOne({
        text : 'Vision',
        vision : 'To make earth a better place to live',
        completed: 'Inprogess'
    }, (err, result) => {
        if(err){
            return console.log('Error while inserting a Todo Document');
        }
       return  console.log(JSON.stringify(result.ops, undefined, 2));
    });

    db.collection('Users').insertOne({
        name : 'Bharath',
        age : '27',
        goal : 'To create the empire'
    },(err, result) => {
        if(err) {
            return console.log('Error while inserting the Users Document');
        }
        console.log(JSON.stringify(result, undefined, 2));
    }); 

    dbClient.close()

});