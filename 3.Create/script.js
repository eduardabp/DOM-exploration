const students = ["Jana", "Becca", "Jonasi", "Pieter", "Alex", "Alessandro", "Josué"]

students.forEach(student => {
    let table = document.createElement("section"); 
    let r = Math.floor(Math.random() * 254);
    let g = Math.floor(Math.random() * 254);
    let b = Math.floor(Math.random() * 254);
    let randomColor = "rgb(" + r + ", " + g + ", " + b + ")";
    table.style.backgroundColor = randomColor;
    if (r + g + b <= 330) {
        table.style.color = "white";
    }

    let p = document.createElement("p");
    let name = document.createTextNode(student);
    table.appendChild(p);
    p.appendChild(name);
    document.querySelector("article").appendChild(table);
});
