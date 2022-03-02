class Persona {
    constructor (nombre, apellido) {
        this._nombre = nombre;
        this._apellido = apellido;
    }

    get nombre (){
        return this._nombre;
    }
    set nombre (nombre) {
        this._nombre = nombre;
    }
    get apellido (){
        return this._apellido;
    }
    set apellido (apellido) {
        this._apellido = apellido;
    }
    get nombreCompleto () {
        return this._nombre + ' ' + this._apellido;
    }
}

let persona1 = new Persona ('Sandra', 'Montes');

console.log(persona1.nombreCompleto);

class Empleado extends Persona {
    constructor (nombre, apellido, departamento) {
        super (nombre, apellido);

        this._departamento = departamento
    }

    get departamento () {
        return 'El empleado/a: ' + this._nombre + ' ' + this._apellido + ' es del departamento de ' + this._departamento;
    }
}

let empleado1 = new Empleado ('Sandra', 'Montes', 'Contabilidad');

console.log(empleado1.departamento);