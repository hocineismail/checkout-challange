import { Checkout } from "../app/checkout";
import { Product } from "../app/products";
import { GlobalDiscount, ProductDiscount } from "../app/promotion/discount";

// we can use any rule for any product
const pizzaDiscount = new ProductDiscount("002", 2, 33.38);
const TotalDiscount = new GlobalDiscount(30, 10);

const discountRules = [pizzaDiscount, TotalDiscount];
describe("Checkout Tests", () => {
  //Clean the last orders before make any tests
  const checkout = new Checkout(discountRules);
  afterEach(() => {
    checkout.cleanOrders();
  });
  let testOne = new Product("001", "mock name", 1.95);
  let testTwo = new Product("002", "mock name", 5.99);
  let testThre = new Product("003", "mock name", 25);
  let testFour = new Product("003", "mock name", 30);

  it("Should be defined", () => {
    expect(checkout).toBeDefined();
  });
  it("Should return total Price is: 3.90 Euro", () => {
    checkout.scan(testOne);
    checkout.scan(testOne);
    expect(checkout.total()).toBe(3.9);
  });
  it("Should return total Price after applying 10/100 discount", () => {
    checkout.scan(testFour);
    expect(checkout.total()).toBe(27);
  });

  it("Should return total Price after applying discount for more then two orders.", () => {
    checkout.scan(testTwo);
    checkout.scan(testTwo);
    expect(checkout.total()).toBe(7.98);
  });

  it("Should return total Price 29.65 € after applying discount for 001,002,003 products.", () => {
    checkout.scan(testOne);
    checkout.scan(testTwo);
    checkout.scan(testThre);
    expect(checkout.total()).toBe(29.65);
  });

  it("Should return total Price 9.93 € after applying discount for 002,001,002 products.", () => {
    checkout.scan(testTwo);
    checkout.scan(testOne);
    checkout.scan(testTwo);
    expect(checkout.total()).toBe(9.93);
  });
  it("Should return total Price 31.44 € after applying discount for 002,001,002,003 products.", () => {
    checkout.scan(testTwo);
    checkout.scan(testOne);
    checkout.scan(testTwo);
    checkout.scan(testThre);
    expect(checkout.total()).toBe(31.44);
  });
});
