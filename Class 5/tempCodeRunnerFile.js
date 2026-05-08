const fs = require("fs");

function cleanFile(filepath) {
    return new Promise((resolve, reject) => {
         fs.readFile(filepath,"utf-8",function(err,contents) {
            if(err){
                reject(err);
            }
            else { 
                const trimmedContent = contents.trim(); 
                fs.writeFile(filepath,trimmedContent,function(err) {
                if(err){
                reject(err);
                }
                else{
                    resolve();
                }
            });
            }
         });
    })
}
   
cleanFile("a.txt") 
.then(function() {
    console.log("Done cleaning file");
})
.catch(function(){
    console.log("error while cleaning file");
})

