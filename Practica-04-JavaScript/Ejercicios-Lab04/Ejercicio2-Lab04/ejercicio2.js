// Función para convertir de Celsius a Fahrenheit
function celsiusAFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

// Función para convertir de Fahrenheit a Celsius
function fahrenheitACelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

function convertirTemperatura() {
    const temperatura = parseFloat(document.getElementById('temperatura').value);
    const escala = document.getElementById('escala').value;

    if (isNaN(temperatura)) {
        alert('Por favor, ingresa una temperatura válida.');
        return;
    }

    let resultado;

    if (escala === 'C') {
        // Convertir de Celsius a Fahrenheit
        resultado = celsiusAFahrenheit(temperatura);
        document.getElementById('resultado').textContent = `${temperatura}°C son ${resultado.toFixed(2)}°F`;
    } else if (escala === 'F') {
        // Convertir de Fahrenheit a Celsius
        resultado = fahrenheitACelsius(temperatura);
        document.getElementById('resultado').textContent = `${temperatura}°F son ${resultado.toFixed(2)}°C`;
    }
}
