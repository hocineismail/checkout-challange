import { Product } from "../app/products";

describe("Product Tests", () => {
  const product = new Product("002", "Pizza", 5.99);
  it("should be defined", () => {
    expect(product).toBeDefined();
  });
  it("should return the product's name: Pizza", () => {
    expect(product.name).toBe("Pizza");
  });

  it("should return the product's product_code: 002", () => {
    expect(product.product_code).toBe("002");
  });

  it("should return the product's price: 5.99 ", () => {
    expect(product.price).toBe(5.99);
  });
});
