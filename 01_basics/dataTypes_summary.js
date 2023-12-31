//# Primitive Data Type (call by value hote hai)
// 7 types: String, Number, Boolean, null, undefined, Symbol (kisi bhi value ko unique banane ke liye symbol ka use krte hai), BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail; // Or let userEmail = undefined

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId); 

// const bigNumber = 34567843225n


//#Non Primitive (OR Reference Type) (Basically ye sari values wo hai jo ki memory mein inka Reference directly aapko allocate kiya jaa sakta hai)
// Arrays, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]

// curly brases ke under objects hote hain 
 let myObj = {
    name: "Sakshi",
    age: 23,
}

const myFunctioin = function(){
    console.log("Hello World");
}

// console.log(typeof outsideTemp);
console.log(typeof myFunctioin);
console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3 




// *********************2 Types of Memory**************************
/*
Stack(Primitive used in stack memory)[Stack ke under jab bhi aap koi ek chej lenge usska uska aapko ek copy hi milta hai],
Heap Memory(Non Primitive)[heap ke under aap kuch bhi chij rakhte ho too aapko usska reference milta hai]
*/

let myname = "Sakshi"
let anothername = myname
anothername = "painuly"
console.log(myname);
console.log(anothername);

let userOne = {
    email: "user@gmail.com",
    upi: "user@ybl"
}
 let userTwo = userOne

 userTwo.email = "sakshi@gmail.com"  //Object ko .(dot) value se acces krte hain
 console.log(userOne.email);
 console.log(userTwo.email);