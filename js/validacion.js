function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}


function passwordsAreEqual(){
    if (document.getElementById("password1").value !== document.getElementById("password2").value) {
        showAlertError();
        // console.log("incorrecto");
    } else if (document.getElementById("password1").value === document.getElementById("password2").value) {
        showAlertSuccess();
        // console.log("confirmación");

    }
}

let form = document.querySelector("form");
form.addEventListener("submit", passwordsAreEqual);


