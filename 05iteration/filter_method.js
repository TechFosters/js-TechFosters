/* filter() JavaScript ka ek array method hai jo original array ko modify kiye bina ek naya array return karta hai, 
jo sirf un elements ko contain karta hai jo given condition ko satisfy karte hain. */

let numbers = [0,1,2,3,4,5,6,7,8,9]

/*
numbers.filter( function(num){
    if (num % 2 ==0){
        return num;
        
    }  
} )

*/

numbers.filter(function(num){
    return num % 2 == 0
})


const newNumbers = numbers.filter( (num) => num % 2 == 0);
console.log(newNumbers); 

//Given an array of numbers, return a new array containing only positive numbers.
let numarr = [-10, 20, -30, 40, 50, -60];

const result = numarr.filter( (num) => num > 0)
console.log(result);

//You have an array of names, return only those names that start with the letter "A".
let names = ["Alice", "Bob", "Ankit", "Charlie", "Aryan"];

const ans = names.filter( (str) => str.charAt(0) == 'A')
console.log(ans);

//Filter out all falsy values (false, 0, "", null, undefined, NaN) from an array.
let values = [0, "hello", "", false, 42, undefined, "JavaScript", null];
let truthy_values = values.filter( (ele) => null?? ele)
console.log(truthy_values);
