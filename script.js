// Smooth Scroll Effect
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href'))
            .scrollIntoView({
                behavior: 'smooth'
            });
    });
});


// Fade-in Animation
const sections = document.querySelectorAll("section");

// Pehle visible section ko show karo
function revealSections() {
    sections.forEach(section => {
        const top = section.getBoundingClientRect().top;

        if (top < window.innerHeight - 100) {
            section.style.opacity = "1";
            section.style.transform = "translateY(0)";
        }
    });
}

// Initial styles
sections.forEach(section => {
    section.style.opacity = "0";
    section.style.transform = "translateY(30px)";
    section.style.transition = "all 0.8s ease";
});

// Page load par bhi run hoga
window.addEventListener("load", revealSections);

// Scroll par bhi run hoga
window.addEventListener("scroll", revealSections);