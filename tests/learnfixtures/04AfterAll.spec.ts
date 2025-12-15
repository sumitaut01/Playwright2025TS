import { test, expect } from "@playwright/test";

//It is possible to group certain tests by describe and have them different before and after

test("random work 1", async () => {
  console.log("some testing");
});

test("random work 2", async () => {
  console.log("some testing");
});

test.afterAll(async () => {
  console.log("Done with tests");
});

// Alternatively, with a title
test.afterAll('Teardown', async () => {
  console.log("Done with tests");
});


test.beforeAll('Setup', async () => {
  console.log("Before All");
});


test.beforeEach('Before Each', async () => {
  console.log("Before Each Invoked");
});

test.afterEach('After Each', async () => {
  console.log("After Each Invoked");
});




