// Trabajo Práctico Entrega Final

//DOM

let titulo = document.getElementById("titulo")
console.log (titulo.innerText) // Bienvenidos a PRESTAMOS MOTONETA

// Cambio del texto elemento h1 Titulo
titulo.innerText = "Bienvenidos a SUPER PRESTAMOS MOTONETA"
console.log (titulo.innerText) // Bienvenidos a SUPER PRESTAMOS MOTONETA

// Storage Local

let mensaje = localStorage.getItem("Bienvenidos a SUPER PRESTAMOS MOTONETA");
console.log(mensaje);

for (let i = 0; i < localStorage.length; i++) {
    let clave = localStorage.key(i);
    console.log("Clave: "+ clave);
    console.log("Valor: "+ localStorage.getItem(clave));
    }

// JSON.parse + Operador ternario

let mensaje2 = JSON.stringify(localStorage.getItem("Bienvenido"))

if("Bienvenido") {
    mensaje = mensaje2
} else {
    mensaje = prompt ("Por favor debe loguearse")
}
 
// Operador ternario

mensaje = mensaje2 ? alert ("Bienvenidos a SUPER PRESTAMOS MOTONETA") : prompt ("Por favor debe loguearse")

// Tarjetas
let tarjetas = document.querySelectorAll('.card');

// Obtener el formulario
let formulario = document.getElementById('FormularioPrestamo');
let campoACompletar = document.getElementById('Monto');


// Agregar funciones de eventos a cada tarjeta
tarjetas.forEach(function(tarjeta) {
    tarjeta.addEventListener('click', function() {
        seleccionarObjeto(tarjeta);
    });
});

// Función para seleccionar un objeto
function seleccionarObjeto(objetoSeleccionado) {
    // Desmarcar todas las tarjetas
    tarjetas.forEach(function(tarjeta) {
        tarjeta.classList.remove('seleccionado');
    });

    // Marcar la tarjeta seleccionada
    objetoSeleccionado.classList.add('seleccionado');

    // Otras acciones según el objeto seleccionado
    console.log('Objeto seleccionado:', objetoSeleccionado.textContent);

// Obtener el valor predeterminado del atributo data
let valorPredeterminado = objetoSeleccionado.getAttribute('data-valor-predeterminado');

// Autocompletar el campo deseado del formulario
campoACompletar.value = valorPredeterminado;
}

// Sweet Alert al clickar en cotizar el préstamo
const btn = document.querySelector('#myBtn')
btn.addEventListener('click', () => {
Swal.fire({
title: 'PROMO DICIEMBRE!',
text: 'Primera cuota a los 90 días!',
icon: 'success',
confirmButtonText: 'OK'
})
})

// Utilizacion de Fetch (obtener datos de un servidor - cambia la URL según necesidad)
 fetch('https://jsonplaceholder.typicode.com/posts/1')
 .then(response => {
     // Para verificar si la solicitud fue exitosa (código de estado 200-299)
     if (!response.ok) {
         throw new Error('La solicitud no fue exitosa');
     }
     // Para convertir la respuesta a formato JSON
     return response.json();
 })
 .then(data => {
     // Para poder manipular los datos obtenidos
     document.getElementById('datos').textContent = JSON.stringify(data, null, 2);
 })
 .catch(error => {
     // Para capturar y manejar errores
     console.error('Error en la solicitud:', error);
 });