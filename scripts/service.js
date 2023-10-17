import {client} from "./products.js"

const nav = document.querySelector(".nav-bar");
window.onscroll = function(){
 const scrollHeight = window.scrollY;
  scrollHeight > 200 ? nav.classList.add("fixed-nav"):nav.classList.remove("fixed-nav");
}
const sideBar = document.querySelector(".nav-ul");
const menuIcon = document.querySelector(".menu-toggle");
menuIcon.addEventListener("click",()=>{
 menuIcon.classList.toggle("toggle");
 sideBar.classList.toggle("toggle-sidebar")
})

const info = document.querySelector(".info")
const image = document.getElementById("img")
const nextBtn = document.querySelector(".next-btn")
const prevBtn = document.querySelector(".prev-btn")
const name = document.querySelector(".customer")

let myIndex = 0;
const displayImg = ()=>{
 let item = client[myIndex];
image.src = item.img;
info.textContent = item.info;
name.textContent = item.name;
}

window.addEventListener("DOMContentLoaded",()=>{
  displayImg();
})

setInterval(()=>{
  myIndex ++
  if(myIndex > client.length-1){
    myIndex = 0;
  }  
  displayImg();
},2000)
 



