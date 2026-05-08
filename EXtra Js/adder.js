function adder(num){
    function add(b){
        console.log(num+b);
    }
    return add;
}
const addTo5 = adder(5); // gets saved as num

addTo5(2); // gets passed as b
addTo5(6);