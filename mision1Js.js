
const tablero = document.getElementById("tablero");
const puntosTexto = document.getElementById("puntos");
const rondaTexto = document.getElementById("ronda");
const tiempoTexto = document.getElementById("tiempo");
const mensaje = document.getElementById("mensaje");
const botonReiniciar = document.getElementById("reiniciar");

let puntos = 0;
let ronda = 1;
let diferente = 0;
let tiempo = 30;
let intervalo;
let jugando = true;


// Crear las casillas
function crearRonda() {

    tablero.innerHTML = "";

    let tamaño = 4;
    let numeroCasillas = tamaño * tamaño;

    tablero.style.gridTemplateColumns = "repeat(4, 1fr)";

    diferente = Math.floor(Math.random() * numeroCasillas);

    let rojo = Math.floor(Math.random() * 180) + 40;
    let verde = Math.floor(Math.random() * 180) + 40;
    let azul = Math.floor(Math.random() * 180) + 40;

    let diferencia = 30 - ronda;

    if (diferencia < 4) {
        diferencia = 4;
    }

   let colorNormal = `rgb(${rojo}, ${verde}, ${azul})`;

    let rojo2 = rojo + diferencia;
    let verde2 = verde + diferencia;
    let azul2 = azul + diferencia;

    if (rojo2 > 255) {
        rojo2 = 255;
    }

    if (verde2 > 255) {
        verde2 = 255;
    }

    if (azul2 > 255) {
        azul2 = 255;
    }

    let colorDiferente = `rgb(${rojo2}, ${verde2}, ${azul2})`;


    for (let i = 0; i < numeroCasillas; i++) {

        let casilla = document.createElement("button");

        casilla.classList.add("casilla");

        casilla.setAttribute("data-posicion", i);

        if (i == diferente) {
            casilla.style.backgroundColor = colorDiferente;
        } else {
            casilla.style.backgroundColor = colorNormal;
        }
        tablero.appendChild(casilla);
    }
}


// Temporizador
function iniciarTemporizador() {

    clearInterval(intervalo);

    intervalo = setInterval(function() {

        tiempo--;

        tiempoTexto.textContent = tiempo;

        if (tiempo <= 0) {
            terminarJuego();
        }

    }, 1000);
}


// Terminar juego
function terminarJuego() {

    clearInterval(intervalo);

    jugando = false;

    mensaje.textContent = `Se acabo el tiempo. Puntos: ${puntos}`;

    mensaje.classList.add("fin");
}


// Actualizar puntos, ronda y tiempo
function actualizar() {

    puntosTexto.textContent = puntos;
    rondaTexto.textContent = ronda;
    tiempoTexto.textContent = tiempo;
}


// Pulsar una casilla
tablero.addEventListener("click", function(e) {

    if (jugando === false) {
        return;
    }

    if (e.target.classList.contains("casilla")) {

        let posicion = Number(e.target.getAttribute("data-posicion"));

        if (posicion === diferente) {

            puntos++;
            ronda++;

            mensaje.textContent = "Correcto!!";
            mensaje.classList.remove("fin");

            actualizar();
            crearRonda();

        } else {

            puntos--;

            if (puntos < 0) {
                puntos = 0;
            }

            mensaje.textContent = "Ese no es. Busca otro";

            actualizar();
        }
    }
});


// Reiniciar
function reiniciar() {

    clearInterval(intervalo);

    puntos = 0;
    ronda = 1;
    diferente = 0;
    tiempo = 30;
    jugando = true;

    mensaje.textContent = "Encuentra el color diferente";
    mensaje.classList.remove("fin");

    actualizar();
    crearRonda();
    iniciarTemporizador();
}


botonReiniciar.addEventListener("click", reiniciar);


// Modo oscuro pulsando D
document.addEventListener("keydown", function(e) {

    if (e.key === "d" || e.key === "D") {
        document.body.classList.toggle("oscuro");
    }

});


// Empezar el juego
crearRonda();
actualizar();
iniciarTemporizador();

