import { test, expect } from "@playwright/test";

test("Put example with token", async ({ request }) => {
  //Get token
  const payload1 = {
    username: "admin",
    password: "password123",
  };

  const response = await request.post(
    "https://restful-booker.herokuapp.com/auth",
    {
      headers: {
        "Content-Type": "application/json",
      },
      data: payload1,
    },
  );

  const respjson = await response.json();
  const token = respjson.token;
  expect(token).not.toBeNull();
  console.log("Token", token);

  //Get new booking id
  const payload2 = {
    firstname: "Sagacity",
    lastname: "User",
    totalprice: "1000",
    depositpaid: true,
    bookingdates: {
      checkin: "2026-01-01",
      checkout: "2026-01-01",
    },
    additionalneeds: "Breakfast",
  };

  const newResponse = await request.post(
    "https://restful-booker.herokuapp.com/booking",
    {
      headers: {
        "Content-Type": "application/json",
      },
      data: payload2,
    },
  );
  console.log(response.status());
  const newResp = await newResponse.json();
  const newBookingID = newResp.bookingid;
  console.log("New Booking-ID : ", newBookingID);

  const payload3 = {
    firstname: "Test",
    lastname: "Employee",
    totalprice: "10100",
    depositpaid: true,
    bookingdates: {
      checkin: "2026-05-21",
      checkout: "2026-05-22",
    },
    additionalneeds: "Breakfast + Drinks",
  };

  const newResponseData = await request.put(
    `https://restful-booker.herokuapp.com/booking/${newBookingID}`,
    {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Cookie: `token=${token}`,
      },
      data: payload3,
    },
  );
  console.log(response.status());
  const newRespData = await newResponseData.json();
  console.log(newRespData);
});
