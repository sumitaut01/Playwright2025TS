
// Mixed Array 
export const arr:Array<number|string>=[10,'Sumitra',20,'Automation',30,'Testing'];

//

const arr2:Array<any>=[10,'Sumitra',true,20,'Automation',false,30,'Testing'];
console.log('mixed array:',arr2);

const arr3:number[][]=[[10,20,30],[40,50,60],[70,80,90]];


console.log(arr.length)

console.log("Style 1"); //60
for(let i=0;i<arr.length;i++){
    console.log('array element at index',i,'is:',arr[i]);
}


console.log("Style 2"); //60
for(const element of arr){
    console.log('array element is:',element);
}

console.log("Style 3"); //60
arr.forEach((element,index)=>{
    console.log('array element at index',index,'is:',element);
});

console.log("Style 4"); //60
arr.map((element,index)=>{
    console.log('array element at index',index,'is:',element);
});     

