package com.pm.web;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.pm.model.Product;
import com.pm.service.PMService;

//@Controller
@RestController
@RequestMapping("/products")
public class RESTPMController {

	@Autowired
	private PMService pmService;

	@RequestMapping(method = RequestMethod.GET, produces = { "application/xml", "application/json" })
	public ProductList loadAll() {
		List<Product> products = pmService.findAll();
		System.out.println("products - size :" + products.size());
		ProductList productList = new ProductList();
		productList.setProducts(products);
		return productList;
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.GET, produces = { "application/xml", "application/json" })
	public Product load(@PathVariable("id") int id) {
		return pmService.findById(id);
	}

	@RequestMapping(method = RequestMethod.POST, consumes = { "application/xml", "application/json" })
	public Product save(@RequestBody Product product) {
		pmService.save(product);
		return product;
	}
	
	@RequestMapping(value="/{id}",method = RequestMethod.PUT, consumes = { "application/xml", "application/json" })
	public Product update(@PathVariable("id") int id,@RequestBody Product product) {
		pmService.update(product);
		return product;
	}
	

	@RequestMapping(value="/{id}",method = RequestMethod.DELETE)
	public void delete(@PathVariable("id") int id) {
		pmService.delete(id);
	}

}
