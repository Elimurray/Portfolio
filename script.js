function smoothScrolling() {
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });
}


smoothScrolling();


window.addEventListener('load', function() {
    const loadingScreen = document.getElementById('loading-screen');
    const mainContent = document.getElementById('main-content');
   
    // Show loading screen for at least 1.5 seconds and animate fade out
    const timer = setTimeout(() => {
        loadingScreen.style.animation = 'fadeOut 1s forwards'; // Fade out animation

        // After fade out, hide loading screen and show main content
        setTimeout(() => {
            loadingScreen.style.display = 'none'; 
            mainContent.style.display = 'block';  
        }, 1000); // Wait for fade out to complete before hiding
    }, 1500); 
});

