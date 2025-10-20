"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_offview_bank_nsia_memo_scene_memo_PPI4_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/scene_memo/PPI4.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/scene_memo/PPI4.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'SM-PPI4',
  props: {
    dossier_credit: Object
  },
  created: function created() {
    this.loadData();
  },
  data: function data() {
    var _this$dossier_credit, _this$dossier_credit2, _this$dossier_credit3, _this$dossier_credit4, _this$dossier_credit5, _this$dossier_credit6, _this$dossier_credit7, _this$dossier_credit8, _this$dossier_credit9, _this$dossier_credit0;
    return {
      data_tb1: (_this$dossier_credit = this.dossier_credit) === null || _this$dossier_credit === void 0 ? void 0 : _this$dossier_credit.cred_pub_tb_30001,
      data_tb2: (_this$dossier_credit2 = this.dossier_credit) === null || _this$dossier_credit2 === void 0 ? void 0 : _this$dossier_credit2.cred_pub_tb_30002,
      data_tb3: (_this$dossier_credit3 = this.dossier_credit) === null || _this$dossier_credit3 === void 0 ? void 0 : _this$dossier_credit3.cred_pub_tb_30003,
      data_tb4: (_this$dossier_credit4 = this.dossier_credit) === null || _this$dossier_credit4 === void 0 ? void 0 : _this$dossier_credit4.cred_pub_tb_30004,
      data_tb5: (_this$dossier_credit5 = this.dossier_credit) === null || _this$dossier_credit5 === void 0 ? void 0 : _this$dossier_credit5.cred_pub_tb_30005,
      caf_recorded_file: (_this$dossier_credit6 = this.dossier_credit) === null || _this$dossier_credit6 === void 0 ? void 0 : _this$dossier_credit6.caf_recorded_file,
      initiateur: (_this$dossier_credit7 = this.dossier_credit) === null || _this$dossier_credit7 === void 0 ? void 0 : _this$dossier_credit7.monteur_doss,
      gestionnaire: (_this$dossier_credit8 = this.dossier_credit) === null || _this$dossier_credit8 === void 0 ? void 0 : _this$dossier_credit8.monteur_doss,
      nom: (_this$dossier_credit9 = this.dossier_credit) === null || _this$dossier_credit9 === void 0 || (_this$dossier_credit9 = _this$dossier_credit9.cred_pub_tb_30002) === null || _this$dossier_credit9 === void 0 ? void 0 : _this$dossier_credit9.nom,
      prenoms: (_this$dossier_credit0 = this.dossier_credit) === null || _this$dossier_credit0 === void 0 || (_this$dossier_credit0 = _this$dossier_credit0.cred_pub_tb_30002) === null || _this$dossier_credit0 === void 0 ? void 0 : _this$dossier_credit0.prenoms,
      usage: [{
        checked: false,
        libelle: "Habitation de l'emprunteur"
      }, {
        checked: false,
        libelle: "Locatif"
      }, {
        checked: false,
        libelle: "Résidence principale"
      }, {
        checked: false,
        libelle: "Résidence secondaire"
      }],
      agence: ""
    };
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
    },
    formatAmount: function formatAmount(x) {
      return x === null || x === void 0 ? void 0 : x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    },
    formatMonth: function formatMonth(value) {
      return value === null || value === void 0 ? void 0 : value.toString().split('-').reverse().join('/');
    },
    loadData: function loadData() {
      var _this$dossier_credit1;
      if (((_this$dossier_credit1 = this.dossier_credit) === null || _this$dossier_credit1 === void 0 ? void 0 : _this$dossier_credit1.caf_recorded_file.client) != undefined) {
        var _this$dossier_credit10;
        this.agence = (_this$dossier_credit10 = this.dossier_credit) === null || _this$dossier_credit10 === void 0 || (_this$dossier_credit10 = _this$dossier_credit10[this.determineCredPubTablesFromDosCred(this.dossier_credit)[1]]) === null || _this$dossier_credit10 === void 0 ? void 0 : _this$dossier_credit10.filiale;
      }
    }
  },
  computed: {
    labelHabitation: function labelHabitation() {
      var _this$data_tb, _this$data_tb2;
      if (((_this$data_tb = this.data_tb2) === null || _this$data_tb === void 0 ? void 0 : _this$data_tb.habitation) == 'Propriétaire') {
        return "Dépuis quelle date";
      }
      if (((_this$data_tb2 = this.data_tb2) === null || _this$data_tb2 === void 0 ? void 0 : _this$data_tb2.habitation) == 'Locataire') {
        return "Dépuis quelle date";
      }
      return "Ancienneté à l'adresse";
    },
    valueHabitation: function valueHabitation() {
      var _this$data_tb3, _this$data_tb6, _this$data_tb8, _this$data_tb9;
      if (((_this$data_tb3 = this.data_tb2) === null || _this$data_tb3 === void 0 ? void 0 : _this$data_tb3.habitation) == 'Propriétaire') {
        var _this$data_tb4, _this$data_tb5;
        return ((_this$data_tb4 = this.data_tb2) === null || _this$data_tb4 === void 0 ? void 0 : _this$data_tb4.proprietaire_depuis_quelle_date) != '' ? this.formatMonth((_this$data_tb5 = this.data_tb2) === null || _this$data_tb5 === void 0 ? void 0 : _this$data_tb5.proprietaire_depuis_quelle_date) : '';
      }
      if (((_this$data_tb6 = this.data_tb2) === null || _this$data_tb6 === void 0 ? void 0 : _this$data_tb6.habitation) == 'Locataire') {
        var _this$data_tb7;
        return (_this$data_tb7 = this.data_tb2) === null || _this$data_tb7 === void 0 ? void 0 : _this$data_tb7.loyer_mensuel;
      }
      return ((_this$data_tb8 = this.data_tb2) === null || _this$data_tb8 === void 0 ? void 0 : _this$data_tb8.anciennete_adresse) != '' ? this.formatMonth((_this$data_tb9 = this.data_tb2) === null || _this$data_tb9 === void 0 ? void 0 : _this$data_tb9.anciennete_adresse) : "";
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/scene_memo/PPI4.vue?vue&type=template&id=3f5cae06&scoped=true":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/scene_memo/PPI4.vue?vue&type=template&id=3f5cae06&scoped=true ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm$data_tb, _vm$data_tb2, _vm$data_tb3, _vm$data_tb4, _vm$data_tb5, _vm$data_tb6, _vm$data_tb7, _vm$data_tb8, _vm$data_tb9, _vm$data_tb0, _vm$data_tb1, _vm$data_tb10, _vm$data_tb11, _vm$data_tb12, _vm$data_tb13, _vm$data_tb14, _vm$data_tb15, _vm$data_tb16, _vm$data_tb17, _vm$data_tb18, _vm$data_tb19, _vm$data_tb20, _vm$data_tb21, _vm$data_tb22, _vm$data_tb23;
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_vm._m(0), _vm._v(" "), _c("div", [_c("label", {
    staticClass: "fw-bold"
  }, [_vm._v("Montant du prêt : ")]), _vm._v(" " + _vm._s((_vm$data_tb = _vm.data_tb1) === null || _vm$data_tb === void 0 ? void 0 : _vm$data_tb.montant_sollicite) + "\n     ")]), _vm._v(" "), _c("div", {
    staticClass: "mt-2"
  }, [_c("table", {
    staticClass: "table table-bordered"
  }, [_vm._m(1), _vm._v(" "), _c("tbody", [_c("tr", [_c("td", [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12"
  }, [_c("label", {
    staticClass: "fw-bold"
  }, [_vm._v("Frais annexes : ")]), _vm._v(" " + _vm._s((_vm$data_tb2 = _vm.data_tb4) === null || _vm$data_tb2 === void 0 ? void 0 : _vm$data_tb2.cout_operations_frais) + "\n                             ")]), _vm._v(" "), _c("div", {
    staticClass: "col-12 m-4"
  }), _vm._v(" "), _c("div", {
    staticClass: "col-12",
    staticStyle: {
      "margin-top": "4px"
    }
  }, [_c("label", {
    staticClass: "fw-bold"
  }, [_vm._v("Opération : ")]), _vm._v(" " + _vm._s((_vm$data_tb3 = _vm.data_tb4) === null || _vm$data_tb3 === void 0 ? void 0 : _vm$data_tb3.cout_operations_operation) + "\n                             ")])])]), _vm._v(" "), _c("td", [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-6"
  }, [_c("label", {
    staticClass: "fw-bold"
  }, [_vm._v("Apport pers. : ")]), _vm._v(" " + _vm._s((_vm$data_tb4 = _vm.data_tb4) === null || _vm$data_tb4 === void 0 ? void 0 : _vm$data_tb4.financement_apport_pers) + "\n                             ")]), _vm._v(" "), _c("div", {
    staticClass: "col-6"
  }, [_c("label", {
    staticClass: "fw-bold"
  }, [_vm._v("dont PEL : ")]), _vm._v(" " + _vm._s((_vm$data_tb5 = _vm.data_tb4) === null || _vm$data_tb5 === void 0 ? void 0 : _vm$data_tb5.financement_dont_pel) + "\n                             ")]), _vm._v(" "), _c("div", {
    staticClass: "col-6"
  }), _vm._v(" "), _c("div", {
    staticClass: "col-6",
    staticStyle: {
      "margin-top": "10px"
    }
  }, [_c("label", {
    staticClass: "fw-bold"
  }, [_vm._v("Autres : ")]), _vm._v(" " + _vm._s(_vm.formatAmount((_vm$data_tb6 = _vm.data_tb4) === null || _vm$data_tb6 === void 0 ? void 0 : _vm$data_tb6.financement_autres)) + "\n                             ")]), _vm._v(" "), _c("div", {
    staticClass: "col-6",
    staticStyle: {
      "margin-top": "20px"
    }
  }, [_c("label", {
    staticClass: "fw-bold"
  }, [_vm._v("Prêt : ")]), _vm._v(" " + _vm._s((_vm$data_tb7 = _vm.data_tb4) === null || _vm$data_tb7 === void 0 ? void 0 : _vm$data_tb7.financement_pret) + "\n                             ")]), _vm._v(" "), _c("div", {
    staticClass: "col-6",
    staticStyle: {
      "margin-top": "20px"
    }
  }, [_c("label", {
    staticClass: "fw-bold"
  }, [_vm._v("% prêt / opération : ")]), _vm._v(" " + _vm._s((_vm$data_tb8 = _vm.data_tb4) === null || _vm$data_tb8 === void 0 ? void 0 : _vm$data_tb8.financement_pourcentage_pret_operation) + " %\n                             ")])])])]), _vm._v(" "), _c("tr", [_c("td", [_c("label", {
    staticClass: "fw-bold"
  }, [_vm._v("Total : ")]), _vm._v(" " + _vm._s(_vm.formatAmount((_vm$data_tb9 = _vm.data_tb4) === null || _vm$data_tb9 === void 0 ? void 0 : _vm$data_tb9.cout_operations_total)) + "\n                     ")]), _vm._v(" "), _c("td", [_c("label", {
    staticClass: "fw-bold"
  }, [_vm._v("Total : ")]), _vm._v(" " + _vm._s(_vm.formatAmount((_vm$data_tb0 = _vm.data_tb4) === null || _vm$data_tb0 === void 0 ? void 0 : _vm$data_tb0.financement_total)) + "\n                     ")])])])])]), _vm._v(" "), _c("div", {
    staticClass: "mt-2"
  }, [_c("table", {
    staticClass: "table table-bordered"
  }, [_vm._m(2), _vm._v(" "), _c("tbody", [_c("tr", [_vm._m(3), _vm._v(" "), _c("td", [_vm._m(4), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-6 text-center"
  }, [(_vm$data_tb1 = _vm.data_tb4) !== null && _vm$data_tb1 !== void 0 && _vm$data_tb1.reescomptable_tep_1 ? _c("input", {
    staticClass: "form-check-input",
    attrs: {
      type: "checkbox",
      id: "reescomptable_tep_1",
      checked: "checked",
      disabled: ""
    }
  }) : _c("input", {
    staticClass: "form-check-input",
    attrs: {
      type: "checkbox",
      id: "reescomptable_tep_1",
      disabled: ""
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-6 text-center"
  }, [(_vm$data_tb10 = _vm.data_tb4) !== null && _vm$data_tb10 !== void 0 && _vm$data_tb10.reescomptable_ten_1 ? _c("input", {
    staticClass: "form-check-input",
    attrs: {
      type: "checkbox",
      id: "reescomptable_ten_1",
      checked: "checked",
      disabled: ""
    }
  }) : _c("input", {
    staticClass: "form-check-input",
    attrs: {
      type: "checkbox",
      id: "reescomptable_ten_1",
      disabled: ""
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-6 text-center"
  }, [(_vm$data_tb11 = _vm.data_tb4) !== null && _vm$data_tb11 !== void 0 && _vm$data_tb11.reescomptable_tep_2 ? _c("input", {
    staticClass: "form-check-input",
    attrs: {
      type: "checkbox",
      id: "reescomptable_tep_2",
      checked: "checked",
      disabled: ""
    }
  }) : _c("input", {
    staticClass: "form-check-input",
    attrs: {
      type: "checkbox",
      id: "reescomptable_tep_2",
      disabled: ""
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-6 text-center"
  }, [(_vm$data_tb12 = _vm.data_tb4) !== null && _vm$data_tb12 !== void 0 && _vm$data_tb12.reescomptable_ten_2 ? _c("input", {
    staticClass: "form-check-input",
    attrs: {
      type: "checkbox",
      id: "reescomptable_ten_2",
      checked: "checked",
      disabled: ""
    }
  }) : _c("input", {
    staticClass: "form-check-input",
    attrs: {
      type: "checkbox",
      id: "reescomptable_ten_2",
      disabled: ""
    }
  })])])]), _vm._v(" "), _c("td", [_vm._m(5), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12 text-center"
  }, [(_vm$data_tb13 = _vm.data_tb4) !== null && _vm$data_tb13 !== void 0 && _vm$data_tb13.non_reescomptable_ten_1 ? _c("input", {
    staticClass: "form-check-input",
    attrs: {
      type: "checkbox",
      id: "non_reescomptable_ten_1",
      checked: "checked",
      disabled: ""
    }
  }) : _c("input", {
    staticClass: "form-check-input",
    attrs: {
      type: "checkbox",
      id: "non_reescomptable_ten_1",
      disabled: ""
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12 text-center"
  }, [(_vm$data_tb14 = _vm.data_tb4) !== null && _vm$data_tb14 !== void 0 && _vm$data_tb14.non_reescomptable_ten_2 ? _c("input", {
    staticClass: "form-check-input",
    attrs: {
      type: "checkbox",
      id: "non_reescomptable_ten_2",
      checked: "checked",
      disabled: ""
    }
  }) : _c("input", {
    staticClass: "form-check-input",
    attrs: {
      type: "checkbox",
      id: "non_reescomptable_ten_2",
      disabled: ""
    }
  })])])]), _vm._v(" "), _c("td", [_vm._m(6), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12 text-center"
  }, [(_vm$data_tb15 = _vm.data_tb4) !== null && _vm$data_tb15 !== void 0 && _vm$data_tb15.cdmh_tep_1 ? _c("input", {
    staticClass: "form-check-input",
    attrs: {
      type: "checkbox",
      id: "cdmh_tep_1",
      checked: "checked",
      disabled: ""
    }
  }) : _c("input", {
    staticClass: "form-check-input",
    attrs: {
      type: "checkbox",
      id: "cdmh_tep_1",
      disabled: ""
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12 text-center"
  }, [(_vm$data_tb16 = _vm.data_tb4) !== null && _vm$data_tb16 !== void 0 && _vm$data_tb16.cdmh_tep_2 ? _c("input", {
    staticClass: "form-check-input",
    attrs: {
      type: "checkbox",
      id: "cdmh_tep_2",
      checked: "checked",
      disabled: ""
    }
  }) : _c("input", {
    staticClass: "form-check-input",
    attrs: {
      type: "checkbox",
      id: "cdmh_tep_2",
      disabled: ""
    }
  })])])])])])])]), _vm._v(" "), _c("div", {
    staticClass: "mt-2 table-responsive"
  }, [_c("table", {
    staticClass: "table table-bordered"
  }, [_vm._m(7), _vm._v(" "), _c("tbody", [_c("tr", [_c("td", {
    attrs: {
      rowspan: "2"
    }
  }, [_vm._l((_vm$data_tb17 = _vm.data_tb4) === null || _vm$data_tb17 === void 0 ? void 0 : _vm$data_tb17.liste_bareme_applicable, function (item, index) {
    return [item.checked ? _c("div", {
      key: index,
      staticClass: "text-nowrap my-1"
    }, [_vm._v(_vm._s(item.name) + " "), _c("br")]) : _vm._e()];
  })], 2), _vm._v(" "), _c("td", {
    staticClass: "text-center text-nowrap",
    attrs: {
      rowspan: "2"
    }
  }, [_vm._l((_vm$data_tb18 = _vm.data_tb4) === null || _vm$data_tb18 === void 0 ? void 0 : _vm$data_tb18.liste_bareme_applicable, function (item, index) {
    return [item.checked ? _c("div", {
      key: index,
      staticClass: "my-1"
    }, [_vm._v("\n                                 " + _vm._s(item.code) + " "), _c("br")]) : _vm._e()];
  })], 2), _vm._v(" "), _c("td", {
    staticClass: "text-center text-nowrap",
    attrs: {
      rowspan: "2"
    }
  }, [_vm._l((_vm$data_tb19 = _vm.data_tb4) === null || _vm$data_tb19 === void 0 ? void 0 : _vm$data_tb19.liste_bareme_applicable, function (item, index) {
    return [item.checked ? _c("div", {
      key: index,
      staticClass: "my-1"
    }, [_vm._v("\n                                 " + _vm._s(item.duree) + " "), _c("br")]) : _vm._e()];
  })], 2), _vm._v(" "), _c("td", {
    staticClass: "text-center text-nowrap",
    attrs: {
      rowspan: "2"
    }
  }, [_vm._l((_vm$data_tb20 = _vm.data_tb4) === null || _vm$data_tb20 === void 0 ? void 0 : _vm$data_tb20.liste_bareme_applicable, function (item, index) {
    return [item.checked ? _c("div", {
      key: index,
      staticClass: "my-1"
    }, [_vm._v("\n                                 " + _vm._s(item.taux_client) + " " + _vm._s(item.taux_client > 0 ? "%" : "") + " "), _c("br")]) : _vm._e()];
  })], 2)]), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "text-center text-nowrap"
  }, [_vm._l((_vm$data_tb21 = _vm.data_tb4) === null || _vm$data_tb21 === void 0 ? void 0 : _vm$data_tb21.liste_bareme_applicable, function (item, index) {
    return [item.checked ? _c("div", {
      key: index,
      staticClass: "my-1"
    }, [_vm._v("\n                                 " + _vm._s(_vm.formatAmount(item.palier_1)) + " "), _c("br")]) : _vm._e()];
  })], 2), _vm._v(" "), _c("td", {
    staticClass: "text-center text-nowrap"
  }, [_vm._l((_vm$data_tb22 = _vm.data_tb4) === null || _vm$data_tb22 === void 0 ? void 0 : _vm$data_tb22.liste_bareme_applicable, function (item, index) {
    return [item.checked ? _c("div", {
      key: index,
      staticClass: "my-1"
    }, [_vm._v("\n                                 " + _vm._s(_vm.formatAmount(item.palier_2)) + " "), _c("br")]) : _vm._e()];
  })], 2), _vm._v(" "), _c("td", {
    staticClass: "text-center text-nowrap"
  }, [_vm._l((_vm$data_tb23 = _vm.data_tb4) === null || _vm$data_tb23 === void 0 ? void 0 : _vm$data_tb23.liste_bareme_applicable, function (item, index) {
    return [item.checked ? _c("div", {
      key: index,
      staticClass: "my-1"
    }, [_vm._v("\n                                 " + _vm._s(_vm.formatAmount(item.palier_3)) + " "), _c("br")]) : _vm._e()];
  })], 2)])])])]), _vm._v(" "), _vm._m(8)]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "justify-content-center"
  }, [_c("div", {
    staticClass: "head-memorandum-title px-3 mb-3",
    staticStyle: {
      "text-align": "center"
    }
  }, [_vm._v("\n             Financement\n         ")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("th", {
    staticClass: "col-4 th text-center"
  }, [_vm._v("Coût opération")]), _vm._v(" "), _c("th", {
    staticClass: "col-8 th text-center"
  }, [_vm._v("Financement")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("th", {
    staticClass: "col-3 th text-center"
  }), _vm._v(" "), _c("th", {
    staticClass: "col-3 th text-center"
  }, [_vm._v("Réescomptable")]), _vm._v(" "), _c("th", {
    staticClass: "col-3 th text-center"
  }, [_vm._v("Non réescomptable")]), _vm._v(" "), _c("th", {
    staticClass: "col-3 th text-center"
  }, [_vm._v("CDMH")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12 text-center"
  }, [_vm._v("TOB")])]), _vm._v(" "), _c("div", {
    staticClass: "row text-center"
  }, [_c("div", {
    staticClass: "col-12"
  }, [_c("div", [_c("label", {
    attrs: {
      "for": "tob_exemption_tep fw-bold"
    }
  }, [_vm._v("Exemption")])])])]), _vm._v(" "), _c("div", {
    staticClass: "row text-center"
  }, [_c("div", {
    staticClass: "col-12"
  }, [_c("div", [_c("label", {
    attrs: {
      "for": "tob_non_exemption_tep fw-bold"
    }
  }, [_vm._v("Non exemption")])])])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-6 text-center"
  }, [_vm._v("TEP")]), _vm._v(" "), _c("div", {
    staticClass: "col-6 text-center"
  }, [_vm._v("TEN")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12 text-center"
  }, [_vm._v("TEN")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12 text-center"
  }, [_vm._v("TEP")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("th", {
    staticClass: "text-center th",
    attrs: {
      colspan: "7"
    }
  }, [_vm._v("BARÊME APPLICABLE")])]), _vm._v(" "), _c("tr", [_c("th", {
    staticClass: "col-2 text-center th vertical-middle",
    attrs: {
      rowspan: "2"
    }
  }), _vm._v(" "), _c("th", {
    staticClass: "col-1 text-center th vertical-middle",
    attrs: {
      rowspan: "2"
    }
  }, [_vm._v("Code")]), _vm._v(" "), _c("th", {
    staticClass: "col-1 text-center th vertical-middle",
    attrs: {
      rowspan: "2"
    }
  }, [_vm._v("Durée(1)")]), _vm._v(" "), _c("th", {
    staticClass: "col-1 text-center th vertical-middle",
    attrs: {
      rowspan: "2"
    }
  }, [_vm._v("Taux\n                         Client (2)")]), _vm._v(" "), _c("th", {
    staticClass: "col-6 text-center th vertical-middle",
    attrs: {
      colspan: "3"
    }
  }, [_vm._v("Montant\n                         échéances")])]), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "text-center col-2 th text-nowrap"
  }, [_vm._v("1"), _c("sup", [_vm._v("er")]), _vm._v(" palier")]), _vm._v(" "), _c("td", {
    staticClass: "text-center col-2 th text-nowrap"
  }, [_vm._v("2"), _c("sup", [_vm._v("e")]), _vm._v(" palier")]), _vm._v(" "), _c("td", {
    staticClass: "text-center col-2 th text-nowrap"
  }, [_vm._v("3"), _c("sup", [_vm._v("e")]), _vm._v(" palier")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("ul", {
    staticClass: "mt-1"
  }, [_c("li", [_vm._v("(1) En mois")]), _vm._v(" "), _c("li", [_vm._v("(2) TPS & Assurance incluses")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/scene_memo/PPI4.vue?vue&type=style&index=0&id=3f5cae06&lang=css&scoped=true":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/scene_memo/PPI4.vue?vue&type=style&index=0&id=3f5cae06&lang=css&scoped=true ***!
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
___CSS_LOADER_EXPORT___.push([module.id, ".bg-grey[data-v-3f5cae06], .th[data-v-3f5cae06] {\r\n    background-color: #f4f3f3;\r\n    font-weight: 600;\n}\n.memo[data-v-3f5cae06] {\r\n    margin-top: 10px;\r\n    padding: 10px;\r\n    border: 2px solid #fff;\r\n    font-weight: 550;\r\n    font-size: 16px;\r\n    text-align: left;\r\n    text-transform: uppercase;\r\n    background-color: #34495e;\r\n    color: #fff;\n}\n.head-memorandum-title[data-v-3f5cae06] {\r\n    margin-top: 15px;\r\n    padding: 16px;\r\n    color: #fff;\r\n    font-weight: bold;\r\n    background-color: #34495e;\r\n    border: 2px solid #575759;\r\n    box-shadow: 1px 3px 4px #ddd;\r\n    font-size: 16px;\r\n    text-align: center;\r\n    text-transform: uppercase;\r\n    border-radius: 10px;\r\n    margin-bottom: 15px;\n}\n.vertical-middle[data-v-3f5cae06] {\r\n    vertical-align: middle;\n}\n.mr-2[data-v-3f5cae06] {\r\n    margin-right: 0.5rem;\n}\n.ml-25-px[data-v-3f5cae06] {\r\n    margin-left: 25px;\n}\n.ml-45-px[data-v-3f5cae06] {\r\n    margin-left: 45px;\n}\n.table-bordered[data-v-3f5cae06] {\r\n    font-size: 0.9rem;\n}\n.form-check-input[data-v-3f5cae06]:disabled {\r\n    opacity: 1;\n}\n.activite td[data-v-3f5cae06] {\r\n    padding: 7px;\n}\r\n\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/scene_memo/PPI4.vue?vue&type=style&index=0&id=3f5cae06&lang=css&scoped=true":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/scene_memo/PPI4.vue?vue&type=style&index=0&id=3f5cae06&lang=css&scoped=true ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PPI4_vue_vue_type_style_index_0_id_3f5cae06_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PPI4.vue?vue&type=style&index=0&id=3f5cae06&lang=css&scoped=true */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/scene_memo/PPI4.vue?vue&type=style&index=0&id=3f5cae06&lang=css&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PPI4_vue_vue_type_style_index_0_id_3f5cae06_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PPI4_vue_vue_type_style_index_0_id_3f5cae06_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/offview/bank/nsia/memo/scene_memo/PPI4.vue":
/*!****************************************************************************!*\
  !*** ./resources/js/components/offview/bank/nsia/memo/scene_memo/PPI4.vue ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PPI4_vue_vue_type_template_id_3f5cae06_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PPI4.vue?vue&type=template&id=3f5cae06&scoped=true */ "./resources/js/components/offview/bank/nsia/memo/scene_memo/PPI4.vue?vue&type=template&id=3f5cae06&scoped=true");
/* harmony import */ var _PPI4_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PPI4.vue?vue&type=script&lang=js */ "./resources/js/components/offview/bank/nsia/memo/scene_memo/PPI4.vue?vue&type=script&lang=js");
/* harmony import */ var _PPI4_vue_vue_type_style_index_0_id_3f5cae06_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PPI4.vue?vue&type=style&index=0&id=3f5cae06&lang=css&scoped=true */ "./resources/js/components/offview/bank/nsia/memo/scene_memo/PPI4.vue?vue&type=style&index=0&id=3f5cae06&lang=css&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _PPI4_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _PPI4_vue_vue_type_template_id_3f5cae06_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _PPI4_vue_vue_type_template_id_3f5cae06_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "3f5cae06",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/offview/bank/nsia/memo/scene_memo/PPI4.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/offview/bank/nsia/memo/scene_memo/PPI4.vue?vue&type=script&lang=js":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/offview/bank/nsia/memo/scene_memo/PPI4.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PPI4_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PPI4.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/scene_memo/PPI4.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PPI4_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/offview/bank/nsia/memo/scene_memo/PPI4.vue?vue&type=style&index=0&id=3f5cae06&lang=css&scoped=true":
/*!************************************************************************************************************************************!*\
  !*** ./resources/js/components/offview/bank/nsia/memo/scene_memo/PPI4.vue?vue&type=style&index=0&id=3f5cae06&lang=css&scoped=true ***!
  \************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PPI4_vue_vue_type_style_index_0_id_3f5cae06_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PPI4.vue?vue&type=style&index=0&id=3f5cae06&lang=css&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/scene_memo/PPI4.vue?vue&type=style&index=0&id=3f5cae06&lang=css&scoped=true");


/***/ }),

/***/ "./resources/js/components/offview/bank/nsia/memo/scene_memo/PPI4.vue?vue&type=template&id=3f5cae06&scoped=true":
/*!**********************************************************************************************************************!*\
  !*** ./resources/js/components/offview/bank/nsia/memo/scene_memo/PPI4.vue?vue&type=template&id=3f5cae06&scoped=true ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PPI4_vue_vue_type_template_id_3f5cae06_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PPI4_vue_vue_type_template_id_3f5cae06_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PPI4_vue_vue_type_template_id_3f5cae06_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PPI4.vue?vue&type=template&id=3f5cae06&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/scene_memo/PPI4.vue?vue&type=template&id=3f5cae06&scoped=true");


/***/ })

}]);