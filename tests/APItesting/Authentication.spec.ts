import  {test,request,expect,APIRequestContext } from "@playwright/test";


 
test("API key",async ({request})=>{

    const apikey = "abc123"

     const loginResponse = await request.get("/booking/",{
        params:{
              api_key : apikey
        }
    })
     })
 
 
test("basic Authetication",async ({request})=>{

     const loginResponse = await request.get("/booking/",{
        headers:{
             username : "admin",
            password : "admin123"
        }
     })
 
})

test("barer Authetication",async ({request})=>{
  const loginResponse = await request.post("/booking/",{
      data:{
        email : "madhu@gmail.com",
        password : "rtfhvg"
          }
     })

     const jsonResponse = await loginResponse.json()
     const token = jsonResponse.token
    console.log("generated",token)

     const getRequest = await request.get("/booking",{
        headers:{
             Authorization: `Bearer ${token}`
        }
     })

      console.log("Status:", getRequest.status());

  const responseBody = await getRequest.json();

  console.log(responseBody);

  expect(getRequest.ok()).toBeTruthy();

})