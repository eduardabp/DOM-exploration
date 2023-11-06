import { menu } from "./menu.js";

menu.forEach(dish => {
    const main = document.querySelector("main");
    const card = document.createElement("section");
    card.classList.add("food-box");

    const image = document.createElement("img");
    image.src = dish.picture;
    image.alt = dish.altText;
    image.classList.add("dish-picture");
    image.classList.add("food-img");
    card.appendChild(image);

    const title = document.createElement("h4");
    const titleText = document.createTextNode(dish.item);
    title.classList.add("food-title");
    title.appendChild(titleText);
    card.appendChild(title);

    const description = document.createElement("p");
    const descriptionText = document.createTextNode(dish.ingredients);
    description.appendChild(descriptionText);
    card.appendChild(description);

    const button = document.createElement("button");
    const euro = document.createElement("span");
    const euroSymbol = document.createTextNode("€");
    euro.appendChild(euroSymbol);
    const price = document.createElement("span");
    const priceText = document.createTextNode(dish.price);
    price.appendChild(priceText);
    button.appendChild(euro);
    button.appendChild(price);
    button.addEventListener("click", function () {
      this.style.transform = "scale(0.8)";
      setTimeout(()=>{
         this.style.transform = "scale(1)";
      },200)
    });

    price.classList.add("food-price");
    button.classList.add("add-cart");
    card.appendChild(button);

    main.appendChild(card);
});


const toggle = document.getElementById("toggle");
toggle.addEventListener('click', () => {
  const main = document.querySelector("main");
  main.classList.toggle('dark-mode');
});

const btnCart = document.querySelector('#cart-icon');
const cart = document.querySelector('.cart');
const btnClose = document.querySelector('#cart-close');

btnCart.addEventListener('click',() => {
  cart.classList.add('cart-active');
});

btnClose.addEventListener('click', () => {
  cart.classList.remove('cart-active');
});

document.addEventListener('DOMContentLoaded',loadFood);

function loadFood(){
  loadContent();
}

function loadContent(){
  let btnRemove = document.querySelectorAll('.cart-remove');
  btnRemove.forEach((btn) => {
    btn.addEventListener('click',removeItem);
  });

  //Product Item Change Event
  let qtyElements = document.querySelectorAll('.cart-quantity');
  qtyElements.forEach((input)=>{
    input.addEventListener('change',changeQty);
  });

  //Product Cart
  let cartBtns = document.querySelectorAll('.add-cart');
  cartBtns.forEach((btn) => {
    btn.addEventListener('click',addCart);
  });

  updateTotal();
}

//Remove Item
function removeItem(){
  if(confirm('Are Your Sure to Remove')){
    let title = this.parentElement.querySelector('.cart-food-title').innerHTML;
    itemList = itemList.filter(el=>el.title!=title);
    this.parentElement.remove();
    loadContent();
  }}

//Change Quantity
function changeQty(){
  if(isNaN(this.value) || this.value<1){
    this.value=1;
  }
  loadContent();
}
let itemList = [];

//Add Cart
function addCart(){
 let food=this.parentElement;
 let title=food.querySelector('.food-title').innerHTML;
 let price= "€" + food.querySelector('.food-price').innerHTML;
 let imgSrc=food.querySelector('.food-img').src;
 let newProduct={title,price,imgSrc};

 //Check Product already Exist in Cart
 if(itemList.find((el)=>el.title==newProduct.title)){
  alert("Product Already added in Cart");
  return;
}else{
  itemList.push(newProduct);
 }

let newProductElement= createCartProduct(title,price,imgSrc);
let element=document.createElement('div');
element.innerHTML=newProductElement;
let cartBasket=document.querySelector('.cart-content');
cartBasket.append(element);
loadContent();
}

function createCartProduct(title,price,imgSrc){
  return `
  <div class="cart-box">
  <img src="${imgSrc}" class="cart-img">
  <div class="detail-box">
    <div class="cart-food-title">${title}</div>
    <div class="price-box">
      <div class="cart-price">${price}</div>
       <div class="cart-amt">${price}</div>
   </div>
    <input type="number" value="1" class="cart-quantity">
  </div>
  <img src="/images/trash-can.png" name="trash" class="cart-remove">
</div>
  `;
}

function updateTotal () {
  const cartItems=document.querySelectorAll('.cart-box');
  const totalValue=document.querySelector('.total-price');

  let total=0;

  cartItems.forEach (product => {
    let priceElement=product.querySelector('.cart-price');
    let price=parseFloat(priceElement.innerHTML.replace("€",""));
    console.log(priceElement.innerHTML);
    console.log(price);
    let qty=product.querySelector('.cart-quantity').value;
    total+=(price*qty);
    product.querySelector('.cart-amt').innerText="€"+(price*qty);
  });

  totalValue.innerHTML='€'+total;

  // Add Product Count in Cart Icon

  const cartCount=document.querySelector('.cart-count');
  let count=itemList.length;
  cartCount.innerHTML=count;

  if(count==0){
    cartCount.style.display='none';
  }else{
    cartCount.style.display='block';
  }
}