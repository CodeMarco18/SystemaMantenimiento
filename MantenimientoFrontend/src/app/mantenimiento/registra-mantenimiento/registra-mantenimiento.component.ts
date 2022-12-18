import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Mantenimiento } from 'src/app/modelo/mantenimiento';
import { MantenimientoService } from 'src/app/services/mantenimiento.service';

@Component({
  selector: 'app-registra-mantenimiento',
  templateUrl: './registra-mantenimiento.component.html',
  styleUrls: ['./registra-mantenimiento.component.css']
})
export class RegistraMantenimientoComponent implements OnInit {

  mantenimiento:Mantenimiento=new Mantenimiento();
  constructor(private mantenimientoService:MantenimientoService, private router:Router) { }

  ngOnInit(): void {
  }

  guardarProducto(){
    this.mantenimientoService.registrarMantenimiento(this.mantenimiento)
    .subscribe(data=>{
      
      console.log(data);
      alert("Se registro correctamente..");
      this.router.navigate(["/mantenimientos"]);
    }, error=>console.log(error));

  }
  guardar(){
    console.log(this.mantenimiento);
    this.guardarProducto();
  }
}
