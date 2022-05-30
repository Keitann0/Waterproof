'use strict';

//Variables
let inputBuscar = document.getElementById("buscador");


//Funcion para animar el logo con 1 click

const logoAnimado = () => {
    $("#waterproof").addClass("animate__bounceIn");
}

//Funcion para avisar al usario del mantenimiento de la seccion

const alertAviso = () => {
    alert("Proximamente podras acceder a esta seccion, disculpa las molestias");
}

//Funcion para "Enviar" solicitud de Contacto

const successForm = () => {

   var name = $(".name").val();
   var mail = $(".mail").val();
   var age = $(".age").val();
   console.log(name + mail + age);

   if(name.length == 0 && mail.length == 0 && age.length == 0){
    $("#alerta").addClass("alert");
    $("#alerta").addClass("alert-danger");
    $("#alerta").addClass("alert-dismissible");
    $("#alerta").text("Completa el formulario correctamente y vuelve a intentarlo.");
    $("#alerta").addClass("text-center");
   }
   else {


    //Boton
    $("#enviar").removeClass("btn-primary");
    $("#enviar").removeClass("bi-envelope");
    $("#enviar").addClass("btn-success");
    $("#enviar").addClass("bi-check-circle");
    $("#enviar").text(" Tu solicitud ha sido enviada");

    //Alert
    $("#alerta").removeClass("alert-danger");
    $("#alerta").addClass("alert");
    $("#alerta").addClass("alert-success");
    $("#alerta").text("Tu solicitud ha sido enviada exitosamente. Revisa tu correo en los proximos dias.");
    $("#alerta").addClass("text-center");
}

}

//Funcion para agregar productos al carrito de compras

//Producto1
const addCart = () => {
        $("#carrito1").text("Swimsuit Arena Black");
}

//Producto2

const addCart2 = () => {
    $("#carrito2").text("Jammer Speedo Black");
}

//Producto 3

const addCart3 = () => {
    $("#carrito3").text("Googles Adidas Chrome");
}

