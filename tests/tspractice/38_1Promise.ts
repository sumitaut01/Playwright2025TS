import { rejects } from "assert";
import { resolve } from "path";



 const something=new Promise((resolve,reject)=>{

setTimeout(()=>{
    
    let error=true
    if(error){

        throw Error('some error')
        reject('some error')
    }
    else{

   reject('worked')

    }
})
 });



 something.then(()=>console.log('hi'));

  something.catch(()=>console.log('error'));

