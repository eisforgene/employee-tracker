USE employee_tracker;

insert into employee(first_name, last_name, role_id) values ("Alex", "Smith", 1);
insert into employee(first_name, last_name, role_id) values ("John", "Wayne", 2);
insert into employee(first_name, last_name, role_id) values ("Robert", "Doe", 3);
insert into employee(first_name, last_name, role_id) values ("John", "Roberts", 4);
insert into employee(first_name, last_name, role_id) values ("Albert", "Kim", 5);
insert into employee(first_name, last_name, role_id) values ("Daniel", "Park", 6);

insert into employee(first_name, last_name, role_id, manager_id) values ("Alexa", "Smith", 1, 1);
insert into employee(first_name, last_name, role_id, manager_id) values ("Johanna", "Wayne", 2,2);
insert into employee(first_name, last_name, role_id, manager_id) values ("Danielle", "Doe", 3, 3);
insert into employee(first_name, last_name, role_id, manager_id) values ("Esther", "Roberts", 4, 4);
insert into employee(first_name, last_name, role_id, manager_id) values ("Sarah", "Kim", 5, 5);
insert into employee(first_name, last_name, role_id, manager_id) values ("Kacey", "Park", 6, 6);

select * from employee;