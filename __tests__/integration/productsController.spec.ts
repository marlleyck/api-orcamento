import "dotenv/config";
import request from "supertest";

const baseURL = process.env.baseURL;

describe("Receive products", () => {
  it("should get mockend products", async () => {
    const productsResponse = await request(baseURL).get("/products");

    expect(productsResponse.status).toBe(200);
  });
});
