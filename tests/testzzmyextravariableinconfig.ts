

import {test as base} from '@playwright/test';

export type myConfig = {
    myExtraVariable: string;
}


export const test = base.extend<myConfig>({
    myExtraVariable: ['', {option: true}] //true means this variable is optional, if we set it to false then it will be mandatory to pass this variable in the test
})



