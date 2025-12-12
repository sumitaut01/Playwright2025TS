
//single quote, double quote, backtick
let namex1:string='Sumitra';
let namex2:string="Sumitra";
let namex3:string=`Sumitra`;

//when to use backtick  ``
//1. when we have to use both single and double quotes in string
let str1:string=`She said,"I'm coming home now"`;
console.log(str1);

//2. when we have to create multiline string
let str2:string=`This is line one   
This is line two
This is line three`;
console.log(str2);

//3. when we have to do string interpolation (embed expressions inside string)
let age:number=25;
let str3:string=`My name is ${namex1} and my age is ${age+5}`;
console.log(str3);
//expression can be variable, math expression, function call etc.

//string methods
let sampleStr:string="  Hello, Welcome to TypeScript String Practice  ";            
console.log('original string:',sampleStr);

//length
console.log('string length:',sampleStr.length);
//toLowerCase
console.log('lowercase string:',sampleStr.toLowerCase());
//toUpperCase
console.log('uppercase string:',sampleStr.toUpperCase());
//trim
console.log('trimmed string:',sampleStr.trim());

//trimStart
console.log('trimmed start string:',sampleStr.trimStart());
//trimEnd
console.log('trimmed end string:',sampleStr.trimEnd());


//includes
console.log('includes Welcome:',sampleStr.includes('Welcome'));
console.log('includes Java:',sampleStr.includes('Java'));
//startsWith
console.log('starts with Hello:',sampleStr.startsWith('Hello'));
console.log('starts with  Hello after trim:',sampleStr.trim().startsWith('Hello'));
//endsWith
console.log('ends with Practice  :',sampleStr.endsWith('Practice  '));  
console.log('ends with Practice after trim :',sampleStr.trim().endsWith('Practice'));
//replace
let replacedStr:string=sampleStr.replace('TypeScript','JavaScript');    
console.log('after replace string:',replacedStr);
//substring (startIndex, endIndex)  endIndex not included
let subStr:string=sampleStr.substring(2,15); //15 not included 2 to 14  

console.log('substring  string:',subStr);

//split
let splitStrArray:string[]=sampleStr.trim().split(' '); //split by space
console.log('split string array:',splitStrArray);

//access each word from split array
splitStrArray.forEach((word,index)=>{
    console.log('word at index',index,'is:',word);
}); 

//charAt
console.log('character at index 10 is :',sampleStr.charAt(10));     
//charCodeAt
console.log('character code at index 10 is :',sampleStr.charCodeAt(10));    
//indexOf
console.log('index of TypeScript is :',sampleStr.indexOf('TypeScript'));
console.log('index of Java is :',sampleStr.indexOf('Java')); //-1 not found
//lastIndexOf
let sampleStr2:string="Hello, Welcome to TypeScript String Practice. TypeScript is a superset of JavaScript.";
console.log('last index of TypeScript is :',sampleStr2.lastIndexOf('TypeScript'));
console.log('last index of Java is :',sampleStr2.lastIndexOf('Java')); //-1 not found
//concat
let strA:string="Hello";    
let strB:string="World";
let concatStr:string=strA.concat(', ',strB,'!');  
console.log('concatenated string is :',concatStr);
//repeat
let repeatStr:string=strA.repeat(3);
console.log('repeated string is :',repeatStr);

//replaceAll
let replaceAllStr:string=sampleStr2.replaceAll('TypeScript','JavaScript');
console.log('after replaceAll string:',replaceAllStr);

//template literal with functions
function getGreeting(name:string):string{
    return `Hello, ${name}! Welcome to TypeScript.`;
}
let greetingMessage:string=getGreeting('Sumitra');
console.log(greetingMessage);       

