const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);  //number is change into string
// console.log(balance.toFixed(2)); 

const otherNumber = 123.6645
// console.log(otherNumber.toPrecision(4))
// console.log(otherNumber.toPrecision(3))  //Round off


 const hundreds =1000000
// console.log(hundreds.toLocaleString()); //US values
// console.log(hundreds.toLocaleString('en-IN')); //Output 10,00,000



/******************************* Maths ***************************************** */

// console.log(Math);
// console.log(Math.abs(-4)); //absolute vaue (+ = +, - = +)
// console.log(Math.round(4.3));  //round off
// console.log(Math.ceil(4.2)); // ceiling means top (jara bhi 4 se jada huaa to one add on)
// console.log(Math.floor(4.9));//lowest value 

// console.log(Math.min(4, 5, 2, 7, 8));
// console.log(Math.max(4, 5, 2, 7, 8));

console.log(Math.random());  //Random value lies between 0 and 1
console.log(Math.random()*10 +1);