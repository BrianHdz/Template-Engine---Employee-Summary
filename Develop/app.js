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
                let html = generateHTML(data, answers);

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
