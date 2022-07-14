// Due date: Fri (Jul 15) eod

/**
 * create two variables, one is to store studentScore, and another one to store maxScore
 * based on the student percentage, print the grade.
 * 
 * Grade-A : 91-100% 
 * Grade-B : 81-90.99% 
 * Grade-c : 71-80.99%
 * Grade-D : 61-70.99%
 * Grade-E : 51-60.99%
 * Grade-F : less than 51%
 * 
 * if the studentScore is invalid or more than maxScore, print "Invalid student score"
 * 
 * studentScore = 40
 * maxScore = 50
 * 
 * Grade -> C
 */
var studentScore = 93
const maxScore = 100
if ( studentScore/maxScore*100 >= 100) {
   console.log ('Invalid student score');
  } else if (studentScore/maxScore*100 >= 91){
   console.log('Grade-A');
  } else if (studentScore/maxScore*100 >= 81 && studentScore/maxScore*100 < 91){
   console.log('Grade-B');
  } else if (studentScore/maxScore*100 >= 71 && studentScore/maxScore*100 < 81){
   console.log('Grade-C');
  } else if (studentScore/maxScore*100 >= 61 && studentScore/maxScore*100 < 71){
   console.log('Grade-D');
  } else if (studentScore/maxScore*100 >= 51 && studentScore/maxScore*100 < 61){ 
   console.log('Grade-E');
  } else   
   console.log('Grade-F');
    


/**
 * Create a variable and store any value in it.
 * if the myNumber is divisible by 5, print "divisible by 5"
 * if the myNumber is divisible by 3, print "divisible by 3"
 * if the myNumber is divisible by 5 and by 3, print "divisible by 5 and 3"
 * if the myNumber is NOT divisible by 5 and by 3, print the value in myNumber
 *
 * 
 * myNumber = 19
 * 
 * 
 */
 var myNumber = 19
   if (myNumber % 5 === 0 && myNumber % 3 ===0) {
   console.log ('divisible by 5 and 3');
  } else if (myNumber % 3 ===0){
   console.log('divisible by 3');
  } else if (myNumber % 5 == 0){
   console.log('divisible by 5');
  } else 
  console.log(myNumber)
  
  switch(myNumber) {
case (myNumber % 5 === 0 && myNumber % 3 ===0):
      console.log ('divisible by 5 and 3');
 break; 
 case (myNumber % 3 ===0):
      console.log ('divisible by 3');
 break;  
 case (myNumber % 5 === 0):
      console.log ('divisible by 5');
 break;    
 default:
      console.log(myNumber)
  }


/**
 * let planets = ['Earth', 'Mercury', 'Jupiter', 'Saturn', 'Mars', "Venus", 'Pluto'];
 * 
 * if Earth is mentioned as first name in the array, print "Earth is mentioned in expected index"
 * otherwise add Earth as first name in the array, then print the entire array.
 * 
 */

 let planets = ['Earth', 'Mercury', 'Jupiter', 'Saturn', 'Mars', "Venus", 'Pluto'];

 
 if (planets.indexOf('Earth') == 0){
    console.log (`'Earth is mentioned in expected index'`);
 } else {(lenAfterUnshiftFunction = planets.unshift('Earth')) 
   console.log(`\nplanets -> ${planets}`)
 }
 
 let newplanets = ['Earth', 'Mercury', 'Jupiter', 'Saturn', 'Mars', "Venus", 'Pluto'];
 switch(newplanets) {
      case (newplanets.indexOf('Earth') == 0):
            console.log (`'Earth is mentioned in expected index'`);
       break;      
   default:
      (lenAfterUnshiftFunction = newplanets.unshift('Earth')); 
      console.log(`\nplanets -> ${newplanets}`);
 }

 
/**
 * const sports = ['Football', 'Soccer', 'BASKETBALL', 'Baseball', 'Rugby'];
 * 
 * if BASKETBALL is present not in index-2, print "BASKETBALL is mentioned in the sports array"
 * if BASKETBALL is present in index-2, print "BASKETBALL is present at index-2"
 * if BASKETBALL is NOT present in the array, replace index-2 value with BASKETBALL and print the value which you replaced.
 * 
 */

 const sports = ['Football', 'Soccer', 'BASKETBALL', 'Baseball', 'Rugby']

 if (sports.includes ('BASKETBALL') && sports.indexOf('BASKETBALL')!== 2){
   console.log (`"BASKETBALL is mentioned in the sports array"`);
} else if (sports.includes ('BASKETBALL') && sports.indexOf('BASKETBALL') === 2){
    console.log(`"BASKETBALL is present at index-2"`);
} else { sports.splice(2,0,'BASKETBALL') && sports.splice(3,1)
    console.log (`${sports}`)
}

