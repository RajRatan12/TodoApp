//create http server
//do validation check
//creating mongoDB schema
const express = require('express');
const app = express();
const {todo} = require('./db');
const {createTodo} = require('./types');
const cors = require('cors');
app.use(cors());
app.use(express.json());

app.get('/todos',async (req, res) => {
      const todos = await todo.find({});
       res.json({
              todos
       })
}) 

app.post('/todo', async (req, res) => {
    const createPayload = req.body;
     const parsedPayload = createTodo.safeParse(createPayload);
     if(!parsedPayload.success) {
        res.status(411).json({
            msg: 'you sent the wrong input',
        })
        return
     } 

     await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
     });

     res.json({
         msg: 'todo created'
     })
})

app.put('/completed',async (req, res) => {
    const createPayload = req.body;
     const parsedPayload = createTodo.safeParse(createPayload);
     if(!parsedPayload.success) {
        res.status(411).json({
            msg: 'you sent the wrong input',
        })
        return
     }
     await todo.update({
        _id : req.body.id
     },{
            completed: true
     })
     res.json({
         msg: 'todo marked as done'
     })
})

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})