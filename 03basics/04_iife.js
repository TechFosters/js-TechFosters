//Immediately Invoked Functions
/*
IIFE ek self-executing function hoti hai jo turant execute ho jati hai jaise hi define hoti hai.
🔹 "Immediately Invoked" = Jaise hi function likha, waise hi execute ho gaya!
🔹 "Function Expression" = Ye ek expression hai, jo ek function ko define karta hai.
*/
//Normal IIFE
(function iife (){
    console.log("IIFE executed");
    
}) (); //Syntax: bracekts lgaane se iife bnjaata h (isme function definition likho)(isme exceution)

// Arrow Function IIFE
( () => {
    console.log("Arrow IIFE function ");
    
})();

//Parameter Function IIFE
//named IIFE
(function greet(name){
    console.log(`Bonjour! ${name}`);
    
})('TechFosters');

((name) =>{
    console.log(`Happy Journey ${name}`);
    
} )('Geeky');

/* IIFE ka main purpose hai global scope pollution avoid karna aur private variables create karna.
👉 Normally, JavaScript me global scope me variables declare karne se conflicts ho sakte hain.
👉 IIFE ka use karke variables ko local scope me rakh sakte hain taaki wo globally accessible na ho */

