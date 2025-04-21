
import ApiKey from "../models/apiKey.model.js"
// import crypto from "crypto";

class ApiKeyService {
    static findById = async (key) => {

        // const newKey = await ApiKey.create({ key: crypto.randomBytes(64).toString('hex'), permissions: ['0000'] })
        // console.log(newKey)
        return await ApiKey.findOne({ key, status: true }).lean();
    }
}

export default ApiKeyService