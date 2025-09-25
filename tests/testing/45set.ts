//set also prevents insertion order

const s1=new Set<any>();    
s1.add(1);
s1.add(2);
s1.add(3);
s1.add(null);
s1.add(undefined);
s1.add(1); //duplicate values are not allowed

console.log(s1);
//Set(5) { 1, 2, 3, null, undefined }   
console.log(s1.size); //5
console.log(s1.has(1)); //true
console.log(s1.has(10)); //false        
s1.forEach((value)=>{
    console.log(`value is ${value}`);
});             
//value is 1
//value is 2
//value is 3
//value is null
//value is undefined                    
s1.delete(2);
console.log(s1);        
//Set(4) { 1, 3, null, undefined }
s1.clear();
console.log(s1); //Set(0) {}           


s1.add([1,2,3]);
s1.add([1,2,3]); //different references
console.log(s1); 
//Set(2) { [ 1, 2, 3 ], [ 1, 2, 3 ] }       
console.log(s1.size); //2           


const a=[...s1];
console.log(a); //[ [ 1, 2, 3 ], [ 1, 2, 3 ] ]
console.log(a[0]); //[ 1, 2, 3 ]
console.log(a[1]); //[ 1, 2, 3 ]    

const a2=Array.from(s1);
console.log(a2); //[ [ 1, 2, 3 ], [ 1, 2, 3 ] ]
console.log(a2[0]); //[ 1, 2, 3 ]
console.log(a2[1]); //[ 1, 2, 3 ]
const a3=Array.from(s1)[0];
console.log(a3); //[ 1, 2, 3 ]          

