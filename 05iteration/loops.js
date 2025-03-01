//for
//1. variable initialization
//2. limit(loop kaha tak chlega)
//3. icrement/decrement
for(let i = 0; i < 10; i++){
    const element = i;
    if(element == 5){
        console.log("High Five");
        
    }
    console.log(element)

} 

//for loop with array
arr = [10,20,30,40,50]
for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    console.log(`element ${element} @ index: ${index}`);
    
}
myArr = [2,3,5,7,11,13,17,19,23,39]
for (let i = 0; i < myArr.length; i++) {
    const element = myArr[i];
    if(element == 5){
        console.log('5 MIL GYA')
        break;
        
    }
    console.log(element);
    
}
//break and continue
myArr = [2,3,5,7,11,13,17,19,23,39]
for (let i = 0; i < myArr.length; i++) {
    const element = myArr[i];
    if(element == 13){
        console.log('13 MIL GYA')
        break;
        
    }
    console.log(element);
    
}

myArray = [2,3,5,7,11,13,17,19,23,39]
for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    if(element == 13){
        console.log('13 MIL GYA')
        continue;
        
    }
    console.log(element);
    
}
