document.addEventListener("DOMContentLoaded", function() {
    const signupButton = document.getElementById("signup-button");
    if (signupButton) {
        signupButton.addEventListener("click", function(event) {
            event.preventDefault(); // Prevent the form from submitting

            // Get form values
            const nameField = document.getElementById("name");
            const phoneField = document.getElementById("phone_number");
            const emailField = document.getElementById("email");
            const passwordField = document.getElementById("password");
            const confirmPasswordField = document.getElementById("confirm-password");

            const name = nameField.value.trim();
            const phoneNumber = phoneField.value.trim();
            const email = emailField.value.trim();
            const password = passwordField.value;
            const confirmPassword = confirmPasswordField.value;

            // Validation logic
            let errors = [];

            if (name === "") {
                errors.push("Name is required.");
            }

            const phoneRegex = /^\d{10}$/;
            if (!phoneRegex.test(phoneNumber)) {
                errors.push("Phone number must be 10 digits.");
            }

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                errors.push("Invalid email format.");
            }

            if (password.length < 6) {
                errors.push("Password must be at least 6 characters long.");
            }

            if (password !== confirmPassword) {
                errors.push("Passwords do not match.");
            }

            if (errors.length > 0) {
                alert("Please fix the following errors:\n" + errors.join("\n"));
            } else {
                alert("Form submitted successfully!");

                // Clear all fields
                nameField.value = "";
                phoneField.value = "";
                emailField.value = "";
                passwordField.value = "";
                confirmPasswordField.value = "";
            }
        });
    } else {
        console.error("Signup button not found in the DOM.");
    }
});