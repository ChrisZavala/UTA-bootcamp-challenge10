// We need a require of the Intern
const Intern = require("../lib/Intern");
//We are going to see if we can create a School name: 
test('We are going to be testing the object using the constructor', () => {
    const employeeCreation = new Intern("Chris", 1, "chriszavala@email.com", "UTA")
    expect(employeeCreation.school).toBe("UTA");
});

test('We are testing getting getSchool', () => {
    const employeeCreation = new Intern("Chris", 1, "chriszavala@email.com", "UTA")
    expect(employeeCreation.getSchool()).toBe("UTA");
});

//We are going to test the getRole().
test('WE are testing the getRole()', () => {
    const employeeCreation = new Intern("Chris", 1, "chriszavala@email.com")
    expect(employeeCreation.getRole()).toBe("Intern");
}); 
