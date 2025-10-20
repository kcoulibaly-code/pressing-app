"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_offview_bank_nsia_memo_annexes_T5001_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/annexes/T5001.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/annexes/T5001.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "",
  props: {
    dossier_credit: String
  },
  data: function data() {
    return {
      date: new Date().getFullYear(),
      esrisk: [{
        interv: "100-150",
        categorie: "C Risques faibles"
      }, {
        interv: "151-200",
        categorie: "B- Risques moyen"
      }, {
        interv: "201-250",
        categorie: "B+ Risques moyen (Nécessitant vigilance)"
      }, {
        interv: "251-300",
        categorie: "A Risques elevés"
      }],
      items: [{
        critere: "secteur d'activité",
        criticite: [{
          risque: "Risque faibles"
        }, {
          risque: "Risque moyens"
        }, {
          risque: "Risque elevés"
        }]
      }, {
        critere: "taille du prêt",
        criticite: [{
          risque: "Risque faibles"
        }, {
          risque: "Risque moyens"
        }, {
          risque: "Risque elevés"
        }]
      }, {
        critere: "durée du prêt",
        criticite: [{
          risque: "Risque faibles"
        }, {
          risque: "Risque moyens"
        }, {
          risque: "Risque elevés"
        }]
      }, {
        critere: "Collateral offered (garantie offerte) garentie proposée par le client peut être porteuse de risques ES pour la banque",
        criticite: [{
          risque: "Risque faibles"
        }, {
          risque: "Risque moyens"
        }, {
          risque: "Risque elevés"
        }]
      }, {
        critere: "(Le but du prêt) à quoi est destiné le financement",
        criticite: [{
          risque: "Risque faibles"
        }, {
          risque: "Risque moyens"
        }, {
          risque: "Risque elevés"
        }]
      }]
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/annexes/T5001.vue?vue&type=template&id=28b69b13":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/annexes/T5001.vue?vue&type=template&id=28b69b13 ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm$dossier_credit, _vm$dossier_credit7;
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [(_vm$dossier_credit = _vm.dossier_credit) !== null && _vm$dossier_credit !== void 0 && _vm$dossier_credit.cred_pub_tb_5001 ? _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12"
  }, [_c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-bordered p-2"
  }, [_vm._m(0), _vm._v(" "), _c("tbody", [_vm._l(_vm.items, function (item, index) {
    var _vm$dossier_credit2, _vm$dossier_credit3, _vm$dossier_credit4, _vm$dossier_credit5, _vm$dossier_credit6;
    return _c("tr", {
      key: index,
      staticStyle: {
        "vertical-align": "middle"
      }
    }, [item.critere != undefined ? _c("td", {
      staticStyle: {
        "vertical-align": "middle"
      }
    }, [_vm._v("\n                                " + _vm._s(item.critere) + "\n                            ")]) : _vm._e(), _vm._v(" "), _c("td", {
      staticClass: "p-2",
      attrs: {
        colspan: "2"
      }
    }, [_c("table", {
      staticClass: "table p-0 m-0"
    }, [_c("tr", [_c("td", [_vm._v("\n                                            " + _vm._s((_vm$dossier_credit2 = _vm.dossier_credit) === null || _vm$dossier_credit2 === void 0 ? void 0 : _vm$dossier_credit2.cred_pub_tb_5001.risque_criticite[index].risque) + " :\n                                        ")]), _vm._v(" "), _vm._l((_vm$dossier_credit3 = _vm.dossier_credit) === null || _vm$dossier_credit3 === void 0 ? void 0 : _vm$dossier_credit3.cred_pub_tb_5001.secteur_criticite[index], function (val, idx) {
      return _c("td", [val.secteur != "" ? _c("span", [_vm._v(_vm._s(val.secteur))]) : _vm._e()]);
    })], 2)])]), _vm._v(" "), _c("td", {
      staticStyle: {
        "vertical-align": "middle"
      }
    }, [_vm._v("\n                                " + _vm._s((_vm$dossier_credit4 = _vm.dossier_credit) === null || _vm$dossier_credit4 === void 0 ? void 0 : _vm$dossier_credit4.cred_pub_tb_5001.secteur_coefficient[index].coefficient) + "\n                            ")]), _vm._v(" "), _c("td", {
      staticStyle: {
        "vertical-align": "middle"
      }
    }, [_vm._v("\n                                " + _vm._s((_vm$dossier_credit5 = _vm.dossier_credit) === null || _vm$dossier_credit5 === void 0 ? void 0 : _vm$dossier_credit5.cred_pub_tb_5001.pourcentage_risque[index].risque) + "\n                            ")]), _vm._v(" "), _c("td", {
      staticStyle: {
        "vertical-align": "middle"
      }
    }, [_vm._v("\n                                " + _vm._s((_vm$dossier_credit6 = _vm.dossier_credit) === null || _vm$dossier_credit6 === void 0 ? void 0 : _vm$dossier_credit6.cred_pub_tb_5001.niveau_risque[index].risque) + "\n                            ")])]);
  }), _vm._v(" "), _vm._m(1), _vm._v(" "), _vm._l(_vm.esrisk, function (es, indexEs) {
    return _c("tr", {
      key: indexEs,
      staticStyle: {
        border: "none"
      }
    }, [_c("td", {
      staticClass: "fw-bold",
      staticStyle: {
        border: "none"
      }
    }, [_vm._v("E&S risk " + _vm._s(es.interv))]), _vm._v(" "), _c("td", {
      staticClass: "fw-bold",
      staticStyle: {
        border: "none"
      }
    }, [_vm._v(_vm._s(es.categorie))])]);
  }), _vm._v(" "), _c("tr", {
    staticStyle: {
      border: "none"
    }
  }, [_c("td", {
    staticClass: "fw-bold",
    staticStyle: {
      border: "none"
    }
  }, [_vm._v("Total")]), _vm._v(" "), _c("td", {
    staticStyle: {
      border: "none"
    }
  }, [_c("div", {
    staticStyle: {
      display: "flex!important",
      "align-items": "center"
    }
  }, [_vm._v("\n                                " + _vm._s((_vm$dossier_credit7 = _vm.dossier_credit) === null || _vm$dossier_credit7 === void 0 ? void 0 : _vm$dossier_credit7.cred_pub_tb_5001.total_risque) + "\n                            ")])])])], 2)])])])]) : _vm._e()]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("th", [_vm._v("Critère")]), _vm._v(" "), _c("th", {
    attrs: {
      colspan: "2"
    }
  }, [_vm._v("Criticite")]), _vm._v(" "), _c("th", [_vm._v("Coefficient")]), _vm._v(" "), _c("th", [_vm._v("Pourcentage du risque(%)")]), _vm._v(" "), _c("th", [_vm._v("Niveau du risque POIDS")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("tr", {
    staticStyle: {
      border: "none"
    }
  }, [_c("td", {
    staticStyle: {
      border: "none"
    }
  }, [_c("br")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/components/offview/bank/nsia/memo/annexes/T5001.vue":
/*!**************************************************************************!*\
  !*** ./resources/js/components/offview/bank/nsia/memo/annexes/T5001.vue ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _T5001_vue_vue_type_template_id_28b69b13__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./T5001.vue?vue&type=template&id=28b69b13 */ "./resources/js/components/offview/bank/nsia/memo/annexes/T5001.vue?vue&type=template&id=28b69b13");
/* harmony import */ var _T5001_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./T5001.vue?vue&type=script&lang=js */ "./resources/js/components/offview/bank/nsia/memo/annexes/T5001.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _T5001_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _T5001_vue_vue_type_template_id_28b69b13__WEBPACK_IMPORTED_MODULE_0__.render,
  _T5001_vue_vue_type_template_id_28b69b13__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/offview/bank/nsia/memo/annexes/T5001.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/offview/bank/nsia/memo/annexes/T5001.vue?vue&type=script&lang=js":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/offview/bank/nsia/memo/annexes/T5001.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_T5001_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./T5001.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/annexes/T5001.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_T5001_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/offview/bank/nsia/memo/annexes/T5001.vue?vue&type=template&id=28b69b13":
/*!********************************************************************************************************!*\
  !*** ./resources/js/components/offview/bank/nsia/memo/annexes/T5001.vue?vue&type=template&id=28b69b13 ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_T5001_vue_vue_type_template_id_28b69b13__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_T5001_vue_vue_type_template_id_28b69b13__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_T5001_vue_vue_type_template_id_28b69b13__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./T5001.vue?vue&type=template&id=28b69b13 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/annexes/T5001.vue?vue&type=template&id=28b69b13");


/***/ })

}]);