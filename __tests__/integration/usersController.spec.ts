import "dotenv/config";
import request from "supertest";

const baseURL = process.env.baseURL;

describe("Receive users", () => {
  it("should get mockend users", async () => {
    const usersResponse = await request(baseURL).get("/users");

    expect(usersResponse.status).toBe(200);
  });

  it("should get user budget", async () => {
    const usersResponse = await request(baseURL).get("/users");
    expect(usersResponse.status).toBe(200);

    const productsResponse = await request(baseURL).get("/products");
    expect(productsResponse.status).toBe(200);
  });
});
