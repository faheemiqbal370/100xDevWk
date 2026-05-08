function sum(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function sub(a, b) {
  return a - b;
}

function divide(a, b) {
  return a / b;
}

function doArthematic(a, b, fn) {
    return fn(a,b);
    // if(whatToDo=="sum"){
    //     let s=sum(a,b)
    //     return s;
    // }
    // if(whatToDo=="sub"){
    //     let s=sub(a,b)
    //     return s;
    }
  

const ans1=doArthematic(1,2,sum);
const ans2=doArthematic(1,2,sub);

console.log(ans1);