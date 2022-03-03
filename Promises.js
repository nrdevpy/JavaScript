/* let myPromise = new Promise ((resolved, rejected) => {
    let expression = true;

    if (expression)
        resolved('Resuelto');
    else
        rejected('Se produjo un error')
}); */

// * Primera forma de ejecutar la promesa.
/* myPromise.then(
    value => console.log (value),
    error => console.log(error)
); */

// * Segunda forma de ejecutar la promesa.
/* myPromise
.then(valor => console.log(valor))
.catch(error => console.log(error)); */

/* let promise = new Promise ((resolved) => {
    // console.log ('Inicio de la promesa');
    setTimeout( () => resolved ('Saludos desde promesa y timeout'), 3000);
    // console.log ('Final de la promesa');
}); */

// promise.then(value => console.log(value));