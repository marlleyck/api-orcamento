import { ProductType } from "./../@types/ProductType";

export const percentageOfBudget = (tax: number, products: ProductType[]) => {
  const taxPercent = tax / 100;

  const budgetPercent = products.map((product) => {
    const budgetAccount = (taxPercent * product.price).toFixed(2);
    return Number(budgetAccount);
  });

  return budgetPercent;
};
