import request from "supertest";

import { baseURL } from "../../src/services/api";

describe("Receive products", () => {
  it("should get mockend products", async () => {
    const productsResponse = await request(baseURL).get("/products");

    expect(productsResponse.status).toBe(200);
  });
});
