document.addEventListener("DOMContentLoaded", initPage);

function initPage() {
"use strict";

let url = "http://web-unicen.herokuapp.com/api/groups/400/tpe";

async function obtenerInfo() {
    try {
        let recibido = await fetch(url); //getting the info from servidor
        let json = await recibido.json();//casting to json
        renderizar(json);
        console.log(json);
    }
    catch (t) {
        console.log(t); 
    }
}
obtenerInfo();
async function renderizar(json){
    let planess = json.tpe;
    let html = "";
    planess.forEach(plan => {
        html += '<ion-card><ion-card-header><ion-card-title> Hotel: <a href="plan.html?'+plan._id+'" >'+plan.thing.nombre+'</a></ion-card-title></ion-card-header>'+'<ion-card-content>';
        html += '<ion-label>Inicio: '+plan.thing.diaEntrada+'</ion-label></br>';
        html += '<ion-label>Fin: '+plan.thing.diaSalida+'</ion-label></br>';
        html += '<ion-text>Ubicación: '+plan.thing.ciudad+'</ion-text></ion-card-content></ion-card>';
    });
    document.getElementById('planes').innerHTML = html;
}
}