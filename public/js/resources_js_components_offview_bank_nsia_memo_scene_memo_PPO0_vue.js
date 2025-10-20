"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_offview_bank_nsia_memo_scene_memo_PPO0_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/scene_memo/PPO0.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/scene_memo/PPO0.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_connects_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../services/connects.service */ "./resources/js/services/connects.service.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "PPO0",
  props: {
    dossier_credit: Object
  },
  created: function created() {},
  mounted: function mounted() {
    var _this$data_tb,
      _this = this;
    if (((_this$data_tb = this.data_tb9) === null || _this$data_tb === void 0 ? void 0 : _this$data_tb.engagements_en_cours) != '') {
      var _this$data_tb2;
      (_this$data_tb2 = this.data_tb9) === null || _this$data_tb2 === void 0 || _this$data_tb2.engagements_en_cours.forEach(function (element) {
        var _element$encours, _element$mensualite;
        var mt = Number(element === null || element === void 0 || (_element$encours = element.encours) === null || _element$encours === void 0 ? void 0 : _element$encours.toString().replace(/\s/g, ""));
        var mt_m = Number(element === null || element === void 0 || (_element$mensualite = element.mensualite) === null || _element$mensualite === void 0 ? void 0 : _element$mensualite.toString().replace(/\s/g, ""));
        if (mt > 0) {
          var _this$total_engagemen;
          _this.total_engagements_actuels = Number((_this$total_engagemen = _this.total_engagements_actuels) === null || _this$total_engagemen === void 0 ? void 0 : _this$total_engagemen.toString().replace(/\s/g, "")) + mt_m;
        }
      });
    }
    this.calculValeurSituationFinanciere();
  },
  data: function data() {
    var _this$dossier_credit;
    return {
      data_tb9: (_this$dossier_credit = this.dossier_credit) === null || _this$dossier_credit === void 0 ? void 0 : _this$dossier_credit.cred_pub_tb_10009,
      montant_quotite_cessible: 0,
      charge_emprunt_sollicite: 0,
      total_engagements_actuels: 0,
      coefficient_d_endettement: 0,
      total_engagements_mensuels: 0,
      nouveau_disponible_net_mensuel: 0,
      montant_quotite_cessible_disponible: 0,
      net_sur_bulletin_de_salaire_prime: 0,
      total_revenu_net_mensuel: 0,
      echeance_total: 0,
      mode_tranche: ""
    };
  },
  methods: {
    formatDate: function formatDate(date) {
      if (['', null, undefined].includes(date)) return "";
      var options = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric'
      };
      return new Date(date).toLocaleDateString('fr', options);
    },
    formatAmount: function formatAmount(x) {
      var _x$toString;
      return x === null || x === void 0 || (_x$toString = x.toString()) === null || _x$toString === void 0 ? void 0 : _x$toString.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    },
    convertInt: function convertInt(n) {
      var _n$toString;
      return Number(n === null || n === void 0 || (_n$toString = n.toString()) === null || _n$toString === void 0 ? void 0 : _n$toString.replace(/\s/g, ''));
    },
    calculValeurSituationFinanciere: function calculValeurSituationFinanciere() {
      var _this$data_tb9$mode_t, _this$data_tb3, _this$data_tb4, _this$data_tb5, _this$total_engagemen2, _this$echeance_total, _this$total_engagemen3;
      this.mode_tranche = (_this$data_tb9$mode_t = this.data_tb9.mode_tranche) !== null && _this$data_tb9$mode_t !== void 0 ? _this$data_tb9$mode_t : "";
      this.echeance_total = Number((_this$data_tb3 = this.data_tb9) === null || _this$data_tb3 === void 0 || (_this$data_tb3 = _this$data_tb3.r_mensualite) === null || _this$data_tb3 === void 0 ? void 0 : _this$data_tb3.toString().replace(/\s/g, ''));
      if (['In fine'].includes(this.mode_tranche)) {
        this.echeance_total = this.convertInt(this.echeance_total) / this.data_tb9.duree_credit;
        this.echeance_total = parseInt(this.convertInt(this.echeance_total));
      }
      if (['Mensuelle'].includes(this.mode_tranche)) {
        this.echeance_total = this.convertInt(this.echeance_total);
      }
      if (['Trimestrielle'].includes(this.mode_tranche)) {
        this.echeance_total = this.convertInt(this.echeance_total) / 3;
        this.echeance_total = parseInt(this.convertInt(this.echeance_total));
      }
      if (['Semestrielle'].includes(this.mode_tranche)) {
        this.echeance_total = this.convertInt(this.echeance_total) / 6;
        this.echeance_total = parseInt(this.convertInt(this.echeance_total));
      }
      if (['Annuel'].includes(this.mode_tranche)) {
        this.echeance_total = this.convertInt(this.echeance_total) / 12;
        this.echeance_total = parseInt(this.convertInt(this.echeance_total));
      }
      if (['Bimensuelle'].includes(this.mode_tranche)) {
        this.echeance_total = this.convertInt(this.echeance_total) * 2;
        this.echeance_total = parseInt(this.convertInt(this.echeance_total));
      }
      if (['Bimestrielle'].includes(this.mode_tranche)) {
        this.echeance_total = this.convertInt(this.echeance_total) / 2;
        this.echeance_total = parseInt(this.convertInt(this.echeance_total));
      }
      var quotite_cessible = Number((_this$data_tb4 = this.data_tb9) === null || _this$data_tb4 === void 0 || (_this$data_tb4 = _this$data_tb4.revenu_nsia_total_colonne_taux_qc1) === null || _this$data_tb4 === void 0 ? void 0 : _this$data_tb4.toString().replace(/\s/g, ''));
      this.total_revenu_net_mensuel = Number((_this$data_tb5 = this.data_tb9) === null || _this$data_tb5 === void 0 || (_this$data_tb5 = _this$data_tb5.revenu_nsia_total_colonne_montant_pondere) === null || _this$data_tb5 === void 0 ? void 0 : _this$data_tb5.toString().replace(/\s/g, ''));
      var total_engagements_actuels = Number((_this$total_engagemen2 = this.total_engagements_actuels) === null || _this$total_engagemen2 === void 0 ? void 0 : _this$total_engagemen2.toString().replace(/\s/g, ''));
      // let charge_emprunt_sollicite = Number(this.data_tb9?.r_mensualite?.toString().replace(/\s/g, ''));
      var charge_emprunt_sollicite = Number((_this$echeance_total = this.echeance_total) === null || _this$echeance_total === void 0 ? void 0 : _this$echeance_total.toString().replace(/\s/g, ''));
      this.total_engagements_mensuels = total_engagements_actuels + charge_emprunt_sollicite;
      var total_engagements_mensuels = Number((_this$total_engagemen3 = this.total_engagements_mensuels) === null || _this$total_engagemen3 === void 0 ? void 0 : _this$total_engagemen3.toString().replace(/\s/g, ''));
      this.nouveau_disponible_net_mensuel = this.total_revenu_net_mensuel - total_engagements_mensuels;
      if (this.total_revenu_net_mensuel > 0) {
        var coefficient_d_endettement = total_engagements_mensuels / this.total_revenu_net_mensuel * 100;
        this.coefficient_d_endettement = coefficient_d_endettement.toFixed(2);
      } else {
        this.coefficient_d_endettement = 0;
      }
      this.montant_quotite_cessible = parseInt(this.total_revenu_net_mensuel * (quotite_cessible / 100));
      this.montant_quotite_cessible_disponible = this.montant_quotite_cessible - total_engagements_actuels;
    }
  },
  computed: {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/scene_memo/PPO0.vue?vue&type=template&id=2b53429a&scoped=true":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/scene_memo/PPO0.vue?vue&type=template&id=2b53429a&scoped=true ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm$data_tb, _vm$data_tb2, _vm$data_tb3, _vm$data_tb4, _vm$data_tb5, _vm$data_tb6, _vm$data_tb7, _vm$data_tb8, _vm$data_tb9, _vm$data_tb0, _vm$data_tb1, _vm$data_tb10, _vm$data_tb11, _vm$data_tb12, _vm$data_tb13, _vm$data_tb14, _vm$data_tb15, _vm$data_tb16, _vm$data_tb17, _vm$data_tb18, _vm$data_tb20, _vm$data_tb21, _vm$data_tb22, _vm$data_tb23, _vm$data_tb24, _vm$data_tb25, _vm$data_tb26, _vm$data_tb27, _vm$data_tb28, _vm$data_tb29, _vm$data_tb30, _vm$data_tb31, _vm$data_tb32, _vm$data_tb33, _vm$data_tb34, _vm$data_tb35, _vm$data_tb36, _vm$data_tb37, _vm$data_tb38, _vm$data_tb39, _vm$data_tb40, _vm$data_tb41, _vm$data_tb42, _vm$data_tb43, _vm$data_tb44, _vm$data_tb45, _vm$data_tb46, _vm$data_tb47, _vm$data_tb48, _vm$data_tb49, _vm$data_tb50, _vm$data_tb51, _vm$data_tb52, _vm$data_tb53, _vm$data_tb54, _vm$data_tb55;
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "row"
  }, [_vm._m(0), _vm._v(" "), _c("div", {
    staticClass: "col-12 mt-3"
  }, [_c("table", {
    staticClass: "table table-borderless"
  }, [_c("tbody", {
    staticStyle: {
      "font-size": "0.9rem"
    }
  }, [_c("tr", [_c("td", {
    staticClass: "col-6"
  }, [_c("b", [_vm._v("Type de demande : ")]), _vm._v(" " + _vm._s((_vm$data_tb = _vm.data_tb9) === null || _vm$data_tb === void 0 ? void 0 : _vm$data_tb.type_demande))]), _vm._v(" "), _c("td", {
    staticClass: "col-6"
  }, [_c("b", [_vm._v("Type crédit : ")]), _vm._v(" " + _vm._s((_vm$data_tb2 = _vm.data_tb9) === null || _vm$data_tb2 === void 0 ? void 0 : _vm$data_tb2.type_credit))])]), _vm._v(" "), _c("tr", [_c("td", [_c("b", [_vm._v("Type client : ")]), _vm._v(" " + _vm._s((_vm$data_tb3 = _vm.data_tb9) === null || _vm$data_tb3 === void 0 ? void 0 : _vm$data_tb3.type_client))]), _vm._v(" "), _c("td", [_c("b", [_vm._v("Durée du crédit : ")]), _vm._v("\n            " + _vm._s((_vm$data_tb4 = _vm.data_tb9) === null || _vm$data_tb4 === void 0 ? void 0 : _vm$data_tb4.duree_credit) + " (Mois)\n            ")])]), _vm._v(" "), _c("tr", [_c("td", [_c("b", [_vm._v("Taux nominal de crédit : ")]), _vm._v(" " + _vm._s((_vm$data_tb5 = _vm.data_tb9) === null || _vm$data_tb5 === void 0 ? void 0 : _vm$data_tb5.taux) + " %")]), _vm._v(" "), _c("td", [_c("b", [_vm._v("Montant sollicité : ")]), _vm._v(" " + _vm._s(_vm.formatAmount((_vm$data_tb6 = _vm.data_tb9) === null || _vm$data_tb6 === void 0 ? void 0 : _vm$data_tb6.montant_sollicite)))])]), _vm._v(" "), _c("tr", [_c("td", [_c("b", [_vm._v("Montant proposé par le CC : ")]), _vm._v(_vm._s(_vm.formatAmount((_vm$data_tb7 = _vm.data_tb9) === null || _vm$data_tb7 === void 0 ? void 0 : _vm$data_tb7.montant_credit)) + " ")]), _vm._v(" "), _c("td", [!["", null, undefined].includes((_vm$data_tb8 = _vm.data_tb9) === null || _vm$data_tb8 === void 0 ? void 0 : _vm$data_tb8.pret_rachat_prive) ? _c("span", [_c("b", [_vm._v("Ce prêt est-il un rachat privé (Rachat du prêt chez les confrères) ? : ")]), _vm._v(_vm._s((_vm$data_tb9 = _vm.data_tb9) === null || _vm$data_tb9 === void 0 ? void 0 : _vm$data_tb9.pret_rachat_prive))]) : _vm._e()])])])])]), _vm._v(" "), (_vm$data_tb0 = _vm.data_tb9) !== null && _vm$data_tb0 !== void 0 && _vm$data_tb0.engagements_en_cours && ((_vm$data_tb1 = _vm.data_tb9) === null || _vm$data_tb1 === void 0 ? void 0 : _vm$data_tb1.engagements_en_cours.length) > 0 ? _c("div", {
    staticClass: "col-12"
  }, [_c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-bordered"
  }, [_vm._m(1), _vm._v(" "), _c("tbody", [_c("tr", [_c("td", {
    staticClass: "p-0"
  }, [_c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-bordered mb-0",
    staticStyle: {
      "font-size": "0.9rem"
    }
  }, [_vm._m(2), _vm._v(" "), _c("tbody", [_vm._l((_vm$data_tb10 = _vm.data_tb9) === null || _vm$data_tb10 === void 0 ? void 0 : _vm$data_tb10.engagements_en_cours, function (rd, ind) {
    return [rd.checked && rd.libelle != "" ? _c("tr", {
      key: "red_" + ind
    }, [_c("td", [_vm._v(_vm._s(rd.libelle))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(rd.type_credit))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(rd === null || rd === void 0 ? void 0 : rd.duree_credit))]), _vm._v(" "), _c("td", {
      staticClass: "text-center"
    }, [_vm._v(_vm._s(rd.date_echeance != "" ? _vm.formatDate(rd.date_echeance) : ""))]), _vm._v(" "), _c("td", {
      staticClass: "text-right text-nowrap"
    }, [_vm._v(_vm._s(_vm.formatAmount(rd.montant)))]), _vm._v(" "), _c("td", {
      staticClass: "text-right text-nowrap"
    }, [_vm._v(_vm._s(_vm.formatAmount(rd.encours)))]), _vm._v(" "), _c("td", {
      staticClass: "text-right text-nowrap"
    }, [_vm._v(_vm._s(rd === null || rd === void 0 ? void 0 : rd.periodicite))]), _vm._v(" "), _c("td", {
      staticClass: "text-right text-nowrap"
    }, [_vm._v(_vm._s(!["", null, undefined].includes(rd === null || rd === void 0 ? void 0 : rd.montant_periodicite) ? _vm.formatAmount(rd.montant_periodicite) : ""))]), _vm._v(" "), _c("td", {
      staticClass: "text-right text-nowrap"
    }, [_vm._v(_vm._s(_vm.formatAmount(rd.mensualite)))]), _vm._v(" "), _c("td", {
      staticClass: "text-center"
    }, [_vm._v(_vm._s(rd.rachat == "R" ? "Oui" : ""))])]) : _vm._e()];
  }), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "text-right fw-bold",
    attrs: {
      colspan: "4"
    }
  }, [_vm._v("TOTAL")]), _vm._v(" "), _c("td", {
    staticClass: "text-right text-nowrap fw-bold"
  }, [_vm._v(_vm._s(_vm.formatAmount((_vm$data_tb11 = _vm.data_tb9) === null || _vm$data_tb11 === void 0 ? void 0 : _vm$data_tb11.engagements_en_cours_total_montant)))]), _vm._v(" "), _c("td", {
    staticClass: "text-right text-nowrap fw-bold"
  }, [_vm._v(_vm._s(_vm.formatAmount((_vm$data_tb12 = _vm.data_tb9) === null || _vm$data_tb12 === void 0 ? void 0 : _vm$data_tb12.engagements_en_cours_total_encours)))]), _vm._v(" "), _c("td"), _vm._v(" "), _c("td", {
    staticClass: "text-right text-nowrap fw-bold"
  }, [_vm._v(_vm._s(!["", null, undefined].includes((_vm$data_tb13 = _vm.data_tb9) === null || _vm$data_tb13 === void 0 ? void 0 : _vm$data_tb13.engagements_en_cours_total_montant_periodicite) ? _vm.formatAmount((_vm$data_tb14 = _vm.data_tb9) === null || _vm$data_tb14 === void 0 ? void 0 : _vm$data_tb14.engagements_en_cours_total_montant_periodicite) : ""))]), _vm._v(" "), _c("td", {
    staticClass: "text-right text-nowrap fw-bold"
  }, [_vm._v(_vm._s(_vm.formatAmount((_vm$data_tb15 = _vm.data_tb9) === null || _vm$data_tb15 === void 0 ? void 0 : _vm$data_tb15.engagements_en_cours_total_mensualite)))]), _vm._v(" "), _c("td")])], 2)])])])])])])])]) : _vm._e(), _vm._v(" "), (_vm$data_tb16 = _vm.data_tb9) !== null && _vm$data_tb16 !== void 0 && _vm$data_tb16.revenu_domicilie_nsia && ((_vm$data_tb17 = _vm.data_tb9) === null || _vm$data_tb17 === void 0 ? void 0 : _vm$data_tb17.revenu_domicilie_nsia.length) > 0 ? _c("div", {
    staticClass: "col-12 mb-3"
  }, [_c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-bordered"
  }, [_vm._m(3), _vm._v(" "), _c("tbody", [_c("tr", [_c("td", {
    staticClass: "p-0"
  }, [_c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-bordered mb-0",
    staticStyle: {
      "font-size": "0.9rem"
    }
  }, [_vm._m(4), _vm._v(" "), _c("tbody", [_vm._l((_vm$data_tb18 = _vm.data_tb9) === null || _vm$data_tb18 === void 0 ? void 0 : _vm$data_tb18.revenu_domicilie_nsia, function (el, ind) {
    var _vm$data_tb19;
    return _c("tr", {
      key: "rdn_" + ind
    }, [_c("td", [_vm._v("\n                        " + _vm._s(el.libelle) + "\n                        "), el.libelle == "Salaire net" && el.checked ? _c("div", {
      staticClass: "mt-1"
    }, [_c("i", {
      staticClass: "text-nowrap mx-1 fw-bold"
    }, [_vm._v("Salaire brut")])]) : _vm._e()]), _vm._v(" "), _c("td", [_vm._v("\n                        " + _vm._s(_vm.formatAmount(el.montant_emprunteur)) + "\n                        "), el.libelle == "Salaire net" && el.checked ? _c("div", {
      staticClass: "mt-1"
    }, [_c("i", [_vm._v(_vm._s(_vm.formatAmount((_vm$data_tb19 = _vm.data_tb9) === null || _vm$data_tb19 === void 0 ? void 0 : _vm$data_tb19.salaire_brut)))])]) : _vm._e()]), _vm._v(" "), _c("td", {
      staticClass: "text-center"
    }, [el.eligible ? _c("input", {
      staticClass: "form-check-input m-0",
      attrs: {
        type: "checkbox",
        checked: "checked",
        disabled: ""
      }
    }) : _c("input", {
      staticClass: "form-check-input m-0",
      attrs: {
        type: "checkbox",
        disabled: ""
      }
    })]), _vm._v(" "), _c("td", {
      staticClass: "text-center"
    }, [el.source_remboursement ? _c("input", {
      staticClass: "form-check-input m-0",
      attrs: {
        type: "checkbox",
        checked: "checked",
        disabled: ""
      }
    }) : _c("input", {
      staticClass: "form-check-input m-0",
      attrs: {
        type: "checkbox",
        disabled: ""
      }
    })]), _vm._v(" "), _c("td", {
      staticClass: "text-center text-nowrap"
    }, [_vm._v(_vm._s(el.periodicite))]), _vm._v(" "), _c("td", {
      staticClass: "text-nowrap text-right"
    }, [_vm._v(_vm._s(_vm.formatAmount(el.mensualite)))]), _vm._v(" "), _c("td", {
      staticClass: "text-nowrap text-center"
    }, [_vm._v(_vm._s(el.taux) + " %")]), _vm._v(" "), _c("td", {
      staticClass: "text-nowrap text-right"
    }, [_vm._v(_vm._s(_vm.formatAmount(el.montant_pondere)))]), _vm._v(" "), _c("td", {
      staticClass: "text-nowrap text-center"
    }, [_vm._v(_vm._s(el.taux_qc1) + " %")]), _vm._v(" "), _c("td", {
      staticClass: "text-nowrap text-right"
    }, [_vm._v(_vm._s(_vm.formatAmount(el.montant_qc1)))]), _vm._v(" "), _c("td", {
      staticClass: "text-nowrap text-center"
    }, [_vm._v(_vm._s(el.taux_qc2) + " %")]), _vm._v(" "), _c("td", {
      staticClass: "text-nowrap text-right"
    }, [_vm._v(_vm._s(_vm.formatAmount(el.montant_qc2)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(el.commentaire))])]);
  }), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "fw-bold text-right fw-bold vertical-middle"
  }, [_vm._v("Total")]), _vm._v(" "), _c("td", {
    staticClass: "text-nowrap text-right fw-bold"
  }, [_vm._v(_vm._s(_vm.formatAmount((_vm$data_tb20 = _vm.data_tb9) === null || _vm$data_tb20 === void 0 ? void 0 : _vm$data_tb20.revenu_nsia_total_colonne_emprunteur)))]), _vm._v(" "), _c("td"), _vm._v(" "), _c("td"), _vm._v(" "), _c("td"), _vm._v(" "), _c("td", {
    staticClass: "text-nowrap text-right fw-bold"
  }, [_vm._v(_vm._s(_vm.formatAmount((_vm$data_tb21 = _vm.data_tb9) === null || _vm$data_tb21 === void 0 ? void 0 : _vm$data_tb21.revenu_nsia_total_colonne_mensualite)))]), _vm._v(" "), _c("td"), _vm._v(" "), _c("td", {
    staticClass: "text-nowrap text-right fw-bold"
  }, [_vm._v(_vm._s(_vm.formatAmount((_vm$data_tb22 = _vm.data_tb9) === null || _vm$data_tb22 === void 0 ? void 0 : _vm$data_tb22.revenu_nsia_total_colonne_montant_pondere)))]), _vm._v(" "), _c("td", {
    staticClass: "text-nowrap text-center fw-bold"
  }, [_vm._v(_vm._s((_vm$data_tb23 = _vm.data_tb9) === null || _vm$data_tb23 === void 0 ? void 0 : _vm$data_tb23.revenu_nsia_total_colonne_taux_qc1) + " %\n                      ")]), _vm._v(" "), _c("td", {
    staticClass: "text-nowrap text-right fw-bold"
  }, [_vm._v(_vm._s(_vm.formatAmount((_vm$data_tb24 = _vm.data_tb9) === null || _vm$data_tb24 === void 0 ? void 0 : _vm$data_tb24.revenu_nsia_total_colonne_montant_qc1)))]), _vm._v(" "), _c("td", {
    staticClass: "text-nowrap text-center fw-bold"
  }, [_vm._v(_vm._s((_vm$data_tb25 = _vm.data_tb9) === null || _vm$data_tb25 === void 0 ? void 0 : _vm$data_tb25.revenu_nsia_total_colonne_taux_qc2) + " %\n                      ")]), _vm._v(" "), _c("td", {
    staticClass: "text-nowrap text-right fw-bold"
  }, [_vm._v(_vm._s(_vm.formatAmount((_vm$data_tb26 = _vm.data_tb9) === null || _vm$data_tb26 === void 0 ? void 0 : _vm$data_tb26.revenu_nsia_total_colonne_montant_qc2)))]), _vm._v(" "), _c("td")])], 2)])])])])])])]), _vm._v(" "), _c("hr"), _vm._v(" "), _c("table", {
    staticClass: "table table-borderless"
  }, [_c("tbody", {
    staticStyle: {
      "font-size": "0.9rem"
    }
  }, [_c("tr", [_c("td", {
    staticClass: "col-6"
  }, [_c("label", {
    staticClass: "fw-bold"
  }, [_vm._v("Revenu considéré : ")]), _vm._v(" " + _vm._s(_vm.formatAmount((_vm$data_tb27 = _vm.data_tb9) === null || _vm$data_tb27 === void 0 ? void 0 : _vm$data_tb27.revenu_nsia_total_colonne_montant_pondere)))]), _vm._v(" "), _c("td", {
    staticClass: "col-6"
  }, [_c("label", {
    staticClass: "fw-bold"
  }, [_vm._v("Quotité NSIA : ")]), _vm._v(" " + _vm._s((_vm$data_tb28 = _vm.data_tb9) === null || _vm$data_tb28 === void 0 ? void 0 : _vm$data_tb28.revenu_nsia_total_colonne_taux_qc1) + " %")])]), _vm._v(" "), _c("tr", [_c("td", [_c("label", {
    staticClass: "fw-bold"
  }, [_vm._v("Quotité cessible NSIA : ")]), _vm._v(" " + _vm._s(_vm.formatAmount((_vm$data_tb29 = _vm.data_tb9) === null || _vm$data_tb29 === void 0 ? void 0 : _vm$data_tb29.revenu_nsia_total_colonne_montant_qc1)))]), _vm._v(" "), _c("td", [_c("label", {
    staticClass: "fw-bold"
  }, [_vm._v("Quotité disponible NSIA : ")]), _vm._v(" " + _vm._s(_vm.formatAmount((_vm$data_tb30 = _vm.data_tb9) === null || _vm$data_tb30 === void 0 ? void 0 : _vm$data_tb30.quotite_cessible_disponible)))])]), _vm._v(" "), _c("tr", [_c("td", [_c("label", {
    staticClass: "fw-bold"
  }, [_vm._v("Quotité Général : ")]), _vm._v(" " + _vm._s((_vm$data_tb31 = _vm.data_tb9) === null || _vm$data_tb31 === void 0 ? void 0 : _vm$data_tb31.revenu_nsia_total_colonne_taux_qc2) + " %\n          ")]), _vm._v(" "), _c("td", [_c("label", {
    staticClass: "fw-bold"
  }, [_vm._v("Quotité cessible Général : ")]), _vm._v(" " + _vm._s(_vm.formatAmount((_vm$data_tb32 = _vm.data_tb9) === null || _vm$data_tb32 === void 0 ? void 0 : _vm$data_tb32.revenu_nsia_total_colonne_montant_qc2)) + " ")])]), _vm._v(" "), _c("tr", [_c("td", [_c("label", {
    staticClass: "fw-bold"
  }, [_vm._v("Quotité disponible Général : ")]), _vm._v(" " + _vm._s(_vm.formatAmount((_vm$data_tb33 = _vm.data_tb9) === null || _vm$data_tb33 === void 0 ? void 0 : _vm$data_tb33.quotite_cessible_disponible_general)))]), _vm._v(" "), _c("td")])])])]) : _vm._e(), _vm._v(" "), (_vm$data_tb34 = _vm.data_tb9) !== null && _vm$data_tb34 !== void 0 && _vm$data_tb34.frais_credits && ((_vm$data_tb35 = _vm.data_tb9) === null || _vm$data_tb35 === void 0 ? void 0 : _vm$data_tb35.frais_credits.length) > 0 ? _c("div", {
    staticClass: "col-12"
  }, [_c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-bordered"
  }, [_vm._m(5), _vm._v(" "), _c("tbody", [_c("tr", [_c("td", {
    staticClass: "p-0"
  }, [_c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-bordered mb-0",
    staticStyle: {
      "font-size": "0.9rem"
    }
  }, [_vm._m(6), _vm._v(" "), _c("tbody", [_vm._l((_vm$data_tb36 = _vm.data_tb9) === null || _vm$data_tb36 === void 0 ? void 0 : _vm$data_tb36.frais_credits, function (fc, ind) {
    return [fc.taux != "" && fc.taux != 0 ? _c("tr", {
      key: "fc" + ind
    }, [_c("td", [_vm._v(_vm._s(fc.libelle))]), _vm._v(" "), _c("td", {
      staticClass: "text-center"
    }, [_vm._v(_vm._s(fc.taux_initial) + " %")]), _vm._v(" "), _c("td", {
      staticClass: "text-center"
    }, [_vm._v(_vm._s(fc.taux) + " %")]), _vm._v(" "), _c("td", {
      staticClass: "text-right"
    }, [_vm._v(_vm._s(_vm.formatAmount(fc.valeur)))])]) : _vm._e()];
  }), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "text-right fw-bold",
    attrs: {
      colspan: "3"
    }
  }, [_vm._v("TOTAL")]), _vm._v(" "), _c("td", {
    staticClass: "text-right text-nowrap fw-bold"
  }, [_vm._v(_vm._s(_vm.formatAmount((_vm$data_tb37 = _vm.data_tb9) === null || _vm$data_tb37 === void 0 ? void 0 : _vm$data_tb37.total_frais_credit)))])])], 2)])])])])])])])]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "col-12"
  }, [_c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-bordered",
    staticStyle: {
      "font-size": "0.9rem"
    }
  }, [_vm._m(7), _vm._v(" "), _c("tbody", [_c("tr", [_c("td", [_c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-bordered"
  }, [_vm._m(8), _vm._v(" "), _c("tbody", [_c("tr", [_c("td", {
    staticClass: "vertical-middle fw-bold"
  }, [_vm._v("Salaire brut imposable")]), _vm._v(" "), _c("td", {
    staticClass: "vertical-middle text-right text-nowrap"
  }, [_vm._v(_vm._s(_vm.formatAmount((_vm$data_tb38 = _vm.data_tb9) === null || _vm$data_tb38 === void 0 ? void 0 : _vm$data_tb38.salaire_brut)) + "\n                      ")]), _vm._v(" "), _c("td", {
    staticClass: "vertical-middle fw-bold"
  }, [_vm._v("Total engagements actuels")]), _vm._v(" "), _c("td", {
    staticClass: "vertical-middle text-right text-nowrap"
  }, [_vm._v(_vm._s(_vm.formatAmount(_vm.total_engagements_actuels)) + "\n                      ")])]), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "vertical-middle fw-bold"
  }, [_vm._v("Net sur bulletin de salaire / Prime")]), _vm._v(" "), _c("td", {
    staticClass: "vertical-middle text-right text-nowrap"
  }, [_vm._v(_vm._s(_vm.formatAmount((_vm$data_tb39 = _vm.data_tb9) === null || _vm$data_tb39 === void 0 ? void 0 : _vm$data_tb39.revenu_nsia_total_colonne_montant_pondere)))]), _vm._v(" "), _c("td", {
    staticClass: "vertical-middle fw-bold"
  }, [_vm._v("Charge emprunt sollicité")]), _vm._v(" "), _c("td", {
    staticClass: "vertical-middle text-right text-nowrap"
  }, [_vm._v(_vm._s(_vm.formatAmount(_vm.echeance_total)))])]), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "vertical-middle fw-bold"
  }, [_vm._v("Total revenu net mensuel")]), _vm._v(" "), _c("td", {
    staticClass: "vertical-middle text-right text-nowrap"
  }, [_vm._v(_vm._s(_vm.formatAmount(_vm.total_revenu_net_mensuel)) + "\n                      ")]), _vm._v(" "), _c("td", {
    staticClass: "vertical-middle fw-bold"
  }, [_vm._v("Total engagements mensuels")]), _vm._v(" "), _c("td", {
    staticClass: "vertical-middle text-right text-nowrap"
  }, [_vm._v(_vm._s(_vm.formatAmount(_vm.total_engagements_mensuels)) + "\n                      ")])]), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "vertical-middle fw-bold"
  }, [_vm._v("Nouveau disponible net mensuel")]), _vm._v(" "), _c("td", {
    staticClass: "vertical-middle text-right text-nowrap"
  }, [_vm._v(_vm._s(_vm.formatAmount(_vm.nouveau_disponible_net_mensuel)))]), _vm._v(" "), _c("td", {
    staticClass: "vertical-middle fw-bold"
  }, [_vm._v("Coefficient d'endettement")]), _vm._v(" "), _c("td", {
    staticClass: "vertical-middle text-right text-nowrap"
  }, [_vm._v(_vm._s(_vm.formatAmount(_vm.coefficient_d_endettement)) + " %\n                      ")])]), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "vertical-middle fw-bold"
  }, [_vm._v("Quotité cessible")]), _vm._v(" "), _c("td", {
    staticClass: "vertical-middle text-right text-nowrap"
  }, [_vm._v(_vm._s(_vm.formatAmount(_vm.montant_quotite_cessible)) + "\n                      ")]), _vm._v(" "), _c("td", {
    staticClass: "vertical-middle fw-bold"
  }, [_vm._v("Quotité cessible disponible")]), _vm._v(" "), _c("td", {
    staticClass: "vertical-middle text-right text-nowrap"
  }, [_vm._v(_vm._s(_vm.formatAmount(_vm.montant_quotite_cessible_disponible)))])])])])]), _vm._v(" "), _c("div", {
    staticClass: "text-right"
  }, [_c("label", {
    staticClass: "fw-bold"
  }, [_vm._v("QUOTITE CESSIBLE NORMALE : " + _vm._s((_vm$data_tb40 = _vm.data_tb9) === null || _vm$data_tb40 === void 0 ? void 0 : _vm$data_tb40.revenu_nsia_total_colonne_taux_qc1) + " %")])])])])])])])]), _vm._v(" "), (_vm$data_tb41 = _vm.data_tb9) !== null && _vm$data_tb41 !== void 0 && _vm$data_tb41.rentabilite ? _c("div", {
    staticClass: "col-12"
  }, [_c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-bordered",
    staticStyle: {
      "font-size": "0.9rem"
    }
  }, [_vm._m(9), _vm._v(" "), _c("tbody", [_c("tr", [_c("td", [_c("h6", [_vm._v("Information du prêt")]), _vm._v(" "), _c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-bordered"
  }, [_vm._m(10), _vm._v(" "), _c("tbody", [_c("tr", [_c("td", {
    staticClass: "text-right"
  }, [_vm._v(_vm._s(_vm.formatAmount((_vm$data_tb42 = _vm.data_tb9) === null || _vm$data_tb42 === void 0 ? void 0 : _vm$data_tb42.montant_credit)))]), _vm._v(" "), _c("td", {
    staticClass: "text-center"
  }, [_vm._v(_vm._s((_vm$data_tb43 = _vm.data_tb9) === null || _vm$data_tb43 === void 0 ? void 0 : _vm$data_tb43.taux) + " %")]), _vm._v(" "), _c("td", {
    staticClass: "text-center"
  }, [_vm._v(_vm._s((_vm$data_tb44 = _vm.data_tb9) === null || _vm$data_tb44 === void 0 ? void 0 : _vm$data_tb44.duree_credit))]), _vm._v(" "), _c("td", {
    staticClass: "text-right"
  }, [_vm._v(_vm._s(_vm.formatAmount((_vm$data_tb45 = _vm.data_tb9) === null || _vm$data_tb45 === void 0 ? void 0 : _vm$data_tb45.r_interet)))]), _vm._v(" "), _c("td", {
    staticClass: "text-center"
  }, [_vm._v(_vm._s((_vm$data_tb46 = _vm.data_tb9) === null || _vm$data_tb46 === void 0 ? void 0 : _vm$data_tb46.mode_tranche))]), _vm._v(" "), _c("td", {
    staticClass: "text-right"
  }, [_vm._v(_vm._s(_vm.formatAmount((_vm$data_tb47 = _vm.data_tb9) === null || _vm$data_tb47 === void 0 ? void 0 : _vm$data_tb47.r_mensualite)))])])])])]), _vm._v(" "), _c("h6", [_vm._v("Frais")]), _vm._v(" "), _c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-bordered"
  }, [_vm._m(11), _vm._v(" "), _c("tbody", [_vm._l((_vm$data_tb48 = _vm.data_tb9) === null || _vm$data_tb48 === void 0 ? void 0 : _vm$data_tb48.frais_credits, function (el, ind) {
    return [el.valeur != "" && el.valeur != 0 ? _c("tr", {
      key: "f_" + ind
    }, [_c("td", [_vm._v(_vm._s(el.libelle))]), _vm._v(" "), _c("td", {
      staticClass: "text-center"
    }, [_vm._v(_vm._s(el.taux) + " %")]), _vm._v(" "), _c("td", {
      staticClass: "text-right"
    }, [_vm._v(_vm._s(_vm.formatAmount(el.valeur)))])]) : _vm._e()];
  }), _vm._v(" "), _vm._l((_vm$data_tb49 = _vm.data_tb9) === null || _vm$data_tb49 === void 0 ? void 0 : _vm$data_tb49.frais_garanties, function (el, ind) {
    return [el.valeur != "" && el.valeur != 0 ? _c("tr", {
      key: "f__" + ind
    }, [_c("td", [_vm._v(_vm._s(el.libelle))]), _vm._v(" "), _c("td", {
      staticClass: "text-center"
    }, [_vm._v(_vm._s(el.taux) + " %")]), _vm._v(" "), _c("td", {
      staticClass: "text-right"
    }, [_vm._v(_vm._s(_vm.formatAmount(el.valeur)))])]) : _vm._e()];
  }), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "text-right",
    attrs: {
      colspan: "2"
    }
  }, [_vm._v("Total")]), _vm._v(" "), _c("td", {
    staticClass: "text-right",
    staticStyle: {
      "background-color": "#2c3e50",
      color: "#ffffff"
    }
  }, [_vm._v(_vm._s(_vm.formatAmount(_vm.convertInt((_vm$data_tb50 = _vm.data_tb9) === null || _vm$data_tb50 === void 0 ? void 0 : _vm$data_tb50.total_frais_credit) + _vm.convertInt((_vm$data_tb51 = _vm.data_tb9) === null || _vm$data_tb51 === void 0 ? void 0 : _vm$data_tb51.total_frais_garantie))))])])], 2)])]), _vm._v(" "), _c("h6", [_vm._v("Information de rentabilité")]), _vm._v(" "), _c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-bordered"
  }, [_vm._m(12), _vm._v(" "), _c("tbody", [_c("tr", [_c("td", {
    staticClass: "text-center"
  }, [_vm._v(_vm._s((_vm$data_tb52 = _vm.data_tb9) === null || _vm$data_tb52 === void 0 || (_vm$data_tb52 = _vm$data_tb52.rentabilite) === null || _vm$data_tb52 === void 0 ? void 0 : _vm$data_tb52.coutCapital) + " %")]), _vm._v(" "), _c("td", {
    staticClass: "text-right"
  }, [_vm._v(_vm._s(_vm._f("formatNumber")(Math.ceil((_vm$data_tb53 = _vm.data_tb9) === null || _vm$data_tb53 === void 0 || (_vm$data_tb53 = _vm$data_tb53.rentabilite) === null || _vm$data_tb53 === void 0 ? void 0 : _vm$data_tb53.cashflow))))]), _vm._v(" "), _c("td", {
    staticClass: "text-center"
  }, [_vm._v(_vm._s((_vm$data_tb54 = _vm.data_tb9) === null || _vm$data_tb54 === void 0 || (_vm$data_tb54 = _vm$data_tb54.rentabilite) === null || _vm$data_tb54 === void 0 ? void 0 : _vm$data_tb54.rentabilitepret) + " %")]), _vm._v(" "), _c("td", {
    staticClass: "text-center"
  }, [_vm._v(_vm._s((_vm$data_tb55 = _vm.data_tb9) === null || _vm$data_tb55 === void 0 || (_vm$data_tb55 = _vm$data_tb55.rentabilite) === null || _vm$data_tb55 === void 0 ? void 0 : _vm$data_tb55.rentabiliteAnnuel) + " %")])])])])])])])])])])]) : _vm._e()]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "justify-content-center"
  }, [_c("div", {
    staticClass: "head-memorandum-title px-3 mb-2",
    staticStyle: {
      "text-align": "center"
    }
  }, [_vm._v("SIMULATEUR DE PRET")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", {
    staticClass: "bg-ed-primary"
  }, [_c("tr", [_c("th", {
    staticClass: "text-center py-2 m-0"
  }, [_c("b", {
    staticClass: "text-uppercase"
  }, [_vm._v("Engagement en cours")])])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("th", [_vm._v("Engagement")]), _vm._v(" "), _c("th", [_vm._v("Type de prêt")]), _vm._v(" "), _c("th", {
    staticClass: "text-nowrap"
  }, [_vm._v("Durée du crédit "), _c("br"), _vm._v(" (En mois)")]), _vm._v(" "), _c("th", [_vm._v("Date d'échéance")]), _vm._v(" "), _c("th", [_vm._v("Montant")]), _vm._v(" "), _c("th", [_vm._v("En cours")]), _vm._v(" "), _c("th", [_vm._v("Périodicité")]), _vm._v(" "), _c("th", [_vm._v("Montant de la périodicité")]), _vm._v(" "), _c("th", [_vm._v("Mensualité")]), _vm._v(" "), _c("th", [_vm._v("Rachat")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", {
    staticClass: "bg-ed-primary"
  }, [_c("tr", [_c("th", {
    staticClass: "text-center py-2 m-0"
  }, [_c("b", {
    staticClass: "text-uppercase"
  }, [_vm._v("Revenu domicilié à la NSIA BANQUE-CI")])])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("th", {
    staticClass: "vertical-middle text-nowrap",
    staticStyle: {
      "min-width": "100px"
    }
  }, [_vm._v("Revenu")]), _vm._v(" "), _c("th", {
    staticClass: "vertical-middle text-nowrap"
  }, [_vm._v("Montant")]), _vm._v(" "), _c("th", {
    staticClass: "vertical-middle text-nowrap"
  }, [_vm._v("Eligible")]), _vm._v(" "), _c("th", {
    staticClass: "vertical-middle text-nowrap text-center"
  }, [_vm._v("SR")]), _vm._v(" "), _c("th", {
    staticClass: "vertical-middle text-nowrap"
  }, [_vm._v("Périodicité")]), _vm._v(" "), _c("th", {
    staticClass: "vertical-middle text-nowrap"
  }, [_vm._v("Mensualité")]), _vm._v(" "), _c("th", {
    staticClass: "vertical-middle text-nowrap"
  }, [_vm._v("Taux")]), _vm._v(" "), _c("th", {
    staticClass: "vertical-middle text-nowrap"
  }, [_vm._v("Montant pondére")]), _vm._v(" "), _c("th", {
    staticClass: "vertical-middle text-nowrap"
  }, [_vm._v("TQC NSIA")]), _vm._v(" "), _c("th", {
    staticClass: "vertical-middle text-nowrap"
  }, [_vm._v("QC NSIA")]), _vm._v(" "), _c("th", {
    staticClass: "vertical-middle text-nowrap"
  }, [_vm._v("TQC Général")]), _vm._v(" "), _c("th", {
    staticClass: "vertical-middle text-nowrap"
  }, [_vm._v("QC Général")]), _vm._v(" "), _c("th", {
    staticClass: "vertical-middle text-nowrap",
    staticStyle: {
      "min-width": "100px"
    }
  }, [_vm._v("Commentaire")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", {
    staticClass: "bg-ed-primary"
  }, [_c("tr", [_c("th", {
    staticClass: "text-center py-2 m-0"
  }, [_c("b", {
    staticClass: "text-uppercase"
  }, [_vm._v("Frais de crédit")])])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("th", [_vm._v("Libellé")]), _vm._v(" "), _c("th", [_vm._v("Taux du crédit")]), _vm._v(" "), _c("th", [_vm._v("Taux accordé")]), _vm._v(" "), _c("th", [_vm._v("Valeur")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", {
    staticClass: "bg-ed-primary"
  }, [_c("tr", [_c("th", {
    staticClass: "text-center py-2 m-0"
  }, [_c("b", {
    staticClass: "text-uppercase"
  }, [_vm._v("Situation financière")])])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", {
    staticStyle: {
      "background-color": "#2c3e50",
      color: "#ffffff"
    }
  }, [_c("td", {
    staticClass: "th text-nowrap text-center p-2",
    attrs: {
      colspan: "2"
    }
  }, [_c("b", [_vm._v("Revenu nets mensuels")])]), _vm._v(" "), _c("td", {
    staticClass: "th text-nowrap text-center p-2",
    attrs: {
      colspan: "2"
    }
  }, [_c("b", [_vm._v("Engagements mensuels")])])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", {
    staticClass: "bg-ed-primary"
  }, [_c("tr", [_c("th", {
    staticClass: "text-center py-2 m-0"
  }, [_c("b", {
    staticClass: "text-uppercase"
  }, [_vm._v("Caractéristiques du prêt")])])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", {
    staticStyle: {
      "background-color": "#2c3e50",
      color: "#ffffff"
    }
  }, [_c("td", {
    staticClass: "th fw-bold p-2"
  }, [_vm._v("Montant du prêt")]), _vm._v(" "), _c("td", {
    staticClass: "th fw-bold p-2"
  }, [_vm._v("Taux du prêt")]), _vm._v(" "), _c("td", {
    staticClass: "th fw-bold p-2"
  }, [_vm._v("Durée du prêt (Mois)")]), _vm._v(" "), _c("td", {
    staticClass: "th fw-bold p-2"
  }, [_vm._v("Intérêt du prêt")]), _vm._v(" "), _c("td", {
    staticClass: "th fw-bold p-2"
  }, [_vm._v("Périodicité")]), _vm._v(" "), _c("td", {
    staticClass: "th fw-bold p-2"
  }, [_vm._v("Echéance")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", {
    staticStyle: {
      "background-color": "#2c3e50",
      color: "#ffffff"
    }
  }, [_c("td", {
    staticClass: "th fw-bold p-2"
  }, [_vm._v("Libellé")]), _vm._v(" "), _c("td", {
    staticClass: "th fw-bold p-2"
  }, [_vm._v("Taux")]), _vm._v(" "), _c("td", {
    staticClass: "th fw-bold p-2"
  }, [_vm._v("Montant")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", {
    staticStyle: {
      "background-color": "#2c3e50",
      color: "#ffffff"
    }
  }, [_c("td", {
    staticClass: "th fw-bold p-2 col-2",
    staticStyle: {
      "vertical-align": "middle"
    }
  }, [_vm._v("Coût du capital")]), _vm._v(" "), _c("td", {
    staticClass: "th fw-bold p-2 col-3",
    staticStyle: {
      "vertical-align": "middle"
    }
  }, [_vm._v("Cash Flow Actualisé")]), _vm._v(" "), _c("td", {
    staticClass: "th fw-bold p-2 col-4",
    staticStyle: {
      "vertical-align": "middle"
    }
  }, [_vm._v("Rentabilité sur la durée du\n                        prêt")]), _vm._v(" "), _c("td", {
    staticClass: "th fw-bold p-2 col-3",
    staticStyle: {
      "vertical-align": "middle"
    }
  }, [_vm._v("Rentabilité annuelle du prêt\n                      ")])])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/scene_memo/PPO0.vue?vue&type=style&index=0&id=2b53429a&lang=css&scoped=true":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/scene_memo/PPO0.vue?vue&type=style&index=0&id=2b53429a&lang=css&scoped=true ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.bg-grey[data-v-2b53429a] {\r\n  background-color: #f4f3f3;\n}\nth[data-v-2b53429a] {\r\n  background: #f4f3f3 !important;\n}\n.vertical-middle[data-v-2b53429a] {\r\n  vertical-align: middle;\n}\n.font-bold[data-v-2b53429a] {\r\n  font-weight: bold;\n}\n.head-memorandum-title[data-v-2b53429a] {\r\n  margin-top: 15px;\r\n  padding: 16px;\r\n  color: #fff;\r\n  font-weight: bold;\r\n  background-color: #34495e;\r\n  border: 2px solid #575759;\r\n  box-shadow: 1px 3px 4px #ddd;\r\n  font-size: 16px;\r\n  text-align: center;\r\n  text-transform: uppercase;\r\n  border-radius: 10px;\r\n  margin-bottom: 15px;\n}\n.text-uppercase[data-v-2b53429a] {\r\n  text-transform: uppercase;\n}\n._border_right[data-v-2b53429a] {\r\n  border-right: 1px solid;\n}\n._border_bottom[data-v-2b53429a] {\r\n  border-bottom: 1px solid;\n}\n.pl-10-px[data-v-2b53429a] {\r\n  padding-left: 10px;\n}\n.pl-30-px[data-v-2b53429a] {\r\n  padding-left: 30px;\n}\n.pl-3[data-v-2b53429a] {\r\n  padding-left: 10px;\n}\n.form-check-input[data-v-2b53429a]:disabled {\r\n  opacity: 1;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/scene_memo/PPO0.vue?vue&type=style&index=0&id=2b53429a&lang=css&scoped=true":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/scene_memo/PPO0.vue?vue&type=style&index=0&id=2b53429a&lang=css&scoped=true ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PPO0_vue_vue_type_style_index_0_id_2b53429a_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PPO0.vue?vue&type=style&index=0&id=2b53429a&lang=css&scoped=true */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/scene_memo/PPO0.vue?vue&type=style&index=0&id=2b53429a&lang=css&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PPO0_vue_vue_type_style_index_0_id_2b53429a_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PPO0_vue_vue_type_style_index_0_id_2b53429a_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/offview/bank/nsia/memo/scene_memo/PPO0.vue":
/*!****************************************************************************!*\
  !*** ./resources/js/components/offview/bank/nsia/memo/scene_memo/PPO0.vue ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PPO0_vue_vue_type_template_id_2b53429a_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PPO0.vue?vue&type=template&id=2b53429a&scoped=true */ "./resources/js/components/offview/bank/nsia/memo/scene_memo/PPO0.vue?vue&type=template&id=2b53429a&scoped=true");
/* harmony import */ var _PPO0_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PPO0.vue?vue&type=script&lang=js */ "./resources/js/components/offview/bank/nsia/memo/scene_memo/PPO0.vue?vue&type=script&lang=js");
/* harmony import */ var _PPO0_vue_vue_type_style_index_0_id_2b53429a_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PPO0.vue?vue&type=style&index=0&id=2b53429a&lang=css&scoped=true */ "./resources/js/components/offview/bank/nsia/memo/scene_memo/PPO0.vue?vue&type=style&index=0&id=2b53429a&lang=css&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _PPO0_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _PPO0_vue_vue_type_template_id_2b53429a_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _PPO0_vue_vue_type_template_id_2b53429a_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "2b53429a",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/offview/bank/nsia/memo/scene_memo/PPO0.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/offview/bank/nsia/memo/scene_memo/PPO0.vue?vue&type=script&lang=js":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/offview/bank/nsia/memo/scene_memo/PPO0.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PPO0_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PPO0.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/scene_memo/PPO0.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PPO0_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/offview/bank/nsia/memo/scene_memo/PPO0.vue?vue&type=style&index=0&id=2b53429a&lang=css&scoped=true":
/*!************************************************************************************************************************************!*\
  !*** ./resources/js/components/offview/bank/nsia/memo/scene_memo/PPO0.vue?vue&type=style&index=0&id=2b53429a&lang=css&scoped=true ***!
  \************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PPO0_vue_vue_type_style_index_0_id_2b53429a_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PPO0.vue?vue&type=style&index=0&id=2b53429a&lang=css&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/scene_memo/PPO0.vue?vue&type=style&index=0&id=2b53429a&lang=css&scoped=true");


/***/ }),

/***/ "./resources/js/components/offview/bank/nsia/memo/scene_memo/PPO0.vue?vue&type=template&id=2b53429a&scoped=true":
/*!**********************************************************************************************************************!*\
  !*** ./resources/js/components/offview/bank/nsia/memo/scene_memo/PPO0.vue?vue&type=template&id=2b53429a&scoped=true ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PPO0_vue_vue_type_template_id_2b53429a_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PPO0_vue_vue_type_template_id_2b53429a_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PPO0_vue_vue_type_template_id_2b53429a_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PPO0.vue?vue&type=template&id=2b53429a&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/scene_memo/PPO0.vue?vue&type=template&id=2b53429a&scoped=true");


/***/ })

}]);