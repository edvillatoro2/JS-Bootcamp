let state = {
  count: 0,
};

const counter = document.getElementById("count");
const incrementBtn = document.getElementById("increment");
const decrementBtn = document.getElementById("decrement");
const resetBtn = document.getElementById("reset");

function render() {
  counter.textContent = state.count;
}

function updateCount(value) {
  state.count += value;
  // prevents from going below 0
  if (state.count < 0) {
    state.count = 0;
  }
  render();
}

function setCount(value) {
  state.count = value;
  render();
}

incrementBtn.onclick = () => {
  updateCount(1);
};

decrementBtn.onclick = () => {
  updateCount(-1);
};

resetBtn.onclick = () => {
  setCount(0);
};
