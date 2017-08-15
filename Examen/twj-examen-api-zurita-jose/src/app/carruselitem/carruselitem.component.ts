import { Component, OnInit, Input } from '@angular/core';
import {MovieInterface} from "../../classes/MovieInterface";

@Component({
  selector: 'app-carruselitem',
  templateUrl: './carruselitem.component.html',
  styleUrls: ['./carruselitem.component.css']
})
export class CarruselitemComponent implements OnInit {

  @Input() movie: MovieInterface;
  constructor() { }

  ngOnInit() {
  }

}
