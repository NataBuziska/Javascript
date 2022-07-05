
const sentence1 = 'Hello dear, how are you doing?';

/**
 * if the length of sentence1 is greater than or equals to 10
 *      assign 15 in result1
 * otherwise
 *      assign 25 in result1
 */
 
let sentence1Length = sentence1.length
let result1 = 15;
let result2 = 25;
let result = sentence1Length >= 10 ? result1 : result2;
console.log(`${sentence1Length}`)
console.log(`${result}`);


const sentence2 = "HeAlTh wAs EArlIer said To Be the AbILitY of the bOdY funcTiOnInG WElL."
/**
 * replace all instances of a/A with 'Alpha', print the result in console
 */
 
let sentence2_Replace_All_a_Alpha_IgnoreCase = sentence2.replace(/a/gi, 'Alpha');
console.log(`\nsentence2_Replace_All_a_Alpha_IgnoreCase -> ${sentence2_Replace_All_a_Alpha_IgnoreCase}`)

const sentence3 = "HeAlTh wAs EArlIer said To Be the AbILitY of the bOdY funcTiOnInG WElL.";
/**
 * print the result in console:
 * 1. the length of sentence-3
 * 2. does sentence-3 starts with 'health' (ignore cases)
 * 3. does sentence-3 contains with 'Body' (ignore cases)
 * 4. index of 'Body' in sentence3  (ignore cases)
 * 5. the last-character in sentence-3
 * 6. word 'Body' is present only once. (true or false)
 */

let sentence3Length = sentence3.length;
console.log(`\n${sentence3Length}`);

let sentence3StartsWithPattern = 'HeAlTh';
let sentence3StartsWith_health = sentence3.startsWith(sentence3StartsWithPattern);
console.log(`\nsentence3 -> ${sentence3}`);
console.log(`is ${sentence3} start with 'health' : ${sentence3StartsWith_health}`); 

let sentence3IncludsPattern = 'bOdY'
let sentence3Includes_Body = sentence3.includes(sentence3IncludsPattern);
console.log (`\nis ${sentence3} contains with 'Body' : ${sentence3Includes_Body}`);

let indexof_bOdY = sentence3.indexOf('bOdY');
console.log(`\n${indexof_bOdY}`);

let lastIndexof = sentence3.lastIndexOf('.');
console.log(`\nlastIndexof -> ${lastIndexof}`)

let lastIndexof_bOdY = sentence3.lastIndexOf('bOdY');
let indexof_bOdYEqlastIndexof_bOdY = indexof_bOdY == lastIndexof_bOdY;
console.log (`word 'Body' is present only once in ${sentence3} : ${indexof_bOdYEqlastIndexof_bOdY}`);


