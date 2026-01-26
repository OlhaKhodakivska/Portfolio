// 1. Dynamic Year Logic
const yearSpan = document.getElementById("year");
const currentYear = new Date().getFullYear();
yearSpan.textContent = currentYear;

// 2. Hamburger Menu Logic
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    // Toggle active class for visual changes
    navLinks.classList.toggle("active");
    hamburger.classList.toggle("active");
});

// Close menu when a link is clicked (UX best practice)
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        hamburger.classList.remove("active");
    });
});

// 3. Form Submission Logic
const form = document.getElementById("contact-form");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    console.log("Message Received:", data);
    alert("Message sent successfully! Check console for details.");
    form.reset();
});