import test, { expect } from "@playwright/test";
 

test("API testing - Put call 1",async({request})=>{

    const Putreq = await request.put("/booking/1",{
    headers:{
        Authorization :"Basic YWRtaW46cGFzc3dvcmQxMjM="

        },
        data:
                {
            "firstname" : "Mina",
            "lastname" : "Brown",
            "totalprice" : 111,
            "depositpaid" : true,
            "bookingdates" : {
            "checkin" : "2018-01-01",
            "checkout" : "2019-01-01"
            },
            "additionalneeds" : "Breakfast"
        }

    })
console.log(await Putreq.json())
console.log(await Putreq.status())
console.log(await Putreq.statusText())

await expect(Putreq.status()).toBe("200")
await expect(Putreq.statusText()).toBe("OK")
await expect(Putreq.ok).toBeTruthy()
})  
    
 