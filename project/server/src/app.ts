"use strict";
import bodyParser from "body-parser";
import * as dotenv from "dotenv";
import express from "express";
import * as fs from "fs";
import jsyaml from "js-yaml";
import swaggerTools from "oas-tools";
import * as path from "path";
import swaggerUi from "swagger-ui-express";
import { LoggerUtility } from "./utils/LoggerUtility";

// // From TypeORM
// import "reflect-metadata";
// import { createConnection, createConnections } from "typeorm";

import cors from "cors";
import * as helmet from "helmet";

dotenv.config();
const app = express();

// swaggerRouter configuration
const options = {
    controllers: path.join(__dirname, "./controllers"),
    docs: {
        apiDocs: "/api-docs",
        apiDocsPrefix: "",
        swaggerUi: "/docs",
        swaggerUiPrefix: ""
    },
    loglevel: "info",
    strict: false,
    validator: true
};

const specDir = path.join(__dirname, "api/openapi.yaml");
const spec = fs.readFileSync(specDir, "utf8");
const swaggerDoc: any = jsyaml.safeLoad(spec);

if (process.env.SWAGGER_HOST) {
    swaggerDoc.host = process.env.SWAGGER_HOST;
}

if (process.env.SWAGGER_URL) {
    LoggerUtility.info("Found environment URL", process.env.SWAGGER_URL);
    const servers: Array<{ url: string}> = swaggerDoc.servers;
    servers.unshift({ url: process.env.SWAGGER_URL });
}

// Allow cross origin
// require("./utils/cors-util")(app);

// Enable JWT tokens
// require("./utils/jwt-util").addJWT(app, SWAGGER_BASE_PATH);

let connectionFunction;
if (fs.existsSync("./ormconfig.json")) {
    LoggerUtility.info("Found ormconfig.json file in root folder.");
    // connectionFunction = createConnection();
} else {
    const confDir = path.join(__dirname, "../src/assets/ormconfig.json");
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
        // connectionFunction = createConnections(dbConf);
    } else {
        connectionFunction = new Promise((resolve, reject) => {
            resolve(true);
        });
    }
}

app.use(bodyParser.json({ limit: '14MB' }));
app.use(cors());
app.use(express.json());
app.use(helmet.xssFilter());
app.use(helmet.frameguard());
app.get('/hello', (_req, res) => res.send(`Hello World. path: ${specDir}`));
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDoc));
app.use("/api-docs", (_req, res) => res.sendFile((path.join(__dirname, 'api', 'openapi.yaml'))));

connectionFunction
    .then(async () => {
        swaggerTools.configure(options);
        swaggerTools.initialize(swaggerDoc, app, () => {
            LoggerUtility.debug("Swagger OAS middleware initialized.");
        });
    })
    .catch((error) => {
        LoggerUtility.error("TYPEORM: Error connecting with DB.");
        LoggerUtility.error(error);
        process.exit(1);
    });

export default app;
