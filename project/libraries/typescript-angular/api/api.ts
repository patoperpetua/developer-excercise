export * from './discounts.service';
import { DiscountsService } from './discounts.service';
export * from './discounts.serviceInterface'
export * from './orders.service';
import { OrdersService } from './orders.service';
export * from './orders.serviceInterface'
export * from './products.service';
import { ProductsService } from './products.service';
export * from './products.serviceInterface'
export const APIS = [DiscountsService, OrdersService, ProductsService];
