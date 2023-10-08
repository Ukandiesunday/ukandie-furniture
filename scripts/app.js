import { products } from "./products.js";

// To toggle the menu icon
const menuToggle = document.querySelector(".menu-toggle");
const sideBar = document.querySelector(".nav-ul");
menuToggle.addEventListener("click", (event)=>{
 menuToggle.classList.toggle("toggle");
 sideBar.classList.toggle("toggle-sidebar")
});

const buttons = document.querySelector(".buttons");
const  showCategory = ()=> {
 const categories = products.reduce((values, item)=>{
if(!values.includes(item.category)){
  values.push(item.category)
}
return values
  },["All"])

  categories.map((category)=>{
   buttons.innerHTML += `<button class="btns" data-category = ${category}>${category}</button>`
  })
}

showCategory()
