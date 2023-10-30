const students = ["Jana", "Becca", "Jonasi", "Pieter", "Alex", "Alessandro", "Josué"];

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {

        // Generate random number 
        var j = Math.floor(Math.random() * (i + 1));

        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    return array;
}

shuffleArray(students);

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
