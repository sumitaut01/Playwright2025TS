

// The parameter's type annotation is an object type
function printCoord(pt: { x: number; y: number }) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 3, y: 7 });


//D:\SeleniumFrameWorks\GitHubSumitraut01\Playright2025TS\tests\tspractice>tsc 20functionwithobjects.ts

// D:\SeleniumFrameWorks\GitHubSumitraut01\Playright2025TS\tests\tspractice>npx test 20functionwithobjects.js
// The coordinate's x value is 3
// The coordinate's y value is 7



// Optional Properties
// Object types can also specify that some or all of their properties are optional. To do this, add a ? after the property name:

function printName(obj: { first: string; last?: string }) {
  // ...
}
// Both OK
printName({ first: "Bob" });
printName({ first: "Alice", last: "Alisson" });