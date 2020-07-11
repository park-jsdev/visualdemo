/** DAO or, Database Access Object is a pattern most used in JAVA oriented stacks where an interface is used to provide access to the DB.
 *  Usage of DAO provides a logical separation of business logic from persistence (data) logic.

 * @author JP
 */

package com.visualdemo.demo.dao;

import java.util.List;
import com.visualdemo.demo.modal.User;;


public interface UserDAO {
	List<User> get();
	User get(int id);
	void save(User user);
	void delete(int id);
}
