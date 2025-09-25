
import { expect,test } from "@playwright/test";


test('get api test',async({request})=>{
    const response=await request.get('https://jsonplaceholder.typicode.com/posts/1');
    expect(response.status()).toBe(200);
    const responseBody=JSON.parse(await response.text());
    expect(responseBody.id).toBe(1);
    expect(responseBody.userId).toBe(1);
    expect(responseBody.title).toBe("sunt aut facere repellat provident occaecati excepturi optio reprehenderit");
    expect(responseBody.body).toBe("quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto");
}   );