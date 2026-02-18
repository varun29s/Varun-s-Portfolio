// Typing animation
var typed = new Typed('#element', {
    strings: [
        "I am a Web Developer.",
        "I am a Software Engineer.",
        "I love building websites."
    ],
    typeSpeed: 60,
    backSpeed: 40,
    loop: true
});

// Scroll reveal animation
window.addEventListener("scroll", reveal);

function reveal() {
    const reveals = document.querySelectorAll(".reveal");

    reveals.forEach((el) => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        const visible = 100;

        if (elementTop < windowHeight - visible) {
            el.classList.add("active");
        }
    });
}
