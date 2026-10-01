# Encuentra el diferente

Misión M1 · El Despertar del DOM — Desarrollo Web 1.

## Cómo probarlo
Abre el archivo HTML en el navegador (o con Live Server).
El juego comienza automáticamente y tienes 30 segundos para encontrar
la casilla cuyo color es diferente al resto.

Cada vez que aciertas, aumenta la ronda y aparece un nuevo tablero.
Si pulsas una casilla incorrecta, pierdes un punto.

También puedes pulsar «Reiniciar» para empezar una partida nueva.
Tecla secreta: pulsa "d" para activar o desactivar el modo nocturno.

## Uso de IA

Usé Gemini CLI (VS Code) como pareja de programación, fase a fase.

Promts utilizados:
    - ¿Cómo puedo hacer que aparezca una casilla con un color diferente al resto de forma aleatoria?
    - ¿Cómo puedo saber qué casilla ha pulsado el usuario sin poner un evento en cada casilla?

## Autopsia

1. Guardo la posición de la casilla diferente en una variable del
   objeto `estado` en vez de buscarla en el DOM cada vez. El DOM solo
   muestra el estado del juego, mientras que la lógica mantiene cuál
   es la casilla correcta. Descarté buscar la casilla por su color o
   por su clase CSS porque eso mezclaría la lógica del juego con la
   presentación.

2. Uso un solo listener en el contenedor del tablero en vez de poner
   un listener en cada casilla. Con `e.target.closest(".casilla")`
   puedo saber qué casilla se ha pulsado y consultar su posición
   mediante `dataset.index`. Esto evita tener que crear y gestionar
   muchos listeners cada vez que se genera una ronda.

3. Uso `setInterval` para controlar la cuenta atrás de 30 segundos.
   Antes de iniciar otro temporizador utilizo `clearInterval` para
   evitar que se ejecuten varios temporizadores a la vez, especialmente
   cuando se reinicia la partida.

4. El estado del juego se guarda en un único objeto llamado `estado`.
   Ahí se almacenan los puntos, la ronda, la posición diferente, el
   tiempo, el intervalo y si la partida sigue activa. Así puedo
   controlar el juego desde un único sitio y actualizar el DOM con la
   función `actualizar()`.