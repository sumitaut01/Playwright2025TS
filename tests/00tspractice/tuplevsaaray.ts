//tuples vs arrays in typescript
//so mostly we use arrays to store a collection of values of the same type but sometimes we need to store a 
//  collection of values of different types and for that we can use tuples in typescript which is a fixed length array 
// where each element can have a different type.




//tuples
//order matter

let person:[string,number]=["sumit",32];
console.log(person[0]);
console.log(person[1]);

//we can push more like below
person.push("Neha",33);
console.log(person);


//less elements or different data type will create prob
//let animal:[string,number,number]=["sumit",32];//Type '[string, number]' is not assignable to type '[string, number, number]'.
 // Source has 2 element(s) but target requires 3.ts(2322)



// Tuples with optional values:
let point: [number, number, number?];

point = [10, 20];       // ✅ z is optional
point = [10, 20, 30];   // ✅ z is provided



type StringNumberPair = [string, ...number[]];
const data: StringNumberPair = ["A", 1, 2, 3, 4]; // ✅




//Array
let st:String[]=["sumit","neha"];
st.push("sagar");
console.log(st);



//tuples
let stx:[string];
stx=["sumit"];

let stx2:[string,string,number];
stx2=["sumit","raut",35];

console.log(stx2[0]);//sumit

console.log(stx2.at(0));//sumit




