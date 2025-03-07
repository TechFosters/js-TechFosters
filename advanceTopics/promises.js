//Promise: it's a js object representing eventual completion or failure of an async task.
//Matlab, jab koi kaam turant complete nahi hota (jaise data fetch karna, file read karna), to Promises use kiya jata hai.
/* Synchronous Approach (Blocking)
Agar waiter sirf ek customer ka order leta aur tab tak wait karta jab tak khana aa na jaye, to doosre customers wait karte rehte.

console.log("Order pizza 🍕");
console.log("Wait for pizza..."); // 10 min lag sakte hain
console.log("Serve pizza");
Problem: Jab tak pizza nahi aata, baaki kaam ruk jata hai.
+++++++++++++++++++++++++++++++++++++++++++++++++++++
Asynchronous Approach (Non-blocking)
Agar waiter order lene ke baad agle customer ka order bhi le le, to sab kuch smoothly parallel chalega.

console.log("Order pizza 🍕");

setTimeout(() => {
    console.log("Serve pizza 🍕");
}, 5000); // 5 second ka delay (simulating network request)

console.log("Order burger 🍔");


//writing the promise
const promiseOne = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log('ASYNC TASK IS COMPLETED');
        resolve()
    }, 2000)
    
})

//consuimg the promise
promiseOne.then(()=>{
    console.log('Promise Consumed');
    
})
//+++++++++++++++++++++++++++++++++++++

new Promise(function(resolve,reject){
setTimeout(function(){
console.log('Async task 2');
resolve()
}, 2000)
}).then(function(){
    console.log('async task 2 promise reslolved');
    
})
//++++++++++++++++++what if network se koi data aaya h and vo print krni h
const promiseThree = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve({userName:'TechFosters', email: 'xyz@pqrs.com'}) //resolve se data pass krenge, mostly of type object
        
    },2000)
})

promiseThree.then((user)=>{
console.log(user);

})
//++++++++++++++++++++++++++++++
const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({userName:'MechFosters', email: 'pqrs@xyz.com'})  
        }
        else{
            reject('something went wrong')
        }
    },2000)
})

promiseFour
.then(function(user){
    console.log(user);
    return user.userName
})
.then(function(userName){
    console.log(userName);
})
.catch((e)=>{
    console.log(e);
})
.finally(function(){
    console.log("finally promise happened");
})
    */
//++++++++++++++++++++++++++
const promiseFive = new Promise(function(resolve,reject){
    setTimeout((function(){
        let error = false
        if(!error){
            resolve({profileName: 'GeekyFest', password: 3245})
        }else{
            reject('Error occurred')
        }
        
    }),2000)
})

promiseFive.then((function(user){
    console.log('promise resolved', user);
    return user.password
    
})).then(function(pswd){
    console.log(pswd);
    
}).catch(function(e){
    console.log(e);
    
})