import { menu } from "./menu.js";

menu.forEach(dish => {
    const main = document.querySelector("main");
    const card = document.createElement("section");

    const image = document.createElement("img");
    image.src = dish.picture;
    image.alt = dish.altText;
    image.classList.add("dish-picture");
    card.appendChild(image);

    const title = document.createElement("h4");
    const titleText = document.createTextNode(dish.item);
    title.appendChild(titleText);
    card.appendChild(title);

    const description = document.createElement("p");
    const descriptionText = document.createTextNode(dish.ingredients);
    description.appendChild(descriptionText);
    card.appendChild(description);

    const button = document.createElement("button");
    const price = document.createTextNode(dish.price);
    button.appendChild(price);
    card.appendChild(button);

    main.appendChild(card);
});