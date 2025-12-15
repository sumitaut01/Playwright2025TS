
//immutable means unchangeable. In TypeScript, strings are immutable, which means that once a string is created, it cannot be changed. Any operation that seems to modify a string actually creates a new string.

let originalStr:string="Hello, TypeScript!";
console.log('original string:',originalStr);
//attempt to change character at index 0
//originalStr[0]='h'; // This will not work, strings are immutable
//to change the string, we need to create a new string
let modifiedStr:string='h'+originalStr.substring(1);
console.log('modified string:',modifiedStr);        