/** Create a function to return an array 
*  after removing given number from the given array
* 
* 
* 
* [1, 2, 3, 4, 5] , 2  -> [1, 3, 4, 5]
* 
* [21, 32, 12, 43, 45, 65, 12], 12 -> [21, 32, 43, 45, 65]

* 
* [-1, 2, 43, 65] , 11 -> [-1, 2, 43, 65]
*/

const nums =[21, 32, 12, 43, 45, 65, 12]
nums1 = nums.filter(num => num != 12)
console.log(nums1)


/**
* Create a function to return the missing smallest positive number in given array
* 
* 
* [1, 2, 3, 4, 5]   ->   6
* 
* [2, 3, 1, 56, 23, 11]  ->   4
* 
* [3, 1, 56, 23, 11]  -> 2
*
* [-1, 0, 2, 1]    ->  3
* 
* [1, 1, 2, 4, 3, 6, 4, 7, 9] ->   5
* 
* 
*/


function SmallestPositive (num)
{
    sortArray = num.sort(function(a, b) {
        return a - b;
      });

    retValue = sortArray[0];

    for (var i = 1; i < sortArray.length; i++)
    {
        if (retValue + 1 == sortArray[i] || retValue == sortArray[i])
            retValue = sortArray[i]
        else    
            return retValue + 1;
    }

    return retValue + 1;
}

console.log ('[1, 2, 3, 4, 5]   ->   6')
console.log (SmallestPositive ([1, 2, 3, 4, 5]));

console.log ('[1, 1, 2, 4, 3, 6, 4, 7, 9]   ->   5')
console.log (SmallestPositive ([1, 1, 2, 4, 3, 6, 4, 7, 9]));

console.log ('[2, 3, 1, 56, 23, 11]  ->   4')
console.log (SmallestPositive ([2, 3, 1, 56, 23, 11]));

console.log ('[3, 1, 56, 23, 11]  -> 2')
console.log (SmallestPositive ([3, 1, 56, 23, 11]));

console.log ('[-1, 0, 2, 1]    ->  3')
console.log (SmallestPositive ([-1, 0, 2, 1]));




/**
* Create a function to return the points to be marked against for over speeding.
* 
* For every 5mph over the speed limit, 1 point should be marked
* 
* function will:
*      take userSpeed and speedLimit as input
*      return the number of points should be marked against the license.
* 
* 
* 
* sl= 60 , us = 70 -> points = 2
* 
* sl = 60 , us = 63 -> points = 0
* 
* sl = 75 , us = 70 -> points = 0
* 
* sl = 80 , us = 88 -> points = 1
*/

 const sl = 60
 let us = 74

 if ( 60 <= us && us < sl + 5 ) {
    console.log ('points = 0');
   } else if (sl + 5 <= us && us < sl + 10 ){
    console.log('points = 1');
   } else if (sl + 10 <= us && us < sl + 15){
    console.log('points = 2');
   } else if (sl + 15 <= us && us < sl + 20){
    console.log('points = 3');
   } else if (sl + 20 <= us && us < sl + 25){
    console.log('points = 4');
   } else if (sl + 25 <= us && us < sl + 30){ 
    console.log('points = 4');
   } else   
    console.log('We take you drive license');
     