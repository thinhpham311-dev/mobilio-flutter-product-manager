import winston from "winston";
import 'winston-daily-rotate-file';
import { v4 as uuidv4 } from "uuid"
const { combine, timestamp, printf } = winston.format

class AppLogger {
    constructor() {
        const formatPrint = printf(({
            level, message, context, requestId, timestamp, metadata
        }) => {
            return `${timestamp}::${level}::${context}::${requestId}::${message}::${JSON.stringify(metadata)}`
        })

        this.logger = winston.createLogger({
            format: combine(
                timestamp({
                    format: 'YYYY-MM-DD hh:mm:ss SSS A'
                }),
                formatPrint
            ),
            transports: [
                new winston.transports.Console(),
                new winston.transports.DailyRotateFile({
                    dirname: 'src/logs/info',
                    filename: 'application-%DATE%.info.log',
                    datePattern: "YYYY-MM-DD-HH-mm",
                    zippedArchive: true,
                    maxSize: '20m',
                    maxFiles: '14d',
                    format: combine(
                        winston.format.timestamp({
                            format: 'YYYY-MM-DD hh:mm:ss SSS A'
                        }),
                        formatPrint
                    ),
                    level: 'info'
                }),
                new winston.transports.DailyRotateFile({
                    dirname: 'src/logs/error',
                    filename: 'application-%DATE%.error',
                    datePattern: "YYYY-MM-DD-HH-mm",
                    zippedArchive: true,
                    maxSize: '20m',
                    maxFiles: '14d',
                    format: combine(
                        winston.format.timestamp({
                            format: 'YYYY-MM-DD hh:mm:ss SSS A'
                        }),
                        formatPrint
                    ),
                    level: 'error'
                })
            ]
        })
    }

    commonParams(params) {
        let context, req, metadata;

        if (!Array.isArray(params)) {
            context = params
        } else {
            [context, req, metadata] = params
        }
        const requestId = req?.requestId || uuidv4();
        return {
            requestId,
            context,
            metadata
        }
    }

    log(message, params) {
        const paramLog = this.commonParams(params)
        const logObject = Object.assign({
            message
        }, paramLog)

        this.logger.info(logObject)
    }

    error(message, params) {
        const paramLog = this.commonParams(params)

        const logObject = Object.assign({
            message
        }, paramLog)

        this.logger.error(logObject)
    }
}

export default new AppLogger