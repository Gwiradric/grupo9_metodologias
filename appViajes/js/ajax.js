document.addEventListener("DOMContentLoaded", initPage);

function initPage() {
  "use strict";

  let url = "http://web-unicen.herokuapp.com/api/groups/400/tpe";

  async function obtenerInfo() {
    try {
      let recibido = await fetch(url); //getting the info from servidor
      let json = await recibido.json();//casting to json
      
      console.log(json);
    }
    catch (t) {
      console.log(t);
    }
  }

  async function deleteInfoServer() {
    //this function is responsible for editing the information on the server
    try {

      try {
        let recibido = await fetch(url); //getting the info from servidor
        let json = await recibido.json();//casting to json

        for (let index = 0; index < json.tpe.length; index++) {
          
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
    //this function is responsible for saving the information on the server
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

  let button = document.querySelector("#submit");
  button.addEventListener("click", obtenerDatosFormulario);

  function obtenerDatosFormulario() {
    let viaje = {
      "thing": {
        "hostelName": document.querySelector("#hostelName").value,
        "address": document.querySelector("#address").value,
        "inputCity": document.querySelector("#inputCity").value,
        "inputZip": document.querySelector("#inputZip").value,
        "hostelURL": document.querySelector("#hostelURL").value,
        "email": document.querySelector("#email").value,
        "telefono": document.querySelector("#telefono").value,
        "rooms": document.querySelector("#rooms").value,
        "personas": document.querySelector("#personas").value,
        "roomType": document.querySelector("#roomType").value,
        "diaEntrada": document.querySelector("#diaEntrada").value,
        "diaSalida": document.querySelector("#diaSalida").value,
        "yes": document.querySelector("#yes").value,
        "no": document.querySelector("#no").value,
        "desayuno": document.querySelector("#desayuno").value,
        "limpieza": document.querySelector("#limpieza").value,
        "coches": document.querySelector("#coches").value,
        "estacionamiento": document.querySelector("#estacionamiento").value,
      }
    };

    enviarInfo(viaje);
  }
}
