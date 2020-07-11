/**
 * Defines the controller; the focal point of an API app. The controller lets us define the actions 
 * we want to do when a certain API request is made at a particular endpoint.
 * @author JP
 *
 */


package com.visualdemo.demo.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.visualdemo.demo.service.UserService;
import com.visualdemo.demo.modal.User;

@RestController
@RequestMapping("/api")
public class UserController {

	 @Autowired
	 private UserService UserService;
	 
	 @GetMapping("/User")
	 public List<User> get() {
		 return UserService.get();
	 }
	 
	 @PostMapping("/User")
	 public User save(@RequestBody User User) {
		 UserService.save(User);
	  return User;
	 }
	 
	 @GetMapping("/User/{id}")
	 public User get(@PathVariable int id) {
		 return UserService.get(id);
	 }
	 
	 @DeleteMapping("/User/{id}")
	 public String delete(@PathVariable int id) {
	  
	 UserService.delete(id);
	  
	 return "User removed with id "+id;
	  
	}
	 
	 @PutMapping("/User")
	 public User update(@RequestBody User User) {
		 UserService.save(User);
		 return User;
	}
}