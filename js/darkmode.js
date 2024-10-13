const darkModeToggle = document.getElementById('dark-mode-toggle');
const modeIcon = document.getElementById('mode-icon');

darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    // Change the icon based on the current mode
    if (document.body.classList.contains('dark-mode')) {
        modeIcon.classList.replace('fa-moon', 'fa-sun'); // Change to sun icon for dark mode
    } else {
        modeIcon.classList.replace('fa-sun', 'fa-moon'); // Change to moon icon for light mode
    }
});
