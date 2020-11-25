/*
 * Kinesis Code Exercise API
 * This is an API to interact with Kineses Code Exercise API # Introduction This API allow to create, modify and delete products, discounts, and orders. # User Authentication This API does not contain any kind of user validation but It request to have a valid authentication user to interact with it. For more information about user Authentication, please refer to [Kinesis Authentication API](https://auth.kinesis.singleton.com.au/). 
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: patoperpetua@singletonsd.com.au
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package au.com.singletonsd.kinesis.api.serial.model;

import java.util.Objects;
import java.util.Arrays;
import au.com.singletonsd.kinesis.api.serial.model.Discounts;
import au.com.singletonsd.kinesis.api.serial.model.Products;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import org.threeten.bp.OffsetDateTime;
import java.io.Serializable;

/**
 * Order&#39;s information.
 */
@ApiModel(description = "Order's information.")
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", date = "2020-11-25T15:13:08.351443+10:00[Australia/Brisbane]")
public class Orders implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String SERIALIZED_NAME_ID = "id";
  @SerializedName(SERIALIZED_NAME_ID)
  private Long id;

  public static final String SERIALIZED_NAME_NAME = "name";
  @SerializedName(SERIALIZED_NAME_NAME)
  private String name;

  public static final String SERIALIZED_NAME_TOTAL_PRICE = "totalPrice";
  @SerializedName(SERIALIZED_NAME_TOTAL_PRICE)
  private Float totalPrice;

  public static final String SERIALIZED_NAME_PRODUCTS = "products";
  @SerializedName(SERIALIZED_NAME_PRODUCTS)
  private List<Products> products = null;

  public static final String SERIALIZED_NAME_ID_PRODUCTS = "idProducts";
  @SerializedName(SERIALIZED_NAME_ID_PRODUCTS)
  private List<Long> idProducts = null;

  public static final String SERIALIZED_NAME_DISCOUNTS = "discounts";
  @SerializedName(SERIALIZED_NAME_DISCOUNTS)
  private List<Discounts> discounts = null;

  public static final String SERIALIZED_NAME_ID_DISCOUNTS = "idDiscounts";
  @SerializedName(SERIALIZED_NAME_ID_DISCOUNTS)
  private List<Long> idDiscounts = null;

  public static final String SERIALIZED_NAME_DELETED = "deleted";
  @SerializedName(SERIALIZED_NAME_DELETED)
  private Boolean deleted = false;

  public static final String SERIALIZED_NAME_CREATED_AT = "createdAt";
  @SerializedName(SERIALIZED_NAME_CREATED_AT)
  private OffsetDateTime createdAt;

  public static final String SERIALIZED_NAME_MODIFIED_AT = "modifiedAt";
  @SerializedName(SERIALIZED_NAME_MODIFIED_AT)
  private OffsetDateTime modifiedAt;


  public Orders id(Long id) {
    
    this.id = id;
    return this;
  }

   /**
   * Order&#39;s Id.
   * @return id
  **/
  @ApiModelProperty(required = true, value = "Order's Id.")

  public Long getId() {
    return id;
  }


  public void setId(Long id) {
    this.id = id;
  }


  public Orders name(String name) {
    
    this.name = name;
    return this;
  }

   /**
   * Get name
   * @return name
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public String getName() {
    return name;
  }


  public void setName(String name) {
    this.name = name;
  }


  public Orders totalPrice(Float totalPrice) {
    
    this.totalPrice = totalPrice;
    return this;
  }

   /**
   * Object&#39;s price.
   * @return totalPrice
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Object's price.")

  public Float getTotalPrice() {
    return totalPrice;
  }


  public void setTotalPrice(Float totalPrice) {
    this.totalPrice = totalPrice;
  }


  public Orders products(List<Products> products) {
    
    this.products = products;
    return this;
  }

  public Orders addProductsItem(Products productsItem) {
    if (this.products == null) {
      this.products = new ArrayList<Products>();
    }
    this.products.add(productsItem);
    return this;
  }

   /**
   * Get products
   * @return products
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public List<Products> getProducts() {
    return products;
  }


  public void setProducts(List<Products> products) {
    this.products = products;
  }


  public Orders idProducts(List<Long> idProducts) {
    
    this.idProducts = idProducts;
    return this;
  }

  public Orders addIdProductsItem(Long idProductsItem) {
    if (this.idProducts == null) {
      this.idProducts = new ArrayList<Long>();
    }
    this.idProducts.add(idProductsItem);
    return this;
  }

   /**
   * Get idProducts
   * @return idProducts
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public List<Long> getIdProducts() {
    return idProducts;
  }


  public void setIdProducts(List<Long> idProducts) {
    this.idProducts = idProducts;
  }


  public Orders discounts(List<Discounts> discounts) {
    
    this.discounts = discounts;
    return this;
  }

  public Orders addDiscountsItem(Discounts discountsItem) {
    if (this.discounts == null) {
      this.discounts = new ArrayList<Discounts>();
    }
    this.discounts.add(discountsItem);
    return this;
  }

   /**
   * Get discounts
   * @return discounts
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public List<Discounts> getDiscounts() {
    return discounts;
  }


  public void setDiscounts(List<Discounts> discounts) {
    this.discounts = discounts;
  }


  public Orders idDiscounts(List<Long> idDiscounts) {
    
    this.idDiscounts = idDiscounts;
    return this;
  }

  public Orders addIdDiscountsItem(Long idDiscountsItem) {
    if (this.idDiscounts == null) {
      this.idDiscounts = new ArrayList<Long>();
    }
    this.idDiscounts.add(idDiscountsItem);
    return this;
  }

   /**
   * Get idDiscounts
   * @return idDiscounts
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public List<Long> getIdDiscounts() {
    return idDiscounts;
  }


  public void setIdDiscounts(List<Long> idDiscounts) {
    this.idDiscounts = idDiscounts;
  }


  public Orders deleted(Boolean deleted) {
    
    this.deleted = deleted;
    return this;
  }

   /**
   * Get deleted
   * @return deleted
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public Boolean getDeleted() {
    return deleted;
  }


  public void setDeleted(Boolean deleted) {
    this.deleted = deleted;
  }


   /**
   * Object&#39;s created time.
   * @return createdAt
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Object's created time.")

  public OffsetDateTime getCreatedAt() {
    return createdAt;
  }




   /**
   * Object&#39;s modified time.
   * @return modifiedAt
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Object's modified time.")

  public OffsetDateTime getModifiedAt() {
    return modifiedAt;
  }




  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    Orders orders = (Orders) o;
    return Objects.equals(this.id, orders.id) &&
        Objects.equals(this.name, orders.name) &&
        Objects.equals(this.totalPrice, orders.totalPrice) &&
        Objects.equals(this.products, orders.products) &&
        Objects.equals(this.idProducts, orders.idProducts) &&
        Objects.equals(this.discounts, orders.discounts) &&
        Objects.equals(this.idDiscounts, orders.idDiscounts) &&
        Objects.equals(this.deleted, orders.deleted) &&
        Objects.equals(this.createdAt, orders.createdAt) &&
        Objects.equals(this.modifiedAt, orders.modifiedAt);
  }

  @Override
  public int hashCode() {
    return Objects.hash(id, name, totalPrice, products, idProducts, discounts, idDiscounts, deleted, createdAt, modifiedAt);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class Orders {\n");
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    name: ").append(toIndentedString(name)).append("\n");
    sb.append("    totalPrice: ").append(toIndentedString(totalPrice)).append("\n");
    sb.append("    products: ").append(toIndentedString(products)).append("\n");
    sb.append("    idProducts: ").append(toIndentedString(idProducts)).append("\n");
    sb.append("    discounts: ").append(toIndentedString(discounts)).append("\n");
    sb.append("    idDiscounts: ").append(toIndentedString(idDiscounts)).append("\n");
    sb.append("    deleted: ").append(toIndentedString(deleted)).append("\n");
    sb.append("    createdAt: ").append(toIndentedString(createdAt)).append("\n");
    sb.append("    modifiedAt: ").append(toIndentedString(modifiedAt)).append("\n");
    sb.append("}");
    return sb.toString();
  }

  /**
   * Convert the given object to string with each line indented by 4 spaces
   * (except the first line).
   */
  private String toIndentedString(java.lang.Object o) {
    if (o == null) {
      return "null";
    }
    return o.toString().replace("\n", "\n    ");
  }

}

