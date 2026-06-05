function toggleMenu() {
    document.querySelector('.nav-links').classList.toggle('active');
}
document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    hamburger.addEventListener("click", function () {
        navLinks.classList.toggle("active");

        // Toggle Hamburger Animation (optional)
        hamburger.classList.toggle("open");
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    hamburger.addEventListener("click", function () {
        navLinks.classList.toggle("active");
        hamburger.classList.toggle("open");
    });

    // ✅ Smooth Scroll Fix for Mobile
    const links = document.querySelectorAll(".nav-links a");
    links.forEach((link) => {
        link.addEventListener("click", function () {
            navLinks.classList.remove("active");
            hamburger.classList.remove("open");
        });
    });
});

