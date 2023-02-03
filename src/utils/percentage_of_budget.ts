import { ProductType } from "./../@types/ProductType";

export const percentageOfBudget = (tax: number, products: ProductType[]) => {
  const taxPercent = tax / 100;
  const budgetPercent: number[] = [];

  products.map((product: ProductType) => {
    const budgetAccount = (taxPercent * product.price).toFixed(2);
    budgetPercent.push(+budgetAccount);
  });

  return budgetPercent;
};
