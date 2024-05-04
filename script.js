<<<<<<< HEAD
window.addEventListener("scroll", function () {
  var navbar = document.getElementById("navbar");
  var scrollThreshold = 40; // Adjust this value to set the scroll threshold

  if (window.scrollY > scrollThreshold) {
    navbar.classList.add("shadow");
  } else {
    navbar.classList.remove("shadow");
  }
});

// Sticky Navbar
let header = document.querySelector("header");
let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  header.classList.toggle("shadow", window.scrollY > 0);
});

menu.onclick = () => {
  navbar.classList.toggle("active");
};
window.onscroll = () => {
  navbar.classList.remove("active");
};

// Dark Mode
let darkmode = document.querySelector("#darkmode");

darkmode.onclick = () => {
  if (darkmode.classList.contains("bx-moon")) {
    darkmode.classList.replace("bx-moon", "bx-sun");
    document.body.classList.add("active");
  } else {
    darkmode.classList.replace("bx-sun", "bx-moon");
    document.body.classList.remove("active");
  }
};
=======
// Get a reference to the navbar element
const navbar = document.querySelector('#navbar');

// Define the scroll threshold at which you want to change the navbar styling
const scrollThreshold = 80; // Adjust this value as needed

// Function to toggle the 'scrolled' class on the navbar based on scroll position
function toggleNavbarStyling() {
    if (window.scrollY >= scrollThreshold) {
        navbar.classList.add('scrooled');
    } else {
        navbar.classList.remove('scrooled');
    }
}

// Add a scroll event listener to the window
window.addEventListener('scroll', toggleNavbarStyling);

// Initial call to set the navbar styling based on the initial scroll position
toggleNavbarStyling();
>>>>>>> 53cf1d4564ddfbbefe9060e77b8d98c3d6df3c7a
