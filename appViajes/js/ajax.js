document.addEventListener("DOMContentLoaded", initPage);

function initPage() {
  "use strict";

  let url = "http://web-unicen.herokuapp.com/api/groups/400/tpe";
  // URL es el link de la API

  let button = document.querySelector("#submit");
  button.addEventListener("click", obtenerDatosFormulario);
  // Agrego un evento al boton Submit

  async function obtenerInfo() {
    // Funcion para obtener la informacion de la API
    try {
      let recibido = await fetch(url); //getting the info from servidor
      let json = await recibido.json();//casting to json
      
      console.log(json);
    }
    catch (t) {
      console.log(t);
    }
  }

  //deleteInfoServer();

  async function deleteInfoServer() {
    // Funcion para borrar toda la informacion de la API
    try {

      try {
        let recibido = await fetch(url); //getting the info from servidor
        let json = await recibido.json();//casting to json

        for (let index = 1; index < json.tpe.length; index++) {
          
          let id = json.tpe[index]._id;
          await fetch(url + "/" + id, {
            "method": "DELETE",
          });
          
        }
      }
      catch (t) {
        console.log(t);
      }

      
    }
    catch (t) {
      console.log(t);
    }
  }

  async function enviarInfo(viaje) {
    // Funcion para enviar toda la informacion a la API
    try {
      await fetch(url, {
        "method": "POST",
        "headers": {
          "Content-Type": "application/json"
        },
        "body": JSON.stringify(viaje),
      });
    }
    catch (t) {
      console.log(t);
    }
  }

  function obtenerDatosFormulario() {
    // Funcion para recopilar la informacion del formulario de planes
    let viaje = {
      "thing": {
        "estado": 'Confirmado',
        "nombre": document.querySelector("#hostelName").value,
        "direccion": document.querySelector("#address").value,
        "ciudad": document.querySelector("#inputCity").value,
        "cp": document.querySelector("#inputZip").value,
        "pagina": document.querySelector("#hostelURL").value,
        "email": document.querySelector("#email").value,
        "telefono": document.querySelector("#telefono").value,
        "habitaciones": document.querySelector("#rooms").value,
        "cantidadPersonas": document.querySelector("#personas").value,
        "tipoHabitacion": document.querySelector("#roomType").value,
        "diaEntrada": document.querySelector("#diaEntrada").value,
        "diaSalida": document.querySelector("#diaSalida").value,
        "checkIn": document.querySelector("#checkIn").value,
        "checkOut": document.querySelector("#checkOut").value,
        "desayuno": document.querySelector("#desayuno").checked,
        "limpieza": document.querySelector("#limpieza").checked,
        "coches": document.querySelector("#coches").checked,
        "estacionamiento": document.querySelector("#estacionamiento").checked,
      }
    };

    enviarInfo(viaje);
  }
}
