/**
 * Q1:
 * Convert any sentence into Titlecase
 * 
 * 'have a great day'   ->  'Have A Great Day'
 * 'YOu lIVe ONlY ONcE' ->  'You Live Only Once'
 * 'gooD mORNIng' -> 'Good Morning'
 * 'apple banana cherry' -> 'Apple Banana Cherry'
 * 
 * split the sentence
 */

 let sent = ('YOu lIVe ONlY ONcE have a great day');
 let sentinTitlecase = '';

const words = sent.toUpperCase().split(' ');
for (let i=0; i< words.length;i++) {
    let word1 = words[i]
    sentinTitlecase = sentinTitlecase + words[i].substring(0,1).concat(words[i].substring(1).toLowerCase()) + ' '
}
 console.log(`${sentinTitlecase}`)

/**
 * Q2:
 * Reverse a String (word by word)
 * 
 * 'have a great day'   ->  'day great a have'
 * 'good morning'   -> 'morning good'
 * 'hello dear how are you doing' -> doing you are how dear hello'
 * 'Learn' -> 'Learn'
 * 
 */
 let sent1 ='have a great day'
 let sent1reverse = ''
 sent1.split(' ')
  
 for (let i= sent1.split(' ').length-1; i>= 0; i--){
    let words = sent1.split(' ')[i]
    sent1reverse = sent1reverse + words + ' '
    
 }

 console.log(sent1reverse)


 /**    sent1reverse = sent1reverse + sent1[i].split(' ') + ' '
    console.log('9')
 }
*/

/**
 * Q3:
 * Find the total of numbers in the array
 * 
 * [1, 2, 3, 4, 5] -> 15
 * [1, 1, 1, 2, 3, 1, 2] -> 11
 * [1, -1] -> 0
 */

let nums = [1, 1, 1, 2, 3, 1, 2];
let total = 0;
for (let i=0; i<= nums.length-1;i++) {
    total =total+ nums[i];
}
console.log(total);

/**
 * Q4:
 * Find the average of the given array:
 * 
 * avg = totalOfValues/numberOfValues
 * 
 * [1, 2, 3, 4, 5] -> 15/5 -> 3
 * [1, 1, 1, 2, 3, 1, 2] -> 11/7 -> 1.xx
 * [1, -1] -> 0/2 -> 0
 */

 let nums1 = [1, 2, 3, 4, 5];
 let total1 = 0;
 for (let i=0; i<= nums1.length-1;i++) {
     total1 =(total1+ nums1[i]);
 }
 console.log(total1/nums1.length);
 let i=0
 while (i<= nums1.length-1) {
    
    i++;
 }
 console.log(total1/nums1.length);