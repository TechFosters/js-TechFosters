// this is how we normally extract the values from an array, but this seems to be length
let arr = [10,20,30]
console.log(arr[0]);
console.log(arr[0]);
console.log(arr[0]);
//using array destructring
let [a,b,c] = arr
console.log(a,b,c );

//objects


const course = {
    courseName : "JS-MERN-JANUARY",
    courseInstructor: "Akshit",
    price: 5999
}
console.log(course.courseName)

let {price} = course;
console.log(price);

//Object Destructuring with Custom Variable Names
const {courseInstructor: instructor} = course;
console.log(instructor);

//destructuring is bascially a syntax sugar





