//const MongoClient = require("mongodb").MongoClient;

const {MongoClient, ObjectID} = require("mongodb");
/* var obj = new ObjectID();
console.log(obj);
 */
/* var user = {name: "abir", age: 25};
var {name} = user;
console.log(name); */

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('unable to connect');
    }
    console.log('connected to mongodb');

    /* db.collection('Todos').insertOne({
        text: 'something to do',
        completed: false
    }, (err, result) => {
        if (err) {
            return console.log('unable to insert');
        }
        console.log(JSON.stringify(result.ops, undefined, 2));
    }); */

    /* db.collection('Users').insertOne({
        name: 'something to do',
        age: 25,
        location: 'siliguri shivmandir',
    }, (err, result) => {
        if (err) {
            return console.log('unable to insert');
        }
        //console.log(JSON.stringify(result.ops, undefined, 2));
        console.log(result.ops[0]._id.getTimestamp());
    }); */

    db.close();
});