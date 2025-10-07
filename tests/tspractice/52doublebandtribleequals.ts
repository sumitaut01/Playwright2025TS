

let x="sumit";

console.log(x==='neha');
console.log(x==='sumit');   

console.log(!!x);

//false
//true
//true




// Good one 👍 — let’s break down !!, ===, and == in TypeScript.

// ✅ !! (Double Bang) in TypeScript/JavaScript

// !!value converts any value into a boolean.

// First ! → negates truthiness.

// Second ! → negates again → gives true/false.

// Example:
// console.log(!!"sumit");   // true  (non-empty string is truthy)
// console.log(!!0);         // false (0 is falsy)
// console.log(!!null);      // false
// console.log(!!undefined); // false
// console.log(!!123);       // true


// // ⚡ In short:
// // 👉 !!x is the same as Boolean(x).

// // ✅ === (Strict Equality)

// // Checks both value and type.

// // No type coercion.

// // console.log(2 === 2);     // true
// // console.log(2 === '2');   // false (number vs string)
// // console.log(true === 1);  // false (boolean vs number)

// // ✅ == (Loose Equality)

// // Checks value, but allows type coercion.

// // ❌ Can cause bugs, usually discouraged in TypeScript.

// // console.log(2 == '2');    // true (string '2' coerced to number 2)
// // console.log(true == 1);   // true
// // console.log(false == 0);  // true

// // 🔹 TypeScript Angle

// // TypeScript inherits JS rules for == and ===.

// // But TypeScript encourages === for safety.

// // If you use ==, TypeScript won’t stop you, but linters like TSLint/ESLint will warn.

// // 🎯 Interview-Ready Answer

// // “In TypeScript, !! is just a quick way to cast any value to boolean (!!x === Boolean(x)). === is strict equality, meaning value + type must match, while == is loose equality, which allows type coercion. Best practice in TypeScript is to always use === and avoid == to prevent unexpected behavior.”