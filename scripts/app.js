import { products, client } from "./products.js";

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
     <p class="read">Shop/Rent now</p>
     </div>
     `
   }).join("");
 }
const header = document.querySelector(".header-text");
 const headerTxt = document.querySelector(".header-text1");
 window.addEventListener("load",()=>{
  header.classList.add("text1");
  headerTxt.classList.add("text2");
 })

 // Showing slideshow images of our clients' homes
const img = document.getElementById("img");
const info = document.querySelector(".info");
const nextBtn = document.querySelector(".next-btn");
const  prevBtn = document.querySelector(".prev-btn");
const randomBtn = document.querySelector(".ran-btn");

let myIndex = 0;
window.addEventListener("DOMContentLoaded",()=>{
  showClient();
})

function showClient(){
  const item = client[myIndex];
  img.src = item.img;
  info.textContent= item.info;
}

nextBtn.addEventListener("click",()=>{
  myIndex ++
  if(myIndex > client.length-1){
    myIndex = 0
  } 
  showClient()
})

prevBtn.addEventListener("click",()=>{
  myIndex --
  if(myIndex < 0){
    myIndex = client.length-1;
  } 
  showClient()
})

randomBtn.addEventListener("click",()=>{
  myIndex = Math.floor(Math.random() * client.length)
  showClient()
})

//To display current year 
const span = document.querySelector(".span");
const year = new Date().getFullYear();
span.textContent = `Copy right ${year}`