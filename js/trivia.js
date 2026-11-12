document.getElementById("comprobar").addEventListener("click", function() {
    let puntaje = 0;

    let p1 = document.querySelector('input[name="pregunta1"]:checked');
    let p2 = document.querySelector('input[name="pregunta2"]:checked');
    let p3 = document.querySelector('input[name="pregunta3"]:checked');
    let p4 = document.querySelector('input[name="pregunta4"]:checked');
    let p5 = document.querySelector('input[name="pregunta5"]:checked');
    let p6 = document.querySelector('input[name="pregunta6"]:checked');

    if (!p1 || !p2 || !p3 || !p4 || !p5 || !p6) {
        document.getElementById("resultado").innerHTML =
            "Debes responder las seis preguntas.";
        return;
    }

    // Respuestas correctas
    if (p1.value === "b") puntaje++;
    if (p2.value === "b") puntaje++;
    if (p3.value === "c") puntaje++;
    if (p4.value === "a") puntaje++;
    if (p5.value === "c") puntaje++;
    if (p6.value === "a") puntaje++;

    let mensaje = "<h3>Resultado: " + puntaje + "/6 puntos</h3>";

    if (puntaje === 6) {
        mensaje += "¡Felicitaciones! Has respondido correctamente todas las preguntas.";
    } else if (puntaje === 5) {
        mensaje += "Buen intento. Solo te equivocaste en una pregunta.";
    } else {
        mensaje += "Te invito a intentarlo nuevamente.";
    }

    document.getElementById("resultado").innerHTML = mensaje;
});

document.getElementById("reiniciar").addEventListener("click", function() {
    let opciones = document.querySelectorAll('input[type="radio"]');

    for (let opcion of opciones) {
        opcion.checked = false;
    }

    document.getElementById("resultado").innerHTML = "";
});