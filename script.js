// 1. Seleccionamos todos los botones de pregunta
const preguntas = document.querySelectorAll('.pregunta');

// 2. Recorremos cada botón y le agregamos un evento
preguntas.forEach(function (boton) {
    boton.addEventListener('click', function () {
        // 3. Obtenemos el "item" padre del botón clicado
        const itemActual = boton.parentElement;

        // 4. Cerramos todos los items que estén abiertos
        document.querySelectorAll('.item').forEach(function (item) {
            if (item !== itemActual) {
                item.classList.remove('activo');
            }
        });

        // 5. Alternamos (abrir/cerrar) el item actual
        itemActual.classList.toggle('activo');
    });
});