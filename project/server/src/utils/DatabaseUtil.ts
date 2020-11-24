"use strict";
import * as dotenv from "dotenv";
import * as fs from "fs";
import * as path from "path";
import "reflect-metadata";
import { createConnection, createConnections } from "typeorm";
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
                const dbConf = JSON.parse(specDB);
                dbConf[0].entities = [];
                if (process.env.NODE_ENV === "production") {
                    LoggerUtility.info("Working with JS files");
                    dbConf[0].entities.push("dist/databases/entities/**/*.js");
                } else {
                    LoggerUtility.info("Working with TS files");
                    dbConf[0].entities.push("src/databases/entities/**/*.ts");
                }
                const password = process.env.DB_PASSWORD;
                const user = process.env.DB_USER;
                dbConf[0].username = user;
                dbConf[0].password = password;
                this.connectionFunction = createConnections(dbConf);
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
