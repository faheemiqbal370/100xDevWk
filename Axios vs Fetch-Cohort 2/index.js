const express = require("express");
const app = express();

const path = require("path");

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

console.log("I am backend");

app.get("/todos", (req, res) => {
  res.send({
    todos: [
      {
        todoid: 5,
        data: "go to gym",
      },
    ],
  });
});

app.listen(3000);
