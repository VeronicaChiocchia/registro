function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

let password1 = document.getElementById("password1");
let password1Value = password1.value;
let password2 = document.getElementById("password2");
let password2Value = password2.value;
let regBtn = document.getElementById("regBtn")


function passwordsAreEqual(){
    if (password1Value !== password2Value) {
        showAlertError();
    } else {
        showAlertSuccess()
        console.log
    }
}

regBtn.addEventListener("click", passwordsAreEqual);

