import { Component, OnInit } from '@angular/core';
import {MovieInterface} from "../../classes/MovieInterface";
import {Http} from "@angular/http";
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  title = 'app works!';
  movieList: MovieInterface[];

  constructor(private _http:Http,
  private router:Router,
  private rutaActiva:ActivatedRoute) { }

  ngOnInit() {
    console.log("entra a on init");
    this._http.get("https://netflixroulette.net/api/api.php?director=David%20Fincher").subscribe(response=>{
      let jsonResponse = response.json();
      console.log(jsonResponse);
      this.movieList=jsonResponse;
      console.log(this.movieList);
    },error2 => {
      console.log(error2);
    })
  }

}
