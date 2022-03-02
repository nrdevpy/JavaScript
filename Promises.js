let myPromise = new Promise ((resolved, rejected) => {
    let expression = True;

    if (expression)
        resolved('Resuelto');
    else
        rejected('Se produjo un error')
});

// * Primera forma de ejecutar la promesa.
/* myPromise.then(
    value => console.log (value),
    error => console.log(error)
); */

// * Segunda forma de ejecutar la promesa.
myPromise
.then(valor => console.log(valor))
.catch(error => console.log(error));