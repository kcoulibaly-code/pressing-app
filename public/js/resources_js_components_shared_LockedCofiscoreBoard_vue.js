"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_shared_LockedCofiscoreBoard_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/LockedCofiscoreBoard.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/LockedCofiscoreBoard.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _tables_annexes_T00_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../tables/annexes/T00.vue */ "./resources/js/components/tables/annexes/T00.vue");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./resources/js/services/auth.service.js");
/* harmony import */ var _services_ebapis_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/ebapis.service */ "./resources/js/services/ebapis.service.js");
/* harmony import */ var _helpers_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers/page */ "./resources/js/helpers/page.js");
 // Identification



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "CofiscoreBoard",
  props: {
    dossier_credit: Object
  },
  components: {
    tb000: _tables_annexes_T00_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  created: function created() {
    var _this$dossier_credit, _this$dossier_credit2;
    this.meta_data = {
      "cred_pub_key": (_this$dossier_credit = this.dossier_credit) === null || _this$dossier_credit === void 0 ? void 0 : _this$dossier_credit.cred_pub_key,
      "dossier_credit": this.dossier_credit
    };
    this.cofiTable = (_this$dossier_credit2 = this.dossier_credit) === null || _this$dossier_credit2 === void 0 ? void 0 : _this$dossier_credit2.cred_pub_tb_000;
  },
  mounted: function mounted() {
    // EventBus.$on("reload-cofiscoreboard", (data) => this.reloadCofiscoreBoard(data));
  },
  data: function data() {
    return {
      ebapisHost: _services_ebapis_service__WEBPACK_IMPORTED_MODULE_2__["default"].host,
      authcheck: false,
      authcheckUsr: null,
      authcheckStatus: null,
      meta_data: null,
      //   dossier_credit : null,
      disableBtn: true,
      staticTable: "tb000",
      reload: false,
      note_interne: null,
      commentaire_note: null,
      cofiTable: null
    };
  },
  methods: {
    getFromTable: function getFromTable(data) {
      this.cofiTable = data;
    },
    openCofiscoreBoard: function openCofiscoreBoard(dossier_credit0) {
      EventBus.$emit('value-updatedT1');
      this.disableBtn = true;
    },
    formatDate: function formatDate(date) {
      var options = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric'
      };
      return new Date(date).toLocaleDateString('fr', options);
    },
    reloadCofiscoreBoard: function reloadCofiscoreBoard(dossier_credit0) {
      this.dossier_credit = dossier_credit0;
    },
    loadWithError: function loadWithError(err) {
      // window.location.href = "/login";
    },
    verifyTBExistance: function verifyTBExistance(res) {
      this.authcheck = true;
      this.authcheckUsr = res.data;
      this.authcheckStatus = res.status;
      if (this.authcheckStatus === 401) {
        // window.location.href = "/login"
      }
      if (this.authcheck === true) {
        this.$axios.post(this.ebapisHost + 'cofiscore/api/v1/verify-tbexistence/', {
          user: this.authcheckUsr,
          meta_parseable: {
            "cred_pub_key": this.meta_data.cred_pub_key,
            "tb_name": this.staticTable
          }
        }).then(function (response) {
          var fetchedData = response.data;
          if (fetchedData["is_success"] === true) {
            EventBus.$emit('value-updatedT1');
            this.disableBtn = true;
            this.$modal.show('cofiscoreboard');
          }
        }.bind(this))["catch"](function (error) {
          console.log(error);
        }.bind(this));
      } else {
        alert("Unauthenticated");
      }
    },
    verifyRemotePresence: function verifyRemotePresence() {
      var _this = this;
      this.disableBtn = false;
      _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["default"].loadUserData().then(function (res) {
        _this.verifyTBExistance(res);
      })["catch"](function (err) {
        _this.loadWithError(err);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/LockedCofiscoreBoard.vue?vue&type=template&id=4e42dcc8&scoped=true":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/LockedCofiscoreBoard.vue?vue&type=template&id=4e42dcc8&scoped=true ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm$cofiTable, _vm$cofiTable2, _vm$cofiTable3, _vm$cofiTable4, _vm$cofiTable5, _vm$cofiTable6, _vm$cofiTable7, _vm$cofiTable8, _vm$cofiTable9, _vm$cofiTable0, _vm$cofiTable1, _vm$cofiTable10, _vm$cofiTable11, _vm$cofiTable12, _vm$cofiTable13, _vm$cofiTable14, _vm$cofiTable15, _vm$cofiTable16, _vm$cofiTable17, _vm$cofiTable18, _vm$cofiTable19, _vm$cofiTable20, _vm$cofiTable21, _vm$cofiTable22, _vm$cofiTable23, _vm$cofiTable24, _vm$cofiTable25, _vm$cofiTable26, _vm$cofiTable27, _vm$cofiTable28, _vm$cofiTable29, _vm$cofiTable30, _vm$cofiTable31, _vm$cofiTable32;
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("div", {
    staticClass: "memo"
  }, [_c("div", {
    staticClass: "container-fluid"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-sm-9 col-md-9 col-lg-9"
  }, [_vm._v("\n                    FICHE DE NOTATION INTERNE\n                  ")]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-3 col-md-3 col-lg-3"
  }, [_c("div", {
    staticClass: "d-flex justify-content-between"
  }, [_c("span", [_vm._v("Cofiscore board")]), _vm._v(" "), _c("i", {
    staticClass: "icofont-close",
    attrs: {
      role: "button"
    },
    on: {
      click: function click($event) {
        return _vm.$modal.hide("cofiscoreboard");
      }
    }
  })])])])])]), _vm._v(" "), _c("div", {
    staticStyle: {
      "max-height": "80vh",
      overflow: "auto"
    }
  }, [_c("div", {
    staticClass: "tabs effect-3"
  }, [_c("input", {
    staticStyle: {
      left: "1%"
    },
    attrs: {
      type: "radio",
      id: "tab-1",
      name: "tab-effect-3",
      checked: "checked"
    }
  }), _vm._v(" "), _c("span", {
    staticStyle: {
      width: "33%"
    }
  }, [_vm._v("NOTE GLOBALE")]), _vm._v(" "), _c("input", {
    staticStyle: {
      left: "35%"
    },
    attrs: {
      type: "radio",
      id: "tab-2",
      name: "tab-effect-3"
    }
  }), _vm._v(" "), _c("span", {
    staticStyle: {
      left: "34%",
      width: "33%"
    }
  }, [_vm._v("NOTE INTERMEDIAIRE")]), _vm._v(" "), _c("div", {
    staticClass: "tab-content"
  }, [_c("section", {
    key: _vm.reload,
    attrs: {
      id: "tab-item-1"
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "row justify-content-center"
  }, [_c("div", {
    staticClass: "row table-responsive mt-3"
  }, [_c("table", {
    staticClass: "table table-bordered mb-3"
  }, [_c("tbody", {
    staticStyle: {
      "font-size": "0.9rem"
    }
  }, [_vm._m(0), _vm._v(" "), _c("tr", [_c("td", [_vm._v(_vm._s((_vm$cofiTable = _vm.cofiTable) === null || _vm$cofiTable === void 0 ? void 0 : _vm$cofiTable.filiale))]), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$cofiTable2 = _vm.cofiTable) === null || _vm$cofiTable2 === void 0 || (_vm$cofiTable2 = _vm$cofiTable2.matricule_client) === null || _vm$cofiTable2 === void 0 ? void 0 : _vm$cofiTable2.matcli))]), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$cofiTable3 = _vm.cofiTable) === null || _vm$cofiTable3 === void 0 ? void 0 : _vm$cofiTable3.raison_sociale))]), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$cofiTable4 = _vm.cofiTable) === null || _vm$cofiTable4 === void 0 ? void 0 : _vm$cofiTable4.secteur_activite))])])])]), _vm._v(" "), _c("table", {
    staticClass: "table table-bordered mb-3"
  }, [_c("tbody", {
    staticStyle: {
      "font-size": "0.9rem"
    }
  }, [_c("tr", [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-sm-6 col-md-6 col-lg-6"
  }, [_c("span", {
    staticStyle: {
      color: "#7f8c8d",
      "font-size": "18px",
      "font-weight": "bold"
    }
  }, [_vm._v("SCORE GLOBALE : ")]), _vm._v(" "), _c("span", {
    staticStyle: {
      color: "#dc0030",
      "font-size": "36px",
      "font-weight": "bold"
    }
  }, [_vm._v(_vm._s((_vm$cofiTable5 = _vm.cofiTable) === null || _vm$cofiTable5 === void 0 ? void 0 : _vm$cofiTable5.cofiscore))])]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-6 col-md-6 col-lg-6"
  }, [_c("span", {
    staticStyle: {
      color: "#7f8c8d",
      "font-size": "18px",
      "font-weight": "bold"
    }
  }, [_vm._v("NOTE INTERNE : ")]), _vm._v(" "), _c("span", {
    staticStyle: {
      color: "#dc0030",
      "font-size": "36px",
      "font-weight": "bold"
    }
  }, [_vm._v(_vm._s((_vm$cofiTable6 = _vm.cofiTable) === null || _vm$cofiTable6 === void 0 ? void 0 : _vm$cofiTable6.note_interne))]), _vm._v(" "), _c("span", {
    staticStyle: {
      color: "#7f8c8d",
      "font-size": "12px"
    }
  }, [_vm._v("(" + _vm._s((_vm$cofiTable7 = _vm.cofiTable) === null || _vm$cofiTable7 === void 0 ? void 0 : _vm$cofiTable7.commentaire_note) + " )")])])])])])]), _vm._v(" "), _c("table", {
    staticClass: "table table-bordered mb-3"
  }, [_c("h6", [_vm._v("I- PERFORMANCES FINANCIERES")]), _vm._v(" "), _c("tbody", {
    staticStyle: {
      "font-size": "0.9rem"
    }
  }, [_vm._m(1), _vm._v(" "), _c("tr", [_c("td", [_vm._v(_vm._s((_vm$cofiTable8 = _vm.cofiTable) === null || _vm$cofiTable8 === void 0 ? void 0 : _vm$cofiTable8.ca_n1))]), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$cofiTable9 = _vm.cofiTable) === null || _vm$cofiTable9 === void 0 ? void 0 : _vm$cofiTable9.ca_n2))])]), _vm._v(" "), _vm._m(2), _vm._v(" "), _c("tr", [_c("td", [_vm._v(_vm._s((_vm$cofiTable0 = _vm.cofiTable) === null || _vm$cofiTable0 === void 0 ? void 0 : _vm$cofiTable0.rn_n1))]), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$cofiTable1 = _vm.cofiTable) === null || _vm$cofiTable1 === void 0 ? void 0 : _vm$cofiTable1.rn_n2))])])])]), _vm._v(" "), _c("table", {
    staticClass: "table table-bordered mb-3"
  }, [_c("h6", [_vm._v("II- EVALUATION DES RISQUES")]), _vm._v(" "), _c("h6", [_vm._v("II-1. Risque d'exploitation et Expérience de paiement")]), _vm._v(" "), _c("tbody", {
    staticStyle: {
      "font-size": "0.9rem"
    }
  }, [_vm._m(3), _vm._v(" "), _c("tr", [_c("td", [_vm._v(_vm._s((_vm$cofiTable10 = _vm.cofiTable) === null || _vm$cofiTable10 === void 0 ? void 0 : _vm$cofiTable10.experience_secteur))]), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$cofiTable11 = _vm.cofiTable) === null || _vm$cofiTable11 === void 0 ? void 0 : _vm$cofiTable11.moralite_dirigeant))])]), _vm._v(" "), _vm._m(4), _vm._v(" "), _c("tr", [_c("td", [_vm._v(_vm._s((_vm$cofiTable12 = _vm.cofiTable) === null || _vm$cofiTable12 === void 0 ? void 0 : _vm$cofiTable12.historique_paiement_cofina))]), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$cofiTable13 = _vm.cofiTable) === null || _vm$cofiTable13 === void 0 ? void 0 : _vm$cofiTable13.historique_paiement_confrere))])])])]), _vm._v(" "), _c("table", {
    staticClass: "table table-bordered mb-3"
  }, [_c("h6", [_vm._v("II-2. Risque de financement")]), _vm._v(" "), _c("tbody", {
    staticStyle: {
      "font-size": "0.9rem"
    }
  }, [_vm._m(5), _vm._v(" "), _c("tr", [_c("td", [_vm._v(_vm._s((_vm$cofiTable14 = _vm.cofiTable) === null || _vm$cofiTable14 === void 0 ? void 0 : _vm$cofiTable14.montant_sollicite))]), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$cofiTable15 = _vm.cofiTable) === null || _vm$cofiTable15 === void 0 ? void 0 : _vm$cofiTable15.montant_depot_garantie))])]), _vm._v(" "), _vm._m(6), _vm._v(" "), _c("tr", [_c("td", [_vm._v(_vm._s((_vm$cofiTable16 = _vm.cofiTable) === null || _vm$cofiTable16 === void 0 ? void 0 : _vm$cofiTable16.valeur_surete_immobiliere))]), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$cofiTable17 = _vm.cofiTable) === null || _vm$cofiTable17 === void 0 ? void 0 : _vm$cofiTable17.valeur_surete_mobiliere))])])])]), _vm._v(" "), _c("table", {
    staticClass: "table table-bordered mb-3"
  }, [_c("tbody", {
    staticStyle: {
      "font-size": "0.9rem"
    }
  }, [_vm._m(7), _vm._v(" "), _c("tr", [_c("td", {
    domProps: {
      innerHTML: _vm._s((_vm$cofiTable18 = _vm.cofiTable) === null || _vm$cofiTable18 === void 0 ? void 0 : _vm$cofiTable18.commentaires_note_sanity_check)
    }
  })])])])])])])]), _vm._v(" "), _c("section", {
    attrs: {
      id: "tab-item-2"
    }
  }, [_c("div", {
    staticClass: "row justify-content-center"
  }, [_c("div", {
    staticClass: "row table-responsive mt-3"
  }, [_c("table", {
    staticClass: "table table-bordered mb-3"
  }, [_c("tbody", {
    staticStyle: {
      "font-size": "0.9rem"
    }
  }, [_vm._m(8), _vm._v(" "), _c("tr", [_c("th", [_vm._v("Note de Variation du CA")]), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$cofiTable19 = _vm.cofiTable) === null || _vm$cofiTable19 === void 0 ? void 0 : _vm$cofiTable19.resultat_nte_taux_variation_ca))]), _vm._v(" "), _c("td", {
    staticClass: "coef"
  }, [_vm._v("6")]), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$cofiTable20 = _vm.cofiTable) === null || _vm$cofiTable20 === void 0 ? void 0 : _vm$cofiTable20.nte_taux_variation_ca_pond))])]), _vm._v(" "), _c("tr", [_c("th", [_vm._v("Note de Variation du RN")]), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$cofiTable21 = _vm.cofiTable) === null || _vm$cofiTable21 === void 0 ? void 0 : _vm$cofiTable21.resultat_nte_taux_variation_rn))]), _vm._v(" "), _c("td", {
    staticClass: "coef"
  }, [_vm._v("4")]), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$cofiTable22 = _vm.cofiTable) === null || _vm$cofiTable22 === void 0 ? void 0 : _vm$cofiTable22.nte_taux_variation_rn_pond))])]), _vm._v(" "), _c("tr", [_c("th", [_vm._v("Note d'historique de paiement chez COFINA")]), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$cofiTable23 = _vm.cofiTable) === null || _vm$cofiTable23 === void 0 ? void 0 : _vm$cofiTable23.resultat_nte_hist_paiement_cfn))]), _vm._v(" "), _c("td", {
    staticClass: "coef"
  }, [_vm._v("14")]), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$cofiTable24 = _vm.cofiTable) === null || _vm$cofiTable24 === void 0 ? void 0 : _vm$cofiTable24.nte_hist_paiement_cfn_pond))])]), _vm._v(" "), _c("tr", [_c("th", [_vm._v("Note d'historique de paiement chez les confrères")]), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$cofiTable25 = _vm.cofiTable) === null || _vm$cofiTable25 === void 0 ? void 0 : _vm$cofiTable25.resultat_nte_hist_paiement_confrere))]), _vm._v(" "), _c("td", {
    staticClass: "coef"
  }, [_vm._v("8")]), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$cofiTable26 = _vm.cofiTable) === null || _vm$cofiTable26 === void 0 ? void 0 : _vm$cofiTable26.nte_hist_paiement_confrere_pond))])]), _vm._v(" "), _c("tr", [_c("th", [_vm._v("Note d'expérience dans le secteur")]), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$cofiTable27 = _vm.cofiTable) === null || _vm$cofiTable27 === void 0 ? void 0 : _vm$cofiTable27.resultat_nte_exp_secteur))]), _vm._v(" "), _c("td", {
    staticClass: "coef"
  }, [_vm._v("14")]), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$cofiTable28 = _vm.cofiTable) === null || _vm$cofiTable28 === void 0 ? void 0 : _vm$cofiTable28.nte_exp_secteur_pond))])]), _vm._v(" "), _c("tr", [_c("th", [_vm._v("Note de risque sectoriel")]), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$cofiTable29 = _vm.cofiTable) === null || _vm$cofiTable29 === void 0 ? void 0 : _vm$cofiTable29.note_risq_secteur))]), _vm._v(" "), _c("td", {
    staticClass: "coef"
  }, [_vm._v("8")]), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$cofiTable30 = _vm.cofiTable) === null || _vm$cofiTable30 === void 0 ? void 0 : _vm$cofiTable30.nte_risque_sec_pond))])]), _vm._v(" "), _c("tr", [_c("th", [_vm._v("Note de couverture de l'exposition par les sûretés réelles")]), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$cofiTable31 = _vm.cofiTable) === null || _vm$cofiTable31 === void 0 ? void 0 : _vm$cofiTable31.nte_couv_expo))]), _vm._v(" "), _c("td", {
    staticClass: "coef"
  }, [_vm._v("12")]), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$cofiTable32 = _vm.cofiTable) === null || _vm$cofiTable32 === void 0 ? void 0 : _vm$cofiTable32.nte_couverture_expo_pond))])])])])])])])])])])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("tr", [_c("th", [_vm._v("Filiale")]), _vm._v(" "), _c("th", [_vm._v("N° Matricule Client:")]), _vm._v(" "), _c("th", [_vm._v("Raison sociale")]), _vm._v(" "), _c("th", [_vm._v("Secteur d'activité")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("tr", [_c("th", [_vm._v("Chiffres d'affaires année N-1 (En miliers de FCFA)")]), _vm._v(" "), _c("th", [_vm._v("Chiffres d'affaires année N-2 (En miliers de FCFA)")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("tr", [_c("th", [_vm._v("Résultat net année N-1 (En miliers de FCFA)")]), _vm._v(" "), _c("th", [_vm._v("Résultat net année N-2 (En miliers de FCFA)")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("tr", [_c("th", [_vm._v("Expérience dans le secteur (Nombre d'années)")]), _vm._v(" "), _c("th", [_vm._v("Moralité des dirigeants ")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("tr", [_c("th", [_vm._v("Historique de paiement chez COFINA")]), _vm._v(" "), _c("th", [_vm._v("Historique de paiement chez les confrères")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("tr", [_c("th", [_vm._v("Montant sollicité (en milliers de F CFA)")]), _vm._v(" "), _c("th", [_vm._v("Montant du Dépôt de Garantie (en milliers de F CFA)")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("tr", [_c("th", [_vm._v("Valeur des sûretés immobilières (hypothèques) (en milliers de F CFA)")]), _vm._v(" "), _c("th", [_vm._v("Valeur des sûretés mobilières (gage, nantissement) (en milliers de F CFA)")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("tr", [_c("th", [_vm._v("Commentaire sur la note du Sanity check:")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("tr", [_c("th", [_vm._v(" ")]), _vm._v(" "), _c("th", [_vm._v("Note")]), _vm._v(" "), _c("th", {
    staticClass: "coef"
  }, [_vm._v("Coefficient")]), _vm._v(" "), _c("th", [_vm._v("Note pondérée")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/LockedCofiscoreBoard.vue?vue&type=style&index=0&id=4e42dcc8&lang=css&scoped=true":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/LockedCofiscoreBoard.vue?vue&type=style&index=0&id=4e42dcc8&lang=css&scoped=true ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.memo[data-v-4e42dcc8] {\n    padding: 10px;\n    border: 2px solid #fff;\n    font-weight: 550;\n    font-size: 16px;\n    /* text-align: center; */\n    text-transform: uppercase;\n    background-color: #dc0030;\n    color: #fff;\n}\n.bg-grey[data-v-4e42dcc8]{\n    background-color:#f4f3f3;\n}\nth[data-v-4e42dcc8] {\n    background: #f4f3f3 !important;\n}\n\n/* Tabs Start */\n.ease[data-v-4e42dcc8] {\n    transition: all .5s;\n}\n.container[data-v-4e42dcc8] {\n    width: 100%;\n    max-width: 1000px;\n    margin: 0 auto;\n}\n.tabs[data-v-4e42dcc8] {\n    background: #fff;\n    position: relative;\n    margin-bottom: 50px;\n}\n.tabs > input[data-v-4e42dcc8],\n.tabs > span[data-v-4e42dcc8] {\n    width: 20%;\n    height: 60px;\n    line-height: 60px;\n    position: absolute;\n    top: 0;\n}\n.tabs > input[data-v-4e42dcc8] {\n    cursor: pointer;\n    filter: alpha(opacity=0);\n    opacity: 0;\n    position: absolute;\n    z-index: 99;\n}\n.tabs > span[data-v-4e42dcc8] {\n    background: #f0f0f0;\n    text-align: center;\n    overflow: hidden;\n}\n.tabs > span i[data-v-4e42dcc8],\n.tabs > span[data-v-4e42dcc8] {\n    transition: all .5s;\n}\n.tabs > input:hover + span[data-v-4e42dcc8] {\n    background: rgba(255,255,255,.1);\n}\n.tabs > input:checked + span[data-v-4e42dcc8] {\n    background: #fff;\n}\n.tabs > input:checked + span[data-v-4e42dcc8],\n.tabs > input:hover + span[data-v-4e42dcc8] {\n    color: #3498DB;\n}\n#tab-1[data-v-4e42dcc8], #tab-1 + span[data-v-4e42dcc8] {\n    left: 0;\n}\n#tab-2[data-v-4e42dcc8], #tab-2 + span[data-v-4e42dcc8] {\n    left: 20%;\n}\n#tab-3[data-v-4e42dcc8], #tab-3 + span[data-v-4e42dcc8] {\n    left: 40%;\n}\n#tab-4[data-v-4e42dcc8], #tab-4 + span[data-v-4e42dcc8] {\n    left: 60%;\n}\n#tab-5[data-v-4e42dcc8], #tab-5 + span[data-v-4e42dcc8] {\n    left: 80%;\n}\n.tab-content[data-v-4e42dcc8] {\n    padding: 80px 20px 20px;\n    width: 100%;\n    min-height: 340px;\n}\n.tab-content section[data-v-4e42dcc8] {\n    width: 100%;\n    display: none;\n}\n.tab-content section h1[data-v-4e42dcc8] {\n    margin-top: 15px;\n    font-size: 100px;\n    font-weight: 100;\n    text-align: center;\n}\n#tab-1:checked ~ .tab-content #tab-item-1[data-v-4e42dcc8]  {\n    display: block;\n}\n#tab-2:checked ~ .tab-content #tab-item-2[data-v-4e42dcc8]  {\n    display: block;\n}\n#tab-3:checked ~ .tab-content #tab-item-3[data-v-4e42dcc8]  {\n    display: block;\n}\n#tab-4:checked ~ .tab-content #tab-item-4[data-v-4e42dcc8]  {\n    display: block;\n}\n#tab-5:checked ~ .tab-content #tab-item-5[data-v-4e42dcc8]  {\n    display: block;\n}\n\n/* effect-1 */\n.effect-1 > input:checked + span[data-v-4e42dcc8] {\n    background: #fff;\n}\n\n\n/* effect-2 */\n.effect-2 span i[data-v-4e42dcc8]{\n    padding-right: 15px;\n}\n@media (max-width: 600px) {\n.effect-2 span span[data-v-4e42dcc8] {display: none;}\n.effect-2 span i[data-v-4e42dcc8] {padding: 0;}\n}\n\n/* effect-3 */\n.effect-3 .line[data-v-4e42dcc8]{\n    background: #3498DB;\n    width: 20%;\n    height: 4px;\n    position: absolute;\n    top: 56px;\n}\n#tab-1:checked ~ .line[data-v-4e42dcc8] {\n    left: 0;\n}\n#tab-2:checked ~ .line[data-v-4e42dcc8] {\n    left: 20%;\n}\n#tab-3:checked ~ .line[data-v-4e42dcc8] {\n    left: 40%;\n}\n#tab-4:checked ~ .line[data-v-4e42dcc8] {\n    left: 60%;\n}\n#tab-5:checked ~ .line[data-v-4e42dcc8] {\n    left: 80%;\n}\n\n\n/* effect-4 */\n.effect-4 span i[data-v-4e42dcc8]{\n    font-size: 18px;\n    display: block;\n    position: absolute;\n    left: 50%;\n    top: 0;\n    opacity: 0;\n    transform: translateX(-50%);\n}\n.effect-4 span span[data-v-4e42dcc8]{\n    position: relative;\n    top: 10px;\n}\n.effect-4 > input:checked + span i[data-v-4e42dcc8],\n.effect-4 > input:hover + span i[data-v-4e42dcc8] {\n    top: 20%;\n    opacity: 1;\n}\n\n/* effect-5 */\n.effect-5 > input:checked + span i[data-v-4e42dcc8],\n.effect-5 > input:hover + span i[data-v-4e42dcc8] {\n    font-size: 25px;\n}\nh6[data-v-4e42dcc8] {\n  /*color: #dc0030;*/\n  color:#dc0030; font-size:18px; font-weight:bold;\n}\n.coef[data-v-4e42dcc8]{\n  color:#dc0030;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/LockedCofiscoreBoard.vue?vue&type=style&index=0&id=4e42dcc8&lang=css&scoped=true":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/LockedCofiscoreBoard.vue?vue&type=style&index=0&id=4e42dcc8&lang=css&scoped=true ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LockedCofiscoreBoard_vue_vue_type_style_index_0_id_4e42dcc8_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./LockedCofiscoreBoard.vue?vue&type=style&index=0&id=4e42dcc8&lang=css&scoped=true */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/LockedCofiscoreBoard.vue?vue&type=style&index=0&id=4e42dcc8&lang=css&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LockedCofiscoreBoard_vue_vue_type_style_index_0_id_4e42dcc8_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LockedCofiscoreBoard_vue_vue_type_style_index_0_id_4e42dcc8_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/shared/LockedCofiscoreBoard.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/components/shared/LockedCofiscoreBoard.vue ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _LockedCofiscoreBoard_vue_vue_type_template_id_4e42dcc8_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LockedCofiscoreBoard.vue?vue&type=template&id=4e42dcc8&scoped=true */ "./resources/js/components/shared/LockedCofiscoreBoard.vue?vue&type=template&id=4e42dcc8&scoped=true");
/* harmony import */ var _LockedCofiscoreBoard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LockedCofiscoreBoard.vue?vue&type=script&lang=js */ "./resources/js/components/shared/LockedCofiscoreBoard.vue?vue&type=script&lang=js");
/* harmony import */ var _LockedCofiscoreBoard_vue_vue_type_style_index_0_id_4e42dcc8_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LockedCofiscoreBoard.vue?vue&type=style&index=0&id=4e42dcc8&lang=css&scoped=true */ "./resources/js/components/shared/LockedCofiscoreBoard.vue?vue&type=style&index=0&id=4e42dcc8&lang=css&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _LockedCofiscoreBoard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _LockedCofiscoreBoard_vue_vue_type_template_id_4e42dcc8_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _LockedCofiscoreBoard_vue_vue_type_template_id_4e42dcc8_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "4e42dcc8",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/shared/LockedCofiscoreBoard.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/shared/LockedCofiscoreBoard.vue?vue&type=script&lang=js":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/shared/LockedCofiscoreBoard.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LockedCofiscoreBoard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./LockedCofiscoreBoard.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/LockedCofiscoreBoard.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LockedCofiscoreBoard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/shared/LockedCofiscoreBoard.vue?vue&type=style&index=0&id=4e42dcc8&lang=css&scoped=true":
/*!*************************************************************************************************************************!*\
  !*** ./resources/js/components/shared/LockedCofiscoreBoard.vue?vue&type=style&index=0&id=4e42dcc8&lang=css&scoped=true ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LockedCofiscoreBoard_vue_vue_type_style_index_0_id_4e42dcc8_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./LockedCofiscoreBoard.vue?vue&type=style&index=0&id=4e42dcc8&lang=css&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/LockedCofiscoreBoard.vue?vue&type=style&index=0&id=4e42dcc8&lang=css&scoped=true");


/***/ }),

/***/ "./resources/js/components/shared/LockedCofiscoreBoard.vue?vue&type=template&id=4e42dcc8&scoped=true":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/components/shared/LockedCofiscoreBoard.vue?vue&type=template&id=4e42dcc8&scoped=true ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LockedCofiscoreBoard_vue_vue_type_template_id_4e42dcc8_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LockedCofiscoreBoard_vue_vue_type_template_id_4e42dcc8_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LockedCofiscoreBoard_vue_vue_type_template_id_4e42dcc8_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./LockedCofiscoreBoard.vue?vue&type=template&id=4e42dcc8&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/LockedCofiscoreBoard.vue?vue&type=template&id=4e42dcc8&scoped=true");


/***/ })

}]);