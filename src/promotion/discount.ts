export class ProductDiscount {
    /**
     *
     * @param productCode product code found in product as ID
     * @param eligibleProductCount the number min to apply the discount to this order
     * @param discount discount for this product
     */
  
    constructor(
      private productCode: string,
      private eligibleProductCount: number,
      private discount: number
    ) {}
  
    /**
     *
     * @param order order for this product
     * @returns boolean: true if this order we will apply the discount and false if not
     */
  
    private isEligibleOrderDicount(order: any): boolean {
      return order[this.productCode] >= this.eligibleProductCount;
    }
  
    /**
     *
     * @param order  is the number of orders by product code like {"001": 10}
     * @param productPrice is the price of orders by product codelike {"001": 5.99}
     * @returns total discount
     */
  
    private makeDiscount(order: any, productPrice: any): number {
      return (
        ((productPrice[this.productCode] * this.discount) / 100) *
        order[this.productCode]
      );
    }
  
    /**
     *
     * @param currentTotal The total of order (price * quantity)
     * @param order is the number of orders by product code like {"001": 10}
     * @param productPrice is the price of orders by product code like {"001": 5.99}
     * @returns Total price for this order (with discount or not)
     */
  
    public apply(currentTotal: number, order: any, productPrice: any): number {
      if (this.isEligibleOrderDicount(order)) {
        return currentTotal - this.makeDiscount(order, productPrice);
      }
      return currentTotal;
    }
  }
  
  export class GlobalDiscount {
    /**
     *
     * @param min_spend the min value to make the discount
     * @param discount percentage discount
     */
    constructor(private min_spend: number, private discount: number) {}
    private isEligibleDicount(currentTotal: number): boolean {
      return currentTotal >= this.min_spend;
    }
  
    private makeDiscount(currentTotal: number): number {
      return (currentTotal * this.discount) / 100;
    }
  
    public apply(currentTotal: number): number {
      if (this.isEligibleDicount(currentTotal)) {
        return currentTotal - this.makeDiscount(currentTotal);
      }
      return currentTotal;
    }
  }
  