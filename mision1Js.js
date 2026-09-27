
const tablero = document.getElementById("tablero");
const puntosTexto = document.getElementById("puntos");
const rondaTexto = document.getElementById("ronda");
const tiempoTexto = document.getElementById("tiempo");
const mensaje = document.getElementById("mensaje");
const botonReiniciar = document.getElementById("reiniciar");

const estado = {
    puntos: 0,
    ronda: 1,
    diferente: 0,
    tiempo: 30,
    intervalo: null,
    jugando: true
};

// crear las casillas
function crearRonda() {

    tablero.innerHTML = "";

    let tamaño = 4;

    tablero.style.gridTemplateColumns = "repeat(" + tamaño + ", 1fr)";

    let numeroCasillas = tamaño * tamaño;

    estado.diferente = Math.floor(Math.random() * numeroCasillas);

    let rojo = Math.floor(Math.random() * 180) + 40;
    let verde = Math.floor(Math.random() * 180) + 40;
    let azul = Math.floor(Math.random() * 180) + 40;

    let diferencia = 30 - estado.ronda;

    if (diferencia < 4) {
        diferencia = 4;
    }

    let colorNormal = "rgb(" + rojo + "," + verde + "," + azul + ")";

    let r2 = Math.min(255, rojo + diferencia);
    let g2 = Math.min(255, verde + diferencia);
    let b2 = Math.min(255, azul + diferencia);

    let colorDiferente = "rgb(" + r2 + "," + g2 + "," + b2 + ")";

    for (let i = 0; i < numeroCasillas; i++) {

        let casilla = document.createElement("button");

        casilla.classList.add("casilla");

        casilla.dataset.index = i;

        if (i == estado.diferente) {
            casilla.style.backgroundColor = colorDiferente;
        } else {
            casilla.style.backgroundColor = colorNormal;
        }

        tablero.appendChild(casilla);
    }
}

// tiempo
function iniciarTemporizador() {

    clearInterval(estado.intervalo);

    estado.intervalo = setInterval(function() {

        estado.tiempo--;

        tiempoTexto.textContent = estado.tiempo;

        if (estado.tiempo <= 0) {
            terminarJuego();
        }

    }, 1000);
}

// acabar
function terminarJuego() {

    clearInterval(estado.intervalo);

    estado.jugando = false;

    mensaje.textContent = "Se acabo el tiempo. Puntos: " + estado.puntos;

    mensaje.classList.add("fin");
}

// actualizar los numeros
function actualizar() {

    puntosTexto.textContent = estado.puntos;
    rondaTexto.textContent = estado.ronda;
    tiempoTexto.textContent = estado.tiempo;

}

// cuando se pulsa una casilla
tablero.addEventListener("click", function(e) {

    if (estado.jugando == false) {
        return;
    }

    let casilla = e.target.closest(".casilla");

    if (casilla == null) {
        return;
    }

    let posicion = Number(casilla.dataset.index);

    if (posicion == estado.diferente) {

        estado.puntos = estado.puntos + 1;

        estado.ronda++;

        mensaje.textContent = "Correcto!!";

        mensaje.classList.remove("fin");

        actualizar();

        crearRonda();

    } else {

        estado.puntos = estado.puntos - 1;

        if (estado.puntos < 0) {
            estado.puntos = 0;
        }

        mensaje.textContent = "Ese no es. Busca otro";

        actualizar();
    }

});

// reiniciar
function reiniciar() {

    clearInterval(estado.intervalo);

    estado.puntos = 0;
    estado.ronda = 1;
    estado.diferente = 0;
    estado.tiempo = 30;
    estado.jugando = true;

    mensaje.textContent = "Encuentra el color diferente";

    mensaje.classList.remove("fin");

    actualizar();

    crearRonda();

    iniciarTemporizador();
}

botonReiniciar.addEventListener("click", reiniciar);

// modo oscuro con la d
document.addEventListener("keydown", function(e) {

    if (e.key.toLowerCase() == "d") {

        document.body.classList.toggle("oscuro");

    }

});

// empezar
crearRonda();
actualizar();
iniciarTemporizador();