//const MongoClient = require("mongodb").MongoClient;

const { MongoClient, ObjectID } = require("mongodb");

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('unable to connect');
    }
    console.log('connected to mongodb');

    //deletemany
    db.collection('Todos').findOneAndUpdate(
        {
            _id: new ObjectID('59c173becf99b8bc8b519841')
        },
        {
            $set :{
                completed:false 
            }
        },
        {
            returnOriginal: false
        }
    ).then((result)=>{
        console.log(result);
    });

    //db.close();
});