const user = {
    name: "TechFosters",
    age: 25,
    isLoggedIn: true,
    welcomMsg: function(){
    console.log(`Welcome, ${this.name} is LoggedIn now.`)
    //console.log(`Welcome, ${user.name} is LoggedIn now.`)
    console.log("Inside welcomeMsg() this refers to ",this);
    
    }
    
    
}

user.welcomMsg();
user.name = 'Geeky' //changed the context for this
user.welcomMsg();

console.log(this); // Global scope me this window object ko refer karega (agar browser me run kare).
                                        // Agar Node.js me run kare, to this empty object {} return karega.

//how this behave with function
function random(){
    console.log(this);
    
} 
random()

function random2(){
    console.log(this.username)
}
random2() //returnes undefined beacuse context objects me hi kaam kr rha h

// arrow function
function normal(){
    console.log("normal function");
} 

const varFn = function(){
    console.log('variable function')
}

const arrowfn = () => {
    console.log('arrow function')
}
//1. Normal Function (Function Declaration)
sayHello('TechFosters') //Function hoisting hoti hai → Iska matlab hai ki aap is function ko pehle call kar sakte ho, aur baad me define kar sakte ho.
function sayHello(userName){
    console.log(`Hello! ${userName}`)
}
//2. Variable Function (Function Expression)

//sayHi('TechFosters') //Yeh error dega kyunki function expression ko hoisting nahi milti, Isko hoisting nahi milti, iska matlab yeh pehle call nahi kiya ja sakta.
const sayHi = function(userName){
    console.log(`Hi! this is ${userName}`)
}

3. //Arrow Function(ES6)

const sayBye = (userName) =>{
    console.log(`Bye Bye ${userName}`)
} 
sayBye('TechFosters') 

const addTwo = (num1, num2) => {
    return num1 + num2 //explicit return
}

const addThree = (n1,n2,n3) => (n1+n2+n3) //implicit return: Agar ek hi statement return ho raha hai, to {} aur return likhne ki zaroorat nahi hoti.

const handleObject = () => ({name: 'TechFosters', Batch: 'FEB-MERN'})
console.log(handleObject())