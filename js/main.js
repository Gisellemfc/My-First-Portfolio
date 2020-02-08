function recogerForm(){
    var nombre = document.getElementById("pnombre").value;
    var apellido = document.getElementById("snombre").value;
    var email = document.getElementById("email").value;
    var cel = document.getElementById("cel").value;
    var mensaje = document.getElementById("mensaje").value;

    if(nombre != "" && apellido != "" && email != "" && cel != "" && mensaje != ""){
        console.log("Nombre: " + nombre + "\ Apellido: " + apellido + "\ Email: " + email + "\ Teléfono: " + cel + "\ Mensaje: " + mensaje);
        alert("¡Su solicitud ha sido enviada correctamente!")
    }

}