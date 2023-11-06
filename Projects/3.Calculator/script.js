const main = document.querySelector("main");

const keys = [
    {
        key: "AC",
        attribute: "data-all-clear",
        id: "clear-all",
        class: "span-two",
    },
    {
        key: "C",
        attribute: "data-delete",
        id: "clear",
        class: "span-one",
    },
    {
        key: "/",
        attribute: "data-operation",
        id: "division",
        class: "span-one",
    },
    {
        key: "7",
        attribute: "data-number",
        id: "seven",
        class: "span-one",
    },
    {
        key: "8",
        attribute: "data-number",
        id: "eight",
        class: "span-one",
    },
    {
        key: "9",
        attribute: "data-number",
        id: "nine",
        class: "span-one",
    },
    {
        key: "*",
        attribute: "data-operation",
        id: "multiplier",
        class: "span-one",
    },
    {
        key: "4",
        attribute: "data-number",
        id: "four",
        class: "span-one",
    },
    {
        key: "5",
        attribute: "data-number",
        id: "five",
        class: "span-one",
    },
    {
        key: "6",
        attribute: "data-number",
        id: "six",
        class: "span-one",
    },
    {
        key: "-",
        attribute: "data-operation",
        id: "minus",
        class: "span-one",
    },
    {
        key: "1",
        attribute: "data-number",
        id: "one",
        class: "span-one",
    },
    {
        key: "2",
        attribute: "data-number",
        id: "two",
        class: "span-one",
    },
    {
        key: "3",
        attribute: "data-number",
        id: "three",
        class: "span-one",
    },
    {
        key: "+",
        attribute: "data-operation",
        id: "plus",
        class: "span-one",
    },
    {
        key: ".",
        attribute: "data-number",
        id: "dot",
        class: "span-one",
    },
    {
        key: "0",
        attribute: "data-number",
        id: "zero",
        class: "span-one",
    },
    {
        key: "=",
        attribute: "data-equals",
        id: "equals",
        class: "span-two",
    },
]

const display = document.createElement("div");
display.setAttribute("data-current-operand", "");
display.classList.add("span-four");
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