import test, { expect } from "@playwright/test";
import Apijson from "../../test-data/api.json"
test("API testing - post call 1",async({request})=>{

    const req = await request.post("https://restful-booker.herokuapp.com/booking",{
        data:Apijson.bookingData
   })

   const reqresponse = await req.json()
   console.log(reqresponse)

   expect(reqresponse.booking).toMatchObject(Apijson.bookingData)
   //expect(reqresponse.booking.additionalneeds).toEqual(Apijson.additionalneeds)
})


test("API testing - put call 1",async({request})=>{

})
