"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_offview_bank_afg_memo_memorandum_revue_prorogation_RAPA4_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/memorandum_revue_prorogation/RAPA4.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/memorandum_revue_prorogation/RAPA4.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_afg_f8_data_extractor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../services/afg/f8-data-extractor */ "./resources/js/services/afg/f8-data-extractor.js");
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    dossier_credit: Object
  },
  mounted: function mounted() {
    var _this$dossier_credit;
    var cred_pub_keys = this.determineCredPubTables((_this$dossier_credit = this.dossier_credit) === null || _this$dossier_credit === void 0 ? void 0 : _this$dossier_credit.applied_templ_name);
    this.f8Data = this.f8DataExtractor.getData(this.dossier_credit, 'cred_pub_tb_15105');
    this.reformatOldLinesAndGaranties();
    this.reformatNewLinesAndGaranties();
  },
  computed: {
    doss: function doss() {
      var _this$dossier_credit2;
      return (_this$dossier_credit2 = this.dossier_credit) === null || _this$dossier_credit2 === void 0 ? void 0 : _this$dossier_credit2.cred_pub_tb_13.benefices_pertes;
    },
    montant_depot_garantie: function montant_depot_garantie() {
      var _this$dossier_credit$;
      if ((_this$dossier_credit$ = this.dossier_credit.cred_pub_tb_1) !== null && _this$dossier_credit$ !== void 0 && _this$dossier_credit$.garantie) {
        return Number(this.dossier_credit.cred_pub_tb_1.garantie + this.dossier_credit.cred_pub_tb_1.montant_crsd);
      }
      return 0;
    },
    allSuretes: function allSuretes() {
      var _this$f8Data, _this$f8Data2;
      return (_this$f8Data = this.f8Data) === null || _this$f8Data === void 0 || (_this$f8Data = _this$f8Data.suretes_diverses) === null || _this$f8Data === void 0 ? void 0 : _this$f8Data.concat((_this$f8Data2 = this.f8Data) === null || _this$f8Data2 === void 0 ? void 0 : _this$f8Data2.autres_suretes_diverses);
    },
    // Calcul des totaux pour les lignes de caisse
    totalCaisse: function totalCaisse() {
      var _this$mergedTableData;
      if (!((_this$mergedTableData = this.mergedTableData) !== null && _this$mergedTableData !== void 0 && _this$mergedTableData.caisse)) {
        return {
          autorisation: 0,
          encours: 0,
          montant: 0,
          proposition: 0
        };
      }
      return {
        autorisation: this.mergedTableData.caisse.reduce(function (sum, line) {
          return sum + parseFloat((line.autorisation || "0").replace(/\s/g, ''));
        }, 0),
        encours: this.mergedTableData.caisse.reduce(function (sum, line) {
          return sum + parseFloat((line.encours || "0").replace(/\s/g, ''));
        }, 0),
        montant: this.mergedTableData.caisse.reduce(function (sum, line) {
          return sum + parseFloat((line.montant || "0").replace(/\s/g, ''));
        }, 0),
        proposition: this.mergedTableData.caisse.reduce(function (sum, line) {
          return sum + parseFloat((line.proposition || "0").replace(/\s/g, ''));
        }, 0)
      };
    },
    // Calcul des totaux pour les lignes de signature
    totalSignature: function totalSignature() {
      var _this$mergedTableData2;
      if (!((_this$mergedTableData2 = this.mergedTableData) !== null && _this$mergedTableData2 !== void 0 && _this$mergedTableData2.signature)) {
        return {
          autorisation: 0,
          encours: 0,
          montant: 0,
          proposition: 0
        };
      }
      return {
        autorisation: this.mergedTableData.signature.reduce(function (sum, line) {
          return sum + parseFloat((line.autorisation || "0").replace(/\s/g, ''));
        }, 0),
        encours: this.mergedTableData.signature.reduce(function (sum, line) {
          return sum + parseFloat((line.encours || "0").replace(/\s/g, ''));
        }, 0),
        montant: this.mergedTableData.signature.reduce(function (sum, line) {
          return sum + parseFloat((line.montant || "0").replace(/\s/g, ''));
        }, 0),
        proposition: this.mergedTableData.signature.reduce(function (sum, line) {
          return sum + parseFloat((line.proposition || "0").replace(/\s/g, ''));
        }, 0)
      };
    },
    // Calcul des totaux globaux
    totalGlobal: function totalGlobal() {
      return {
        autorisation: this.totalCaisse.autorisation + this.totalSignature.autorisation,
        encours: this.totalCaisse.encours + this.totalSignature.encours,
        montant: this.totalCaisse.montant + this.totalSignature.montant,
        proposition: this.totalCaisse.proposition + this.totalSignature.proposition
      };
    }
  },
  data: function data() {
    return {
      f8DataExtractor: _services_afg_f8_data_extractor__WEBPACK_IMPORTED_MODULE_0__["default"],
      f8Data: null,
      regroupNewLignes: [],
      regroupOldLignes: [],
      mergedTableData: [],
      loading: true
    };
  },
  methods: _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({
    getStatusLabel: function getStatusLabel(line) {
      var status = line === null || line === void 0 ? void 0 : line.statut;
      if (status == 'Renouvellement') {
        if (line.type === "RI") return "Renouvellement à l'identique";
        if (line.type === "RH") return "Renouvellement à la hausse";
        if (line.type === "RB") return "Renouvellement à la baisse";
      }
      return status;
    },
    generate: function generate() {
      var _this = this;
      var options = {
        margin: [1, 1],
        filename: this.title + ".pdf",
        html2canvas: {
          dpi: 75,
          scale: 2,
          letterRendering: true
        },
        pagebreak: {
          mode: ["avoid-all", "css", "legacy"]
        },
        jsPDF: {
          orientation: "portrait",
          unit: "mm",
          format: "a4"
        }
      };
      html2pdf().from(this.$refs.content).set(options).save().then(function () {
        _this.$toasted.show("Fichier Téléchargé avec succès");
      });
    },
    checkIfEmpty: function checkIfEmpty() {
      if (this.dossier_credit.tbs_in_use.length > 0) {
        this.seeContent = true;
      } else {
        this.$toasted.show('Ce dossier crédit est vide');
      }
    },
    formatAmount: function formatAmount(x) {
      return x === null || x === void 0 ? void 0 : x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    },
    alignCredLigne: function alignCredLigne() {
      if (this.dossier_credit != null) {
        if (this.dossier_credit.tbs_in_use.includes('tb8')) {
          this.tb_34 = this.f8Data;
          this.smiterateLignes = Math.min(this.tb_34.lignes_existantes.length, this.tb_34.nouvelles_lignes.length);
          this.iterateLignes = Math.max(this.tb_34.lignes_existantes.length, this.tb_34.nouvelles_lignes.length);
        }
      }
    },
    formatDate: function formatDate(date) {
      if (['', null, undefined].includes(date)) return '';
      var options = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric'
      };
      return new Date(date).toLocaleDateString('fr', options);
    },
    loadIndex: function loadIndex(index, a) {
      if (a === 0) {
        if (this.tb_34.lignes_existantes.length > index) {
          return true;
        }
        return false;
      } else if (a === 1) {
        if (this.tb_34.nouvelles_lignes.length > index) {
          return true;
        }
        return false;
      } else if (a === 2) {
        if (this.tb_34.cautions_lignes_existantes.length > index) {
          return true;
        }
        return false;
      } else {
        if (this.tb_34.cautions_nouvelles_lignes.length > index) {
          return true;
        }
        return false;
      }
    }
  }, "formatDate", function formatDate(date) {
    if (['', null, undefined].includes(date)) return '';
    var options = {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric'
    };
    return new Date(date).toLocaleDateString('fr', options);
  }), "styleDoc", function styleDoc() {
    if (this.offBankList.includes(this.doc_tobe_produced)) {
      this.isDoc = true;
    }
  }), "launchCompilerT0", function launchCompilerT0() {
    this.$emit("value-updatedT1");
  }), "reformatOldLinesAndGaranties", function reformatOldLinesAndGaranties() {
    var _this$f8Data3,
      _this2 = this;
    this.loading = true;
    if (!['', null, undefined].includes((_this$f8Data3 = this.f8Data) === null || _this$f8Data3 === void 0 ? void 0 : _this$f8Data3.oldLines)) {
      var _this$f8Data4, _this$f8Data5;
      (_this$f8Data4 = this.f8Data) === null || _this$f8Data4 === void 0 || (_this$f8Data4 = _this$f8Data4.oldLines) === null || _this$f8Data4 === void 0 || _this$f8Data4.forEach(function (oldLine) {
        var _this2$f8Data;
        var ids = ((_this2$f8Data = _this2.f8Data) === null || _this2$f8Data === void 0 || (_this2$f8Data = _this2$f8Data.oldLinesgarantiesGenerales) === null || _this2$f8Data === void 0 || (_this2$f8Data = _this2$f8Data.filter(function (oldLinesgarantie) {
          return (oldLinesgarantie === null || oldLinesgarantie === void 0 ? void 0 : oldLinesgarantie.parentId.includes(oldLine.id)) && !["", null, undefined].includes(oldLinesgarantie.name_garantie);
        })) === null || _this2$f8Data === void 0 ? void 0 : _this2$f8Data.map(function (oldLinesgarantie) {
          return oldLinesgarantie.id;
        })) || [];
        oldLine["garanties_general_id"] = ids;
      });
      this.groupOldLinesByGaranties((_this$f8Data5 = this.f8Data) === null || _this$f8Data5 === void 0 ? void 0 : _this$f8Data5.oldLines);
    }
  }), "reformatNewLinesAndGaranties", function reformatNewLinesAndGaranties() {
    var _this$f8Data6,
      _this3 = this;
    this.loading = true;
    if (!['', null, undefined].includes((_this$f8Data6 = this.f8Data) === null || _this$f8Data6 === void 0 ? void 0 : _this$f8Data6.newLines)) {
      var _this$f8Data7, _this$f8Data8;
      (_this$f8Data7 = this.f8Data) === null || _this$f8Data7 === void 0 || (_this$f8Data7 = _this$f8Data7.newLines) === null || _this$f8Data7 === void 0 || _this$f8Data7.forEach(function (newLine) {
        var _this3$f8Data;
        var new_ids = ((_this3$f8Data = _this3.f8Data) === null || _this3$f8Data === void 0 || (_this3$f8Data = _this3$f8Data.newLinesgarantiesGenerales) === null || _this3$f8Data === void 0 || (_this3$f8Data = _this3$f8Data.filter(function (newLinesgarantie) {
          return (newLinesgarantie === null || newLinesgarantie === void 0 ? void 0 : newLinesgarantie.parentId.includes(newLine.id)) && !["", null, undefined].includes(newLinesgarantie.name_garantie);
        })) === null || _this3$f8Data === void 0 ? void 0 : _this3$f8Data.map(function (newLinesgarantie) {
          return newLinesgarantie.id;
        })) || [];
        newLine["garanties_general_id"] = new_ids;
      });
      this.groupNewLinesByGaranties((_this$f8Data8 = this.f8Data) === null || _this$f8Data8 === void 0 ? void 0 : _this$f8Data8.newLines);
    }
  }), "groupNewLinesByGaranties", function groupNewLinesByGaranties(data) {
    this.loading = true;
    var garantiesDict = {};
    data.forEach(function (obj) {
      var garantiesKey = obj.garanties_general_id.slice().sort(function (a, b) {
        return a - b;
      }).join(",");
      if (!garantiesDict[garantiesKey]) {
        garantiesDict[garantiesKey] = [];
      }
      garantiesDict[garantiesKey].push(obj);
    });
    this.regroupNewLignes = Object.values(garantiesDict);
    this.mergeAndGenerateTable();
  }), "groupOldLinesByGaranties", function groupOldLinesByGaranties(data) {
    this.loading = true;
    var garantiesDict = {};
    data.forEach(function (obj) {
      var garantiesKey = obj.garanties_general_id.slice().sort(function (a, b) {
        return a - b;
      }).join(",");
      if (!garantiesDict[garantiesKey]) {
        garantiesDict[garantiesKey] = [];
      }
      garantiesDict[garantiesKey].push(obj);
    });
    this.regroupOldLignes = Object.values(garantiesDict);
    this.mergeAndGenerateTable();
  }), "deleteDuplicate", function deleteDuplicate(data, idParent) {
    if (data && _typeof(data) === 'object') {
      var garantiesArray = Object.values(data);

      // Supprimer les doublons en se basant sur name_garantie
      var uniqueGaranties = garantiesArray.filter(function (garantie, index, self) {
        return index === self.findIndex(function (g) {
          return g.name_garantie === garantie.name_garantie && g.parentId.includes(idParent);
        });
      });
      data = uniqueGaranties;
      // data = uniqueGaranties.reduce((acc, garantie, idx) => {
      //     acc[idx] = garantie;
      //     return acc;
      // }, {});
    }
    return data;
  }), "mergeAndGenerateTable", function mergeAndGenerateTable() {
    var _this4 = this;
    this.loading = true;
    // Initialiser un objet pour regrouper les lignes par type_engagement
    var mergedDataByType = {
      caisse: [],
      // Lignes de type "caisse"
      signature: [] // Lignes de type "signature"
    };

    // Fonction pour trouver une ligne correspondante dans l'autre tableau
    var findMatchingLine = function findMatchingLine(line, linesArray) {
      return linesArray.find(function (l) {
        return l.ligne === line.ligne;
      });
    };

    // Parcourir les lignes existantes (regroupOldLignes)
    this.regroupOldLignes.forEach(function (oldLineGroup) {
      oldLineGroup.forEach(function (oldLine) {
        var newLineMatch = findMatchingLine(oldLine, _this4.regroupNewLignes.flat());

        // Créer un nouvel objet fusionné
        var mergedLine = {
          ligne: oldLine.ligne || "",
          autorisation: oldLine.autorisation || "",
          encours: oldLine.encours || "",
          echeance: oldLine.echeance || "",
          montant: newLineMatch ? newLineMatch.montant : "",
          proposition: newLineMatch ? newLineMatch.proposition : "",
          echeance_new: newLineMatch ? newLineMatch.echeance : "",
          taux: newLineMatch ? newLineMatch.taux : "",
          type_engagement: oldLine.type_engagement || "caisse" // Par défaut, on suppose "caisse"
        };

        // Ajouter la ligne fusionnée au tableau correspondant
        if (mergedLine.type_engagement === "caisse") {
          mergedDataByType.caisse.push(mergedLine);
        } else if (mergedLine.type_engagement === "signature") {
          mergedDataByType.signature.push(mergedLine);
        }
      });
    });

    // Parcourir les nouvelles lignes (regroupNewLignes) pour ajouter celles qui n'ont pas de correspondance
    this.regroupNewLignes.forEach(function (newLineGroup) {
      newLineGroup.forEach(function (newLine) {
        var oldLineMatch = findMatchingLine(newLine, _this4.regroupOldLignes.flat());

        // Si la ligne n'existe pas dans regroupOldLignes, l'ajouter avec des valeurs par défaut
        if (!oldLineMatch) {
          var mergedLine = {
            ligne: newLine.ligne || "",
            autorisation: "",
            // Valeur par défaut
            encours: "",
            // Valeur par défaut
            echeance: "",
            // Valeur par défaut
            montant: newLine.montant || "",
            proposition: newLine.proposition || "",
            echeance_new: newLine.echeance || "",
            taux: newLine.taux || "",
            type_engagement: newLine.type_engagement || "caisse" // Par défaut, on suppose "caisse"
          };

          // Ajouter la ligne fusionnée au tableau correspondant
          if (mergedLine.type_engagement === "caisse") {
            mergedDataByType.caisse.push(mergedLine);
          } else if (mergedLine.type_engagement === "signature") {
            mergedDataByType.signature.push(mergedLine);
          }
        }
      });
    });

    // Mettre à jour les données fusionnées dans le composant
    this.mergedTableData = mergedDataByType;
    this.loading = false;
  }), "formatDate", function formatDate(dateStr) {
    if (!dateStr) return "";
    var date = new Date(dateStr);
    return date.toLocaleDateString("fr-FR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric"
    });
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/memorandum_revue_prorogation/RAPA4.vue?vue&type=template&id=28f548a4&scoped=true":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/memorandum_revue_prorogation/RAPA4.vue?vue&type=template&id=28f548a4&scoped=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm$f8Data, _vm$f8Data2;
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "row"
  }, [_vm.dossier_credit.tbs_in_use.includes("tb15105") ? _c("div", [_c("div", {
    staticClass: "head-memorandum-title px-3 mb-2 mt-4",
    staticStyle: {
      "text-align": "center"
    }
  }, [_vm._v("\n            DESCRIPTION ET JUSTIFICATION DES LIGNES\n        ")]), _vm._v(" "), _c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-bordered mb-2 mt-2"
  }, [_vm._m(0), _vm._v(" "), _c("tbody", [_c("tr", [_c("td", {
    staticClass: "fw-bold sticky sticky-left"
  }, [_vm._v("Lignes")]), _vm._v(" "), _c("td", {
    staticClass: "fw-bold sticky sticky-left-second"
  }, [_vm._v("Autorisation")]), _vm._v(" "), (_vm$f8Data = _vm.f8Data) !== null && _vm$f8Data !== void 0 && _vm$f8Data.encoursAu ? _c("td", {
    staticClass: "fw-bold"
  }, [_c("span", [_vm._v("Encours au")]), _vm._v("\n                            " + _vm._s(_vm.formatDate((_vm$f8Data2 = _vm.f8Data) === null || _vm$f8Data2 === void 0 ? void 0 : _vm$f8Data2.encoursAu)) + "\n                        ")]) : _c("td", {
    staticClass: "fw-bold"
  }, [_vm._v("Encours au")]), _vm._v(" "), _c("td", {
    staticClass: "fw-bold"
  }, [_vm._v("Echéance initiale")]), _vm._v(" "), _c("td", {
    staticClass: "fw-bold"
  }, [_vm._v("Taux")]), _vm._v(" "), _c("td", {
    staticClass: "fw-bold"
  }, [_vm._v("Nouvelle Echéance")]), _vm._v(" "), _c("td", {
    staticClass: "fw-bold"
  }, [_vm._v("Garanties / covenants spécifiques proposées")]), _vm._v(" "), _c("td", {
    staticClass: "fw-bold"
  }, [_vm._v("Garanties / covenants générales proposées")])]), _vm._v(" "), _vm._l(_vm.regroupOldLignes, function (groupOldLigne, groupIndex) {
    return _vm._l(groupOldLigne, function (oldLigne, lineIndex) {
      var _vm$f8Data3;
      return _c("tr", {
        key: groupIndex + "-" + lineIndex + "el"
      }, [_c("td", {
        staticClass: "sticky sticky-left"
      }, [_vm._v(_vm._s(oldLigne === null || oldLigne === void 0 ? void 0 : oldLigne.ligne))]), _vm._v(" "), _c("td", {
        staticClass: "sticky sticky-left-second"
      }, [_vm._v(_vm._s(oldLigne === null || oldLigne === void 0 ? void 0 : oldLigne.autorisation))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(oldLigne === null || oldLigne === void 0 ? void 0 : oldLigne.encours))]), _vm._v(" "), oldLigne !== null && oldLigne !== void 0 && oldLigne.echeance ? _c("td", [_vm._v(_vm._s(_vm.formatDate(oldLigne.echeance)))]) : _c("td"), _vm._v(" "), _c("td", [_vm._v(_vm._s(oldLigne === null || oldLigne === void 0 ? void 0 : oldLigne.taux))]), _vm._v(" "), oldLigne !== null && oldLigne !== void 0 && oldLigne.nouvelle_echeance ? _c("td", [_vm._v(_vm._s(_vm.formatDate(oldLigne.nouvelle_echeance)))]) : _c("td"), _vm._v(" "), _c("td", _vm._l(oldLigne === null || oldLigne === void 0 ? void 0 : oldLigne.garanties, function (surete, sureteIndex) {
        return _c("div", {
          key: groupIndex + "-surete-" + sureteIndex,
          staticStyle: {
            width: "400px"
          }
        }, _vm._l(surete, function (sure, sureIndex) {
          var _sure$state_, _sure$name_garantie;
          return _c("ul", {
            key: groupIndex + "-sure-" + sureIndex
          }, [(sure === null || sure === void 0 || (_sure$state_ = sure.state_) === null || _sure$state_ === void 0 ? void 0 : _sure$state_.has_speOr_spe) == "specifique" && !["", null, undefined].includes(sure === null || sure === void 0 || (_sure$name_garantie = sure.name_garantie) === null || _sure$name_garantie === void 0 ? void 0 : _sure$name_garantie.trim()) ? _c("li", [_vm._v("\n                                            - " + _vm._s(sure === null || sure === void 0 ? void 0 : sure.name_garantie.replace(/^-\s*/, "")) + "\n                                        ")]) : _vm._e()]);
        }), 0);
      }), 0), _vm._v(" "), lineIndex === 0 ? _c("td", {
        attrs: {
          rowspan: groupOldLigne.length
        }
      }, [_c("div", {
        staticStyle: {
          width: "400px"
        }
      }, _vm._l(_vm.deleteDuplicate((_vm$f8Data3 = _vm.f8Data) === null || _vm$f8Data3 === void 0 ? void 0 : _vm$f8Data3.oldLinesgarantiesGenerales, groupOldLigne[0].id), function (surete, index) {
        var _surete$name_garantie;
        return _c("ul", {
          key: "generales_" + groupIndex + "-" + index
        }, [surete.parentId.includes(groupOldLigne[0].id) && !["", null, undefined].includes(surete === null || surete === void 0 || (_surete$name_garantie = surete.name_garantie) === null || _surete$name_garantie === void 0 ? void 0 : _surete$name_garantie.trim()) ? _c("li", [_vm._v("\n                                            - " + _vm._s(surete === null || surete === void 0 ? void 0 : surete.name_garantie.replace(/^-\s*/, "")) + "\n                                        ")]) : _vm._e()]);
      }), 0)]) : _vm._e()]);
    });
  })], 2)])])]) : _vm._e()]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", {
    staticClass: "bg-ed-primary"
  }, [_c("tr", [_c("th", {
    staticStyle: {
      "text-align": "center"
    },
    attrs: {
      colspan: "9",
      scope: "row"
    }
  }, [_vm._v("LIGNE EXISTANTE")])])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/memorandum_revue_prorogation/RAPA4.vue?vue&type=style&index=0&id=28f548a4&lang=css&scoped=true":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/memorandum_revue_prorogation/RAPA4.vue?vue&type=style&index=0&id=28f548a4&lang=css&scoped=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.bg-grey[data-v-28f548a4] {\r\n    background-color: #f4f3f3;\r\n    font-weight: 600;\n}\n.memo[data-v-28f548a4] {\r\n    margin-top: 10px;\r\n    padding: 10px;\r\n    border: 2px solid #fff;\r\n    font-weight: 550;\r\n    font-size: 16px;\r\n    text-align: left;\r\n    text-transform: uppercase;\r\n    background-color: #34495e;\r\n    color: #fff;\n}\n.lgcrd[data-v-28f548a4] {\r\n    font-size: 20px;\r\n    font-weight: bold;\r\n    color: #dc0030;\n}\nth[data-v-28f548a4] {\r\n    background: #f4f3f3;\n}\n.head-memorandum-title[data-v-28f548a4] {\r\n    margin-top: 15px;\r\n    padding: 16px;\r\n    color: #fff;\r\n    font-weight: bold;\r\n    background-color: #34495e;\r\n    border: 2px solid #575759;\r\n    box-shadow: 1px 3px 4px #ddd;\r\n    font-size: 16px;\r\n    text-align: center;\r\n    text-transform: uppercase;\r\n    border-radius: 10px;\r\n    margin-bottom: 15px;\n}\ntable[data-v-28f548a4] {\r\n  border-collapse: collapse;\r\n  width: 100%;\n}\nth[data-v-28f548a4], td[data-v-28f548a4] {\r\n  padding: 8px;\r\n  border: 1px solid #ddd;\r\n  text-align: left;\n}\ntd.sticky[data-v-28f548a4], th.sticky[data-v-28f548a4] {\r\n  position: sticky;\r\n  background-color: white;\r\n  z-index: 1;\n}\ntd.sticky-left[data-v-28f548a4], th.sticky-left[data-v-28f548a4] {\r\n  left: 0;\n}\ntd.sticky-left-second[data-v-28f548a4], th.sticky-left-second[data-v-28f548a4] {\r\n  left: 0px; \r\n  background-color: #f4f3f3 !important;\n}\ntd.sticky-left[data-v-28f548a4], th.sticky-left[data-v-28f548a4]{\r\n    /* left: 240px; */\r\n    background-color: #f4f3f3 !important;\n}\r\n\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/memorandum_revue_prorogation/RAPA4.vue?vue&type=style&index=0&id=28f548a4&lang=css&scoped=true":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/memorandum_revue_prorogation/RAPA4.vue?vue&type=style&index=0&id=28f548a4&lang=css&scoped=true ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RAPA4_vue_vue_type_style_index_0_id_28f548a4_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RAPA4.vue?vue&type=style&index=0&id=28f548a4&lang=css&scoped=true */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/memorandum_revue_prorogation/RAPA4.vue?vue&type=style&index=0&id=28f548a4&lang=css&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RAPA4_vue_vue_type_style_index_0_id_28f548a4_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RAPA4_vue_vue_type_style_index_0_id_28f548a4_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/offview/bank/afg/memo/memorandum_revue_prorogation/RAPA4.vue":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/offview/bank/afg/memo/memorandum_revue_prorogation/RAPA4.vue ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _RAPA4_vue_vue_type_template_id_28f548a4_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RAPA4.vue?vue&type=template&id=28f548a4&scoped=true */ "./resources/js/components/offview/bank/afg/memo/memorandum_revue_prorogation/RAPA4.vue?vue&type=template&id=28f548a4&scoped=true");
/* harmony import */ var _RAPA4_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RAPA4.vue?vue&type=script&lang=js */ "./resources/js/components/offview/bank/afg/memo/memorandum_revue_prorogation/RAPA4.vue?vue&type=script&lang=js");
/* harmony import */ var _RAPA4_vue_vue_type_style_index_0_id_28f548a4_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RAPA4.vue?vue&type=style&index=0&id=28f548a4&lang=css&scoped=true */ "./resources/js/components/offview/bank/afg/memo/memorandum_revue_prorogation/RAPA4.vue?vue&type=style&index=0&id=28f548a4&lang=css&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _RAPA4_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _RAPA4_vue_vue_type_template_id_28f548a4_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _RAPA4_vue_vue_type_template_id_28f548a4_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "28f548a4",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/offview/bank/afg/memo/memorandum_revue_prorogation/RAPA4.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/offview/bank/afg/memo/memorandum_revue_prorogation/RAPA4.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************!*\
  !*** ./resources/js/components/offview/bank/afg/memo/memorandum_revue_prorogation/RAPA4.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RAPA4_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RAPA4.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/memorandum_revue_prorogation/RAPA4.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RAPA4_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/offview/bank/afg/memo/memorandum_revue_prorogation/RAPA4.vue?vue&type=style&index=0&id=28f548a4&lang=css&scoped=true":
/*!******************************************************************************************************************************************************!*\
  !*** ./resources/js/components/offview/bank/afg/memo/memorandum_revue_prorogation/RAPA4.vue?vue&type=style&index=0&id=28f548a4&lang=css&scoped=true ***!
  \******************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RAPA4_vue_vue_type_style_index_0_id_28f548a4_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RAPA4.vue?vue&type=style&index=0&id=28f548a4&lang=css&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/memorandum_revue_prorogation/RAPA4.vue?vue&type=style&index=0&id=28f548a4&lang=css&scoped=true");


/***/ }),

/***/ "./resources/js/components/offview/bank/afg/memo/memorandum_revue_prorogation/RAPA4.vue?vue&type=template&id=28f548a4&scoped=true":
/*!****************************************************************************************************************************************!*\
  !*** ./resources/js/components/offview/bank/afg/memo/memorandum_revue_prorogation/RAPA4.vue?vue&type=template&id=28f548a4&scoped=true ***!
  \****************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RAPA4_vue_vue_type_template_id_28f548a4_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RAPA4_vue_vue_type_template_id_28f548a4_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RAPA4_vue_vue_type_template_id_28f548a4_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RAPA4.vue?vue&type=template&id=28f548a4&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/memorandum_revue_prorogation/RAPA4.vue?vue&type=template&id=28f548a4&scoped=true");


/***/ })

}]);