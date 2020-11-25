import { SwaggerRequestParameters } from "swagger-tools";
import { CustomResponse } from "./customsHandlers";
import { VALID_RESPONSES } from "./ValidResponses";
import Controller from "@controllers/Controller";
import { LoggerUtility } from "./LoggerUtility";
import { Deleted, Metadata } from "@models/index";
import { ParametersComplete } from "@models/index";

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

    public static getMetadataFormat(
        items: Array<any>, total: number, params: ParametersComplete) {
        let metadata: Metadata = null;
        if (params.metadata === true) {
            metadata = {
                first: 0
                , last: total
                , next: (total === items.length || total === params.skip + params.limit) ? 0 : params.skip + params.limit
                , prev: params.skip - params.limit
                , self: params.skip
            };
            if (metadata.prev < 0) {
                metadata.prev = 0;
            }
            if (metadata.next > metadata.last) {
                metadata.next = -1;
            }
        }
        return { metadata, items };
    }
    
    public static checkDeleted(parameters: SwaggerRequestParameters, res?: CustomResponse): Deleted | null {
        return this.checkVariableNotNull(parameters, res, "deleted");
    }

    public static checkId(parameters: SwaggerRequestParameters, res?: CustomResponse): number | null {
        return this.checkVariableNotNull(parameters, res, "id");
    }

    public static checkAllParametersGet(parameters: SwaggerRequestParameters, res?: CustomResponse): ParametersComplete | null {
        const error = false;
        const response: ParametersComplete = {
            deleted: this.checkDeleted(parameters),
            filterBy: this.checkVariableNotNull(parameters, undefined, "filterBy"),
            id: this.checkId(parameters),
            limit: this.checkVariableNotNull(parameters, undefined, "limit"),
            metadata: this.checkVariableNotNull(parameters, undefined, "metadata"),
            sort: this.checkVariableNotNull(parameters, undefined, "orderBy"),
            skip: this.checkVariableNotNull(parameters, undefined, "skip")
        };
        if (!response.skip || response.skip < 0) {
            response.skip = 0;
        }
        if (!response.limit || response.limit < 0) {
            response.limit = 10;
        }
        // TODO: check if any variable is null.
        if (res && error) {
            this.sendError(res);
        }
        return response;
    }
    private static sendError(res: CustomResponse, text?: string) {
        Controller.sendError(res, VALID_RESPONSES.ERROR.PARAMS.MISSING + " " + text);
    }
}

