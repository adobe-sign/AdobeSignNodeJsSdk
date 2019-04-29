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
    root.SwaggerJsClient.ReminderInfo = factory(root.SwaggerJsClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ReminderInfo model module.
   * @module model/agreements/ReminderInfo
   * @version 6.0.0
   */

  /**
   * Constructs a new <code>ReminderInfo</code>.
   * @alias module:model/agreements/ReminderInfo
   * @class
   */
  var exports = function() {
    var _this = this;










  };

  /**
   * Constructs a <code>ReminderInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/agreements/ReminderInfo} obj Optional instance to populate.
   * @return {module:model/agreements/ReminderInfo} The populated <code>ReminderInfo</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('firstReminderDelay')) {
        obj['firstReminderDelay'] = ApiClient.convertToType(data['firstReminderDelay'], 'Number');
      }
      if (data.hasOwnProperty('frequency')) {
        obj['frequency'] = ApiClient.convertToType(data['frequency'], 'String');
      }
      if (data.hasOwnProperty('lastSentDate')) {
        obj['lastSentDate'] = ApiClient.convertToType(data['lastSentDate'], 'Date');
      }
      if (data.hasOwnProperty('nextSentDate')) {
        obj['nextSentDate'] = ApiClient.convertToType(data['nextSentDate'], 'Date');
      }
      if (data.hasOwnProperty('note')) {
        obj['note'] = ApiClient.convertToType(data['note'], 'String');
      }
      if (data.hasOwnProperty('recipientParticipantIds')) {
        obj['recipientParticipantIds'] = ApiClient.convertToType(data['recipientParticipantIds'], ['String']);
      }
      if (data.hasOwnProperty('reminderId')) {
        obj['reminderId'] = ApiClient.convertToType(data['reminderId'], 'String');
      }
      if (data.hasOwnProperty('startReminderCounterFrom')) {
        obj['startReminderCounterFrom'] = ApiClient.convertToType(data['startReminderCounterFrom'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
    }
    return obj;
  }

  /**
   * Integer which specifies the delay in hours before sending the first reminder.<br>This is an optional field. The minimum value allowed is 1 hour and the maximum value can’t be more than the difference of agreement creation and expiry time of the agreement in hours.<br>If this is not specified but the reminder frequency is specified, then the first reminder will be sent based on frequency.<br>i.e. if the reminder is created with frequency specified as daily, the firstReminderDelay will be 24 hours. Cannot be updated in a PUT
   * @member {Number} firstReminderDelay
   */
  exports.prototype['firstReminderDelay'] = undefined;
  /**
   * The frequency at which reminder will be sent until the agreement is completed.<br>If frequency is not provided, the reminder will be sent once (if the agreement is available at the specified time) with the delay based on the firstReminderDelay field and will never repeat again. If the agreement is not available at that time, reminder will not be sent. Cannot be updated in a PUT
   * @member {module:model/agreements/ReminderInfo.FrequencyEnum} frequency
   */
  exports.prototype['frequency'] = undefined;
  /**
   * The date when the reminder was last sent. Only provided in GET. Cannot be provided in POST request. If provided in POST, it will be ignored. Cannot be updated in a PUT. Format would be yyyy-MM-dd'T'HH:mm:ssZ. For example, e.g 2016-02-25T18:46:19Z represents UTC time
   * @member {Date} lastSentDate
   */
  exports.prototype['lastSentDate'] = undefined;
  /**
   * The date when the reminder is scheduled to be sent next. When provided in POST request, frequency needs to be ONCE (or not specified), startReminderCounterFrom needs to be REMINDER_CREATION (or not specified) and firstReminderDelay needs to be 0 (or not specified). Cannot be updated in a PUT. Format would be yyyy-MM-dd'T'HH:mm:ssZ. For example, e.g 2016-02-25T18:46:19Z represents UTC time
   * @member {Date} nextSentDate
   */
  exports.prototype['nextSentDate'] = undefined;
  /**
   * An optional message sent to the recipients, describing why their participation is required
   * @member {String} note
   */
  exports.prototype['note'] = undefined;
  /**
   * A list of one or more participant IDs that the reminder should be sent to. These must be recipients of the agreement and not sharees or cc's.
   * @member {Array.<String>} recipientParticipantIds
   */
  exports.prototype['recipientParticipantIds'] = undefined;
  /**
   * An identifier of the reminder resource created on the server. If provided in POST or PUT, it will be ignored
   * @member {String} reminderId
   */
  exports.prototype['reminderId'] = undefined;
  /**
   * Reminder can be sent based on when the agreement becomes available or when the reminder is created<br>AGREEMENT_AVAILABILITY: If the agreement is not available to the participant at the time of reminder creation, the reminder will be sent for the first time, only when the agreement becomes available to the participant taking the firstReminderDelay into account. Subsequent reminders will be sent based on the frequency specified.  If the agreement is already available to the participant at the time of reminder creation, the first reminder will be sent after the delay specified by firstReminderDelay from the reminder creation time.<br>REMINDER_CREATION: The first reminder will be sent after the delay specified by firstReminderDelay from the reminder creation time only if the agreement is available at that time. Subsequent reminders will be triggered based on the frequency specified and will be sent only if the agreement is available at that time.  For agreements in authoring state, creating reminder with startReminderCounterFrom as REMINDER_CREATION is not allowed.<br>Note : If firstReminderDelay, frequency and startReminderCounterFrom fields are not specified in POST, reminder will be sent right now if the agreement is available. If agreement is not available, an error will be thrown.  Cannot be updated in a PUT
   * @member {module:model/agreements/ReminderInfo.StartReminderCounterFromEnum} startReminderCounterFrom
   */
  exports.prototype['startReminderCounterFrom'] = undefined;
  /**
   * Current status of the reminder.  The only valid update in a PUT is from ACTIVE to CANCELED.  Must be provided as ACTIVE in a POST.
   * @member {module:model/agreements/ReminderInfo.StatusEnum} status
   */
  exports.prototype['status'] = undefined;


  /**
   * Allowed values for the <code>frequency</code> property.
   * @enum {String}
   * @readonly
   */
  exports.FrequencyEnum = {
    /**
     * value: "DAILY_UNTIL_SIGNED"
     * @const
     */
    "DAILY_UNTIL_SIGNED": "DAILY_UNTIL_SIGNED",
    /**
     * value: "WEEKDAILY_UNTIL_SIGNED"
     * @const
     */
    "WEEKDAILY_UNTIL_SIGNED": "WEEKDAILY_UNTIL_SIGNED",
    /**
     * value: "EVERY_OTHER_DAY_UNTIL_SIGNED"
     * @const
     */
    "EVERY_OTHER_DAY_UNTIL_SIGNED": "EVERY_OTHER_DAY_UNTIL_SIGNED",
    /**
     * value: "EVERY_THIRD_DAY_UNTIL_SIGNED"
     * @const
     */
    "EVERY_THIRD_DAY_UNTIL_SIGNED": "EVERY_THIRD_DAY_UNTIL_SIGNED",
    /**
     * value: "EVERY_FIFTH_DAY_UNTIL_SIGNED"
     * @const
     */
    "EVERY_FIFTH_DAY_UNTIL_SIGNED": "EVERY_FIFTH_DAY_UNTIL_SIGNED",
    /**
     * value: "WEEKLY_UNTIL_SIGNED"
     * @const
     */
    "WEEKLY_UNTIL_SIGNED": "WEEKLY_UNTIL_SIGNED",
    /**
     * value: "ONCE"
     * @const
     */
    "ONCE": "ONCE"  };

  /**
   * Allowed values for the <code>startReminderCounterFrom</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StartReminderCounterFromEnum = {
    /**
     * value: "AGREEMENT_AVAILABILITY"
     * @const
     */
    "AGREEMENT_AVAILABILITY": "AGREEMENT_AVAILABILITY",
    /**
     * value: "REMINDER_CREATION"
     * @const
     */
    "REMINDER_CREATION": "REMINDER_CREATION"  };

  /**
   * Allowed values for the <code>status</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StatusEnum = {
    /**
     * value: "ACTIVE"
     * @const
     */
    "ACTIVE": "ACTIVE",
    /**
     * value: "CANCELED"
     * @const
     */
    "CANCELED": "CANCELED",
    /**
     * value: "COMPLETE"
     * @const
     */
    "COMPLETE": "COMPLETE"  };


  return exports;
}));

