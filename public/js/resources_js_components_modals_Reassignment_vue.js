"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_modals_Reassignment_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/modals/Reassignment.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/modals/Reassignment.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _workflow_AutocompleteSearch_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../workflow/AutocompleteSearch.vue */ "./resources/js/components/workflow/AutocompleteSearch.vue");
/* harmony import */ var _services_ebapis_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/ebapis.service */ "./resources/js/services/ebapis.service.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Reassignement",
  props: {
    dossier_credit: Object
  },
  components: {
    AutocompleteSearch: _workflow_AutocompleteSearch_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    var _process$env$MIX_ENTI;
    return {
      users: [],
      ebapisHost: _services_ebapis_service__WEBPACK_IMPORTED_MODULE_1__["default"].host,
      editor: {},
      substitute: null,
      // Changed from {} to null
      start: null,
      end: null,
      num_doss: "",
      on_save: false,
      unavailabilityType: "",
      MIX_ENTITY: (_process$env$MIX_ENTI = "AFG") !== null && _process$env$MIX_ENTI !== void 0 ? _process$env$MIX_ENTI : ""
    };
  },
  mounted: function mounted() {
    this.loadEditorDoss();
  },
  methods: {
    loadEditorDoss: function loadEditorDoss() {
      var _this = this;
      this.$axios.post(this.ebapisHost + 'workflowbuilder/api/v1/load-doss-editor/', {
        cred_pub_key: this.dossier_credit.cred_pub_key
      }).then(function (res) {
        var data = res.data;
        _this.editor = data.user;
      })["catch"](function (err) {
        _this.$toasted.show(err.message);
        console.error(err);
      });
    },
    affectDossierToReferent: function affectDossierToReferent() {
      var _this$editor,
        _this$substitute,
        _this2 = this;
      if (!this.substitute) {
        this.$toasted.error('Veuillez saisir l\'e-mail de votre collaborateur', {
          duration: 15000
        });
        return;
      }
      this.$confirm("Vous \xEAtes sur le point de modifier le monteur du dossier `".concat((_this$editor = this.editor) === null || _this$editor === void 0 ? void 0 : _this$editor.name, "` par `").concat((_this$substitute = this.substitute) === null || _this$substitute === void 0 ? void 0 : _this$substitute.name, "`. ! \xCAtes vous s\xFBr de vouloir continuer ?"), "Remplacement du monteur du dossier").then(function () {
        _this2.on_save = true;
        _this2.$axios.post(_this2.ebapisHost + 'workflowbuilder/api/v1/replace-doss-editor/', {
          cred_pub_key: _this2.dossier_credit.cred_pub_key,
          editor: _this2.editor,
          substitute: _this2.substitute,
          is_reassignment: true
        }).then(function (res) {
          var data = res.data;
          _this2.on_save = false;
          if ((data === null || data === void 0 ? void 0 : data.is_success) === true) {
            _this2.loadEditorDoss();
            _this2.$toasted.show(data.message, {
              duration: 15000
            });
            _this2.$modal.hide('reacfectation_dossier_modal');
            window.location.reload();
          } else {
            _this2.$toasted.error(data.message, {
              duration: 15000
            });
          }
        })["catch"](function (err) {
          _this2.on_save = false;
          _this2.$toasted.error(err.message, {
            duration: 8000
          });
          console.error(err);
        });
      });
    },
    handleInput: function handleInput(value) {
      // Update substitute based on autocomplete-search selection
      this.substitute = value || null;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/modals/Reassignment.vue?vue&type=template&id=2fd68a24":
/*!************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/modals/Reassignment.vue?vue&type=template&id=2fd68a24 ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _this$authenticatedUs, _this$authenticatedUs2, _this$authenticatedUs3;
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "modal-content"
  }, [_c("div", {
    staticClass: "modal-header px-3 mb-3",
    style: {
      "background-color": _vm.entityColor
    }
  }, [_c("h5", {
    staticClass: "modal-title py-2 text-white"
  }, [_vm._v("\n            Réaffectation de dossier\n        ")]), _vm._v(" "), _c("i", {
    staticClass: "icofont-close-line text-white",
    on: {
      click: function click($event) {
        return _vm.$modal.hide("reacfectation_dossier_modal");
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "modal-body",
    staticStyle: {
      padding: "10px"
    }
  }, [_c("div", {
    staticClass: "w-100 position-relative",
    staticStyle: {
      "z-index": "3000"
    }
  }, [["AFG"].includes(_vm.MIX_ENTITY) && ["THzsvqanYXFlqROQVHJt", "weu2BjZkaf0Y4tHguD2Y"].includes((_this$authenticatedUs = this.authenticatedUser) === null || _this$authenticatedUs === void 0 ? void 0 : _this$authenticatedUs.role_uuid) ? _c("div", {
    staticClass: "col-12 mb-3"
  }, [((_this$authenticatedUs2 = this.authenticatedUser) === null || _this$authenticatedUs2 === void 0 ? void 0 : _this$authenticatedUs2.role_uuid) === "weu2BjZkaf0Y4tHguD2Y" ? _c("label", {
    staticClass: "text-nowrap px-3",
    attrs: {
      "for": "caes"
    }
  }, [_vm._v("Réasigner un Assistant Clientèle (Optionnel)"), _c("span", {
    staticStyle: {
      color: "red",
      display: "none"
    }
  }, [_vm._v("*")])]) : _c("label", {
    staticClass: "text-nowrap px-3"
  }, [_vm._v("Réasigner un Gestionnaire clientèle"), _c("span", {
    staticStyle: {
      color: "red",
      display: "none"
    }
  }, [_vm._v("*")])]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [((_this$authenticatedUs3 = this.authenticatedUser) === null || _this$authenticatedUs3 === void 0 ? void 0 : _this$authenticatedUs3.role_uuid) === "weu2BjZkaf0Y4tHguD2Y" ? _c("autocomplete-search", {
    attrs: {
      items: _vm.users,
      labelKey: ["name", "role_name"],
      valueKey: "email",
      withoutEntity: true,
      withControl: true,
      roleList: ["THzsvqanYXFlqROQVHJt"],
      placeholder: "Veuillez saisir l'e-mail de votre collaborateur"
    },
    on: {
      change: _vm.handleInput
    },
    model: {
      value: _vm.substitute,
      callback: function callback($$v) {
        _vm.substitute = $$v;
      },
      expression: "substitute"
    }
  }) : _c("autocomplete-search", {
    attrs: {
      items: _vm.users,
      labelKey: ["name", "role_name"],
      valueKey: "email",
      withoutEntity: true,
      withControl: true,
      roleList: ["weu2BjZkaf0Y4tHguD2Y"],
      placeholder: "Veuillez saisir l'e-mail de votre collaborateur"
    },
    on: {
      change: _vm.handleInput
    },
    model: {
      value: _vm.substitute,
      callback: function callback($$v) {
        _vm.substitute = $$v;
      },
      expression: "substitute"
    }
  })], 1)]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "text-right p-2"
  }, [_c("button", {
    staticClass: "btn",
    staticStyle: {
      background: "#ee6a00",
      color: "white"
    },
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.affectDossierToReferent();
      }
    }
  }, [_vm._v("\n                    Affecter\n                ")])])])])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/components/modals/Reassignment.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/modals/Reassignment.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Reassignment_vue_vue_type_template_id_2fd68a24__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Reassignment.vue?vue&type=template&id=2fd68a24 */ "./resources/js/components/modals/Reassignment.vue?vue&type=template&id=2fd68a24");
/* harmony import */ var _Reassignment_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Reassignment.vue?vue&type=script&lang=js */ "./resources/js/components/modals/Reassignment.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Reassignment_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Reassignment_vue_vue_type_template_id_2fd68a24__WEBPACK_IMPORTED_MODULE_0__.render,
  _Reassignment_vue_vue_type_template_id_2fd68a24__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/modals/Reassignment.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/modals/Reassignment.vue?vue&type=script&lang=js":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/modals/Reassignment.vue?vue&type=script&lang=js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Reassignment_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Reassignment.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/modals/Reassignment.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Reassignment_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/modals/Reassignment.vue?vue&type=template&id=2fd68a24":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/modals/Reassignment.vue?vue&type=template&id=2fd68a24 ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Reassignment_vue_vue_type_template_id_2fd68a24__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Reassignment_vue_vue_type_template_id_2fd68a24__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Reassignment_vue_vue_type_template_id_2fd68a24__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Reassignment.vue?vue&type=template&id=2fd68a24 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/modals/Reassignment.vue?vue&type=template&id=2fd68a24");


/***/ })

}]);