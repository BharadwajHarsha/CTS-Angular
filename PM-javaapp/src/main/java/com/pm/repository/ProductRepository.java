package com.pm.repository;

import java.util.List;

import com.pm.model.Product;

public interface ProductRepository {

	void save(Product product);

	Product findById(int id);

	List<Product> findAll();

	void update(Product product);

	void delete(int id);

}
