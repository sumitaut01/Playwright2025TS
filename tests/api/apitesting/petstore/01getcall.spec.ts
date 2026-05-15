import { expect, request, test } from "@playwright/test";

test('this is get demo on petstore', async () => {

    const apiContext = await request.newContext();

    const resp = await apiContext.get(
        'https://petstore.swagger.io/v2/store/inventory'
    );

   

    const body=await resp.json(); // adopted: [33m1[39m, ....
    console.log(body)

     console.log(JSON.stringify(body, null, 2));
     
     const {totvs}=body
     console.log(JSON.stringify(totvs))
     /*

     {
  "totvs": 6,
  "HrqvcZBiHd": 1,
  "tjr_available": 1,
  "string": 86,
  "𒶦\f´򉼾": 1,
  "Òû": 4,
  "pending": 11,
  "available": 588,
  "Ü¹s": 1,
  "gFZYUqUuDv": 1,
  "unknown": 1,
  "\u0011Ã": 1,
  "Sell": 1,
  "not-existing-status": 2,
  "-􀱷?򡭂򢕎·": 3,
  "": 1,
  "Invalid": 1,
  "sold": 132,
  "born": 1,
  "aivailable": 1,
  "Soldout": 1,
  "CwAMgbjBkz": 1,
  "avaluable": 1,
  "󆧫\\D򁕩6Ð𱱒\u001f³񌝈f𤪥ÁÅ®P\u0005": 2,
  "\t󞝡1\r\u0002": 3,
  "true": 1,
  "amitesh": 1,
  "s񝾰_􋠈􉿄®񜳄³": 1,
  "adopted": 1,
  "avaible": 1
}
     */

    expect(resp.status()).toBe(200);
});