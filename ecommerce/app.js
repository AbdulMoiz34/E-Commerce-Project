
let users = JSON.parse(localStorage.getItem("users")) || [];
let notyf = new Notyf()
let signup = document.getElementById("signup")
addEventListener("submit", function (e) {

    e.preventDefault()
let username = document.getElementById("username").value
let email = document.getElementById("email").value
let password = document.getElementById("password").value

    let NewUser={
        email: email,
        password: password,
        username: username

    }
    users.push(NewUser)
    localStorage.setItem("users", JSON.stringify(users))
    // users.some(user => {
    //     if (user.email === email.value && user.password === password.value) {
    //         window.location.href = "login.html"
    //     }

    // })
    if (username.length <3) {
        notyf.error("Username must be more than 3 characters")
        return
     }
     if (password.length <6) {
        notyf.error("Password must be more than 6 characters")
        return
     }
    window.location.href = "login.html"



})
function reset() {
    localStorage.clear(); // Yeh pura localStorage ka data hata deta hai
    alert("Local Storage has been reset!"); // User ko message show karta hai
  }
  