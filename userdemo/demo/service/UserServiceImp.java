/**
 * Defines the implementation
 * 
 * The service class is used to mark a class as a service provider. They are used to define business logic away from the controller.
 *  In this case, we don't perform any special operation in Service class so it could be avoided but it’s always a nice practice
 *  to have them implemented.
 * @author JP
 *
 */


package com.visualdemo.demo.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.visualdemo.demo.dao.UserDAO;
import com.visualdemo.demo.modal.User;


@Service
public class UserServiceImp implements UserService {

	@Autowired
	 private UserDAO UserDao;
	@Transactional
	 @Override
	 public List<User> get() {
	  return UserDao.get();
	}
	
	@Transactional
	 @Override
	 public User get(int id) {
	  return UserDao.get(id);
	}
	
	@Transactional
	 @Override
	 public void save(User User) {
	  UserDao.save(User);
	}
	
	@Transactional
	 @Override
	 public void delete(int id) {
	  UserDao.delete(id);
	}
}