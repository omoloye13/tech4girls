let myMenu=document.querySelector(".top-menu");
let dropDown=document.querySelector(".top-bar");
dropDown.addEventListener("click", show);
function show() {
    myMenu.classList.toggle("empty");
    
}