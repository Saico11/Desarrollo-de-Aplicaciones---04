function calcularPropina() {
    const totalCuenta = parseFloat(document.getElementById('totalCuenta').value);
    const porcentajePropina = parseFloat(document.getElementById('porcentajePropina').value);

    if (isNaN(totalCuenta) || isNaN(porcentajePropina)) {
        alert('Por favor, ingresa valores válidos.');
        return;
    }

    if (porcentajePropina < 0 || porcentajePropina > 100){
        alert('El porcentaje de propina debe estar entre 0 y 100.');
        return;
    }

    const montoPropina = (totalCuenta * porcentajePropina) / 100;
    // total a pagar
    const totalPagar = totalCuenta + montoPropina;

    document.getElementById('propina').textContent = montoPropina.toFixed(2);
    document.getElementById('total').textContent = totalPagar.toFixed(2);
}
