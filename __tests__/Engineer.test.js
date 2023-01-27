// We need a require of the Engineer
const Engineer = require("../lib/Engineer");
//We are going to see if we can create a Gibhub user name: 
test('We are going to be testing the object using the constructor', () => {
    const employeeCreation = new Engineer("Chris", 1, "chriszavala@email.com", "chriszavala")
    expect(employeeCreation.github).toBe("chriszavala");
});

test('We are testing getting Github()', () => {
    const employeeCreation = new Engineer("Chris", 1, "chriszavala@email.com", "chriszavala")
    expect(employeeCreation.getGithub()).toBe("chriszavala");
});

//We are going to test the getRole().
test('WE are testing the getRole()', () => {
    const employeeCreation = new Engineer("Chris", 1, "chriszavala@email.com")
    expect(employeeCreation.getRole()).toBe("Engineer");
}); 