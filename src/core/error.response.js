const StatusCode = {
    FORBIDDEN: 403,
    CONFLICT: 409,
};

const ReasonStatusCode = {
    FORBIDDEN: 'Bad Request Error',
    CONFLICT: 'Conflict Error', // Fixed incorrect type
};

import { StatusCodes, ReasonPhrases } from "../utils/httpStatusCode.js";
// import AppLogger from "../loggers/app.logger.js"

class ErrorResponse extends Error {

    constructor(message, status) {
        super(message);
        this.status = status;
        this.now = Date.now()
        // AppLogger.error(this.message, ['/api/v1/login'])
    }
}

class ConflictRequestError extends ErrorResponse {
    constructor(
        message = ReasonStatusCode.CONFLICT,
        statusCode = StatusCode.FORBIDDEN
    ) {
        super(message, statusCode);
    }
}

class BadRequestError extends ErrorResponse {
    constructor(
        message = ReasonStatusCode.CONFLICT,
        statusCode = StatusCode.FORBIDDEN
    ) {
        super(message, statusCode)
    }
}

class AuthFailureError extends ErrorResponse {
    constructor(
        message = ReasonPhrases.UNAUTHORIZED,
        statusCode = StatusCodes.UNAUTHORIZED
    ) {
        super(message, statusCode)
    }
}

class NotFoundError extends ErrorResponse {
    constructor(
        message = ReasonPhrases.NOT_FOUND,
        statusCode = StatusCodes.NOT_FOUND
    ) {
        super(message, statusCode)
    }
}


class ForbiddenError extends ErrorResponse {
    constructor(
        message = ReasonPhrases.FORBIDDEN,
        statusCode = StatusCodes.FORBIDDEN
    ) {
        super(message, statusCode)
    }
}

class RedisErrorResponse extends ErrorResponse {
    constructor(
        message = ReasonPhrases.INTERNAL_SERVER_ERROR,
        statusCode = StatusCodes.INTERNAL_SERVER_ERROR
    ) {
        super(message, statusCode)
    }
}



export { ConflictRequestError, BadRequestError, AuthFailureError, NotFoundError, ForbiddenError, RedisErrorResponse };
