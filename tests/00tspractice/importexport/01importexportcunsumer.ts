

import multiply from './01importexport';

console.log(multiply(5, 3)); // Output: 15
//tsx tests\00tspractice\importexport\01importexportcunsumer.ts


//console.log(add(5, 3)); // Output: 8

//ReferenceError: add is not defined   ... notice that we cannot use add and subtract functions 
// because they are not imported in this file. 
// We only imported the default export which is the multiply function.
