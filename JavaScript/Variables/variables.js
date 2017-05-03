//variables.js

//En JavaScript se define
//una variable con la palabra
//reservada <var>

//Enteros

var dos = 2;
var tres = 3;
var quince = 15;

console.log(dos);
console.log(tres);
console.log(quince);

//Float

var dosPuntoCinco = 2.5;

console.log(dosPuntoCinco);

//Todas las demás

var verdadero = true;
var falso = false;
var nombre = 'Jose';
var negativo = -4;
var fecha = new Date();

var cuatroString = '4';
cuatroString = 4;
cuatroString = true;
cuatroString = new Date();
cuatroString = undefined;
cuatroString = null;

var variable;

console.log(cuatroString);
console.log(variable);

console.log(typeof cuatroString);

//Objetos
var jose = {
    id:1,
    nombre: 'Jose',
    createdAt: new Date(),
    updatedAt: new Date(),
    casado:false,
    prestamos:true,
    hijos:null,
    altura:1.8,
    mascota:{
        nombre: 'Cachetes',
        fechaNacimiento: new Date()
    }
};
console.log(jose + 'asda');
console.log(jose, 'asda');
console.log('Altura', jose.altura);
delete jose.altura;

jose.juegos = 'varios';

var arreglo = [
    1,
    'jose',
    2.4,
    false,
    null,
    undefined,
    new Date(),
    -3421,
    {
        a: 'b'
    }
];

console.log(arreglo[4]);

var nuevoObjeto = {
    papas: ['chaucha', 'criolla', 'francisco'],
    cebollas: ['blanca', 'paiteña', 'perla']
}
console.log(nuevoObjeto.papas[2]);

var matriz = [[0,1],[2,3]];
console.log(matriz[0][0]);

var arregloDeObjetos = [
    {
        id:1,
        nombre:'Adrian'
    },
    {
        id:2,
        nombre:'Felipe'
    }
];
console.log(arregloDeObjetos);
arregloDeObjetos.splice(0,1);
console.log(arregloDeObjetos);