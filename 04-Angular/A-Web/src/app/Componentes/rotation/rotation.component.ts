import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-rotation',
  templateUrl: './rotation.component.html',
  styleUrls: ['./rotation.component.css']
})
export class RotationComponent implements OnInit {

  @Input() rotation:string;
  constructor() { }

  ngOnInit() {
  }

}
