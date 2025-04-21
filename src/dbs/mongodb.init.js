import mongoose from "mongoose"
// import { NotFoundError } from '../core/error.response.js';
import config from "../configs/mongodb.config.js"

const { host, port, database } = config;

const connectString = `mongodb://${host}:${port}/${database}`;

class Database {
    constructor() {
        this.connect()
    }

    connect(type = 'mongodb') {
        if (1 === 1) {
            mongoose.set('debug', true)
            mongoose.set('debug', { color: true })
        }
        mongoose.connect(connectString, {
            maxPoolSize: 50,
            useUnifiedTopology: true
        }).then(_ => console.log("Connected Mongodb Success"))
            .catch(err => console.log("Error Connect"))
    }

    static getInstance() {
        if (!Database.instance) {
            Database.instance = new Database()
        }

        return Database.instance
    }
}

const instanceMongodb = Database.getInstance()
export default instanceMongodb