//Primitive: number, string, boolean, bigint, symbol, null, undefined
const num = 6.626
const name= "TechFosters"
const isLoggedIn = false;
const bigshow = 183126898293n;
const Uid = Symbol('888')
const Gid = Symbol('888')
const temp = null
let email;

console.table([num ,typeof(num),name ,typeof(name), isLoggedIn ,typeof(isLoggedIn), bigshow, typeof(bigshow), Uid ,typeof(Uid), Gid, typeof(Gid), temp, typeof(temp), email, typeof(email)])

console.log("this shows two variables even with same value of Symbol data types are not equal",Uid===Gid)


//NonPrimitve: Array, Object, Functions

//creating an array named avengers

let avengers =["Ironman", "Hulk", "HawkEye","CaptainAmerica"];
console.log(avengers)
console.log("type of avengers(array) is: ", typeof(avengers))

//creating an object named subjectDetails
let subjectDetails= {
     name: 'WEBD',
     code: 165,
     fee: "14500 INR"

}
console.log(subjectDetails);
console.log("type of subjectDetails(object) is ", typeof(subjectDetails))

//declaring a function: variable method
const myFunc = function(){
    console.log("Ram Ram bhai sarya ne...")
}

console.log(myFunc())
console.log("type of myFunc(function) is: ",typeof(myFunc))