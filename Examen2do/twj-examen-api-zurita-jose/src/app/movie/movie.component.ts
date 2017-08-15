import {Component, Input, OnInit} from '@angular/core';
import {Http} from "@angular/http";
import {MovieInterface} from "../../classes/MovieInterface";

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  @Input() movie: MovieInterface;
  constructor(private _http:Http) { }

  ngOnInit() {
  }

  guardarPelicula(movie){
    console.log("Entró a crear usuario");
    console.log(movie);
    this._http
      .post("https://javascript2017a.mybluemix.net/pelicula", this.movie)
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
