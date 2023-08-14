const natural = require('natural');

const tokenizer = new natural.WordTokenizer();
const text = 'Tokenizing text with natural language processing';
const tokens = tokenizer.tokenize(text);
console.log(tokens);

const stemmer = natural.PorterStemmer;
const word = 'yelled';
const stem = stemmer.stem(word);
console.log(stem);

// const pos = new natural.BrillPOSTagger();
// pos.load('path/to/tagger'); // Load the tagger with the appropriate data file
// const sentence = ['I', 'love', 'natural', 'language', 'processing'];
// const taggedWords = pos.tag(sentence);
// console.log(taggedWords);

const classifier = new natural.BayesClassifier();
classifier.addDocument('I love this product', 'positive');
classifier.addDocument('I hate this product', 'negative');
classifier.train();
const testSentence = 'I really appreciate this product';
const sentiment = classifier.classify(testSentence);
console.log(sentiment);
