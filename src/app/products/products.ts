 
import { Product } from "."
import { data } from "../../data/products"
import { IProduct } from "../../typings/product"

/**
 *  Generate products
 */

export const products = data.map((item: IProduct) => {
    return new Product(item.product_code, item.name, item.price)
})
 

 