// Obtener los elementos del formulario
const formularioHipoteca = document.querySelector('#formulario-hipoteca');
const precioInput = document.querySelector('#precio');
const engancheInput = document.querySelector('#enganche');
const plazoInput = document.querySelector('#plazo');
const tasaInput = document.querySelector('#tasa');
const pagoMensualInput = document.querySelector('#pago-mensual');
const totalPagoInput = document.querySelector('#total-pago');

// Obtener los valores del objeto Storage
const valoresGuardados = JSON.parse(localStorage.getItem('valoresHipoteca'));
if (valoresGuardados) {
precioInput.value = valoresGuardados.precio;
engancheInput.value = valoresGuardados.enganche;
plazoInput.value = valoresGuardados.plazo;
tasaInput.value = valoresGuardados.tasa;
}

// Agregar evento click al botón de calcular hipoteca
const calcularHipotecaBtn = document.querySelector('#calcular-hipoteca');
calcularHipotecaBtn.addEventListener('click', function() {
// Obtener los valores del formulario
const precio = parseFloat(precioInput.value);
const enganche = parseFloat(engancheInput.value);
const plazo = parseFloat(plazoInput.value);
const tasa = parseFloat(tasaInput.value);

// Calcular el pago mensual y total a pagar
const financiamiento = precio - enganche;
const tasaMensual = (tasa / 100) / 12;
const plazoMeses = plazo * 12;
const pagoMensual = financiamiento * (tasaMensual / (1 - Math.pow(1 + tasaMensual, -plazoMeses)));
const totalPago = pagoMensual * plazoMeses;

// Mostrar los resultados
pagoMensualInput.value = '€' + pagoMensual.toFixed(2);
totalPagoInput.value = '€' + totalPago.toFixed(2);

// Guardar los valores en el objeto Storage
const valoresHipoteca = {
precio: precioInput.value,
enganche: engancheInput.value,
plazo: plazoInput.value,
tasa: tasaInput.value
};
localStorage.setItem('valoresHipoteca', JSON.stringify(valoresHipoteca));
});
