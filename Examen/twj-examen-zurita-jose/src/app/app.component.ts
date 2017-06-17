import {Component, OnInit} from '@angular/core';
import {PasteleriaInterface} from "../classes/PasteleriaInterface";
import {Http} from "@angular/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app works!';
  pasteleriaList: PasteleriaInterface[];
  nuevaPasteleria: PasteleriaInterface={
    nombre: "",
    ciudad: "",
    correo: ""
  };

  constructor(private _http:Http) { }

  ngOnInit() {
    this._http.get("http://localhost:1337/pasteleria").subscribe(respuesta=>{
      let rJson = respuesta.json();
      console.log("respuesta json:", rJson);
      this.pasteleriaList=rJson;

    }, error=>{
      console.log("error: ", error);
    });
  }
}
