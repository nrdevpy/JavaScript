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
<<<<<<< HEAD
// ! Testing callback.
// sumar (2, 8, imprimir);

// * Llamadas asincronas con uso setTimeout.

function myCallbackFunction(){
    console.log('Saludo despues de 3 seg');
}

// ! Testing setTimeout.
/* setTimeout(myCallbackFunction, 3000);

setTimeout(function(){console.log('Saludos en 3 segundos mas')}, 6000);

setTimeout(() => console.log('Ultimo saludo en 3 segundos mas'), 9000); */

// * Lammadas asincronas con uso setInterval.

let reloj = () => {
    let fecha = new Date();
    console.log(`${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`)
}

// ! Testing setInterval.
// setInterval(reloj, 5000); // Se llama cada 5 segundos.
=======

sumar (2, 8, imprimir);
>>>>>>> 521e23c11248843a814420ef6f517ad04b66e9c2
