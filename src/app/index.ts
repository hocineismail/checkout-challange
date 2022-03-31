import { orders__1, orders__2, orders__3 } from "../data/orders";
import { IProduct } from "../typings/product";
 
import { Checkout } from "./checkout"; 
import { products } from "./products/products";
import { GlobalDiscount, ProductDiscount } from "./promotion/discount";

const pizzaDiscount = new ProductDiscount("002", 2, 33.38); 
const TotalDiscount = new GlobalDiscount(30, 10);
const promotional_rules = [pizzaDiscount, TotalDiscount];
/**
 * 
 * @param orders an array of orders
 * @returns Total price after applying discount
 */

function purchase(orders: IProduct[]): number {
    const co = new Checkout(promotional_rules);
    orders.map((item: IProduct) => {
       co.scan(item)
    })
    let price  = co.total();
    return price
}
 
console.log("Order: 001,002,003 =>  Total Price: " + purchase(orders__1));
console.log("Order: 002,001,002 =>   Total Price: " + purchase(orders__2));
console.log("Order: 002,001,002,003 =>   Total Price: " + purchase(orders__3));
 