"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_workflow_WorkflowHeader_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/workflow/WorkflowHeader.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/workflow/WorkflowHeader.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/workflow/WorkflowHeader.vue?vue&type=template&id=7abed5be&scoped=true":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/workflow/WorkflowHeader.vue?vue&type=template&id=7abed5be&scoped=true ***!
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
  return _c("div", [_c("div", {
    staticClass: "container-fluid"
  }, [_vm.isLoading === true ? _c("loader") : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "row bg-light",
    staticStyle: {
      "padding-top": "10px",
      "padding-bottom": "10px",
      position: "fixed",
      "z-index": "4",
      width: "100%",
      "box-shadow": "0px 0px 2px 0px #7f8c8d"
    }
  }, [_c("div", {
    staticClass: "col-1"
  }, [_c("router-link", {
    attrs: {
      to: {
        name: "dashboard"
      }
    }
  }, [_c("i", {
    staticClass: "icofont icofont-arrow-left icofont-2x"
  })])], 1), _vm._v(" "), _c("div", {
    staticClass: "col-2 title",
    staticStyle: {
      "font-weight": "bold",
      "text-transform": "uppercase"
    }
  }, [_c("router-link", {
    attrs: {
      to: {
        name: "dashboard"
      }
    }
  }, [_c("i", {
    staticClass: "icofont icofont-gear icofont-1x",
    staticStyle: {
      color: "#74a2f6"
    }
  }), _vm._v(" Workflow Builder\n                ")])], 1), _vm._v(" "), _c("div", {
    staticClass: "col-6 btn-group"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formSearch,
      expression: "formSearch"
    }],
    staticClass: "input-elevated form-control",
    staticStyle: {
      width: "550px"
    },
    attrs: {
      type: "text",
      autocomplete: "off",
      placeholder: "Recherche ..."
    },
    domProps: {
      value: _vm.formSearch
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.formSearch = $event.target.value;
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-3 user"
  }, [_c("div", {
    staticClass: "text-center",
    staticStyle: {
      "border-radius": "80px",
      "float": "right",
      width: "30px",
      height: "30px",
      "margin-left": "15px",
      "padding-top": "2px",
      "box-shadow": "0px 0px 5px 0px grey",
      cursor: "pointer"
    },
    on: {
      click: function click($event) {
        return _vm.showMenuOption();
      }
    }
  }, [_vm._v("\n                    " + _vm._s(_vm.textTruncate(_vm.name_first_letter)) + "\n                ")]), _vm._v(" "), _c("span", {
    staticStyle: {
      "float": "right",
      "font-size": "13px"
    },
    on: {
      click: function click($event) {
        return _vm.showMenuOption();
      }
    }
  }, [_c("b", {
    staticStyle: {
      "float": "right"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.textTruncate(_vm.name)) + "\n                    ")]), _c("br"), _vm._v(_vm._s(_vm.textTruncate(_vm.role)))])]), _vm._v(" "), _vm.showOptionState === true ? _c("account", {
    attrs: {
      name: _vm.name,
      email: _vm.email,
      role_uuid: _vm.role_uuid,
      name_first_letter: _vm.name_first_letter,
      role: _vm.role,
      other_roles: _vm.other_roles
    },
    on: {
      role: _vm.receprole,
      user: _vm.recepuser
    }
  }) : _vm._e()], 1), _vm._v(" "), _vm.theOneToBeProduced != null ? _c("div", [_c("slider", {
    attrs: {
      parseables: _vm.theOneToBeProduced.parseables,
      can_create: _vm.canCreate,
      to_be_produced: _vm.theOneToBeProduced
    },
    on: {
      "on-startcredit": _vm.startCreating
    }
  })], 1) : _vm._e(), _vm._v(" "), _vm.what_tobe_produced === "DISPATCHING" ? _c("div", [_c("div", {
    staticClass: "container-fluid bg-light",
    staticStyle: {
      height: "50px"
    }
  }, [_c("div", {
    staticClass: "container"
  }, [_c("div", {
    staticClass: "row"
  }, [_vm.canCreate != true ? _c("div", {
    staticClass: "spacerOne"
  }) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "col-12 p-2"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("dispatching", {
    attrs: {
      doss: _vm.dossiers_credit
    }
  })], 1)])])])])]) : _vm._e()], 1)]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/components/workflow/WorkflowHeader.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/workflow/WorkflowHeader.vue ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _WorkflowHeader_vue_vue_type_template_id_7abed5be_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WorkflowHeader.vue?vue&type=template&id=7abed5be&scoped=true */ "./resources/js/components/workflow/WorkflowHeader.vue?vue&type=template&id=7abed5be&scoped=true");
/* harmony import */ var _WorkflowHeader_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WorkflowHeader.vue?vue&type=script&lang=js */ "./resources/js/components/workflow/WorkflowHeader.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _WorkflowHeader_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _WorkflowHeader_vue_vue_type_template_id_7abed5be_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _WorkflowHeader_vue_vue_type_template_id_7abed5be_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "7abed5be",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/workflow/WorkflowHeader.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/workflow/WorkflowHeader.vue?vue&type=script&lang=js":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/workflow/WorkflowHeader.vue?vue&type=script&lang=js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WorkflowHeader_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./WorkflowHeader.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/workflow/WorkflowHeader.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WorkflowHeader_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/workflow/WorkflowHeader.vue?vue&type=template&id=7abed5be&scoped=true":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/workflow/WorkflowHeader.vue?vue&type=template&id=7abed5be&scoped=true ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WorkflowHeader_vue_vue_type_template_id_7abed5be_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WorkflowHeader_vue_vue_type_template_id_7abed5be_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WorkflowHeader_vue_vue_type_template_id_7abed5be_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./WorkflowHeader.vue?vue&type=template&id=7abed5be&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/workflow/WorkflowHeader.vue?vue&type=template&id=7abed5be&scoped=true");


/***/ })

}]);