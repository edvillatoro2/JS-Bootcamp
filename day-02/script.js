let state = {
  todos: [],
};

const todoInput = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const todoList = document.getElementById("todo-list");

// ✅ TASK 1 — Create render()

// Goal:

// clear list
// loop todos
// create <li>
// append to DOM

function render() {
  //clear list
  todoList.innerHTML = "";
  //loop todos
  state.todos.forEach((todo) => {
    //create <li>
    const list = document.createElement("li");
    list.textContent = todo.text;
    // append to DOM
    todoList.appendChild(list);
  });
}

// ✅ TASK 2 — Create addTodo(text)

// Goal:

// push todo object into state

// Todo shape:

// {
//   id: Date.now(),
//   text,
//   done: false
// }

// Then:

// render()
