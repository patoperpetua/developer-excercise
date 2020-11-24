# products_api

All URIs are relative to *http://localhost:8000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**AddProduct**](products_api.md#AddProduct) | **POST** /products | Add one product.
[**AddProducts**](products_api.md#AddProducts) | **POST** /products/bulk | Add a list of products.
[**DeleteProduct**](products_api.md#DeleteProduct) | **DELETE** /products/{id} | Delete one product.
[**EditProduct**](products_api.md#EditProduct) | **PUT** /products/{id} | Edit one product.
[**GetProductById**](products_api.md#GetProductById) | **GET** /products/{id} | Get one product.
[**GetProducts**](products_api.md#GetProducts) | **GET** /products | Get all products.


<a name="AddProduct"></a>
# **AddProduct**
> Products AddProduct(products)

Add one product.

Add one product.
<a name="AddProducts"></a>
# **AddProducts**
> Products AddProducts(requestBulkProduct)

Add a list of products.

Add a list of products.
<a name="DeleteProduct"></a>
# **DeleteProduct**
> Int! DeleteProduct(Id_)

Delete one product.

Delete one product.
<a name="EditProduct"></a>
# **EditProduct**
> Products EditProduct(Id_, products)

Edit one product.

Edit one product.
<a name="GetProductById"></a>
# **GetProductById**
> Products GetProductById(Id_, deleted)

Get one product.

Get one product.
<a name="GetProducts"></a>
# **GetProducts**
> ResponseGetProduct GetProducts(page, size, sort, deleted, metadata)

Get all products.

Get all products.
