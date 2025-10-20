"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_offview_microfinance_cofina_memo_retailbf_TRBF6_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/microfinance/cofina/memo/retailbf/TRBF6.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/microfinance/cofina/memo/retailbf/TRBF6.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    dossier_credit: Object
  },
  methods: {
    colorHead: function colorHead(key) {
      if (key == 0 || key == 4 || key == 7) {
        return 'bg-grey';
      } else if (key == 14 || key == 19 || key == 22) {
        return 'bg-rose';
      }
    },
    colorTd: function colorTd(key) {
      if (key !== 0 && key !== 4 && key !== 7 && key !== 14 && key !== 19 && key !== 22) {
        return 'normal';
      }
    },
    colorTd2: function colorTd2(key) {
      if (key !== 0 && key !== 4 && key !== 9 && key !== 13 && key !== 15) {
        return 'normal';
      }
    },
    disabledHead: function disabledHead(key) {
      return key == 0 || key == 4 || key == 7 || key == 14 || key == 19 || key == 22;
    },
    disabledHead2: function disabledHead2(key) {
      return key == 0 || key == 4 || key == 9 || key == 13 || key == 15;
    },
    colorHead2: function colorHead2(key) {
      if (key == 0 || key == 4) {
        return 'bg-grey';
      } else if (key == 9 || key == 13 || key == 15) {
        return 'bg-rose';
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/microfinance/cofina/memo/retailbf/TRBF6.vue?vue&type=template&id=33290852&scoped=true":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/microfinance/cofina/memo/retailbf/TRBF6.vue?vue&type=template&id=33290852&scoped=true ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm$dossier_credit, _vm$dossier_credit2, _vm$dossier_credit3, _vm$dossier_credit4, _vm$dossier_credit5, _vm$dossier_credit6, _vm$dossier_credit7, _vm$dossier_credit8, _vm$dossier_credit9, _vm$dossier_credit0, _vm$dossier_credit1, _vm$dossier_credit10, _vm$dossier_credit11, _vm$dossier_credit12, _vm$dossier_credit13, _vm$dossier_credit14, _vm$dossier_credit15, _vm$dossier_credit16, _vm$dossier_credit17, _vm$dossier_credit18;
  var _vm = this,
    _c = _vm._self._c;
  return (_vm$dossier_credit = _vm.dossier_credit) !== null && _vm$dossier_credit !== void 0 && _vm$dossier_credit.cred_pub_tb_16106 ? _c("div", {}, [_c("div", {
    staticClass: "row justify-content-center"
  }, [_c("div", {
    staticClass: "row table-responsive mb-3"
  }, [_c("div", {
    staticClass: "head-memorandum-title mb-4",
    staticStyle: {
      "text-align": "center"
    }
  }, [_vm._v("\n                BILAN\n            ")]), _vm._v(" "), _c("table", {
    staticClass: "table table-bordered mb-3 mb-2"
  }, [_c("thead", {
    staticClass: "bg-ed-primary"
  }, [_vm._m(0), _vm._v(" "), _c("tr", {
    staticClass: "fw-bold",
    staticStyle: {
      "font-size": "0.8rem"
    }
  }, [_c("td", {
    staticClass: "bg-orange"
  }), _vm._v(" "), _c("td", [_vm._v("Courrant - 2 " + _vm._s(_vm._f("formatDate")((_vm$dossier_credit2 = _vm.dossier_credit) === null || _vm$dossier_credit2 === void 0 || (_vm$dossier_credit2 = _vm$dossier_credit2.cred_pub_tb_16106) === null || _vm$dossier_credit2 === void 0 ? void 0 : _vm$dossier_credit2.date_c2)))]), _vm._v(" "), _c("td", [_vm._v("%")]), _vm._v(" "), _c("td", [_vm._v("Courrant - 1 " + _vm._s(_vm._f("formatDate")((_vm$dossier_credit3 = _vm.dossier_credit) === null || _vm$dossier_credit3 === void 0 || (_vm$dossier_credit3 = _vm$dossier_credit3.cred_pub_tb_16106) === null || _vm$dossier_credit3 === void 0 ? void 0 : _vm$dossier_credit3.date_c1)))]), _vm._v(" "), _c("td", [_vm._v("%")]), _vm._v(" "), _c("td", [_vm._v("Courant " + _vm._s(_vm._f("formatDate")((_vm$dossier_credit4 = _vm.dossier_credit) === null || _vm$dossier_credit4 === void 0 || (_vm$dossier_credit4 = _vm$dossier_credit4.cred_pub_tb_16106) === null || _vm$dossier_credit4 === void 0 ? void 0 : _vm$dossier_credit4.date_c)) + "\n                        ")]), _vm._v(" "), _c("td", [_vm._v("%")])])]), _vm._v(" "), _c("tbody", _vm._l((_vm$dossier_credit5 = _vm.dossier_credit) === null || _vm$dossier_credit5 === void 0 || (_vm$dossier_credit5 = _vm$dossier_credit5.cred_pub_tb_16106) === null || _vm$dossier_credit5 === void 0 ? void 0 : _vm$dossier_credit5.actifs, function (element, key) {
    return _c("tr", {
      key: key
    }, [_c("td", {
      "class": _vm.colorHead(key),
      staticStyle: {
        "font-size": "0.8rem"
      },
      style: {
        "font-weight": _vm.colorTd(key)
      }
    }, [_vm._v("\n                            " + _vm._s(element.label))]), _vm._v(" "), _c("td", {
      "class": _vm.colorHead(key)
    }, [_vm._v(_vm._s(element.montant_c2))]), _vm._v(" "), _c("td", {
      "class": _vm.colorHead(key)
    }, [_vm._v(_vm._s(_vm._f("formatNumber")(element.pourcent_c2)))]), _vm._v(" "), _c("td", {
      staticClass: "col-2",
      "class": _vm.colorHead(key)
    }, [_vm._v(_vm._s(element.montant_c1))]), _vm._v(" "), _c("td", {
      "class": _vm.colorHead(key)
    }, [_vm._v(_vm._s(_vm._f("formatNumber")(element.pourcent_c1)))]), _vm._v(" "), _c("td", {
      "class": _vm.colorHead(key)
    }, [_vm._v(_vm._s(_vm._f("formatNumber")(element.montant_c)))]), _vm._v(" "), _c("td", {
      "class": _vm.colorHead(key)
    }, [_vm._v(_vm._s(_vm._f("formatNumber")(element.pourcent_c)))])]);
  }), 0)]), _vm._v(" "), _c("table", {
    staticClass: "table table-bordered mb-3 mb-2"
  }, [_c("thead", {
    staticClass: "bg-ed-primary"
  }, [_vm._m(1), _vm._v(" "), _c("tr", {
    staticClass: "fw-bold",
    staticStyle: {
      "font-size": "0.8rem"
    }
  }, [_c("td", {
    staticClass: "bg-orange"
  }), _vm._v(" "), _c("td", [_vm._v("Courrant - 2 " + _vm._s(_vm._f("formatDate")((_vm$dossier_credit6 = _vm.dossier_credit) === null || _vm$dossier_credit6 === void 0 || (_vm$dossier_credit6 = _vm$dossier_credit6.cred_pub_tb_16106) === null || _vm$dossier_credit6 === void 0 ? void 0 : _vm$dossier_credit6.date_c2)))]), _vm._v(" "), _c("td", [_vm._v("%")]), _vm._v(" "), _c("td", [_vm._v("Courrant - 1 " + _vm._s(_vm._f("formatDate")((_vm$dossier_credit7 = _vm.dossier_credit) === null || _vm$dossier_credit7 === void 0 || (_vm$dossier_credit7 = _vm$dossier_credit7.cred_pub_tb_16106) === null || _vm$dossier_credit7 === void 0 ? void 0 : _vm$dossier_credit7.date_c1)))]), _vm._v(" "), _c("td", [_vm._v("%")]), _vm._v(" "), _c("td", [_vm._v("Courant " + _vm._s(_vm._f("formatDate")((_vm$dossier_credit8 = _vm.dossier_credit) === null || _vm$dossier_credit8 === void 0 || (_vm$dossier_credit8 = _vm$dossier_credit8.cred_pub_tb_16106) === null || _vm$dossier_credit8 === void 0 ? void 0 : _vm$dossier_credit8.date_c)) + "\n                        ")]), _vm._v(" "), _c("td", [_vm._v("%")])])]), _vm._v(" "), _c("tbody", _vm._l((_vm$dossier_credit9 = _vm.dossier_credit) === null || _vm$dossier_credit9 === void 0 || (_vm$dossier_credit9 = _vm$dossier_credit9.cred_pub_tb_16106) === null || _vm$dossier_credit9 === void 0 ? void 0 : _vm$dossier_credit9.passifs, function (element, key) {
    return _c("tr", {
      key: key
    }, [_c("td", {
      "class": _vm.colorHead2(key),
      staticStyle: {
        "font-size": "0.8rem"
      },
      style: {
        "font-weight": _vm.colorTd2(key)
      }
    }, [_vm._v(_vm._s(element.label))]), _vm._v(" "), _c("td", {
      "class": _vm.colorHead2(key)
    }, [_vm._v(_vm._s(element.montant_c2))]), _vm._v(" "), _c("td", {
      "class": _vm.colorHead2(key)
    }, [_vm._v(_vm._s(_vm._f("formatNumber")(element.pourcent_c2)))]), _vm._v(" "), _c("td", {
      "class": _vm.colorHead2(key)
    }, [_vm._v(_vm._s(element.montant_c1))]), _vm._v(" "), _c("td", {
      "class": _vm.colorHead2(key)
    }, [_vm._v(_vm._s(_vm._f("formatNumber")(element.pourcent_c1)))]), _vm._v(" "), _c("td", {
      "class": _vm.colorHead2(key)
    }, [_vm._v(_vm._s(_vm._f("formatNumber")(element.montant_c)))]), _vm._v(" "), _c("td", {
      "class": _vm.colorHead2(key)
    }, [_vm._v(_vm._s(_vm._f("formatNumber")(element.pourcent_c)))])]);
  }), 0)]), _vm._v(" "), _c("br"), _vm._v(" "), _c("table", {
    staticClass: "table table-bordered mb-2 mt-2"
  }, [_vm._m(2), _vm._v(" "), _c("tbody", [_c("tr", [_c("td", [_c("span", {
    domProps: {
      innerHTML: _vm._s((_vm$dossier_credit0 = _vm.dossier_credit) === null || _vm$dossier_credit0 === void 0 || (_vm$dossier_credit0 = _vm$dossier_credit0.cred_pub_tb_16106) === null || _vm$dossier_credit0 === void 0 ? void 0 : _vm$dossier_credit0.commentaire_bilan)
    }
  })])])])]), _vm._v(" "), _c("br"), _vm._v(" "), _c("table", {
    staticClass: "table table-bordered mb-3 mb-2"
  }, [_vm._m(3), _vm._v(" "), _c("tbody", [_c("tr", [_c("td", {
    staticClass: "col-3 bg-grey"
  }, [_vm._v("En espèces")]), _vm._v(" "), _c("td", {
    staticClass: "col-9"
  }, [_vm._v("\n                            " + _vm._s((_vm$dossier_credit1 = _vm.dossier_credit) === null || _vm$dossier_credit1 === void 0 || (_vm$dossier_credit1 = _vm$dossier_credit1.cred_pub_tb_16106) === null || _vm$dossier_credit1 === void 0 ? void 0 : _vm$dossier_credit1.commentaire_en_espece) + "\n                        ")])]), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "col-3 bg-grey"
  }, [_vm._v("Créances et acompte")]), _vm._v(" "), _c("td", {
    staticClass: "col-9"
  }, [_vm._v("\n                            " + _vm._s((_vm$dossier_credit10 = _vm.dossier_credit) === null || _vm$dossier_credit10 === void 0 || (_vm$dossier_credit10 = _vm$dossier_credit10.cred_pub_tb_16106) === null || _vm$dossier_credit10 === void 0 ? void 0 : _vm$dossier_credit10.commentaire_creances) + "\n                        ")])]), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "col-3 bg-grey"
  }, [_vm._v("Stock")]), _vm._v(" "), _c("td", {
    staticClass: "col-9"
  }, [_vm._v("\n                            " + _vm._s((_vm$dossier_credit11 = _vm.dossier_credit) === null || _vm$dossier_credit11 === void 0 || (_vm$dossier_credit11 = _vm$dossier_credit11.cred_pub_tb_16106) === null || _vm$dossier_credit11 === void 0 ? void 0 : _vm$dossier_credit11.commentaire_inventaire) + "\n                        ")])]), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "col-3 bg-grey"
  }, [_vm._v("Véhicules")]), _vm._v(" "), _c("td", {
    staticClass: "col-9"
  }, [_vm._v("\n                            " + _vm._s((_vm$dossier_credit12 = _vm.dossier_credit) === null || _vm$dossier_credit12 === void 0 || (_vm$dossier_credit12 = _vm$dossier_credit12.cred_pub_tb_16106) === null || _vm$dossier_credit12 === void 0 ? void 0 : _vm$dossier_credit12.commentaire_vehicules) + "\n                        ")])]), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "col-3 bg-grey"
  }, [_vm._v("Équipement")]), _vm._v(" "), _c("td", {
    staticClass: "col-9"
  }, [_vm._v("\n                            " + _vm._s((_vm$dossier_credit13 = _vm.dossier_credit) === null || _vm$dossier_credit13 === void 0 || (_vm$dossier_credit13 = _vm$dossier_credit13.cred_pub_tb_16106) === null || _vm$dossier_credit13 === void 0 ? void 0 : _vm$dossier_credit13.commentaire_equipement) + "\n                        ")])]), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "col-3 bg-grey"
  }, [_vm._v("Locaux")]), _vm._v(" "), _c("td", {
    staticClass: "col-9"
  }, [_vm._v("\n                            " + _vm._s((_vm$dossier_credit14 = _vm.dossier_credit) === null || _vm$dossier_credit14 === void 0 || (_vm$dossier_credit14 = _vm$dossier_credit14.cred_pub_tb_16106) === null || _vm$dossier_credit14 === void 0 ? void 0 : _vm$dossier_credit14.commentaire_locaux) + "\n                        ")])]), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "col-3 bg-grey"
  }, [_vm._v("Passifs opérationnels (dettes fournisseurs, les avances reçues des clients)")]), _vm._v(" "), _c("td", {
    staticClass: "col-9"
  }, [_vm._v("\n                            " + _vm._s((_vm$dossier_credit15 = _vm.dossier_credit) === null || _vm$dossier_credit15 === void 0 || (_vm$dossier_credit15 = _vm$dossier_credit15.cred_pub_tb_16106) === null || _vm$dossier_credit15 === void 0 ? void 0 : _vm$dossier_credit15.commentaire_passif_operationnel) + "\n                        ")])]), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "col-3 bg-grey"
  }, [_vm._v("Passifs financiers ( Cofina )")]), _vm._v(" "), _c("td", {
    staticClass: "col-9"
  }, [_vm._v("\n                            " + _vm._s((_vm$dossier_credit16 = _vm.dossier_credit) === null || _vm$dossier_credit16 === void 0 || (_vm$dossier_credit16 = _vm$dossier_credit16.cred_pub_tb_16106) === null || _vm$dossier_credit16 === void 0 ? void 0 : _vm$dossier_credit16.commentaire_passif_financier_cofina) + "\n                        ")])]), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "col-3 bg-grey"
  }, [_vm._v("Passifs financiers (autres banques)")]), _vm._v(" "), _c("td", {
    staticClass: "col-9"
  }, [_vm._v("\n                            " + _vm._s((_vm$dossier_credit17 = _vm.dossier_credit) === null || _vm$dossier_credit17 === void 0 || (_vm$dossier_credit17 = _vm$dossier_credit17.cred_pub_tb_16106) === null || _vm$dossier_credit17 === void 0 ? void 0 : _vm$dossier_credit17.commentaire_passif_financier_autre) + "\n                        ")])])])]), _vm._v(" "), _c("br"), _vm._v(" "), _c("table", {
    staticClass: "table table-bordered mb-3 mb-2"
  }, [_vm._m(4), _vm._v(" "), _c("tbody", _vm._l((_vm$dossier_credit18 = _vm.dossier_credit) === null || _vm$dossier_credit18 === void 0 || (_vm$dossier_credit18 = _vm$dossier_credit18.cred_pub_tb_16106) === null || _vm$dossier_credit18 === void 0 ? void 0 : _vm$dossier_credit18.qualite_donnee_financieres, function (qualite_donnee_financiere, index) {
    return _c("tr", {
      key: index
    }, [_c("td", {
      staticClass: "col-6"
    }, [_vm._v(_vm._s(qualite_donnee_financiere.libelle_infos))]), _vm._v(" "), _c("td", {
      staticClass: "col-6"
    }, [_vm._v(_vm._s(qualite_donnee_financiere.valeur_infos))])]);
  }), 0)])]), _vm._v(" "), _c("br")])]) : _vm._e();
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("tr", {
    staticClass: "bg-grey"
  }, [_c("th", {
    staticStyle: {
      "text-align": "center"
    },
    attrs: {
      colspan: "7"
    }
  }, [_vm._v("ACTIF")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("tr", {
    staticClass: "bg-grey"
  }, [_c("th", {
    staticStyle: {
      "text-align": "center"
    },
    attrs: {
      colspan: "7"
    }
  }, [_vm._v("PASSIF")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", {
    staticClass: "bg-ed-primary"
  }, [_c("tr", [_c("th", {
    staticClass: "bg-grey",
    staticStyle: {
      "text-align": "center"
    },
    attrs: {
      colspan: "",
      scope: "row"
    }
  }, [_vm._v("Commentaire sur le\n                            bilan")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", {
    staticClass: "bg-ed-primary"
  }, [_c("tr", {
    staticClass: "bg-grey"
  }, [_c("th", {
    staticStyle: {
      "text-align": "center"
    },
    attrs: {
      colspan: "7"
    }
  }, [_vm._v("COMMENTAIRE SUR LE CALCUL")])]), _vm._v(" "), _c("tr", [_c("th", {
    attrs: {
      colspan: "7"
    }
  }, [_c("b", {
    staticClass: "py-3",
    staticStyle: {
      "font-size": "0.8rem"
    }
  }, [_vm._v("Commentaires sur le calcul/comment la position\n                                a-t-elle été vérifiée/changements par rapport à l'analyse précédente\n                            ")])])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", {
    staticClass: "bg-ed-primary"
  }, [_c("tr", {
    staticClass: "bg-grey"
  }, [_c("th", {
    staticStyle: {
      "text-align": "center"
    },
    attrs: {
      colspan: "7"
    }
  }, [_vm._v("QUALITE DES DONNEES FINANCIERES")])])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/microfinance/cofina/memo/retailbf/TRBF6.vue?vue&type=style&index=0&id=33290852&lang=css&scoped=true":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/microfinance/cofina/memo/retailbf/TRBF6.vue?vue&type=style&index=0&id=33290852&lang=css&scoped=true ***!
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
___CSS_LOADER_EXPORT___.push([module.id, "\r\n/* .bg-grey{\r\n      background-color:#7f8c8d;\r\n      color:white;\r\n      width: 35%;\r\n\r\n  } */\n.memo[data-v-33290852] {\r\n    margin-top: 10px;\r\n    padding: 10px;\r\n    border: 2px solid #fff;\r\n    font-weight: 550;\r\n    font-size: 16px;\r\n    text-align: left;\r\n    text-transform: uppercase;\r\n    background-color: #34495e;\r\n    color: #fff;\n}\nth[data-v-33290852] {\r\n    background: #f4f3f3 !important;\n}\n.bg-grey[data-v-33290852] {\r\n    background-color: #f4f3f3;\r\n    /*width: 32%;*/\n}\ninput[type=checkbox][data-v-33290852] {\r\n    /* Double-sized Checkboxes */\r\n    /* IE */\r\n    /* FF */\r\n    /* Safari and Chrome */\r\n    /* Opera */\r\n    transform: scale(2);\r\n    padding: 10px;\n}\n.head-memorandum-title[data-v-33290852] {\r\n    margin-top: 15px;\r\n    padding: 16px;\r\n    color: #fff;\r\n    font-weight: bold;\r\n    background-color: #34495e;\r\n    border: 2px solid #575759;\r\n    box-shadow: 1px 3px 4px #ddd;\r\n    font-size: 16px;\r\n    text-align: center;\r\n    text-transform: uppercase;\r\n    border-radius: 10px;\r\n    margin-bottom: 15px;\n}\n.checkboxtext[data-v-33290852] {\r\n    /* Checkbox text */\r\n    font-size: 110%;\r\n    display: inline;\n}\n.bg-rose[data-v-33290852] {\r\n    background-color: #FDEDEDFF;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/microfinance/cofina/memo/retailbf/TRBF6.vue?vue&type=style&index=0&id=33290852&lang=css&scoped=true":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/microfinance/cofina/memo/retailbf/TRBF6.vue?vue&type=style&index=0&id=33290852&lang=css&scoped=true ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TRBF6_vue_vue_type_style_index_0_id_33290852_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TRBF6.vue?vue&type=style&index=0&id=33290852&lang=css&scoped=true */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/microfinance/cofina/memo/retailbf/TRBF6.vue?vue&type=style&index=0&id=33290852&lang=css&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TRBF6_vue_vue_type_style_index_0_id_33290852_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TRBF6_vue_vue_type_style_index_0_id_33290852_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/offview/microfinance/cofina/memo/retailbf/TRBF6.vue":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/offview/microfinance/cofina/memo/retailbf/TRBF6.vue ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TRBF6_vue_vue_type_template_id_33290852_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TRBF6.vue?vue&type=template&id=33290852&scoped=true */ "./resources/js/components/offview/microfinance/cofina/memo/retailbf/TRBF6.vue?vue&type=template&id=33290852&scoped=true");
/* harmony import */ var _TRBF6_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TRBF6.vue?vue&type=script&lang=js */ "./resources/js/components/offview/microfinance/cofina/memo/retailbf/TRBF6.vue?vue&type=script&lang=js");
/* harmony import */ var _TRBF6_vue_vue_type_style_index_0_id_33290852_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TRBF6.vue?vue&type=style&index=0&id=33290852&lang=css&scoped=true */ "./resources/js/components/offview/microfinance/cofina/memo/retailbf/TRBF6.vue?vue&type=style&index=0&id=33290852&lang=css&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _TRBF6_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _TRBF6_vue_vue_type_template_id_33290852_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _TRBF6_vue_vue_type_template_id_33290852_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "33290852",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/offview/microfinance/cofina/memo/retailbf/TRBF6.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/offview/microfinance/cofina/memo/retailbf/TRBF6.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/components/offview/microfinance/cofina/memo/retailbf/TRBF6.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TRBF6_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TRBF6.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/microfinance/cofina/memo/retailbf/TRBF6.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TRBF6_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/offview/microfinance/cofina/memo/retailbf/TRBF6.vue?vue&type=style&index=0&id=33290852&lang=css&scoped=true":
/*!*********************************************************************************************************************************************!*\
  !*** ./resources/js/components/offview/microfinance/cofina/memo/retailbf/TRBF6.vue?vue&type=style&index=0&id=33290852&lang=css&scoped=true ***!
  \*********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TRBF6_vue_vue_type_style_index_0_id_33290852_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TRBF6.vue?vue&type=style&index=0&id=33290852&lang=css&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/microfinance/cofina/memo/retailbf/TRBF6.vue?vue&type=style&index=0&id=33290852&lang=css&scoped=true");


/***/ }),

/***/ "./resources/js/components/offview/microfinance/cofina/memo/retailbf/TRBF6.vue?vue&type=template&id=33290852&scoped=true":
/*!*******************************************************************************************************************************!*\
  !*** ./resources/js/components/offview/microfinance/cofina/memo/retailbf/TRBF6.vue?vue&type=template&id=33290852&scoped=true ***!
  \*******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TRBF6_vue_vue_type_template_id_33290852_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TRBF6_vue_vue_type_template_id_33290852_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TRBF6_vue_vue_type_template_id_33290852_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TRBF6.vue?vue&type=template&id=33290852&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/microfinance/cofina/memo/retailbf/TRBF6.vue?vue&type=template&id=33290852&scoped=true");


/***/ })

}]);