import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Prestamos3Component } from './prestamos3.component';

describe('Prestamos3Component', () => {
  let component: Prestamos3Component;
  let fixture: ComponentFixture<Prestamos3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Prestamos3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Prestamos3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
