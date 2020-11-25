"use strict";
import { Products } from '@databases/index';
import { ProductsRepository } from '@databases/repositories/ProductsRepository';
import { LoggerUtility } from '@utils/LoggerUtility';
import { getCustomRepository } from 'typeorm';
/* eslint-disable no-unused-vars */
import { Service } from './Service';

export class ProductsService extends Service {

  public static repository = getCustomRepository(ProductsRepository);

  /**
  * Add one product.
  * Add one product.
  *
  * products Products 
  * returns Products
  * */
  public static addProduct = (product: Products) => new Promise(
    async (resolve, reject) => {
      const received = new Products(product);
      LoggerUtility.debug("received", received);
      LoggerUtility.info("received", received.name);
      try {
        if(received.price <= 0)
          return reject(Service.rejectResponse({message: `Price ${received.price} can't be 0 or less`, data: received}, 400));
        const previous = await ProductsService.repository.findByName(received.name);
        if(previous)
          return reject(Service.rejectResponse({message: `Name ${received.name} already exists`, data: received}, 400));
        received.id = null;
        const saved = await ProductsService.repository.save(received.sanitize());
        LoggerUtility.debug("saved", saved);
        LoggerUtility.info("saved", saved.id);
        resolve(Service.successResponse(await ProductsService.repository.findOne(saved.id)));
      } catch (e) {
        reject(Service.rejectResponse(e.message || 'Invalid input', e.status || 405));
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
