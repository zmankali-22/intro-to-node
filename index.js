require("dotenv").config();
const pokemonPrinetrFile = require("./pokemonPrinter");

console.log(process.env.ENVIRONMENT_MESSAGE);

console.log("Terminal app is starting");

pokemonPrinetrFile.pokemonPrinter();

console.log("BYe BYe ! Terminal app is finished");

var prompt = require('prompt-sync')({sigint: true});

let userWantsToExit = false;


do {
    let n = (parseFloat(prompt("How number of Pokemon do you want to see?    ")))
    console.log("You eneterd", n)
    let userInputToExit = prompt("Would You like to try again? ")
    if (userInputToExit === "y") {
        userWantsToExit = false;
    }
    else {
        userWantsToExit = true;
    }

}while (userWantsToExit === false);

// console.log("User enetered:", n)


// console.log(typeof(n))
// let nasn = parseFloat(n)
// console.log(typeof(nasn))
