

import {test as base} from '@playwright/test';
import { student } from './student';


export type MyFixtures = {
    myFix: student;
}

export const test = base.extend<MyFixtures>({
    myFix: async ({}, use) => {
        const stu=new student("Sumitra", 25);
        await use(stu);
    }
});




        
