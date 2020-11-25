import { LoggerUtility } from '@utils/LoggerUtility';
import { ParametersComplete, Utilities } from '@utils/Utilities';

class Controller {
  static sendResponse(response, payload) {
    /**
     * The default response-code is 200. We want to allow to change that. in That case,
     * payload will be an object consisting of a code and a payload. If not customized
     * send 200 and the payload as received in this method.
     */
    response.writeHead(payload.code || 200, { "Content-Type": "application/json" });
    let responsePayload = payload.payload !== undefined ? payload.payload : payload;
    if (responsePayload instanceof Object) {
      responsePayload = JSON.stringify(responsePayload);
    }
    response.end(responsePayload);
  }

  static sendError(response, error) {
    response.writeHead(error.code || 500, { "Content-Type": "application/json" });
    if (typeof error.error === "object") {
      error = JSON.stringify(error.error);
    } else {
        error = JSON.stringify({ message: error });
    }
    response.end(error);
  }

  static async handleRequest(params, response, serviceOperation) {
    try {
      const serviceResponse = await serviceOperation(params);
      Controller.sendResponse(response, serviceResponse);
    } catch (error) {
      LoggerUtility.error("error",error);
      Controller.sendError(response, error);
    }
  }
}

export default Controller;
