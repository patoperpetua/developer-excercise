import { SwaggerRequestParameters } from "swagger-tools";
import { CustomResponse } from "./customsHandlers";
import { VALID_RESPONSES } from "./ValidResponses";
import Controller from "@controllers/Controller";
import { LoggerUtility } from "./LoggerUtility";

export class Utilities {

    public static checkVariableNotNull(parameters: SwaggerRequestParameters, res?: CustomResponse, name?: string): any {
        let error: boolean = true;
        let value = null;
        if (name) {
            if (parameters[name]) {
                value = parameters[name].value;
                error = false;
                LoggerUtility.debug(name,"=",value);
            }
        } else {
            value = parameters;
            error = false;
        }
        if (res && error) {
            this.sendError(res, name);
        }
        return value;
    }

    private static sendError(res: CustomResponse, text?: string) {
        Controller.sendError(res, VALID_RESPONSES.ERROR.PARAMS.MISSING + " " + text);
    }
}

