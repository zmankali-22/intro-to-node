function pokemonPrinter() {
    const pokemon = require("pokemon")

let randomPokemon = pokemon.random()

console.log(`Today's pokemon is : ${randomPokemon}`)
}

module.exports = {pokemonPrinter}