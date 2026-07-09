document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("theme-toggle");
    const contactForm = document.getElementById("devContactForm");
    const formFeedback = document.getElementById("formFeedback");

    // 1. Dark/Light Theme Switch
    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("light-theme");
    });

    // 2. Client Side Form Submission Interception
    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = document.getElementById("userName").value.trim();
        const email = document.getElementById("userEmail").value.trim();
        const message = document.getElementById("userMessage").value.trim();

        if (name && email && message) {
            // Display clean confirmation notice
            formFeedback.textContent = `Thank you, ${name}! Your engineering pipeline request has been received.`;
            formFeedback.className = "form-feedback success";
            
            // Clear input fields 
            contactForm.reset();
        }
    });
});
