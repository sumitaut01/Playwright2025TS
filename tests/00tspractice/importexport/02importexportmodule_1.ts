import multiply from "./01importexport";

const m=require('./02importexportModule');

console.log(m.add(5,3)); // Output: 8
console.log(m.subtract(5,3));

console.log(multiply(5,3)); // Output: 15