import ApiService from "../services/apiKey.service.js";
import { BadRequestError } from "../core/error.response.js"

const HEADER = {
    API_KEY: "x-api-key",
    AUTHORIZATION: "authorization",
};

const apiKey = async (
    req,
    res,
    next
) => {
    try {
        const key = req.headers[HEADER.API_KEY]?.toString();
        if (!key) {
            throw new BadRequestError("Forbidden Error")
        }

        const objKey = await ApiService.findById(key);
        if (!objKey) {
            throw new BadRequestError("Forbidden Error")
        }

        req.objKey = objKey;
        next(); // Call next() without returning to avoid middleware execution stopping prematurely
    } catch (error) {
        const statusCode = error.status || 500;
        return res.status(statusCode).json({
            status: "error",
            code: statusCode,
            message: error.message || "Internal Server Error",
        });
    }
};



const permission = (permission) => {
    return (req, res, next) => {
        if (!req.objKey?.permissions) {
            throw new BadRequestError("permission denied")
        }

        console.log('permissions', req.objKey.permissions);
        const validPermission = req.objKey.permissions.includes(permission);

        if (!validPermission) {
            throw new BadRequestError("permission denied")
        }

        return next();
    };
};


export {
    apiKey,
    permission
};
