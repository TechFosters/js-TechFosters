//series of characters is strings
//there are various operations that could be performed on strings

const userName ="TechFosters";
const count = 50;

console.log(userName + ", you have " + count+ " notifications"); //example of string concatenation

//easy way to interpolate(insert) variables:`string interpolation`

console.log(`${userName} has ${count} notifications`);

//another way of declating strings, this method gives different prototypes
const name =new String('Akshit Mudgal');
console.log(name);
console.log(name[0]);
console.log(name.__proto__)
console.log(name.bold())
console.log(name.italics())
console.log(name); //here note that any of the prototype used didn't change the original string beacuse primitive datatypes uses stack and pass by value is followed
