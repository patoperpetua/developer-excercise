"use strict";
import * as core from "express-serve-static-core";
import * as dotenv from "dotenv";
import * as fs from "fs";
import * as path from "path";
import jsyaml from "js-yaml";
import swaggerTools from "oas-tools";
import swaggerUi from "swagger-ui-express";
import { LoggerUtility } from "./LoggerUtility";

export class OpenAPIUtil {

    private specDir = path.join(__dirname, "../api/openapi.yaml");
    private spec = fs.readFileSync(this.specDir, "utf8");
    private swaggerDoc: any = jsyaml.safeLoad(this.spec);

    private options = {
        controllers: path.join(__dirname, "../controllers"),
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

    constructor(){
        dotenv.config();
        if (process.env.SWAGGER_HOST) {
            this.swaggerDoc.host = process.env.SWAGGER_HOST;
        }
        if (process.env.SWAGGER_URL) {
            LoggerUtility.info("Found environment URL", process.env.SWAGGER_URL);
            const servers: Array<{ url: string}> = this.swaggerDoc.servers;
            servers.unshift({ url: process.env.SWAGGER_URL });
        }
    }
    
    public configure(app:core.Express): void{
        app.get('/hello', (_req, res) => res.send(`Hello World. path: ${this.specDir}`));
        app.use("/docs", swaggerUi.serve, swaggerUi.setup(this.swaggerDoc));
        app.use("/api-docs", (_req, res) => res.sendFile((path.join(__dirname, 'api', 'openapi.yaml'))));

        swaggerTools.configure(this.options);
        swaggerTools.initialize(this.swaggerDoc, app, () => {
            LoggerUtility.debug("Swagger OAS middleware initialized.");
        });
    }
}