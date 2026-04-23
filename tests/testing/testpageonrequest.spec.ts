

import {test,expect} from "@playwright/test"
import { roundToNearestHours } from "date-fns";
test('reading request',async({page})=>{

page.on('request',request=>console.log(request.method()  +" "+request.url()))
await page.goto("https://valentinos-magic-beans.click/products");
}



);


test('reading request. wait till network done',async({page})=>{

page.on('request',request=>console.log(request.method()  +" "+request.url()))
await page.goto("https://valentinos-magic-beans.click/products");
page.waitForLoadState("networkidle");

}



);



const data={
    success: true,
    source: "dynamodb",
    data: [
        {
            "name": "Brazilian Santos",
            "SK": "#METADATA",
            "PK": "PROD#504",
            "origin": "Brazil",
            "GSI1PK": "PRODUCTS",
            "GSI1SK": "PROD#BRAZILIAN SANTOS",
            "roastLevel": "Medium-Dark Roast",
            "description": "Smooth and mellow with low acidity.",
            "price": 22.99,
            "image": "https://valentinos-magic-beans.click/images/504-brazilian-santos.png",
            "weight": "12oz / 340g",
            "id": "504",
            "stock": 100
        }]
    };

test('route api mock',async({page})=>{

    const resp="";
page.route('https://api.valentinos-magic-beans.click/products',(route)=>{

route.fulfill({
status:200,
contentType:'application/json',
body: JSON.stringify(data)
})
})

await page.goto('https://api.valentinos-magic-beans.click/products');
await page.waitForLoadState("networkidle");





});

