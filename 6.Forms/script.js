const typeName = (e) => {
    const letter = document.createTextNode(e.target.value);
    const span = document.getElementById("display-firstname");

    span.innerHTML = "";
    span.appendChild(letter);
}

const firstName = document.getElementById("firstname");
firstName.addEventListener('keyup', typeName);

const checkAge = (e) => {
    if (e.target.value >= 18) {
        let quote = document.getElementById("a-hard-truth");
        quote.style.visibility = "visible";
    }
}

const age = document.getElementById("age");
age.addEventListener('keyup', checkAge);

