import {client} from "./products.js"

const nav = document.querySelector(".nav-bar");
const review = document.querySelector(".container");

const sideBar = document.querySelector(".nav-ul");
const menuIcon = document.querySelector(".menu-toggle");

window.onscroll = function(){
 const scrollHeight = window.scrollY;
  scrollHeight > 100 ? nav.classList.add("fixed-nav"):nav.classList.remove("fixed-nav");
  scrollHeight > 400 ? review.classList.add("show-review"):review.classList.remove("show-review");

  scrollHeight & sideBar.classList.remove("toggle-sidebar")||menuIcon.classList.remove("toggle");
}

menuIcon.addEventListener("click",()=>{
 menuIcon.classList.toggle("toggle");
 sideBar.classList.toggle("toggle-sidebar")
})

const info = document.querySelector(".info");
const image = document.getElementById("img");
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
},5000)
 




