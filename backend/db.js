
/*
Todo {
    title: string;
    description: string;
    completed: boolean;
}
*/

const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect("mongodb+srv://rajratan12:Rajrajraj12@cluster0.efswsyk.mongodb.net/")
const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})
 
const todo = mongoose.model('todo', todoSchema);

module.exports = {
    todo
}