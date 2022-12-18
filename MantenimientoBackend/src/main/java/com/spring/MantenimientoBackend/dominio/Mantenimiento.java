
package com.spring.MantenimientoBackend.dominio;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import lombok.Data;

@Data
@Table(name = "mantenimientos")
@Entity(name = "Mantenimiento")
public class Mantenimiento implements Serializable {

	@Id
	@Column(length = 5)
	private String id;
	@Column(length = 45)
	private String marca;
	@Column(length = 45)
	private String modelo;
	@Column(length = 5)
	private String anoFabricacion;
	private Date fechaMantenimiento;
	private double monto;
	@Column(length = 10)
	private String kilometraje;

	public Mantenimiento() {
	}


	public Mantenimiento(String id, String marca, String modelo, String anoFabricacion, Date fechaMantenimiento,
			double monto, String kilometraje) {
		this.id = id;
		this.marca = marca;
		this.modelo = modelo;
		this.anoFabricacion = anoFabricacion;
		this.fechaMantenimiento = fechaMantenimiento;
		this.monto = monto;
		this.kilometraje = kilometraje;
	}



	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getMarca() {
		return marca;
	}

	public void setMarca(String marca) {
		this.marca = marca;
	}

	public String getModelo() {
		return modelo;
	}

	public void setModelo(String modelo) {
		this.modelo = modelo;
	}

	

	public String getAnoFabricacion() {
		return anoFabricacion;
	}


	public void setAnoFabricacion(String anoFabricacion) {
		this.anoFabricacion = anoFabricacion;
	}


	public Date getFechaMantenimiento() {
		return fechaMantenimiento;
	}

	public void setFechaMantenimiento(Date fechaMantenimiento) {
		this.fechaMantenimiento = fechaMantenimiento;
	}

	public double getMonto() {
		return monto;
	}

	public void setMonto(double monto) {
		this.monto = monto;
	}

	public String getKilometraje() {
		return kilometraje;
	}

	public void setKilometraje(String kilometraje) {
		this.kilometraje = kilometraje;
	}

}
