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

  crearPasteleria(){

    let pasteleria:PasteleriaInterface={
      nombre: this.nuevaPasteleria.nombre,
      ciudad: this.nuevaPasteleria.ciudad,
      correo: this.nuevaPasteleria.correo};

    this._http.post("http://localhost:1337/pasteleria", pasteleria).subscribe(respuesta=>{
      let respuestaJson = respuesta.json();
      console.log("respuesta json:", respuestaJson);
      this.pasteleriaList.push(respuestaJson);
    }, error=>{
      console.log("error: ", error);
    });
  }

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
