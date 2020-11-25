# DiscountsApi

All URIs are relative to *http://localhost:8000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addDiscount**](DiscountsApi.md#addDiscount) | **POST** /discounts | Add one discount.
[**deleteDiscount**](DiscountsApi.md#deleteDiscount) | **DELETE** /discounts/{id} | Delete one discount.
[**editDiscount**](DiscountsApi.md#editDiscount) | **PUT** /discounts/{id} | Edit one discount.
[**getDiscountById**](DiscountsApi.md#getDiscountById) | **GET** /discounts/{id} | Get one discount.
[**getDiscounts**](DiscountsApi.md#getDiscounts) | **GET** /discounts | Get all discounts.


<a name="addDiscount"></a>
# **addDiscount**
> Discounts addDiscount(discounts)

Add one discount.

Add one discount.

### Example
```java
// Import classes:
import au.com.singletonsd.kinesis.api.serial.api.ApiClient;
import au.com.singletonsd.kinesis.api.serial.api.ApiException;
import au.com.singletonsd.kinesis.api.serial.api.Configuration;
import au.com.singletonsd.kinesis.api.serial.api.auth.*;
import au.com.singletonsd.kinesis.api.serial.api.models.*;
import au.com.singletonsd.kinesis.api.serial.api.DiscountsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost:8000");
    
    // Configure API key authorization: api_key
    ApiKeyAuth api_key = (ApiKeyAuth) defaultClient.getAuthentication("api_key");
    api_key.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //api_key.setApiKeyPrefix("Token");

    // Configure HTTP bearer authorization: bearer_auth
    HttpBearerAuth bearer_auth = (HttpBearerAuth) defaultClient.getAuthentication("bearer_auth");
    bearer_auth.setBearerToken("BEARER TOKEN");

    // Configure OAuth2 access token for authorization: main_auth
    OAuth main_auth = (OAuth) defaultClient.getAuthentication("main_auth");
    main_auth.setAccessToken("YOUR ACCESS TOKEN");

    DiscountsApi apiInstance = new DiscountsApi(defaultClient);
    Discounts discounts = new Discounts(); // Discounts | 
    try {
      Discounts result = apiInstance.addDiscount(discounts);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling DiscountsApi#addDiscount");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **discounts** | [**Discounts**](Discounts.md)|  |

### Return type

[**Discounts**](Discounts.md)

### Authorization

[api_key](../README.md#api_key), [bearer_auth](../README.md#bearer_auth), [main_auth](../README.md#main_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Request OK. |  -  |
**400** | Some parameters are missing or badly entered. |  -  |
**401** | Unauthorized |  -  |
**404** | Entity not found. |  -  |
**405** | Illegal input for operation. |  -  |

<a name="deleteDiscount"></a>
# **deleteDiscount**
> Long deleteDiscount(id)

Delete one discount.

Delete one discount.

### Example
```java
// Import classes:
import au.com.singletonsd.kinesis.api.serial.api.ApiClient;
import au.com.singletonsd.kinesis.api.serial.api.ApiException;
import au.com.singletonsd.kinesis.api.serial.api.Configuration;
import au.com.singletonsd.kinesis.api.serial.api.auth.*;
import au.com.singletonsd.kinesis.api.serial.api.models.*;
import au.com.singletonsd.kinesis.api.serial.api.DiscountsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost:8000");
    
    // Configure API key authorization: api_key
    ApiKeyAuth api_key = (ApiKeyAuth) defaultClient.getAuthentication("api_key");
    api_key.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //api_key.setApiKeyPrefix("Token");

    // Configure HTTP bearer authorization: bearer_auth
    HttpBearerAuth bearer_auth = (HttpBearerAuth) defaultClient.getAuthentication("bearer_auth");
    bearer_auth.setBearerToken("BEARER TOKEN");

    // Configure OAuth2 access token for authorization: main_auth
    OAuth main_auth = (OAuth) defaultClient.getAuthentication("main_auth");
    main_auth.setAccessToken("YOUR ACCESS TOKEN");

    DiscountsApi apiInstance = new DiscountsApi(defaultClient);
    Long id = 56L; // Long | id to delete or search
    try {
      Long result = apiInstance.deleteDiscount(id);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling DiscountsApi#deleteDiscount");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Long**| id to delete or search |

### Return type

**Long**

### Authorization

[api_key](../README.md#api_key), [bearer_auth](../README.md#bearer_auth), [main_auth](../README.md#main_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Request OK. |  -  |
**400** | Some parameters are missing or badly entered. |  -  |
**401** | Unauthorized |  -  |
**404** | Entity not found. |  -  |
**405** | Illegal input for operation. |  -  |

<a name="editDiscount"></a>
# **editDiscount**
> Discounts editDiscount(id, discounts)

Edit one discount.

Edit one discount.

### Example
```java
// Import classes:
import au.com.singletonsd.kinesis.api.serial.api.ApiClient;
import au.com.singletonsd.kinesis.api.serial.api.ApiException;
import au.com.singletonsd.kinesis.api.serial.api.Configuration;
import au.com.singletonsd.kinesis.api.serial.api.auth.*;
import au.com.singletonsd.kinesis.api.serial.api.models.*;
import au.com.singletonsd.kinesis.api.serial.api.DiscountsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost:8000");
    
    // Configure API key authorization: api_key
    ApiKeyAuth api_key = (ApiKeyAuth) defaultClient.getAuthentication("api_key");
    api_key.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //api_key.setApiKeyPrefix("Token");

    // Configure HTTP bearer authorization: bearer_auth
    HttpBearerAuth bearer_auth = (HttpBearerAuth) defaultClient.getAuthentication("bearer_auth");
    bearer_auth.setBearerToken("BEARER TOKEN");

    // Configure OAuth2 access token for authorization: main_auth
    OAuth main_auth = (OAuth) defaultClient.getAuthentication("main_auth");
    main_auth.setAccessToken("YOUR ACCESS TOKEN");

    DiscountsApi apiInstance = new DiscountsApi(defaultClient);
    Long id = 56L; // Long | id to delete or search
    Discounts discounts = new Discounts(); // Discounts | 
    try {
      Discounts result = apiInstance.editDiscount(id, discounts);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling DiscountsApi#editDiscount");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Long**| id to delete or search |
 **discounts** | [**Discounts**](Discounts.md)|  |

### Return type

[**Discounts**](Discounts.md)

### Authorization

[api_key](../README.md#api_key), [bearer_auth](../README.md#bearer_auth), [main_auth](../README.md#main_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Request OK. |  -  |
**400** | Some parameters are missing or badly entered. |  -  |
**401** | Unauthorized |  -  |
**404** | Entity not found. |  -  |
**405** | Illegal input for operation. |  -  |

<a name="getDiscountById"></a>
# **getDiscountById**
> Discounts getDiscountById(id, deleted)

Get one discount.

Get one discount.

### Example
```java
// Import classes:
import au.com.singletonsd.kinesis.api.serial.api.ApiClient;
import au.com.singletonsd.kinesis.api.serial.api.ApiException;
import au.com.singletonsd.kinesis.api.serial.api.Configuration;
import au.com.singletonsd.kinesis.api.serial.api.auth.*;
import au.com.singletonsd.kinesis.api.serial.api.models.*;
import au.com.singletonsd.kinesis.api.serial.api.DiscountsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost:8000");
    
    // Configure API key authorization: api_key
    ApiKeyAuth api_key = (ApiKeyAuth) defaultClient.getAuthentication("api_key");
    api_key.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //api_key.setApiKeyPrefix("Token");

    // Configure HTTP bearer authorization: bearer_auth
    HttpBearerAuth bearer_auth = (HttpBearerAuth) defaultClient.getAuthentication("bearer_auth");
    bearer_auth.setBearerToken("BEARER TOKEN");

    // Configure OAuth2 access token for authorization: main_auth
    OAuth main_auth = (OAuth) defaultClient.getAuthentication("main_auth");
    main_auth.setAccessToken("YOUR ACCESS TOKEN");

    DiscountsApi apiInstance = new DiscountsApi(defaultClient);
    Long id = 56L; // Long | id to delete or search
    Deleted deleted = new Deleted(); // Deleted | Get all, deleted, not deleted data. Default not deleted.
    try {
      Discounts result = apiInstance.getDiscountById(id, deleted);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling DiscountsApi#getDiscountById");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Long**| id to delete or search |
 **deleted** | [**Deleted**](.md)| Get all, deleted, not deleted data. Default not deleted. | [optional] [default to ACTIVE] [enum: ACTIVE, DELETED, ALL]

### Return type

[**Discounts**](Discounts.md)

### Authorization

[api_key](../README.md#api_key), [bearer_auth](../README.md#bearer_auth), [main_auth](../README.md#main_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Request OK. |  -  |
**400** | Some parameters are missing or badly entered. |  -  |
**401** | Unauthorized |  -  |
**404** | Entity not found. |  -  |
**405** | Illegal input for operation. |  -  |

<a name="getDiscounts"></a>
# **getDiscounts**
> ResponseGetDiscount getDiscounts(skip, limit, sort, deleted, metadata)

Get all discounts.

Get all discounts.

### Example
```java
// Import classes:
import au.com.singletonsd.kinesis.api.serial.api.ApiClient;
import au.com.singletonsd.kinesis.api.serial.api.ApiException;
import au.com.singletonsd.kinesis.api.serial.api.Configuration;
import au.com.singletonsd.kinesis.api.serial.api.auth.*;
import au.com.singletonsd.kinesis.api.serial.api.models.*;
import au.com.singletonsd.kinesis.api.serial.api.DiscountsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost:8000");
    
    // Configure API key authorization: api_key
    ApiKeyAuth api_key = (ApiKeyAuth) defaultClient.getAuthentication("api_key");
    api_key.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //api_key.setApiKeyPrefix("Token");

    // Configure HTTP bearer authorization: bearer_auth
    HttpBearerAuth bearer_auth = (HttpBearerAuth) defaultClient.getAuthentication("bearer_auth");
    bearer_auth.setBearerToken("BEARER TOKEN");

    // Configure OAuth2 access token for authorization: main_auth
    OAuth main_auth = (OAuth) defaultClient.getAuthentication("main_auth");
    main_auth.setAccessToken("YOUR ACCESS TOKEN");

    DiscountsApi apiInstance = new DiscountsApi(defaultClient);
    Integer skip = 0; // Integer | number of item to skip
    Integer limit = 10; // Integer | max records to return
    String sort = "sort_example"; // String | sort by property.
    Deleted deleted = new Deleted(); // Deleted | Get all, deleted, not deleted data. Default not deleted.
    Boolean metadata = false; // Boolean | If metadata is needed (for pagination controls)
    try {
      ResponseGetDiscount result = apiInstance.getDiscounts(skip, limit, sort, deleted, metadata);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling DiscountsApi#getDiscounts");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **skip** | **Integer**| number of item to skip | [optional] [default to 0]
 **limit** | **Integer**| max records to return | [optional] [default to 10]
 **sort** | **String**| sort by property. | [optional]
 **deleted** | [**Deleted**](.md)| Get all, deleted, not deleted data. Default not deleted. | [optional] [default to ACTIVE] [enum: ACTIVE, DELETED, ALL]
 **metadata** | **Boolean**| If metadata is needed (for pagination controls) | [optional] [default to false]

### Return type

[**ResponseGetDiscount**](ResponseGetDiscount.md)

### Authorization

[api_key](../README.md#api_key), [bearer_auth](../README.md#bearer_auth), [main_auth](../README.md#main_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Request OK. |  * Limit -  <br>  * Remaining -  <br>  * Reset -  <br>  |
**204** | Response is empty. |  -  |
**400** | Some parameters are missing or badly entered. |  -  |
**401** | Unauthorized |  -  |
**404** | Entity not found. |  -  |
**405** | Illegal input for operation. |  -  |

