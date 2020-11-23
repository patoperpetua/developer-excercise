/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* Add one order.
* Add one order.
*
* orders Orders 
* returns Orders
* */
const addOrder = ({ orders }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        orders,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Add one product to order.
* Add product to order.
*
* id Long id to delete or search
* products Products 
* returns Orders
* */
const addProductOrder = ({ id, products }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        id,
        products,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Delete one order.
* Delete one order.
*
* id Long id to delete or search
* returns Long
* */
const deleteOrder = ({ id }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        id,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Edit one order.
* Edit one order.
*
* id Long id to delete or search
* orders Orders 
* returns Orders
* */
const editOrder = ({ id, orders }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        id,
        orders,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Get one order.
* Get one order.
*
* id Long id to delete or search
* deleted Deleted Get all, deleted, not deleted data. Default not deleted. (optional)
* returns Orders
* */
const getOrderById = ({ id, deleted }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        id,
        deleted,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Get all orders.
* Get all orders.
*
* page Integer number of page (optional)
* size Integer size of page (optional)
* sort String sort by property. (optional)
* deleted Deleted Get all, deleted, not deleted data. Default not deleted. (optional)
* metadata Boolean If metadata is needed (for pagination controls) (optional)
* returns ResponseGetOrder
* */
const getOrders = ({ page, size, sort, deleted, metadata }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        page,
        size,
        sort,
        deleted,
        metadata,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);

module.exports = {
  addOrder,
  addProductOrder,
  deleteOrder,
  editOrder,
  getOrderById,
  getOrders,
};
