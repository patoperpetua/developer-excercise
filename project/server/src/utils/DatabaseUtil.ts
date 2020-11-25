"use strict";
import * as dotenv from "dotenv";
import * as fs from "fs";
import * as path from "path";
import "reflect-metadata";
import { ConnectionOptions, createConnection, createConnections } from "typeorm";
import { LoggerUtility } from "./LoggerUtility";

export class DatabaseUtil {

    private dbConf = "./ormconfig.json";
    private connectionFunction: Promise<any>;

    constructor(){
        dotenv.config();
        if (fs.existsSync(this.dbConf)) {
            LoggerUtility.info("Found ormconfig.json file in root folder.");
            this.connectionFunction = createConnection();
        } else {
            const confDir = path.join(__dirname, "../../conf/ormconfig.json");
            if (fs.existsSync(confDir)) {
                const specDB = fs.readFileSync(confDir, "utf8");
                const dbConfs = JSON.parse(specDB);
                let dbConf;
                switch(process.env.NODE_ENV){
                    case "production":
                        dbConf  = dbConfs.find((conn:ConnectionOptions ) => conn.name === "file-db");
                        break;
                    case "testing":
                        dbConf  = dbConfs.find((conn:ConnectionOptions ) => conn.name === "memory-db");
                        break;
                    default:
                        dbConf  = dbConfs.find((conn:ConnectionOptions ) => conn.name === "file-db");
                }
                LoggerUtility.info(`Working with ${dbConf.name} database configuration`);
                dbConf.entities = [];
                if (process.env.NODE_ENV === "production") {
                    LoggerUtility.info("Working with JS files");
                    dbConf.entities.push("dist/databases/entities/**/*.js");
                } else {
                    LoggerUtility.info("Working with TS files");
                    dbConf.entities.push("src/databases/entities/**/*.ts");
                }
                const password = process.env.DB_PASSWORD;
                const user = process.env.DB_USER;
                dbConf.username = user;
                dbConf.password = password;
                dbConf.name = "default";
                this.connectionFunction = createConnections([dbConf])
            } else {
                this.connectionFunction = new Promise((resolve, reject) => {
                    resolve(true);
                });
            }
        }
    }

    connect(): Promise<any>{
        return this.connectionFunction;
    }
}
