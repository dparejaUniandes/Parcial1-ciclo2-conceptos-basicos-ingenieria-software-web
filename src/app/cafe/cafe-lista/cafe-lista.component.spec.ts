/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { faker } from '@faker-js/faker';

import { CafeListarComponent } from './cafe-lista.component';
import { CafeService } from '../cafe.service';
import { Cafe } from '../cafe';

describe('CafeListarComponent', () => {
  let component: CafeListarComponent;
  let fixture: ComponentFixture<CafeListarComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ CafeListarComponent ],
      providers: [CafeService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CafeListarComponent);
    component = fixture.componentInstance;

    for(let i = 0; i < 3; i++) {
      const cafe = new Cafe(
        faker.number.int(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.number.int(),
        faker.image.url(),
        )
        component.cafes.push(cafe);
      }
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('Debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('Debería tener 4 elementos <tr> ', () => {
    expect(debug.queryAll(By.css('tr'))).toHaveSize(4);
  });

  it('Debería tener 3 elementos <td.fw-bold>', () => {
    expect(debug.queryAll(By.css('td.fw-bold'))).toHaveSize(3);
  });

  it('Debería tener los td con # 1, 2 y 3', () => {
    debug.queryAll(By.css('td.fw-bold')).forEach((td, i) => {
      const tdSecuencia: HTMLElement = td.nativeElement;
      expect(Number(tdSecuencia.textContent)).toEqual(i+1);
    });
  });
  
  it('Los párrafos deberían contener el texto Total café', () => {
    debug.queryAll(By.css('p')).forEach(p=>{
      expect(p.nativeElement.textContent).toContain("Total café");
    });
  });

  it('El footer debería tener el texto Contact us: +57 3102105253 - info@elaromamagico.com - @elaromamagico', () => {
    const footer = debug.query(By.css('footer'));
    expect(footer.nativeElement.textContent).toContain("Contact us: +57 3102105253 - info@elaromamagico.com - @elaromamagico");
  });

  it('El footer debería tener el texto El aroma mágico', () => {
    const h1 = debug.query(By.css('h1'));
    expect(h1.nativeElement.textContent).toContain("El aroma mágico");
  });

  it('El src de la imagen debería ser ../assets/images/imagenCafe.png y el alt Imagen proceso café', () => {
    const img = debug.query(By.css('img'));
    expect(img.attributes['src']).toEqual("../assets/images/imagenCafe.png");
    expect(img.attributes['alt']).toEqual("Imagen proceso café");
  });
});
