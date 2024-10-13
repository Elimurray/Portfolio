let header = document.querySelector('.loader h1');
let anim = [
    { t: "E", ms: 150 },
    { t: "El", ms: 150 },
    { t: "Eli", ms: 150 },
    { t: "Eli ", ms: 150 },
    { t: "Eli M", ms: 150 },
    { t: "Eli Mu", ms: 150 },
    { t: "Eli Mur", ms: 150 },
    { t: "Eli Murr", ms: 150 },
    { t: "Eli Murra", ms: 150 },
    { t: "Eli Murray", ms: 150 },
    { t: "Eli Murray", ms: 200 },

];

let i = 0;
let underscoreVisible = true; // Flag to track visibility of underscore
let underscoreToggle; // Variable to hold the interval ID

let update = () => {
    let step = anim[i];
    header.innerHTML = `${step.t}<span style="color: purple;">${underscoreVisible ? '_' : '&nbsp;'}</span>`; // Show or hide underscore
    i++;

    if (i < anim.length) {
        setTimeout(update, step.ms);
    } else {
        // Fade out the loading screen after the text is displayed
        setTimeout(() => {
            clearInterval(underscoreToggle); // Stop toggling underscore
            document.getElementById('loading-screen').style.animation = 'fadeOut 1s forwards';
            document.getElementById('main-content').style.opacity = 1;

            setTimeout(() => {
                document.getElementById('loading-screen').style.display = 'none';
            }, 1000);
        }, 500);
    }
};

// Toggle underscore visibility
underscoreToggle = setInterval(() => {
    underscoreVisible = !underscoreVisible;
}, 500);

update();
