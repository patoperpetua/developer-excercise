# OrdersApi

All URIs are relative to *http://localhost:8000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addOrder**](OrdersApi.md#addOrder) | **POST** /orders | Add one order.
[**addProductOrder**](OrdersApi.md#addProductOrder) | **POST** /orders/{id}/scan | Add one product to order.
[**deleteOrder**](OrdersApi.md#deleteOrder) | **DELETE** /orders/{id} | Delete one order.
[**editOrder**](OrdersApi.md#editOrder) | **PUT** /orders/{id} | Edit one order.
[**getOrderById**](OrdersApi.md#getOrderById) | **GET** /orders/{id} | Get one order.
[**getOrders**](OrdersApi.md#getOrders) | **GET** /orders | Get all orders.


<a name="addOrder"></a>
# **addOrder**
> Orders addOrder(orders)

Add one order.

Add one order.

### Example
```java
// Import classes:
import au.com.singletonsd.kinesis.api.serial.api.ApiClient;
import au.com.singletonsd.kinesis.api.serial.api.ApiException;
import au.com.singletonsd.kinesis.api.serial.api.Configuration;
import au.com.singletonsd.kinesis.api.serial.api.auth.*;
import au.com.singletonsd.kinesis.api.serial.api.models.*;
import au.com.singletonsd.kinesis.api.serial.api.OrdersApi;

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

    OrdersApi apiInstance = new OrdersApi(defaultClient);
    Orders orders = new Orders(); // Orders | 
    try {
      Orders result = apiInstance.addOrder(orders);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling OrdersApi#addOrder");
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
 **orders** | [**Orders**](Orders.md)|  |

### Return type

[**Orders**](Orders.md)

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

<a name="addProductOrder"></a>
# **addProductOrder**
> Orders addProductOrder(id, products)

Add one product to order.

Add product to order.

### Example
```java
// Import classes:
import au.com.singletonsd.kinesis.api.serial.api.ApiClient;
import au.com.singletonsd.kinesis.api.serial.api.ApiException;
import au.com.singletonsd.kinesis.api.serial.api.Configuration;
import au.com.singletonsd.kinesis.api.serial.api.auth.*;
import au.com.singletonsd.kinesis.api.serial.api.models.*;
import au.com.singletonsd.kinesis.api.serial.api.OrdersApi;

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

    OrdersApi apiInstance = new OrdersApi(defaultClient);
    Long id = 56L; // Long | id to delete or search
    Products products = new Products(); // Products | 
    try {
      Orders result = apiInstance.addProductOrder(id, products);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling OrdersApi#addProductOrder");
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
 **products** | [**Products**](Products.md)|  |

### Return type

[**Orders**](Orders.md)

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

<a name="deleteOrder"></a>
# **deleteOrder**
> Long deleteOrder(id)

Delete one order.

Delete one order.

### Example
```java
// Import classes:
import au.com.singletonsd.kinesis.api.serial.api.ApiClient;
import au.com.singletonsd.kinesis.api.serial.api.ApiException;
import au.com.singletonsd.kinesis.api.serial.api.Configuration;
import au.com.singletonsd.kinesis.api.serial.api.auth.*;
import au.com.singletonsd.kinesis.api.serial.api.models.*;
import au.com.singletonsd.kinesis.api.serial.api.OrdersApi;

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

    OrdersApi apiInstance = new OrdersApi(defaultClient);
    Long id = 56L; // Long | id to delete or search
    try {
      Long result = apiInstance.deleteOrder(id);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling OrdersApi#deleteOrder");
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

<a name="editOrder"></a>
# **editOrder**
> Orders editOrder(id, orders)

Edit one order.

Edit one order.

### Example
```java
// Import classes:
import au.com.singletonsd.kinesis.api.serial.api.ApiClient;
import au.com.singletonsd.kinesis.api.serial.api.ApiException;
import au.com.singletonsd.kinesis.api.serial.api.Configuration;
import au.com.singletonsd.kinesis.api.serial.api.auth.*;
import au.com.singletonsd.kinesis.api.serial.api.models.*;
import au.com.singletonsd.kinesis.api.serial.api.OrdersApi;

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

    OrdersApi apiInstance = new OrdersApi(defaultClient);
    Long id = 56L; // Long | id to delete or search
    Orders orders = new Orders(); // Orders | 
    try {
      Orders result = apiInstance.editOrder(id, orders);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling OrdersApi#editOrder");
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
 **orders** | [**Orders**](Orders.md)|  |

### Return type

[**Orders**](Orders.md)

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

<a name="getOrderById"></a>
# **getOrderById**
> Orders getOrderById(id, deleted)

Get one order.

Get one order.

### Example
```java
// Import classes:
import au.com.singletonsd.kinesis.api.serial.api.ApiClient;
import au.com.singletonsd.kinesis.api.serial.api.ApiException;
import au.com.singletonsd.kinesis.api.serial.api.Configuration;
import au.com.singletonsd.kinesis.api.serial.api.auth.*;
import au.com.singletonsd.kinesis.api.serial.api.models.*;
import au.com.singletonsd.kinesis.api.serial.api.OrdersApi;

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

    OrdersApi apiInstance = new OrdersApi(defaultClient);
    Long id = 56L; // Long | id to delete or search
    Deleted deleted = new Deleted(); // Deleted | Get all, deleted, not deleted data. Default not deleted.
    try {
      Orders result = apiInstance.getOrderById(id, deleted);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling OrdersApi#getOrderById");
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

[**Orders**](Orders.md)

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

<a name="getOrders"></a>
# **getOrders**
> ResponseGetOrder getOrders(page, size, sort, deleted, metadata)

Get all orders.

Get all orders.

### Example
```java
// Import classes:
import au.com.singletonsd.kinesis.api.serial.api.ApiClient;
import au.com.singletonsd.kinesis.api.serial.api.ApiException;
import au.com.singletonsd.kinesis.api.serial.api.Configuration;
import au.com.singletonsd.kinesis.api.serial.api.auth.*;
import au.com.singletonsd.kinesis.api.serial.api.models.*;
import au.com.singletonsd.kinesis.api.serial.api.OrdersApi;

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

    OrdersApi apiInstance = new OrdersApi(defaultClient);
    Integer page = 0; // Integer | number of page
    Integer size = 10; // Integer | size of page
    String sort = "sort_example"; // String | sort by property.
    Deleted deleted = new Deleted(); // Deleted | Get all, deleted, not deleted data. Default not deleted.
    Boolean metadata = false; // Boolean | If metadata is needed (for pagination controls)
    try {
      ResponseGetOrder result = apiInstance.getOrders(page, size, sort, deleted, metadata);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling OrdersApi#getOrders");
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
 **page** | **Integer**| number of page | [optional] [default to 0]
 **size** | **Integer**| size of page | [optional] [default to 10]
 **sort** | **String**| sort by property. | [optional]
 **deleted** | [**Deleted**](.md)| Get all, deleted, not deleted data. Default not deleted. | [optional] [default to ACTIVE] [enum: ACTIVE, DELETED, ALL]
 **metadata** | **Boolean**| If metadata is needed (for pagination controls) | [optional] [default to false]

### Return type

[**ResponseGetOrder**](ResponseGetOrder.md)

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

