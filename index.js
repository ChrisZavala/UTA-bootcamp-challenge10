//Variable declaration: 
const inquirer = require('inquirer');
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const fs = require("fs");
teamArray=[];






//Need an array for all the information that the team will need. 
//Manger
//




//Runs the application: 
function runApp() {
createTeam();
    //Creating My Team: 
    function createTeam() {
        inquirer.prompt([{
            type: "list",
            message: "What type of employees are you liking to add to your team: Manager, Engineer, Intern?",
            name: "addEmployee",
            choices: ["Manager", "Engineer", "Intern", "I am finished adding team members."]
        }]).then(function(input){
            switch(input.addEmployee){
                case "Manager":
                    addManager();
                    break;
                case "Engineer":
                    addEngineer();
                    break;
                case "Intern":
                    addIntern();
                default:
                    createHtml();
            }
        })
    }

    function addManager() {
        inquirer.prompt([{
            type: 'input',
            name: "managerName",
            message: "What is your Manager's Name? "
        },
        {
            type: 'input',
            name: "managerId",
            message: "What is your Manager's ID? "
        },
        {
            type: 'input',
            name: "managerEmail",
            message: "What is your Manager's email? "
        },
        {
            type: 'input',
            name: "managerOfficeNumber",
            message: "What is your Manager's Office Number? "
        }
    ]).then(answers => {
        const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
        teamArray.push(manager);
        createTeam();
      });
    }
        function addEngineer() {
            inquirer.prompt([
                {
                    type: 'input',
                    name: "engineerName",
                    message: "What is your Engineer's Name: ?"
                },
                {
                    type: 'input',
                    name: "engineerId",
                    message: "What is your Engineer's ID?"
                },
                {
                    type: 'input',
                    name: "engineerEmail",
                    message: "What is your Engineer's Email?"
                },
                {
                    type: 'input',
                    name: "engineerGithub",
                    message: "What is your Engineer's GitHub username?"
                },
                ]).then(answers => {
                    const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.managerOfficeNumber);
                    teamArray.push(engineer);
                    createTeam();
                  });
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
                    name: "school"
                },
                
                ]).then(answers => {
                    const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.school);
                    teamArray.push(intern);
                    createTeam();
                  });
        }


    }
//this is the end of the function. The main function
function createHtml() {
    fs.writeFile('./dist/test.html', (teamArray))
}
//the actually initialization of the function runApp
runApp();