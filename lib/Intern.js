const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }
    //Get School;
    getSchool() {
        return this.school;
    }
    //ask to see if object or job title
    getRole() {
        return "School";
    }
}
module.exports = Intern