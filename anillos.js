const rango = document.getElementById('rango-precio');
const span = document.getElementById('texto-filtro');

rango.addEventListener('input', () => {
	const valorConMarcador = parseInt(rango.value).toLocaleString();
	if (valorConMarcador != 0) {
		span.innerHTML = 'Hasta: ' + valorConMarcador;
	}
});

// Establecer el valor inicial al reiniciar la página
document.addEventListener('DOMContentLoaded', () => {
	rango.value = 0;
});
