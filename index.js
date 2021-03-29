function nextHealthy(knights, searchIndex) {
  const shouldIRestart = knights.length - 1 < searchIndex;
  const actualIndex = shouldIRestart ? 0 : searchIndex;
  const currentKnight = knights[actualIndex];
  if (currentKnight.life > 0) return currentKnight;
  return nextHealthy(knights, searchIndex + 1);
}

const knights = [
  { name: "K1", life: 100 },
  { name: "K2", life: 100 },
  { name: "K3", life: 100 },
  { name: "K4", life: 100 },
  { name: "K5", life: 100 },
  { name: "K6", life: 100 }
];

const hitPoints = [1, 2, 3, 4, 5, 6];

let stillAFight = true;

console.log("Starts here");

while (stillAFight) {
  for (let i = 0; i < knights.length; i++) {
    const knight = knights[i];
    if (knight.life <= 0) {
      continue;
    }

    const currentHitPoints =
      hitPoints[Math.floor(Math.random() * hitPoints.length)];

    const nextKnight = nextHealthy(knights, i + 1);
    const indexOfNext = knights.indexOf(nextKnight);
    
    if (nextKnight && nextKnight.life > 0) {
      const remainingLife = nextKnight.life - currentHitPoints;
      knights[indexOfNext].life = remainingLife;
      console.log(
        knight.name,
        " hits ",
        nextKnight && nextKnight.name,
        " by ",
        currentHitPoints,
        " damage points.",
        "remaining life: ",
        remainingLife
      );
      if (remainingLife <= 0) {
        console.log(nextKnight.name, "dies");
      }
    }
  }

  stillAFight = knights.filter((knight) => knight.life > 0).length > 1;
}

const winner = knights.find(knight => knight.life > 0);
console.log(winner && winner.name, "wins");
