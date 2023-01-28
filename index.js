//Variable declaration: 
const inquirer = require('inquirer');
const path = require('path');
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const fs = require("fs");
teamArray = [];
const DIST = path.resolve(__dirname, "dist");
const outputPath = path.join(DIST, "team.html");
const generateTeam = require("./src/template.js");



//Need an array for all the information that the team will need. 
//Manger

//Runs the application: 

function runApp() {
  console.log(`
    -----------------------------------------------------------------------------
    Welcome to the Team Profile Generator! 
    Answer the following questions to feed information to create your Team Profile.
    -----------------------------------------------------------------------------
    `);

  function createTeam() {
    inquirer.prompt([{
      type: "list",
      message: "What type of employees are you liking to add to your team: Manager, Engineer, Intern?",
      name: "addEmployee",
      choices: ["Manager", "Engineer", "Intern", "No more team members are needed."]
    }]).then(function (input) {
      switch (input.addEmployee) {
        case "Manager":
          addManager();
          break;
        case "Engineer":
          addEngineer();
          break;
        case "Intern":
          addIntern();
          break;

        default:
          createHtml();
      }
    })
  }

  function addManager() {
    inquirer.prompt([
      {
        type: "input",
        name: "managerName",
        message: "What is the Manager's name?"
      },
      {
        type: "input",
        name: "managerId",
        message: "What is the Manager's ID?"
      },
      {
        type: "input",
        name: "managerEmail",
        message: "What is the Manager's Email?"
      },
      {
        type: "input",
        name: "managerOfficeNumber",
        message: "What is the Manager's Office Number?"
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
        type: "input",
        name: "engineerName",
        message: "What is the Engineer's Name?"
      },
      {
        type: "input",
        name: "engineerId",
        message: "What is the Engineer's ID?"
      },
      {
        type: "input",
        name: "engineerEmail",
        message: "What is the Engineer's Email?"
      },
      {
        type: "input",
        name: "engineerGithub",
        message: "What is the Engineer's GitHub username?"
      }
    ]).then(answers => {
      const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
      teamArray.push(engineer);
      createTeam();
    });

  }
  function addIntern() {
    inquirer.prompt([
      {
        type: "input",
        name: "internName",
        message: "What is the intern's Name?"
      },
      {
        type: "input",
        name: "internId",
        message: "What is the Intern's ID?"
      },
      {
        type: "input",
        name: "internEmail",
        message: "What is the intern's email address?"
      },
      {
        type: "input",
        name: "internSchool",
        message: "What school does the Intern attend?"
      }
    ]).then(answers => {
      const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
      teamArray.push(intern);
      createTeam();
    });
  }
  //this is the end of the function. The main function
  function createHtml() {
    console.log(`
  --------------------------------------------
  Congrats! Your Team Profile has been created! 
  Your profile is in the 'dist' folder. Enjoy!
  --------------------------------------------
  `)
    fs.writeFileSync(outputPath, generateTeam(teamArray))
  }
  createTeam();
}//end of runApp func.

//the actually initialization of the function runApp
runApp();