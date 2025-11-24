const menuIcon = document.querySelector('#menu-icon');
const navMenu = document.querySelector('.nav-links');

menuIcon.onclick = () => {
    navMenu.classList.toggle('active');
};


document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contact-form");
    const statusText = document.getElementById("contact-status");

    if (!contactForm) return;

    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();
        statusText.textContent = "Sending...";
        
        emailjs
          .sendForm("service_porfolio", "template_x5jczgs", "#contact-form")
          .then(
            function () {
                statusText.textContent = "✅ Message sent successfully!";
                contactForm.reset();
            },
            function (error) {
                console.error("FAILED...", error);
                statusText.textContent = "❌ Failed to send. Please try again.";
            }
          );
    });
});

