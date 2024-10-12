document.addEventListener('DOMContentLoaded', function () {
    const contactLink = document.querySelector('nav ul li a[href="#contact"]');
    const socials = document.querySelector('.social-icons');

    contactLink.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default anchor click behavior

        // Add scale-up class to social icons
        socials.classList.add('scale-up');

        // Remove scale-up effect after 0.5 seconds
        setTimeout(() => {
            socials.classList.remove('scale-up');
            
        }, 500); // Match this duration to the CSS transition duration
    });
});
