/**
 * This class is responsible for getting or manipulating the data to and from the DB
 * @author JP
 *
 */

package com.visualdemo.demo.dao;

import java.util.List;
import javax.persistence.EntityManager;
import org.hibernate.query.Query;
import org.hibernate.Session;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.visualdemo.demo.modal.User;


@Repository
public class UserDAOImp implements UserDAO {

	@Autowired
	 private EntityManager entityManager;
	@Override
	 public List<User> get() {
	Session currSession = entityManager.unwrap(Session.class);
	  Query<User> query = currSession.createQuery("from User", User.class);
	  List<User> list = query.getResultList();
	  return list;
	}
	
	@Override
	 public User get(int id) {
	  Session currSession = entityManager.unwrap(Session.class);
	  User emp = currSession.get(User.class, id);
	  return emp;
	 }
	
	@Override
	 public void save(User User) {
	  
	  Session currSession = entityManager.unwrap(Session.class);
	  currSession.saveOrUpdate(User);
	}
	
	@Override
	 public void delete(int id) {
	  Session currSession = entityManager.unwrap(Session.class);
	  User emp = currSession.get(User.class, id);
	  currSession.delete(emp);
	}
}