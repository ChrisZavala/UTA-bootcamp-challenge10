//we need to bring the variables to the html to populate the data. 
//We need three sections Manager, Engineer, Intern: 
const generateTeam = team => {

   //Populate the Manager data. 
   const createManager = manager=>{
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



   //Populate the Intern data. 
   
   
   










}