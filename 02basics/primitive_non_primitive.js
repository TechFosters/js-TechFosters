let myName = 'TechFosters';
let urName = myName;

console.log(myName, urName)

//the question arises if I change the value of urName, then myName ki value bhi change hogi kya..? let' see

urName = 'TechMonsters'
console.log(myName, urName) //TechFosters TechMonsters
// yaha, myName and urName alag alag memory locations me hain, isiliye urName me change krne se myName me koi farak nahi pdega
// Primitive values: directly memory ke stack me store hoti hai, aur copyy hone par naye variable me. value pass hoti hai.

//+++++++++++++++++++++++++++++

let obj1 = {
    fname: 'Tech',
    lname: 'Fosters'
}

let obj2 = obj1;

console.log(obj1, obj2)

obj2.fname = 'Mech'
console.log(obj1, obj2) // fname: 'Mech', lname: 'Fosters' } { fname: 'Mech', lname: 'Fosters' }
//yaha obj2.fname change krne se change obj1.fname pe bhi reflect hua unlike in case of primitives
//this is because yahan both objects(obj1, obj2) are pointing to same reference(memory address), thus change are reflective
//Non-primitive data types heap memory me store hote hai, aur stack memory me unke reference ka pointer