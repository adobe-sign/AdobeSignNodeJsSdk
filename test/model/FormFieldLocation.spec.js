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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SwaggerJsClient);
  }
}(this, function(expect, SwaggerJsClient) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new SwaggerJsClient.FormFieldLocation();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('FormFieldLocation', function() {
    it('should create an instance of FormFieldLocation', function() {
      // uncomment below and update the code to test FormFieldLocation
      //var instane = new SwaggerJsClient.FormFieldLocation();
      //expect(instance).to.be.a(SwaggerJsClient.FormFieldLocation);
    });

    it('should have the property height (base name: "height")', function() {
      // uncomment below and update the code to test the property height
      //var instane = new SwaggerJsClient.FormFieldLocation();
      //expect(instance).to.be();
    });

    it('should have the property left (base name: "left")', function() {
      // uncomment below and update the code to test the property left
      //var instane = new SwaggerJsClient.FormFieldLocation();
      //expect(instance).to.be();
    });

    it('should have the property pageNumber (base name: "pageNumber")', function() {
      // uncomment below and update the code to test the property pageNumber
      //var instane = new SwaggerJsClient.FormFieldLocation();
      //expect(instance).to.be();
    });

    it('should have the property top (base name: "top")', function() {
      // uncomment below and update the code to test the property top
      //var instane = new SwaggerJsClient.FormFieldLocation();
      //expect(instance).to.be();
    });

    it('should have the property width (base name: "width")', function() {
      // uncomment below and update the code to test the property width
      //var instane = new SwaggerJsClient.FormFieldLocation();
      //expect(instance).to.be();
    });

  });

}));
