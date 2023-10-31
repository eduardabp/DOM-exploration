const typeName = (e) => {
    const letter = document.createTextNode(e.target.value);
    const span = document.getElementById("display-firstname");

    span.innerHTML = "";
    span.appendChild(letter);
}

const firstName = document.getElementById("firstname");
firstName.addEventListener("keyup", typeName);

const checkAge = (e) => {
    if (e.target.value >= 18) {
        let quote = document.getElementById("a-hard-truth");
        quote.style.visibility = "visible";
    }
}

const age = document.getElementById("age");
age.addEventListener("keyup", checkAge);


const password = document.getElementById("pwd");
const confirmPassword = document.getElementById("pwd-confirm");

const checkPasswordLength = (e) => {
    if (e.target.value.length < 6) {
        e.target.style.border = "6px solid red";
    }
    else {
        e.target.style.border = "none";
    }
}

const checkConfirmationPassword = (e) => {
    if (e.target.value !== password.value) {
        e.target.style.border = "6px solid red";
    }
    else {
        e.target.style.border = "none";
    }
}

password.addEventListener("keyup", checkPasswordLength);
confirmPassword.addEventListener("keyup", checkConfirmationPassword);

const toggleColorMode = (e) => {
    let body = document.querySelector("body");
    if (e.target.value === "dark") {
        body.style.backgroundColor = "black";
        body.style.color = "white";
    }
    else {
        body.style.backgroundColor = "white";
        body.style.color = "black";
    }
}

const colorMode = document.getElementById("toggle-darkmode");
colorMode.addEventListener("change", toggleColorMode);