"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_offview_bank_nsia_memo_anal_fin_ANFI1_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/anal_fin/ANFI1.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/anal_fin/ANFI1.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../services/auth.service */ "./resources/js/services/auth.service.js");
/* harmony import */ var _services_ebapis_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../services/ebapis.service */ "./resources/js/services/ebapis.service.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    dossier_credit: Object
  },
  mounted: function mounted() {
    var _this$dossier_credit;
    // this.tableClosedOrOpened();
    // this.loadRetrieved();
    // this.loadTbAttrs();
    if ((_this$dossier_credit = this.dossier_credit) !== null && _this$dossier_credit !== void 0 && _this$dossier_credit.cred_pub_tb_13) {
      this.loadBeforeRequest();
    }
  },
  data: function data() {
    return {
      ebapisHost: _services_ebapis_service__WEBPACK_IMPORTED_MODULE_1__["default"].host,
      notationFinale: "",
      notationFinanciere: "",
      codeRatiosActivite: "",
      notationQuantitative: "",
      notationQualitatif: "",
      notation_qualitative: "",
      annee_referentielle: new Date().getFullYear(),
      ncc: '',
      ratiosActivite: [{
        libelle: "Délai de paiement client (jours)",
        curr_year_1: "",
        curr_year_2: "",
        curr_year_3: "",
        code: "A1"
      }, {
        libelle: "Rotation des stocks (jours d'achat)",
        curr_year_1: "",
        curr_year_2: "",
        curr_year_3: "",
        code: "A2"
      }, {
        libelle: "Délai de reglement fournisseur(jours d'achat)",
        curr_year_1: "",
        curr_year_2: "",
        curr_year_3: "",
        code: "A3"
      }, {
        libelle: "Rotation des stocks (jours de CA)",
        curr_year_1: "",
        curr_year_2: "",
        curr_year_3: "",
        code: "A4"
      }, {
        libelle: "Poids des frais financiers",
        curr_year_1: "",
        curr_year_2: "",
        curr_year_3: "",
        code: "A5"
      }, {
        libelle: "Repartition de la valeur ajoutée",
        curr_year_1: "",
        curr_year_2: "",
        curr_year_3: "",
        code: "A6"
      }, {
        libelle: "Couverture des interest par le cashflow",
        curr_year_1: "",
        curr_year_2: "",
        curr_year_3: "",
        code: "A7"
      }],
      ratiosLiquidites: [{
        libelle: "Liquidité reduite ou QUick ratio (jours)",
        curr_year_1: "",
        curr_year_2: "",
        curr_year_3: "",
        code: "L1"
      }, {
        libelle: "Liquidité générale",
        curr_year_1: "",
        curr_year_2: "",
        curr_year_3: "",
        code: "L2"
      }, {
        libelle: "Liquidité immediate sur actif",
        curr_year_1: "",
        curr_year_2: "",
        curr_year_3: "",
        code: "L3"
      }, {
        libelle: "Liquidité immediate (Acide Test) sur DCT",
        curr_year_1: "",
        curr_year_2: "",
        curr_year_3: "",
        code: "L4"
      }, {
        libelle: "Liquidité générale courante",
        curr_year_1: "",
        curr_year_2: "",
        curr_year_3: "",
        code: "L5"
      }, {
        libelle: "Le fonds de roulement (en jours de CA)",
        curr_year_1: "",
        curr_year_2: "",
        curr_year_3: "",
        code: "L9"
      }, {
        libelle: "La tresorerie nette (en jours de CA)",
        curr_year_1: "",
        curr_year_2: "",
        curr_year_3: "",
        code: "L10"
      }, {
        libelle: "Liquidité immediate (CA)",
        curr_year_1: "",
        curr_year_2: "",
        curr_year_3: "",
        code: "L11"
      }],
      ratiosEndettements: [{
        libelle: "Capacité remboursement (année de Cash Flow)",
        curr_year_1: "",
        curr_year_2: "",
        curr_year_3: "",
        code: "E1"
      }, {
        libelle: "Endettement bancaire",
        curr_year_1: "",
        curr_year_2: "",
        curr_year_3: "",
        code: "E2"
      }, {
        libelle: "Poids de l'Etat (Dettes fiscales et sociales)",
        curr_year_1: "",
        curr_year_2: "",
        curr_year_3: "",
        code: "E3"
      }, {
        libelle: "Levier financier restreint",
        curr_year_1: "",
        curr_year_2: "",
        curr_year_3: "",
        code: "E4"
      }, {
        libelle: "Independance financière",
        curr_year_1: "",
        curr_year_2: "",
        curr_year_3: "",
        code: "E5"
      }, {
        libelle: "Endettement net",
        curr_year_1: "",
        curr_year_2: "",
        curr_year_3: "",
        code: "E6"
      }, {
        libelle: "Couverture de la dette",
        curr_year_1: "",
        curr_year_2: "",
        curr_year_3: "",
        code: "E7"
      }, {
        libelle: "Levier Euler",
        curr_year_1: "",
        curr_year_2: "",
        curr_year_3: "",
        code: "E8"
      }, {
        libelle: "Levier financier général",
        curr_year_1: "",
        curr_year_2: "",
        curr_year_3: "",
        code: "E9"
      }, {
        libelle: "Endettement brut",
        curr_year_1: "",
        curr_year_2: "",
        curr_year_3: "",
        code: "E18"
      }, {
        libelle: "L'impact financier",
        curr_year_1: "",
        curr_year_2: "",
        curr_year_3: "",
        code: "E10"
      }, {
        libelle: "La capacité de financement",
        curr_year_1: "",
        curr_year_2: "",
        curr_year_3: "",
        code: "E11"
      }],
      ratiosRentabilites: [{
        libelle: "Rentabilité operationnelle (EBIT-CA)",
        curr_year_1: "",
        curr_year_2: "",
        curr_year_3: "",
        code: "R1"
      }, {
        libelle: "Rentabilité commerciale",
        curr_year_1: "",
        curr_year_2: "",
        curr_year_3: "",
        code: "R2"
      }, {
        libelle: "Rentabilité économique générale (RoA)",
        curr_year_1: "",
        curr_year_2: "",
        curr_year_3: "",
        code: "R3"
      }, {
        libelle: "Rentabilité financière (RoE)",
        curr_year_1: "",
        curr_year_2: "",
        curr_year_3: "",
        code: "R4"
      }, {
        libelle: "Rentabilité operationnelle (EBE-CA)",
        curr_year_1: "",
        curr_year_2: "",
        curr_year_3: "",
        code: "R5"
      }, {
        libelle: "Rentabilité économique (RCAI)",
        curr_year_1: "",
        curr_year_2: "",
        curr_year_3: "",
        code: "R6"
      }, {
        libelle: "Ratio de marge",
        curr_year_1: "",
        curr_year_2: "",
        curr_year_3: "",
        code: "R7"
      }, {
        libelle: "Rentabilité du capital investi",
        curr_year_1: "",
        curr_year_2: "",
        curr_year_3: "",
        code: "R8"
      }]
    };
  },
  methods: {
    financial: function financial(x) {
      var _x, _Number$parseFloat, _this$localeStringToF;
      if (['', null, undefined, NaN, "NaN"].includes(x)) {
        x = 0;
      }
      x = (_x = x) === null || _x === void 0 || (_x = _x.toString()) === null || _x === void 0 ? void 0 : _x.replace(/\s/g, '');
      x = (_Number$parseFloat = Number.parseFloat(x)) === null || _Number$parseFloat === void 0 || (_Number$parseFloat = _Number$parseFloat.toFixed(2)) === null || _Number$parseFloat === void 0 ? void 0 : _Number$parseFloat.replace('.00', '');
      return ((_this$localeStringToF = this.localeStringToFloat(String(x))) === null || _this$localeStringToF === void 0 ? void 0 : _this$localeStringToF.toLocaleString('fr-FR')) || 0;
    },
    loadBeforeRequest: function loadBeforeRequest() {
      var _this = this;
      _services_auth_service__WEBPACK_IMPORTED_MODULE_0__["default"].loadUserData().then(function (res) {
        _this.getRatios(res);
        // this.getNotationFinale(res)
        // this.getNotationFinanciere(res)
        // this.getNotationQualitative(res)
      })["catch"](function (err) {
        console.log(err);
      });
    },
    getRatios: function getRatios(res) {
      var _this$dossier_credit2,
        _this$dossier_credit3,
        _this2 = this;
      this.annee_referentielle = (_this$dossier_credit2 = this.dossier_credit) === null || _this$dossier_credit2 === void 0 || (_this$dossier_credit2 = _this$dossier_credit2.cred_pub_tb_00) === null || _this$dossier_credit2 === void 0 ? void 0 : _this$dossier_credit2.annee_referentielle;
      if (!this.annee_referentielle) this.annee_referentielle = new Date().getFullYear();
      this.ncc = (_this$dossier_credit3 = this.dossier_credit) === null || _this$dossier_credit3 === void 0 || (_this$dossier_credit3 = _this$dossier_credit3.cred_pub_tb_00) === null || _this$dossier_credit3 === void 0 ? void 0 : _this$dossier_credit3.compte_contribuable;
      if (res.status == 200) {
        var data = {
          method: 'GET',
          url: 'https://ebapis.com/basix/api/v3/public/ultimate-db/',
          headers: {
            'Content-Type': 'application/json'
          },
          params: {
            ncc: this.ncc,
            annee: "null",
            operation: "READ"
          }
        };
        var options = {
          method: 'POST',
          url: this.ebapisHost + 'creditbuilder/api/v1/proxy-nsia/',
          headers: {
            'Content-Type': 'application/json'
          },
          data: data
        };
        this.$axios.request(options).then(function (response) {
          // console.log(response.data);
          _this2.sortedRatios(response.data);
        })["catch"](function (error) {
          console.error(error);
        });
      }
    },
    sortedRatios: function sortedRatios(ratios) {
      var annee_ref = this.annee_referentielle.toString();
      this.ratiosActivite.forEach(function (element) {
        element.label = element.label;
        if (ratios[annee_ref - 2]) {
          element.curr_year_3 = Number(ratios[annee_ref - 2][element.code]);
        }
        if (ratios[annee_ref - 1]) {
          element.curr_year_2 = ratios[annee_ref - 1][element.code];
        }
        if (ratios[annee_ref]) {
          element.curr_year_1 = ratios[annee_ref][element.code];
        }
        element.variance = "";
      });
      this.ratiosLiquidites.forEach(function (element) {
        element.label = element.label;
        if (ratios[annee_ref - 2]) {
          element.curr_year_3 = Number(ratios[annee_ref - 2][element.code]);
        }
        if (ratios[annee_ref - 1]) {
          element.curr_year_2 = ratios[annee_ref - 1][element.code];
        }
        if (ratios[annee_ref]) {
          element.curr_year_1 = ratios[annee_ref][element.code];
        }
        element.variance = "";
      });
      this.ratiosEndettements.forEach(function (element) {
        element.label = element.label;
        if (ratios[annee_ref - 2]) {
          element.curr_year_3 = Number(ratios[annee_ref - 2][element.code]);
        }
        if (ratios[annee_ref - 1]) {
          element.curr_year_2 = ratios[annee_ref - 1][element.code];
        }
        if (ratios[annee_ref]) {
          element.curr_year_1 = ratios[annee_ref][element.code];
        }
        element.variance = "";
      });
      this.ratiosRentabilites.forEach(function (element) {
        element.label = element.label;
        if (ratios[annee_ref - 2]) {
          element.curr_year_3 = Number(ratios[annee_ref - 2][element.code]);
        }
        if (ratios[annee_ref - 1]) {
          element.curr_year_2 = ratios[annee_ref - 1][element.code];
        }
        if (ratios[annee_ref]) {
          element.curr_year_1 = ratios[annee_ref][element.code];
        }
        element.variance = "";
      });
    },
    formatDate: function formatDate(date) {
      if (['', null, undefined].includes(date)) return '';
      var options = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric'
      };
      return new Date(date).toLocaleDateString('fr', options);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/anal_fin/ANFI1.vue?vue&type=template&id=a8af44d4&scoped=true":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/anal_fin/ANFI1.vue?vue&type=template&id=a8af44d4&scoped=true ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm$dossier_credit, _vm$dossier_credit2, _vm$dossier_credit3, _vm$dossier_credit4, _vm$dossier_credit5, _vm$dossier_credit6, _vm$dossier_credit7, _vm$dossier_credit8, _vm$dossier_credit9, _vm$dossier_credit0, _vm$dossier_credit1, _vm$dossier_credit10, _vm$dossier_credit11, _vm$dossier_credit12, _vm$dossier_credit13, _vm$dossier_credit14, _vm$dossier_credit15, _vm$dossier_credit16, _vm$dossier_credit17, _vm$dossier_credit18, _vm$dossier_credit19, _vm$dossier_credit20, _vm$dossier_credit21, _vm$dossier_credit22, _vm$dossier_credit23, _vm$dossier_credit24, _vm$dossier_credit25, _vm$dossier_credit26, _vm$dossier_credit27, _vm$dossier_credit28, _vm$dossier_credit29, _vm$dossier_credit30, _vm$dossier_credit31, _vm$dossier_credit32, _vm$dossier_credit33, _vm$dossier_credit34, _vm$dossier_credit35, _vm$dossier_credit36, _vm$dossier_credit37, _vm$dossier_credit38, _vm$dossier_credit39, _vm$dossier_credit40, _vm$dossier_credit41, _vm$dossier_credit42, _vm$dossier_credit43, _vm$dossier_credit44, _vm$dossier_credit45, _vm$dossier_credit46, _vm$dossier_credit47, _vm$dossier_credit48, _vm$dossier_credit49, _vm$dossier_credit50, _vm$dossier_credit51, _vm$dossier_credit52, _vm$dossier_credit53, _vm$dossier_credit54, _vm$dossier_credit55, _vm$dossier_credit56, _vm$dossier_credit57, _vm$dossier_credit58, _vm$dossier_credit59, _vm$dossier_credit60, _vm$dossier_credit61, _vm$dossier_credit62, _vm$dossier_credit63, _vm$dossier_credit64, _vm$dossier_credit65, _vm$dossier_credit66, _vm$dossier_credit67, _vm$dossier_credit68, _vm$dossier_credit69, _vm$dossier_credit70, _vm$dossier_credit71, _vm$dossier_credit72, _vm$dossier_credit73, _vm$dossier_credit74, _vm$dossier_credit75, _vm$dossier_credit76, _vm$dossier_credit77, _vm$dossier_credit78, _vm$dossier_credit79, _vm$dossier_credit80, _vm$dossier_credit81, _vm$dossier_credit82, _vm$dossier_credit83, _vm$dossier_credit84, _vm$dossier_credit85, _vm$dossier_credit86, _vm$dossier_credit87, _vm$dossier_credit88, _vm$dossier_credit89, _vm$dossier_credit90, _vm$dossier_credit91, _vm$dossier_credit92, _vm$dossier_credit93, _vm$dossier_credit94, _vm$dossier_credit95;
  var _vm = this,
    _c = _vm._self._c;
  return (_vm$dossier_credit = _vm.dossier_credit) !== null && _vm$dossier_credit !== void 0 && _vm$dossier_credit.cred_pub_tb_13 ? _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "justify-content-center"
  }, [_c("div", {
    staticClass: "head-memorandum-title mb-4 text-uppercase",
    staticStyle: {
      "text-align": "center"
    }
  }, [_vm._v("Analyse financière")]), _vm._v(" "), _c("div", {
    staticClass: "table-responsive py-3 justify-content-center"
  }, [_c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-bordered mb-4"
  }, [_c("thead", [_vm._m(0), _vm._v(" "), _c("tr", {
    staticClass: "fw-bold"
  }, [_vm._m(1), _vm._v(" "), _c("td", [_vm._v("\n                        N-2(" + _vm._s(((_vm$dossier_credit2 = _vm.dossier_credit) === null || _vm$dossier_credit2 === void 0 || (_vm$dossier_credit2 = _vm$dossier_credit2.cred_pub_tb_13.annee_calculees) === null || _vm$dossier_credit2 === void 0 ? void 0 : _vm$dossier_credit2.at(-3)) != undefined ? (_vm$dossier_credit3 = _vm.dossier_credit) === null || _vm$dossier_credit3 === void 0 || (_vm$dossier_credit3 = _vm$dossier_credit3.cred_pub_tb_13.annee_calculees) === null || _vm$dossier_credit3 === void 0 ? void 0 : _vm$dossier_credit3.at(-3) : "") + ")\n                        ")]), _vm._v(" "), _c("td", [_vm._v("\n                            N-1(" + _vm._s(((_vm$dossier_credit4 = _vm.dossier_credit) === null || _vm$dossier_credit4 === void 0 || (_vm$dossier_credit4 = _vm$dossier_credit4.cred_pub_tb_13.annee_calculees) === null || _vm$dossier_credit4 === void 0 ? void 0 : _vm$dossier_credit4.at(-2)) != undefined ? (_vm$dossier_credit5 = _vm.dossier_credit) === null || _vm$dossier_credit5 === void 0 || (_vm$dossier_credit5 = _vm$dossier_credit5.cred_pub_tb_13.annee_calculees) === null || _vm$dossier_credit5 === void 0 ? void 0 : _vm$dossier_credit5.at(-2) : "") + ")\n                        ")]), _vm._v(" "), _c("td", [_vm._v("\n                            N(" + _vm._s(((_vm$dossier_credit6 = _vm.dossier_credit) === null || _vm$dossier_credit6 === void 0 || (_vm$dossier_credit6 = _vm$dossier_credit6.cred_pub_tb_13.annee_calculees) === null || _vm$dossier_credit6 === void 0 ? void 0 : _vm$dossier_credit6.at(-1)) != undefined ? (_vm$dossier_credit7 = _vm.dossier_credit) === null || _vm$dossier_credit7 === void 0 || (_vm$dossier_credit7 = _vm$dossier_credit7.cred_pub_tb_13.annee_calculees) === null || _vm$dossier_credit7 === void 0 ? void 0 : _vm$dossier_credit7.at(-1) : "") + ")\n                        ")])])]), _vm._v(" "), _c("tbody", _vm._l((_vm$dossier_credit8 = _vm.dossier_credit) === null || _vm$dossier_credit8 === void 0 || (_vm$dossier_credit8 = _vm$dossier_credit8.cred_pub_tb_13) === null || _vm$dossier_credit8 === void 0 || (_vm$dossier_credit8 = _vm$dossier_credit8.ratiosByCategory) === null || _vm$dossier_credit8 === void 0 ? void 0 : _vm$dossier_credit8["RATIO REGLEMENTAIRE"], function (act_rent, index) {
    return _c("tr", {
      key: index
    }, [_c("td", [_c("label", [_vm._v("\n                                " + _vm._s(act_rent === null || act_rent === void 0 ? void 0 : act_rent.libelle) + "\n                            ")])]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.financial(act_rent === null || act_rent === void 0 ? void 0 : act_rent.n2)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.financial(act_rent === null || act_rent === void 0 ? void 0 : act_rent.n1)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.financial(act_rent === null || act_rent === void 0 ? void 0 : act_rent.n)))])]);
  }), 0)]), _vm._v(" "), _c("table", {
    staticClass: "table table-bordered mb-4"
  }, [_c("thead", [_vm._m(2), _vm._v(" "), _c("tr", {
    staticClass: "fw-bold"
  }, [_vm._m(3), _vm._v(" "), _c("td", [_vm._v("\n                        N-2(" + _vm._s(((_vm$dossier_credit9 = _vm.dossier_credit) === null || _vm$dossier_credit9 === void 0 || (_vm$dossier_credit9 = _vm$dossier_credit9.cred_pub_tb_13.annee_calculees) === null || _vm$dossier_credit9 === void 0 ? void 0 : _vm$dossier_credit9.at(-3)) != undefined ? (_vm$dossier_credit0 = _vm.dossier_credit) === null || _vm$dossier_credit0 === void 0 || (_vm$dossier_credit0 = _vm$dossier_credit0.cred_pub_tb_13.annee_calculees) === null || _vm$dossier_credit0 === void 0 ? void 0 : _vm$dossier_credit0.at(-3) : "") + ")\n                        ")]), _vm._v(" "), _c("td", [_vm._v("\n                            N-1(" + _vm._s(((_vm$dossier_credit1 = _vm.dossier_credit) === null || _vm$dossier_credit1 === void 0 || (_vm$dossier_credit1 = _vm$dossier_credit1.cred_pub_tb_13.annee_calculees) === null || _vm$dossier_credit1 === void 0 ? void 0 : _vm$dossier_credit1.at(-2)) != undefined ? (_vm$dossier_credit10 = _vm.dossier_credit) === null || _vm$dossier_credit10 === void 0 || (_vm$dossier_credit10 = _vm$dossier_credit10.cred_pub_tb_13.annee_calculees) === null || _vm$dossier_credit10 === void 0 ? void 0 : _vm$dossier_credit10.at(-2) : "") + ")\n                        ")]), _vm._v(" "), _c("td", [_vm._v("\n                            N(" + _vm._s(((_vm$dossier_credit11 = _vm.dossier_credit) === null || _vm$dossier_credit11 === void 0 || (_vm$dossier_credit11 = _vm$dossier_credit11.cred_pub_tb_13.annee_calculees) === null || _vm$dossier_credit11 === void 0 ? void 0 : _vm$dossier_credit11.at(-1)) != undefined ? (_vm$dossier_credit12 = _vm.dossier_credit) === null || _vm$dossier_credit12 === void 0 || (_vm$dossier_credit12 = _vm$dossier_credit12.cred_pub_tb_13.annee_calculees) === null || _vm$dossier_credit12 === void 0 ? void 0 : _vm$dossier_credit12.at(-1) : "") + ")\n                        ")])])]), _vm._v(" "), _c("tbody", _vm._l((_vm$dossier_credit13 = _vm.dossier_credit) === null || _vm$dossier_credit13 === void 0 || (_vm$dossier_credit13 = _vm$dossier_credit13.cred_pub_tb_13) === null || _vm$dossier_credit13 === void 0 || (_vm$dossier_credit13 = _vm$dossier_credit13.ratiosByCategory) === null || _vm$dossier_credit13 === void 0 ? void 0 : _vm$dossier_credit13["ACTIVITE"], function (act_rent, index) {
    return _c("tr", {
      key: index
    }, [_c("td", [_c("label", [_vm._v("\n                                " + _vm._s(act_rent === null || act_rent === void 0 ? void 0 : act_rent.libelle) + "\n                            ")])]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.financial(act_rent === null || act_rent === void 0 ? void 0 : act_rent.n2)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.financial(act_rent === null || act_rent === void 0 ? void 0 : act_rent.n1)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.financial(act_rent === null || act_rent === void 0 ? void 0 : act_rent.n)))])]);
  }), 0)]), _vm._v(" "), _c("table", {
    staticClass: "table table-bordered mb-4"
  }, [_c("thead", [_vm._m(4), _vm._v(" "), _c("tr", {
    staticClass: "fw-bold"
  }, [_vm._m(5), _vm._v(" "), _c("td", [_vm._v("\n                        N-2(" + _vm._s(((_vm$dossier_credit14 = _vm.dossier_credit) === null || _vm$dossier_credit14 === void 0 || (_vm$dossier_credit14 = _vm$dossier_credit14.cred_pub_tb_13.annee_calculees) === null || _vm$dossier_credit14 === void 0 ? void 0 : _vm$dossier_credit14.at(-3)) != undefined ? (_vm$dossier_credit15 = _vm.dossier_credit) === null || _vm$dossier_credit15 === void 0 || (_vm$dossier_credit15 = _vm$dossier_credit15.cred_pub_tb_13.annee_calculees) === null || _vm$dossier_credit15 === void 0 ? void 0 : _vm$dossier_credit15.at(-3) : "") + ")\n                        ")]), _vm._v(" "), _c("td", [_vm._v("\n                            N-1(" + _vm._s(((_vm$dossier_credit16 = _vm.dossier_credit) === null || _vm$dossier_credit16 === void 0 || (_vm$dossier_credit16 = _vm$dossier_credit16.cred_pub_tb_13.annee_calculees) === null || _vm$dossier_credit16 === void 0 ? void 0 : _vm$dossier_credit16.at(-2)) != undefined ? (_vm$dossier_credit17 = _vm.dossier_credit) === null || _vm$dossier_credit17 === void 0 || (_vm$dossier_credit17 = _vm$dossier_credit17.cred_pub_tb_13.annee_calculees) === null || _vm$dossier_credit17 === void 0 ? void 0 : _vm$dossier_credit17.at(-2) : "") + ")\n                        ")]), _vm._v(" "), _c("td", [_vm._v("\n                            N(" + _vm._s(((_vm$dossier_credit18 = _vm.dossier_credit) === null || _vm$dossier_credit18 === void 0 || (_vm$dossier_credit18 = _vm$dossier_credit18.cred_pub_tb_13.annee_calculees) === null || _vm$dossier_credit18 === void 0 ? void 0 : _vm$dossier_credit18.at(-1)) != undefined ? (_vm$dossier_credit19 = _vm.dossier_credit) === null || _vm$dossier_credit19 === void 0 || (_vm$dossier_credit19 = _vm$dossier_credit19.cred_pub_tb_13.annee_calculees) === null || _vm$dossier_credit19 === void 0 ? void 0 : _vm$dossier_credit19.at(-1) : "") + ")\n                        ")])])]), _vm._v(" "), _c("tbody", _vm._l((_vm$dossier_credit20 = _vm.dossier_credit) === null || _vm$dossier_credit20 === void 0 || (_vm$dossier_credit20 = _vm$dossier_credit20.cred_pub_tb_13) === null || _vm$dossier_credit20 === void 0 || (_vm$dossier_credit20 = _vm$dossier_credit20.ratiosByCategory) === null || _vm$dossier_credit20 === void 0 ? void 0 : _vm$dossier_credit20["STRUCTURE FINANCIERE"], function (act_rent, index) {
    return _c("tr", {
      key: index
    }, [_c("td", [_c("label", [_vm._v("\n                                " + _vm._s(act_rent === null || act_rent === void 0 ? void 0 : act_rent.libelle) + "\n                            ")])]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.financial(act_rent === null || act_rent === void 0 ? void 0 : act_rent.n2)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.financial(act_rent === null || act_rent === void 0 ? void 0 : act_rent.n1)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.financial(act_rent === null || act_rent === void 0 ? void 0 : act_rent.n)))])]);
  }), 0)]), _vm._v(" "), _c("div", {
    staticClass: "table_resonsive"
  }, [_c("table", {
    staticClass: "table table-bordered mb-2"
  }, [_c("tbody", [_vm._m(6), _vm._v(" "), _c("tr", [_c("td", [_c("p", {
    domProps: {
      innerHTML: _vm._s((_vm$dossier_credit21 = _vm.dossier_credit) === null || _vm$dossier_credit21 === void 0 || (_vm$dossier_credit21 = _vm$dossier_credit21.cred_pub_tb_13) === null || _vm$dossier_credit21 === void 0 ? void 0 : _vm$dossier_credit21.commentaire_ratios_nsia)
    }
  })])])])])]), _vm._v(" "), _c("table", {
    staticClass: "table table-bordered mb-1"
  }, [_c("thead", [_vm._m(7), _vm._v(" "), _c("tr", {
    staticClass: "fw-bold"
  }, [_vm._m(8), _vm._v(" "), _c("td", [_vm._v("\n                        N-2(" + _vm._s(((_vm$dossier_credit22 = _vm.dossier_credit) === null || _vm$dossier_credit22 === void 0 || (_vm$dossier_credit22 = _vm$dossier_credit22.cred_pub_tb_13.annee_calculees) === null || _vm$dossier_credit22 === void 0 ? void 0 : _vm$dossier_credit22.at(-3)) != undefined ? (_vm$dossier_credit23 = _vm.dossier_credit) === null || _vm$dossier_credit23 === void 0 || (_vm$dossier_credit23 = _vm$dossier_credit23.cred_pub_tb_13.annee_calculees) === null || _vm$dossier_credit23 === void 0 ? void 0 : _vm$dossier_credit23.at(-3) : "") + ")\n                        ")]), _vm._v(" "), _c("td", [_vm._v("\n                            N-1(" + _vm._s(((_vm$dossier_credit24 = _vm.dossier_credit) === null || _vm$dossier_credit24 === void 0 || (_vm$dossier_credit24 = _vm$dossier_credit24.cred_pub_tb_13.annee_calculees) === null || _vm$dossier_credit24 === void 0 ? void 0 : _vm$dossier_credit24.at(-2)) != undefined ? (_vm$dossier_credit25 = _vm.dossier_credit) === null || _vm$dossier_credit25 === void 0 || (_vm$dossier_credit25 = _vm$dossier_credit25.cred_pub_tb_13.annee_calculees) === null || _vm$dossier_credit25 === void 0 ? void 0 : _vm$dossier_credit25.at(-2) : "") + ")\n                        ")]), _vm._v(" "), _c("td", [_vm._v("\n                            N(" + _vm._s(((_vm$dossier_credit26 = _vm.dossier_credit) === null || _vm$dossier_credit26 === void 0 || (_vm$dossier_credit26 = _vm$dossier_credit26.cred_pub_tb_13.annee_calculees) === null || _vm$dossier_credit26 === void 0 ? void 0 : _vm$dossier_credit26.at(-1)) != undefined ? (_vm$dossier_credit27 = _vm.dossier_credit) === null || _vm$dossier_credit27 === void 0 || (_vm$dossier_credit27 = _vm$dossier_credit27.cred_pub_tb_13.annee_calculees) === null || _vm$dossier_credit27 === void 0 ? void 0 : _vm$dossier_credit27.at(-1) : "") + ")\n                        ")]), _vm._v(" "), _vm._m(9)])]), _vm._v(" "), _c("tbody", _vm._l((_vm$dossier_credit28 = _vm.dossier_credit) === null || _vm$dossier_credit28 === void 0 || (_vm$dossier_credit28 = _vm$dossier_credit28.cred_pub_tb_13) === null || _vm$dossier_credit28 === void 0 ? void 0 : _vm$dossier_credit28.activite_rentabilite, function (act_rent, index) {
    return _c("tr", {
      key: index
    }, [_c("td", [_c("label", [_vm._v("\n                                " + _vm._s(act_rent === null || act_rent === void 0 ? void 0 : act_rent.label) + "\n                            ")])]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.financial(act_rent === null || act_rent === void 0 ? void 0 : act_rent.curr_year_3)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.financial(act_rent === null || act_rent === void 0 ? void 0 : act_rent.curr_year_2)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.financial(act_rent === null || act_rent === void 0 ? void 0 : act_rent.curr_year_1)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.financial(act_rent.variance)))])]);
  }), 0)]), _vm._v(" "), _c("div", {
    staticClass: "table_resonsive"
  }, [_c("table", {
    staticClass: "table table-bordered mb-1"
  }, [_c("tbody", [_vm._m(10), _vm._v(" "), _c("tr", [_c("td", [_c("p", {
    domProps: {
      innerHTML: _vm._s((_vm$dossier_credit29 = _vm.dossier_credit) === null || _vm$dossier_credit29 === void 0 || (_vm$dossier_credit29 = _vm$dossier_credit29.cred_pub_tb_13) === null || _vm$dossier_credit29 === void 0 ? void 0 : _vm$dossier_credit29.commentaire_activite_rentabilite)
    }
  })])])])])])]), _vm._v(" "), _c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-bordered mt-2 mb-1"
  }, [_c("thead", [_vm._m(11), _vm._v(" "), _c("tr", {
    staticClass: "fw-bold"
  }, [_vm._m(12), _vm._v(" "), _c("td", [_vm._v("\n                        N-2(" + _vm._s(((_vm$dossier_credit30 = _vm.dossier_credit) === null || _vm$dossier_credit30 === void 0 || (_vm$dossier_credit30 = _vm$dossier_credit30.cred_pub_tb_13.annee_calculees) === null || _vm$dossier_credit30 === void 0 ? void 0 : _vm$dossier_credit30.at(-3)) != undefined ? (_vm$dossier_credit31 = _vm.dossier_credit) === null || _vm$dossier_credit31 === void 0 || (_vm$dossier_credit31 = _vm$dossier_credit31.cred_pub_tb_13.annee_calculees) === null || _vm$dossier_credit31 === void 0 ? void 0 : _vm$dossier_credit31.at(-3) : "") + ")\n                        ")]), _vm._v(" "), _c("td", [_vm._v("\n                            N-1(" + _vm._s(((_vm$dossier_credit32 = _vm.dossier_credit) === null || _vm$dossier_credit32 === void 0 || (_vm$dossier_credit32 = _vm$dossier_credit32.cred_pub_tb_13.annee_calculees) === null || _vm$dossier_credit32 === void 0 ? void 0 : _vm$dossier_credit32.at(-2)) != undefined ? (_vm$dossier_credit33 = _vm.dossier_credit) === null || _vm$dossier_credit33 === void 0 || (_vm$dossier_credit33 = _vm$dossier_credit33.cred_pub_tb_13.annee_calculees) === null || _vm$dossier_credit33 === void 0 ? void 0 : _vm$dossier_credit33.at(-2) : "") + ")\n                        ")]), _vm._v(" "), _c("td", [_vm._v("\n                            N(" + _vm._s(((_vm$dossier_credit34 = _vm.dossier_credit) === null || _vm$dossier_credit34 === void 0 || (_vm$dossier_credit34 = _vm$dossier_credit34.cred_pub_tb_13.annee_calculees) === null || _vm$dossier_credit34 === void 0 ? void 0 : _vm$dossier_credit34.at(-1)) != undefined ? (_vm$dossier_credit35 = _vm.dossier_credit) === null || _vm$dossier_credit35 === void 0 || (_vm$dossier_credit35 = _vm$dossier_credit35.cred_pub_tb_13.annee_calculees) === null || _vm$dossier_credit35 === void 0 ? void 0 : _vm$dossier_credit35.at(-1) : "") + ")\n                        ")]), _vm._v(" "), _vm._m(13)])]), _vm._v(" "), _c("tbody", _vm._l((_vm$dossier_credit36 = _vm.dossier_credit) === null || _vm$dossier_credit36 === void 0 || (_vm$dossier_credit36 = _vm$dossier_credit36.cred_pub_tb_13) === null || _vm$dossier_credit36 === void 0 ? void 0 : _vm$dossier_credit36.structure_financiere, function (act_rent, index) {
    return _c("tr", {
      key: index
    }, [_c("td", [_c("label", [_vm._v("\n                                " + _vm._s(act_rent === null || act_rent === void 0 ? void 0 : act_rent.label) + "\n                            ")])]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.financial(act_rent === null || act_rent === void 0 ? void 0 : act_rent.curr_year_3)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.financial(act_rent === null || act_rent === void 0 ? void 0 : act_rent.curr_year_2)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.financial(act_rent === null || act_rent === void 0 ? void 0 : act_rent.curr_year_1)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.financial(act_rent.variance)))])]);
  }), 0)]), _vm._v(" "), _c("div", {
    staticClass: "table_resonsive"
  }, [_c("table", {
    staticClass: "table table-bordered mb-1"
  }, [_c("tbody", [_vm._m(14), _vm._v(" "), _c("tr", [_c("td", [_c("p", {
    domProps: {
      innerHTML: _vm._s((_vm$dossier_credit37 = _vm.dossier_credit) === null || _vm$dossier_credit37 === void 0 || (_vm$dossier_credit37 = _vm$dossier_credit37.cred_pub_tb_13) === null || _vm$dossier_credit37 === void 0 ? void 0 : _vm$dossier_credit37.commentaire_structure_financiere)
    }
  })])])])])])]), _vm._v(" "), _c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-bordered mt-2 mb-1"
  }, [_c("thead", [_vm._m(15), _vm._v(" "), _c("tr", {
    staticClass: "fw-bold"
  }, [_vm._m(16), _vm._v(" "), _vm._m(17), _vm._v(" "), _c("td", [_vm._v(_vm._s(((_vm$dossier_credit38 = _vm.dossier_credit) === null || _vm$dossier_credit38 === void 0 || (_vm$dossier_credit38 = _vm$dossier_credit38.cred_pub_tb_13) === null || _vm$dossier_credit38 === void 0 ? void 0 : _vm$dossier_credit38.date_debut) != "" ? _vm.formatDate((_vm$dossier_credit39 = _vm.dossier_credit) === null || _vm$dossier_credit39 === void 0 || (_vm$dossier_credit39 = _vm$dossier_credit39.cred_pub_tb_13) === null || _vm$dossier_credit39 === void 0 ? void 0 : _vm$dossier_credit39.date_debut) : ""))]), _vm._v(" "), _vm._m(18), _vm._v(" "), _c("td", [_vm._v(_vm._s(((_vm$dossier_credit40 = _vm.dossier_credit) === null || _vm$dossier_credit40 === void 0 || (_vm$dossier_credit40 = _vm$dossier_credit40.cred_pub_tb_13) === null || _vm$dossier_credit40 === void 0 ? void 0 : _vm$dossier_credit40.date_fin) != "" ? _vm.formatDate((_vm$dossier_credit41 = _vm.dossier_credit) === null || _vm$dossier_credit41 === void 0 || (_vm$dossier_credit41 = _vm$dossier_credit41.cred_pub_tb_13) === null || _vm$dossier_credit41 === void 0 ? void 0 : _vm$dossier_credit41.date_fin) : ""))])])]), _vm._v(" "), _c("tbody", _vm._l((_vm$dossier_credit42 = _vm.dossier_credit) === null || _vm$dossier_credit42 === void 0 || (_vm$dossier_credit42 = _vm$dossier_credit42.cred_pub_tb_13) === null || _vm$dossier_credit42 === void 0 ? void 0 : _vm$dossier_credit42.realisation, function (act_rent, index) {
    return _c("tr", {
      key: index
    }, [_c("td", [_c("label", [_vm._v("\n                                " + _vm._s(act_rent === null || act_rent === void 0 ? void 0 : act_rent.libelle) + "\n                            ")])]), _vm._v(" "), _c("td", {
      staticClass: "text-center",
      attrs: {
        colspan: "5"
      }
    }, [_vm._v(_vm._s(act_rent === null || act_rent === void 0 ? void 0 : act_rent.montant))])]);
  }), 0)])]), _vm._v(" "), _c("div", {
    staticClass: "table_resonsive"
  }, [_c("table", {
    staticClass: "table table-bordered mb-1"
  }, [_c("tbody", [_vm._m(19), _vm._v(" "), _c("tr", [_c("td", [_c("p", {
    domProps: {
      innerHTML: _vm._s((_vm$dossier_credit43 = _vm.dossier_credit) === null || _vm$dossier_credit43 === void 0 || (_vm$dossier_credit43 = _vm$dossier_credit43.cred_pub_tb_13) === null || _vm$dossier_credit43 === void 0 ? void 0 : _vm$dossier_credit43.commentaire_realisation)
    }
  })])])])])]), _vm._v(" "), _c("br"), _vm._v(" "), _c("table", {
    staticClass: "table table-bordered"
  }, [_c("thead", [_vm._m(20), _vm._v(" "), _c("tr", [_c("th", [_vm._v("Année")]), _vm._v(" "), _c("td", [_vm._v("\n                        N-2(" + _vm._s(((_vm$dossier_credit44 = _vm.dossier_credit) === null || _vm$dossier_credit44 === void 0 || (_vm$dossier_credit44 = _vm$dossier_credit44.cred_pub_tb_13.annee_calculees) === null || _vm$dossier_credit44 === void 0 ? void 0 : _vm$dossier_credit44.at(-3)) != undefined ? (_vm$dossier_credit45 = _vm.dossier_credit) === null || _vm$dossier_credit45 === void 0 || (_vm$dossier_credit45 = _vm$dossier_credit45.cred_pub_tb_13.annee_calculees) === null || _vm$dossier_credit45 === void 0 ? void 0 : _vm$dossier_credit45.at(-3) : "") + ")\n                        ")]), _vm._v(" "), _c("td", [_vm._v("\n                            N-1(" + _vm._s(((_vm$dossier_credit46 = _vm.dossier_credit) === null || _vm$dossier_credit46 === void 0 || (_vm$dossier_credit46 = _vm$dossier_credit46.cred_pub_tb_13.annee_calculees) === null || _vm$dossier_credit46 === void 0 ? void 0 : _vm$dossier_credit46.at(-2)) != undefined ? (_vm$dossier_credit47 = _vm.dossier_credit) === null || _vm$dossier_credit47 === void 0 || (_vm$dossier_credit47 = _vm$dossier_credit47.cred_pub_tb_13.annee_calculees) === null || _vm$dossier_credit47 === void 0 ? void 0 : _vm$dossier_credit47.at(-2) : "") + ")\n                        ")]), _vm._v(" "), _c("td", [_vm._v("\n                            N(" + _vm._s(((_vm$dossier_credit48 = _vm.dossier_credit) === null || _vm$dossier_credit48 === void 0 || (_vm$dossier_credit48 = _vm$dossier_credit48.cred_pub_tb_13.annee_calculees) === null || _vm$dossier_credit48 === void 0 ? void 0 : _vm$dossier_credit48.at(-1)) != undefined ? (_vm$dossier_credit49 = _vm.dossier_credit) === null || _vm$dossier_credit49 === void 0 || (_vm$dossier_credit49 = _vm$dossier_credit49.cred_pub_tb_13.annee_calculees) === null || _vm$dossier_credit49 === void 0 ? void 0 : _vm$dossier_credit49.at(-1) : "") + ")\n                        ")])])]), _vm._v(" "), _c("tbody", _vm._l(_vm.ratiosLiquidites, function (element, index) {
    return _c("tr", {
      key: index
    }, [_c("td", [_vm._v(_vm._s(element.libelle))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm._f("formatNumber")(element.curr_year_3)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm._f("formatNumber")(element.curr_year_2)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm._f("formatNumber")(element.curr_year_1)))])]);
  }), 0)]), _vm._v(" "), _c("table", {
    staticClass: "table table-bordered"
  }, [_c("thead", [_vm._m(21), _vm._v(" "), _c("tr", [_c("th", [_vm._v("Année")]), _vm._v(" "), _c("td", [_vm._v("\n                        N-2(" + _vm._s(((_vm$dossier_credit50 = _vm.dossier_credit) === null || _vm$dossier_credit50 === void 0 || (_vm$dossier_credit50 = _vm$dossier_credit50.cred_pub_tb_13.annee_calculees) === null || _vm$dossier_credit50 === void 0 ? void 0 : _vm$dossier_credit50.at(-3)) != undefined ? (_vm$dossier_credit51 = _vm.dossier_credit) === null || _vm$dossier_credit51 === void 0 || (_vm$dossier_credit51 = _vm$dossier_credit51.cred_pub_tb_13.annee_calculees) === null || _vm$dossier_credit51 === void 0 ? void 0 : _vm$dossier_credit51.at(-3) : "") + ")\n                        ")]), _vm._v(" "), _c("td", [_vm._v("\n                            N-1(" + _vm._s(((_vm$dossier_credit52 = _vm.dossier_credit) === null || _vm$dossier_credit52 === void 0 || (_vm$dossier_credit52 = _vm$dossier_credit52.cred_pub_tb_13.annee_calculees) === null || _vm$dossier_credit52 === void 0 ? void 0 : _vm$dossier_credit52.at(-2)) != undefined ? (_vm$dossier_credit53 = _vm.dossier_credit) === null || _vm$dossier_credit53 === void 0 || (_vm$dossier_credit53 = _vm$dossier_credit53.cred_pub_tb_13.annee_calculees) === null || _vm$dossier_credit53 === void 0 ? void 0 : _vm$dossier_credit53.at(-2) : "") + ")\n                        ")]), _vm._v(" "), _c("td", [_vm._v("\n                            N(" + _vm._s(((_vm$dossier_credit54 = _vm.dossier_credit) === null || _vm$dossier_credit54 === void 0 || (_vm$dossier_credit54 = _vm$dossier_credit54.cred_pub_tb_13.annee_calculees) === null || _vm$dossier_credit54 === void 0 ? void 0 : _vm$dossier_credit54.at(-1)) != undefined ? (_vm$dossier_credit55 = _vm.dossier_credit) === null || _vm$dossier_credit55 === void 0 || (_vm$dossier_credit55 = _vm$dossier_credit55.cred_pub_tb_13.annee_calculees) === null || _vm$dossier_credit55 === void 0 ? void 0 : _vm$dossier_credit55.at(-1) : "") + ")\n                        ")])])]), _vm._v(" "), _c("tbody", _vm._l(_vm.ratiosEndettements, function (element, index) {
    return _c("tr", {
      key: index
    }, [_c("td", [_vm._v(_vm._s(element.libelle))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm._f("formatNumber")(element.curr_year_3, true)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm._f("formatNumber")(element.curr_year_2, true)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm._f("formatNumber")(element.curr_year_1, true)))])]);
  }), 0)]), _vm._v(" "), _c("table", {
    staticClass: "table table-bordered"
  }, [_c("thead", [_vm._m(22), _vm._v(" "), _c("tr", [_c("th", [_vm._v("Année")]), _vm._v(" "), _c("td", [_vm._v("\n                        N-2(" + _vm._s(((_vm$dossier_credit56 = _vm.dossier_credit) === null || _vm$dossier_credit56 === void 0 || (_vm$dossier_credit56 = _vm$dossier_credit56.cred_pub_tb_13.annee_calculees) === null || _vm$dossier_credit56 === void 0 ? void 0 : _vm$dossier_credit56.at(-3)) != undefined ? (_vm$dossier_credit57 = _vm.dossier_credit) === null || _vm$dossier_credit57 === void 0 || (_vm$dossier_credit57 = _vm$dossier_credit57.cred_pub_tb_13.annee_calculees) === null || _vm$dossier_credit57 === void 0 ? void 0 : _vm$dossier_credit57.at(-3) : "") + ")\n                        ")]), _vm._v(" "), _c("td", [_vm._v("\n                            N-1(" + _vm._s(((_vm$dossier_credit58 = _vm.dossier_credit) === null || _vm$dossier_credit58 === void 0 || (_vm$dossier_credit58 = _vm$dossier_credit58.cred_pub_tb_13.annee_calculees) === null || _vm$dossier_credit58 === void 0 ? void 0 : _vm$dossier_credit58.at(-2)) != undefined ? (_vm$dossier_credit59 = _vm.dossier_credit) === null || _vm$dossier_credit59 === void 0 || (_vm$dossier_credit59 = _vm$dossier_credit59.cred_pub_tb_13.annee_calculees) === null || _vm$dossier_credit59 === void 0 ? void 0 : _vm$dossier_credit59.at(-2) : "") + ")\n                        ")]), _vm._v(" "), _c("td", [_vm._v("\n                            N(" + _vm._s(((_vm$dossier_credit60 = _vm.dossier_credit) === null || _vm$dossier_credit60 === void 0 || (_vm$dossier_credit60 = _vm$dossier_credit60.cred_pub_tb_13.annee_calculees) === null || _vm$dossier_credit60 === void 0 ? void 0 : _vm$dossier_credit60.at(-1)) != undefined ? (_vm$dossier_credit61 = _vm.dossier_credit) === null || _vm$dossier_credit61 === void 0 || (_vm$dossier_credit61 = _vm$dossier_credit61.cred_pub_tb_13.annee_calculees) === null || _vm$dossier_credit61 === void 0 ? void 0 : _vm$dossier_credit61.at(-1) : "") + ")\n                        ")])])]), _vm._v(" "), _c("tbody", _vm._l(_vm.ratiosRentabilites, function (element, index) {
    return _c("tr", {
      key: index
    }, [_c("td", [_vm._v(_vm._s(element.libelle))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm._f("formatNumber")(element.curr_year_3)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm._f("formatNumber")(element.curr_year_2)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm._f("formatNumber")(element.curr_year_1)))])]);
  }), 0)]), _vm._v(" "), _c("table", {
    staticClass: "table table-bordered mb-2"
  }, [_c("thead", [_vm._m(23), _vm._v(" "), _c("tr", {
    staticClass: "fw-bold"
  }, [_vm._m(24), _vm._v(" "), _c("td", [_vm._v("\n                        N+1(" + _vm._s(((_vm$dossier_credit62 = _vm.dossier_credit) === null || _vm$dossier_credit62 === void 0 || (_vm$dossier_credit62 = _vm$dossier_credit62.cred_pub_tb_13.annee_calculees) === null || _vm$dossier_credit62 === void 0 ? void 0 : _vm$dossier_credit62.at(-1)) != undefined ? ((_vm$dossier_credit63 = _vm.dossier_credit) === null || _vm$dossier_credit63 === void 0 || (_vm$dossier_credit63 = _vm$dossier_credit63.cred_pub_tb_13.annee_calculees) === null || _vm$dossier_credit63 === void 0 ? void 0 : _vm$dossier_credit63.at(-1)) + 1 : "") + ")\n                      ")]), _vm._v(" "), _c("td", [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("N+2(" + _vm._s(((_vm$dossier_credit64 = _vm.dossier_credit) === null || _vm$dossier_credit64 === void 0 || (_vm$dossier_credit64 = _vm$dossier_credit64.cred_pub_tb_13.annee_calculees) === null || _vm$dossier_credit64 === void 0 ? void 0 : _vm$dossier_credit64.at(-1)) != undefined ? ((_vm$dossier_credit65 = _vm.dossier_credit) === null || _vm$dossier_credit65 === void 0 || (_vm$dossier_credit65 = _vm$dossier_credit65.cred_pub_tb_13.annee_calculees) === null || _vm$dossier_credit65 === void 0 ? void 0 : _vm$dossier_credit65.at(-1)) + 2 : "") + ")")])]), _vm._v(" "), _c("td", [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("N+3(" + _vm._s(((_vm$dossier_credit66 = _vm.dossier_credit) === null || _vm$dossier_credit66 === void 0 || (_vm$dossier_credit66 = _vm$dossier_credit66.cred_pub_tb_13.annee_calculees) === null || _vm$dossier_credit66 === void 0 ? void 0 : _vm$dossier_credit66.at(-1)) != undefined ? ((_vm$dossier_credit67 = _vm.dossier_credit) === null || _vm$dossier_credit67 === void 0 || (_vm$dossier_credit67 = _vm$dossier_credit67.cred_pub_tb_13.annee_calculees) === null || _vm$dossier_credit67 === void 0 ? void 0 : _vm$dossier_credit67.at(-1)) + 3 : "") + ")")])]), _vm._v(" "), _c("td", [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("N+4(" + _vm._s(((_vm$dossier_credit68 = _vm.dossier_credit) === null || _vm$dossier_credit68 === void 0 || (_vm$dossier_credit68 = _vm$dossier_credit68.cred_pub_tb_13.annee_calculees) === null || _vm$dossier_credit68 === void 0 ? void 0 : _vm$dossier_credit68.at(-1)) != undefined ? ((_vm$dossier_credit69 = _vm.dossier_credit) === null || _vm$dossier_credit69 === void 0 || (_vm$dossier_credit69 = _vm$dossier_credit69.cred_pub_tb_13.annee_calculees) === null || _vm$dossier_credit69 === void 0 ? void 0 : _vm$dossier_credit69.at(-1)) + 4 : "") + ")")])]), _vm._v(" "), _c("td", [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("N+5(" + _vm._s(((_vm$dossier_credit70 = _vm.dossier_credit) === null || _vm$dossier_credit70 === void 0 || (_vm$dossier_credit70 = _vm$dossier_credit70.cred_pub_tb_13.annee_calculees) === null || _vm$dossier_credit70 === void 0 ? void 0 : _vm$dossier_credit70.at(-1)) != undefined ? ((_vm$dossier_credit71 = _vm.dossier_credit) === null || _vm$dossier_credit71 === void 0 || (_vm$dossier_credit71 = _vm$dossier_credit71.cred_pub_tb_13.annee_calculees) === null || _vm$dossier_credit71 === void 0 ? void 0 : _vm$dossier_credit71.at(-1)) + 5 : "") + ")")])])])]), _vm._v(" "), _c("tbody", _vm._l((_vm$dossier_credit72 = _vm.dossier_credit) === null || _vm$dossier_credit72 === void 0 || (_vm$dossier_credit72 = _vm$dossier_credit72.cred_pub_tb_13) === null || _vm$dossier_credit72 === void 0 ? void 0 : _vm$dossier_credit72.compte_exploitation_prev, function (compte_exploitation, index) {
    return _c("tr", {
      key: index
    }, [_c("td", [_c("label", {
      attrs: {
        "for": ""
      }
    }, [_vm._v("\n                              " + _vm._s(compte_exploitation.libelle) + "\n                          ")])]), _vm._v(" "), _c("td", [_vm._v(_vm._s(compte_exploitation.curr_year_2))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(compte_exploitation.curr_year_1))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(compte_exploitation.curr_year))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(compte_exploitation.an_ulterieur_1))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(compte_exploitation.an_ulterieur_2))])]);
  }), 0)]), _vm._v(" "), _c("table", {
    staticClass: "table table-bordered mb-2"
  }, [_c("thead", [_vm._m(25), _vm._v(" "), _c("tr", {
    staticClass: "fw-bold bg-grey"
  }, [_vm._m(26), _vm._v(" "), _c("td", [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("N-2(" + _vm._s(((_vm$dossier_credit73 = _vm.dossier_credit) === null || _vm$dossier_credit73 === void 0 || (_vm$dossier_credit73 = _vm$dossier_credit73.cred_pub_tb_13.annee_calculees) === null || _vm$dossier_credit73 === void 0 ? void 0 : _vm$dossier_credit73.at(-1)) != undefined ? ((_vm$dossier_credit74 = _vm.dossier_credit) === null || _vm$dossier_credit74 === void 0 || (_vm$dossier_credit74 = _vm$dossier_credit74.cred_pub_tb_13.annee_calculees) === null || _vm$dossier_credit74 === void 0 ? void 0 : _vm$dossier_credit74.at(-1)) - 2 : "") + ")")])]), _vm._v(" "), _c("td", [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("N-1(" + _vm._s(((_vm$dossier_credit75 = _vm.dossier_credit) === null || _vm$dossier_credit75 === void 0 || (_vm$dossier_credit75 = _vm$dossier_credit75.cred_pub_tb_13.annee_calculees) === null || _vm$dossier_credit75 === void 0 ? void 0 : _vm$dossier_credit75.at(-1)) != undefined ? ((_vm$dossier_credit76 = _vm.dossier_credit) === null || _vm$dossier_credit76 === void 0 || (_vm$dossier_credit76 = _vm$dossier_credit76.cred_pub_tb_13.annee_calculees) === null || _vm$dossier_credit76 === void 0 ? void 0 : _vm$dossier_credit76.at(-1)) - 1 : "") + ")")])]), _vm._v(" "), _c("td", [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("N(" + _vm._s(((_vm$dossier_credit77 = _vm.dossier_credit) === null || _vm$dossier_credit77 === void 0 || (_vm$dossier_credit77 = _vm$dossier_credit77.cred_pub_tb_13.annee_calculees) === null || _vm$dossier_credit77 === void 0 ? void 0 : _vm$dossier_credit77.at(-1)) != undefined ? (_vm$dossier_credit78 = _vm.dossier_credit) === null || _vm$dossier_credit78 === void 0 || (_vm$dossier_credit78 = _vm$dossier_credit78.cred_pub_tb_13.annee_calculees) === null || _vm$dossier_credit78 === void 0 ? void 0 : _vm$dossier_credit78.at(-1) : "") + ")")])]), _vm._v(" "), _c("td", [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("N+1(" + _vm._s(((_vm$dossier_credit79 = _vm.dossier_credit) === null || _vm$dossier_credit79 === void 0 || (_vm$dossier_credit79 = _vm$dossier_credit79.cred_pub_tb_13.annee_calculees) === null || _vm$dossier_credit79 === void 0 ? void 0 : _vm$dossier_credit79.at(-1)) != undefined ? ((_vm$dossier_credit80 = _vm.dossier_credit) === null || _vm$dossier_credit80 === void 0 || (_vm$dossier_credit80 = _vm$dossier_credit80.cred_pub_tb_13.annee_calculees) === null || _vm$dossier_credit80 === void 0 ? void 0 : _vm$dossier_credit80.at(-1)) + 1 : "") + ")")])]), _vm._v(" "), _c("td", [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("N+2(" + _vm._s(((_vm$dossier_credit81 = _vm.dossier_credit) === null || _vm$dossier_credit81 === void 0 || (_vm$dossier_credit81 = _vm$dossier_credit81.cred_pub_tb_13.annee_calculees) === null || _vm$dossier_credit81 === void 0 ? void 0 : _vm$dossier_credit81.at(-1)) != undefined ? ((_vm$dossier_credit82 = _vm.dossier_credit) === null || _vm$dossier_credit82 === void 0 || (_vm$dossier_credit82 = _vm$dossier_credit82.cred_pub_tb_13.annee_calculees) === null || _vm$dossier_credit82 === void 0 ? void 0 : _vm$dossier_credit82.at(-1)) + 2 : "") + ")")])])])]), _vm._v(" "), _c("tbody", _vm._l((_vm$dossier_credit83 = _vm.dossier_credit) === null || _vm$dossier_credit83 === void 0 || (_vm$dossier_credit83 = _vm$dossier_credit83.cred_pub_tb_13) === null || _vm$dossier_credit83 === void 0 ? void 0 : _vm$dossier_credit83.testStress25, function (test_25, index) {
    return _c("tr", {
      key: index
    }, [_c("td", [_c("label", {
      attrs: {
        "for": ""
      }
    }, [_vm._v("\n                            " + _vm._s(test_25.libelle) + "\n                        ")])]), _vm._v(" "), _c("td", [_vm._v("\n                      " + _vm._s(test_25.curr_year_2) + "\n                    ")]), _vm._v(" "), _c("td", [_vm._v("\n                      " + _vm._s(test_25 === null || test_25 === void 0 ? void 0 : test_25.curr_year_1) + "\n                    ")]), _vm._v(" "), _c("td", [_vm._v("\n                      " + _vm._s(test_25.current_year) + "\n                    ")]), _vm._v(" "), _c("td", [_vm._v("\n                      " + _vm._s(test_25.an_ulterieur_1) + "\n                        \n                    ")]), _vm._v(" "), _c("td", [_vm._v("\n                      " + _vm._s(test_25.an_ulterieur_2) + "\n                    ")])]);
  }), 0)]), _vm._v(" "), _c("table", {
    staticClass: "table table-bordered mb-2"
  }, [_c("thead", [_vm._m(27), _vm._v(" "), _c("tr", {
    staticClass: "fw-bold bg-grey"
  }, [_vm._m(28), _vm._v(" "), _c("td", [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("N-2(" + _vm._s(((_vm$dossier_credit84 = _vm.dossier_credit) === null || _vm$dossier_credit84 === void 0 || (_vm$dossier_credit84 = _vm$dossier_credit84.cred_pub_tb_13.annee_calculees) === null || _vm$dossier_credit84 === void 0 ? void 0 : _vm$dossier_credit84.at(-1)) != undefined ? ((_vm$dossier_credit85 = _vm.dossier_credit) === null || _vm$dossier_credit85 === void 0 || (_vm$dossier_credit85 = _vm$dossier_credit85.cred_pub_tb_13.annee_calculees) === null || _vm$dossier_credit85 === void 0 ? void 0 : _vm$dossier_credit85.at(-1)) - 2 : "") + ")")])]), _vm._v(" "), _c("td", [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("N-1(" + _vm._s(((_vm$dossier_credit86 = _vm.dossier_credit) === null || _vm$dossier_credit86 === void 0 || (_vm$dossier_credit86 = _vm$dossier_credit86.cred_pub_tb_13.annee_calculees) === null || _vm$dossier_credit86 === void 0 ? void 0 : _vm$dossier_credit86.at(-1)) != undefined ? ((_vm$dossier_credit87 = _vm.dossier_credit) === null || _vm$dossier_credit87 === void 0 || (_vm$dossier_credit87 = _vm$dossier_credit87.cred_pub_tb_13.annee_calculees) === null || _vm$dossier_credit87 === void 0 ? void 0 : _vm$dossier_credit87.at(-1)) - 1 : "") + ")")])]), _vm._v(" "), _c("td", [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("N(" + _vm._s(((_vm$dossier_credit88 = _vm.dossier_credit) === null || _vm$dossier_credit88 === void 0 || (_vm$dossier_credit88 = _vm$dossier_credit88.cred_pub_tb_13.annee_calculees) === null || _vm$dossier_credit88 === void 0 ? void 0 : _vm$dossier_credit88.at(-1)) != undefined ? (_vm$dossier_credit89 = _vm.dossier_credit) === null || _vm$dossier_credit89 === void 0 || (_vm$dossier_credit89 = _vm$dossier_credit89.cred_pub_tb_13.annee_calculees) === null || _vm$dossier_credit89 === void 0 ? void 0 : _vm$dossier_credit89.at(-1) : "") + ")")])]), _vm._v(" "), _c("td", [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("N+1(" + _vm._s(((_vm$dossier_credit90 = _vm.dossier_credit) === null || _vm$dossier_credit90 === void 0 || (_vm$dossier_credit90 = _vm$dossier_credit90.cred_pub_tb_13.annee_calculees) === null || _vm$dossier_credit90 === void 0 ? void 0 : _vm$dossier_credit90.at(-1)) != undefined ? ((_vm$dossier_credit91 = _vm.dossier_credit) === null || _vm$dossier_credit91 === void 0 || (_vm$dossier_credit91 = _vm$dossier_credit91.cred_pub_tb_13.annee_calculees) === null || _vm$dossier_credit91 === void 0 ? void 0 : _vm$dossier_credit91.at(-1)) + 1 : "") + ")")])]), _vm._v(" "), _c("td", [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("N+2(" + _vm._s(((_vm$dossier_credit92 = _vm.dossier_credit) === null || _vm$dossier_credit92 === void 0 || (_vm$dossier_credit92 = _vm$dossier_credit92.cred_pub_tb_13.annee_calculees) === null || _vm$dossier_credit92 === void 0 ? void 0 : _vm$dossier_credit92.at(-1)) != undefined ? ((_vm$dossier_credit93 = _vm.dossier_credit) === null || _vm$dossier_credit93 === void 0 || (_vm$dossier_credit93 = _vm$dossier_credit93.cred_pub_tb_13.annee_calculees) === null || _vm$dossier_credit93 === void 0 ? void 0 : _vm$dossier_credit93.at(-1)) + 2 : "") + ")")])])])]), _vm._v(" "), _c("tbody", _vm._l((_vm$dossier_credit94 = _vm.dossier_credit) === null || _vm$dossier_credit94 === void 0 || (_vm$dossier_credit94 = _vm$dossier_credit94.cred_pub_tb_13) === null || _vm$dossier_credit94 === void 0 ? void 0 : _vm$dossier_credit94.testStress50, function (test_25, index) {
    return _c("tr", {
      key: index
    }, [_c("td", [_c("label", {
      attrs: {
        "for": ""
      }
    }, [_vm._v("\n                            " + _vm._s(test_25.libelle) + "\n                        ")])]), _vm._v(" "), _c("td", [_vm._v("\n                      " + _vm._s(test_25.curr_year_2) + "\n                    ")]), _vm._v(" "), _c("td", [_vm._v("\n                      " + _vm._s(test_25 === null || test_25 === void 0 ? void 0 : test_25.curr_year_1) + "\n                    ")]), _vm._v(" "), _c("td", [_vm._v("\n                      " + _vm._s(test_25.current_year) + "\n                    ")]), _vm._v(" "), _c("td", [_vm._v("\n                      " + _vm._s(test_25.an_ulterieur_1) + "\n                        \n                    ")]), _vm._v(" "), _c("td", [_vm._v("\n                      " + _vm._s(test_25.an_ulterieur_2) + "\n                    ")])]);
  }), 0)]), _vm._v(" "), _c("table", {
    staticClass: "table table-bordered mb-3"
  }, [_vm._m(29), _vm._v(" "), _c("tbody", {
    staticStyle: {
      "font-size": "0.9rem"
    }
  }, [_c("tr", [_c("td", {
    domProps: {
      innerHTML: _vm._s((_vm$dossier_credit95 = _vm.dossier_credit) === null || _vm$dossier_credit95 === void 0 || (_vm$dossier_credit95 = _vm$dossier_credit95.cred_pub_tb_13) === null || _vm$dossier_credit95 === void 0 ? void 0 : _vm$dossier_credit95.commentaire_notation)
    }
  })])])])])])]) : _vm._e();
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("tr", {
    staticClass: "bg-grey text-center"
  }, [_c("th", {
    attrs: {
      colspan: "5"
    }
  }, [_vm._v("Ratios réglementaires NSIA")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Années")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("tr", {
    staticClass: "bg-grey text-center"
  }, [_c("th", {
    attrs: {
      colspan: "5"
    }
  }, [_vm._v("Ratios activités NSIA")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Années")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("tr", {
    staticClass: "bg-grey text-center"
  }, [_c("th", {
    attrs: {
      colspan: "5"
    }
  }, [_vm._v("Ratios de structures financières NSIA")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Années")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("tr", {
    staticClass: "bg-grey"
  }, [_c("td", [_c("b", [_vm._v("Commentaire sur les ratios NSIA")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("tr", {
    staticClass: "bg-grey text-center"
  }, [_c("th", {
    attrs: {
      colspan: "5"
    }
  }, [_vm._v("Activité de rentabilité")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Années")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Var(%)")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("tr", {
    staticClass: "bg-grey"
  }, [_c("td", [_c("b", [_vm._v("Commentaire sur l'activité de rentabilité")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("tr", {
    staticClass: "bg-grey text-center"
  }, [_c("th", {
    attrs: {
      colspan: "5"
    }
  }, [_vm._v("Structure financière")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Années")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Var(%)")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("tr", {
    staticClass: "bg-grey"
  }, [_c("td", [_c("b", [_vm._v("Commentaire sur la structure financiére")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("tr", {
    staticClass: "bg-grey text-center"
  }, [_c("th", {
    attrs: {
      colspan: "5"
    }
  }, [_vm._v("Réalisation")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Performance financière")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Du : ")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {
    staticClass: "text-end"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Au : ")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("tr", {
    staticClass: "bg-grey"
  }, [_c("td", [_c("b", [_vm._v("Commentaire sur la realisation")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("tr", {
    staticClass: "bg-grey text-center"
  }, [_c("th", {
    attrs: {
      colspan: "4"
    }
  }, [_vm._v("Ratios de liquidité")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("tr", {
    staticClass: "bg-grey text-center"
  }, [_c("th", {
    attrs: {
      colspan: "4"
    }
  }, [_vm._v("Ratios d'endettement")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("tr", {
    staticClass: "bg-grey text-center"
  }, [_c("th", {
    attrs: {
      colspan: "4"
    }
  }, [_vm._v("Ratios de rentabilité")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("tr", {
    staticClass: "bg-grey text-center"
  }, [_c("th", {
    attrs: {
      colspan: "6"
    }
  }, [_vm._v("Compte d'explotation prévisionnelle")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Années")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("tr", {
    staticClass: "bg-grey text-center"
  }, [_c("th", {
    attrs: {
      colspan: "6"
    }
  }, [_vm._v("Test de stress avec une baisse de 25% du resultat net")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Années")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("tr", {
    staticClass: "bg-grey text-center"
  }, [_c("th", {
    attrs: {
      colspan: "6"
    }
  }, [_vm._v("Test de stress avec une baisse de 50% du resultat net")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Années")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", {
    staticStyle: {
      position: "sticky",
      top: "-0.9px",
      "z-index": "0"
    }
  }, [_c("tr", [_c("th", {
    staticClass: "text-center bg-grey",
    staticStyle: {
      "text-transform": "uppercase"
    }
  }, [_vm._v("Commentaire sur les ratios")])])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/anal_fin/ANFI1.vue?vue&type=style&index=0&id=a8af44d4&lang=css&scoped=true":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/anal_fin/ANFI1.vue?vue&type=style&index=0&id=a8af44d4&lang=css&scoped=true ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.bg-grey[data-v-a8af44d4]{\n    background-color:#f4f3f3;\n    font-weight: 600;\n    width: 32%;\n}\n.memo[data-v-a8af44d4] {\n  margin-top: 10px;\n  padding: 10px;\n  border: 2px solid #fff;\n  font-weight: 550;\n  font-size: 16px;\n  text-align: left;\n  text-transform: uppercase;\n  background-color: #34495e;\n  color: #fff;\n}\n/* td {\n    width: 250px;\n} */\n\n/* input {\n    width: 250px;\n}\n.th{\n    padding: 4px;\n    padding-bottom: 0px;\n}\n\nselect {\n    width: 250px;\n} */\n.head-memorandum-title[data-v-a8af44d4] {\n    margin-top: 15px;\n    padding: 16px;\n    color:#fff;\n    font-weight: bold;\n    background-color: #34495e;\n    border:2px solid #575759;\n    box-shadow: 1px 3px 4px #ddd;\n    font-size: 16px;\n    text-align: center;\n    text-transform: uppercase;\n    border-radius: 10px;\n    margin-bottom: 15px;\n}\n.lgcrd[data-v-a8af44d4] {\n    font-size:20px;\n    font-weight:bold;\n    color:#dc0030;\n}\n.head-memorandum-title[data-v-a8af44d4] {\n    margin-top: 15px;\n    padding: 16px;\n    color:#fff;\n    font-weight: bold;\n    background-color: #34495e;\n    border:2px solid #575759;\n    box-shadow: 1px 3px 4px #ddd;\n    font-size: 16px;\n    text-align: center;\n    text-transform: uppercase;\n    border-radius: 10px;\n    margin-bottom: 15px;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/anal_fin/ANFI1.vue?vue&type=style&index=0&id=a8af44d4&lang=css&scoped=true":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/anal_fin/ANFI1.vue?vue&type=style&index=0&id=a8af44d4&lang=css&scoped=true ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ANFI1_vue_vue_type_style_index_0_id_a8af44d4_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ANFI1.vue?vue&type=style&index=0&id=a8af44d4&lang=css&scoped=true */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/anal_fin/ANFI1.vue?vue&type=style&index=0&id=a8af44d4&lang=css&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ANFI1_vue_vue_type_style_index_0_id_a8af44d4_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ANFI1_vue_vue_type_style_index_0_id_a8af44d4_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/offview/bank/nsia/memo/anal_fin/ANFI1.vue":
/*!***************************************************************************!*\
  !*** ./resources/js/components/offview/bank/nsia/memo/anal_fin/ANFI1.vue ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ANFI1_vue_vue_type_template_id_a8af44d4_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ANFI1.vue?vue&type=template&id=a8af44d4&scoped=true */ "./resources/js/components/offview/bank/nsia/memo/anal_fin/ANFI1.vue?vue&type=template&id=a8af44d4&scoped=true");
/* harmony import */ var _ANFI1_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ANFI1.vue?vue&type=script&lang=js */ "./resources/js/components/offview/bank/nsia/memo/anal_fin/ANFI1.vue?vue&type=script&lang=js");
/* harmony import */ var _ANFI1_vue_vue_type_style_index_0_id_a8af44d4_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ANFI1.vue?vue&type=style&index=0&id=a8af44d4&lang=css&scoped=true */ "./resources/js/components/offview/bank/nsia/memo/anal_fin/ANFI1.vue?vue&type=style&index=0&id=a8af44d4&lang=css&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ANFI1_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _ANFI1_vue_vue_type_template_id_a8af44d4_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _ANFI1_vue_vue_type_template_id_a8af44d4_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "a8af44d4",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/offview/bank/nsia/memo/anal_fin/ANFI1.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/offview/bank/nsia/memo/anal_fin/ANFI1.vue?vue&type=script&lang=js":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/offview/bank/nsia/memo/anal_fin/ANFI1.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ANFI1_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ANFI1.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/anal_fin/ANFI1.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ANFI1_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/offview/bank/nsia/memo/anal_fin/ANFI1.vue?vue&type=style&index=0&id=a8af44d4&lang=css&scoped=true":
/*!***********************************************************************************************************************************!*\
  !*** ./resources/js/components/offview/bank/nsia/memo/anal_fin/ANFI1.vue?vue&type=style&index=0&id=a8af44d4&lang=css&scoped=true ***!
  \***********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ANFI1_vue_vue_type_style_index_0_id_a8af44d4_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ANFI1.vue?vue&type=style&index=0&id=a8af44d4&lang=css&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/anal_fin/ANFI1.vue?vue&type=style&index=0&id=a8af44d4&lang=css&scoped=true");


/***/ }),

/***/ "./resources/js/components/offview/bank/nsia/memo/anal_fin/ANFI1.vue?vue&type=template&id=a8af44d4&scoped=true":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/components/offview/bank/nsia/memo/anal_fin/ANFI1.vue?vue&type=template&id=a8af44d4&scoped=true ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ANFI1_vue_vue_type_template_id_a8af44d4_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ANFI1_vue_vue_type_template_id_a8af44d4_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ANFI1_vue_vue_type_template_id_a8af44d4_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ANFI1.vue?vue&type=template&id=a8af44d4&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/anal_fin/ANFI1.vue?vue&type=template&id=a8af44d4&scoped=true");


/***/ })

}]);