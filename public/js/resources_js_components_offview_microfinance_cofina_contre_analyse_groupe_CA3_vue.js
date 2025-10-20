"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_offview_microfinance_cofina_contre_analyse_groupe_CA3_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/microfinance/cofina/contre_analyse_groupe/CA3.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/microfinance/cofina/contre_analyse_groupe/CA3.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    dossier_credit: Object
  },
  computed: {
    calculMargeCom: function calculMargeCom() {
      var _this$dossier_credit, _dossier$benefices_pe, _dossier$benefices_pe2;
      var dossier = (_this$dossier_credit = this.dossier_credit) === null || _this$dossier_credit === void 0 ? void 0 : _this$dossier_credit.cred_pub_tb_13;
      var a = 0;
      var b = 0;
      if (!['', null, undefined].includes(dossier === null || dossier === void 0 || (_dossier$benefices_pe = dossier.benefices_pertes[this.findIndexByObj("VENTES TOTALES")]) === null || _dossier$benefices_pe === void 0 ? void 0 : _dossier$benefices_pe.montant_c)) {
        a = dossier === null || dossier === void 0 ? void 0 : dossier.benefices_pertes[this.findIndexByObj("VENTES TOTALES")].montant_c;
        a = Number(String(a).replace(/\s+/g, ""));
      }
      if (!['', null, undefined].includes(dossier === null || dossier === void 0 || (_dossier$benefices_pe2 = dossier.benefices_pertes[this.findIndexByObj("COÛT TOTAL DES MARCHANDISES VENDUES")]) === null || _dossier$benefices_pe2 === void 0 ? void 0 : _dossier$benefices_pe2.montant_c)) {
        b = dossier === null || dossier === void 0 ? void 0 : dossier.benefices_pertes[this.findIndexByObj("COÛT TOTAL DES MARCHANDISES VENDUES")].montant_c;
        b = Number(String(b).replace(/\s+/g, ""));
      }
      return Math.abs(a - b);
    },
    capaciteAutoFinancement: function capaciteAutoFinancement() {
      var _this$dossier_credit2, _dossier$benefices_pe3, _dossier$benefices_pe4, _dossier$benefices_pe5, _dossier$benefices_pe6;
      var dossier = (_this$dossier_credit2 = this.dossier_credit) === null || _this$dossier_credit2 === void 0 ? void 0 : _this$dossier_credit2.cred_pub_tb_13;
      var a = 0;
      var b = 0;
      var c = 0;
      var d = 0;
      if (!['', null, undefined].includes(dossier === null || dossier === void 0 || (_dossier$benefices_pe3 = dossier.benefices_pertes[this.findIndexByObj("RÉSULTAT NET PRINCIPALES OPÉRATIONS")]) === null || _dossier$benefices_pe3 === void 0 ? void 0 : _dossier$benefices_pe3.montant_c)) {
        a = dossier === null || dossier === void 0 ? void 0 : dossier.benefices_pertes[this.findIndexByObj("RÉSULTAT NET PRINCIPALES OPÉRATIONS")].montant_c;
        a = Number(String(a).replace(/\s+/g, ""));
      }
      if (!['', null, undefined].includes(dossier === null || dossier === void 0 || (_dossier$benefices_pe4 = dossier.benefices_pertes[this.findIndexByObj("Autres revenus")]) === null || _dossier$benefices_pe4 === void 0 ? void 0 : _dossier$benefices_pe4.montant_c)) {
        b = dossier === null || dossier === void 0 ? void 0 : dossier.benefices_pertes[this.findIndexByObj("Autres revenus")].montant_c;
        b = Number(String(b).replace(/\s+/g, ""));
      }
      if (!['', null, undefined].includes(dossier === null || dossier === void 0 || (_dossier$benefices_pe5 = dossier.benefices_pertes[this.findIndexByObj("Charges familiales")]) === null || _dossier$benefices_pe5 === void 0 ? void 0 : _dossier$benefices_pe5.montant_c)) {
        c = dossier === null || dossier === void 0 ? void 0 : dossier.benefices_pertes[this.findIndexByObj("Charges familiales")].montant_c;
        c = Number(String(c).replace(/\s+/g, ""));
      }
      if (!['', null, undefined].includes(dossier === null || dossier === void 0 || (_dossier$benefices_pe6 = dossier.benefices_pertes[this.findIndexByObj("D'autres coûts")]) === null || _dossier$benefices_pe6 === void 0 ? void 0 : _dossier$benefices_pe6.montant_c)) {
        var _this$dossier_credit3;
        d = (_this$dossier_credit3 = this.dossier_credit) === null || _this$dossier_credit3 === void 0 || (_this$dossier_credit3 = _this$dossier_credit3.cred_pub_tb_13) === null || _this$dossier_credit3 === void 0 ? void 0 : _this$dossier_credit3.benefices_pertes[this.findIndexByObj("D'autres coûts")].montant_c;
        d = Number(String(d).replace(/\s+/g, ""));
      }
      var rp = a + b;
      var rm = c + d;
      var res = rp - rm;
      return res;
    },
    creditConcurrence: function creditConcurrence() {
      var total = 0;
      if (this.dossier_credit.cred_pub_tb_17 !== undefined) {
        var _this$dossier_credit$;
        if (((_this$dossier_credit$ = this.dossier_credit.cred_pub_tb_17) === null || _this$dossier_credit$ === void 0 ? void 0 : _this$dossier_credit$.historiques_des_credits) !== "") {
          var _this$dossier_credit$2;
          (_this$dossier_credit$2 = this.dossier_credit.cred_pub_tb_17) === null || _this$dossier_credit$2 === void 0 || _this$dossier_credit$2.historiques_des_credits.forEach(function (element) {
            if (element.statut === "Financé") {
              total += Number(String(element.encours).replace(/\s+/g, ""));
            }
          });
        }
      }
      return total;
    },
    tauxEndettement: function tauxEndettement() {
      var _this$dossier_credit4, _this$dossier_credit5;
      // console.log()
      var c = 0;
      var a = this.capaciteAutoFinancement;
      var b = this.creditConcurrence;
      if (((_this$dossier_credit4 = this.dossier_credit) === null || _this$dossier_credit4 === void 0 || (_this$dossier_credit4 = _this$dossier_credit4[this.determineCredPubTables((_this$dossier_credit5 = this.dossier_credit) === null || _this$dossier_credit5 === void 0 ? void 0 : _this$dossier_credit5.applied_templ_name)[1]]) === null || _this$dossier_credit4 === void 0 ? void 0 : _this$dossier_credit4['montant_demander']) !== undefined) {
        var _this$dossier_credit6, _this$dossier_credit7;
        c = (_this$dossier_credit6 = this.dossier_credit) === null || _this$dossier_credit6 === void 0 || (_this$dossier_credit6 = _this$dossier_credit6[this.determineCredPubTables((_this$dossier_credit7 = this.dossier_credit) === null || _this$dossier_credit7 === void 0 ? void 0 : _this$dossier_credit7.applied_templ_name)[1]]) === null || _this$dossier_credit6 === void 0 ? void 0 : _this$dossier_credit6['montant_demander'];
      }
      // console.log(a,b,c)
      var res = 0;
      c = Number(String(c).replace(/\s+/g, ""));
      if (a !== 0) {
        res = (b + c) / a;
      } else {
        return 0;
      }
      return res * 100;
    }
  },
  data: function data() {
    return {
      label_keys: [],
      chiffre_aff: "",
      cout_achat: "",
      charge_exploitation: ""
      //   inventairesTrier:[]
    };
  },
  created: function created() {
    // this.sortInventaires()
  },
  mounted: function mounted() {
    this.loadKey();
  },
  methods: {
    loadKey: function loadKey() {
      var _this = this;
      var labels = ['VENTES TOTALES', 'COÛT TOTAL DES MARCHANDISES VENDUES', 'COÛTS OPÉRATIONNELS TOTAUX', 'RÉSULTAT NET PRINCIPALES OPÉRATIONS', 'Autres revenus', 'Charges familiales', "D'autres coûts"];
      labels.forEach(function (element, index) {
        _this.label_keys.push(_this.findIndexByObj(element));
      });
    },
    findIndexByObj: function findIndexByObj(label) {
      var _this$dossier_credit8;
      var tab = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "benefices_pertes";
      if (!['', null, undefined].includes((_this$dossier_credit8 = this.dossier_credit) === null || _this$dossier_credit8 === void 0 ? void 0 : _this$dossier_credit8.cred_pub_tb_13[tab])) {
        var _this$dossier_credit9;
        return (_this$dossier_credit9 = this.dossier_credit) === null || _this$dossier_credit9 === void 0 || (_this$dossier_credit9 = _this$dossier_credit9.cred_pub_tb_13) === null || _this$dossier_credit9 === void 0 || (_this$dossier_credit9 = _this$dossier_credit9[tab]) === null || _this$dossier_credit9 === void 0 ? void 0 : _this$dossier_credit9.findIndex(function (el) {
          return el.position === label;
        });
      }
      return -1;
    },
    formatDate: function formatDate(date) {
      var options = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric'
      };
      return new Date(date).toLocaleDateString('fr', options);
    },
    convertNumber: function convertNumber(valeur) {
      return Number(String(valeur).replace(/\s+/g, ""));
    },
    arrondiA2Chiffre: function arrondiA2Chiffre(x) {
      var value = Math.round(x * 100) / 100;
      return value;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/microfinance/cofina/contre_analyse_groupe/CA3.vue?vue&type=template&id=36437e68&scoped=true":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/microfinance/cofina/contre_analyse_groupe/CA3.vue?vue&type=template&id=36437e68&scoped=true ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm$dossier_credit, _vm$dossier_credit2, _vm$dossier_credit3, _vm$dossier_credit4, _vm$dossier_credit5, _vm$dossier_credit6, _vm$dossier_credit7, _vm$dossier_credit8, _vm$dossier_credit9, _vm$dossier_credit0, _vm$dossier_credit1, _vm$dossier_credit10, _vm$dossier_credit11, _vm$dossier_credit12, _vm$dossier_credit13, _vm$dossier_credit14, _vm$dossier_credit15, _vm$dossier_credit16, _vm$dossier_credit17, _vm$dossier_credit18, _vm$dossier_credit19, _vm$dossier_credit20, _vm$dossier_credit21, _vm$dossier_credit22, _vm$dossier_credit23, _vm$dossier_credit24, _vm$dossier_credit25, _vm$dossier_credit26, _vm$dossier_credit27, _vm$dossier_credit28, _vm$dossier_credit29, _vm$dossier_credit30, _vm$dossier_credit31, _vm$dossier_credit32, _vm$dossier_credit33, _vm$dossier_credit34, _vm$dossier_credit35, _vm$dossier_credit36, _vm$dossier_credit37, _vm$dossier_credit38, _vm$dossier_credit39, _vm$dossier_credit40, _vm$dossier_credit41, _vm$dossier_credit42, _vm$dossier_credit43, _vm$dossier_credit44, _vm$dossier_credit45, _vm$dossier_credit46, _vm$dossier_credit47, _vm$dossier_credit48, _vm$dossier_credit49, _vm$dossier_credit50, _vm$dossier_credit51, _vm$dossier_credit52, _vm$dossier_credit53, _vm$dossier_credit54, _vm$dossier_credit55, _vm$dossier_credit56, _vm$dossier_credit57, _vm$dossier_credit58, _vm$dossier_credit59, _vm$dossier_credit60, _vm$dossier_credit61, _vm$dossier_credit62, _vm$dossier_credit63, _vm$dossier_credit64, _vm$dossier_credit65, _vm$dossier_credit66, _vm$dossier_credit67, _vm$dossier_credit68, _vm$dossier_credit69, _vm$dossier_credit70, _vm$dossier_credit71, _vm$dossier_credit72, _vm$dossier_credit73, _vm$dossier_credit74, _vm$dossier_credit75, _vm$dossier_credit76, _vm$dossier_credit77, _vm$dossier_credit78, _vm$dossier_credit79, _vm$dossier_credit80, _vm$dossier_credit81, _vm$dossier_credit82, _vm$dossier_credit83, _vm$dossier_credit84, _vm$dossier_credit85, _vm$dossier_credit86, _vm$dossier_credit87, _vm$dossier_credit88, _vm$dossier_credit89, _vm$dossier_credit90, _vm$dossier_credit91, _vm$dossier_credit92, _vm$dossier_credit93, _vm$dossier_credit94, _vm$dossier_credit95, _vm$dossier_credit96, _vm$dossier_credit97, _vm$dossier_credit98, _vm$dossier_credit99, _vm$dossier_credit100, _vm$dossier_credit101, _vm$dossier_credit102, _vm$dossier_credit103, _vm$dossier_credit104, _vm$dossier_credit105, _vm$dossier_credit106, _vm$dossier_credit107, _vm$dossier_credit108, _vm$dossier_credit109;
  var _vm = this,
    _c = _vm._self._c;
  return (_vm$dossier_credit = _vm.dossier_credit) !== null && _vm$dossier_credit !== void 0 && _vm$dossier_credit.cred_pub_tb_48 ? _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "justify-content-center"
  }, [_c("div", {
    staticClass: "head-memorandum-title px-3 mb-2 mt-4 mb-4",
    staticStyle: {
      "text-align": "center"
    }
  }, [_vm._v("\n            FORCES ET FAIBLESSES\n        ")]), _vm._v(" "), _c("div", {
    staticClass: "table-responvive"
  }, [_c("table", {
    staticClass: "table table-bordered"
  }, [_vm._m(0), _vm._v(" "), _c("tbody", [_c("tr", [_c("td", {
    domProps: {
      innerHTML: _vm._s((_vm$dossier_credit2 = _vm.dossier_credit) === null || _vm$dossier_credit2 === void 0 || (_vm$dossier_credit2 = _vm$dossier_credit2.cred_pub_tb_20) === null || _vm$dossier_credit2 === void 0 ? void 0 : _vm$dossier_credit2.forces)
    }
  }), _vm._v(" "), _c("td", {
    domProps: {
      innerHTML: _vm._s((_vm$dossier_credit3 = _vm.dossier_credit) === null || _vm$dossier_credit3 === void 0 || (_vm$dossier_credit3 = _vm$dossier_credit3.cred_pub_tb_48) === null || _vm$dossier_credit3 === void 0 ? void 0 : _vm$dossier_credit3.forces)
    }
  }), _vm._v(" "), _c("td", {
    domProps: {
      innerHTML: _vm._s((_vm$dossier_credit4 = _vm.dossier_credit) === null || _vm$dossier_credit4 === void 0 || (_vm$dossier_credit4 = _vm$dossier_credit4.cred_pub_tb_048) === null || _vm$dossier_credit4 === void 0 ? void 0 : _vm$dossier_credit4.forces)
    }
  })])])])]), _vm._v(" "), _c("div", {
    staticClass: "table-responvive"
  }, [_c("table", {
    staticClass: "table table-bordered"
  }, [_vm._m(1), _vm._v(" "), _c("tbody", [_c("tr", [_c("td", {
    domProps: {
      innerHTML: _vm._s((_vm$dossier_credit5 = _vm.dossier_credit) === null || _vm$dossier_credit5 === void 0 || (_vm$dossier_credit5 = _vm$dossier_credit5.cred_pub_tb_20) === null || _vm$dossier_credit5 === void 0 ? void 0 : _vm$dossier_credit5.faiblesses)
    }
  }), _vm._v(" "), _c("td", {
    domProps: {
      innerHTML: _vm._s((_vm$dossier_credit6 = _vm.dossier_credit) === null || _vm$dossier_credit6 === void 0 || (_vm$dossier_credit6 = _vm$dossier_credit6.cred_pub_tb_48) === null || _vm$dossier_credit6 === void 0 ? void 0 : _vm$dossier_credit6.faiblesses)
    }
  }), _vm._v(" "), _c("td", {
    domProps: {
      innerHTML: _vm._s((_vm$dossier_credit7 = _vm.dossier_credit) === null || _vm$dossier_credit7 === void 0 || (_vm$dossier_credit7 = _vm$dossier_credit7.cred_pub_tb_048) === null || _vm$dossier_credit7 === void 0 ? void 0 : _vm$dossier_credit7.faiblesses)
    }
  })])])])]), _vm._v(" "), _c("div", {
    staticClass: "table-responvive"
  }, [_c("table", {
    staticClass: "table table-bordered"
  }, [_vm._m(2), _vm._v(" "), _c("tbody", [_c("tr", [_c("td", {
    domProps: {
      innerHTML: _vm._s((_vm$dossier_credit8 = _vm.dossier_credit) === null || _vm$dossier_credit8 === void 0 || (_vm$dossier_credit8 = _vm$dossier_credit8.cred_pub_tb_20) === null || _vm$dossier_credit8 === void 0 ? void 0 : _vm$dossier_credit8.opportinutes)
    }
  }), _vm._v(" "), _c("td", {
    domProps: {
      innerHTML: _vm._s((_vm$dossier_credit9 = _vm.dossier_credit) === null || _vm$dossier_credit9 === void 0 || (_vm$dossier_credit9 = _vm$dossier_credit9.cred_pub_tb_48) === null || _vm$dossier_credit9 === void 0 ? void 0 : _vm$dossier_credit9.opportunites)
    }
  }), _vm._v(" "), _c("td", {
    domProps: {
      innerHTML: _vm._s((_vm$dossier_credit0 = _vm.dossier_credit) === null || _vm$dossier_credit0 === void 0 || (_vm$dossier_credit0 = _vm$dossier_credit0.cred_pub_tb_048) === null || _vm$dossier_credit0 === void 0 ? void 0 : _vm$dossier_credit0.opportunites)
    }
  })])])])]), _vm._v(" "), _c("div", {
    staticClass: "table-responvive"
  }, [_c("table", {
    staticClass: "table table-bordered"
  }, [_vm._m(3), _vm._v(" "), _c("tbody", [_c("tr", [_c("td", {
    domProps: {
      innerHTML: _vm._s((_vm$dossier_credit1 = _vm.dossier_credit) === null || _vm$dossier_credit1 === void 0 || (_vm$dossier_credit1 = _vm$dossier_credit1.cred_pub_tb_20) === null || _vm$dossier_credit1 === void 0 ? void 0 : _vm$dossier_credit1.menaces)
    }
  }), _vm._v(" "), _c("td", {
    domProps: {
      innerHTML: _vm._s((_vm$dossier_credit10 = _vm.dossier_credit) === null || _vm$dossier_credit10 === void 0 || (_vm$dossier_credit10 = _vm$dossier_credit10.cred_pub_tb_48) === null || _vm$dossier_credit10 === void 0 ? void 0 : _vm$dossier_credit10.menaces)
    }
  }), _vm._v(" "), _c("td", {
    domProps: {
      innerHTML: _vm._s((_vm$dossier_credit11 = _vm.dossier_credit) === null || _vm$dossier_credit11 === void 0 || (_vm$dossier_credit11 = _vm$dossier_credit11.cred_pub_tb_048) === null || _vm$dossier_credit11 === void 0 ? void 0 : _vm$dossier_credit11.menaces)
    }
  })])])])]), _vm._v(" "), _c("div", {
    staticClass: "table-responsive"
  }, [_c("div", [_c("table", {
    staticClass: "table table-bordered"
  }, [_vm._m(4), _vm._v(" "), _c("tbody", [_c("tr", [_c("td", [_vm._v("Chiffre d'affaires (par mois)")]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm._f("formatNumber")((_vm$dossier_credit12 = _vm.dossier_credit) === null || _vm$dossier_credit12 === void 0 || (_vm$dossier_credit12 = _vm$dossier_credit12.cred_pub_tb_13) === null || _vm$dossier_credit12 === void 0 ? void 0 : _vm$dossier_credit12.benefices_pertes[_vm.label_keys[0]].montant_c)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm._f("formatNumber")((_vm$dossier_credit13 = _vm.dossier_credit) === null || _vm$dossier_credit13 === void 0 || (_vm$dossier_credit13 = _vm$dossier_credit13.cred_pub_tb_48) === null || _vm$dossier_credit13 === void 0 ? void 0 : _vm$dossier_credit13.chiffre_affaire_propo_analyste)) + "\n                            ")]), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$dossier_credit14 = _vm.dossier_credit) === null || _vm$dossier_credit14 === void 0 || (_vm$dossier_credit14 = _vm$dossier_credit14.cred_pub_tb_48) === null || _vm$dossier_credit14 === void 0 ? void 0 : _vm$dossier_credit14.justification_chiffre_affaire) + "\n                            ")]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm._f("formatNumber")((_vm$dossier_credit15 = _vm.dossier_credit) === null || _vm$dossier_credit15 === void 0 || (_vm$dossier_credit15 = _vm$dossier_credit15.cred_pub_tb_048) === null || _vm$dossier_credit15 === void 0 ? void 0 : _vm$dossier_credit15.chiffre_affaire_propo_analyste)) + "\n                            ")]), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$dossier_credit16 = _vm.dossier_credit) === null || _vm$dossier_credit16 === void 0 || (_vm$dossier_credit16 = _vm$dossier_credit16.cred_pub_tb_048) === null || _vm$dossier_credit16 === void 0 ? void 0 : _vm$dossier_credit16.justification_chiffre_affaire) + "\n                            ")])]), _vm._v(" "), _c("tr", [_c("td", [_vm._v("Coût d'achat")]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm._f("formatNumber")((_vm$dossier_credit17 = _vm.dossier_credit) === null || _vm$dossier_credit17 === void 0 || (_vm$dossier_credit17 = _vm$dossier_credit17.cred_pub_tb_13) === null || _vm$dossier_credit17 === void 0 ? void 0 : _vm$dossier_credit17.benefices_pertes[_vm.label_keys[1]].montant_c)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm._f("formatNumber")((_vm$dossier_credit18 = _vm.dossier_credit) === null || _vm$dossier_credit18 === void 0 || (_vm$dossier_credit18 = _vm$dossier_credit18.cred_pub_tb_48) === null || _vm$dossier_credit18 === void 0 ? void 0 : _vm$dossier_credit18.cout_achat_propose)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$dossier_credit19 = _vm.dossier_credit) === null || _vm$dossier_credit19 === void 0 || (_vm$dossier_credit19 = _vm$dossier_credit19.cred_pub_tb_48) === null || _vm$dossier_credit19 === void 0 ? void 0 : _vm$dossier_credit19.justification_cout_achat) + "\n                            ")]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm._f("formatNumber")((_vm$dossier_credit20 = _vm.dossier_credit) === null || _vm$dossier_credit20 === void 0 || (_vm$dossier_credit20 = _vm$dossier_credit20.cred_pub_tb_048) === null || _vm$dossier_credit20 === void 0 ? void 0 : _vm$dossier_credit20.cout_achat_propose)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$dossier_credit21 = _vm.dossier_credit) === null || _vm$dossier_credit21 === void 0 || (_vm$dossier_credit21 = _vm$dossier_credit21.cred_pub_tb_048) === null || _vm$dossier_credit21 === void 0 ? void 0 : _vm$dossier_credit21.justification_cout_achat) + "\n                            ")])]), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "fw-bold"
  }, [_vm._v("Marge commerciale")]), _vm._v(" "), _c("td", {
    staticClass: "fw-bold"
  }, [_vm._v("\n                                " + _vm._s(_vm._f("formatNumber")(_vm.calculMargeCom)) + "\n                            ")]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm._f("formatNumber")((_vm$dossier_credit22 = _vm.dossier_credit) === null || _vm$dossier_credit22 === void 0 || (_vm$dossier_credit22 = _vm$dossier_credit22.cred_pub_tb_48) === null || _vm$dossier_credit22 === void 0 ? void 0 : _vm$dossier_credit22.marge_commerciale_propose)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$dossier_credit23 = _vm.dossier_credit) === null || _vm$dossier_credit23 === void 0 || (_vm$dossier_credit23 = _vm$dossier_credit23.cred_pub_tb_48) === null || _vm$dossier_credit23 === void 0 ? void 0 : _vm$dossier_credit23.justification_marge_commerciale) + "\n                            ")]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm._f("formatNumber")((_vm$dossier_credit24 = _vm.dossier_credit) === null || _vm$dossier_credit24 === void 0 || (_vm$dossier_credit24 = _vm$dossier_credit24.cred_pub_tb_048) === null || _vm$dossier_credit24 === void 0 ? void 0 : _vm$dossier_credit24.marge_commerciale_propose)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$dossier_credit25 = _vm.dossier_credit) === null || _vm$dossier_credit25 === void 0 || (_vm$dossier_credit25 = _vm$dossier_credit25.cred_pub_tb_048) === null || _vm$dossier_credit25 === void 0 ? void 0 : _vm$dossier_credit25.justification_marge_commerciale) + "\n                            ")])]), _vm._v(" "), _c("tr", [_c("td", [_vm._v("Charges générales d'exploitation et financière")]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm._f("formatNumber")((_vm$dossier_credit26 = _vm.dossier_credit) === null || _vm$dossier_credit26 === void 0 || (_vm$dossier_credit26 = _vm$dossier_credit26.cred_pub_tb_13) === null || _vm$dossier_credit26 === void 0 ? void 0 : _vm$dossier_credit26.benefices_pertes[_vm.label_keys[2]].montant_c)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm._f("formatNumber")((_vm$dossier_credit27 = _vm.dossier_credit) === null || _vm$dossier_credit27 === void 0 || (_vm$dossier_credit27 = _vm$dossier_credit27.cred_pub_tb_48) === null || _vm$dossier_credit27 === void 0 ? void 0 : _vm$dossier_credit27.charge_exploitation_propose)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$dossier_credit28 = _vm.dossier_credit) === null || _vm$dossier_credit28 === void 0 || (_vm$dossier_credit28 = _vm$dossier_credit28.cred_pub_tb_48) === null || _vm$dossier_credit28 === void 0 ? void 0 : _vm$dossier_credit28.justification_charge_exploitation) + "\n                            ")]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm._f("formatNumber")((_vm$dossier_credit29 = _vm.dossier_credit) === null || _vm$dossier_credit29 === void 0 || (_vm$dossier_credit29 = _vm$dossier_credit29.cred_pub_tb_048) === null || _vm$dossier_credit29 === void 0 ? void 0 : _vm$dossier_credit29.charge_exploitation_propose)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$dossier_credit30 = _vm.dossier_credit) === null || _vm$dossier_credit30 === void 0 || (_vm$dossier_credit30 = _vm$dossier_credit30.cred_pub_tb_048) === null || _vm$dossier_credit30 === void 0 ? void 0 : _vm$dossier_credit30.justification_charge_exploitation) + "\n                            ")])]), _vm._v(" "), _c("tr", {
    staticClass: "fw-bold"
  }, [_c("td", [_vm._v("Résultat net")]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm._f("formatNumber")((_vm$dossier_credit31 = _vm.dossier_credit) === null || _vm$dossier_credit31 === void 0 || (_vm$dossier_credit31 = _vm$dossier_credit31.cred_pub_tb_13) === null || _vm$dossier_credit31 === void 0 ? void 0 : _vm$dossier_credit31.benefices_pertes[_vm.label_keys[3]].montant_c)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm._f("formatNumber")((_vm$dossier_credit32 = _vm.dossier_credit) === null || _vm$dossier_credit32 === void 0 || (_vm$dossier_credit32 = _vm$dossier_credit32.cred_pub_tb_48) === null || _vm$dossier_credit32 === void 0 ? void 0 : _vm$dossier_credit32.resultat_net_propose)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$dossier_credit33 = _vm.dossier_credit) === null || _vm$dossier_credit33 === void 0 || (_vm$dossier_credit33 = _vm$dossier_credit33.cred_pub_tb_48) === null || _vm$dossier_credit33 === void 0 ? void 0 : _vm$dossier_credit33.justification_resultat_net) + "\n                            ")]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm._f("formatNumber")((_vm$dossier_credit34 = _vm.dossier_credit) === null || _vm$dossier_credit34 === void 0 || (_vm$dossier_credit34 = _vm$dossier_credit34.cred_pub_tb_048) === null || _vm$dossier_credit34 === void 0 ? void 0 : _vm$dossier_credit34.resultat_net_propose)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$dossier_credit35 = _vm.dossier_credit) === null || _vm$dossier_credit35 === void 0 || (_vm$dossier_credit35 = _vm$dossier_credit35.cred_pub_tb_048) === null || _vm$dossier_credit35 === void 0 ? void 0 : _vm$dossier_credit35.justification_resultat_net) + "\n                            ")])]), _vm._v(" "), _c("tr", [_c("td", [_vm._v("Autres revenus")]), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$dossier_credit36 = _vm.dossier_credit) === null || _vm$dossier_credit36 === void 0 || (_vm$dossier_credit36 = _vm$dossier_credit36.cred_pub_tb_13) === null || _vm$dossier_credit36 === void 0 ? void 0 : _vm$dossier_credit36.benefices_pertes[_vm.label_keys[4]].montant_c))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm._f("formatNumber")((_vm$dossier_credit37 = _vm.dossier_credit) === null || _vm$dossier_credit37 === void 0 || (_vm$dossier_credit37 = _vm$dossier_credit37.cred_pub_tb_48) === null || _vm$dossier_credit37 === void 0 ? void 0 : _vm$dossier_credit37.autre_revenu_propose)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$dossier_credit38 = _vm.dossier_credit) === null || _vm$dossier_credit38 === void 0 || (_vm$dossier_credit38 = _vm$dossier_credit38.cred_pub_tb_48) === null || _vm$dossier_credit38 === void 0 ? void 0 : _vm$dossier_credit38.justification_autre_revenu))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm._f("formatNumber")((_vm$dossier_credit39 = _vm.dossier_credit) === null || _vm$dossier_credit39 === void 0 || (_vm$dossier_credit39 = _vm$dossier_credit39.cred_pub_tb_048) === null || _vm$dossier_credit39 === void 0 ? void 0 : _vm$dossier_credit39.autre_revenu_propose)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$dossier_credit40 = _vm.dossier_credit) === null || _vm$dossier_credit40 === void 0 || (_vm$dossier_credit40 = _vm$dossier_credit40.cred_pub_tb_048) === null || _vm$dossier_credit40 === void 0 ? void 0 : _vm$dossier_credit40.justification_autre_revenu))])]), _vm._v(" "), _c("tr", [_c("td", [_vm._v("Autres charges")]), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$dossier_credit41 = _vm.dossier_credit) === null || _vm$dossier_credit41 === void 0 || (_vm$dossier_credit41 = _vm$dossier_credit41.cred_pub_tb_13) === null || _vm$dossier_credit41 === void 0 ? void 0 : _vm$dossier_credit41.benefices_pertes[_vm.label_keys[5]].montant_c))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm._f("formatNumber")((_vm$dossier_credit42 = _vm.dossier_credit) === null || _vm$dossier_credit42 === void 0 || (_vm$dossier_credit42 = _vm$dossier_credit42.cred_pub_tb_48) === null || _vm$dossier_credit42 === void 0 ? void 0 : _vm$dossier_credit42.autre_charge_propose)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$dossier_credit43 = _vm.dossier_credit) === null || _vm$dossier_credit43 === void 0 || (_vm$dossier_credit43 = _vm$dossier_credit43.cred_pub_tb_48) === null || _vm$dossier_credit43 === void 0 ? void 0 : _vm$dossier_credit43.justification_autre_charge))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm._f("formatNumber")((_vm$dossier_credit44 = _vm.dossier_credit) === null || _vm$dossier_credit44 === void 0 || (_vm$dossier_credit44 = _vm$dossier_credit44.cred_pub_tb_048) === null || _vm$dossier_credit44 === void 0 ? void 0 : _vm$dossier_credit44.autre_charge_propose)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$dossier_credit45 = _vm.dossier_credit) === null || _vm$dossier_credit45 === void 0 || (_vm$dossier_credit45 = _vm$dossier_credit45.cred_pub_tb_048) === null || _vm$dossier_credit45 === void 0 ? void 0 : _vm$dossier_credit45.justification_autre_charge))])]), _vm._v(" "), _c("tr", [_c("td", [_vm._v("Charges familiales")]), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$dossier_credit46 = _vm.dossier_credit) === null || _vm$dossier_credit46 === void 0 || (_vm$dossier_credit46 = _vm$dossier_credit46.cred_pub_tb_13) === null || _vm$dossier_credit46 === void 0 ? void 0 : _vm$dossier_credit46.benefices_pertes[_vm.label_keys[6]].montant_c))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm._f("formatNumber")((_vm$dossier_credit47 = _vm.dossier_credit) === null || _vm$dossier_credit47 === void 0 || (_vm$dossier_credit47 = _vm$dossier_credit47.cred_pub_tb_48) === null || _vm$dossier_credit47 === void 0 ? void 0 : _vm$dossier_credit47.charge_familiale_propose)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$dossier_credit48 = _vm.dossier_credit) === null || _vm$dossier_credit48 === void 0 || (_vm$dossier_credit48 = _vm$dossier_credit48.cred_pub_tb_48) === null || _vm$dossier_credit48 === void 0 ? void 0 : _vm$dossier_credit48.justification_charge_familiale))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm._f("formatNumber")((_vm$dossier_credit49 = _vm.dossier_credit) === null || _vm$dossier_credit49 === void 0 || (_vm$dossier_credit49 = _vm$dossier_credit49.cred_pub_tb_048) === null || _vm$dossier_credit49 === void 0 ? void 0 : _vm$dossier_credit49.charge_familiale_propose)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$dossier_credit50 = _vm.dossier_credit) === null || _vm$dossier_credit50 === void 0 || (_vm$dossier_credit50 = _vm$dossier_credit50.cred_pub_tb_048) === null || _vm$dossier_credit50 === void 0 ? void 0 : _vm$dossier_credit50.justification_charge_familiale))])]), _vm._v(" "), _c("tr", {
    staticClass: "fw-bold"
  }, [_c("td", [_vm._v("Capacité d'autofinancement")]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm._f("formatNumber")(_vm.capaciteAutoFinancement)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm._f("formatNumber")((_vm$dossier_credit51 = _vm.dossier_credit) === null || _vm$dossier_credit51 === void 0 || (_vm$dossier_credit51 = _vm$dossier_credit51.cred_pub_tb_48) === null || _vm$dossier_credit51 === void 0 ? void 0 : _vm$dossier_credit51.capacite_autofinancement_propose)) + "\n                            ")]), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$dossier_credit52 = _vm.dossier_credit) === null || _vm$dossier_credit52 === void 0 || (_vm$dossier_credit52 = _vm$dossier_credit52.cred_pub_tb_48) === null || _vm$dossier_credit52 === void 0 ? void 0 : _vm$dossier_credit52.justification_capacite_autofinancement))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm._f("formatNumber")((_vm$dossier_credit53 = _vm.dossier_credit) === null || _vm$dossier_credit53 === void 0 || (_vm$dossier_credit53 = _vm$dossier_credit53.cred_pub_tb_048) === null || _vm$dossier_credit53 === void 0 ? void 0 : _vm$dossier_credit53.capacite_autofinancement_propose)) + "\n                            ")]), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$dossier_credit54 = _vm.dossier_credit) === null || _vm$dossier_credit54 === void 0 || (_vm$dossier_credit54 = _vm$dossier_credit54.cred_pub_tb_048) === null || _vm$dossier_credit54 === void 0 ? void 0 : _vm$dossier_credit54.justification_capacite_autofinancement))])]), _vm._v(" "), _c("tr", {
    staticClass: "fw-bold"
  }, [_c("td", [_vm._v("Montant crédit proposé")]), _vm._v(" "), ((_vm$dossier_credit55 = _vm.dossier_credit) === null || _vm$dossier_credit55 === void 0 ? void 0 : _vm$dossier_credit55[this.determineCredPubTables((_vm$dossier_credit56 = _vm.dossier_credit) === null || _vm$dossier_credit56 === void 0 ? void 0 : _vm$dossier_credit56.applied_templ_name)[1]]) !== undefined ? _c("td", [_vm._v("\n                                " + _vm._s((_vm$dossier_credit57 = _vm.dossier_credit) === null || _vm$dossier_credit57 === void 0 || (_vm$dossier_credit57 = _vm$dossier_credit57[this.determineCredPubTables((_vm$dossier_credit58 = _vm.dossier_credit) === null || _vm$dossier_credit58 === void 0 ? void 0 : _vm$dossier_credit58.applied_templ_name)[1]]) === null || _vm$dossier_credit57 === void 0 ? void 0 : _vm$dossier_credit57["montant_demander"]))]) : _c("td", [_vm._v("0")]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm._f("formatNumber")((_vm$dossier_credit59 = _vm.dossier_credit) === null || _vm$dossier_credit59 === void 0 || (_vm$dossier_credit59 = _vm$dossier_credit59.cred_pub_tb_48) === null || _vm$dossier_credit59 === void 0 ? void 0 : _vm$dossier_credit59.montant_credit_propose)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$dossier_credit60 = _vm.dossier_credit) === null || _vm$dossier_credit60 === void 0 || (_vm$dossier_credit60 = _vm$dossier_credit60.cred_pub_tb_48) === null || _vm$dossier_credit60 === void 0 ? void 0 : _vm$dossier_credit60.justification_capacite_montant_propose))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm._f("formatNumber")((_vm$dossier_credit61 = _vm.dossier_credit) === null || _vm$dossier_credit61 === void 0 || (_vm$dossier_credit61 = _vm$dossier_credit61.cred_pub_tb_048) === null || _vm$dossier_credit61 === void 0 ? void 0 : _vm$dossier_credit61.montant_credit_propose)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$dossier_credit62 = _vm.dossier_credit) === null || _vm$dossier_credit62 === void 0 || (_vm$dossier_credit62 = _vm$dossier_credit62.cred_pub_tb_048) === null || _vm$dossier_credit62 === void 0 ? void 0 : _vm$dossier_credit62.justification_capacite_montant_propose))])]), _vm._v(" "), _c("tr", [_c("td", [_vm._v("Montant écheance crédit proposé")]), _vm._v(" "), ((_vm$dossier_credit63 = _vm.dossier_credit) === null || _vm$dossier_credit63 === void 0 ? void 0 : _vm$dossier_credit63[this.determineCredPubTables((_vm$dossier_credit64 = _vm.dossier_credit) === null || _vm$dossier_credit64 === void 0 ? void 0 : _vm$dossier_credit64.applied_templ_name)[1]]) !== undefined ? _c("td", [_vm._v(_vm._s(_vm._f("formatNumber")(Math.ceil((_vm$dossier_credit65 = _vm.dossier_credit) === null || _vm$dossier_credit65 === void 0 || (_vm$dossier_credit65 = _vm$dossier_credit65[this.determineCredPubTables((_vm$dossier_credit66 = _vm.dossier_credit) === null || _vm$dossier_credit66 === void 0 ? void 0 : _vm$dossier_credit66.applied_templ_name)[1]]) === null || _vm$dossier_credit65 === void 0 || (_vm$dossier_credit65 = _vm$dossier_credit65["echeance"]) === null || _vm$dossier_credit65 === void 0 ? void 0 : _vm$dossier_credit65["echeance"]))))]) : _c("td", [_vm._v("0")]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm._f("formatNumber")((_vm$dossier_credit67 = _vm.dossier_credit) === null || _vm$dossier_credit67 === void 0 || (_vm$dossier_credit67 = _vm$dossier_credit67.cred_pub_tb_48) === null || _vm$dossier_credit67 === void 0 ? void 0 : _vm$dossier_credit67.montant_echeance_credit_propose, true)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$dossier_credit68 = _vm.dossier_credit) === null || _vm$dossier_credit68 === void 0 || (_vm$dossier_credit68 = _vm$dossier_credit68.cred_pub_tb_48) === null || _vm$dossier_credit68 === void 0 ? void 0 : _vm$dossier_credit68.justification_capacite_montant_echeance))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm._f("formatNumber")((_vm$dossier_credit69 = _vm.dossier_credit) === null || _vm$dossier_credit69 === void 0 || (_vm$dossier_credit69 = _vm$dossier_credit69.cred_pub_tb_048) === null || _vm$dossier_credit69 === void 0 ? void 0 : _vm$dossier_credit69.montant_echeance_credit_propose, true)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$dossier_credit70 = _vm.dossier_credit) === null || _vm$dossier_credit70 === void 0 || (_vm$dossier_credit70 = _vm$dossier_credit70.cred_pub_tb_048) === null || _vm$dossier_credit70 === void 0 ? void 0 : _vm$dossier_credit70.justification_capacite_montant_echeance))])]), _vm._v(" "), _c("tr", {
    staticClass: "fw-bold"
  }, [_c("td", [_vm._v("Trésorerie")]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm._f("formatNumber")((_vm$dossier_credit71 = _vm.dossier_credit) === null || _vm$dossier_credit71 === void 0 || (_vm$dossier_credit71 = _vm$dossier_credit71.cred_pub_tb_12) === null || _vm$dossier_credit71 === void 0 || (_vm$dossier_credit71 = _vm$dossier_credit71.actifs[0]) === null || _vm$dossier_credit71 === void 0 ? void 0 : _vm$dossier_credit71.montant_c)) + "\n                            ")]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm._f("formatNumber")((_vm$dossier_credit72 = _vm.dossier_credit) === null || _vm$dossier_credit72 === void 0 || (_vm$dossier_credit72 = _vm$dossier_credit72.cred_pub_tb_48) === null || _vm$dossier_credit72 === void 0 ? void 0 : _vm$dossier_credit72.tresorerie_propose)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$dossier_credit73 = _vm.dossier_credit) === null || _vm$dossier_credit73 === void 0 || (_vm$dossier_credit73 = _vm$dossier_credit73.cred_pub_tb_48) === null || _vm$dossier_credit73 === void 0 ? void 0 : _vm$dossier_credit73.justification_capacite_tresorerie))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm._f("formatNumber")((_vm$dossier_credit74 = _vm.dossier_credit) === null || _vm$dossier_credit74 === void 0 || (_vm$dossier_credit74 = _vm$dossier_credit74.cred_pub_tb_048) === null || _vm$dossier_credit74 === void 0 ? void 0 : _vm$dossier_credit74.tresorerie_propose)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$dossier_credit75 = _vm.dossier_credit) === null || _vm$dossier_credit75 === void 0 || (_vm$dossier_credit75 = _vm$dossier_credit75.cred_pub_tb_048) === null || _vm$dossier_credit75 === void 0 ? void 0 : _vm$dossier_credit75.justification_capacite_tresorerie))])]), _vm._v(" "), _c("tr", [_c("td", [_vm._v("Taux d'endettement (%)")]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm._f("formatNumber")(_vm.tauxEndettement, true)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm._f("formatNumber")((_vm$dossier_credit76 = _vm.dossier_credit) === null || _vm$dossier_credit76 === void 0 || (_vm$dossier_credit76 = _vm$dossier_credit76.cred_pub_tb_48) === null || _vm$dossier_credit76 === void 0 ? void 0 : _vm$dossier_credit76.taux_endettement_propose, true)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$dossier_credit77 = _vm.dossier_credit) === null || _vm$dossier_credit77 === void 0 || (_vm$dossier_credit77 = _vm$dossier_credit77.cred_pub_tb_48) === null || _vm$dossier_credit77 === void 0 ? void 0 : _vm$dossier_credit77.justification_capacite_tresorerie))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm._f("formatNumber")((_vm$dossier_credit78 = _vm.dossier_credit) === null || _vm$dossier_credit78 === void 0 || (_vm$dossier_credit78 = _vm$dossier_credit78.cred_pub_tb_048) === null || _vm$dossier_credit78 === void 0 ? void 0 : _vm$dossier_credit78.taux_endettement_propose, true)) + "\n                                    ")]), _c("td", [_vm._v(_vm._s((_vm$dossier_credit79 = _vm.dossier_credit) === null || _vm$dossier_credit79 === void 0 || (_vm$dossier_credit79 = _vm$dossier_credit79.cred_pub_tb_048) === null || _vm$dossier_credit79 === void 0 ? void 0 : _vm$dossier_credit79.justification_capacite_tresorerie))])])])])])]), _vm._v(" "), _c("br"), _c("hr"), _vm._v(" "), _vm.dossier_credit.tbs_in_use.includes("tb48") ? _c("div", {
    staticClass: "table-responsive"
  }, [_c("div", [_c("table", {
    staticClass: "table table-bordered"
  }, [_vm._m(5), _vm._v(" "), _c("tbody", [_c("tr", [_c("td", [_vm._v("Trésorerie (En espèce)")]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm._f("formatNumber")((_vm$dossier_credit80 = _vm.dossier_credit) === null || _vm$dossier_credit80 === void 0 || (_vm$dossier_credit80 = _vm$dossier_credit80.cred_pub_tb_12) === null || _vm$dossier_credit80 === void 0 || (_vm$dossier_credit80 = _vm$dossier_credit80.actifs[0]) === null || _vm$dossier_credit80 === void 0 ? void 0 : _vm$dossier_credit80.montant_c)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm._f("formatNumber")((_vm$dossier_credit81 = _vm.dossier_credit) === null || _vm$dossier_credit81 === void 0 || (_vm$dossier_credit81 = _vm$dossier_credit81.cred_pub_tb_48) === null || _vm$dossier_credit81 === void 0 ? void 0 : _vm$dossier_credit81.tresorerie_espece_propo_analyste)) + "\n                            ")]), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$dossier_credit82 = _vm.dossier_credit) === null || _vm$dossier_credit82 === void 0 || (_vm$dossier_credit82 = _vm$dossier_credit82.cred_pub_tb_48) === null || _vm$dossier_credit82 === void 0 ? void 0 : _vm$dossier_credit82.justification_tresorerie_espece) + "\n                            ")]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm._f("formatNumber")((_vm$dossier_credit83 = _vm.dossier_credit) === null || _vm$dossier_credit83 === void 0 || (_vm$dossier_credit83 = _vm$dossier_credit83.cred_pub_tb_048) === null || _vm$dossier_credit83 === void 0 ? void 0 : _vm$dossier_credit83.tresorerie_espece_propo_analyste)) + "\n                            ")]), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$dossier_credit84 = _vm.dossier_credit) === null || _vm$dossier_credit84 === void 0 || (_vm$dossier_credit84 = _vm$dossier_credit84.cred_pub_tb_048) === null || _vm$dossier_credit84 === void 0 ? void 0 : _vm$dossier_credit84.justification_tresorerie_espece) + "\n                            ")])]), _vm._v(" "), _c("tr", [_c("td", [_vm._v("Créances et acompte")]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm._f("formatNumber")((_vm$dossier_credit85 = _vm.dossier_credit) === null || _vm$dossier_credit85 === void 0 || (_vm$dossier_credit85 = _vm$dossier_credit85.cred_pub_tb_12) === null || _vm$dossier_credit85 === void 0 || (_vm$dossier_credit85 = _vm$dossier_credit85.actifs[5]) === null || _vm$dossier_credit85 === void 0 ? void 0 : _vm$dossier_credit85.montant_c)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm._f("formatNumber")((_vm$dossier_credit86 = _vm.dossier_credit) === null || _vm$dossier_credit86 === void 0 || (_vm$dossier_credit86 = _vm$dossier_credit86.cred_pub_tb_48) === null || _vm$dossier_credit86 === void 0 ? void 0 : _vm$dossier_credit86.creance_acompte_propose)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$dossier_credit87 = _vm.dossier_credit) === null || _vm$dossier_credit87 === void 0 || (_vm$dossier_credit87 = _vm$dossier_credit87.cred_pub_tb_48) === null || _vm$dossier_credit87 === void 0 ? void 0 : _vm$dossier_credit87.justification_creance_acompte) + "\n                            ")]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm._f("formatNumber")((_vm$dossier_credit88 = _vm.dossier_credit) === null || _vm$dossier_credit88 === void 0 || (_vm$dossier_credit88 = _vm$dossier_credit88.cred_pub_tb_048) === null || _vm$dossier_credit88 === void 0 ? void 0 : _vm$dossier_credit88.creance_acompte_propose)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$dossier_credit89 = _vm.dossier_credit) === null || _vm$dossier_credit89 === void 0 || (_vm$dossier_credit89 = _vm$dossier_credit89.cred_pub_tb_048) === null || _vm$dossier_credit89 === void 0 ? void 0 : _vm$dossier_credit89.justification_creance_acompte) + "\n                            ")])]), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "fw-bold"
  }, [_vm._v("Stock")]), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$dossier_credit90 = _vm.dossier_credit) === null || _vm$dossier_credit90 === void 0 || (_vm$dossier_credit90 = _vm$dossier_credit90.cred_pub_tb_12) === null || _vm$dossier_credit90 === void 0 || (_vm$dossier_credit90 = _vm$dossier_credit90.actifs[7]) === null || _vm$dossier_credit90 === void 0 ? void 0 : _vm$dossier_credit90.montant_c) + "\n                            ")]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm._f("formatNumber")((_vm$dossier_credit91 = _vm.dossier_credit) === null || _vm$dossier_credit91 === void 0 || (_vm$dossier_credit91 = _vm$dossier_credit91.cred_pub_tb_48) === null || _vm$dossier_credit91 === void 0 ? void 0 : _vm$dossier_credit91.stock_propose)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$dossier_credit92 = _vm.dossier_credit) === null || _vm$dossier_credit92 === void 0 || (_vm$dossier_credit92 = _vm$dossier_credit92.cred_pub_tb_48) === null || _vm$dossier_credit92 === void 0 ? void 0 : _vm$dossier_credit92.justification_stock))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm._f("formatNumber")((_vm$dossier_credit93 = _vm.dossier_credit) === null || _vm$dossier_credit93 === void 0 || (_vm$dossier_credit93 = _vm$dossier_credit93.cred_pub_tb_48) === null || _vm$dossier_credit93 === void 0 ? void 0 : _vm$dossier_credit93.stock_propose)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$dossier_credit94 = _vm.dossier_credit) === null || _vm$dossier_credit94 === void 0 || (_vm$dossier_credit94 = _vm$dossier_credit94.cred_pub_tb_48) === null || _vm$dossier_credit94 === void 0 ? void 0 : _vm$dossier_credit94.justification_stock))])]), _vm._v(" "), _c("tr", [_c("td", [_vm._v("Immobilisations")]), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$dossier_credit95 = _vm.dossier_credit) === null || _vm$dossier_credit95 === void 0 || (_vm$dossier_credit95 = _vm$dossier_credit95.cred_pub_tb_12) === null || _vm$dossier_credit95 === void 0 || (_vm$dossier_credit95 = _vm$dossier_credit95.actifs[19]) === null || _vm$dossier_credit95 === void 0 ? void 0 : _vm$dossier_credit95.montant_c) + "\n                            ")]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm._f("formatNumber")((_vm$dossier_credit96 = _vm.dossier_credit) === null || _vm$dossier_credit96 === void 0 || (_vm$dossier_credit96 = _vm$dossier_credit96.cred_pub_tb_48) === null || _vm$dossier_credit96 === void 0 ? void 0 : _vm$dossier_credit96.immobilisation_propose)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$dossier_credit97 = _vm.dossier_credit) === null || _vm$dossier_credit97 === void 0 || (_vm$dossier_credit97 = _vm$dossier_credit97.cred_pub_tb_48) === null || _vm$dossier_credit97 === void 0 ? void 0 : _vm$dossier_credit97.justification_immobilisation))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm._f("formatNumber")((_vm$dossier_credit98 = _vm.dossier_credit) === null || _vm$dossier_credit98 === void 0 || (_vm$dossier_credit98 = _vm$dossier_credit98.cred_pub_tb_048) === null || _vm$dossier_credit98 === void 0 ? void 0 : _vm$dossier_credit98.stock_propose)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$dossier_credit99 = _vm.dossier_credit) === null || _vm$dossier_credit99 === void 0 || (_vm$dossier_credit99 = _vm$dossier_credit99.cred_pub_tb_048) === null || _vm$dossier_credit99 === void 0 ? void 0 : _vm$dossier_credit99.justification_immobilisation))])]), _vm._v(" "), _c("tr", {
    staticClass: "fw-bold"
  }, [_c("td", [_vm._v("Passifs opérationnels")]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm._f("formatNumber")((_vm$dossier_credit100 = _vm.dossier_credit) === null || _vm$dossier_credit100 === void 0 || (_vm$dossier_credit100 = _vm$dossier_credit100.cred_pub_tb_12) === null || _vm$dossier_credit100 === void 0 || (_vm$dossier_credit100 = _vm$dossier_credit100.passifs[0]) === null || _vm$dossier_credit100 === void 0 ? void 0 : _vm$dossier_credit100.montant_c)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm._f("formatNumber")((_vm$dossier_credit101 = _vm.dossier_credit) === null || _vm$dossier_credit101 === void 0 || (_vm$dossier_credit101 = _vm$dossier_credit101.cred_pub_tb_48) === null || _vm$dossier_credit101 === void 0 ? void 0 : _vm$dossier_credit101.passif_ope_propose)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$dossier_credit102 = _vm.dossier_credit) === null || _vm$dossier_credit102 === void 0 || (_vm$dossier_credit102 = _vm$dossier_credit102.cred_pub_tb_48) === null || _vm$dossier_credit102 === void 0 ? void 0 : _vm$dossier_credit102.justification_passif_ope) + "\n                            ")]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm._f("formatNumber")((_vm$dossier_credit103 = _vm.dossier_credit) === null || _vm$dossier_credit103 === void 0 || (_vm$dossier_credit103 = _vm$dossier_credit103.cred_pub_tb_048) === null || _vm$dossier_credit103 === void 0 ? void 0 : _vm$dossier_credit103.passif_ope_propose)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$dossier_credit104 = _vm.dossier_credit) === null || _vm$dossier_credit104 === void 0 || (_vm$dossier_credit104 = _vm$dossier_credit104.cred_pub_tb_048) === null || _vm$dossier_credit104 === void 0 ? void 0 : _vm$dossier_credit104.justification_passif_ope) + "\n                            ")])]), _vm._v(" "), _c("tr", [_c("td", [_vm._v("Passifs financiers")]), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$dossier_credit105 = _vm.dossier_credit) === null || _vm$dossier_credit105 === void 0 || (_vm$dossier_credit105 = _vm$dossier_credit105.cred_pub_tb_12) === null || _vm$dossier_credit105 === void 0 || (_vm$dossier_credit105 = _vm$dossier_credit105.passifs[4]) === null || _vm$dossier_credit105 === void 0 ? void 0 : _vm$dossier_credit105.montant_c) + "\n                            ")]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm._f("formatNumber")((_vm$dossier_credit106 = _vm.dossier_credit) === null || _vm$dossier_credit106 === void 0 || (_vm$dossier_credit106 = _vm$dossier_credit106.cred_pub_tb_48) === null || _vm$dossier_credit106 === void 0 ? void 0 : _vm$dossier_credit106.passifs_fin_propose)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$dossier_credit107 = _vm.dossier_credit) === null || _vm$dossier_credit107 === void 0 || (_vm$dossier_credit107 = _vm$dossier_credit107.cred_pub_tb_48) === null || _vm$dossier_credit107 === void 0 ? void 0 : _vm$dossier_credit107.justification_passifs_fin))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm._f("formatNumber")((_vm$dossier_credit108 = _vm.dossier_credit) === null || _vm$dossier_credit108 === void 0 || (_vm$dossier_credit108 = _vm$dossier_credit108.cred_pub_tb_048) === null || _vm$dossier_credit108 === void 0 ? void 0 : _vm$dossier_credit108.passifs_fin_propose)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$dossier_credit109 = _vm.dossier_credit) === null || _vm$dossier_credit109 === void 0 || (_vm$dossier_credit109 = _vm$dossier_credit109.cred_pub_tb_048) === null || _vm$dossier_credit109 === void 0 ? void 0 : _vm$dossier_credit109.justification_passifs_fin))])])])])])]) : _vm._e()])]) : _vm._e();
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", {
    staticClass: "text-center fw-bold"
  }, [_c("th", [_vm._v("Forces (CAF) ")]), _vm._v(" "), _c("th", [_vm._v("Forces (ARC) ")]), _vm._v(" "), _c("th", [_vm._v("Forces (ARCG) ")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", {
    staticClass: "text-center fw-bold"
  }, [_c("th", [_vm._v("Faiblesses (CAF)")]), _vm._v(" "), _c("th", [_vm._v("Faiblesses (ARC)")]), _vm._v(" "), _c("th", [_vm._v("Faiblesses (ARCG)")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", {
    staticClass: "text-center fw-bold"
  }, [_c("th", [_vm._v("Opportunités (CAF) ")]), _vm._v(" "), _c("th", [_vm._v("Opportunités (ARC) ")]), _vm._v(" "), _c("th", [_vm._v("Opportunités (ARCG) ")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", {
    staticClass: "text-center fw-bold"
  }, [_c("th", [_vm._v("Menaces (CAF)")]), _vm._v(" "), _c("th", [_vm._v("Menaces (ARC)")]), _vm._v(" "), _c("th", [_vm._v("Menaces (ARCG)")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("th", {
    staticStyle: {
      "text-align": "center"
    },
    attrs: {
      colspan: "6"
    }
  }, [_vm._v("Analyse financière ")])]), _vm._v(" "), _c("tr", [_c("td", {
    staticStyle: {
      "font-weight": "600"
    }
  }, [_vm._v("Eléments ")]), _vm._v(" "), _c("td", {
    staticStyle: {
      "font-weight": "600"
    }
  }, [_vm._v("Propositions du CAF")]), _vm._v(" "), _c("td", {
    staticStyle: {
      "font-weight": "600"
    }
  }, [_vm._v("Propositions de l'ARC")]), _vm._v(" "), _c("td", {
    staticStyle: {
      "font-weight": "600"
    }
  }, [_vm._v("Justification de l'ARC")]), _vm._v(" "), _c("td", {
    staticStyle: {
      "font-weight": "600"
    }
  }, [_vm._v("Propositions de l'ARCG")]), _vm._v(" "), _c("td", {
    staticStyle: {
      "font-weight": "600"
    }
  }, [_vm._v("Justification de l'ARCG")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("th", {
    staticStyle: {
      "text-align": "center"
    },
    attrs: {
      colspan: "6"
    }
  }, [_vm._v("Analyse financière (bilan) ")])]), _vm._v(" "), _c("tr", [_c("td", {
    staticStyle: {
      "font-weight": "600"
    }
  }, [_vm._v("Eléments ")]), _vm._v(" "), _c("td", {
    staticStyle: {
      "font-weight": "600"
    }
  }, [_vm._v("Propositions du CAF")]), _vm._v(" "), _c("td", {
    staticStyle: {
      "font-weight": "600"
    }
  }, [_vm._v("Propositions de l'ARC")]), _vm._v(" "), _c("td", {
    staticStyle: {
      "font-weight": "600"
    }
  }, [_vm._v("Justification de l'ARC")]), _vm._v(" "), _c("td", {
    staticStyle: {
      "font-weight": "600"
    }
  }, [_vm._v("Propositions de l'ARCG")]), _vm._v(" "), _c("td", {
    staticStyle: {
      "font-weight": "600"
    }
  }, [_vm._v("Justification de l'ARCG")])])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/microfinance/cofina/contre_analyse_groupe/CA3.vue?vue&type=style&index=0&id=36437e68&lang=css&scoped=true":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/microfinance/cofina/contre_analyse_groupe/CA3.vue?vue&type=style&index=0&id=36437e68&lang=css&scoped=true ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.bg-grey[data-v-36437e68] {\r\n    background-color: #f4f3f3;\r\n    font-weight: 600;\n}\nth[data-v-36437e68] {\r\n    background: #f4f3f3;\n}\n.lgcrd[data-v-36437e68] {\r\n    font-size: 20px;\r\n    font-weight: bold;\r\n    color: #dc0030;\r\n    text-align: center;\n}\n.head-memorandum-title[data-v-36437e68] {\r\n    margin-top: 15px;\r\n    padding: 16px;\r\n    color: #fff;\r\n    font-weight: bold;\r\n    background-color: #34495e;\r\n    border: 2px solid #575759;\r\n    box-shadow: 1px 3px 4px #ddd;\r\n    font-size: 16px;\r\n    text-align: center;\r\n    text-transform: uppercase;\r\n    border-radius: 10px;\r\n    margin-bottom: 15px;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/microfinance/cofina/contre_analyse_groupe/CA3.vue?vue&type=style&index=0&id=36437e68&lang=css&scoped=true":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/microfinance/cofina/contre_analyse_groupe/CA3.vue?vue&type=style&index=0&id=36437e68&lang=css&scoped=true ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CA3_vue_vue_type_style_index_0_id_36437e68_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CA3.vue?vue&type=style&index=0&id=36437e68&lang=css&scoped=true */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/microfinance/cofina/contre_analyse_groupe/CA3.vue?vue&type=style&index=0&id=36437e68&lang=css&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CA3_vue_vue_type_style_index_0_id_36437e68_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CA3_vue_vue_type_style_index_0_id_36437e68_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/offview/microfinance/cofina/contre_analyse_groupe/CA3.vue":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/offview/microfinance/cofina/contre_analyse_groupe/CA3.vue ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CA3_vue_vue_type_template_id_36437e68_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CA3.vue?vue&type=template&id=36437e68&scoped=true */ "./resources/js/components/offview/microfinance/cofina/contre_analyse_groupe/CA3.vue?vue&type=template&id=36437e68&scoped=true");
/* harmony import */ var _CA3_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CA3.vue?vue&type=script&lang=js */ "./resources/js/components/offview/microfinance/cofina/contre_analyse_groupe/CA3.vue?vue&type=script&lang=js");
/* harmony import */ var _CA3_vue_vue_type_style_index_0_id_36437e68_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CA3.vue?vue&type=style&index=0&id=36437e68&lang=css&scoped=true */ "./resources/js/components/offview/microfinance/cofina/contre_analyse_groupe/CA3.vue?vue&type=style&index=0&id=36437e68&lang=css&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _CA3_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _CA3_vue_vue_type_template_id_36437e68_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _CA3_vue_vue_type_template_id_36437e68_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "36437e68",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/offview/microfinance/cofina/contre_analyse_groupe/CA3.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/offview/microfinance/cofina/contre_analyse_groupe/CA3.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/components/offview/microfinance/cofina/contre_analyse_groupe/CA3.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CA3_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CA3.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/microfinance/cofina/contre_analyse_groupe/CA3.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CA3_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/offview/microfinance/cofina/contre_analyse_groupe/CA3.vue?vue&type=style&index=0&id=36437e68&lang=css&scoped=true":
/*!***************************************************************************************************************************************************!*\
  !*** ./resources/js/components/offview/microfinance/cofina/contre_analyse_groupe/CA3.vue?vue&type=style&index=0&id=36437e68&lang=css&scoped=true ***!
  \***************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CA3_vue_vue_type_style_index_0_id_36437e68_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CA3.vue?vue&type=style&index=0&id=36437e68&lang=css&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/microfinance/cofina/contre_analyse_groupe/CA3.vue?vue&type=style&index=0&id=36437e68&lang=css&scoped=true");


/***/ }),

/***/ "./resources/js/components/offview/microfinance/cofina/contre_analyse_groupe/CA3.vue?vue&type=template&id=36437e68&scoped=true":
/*!*************************************************************************************************************************************!*\
  !*** ./resources/js/components/offview/microfinance/cofina/contre_analyse_groupe/CA3.vue?vue&type=template&id=36437e68&scoped=true ***!
  \*************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CA3_vue_vue_type_template_id_36437e68_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CA3_vue_vue_type_template_id_36437e68_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CA3_vue_vue_type_template_id_36437e68_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CA3.vue?vue&type=template&id=36437e68&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/microfinance/cofina/contre_analyse_groupe/CA3.vue?vue&type=template&id=36437e68&scoped=true");


/***/ })

}]);