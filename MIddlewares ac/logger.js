const express = require("express");
const app = express();

app.use((req,res,next) => {
    req.time = new Date().toString();
    console.log(req.method,req.hostname,req.path,req.time);
    next();
})

app.get("/", (req,res) => {
    console.log("Logger this side")
})

app.listen(3000);