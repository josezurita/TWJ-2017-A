import {Component, OnInit} from '@angular/core';
import {MovieInterface} from "../classes/MovieInterface";
import {Http} from "@angular/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';
  movieList: MovieInterface[];

  constructor(private _http:Http) { } //private _http:Http

  ngOnInit() {
    console.log("entra a on init");
    this._http.get("http://netflixroulette.net/api/api.php?director=Quentin%20Tarantino").subscribe(response=>{
      let jsonResponse = response.json();
      console.log(jsonResponse);
      this.movieList=jsonResponse;
      console.log(this.movieList);
    },error2 => {
      console.log(error2);
    })
    /*this._http.get("").subscribe(respuesta=>{
     let rJson = respuesta.json();
     console.log("respuesta json:", rJson);
     this.movieList=rJson;
     }, error=>{
     console.log("error: ", error);
     });*/
  }
}
