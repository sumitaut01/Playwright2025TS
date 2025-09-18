import { expect,test } from "@playwright/test";



//group 1
test.describe("ui tests",()=>{
test("some ui test 1", ()=>{
console.log("hi");

});

test("some ui test 2", ()=>{
console.log("hi");

});

});


//group 2
test.describe("api tests",()=>{
test("some api test 1", ()=>{
console.log("hi from api test 1");

});

test("some api test 2", ()=>{
console.log("hi from api test 2");

});
});


//Anonymous group

//You can also declare a test group without a title. This is convenient to give a group of tests a common option with test.use().

test.describe(() => {
  test.use({ colorScheme: 'dark' });

  test('one', async ({ page }) => {
    // ...
  });

  test('two', async ({ page }) => {
    // ...
  });
});



//Annotations

//You can annotate all tests in a group by providing additional details.

test.describe('two annotated tests', {
  annotation: {
    type: 'issue',
    description: 'https://github.com/microsoft/playwright/issues/23180',
  },
}, () => {
  test('one', async ({ page }) => {
    // ...
  });

  test('two', async ({ page }) => {
    // ...
  });
});
