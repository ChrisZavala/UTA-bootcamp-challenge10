//we need to bring the variables to the html to populate the data. 
//We need three sections Manager, Engineer, Intern: 
const generateTeam = team => {

    //Populate the Manager data. 
    const createManager = manager => {
        return `
    <div class="card employee-card">
    <div class="card-header bg-primary text-white">
        <h2 class="card-title">${manager.getName()}</h2>
        <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${manager.getRole()}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${manager.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
            <li class="list-group-item">Office number: ${manager.getEmail()}</li>
        </ul>
    </div>
</div>

    `
    };


    //Populate the Engineer data. 

    const createEngineer = engineer => {
        return `
    <div class="card employee-card">
    <div class="card-header bg-primary text-white">
        <h2 class="card-title">${engineer.getName()}</h2>
        <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${engineer.getRole()}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${engineer.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
            <li class="list-group-item">Office number: ${engineer.getGithub()}</li>
        </ul>
    </div>
</div>

    `
    };



    //Populate the Intern data. 
    const createIntern = intern => {
        return `
    <div class="card employee-card">
    <div class="card-header bg-primary text-white">
        <h2 class="card-title">${intern.getName()}</h2>
        <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${intern.getRole()}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${intern.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
            <li class="list-group-item">Office number: ${intern.getSchool()}</li>
        </ul>
    </div>  
</div>

    `
    };

    //we are going to nee to populate the data into the code above: 
    const dataArray = [];
    dataArray.push(team
            .filter(employee => employee.getRole() === "Manager")
            .map(manager => createManager(manager))
    );
    dataArray.push(team
            .filter(employee => employee.getRole() === "Engineer")
            .map(engineer => createEngineer(engineer))
            .join("")
    );
    dataArray.push(team
            .filter(employee => employee.getRole() === "Intern")
            .map(intern => createIntern.getRole(intern))
            .join("")
    );
    //doing a .join for the data specifcally dataArray:
    return dataArray.join("");
}//end of the createTeam Function 
module.exports = team => {
    
}