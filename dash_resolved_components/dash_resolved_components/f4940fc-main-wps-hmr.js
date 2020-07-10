webpackHotUpdatedash_resolved_components("main",{

/***/ "./src/lib/components/JsonSchemaForm.react.js":
/*!****************************************************!*\
  !*** ./src/lib/components/JsonSchemaForm.react.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return JsonSchemaForm; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _rjsf_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @rjsf/core */ "./node_modules/@rjsf/core/dist/es/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


 // react-jsonschemaform stuff


/**
 * JsonSchemaForm makes react-jsonshcema-forms usable for dash. It allows to render a form (layout components) based on
 * a json schema. Formdata is changeable and accessible. Optionally a json ui schema can be used to tweak the layout.
 */

var JsonSchemaForm = /*#__PURE__*/function (_Component) {
  _inherits(JsonSchemaForm, _Component);

  var _super = _createSuper(JsonSchemaForm);

  function JsonSchemaForm(props) {
    _classCallCheck(this, JsonSchemaForm);

    return _super.call(this, props);
  }

  _createClass(JsonSchemaForm, [{
    key: "render",
    value: function render() {
      console.log("component props ", this.props);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: this.props.id
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_rjsf_core__WEBPACK_IMPORTED_MODULE_2__["default"], {
        schema: this.props.schema,
        formData: this.props.formData,
        onSubmit: this.props.onSubmit
      }));
    }
  }]);

  return JsonSchemaForm;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);


JsonSchemaForm.defaultProps = {
  schema: {},
  formData: {}
};
JsonSchemaForm.propTypes = {
  /**
   * The ID used to identify this component in Dash callbacks.
   */
  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * A valid json schema
   */
  schema: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,

  /**
   * formData valid for the provided json schema
   */
  formData: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,

  /**
   * Return the data to the formData on using the onSubmit button
   */
  onSubmit: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,

  /**
   * Dash-assigned callback that should be called to report property changes
   * to Dash, to make them available for callbacks.
   */
  setProps: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYXNoX3Jlc29sdmVkX2NvbXBvbmVudHMvLi9zcmMvbGliL2NvbXBvbmVudHMvSnNvblNjaGVtYUZvcm0ucmVhY3QuanMiXSwibmFtZXMiOlsiSnNvblNjaGVtYUZvcm0iLCJwcm9wcyIsImNvbnNvbGUiLCJsb2ciLCJpZCIsInNjaGVtYSIsImZvcm1EYXRhIiwib25TdWJtaXQiLCJDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJvYmplY3QiLCJpc1JlcXVpcmVkIiwic2V0UHJvcHMiLCJmdW5jIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtDQUdBOztBQUNBO0FBRUE7Ozs7O0lBSXFCQSxjOzs7OztBQUNqQiwwQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDZCQUNUQSxLQURTO0FBRWxCOzs7OzZCQUVRO0FBQ0xDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLGtCQUFaLEVBQStCLEtBQUtGLEtBQXBDO0FBQ0EsMEJBQ0k7QUFBSyxVQUFFLEVBQUUsS0FBS0EsS0FBTCxDQUFXRztBQUFwQixzQkFDSSwyREFBQyxrREFBRDtBQUNJLGNBQU0sRUFBRSxLQUFLSCxLQUFMLENBQVdJLE1BRHZCO0FBRUksZ0JBQVEsRUFBRSxLQUFLSixLQUFMLENBQVdLLFFBRnpCO0FBR0ksZ0JBQVEsRUFBRSxLQUFLTCxLQUFMLENBQVdNO0FBSHpCLFFBREosQ0FESjtBQVNIOzs7O0VBaEJ1Q0MsK0M7OztBQW1CNUNSLGNBQWMsQ0FBQ1MsWUFBZixHQUE4QjtBQUMxQkosUUFBTSxFQUFFLEVBRGtCO0FBRTFCQyxVQUFRLEVBQUU7QUFGZ0IsQ0FBOUI7QUFLQU4sY0FBYyxDQUFDVSxTQUFmLEdBQTJCO0FBQ3ZCOzs7QUFHQU4sSUFBRSxFQUFFTyxpREFBUyxDQUFDQyxNQUpTOztBQU12Qjs7O0FBR0FQLFFBQU0sRUFBRU0saURBQVMsQ0FBQ0UsTUFBVixDQUFpQkMsVUFURjs7QUFXdkI7OztBQUdBUixVQUFRLEVBQUVLLGlEQUFTLENBQUNFLE1BZEc7O0FBZ0J2Qjs7O0FBR0FOLFVBQVEsRUFBRUksaURBQVMsQ0FBQ0UsTUFuQkc7O0FBb0J2Qjs7OztBQUlBRSxVQUFRLEVBQUVKLGlEQUFTLENBQUNLO0FBeEJHLENBQTNCLEMiLCJmaWxlIjoiZjQ5NDBmYy1tYWluLXdwcy1obXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbi8vIHJlYWN0LWpzb25zY2hlbWFmb3JtIHN0dWZmXG5pbXBvcnQgRm9ybSBmcm9tIFwiQHJqc2YvY29yZVwiO1xuXG4vKipcbiAqIEpzb25TY2hlbWFGb3JtIG1ha2VzIHJlYWN0LWpzb25zaGNlbWEtZm9ybXMgdXNhYmxlIGZvciBkYXNoLiBJdCBhbGxvd3MgdG8gcmVuZGVyIGEgZm9ybSAobGF5b3V0IGNvbXBvbmVudHMpIGJhc2VkIG9uXG4gKiBhIGpzb24gc2NoZW1hLiBGb3JtZGF0YSBpcyBjaGFuZ2VhYmxlIGFuZCBhY2Nlc3NpYmxlLiBPcHRpb25hbGx5IGEganNvbiB1aSBzY2hlbWEgY2FuIGJlIHVzZWQgdG8gdHdlYWsgdGhlIGxheW91dC5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSnNvblNjaGVtYUZvcm0gZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiY29tcG9uZW50IHByb3BzIFwiLHRoaXMucHJvcHMpXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGlkPXt0aGlzLnByb3BzLmlkfT5cbiAgICAgICAgICAgICAgICA8Rm9ybVxuICAgICAgICAgICAgICAgICAgICBzY2hlbWE9e3RoaXMucHJvcHMuc2NoZW1hfVxuICAgICAgICAgICAgICAgICAgICBmb3JtRGF0YT17dGhpcy5wcm9wcy5mb3JtRGF0YX1cbiAgICAgICAgICAgICAgICAgICAgb25TdWJtaXQ9e3RoaXMucHJvcHMub25TdWJtaXR9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufVxuXG5Kc29uU2NoZW1hRm9ybS5kZWZhdWx0UHJvcHMgPSB7XG4gICAgc2NoZW1hOiB7fSxcbiAgICBmb3JtRGF0YToge31cbn07XG5cbkpzb25TY2hlbWFGb3JtLnByb3BUeXBlcyA9IHtcbiAgICAvKipcbiAgICAgKiBUaGUgSUQgdXNlZCB0byBpZGVudGlmeSB0aGlzIGNvbXBvbmVudCBpbiBEYXNoIGNhbGxiYWNrcy5cbiAgICAgKi9cbiAgICBpZDogUHJvcFR5cGVzLnN0cmluZyxcblxuICAgIC8qKlxuICAgICAqIEEgdmFsaWQganNvbiBzY2hlbWFcbiAgICAgKi9cbiAgICBzY2hlbWE6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIGZvcm1EYXRhIHZhbGlkIGZvciB0aGUgcHJvdmlkZWQganNvbiBzY2hlbWFcbiAgICAgKi9cbiAgICBmb3JtRGF0YTogUHJvcFR5cGVzLm9iamVjdCxcblxuICAgIC8qKlxuICAgICAqIFJldHVybiB0aGUgZGF0YSB0byB0aGUgZm9ybURhdGEgb24gdXNpbmcgdGhlIG9uU3VibWl0IGJ1dHRvblxuICAgICAqL1xuICAgIG9uU3VibWl0OiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIC8qKlxuICAgICAqIERhc2gtYXNzaWduZWQgY2FsbGJhY2sgdGhhdCBzaG91bGQgYmUgY2FsbGVkIHRvIHJlcG9ydCBwcm9wZXJ0eSBjaGFuZ2VzXG4gICAgICogdG8gRGFzaCwgdG8gbWFrZSB0aGVtIGF2YWlsYWJsZSBmb3IgY2FsbGJhY2tzLlxuICAgICAqL1xuICAgIHNldFByb3BzOiBQcm9wVHlwZXMuZnVuY1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=