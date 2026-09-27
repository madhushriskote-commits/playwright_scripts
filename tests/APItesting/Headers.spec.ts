import test, { expect } from "@playwright/test"; 



test("API testing - Headers",async({request})=>{

    const getreq = await request.get("/booking/1")
   // const getjson = getreq.json()

    const headers = getreq.headers()

    console.log(headers)

    expect(headers.server).toEqual("Heroku")

    const headrsarray = getreq.headersArray()
    console.log(headrsarray)

    console.log(headrsarray.length)

    headrsarray.forEach((headers)=>{

        console.log(headers.name+"::" +headers.value)
    })

})
