const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber){
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    //Get OfficeNumber;
    officeNumber() {
        return this.officeNumber;
    }
    //ask to see if object or job title
    getRole() {
        return "Manager";
    }
        
}

module.exports = Manager