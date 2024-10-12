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
    setTimeout(() => {
        loadingScreen.style.animation = 'fadeOut 1s forwards'; // Fade out animation

        // After fade out, hide loading screen and show main content
        setTimeout(() => {
            loadingScreen.style.display = 'none'; 
            mainContent.style.display = 'block';  
        }, 1000); // Wait for fade out to complete before hiding
    }, 1500); 
});

// Age Calculation in Decimal
function calculateAge() {
    const birthDate = new Date('2000-01-01'); // Replace with your birth date
    const today = new Date();
    
    // Calculate age in years and months
    const ageInYears = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    
    // Adjust for months and calculate decimal age
    const ageDecimal = monthDiff < 0 
        ? ageInYears - 1 + (monthDiff + 12) / 12
        : ageInYears + monthDiff / 12;

    // Return the age with 10 decimal places
    return ageDecimal.toFixed(10);
}

function updateAgeDisplay() {
    const ageDisplay = document.getElementById('age-display');
    ageDisplay.textContent = calculateAge(); // Update age display

    // Use requestAnimationFrame for smooth continuous updating
    requestAnimationFrame(updateAgeDisplay);
}

// Start updating the age display immediately on page load
updateAgeDisplay();
