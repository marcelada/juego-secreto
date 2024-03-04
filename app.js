let NumeroSecreto = 0 ;
let intentos = 0 ;
let ListaNumerosSorteados = [];
let NumeroMaximo = 10;

let titulo = document.querySelector('h1'); titulo.innerHTML = 'Juego del numero secreto';
let parrafo = document.querySelector('p'); parrafo.innerHTML = (`Indica un numero del 1 al ${NumeroMaximo}`);


function asignarTextoElemento (elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
function VerificarIntento(){
  let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
  

    if (numeroDeUsuario === NumeroSecreto) {
        asignarTextoElemento ('p', `Acertaste el numero en  ${intentos} ${(intentos == 1) ? "intentos" : "intento"}`);
    //boton
    document.getElementById('reiniciar').removeAttribute('disabled');
    
    } else {
        //el usuario no acerto
        if(numeroDeUsuario > NumeroSecreto){
            asignarTextoElemento('p','El numero secreto es menor');
    }else {
        if(numeroDeUsuario < NumeroSecreto){
            asignarTextoElemento('p','El numero secreto es mayor');
    }
    intentos++;
    LimpiarCaja();
    return;}}}

function LimpiarCaja() {
   document.querySelector('#valorUsuario').value = '';
}

function GenerarNumeroSecreto() {
    let numeroGenerado = Math.floor (Math.random()*NumeroMaximo)+1;
    
    console.log (numeroGenerado);
    console.log (ListaNumerosSorteados);
    //si ya sorteamos los numeros
    if(ListaNumerosSorteados.length == NumeroMaximo ){
    asignarTextoElemento ('p', 'ya se sortearon todos los numeros posibles')   
 } else {
    //si el numero genereda esta incluidi esta en la lista

    if (ListaNumerosSorteados.includes(numeroGenerado)){
        return GenerarNumeroSecreto();
    }else{
        ListaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;   
    }}

}
function CondicionesIniciales() {
    asignarTextoElemento('h1','juego del numero secreto');
    asignarTextoElemento('p',`Indica un numero del 1 al ${NumeroMaximo}`);
    NumeroSecreto =GenerarNumeroSecreto();
    intentos = 1
}

function reiniciarJuego (){
    //limpiar caja
    LimpiarCaja();
    //mensaje de intervalo
    //generar numero aleatorio
    //inicializar numero de intentos
    CondicionesIniciales();
    //deshabilitar boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}
CondicionesIniciales();