function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}


let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let email = document.getElementById("email");
let contraseña = document.getElementById("password1");
let repetircontraseña = document.getElementById("password2")

let buttonreg = document.getElementById("regBtn");
buttonreg.addEventListener("click",function(){
    if (nombre.value === "" || apellido.value === "" || email.value === "" || contraseña.value === "" || repetircontraseña.value ==="") {
        showAlertError();
    } else{
        showAlertSuccess();
    }
});