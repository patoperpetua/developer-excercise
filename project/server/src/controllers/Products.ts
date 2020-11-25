/**
 * The ProductsController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic reoutes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

"use strict";
import { CustomRequest, CustomResponse } from "../utils/CustomsHandlers";
import Controller from './Controller';
import { ProductsService as service } from '../services';
import { Utilities } from "@utils/Utilities";
import { Products } from "@databases/index";

const addProduct = async (request: CustomRequest, response: CustomResponse) => {
  let params: Products = Utilities.checkVariableNotNull(request.swagger.params.undefined.originalValue, response);
  await Controller.handleRequest(params, response, service.addProduct);
};

const addProducts = async (request: CustomRequest, response: CustomResponse) => {
  await Controller.handleRequest(request, response, service.addProducts);
};

const deleteProduct = async (request: CustomRequest, response: CustomResponse) => {
  await Controller.handleRequest(request, response, service.deleteProduct);
};

const editProduct = async (request: CustomRequest, response: CustomResponse) => {
  await Controller.handleRequest(request, response, service.editProduct);
};

const getProductById = async (request: CustomRequest, response: CustomResponse) => {
  await Controller.handleRequest(request, response, service.getProductById);
};

const getProducts = async (request: CustomRequest, response: CustomResponse) => {
  await Controller.handleRequest(request, response, service.getProducts);
};


module.exports = {
  addProduct,
  addProducts,
  deleteProduct,
  editProduct,
  getProductById,
  getProducts,
};
