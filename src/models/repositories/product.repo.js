import { Product } from "../product.model.js";
import { getSelectData } from "../../utils/index.js";

const findAllProducts = async ({ limit, sort, page, filter, select }) => {
    const skip = (page - 1) * limit
    const sortBy = sort === "ctime" ? { _id: -1 } : { _id: 1 }
    const results = await Product.find(filter)
        .sort(sortBy)
        .skip(skip)
        .limit(limit)
        .select(getSelectData(select))
        .lean()

    return results
}


export {
    findAllProducts
}