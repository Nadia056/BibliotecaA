import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BibliotecaMenuComponent } from './biblioteca-menu.component';

describe('BibliotecaMenuComponent', () => {
  let component: BibliotecaMenuComponent;
  let fixture: ComponentFixture<BibliotecaMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BibliotecaMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BibliotecaMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
