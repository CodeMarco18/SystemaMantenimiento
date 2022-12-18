import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CuerpoComponent } from './estructura/cuerpo/cuerpo.component';
import{ HttpClientModule}from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import { ListaMantenimientoComponent } from './mantenimiento/lista-mantenimiento/lista-mantenimiento.component';
import { RegistraMantenimientoComponent } from './mantenimiento/registra-mantenimiento/registra-mantenimiento.component';
import { DetalleMantenimientoComponent } from './mantenimiento/detalle-mantenimiento/detalle-mantenimiento.component';
import { EdiatrMantenimientoComponent } from './mantenimiento/ediatr-mantenimiento/ediatr-mantenimiento.component';
import { MantenimientoModule } from './mantenimiento/mantenimiento.module';
import { MantenimientoService } from './services/mantenimiento.service';
import { EstructuraModule } from './estructura/estructura.module';


const appRoutes:Routes=[
  {path:'',component:CuerpoComponent},
  {path:'home',component:CuerpoComponent},
  {path:'mantenimientos', component:ListaMantenimientoComponent},
  {path:'agregarMantenimiento', component:RegistraMantenimientoComponent},
  {path:'detalleMantenimiento/:id', component:DetalleMantenimientoComponent},
  {path:'editarMantenimiento/:id', component:EdiatrMantenimientoComponent},

];
@NgModule({
  declarations: [
    AppComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EstructuraModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    AccordionModule,
    BrowserAnimationsModule,
    BrowserModule,
    MantenimientoModule

  ],
  providers: [
    MantenimientoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
