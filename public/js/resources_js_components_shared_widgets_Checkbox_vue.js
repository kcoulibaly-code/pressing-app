"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_shared_widgets_Checkbox_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/widgets/Checkbox.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/widgets/Checkbox.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    value: Boolean,
    initialState: false,
    isRadio: true
  },
  data: function data() {
    return {
      isChecked: this.value || false
    };
  },
  mounted: function mounted() {},
  methods: {
    checkboxValCashCall: function checkboxValCashCall(value, index) {

      // this.formDataToBeWatched.pret_couvert_cash_call = value;
    },
    toggleCheckbox: function toggleCheckbox() {
      this.isChecked = !this.isChecked;
      this.$emit('checkbox-event', this.isChecked); // Émettre un événement pour mettre à jour la valeur parente si nécessaire
    },
    handleRadio: function handleRadio(event) {
      console.log("event", event);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/widgets/Checkbox.vue?vue&type=template&id=4621869c":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/widgets/Checkbox.vue?vue&type=template&id=4621869c ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("input", {
    attrs: {
      type: "checkbox"
    },
    domProps: {
      checked: _vm.isChecked
    },
    on: {
      change: _vm.toggleCheckbox
    }
  }), _vm._v(" "), _vm.isRadio == true ? _c("div", {
    staticClass: "m-2 d-flex mr-4"
  }, [_c("input", {
    staticStyle: {
      width: "20px",
      height: "20px"
    },
    attrs: {
      type: "checkbox"
    },
    domProps: {
      checked: _vm.value == "Oui",
      value: "Oui"
    },
    on: {
      change: function change($event) {
        return _vm.handleRadio($event);
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "text-nowrap"
  }, [_vm._v(" Oui")]), _vm._v(" "), _c("input", {
    staticStyle: {
      width: "20px",
      height: "20px"
    },
    attrs: {
      type: "checkbox"
    },
    domProps: {
      checked: _vm.value == "Non",
      value: "Non"
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "text-nowrap"
  }, [_vm._v(" Non")])]) : _c("div", {
    staticClass: "m-2 d-flex mr-4"
  })]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/components/shared/widgets/Checkbox.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/shared/widgets/Checkbox.vue ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Checkbox_vue_vue_type_template_id_4621869c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Checkbox.vue?vue&type=template&id=4621869c */ "./resources/js/components/shared/widgets/Checkbox.vue?vue&type=template&id=4621869c");
/* harmony import */ var _Checkbox_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Checkbox.vue?vue&type=script&lang=js */ "./resources/js/components/shared/widgets/Checkbox.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Checkbox_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Checkbox_vue_vue_type_template_id_4621869c__WEBPACK_IMPORTED_MODULE_0__.render,
  _Checkbox_vue_vue_type_template_id_4621869c__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/shared/widgets/Checkbox.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/shared/widgets/Checkbox.vue?vue&type=script&lang=js":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/shared/widgets/Checkbox.vue?vue&type=script&lang=js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Checkbox_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Checkbox.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/widgets/Checkbox.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Checkbox_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/shared/widgets/Checkbox.vue?vue&type=template&id=4621869c":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/shared/widgets/Checkbox.vue?vue&type=template&id=4621869c ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Checkbox_vue_vue_type_template_id_4621869c__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Checkbox_vue_vue_type_template_id_4621869c__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Checkbox_vue_vue_type_template_id_4621869c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Checkbox.vue?vue&type=template&id=4621869c */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/widgets/Checkbox.vue?vue&type=template&id=4621869c");


/***/ })

}]);