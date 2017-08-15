import {Component, Input, OnInit} from '@angular/core';
import {MovieInterface} from "../../classes/MovieInterface";

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  @Input() movie: MovieInterface;
  constructor() { }

  ngOnInit() {
  }

  guardarPelicula(movie){
    console.log("Entró a crear usuario");
    console.log(movie);

    /*this._http
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
        })*/
  }

}
