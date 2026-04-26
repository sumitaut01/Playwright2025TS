

//DEBUG=pw:api npx playwright test "testtimeouts2.spec.ts"
import  { test, expect } from "@playwright/test";

test('this is for dialog',async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts')

    const locator=page.getByText('Click for JS Confirm');
    await locator.click();

    // bf default PW ha tendecy to reject ???

})



test('this is for dialog 2,handled with page.on',async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts')

    page.on("dialog",dialog=>{
        const msg =dialog.message()
        console.log(msg);
        dialog.accept();
    })

    const locator=page.getByText('Click for JS Confirm');
    await locator.click();


   //this wont be success if prevous step has failed

   //so we will face error if we handle like below:
   Problem:

// Both listeners stay active
// When the second dialog (prompt) appears, both handlers fire
// The first handler (dialog.accept()) may run first → your prompt text is ignored

// This leads to:

// unpredictable behavior
// prompt not getting input
// debugging confusion

   page.on("dialog",dialog2=>{
        const msg =dialog2.message()
        console.log(msg);
        dialog2.accept('this is just for prompt');    
    })


    const locator2=page.getByText('Click for JS Prompt');
    await locator2.click();

})



// proble solced usinf page.once
test('this is for dialog 2,handled with page.once',async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts')

    

    page.once("dialog",async dialog=>{
        const msg =dialog.message()
        console.log(msg);
        await dialog.accept();
    })

    const locator=page.getByText('Click for JS Confirm');
    await locator.click();




   page.once("dialog",async dialog2=>{
        const msg =dialog2.message()
        console.log(msg);
        await dialog2.accept('this is just for prompt');    
    })


    const locator2=page.getByText('Click for JS Prompt');
    await locator2.click();

})


//solved with single listener and checking the type of dialog
test('dialog handled with single listener', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

    page.on("dialog", async (dialog) => {
        console.log(dialog.type());
        console.log(dialog.message());

        if (dialog.type() === 'prompt') {
            await dialog.accept('this is just for prompt');
        } else {
            await dialog.accept();
        }
    });

    await page.getByText('Click for JS Confirm').click();
    await page.getByText('Click for JS Prompt').click();
});