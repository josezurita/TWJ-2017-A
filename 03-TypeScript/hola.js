var holaMundo = "Que tal \nmundo cruel";
//console.log(holaMundo);
//boolean
var soltero = true; //false
//number
var novias = 12;
//string
var frasetion = "You're done";
var otraFrasetion = "El numero de novias es " + (novias + 1);
// arrays
var notas = [1, 2, 34,]; //[]
var jaladas = [1, 2, 3]; //[]
var nombre = "asd";
nombre = 12;
var usuario = {
    nombre: "adrian",
    apellido: "eguez",
    direccion: "asd"
};
/*
class persona {
    nombre:string = "Nom"; //publico por defecto
    private apellido:string;
    public fechaNacimiento:Date;
    constructor(nombre:string,
                apellido:string,
                fechaNacimiento?:Date){
        this.nombre = nombre;
        this.apellido = apellido;
        this.fechaNacimiento = fechaNacimiento;

    }
}
*/
var Persona = (function () {
    function Persona(nombre, apellido, fechaNacimiento) {
    }
    Persona.prototype.imprimirPersona = function () {
        console.log(this.nombre, this.apellido);
        this.imprimirNombre(this.nombre);
        return {
            nombre: this.nombre,
            apellido: this.apellido
        };
    };
    Persona.prototype.imprimirNombre = function (nombre, apellido) {
        if (apellido) {
            console.log(nombre, apellido);
        }
        else {
            console.log(nombre);
        }
    };
    return Persona;
}());
function SumarNumeros(numero1, numero2) {
    return numero1 + numero2;
}
var objeto = {
    nombre: "adrian",
    imprimirNombre: function () {
        return this.nombre;
    }
};
var adrian = new Persona();
console.log(adrian.nombre, adrian.apellido, adrian.fechaNacieminto);
adrian.nombre = "Adrian";
adrian.apellido = "Eguez";
adrian.fechaNacieminto = new Date("1280-04-02");
//console.log(adrian);
adrian.imprimirPersona();
