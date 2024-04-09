// Function to create a typing effect on a given element with specified text and delay
function typeEffect(element, text, delay = 100) {
    let charIndex = 0;
    let blinkerSpan = document.createElement('span');
    blinkerSpan.textContent = '|';
    element.appendChild(blinkerSpan);

    function type() {
        if (charIndex < text.length) {
            element.textContent += text.charAt(charIndex);
            charIndex++;
            setTimeout(type, delay);
        }
    }
    type();
}

// Usage of the typeEffect function
const titleElement = document.getElementById('titleblink');
const titleText = 'PARALINK';
typeEffect(titleElement, titleText, 100);

// Event listener to focus on search input when mouseover on search icon
document.getElementById('search-icon').addEventListener('mouseover', function() {
    document.getElementById('search-input').focus();
});


// Event listener to control the display of login and register pages on load
document.addEventListener('DOMContentLoaded', function() {
    var loginPage = document.getElementById('login_page');
    var loginButton = document.querySelector('.login_button');

    loginButton.onclick = function() {
        loginPage.classList.add('active');
    };

    window.onclick = function(event) {
        if (event.target == loginPage) {
            loginPage.classList.remove('active');
        }
    };
});

document.addEventListener('DOMContentLoaded', function() {
    var registerPage = document.getElementById('register_page');
    var registerButton = document.querySelector('.register_button');

    registerButton.onclick = function() {
        registerPage.classList.add('active');
    };

    window.onclick = function(event) {
        if (event.target == registerPage) {
            registerPage.classList.remove('active');
        }
    };
});


// Function to show the registration form
function showRegister() {
    var loginPage = document.getElementById('login_page');
    var registerPage = document.getElementById('register_page');

    loginPage.classList.remove('active');
    setTimeout(() => {
        registerPage.classList.add('active');
    }, 500); // Adjust timing to match CSS transitions

    loginPage.classList.remove('active');
    setTimeout(() => {
        registerPage.classList.add('active');
    }, 500); // Adjust timing to match CSS transitions


}

function showLogin() {
    var registerPage = document.getElementById('register_page');
    var loginPage = document.getElementById('login_page');

    registerPage.classList.remove('active');
    setTimeout(() => {
        loginPage.classList.add('active');
    }, 500); // Adjust timing to match CSS transitions
}

function showLogin() {
    var registerPage = document.getElementById('register_page');
    var loginPage = document.getElementById('login_page');

    registerPage.classList.remove('active');
    setTimeout(() => {
        loginPage.classList.add('active');
    }, 500); // Adjust timing to match CSS transitions
}



// Event listeners for register and login links
document.addEventListener('DOMContentLoaded', function() {
    var registerLink = document.querySelector('.register_link');
    registerLink.addEventListener('click', function() {
        showRegister();
    });

    var loginLink = document.querySelector('.login-link');
    loginLink.addEventListener('click', function() {
        showLogin();
    });
});

// Express server setup
const express = require('express');
const app = express();
const port = 3000;

// Function to simulate a database query for schools
function searchSchools(query) {
    return [
        { id: 1, text: "Global School of Science" },
        { id: 2, text: "International Academy of Arts" },
        { id: 3, text: "Worldwide Business College" }
    ].filter(school => school.text.toLowerCase().includes(query.toLowerCase()));
}

// API endpoint to get schools based on search query
app.get('/api/schools', (req, res) => {
    const query = req.query.search || '';
    const schools = searchSchools(query);
    res.json({ items: schools });
});

// Start the server
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});

// Initialize select2 for school selection with AJAX call to server for search
$(document).ready(function() {
    $('#school-select').select2({
        placeholder: 'Select or search for a school',
        ajax: {
            url: '/api/schools',
            dataType: 'json',
            delay: 250,
            data: function (params) {
                return {
                    search: params.term // search term
                };
            },
            processResults: function (response) {
                return {
                    results: response.items
                };
            },
            cache: true
        },
        minimumInputLength: 1
    });
});

// Event listener for dynamic label movement on input fields
document.addEventListener('DOMContentLoaded', () => {
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    function checkInput(input) {
        const label = input.nextElementSibling;
        if (input.value.length > 0) {
            label.classList.add('active');
        } else {
            label.classList.remove('active');
        }
    }

    emailInput.addEventListener('input', () => checkInput(emailInput));
    passwordInput.addEventListener('input', () => checkInput(passwordInput));
});






document.addEventListener('DOMContentLoaded', function() {
    // Check the hash on page load
    handleHashChange(window.location.hash);

    // Listen for hash changes
    window.addEventListener('hashchange', function() {
        handleHashChange(window.location.hash);
    });
});
