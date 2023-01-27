//we need to require the Employee from the lib: 
const Employee = require("../lib/Employee");


// we are going to create the first test to test create a new employee
test("Can create a new Employee", () =>{
    const employeeCreation = new Employee();
    expect(typeof(employeeCreation)).toBe("object");
});

test("We are going to be testing the object using the constructor" , () => {
    const employeeCreation = new Employee("Chris", 1, "chriszavala@email.com")
    expect(employeeCreation.name).toBe("Chris");
    expect(employeeCreation.id).toBe(1);
    expect(employeeCreation.email).toBe("chriszavala@email.com")
});

test("We are going to be testing the getName()", () => {
    const employeeCreation = new Employee("Chris", 1, "chriszavala@email.com")
    expect(employeeCreation.getName()).toBe("Chris");
});

test('We are testing getId()', () => {
    const employeeCreation = new Employee("Chris", 1, "chriszavala@email.com")
    expect(employeeCreation.getId()).toBe(1);
});

test('We are testing the getEmail()', () => {
    const employeeCreation = new Employee("Chris", 1, "chriszavala@email.com")
    expect(employeeCreation.getEmail()).toBe("chriszavala@email.com")
});

test('We are testing the getRole()', () => {
    const employeeCreation = new Employee("Chris", 1, "chriszavala@email.com")
    expect(employeeCreation.getRole()).toBe("Employee")
})




