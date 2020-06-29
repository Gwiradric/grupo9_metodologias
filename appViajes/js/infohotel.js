document.addEventListener("DOMContentLoaded", initPage);

function initPage() {
    "use strict";

    let url = "http://web-unicen.herokuapp.com/api/groups/400/tpe";

    obtenerInfo();

    function getQueryVariable(variable) {
        var query = window.location.search.substring(1);
        var vars = query.split("&");
        for (var i=0; i < vars.length; i++) {
            var pair = vars[i].split("=");
            if(pair[0] == variable) {
                return pair[1];
            }
        }
        return false;
     }

    async function obtenerInfo() {
        try {

            let query = window.location.search.substring(1);

            let recibido = await fetch(url); //getting the info from servidor
            let json = await recibido.json();//casting to json
            
            
            let planes = json.tpe;

            planes.forEach(plan => {
                if (plan._id === query)
                    renderizar(plan.thing);
            });
            
        }
        catch (t) {
            console.log(t);
        }
    }

    async function renderizar(plan) {
        let html = "";
        
            html += '<ion-card><ion-card-header><ion-card-title> Hotel: ' + plan.nombre + '</a></ion-card-title></ion-card-header>' + '<ion-card-content>';
            html += '<ion-label>Direccion: ' + plan.direccion + '</ion-label></br>';
            html += '<ion-label>Ciudad: ' + plan.ciudad + '</ion-label></br>';
            html += '<ion-label>CP: ' + plan.cp + '</ion-label></br>';
            html += '<ion-label>Pagina web: ' + plan.pagina + '</ion-label></br>';
            html += '<ion-label>Email: ' + plan.email + '</ion-label></br>';
            html += '<ion-label>Telefono: ' + plan.telefono + '</ion-label></br>';
            html += '<ion-label>Habitaciones: ' + plan.habitaciones + '</ion-label></br>';
            html += '<ion-label>Cantidad de personas: ' + plan.cantidadPersonas + '</ion-label></br>';
            html += '<ion-label>Tipo habitacion: ' + plan.tipoHabitacion + '</ion-label></br>';
            html += '<ion-label>Dia de entrada: ' + plan.diaEntrada + '</ion-label></br>';
            html += '<ion-label>Dia de salida: ' + plan.diaSalida + '</ion-label></br>';
            html += '<ion-label>Check-in: ' + plan.checkIn + '</ion-label></br>';
            html += '<ion-label>Check-out: ' + plan.checkOut + '</ion-label></br>';
            html += '<ion-label>Dia de Desayuno: ' + plan.desayuno + '</ion-label></br>';
            html += '<ion-label>Dia de Limpieza: ' + plan.limpieza + '</ion-label></br>';
            html += '<ion-label>Dia de Coches: ' + plan.coches + '</ion-label></br>';
            html += '<ion-label>Dia de Estacionamiento: ' + plan.estacionamiento + '</ion-label></br>';
            html += '<ion-text>Ubicación: ' + plan.ciudad + '</ion-text></ion-card-content></ion-card>';
        document.getElementById('contenido').innerHTML = html;
    }
}