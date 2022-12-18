import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Mantenimiento } from 'src/app/modelo/mantenimiento';
import { MantenimientoService } from 'src/app/services/mantenimiento.service';

@Component({
  selector: 'app-lista-mantenimiento',
  templateUrl: './lista-mantenimiento.component.html',
  styleUrls: ['./lista-mantenimiento.component.css']
})
export class ListaMantenimientoComponent implements OnInit {

 
  id: String
  mantenimiento: Mantenimiento[];
  constructor(private mantenimientoService: MantenimientoService, private router: Router) { }

  ngOnInit(): void {
    this.listarMantenimientos();
  }

  private listarMantenimientos() {
    this.mantenimientoService.listaMantenimiento()
      .subscribe(data => {
        this.mantenimiento = data;
      });
  }

  detalleMantenimiento(id:String){
    this.router.navigate(['detalleMantenimiento',id])
  }
  editarMantenimiento(id:String){
    this.router.navigate(['editarMantenimiento',id])
  }
  eliminarMantenimiento(id:String){
    this.mantenimientoService.eliminarMantenimiento(id).subscribe(dato=>{
      console.log(dato);
      alert("Se elimino Mantenimiento correctamente");
     
      this.listarMantenimientos();
    })
  }

}
