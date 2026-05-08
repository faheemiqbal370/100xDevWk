function main(){
    const name = "faheem";

    function sayMyName(){
        console.log(name);
    }

    return sayMyName;
}
let fn= main();
fn();
fn(); 