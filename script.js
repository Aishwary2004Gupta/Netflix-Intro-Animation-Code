document.addEventListener("DOMContentLoaded", () => {
    const credits = document.getElementById('credits');
  
    // Trigger "show" after 3.5 seconds (adjust based on your animation duration)
    setTimeout(() => {
      credits.classList.add('show');
    }, 3500);
  });
  