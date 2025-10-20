"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_offview_bank_nsia_contre_analyse_filiale_notifcation_accord_credit_NO-f0b1c0"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/contre_analyse_filiale/notifcation_accord_credit/NOAC2.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/contre_analyse_filiale/notifcation_accord_credit/NOAC2.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_connects_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../services/connects.service */ "./resources/js/services/connects.service.js");
/* harmony import */ var _services_nsia_f8_data_extractor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../services/nsia/f8-data-extractor */ "./resources/js/services/nsia/f8-data-extractor.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    dossier_credit: Object
  },
  data: function data() {
    var _this$dossier_credit,
      _this$dossier_credit2,
      _this$dossier_credit3,
      _this$dossier_credit4,
      _this = this;
    return {
      inventairesTrier: [],
      connectsHost: _services_connects_service__WEBPACK_IMPORTED_MODULE_0__["default"].loadablehost(),
      isLoadingFile: false,
      le_hypotheques: false,
      le_gages: false,
      le_csd: false,
      le_ch_pa: false,
      files: [],
      le_pfe: false,
      le_cp: false,
      nl_hypotheques: false,
      nl_gages: false,
      nl_csd: false,
      nl_ch_pa: false,
      nl_pfe: false,
      nl_cp: false,
      data_tb200502Extractor: _services_nsia_f8_data_extractor__WEBPACK_IMPORTED_MODULE_1__["default"],
      data_tb200502: null,
      credtb200501: (_this$dossier_credit = this.dossier_credit) === null || _this$dossier_credit === void 0 ? void 0 : _this$dossier_credit.cred_pub_tb_200501,
      cred0: null,
      cred200503: (_this$dossier_credit2 = this.dossier_credit) === null || _this$dossier_credit2 === void 0 ? void 0 : _this$dossier_credit2.cred_pub_tb_200503,
      credtb22005: (_this$dossier_credit3 = this.dossier_credit) === null || _this$dossier_credit3 === void 0 ? void 0 : _this$dossier_credit3.cred_pub_tb_22005,
      cred1: null,
      decision_logs: (_this$dossier_credit4 = this.dossier_credit) === null || _this$dossier_credit4 === void 0 ? void 0 : _this$dossier_credit4.decision_logs.filter(function (item, index) {
        var _this$dossier_credit5;
        return ((_this$dossier_credit5 = _this.dossier_credit) === null || _this$dossier_credit5 === void 0 ? void 0 : _this$dossier_credit5.decision_logs.length) - 1 == index;
      }),
      cotation: "",
      initiateur: "",
      signature_dg: "",
      niveau_pouvoir: "CCDG",
      categorisation_es: "",
      dernier_signataire_dc: "",
      cotation_es: "",
      cotation_risque: "",
      note_risque_es: [{
        note: "A",
        risque: "Risques elevés"
      }, {
        note: "B-",
        risque: "Risques moyen"
      }, {
        note: "B+",
        risque: "Risques moyen (Nécessitant vigilance)"
      }, {
        note: "C",
        risque: "Risques faible"
      }]
    };
  },
  created: function created() {},
  mounted: function mounted() {
    var _this$dossier_credit6,
      _this$dossier_credit7,
      _this$dossier_credit8,
      _this$dossier_credit9,
      _this$dossier_credit0,
      _this2 = this,
      _this$cred,
      _this$cred2;
    var applied_templ_name = (_this$dossier_credit6 = this.dossier_credit) === null || _this$dossier_credit6 === void 0 ? void 0 : _this$dossier_credit6.applied_templ_name;
    var tbArrays = this.determineCredPubTables(applied_templ_name);
    this.cred0 = (_this$dossier_credit7 = this.dossier_credit) === null || _this$dossier_credit7 === void 0 ? void 0 : _this$dossier_credit7[tbArrays[0]];
    this.cred1 = (_this$dossier_credit8 = this.dossier_credit) === null || _this$dossier_credit8 === void 0 ? void 0 : _this$dossier_credit8[tbArrays[1]];
    this.data_tb200502 = this.data_tb200502Extractor.getData(this.dossier_credit, "cred_pub_tb_200502");
    this.initiateur = (_this$dossier_credit9 = this.dossier_credit) === null || _this$dossier_credit9 === void 0 ? void 0 : _this$dossier_credit9.monteur_doss;
    (_this$dossier_credit0 = this.dossier_credit) === null || _this$dossier_credit0 === void 0 || _this$dossier_credit0.decision_logs.forEach(function (el, ind) {
      if ((el === null || el === void 0 ? void 0 : el.giver_role_sigle) == "DG") {
        _this2.signature_dg = el === null || el === void 0 ? void 0 : el.giver_name;
      }
      if (['CS_ACEI', 'CD_DC', 'DC'].includes(el === null || el === void 0 ? void 0 : el.giver_role_sigle)) {
        _this2.dernier_signataire_dc = (el === null || el === void 0 ? void 0 : el.giver_name) + ' (' + (el === null || el === void 0 ? void 0 : el.giver_role) + ')';
      }
      if (['CA', 'CCCA'].includes(el === null || el === void 0 ? void 0 : el.stage_label)) {
        _this2.niveau_pouvoir = el === null || el === void 0 ? void 0 : el.stage_label;
      }
    });
    this.cotation = ((_this$cred = this.cred0) === null || _this$cred === void 0 ? void 0 : _this$cred.note_edane) + " (" + ((_this$cred2 = this.cred0) === null || _this$cred2 === void 0 ? void 0 : _this$cred2.classe_risque) + ")";
    var note_risque = this.note_risque_es.filter(function (item, index) {
      var _this2$dossier_credit;
      return item.note === ((_this2$dossier_credit = _this2.dossier_credit) === null || _this2$dossier_credit === void 0 || (_this2$dossier_credit = _this2$dossier_credit.cred_pub_tb_5001) === null || _this2$dossier_credit === void 0 ? void 0 : _this2$dossier_credit.risque_note);
    });
    if (note_risque[0] != undefined) {
      this.cotation_es = note_risque[0]['note'];
      this.cotation_risque = note_risque[0]['risque'];
      this.categorisation_es = note_risque[0]['note'] + ' (' + note_risque[0]['risque'] + ')';
    }
  },
  computed: {
    allSuretes: function allSuretes() {
      var _this$data_tb, _this$data_tb2;
      return (_this$data_tb = this.data_tb200502) === null || _this$data_tb === void 0 || (_this$data_tb = _this$data_tb.suretes_diverses) === null || _this$data_tb === void 0 ? void 0 : _this$data_tb.concat((_this$data_tb2 = this.data_tb200502) === null || _this$data_tb2 === void 0 ? void 0 : _this$data_tb2.autres_suretes_diverses);
    }
  },
  methods: {
    formatDate: function formatDate(date) {
      if (["", null, undefined].includes(date)) return "";
      var options = {
        year: "numeric",
        month: "numeric",
        day: "numeric"
      };
      return new Date(date).toLocaleDateString("fr", options);
    },
    convertNumber: function convertNumber(valeur) {
      return Number(String(valeur).replace(/\s+/g, ""));
    },
    arrondiA2Chiffre: function arrondiA2Chiffre(x) {
      var value = Math.round(x * 100) / 100;
      return value;
    },
    getStatusLabel: function getStatusLabel(line) {
      var status = line === null || line === void 0 ? void 0 : line.statut;
      if (status == "Renouvellement") {
        if (line.type === "RI") return "Renouvellement à l'identique";
        if (line.type === "RH") return "Renouvellement à la hausse";
        if (line.type === "RB") return "Renouvellement à la baisse";
      }
      return status;
    },
    formatAmount: function formatAmount(x) {
      return x === null || x === void 0 ? void 0 : x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    },
    formatMonth: function formatMonth(value) {
      return value === null || value === void 0 ? void 0 : value.toString().split("-").reverse().join("/");
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/contre_analyse_filiale/notifcation_accord_credit/NOAC2.vue?vue&type=template&id=0935b405&scoped=true":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/contre_analyse_filiale/notifcation_accord_credit/NOAC2.vue?vue&type=template&id=0935b405&scoped=true ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm$data_tb, _vm$data_tb3, _vm$data_tb4, _vm$data_tb5, _vm$data_tb6, _vm$cred, _vm$cred2, _vm$credtb, _vm$credtb2, _vm$credtb3, _vm$credtb4, _vm$credtb5;
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {}, [_c("div", {
    staticClass: "row justify-content-center"
  }, [_vm.dossier_credit.tbs_in_use.includes("tb200502") ? _c("div", {
    staticClass: "row",
    staticStyle: {
      "padding-top": ""
    }
  }, [_c("div", {
    staticClass: "head-memorandum-title mb-4",
    staticStyle: {
      "text-align": "center"
    }
  }, [_vm._v("\n                SYNTHESE DES LIGNES\n            ")]), _vm._v(" "), _c("br"), _vm._v(" "), _c("div", {
    staticClass: "table-responsive p-2 m-0 mt-2"
  }, [_c("table", {
    staticClass: "table table-bordered mb-2 mt-2"
  }, [_c("tbody", [_vm._m(0), _vm._v(" "), _vm._l((_vm$data_tb = _vm.data_tb200502) === null || _vm$data_tb === void 0 ? void 0 : _vm$data_tb.newLines, function (line, index) {
    var _vm$data_tb2;
    return _c("tr", {
      key: "i" + index
    }, [_c("td", [_vm._v(_vm._s(line.ligne))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(line.montant))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(line.proposition))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(line.taux))]), _vm._v(" "), line !== null && line !== void 0 && line.echeance ? _c("td", [_vm._v("\n                                " + _vm._s(_vm.formatDate(line === null || line === void 0 ? void 0 : line.echeance)) + "\n                            ")]) : _c("td"), _vm._v(" "), _c("td", _vm._l(line === null || line === void 0 ? void 0 : line.garanties, function (surete, index) {
      return _c("div", {
        key: "su" + index
      }, _vm._l(surete, function (sure, index) {
        var _sure$state_, _sure$name_garantie;
        return _c("ul", {
          key: index + sure.name_garantie
        }, [(sure === null || sure === void 0 || (_sure$state_ = sure.state_) === null || _sure$state_ === void 0 ? void 0 : _sure$state_.has_speOr_spe) == "specifique" && (sure === null || sure === void 0 || (_sure$name_garantie = sure.name_garantie) === null || _sure$name_garantie === void 0 ? void 0 : _sure$name_garantie.trim()) != "" ? _c("li", [_vm._v("\n                                            - " + _vm._s(sure === null || sure === void 0 ? void 0 : sure.name_garantie) + "\n                                        ")]) : _vm._e()]);
      }), 0);
    }), 0), _vm._v(" "), _c("td", [_c("div", _vm._l((_vm$data_tb2 = _vm.data_tb200502) === null || _vm$data_tb2 === void 0 ? void 0 : _vm$data_tb2.newLinesgarantiesGenerales, function (surete, index) {
      var _surete$name_garantie;
      return _c("ul", {
        key: index
      }, [surete.parentId.includes(line.id) && (surete === null || surete === void 0 || (_surete$name_garantie = surete.name_garantie) === null || _surete$name_garantie === void 0 ? void 0 : _surete$name_garantie.trim()) != "" ? _c("li", [_vm._v("\n                                            - " + _vm._s(surete === null || surete === void 0 ? void 0 : surete.name_garantie) + "\n                                        ")]) : _vm._e()]);
    }), 0)])]);
  }), _vm._v(" "), _c("tr", [_c("th", {
    attrs: {
      colspan: "3"
    }
  }, [_vm._v("S/Total concours sollicités")]), _vm._v(" "), _c("th", [_vm._v("\n                                " + _vm._s(_vm.formatAmount(((_vm$data_tb3 = _vm.data_tb200502) === null || _vm$data_tb3 === void 0 || (_vm$data_tb3 = _vm$data_tb3.totaux) === null || _vm$data_tb3 === void 0 ? void 0 : _vm$data_tb3.st_caisse_nouvelles_lignes_montant) + ((_vm$data_tb4 = _vm.data_tb200502) === null || _vm$data_tb4 === void 0 || (_vm$data_tb4 = _vm$data_tb4.totaux) === null || _vm$data_tb4 === void 0 ? void 0 : _vm$data_tb4.st_signature_nouvelles_lignes_montant))) + "\n                            ")]), _vm._v(" "), _c("th", [_vm._v("\n                                " + _vm._s(_vm.formatAmount(((_vm$data_tb5 = _vm.data_tb200502) === null || _vm$data_tb5 === void 0 || (_vm$data_tb5 = _vm$data_tb5.totaux) === null || _vm$data_tb5 === void 0 ? void 0 : _vm$data_tb5.st_caisse_nouvelles_lignes_proposition) + ((_vm$data_tb6 = _vm.data_tb200502) === null || _vm$data_tb6 === void 0 || (_vm$data_tb6 = _vm$data_tb6.totaux) === null || _vm$data_tb6 === void 0 ? void 0 : _vm$data_tb6.st_signature_nouvelles_lignes_proposition))) + "\n                            ")]), _vm._v(" "), _c("th", {
    attrs: {
      colspan: "6"
    }
  })])], 2)])]), _vm._v(" "), _c("br"), _vm._v(" "), _vm.cred200503 ? _c("div", {
    staticClass: "head-memorandum-title mt-2",
    staticStyle: {
      "text-align": "center"
    }
  }, [_vm._v("\n                Résumé de l’analyse Environnementale et Sociale (ES) / Plan\n                d’Action ES\n            ")]) : _vm._e(), _vm._v(" "), _vm.cred200503 ? _c("div", {
    staticClass: "table-responsive p-2 m-0 mt-2"
  }, [_c("table", {
    staticClass: "table mb-5 table-bordered"
  }, [_c("thead", [_c("tr", [_c("th", {
    staticStyle: {
      position: "sticky",
      left: "0"
    },
    attrs: {
      colspan: "6"
    }
  }, [_c("div", {
    staticClass: "d-flex flex-column-reverse"
  }, [_c("div", {
    staticClass: "d-flex m-0"
  }, [_c("div", {
    staticClass: "fw-bold p-1"
  }, [_vm._v("\n                                            Secteur d’activité :\n                                        ")]), _vm._v(" "), _c("div", {
    staticClass: "p-1"
  }, [_vm._v("\n                                            " + _vm._s((_vm$cred = _vm.cred0) === null || _vm$cred === void 0 ? void 0 : _vm$cred.secteur_activite) + "\n                                        ")])]), _vm._v(" "), _c("div", {
    staticClass: "d-flex m-0"
  }, [_c("div", {
    staticClass: "fw-bold p-1"
  }, [_vm._v("\n                                            Destination du financement :\n                                        ")]), _vm._v(" "), _c("div", {
    staticClass: "p-1",
    domProps: {
      innerHTML: _vm._s((_vm$cred2 = _vm.cred1) === null || _vm$cred2 === void 0 ? void 0 : _vm$cred2.objet_demande)
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "d-flex m-0"
  }, [_c("div", {
    staticClass: "fw-bold p-1"
  }, [_vm._v("\n                                            Cotation E&S / Niveau de risque\n                                            :\n                                        ")]), _vm._v(" "), _c("div", {
    staticClass: "p-1"
  }, [_vm._v(_vm._s(_vm.cotation_es) + " / " + _vm._s(_vm.cotation_risque))])])])])]), _vm._v(" "), _vm._m(1)]), _vm._v(" "), _c("tbody", [_vm._l((_vm$credtb = _vm.credtb22005) === null || _vm$credtb === void 0 ? void 0 : _vm$credtb.norme_performances, function (norme, index) {
    return [_c("tr", {
      key: norme.id
    }, [_c("th", {
      staticClass: "fw-bold text-center th"
    }, [_vm._v("\n                                    " + _vm._s(index + 1) + "\n                                ")]), _vm._v(" "), _c("td", {
      staticClass: "th",
      attrs: {
        colspan: "5"
      },
      domProps: {
        innerHTML: _vm._s(norme.libelle)
      }
    })]), _vm._v(" "), _vm._l(norme === null || norme === void 0 ? void 0 : norme.contents, function (content, ind) {
      return _c("tr", {
        key: "content" + index + "_" + ind
      }, [_c("th", {
        staticClass: "fw-bold text-center"
      }, [_vm._v("\n                                    " + _vm._s(index + 1) + "." + _vm._s(ind + 1) + "\n                                ")]), _vm._v(" "), _c("td", {
        domProps: {
          innerHTML: _vm._s(content.exigence)
        }
      }), _vm._v(" "), _c("td", {
        domProps: {
          innerHTML: _vm._s(content.risque)
        }
      }), _vm._v(" "), _c("td", {
        domProps: {
          innerHTML: _vm._s(content.action_corrective)
        }
      }), _vm._v(" "), _c("td", {
        domProps: {
          innerHTML: _vm._s(content.delai)
        }
      }), _vm._v(" "), _c("td", {
        domProps: {
          innerHTML: _vm._s(content.livrable)
        }
      })]);
    })];
  })], 2)])]) : _vm._e(), _vm._v(" "), _c("table", {
    staticClass: "table table-bordered p-2 m-0 mt-2"
  }, [_c("tbody", [_c("tr", [_c("th", {
    staticClass: "col-3"
  }, [_vm._v("Cotation")]), _vm._v(" "), _c("td", {
    staticClass: "col-3"
  }, [_vm._v(_vm._s(_vm.cotation))]), _vm._v(" "), _c("th", {
    staticClass: "col-3"
  }, [_vm._v("Initiateur")]), _vm._v(" "), _c("td", {
    staticClass: "col-3"
  }, [_vm._v(_vm._s(_vm.initiateur))])]), _vm._v(" "), _c("tr", [_c("th", {
    staticClass: "col-3"
  }, [_vm._v("Catégorisation ES")]), _vm._v(" "), _c("td", {
    staticClass: "col-3"
  }, [_vm._v(_vm._s(_vm.categorisation_es))]), _vm._v(" "), _c("th", {
    staticClass: "col-3"
  }, [_vm._v("Niveau de pouvoir")]), _vm._v(" "), _c("td", {
    staticClass: "col-3"
  }, [_vm._v(_vm._s(_vm.niveau_pouvoir))])]), _vm._v(" "), _c("tr", [_c("th", {
    staticClass: "col-3"
  }, [_vm._v("Ancienne échéance")]), _vm._v(" "), _c("td", {
    staticClass: "col-3"
  }, [_vm._v(_vm._s(((_vm$credtb2 = _vm.credtb200501) === null || _vm$credtb2 === void 0 ? void 0 : _vm$credtb2.ancienne_echeance) != "" ? _vm.formatDate((_vm$credtb3 = _vm.credtb200501) === null || _vm$credtb3 === void 0 ? void 0 : _vm$credtb3.ancienne_echeance) : ""))]), _vm._v(" "), _c("th", {
    staticClass: "col-3"
  }, [_vm._v("Dernier signataire DC")]), _vm._v(" "), _c("td", {
    staticClass: "col-3"
  }, [_vm._v(_vm._s(_vm.dernier_signataire_dc))])]), _vm._v(" "), _c("tr", [_c("th", {
    staticClass: "col-3"
  }, [_vm._v("Nouvelle échéance")]), _vm._v(" "), _c("td", {
    staticClass: "col-3"
  }, [_vm._v(_vm._s(((_vm$credtb4 = _vm.credtb200501) === null || _vm$credtb4 === void 0 ? void 0 : _vm$credtb4.nouvelle_echeance) != "" ? _vm.formatDate((_vm$credtb5 = _vm.credtb200501) === null || _vm$credtb5 === void 0 ? void 0 : _vm$credtb5.nouvelle_echeance) : ""))]), _vm._v(" "), _c("th", {
    staticClass: "col-3"
  }, [_vm._v("Signature DG")]), _vm._v(" "), _c("td", {
    staticClass: "col-3"
  }, [_vm._v(_vm._s(_vm.signature_dg))])])])])]) : _vm._e()])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("tr", [_c("th", {
    staticClass: "fw-bold"
  }, [_vm._v("Nature du crédit")]), _vm._v(" "), _c("th", {
    staticClass: "fw-bold"
  }, [_vm._v("Montant initial")]), _vm._v(" "), _c("th", {
    staticClass: "fw-bold"
  }, [_vm._v("Montant accordé")]), _vm._v(" "), _c("th", {
    staticClass: "fw-bold"
  }, [_vm._v("Conditions HT (%)")]), _vm._v(" "), _c("th", {
    staticClass: "fw-bold"
  }, [_vm._v("Echéance")]), _vm._v(" "), _c("th", {
    staticClass: "fw-bold"
  }, [_vm._v("\n                                Garanties spécifiques retenues\n                            ")]), _vm._v(" "), _c("th", {
    staticClass: "fw-bold"
  }, [_vm._v("\n                                Garanties générales retenues\n                            ")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("tr", [_c("th", {
    staticClass: "text-center vertical-middle th"
  }, [_vm._v("\n                                N°\n                            ")]), _vm._v(" "), _c("th", {
    staticClass: "text-center vertical-middle th col-3"
  }, [_vm._v("\n                                Exigence des normes de performance de la SFI\n                            ")]), _vm._v(" "), _c("th", {
    staticClass: "text-center vertical-middle th col-3"
  }, [_vm._v("\n                                Risques\n                            ")]), _vm._v(" "), _c("th", {
    staticClass: "text-center vertical-middle th col-2"
  }, [_vm._v("\n                                Actions correctives\n                            ")]), _vm._v(" "), _c("th", {
    staticClass: "text-center vertical-middle th col-2"
  }, [_vm._v("\n                                Délais\n                            ")]), _vm._v(" "), _c("th", {
    staticClass: "text-center vertical-middle th col-2"
  }, [_vm._v("\n                                Livrables\n                            ")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/contre_analyse_filiale/notifcation_accord_credit/NOAC2.vue?vue&type=style&index=0&id=0935b405&lang=css&scoped=true":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/contre_analyse_filiale/notifcation_accord_credit/NOAC2.vue?vue&type=style&index=0&id=0935b405&lang=css&scoped=true ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.bg-grey[data-v-0935b405] {\r\n    background-color: #f4f3f3;\n}\nth[data-v-0935b405] {\r\n    background: #f4f3f3 !important;\n}\n.head-memorandum-title[data-v-0935b405] {\r\n    margin-top: 15px;\r\n    padding: 16px;\r\n    color: #fff;\r\n    font-weight: bold;\r\n    background-color: #34495e;\r\n    border: 2px solid #575759;\r\n    box-shadow: 1px 3px 4px #ddd;\r\n    font-size: 16px;\r\n    text-align: center;\r\n    text-transform: uppercase;\r\n    border-radius: 10px;\r\n    margin-bottom: 15px;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/contre_analyse_filiale/notifcation_accord_credit/NOAC2.vue?vue&type=style&index=0&id=0935b405&lang=css&scoped=true":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/contre_analyse_filiale/notifcation_accord_credit/NOAC2.vue?vue&type=style&index=0&id=0935b405&lang=css&scoped=true ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NOAC2_vue_vue_type_style_index_0_id_0935b405_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NOAC2.vue?vue&type=style&index=0&id=0935b405&lang=css&scoped=true */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/contre_analyse_filiale/notifcation_accord_credit/NOAC2.vue?vue&type=style&index=0&id=0935b405&lang=css&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NOAC2_vue_vue_type_style_index_0_id_0935b405_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NOAC2_vue_vue_type_style_index_0_id_0935b405_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/offview/bank/nsia/contre_analyse_filiale/notifcation_accord_credit/NOAC2.vue":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/components/offview/bank/nsia/contre_analyse_filiale/notifcation_accord_credit/NOAC2.vue ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _NOAC2_vue_vue_type_template_id_0935b405_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NOAC2.vue?vue&type=template&id=0935b405&scoped=true */ "./resources/js/components/offview/bank/nsia/contre_analyse_filiale/notifcation_accord_credit/NOAC2.vue?vue&type=template&id=0935b405&scoped=true");
/* harmony import */ var _NOAC2_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NOAC2.vue?vue&type=script&lang=js */ "./resources/js/components/offview/bank/nsia/contre_analyse_filiale/notifcation_accord_credit/NOAC2.vue?vue&type=script&lang=js");
/* harmony import */ var _NOAC2_vue_vue_type_style_index_0_id_0935b405_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NOAC2.vue?vue&type=style&index=0&id=0935b405&lang=css&scoped=true */ "./resources/js/components/offview/bank/nsia/contre_analyse_filiale/notifcation_accord_credit/NOAC2.vue?vue&type=style&index=0&id=0935b405&lang=css&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _NOAC2_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _NOAC2_vue_vue_type_template_id_0935b405_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _NOAC2_vue_vue_type_template_id_0935b405_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "0935b405",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/offview/bank/nsia/contre_analyse_filiale/notifcation_accord_credit/NOAC2.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/offview/bank/nsia/contre_analyse_filiale/notifcation_accord_credit/NOAC2.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************!*\
  !*** ./resources/js/components/offview/bank/nsia/contre_analyse_filiale/notifcation_accord_credit/NOAC2.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NOAC2_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NOAC2.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/contre_analyse_filiale/notifcation_accord_credit/NOAC2.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NOAC2_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/offview/bank/nsia/contre_analyse_filiale/notifcation_accord_credit/NOAC2.vue?vue&type=style&index=0&id=0935b405&lang=css&scoped=true":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./resources/js/components/offview/bank/nsia/contre_analyse_filiale/notifcation_accord_credit/NOAC2.vue?vue&type=style&index=0&id=0935b405&lang=css&scoped=true ***!
  \**********************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NOAC2_vue_vue_type_style_index_0_id_0935b405_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NOAC2.vue?vue&type=style&index=0&id=0935b405&lang=css&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/contre_analyse_filiale/notifcation_accord_credit/NOAC2.vue?vue&type=style&index=0&id=0935b405&lang=css&scoped=true");


/***/ }),

/***/ "./resources/js/components/offview/bank/nsia/contre_analyse_filiale/notifcation_accord_credit/NOAC2.vue?vue&type=template&id=0935b405&scoped=true":
/*!********************************************************************************************************************************************************!*\
  !*** ./resources/js/components/offview/bank/nsia/contre_analyse_filiale/notifcation_accord_credit/NOAC2.vue?vue&type=template&id=0935b405&scoped=true ***!
  \********************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NOAC2_vue_vue_type_template_id_0935b405_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NOAC2_vue_vue_type_template_id_0935b405_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NOAC2_vue_vue_type_template_id_0935b405_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NOAC2.vue?vue&type=template&id=0935b405&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/contre_analyse_filiale/notifcation_accord_credit/NOAC2.vue?vue&type=template&id=0935b405&scoped=true");


/***/ })

}]);