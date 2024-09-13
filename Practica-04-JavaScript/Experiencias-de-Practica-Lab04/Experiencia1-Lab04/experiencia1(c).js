const boton = document.getElementById('botonCambiar');
const mensaje = document.getElementById('mensaje');

function cambiarColorYMensaje() {
    // Cambiar el color de fondo
    document.body.style.background = 'url("https://github.com/Saico11/Desarrollo-de-Aplicaciones---04/blob/main/Practica-04-JavaScript/Experiencias-de-Practica-Lab04/Experiencia1-Lab04/wallpaper-sky.jpg?raw=true")';
    
    // Cambiar el mensaje
    mensaje.innerText = 'Irás al cielo!';
}

boton.addEventListener('click', cambiarColorYMensaje);
