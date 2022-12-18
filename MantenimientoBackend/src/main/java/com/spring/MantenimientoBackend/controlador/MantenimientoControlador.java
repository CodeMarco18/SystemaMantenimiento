
package com.spring.MantenimientoBackend.controlador;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.spring.MantenimientoBackend.dominio.Mantenimiento;
import com.spring.MantenimientoBackend.excepciones.ResourceNotFoundException;
import com.spring.MantenimientoBackend.repositorio.MantenimientoRepositorio;

@CrossOrigin(origins = "http://localhost:4200/")
@RestController
@RequestMapping("/mantenimientos")
public class MantenimientoControlador {
    @Autowired
    private MantenimientoRepositorio repositorio;
    
     @GetMapping("/mantenimientos")
    public List<Mantenimiento> listarTodosLosClientes(){
        return repositorio.findAll();
    }
    @PostMapping("/mantenimientos")
    public Mantenimiento guardarMantenimiento(@RequestBody Mantenimiento mantenimiento){
        return repositorio.save(mantenimiento);
    }
    @GetMapping("/mantenimientos/{id}")
    public ResponseEntity<Mantenimiento> obtenerMantenimiento(@PathVariable String id){
        Mantenimiento mantenimiento=repositorio.findById(id)
                .orElseThrow(()->new ResourceNotFoundException("El cliente no existe"+id));
        return ResponseEntity.ok(mantenimiento);
    }
    
    @PutMapping("/mantenimientos/{id}")
    public ResponseEntity<Mantenimiento> ActualizarMantenimiento(@PathVariable String id, @RequestBody Mantenimiento mantenimientoEditar){
        Mantenimiento mantenimiento=repositorio.findById(id)
                .orElseThrow(()->new ResourceNotFoundException("Mantenimiento no existe"+id));
        mantenimiento.setMarca(mantenimientoEditar.getMarca());
        mantenimiento.setModelo(mantenimientoEditar.getModelo());
        mantenimiento.setAnoFabricacion(mantenimientoEditar.getAnoFabricacion());
        mantenimiento.setFechaMantenimiento(mantenimientoEditar.getFechaMantenimiento());
        mantenimiento.setModelo(mantenimientoEditar.getModelo());
        mantenimiento.setKilometraje(mantenimientoEditar.getKilometraje());
        Mantenimiento mantenimientoActualizado=repositorio.save(mantenimiento);
        return ResponseEntity.ok(mantenimientoActualizado);
    } 
    @DeleteMapping("/mantenimientos/{id}")
     public ResponseEntity<Map<String,Boolean>> eliminarMantenimiento(@PathVariable String id){
        Mantenimiento mantenimiento=repositorio.findById(id)
                .orElseThrow(()->new ResourceNotFoundException("Mantenimiento no existe"+id));
       
        repositorio.delete(mantenimiento);
        Map<String,Boolean> respuesta=new HashMap<>();
        respuesta.put("eliminar", Boolean.TRUE);
        return ResponseEntity.ok(respuesta);
    } 
}
