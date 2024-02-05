
let signIN = document.querySelector('.signin');
let signUP = document.querySelector('.signup');
let LoginContainer = document.querySelector(".login-container");
let Form = document.querySelector(".form");
let container = document.querySelector(".container");
let signupContainer = document.querySelector(".register");




signUP.onclick = () => {
    // alert("welcome");
    LoginContainer.classList.add("active");
    Form.style.cssText = "background-color:red; transition: 0.5s ease-in-out";
    container.style.cssText = "background-color:tomato ; transition: 0.5s ease-in-out";
    signupContainer.style.cssText = "display:block; transition-delay: 0.5s";


}
signIN.onclick = () => {
    LoginContainer.classList.remove("active");
    Form.style.cssText = "background-color: rgb(0, 204, 255); transition: 0.5s ease-in-out";
    container.style.cssText = "background-color:rgb(58, 216, 255); transition: 0.5s ease-in-out";
    signupContainer.style.cssText = "display:none; transition-delay: 0.5s";
}

//Validation of this form
const loginForm = document.querySelector(".frm");
const registerForm = document.querySelector(".up-frm")
let signinUsername = document.querySelector(".signin-uname");
let signinPassword = document.querySelector(".signin-pw");
let signupUsername = document.querySelector(".signup-uname");
let signupMail = document.querySelector(".signup-mail");
let signupPassword = document.querySelector(".signup-pw");
let signupConformPassword = document.querySelector(".signup-cpw");
let loginButton = document.querySelector("#btn1");
let registerButton = document.querySelector("#btn2");

loginForm.addEventListener("submit", (e) => {
    // e.preventDefault();
    const nameValue = signinUsername.value.trim();
    const passwordValue = signinPassword.value.trim();
    if (nameValue == "") {
        e.preventDefault();
        alert("please Enter username");
        signinUsername.focus();
        return false;
    }
    if (!isNaN(nameValue)) {
        e.preventDefault();
        alert("please Enter a validate username");
        signinUsername.focus();
        return false;
    }

    if (passwordValue == "") {
        e.preventDefault();
        alert("please Enter password");
        signinPassword.focus();
        return false;
    }
    if (passwordValue.length < 8) {
        e.preventDefault();
        alert("please Enter valid password");
        signinPassword.focus();
        return false;
    }
});

registerForm.addEventListener("submit", (e) => {
    // e.preventDefault();
    const userNameValue = signupUsername.value.trim();
    const userMailValue = signupMail.value.trim();
    const registerPasswordValue = signupPassword.value.trim();
    const ConformPasswordValue = signupConformPassword.value.trim();

    if (!isNaN(userNameValue)) {
        e.preventDefault();
        alert("Enter a valid username");
        signupUsername.focus();
        return false;
    }

    if (registerPasswordValue.length < 8) {
        e.preventDefault();
        alert("password must be 8 digits");
        signupPassword.focus();
        return false;
    }

    if (ConformPasswordValue != registerPasswordValue) {
        e.preventDefault();
        alert("password does not match");
        signupConformPassword.focus();
        return false;
    }

    // alert("Data successfully registered");
});