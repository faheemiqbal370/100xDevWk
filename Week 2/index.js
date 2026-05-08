function isLegal(name,age){
    if(age>=18){
        console.log(name +" allowed");
    }
    else{
        console.log(name +" not allowed");
    }
}

var userName1 = "john"
var age1=16

var userName2 = "soob"
var age=33

var user1 = {
    name:"John",
    age:23,
    address:{
        city:"chd"
    },
     

}
var user2 = {
    name:"Soob",
    age:17
}


isLegal(user1.name,user1.age)
isLegal(user2.name,user2.age)