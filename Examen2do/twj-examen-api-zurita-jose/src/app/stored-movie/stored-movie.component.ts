import { Component, Input, OnInit } from '@angular/core';
import { Http, RequestOptions } from "@angular/http";
import { MovieInterface } from "../../classes/MovieInterface";
import { Globals } from '../globalVariables';

@Component({
  selector: 'app-stored-movie',
  templateUrl: './stored-movie.component.html',
  styleUrls: ['./stored-movie.component.css'],
  providers: [ Globals ]
})
export class StoredMovieComponent implements OnInit {

  @Input() movie: MovieInterface;
  constructor(private _http:Http, private globals: Globals) { }

  ngOnInit() {
  }

  borrarPelicula(movie){
    console.log("Entró a borrar usuario");
    console.log(movie);
    this._http
      .delete("https://javascript2017a.mybluemix.net/pelicula", new RequestOptions({
        headers: null,
        body: this.movie
      }))
      .subscribe(
        respuesta => {
          let respuestaJson = respuesta.json();
          console.log(respuestaJson);
          this.globals.movieList.splice(this.globals.movieList.indexOf(movie), 1);
          //this.usuarioborrado.emit(usuario);
          //this.usuarios.splice(this.usuarios.indexOf(usuario), 1)
        },
        error => {
          console.log(error);
        })
  }

}
