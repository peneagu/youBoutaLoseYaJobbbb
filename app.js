const Employee = require("./lib/employee");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const inquirer = require("inquirer");
const fs = require('fs');
const { off } = require("process");



class App {

    constructor() {

        this.teamArray = [];
        this.prompt = [
            {
                type: "list",
                message: "Enter your position",
                name: "position",
                choices: ["Manager", "Engineer", "Employee", "Intern", "Quit"],
            },
            {
                type: "input",
                message:  ({position}) => `${position}'s employee ID?`,
                name: "id",
                when: ({position}) => position != "Quit",
                validate: id => {
                    if (id) {
                        return true;
                    } else {
                        console.log('Enter  employee ID.');
                        return false;
                    }
                }
            },
            {
                type: "input",
                message:  ({position}) => `${position}'s office number?`,
                name: "officeN",
                when: ({position}) => position === "Manager || Employee", 
                validate: function (value) {
                    return value.match(/^\d+$/) ? true : "Invalid office number";
                }

            },
            {
                type: "input",
                message:  ({position}) => `${position}'s school?`,
                name: "school",
                when: ({position}) => position === "Intern",
                validate: school => {
                    if (school) {
                        return true;
                    } else {
                        console.log('Enter school.');
                        return false;
                    }
                }
            },
            {
                type: "input",
                message:  ({position}) =>  `${position}'s email?`,
                name: "email",
                when: (data) => data.position != "Quit",
                validate: email => {
                    if (email) {
                        return true;
                    } else {
                        console.log('Enter email.');
                        return false;
                    }
                }
            },
            {
                type: "input",
                message:  ({position}) =>  `What is the ${position}'s number?`,
                name: "number",
                when: (data) => data.position != "Quit",
                validate: email => {
                    if (email) {
                        return true;
                    } else {
                        console.log('Enter a number.');
                        return false;
                    }
                }
            },
            {
                type: "input",
                message:  ({position}) => `What is the ${position}'s github?`,
                name: "github",
                when: ({position}) => position === "Engineer",
                validate: github => {
                    if (github) {
                        return true;
                    } else {
                        console.log('Enter github username.');
                        return false;
                    }
                }

            },
            
        ];
    }

    // start() {
    //     this.nextEmployee();
    // }

    // nextEmployee() {
    //     inquirer.prompt(this.prompt).then(data => {
    //         switch (data.position) {
    //             case "Quit":
    //                 this.renderHTML();
    //                 console.log("Team Profile Generated");
    //                 break; 
    //         }
    //     });
    // }

}






const app = new App();
app.start();
module.exports = App;