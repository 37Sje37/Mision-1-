# Encuentra el diferente

## ¿En qué consiste?

Este proyecto es un juego en el que tienes que encontrar la casilla que tiene un color diferente a las demás.

Tienes 30 segundos para conseguir todos los puntos que puedas.

## Lenguajes

- HTML,CSS, JavaScript

## Archivos

- `Mision1.html`: contiene la estructura de la página.
- `mision1CSS.css`: contiene el diseño y los estilos.
- `mision1Js.js`: contiene el funcionamiento del juego.

## Cómo jugar

1. Abre el archivo `Mision1.html` en un navegador.
2. Aparecerá un tablero con 16 casillas, colocadas en una cuadrícula de 4x4.
3. Una casilla tendrá un color un poco diferente.
4. Haz clic en esa casilla.
5. Si aciertas, ganas un punto y pasas a la siguiente ronda.
6. Si fallas, pierdes un punto, pero nunca puedes tener menos de 0.
7. Cuando el tiempo llegue a 0, la partida termina.
8. Puedes pulsar el botón `Reiniciar` para volver a empezar.

## Cómo funciona el juego

### Puntos

- Si aciertas, ganas 1 punto.
- Si fallas, pierdes 1 punto.
- La puntuación no puede bajar de 0.

### Rondas

Cada vez que aciertas, la ronda aumenta.

A medida que avanzan las rondas, los colores se parecen más, por lo que es más difícil encontrar la casilla diferente.

### Tiempo

La partida empieza con 30 segundos.

Cada segundo se resta uno al tiempo. Cuando llega a 0, el juego termina y aparece un mensaje con los puntos conseguidos.

### Colores

Los colores se crean de forma aleatoria.

Todas las casillas tienen el mismo color menos una, que tiene una pequeña diferencia de color.

## Controles

- **Hacer clic en una casilla:** elegir una respuesta.
- **Botón Reiniciar:** empezar la partida de nuevo.
- **Tecla D:** activar o quitar el modo oscuro.

## Diseño

La página tiene:

- Un tablero de 4x4.
- Un botón para reiniciar.
- Una zona donde aparecen los puntos, la ronda y el tiempo.
- Un mensaje que indica si has acertado o si se ha acabado la partida.

## Uso IA
-¿Como haer un README y que debe contener?
-¿Como aplico un random a colores en JS?
