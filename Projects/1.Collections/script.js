import { collection } from "./collection.js";

collection.forEach(book => {
    const main = document.querySelector("main");
    const card = document.createElement("section");

    const image = document.createElement("img");
    image.classList.add("cover");
    image.src = book.cover;
    image.alt = document.createTextNode("an orange cover displaying a man alone in the desert");
    card.appendChild(image);

    const link = document.createElement("a");
    const rating = document.createTextNode(book.rating);
    const star = document.createElement("img");
    star.src = "/images/rating64.png";
    star.classList.add("icon");
    link.href = book.goodreads;
    link.target = "_blank";
    link.appendChild(rating);
    link.appendChild(star);
    card.appendChild(link);

    const title = document.createElement("h3");
    const bookName = document.createTextNode(book.name);
    title.appendChild(bookName);
    card.appendChild(title);

    const author = document.createElement("h4");
    const authorName = document.createTextNode(book.author);
    author.appendChild(authorName);
    card.appendChild(author);

    const description = document.createElement("p");
    const synopsis = document.createTextNode(book.synopsis);
    description.appendChild(synopsis);
    card.appendChild(description);

    const line = document.createElement("hr");
    card.appendChild(line);

    const otherMedias = document.createElement("p");
    const adaptationHeading = document.createElement("h5");
    const keyword = document.createTextNode("Adaptations: ")
    const adaptations = document.createTextNode(book.adaptations);
    adaptationHeading.appendChild(keyword);
    otherMedias.appendChild(adaptationHeading);
    otherMedias.appendChild(adaptations);
    card.appendChild(otherMedias);

    if (book.adaptations === "none") {
        otherMedias.style.visibility = "hidden";
        card.removeChild(line);
        }

    main.appendChild(card);
});