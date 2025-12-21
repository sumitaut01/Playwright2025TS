


import { expect, test, request } from "@playwright/test";



const url = "https://rahulshettyacademy.com/client";

const payLoad = { userEmail: '', userPassword: '' }
let token = '';
test.beforeAll('testing to get the token in beforeAll', async ({ page }) => {

    const apiContext = request.newContext();
    const response = await (await apiContext).post(url,
        {
            data: {
                payLoad
            }

        });

    const loginResponseJson = await response.json();
        token=loginResponseJson.token;
});







test('injecting token into local storage', async ({ page }) => {

page.addInitScript(value=>{
window.localStorage.setItem('token',value);
},token);



}





});




