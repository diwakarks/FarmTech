// Registration logic
document.getElementById('register-form').addEventListener('submit', function(event) {
  event.preventDefault();  // Prevent form submission

  // Get user details from the form
  const name = document.getElementById('name').value;
  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const password = document.getElementById('password').value;

  // Save the user data to localStorage
  const user = {
      name,
      username,
      email,
      phone,
      password, // In real apps, avoid saving passwords in localStorage
  };

  localStorage.setItem('userDetails', JSON.stringify(user));  // Save user data
  alert('Registration successful!');
  window.location.href = 'login.html';  // Redirect to login page after successful registration
});
