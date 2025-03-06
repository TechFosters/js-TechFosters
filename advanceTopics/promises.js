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
*/

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

new Promise(function(resolve,reject){
setTimeout(function(){
console.log('Async task 2');
resolve()
}, 4000)
}).then(function(){
    console.log('async task 2 promise reslolved');
    
})

const promiseThree = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve({userName:'TechFosters', email: 'xyz@pqrs.com'})
        
    },7000)
})

promiseThree.then((user)=>{
console.log(user);

})