const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }
    //Get GitHub
    getGithub() {
        return this.github;
    }
    //ask to see if object or job title
    getRole() {
        return "Engineer";
    }
}
module.exports = Engineer

