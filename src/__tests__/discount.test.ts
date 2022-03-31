import { GlobalDiscount, ProductDiscount } from "../promotion/discount";

 
describe("Promotional Discount products by amount Tests", () => {
  const testDiscount = new ProductDiscount("002", 2, 33.38);
  it("Should be defined", () => {
    expect(testDiscount).toBeDefined();
  });
  it("Should apply the discount, return total price with discount by amount", () => {
    expect(
      Number(testDiscount.apply(11.98, { "002": 2 }, { "002": 5.99 }).toFixed(2))
    ).toBe(7.98);
  });
  it("Should apply no discount, return total price without any discount", () => {
    expect(
        Number(testDiscount.apply(5.99, { "002": 1 }, { "002": 5.99 }).toFixed(2))
    ).toBe(5.99);
  });
});

describe("Promotional Discount by percentage", () => {
  const testDiscount = new GlobalDiscount(30, 10);
  it("Should be defined", () => {
    expect(testDiscount).toBeDefined();
  });
  it("Should apply  discount on total orders, return price after making discount", () => {
    expect(testDiscount.apply(30)).toBe(27);
  });
  it("Should apply no discount on total orders, return price without discount", () => {
    expect(testDiscount.apply(29)).toBe(29);
  });
});
