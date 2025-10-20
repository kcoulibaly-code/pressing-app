"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_offview_bank_nsia_memo_T3_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/T3.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/T3.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    dossier_credit: Object
  },
  data: function data() {
    return {
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
      }],
      analyse_env_soc_demandes_q1_2: [{
        question: "A.    La présente demande a-t-elle fait l’objet du tri préliminaire ES (screening en anglais) ?",
        response_oui: "",
        response_non: ""
      }, {
        question: "B.    Cette demande apparait -elle sur la liste d’exclusion sectorielle de la banque ?",
        response_oui: "",
        response_non: ""
      }],
      analyse_env_soc_demandes_q3: {
        question1: "C.   Cette demande fait-elle partie des cas de restrictions de financement de la banque ? (Alcool fort, Tabac, Armes et munitions)",
        response1_oui: "",
        response1_non: "",
        question2: "Si Oui, avez- vous tenu compte du seuil prudentiel des 10% imposé par la banque ?",
        response2_oui: "",
        response2_non: ""
      },
      analyse_env_soc_demandes_q4: {
        question1: "D.   Avez – vous procédé à la catégorisation ES de la demande ?",
        response1_oui: "",
        response1_non: "",
        question2: "E.   Si oui, quelle cotation environnementale et sociale décidez-vous d’affecter à cette demande de financement (A, B, C) ? :",
        response2: ""
      }
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/T3.vue?vue&type=template&id=135dbf42&scoped=true":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/T3.vue?vue&type=template&id=135dbf42&scoped=true ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm$dossier_credit, _vm$dossier_credit2, _vm$analyse_env_soc_d, _vm$analyse_env_soc_d2, _vm$dossier_credit3, _vm$analyse_env_soc_d3, _vm$analyse_env_soc_d4, _vm$dossier_credit4, _vm$dossier_credit5, _vm$analyse_env_soc_d5, _vm$analyse_env_soc_d6, _vm$dossier_credit6, _vm$dossier_credit7, _vm$dossier_credit8, _vm$analyse_env_soc_d7, _vm$dossier_credit9, _vm$dossier_credit0, _vm$dossier_credit1, _vm$analyse_env_soc_d8, _vm$dossier_credit10, _vm$analyse_env_soc_d9, _vm$analyse_env_soc_d0, _vm$dossier_credit11, _vm$analyse_env_soc_d1, _vm$dossier_credit14, _vm$dossier_credit15;
  var _vm = this,
    _c = _vm._self._c;
  return _vm.dossier_credit != undefined ? _c("div", [(_vm$dossier_credit = _vm.dossier_credit) !== null && _vm$dossier_credit !== void 0 && _vm$dossier_credit.cred_pub_tb_3 ? _c("div", {}, [_c("div", {
    staticClass: "row justify-content-center"
  }, [_c("fieldset", {
    staticClass: "border-top"
  }, [_c("div", {
    staticClass: "head-memorandum-title text-uppercase",
    staticStyle: {
      "text-align": "center"
    }
  }, [_vm._v("\n                    ANALYSE ENVIRONNEMENTALE ET SOCIALE (ES) DE LA DEMANDE DE FINANCEMENT\n                ")]), _vm._v(" "), _c("div", {
    staticClass: "table-responsive py-3 justify-content-center"
  }, [_c("table", {
    staticClass: "table table-bordered mt-2"
  }, [_vm._m(0), _vm._v(" "), _c("tbody", [Boolean((_vm$dossier_credit2 = _vm.dossier_credit) === null || _vm$dossier_credit2 === void 0 || (_vm$dossier_credit2 = _vm$dossier_credit2.cred_pub_tb_4001) === null || _vm$dossier_credit2 === void 0 ? void 0 : _vm$dossier_credit2.date_screening) ? _c("tr", [_c("td", [_c("h6", {
    attrs: {
      id: "risques-et-actions-correctives"
    }
  }, [_vm._v("\n                                " + _vm._s((_vm$analyse_env_soc_d = _vm.analyse_env_soc_demandes_q1_2[0]) === null || _vm$analyse_env_soc_d === void 0 ? void 0 : _vm$analyse_env_soc_d.question) + " "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })])]), _vm._v(" "), _vm._m(1), _vm._v(" "), _vm._m(2)]) : _c("tr", [_c("td", [_c("h6", {
    attrs: {
      id: "risques-et-actions-correctives"
    }
  }, [_vm._v("\n                                " + _vm._s((_vm$analyse_env_soc_d2 = _vm.analyse_env_soc_demandes_q1_2[0]) === null || _vm$analyse_env_soc_d2 === void 0 ? void 0 : _vm$analyse_env_soc_d2.question) + " "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })])]), _vm._v(" "), _vm._m(3), _vm._v(" "), _vm._m(4)]), _vm._v(" "), Boolean((_vm$dossier_credit3 = _vm.dossier_credit) === null || _vm$dossier_credit3 === void 0 || (_vm$dossier_credit3 = _vm$dossier_credit3.cred_pub_tb_4001) === null || _vm$dossier_credit3 === void 0 ? void 0 : _vm$dossier_credit3.choix) ? _c("tr", [_c("td", [_c("h6", {
    attrs: {
      id: "risques-et-actions-correctives"
    }
  }, [_vm._v("\n                                " + _vm._s((_vm$analyse_env_soc_d3 = _vm.analyse_env_soc_demandes_q1_2[1]) === null || _vm$analyse_env_soc_d3 === void 0 ? void 0 : _vm$analyse_env_soc_d3.question) + " "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })])]), _vm._v(" "), _vm._m(5), _vm._v(" "), _vm._m(6)]) : _c("tr", [_c("td", [_c("h6", {
    attrs: {
      id: "risques-et-actions-correctives"
    }
  }, [_vm._v("\n                                " + _vm._s((_vm$analyse_env_soc_d4 = _vm.analyse_env_soc_demandes_q1_2[1]) === null || _vm$analyse_env_soc_d4 === void 0 ? void 0 : _vm$analyse_env_soc_d4.question) + " "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })])]), _vm._v(" "), _vm._m(7), _vm._v(" "), _vm._m(8)]), _vm._v(" "), Boolean((_vm$dossier_credit4 = _vm.dossier_credit) === null || _vm$dossier_credit4 === void 0 || (_vm$dossier_credit4 = _vm$dossier_credit4.cred_pub_tb_4001) === null || _vm$dossier_credit4 === void 0 ? void 0 : _vm$dossier_credit4.items_conserne) && ((_vm$dossier_credit5 = _vm.dossier_credit) === null || _vm$dossier_credit5 === void 0 || (_vm$dossier_credit5 = _vm$dossier_credit5.cred_pub_tb_4001) === null || _vm$dossier_credit5 === void 0 ? void 0 : _vm$dossier_credit5.items_conserne.filter(function (item, index) {
    return item.activite_concernee === "oui";
  }).length) > 0 ? _c("tr", [_c("td", [_c("h6", [_vm._v("\n                                " + _vm._s((_vm$analyse_env_soc_d5 = _vm.analyse_env_soc_demandes_q3) === null || _vm$analyse_env_soc_d5 === void 0 ? void 0 : _vm$analyse_env_soc_d5.question1) + " "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })])]), _vm._v(" "), _vm._m(9), _vm._v(" "), _vm._m(10)]) : _c("tr", [_c("td", [_c("h6", [_vm._v("\n                                " + _vm._s((_vm$analyse_env_soc_d6 = _vm.analyse_env_soc_demandes_q3) === null || _vm$analyse_env_soc_d6 === void 0 ? void 0 : _vm$analyse_env_soc_d6.question1) + " "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })])]), _vm._v(" "), _vm._m(11), _vm._v(" "), _vm._m(12)]), _vm._v(" "), Boolean((_vm$dossier_credit6 = _vm.dossier_credit) === null || _vm$dossier_credit6 === void 0 || (_vm$dossier_credit6 = _vm$dossier_credit6.cred_pub_tb_4001) === null || _vm$dossier_credit6 === void 0 ? void 0 : _vm$dossier_credit6.items_conserne) && ((_vm$dossier_credit7 = _vm.dossier_credit) === null || _vm$dossier_credit7 === void 0 || (_vm$dossier_credit7 = _vm$dossier_credit7.cred_pub_tb_4001) === null || _vm$dossier_credit7 === void 0 ? void 0 : _vm$dossier_credit7.items_conserne.filter(function (item, index) {
    return item.activite_concernee === "oui";
  }).length) > 0 && ((_vm$dossier_credit8 = _vm.dossier_credit) === null || _vm$dossier_credit8 === void 0 || (_vm$dossier_credit8 = _vm$dossier_credit8.cred_pub_tb_4001) === null || _vm$dossier_credit8 === void 0 ? void 0 : _vm$dossier_credit8.nouvelle_demande) == "oui" ? _c("tr", [_c("td", [_c("h6", [_vm._v("\n                                " + _vm._s((_vm$analyse_env_soc_d7 = _vm.analyse_env_soc_demandes_q3) === null || _vm$analyse_env_soc_d7 === void 0 ? void 0 : _vm$analyse_env_soc_d7.question2) + " "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })])]), _vm._v(" "), _vm._m(13), _vm._v(" "), _vm._m(14)]) : _vm._e(), _vm._v(" "), Boolean((_vm$dossier_credit9 = _vm.dossier_credit) === null || _vm$dossier_credit9 === void 0 || (_vm$dossier_credit9 = _vm$dossier_credit9.cred_pub_tb_4001) === null || _vm$dossier_credit9 === void 0 ? void 0 : _vm$dossier_credit9.items_conserne) && ((_vm$dossier_credit0 = _vm.dossier_credit) === null || _vm$dossier_credit0 === void 0 || (_vm$dossier_credit0 = _vm$dossier_credit0.cred_pub_tb_4001) === null || _vm$dossier_credit0 === void 0 ? void 0 : _vm$dossier_credit0.items_conserne.filter(function (item, index) {
    return item.activite_concernee === "oui";
  }).length) > 0 && ((_vm$dossier_credit1 = _vm.dossier_credit) === null || _vm$dossier_credit1 === void 0 || (_vm$dossier_credit1 = _vm$dossier_credit1.cred_pub_tb_4001) === null || _vm$dossier_credit1 === void 0 ? void 0 : _vm$dossier_credit1.nouvelle_demande) == "non" ? _c("tr", [_c("td", [_c("h6", [_vm._v("\n                                " + _vm._s((_vm$analyse_env_soc_d8 = _vm.analyse_env_soc_demandes_q3) === null || _vm$analyse_env_soc_d8 === void 0 ? void 0 : _vm$analyse_env_soc_d8.question2) + " "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })])]), _vm._v(" "), _vm._m(15), _vm._v(" "), _vm._m(16)]) : _vm._e(), _vm._v(" "), Boolean((_vm$dossier_credit10 = _vm.dossier_credit) === null || _vm$dossier_credit10 === void 0 || (_vm$dossier_credit10 = _vm$dossier_credit10.cred_pub_tb_5001) === null || _vm$dossier_credit10 === void 0 ? void 0 : _vm$dossier_credit10.risque_note) ? _c("tr", [_c("td", [_c("h6", [_vm._v("\n                                " + _vm._s((_vm$analyse_env_soc_d9 = _vm.analyse_env_soc_demandes_q4) === null || _vm$analyse_env_soc_d9 === void 0 ? void 0 : _vm$analyse_env_soc_d9.question1) + " "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })])]), _vm._v(" "), _vm._m(17), _vm._v(" "), _vm._m(18)]) : _c("tr", [_c("td", [_c("h6", [_vm._v("\n                                " + _vm._s((_vm$analyse_env_soc_d0 = _vm.analyse_env_soc_demandes_q4) === null || _vm$analyse_env_soc_d0 === void 0 ? void 0 : _vm$analyse_env_soc_d0.question1) + " "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })])]), _vm._v(" "), _vm._m(19), _vm._v(" "), _vm._m(20)])])]), _vm._v(" "), _c("hr"), _vm._v(" "), Boolean((_vm$dossier_credit11 = _vm.dossier_credit) === null || _vm$dossier_credit11 === void 0 || (_vm$dossier_credit11 = _vm$dossier_credit11.cred_pub_tb_5001) === null || _vm$dossier_credit11 === void 0 ? void 0 : _vm$dossier_credit11.risque_note) ? _c("table", {
    staticClass: "table table-bordered mt-2"
  }, [_c("tbody", [_c("tr", [_c("td", [_c("h6", [_vm._v("\n                                " + _vm._s((_vm$analyse_env_soc_d1 = _vm.analyse_env_soc_demandes_q4) === null || _vm$analyse_env_soc_d1 === void 0 ? void 0 : _vm$analyse_env_soc_d1.question2) + " "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })])]), _vm._v(" "), _c("td", {
    staticClass: "text-center fs-15",
    attrs: {
      colspan: "2"
    }
  }, [_c("b", [_vm._v(_vm._s(this.note_risque_es.filter(function (item, index) {
    var _vm$dossier_credit12;
    return item.note === ((_vm$dossier_credit12 = _vm.dossier_credit) === null || _vm$dossier_credit12 === void 0 || (_vm$dossier_credit12 = _vm$dossier_credit12.cred_pub_tb_5001) === null || _vm$dossier_credit12 === void 0 ? void 0 : _vm$dossier_credit12.risque_note);
  })[0]["note"]))])]), _vm._v(" "), _c("td", {
    staticClass: "text-center fs-15",
    attrs: {
      colspan: "2"
    }
  }, [_vm._v("\n                              " + _vm._s(this.note_risque_es.filter(function (item, index) {
    var _vm$dossier_credit13;
    return item.note === ((_vm$dossier_credit13 = _vm.dossier_credit) === null || _vm$dossier_credit13 === void 0 || (_vm$dossier_credit13 = _vm$dossier_credit13.cred_pub_tb_5001) === null || _vm$dossier_credit13 === void 0 ? void 0 : _vm$dossier_credit13.risque_note);
  })[0]["risque"]) + "\n                           ")])])])]) : _vm._e(), _vm._v(" "), _c("br"), _vm._v(" "), _c("table", {
    staticClass: "table table-bordered"
  }, [_vm._m(21), _vm._v(" "), _c("tbody", _vm._l((_vm$dossier_credit14 = _vm.dossier_credit) === null || _vm$dossier_credit14 === void 0 || (_vm$dossier_credit14 = _vm$dossier_credit14.cred_pub_tb_3) === null || _vm$dossier_credit14 === void 0 ? void 0 : _vm$dossier_credit14.risque_es_action_correctives, function (risque_es_action_corrective, index) {
    return _c("tr", {
      key: index
    }, [_c("td", [_vm._v(_vm._s(risque_es_action_corrective.risques_es))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(risque_es_action_corrective.actions_correctives))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm._f("formatDate")(risque_es_action_corrective.delai_realisation)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(risque_es_action_corrective.livrable))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(risque_es_action_corrective.comment))])]);
  }), 0)]), _vm._v(" "), _c("br"), _vm._v(" "), _c("table", {
    staticClass: "table table-bordered"
  }, [_vm._m(22), _vm._v(" "), _c("tbody", [_c("tr", [_c("td", {
    attrs: {
      colSpan: "2"
    }
  }, [_c("span", {
    domProps: {
      innerHTML: _vm._s((_vm$dossier_credit15 = _vm.dossier_credit) === null || _vm$dossier_credit15 === void 0 || (_vm$dossier_credit15 = _vm$dossier_credit15.cred_pub_tb_3) === null || _vm$dossier_credit15 === void 0 ? void 0 : _vm$dossier_credit15.avis_eg_general)
    }
  })])])])]), _vm._v(" "), _c("br")])])])]) : _vm._e()]) : _c("div", {
    staticClass: "d-flex justify-content-center text-lowercase align-items-center",
    staticStyle: {
      "min-height": "300px"
    }
  }, [_c("span", {
    staticClass: "spinner-border spinner-lg"
  }), _vm._v("\n    Chargement des données ...\n")]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("td", {
    staticClass: "th fw-bold text-center"
  }, [_c("b", [_vm._v("Questions")])]), _vm._v(" "), _c("td", {
    staticClass: "th fw-bold text-center",
    attrs: {
      colspan: "2"
    }
  }, [_c("b", [_vm._v("Réponses")])])]), _vm._v(" "), _c("tr", [_c("td"), _vm._v(" "), _c("td", {
    staticClass: "text-center"
  }, [_c("b", [_vm._v("Oui")])]), _vm._v(" "), _c("td", {
    staticClass: "text-center"
  }, [_c("b", [_vm._v("Non")])])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {
    staticClass: "text-center"
  }, [_c("input", {
    staticClass: "form-check-input",
    staticStyle: {
      width: "30px",
      height: "30px"
    },
    attrs: {
      disabled: "",
      type: "checkbox",
      checked: ""
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {
    staticClass: "text-center"
  }, [_c("input", {
    staticClass: "form-check-input",
    staticStyle: {
      width: "30px",
      height: "30px"
    },
    attrs: {
      disabled: "",
      type: "checkbox"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {
    staticClass: "text-center"
  }, [_c("input", {
    staticClass: "form-check-input",
    staticStyle: {
      width: "30px",
      height: "30px"
    },
    attrs: {
      disabled: "",
      type: "checkbox"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {
    staticClass: "text-center"
  }, [_c("input", {
    staticClass: "form-check-input",
    staticStyle: {
      width: "30px",
      height: "30px"
    },
    attrs: {
      type: "checkbox",
      checked: "",
      disabled: ""
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {
    staticClass: "text-center"
  }, [_c("input", {
    staticClass: "form-check-input",
    staticStyle: {
      width: "30px",
      height: "30px"
    },
    attrs: {
      disabled: "",
      type: "checkbox",
      checked: ""
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {
    staticClass: "text-center"
  }, [_c("input", {
    staticClass: "form-check-input",
    staticStyle: {
      width: "30px",
      height: "30px"
    },
    attrs: {
      disabled: "",
      type: "checkbox"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {
    staticClass: "text-center"
  }, [_c("input", {
    staticClass: "form-check-input",
    staticStyle: {
      width: "30px",
      height: "30px"
    },
    attrs: {
      disabled: "",
      type: "checkbox"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {
    staticClass: "text-center"
  }, [_c("input", {
    staticClass: "form-check-input",
    staticStyle: {
      width: "30px",
      height: "30px"
    },
    attrs: {
      disabled: "",
      type: "checkbox",
      checked: ""
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {
    staticClass: "text-center"
  }, [_c("input", {
    staticClass: "form-check-input",
    staticStyle: {
      width: "30px",
      height: "30px"
    },
    attrs: {
      disabled: "",
      type: "checkbox",
      checked: ""
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {
    staticClass: "text-center"
  }, [_c("input", {
    staticClass: "form-check-input",
    staticStyle: {
      width: "30px",
      height: "30px"
    },
    attrs: {
      disabled: "",
      type: "checkbox"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {
    staticClass: "text-center"
  }, [_c("input", {
    staticClass: "form-check-input",
    staticStyle: {
      width: "30px",
      height: "30px"
    },
    attrs: {
      disabled: "",
      type: "checkbox"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {
    staticClass: "text-center"
  }, [_c("input", {
    staticClass: "form-check-input",
    staticStyle: {
      width: "30px",
      height: "30px"
    },
    attrs: {
      type: "checkbox",
      checked: "",
      disabled: ""
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {
    staticClass: "text-center"
  }, [_c("input", {
    staticClass: "form-check-input",
    staticStyle: {
      width: "30px",
      height: "30px"
    },
    attrs: {
      disabled: "",
      type: "checkbox",
      checked: ""
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {
    staticClass: "text-center"
  }, [_c("input", {
    staticClass: "form-check-input",
    staticStyle: {
      width: "30px",
      height: "30px"
    },
    attrs: {
      disabled: "",
      type: "checkbox"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {
    staticClass: "text-center"
  }, [_c("input", {
    staticClass: "form-check-input",
    staticStyle: {
      width: "30px",
      height: "30px"
    },
    attrs: {
      disabled: "",
      type: "checkbox"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {
    staticClass: "text-center"
  }, [_c("input", {
    staticClass: "form-check-input",
    staticStyle: {
      width: "30px",
      height: "30px"
    },
    attrs: {
      type: "checkbox",
      disabled: "",
      checked: ""
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {
    staticClass: "text-center",
    staticStyle: {
      width: "100px"
    }
  }, [_c("input", {
    staticClass: "form-check-input",
    staticStyle: {
      width: "30px",
      height: "30px"
    },
    attrs: {
      disabled: "",
      type: "checkbox",
      checked: ""
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {
    staticClass: "text-center",
    staticStyle: {
      width: "100px"
    }
  }, [_c("input", {
    staticClass: "form-check-input",
    staticStyle: {
      width: "30px",
      height: "30px"
    },
    attrs: {
      type: "checkbox",
      disabled: ""
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {
    staticClass: "text-center"
  }, [_c("input", {
    staticClass: "form-check-input",
    staticStyle: {
      width: "30px",
      height: "30px"
    },
    attrs: {
      disabled: "",
      type: "checkbox"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {
    staticClass: "text-center"
  }, [_c("input", {
    staticClass: "form-check-input",
    staticStyle: {
      width: "30px",
      height: "30px"
    },
    attrs: {
      type: "checkbox",
      checked: "",
      disabled: ""
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("tbody", {
    staticClass: "bg-ed-primary"
  }, [_c("tr", [_c("th", {
    staticClass: "bg-grey text-uppercase",
    staticStyle: {
      "text-align": "center"
    },
    attrs: {
      colSpan: "5",
      scope: "row"
    }
  }, [_vm._v("\n                                    RIQUES ES ET ACTIONS CORRECTIVES\n                                ")])]), _vm._v(" "), _c("tr", [_c("td", {
    attrs: {
      colspan: "5"
    }
  }, [_c("b", [_vm._v("F. Quels sont les principaux risques ES liés à cette demande de crédit et les principales actions correctives que vous proposeriez en vue de leur maitrise ? (Question valable uniquement pour les dossiers de cat. A et B)")])])]), _vm._v(" "), _c("tr", {
    staticClass: "bg-grey"
  }, [_c("td", [_vm._v("Risques ES")]), _vm._v(" "), _c("td", [_vm._v("Actions correctives")]), _vm._v(" "), _c("td", [_vm._v("Délai de réalisation")]), _vm._v(" "), _c("td", [_vm._v("livrable")]), _vm._v(" "), _c("td", [_vm._v("commentaire")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("tbody", {
    staticClass: "bg-ed-primary"
  }, [_c("tr", [_c("th", {
    staticClass: "bg-grey",
    staticStyle: {
      "text-align": "center"
    },
    attrs: {
      colSpan: "2",
      scope: "row"
    }
  }, [_c("b", [_vm._v("G. Quel est votre avis ES général concernant cette demande de financement ?")])])])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/T3.vue?vue&type=style&index=0&id=135dbf42&lang=css&scoped=true":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/T3.vue?vue&type=style&index=0&id=135dbf42&lang=css&scoped=true ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.bg-grey[data-v-135dbf42] {\n    background-color: #f4f3f3;\n    font-weight: 600;\n}\n.memo[data-v-135dbf42] {\n    margin-top: 10px;\n    padding: 10px;\n    border: 2px solid #fff;\n    font-weight: 550;\n    font-size: 16px;\n    text-align: left;\n    text-transform: uppercase;\n    background-color: #34495e;\n    color: #fff;\n}\n.lgcrd[data-v-135dbf42] {\n    font-size: 20px;\n    font-weight: bold;\n    color: #dc0030;\n}\n.head-memorandum-title[data-v-135dbf42] {\n    margin-top: 15px;\n    padding: 16px;\n    color: #fff;\n    font-weight: bold;\n    background-color: #34495e;\n    border: 2px solid #575759;\n    box-shadow: 1px 3px 4px #ddd;\n    font-size: 16px;\n    text-align: center;\n    text-transform: uppercase;\n    border-radius: 10px;\n    margin-bottom: 15px;\n}\ninput[type=checkbox][data-v-135dbf42]:disabled{\n    opacity:1\n}\n  ", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/T3.vue?vue&type=style&index=0&id=135dbf42&lang=css&scoped=true":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/T3.vue?vue&type=style&index=0&id=135dbf42&lang=css&scoped=true ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_T3_vue_vue_type_style_index_0_id_135dbf42_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./T3.vue?vue&type=style&index=0&id=135dbf42&lang=css&scoped=true */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/T3.vue?vue&type=style&index=0&id=135dbf42&lang=css&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_T3_vue_vue_type_style_index_0_id_135dbf42_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_T3_vue_vue_type_style_index_0_id_135dbf42_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/offview/bank/nsia/memo/T3.vue":
/*!***************************************************************!*\
  !*** ./resources/js/components/offview/bank/nsia/memo/T3.vue ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _T3_vue_vue_type_template_id_135dbf42_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./T3.vue?vue&type=template&id=135dbf42&scoped=true */ "./resources/js/components/offview/bank/nsia/memo/T3.vue?vue&type=template&id=135dbf42&scoped=true");
/* harmony import */ var _T3_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./T3.vue?vue&type=script&lang=js */ "./resources/js/components/offview/bank/nsia/memo/T3.vue?vue&type=script&lang=js");
/* harmony import */ var _T3_vue_vue_type_style_index_0_id_135dbf42_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./T3.vue?vue&type=style&index=0&id=135dbf42&lang=css&scoped=true */ "./resources/js/components/offview/bank/nsia/memo/T3.vue?vue&type=style&index=0&id=135dbf42&lang=css&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _T3_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _T3_vue_vue_type_template_id_135dbf42_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _T3_vue_vue_type_template_id_135dbf42_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "135dbf42",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/offview/bank/nsia/memo/T3.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/offview/bank/nsia/memo/T3.vue?vue&type=script&lang=js":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/offview/bank/nsia/memo/T3.vue?vue&type=script&lang=js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_T3_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./T3.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/T3.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_T3_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/offview/bank/nsia/memo/T3.vue?vue&type=style&index=0&id=135dbf42&lang=css&scoped=true":
/*!***********************************************************************************************************************!*\
  !*** ./resources/js/components/offview/bank/nsia/memo/T3.vue?vue&type=style&index=0&id=135dbf42&lang=css&scoped=true ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_T3_vue_vue_type_style_index_0_id_135dbf42_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./T3.vue?vue&type=style&index=0&id=135dbf42&lang=css&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/T3.vue?vue&type=style&index=0&id=135dbf42&lang=css&scoped=true");


/***/ }),

/***/ "./resources/js/components/offview/bank/nsia/memo/T3.vue?vue&type=template&id=135dbf42&scoped=true":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/components/offview/bank/nsia/memo/T3.vue?vue&type=template&id=135dbf42&scoped=true ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_T3_vue_vue_type_template_id_135dbf42_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_T3_vue_vue_type_template_id_135dbf42_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_T3_vue_vue_type_template_id_135dbf42_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./T3.vue?vue&type=template&id=135dbf42&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/T3.vue?vue&type=template&id=135dbf42&scoped=true");


/***/ })

}]);