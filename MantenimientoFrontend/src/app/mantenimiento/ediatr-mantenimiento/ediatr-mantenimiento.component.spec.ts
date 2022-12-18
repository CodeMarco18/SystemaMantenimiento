import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdiatrMantenimientoComponent } from './ediatr-mantenimiento.component';

describe('EdiatrMantenimientoComponent', () => {
  let component: EdiatrMantenimientoComponent;
  let fixture: ComponentFixture<EdiatrMantenimientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdiatrMantenimientoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EdiatrMantenimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
