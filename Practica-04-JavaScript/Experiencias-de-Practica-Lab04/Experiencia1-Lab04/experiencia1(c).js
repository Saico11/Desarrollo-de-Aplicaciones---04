const boton = document.getElementById('botonCambiar');
const mensaje = document.getElementById('mensaje');

function cambiarColorYMensaje() {
    // Cambiar el color de fondo
    document.body.style.background = 'url("https://wallpapers.com/images/featured/sky-mvehfqz6w2ges2dj.jpg")';
    
    // Cambiar el mensaje
    mensaje.innerText = 'Irás al cielo!';
}

boton.addEventListener('click', cambiarColorYMensaje);
