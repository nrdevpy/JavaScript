'use strict'

try{
    throw 'Un Error'; // Throw modifica el mensaje de error.
    x = 10;
}
catch(error){
    console.log(error);
}
// * Optional
finally{
    console.log('Termina el manejo de errores');
}

console.log("continuamos...");