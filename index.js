require('dotenv').config()

console.log(process.env.ENVIRONMENT_MESSAGE)

console.log("Terminal app is starting")

const pokemon = require("pokemon")

let randomPokemon = pokemon.random()

console.log(`Today's pokemon is : ${randomPokemon}`)


console.log("BYe BYe ! Terminal app is finished")