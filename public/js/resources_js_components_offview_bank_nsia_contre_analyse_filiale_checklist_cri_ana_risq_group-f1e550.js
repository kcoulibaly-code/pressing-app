"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_offview_bank_nsia_contre_analyse_filiale_checklist_cri_ana_risq_group-f1e550"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/contre_analyse_filiale/checklist_cri_ana_risq_groupe/CHC1.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/contre_analyse_filiale/checklist_cri_ana_risq_groupe/CHC1.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    dossier_credit: Object
  },
  mounted: function mounted() {
    var _this$dossier_credit;
    var applied_templ_name = (_this$dossier_credit = this.dossier_credit) === null || _this$dossier_credit === void 0 ? void 0 : _this$dossier_credit.applied_templ_name;
    var tbArrays = this.determineCredPubTables(applied_templ_name);
    this.credpub00 = tbArrays[0];
  },
  data: function data() {
    var _this$dossier_credit2;
    return {
      credpub00: null,
      doss_name: (_this$dossier_credit2 = this.dossier_credit) === null || _this$dossier_credit2 === void 0 || (_this$dossier_credit2 = _this$dossier_credit2.doss_name) === null || _this$dossier_credit2 === void 0 ? void 0 : _this$dossier_credit2.replace("Dossier", "")
    };
  },
  methods: _defineProperty(_defineProperty(_defineProperty({
    generate: function generate() {
      var _this = this;
      var options = {
        margin: [1, 1],
        filename: this.title + ".pdf",
        html2canvas: {
          dpi: 75,
          scale: 2,
          letterRendering: true
        },
        pagebreak: {
          mode: ["avoid-all", "css", "legacy"]
        },
        jsPDF: {
          orientation: "portrait",
          unit: "mm",
          format: "a4"
        }
      };
      html2pdf().from(this.$refs.content).set(options).save().then(function () {
        _this.$toasted.show("Fichier Téléchargé avec succès");
      });
    },
    checkIfEmpty: function checkIfEmpty() {
      if (this.dossier_credit.tbs_in_use.length > 0) {
        this.seeContent = true;
      } else {
        this.$toasted.show('Ce dossier crédit est vide');
      }
    },
    alignCredLigne: function alignCredLigne() {},
    formatDate: function formatDate(date) {
      if (['', null, undefined].includes(date)) return '';
      var options = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric'
      };
      return new Date(date).toLocaleDateString('fr', options);
    },
    loadIndex: function loadIndex(index, a) {
      if (a === 0) {
        if (this.tb_34.lignes_existantes.length > index) {
          return true;
        }
        return false;
      } else if (a === 1) {
        if (this.tb_34.nouvelles_lignes.length > index) {
          return true;
        }
        return false;
      } else if (a === 2) {
        if (this.tb_34.cautions_lignes_existantes.length > index) {
          return true;
        }
        return false;
      } else {
        if (this.tb_34.cautions_nouvelles_lignes.length > index) {
          return true;
        }
        return false;
      }
    }
  }, "formatDate", function formatDate(date) {
    if (['', null, undefined].includes(date)) return '';
    var options = {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric'
    };
    return new Date(date).toLocaleDateString('fr', options);
  }), "styleDoc", function styleDoc() {
    if (this.offBankList.includes(this.doc_tobe_produced)) {
      this.isDoc = true;
    }
  }), "launchCompilerT0", function launchCompilerT0() {
    this.$emit("value-updatedT1");
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/contre_analyse_filiale/checklist_cri_ana_risq_groupe/CHC1.vue?vue&type=template&id=3e65ae7e&scoped=true":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/contre_analyse_filiale/checklist_cri_ana_risq_groupe/CHC1.vue?vue&type=template&id=3e65ae7e&scoped=true ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm$dossier_credit, _vm$dossier_credit2, _vm$dossier_credit3, _vm$dossier_credit4, _vm$dossier_credit5, _vm$dossier_credit6, _vm$dossier_credit7, _vm$dossier_credit8, _vm$dossier_credit9, _vm$dossier_credit0, _vm$dossier_credit1, _vm$dossier_credit10, _vm$dossier_credit11, _vm$dossier_credit12, _vm$dossier_credit13, _vm$dossier_credit14, _vm$dossier_credit15, _vm$dossier_credit16, _vm$dossier_credit17, _vm$dossier_credit18, _vm$dossier_credit19, _vm$dossier_credit20, _vm$dossier_credit21, _vm$dossier_credit22, _vm$dossier_credit23, _vm$dossier_credit24;
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {}, [_c("div", {
    staticClass: "row justify-content-center"
  }, [(_vm$dossier_credit = _vm.dossier_credit) !== null && _vm$dossier_credit !== void 0 && _vm$dossier_credit.cred_pub_tb_1001 ? _c("div", {
    staticClass: "row table-responsive"
  }, [_c("table", {
    staticClass: "table table-bordered mb-4 mt-2"
  }, [_c("tbody", {
    staticStyle: {
      "font-size": "0.9rem"
    }
  }, [_c("tr", [_vm._m(0), _vm._v(" "), _c("td", {
    staticClass: "text-nowrap",
    staticStyle: {
      width: "40%"
    }
  }, [_vm._v(" " + _vm._s(_vm.doss_name) + "  ")])]), _vm._v(" "), _c("tr", [_vm._m(1), _vm._v(" "), _c("td", {
    staticClass: "text-nowrap",
    staticStyle: {
      width: "40%"
    }
  }, [_vm._v(" " + _vm._s((_vm$dossier_credit2 = _vm.dossier_credit) === null || _vm$dossier_credit2 === void 0 || (_vm$dossier_credit2 = _vm$dossier_credit2[_vm.credpub00]) === null || _vm$dossier_credit2 === void 0 ? void 0 : _vm$dossier_credit2.matricule_client) + " ")])]), _vm._v(" "), _c("tr", [_vm._m(2), _vm._v(" "), _c("td", {
    staticClass: "text-nowrap",
    staticStyle: {
      width: "40%"
    }
  }, [_vm._v(" " + _vm._s((_vm$dossier_credit3 = _vm.dossier_credit) === null || _vm$dossier_credit3 === void 0 || (_vm$dossier_credit3 = _vm$dossier_credit3[_vm.credpub00]) === null || _vm$dossier_credit3 === void 0 ? void 0 : _vm$dossier_credit3.denomination_client) + " ")])]), _vm._v(" "), _c("tr", [_vm._m(3), _vm._v(" "), _c("td", {
    staticClass: "text-nowrap",
    staticStyle: {
      width: "40%"
    }
  }, [_vm._v(" " + _vm._s((_vm$dossier_credit4 = _vm.dossier_credit) !== null && _vm$dossier_credit4 !== void 0 && (_vm$dossier_credit4 = _vm$dossier_credit4.cred_pub_tb_1001) !== null && _vm$dossier_credit4 !== void 0 && _vm$dossier_credit4.date_de_creation && ((_vm$dossier_credit5 = _vm.dossier_credit) === null || _vm$dossier_credit5 === void 0 || (_vm$dossier_credit5 = _vm$dossier_credit5.cred_pub_tb_1001) === null || _vm$dossier_credit5 === void 0 ? void 0 : _vm$dossier_credit5.date_de_creation) != "" ? _vm.formatDate((_vm$dossier_credit6 = _vm.dossier_credit) === null || _vm$dossier_credit6 === void 0 || (_vm$dossier_credit6 = _vm$dossier_credit6.cred_pub_tb_1001) === null || _vm$dossier_credit6 === void 0 ? void 0 : _vm$dossier_credit6.date_de_creation) : "") + " ")])]), _vm._v(" "), _c("tr", [_vm._m(4), _vm._v(" "), _c("td", {
    staticClass: "text-nowrap",
    staticStyle: {
      width: "40%"
    }
  }, [_vm._v(" " + _vm._s((_vm$dossier_credit7 = _vm.dossier_credit) !== null && _vm$dossier_credit7 !== void 0 && (_vm$dossier_credit7 = _vm$dossier_credit7.cred_pub_tb_1001) !== null && _vm$dossier_credit7 !== void 0 && _vm$dossier_credit7.date_d_entree_en_relation && ((_vm$dossier_credit8 = _vm.dossier_credit) === null || _vm$dossier_credit8 === void 0 || (_vm$dossier_credit8 = _vm$dossier_credit8.cred_pub_tb_1001) === null || _vm$dossier_credit8 === void 0 ? void 0 : _vm$dossier_credit8.date_d_entree_en_relation) != "" ? _vm.formatDate((_vm$dossier_credit9 = _vm.dossier_credit) === null || _vm$dossier_credit9 === void 0 || (_vm$dossier_credit9 = _vm$dossier_credit9.cred_pub_tb_1001) === null || _vm$dossier_credit9 === void 0 ? void 0 : _vm$dossier_credit9.date_d_entree_en_relation) : "") + " ")])]), _vm._v(" "), _c("tr", [_vm._m(5), _vm._v(" "), _c("td", {
    staticClass: "text-nowrap",
    staticStyle: {
      width: "40%"
    }
  }, [_vm._v(" " + _vm._s((_vm$dossier_credit0 = _vm.dossier_credit) === null || _vm$dossier_credit0 === void 0 || (_vm$dossier_credit0 = _vm$dossier_credit0.cred_pub_tb_1001) === null || _vm$dossier_credit0 === void 0 ? void 0 : _vm$dossier_credit0.groupe) + " ")])]), _vm._v(" "), _c("tr", [_vm._m(6), _vm._v(" "), _c("td", {
    staticClass: "text-nowrap",
    staticStyle: {
      width: "40%"
    }
  }, [_vm._v(" " + _vm._s(_vm._f("formatNumber")((_vm$dossier_credit1 = _vm.dossier_credit) === null || _vm$dossier_credit1 === void 0 || (_vm$dossier_credit1 = _vm$dossier_credit1[_vm.credpub00]) === null || _vm$dossier_credit1 === void 0 ? void 0 : _vm$dossier_credit1.exposition_globale)) + " ")])]), _vm._v(" "), _c("tr", [_vm._m(7), _vm._v(" "), _c("td", {
    staticClass: "text-nowrap",
    staticStyle: {
      width: "40%"
    }
  }, [_vm._v(" " + _vm._s((_vm$dossier_credit10 = _vm.dossier_credit) === null || _vm$dossier_credit10 === void 0 || (_vm$dossier_credit10 = _vm$dossier_credit10.cred_pub_tb_1001) === null || _vm$dossier_credit10 === void 0 ? void 0 : _vm$dossier_credit10.type_de_financement) + " ")])])])]), _vm._v(" "), _c("br"), _vm._v(" "), _c("table", {
    staticClass: "table table-bordered mb-4"
  }, [_vm._m(8), _vm._v(" "), _c("tbody", [_c("tr", [_c("td", {
    staticStyle: {
      width: "40%"
    }
  }, [_c("span", {
    domProps: {
      innerHTML: _vm._s((_vm$dossier_credit11 = _vm.dossier_credit) === null || _vm$dossier_credit11 === void 0 || (_vm$dossier_credit11 = _vm$dossier_credit11.cred_pub_tb_1001) === null || _vm$dossier_credit11 === void 0 ? void 0 : _vm$dossier_credit11.objet_du_financement)
    }
  })])])])]), _vm._v(" "), _c("br"), _vm._v(" "), (_vm$dossier_credit12 = _vm.dossier_credit) !== null && _vm$dossier_credit12 !== void 0 && _vm$dossier_credit12.cred_pub_tb_1001 ? _c("table", {
    staticClass: "table table-bordered mb-3"
  }, [_vm._m(9), _vm._v(" "), _c("tbody", {
    staticStyle: {
      "font-size": "0.9rem"
    }
  }, [_c("tr", [_vm._m(10), _vm._v(" "), _c("td", {
    staticStyle: {
      width: "50px"
    }
  }, [_vm._v(_vm._s(((_vm$dossier_credit13 = _vm.dossier_credit) === null || _vm$dossier_credit13 === void 0 || (_vm$dossier_credit13 = _vm$dossier_credit13.cred_pub_tb_1001) === null || _vm$dossier_credit13 === void 0 ? void 0 : _vm$dossier_credit13.criteres_d_eligibilite_contrepartie_choix) == "Oui" ? "OUI" : ""))]), _vm._v(" "), _c("td", {
    staticStyle: {
      width: "50px"
    }
  }, [_vm._v(_vm._s(((_vm$dossier_credit14 = _vm.dossier_credit) === null || _vm$dossier_credit14 === void 0 || (_vm$dossier_credit14 = _vm$dossier_credit14.cred_pub_tb_1001) === null || _vm$dossier_credit14 === void 0 ? void 0 : _vm$dossier_credit14.criteres_d_eligibilite_contrepartie_choix) == "Non" ? "NON" : ""))]), _vm._v(" "), _c("td", [_vm._v("\n                        " + _vm._s((_vm$dossier_credit15 = _vm.dossier_credit) === null || _vm$dossier_credit15 === void 0 || (_vm$dossier_credit15 = _vm$dossier_credit15.cred_pub_tb_1001) === null || _vm$dossier_credit15 === void 0 ? void 0 : _vm$dossier_credit15.criteres_d_eligibilite_contrepartie_commentaire) + "\n                    ")])]), _vm._v(" "), _c("tr", [_c("td", {
    staticStyle: {
      width: "450px"
    }
  }, [_vm._v("\n                        B-\tEngagement pouvant entrainer un non-respect des limites de l’appétence au risques et/ou des ratios réglementaires ou financiers (voir covenants avec les partenaires financiers) \n                    ")]), _vm._v(" "), _c("td", {
    staticStyle: {
      width: "50px"
    }
  }, [_vm._v(_vm._s(((_vm$dossier_credit16 = _vm.dossier_credit) === null || _vm$dossier_credit16 === void 0 || (_vm$dossier_credit16 = _vm$dossier_credit16.cred_pub_tb_1001) === null || _vm$dossier_credit16 === void 0 ? void 0 : _vm$dossier_credit16.criteres_d_eligibilite_engagement_choix) == "Oui" ? "OUI" : ""))]), _vm._v(" "), _c("td", {
    staticStyle: {
      width: "50px"
    }
  }, [_vm._v(_vm._s(((_vm$dossier_credit17 = _vm.dossier_credit) === null || _vm$dossier_credit17 === void 0 || (_vm$dossier_credit17 = _vm$dossier_credit17.cred_pub_tb_1001) === null || _vm$dossier_credit17 === void 0 ? void 0 : _vm$dossier_credit17.criteres_d_eligibilite_engagement_choix) == "Non" ? "NON" : ""))]), _vm._v(" "), _c("td", [_vm._v("\n                        " + _vm._s((_vm$dossier_credit18 = _vm.dossier_credit) === null || _vm$dossier_credit18 === void 0 || (_vm$dossier_credit18 = _vm$dossier_credit18.cred_pub_tb_1001) === null || _vm$dossier_credit18 === void 0 ? void 0 : _vm$dossier_credit18.criteres_d_eligibilite_engagement_commentaire) + "\n                    ")])]), _vm._v(" "), _c("tr", [_c("td", {
    staticStyle: {
      width: "450px"
    }
  }, [_vm._v("\n                        C-\tCrédits syndiqués pour lesquels la banque est chef de file\n                    ")]), _vm._v(" "), _c("td", {
    staticStyle: {
      width: "50px"
    }
  }, [_vm._v(_vm._s(((_vm$dossier_credit19 = _vm.dossier_credit) === null || _vm$dossier_credit19 === void 0 || (_vm$dossier_credit19 = _vm$dossier_credit19.cred_pub_tb_1001) === null || _vm$dossier_credit19 === void 0 ? void 0 : _vm$dossier_credit19.criteres_d_eligibilite_credit_syndique_choix) == "Oui" ? "OUI" : ""))]), _vm._v(" "), _c("td", {
    staticStyle: {
      width: "50px"
    }
  }, [_vm._v(_vm._s(((_vm$dossier_credit20 = _vm.dossier_credit) === null || _vm$dossier_credit20 === void 0 || (_vm$dossier_credit20 = _vm$dossier_credit20.cred_pub_tb_1001) === null || _vm$dossier_credit20 === void 0 ? void 0 : _vm$dossier_credit20.criteres_d_eligibilite_credit_syndique_choix) == "Non" ? "NON" : ""))]), _vm._v(" "), _c("td", [_vm._v("\n                        " + _vm._s((_vm$dossier_credit21 = _vm.dossier_credit) === null || _vm$dossier_credit21 === void 0 || (_vm$dossier_credit21 = _vm$dossier_credit21.cred_pub_tb_1001) === null || _vm$dossier_credit21 === void 0 ? void 0 : _vm$dossier_credit21.criteres_d_eligibilite_credit_syndique_commentaire) + "\n                    ")])]), _vm._v(" "), _vm._m(11), _vm._v(" "), _c("tr", [_vm._m(12), _vm._v(" "), _c("td", {
    staticStyle: {
      width: "50px"
    }
  }, [_vm._v(_vm._s(((_vm$dossier_credit22 = _vm.dossier_credit) === null || _vm$dossier_credit22 === void 0 || (_vm$dossier_credit22 = _vm$dossier_credit22.cred_pub_tb_1001) === null || _vm$dossier_credit22 === void 0 ? void 0 : _vm$dossier_credit22.criteres_d_eligibilite_eligible_choix) == "Oui" ? "OUI" : ""))]), _vm._v(" "), _c("td", {
    staticStyle: {
      width: "50px"
    }
  }, [_vm._v(_vm._s(((_vm$dossier_credit23 = _vm.dossier_credit) === null || _vm$dossier_credit23 === void 0 || (_vm$dossier_credit23 = _vm$dossier_credit23.cred_pub_tb_1001) === null || _vm$dossier_credit23 === void 0 ? void 0 : _vm$dossier_credit23.criteres_d_eligibilite_eligible_choix) == "Non" ? "NON" : ""))]), _vm._v(" "), _c("td", [_vm._v("\n                        " + _vm._s((_vm$dossier_credit24 = _vm.dossier_credit) === null || _vm$dossier_credit24 === void 0 || (_vm$dossier_credit24 = _vm$dossier_credit24.cred_pub_tb_1001) === null || _vm$dossier_credit24 === void 0 ? void 0 : _vm$dossier_credit24.criteres_d_eligibilite_eligible_commentaire) + "\n                    ")])])])]) : _vm._e()]) : _vm._e()])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {
    staticClass: "text-nowrap",
    staticStyle: {
      width: "60%"
    }
  }, [_c("b", [_vm._v("DQ")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {
    staticClass: "text-nowrap",
    staticStyle: {
      width: "60%"
    }
  }, [_c("b", [_vm._v("INDICE CLIENT")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {
    staticClass: "text-nowrap",
    staticStyle: {
      width: "60%"
    }
  }, [_c("b", [_vm._v("EMPRUNTEUR")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {
    staticClass: "text-nowrap",
    staticStyle: {
      width: "60%"
    }
  }, [_c("b", [_vm._v("DATE DE CREATION")]), _vm._v(" h ")]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {
    staticClass: "text-nowrap",
    staticStyle: {
      width: "60%"
    }
  }, [_c("b", [_vm._v("DATE D’ENTREE EN RELATION")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {
    staticClass: "text-nowrap",
    staticStyle: {
      width: "60%"
    }
  }, [_c("b", [_vm._v("GROUPE")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {
    staticStyle: {
      width: "60%"
    }
  }, [_c("b", [_vm._v("MONTANT DE LA DEMANDE DE FINANCEMENT")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {
    staticClass: "text-nowrap",
    staticStyle: {
      width: "60%"
    }
  }, [_c("b", [_vm._v("TYPE DE FINANCEMENT ")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", {
    staticClass: "bg-ed-primary"
  }, [_c("tr", [_c("th", {
    staticClass: "col-12 text-center py-2 m-0"
  }, [_vm._v("\n                        OBJET DU FINANCEMENT\n                    ")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("td", {
    staticClass: "th"
  }, [_c("label", [_c("b", [_vm._v("ITEM / VARIABLE")])])]), _vm._v(" "), _c("td", {
    staticClass: "th"
  }, [_c("label", [_c("b", [_vm._v("OUI")])])]), _vm._v(" "), _c("td", {
    staticClass: "th"
  }, [_c("label", [_c("b", [_vm._v("NON")])])]), _vm._v(" "), _c("td", {
    staticClass: "th"
  }, [_c("label", [_c("b", [_vm._v("COMMENTAIRE")])])])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {
    staticStyle: {
      width: "450px"
    }
  }, [_vm._v("\n                        A-\tContrepartie correspondant aux critères de définition d’un grand risque au sens de l’article 19 de la circulaire N°04-2017/CB/C relative à la gestion des risques dans les établissements de crédit et les compagnies financières de l’UMOA "), _c("br"), _vm._v(" "), _c("b", [_vm._v("La notion de ≪ grand risque ≫")]), _vm._v(" représente un client ou un groupe de clients liés dont la somme de ses actifs pondérés en fonction du risque de crédit atteint au moins 10 % des fonds propres de base (T1) d'un établissement.\n                    ")]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("tr", [_c("td", {
    attrs: {
      colspan: "4"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", [_c("b", [_vm._v("Eligible à l’analyse Contradictoire")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/contre_analyse_filiale/checklist_cri_ana_risq_groupe/CHC1.vue?vue&type=style&index=0&id=3e65ae7e&lang=css&scoped=true":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/contre_analyse_filiale/checklist_cri_ana_risq_groupe/CHC1.vue?vue&type=style&index=0&id=3e65ae7e&lang=css&scoped=true ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.bg-grey[data-v-3e65ae7e] {\r\n    background-color: #f4f3f3;\r\n    font-weight: 600;\n}\n.memo[data-v-3e65ae7e] {\r\n    margin-top: 10px;\r\n    padding: 10px;\r\n    border: 2px solid #fff;\r\n    font-weight: 550;\r\n    font-size: 16px;\r\n    text-align: left;\r\n    text-transform: uppercase;\r\n    background-color: #34495e;\r\n    color: #fff;\n}\n.lgcrd[data-v-3e65ae7e] {\r\n    font-size: 20px;\r\n    font-weight: bold;\r\n    color: #dc0030;\n}\nth[data-v-3e65ae7e] {\r\n    background: #f4f3f3;\n}\n.head-memorandum-title[data-v-3e65ae7e] {\r\n    margin-top: 15px;\r\n    padding: 16px;\r\n    color: #fff;\r\n    font-weight: bold;\r\n    background-color: #34495e;\r\n    border: 2px solid #575759;\r\n    box-shadow: 1px 3px 4px #ddd;\r\n    font-size: 16px;\r\n    text-align: center;\r\n    text-transform: uppercase;\r\n    border-radius: 10px;\r\n    margin-bottom: 15px;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/contre_analyse_filiale/checklist_cri_ana_risq_groupe/CHC1.vue?vue&type=style&index=0&id=3e65ae7e&lang=css&scoped=true":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/contre_analyse_filiale/checklist_cri_ana_risq_groupe/CHC1.vue?vue&type=style&index=0&id=3e65ae7e&lang=css&scoped=true ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CHC1_vue_vue_type_style_index_0_id_3e65ae7e_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CHC1.vue?vue&type=style&index=0&id=3e65ae7e&lang=css&scoped=true */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/contre_analyse_filiale/checklist_cri_ana_risq_groupe/CHC1.vue?vue&type=style&index=0&id=3e65ae7e&lang=css&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CHC1_vue_vue_type_style_index_0_id_3e65ae7e_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CHC1_vue_vue_type_style_index_0_id_3e65ae7e_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/offview/bank/nsia/contre_analyse_filiale/checklist_cri_ana_risq_groupe/CHC1.vue":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/components/offview/bank/nsia/contre_analyse_filiale/checklist_cri_ana_risq_groupe/CHC1.vue ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CHC1_vue_vue_type_template_id_3e65ae7e_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CHC1.vue?vue&type=template&id=3e65ae7e&scoped=true */ "./resources/js/components/offview/bank/nsia/contre_analyse_filiale/checklist_cri_ana_risq_groupe/CHC1.vue?vue&type=template&id=3e65ae7e&scoped=true");
/* harmony import */ var _CHC1_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CHC1.vue?vue&type=script&lang=js */ "./resources/js/components/offview/bank/nsia/contre_analyse_filiale/checklist_cri_ana_risq_groupe/CHC1.vue?vue&type=script&lang=js");
/* harmony import */ var _CHC1_vue_vue_type_style_index_0_id_3e65ae7e_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CHC1.vue?vue&type=style&index=0&id=3e65ae7e&lang=css&scoped=true */ "./resources/js/components/offview/bank/nsia/contre_analyse_filiale/checklist_cri_ana_risq_groupe/CHC1.vue?vue&type=style&index=0&id=3e65ae7e&lang=css&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _CHC1_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _CHC1_vue_vue_type_template_id_3e65ae7e_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _CHC1_vue_vue_type_template_id_3e65ae7e_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "3e65ae7e",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/offview/bank/nsia/contre_analyse_filiale/checklist_cri_ana_risq_groupe/CHC1.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/offview/bank/nsia/contre_analyse_filiale/checklist_cri_ana_risq_groupe/CHC1.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************!*\
  !*** ./resources/js/components/offview/bank/nsia/contre_analyse_filiale/checklist_cri_ana_risq_groupe/CHC1.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CHC1_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CHC1.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/contre_analyse_filiale/checklist_cri_ana_risq_groupe/CHC1.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CHC1_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/offview/bank/nsia/contre_analyse_filiale/checklist_cri_ana_risq_groupe/CHC1.vue?vue&type=style&index=0&id=3e65ae7e&lang=css&scoped=true":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./resources/js/components/offview/bank/nsia/contre_analyse_filiale/checklist_cri_ana_risq_groupe/CHC1.vue?vue&type=style&index=0&id=3e65ae7e&lang=css&scoped=true ***!
  \*************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CHC1_vue_vue_type_style_index_0_id_3e65ae7e_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CHC1.vue?vue&type=style&index=0&id=3e65ae7e&lang=css&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/contre_analyse_filiale/checklist_cri_ana_risq_groupe/CHC1.vue?vue&type=style&index=0&id=3e65ae7e&lang=css&scoped=true");


/***/ }),

/***/ "./resources/js/components/offview/bank/nsia/contre_analyse_filiale/checklist_cri_ana_risq_groupe/CHC1.vue?vue&type=template&id=3e65ae7e&scoped=true":
/*!***********************************************************************************************************************************************************!*\
  !*** ./resources/js/components/offview/bank/nsia/contre_analyse_filiale/checklist_cri_ana_risq_groupe/CHC1.vue?vue&type=template&id=3e65ae7e&scoped=true ***!
  \***********************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CHC1_vue_vue_type_template_id_3e65ae7e_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CHC1_vue_vue_type_template_id_3e65ae7e_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CHC1_vue_vue_type_template_id_3e65ae7e_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CHC1.vue?vue&type=template&id=3e65ae7e&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/contre_analyse_filiale/checklist_cri_ana_risq_groupe/CHC1.vue?vue&type=template&id=3e65ae7e&scoped=true");


/***/ })

}]);