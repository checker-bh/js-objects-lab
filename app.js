const pokemon = require('./data.js')
const game = {
  party: [],
  gyms: [
    { location: "Pewter City", completed: false, difficulty: 1 },
    { location: "Cerulean City", completed: false, difficulty: 2 },
    { location: "Vermilion City", completed: false, difficulty: 3 },
    { location: "Celadon City", completed: false, difficulty: 4 },
    { location: "Fuchsia City", completed: false, difficulty: 5 },
    { location: "Saffron City", completed: false, difficulty: 6 },
    { location: "Cinnabar Island", completed: false, difficulty: 7 },
    { location: "Viridian City", completed: false, difficulty: 8 },
  ],
  items: [
    { name: "potion", quantity: 4 },
    { name: "pokeball", quantity: 8 },
    { name: "rare candy", quantity: 99 },
  ],
};

// Exercise 1: 
console.log("Exercise 1:")
console.dir(pokemon, { maxArrayLength: null })

// Exercise 2: 
console.log("Exercise 2:", game);

// Exercise 3:
console.log("Exercise 3:");
game.difficulty = "Medium";
console.log(game);

// Exercise 4: 
console.log("Exercise 4:");
game.party.push(pokemon.find(p => p.starter && p.number === 1));
console.log(game.party);

// Exercise 5: 
console.log("Exercise 5:");
game.party.push(
  pokemon.find(p => p.number === 4),
  pokemon.find(p => p.number === 7),
  pokemon.find(p => p.number === 25)
);
console.log(game.party);

// Exercise 6: 
console.log("Exercise 6:");
game.gyms.forEach(gym => {
  if (gym.difficulty < 3) {
    gym.completed = true;
  }
});
console.log(game.gyms);

// Exercise 7:
console.log("Exercise 7:");
const evolvePokemon = (pokemonNumber, evolvedPokemonNumber) => {
  const index = game.party.findIndex(p => p.number === pokemonNumber);
  if (index !== -1) {
    game.party.splice(index, 1, pokemon.find(p => p.number === evolvedPokemonNumber));
  }
};
evolvePokemon(1, 2);
console.log(game.party);


//Exercise 8:

console.log("Exercise 8:");
game.party.forEach(pokemon => {
  console.log(pokemon.name);
});

// Exercise 9: 
console.log("Exercise 9:\n");
const starterPokemon = pokemon.filter(p => p.starter);
starterPokemon.forEach(p => console.log(p.name));

// Exercise 10: 
console.log("Exercise 10:");
game.catchPokemon = function(pokemonObj) {
  this.party.push(pokemonObj);
};
game.catchPokemon(pokemon.find(p => p.number === 3)); 
console.log(game.party);

// Exercise 11: 
console.log("Exercise 11:");
game.catchPokemon = function(pokemonObj) {
  this.party.push(pokemonObj);
  const pokeball = this.items.find(item => item.name === "pokeball");
  if (pokeball) {
    pokeball.quantity--;
  }
};
game.catchPokemon(pokemon.find(p => p.number === 6)); 
console.log(game.items); 

// Exercise 12:
console.log("Exercise 12:");
game.gyms.forEach(gym => {
  if (gym.difficulty < 6) {
    gym.completed = true;
  }
});
console.log(game.gyms);

// Exercise 13: 
console.log("Exercise 13:");
game.gymStatus = function() {
  let gymTally = { completed: 0, incomplete: 0 };
  this.gyms.forEach(gym => {
    if (gym.completed) {
      gymTally.completed++;
    } else {
      gymTally.incomplete++;
    }
  });
  console.log(gymTally);
};
game.gymStatus(); 

// Exercise 14: 
console.log("Exercise 14:");
game.partyCount = function() {
  return this.party.length;
};
console.log(game.partyCount()); 


// Exercise 15: 
console.log("Exercise 15:");
game.gyms.forEach(gym => {
  if (gym.difficulty < 8) {
    gym.completed = true;
  }
});
console.log(game.gyms);

// Exercise 16: 
console.log("Exercise 16:");
console.log(game);

