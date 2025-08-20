let header = document.querySelector(".loader h1");

// Immediately start the fade-out process
setTimeout(() => {
  document.getElementById("loading-screen").style.animation =
    "fadeOut 1s forwards";
  document.getElementById("main-content").style.opacity = 1;

  setTimeout(() => {
    document.getElementById("loading-screen").style.display = "none";
  }, 1000);
}, 100); // Short delay before fading out
