import {test,expect }   from "@playwright/test";



test('get api testing with path params',async({request})=>{
    const pathParam='1';
    const response=await request.post(`https://someurl.com/booking/${pathParam}`);
            await expect(response).toBeOK();
    const responseBody=await response.json();
    console.log(responseBody);

    expect(responseBody).not.toBeFalsy();    


    expect(responseBody.OK).toBeTruthy();
    expect(response.status).toBe(200);

}
);




test('post api testing with path params',async({request})=>{
    const response=await request.post('https://reqres.in/api/users?name=John&job=Software Engineer');
    await expect(response).toBeOK();
    const responseBody=await response.json();
    console.log(responseBody);
}
);

