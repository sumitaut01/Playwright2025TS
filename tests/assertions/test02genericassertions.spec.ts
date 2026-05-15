
import {test,expect}  from '@playwright/test'

test('generic assertions',()=>{


const name='Sumit Raut'

const age=38
const subjects:string[]=['it','cs','qa']

const isAlive:boolean=true;


expect(name).toBe('Sumit Raut');

expect(name).toContain('it')

expect.soft(name).toContain('/IT/')

expect.soft(subjects).toBe(['it','cs','qa'])

expect(subjects).toContain('qa')

expect(isAlive).toBeTruthy();

expect(isAlive).not.toBeFalsy();

expect(isAlive).toBeInstanceOf(Boolean)
expect(age).toBeGreaterThan(1)
expect(age).toBeLessThan(39)

})