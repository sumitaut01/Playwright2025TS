
import * as dotenv from 'dotenv';
import test from '@playwright/test';



test('Testing dotenv config',async()=>{

console.log('Testing dotenv config');
console.log(JSON.stringify(dotenv.config()));

});
