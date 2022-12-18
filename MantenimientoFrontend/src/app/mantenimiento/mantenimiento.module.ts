import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistraMantenimientoComponent } from './registra-mantenimiento/registra-mantenimiento.component';
import { DetalleMantenimientoComponent } from './detalle-mantenimiento/detalle-mantenimiento.component';
import { ListaMantenimientoComponent } from './lista-mantenimiento/lista-mantenimiento.component';
import { EdiatrMantenimientoComponent } from './ediatr-mantenimiento/ediatr-mantenimiento.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MantenimientoService } from '../services/mantenimiento.service';



@NgModule({
  declarations: [
    RegistraMantenimientoComponent,
    DetalleMantenimientoComponent,
    ListaMantenimientoComponent,
    EdiatrMantenimientoComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  providers:[
    MantenimientoService,
    RegistraMantenimientoComponent
  ]
})
export class MantenimientoModule { }
