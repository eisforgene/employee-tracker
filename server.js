const consoleTable = require('console-table');
const inquirer = require('inquirer');
const mysql = require('mysql2');

let connectString = {
    host: 'localhost', user: 'root', password: '', database: 'employee_tracker'
};

let connection = mysql.createConnection(connectString);

connection.connect(function (err) {
    if (err) throw err
    console.log('employee application connected');
    start();
});

function start() {
    inquirer.prompt([
        {
            type: 'list',
            choices: ["Add Employee", "Add Role", "Add Department", "View All Employees", "View All Roles", "View All Departments", "Update Employee", "Exit Application"],
            name: "entry"
        }
    ]).then(function (response) {
        console.log(response);
        switch (response.entry) {
            case 'Add Employee':
                addEmployee();
                break;
            case 'Add Role':
                addRole();
                break;
            case 'Add Department':
                addDepartment();
                break;
            case 'View All Employees':
                viewEmployees();
                break;
            case 'View All Roles':
                viewRoles();
                break;
            case 'View All Departments':
                viewDepartments();
                break;
            case 'Update Employee':
                updateEmployeeRole();
                break;
            case 'Exit Application':
                connection.end();
                break;
        }
    })
}

// view functions 

function viewRoles() {
    console.log("All Roles")
    connection.query(`SELECT * FROM role;`, function (err, data) {
        if (err) throw WeakSet;
        console.log(data);
        start();
    })
};

function viewDepartments() {
    console.log("All Departments")
    connection.query(`SELECT * FROM department`, function (err, data) {
        if (err) throw WeakSet;
        console.log(data);
        start();
    })
};

function viewEmployees() {
    console.log("All Employees")
    connection.query(`SELECT * FROM employee`, function (err, data) {
        if (err) throw WeakSet;
        console.log(data);
        start();
    })

};

function viewRoles() {
    console.log("All Roles")
    connection.query(`SELECT * FROM role`, function (err, data) {
        if (err) throw WeakSet;
        console.log(data);
        start();
    })

};

// add functions

function addDepartment() {
    inquirer.prompt([
        {
            type: 'input',
            name: "deptName",
            message: "Enter department name?"
        }
    ]).then(userEntry => {
        connection.query("insert into department(name)values(?);", userEntry.deptName, function (err, data) {
            if (err) throw WeakSet;
            console.log(data);
            start();
        })
    })
}

function addEmployee() {
    inquirer.prompt([
        {
            type: 'input',
            name: "first_name",
            message: "What is employee's first name?",
            validate: userEntry => {
                if (userEntry.length < 1) {
                    return "Please enter first name."
                }
                return true;
            }
        },           
        {
            type: 'input',
            name: "last_name",
            message: "What is employee's last name?",
            validate: userEntry => {
                if (userEntry.length < 1) {
                    return "Please enter last name."
                }
                return true;
            }
        },
        {
            type: 'input',
            name: "role_id",
            message: "What is there role # 1 - 6?",
            validate: userEntry => {
                if (userEntry.length < 1) {
                    return "Please enter role # 1 - 6."
                }
                return true;
            }
        },
        {
            type: 'input',
            name: "manager_id",
            message: "Enter employee's manager's ID #",
            validate: userEntry => {
                if (userEntry.length < 1) {
                    return "Please enter manager_id 1 - 6."
                }
                return true;
            }
        }
    ]).then(userEntry => {
        const insertEmployee = `INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUES(?,?,?,?)`;
        const employeeParams = [userEntry.first_name, userEntry.last_name, userEntry.role_id, userEntry.manager_id];

        connection.query(insertEmployee, employeeParams, function(err, data) {
            if (err) throw err;
            console.log(data);
            start();
        })
    })
}

function addRole() {
    inquirer.prompt([
        {
            type: 'input',
            name: "title",
            message: "Enter title",
            validate: userEntry => {
                if (userEntry.length < 1) {
                    return "Enter title"
                }
                return true;
            }
        },
        {
            type: 'input',
            name: "salary",
            message: "Enter employee's salary.",
            validate: userEntry => {
                if (userEntry.length < 1) {
                    return "Please enter salary."
                }
                return true;
            }
        },
        {
            type: 'input',
            name: "department_id",
            message: "Enter department id",
            validate: userEntry => {
                if (userEntry.length < 1) {
                    return "Please enter department id 1 - 6."
                }
                return true;
            }
        }
    ]).then(userEntry => {
        const insertRole = `INSERT INTO role(title, salary, department_id) VALUES(?,?,?)`;
        const roleParams = [userEntry.title, userEntry.salary, userEntry.department_id];

        connection.query(insertRole, roleParams, function (err, data) {
            if (err) throw err;
            console.log(data);
            start();
        })
    })
}

// update function

function updateEmployeeRole() {
    inquirer.prompt([
        {
            name: "id",
            type: "input",
            message: "What is the ID of the employee you want to update?"
        },
        {
            name: "role_id",
            type: "input",
            message: "Employee's new role ID?",
            validate: userEntry => {
                if (userEntry.length < 1) {
                    return "Please enter valid ID"
                }
                return true;
            }
        }
    ]).then(function (userEntry) {
        const updateEmployeeRole = `UPDATE employee SET role_id = ? WHERE id = ?`;
        const updateParams = [userEntry.id, userEntry.role_id]

        connection.query(updateEmployeeRole, updateParams, function(err, data) {
            if (err) throw err;
            console.log(data);
            start();
        })
    })
};