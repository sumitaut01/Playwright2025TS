
//test 1 sanity
//test 2 regression
//test 3 smoke

// --grep @smoke
// --grep @sanity|@regression

// --grep-invert @smoke    --not having smoke tests

// if two annonations then use array    find how to use
import { test, expect} from "@playwright/test";     

test('Tagging hooks test 1 sanity',{tag:'sanity'} ,async()=>{
    console.log('test 1 sanity');
});

test('Tagging hooks test 2 regression',{tag:'regression'} ,async()=>{
    console.log('test 1 regression');
});
test('Tagging hooks test 3 smoke',{tag:['smoke','@smoke'} ,async()=>{
    console.log('test 1 smoke');
}); 

