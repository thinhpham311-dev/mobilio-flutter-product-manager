import ProductFactoryService from "../services/product.service.js";
import { SuccessResponse } from "../core/success.response.js"

class ProductController {

    createProduct = async (req, res, next) => {
        try {
            new SuccessResponse({
                message: "Create new Product success!",
                metadata: await ProductFactoryService.createProduct(req.body)
            }).send(res)
        }
        catch (error) {
            next(error)
        }
    }

    getListAllProduct = async (req, res, next) => {
        try {
            new SuccessResponse({
                messsage: "Get List All Product Success",
                metadata: await ProductFactoryService.findAllProducts(req.query)
            }).send(res)
        } catch (error) {
            next(error)
        }
    }

    //END QUERY
}

export default new ProductController