const mobileMenu = document.querySelector(".mobile__menu");
const navToggle = document.querySelector(".mobile-nav-toggle");
const openToggle = document.querySelector(".open");
const closeToggle = document.querySelector(".close");


navToggle.addEventListener('click', () => {
    if (mobileMenu.style.display === "none") {
        mobileMenu.style.display = "flex";
        openToggle.style.display = "none";
        closeToggle.style.display = "block";
    } else {
        mobileMenu.style.display = "none";
        closeToggle.style.display = "none";
        openToggle.style.display = "block";
    }
});

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }

  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }