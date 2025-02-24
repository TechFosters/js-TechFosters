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

//1. push method
console.log(myArr.push(12)) //Appends new elements to the end of an array, and returns the new length of the array.
console.log(myArr)

//2. unshift method
console.log(myArr.unshift(0)) //Inserts new elements at the start of an array, and returns the new length of the array.
console.log(myArr) //0 gets added at the 0th index

//3. pop method
console.log(myArr.pop()) //removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.

//4. shift method
console.log(myArr.shift()) // removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
console.log(myArr)


//5. index of
console.log(myArr.indexOf(9))//Returns the index of the first occurrence of a value in an array, or -1 if it is not present.

//6. charAt
console.log(myArr.at(3)) //Returns the item located at the specified index.

//7. includes
console.log(myArr.includes(9)) //Determines whether an array includes a certain element, returning true or false as appropriate.
console.log(myArr.includes(2))

//8.join
const newArr = myArr.join() //returns the array(of type string) with separators 
console.log(myArr, typeof(myArr), newArr, typeof(newArr))

//9. splice

//syntax: array.splice(start, deleteCount, item1, item2, ...);
//9.1 ++++ Deleting Elements using splice()
const ogArray = [99, 45, 78, 89, 98, 12 , 1, 0, -1, -45, -33] 
const removed = ogArray.splice(2, 4)
console.log(ogArray) // it's been modified to [99, 45, 1, 0, -1, -45, -33]
console.log(removed) // it contains deleted elements [78, 89, 98, 12]

//9.2 Adding elements using splice
ogArray.splice(3,0,100,-200) // array.splice(start, deleteCount, item1, item2, ...); starting from 3rd index, delete nothing(0) yet add 100, -200
console.log(ogArray)

//9.3 Replacing elements using splice
ogArray.splice(2,2, 500,600) //starting from index 2, delete 2 elements and add 500, 600 respectively
console.log(ogArray)

//9.4 Clearing array using splice
ogArray.splice(0,ogArray.length)
console.log(ogArray)

//9.5 Uisng Negative Index
ogArray.splice(-1,2)
console.log(ogArray) //Agar arr = [] likhte, to reference change ho jata, jo const me allowed nahi hai.

//Practice Question
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

arr.splice(3, 2, 99, 100); 
arr.splice(-4, 1, 200, 300); 
arr.splice(1, 0, 500);
arr.splice(-2, 2, 400, 500, 600);

console.log(arr);

//10. slice() 

const slicedArr = arr.slice(3,7) //The end index of the specified portion of the array. This is exclusive of the element at the index 'end'. If end is undefined, then the slice extends to the end of the array.
console.log(slicedArr, arr)
//++++++++++++++++++++++++++++++++++++++++++
//let's learn the iteration(loop)
/*
step1: variable leke aao
step2: limit btao 
step3: increment/decrement
*/
let fruits = new Array('Apple', 'Banana', 'Cherry', 'DragonFruit', 'ElderBerry', 'Figs');

for(f = 0; f < fruits.length; f++){
    console.log(`fruits at index ${f}: ${fruits[f]}`)
}; 








