
package com.spring.MantenimientoBackend.repositorio;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.spring.MantenimientoBackend.dominio.Mantenimiento;

@Repository
public interface MantenimientoRepositorio extends JpaRepository<Mantenimiento, String>{
    
}
