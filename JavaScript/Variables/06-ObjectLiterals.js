/**
 * Created by jose.zurita on 10/5/17.
 */

function definirObjetoUsuario(nombre){
    return {
        nombre:nombre,
        saludar:function(){
            return "Hola"+this.nombre;
        },
        twitteo:function(tweet){
            return this.nombre+" twitteo sobre: "+tweet;
        },
    }
}

function definirObjetoUsuarioObjectLiterals(nombre){
    return {
        nombre,
        saludar(){
            return "Hola"+this.nombre;
        },
        twitteo(tweet){
            return this.nombre+" twitteo sobre: "+tweet;
        },
    }
}

var nuevaFuncion = (nombre, apellido) => {
    var usuario = {
        nombre:nombre,
        apellido
    };

    var usuario2 = {
        nombre,
        apellido
    };

    console.log(usuario.nombre);
    console.log(usuario.apellido);
    console.log(usuario2.nombre);
}

nuevaFuncion("Nombre","Apellido");