import {Component, OnInit} from '@angular/core';
import {MovieInterface} from "../classes/MovieInterface";
import {Http} from "@angular/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  movieList: MovieInterface[];

  constructor(private _http:Http) { }

  ngOnInit() {
    this._http.get("http://netflixroulette.net/api/api.php?director=Quentin%20Tarantino").subscribe(respuesta=>{
      let rJson = respuesta.json();
      console.log("respuesta json:", rJson);
      this.movieList=rJson;

    }, error=>{
      console.log("error: ", error);
    });
  }
}
