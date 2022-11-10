/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

// The quotes that will be used by the random quote geneartor are listed in this seciton. 
let quotes = [
  {quote: 'It does not do to dwell on dreams and forget to live' , source: 'Albus Dumbledore', year: '', citation: ''},
  {quote: 'Fear of a name incrases fear of the thing itself', source: 'Albus Dumbledore', year: '', citation: ''},
  {quote: 'Of all the trees we couldve hit, we had to get one that hits back.', source: 'Ron Weasley', year: '', citation: ''},
  {quote: 'When in doubt, go to the library.', source: 'Ron Weasley', year: '1987', citation: ''},
  {quote: 'Honestly, if you were any slower, youd be goning backward', source: 'Draco Malfoy', year: '', citation: 'Harry Potter Book Series'}
];

/***
 * `getRandomQuote` function
***/

// The getRandomQuote function pulls in the defined array, and assigns a random number based on the length of the array.
function getRandomQuote(array) {
  let randomNumber = array[Math.floor(Math.random() * array.length) + 1];
  return randomNumber;
}

// --Uncomment line below to test random quote function
// console.log(getRandomQuote(quotes));

/***
 * `printQuote` function
***/

//  randomQuote variable uses the getRandomQuote function and assign it to the new variable. 
// the printQuote variable takes the randomQuote variable and wraps it in the necesary HTML
let randomQuote = getRandomQuote(quotes);
let printQuote = `<p class="quotes"> ${randomQuote.quote} </p> <p class="source"> ${randomQuote.source}`;

// these conditional statements were created to check for the year and citation properties, and if the object contains them it adds it to the printQuote variable 
if (randomQuote.year !== "") {
  printQuote = printQuote + `<span> ${randomQuote.year} </span>`;
} 

if (randomQuote.citation !== "") {
  printQuote = printQuote + `<span> ${randomQuote.citation} </span>`;
}

// This line exists to close the <p> tag from the opening in the line that defines the variable printQuote
printQuote = printQuote + '</p>';

document.getElementById('quote-box').innerHTML = printQuote;

// Logging ranodom quote properties to console to verify that they work properly
console.log(randomQuote.quote);
console.log(randomQuote.soure);
console.log(randomQuote.year);

// Logging entire HTML string to console to verify that it works properly
console.log(printQuote);



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);