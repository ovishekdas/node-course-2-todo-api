//const MongoClient = require("mongodb").MongoClient;

const {MongoClient, ObjectID} = require("mongodb");

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('unable to connect');
    }
    console.log('connected to mongodb');

    //deletemany
    db.collection('Todos').deleteMany({text: 'eat lunch'}).then((result)=>{
        console.log(result);
    },(err)=>{});
    //deleteOne
    //delete thefirstone matched

    //findOne and delete (again only delete first one that find)
    db.collection('Todos').findOneAndDelete({completed: false}).then((result)=>{
        console.log(result);
    },(err)=>{});

    //db.close();
});