
//1
let marks=Array(6);
marks[5]=55;



//2
let marksagain=new Array(1,2,4,5,6);


//3 
const makrsyy=[1,2,3,4]


// length
console.log(makrsyy.length);


//push-- Adding at the beginning

let names=['sumit'];
names.push('bhagwant')
console.log('after pushing');
console.log(names);



//unshift- adding at the start
console.log(names.unshift('mr'));
console.log('after unshift');
console.log(names);

console.log("--separator---");
// shift - removing  from  the beginning
console.log(names.shift());//mr
console.log('after shift');
console.log(names);//[ 'bhagwant' ]

console.log("--separator---");

console.log(names);//[ 'sumit', 'bhagwant' ]
//indexof
console.log(names.indexOf('sumit'));//0

console.log(names.indexOf('xx'));//-1

console.log(names.includes('xx'));//false
console.log(names.includes('sumit'));//true


//slice.. more of substring

const datadd=[1,2,3,4,5,6];

console.log(datadd.slice(1,4));//[2, 3, 4 ]  // last exclusive



//splice
//modified original
console.log('separator');
console.log(datadd);

console.log(datadd.splice(0,1,2));// start, remove 1, add 2 on that place
console.log(datadd);








//splice





