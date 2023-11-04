import { Component, OnInit } from '@angular/core';
import { Cafe } from '../cafe'

@Component({
  selector: 'app-cafe-lista',
  templateUrl: './cafe-lista.component.html',
  styleUrls: ['./cafe-lista.component.css']
})
export class CafeListarComponent implements OnInit {

  public cafes : Array<Cafe> = []

  constructor() { }

  ngOnInit() {
  }

}
