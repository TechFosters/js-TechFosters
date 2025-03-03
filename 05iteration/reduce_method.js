//.reduce() ek higher-order function hai jo array ke saare elements ko ek single value me reduce kar deta hai. 
// Yeh loop jaisa kaam karta hai lekin final output ek hi value hoti hai.
/*
✅ Iska use sum, multiplication, maximum value, array flattening, object creation aur bohot saari advanced cheezon ke liye hota hai.
✅ reduce() 2 arguments leta hai:

Callback Function (Jo har element par chalega)
Initial Value (Optional, default 0 hoti hai) 
*/

/*
Syntax:
array.reduce((accumulator, currentValue) => {
   return accumulator + currentValue;
}, initialValue);
✅ accumulator: Yeh ek variable hai jo har iteration ka result store karta hai.
✅ currentValue: Yeh array ka har ek element hai jo process ho raha hai.
✅ initialValue: Yeh starting value hai (agar na dein toh array ka pehla element le leta hai).
*/
//Example 1: Sum of an Array
let numbers = [1, 2, 3, 4, 5];

let sum = numbers.reduce((acc, num) => acc + num, 0);

console.log(sum);