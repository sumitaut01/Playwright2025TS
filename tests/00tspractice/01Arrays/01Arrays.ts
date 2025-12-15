
// arrays in ts kind of combines array and list from java
// can hold multiple values of same type
//ordered collection of items

// [] or Array<type>

let fruits:string[]=['Apple','Mango','Banana'];
console.log('fruits array:',fruits);

let numbers:Array<number>=[10,20,30,40,50];
console.log('numbers array:',numbers);

fruits.push('Orange');
console.log('after push fruits array:',fruits);

fruits.pop();
console.log('after pop fruits array:',fruits);

//insert at specific position
fruits.splice(1,0,'Pineapple');
console.log('after splice fruits array:',fruits);

//remove from specific position
fruits.splice(2,1);
console.log('after removing from splice fruits array:',fruits);

//length of array
console.log('length of fruits array:',fruits.length);   
console.log('length of numbers array:',numbers.length);   

//accessing elements
console.log('first fruit:',fruits[0]);
console.log('second fruit:',fruits[1]);     
console.log('third fruit:',fruits[2]);

//iterating array
console.log('iterating fruits array using for loop:');  
for(let i=0;i<fruits.length;i++){
    console.log(fruits[i]);
}
console.log('iterating numbers array using for loop:');  
for(let i=0;i<numbers.length;i++){
    console.log(numbers[i]);
}
//for..of loop
console.log('iterating fruits array using for..of loop:');  
for(const fruit of fruits){
    console.log(fruit);
}
console.log('iterating numbers array using for..of loop:');
for(const num of numbers){
    console.log(num);
}
//for..in loop
console.log('iterating fruits array using for..in loop:');  
for(const index in fruits){
    console.log(fruits[index]);
}   

console.log('iterating numbers array using for..in loop:');

for(const index in numbers){
    console.log(numbers[index]);
}   
//forEach method
console.log('iterating fruits array using forEach method:');        
fruits.forEach((fruit)=>{
    console.log(fruit);
}   );