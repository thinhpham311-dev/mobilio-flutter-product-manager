import { Product } from "../models/product.model.js"
import { BadRequestError } from "../core/error.response.js"
import {
    findAllProducts
} from "../models/repositories/product.repo.js"


//define Factory Product class to create product
class ProductFactoryService {

    static productRegistry = {} //key - class

    static async createProduct(payload) {
        const product = Product.create(payload)
        return product
    }

    static async findAllProducts({ limit = 50, sort = "ctime", page = 1 }) {
        return await findAllProducts({
            limit, sort, page,
            select: ['product_name', 'product_price']
        })
    }
}



export default ProductFactoryService