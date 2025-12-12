import fs from 'fs';
import { test, expect } from '@playwright/test';

const jsonfile = 'tests/datadriving/jsondata.json';

const jdata: any = JSON.parse(
    fs.readFileSync(jsonfile, 'utf-8')
);

test.describe("looping json data again", () => {

    for (const { username, password, active } of jdata) {
        test(`json loop work ${username} ${password},${active}`, async ( ) => {
            console.log(jdata);
        });
    }


});
