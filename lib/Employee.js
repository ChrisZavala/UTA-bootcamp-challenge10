class Employee{
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
//Here is going to be the GetName Function:
getName() {
    return this.name;
}


//Here is a GetID function:
getId() {
    return this.id;
}

//get email function;
getEmail() {
    return this.email;
}



getRole() {
    return "Employee"
}

}

module.exports = Employee;