"use strict";
import * as dotenv from "dotenv";
import * as helmet from "helmet";
import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import { LoggerUtility } from "./utils/LoggerUtility";
import { OpenAPIUtil } from "@utils/OpenAPIUtil";
import { DatabaseUtil } from "@utils/DatabaseUtil";

dotenv.config();
const app = express();

app.use(bodyParser.json({ limit: '14MB' }));
app.use(cors());
app.use(express.json());
app.use(helmet.xssFilter());
app.use(helmet.frameguard());

async function main () {
    await new DatabaseUtil().connect();
    new OpenAPIUtil().configure(app);
}

main().catch((error) => {
    LoggerUtility.error("TYPEORM: Error connecting with DB.");
    LoggerUtility.error(error);
    process.exit(1);
});

export default app;
