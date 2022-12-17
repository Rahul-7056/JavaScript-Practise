//   -----------------LOOPS-----------------------------

// 1. How do you find the missing number in a given integer array of 1 to 100?

// var a = [1, 3, 5, 6, 9, 10, 11, 12, 15, 19, 20, 56, 47, 38, 30, 60, 70, 90];
// count = 100;
// missing = [];

// for (var i = 1; i <= count; i++) {
//     if (a.indexOf(i) == -1) {
//         missing.push(i);
//     }
// }

// console.log(missing);

// Creating a array for 100 natuarl numbers
// var arry = [];
// for (let i = 1; i < 100; i++) {
//     arry[i] = i;
// }
// console.log(arry);

// var a = [1, 2, 3, 4, 5, 8, 10];
// count = 10;
// var missing = new Array();

// for (var i = 1; i <= count; i++) {
//     if (a.indexOf(i) == -1) {
//         missing.push(i);
//     }
// }
// console.log(missing); // to check the result.


// 2. How do you find the duplicate number on a given integer array?

let arry2 = [10, 15, 29, 30, 29, 15, 30, 42, 38, 85, 39, 30, 42];
var duplicate = [];

// console.log(arry2.length);
arry2.sort(function(a,b){return a-b});
// console.log(arry2);
for(i = 0; arry2[i] == arry2[i+1];i++){
    console.log(i);
    // for( j = 1; arry2 === arry2[j];j++){
    //     duplicate.push(j);
    //     console.log(j);
    // }
}
// console.log(duplicate);
// for (i = 0;; i++) {
 
// }
// 3. How do you find the largest and smallest number in an unsorted integer array?




// 4. How do you find all pairs of an integer array whose sum is equal to a given number?





// 5. How do you find duplicate numbers in an array if it contains multiple duplicates?




// 6. How do you reverse an array in place in JavaScript? In place means you cannot create a new array. You have to update the original array.