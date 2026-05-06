

import {test,expect} from '@playwright/test'
import { link } from 'fs/promises';

test.describe('common dom based assertions',()=>{
    test('toBeVisible assertion',async({page})=>{               
const link = page.getByRole('link', { name: 'Pricing' });
const btn  = page.getByRole('button', { name: 'Save' });

await expect(link).toHaveAttribute('href', '/pricing'); // this assertion will pass if the element has the attribute 'href' with the value '/pricing'. If the element does not have the attribute 'href' or if the value of the attribute is not '/pricing', the assertion will fail and an error message will be displayed.

await expect(btn).toHaveClass('primary-btn');// this assertion will pass if the element has the class 'primary-btn'. If the element does not have the class 'primary-btn', the assertion will fail and an error message will be displayed.

await expect(btn).toHaveCSS('background-color', 'rgb(0, 123, 255)');// this assertion will pass if the element has the CSS property 'background-color' with the value 'rgb(0, 123, 255)'. If the element does not have the CSS property 'background-color' or if the value of the property is not 'rgb(0, 123, 255)', the assertion will fail and an error message will be displayed.

await expect(page.getByTestId('logo')).toHaveId('company-logo');//this assertion will pass if the element with the test ID 'logo' has the ID 'company-logo'. If the element does not have the test ID 'logo' or if the ID of the element is not 'company-logo', the assertion will fail and an error message will be displayed.

await expect(page.getByTestId('alert-box')).toHaveRole('alert'); //this assertion will pass if the element with the test ID 'alert-box' has the role 'alert'. If the element does not have the test ID 'alert-box' or if the role of the element is not 'alert', the assertion will fail and an error message will be displayed.

//



    })  
    });