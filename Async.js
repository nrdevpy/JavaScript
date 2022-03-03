// * async indica que una funcion devuelve una promesa.
/* async function myPromiseFunction(){
    return 'Saludos con promesa y async';
}

myPromiseFunction().then(valor => console.log(valor)); */

// * Async / Await.
/* async function myAwaitFunction(){
    let miPromesa = new Promise(
        resolve => {
            resolve('Promesa con await')
        });
    console.log(await miPromesa);
}

myAwaitFunction(); */

// * Promise, await, async and setTimeout.
/* async function promiseAwaitTimeoutFunction(){
    console.log('Inicio de la funcion');
    let myPromise = new Promise(
        resolve => {
            setTimeout(() => resolve('Promise con await y timeout'), 3000);
        });
    console.log(await myPromise)
    console.log('Fin de la funcion');
}

promiseAwaitTimeoutFunction(); */