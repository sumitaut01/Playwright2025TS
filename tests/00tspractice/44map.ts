
// map in js maintains insertion order
// map allows null and undefined as key
// map allows duplicate values but not duplicate keys


const m1=new Map<any,any>();

m1.set('a',1);
m1.set('b',2);
m1.set('c',3);
m1.set(null,"nuldata");  
m1.set(undefined,"anything"); 

console.log(m1);

//Map(5) {
//   'a' => 1,
//   'b' => 2,
//   'c' => 3,
//   null => 'nuldata',
//   undefined => 'anything'
// }


console.log(m1.get('a')); //1


console.log(m1.size)//5

console.log(m1.has('a')) //true
console.log(m1.get('z')) //false


m1.set(function a(){},3); //adding function with existing key 
console.log(m1);

// Map(6) {
//   'a' => 1,
//   'b' => 2,
//   'c' => 3,
//   null => 'nuldata',
//   undefined => 'anything',
//   [Function: a] => 3
// }



m1.forEach((value,key)=>{
    console.log(`key is ${key} and value is ${value}`);
});       

// key is a and value is 1
// key is b and value is 2
// key is c and value is 3
// key is null and value is nuldata
// key is undefined and value is anything
// key is function a() { } and value is 3