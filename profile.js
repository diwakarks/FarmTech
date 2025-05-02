// Load user data when the profile page is loaded
window.onload = function() {
    const user = JSON.parse(localStorage.getItem('userDetails'));

    // If no user data is found, redirect to login page
    if (!user) {
        window.location.href = 'login.html'; // Redirect to login page if no user is logged in
        return;
    }

    // Set user data in profile page
    document.getElementById('profile-name').textContent = user.name;
    document.getElementById('profile-email').textContent = user.email;
    document.getElementById('profile-phone').textContent = user.phone;
    
    // Handle background image from stored URL (if available)
    const profileImgContainer = document.getElementById('profile-img-container');
    if (user.image) {
        profileImgContainer.style.backgroundImage = `url(${user.image})`;
    }

    // Enable editing when Edit Profile is clicked
    document.getElementById('edit-btn').addEventListener('click', function() {
        document.getElementById('profile-name').setAttribute('contenteditable', 'true');
        document.getElementById('profile-email').setAttribute('contenteditable', 'true');
        document.getElementById('profile-phone').setAttribute('contenteditable', 'true');
        
        document.getElementById('save-btn').style.display = 'block'; // Show Save button
        document.getElementById('edit-btn').style.display = 'none'; // Hide Edit button
    });

    // Save changes made to the profile
    document.getElementById('save-btn').addEventListener('click', function() {
        user.name = document.getElementById('profile-name').textContent;
        user.email = document.getElementById('profile-email').textContent;
        user.phone = document.getElementById('profile-phone').textContent;

        // Save the updated user data to localStorage
        localStorage.setItem('userDetails', JSON.stringify(user));

        alert('Profile updated successfully!');

        // Disable editing after save and switch back the buttons
        document.getElementById('profile-name').removeAttribute('contenteditable');
        document.getElementById('profile-email').removeAttribute('contenteditable');
        document.getElementById('profile-phone').removeAttribute('contenteditable');
        
        document.getElementById('save-btn').style.display = 'none'; // Hide Save button
        document.getElementById('edit-btn').style.display = 'block'; // Show Edit button
    });

    // Logout functionality
    document.getElementById('logout-btn').addEventListener('click', function() {
        // Clear logged-in user data from localStorage
        localStorage.removeItem('userDetails');

        // Redirect to login page
        window.location.href = '_login.html';
    });
};
