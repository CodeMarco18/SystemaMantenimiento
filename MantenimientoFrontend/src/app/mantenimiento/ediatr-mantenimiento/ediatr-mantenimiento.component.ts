import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Mantenimiento } from 'src/app/modelo/mantenimiento';
import { MantenimientoService } from 'src/app/services/mantenimiento.service';

@Component({
  selector: 'app-ediatr-mantenimiento',
  templateUrl: './ediatr-mantenimiento.component.html',
  styleUrls: ['./ediatr-mantenimiento.component.css']
})
export class EdiatrMantenimientoComponent implements OnInit {

  id!:String;
  mantenimiento:Mantenimiento=new Mantenimiento();
  constructor(private mantenimietoService:MantenimientoService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.mantenimietoService.obtenerMantenimientoPorId(this.id).subscribe(data=>{
      this.mantenimiento=data;
    });
  }
  guardar(){
    this.mantenimietoService.actualizarMantenimiento(this.id,this.mantenimiento).subscribe(data=>{
      alert("Se actualizo correctamente el mantenimieto..");
      this.router.navigate(['/mantenimientos']);
    }, error =>console.log(error));
  }
}
