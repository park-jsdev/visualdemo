/**
 * Defines the service and its implementation
 * 
 * The service class is used to mark a class as a service provider. They are used to define business logic away from the controller.
 *  In this case, we don't perform any special operation in Service class so it could be avoided but it’s always a nice practice
 *  to have them implemented.
 * @author JP
 *
 */

package com.visualdemo.demo.service;

import java.util.List;
import com.visualdemo.demo.modal.User;


public interface UserService {
	List<User> get();
	 User get(int id);
	 void save(User User);
	 void delete(int id);
}
