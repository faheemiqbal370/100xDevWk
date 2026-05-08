const a=1;
const b=4;

console.log(a);
console.log(b);

//wait fro 1 sec

let beforetime =Date.now();
for(let i=0;i<10000;i++){
    if(currentTime-beforetime==1000){
        callback;
    }
}

function callback(){
    console.log(a+b);
}

setTimeout(callback,1000) //1000 = 1 sec