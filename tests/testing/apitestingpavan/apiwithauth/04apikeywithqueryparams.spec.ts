
import {test,expect} from '@playwright/test'
test('no auth',async({request})=>{
   const resp= await request.get('someurl',
        { 
            headers:{Authorization: 'somedata'}
        
})

   expect(await resp.status()).toBe(200);

    }
)


