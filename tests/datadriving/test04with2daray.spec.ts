import {test,expect} from '@playwright/test'


const data:string[][]=[
["sumit", "sumitpwd","active"],
["neha", "nehapwd","inactive"],
["amit", "amititpwd","active"]

];

test.describe("loop array with 2d",()=>{


    for( const [username,password,status] of data){
        test(`looping 2d with ${username} ,${password},${status}`, async ({page})=>{
           await page.goto("http://www.rediff.com");
           console.log(username ,password,status);
           page.close();
        });

    }
});



test.describe("loop array with 2d plaus index",()=>{


    for( const row of data){
        test(`looping 2d with ${row[0]} ,${row[1]},${row[1]}`, async ({page})=>{
           await page.goto("http://www.rediff.com");
           console.log(`looping 2d with ${row[0]} ,${row[1]},${row[1]}`);
           page.close();
        });

    }
});