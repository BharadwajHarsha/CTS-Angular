package com.pm.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.pm.model.Product;
import com.pm.repository.ProductRepository;

@Service
@Transactional
public class PMServiceImpl implements PMService {

	@Autowired
	private ProductRepository productRepository;

	@Override
	public void save(Product product) {
		productRepository.save(product);
	}

	@Override
	public Product findById(int id) {
		return productRepository.findById(id);
	}

	@Override
	public List<Product> findAll() {
		return productRepository.findAll();
	}

	@Override
	public void update(Product product) {
		productRepository.update(product);
	}

	@Override
	public void delete(int id) {
		productRepository.delete(id);
	}

}
