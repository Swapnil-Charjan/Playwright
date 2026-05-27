// @ts-check
import { test, expect } from "@playwright/test";
import { log } from "node:console";

test("Api Testing", async ({ request }) => {
  const resp = await request.get(
    "https://jsonplaceholder.typicode.com/posts/1",
  );

  //get body in buffers
  const respBody = await resp.body();
  console.log(respBody);

  //get body in JSON
  const respJson = await resp.json();
  console.log(respJson);

  //get body in Headers
  const respHeaders = resp.headers();
  console.log(respHeaders);

  //get body in Headers Array
  const respHeadersArray = resp.headersArray();
  console.log(respHeadersArray);

  //get body in Status
  const respStatus = resp.status();
  console.log(respStatus);

  //get body in Status Text
  const respStatusText = resp.statusText();
  console.log(respStatusText);

  //Expected Result for each Method
  expect(respStatus).toBe(200);
  expect(respStatusText).toBe("OK");
  expect(resp.ok()).toBeTruthy();
  expect(respJson).toHaveProperty("userId", 1);
  expect(respJson).toHaveProperty("id", 1);
  expect(respJson).toHaveProperty(
    "title",
    "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  );
  expect(respJson.body).toContain("quia et suscipit");
});
