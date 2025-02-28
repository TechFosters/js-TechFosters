function outer(){
    const userName = 'TechFosters'

    function inner(){
        const subject = 'WEB DEV'
        console.log(userName)  //ye apne parent function se access kiya h
    }
    //console.log(subject); subject is not defined beacuse uska scope inner function tak hi hai
    
inner()
}
outer()

if(true){
    const userName = 'TechFosters'
    if(userName === 'TechFosters'){
        const subject ='Web Dev'
        console.log(userName + subject);
        
    }

    //console.log(subject) //this is out of scope
}
//console.log(userName); //this is also out of scope

console.log(addOne(10))
function addOne(num){
    return num+1
}

//addTwo(17) // Cannot access 'addTwo' before initialization
const addTwo = function(num) {
    return num+2 
}
console.log(addTwo(19))