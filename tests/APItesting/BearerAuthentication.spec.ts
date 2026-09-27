import  {test,request,expect,APIRequestContext } from "@playwright/test";
import { emitWarning } from "node:process";

test("Bearer Authetication",async ({request})=>{
 
    // generate tokeen

    const loginResponse = await request.post("/booking",{
        data:{
         email: "eve.holt@reqres.in",
              password: "cityslicka"
            }
    })

    //extract token
    const loginbody = await loginResponse.json()

    const token= loginbody.token;

    console.log("generated",token)

    // use token 

    const response = await request.get("/booking",
        {
            headers:{
                Authorization: `Bearer ${token}`
              }
        });
        
  console.log("Status:", response.status());

  const responseBody = await response.json();

  console.log(responseBody);

  expect(response.ok()).toBeTruthy();
});



 

 