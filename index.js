//Variable declaration: 
const inquirer = require('inquirer');
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const fs = require("fs");


const { default: inquirer } = require("inquirer");


//Need an array for all the information that the team will need. 
//Manger
//




//Runs the application: 
function runApp() {

    //Creating My Team: 

    function addManager () {
        inquirer.prompt ([{
            type: 'input',
            message: "What is your Manager's Name: ?",
            name: "name"
        }
        {
            type:'input',
            message: "What is your Manager's ID number? ",
            name: "id"  
        }
        {
            type:'input',
            message: "What is your Manager's ID Email? ",
            name: "email"  
        }
        {
            type:'input',
            message: "What is your Manager's ID Office Number? ",
            name: "officeNumber"  
        }
        {
            type:'list',
            message: "What is your Manager's ID Email? ",
            name: "email",  
            choices: ["Engineer", "Intern"]

            validate(choices) {
                if(choices === "Engineer") {
                    return 'You must choose either Engineer/Manager/Intern'
                }
            }
        }

    ])

    function addEngineer() {
        inquirer.prompt([
            {
                type: 'input',
                message: "What is your Engineer's Name: ?",
                name: "name"
            },
            {
                type: 'input',
                message: "What is your Engineer's ID number? ",
                name: "id"
            },
            {
                type: 'input',
                message: "What is your Engineer's ID Email? ",
                name: "email"
            },
            {
                type: 'input',
                message: "What is your Engineer's GitHub ID? ",
                name: "officeNumber"
            },
            {
                type: 'list',
                message: "What is your Manager's ID Email? ",
                name: "email",
                choices: ["Engineer", "Intern"],

                validate(choices) {
                    if (choices === "Engineer") {
                        return 'You must choose either Engineer/Manager/Intern'
                    }
                }
            }

        ])
    }
    function addIntern() {
        inquirer.prompt([
            {
                type: 'input',
                message: "What is your Intern's Name: ?",
                name: "name"
            },
            {
                type: 'input',
                message: "What is your Intern's ID number? ",
                name: "id"
            },
            {
                type: 'input',
                message: "What is your Intern's ID Email? ",
                name: "email"
            },
            {
                type: 'input',
                message: "What is your Intern's ID Office Number? ",
                name: "officeNumber"
            },
            {
                type: 'list',
                message: "What is your Intern's ID Email? ",
                name: "email",
                choices: ["Engineer", "Intern"],

                validate(choices) {
                    if (choices === "Engineer") {
                        return 'You must choose either Engineer/Manager/Intern'
                    }
                }
            }

        ])
    }

















}//this is the end of the function. The main function

    //the actually initialization of the function runApp
    runApp(addManager);