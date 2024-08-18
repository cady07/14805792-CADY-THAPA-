document.addEventListener("DOMContentLoaded", () => {
    const registrationForm = document.getElementById('registrationForm');

    registrationForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        // Simulate form submission (you would replace this with actual backend logic)
        console.log("Form Submitted", { username, email, password });
        alert("Registration successful!");

        // Optionally, redirect to another page
        // window.location.href = "login.html";
    });
});
