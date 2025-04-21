import dotenv from 'dotenv'

dotenv.config({ path: `.env.${process.env.NODE_ENV}` })

// Configuration for Local
const local = {
    user: process.env.MONGO_ROOT_USERNAME || "root",
    pass: process.env.MONGO_ROOT_PASSWORD || "",
    host: process.env.MONGO_HOST || "127.0.0.1",
    port: process.env.MONGO_PORT || 27017,
    database: process.env.MONGO_DATABASE || "test",
};

// Configuration for Development
const dev = {
    user: process.env.MONGO_ROOT_USERNAME || "root",
    pass: process.env.MONGO_ROOT_PASSWORD || "",
    host: process.env.MONGO_HOST || "127.0.0.1",
    port: process.env.MONGO_PORT || 27017,
    database: process.env.MONGO_DATABASE || "test",
};

// Configuration for Production
const pro = {
    user: process.env.MONGO_ROOT_USERNAME || "root",
    pass: process.env.MONGO_ROOT_PASSWORD || "",
    host: process.env.MONGO_HOST || "127.0.0.1",
    port: process.env.MONGO_PORT || 27017,
    database: process.env.MONGO_DATABASE || "test",
};

const config = { local, dev, pro }

const env = process.env.NODE_ENV || "dev";

export default config[env]