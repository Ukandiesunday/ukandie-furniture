import { products, client } from "./products.js";

// To toggle the menu icon
const menuToggle = document.querySelector(".menu-toggle");
const sideBar = document.querySelector(".nav-ul");
menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("toggle");
  sideBar.classList.toggle("toggle-sidebar");
});

// To apply fixed navBar
const topLink = document.querySelector(".top-link");
const nav = document.querySelector(".nav-bar");
const reviewClient = document.querySelector(".client");
window.onscroll = function () {
  const scrollHeight = window.scrollY;
  const navHeight = nav.getBoundingClientRect().height;
  scrollHeight > navHeight
    ? nav.classList.add("fixed-nav")
    : nav.classList.remove("fixed-nav");

  scrollHeight & sideBar.classList.remove("toggle-sidebar") ||
    menuToggle.classList.remove("toggle");

  scrollHeight > 500
    ? topLink.classList.add("show-link")
    : topLink.classList.remove("show-link");

  topLink.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  });
};
// To show perspective design
setInterval(() => {
  const fullDesign = document.querySelectorAll(".span-d");
  fullDesign.forEach((show) => {
    show.classList.toggle("full-span");
  });
}, 2000);

//To generate category buttons
window.addEventListener("DOMContentLoaded", () => {
  displayMenu(products);
  displayMenuBtns();
});
function displayMenuBtns() {
  const buttons = document.querySelector(".btns-container");
  const categories = products.reduce(
    (values, item) => {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["All"]
  );

  categories.map((category) => {
    buttons.innerHTML += `<button class="btns" data-category = ${category}>${category}</button>`;
  });

  const filteredbtn = document.querySelectorAll(".btns");
  filteredbtn.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      const category = event.target.dataset.category;
      const filteredProducts = products.filter(
        (item) => item.category === category
      );
      if (category === "All") {
        displayMenu(products);
      } else {
        displayMenu(filteredProducts);
      }
    });
  });
}

const menu = document.querySelector(".menu");
function displayMenu(items) {
  menu.innerHTML = items
    .map((item) => {
      return `<div class="menu-cols">
     <div class="img-container">
       <img src="${item.img}" >
     </div>
     <p class="name">${item.name}</p>
     <p class="price">${item.price}</p>
     <p class="desc">${item.desc}</p>
     <p class="btns"><a href="service.html">Order/Rent</a></p>
     </div>
     `;
    })
    .join("");
}

const header = document.querySelector(".header-text");
const headerTxt = document.querySelector(".header-text1");
window.addEventListener("load", () => {
  header.classList.add("text1");
  headerTxt.classList.add("text2");
});

// Showing slideshow images of our clients' homes
const img = document.getElementById("img");
const info = document.querySelector(".info");
const customer = document.querySelector(".customer");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");

let myIndex = 0;
window.addEventListener("DOMContentLoaded", () => {
  showClient();
});

function showClient() {
  const item = client[myIndex];
  img.src = item.img;
  info.textContent = item.info;
  customer.textContent = item.name;
}

nextBtn.addEventListener("click", () => {
  myIndex++;
  if (myIndex > client.length - 1) {
    myIndex = 0;
  }
  showClient();
});

prevBtn.addEventListener("click", () => {
  myIndex--;
  if (myIndex < 0) {
    myIndex = client.length - 1;
  }
  showClient();
});
// Show random client attestation
setInterval(showRandomPerson, 2000);
function showRandomPerson() {
  myIndex = Math.floor(Math.random() * client.length);
  showClient();
}

//To display current year
const span = document.querySelector(".span");
const year = new Date().getFullYear();
span.textContent = `Copy right ${year}`;
