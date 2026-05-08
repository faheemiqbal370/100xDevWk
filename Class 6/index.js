
// read contents of the input box
// creates new todo on html dom
   //a. Create new div el in js as a variable
   //b. insert that div in to parent div in html
// clear the input box

let todoIndex = 1;

function addTodo(){
    const element = document.getElementById("todoInput");
    const todo = element.value;
    element.value = ""; // empties todo in input box

    const todoDiv = document.createElement("div");//creates newDiv in memory
    // newDiv.innerHTML = "<span>" + todo + "</span> <button>Delete Todo</button>";  not conventional
    
    todoDiv.setAttribute("id", "todo" +todoIndex); // give id to parent div which finally appends to dom

    const todoSpan = document.createElement("span");
    todoSpan.innerHTML = todo;

    todoDiv.appendChild(todoSpan);

    const todobutton = document.createElement("button");
    todobutton.innerHTML = "Delete"

    todobutton.setAttribute("onclick","deleteTodo(" +  todoIndex + ")");

    todoDiv.appendChild(todobutton);

   document.getElementById("todos").appendChild(todoDiv);
   todoIndex++;

}
function deleteTodo(index){
    alert("Delete todo Called with " + index);
   
    const divElement = document.getElementById("todo" + index);
    
    //approach 1
   
   //  divElement.parentElement.removeChild(divElement);

    //or
    document.getElementById("todos").removeChild(divElement);

   }
   