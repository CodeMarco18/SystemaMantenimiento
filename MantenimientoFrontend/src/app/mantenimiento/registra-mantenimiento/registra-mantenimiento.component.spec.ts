import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistraMantenimientoComponent } from './registra-mantenimiento.component';

describe('RegistraMantenimientoComponent', () => {
  let component: RegistraMantenimientoComponent;
  let fixture: ComponentFixture<RegistraMantenimientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistraMantenimientoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistraMantenimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
