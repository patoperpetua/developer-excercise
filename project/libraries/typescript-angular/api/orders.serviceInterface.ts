/**
 * Kinesis Code Exercise API
 * This is an API to interact with Kineses Code Exercise API # Introduction This API allow to create, modify and delete products, discounts, and orders. # User Authentication This API does not contain any kind of user validation but It request to have a valid authentication user to interact with it. For more information about user Authentication, please refer to [Kinesis Authentication API](https://auth.kinesis.singleton.com.au/). 
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: patoperpetua@singletonsd.com.au
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { HttpHeaders }                                       from '@angular/common/http';

import { Observable }                                        from 'rxjs';

import { CustomError } from '../model/models';
import { Deleted } from '../model/models';
import { Orders } from '../model/models';
import { Products } from '../model/models';
import { ResponseGetOrder } from '../model/models';


import { Configuration }                                     from '../configuration';



export interface OrdersServiceInterface {
    defaultHeaders: HttpHeaders;
    configuration: Configuration;
    

    /**
     * Add one order.
     * Add one order.
     * @param orders 
     */
    addOrder(orders: Orders, extraHttpRequestParams?: any): Observable<Orders>;

    /**
     * Add one product to order.
     * Add product to order.
     * @param id id to delete or search
     * @param products 
     */
    addProductOrder(id: number, products: Products, extraHttpRequestParams?: any): Observable<Orders>;

    /**
     * Delete one order.
     * Delete one order.
     * @param id id to delete or search
     */
    deleteOrder(id: number, extraHttpRequestParams?: any): Observable<number>;

    /**
     * Edit one order.
     * Edit one order.
     * @param id id to delete or search
     * @param orders 
     */
    editOrder(id: number, orders: Orders, extraHttpRequestParams?: any): Observable<Orders>;

    /**
     * Get one order.
     * Get one order.
     * @param id id to delete or search
     * @param deleted Get all, deleted, not deleted data. Default not deleted.
     */
    getOrderById(id: number, deleted?: Deleted, extraHttpRequestParams?: any): Observable<Orders>;

    /**
     * Get all orders.
     * Get all orders.
     * @param page number of page
     * @param size size of page
     * @param sort sort by property.
     * @param deleted Get all, deleted, not deleted data. Default not deleted.
     * @param metadata If metadata is needed (for pagination controls)
     */
    getOrders(page?: number, size?: number, sort?: string, deleted?: Deleted, metadata?: boolean, extraHttpRequestParams?: any): Observable<ResponseGetOrder>;

}
