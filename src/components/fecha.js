var fechaActual = new Date();

var opcionesFecha = { day: '2-digit', month: '2-digit', year: 'numeric' };
var fechaFormateada = fechaActual.toLocaleDateString('es-ES', opcionesFecha);

document.getElementById('fechaPublicacion').innerText = "Fecha de publicación: " + fechaFormateada;
