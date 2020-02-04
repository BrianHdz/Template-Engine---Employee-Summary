const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const axios = require("axios");



const questions = [
    {
        type: "list",
        name: "empType",
        message: "Are you a manager, engineer or intern?",
        choices: [
            "Manager",
            "Engineer",
            "Intern"
        ]
    },
    {
        type: "input",
        name: "gitHub",
        message: "What is your GitHub account name?"
    },
    {
        type: "input",
        name: "yourName",
        message: "What is your name?"
    },
    {
        type: "list",
        name: "ID",
        message: "What is your employee ID number?",
        choices: [
            "1",
            "2",
            "3",
            "4",
            "5"
        ]
    }
];

inquirer.prompt(questions)
    .then(answers => {
        let gitProfile = `${answers.gitHub}`
        let employeeName = `${answers.yourName}`
        console.log(gitProfile + ' & ' + employeeName + " were your inputs!"),

            function (err) {
                if (err) {
                    return console.log(err);
                };
            };
        const queryURL = "https://api.github.com/users/" + gitProfile;
        console.log(queryURL);

        axios
            .get(queryURL)
            .then(function (res) {
                const data = res.data;

                let html = function generateHTML(data, answers) {
                    return `<!DOCTYPE html>
                    <html lang="en">
                    
                    <head>
                    
                        <meta charset="UTF-8">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <meta http-equiv="X-UA-Compatible" content="ie=edge">
                        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
                            integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
                        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" />
                        <link href="https://fonts.googleapis.com/css?family=BioRhyme|Cabin&display=swap" rel="stylesheet">
                        <title>Template Engine</title>
                    
                    </head>
                    
                    <body>
                        <nav class="navbar navbar-light"
                            style="text-align: center !important; color: white; font-size: 40px; background-color: tomato; margin-bottom: 50px; padding: 30px;">
                            <p style="text-align: center">My Team</p>
                        </nav>
                    
                        <div class="row">
                    
                            <!-- Employee 1 -->
                            <div class="card text-white bg-primary sm-3" style="max-width: 14rem;">
                                <div class="card-header" id="name">
                                    <h5 class="card-title">Name Here</h5>
                                </div>
                                <div class="card-body" style="background-color: bisque; color: black;">
                                    <p class="card-text" id="idNumber">ID: 1</p>
                                    <p class="card-text" id="email">Email: inquisitor@fakemail.com</p>
                                    <p class="card-text" id="office">Office: 1</p>
                                </div>
                            </div>
                    
                            <!-- Employee 2 -->
                            <div class="card text-white bg-primary sm-3" style="max-width: 14rem;">
                                <div class="card-header" id="name">
                                    <h5 class="card-title">Name Here</h5>
                                </div>
                                <div class="card-body" style="background-color: bisque; color: black;">
                                    <p class="card-text" id="idNumber">ID: 2</p>
                                    <p class="card-text" id="email">Email: inquisitor@fakemail.com</p>
                                    <p class="card-text" id="office">GitHub: Ingenuiteer</p>
                                </div>
                            </div>
                    
                            <!-- Employee 3 -->
                            <div class="card text-white bg-primary sm-3" style="max-width: 14rem;">
                                <div class="card-header" id="name">
                                    <h5 class="card-title">Name Here</h5>
                                </div>
                                <div class="card-body" style="background-color: bisque; color: black;">
                                    <p class="card-text" id="idNumber">ID: 3</p>
                                    <p class="card-text" id="email">Email: inquisitor@fakemail.com</p>
                                    <p class="card-text" id="office">GitHub: Rocketeer</p>
                                </div>
                            </div>
                        </div>
                    
                        <div class="row">
                            <!-- Employee 4-->
                            <div class="card text-white bg-primary sm-3" style="max-width: 14rem;">
                                <div class="card-header" id="name">
                                    <h5 class="card-title">Name Here</h5>
                                </div>
                                <div class="card-body" style="background-color: bisque; color: black;">
                                    <p class="card-text" id="idNumber">ID: 4</p>
                                    <p class="card-text" id="email">Email: inquisitor@fakemail.com</p>
                                    <p class="card-text" id="office">GitHub: JimDrix</p>
                                </div>
                            </div>
                    
                            <!-- Employee 5 -->
                            <div class="card text-white bg-primary sm-3" style="max-width: 14rem;">
                                <div class="card-header" id="name">
                                    <h5 class="card-title">Name Here</h5>
                                </div>
                                <div class="card-body" style="background-color: bisque; color: black;">
                                    <p class="card-text" id="idNumber">ID: 5</p>
                                    <p class="card-text" id="email">Email: inquisitor@fakemail.com</p>
                                    <p class="card-text" id="office">School: UCI/Trilogy Bootcamp</p>
                                </div>
                            </div>
                        </div>
                    
                        </div>
                    
                    
                    </body>
                    
                    </html>`;
                }

                fs.writeFile("summary.html", html, function (err) {
                    if (err) {
                        throw err;
                    }
                    console.log("Saved summary.html file!")
                })
            })
    });


// get started by running "node app.js" in console log. 
// need to get a "generateHTML()" method built in. 
