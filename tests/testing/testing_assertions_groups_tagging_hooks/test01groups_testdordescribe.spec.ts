

import {test,expect} from '@playwright/test';

//hooks can also be used inside describe blocks
//to run setup and teardown for specific group of tests
// if hooks are outisde the group then they will be applicable for all tests in the file
// if hooks are inside the describe block then they will be applicable only for tests inside that describe block



test.describe('Group1 test describe block',()=>{



    test('Groups1 test 1',async({page})=>{

        console.log('This is Groups1 test 1');
    });


      test('Groups1 test 2',async({page})=>{

        console.log('This is Groups1 test 2');
    });


});


test.describe('Group 2 test describe block',()=>{



    test('Groups2 test 1',async({page})=>{

        console.log('This is Groups 2test 1');
    });


      test('Groups2 test 2',async({page})=>{

        console.log('This is Groups2 test 2');
    });


});