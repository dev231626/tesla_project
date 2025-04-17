// Tesla.js

// get the dom elements
var main= document.querySelector(".main-1");
const menu = document.querySelector("#menu")
const cross = document.querySelector(".fa-xmark")
const blurs = document.querySelector(".blur")
const side = document.querySelector(".hdn-side")

// event

menu.addEventListener("click", function(e){
    e.preventDefault()
    e.stopPropagation()
    blurs.classList.add("active")
    side.classList.add("active")
})
 
cross.addEventListener("click", () =>{
    blurs.classList.remove("active")
    side.classList.remove("active")
})

// Fix the cross button event listener
const mark = document.querySelector("#mark .fa-xmark");
mark.addEventListener("click", () => {
    blurs.classList.remove("active");
    side.classList.remove("active");
});

const h1 = document.querySelector(".head-1")
const h2 = document.querySelector(".head-2")
const h3 = document.querySelector(".head-3")
const h4 = document.querySelector(".head-4")
const h5 = document.querySelector(".head-5")
const h6 = document.querySelector(".head-6")

const l1 = document.querySelector(".login-1")
const l2 = document.querySelector(".login-2")
const l3 = document.querySelector(".login-3")
const l4 = document.querySelector(".login-4")
const l5 = document.querySelector(".login-5")
const l6 = document.querySelector(".login-6");

main.addEventListener("scroll", () => {
    const unit = main.scrollTop;
    const sections = document.querySelectorAll(".main-2");

    sections.forEach((section, index) => {
        const start = index * 600; // Adjust based on section height
        const end = start + 600;

        if (unit >= start && unit < end) {
            section.classList.add("active");
        } else {
            section.classList.remove("active");
        }
    });

    // Adjust scroll ranges for better accuracy
    if (unit >= 0 && unit < 100) {
        h1.classList.remove("hide");
        l1.classList.remove("hide");
    } else {
        h1.classList.add("hide");
        l1.classList.add("hide");
    }

    if (unit >= 600 && unit < 700) {
        h2.classList.add("active");
        l2.classList.add("active");
    } else {
        h2.classList.remove("active");
        l2.classList.remove("active");
    }

    if (unit >= 1300 && unit < 1400) {
        h3.classList.add("active");
        l3.classList.add("active");
    } else {
        h3.classList.remove("active");
        l3.classList.remove("active");
    }

    if (unit >= 1900 && unit < 2000) {
        h4.classList.add("active");
        l4.classList.add("active");
    } else {
        h4.classList.remove("active");
        l4.classList.remove("active");
    }

    if (unit >= 2600 && unit < 2700) {
        h5.classList.add("active");
        l5.classList.add("active");
    } else {
        h5.classList.remove("active");
        l5.classList.remove("active");
    }

    if (unit >= 3200 && unit < 3300) {
        h6.classList.add("active");
        l6.classList.add("active");
    } else {
        h6.classList.remove("active");
        l6.classList.remove("active");
    }
});





