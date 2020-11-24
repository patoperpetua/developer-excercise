# Discounts

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id_** | **Int!** | Discount&#39;s Id. | [default to null]
**name** | **String!** |  | [optional] [default to null]
**discountType** | [***DiscountType**](DiscountType.md) |  | [optional] [default to null]
**itemsXQuantity** | **Int!** | indicate the number of ‘X’ items that a customer will have to buy to get the discount. | [optional] [default to null]
**itemsYQuantity** | **Int!** | indicate the number of ‘Y’ items which will receive a discount. | [optional] [default to null]
**discount** | **Float!** | indicate the % of discount of &#39;Y&#39; items. this number goes from 0 to 100. | [optional] [default to null]
**maxDiscountToApply** | **Int!** | indicate the amount of discounts that can be applied in a single order. | [optional] [default to null]
**products** | [**Products**](Products.md) |  | [optional] [default to null]
**idProducts** | **Int!** |  | [optional] [default to null]
**deleted** | **Boolean!** |  | [optional] [default to false]
**createdAt** | **String!** | Object&#39;s created time. | [optional] [readonly] [default to null]
**modifiedAt** | **String!** | Object&#39;s modified time. | [optional] [readonly] [default to null]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


