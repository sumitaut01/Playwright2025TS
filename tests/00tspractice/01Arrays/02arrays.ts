
let num:number[]=[10,20,30,40,50,60];
export let fruits:string[]=['Apple','Banana','Grapes','Mango'];


//num.length
console.log('number array length:',num.length);

//iterating number array

num.push(70);
console.log('after push number array:',num);

//pop



num.pop();
console.log('after pop number array:',num);
//shift


//unshift


//concat  possible to combine array of same types   
let combinedArray:number[]=num.concat([80,90,100]);
console.log('after concat number array:',combinedArray);    



//slice  (startIndex, endIndex)  endIndex not included
let slicedArray:number[]=combinedArray.slice(2,5);  // 5 not included 2,3,4

console.log('sliced number array:',slicedArray);

//splice (startIndex, deleteCount, items to add)
//add remove from array from anywhere 

//practice this
combinedArray.splice(3,2,35,45);
console.log('after splice number array:',combinedArray);// removed 2nd 

//remove without add
//splice(3,2)

//

combinedArray.splice(4,0,55,65);//add without remove
console.log('after splice add number array:',combinedArray);




const numsx:number  []= [100,200,300,400,500];

console.log(numsx.indexOf(300));//2
console.log(numsx.indexOf(6000));//1


//with index
console.log(numsx.indexOf(300,3));//-1
console.log('after index  :');

console.log(numsx.indexOf(300,2));


//includes
console.log(numsx.includes(400));//true

//tostring

console.log('number array to string:',numsx);
console.log('number array to string:',numsx.toString());

//number array to string: [ 100, 200, 300, 400, 500 ]
//number array to string: 100,200,300,400,500
