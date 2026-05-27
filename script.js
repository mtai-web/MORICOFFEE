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