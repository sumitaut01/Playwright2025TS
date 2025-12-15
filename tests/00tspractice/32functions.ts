// 1. Standalone function

// Declared outside any class:

function add(a: number, b: number): number {
  return a + b;
}

console.log(add(2, 3)); // ✅ works


// ✅ Key points:

// Lives in the global/module scope.

// Can be called without creating a class instance.

// Can be hoisted (you can call it before it’s defined in code).

//2. Class method

//Declared inside a class:

export class Calculator {
  add(a: number, b: number): number {
    return a + b;
  }
}

const calc = new Calculator();
console.log(calc.add(2, 3)); // ✅ works


// ✅ Key points:

// Belongs to the class.

// Must be called on an instance (unless it’s marked static).

// Not hoisted—you need an object before calling it.

// 3. Static method (special case inside class)
class Calculator2 {
  static multiply(a: number, b: number): number {
    return a * b;
  }
}

console.log(Calculator2.multiply(3, 4)); // ✅ works without `new`


// ✅ Key points:

// Belongs to the class itself, not to objects.

// Called directly on the class (Calculator.multiply()).

// 🔑 Differences
// Feature	Standalone function	Class method	Static method
// Where defined	Outside class	Inside class	Inside class
// Call style	func()	obj.func()	Class.func()
// Hoisting	Yes	No	No
// Needs instance?	❌ No	✅ Yes	❌ No

// 👉 In practice:

// Use standalone functions for reusable utilities (e.g., string formatting).

// Use class methods when the behavior depends on object state (this).

// Use static methods for helpers tied to a class concept but not a specific instance.