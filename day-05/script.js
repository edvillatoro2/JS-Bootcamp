let state = {
  todos: [],
  filter: "all", // 'all', 'active', 'completed'
};

const todoInput = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const todoList = document.getElementById("todo-list");
// filter buttons
const showAllBtn = document.getElementById("show-all");
const showActiveBtn = document.getElementById("show-active");
const showCompletedBtn = document.getElementById("show-completed");

// ✅ TASK 1 — Create render()
// Goal:
// clear list ✅
// loop todos ✅
// create <li>
// append to DOM
function render() {
  // clear list
  todoList.innerHTML = "";
  const todos = getFilteredTodos();

  // loop todos
  todos.forEach((todo) => {
    // create li
    const li = document.createElement("li");
    // add dataset id
    li.dataset.id = todo.id;
    // create text span
    const textSpan = document.createElement("span");
    textSpan.textContent = todo.text;
    textSpan.classList.add("todo-text");
    if (todo.done) {
      textSpan.classList.add("completed");
    }
    // create delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn");

    // append children
    li.appendChild(textSpan);
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
  state.todos = state.todos.filter((todo) => todo.id != id);
  render();
}

// event delegation
todoList.onclick = (e) => {
  // detect click
  if (e.target.classList.contains("delete-btn")) {
    // retrieve todo dataset ID
    const id = e.target.parentElement.dataset.id;
    deleteTodo(id);
  } else if (e.target.classList.contains("todo-text")) {
    const id = e.target.parentElement.dataset.id;
    toggleTodo(id);
  }
};

// Each todo should now:

// toggle completed state
// visually reflect completion
// still support deletion

// Create toggleTodo(id)
function toggleTodo(id) {
  state.todos = state.todos.map((todo) => {
    if (todo.id == id) {
      return {
        ...todo,
        done: !todo.done,
      };
    }
    return todo;
  });
  render();
}

// separate:
// state logic from DOM rendering
function getFilteredTodos() {
  //   If filter is:
  // "all" → return all todos
  // "active" → return incomplete todos
  // "completed" → return completed todos

  if (state.filter === "active") {
    return state.todos.filter((todo) => !todo.done);
  } else if (state.filter === "completed") {
    return state.todos.filter((todo) => todo.done);
  }
  return state.todos;
}
