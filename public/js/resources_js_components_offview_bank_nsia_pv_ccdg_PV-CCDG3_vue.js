"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_offview_bank_nsia_pv_ccdg_PV-CCDG3_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/pv_ccdg/PV-CCDG3.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/pv_ccdg/PV-CCDG3.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************************************/
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
    var _this$dossier_credit, _this$dossier_credit2, _this$dossier_credit3, _this$dossier_credit4, _this$dossier_credit5;
    this.categorieEsDemande();
    this.selected_path_type = (_this$dossier_credit = this.dossier_credit) === null || _this$dossier_credit === void 0 ? void 0 : _this$dossier_credit.selected_path_type;
    this.decision_logs = (_this$dossier_credit2 = this.dossier_credit) === null || _this$dossier_credit2 === void 0 || (_this$dossier_credit2 = _this$dossier_credit2.decision_logs.filter(function (elm, index) {
      return elm.giver_role_sigle == "DG";
    })[0]) === null || _this$dossier_credit2 === void 0 ? void 0 : _this$dossier_credit2.giver_role_sigle;
    this.categorie_client = (_this$dossier_credit3 = this.dossier_credit) === null || _this$dossier_credit3 === void 0 ? void 0 : _this$dossier_credit3.categorie_client;
    var index = ((_this$dossier_credit4 = this.dossier_credit) === null || _this$dossier_credit4 === void 0 ? void 0 : _this$dossier_credit4.decision_logs.filter(function (elm, index) {
      return elm.stage_label == "DIRECTION DU CREDIT (DC)";
    }).length) - 1;
    this.dern_signature_dg = (_this$dossier_credit5 = this.dossier_credit) === null || _this$dossier_credit5 === void 0 || (_this$dossier_credit5 = _this$dossier_credit5.decision_logs.filter(function (elm, index) {
      return elm.stage_label == "DIRECTION DU CREDIT (DC)";
    })[index]) === null || _this$dossier_credit5 === void 0 ? void 0 : _this$dossier_credit5.giver_name;
  },
  data: function data() {
    var _this$dossier_credit6;
    return {
      data: (_this$dossier_credit6 = this.dossier_credit) === null || _this$dossier_credit6 === void 0 ? void 0 : _this$dossier_credit6.cred_pub_tb_20502,
      level_power: {
        LONG: 'CCCA',
        SHORT: 'CCDG'
      },
      signature_dg: {
        "in": 'Oui',
        nothing: 'Non'
      },
      direction: [{
        Corporate: "DIRECTION CENTRALE DES ENTREPRISES ET INSTITUTIONNELS",
        sigle_Corporate: "DCEI"
      }, {
        Retail: "DIRECTION CENTRALE DES ENTREPRISES ET INSTITUTIONNELS",
        sigle_Retail: "DCP"
      }],
      selected_path_type: null,
      decision_logs: null,
      categorie_client: null,
      index: null,
      dern_signature_dg: null,
      categorie: ""
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
    categorieEsDemande: function categorieEsDemande() {
      var _this$dossier_credit$,
        _this$note_risque_es,
        _this = this;
      this.cotation_risque_es = (_this$dossier_credit$ = this.dossier_credit.cred_pub_tb_5001) === null || _this$dossier_credit$ === void 0 ? void 0 : _this$dossier_credit$.risque_note;
      (_this$note_risque_es = this.note_risque_es) === null || _this$note_risque_es === void 0 || _this$note_risque_es.forEach(function (element, key) {
        if (_this.cotation_risque_es == element.note) {
          _this.categorie = element.risque;
          console.log(element);
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/pv_ccdg/PV-CCDG3.vue?vue&type=template&id=6b4cd3e1&scoped=true":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/pv_ccdg/PV-CCDG3.vue?vue&type=template&id=6b4cd3e1&scoped=true ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm$dossier_credit, _vm$dossier_credit2, _vm$dossier_credit4, _vm$dossier_credit6, _vm$dossier_credit8, _vm$dossier_credit0, _vm$dossier_credit1;
  var _vm = this,
    _c = _vm._self._c;
  return _vm.data ? _c("div", [_c("div", {
    staticClass: "justify-content-center"
  }, [_c("div", {
    staticClass: "head-memorandum-title mb-4 text-uppercase",
    staticStyle: {
      "text-align": "center"
    }
  }, [_vm._v("\n            Résumé de l'analyse environnementale et sociale(ES)\n        ")]), _vm._v(" "), (_vm$dossier_credit = _vm.dossier_credit) !== null && _vm$dossier_credit !== void 0 && _vm$dossier_credit.cred_pub_tb_22005 ? _c("div", [_c("div", {
    staticClass: "table-responsive mt-3"
  }, [_c("table", {
    staticClass: "table mb-1 table-bordered"
  }, [_vm._m(0), _vm._v(" "), _c("tbody", [_vm._m(1), _vm._v(" "), _vm._l((_vm$dossier_credit2 = _vm.dossier_credit) === null || _vm$dossier_credit2 === void 0 || (_vm$dossier_credit2 = _vm$dossier_credit2.cred_pub_tb_22005) === null || _vm$dossier_credit2 === void 0 ? void 0 : _vm$dossier_credit2.norme_performances1, function (norme_performance, index) {
    var _vm$dossier_credit3, _norme_performance$ri;
    return _c("tr", {
      key: "r_1" + index
    }, [_c("td", {
      "class": {
        "d-none": index > 0
      },
      attrs: {
        rowspan: (_vm$dossier_credit3 = _vm.dossier_credit) === null || _vm$dossier_credit3 === void 0 || (_vm$dossier_credit3 = _vm$dossier_credit3.cred_pub_tb_22005) === null || _vm$dossier_credit3 === void 0 || (_vm$dossier_credit3 = _vm$dossier_credit3.norme_performances1) === null || _vm$dossier_credit3 === void 0 ? void 0 : _vm$dossier_credit3.length
      }
    }, [_vm._v("\n                                Promouvoir des conditions de travail sûres et saines et protéger la santé des travailleurs\n                            ")]), _vm._v(" "), norme_performance !== null && norme_performance !== void 0 && (_norme_performance$ri = norme_performance.risque) !== null && _norme_performance$ri !== void 0 && _norme_performance$ri.trim() ? [_c("td", [_vm._v(_vm._s(norme_performance.risque))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(norme_performance.action_corrective))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(norme_performance.delai))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(norme_performance.livrable))])] : _vm._e()], 2);
  })], 2)])]), _vm._v(" "), _c("div", {
    staticClass: "table-responsive mt-2"
  }, [_c("table", {
    staticClass: "table mb-1 table-bordered"
  }, [_vm._m(2), _vm._v(" "), _c("tbody", _vm._l((_vm$dossier_credit4 = _vm.dossier_credit) === null || _vm$dossier_credit4 === void 0 || (_vm$dossier_credit4 = _vm$dossier_credit4.cred_pub_tb_22005) === null || _vm$dossier_credit4 === void 0 ? void 0 : _vm$dossier_credit4.norme_performances3, function (norme_performance, index) {
    var _vm$dossier_credit5;
    return _c("tr", {
      key: "r_2" + index
    }, [_c("td", {
      "class": {
        "d-none": index > 0
      },
      attrs: {
        rowspan: (_vm$dossier_credit5 = _vm.dossier_credit) === null || _vm$dossier_credit5 === void 0 || (_vm$dossier_credit5 = _vm$dossier_credit5.cred_pub_tb_22005) === null || _vm$dossier_credit5 === void 0 ? void 0 : _vm$dossier_credit5.norme_performances3.length
      }
    }, [_vm._v(" Santé et Sécurité au travail")]), _vm._v(" "), _c("td", [_vm._v(_vm._s(norme_performance.risque))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(norme_performance.action_corrective))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(norme_performance.delai))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(norme_performance.livrable))])]);
  }), 0)])]), _vm._v(" "), _c("div", {
    staticClass: "table-responsive mt-2"
  }, [_c("table", {
    staticClass: "table mb-1 table-bordered"
  }, [_vm._m(3), _vm._v(" "), _c("tbody", [_vm._l((_vm$dossier_credit6 = _vm.dossier_credit) === null || _vm$dossier_credit6 === void 0 || (_vm$dossier_credit6 = _vm$dossier_credit6.cred_pub_tb_22005) === null || _vm$dossier_credit6 === void 0 ? void 0 : _vm$dossier_credit6.norme_performances5, function (norme_performance5, index) {
    var _vm$dossier_credit7;
    return _c("tr", {
      key: "r_3" + index
    }, [_c("td", {
      "class": {
        "d-none": index > 0
      },
      attrs: {
        rowspan: (_vm$dossier_credit7 = _vm.dossier_credit) === null || _vm$dossier_credit7 === void 0 || (_vm$dossier_credit7 = _vm$dossier_credit7.cred_pub_tb_22005) === null || _vm$dossier_credit7 === void 0 || (_vm$dossier_credit7 = _vm$dossier_credit7.norme_performances5) === null || _vm$dossier_credit7 === void 0 ? void 0 : _vm$dossier_credit7.length
      }
    }, [_vm._v("\n                                Utilisation rationnelle des ressources en eau\n                        ")]), _vm._v(" "), _c("td", [_vm._v(_vm._s(norme_performance5.risque))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(norme_performance5.action_corrective))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(norme_performance5.delai))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(norme_performance5.livrable))])]);
  }), _vm._v(" "), _vm._l((_vm$dossier_credit8 = _vm.dossier_credit) === null || _vm$dossier_credit8 === void 0 || (_vm$dossier_credit8 = _vm$dossier_credit8.cred_pub_tb_22005) === null || _vm$dossier_credit8 === void 0 ? void 0 : _vm$dossier_credit8.norme_performances6, function (norme_performance6, index) {
    var _vm$dossier_credit9;
    return _c("tr", {
      key: "r_4" + index
    }, [_c("td", {
      "class": {
        "d-none": index > 0
      },
      attrs: {
        rowspan: (_vm$dossier_credit9 = _vm.dossier_credit) === null || _vm$dossier_credit9 === void 0 || (_vm$dossier_credit9 = _vm$dossier_credit9.cred_pub_tb_22005) === null || _vm$dossier_credit9 === void 0 || (_vm$dossier_credit9 = _vm$dossier_credit9.norme_performances6) === null || _vm$dossier_credit9 === void 0 ? void 0 : _vm$dossier_credit9.length
      }
    }, [_vm._v("\n                            Gestion des déchets fécaux et urinaires des porcs\n                        ")]), _vm._v(" "), _c("td", [_vm._v(_vm._s(norme_performance6.risque))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(norme_performance6.action_corrective))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(norme_performance6.delai))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(norme_performance6.livrable))])]);
  })], 2)])])]) : _c("div", [_vm._m(4)]), _vm._v(" "), _c("div", {
    staticClass: "table-responsive mt-3"
  }, [_c("table", {
    staticClass: "table table-response table-bordered"
  }, [_c("tbody", [_c("tr", [_c("td", {
    staticClass: "fw-bold",
    attrs: {
      rowspan: "2"
    }
  }, [_vm._v("Cotation")]), _vm._v(" "), _c("td", {
    attrs: {
      rowspan: "2"
    }
  }, [_vm._v("\n                            " + _vm._s((_vm$dossier_credit0 = _vm.dossier_credit) === null || _vm$dossier_credit0 === void 0 || (_vm$dossier_credit0 = _vm$dossier_credit0.cred_pub_tb_5001) === null || _vm$dossier_credit0 === void 0 ? void 0 : _vm$dossier_credit0.risque_note) + "\n                        ")]), _vm._v(" "), _c("td", {
    staticClass: "text-nowrap fw-bold",
    staticStyle: {
      "vertical-align": "middle"
    }
  }, [_vm._v("Initiateur ")]), _vm._v(" "), _c("td", {
    staticStyle: {
      "vertical-align": "middle"
    }
  }, [_vm._v("\n                            " + _vm._s((_vm$dossier_credit1 = _vm.dossier_credit) === null || _vm$dossier_credit1 === void 0 ? void 0 : _vm$dossier_credit1.monteur_doss) + "\n                        ")])]), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "text-nowrap fw-bold",
    staticStyle: {
      "vertical-align": "middle"
    }
  }, [_vm._v("Direction")]), _vm._v(" "), _c("td", {
    staticStyle: {
      "vertical-align": "middle"
    }
  }, [_vm._v("\n                            " + _vm._s(_vm.direction[0][_vm.categorie_client]) + "\n                        ")])]), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "text-nowrap fw-bold",
    attrs: {
      rowspan: "3"
    }
  }, [_vm._v("Catégorisation ES")]), _vm._v(" "), _c("td", {
    attrs: {
      rowspan: "3"
    }
  }, [_vm._v("\n                            " + _vm._s(_vm.categorie) + "\n                        ")])]), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "text-nowrap fw-bold",
    staticStyle: {
      "vertical-align": "middle"
    }
  }, [_vm._v("Initial")]), _vm._v(" "), _c("td", {
    staticStyle: {
      "vertical-align": "middle"
    }
  }, [_vm._v("\n                            " + _vm._s(_vm.direction[0]["sigle_" + _vm.categorie_client]) + "\n                        ")])]), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "text-nowrap fw-bold",
    staticStyle: {
      "vertical-align": "middle"
    }
  }, [_vm._v("IP")]), _vm._v(" "), _c("td", {
    staticStyle: {
      "vertical-align": "middle"
    }
  }, [_vm._v("\n                            " + _vm._s(_vm.data.ip) + "\n                        ")])]), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "text-nowrap fw-bold"
  }, [_vm._v("Ancienne écheance")]), _vm._v(" "), _c("td", [_vm._v("\n                            " + _vm._s(_vm._f("formatDate")(_vm.data.ancienne_echeance)) + "\n                        ")]), _vm._v(" "), _c("td", {
    staticClass: "text-nowrap fw-bold"
  }, [_vm._v("Niveau de pouvoir CCDG ou CCCA")]), _vm._v(" "), _c("td", [_vm._v("\n                            " + _vm._s(_vm.level_power[_vm.selected_path_type]) + "\n                        ")])]), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "text-nowrap fw-bold"
  }, [_vm._v("Nouvelle écheance")]), _vm._v(" "), _c("td", [_vm._v("\n                            " + _vm._s(_vm._f("formatDate")(_vm.data.nouvelle_echeance)) + "\n                        ")]), _vm._v(" "), _c("td", {
    staticClass: "text-nowrap fw-bold"
  }, [_vm._v("Dernier signataire DC")]), _vm._v(" "), _c("td", [_vm._v("\n                            " + _vm._s(_vm.dern_signature_dg) + "\n                        ")])]), _vm._v(" "), _c("tr", [_c("td"), _vm._v(" "), _c("td"), _vm._v(" "), _c("td", {
    staticClass: "text-nowrap fw-bold"
  }, [_vm._v("Signature DG")]), _vm._v(" "), _vm.decision_logs ? _c("td", [_vm._v("\n                            " + _vm._s(_vm.signature_dg["in"]) + "\n                        ")]) : _c("td", [_vm._v("\n                            " + _vm._s(_vm.signature_dg.nothing) + "\n                        ")])])])])]), _vm._v(" "), _c("div", {
    staticClass: "table-reponsive mt-3"
  }, [_c("table", {
    staticClass: "table"
  }, [_c("tbody", [_vm._m(5), _vm._v(" "), _c("tr", [_c("td", {
    attrs: {
      colspan: "4"
    },
    domProps: {
      innerHTML: _vm._s(_vm.data.commentaires_resume)
    }
  })])])])])])]) : _vm._e();
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("th", {
    attrs: {
      colspan: "5"
    }
  }, [_vm._v("Normes de performance 1 de la SFI : Evaluation et gestion sociaux des risques environnementaux")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("tr", [_c("td", {
    staticClass: "fw-bold"
  }, [_vm._v("Exigences des normes de performance de la SFI")]), _vm._v(" "), _c("td", {
    staticStyle: {
      "font-weight": "600"
    },
    attrs: {
      scope: "col"
    }
  }, [_vm._v("Risque")]), _vm._v(" "), _c("td", {
    staticStyle: {
      "font-weight": "600"
    },
    attrs: {
      scope: "col"
    }
  }, [_vm._v("Actions correctives")]), _vm._v(" "), _c("td", {
    staticStyle: {
      "font-weight": "600"
    },
    attrs: {
      scope: "col"
    }
  }, [_vm._v("Délais")]), _vm._v(" "), _c("td", {
    staticStyle: {
      "font-weight": "600"
    },
    attrs: {
      scope: "col"
    }
  }, [_vm._v("Livrables")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("th", {
    attrs: {
      colspan: "5"
    }
  }, [_vm._v("Normes de performance 2 de la SFI : Main d’oeuvre et conditions de travail")])]), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "fw-bold"
  }, [_vm._v("Exigences des normes de performance de la SFI")]), _vm._v(" "), _c("td", {
    staticStyle: {
      "font-weight": "600"
    },
    attrs: {
      scope: "col"
    }
  }, [_vm._v("Risque")]), _vm._v(" "), _c("td", {
    staticStyle: {
      "font-weight": "600"
    },
    attrs: {
      scope: "col"
    }
  }, [_vm._v("Actions correctives")]), _vm._v(" "), _c("td", {
    staticStyle: {
      "font-weight": "600"
    },
    attrs: {
      scope: "col"
    }
  }, [_vm._v("Délais")]), _vm._v(" "), _c("td", {
    staticStyle: {
      "font-weight": "600"
    },
    attrs: {
      scope: "col"
    }
  }, [_vm._v("Livrables")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("th", {
    attrs: {
      colspan: "5"
    }
  }, [_vm._v("Normes de Performance 3 de la SFI : Utilisation rationnelle des ressources et prévention de la pollution")])]), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "fw-bold"
  }, [_vm._v("Exigences des normes de performance de la SFI")]), _vm._v(" "), _c("td", {
    staticStyle: {
      "font-weight": "600"
    },
    attrs: {
      scope: "col"
    }
  }, [_vm._v("Risque")]), _vm._v(" "), _c("td", {
    staticStyle: {
      "font-weight": "600"
    },
    attrs: {
      scope: "col"
    }
  }, [_vm._v("Actions correctives")]), _vm._v(" "), _c("td", {
    staticStyle: {
      "font-weight": "600"
    },
    attrs: {
      scope: "col"
    }
  }, [_vm._v("Délais")]), _vm._v(" "), _c("td", {
    staticStyle: {
      "font-weight": "600"
    },
    attrs: {
      scope: "col"
    }
  }, [_vm._v("Livrables")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-bordered"
  }, [_c("thead", [_c("tr", [_c("td", {
    staticClass: "col-3 text-center vertical-middle fw-bold"
  }, [_vm._v("Exigences des normes de "), _c("br"), _vm._v("\n                                performance de la SFI")]), _vm._v(" "), _c("td", {
    staticClass: "col-3 text-center vertical-middle fw-bold"
  }, [_vm._v("Risques")]), _vm._v(" "), _c("td", {
    staticClass: "col-2 text-center vertical-middle fw-bold"
  }, [_vm._v("Actions correctives")]), _vm._v(" "), _c("td", {
    staticClass: "col-2 text-center vertical-middle fw-bold"
  }, [_vm._v("Délais")]), _vm._v(" "), _c("td", {
    staticClass: "col-2 text-center vertical-middle fw-bold"
  }, [_vm._v("Livrables")])])]), _vm._v(" "), _c("tbody", [_c("tr", [_c("td", {
    staticStyle: {
      padding: "50px"
    }
  }), _vm._v(" "), _c("td"), _vm._v(" "), _c("td"), _vm._v(" "), _c("td"), _vm._v(" "), _c("td")])])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("tr", {
    staticClass: "bg-grey"
  }, [_c("th", {
    staticClass: "text-center",
    attrs: {
      colspan: "4"
    }
  }, [_vm._v("commentaire")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/pv_ccdg/PV-CCDG3.vue?vue&type=style&index=0&id=6b4cd3e1&scoped=true&lang=css":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/pv_ccdg/PV-CCDG3.vue?vue&type=style&index=0&id=6b4cd3e1&scoped=true&lang=css ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.head-memorandum-title[data-v-6b4cd3e1] {\r\n    margin-top: 15px;\r\n    padding: 16px;\r\n    color: #fff;\r\n    font-weight: bold;\r\n    background-color: #34495e;\r\n    border: 2px solid #575759;\r\n    box-shadow: 1px 3px 4px #ddd;\r\n    font-size: 16px;\r\n    text-align: center;\r\n    text-transform: uppercase;\r\n    border-radius: 10px;\r\n    margin-bottom: 15px;\n}\n.fiche_title[data-v-6b4cd3e1] {\r\n    padding: 10px;\r\n    background-color: #f4f3f3;\r\n    /* color: white */\n}\n.vertical-middle[data-v-6b4cd3e1] {\r\n    vertical-align: middle;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/pv_ccdg/PV-CCDG3.vue?vue&type=style&index=0&id=6b4cd3e1&scoped=true&lang=css":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/pv_ccdg/PV-CCDG3.vue?vue&type=style&index=0&id=6b4cd3e1&scoped=true&lang=css ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PV_CCDG3_vue_vue_type_style_index_0_id_6b4cd3e1_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PV-CCDG3.vue?vue&type=style&index=0&id=6b4cd3e1&scoped=true&lang=css */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/pv_ccdg/PV-CCDG3.vue?vue&type=style&index=0&id=6b4cd3e1&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PV_CCDG3_vue_vue_type_style_index_0_id_6b4cd3e1_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PV_CCDG3_vue_vue_type_style_index_0_id_6b4cd3e1_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/offview/bank/nsia/pv_ccdg/PV-CCDG3.vue":
/*!************************************************************************!*\
  !*** ./resources/js/components/offview/bank/nsia/pv_ccdg/PV-CCDG3.vue ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PV_CCDG3_vue_vue_type_template_id_6b4cd3e1_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PV-CCDG3.vue?vue&type=template&id=6b4cd3e1&scoped=true */ "./resources/js/components/offview/bank/nsia/pv_ccdg/PV-CCDG3.vue?vue&type=template&id=6b4cd3e1&scoped=true");
/* harmony import */ var _PV_CCDG3_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PV-CCDG3.vue?vue&type=script&lang=js */ "./resources/js/components/offview/bank/nsia/pv_ccdg/PV-CCDG3.vue?vue&type=script&lang=js");
/* harmony import */ var _PV_CCDG3_vue_vue_type_style_index_0_id_6b4cd3e1_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PV-CCDG3.vue?vue&type=style&index=0&id=6b4cd3e1&scoped=true&lang=css */ "./resources/js/components/offview/bank/nsia/pv_ccdg/PV-CCDG3.vue?vue&type=style&index=0&id=6b4cd3e1&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _PV_CCDG3_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _PV_CCDG3_vue_vue_type_template_id_6b4cd3e1_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _PV_CCDG3_vue_vue_type_template_id_6b4cd3e1_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "6b4cd3e1",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/offview/bank/nsia/pv_ccdg/PV-CCDG3.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/offview/bank/nsia/pv_ccdg/PV-CCDG3.vue?vue&type=script&lang=js":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/offview/bank/nsia/pv_ccdg/PV-CCDG3.vue?vue&type=script&lang=js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PV_CCDG3_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PV-CCDG3.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/pv_ccdg/PV-CCDG3.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PV_CCDG3_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/offview/bank/nsia/pv_ccdg/PV-CCDG3.vue?vue&type=style&index=0&id=6b4cd3e1&scoped=true&lang=css":
/*!********************************************************************************************************************************!*\
  !*** ./resources/js/components/offview/bank/nsia/pv_ccdg/PV-CCDG3.vue?vue&type=style&index=0&id=6b4cd3e1&scoped=true&lang=css ***!
  \********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PV_CCDG3_vue_vue_type_style_index_0_id_6b4cd3e1_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PV-CCDG3.vue?vue&type=style&index=0&id=6b4cd3e1&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/pv_ccdg/PV-CCDG3.vue?vue&type=style&index=0&id=6b4cd3e1&scoped=true&lang=css");


/***/ }),

/***/ "./resources/js/components/offview/bank/nsia/pv_ccdg/PV-CCDG3.vue?vue&type=template&id=6b4cd3e1&scoped=true":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/components/offview/bank/nsia/pv_ccdg/PV-CCDG3.vue?vue&type=template&id=6b4cd3e1&scoped=true ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PV_CCDG3_vue_vue_type_template_id_6b4cd3e1_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PV_CCDG3_vue_vue_type_template_id_6b4cd3e1_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PV_CCDG3_vue_vue_type_template_id_6b4cd3e1_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PV-CCDG3.vue?vue&type=template&id=6b4cd3e1&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/pv_ccdg/PV-CCDG3.vue?vue&type=template&id=6b4cd3e1&scoped=true");


/***/ })

}]);