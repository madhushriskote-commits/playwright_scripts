import  {test,request,expect,APIRequestContext } from "@playwright/test";
   

let reqcontext:APIRequestContext;

test.beforeAll("Login url",async({})=>{

   reqcontext = await request.newContext({baseURL:"https://restful-booker.herokuapp.com"})


})
test("API testing",async({request})=>{ 

    const response =await request.get("https://restful-booker.herokuapp.com/booking",{
        headers:{
        Accept : "application/json"
    }
})
    console.log(await response.json());

})

test("test API testin2",async()=>{
    const reqContext = await request.newContext({
        baseURL:"https://restful-booker.herokuapp.com/booking",
        extraHTTPHeaders :{Accept : "application/json"}
    })
    const resp1 = await reqContext.get("/booking")    
})
 
test("test API testing 3 ",async()=>{
    
const resp1 =await reqcontext.get("/booking")  

console.log(await resp1.json());

})
