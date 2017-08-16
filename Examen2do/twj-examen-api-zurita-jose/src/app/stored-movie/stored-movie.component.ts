import { Component, Input, OnInit } from '@angular/core';
import {Http, RequestOptions} from "@angular/http";
import {MovieInterface} from "../../classes/MovieInterface";

@Component({
  selector: 'app-stored-movie',
  templateUrl: './stored-movie.component.html',
  styleUrls: ['./stored-movie.component.css']
})
export class StoredMovieComponent implements OnInit {

  @Input() movie: MovieInterface;
  constructor(private _http:Http) { }

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

        },
        error => {
          console.log(error);
        })
  }

}
