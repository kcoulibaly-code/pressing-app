"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_reportex_statistics_ExpansionItem_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/reportex/statistics/ExpansionItem.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/reportex/statistics/ExpansionItem.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "ExpansionItem",
  props: {
    title: {
      type: String,
      "default": "Item Title"
    },
    content: {
      type: [String, Object, Array],
      "default": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint nostrum unde  voluptate alias fugaimpedit,\n            distinctio obcaecati iure quis explicabo reiciendis quam tempore aperiam facilis culpa, asperiores minus\n            itaque. "
    }
  },
  data: function data() {
    return {
      open: false
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/reportex/statistics/ExpansionItem.vue?vue&type=template&id=09ab3cd3":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/reportex/statistics/ExpansionItem.vue?vue&type=template&id=09ab3cd3 ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "my-2",
    attrs: {
      id: "ExpansionItem" + _vm._uid
    }
  }, [_c("div", {
    staticClass: "d-flex cursor-pointer px-2 justify-content-between align-items-center border-bottom border-bottom",
    on: {
      click: function click($event) {
        _vm.open = !_vm.open;
      }
    }
  }, [_c("h5", [_vm._v(_vm._s(_vm.title))]), _vm._v(" "), _c("i", {
    staticClass: "icofont-rounded-down"
  })]), _vm._v(" "), _c("transition", {
    attrs: {
      name: "slide-fade"
    }
  }, [_vm._t("content", function () {
    return [_vm.open ? _c("div", {
      staticClass: "border border-top-0 p-2 rounded"
    }, [_vm._v("\n                " + _vm._s(_vm.content) + "\n\n            ")]) : _vm._e()];
  }, {
    content: _vm.content
  })], 2)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/components/reportex/statistics/ExpansionItem.vue":
/*!***********************************************************************!*\
  !*** ./resources/js/components/reportex/statistics/ExpansionItem.vue ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ExpansionItem_vue_vue_type_template_id_09ab3cd3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ExpansionItem.vue?vue&type=template&id=09ab3cd3 */ "./resources/js/components/reportex/statistics/ExpansionItem.vue?vue&type=template&id=09ab3cd3");
/* harmony import */ var _ExpansionItem_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ExpansionItem.vue?vue&type=script&lang=js */ "./resources/js/components/reportex/statistics/ExpansionItem.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ExpansionItem_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _ExpansionItem_vue_vue_type_template_id_09ab3cd3__WEBPACK_IMPORTED_MODULE_0__.render,
  _ExpansionItem_vue_vue_type_template_id_09ab3cd3__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/reportex/statistics/ExpansionItem.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/reportex/statistics/ExpansionItem.vue?vue&type=script&lang=js":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/reportex/statistics/ExpansionItem.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ExpansionItem_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ExpansionItem.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/reportex/statistics/ExpansionItem.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ExpansionItem_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/reportex/statistics/ExpansionItem.vue?vue&type=template&id=09ab3cd3":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/reportex/statistics/ExpansionItem.vue?vue&type=template&id=09ab3cd3 ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ExpansionItem_vue_vue_type_template_id_09ab3cd3__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ExpansionItem_vue_vue_type_template_id_09ab3cd3__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ExpansionItem_vue_vue_type_template_id_09ab3cd3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ExpansionItem.vue?vue&type=template&id=09ab3cd3 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/reportex/statistics/ExpansionItem.vue?vue&type=template&id=09ab3cd3");


/***/ })

}]);