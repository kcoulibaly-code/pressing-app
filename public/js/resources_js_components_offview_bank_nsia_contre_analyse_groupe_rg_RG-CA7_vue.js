"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_offview_bank_nsia_contre_analyse_groupe_rg_RG-CA7_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/contre_analyse_groupe/rg/RG-CA7.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/contre_analyse_groupe/rg/RG-CA7.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_connects_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../services/connects.service */ "./resources/js/services/connects.service.js");
/* harmony import */ var _services_nsia_f8_data_extractor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../services/nsia/f8-data-extractor */ "./resources/js/services/nsia/f8-data-extractor.js");
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
      data_tb19003_other: (_this$dossier_credit = this.dossier_credit) === null || _this$dossier_credit === void 0 ? void 0 : _this$dossier_credit.cred_pub_tb_40007,
      nl_hypotheques: false,
      nl_gages: false,
      nl_csd: false,
      nl_ch_pa: false,
      nl_pfe: false,
      nl_cp: false,
      // 
      // f8DataExtractor: F8DataExtractor,
      data_tb19003Extractor: _services_nsia_f8_data_extractor__WEBPACK_IMPORTED_MODULE_1__["default"],
      data_tb19003: null,
      f8Data: null,
      regroupNewLignes: null
    };
  },
  created: function created() {
    //this.sortInventaires()
  },
  mounted: function mounted() {
    var _this$dossier_credit2;
    var cred_pub_keys = this.determineCredPubTables((_this$dossier_credit2 = this.dossier_credit) === null || _this$dossier_credit2 === void 0 ? void 0 : _this$dossier_credit2.applied_templ_name);
    var crekey = "cred_pub_tb_40007";
    this.data_tb19003 = this.data_tb19003Extractor.getData(this.dossier_credit, crekey);

    // this.verifAllBoll();
    // this.somHypothequeValeurMarchande();
    // this.somGageValeurMarchande();
    // this.somCautionnementRevenuMensuel();
    // this.somCautionHypothecaireValeurConsidere();
    // this.somProtectionFinanciereValeurMarchande();
    this.reformatNewLinesAndGaranties();
  },
  computed: {
    doss: function doss() {
      var _this$dossier_credit3;
      return (_this$dossier_credit3 = this.dossier_credit) === null || _this$dossier_credit3 === void 0 ? void 0 : _this$dossier_credit3.cred_pub_tb_13.benefices_pertes;
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
    loadData: function loadData() {
      this.getFiles();
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
    reformatNewLinesAndGaranties: function reformatNewLinesAndGaranties() {
      var _this$f8Data,
        _this3 = this;
      if (!['', null, undefined].includes((_this$f8Data = this.f8Data) === null || _this$f8Data === void 0 ? void 0 : _this$f8Data.newLines)) {
        var _this$f8Data2, _this$f8Data3;
        (_this$f8Data2 = this.f8Data) === null || _this$f8Data2 === void 0 || (_this$f8Data2 = _this$f8Data2.newLines) === null || _this$f8Data2 === void 0 || _this$f8Data2.forEach(function (newLine) {
          var _this3$f8Data;
          var new_ids = ((_this3$f8Data = _this3.f8Data) === null || _this3$f8Data === void 0 || (_this3$f8Data = _this3$f8Data.newLinesgarantiesGenerales) === null || _this3$f8Data === void 0 || (_this3$f8Data = _this3$f8Data.filter(function (newLinesgarantie) {
            return (newLinesgarantie === null || newLinesgarantie === void 0 ? void 0 : newLinesgarantie.parentId.includes(newLine.id)) && !["", null, undefined].includes(newLinesgarantie.name_garantie);
          })) === null || _this3$f8Data === void 0 ? void 0 : _this3$f8Data.map(function (newLinesgarantie) {
            return newLinesgarantie.id;
          })) || [];
          newLine["garanties_general_id"] = new_ids;
        });
        this.groupNewLinesByGaranties((_this$f8Data3 = this.f8Data) === null || _this$f8Data3 === void 0 ? void 0 : _this$f8Data3.newLines);
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/contre_analyse_groupe/rg/RG-CA7.vue?vue&type=template&id=72b34e83&scoped=true":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/contre_analyse_groupe/rg/RG-CA7.vue?vue&type=template&id=72b34e83&scoped=true ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm$dossier_credit, _vm$dossier_credit2, _vm$data_tb, _vm$data_tb2, _vm$data_tb3, _vm$data_tb4, _vm$data_tb5, _vm$data_tb6, _vm$data_tb7, _vm$data_tb19003_othe, _vm$data_tb19003_othe2, _vm$data_tb19003_othe3;
  var _vm = this,
    _c = _vm._self._c;
  return (_vm$dossier_credit = _vm.dossier_credit) !== null && _vm$dossier_credit !== void 0 && _vm$dossier_credit.cred_pub_tb_40007 ? _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "head-memorandum-title mb-4 text-uppercase",
    staticStyle: {
      "text-align": "center"
    }
  }, [_vm._v("Synthèse des lignes du client et des garanties")]), _vm._v(" "), _c("div", {
    staticClass: "justify-content-center"
  }, [(_vm$dossier_credit2 = _vm.dossier_credit) !== null && _vm$dossier_credit2 !== void 0 && _vm$dossier_credit2.cred_pub_tb_40007 ? _c("div", {
    staticClass: "py-3 justify-content-center"
  }, [_c("hr", {
    staticClass: "mt-5"
  }), _vm._v(" "), _c("br"), _vm._v(" "), _c("h6", {
    staticClass: "text-success"
  }, [_vm._v("B2 Nouvelles lignes (objet de la présente demande)")]), _vm._v(" "), _c("br"), _c("br"), _vm._v(" "), _c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-bordered mb-2 mt-2"
  }, [_vm._m(0), _vm._v(" "), _c("tbody", [_c("tr", [_c("td", {
    staticClass: "fw-bold sticky sticky-left"
  }, [_vm._v("Lignes")]), _vm._v(" "), _c("td", {
    staticClass: "fw-bold sticky sticky-left-second"
  }, [_vm._v("Status")]), _vm._v(" "), _c("td", {
    staticClass: "fw-bold"
  }, [_vm._v("Montant")]), _vm._v(" "), _c("td", {
    staticClass: "fw-bold"
  }, [_vm._v("Proposition")]), _vm._v(" "), (_vm$data_tb = _vm.data_tb19003) !== null && _vm$data_tb !== void 0 && _vm$data_tb.encoursAu ? _c("td", {
    staticClass: "fw-bold"
  }, [_c("span", [_vm._v("Encours au")]), _vm._v("\n                            " + _vm._s(_vm.formatDate((_vm$data_tb2 = _vm.data_tb19003) === null || _vm$data_tb2 === void 0 ? void 0 : _vm$data_tb2.encoursAu)) + "\n                            ")]) : _c("td", {
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
      var _vm$f8Data;
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
          var _sure$state_, _sure$name_garantie;
          return _c("ul", {
            key: "sure_" + groupIndex + "-" + sureIndex
          }, [(sure === null || sure === void 0 || (_sure$state_ = sure.state_) === null || _sure$state_ === void 0 ? void 0 : _sure$state_.has_speOr_spe) == "specifique" && (sure === null || sure === void 0 || (_sure$name_garantie = sure.name_garantie) === null || _sure$name_garantie === void 0 ? void 0 : _sure$name_garantie.trim()) != "" ? _c("li", [_vm._v("\n                                                - " + _vm._s(sure === null || sure === void 0 ? void 0 : sure.name_garantie) + "\n                                            ")]) : _vm._e()]);
        }), 0);
      }), 0), _vm._v(" "), newlineIndex === 0 ? _c("td", {
        attrs: {
          rowspan: groupNewLigne.length
        }
      }, [_c("div", {
        staticStyle: {
          width: "400px"
        }
      }, _vm._l(_vm.deleteDuplicate((_vm$f8Data = _vm.f8Data) === null || _vm$f8Data === void 0 ? void 0 : _vm$f8Data.newLinesgarantiesGenerales, groupNewLigne[0].id), function (surete, sureteIndex) {
        var _surete$name_garantie;
        return _c("ul", {
          key: "generales_" + groupIndex + "-" + sureteIndex
        }, [surete.parentId.includes(groupNewLigne[0].id) && !["", null, undefined].includes(surete === null || surete === void 0 || (_surete$name_garantie = surete.name_garantie) === null || _surete$name_garantie === void 0 ? void 0 : _surete$name_garantie.trim()) ? _c("li", [_vm._v("\n                                                - " + _vm._s(surete === null || surete === void 0 ? void 0 : surete.name_garantie.replace(/^-\s*/, "")) + "\n                                            ")]) : _vm._e()]);
      }), 0)]) : _vm._e()]);
    });
  }), _vm._v(" "), _c("tr", [_c("th", {
    attrs: {
      colspan: "3"
    }
  }, [_vm._v("S/Total concours sollicités")]), _vm._v(" "), _c("th", [_vm._v(_vm._s(_vm.formatAmount(((_vm$data_tb3 = _vm.data_tb19003) === null || _vm$data_tb3 === void 0 || (_vm$data_tb3 = _vm$data_tb3.totaux) === null || _vm$data_tb3 === void 0 ? void 0 : _vm$data_tb3.st_caisse_nouvelles_lignes_montant) + ((_vm$data_tb4 = _vm.data_tb19003) === null || _vm$data_tb4 === void 0 || (_vm$data_tb4 = _vm$data_tb4.totaux) === null || _vm$data_tb4 === void 0 ? void 0 : _vm$data_tb4.st_signature_nouvelles_lignes_montant))))]), _vm._v(" "), _c("th", [_vm._v(_vm._s(_vm.formatAmount(((_vm$data_tb5 = _vm.data_tb19003) === null || _vm$data_tb5 === void 0 || (_vm$data_tb5 = _vm$data_tb5.totaux) === null || _vm$data_tb5 === void 0 ? void 0 : _vm$data_tb5.st_caisse_nouvelles_lignes_proposition) + ((_vm$data_tb6 = _vm.data_tb19003) === null || _vm$data_tb6 === void 0 || (_vm$data_tb6 = _vm$data_tb6.totaux) === null || _vm$data_tb6 === void 0 ? void 0 : _vm$data_tb6.st_signature_nouvelles_lignes_proposition))) + "\n                            ")]), _vm._v(" "), _c("th", {
    attrs: {
      colspan: "6"
    }
  })])], 2)])]), _vm._v(" "), _c("table", {
    staticClass: "table table-bordered mb-0"
  }, [_vm._m(1), _vm._v(" "), _c("table", {
    staticClass: "table table-bordered mb-3"
  }, [_c("tbody", {
    staticStyle: {
      "font-size": "0.9rem"
    }
  }, [_c("tr", [_c("td", [_c("span", {
    domProps: {
      innerHTML: _vm._s((_vm$data_tb7 = _vm.data_tb19003) === null || _vm$data_tb7 === void 0 ? void 0 : _vm$data_tb7.newLinesComment)
    }
  })])])])])]), _vm._v(" "), _c("br"), _vm._v(" "), _c("br"), _vm._v(" "), _c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: ((_vm$data_tb19003_othe = _vm.data_tb19003_other) === null || _vm$data_tb19003_othe === void 0 ? void 0 : _vm$data_tb19003_othe.mode_calcul) == "M",
      expression: "data_tb19003_other?.mode_calcul == 'M'"
    }],
    staticClass: "table-resposive"
  }, [_c("table", {
    staticClass: "table table-bordered mb-1"
  }, [_c("tbody", _vm._l((_vm$data_tb19003_othe2 = _vm.data_tb19003_other) === null || _vm$data_tb19003_othe2 === void 0 ? void 0 : _vm$data_tb19003_othe2.conso_fond_propre, function (conso_fp, index) {
    var _conso_fp$name;
    return _c("tr", {
      key: index
    }, [_c("td", {
      staticStyle: {
        "background-color": "yellow"
      }
    }, [_c("label", [_c("b", [_vm._v("LA " + _vm._s((_conso_fp$name = conso_fp.name) === null || _conso_fp$name === void 0 ? void 0 : _conso_fp$name.toUpperCase()) + " EST ESTIMEE A ")])])]), _vm._v(" "), _c("td", {
      staticStyle: {
        "background-color": "yellow"
      }
    }, [_vm._v("\n                                    " + _vm._s(_vm._f("formatNumber")(conso_fp.montant)) + "\n                                ")]), _vm._v(" "), _c("td", [Number(String(conso_fp.montant).replace(/\s+/g, "")) > 0 ? _c("div", {
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
    }, [_vm._v("\n                                        Aucun fichier(s) uploadé(s)\n                                    ")])])]);
  }), 0)])]), _vm._v(" "), _c("br"), _vm._v(" "), _c("br"), _vm._v(" "), _c("table", {
    staticClass: "table table-bordered mb-4"
  }, [_vm._m(2), _vm._v(" "), _c("tbody", [_c("tr", [_c("td", [_c("span", {
    domProps: {
      innerHTML: _vm._s((_vm$data_tb19003_othe3 = _vm.data_tb19003_other) === null || _vm$data_tb19003_othe3 === void 0 ? void 0 : _vm$data_tb19003_othe3.comment_conso_fond_propre)
    }
  })])])])]), _vm._v(" "), _c("br")]) : _vm._e()])]) : _vm._e();
};
var staticRenderFns = [function () {
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
  }, [_vm._v("Concours sollicités\n                            ")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("td", {
    staticClass: "text-center bg-grey"
  }, [_vm._v("Commentaire sur les nouvelles lignes\n                        ")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", {
    staticClass: "bg-ed-primary"
  }, [_c("tr", [_c("th", {
    staticClass: "col-12 text-center py-2 m-0"
  }, [_vm._v("\n                                commentaire\n                            ")])])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/contre_analyse_groupe/rg/RG-CA7.vue?vue&type=style&index=0&id=72b34e83&lang=css&scoped=true":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/contre_analyse_groupe/rg/RG-CA7.vue?vue&type=style&index=0&id=72b34e83&lang=css&scoped=true ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.bg-grey[data-v-72b34e83]{\r\n    background-color:#f4f3f3;\r\n    font-weight: 600;\r\n    width: 32%;\n}\n.memo[data-v-72b34e83] {\r\n  margin-top: 10px;\r\n  padding: 10px;\r\n  border: 2px solid #fff;\r\n  font-weight: 550;\r\n  font-size: 16px;\r\n  text-align: left;\r\n  text-transform: uppercase;\r\n  background-color: #34495e;\r\n  color: #fff;\n}\r\n/* td {\r\n    width: 250px;\r\n} */\r\n\r\n/* input {\r\n    width: 250px;\r\n}\r\n.th{\r\n    padding: 4px;\r\n    padding-bottom: 0px;\r\n}\r\n\r\nselect {\r\n    width: 250px;\r\n} */\n.head-memorandum-title[data-v-72b34e83] {\r\n    margin-top: 15px;\r\n    padding: 16px;\r\n    color:#fff;\r\n    font-weight: bold;\r\n    background-color: #34495e;\r\n    border:2px solid #575759;\r\n    box-shadow: 1px 3px 4px #ddd;\r\n    font-size: 16px;\r\n    text-align: center;\r\n    text-transform: uppercase;\r\n    border-radius: 10px;\r\n    margin-bottom: 15px;\n}\n.lgcrd[data-v-72b34e83] {\r\n    font-size:20px;\r\n    font-weight:bold;\r\n    color:#dc0030;\n}\n.head-memorandum-title[data-v-72b34e83] {\r\n    margin-top: 15px;\r\n    padding: 16px;\r\n    color:#fff;\r\n    font-weight: bold;\r\n    background-color: #34495e;\r\n    border:2px solid #575759;\r\n    box-shadow: 1px 3px 4px #ddd;\r\n    font-size: 16px;\r\n    text-align: center;\r\n    text-transform: uppercase;\r\n    border-radius: 10px;\r\n    margin-bottom: 15px;\n}\ntable[data-v-72b34e83] {\r\n  border-collapse: collapse;\r\n  width: 100%;\n}\nth[data-v-72b34e83], td[data-v-72b34e83] {\r\n  padding: 8px;\r\n  border: 1px solid #ddd;\r\n  text-align: left;\n}\ntd.sticky[data-v-72b34e83], th.sticky[data-v-72b34e83] {\r\n  position: sticky;\r\n  background-color: white;\r\n  z-index: 1;\n}\ntd.sticky-left[data-v-72b34e83], th.sticky-left[data-v-72b34e83] {\r\n  left: 0;\n}\ntd.sticky-left-second[data-v-72b34e83], th.sticky-left-second[data-v-72b34e83] {\r\n  left: 0px; \r\n  background-color: #f4f3f3 !important;\n}\ntd.sticky-left[data-v-72b34e83], th.sticky-left[data-v-72b34e83]{\r\n    /* left: 240px; */\r\n    background-color: #f4f3f3 !important;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/contre_analyse_groupe/rg/RG-CA7.vue?vue&type=style&index=0&id=72b34e83&lang=css&scoped=true":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/contre_analyse_groupe/rg/RG-CA7.vue?vue&type=style&index=0&id=72b34e83&lang=css&scoped=true ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RG_CA7_vue_vue_type_style_index_0_id_72b34e83_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RG-CA7.vue?vue&type=style&index=0&id=72b34e83&lang=css&scoped=true */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/contre_analyse_groupe/rg/RG-CA7.vue?vue&type=style&index=0&id=72b34e83&lang=css&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RG_CA7_vue_vue_type_style_index_0_id_72b34e83_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RG_CA7_vue_vue_type_style_index_0_id_72b34e83_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/offview/bank/nsia/contre_analyse_groupe/rg/RG-CA7.vue":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/offview/bank/nsia/contre_analyse_groupe/rg/RG-CA7.vue ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _RG_CA7_vue_vue_type_template_id_72b34e83_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RG-CA7.vue?vue&type=template&id=72b34e83&scoped=true */ "./resources/js/components/offview/bank/nsia/contre_analyse_groupe/rg/RG-CA7.vue?vue&type=template&id=72b34e83&scoped=true");
/* harmony import */ var _RG_CA7_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RG-CA7.vue?vue&type=script&lang=js */ "./resources/js/components/offview/bank/nsia/contre_analyse_groupe/rg/RG-CA7.vue?vue&type=script&lang=js");
/* harmony import */ var _RG_CA7_vue_vue_type_style_index_0_id_72b34e83_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RG-CA7.vue?vue&type=style&index=0&id=72b34e83&lang=css&scoped=true */ "./resources/js/components/offview/bank/nsia/contre_analyse_groupe/rg/RG-CA7.vue?vue&type=style&index=0&id=72b34e83&lang=css&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _RG_CA7_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _RG_CA7_vue_vue_type_template_id_72b34e83_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _RG_CA7_vue_vue_type_template_id_72b34e83_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "72b34e83",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/offview/bank/nsia/contre_analyse_groupe/rg/RG-CA7.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/offview/bank/nsia/contre_analyse_groupe/rg/RG-CA7.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/components/offview/bank/nsia/contre_analyse_groupe/rg/RG-CA7.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RG_CA7_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RG-CA7.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/contre_analyse_groupe/rg/RG-CA7.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RG_CA7_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/offview/bank/nsia/contre_analyse_groupe/rg/RG-CA7.vue?vue&type=style&index=0&id=72b34e83&lang=css&scoped=true":
/*!***********************************************************************************************************************************************!*\
  !*** ./resources/js/components/offview/bank/nsia/contre_analyse_groupe/rg/RG-CA7.vue?vue&type=style&index=0&id=72b34e83&lang=css&scoped=true ***!
  \***********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RG_CA7_vue_vue_type_style_index_0_id_72b34e83_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RG-CA7.vue?vue&type=style&index=0&id=72b34e83&lang=css&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/contre_analyse_groupe/rg/RG-CA7.vue?vue&type=style&index=0&id=72b34e83&lang=css&scoped=true");


/***/ }),

/***/ "./resources/js/components/offview/bank/nsia/contre_analyse_groupe/rg/RG-CA7.vue?vue&type=template&id=72b34e83&scoped=true":
/*!*********************************************************************************************************************************!*\
  !*** ./resources/js/components/offview/bank/nsia/contre_analyse_groupe/rg/RG-CA7.vue?vue&type=template&id=72b34e83&scoped=true ***!
  \*********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RG_CA7_vue_vue_type_template_id_72b34e83_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RG_CA7_vue_vue_type_template_id_72b34e83_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RG_CA7_vue_vue_type_template_id_72b34e83_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RG-CA7.vue?vue&type=template&id=72b34e83&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/contre_analyse_groupe/rg/RG-CA7.vue?vue&type=template&id=72b34e83&scoped=true");


/***/ })

}]);