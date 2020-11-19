

# Discounts

Discount's information.
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Long** | Discount&#39;s Id. | 
**name** | **String** |  |  [optional]
**discountType** | [**DiscountType**](DiscountType.md) |  |  [optional]
**itemsXQuantity** | **Long** | indicate the number of ‘X’ items that a customer will have to buy to get the discount. |  [optional]
**itemsYQuantity** | **Long** | indicate the number of ‘Y’ items which will receive a discount. |  [optional]
**discount** | **Float** | indicate the % of discount of &#39;Y&#39; items. this number goes from 0 to 100. |  [optional]
**maxDiscountToApply** | **Long** | indicate the amount of discounts that can be applied in a single order. |  [optional]
**products** | [**List&lt;Products&gt;**](Products.md) |  |  [optional]
**idProducts** | **List&lt;Long&gt;** |  |  [optional]
**deleted** | **Boolean** |  |  [optional]
**createdAt** | [**OffsetDateTime**](OffsetDateTime.md) | Object&#39;s created time. |  [optional] [readonly]
**modifiedAt** | [**OffsetDateTime**](OffsetDateTime.md) | Object&#39;s modified time. |  [optional] [readonly]


## Implemented Interfaces

* Serializable


