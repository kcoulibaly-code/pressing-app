"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_shared_RecapCorpRiskProfilAfg_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/RecapCorpRiskProfilAfg.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/RecapCorpRiskProfilAfg.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "RecapProfilRisqueAfg",
  props: {
    dossier_credit: Object,
    authcheckUsr: Object
  },
  components: {},
  data: function data() {
    return {
      partie_liee: "",
      is_risque_es: "",
      credpub0: null,
      credpub1: null,
      ongoingDesc: false,
      checkVerifyCanApprove: false,
      note_edane: "",
      credpub21: "cred_pub_tb_21",
      questions_resume: [],
      exposition_globale: 0
    };
  },
  created: function created() {
    var _this = this;
    EventBus.$on("refresh-exposition-data", function (data) {
      if (data) {
        _this.exposition_globale = (data === null || data === void 0 ? void 0 : data.montant) || 0;
      }
    });
  },
  mounted: function mounted() {
    this.initData();
  },
  methods: {
    initData: function initData() {
      var _this$dossier_credit, _this$dossier_credit2, _this$dossier_credit$, _this$dossier_credit3, _this$dossier_credit4;
      this.ongoingDesc = false;
      this.checkVerifyCanApprove = false;
      EventBus.$emit('value-updated');
      var applied_templ_name = (_this$dossier_credit = this.dossier_credit) === null || _this$dossier_credit === void 0 ? void 0 : _this$dossier_credit.applied_templ_name;
      var tbArrays = this.determineCredPubTables(applied_templ_name, this.dossier_credit);
      this.credpub0 = tbArrays[0];
      this.credpub1 = tbArrays[1];
      this.questions_resume = (_this$dossier_credit2 = this.dossier_credit) === null || _this$dossier_credit2 === void 0 || (_this$dossier_credit2 = _this$dossier_credit2[this.credpub21]) === null || _this$dossier_credit2 === void 0 ? void 0 : _this$dossier_credit2.questionsSupplementaires;
      this.note_edane = (_this$dossier_credit$ = (_this$dossier_credit3 = this.dossier_credit) === null || _this$dossier_credit3 === void 0 || (_this$dossier_credit3 = _this$dossier_credit3[this.credpub0]) === null || _this$dossier_credit3 === void 0 ? void 0 : _this$dossier_credit3.note_edane) !== null && _this$dossier_credit$ !== void 0 ? _this$dossier_credit$ : "";
      this.exposition_globale = (_this$dossier_credit4 = this.dossier_credit) === null || _this$dossier_credit4 === void 0 || (_this$dossier_credit4 = _this$dossier_credit4[this.credpub0]) === null || _this$dossier_credit4 === void 0 ? void 0 : _this$dossier_credit4.exposition_globale;
    },
    validateRp: function validateRp(rep) {
      if (this.ongoingDesc) {
        return;
      }
      this.ongoingDesc = true;
      this.$emit('validate-rp', rep);
      this.checkVerifyCanApprove = rep;
    },
    closeModal: function closeModal() {
      this.$modal.hide("confirm_voir_plus");
    },
    openModal: function openModal() {
      this.$modal.show("confirm_voir_plus");
    },
    getVoirPlusReponse: function getVoirPlusReponse(item) {
      var _item$reponse;
      if ([undefined, '', null].includes(item.reponse)) {
        return 'NON';
      }
      return item === null || item === void 0 || (_item$reponse = item.reponse) === null || _item$reponse === void 0 ? void 0 : _item$reponse.toUpperCase();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/RecapCorpRiskProfilAfg.vue?vue&type=template&id=62561186":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/RecapCorpRiskProfilAfg.vue?vue&type=template&id=62561186 ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm$dossier_credit, _vm$dossier_credit2;
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticStyle: {
      margin: "10px"
    }
  }, [[_c("h1", {
    staticClass: "text-center",
    staticStyle: {
      color: "#34495e"
    }
  }, [_vm._v("\n            Récapitulatif du Profil de Risque\n        ")]), _vm._v(" "), _c("hr"), _vm._v(" "), _vm.checkVerifyCanApprove ? [_vm._m(0)] : _c("div", [_c("table", {
    staticClass: "table"
  }, [_c("tbody", [_c("tr", [_c("th", {
    staticClass: "col-8",
    attrs: {
      scope: "row"
    }
  }, [_vm._v("Type de Clientèle")]), _vm._v(" "), _c("td", {
    staticClass: "col-4",
    attrs: {
      scope: "row"
    }
  }, [_vm._v("\n                            " + _vm._s((_vm$dossier_credit = _vm.dossier_credit) === null || _vm$dossier_credit === void 0 || (_vm$dossier_credit = _vm$dossier_credit[_vm.credpub0]) === null || _vm$dossier_credit === void 0 ? void 0 : _vm$dossier_credit.type_de_clientele) + "\n                        ")])]), _vm._v(" "), _c("tr", [_c("th", {
    attrs: {
      scope: "row"
    }
  }, [_vm._v("Notation/Cotation")]), _vm._v(" "), _c("td", {
    attrs: {
      scope: "row"
    }
  }, [_vm._v("\n                            " + _vm._s(_vm.note_edane) + "\n                        ")])]), _vm._v(" "), _c("tr", [_c("th", {
    attrs: {
      scope: "row"
    }
  }, [_vm._v("Exposition à autoriser")]), _vm._v(" "), _c("td", {
    attrs: {
      scope: "row"
    }
  }, [_vm._v("\n                            " + _vm._s(_vm._f("formatNumber")((_vm$dossier_credit2 = _vm.dossier_credit) === null || _vm$dossier_credit2 === void 0 || (_vm$dossier_credit2 = _vm$dossier_credit2[_vm.credpub0]) === null || _vm$dossier_credit2 === void 0 ? void 0 : _vm$dossier_credit2.exposition_globale)) + "\n                        ")])]), _vm._v(" "), _c("tr", {
    staticStyle: {
      "text-align": "center",
      color: "red",
      cursor: "pointer"
    },
    on: {
      click: function click($event) {
        return _vm.openModal();
      }
    }
  }, [_c("th", {
    staticStyle: {
      background: "#00000012"
    },
    attrs: {
      colspan: "2",
      scope: "row"
    }
  }, [_vm._v(" -- Voir plus -- ")])])])]), _vm._v(" "), !_vm.ongoingDesc ? _c("h6", {
    staticClass: "text-center"
  }, [_vm._v("\n                Approuvez vous ce profil de risque ?\n            ")]) : _vm._e(), _vm._v(" "), !_vm.ongoingDesc ? _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-sm-6 col-md-6 col-lg-6"
  }, [_c("div", {
    staticClass: "text-center"
  }, [_c("button", {
    staticClass: "btn btn-danger",
    staticStyle: {
      width: "100%",
      height: "8vh",
      "background-color": "#e74c3c"
    },
    attrs: {
      title: "Non"
    },
    on: {
      click: function click($event) {
        return _vm.validateRp(false);
      }
    }
  }, [_c("i", {
    staticClass: "icofont icofont-close icofont-3x"
  })]), _vm._v(" "), _vm._m(1)])]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-6 col-md-6 col-lg-6"
  }, [_c("div", {
    staticClass: "text-center"
  }, [_c("button", {
    staticClass: "btn btn-success",
    staticStyle: {
      width: "100%",
      height: "8vh",
      "background-color": "#27ae60"
    },
    attrs: {
      title: "Oui"
    },
    on: {
      click: function click($event) {
        return _vm.validateRp(true);
      }
    }
  }, [_c("i", {
    staticClass: "icofont icofont-check icofont-3x"
  })]), _vm._v(" "), _vm._m(2)])])]) : _vm._e()])], _vm._v(" "), _c("modal", {
    staticClass: "pb-5",
    attrs: {
      name: "confirm_voir_plus",
      width: "900",
      height: "auto",
      adaptive: true,
      resizable: true
    }
  }, [_c("div", {
    staticClass: "container py-3 mb-2",
    staticStyle: {
      "max-height": "100%",
      overflow: "auto"
    }
  }, [_c("h1", {
    staticClass: "text-center",
    staticStyle: {
      color: "#34495e"
    }
  }, [_vm._v("\n                Informations supplementaires\n            ")]), _vm._v(" "), _c("hr"), _vm._v(" "), _c("table", {
    staticClass: "table"
  }, [_c("tbody", _vm._l(_vm.questions_resume, function (qst) {
    return _c("tr", {
      key: qst.id
    }, [_c("th", {
      staticClass: "col-10",
      attrs: {
        scope: "row"
      }
    }, [_vm._v(" " + _vm._s(qst === null || qst === void 0 ? void 0 : qst.libelle) + " ")]), _vm._v(" "), _c("td", {
      staticClass: "col-2",
      staticStyle: {
        "align-content": "center"
      },
      attrs: {
        scope: "row"
      }
    }, [_vm._v("\n                            " + _vm._s(_vm.getVoirPlusReponse(qst)) + "\n                        ")])]);
  }), 0)]), _vm._v(" "), _c("div", {
    staticClass: "d-flex justify-content-end"
  }, [_c("button", {
    staticClass: "btn border-none",
    staticStyle: {
      "background-color": "rgb(156 166 177) !important",
      color: "white"
    },
    on: {
      click: function click($event) {
        return _vm.closeModal();
      }
    }
  }, [_vm._v("Fermer")])])])])], 2);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "d-flex justify-content-center text-center align-items-center text-muted py-4"
  }, [_c("div", [_c("span", {
    staticClass: "spinner-border spinner-border"
  }), _vm._v(" "), _c("h5", [_vm._v("\n                        Chargement des données en cours ... "), _c("br"), _vm._v("\n                        Ceci peut prendre un peu de temps\n                    ")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("b", [_vm._v("Non")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("b", [_vm._v("Oui")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/components/shared/RecapCorpRiskProfilAfg.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/components/shared/RecapCorpRiskProfilAfg.vue ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _RecapCorpRiskProfilAfg_vue_vue_type_template_id_62561186__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RecapCorpRiskProfilAfg.vue?vue&type=template&id=62561186 */ "./resources/js/components/shared/RecapCorpRiskProfilAfg.vue?vue&type=template&id=62561186");
/* harmony import */ var _RecapCorpRiskProfilAfg_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RecapCorpRiskProfilAfg.vue?vue&type=script&lang=js */ "./resources/js/components/shared/RecapCorpRiskProfilAfg.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _RecapCorpRiskProfilAfg_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _RecapCorpRiskProfilAfg_vue_vue_type_template_id_62561186__WEBPACK_IMPORTED_MODULE_0__.render,
  _RecapCorpRiskProfilAfg_vue_vue_type_template_id_62561186__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/shared/RecapCorpRiskProfilAfg.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/shared/RecapCorpRiskProfilAfg.vue?vue&type=script&lang=js":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/shared/RecapCorpRiskProfilAfg.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RecapCorpRiskProfilAfg_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RecapCorpRiskProfilAfg.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/RecapCorpRiskProfilAfg.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RecapCorpRiskProfilAfg_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/shared/RecapCorpRiskProfilAfg.vue?vue&type=template&id=62561186":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/shared/RecapCorpRiskProfilAfg.vue?vue&type=template&id=62561186 ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RecapCorpRiskProfilAfg_vue_vue_type_template_id_62561186__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RecapCorpRiskProfilAfg_vue_vue_type_template_id_62561186__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RecapCorpRiskProfilAfg_vue_vue_type_template_id_62561186__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RecapCorpRiskProfilAfg.vue?vue&type=template&id=62561186 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/RecapCorpRiskProfilAfg.vue?vue&type=template&id=62561186");


/***/ })

}]);