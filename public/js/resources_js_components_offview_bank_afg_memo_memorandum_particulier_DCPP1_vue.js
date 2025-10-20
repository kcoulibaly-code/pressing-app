"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_offview_bank_afg_memo_memorandum_particulier_DCPP1_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/memorandum_particulier/DCPP1.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/memorandum_particulier/DCPP1.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************************************************************/
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
    var _this$dossier_credit, _this$dossier_credit2, _this$dossier_credit3, _this$dossier_credit4, _this$dossier_credit5;
    return {
      data_tb: (_this$dossier_credit = this.dossier_credit) === null || _this$dossier_credit === void 0 ? void 0 : _this$dossier_credit.cred_pub_tb_120001,
      data_tb2: (_this$dossier_credit2 = this.dossier_credit) === null || _this$dossier_credit2 === void 0 ? void 0 : _this$dossier_credit2.cred_pub_tb_120002,
      data_tb_4: (_this$dossier_credit3 = this.dossier_credit) === null || _this$dossier_credit3 === void 0 ? void 0 : _this$dossier_credit3.cred_pub_tb_120004,
      data_tb_10008: (_this$dossier_credit4 = this.dossier_credit) === null || _this$dossier_credit4 === void 0 ? void 0 : _this$dossier_credit4.cred_pub_tb_10008,
      data_tb_14073: (_this$dossier_credit5 = this.dossier_credit) === null || _this$dossier_credit5 === void 0 ? void 0 : _this$dossier_credit5.cred_pub_tb_14073
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/memorandum_particulier/DCPP1.vue?vue&type=template&id=d53e5170&scoped=true":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/memorandum_particulier/DCPP1.vue?vue&type=template&id=d53e5170&scoped=true ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm$data_tb, _vm$data_tb2, _vm$data_tb3, _vm$data_tb4, _vm$data_tb5, _vm$data_tb6, _vm$data_tb7, _vm$data_tb8, _vm$data_tb9, _vm$data_tb0, _vm$data_tb1, _vm$data_tb10, _vm$data_tb11, _vm$data_tb12, _vm$data_tb13, _vm$data_tb14, _vm$data_tb15, _vm$data_tb16, _vm$data_tb17, _vm$data_tb18, _vm$data_tb19, _vm$data_tb20, _vm$data_tb21, _vm$data_tb22, _vm$data_tb23, _vm$data_tb_, _vm$data_tb_2, _vm$data_tb_3, _vm$data_tb_4, _vm$data_tb_5, _vm$data_tb_6, _vm$data_tb24, _vm$data_tb$regime_ma, _vm$data_tb25, _vm$data_tb26, _this$data_tb, _vm$data_tb27, _vm$data_tb28, _vm$data_tb$conjoint$, _vm$data_tb29, _vm$data_tb$conjoint$2, _vm$data_tb30, _vm$data_tb$conjoint$3, _vm$data_tb31, _vm$data_tb$conjoint$4, _vm$data_tb32, _vm$data_tb33, _vm$data_tb$segmentat, _vm$data_tb34, _vm$data_tb35, _vm$data_tb$personne_, _vm$data_tb36, _vm$data_tb$geo_lon, _vm$data_tb37, _vm$data_tb$geo_lat, _vm$data_tb38, _vm$data_tb$is_ex_con, _vm$data_tb39, _vm$data_tb$is_partie, _vm$data_tb40, _vm$data_tb41, _vm$data_tb42, _vm$data_tb43, _vm$data_tb44, _vm$data_tb45, _vm$data_tb46, _vm$data_tb_7, _vm$data_tb_8, _vm$data_tb_9, _vm$data_tb_0, _vm$data_tb_1, _vm$data_tb_10, _vm$data_tb47, _vm$data_tb48, _vm$data_tb49, _vm$data_tb50, _vm$data_tb51, _vm$data_tb52, _vm$data_tb53, _vm$data_tb54;
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
  }, [_c("tr", [_vm._m(2), _vm._v(" "), _c("td", [_vm._v("\n                            " + _vm._s((_vm$data_tb = _vm.data_tb) === null || _vm$data_tb === void 0 ? void 0 : _vm$data_tb.nom) + "\n                        ")]), _vm._v(" "), _vm._m(3), _vm._v(" "), _c("td", [_vm._v("\n                            " + _vm._s((_vm$data_tb2 = _vm.data_tb) === null || _vm$data_tb2 === void 0 ? void 0 : _vm$data_tb2.prenoms) + "\n                        ")])]), _vm._v(" "), _c("tr", [_vm._m(4), _vm._v(" "), _c("td", {}, [_vm._v("\n                            " + _vm._s((_vm$data_tb3 = _vm.data_tb) === null || _vm$data_tb3 === void 0 ? void 0 : _vm$data_tb3.indice) + "\n                        ")]), _vm._v(" "), _vm._m(5), _vm._v(" "), _c("td", {}, [_vm._v("\n                            " + _vm._s((_vm$data_tb4 = _vm.data_tb) === null || _vm$data_tb4 === void 0 ? void 0 : _vm$data_tb4.compte_numero) + "\n                        ")])]), _vm._v(" "), _c("tr", [_vm._m(6), _vm._v(" "), _c("td", {}, [_vm._v("\n                            " + _vm._s((_vm$data_tb5 = _vm.data_tb) === null || _vm$data_tb5 === void 0 ? void 0 : _vm$data_tb5.email_client) + "\n                        ")]), _vm._v(" "), _vm._m(7), _vm._v(" "), _c("td", {}, [_vm._v("\n                            " + _vm._s((_vm$data_tb6 = _vm.data_tb) === null || _vm$data_tb6 === void 0 ? void 0 : _vm$data_tb6.telephone) + "\n                        ")])]), _vm._v(" "), _c("tr", [_vm._m(8), _vm._v(" "), _c("td", {}, [((_vm$data_tb7 = _vm.data_tb) === null || _vm$data_tb7 === void 0 || (_vm$data_tb7 = _vm$data_tb7.telephone_bureau) === null || _vm$data_tb7 === void 0 ? void 0 : _vm$data_tb7.length) > 5 ? _c("span", {}, [_vm._v("\n                            " + _vm._s((_vm$data_tb8 = _vm.data_tb) === null || _vm$data_tb8 === void 0 ? void 0 : _vm$data_tb8.telephone_bureau) + "\n                        ")]) : _vm._e()]), _vm._v(" "), _vm._m(9), _vm._v(" "), _c("td", {}, [_vm._v("\n                            " + _vm._s((_vm$data_tb9 = _vm.data_tb) === null || _vm$data_tb9 === void 0 ? void 0 : _vm$data_tb9.type_piece) + "\n                        ")])]), _vm._v(" "), _c("tr", [_vm._m(10), _vm._v(" "), _c("td", {}, [_vm._v("\n                            " + _vm._s((_vm$data_tb0 = _vm.data_tb) === null || _vm$data_tb0 === void 0 ? void 0 : _vm$data_tb0.num_piece) + "\n                        ")]), _vm._v(" "), _vm._m(11), _vm._v(" "), _c("td", {}, [_vm._v("\n                            " + _vm._s(_vm._f("formatDate")((_vm$data_tb1 = _vm.data_tb) === null || _vm$data_tb1 === void 0 ? void 0 : _vm$data_tb1.date_delivrance_piece)) + "\n                        ")])]), _vm._v(" "), _c("tr", [_vm._m(12), _vm._v(" "), _c("td", {}, [_vm._v("\n                            " + _vm._s((_vm$data_tb10 = _vm.data_tb) === null || _vm$data_tb10 === void 0 ? void 0 : _vm$data_tb10.lieu_delivrance_piece) + "\n                        ")]), _vm._v(" "), _vm._m(13), _vm._v(" "), _c("td", {}, [_vm._v("\n                            " + _vm._s((_vm$data_tb11 = _vm.data_tb) === null || _vm$data_tb11 === void 0 ? void 0 : _vm$data_tb11.sexe) + "\n                        ")])]), _vm._v(" "), _c("tr", [_vm._m(14), _vm._v(" "), _c("td", {}, [_vm._v("\n                            " + _vm._s(_vm._f("formatDate")((_vm$data_tb12 = _vm.data_tb) === null || _vm$data_tb12 === void 0 ? void 0 : _vm$data_tb12.date_naissance)) + "\n                        ")]), _vm._v(" "), _vm._m(15), _vm._v(" "), _c("td", {}, [_vm._v("\n                            " + _vm._s((_vm$data_tb13 = _vm.data_tb) === null || _vm$data_tb13 === void 0 ? void 0 : _vm$data_tb13.ville_naissance) + "\n                        ")])]), _vm._v(" "), _c("tr", [_vm._m(16), _vm._v(" "), _c("td", {}, [_vm._v("\n                            " + _vm._s((_vm$data_tb14 = _vm.data_tb) === null || _vm$data_tb14 === void 0 ? void 0 : _vm$data_tb14.ville_residence) + "\n                        ")]), _vm._v(" "), _vm._m(17), _vm._v(" "), _c("td", {}, [_vm._v("\n                            " + _vm._s((_vm$data_tb15 = _vm.data_tb) === null || _vm$data_tb15 === void 0 ? void 0 : _vm$data_tb15.nationnalite) + "\n                        ")])]), _vm._v(" "), _c("tr", [_vm._m(18), _vm._v(" "), _c("td", {}, [_vm._v("\n                            " + _vm._s((_vm$data_tb16 = _vm.data_tb) === null || _vm$data_tb16 === void 0 ? void 0 : _vm$data_tb16.adresse_postale) + "\n                        ")]), _vm._v(" "), _vm._m(19), _vm._v(" "), _c("td", {}, [_vm._v("\n                            " + _vm._s((_vm$data_tb17 = _vm.data_tb) === null || _vm$data_tb17 === void 0 ? void 0 : _vm$data_tb17.adresse) + "\n                        ")])]), _vm._v(" "), _c("tr", [_vm._m(20), _vm._v(" "), _c("td", {}, [_vm._v("\n                            " + _vm._s((_vm$data_tb18 = _vm.data_tb) === null || _vm$data_tb18 === void 0 ? void 0 : _vm$data_tb18.dad) + "\n                        ")]), _vm._v(" "), _vm._m(21), _vm._v(" "), _c("td", {}, [_vm._v("\n                            " + _vm._s((_vm$data_tb19 = _vm.data_tb) === null || _vm$data_tb19 === void 0 ? void 0 : _vm$data_tb19.mum) + "\n                        ")])]), _vm._v(" "), _c("tr", [_vm._m(22), _vm._v(" "), _c("td", {}, [_vm._v("\n                            " + _vm._s((_vm$data_tb20 = _vm.data_tb) === null || _vm$data_tb20 === void 0 ? void 0 : _vm$data_tb20.agence) + "\n                        ")]), _vm._v(" "), _vm._m(23), _vm._v(" "), _c("td", {}, [_vm._v("\n                            " + _vm._s((_vm$data_tb21 = _vm.data_tb) === null || _vm$data_tb21 === void 0 ? void 0 : _vm$data_tb21.agence_domiciliation) + "\n                        ")])]), _vm._v(" "), _c("tr", [_vm._m(24), _vm._v(" "), _c("td", {}, [_vm._v("\n                            " + _vm._s((_vm$data_tb22 = _vm.data_tb) === null || _vm$data_tb22 === void 0 ? void 0 : _vm$data_tb22.type_client) + "\n                        ")]), _vm._v(" "), _c("td", {}, [_c("b", [_vm._v(_vm._s(_vm.compte_contribuable_label))])]), _vm._v(" "), _c("td", {}, [_vm._v("\n                            " + _vm._s((_vm$data_tb23 = _vm.data_tb) === null || _vm$data_tb23 === void 0 ? void 0 : _vm$data_tb23.compte_contribuable) + "\n                        ")])]), _vm._v(" "), _c("tr")])])])]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12"
  }, [_c("table", {
    staticClass: "table table-bordered"
  }, [_vm._m(25), _vm._v(" "), _c("tbody", {
    staticStyle: {
      "font-size": "0.9rem"
    }
  }, [_c("tr", [_vm.data_tb_10008 ? [_vm._m(26), _vm._v(" "), _c("td", {}, [_vm._v("\n                                    " + _vm._s((_vm$data_tb_ = _vm.data_tb_10008) === null || _vm$data_tb_ === void 0 ? void 0 : _vm$data_tb_.score_global) + "/15 ("), _c("small", {
    staticClass: "color-box",
    style: {
      backgroundColor: _vm.couleur((_vm$data_tb_2 = _vm.data_tb_10008) === null || _vm$data_tb_2 === void 0 ? void 0 : _vm$data_tb_2.score_global)
    }
  }, [_vm._v(_vm._s(_vm.getAppreciation((_vm$data_tb_3 = _vm.data_tb_10008) === null || _vm$data_tb_3 === void 0 ? void 0 : _vm$data_tb_3.score_global)))]), _vm._v(")\n                            ")])] : _vm._e(), _vm._v(" "), _vm.data_tb_14073 ? [_vm._m(27), _vm._v(" "), _c("td", {}, [_vm._v("\n                                    " + _vm._s((_vm$data_tb_4 = _vm.data_tb_14073) === null || _vm$data_tb_4 === void 0 ? void 0 : _vm$data_tb_4.score_global) + "/15 ("), _c("small", {
    staticClass: "color-box",
    style: {
      backgroundColor: _vm.couleur((_vm$data_tb_5 = _vm.data_tb_14073) === null || _vm$data_tb_5 === void 0 ? void 0 : _vm$data_tb_5.score_global)
    }
  }, [_vm._v(_vm._s(_vm.getAppreciation((_vm$data_tb_6 = _vm.data_tb_14073) === null || _vm$data_tb_6 === void 0 ? void 0 : _vm$data_tb_6.score_global)))]), _vm._v(")\n                            ")])] : _vm._e()], 2)])])])]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12"
  }, [_c("table", {
    staticClass: "table table-bordered"
  }, [_vm._m(28), _vm._v(" "), _c("tbody", {
    staticStyle: {
      "font-size": "0.9rem"
    }
  }, [_c("tr", [_vm._m(29), _vm._v(" "), _c("td", {}, [_vm._v(_vm._s((_vm$data_tb24 = _vm.data_tb) === null || _vm$data_tb24 === void 0 ? void 0 : _vm$data_tb24.matrimoniale))]), _vm._v(" "), _vm._m(30), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$data_tb$regime_ma = (_vm$data_tb25 = _vm.data_tb) === null || _vm$data_tb25 === void 0 ? void 0 : _vm$data_tb25.regime_matrimonial) !== null && _vm$data_tb$regime_ma !== void 0 ? _vm$data_tb$regime_ma : "-"))])]), _vm._v(" "), _c("tr", [_vm._m(31), _vm._v(" "), _c("td", {}, [_vm._v(_vm._s((_vm$data_tb26 = _vm.data_tb) === null || _vm$data_tb26 === void 0 ? void 0 : _vm$data_tb26.habitation))]), _vm._v(" "), _vm._m(32), _vm._v(" "), _c("td", {}, [_vm._v(_vm._s(_vm.formatDateMonthYear((_this$data_tb = this.data_tb) === null || _this$data_tb === void 0 ? void 0 : _this$data_tb.anciennete_adresse)))])]), _vm._v(" "), _c("tr", [_vm._m(33), _vm._v(" "), _c("td", {}, [_vm._v(_vm._s((_vm$data_tb27 = _vm.data_tb) === null || _vm$data_tb27 === void 0 ? void 0 : _vm$data_tb27.nbre_enfant))]), _vm._v(" "), _vm._m(34), _vm._v(" "), _c("td", [_vm._v("-")])])])])])]), _vm._v(" "), ((_vm$data_tb28 = _vm.data_tb) === null || _vm$data_tb28 === void 0 ? void 0 : _vm$data_tb28.matrimoniale) == "Marié(e)" ? _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12"
  }, [_c("table", {
    staticClass: "table table-bordered"
  }, [_vm._m(35), _vm._v(" "), _c("tbody", {
    staticStyle: {
      "font-size": "0.9rem"
    }
  }, [_c("tr", [_vm._m(36), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$data_tb$conjoint$ = (_vm$data_tb29 = _vm.data_tb) === null || _vm$data_tb29 === void 0 || (_vm$data_tb29 = _vm$data_tb29.conjoint) === null || _vm$data_tb29 === void 0 ? void 0 : _vm$data_tb29.nom) !== null && _vm$data_tb$conjoint$ !== void 0 ? _vm$data_tb$conjoint$ : "-"))]), _vm._v(" "), _vm._m(37), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$data_tb$conjoint$2 = (_vm$data_tb30 = _vm.data_tb) === null || _vm$data_tb30 === void 0 || (_vm$data_tb30 = _vm$data_tb30.conjoint) === null || _vm$data_tb30 === void 0 ? void 0 : _vm$data_tb30.prenoms) !== null && _vm$data_tb$conjoint$2 !== void 0 ? _vm$data_tb$conjoint$2 : "-"))])]), _vm._v(" "), _c("tr", [_vm._m(38), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$data_tb$conjoint$3 = (_vm$data_tb31 = _vm.data_tb) === null || _vm$data_tb31 === void 0 || (_vm$data_tb31 = _vm$data_tb31.conjoint) === null || _vm$data_tb31 === void 0 ? void 0 : _vm$data_tb31.matrimoniale) !== null && _vm$data_tb$conjoint$3 !== void 0 ? _vm$data_tb$conjoint$3 : "-"))]), _vm._v(" "), _vm._m(39), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$data_tb$conjoint$4 = (_vm$data_tb32 = _vm.data_tb) === null || _vm$data_tb32 === void 0 || (_vm$data_tb32 = _vm$data_tb32.conjoint) === null || _vm$data_tb32 === void 0 ? void 0 : _vm$data_tb32.adresse) !== null && _vm$data_tb$conjoint$4 !== void 0 ? _vm$data_tb$conjoint$4 : "-"))])])])])])]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12"
  }, [_c("table", {
    staticClass: "table table-bordered"
  }, [_vm._m(40), _vm._v(" "), _c("tbody", {
    staticStyle: {
      "font-size": "0.9rem"
    }
  }, [_c("tr", [_vm._m(41), _vm._v(" "), !["Autre"].includes((_vm$data_tb33 = _vm.data_tb) === null || _vm$data_tb33 === void 0 ? void 0 : _vm$data_tb33.segmentation) ? [_c("td", [_vm._v(_vm._s((_vm$data_tb$segmentat = (_vm$data_tb34 = _vm.data_tb) === null || _vm$data_tb34 === void 0 ? void 0 : _vm$data_tb34.segmentation) !== null && _vm$data_tb$segmentat !== void 0 ? _vm$data_tb$segmentat : "-"))])] : [_c("td", [_vm._v(_vm._s((_vm$data_tb35 = _vm.data_tb) === null || _vm$data_tb35 === void 0 ? void 0 : _vm$data_tb35.segmentation_autre) + " (Autre)")])], _vm._v(" "), _vm._m(42), _vm._v(" "), _c("td", {}, [_vm._v("\n                            " + _vm._s((_vm$data_tb$personne_ = (_vm$data_tb36 = _vm.data_tb) === null || _vm$data_tb36 === void 0 ? void 0 : _vm$data_tb36.personne_politiquement_expose) !== null && _vm$data_tb$personne_ !== void 0 ? _vm$data_tb$personne_ : "-") + "\n                        ")])], 2), _vm._v(" "), _c("tr", [_vm._m(43), _vm._v(" "), _c("td", {}, [_vm._v(_vm._s((_vm$data_tb$geo_lon = (_vm$data_tb37 = _vm.data_tb) === null || _vm$data_tb37 === void 0 ? void 0 : _vm$data_tb37.geo_lon) !== null && _vm$data_tb$geo_lon !== void 0 ? _vm$data_tb$geo_lon : "-"))]), _vm._v(" "), _vm._m(44), _vm._v(" "), _c("td", {}, [_vm._v(_vm._s((_vm$data_tb$geo_lat = (_vm$data_tb38 = _vm.data_tb) === null || _vm$data_tb38 === void 0 ? void 0 : _vm$data_tb38.geo_lat) !== null && _vm$data_tb$geo_lat !== void 0 ? _vm$data_tb$geo_lat : "-"))])]), _vm._v(" "), _c("tr", [_vm._m(45), _vm._v(" "), _c("td", {}, [_vm._v(_vm._s((_vm$data_tb$is_ex_con = (_vm$data_tb39 = _vm.data_tb) === null || _vm$data_tb39 === void 0 ? void 0 : _vm$data_tb39.is_ex_contentieux) !== null && _vm$data_tb$is_ex_con !== void 0 ? _vm$data_tb$is_ex_con : "-"))]), _vm._v(" "), _vm._m(46), _vm._v(" "), _c("td", {}, [_vm._v(_vm._s((_vm$data_tb$is_partie = (_vm$data_tb40 = _vm.data_tb) === null || _vm$data_tb40 === void 0 ? void 0 : _vm$data_tb40.is_partie_liee) !== null && _vm$data_tb$is_partie !== void 0 ? _vm$data_tb$is_partie : "-"))])]), _vm._v(" "), _c("tr", [_vm._m(47), _vm._v(" "), _c("td", {}, [_vm._v("\n                            " + _vm._s((_vm$data_tb41 = _vm.data_tb) === null || _vm$data_tb41 === void 0 ? void 0 : _vm$data_tb41.credits_anterieurs) + "\n                        ")]), _vm._v(" "), _vm._m(48), _vm._v(" "), _c("td", {}, [_vm._v("\n                            " + _vm._s((_vm$data_tb42 = _vm.data_tb) === null || _vm$data_tb42 === void 0 ? void 0 : _vm$data_tb42.kyc) + "\n                        ")])])])])])]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12"
  }, [_c("table", {
    staticClass: "table table-bordered mb-3"
  }, [_vm._m(49), _vm._v(" "), _c("tbody", {
    staticStyle: {
      "font-size": "0.9rem"
    }
  }, _vm._l((_vm$data_tb43 = _vm.data_tb) === null || _vm$data_tb43 === void 0 ? void 0 : _vm$data_tb43.reference_familiales_personne_contacters, function (dossier, ky) {
    return _c("tr", {
      key: ky
    }, [_c("td", [_vm._v(_vm._s(dossier === null || dossier === void 0 ? void 0 : dossier.nom))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(dossier === null || dossier === void 0 ? void 0 : dossier.contact))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(dossier === null || dossier === void 0 ? void 0 : dossier.adresse))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(dossier === null || dossier === void 0 ? void 0 : dossier.lien_parente))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(dossier === null || dossier === void 0 ? void 0 : dossier.commentaire))])]);
  }), 0)])])]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12"
  }, [_c("table", {
    staticClass: "table table-bordered"
  }, [_vm._m(50), _vm._v(" "), _c("tbody", {
    staticStyle: {
      "font-size": "0.9rem"
    }
  }, [_vm._m(51), _vm._v(" "), _vm._l((_vm$data_tb44 = _vm.data_tb) === null || _vm$data_tb44 === void 0 ? void 0 : _vm$data_tb44.avoirs_investissements, function (condition, index) {
    var _condition$value;
    return _c("tr", [_c("td", {
      staticClass: "col-6"
    }, [_vm._v(_vm._s(condition === null || condition === void 0 ? void 0 : condition.label))]), _vm._v(" "), _c("td", {
      staticClass: "col-6"
    }, [_vm._v(_vm._s((_condition$value = condition === null || condition === void 0 ? void 0 : condition.value) !== null && _condition$value !== void 0 ? _condition$value : "-"))])]);
  })], 2)])])]), _vm._v(" "), _c("div", {
    staticClass: "row mb-3",
    "class": _vm.paysageClasses
  }, [_c("div", {
    staticClass: "col-12"
  }, [_c("div", {
    staticClass: "table-responsive",
    "class": _vm.tableResponsiveClasses
  }, [_c("table", {
    staticClass: "table table-bordered"
  }, [_vm._m(52), _vm._v(" "), _c("tbody", [_vm._m(53), _vm._v(" "), _vm._l((_vm$data_tb45 = _vm.data_tb) === null || _vm$data_tb45 === void 0 ? void 0 : _vm$data_tb45.revenu_domicilie, function (el, index) {
    return _c("tr", {
      key: index
    }, [[_c("td", {
      staticClass: "text-nowrap"
    }, [_vm._v("\n                                    " + _vm._s(el.libelle) + "\n                                ")]), _vm._v(" "), _c("td", {
      staticClass: "text-nowrap"
    }, [_vm._v("\n                                    " + _vm._s(el.montant_salaire) + "\n                                ")]), _vm._v(" "), _c("td", {
      staticClass: "text-nowrap"
    }, [_vm._v("\n                                    " + _vm._s(el.montant_conjoint) + "\n                                ")]), _vm._v(" "), _c("td", {
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
  }, [_c("div", {
    staticClass: "col-12"
  }, [_c("table", {
    staticClass: "table table-bordered"
  }, [_vm._m(54), _vm._v(" "), _c("tbody", {
    staticStyle: {
      "font-size": "0.9rem"
    }
  }, [_c("tr", [_vm._m(55), _vm._v(" "), _c("td", {}, [_vm._v("\n                            " + _vm._s(_vm._f("formatNumber")((_vm$data_tb46 = _vm.data_tb) === null || _vm$data_tb46 === void 0 ? void 0 : _vm$data_tb46.revenu_total_colonne_montant_pondere)) + "\n                        ")]), _vm._v(" "), _vm._m(56), _vm._v(" "), _c("td", {}, [_vm._v(_vm._s((_vm$data_tb_7 = _vm.data_tb_4) === null || _vm$data_tb_7 === void 0 ? void 0 : _vm$data_tb_7.pourcentage_quotite))])]), _vm._v(" "), _c("tr", [_vm._m(57), _vm._v(" "), _c("td", {}, [_vm._v(_vm._s(_vm._f("formatNumber")((_vm$data_tb_8 = _vm.data_tb_4) === null || _vm$data_tb_8 === void 0 ? void 0 : _vm$data_tb_8.quotite_cessible)))]), _vm._v(" "), _vm._m(58), _vm._v(" "), _c("td", {}, [_vm._v("\n                            " + _vm._s(_vm._f("formatNumber")((_vm$data_tb_9 = _vm.data_tb_4) === null || _vm$data_tb_9 === void 0 ? void 0 : _vm$data_tb_9.quotite_cessible_disponible)) + "\n                        ")])]), _vm._v(" "), _c("tr", [_vm._m(59), _vm._v(" "), _c("td", {}, [_vm._v("\n                            " + _vm._s((_vm$data_tb_0 = _vm.data_tb_4) === null || _vm$data_tb_0 === void 0 ? void 0 : _vm$data_tb_0.pourcentage_quotite_general) + "\n                        ")]), _vm._v(" "), _vm._m(60), _vm._v(" "), _c("td", {}, [_vm._v("\n                            " + _vm._s(_vm._f("formatNumber")((_vm$data_tb_1 = _vm.data_tb_4) === null || _vm$data_tb_1 === void 0 ? void 0 : _vm$data_tb_1.quotite_cessible_general)) + "\n                        ")])]), _vm._v(" "), _c("tr", [_vm._m(61), _vm._v(" "), _c("td", {}, [_vm._v("\n                            " + _vm._s(_vm._f("formatNumber")((_vm$data_tb_10 = _vm.data_tb_4) === null || _vm$data_tb_10 === void 0 ? void 0 : _vm$data_tb_10.quotite_cessible_disponible_general)) + "\n                        ")]), _vm._v(" "), _c("td", {}, [_vm._v("-")]), _vm._v(" "), _c("td", {}, [_vm._v("-")])])])])])]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_vm._m(62), _vm._v(" "), _c("div", {
    staticClass: "col-12"
  }, [_c("table", {
    staticClass: "table table-bordered"
  }, [_vm._m(63), _vm._v(" "), _c("tbody", {
    staticStyle: {
      "font-size": "0.9rem"
    }
  }, [_c("tr", [_vm._m(64), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm._f("formatDate")((_vm$data_tb47 = _vm.data_tb) === null || _vm$data_tb47 === void 0 ? void 0 : _vm$data_tb47.date_entree_en_relation)))])])])])])]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [((_vm$data_tb48 = _vm.data_tb) === null || _vm$data_tb48 === void 0 ? void 0 : _vm$data_tb48.bref_mouvement_12_derniers_mois) !== null ? _c("div", {
    staticClass: "col-12"
  }, [_c("table", {
    staticClass: "table table-bordered"
  }, [_vm._m(65), _vm._v(" "), _c("tbody", {
    staticStyle: {
      "font-size": "0.9rem"
    }
  }, [_c("tr", [_c("td", {
    domProps: {
      innerHTML: _vm._s((_vm$data_tb49 = _vm.data_tb) === null || _vm$data_tb49 === void 0 ? void 0 : _vm$data_tb49.bref_mouvement_12_derniers_mois)
    }
  })])])])]) : _vm._e()]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12"
  }, [_c("table", {
    staticClass: "table table-bordered"
  }, [_vm._m(66), _vm._v(" "), _c("tbody", {
    staticStyle: {
      "font-size": "0.9rem"
    }
  }, [_vm._m(67), _vm._v(" "), _vm._l((_vm$data_tb50 = _vm.data_tb) === null || _vm$data_tb50 === void 0 ? void 0 : _vm$data_tb50.bref_produit_eventuellement_souscrits, function (produit, index) {
    var _produit$commentaire;
    return [produit.checked ? _c("tr", [_c("td", {
      staticClass: "col-6"
    }, [_vm._v(_vm._s(produit === null || produit === void 0 ? void 0 : produit.libelle))]), _vm._v(" "), _c("td", {
      staticClass: "col-6"
    }, [_vm._v(_vm._s((_produit$commentaire = produit === null || produit === void 0 ? void 0 : produit.commentaire) !== null && _produit$commentaire !== void 0 ? _produit$commentaire : "-"))])]) : _vm._e()];
  })], 2)])])]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12"
  }, [_c("table", {
    staticClass: "table table-bordered"
  }, [_vm._m(68), _vm._v(" "), _c("tbody", {
    staticStyle: {
      "font-size": "0.9rem"
    }
  }, _vm._l((_vm$data_tb51 = _vm.data_tb) === null || _vm$data_tb51 === void 0 ? void 0 : _vm$data_tb51.bref_produit_assurance, function (el, index) {
    var _el$commentaire;
    return _c("tr", {
      key: index
    }, [_c("td", [_vm._v(_vm._s(el === null || el === void 0 ? void 0 : el.assurance))]), _vm._v(" "), _c("td", {
      "class": el !== null && el !== void 0 && el.commentaire ? "" : "text-center"
    }, [_vm._v(_vm._s((_el$commentaire = el === null || el === void 0 ? void 0 : el.commentaire) !== null && _el$commentaire !== void 0 ? _el$commentaire : "-"))])]);
  }), 0)])])]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_vm.checkIfISNotEMpty() ? _c("div", {
    staticClass: "col-12"
  }, [_c("table", {
    staticClass: "table table-bordered"
  }, [_vm._m(69), _vm._v(" "), _c("tbody", {
    staticStyle: {
      "font-size": "0.9rem"
    }
  }, [_c("table", {
    staticClass: "table table-bordered full-width-table"
  }, [_vm._m(70), _vm._v(" "), _c("tbody", _vm._l((_vm$data_tb52 = _vm.data_tb) === null || _vm$data_tb52 === void 0 ? void 0 : _vm$data_tb52.bref_produit_eventuellement_souscrits, function (el, ind_) {
    return el.checked ? _c("tr", {
      key: ind_
    }, [_c("td", [_c("div", {
      staticClass: "d-flex align-items-center",
      staticStyle: {
        width: "max-content"
      }
    }, [_c("input", {
      staticClass: "form-check bg-grey",
      staticStyle: {
        width: "unset",
        height: "unset",
        display: "unset"
      },
      attrs: {
        type: "checkbox",
        disabled: ""
      },
      domProps: {
        checked: el.checked
      }
    }), _vm._v(" "), _c("label", {
      staticStyle: {
        "margin-left": "10px"
      }
    }, [_vm._v(_vm._s(el.libelle))])])]), _vm._v(" "), _c("td", [_c("label", {
      staticStyle: {
        "margin-left": "10px"
      }
    }, [_vm._v(_vm._s(el.commentaire))])])]) : _vm._e();
  }), 0)])])])]) : _vm._e()]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [((_vm$data_tb53 = _vm.data_tb) === null || _vm$data_tb53 === void 0 ? void 0 : _vm$data_tb53.bref_incident_a_signaler) !== null ? _c("div", {
    staticClass: "col-12"
  }, [_c("table", {
    staticClass: "table table-bordered"
  }, [_vm._m(71), _vm._v(" "), _c("tbody", {
    staticStyle: {
      "font-size": "0.9rem"
    }
  }, [_c("tr", [_c("td", {
    domProps: {
      innerHTML: _vm._s((_vm$data_tb54 = _vm.data_tb) === null || _vm$data_tb54 === void 0 ? void 0 : _vm$data_tb54.bref_incident_a_signaler)
    }
  })])])])]) : _vm._e()])]);
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
  return _c("td", [_c("b", [_vm._v("Nom ")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", [_c("b", [_vm._v("Prénom ")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {}, [_c("b", [_vm._v("ID Client ")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {}, [_c("b", [_vm._v("Compte N° ")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {}, [_c("b", [_vm._v("Email ")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {}, [_c("b", [_vm._v("Numero de téléphone ")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {}, [_c("b", [_vm._v("Téléphone bureau ")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {}, [_c("b", [_vm._v("Type de pièce d'identité ")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {}, [_c("b", [_vm._v("Le numéro de la pièce d'identité ")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {}, [_c("b", [_vm._v("Date de délivrance ")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {}, [_c("b", [_vm._v("Lieu de délivrance ")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {}, [_c("b", [_vm._v("Genre ")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {}, [_c("b", [_vm._v("Date de naissance ")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {}, [_c("b", [_vm._v("Ville de naissance ")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {}, [_c("b", [_vm._v("Ville de résidence ")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {}, [_c("b", [_vm._v("Nationalité ")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {}, [_c("b", [_vm._v("Adresse postale ")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {}, [_c("b", [_vm._v("Adresse ")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {}, [_c("b", [_vm._v("Nom du père ")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {}, [_c("b", [_vm._v("Nom de la mère  ")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {}, [_c("b", [_vm._v("Agence "), _c("small", [_vm._v("(Origination du dossier)")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {}, [_c("b", [_vm._v("Agence "), _c("small", [_vm._v("(Domiciliation)")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {}, [_c("b", [_vm._v("Le client est ")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("th", {
    staticClass: "th text-nowrap text-center bg-grey",
    attrs: {
      colspan: "4"
    }
  }, [_c("b", [_vm._v("Résultat Scoring")])])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {}, [_c("b", [_vm._v("Scoring DCPP ")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {}, [_c("b", [_vm._v("Scoring DE ")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("th", {
    staticClass: "th text-nowrap text-center bg-grey",
    attrs: {
      colspan: "4"
    }
  }, [_c("b", [_vm._v("Situation familiale")])])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {}, [_c("b", [_vm._v("Situation matrimoniale")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", [_c("b", [_vm._v("Régime matrimonial")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {}, [_c("b", [_vm._v("Type de logement")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {}, [_c("b", [_vm._v("Ancienneté à l'adresse actuelle")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {}, [_c("b", [_vm._v("Nombre d'enfants ")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", [_c("b", [_vm._v("-")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("th", {
    staticClass: "th text-nowrap text-center bg-grey",
    attrs: {
      colspan: "4"
    }
  }, [_c("b", [_vm._v("Conjoint(e)")])])])]);
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
  return _c("td", [_c("b", [_vm._v("Situation matrimoniale")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", [_c("b", [_vm._v("Adresse")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("th", {
    staticClass: "th text-nowrap text-center bg-grey",
    attrs: {
      colspan: "4"
    }
  }, [_c("b", [_vm._v("Divers")])])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {}, [_c("b", [_vm._v("Segmentation")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {}, [_c("b", [_vm._v("Personne politiquement exposé (PPE)")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {}, [_c("b", [_vm._v("Longitude")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {}, [_c("b", [_vm._v("Latitude")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {}, [_c("b", [_vm._v("Ex-contentieux")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {}, [_c("b", [_vm._v("Parties liées")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {}, [_c("b", [_vm._v("Crédit anterieur ")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {}, [_c("b", [_vm._v("KYC ")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("td", {
    staticClass: "text-center bg-grey",
    attrs: {
      colspan: "9"
    }
  }, [_vm._v("\n                                Personnes à contacter en cas d'urgence\n                            ")])]), _vm._v(" "), _c("tr", [_c("th", [_vm._v("Nom")]), _vm._v(" "), _c("th", [_vm._v("Numéro de téléphone")]), _vm._v(" "), _c("th", [_vm._v("Adresse")]), _vm._v(" "), _c("th", [_vm._v("Lien de parenté")]), _vm._v(" "), _c("th", [_vm._v("Commentaire")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("th", {
    staticClass: "th text-nowrap text-center bg-grey",
    attrs: {
      colspan: "4"
    }
  }, [_c("b", [_vm._v("Avoirs ou investissements (immobilier, titres, BDC, etc)")])])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("tr", [_c("td", {
    staticClass: "col-6"
  }, [_c("b", [_vm._v("Type d'avoirs / investissements")])]), _vm._v(" "), _c("td", {
    staticClass: "col-6"
  }, [_c("b", [_vm._v("Valeur / Montant")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("th", {
    staticClass: "th text-nowrap text-center bg-grey",
    attrs: {
      colspan: "14"
    }
  }, [_c("b", [_vm._v("Revenu domicilié à AFG BANK")])])])]);
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
  }, [_c("label", [_vm._v("Conjoint(e) ")])]), _vm._v(" "), _c("th", {
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
  return _c("thead", [_c("tr", [_c("th", {
    staticClass: "th text-nowrap text-center bg-grey",
    attrs: {
      colspan: "4"
    }
  }, [_c("b", [_vm._v("Calcul de la quotité")])])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {}, [_c("b", [_vm._v("Revenu considéré")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {}, [_c("b", [_vm._v("% Quotité")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {}, [_c("b", [_vm._v("Quotité cessible")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {}, [_c("b", [_vm._v("Quotité disponible")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {}, [_c("b", [_vm._v("% Quotité Général")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {}, [_c("b", [_vm._v("Quotité cessible Général")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {}, [_c("b", [_vm._v("Quotité disponible Général")])]);
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
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("th", {
    staticClass: "th text-nowrap text-center bg-grey"
  }, [_c("b", [_vm._v("Mouvement 12 derniers mois")])])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("th", {
    staticClass: "th text-nowrap text-center bg-grey",
    attrs: {
      colspan: "4"
    }
  }, [_c("b", [_vm._v("Produits/Services éventuellement souscrits (Packages)")])])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("tr", [_c("td", {
    staticClass: "col-6"
  }, [_c("b", [_vm._v("Produits / Service")])]), _vm._v(" "), _c("td", {
    staticClass: "col-6"
  }, [_c("b", [_vm._v("Commentaire")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("th", {
    staticClass: "th text-nowrap text-center bg-grey",
    attrs: {
      colspan: "2"
    }
  }, [_c("b", [_vm._v("Produits d'assurance souscrits")])])]), _vm._v(" "), _c("tr", [_c("th", {
    staticClass: "bg-grey"
  }, [_vm._v("Assurance")]), _vm._v(" "), _c("th", {
    staticClass: "bg-grey"
  }, [_vm._v("Remarque/Commentaire")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("th", {
    staticClass: "th text-nowrap text-center bg-grey"
  }, [_c("b", [_vm._v("Produits/Services éventuellement souscrits\n                                (Packages)")])])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("th", [_vm._v("Produit")]), _vm._v(" "), _c("th", [_vm._v("Commentaire")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("th", {
    staticClass: "th text-nowrap text-center bg-grey"
  }, [_c("b", [_vm._v("Incident à signaler / Information sensible utile")])])])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/memorandum_particulier/DCPP1.vue?vue&type=style&index=0&id=d53e5170&lang=css&scoped=true":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/memorandum_particulier/DCPP1.vue?vue&type=style&index=0&id=d53e5170&lang=css&scoped=true ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.bg-grey[data-v-d53e5170] {\r\n    background-color: #f4f3f3;\r\n    font-weight: 600;\r\n    width: 32%;\n}\n.memo[data-v-d53e5170] {\r\n    margin-top: 10px;\r\n    padding: 10px;\r\n    border: 2px solid #fff;\r\n    font-weight: 550;\r\n    font-size: 16px;\r\n    text-align: left;\r\n    text-transform: uppercase;\r\n    background-color: #34495e;\r\n    color: #fff;\n}\r\n\r\n/* td {\r\n    width: 250px;\r\n} */\r\n\r\n/* input {\r\n    width: 250px;\r\n}\r\n.th{\r\n    padding: 4px;\r\n    padding-bottom: 0px;\r\n}\r\n\r\nselect {\r\n    width: 250px;\r\n} */\r\n\r\n/* .head-memorandum-title {\r\n    margin-top: 15px;\r\n    padding: 16px;\r\n    color: #fff;\r\n    font-weight: bold;\r\n    background-color: #34495e;\r\n    border: 2px solid #575759;\r\n    box-shadow: 1px 3px 4px #ddd;\r\n    font-size: 16px;\r\n    text-align: center;\r\n    text-transform: uppercase;\r\n    border-radius: 10px;\r\n    margin-bottom: 15px;\r\n} */\r\n\r\n/* .table th:nth-child(1),\r\n.table td:nth-child(1) {\r\n    position: sticky;\r\n    right: -0.9px;\r\n    background-color: #f4f3f3;\r\n}\r\n\r\n.table th:first-child {\r\n    position: sticky;\r\n    left: 0px;\r\n    background-color: #f4f3f3;\r\n}\r\n\r\n.table td:first-child {\r\n    position: sticky;\r\n    left: 0px;\r\n    background-color: #ffffff;\r\n} */\n.lgcrd[data-v-d53e5170] {\r\n    font-size: 20px;\r\n    font-weight: bold;\r\n    color: #dc0030;\n}\r\n\r\n/* .head-memorandum-title {\r\n    margin-top: 15px;\r\n    padding: 16px;\r\n    color: #fff;\r\n    font-weight: bold;\r\n    background-color: #34495e;\r\n    border: 2px solid #575759;\r\n    box-shadow: 1px 3px 4px #ddd;\r\n    font-size: 16px;\r\n    text-align: center;\r\n    text-transform: uppercase;\r\n    border-radius: 10px;\r\n    margin-bottom: 15px;\r\n} */\n.vertical-middle[data-v-d53e5170] {\r\n    vertical-align: middle;\n}\n.bg-grey[data-v-d53e5170] {\r\n      background-color: #f4f3f3;\r\n      width: 32%;\n}\ninput[type=\"checkbox\"][data-v-d53e5170]:disabled:checked {\r\n    -webkit-appearance: none;\r\n       -moz-appearance: none;\r\n            appearance: none; /* Supprime le style natif */\r\n    /* width: 10px;*/\r\n    min-height: unset !important;\r\n\r\n    padding: 7px;\r\n    background-color: #007bff; /* Bleu */\r\n    /* border: 2px solid #007bff; Bordure bleue */\r\n    border-radius: 2px;\r\n    position: relative;\r\n    cursor: not-allowed;\r\n    margin-top: 5px;\n}\ninput[type=\"checkbox\"][data-v-d53e5170]:disabled:checked::after {\r\n    content: '✔';\r\n    color: white;\r\n    font-size: 8px;\r\n    font-weight: bold;\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\n}\r\n\r\n  /* .head-memorandum-title {\r\n    margin-top: 15px;\r\n    padding: 16px;\r\n    color: #fff;\r\n    font-weight: bold;\r\n    background-color: #34495e;\r\n    border: 2px solid #575759;\r\n    box-shadow: 1px 3px 4px #ddd;\r\n    font-size: 16px;\r\n    text-align: center;\r\n    text-transform: uppercase;\r\n    border-radius: 10px;\r\n    margin-bottom: 15px;\r\n} */\n.head-memorandum-title[data-v-d53e5170] {\r\n\r\nfont-weight: bold;\r\ntext-transform: uppercase;\r\ntext-align: center;border: 1px solid;\r\npadding: 4px;\r\nmargin-top: 30px;\n}\n@media print {\nbody[data-v-d53e5170] {\r\n    margin: 0;\r\n    padding: 0;\n}\r\n\r\n  /* Règles @page nommées */\n@page portrait {\r\n    size: portrait;\r\n    margin: 20mm;\n}\n@page paysage {\r\n    size: landscape;\r\n    margin: 20mm;\n}\r\n\r\n  /* Application des règles @page */\n.portrait[data-v-d53e5170] {\r\n    page: portrait;\r\n    page-break-before: always;\n}\n.paysage[data-v-d53e5170] {\r\n    page: paysage;\r\n    width: 100% !important;\r\n    page-break-before: always;\r\n    page-break-after: always;\n}\r\n\r\n  /* Cacher le bouton à l'impression */\n#printBtn[data-v-d53e5170] {\r\n    display: none;\n}\r\n\r\n  /* Optionnel : ajuster la taille du texte à l'impression */\n.portrait[data-v-d53e5170],\r\n  .paysage[data-v-d53e5170] {\r\n    font-size: 12pt;\n}\n.paysage .table-responsive[data-v-d53e5170] {\r\n    overflow: visible !important;\r\n    width: auto !important;\r\n    max-width: none !important;\r\n    display: block !important;\n}\n.paysage .table-responsive table[data-v-d53e5170] {\r\n    width: 100% !important;\r\n    max-width: none !important;\r\n    display: table !important;\n}\r\n\r\n  /* Réduction taille police et padding */\n.paysage .table-wide table[data-v-d53e5170] {\r\n    font-size: 7pt;\n}\n.paysage .table-wide th[data-v-d53e5170],\r\n  td[data-v-d53e5170] {\r\n    padding: 2px 3px;\n}\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/memorandum_particulier/DCPP1.vue?vue&type=style&index=0&id=d53e5170&lang=css&scoped=true":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/memorandum_particulier/DCPP1.vue?vue&type=style&index=0&id=d53e5170&lang=css&scoped=true ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DCPP1_vue_vue_type_style_index_0_id_d53e5170_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DCPP1.vue?vue&type=style&index=0&id=d53e5170&lang=css&scoped=true */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/memorandum_particulier/DCPP1.vue?vue&type=style&index=0&id=d53e5170&lang=css&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DCPP1_vue_vue_type_style_index_0_id_d53e5170_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DCPP1_vue_vue_type_style_index_0_id_d53e5170_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/offview/bank/afg/memo/memorandum_particulier/DCPP1.vue":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/offview/bank/afg/memo/memorandum_particulier/DCPP1.vue ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DCPP1_vue_vue_type_template_id_d53e5170_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DCPP1.vue?vue&type=template&id=d53e5170&scoped=true */ "./resources/js/components/offview/bank/afg/memo/memorandum_particulier/DCPP1.vue?vue&type=template&id=d53e5170&scoped=true");
/* harmony import */ var _DCPP1_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DCPP1.vue?vue&type=script&lang=js */ "./resources/js/components/offview/bank/afg/memo/memorandum_particulier/DCPP1.vue?vue&type=script&lang=js");
/* harmony import */ var _DCPP1_vue_vue_type_style_index_0_id_d53e5170_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DCPP1.vue?vue&type=style&index=0&id=d53e5170&lang=css&scoped=true */ "./resources/js/components/offview/bank/afg/memo/memorandum_particulier/DCPP1.vue?vue&type=style&index=0&id=d53e5170&lang=css&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _DCPP1_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _DCPP1_vue_vue_type_template_id_d53e5170_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _DCPP1_vue_vue_type_template_id_d53e5170_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "d53e5170",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/offview/bank/afg/memo/memorandum_particulier/DCPP1.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/offview/bank/afg/memo/memorandum_particulier/DCPP1.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/components/offview/bank/afg/memo/memorandum_particulier/DCPP1.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DCPP1_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DCPP1.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/memorandum_particulier/DCPP1.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DCPP1_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/offview/bank/afg/memo/memorandum_particulier/DCPP1.vue?vue&type=style&index=0&id=d53e5170&lang=css&scoped=true":
/*!************************************************************************************************************************************************!*\
  !*** ./resources/js/components/offview/bank/afg/memo/memorandum_particulier/DCPP1.vue?vue&type=style&index=0&id=d53e5170&lang=css&scoped=true ***!
  \************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DCPP1_vue_vue_type_style_index_0_id_d53e5170_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DCPP1.vue?vue&type=style&index=0&id=d53e5170&lang=css&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/memorandum_particulier/DCPP1.vue?vue&type=style&index=0&id=d53e5170&lang=css&scoped=true");


/***/ }),

/***/ "./resources/js/components/offview/bank/afg/memo/memorandum_particulier/DCPP1.vue?vue&type=template&id=d53e5170&scoped=true":
/*!**********************************************************************************************************************************!*\
  !*** ./resources/js/components/offview/bank/afg/memo/memorandum_particulier/DCPP1.vue?vue&type=template&id=d53e5170&scoped=true ***!
  \**********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DCPP1_vue_vue_type_template_id_d53e5170_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DCPP1_vue_vue_type_template_id_d53e5170_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DCPP1_vue_vue_type_template_id_d53e5170_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DCPP1.vue?vue&type=template&id=d53e5170&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/memorandum_particulier/DCPP1.vue?vue&type=template&id=d53e5170&scoped=true");


/***/ })

}]);