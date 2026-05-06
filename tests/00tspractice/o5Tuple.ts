

//below is the example of tuple in typescript which is a fixed length array where each element can have a different type.
//useful    for representing a collection of values of different types, such as a pair of coordinates (x, y) or
//  a person's name and age.

    
let x:[number, string];
x = [1, 'hello'];

//x=[1,2,3]; // error
//x=[1]; // error

console.log(x[0]);//1
console.log(typeof(x[0]));//number
console.log(typeof(x[1]));//string



let y:[number, string, boolean?];

y = [1, 'hello'];
console.log(typeof(y[2]));//undefined
y = [1, 'hello', true]; 
console.log(typeof(y[2]));//boolean


