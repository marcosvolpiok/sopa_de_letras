const soup = require('./classes/soup');

const obSoup = new soup();
const result = obSoup.searchInSoup(process.argv[4], process.argv[2], process.argv[3]);
console.log(result);
