class Persona {
    constructor (nombre, apellido) {
        this._nombre = nombre;
        this._apellido = apellido;

    }
    
    // Get
    get nombre(){
        return this._nombre;
    }
    get apellido(){
        return this._apellido;
    }
    get nombreCompleto(){
        return this._nombre + ' ' + this._apellido;
    }

    // Set
    set nombre(nombre){
        this._nombre = nombre;
    }
    set apellido(apellido){
        this._apellido = apellido;
    }
}

let persona1 = new Persona ('Nelson', 'Rojas')
console.log(persona1.nombreCompleto);
