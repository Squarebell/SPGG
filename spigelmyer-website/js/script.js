document.addEventListener('DOMContentLoaded', function() {

    // --- Basic Active Nav Link Highlighting ---
    // Get the current page filename (e.g., "index.html", "about.html")
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('header nav ul li a');

    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        // Remove active class from all links first
        link.classList.remove('active');
        // Add active class if the link's href matches the current page
        if (linkPage === currentPage) {
            link.classList.add('active');
        }
    });

    // --- Update Footer Year ---
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // --- Optional: Smooth Scrolling for internal links ---
    // Example: If you have links like <a href="#sectionId">...</a>
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            // Ensure it's a valid ID selector and not just '#'
            if (targetId.length > 1 && document.querySelector(targetId)) {
                e.preventDefault(); // Prevent default jump
                document.querySelector(targetId).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // --- Add mobile menu toggle logic here if needed ---
    // This would involve selecting a menu button and the nav element,
    // then toggling a class (e.g., 'nav-open') on click.
    // Example structure (requires corresponding HTML/CSS):
    /*
    const menuToggle = document.getElementById('mobile-menu-toggle'); // Needs an element with this ID
    const mainNav = document.querySelector('header nav'); // Or the specific UL/container

    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', () => {
            mainNav.classList.toggle('nav-open'); // You'd need CSS for .nav-open
        });
    }
    */


    console.log("Spigelmyer custom script loaded.");

});