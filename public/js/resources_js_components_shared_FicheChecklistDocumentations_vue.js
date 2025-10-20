"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_shared_FicheChecklistDocumentations_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/FicheChecklistDocumentations.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/FicheChecklistDocumentations.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _contreanalyse_nsia_filiale_dajc_DAJC_PR_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../contreanalyse/nsia/filiale/dajc/DAJC-PR.vue */ "./resources/js/components/contreanalyse/nsia/filiale/dajc/DAJC-PR.vue");

// import DAJC0 from "../offview/bank/nsia/dajc/DAJC0.vue";

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "FicheChecklistDocumentations",
  props: {
    dossier_credit: Object
  },
  components: {
    tb200601: _contreanalyse_nsia_filiale_dajc_DAJC_PR_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  created: function created() {
    var _this$dossier_credit,
      _this = this;
    this.meta_data = {
      cred_pub_key: (_this$dossier_credit = this.dossier_credit) === null || _this$dossier_credit === void 0 ? void 0 : _this$dossier_credit.cred_pub_key,
      dossier_credit: this.dossier_credit
    };
    EventBus.$on("savedclosed-table", function (a) {
      if (!a.status) {
        var _this$dossier_credit2;
        var tb_name = a.tb_name.replace((_this$dossier_credit2 = _this.dossier_credit) === null || _this$dossier_credit2 === void 0 ? void 0 : _this$dossier_credit2.cred_pub_key, "");
      }
    });

    // if (this.dossier_credit?.service_juridique) {
    //     this.edit_mode = false;

    //     if (this.dossier_credit?.instance_fiches) {
    //         this.edit_mode = true;
    //     }

    // }
  },
  mounted: function mounted() {},
  data: function data() {
    return {
      meta_data: []
      // edit_mode: true,
    };
  },
  methods: {
    setAutosaving: function setAutosaving() {
      EventBus.$emit("autosaving-updated");
    },
    loadShell: function loadShell() {
      EventBus.$emit("value-updated");
    } // setEditMode() {
    //     EventBus.$emit("value-updated");
    //     // this.edit_mode = !this.edit_mode;
    // },
  },
  computed: {

    // disable_edit_mode() {

    //     if (this.dossier_credit?.service_juridique) {
    //         this.edit_mode = false;

    //         if (this.dossier_credit?.instance_fiches) {
    //             this.edit_mode = true;
    //         }

    //     }

    //     return this.edit_mode

    // }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/FicheChecklistDocumentations.vue?vue&type=template&id=96353bde":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/FicheChecklistDocumentations.vue?vue&type=template&id=96353bde ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm$entityType, _vm$realEntity;
  var _vm = this,
    _c = _vm._self._c;
  return ((_vm$entityType = _vm.entityType) === null || _vm$entityType === void 0 ? void 0 : _vm$entityType.toUpperCase()) === "BANK" ? _c("div", [_c("div", {
    staticClass: "p-2 d-flex justify-content-between align-items-center",
    style: {
      "background-color": _vm.entityColor,
      color: "white"
    }
  }, [_c("h4", {
    staticClass: "m-0"
  }, [_vm._v("Checklist des documentations")]), _vm._v(" "), _c("div", [_c("i", {
    staticClass: "icofont-close",
    staticStyle: {
      "font-size": "1.2rem"
    },
    attrs: {
      title: "Fermer",
      role: "button"
    },
    on: {
      click: function click($event) {
        return _vm.$modal.hide("fiche_checklist_documentations");
      }
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "p-3",
    staticStyle: {
      "min-height": "80vh",
      "max-height": "90vh",
      overflow: "auto"
    }
  }, [((_vm$realEntity = _vm.realEntity) === null || _vm$realEntity === void 0 ? void 0 : _vm$realEntity.toUpperCase()) == "NSIA" ? _c("tb200601", {
    attrs: {
      tb_name: "tb200601",
      meta_data: _vm.meta_data,
      tb_display_name: "DAJC PR"
    },
    on: {
      autosaving: _vm.setAutosaving,
      "load-shell": _vm.loadShell
    }
  }) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "text-right w-100 p-2",
    staticStyle: {
      position: "absolute",
      bottom: "0",
      right: "0",
      background: "white"
    }
  }, [_c("button", {
    staticClass: "btn",
    staticStyle: {
      background: "rgb(44, 62, 80)",
      color: "white"
    },
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.$modal.hide("fiche_checklist_documentations");
      }
    }
  }, [_vm._v("Fermer")])])], 1)]) : _vm._e();
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/components/shared/FicheChecklistDocumentations.vue":
/*!*************************************************************************!*\
  !*** ./resources/js/components/shared/FicheChecklistDocumentations.vue ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _FicheChecklistDocumentations_vue_vue_type_template_id_96353bde__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FicheChecklistDocumentations.vue?vue&type=template&id=96353bde */ "./resources/js/components/shared/FicheChecklistDocumentations.vue?vue&type=template&id=96353bde");
/* harmony import */ var _FicheChecklistDocumentations_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FicheChecklistDocumentations.vue?vue&type=script&lang=js */ "./resources/js/components/shared/FicheChecklistDocumentations.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FicheChecklistDocumentations_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _FicheChecklistDocumentations_vue_vue_type_template_id_96353bde__WEBPACK_IMPORTED_MODULE_0__.render,
  _FicheChecklistDocumentations_vue_vue_type_template_id_96353bde__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/shared/FicheChecklistDocumentations.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/shared/FicheChecklistDocumentations.vue?vue&type=script&lang=js":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/shared/FicheChecklistDocumentations.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FicheChecklistDocumentations_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FicheChecklistDocumentations.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/FicheChecklistDocumentations.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FicheChecklistDocumentations_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/shared/FicheChecklistDocumentations.vue?vue&type=template&id=96353bde":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/shared/FicheChecklistDocumentations.vue?vue&type=template&id=96353bde ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FicheChecklistDocumentations_vue_vue_type_template_id_96353bde__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FicheChecklistDocumentations_vue_vue_type_template_id_96353bde__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FicheChecklistDocumentations_vue_vue_type_template_id_96353bde__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FicheChecklistDocumentations.vue?vue&type=template&id=96353bde */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/FicheChecklistDocumentations.vue?vue&type=template&id=96353bde");


/***/ })

}]);