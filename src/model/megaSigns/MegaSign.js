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
    root.SwaggerJsClient.MegaSign = factory(root.SwaggerJsClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The MegaSign model module.
   * @module model/megaSigns/MegaSign
   * @version 6.0.0
   */

  /**
   * Constructs a new <code>MegaSign</code>.
   * @alias module:model/megaSigns/MegaSign
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>MegaSign</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/megaSigns/MegaSign} obj Optional instance to populate.
   * @return {module:model/megaSigns/MegaSign} The populated <code>MegaSign</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('displayDate')) {
        obj['displayDate'] = ApiClient.convertToType(data['displayDate'], 'Date');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('esign')) {
        obj['esign'] = ApiClient.convertToType(data['esign'], 'Boolean');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
    }
    return obj;
  }

  /**
   * The display date for the MegaSign parent agreement. Format would be yyyy-MM-dd'T'HH:mm:ssZ. For example, e.g 2016-02-25T18:46:19Z represents UTC time
   * @member {Date} displayDate
   */
  exports.prototype['displayDate'] = undefined;
  /**
   * The unique identifier of the MegaSign parent agreement
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * True, if the signature type of the MegaSign parent agreement is ESIGN. False, if the signature type of the MegaSign parent agreement is WRITTEN
   * @member {Boolean} esign
   */
  exports.prototype['esign'] = undefined;
  /**
   * Name of the MegaSign parent agreement
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * Current status of the MegaSign parent agreement from the perspective of the user
   * @member {module:model/megaSigns/MegaSign.StatusEnum} status
   */
  exports.prototype['status'] = undefined;


  /**
   * Allowed values for the <code>status</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StatusEnum = {
    /**
     * value: "WAITING_FOR_MY_SIGNATURE"
     * @const
     */
    "WAITING_FOR_MY_SIGNATURE": "WAITING_FOR_MY_SIGNATURE",
    /**
     * value: "IN_PROCESS"
     * @const
     */
    "IN_PROCESS": "IN_PROCESS",
    /**
     * value: "CANCELLED"
     * @const
     */
    "CANCELLED": "CANCELLED",
    /**
     * value: "ARCHIVED"
     * @const
     */
    "ARCHIVED": "ARCHIVED",
    /**
     * value: "COMPLETED"
     * @const
     */
    "COMPLETED": "COMPLETED",
    /**
     * value: "WAITING_FOR_AUTHORING"
     * @const
     */
    "WAITING_FOR_AUTHORING": "WAITING_FOR_AUTHORING",
    /**
     * value: "WAITING_FOR_PREFILL"
     * @const
     */
    "WAITING_FOR_PREFILL": "WAITING_FOR_PREFILL"  };


  return exports;
}));


