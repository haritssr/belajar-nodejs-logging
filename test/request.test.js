import express from "express";
import request from "supertest";

const app = express();
app.get("/", (req, res) => {
  console.log("hi");
});

test("test", async () => {
  const response = await request(app).get("/");
  expect(response.text).toBe("hi");
});
