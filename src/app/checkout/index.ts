import { IProduct } from "../../typings/product";

 

export class Checkout {
  totalPriceWithoutDiscount: number;
  scannedItems: any;
  itemsPricing: any; 
  constructor() {
    this.scannedItems = {};
    this.itemsPricing = {};
    this.totalPriceWithoutDiscount = 0;
  }
 
 
  /**
   * This function scan the item and calculate the quantity for each product, and also calculate the price of each product and the total pracing
   * @param item Is an object contain information of order like: name product code and price ex: {"001": 1.95, "002": 5.99}
   * @returns The scanned item and quantity ex: {"001": 2, "002": 3}
   */
  public scan(item: IProduct): any {
    const isExist: boolean = this.scannedItems[item.product_code];
    if (isExist) {
      this.scannedItems[item.product_code] = this.scannedItems[item.product_code] + 1;
      this.totalPriceWithoutDiscount = this.totalPriceWithoutDiscount + item.price;
    } else {
      this.scannedItems[item.product_code] = 1;
      this.itemsPricing[item.product_code] = item.price;
      this.totalPriceWithoutDiscount = this.totalPriceWithoutDiscount + item.price;
    }
    return this.scannedItems;
  }
  
  public cleanOrders () {
    this.scannedItems = {};
    this.itemsPricing = {};
    this.totalPriceWithoutDiscount = 0;
  }
  /**
   * this function should use it after finishing the all orders for getting the final price after the discount (We'll add it in next step)
   * @returns Tt Return the Total of orders without any discount
   */

  public total(): number {
    return Number(this.totalPriceWithoutDiscount.toFixed(2));
  }

}