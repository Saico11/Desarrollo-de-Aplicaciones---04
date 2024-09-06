    const mensaje = document.getElementById('mensaje');
    const boton = document.getElementById('botonCambiar');

    function cambiarMensaje() {
        mensaje.innerText = 'Mañana será viernes!';
    }

    boton.addEventListener('click', cambiarMensaje);