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
 //Given an array of objects representing users, return only users who are active.
 let users = [
    { name: "John", active: true },
    { name: "Alice", active: false },
    { name: "Bob", active: true }
];

const activeUsers = users.filter( (ele) => ele.active == true)
console.log(activeUsers);
//Filter out products that are out of stock (quantity = 0).
let products = [
    { name: "Laptop", quantity: 10 },
    { name: "Mouse", quantity: 0 },
    { name: "Keyboard", quantity: 5 }
];
const outOfStock = products.filter( (p) => p.quantity ===0 )
console.log(outOfStock);
// Given an array of numbers, return only prime numbers.
let num = [2, 3, 4, 5, 6, 7, 8, 9, 10];
const isPrime = (n) =>{
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if(n % i == 0){
            return false
        }
       
    }
    return true
} 
let prime = num.filter(isPrime)
console.log(prime);
// Given an array of student marks, return only those students who have scored above 75
let students = [
    { name: "Raj", marks: 85 },
    { name: "Simran", marks: 60 },
    { name: "Aman", marks: 90 }
];

let Toppers = students.filter((stud) => stud.marks > 75)
console.log(Toppers);
//Given an array of transactions, return only the transactions with a debit amount greater than $500.
let transactions = [
    { type: "debit", amount: 200 },
    { type: "credit", amount: 1000 },
    { type: "debit", amount: 700 }
];

let transactionsGreaterThan500 = transactions.filter( (trans) => trans.amount > 500 )
console.log(transactionsGreaterThan500);

// Given an array of employee salaries, return only those employees whose salaries fall between 50,000 and 1,00,000.
let employees = [
    { name: "John", salary: 40000 },
    { name: "Alice", salary: 60000 },
    { name: "Bob", salary: 120000 }
];

let highSalariedEmp =employees.filter( (emp) => emp.salary > 50000 && emp.salary < 100000)
console.log(highSalariedEmp);
//Filter out duplicates from an array using .filter().
let arr = [1, 2, 2, 3, 4, 4, 5,7];

//  Problem Statement: You have an array of appointments with different dates. 
// Write a function to return only the upcoming appointments (i.e., appointments with dates greater than today's date).


let appointments = [
    { id: 1, date: "2024-02-25" },
    { id: 2, date: "2025-03-10" },
    { id: 3, date: "2025-01-15" }
];
let now = new Date();


