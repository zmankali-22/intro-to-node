require('dotenv').config()
const pokemonPrinetrFile = require("./pokemonPrinter")

console.log(process.env.ENVIRONMENT_MESSAGE)

console.log("Terminal app is starting")


pokemonPrinetrFile.pokemonPrinter()


console.log("BYe BYe ! Terminal app is finished")
console.log("fere k vayo")