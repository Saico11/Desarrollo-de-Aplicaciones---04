function generarContrasenaSegura(longitud, opciones) {
    // Conjuntos de caracteres que se pueden utilizar en la contraseña.
    const letrasMayusculas = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
    const letrasMinusculas = "abcdefghijklmnñopqrstuvwxyz";
    const numeros = "0123456789";
    const simbolos = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

    let caracteresDisponibles = "";
    let contrasena = "";

    // Si se seleccionó incluir una opcion, las añadimos al conjunto de caracteres disponibles.
    if (opciones.mayusculas) caracteresDisponibles += letrasMayusculas;
    if (opciones.minusculas) caracteresDisponibles += letrasMinusculas;
    if (opciones.numeros) caracteresDisponibles += numeros;
    if (opciones.simbolos) caracteresDisponibles += simbolos;

    if (caracteresDisponibles.length === 0) {
        throw new Error("Debes seleccionar al menos un tipo de carácter.");
    }

   // Bucle que genera la contraseña seleccionando caracteres aleatorios del conjunto disponible.
    for (let i = 0; i < longitud; i++) {
        const randomIndex = Math.floor(Math.random() * caracteresDisponibles.length);
        contrasena += caracteresDisponibles[randomIndex];
    }

    return contrasena;
}

// Event listener al dar click en el boton de generar contraseña
document.getElementById("generarBoton").addEventListener("click", () => {
    const longitud = parseInt(document.getElementById("longitud").value);
    const opciones = {
        mayusculas: document.getElementById("mayusculas").checked,
        minusculas: document.getElementById("minusculas").checked,
        numeros: document.getElementById("numeros").checked,
        simbolos: document.getElementById("simbolos").checked
    };

    try {
        const contrasena = generarContrasenaSegura(longitud, opciones);
        document.getElementById("resultado").value = contrasena;
    } catch (error) {
        alert(error.message);
    }
});