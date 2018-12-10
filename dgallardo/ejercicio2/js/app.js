function validar(){
    var nombre = document.forms["registro"]["nombre"];
    var email = document.forms["registro"]["E-mail"];
    if(nombre.value==""){
        alert("Rellena el campo nombre");
        return false;
    } else if(email.value==""){
        alert("Rellena el email");
        return false;
    } else {
        alert("El formulario es correcto");
        return true;
    }
}