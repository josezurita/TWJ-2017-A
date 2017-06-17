import {Component, Input, OnInit} from '@angular/core';
import {PasteleriaInterface} from "../../classes/PasteleriaInterface";

@Component({
  selector: 'app-pasteleria',
  templateUrl: './pasteleria.component.html',
  styleUrls: ['./pasteleria.component.css']
})
export class PasteleriaComponent implements OnInit {

  @Input() pasteleria: PasteleriaInterface;
  constructor() { }

  ngOnInit() {
  }

}
