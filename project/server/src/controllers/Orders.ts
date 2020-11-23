/**
 * The OrdersController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic reoutes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

"use strict";
import { CustomRequest, CustomResponse } from "../utils/CustomsHandlers";
import Controller from './Controller';
import { OrdersService as service } from '../services';

const addOrder = async (request: CustomRequest, response: CustomResponse) => {
  await Controller.handleRequest(request, response, service.addOrder);
};

const addProductOrder = async (request: CustomRequest, response: CustomResponse) => {
  await Controller.handleRequest(request, response, service.addProductOrder);
};

const deleteOrder = async (request: CustomRequest, response: CustomResponse) => {
  await Controller.handleRequest(request, response, service.deleteOrder);
};

const editOrder = async (request: CustomRequest, response: CustomResponse) => {
  await Controller.handleRequest(request, response, service.editOrder);
};

const getOrderById = async (request: CustomRequest, response: CustomResponse) => {
  await Controller.handleRequest(request, response, service.getOrderById);
};

const getOrders = async (request: CustomRequest, response: CustomResponse) => {
  await Controller.handleRequest(request, response, service.getOrders);
};


module.exports = {
  addOrder,
  addProductOrder,
  deleteOrder,
  editOrder,
  getOrderById,
  getOrders,
};
