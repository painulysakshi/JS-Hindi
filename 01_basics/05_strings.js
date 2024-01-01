const name = "Sakshi"
const count = 50

// console.log(name + count + "value")  [Concatination of strings]

//string interpulation (it is a modern way to write this syntax)
console.log(`Hello my name is ${name} and my cunt is ${count}`);

const gameName = new String('Sakshi-hc-com') //2nd String Syntax 
//To access key value pair
console.log(gameName[0]);

 //We can access proto type also
 console.log(gameName.__proto__);  //Object aapko output mein empty milega but wo empty nhi hoga sabse acha tarika hai object ko deckhna ka console log mein

 //Object use
 console.log(gameName.length);
 console.log(gameName.toUpperCase());
 console.log(gameName.charAt(5));
 console.log(gameName.indexOf('i')); 

const newString =  gameName.substring(0, 4)  //last wali value include nhi hoti hai
console.log(newString);

const anotherString = gameName.slice(-2,1) //negative value bhi de sakte hai  
console.log(anotherString);

//trim and replace method

const newString1 = "    sakshi    "
console.log(newString1);
console.log(newString1.trim());  //trim is used to remove starting and ending space


const url = "https://sakshi.com/sakshi%10painuly"
console.log(url.replace('%10', '-'))  //to replace %10
console.log(url.includes('sakshi')) //ye string hai ki nhhi hai
console.log(url.includes('priyanshi'))
 

console.log(gameName.split('-'))  //to split string
