let num = "";

const buttonClicked = (input) => {
  document.querySelector(".input").value += input;
};

function isOperator(num) {
  for (let i = 1; i < num.length; i++) {
    console.log("isOperator is Called!");
    if (
      num.charAt(i) == "+" ||
      num.charAt(i) == "-" ||
      num.charAt(i) == "*" ||
      num.charAt(i) == "/"
    ) {
      console.log("Operand Position is " + i);
      return i;
    }
  }
}

const clearAll = () => {
  document.querySelector(".input").value = "";
};

function add(num) {
  console.log("add is called!");
  let a = parseFloat(num.substring(0, isOperator(num) + 1));
  let b = parseFloat(num.substring(isOperator(num) + 1, num.length));

  return a + b;
}

function subtract(num) {
  console.log("subtract is called!");
  let a = parseFloat(num.substring(0, isOperator(num) + 1));
  let b = parseFloat(num.substring(isOperator(num) + 1, num.length));

  return a - b;
}

function multiply(num) {
  console.log("multiply is called!");
  let a = parseFloat(num.substring(0, isOperator(num) + 1));
  let b = parseFloat(num.substring(isOperator(num) + 1, num.length));
  let res = a * b;
  return res;
}

function divide(num) {
  console.log("divide is called!");
  let a = parseFloat(num.substring(0, isOperator(num) + 1));
  let b = parseFloat(num.substring(isOperator(num) + 1, num.length));

  let res = a / b;
  return res;
}

function percentage(num) {
  console.log("percentage is called!");
  let a = parseFloat(num.substring(0, isOperator(num) + 1));
  let b = parseFloat(num.substring(isOperator(num) + 1, num.length));

  let res = a / b;
  return res;
}

function calc(num_user) {
  console.log("flag is called!");
  document.querySelector(".input").value = "Not a Valid Argument!";

  console.log("calc is called!");
  let num = num_user;
  let operandPosition = isOperator(num);
  if (num.charAt(operandPosition) == "+") {
    return add(num);
  } else if (num.charAt(operandPosition) == "-") {
    return subtract(num);
  } else if (num.charAt(operandPosition) == "*") {
    return multiply(num);
  } else if (num.charAt(operandPosition) == "/") {
    return divide(num);
  } else console.log("No Operand");
}

document.querySelector(".go").addEventListener("click", function () {
  let num_user = document.querySelector(".input").value;
  let result = calc(num_user);
  document.querySelector(".input").value = result;

  document.querySelector(".resultBeside").style.display = "block";
  document.querySelector(".resultBeside").style.transition = "1000ms";

  let existingSpan = document.querySelector(".resultHere");
  existingSpan.textContent = "";
  existingSpan.textContent = `${result}`;
});

document.querySelector(".reset-page").addEventListener("click", function () {
  document.querySelector(".input").value = "";
  document.querySelector(".resultBeside").style.display = "none";
});

document.querySelector(".input").addEventListener("keyup", function (e) {
  if (e.key === "Enter") {
    let num_user = document.querySelector(".input").value;
    let result = calc(num_user);
    document.querySelector(".input").value = result;
    document.querySelector(".resultBeside").style.display = "block";
    document.querySelector(".resultBeside").style.transition = "1000ms";
    let existingSpan = document.querySelector(".resultHere");
    existingSpan.textContent = "";
    existingSpan.textContent = `${result}`;
  }
});

document.querySelector("body").addEventListener("keyup", function (e) {
  if (e.key === "Enter") {
    let num_user = document.querySelector(".input").value;
    let result = calc(num_user);
    document.querySelector(".input").value = result;
    document.querySelector(".resultBeside").style.display = "block";
    document.querySelector(".resultBeside").style.transitionDuration = "2s";

    let existingSpan = document.querySelector(".resultHere");
    existingSpan.textContent = "";
    existingSpan.textContent = `${result}`;
  }
});
