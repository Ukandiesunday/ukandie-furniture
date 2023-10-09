import { products } from "./products.js";

// To toggle the menu icon
const menuToggle = document.querySelector(".menu-toggle");
const sideBar = document.querySelector(".nav-ul");
menuToggle.addEventListener("click", ()=>{
 menuToggle.classList.toggle("toggle");
 sideBar.classList.toggle("toggle-sidebar")
});

window.addEventListener("DOMContentLoaded",()=>{
  displayMenu(products);
  displayMenuBtns();
});

//To generate category buttons
function displayMenuBtns (){
  const buttons = document.querySelector(".btns-container");
  const categories = products.reduce((values, item)=>{
 if(!values.includes(item.category)){
   values.push(item.category)
 }
 return values
   },["All"])
 
   categories.map((category)=>{
    buttons.innerHTML += `<button class="btns" data-category = ${category}>${category}</button>`
   })
 
   const filteredbtn = document.querySelectorAll(".btns");
   filteredbtn.forEach((btn)=>{
     btn.addEventListener("click",(event)=>{
      const category = event.target.dataset.category;
      const filteredProducts = products.filter((item)=>
       item.category === category
      );
      if(category === "All"){
       displayMenu(products)
      }else{
       displayMenu(filteredProducts)
      }
     });
   });
}

 const menu = document.querySelector(".menu");
 function displayMenu (items){
   menu.innerHTML = items.map((item)=>{
     return `<div class="menu-cols">
     <div class="img-container">
       <img src="${item.img}" >
     </div>
     <p class="name">${item.name}</p>
     <p class="price">${item.price}</p>
     <p class="desc">${item.desc}</p>
     <p class="read">Read More</p>
     </div>
     `
   }).join("");
 }

 const bgColor = docuemn