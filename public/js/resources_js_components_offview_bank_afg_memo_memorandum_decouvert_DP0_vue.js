"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_offview_bank_afg_memo_memorandum_decouvert_DP0_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/memorandum_decouvert/DP0.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/memorandum_decouvert/DP0.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    dossier_credit: Object
  },
  data: function data() {
    var _this$dossier_credit, _this$dossier_credit2, _this$dossier_credit3, _this$dossier_credit4;
    return {
      data_tb: (_this$dossier_credit = this.dossier_credit) === null || _this$dossier_credit === void 0 ? void 0 : _this$dossier_credit.cred_pub_tb_20000,
      data_tb2: (_this$dossier_credit2 = this.dossier_credit) === null || _this$dossier_credit2 === void 0 ? void 0 : _this$dossier_credit2.cred_pub_tb_20001,
      // data_tb_4: this.dossier_credit?.cred_pub_tb_120502,
      data_tb_10008: (_this$dossier_credit3 = this.dossier_credit) === null || _this$dossier_credit3 === void 0 ? void 0 : _this$dossier_credit3.cred_pub_tb_20002,
      data_tb_14073: (_this$dossier_credit4 = this.dossier_credit) === null || _this$dossier_credit4 === void 0 ? void 0 : _this$dossier_credit4.cred_pub_tb_20004
    };
  },
  mounted: function mounted() {},
  computed: {
    compte_contribuable_label: function compte_contribuable_label() {
      var _this$authenticatedUs;
      if (((_this$authenticatedUs = this.authenticatedUser) === null || _this$authenticatedUs === void 0 ? void 0 : _this$authenticatedUs.filiale) == "AFGB CM") {
        return 'N° d\'identifiant unique (NIU)';
      } else {
        return 'N° compte contribuable (NCC)';
      }
    },
    colonnesRevenuDomicilie: function colonnesRevenuDomicilie() {
      var _this$data_tb;
      var revenus = ((_this$data_tb = this.data_tb) === null || _this$data_tb === void 0 ? void 0 : _this$data_tb.revenu_domicilie) || [];
      var colonnes = [{
        label: "Revenu",
        key: "libelle"
      }, {
        label: "Montant",
        key: "montant_salaire"
      }, {
        label: "Conjoint(e)",
        key: "montant_conjoint"
      }, {
        label: "Total",
        key: "total_ligne"
      }, {
        label: "Eligible",
        key: "eligible",
        isBoolean: true
      }, {
        label: "SR",
        key: "source_remboursement",
        isBoolean: true
      }, {
        label: "Périodicité",
        key: "mensualite"
      }, {
        label: "Mensualité",
        key: "taux"
      }, {
        label: "Montant pondére",
        key: "montant_pondere"
      }, {
        label: "TQC AFG BANK",
        key: "taux_qc1"
      }, {
        label: "QC AFG BANK",
        key: "montant_qc1"
      }, {
        label: "TQC Général",
        key: "taux_qc2"
      }, {
        label: "QC Général",
        key: "montant_qc2"
      }, {
        label: "Commentaire",
        key: "commentaire"
      }];
      return colonnes.filter(function (col) {
        return revenus.some(function (el) {
          var val = el[col.key];
          return val !== null && val !== '';
        });
      });
    },
    revenuDomicilieChecked: function revenuDomicilieChecked() {
      var _this$data_tb2;
      return ((_this$data_tb2 = this.data_tb) === null || _this$data_tb2 === void 0 || (_this$data_tb2 = _this$data_tb2.revenu_domicilie) === null || _this$data_tb2 === void 0 ? void 0 : _this$data_tb2.filter(function (rev) {
        return rev.checked;
      })) || [];
    }
  },
  methods: {
    formatDateMonthYear: function formatDateMonthYear(dateStr) {
      // console.log('dateStr ', dateStr);

      if (Array.isArray(dateStr)) {
        dateStr = dateStr[1];
      }
      if ([undefined, null, ''].includes(dateStr)) return '';
      var _dateStr$split = dateStr.split('-'),
        _dateStr$split2 = _slicedToArray(_dateStr$split, 2),
        year = _dateStr$split2[0],
        month = _dateStr$split2[1];
      var mois = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'];
      var moisIndex = parseInt(month, 10) - 1;
      if (moisIndex < 0 || moisIndex > 11) return "".concat(year); // fallback si mauvais mois
      return "".concat(mois[moisIndex], " ").concat(year);
    },
    checkIfISNotEMpty: function checkIfISNotEMpty() {
      var _this$cred_tb_, _this$cred_tb_2;
      return ((_this$cred_tb_ = this.cred_tb_120001) === null || _this$cred_tb_ === void 0 || (_this$cred_tb_ = _this$cred_tb_.bref_produit_eventuellement_souscrits) === null || _this$cred_tb_ === void 0 ? void 0 : _this$cred_tb_.length) > 0 && ((_this$cred_tb_2 = this.cred_tb_120001) === null || _this$cred_tb_2 === void 0 || (_this$cred_tb_2 = _this$cred_tb_2.bref_produit_eventuellement_souscrits) === null || _this$cred_tb_2 === void 0 ? void 0 : _this$cred_tb_2.some(function (cp) {
        return (cp === null || cp === void 0 ? void 0 : cp.checked) === true && (cp === null || cp === void 0 ? void 0 : cp.libelle) !== null && (cp === null || cp === void 0 ? void 0 : cp.libelle) !== '';
      }));
    },
    getAppreciation: function getAppreciation(note) {
      if (note >= 0 && note < 4) {
        return 'Risque très élevé';
      } else if (note >= 4 && note < 9) {
        return 'Risque élevé';
      } else if (note >= 9 && note < 11) {
        return 'Acceptable';
      } else if (note >= 11 && note <= 15) {
        return 'Bon';
      } else {
        return 'Non défini';
      }
    },
    couleur: function couleur(score) {
      if (score >= 0 && score < 4) return 'rgb(223, 92, 36)'; // très élevé
      else if (score >= 4 && score < 9) return 'rgb(255, 153, 51)'; // élevé
      else if (score >= 9 && score < 11) return 'rgb(163, 186, 120)'; // acceptable
      else if (score >= 11 && score <= 15) return 'rgb(46, 158, 85)'; // bon
      else return '';
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/memorandum_decouvert/DP0.vue?vue&type=template&id=2fcc917e&scoped=true":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/memorandum_decouvert/DP0.vue?vue&type=template&id=2fcc917e&scoped=true ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm$data_tb, _vm$data_tb2, _vm$data_tb3, _vm$data_tb4, _vm$data_tb5, _vm$data_tb6, _vm$data_tb7, _vm$data_tb8, _vm$data_tb9, _vm$data_tb0, _vm$data_tb1, _vm$data_tb10, _vm$data_tb11, _vm$data_tb12, _vm$data_tb13, _vm$data_tb14, _vm$data_tb15, _vm$data_tb16;
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "row"
  }, [_vm._m(0), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12"
  }, [_c("table", {
    staticClass: "table table-bordered"
  }, [_vm._m(1), _vm._v(" "), _c("tbody", {
    staticStyle: {
      "font-size": "0.9rem"
    }
  }, [_c("tr", [_vm._m(2), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$data_tb = _vm.data_tb) === null || _vm$data_tb === void 0 ? void 0 : _vm$data_tb.nom))]), _vm._v(" "), _vm._m(3), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$data_tb2 = _vm.data_tb) === null || _vm$data_tb2 === void 0 ? void 0 : _vm$data_tb2.prenoms))])]), _vm._v(" "), _c("tr", [_vm._m(4), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$data_tb3 = _vm.data_tb) === null || _vm$data_tb3 === void 0 ? void 0 : _vm$data_tb3.indice))]), _vm._v(" "), _vm._m(5), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$data_tb4 = _vm.data_tb) === null || _vm$data_tb4 === void 0 ? void 0 : _vm$data_tb4.compte_numero))])]), _vm._v(" "), _c("tr", [_vm._m(6), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$data_tb5 = _vm.data_tb) === null || _vm$data_tb5 === void 0 ? void 0 : _vm$data_tb5.telephone))]), _vm._v(" "), _vm._m(7), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$data_tb6 = _vm.data_tb) === null || _vm$data_tb6 === void 0 ? void 0 : _vm$data_tb6.type_piece))])]), _vm._v(" "), _c("tr", [_vm._m(8), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$data_tb7 = _vm.data_tb) === null || _vm$data_tb7 === void 0 ? void 0 : _vm$data_tb7.num_piece))]), _vm._v(" "), _vm._m(9), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$data_tb8 = _vm.data_tb) === null || _vm$data_tb8 === void 0 ? void 0 : _vm$data_tb8.type_client))])]), _vm._v(" "), _c("tr", [_vm._m(10), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$data_tb9 = _vm.data_tb) === null || _vm$data_tb9 === void 0 ? void 0 : _vm$data_tb9.lieu_delivrance_piece))]), _vm._v(" "), _vm._m(11), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$data_tb0 = _vm.data_tb) === null || _vm$data_tb0 === void 0 ? void 0 : _vm$data_tb0.ville_residence))])]), _vm._v(" "), _c("tr", [_vm._m(12), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm._f("formatDate")((_vm$data_tb1 = _vm.data_tb) === null || _vm$data_tb1 === void 0 ? void 0 : _vm$data_tb1.date_naissance)))]), _vm._v(" "), _vm._m(13), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$data_tb10 = _vm.data_tb) === null || _vm$data_tb10 === void 0 ? void 0 : _vm$data_tb10.type_piece))])]), _vm._v(" "), _c("tr", [_vm._m(14), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$data_tb11 = _vm.data_tb) === null || _vm$data_tb11 === void 0 ? void 0 : _vm$data_tb11.type_client))]), _vm._v(" "), _c("td", [_c("b", [_vm._v(_vm._s(_vm.compte_contribuable_label))])]), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$data_tb12 = _vm.data_tb) === null || _vm$data_tb12 === void 0 ? void 0 : _vm$data_tb12.compte_contribuable))])]), _vm._v(" "), _c("tr", [_vm._m(15), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$data_tb13 = _vm.data_tb) === null || _vm$data_tb13 === void 0 ? void 0 : _vm$data_tb13.fonction))]), _vm._v(" "), _vm._m(16), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$data_tb14 = _vm.data_tb) === null || _vm$data_tb14 === void 0 ? void 0 : _vm$data_tb14.adresse))])])])])])]), _vm._v(" "), _c("div", {
    staticClass: "row mb-3",
    "class": _vm.paysageClasses
  }, [_c("div", {
    staticClass: "col-12"
  }, [_c("div", {
    staticClass: "table-responsive",
    "class": _vm.tableResponsiveClasses
  }, [_c("table", {
    staticClass: "table table-bordered"
  }, [_c("tbody", [_vm._m(17), _vm._v(" "), _vm._l((_vm$data_tb15 = _vm.data_tb) === null || _vm$data_tb15 === void 0 ? void 0 : _vm$data_tb15.revenu_domicilie, function (el, index) {
    return _c("tr", {
      key: index
    }, [[_c("td", {
      staticClass: "text-nowrap"
    }, [_vm._v("\n                                    " + _vm._s(el.libelle) + "\n                                ")]), _vm._v(" "), _c("td", {
      staticClass: "text-nowrap"
    }, [_vm._v("\n                                    " + _vm._s(el.montant_salaire) + "\n                                ")]), _vm._v(" "), _c("td", {
      staticClass: "text-nowrap"
    }, [_vm._v("\n                                    " + _vm._s(_vm._f("formatNumber")(el.total_ligne)) + "\n                                ")]), _vm._v(" "), _c("td", {
      staticClass: "text-nowrap"
    }, [_c("span", [_vm._v(_vm._s(el.eligible ? "Oui" : "Non"))])]), _vm._v(" "), _c("td", {
      staticClass: "text-nowrap"
    }, [_c("span", [_vm._v(_vm._s(el.source_remboursement ? "Oui" : "Non"))])]), _vm._v(" "), _c("td", {
      staticClass: "text-nowrap"
    }, [_vm._v("\n                                    " + _vm._s(el.periodicite) + "\n                                ")]), _vm._v(" "), _c("td", {
      staticClass: "text-nowrap"
    }, [_vm._v("\n                                    " + _vm._s(_vm._f("formatNumber")(el.mensualite)) + "\n                                ")]), _vm._v(" "), _c("td", {
      staticClass: "text-nowrap"
    }, [_vm._v("\n                                    " + _vm._s(el.taux) + "\n                                ")]), _vm._v(" "), _c("td", {
      staticClass: "text-nowrap"
    }, [_vm._v("\n                                    " + _vm._s(_vm._f("formatNumber")(el.montant_pondere)) + "\n                                ")]), _vm._v(" "), _c("td", {
      staticClass: "text-nowrap"
    }, [_vm._v("\n                                    " + _vm._s(el.taux_qc1) + "\n                                ")]), _vm._v(" "), _c("td", {
      staticClass: "text-nowrap"
    }, [_vm._v("\n                                    " + _vm._s(_vm._f("formatNumber")(el.montant_qc1)) + "\n                                ")]), _vm._v(" "), _c("td", {
      staticClass: "text-nowrap"
    }, [_vm._v("\n                                    " + _vm._s(el.taux_qc2) + "\n                                ")]), _vm._v(" "), _c("td", {
      staticClass: "text-nowrap"
    }, [_vm._v("\n                                    " + _vm._s(_vm._f("formatNumber")(el.montant_qc2)) + "\n                                ")]), _vm._v(" "), _c("td", {
      staticClass: "text-nowrap"
    }, [_vm._v("\n                                    " + _vm._s(el.commentaire) + "\n                                ")])]], 2);
  })], 2)])])])]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_vm._m(18), _vm._v(" "), _c("div", {
    staticClass: "col-12"
  }, [_c("table", {
    staticClass: "table table-bordered"
  }, [_vm._m(19), _vm._v(" "), _c("tbody", {
    staticStyle: {
      "font-size": "0.9rem"
    }
  }, [_c("tr", [_vm._m(20), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm._f("formatDate")((_vm$data_tb16 = _vm.data_tb) === null || _vm$data_tb16 === void 0 ? void 0 : _vm$data_tb16.date_entree_en_relation)))])])])])])])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "justify-content-center"
  }, [_c("div", {
    staticClass: "head-memorandum-title px-3",
    staticStyle: {
      "text-align": "center"
    }
  }, [_vm._v("\n           Identification du client\n        ")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("th", {
    staticClass: "th text-nowrap text-center bg-grey",
    attrs: {
      colspan: "4"
    }
  }, [_c("b", [_vm._v("Informations personnelles")])])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", [_c("b", [_vm._v("Nom")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", [_c("b", [_vm._v("Prénom")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", [_c("b", [_vm._v("ID Client")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", [_c("b", [_vm._v("Compte N°")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", [_c("b", [_vm._v("Numéro de téléphone")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", [_c("b", [_vm._v("Type de pièce d'identité")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", [_c("b", [_vm._v("Le numéro de la pièce d'identité")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", [_c("b", [_vm._v("Le client est")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", [_c("b", [_vm._v("Lieu de délivrance")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", [_c("b", [_vm._v("Ville de résidence")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", [_c("b", [_vm._v("Date de naissance")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", [_c("b", [_vm._v("Type de pièce d'identité")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", [_c("b", [_vm._v("Le client est")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", [_c("b", [_vm._v("Fonction actuelle")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", [_c("b", [_vm._v("Adresse")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("tr", {
    staticClass: "text-center"
  }, [_c("th", {
    staticClass: "th text-nowrap"
  }, [_c("label", [_vm._v("Revenu")])]), _vm._v(" "), _c("th", {
    staticClass: "th text-nowrap"
  }, [_c("label", [_vm._v("Montant")])]), _vm._v(" "), _c("th", {
    staticClass: "th text-nowrap"
  }, [_c("label", [_vm._v("Total")])]), _vm._v(" "), _c("th", {
    staticClass: "th text-nowrap"
  }, [_c("label", [_vm._v("Eligible")])]), _vm._v(" "), _c("th", {
    staticClass: "th text-nowrap"
  }, [_c("label", [_vm._v("SR")])]), _vm._v(" "), _c("th", {
    staticClass: "th text-nowrap"
  }, [_c("label", [_vm._v("Périodicité")])]), _vm._v(" "), _c("th", {
    staticClass: "th text-nowrap"
  }, [_c("label", [_vm._v("Mensualité")])]), _vm._v(" "), _c("th", {
    staticClass: "th text-nowrap"
  }, [_c("label", [_vm._v("Taux(%)")])]), _vm._v(" "), _c("th", {
    staticClass: "th text-nowrap"
  }, [_c("label", [_vm._v("Montant pondére")])]), _vm._v(" "), _c("th", {
    staticClass: "th text-nowrap"
  }, [_c("label", [_vm._v("TQC AFG BANK")])]), _vm._v(" "), _c("th", {
    staticClass: "th text-nowrap"
  }, [_c("label", [_vm._v("QC AFG BANK")])]), _vm._v(" "), _c("th", {
    staticClass: "th text-nowrap"
  }, [_c("label", [_vm._v("TQC Légal(%)")])]), _vm._v(" "), _c("th", {
    staticClass: "th text-nowrap"
  }, [_c("label", [_vm._v("QC Légal(%)")])]), _vm._v(" "), _c("th", {
    staticClass: "th text-nowrap"
  }, [_c("label", [_vm._v("Commentaire")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "justify-content-center"
  }, [_c("div", {
    staticClass: "head-memorandum-title px-3",
    staticStyle: {
      "text-align": "center"
    }
  }, [_vm._v("\n            Bref rappel des relations du client avec la AFG BANK\n            ")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("th", {
    staticClass: "th text-nowrap text-center bg-grey",
    attrs: {
      colspan: "2"
    }
  }, [_c("b", [_vm._v("Date d'entrée en relation")])])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", [_c("b", [_vm._v("Date d'entrée en relation")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/memorandum_decouvert/DP0.vue?vue&type=style&index=0&id=2fcc917e&lang=css&scoped=true":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/memorandum_decouvert/DP0.vue?vue&type=style&index=0&id=2fcc917e&lang=css&scoped=true ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.bg-grey[data-v-2fcc917e] {\r\n    background-color: #f4f3f3;\r\n    font-weight: 600;\r\n    width: 32%;\n}\n.memo[data-v-2fcc917e] {\r\n    margin-top: 10px;\r\n    padding: 10px;\r\n    border: 2px solid #fff;\r\n    font-weight: 550;\r\n    font-size: 16px;\r\n    text-align: left;\r\n    text-transform: uppercase;\r\n    background-color: #34495e;\r\n    color: #fff;\n}\r\n\r\n/* td {\r\n    width: 250px;\r\n} */\r\n\r\n/* input {\r\n    width: 250px;\r\n}\r\n.th{\r\n    padding: 4px;\r\n    padding-bottom: 0px;\r\n}\r\n\r\nselect {\r\n    width: 250px;\r\n} */\r\n\r\n/* .head-memorandum-title {\r\n    margin-top: 15px;\r\n    padding: 16px;\r\n    color: #fff;\r\n    font-weight: bold;\r\n    background-color: #34495e;\r\n    border: 2px solid #575759;\r\n    box-shadow: 1px 3px 4px #ddd;\r\n    font-size: 16px;\r\n    text-align: center;\r\n    text-transform: uppercase;\r\n    border-radius: 10px;\r\n    margin-bottom: 15px;\r\n} */\r\n\r\n/* .table th:nth-child(1),\r\n.table td:nth-child(1) {\r\n    position: sticky;\r\n    right: -0.9px;\r\n    background-color: #f4f3f3;\r\n}\r\n\r\n.table th:first-child {\r\n    position: sticky;\r\n    left: 0px;\r\n    background-color: #f4f3f3;\r\n}\r\n\r\n.table td:first-child {\r\n    position: sticky;\r\n    left: 0px;\r\n    background-color: #ffffff;\r\n} */\n.lgcrd[data-v-2fcc917e] {\r\n    font-size: 20px;\r\n    font-weight: bold;\r\n    color: #dc0030;\n}\r\n\r\n/* .head-memorandum-title {\r\n    margin-top: 15px;\r\n    padding: 16px;\r\n    color: #fff;\r\n    font-weight: bold;\r\n    background-color: #34495e;\r\n    border: 2px solid #575759;\r\n    box-shadow: 1px 3px 4px #ddd;\r\n    font-size: 16px;\r\n    text-align: center;\r\n    text-transform: uppercase;\r\n    border-radius: 10px;\r\n    margin-bottom: 15px;\r\n} */\n.vertical-middle[data-v-2fcc917e] {\r\n    vertical-align: middle;\n}\n.bg-grey[data-v-2fcc917e] {\r\n      background-color: #f4f3f3;\r\n      width: 32%;\n}\ninput[type=\"checkbox\"][data-v-2fcc917e]:disabled:checked {\r\n    -webkit-appearance: none;\r\n       -moz-appearance: none;\r\n            appearance: none; /* Supprime le style natif */\r\n    /* width: 10px;*/\r\n    min-height: unset !important;\r\n\r\n    padding: 7px;\r\n    background-color: #007bff; /* Bleu */\r\n    /* border: 2px solid #007bff; Bordure bleue */\r\n    border-radius: 2px;\r\n    position: relative;\r\n    cursor: not-allowed;\r\n    margin-top: 5px;\n}\ninput[type=\"checkbox\"][data-v-2fcc917e]:disabled:checked::after {\r\n    content: '✔';\r\n    color: white;\r\n    font-size: 8px;\r\n    font-weight: bold;\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\n}\r\n\r\n  /* .head-memorandum-title {\r\n    margin-top: 15px;\r\n    padding: 16px;\r\n    color: #fff;\r\n    font-weight: bold;\r\n    background-color: #34495e;\r\n    border: 2px solid #575759;\r\n    box-shadow: 1px 3px 4px #ddd;\r\n    font-size: 16px;\r\n    text-align: center;\r\n    text-transform: uppercase;\r\n    border-radius: 10px;\r\n    margin-bottom: 15px;\r\n} */\n.head-memorandum-title[data-v-2fcc917e] {\r\n\r\nfont-weight: bold;\r\ntext-transform: uppercase;\r\ntext-align: center;border: 1px solid;\r\npadding: 4px;\r\nmargin-top: 30px;\n}\n@media print {\nbody[data-v-2fcc917e] {\r\n    margin: 0;\r\n    padding: 0;\n}\r\n\r\n  /* Règles @page nommées */\n@page portrait {\r\n    size: portrait;\r\n    margin: 20mm;\n}\n@page paysage {\r\n    size: landscape;\r\n    margin: 20mm;\n}\r\n\r\n  /* Application des règles @page */\n.portrait[data-v-2fcc917e] {\r\n    page: portrait;\r\n    page-break-before: always;\n}\n.paysage[data-v-2fcc917e] {\r\n    page: paysage;\r\n    width: 100% !important;\r\n    page-break-before: always;\r\n    page-break-after: always;\n}\r\n\r\n  /* Cacher le bouton à l'impression */\n#printBtn[data-v-2fcc917e] {\r\n    display: none;\n}\r\n\r\n  /* Optionnel : ajuster la taille du texte à l'impression */\n.portrait[data-v-2fcc917e],\r\n  .paysage[data-v-2fcc917e] {\r\n    font-size: 12pt;\n}\n.paysage .table-responsive[data-v-2fcc917e] {\r\n    overflow: visible !important;\r\n    width: auto !important;\r\n    max-width: none !important;\r\n    display: block !important;\n}\n.paysage .table-responsive table[data-v-2fcc917e] {\r\n    width: 100% !important;\r\n    max-width: none !important;\r\n    display: table !important;\n}\r\n\r\n  /* Réduction taille police et padding */\n.paysage .table-wide table[data-v-2fcc917e] {\r\n    font-size: 7pt;\n}\n.paysage .table-wide th[data-v-2fcc917e],\r\n  td[data-v-2fcc917e] {\r\n    padding: 2px 3px;\n}\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/memorandum_decouvert/DP0.vue?vue&type=style&index=0&id=2fcc917e&lang=css&scoped=true":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/memorandum_decouvert/DP0.vue?vue&type=style&index=0&id=2fcc917e&lang=css&scoped=true ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DP0_vue_vue_type_style_index_0_id_2fcc917e_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DP0.vue?vue&type=style&index=0&id=2fcc917e&lang=css&scoped=true */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/memorandum_decouvert/DP0.vue?vue&type=style&index=0&id=2fcc917e&lang=css&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DP0_vue_vue_type_style_index_0_id_2fcc917e_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DP0_vue_vue_type_style_index_0_id_2fcc917e_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/offview/bank/afg/memo/memorandum_decouvert/DP0.vue":
/*!************************************************************************************!*\
  !*** ./resources/js/components/offview/bank/afg/memo/memorandum_decouvert/DP0.vue ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DP0_vue_vue_type_template_id_2fcc917e_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DP0.vue?vue&type=template&id=2fcc917e&scoped=true */ "./resources/js/components/offview/bank/afg/memo/memorandum_decouvert/DP0.vue?vue&type=template&id=2fcc917e&scoped=true");
/* harmony import */ var _DP0_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DP0.vue?vue&type=script&lang=js */ "./resources/js/components/offview/bank/afg/memo/memorandum_decouvert/DP0.vue?vue&type=script&lang=js");
/* harmony import */ var _DP0_vue_vue_type_style_index_0_id_2fcc917e_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DP0.vue?vue&type=style&index=0&id=2fcc917e&lang=css&scoped=true */ "./resources/js/components/offview/bank/afg/memo/memorandum_decouvert/DP0.vue?vue&type=style&index=0&id=2fcc917e&lang=css&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _DP0_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _DP0_vue_vue_type_template_id_2fcc917e_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _DP0_vue_vue_type_template_id_2fcc917e_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "2fcc917e",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/offview/bank/afg/memo/memorandum_decouvert/DP0.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/offview/bank/afg/memo/memorandum_decouvert/DP0.vue?vue&type=script&lang=js":
/*!************************************************************************************************************!*\
  !*** ./resources/js/components/offview/bank/afg/memo/memorandum_decouvert/DP0.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DP0_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DP0.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/memorandum_decouvert/DP0.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DP0_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/offview/bank/afg/memo/memorandum_decouvert/DP0.vue?vue&type=style&index=0&id=2fcc917e&lang=css&scoped=true":
/*!********************************************************************************************************************************************!*\
  !*** ./resources/js/components/offview/bank/afg/memo/memorandum_decouvert/DP0.vue?vue&type=style&index=0&id=2fcc917e&lang=css&scoped=true ***!
  \********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DP0_vue_vue_type_style_index_0_id_2fcc917e_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DP0.vue?vue&type=style&index=0&id=2fcc917e&lang=css&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/memorandum_decouvert/DP0.vue?vue&type=style&index=0&id=2fcc917e&lang=css&scoped=true");


/***/ }),

/***/ "./resources/js/components/offview/bank/afg/memo/memorandum_decouvert/DP0.vue?vue&type=template&id=2fcc917e&scoped=true":
/*!******************************************************************************************************************************!*\
  !*** ./resources/js/components/offview/bank/afg/memo/memorandum_decouvert/DP0.vue?vue&type=template&id=2fcc917e&scoped=true ***!
  \******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DP0_vue_vue_type_template_id_2fcc917e_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DP0_vue_vue_type_template_id_2fcc917e_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DP0_vue_vue_type_template_id_2fcc917e_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DP0.vue?vue&type=template&id=2fcc917e&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/memorandum_decouvert/DP0.vue?vue&type=template&id=2fcc917e&scoped=true");


/***/ })

}]);