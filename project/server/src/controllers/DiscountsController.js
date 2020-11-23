/**
 * The DiscountsController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic reoutes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/DiscountsService');
const addDiscount = async (request, response) => {
  await Controller.handleRequest(request, response, service.addDiscount);
};

const deleteDiscount = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteDiscount);
};

const editDiscount = async (request, response) => {
  await Controller.handleRequest(request, response, service.editDiscount);
};

const getDiscountById = async (request, response) => {
  await Controller.handleRequest(request, response, service.getDiscountById);
};

const getDiscounts = async (request, response) => {
  await Controller.handleRequest(request, response, service.getDiscounts);
};


module.exports = {
  addDiscount,
  deleteDiscount,
  editDiscount,
  getDiscountById,
  getDiscounts,
};
