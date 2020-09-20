const container= document.querySelector(".popup-container");
const close= document.getElementById("close");
const open= document.getElementById("open");

open.addEventListener("click",()=>{
    container.classList.add("active");
})
close.addEventListener("click",()=>{
    container.classList.remove("active");
})