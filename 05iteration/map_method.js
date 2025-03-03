
/*
✅ map() ek Higher-Order Function hai jo ek naya array return karta hai.
✅ Yeh har element par ek callback function apply karta hai.
✅ Original array change nahi hota! (Immutable)

/*
synatx:
let newArray = oldArray.map((element, index, array) => {
    return something;
});
*/


const myNumbers = [1,2,3,4,5,6,7,8,9,10]
const newNums = myNumbers.map( (ele) => {return (ele *10)+1} ) //return  nahi likhoge scope me to undefined aaega
console.log(newNums); 

//example1: using map() double the elements of the array
let num = [1,2,3,4,5]
let doubled = num.map( (n) => n * 2 )//.filter( (n) => n %4 ==0 )
console.log(doubled);

//exmaple2: using map() convert all the strings in uppercase()
let names = ["alice", "bob", "charlie"];
let upcase = names.map( (str) => str.toLocaleUpperCase() )//.filter( (str) => str.startsWith('A'))
console.log(upcase);

//example3: given an object users extract array containing the names of userr only
let users = [
    { name: "John", age: 25 },
    { name: "Alice", age: 30 },
    { name: "Bob", age: 20 }
];

let namesArray = users.map( (users) => users.name )//.filter((users) => users.length>3)
console.log(namesArray);

//example4: 
let numbers = [10, 20, 30];
let indexedNum = numbers.map( (ele, index, numbers) => `ele: ${ele}, index: ${index}, array: ${numbers}`)
console.log(indexedNum);

//Practice Question:
//Q1: Given an array of temperatures in Celsius, convert them to Fahrenheit using map().
let celsiusTemps = [0, 20, 30, 40];

let fahrenheitTemps = celsiusTemps.map( (temp) => (9/5 * temp) + 32)

console.log(fahrenheitTemps);

//Given an array of names, return a new array where only the first letter of each name is capitalized.
let thenames = ["john", "alice", "bob"];
let capNames = thenames.map( (name) => name.charAt(0).toLocaleUpperCase()+name.slice(1))
console.log(capNames);

//Product Prices with GST
let prices = [100, 200, 300, 400];
let gstPrice = prices.map( (amt) => amt *1.18 )
console.log(gstPrice);
//Extract Usernames from Emails
let emails = ["john@example.com", "alice@gmail.com", "bob@yahoo.com"];
let userName = emails.map((name) => name.slice(0, name.indexOf('@')))
console.log(userName);
//
let dates = ["2024-02-28", "2025-05-15", "2023-10-10"];
let year = dates.map((y)=>y.slice(0,4))
let months = dates.map((m)=>m.slice(5,7))
let dat =  dates.map( (dt) => dt.slice(8))
console.log(year,months, dat);
element = []
for (let index = 0; index < dates.length; index++) {
    element.push(dat[index]+ '-'+ months[index]+'-'+year[index]);
    
}
console.log(element);


//Convert Product List to Object
let products = ["Laptop", "Mouse", "Keyboard"];
//let prodObj = products.map((pro) => pro + ":" + 'Available')
let obj ={}
for (let index = 0; index < products.length; index++) {
    obj[products[index]]=  "Available"
    
}
console.log(obj);
//
let cards = ["1234567812345678", "9876543210987654", "1122334455667788"];
let secure = cards.map((num)=> num.slice(12))
let crd =[]
for (let index = 0; index < secure.length; index++) {
    crd.push("***********"+secure[index])
    
}
console.log(crd);

let amusers = [
    { name: "John", active: true },
    { name: "Alice", active: false },
    { name: "Bob", active: true }
];

activeUsers = amusers.filter((name)=>name.active === true).map((val)=>val.name)

console.log(activeUsers);


let nestedArr = [[1, 2], [3, 4], [5, 6]];
let farr =nestedArr.flat()
console.log(farr);

let newusers = [
    { id: 101, name: "John Doe" },
    { id: 102, name: "Alice Smith" },
    { id: 103, name: "Bob Johnson" }
];


