"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_offview_bank_nsia_memo_scene_pres_client_PRES1_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/scene_pres_client/PRES1.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/scene_pres_client/PRES1.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "PresentationDeTaTransaction",
  props: {
    dossier_credit: Object
  },
  data: function data() {
    return {
      indice: "",
      activite: "",
      emprunteur: "",
      annee_referentielle: 0,
      data_tb_1: null,
      data_tb_2: null,
      data_tb_4: null,
      data_tb_5: null,
      diffBilan_1: 0,
      diffBilan_2: 0,
      diffBilan_3: 0
    };
  },
  mounted: function mounted() {
    var _this$dossier_credit, _this$dossier_credit2, _this$dossier_credit3, _this$dossier_credit4, _this$dossier_credit5, _this$dossier_credit6, _this$dossier_credit7, _this$dossier_credit8;
    var applied_templ_name = (_this$dossier_credit = this.dossier_credit) === null || _this$dossier_credit === void 0 ? void 0 : _this$dossier_credit.applied_templ_name;
    var tbArrays = this.determineCredPubTables(applied_templ_name);
    var credpub00 = tbArrays[0];
    var credpub01 = tbArrays[1];
    var credpub02 = tbArrays[2];
    var credpub03 = tbArrays[3];
    var credpub04 = tbArrays[4];
    this.indice = (_this$dossier_credit2 = this.dossier_credit) === null || _this$dossier_credit2 === void 0 || (_this$dossier_credit2 = _this$dossier_credit2.caf_recorded_file) === null || _this$dossier_credit2 === void 0 || (_this$dossier_credit2 = _this$dossier_credit2.client) === null || _this$dossier_credit2 === void 0 ? void 0 : _this$dossier_credit2.matcli;
    this.emprunteur = (_this$dossier_credit3 = this.dossier_credit) === null || _this$dossier_credit3 === void 0 || (_this$dossier_credit3 = _this$dossier_credit3[credpub00]) === null || _this$dossier_credit3 === void 0 ? void 0 : _this$dossier_credit3.denomination_client;
    this.annee_referentielle = Number((_this$dossier_credit4 = this.dossier_credit) === null || _this$dossier_credit4 === void 0 || (_this$dossier_credit4 = _this$dossier_credit4[credpub00]) === null || _this$dossier_credit4 === void 0 ? void 0 : _this$dossier_credit4.annee_referentielle);
    this.data_tb_1 = (_this$dossier_credit5 = this.dossier_credit) === null || _this$dossier_credit5 === void 0 ? void 0 : _this$dossier_credit5[credpub00];
    this.data_tb_2 = (_this$dossier_credit6 = this.dossier_credit) === null || _this$dossier_credit6 === void 0 ? void 0 : _this$dossier_credit6[credpub01];
    this.data_tb_4 = (_this$dossier_credit7 = this.dossier_credit) === null || _this$dossier_credit7 === void 0 ? void 0 : _this$dossier_credit7[credpub03];
    this.data_tb_5 = (_this$dossier_credit8 = this.dossier_credit) === null || _this$dossier_credit8 === void 0 ? void 0 : _this$dossier_credit8[credpub04];
  },
  methods: {
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/scene_pres_client/PRES1.vue?vue&type=template&id=77c471a9&scoped=true":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/scene_pres_client/PRES1.vue?vue&type=template&id=77c471a9&scoped=true ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm$data_tb_, _vm$data_tb_2, _vm$data_tb_3, _vm$data_tb_4, _vm$data_tb_5, _vm$data_tb_6, _vm$data_tb_7, _vm$data_tb_8, _vm$data_tb_9, _vm$data_tb_0, _vm$data_tb_1, _vm$data_tb_10, _vm$data_tb_11, _vm$data_tb_12, _vm$data_tb_13, _vm$data_tb_14, _vm$data_tb_15, _vm$data_tb_16, _vm$data_tb_17, _vm$data_tb_18, _vm$data_tb_19, _vm$data_tb_20, _vm$data_tb_21, _vm$data_tb_22, _vm$data_tb_23, _vm$data_tb_24, _vm$data_tb_25, _vm$data_tb_26, _vm$data_tb_27, _vm$data_tb_28, _vm$data_tb_29, _vm$data_tb_30, _vm$data_tb_31, _vm$data_tb_32, _vm$data_tb_33, _vm$data_tb_34, _vm$data_tb_35, _vm$data_tb_36, _vm$data_tb_37, _vm$data_tb_38, _vm$data_tb_39, _vm$data_tb_40, _vm$data_tb_41, _vm$data_tb_42;
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12 mt-3"
  }, [_c("div", {
    staticClass: "table-responsive mb-4"
  }, [_c("table", {
    staticClass: "table table-bordered",
    staticStyle: {
      "font-size": ".9rem"
    }
  }, [_c("tbody", [_c("tr", [_c("td", {
    staticClass: "fw-bold col-4 text-uppercase"
  }, [_vm._v("Indice Client")]), _vm._v(" "), _c("td", {
    staticClass: "col-2"
  }, [_vm._v(_vm._s(_vm.indice))]), _vm._v(" "), _c("td", {
    staticClass: "fw-bold col-4 text-uppercase"
  }, [_vm._v("Compte Courant")]), _vm._v(" "), _c("td", {
    staticClass: "col-2"
  }, [_vm._v(_vm._s((_vm$data_tb_ = _vm.data_tb_2) === null || _vm$data_tb_ === void 0 ? void 0 : _vm$data_tb_.compte_courant))])]), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "fw-bold text-uppercase"
  }, [_vm._v("Classification (Groupe)")]), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$data_tb_2 = _vm.data_tb_1) === null || _vm$data_tb_2 === void 0 ? void 0 : _vm$data_tb_2.groupe))]), _vm._v(" "), _c("td", {
    staticClass: "fw-bold text-uppercase"
  }, [_vm._v("Date de création de la société")]), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$data_tb_3 = _vm.data_tb_1) !== null && _vm$data_tb_3 !== void 0 && _vm$data_tb_3.date_creation && ((_vm$data_tb_4 = _vm.data_tb_1) === null || _vm$data_tb_4 === void 0 ? void 0 : _vm$data_tb_4.date_creation) != "" ? _vm.formatDate((_vm$data_tb_5 = _vm.data_tb_1) === null || _vm$data_tb_5 === void 0 ? void 0 : _vm$data_tb_5.date_creation) : ""))])]), _vm._v(" "), (_vm$data_tb_6 = _vm.data_tb_1) !== null && _vm$data_tb_6 !== void 0 && _vm$data_tb_6.date_entre_relation_biao_ci && ((_vm$data_tb_7 = _vm.data_tb_1) === null || _vm$data_tb_7 === void 0 ? void 0 : _vm$data_tb_7.date_entre_relation_biao_ci) != "" ? _c("tr", [_c("td", {
    staticClass: "fw-bold text-uppercase"
  }, [_vm._v("Date d'entrée en relation avec la BIAO-CI")]), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$data_tb_8 = _vm.data_tb_1) !== null && _vm$data_tb_8 !== void 0 && _vm$data_tb_8.date_entre_relation_biao_ci && ((_vm$data_tb_9 = _vm.data_tb_1) === null || _vm$data_tb_9 === void 0 ? void 0 : _vm$data_tb_9.date_entre_relation_biao_ci) != "" ? _vm.formatDate((_vm$data_tb_0 = _vm.data_tb_1) === null || _vm$data_tb_0 === void 0 ? void 0 : _vm$data_tb_0.date_entre_relation_biao_ci) : ""))]), _vm._v(" "), _c("td", {
    staticClass: "bg-grey",
    attrs: {
      colspan: "2"
    }
  })]) : _vm._e()])]), _vm._v(" "), _c("div", {
    staticClass: "table-responsive mt-4 mb-4"
  }, [_c("table", {
    staticClass: "table table-bordered mb-2",
    staticStyle: {
      "font-size": ".9rem"
    }
  }, [_vm._m(0), _vm._v(" "), _c("tbody", [_c("tr", [_c("th", {
    staticClass: "col-3"
  }, [_vm._v("Postale")]), _vm._v(" "), _c("td", {
    staticClass: "col-3"
  }, [_vm._v(_vm._s((_vm$data_tb_1 = _vm.data_tb_1) === null || _vm$data_tb_1 === void 0 ? void 0 : _vm$data_tb_1.adresse_postale))]), _vm._v(" "), _c("th", {
    staticClass: "col-3"
  }, [_vm._v("Géographique")]), _vm._v(" "), _c("td", {
    staticClass: "col-3"
  }, [_vm._v(_vm._s((_vm$data_tb_10 = _vm.data_tb_1) === null || _vm$data_tb_10 === void 0 ? void 0 : _vm$data_tb_10.adresse_geographique))])]), _vm._v(" "), _c("tr", [_c("th", [_vm._v("Téléphone")]), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$data_tb_11 = _vm.data_tb_1) === null || _vm$data_tb_11 === void 0 ? void 0 : _vm$data_tb_11.contact_client))]), _vm._v(" "), _c("th", [_vm._v("Fax")]), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$data_tb_12 = _vm.data_tb_1) === null || _vm$data_tb_12 === void 0 ? void 0 : _vm$data_tb_12.adresse_fax))])])])])]), _vm._v(" "), (_vm$data_tb_13 = _vm.data_tb_1) !== null && _vm$data_tb_13 !== void 0 && _vm$data_tb_13.objet_social ? _c("div", {
    staticClass: "table-responsive mb-4"
  }, [_c("table", {
    staticClass: "table table-bordered mb-2",
    staticStyle: {
      "font-size": ".9rem"
    }
  }, [_vm._m(1), _vm._v(" "), _c("tbody", [_c("tr", [_c("td", {
    domProps: {
      innerHTML: _vm._s((_vm$data_tb_14 = _vm.data_tb_1) === null || _vm$data_tb_14 === void 0 ? void 0 : _vm$data_tb_14.objet_social)
    }
  })])])])]) : _vm._e(), _vm._v(" "), (_vm$data_tb_15 = _vm.data_tb_1) !== null && _vm$data_tb_15 !== void 0 && _vm$data_tb_15.actionnariats ? _c("div", {
    staticClass: "table-responsive mb-4"
  }, [_c("table", {
    staticClass: "table table-bordered mb-2",
    staticStyle: {
      "font-size": ".9rem"
    }
  }, [_vm._m(2), _vm._v(" "), _c("tbody", [_vm._l((_vm$data_tb_16 = _vm.data_tb_1) === null || _vm$data_tb_16 === void 0 ? void 0 : _vm$data_tb_16.actionnariats, function (actionnariat, index) {
    return _c("tr", {
      key: index
    }, [_c("td", {
      staticClass: "col-6"
    }, [_vm._v("\n                                    " + _vm._s(actionnariat.nom_actionnaire) + "\n                                ")]), _vm._v(" "), _c("td", {
      staticClass: "col-6 text-center"
    }, [_vm._v("\n                                    " + _vm._s(actionnariat.pourcentage_participation) + "\n                                ")])]);
  }), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "text-right fw-bold vertical-middle"
  }, [_vm._v("\n                                    Total\n                                ")]), _vm._v(" "), _c("td", {
    staticClass: "text-center"
  }, [_vm._v("\n                                    " + _vm._s((_vm$data_tb_17 = _vm.data_tb_1) === null || _vm$data_tb_17 === void 0 ? void 0 : _vm$data_tb_17.total_part) + "\n                                ")])])], 2)])]) : _vm._e(), _vm._v(" "), (_vm$data_tb_18 = _vm.data_tb_1) !== null && _vm$data_tb_18 !== void 0 && _vm$data_tb_18.historique_recent_affaire ? _c("div", {
    staticClass: "table-responsive mb-4"
  }, [_c("table", {
    staticClass: "table table-bordered mb-2",
    staticStyle: {
      "font-size": ".9rem"
    }
  }, [_vm._m(3), _vm._v(" "), _c("tbody", [_c("tr", [_c("td", {
    staticClass: "p-2",
    domProps: {
      innerHTML: _vm._s((_vm$data_tb_19 = _vm.data_tb_1) === null || _vm$data_tb_19 === void 0 ? void 0 : _vm$data_tb_19.historique_recent_affaire)
    }
  })])])])]) : _vm._e(), _vm._v(" "), (_vm$data_tb_20 = _vm.data_tb_1) !== null && _vm$data_tb_20 !== void 0 && _vm$data_tb_20.managements ? _c("div", {
    staticClass: "table-responsive mb-4"
  }, [_c("table", {
    staticClass: "table table-bordered mb-2",
    staticStyle: {
      "font-size": ".9rem"
    }
  }, [_vm._m(4), _vm._v(" "), _c("tbody", _vm._l((_vm$data_tb_21 = _vm.data_tb_1) === null || _vm$data_tb_21 === void 0 ? void 0 : _vm$data_tb_21.managements, function (management, index) {
    return _c("tr", {
      key: index
    }, [_c("td", {
      staticClass: "col-3"
    }, [_vm._v("\n                                    " + _vm._s(management.nom) + "\n                                ")]), _vm._v(" "), _c("td", {
      staticClass: "col-3"
    }, [_vm._v("\n                                    " + _vm._s(management.sexe) + "\n                                ")]), _vm._v(" "), _c("td", {
      staticClass: "col-3"
    }, [_vm._v("\n                                    " + _vm._s(management.fonction) + "\n                                ")]), _vm._v(" "), _c("td", {
      staticClass: "col-3"
    }, [_vm._v("\n                                    " + _vm._s(management.qualification_diplome) + "\n                                ")])]);
  }), 0)])]) : _vm._e(), _vm._v(" "), (_vm$data_tb_22 = _vm.data_tb_1) !== null && _vm$data_tb_22 !== void 0 && _vm$data_tb_22.info_complementaires ? _c("div", {
    staticClass: "table-responsive mb-4"
  }, [_c("table", {
    staticClass: "table table-bordered mb-3",
    staticStyle: {
      "font-size": ".9rem"
    }
  }, [_vm._m(5), _vm._v(" "), _c("tbody", [_c("tr", [_c("td", [_vm._l((_vm$data_tb_23 = _vm.data_tb_1) === null || _vm$data_tb_23 === void 0 ? void 0 : _vm$data_tb_23.info_complementaires, function (info_complementaire, index) {
    return _c("div", {
      key: index
    }, [_c("table", {
      staticClass: "table"
    }, [_c("tr", [_c("td", {
      staticClass: "col-4"
    }, [_c("b", [_vm._v("Effectif : ")]), _vm._v(_vm._s(info_complementaire.effectif))]), _vm._v(" "), _c("td", {
      staticClass: "col-4"
    }, [_c("b", [_vm._v("Nombre de femmes :")]), _vm._v(" " + _vm._s(info_complementaire.nbre_femme))]), _vm._v(" "), _c("td", {
      staticClass: "col-4"
    }, [_c("b", [_vm._v("Nombre de jeune (- de 35 ans) :")]), _vm._v(" " + _vm._s(info_complementaire.nbre_jeune))])])])]);
  }), _vm._v(" "), _vm._l((_vm$data_tb_24 = _vm.data_tb_1) === null || _vm$data_tb_24 === void 0 ? void 0 : _vm$data_tb_24.impacts, function (impact, index) {
    return _c("div", {
      key: "_" + index,
      staticClass: "form-group mt-1"
    }, [_c("div", {
      staticClass: "form-check d-flex",
      staticStyle: {
        "padding-left": "0"
      }
    }, [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model.lazy",
        value: impact.value,
        expression: "impact.value",
        modifiers: {
          lazy: true
        }
      }],
      staticClass: "form-check-input mx-1",
      attrs: {
        type: "checkbox",
        disabled: ""
      },
      domProps: {
        checked: Array.isArray(impact.value) ? _vm._i(impact.value, null) > -1 : impact.value
      },
      on: {
        change: function change($event) {
          var $$a = impact.value,
            $$el = $event.target,
            $$c = $$el.checked ? true : false;
          if (Array.isArray($$a)) {
            var $$v = null,
              $$i = _vm._i($$a, $$v);
            if ($$el.checked) {
              $$i < 0 && _vm.$set(impact, "value", $$a.concat([$$v]));
            } else {
              $$i > -1 && _vm.$set(impact, "value", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
            }
          } else {
            _vm.$set(impact, "value", $$c);
          }
        }
      }
    }), _vm._v(" "), _c("label", {
      staticClass: "mx-1",
      staticStyle: {
        "margin-top": "5px"
      }
    }, [_vm._v(_vm._s(impact === null || impact === void 0 ? void 0 : impact.label))])])]);
  })], 2)])])])]) : _vm._e(), _vm._v(" "), (_vm$data_tb_25 = _vm.data_tb_1) !== null && _vm$data_tb_25 !== void 0 && _vm$data_tb_25.relation_bancaires ? _c("div", {
    staticClass: "table-responsive mb-4"
  }, [_c("table", {
    staticClass: "table table-bordered mb-2",
    staticStyle: {
      "font-size": ".9rem"
    }
  }, [_vm._m(6), _vm._v(" "), _c("tbody", _vm._l((_vm$data_tb_26 = _vm.data_tb_1) === null || _vm$data_tb_26 === void 0 ? void 0 : _vm$data_tb_26.relation_bancaires, function (relation_bancaire, index) {
    return _c("tr", {
      key: index
    }, [_c("td", {
      staticClass: "col-4"
    }, [_vm._v("\n                                    " + _vm._s(relation_bancaire.banque) + "\n                                ")]), _vm._v(" "), _c("td", {
      staticClass: "col-4"
    }, [_vm._v("\n                                    " + _vm._s(relation_bancaire.ligne) + "\n                                ")]), _vm._v(" "), _c("td", {
      staticClass: "col-4"
    }, [_c("span", {
      domProps: {
        innerHTML: _vm._s(relation_bancaire.garantie)
      }
    })])]);
  }), 0)])]) : _vm._e(), _vm._v(" "), (_vm$data_tb_27 = _vm.data_tb_1) !== null && _vm$data_tb_27 !== void 0 && _vm$data_tb_27.fournisseurs ? _c("div", {
    staticClass: "table-responsive mb-4"
  }, [_c("table", {
    staticClass: "table table-bordered mb-2",
    staticStyle: {
      "font-size": ".9rem"
    }
  }, [_vm._m(7), _vm._v(" "), _c("tbody", _vm._l((_vm$data_tb_28 = _vm.data_tb_1) === null || _vm$data_tb_28 === void 0 ? void 0 : _vm$data_tb_28.fournisseurs, function (fournisseur, index) {
    return _c("tr", {
      key: index
    }, [_c("td", {
      staticClass: "col-3"
    }, [_vm._v("\n                                    " + _vm._s(fournisseur.nom) + "\n                                ")]), _vm._v(" "), _c("td", {
      staticClass: "col-3"
    }, [_vm._v("\n                                    " + _vm._s(fournisseur.produit) + "\n                                ")]), _vm._v(" "), _c("td", {
      staticClass: "col-3"
    }, [_vm._v("\n                                    " + _vm._s(fournisseur.mode_reglement) + "\n                                ")]), _vm._v(" "), _c("td", {
      staticClass: "col-3"
    }, [_vm._v("\n                                    " + _vm._s(fournisseur.delai_reglement) + "\n                                ")])]);
  }), 0)])]) : _vm._e(), _vm._v(" "), (_vm$data_tb_29 = _vm.data_tb_1) !== null && _vm$data_tb_29 !== void 0 && _vm$data_tb_29.clients ? _c("div", {
    staticClass: "table-responsive mb-4"
  }, [_c("table", {
    staticClass: "table table-bordered mb-2",
    staticStyle: {
      "font-size": ".9rem"
    }
  }, [_vm._m(8), _vm._v(" "), _c("tbody", _vm._l((_vm$data_tb_30 = _vm.data_tb_1) === null || _vm$data_tb_30 === void 0 ? void 0 : _vm$data_tb_30.clients, function (client, index) {
    return _c("tr", {
      key: index
    }, [_c("td", {
      staticClass: "col-3"
    }, [_vm._v("\n                                    " + _vm._s(client.nom) + "\n                                ")]), _vm._v(" "), _c("td", {
      staticClass: "col-3"
    }, [_vm._v("\n                                    " + _vm._s(client.produit) + "\n                                ")]), _vm._v(" "), _c("td", {
      staticClass: "col-3"
    }, [_vm._v("\n                                    " + _vm._s(client.mode_reglement) + "\n                                ")]), _vm._v(" "), _c("td", {
      staticClass: "col-3"
    }, [_vm._v("\n                                    " + _vm._s(client.delai_reglement) + "\n                                ")])]);
  }), 0)])]) : _vm._e(), _vm._v(" "), (_vm$data_tb_31 = _vm.data_tb_5) !== null && _vm$data_tb_31 !== void 0 && _vm$data_tb_31.elements_financiers ? _c("div", {
    staticClass: "table-responsive mb-4"
  }, [_c("table", {
    staticClass: "table table-bordered mb-2",
    staticStyle: {
      "font-size": ".9rem"
    }
  }, [_c("thead", [_vm._m(9), _vm._v(" "), _c("tr", [_vm._m(10), _vm._v(" "), _c("th", {
    staticClass: "text-center"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("N - 2 (" + _vm._s(_vm.annee_referentielle - 2) + ")")])]), _vm._v(" "), _c("th", {
    staticClass: "text-center"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("N - 1 (" + _vm._s(_vm.annee_referentielle - 1) + ")")])]), _vm._v(" "), _c("th", {
    staticClass: "text-center"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("N (" + _vm._s(_vm.annee_referentielle) + ")")])])])]), _vm._v(" "), _c("tbody", [_vm._l((_vm$data_tb_32 = _vm.data_tb_5) === null || _vm$data_tb_32 === void 0 ? void 0 : _vm$data_tb_32.elements_financiers, function (act_rent, index) {
    return _c("tr", {
      key: index
    }, [_c("td", [_c("label", [_vm._v(_vm._s(act_rent === null || act_rent === void 0 ? void 0 : act_rent.libelle))])]), _vm._v(" "), _c("td", {
      staticClass: "text-right"
    }, [_vm._v(_vm._s(act_rent === null || act_rent === void 0 ? void 0 : act_rent.montant_n_2))]), _vm._v(" "), _c("td", {
      staticClass: "text-right"
    }, [_vm._v(_vm._s(act_rent === null || act_rent === void 0 ? void 0 : act_rent.montant_n_1))]), _vm._v(" "), _c("td", {
      staticClass: "text-right"
    }, [_vm._v(_vm._s(act_rent === null || act_rent === void 0 ? void 0 : act_rent.montant_n))])]);
  }), _vm._v(" "), _c("tr", [_c("td", [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_c("b", [_vm._v(_vm._s((_vm$data_tb_33 = _vm.data_tb_5) === null || _vm$data_tb_33 === void 0 || (_vm$data_tb_33 = _vm$data_tb_33.total_bilan) === null || _vm$data_tb_33 === void 0 ? void 0 : _vm$data_tb_33.libelle))])])]), _vm._v(" "), _c("td", {
    staticClass: "text-right"
  }, [_vm._v(_vm._s(_vm._f("formatNumber")((_vm$data_tb_34 = _vm.data_tb_5) === null || _vm$data_tb_34 === void 0 || (_vm$data_tb_34 = _vm$data_tb_34.total_bilan) === null || _vm$data_tb_34 === void 0 ? void 0 : _vm$data_tb_34.montant_n_2)))]), _vm._v(" "), _c("td", {
    staticClass: "text-right"
  }, [_vm._v(_vm._s(_vm._f("formatNumber")((_vm$data_tb_35 = _vm.data_tb_5) === null || _vm$data_tb_35 === void 0 || (_vm$data_tb_35 = _vm$data_tb_35.total_bilan) === null || _vm$data_tb_35 === void 0 ? void 0 : _vm$data_tb_35.montant_n_1)))]), _vm._v(" "), _c("td", {
    staticClass: "text-right"
  }, [_vm._v(_vm._s(_vm._f("formatNumber")((_vm$data_tb_36 = _vm.data_tb_5) === null || _vm$data_tb_36 === void 0 || (_vm$data_tb_36 = _vm$data_tb_36.total_bilan) === null || _vm$data_tb_36 === void 0 ? void 0 : _vm$data_tb_36.montant_n)))])]), _vm._v(" "), _c("tr", [_c("td", [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_c("b", [_vm._v(_vm._s((_vm$data_tb_37 = _vm.data_tb_5) === null || _vm$data_tb_37 === void 0 || (_vm$data_tb_37 = _vm$data_tb_37.fp_sur_total_bilan) === null || _vm$data_tb_37 === void 0 ? void 0 : _vm$data_tb_37.libelle))])])]), _vm._v(" "), _c("td", {
    staticClass: "text-right"
  }, [_vm._v(_vm._s(_vm._f("formatNumber")((_vm$data_tb_38 = _vm.data_tb_5) === null || _vm$data_tb_38 === void 0 || (_vm$data_tb_38 = _vm$data_tb_38.fp_sur_total_bilan) === null || _vm$data_tb_38 === void 0 ? void 0 : _vm$data_tb_38.montant_n_2, true)))]), _vm._v(" "), _c("td", {
    staticClass: "text-right"
  }, [_vm._v(_vm._s(_vm._f("formatNumber")((_vm$data_tb_39 = _vm.data_tb_5) === null || _vm$data_tb_39 === void 0 || (_vm$data_tb_39 = _vm$data_tb_39.fp_sur_total_bilan) === null || _vm$data_tb_39 === void 0 ? void 0 : _vm$data_tb_39.montant_n_1, true)))]), _vm._v(" "), _c("td", {
    staticClass: "text-right"
  }, [_vm._v(_vm._s(_vm._f("formatNumber")((_vm$data_tb_40 = _vm.data_tb_5) === null || _vm$data_tb_40 === void 0 || (_vm$data_tb_40 = _vm$data_tb_40.fp_sur_total_bilan) === null || _vm$data_tb_40 === void 0 ? void 0 : _vm$data_tb_40.montant_n, true)))])])], 2)])]) : _vm._e(), _vm._v(" "), (_vm$data_tb_41 = _vm.data_tb_4) !== null && _vm$data_tb_41 !== void 0 && _vm$data_tb_41.mouvement_confies ? _c("div", {
    staticClass: "table-responsive mb-4"
  }, [_c("table", {
    staticClass: "table table-bordered mb-2",
    staticStyle: {
      "font-size": ".9rem"
    }
  }, [_vm._m(11), _vm._v(" "), _vm._l((_vm$data_tb_42 = _vm.data_tb_4) === null || _vm$data_tb_42 === void 0 ? void 0 : _vm$data_tb_42.mouvement_confies, function (element, ind) {
    return [_c("tbody", {
      key: ind
    }, [ind != 0 ? _c("tr", [_c("th", {
      staticClass: "m-2",
      attrs: {
        colspan: "4"
      }
    })]) : _vm._e(), _vm._v(" "), _c("tr", [_c("th", {
      staticClass: "col-6 bg-grey"
    }, [_vm._v(_vm._s(element.banque_place))]), _vm._v(" "), _c("th", {
      staticClass: "text-center col-2"
    }, [_c("label", {
      attrs: {
        "for": ""
      }
    }, [_vm._v(_vm._s(element === null || element === void 0 ? void 0 : element.annee_n2))])]), _vm._v(" "), _c("th", {
      staticClass: "text-center col-2"
    }, [_c("label", {
      attrs: {
        "for": ""
      }
    }, [_vm._v(_vm._s(element === null || element === void 0 ? void 0 : element.annee_n1))])]), _vm._v(" "), _c("th", {
      staticClass: "text-center col-2"
    }, [_c("label", {
      attrs: {
        "for": ""
      }
    }, [_vm._v(_vm._s(element === null || element === void 0 ? void 0 : element.annee_n))])])]), _vm._v(" "), _c("tr", [_c("td", {
      staticClass: "bg-grey",
      staticStyle: {
        "font-size": "0.8rem"
      }
    }, [_vm._v("Mouvements")]), _vm._v(" "), _c("td", {
      staticClass: "text-right"
    }, [_vm._v(_vm._s(_vm._f("formatNumber")(element.mouvement_n2)))]), _vm._v(" "), _c("td", {
      staticClass: "text-right"
    }, [_vm._v(_vm._s(_vm._f("formatNumber")(element.mouvement_n1)))]), _vm._v(" "), _c("td", {
      staticClass: "text-right"
    }, [_vm._v(_vm._s(_vm._f("formatNumber")(element.mouvement_n)))])]), _vm._v(" "), _c("tr", [_c("td", {
      staticClass: "bg-grey",
      staticStyle: {
        "font-size": "0.8rem"
      }
    }, [_vm._v("CA")]), _vm._v(" "), _c("td", {
      staticClass: "text-right"
    }, [_vm._v(_vm._s(_vm._f("formatNumber")(element.ca_n2)))]), _vm._v(" "), _c("td", {
      staticClass: "text-right"
    }, [_vm._v(_vm._s(_vm._f("formatNumber")(element.ca_n1)))]), _vm._v(" "), _c("td", {
      staticClass: "text-right"
    }, [_vm._v(_vm._s(_vm._f("formatNumber")(element.ca_n)))])]), _vm._v(" "), _c("tr", [_c("td", {
      staticClass: "bg-grey",
      staticStyle: {
        "font-size": "0.8rem"
      }
    }, [_vm._v("% Mouvements / CA")]), _vm._v(" "), _c("td", {
      staticClass: "text-right"
    }, [_vm._v(_vm._s(_vm._f("formatNumber")(element.mvt_ca_n2, true)))]), _vm._v(" "), _c("td", {
      staticClass: "text-right"
    }, [_vm._v(_vm._s(_vm._f("formatNumber")(element.mvt_ca_n1, true)))]), _vm._v(" "), _c("td", {
      staticClass: "text-right"
    }, [_vm._v(_vm._s(_vm._f("formatNumber")(element.mvt_ca_n, true)))])]), _vm._v(" "), _c("tr", [_c("td", {
      staticClass: "bg-grey text-right",
      staticStyle: {
        "font-size": "0.8rem"
      }
    }, [_vm._v("Solde au : ")]), _vm._v(" "), !element.date_montant_solde ? _c("td") : _c("td", {
      staticClass: "text-center"
    }, [_vm._v(_vm._s(_vm.formatDate(element.date_montant_solde)))]), _vm._v(" "), _c("td", {
      staticClass: "text-right",
      attrs: {
        colspan: "2"
      }
    }, [_vm._v(_vm._s(_vm._f("formatNumber")(element.montant_solde, true)))])])])];
  })], 2)]) : _vm._e()])])])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("th", {
    staticClass: "p-2 text-center text-uppercase bg-grey col-12",
    attrs: {
      colspan: "4"
    }
  }, [_vm._v("Adresses")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("td", {
    staticClass: "text-center text-uppercase p-2 bg-grey"
  }, [_c("b", [_vm._v("Objet social")])])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", {
    staticClass: "text-center text-uppercase p-2 bg-grey"
  }, [_c("th", {
    attrs: {
      colspan: "2"
    }
  }, [_vm._v("Actionnaires / Associés")])]), _vm._v(" "), _c("tr", [_c("th", [_vm._v("Nom et prénoms / Dénomination sociale")]), _vm._v(" "), _c("th", {
    staticClass: "text-center"
  }, [_vm._v("% Capital")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("td", {
    staticClass: "p-2 text-center text-uppercase bg-grey"
  }, [_c("b", [_vm._v("Historique récent de l’affaire")])])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", {
    staticClass: "p-2 text-center text-uppercase bg-grey"
  }, [_c("th", {
    attrs: {
      colspan: "4"
    }
  }, [_vm._v("Management")])]), _vm._v(" "), _c("tr", [_c("th", {
    staticClass: "col-3"
  }, [_vm._v("Nom")]), _vm._v(" "), _c("th", {
    staticClass: "col-3"
  }, [_vm._v("Sexe")]), _vm._v(" "), _c("th", {
    staticClass: "col-3"
  }, [_vm._v("Fonction")]), _vm._v(" "), _c("th", {
    staticClass: "col-3"
  }, [_vm._v("Qualification / Diplômes")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("td", {
    staticClass: "text-center bg-grey"
  }, [_vm._v("INFORMATIONS COMPLEMENTAIRES")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", {
    staticClass: "text-center bg-grey p-2 text-uppercase"
  }, [_c("th", {
    attrs: {
      colspan: "3"
    }
  }, [_vm._v("\n                                    Relations bancaires\n                                ")])]), _vm._v(" "), _c("tr", [_c("th", {
    staticClass: "col-4"
  }, [_vm._v("Banque")]), _vm._v(" "), _c("th", {
    staticClass: "col-4"
  }, [_vm._v("Ligne")]), _vm._v(" "), _c("th", {
    staticClass: "col-4"
  }, [_vm._v("Garantie")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", {
    staticClass: "text-uppercase text-center p-2 bg-grey"
  }, [_c("th", {
    attrs: {
      colspan: "4"
    }
  }, [_vm._v("Fournisseurs")])]), _vm._v(" "), _c("tr", [_c("th", {
    staticClass: "col-3"
  }, [_vm._v("Fournisseur")]), _vm._v(" "), _c("th", {
    staticClass: "col-3"
  }, [_vm._v("Produit")]), _vm._v(" "), _c("th", {
    staticClass: "col-3"
  }, [_vm._v("Mode de règlement")]), _vm._v(" "), _c("th", {
    staticClass: "col-3"
  }, [_vm._v("Délai de règlement (J)")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", {
    staticClass: "text-uppercase text-center p-2 bg-grey"
  }, [_c("th", {
    attrs: {
      colspan: "4"
    }
  }, [_vm._v("Clients")])]), _vm._v(" "), _c("tr", [_c("th", {
    staticClass: "col-3"
  }, [_vm._v("Client")]), _vm._v(" "), _c("th", {
    staticClass: "col-3"
  }, [_vm._v("Produit")]), _vm._v(" "), _c("th", {
    staticClass: "col-3"
  }, [_vm._v("Mode de règlement")]), _vm._v(" "), _c("th", {
    staticClass: "col-3"
  }, [_vm._v("Délai de règlement (J)")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("tr", {
    staticClass: "text-uppercase text-center p-2 bg-grey"
  }, [_c("th", {
    attrs: {
      colspan: "4"
    }
  }, [_vm._v("Elements financiers")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("th", [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Années")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", {
    staticClass: "text-uppercase text-center p-2 bg-grey"
  }, [_c("th", {
    attrs: {
      colspan: "4"
    }
  }, [_vm._v("Mouvements confiés")])])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/scene_pres_client/PRES1.vue?vue&type=style&index=0&id=77c471a9&lang=css&scoped=true":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/scene_pres_client/PRES1.vue?vue&type=style&index=0&id=77c471a9&lang=css&scoped=true ***!
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.bg-grey[data-v-77c471a9],\r\n.th[data-v-77c471a9] {\r\n    background-color: #f4f3f3;\r\n    font-weight: 600;\n}\n.vertical-middle[data-v-77c471a9] {\r\n    vertical-align: middle;\n}\n.head-memorandum-title[data-v-77c471a9] {\r\n    margin-top: 15px;\r\n    padding: 16px;\r\n    color: #fff;\r\n    font-weight: bold;\r\n    background-color: #34495e;\r\n    border: 2px solid #575759;\r\n    box-shadow: 1px 3px 4px #ddd;\r\n    font-size: 16px;\r\n    text-align: center;\r\n    text-transform: uppercase;\r\n    border-radius: 10px;\r\n    margin-bottom: 15px;\n}\ninput[type=checkbox][data-v-77c471a9] {\r\n    /* Double-sized Checkboxes */\r\n    /* IE */\r\n    /* FF */\r\n    /* Safari and Chrome */\r\n    /* Opera */\r\n    transform: scale(2);\r\n    padding: 10px;\n}\n.form-check-input[data-v-77c471a9]:disabled {\r\n  opacity: 1;\n}\ninput[type=checkbox][data-v-77c471a9] {\r\n    /* Double-sized Checkboxes */\r\n    /* IE */\r\n    /* FF */\r\n    /* Safari and Chrome */\r\n    /* Opera */\r\n    transform: scale(1);\r\n    padding: 10px;\r\n    cursor: pointer;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/scene_pres_client/PRES1.vue?vue&type=style&index=0&id=77c471a9&lang=css&scoped=true":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/scene_pres_client/PRES1.vue?vue&type=style&index=0&id=77c471a9&lang=css&scoped=true ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PRES1_vue_vue_type_style_index_0_id_77c471a9_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PRES1.vue?vue&type=style&index=0&id=77c471a9&lang=css&scoped=true */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/scene_pres_client/PRES1.vue?vue&type=style&index=0&id=77c471a9&lang=css&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PRES1_vue_vue_type_style_index_0_id_77c471a9_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PRES1_vue_vue_type_style_index_0_id_77c471a9_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/offview/bank/nsia/memo/scene_pres_client/PRES1.vue":
/*!************************************************************************************!*\
  !*** ./resources/js/components/offview/bank/nsia/memo/scene_pres_client/PRES1.vue ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PRES1_vue_vue_type_template_id_77c471a9_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PRES1.vue?vue&type=template&id=77c471a9&scoped=true */ "./resources/js/components/offview/bank/nsia/memo/scene_pres_client/PRES1.vue?vue&type=template&id=77c471a9&scoped=true");
/* harmony import */ var _PRES1_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PRES1.vue?vue&type=script&lang=js */ "./resources/js/components/offview/bank/nsia/memo/scene_pres_client/PRES1.vue?vue&type=script&lang=js");
/* harmony import */ var _PRES1_vue_vue_type_style_index_0_id_77c471a9_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PRES1.vue?vue&type=style&index=0&id=77c471a9&lang=css&scoped=true */ "./resources/js/components/offview/bank/nsia/memo/scene_pres_client/PRES1.vue?vue&type=style&index=0&id=77c471a9&lang=css&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _PRES1_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _PRES1_vue_vue_type_template_id_77c471a9_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _PRES1_vue_vue_type_template_id_77c471a9_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "77c471a9",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/offview/bank/nsia/memo/scene_pres_client/PRES1.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/offview/bank/nsia/memo/scene_pres_client/PRES1.vue?vue&type=script&lang=js":
/*!************************************************************************************************************!*\
  !*** ./resources/js/components/offview/bank/nsia/memo/scene_pres_client/PRES1.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PRES1_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PRES1.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/scene_pres_client/PRES1.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PRES1_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/offview/bank/nsia/memo/scene_pres_client/PRES1.vue?vue&type=style&index=0&id=77c471a9&lang=css&scoped=true":
/*!********************************************************************************************************************************************!*\
  !*** ./resources/js/components/offview/bank/nsia/memo/scene_pres_client/PRES1.vue?vue&type=style&index=0&id=77c471a9&lang=css&scoped=true ***!
  \********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PRES1_vue_vue_type_style_index_0_id_77c471a9_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PRES1.vue?vue&type=style&index=0&id=77c471a9&lang=css&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/scene_pres_client/PRES1.vue?vue&type=style&index=0&id=77c471a9&lang=css&scoped=true");


/***/ }),

/***/ "./resources/js/components/offview/bank/nsia/memo/scene_pres_client/PRES1.vue?vue&type=template&id=77c471a9&scoped=true":
/*!******************************************************************************************************************************!*\
  !*** ./resources/js/components/offview/bank/nsia/memo/scene_pres_client/PRES1.vue?vue&type=template&id=77c471a9&scoped=true ***!
  \******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PRES1_vue_vue_type_template_id_77c471a9_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PRES1_vue_vue_type_template_id_77c471a9_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PRES1_vue_vue_type_template_id_77c471a9_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PRES1.vue?vue&type=template&id=77c471a9&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/scene_pres_client/PRES1.vue?vue&type=template&id=77c471a9&scoped=true");


/***/ })

}]);