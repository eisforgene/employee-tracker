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
    ]).then(function(response){
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

// function addEmployee();
// function addRole();
// function addDepartment();



function viewEmployees(){
    console.log("All Employeed")
    connection.query(`SELECT * FROM employee`)
    .then(function(data){
        // console.table(data);
        // console-table(data);
        console.log(data)
        start()
    }).catch(err => 
        console.log("Err",err)
        )
};



// function viewRoles();
// function viewDepartments();
// function exitApp();


