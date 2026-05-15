

import {test as base} from '@playwright/test';


export type CustomFixtures = {
    customFixture: string;
}

// what we have done below is we have extended the base test with our custom fixture and then we have defined
//  the custom fixture as a string and then we have used the use function to use the custom fixture 
// in our tests.
// we can use this custom fixture in our tests by importing the test from this file and then using the 
// custom fixture in our tests.

export const test = base.extend<CustomFixtures>({
    customFixture: async ({}, use) => {
        const value = "This is a custom fixture value.";
        await use(value);
    }
});






