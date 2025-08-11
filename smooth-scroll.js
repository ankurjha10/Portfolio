// Smooth scroll to top function
function scrollToTop(duration = 1000) {
    const startPosition = window.pageYOffset;
    let startTime = null;

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);
        const ease = 1 - Math.pow(1 - progress, 3); // EaseOutCubic
        window.scrollTo(0, startPosition * (1 - ease));

        if (timeElapsed < duration) {
            requestAnimationFrame(animation);
        }
    }

    requestAnimationFrame(animation);
}

// Show/Hide button on scroll
const scrollBtn = document.getElementById("scrollToTop");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 300) {
        scrollBtn.classList.add("show");
        scrollBtn.classList.remove("hide");
    } else {
        scrollBtn.classList.add("hide");
        setTimeout(() => {
            if (scrollBtn.classList.contains("hide")) {
                scrollBtn.classList.remove("show");
            }
        }, 300);
    }
});

// Click event
scrollBtn.addEventListener("click", () => {
    scrollToTop(1000);
});