// We need a require of the Intern
const Manager = require("../lib/Manager");
//We are going to see if we can create a School name: 
test('We are going to be testing the object using the constructor', () => {
    const employeeCreation = new Manager("Chris", 1, "chriszavala@email.com", "555-555-5555")
    expect(employeeCreation.officeNumber).toBe("555-555-5555");
});

test('We are testing getting getofficeNumber()', () => {
    const employeeCreation = new Manager("Chris", 1, "chriszavala@email.com", "555-555-5555")
    expect(employeeCreation.getOfficeNumber()).toBe("555-555-5555");
});

//We are going to test the getRole().
test('We are testing the getRole()', () => {
    const employeeCreation = new Manager("Chris", 1, "chriszavala@email.com")
    expect(employeeCreation.getRole()).toBe("Manager");
}); 
