

import {test, expect} from "@playwright/test"

test('destructuring',async()=>{
    const obj={
        name:"John",
        age:30,
        city:"New York"
    }   

    const {name,age,city}=obj

    expect(name).toBe("John")
    expect(age).toBe(30)
    expect(city).toBe("New York")



    //rename while destructuring
    const user = { id: 1 }

const { id: userId } = user

console.log(userId) // 1



//nested destructuring
const response = {
  user: {
    id: 10,
    profile: {
      email: "test@mail.com"
    }
  }
}

const { user: { profile: { email } } } = response

console.log(email) // test@mail.com


//

})  