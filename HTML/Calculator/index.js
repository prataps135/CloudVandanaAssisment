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

// adding key press functionality
document.addEventListener("keyup", (event) => {
  console.log(event.key);
  switch (event.key) {
    case "1":
      addValue(1);
      break;
    case "2":
      addValue(2);
      break;
    case "3":
      addValue(3);
      break;
    case "4":
      addValue(4);
      break;
    case "5":
      addValue(5);
      break;
    case "6":
      addValue(6);
      break;
    case "7":
      addValue(7);
      break;
    case "8":
      addValue(8);
      break;
    case "9":
      addValue(9);
      break;
    case "0":
      addValue(0);
      break;
    case "+":
      isSignAdded = true;
      operation = "+";
      break;
    case "-":
      isSignAdded = true;
      operation = "-";
      break;
    case "/":
      isSignAdded = true;
      operation = "%";
      break;
    case "*":
      isSignAdded = true;
      operation = "x";
      break;
    case ".":
      addValue(".");
      break;
    case "Enter":
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
      break;
    case "Escape":
      display.innerHTML = 0;
      cleaning();
      break;
  }
});

function addValue(value) {
  if (!isSignAdded) {
    value1.push(value);
    display.innerHTML = value1.join("");
  } else {
    value2.push(value);
    display.innerHTML = value2.join("");
  }
}
