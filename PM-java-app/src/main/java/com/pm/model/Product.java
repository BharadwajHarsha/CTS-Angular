package com.pm.model;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement(name="product")
@Entity
@Table(name="PRODUCTS",schema="pm")
public class Product {

	@Id
	private int id;
	private String name;
	private double price;
	private String description;
	@Temporal(TemporalType.DATE)
	private Date make;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public double getPrice() {
		return price;
	}
	public void setPrice(double price) {
		this.price = price;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public Date getMake() {
		return make;
	}
	public void setMake(Date make) {
		this.make = make;
	}
	
	
	
	

}
