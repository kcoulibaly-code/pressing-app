"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_offview_bank_afg_memo_demande_depassement_DADER1_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/demande_depassement/DADER1.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/demande_depassement/DADER1.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    dossier_credit: {
      type: Object,
      required: true
    }
  },
  data: function data() {
    return {
      tb15013_data: null
    };
  },
  mounted: function mounted() {
    var _this$dossier_credit;
    this.tb15013_data = (_this$dossier_credit = this.dossier_credit) === null || _this$dossier_credit === void 0 ? void 0 : _this$dossier_credit.cred_pub_tb_15013;
  },
  computed: {
    filteredEngagements: function filteredEngagements() {
      var _this$tb15013_data, _this$dossier_credit2;
      if (!((_this$tb15013_data = this.tb15013_data) !== null && _this$tb15013_data !== void 0 && (_this$tb15013_data = _this$tb15013_data.facilites_existante) !== null && _this$tb15013_data !== void 0 && _this$tb15013_data.length)) return [];
      var currentFiliale = (_this$dossier_credit2 = this.dossier_credit) === null || _this$dossier_credit2 === void 0 || (_this$dossier_credit2 = _this$dossier_credit2.caf_recorded_file) === null || _this$dossier_credit2 === void 0 ? void 0 : _this$dossier_credit2.filiale;
      return this.tb15013_data.facilites_existante.filter(function (engagement) {
        return engagement.filiale === currentFiliale;
      });
    },
    filteredRelations: function filteredRelations() {
      var _this$tb15013_data2, _this$dossier_credit3;
      if (!((_this$tb15013_data2 = this.tb15013_data) !== null && _this$tb15013_data2 !== void 0 && (_this$tb15013_data2 = _this$tb15013_data2.facilites_existante) !== null && _this$tb15013_data2 !== void 0 && _this$tb15013_data2.length)) return [];
      var currentFiliale = (_this$dossier_credit3 = this.dossier_credit) === null || _this$dossier_credit3 === void 0 || (_this$dossier_credit3 = _this$dossier_credit3.caf_recorded_file) === null || _this$dossier_credit3 === void 0 ? void 0 : _this$dossier_credit3.filiale;
      return this.tb15013_data.facilites_existante.filter(function (relation) {
        return relation.filiale !== currentFiliale;
      });
    },
    totalEngagements: function totalEngagements() {
      return this.filteredEngagements.reduce(function (totals, engagement) {
        totals.montantAutorise += Number(String(engagement.montant_credit).replace(/[^\d.-]/g, '')) || 0;
        totals.encours += Number(String(engagement.encours).replace(/[^\d.-]/g, '')) || 0;
        totals.impayes += Number(String(engagement.impaye).replace(/[^\d.-]/g, '')) || 0;
        return totals;
      }, {
        montantAutorise: 0,
        encours: 0,
        impayes: 0
      });
    },
    totalDemandes: function totalDemandes() {
      var _this$tb15013_data3;
      if (!((_this$tb15013_data3 = this.tb15013_data) !== null && _this$tb15013_data3 !== void 0 && (_this$tb15013_data3 = _this$tb15013_data3.facilites_sollicitees) !== null && _this$tb15013_data3 !== void 0 && _this$tb15013_data3.length)) {
        return {
          montantAutorise: 0,
          encoursAvant: 0,
          montantDemande: 0,
          encoursApres: 0
        };
      }
      return this.tb15013_data.facilites_sollicitees.reduce(function (totals, demande) {
        if (demande.isEditable) {
          totals.montantAutorise += Number(String(demande.montant_credit).replace(/[^\d.-]/g, '')) || 0;
          totals.encoursAvant += Number(String(demande.encours_avant).replace(/[^\d.-]/g, '')) || 0;
          totals.montantDemande += Number(String(demande.montant_demande).replace(/[^\d.-]/g, '')) || 0;
          totals.encoursApres += Number(String(demande.encours_apres).replace(/[^\d.-]/g, '')) || 0;
        }
        return totals;
      }, {
        montantAutorise: 0,
        encoursAvant: 0,
        montantDemande: 0,
        encoursApres: 0
      });
    },
    totalRelations: function totalRelations() {
      return this.filteredRelations.reduce(function (totals, relation) {
        totals.montantAutorise += Number(String(relation.montant_credit).replace(/[^\d.-]/g, '')) || 0;
        totals.encours += Number(String(relation.encours).replace(/[^\d.-]/g, '')) || 0;
        totals.impayes += Number(String(relation.impaye).replace(/[^\d.-]/g, '')) || 0;
        return totals;
      }, {
        montantAutorise: 0,
        encours: 0,
        impayes: 0
      });
    }
  },
  methods: {
    formatAmount: function formatAmount(x) {
      // 1. Nettoyer l'entrée (enlever espaces, virgules existantes)
      var cleaned = String(x).replace(/[^\d.-]/g, '');

      // 2. Convertir en nombre
      var num = parseFloat(cleaned) || 0;

      // 3. Formater avec la bonne regex
      return num.toString().replace(/\d+/g, function (m) {
        return m.replace(/(\d)(?=(\d{3})+$)/g, '$1 ');
      });
    },
    formatDate: function formatDate(date) {
      if (!date) return '';
      var options = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric'
      };
      return new Date(date).toLocaleDateString('fr', options);
    },
    getAssociatedGaranties: function getAssociatedGaranties(uuid) {
      var _this$tb15013_data4;
      if (!((_this$tb15013_data4 = this.tb15013_data) !== null && _this$tb15013_data4 !== void 0 && (_this$tb15013_data4 = _this$tb15013_data4.garanties_proposees) !== null && _this$tb15013_data4 !== void 0 && _this$tb15013_data4.length) || !uuid) {
        return [];
      }

      // Filtrer les garanties_proposees où l'UUID est présent dans ligne_associee
      return this.tb15013_data.garanties_proposees.filter(function (garantie) {
        return garantie.ligne_associee.includes(uuid);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/demande_depassement/DADER1.vue?vue&type=template&id=76feae7b&scoped=true":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/demande_depassement/DADER1.vue?vue&type=template&id=76feae7b&scoped=true ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm$dossier_credit, _vm$tb15013_data, _vm$filteredEngagemen, _vm$filteredRelations;
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "row"
  }, [(_vm$dossier_credit = _vm.dossier_credit) !== null && _vm$dossier_credit !== void 0 && (_vm$dossier_credit = _vm$dossier_credit.tbs_in_use) !== null && _vm$dossier_credit !== void 0 && _vm$dossier_credit.includes("tb15013") ? _c("div", [_c("div", {
    staticClass: "head-memorandum-title px-3 mb-2 mt-4"
  }, [_vm._v("\n      Présentation de la Demande\n    ")]), _vm._v(" "), _c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-bordered mb-2 mt-2"
  }, [_vm._m(0), _vm._v(" "), _c("tbody", [_vm._l((_vm$tb15013_data = _vm.tb15013_data) === null || _vm$tb15013_data === void 0 ? void 0 : _vm$tb15013_data.facilites_sollicitees, function (demande, index) {
    return [demande !== null && demande !== void 0 && demande.isEditable ? _c("tr", {
      key: index
    }, [_c("td", {
      "class": {
        "bg-red": demande.isEditable && demande.modifiedFields && demande.modifiedFields.includes("type_facilite")
      }
    }, [_vm._v("\n                        " + _vm._s(demande.type_facilite) + "\n                    ")]), _vm._v(" "), _c("td", {
      "class": {
        "bg-red": demande.isEditable && demande.modifiedFields && demande.modifiedFields.includes("montant_credit")
      }
    }, [_vm._v("\n                        " + _vm._s(_vm.formatAmount(demande.montant_credit)) + "\n                    ")]), _vm._v(" "), _c("td", {
      "class": {
        "bg-red": demande.isEditable && demande.modifiedFields && demande.modifiedFields.includes("encours_avant")
      }
    }, [_vm._v("\n                        " + _vm._s(_vm.formatAmount(demande.encours_avant)) + "\n                    ")]), _vm._v(" "), _c("td", {
      "class": {
        "bg-red": demande.isEditable && demande.modifiedFields && demande.modifiedFields.includes("montant_demande")
      }
    }, [_vm._v("\n                        " + _vm._s(_vm.formatAmount(demande.montant_demande)) + "\n                    ")]), _vm._v(" "), _c("td", {
      "class": {
        "bg-red": demande.isEditable && demande.modifiedFields && demande.modifiedFields.includes("encours_apres")
      }
    }, [_vm._v("\n                        " + _vm._s(_vm.formatAmount(demande.encours_apres)) + "\n                    ")])]) : _vm._e()];
  }), _vm._v(" "), _c("tr", {
    staticClass: "bg-grey"
  }, [_vm._m(1), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.formatAmount(_vm.totalDemandes.montantAutorise)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.formatAmount(_vm.totalDemandes.encoursAvant)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.formatAmount(_vm.totalDemandes.montantDemande)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.formatAmount(_vm.totalDemandes.encoursApres)))])])], 2)]), _vm._v(" "), _vm._m(2)]), _vm._v(" "), _c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-bordered mb-2 mt-2"
  }, [_vm._m(3), _vm._v(" "), _c("tbody", [_vm._l(_vm.filteredEngagements, function (engagement, index) {
    return _c("tr", {
      key: index
    }, [_c("td", [_vm._v(_vm._s(engagement.type_facilite))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.formatAmount(engagement.montant_credit)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.formatAmount(engagement.encours)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.formatDate(engagement.date_echeance)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.formatAmount(engagement.impaye)))]), _vm._v(" "), _c("td", {
      staticStyle: {
        padding: "0"
      },
      attrs: {
        colspan: "2"
      }
    }, [_c("table", {
      staticStyle: {
        width: "100%",
        "border-collapse": "collapse"
      }
    }, [_c("tbody", _vm._l(_vm.getAssociatedGaranties(engagement.uuid), function (garantie) {
      return _c("tr", {
        key: garantie.type.id
      }, [_c("td", {
        staticClass: "align-middle",
        staticStyle: {
          width: "50%",
          border: "none",
          padding: "8px",
          "border-bottom": "1px solid #dee2e6",
          left: "0"
        }
      }, [_vm._v("\n                            - " + _vm._s(garantie.type.libelle) + "\n                            ")]), _vm._v(" "), _c("td", {
        staticClass: "align-middle",
        "class": {
          "text-success": garantie.is_recueillie === "Oui",
          "text-danger": garantie.is_recueillie !== "Oui"
        },
        staticStyle: {
          width: "50%",
          border: "none",
          padding: "8px",
          "border-bottom": "1px solid #dee2e6"
        }
      }, [_vm._v("\n                            - " + _vm._s(garantie.is_recueillie === "Oui" ? "Recueillie" : "Non recueillie") + "\n                            ")])]);
    }), 0)])])]);
  }), _vm._v(" "), (_vm$filteredEngagemen = _vm.filteredEngagements) !== null && _vm$filteredEngagemen !== void 0 && _vm$filteredEngagemen.length ? _c("tr", {
    staticClass: "bg-grey"
  }, [_vm._m(4), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.formatAmount(_vm.totalEngagements.montantAutorise)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.formatAmount(_vm.totalEngagements.encours)))]), _vm._v(" "), _c("td", [_vm._v("-")]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.formatAmount(_vm.totalEngagements.impayes)))]), _vm._v(" "), _c("td", [_vm._v("-")]), _vm._v(" "), _c("td", [_vm._v("-")])]) : _vm._e()], 2)])]), _vm._v(" "), _c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-bordered mb-2 mt-2"
  }, [_vm._m(5), _vm._v(" "), _c("tbody", [_vm._l(_vm.filteredRelations, function (relation, index) {
    return _c("tr", {
      key: index
    }, [_c("td", [_vm._v(_vm._s(relation.filiale))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(relation.type_facilite))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.formatAmount(relation.montant_credit)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(Number(relation.encours)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.formatDate(relation.date_echeance)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.formatAmount(relation.impaye)))]), _vm._v(" "), _c("td", {
      staticStyle: {
        padding: "0"
      },
      attrs: {
        colspan: "2"
      }
    }, [_c("table", {
      staticStyle: {
        width: "100%",
        "border-collapse": "collapse"
      }
    }, [_c("tbody", _vm._l(_vm.getAssociatedGaranties(relation.uuid), function (garantie) {
      return _c("tr", {
        key: garantie.type.id
      }, [_c("td", {
        staticClass: "align-middle",
        staticStyle: {
          width: "50%",
          border: "none",
          padding: "8px",
          "border-bottom": "1px solid #dee2e6",
          left: "0"
        }
      }, [_vm._v("\n                            - " + _vm._s(garantie.type.libelle) + "\n                            ")]), _vm._v(" "), _c("td", {
        staticClass: "align-middle",
        "class": {
          "text-success": garantie.is_recueillie === "Oui",
          "text-danger": garantie.is_recueillie !== "Oui"
        },
        staticStyle: {
          width: "50%",
          border: "none",
          padding: "8px",
          "border-bottom": "1px solid #dee2e6"
        }
      }, [_vm._v("\n                            - " + _vm._s(garantie.is_recueillie === "Oui" ? "Recueillie" : "Non recueillie") + "\n                            ")])]);
    }), 0)])])]);
  }), _vm._v(" "), (_vm$filteredRelations = _vm.filteredRelations) !== null && _vm$filteredRelations !== void 0 && _vm$filteredRelations.length ? _c("tr", {
    staticClass: "bg-grey"
  }, [_vm._m(6), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.formatAmount(_vm.totalRelations.montantAutorise)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.formatAmount(_vm.totalRelations.encours)))]), _vm._v(" "), _c("td", [_vm._v("-")]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.formatAmount(_vm.totalRelations.impayes)))]), _vm._v(" "), _c("td", [_vm._v("-")]), _vm._v(" "), _c("td", [_vm._v("-")])]) : _vm._e()], 2)])]), _vm._v(" "), _c("hr")]) : _vm._e()]);
};
var staticRenderFns = [function () {
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
      colspan: "5",
      scope: "row"
    }
  }, [_vm._v("\n              Demande Sollicitée\n            ")])]), _vm._v(" "), _c("tr", [_c("th", [_vm._v("Nature")]), _vm._v(" "), _c("th", [_vm._v("Montant Autorisé")]), _vm._v(" "), _c("th", [_vm._v("Encours Avant")]), _vm._v(" "), _c("th", [_vm._v("Montant Demandé")]), _vm._v(" "), _c("th", [_vm._v("Encours Après")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", [_c("strong", [_vm._v("Total")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("small", {
    staticStyle: {
      color: "red"
    }
  }, [_c("i", [_vm._v("\n            Les libéllés en rouge sont ceux faissant l'objet de la demande exeptionnelle\n        ")])]);
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
      colspan: "7",
      scope: "row"
    }
  }, [_vm._v("\n              État des Engagements du Client à la Date de Demande [FIliale]\n            ")])]), _vm._v(" "), _c("tr", [_c("th", [_vm._v("Nature")]), _vm._v(" "), _c("th", [_vm._v("Montant Autorisé")]), _vm._v(" "), _c("th", [_vm._v("Encours")]), _vm._v(" "), _c("th", [_vm._v("Échéance")]), _vm._v(" "), _c("th", [_vm._v("Impayés")]), _vm._v(" "), _c("th", [_vm._v("Garanties")]), _vm._v(" "), _c("th", [_vm._v("Statut des Garanties")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", [_c("strong", [_vm._v("Total")])]);
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
      colspan: "8",
      scope: "row"
    }
  }, [_vm._v("\n              Relation dans la Holding\n            ")])]), _vm._v(" "), _c("tr", [_c("th", [_vm._v("Filiale")]), _vm._v(" "), _c("th", [_vm._v("Nature")]), _vm._v(" "), _c("th", [_vm._v("Montant Autorisé")]), _vm._v(" "), _c("th", [_vm._v("Encours")]), _vm._v(" "), _c("th", [_vm._v("Échéance")]), _vm._v(" "), _c("th", [_vm._v("Impayés")]), _vm._v(" "), _c("th", [_vm._v("Garanties")]), _vm._v(" "), _c("th", [_vm._v("Statut des Garanties")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {
    attrs: {
      colspan: "2"
    }
  }, [_c("strong", [_vm._v("Total")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/demande_depassement/DADER1.vue?vue&type=style&index=0&id=76feae7b&lang=css&scoped=true":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/demande_depassement/DADER1.vue?vue&type=style&index=0&id=76feae7b&lang=css&scoped=true ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.bg-grey[data-v-76feae7b] {\r\n  background-color: #f4f3f3;\r\n  font-weight: 600;\n}\r\n/* \r\n.head-memorandum-title {\r\n  margin-top: 15px;\r\n  padding: 16px;\r\n  color: #fff;\r\n  font-weight: bold;\r\n  background-color: #34495e;\r\n  border: 2px solid #575759;\r\n  box-shadow: 1px 3px 4px #ddd;\r\n  font-size: 16px;\r\n  text-align: center;\r\n  text-transform: uppercase;\r\n  border-radius: 10px;\r\n  margin-bottom: 15px;\r\n} */\n.head-memorandum-title[data-v-76feae7b] {\r\n\r\nfont-weight: bold;\r\ntext-transform: uppercase;\r\ntext-align: center;border: 1px solid;\r\npadding: 4px;\r\nmargin-top: 30px;\n}\n.table-responsive[data-v-76feae7b] {\r\n  overflow-x: auto;\n}\n.table[data-v-76feae7b] {\r\n  border-collapse: collapse;\r\n  width: 100%;\r\n  font-family: Arial, sans-serif;\r\n  font-size: 14px;\n}\n.table th[data-v-76feae7b],\r\n.table td[data-v-76feae7b] {\r\n  padding: 8px;\r\n  border: 1px solid #ddd;\r\n  text-align: center;\n}\n.table thead th[data-v-76feae7b] {\r\n  background-color: #e0e0e0;\r\n  font-weight: bold;\r\n  text-transform: uppercase;\n}\n.table tbody tr[data-v-76feae7b]:hover {\r\n  background-color: #f1f1f1;\n}\n.bg-red[data-v-76feae7b] {\r\n  background-color: #ffcccc; /* Rouge clair */\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/demande_depassement/DADER1.vue?vue&type=style&index=0&id=76feae7b&lang=css&scoped=true":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/demande_depassement/DADER1.vue?vue&type=style&index=0&id=76feae7b&lang=css&scoped=true ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DADER1_vue_vue_type_style_index_0_id_76feae7b_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DADER1.vue?vue&type=style&index=0&id=76feae7b&lang=css&scoped=true */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/demande_depassement/DADER1.vue?vue&type=style&index=0&id=76feae7b&lang=css&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DADER1_vue_vue_type_style_index_0_id_76feae7b_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DADER1_vue_vue_type_style_index_0_id_76feae7b_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/offview/bank/afg/memo/demande_depassement/DADER1.vue":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/offview/bank/afg/memo/demande_depassement/DADER1.vue ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DADER1_vue_vue_type_template_id_76feae7b_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DADER1.vue?vue&type=template&id=76feae7b&scoped=true */ "./resources/js/components/offview/bank/afg/memo/demande_depassement/DADER1.vue?vue&type=template&id=76feae7b&scoped=true");
/* harmony import */ var _DADER1_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DADER1.vue?vue&type=script&lang=js */ "./resources/js/components/offview/bank/afg/memo/demande_depassement/DADER1.vue?vue&type=script&lang=js");
/* harmony import */ var _DADER1_vue_vue_type_style_index_0_id_76feae7b_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DADER1.vue?vue&type=style&index=0&id=76feae7b&lang=css&scoped=true */ "./resources/js/components/offview/bank/afg/memo/demande_depassement/DADER1.vue?vue&type=style&index=0&id=76feae7b&lang=css&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _DADER1_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _DADER1_vue_vue_type_template_id_76feae7b_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _DADER1_vue_vue_type_template_id_76feae7b_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "76feae7b",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/offview/bank/afg/memo/demande_depassement/DADER1.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/offview/bank/afg/memo/demande_depassement/DADER1.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/components/offview/bank/afg/memo/demande_depassement/DADER1.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DADER1_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DADER1.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/demande_depassement/DADER1.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DADER1_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/offview/bank/afg/memo/demande_depassement/DADER1.vue?vue&type=style&index=0&id=76feae7b&lang=css&scoped=true":
/*!**********************************************************************************************************************************************!*\
  !*** ./resources/js/components/offview/bank/afg/memo/demande_depassement/DADER1.vue?vue&type=style&index=0&id=76feae7b&lang=css&scoped=true ***!
  \**********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DADER1_vue_vue_type_style_index_0_id_76feae7b_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DADER1.vue?vue&type=style&index=0&id=76feae7b&lang=css&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/demande_depassement/DADER1.vue?vue&type=style&index=0&id=76feae7b&lang=css&scoped=true");


/***/ }),

/***/ "./resources/js/components/offview/bank/afg/memo/demande_depassement/DADER1.vue?vue&type=template&id=76feae7b&scoped=true":
/*!********************************************************************************************************************************!*\
  !*** ./resources/js/components/offview/bank/afg/memo/demande_depassement/DADER1.vue?vue&type=template&id=76feae7b&scoped=true ***!
  \********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DADER1_vue_vue_type_template_id_76feae7b_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DADER1_vue_vue_type_template_id_76feae7b_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DADER1_vue_vue_type_template_id_76feae7b_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DADER1.vue?vue&type=template&id=76feae7b&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/demande_depassement/DADER1.vue?vue&type=template&id=76feae7b&scoped=true");


/***/ })

}]);