let display = document.getElementById("display");

let value1 = [];
let value2 = [];
let isSignAdded = false;
let operation;

// Cleaning the output
let ac = document.getElementById("ac");
ac.addEventListener("click", () => {
  display.innerHTML = 0;
  cleaning();
});

// taking number input from the calculator
let numeric = document.getElementsByClassName("numeric");
for (let i = 0; i < numeric.length; i++) {
  numeric.item(i).addEventListener("click", () => {
    selectedNumber = numeric.item(i).innerHTML;
    if (!isSignAdded) {
      value1.push(selectedNumber);
      display.innerHTML = value1.join("");
    } else {
      value2.push(selectedNumber);
      display.innerHTML = value2.join("");
    }
  });
}

// adding sign
let selectedSign = document.getElementsByClassName("sign");
for (let i = 0; i < selectedSign.length; i++) {
  selectedSign.item(i).addEventListener("click", () => {
    isSignAdded = true;
    operation = selectedSign.item(i).innerHTML;
  });
}

// calculating values
let fecting = document.getElementById("=");
fecting.addEventListener("click", () => {
  let tempValue1 = parseInt(value1.join(""));
  let tempValue2 = parseInt(value2.join(""));

  switch (operation) {
    case "+":
      display.innerHTML = add(tempValue1, tempValue2);
      break;
    case "-":
      display.innerHTML = sub(tempValue1, tempValue2);
      break;
    case "x":
      display.innerHTML = multiply(tempValue1, tempValue2);
      break;
    case "%":
      display.innerHTML = divide(tempValue1, tempValue2);
      break;
  }
  cleaning();
});

function add(num1, num2) {
  return num1 + num2;
}

function sub(num1, num2) {
  return num1 - num2;
}
function multiply(num1, num2) {
  return num1 * num2;
}
function divide(num1, num2) {
  return num1 / num2;
}

function cleaning() {
  value1 = [];
  value2 = [];
  isSignAdded = false;
  operation = null;
}
