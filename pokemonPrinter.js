const pokemon = require("pokemon");

function pokemonPrinter() {
  let randomPokemon = pokemon.random();

  console.log(`Today's pokemon is : ${randomPokemon}`);
}

function pokemonNameFromNumber(targetNumber) {
  let result = pokemon.getName(targetNumber);
  return result;
}

module.exports = {
  pokemonPrinter,
  pokemonNameFromNumber,
};
