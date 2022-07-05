const sentence = "HeAlTh wAs EArlIer said To Be the AbILitY of the bOdY funcTiOnInG WElL.";

/**
 * 1) if String has more than one instance of 'b' (ignoring cases), assign 10 into num
 * otherwise assign 20 into num
 * 
 * 2) print the result for:
 *      the sentence-length is greater than 20
 *      the sentence has only one instance of body (ignoring cases)
 *      the sentence starts and ends with same character which is '.'
 *      in the sentence 'said' appears before the word 'body' word
 * 
 */

let num1 = 10;
let num2 = 20;
let sentence_Replace_All_b_num1_num2_IgnoreCase = sentence.replace(`/b/gi, ${num1}, ${num2}`)
console.log (`sentence_Replace_All_b_num1_num2_IgnoreCase -> ${sentence_Replace_All_b_num1_num2_IgnoreCase}`)

let sentenceLength = sentence.length;
let sentenceLengthGrNum2 = sentenceLength > num2
console.log (`${sentenceLengthGrNum2}`);  

let indexof_bOdY = sentence.indexOf('bOdY');
let lastIndexof_bOdY = sentence.lastIndexOf('bOdY');
let indexof_bOdYEqlastIndexof_bOdY = indexof_bOdY == lastIndexof_bOdY;
console.log (`is ${sentence} has only one instance of_body : ${indexof_bOdYEqlastIndexof_bOdY} `);


let  sentenceStarstWith_dot = sentence.startsWith ('.')
let sentenceEndstWith_dot = sentence.endsWith ('.')
console.log (`is ${sentence} starts and ends with '.' : ${sentence.startsWith ('.') && sentence.endsWith ('.')}`);

let indeof_said = sentence.indexOf('said');
let indeof_bOdY = sentence.indexOf('bOdY');
let indeof_saidLeindeof_bOdY = indeof_said < indeof_bOdY; 
//console.log (`\n${indeof_said} < ${indeof_bOdY} = ${indeof_saidLeindeof_bOdY}`);

console.log (`\n${indeof_saidLeindeof_bOdY}`);


