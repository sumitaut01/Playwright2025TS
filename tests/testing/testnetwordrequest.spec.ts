//

//npm install cross-env --save-dev
console.log(`Process env ${process.env.MYVAR}`);// will pass from command line using cross-env package

//npx cross-env MYVAR=xyz npm test tests/testing/testprocessenv.spec.ts

//$env:MYVAR="xyz"; npm test tests/testing/testprocessenv.spec.ts
console.log(process.env.NODE_ENV);


