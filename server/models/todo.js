const mongoose = require("mongoose");

//save new something
var Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true,
        //minlength: 1,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    }
});

module.exports = {
    Todo: Todo
};

