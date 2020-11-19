

# Orders

Order's information.
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Long** | Order&#39;s Id. | 
**name** | **String** |  |  [optional]
**totalPrice** | **Float** | Object&#39;s price. |  [optional]
**products** | [**List&lt;Products&gt;**](Products.md) |  |  [optional]
**idProducts** | **List&lt;Long&gt;** |  |  [optional]
**discounts** | [**List&lt;Discounts&gt;**](Discounts.md) |  |  [optional]
**idDiscounts** | **List&lt;Long&gt;** |  |  [optional]
**deleted** | **Boolean** |  |  [optional]
**createdAt** | [**OffsetDateTime**](OffsetDateTime.md) | Object&#39;s created time. |  [optional] [readonly]
**modifiedAt** | [**OffsetDateTime**](OffsetDateTime.md) | Object&#39;s modified time. |  [optional] [readonly]


## Implemented Interfaces

* Serializable


