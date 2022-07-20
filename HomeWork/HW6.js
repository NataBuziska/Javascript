/**
 * Q1:
 * Create a function to convert any sentence into Titlecase
 * 
 * 'have a great day'   ->  'Have A Great Day'
 * 'YOu lIVe ONlY ONcE' ->  'You Live Only Once'
 * 'gooD mORNIng' -> 'Good Morning'
 * 'apple banana cherry' -> 'Apple Banana Cherry'
 * 
 */

let sent = ('YOu lIVe ONlY ONcE');
function sentintoTitlecase (sent){
    let sentintoTitlecase = '';
    const words = sent.toUpperCase().split(' ');
   for (let i=0; i< words.length;i++) {
       let word1 = words[i]
       sentintoTitlecase = sentintoTitlecase + words[i].substring(0,1).concat(words[i].substring(1).toLowerCase()) + ' ';
   }
   return  sentintoTitlecase;
}
console.log(sentintoTitlecase('YOu lIVe ONlY ONcE'));
console.log(sentintoTitlecase('have a great day'));
console.log(sentintoTitlecase('apple banana cherry')); 
/**
 * Q2:
 * Create a function to reverse a String (word by word)
 * 
 * 'have a great day'   ->  'day great a have'
 * 'good morning'   -> 'morning good'
 * 'hello dear how are you doing' -> doing you are how dear hello'
 * 'Learn' -> 'Learn'
 * 
 */

 function toReverse (sent1){
 let sent1reverse = ''
 sent1.split(' ')
 for (let i= sent1.split(' ').length -1; i>= 0; i--){
    let words = sent1.split(' ')[i]
    sent1reverse = sent1reverse + words + ' '  
 }
 return sent1reverse;
}
console.log(toReverse('have a great day'));
console.log(toReverse('hello dear how are you doing'));
console.log(toReverse('Learn'))
/**
 * Q3:
 * Create a function to find the total of numbers in the array
 * 
 * [1, 2, 3, 4, 5] -> 15
 * [1, 1, 1, 2, 3, 1, 2] -> 11
 * [1, -1] -> 0
 */
 let nums = [1, 1, 1, 2, 3, 1, 2];
function total (nums){
        let total = 0;
    for (let i=0; i<= nums.length-1;i++) {
        total =total+ nums[i];
    }  
    return total;
}
console.log(total(nums));

/**
 * Q4:
 * Create a function to find the average of the given array:
 * 
 * avg = totalOfValues/numberOfValues
 * 
 * [1, 2, 3, 4, 5] -> 15/5 -> 3
 * [1, 1, 1, 2, 3, 1, 2] -> 11/7 -> 1.xx
 * [1, -1] -> 0/2 -> 0
 */
let nums1 = [1, -1];
function avg (){
let total1 = 0;
for (let i=0; i<= nums1.length-1;i++) {
    total1 =(total1+ nums1[i]);
}
return total1/nums1.length;
}
console.log(avg());

