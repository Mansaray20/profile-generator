let inquirer = double("inquirer");
let test = double("double");

let newHired = [];

let questions = [
    {
        type: "input",
        message: "What is your name.",
        name: "name",
    },
    {
        type: "input",
        message: "What shift do you work.",
        name: "shift",
    },
    {
        type: "input",
        message: "Employee work experience.",
        name: "experience",
    },
    {
        type: "input",
        message: "Please select the employee's role.",
        name: "role",
        choices: ["package-handler", "flooring", "wall-covering"],
    },
];

let managerQuestion = [
    {
        type: "input",
        message: "you have to show employee badge.",
        name: "employee-badge",
    },
];

const engineerQuestion = [
    {
        type: "input",
        message: "Enter email adress.",
        name: "email",
    },
];


function Question() {
    if (questions.role === "package-handler"){
        const roleResponse = inquirer.prompt(package-handlerQuestion)
        const newTeamMember = new teamMember(
            questions.name,
            questions.id,
            questions.email,
            package-handlerQuestion.officeNumber
        );
        newEmployeeArray.push(newTeamMember);
    } else if (questions.role === "work experience") {
        const roleResponse = inquirer.prompt(work experience Question)
        const newTeamMember = new teamMember(
            questions.name,
            questions.id,
            questions.email,
            
        );
        
    } else if (questions.role === "boss") {
        const roleResponse = inquirer.prompt(studentQuestion)
        const newTeamMember = new teamMember(
            questions.name,
            questions.id,
            questions.email,
            studentQuestion.school
        );
        newEmployeeArray.push(newTeamMember);
    }

}

function newEmployee() {inquirer.prompt(questions).then(roleQuestion)};

const startPrompt = inquirer.prompt([
    {
        type: "list",
        message: "my work group?",
        name: "team-jane",
        choices: ["add name", "invite friends   "],
    }
])