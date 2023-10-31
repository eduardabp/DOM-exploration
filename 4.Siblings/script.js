const list = document.querySelector('ol');

list.insertBefore(list.children[4], list.children[0]);

const main = document.querySelector('main');

const sectionTwo = main.children[1];
const sectionThree = main.children[2];

sectionTwo.insertBefore(sectionThree.children[0].children[0], sectionTwo.children[0]);
sectionThree.insertBefore(sectionTwo.children[1], sectionThree.children[0]);

sectionThree.remove();