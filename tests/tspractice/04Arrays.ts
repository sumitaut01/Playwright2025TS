

let arr:number[]=[];
arr.push(1);

console.log(arr);//[1]



console.log(arr.length);1

console.log(arr.push(2));//2
console.log(arr.length);//2



arr.forEach(a=>console.log(a))


/*
what are array methods with output
ChatGPT said:

Perfect 👍 Let’s walk through important array methods in TypeScript (same as JavaScript, but TS adds type safety).
I’ll show examples + actual output.

🔑 1. push() – add item(s) at end
let arr: number[] = [1, 2];
arr.push(3);
console.log(arr);


➡️ Output:

[ 1, 2, 3 ]

🔑 2. pop() – remove last item
let arr = [1, 2, 3];
let last = arr.pop();
console.log(arr, last);


➡️ Output:

[ 1, 2 ] 3

🔑 3. shift() – remove first item
let arr = [10, 20, 30];
let first = arr.shift();
console.log(arr, first);


➡️ Output:

[ 20, 30 ] 10

🔑 4. unshift() – add item(s) at start
let arr = [20, 30];
arr.unshift(10);
console.log(arr);


➡️ Output:

[ 10, 20, 30 ]

🔑 5. concat() – merge arrays
let a = [1, 2];
let b = [3, 4];
let merged = a.concat(b);
console.log(merged);


➡️ Output:

[ 1, 2, 3, 4 ]

🔑 6. slice() – copy portion
let arr = [1, 2, 3, 4];
console.log(arr.slice(1, 3));


➡️ Output:

[ 2, 3 ]

🔑 7. splice() – add/remove in place
let arr = [1, 2, 3, 4];
arr.splice(1, 2, 99); // remove 2 items from index 1, insert 99
console.log(arr);


➡️ Output:

[ 1, 99, 4 ]

🔑 8. forEach() – loop
let arr = [10, 20, 30];
arr.forEach(v => console.log(v * 2));


➡️ Output:

20
40
60

🔑 9. map() – transform each item
let arr = [1, 2, 3];
let squared = arr.map(v => v * v);
console.log(squared);


➡️ Output:

[ 1, 4, 9 ]

🔑 10. filter() – pick items by condition
let arr = [5, 10, 15, 20];
let big = arr.filter(v => v > 10);
console.log(big);


➡️ Output:

[ 15, 20 ]

🔑 11. reduce() – combine into single value
let arr = [1, 2, 3, 4];
let sum = arr.reduce((acc, val) => acc + val, 0);
console.log(sum);


➡️ Output:

10

🔑 12. find() – find first match
let arr = [5, 10, 15];
let found = arr.find(v => v > 9);
console.log(found);


➡️ Output:

10

🔑 13. includes() – check presence
let arr = [1, 2, 3];
console.log(arr.includes(2));
console.log(arr.includes(5));


➡️ Output:

true
false

🔑 14. sort() – sort array
let arr = [30, 10, 20];
arr.sort();
console.log(arr);


➡️ Output:

[ 10, 20, 30 ]


(For numbers, better use arr.sort((a, b) => a - b);)

🔑 15. reverse() – reverse array
let arr = [1, 2, 3];
arr.reverse();
console.log(arr);


➡️ Output:

[ 3, 2, 1 ]


✅ These are the most widely used methods for arrays in TypeScript/JavaScript.


/*