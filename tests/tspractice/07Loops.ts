
export{}
//1. for loop (classic index-based)
for (let i: number = 0; i < 5; i++) {
  console.log("i =", i);
}


//2. while loop
let count: number = 0;
while (count < 5) {
  console.log("count =", count);
  count++;
}


//3. do...while loop
let num: number = 0;
do {
  console.log("num =", num);
  num++;
} while (num < 5);

//4. for...of loop (best for arrays)
let fruits: string[] = ["apple", "banana", "cherry"];

for (let fruit of fruits) {
  console.log(fruit);
}


//5. for...in loop (best for objects)
let user = { id: 1, name: "Sumit", age: 32 };

for (let key in user) {
  console.log(key, "=", user[key as keyof typeof user]);
}


//6. Array helpers (modern alternative to loops)

//Instead of manual loops, you often use higher-order functions:

let nums: number[] = [1, 2, 3, 4, 5];

// forEach
nums.forEach(n => console.log("n =", n));

// map (transforms values)
let squares = nums.map(n => n * n);
console.log(squares);

// filter (keep only even)
let evens = nums.filter(n => n % 2 === 0);
console.log(evens);
