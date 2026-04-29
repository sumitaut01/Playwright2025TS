//npm install ajv
//ajv is a json schema validator which can be used to validate the response of api against the schema defined by us

//https://mocktarget.apigee.net/json
// {"firstName":"John","lastName":"Doe","city":"San Jose","state":"CA"}


import {test,expect} from "@playwright/test";
import Ajv from "ajv";

test.only('schema validation with ajv',async({request})=>{
    const response=await request.get('https://mocktarget.apigee.net/json');
    await expect(response).toBeOK();
    const responseBody=await response.json();
    console.log(responseBody);

    const schema={
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "type": "object",
  "properties": {
    "firstName": {
      "type": "string"
    },
    "lastName": {
      "type": "string"
    },
    "city": {
      "type": "string"
    },
    "state": {
      "type": "string",
      "minLength": 2,
      "maxLength": 2
    }
  },
  "required": ["firstName", "lastName", "city", "state"],
  "additionalProperties": false
};



const validate=new Ajv().compile(schema)
    console.log(validate);

    const valid=validate(responseBody);
    if(!valid){
        console.log(validate.errors);
    }    




});