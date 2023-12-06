import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Prestamos2Component } from './prestamos2.component';

describe('Prestamos2Component', () => {
  let component: Prestamos2Component;
  let fixture: ComponentFixture<Prestamos2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Prestamos2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Prestamos2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
