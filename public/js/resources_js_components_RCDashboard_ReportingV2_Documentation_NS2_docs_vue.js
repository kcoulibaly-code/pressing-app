"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_RCDashboard_ReportingV2_Documentation_NS2_docs_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/RCDashboard/ReportingV2/Documentation/NS2_docs.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/RCDashboard/ReportingV2/Documentation/NS2_docs.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "NS2_docs",
  props: {
    selectedDirection: {
      type: Object,
      required: false
    },
    typeClient: {
      type: String,
      required: false
    }
  },
  computed: {
    clientType: function clientType() {
      if (this.typeClient === 'DCP') {
        return 'Direction des Crédits aux Particuliers';
      } else {
        return 'Direction centrale des entreprises et institutionnels';
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/RCDashboard/ReportingV2/Documentation/NS2_docs.vue?vue&type=template&id=e8eb7b84&scoped=true":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/RCDashboard/ReportingV2/Documentation/NS2_docs.vue?vue&type=template&id=e8eb7b84&scoped=true ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm$selectedDirection, _vm$selectedDirection2, _vm$selectedDirection3;
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "docs"
  }, [_c("h3", [_vm._v("🔹 Fiche de nomenclature :")]), _vm._v(" "), _c("p", [_vm._v("Code du reporting : R " + _vm._s((_vm$selectedDirection = _vm.selectedDirection) === null || _vm$selectedDirection === void 0 ? void 0 : _vm$selectedDirection.direction) + " NS 1")]), _vm._v(" "), _c("hr"), _vm._v(" "), _c("h3", [_vm._v("🔹 Désignation complète :")]), _vm._v(" "), _c("p", [_vm._v("Reporting de la " + _vm._s((_vm$selectedDirection2 = _vm.selectedDirection) === null || _vm$selectedDirection2 === void 0 ? void 0 : _vm$selectedDirection2.full_title) + " ( " + _vm._s((_vm$selectedDirection3 = _vm.selectedDirection) === null || _vm$selectedDirection3 === void 0 ? void 0 : _vm$selectedDirection3.direction) + " )– Décharge")]), _vm._v(" "), _c("hr"), _vm._v(" "), _c("h3", [_vm._v("🔹 Objet du reporting :")]), _vm._v(" "), _c("p", [_vm._v("Ce reporting présente l'état général à date des dossiers instruits dans le cadre des activités de la direction des Crédits aux Particuliers et Direction centrale des entreprises et institutionnels. Il a pour vocation de fournir une vision consolidée, claire et actualisée des traitements en cours ou achevés, facilitant le suivi opérationnel et décisionnel.")]), _vm._v(" "), _c("hr"), _vm._v(" "), _c("h3", [_vm._v("🔹 Contenu du reporting :")]), _vm._v(" "), _c("p", [_vm._v("Le reporting comprend généralement les éléments suivants :")]), _vm._v(" "), _vm._m(0)]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("ol", {
    staticClass: "ollist"
  }, [_c("li", [_c("span", [_vm._v("Nombre total de dossiers instruits")]), _vm._v(" "), _c("ul", {
    staticClass: "list"
  }, [_c("li", [_vm._v("Ventilation par type de crédit (conso, immobilier, auto, etc.)")])])]), _vm._v(" "), _c("li", [_c("span", [_vm._v("Statut des dossiers")]), _vm._v(" "), _c("ul", {
    staticClass: "list"
  }, [_c("li", [_vm._v("En cours d’analyse")]), _vm._v(" "), _c("li", [_vm._v("Acceptés / Refusés")]), _vm._v(" "), _c("li", [_vm._v("Finalisés")]), _vm._v(" "), _c("li", [_vm._v("Etc")])])]), _vm._v(" "), _c("li", [_c("span", [_vm._v("Délai  de traitement")]), _vm._v(" "), _c("ul", {
    staticClass: "list"
  }, [_c("li", [_vm._v("Délai par étape (réception, analyse, décision)")])])])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/RCDashboard/ReportingV2/Documentation/NS2_docs.vue?vue&type=style&index=0&id=e8eb7b84&scoped=true&lang=css":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/RCDashboard/ReportingV2/Documentation/NS2_docs.vue?vue&type=style&index=0&id=e8eb7b84&scoped=true&lang=css ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.docs[data-v-e8eb7b84]{\r\n    padding: 20px;\r\n    /*background-color: #F1F3F4;*/\n}\n.list[data-v-e8eb7b84] {\r\n    margin-left: 15px;\n}\n.list li[data-v-e8eb7b84] {\r\n    list-style-type: disc !important;\n}\n.ollist li[data-v-e8eb7b84] {\r\n    list-style-type: decimal;\n}\n.ollist li span[data-v-e8eb7b84] {\r\n    font-weight: bold;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/RCDashboard/ReportingV2/Documentation/NS2_docs.vue?vue&type=style&index=0&id=e8eb7b84&scoped=true&lang=css":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/RCDashboard/ReportingV2/Documentation/NS2_docs.vue?vue&type=style&index=0&id=e8eb7b84&scoped=true&lang=css ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NS2_docs_vue_vue_type_style_index_0_id_e8eb7b84_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NS2_docs.vue?vue&type=style&index=0&id=e8eb7b84&scoped=true&lang=css */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/RCDashboard/ReportingV2/Documentation/NS2_docs.vue?vue&type=style&index=0&id=e8eb7b84&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NS2_docs_vue_vue_type_style_index_0_id_e8eb7b84_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NS2_docs_vue_vue_type_style_index_0_id_e8eb7b84_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/RCDashboard/ReportingV2/Documentation/NS2_docs.vue":
/*!************************************************************************************!*\
  !*** ./resources/js/components/RCDashboard/ReportingV2/Documentation/NS2_docs.vue ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _NS2_docs_vue_vue_type_template_id_e8eb7b84_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NS2_docs.vue?vue&type=template&id=e8eb7b84&scoped=true */ "./resources/js/components/RCDashboard/ReportingV2/Documentation/NS2_docs.vue?vue&type=template&id=e8eb7b84&scoped=true");
/* harmony import */ var _NS2_docs_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NS2_docs.vue?vue&type=script&lang=js */ "./resources/js/components/RCDashboard/ReportingV2/Documentation/NS2_docs.vue?vue&type=script&lang=js");
/* harmony import */ var _NS2_docs_vue_vue_type_style_index_0_id_e8eb7b84_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NS2_docs.vue?vue&type=style&index=0&id=e8eb7b84&scoped=true&lang=css */ "./resources/js/components/RCDashboard/ReportingV2/Documentation/NS2_docs.vue?vue&type=style&index=0&id=e8eb7b84&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _NS2_docs_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _NS2_docs_vue_vue_type_template_id_e8eb7b84_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _NS2_docs_vue_vue_type_template_id_e8eb7b84_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "e8eb7b84",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/RCDashboard/ReportingV2/Documentation/NS2_docs.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/RCDashboard/ReportingV2/Documentation/NS2_docs.vue?vue&type=script&lang=js":
/*!************************************************************************************************************!*\
  !*** ./resources/js/components/RCDashboard/ReportingV2/Documentation/NS2_docs.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NS2_docs_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NS2_docs.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/RCDashboard/ReportingV2/Documentation/NS2_docs.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NS2_docs_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/RCDashboard/ReportingV2/Documentation/NS2_docs.vue?vue&type=style&index=0&id=e8eb7b84&scoped=true&lang=css":
/*!********************************************************************************************************************************************!*\
  !*** ./resources/js/components/RCDashboard/ReportingV2/Documentation/NS2_docs.vue?vue&type=style&index=0&id=e8eb7b84&scoped=true&lang=css ***!
  \********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NS2_docs_vue_vue_type_style_index_0_id_e8eb7b84_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NS2_docs.vue?vue&type=style&index=0&id=e8eb7b84&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/RCDashboard/ReportingV2/Documentation/NS2_docs.vue?vue&type=style&index=0&id=e8eb7b84&scoped=true&lang=css");


/***/ }),

/***/ "./resources/js/components/RCDashboard/ReportingV2/Documentation/NS2_docs.vue?vue&type=template&id=e8eb7b84&scoped=true":
/*!******************************************************************************************************************************!*\
  !*** ./resources/js/components/RCDashboard/ReportingV2/Documentation/NS2_docs.vue?vue&type=template&id=e8eb7b84&scoped=true ***!
  \******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NS2_docs_vue_vue_type_template_id_e8eb7b84_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NS2_docs_vue_vue_type_template_id_e8eb7b84_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NS2_docs_vue_vue_type_template_id_e8eb7b84_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NS2_docs.vue?vue&type=template&id=e8eb7b84&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/RCDashboard/ReportingV2/Documentation/NS2_docs.vue?vue&type=template&id=e8eb7b84&scoped=true");


/***/ })

}]);