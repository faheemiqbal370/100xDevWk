function setTimeoutPromisified(delay){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve()
        },delay)
    }) 

}

setTimeoutPromisified(1000)
    .then(function() {
        console.log("1 sec has Passed")
    })
