let numSecret = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 5;


function asignarElementoTexto(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    if (numeroDeUsuario === numSecret) {
        asignarElementoTexto('p', `Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //El usuario no acertó.
        if (numeroDeUsuario > numSecret) {
            asignarElementoTexto('p', 'El número secreto es menor');
        } else {
            asignarElementoTexto('p', 'El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function generateNumberSecret() {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya sorteamos todos los números...
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarElementoTexto('p', 'Ya se sortearon todos los números posibles');
    }
    //Si el número generado está en la lista
    if (listaNumerosSorteados.includes(numeroGenerado)) {
        return generateNumberSecret();
    } else {
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
}

function condicionesIniciales() {
    asignarElementoTexto('h1', "Juego del número secreto!");
    asignarElementoTexto('p', `Indica un número del 1 al ${numeroMaximo}`);
    numSecret = generateNumberSecret();
    intentos = 1;
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //Indicar mensaje de intérvalo de números.
    //Generar el número aleatorio.
    //Inicializar el número de intentos.
    condicionesIniciales();
    //Deshabilitar el botón "Nuevo Juego"
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

condicionesIniciales();

