
import {test,expect} from "@playwright/test";

test.describe('post api testing',()=>{
    test('post api test',async({request})=>{
        const response=await request.post('https://reqres.in/api/users',{
            data:{
                name: 'John Doe',
                job: 'Software Engineer'
            }
        });
        await expect(response).toBeOK();
    });



    const data={
                name: 'John Doe',
                job: 'Software Engineer'
            }

    test('post api test json stringify',async({request})=>{
        const response=await request.post('https://reqres.in/api/users',{
            data: JSON.stringify(data)
        });
        await expect(response).toBeOK();




        response.json().then((res)=>{
            console.log(res);
        });


        const responseBody=await response.json();
        console.log(responseBody);


        expect(responseBody).toHaveProperty('id');
        expect(responseBody).toHaveProperty('createdAt');

        // expect(responseBody.jsonpath).toHaveProperty('createdAt');


        //subobject

        const bookingobject=responseBody.booking;
        expect(bookingobject).toMatchObject({
            firstname:'John',
            lastname:'Doe'
        })


        
    });

      });

