import { test, expect } from "@playwright/test";

test("Post call example with token", async ({ request }) => {
  const payload = {
    // username: "james.tyreman@skewb.uk",
    //   password: "Password!444",

    username: "admin",
    password: "password123",
  };

  const response = await request.post(
    "https://restful-booker.herokuapp.com/auth",
    {
      headers: {
        "Content-Type": "application/json",
      },
      data: payload,
    },
  );

  console.log(response.status());
  const respData = await response.json();

  expect(respData.token).not.toBeNull();
});

test("Post call example with booking id", async ({ request }) => {
  const payload = {
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

  const response = await request.post(
    "https://restful-booker.herokuapp.com/booking",
    {
      headers: {
        "Content-Type": "application/json",
      },
      data: payload,
    },
  );

  console.log(response.status());
  const respData = await response.json();
  console.log(respData);

  expect(respData.bookingid).not.toBeNull();
  expect(respData.booking.firstname).toBe("Sagacity");
  expect(respData.booking.lastname).toBe("User");
});
