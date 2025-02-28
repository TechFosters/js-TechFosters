const e_id = Symbol("key1") //used for declaring symbol as a key
const myProfile ={
    userName: "TF",
    "full name": "Tech Fosters", //key with spaces are declared using ""
    age: 35,
    [e_id]: "TF101", //used for declaring symbol as key else e_id will be of type string
    location: "Delhi",
    isLoggedIn: true,
    Working_Days: ["Mon", "Tues", "Sat"],
    email: "techfosters@gmail.com"


}

console.log(myProfile.userName, typeof(myProfile.userName))
console.log(myProfile["full name"], typeof(myProfile["full name"]))
console.log(myProfile.age, typeof(myProfile.age))
console.log(myProfile[e_id], typeof(myProfile[e_id]))
console.log(myProfile.isLoggedIn, typeof(myProfile.isLoggedIn))
console.log(myProfile.Working_Days, typeof(myProfile.Working_Days))

//Object.freeze(myProfile); //this prevents object from updating
myProfile.email = "vishal@gmail.com"
console.log(myProfile, typeof(myProfile));

myProfile.greeting = function(){
    console.log("Hello JS User");
    console.log(`Hello JS User ${this.userName}`) //this refers to the calling object
    
}
console.log(myProfile.greeting) // returns [Function (anonymous)]
//console.log(myProfile.greeting())

