"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_offview_microfinance_cofina_memo_retailbf_TRBF1_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/microfinance/cofina/memo/retailbf/TRBF1.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/microfinance/cofina/memo/retailbf/TRBF1.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_credit_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../services/credit.service */ "./resources/js/services/credit.service.js");
/* harmony import */ var _shared_cofina_EncoursComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../shared/cofina/EncoursComponent */ "./resources/js/components/shared/cofina/EncoursComponent.vue");



// "../../../services/credit.service";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    dossier_credit: Object
  },
  components: {
    EncoursComponent: _shared_cofina_EncoursComponent__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      inventairesTrier: [],
      encours: null
    };
  },
  created: function created() {
    //this.sortInventaires()
  },
  computed: {
    isInfine: function isInfine() {
      var _this$dossier_credit;
      return ((_this$dossier_credit = this.dossier_credit) === null || _this$dossier_credit === void 0 || (_this$dossier_credit = _this$dossier_credit.cred_pub_tb_16101.mode_paiement) === null || _this$dossier_credit === void 0 ? void 0 : _this$dossier_credit.toLowerCase()) == "in fine";
    }
  },
  mounted: function mounted() {
    //this.getEncourInfo()
  },
  methods: {
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
    getEncourInfo: function getEncourInfo() {
      var _this$dossier_credit2,
        _this = this;
      _services_credit_service__WEBPACK_IMPORTED_MODULE_0__["default"].encours((_this$dossier_credit2 = this.dossier_credit) === null || _this$dossier_credit2 === void 0 || (_this$dossier_credit2 = _this$dossier_credit2.cred_pub_tb_16101) === null || _this$dossier_credit2 === void 0 ? void 0 : _this$dossier_credit2.matricule_client).then(function (res) {
        _this.encoursData(res);
      })["catch"](function (err) {
        console.log(err);
      });
    },
    encoursData: function encoursData(res) {
      this.encours = res.data;
    },
    // AffichetotalAchat(){
    //     let value=0
    //     this.inventairesTrier.forEach((inventaire, key) => {
    //         value += (Number(String(inventaire.quantite).replace(/\s+/g,"")) * Number(String(inventaire.prix_achat).replace(/\s+/g,"")))
    //     })
    //     return value
    // },
    // AffichetotalQuantite(){
    //     let value=0
    //     this.inventairesTrier.forEach((inventaire, key) => {
    //         value += Number(String(inventaire.quantite).replace(/\s+/g,""))
    //     })
    //     return value
    // },
    // AffichetotalMargePourcentage(){
    //     let value=0
    //     this.inventairesTrier.forEach((inventaire, key) => {
    //         value += Number(String(inventaire.marge_pourcentage).replace(/\s+/g,""))
    //     })
    //     return value
    // },
    // AffichetotalMargetotal(){
    //     let value=0
    //     this.inventairesTrier.forEach((inventaire, key) => {
    //         value += (Number(String(inventaire.prix_vente).replace(/\s+/g,"")) - Number(String(inventaire.prix_achat).replace(/\s+/g,"")))*inventaire.quantite
    //     })
    //     return value
    // },
    // AffichetotalMarge(){
    //     let value=0
    //     this.inventairesTrier.forEach((inventaire, key) => {
    //         value += (Number(String(inventaire.prix_vente).replace(/\s+/g,"")) - Number(String(inventaire.prix_achat).replace(/\s+/g,"")))
    //     })
    //     return value
    // },
    // sortInventaires(){
    //    let objs= this.dossier_credit?.cred_pub_tb_025?.inventaires
    //     this.inventairesTrier = objs.sort((a,b) => (b.quantite* Number(String(b.prix_vente).replace(/\s+/g,""))) - (a.quantite * Number(String(a.prix_vente).replace(/\s+/g,"")) )).slice(0,5)
    // },
    arrondiA2Chiffre: function arrondiA2Chiffre(x) {
      var value = Math.round(x * 100) / 100;
      return value;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/microfinance/cofina/memo/retailbf/TRBF1.vue?vue&type=template&id=33b5f35c&scoped=true":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/microfinance/cofina/memo/retailbf/TRBF1.vue?vue&type=template&id=33b5f35c&scoped=true ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm$dossier_credit, _vm$dossier_credit2, _vm$dossier_credit3, _vm$dossier_credit4, _vm$dossier_credit5, _vm$dossier_credit6, _vm$dossier_credit$cr, _vm$dossier_credit$cr2, _vm$dossier_credit$cr3, _vm$dossier_credit$cr4, _vm$dossier_credit7, _vm$dossier_credit8, _vm$dossier_credit9, _vm$dossier_credit0, _vm$dossier_credit17, _vm$dossier_credit18, _vm$dossier_credit23, _vm$encours, _vm$encours2, _vm$encours3, _vm$dossier_credit24, _vm$dossier_credit25, _vm$dossier_credit26;
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {}, [_c("div", {
    staticClass: "row justify-content-center"
  }, [(_vm$dossier_credit = _vm.dossier_credit) !== null && _vm$dossier_credit !== void 0 && _vm$dossier_credit.tbs_in_use.includes("tb16101") ? _c("div", {
    staticClass: "row table-responsive",
    staticStyle: {
      "padding-top": ""
    }
  }, [_c("div", {
    staticClass: "head-memorandum-title mb-4",
    staticStyle: {
      "text-align": "center"
    }
  }, [_vm._v("\n                 CARACTERISTIQUES DU PRET ")]), _vm._v(" "), _c("div", {
    staticClass: "card-body mb-2"
  }, [_c("EncoursComponent", {
    attrs: {
      dossier_credit: _vm.dossier_credit
    }
  })], 1), _vm._v(" "), _c("table", {
    staticClass: "table table-bordered mb-2"
  }, [_c("tbody", [_c("tr", [_c("td", {
    staticStyle: {
      "font-weight": "600"
    }
  }, [_vm._v("Type de concours ")]), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$dossier_credit2 = _vm.dossier_credit) === null || _vm$dossier_credit2 === void 0 || (_vm$dossier_credit2 = _vm$dossier_credit2.cred_pub_tb_16101) === null || _vm$dossier_credit2 === void 0 ? void 0 : _vm$dossier_credit2.type_credit))]), _vm._v(" "), _c("td", {
    staticStyle: {
      "font-weight": "600"
    }
  }, [_vm._v("Montant proposé par le CAF")]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm._f("formatNumber")((_vm$dossier_credit3 = _vm.dossier_credit) === null || _vm$dossier_credit3 === void 0 || (_vm$dossier_credit3 = _vm$dossier_credit3.cred_pub_tb_16101) === null || _vm$dossier_credit3 === void 0 ? void 0 : _vm$dossier_credit3.montant_credit)))])]), _vm._v(" "), _c("tr", [_c("td", {
    staticStyle: {
      "font-weight": "600"
    }
  }, [_vm._v("Durée")]), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$dossier_credit4 = _vm.dossier_credit) === null || _vm$dossier_credit4 === void 0 || (_vm$dossier_credit4 = _vm$dossier_credit4.cred_pub_tb_16101) === null || _vm$dossier_credit4 === void 0 ? void 0 : _vm$dossier_credit4.duree_credit))]), _vm._v(" "), _c("td", {
    staticStyle: {
      "font-weight": "600"
    }
  }, [_vm._v("Période de remboursement")]), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$dossier_credit5 = _vm.dossier_credit) === null || _vm$dossier_credit5 === void 0 || (_vm$dossier_credit5 = _vm$dossier_credit5.cred_pub_tb_16101) === null || _vm$dossier_credit5 === void 0 ? void 0 : _vm$dossier_credit5.mode_paiement))])]), _vm._v(" "), _c("tr", [_c("td", {
    staticStyle: {
      "font-weight": "600"
    }
  }, [_vm._v("Taux d’intérêt ")]), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$dossier_credit6 = _vm.dossier_credit) === null || _vm$dossier_credit6 === void 0 || (_vm$dossier_credit6 = _vm$dossier_credit6.cred_pub_tb_16101) === null || _vm$dossier_credit6 === void 0 ? void 0 : _vm$dossier_credit6.taux_credit_propose) + " % HT mensuel dégressif ")]), _vm._v(" "), _c("td", {
    staticStyle: {
      "font-weight": "600"
    }
  }, [_vm._v("Frais de dossier ")]), _vm._v(" "), _c("td", [_vm._v("\n                             " + _vm._s(_vm._f("formatNumber")((_vm$dossier_credit$cr = _vm.dossier_credit.cred_pub_tb_16101) === null || _vm$dossier_credit$cr === void 0 || (_vm$dossier_credit$cr = _vm$dossier_credit$cr.frais[0]) === null || _vm$dossier_credit$cr === void 0 ? void 0 : _vm$dossier_credit$cr.montant_frais)) + "\n                             ( " + _vm._s((_vm$dossier_credit$cr2 = _vm.dossier_credit.cred_pub_tb_16101) === null || _vm$dossier_credit$cr2 === void 0 || (_vm$dossier_credit$cr2 = _vm$dossier_credit$cr2.frais[0]) === null || _vm$dossier_credit$cr2 === void 0 ? void 0 : _vm$dossier_credit$cr2.taux_modififie) + "% du montant proposé)\n                         ")])]), _vm._v(" "), _c("tr", [_c("td", {
    staticStyle: {
      "font-weight": "600"
    }
  }, [_vm._v("Primes de risques ")]), _vm._v(" "), _c("td", [_vm._v("\n                             " + _vm._s((_vm$dossier_credit$cr3 = _vm.dossier_credit.cred_pub_tb_16101) === null || _vm$dossier_credit$cr3 === void 0 || (_vm$dossier_credit$cr3 = _vm$dossier_credit$cr3.frais[2]) === null || _vm$dossier_credit$cr3 === void 0 ? void 0 : _vm$dossier_credit$cr3.montant_frais) + "\n                             ( " + _vm._s((_vm$dossier_credit$cr4 = _vm.dossier_credit.cred_pub_tb_16101) === null || _vm$dossier_credit$cr4 === void 0 || (_vm$dossier_credit$cr4 = _vm$dossier_credit$cr4.frais[2]) === null || _vm$dossier_credit$cr4 === void 0 ? void 0 : _vm$dossier_credit$cr4.taux_modififie) + " % du montant proposé)\n                         ")]), _vm._v(" "), _c("td", {
    staticStyle: {
      "font-weight": "600"
    }
  }, [_vm._v("Rentabilité sur la durée du crédit ")]), _vm._v(" "), _c("td", [_vm._v("\n                             " + _vm._s((_vm$dossier_credit7 = _vm.dossier_credit) === null || _vm$dossier_credit7 === void 0 || (_vm$dossier_credit7 = _vm$dossier_credit7.cred_pub_tb_16101) === null || _vm$dossier_credit7 === void 0 || (_vm$dossier_credit7 = _vm$dossier_credit7.echeance) === null || _vm$dossier_credit7 === void 0 ? void 0 : _vm$dossier_credit7.rentabilitepret) + " % ")])]), _vm._v(" "), _c("tr", [_c("td", {
    staticStyle: {
      "font-weight": "600"
    }
  }, [_vm._v("Rentabilité Prêt (Annuelle) ")]), _vm._v(" "), _c("td", [_vm._v("\n                             " + _vm._s((_vm$dossier_credit8 = _vm.dossier_credit) === null || _vm$dossier_credit8 === void 0 || (_vm$dossier_credit8 = _vm$dossier_credit8.cred_pub_tb_16101) === null || _vm$dossier_credit8 === void 0 || (_vm$dossier_credit8 = _vm$dossier_credit8.echeance) === null || _vm$dossier_credit8 === void 0 ? void 0 : _vm$dossier_credit8.rentabiliteAnnuel) + " %\n                         ")]), _vm._v(" "), _c("td", {
    staticStyle: {
      "font-weight": "600"
    }
  }, [_vm._v("Rachat")]), _vm._v(" "), _c("td", [_vm._v("\n                             " + _vm._s((_vm$dossier_credit9 = _vm.dossier_credit) === null || _vm$dossier_credit9 === void 0 || (_vm$dossier_credit9 = _vm$dossier_credit9.cred_pub_tb_16101) === null || _vm$dossier_credit9 === void 0 ? void 0 : _vm$dossier_credit9.rachat) + "\n                         ")]), _vm._v(" "), _c("td", {
    staticStyle: {
      background: "#f4f3f3"
    },
    attrs: {
      colspan: "2"
    }
  })]), _vm._v(" "), _c("tr", [_c("td", {
    staticStyle: {
      "font-weight": "600"
    }
  }, [_vm._v("N° du prêt à racheter")]), _vm._v(" "), _c("td", [_vm._v("\n                             " + _vm._s((_vm$dossier_credit0 = _vm.dossier_credit) === null || _vm$dossier_credit0 === void 0 || (_vm$dossier_credit0 = _vm$dossier_credit0.cred_pub_tb_16101) === null || _vm$dossier_credit0 === void 0 ? void 0 : _vm$dossier_credit0.numero_pret_a_rachete) + "\n                         ")]), _vm._v(" "), _c("th", {
    staticStyle: {
      "font-weight": "600"
    },
    attrs: {
      colspan: "2"
    }
  })])])]), _vm._v(" "), _c("table", {
    staticClass: "table table-bordered mb-3"
  }, [_c("thead", [_c("tr", {
    staticClass: "bg-relooker fs-small"
  }, [_c("th", {
    staticStyle: {
      "background-color": "#2c3e50"
    }
  }, [_vm._v("Montant du prêt")]), _vm._v(" "), _c("th", {
    staticStyle: {
      "background-color": "#2c3e50"
    }
  }, [_vm._v("Taux du prêt (%)")]), _vm._v(" "), _c("th", {
    staticStyle: {
      "background-color": "#2c3e50"
    }
  }, [_vm._v("Durée du prêt (Mois)")]), _vm._v(" "), _c("th", {
    staticStyle: {
      "background-color": "#2c3e50"
    }
  }, [_vm._v("Intérêt du prêt")]), _vm._v(" "), _c("th", {
    staticStyle: {
      "background-color": "#2c3e50"
    }
  }, [_vm._v("Echéance "), !_vm.isInfine ? _c("span", [_vm._v("(par mois)")]) : _vm._e()]), _vm._v(" "), _c("th", {
    staticStyle: {
      "background-color": "#2c3e50"
    }
  }, [_vm._v("Garantie")]), _vm._v(" "), _c("th", {
    staticStyle: {
      "background-color": "#2c3e50"
    }
  }, [_vm._v("CRSD")]), _vm._v(" "), _c("th", {
    staticStyle: {
      "background-color": "#2c3e50"
    }
  }, [_vm._v("PEP")])])]), _vm._v(" "), _c("tbody", _vm._l(1, function (i) {
    var _vm$dossier_credit1, _vm$dossier_credit10, _vm$dossier_credit11, _vm$dossier_credit12, _vm$dossier_credit13, _vm$dossier_credit14, _vm$dossier_credit15, _vm$dossier_credit16;
    return _c("tr", {
      key: i
    }, [_c("td", [_vm._v("\n                             " + _vm._s(_vm._f("formatNumber")((_vm$dossier_credit1 = _vm.dossier_credit) === null || _vm$dossier_credit1 === void 0 ? void 0 : _vm$dossier_credit1.cred_pub_tb_16101.montant_credit)) + "\n                         ")]), _vm._v(" "), _c("td", [_vm._v("\n                             " + _vm._s((_vm$dossier_credit10 = _vm.dossier_credit) === null || _vm$dossier_credit10 === void 0 ? void 0 : _vm$dossier_credit10.cred_pub_tb_16101.taux_credit_propose) + "\n                         ")]), _vm._v(" "), _c("td", [_vm._v("\n                             " + _vm._s((_vm$dossier_credit11 = _vm.dossier_credit) === null || _vm$dossier_credit11 === void 0 ? void 0 : _vm$dossier_credit11.cred_pub_tb_16101.duree_credit) + "\n                         ")]), _vm._v(" "), _c("td", [_vm._v("\n                             " + _vm._s(_vm._f("formatNumber")(Math.ceil((_vm$dossier_credit12 = _vm.dossier_credit) === null || _vm$dossier_credit12 === void 0 ? void 0 : _vm$dossier_credit12.cred_pub_tb_16101.echeance.interet))) + "\n                         ")]), _vm._v(" "), _c("td", [_vm._v("\n                             " + _vm._s(_vm._f("formatNumber")(Math.ceil((_vm$dossier_credit13 = _vm.dossier_credit) === null || _vm$dossier_credit13 === void 0 ? void 0 : _vm$dossier_credit13.cred_pub_tb_16101.echeance.echeance))) + "\n                         ")]), _vm._v(" "), _c("td", [_vm._v("\n                             " + _vm._s(_vm._f("formatNumber")((_vm$dossier_credit14 = _vm.dossier_credit) === null || _vm$dossier_credit14 === void 0 ? void 0 : _vm$dossier_credit14.cred_pub_tb_16101.garantie)) + "\n                         ")]), _vm._v(" "), _c("td", [_vm._v("\n                             " + _vm._s(_vm._f("formatNumber")((_vm$dossier_credit15 = _vm.dossier_credit) === null || _vm$dossier_credit15 === void 0 ? void 0 : _vm$dossier_credit15.cred_pub_tb_16101.montant_crsd)) + "\n                         ")]), _vm._v(" "), _c("td", [_vm._v("\n                             " + _vm._s(_vm._f("formatNumber")((_vm$dossier_credit16 = _vm.dossier_credit) === null || _vm$dossier_credit16 === void 0 ? void 0 : _vm$dossier_credit16.cred_pub_tb_16101.vmontant_pep)) + "\n                         ")])]);
  }), 0)]), _vm._v(" "), _vm._m(0), _vm._v(" "), _c("table", {
    staticClass: "table table-bordered mb-3"
  }, [_vm._m(1), _vm._v(" "), _c("tbody", [_vm._l((_vm$dossier_credit17 = _vm.dossier_credit) === null || _vm$dossier_credit17 === void 0 ? void 0 : _vm$dossier_credit17.cred_pub_tb_16101.frais, function (frais0, index) {
    return _c("tr", {
      key: index
    }, [_c("td", [_vm._v(_vm._s(frais0.libelle_taux))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(frais0.taux_modififie))]), _vm._v(" "), _c("td", [_vm._v("\n                             " + _vm._s(_vm._f("formatNumber")(frais0.montant_frais)) + "\n                         ")])]);
  }), _vm._v(" "), _c("tr", [_vm._m(2), _vm._v(" "), _c("td", {
    staticStyle: {
      "background-color": "#2c3e50",
      color: "white"
    }
  }, [_vm._v("\n                             " + _vm._s(_vm._f("formatNumber")(Math.ceil((_vm$dossier_credit18 = _vm.dossier_credit) === null || _vm$dossier_credit18 === void 0 ? void 0 : _vm$dossier_credit18.cred_pub_tb_16101.val_total_frais))) + "\n                         ")])])], 2)]), _vm._v(" "), _vm._m(3), _vm._v(" "), _c("table", {
    staticClass: "table table-bordered mb-3"
  }, [_vm._m(4), _vm._v(" "), _c("tbody", _vm._l(1, function (i) {
    var _vm$dossier_credit19, _vm$dossier_credit20, _vm$dossier_credit21, _vm$dossier_credit22;
    return _c("tr", {
      key: i
    }, [_c("td", [_vm._v("\n                             " + _vm._s((_vm$dossier_credit19 = _vm.dossier_credit) === null || _vm$dossier_credit19 === void 0 ? void 0 : _vm$dossier_credit19.cred_pub_tb_16101.echeance.coutCapital) + "\n                             %\n                         ")]), _vm._v(" "), _c("td", [_vm._v("\n                             " + _vm._s(_vm._f("formatNumber")(Math.ceil((_vm$dossier_credit20 = _vm.dossier_credit) === null || _vm$dossier_credit20 === void 0 ? void 0 : _vm$dossier_credit20.cred_pub_tb_16101.echeance.cashflow))) + "\n                         ")]), _vm._v(" "), _c("td", [_vm._v("\n                             " + _vm._s((_vm$dossier_credit21 = _vm.dossier_credit) === null || _vm$dossier_credit21 === void 0 ? void 0 : _vm$dossier_credit21.cred_pub_tb_16101.echeance.rentabilitepret) + "\n                             %\n                         ")]), _vm._v(" "), _c("td", [_vm._v("\n                             " + _vm._s((_vm$dossier_credit22 = _vm.dossier_credit) === null || _vm$dossier_credit22 === void 0 ? void 0 : _vm$dossier_credit22.cred_pub_tb_16101.echeance.rentabiliteAnnuel) + "\n                             %\n                         ")])]);
  }), 0)]), _vm._v(" "), ((_vm$dossier_credit23 = _vm.dossier_credit) === null || _vm$dossier_credit23 === void 0 || (_vm$dossier_credit23 = _vm$dossier_credit23.cred_pub_tb_16101) === null || _vm$dossier_credit23 === void 0 ? void 0 : _vm$dossier_credit23.ce_client_a_t_il_des_impayes) == "Oui" || ((_vm$encours = _vm.encours) === null || _vm$encours === void 0 ? void 0 : _vm$encours.par_0) != 0 || ((_vm$encours2 = _vm.encours) === null || _vm$encours2 === void 0 ? void 0 : _vm$encours2.par_30) != 0 || ((_vm$encours3 = _vm.encours) === null || _vm$encours3 === void 0 ? void 0 : _vm$encours3.par_90) != 0 ? _c("table", {
    staticClass: "table table-bordered mb-2 mt-2"
  }, [_vm._m(5), _vm._v(" "), _c("tbody", [_c("tr", [_c("td", {
    staticStyle: {
      "font-weight": "600"
    },
    attrs: {
      colspan: ""
    }
  }, [_vm._v(_vm._s((_vm$dossier_credit24 = _vm.dossier_credit) === null || _vm$dossier_credit24 === void 0 || (_vm$dossier_credit24 = _vm$dossier_credit24.cred_pub_tb_16101) === null || _vm$dossier_credit24 === void 0 ? void 0 : _vm$dossier_credit24.motif))])])])]) : _vm._e()]) : _vm._e(), _vm._v(" "), _c("simulateur-teg-off", {
    attrs: {
      simulateur: (_vm$dossier_credit25 = _vm.dossier_credit) === null || _vm$dossier_credit25 === void 0 ? void 0 : _vm$dossier_credit25.taux_effectif_global
    }
  }), _vm._v(" "), !!((_vm$dossier_credit26 = _vm.dossier_credit) !== null && _vm$dossier_credit26 !== void 0 && _vm$dossier_credit26.rentacred) ? _c("rentacred", {
    staticClass: "my-5",
    attrs: {
      dossier_credit: _vm.dossier_credit,
      read_only: true
    }
  }) : _vm._e()], 1)]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("h6", {
    staticClass: "d-flex justify-content-between"
  }, [_c("span", [_vm._v(" Frais de crédit ")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", {
    staticClass: "bg-relooker"
  }, [_c("th", {
    staticStyle: {
      "background-color": "#2c3e50"
    }
  }, [_vm._v("Libellé du frais")]), _vm._v(" "), _c("th", {
    staticStyle: {
      "background-color": "#2c3e50"
    }
  }, [_vm._v("Taux du frais")]), _vm._v(" "), _c("th", {
    staticStyle: {
      "background-color": "#2c3e50"
    }
  }, [_vm._v("Montant du frais")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {
    attrs: {
      colspan: "2"
    }
  }, [_c("b", [_vm._v("Total Frais")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("h6", {
    staticClass: "d-flex justify-content-between"
  }, [_c("span", [_vm._v(" Information de rentabilité")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", {
    staticClass: "bg-relooker"
  }, [_c("th", {
    staticStyle: {
      "background-color": "#2c3e50"
    }
  }, [_vm._v("Coût du capital")]), _vm._v(" "), _c("th", {
    staticStyle: {
      "background-color": "#2c3e50"
    }
  }, [_vm._v("Cash Flow Actualisé")]), _vm._v(" "), _c("th", {
    staticStyle: {
      "background-color": "#2c3e50"
    }
  }, [_vm._v("\n                             Rentabilité sur la durée du prêt\n                         ")]), _vm._v(" "), _c("th", {
    staticStyle: {
      "background-color": "#2c3e50"
    }
  }, [_vm._v("\n                             Rentabilité annuelle du prêt\n                         ")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", {
    staticClass: "bg-ed-primary"
  }, [_c("tr", [_c("th", {
    staticStyle: {
      "text-align": "center"
    },
    attrs: {
      colspan: "",
      scope: "row"
    }
  }, [_c("b", [_vm._v("Motif de l'impayé")])])])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/microfinance/cofina/memo/retailbf/TRBF1.vue?vue&type=style&index=0&id=33b5f35c&lang=css&scoped=true":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/microfinance/cofina/memo/retailbf/TRBF1.vue?vue&type=style&index=0&id=33b5f35c&lang=css&scoped=true ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.bg-grey[data-v-33b5f35c] {\n    background-color: #f4f3f3;\n}\nth[data-v-33b5f35c] {\n    background: #f4f3f3 !important;\n}\n.head-memorandum-title[data-v-33b5f35c] {\n    margin-top: 15px;\n    padding: 16px;\n    color: #fff;\n    font-weight: bold;\n    background-color: #34495e;\n    border: 2px solid #575759;\n    box-shadow: 1px 3px 4px #ddd;\n    font-size: 16px;\n    text-align: center;\n    text-transform: uppercase;\n    border-radius: 10px;\n    margin-bottom: 15px;\n}\n\n  ", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/microfinance/cofina/memo/retailbf/TRBF1.vue?vue&type=style&index=0&id=33b5f35c&lang=css&scoped=true":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/microfinance/cofina/memo/retailbf/TRBF1.vue?vue&type=style&index=0&id=33b5f35c&lang=css&scoped=true ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TRBF1_vue_vue_type_style_index_0_id_33b5f35c_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TRBF1.vue?vue&type=style&index=0&id=33b5f35c&lang=css&scoped=true */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/microfinance/cofina/memo/retailbf/TRBF1.vue?vue&type=style&index=0&id=33b5f35c&lang=css&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TRBF1_vue_vue_type_style_index_0_id_33b5f35c_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TRBF1_vue_vue_type_style_index_0_id_33b5f35c_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/offview/microfinance/cofina/memo/retailbf/TRBF1.vue":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/offview/microfinance/cofina/memo/retailbf/TRBF1.vue ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TRBF1_vue_vue_type_template_id_33b5f35c_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TRBF1.vue?vue&type=template&id=33b5f35c&scoped=true */ "./resources/js/components/offview/microfinance/cofina/memo/retailbf/TRBF1.vue?vue&type=template&id=33b5f35c&scoped=true");
/* harmony import */ var _TRBF1_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TRBF1.vue?vue&type=script&lang=js */ "./resources/js/components/offview/microfinance/cofina/memo/retailbf/TRBF1.vue?vue&type=script&lang=js");
/* harmony import */ var _TRBF1_vue_vue_type_style_index_0_id_33b5f35c_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TRBF1.vue?vue&type=style&index=0&id=33b5f35c&lang=css&scoped=true */ "./resources/js/components/offview/microfinance/cofina/memo/retailbf/TRBF1.vue?vue&type=style&index=0&id=33b5f35c&lang=css&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _TRBF1_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _TRBF1_vue_vue_type_template_id_33b5f35c_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _TRBF1_vue_vue_type_template_id_33b5f35c_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "33b5f35c",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/offview/microfinance/cofina/memo/retailbf/TRBF1.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/offview/microfinance/cofina/memo/retailbf/TRBF1.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/components/offview/microfinance/cofina/memo/retailbf/TRBF1.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TRBF1_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TRBF1.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/microfinance/cofina/memo/retailbf/TRBF1.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TRBF1_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/offview/microfinance/cofina/memo/retailbf/TRBF1.vue?vue&type=style&index=0&id=33b5f35c&lang=css&scoped=true":
/*!*********************************************************************************************************************************************!*\
  !*** ./resources/js/components/offview/microfinance/cofina/memo/retailbf/TRBF1.vue?vue&type=style&index=0&id=33b5f35c&lang=css&scoped=true ***!
  \*********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TRBF1_vue_vue_type_style_index_0_id_33b5f35c_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TRBF1.vue?vue&type=style&index=0&id=33b5f35c&lang=css&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/microfinance/cofina/memo/retailbf/TRBF1.vue?vue&type=style&index=0&id=33b5f35c&lang=css&scoped=true");


/***/ }),

/***/ "./resources/js/components/offview/microfinance/cofina/memo/retailbf/TRBF1.vue?vue&type=template&id=33b5f35c&scoped=true":
/*!*******************************************************************************************************************************!*\
  !*** ./resources/js/components/offview/microfinance/cofina/memo/retailbf/TRBF1.vue?vue&type=template&id=33b5f35c&scoped=true ***!
  \*******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TRBF1_vue_vue_type_template_id_33b5f35c_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TRBF1_vue_vue_type_template_id_33b5f35c_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TRBF1_vue_vue_type_template_id_33b5f35c_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TRBF1.vue?vue&type=template&id=33b5f35c&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/microfinance/cofina/memo/retailbf/TRBF1.vue?vue&type=template&id=33b5f35c&scoped=true");


/***/ })

}]);