// Tesla.js

// get the dom elements
var main= document.querySelector(".main-1");
const menu = document.querySelector("#menu")
const cross = document.querySelector(".fa-xmark")
const blurs = document.querySelector(".blur")
const side = document.querySelector(".hdn-side")

// event

let menuVisible = true

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


























