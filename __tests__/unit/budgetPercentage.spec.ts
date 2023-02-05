import { percentageOfBudget } from "../../src/utils/percentage_of_budget";

describe("Percentage of budget function", () => {
  it("should receive budget when passing user tax and product price", () => {
    const userTax = 26;
    const products = [
      {
        id: 1,
        name: "lorem ipsum",
        price: 6945,
      },
      {
        id: 2,
        name: "lorem ipsum",
        price: 2435,
      },
    ];

    expect(percentageOfBudget(userTax, products)).toStrictEqual([
      1805.7, 633.1,
    ]);
  });
});
