
import _ from "lodash";
//this wont work as this is javascript library and we are using typescript. We need to install the types for lodash to use it in typescript. We can do this by running the command npm install @types/lodash --save-dev
// we need  types npm -i  --save-dev @types/lodash

//Could not find a declaration file for module 'lodash'. 'd:/SeleniumFrameWorks/GitHubSumitraut01/Playright2025TS/node_modules/lodash/lodash.js' implicitly has an 'any' type.
  //Try `npm i --save-dev @types/lodash` if it exists or add a new declaration (.d.ts) file containing `declare module 'lodash';`

  //basically it imports type defintions needed by typescript to understand the types of the lodash library. This is required because typescript is a statically typed language and it needs to know the types of the variables and functions used in the code. The @types/lodash package provides these type definitions for the lodash library.
 // t.ds is a file that contains type definitions for a library. It is used by TypeScript to understand the types of the variables and functions used in the code. The @types/lodash package provides these type definitions for the lodash library. This allows us to use lodash in our TypeScript code without any issues related to types.
const num=[1,2,3,4,5];

 const data=_.reverse(num);

 console.log(num);