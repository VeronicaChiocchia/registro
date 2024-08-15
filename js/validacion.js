function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

let password2 = document.getElementById("password2");
let password1 = document.getElementById("password1");

 
if (password1Value !== password2Value) {
    showAlertError();
} else {
    showAlertSuccess();
}

}

let regBtn = document.getElementById("regBtn")
regBtn.addEventListener("click", passwordsAreEqual);
