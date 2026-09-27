import  {test,request,expect,APIRequestContext } from "@playwright/test";
   test("Create and Get booking", async ({ request }) => {

    const response = await request.post("/booking", {
        data: {
            firstname: "Jim",
            lastname: "Brown",
            totalprice: 111,
            depositpaid: true,
            bookingdates: {
                checkin: "2018-01-01",
                checkout: "2019-01-01"
            },
            additionalneeds: "Breakfast"
        }
    });

    const responseJson = await response.json();

    const bookingid = responseJson.bookingid;

    const getRequest =
        await request.get(`/booking/${bookingid}`);

    expect(getRequest.status()).toBe(200);

    const getBody = await getRequest.json();

    expect(getBody.firstname).toBe("Jim");
    expect(getBody.lastname).toBe("Brown");
});