const myName = document.getElementById("myName");
const button = document.getElementById("myButton");


function makeTextSizer(size){

    function changeSize() {
        myName.style.fontSize = `${size}px` ;
    }
    return changeSize;
}

const size12 = makeTextSizer(12);
const size20 = makeTextSizer(20);
const size52 = makeTextSizer(52);
const size100 = makeTextSizer(100);

button.addEventListener("click", size100);