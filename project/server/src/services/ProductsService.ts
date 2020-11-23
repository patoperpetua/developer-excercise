"use strict";
/* eslint-disable no-unused-vars */
import { Service } from './Service';

export class ProductsService extends Service {
  /**
  * Add one product.
  * Add one product.
  *
  * products Products 
  * returns Products
  * */
  public static addProduct = ({ products }) => new Promise(
    async (resolve, reject) => {
      try {
        resolve(Service.successResponse({
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
  * Add a list of products.
  * Add a list of products.
  *
  * requestBulkProduct RequestBulkProduct 
  * returns List
  * */
  public static addProducts = ({ requestBulkProduct }) => new Promise(
    async (resolve, reject) => {
      try {
        resolve(Service.successResponse({
          requestBulkProduct,
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
  * Delete one product.
  * Delete one product.
  *
  * id Long id to delete or search
  * returns Long
  * */
  public static deleteProduct = ({ id }) => new Promise(
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
  * Edit one product.
  * Edit one product.
  *
  * id Long id to delete or search
  * products Products 
  * returns Products
  * */
  public static editProduct = ({ id, products }) => new Promise(
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
  * Get one product.
  * Get one product.
  *
  * id Long id to delete or search
  * deleted Deleted Get all, deleted, not deleted data. Default not deleted. (optional)
  * returns Products
  * */
  public static getProductById = ({ id, deleted }) => new Promise(
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
  * Get all products.
  * Get all products.
  *
  * page Integer number of page (optional)
  * size Integer size of page (optional)
  * sort String sort by property. (optional)
  * deleted Deleted Get all, deleted, not deleted data. Default not deleted. (optional)
  * metadata Boolean If metadata is needed (for pagination controls) (optional)
  * returns ResponseGetProduct
  * */
  public static getProducts = ({ page, size, sort, deleted, metadata }) => new Promise(
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
}
