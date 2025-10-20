"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_offview_bank_nsia_memo_produits_distributeur_distributeur_friesland_c-9464d7"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/produits/distributeur/distributeur_friesland_campina/FFC6 copy.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/produits/distributeur/distributeur_friesland_campina/FFC6 copy.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../../services/auth.service */ "./resources/js/services/auth.service.js");
/* harmony import */ var _services_ebapis_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../../services/ebapis.service */ "./resources/js/services/ebapis.service.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    dossier_credit: Object
  },
  mounted: function mounted() {
    var _this$dossier_credit;
    var applied_templ_name = (_this$dossier_credit = this.dossier_credit) === null || _this$dossier_credit === void 0 ? void 0 : _this$dossier_credit.applied_templ_name;
    var tbArrays = this.determineCredPubTables(applied_templ_name);
    this.credpub00 = tbArrays[0];
    if (this.data_tb) {
      this.loadBeforeRequest();
    }
  },
  data: function data() {
    var _this$dossier_credit2;
    return {
      ebapisHost: _services_ebapis_service__WEBPACK_IMPORTED_MODULE_1__["default"].host,
      notationFinale: "",
      notationFinanciere: "",
      codeRatiosActivite: "",
      notationQuantitative: "",
      notationQualitatif: "",
      notation_qualitative: "",
      annee_referentielle: "",
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
      }],
      data_tb: (_this$dossier_credit2 = this.dossier_credit) === null || _this$dossier_credit2 === void 0 ? void 0 : _this$dossier_credit2.cred_pub_tb_100007,
      credpub00: null
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
      var _this$dossier_credit3,
        _this$dossier_credit4,
        _this2 = this;
      this.annee_referentielle = (_this$dossier_credit3 = this.dossier_credit) === null || _this$dossier_credit3 === void 0 || (_this$dossier_credit3 = _this$dossier_credit3[this.credpub00]) === null || _this$dossier_credit3 === void 0 ? void 0 : _this$dossier_credit3.annee_referentielle;
      // this.annee_referentielle = this.annee_referentielle.toString()
      this.ncc = (_this$dossier_credit4 = this.dossier_credit) === null || _this$dossier_credit4 === void 0 || (_this$dossier_credit4 = _this$dossier_credit4[this.credpub00]) === null || _this$dossier_credit4 === void 0 ? void 0 : _this$dossier_credit4.compte_contribuable;
      if (res.status == 200) {
        var options = {
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
        this.$axios.request(options).then(function (response) {
          //console.log(response.data);
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
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/produits/distributeur/distributeur_friesland_campina/FFC6 copy.vue?vue&type=template&id=033f9150&scoped=true":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/produits/distributeur/distributeur_friesland_campina/FFC6 copy.vue?vue&type=template&id=033f9150&scoped=true ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm$data_tb, _vm$data_tb2, _vm$data_tb3, _vm$data_tb4, _vm$data_tb5, _vm$data_tb6, _vm$data_tb7, _vm$data_tb8, _vm$data_tb9, _vm$data_tb0, _vm$data_tb1, _vm$data_tb10, _vm$data_tb11, _vm$data_tb12, _vm$data_tb13;
  var _vm = this,
    _c = _vm._self._c;
  return _vm.data_tb ? _c("div", {
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
  }, [_vm._m(1), _vm._v(" "), _c("td", [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("N-2 (" + _vm._s(_vm.annee_referentielle - 2) + ")")])]), _vm._v(" "), _c("td", [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("N-1 (" + _vm._s(_vm.annee_referentielle - 1) + ")")])]), _vm._v(" "), _c("td", [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("N (" + _vm._s(_vm.annee_referentielle) + ")")])]), _vm._v(" "), _vm._m(2)])]), _vm._v(" "), _c("tbody", _vm._l((_vm$data_tb = _vm.data_tb) === null || _vm$data_tb === void 0 ? void 0 : _vm$data_tb.activite_rentabilite, function (act_rent, index) {
    return _c("tr", {
      key: index
    }, [_c("td", [_c("label", [_vm._v("\n                                    " + _vm._s(act_rent === null || act_rent === void 0 ? void 0 : act_rent.label) + "\n                                ")])]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.financial(act_rent === null || act_rent === void 0 ? void 0 : act_rent.curr_year_3)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.financial(act_rent === null || act_rent === void 0 ? void 0 : act_rent.curr_year_2)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.financial(act_rent === null || act_rent === void 0 ? void 0 : act_rent.curr_year_1)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.financial(act_rent.variance)))])]);
  }), 0)]), _vm._v(" "), _c("div", {
    staticClass: "table_resonsive"
  }, [_c("table", {
    staticClass: "table table-bordered mb-4"
  }, [_c("tbody", [_vm._m(3), _vm._v(" "), _c("tr", [_c("td", [_c("p", {
    domProps: {
      innerHTML: _vm._s((_vm$data_tb2 = _vm.data_tb) === null || _vm$data_tb2 === void 0 ? void 0 : _vm$data_tb2.commentaire_activite_rentabilite)
    }
  })])])])])])]), _vm._v(" "), _c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-bordered mt-2 mb-4"
  }, [_c("thead", [_vm._m(4), _vm._v(" "), _c("tr", {
    staticClass: "fw-bold"
  }, [_vm._m(5), _vm._v(" "), _c("td", [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("N-2 (" + _vm._s(_vm.annee_referentielle - 2) + ")")])]), _vm._v(" "), _c("td", [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("N-1 (" + _vm._s(_vm.annee_referentielle - 1) + ")")])]), _vm._v(" "), _c("td", [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("N (" + _vm._s(_vm.annee_referentielle) + ")")])]), _vm._v(" "), _vm._m(6)])]), _vm._v(" "), _c("tbody", _vm._l((_vm$data_tb3 = _vm.data_tb) === null || _vm$data_tb3 === void 0 ? void 0 : _vm$data_tb3.structure_financiere, function (act_rent, index) {
    return _c("tr", {
      key: index
    }, [_c("td", [_c("label", [_vm._v("\n                                    " + _vm._s(act_rent === null || act_rent === void 0 ? void 0 : act_rent.label) + "\n                                ")])]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.financial(act_rent === null || act_rent === void 0 ? void 0 : act_rent.curr_year_3)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.financial(act_rent === null || act_rent === void 0 ? void 0 : act_rent.curr_year_2)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.financial(act_rent === null || act_rent === void 0 ? void 0 : act_rent.curr_year_1)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.financial(act_rent.variance)))])]);
  }), 0)]), _vm._v(" "), _c("div", {
    staticClass: "table_resonsive"
  }, [_c("table", {
    staticClass: "table table-bordered mb-4"
  }, [_c("tbody", [_vm._m(7), _vm._v(" "), _c("tr", [_c("td", [_c("p", {
    domProps: {
      innerHTML: _vm._s((_vm$data_tb4 = _vm.data_tb) === null || _vm$data_tb4 === void 0 ? void 0 : _vm$data_tb4.commentaire_structure_financiere)
    }
  })])])])])])]), _vm._v(" "), _c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-bordered mt-2 mb-4"
  }, [_c("thead", [_vm._m(8), _vm._v(" "), _c("tr", {
    staticClass: "fw-bold"
  }, [_vm._m(9), _vm._v(" "), _vm._m(10), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$data_tb5 = _vm.data_tb) === null || _vm$data_tb5 === void 0 ? void 0 : _vm$data_tb5.date_debut))]), _vm._v(" "), _vm._m(11), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$data_tb6 = _vm.data_tb) === null || _vm$data_tb6 === void 0 ? void 0 : _vm$data_tb6.date_fin))])])]), _vm._v(" "), _c("tbody", _vm._l((_vm$data_tb7 = _vm.data_tb) === null || _vm$data_tb7 === void 0 ? void 0 : _vm$data_tb7.realisation, function (act_rent, index) {
    return _c("tr", {
      key: index
    }, [_c("td", [_c("label", [_vm._v("\n                                    " + _vm._s(act_rent === null || act_rent === void 0 ? void 0 : act_rent.libelle) + "\n                                ")])]), _vm._v(" "), _c("td", {
      staticClass: "text-center",
      attrs: {
        colspan: "5"
      }
    }, [_vm._v(_vm._s(act_rent === null || act_rent === void 0 ? void 0 : act_rent.montant))])]);
  }), 0)])]), _vm._v(" "), _c("div", {
    staticClass: "table_resonsive"
  }, [_c("table", {
    staticClass: "table table-bordered mb-4"
  }, [_c("tbody", [_vm._m(12), _vm._v(" "), _c("tr", [_c("td", [_c("p", {
    domProps: {
      innerHTML: _vm._s(_vm.data_tb.commentaire_realsiation)
    }
  })])])])])]), _vm._v(" "), _c("br"), _vm._v(" "), _c("table", {
    staticClass: "table table-bordered mb-4"
  }, [_c("thead", [_vm._m(13), _vm._v(" "), _c("tr", {
    staticClass: "fw-bold"
  }, [_vm._m(14), _vm._v(" "), _c("td", [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("N-2 (" + _vm._s(_vm.annee_referentielle - 2) + ")")])]), _vm._v(" "), _c("td", [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("N-1 (" + _vm._s(_vm.annee_referentielle - 1) + ")")])]), _vm._v(" "), _c("td", [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("N (" + _vm._s(_vm.annee_referentielle) + ")")])])])]), _vm._v(" "), _c("tbody", _vm._l((_vm$data_tb8 = _vm.data_tb) === null || _vm$data_tb8 === void 0 ? void 0 : _vm$data_tb8.ratiosByCategory["RATIO REGLEMENTAIRE"], function (act_rent, index) {
    return _c("tr", {
      key: index
    }, [_c("td", [_c("label", [_vm._v("\n                                " + _vm._s(act_rent === null || act_rent === void 0 ? void 0 : act_rent.libelle) + "\n                            ")])]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.financial(act_rent === null || act_rent === void 0 ? void 0 : act_rent.n2)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.financial(act_rent === null || act_rent === void 0 ? void 0 : act_rent.n1)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.financial(act_rent === null || act_rent === void 0 ? void 0 : act_rent.n)))])]);
  }), 0)]), _vm._v(" "), _c("table", {
    staticClass: "table table-bordered mb-4"
  }, [_c("thead", [_vm._m(15), _vm._v(" "), _c("tr", {
    staticClass: "fw-bold"
  }, [_vm._m(16), _vm._v(" "), _c("td", [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("N-2 (" + _vm._s(_vm.annee_referentielle - 2) + ")")])]), _vm._v(" "), _c("td", [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("N-1 (" + _vm._s(_vm.annee_referentielle - 1) + ")")])]), _vm._v(" "), _c("td", [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("N (" + _vm._s(_vm.annee_referentielle) + ")")])])])]), _vm._v(" "), _c("tbody", _vm._l((_vm$data_tb9 = _vm.data_tb) === null || _vm$data_tb9 === void 0 ? void 0 : _vm$data_tb9.ratiosByCategory["ACTIVITE"], function (act_rent, index) {
    return _c("tr", {
      key: index
    }, [_c("td", [_c("label", [_vm._v("\n                                " + _vm._s(act_rent === null || act_rent === void 0 ? void 0 : act_rent.libelle) + "\n                            ")])]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.financial(act_rent === null || act_rent === void 0 ? void 0 : act_rent.n2)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.financial(act_rent === null || act_rent === void 0 ? void 0 : act_rent.n1)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.financial(act_rent === null || act_rent === void 0 ? void 0 : act_rent.n)))])]);
  }), 0)]), _vm._v(" "), _c("table", {
    staticClass: "table table-bordered mb-4"
  }, [_c("thead", [_vm._m(17), _vm._v(" "), _c("tr", {
    staticClass: "fw-bold"
  }, [_vm._m(18), _vm._v(" "), _c("td", [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("N-2 (" + _vm._s(_vm.annee_referentielle - 2) + ")")])]), _vm._v(" "), _c("td", [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("N-1 (" + _vm._s(_vm.annee_referentielle - 1) + ")")])]), _vm._v(" "), _c("td", [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("N (" + _vm._s(_vm.annee_referentielle) + ")")])])])]), _vm._v(" "), _c("tbody", _vm._l((_vm$data_tb0 = _vm.data_tb) === null || _vm$data_tb0 === void 0 ? void 0 : _vm$data_tb0.ratiosByCategory["STRUCTURE FINANCIERE"], function (act_rent, index) {
    return _c("tr", {
      key: index
    }, [_c("td", [_c("label", [_vm._v("\n                                " + _vm._s(act_rent === null || act_rent === void 0 ? void 0 : act_rent.libelle) + "\n                            ")])]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.financial(act_rent === null || act_rent === void 0 ? void 0 : act_rent.n2)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.financial(act_rent === null || act_rent === void 0 ? void 0 : act_rent.n1)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.financial(act_rent === null || act_rent === void 0 ? void 0 : act_rent.n)))])]);
  }), 0)]), _vm._v(" "), _c("div", {
    staticClass: "table_resonsive"
  }, [_c("table", {
    staticClass: "table table-bordered mb-2"
  }, [_c("tbody", [_vm._m(19), _vm._v(" "), _c("tr", [_c("td", [_c("p", {
    domProps: {
      innerHTML: _vm._s((_vm$data_tb1 = _vm.data_tb) === null || _vm$data_tb1 === void 0 ? void 0 : _vm$data_tb1.commentaire_ratios_nsia)
    }
  })])])])])]), _vm._v(" "), _c("table", {
    staticClass: "table table-bordered mb-2"
  }, [_c("thead", [_vm._m(20), _vm._v(" "), _c("tr", {
    staticClass: "fw-bold"
  }, [_vm._m(21), _vm._v(" "), _c("td", [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("N+1 (" + _vm._s(Number(_vm.annee_referentielle) + 1) + ")")])]), _vm._v(" "), _c("td", [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("N+2 (" + _vm._s(Number(_vm.annee_referentielle) + 2) + ")")])]), _vm._v(" "), _c("td", [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("N+3 (" + _vm._s(Number(_vm.annee_referentielle) + 3) + ")")])]), _vm._v(" "), _c("td", [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("N+4 (" + _vm._s(Number(_vm.annee_referentielle) + 4) + ")")])]), _vm._v(" "), _c("td", [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("N+5 (" + _vm._s(Number(_vm.annee_referentielle) + 5) + ")")])])])]), _vm._v(" "), _c("tbody", _vm._l((_vm$data_tb10 = _vm.data_tb) === null || _vm$data_tb10 === void 0 ? void 0 : _vm$data_tb10.compte_exploitation_prev, function (compte_exploitation, index) {
    return _c("tr", {
      key: index
    }, [_c("td", [_c("label", {
      attrs: {
        "for": ""
      }
    }, [_vm._v("\n                                " + _vm._s(compte_exploitation.libelle) + "\n                            ")])]), _vm._v(" "), _c("td", [_vm._v(_vm._s(compte_exploitation.curr_year_2))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(compte_exploitation.curr_year_1))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(compte_exploitation.current_year))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(compte_exploitation.an_ulterieur_1))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(compte_exploitation.an_ulterieur_2))])]);
  }), 0)]), _vm._v(" "), _c("table", {
    staticClass: "table table-bordered mb-2"
  }, [_vm._m(22), _vm._v(" "), _c("tbody", _vm._l((_vm$data_tb11 = _vm.data_tb) === null || _vm$data_tb11 === void 0 ? void 0 : _vm$data_tb11.testStress25, function (test_25, index) {
    return _c("tr", {
      key: index
    }, [_c("td", [_c("label", {
      attrs: {
        "for": ""
      }
    }, [_vm._v("\n                                " + _vm._s(test_25.libelle) + "\n                            ")])]), _vm._v(" "), _c("td", [_vm._v("\n                            " + _vm._s(test_25.curr_year_2) + "\n                        ")]), _vm._v(" "), _c("td", [_vm._v("\n                            " + _vm._s(test_25 === null || test_25 === void 0 ? void 0 : test_25.curr_year_1) + "\n                        ")]), _vm._v(" "), _c("td", [_vm._v("\n                            " + _vm._s(test_25.current_year) + "\n                        ")]), _vm._v(" "), _c("td", [_vm._v("\n                            " + _vm._s(test_25.an_ulterieur_1) + "\n\n                        ")]), _vm._v(" "), _c("td", [_vm._v("\n                            " + _vm._s(test_25.an_ulterieur_2) + "\n                        ")])]);
  }), 0)]), _vm._v(" "), _c("table", {
    staticClass: "table table-bordered mb-2"
  }, [_vm._m(23), _vm._v(" "), _c("tbody", _vm._l((_vm$data_tb12 = _vm.data_tb) === null || _vm$data_tb12 === void 0 ? void 0 : _vm$data_tb12.testStress50, function (test_25, index) {
    return _c("tr", {
      key: index
    }, [_c("td", [_c("label", {
      attrs: {
        "for": ""
      }
    }, [_vm._v("\n                                " + _vm._s(test_25.libelle) + "\n                            ")])]), _vm._v(" "), _c("td", [_vm._v("\n                            " + _vm._s(test_25.curr_year_2) + "\n                        ")]), _vm._v(" "), _c("td", [_vm._v("\n                            " + _vm._s(test_25 === null || test_25 === void 0 ? void 0 : test_25.curr_year_1) + "\n                        ")]), _vm._v(" "), _c("td", [_vm._v("\n                            " + _vm._s(test_25.current_year) + "\n                        ")]), _vm._v(" "), _c("td", [_vm._v("\n                            " + _vm._s(test_25.an_ulterieur_1) + "\n\n                        ")]), _vm._v(" "), _c("td", [_vm._v("\n                            " + _vm._s(test_25.an_ulterieur_2) + "\n                        ")])]);
  }), 0)]), _vm._v(" "), _c("table", {
    staticClass: "table table-bordered mb-3"
  }, [_vm._m(24), _vm._v(" "), _c("tbody", {
    staticStyle: {
      "font-size": "0.9rem"
    }
  }, [_c("tr", [_c("td", {
    domProps: {
      innerHTML: _vm._s((_vm$data_tb13 = _vm.data_tb) === null || _vm$data_tb13 === void 0 ? void 0 : _vm$data_tb13.commentaire_ratios)
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
  }, [_vm._v("Var (%)")])]);
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
  }, [_vm._v("Du")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {
    staticClass: "text-end"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Au :")])]);
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
      colspan: "6"
    }
  }, [_vm._v("Compte d'exploitation prévisionnelle")])]);
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
  return _c("thead", [_c("tr", {
    staticClass: "bg-grey text-center"
  }, [_c("th", {
    attrs: {
      colspan: "6"
    }
  }, [_vm._v("Test de stress avec une baisse de 25% du resultat net")])]), _vm._v(" "), _c("tr", {
    staticClass: "fw-bold bg-grey"
  }, [_c("td", [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Années")])]), _vm._v(" "), _c("td", [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("N-2 (2021)")])]), _vm._v(" "), _c("td", [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("N-1 (2022)")])]), _vm._v(" "), _c("td", [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("N (2023)")])]), _vm._v(" "), _c("td", [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("N+1 (2024)")])]), _vm._v(" "), _c("td", [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("N+2 (2025)")])])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", {
    staticClass: "bg-grey text-center"
  }, [_c("th", {
    attrs: {
      colspan: "6"
    }
  }, [_vm._v("Test de stress avec une baisse de 50% du resultat net")])]), _vm._v(" "), _c("tr", {
    staticClass: "fw-bold bg-grey"
  }, [_c("td", [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Années")])]), _vm._v(" "), _c("td", [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("N-2 (2021)")])]), _vm._v(" "), _c("td", [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("N-1 (2022)")])]), _vm._v(" "), _c("td", [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("N (2023)")])]), _vm._v(" "), _c("td", [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("N+1 (2024)")])]), _vm._v(" "), _c("td", [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("N+2 (2025)")])])])]);
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
  }, [_vm._v("Commentaire sur les ratios\n                        ")])])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/produits/distributeur/distributeur_friesland_campina/FFC6 copy.vue?vue&type=style&index=0&id=033f9150&lang=css&scoped=true":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/produits/distributeur/distributeur_friesland_campina/FFC6 copy.vue?vue&type=style&index=0&id=033f9150&lang=css&scoped=true ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.bg-grey[data-v-033f9150] {\r\n    background-color: #f4f3f3;\r\n    font-weight: 600;\r\n    width: 32%;\n}\n.memo[data-v-033f9150] {\r\n    margin-top: 10px;\r\n    padding: 10px;\r\n    border: 2px solid #fff;\r\n    font-weight: 550;\r\n    font-size: 16px;\r\n    text-align: left;\r\n    text-transform: uppercase;\r\n    background-color: #34495e;\r\n    color: #fff;\n}\n.head-memorandum-title[data-v-033f9150] {\r\n    margin-top: 15px;\r\n    padding: 16px;\r\n    color: #fff;\r\n    font-weight: bold;\r\n    background-color: #34495e;\r\n    border: 2px solid #575759;\r\n    box-shadow: 1px 3px 4px #ddd;\r\n    font-size: 16px;\r\n    text-align: center;\r\n    text-transform: uppercase;\r\n    border-radius: 10px;\r\n    margin-bottom: 15px;\n}\n.lgcrd[data-v-033f9150] {\r\n    font-size: 20px;\r\n    font-weight: bold;\r\n    color: #dc0030;\n}\n.head-memorandum-title[data-v-033f9150] {\r\n    margin-top: 15px;\r\n    padding: 16px;\r\n    color: #fff;\r\n    font-weight: bold;\r\n    background-color: #34495e;\r\n    border: 2px solid #575759;\r\n    box-shadow: 1px 3px 4px #ddd;\r\n    font-size: 16px;\r\n    text-align: center;\r\n    text-transform: uppercase;\r\n    border-radius: 10px;\r\n    margin-bottom: 15px;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/produits/distributeur/distributeur_friesland_campina/FFC6 copy.vue?vue&type=style&index=0&id=033f9150&lang=css&scoped=true":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/produits/distributeur/distributeur_friesland_campina/FFC6 copy.vue?vue&type=style&index=0&id=033f9150&lang=css&scoped=true ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FFC6_copy_vue_vue_type_style_index_0_id_033f9150_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FFC6 copy.vue?vue&type=style&index=0&id=033f9150&lang=css&scoped=true */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/produits/distributeur/distributeur_friesland_campina/FFC6 copy.vue?vue&type=style&index=0&id=033f9150&lang=css&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FFC6_copy_vue_vue_type_style_index_0_id_033f9150_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FFC6_copy_vue_vue_type_style_index_0_id_033f9150_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/offview/bank/nsia/memo/produits/distributeur/distributeur_friesland_campina/FFC6 copy.vue":
/*!***************************************************************************************************************************!*\
  !*** ./resources/js/components/offview/bank/nsia/memo/produits/distributeur/distributeur_friesland_campina/FFC6 copy.vue ***!
  \***************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _FFC6_copy_vue_vue_type_template_id_033f9150_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FFC6 copy.vue?vue&type=template&id=033f9150&scoped=true */ "./resources/js/components/offview/bank/nsia/memo/produits/distributeur/distributeur_friesland_campina/FFC6 copy.vue?vue&type=template&id=033f9150&scoped=true");
/* harmony import */ var _FFC6_copy_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FFC6 copy.vue?vue&type=script&lang=js */ "./resources/js/components/offview/bank/nsia/memo/produits/distributeur/distributeur_friesland_campina/FFC6 copy.vue?vue&type=script&lang=js");
/* harmony import */ var _FFC6_copy_vue_vue_type_style_index_0_id_033f9150_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FFC6 copy.vue?vue&type=style&index=0&id=033f9150&lang=css&scoped=true */ "./resources/js/components/offview/bank/nsia/memo/produits/distributeur/distributeur_friesland_campina/FFC6 copy.vue?vue&type=style&index=0&id=033f9150&lang=css&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _FFC6_copy_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _FFC6_copy_vue_vue_type_template_id_033f9150_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _FFC6_copy_vue_vue_type_template_id_033f9150_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "033f9150",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/offview/bank/nsia/memo/produits/distributeur/distributeur_friesland_campina/FFC6 copy.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/offview/bank/nsia/memo/produits/distributeur/distributeur_friesland_campina/FFC6 copy.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************!*\
  !*** ./resources/js/components/offview/bank/nsia/memo/produits/distributeur/distributeur_friesland_campina/FFC6 copy.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FFC6_copy_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FFC6 copy.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/produits/distributeur/distributeur_friesland_campina/FFC6 copy.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FFC6_copy_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/offview/bank/nsia/memo/produits/distributeur/distributeur_friesland_campina/FFC6 copy.vue?vue&type=style&index=0&id=033f9150&lang=css&scoped=true":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./resources/js/components/offview/bank/nsia/memo/produits/distributeur/distributeur_friesland_campina/FFC6 copy.vue?vue&type=style&index=0&id=033f9150&lang=css&scoped=true ***!
  \***********************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FFC6_copy_vue_vue_type_style_index_0_id_033f9150_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FFC6 copy.vue?vue&type=style&index=0&id=033f9150&lang=css&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/produits/distributeur/distributeur_friesland_campina/FFC6 copy.vue?vue&type=style&index=0&id=033f9150&lang=css&scoped=true");


/***/ }),

/***/ "./resources/js/components/offview/bank/nsia/memo/produits/distributeur/distributeur_friesland_campina/FFC6 copy.vue?vue&type=template&id=033f9150&scoped=true":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./resources/js/components/offview/bank/nsia/memo/produits/distributeur/distributeur_friesland_campina/FFC6 copy.vue?vue&type=template&id=033f9150&scoped=true ***!
  \*********************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FFC6_copy_vue_vue_type_template_id_033f9150_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FFC6_copy_vue_vue_type_template_id_033f9150_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FFC6_copy_vue_vue_type_template_id_033f9150_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FFC6 copy.vue?vue&type=template&id=033f9150&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/produits/distributeur/distributeur_friesland_campina/FFC6 copy.vue?vue&type=template&id=033f9150&scoped=true");


/***/ })

}]);