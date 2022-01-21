const knightsAdapter = require("./src/adapter/knights");
const service = require("./src/service");

console.log("Starts here");

const knights = knightsAdapter;

function updateRemainingLife(knightIndex, { remainingLife }) {
  knights[knightIndex].life = remainingLife;
}

function fight(rival, updateFightResults = (_) => {}) {
  const rivalIndex = knights.indexOf(rival);
  const fightResults = service.doDamage(rival);
  updateFightResults(rivalIndex, fightResults);
  return fightResults;
}

while (!service.hasOnlyOneSurvivor(knights)) {
  for (let index = 0; index < knights.length; index++) {
    const knight = knights[index];
    if (!service.isHealthy(knight)) {
      continue;
    }
    const rival = service.nextHealthy(knights, index + 1);
    const { hitPoints, remainingLife } = fight(rival, updateRemainingLife);
    console.log(`${knight.name} hits ${rival.name} by ${hitPoints}`);
    if (remainingLife <= 0) {
      console.log(rival.name, "dies");
    }
  }
}

const winner = service.findWinner(knights);
console.log(winner.name, "wins");
