"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_offview_bank_nsia_contre_analyse_filiale_fiche_decision_crcca_ca_DC-D-39d2c2"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/contre_analyse_filiale/fiche_decision_crcca_ca/DC-DESC3.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/contre_analyse_filiale/fiche_decision_crcca_ca/DC-DESC3.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_connects_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../services/connects.service */ "./resources/js/services/connects.service.js");
/* harmony import */ var _services_nsia_f8_data_extractor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../services/nsia/f8-data-extractor */ "./resources/js/services/nsia/f8-data-extractor.js");
/* harmony import */ var _services_nsia_f8_manager_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../services/nsia/f8-manager.js */ "./resources/js/services/nsia/f8-manager.js");
/* harmony import */ var _services_nsia_f8_constants_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../services/nsia/f8-constants.js */ "./resources/js/services/nsia/f8-constants.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    dossier_credit: Object
  },
  data: function data() {
    var _this$dossier_credit;
    return {
      inventairesTrier: [],
      connectsHost: _services_connects_service__WEBPACK_IMPORTED_MODULE_0__["default"].loadablehost(),
      isLoadingFile: false,
      le_hypotheques: false,
      le_gages: false,
      le_csd: false,
      le_ch_pa: false,
      files: [],
      le_pfe: false,
      le_cp: false,
      // data_tb19003: this.dossier_credit?.cred_pub_tb_19003,
      nl_hypotheques: false,
      nl_gages: false,
      nl_csd: false,
      nl_ch_pa: false,
      nl_pfe: false,
      nl_cp: false,
      data_tb19003_other: (_this$dossier_credit = this.dossier_credit) === null || _this$dossier_credit === void 0 ? void 0 : _this$dossier_credit.cred_pub_tb_19003,
      // f8DataExtractor: F8DataExtractor,
      // 
      data_tb19003Extractor: _services_nsia_f8_data_extractor__WEBPACK_IMPORTED_MODULE_1__["default"],
      data_tb19003: null,
      regroupNewLignes: null,
      regroupOldLignes: null
    };
  },
  created: function created() {
    //this.sortInventaires()
  },
  mounted: function mounted() {
    // const cred_pub_keys = this.determineCredPubTables(this.dossier_credit?.applied_templ_name);
    this.data_tb19003 = this.data_tb19003Extractor.getData(this.dossier_credit, "cred_pub_tb_19003");
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
      var _this$data_tb, _this$data_tb2;
      return (_this$data_tb = this.data_tb19003) === null || _this$data_tb === void 0 || (_this$data_tb = _this$data_tb.suretes_diverses) === null || _this$data_tb === void 0 ? void 0 : _this$data_tb.concat((_this$data_tb2 = this.data_tb19003) === null || _this$data_tb2 === void 0 ? void 0 : _this$data_tb2.autres_suretes_diverses);
    }
  },
  methods: {
    somHypothequeValeurMarchande: function somHypothequeValeurMarchande() {
      var _this$dossier_credit3;
      var hypotheques = (_this$dossier_credit3 = this.dossier_credit) === null || _this$dossier_credit3 === void 0 || (_this$dossier_credit3 = _this$dossier_credit3.cred_pub_tb_15) === null || _this$dossier_credit3 === void 0 ? void 0 : _this$dossier_credit3.hypotheques;
      // for test 
      // let gages = this.dossier_credit?.cred_pub_tb_15?.gages
      // let lignes_existantes = this.dossier_credit?.cred_pub_tb_8?.lignes_existantes
      // let nouvelles_lignes = this.dossier_credit?.cred_pub_tb_8?.nouvelles_lignes
      // 
      var valeur_m = 0;
      var valeur_c = 0;
      hypotheques === null || hypotheques === void 0 || hypotheques.forEach(function (element) {
        if (element.intitule_ligne.name == "Nouvelles lignes") {
          valeur_m += Number(String(element.valeur_marchande).replace(/\s+/g, ""));
          valeur_c += Number(String(element.valeur_considere).replace(/\s+/g, ""));
        } else {
          valeur_m += Number(String(element.valeur_marchande).replace(/\s+/g, ""));
          valeur_c += Number(String(element.valeur_considere).replace(/\s+/g, ""));
        }
      });
      this.som_hypotheque_valeur_marchande = valeur_m;
      this.som_hypotheque_valeur_considere = valeur_c;

      // 
      this.nl_som_hypotheque_valeur_marchande = valeur_m;
      this.nl_som_hypotheque_valeur_considere = valeur_c;

      // const obj = Object.assign({}, lignes_existantes, nouvelles_lignes)
      // const obj_2 = { ...lignes_existantes, ...nouvelles_lignes }
      // console.log('lignes_existantes', lignes_existantes);
      // console.log('nouvelles_lignes', nouvelles_lignes);
      // console.log('new obj', obj)
      // console.log('new obj_2', obj_2)

      // return via 
    },
    loadData: function loadData() {
      this.getFiles();
    },
    somGageValeurMarchande: function somGageValeurMarchande() {
      var _this$dossier_credit4;
      var gages = (_this$dossier_credit4 = this.dossier_credit) === null || _this$dossier_credit4 === void 0 || (_this$dossier_credit4 = _this$dossier_credit4.cred_pub_tb_15) === null || _this$dossier_credit4 === void 0 ? void 0 : _this$dossier_credit4.gages;
      var valeur_m = 0;
      var valeur_c = 0;
      gages === null || gages === void 0 || gages.forEach(function (element) {
        var _element$intitule_lig;
        if ((element === null || element === void 0 || (_element$intitule_lig = element.intitule_ligne) === null || _element$intitule_lig === void 0 ? void 0 : _element$intitule_lig.name) == "Nouvelles lignes") {
          valeur_m += Number(String(element.valeur_marchande).replace(/\s+/g, ""));
          valeur_c += Number(String(element.valeur_considere).replace(/\s+/g, ""));
        } else {
          valeur_m += Number(String(element.valeur_marchande).replace(/\s+/g, ""));
          valeur_c += Number(String(element.valeur_considere).replace(/\s+/g, ""));
        }
      });
      this.som_gage_valeur_marchande = valeur_m;
      this.som_gage_valeur_considere = valeur_c;
      //
      this.nl_som_gage_valeur_marchande = valeur_m;
      this.nl_som_gage_valeur_considere = valeur_c;

      // console.log('valeur2', valeur)
      // return via
    },
    handleDoubleClickOrClick: function handleDoubleClickOrClick(index) {
      var _this$data_tb3,
        _this = this;
      // console.log(" index", index)
      console.log("data_tb002", (_this$data_tb3 = this.data_tb19003) === null || _this$data_tb3 === void 0 ? void 0 : _this$data_tb3.conso_fond_propre);
      EventBus.$emit("open-extra-file-explorer");
      setTimeout(function () {
        var _this$data_tb4;
        EventBus.$emit("data-extra-file-explorer", {
          name: (_this$data_tb4 = _this.data_tb19003) === null || _this$data_tb4 === void 0 || (_this$data_tb4 = _this$data_tb4.conso_fond_propre[index]) === null || _this$data_tb4 === void 0 ? void 0 : _this$data_tb4.name,
          view: true
        });
      }, 500);
      // console.log(" pieces_versees_list", this.data_tb19003?.conso_fond_propre[index]?.name)           
    },
    getFiles: function getFiles() {
      var _this$data_tb5,
        _this$data_tb6,
        _this2 = this;
      if ((_this$data_tb5 = this.data_tb19003) !== null && _this$data_tb5 !== void 0 && _this$data_tb5.conso_fond_propre && ((_this$data_tb6 = this.data_tb19003) === null || _this$data_tb6 === void 0 ? void 0 : _this$data_tb6.conso_fond_propre.length) > 0) {
        this.isLoadingFile = true;
        this.$axios.post(this.connectsHost + 'api/get-files', {
          file_identity: this.dossier_credit.cred_pub_key
        }).then(function (res) {
          var _res$data$data, _res$data$data2;
          res.data = JSON.parse(res.data);
          if (((_res$data$data = res.data.data) === null || _res$data$data === void 0 ? void 0 : _res$data$data.length) > 0 || ((_res$data$data2 = res.data.data) === null || _res$data$data2 === void 0 ? void 0 : _res$data$data2.length) != null) {
            var _this2$data_tb;
            _this2.files = res.data.data;
            (_this2$data_tb = _this2.data_tb19003) === null || _this2$data_tb === void 0 || _this2$data_tb.conso_fond_propre.forEach(function (element, index) {
              var count = 0;
              _this2.files.forEach(function (file) {
                var _element$template;
                if ((file === null || file === void 0 ? void 0 : file.extra_file_template_id) != null && (element === null || element === void 0 || (_element$template = element.template) === null || _element$template === void 0 ? void 0 : _element$template.id) == (file === null || file === void 0 ? void 0 : file.extra_file_template_id)) {
                  count++;
                }
              });
              _this2.data_tb19003.conso_fond_propre[index]['files'] = count;
            });
          }
          _this2.isLoadingFile = false;
        })["catch"](function (err) {
          _this2.isLoadingFile = false;
          console.error(err);
        });
      }
    },
    somCautionnementRevenuMensuel: function somCautionnementRevenuMensuel() {
      var _this$dossier_credit5;
      var cautionnement_solidaires = (_this$dossier_credit5 = this.dossier_credit) === null || _this$dossier_credit5 === void 0 || (_this$dossier_credit5 = _this$dossier_credit5.cred_pub_tb_15) === null || _this$dossier_credit5 === void 0 ? void 0 : _this$dossier_credit5.cautionnement_solidaires;
      var rev_m = 0;
      var v_p = 0;
      cautionnement_solidaires === null || cautionnement_solidaires === void 0 || cautionnement_solidaires.forEach(function (element) {
        var _element$intitule_lig2;
        if ((element === null || element === void 0 || (_element$intitule_lig2 = element.intitule_ligne) === null || _element$intitule_lig2 === void 0 ? void 0 : _element$intitule_lig2.name) == "Nouvelles lignes") {
          rev_m += Number(String(element.revenu_mensuel).replace(/\s+/g, ""));
          v_p += Number(String(element.valeur_patrimoine).replace(/\s+/g, ""));
        } else {
          rev_m += Number(String(element.revenu_mensuel).replace(/\s+/g, ""));
          v_p += Number(String(element.valeur_patrimoine).replace(/\s+/g, ""));
        }
      });
      this.som_cautionnement_revenu_moyen = rev_m;
      this.som_cautionnement_valeur_patrimoine = v_p;
      this.nl_som_cautionnement_revenu_moyen = rev_m;
      this.nl_som_cautionnement_valeur_patrimoine = v_p;

      // return via
    },
    somCautionHypothecaireValeurConsidere: function somCautionHypothecaireValeurConsidere() {
      var _this$dossier_credit6;
      var caution_hypothecaires = (_this$dossier_credit6 = this.dossier_credit) === null || _this$dossier_credit6 === void 0 || (_this$dossier_credit6 = _this$dossier_credit6.cred_pub_tb_15) === null || _this$dossier_credit6 === void 0 ? void 0 : _this$dossier_credit6.caution_hypothecaires;
      var valeur_m = 0;
      var valeur_c = 0;
      caution_hypothecaires === null || caution_hypothecaires === void 0 || caution_hypothecaires.forEach(function (element) {
        var _element$intitule_lig3;
        if ((element === null || element === void 0 || (_element$intitule_lig3 = element.intitule_ligne) === null || _element$intitule_lig3 === void 0 ? void 0 : _element$intitule_lig3.name) == "Nouvelles lignes") {
          valeur_m += Number(String(element.valeur_marchande).replace(/\s+/g, ""));
          valeur_c += Number(String(element.valeur_considere).replace(/\s+/g, ""));
        } else {
          valeur_m += Number(String(element.valeur_marchande).replace(/\s+/g, ""));
          valeur_c += Number(String(element.valeur_considere).replace(/\s+/g, ""));
        }
      });
      this.som_caution_hypothecaire_valeur_marchande = valeur_m;
      this.som_caution_hypothecaire_valeur_considere = valeur_c;
      this.nl_som_caution_hypothecaire_valeur_marchande = valeur_m;
      this.nl_som_caution_hypothecaire_valeur_considere = valeur_c;
      // return via
    },
    somProtectionFinanciereValeurMarchande: function somProtectionFinanciereValeurMarchande() {
      var _this$dossier_credit7;
      var protection_financieres = (_this$dossier_credit7 = this.dossier_credit) === null || _this$dossier_credit7 === void 0 || (_this$dossier_credit7 = _this$dossier_credit7.cred_pub_tb_15) === null || _this$dossier_credit7 === void 0 ? void 0 : _this$dossier_credit7.protection_financieres;
      var valeur_m = 0;
      var valeur_c = 0;
      protection_financieres === null || protection_financieres === void 0 || protection_financieres.forEach(function (element) {
        var _element$intitule_lig4;
        if ((element === null || element === void 0 || (_element$intitule_lig4 = element.intitule_ligne) === null || _element$intitule_lig4 === void 0 ? void 0 : _element$intitule_lig4.name) == "Nouvelles lignes") {
          valeur_m += Number(String(element.valeur_marchande).replace(/\s+/g, ""));
          valeur_c += Number(String(element.valeur_considere).replace(/\s+/g, ""));
        } else {
          valeur_m += Number(String(element.valeur_marchande).replace(/\s+/g, ""));
          valeur_c += Number(String(element.valeur_considere).replace(/\s+/g, ""));
        }
      });
      this.som_protection_financiere_valeur_marchande = valeur_m;
      this.som_protection_financiere_valeur_considere = valeur_c;
      this.nl_som_protection_financiere_valeur_marchande = valeur_m;
      this.nl_som_protection_financiere_valeur_considere = valeur_c;
      // return via
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
    convertNumber: function convertNumber(valeur) {
      return Number(String(valeur).replace(/\s+/g, ""));
    },
    arrondiA2Chiffre: function arrondiA2Chiffre(x) {
      var value = Math.round(x * 100) / 100;
      return value;
    },
    getStatusLabel: function getStatusLabel(line) {
      var status = line === null || line === void 0 ? void 0 : line.statut;
      if (status == 'Renouvellement') {
        // console.log('line', line);
        if (line.type === "RI") return "Renouvellement à l'identique";
        if (line.type === "RH") return "Renouvellement à la hausse";
        if (line.type === "RB") return "Renouvellement à la baisse";
      }
      return status;
    },
    formatAmount: function formatAmount(x) {
      return x === null || x === void 0 ? void 0 : x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    },
    formatMonth: function formatMonth(value) {
      return value === null || value === void 0 ? void 0 : value.toString().split('-').reverse().join('/');
    },
    reformatOldLinesAndGaranties: function reformatOldLinesAndGaranties() {
      var _this$f8Data,
        _this3 = this;
      if (!['', null, undefined].includes((_this$f8Data = this.f8Data) === null || _this$f8Data === void 0 ? void 0 : _this$f8Data.oldLines)) {
        var _this$f8Data2, _this$f8Data3;
        (_this$f8Data2 = this.f8Data) === null || _this$f8Data2 === void 0 || (_this$f8Data2 = _this$f8Data2.oldLines) === null || _this$f8Data2 === void 0 || _this$f8Data2.forEach(function (oldLine) {
          var _this3$f8Data;
          var ids = ((_this3$f8Data = _this3.f8Data) === null || _this3$f8Data === void 0 || (_this3$f8Data = _this3$f8Data.oldLinesgarantiesGenerales) === null || _this3$f8Data === void 0 || (_this3$f8Data = _this3$f8Data.filter(function (oldLinesgarantie) {
            return (oldLinesgarantie === null || oldLinesgarantie === void 0 ? void 0 : oldLinesgarantie.parentId.includes(oldLine.id)) && !["", null, undefined].includes(oldLinesgarantie.name_garantie);
          })) === null || _this3$f8Data === void 0 ? void 0 : _this3$f8Data.map(function (oldLinesgarantie) {
            return oldLinesgarantie.id;
          })) || [];
          oldLine["garanties_general_id"] = ids;
        });
        this.groupOldLinesByGaranties((_this$f8Data3 = this.f8Data) === null || _this$f8Data3 === void 0 ? void 0 : _this$f8Data3.oldLines);
      }
    },
    reformatNewLinesAndGaranties: function reformatNewLinesAndGaranties() {
      var _this$f8Data4,
        _this4 = this;
      if (!['', null, undefined].includes((_this$f8Data4 = this.f8Data) === null || _this$f8Data4 === void 0 ? void 0 : _this$f8Data4.newLines)) {
        var _this$f8Data5, _this$f8Data6;
        (_this$f8Data5 = this.f8Data) === null || _this$f8Data5 === void 0 || (_this$f8Data5 = _this$f8Data5.newLines) === null || _this$f8Data5 === void 0 || _this$f8Data5.forEach(function (newLine) {
          var _this4$f8Data;
          var new_ids = ((_this4$f8Data = _this4.f8Data) === null || _this4$f8Data === void 0 || (_this4$f8Data = _this4$f8Data.newLinesgarantiesGenerales) === null || _this4$f8Data === void 0 || (_this4$f8Data = _this4$f8Data.filter(function (newLinesgarantie) {
            return (newLinesgarantie === null || newLinesgarantie === void 0 ? void 0 : newLinesgarantie.parentId.includes(newLine.id)) && !["", null, undefined].includes(newLinesgarantie.name_garantie);
          })) === null || _this4$f8Data === void 0 ? void 0 : _this4$f8Data.map(function (newLinesgarantie) {
            return newLinesgarantie.id;
          })) || [];
          newLine["garanties_general_id"] = new_ids;
        });
        this.groupNewLinesByGaranties((_this$f8Data6 = this.f8Data) === null || _this$f8Data6 === void 0 ? void 0 : _this$f8Data6.newLines);
      }
    },
    groupNewLinesByGaranties: function groupNewLinesByGaranties(data) {
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
    },
    groupOldLinesByGaranties: function groupOldLinesByGaranties(data) {
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
    },
    deleteDuplicate: function deleteDuplicate(data, idParent) {
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
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/contre_analyse_filiale/fiche_decision_crcca_ca/DC-DESC3.vue?vue&type=template&id=c20afec6&scoped=true":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/contre_analyse_filiale/fiche_decision_crcca_ca/DC-DESC3.vue?vue&type=template&id=c20afec6&scoped=true ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm$data_tb, _vm$data_tb2, _vm$data_tb3, _vm$data_tb4, _vm$data_tb5, _vm$data_tb6, _vm$data_tb7, _vm$data_tb8, _vm$data_tb9, _vm$data_tb0, _vm$data_tb1, _vm$data_tb10, _vm$data_tb11, _vm$data_tb12, _vm$data_tb13, _vm$data_tb14, _vm$data_tb15, _vm$data_tb16, _vm$data_tb17, _vm$data_tb18, _vm$data_tb19, _vm$data_tb19003_othe, _vm$data_tb19003_othe2, _vm$data_tb19003_othe3, _vm$data_tb19003_othe4, _vm$data_tb19003_othe5, _vm$data_tb19003_othe6, _vm$data_tb19003_othe7, _vm$data_tb19003_othe8, _vm$data_tb19003_othe9, _vm$data_tb19003_othe0, _vm$data_tb19003_othe1, _vm$data_tb19003_othe11, _vm$data_tb19003_othe12, _vm$data_tb19003_othe13;
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {}, [_c("div", {
    staticClass: "row justify-content-center"
  }, [_vm.dossier_credit.tbs_in_use.includes("tb19003") ? _c("div", {
    staticClass: "row",
    staticStyle: {
      "padding-top": ""
    }
  }, [_c("div", {
    staticClass: "head-memorandum-title mb-4",
    staticStyle: {
      "text-align": "center"
    }
  }, [_vm._v("\n              SYNTHESE DES ANCIENNES ET NOUVELLES LIGNES")]), _vm._v(" "), _c("br"), _vm._v(" "), _c("h6", {
    staticClass: "text-success"
  }, [_vm._v("B1 Anciennes lignes (en Millions)")]), _vm._v(" "), _c("br"), _c("br"), _vm._v(" "), _c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-bordered mb-2 mt-2"
  }, [_vm._m(0), _vm._v(" "), _c("tbody", [_c("tr", [_c("td", {
    staticClass: "fw-bold sticky sticky-left"
  }, [_vm._v("Lignes")]), _vm._v(" "), _c("td", {
    staticClass: "fw-bold sticky sticky-left-second"
  }, [_vm._v("Autorisation")]), _vm._v(" "), (_vm$data_tb = _vm.data_tb19003) !== null && _vm$data_tb !== void 0 && _vm$data_tb.encoursAu ? _c("td", {
    staticClass: "fw-bold"
  }, [_c("span", [_vm._v("Encours au")]), _vm._v("\n                        " + _vm._s(_vm.formatDate((_vm$data_tb2 = _vm.data_tb19003) === null || _vm$data_tb2 === void 0 ? void 0 : _vm$data_tb2.encoursAu)) + "\n                        ")]) : _c("td", {
    staticClass: "fw-bold"
  }, [_vm._v("Encours au")]), _vm._v(" "), _c("td", {
    staticClass: "fw-bold"
  }, [_vm._v("Taux")]), _vm._v(" "), _c("td", {
    staticClass: "fw-bold"
  }, [_vm._v("Durée")]), _vm._v(" "), _c("td", {
    staticClass: "fw-bold"
  }, [_vm._v("Echéance")]), _vm._v(" "), _c("td", {
    staticClass: "fw-bold"
  }, [_vm._v("Garanties / covenants spécifiques proposées")]), _vm._v(" "), _c("td", {
    staticClass: "fw-bold"
  }, [_vm._v("Garanties / covenants générales proposées")])]), _vm._v(" "), _vm._l(_vm.regroupOldLignes, function (groupOldLigne, groupIndex) {
    return _vm._l(groupOldLigne, function (oldLigne, lineIndex) {
      var _vm$f8Data;
      return _c("tr", {
        key: groupIndex + "-" + lineIndex + "el"
      }, [_c("td", {
        staticClass: "sticky sticky-left"
      }, [_vm._v(_vm._s(oldLigne === null || oldLigne === void 0 ? void 0 : oldLigne.ligne))]), _vm._v(" "), _c("td", {
        staticClass: "sticky sticky-left-second"
      }, [_vm._v(_vm._s(oldLigne === null || oldLigne === void 0 ? void 0 : oldLigne.autorisation))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(oldLigne === null || oldLigne === void 0 ? void 0 : oldLigne.encours))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(oldLigne === null || oldLigne === void 0 ? void 0 : oldLigne.taux))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(oldLigne === null || oldLigne === void 0 ? void 0 : oldLigne.duree))]), _vm._v(" "), oldLigne !== null && oldLigne !== void 0 && oldLigne.echeance ? _c("td", [_vm._v(_vm._s(_vm.formatDate(oldLigne.echeance)))]) : _c("td"), _vm._v(" "), _c("td", _vm._l(oldLigne === null || oldLigne === void 0 ? void 0 : oldLigne.garanties, function (surete, sureteIndex) {
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
      }, _vm._l(_vm.deleteDuplicate((_vm$f8Data = _vm.f8Data) === null || _vm$f8Data === void 0 ? void 0 : _vm$f8Data.oldLinesgarantiesGenerales, groupOldLigne[0].id), function (surete, index) {
        var _surete$name_garantie;
        return _c("ul", {
          key: "generales_" + groupIndex + "-" + index
        }, [surete.parentId.includes(groupOldLigne[0].id) && !["", null, undefined].includes(surete === null || surete === void 0 || (_surete$name_garantie = surete.name_garantie) === null || _surete$name_garantie === void 0 ? void 0 : _surete$name_garantie.trim()) ? _c("li", [_vm._v("\n                                            - " + _vm._s(surete === null || surete === void 0 ? void 0 : surete.name_garantie.replace(/^-\s*/, "")) + "\n                                        ")]) : _vm._e()]);
      }), 0)]) : _vm._e()]);
    });
  }), _vm._v(" "), _c("tr", [_c("th", {
    attrs: {
      colspan: "2"
    }
  }, [_vm._v("S/Total lignes existantes")]), _vm._v(" "), _c("th", [_vm._v(_vm._s(_vm.formatAmount(((_vm$data_tb3 = _vm.data_tb19003) === null || _vm$data_tb3 === void 0 || (_vm$data_tb3 = _vm$data_tb3.totaux) === null || _vm$data_tb3 === void 0 ? void 0 : _vm$data_tb3.st_caisse_ligne_existantes_autorisation) + ((_vm$data_tb4 = _vm.data_tb19003) === null || _vm$data_tb4 === void 0 || (_vm$data_tb4 = _vm$data_tb4.totaux) === null || _vm$data_tb4 === void 0 ? void 0 : _vm$data_tb4.st_signature_ligne_existantes_autorisation))))]), _vm._v(" "), _c("th", [_vm._v(_vm._s(_vm.formatAmount(((_vm$data_tb5 = _vm.data_tb19003) === null || _vm$data_tb5 === void 0 || (_vm$data_tb5 = _vm$data_tb5.totaux) === null || _vm$data_tb5 === void 0 ? void 0 : _vm$data_tb5.st_caisse_ligne_existantes_encours) + ((_vm$data_tb6 = _vm.data_tb19003) === null || _vm$data_tb6 === void 0 || (_vm$data_tb6 = _vm$data_tb6.totaux) === null || _vm$data_tb6 === void 0 ? void 0 : _vm$data_tb6.st_signature_ligne_existantes_encours))) + "\n                        ")]), _vm._v(" "), _c("th", {
    attrs: {
      colspan: "5"
    }
  })])], 2)])]), _vm._v(" "), _c("table", {
    staticClass: "table table-bordered mb-2 mt-3"
  }, [_vm._m(1), _vm._v(" "), _c("tbody", [_c("tr", [_c("td", {
    staticClass: "border",
    domProps: {
      innerHTML: _vm._s((_vm$data_tb7 = _vm.data_tb19003) === null || _vm$data_tb7 === void 0 ? void 0 : _vm$data_tb7.oldLinesComment)
    }
  })])])]), _vm._v(" "), _c("hr", {
    staticClass: "mt-5"
  }), _vm._v(" "), _c("br"), _vm._v(" "), _c("h6", {
    staticClass: "text-success"
  }, [_vm._v("B2 Nouvelles lignes (objet de la présente demande)")]), _vm._v(" "), _c("br"), _c("br"), _vm._v(" "), _c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-bordered mb-2 mt-2"
  }, [_vm._m(2), _vm._v(" "), _c("tbody", [_c("tr", [_c("td", {
    staticClass: "fw-bold sticky sticky-left"
  }, [_vm._v("Lignes")]), _vm._v(" "), _c("td", {
    staticClass: "fw-bold sticky sticky-left-second"
  }, [_vm._v("Status")]), _vm._v(" "), _c("td", {
    staticClass: "fw-bold"
  }, [_vm._v("Montant")]), _vm._v(" "), _c("td", {
    staticClass: "fw-bold"
  }, [_vm._v("Proposition")]), _vm._v(" "), (_vm$data_tb8 = _vm.data_tb19003) !== null && _vm$data_tb8 !== void 0 && _vm$data_tb8.encoursAu ? _c("td", {
    staticClass: "fw-bold"
  }, [_c("span", [_vm._v("Encours au")]), _vm._v("\n                        " + _vm._s(_vm.formatDate((_vm$data_tb9 = _vm.data_tb19003) === null || _vm$data_tb9 === void 0 ? void 0 : _vm$data_tb9.encoursAu)) + "\n                        ")]) : _c("td", {
    staticClass: "fw-bold"
  }, [_vm._v("Encours au")]), _vm._v(" "), _c("td", {
    staticClass: "fw-bold"
  }, [_vm._v("Taux")]), _vm._v(" "), _c("td", {
    staticClass: "fw-bold"
  }, [_vm._v("Durée")]), _vm._v(" "), _c("td", {
    staticClass: "fw-bold"
  }, [_vm._v("Echéance")]), _vm._v(" "), _c("td", {
    staticClass: "fw-bold"
  }, [_vm._v("Garanties / covenants spécifiques proposées")]), _vm._v(" "), _c("td", {
    staticClass: "fw-bold"
  }, [_vm._v("Garanties / covenants générales proposées")])]), _vm._v(" "), _vm._l(_vm.regroupNewLignes, function (groupNewLigne, groupIndex) {
    return _vm._l(groupNewLigne, function (line, newlineIndex) {
      var _vm$f8Data2;
      return _c("tr", {
        key: "line_" + groupIndex + "-" + newlineIndex
      }, [_c("td", {
        staticClass: "sticky sticky-left"
      }, [_vm._v(_vm._s(line.ligne))]), _vm._v(" "), _c("td", {
        staticClass: "sticky sticky-left-second"
      }, [_vm._v(_vm._s(_vm.getStatusLabel(line)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(line.montant))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(line.proposition))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(line.encours))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(line.taux))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(line.duree))]), _vm._v(" "), line !== null && line !== void 0 && line.echeance ? _c("td", [_vm._v(_vm._s(_vm.formatDate(line === null || line === void 0 ? void 0 : line.echeance)))]) : _c("td"), _vm._v(" "), _c("td", _vm._l(line === null || line === void 0 ? void 0 : line.garanties, function (surete, sureteIndex) {
        return _c("div", {
          key: "surete_" + groupIndex + "-" + sureteIndex,
          staticStyle: {
            width: "400px"
          }
        }, _vm._l(surete, function (sure, sureIndex) {
          var _sure$state_2, _sure$name_garantie2;
          return _c("ul", {
            key: "sure_" + groupIndex + "-" + sureIndex
          }, [(sure === null || sure === void 0 || (_sure$state_2 = sure.state_) === null || _sure$state_2 === void 0 ? void 0 : _sure$state_2.has_speOr_spe) == "specifique" && (sure === null || sure === void 0 || (_sure$name_garantie2 = sure.name_garantie) === null || _sure$name_garantie2 === void 0 ? void 0 : _sure$name_garantie2.trim()) != "" ? _c("li", [_vm._v("\n                                            - " + _vm._s(sure === null || sure === void 0 ? void 0 : sure.name_garantie) + "\n                                        ")]) : _vm._e()]);
        }), 0);
      }), 0), _vm._v(" "), newlineIndex === 0 ? _c("td", {
        attrs: {
          rowspan: groupNewLigne.length
        }
      }, [_c("div", {
        staticStyle: {
          width: "400px"
        }
      }, _vm._l(_vm.deleteDuplicate((_vm$f8Data2 = _vm.f8Data) === null || _vm$f8Data2 === void 0 ? void 0 : _vm$f8Data2.newLinesgarantiesGenerales, groupNewLigne[0].id), function (surete, sureteIndex) {
        var _surete$name_garantie2;
        return _c("ul", {
          key: "generales_" + groupIndex + "-" + sureteIndex
        }, [surete.parentId.includes(groupNewLigne[0].id) && !["", null, undefined].includes(surete === null || surete === void 0 || (_surete$name_garantie2 = surete.name_garantie) === null || _surete$name_garantie2 === void 0 ? void 0 : _surete$name_garantie2.trim()) ? _c("li", [_vm._v("\n                                            - " + _vm._s(surete === null || surete === void 0 ? void 0 : surete.name_garantie.replace(/^-\s*/, "")) + "\n                                        ")]) : _vm._e()]);
      }), 0)]) : _vm._e()]);
    });
  }), _vm._v(" "), _c("tr", [_c("th", {
    attrs: {
      colspan: "3"
    }
  }, [_vm._v("S/Total concours sollicités")]), _vm._v(" "), _c("th", [_vm._v(_vm._s(_vm.formatAmount(((_vm$data_tb0 = _vm.data_tb19003) === null || _vm$data_tb0 === void 0 || (_vm$data_tb0 = _vm$data_tb0.totaux) === null || _vm$data_tb0 === void 0 ? void 0 : _vm$data_tb0.st_caisse_nouvelles_lignes_montant) + ((_vm$data_tb1 = _vm.data_tb19003) === null || _vm$data_tb1 === void 0 || (_vm$data_tb1 = _vm$data_tb1.totaux) === null || _vm$data_tb1 === void 0 ? void 0 : _vm$data_tb1.st_signature_nouvelles_lignes_montant))))]), _vm._v(" "), _c("th", [_vm._v(_vm._s(_vm.formatAmount(((_vm$data_tb10 = _vm.data_tb19003) === null || _vm$data_tb10 === void 0 || (_vm$data_tb10 = _vm$data_tb10.totaux) === null || _vm$data_tb10 === void 0 ? void 0 : _vm$data_tb10.st_caisse_nouvelles_lignes_proposition) + ((_vm$data_tb11 = _vm.data_tb19003) === null || _vm$data_tb11 === void 0 || (_vm$data_tb11 = _vm$data_tb11.totaux) === null || _vm$data_tb11 === void 0 ? void 0 : _vm$data_tb11.st_signature_nouvelles_lignes_proposition))) + "\n                        ")]), _vm._v(" "), _c("th", {
    attrs: {
      colspan: "6"
    }
  })])], 2)])]), _vm._v(" "), _c("table", {
    staticClass: "table table-bordered mb-0"
  }, [_vm._m(3), _vm._v(" "), _c("table", {
    staticClass: "table table-bordered mb-3"
  }, [_c("tbody", {
    staticStyle: {
      "font-size": "0.9rem"
    }
  }, [_c("tr", [_c("td", [_c("span", {
    domProps: {
      innerHTML: _vm._s((_vm$data_tb12 = _vm.data_tb19003) === null || _vm$data_tb12 === void 0 ? void 0 : _vm$data_tb12.newLinesComment)
    }
  })])])])])]), _vm._v(" "), _c("br"), _vm._v(" "), _c("br"), _vm._v(" "), _c("h6", {
    staticClass: "text-success"
  }, [_vm._v("B3 Situation après accord")]), _vm._v(" "), _c("br"), _c("br"), _vm._v(" "), _c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-bordered mb-2 mt-2"
  }, [_vm._m(4), _vm._v(" "), _c("tbody", [_c("tr", [_c("td", {
    staticClass: "fw-bold"
  }, [_vm._v("Lignes")]), _vm._v(" "), _c("td", {
    staticClass: "fw-bold"
  }, [_vm._v("Status")]), _vm._v(" "), _c("td", {
    staticClass: "fw-bold"
  }, [_vm._v("Montant")]), _vm._v(" "), _c("td", {
    staticClass: "fw-bold"
  }, [_vm._v("Proposition")]), _vm._v(" "), (_vm$data_tb13 = _vm.data_tb19003) !== null && _vm$data_tb13 !== void 0 && _vm$data_tb13.encoursAu ? _c("td", {
    staticClass: "fw-bold"
  }, [_c("span", [_vm._v("Encours au")]), _vm._v("\n                        " + _vm._s(_vm.formatDate((_vm$data_tb14 = _vm.data_tb19003) === null || _vm$data_tb14 === void 0 ? void 0 : _vm$data_tb14.encoursAu)) + "\n                        ")]) : _c("td", {
    staticClass: "fw-bold"
  }, [_vm._v("Encours au")]), _vm._v(" "), _c("td", {
    staticClass: "fw-bold"
  }, [_vm._v("Taux")]), _vm._v(" "), _c("td", {
    staticClass: "fw-bold"
  }, [_vm._v("Durée")]), _vm._v(" "), _c("td", {
    staticClass: "fw-bold"
  }, [_vm._v("Echéance")]), _vm._v(" "), _c("td", {
    staticClass: "fw-bold"
  }, [_vm._v("Garanties / covenants spécifiques proposées")]), _vm._v(" "), _c("td", {
    staticClass: "fw-bold"
  }, [_vm._v("Garanties / covenants générales proposées")])]), _vm._v(" "), _vm._l(_vm.regroupNewLignes, function (groupNewLigne, groupIndex) {
    return _vm._l(groupNewLigne, function (line, newlineIndex) {
      var _vm$f8Data3;
      return _c("tr", {
        key: "line_" + groupIndex + "-" + newlineIndex
      }, [_c("td", {
        staticClass: "sticky sticky-left"
      }, [_vm._v(_vm._s(line.ligne))]), _vm._v(" "), _c("td", {
        staticClass: "sticky sticky-left-second"
      }, [_vm._v(_vm._s(_vm.getStatusLabel(line)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(line.montant))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(line.proposition))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(line.encours))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(line.taux))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(line.duree))]), _vm._v(" "), line !== null && line !== void 0 && line.echeance ? _c("td", [_vm._v(_vm._s(_vm.formatDate(line === null || line === void 0 ? void 0 : line.echeance)))]) : _c("td"), _vm._v(" "), _c("td", _vm._l(line === null || line === void 0 ? void 0 : line.garanties, function (surete, sureteIndex) {
        return _c("div", {
          key: "surete_" + groupIndex + "-" + sureteIndex,
          staticStyle: {
            width: "400px"
          }
        }, _vm._l(surete, function (sure, sureIndex) {
          var _sure$state_3, _sure$name_garantie3;
          return _c("ul", {
            key: "sure_" + groupIndex + "-" + sureIndex
          }, [(sure === null || sure === void 0 || (_sure$state_3 = sure.state_) === null || _sure$state_3 === void 0 ? void 0 : _sure$state_3.has_speOr_spe) == "specifique" && (sure === null || sure === void 0 || (_sure$name_garantie3 = sure.name_garantie) === null || _sure$name_garantie3 === void 0 ? void 0 : _sure$name_garantie3.trim()) != "" ? _c("li", [_vm._v("\n                                            - " + _vm._s(sure === null || sure === void 0 ? void 0 : sure.name_garantie) + "\n                                        ")]) : _vm._e()]);
        }), 0);
      }), 0), _vm._v(" "), newlineIndex === 0 ? _c("td", {
        attrs: {
          rowspan: groupNewLigne.length
        }
      }, [_c("div", {
        staticStyle: {
          width: "400px"
        }
      }, _vm._l((_vm$f8Data3 = _vm.f8Data) === null || _vm$f8Data3 === void 0 ? void 0 : _vm$f8Data3.newLinesgarantiesGenerales, function (surete, sureteIndex) {
        var _surete$name_garantie3;
        return _c("ul", {
          key: "generales_" + groupIndex + "-" + sureteIndex
        }, [surete.parentId.includes(groupNewLigne[0].id) && !["", null, undefined].includes(surete === null || surete === void 0 || (_surete$name_garantie3 = surete.name_garantie) === null || _surete$name_garantie3 === void 0 ? void 0 : _surete$name_garantie3.trim()) ? _c("li", [_vm._v("\n                                            - " + _vm._s(surete === null || surete === void 0 ? void 0 : surete.name_garantie) + "\n                                        ")]) : _vm._e()]);
      }), 0)]) : _vm._e()]);
    });
  }), _vm._v(" "), _c("tr", [_c("th", {
    attrs: {
      colspan: "3"
    }
  }, [_vm._v("S/Total concours sollicités")]), _vm._v(" "), _c("th", [_vm._v(_vm._s(_vm.formatAmount(((_vm$data_tb15 = _vm.data_tb19003) === null || _vm$data_tb15 === void 0 || (_vm$data_tb15 = _vm$data_tb15.totaux) === null || _vm$data_tb15 === void 0 ? void 0 : _vm$data_tb15.st_caisse_nouvelles_lignes_montant) + ((_vm$data_tb16 = _vm.data_tb19003) === null || _vm$data_tb16 === void 0 || (_vm$data_tb16 = _vm$data_tb16.totaux) === null || _vm$data_tb16 === void 0 ? void 0 : _vm$data_tb16.st_signature_nouvelles_lignes_montant))))]), _vm._v(" "), _c("th", [_vm._v(_vm._s(_vm.formatAmount(((_vm$data_tb17 = _vm.data_tb19003) === null || _vm$data_tb17 === void 0 || (_vm$data_tb17 = _vm$data_tb17.totaux) === null || _vm$data_tb17 === void 0 ? void 0 : _vm$data_tb17.st_caisse_nouvelles_lignes_proposition) + ((_vm$data_tb18 = _vm.data_tb19003) === null || _vm$data_tb18 === void 0 || (_vm$data_tb18 = _vm$data_tb18.totaux) === null || _vm$data_tb18 === void 0 ? void 0 : _vm$data_tb18.st_signature_nouvelles_lignes_proposition))) + "\n                        ")]), _vm._v(" "), _c("th", {
    attrs: {
      colspan: "6"
    }
  })])], 2)])]), _vm._v(" "), _c("table", {
    staticClass: "table table-bordered mb-0"
  }, [_vm._m(5), _vm._v(" "), _c("table", {
    staticClass: "table table-bordered mb-3"
  }, [_c("tbody", {
    staticStyle: {
      "font-size": "0.9rem"
    }
  }, [_c("tr", [_c("td", [_c("span", {
    domProps: {
      innerHTML: _vm._s((_vm$data_tb19 = _vm.data_tb19003) === null || _vm$data_tb19 === void 0 ? void 0 : _vm$data_tb19.comment_situation_apres_accord)
    }
  })])])])])]), _vm._v(" "), _c("br"), _vm._v(" "), _c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: ((_vm$data_tb19003_othe = _vm.data_tb19003_other) === null || _vm$data_tb19003_othe === void 0 ? void 0 : _vm$data_tb19003_othe.mode_calcul) == "A",
      expression: "data_tb19003_other?.mode_calcul == 'A'"
    }],
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-bordered"
  }, [_vm._m(6), _vm._v(" "), _c("tbody", [_vm._m(7), _vm._v(" "), _vm._l((_vm$data_tb19003_othe2 = _vm.data_tb19003_other) === null || _vm$data_tb19003_othe2 === void 0 ? void 0 : _vm$data_tb19003_othe2.conso_fps, function (cp, index) {
    return _c("tr", {
      key: index
    }, [_c("td", [_vm._v("\n                            " + _vm._s(cp.libelle) + "\n                        ")]), _vm._v(" "), _c("td", [_vm._v("\n                            " + _vm._s(cp.bilan) + "\n                        ")]), _vm._v(" "), _c("td", [_vm._v("\n                            " + _vm._s(cp.hor_bilan) + "\n                            \n                        ")]), _vm._v(" "), _c("td", [_vm._v("\n                            " + _vm._s(cp.fcec) + "\n                            \n                        ")]), _vm._v(" "), _c("td", [_vm._v("\n                            " + _vm._s(cp.hb_apres_fcec) + "\n                           \n                        ")]), _vm._v(" "), _c("td", [_vm._v(_vm._s(cp.total_exposition) + "\n                           \n                        ")]), _vm._v(" "), _c("td", [_vm._v("\n                            " + _vm._s(cp.tarc) + "\n                           \n                        ")]), _vm._v(" "), _c("td", [_vm._v("\n                            " + _vm._s(cp.pond) + "\n                            \n                        ")]), _vm._v(" "), _c("td", [_vm._v("\n                            " + _vm._s(cp.apr) + "\n                        ")])]);
  }), _vm._v(" "), _c("tr", [_c("td", [_vm._v("\n                                TOTAL\n                            ")]), _vm._v(" "), _c("td", [_vm._v("\n                                " + _vm._s((_vm$data_tb19003_othe3 = _vm.data_tb19003_other) === null || _vm$data_tb19003_othe3 === void 0 ? void 0 : _vm$data_tb19003_othe3.total_bilan_cmt_cct) + "\n\n                            ")]), _vm._v(" "), _c("td", [_vm._v("\n                                " + _vm._s((_vm$data_tb19003_othe4 = _vm.data_tb19003_other) === null || _vm$data_tb19003_othe4 === void 0 ? void 0 : _vm$data_tb19003_othe4.total_hor_bilan_cmt_cct) + "\n\n                            ")]), _vm._v(" "), _c("td", [_vm._v("\n                                " + _vm._s((_vm$data_tb19003_othe5 = _vm.data_tb19003_other) === null || _vm$data_tb19003_othe5 === void 0 ? void 0 : _vm$data_tb19003_othe5.total_fcec_cmt_cct) + "\n\n                            ")]), _vm._v(" "), _c("td", [_vm._v("\n                                " + _vm._s((_vm$data_tb19003_othe6 = _vm.data_tb19003_other) === null || _vm$data_tb19003_othe6 === void 0 ? void 0 : _vm$data_tb19003_othe6.total_hb_apres_fcec_cmt_cct) + "\n\n                            ")]), _vm._v(" "), _c("td", [_vm._v("\n                                " + _vm._s((_vm$data_tb19003_othe7 = _vm.data_tb19003_other) === null || _vm$data_tb19003_othe7 === void 0 ? void 0 : _vm$data_tb19003_othe7.total_total_exposition_cmt_cct) + "\n\n                            ")]), _vm._v(" "), _c("td", [_vm._v("\n                                " + _vm._s((_vm$data_tb19003_othe8 = _vm.data_tb19003_other) === null || _vm$data_tb19003_othe8 === void 0 ? void 0 : _vm$data_tb19003_othe8.total_tarc_cmt_cct) + "\n\n                            ")]), _vm._v(" "), _c("td", [_vm._v("\n                                " + _vm._s((_vm$data_tb19003_othe9 = _vm.data_tb19003_other) === null || _vm$data_tb19003_othe9 === void 0 ? void 0 : _vm$data_tb19003_othe9.total_pond_cmt_cct) + "\n\n                            ")]), _vm._v(" "), _c("td", [_vm._v("\n                                " + _vm._s((_vm$data_tb19003_othe0 = _vm.data_tb19003_other) === null || _vm$data_tb19003_othe0 === void 0 ? void 0 : _vm$data_tb19003_othe0.total_apr_cmt_cct) + "\n\n                            ")])])], 2)]), _vm._v(" "), _c("br"), _vm._v(" "), _c("table", {
    staticClass: "table table-bordered mb-1"
  }, [_c("tbody", _vm._l((_vm$data_tb19003_othe1 = _vm.data_tb19003_other) === null || _vm$data_tb19003_othe1 === void 0 ? void 0 : _vm$data_tb19003_othe1.conso_fond_propre_mode_auto, function (conso_fp_ma, i) {
    var _conso_fp_ma$montant, _vm$data_tb19003_othe10;
    return _c("tr", {
      key: i + "conso_auto_mode"
    }, [_c("td", [_c("label", {
      staticStyle: {
        width: "250px"
      }
    }, [_c("b", [_vm._v(_vm._s(conso_fp_ma.name))]), _c("span", {
      staticClass: "text-danger"
    }, [_vm._v("*")])])]), _vm._v(" "), _c("td", [_vm._v("\n                                " + _vm._s(_vm._f("formatNumber")((_conso_fp_ma$montant = conso_fp_ma.montant) === null || _conso_fp_ma$montant === void 0 ? void 0 : _conso_fp_ma$montant.toFixed(2))) + " | \n                                "), _c("label", [_c("b", [_vm._v(" (" + _vm._s((_vm$data_tb19003_othe10 = _vm.data_tb19003_other) === null || _vm$data_tb19003_othe10 === void 0 ? void 0 : _vm$data_tb19003_othe10.ligne_conso_fond_propre_pour) + " % du total général APR)")]), _c("span")])])]);
  }), 0)]), _vm._v(" "), _c("br")]), _vm._v(" "), _c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: ((_vm$data_tb19003_othe11 = _vm.data_tb19003_other) === null || _vm$data_tb19003_othe11 === void 0 ? void 0 : _vm$data_tb19003_othe11.mode_calcul) == "M",
      expression: "data_tb19003_other?.mode_calcul == 'M'"
    }],
    staticClass: "table-resposive"
  }, [_c("table", {
    staticClass: "table table-bordered mb-1"
  }, [_c("tbody", _vm._l((_vm$data_tb19003_othe12 = _vm.data_tb19003_other) === null || _vm$data_tb19003_othe12 === void 0 ? void 0 : _vm$data_tb19003_othe12.conso_fond_propre, function (conso_fp, index) {
    return _c("tr", {
      key: index
    }, [_c("td", [_c("label", [_c("b", [_vm._v(_vm._s(conso_fp.name))]), _c("span", {
      staticClass: "text-danger"
    }, [_vm._v("*")])])]), _vm._v(" "), _c("td", [_vm._v("\n                                " + _vm._s(_vm._f("formatNumber")(conso_fp.montant)) + "\n                            ")]), _vm._v(" "), _c("td", [Number(String(conso_fp.montant).replace(/\s+/g, "")) > 0 ? _c("div", {
      staticClass: "d-flex align-items-center"
    }, [_c("div", [conso_fp.files > 0 ? _c("span", {
      staticClass: "p-1 px-2 mx-2 text-nowrap",
      staticStyle: {
        "background-color": "rgb(44, 62, 80)",
        color: "white",
        "font-size": "13px",
        "border-radius": "5px",
        "margin-left": "0!important"
      }
    }, [_vm._v(_vm._s(conso_fp.files > 0 ? conso_fp.files + " fichier(s) uploadé(s)" : ""))]) : _vm._e()]), _vm._v(" "), conso_fp.name.trim() != "" ? _c("div", [_c("button", {
      staticClass: "btn shadow-md text-white",
      staticStyle: {
        cursor: "pointer",
        background: "#2c3e50",
        width: "26px",
        "font-size": "13px",
        padding: "1px"
      },
      attrs: {
        type: "button",
        name: "button",
        "data-toggle": "tooltip",
        title: "Cliquer ici pour uploader ou voir le(s) fichier(s)"
      },
      on: {
        click: function click($event) {
          return _vm.handleDoubleClickOrClick(index);
        }
      }
    }, [_c("i", {
      staticClass: "icofont-attachment"
    })])]) : _vm._e()]) : _c("div", {
      staticClass: "text-center text-danger"
    }, [_vm._v("\n                                    Aucun fichier(s) uploadé(s)\n                                ")])])]);
  }), 0)])]), _vm._v(" "), _c("br"), _vm._v(" "), _c("br"), _vm._v(" "), _c("table", {
    staticClass: "table table-bordered mb-4"
  }, [_vm._m(8), _vm._v(" "), _c("tbody", [_c("tr", [_c("td", [_c("span", {
    domProps: {
      innerHTML: _vm._s((_vm$data_tb19003_othe13 = _vm.data_tb19003_other) === null || _vm$data_tb19003_othe13 === void 0 ? void 0 : _vm$data_tb19003_othe13.comment_conso_fond_propre)
    }
  })])])])]), _vm._v(" "), _c("br")]) : _vm._e()])]);
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
  }, [_vm._v("LIGNE EXISTANTE\n                        ")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("th", {
    staticClass: "bg-grey border text-center"
  }, [_vm._v("Commentaire sur les lignes existantes")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", {
    staticClass: "bg-ed-primary"
  }, [_c("tr", [_c("th", {
    staticClass: "text-uppercase",
    staticStyle: {
      "text-align": "center"
    },
    attrs: {
      colspan: "11",
      scope: "row"
    }
  }, [_vm._v("Concours sollicités\n                        ")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("td", {
    staticClass: "text-center bg-grey"
  }, [_vm._v("Commentaire sur les nouvelles lignes\n                    ")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", {
    staticClass: "bg-ed-primary"
  }, [_c("tr", [_c("th", {
    staticClass: "text-uppercase",
    staticStyle: {
      "text-align": "center"
    },
    attrs: {
      colspan: "11",
      scope: "row"
    }
  }, [_vm._v("Concours sollicités\n                        ")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("td", {
    staticClass: "text-center bg-grey"
  }, [_vm._v("Commentaire sur la situation après accord\n                    ")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("th", {
    staticClass: "col-12 text-center py-2 m-0",
    attrs: {
      colspan: "9"
    }
  }, [_vm._v("\n                                CONSOMMATION EN FOND PROPRES DU MONTANT SOLLICITE\n                            ")])]), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "text-center text-uppercase",
    attrs: {
      rowspan: "2"
    }
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_c("b", [_vm._v("Nature de la facilité")])])]), _vm._v(" "), _c("th", {
    staticClass: "text-center text-uppercase"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_c("b", [_vm._v("Bilan")])])]), _vm._v(" "), _c("th", {
    staticClass: "text-center text-uppercase"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_c("b", [_vm._v("Hors Bilan")])])]), _vm._v(" "), _c("th", {
    staticClass: "text-center text-uppercase"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_c("b", [_vm._v("FCEC")])])]), _vm._v(" "), _c("th", {
    staticClass: "text-center text-uppercase"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_c("b", [_vm._v("HB après FCECC")])])]), _vm._v(" "), _c("th", {
    staticClass: "text-center text-uppercase"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_c("b", [_vm._v("Total Exposition avant TARC")])])]), _vm._v(" "), _c("th", {
    staticClass: "text-center text-uppercase"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_c("b", [_vm._v("TARC")])])]), _vm._v(" "), _c("th", {
    staticClass: "text-center text-uppercase"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_c("b", [_vm._v("Pond")])])]), _vm._v(" "), _c("th", {
    staticClass: "text-center text-uppercase"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_c("b", [_vm._v("APR")])])])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("tr", [_c("td", [_c("label", {
    attrs: {
      "for": ""
    }
  })]), _vm._v(" "), _c("td", {
    staticClass: "text-center"
  }, [_vm._v("\n                                bilan\n                            ")]), _vm._v(" "), _c("td", {
    staticClass: "text-center"
  }, [_vm._v("\n                                hors bilan\n                            ")]), _vm._v(" "), _c("td", {
    staticClass: "text-center"
  }, [_vm._v("\n                                c\n                            ")]), _vm._v(" "), _c("td", {
    staticClass: "text-center"
  }, [_vm._v("\n                                (d)=(b)*(c )\n                            ")]), _vm._v(" "), _c("td", {
    staticClass: "text-center"
  }, [_vm._v("\n                                (e)\n                            ")]), _vm._v(" "), _c("td", {
    staticClass: "text-center"
  }, [_vm._v("\n                                (f)\n                            ")]), _vm._v(" "), _c("td", {
    staticClass: "text-center"
  }, [_vm._v("\n                                (g)\n                            ")]), _vm._v(" "), _c("td", {
    staticClass: "text-center"
  }, [_vm._v("\n                                (h)=(e-f)*(g)\n                            ")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", {
    staticClass: "bg-ed-primary"
  }, [_c("tr", [_c("th", {
    staticClass: "col-12 text-center py-2 m-0"
  }, [_vm._v("\n                            commentaire\n                        ")])])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/contre_analyse_filiale/fiche_decision_crcca_ca/DC-DESC3.vue?vue&type=style&index=0&id=c20afec6&lang=css&scoped=true":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/contre_analyse_filiale/fiche_decision_crcca_ca/DC-DESC3.vue?vue&type=style&index=0&id=c20afec6&lang=css&scoped=true ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".bg-grey[data-v-c20afec6] {\r\n    background-color: #f4f3f3;\n}\nth[data-v-c20afec6] {\r\n    background: #f4f3f3 !important;\n}\n.head-memorandum-title[data-v-c20afec6] {\r\n    margin-top: 15px;\r\n    padding: 16px;\r\n    color: #fff;\r\n    font-weight: bold;\r\n    background-color: #34495e;\r\n    border: 2px solid #575759;\r\n    box-shadow: 1px 3px 4px #ddd;\r\n    font-size: 16px;\r\n    text-align: center;\r\n    text-transform: uppercase;\r\n    border-radius: 10px;\r\n    margin-bottom: 15px;\n}\ntable[data-v-c20afec6] {\r\n  border-collapse: collapse;\r\n  width: 100%;\n}\nth[data-v-c20afec6], td[data-v-c20afec6] {\r\n  padding: 8px;\r\n  border: 1px solid #ddd;\r\n  text-align: left;\n}\ntd.sticky[data-v-c20afec6], th.sticky[data-v-c20afec6] {\r\n  position: sticky;\r\n  background-color: white;\r\n  z-index: 1;\n}\ntd.sticky-left[data-v-c20afec6], th.sticky-left[data-v-c20afec6] {\r\n  left: 0;\n}\ntd.sticky-left-second[data-v-c20afec6], th.sticky-left-second[data-v-c20afec6] {\r\n  left: 0px; \r\n  background-color: #f4f3f3 !important;\n}\ntd.sticky-left[data-v-c20afec6], th.sticky-left[data-v-c20afec6]{\r\n    /* left: 240px; */\r\n    background-color: #f4f3f3 !important;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/contre_analyse_filiale/fiche_decision_crcca_ca/DC-DESC3.vue?vue&type=style&index=0&id=c20afec6&lang=css&scoped=true":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/contre_analyse_filiale/fiche_decision_crcca_ca/DC-DESC3.vue?vue&type=style&index=0&id=c20afec6&lang=css&scoped=true ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DC_DESC3_vue_vue_type_style_index_0_id_c20afec6_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DC-DESC3.vue?vue&type=style&index=0&id=c20afec6&lang=css&scoped=true */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/contre_analyse_filiale/fiche_decision_crcca_ca/DC-DESC3.vue?vue&type=style&index=0&id=c20afec6&lang=css&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DC_DESC3_vue_vue_type_style_index_0_id_c20afec6_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DC_DESC3_vue_vue_type_style_index_0_id_c20afec6_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/offview/bank/nsia/contre_analyse_filiale/fiche_decision_crcca_ca/DC-DESC3.vue":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/components/offview/bank/nsia/contre_analyse_filiale/fiche_decision_crcca_ca/DC-DESC3.vue ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DC_DESC3_vue_vue_type_template_id_c20afec6_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DC-DESC3.vue?vue&type=template&id=c20afec6&scoped=true */ "./resources/js/components/offview/bank/nsia/contre_analyse_filiale/fiche_decision_crcca_ca/DC-DESC3.vue?vue&type=template&id=c20afec6&scoped=true");
/* harmony import */ var _DC_DESC3_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DC-DESC3.vue?vue&type=script&lang=js */ "./resources/js/components/offview/bank/nsia/contre_analyse_filiale/fiche_decision_crcca_ca/DC-DESC3.vue?vue&type=script&lang=js");
/* harmony import */ var _DC_DESC3_vue_vue_type_style_index_0_id_c20afec6_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DC-DESC3.vue?vue&type=style&index=0&id=c20afec6&lang=css&scoped=true */ "./resources/js/components/offview/bank/nsia/contre_analyse_filiale/fiche_decision_crcca_ca/DC-DESC3.vue?vue&type=style&index=0&id=c20afec6&lang=css&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _DC_DESC3_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _DC_DESC3_vue_vue_type_template_id_c20afec6_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _DC_DESC3_vue_vue_type_template_id_c20afec6_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "c20afec6",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/offview/bank/nsia/contre_analyse_filiale/fiche_decision_crcca_ca/DC-DESC3.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/offview/bank/nsia/contre_analyse_filiale/fiche_decision_crcca_ca/DC-DESC3.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************!*\
  !*** ./resources/js/components/offview/bank/nsia/contre_analyse_filiale/fiche_decision_crcca_ca/DC-DESC3.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DC_DESC3_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DC-DESC3.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/contre_analyse_filiale/fiche_decision_crcca_ca/DC-DESC3.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DC_DESC3_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/offview/bank/nsia/contre_analyse_filiale/fiche_decision_crcca_ca/DC-DESC3.vue?vue&type=style&index=0&id=c20afec6&lang=css&scoped=true":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./resources/js/components/offview/bank/nsia/contre_analyse_filiale/fiche_decision_crcca_ca/DC-DESC3.vue?vue&type=style&index=0&id=c20afec6&lang=css&scoped=true ***!
  \***********************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DC_DESC3_vue_vue_type_style_index_0_id_c20afec6_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DC-DESC3.vue?vue&type=style&index=0&id=c20afec6&lang=css&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/contre_analyse_filiale/fiche_decision_crcca_ca/DC-DESC3.vue?vue&type=style&index=0&id=c20afec6&lang=css&scoped=true");


/***/ }),

/***/ "./resources/js/components/offview/bank/nsia/contre_analyse_filiale/fiche_decision_crcca_ca/DC-DESC3.vue?vue&type=template&id=c20afec6&scoped=true":
/*!*********************************************************************************************************************************************************!*\
  !*** ./resources/js/components/offview/bank/nsia/contre_analyse_filiale/fiche_decision_crcca_ca/DC-DESC3.vue?vue&type=template&id=c20afec6&scoped=true ***!
  \*********************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DC_DESC3_vue_vue_type_template_id_c20afec6_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DC_DESC3_vue_vue_type_template_id_c20afec6_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DC_DESC3_vue_vue_type_template_id_c20afec6_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DC-DESC3.vue?vue&type=template&id=c20afec6&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/contre_analyse_filiale/fiche_decision_crcca_ca/DC-DESC3.vue?vue&type=template&id=c20afec6&scoped=true");


/***/ })

}]);