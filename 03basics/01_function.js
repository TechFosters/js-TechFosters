function sayMyName(){
    console.log('T');
    console.log('e');
    console.log('c');
    console.log('h');
    console.log('F');
    console.log('o');
    console.log('s');
    console.log('t');
    console.log('r');
    console.log('r');
    console.log('s');
    
}

//console.log(sayMyName) //gives reference to function, [Function: sayMyName]
sayMyName() //calling the function
function logIn(userName){
    if(!userName){
        return "Please enter the username";
        
    }
    return `Hello! ${userName}`
}

const who =logIn('Tarun') //when no argument is passed it gives, undefined
console.log(who);

//function with arrays
function cartItems (num1,num2,...kart){ //REST OPERATOR: Agar kisi function me multiple arguments pass hote hain, to ...rest unko ek array bana leta hai.
    return {num1, num2, kart}
}

console.log(cartItems(100,200,300,400,500,600))  // [ 300, 400, 500, 600 ] output: num1 me value  gyi 100, num2 me 200 and kart me REST
//function with objects
const user = {
    name: 'Ama',
    age: 29
}

function handleObject(userProfile){
    return `profile name is ${userProfile.name} and age is ${userProfile.age} `
}
const result = handleObject(user)
console.log(result)

//we can also pass the object directly
const result2  = handleObject({
    name: 'Tweety', 
    age: 12
})

console.log(result2)

//function with array
const myArr = [2,3,5,7,1,13.17,19]

function handleArray(arr){
    console.log(arr[1])
}
handleArray(myArr)
