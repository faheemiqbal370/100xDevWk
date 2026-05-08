const express = require("express");
const app = express();

app.use("/random",(req,res,next) => {
    
    console.log("Im only for Random routte");
    next();
})

app.use((req,res,next) => {
    
    // res.send("Page not found go back");
    res.status(404).send("Page not found go back");
})

app.listen(3000);