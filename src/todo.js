const todoform = document.getElementById("todo-form");
const todolist = document.getElementById("todo-list");
const todoinput = todoform.querySelector("input");

const TODOS_KEY ="todos";

let todos = [];

function savetodos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

function deletetodo(event){
   const li = event.target.parentElement;
   li.remove();
   todos = todos.filter((todo) => todo.id !== parseInt(li.id));
   savetodos();
    
}

function painttodo(newtodo){
    const li = document.createElement("li");
    li.id = newtodo.id;
    const span = document.createElement("span");
    span.innerText = newtodo.text;
    const button = document.createElement("button");
    button.innerText = "💚";
    button.addEventListener("click", deletetodo);
    li.appendChild(span);
    li.appendChild(button);
    todolist.appendChild(li);

}

function handletodosubmit(event) {
    event.preventDefault();
    const newtodo = todoinput.value;
    todoinput.value = "";
    const newTodoObj = {
        text: newtodo,
        id: Date.now(),
    };
    todos.push(newTodoObj);
    painttodo(newTodoObj);
    savetodos();
}

todoform.addEventListener("submit", handletodosubmit);


const savedtodos = localStorage.getItem(TODOS_KEY);

if(savedtodos !== null){
    const parsedtodos = JSON.parse(savedtodos);
    todos = parsedtodos;
    parsedtodos.forEach(painttodo);
}

