const brain = require('brain.js');

const net = new brain.recurrent.LSTM();

const trainingData = [
  { input: 'Hi', output: 'Hello' },
  { input: 'How are you?', output: 'I am good.' },
  { input: 'What is your name?', output: 'My name is Chatbot.' },
  {input: 'how long to ship?' , output: '7-12 business days worldwide via DHL friend'},
  {input: 'do you guys have stock?', output: 'yes we are currently in stock for everything we have on our site'},
  {input: 'do you guys ship to brazil?', output: 'yes we ship worldwide via DHL friend'}
  // Add more training data as needed
];

const iterations = 100; // Experiment with different values

net.train(trainingData, { iterations });

const input = 'do you guys ship to europe?';
const output = net.run(input);
console.log(output);




