function validateForm() {

    var username = document.getElementById("username").value.trim();
    var email = document.getElementById("email").value.trim();
    var phone = document.getElementById("phone").value.trim();
    var password = document.getElementById("password").value.trim();
    var confirmPassword = document.getElementById("confirmPassword").value.trim();


    if (username === "") {
        alert("Username is required.");
        return false;
    }

    var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    if (!/^\d{10}$/.test(phone)) {
        alert("Phone number must be 10 digits.");
        return false;
    }

    var passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$&#])[A-Za-z\d@$&#]{7,}$/;
    if (!passwordRegex.test(password)) {
        alert("Password must be at least 7 characters long and include 1 uppercase varter, 1 digit, and 1 special character (&, $, #, @).");
        return false;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return false;
    }

    alert("Registration successful!");
    return true;
}