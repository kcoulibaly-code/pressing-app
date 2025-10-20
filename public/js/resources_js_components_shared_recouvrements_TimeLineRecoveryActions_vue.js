"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_shared_recouvrements_TimeLineRecoveryActions_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/recouvrements/TimeLineRecoveryActions.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/recouvrements/TimeLineRecoveryActions.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_recouvrement_service_teams_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/recouvrement.service_teams.js */ "./resources/js/services/recouvrement.service_teams.js");
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


// import recoveryConstants from "../../../services/recovery-constant.js";

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    CheckCircleIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_1__.CheckCircleIcon,
    XCircleIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_1__.XCircleIcon
  },
  props: {
    step: {
      "default": {}
    },
    dossier_credit: {
      "default": {}
    },
    current_step: Number,
    durre_imp: 0,
    actionlist: [],
    filiale: String
  },
  data: function data() {
    return {
      activePar: 0,
      openAccordion: 0,
      Recouvrement: _services_recouvrement_service_teams_js__WEBPACK_IMPORTED_MODULE_0__["default"],
      options: [-2, 7, 8],
      procedure: ['obtenu_sur_la_Base_du_Billet_à_Ordre', 'obtenu_sur_la_Base_de_la_Procédure_d_Injonction_de_Payer', 'obtenu_sur_la_Base_Assignation']
    };
  },
  computed: {
    formatedAction: function formatedAction() {
      var _this = this;
      var data = this.actionlist;
      var result = [];
      if (data) {
        var section = data.filter(function (el) {
          return el.intervenants.includes(_this.step.responsible_role_uuid) && el.teams == _this.step.teams;
        });
        section === null || section === void 0 || section.forEach(function (actionPhase) {
          actionPhase.livrables.forEach(function (livrable) {
            if (livrable.restrict_role.includes(_this.step.responsible_role_uuid)) {
              livrable.actions.forEach(function (action, index) {
                result.push({
                  phase: actionPhase.phase,
                  par_max: actionPhase.par_max,
                  action: action,
                  slug: livrable.slug[index] || livrable.slug[0],
                  tbname: livrable.tbToBeUsed[index]
                });
              });
            }
          });
        });
      }
      return result;
    },
    formatedPhase: function formatedPhase() {
      var _this2 = this;
      var data = _services_recouvrement_service_teams_js__WEBPACK_IMPORTED_MODULE_0__["default"].fetchActionsList2(this.filiale);
      var section = data.filter(function (el) {
        return el.intervenants.includes(_this2.step.responsible_role_uuid) && el.teams == _this2.step.teams;
      });
      return section;
    },
    recouvrement_final_outcome: function recouvrement_final_outcome() {
      var _this$dossier_credit;
      return (_this$dossier_credit = this.dossier_credit) === null || _this$dossier_credit === void 0 ? void 0 : _this$dossier_credit.recouvrement_final_outcome;
    }
  },
  methods: {
    actionHistory: function actionHistory(currentPhaseID) {
      var _this3 = this;
      var history = [];

      // récupérer les action executé en rentard
      // les action de la phase actuelle

      this.formatedAction.forEach(function (el) {
        var _this3$formatedPhase$;
        if ((el === null || el === void 0 ? void 0 : el.phase) == ((_this3$formatedPhase$ = _this3.formatedPhase[currentPhaseID]) === null || _this3$formatedPhase$ === void 0 ? void 0 : _this3$formatedPhase$.phase)) {
          var late;
          if (_this3.GetPhase(el).phase == 'no-phase-check') {
            late = true;
          } else if (_this3.GetPhase(el).late == 0) {
            late = true;
          } else {
            late = false;
          }
          history.push(_objectSpread({
            "late": late,
            "lateDuration": _this3.GetPhase(el).late
          }, el));
        }
        // else{
        //     history.push({
        //                 "late" :  false ,
        //                 "lateDuration" : 0,
        //                 ...el
        //             })
        // } 
      });
      return history;
    },
    toggleAccordion: function toggleAccordion(index) {
      this.openAccordion = this.openAccordion === index ? null : index;
    },
    seeMore: function seeMore(tbname) {
      EventBus.$emit("tab_recovery_offview", tbname);
    },
    actionChecked: function actionChecked(docName) {
      return this.Recouvrement.checkAction(docName.slug, this.dossier_credit, this.step.responsible_id, this.step.teams);
    },
    GetPhase: function GetPhase(docName) {
      return this.Recouvrement.GetPhaseOfcheckAction(docName.slug, this.dossier_credit, this.step.responsible_id, this.step.teams);
    },
    recouvrement_procedure_juridique: function recouvrement_procedure_juridique(item) {
      var _this$dossier_credit2;
      if (![null, undefined, ''].includes((_this$dossier_credit2 = this.dossier_credit) === null || _this$dossier_credit2 === void 0 || (_this$dossier_credit2 = _this$dossier_credit2.demande_procedure_juridique) === null || _this$dossier_credit2 === void 0 || (_this$dossier_credit2 = _this$dossier_credit2.procedure_data) === null || _this$dossier_credit2 === void 0 ? void 0 : _this$dossier_credit2.recovery_procedure_juridique)) {
        var _this$dossier_credit3, _this$dossier_credit4;
        if (item.procedure_juridique_slug == ((_this$dossier_credit3 = this.dossier_credit) === null || _this$dossier_credit3 === void 0 || (_this$dossier_credit3 = _this$dossier_credit3.demande_procedure_juridique) === null || _this$dossier_credit3 === void 0 || (_this$dossier_credit3 = _this$dossier_credit3.procedure_data) === null || _this$dossier_credit3 === void 0 ? void 0 : _this$dossier_credit3.recovery_procedure_juridique) && ![null, undefined].includes((_this$dossier_credit4 = this.dossier_credit) === null || _this$dossier_credit4 === void 0 || (_this$dossier_credit4 = _this$dossier_credit4.demande_procedure_juridique) === null || _this$dossier_credit4 === void 0 ? void 0 : _this$dossier_credit4.date_confirmation) && (item === null || item === void 0 ? void 0 : item.teams) == 'EQUIPE_2') {
          return true;
        }
        return false;
      }
      return false;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/recouvrements/TimeLineRecoveryActions.vue?vue&type=template&id=334fc18a":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/recouvrements/TimeLineRecoveryActions.vue?vue&type=template&id=334fc18a ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "table-responsive"
  }, _vm._l(_vm.formatedPhase, function (item, idx) {
    return _c("recovery-accordion", {
      key: idx,
      staticStyle: {
        color: "black",
        "background-color": "#fff"
      },
      attrs: {
        title: item === null || item === void 0 ? void 0 : item.phase,
        isOpen: _vm.openAccordion === idx,
        titleStyle: {
          fontSize: "small",
          margin: "0",
          padding: "0 10px"
        },
        procedureJuridique: _vm.recouvrement_procedure_juridique(item)
      },
      on: {
        toggle: function toggle($event) {
          return _vm.toggleAccordion(idx);
        }
      }
    }, [_c("table", {
      staticClass: "table table-bordered"
    }, [_c("thead", [_c("tr", {
      staticClass: "text-center"
    }, [_c("td", {
      staticClass: "th"
    }, [_c("label", [_vm._v("ACTIONS")])]), _vm._v(" "), _c("td", {
      staticClass: "th"
    }, [_c("label", [_vm._v(_vm._s(_vm.step.responsible_role_sigle))])]), _vm._v(" "), _c("td", {
      staticClass: "th"
    }, [_c("label")])])]), _vm._v(" "), _c("tbody", _vm._l(_vm.actionHistory(idx), function (docName, index_doc) {
      return _c("tr", {
        key: docName + "_" + index_doc
      }, [_c("td", [_vm._v("- " + _vm._s(docName.action))]), _vm._v(" "), !docName.late && _vm.actionChecked(docName) ? _c("td", {
        staticClass: "text-warning",
        attrs: {
          title: "Tâche effectué en retard"
        }
      }, [_c("span", [_c("check-circle-icon", {
        staticClass: "custom-class",
        attrs: {
          size: "1.5x"
        }
      }), _vm._v("\n                            " + _vm._s("Exécuté avec un retard de " + (docName === null || docName === void 0 ? void 0 : docName.lateDuration) + " jrs") + "\n                        ")], 1)]) : _vm.actionChecked(docName) ? _c("td", {
        staticClass: "text-success",
        attrs: {
          title: "Tâche effectué"
        }
      }, [_c("span", [_c("check-circle-icon", {
        staticClass: "custom-class",
        attrs: {
          size: "1.5x"
        }
      }), _vm._v("\n                            " + _vm._s("Exécuté") + "    \n                        ")], 1)]) : !_vm.actionChecked(docName) && _vm.current_step > _vm.step.id ? _c("td", {
        staticClass: "text-danger",
        attrs: {
          title: "Tâche non effectuée"
        }
      }, [_vm._v("\n                        " + _vm._s() + "\n                        "), _c("span", [_c("check-circle-icon", {
        staticClass: "custom-class",
        attrs: {
          size: "1.5x"
        }
      }), _vm._v("\n                            " + _vm._s("Pas Exécuté") + "\n                        ")], 1)]) : !_vm.actionChecked(docName) ? _c("td", {
        staticClass: "text-danger",
        attrs: {
          title: "Tâche non effectuée"
        }
      }, [_c("span", [_c("check-circle-icon", {
        staticClass: "custom-class",
        attrs: {
          size: "1.5x"
        }
      }), _vm._v("\n                            " + _vm._s("En attente d'exécution") + "\n                        ")], 1)]) : _vm._e(), _vm._v(" "), _c("td", [_c("button", {
        staticClass: "btn btn-sm border",
        staticStyle: {
          "box-shadow": "0 2px 4px 0 rgba(0, 0, 0, 0.08)"
        },
        attrs: {
          title: "VOIR LES POINTS"
        },
        on: {
          click: function click($event) {
            return _vm.seeMore(docName.tbname);
          }
        }
      }, [_c("i", {
        staticClass: "icofont-plus"
      }), _vm._v(" VOIR PLUS\n                        ")])])]);
    }), 0)])]);
  }), 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/components/shared/recouvrements/TimeLineRecoveryActions.vue":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/shared/recouvrements/TimeLineRecoveryActions.vue ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TimeLineRecoveryActions_vue_vue_type_template_id_334fc18a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TimeLineRecoveryActions.vue?vue&type=template&id=334fc18a */ "./resources/js/components/shared/recouvrements/TimeLineRecoveryActions.vue?vue&type=template&id=334fc18a");
/* harmony import */ var _TimeLineRecoveryActions_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TimeLineRecoveryActions.vue?vue&type=script&lang=js */ "./resources/js/components/shared/recouvrements/TimeLineRecoveryActions.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TimeLineRecoveryActions_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _TimeLineRecoveryActions_vue_vue_type_template_id_334fc18a__WEBPACK_IMPORTED_MODULE_0__.render,
  _TimeLineRecoveryActions_vue_vue_type_template_id_334fc18a__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/shared/recouvrements/TimeLineRecoveryActions.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/shared/recouvrements/TimeLineRecoveryActions.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/components/shared/recouvrements/TimeLineRecoveryActions.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TimeLineRecoveryActions_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TimeLineRecoveryActions.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/recouvrements/TimeLineRecoveryActions.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TimeLineRecoveryActions_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/shared/recouvrements/TimeLineRecoveryActions.vue?vue&type=template&id=334fc18a":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/components/shared/recouvrements/TimeLineRecoveryActions.vue?vue&type=template&id=334fc18a ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TimeLineRecoveryActions_vue_vue_type_template_id_334fc18a__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TimeLineRecoveryActions_vue_vue_type_template_id_334fc18a__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TimeLineRecoveryActions_vue_vue_type_template_id_334fc18a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TimeLineRecoveryActions.vue?vue&type=template&id=334fc18a */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/recouvrements/TimeLineRecoveryActions.vue?vue&type=template&id=334fc18a");


/***/ })

}]);