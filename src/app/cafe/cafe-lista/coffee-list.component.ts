import { Component, OnInit } from '@angular/core';
import { Cafe } from '../cafe'
import { CafeService } from '../cafe.service';

@Component({
  selector: 'app-cafe-lista',
  templateUrl: './cafe-lista.component.html',
  styleUrls: ['./cafe-lista.component.css']
})
export class CafeListarComponent implements OnInit {

  public cafes : Array<Cafe> = [];

  constructor(private cafeService: CafeService) { }

  ngOnInit() {
    this.getCafes()
  }

  public getCafes() : void {
     this.cafeService.getCafes().subscribe(cafes => {
      this.cafes = cafes;
     })
  }

}
