let state = {
  todos: [],
};

const todoInput = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const todoList = document.getElementById("todo-list");

// ✅ TASK 1 — Create render()
// Goal:
// clear list ✅
// loop todos ✅
// create <li>
// append to DOM
function render() {
  // clear list
  todoList.innerHTML = "";
  // loop todos
  state.todos.forEach((todo) => {
    // create <li> element
    const li = document.createElement("li");
    //set todo text in li element
    li.textContent = todo.text;
    //Add dataset id
    li.dataset.id = todo.id;
    //create Button
    const deleteBtn = document.createElement("button");
    //set delete text in button element
    deleteBtn.textContent = "Delete";
    //add ('delete-btn') class to button
    deleteBtn.classList.add("delete-btn");
    //append button into li
    li.appendChild(deleteBtn);
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
function addTodo(text) {
  // push todo object into state
  state.todos.push({
    id: Date.now(),
    text,
    done: false,
  });
  // Then: render()
  render();
}

// ✅ TASK 3 — Wire Button Click=
// Goal:
// read input value
// call addTodo
// clear input
// focus input again
addBtn.onclick = () => {
  // read input value
  const text = todoInput.value;
  if (text.trim() === "") {
    // if input is empty, do nothing
    return;
  }
  // call addTodo
  addTodo(text);
  // clear input
  todoInput.value = "";
  // focus input again
  todoInput.focus();
};

// 🧩 Add:
// Each todo must have:
// delete button
// MUST use event delegation

//remove matching todos from state
function deleteTodo(id) {
  state.todos = state.todos.filter((todo) => todo.id !== todo.id);
  render();
}

// event delegation
todoList.onclick = (e) => {
  // detect click
  if (e.target.classList.contains("delete-btn")) {
    // retrieve todo ID
    const id = e.target.parentElement.dataset.id;
    deleteTodo(id);
  }
};
