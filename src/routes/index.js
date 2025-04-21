import express from "express"
import ProductRouter from "./product/index.js"
import { apiKey, permission } from "../auth/checkAuth.js"

const api = express.Router()

api.use(apiKey)
api.use(permission("0000"))
api.use('/v1/api/product', ProductRouter)

export default api