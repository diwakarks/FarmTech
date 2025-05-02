// Get stored user details from localStorage
const storedUser = JSON.parse(localStorage.getItem('userDetails'));

document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const inputUsername = document.getElementById('username').value;
    const inputPassword = document.getElementById('password').value;

    if (storedUser) {
        // Compare the entered username and password with stored ones
        if (inputUsername === storedUser.username && inputPassword === storedUser.password) {
            // Success
            localStorage.setItem('loggedInUser', JSON.stringify(storedUser)); // Save the logged in user
            window.location.href = 'index.html'; // Redirect to your main page
        } else {
            // Failed login
            document.getElementById('error-message').style.display = 'block';
        }
    } else {
        // No user registered yet
        document.getElementById('error-message').innerText = "No registered user found. Please register first.";
        document.getElementById('error-message').style.display = 'block';
    }
});
