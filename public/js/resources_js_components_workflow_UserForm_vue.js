"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_workflow_UserForm_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/workflow/UserForm.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/workflow/UserForm.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    type: String,
    users: Array
  },
  data: function data() {
    return {
      selectedUser: {}
    };
  },
  methods: {
    selectUser: function selectUser() {
      this.$emit('selectedUser', this.selectedUser);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/workflow/UserForm.vue?vue&type=template&id=f8f34d38":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/workflow/UserForm.vue?vue&type=template&id=f8f34d38 ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "row"
  }, [_c("div", {
    staticClass: "my-3 col-6"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Sender ")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.selectedUser.user,
      expression: "selectedUser.user"
    }],
    staticClass: "form-select",
    attrs: {
      name: "sender_id",
      id: "sender_id"
    },
    on: {
      change: [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.selectedUser, "user", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }, _vm.selectUser]
    }
  }, [_c("option", {
    domProps: {
      value: {}
    }
  }, [_vm._v("Choisir un utilisateur ...")]), _vm._v(" "), _vm._l(_vm.users, function (user) {
    return _c("option", {
      key: user.name + user.id,
      domProps: {
        value: user
      }
    }, [_vm._v("\n        " + _vm._s(user.name) + " ( " + _vm._s(user.role_name) + " )\n      ")]);
  })], 2)]), _vm._v(" "), _c("div", {
    staticClass: "my-3 col-6"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Role")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.selectedUser.sender_role,
      expression: "selectedUser.sender_role"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      readonly: "",
      id: "sender_role",
      placeholder: "Sender role"
    },
    domProps: {
      value: _vm.selectedUser.sender_role
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.selectedUser, "sender_role", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "my-3 col-6"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Tâche")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.selectedUser.must_produce,
      expression: "selectedUser.must_produce"
    }],
    staticClass: "form-control",
    attrs: {
      readonly: "",
      type: "text",
      id: "sender_must_produce",
      placeholder: "Sender must produce"
    },
    domProps: {
      value: _vm.selectedUser.must_produce
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.selectedUser, "must_produce", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "my-3 col-6"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Contact WhatsApp")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.selectedUser.contact_whatsap,
      expression: "selectedUser.contact_whatsap"
    }],
    staticClass: "form-control",
    attrs: {
      readonly: "",
      type: "text",
      id: "sender_contact_whatsap",
      placeholder: "Sender contact whatsApp"
    },
    domProps: {
      value: _vm.selectedUser.contact_whatsap
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.selectedUser, "contact_whatsap", $event.target.value);
      }
    }
  })])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/components/workflow/UserForm.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/workflow/UserForm.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _UserForm_vue_vue_type_template_id_f8f34d38__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserForm.vue?vue&type=template&id=f8f34d38 */ "./resources/js/components/workflow/UserForm.vue?vue&type=template&id=f8f34d38");
/* harmony import */ var _UserForm_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserForm.vue?vue&type=script&lang=js */ "./resources/js/components/workflow/UserForm.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UserForm_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _UserForm_vue_vue_type_template_id_f8f34d38__WEBPACK_IMPORTED_MODULE_0__.render,
  _UserForm_vue_vue_type_template_id_f8f34d38__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/workflow/UserForm.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/workflow/UserForm.vue?vue&type=script&lang=js":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/workflow/UserForm.vue?vue&type=script&lang=js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserForm_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserForm.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/workflow/UserForm.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserForm_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/workflow/UserForm.vue?vue&type=template&id=f8f34d38":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/workflow/UserForm.vue?vue&type=template&id=f8f34d38 ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UserForm_vue_vue_type_template_id_f8f34d38__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UserForm_vue_vue_type_template_id_f8f34d38__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UserForm_vue_vue_type_template_id_f8f34d38__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserForm.vue?vue&type=template&id=f8f34d38 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/workflow/UserForm.vue?vue&type=template&id=f8f34d38");


/***/ })

}]);