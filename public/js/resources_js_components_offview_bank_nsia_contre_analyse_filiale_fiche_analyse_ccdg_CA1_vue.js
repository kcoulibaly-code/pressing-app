"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_offview_bank_nsia_contre_analyse_filiale_fiche_analyse_ccdg_CA1_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/contre_analyse_filiale/fiche_analyse_ccdg/CA1.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/contre_analyse_filiale/fiche_analyse_ccdg/CA1.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_nsia_f8_data_extractor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../services/nsia/f8-data-extractor */ "./resources/js/services/nsia/f8-data-extractor.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "",
  props: {
    dossier_credit: Object
  },
  computed: {
    doss: function doss() {
      var _this$dossier_credit;
      return (_this$dossier_credit = this.dossier_credit) === null || _this$dossier_credit === void 0 ? void 0 : _this$dossier_credit.cred_pub_tb_13.benefices_pertes;
    },
    montant_depot_garantie: function montant_depot_garantie() {
      var _this$dossier_credit$;
      if ((_this$dossier_credit$ = this.dossier_credit.cred_pub_tb_1) !== null && _this$dossier_credit$ !== void 0 && _this$dossier_credit$.garantie) {
        return Number(this.dossier_credit.cred_pub_tb_1.garantie + this.dossier_credit.cred_pub_tb_1.montant_crsd);
      }
      return 0;
    },
    allSuretes: function allSuretes() {
      var _this$data_tb, _this$data_tb2;
      return (_this$data_tb = this.data_tb17001) === null || _this$data_tb === void 0 || (_this$data_tb = _this$data_tb.suretes_diverses) === null || _this$data_tb === void 0 ? void 0 : _this$data_tb.concat((_this$data_tb2 = this.data_tb17001) === null || _this$data_tb2 === void 0 ? void 0 : _this$data_tb2.autres_suretes_diverses);
    }
  },
  mounted: function mounted() {
    var _this$dossier_credit2,
      _this$dossier_credit3,
      _this = this,
      _this$dossier_credit4,
      _this$dossier_credit5,
      _this$dossier_credit6,
      _this$dossier_credit7,
      _this$dossier_credit8,
      _this$dossier_credit9,
      _this$dossier_credit0;
    var applied_templ_name = (_this$dossier_credit2 = this.dossier_credit) === null || _this$dossier_credit2 === void 0 ? void 0 : _this$dossier_credit2.applied_templ_name;
    var tbArrays = this.determineCredPubTables(applied_templ_name);
    this.credpub00 = tbArrays[0];
    this.credpub02 = tbArrays[2];
    this.data_tb17001 = this.f8DataExtractor.getData(this.dossier_credit, "cred_pub_tb_17001");
    (_this$dossier_credit3 = this.dossier_credit) === null || _this$dossier_credit3 === void 0 || (_this$dossier_credit3 = _this$dossier_credit3.caract_inter_pret_bank) === null || _this$dossier_credit3 === void 0 || _this$dossier_credit3.filter(function (elm) {
      if (elm.role_sigle == "DR_RSE") {
        var _elm$lignes;
        (_elm$lignes = elm.lignes) === null || _elm$lignes === void 0 || (_elm$lignes = _elm$lignes.lignes_par_caisse) === null || _elm$lignes === void 0 || _elm$lignes.filter(function (vars) {
          var _vars$montant_ligne;
          _this.accorde.push(vars.montant_ligne);
          _this.total_accorde += parseInt((_vars$montant_ligne = vars.montant_ligne) === null || _vars$montant_ligne === void 0 ? void 0 : _vars$montant_ligne.toString().replace(/\s/g, ""));
        });
      }
    });
    (_this$dossier_credit4 = this.dossier_credit) === null || _this$dossier_credit4 === void 0 || (_this$dossier_credit4 = _this$dossier_credit4.caract_inter_pret_bank) === null || _this$dossier_credit4 === void 0 || _this$dossier_credit4.filter(function (elm) {
      if (elm.role_sigle == "DR_RSE") {
        var _elm$lignes2;
        (_elm$lignes2 = elm.lignes) === null || _elm$lignes2 === void 0 || (_elm$lignes2 = _elm$lignes2.lignes_par_caisse) === null || _elm$lignes2 === void 0 || _elm$lignes2.filter(function (vars) {
          var _vars$montant_ligne2;
          _this.initial.push(vars.montant_ligne_demande);
          _this.total_initial += parseInt((_vars$montant_ligne2 = vars.montant_ligne) === null || _vars$montant_ligne2 === void 0 ? void 0 : _vars$montant_ligne2.toString().replace(/\s/g, ""));
        });
      }
    });
    (_this$dossier_credit5 = this.dossier_credit) === null || _this$dossier_credit5 === void 0 || (_this$dossier_credit5 = _this$dossier_credit5[tbArrays[2]]) === null || _this$dossier_credit5 === void 0 || _this$dossier_credit5.hypotheques.filter(function (elm) {
      var _elm$state_;
      if ((elm === null || elm === void 0 || (_elm$state_ = elm.state_) === null || _elm$state_ === void 0 ? void 0 : _elm$state_.has_speOr_spe) == "general" && (elm === null || elm === void 0 ? void 0 : elm.intitule_ligne.name) == 'Nouvelles lignes') {
        var _elm$state_2;
        _this.general_hypotheques += (elm === null || elm === void 0 ? void 0 : elm.bien_hypotheque) + ' (' + (elm === null || elm === void 0 || (_elm$state_2 = elm.state_) === null || _elm$state_2 === void 0 ? void 0 : _elm$state_2.is_detained) + ') ,';
      }
    });
    (_this$dossier_credit6 = this.dossier_credit) === null || _this$dossier_credit6 === void 0 || (_this$dossier_credit6 = _this$dossier_credit6[tbArrays[2]]) === null || _this$dossier_credit6 === void 0 || _this$dossier_credit6.gages.filter(function (elm) {
      var _elm$state_3;
      if ((elm === null || elm === void 0 || (_elm$state_3 = elm.state_) === null || _elm$state_3 === void 0 ? void 0 : _elm$state_3.has_speOr_spe) == "general" && (elm === null || elm === void 0 ? void 0 : elm.intitule_ligne.name) == 'Nouvelles lignes') {
        var _elm$state_4;
        _this.general_gages += (elm === null || elm === void 0 ? void 0 : elm.proprietaire) + ' (' + (elm === null || elm === void 0 || (_elm$state_4 = elm.state_) === null || _elm$state_4 === void 0 ? void 0 : _elm$state_4.is_detained) + ') ,';
      }
    });
    (_this$dossier_credit7 = this.dossier_credit) === null || _this$dossier_credit7 === void 0 || (_this$dossier_credit7 = _this$dossier_credit7[tbArrays[2]]) === null || _this$dossier_credit7 === void 0 || _this$dossier_credit7.cautionnement_solidaires.filter(function (elm) {
      var _elm$state_5;
      if ((elm === null || elm === void 0 || (_elm$state_5 = elm.state_) === null || _elm$state_5 === void 0 ? void 0 : _elm$state_5.has_speOr_spe) == "general" && (elm === null || elm === void 0 ? void 0 : elm.intitule_ligne.name) == 'Nouvelles lignes') {
        var _elm$state_6;
        _this.general_cautionnement_solidaires += (elm === null || elm === void 0 ? void 0 : elm.localisation_caution_solidaire) + ' (' + (elm === null || elm === void 0 || (_elm$state_6 = elm.state_) === null || _elm$state_6 === void 0 ? void 0 : _elm$state_6.is_detained) + ') ,';
      }
    });
    (_this$dossier_credit8 = this.dossier_credit) === null || _this$dossier_credit8 === void 0 || (_this$dossier_credit8 = _this$dossier_credit8[tbArrays[2]]) === null || _this$dossier_credit8 === void 0 || _this$dossier_credit8.caution_hypothecaires.filter(function (elm) {
      var _elm$state_7;
      if ((elm === null || elm === void 0 || (_elm$state_7 = elm.state_) === null || _elm$state_7 === void 0 ? void 0 : _elm$state_7.has_speOr_spe) == "general" && (elm === null || elm === void 0 ? void 0 : elm.intitule_ligne.name) == 'Nouvelles lignes') {
        var _elm$state_8;
        _this.general_caution_hypothecaires += (elm === null || elm === void 0 ? void 0 : elm.bien) + ' (' + (elm === null || elm === void 0 || (_elm$state_8 = elm.state_) === null || _elm$state_8 === void 0 ? void 0 : _elm$state_8.is_detained) + ') ,';
      }
    });
    (_this$dossier_credit9 = this.dossier_credit) === null || _this$dossier_credit9 === void 0 || (_this$dossier_credit9 = _this$dossier_credit9[tbArrays[2]]) === null || _this$dossier_credit9 === void 0 || _this$dossier_credit9.protection_financieres.filter(function (elm) {
      var _elm$state_9;
      if ((elm === null || elm === void 0 || (_elm$state_9 = elm.state_) === null || _elm$state_9 === void 0 ? void 0 : _elm$state_9.has_speOr_spe) == "general" && (elm === null || elm === void 0 ? void 0 : elm.intitule_ligne.name) == 'Nouvelles lignes') {
        var _elm$state_0;
        _this.general_protection_financieres += (elm === null || elm === void 0 ? void 0 : elm.institution) + ' (' + (elm === null || elm === void 0 || (_elm$state_0 = elm.state_) === null || _elm$state_0 === void 0 ? void 0 : _elm$state_0.is_detained) + ') ,';
      }
    });
    (_this$dossier_credit0 = this.dossier_credit) === null || _this$dossier_credit0 === void 0 || (_this$dossier_credit0 = _this$dossier_credit0[tbArrays[2]]) === null || _this$dossier_credit0 === void 0 || _this$dossier_credit0.cond_particulieres.filter(function (elm) {
      var _elm$state_1;
      if ((elm === null || elm === void 0 || (_elm$state_1 = elm.state_) === null || _elm$state_1 === void 0 ? void 0 : _elm$state_1.has_speOr_spe) == "general" && (elm === null || elm === void 0 ? void 0 : elm.intitule_ligne.name) == 'Nouvelles lignes') {
        var _elm$state_10;
        _this.general_cond_particulieres += (elm === null || elm === void 0 ? void 0 : elm.cond_name) + ' (' + (elm === null || elm === void 0 || (_elm$state_10 = elm.state_) === null || _elm$state_10 === void 0 ? void 0 : _elm$state_10.is_detained) + ') ,';
      }
    });
  },
  data: function data() {
    var _this$dossier_credit1;
    return {
      INDICATOR: '•',
      date: new Date().getFullYear(),
      credpub00: null,
      annee_referentielle: new Date().getFullYear(),
      general_hypotheques: "",
      general_gages: "",
      general_cautionnement_solidaires: "",
      general_caution_hypothecaires: "",
      general_protection_financieres: "",
      general_cond_particulieres: "",
      is_detained_caution_hypothecaires: "",
      accorde: [],
      initial: [],
      total_accorde: 0,
      total_initial: 0,
      data_tb: (_this$dossier_credit1 = this.dossier_credit) === null || _this$dossier_credit1 === void 0 ? void 0 : _this$dossier_credit1.cred_pub_tb_17001,
      f8Data: null,
      f8DataExtractor: _services_nsia_f8_data_extractor__WEBPACK_IMPORTED_MODULE_0__["default"],
      // data_tb19003_other:this.dossier_credit?.cred_pub_tb_19003,
      // // f8DataExtractor: F8DataExtractor,
      // //
      data_tb17001Extractor: _services_nsia_f8_data_extractor__WEBPACK_IMPORTED_MODULE_0__["default"],
      data_tb17001: null
    };
  },
  methods: {
    formatAmount: function formatAmount(x) {
      return x === null || x === void 0 ? void 0 : x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    },
    getStatusLabel: function getStatusLabel(line) {
      var status = line === null || line === void 0 ? void 0 : line.statut;
      if (status == 'Renouvellement') {
        // console.log('line', line);
        if (line.type === "RI") return "Renouvellement à l'identique";
        if (line.type === "RH") return "Renouvellement à la hausse";
        if (line.type === "RB") return "Renouvellement à la baisse";
      }
      return status;
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/contre_analyse_filiale/fiche_analyse_ccdg/CA1.vue?vue&type=template&id=0e794c0a&scoped=true":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/contre_analyse_filiale/fiche_analyse_ccdg/CA1.vue?vue&type=template&id=0e794c0a&scoped=true ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm$dossier_credit, _vm$data_tb, _vm$data_tb2, _vm$data_tb3, _vm$data_tb4, _vm$data_tb5, _vm$data_tb6, _vm$data_tb7, _vm$data_tb8, _vm$data_tb9, _vm$data_tb0, _vm$data_tb1, _vm$data_tb10, _vm$data_tb11, _vm$data_tb12, _vm$data_tb13, _vm$data_tb14, _vm$data_tb15, _vm$data_tb16, _vm$data_tb17, _vm$data_tb18, _vm$data_tb19, _vm$data_tb20, _vm$data_tb21, _vm$data_tb22, _vm$data_tb24, _vm$data_tb25, _vm$data_tb26, _vm$data_tb27, _vm$data_tb28, _vm$data_tb29, _vm$data_tb30, _vm$data_tb31, _vm$data_tb32, _vm$data_tb33, _vm$data_tb34, _vm$data_tb35, _vm$data_tb36, _vm$data_tb37, _vm$data_tb38, _vm$data_tb39, _vm$data_tb40, _vm$data_tb41, _vm$data_tb42, _vm$data_tb43, _vm$data_tb44, _vm$data_tb45, _vm$data_tb46, _vm$data_tb47, _vm$data_tb48, _vm$data_tb49, _vm$data_tb50, _vm$data_tb51;
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("div", {
    staticClass: "row"
  }, [_vm.data_tb ? _c("div", {
    staticClass: "col-12"
  }, [_c("div", {
    staticClass: "head-memorandum-title mb-4",
    staticStyle: {
      "text-align": "center"
    }
  }, [_vm._v("Vérifications préalables")]), _vm._v(" "), ((_vm$dossier_credit = _vm.dossier_credit) === null || _vm$dossier_credit === void 0 ? void 0 : _vm$dossier_credit.selected_path_type) == "LONG" ? _c("div", {
    staticClass: "table-responsive mb-4"
  }, [_c("table", {
    staticClass: "w-100 p-2"
  }, [_vm._m(0), _vm._v(" "), _c("tbody", [_c("tr", [_c("td", [_vm._v("\n                                Grand risque : " + _vm._s((_vm$data_tb = _vm.data_tb) === null || _vm$data_tb === void 0 ? void 0 : _vm$data_tb.grand_risque) + "\n                            ")]), _vm._v(" "), _c("td", [_vm._v("\n                                Partie liée : " + _vm._s((_vm$data_tb2 = _vm.data_tb) === null || _vm$data_tb2 === void 0 ? void 0 : _vm$data_tb2.partie_liee) + "\n                            ")])]), _vm._v(" "), _c("tr", [_c("td", {
    attrs: {
      colspan: "2"
    }
  }, [_vm._v("\n                                Toute exposition sortant du cadre habituel des activités de la banque : " + _vm._s((_vm$data_tb3 = _vm.data_tb) === null || _vm$data_tb3 === void 0 ? void 0 : _vm$data_tb3.inhabituel) + "\n                            ")])])])])]) : _vm._e(), _vm._v(" "), _c("div", [_c("table", {
    staticClass: "table table-borderless p-2"
  }, [_vm._m(1), _vm._v(" "), _c("tbody", [_c("tr", [_c("td", [_vm._v("\n                                " + _vm._s(_vm.INDICATOR) + " Copie de la CR2 précédente\n                            ")]), _vm._v(" "), _c("td", [_vm._v("\n                                " + _vm._s((_vm$data_tb4 = _vm.data_tb) === null || _vm$data_tb4 === void 0 ? void 0 : _vm$data_tb4.copie_cr2_precedente) + "\n                            ")])]), _vm._v(" "), _c("tr", [_c("td", [_vm._v("\n                                " + _vm._s(_vm.INDICATOR) + " Copie des différentes notes adressées au comité de crédit\n                            ")]), _vm._v(" "), _c("td", [_vm._v("\n                                " + _vm._s((_vm$data_tb5 = _vm.data_tb) === null || _vm$data_tb5 === void 0 ? void 0 : _vm$data_tb5.copie_differentes_adressees_comite_credit) + "\n                            ")])]), _vm._v(" "), _c("tr", [_c("td", [_vm._v("\n                                " + _vm._s(_vm.INDICATOR) + " Originale de la demande du client\n                            ")]), _vm._v(" "), _c("td", [_vm._v("\n                                " + _vm._s((_vm$data_tb6 = _vm.data_tb) === null || _vm$data_tb6 === void 0 ? void 0 : _vm$data_tb6.originale_demande_client) + "\n                            ")])]), _vm._v(" "), _vm._l((_vm$data_tb7 = _vm.data_tb) === null || _vm$data_tb7 === void 0 ? void 0 : _vm$data_tb7.elements_constructifs, function (item, index) {
    return _c("tr", {
      key: index
    }, [index == 0 ? _c("td", [_vm._v("\n                                " + _vm._s(_vm.INDICATOR) + " Liasse financière\n                            ")]) : _c("td", [_vm._v("\n                                " + _vm._s(_vm.INDICATOR) + " " + _vm._s(item.libelle) + "\n                            ")]), _vm._v(" "), _c("td", [_vm._v("\n                                " + _vm._s(item.reponse) + "\n                            ")])]);
  }), _vm._v(" "), _c("tr", [_c("td", {
    attrs: {
      colspan: "2"
    }
  }, [_c("table", {
    staticClass: "table table-bordered"
  }, [_c("tbody", [_vm._m(2), _vm._v(" "), _c("tr", [_c("td", {
    attrs: {
      colspan: "2"
    },
    domProps: {
      innerHTML: _vm._s((_vm$data_tb8 = _vm.data_tb) === null || _vm$data_tb8 === void 0 ? void 0 : _vm$data_tb8.commentaires_presentation)
    }
  })])])])])])], 2)])]), _vm._v(" "), _c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-borderless p-2"
  }, [_vm._m(3), _vm._v(" "), _c("tbody", [_c("tr", [_c("td", {
    staticClass: "mt-3"
  }, [_c("h6", [_vm._v("\n                                    " + _vm._s(_vm.INDICATOR) + " Rappel des recommandations particulières contenues dans la dernière CR2 s'il y en a\n                                    eu\n                                ")])]), _vm._v(" "), _c("td", {
    staticClass: "mt-3"
  }, [_vm._v("\n                                " + _vm._s((_vm$data_tb9 = _vm.data_tb) === null || _vm$data_tb9 === void 0 ? void 0 : _vm$data_tb9.rappel_recommandations_contenues_derniere_cr2) + "\n                            ")])]), _vm._v(" "), _c("tr", [((_vm$data_tb0 = _vm.data_tb) === null || _vm$data_tb0 === void 0 ? void 0 : _vm$data_tb0.rappel_recommandations_contenues_derniere_cr2) == "Oui" ? _c("td", {
    staticClass: "p-0 m-0",
    attrs: {
      colspan: "2"
    }
  }, [_c("div", {
    staticClass: "table-responsive mx-3"
  }, [_c("table", {
    staticClass: "table table-bordered"
  }, [_vm._m(4), _vm._v(" "), _c("tbody", _vm._l(_vm.data_tb.recommandations_particulieres_contenues, function (recom, index) {
    return _c("tr", {
      key: "k_" + index
    }, [_c("td", [_vm._v("\n                                                    " + _vm._s(recom.nom) + "\n                                                ")]), _vm._v(" "), _c("td", [_vm._v("\n                                                    " + _vm._s(recom.direction) + "\n                                                ")]), _vm._v(" "), _c("td", [_vm._v("\n                                                    " + _vm._s(recom.recommendation) + "\n                                                ")]), _vm._v(" "), _c("td", [_vm._v("\n                                                    " + _vm._s(recom.recommandations_suivies) + "\n                                                ")]), _vm._v(" "), _c("td", [_vm._v("\n                                                    " + _vm._s(recom.commentaire_rappel) + "\n                                                ")])]);
  }), 0)])])]) : _vm._e()]), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "mt-3",
    attrs: {
      colspan: "2"
    }
  }, [_c("h6", [_vm._v("\n                                    " + _vm._s(_vm.INDICATOR) + " Commentaire sur utilisation et dénouement des lignes existantes\n                                ")]), _vm._v(" "), _c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-bordered mb-2 mt-2",
    staticStyle: {
      "font-size": "0.9rem"
    }
  }, [_c("thead", [_c("tr", [_c("td", {
    staticClass: "col-2 fw-bold bg-grey",
    staticStyle: {
      "vertical-align": "middle"
    }
  }, [_vm._v("Lignes")]), _vm._v(" "), _c("td", {
    staticClass: "col-2 fw-bold bg-grey text-center",
    staticStyle: {
      "vertical-align": "middle"
    }
  }, [_vm._v("\n                                                    Autorisation")]), _vm._v(" "), _c("td", {
    staticClass: "col-2 fw-bold bg-grey text-center",
    staticStyle: {
      "vertical-align": "middle"
    }
  }, [_vm._v("\n                                                    Encours au "), (_vm$data_tb1 = _vm.data_tb) !== null && _vm$data_tb1 !== void 0 && _vm$data_tb1.utilisation_denouement_lignes_encours_au ? _c("span", [_vm._v(_vm._s(_vm.formatDate((_vm$data_tb10 = _vm.data_tb) === null || _vm$data_tb10 === void 0 ? void 0 : _vm$data_tb10.utilisation_denouement_lignes_encours_au)) + " ")]) : _vm._e()]), _vm._v(" "), _c("td", {
    staticClass: "col-1 fw-bold bg-grey text-center",
    staticStyle: {
      "vertical-align": "middle"
    }
  }, [_vm._v("\n                                                    Taux")]), _vm._v(" "), _c("td", {
    staticClass: "col-1 fw-bold bg-grey text-center",
    staticStyle: {
      "vertical-align": "middle"
    }
  }, [_vm._v("\n                                                    Durée")]), _vm._v(" "), _c("td", {
    staticClass: "col-1 fw-bold bg-grey text-center",
    staticStyle: {
      "vertical-align": "middle"
    }
  }, [_vm._v("\n                                                    Echéance")]), _vm._v(" "), _c("td", {
    staticClass: "col-3 fw-bold bg-grey text-center",
    staticStyle: {
      "vertical-align": "middle"
    }
  }, [_vm._v("\n                                                    Commentaire")])])]), _vm._v(" "), _c("tbody", [_vm._l((_vm$data_tb11 = _vm.data_tb) === null || _vm$data_tb11 === void 0 ? void 0 : _vm$data_tb11.utilisation_denouement_lignes, function (line, index_) {
    return [_c("tr", {
      key: index_ + "el"
    }, [_c("td", [_vm._v(_vm._s(line === null || line === void 0 ? void 0 : line.ligne))]), _vm._v(" "), _c("td", {
      staticClass: "text-right"
    }, [_vm._v(_vm._s(line === null || line === void 0 ? void 0 : line.autorisation))]), _vm._v(" "), _c("td", {
      staticClass: "text-right"
    }, [_vm._v(_vm._s(line === null || line === void 0 ? void 0 : line.encours))]), _vm._v(" "), _c("td", {
      staticClass: "text-center"
    }, [_vm._v(_vm._s(line === null || line === void 0 ? void 0 : line.taux) + " %")]), _vm._v(" "), _c("td", {
      staticClass: "text-center"
    }, [_vm._v(_vm._s(line === null || line === void 0 ? void 0 : line.duree))]), _vm._v(" "), _c("td", {
      staticClass: "text-nowrap"
    }, [line !== null && line !== void 0 && line.echeance ? _c("span", [_vm._v(_vm._s(_vm.formatDate(line.echeance)))]) : _vm._e()]), _vm._v(" "), _c("td", [_vm._v(_vm._s(line === null || line === void 0 ? void 0 : line.commentaire))])])];
  }), _vm._v(" "), _c("tr", [_c("th", [_vm._v("Total")]), _vm._v(" "), _c("th", {
    staticClass: "text-nowrap text-right"
  }, [_vm._v("\n                                                    " + _vm._s(_vm.formatAmount((_vm$data_tb12 = _vm.data_tb) === null || _vm$data_tb12 === void 0 ? void 0 : _vm$data_tb12.total_utilisation_denou_ligne_autorisation)) + "\n                                                ")]), _vm._v(" "), _c("th", {
    staticClass: "text-nowrap text-right"
  }, [_vm._v("\n                                                    " + _vm._s(_vm.formatAmount((_vm$data_tb13 = _vm.data_tb) === null || _vm$data_tb13 === void 0 ? void 0 : _vm$data_tb13.total_utilisation_denou_ligne_encours)) + "\n                                                ")]), _vm._v(" "), _c("th", {
    staticClass: "bg-grey",
    attrs: {
      colspan: "4"
    }
  })])], 2)])]), _vm._v(" "), _c("div", [_c("span", {
    domProps: {
      innerHTML: _vm._s((_vm$data_tb14 = _vm.data_tb) === null || _vm$data_tb14 === void 0 ? void 0 : _vm$data_tb14.commentaire_utilisation_denouement_lignes_existantes)
    }
  })])])]), _vm._v(" "), _c("tr", [_c("td", {
    attrs: {
      colspan: "2"
    }
  }, [_c("div", [_c("h6", [_vm._v("\n                                        " + _vm._s(_vm.INDICATOR) + " Montant de l'encours et date de la prise de l'engagement du type caution "), ((_vm$data_tb15 = _vm.data_tb) === null || _vm$data_tb15 === void 0 ? void 0 : _vm$data_tb15.montant_encours_eng_type_caution_non_applicable) != "" ? _c("span", [_vm._v("(" + _vm._s((_vm$data_tb16 = _vm.data_tb) === null || _vm$data_tb16 === void 0 ? void 0 : _vm$data_tb16.montant_encours_eng_type_caution_non_applicable) + ")")]) : _vm._e()]), _vm._v(" "), ((_vm$data_tb17 = _vm.data_tb) === null || _vm$data_tb17 === void 0 ? void 0 : _vm$data_tb17.montant_encours_eng_type_caution_non_applicable) == "" ? _c("div", {
    staticClass: "table-responsive mx-2"
  }, [_c("table", {
    staticClass: "table table-bordered"
  }, [_vm._m(5), _vm._v(" "), _c("tbody", [_vm._l((_vm$data_tb18 = _vm.data_tb) === null || _vm$data_tb18 === void 0 ? void 0 : _vm$data_tb18.montant_encours_date_prise_engagement_type_caution, function (montant_encours, index) {
    return _c("tr", {
      key: index
    }, [_c("td", {
      staticClass: "text-center"
    }, [_vm._v(_vm._s(montant_encours.date_debut != "" ? _vm.formatDate(montant_encours.date_debut) : ""))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(montant_encours.commentaire))]), _vm._v(" "), _c("td", {
      staticClass: "text-right"
    }, [_vm._v(_vm._s(_vm.formatAmount(montant_encours.montant)) + "\n                                                    ")])]);
  }), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "fw-bold text-end",
    staticStyle: {
      "font-size": "13px",
      "vertical-align": "middle"
    },
    attrs: {
      colspan: "2"
    }
  }, [_vm._v("Total")]), _vm._v(" "), _c("td", {
    staticClass: "text-right"
  }, [_vm._v(_vm._s(_vm.formatAmount((_vm$data_tb19 = _vm.data_tb) === null || _vm$data_tb19 === void 0 ? void 0 : _vm$data_tb19.total_montant_encours)))])])], 2)])]) : _vm._e()])])])])])]), _vm._v(" "), _c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-borderless p-2"
  }, [_c("tbody", [_c("tr", [_c("td", {
    attrs: {
      colspan: "2"
    }
  }, [_c("div", [_c("h6", [_vm._v("\n                                        " + _vm._s(_vm.INDICATOR) + " Synthèse des nouvelles lignes\n                                        ")]), _vm._v(" "), _c("div", [_c("div", {
    staticClass: "table-responsive mx-2"
  }, [_c("table", {
    staticClass: "table table-bordered mb-2 mt-2"
  }, [_vm._m(6), _vm._v(" "), _c("tbody", [_c("tr", [_c("td", {
    staticClass: "fw-bold"
  }, [_vm._v("Banques")]), _vm._v(" "), _c("td", {
    staticClass: "fw-bold"
  }, [_vm._v("Lignes")]), _vm._v(" "), _c("td", {
    staticClass: "fw-bold"
  }, [_vm._v("Status")]), _vm._v(" "), _c("td", {
    staticClass: "fw-bold"
  }, [_vm._v("Montant")]), _vm._v(" "), _c("td", {
    staticClass: "fw-bold"
  }, [_vm._v("Proposition")]), _vm._v(" "), (_vm$data_tb20 = _vm.data_tb17001) !== null && _vm$data_tb20 !== void 0 && _vm$data_tb20.encours_au ? _c("td", {
    staticClass: "fw-bold"
  }, [_c("span", {
    staticClass: "text-uppercase"
  }, [_vm._v("Encours au")]), _vm._v("\n                                                            " + _vm._s(_vm.formatDate((_vm$data_tb21 = _vm.data_tb17001) === null || _vm$data_tb21 === void 0 ? void 0 : _vm$data_tb21.encours_au)) + "\n                                                        ")]) : _c("td", {
    staticClass: "fw-bold"
  }, [_vm._v("Encours au")]), _vm._v(" "), _c("td", {
    staticClass: "fw-bold"
  }, [_vm._v("Taux")]), _vm._v(" "), _c("td", {
    staticClass: "fw-bold"
  }, [_vm._v("Durée")]), _vm._v(" "), _c("td", {
    staticClass: "fw-bold"
  }, [_vm._v("ECHEANCE")]), _vm._v(" "), _c("td", {
    staticClass: "fw-bold"
  }, [_vm._v("Garanties / covenants spécifiques proposées")]), _vm._v(" "), _c("td", {
    staticClass: "fw-bold"
  }, [_vm._v("Garanties / covenants générales proposées")])]), _vm._v(" "), _vm._l((_vm$data_tb22 = _vm.data_tb17001) === null || _vm$data_tb22 === void 0 ? void 0 : _vm$data_tb22.newLines, function (line, index) {
    var _vm$data_tb23;
    return _c("tr", {
      key: index
    }, [_c("td", [_vm._v(_vm._s(line.banque))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(line.ligne))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(line.statut))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(line.montant))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(line.proposition))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(line.encours))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(line.taux))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(line.duree))]), _vm._v(" "), line !== null && line !== void 0 && line.echeance ? _c("td", [_vm._v(_vm._s(_vm.formatDate(line === null || line === void 0 ? void 0 : line.echeance)))]) : _c("td"), _vm._v(" "), _c("td", _vm._l(line === null || line === void 0 ? void 0 : line.garanties, function (surete, index) {
      return _c("div", {
        key: "su" + index
      }, _vm._l(surete, function (sure, index) {
        var _sure$state_, _sure$name_garantie;
        return _c("ul", {
          key: index + sure.name_garantie
        }, [(sure === null || sure === void 0 || (_sure$state_ = sure.state_) === null || _sure$state_ === void 0 ? void 0 : _sure$state_.has_speOr_spe) == "specifique" && (sure === null || sure === void 0 || (_sure$name_garantie = sure.name_garantie) === null || _sure$name_garantie === void 0 ? void 0 : _sure$name_garantie.trim()) != "" ? _c("li", [_vm._v(" - " + _vm._s(sure === null || sure === void 0 ? void 0 : sure.name_garantie))]) : _vm._e()]);
      }), 0);
    }), 0), _vm._v(" "), _c("td", [_c("div", _vm._l((_vm$data_tb23 = _vm.data_tb17001) === null || _vm$data_tb23 === void 0 ? void 0 : _vm$data_tb23.newLinesgarantiesGenerales, function (surete, index) {
      var _surete$name_garantie;
      return _c("ul", {
        key: index
      }, [surete.parentId.includes(line.id) && (surete === null || surete === void 0 || (_surete$name_garantie = surete.name_garantie) === null || _surete$name_garantie === void 0 ? void 0 : _surete$name_garantie.trim()) != "" ? _c("li", [_vm._v(" - " + _vm._s(surete === null || surete === void 0 ? void 0 : surete.name_garantie))]) : _vm._e()]);
    }), 0)])]);
  }), _vm._v(" "), _c("tr", [_c("th", {
    attrs: {
      colspan: "3"
    }
  }, [_vm._v("S/Total")]), _vm._v(" "), _c("th", [_vm._v(_vm._s(_vm.formatAmount(((_vm$data_tb24 = _vm.data_tb17001) === null || _vm$data_tb24 === void 0 || (_vm$data_tb24 = _vm$data_tb24.totaux) === null || _vm$data_tb24 === void 0 ? void 0 : _vm$data_tb24.st_caisse_nouvelles_lignes_montant) + ((_vm$data_tb25 = _vm.data_tb17001) === null || _vm$data_tb25 === void 0 || (_vm$data_tb25 = _vm$data_tb25.totaux) === null || _vm$data_tb25 === void 0 ? void 0 : _vm$data_tb25.st_signature_nouvelles_lignes_montant))))]), _vm._v(" "), _c("th", [_vm._v(_vm._s(_vm.formatAmount(((_vm$data_tb26 = _vm.data_tb17001) === null || _vm$data_tb26 === void 0 || (_vm$data_tb26 = _vm$data_tb26.totaux) === null || _vm$data_tb26 === void 0 ? void 0 : _vm$data_tb26.st_caisse_nouvelles_lignes_proposition) + ((_vm$data_tb27 = _vm.data_tb17001) === null || _vm$data_tb27 === void 0 || (_vm$data_tb27 = _vm$data_tb27.totaux) === null || _vm$data_tb27 === void 0 ? void 0 : _vm$data_tb27.st_signature_nouvelles_lignes_proposition))) + "\n                                                        ")]), _vm._v(" "), _c("th", {
    attrs: {
      colspan: "6"
    }
  })])], 2)])]), _vm._v(" "), _c("div", {
    staticClass: "table-responsive mx-2 mt-1"
  }, [_c("table", {
    staticClass: "table table-bordered"
  }, [_c("tbody", [_vm._m(7), _vm._v(" "), _c("tr", [_c("td", {
    domProps: {
      innerHTML: _vm._s((_vm$data_tb28 = _vm.data_tb17001) === null || _vm$data_tb28 === void 0 ? void 0 : _vm$data_tb28.newLinesComment)
    }
  })])])])])])])])])])])]), _vm._v(" "), _c("div", [_c("table", {
    staticClass: "table table-borderless p-2"
  }, [_c("tbody", [_c("tr", [_c("td", {
    attrs: {
      colspan: "2"
    }
  }, [_c("div", [_c("h6", [_vm._v("\n                                        " + _vm._s(_vm.INDICATOR) + " Réclamation de main levée des cautions les plus anciennes ? " + _vm._s((_vm$data_tb29 = _vm.data_tb) === null || _vm$data_tb29 === void 0 ? void 0 : _vm$data_tb29.reclamation_main_levee_cautions) + "\n                                    ")]), _vm._v(" "), ((_vm$data_tb30 = _vm.data_tb) === null || _vm$data_tb30 === void 0 ? void 0 : _vm$data_tb30.reclamation_main_levee_cautions) === "Non" ? _c("div", {
    staticClass: "mx-1"
  }, [_c("table", {
    staticClass: "table table-bordered"
  }, [_c("tbody", [_c("tr", {
    staticClass: "bg-grey"
  }, [_c("td", [_c("label", [_c("small", [_vm._v('Pourquoi "'), _c("span", {
    staticClass: "text-uppercase text-danger"
  }, [_vm._v(_vm._s((_vm$data_tb31 = _vm.data_tb) === null || _vm$data_tb31 === void 0 ? void 0 : _vm$data_tb31.reclamation_main_levee_cautions))]), _vm._v('"\n                                                                ?')])])])]), _vm._v(" "), _c("tr", [_c("td", [_c("span", {
    domProps: {
      innerHTML: _vm._s((_vm$data_tb32 = _vm.data_tb) === null || _vm$data_tb32 === void 0 ? void 0 : _vm$data_tb32.commentaire_reclamation_main_levee_cautions_anciennes)
    }
  })])])])])]) : _vm._e()])])])])])]), _vm._v(" "), _c("div", [_c("table", {
    staticClass: "table table-borderless p-2"
  }, [_vm._m(8), _vm._v(" "), _c("tbody", [_c("tr", [_c("td", {
    attrs: {
      colspan: "2"
    }
  }, [_c("div", [_c("h6", [_vm._v("\n                                        " + _vm._s(_vm.INDICATOR) + " Vérification des garanties et suretées précédemment exigées\n                                    ")]), _vm._v(" "), _c("div", {
    staticClass: "table-responsive mx-2"
  }, [_c("table", {
    staticClass: "table table-bordered"
  }, [_vm._m(9), _vm._v(" "), _c("tbody", [_vm._l((_vm$data_tb33 = _vm.data_tb) === null || _vm$data_tb33 === void 0 ? void 0 : _vm$data_tb33.garantie_suretees, function (garantie_suretee, index) {
    return _c("tr", {
      key: index
    }, [_c("td", [_vm._v(_vm._s(garantie_suretee.garantie))]), _vm._v(" "), _c("td", {
      staticClass: "text-center"
    }, [_vm._v(_vm._s(garantie_suretee.echeance != "" ? _vm.formatDate(garantie_suretee.echeance) : ""))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(garantie_suretee.statut))]), _vm._v(" "), _c("td", {
      staticClass: "text-right"
    }, [_vm._v(_vm._s(_vm.formatAmount(garantie_suretee.montant)) + "\n                                                    ")])]);
  }), _vm._v(" "), _c("tr", [_c("th", {
    staticClass: "text-end",
    staticStyle: {
      "vertical-align": "middle"
    },
    attrs: {
      colspan: "3"
    }
  }, [_vm._v("\n                                                        Total")]), _vm._v(" "), _c("td", {
    staticClass: "text-right"
  }, [_vm._v(_vm._s(_vm.formatAmount((_vm$data_tb34 = _vm.data_tb) === null || _vm$data_tb34 === void 0 ? void 0 : _vm$data_tb34.total_montant_garantie_suretee)))])])], 2)])])])])]), _vm._v(" "), _c("tr", [_c("td", {
    attrs: {
      colspan: "2"
    }
  }, [_c("div", {
    staticClass: "table-responsive mx-2"
  }, [_c("table", {
    staticClass: "table table-bordered"
  }, [_c("tbody", [_vm._m(10), _vm._v(" "), _c("tr", [_c("td", [_c("span", {
    domProps: {
      innerHTML: _vm._s((_vm$data_tb35 = _vm.data_tb) === null || _vm$data_tb35 === void 0 ? void 0 : _vm$data_tb35.commentaires_suretes_exigees)
    }
  })])])])])])])])])])]), _vm._v(" "), _c("div", [_c("table", {
    staticClass: "table table-borderless p-2"
  }, [_vm._m(11), _vm._v(" "), _c("tbody", [_c("tr", [_c("td", {
    attrs: {
      colspan: "2"
    }
  }, [_c("div", [_c("h6", [_vm._v("\n                                        " + _vm._s(_vm.INDICATOR) + " Evolution des taux sur les 3 dernières années\n                                    ")]), _vm._v(" "), _c("div", {
    staticClass: "table-responsive mx-2"
  }, [_c("table", {
    staticClass: "table table-bordered"
  }, [_c("thead", [_c("tr", [_c("th", {
    staticClass: "fw-bold bg-grey"
  }, [_vm._v("Lignes")]), _vm._v(" "), _c("th", {
    staticClass: "fw-bold bg-grey text-center"
  }, [_vm._v("N-1 (" + _vm._s(_vm.annee_referentielle - 1) + ")")]), _vm._v(" "), _c("th", {
    staticClass: "fw-bold bg-grey text-center"
  }, [_vm._v("N (" + _vm._s(_vm.annee_referentielle) + ")")]), _vm._v(" "), _c("th", {
    staticClass: "fw-bold bg-grey text-center"
  }, [_vm._v("Sollicité")])])]), _vm._v(" "), _c("tbody", _vm._l((_vm$data_tb36 = _vm.data_tb) === null || _vm$data_tb36 === void 0 ? void 0 : _vm$data_tb36.suivi_taux, function (suivi, index) {
    return _c("tr", {
      key: index
    }, [_c("td", [_vm._v("\n                                                        " + _vm._s(suivi.ligne_compte) + " (" + _vm._s(suivi.status) + ")\n                                                    ")]), _vm._v(" "), _c("td", {
      staticClass: "text-right"
    }, [_vm._v("\n                                                        " + _vm._s(suivi.ligne_compte_n_2) + " %\n                                                    ")]), _vm._v(" "), _c("td", {
      staticClass: "text-right"
    }, [_vm._v("\n                                                        " + _vm._s(suivi.ligne_compte_n_1) + " %\n                                                    ")]), _vm._v(" "), _c("td", {
      staticClass: "text-right"
    }, [_vm._v("\n                                                        " + _vm._s(suivi.ligne_compte_solicite) + " %\n                                                    ")])]);
  }), 0)])])])])]), _vm._v(" "), _c("tr", [_c("td", {
    attrs: {
      colspan: "2"
    }
  }, [_c("div", {
    staticClass: "table-responsive mx-2"
  }, [_c("table", {
    staticClass: "table table-bordered"
  }, [_c("tbody", [_vm._m(12), _vm._v(" "), _c("tr", [_c("td", [_c("span", {
    domProps: {
      innerHTML: _vm._s((_vm$data_tb37 = _vm.data_tb) === null || _vm$data_tb37 === void 0 ? void 0 : _vm$data_tb37.avis_taux_proposes)
    }
  })])])])])])])])])])]), _vm._v(" "), _c("div", [_c("table", {
    staticClass: "table table-borderless p-2"
  }, [_vm._m(13), _vm._v(" "), _c("tbody", [_c("tr", [_c("td", {
    attrs: {
      colspan: "2"
    }
  }, [_c("div", [_c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-bordered"
  }, [_c("thead", [_c("tr", [_c("th", {
    staticClass: "fw-bold bg-grey text-center"
  }), _vm._v(" "), _c("th", {
    staticClass: "fw-bold bg-grey text-center"
  }, [_vm._v("N-2 (" + _vm._s(_vm.annee_referentielle - 2) + ")")]), _vm._v(" "), _c("th", {
    staticClass: "fw-bold bg-grey text-center"
  }, [_vm._v("N-1 (" + _vm._s(_vm.annee_referentielle - 1) + ")")]), _vm._v(" "), _c("th", {
    staticClass: "fw-bold bg-grey text-center"
  }, [_vm._v("N (" + _vm._s(_vm.annee_referentielle) + ")")])])]), _vm._v(" "), _c("tbody", [_c("tr", [_c("td", [_vm._v("\n                                                        Chiffre d'affaires\n                                                    ")]), _vm._v(" "), _c("td", {
    staticClass: "text-right"
  }, [_vm._v("\n                                                        " + _vm._s(_vm.formatAmount((_vm$data_tb38 = _vm.data_tb) === null || _vm$data_tb38 === void 0 ? void 0 : _vm$data_tb38.chiffre_affaires_n_1)) + "\n                                                    ")]), _vm._v(" "), _c("td", {
    staticClass: "text-right"
  }, [_vm._v("\n                                                        " + _vm._s(_vm.formatAmount((_vm$data_tb39 = _vm.data_tb) === null || _vm$data_tb39 === void 0 ? void 0 : _vm$data_tb39.chiffre_affaires_n_2)) + "\n                                                    ")]), _vm._v(" "), _c("td", {
    staticClass: "text-right"
  }, [_vm._v("\n                                                        " + _vm._s(_vm.formatAmount((_vm$data_tb40 = _vm.data_tb) === null || _vm$data_tb40 === void 0 ? void 0 : _vm$data_tb40.chiffre_affaires_n_3)) + "\n                                                    ")])]), _vm._v(" "), _c("tr", [_c("td", [_vm._v("\n                                                        Total des lignes sollicitées\n                                                    ")]), _vm._v(" "), _c("td", {
    staticClass: "text-right"
  }, [_vm._v("\n                                                        " + _vm._s(_vm.formatAmount((_vm$data_tb41 = _vm.data_tb) === null || _vm$data_tb41 === void 0 ? void 0 : _vm$data_tb41.total_lignes_sollicitees_n_1)) + "\n                                                    ")]), _vm._v(" "), _c("td", {
    staticClass: "text-right"
  }, [_vm._v("\n                                                        " + _vm._s(_vm.formatAmount((_vm$data_tb42 = _vm.data_tb) === null || _vm$data_tb42 === void 0 ? void 0 : _vm$data_tb42.total_lignes_sollicitees_n_2)) + "\n                                                    ")]), _vm._v(" "), _c("td", {
    staticClass: "text-right"
  }, [_vm._v("\n                                                        " + _vm._s(_vm.formatAmount((_vm$data_tb43 = _vm.data_tb) === null || _vm$data_tb43 === void 0 ? void 0 : _vm$data_tb43.total_lignes_sollicitees_n_3)) + "\n                                                    ")])]), _vm._v(" "), _c("tr", [_c("td", [_vm._v("\n                                                        Lignes sollicitées / Chiffres d'affaires (%)\n                                                    ")]), _vm._v(" "), _c("td", {
    staticClass: "text-right"
  }, [_vm._v("\n                                                        " + _vm._s((_vm$data_tb44 = _vm.data_tb) === null || _vm$data_tb44 === void 0 ? void 0 : _vm$data_tb44.lignes_sollicitees_chiffres_affaires_n_1) + " %\n                                                    ")]), _vm._v(" "), _c("td", {
    staticClass: "text-right"
  }, [_vm._v("\n                                                        " + _vm._s((_vm$data_tb45 = _vm.data_tb) === null || _vm$data_tb45 === void 0 ? void 0 : _vm$data_tb45.lignes_sollicitees_chiffres_affaires_n_2) + " %\n                                                    ")]), _vm._v(" "), _c("td", {
    staticClass: "text-right"
  }, [_vm._v("\n                                                        " + _vm._s((_vm$data_tb46 = _vm.data_tb) === null || _vm$data_tb46 === void 0 ? void 0 : _vm$data_tb46.lignes_sollicitees_chiffres_affaires_n_3) + " %\n                                                    ")])])])])])])])]), _vm._v(" "), _c("tr", [_c("td", {
    attrs: {
      colspan: "2"
    }
  }, [_c("table", {
    staticClass: "table table-bordered"
  }, [_c("tbody", [_vm._m(14), _vm._v(" "), _c("tr", [_c("td", [_c("span", {
    domProps: {
      innerHTML: _vm._s((_vm$data_tb47 = _vm.data_tb) === null || _vm$data_tb47 === void 0 ? void 0 : _vm$data_tb47.commentaires)
    }
  })])])])])])])])])]), _vm._v(" "), _c("div", [_c("table", {
    staticClass: "table table-borderless p-2"
  }, [_vm._m(15), _vm._v(" "), _c("tbody", [_c("tr", [_c("td", {
    attrs: {
      colspan: "2"
    }
  }, [_c("div", [_c("h6", [_vm._v("\n                                        " + _vm._s(_vm.INDICATOR) + " Est-ce que le budget est entièrement bouclé ? " + _vm._s((_vm$data_tb48 = _vm.data_tb) === null || _vm$data_tb48 === void 0 ? void 0 : _vm$data_tb48.budget_entierement_boucle) + "\n                                    ")]), _vm._v(" "), ((_vm$data_tb49 = _vm.data_tb) === null || _vm$data_tb49 === void 0 ? void 0 : _vm$data_tb49.budget_entierement_boucle) === "Non" ? _c("div", {
    staticClass: "mx-1"
  }, [_c("table", {
    staticClass: "table table-bordered"
  }, [_c("tbody", [_c("tr", {
    staticClass: "bg-grey"
  }, [_c("td", [_c("label", [_c("small", [_vm._v("Si "), _c("span", {
    staticClass: "text-uppercase text-danger"
  }, [_vm._v('"' + _vm._s((_vm$data_tb50 = _vm.data_tb) === null || _vm$data_tb50 === void 0 ? void 0 : _vm$data_tb50.budget_entierement_boucle) + '"')]), _vm._v("\n                                                                comment le gap sera-t-il financé ?")])])])]), _vm._v(" "), _c("tr", [_c("td", [_c("span", {
    domProps: {
      innerHTML: _vm._s((_vm$data_tb51 = _vm.data_tb) === null || _vm$data_tb51 === void 0 ? void 0 : _vm$data_tb51.gap_finance)
    }
  })])])])])]) : _vm._e()])])])])])])]) : _vm._e()])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", {
    staticClass: "bg-grey text-center p-2",
    staticStyle: {
      "text-transform": "uppercase"
    }
  }, [_c("tr", [_c("td", {
    attrs: {
      colspan: "2"
    }
  }, [_vm._v("\n                                Qualification du risque\n                            ")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", {
    staticClass: "bg-grey p-2",
    staticStyle: {
      "text-transform": "uppercase"
    }
  }, [_c("tr", [_c("td", {
    attrs: {
      colspan: "2"
    }
  }, [_c("span", {
    staticClass: "fw-bold"
  }, [_vm._v("A. ")]), _vm._v(" Présence des éléments constitutifs (minimum) que doit\n                                contenir un dossier de crédit\n                            ")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("tr", {
    staticClass: "bg-grey"
  }, [_c("td", {
    staticClass: "text-center",
    attrs: {
      colspan: "2"
    }
  }, [_vm._v("Commentaires sur la presence des\n                                                éléments constitutifs")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", {
    staticClass: "bg-grey text-uppercase"
  }, [_c("tr", [_c("td", {
    attrs: {
      colspan: "2"
    }
  }, [_c("span", {
    staticClass: "fw-bold"
  }, [_vm._v("B. ")]), _vm._v("Tenue des engagements\n                            ")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("th", {
    staticClass: "fw-bold bg-grey col-2"
  }, [_vm._v("Nom et Prénoms")]), _vm._v(" "), _c("th", {
    staticClass: "fw-bold bg-grey col-2"
  }, [_vm._v("Direction")]), _vm._v(" "), _c("th", {
    staticClass: "fw-bold bg-grey col-3"
  }, [_vm._v("Recommendations")]), _vm._v(" "), _c("th", {
    staticClass: "fw-bold bg-grey col-2"
  }, [_vm._v("A-t-été-suivie")]), _vm._v(" "), _c("th", {
    staticClass: "fw-bold bg-grey col-3"
  }, [_vm._v("Commentaire")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("th", {
    staticClass: "fw-bold bg-grey col-4"
  }, [_vm._v("Date début")]), _vm._v(" "), _c("th", {
    staticClass: "fw-bold bg-grey col-4"
  }, [_vm._v("Commentaire")]), _vm._v(" "), _c("th", {
    staticClass: "fw-bold bg-grey col-4"
  }, [_vm._v("Montant")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", {
    staticClass: "bg-ed-primary"
  }, [_c("tr", [_c("th", {
    staticClass: "text-uppercase",
    staticStyle: {
      "text-align": "center"
    },
    attrs: {
      colspan: "11",
      scope: "row"
    }
  }, [_vm._v("Concours sollicités\n                                                        ")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("tr", {
    staticClass: "bg-grey"
  }, [_c("td", {
    staticClass: "text-center"
  }, [_vm._v("Commentaire")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", {
    staticClass: "bg-grey text-uppercase"
  }, [_c("tr", [_c("td", {
    attrs: {
      colspan: "2"
    }
  }, [_c("span", {
    staticClass: "fw-bold"
  }, [_vm._v("C. ")]), _vm._v("Suretées exigées\n                            ")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("td", {
    staticClass: "fw-bold bg-grey col-5"
  }), _vm._v(" "), _c("td", {
    staticClass: "fw-bold bg-grey col-2"
  }, [_vm._v("Échéance")]), _vm._v(" "), _c("td", {
    staticClass: "fw-bold bg-grey col-2"
  }, [_vm._v("Statut")]), _vm._v(" "), _c("td", {
    staticClass: "fw-bold bg-grey col-3"
  }, [_vm._v("Montant")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("tr", {
    staticClass: "bg-grey text-center"
  }, [_c("td", [_c("label", [_vm._v("Commentaires")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", {
    staticClass: "bg-grey text-uppercase"
  }, [_c("tr", [_c("td", {
    attrs: {
      colspan: "2"
    }
  }, [_c("span", {
    staticClass: "fw-bold"
  }, [_vm._v("D. ")]), _vm._v("Suivi des taux\n                            ")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("tr", {
    staticClass: "bg-grey"
  }, [_c("td", [_c("label", [_vm._v("Avis sur les taux proposés")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", {
    staticClass: "bg-grey text-uppercase"
  }, [_c("tr", [_c("td", {
    attrs: {
      colspan: "2"
    }
  }, [_c("span", {
    staticClass: "fw-bold"
  }, [_vm._v("E. ")]), _vm._v("Adéquation du CA avec le niveau des lignes sollicitées\n                            ")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("tr", {
    staticClass: "bg-grey"
  }, [_c("td", [_c("label", [_vm._v("Commentaires")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", {
    staticClass: "bg-grey text-uppercase"
  }, [_c("tr", [_c("td", {
    attrs: {
      colspan: "2"
    }
  }, [_c("span", {
    staticClass: "fw-bold"
  }, [_vm._v("F. ")]), _vm._v("Enveloppe de financements\n                            ")])])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/contre_analyse_filiale/fiche_analyse_ccdg/CA1.vue?vue&type=style&index=0&id=0e794c0a&scoped=true&lang=css":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/contre_analyse_filiale/fiche_analyse_ccdg/CA1.vue?vue&type=style&index=0&id=0e794c0a&scoped=true&lang=css ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".bg-grey[data-v-0e794c0a] {\r\n    background-color: #f4f3f3 !important;\n}\n.head-memorandum-title[data-v-0e794c0a] {\r\n    margin-top: 15px;\r\n    padding: 16px;\r\n    color: #fff;\r\n    font-weight: bold;\r\n    background-color: #34495e;\r\n    border: 2px solid #575759;\r\n    box-shadow: 1px 3px 4px #ddd;\r\n    font-size: 16px;\r\n    text-align: center;\r\n    text-transform: uppercase;\r\n    border-radius: 10px;\r\n    margin-bottom: 15px;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/contre_analyse_filiale/fiche_analyse_ccdg/CA1.vue?vue&type=style&index=0&id=0e794c0a&scoped=true&lang=css":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/contre_analyse_filiale/fiche_analyse_ccdg/CA1.vue?vue&type=style&index=0&id=0e794c0a&scoped=true&lang=css ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CA1_vue_vue_type_style_index_0_id_0e794c0a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CA1.vue?vue&type=style&index=0&id=0e794c0a&scoped=true&lang=css */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/contre_analyse_filiale/fiche_analyse_ccdg/CA1.vue?vue&type=style&index=0&id=0e794c0a&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CA1_vue_vue_type_style_index_0_id_0e794c0a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CA1_vue_vue_type_style_index_0_id_0e794c0a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/offview/bank/nsia/contre_analyse_filiale/fiche_analyse_ccdg/CA1.vue":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/offview/bank/nsia/contre_analyse_filiale/fiche_analyse_ccdg/CA1.vue ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CA1_vue_vue_type_template_id_0e794c0a_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CA1.vue?vue&type=template&id=0e794c0a&scoped=true */ "./resources/js/components/offview/bank/nsia/contre_analyse_filiale/fiche_analyse_ccdg/CA1.vue?vue&type=template&id=0e794c0a&scoped=true");
/* harmony import */ var _CA1_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CA1.vue?vue&type=script&lang=js */ "./resources/js/components/offview/bank/nsia/contre_analyse_filiale/fiche_analyse_ccdg/CA1.vue?vue&type=script&lang=js");
/* harmony import */ var _CA1_vue_vue_type_style_index_0_id_0e794c0a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CA1.vue?vue&type=style&index=0&id=0e794c0a&scoped=true&lang=css */ "./resources/js/components/offview/bank/nsia/contre_analyse_filiale/fiche_analyse_ccdg/CA1.vue?vue&type=style&index=0&id=0e794c0a&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _CA1_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _CA1_vue_vue_type_template_id_0e794c0a_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _CA1_vue_vue_type_template_id_0e794c0a_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "0e794c0a",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/offview/bank/nsia/contre_analyse_filiale/fiche_analyse_ccdg/CA1.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/offview/bank/nsia/contre_analyse_filiale/fiche_analyse_ccdg/CA1.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************!*\
  !*** ./resources/js/components/offview/bank/nsia/contre_analyse_filiale/fiche_analyse_ccdg/CA1.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CA1_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CA1.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/contre_analyse_filiale/fiche_analyse_ccdg/CA1.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CA1_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/offview/bank/nsia/contre_analyse_filiale/fiche_analyse_ccdg/CA1.vue?vue&type=style&index=0&id=0e794c0a&scoped=true&lang=css":
/*!*************************************************************************************************************************************************************!*\
  !*** ./resources/js/components/offview/bank/nsia/contre_analyse_filiale/fiche_analyse_ccdg/CA1.vue?vue&type=style&index=0&id=0e794c0a&scoped=true&lang=css ***!
  \*************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CA1_vue_vue_type_style_index_0_id_0e794c0a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CA1.vue?vue&type=style&index=0&id=0e794c0a&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/contre_analyse_filiale/fiche_analyse_ccdg/CA1.vue?vue&type=style&index=0&id=0e794c0a&scoped=true&lang=css");


/***/ }),

/***/ "./resources/js/components/offview/bank/nsia/contre_analyse_filiale/fiche_analyse_ccdg/CA1.vue?vue&type=template&id=0e794c0a&scoped=true":
/*!***********************************************************************************************************************************************!*\
  !*** ./resources/js/components/offview/bank/nsia/contre_analyse_filiale/fiche_analyse_ccdg/CA1.vue?vue&type=template&id=0e794c0a&scoped=true ***!
  \***********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CA1_vue_vue_type_template_id_0e794c0a_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CA1_vue_vue_type_template_id_0e794c0a_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CA1_vue_vue_type_template_id_0e794c0a_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CA1.vue?vue&type=template&id=0e794c0a&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/contre_analyse_filiale/fiche_analyse_ccdg/CA1.vue?vue&type=template&id=0e794c0a&scoped=true");


/***/ })

}]);