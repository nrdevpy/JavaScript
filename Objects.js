let persona = {
    nombre : "Nelson",
    apellido : "Rojas",
    edad : 22,
    email : 'mail@mail.com',
    idioma : "es",
    // nombreCompleto : function () {
    //     return this.nombre + " " + this.apellido;
    // },

    get lang() {
        return this.idioma.toUpperCase();
    },

    set lang( lang ) {
        this.idioma = lang.toUpperCase();
    },

    get nombreCompleto () {
        return this.nombre + ' ' + this.apellido;
    }
}

console.log(persona.lang)

/* 
console.log(persona.nombre);
console.log(persona.apellido);
console.log(persona.edad);
console.log(persona.nombreCompleto());
*/

/* 
for ( i in persona){
    console.log('Atributo: ' + i + ' Valor: ' + persona[i])
}
*/
/* 
persona.telf = '123456';
console.log(persona.telf);

delete persona.telf;

console.log(persona.telf);
*/
