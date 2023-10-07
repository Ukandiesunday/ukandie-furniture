// To toggle the menu icon
const menuToggle = document.querySelector(".menu-toggle");
const sideBar = document.querySelector(".nav-ul");
menuToggle.addEventListener("click", (event)=>{
 menuToggle.classList.toggle("toggle");
 sideBar.classList.toggle("toggle-sidebar")
})

