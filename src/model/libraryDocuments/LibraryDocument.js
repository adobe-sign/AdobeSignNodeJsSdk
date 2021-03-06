/**
*  Copyright 2019 Adobe Systems Incorporated. All rights reserved.
*  This file is licensed to you under the Apache License, Version 2.0 (the "License");
*  you may not use this file except in compliance with the License. You may obtain a copy
*  of the License at http://www.apache.org/licenses/LICENSE-2.0
*
*  Unless required by applicable law or agreed to in writing, software distributed under
*  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
*  OF ANY KIND, either express or implied. See the License for the specific language
*  governing permissions and limitations under the License.
*
*
**/


/**
 * 
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 6.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.SwaggerJsClient) {
      root.SwaggerJsClient = {};
    }
    root.SwaggerJsClient.LibraryDocument = factory(root.SwaggerJsClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The LibraryDocument model module.
   * @module model/libraryDocuments/LibraryDocument
   * @version 6.0.0
   */

  /**
   * Constructs a new <code>LibraryDocument</code>.
   * @alias module:model/libraryDocuments/LibraryDocument
   * @class
   */
  var exports = function() {
    var _this = this;









  };

  /**
   * Constructs a <code>LibraryDocument</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/libraryDocuments/LibraryDocument} obj Optional instance to populate.
   * @return {module:model/libraryDocuments/LibraryDocument} The populated <code>LibraryDocument</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('creatorEmail')) {
        obj['creatorEmail'] = ApiClient.convertToType(data['creatorEmail'], 'String');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('hidden')) {
        obj['hidden'] = ApiClient.convertToType(data['hidden'], 'Boolean');
      }
      if (data.hasOwnProperty('modifiedDate')) {
        obj['modifiedDate'] = ApiClient.convertToType(data['modifiedDate'], 'Date');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('sharingMode')) {
        obj['sharingMode'] = ApiClient.convertToType(data['sharingMode'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('templateTypes')) {
        obj['templateTypes'] = ApiClient.convertToType(data['templateTypes'], ['String']);
      }
    }
    return obj;
  }

  /**
   * Email address of the library document creator. It will be ignored in POST/PUT requests
   * @member {String} creatorEmail
   */
  exports.prototype['creatorEmail'] = undefined;
  /**
   * The unique identifier that is used to refer to the library template
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * True if Library Document is hidden
   * @member {Boolean} hidden
   */
  exports.prototype['hidden'] = undefined;
  /**
   * The date on which the library document was last modified. Format would be yyyy-MM-dd'T'HH:mm:ssZ. For example, e.g 2016-02-25T18:46:19Z represents UTC time
   * @member {Date} modifiedDate
   */
  exports.prototype['modifiedDate'] = undefined;
  /**
   * The name of the library document
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * Specifies who should have access to this library document. GLOBAL sharing mode is not applicable in POST/PUT requests
   * @member {module:model/libraryDocuments/LibraryDocument.SharingModeEnum} sharingMode
   */
  exports.prototype['sharingMode'] = undefined;
  /**
   * Status of the library document
   * @member {module:model/libraryDocuments/LibraryDocument.StatusEnum} status
   */
  exports.prototype['status'] = undefined;
  /**
   * A list of one or more library template types
   * @member {Array.<module:model/libraryDocuments/LibraryDocument.TemplateTypesEnum>} templateTypes
   */
  exports.prototype['templateTypes'] = undefined;


  /**
   * Allowed values for the <code>sharingMode</code> property.
   * @enum {String}
   * @readonly
   */
  exports.SharingModeEnum = {
    /**
     * value: "USER"
     * @const
     */
    "USER": "USER",
    /**
     * value: "GROUP"
     * @const
     */
    "GROUP": "GROUP",
    /**
     * value: "ACCOUNT"
     * @const
     */
    "ACCOUNT": "ACCOUNT",
    /**
     * value: "GLOBAL"
     * @const
     */
    "GLOBAL": "GLOBAL"  };

  /**
   * Allowed values for the <code>status</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StatusEnum = {
    /**
     * value: "AUTHORING"
     * @const
     */
    "AUTHORING": "AUTHORING",
    /**
     * value: "ACTIVE"
     * @const
     */
    "ACTIVE": "ACTIVE",
    /**
     * value: "REMOVED"
     * @const
     */
    "REMOVED": "REMOVED"  };

  /**
   * Allowed values for the <code>templateTypes</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TemplateTypesEnum = {
    /**
     * value: "DOCUMENT"
     * @const
     */
    "DOCUMENT": "DOCUMENT",
    /**
     * value: "FORM_FIELD_LAYER"
     * @const
     */
    "FORM_FIELD_LAYER": "FORM_FIELD_LAYER"  };


  return exports;
}));


