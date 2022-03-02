class DispositivoEntrada {
    constructor (tipoEntrada, marca) {
        this._tipoEntrada = tipoEntrada;
        this._marca = marca;
    }
    get tipoEntrada (){
        return this._tipoEntrada;
    }
    set tipoEntrada (tipoEntrada){
        this._tipoEntrada = tipoEntrada;
    }
    get marca (){
        return this._marca;
    }
    set marca (marca){
        this._marca = marca;
    }
}

class Raton extends DispositivoEntrada{
    static contadorRatones = 0;

    constructor (tipoEntrada, marca){
        super (tipoEntrada, marca);
        this._idRaton = ++Raton.contadorRatones;
    }
    get idRaton (){
        return this._idRaton;
    } 
    toString() {
        return `ID Raton: ${this.idRaton}, tipoEntrada: ${this._tipoEntrada}, Marca: ${this._marca}`;
    }
}

class Teclado extends DispositivoEntrada{
    static contadorTeclados = 0;

    constructor (tipoEntrada, marca) {
        super (tipoEntrada, marca);
        this._idTeclado = ++Teclado.contadorTeclados;
    }
    get idTeclado (){
        return this.idTeclado;
    }
    toString (){
        return `ID Teclado: ${this._idTeclado}, tipoEntrada: ${this._tipoEntrada}, Marca: ${this._marca}`;
    }
}

class Monitor {
    static contadorMonitores = 0;

    constructor (marca, tamaño) {
        this._idMonitor = ++Monitor.contadorMonitores;
        this._marca = marca;
        this._tamaño = tamaño;
    }
    get idMonitor (){
        return this._idMonitor;
    }
    get marca (){
        return this._marca;
    }
    set marca (marca) {
        this._marca = marca;
    }
    get tamaño (){
        return this._tamaño;
    }
    set tamaño (tamaño) {
        this._tamaño = tamaño;
    }
    toString (){
        return `ID Monitor: ${this._idMonitor}, Marca: ${this._marca}, Tamaño: ${this._tamaño}.`;
    }
}

class Ordenador {
    static contadorOrdenadores = 0;

    constructor (nombre, monitor, teclado, raton) {
        this._idOrdenador = ++Ordenador.contadorOrdenadores;
        this._nombre = nombre;
        this._monitor = monitor;
        this._teclado = teclado;
        this._raton = raton;
    }
    get idOrdenador(){
        return this._idOrdenador;
    }
    get nombre (){
        return this._nombre;
    }
    set nombre (nombre) {
        this._nombre = nombre;
    }
    get monitor (){
        return this._monitor;
    }
    set monitor (monitor) {
        this._monitor = monitor;
    }
    
    get teclado (){
        return this._teclado;
    }
    set teclado (teclado) {
        this._teclado = teclado;
    }
    
    get raton (){
        return this._raton;
    }
    set raton (raton) {
        this._raton = raton;
    }
    toString () {
        return `ID Ordenador: ${this._idOrdenador}, Nombre: ${this._nombre}
        ${this._monitor}
        ${this._teclado}
        ${this._raton}`;
    }
}

class Orden {
    static contadorOrdenes = 0;

    constructor () {
        this._idOrden = ++Orden.contadorOrdenes;
        this._ordenadores = [];
    }
    get idOrden(){
        return this._idOrden;
    }
    agregarOrdenador (ordenador) {
        this._ordenadores.push(ordenador)
    }
    mostrarOrden () {
        let ordenes = '';
        for (let ordenador of this._ordenadores) {
            ordenes += '\n' + ordenador.toString() + '\n';
        }
        console.log (`ID Orden: ${this._idOrden}, \nOrdenadores: \n${ordenes}}`);
    }
}

// ! Testing
// * Prueba de clase Raton.
/* let raton1 = new Raton ('USB','Mars Gaming');

console.log(raton1.toString()); */

// * Prueba de Clase Teclado.
/* teclado1 = new Teclado ('Bluetooth', 'Logitech');
teclado2 = new Teclado ('USB', 'Corsair');

console.log (teclado1.toString());
console.log (teclado2.toString()); */

// * Prueba de Clase Monitor.
/* monitor1 = new Monitor ('Samsung', '24\"');
monitor2 = new Monitor ('LG', '25\"');

console.log (monitor1.toString());
console.log (monitor2.toString()); */

// * Prueba de Clase Ordenador.
/* let teclado1 = new Teclado ('USB', 'Mars Gaming');
let raton1 = new Raton ('Bluetooth', 'Mars Gaming');
let monitor1 = new Monitor ('AOC', '24 \"');
let ordenador1 = new Ordenador ('Fabricado', monitor1, teclado1, raton1);

let ordenador2 = new Ordenador ('RoG', monitor1, teclado1, raton1);
// console.log (ordenador1.toString());

let orden1 = new Orden ();
orden1.agregarOrdenador(ordenador1);
orden1.agregarOrdenador(ordenador2);

orden1.mostrarOrden(); */