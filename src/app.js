import express from "express"
import morgan from "morgan"
import helmet from "helmet"
import compression from "compression"
import dotenv from 'dotenv'
import cors from "cors"
import api from "./routes/index.js"


dotenv.config({ path: `.env.${process.env.NODE_ENV}` })

const app = express()

//init middleware 
app.use(cors({
    origin: 'http://localhost:3000',
    methods: 'GET, HEAD, PUT, PATCH, POST, DELETE',
    credentials: true,
    optionsSuccessStatus: 204
}))
app.use(morgan("dev"))
app.use(helmet())
app.use(compression())
app.use(express.json())

//init db
import "./dbs/mongodb.init.js"

//init route 

app.use("/", api)

app.use((req, res, next) => {
    const error = new Error('Not Found')
    error.status = 404
    next(error)
})

app.use((error, req, res, next) => {
    if (error instanceof ValidationError) {
        return res.status(error.statusCode).json(error)
    }

    const statusCode = error.status || 500

    return res.status(statusCode).json({
        status: "error",
        code: statusCode,
        message: error.message || "Internal Server"
    })
})

export default app