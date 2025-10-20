"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_dashboard_GridGenerator_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboard/GridGenerator.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboard/GridGenerator.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'GridComponent',
  props: {
    items: {
      type: Array,
      required: true
    },
    rows: {
      type: Number,
      "default": 2
    },
    columns: {
      type: Number,
      "default": 4
    },
    containerClass: {
      type: String,
      "default": 'bg-white'
    },
    containerMinWidth: {
      type: String,
      "default": null
    },
    containerMaxWidth: {
      type: String,
      "default": "100%"
    },
    itemMinHeight: {
      type: String,
      "default": "150px"
    },
    itemMinWidth: {
      type: String,
      "default": "50px"
    }
  },
  computed: {
    headers: function headers() {
      return Object.keys(this.items[0]);
    },
    gridStyle: function gridStyle() {
      var gridTemplateAreas = this.items.map(function (item) {
        var area = [];
        for (var i = 0; i < item.row; i++) {
          area.push("\"".concat('a'.repeat(item.column), "\""));
        }
        return area.join(' ');
      }).join(' ');
      return {
        gridTemplateAreas: gridTemplateAreas
      };
    },
    gridTemplateAreas: function gridTemplateAreas() {
      var columns = Array.from({
        length: this.columns
      }, function () {
        return '1fr';
      });
      var rows = Array.from({
        length: this.rows
      }, function () {
        return '1fr';
      });
      var tableur = this.drawGrid(this.items, this.columns, this.rows);
      tableur = tableur.matrix.map(function (el) {
        return "'".concat(el.join(' '), "'");
      }).join(' ');
      // console.log(tableur)
      this.drawGrid(this.items, this.columns, this.rows);
      return {
        "grid-template-areas": tableur,
        "grid-template-rows": rows.join(' '),
        "grid-template-columns": columns.join(' '),
        "min-width": this.containerMinWidth,
        "max-width": this.containerMaxWidth,
        "width": "auto"
      };
    }
  },
  methods: {
    getItemStyle: function getItemStyle(item) {
      return {
        gridArea: "span ".concat(item.row, " / span ").concat(item.column)
      };
    },
    drawGrid: function drawGrid(list, maxColumns, maxRows) {
      var matrix = Array.from({
        length: maxRows
      }, function () {
        return Array.from({
          length: maxColumns
        }, function () {
          return '';
        });
      });
      var lastRow = 0;
      var lastColumn = 0;
      function pencil(item) {
        var placed = false;
        for (var i = lastRow; i < maxRows && !placed; i++) {
          for (var j = lastColumn; j < maxColumns && !placed; j++) {
            if (canPlaceItem(i, j, item)) {
              placeItem(i, j, item);
              placed = true;
            }
          }
          lastColumn = 0; // Reset column index for the next row
        }
        function canPlaceItem(row, col, item) {
          if (row + item.rows > maxRows || col + item.columns > maxColumns) {
            return false;
          }
          for (var _i = row; _i < row + item.rows; _i++) {
            for (var _j = col; _j < col + item.columns; _j++) {
              if (matrix[_i][_j] !== '') {
                return false;
              }
            }
          }
          return true;
        }
        function placeItem(row, col, item) {
          for (var _i2 = row; _i2 < row + item.rows; _i2++) {
            for (var _j2 = col; _j2 < col + item.columns; _j2++) {
              matrix[_i2][_j2] = item.name;
            }
          }
          lastRow = row;
          lastColumn = col + item.columns;
        }
      }
      list.forEach(function (item) {
        pencil(item);
      });
      return {
        matrix: matrix,
        toString: function toString() {
          return matrix.map(function (row) {
            return row.join(' ');
          }).join('\n');
        }
      };
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboard/GridGenerator.vue?vue&type=template&id=ee074f52&scoped=true":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboard/GridGenerator.vue?vue&type=template&id=ee074f52&scoped=true ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "grid-container rounded gap-2 p-1",
    style: _vm.gridTemplateAreas
  }, _vm._l(_vm.items, function (item, index) {
    return _c("div", {
      key: index,
      staticClass: "grid-item rounded text-center",
      style: "grid-area: ".concat(item.name, "; color: ").concat(item.color, " !important; background: ").concat(item.background, " !important; min-height: ").concat(_vm.itemMinHeight, "; min-width: ").concat(_vm.itemMinWidth, " !important;"),
      attrs: {
        to: item.link
      }
    }, [!(item !== null && item !== void 0 && item.link.startsWith("http")) ? _c("router-link", {
      staticClass: "grid-link",
      staticStyle: {
        width: "100%",
        height: "100%"
      },
      attrs: {
        to: item.link
      }
    }, [_c("div", [_c("i", {
      staticClass: "icofont icofont-3x",
      "class": item.icon
    })]), _vm._v("\n      " + _vm._s(item.label) + "\n    ")]) : _c("div", {
      staticClass: "grid-link",
      staticStyle: {
        width: "100%",
        height: "100%"
      },
      attrs: {
        href: item.link
      }
    }, [_c("div", [_c("i", {
      staticClass: "icofont-3x",
      "class": item.icon
    })]), _vm._v("\n      " + _vm._s(item.label) + "\n    ")])], 1);
  }), 0);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboard/GridGenerator.vue?vue&type=style&index=0&id=ee074f52&scoped=true&lang=css":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboard/GridGenerator.vue?vue&type=style&index=0&id=ee074f52&scoped=true&lang=css ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.grid-container[data-v-ee074f52] {\r\n  display: grid;\r\n  /* gap: 10px; */\r\n  place-content: center;\n}\n.grid-header[data-v-ee074f52] {\r\n  font-weight: bold;\r\n  background-color: #f2f2f2;\r\n  padding: 10px;\n}\n.grid-item[data-v-ee074f52] {\r\n  background-color: #fff;\r\n  min-height: 50px;\r\n  display: grid;\r\n  place-items: center;\r\n  place-content: center;\r\n  font-size: 15px;\r\n  transition: scale 1s;\n}\n.grid-item[data-v-ee074f52]:hover {\r\n  transition: scale 1s;\r\n  scale: 1.05\n}\n.grid-link[data-v-ee074f52]:visited {\r\n  color:inherit;\n} /* Visited link    */\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboard/GridGenerator.vue?vue&type=style&index=0&id=ee074f52&scoped=true&lang=css":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboard/GridGenerator.vue?vue&type=style&index=0&id=ee074f52&scoped=true&lang=css ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GridGenerator_vue_vue_type_style_index_0_id_ee074f52_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GridGenerator.vue?vue&type=style&index=0&id=ee074f52&scoped=true&lang=css */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboard/GridGenerator.vue?vue&type=style&index=0&id=ee074f52&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GridGenerator_vue_vue_type_style_index_0_id_ee074f52_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GridGenerator_vue_vue_type_style_index_0_id_ee074f52_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/dashboard/GridGenerator.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/dashboard/GridGenerator.vue ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _GridGenerator_vue_vue_type_template_id_ee074f52_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GridGenerator.vue?vue&type=template&id=ee074f52&scoped=true */ "./resources/js/components/dashboard/GridGenerator.vue?vue&type=template&id=ee074f52&scoped=true");
/* harmony import */ var _GridGenerator_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GridGenerator.vue?vue&type=script&lang=js */ "./resources/js/components/dashboard/GridGenerator.vue?vue&type=script&lang=js");
/* harmony import */ var _GridGenerator_vue_vue_type_style_index_0_id_ee074f52_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GridGenerator.vue?vue&type=style&index=0&id=ee074f52&scoped=true&lang=css */ "./resources/js/components/dashboard/GridGenerator.vue?vue&type=style&index=0&id=ee074f52&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _GridGenerator_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _GridGenerator_vue_vue_type_template_id_ee074f52_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _GridGenerator_vue_vue_type_template_id_ee074f52_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "ee074f52",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/dashboard/GridGenerator.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/dashboard/GridGenerator.vue?vue&type=script&lang=js":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/dashboard/GridGenerator.vue?vue&type=script&lang=js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GridGenerator_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GridGenerator.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboard/GridGenerator.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GridGenerator_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/dashboard/GridGenerator.vue?vue&type=style&index=0&id=ee074f52&scoped=true&lang=css":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/components/dashboard/GridGenerator.vue?vue&type=style&index=0&id=ee074f52&scoped=true&lang=css ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GridGenerator_vue_vue_type_style_index_0_id_ee074f52_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GridGenerator.vue?vue&type=style&index=0&id=ee074f52&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboard/GridGenerator.vue?vue&type=style&index=0&id=ee074f52&scoped=true&lang=css");


/***/ }),

/***/ "./resources/js/components/dashboard/GridGenerator.vue?vue&type=template&id=ee074f52&scoped=true":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/dashboard/GridGenerator.vue?vue&type=template&id=ee074f52&scoped=true ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GridGenerator_vue_vue_type_template_id_ee074f52_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GridGenerator_vue_vue_type_template_id_ee074f52_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GridGenerator_vue_vue_type_template_id_ee074f52_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GridGenerator.vue?vue&type=template&id=ee074f52&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboard/GridGenerator.vue?vue&type=template&id=ee074f52&scoped=true");


/***/ })

}]);