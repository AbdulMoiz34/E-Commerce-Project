
const notyf = new Notyf();

let login = document.getElementById("login")
login.addEventListener("click", function (event) {
    event.preventDefault();

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Find the matching user
    let matchedUser = users.find(function (user) {
        return user.email === email && user.password === password;
    });

    if (email.length < 6) {
        notyf.error("Incorrect email or password");
    } else if (password.length < 6) {
        notyf.error("Incorrect password");
    } else if (matchedUser) {
        notyf.success("Login successful!");
        window.location.href = "homepage.html";
    } else {
        notyf.error("Incorrect email or password");
    }
    
});
