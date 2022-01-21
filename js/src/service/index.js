function randomizeHitPoints() {
  const hitPointsRange = [1, 2, 3, 4, 5, 6];
  const randomNum = Math.random();
  return hitPointsRange[Math.floor(randomNum * hitPointsRange.length)];
}

function isHealthy(knight) {
  return knight.life > 0;
}

function nextHealthy(knights, searchIndex) {
  const shouldIRestart = knights.length < (searchIndex + 1);
  const actualIndex = shouldIRestart ? 0 : searchIndex;
  const currentKnight = knights[actualIndex];
  if (currentKnight && isHealthy(currentKnight)) return currentKnight;
  return nextHealthy(knights, actualIndex + 1);
}

function doDamage(rival) {
  const hitPoints = randomizeHitPoints();
  const remainingLife = rival.life - hitPoints;
  return { hitPoints, remainingLife };
}

function hasOnlyOneSurvivor(knights) {
  const filtered = knights.filter(knight => knight.life > 0);
  return filtered.length === 1;
}

function findWinner(knights) {
  return knights.find(knight => knight.life > 0);
}

const knightService = {
  isHealthy,
  nextHealthy,
  doDamage,
  hasOnlyOneSurvivor,
  findWinner
};

module.exports = knightService;