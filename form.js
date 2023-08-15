let inputPassword = document.getElementById("password");
let inputPassword2 = document.getElementById("password2");
let passwordDiv = document.querySelector(".pass-msg");
let inputEmail = document.getElementById("email");
let regExp = /[a-zA-Z0-9.\-_!?]+@[a-zA-Z0-9.\-_!?]+\.[a-zA-Z]{2,3}/;

inputPassword.addEventListener("input", comparePassword);
inputPassword2.addEventListener("input", comparePassword);
inputEmail.addEventListener("input", comparePattern);


function comparePassword (e){
    if(inputPassword.value.length === 0 && inputPassword2.value.length === 0) {
        inputPassword.classList.remove("error");
        inputPassword.classList.remove("valid");
        inputPassword2.classList.remove("error");
        inputPassword2.classList.remove("valid");
        passwordDiv.textContent = "";
    } else if (inputPassword.value === inputPassword2.value){

        inputPassword.classList.remove("error");
        inputPassword.classList.add("valid");
        inputPassword2.classList.remove("error");
        inputPassword2.classList.add("valid");
        passwordDiv.textContent = "Perfect match";
        passwordDiv.classList.add("green-para");
        passwordDiv.classList.remove("red-para");

    } else {
        inputPassword.classList.remove("valid");
        inputPassword.classList.add("error");
        inputPassword2.classList.remove("valid");
        inputPassword2.classList.add("error");
        passwordDiv.textContent = "Passwords do not match";
        passwordDiv.classList.add("red-para");
        passwordDiv.classList.remove("green-para");
    }
}

function comparePattern(e) {
    if(inputEmail.value.length === 0 ){
        inputEmail.classList.remove("error");
        inputEmail.classList.remove("valid");
    } else if(inputEmail.value.match(regExp)){
        inputEmail.classList.add("valid");
        inputEmail.classList.remove("error");
    } else {
        inputEmail.classList.add("error");
        inputEmail.classList.remove("valid");
    }
}
