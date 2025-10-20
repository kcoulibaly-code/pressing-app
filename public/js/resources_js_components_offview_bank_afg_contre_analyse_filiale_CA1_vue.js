"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_offview_bank_afg_contre_analyse_filiale_CA1_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/contre_analyse_filiale/CA1.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/contre_analyse_filiale/CA1.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var tauxEndettementConfig = {
  salaire: {
    label: "Salaire",
    formule: "(A)",
    value: 0
  },
  autres_revenues: {
    label: "Autre revenu",
    formule: "(B)",
    value: 0
  },
  remb_nouveau_credit: {
    label: "Mensualité",
    formule: "(C)",
    value: 0
  },
  remb_autre_credit: {
    label: "Autre remboursement (Chez AFG BANK)",
    formule: "(D)",
    value: 0
  },
  remb_credit_confrere: {
    label: "Autre remboursement (Chez les confrères)",
    formule: "(E)",
    value: 0
  },
  taux_endettement: {
    label: "Taux d'endettement",
    formule: "(C + D) / (A + B)",
    value: 0,
    bold: true,
    percentage: true
  }
};
var ravConfig = {
  rav_theorique: {
    label: "RAV Théorique",
    formule: "*",
    value: 0
  },
  // rav_reel: {
  //     label: "RAV Réel",
  //     formule: "(A + B) - (C + D)",
  //     value: 0,
  // },
  rav_reel_gt_rav_theorique: {
    label: "RAV Réel > RAV Théorique",
    formule: "(O/N)",
    value: false
  }
};
function retrieveFromConfig(config, valueObj) {
  var result = JSON.parse(JSON.stringify(config));
  for (var key in result) {
    if (valueObj.hasOwnProperty(key)) {
      result[key].value = valueObj[key];
    }
  }
  return result;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    dossier_credit: Object
  },
  mounted: function mounted() {
    var _this$dossier_credit, _this$dossier_credit2;
    var applied_templ_name = (_this$dossier_credit = this.dossier_credit) === null || _this$dossier_credit === void 0 ? void 0 : _this$dossier_credit.applied_templ_name;
    var tbArrays = this.determineCredPubTables(applied_templ_name, this.dossier_credit);
    this.credpubIn0 = tbArrays[0];
    this.credpubIn1 = tbArrays[3];
    this.credpubIn2 = tbArrays[4];
    this.credpubIn3 = tbArrays[5];
    this.credpubIn4 = tbArrays[6];
    this.cred_pub_tb_120004 = (_this$dossier_credit2 = this.dossier_credit) === null || _this$dossier_credit2 === void 0 ? void 0 : _this$dossier_credit2[this.credpubIn1];
  },
  data: function data() {
    var _this$dossier_credit3, _this$dossier_credit4, _this$dossier_credit5;
    var vm = this;
    return {
      credpubIn0: null,
      credpubIn1: null,
      credpubIn2: null,
      credpubIn3: null,
      credpubIn4: null,
      cred_pub_tb_120004: null,
      cred_pub_tb_14071: (_this$dossier_credit3 = this.dossier_credit) === null || _this$dossier_credit3 === void 0 ? void 0 : _this$dossier_credit3.cred_pub_tb_14071,
      data_tb_10008: (_this$dossier_credit4 = this.dossier_credit) === null || _this$dossier_credit4 === void 0 ? void 0 : _this$dossier_credit4.cred_pub_tb_10008,
      data_tb_14073: (_this$dossier_credit5 = this.dossier_credit) === null || _this$dossier_credit5 === void 0 ? void 0 : _this$dossier_credit5.cred_pub_tb_14073
    };
  },
  computed: {
    tauxEndettement: function tauxEndettement() {
      var _this$dossier_credit6;
      var te = ((_this$dossier_credit6 = this.dossier_credit) === null || _this$dossier_credit6 === void 0 || (_this$dossier_credit6 = _this$dossier_credit6.cred_pub_tb_14071) === null || _this$dossier_credit6 === void 0 ? void 0 : _this$dossier_credit6.taux_endettement) || {};
      var result = retrieveFromConfig(tauxEndettementConfig, te);
      result.remb_credit_confrere.value = this.getAutreRembConfrere();
      return result;
    },
    rav: function rav() {
      var _this$dossier_credit7;
      var rav = ((_this$dossier_credit7 = this.dossier_credit) === null || _this$dossier_credit7 === void 0 || (_this$dossier_credit7 = _this$dossier_credit7.cred_pub_tb_14071) === null || _this$dossier_credit7 === void 0 ? void 0 : _this$dossier_credit7.rav) || {};
      return retrieveFromConfig(ravConfig, rav);
    }
  },
  methods: {
    formatAmount: function formatAmount(x) {
      var _x$toString;
      return x === null || x === void 0 || (_x$toString = x.toString()) === null || _x$toString === void 0 ? void 0 : _x$toString.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    },
    parseMontant: function parseMontant(montant) {
      if (typeof montant === 'number') {
        montant = montant.toString();
      } else if (typeof montant === 'string') {
        montant = montant.replace(/\s/g, "").trim();
      } else {
        return 0;
      }
      var valeur = this.localeStringToFloat(montant);
      return isNaN(valeur) ? 0 : valeur;
    },
    getAutreRembConfrere: function getAutreRembConfrere() {
      var _this$cred_pub_tb_,
        _this = this;
      var facilites = (_this$cred_pub_tb_ = this.cred_pub_tb_120004) === null || _this$cred_pub_tb_ === void 0 ? void 0 : _this$cred_pub_tb_.facilites_existante_confrere;
      if (!Array.isArray(facilites) || facilites.length === 0) {
        return 0;
      }
      var total = facilites.reduce(function (sum, el) {
        var montantNum = _this.parseMontant((el === null || el === void 0 ? void 0 : el.montant_echeance) || "0");
        return sum + (isNaN(montantNum) ? 0 : montantNum);
      }, 0);
      return total;
    },
    checkIfFaciliteExistantNotEMpty: function checkIfFaciliteExistantNotEMpty() {
      var _this$cred_pub_tb_2, _this$cred_pub_tb_3;
      return ((_this$cred_pub_tb_2 = this.cred_pub_tb_14071) === null || _this$cred_pub_tb_2 === void 0 || (_this$cred_pub_tb_2 = _this$cred_pub_tb_2.facilites_existante) === null || _this$cred_pub_tb_2 === void 0 ? void 0 : _this$cred_pub_tb_2.length) > 0 && ((_this$cred_pub_tb_3 = this.cred_pub_tb_14071) === null || _this$cred_pub_tb_3 === void 0 || (_this$cred_pub_tb_3 = _this$cred_pub_tb_3.facilites_existante) === null || _this$cred_pub_tb_3 === void 0 ? void 0 : _this$cred_pub_tb_3.some(function (cp) {
        return (cp === null || cp === void 0 ? void 0 : cp.libelle) !== null && (cp === null || cp === void 0 ? void 0 : cp.libelle) !== '';
      }));
    },
    convertInt: function convertInt(n) {
      var _n$toString;
      return Number(n === null || n === void 0 || (_n$toString = n.toString()) === null || _n$toString === void 0 ? void 0 : _n$toString.replace(/\s/g, ""));
    },
    formuleQD: function formuleQD(mt, colonn) {
      mt = isNaN(mt) ? 0 : mt;
      var formulas = {
        A: "A = \u2211 RC = SN (Salaire Net) + PR (Prime) + AR (Autre revenu)",
        B: "B = \u2211 %SN + %PR + %AR",
        C: "C = TMP (Total Mt Pond\xE9r\xE9) / TMQC (Total Mt Quotit\xE9 C\xE9ssible)",
        D: "D = B - \u2211 Ms (Mensualit\xE9s des facilit\xE9s sollicit\xE9es)",
        E: "E = TMP (Total Mt Pond\xE9r\xE9) / TMQCL (Total Mt Quotit\xE9 C\xE9ssible L\xE9gal)",
        F: "F = \u2211 %SN + %PR + %AR",
        G: "G = B - \u2211 Ms (Mensualit\xE9s des facilit\xE9s sollicit\xE9es)"
      };
      return "Formule de calcul: ".concat(formulas[colonn] || "Non défini");
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/contre_analyse_filiale/CA1.vue?vue&type=template&id=548717fc&scoped=true":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/contre_analyse_filiale/CA1.vue?vue&type=template&id=548717fc&scoped=true ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm$cred_pub_tb_, _vm$cred_pub_tb_2, _vm$cred_pub_tb_3, _vm$cred_pub_tb_4, _vm$cred_pub_tb_5, _vm$cred_pub_tb_6, _vm$cred_pub_tb_7, _vm$cred_pub_tb_8, _vm$cred_pub_tb_9, _vm$cred_pub_tb_0, _vm$cred_pub_tb_1, _vm$cred_pub_tb_10, _vm$cred_pub_tb_11, _vm$cred_pub_tb_12, _vm$cred_pub_tb_13, _vm$cred_pub_tb_14, _vm$cred_pub_tb_15, _vm$cred_pub_tb_16, _vm$cred_pub_tb_17, _vm$cred_pub_tb_18, _vm$cred_pub_tb_19, _vm$cred_pub_tb_20, _vm$cred_pub_tb_21, _vm$cred_pub_tb_22, _vm$cred_pub_tb_23, _vm$cred_pub_tb_24, _vm$cred_pub_tb_25, _vm$cred_pub_tb_26, _vm$cred_pub_tb_27, _vm$cred_pub_tb_28, _vm$cred_pub_tb_29, _vm$cred_pub_tb_30, _vm$cred_pub_tb_31, _vm$cred_pub_tb_32, _vm$cred_pub_tb_33, _vm$cred_pub_tb_34, _vm$cred_pub_tb_35, _vm$cred_pub_tb_36, _vm$cred_pub_tb_37, _vm$cred_pub_tb_38, _vm$cred_pub_tb_39, _vm$cred_pub_tb_40, _vm$cred_pub_tb_41, _vm$data_tb_, _vm$data_tb_2, _vm$data_tb_3, _vm$data_tb_4, _vm$data_tb_5, _vm$data_tb_6, _vm$dossier_credit, _vm$cred_pub_tb_42, _vm$cred_pub_tb_43, _vm$cred_pub_tb_44, _vm$cred_pub_tb_45, _vm$cred_pub_tb_46, _vm$cred_pub_tb_47, _vm$cred_pub_tb_48, _vm$cred_pub_tb_49, _vm$cred_pub_tb_50, _vm$cred_pub_tb_51, _vm$cred_pub_tb_52, _vm$cred_pub_tb_53, _vm$cred_pub_tb_54, _vm$cred_pub_tb_55, _vm$cred_pub_tb_56, _vm$cred_pub_tb_57, _vm$cred_pub_tb_58, _vm$cred_pub_tb_59, _vm$cred_pub_tb_60, _vm$cred_pub_tb_61, _vm$authenticatedUser, _vm$authenticatedUser2, _vm$cred_pub_tb_62;
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "row my-4"
  }, [_c("div", {
    staticClass: "justify-content-center"
  }, [_vm.dossier_credit.tbs_in_use.includes("tb14071") ? _c("div", {
    staticClass: "table-responsive"
  }, [_vm.checkIfFaciliteExistantNotEMpty() ? _c("div", {
    staticClass: "col-12 mt-4"
  }, [_c("div", [_c("div", {
    staticClass: "p-2 text-center fw-bold",
    staticStyle: {
      border: "1px solid",
      "border-bottom": "0"
    }
  }, [_vm._v("\n                        Concours / Facilités existantes\n                    ")]), _vm._v(" "), _c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-bordered",
    staticStyle: {
      border: "none"
    }
  }, [_c("tbody", [_c("tr", [_c("td", {
    staticClass: "sticky-col"
  }, [_vm._v("Filiale")]), _vm._v(" "), _vm._l((_vm$cred_pub_tb_ = _vm.cred_pub_tb_14071) === null || _vm$cred_pub_tb_ === void 0 ? void 0 : _vm$cred_pub_tb_.facilites_existante, function (cp, index) {
    var _cp$filiale;
    return _c("td", {
      key: "filiale-" + index
    }, [_vm._v("\n                                    " + _vm._s((_cp$filiale = cp === null || cp === void 0 ? void 0 : cp.filiale) !== null && _cp$filiale !== void 0 ? _cp$filiale : "-") + "\n                                    ")]);
  })], 2), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "sticky-col"
  }, [_vm._v("Nature du concours")]), _vm._v(" "), _vm._l((_vm$cred_pub_tb_2 = _vm.cred_pub_tb_14071) === null || _vm$cred_pub_tb_2 === void 0 ? void 0 : _vm$cred_pub_tb_2.facilites_existante, function (cp, index) {
    var _cp$facilite_libelle;
    return _c("td", {
      key: "nature-" + index
    }, [_vm._v("\n                                    " + _vm._s((_cp$facilite_libelle = cp === null || cp === void 0 ? void 0 : cp.facilite_libelle) !== null && _cp$facilite_libelle !== void 0 ? _cp$facilite_libelle : "-") + "\n                                    ")]);
  })], 2), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "sticky-col"
  }, [_vm._v("Code du crédit")]), _vm._v(" "), _vm._l((_vm$cred_pub_tb_3 = _vm.cred_pub_tb_14071) === null || _vm$cred_pub_tb_3 === void 0 ? void 0 : _vm$cred_pub_tb_3.facilites_existante, function (cp, index) {
    var _cp$credit_type_code;
    return _c("td", {
      key: "credit-code-" + index
    }, [_vm._v("\n                                    " + _vm._s((_cp$credit_type_code = cp === null || cp === void 0 ? void 0 : cp.credit_type_code) !== null && _cp$credit_type_code !== void 0 ? _cp$credit_type_code : "-") + "\n                                    ")]);
  })], 2), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "sticky-col"
  }, [_vm._v("Code de prêt flexcube")]), _vm._v(" "), _vm._l((_vm$cred_pub_tb_4 = _vm.cred_pub_tb_14071) === null || _vm$cred_pub_tb_4 === void 0 ? void 0 : _vm$cred_pub_tb_4.facilites_existante, function (cp, index) {
    var _cp$credit_number;
    return _c("td", {
      key: "credit-number-" + index
    }, [_vm._v("\n                                    " + _vm._s((_cp$credit_number = cp === null || cp === void 0 ? void 0 : cp.credit_number) !== null && _cp$credit_number !== void 0 ? _cp$credit_number : "-") + "\n                                    ")]);
  })], 2), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "sticky-col"
  }, [_vm._v("Mt crédit")]), _vm._v(" "), _vm._l((_vm$cred_pub_tb_5 = _vm.cred_pub_tb_14071) === null || _vm$cred_pub_tb_5 === void 0 ? void 0 : _vm$cred_pub_tb_5.facilites_existante, function (cp, index) {
    return _c("td", {
      key: "mt-credit-" + index
    }, [_vm._v("\n                                    " + _vm._s(cp !== null && cp !== void 0 && cp.montant_credit ? _vm.formatAmount(cp.montant_credit) : "-") + "\n                                    ")]);
  })], 2), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "sticky-col"
  }, [_vm._v("Durée (Mois)")]), _vm._v(" "), _vm._l((_vm$cred_pub_tb_6 = _vm.cred_pub_tb_14071) === null || _vm$cred_pub_tb_6 === void 0 ? void 0 : _vm$cred_pub_tb_6.facilites_existante, function (cp, index) {
    var _cp$duree;
    return _c("td", {
      key: "duree-" + index
    }, [_vm._v("\n                                    " + _vm._s((_cp$duree = cp === null || cp === void 0 ? void 0 : cp.duree) !== null && _cp$duree !== void 0 ? _cp$duree : "-") + "\n                                    ")]);
  })], 2), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "sticky-col"
  }, [_vm._v("Taux (%)")]), _vm._v(" "), _vm._l((_vm$cred_pub_tb_7 = _vm.cred_pub_tb_14071) === null || _vm$cred_pub_tb_7 === void 0 ? void 0 : _vm$cred_pub_tb_7.facilites_existante, function (cp, index) {
    var _cp$taux;
    return _c("td", {
      key: "taux-" + index
    }, [_vm._v("\n                                    " + _vm._s((_cp$taux = cp === null || cp === void 0 ? void 0 : cp.taux) !== null && _cp$taux !== void 0 ? _cp$taux : "-") + "\n                                    ")]);
  })], 2), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "sticky-col"
  }, [_vm._v("Echéancier")]), _vm._v(" "), _vm._l((_vm$cred_pub_tb_8 = _vm.cred_pub_tb_14071) === null || _vm$cred_pub_tb_8 === void 0 ? void 0 : _vm$cred_pub_tb_8.facilites_existante, function (cp, index) {
    var _cp$echeancier;
    return _c("td", {
      key: "echeancier-" + index
    }, [_vm._v("\n                                    " + _vm._s((_cp$echeancier = cp === null || cp === void 0 ? void 0 : cp.echeancier) !== null && _cp$echeancier !== void 0 ? _cp$echeancier : "-") + "\n                                    ")]);
  })], 2), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "sticky-col"
  }, [_vm._v("Mt de l’échéance")]), _vm._v(" "), _vm._l((_vm$cred_pub_tb_9 = _vm.cred_pub_tb_14071) === null || _vm$cred_pub_tb_9 === void 0 ? void 0 : _vm$cred_pub_tb_9.facilites_existante, function (cp, index) {
    return _c("td", {
      key: "mt-echeance-" + index
    }, [_vm._v("\n                                    " + _vm._s(cp !== null && cp !== void 0 && cp.montant_echeance ? _vm.formatAmount(cp.montant_echeance) : "-") + "\n                                    ")]);
  })], 2), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "sticky-col"
  }, [_vm._v("Encours")]), _vm._v(" "), _vm._l((_vm$cred_pub_tb_0 = _vm.cred_pub_tb_14071) === null || _vm$cred_pub_tb_0 === void 0 ? void 0 : _vm$cred_pub_tb_0.facilites_existante, function (cp, index) {
    return _c("td", {
      key: "encours-" + index
    }, [_vm._v("\n                                    " + _vm._s(cp !== null && cp !== void 0 && cp.encours ? _vm.formatAmount(cp.encours) : "-") + "\n                                    ")]);
  })], 2), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "sticky-col"
  }, [_vm._v("Impayé")]), _vm._v(" "), _vm._l((_vm$cred_pub_tb_1 = _vm.cred_pub_tb_14071) === null || _vm$cred_pub_tb_1 === void 0 ? void 0 : _vm$cred_pub_tb_1.facilites_existante, function (cp, index) {
    return _c("td", {
      key: "impaye-" + index
    }, [_vm._v("\n                                    " + _vm._s(cp !== null && cp !== void 0 && cp.impaye ? _vm.formatAmount(cp.impaye) : "-") + "\n                                    ")]);
  })], 2), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "sticky-col"
  }, [_vm._v("Date échéance")]), _vm._v(" "), _vm._l((_vm$cred_pub_tb_10 = _vm.cred_pub_tb_14071) === null || _vm$cred_pub_tb_10 === void 0 ? void 0 : _vm$cred_pub_tb_10.facilites_existante, function (cp, index) {
    return _c("td", {
      key: "date-ech-" + index
    }, [_vm._v("\n                                    " + _vm._s(cp !== null && cp !== void 0 && cp.date_echeance ? _vm.formatDate(cp.date_echeance) : "-") + "\n                                    ")]);
  })], 2), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "sticky-col"
  }, [_vm._v("Commentaire")]), _vm._v(" "), _vm._l((_vm$cred_pub_tb_11 = _vm.cred_pub_tb_14071) === null || _vm$cred_pub_tb_11 === void 0 ? void 0 : _vm$cred_pub_tb_11.facilites_existante, function (cp, index) {
    var _cp$commentaire;
    return _c("td", {
      key: "commentaire-" + index
    }, [_vm._v("\n                                    " + _vm._s((_cp$commentaire = cp === null || cp === void 0 ? void 0 : cp.commentaire) !== null && _cp$commentaire !== void 0 ? _cp$commentaire : "-") + "\n                                    ")]);
  })], 2)])])])])]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "mt-4"
  }, [_c("div", {
    staticClass: "p-2 text-center fw-bold",
    staticStyle: {
      border: "1px solid",
      "border-bottom": "0"
    }
  }, [_vm._v("\n                    Concours / Facilités sollicitées\n                ")]), _vm._v(" "), _c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-bordered",
    staticStyle: {
      border: "none"
    }
  }, [_c("tbody", [_c("tr", [_c("td", {
    staticClass: "sticky-col"
  }, [_vm._v("Type de crédit")]), _vm._v(" "), _vm._l((_vm$cred_pub_tb_12 = _vm.cred_pub_tb_120004) === null || _vm$cred_pub_tb_12 === void 0 ? void 0 : _vm$cred_pub_tb_12.facilites_sollicitees, function (cp, index) {
    var _cp$type_facilite;
    return _c("td", {
      key: "type-" + index
    }, [_vm._v("\n                                " + _vm._s((_cp$type_facilite = cp === null || cp === void 0 ? void 0 : cp.type_facilite) !== null && _cp$type_facilite !== void 0 ? _cp$type_facilite : "-") + "\n                                ")]);
  })], 2), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "sticky-col"
  }, [_vm._v("Code produit")]), _vm._v(" "), _vm._l((_vm$cred_pub_tb_13 = _vm.cred_pub_tb_120004) === null || _vm$cred_pub_tb_13 === void 0 ? void 0 : _vm$cred_pub_tb_13.facilites_sollicitees, function (cp, index) {
    var _cp$infos_fcub$PRODUC, _cp$infos_fcub;
    return _c("td", {
      key: "prod-code-" + index
    }, [_vm._v("\n                                " + _vm._s((_cp$infos_fcub$PRODUC = cp === null || cp === void 0 || (_cp$infos_fcub = cp.infos_fcub) === null || _cp$infos_fcub === void 0 ? void 0 : _cp$infos_fcub.PRODUCT_CODE) !== null && _cp$infos_fcub$PRODUC !== void 0 ? _cp$infos_fcub$PRODUC : "-") + "\n                                ")]);
  })], 2), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "sticky-col"
  }, [_vm._v("Descr. produit")]), _vm._v(" "), _vm._l((_vm$cred_pub_tb_14 = _vm.cred_pub_tb_120004) === null || _vm$cred_pub_tb_14 === void 0 ? void 0 : _vm$cred_pub_tb_14.facilites_sollicitees, function (cp, index) {
    var _cp$infos_fcub$PRODUC2, _cp$infos_fcub2;
    return _c("td", {
      key: "prod-desc-" + index
    }, [_vm._v("\n                                " + _vm._s((_cp$infos_fcub$PRODUC2 = cp === null || cp === void 0 || (_cp$infos_fcub2 = cp.infos_fcub) === null || _cp$infos_fcub2 === void 0 ? void 0 : _cp$infos_fcub2.PRODUCT_DESC) !== null && _cp$infos_fcub$PRODUC2 !== void 0 ? _cp$infos_fcub$PRODUC2 : "-") + "\n                                ")]);
  })], 2), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "sticky-col"
  }, [_vm._v("Montant demandé (Client)")]), _vm._v(" "), _vm._l((_vm$cred_pub_tb_15 = _vm.cred_pub_tb_120004) === null || _vm$cred_pub_tb_15 === void 0 ? void 0 : _vm$cred_pub_tb_15.facilites_sollicitees, function (cp, index) {
    var _cp$montant_demande;
    return _c("td", {
      key: "montant-demande-" + index
    }, [_vm._v("\n                                " + _vm._s((_cp$montant_demande = cp === null || cp === void 0 ? void 0 : cp.montant_demande) !== null && _cp$montant_demande !== void 0 ? _cp$montant_demande : "-") + "\n                                ")]);
  })], 2), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "sticky-col"
  }, [_vm._v("Montant crédit (Prop. DCPP)")]), _vm._v(" "), _vm._l((_vm$cred_pub_tb_16 = _vm.cred_pub_tb_120004) === null || _vm$cred_pub_tb_16 === void 0 ? void 0 : _vm$cred_pub_tb_16.facilites_sollicitees, function (cp, index) {
    var _cp$montant_credit;
    return _c("td", {
      key: "montant-credit-" + index
    }, [_vm._v("\n                                " + _vm._s((_cp$montant_credit = cp === null || cp === void 0 ? void 0 : cp.montant_credit) !== null && _cp$montant_credit !== void 0 ? _cp$montant_credit : "-") + "\n                                ")]);
  })], 2), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "sticky-col"
  }, [_vm._v("Durée (Mois)")]), _vm._v(" "), _vm._l((_vm$cred_pub_tb_17 = _vm.cred_pub_tb_120004) === null || _vm$cred_pub_tb_17 === void 0 ? void 0 : _vm$cred_pub_tb_17.facilites_sollicitees, function (cp, index) {
    var _cp$duree2;
    return _c("td", {
      key: "duree-" + index
    }, [_vm._v("\n                                " + _vm._s((_cp$duree2 = cp === null || cp === void 0 ? void 0 : cp.duree) !== null && _cp$duree2 !== void 0 ? _cp$duree2 : "-") + "\n                                ")]);
  })], 2), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "sticky-col"
  }, [_vm._v("Taux (%)")]), _vm._v(" "), _vm._l((_vm$cred_pub_tb_18 = _vm.cred_pub_tb_120004) === null || _vm$cred_pub_tb_18 === void 0 ? void 0 : _vm$cred_pub_tb_18.facilites_sollicitees, function (cp, index) {
    var _cp$taux2;
    return _c("td", {
      key: "taux-" + index
    }, [_vm._v("\n                                " + _vm._s((_cp$taux2 = cp === null || cp === void 0 ? void 0 : cp.taux) !== null && _cp$taux2 !== void 0 ? _cp$taux2 : "-") + "\n                                ")]);
  })], 2), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "sticky-col"
  }, [_vm._v("Échéance")]), _vm._v(" "), _vm._l((_vm$cred_pub_tb_19 = _vm.cred_pub_tb_120004) === null || _vm$cred_pub_tb_19 === void 0 ? void 0 : _vm$cred_pub_tb_19.facilites_sollicitees, function (cp, index) {
    var _cp$echeancier2;
    return _c("td", {
      key: "echeancier-" + index
    }, [_vm._v("\n                                " + _vm._s((_cp$echeancier2 = cp === null || cp === void 0 ? void 0 : cp.echeancier) !== null && _cp$echeancier2 !== void 0 ? _cp$echeancier2 : "-") + "\n                                ")]);
  })], 2), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "sticky-col"
  }, [_vm._v("Montant de l'échéance")]), _vm._v(" "), _vm._l((_vm$cred_pub_tb_20 = _vm.cred_pub_tb_120004) === null || _vm$cred_pub_tb_20 === void 0 ? void 0 : _vm$cred_pub_tb_20.facilites_sollicitees, function (cp, index) {
    var _cp$montant_echeance;
    return _c("td", {
      key: "montant-ech-" + index
    }, [_vm._v("\n                                " + _vm._s((_cp$montant_echeance = cp === null || cp === void 0 ? void 0 : cp.montant_echeance) !== null && _cp$montant_echeance !== void 0 ? _cp$montant_echeance : "-") + "\n                                ")]);
  })], 2), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "sticky-col"
  }, [_vm._v("Date 1ère échéance")]), _vm._v(" "), _vm._l((_vm$cred_pub_tb_21 = _vm.cred_pub_tb_120004) === null || _vm$cred_pub_tb_21 === void 0 ? void 0 : _vm$cred_pub_tb_21.facilites_sollicitees, function (cp, index) {
    return _c("td", {
      key: "date-ech-" + index
    }, [_vm._v("\n                                " + _vm._s(cp !== null && cp !== void 0 && cp.date_echeance ? _vm.formatDate(cp.date_echeance) : "-") + "\n                                ")]);
  })], 2), _vm._v(" "), !["CRESCO", "Découvert Privilège"].includes(_vm.dossier_credit.applied_templ_name) ? _c("tr", [_c("td", {
    staticClass: "sticky-col"
  }, [_vm._v("Rachat")]), _vm._v(" "), _vm._l((_vm$cred_pub_tb_22 = _vm.cred_pub_tb_120004) === null || _vm$cred_pub_tb_22 === void 0 ? void 0 : _vm$cred_pub_tb_22.facilites_sollicitees, function (cp, index) {
    var _cp$is_rachat;
    return _c("td", {
      key: "rachat-" + index
    }, [_vm._v("\n                                " + _vm._s((_cp$is_rachat = cp === null || cp === void 0 ? void 0 : cp.is_rachat) !== null && _cp$is_rachat !== void 0 ? _cp$is_rachat : "-") + "\n                                ")]);
  })], 2) : _vm._e(), _vm._v(" "), !["CRESCO", "Découvert Privilège"].includes(_vm.dossier_credit.applied_templ_name) ? _c("tr", [_c("td", {
    staticClass: "sticky-col"
  }, [_vm._v("Type de rachat")]), _vm._v(" "), _vm._l((_vm$cred_pub_tb_23 = _vm.cred_pub_tb_120004) === null || _vm$cred_pub_tb_23 === void 0 ? void 0 : _vm$cred_pub_tb_23.facilites_sollicitees, function (cp, index) {
    var _cp$type_rachat;
    return _c("td", {
      key: "type-rachat-" + index
    }, [_vm._v("\n                                " + _vm._s((_cp$type_rachat = cp === null || cp === void 0 ? void 0 : cp.type_rachat) !== null && _cp$type_rachat !== void 0 ? _cp$type_rachat : "-") + "\n                                ")]);
  })], 2) : _vm._e(), _vm._v(" "), !["CRESCO", "Découvert Privilège"].includes(_vm.dossier_credit.applied_templ_name) ? _c("tr", [_c("td", {
    staticClass: "sticky-col"
  }, [_vm._v("N° prêt flexcube")]), _vm._v(" "), _vm._l((_vm$cred_pub_tb_24 = _vm.cred_pub_tb_120004) === null || _vm$cred_pub_tb_24 === void 0 ? void 0 : _vm$cred_pub_tb_24.facilites_sollicitees, function (cp, index) {
    var _cp$num_fcub_pret;
    return _c("td", {
      key: "pret-" + index
    }, [_vm._v("\n                                " + _vm._s((_cp$num_fcub_pret = cp === null || cp === void 0 ? void 0 : cp.num_fcub_pret) !== null && _cp$num_fcub_pret !== void 0 ? _cp$num_fcub_pret : "-") + "\n                                ")]);
  })], 2) : _vm._e(), _vm._v(" "), !["CRESCO", "Découvert Privilège"].includes(_vm.dossier_credit.applied_templ_name) ? _c("tr", [_c("td", {
    staticClass: "sticky-col"
  }, [_vm._v("Montant du rachat")]), _vm._v(" "), _vm._l((_vm$cred_pub_tb_25 = _vm.cred_pub_tb_120004) === null || _vm$cred_pub_tb_25 === void 0 ? void 0 : _vm$cred_pub_tb_25.facilites_sollicitees, function (cp, index) {
    var _cp$montant_rachat;
    return _c("td", {
      key: "montant-rachat-" + index
    }, [_vm._v("\n                                " + _vm._s((_cp$montant_rachat = cp === null || cp === void 0 ? void 0 : cp.montant_rachat) !== null && _cp$montant_rachat !== void 0 ? _cp$montant_rachat : "-") + "\n                                ")]);
  })], 2) : _vm._e(), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "sticky-col"
  }, [_vm._v("Commentaire")]), _vm._v(" "), _vm._l((_vm$cred_pub_tb_26 = _vm.cred_pub_tb_120004) === null || _vm$cred_pub_tb_26 === void 0 ? void 0 : _vm$cred_pub_tb_26.facilites_sollicitees, function (cp, index) {
    var _cp$commentaire2;
    return _c("td", {
      key: "commentaire-" + index
    }, [_vm._v("\n                                " + _vm._s((_cp$commentaire2 = cp === null || cp === void 0 ? void 0 : cp.commentaire) !== null && _cp$commentaire2 !== void 0 ? _cp$commentaire2 : "-") + "\n                                ")]);
  })], 2)])])])]), _vm._v(" "), _c("div", {
    staticClass: "mt-4"
  }, [_c("div", {
    staticClass: "p-2 text-center fw-bold",
    staticStyle: {
      border: "1px solid",
      "border-bottom": "0"
    }
  }, [_vm._v("\n                    Proposition de concours / Facilité après analyse\n                ")]), _vm._v(" "), _c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-bordered",
    staticStyle: {
      border: "none"
    }
  }, [_c("tbody", [_c("tr", [_c("td", {
    staticClass: "sticky-col"
  }, [_vm._v("Type de crédit")]), _vm._v(" "), _vm._l((_vm$cred_pub_tb_27 = _vm.cred_pub_tb_14071) === null || _vm$cred_pub_tb_27 === void 0 ? void 0 : _vm$cred_pub_tb_27.propositions_concours, function (cp, index) {
    var _cp$type_facilite2;
    return _c("td", {
      key: "type-" + index
    }, [_vm._v("\n                                " + _vm._s((_cp$type_facilite2 = cp === null || cp === void 0 ? void 0 : cp.type_facilite) !== null && _cp$type_facilite2 !== void 0 ? _cp$type_facilite2 : "-") + "\n                                ")]);
  })], 2), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "sticky-col"
  }, [_vm._v("Code produit")]), _vm._v(" "), _vm._l((_vm$cred_pub_tb_28 = _vm.cred_pub_tb_14071) === null || _vm$cred_pub_tb_28 === void 0 ? void 0 : _vm$cred_pub_tb_28.propositions_concours, function (cp, index) {
    var _cp$infos_fcub$PRODUC3, _cp$infos_fcub3;
    return _c("td", {
      key: "prod-code-" + index
    }, [_vm._v("\n                                " + _vm._s((_cp$infos_fcub$PRODUC3 = cp === null || cp === void 0 || (_cp$infos_fcub3 = cp.infos_fcub) === null || _cp$infos_fcub3 === void 0 ? void 0 : _cp$infos_fcub3.PRODUCT_CODE) !== null && _cp$infos_fcub$PRODUC3 !== void 0 ? _cp$infos_fcub$PRODUC3 : "-") + "\n                                ")]);
  })], 2), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "sticky-col"
  }, [_vm._v("Descr. produit")]), _vm._v(" "), _vm._l((_vm$cred_pub_tb_29 = _vm.cred_pub_tb_14071) === null || _vm$cred_pub_tb_29 === void 0 ? void 0 : _vm$cred_pub_tb_29.propositions_concours, function (cp, index) {
    var _cp$infos_fcub$PRODUC4, _cp$infos_fcub4;
    return _c("td", {
      key: "prod-desc-" + index
    }, [_vm._v("\n                                " + _vm._s((_cp$infos_fcub$PRODUC4 = cp === null || cp === void 0 || (_cp$infos_fcub4 = cp.infos_fcub) === null || _cp$infos_fcub4 === void 0 ? void 0 : _cp$infos_fcub4.PRODUCT_DESC) !== null && _cp$infos_fcub$PRODUC4 !== void 0 ? _cp$infos_fcub$PRODUC4 : "-") + "\n                                ")]);
  })], 2), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "sticky-col"
  }, [_vm._v("Montant demandé (Client)")]), _vm._v(" "), _vm._l((_vm$cred_pub_tb_30 = _vm.cred_pub_tb_14071) === null || _vm$cred_pub_tb_30 === void 0 ? void 0 : _vm$cred_pub_tb_30.propositions_concours, function (cp, index) {
    var _cp$montant_demande2;
    return _c("td", {
      key: "montant-demande-" + index
    }, [_vm._v("\n                                " + _vm._s((_cp$montant_demande2 = cp === null || cp === void 0 ? void 0 : cp.montant_demande) !== null && _cp$montant_demande2 !== void 0 ? _cp$montant_demande2 : "-") + "\n                                ")]);
  })], 2), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "sticky-col"
  }, [_vm._v("Montant crédit (Prop. DCPP)")]), _vm._v(" "), _vm._l((_vm$cred_pub_tb_31 = _vm.cred_pub_tb_14071) === null || _vm$cred_pub_tb_31 === void 0 ? void 0 : _vm$cred_pub_tb_31.propositions_concours, function (cp, index) {
    var _cp$montant_credit2;
    return _c("td", {
      key: "montant-credit-" + index
    }, [_vm._v("\n                                " + _vm._s((_cp$montant_credit2 = cp === null || cp === void 0 ? void 0 : cp.montant_credit) !== null && _cp$montant_credit2 !== void 0 ? _cp$montant_credit2 : "-") + "\n                                ")]);
  })], 2), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "sticky-col"
  }, [_vm._v("Durée (Mois)")]), _vm._v(" "), _vm._l((_vm$cred_pub_tb_32 = _vm.cred_pub_tb_14071) === null || _vm$cred_pub_tb_32 === void 0 ? void 0 : _vm$cred_pub_tb_32.propositions_concours, function (cp, index) {
    var _cp$duree3;
    return _c("td", {
      key: "duree-" + index
    }, [_vm._v("\n                                " + _vm._s((_cp$duree3 = cp === null || cp === void 0 ? void 0 : cp.duree) !== null && _cp$duree3 !== void 0 ? _cp$duree3 : "-") + "\n                                ")]);
  })], 2), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "sticky-col"
  }, [_vm._v("Taux (%)")]), _vm._v(" "), _vm._l((_vm$cred_pub_tb_33 = _vm.cred_pub_tb_14071) === null || _vm$cred_pub_tb_33 === void 0 ? void 0 : _vm$cred_pub_tb_33.propositions_concours, function (cp, index) {
    var _cp$taux3;
    return _c("td", {
      key: "taux-" + index
    }, [_vm._v("\n                                " + _vm._s((_cp$taux3 = cp === null || cp === void 0 ? void 0 : cp.taux) !== null && _cp$taux3 !== void 0 ? _cp$taux3 : "-") + "\n                                ")]);
  })], 2), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "sticky-col"
  }, [_vm._v("Échéance")]), _vm._v(" "), _vm._l((_vm$cred_pub_tb_34 = _vm.cred_pub_tb_14071) === null || _vm$cred_pub_tb_34 === void 0 ? void 0 : _vm$cred_pub_tb_34.propositions_concours, function (cp, index) {
    var _cp$echeancier3;
    return _c("td", {
      key: "echeancier-" + index
    }, [_vm._v("\n                                " + _vm._s((_cp$echeancier3 = cp === null || cp === void 0 ? void 0 : cp.echeancier) !== null && _cp$echeancier3 !== void 0 ? _cp$echeancier3 : "-") + "\n                                ")]);
  })], 2), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "sticky-col"
  }, [_vm._v("Montant de l'échéance")]), _vm._v(" "), _vm._l((_vm$cred_pub_tb_35 = _vm.cred_pub_tb_14071) === null || _vm$cred_pub_tb_35 === void 0 ? void 0 : _vm$cred_pub_tb_35.propositions_concours, function (cp, index) {
    var _cp$montant_echeance2;
    return _c("td", {
      key: "montant-ech-" + index
    }, [_vm._v("\n                                " + _vm._s((_cp$montant_echeance2 = cp === null || cp === void 0 ? void 0 : cp.montant_echeance) !== null && _cp$montant_echeance2 !== void 0 ? _cp$montant_echeance2 : "-") + "\n                                ")]);
  })], 2), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "sticky-col"
  }, [_vm._v("Date 1ère échéance")]), _vm._v(" "), _vm._l((_vm$cred_pub_tb_36 = _vm.cred_pub_tb_14071) === null || _vm$cred_pub_tb_36 === void 0 ? void 0 : _vm$cred_pub_tb_36.propositions_concours, function (cp, index) {
    return _c("td", {
      key: "date-ech-" + index
    }, [_vm._v("\n                                " + _vm._s(cp !== null && cp !== void 0 && cp.date_echeance ? _vm.formatDate(cp.date_echeance) : "-") + "\n                                ")]);
  })], 2), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "sticky-col"
  }, [_vm._v("Rachat")]), _vm._v(" "), _vm._l((_vm$cred_pub_tb_37 = _vm.cred_pub_tb_14071) === null || _vm$cred_pub_tb_37 === void 0 ? void 0 : _vm$cred_pub_tb_37.propositions_concours, function (cp, index) {
    var _cp$is_rachat2;
    return _c("td", {
      key: "rachat-" + index
    }, [_vm._v("\n                                " + _vm._s((_cp$is_rachat2 = cp === null || cp === void 0 ? void 0 : cp.is_rachat) !== null && _cp$is_rachat2 !== void 0 ? _cp$is_rachat2 : "-") + "\n                                ")]);
  })], 2), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "sticky-col"
  }, [_vm._v("Type de rachat")]), _vm._v(" "), _vm._l((_vm$cred_pub_tb_38 = _vm.cred_pub_tb_14071) === null || _vm$cred_pub_tb_38 === void 0 ? void 0 : _vm$cred_pub_tb_38.propositions_concours, function (cp, index) {
    var _cp$type_rachat2;
    return _c("td", {
      key: "type-rachat-" + index
    }, [_vm._v("\n                                " + _vm._s((_cp$type_rachat2 = cp === null || cp === void 0 ? void 0 : cp.type_rachat) !== null && _cp$type_rachat2 !== void 0 ? _cp$type_rachat2 : "-") + "\n                                ")]);
  })], 2), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "sticky-col"
  }, [_vm._v("N° prêt flexcube")]), _vm._v(" "), _vm._l((_vm$cred_pub_tb_39 = _vm.cred_pub_tb_14071) === null || _vm$cred_pub_tb_39 === void 0 ? void 0 : _vm$cred_pub_tb_39.propositions_concours, function (cp, index) {
    var _cp$num_fcub_pret2;
    return _c("td", {
      key: "pret-" + index
    }, [_vm._v("\n                                " + _vm._s((_cp$num_fcub_pret2 = cp === null || cp === void 0 ? void 0 : cp.num_fcub_pret) !== null && _cp$num_fcub_pret2 !== void 0 ? _cp$num_fcub_pret2 : "-") + "\n                                ")]);
  })], 2), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "sticky-col"
  }, [_vm._v("Montant du rachat")]), _vm._v(" "), _vm._l((_vm$cred_pub_tb_40 = _vm.cred_pub_tb_14071) === null || _vm$cred_pub_tb_40 === void 0 ? void 0 : _vm$cred_pub_tb_40.propositions_concours, function (cp, index) {
    var _cp$montant_rachat2;
    return _c("td", {
      key: "montant-rachat-" + index
    }, [_vm._v("\n                                " + _vm._s((_cp$montant_rachat2 = cp === null || cp === void 0 ? void 0 : cp.montant_rachat) !== null && _cp$montant_rachat2 !== void 0 ? _cp$montant_rachat2 : "-") + "\n                                ")]);
  })], 2), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "sticky-col"
  }, [_vm._v("Commentaire")]), _vm._v(" "), _vm._l((_vm$cred_pub_tb_41 = _vm.cred_pub_tb_14071) === null || _vm$cred_pub_tb_41 === void 0 ? void 0 : _vm$cred_pub_tb_41.propositions_concours, function (cp, index) {
    var _cp$commentaire3;
    return _c("td", {
      key: "commentaire-" + index
    }, [_vm._v("\n                                " + _vm._s((_cp$commentaire3 = cp === null || cp === void 0 ? void 0 : cp.commentaire) !== null && _cp$commentaire3 !== void 0 ? _cp$commentaire3 : "-") + "\n                                ")]);
  })], 2)])])])]), _vm._v(" "), !["CRESCO", "Découvert Privilège"].includes(_vm.dossier_credit.applied_templ_name) ? _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12"
  }, [_c("table", {
    staticClass: "table table-bordered"
  }, [_vm._m(0), _vm._v(" "), _c("tbody", {
    staticStyle: {
      "font-size": "0.9rem"
    }
  }, [_c("tr", [_vm.data_tb_10008 ? [_vm._m(1), _vm._v(" "), _c("td", {}, [_vm._v("\n                                            " + _vm._s((_vm$data_tb_ = _vm.data_tb_10008) === null || _vm$data_tb_ === void 0 ? void 0 : _vm$data_tb_.score_global) + "/15 ("), _c("small", {
    staticClass: "color-box",
    style: {
      backgroundColor: _vm.couleur((_vm$data_tb_2 = _vm.data_tb_10008) === null || _vm$data_tb_2 === void 0 ? void 0 : _vm$data_tb_2.score_global)
    }
  }, [_vm._v(_vm._s(_vm.getAppreciation((_vm$data_tb_3 = _vm.data_tb_10008) === null || _vm$data_tb_3 === void 0 ? void 0 : _vm$data_tb_3.score_global)))]), _vm._v(")\n                                    ")])] : _vm._e(), _vm._v(" "), _vm.data_tb_14073 ? [_vm._m(2), _vm._v(" "), _c("td", {}, [_vm._v("\n                                            " + _vm._s((_vm$data_tb_4 = _vm.data_tb_14073) === null || _vm$data_tb_4 === void 0 ? void 0 : _vm$data_tb_4.score_global) + "/15 ("), _c("small", {
    staticClass: "color-box",
    style: {
      backgroundColor: _vm.couleur((_vm$data_tb_5 = _vm.data_tb_14073) === null || _vm$data_tb_5 === void 0 ? void 0 : _vm$data_tb_5.score_global)
    }
  }, [_vm._v(_vm._s(_vm.getAppreciation((_vm$data_tb_6 = _vm.data_tb_14073) === null || _vm$data_tb_6 === void 0 ? void 0 : _vm$data_tb_6.score_global)))]), _vm._v(")\n                                    ")])] : _vm._e()], 2)])])])]) : _vm._e(), _vm._v(" "), ((_vm$dossier_credit = _vm.dossier_credit) === null || _vm$dossier_credit === void 0 ? void 0 : _vm$dossier_credit.applied_templ_name) !== "CRESCO" ? _c("div", {
    staticClass: "mt-4"
  }, [_vm._m(3), _vm._v(" "), _c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-bordered table-hover"
  }, [_vm._m(4), _vm._v(" "), _c("tbody", [_c("tr", [_vm._m(5), _vm._v(" "), _vm._m(6), _vm._v(" "), _c("td", {
    attrs: {
      title: _vm.formuleQD((_vm$cred_pub_tb_42 = _vm.cred_pub_tb_14071) === null || _vm$cred_pub_tb_42 === void 0 ? void 0 : _vm$cred_pub_tb_42.revenu_total_colonne_emprunteur, "A"),
      "data-toggle": "tooltip",
      "data-placement": "top"
    }
  }, [_c("span", [_vm._v(_vm._s(_vm._f("formatNumber")((_vm$cred_pub_tb_43 = _vm.cred_pub_tb_14071) === null || _vm$cred_pub_tb_43 === void 0 ? void 0 : _vm$cred_pub_tb_43.revenu_total_colonne_emprunteur)))])])]), _vm._v(" "), _c("tr", [_vm._m(7), _vm._v(" "), _vm._m(8), _vm._v(" "), _c("td", {
    attrs: {
      title: _vm.formuleQD((_vm$cred_pub_tb_44 = _vm.cred_pub_tb_14071) === null || _vm$cred_pub_tb_44 === void 0 ? void 0 : _vm$cred_pub_tb_44.revenu_total_colonne_montant_pondere, "A"),
      "data-toggle": "tooltip",
      "data-placement": "top"
    }
  }, [_c("span", [_vm._v(_vm._s(_vm._f("formatNumber")((_vm$cred_pub_tb_45 = _vm.cred_pub_tb_14071) === null || _vm$cred_pub_tb_45 === void 0 ? void 0 : _vm$cred_pub_tb_45.revenu_total_colonne_montant_pondere)))])])]), _vm._v(" "), _c("tr", [_vm._m(9), _vm._v(" "), _vm._m(10), _vm._v(" "), _c("td", {
    attrs: {
      title: _vm.formuleQD((_vm$cred_pub_tb_46 = _vm.cred_pub_tb_14071) === null || _vm$cred_pub_tb_46 === void 0 ? void 0 : _vm$cred_pub_tb_46.quotite_cessible, "B"),
      "data-toggle": "tooltip",
      "data-placement": "top"
    }
  }, [_c("span", [_vm._v(_vm._s(_vm._f("formatNumber")((_vm$cred_pub_tb_47 = _vm.cred_pub_tb_14071) === null || _vm$cred_pub_tb_47 === void 0 ? void 0 : _vm$cred_pub_tb_47.quotite_cessible)))])])]), _vm._v(" "), _c("tr", [_vm._m(11), _vm._v(" "), _vm._m(12), _vm._v(" "), _c("td", {
    attrs: {
      title: _vm.formuleQD((_vm$cred_pub_tb_48 = _vm.cred_pub_tb_14071) === null || _vm$cred_pub_tb_48 === void 0 ? void 0 : _vm$cred_pub_tb_48.pourcentage_quotite, "C"),
      "data-toggle": "tooltip",
      "data-placement": "top"
    }
  }, [_c("span", [_vm._v(_vm._s((_vm$cred_pub_tb_49 = _vm.cred_pub_tb_14071) === null || _vm$cred_pub_tb_49 === void 0 ? void 0 : _vm$cred_pub_tb_49.pourcentage_quotite) + "%")])])]), _vm._v(" "), _c("tr", [_vm._m(13), _vm._v(" "), _vm._m(14), _vm._v(" "), _c("td", {
    attrs: {
      title: _vm.formuleQD((_vm$cred_pub_tb_50 = _vm.cred_pub_tb_14071) === null || _vm$cred_pub_tb_50 === void 0 ? void 0 : _vm$cred_pub_tb_50.quotite_cessible_disponible, "D"),
      "data-toggle": "tooltip",
      "data-placement": "top"
    }
  }, [_c("span", {
    "class": _vm.convertInt((_vm$cred_pub_tb_51 = _vm.cred_pub_tb_14071) === null || _vm$cred_pub_tb_51 === void 0 ? void 0 : _vm$cred_pub_tb_51.quotite_cessible_disponible) < 0 ? "text-danger" : ""
  }, [_vm._v(_vm._s(_vm._f("formatNumber")((_vm$cred_pub_tb_52 = _vm.cred_pub_tb_14071) === null || _vm$cred_pub_tb_52 === void 0 ? void 0 : _vm$cred_pub_tb_52.quotite_cessible_disponible)))]), _vm._v(" "), _vm.convertInt((_vm$cred_pub_tb_53 = _vm.cred_pub_tb_14071) === null || _vm$cred_pub_tb_53 === void 0 ? void 0 : _vm$cred_pub_tb_53.quotite_cessible_disponible) < 0 ? _c("div", {
    staticClass: "text-danger fw-bold",
    attrs: {
      id: "quotite_cessible_disponibleFeedback"
    }
  }, [_c("small", [_vm._v("Attention la quotité disponible est\n                                            négatif.")])]) : _vm._e()])]), _vm._v(" "), _c("tr", [_vm._m(15), _vm._v(" "), _c("td", {
    staticClass: "text-center"
  }), _vm._v(" "), _c("td", {
    attrs: {
      title: _vm.formuleQD((_vm$cred_pub_tb_54 = _vm.cred_pub_tb_14071) === null || _vm$cred_pub_tb_54 === void 0 ? void 0 : _vm$cred_pub_tb_54.pourcentage_quotite_general, "E"),
      "data-toggle": "tooltip",
      "data-placement": "top"
    }
  }, [_c("span", [_vm._v(_vm._s((_vm$cred_pub_tb_55 = _vm.cred_pub_tb_14071) === null || _vm$cred_pub_tb_55 === void 0 ? void 0 : _vm$cred_pub_tb_55.pourcentage_quotite_general) + "%")])])]), _vm._v(" "), _c("tr", [_vm._m(16), _vm._v(" "), _vm._m(17), _vm._v(" "), _c("td", {
    attrs: {
      title: _vm.formuleQD((_vm$cred_pub_tb_56 = _vm.cred_pub_tb_14071) === null || _vm$cred_pub_tb_56 === void 0 ? void 0 : _vm$cred_pub_tb_56.quotite_cessible_general, "F"),
      "data-toggle": "tooltip",
      "data-placement": "top"
    }
  }, [_c("span", [_vm._v(_vm._s(_vm._f("formatNumber")((_vm$cred_pub_tb_57 = _vm.cred_pub_tb_14071) === null || _vm$cred_pub_tb_57 === void 0 ? void 0 : _vm$cred_pub_tb_57.quotite_cessible_general)))])])]), _vm._v(" "), _c("tr", [_vm._m(18), _vm._v(" "), _vm._m(19), _vm._v(" "), _c("td", {
    attrs: {
      title: _vm.formuleQD((_vm$cred_pub_tb_58 = _vm.cred_pub_tb_14071) === null || _vm$cred_pub_tb_58 === void 0 ? void 0 : _vm$cred_pub_tb_58.quotite_cessible_disponible_general, "G"),
      "data-toggle": "tooltip",
      "data-placement": "top"
    }
  }, [_c("span", {
    "class": _vm.convertInt((_vm$cred_pub_tb_59 = _vm.cred_pub_tb_14071) === null || _vm$cred_pub_tb_59 === void 0 ? void 0 : _vm$cred_pub_tb_59.quotite_cessible_disponible_general) < 0 ? "text-danger" : ""
  }, [_vm._v(_vm._s(_vm._f("formatNumber")((_vm$cred_pub_tb_60 = _vm.cred_pub_tb_14071) === null || _vm$cred_pub_tb_60 === void 0 ? void 0 : _vm$cred_pub_tb_60.quotite_cessible_disponible_general)))]), _vm._v(" "), _vm.convertInt((_vm$cred_pub_tb_61 = _vm.cred_pub_tb_14071) === null || _vm$cred_pub_tb_61 === void 0 ? void 0 : _vm$cred_pub_tb_61.quotite_cessible_disponible_general) < 0 ? _c("div", {
    staticClass: "text-danger fw-bold",
    attrs: {
      id: "quotite_cessible_disponible_generalFeedback"
    }
  }, [_c("small", [_vm._v("Attention la quotité disponible est\n                                            négatif.")])]) : _vm._e()])])])])])]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "mt-4"
  }, [_vm._m(20), _vm._v(" "), _c("div", {
    staticClass: "card-body border border-dark px-2 py-4"
  }, [_c("div", {
    staticClass: "table-responsive p-2"
  }, [_c("table", {
    staticClass: "table table-bordered border-dark"
  }, [_c("tbody", _vm._l(_vm.tauxEndettement, function (item, key) {
    return _c("tr", {
      key: key
    }, [_c("td", {
      "class": {
        "fw-bold": item.bold
      }
    }, [_vm._v("\n                                        " + _vm._s(item.label) + " "), _c("span", {
      staticClass: "fw-bold"
    }, [_vm._v(_vm._s(item.formule))])]), _vm._v(" "), _c("td", {
      "class": {
        "fw-bold": item.bold
      }
    }, [_vm._v("\n                                        " + _vm._s(_vm._f("formatNumber")(item.value)) + " "), item.percentage ? _c("span", [_vm._v("%")]) : _vm._e()])]);
  }), 0)])]), _vm._v(" "), ((_vm$authenticatedUser = _vm.authenticatedUser) === null || _vm$authenticatedUser === void 0 ? void 0 : _vm$authenticatedUser.filiale) === "AFGB ML" ? _c("div", {
    staticClass: "table-responsive p-2 mt-2 w-75"
  }, [_c("table", {
    staticClass: "table table-bordered border-dark",
    staticStyle: {
      "border-top": "8px solid",
      "border-bottom": "8px solid",
      "font-size": "13px"
    }
  }, [_c("tbody", _vm._l(_vm.rav, function (item, key) {
    return _c("tr", {
      key: key
    }, [_c("td", {
      staticClass: "text-uppercase",
      "class": {
        "fw-bold": item.bold
      }
    }, [_vm._v("\n                                        " + _vm._s(item.label) + " "), _c("span", {
      staticClass: "fw-bold"
    }, [_vm._v(_vm._s(item.formule))])]), _vm._v(" "), _c("td", {
      "class": {
        "fw-bold": item.bold
      }
    }, [typeof item.value === "boolean" ? _c("span", [_vm._v("\n                                            " + _vm._s(item.value ? "Oui" : "Non") + "\n                                        ")]) : _c("span", [_vm._v("\n                                            " + _vm._s(_vm._f("formatNumber")(item.value)) + " "), item.percentage ? _c("span", [_vm._v("%")]) : _vm._e()])])]);
  }), 0)])]) : _vm._e()]), _vm._v(" "), ((_vm$authenticatedUser2 = _vm.authenticatedUser) === null || _vm$authenticatedUser2 === void 0 ? void 0 : _vm$authenticatedUser2.filiale) === "AFGB ML" ? _c("div", {
    staticClass: "mt-3 p-2"
  }, [_vm._m(21)]) : _vm._e()]), _vm._v(" "), _c("table", {
    staticClass: "table table-bordered border-dark mt-4"
  }, [_vm._m(22), _vm._v(" "), _c("tbody", [_c("tr", [_c("td", [_c("span", {
    domProps: {
      innerHTML: _vm._s((_vm$cred_pub_tb_62 = _vm.cred_pub_tb_14071) === null || _vm$cred_pub_tb_62 === void 0 ? void 0 : _vm$cred_pub_tb_62.observations)
    }
  })])])])])]) : _vm._e()])]);
};
var staticRenderFns = [function () {
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
  return _c("div", {
    staticClass: "text-center mb-2"
  }, [_c("span", {
    staticStyle: {
      "text-decoration": "underline",
      "font-size": "18px"
    }
  }, [_c("b", [_vm._v("Calcul de la quotité")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", {
    staticClass: "table-light"
  }, [_c("tr", [_c("th", {
    staticClass: "text-center",
    attrs: {
      scope: "col"
    }
  }, [_vm._v("\n                                    Description\n                                ")]), _vm._v(" "), _c("th", {
    staticClass: "text-center",
    attrs: {
      scope: "col"
    }
  }, [_vm._v("Formule")]), _vm._v(" "), _c("th", {
    staticClass: "text-center",
    attrs: {
      scope: "col"
    }
  }, [_vm._v("Valeur")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", [_c("label", {
    attrs: {
      "for": "revenu_total_colonne_montant_pondere"
    }
  }, [_vm._v("\n                                        Revenu Global "), _c("b", [_vm._v("(A)")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {
    staticClass: "text-center"
  }, [_c("span", {
    staticStyle: {
      "font-size": "14px"
    }
  }, [_vm._v("\n                                        ∑"), _c("sub", [_vm._v("RC")]), _vm._v(" = SN"), _c("sub", [_vm._v("(Salaire Net)")]), _vm._v("\n                                        + PR"), _c("sub", [_vm._v("(Prime)")]), _vm._v(" + AR"), _c("sub", [_vm._v("(Autre revenu)")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", [_c("label", {
    attrs: {
      "for": "revenu_total_colonne_montant_pondere"
    }
  }, [_vm._v("\n                                        Revenu considéré "), _c("b", [_vm._v("(H)")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {
    staticClass: "text-center"
  }, [_c("span", {
    staticStyle: {
      "font-size": "11px"
    }
  }, [_vm._v("\n                                                ∑"), _c("sub", [_vm._v("RP")]), _vm._v(" = %SN  "), _c("sub", [_vm._v("(Salaire Net)")]), _vm._v(" + %PR "), _c("sub", [_vm._v("(Prime)")]), _vm._v(" + %AR "), _c("sub", [_vm._v("(Autre révenu)")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", [_c("label", {
    attrs: {
      "for": "quotite_cessible"
    }
  }, [_vm._v("Montant quotité cessible\n                                        "), _c("b", [_vm._v("(B)")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {
    staticClass: "text-center"
  }, [_c("span", {
    staticStyle: {
      "font-size": "14px"
    }
  }, [_vm._v("\n                                        B = ∑"), _c("sub", [_vm._v("%SN + %PR + %AR")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", [_c("label", {
    attrs: {
      "for": "pourcentage_quotite"
    }
  }, [_vm._v("% Quotité "), _c("b", [_vm._v("(C)")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {
    staticClass: "text-center"
  }, [_c("span", {
    staticStyle: {
      "font-size": "14px"
    }
  }, [_vm._v("\n                                        C = B"), _c("sub", [_vm._v("( Mt Quotité Céssible)")]), _vm._v("\n                                        / H"), _c("sub", [_vm._v("(Revenu considéré)")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", [_c("label", {
    attrs: {
      "for": "quotite_cessible_disponible"
    }
  }, [_vm._v("Montant quotité disponible\n                                        "), _c("b", [_vm._v("(D)")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {
    staticClass: "text-center"
  }, [_c("span", {
    staticStyle: {
      "font-size": "14px"
    }
  }, [_vm._v("\n                                        D = B - ∑"), _c("sub", [_vm._v("Ms"), _c("sub", [_vm._v("(Mensualités des facilités\n                                                sollicitées)")])])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", [_c("label", {
    attrs: {
      "for": "pourcentage_quotite_general"
    }
  }, [_vm._v("% Quotité légal "), _c("b", [_vm._v("(E)")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", [_c("label", {
    attrs: {
      "for": "quotite_cessible_general"
    }
  }, [_vm._v("Montant quotité cessible légal\n                                        "), _c("b", [_vm._v("(F)")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {
    staticClass: "text-center"
  }, [_c("span", {
    staticStyle: {
      "font-size": "14px"
    }
  }, [_vm._v("\n                                        F = ∑"), _c("sub", [_vm._v("%SN + %PR + %AR")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", [_c("label", {
    attrs: {
      "for": "quotite_cessible_disponible_general"
    }
  }, [_vm._v("Montant quotité disponible légal\n                                        "), _c("b", [_vm._v("(G)")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {
    staticClass: "text-center"
  }, [_c("span", {
    staticStyle: {
      "font-size": "14px"
    }
  }, [_vm._v("\n                                        G = F - ∑"), _c("sub", [_vm._v("Ms"), _c("sub", [_vm._v("(Mensualités des facilités\n                                                sollicitées)")])])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "text-center mb-2"
  }, [_c("span", {
    staticStyle: {
      "text-decoration": "underline",
      "font-size": "18px"
    }
  }, [_vm._v("Taux d'endettement")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("i", [_c("span", [_vm._v("Marié : ")]), _vm._v(" "), _c("span", [_vm._v("60000 ")]), _vm._v(" "), _c("span", [_vm._v(" / ")]), _vm._v(" "), _c("span", [_vm._v("Célibataire : ")]), _vm._v(" "), _c("span", [_vm._v("40000 ")]), _vm._v(" "), _c("span", [_vm._v(" / ")]), _vm._v(" "), _c("span", [_vm._v("Par enfant : ")]), _vm._v(" "), _c("span", [_vm._v("10000 ")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", {
    staticClass: "bg-ed-primary"
  }, [_c("tr", [_c("th", {
    staticClass: "col-12 text-center py-2 m-0"
  }, [_vm._v("Commentaire")])])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/contre_analyse_filiale/CA1.vue?vue&type=style&index=0&id=548717fc&scoped=true&lang=css":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/contre_analyse_filiale/CA1.vue?vue&type=style&index=0&id=548717fc&scoped=true&lang=css ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\nfieldset[data-v-548717fc] \r\n  {\r\n      border: 1px solid #ddd !important;\r\n      position: relative;\r\n      padding-left:10px!important; \r\n      width: 100%;\r\n      background-color:#f5f5f5;\r\n      margin-top: 15px;\n}\nlegend[data-v-548717fc]\r\n  {\r\n      font-weight:bold;\r\n      padding: 4px;\r\n      width: -moz-max-content;\r\n      width: max-content;\r\n      padding: 0 15px;\r\n      font-size: 16px;\r\n      float: none;\r\n      background-color: #ffffff;\r\n      border: 1px solid #ddd;\r\n      border-radius: 4px;\n}\n.cell[data-v-548717fc] {\r\n      display: flex;\r\n      gap: 1px;\r\n      flex-direction:  column;\n}\n.bold[data-v-548717fc] {\r\n      font-weight: bold;\n}\n.memo[data-v-548717fc] {\r\n  margin-top: 10px;\r\n  padding: 10px;\r\n  border: 2px solid #fff;\r\n  font-weight: 550;\r\n  font-size: 16px;\r\n  text-align: left;\r\n  text-transform: uppercase;\r\n  background-color: #34495e;\r\n  color: #fff;\n}\r\n\r\n/* th {\r\n  background: #f4f3f3 !important;\r\n} */\n.bg-grey[data-v-548717fc] {\r\n  background-color: #f4f3f3;\r\n  width: 32%;\n}\ninput[type=checkbox][data-v-548717fc] {\r\n  /* Double-sized Checkboxes */\r\n  /* IE */\r\n  /* FF */\r\n  /* Safari and Chrome */\r\n  /* Opera */\r\n  transform: scale(1.4);\r\n  padding: 10px;\n}\n.head-memorandum-title[data-v-548717fc] {\r\n \r\n font-weight: bold;\r\n text-transform: uppercase;\r\n text-align: center;border: 1px solid;\r\n padding: 4px;\n}\n.checkboxtext[data-v-548717fc] {\r\n  /* Checkbox text */\r\n  font-size: 110%;\r\n  display: inline;\n}\n.nota-bene[data-v-548717fc] {\r\n  font-size: 12px !important;\n}\n.table[data-v-548717fc]{\r\n  border: unset;\n}\nol[data-v-548717fc],li[data-v-548717fc]{\r\n  list-style-type:revert-layer;\n}\ninput[type=\"checkbox\"][data-v-548717fc]:disabled:checked {\r\n-webkit-appearance: none;\r\n   -moz-appearance: none;\r\n        appearance: none; /* Supprime le style natif */\r\n/* width: 10px;*/\r\nmin-height: unset !important; \r\n\r\npadding: 7px;\r\nbackground-color: #007bff; /* Bleu */\r\n/* border: 2px solid #007bff; Bordure bleue */\r\nborder-radius: 2px;\r\nposition: relative;\r\ncursor: not-allowed;\r\nmargin-top: 5px;\n}\ninput[type=\"checkbox\"][data-v-548717fc]:disabled:checked::after {\r\ncontent: '✔';\r\ncolor: white;\r\nfont-size: 8px;\r\nfont-weight: bold;\r\nposition: absolute;\r\ntop: 50%;\r\nleft: 50%;\r\ntransform: translate(-50%, -50%);\n}\n.th[data-v-548717fc]{\r\ntext-wrap:nowrap;\n}\n.big-text[data-v-548717fc] {\r\nfont-size: 16px;\r\ntext-transform: uppercase; \r\ncolor: #34495e;\n}\n.sticky-col[data-v-548717fc] {\r\n    position: sticky;\r\n    left: 0;\r\n    background: #f8f9fa;\r\n    /* z-index: 15; */\r\n    min-width: 200px;\r\n    font-weight: bold;\n}\n.table-bordered .sticky-col[data-v-548717fc] {\r\n    border-right: 2px solid #dee2e6;\n}\nthead th[data-v-548717fc] {\r\n    position: sticky;\r\n    top: 0;\r\n    background: #f8f9fa;\r\n    /* z-index: 10; */\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/contre_analyse_filiale/CA1.vue?vue&type=style&index=0&id=548717fc&scoped=true&lang=css":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/contre_analyse_filiale/CA1.vue?vue&type=style&index=0&id=548717fc&scoped=true&lang=css ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CA1_vue_vue_type_style_index_0_id_548717fc_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CA1.vue?vue&type=style&index=0&id=548717fc&scoped=true&lang=css */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/contre_analyse_filiale/CA1.vue?vue&type=style&index=0&id=548717fc&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CA1_vue_vue_type_style_index_0_id_548717fc_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CA1_vue_vue_type_style_index_0_id_548717fc_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/offview/bank/afg/contre_analyse_filiale/CA1.vue":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/offview/bank/afg/contre_analyse_filiale/CA1.vue ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CA1_vue_vue_type_template_id_548717fc_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CA1.vue?vue&type=template&id=548717fc&scoped=true */ "./resources/js/components/offview/bank/afg/contre_analyse_filiale/CA1.vue?vue&type=template&id=548717fc&scoped=true");
/* harmony import */ var _CA1_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CA1.vue?vue&type=script&lang=js */ "./resources/js/components/offview/bank/afg/contre_analyse_filiale/CA1.vue?vue&type=script&lang=js");
/* harmony import */ var _CA1_vue_vue_type_style_index_0_id_548717fc_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CA1.vue?vue&type=style&index=0&id=548717fc&scoped=true&lang=css */ "./resources/js/components/offview/bank/afg/contre_analyse_filiale/CA1.vue?vue&type=style&index=0&id=548717fc&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _CA1_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _CA1_vue_vue_type_template_id_548717fc_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _CA1_vue_vue_type_template_id_548717fc_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "548717fc",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/offview/bank/afg/contre_analyse_filiale/CA1.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/offview/bank/afg/contre_analyse_filiale/CA1.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/components/offview/bank/afg/contre_analyse_filiale/CA1.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CA1_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CA1.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/contre_analyse_filiale/CA1.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CA1_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/offview/bank/afg/contre_analyse_filiale/CA1.vue?vue&type=style&index=0&id=548717fc&scoped=true&lang=css":
/*!*****************************************************************************************************************************************!*\
  !*** ./resources/js/components/offview/bank/afg/contre_analyse_filiale/CA1.vue?vue&type=style&index=0&id=548717fc&scoped=true&lang=css ***!
  \*****************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CA1_vue_vue_type_style_index_0_id_548717fc_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CA1.vue?vue&type=style&index=0&id=548717fc&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/contre_analyse_filiale/CA1.vue?vue&type=style&index=0&id=548717fc&scoped=true&lang=css");


/***/ }),

/***/ "./resources/js/components/offview/bank/afg/contre_analyse_filiale/CA1.vue?vue&type=template&id=548717fc&scoped=true":
/*!***************************************************************************************************************************!*\
  !*** ./resources/js/components/offview/bank/afg/contre_analyse_filiale/CA1.vue?vue&type=template&id=548717fc&scoped=true ***!
  \***************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CA1_vue_vue_type_template_id_548717fc_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CA1_vue_vue_type_template_id_548717fc_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CA1_vue_vue_type_template_id_548717fc_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CA1.vue?vue&type=template&id=548717fc&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/contre_analyse_filiale/CA1.vue?vue&type=template&id=548717fc&scoped=true");


/***/ })

}]);