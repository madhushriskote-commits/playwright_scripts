import test, { expect } from "@playwright/test";
import { request } from "node:http";


test("API testing - post call 1",async({request})=>{

    const create_req = await request.post("/booking",{
    data: {
    "firstname" : "Jim",
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

const jsonreq = await create_req.json();
console.log(jsonreq)

//await expect(create_req.status()).toBe(200)
//await expect(create_req.statusText()).toBe("OK")
//await expect(create_req.ok).toBeTruthy()
//await expect(jsonreq.booking.additionalneeds).toEqual("Breakfast")
await expect(jsonreq.booking).toMatchObject({
"firstname" : "Jim",
    "lastname" : "Brown",
    "totalprice" : 111,
    "depositpaid" : true
})
})

test("API with UI",async({request})=>{
    const resp2 = await request.post("https://api.demoblaze.com/addtocart",{
        data :{id: "d536eafe-1fbc-e8b0-a5b4-7029a788906f", cookie: "user=9a02c2ff-cfd0-0258-d162-a1097ede3d3d"}

    })
    expect(resp2.status()).toBe(200)
})