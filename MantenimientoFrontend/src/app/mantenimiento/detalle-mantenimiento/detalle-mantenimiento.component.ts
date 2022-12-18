import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Mantenimiento } from 'src/app/modelo/mantenimiento';
import { MantenimientoService } from 'src/app/services/mantenimiento.service';

@Component({
  selector: 'app-detalle-mantenimiento',
  templateUrl: './detalle-mantenimiento.component.html',
  styleUrls: ['./detalle-mantenimiento.component.css']
})
export class DetalleMantenimientoComponent implements OnInit {

 
  id!:String;
  mantenimiento:Mantenimiento = new Mantenimiento(); 
  constructor(private mantenimientoService:MantenimientoService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.mantenimientoService.obtenerMantenimientoPorId(this.id).subscribe(data=>{
      this.mantenimiento=data;
    });
  }

}
