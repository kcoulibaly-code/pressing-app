"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_shared_afg_stamp_StampRisque_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/stamp/StampRisque.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/stamp/StampRisque.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_ebapis_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../services/ebapis.service */ "./resources/js/services/ebapis.service.js");

var _ENTITY = "AFG";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "StampRisque",
  props: {
    dossier_credit: Object,
    authcheckUsr: Object
  },
  data: function data() {
    return {
      entity: _ENTITY,
      ebapisHost: _services_ebapis_service__WEBPACK_IMPORTED_MODULE_0__["default"].host,
      credpubIn0: null,
      credpubIn1: null,
      credpubIn2: null,
      credpubIn3: null,
      maskedBtn: false,
      checkVerifyCanApprove: false,
      type_carcasse: "",
      montant_sollicite: 0,
      exposition_globale: 0,
      cred_pub_tb: this.dossier_credit,
      mapping_questions: [{
        number_tb: "cred_pub_tb_120001",
        keyof_key: "personne_politiquement_expose",
        question: "Personne politiquement exposé (PPE) ?",
        filiale: ['AFGB CM', 'AFGB ML']
      }, {
        number_tb: "cred_pub_tb_120001",
        keyof_key: "is_partie_liee",
        question: "Parties liées (Administrateurs, dirigeants, actionnaires) ?",
        filiale: ['AFGB CM', 'AFGB ML']
      }, {
        number_tb: "cred_pub_tb_120001",
        keyof_key: "is_ex_contentieux",
        question: "Ce client est-il un ex-contentieux ?",
        filiale: ['AFGB CM', 'AFGB ML']
      }, {
        number_tb: "cred_pub_tb_120004",
        keyof_key: "pret_couvert_cash_call",
        question: "Prêt couvert avec 100% Cash Collatéral ?",
        filiale: ['AFGB CM', 'AFGB ML']
      }, {
        number_tb: "cred_pub_tb_120004",
        keyof_key: "forfait",
        question: "Est-il un forfait ?",
        filiale: ['AFGB ML']
      }, {
        number_tb: "cred_pub_tb_120004",
        keyof_key: "is_except_prog_fin",
        question: "La présente demande est-elle une exception à un/des programme(s) de financements validés",
        filiale: ['AFGB CM', 'AFGB ML']
      }, {
        number_tb: "cred_pub_tb_120004",
        keyof_key: "is_caractere_locatif",
        question: "Le(s) prêt(s) immobilier(s) sollicité(s) ci-dessus sont-ils à caractère locatif ?",
        filiale: ['AFGB CM', 'AFGB ML']
      }]
    };
  },
  mounted: function mounted() {
    var _this$dossier_credit;
    // EventBus.$on("printstamps", (divName) => {
    //       this.launchPrintView(divName)
    //   })
    var applied_templ_name = (_this$dossier_credit = this.dossier_credit) === null || _this$dossier_credit === void 0 ? void 0 : _this$dossier_credit.applied_templ_name;
    var tbArrays = this.determineCredPubTables(applied_templ_name, this.dossier_credit);
    this.credpubIn0 = tbArrays[0];
    this.credpubIn1 = ["CRESCO", "Découvert Privilège"].includes(applied_templ_name) ? tbArrays[0] : tbArrays[1];
    this.credpubIn2 = tbArrays[2];
    this.credpubIn3 = tbArrays[3];
    this.initData();
  },
  computed: {
    diffAmount: function diffAmount() {
      if (this.exposition_globale != this.montant_sollicite) {
        return true;
      }
      return false;
    },
    showEmployeur: function showEmployeur() {
      var _this$dossier_credit2, _this$dossier_credit4, _this$dossier_credit5, _this$dossier_credit$, _this$dossier_credit6;
      var applied_templ_name = (_this$dossier_credit2 = this.dossier_credit) === null || _this$dossier_credit2 === void 0 ? void 0 : _this$dossier_credit2.applied_templ_name;
      if (applied_templ_name == 'DAD / DAE') {
        var _this$dossier_credit3;
        return (_this$dossier_credit3 = this.dossier_credit) === null || _this$dossier_credit3 === void 0 || (_this$dossier_credit3 = _this$dossier_credit3["cred_pub_tb_15010"]) === null || _this$dossier_credit3 === void 0 || (_this$dossier_credit3 = _this$dossier_credit3.convention_entreprise) === null || _this$dossier_credit3 === void 0 ? void 0 : _this$dossier_credit3.denomination;
      }
      if (['', null, undefined].includes(this.credpubIn1)) {
        return;
      }
      if (['', null, undefined, 'undefined'].includes((_this$dossier_credit4 = this.dossier_credit) === null || _this$dossier_credit4 === void 0 || (_this$dossier_credit4 = _this$dossier_credit4[this.credpubIn1]) === null || _this$dossier_credit4 === void 0 ? void 0 : _this$dossier_credit4.entreprise)) {
        return;
      }
      return ((_this$dossier_credit5 = this.dossier_credit) === null || _this$dossier_credit5 === void 0 || (_this$dossier_credit5 = _this$dossier_credit5[this.credpubIn1]) === null || _this$dossier_credit5 === void 0 ? void 0 : _this$dossier_credit5.entreprise) + ' (' + ((_this$dossier_credit$ = (_this$dossier_credit6 = this.dossier_credit) === null || _this$dossier_credit6 === void 0 || (_this$dossier_credit6 = _this$dossier_credit6[this.credpubIn1]) === null || _this$dossier_credit6 === void 0 ? void 0 : _this$dossier_credit6.statut_entreprise) !== null && _this$dossier_credit$ !== void 0 ? _this$dossier_credit$ : "") + ')';
    },
    questions_resume: function questions_resume() {
      var _this = this;
      return this.mapping_questions.reduce(function (acc, mqt) {
        var _this$dossier_credit7, _this$authcheckUsr;
        var currentTB = (_this$dossier_credit7 = _this.dossier_credit) === null || _this$dossier_credit7 === void 0 ? void 0 : _this$dossier_credit7[mqt.number_tb];
        var currentval = currentTB === null || currentTB === void 0 ? void 0 : currentTB[mqt.keyof_key];
        var value = _this.verifResponse(currentval);
        if (mqt !== null && mqt !== void 0 && mqt.filiale.includes((_this$authcheckUsr = _this.authcheckUsr) === null || _this$authcheckUsr === void 0 ? void 0 : _this$authcheckUsr.filiale)) {
          acc.push({
            libelle: mqt.question,
            response: value
          });
        }
        return acc;
      }, []);
    }
  },
  methods: {
    verifResponse: function verifResponse(val) {
      if ([undefined, '', null].includes(val)) {
        return 'NON';
      }
      return val === null || val === void 0 ? void 0 : val.toUpperCase();
    },
    initData: function initData() {
      var _this$dossier_credit8,
        _this$dossier_credit$2,
        _this$dossier_credit9,
        _this$dossier_credit0,
        _this2 = this;
      this.montant_sollicite = 0;
      this.exposition_globale = 0;
      this.maskedBtn = false;
      this.checkVerifyCanApprove = false;
      this.type_carcasse = (_this$dossier_credit8 = this.dossier_credit) === null || _this$dossier_credit8 === void 0 || (_this$dossier_credit8 = _this$dossier_credit8[this.credpubIn0]) === null || _this$dossier_credit8 === void 0 ? void 0 : _this$dossier_credit8.carcasse_type;
      this.exposition_globale = (_this$dossier_credit$2 = (_this$dossier_credit9 = this.dossier_credit) === null || _this$dossier_credit9 === void 0 || (_this$dossier_credit9 = _this$dossier_credit9[this.credpubIn0]) === null || _this$dossier_credit9 === void 0 ? void 0 : _this$dossier_credit9.exposition_globale) !== null && _this$dossier_credit$2 !== void 0 ? _this$dossier_credit$2 : 0;
      var facilites_sollicitees = [];
      if (!["", null, undefined].includes((_this$dossier_credit0 = this.dossier_credit) === null || _this$dossier_credit0 === void 0 ? void 0 : _this$dossier_credit0[this.credpubIn3])) {
        var _this$dossier_credit$3;
        facilites_sollicitees = (_this$dossier_credit$3 = this.dossier_credit[this.credpubIn3]) === null || _this$dossier_credit$3 === void 0 ? void 0 : _this$dossier_credit$3.facilites_sollicitees;
      }
      if (facilites_sollicitees.length > 0) {
        facilites_sollicitees.forEach(function (el) {
          var _el$montant_credit;
          var mt = Number(el === null || el === void 0 || (_el$montant_credit = el.montant_credit) === null || _el$montant_credit === void 0 ? void 0 : _el$montant_credit.toString().replace(/\s/g, ""));
          if (mt > 0) {
            var _this2$montant_sollic;
            _this2.montant_sollicite = Number((_this2$montant_sollic = _this2.montant_sollicite) === null || _this2$montant_sollic === void 0 ? void 0 : _this2$montant_sollic.toString().replace(/\s/g, "")) + mt;
          }
        });
      }
    }
  },
  watch: {
    dossier_credit: {
      handler: function handler() {
        this.initData();
      },
      deep: true,
      immediate: true
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/stamp/StampRisque.vue?vue&type=template&id=b8fc5ae0&scoped=true":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/stamp/StampRisque.vue?vue&type=template&id=b8fc5ae0&scoped=true ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "table-responsive"
  }, [_c("div", {
    staticClass: "head-bg relative",
    staticStyle: {
      "text-align": "center"
    }
  }, [_vm._v("\n        PROFIL DE RISQUE\n\n        "), _c("div", {
    staticClass: "icofont icofont-printer cursor-pointer absolute",
    staticStyle: {
      top: "25px",
      right: "30px"
    },
    attrs: {
      title: "Imprimer le profil de risque"
    },
    on: {
      click: function click($event) {
        return _vm.launchPrintView("print-stamps");
      }
    }
  })]), _vm._v(" "), _c("hr", {
    staticStyle: {
      color: "#2980b9",
      "font-weight": "bold"
    }
  }), _vm._v(" "), _c("table", {
    staticClass: "table"
  }, [_c("tbody", [_c("tr", [_c("th", {
    attrs: {
      scope: "row"
    }
  }, [_vm._v("Type de Clientèle")]), _vm._v(" "), _c("td", {
    attrs: {
      scope: "row"
    }
  }, [_vm._v("\n                    " + _vm._s((_vm$dossier_credit = _vm.dossier_credit) === null || _vm$dossier_credit === void 0 || (_vm$dossier_credit = _vm$dossier_credit[_vm.credpubIn3]) === null || _vm$dossier_credit === void 0 ? void 0 : _vm$dossier_credit.type_de_clientele) + "\n                ")])]), _vm._v(" "), _c("tr", [_c("th", {
    attrs: {
      scope: "row"
    }
  }, [_vm._v("Employeur")]), _vm._v(" "), _c("td", {
    attrs: {
      scope: "row"
    }
  }, [_vm._v("\n                    " + _vm._s(_vm.showEmployeur) + "\n                ")])]), _vm._v(" "), _c("tr", [_c("th", {
    attrs: {
      scope: "row"
    }
  }, [_vm._v("Montant du crédit demandé")]), _vm._v(" "), _c("td", {
    attrs: {
      scope: "row"
    }
  }, [_vm._v("\n                    " + _vm._s(_vm._f("formatNumber")(_vm.montant_sollicite)) + "\n                ")])]), _vm._v(" "), _c("tr", [_c("th", {
    attrs: {
      scope: "row"
    }
  }, [_vm._v("Exposition à autoriser")]), _vm._v(" "), _c("td", {
    style: _vm.diffAmount ? "color: #dd3c4c; font-weight: bold" : "",
    attrs: {
      scope: "row"
    }
  }, [_vm._v("\n                    " + _vm._s(_vm._f("formatNumber")(_vm.exposition_globale)) + "\n                ")])])])]), _vm._v(" "), ["AFG"].includes(_vm.entity) && ((_vm$dossier_credit2 = _vm.dossier_credit) === null || _vm$dossier_credit2 === void 0 ? void 0 : _vm$dossier_credit2.applied_templ_id) == 2 ? _c("div", [_c("table", {
    staticClass: "table table-bordered mb-0"
  }, [_vm._m(0), _vm._v(" "), _c("tbody", _vm._l(_vm.questions_resume, function (qst) {
    return _c("tr", [_c("th", {
      staticClass: "col-11",
      attrs: {
        scope: "row"
      }
    }, [_vm._v(" " + _vm._s(qst === null || qst === void 0 ? void 0 : qst.libelle) + " ")]), _vm._v(" "), _c("td", {
      staticClass: "col-1",
      staticStyle: {
        "align-content": "center",
        "text-align": "center"
      },
      attrs: {
        scope: "row"
      }
    }, [_vm._v("\n                        " + _vm._s(qst.response) + "\n                    ")])]);
  }), 0)])]) : _vm._e()]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", {
    staticClass: "bg-ed-primary"
  }, [_c("tr", [_c("th", {
    staticClass: "text-uppercase bg-grey text-center",
    staticStyle: {
      background: "#f4f3f3 !important"
    },
    attrs: {
      colspan: "2"
    }
  }, [_vm._v("\n                        Informations supplementaires\n                    ")])])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/stamp/StampRisque.vue?vue&type=style&index=0&id=b8fc5ae0&lang=css&scoped=true":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/stamp/StampRisque.vue?vue&type=style&index=0&id=b8fc5ae0&lang=css&scoped=true ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.head-bg[data-v-b8fc5ae0]{\r\n  margin-top: 10px;\r\n  padding: 16px;\r\n  border: 2px solid ;\r\n  font-weight: bold;\r\n  text-align: center;\r\n  text-transform: uppercase;\r\n  background: rgb(215, 210, 210);\n}\r\n\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/stamp/StampRisque.vue?vue&type=style&index=0&id=b8fc5ae0&lang=css&scoped=true":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/stamp/StampRisque.vue?vue&type=style&index=0&id=b8fc5ae0&lang=css&scoped=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_StampRisque_vue_vue_type_style_index_0_id_b8fc5ae0_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./StampRisque.vue?vue&type=style&index=0&id=b8fc5ae0&lang=css&scoped=true */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/stamp/StampRisque.vue?vue&type=style&index=0&id=b8fc5ae0&lang=css&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_StampRisque_vue_vue_type_style_index_0_id_b8fc5ae0_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_StampRisque_vue_vue_type_style_index_0_id_b8fc5ae0_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/shared/afg/stamp/StampRisque.vue":
/*!******************************************************************!*\
  !*** ./resources/js/components/shared/afg/stamp/StampRisque.vue ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _StampRisque_vue_vue_type_template_id_b8fc5ae0_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StampRisque.vue?vue&type=template&id=b8fc5ae0&scoped=true */ "./resources/js/components/shared/afg/stamp/StampRisque.vue?vue&type=template&id=b8fc5ae0&scoped=true");
/* harmony import */ var _StampRisque_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StampRisque.vue?vue&type=script&lang=js */ "./resources/js/components/shared/afg/stamp/StampRisque.vue?vue&type=script&lang=js");
/* harmony import */ var _StampRisque_vue_vue_type_style_index_0_id_b8fc5ae0_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./StampRisque.vue?vue&type=style&index=0&id=b8fc5ae0&lang=css&scoped=true */ "./resources/js/components/shared/afg/stamp/StampRisque.vue?vue&type=style&index=0&id=b8fc5ae0&lang=css&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _StampRisque_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _StampRisque_vue_vue_type_template_id_b8fc5ae0_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _StampRisque_vue_vue_type_template_id_b8fc5ae0_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "b8fc5ae0",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/shared/afg/stamp/StampRisque.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/shared/afg/stamp/StampRisque.vue?vue&type=script&lang=js":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/shared/afg/stamp/StampRisque.vue?vue&type=script&lang=js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StampRisque_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./StampRisque.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/stamp/StampRisque.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StampRisque_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/shared/afg/stamp/StampRisque.vue?vue&type=style&index=0&id=b8fc5ae0&lang=css&scoped=true":
/*!**************************************************************************************************************************!*\
  !*** ./resources/js/components/shared/afg/stamp/StampRisque.vue?vue&type=style&index=0&id=b8fc5ae0&lang=css&scoped=true ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_StampRisque_vue_vue_type_style_index_0_id_b8fc5ae0_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./StampRisque.vue?vue&type=style&index=0&id=b8fc5ae0&lang=css&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/stamp/StampRisque.vue?vue&type=style&index=0&id=b8fc5ae0&lang=css&scoped=true");


/***/ }),

/***/ "./resources/js/components/shared/afg/stamp/StampRisque.vue?vue&type=template&id=b8fc5ae0&scoped=true":
/*!************************************************************************************************************!*\
  !*** ./resources/js/components/shared/afg/stamp/StampRisque.vue?vue&type=template&id=b8fc5ae0&scoped=true ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_StampRisque_vue_vue_type_template_id_b8fc5ae0_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_StampRisque_vue_vue_type_template_id_b8fc5ae0_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_StampRisque_vue_vue_type_template_id_b8fc5ae0_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./StampRisque.vue?vue&type=template&id=b8fc5ae0&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/stamp/StampRisque.vue?vue&type=template&id=b8fc5ae0&scoped=true");


/***/ })

}]);