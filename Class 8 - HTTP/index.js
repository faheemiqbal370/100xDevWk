// http server supporting 4 routes (/sum, /sub, .div, /mul)
//we can use many frameworks like express, hono, elyiajs, trpc

const express = require("express");

const app = express();


app.get("/",function(req,res){
    res.sendFile("D:/1.1100xDEVV/100xDev Web/Class 8/index.html")
}) // when url goes to home page ("/") it send the html whos address his mentioned

//fetch API 



//https://localhost/3000/sum?a=1&b=2
app.get("/sum/:a/:b", function(req,res){  
    // const a = req.query.a;  //string
    // const b = req.query.b;  // string

     const a = parseInt(req.params.a);  
     const b = parseInt(req.params.b);  

    const sum = a+b;

    res.json({     // we can simple text {res.send(sum.toString())} , HTMl {"<b>" + res.send(sum.toString()) + "</b>"}
        ans: sum
    })

})

app.get("/sub/:a/:b", function(req,res){  
   
     const a = parseInt(req.params.a);  
     const b = parseInt(req.params.b);  

    const sub = a-b;

    res.json({     
        ans: sub
    })

})
app.get("/mul/:a/:b", function(req,res){  
   
     const a = parseInt(req.params.a);  
     const b = parseInt(req.params.b);  

    const mul = a*b;

    res.json({     
        ans: mul
    })

})
app.get("/div/:a/:b", function(req,res){  
   
     const a = parseInt(req.params.a);  
     const b = parseInt(req.params.b);  

    const div = a/b;

    res.json({     
        ans: div
    })

})

 

app.listen(3000)//  tells express to  run on port 3000
