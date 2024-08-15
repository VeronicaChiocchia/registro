function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}



let inputArray = document.querySelectorAll("input"); //obtengo los input
let checkbox = document.getElementById("terminos"); //obtengo el checkbox
let regBtn = document.getElementById("regBtn"); //obtengo el botón

function checkboxValidation(){ //validar checkbox
    if(!checkbox.checked){
        showAlertError();
    }
}

function inputValidation(){ //validar campos

    let count = 0;
    for (input of inputArray){
        if(input.value==""){
            count ++;
        } 
    }
    if (count !== 0){
        showAlertError();
    }
}

// regBtn.addEventListener("click", function(){
//     inputValidation();
//     checkboxValidation()
// })



function passwordsAreEqual(){
    if (document.getElementById("password1").value !== document.getElementById("password2").value) {
        showAlertError();
        // console.log("incorrecto");
    } else if (document.getElementById("password1").value === document.getElementById("password2").value) {
        showAlertSuccess();
        // console.log("confirmación");
    }
}

function fullValidation(){
    inputValidation();
    checkboxValidation();
    passwordsAreEqual();
}

let form = document.querySelector("form");
form.addEventListener("submit", fullValidation);


