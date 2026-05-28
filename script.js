const fadeItems = document.querySelectorAll(".fade-item");

function showFadeItems() {
  fadeItems.forEach(function (item) {
    const itemTop = item.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (itemTop < windowHeight - 100) {
      item.classList.add("show");
    }
  });
}

window.addEventListener("scroll", showFadeItems);
window.addEventListener("load", showFadeItems);

/* ハンバーガーメニューのトグル */
const menuBtn = document.querySelector(".menu_btn");
const nav = document.querySelector("nav");
const navLinks = document.querySelectorAll("nav a");

menuBtn.addEventListener("click", function () {
    nav.classList.toggle("open");
});

navLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        const targetId = link.getAttribute("href");
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            const headerHeight = 80;
            const targetPosition = targetSection.offsetTop - headerHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: "smooth"
            });
        }

        nav.classList.remove("open");
    });
});
/* ハンバーガーメニューのスタイル */
