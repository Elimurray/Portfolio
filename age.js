// Age Calculation in Decimal
function calculateAge() {
    const birthDate = new Date('2004-05-31'); // Replace with your birth date
    const today = new Date();
    
    // Calculate age in years and months
    const ageInYears = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    const dayDiff = today.getDate() - birthDate.getDate();
    
    // Adjust for months and days
    let ageDecimal = ageInYears;
    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        ageDecimal--;
    }

    const ageInMonths = today.getMonth() - birthDate.getMonth() + (ageDecimal * 12);
    const ageInDays = (today - birthDate) / (1000 * 60 * 60 * 24 * 365.25); // Divide by 365.25 for leap years

    // Return the age with 10 decimal places
    return ageInDays.toFixed(10);
}

function updateAgeDisplay() {
    const ageDisplay = document.getElementById('age-display');
    ageDisplay.textContent = calculateAge(); // Update age display
}

// Update the age display every second
setInterval(updateAgeDisplay, 1000);

// Call updateAgeDisplay once immediately
updateAgeDisplay();
