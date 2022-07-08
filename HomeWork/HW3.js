/**
 * Q1:
 * Print the length of the country name (without using String-length property)
 * 
 */
let countryName = 'USA USA';
let lastIndexof = countryName.lastIndexOf ('A')
console.log(`typeof countryName -> ${typeof countryName}`)
let lengthcountryName = lastIndexof + 1;
console.log(`\n${lengthcountryName}`);

let countries = ['USA', 'USA'];
console.log(`\ncountries-> ${countries}`);
console.log(`typeof countries -> ${typeof countries}`);
const totalCountries = countries.length;
console.log(totalCountries)

/**
 * Q2:
 * Count the number of words in the sentence
 */
const sentence = "HeAlTh wAs EArlIer said To Be the AbILitY of the bOdY funcTiOnInG WElL.";

const sentence_split = sentence.split(' ');
console.log(`\nsplit by words -> ${sentence_split}`)
const totalWords = sentence_split.length;
console.log(totalWords)

/**
 * Q3:
 * Convert any 4-word sentence into Titlecase
 * 'have a great day'   ->  'Have A Great Day'
 * 'YOu lIVe ONlY ONcE' ->  'You Live Only Once' 
 */
let sent1 = 'have a great day';
let sent1_split = sent1.split(' ');
let newsent1 = [sent1_split];
let word1 = sent1_split[0];
let word2 = sent1_split[1];
let word3 = sent1_split[2];
let word4 = sent1_split[3];
let firstLetter1 = word1.substring(0,1).toUpperCase();
let allLetters1 = firstLetter1.concat(word1.substring(1));
let word2_toUppercase = word2.toUpperCase();
let firstLetter3 = word3.substring(0,1).toUpperCase();
let allLetters3 = firstLetter3.concat(word3.substring(1));
let firstLetter4 = word4.substring(0,1).toUpperCase();
let allLetters4 = firstLetter4.concat(word4.substring(1));

let finalsent1 = allLetters1 + ' ' + word2_toUppercase + ' ' + allLetters3 + ' ' + allLetters4;
console.log(`\n${sent1} -> ${finalsent1}`)

let sent2 = 'YOu lIVe ONlY ONcE';
let sent2Lowercase = sent2.toLowerCase();
let sent2Lowercase_split = sent2Lowercase.split(' ');
let newsent2 = [sent2Lowercase_split];
let word5 = sent2Lowercase_split[0];
let word6 = sent2Lowercase_split[1];
let word7 = sent2Lowercase_split[2];
let word8 = sent2Lowercase_split[3];
let firstLetter5 = word5.substring(0,1).toUpperCase();
let allLetters5 = firstLetter5.concat(word5.substring(1));
let firstLetter6 = word6.substring(0,1).toUpperCase();
let allLetters6 = firstLetter6.concat(word6.substring(1));
let firstLetter7 = word7.substring(0,1).toUpperCase();
let allLetters7 = firstLetter7.concat(word7.substring(1));
let firstLetter8 = word8.substring(0,1).toUpperCase();
let allLetters8 = firstLetter8.concat(word8.substring(1));

let finalsent2 = allLetters5 + ' ' + allLetters6 + ' ' + allLetters7 + ' '+ allLetters8;
console.log(`\n${sent2} -> ${finalsent2}`)

/**
 * Q4:
 * Create abbreviation for any 4-word sentence
 * 
 * 'have a great day'   ->  'HAGD'
 * 'YOu lIVe ONlY ONcE' ->  'YLOO'
 * 'yOu neVER WaLK alOne'->  'YNWA'
 * 
 */

let charAt0 = sent1.charAt(0);
let charAt5 = sent1.charAt(5);
let charAt7 = sent1.charAt(7);
let charAt13 = sent1.charAt(13);
let abbrev1 = charAt0 + charAt5 + charAt7 + charAt13;
let abbrev1toUppercase = abbrev1.toUpperCase();
console.log(`\n${sent1} -> ${abbrev1toUppercase}`)


let charAt1 = sent2.charAt(0);
let charAt2= sent2.charAt(4);
let charAt3= sent2.charAt(9);
let charAt4= sent2.charAt(14);

let abbrev2 = (charAt1 + charAt2 + charAt3 + charAt4);
let finalabbrev2 = abbrev2.toUpperCase()
console.log(`\n${sent2} -> ${finalabbrev2}`)



let sent3 = 'yOu neVER WaLK alOne'
let sent3toUppercase = sent3.toUpperCase(); //to Uppercase
let abbrev3 = sent3toUppercase.charAt(0) + sent3toUppercase.charAt(4) + sent3toUppercase.charAt(10) + sent3toUppercase.charAt(15);
console.log(`\n${sent3} -> ${abbrev3}`)
 

 