"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_shared_afg_Simulateur_SimulationActionsBtn_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/Simulateur/SimulationActionsBtn.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/Simulateur/SimulationActionsBtn.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'SimulationActionsBtn',
  props: {
    canEdit: {
      type: Boolean,
      "default": false
    },
    canImport: {
      type: Boolean,
      "default": false
    },
    canSave: {
      type: Boolean,
      "default": false
    },
    canPrint: {
      type: Boolean,
      "default": false
    },
    hasChanged: {
      type: Boolean,
      "default": false
    },
    defaultEditMode: {
      type: Boolean,
      "default": false
    }
  },
  data: function data() {
    return {
      isEditMode: this.defaultEditMode
    };
  },
  computed: {
    showActions: function showActions() {
      return this.canEdit || this.canImport || this.canSave || this.canPrint;
    }
  },
  methods: {
    emitAction: function emitAction(action) {
      var value = null;
      switch (action) {
        case 'edit':
          this.isEditMode = !this.isEditMode;
          value = this.isEditMode;
          break;
      }
      this.$emit('action', {
        action: action,
        value: value
      });
    }
  },
  watch: {
    defaultEditMode: function defaultEditMode(newValue) {
      this.isEditMode = newValue;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/Simulateur/SimulationActionsBtn.vue?vue&type=template&id=2c8c6f48&scoped=true":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/Simulateur/SimulationActionsBtn.vue?vue&type=template&id=2c8c6f48&scoped=true ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.showActions ? _c("div", {
    staticClass: "printer-skip"
  }, [_c("div", {
    staticClass: "d-flex justify-content-center align-items-center gap-2"
  }, [_vm.canEdit ? _c("button", {
    staticClass: "d-flex gap-1 btn btn-sm align-items-center bg-deep-blue px-2",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.emitAction("edit");
      }
    }
  }, [!_vm.isEditMode ? _c("i", {
    staticClass: "icofont icofont-paperclip",
    attrs: {
      title: "Edit mode désactivé"
    }
  }) : _c("i", {
    staticClass: "icofont icofont-pencil",
    attrs: {
      title: "Edit mode activé"
    }
  }), _vm._v(" "), _c("span", [_vm._v("Edit mode " + _vm._s(_vm.isEditMode ? "désactivé" : "activé"))])]) : _vm._e(), _vm._v(" "), _vm.canImport ? _c("button", {
    staticClass: "d-flex gap-1 btn btn-sm align-items-center bg-deep-blue px-2",
    attrs: {
      type: "button",
      title: "Importer dans le dossier"
    },
    on: {
      click: function click($event) {
        return _vm.emitAction("import");
      }
    }
  }, [_c("i", {
    staticClass: "icofont-download",
    staticStyle: {
      color: "white !important"
    }
  }), _vm._v(" "), _c("span", [_vm._v("Importer dans le dossier")])]) : _vm._e(), _vm._v(" "), _vm.canSave ? _c("button", {
    staticClass: "d-flex gap-1 btn btn-sm align-items-center bg-deep-blue px-2 position-relative",
    attrs: {
      type: "button",
      title: "Enregistrer"
    },
    on: {
      click: function click($event) {
        return _vm.emitAction("save");
      }
    }
  }, [_c("i", {
    staticClass: "icofont icofont-save"
  }), _vm._v(" "), _vm.hasChanged ? _c("span", {
    staticClass: "position-absolute translate-middle bg-danger border border-light rounded-circle",
    staticStyle: {
      padding: "0.4rem",
      right: "-10px",
      top: "0"
    }
  }, [_c("span", {
    staticClass: "visually-hidden"
  }, [_vm._v("Changements non enregistrés")])]) : _vm._e(), _vm._v(" "), _c("span", [_vm._v("Enregistrer")])]) : _vm._e(), _vm._v(" "), _vm.canPrint ? _c("button", {
    staticClass: "d-flex gap-1 btn btn-sm align-items-center bg-deep-blue px-2",
    attrs: {
      type: "button",
      title: "Imprimer"
    },
    on: {
      click: function click($event) {
        return _vm.emitAction("print");
      }
    }
  }, [_c("i", {
    staticClass: "icofont-print"
  }), _vm._v(" "), _c("span", [_vm._v("Imprimer")])]) : _vm._e()])]) : _vm._e();
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/components/shared/afg/Simulateur/SimulationActionsBtn.vue":
/*!********************************************************************************!*\
  !*** ./resources/js/components/shared/afg/Simulateur/SimulationActionsBtn.vue ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SimulationActionsBtn_vue_vue_type_template_id_2c8c6f48_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SimulationActionsBtn.vue?vue&type=template&id=2c8c6f48&scoped=true */ "./resources/js/components/shared/afg/Simulateur/SimulationActionsBtn.vue?vue&type=template&id=2c8c6f48&scoped=true");
/* harmony import */ var _SimulationActionsBtn_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SimulationActionsBtn.vue?vue&type=script&lang=js */ "./resources/js/components/shared/afg/Simulateur/SimulationActionsBtn.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SimulationActionsBtn_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _SimulationActionsBtn_vue_vue_type_template_id_2c8c6f48_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _SimulationActionsBtn_vue_vue_type_template_id_2c8c6f48_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "2c8c6f48",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/shared/afg/Simulateur/SimulationActionsBtn.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/shared/afg/Simulateur/SimulationActionsBtn.vue?vue&type=script&lang=js":
/*!********************************************************************************************************!*\
  !*** ./resources/js/components/shared/afg/Simulateur/SimulationActionsBtn.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SimulationActionsBtn_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SimulationActionsBtn.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/Simulateur/SimulationActionsBtn.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SimulationActionsBtn_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/shared/afg/Simulateur/SimulationActionsBtn.vue?vue&type=template&id=2c8c6f48&scoped=true":
/*!**************************************************************************************************************************!*\
  !*** ./resources/js/components/shared/afg/Simulateur/SimulationActionsBtn.vue?vue&type=template&id=2c8c6f48&scoped=true ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SimulationActionsBtn_vue_vue_type_template_id_2c8c6f48_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SimulationActionsBtn_vue_vue_type_template_id_2c8c6f48_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SimulationActionsBtn_vue_vue_type_template_id_2c8c6f48_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SimulationActionsBtn.vue?vue&type=template&id=2c8c6f48&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/Simulateur/SimulationActionsBtn.vue?vue&type=template&id=2c8c6f48&scoped=true");


/***/ })

}]);