import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-orbital',
  templateUrl: './orbital.component.html',
  styleUrls: ['./orbital.component.css']
})
export class OrbitalComponent implements OnInit {

  @Input() orbital:string;
  constructor() { }

  ngOnInit() {
  }

}
