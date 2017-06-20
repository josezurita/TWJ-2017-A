import {Component, OnInit} from '@angular/core';
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';
import {PlanetaStarWarsInterface} from "../../Interfaces/PlanetaStarWars";
import {UsuarioClass} from "../../clases/UsuarioClass";

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  nombre: string = "Adrian";
  nuevoUsuario:UsuarioClass = new UsuarioClass("");
  usuarios:UsuarioClass[] = [];

  planetas : PlanetaStarWarsInterface[] = [];

  crearUsuario() {
    console.log("Entró a crear usuario");

    this._http
      .post("http://localhost:1337/Usuario", this.nuevoUsuario)
      .subscribe(
        respuesta => {
          let respuestaJson = respuesta.json();
          console.log(respuestaJson);
          this.usuarios.push(respuestaJson);
          this.nuevoUsuario = new UsuarioClass();
        },
    error => {
      console.log(error);
    })
  }

  eliminarUsuario(usuario:UsuarioClass,indice:number) {
    this._http
      .delete("http://localhost:1337/usuario?id=" + usuario.id, indice)
      .subscribe(
        respuesta => {
          console.log("Usuario eliminado:" + usuario);
          this.usuarios.splice(indice, 1);
        },
        error => {
          console.log("Error: " + error);
        }
      )
  }
  // planetas2 : Array<PlanetaStarWars> =  []

  actualizarUsuario(usuario:UsuarioClass){
    let actualizacion = {
      nombre:usuario.nombre
    };
    this._http.put("http://localhost:1337/usuario/"+usuario.id, actualizacion)
      .map(res =>{
      return res.json();
    })
      .subscribe(
        res => {
          console.log("Usuario actualizado:" + res);
        },
        err => {
          console.log("Error: " + err);
        }
    )
  }



  //command + a  y luego command command+alt+l

  arregloUsuarios = [
    {
      nombre: "Adrian",
      apellido: "Eguez",
      conectado:true
    }, {
      nombre: "Mashi",
      apellido: "Correa",
      conectado:true
    }, {
      nombre: "Abdala",
      apellido: "Bucaram",
      conectado:false
    }, {
      nombre: "Juan Jose",
      apellido: "Flores",
      conectado:true
    }]

  constructor(private _http:Http) {
    //Inicia la clase
    //PERO EL COMPONENTE NO ESTA LISTO!!!!
  }

  ngOnInit() {
    //Esta listo el componente
    console.log(this.nuevoUsuario);

    this._http
      .get("http://localhost:1337/Usuario")
      .subscribe(
      respuesta => {
        let respuestaJson:UsuarioClass[] = respuesta.json();
        this.usuarios = respuestaJson.map(
          (usuario:UsuarioClass)=>{
            //cambiar el usuario
            usuario.editar = false;
            return usuario;
          }
          );
        console.log(this.usuarios);
      },
      error => {
        console.log(error);
      })
  }

  cambiarNombre(): void {
    console.log("Entro");

    this.nombre = "Rafico a Lenin";

  }

  cambiarOtroNombre() {
    this.nombre = "Lenin a Rafico";
  }

  cambiarNombreInput(nombreEtiqueta) {
    console.log(nombreEtiqueta.value);
    console.log(nombreEtiqueta.type);
    console.log(nombreEtiqueta.placeholder);


    this.nombre = nombreEtiqueta.value;

  }

  cargarPlanetas(){
    this._http
      .get("http://swapi.co/api/planets")
      //.map(response=>response.json()
      .subscribe(
        (response)=>{
          console.log("Response:",response);

          console.log(response.json());

          let respuesta = response.json();

          console.log(respuesta.next);

          this.planetas = respuesta.results;

          this.planetas = this.planetas.map(
            (planeta)=>{

              planeta.imagenURL = "/assets/Imagenes/"+planeta.name+'.jpg';

              return planeta;
            }
          );
          //Arreglo que tengo
          // MUTARLE
          // MISMO ARREGLO CON UN NUEVO ATRIBUTO
          // IMAGEN
        },
        (error)=>{
          console.log("Error:",error);
        },
        ()=>{
          console.log("Finally");
        }

      )
  }

}















