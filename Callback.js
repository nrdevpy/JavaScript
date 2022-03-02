/* El termino callback hace referencia al uso de una funcion
dentro de otra, introduciendolo mediante los parametros */

function myFunction1 (){
    console.log('Funcion 1');
}

function myFunction2 (){
    console.log('Funcion 2');
}

// * Funcion Callback.
function imprimir (msg){
    console.log(msg);
}

function sumar (op1, op2, callbackFunction){
    let res = op1 + op2;
    callbackFunction(`Resultado: ${res}`);
}

sumar (2, 8, imprimir);