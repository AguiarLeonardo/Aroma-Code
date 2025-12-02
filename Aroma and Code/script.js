document.addEventListener('DOMContentLoaded', () => {
   
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".navbar__links");
    const navLinks = document.querySelectorAll(".nav-link");


    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    });


    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            hamburger.classList.remove("active");
            navMenu.classList.remove("active");
        });
    });


    const ctaButton = document.querySelector('.btn-cta');
    if(ctaButton) { 
        ctaButton.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = ctaButton.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    }
});