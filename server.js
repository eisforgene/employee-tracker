const consoleTable = require('console-table');
const inquirer = require('inquirer');
const mysql = require('mysql2');
require('console-table');

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
            choices: ["Add Employee", "Add Role", "Add Department", "View All Employees", "View All Roles", "View All Departments", "Exit Application"],
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
            case 'Exit Application':
                exitApp();
                break;
        }
    })
}

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

// function addEmployee() { };
// function addRole();

function addDepartment() {
    inquirer.prompt([
        {
            type: 'input',
            name: "deptname",
            message: "Enter department name?"
        }
    ]).then(userEntry => {
        connection.query("insert into department(name)values(?);", userEntry.deptname, function (err, data) {
            if (err) throw WeakSet;
            console.log(data);
            start();
        })
    })
}

function viewEmployees() {
    console.log("All Employees")
    connection.query(`SELECT * FROM employee`, function (err, data) {
        if (err) throw WeakSet;
        console.log(data);
        start();
    })

};



// function viewRoles();
// function viewDepartments();
// function exitApp();


