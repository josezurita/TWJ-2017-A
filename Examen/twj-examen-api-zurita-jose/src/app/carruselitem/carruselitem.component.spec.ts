import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarruselitemComponent } from './carruselitem.component';

describe('CarruselitemComponent', () => {
  let component: CarruselitemComponent;
  let fixture: ComponentFixture<CarruselitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarruselitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarruselitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
