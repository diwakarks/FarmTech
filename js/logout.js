// Logout script (e.g., _logout.js)
document.getElementById("logout-button").addEventListener("click", function() {
    // Clear the logged-in user's data from localStorage
    localStorage.removeItem('loggedInUser');
    
    // Redirect to the initial page (e.g., home page or _FarmTech.html)
    window.location.href = 'index.html';  // You can replace this with your initial page URL
  });
  