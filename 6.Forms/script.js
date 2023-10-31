const typeName = (e) => {
    const letter = document.createTextNode(e.target.value);
    const span = document.getElementById("display-firstname");

    span.innerHTML = "";
    span.appendChild(letter);
}



const firstName = document.getElementById("firstname");
firstName.addEventListener('keyup', typeName);

