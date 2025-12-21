
//parseInt()
export const numtt='8';

console.log(typeof(numtt));//string
console.log(typeof(parseInt(numtt)));//number



const floatdata='8.90';
console.log(typeof(parseFloat(floatdata)));//number


//number() is preferred 


console.log(typeof(Number(floatdata)));//number


//toString()

let ddx='10';

let ddxNumber=Number(ddx);

console.log(typeof(ddxNumber));


// PRefer String()


let age=35;

console.log(typeof(String(age)));//string



/*
String → Number

strict → Number()

loose → parseInt, parseFloat

Anything → String

String()

Anything → Boolean

*/






