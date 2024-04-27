//-------------------- Java Script --------------------//
// main.js

let product = document.querySelector(".products")
let prev = document.querySelector(".prev")
let next = document.querySelector(".next")

let scrollStep= 800;
let scrollSpeed = 300;

prev.addEventListener("click", ()=>{
    product.scrollBy({
        left: -scrollStep,
        behavior: "smooth"
    })
})
next.addEventListener("click", ()=>{
    product.scrollBy({
        left: scrollStep,
        behavior: "smooth"
    })
})