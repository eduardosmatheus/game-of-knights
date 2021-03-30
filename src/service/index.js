function randomizeHitPoints() {
  const hitPointsRange = [1, 2, 3, 4, 5, 6];
  const randomNum = Math.random();
  return hitPointsRange[Math.floor(randomNum * hitPointsRange.length)];
}

function isHealthy(knight) {
  return knight.life > 0;
}

function nextHealthyKnight(knights, searchIndex) {
  const shouldIRestart = knights.length === (searchIndex + 1);
  const actualIndex = shouldIRestart ? 0 : searchIndex;
  console.log('Should I Restart?', shouldIRestart, searchIndex, knights.length, 'Actual index', actualIndex)
  const currentKnight = knights[actualIndex];
  console.log('Current', currentKnight)
  if (currentKnight && isHealthy(currentKnight)) return currentKnight;
  console.log('Searching next', searchIndex)
  return nextHealthyKnight(knights, actualIndex + 1);
}

function doDamage(rival) {
  const hitPoints = randomizeHitPoints();
  const remainingLife = rival.life - hitPoints;
  return [hitPoints, remainingLife];
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
  nextHealthyKnight,
  doDamage,
  hasOnlyOneSurvivor,
  findWinner
};

module.exports = knightService;