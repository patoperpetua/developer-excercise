# ProductsApi

All URIs are relative to *http://localhost:8000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addProduct**](ProductsApi.md#addProduct) | **POST** /products | Add one product.
[**addProducts**](ProductsApi.md#addProducts) | **POST** /products/bulk | Add a list of products.
[**deleteProduct**](ProductsApi.md#deleteProduct) | **DELETE** /products/{id} | Delete one product.
[**editProduct**](ProductsApi.md#editProduct) | **PUT** /products/{id} | Edit one product.
[**getProductById**](ProductsApi.md#getProductById) | **GET** /products/{id} | Get one product.
[**getProducts**](ProductsApi.md#getProducts) | **GET** /products | Get all products.


<a name="addProduct"></a>
# **addProduct**
> Products addProduct(products)

Add one product.

Add one product.

### Example
```java
// Import classes:
import au.com.singletonsd.kinesis.api.serial.api.ApiClient;
import au.com.singletonsd.kinesis.api.serial.api.ApiException;
import au.com.singletonsd.kinesis.api.serial.api.Configuration;
import au.com.singletonsd.kinesis.api.serial.api.auth.*;
import au.com.singletonsd.kinesis.api.serial.api.models.*;
import au.com.singletonsd.kinesis.api.serial.api.ProductsApi;

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

    ProductsApi apiInstance = new ProductsApi(defaultClient);
    Products products = new Products(); // Products | 
    try {
      Products result = apiInstance.addProduct(products);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ProductsApi#addProduct");
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
 **products** | [**Products**](Products.md)|  |

### Return type

[**Products**](Products.md)

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

<a name="addProducts"></a>
# **addProducts**
> List&lt;Products&gt; addProducts(requestBulkProduct)

Add a list of products.

Add a list of products.

### Example
```java
// Import classes:
import au.com.singletonsd.kinesis.api.serial.api.ApiClient;
import au.com.singletonsd.kinesis.api.serial.api.ApiException;
import au.com.singletonsd.kinesis.api.serial.api.Configuration;
import au.com.singletonsd.kinesis.api.serial.api.auth.*;
import au.com.singletonsd.kinesis.api.serial.api.models.*;
import au.com.singletonsd.kinesis.api.serial.api.ProductsApi;

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

    ProductsApi apiInstance = new ProductsApi(defaultClient);
    RequestBulkProduct requestBulkProduct = new RequestBulkProduct(); // RequestBulkProduct | 
    try {
      List<Products> result = apiInstance.addProducts(requestBulkProduct);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ProductsApi#addProducts");
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
 **requestBulkProduct** | [**RequestBulkProduct**](RequestBulkProduct.md)|  |

### Return type

[**List&lt;Products&gt;**](Products.md)

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

<a name="deleteProduct"></a>
# **deleteProduct**
> Long deleteProduct(id)

Delete one product.

Delete one product.

### Example
```java
// Import classes:
import au.com.singletonsd.kinesis.api.serial.api.ApiClient;
import au.com.singletonsd.kinesis.api.serial.api.ApiException;
import au.com.singletonsd.kinesis.api.serial.api.Configuration;
import au.com.singletonsd.kinesis.api.serial.api.auth.*;
import au.com.singletonsd.kinesis.api.serial.api.models.*;
import au.com.singletonsd.kinesis.api.serial.api.ProductsApi;

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

    ProductsApi apiInstance = new ProductsApi(defaultClient);
    Long id = 56L; // Long | id to delete or search
    try {
      Long result = apiInstance.deleteProduct(id);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ProductsApi#deleteProduct");
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

<a name="editProduct"></a>
# **editProduct**
> Products editProduct(id, products)

Edit one product.

Edit one product.

### Example
```java
// Import classes:
import au.com.singletonsd.kinesis.api.serial.api.ApiClient;
import au.com.singletonsd.kinesis.api.serial.api.ApiException;
import au.com.singletonsd.kinesis.api.serial.api.Configuration;
import au.com.singletonsd.kinesis.api.serial.api.auth.*;
import au.com.singletonsd.kinesis.api.serial.api.models.*;
import au.com.singletonsd.kinesis.api.serial.api.ProductsApi;

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

    ProductsApi apiInstance = new ProductsApi(defaultClient);
    Long id = 56L; // Long | id to delete or search
    Products products = new Products(); // Products | 
    try {
      Products result = apiInstance.editProduct(id, products);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ProductsApi#editProduct");
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

[**Products**](Products.md)

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

<a name="getProductById"></a>
# **getProductById**
> Products getProductById(id, deleted)

Get one product.

Get one product.

### Example
```java
// Import classes:
import au.com.singletonsd.kinesis.api.serial.api.ApiClient;
import au.com.singletonsd.kinesis.api.serial.api.ApiException;
import au.com.singletonsd.kinesis.api.serial.api.Configuration;
import au.com.singletonsd.kinesis.api.serial.api.auth.*;
import au.com.singletonsd.kinesis.api.serial.api.models.*;
import au.com.singletonsd.kinesis.api.serial.api.ProductsApi;

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

    ProductsApi apiInstance = new ProductsApi(defaultClient);
    Long id = 56L; // Long | id to delete or search
    Deleted deleted = new Deleted(); // Deleted | Get all, deleted, not deleted data. Default not deleted.
    try {
      Products result = apiInstance.getProductById(id, deleted);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ProductsApi#getProductById");
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

[**Products**](Products.md)

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

<a name="getProducts"></a>
# **getProducts**
> ResponseGetProduct getProducts(page, size, sort, deleted, metadata)

Get all products.

Get all products.

### Example
```java
// Import classes:
import au.com.singletonsd.kinesis.api.serial.api.ApiClient;
import au.com.singletonsd.kinesis.api.serial.api.ApiException;
import au.com.singletonsd.kinesis.api.serial.api.Configuration;
import au.com.singletonsd.kinesis.api.serial.api.auth.*;
import au.com.singletonsd.kinesis.api.serial.api.models.*;
import au.com.singletonsd.kinesis.api.serial.api.ProductsApi;

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

    ProductsApi apiInstance = new ProductsApi(defaultClient);
    Integer page = 0; // Integer | number of page
    Integer size = 10; // Integer | size of page
    String sort = "sort_example"; // String | sort by property.
    Deleted deleted = new Deleted(); // Deleted | Get all, deleted, not deleted data. Default not deleted.
    Boolean metadata = false; // Boolean | If metadata is needed (for pagination controls)
    try {
      ResponseGetProduct result = apiInstance.getProducts(page, size, sort, deleted, metadata);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ProductsApi#getProducts");
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

[**ResponseGetProduct**](ResponseGetProduct.md)

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

