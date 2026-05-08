const express = require("express"); // nodes loads exprss library and result is stored in var express

const fs = require("fs");
const { title } = require("process");
const { json } = require("stream/consumers");

const app = express(); // callin fun express , creates a server , 

app.use(express.json); // convert all incomming requests to json format

app.post('/:userId', (req,res)=> {
    const userId = req.params.userId;  // taking userId from url
    const title = req.body.title; // user sends data in body and we take title from it
})

fs.readFile('data.json' , 'utf-8', (err,data)=>{
    let users = json.Parse(data);  //converts text to object

    const id = Date.now();

    users[userId].todos.push( {
        id:id,
        title:title
    });
})

fs.writeFile('data.json',JSON.stringify(users),(err) => {
    res.json(users[userId].todos);
});

app.get('/:userId', (req,res) => {
    const userId = req.params.userId;
})

fs.readFile('data.json','utf-8',(err,data) => {
    let users = JSON.parse(data);
    res.json(users[userId].todos);
});

app.delete('/:userId/:todoId', (req,res) => {
    const userId = req.params.userId;
    const todoId = parseInt(req.params.todoId);
})

fs.readFile('data.json','utf-8',(err,data) => {
    let users = json.parse(data);

    users[userId].todos = users[userId].todos.fitter(function(todo){
        return todo.id !== todoId; // if todo id matches then it gets removed , todoid is the id recieved to delete and id is what we stored in our file
    });
});

fs.writeFile('data.json', JSON.stringify(users),(err) => {
    res.json(users[userId].todos);
});
app.listen(3000);