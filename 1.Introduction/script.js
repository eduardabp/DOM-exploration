let title = document.querySelector("title").innerHTML;

console.log(title);

title = "Modifying the DOM";

console.log(title);

document.querySelector("body").style.backgroundColor = "#FF69B4";

document.querySelector("body").style.color = "rgb(249, 182, 97";

const elements = document.body.children;

for(const node of elements) {
    console.log(node);
}