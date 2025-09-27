// ! in TypeScript — Three Main Uses
// 1. Non-Null Assertion Operator

// Tells the compiler: “I know this value is not null or undefined, trust me.”

export let name: string | null = "Sumit";

console.log(name!.toUpperCase()); 
// OK: we promise name is not null

// Risky — if name is actually null, you’ll get a runtime error.

// 2. Definite Assignment Assertion

// Used with class properties to tell TypeScript: “This property will be initialized later, don’t complain.”

class User {
  name!: string;  // no error even though not initialized here

  setName(n: string) {
    this.name = n;
  }
}

// Without !, TypeScript would complain:
// Property 'name' has no initializer and is not definitely assigned in the constructor.

// 3. Non-Null Assertion after Optional Chaining

// Combine with ?. to say: “If it exists, it won’t be null.”

type UserType = { profile?: { email?: string } };

const user: UserType = { profile: { email: "sumit@test.com" } };

// `?` = may be undefined
// `!` = assert it's not undefined
console.log(user.profile!.email!.toUpperCase());

// Summary Table
// Syntax	Meaning	Example
// value!	Non-null assertion	user!.name
// property! (class)	Definite assignment	name!: string;
// After optional chaining	Force unwrap	user.profile!.email!

// Interview-Ready Answer
// “In TypeScript, ! is the non-null assertion operator. It tells the compiler to ignore null or undefined checks and assume the value exists. It’s also used in class fields as a definite assignment assertion. It’s useful but risky if the value actually is null at runtime.”