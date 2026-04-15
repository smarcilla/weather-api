import { describe, it, expect } from "vitest";
import request from "supertest";
import { app } from "../src/app.js";

describe("GET /weather", () => {
  it("should return the current weather", async () => {
    const response = await request(app).get("/weather");
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ temperature: 25, condition: "Sunny" });
  });
});
