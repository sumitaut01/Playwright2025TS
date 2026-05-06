
// == vs === in TypeScript
// In TypeScript, as in JavaScript, the == operator checks for equality of values with type coercion, while the === operator checks for strict equality without type coercion. 
// It is generally recommended to use === to avoid unexpected results due to type coercion.

    

export const name:String="sumit"

if(name==='sumit'){
    console.log(' sumit');
}
else{
    console.log('not sumit');
}
