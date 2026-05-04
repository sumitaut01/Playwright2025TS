import { expect,test,type Page } from "@playwright/test"

test('',async({browser}){

     
    const browserCon=browser.newContext();

    const page1:Page=(await browserCon).newPage()
    const page2:Page=(await browserCon).newPage()

    page.goto("")

    


}




)