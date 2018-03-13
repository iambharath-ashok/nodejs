

const MongoClient = require('mongodb').MongoClient;


var mongoURL = 'mongodb://localhost:27017';
MongoClient.connect(mongoURL, (err, db) => {
    if(err) {
     return console.log('Unable to connect to MongoDB');
    }
    console.log('Connected to MongoDB Server');
    db.close();
});