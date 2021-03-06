(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./src/lib/Product.js":
/*!****************************!*\
  !*** ./src/lib/Product.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context/User */ "./src/context/User.js");
/**
 * Product
 *
 * @param
 */

 // TODO: move to helpers

/**
 * priceFormat
 *
 * @param number number
 * @param currencty string
 * @param locale string
 */

var priceFormat = function priceFormat(number, currency, locale) {
  return number.toLocaleString(locale, {
    style: 'currency',
    currency: currency
  });
};

var Product = function Product(props) {
  var context = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_User__WEBPACK_IMPORTED_MODULE_1__["default"]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "product_list__item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, props.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: props.image
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, priceFormat(props.price / 100, props.currency, context.locale)));
};

/* harmony default export */ __webpack_exports__["default"] = (Product);

/***/ }),

/***/ "./src/lib/ProductList.js":
/*!********************************!*\
  !*** ./src/lib/ProductList.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Product__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Product */ "./src/lib/Product.js");
/* harmony import */ var _context_User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/User */ "./src/context/User.js");
/**
 * ProductList
 *
 * @param props object
 */


 // ProductList Component

var ProductList = function ProductList(props) {
  var context = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_User__WEBPACK_IMPORTED_MODULE_2__["default"]);
  var products = props.products;
  var productGrid = products.map(function (product, indx) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Product__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: indx,
      id: product.id,
      price: product.price,
      image: product.product_main_image,
      name: product.name,
      currency: product.currency,
      availability: product.stock,
      delivery: product.delivery
    });
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "product_list"
  }, productGrid);
};

/* harmony default export */ __webpack_exports__["default"] = (ProductList);

/***/ })

}]);
//# sourceMappingURL=1.bundle.js.map