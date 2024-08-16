function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

//obteniendo array de inputs
let inputArray = document.getElementsByClassName("form-control");
//obteniendo input checkbox
let checkbox = document.getElementById("terminos");
//obteniendo boton registrarse
const regBtn = document.getElementById("regBtn");

//obteniendo los inputs de las contraseñas
let password1 =document.getElementById("password1");
let password2 =document.getElementById("password2");

//Validacion de inputs
function inputValidation(){
    count = 0;
    for (input of inputArray){
        if(input.value == ""){ 
          count++
        }
    } 
    return count==0;

};

//Validacion de checkbox
function checkboxValidation(){
    return checkbox.checked
   
}

//Validacion del tamaño de las contraseñas e igualdad
function passwords(){
   return  (password1.value == password2.value && password1.value.length>=6)
}



//Evento del boton que valida todo lo anterior
regBtn.addEventListener("click", function(){
    if (inputValidation() && checkboxValidation() && passwords()){
        showAlertSuccess();
    } else {
        showAlertError();
    }
});


