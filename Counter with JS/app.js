
let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
console.log(numeroSecreto);
let numeroMaximo = 10;
let intentosMaximos = 3;
let juegoenCurso = true;


function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    if (!juegoenCurso) return;
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);

    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Acertaste en ${intentos} ${(intentos === 1) ? "un intento" : "intentos"}`);
        juegoenCurso = false;
        document.getElementById("reiniciar").removeAttribute('disabled');
    } else {
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El numero secreto es menor');
        } else {
            asignarTextoElemento('p', 'El numero secreto es mayor');
        }
        intentos++;
        if (intentos > intentosMaximos) {
            asignarTextoElemento('p', `Se agotaron los intentos. El numero secreto  era: ` + numeroSecreto);
            juegoenCurso = false;
        }
        limpiarCaja();
    }
    return;
}


function limpiarCaja() {
    let valorCaja = document.querySelector('#valorUsuario');
    valorCaja.value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento("p", "Ya se sortearon todos los numeros posibles");
        juegoenCurso = false;
    } else {
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento("h1", "Adivina el número secreto 🃏");
    asignarTextoElemento("p", ` Escoge un numero de 1 a ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    juegoenCurso = true;

}
function reiniciarJuego() {
    limpiarCaja();
    //limpiar la caja
    condicionesIniciales();
    //indicar mensajes iniciales
    //general aleatorio
    //inicializar el numero de intentos
    //limpiar la caja again
    document.querySelector("#reiniciar").setAttribute("disabled", true);
    //deshabilitar el boton nuevo juego

}


condicionesIniciales();

