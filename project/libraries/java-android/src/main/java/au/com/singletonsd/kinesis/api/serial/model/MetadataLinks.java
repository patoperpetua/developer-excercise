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
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.io.IOException;
import java.io.Serializable;

/**
 * MetadataLinks
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", date = "2020-11-25T15:13:08.351443+10:00[Australia/Brisbane]")
public class MetadataLinks implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String SERIALIZED_NAME_CURRENT = "current";
  @SerializedName(SERIALIZED_NAME_CURRENT)
  private String current;

  public static final String SERIALIZED_NAME_NEXT = "next";
  @SerializedName(SERIALIZED_NAME_NEXT)
  private String next;

  public static final String SERIALIZED_NAME_PREVIOUS = "previous";
  @SerializedName(SERIALIZED_NAME_PREVIOUS)
  private String previous;


  public MetadataLinks current(String current) {
    
    this.current = current;
    return this;
  }

   /**
   * Get current
   * @return current
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public String getCurrent() {
    return current;
  }


  public void setCurrent(String current) {
    this.current = current;
  }


  public MetadataLinks next(String next) {
    
    this.next = next;
    return this;
  }

   /**
   * Get next
   * @return next
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public String getNext() {
    return next;
  }


  public void setNext(String next) {
    this.next = next;
  }


  public MetadataLinks previous(String previous) {
    
    this.previous = previous;
    return this;
  }

   /**
   * Get previous
   * @return previous
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public String getPrevious() {
    return previous;
  }


  public void setPrevious(String previous) {
    this.previous = previous;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    MetadataLinks metadataLinks = (MetadataLinks) o;
    return Objects.equals(this.current, metadataLinks.current) &&
        Objects.equals(this.next, metadataLinks.next) &&
        Objects.equals(this.previous, metadataLinks.previous);
  }

  @Override
  public int hashCode() {
    return Objects.hash(current, next, previous);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class MetadataLinks {\n");
    sb.append("    current: ").append(toIndentedString(current)).append("\n");
    sb.append("    next: ").append(toIndentedString(next)).append("\n");
    sb.append("    previous: ").append(toIndentedString(previous)).append("\n");
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

