# orders_api

All URIs are relative to *http://localhost:8000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**AddOrder**](orders_api.md#AddOrder) | **POST** /orders | Add one order.
[**AddProductOrder**](orders_api.md#AddProductOrder) | **POST** /orders/{id}/scan | Add one product to order.
[**DeleteOrder**](orders_api.md#DeleteOrder) | **DELETE** /orders/{id} | Delete one order.
[**EditOrder**](orders_api.md#EditOrder) | **PUT** /orders/{id} | Edit one order.
[**GetOrderById**](orders_api.md#GetOrderById) | **GET** /orders/{id} | Get one order.
[**GetOrders**](orders_api.md#GetOrders) | **GET** /orders | Get all orders.


<a name="AddOrder"></a>
# **AddOrder**
> Orders AddOrder(orders)

Add one order.

Add one order.
<a name="AddProductOrder"></a>
# **AddProductOrder**
> Orders AddProductOrder(Id_, products)

Add one product to order.

Add product to order.
<a name="DeleteOrder"></a>
# **DeleteOrder**
> Int! DeleteOrder(Id_)

Delete one order.

Delete one order.
<a name="EditOrder"></a>
# **EditOrder**
> Orders EditOrder(Id_, orders)

Edit one order.

Edit one order.
<a name="GetOrderById"></a>
# **GetOrderById**
> Orders GetOrderById(Id_, deleted)

Get one order.

Get one order.
<a name="GetOrders"></a>
# **GetOrders**
> ResponseGetOrder GetOrders(page, size, sort, deleted, metadata)

Get all orders.

Get all orders.
