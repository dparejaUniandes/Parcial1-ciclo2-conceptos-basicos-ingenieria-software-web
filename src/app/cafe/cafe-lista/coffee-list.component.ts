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
  public totalCafeOrigen : number = 0;
  public totalCafeBlend : number = 0;
  public readonly blend : string = "Blend"
  public readonly cafeOrigen : string = "Café de Origen"

  constructor(private cafeService: CafeService) { }

  ngOnInit() {
    this.getCafes()
  }

  public getCafes() : void {
     this.cafeService.getCafes().subscribe(cafes => {
      this.cafes = cafes;
      this.totalCafeOrigen = this.sumarCafesPorTipo(this.cafeOrigen)
      this.totalCafeBlend = this.sumarCafesPorTipo(this.blend)
     })
  }

  private sumarCafesPorTipo(tipoCafe : string) : number {
    return this.cafes.filter( cafe => cafe.tipo === tipoCafe).reduce((cantidad, ) => cantidad+1, 0)
  }

}
