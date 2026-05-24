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
    let li = document.createElement("li");
    li.textContent = todo.textContent;
    // append to DOM
    todoList.appendChild(li);
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
// Then: render()
function addTodos(text) {
  state.todos.push({
    id: Date.now(),
    text,
    done: false,
  });
  render();
}
