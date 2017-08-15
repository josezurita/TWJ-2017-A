import { Component, OnInit } from '@angular/core';
import { MovieInterface } from "../../classes/MovieInterface";
import { Http } from "@angular/http";

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  movieList: MovieInterface[];
  constructor(private _http:Http) { }

  ngOnInit() {
    console.log("entra a on init");
    this._http.get("https://javascript2017a.mybluemix.net/pelicula").subscribe(response=>{
      let jsonResponse = response.json();
      console.log(jsonResponse);
      this.movieList=jsonResponse;
      console.log(this.movieList);
    },error2 => {
      console.log(error2);
    })
  }

}
