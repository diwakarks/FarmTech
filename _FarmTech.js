// Check if the user is logged in when the page loads
window.onload = function() {
    const loggedInUser = localStorage.getItem('loggedInUser');
    
    if (loggedInUser) {
      // If the user is logged in, show Profile and Logout sections, hide Login
      document.getElementById('login-section').style.display = 'none';  // Hide Login
      document.getElementById('profile-section').style.display = 'block';  // Show Profile
      document.getElementById('logout-section').style.display = 'block';  // Show Logout
    } else {
      // If not logged in, show Login section and hide Profile/Logout
      document.getElementById('login-section').style.display = 'block';  // Show Login
      document.getElementById('profile-section').style.display = 'none';  // Hide Profile
      document.getElementById('logout-section').style.display = 'none';  // Hide Logout
    }
  };
  
  // Event listener for the logout button
  document.getElementById('logout-section').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default link behavior
    
    // Remove the logged-in user from localStorage
    localStorage.removeItem('loggedInUser');
    
    // Hide Profile and Logout sections, show Login
    document.getElementById('login-section').style.display = 'block';  // Show Login
    document.getElementById('profile-section').style.display = 'none';  // Hide Profile
    document.getElementById('logout-section').style.display = 'none';  // Hide Logout
  
    // Optionally, redirect the user to the login page or any other page
    window.location.href = '_FarmTech.html';  // Redirect to the FarmTech homepage (or wherever you want)
  });
