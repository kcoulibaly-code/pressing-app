"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_offview_bank_afg_memo_proposition_credit_DCPP-DCP2_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/proposition_credit/DCPP-DCP2.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/proposition_credit/DCPP-DCP2.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    dossier_credit: Object
  },
  mounted: function mounted() {
    this.getEcoursSolicite();
    this.getCompteCourant();
    this.getNiveauPouvoir();
  },
  data: function data() {
    var _this$dossier_credit, _this$dossier_credit2, _this$dossier_credit3, _this$dossier_credit4, _this$dossier_credit5, _this$dossier_credit6;
    return {
      cred_tb_120001: (_this$dossier_credit = this.dossier_credit) === null || _this$dossier_credit === void 0 ? void 0 : _this$dossier_credit.cred_pub_tb_120001,
      cred_tb_120003: (_this$dossier_credit2 = this.dossier_credit) === null || _this$dossier_credit2 === void 0 ? void 0 : _this$dossier_credit2.cred_pub_tb_120003,
      cred_tb_120004: (_this$dossier_credit3 = this.dossier_credit) === null || _this$dossier_credit3 === void 0 ? void 0 : _this$dossier_credit3.cred_pub_tb_120004,
      cred_tb_10008: (_this$dossier_credit4 = this.dossier_credit) === null || _this$dossier_credit4 === void 0 ? void 0 : _this$dossier_credit4.cred_pub_tb_10008,
      primary_owner_detail: (_this$dossier_credit5 = this.dossier_credit) === null || _this$dossier_credit5 === void 0 ? void 0 : _this$dossier_credit5.primary_owner_detail,
      totalMontant: 0,
      niveau_pouvoir: "",
      cred_pub_tb_14073: (_this$dossier_credit6 = this.dossier_credit) === null || _this$dossier_credit6 === void 0 ? void 0 : _this$dossier_credit6.cred_pub_tb_14073
    };
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
    },
    getEcoursSolicite: function getEcoursSolicite() {
      var _this$cred_tb_,
        _this$cred_tb_2,
        _this = this;
      if (!((_this$cred_tb_ = this.cred_tb_120004) !== null && _this$cred_tb_ !== void 0 && _this$cred_tb_.facilites_sollicitees)) return;
      (_this$cred_tb_2 = this.cred_tb_120004) === null || _this$cred_tb_2 === void 0 || _this$cred_tb_2.facilites_sollicitees.forEach(function (el) {
        var _el$montant_demande;
        _this.encours += parseInt(el.encours);
        _this.totalMontant += parseInt(el === null || el === void 0 || (_el$montant_demande = el.montant_demande) === null || _el$montant_demande === void 0 || (_el$montant_demande = _el$montant_demande.toString()) === null || _el$montant_demande === void 0 ? void 0 : _el$montant_demande.replace(/\s/g, ""), 10);
      });
    },
    formatAmount: function formatAmount(x) {
      var _x$toString;
      return x === null || x === void 0 || (_x$toString = x.toString()) === null || _x$toString === void 0 ? void 0 : _x$toString.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    },
    getCompteCourant: function getCompteCourant() {
      var _this$cred_tb_3, _this$cred_tb_4;
      if (!((_this$cred_tb_3 = this.cred_tb_120003) !== null && _this$cred_tb_3 !== void 0 && _this$cred_tb_3.comptes)) return;
      var compte = {
        dateCompteCourant: [],
        soldeCompte: 0,
        soldeAutreCompte: 0
      };
      var soldeCompte = 0;
      var dateCompteCourant = [];
      var soldeAutreCompte = 0;
      (_this$cred_tb_4 = this.cred_tb_120003) === null || _this$cred_tb_4 === void 0 || _this$cred_tb_4.comptes.forEach(function (el, index) {
        if ((el === null || el === void 0 ? void 0 : el.type) == "Compte courant") {
          var _el$balance;
          dateCompteCourant.push({
            date: el === null || el === void 0 ? void 0 : el.date_ouverture_compte,
            banque: el === null || el === void 0 ? void 0 : el.banque
          });
          soldeCompte += parseInt(el === null || el === void 0 || (_el$balance = el.balance) === null || _el$balance === void 0 ? void 0 : _el$balance.toString().replace(/\s/g, ""));
        } else {
          var _el$balance2;
          soldeAutreCompte += parseInt(el === null || el === void 0 || (_el$balance2 = el.balance) === null || _el$balance2 === void 0 ? void 0 : _el$balance2.toString().replace(/\s/g, ""));
        }
      });
      compte.soldeCompte = soldeCompte;
      compte.dateCompteCourant = dateCompteCourant;
      compte.soldeAutreCompte = soldeAutreCompte;

      // console.log('compte',compte)
      return compte;
    },
    getNiveauPouvoir: function getNiveauPouvoir() {
      var _this$dossier_credit7, _this$dossier_credit$, _this$dossier_credit8, _this$dossier_credit$2, _this$dossier_credit9, _final_pub_workflow$r, _final_pub_workflow;
      if (((_this$dossier_credit7 = this.dossier_credit) === null || _this$dossier_credit7 === void 0 || (_this$dossier_credit7 = _this$dossier_credit7.workflow) === null || _this$dossier_credit7 === void 0 || (_this$dossier_credit7 = _this$dossier_credit7.current_stage) === null || _this$dossier_credit7 === void 0 ? void 0 : _this$dossier_credit7.stage_id) == 0) {
        return;
      }
      var pub_workflow = (_this$dossier_credit$ = (_this$dossier_credit8 = this.dossier_credit) === null || _this$dossier_credit8 === void 0 ? void 0 : _this$dossier_credit8.pub_workflow) !== null && _this$dossier_credit$ !== void 0 ? _this$dossier_credit$ : [];
      var final_outcome = (_this$dossier_credit$2 = (_this$dossier_credit9 = this.dossier_credit) === null || _this$dossier_credit9 === void 0 ? void 0 : _this$dossier_credit9.final_outcome) !== null && _this$dossier_credit$2 !== void 0 ? _this$dossier_credit$2 : null;
      var final_pub_workflow = pub_workflow.at(-1);
      if (!['', null, undefined].includes(final_outcome) && (final_outcome === null || final_outcome === void 0 ? void 0 : final_outcome.outcome) != 0) {
        final_pub_workflow = pub_workflow[final_outcome === null || final_outcome === void 0 ? void 0 : final_outcome.stage_id];
      }
      this.niveau_pouvoir = (_final_pub_workflow$r = (_final_pub_workflow = final_pub_workflow) === null || _final_pub_workflow === void 0 ? void 0 : _final_pub_workflow.responsible_role_sigle) !== null && _final_pub_workflow$r !== void 0 ? _final_pub_workflow$r : "";
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/proposition_credit/DCPP-DCP2.vue?vue&type=template&id=1b3675bd&scoped=true":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/proposition_credit/DCPP-DCP2.vue?vue&type=template&id=1b3675bd&scoped=true ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm$cred_tb_, _vm$dossier_credit, _vm$getCompteCourant, _vm$getCompteCourant2, _vm$getCompteCourant3, _vm$getCompteCourant4, _vm$cred_tb_2, _vm$cred_tb_3, _vm$cred_tb_4, _vm$cred_tb_5, _vm$cred_tb_6, _vm$cred_tb_7, _vm$cred_tb_8, _vm$cred_tb_9, _vm$cred_pub_tb_, _vm$cred_pub_tb_2, _vm$cred_pub_tb_3, _vm$cred_pub_tb_4, _vm$cred_tb_0;
  var _vm = this,
    _c = _vm._self._c;
  return _vm.cred_tb_120004 || _vm.cred_tb_120003 || _vm.cred_tb_120001 ? _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12 p-2"
  }, [_vm.cred_tb_120004 ? _c("div", [_c("span", {
    staticClass: "fw-bold",
    staticStyle: {
      "text-decoration": "underline"
    }
  }, [_vm._v("\n                DATE DE LA DEMANDE\n            ")]), _vm._v("\n            :\n            "), _c("span", [_c("i", [_vm._v("\n                    " + _vm._s(_vm.formatDate((_vm$cred_tb_ = _vm.cred_tb_120004) === null || _vm$cred_tb_ === void 0 ? void 0 : _vm$cred_tb_.date_reception_demande_client)) + "\n                ")])])]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "d-flex justify-content-between"
  }, [((_vm$dossier_credit = _vm.dossier_credit) === null || _vm$dossier_credit === void 0 || (_vm$dossier_credit = _vm$dossier_credit.caf_recorded_file) === null || _vm$dossier_credit === void 0 ? void 0 : _vm$dossier_credit.is_prospect) == "Oui" ? [_c("span", {
    staticClass: "fw-bold",
    staticStyle: {
      "text-decoration": "underline"
    }
  }, [_vm._v("\n                    SOLDE : PROSPECT\n                ")])] : [_vm.cred_tb_120003 ? _c("div", {
    staticClass: "d-flex justify-content-between flex-column"
  }, [_c("div", [_c("span", {
    staticClass: "fw-bold",
    staticStyle: {
      "text-decoration": "underline"
    }
  }, [_vm._v("\n                            SOLDE COMPTE COURANT\n                        ")]), _vm._v("\n                        :\n                        "), _c("span", [(_vm$getCompteCourant = _vm.getCompteCourant()) !== null && _vm$getCompteCourant !== void 0 && _vm$getCompteCourant.soldeCompte ? _c("b", [_vm._v("\n                                " + _vm._s(_vm._f("formatNumber")((_vm$getCompteCourant2 = _vm.getCompteCourant()) === null || _vm$getCompteCourant2 === void 0 ? void 0 : _vm$getCompteCourant2.soldeCompte)) + "\n                            ")]) : _vm._e()])]), _vm._v(" "), _c("div", [_c("span", {
    staticClass: "fw-bold",
    staticStyle: {
      "text-decoration": "underline"
    }
  }, [_vm._v("\n                            SOLDE AUTRES COMPTES\n                        ")]), _vm._v("\n                        :\n                        "), _c("span", [(_vm$getCompteCourant3 = _vm.getCompteCourant()) !== null && _vm$getCompteCourant3 !== void 0 && _vm$getCompteCourant3.soldeAutreCompte ? _c("b", [_vm._v("\n                                " + _vm._s(_vm._f("formatNumber")((_vm$getCompteCourant4 = _vm.getCompteCourant()) === null || _vm$getCompteCourant4 === void 0 ? void 0 : _vm$getCompteCourant4.soldeAutreCompte)) + "\n                            ")]) : _vm._e()])])]) : _vm._e()]], 2), _vm._v(" "), _vm.cred_tb_120004 ? _c("div", {
    staticClass: "mt-3 mb-3"
  }, [_vm._m(0), _vm._v("\n            :\n            "), _c("span", [_vm._v("\n                " + _vm._s(_vm._f("formatNumber")(_vm.totalMontant)) + "\n            ")])]) : _vm._e()]), _vm._v(" "), _c("div", {
    staticClass: "col-12 p-2"
  }, [_c("div", {
    staticClass: "table-responsive p-1"
  }, [_c("table", {
    staticClass: "table table-bordered"
  }, [_c("tbody", [_vm.authenticatedUser.filiale == "AFGB ML" ? _c("tr", [_c("th", [_vm._v("Forfait")]), _vm._v(" "), _vm.cred_tb_120004 ? _c("td", [_c("div", {
    staticClass: "d-flex justify-content-between"
  }, [_c("div", {
    staticClass: "d-flex align-items-center justify-content-between p-1",
    staticStyle: {
      width: "max-content"
    }
  }, [_c("label", {
    staticStyle: {
      "margin-right": "10px"
    },
    attrs: {
      "for": ""
    }
  }, [_vm._v("OUI")]), _vm._v(" "), _c("input", {
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
      checked: ((_vm$cred_tb_2 = _vm.cred_tb_120004) === null || _vm$cred_tb_2 === void 0 ? void 0 : _vm$cred_tb_2.forfait) == "Oui"
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "d-flex align-items-center justify-content-between p-1",
    staticStyle: {
      width: "max-content"
    }
  }, [_c("label", {
    staticStyle: {
      "margin-right": "10px"
    },
    attrs: {
      "for": ""
    }
  }, [_vm._v("NON")]), _vm._v(" "), _c("input", {
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
      checked: ((_vm$cred_tb_3 = _vm.cred_tb_120004) === null || _vm$cred_tb_3 === void 0 ? void 0 : _vm$cred_tb_3.forfait) == "Non"
    }
  })])])]) : _vm._e()]) : _vm._e(), _vm._v(" "), _vm.cred_tb_120001 ? [((_vm$cred_tb_4 = _vm.cred_tb_120004) === null || _vm$cred_tb_4 === void 0 ? void 0 : _vm$cred_tb_4.forfait) == "Non" && this.authenticatedUser.filiale == "AFGB ML" ? _c("tr", [_c("th", [_vm._v("Si hors forfait (motifs)")]), _vm._v(" "), _c("td", [_c("div", {
    staticClass: "row"
  }, _vm._l((_vm$cred_tb_5 = _vm.cred_tb_120004) === null || _vm$cred_tb_5 === void 0 ? void 0 : _vm$cred_tb_5.list_hors_forfait, function (el, ind_) {
    return _c("div", {
      key: ind_,
      staticClass: "col-6"
    }, [_c("div", {
      staticClass: "d-flex align-items-center justify-content-between p-1",
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
    }, [_vm._v("\n                                                " + _vm._s(el.libelle) + "\n                                            ")])])]);
  }), 0)])]) : _vm._e()] : _vm._e(), _vm._v(" "), _c("tr", [_c("th", [_vm._v("Niveau de Pouvoir")]), _vm._v(" "), _c("td", [_c("div", {
    staticClass: "d-flex justify-content-between"
  }, [_c("div", {
    staticClass: "d-flex align-items-center justify-content-between p-1",
    staticStyle: {
      width: "max-content"
    }
  }, [_c("label", {
    staticStyle: {
      "margin-right": "10px"
    },
    attrs: {
      "for": ""
    }
  }, [_vm._v("\n                                        DCPP\n                                    ")]), _vm._v(" "), _c("input", {
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
      checked: ["RA", "RRA", "MO", "DCPP"].includes(_vm.niveau_pouvoir)
    }
  })]), _vm._v(" "), _c("div", [_c("div", {
    staticClass: "d-flex align-items-center justify-content-between p-1",
    staticStyle: {
      width: "max-content"
    }
  }, [_c("label", {
    staticStyle: {
      "margin-right": "10px"
    },
    attrs: {
      "for": ""
    }
  }, [_vm._v("DE")]), _vm._v(" "), _c("input", {
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
      checked: ["R_ARC", "DE"].includes(_vm.niveau_pouvoir)
    }
  })])]), _vm._v(" "), _c("div", [_c("div", {
    staticClass: "d-flex align-items-center justify-content-between p-1",
    staticStyle: {
      width: "max-content"
    }
  }, [_c("label", {
    staticStyle: {
      "margin-right": "10px"
    },
    attrs: {
      "for": ""
    }
  }, [_vm._v("CIC")]), _vm._v(" "), _c("input", {
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
      checked: ["DGA", "DG"].includes(_vm.niveau_pouvoir)
    }
  })])])]), _vm._v(" "), _c("div", {
    staticClass: "d-flex justify-content-around"
  }, [_c("div", [_c("div", {
    staticClass: "d-flex align-items-center justify-content-between p-1",
    staticStyle: {
      width: "max-content"
    }
  }, [_c("label", {
    staticStyle: {
      "margin-right": "10px"
    },
    attrs: {
      "for": ""
    }
  }, [_vm._v("CSC")]), _vm._v(" "), _c("input", {
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
      checked: ["DE_CSC", "CSC"].includes(_vm.niveau_pouvoir)
    }
  })])])])])]), _vm._v(" "), _vm.cred_tb_120001 ? _c("tr", [_c("th", [_vm._v("Scoring DCPP")]), _vm._v(" "), _c("td", [_c("div", [(_vm$cred_tb_6 = _vm.cred_tb_10008) !== null && _vm$cred_tb_6 !== void 0 && _vm$cred_tb_6.score_global ? _c("h6", [_vm._v("\n                                  " + _vm._s((_vm$cred_tb_7 = _vm.cred_tb_10008) === null || _vm$cred_tb_7 === void 0 ? void 0 : _vm$cred_tb_7.score_global) + "/15 ("), _c("small", {
    staticClass: "px-1",
    style: {
      backgroundColor: _vm.couleur((_vm$cred_tb_8 = _vm.cred_tb_10008) === null || _vm$cred_tb_8 === void 0 ? void 0 : _vm$cred_tb_8.score_global)
    }
  }, [_vm._v(_vm._s(_vm.getAppreciation((_vm$cred_tb_9 = _vm.cred_tb_10008) === null || _vm$cred_tb_9 === void 0 ? void 0 : _vm$cred_tb_9.score_global)))]), _vm._v(")\n                                ")]) : _vm._e()])])]) : _vm._e(), _vm._v(" "), _vm.cred_pub_tb_14073 ? _c("tr", [_c("th", [_vm._v("Scoring DE")]), _vm._v(" "), _c("td", [_c("div", [(_vm$cred_pub_tb_ = _vm.cred_pub_tb_14073) !== null && _vm$cred_pub_tb_ !== void 0 && _vm$cred_pub_tb_.score_global ? _c("h6", [_vm._v("\n                                    " + _vm._s((_vm$cred_pub_tb_2 = _vm.cred_pub_tb_14073) === null || _vm$cred_pub_tb_2 === void 0 ? void 0 : _vm$cred_pub_tb_2.score_global) + "/15 ("), _c("small", {
    staticClass: "px-1",
    style: {
      backgroundColor: _vm.couleur((_vm$cred_pub_tb_3 = _vm.cred_pub_tb_14073) === null || _vm$cred_pub_tb_3 === void 0 ? void 0 : _vm$cred_pub_tb_3.score_global)
    }
  }, [_vm._v(_vm._s(_vm.getAppreciation((_vm$cred_pub_tb_4 = _vm.cred_pub_tb_14073) === null || _vm$cred_pub_tb_4 === void 0 ? void 0 : _vm$cred_pub_tb_4.score_global)))]), _vm._v(")\n                                ")]) : _vm._e()])])]) : _vm._e(), _vm._v(" "), _vm.cred_tb_120001 ? _c("tr", [_c("th", [_vm._v("Segmentation")]), _vm._v(" "), _c("td", [_c("div", [_c("h6", [_c("b", [_vm._v(_vm._s((_vm$cred_tb_0 = _vm.cred_tb_120001) === null || _vm$cred_tb_0 === void 0 ? void 0 : _vm$cred_tb_0.segmentation))])])])])]) : _vm._e()], 2)])])])]) : _vm._e();
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("span", {
    staticClass: "fw-bold",
    staticStyle: {
      "text-decoration": "underline"
    }
  }, [_vm._v("\n                MONTANT DE LA DEMANDE  "), _c("small", [_vm._v("(Client)")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/proposition_credit/DCPP-DCP2.vue?vue&type=style&index=0&id=1b3675bd&scoped=true&lang=css":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/proposition_credit/DCPP-DCP2.vue?vue&type=style&index=0&id=1b3675bd&scoped=true&lang=css ***!
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
___CSS_LOADER_EXPORT___.push([module.id, "\nfieldset[data-v-1b3675bd] {\r\n    border: 1px solid #ddd !important;\r\n    position: relative;\r\n    padding-left: 10px !important;\r\n    width: 100%;\r\n    background-color: #f5f5f5;\r\n    margin-top: 15px;\n}\nlegend[data-v-1b3675bd] {\r\n    font-weight: bold;\r\n    padding: 4px;\r\n    width: -moz-max-content;\r\n    width: max-content;\r\n    padding: 0 15px;\r\n    font-size: 16px;\r\n    float: none;\r\n    background-color: #ffffff;\r\n    border: 1px solid #ddd;\r\n    border-radius: 4px;\n}\n.cell[data-v-1b3675bd] {\r\n    display: flex;\r\n    gap: 1px;\r\n    flex-direction: column;\n}\n.bold[data-v-1b3675bd] {\r\n    font-weight: bold;\n}\n.memo[data-v-1b3675bd] {\r\n    margin-top: 10px;\r\n    padding: 10px;\r\n    border: 2px solid #fff;\r\n    font-weight: 550;\r\n    font-size: 16px;\r\n    text-align: left;\r\n    text-transform: uppercase;\r\n    background-color: #34495e;\r\n    color: #fff;\n}\r\n\r\n/* th {\r\n      background: #f4f3f3 !important;\r\n  } */\n.bg-grey[data-v-1b3675bd] {\r\n    background-color: #f4f3f3;\r\n    width: 32%;\n}\ninput[type=\"checkbox\"][data-v-1b3675bd] {\r\n    /* Double-sized Checkboxes */\r\n    /* IE */\r\n    /* FF */\r\n    /* Safari and Chrome */\r\n    /* Opera */\r\n    transform: scale(1.4);\r\n    padding: 10px;\n}\n.head-memorandum-title[data-v-1b3675bd] {\r\n    margin-top: 15px;\r\n    padding: 16px;\r\n    color: #fff;\r\n    font-weight: bold;\r\n    background-color: #34495e;\r\n    border: 2px solid #575759;\r\n    box-shadow: 1px 3px 4px #ddd;\r\n    font-size: 16px;\r\n    text-align: center;\r\n    text-transform: uppercase;\r\n    border-radius: 10px;\r\n    margin-bottom: 15px;\n}\n.checkboxtext[data-v-1b3675bd] {\r\n    /* Checkbox text */\r\n    font-size: 110%;\r\n    display: inline;\n}\n.nota-bene[data-v-1b3675bd] {\r\n    font-size: 12px !important;\n}\n.table[data-v-1b3675bd] {\r\n    border: unset;\n}\nol[data-v-1b3675bd],\r\nli[data-v-1b3675bd] {\r\n    list-style-type: revert-layer;\n}\ninput[type=\"checkbox\"][data-v-1b3675bd]:disabled:checked {\r\n    -webkit-appearance: none;\r\n       -moz-appearance: none;\r\n            appearance: none; /* Supprime le style natif */\r\n    /* width: 10px;*/\r\n    min-height: unset !important;\r\n\r\n    padding: 7px;\r\n    background-color: #007bff; /* Bleu */\r\n    /* border: 2px solid #007bff; Bordure bleue */\r\n    border-radius: 2px;\r\n    position: relative;\r\n    cursor: not-allowed;\r\n    margin-top: 5px;\n}\ninput[type=\"checkbox\"][data-v-1b3675bd]:disabled:checked::after {\r\n    content: \"✔\";\r\n    color: white;\r\n    font-size: 8px;\r\n    font-weight: bold;\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\n}\n.th[data-v-1b3675bd] {\r\n    text-wrap: nowrap;\n}\n.color-box[data-v-1b3675bd] {\r\n color: white\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/proposition_credit/DCPP-DCP2.vue?vue&type=style&index=0&id=1b3675bd&scoped=true&lang=css":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/proposition_credit/DCPP-DCP2.vue?vue&type=style&index=0&id=1b3675bd&scoped=true&lang=css ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DCPP_DCP2_vue_vue_type_style_index_0_id_1b3675bd_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DCPP-DCP2.vue?vue&type=style&index=0&id=1b3675bd&scoped=true&lang=css */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/proposition_credit/DCPP-DCP2.vue?vue&type=style&index=0&id=1b3675bd&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DCPP_DCP2_vue_vue_type_style_index_0_id_1b3675bd_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DCPP_DCP2_vue_vue_type_style_index_0_id_1b3675bd_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/offview/bank/afg/memo/proposition_credit/DCPP-DCP2.vue":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/offview/bank/afg/memo/proposition_credit/DCPP-DCP2.vue ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DCPP_DCP2_vue_vue_type_template_id_1b3675bd_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DCPP-DCP2.vue?vue&type=template&id=1b3675bd&scoped=true */ "./resources/js/components/offview/bank/afg/memo/proposition_credit/DCPP-DCP2.vue?vue&type=template&id=1b3675bd&scoped=true");
/* harmony import */ var _DCPP_DCP2_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DCPP-DCP2.vue?vue&type=script&lang=js */ "./resources/js/components/offview/bank/afg/memo/proposition_credit/DCPP-DCP2.vue?vue&type=script&lang=js");
/* harmony import */ var _DCPP_DCP2_vue_vue_type_style_index_0_id_1b3675bd_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DCPP-DCP2.vue?vue&type=style&index=0&id=1b3675bd&scoped=true&lang=css */ "./resources/js/components/offview/bank/afg/memo/proposition_credit/DCPP-DCP2.vue?vue&type=style&index=0&id=1b3675bd&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _DCPP_DCP2_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _DCPP_DCP2_vue_vue_type_template_id_1b3675bd_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _DCPP_DCP2_vue_vue_type_template_id_1b3675bd_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "1b3675bd",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/offview/bank/afg/memo/proposition_credit/DCPP-DCP2.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/offview/bank/afg/memo/proposition_credit/DCPP-DCP2.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/components/offview/bank/afg/memo/proposition_credit/DCPP-DCP2.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DCPP_DCP2_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DCPP-DCP2.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/proposition_credit/DCPP-DCP2.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DCPP_DCP2_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/offview/bank/afg/memo/proposition_credit/DCPP-DCP2.vue?vue&type=style&index=0&id=1b3675bd&scoped=true&lang=css":
/*!************************************************************************************************************************************************!*\
  !*** ./resources/js/components/offview/bank/afg/memo/proposition_credit/DCPP-DCP2.vue?vue&type=style&index=0&id=1b3675bd&scoped=true&lang=css ***!
  \************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DCPP_DCP2_vue_vue_type_style_index_0_id_1b3675bd_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DCPP-DCP2.vue?vue&type=style&index=0&id=1b3675bd&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/proposition_credit/DCPP-DCP2.vue?vue&type=style&index=0&id=1b3675bd&scoped=true&lang=css");


/***/ }),

/***/ "./resources/js/components/offview/bank/afg/memo/proposition_credit/DCPP-DCP2.vue?vue&type=template&id=1b3675bd&scoped=true":
/*!**********************************************************************************************************************************!*\
  !*** ./resources/js/components/offview/bank/afg/memo/proposition_credit/DCPP-DCP2.vue?vue&type=template&id=1b3675bd&scoped=true ***!
  \**********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DCPP_DCP2_vue_vue_type_template_id_1b3675bd_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DCPP_DCP2_vue_vue_type_template_id_1b3675bd_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DCPP_DCP2_vue_vue_type_template_id_1b3675bd_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DCPP-DCP2.vue?vue&type=template&id=1b3675bd&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/proposition_credit/DCPP-DCP2.vue?vue&type=template&id=1b3675bd&scoped=true");


/***/ })

}]);