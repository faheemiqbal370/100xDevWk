function fsReadFilePromise(fileName,encoding){

}

fsReadFilePromise("a.txt","utf-8")
.then(function(data){
    console.log(data);
})
.catch(function(e){
    console.log("Error while reading file")
})
