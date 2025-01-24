/* 
1. An array in JavaScript is a special variable that can store multiple values at once, either of the same or different data types. 
2. Arrays are dynamic, meaning they can grow or shrink in size as needed. 
3. They are zero-indexed, allowing access to elements based on their position starting from 0.
4. Arrays also come with powerful built-in methods for data manipulation, making them versatile for various operations.

++++++++++why array was required:++++++++++++
Variables store a single value at a time, while arrays can store multiple values (homogeneous or heterogeneous) at once in a single data structure.
Imagine you are creating a simple to-do list app.

+++++++++++Without an array (using variables):++++++++++++
You’d have to create a separate variable for each task:
let task1 = "Buy groceries";
let task2 = "Clean the house";
let task3 = "Finish homework";
With lower number of tasks it might not seem a problem to you but this approach quickly becomes unmanageable as the number of tasks grows, and it’s hard to add, remove, or iterate over tasks(variable) dynamically.

++++++++++++With an array:++++++++++++++
You can store all the tasks in a single array:
let tasks = ["Buy groceries", "Clean the house", "Finish homework"];

*/
//decalaring an array

const myArr = [2,4,6,8,10]
console.log(myArr, "the type of array is" , typeof(myArr))

const favcrickters = new Array("Kohli", "Dhoni", "Rohit", "Rinku", "Bumrah")
console.log(favcrickters, typeof favcrickters)

//array methods

//push method
console.log(myArr.push(12)) //returns the length of the array
console.log(myArr)
//pop method
console.log(myArr.pop()) //returns the element that is removed
console.log(myArr)
//unshift method
console.log(myArr.unshift(0)) //returns the length of the array
console.log(myArr) //0 gets added at the 0th index
//shift method
console.log(myArr.shift()) // removes teh first element and returns it
console.log(myArr)
//index of
console.log(myArr.indexOf(9))//Returns the index of the first occurrence of a value in an array, or -1 if it is not present.
//.join
const newArr = myArr.join() //returns the array(of type string) with separators 
console.log(myArr, typeof(myArr), newArr, typeof(newArr))
//slice, splice
const sliced = myArr.slice(1,3)
console.log(myArr)
console.log(sliced, `this is a sliced array`)
console.log(myArr)
const spliced = myArr.splice(1,3)
console.log(myArr)
console.log(spliced, `this is a spliced array`)


myArr.splice(0,3,1,6)
console.log(myArr)




