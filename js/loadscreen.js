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
    { t: "Eli Murray ", ms: 200 },
    { t: "Eli Murray P", ms: 150 },
    { t: "Eli Murray Po", ms: 150 },
    { t: "Eli Murray Por", ms: 150 },
    { t: "Eli Murray Port", ms: 150 },
    { t: "Eli Murray Portf", ms: 150 },
    { t: "Eli Murray Portfo", ms: 150 },
    { t: "Eli Murray Portfol", ms: 150 },
    { t: "Eli Murray Portfoli", ms: 150 },
    { t: "Eli Murray Portfolio", ms: 150 },
    { t: "Eli Murray Portfolio", ms: 300 }
];
let stepDenominator = 1;
if (window.localStorage.stepDenominator)
    stepDenominator = window.localStorage.stepDenominator;
let i = 0;
let update = () => {
    let step = anim[i];
    header.innerText = step.t;
    i++;

    if (i < anim.length)
        setTimeout(update, step.ms / stepDenominator);
    else {
        // Fade out the loading screen after the text is displayed
        setTimeout(() => {
            document.getElementById('loading-screen').style.animation = 'fadeOut 1s forwards';
            document.getElementById('main-content').style.opacity = 1;

            // After the fade-out animation completes, hide the loading screen
            setTimeout(() => {
                document.getElementById('loading-screen').style.display = 'none';
            }, 1000); // Wait for the fadeOut animation to complete (1 second)
            
        }, 500);

        window.localStorage.stepDenominator = 2; // Adjust the speed for the next time the user visits
    }
};
update();
