// 햄버거 메뉴 클릭관련

const hamburger_btn = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");

function hamburger_bt(){
    menu.classList.toggle("show");
}

hamburger_btn.addEventListener("click",()=>{
    hamburger_bt();
});

// 화면 사이즈 움직이면
window.addEventListener("resize",()=>{
    menu.classList.remove("show");

});
