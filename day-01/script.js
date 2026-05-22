let state = {
  count: 0,
};

function render() {
  document.getElementById("count").textContent = state.count;
}

//increment
document.getElementById("increment").onclick = () => {
  state.count++;
  render();
};

//reset
document.getElementById("reset").onclick = () => {
  state.count = 0;
  render();
};

//decrement
document.getElementById("decrement").onclick = () => {
  //prevents count from going below 0
  if (state.count > 0) {
    state.count--;
  }
  render();
};
