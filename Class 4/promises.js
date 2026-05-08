const fs =require("fs");


function afterFileIsRead(err,contents){
    if(err){
        console.log("Error:", err);
        return;
    }
    console.log(contents);

}
fs.readFile("a.txt","utf-8",afterFileIsRead);