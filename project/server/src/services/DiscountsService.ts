"use strict";
/* eslint-disable no-unused-vars */
import { Service } from './Service';

export class DiscountsService extends Service {

  /**
  * Add one discount.
  * Add one discount.
  *
  * discounts Discounts 
  * returns Discounts
  * */
  public static addDiscount = ({ discounts }) => new Promise(
    async (resolve, reject) => {
      try {
        resolve(Service.successResponse({
          discounts,
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
  * Delete one discount.
  * Delete one discount.
  *
  * id Long id to delete or search
  * returns Long
  * */
  public static deleteDiscount = ({ id }) => new Promise(
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
  * Edit one discount.
  * Edit one discount.
  *
  * id Long id to delete or search
  * discounts Discounts 
  * returns Discounts
  * */
  public static editDiscount = ({ id, discounts }) => new Promise(
    async (resolve, reject) => {
      try {
        resolve(Service.successResponse({
          id,
          discounts,
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
  * Get one discount.
  * Get one discount.
  *
  * id Long id to delete or search
  * deleted Deleted Get all, deleted, not deleted data. Default not deleted. (optional)
  * returns Discounts
  * */
  public static getDiscountById = ({ id, deleted }) => new Promise(
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
  * Get all discounts.
  * Get all discounts.
  *
  * page Integer number of page (optional)
  * size Integer size of page (optional)
  * sort String sort by property. (optional)
  * deleted Deleted Get all, deleted, not deleted data. Default not deleted. (optional)
  * metadata Boolean If metadata is needed (for pagination controls) (optional)
  * returns ResponseGetDiscount
  * */
  public static getDiscounts = ({ page, size, sort, deleted, metadata }) => new Promise(
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
