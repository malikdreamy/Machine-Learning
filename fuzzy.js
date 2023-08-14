const FuzzySet = require('fuzzyset.js');

// Create a fuzzy set with some predefined strings
const fuzzy = FuzzySet(['apple', 'banana', 'orange','yellow', 'how much for patek phillipe watches', 'do you guys ship to brazil?', 'where are you guys located?']);
let arr = ['apple', 'banana', 'orange','yellow', 'how much for patek phillipe watches', 'do you guys ship to brazil?', 'where are you guys located?'];
console.log(arr.length);
console.log(fuzzy.get("apple")[0][0]); // how to get position of element in array
console.log(fuzzy.length());
console.log(fuzzy.matchDict)
// Perform fuzzy matching on user input
const userInput = 'what state are you guys in?';
const matches = fuzzy.get(userInput);

// Check if there is a match with a sufficient similarity threshold
const similarityThreshold = 0.4;

if (matches && matches[0] && matches[0][0] >= similarityThreshold) {
  const bestMatch = matches[0][1];
  console.log(`User input "${userInput}" matched with "${bestMatch}"`);
} else {
  console.log('No match found');
}
