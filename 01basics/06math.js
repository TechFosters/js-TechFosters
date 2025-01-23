const number =88;
console.log(number, typeof number)

const num = new Number(400)//explicitly defining datatype
console.log(num, typeof num)

const hundreds = 10000000
console.log(hundreds.toLocaleString('EN-IN'))
console.log(hundreds.toLocaleString())

//+++++++++++++++++MathFunctions+++++++++++++++
console.log(Math);
console.log(Math.round(4.3)) //to nearest integer
console.log(Math.ceil(5.3)) // to upper value 
console.log(Math.floor(5.8))//to lower value
console.log(Math.random())//always give value between 0 and 1
console.log(Math.random()*10)// to obtain a value >0
console.log(Math.floor(Math.random()*10)+1) //to convert the above value in nearest integer
// generic formula
//I want  random values between 10 and 20
const min =10
const max = 20

console.log( Math.floor (Math.random() * ( max - min + 1)) + min )