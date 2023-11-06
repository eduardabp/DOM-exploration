import { keys } from "./keys.js";

class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
      this.previousOperandTextElement = previousOperandTextElement
      this.currentOperandTextElement = currentOperandTextElement
      this.clear()
  }
};

const main = document.querySelector("main");
const display = document.createElement("div");
display.classList.add("span-four");
const previousOp = document.createElement("div");
const currentOp = document.createElement("div");
previousOp.setAttribute("data-previous-operand", "");
currentOp.setAttribute("data-current-operand", "");
display.appendChild(previousOp);
display.appendChild(currentOp);
main.appendChild(display);

keys.forEach(item => {
    const button = document.createElement("button");
    const text = document.createTextNode(item.key);
    button.appendChild(text);
    button.setAttribute(item.attribute, "");
    button.classList.add(item.class);
    button.setAttribute("id", item.id);
    main.appendChild(button);
});

const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-all-clear]');
const currentOperandTextElement = document.querySelector('[data-current-operand]');

