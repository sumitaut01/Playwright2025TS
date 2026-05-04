

import {test} from './fixture';

test('should use my custom fixture', async ({myFix}) => {
    console.log(myFix.name); // This will log: "Sumitra"
    console.log(myFix.age); // This will log: 25


    myFix.getDetails(); // This will return the details of the student as a string
    myFix.setDetails("New Name", 30); // This will set the details of the student to the new name and age
    console.log(myFix.name); // This will log: "New Name"
    console.log(myFix.age); // This will log: 30
});