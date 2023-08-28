// 스크롤 밑으로 하면 navbar 까맣게 만들기
const navbar = document.querySelector("#navbar");
const navbarHeight = navbar.clientHeight;
document.addEventListener("scroll", () => {
    if (window.scrollY > navbarHeight) {
        navbar.classList.add("navbar_dark");
    } else {
        navbar.classList.remove("navbar_dark");
    }
});