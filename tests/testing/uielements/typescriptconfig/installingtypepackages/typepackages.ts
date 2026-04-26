
import fs from 'node:fs'; // if this does not work then we need to install the types for node by running the command npm install @types/node --save-dev
// we need to install the types for node to use the fs module in typescript. This is required because typescript is a statically typed language and it needs to know the types of the variables and functions used in the code. The @types/node package provides these type definitions for the node library.   

//npm install @types/node --save-dev

//basically it imports type defintions needed by typescript to understand the types of the node library. This is required because typescript is a statically typed language and it needs to know the types of the variables and functions used in the code. The @types/node package provides these type definitions for the node library. This allows us to use node in our TypeScript code without any issues related to types.
    