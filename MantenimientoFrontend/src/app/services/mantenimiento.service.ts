import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Mantenimiento } from '../modelo/mantenimiento';

@Injectable({
  providedIn: 'root'
})
export class MantenimientoService {

  private urlBackend="http://localhost:8080/mantenimientos/mantenimientos";

  constructor( private httMantenimiento:HttpClient) { }
  //lista los clientes del backend
  listaMantenimiento():Observable<Mantenimiento[]>{
    return this.httMantenimiento.get<Mantenimiento[]>(this.urlBackend);
  }
  registrarMantenimiento(mantenimiento:Mantenimiento):Observable<object>{
    return this.httMantenimiento.post<Mantenimiento>(this.urlBackend, mantenimiento);
  }
  obtenerMantenimientoPorId(id:String):Observable<Mantenimiento>{
    return this.httMantenimiento.get<Mantenimiento>(this.urlBackend+'/'+id);
  }
  actualizarMantenimiento(id:String, mantenimiento:Mantenimiento):Observable<Object>{
    return this.httMantenimiento.put(this.urlBackend+'/'+id, mantenimiento);
  }

  eliminarMantenimiento(id:String):Observable<Object>{
    return this.httMantenimiento.delete(this.urlBackend+'/'+id);
  }
}
