CREATE DATABASE employee_tracker;
USE employee_tracker;

CREATE TABLE department(id int primary key auto_increment, name varchar(30));

CREATE TABLE role (id int primary key auto_increment, title varchar(30) , salary decimal(10,2), department_id int references department(id));

CREATE TABLE employee (id int primary key auto_increment, first_name varchar(30), last_name varchar(30), role_id int references role(id), manager_id int);
