// console.log(__dirname);


// function sum(a,b){
//     return a+b;
// }

// console.log(sum(4,5));

//create cli so user gives file path and nodejs processes it and gives word count

const fs = require('fs');
const{Command} = require('commander');
const program = new Command();

program 
.name('File realted CLI')
.description('CLI to do file based tasks')
.version('0.8.0');


program.command('count_words')
.description('Count the number of words in a file')
.argument('<file>', 'file to count')
.action((file) => {
    fs.readFile(file,'utf-8', (err,data) => {
        if(err){
            console.log(err);
        }
        else {
            let words = 0;
            for(let i=0 ;i<=data.length;i++){
                if(data[i] == " "){
                    words++
                }
            } 
            console.log(`THere are ${words + 1} words in the ${file}`);
        }
        
    });
});

program.parse();

// commat example :- node index.js count_words a.txt