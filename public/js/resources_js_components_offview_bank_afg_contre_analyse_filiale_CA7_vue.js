"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_offview_bank_afg_contre_analyse_filiale_CA7_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/contre_analyse_filiale/CA7.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/contre_analyse_filiale/CA7.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_afg_f8_data_extractor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../services/afg/f8-data-extractor */ "./resources/js/services/afg/f8-data-extractor.js");
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
    this.f8Data = this.f8DataExtractor.getData(this.dossier_credit, "cred_pub_tb_14064");
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
          proposition: 0,
          proposition_analyste_de: 0
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
        }, 0),
        proposition_analyste_de: this.mergedTableData.caisse.reduce(function (sum, line) {
          return sum + parseFloat((line.proposition_analyste_de || "0").replace(/\s/g, ''));
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
          proposition: 0,
          proposition_analyste_de: 0
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
        }, 0),
        proposition_analyste_de: this.mergedTableData.signature.reduce(function (sum, line) {
          return sum + parseFloat((line.proposition_analyste_de || "0").replace(/\s/g, ''));
        }, 0)
      };
    },
    // Calcul des totaux globaux
    totalGlobal: function totalGlobal() {
      return {
        autorisation: this.totalCaisse.autorisation + this.totalSignature.autorisation,
        encours: this.totalCaisse.encours + this.totalSignature.encours,
        montant: this.totalCaisse.montant + this.totalSignature.montant,
        proposition: this.totalCaisse.proposition + this.totalSignature.proposition,
        total_nouvelles_lignes_proposition_ana_de: this.totalCaisse.proposition_analyste_de + this.totalSignature.proposition_analyste_de
      };
    },
    garantiesGeneralesNew: function garantiesGeneralesNew() {
      var _this$f8Data3,
        _this = this;
      return (_this$f8Data3 = this.f8Data) === null || _this$f8Data3 === void 0 ? void 0 : _this$f8Data3.newLinesgarantiesGenerales.filter(function (garantie, index, list) {
        var _this$f8Data4, _this$authenticatedUs;
        var line = (_this$f8Data4 = _this.f8Data) === null || _this$f8Data4 === void 0 ? void 0 : _this$f8Data4.newLines.find(function (l) {
          var _garantie$parentId, _garantie$parentId2;
          return ((_garantie$parentId = garantie.parentId) === null || _garantie$parentId === void 0 ? void 0 : _garantie$parentId.includes(l.id)) || ((_garantie$parentId2 = garantie.parentId) === null || _garantie$parentId2 === void 0 ? void 0 : _garantie$parentId2.includes(l.from));
        });
        if ((line === null || line === void 0 ? void 0 : line.filiale) != ((_this$authenticatedUs = _this.authenticatedUser) === null || _this$authenticatedUs === void 0 ? void 0 : _this$authenticatedUs.filiale)) {
          return false;
        }
        if ((garantie === null || garantie === void 0 ? void 0 : garantie.relevement) == 'Oui') return true;
        if ((line === null || line === void 0 ? void 0 : line.statut) != 'Nouveau') {
          var _garantie$state_;
          return ((_garantie$state_ = garantie.state_) === null || _garantie$state_ === void 0 ? void 0 : _garantie$state_.is_detained) == 'detenues';
        }
        return true;
      });
    },
    garantiesSpecifiquesNew: function garantiesSpecifiquesNew() {
      var _this$f8Data5,
        _this2 = this;
      return (_this$f8Data5 = this.f8Data) === null || _this$f8Data5 === void 0 ? void 0 : _this$f8Data5.newLinesgarantiesSpecifiques.filter(function (garantie, index, list) {
        var _this2$f8Data, _this2$authenticatedU, _garantie$state_2;
        var line = (_this2$f8Data = _this2.f8Data) === null || _this2$f8Data === void 0 ? void 0 : _this2$f8Data.newLines.find(function (l) {
          var _garantie$parentId3, _garantie$parentId4;
          return ((_garantie$parentId3 = garantie.parentId) === null || _garantie$parentId3 === void 0 ? void 0 : _garantie$parentId3.includes(l.id)) || ((_garantie$parentId4 = garantie.parentId) === null || _garantie$parentId4 === void 0 ? void 0 : _garantie$parentId4.includes(l.from));
        });
        if ((line === null || line === void 0 ? void 0 : line.filiale) != ((_this2$authenticatedU = _this2.authenticatedUser) === null || _this2$authenticatedU === void 0 ? void 0 : _this2$authenticatedU.filiale)) return false;
        if ((garantie === null || garantie === void 0 ? void 0 : garantie.relevement) == 'Oui') return true;
        if ((line === null || line === void 0 ? void 0 : line.statut) != 'Nouveau') return ((_garantie$state_2 = garantie.state_) === null || _garantie$state_2 === void 0 ? void 0 : _garantie$state_2.is_detained) == 'detenues';
        return true;
      });
    },
    garantiesGeneralesOld: function garantiesGeneralesOld() {
      var _this$f8Data6,
        _this3 = this;
      return (_this$f8Data6 = this.f8Data) === null || _this$f8Data6 === void 0 || (_this$f8Data6 = _this$f8Data6.oldLinesgarantiesGenerales) === null || _this$f8Data6 === void 0 ? void 0 : _this$f8Data6.filter(function (garantie) {
        var _this3$f8Data, _this3$authenticatedU;
        var line = (_this3$f8Data = _this3.f8Data) === null || _this3$f8Data === void 0 ? void 0 : _this3$f8Data.oldLines.find(function (l) {
          var _garantie$parentId5, _garantie$parentId6;
          return ((_garantie$parentId5 = garantie.parentId) === null || _garantie$parentId5 === void 0 ? void 0 : _garantie$parentId5.includes(l.id)) || ((_garantie$parentId6 = garantie.parentId) === null || _garantie$parentId6 === void 0 ? void 0 : _garantie$parentId6.includes(l.from));
        });
        return (line === null || line === void 0 ? void 0 : line.filiale) == ((_this3$authenticatedU = _this3.authenticatedUser) === null || _this3$authenticatedU === void 0 ? void 0 : _this3$authenticatedU.filiale);
      });
    },
    garantiesSpecifiquesOld: function garantiesSpecifiquesOld() {
      var _this$f8Data7,
        _this4 = this;
      return (_this$f8Data7 = this.f8Data) === null || _this$f8Data7 === void 0 || (_this$f8Data7 = _this$f8Data7.oldLinesgarantiesSpecifiques) === null || _this$f8Data7 === void 0 ? void 0 : _this$f8Data7.filter(function (garantie) {
        var _this4$f8Data, _this4$authenticatedU;
        var line = (_this4$f8Data = _this4.f8Data) === null || _this4$f8Data === void 0 ? void 0 : _this4$f8Data.oldLines.find(function (l) {
          var _garantie$parentId7, _garantie$parentId8;
          return ((_garantie$parentId7 = garantie.parentId) === null || _garantie$parentId7 === void 0 ? void 0 : _garantie$parentId7.includes(l.id)) || ((_garantie$parentId8 = garantie.parentId) === null || _garantie$parentId8 === void 0 ? void 0 : _garantie$parentId8.includes(l.from));
        });
        return (line === null || line === void 0 ? void 0 : line.filiale) == ((_this4$authenticatedU = _this4.authenticatedUser) === null || _this4$authenticatedU === void 0 ? void 0 : _this4$authenticatedU.filiale);
      });
    },
    currentFilialeLigneCaisse: function currentFilialeLigneCaisse() {
      var _this$mergedTableData3,
        _this5 = this;
      return (_this$mergedTableData3 = this.mergedTableData.caisse) === null || _this$mergedTableData3 === void 0 ? void 0 : _this$mergedTableData3.filter(function (line) {
        var _this5$authenticatedU;
        return line.filiale == ((_this5$authenticatedU = _this5.authenticatedUser) === null || _this5$authenticatedU === void 0 ? void 0 : _this5$authenticatedU.filiale);
      });
    },
    currentFilialeLigneSignature: function currentFilialeLigneSignature() {
      var _this$mergedTableData4,
        _this6 = this;
      return (_this$mergedTableData4 = this.mergedTableData.signature) === null || _this$mergedTableData4 === void 0 ? void 0 : _this$mergedTableData4.filter(function (line) {
        var _this6$authenticatedU;
        return line.filiale == ((_this6$authenticatedU = _this6.authenticatedUser) === null || _this6$authenticatedU === void 0 ? void 0 : _this6$authenticatedU.filiale);
      });
    },
    otherFilialesLigneCaisse: function otherFilialesLigneCaisse() {
      var _this$mergedTableData5,
        _this7 = this;
      return (_this$mergedTableData5 = this.mergedTableData.caisse) === null || _this$mergedTableData5 === void 0 ? void 0 : _this$mergedTableData5.filter(function (line) {
        var _this7$authenticatedU;
        return line.filiale != ((_this7$authenticatedU = _this7.authenticatedUser) === null || _this7$authenticatedU === void 0 ? void 0 : _this7$authenticatedU.filiale);
      });
    },
    otherFilialesLigneSignature: function otherFilialesLigneSignature() {
      var _this$mergedTableData6,
        _this8 = this;
      return (_this$mergedTableData6 = this.mergedTableData.signature) === null || _this$mergedTableData6 === void 0 ? void 0 : _this$mergedTableData6.filter(function (line) {
        var _this8$authenticatedU;
        return line.filiale != ((_this8$authenticatedU = _this8.authenticatedUser) === null || _this8$authenticatedU === void 0 ? void 0 : _this8$authenticatedU.filiale);
      });
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
      var _this9 = this;
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
        _this9.$toasted.show("Fichier Téléchargé avec succès");
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
        if (this.dossier_credit.tbs_in_use.includes('tb14064')) {
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
    var _this$f8Data8,
      _this0 = this;
    this.loading = true;
    if (!['', null, undefined].includes((_this$f8Data8 = this.f8Data) === null || _this$f8Data8 === void 0 ? void 0 : _this$f8Data8.oldLines)) {
      var _this$f8Data9, _this$f8Data0;
      (_this$f8Data9 = this.f8Data) === null || _this$f8Data9 === void 0 || (_this$f8Data9 = _this$f8Data9.oldLines) === null || _this$f8Data9 === void 0 || _this$f8Data9.forEach(function (oldLine) {
        var _this0$f8Data;
        var ids = ((_this0$f8Data = _this0.f8Data) === null || _this0$f8Data === void 0 || (_this0$f8Data = _this0$f8Data.oldLinesgarantiesGenerales) === null || _this0$f8Data === void 0 || (_this0$f8Data = _this0$f8Data.filter(function (oldLinesgarantie) {
          return (oldLinesgarantie === null || oldLinesgarantie === void 0 ? void 0 : oldLinesgarantie.parentId.includes(oldLine.id)) && !["", null, undefined].includes(oldLinesgarantie.name_garantie);
        })) === null || _this0$f8Data === void 0 ? void 0 : _this0$f8Data.map(function (oldLinesgarantie) {
          return oldLinesgarantie.id;
        })) || [];
        oldLine["garanties_general_id"] = ids;
      });
      this.groupOldLinesByGaranties((_this$f8Data0 = this.f8Data) === null || _this$f8Data0 === void 0 ? void 0 : _this$f8Data0.oldLines);
    }
  }), "reformatNewLinesAndGaranties", function reformatNewLinesAndGaranties() {
    var _this$f8Data1,
      _this1 = this;
    this.loading = true;
    if (!['', null, undefined].includes((_this$f8Data1 = this.f8Data) === null || _this$f8Data1 === void 0 ? void 0 : _this$f8Data1.newLines)) {
      var _this$f8Data10, _this$f8Data11;
      (_this$f8Data10 = this.f8Data) === null || _this$f8Data10 === void 0 || (_this$f8Data10 = _this$f8Data10.newLines) === null || _this$f8Data10 === void 0 || _this$f8Data10.forEach(function (newLine) {
        var _this1$f8Data;
        var new_ids = ((_this1$f8Data = _this1.f8Data) === null || _this1$f8Data === void 0 || (_this1$f8Data = _this1$f8Data.newLinesgarantiesGenerales) === null || _this1$f8Data === void 0 || (_this1$f8Data = _this1$f8Data.filter(function (newLinesgarantie) {
          return (newLinesgarantie === null || newLinesgarantie === void 0 ? void 0 : newLinesgarantie.parentId.includes(newLine.id)) && !["", null, undefined].includes(newLinesgarantie.name_garantie);
        })) === null || _this1$f8Data === void 0 ? void 0 : _this1$f8Data.map(function (newLinesgarantie) {
          return newLinesgarantie.id;
        })) || [];
        newLine["garanties_general_id"] = new_ids;
      });
      this.groupNewLinesByGaranties((_this$f8Data11 = this.f8Data) === null || _this$f8Data11 === void 0 ? void 0 : _this$f8Data11.newLines);
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
    var _this10 = this;
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
        var _this10$authenticated;
        if (oldLine.filiale == ((_this10$authenticated = _this10.authenticatedUser) === null || _this10$authenticated === void 0 ? void 0 : _this10$authenticated.filiale)) {
          var newLineMatch = findMatchingLine(oldLine, _this10.regroupNewLignes.flat());
          // Créer un nouvel objet fusionné
          var mergedLine = {
            ligne: oldLine.ligne || "",
            filiale: oldLine.filiale || "",
            autorisation: oldLine.autorisation || "",
            encours: oldLine.encours || "",
            echeance: oldLine.echeance || "",
            montant: newLineMatch ? newLineMatch.montant : "",
            proposition: newLineMatch ? newLineMatch.proposition : "",
            proposition_analyste_de: newLineMatch ? newLineMatch.proposition_analyste_de : "",
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
        }
      });
    });

    // Parcourir les nouvelles lignes (regroupNewLignes) pour ajouter celles qui n'ont pas de correspondance
    this.regroupNewLignes.forEach(function (newLineGroup) {
      newLineGroup.forEach(function (newLine) {
        var _this10$authenticated2;
        if (newLine.filiale == ((_this10$authenticated2 = _this10.authenticatedUser) === null || _this10$authenticated2 === void 0 ? void 0 : _this10$authenticated2.filiale)) {
          var oldLineMatch = findMatchingLine(newLine, _this10.regroupOldLignes.flat());
          // Si la ligne n'existe pas dans regroupOldLignes, l'ajouter avec des valeurs par défaut
          if (!oldLineMatch) {
            var mergedLine = {
              ligne: newLine.ligne || "",
              filiale: newLine.filiale || "",
              autorisation: "",
              // Valeur par défaut
              encours: "",
              // Valeur par défaut
              echeance: "",
              // Valeur par défaut
              montant: newLine.montant || "",
              proposition: newLine.proposition || "",
              proposition_analyste_de: newLine.proposition_analyste_de || "",
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/contre_analyse_filiale/CA7.vue?vue&type=template&id=53ddfdf0&scoped=true":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/contre_analyse_filiale/CA7.vue?vue&type=template&id=53ddfdf0&scoped=true ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "row"
  }, [_vm.dossier_credit.tbs_in_use.includes("tb14064") ? _c("div", [_c("div", {
    staticClass: "head-memorandum-title px-3 mb-2 mt-4",
    staticStyle: {
      "text-align": "center"
    }
  }, [_vm._v("\n            CARACTERISTIQUES DU FINANCEMENT\n        ")]), _vm._v(" "), _vm.loading ? _c("div", [_vm._v("Chargement en cours...")]) : _c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-bordered"
  }, [_vm._m(0), _vm._v(" "), _c("tbody", [_vm._l(_vm.currentFilialeLigneCaisse, function (line, index) {
    return _c("tr", {
      key: "caisse-" + index
    }, [_c("td", [_vm._v(_vm._s(line.ligne || "-"))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(line.autorisation || "-"))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.formatDate(line.echeance) || "-"))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(line.montant || "-"))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(line.proposition || "-"))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(line.proposition_analyste_de || "-"))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.formatDate(line.echeance_new) || "-"))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(line.taux || "-"))])]);
  }), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "fw-bold align-middle",
    staticStyle: {
      "background-color": "#bdc3c7"
    }
  }, [_vm._v("S/TOTAL PAR CAISSE")]), _vm._v(" "), _c("td", {
    staticClass: "fw-bold align-middle",
    staticStyle: {
      "background-color": "#bdc3c7"
    }
  }, [_vm._v(_vm._s(_vm.totalCaisse.autorisation))]), _vm._v(" "), _c("td", {
    staticClass: "fw-bold align-middle",
    staticStyle: {
      "background-color": "#bdc3c7"
    }
  }, [_vm._v(_vm._s(_vm.totalCaisse.encours))]), _vm._v(" "), _c("td", {
    staticClass: "fw-bold align-middle",
    staticStyle: {
      "background-color": "#bdc3c7"
    }
  }), _vm._v(" "), _c("td", {
    staticClass: "fw-bold align-middle",
    staticStyle: {
      "background-color": "#bdc3c7"
    }
  }, [_vm._v(_vm._s(_vm.totalCaisse.montant))]), _vm._v(" "), _c("td", {
    staticClass: "fw-bold align-middle",
    staticStyle: {
      "background-color": "#bdc3c7"
    }
  }, [_vm._v(_vm._s(_vm.totalCaisse.proposition))]), _vm._v(" "), _c("td", {
    staticClass: "fw-bold align-middle",
    staticStyle: {
      "background-color": "#bdc3c7"
    }
  }, [_vm._v(_vm._s(_vm.totalCaisse.proposition_analyste_de))]), _vm._v(" "), _c("td", {
    staticClass: "fw-bold align-middle",
    staticStyle: {
      "background-color": "#bdc3c7"
    }
  }), _vm._v(" "), _c("td", {
    staticClass: "fw-bold align-middle",
    staticStyle: {
      "background-color": "#bdc3c7"
    }
  })]), _vm._v(" "), _vm._l(_vm.currentFilialeLigneSignature, function (line, index) {
    return _c("tr", {
      key: "signature-" + index
    }, [_c("td", [_vm._v(_vm._s(line.ligne || "-"))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(line.autorisation || "-"))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.formatDate(line.echeance) || "-"))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(line.montant || "-"))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(line.proposition || "-"))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(line.proposition_analyste_de || "-"))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.formatDate(line.echeance_new) || "-"))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(line.taux))])]);
  }), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "fw-bold align-middle",
    staticStyle: {
      "background-color": "#bdc3c7"
    }
  }, [_vm._v("S/TOTAL PAR SIGNATURE")]), _vm._v(" "), _c("td", {
    staticClass: "fw-bold align-middle",
    staticStyle: {
      "background-color": "#bdc3c7"
    }
  }, [_vm._v(_vm._s(_vm.totalSignature.autorisation))]), _vm._v(" "), _c("td", {
    staticClass: "fw-bold align-middle",
    staticStyle: {
      "background-color": "#bdc3c7"
    }
  }, [_vm._v(_vm._s(_vm.totalSignature.encours))]), _vm._v(" "), _c("td", {
    staticClass: "fw-bold align-middle",
    staticStyle: {
      "background-color": "#bdc3c7"
    }
  }), _vm._v(" "), _c("td", {
    staticClass: "fw-bold align-middle",
    staticStyle: {
      "background-color": "#bdc3c7"
    }
  }, [_vm._v(_vm._s(_vm.totalSignature.montant))]), _vm._v(" "), _c("td", {
    staticClass: "fw-bold align-middle",
    staticStyle: {
      "background-color": "#bdc3c7"
    }
  }, [_vm._v(_vm._s(_vm.totalSignature.proposition))]), _vm._v(" "), _c("td", {
    staticClass: "fw-bold align-middle",
    staticStyle: {
      "background-color": "#bdc3c7"
    }
  }, [_vm._v(_vm._s(_vm.totalSignature.proposition_analyste_de))]), _vm._v(" "), _c("td", {
    staticClass: "fw-bold align-middle",
    staticStyle: {
      "background-color": "#bdc3c7"
    }
  }), _vm._v(" "), _c("td", {
    staticClass: "fw-bold align-middle",
    staticStyle: {
      "background-color": "#bdc3c7"
    }
  })]), _vm._v(" "), _c("tr", [_c("th", [_vm._v("TOTAL")]), _vm._v(" "), _c("th", [_vm._v(_vm._s(_vm.totalGlobal.autorisation))]), _vm._v(" "), _c("th"), _vm._v(" "), _c("th", [_vm._v(_vm._s(_vm.totalGlobal.montant))]), _vm._v(" "), _c("th", [_vm._v(_vm._s(_vm.totalGlobal.proposition))]), _vm._v(" "), _c("th", [_vm._v(_vm._s(_vm.totalGlobal.total_nouvelles_lignes_proposition_ana_de))]), _vm._v(" "), _c("th"), _vm._v(" "), _c("th")])], 2)])])]) : _vm._e()]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("th"), _vm._v(" "), _c("th", {
    attrs: {
      colspan: "3"
    }
  }, [_vm._v("LIGNES EXISTANTES")]), _vm._v(" "), _c("th", {
    attrs: {
      colspan: "4"
    }
  }, [_vm._v("NOUVELLES LIGNES")])]), _vm._v(" "), _c("tr", [_c("th", {
    staticClass: "fw-bold"
  }, [_vm._v("LIGNES ")]), _vm._v(" "), _c("th", {
    staticClass: "fw-bold"
  }, [_vm._v("AUTORISATION")]), _vm._v(" "), _c("th", {
    staticClass: "fw-bold"
  }, [_vm._v("ECHEANCE")]), _vm._v(" "), _c("th", {
    staticClass: "fw-bold"
  }, [_vm._v("DEMANDE CLIENT")]), _vm._v(" "), _c("th", {
    staticClass: "fw-bold"
  }, [_vm._v("PROPOSITION DCE")]), _vm._v(" "), _c("th", {
    staticClass: "fw-bold"
  }, [_vm._v("PROPOSITION ANALYSTE DE")]), _vm._v(" "), _c("th", {
    staticClass: "fw-bold"
  }, [_vm._v("ECHEANCE/DUREE TIRAGE")]), _vm._v(" "), _c("th", {
    staticClass: "fw-bold"
  }, [_vm._v("TAUX (%)")])])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/contre_analyse_filiale/CA7.vue?vue&type=style&index=0&id=53ddfdf0&lang=css&scoped=true":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/contre_analyse_filiale/CA7.vue?vue&type=style&index=0&id=53ddfdf0&lang=css&scoped=true ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.bg-grey[data-v-53ddfdf0] {\r\n    background-color: #f4f3f3;\r\n    font-weight: 600;\n}\n.memo[data-v-53ddfdf0] {\r\n    margin-top: 10px;\r\n    padding: 10px;\r\n    border: 2px solid #fff;\r\n    font-weight: 550;\r\n    font-size: 16px;\r\n    text-align: left;\r\n    text-transform: uppercase;\r\n    background-color: #34495e;\r\n    color: #fff;\n}\n.lgcrd[data-v-53ddfdf0] {\r\n    font-size: 20px;\r\n    font-weight: bold;\r\n    color: #dc0030;\n}\nth[data-v-53ddfdf0] {\r\n    background: #f4f3f3;\n}\ntable[data-v-53ddfdf0] {\r\n  border-collapse: collapse;\r\n  width: 100%;\n}\nth[data-v-53ddfdf0], td[data-v-53ddfdf0] {\r\n  padding: 8px;\r\n  border: 1px solid #ddd;\r\n  text-align: left;\n}\ntd.sticky[data-v-53ddfdf0], th.sticky[data-v-53ddfdf0] {\r\n  position: sticky;\r\n  background-color: white;\r\n  z-index: 1;\n}\ntd.sticky-left[data-v-53ddfdf0], th.sticky-left[data-v-53ddfdf0] {\r\n  left: 0;\n}\ntd.sticky-left-second[data-v-53ddfdf0], th.sticky-left-second[data-v-53ddfdf0] {\r\n  left: 0px; \r\n  background-color: #f4f3f3 !important;\n}\ntd.sticky-left[data-v-53ddfdf0], th.sticky-left[data-v-53ddfdf0]{\r\n    /* left: 240px; */\r\n    background-color: #f4f3f3 !important;\n}\n.head-memorandum-title[data-v-53ddfdf0] {\r\n    font-weight: bold !important;\r\n    text-transform: uppercase;\r\n    text-align: center;\r\n    border: 1px solid;\r\n    margin-bottom: 10px;\r\n    padding: 4px;\r\n    caption-side:top;\n}\n.badge.badge-success[data-v-53ddfdf0] {\r\n    background: #ccffc4;\r\n    color: #008000;\r\n    font-size: 0.8rem;\r\n    font-weight: 500;\n}\n.badge.badge-danger[data-v-53ddfdf0] {\r\n    background: #ffdddd;\r\n    color: #dc0030;\r\n    font-size: 0.8rem;\r\n    font-weight: 500;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/contre_analyse_filiale/CA7.vue?vue&type=style&index=0&id=53ddfdf0&lang=css&scoped=true":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/contre_analyse_filiale/CA7.vue?vue&type=style&index=0&id=53ddfdf0&lang=css&scoped=true ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CA7_vue_vue_type_style_index_0_id_53ddfdf0_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CA7.vue?vue&type=style&index=0&id=53ddfdf0&lang=css&scoped=true */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/contre_analyse_filiale/CA7.vue?vue&type=style&index=0&id=53ddfdf0&lang=css&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CA7_vue_vue_type_style_index_0_id_53ddfdf0_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CA7_vue_vue_type_style_index_0_id_53ddfdf0_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/offview/bank/afg/contre_analyse_filiale/CA7.vue":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/offview/bank/afg/contre_analyse_filiale/CA7.vue ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CA7_vue_vue_type_template_id_53ddfdf0_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CA7.vue?vue&type=template&id=53ddfdf0&scoped=true */ "./resources/js/components/offview/bank/afg/contre_analyse_filiale/CA7.vue?vue&type=template&id=53ddfdf0&scoped=true");
/* harmony import */ var _CA7_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CA7.vue?vue&type=script&lang=js */ "./resources/js/components/offview/bank/afg/contre_analyse_filiale/CA7.vue?vue&type=script&lang=js");
/* harmony import */ var _CA7_vue_vue_type_style_index_0_id_53ddfdf0_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CA7.vue?vue&type=style&index=0&id=53ddfdf0&lang=css&scoped=true */ "./resources/js/components/offview/bank/afg/contre_analyse_filiale/CA7.vue?vue&type=style&index=0&id=53ddfdf0&lang=css&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _CA7_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _CA7_vue_vue_type_template_id_53ddfdf0_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _CA7_vue_vue_type_template_id_53ddfdf0_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "53ddfdf0",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/offview/bank/afg/contre_analyse_filiale/CA7.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/offview/bank/afg/contre_analyse_filiale/CA7.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/components/offview/bank/afg/contre_analyse_filiale/CA7.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CA7_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CA7.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/contre_analyse_filiale/CA7.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CA7_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/offview/bank/afg/contre_analyse_filiale/CA7.vue?vue&type=style&index=0&id=53ddfdf0&lang=css&scoped=true":
/*!*****************************************************************************************************************************************!*\
  !*** ./resources/js/components/offview/bank/afg/contre_analyse_filiale/CA7.vue?vue&type=style&index=0&id=53ddfdf0&lang=css&scoped=true ***!
  \*****************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CA7_vue_vue_type_style_index_0_id_53ddfdf0_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CA7.vue?vue&type=style&index=0&id=53ddfdf0&lang=css&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/contre_analyse_filiale/CA7.vue?vue&type=style&index=0&id=53ddfdf0&lang=css&scoped=true");


/***/ }),

/***/ "./resources/js/components/offview/bank/afg/contre_analyse_filiale/CA7.vue?vue&type=template&id=53ddfdf0&scoped=true":
/*!***************************************************************************************************************************!*\
  !*** ./resources/js/components/offview/bank/afg/contre_analyse_filiale/CA7.vue?vue&type=template&id=53ddfdf0&scoped=true ***!
  \***************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CA7_vue_vue_type_template_id_53ddfdf0_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CA7_vue_vue_type_template_id_53ddfdf0_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CA7_vue_vue_type_template_id_53ddfdf0_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CA7.vue?vue&type=template&id=53ddfdf0&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/contre_analyse_filiale/CA7.vue?vue&type=template&id=53ddfdf0&scoped=true");


/***/ })

}]);