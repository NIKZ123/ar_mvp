const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "user" && password === "web_dev") {
        // alert("You have successfully logged in.");
        // myFunction();
        window.location.href = "story.html";
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})

// function myFunction() {
//     location.replace("story.html")
//   }