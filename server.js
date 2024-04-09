// Import
const express = require("express");
const app = express();
const bcrypt = require("bcrypt"); // Importing bcrypt package

const users = [];

// Serve static files
app.use(express.static(__dirname + '/public'));

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: true }));
 

// Route for home page
app.get('/', (req, res) => {
    res.render("index.ejs")
})
app.get('#login', (req, res) => {
    res.render("#login")
})

app.get('#register', (req, res) => {
    res.render("#register")
})




// Route for registration form submission
app.post("#register", async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        users.push({
            id: Date.now().toString(),
            name: req.body.name,
            surname: req.body.surname,
            email: req.body.email,
            password: hashedPassword,
        });
        console.log(users); // Display newly registered user in the console
        res.redirect("#login"); // Redirect to login after successful registration
        
    } catch (e) {
        console.log(e);
        res.redirect("#register"); // Redirect back to the register page if there's an error
    }
});


// Start the server
app.listen(3000, () => {
    console.log("Server started on port 3000");

    
})
;
