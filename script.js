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