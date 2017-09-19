//const MongoClient = require("mongodb").MongoClient;

const {MongoClient, ObjectID} = require("mongodb");

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('unable to connect');
    }
    console.log('connected to mongodb');

   /*  db.collection('Todos').find({_id: new ObjectID("59c138b076ffc50c74f08116")}).toArray().then((docs)=>{
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('unable to find');
    }); */

     db.collection('Todos').find().count().then((count)=>{
        console.log(`${count}`);
    }, (err) => {
        console.log('unable to find');
    }); 

    /* db.collection('Todos').insertOne({
        text: 'something to do',
        completed: false
    }, (err, result) => {
        if (err) {
            return console.log('unable to insert');
        }
        console.log(JSON.stringify(result.ops, undefined, 2));
    }); */

   

    //db.close();
});