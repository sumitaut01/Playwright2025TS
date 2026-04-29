
import {test,expect} from '@playwright/test'
test('no auth',async({request})=>{

    const token='sometoken'
   const resp= await request.get('someurl',
        { 
            headers:{Authorization: `Bearer ${token}`}
        
})
    }
)


