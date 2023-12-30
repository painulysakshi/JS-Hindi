// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 <= 1);
// console.log(2 == 1);
// console.log(2 != 1);

//Agar comparision karein too datatype same ho 
// console.log("2" > 1);
// console.log("02" > 1);

/* 
Avoid this type of conversion
// console.log(null > 0);
// console.log(null == 0);
// console.log(null >= 0);  //value conversion problem
*/

/*The reason is that an equality check == and comparision > < >= <= work differently
Comparision convert null to a number, treating it as 0. */

/*
Avoid this type of conversion
// console.log(undefined == 0);
// console.log(undefined > 0);
// console.log(undefined < 0); 
*/

// === triple equal too uske datatypes ko bhi check krta hai
console.log("2" === 2);