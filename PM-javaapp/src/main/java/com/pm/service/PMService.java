package com.pm.service;

import java.util.List;

import com.pm.model.Product;

public interface PMService {

	void save(Product product);

	Product findById(int id);

	List<Product> findAll();

	void update(Product product);

	void delete(int id);

}
