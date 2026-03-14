// 1. Initialize EmailJS
(function () {
    emailjs.init({
        publicKey: "rI2xP3kCs2nw6fYaT",
    });
})();

// 2. Dynamic Year
document.getElementById("year").textContent = new Date().getFullYear();

// 3. Hamburger Menu
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    hamburger.classList.toggle("active");
});

// 4. Form Submission з EmailJS
const contactForm = document.getElementById("contact-form");
const submitBtn = document.getElementById("submit-btn");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

// Disable the submit button to prevent multiple submissions
    submitBtn.textContent = "Sending...";
    submitBtn.disabled = true;

// Send the form data using EmailJS
    const serviceID = "service_uq9ml5i";
    const templateID = "template_3hbwjbq";

    emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
            submitBtn.textContent = "Send Message";
            submitBtn.disabled = false;
            alert("Success! I will contact you soon.");
            contactForm.reset();
        }, (err) => {
            submitBtn.textContent = "Send Message";
            submitBtn.disabled = false;
            alert("Ops! Something went wrong. Check console.");
            console.error("EmailJS Error:", err);
        });
});