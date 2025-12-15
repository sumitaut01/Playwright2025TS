//foreach()   map()    some()   filter() reduce()
//all of them takes functiion as parameter
// these are moslt used




//for each
const arr:number[]=[10,20,30,40];

console.log('foreach()')
arr.forEach((item,index)=>console.log(item,index));




//map
console.log('map()')
const arr2=arr.map(item=>item*2);

//filter
console.log('filter()')
const arr3=arr.filter(item=>item>3);

//some() //if any 1 element matches the condition , result is boolean true
console.log('some()')
let resuresult:boolean=arr.some(item=>item>3);


//reduce // accumulate  into 1

let num:number=arr.reduce((total,item)=>total+item);


//every()  checks if every element matches the condtion

let resuresultnew:boolean=arr.every(item=>item>0);


