import {Component, Input, OnInit} from '@angular/core';
import {MovieInterface} from "../../classes/MovieInterface";


@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  @Input() movie: MovieInterface;
  constructor() { }

  ngOnInit() {
  }

}
