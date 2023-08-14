const stringSimilarity = require('string-similarity');


const response1 = 'how much is the price for the patek, ';
const response2 = 'Good morning!';
const response3 = 'How can I help you?';
const response4 = 'how much is the price for the rolex';

const responses = [response1, response2, response3, response4];

const matches = stringSimilarity.findBestMatch("waddup", responses);
const bestMatch = matches.bestMatch;

console.log(`Best match: "${bestMatch.target}" with similarity ${bestMatch.rating}`);

//put this in bot so it can match the key and then get the value pair in the map