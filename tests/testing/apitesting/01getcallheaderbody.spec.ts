

import {test,expect} from '@playwright/test'
import { request } from 'http'



//test.use({ baseURL: 'https://billpay-api.gauravkhurana-practice-api.workers.dev' });  // this will set the baseURL for all the tests in this file, we can also set it at the project level in the playwright.config.ts file. If we set it at both the levels then the one at the test level will override the one at the project level. This allows us to have a common baseURL for all tests while still being able to customize it for specific test files when necessary.
test('getcallwithheaders', {tag:[] ,annotation:[ ]}, async ({request})=>{


const res=await request.get('/health');
const resx=await res.json();

const rcode=res.status()
console.log(rcode);

const headers=res.headers()
console.log(typeof(headers));
console.log('----separator-----')
console.log(headers['content-type']);




})



