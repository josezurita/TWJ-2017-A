
//Comentario en línea
/*
Comentario de varias líneas
 */

console.log("Hello World");

var jose = {
    nombre:"José",
    apellido: "Zurita",
    fechaNacimiento: new Date(),
    imprimir:function() {
        console.log("nombre completo: " + this.nombre + " " + this.apellido )
    },
    ano:function() {
        return this.fechaNacimiento.getFullYear();
    },
    diferenciaEdad:function(edadAComparar){
        return Math.abs(this.fechaNacimiento.getFullYear()-edadAComparar);
    }
};


jose.imprimir();
console.log(jose.ano());
console.log(jose.diferenciaEdad(1997));
