// main.js

// Select the product containers and buttons for each section
let productContainer3 = document.querySelector("#scroll3 .products");
let prev3 = document.querySelector("#scroll3 .prev");
let next3 = document.querySelector("#scroll3 .next");

let productContainer4 = document.querySelector("#scroll4 .products");
let prev4 = document.querySelector("#scroll4 .prev");
let next4 = document.querySelector("#scroll4 .next");

let scrollStep = 800;
let scrollSpeed = 300;

// Add click event listeners for the first set of buttons
prev3.addEventListener("click", () => {
    productContainer3.scrollBy({
        left: -scrollStep,
        behavior: "smooth"
    });
});

next3.addEventListener("click", () => {
    productContainer3.scrollBy({
        left: scrollStep,
        behavior: "smooth"
    });
});

// Add click event listeners for the second set of buttons
prev4.addEventListener("click", () => {
    productContainer4.scrollBy({
        left: -scrollStep,
        behavior: "smooth"
    });
});

next4.addEventListener("click", () => {
    productContainer4.scrollBy({
        left: scrollStep,
        behavior: "smooth"
    });
});
