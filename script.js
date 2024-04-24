// Counter variable
let counter = 0;

// Function to increase the counter
function increaseCounter() {
  counter++;
  updateCounterDisplay();
}

// Function to decrease the counter
function decreaseCounter() {
  if (counter > 0) {
    counter--;
    updateCounterDisplay();
  }
}

// Function to reset the counter to 0
function resetCounter() {
  counter = 0;
  updateCounterDisplay();
}

// Function to update the counter display
function updateCounterDisplay() {
  document.getElementById("counter").innerText = counter;
}
