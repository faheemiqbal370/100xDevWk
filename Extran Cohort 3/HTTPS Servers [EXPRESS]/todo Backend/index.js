const express = require('express');
const fs = require('fs');

const app = express();
app.use(express.json()); 

app.post('/:userId', (req, res) => {
    const userId = req.params.userId;
    const title = req.body.title;

    fs.readFile('data.json', 'utf-8', (err, data) => {
        let users = JSON.parse(data);

        const id = Date.now();

        users[userId].todos.push({
            id: id, 
            title: title
        });

        fs.writeFile('data.json', JSON.stringify(users), (err) => {
            res.json(users[userId].todos);
        });
    });
});

app.get('/:userId', (req, res) => {
    const userId = req.params.userId;

    fs.readFile('data.json', 'utf-8', (err, data) => {
        let users = JSON.parse(data);
        res.json(users[userId].todos);
    });
});

app.delete('/:userId/:todoId', (req, res) => {
    const userId = req.params.userId;
    const todoId = parseInt(req.params.todoId);

    fs.readFile('data.json', 'utf-8', (err, data) => {
        let users = JSON.parse(data);

        users[userId].todos = users[userId].todos.filter(function(todo) {
            return todo.id !== todoId;
        });

        fs.writeFile('data.json', JSON.stringify(users), (err) => {
            res.json(users[userId].todos);
        });
    });
});

app.listen(3000); 