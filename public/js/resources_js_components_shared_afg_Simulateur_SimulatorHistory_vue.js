"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_shared_afg_Simulateur_SimulatorHistory_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/Simulateur/SimulatorHistory.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/Simulateur/SimulatorHistory.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'SimulatorHistory',
  props: {
    history: {
      type: Object,
      required: true
    },
    canDelete: {
      type: Boolean,
      "default": true
    }
  },
  methods: {
    loadHistory: function loadHistory() {
      this.$emit('load-history');
    },
    selectSimulation: function selectSimulation(simPubKey) {
      this.$emit('select-simulation', simPubKey);
    },
    deleteSimulation: function deleteSimulation(simPubKey) {
      this.$emit('delete-simulation', simPubKey);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/Simulateur/SimulatorHistory.vue?vue&type=template&id=33a515b2":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/Simulateur/SimulatorHistory.vue?vue&type=template&id=33a515b2 ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_vm.history.loading && !_vm.history.error ? _c("div", {
    staticClass: "text-center"
  }, [_vm._m(0)]) : _vm.history.error ? _c("ErrorRetry", {
    attrs: {
      error: _vm.history.error,
      retrying: _vm.history.loading
    },
    on: {
      retry: _vm.loadHistory
    }
  }) : !_vm.history.data.length ? _c("div", [_c("p", {
    staticClass: "text-center"
  }, [_vm._v("Aucune donnée disponible pour l'instant.")])]) : _c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-bordered table-hover align-middle"
  }, [_vm._m(1), _vm._v(" "), _c("tbody", _vm._l(_vm.history.data, function (item) {
    return _c("tr", {
      key: item.sim_pub_key
    }, [_c("td", {
      staticClass: "text-center"
    }, [_vm._v(_vm._s(_vm._f("formatDate")(item.created_at)))]), _vm._v(" "), _c("td", {
      staticClass: "text-center"
    }, [_vm._v(_vm._s(item.name))]), _vm._v(" "), _c("td", {
      staticClass: "text-end"
    }, [_vm._v(_vm._s(_vm._f("formatNumber")(item.caracteristiques_credit.montant_credit)))]), _vm._v(" "), _c("td", {
      staticClass: "text-center"
    }, [_c("button", {
      staticClass: "btn btn-outline-secondary btn-sm me-1",
      attrs: {
        title: "Charger cette simulation"
      },
      on: {
        click: function click($event) {
          return _vm.selectSimulation(item.sim_pub_key);
        }
      }
    }, [_c("i", {
      staticClass: "icofont-upload-alt"
    })]), _vm._v(" "), _vm.canDelete ? _c("button", {
      staticClass: "btn btn-outline-danger btn-sm",
      attrs: {
        title: "Supprimer cette simulation"
      },
      on: {
        click: function click($event) {
          return _vm.deleteSimulation(item.sim_pub_key);
        }
      }
    }, [_c("i", {
      staticClass: "icofont-trash"
    })]) : _vm._e()])]);
  }), 0)])])], 1);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "spinner-border text-deep-blue",
    attrs: {
      role: "status"
    }
  }, [_c("span", {
    staticClass: "visually-hidden"
  }, [_vm._v("Chargement...")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", {
    staticClass: "table-secondary"
  }, [_c("tr", {}, [_c("th", {
    staticClass: "text-center",
    attrs: {
      scope: "col"
    }
  }, [_vm._v("Date")]), _vm._v(" "), _c("th", {
    staticClass: "text-center",
    staticStyle: {
      "min-width": "200px"
    },
    attrs: {
      scope: "col"
    }
  }, [_vm._v("Nom")]), _vm._v(" "), _c("th", {
    staticClass: "text-end",
    attrs: {
      scope: "col"
    }
  }, [_vm._v("Montant du crédit")]), _vm._v(" "), _c("th", {
    staticClass: "text-center",
    attrs: {
      scope: "col"
    }
  }, [_vm._v("Actions")])])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/components/shared/afg/Simulateur/SimulatorHistory.vue":
/*!****************************************************************************!*\
  !*** ./resources/js/components/shared/afg/Simulateur/SimulatorHistory.vue ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SimulatorHistory_vue_vue_type_template_id_33a515b2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SimulatorHistory.vue?vue&type=template&id=33a515b2 */ "./resources/js/components/shared/afg/Simulateur/SimulatorHistory.vue?vue&type=template&id=33a515b2");
/* harmony import */ var _SimulatorHistory_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SimulatorHistory.vue?vue&type=script&lang=js */ "./resources/js/components/shared/afg/Simulateur/SimulatorHistory.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SimulatorHistory_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _SimulatorHistory_vue_vue_type_template_id_33a515b2__WEBPACK_IMPORTED_MODULE_0__.render,
  _SimulatorHistory_vue_vue_type_template_id_33a515b2__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/shared/afg/Simulateur/SimulatorHistory.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/shared/afg/Simulateur/SimulatorHistory.vue?vue&type=script&lang=js":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/shared/afg/Simulateur/SimulatorHistory.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SimulatorHistory_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SimulatorHistory.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/Simulateur/SimulatorHistory.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SimulatorHistory_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/shared/afg/Simulateur/SimulatorHistory.vue?vue&type=template&id=33a515b2":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/components/shared/afg/Simulateur/SimulatorHistory.vue?vue&type=template&id=33a515b2 ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SimulatorHistory_vue_vue_type_template_id_33a515b2__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SimulatorHistory_vue_vue_type_template_id_33a515b2__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SimulatorHistory_vue_vue_type_template_id_33a515b2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SimulatorHistory.vue?vue&type=template&id=33a515b2 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/Simulateur/SimulatorHistory.vue?vue&type=template&id=33a515b2");


/***/ })

}]);