import express from "express"
import ProductController from "../../controllers/product.controller.js"
import asyncHandler from "../../helpers/asyncHandler.js"

const ProductRouter = express.Router()


ProductRouter.get("/list", asyncHandler(ProductController.getListAllProduct))
ProductRouter.post("/create", asyncHandler(ProductController.createProduct))

export default ProductRouter