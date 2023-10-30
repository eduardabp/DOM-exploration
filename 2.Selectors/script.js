const importantItems = document.querySelectorAll(".important");

importantItems.forEach(item => {
    item.setAttribute("title", "This is an important item");
});

const images = document.querySelectorAll("img");

for (const image of images) {
    if(image.classList.contains("important") === false) {
        image.style.display = "none";
    }
}