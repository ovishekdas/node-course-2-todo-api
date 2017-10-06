var express = require('express');
var bodyParser = require('body-parser');
var { mongoose } = require('./db/mongoose');
var { Todo } = require('./models/todo');
var { User } = require('./models/user');
var { ObjectID } = require('mongodb');

var app = express();
app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    //console.log(req.body);
    var newTodo = new Todo({
        text: req.body.text
    });

    newTodo.save().then((doc) => {
        res.send(doc);
    }, (e) => { res.status(400).send(e); });
});

app.get('/todos', (req, res)=> {
    Todo.find().then((todos)=>{ 
        res.send(
            {
                todos,
                code: 'asdf'
            }
        );
    }, (e)=>{ res.status(400).send(e); });
});

// GET /todos/123456
app.get('/todos/:id', (req, res)=> {
    //res.send(req.params);
    //valid id using isValid
    if(!ObjectID.isValid(req.params.id))
    {
        return res.status(404).send();
    }
    
    Todo.findById(req.params.id).then((todo) => {
        if(!todo)
        {
            return res.status(404).send();
        }
        res.send(
            {
                todo
            }
        );
    }).catch((e) => { res.status(400).send(); });
});

app.listen(3000, () => {
    console.log('app started on port 3000');
});
/* var newTodo = new Todo({
    text: "cook dinner"
});

// newTodo.save().then((doc)=>{
//      console.log('saved todo', doc);
// }, (e)=>{}); */

// var otherTodo = new Todo({
//     text: "edit this video"
//     //completed: true,
//     //completedAt: 123
// });

// otherTodo.save().then((doc) => {
//     console.log('saved todo', doc);
// }, (e) => { console.log(e); });

// new model User



//  var newUser = new User({
//    email: "test@test.com"
// });

// newUser.save().then((doc) => {
//     console.log('saved user', doc);
//  }, (e) => { console.log(e); });

