

const {MongoClient, ObjectID} = require('mongodb');
const mongoUtils = require('../utils/mongodb-utils');

console.log(mongoUtils.mongoDBUrl);

MongoClient.connect(mongoUtils.mongoDBUrl, (err, dbClient) => {

    var db = dbClient.db('TodoApp');
    db.collection('Todos').find({_id : new ObjectID('5aa838b85a0a627cb03847b8')}).toArray().then((docs) => {
        console.log('Todos:');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch the Documents..');
    });

    db.collection('Todos').find({text: 'Vision'}).toArray().then((docs) => {
        console.log('Todos:');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch the Documents..');
    });

    db.collection('Todos').find().count().then((count) => {
        console.log('Total Count ', count);
    }, (err) => {
        console.log('Unable to fetch the count');
    });

    dbClient.close();


});