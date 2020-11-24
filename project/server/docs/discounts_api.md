# discounts_api

All URIs are relative to *http://localhost:8000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**AddDiscount**](discounts_api.md#AddDiscount) | **POST** /discounts | Add one discount.
[**DeleteDiscount**](discounts_api.md#DeleteDiscount) | **DELETE** /discounts/{id} | Delete one discount.
[**EditDiscount**](discounts_api.md#EditDiscount) | **PUT** /discounts/{id} | Edit one discount.
[**GetDiscountById**](discounts_api.md#GetDiscountById) | **GET** /discounts/{id} | Get one discount.
[**GetDiscounts**](discounts_api.md#GetDiscounts) | **GET** /discounts | Get all discounts.


<a name="AddDiscount"></a>
# **AddDiscount**
> Discounts AddDiscount(discounts)

Add one discount.

Add one discount.
<a name="DeleteDiscount"></a>
# **DeleteDiscount**
> Int! DeleteDiscount(Id_)

Delete one discount.

Delete one discount.
<a name="EditDiscount"></a>
# **EditDiscount**
> Discounts EditDiscount(Id_, discounts)

Edit one discount.

Edit one discount.
<a name="GetDiscountById"></a>
# **GetDiscountById**
> Discounts GetDiscountById(Id_, deleted)

Get one discount.

Get one discount.
<a name="GetDiscounts"></a>
# **GetDiscounts**
> ResponseGetDiscount GetDiscounts(page, size, sort, deleted, metadata)

Get all discounts.

Get all discounts.
