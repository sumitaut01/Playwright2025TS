"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fruits = void 0;
var num = [10, 20, 30, 40, 50, 60];
exports.fruits = ['Apple', 'Banana', 'Grapes', 'Mango'];
//num.length
console.log('number array length:', num.length);
//iterating number array
num.push(70);
console.log('after push number array:', num);
//pop
//shift
//unshift
//concat  possible to combine array of same types   
var combinedArray = num.concat([80, 90, 100]);
console.log('after concat number array:', combinedArray);
//slice  (startIndex, endIndex)  endIndex not included
var slicedArray = combinedArray.slice(2, 5);
console.log('sliced number array:', slicedArray);
//splice (startIndex, deleteCount, items to add)
combinedArray.splice(3, 2, 35, 45);
console.log('after splice number array:', combinedArray);
