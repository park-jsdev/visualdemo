# UserDemo
This is an early prototype for the user directory / social media feature for the project.
The database was built with MySQL, the table can be seen below.
The frontend was built with React, while the backend was developed with Java Spring Boot, set up with Web (MVC, Tomcat container), 
MySql Driver (JDBC), Spring Boot DevTools and Spring Data JPA.
The application was packaged with Maven.
The CRUD API was tested through Postman.
The application was deployed onto both an AWS EC2 and Google Cloud Platform VM Instance remote server.
SFTP was used to transfer the .jar file.

![](mainpage.png)
![](directory.png)

## MySQL
``
CREATE TABLE `tb_user` (`id` int(11) NOT NULL AUTO_INCREMENT, `name`
varchar(255) DEFAULT NULL, `gender` varchar(255) DEFAULT NULL,
`company` varchar(255) DEFAULT NULL, `dob` date DEFAULT NULL, PRIMARY KEY (`id`));

insert into `tb_user` (`id`, `name`, `gender`, `company`, `dob`)
values('1', 'Sundar Pichai', 'Male', 'Google', '1972-06-10');

insert into `tb_user` (`id`, `name`, `gender`, `company`, `dob`)
values('2', 'Mark Zuckerberg', 'Male', 'Facebook', '1984-05-14');

``

## TODO
- Automate with Jenkins
- Use NGNIX server on Docker
