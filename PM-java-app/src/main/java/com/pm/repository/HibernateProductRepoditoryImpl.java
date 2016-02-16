package com.pm.repository;

import java.util.List;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.pm.model.Product;

@Repository
public class HibernateProductRepoditoryImpl implements ProductRepository {

	@Autowired
	private SessionFactory sessionFactory;

	@Override
	public void save(Product product) {
		sessionFactory.getCurrentSession().save(product);
	}

	@Override
	public Product findById(int id) {
		return (Product) sessionFactory.getCurrentSession().get(Product.class, id);
	}

	@Override
	public List<Product> findAll() {
		String hql = "from Product";
		Query query = sessionFactory.getCurrentSession().createQuery(hql);
		return query.list();
	}

	@Override
	public void update(Product product) {
		sessionFactory.getCurrentSession().update(product);
	}

	@Override
	public void delete(int id) {
		Session session = sessionFactory.getCurrentSession();
		session.delete(session.load(Product.class, id));
	}

}
