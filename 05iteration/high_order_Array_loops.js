/*  for...of loop iterable objects par kaam karta hai, jaise:
✔ Arrays
✔ Strings
✔ Maps & Sets
✔ NodeLists (DOM elements) */

let arr = [10,20,30,40,50,60]
for (const ele of arr) {
    
    if(ele == 30){
        continue;
    }
    console.log(ele)
}

let str = 'TechFosters'
for (const chr of str){
    console.log(chr);
    
}

//maps
const map = new Map()
map.set('IN', "INDIA")
map.set('USA', "United States of America")

console.log(map);

for (const ele of map) {
    //console.log(`${key} :- ${value}`);
    console.log(ele);
    
    
}

/* if we try to iterate over objects using for of loop..it throws an error.
let cars = {
    1: 'Mercedes',
    2: 'BMW',
    3: 'Jeep'
}
for (const obj of cars) {
    console.log(obj);
    
}
// TypeError: cars is not iterable */