//const tinderUser = {} this is non-singleton basically object literal

const tinderUser = new Object() //this is singleton object
console.log(tinderUser);

tinderUser.id = "T101"
tinderUser.name = "Emma"
tinderUser.isLoggedIn = false
tinderUser["full name"] = "Emma Watson"
console.log(tinderUser)
//nested objects

const fbUser = {
    email : "emt@gmail.com",
    profile: {
        fullName: {
            fname: "Emily",
            lname: "thomson"
        },
        age: 27,
        smlinks: {
            x: "@emtweets",
            insta: "@unplugged_emt"
        }
    },

}
console.log(fbUser.profile.fullName);
// how to merge two or more objects
//1. using Object.assign(target, source)
let obj1 ={1:'a',2:'b',3:'c'}
let obj2 ={4:'d',5:'e',6:'f'}
let obj3 ={7:'g',8:'h',9:'i'}

let allObjects = Object.assign({}, obj1, obj2, obj3);
console.log(allObjects)

let target =  Object.assign(obj1,obj2,obj3) //here obj1 is the target object and rest two are the sources
console.log(target === obj1);
console.log(`this is target object ${JSON.stringify(target)}`); 
console.log(`this is object 1 ${JSON.stringify(obj1)}`);

//2. spread operator(most used)
let result = {...obj1, ...obj2, ...obj3}
console.log(result)

console.log(target === allObjects) // beacuse Dono objects ke contents same hain, par unka memory reference alag hai.

// array of objects
const user = [{
    id: "u101",
    name: "telly"},

    {id: "u101",
    name: "jelly"},

    {id: "u101",
    name: "kelly"}]

console.log(user[1].id);

// Object.keys(), Object.values(), Object.enteries()

console.log(Object.keys(tinderUser)); //returns array of keys
console.log(Object.values(tinderUser)); //returns array of values
console.log(Object.entries(tinderUser)); //return array of key value pair

// to check for a given key
console.log(tinderUser.hasOwnProperty("fullName"));
console.log("full name" in tinderUser);




