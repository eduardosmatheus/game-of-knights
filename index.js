const knights = require("./src/adapter/knights");
const service = require("./src/service");

console.log("Starts here");

while (!service.hasOnlyOneSurvivor(knights)) {
  for (let knightIndex = 0; knightIndex < knights.length; knightIndex++) {
    const knight = knights[knightIndex];
    if (!service.isHealthy(knight)) {
      continue;
    }
    const rival = service.nextHealthyKnight(knights, knightIndex + 1);
    if (!service.isHealthy(rival)) {
      continue;
    }
    const indexOfNext = knights.indexOf(rival);
    const [hitPoints, remainingLife] = service.doDamage(rival);
    knights[indexOfNext].life = remainingLife;
    console.log('Remaining', remainingLife)
    console.log(`${knight.name} hits ${rival.name} by ${hitPoints}`);
    if (remainingLife <= 0) {
      console.log(rival.name, "dies");
    }
  }
}

const winner = service.findWinner(knights);
console.log(winner.name, "wins");
