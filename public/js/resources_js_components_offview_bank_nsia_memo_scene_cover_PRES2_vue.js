"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_offview_bank_nsia_memo_scene_cover_PRES2_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/scene_cover/PRES2.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/scene_cover/PRES2.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_nsia_f8_data_extractor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../services/nsia/f8-data-extractor */ "./resources/js/services/nsia/f8-data-extractor.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }

var CRED_PUB_F8_MAPPING = ['cred_pub_tb_8', 'cred_pub_tb_19003', 'cred_pub_tb_19503'];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    dossier_credit: Object
  },
  created: function created() {},
  mounted: function mounted() {
    var cred_pub_keys = ""; //this.determineCredPubTables(this.dossier_credit?.applied_templ_name);

    for (var _i = 0, _CRED_PUB_F8_MAPPING = CRED_PUB_F8_MAPPING; _i < _CRED_PUB_F8_MAPPING.length; _i++) {
      var _this$dossier_credit;
      var key = _CRED_PUB_F8_MAPPING[_i];
      if (((_this$dossier_credit = this.dossier_credit) === null || _this$dossier_credit === void 0 ? void 0 : _this$dossier_credit[key]) != undefined) {
        cred_pub_keys = key;
      }
    }
    this.f8Data = this.f8DataExtractor.getData(this.dossier_credit, cred_pub_keys);
    // console.log('this.f8Data', this.f8Data);
    this.reformatOldLinesAndGaranties();
    this.reformatNewLinesAndGaranties();
  },
  data: function data() {
    return {
      f8DataExtractor: _services_nsia_f8_data_extractor__WEBPACK_IMPORTED_MODULE_0__["default"],
      f8Data: null,
      regroupNewLignes: null,
      regroupOldLignes: null
    };
  },
  methods: {
    somX3: function somX3(ob, key) {
      var som = 0;
      if (!ob || ob.length === 0) return 0;
      ob === null || ob === void 0 || ob.filter(function (elm) {
        var result = String(elm[key]).replace(/\s+/g, "");
        if (result === "" || isNaN(result)) {
          som += 0;
        } else {
          som += parseInt(result);
        }
      });
      return som;
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
    formatAmount: function formatAmount(x) {
      return x === null || x === void 0 ? void 0 : x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    },
    formatMonth: function formatMonth(value) {
      return value === null || value === void 0 ? void 0 : value.toString().split('-').reverse().join('/');
    },
    reformatOldLinesAndGaranties: function reformatOldLinesAndGaranties() {
      var _this$f8Data,
        _this = this;
      if (!['', null, undefined].includes((_this$f8Data = this.f8Data) === null || _this$f8Data === void 0 ? void 0 : _this$f8Data.oldLines)) {
        var _this$f8Data2, _this$f8Data4;
        (_this$f8Data2 = this.f8Data) === null || _this$f8Data2 === void 0 || (_this$f8Data2 = _this$f8Data2.oldLines) === null || _this$f8Data2 === void 0 || _this$f8Data2.forEach(function (oldLine) {
          var _this$f8Data3;
          var ids = ((_this$f8Data3 = _this.f8Data) === null || _this$f8Data3 === void 0 || (_this$f8Data3 = _this$f8Data3.oldLinesgarantiesGenerales) === null || _this$f8Data3 === void 0 || (_this$f8Data3 = _this$f8Data3.filter(function (oldLinesgarantie) {
            return (oldLinesgarantie === null || oldLinesgarantie === void 0 ? void 0 : oldLinesgarantie.parentId.includes(oldLine.id)) && !["", null, undefined].includes(oldLinesgarantie.name_garantie);
          })) === null || _this$f8Data3 === void 0 ? void 0 : _this$f8Data3.map(function (oldLinesgarantie) {
            return oldLinesgarantie.id;
          })) || [];
          oldLine["garanties_general_id"] = ids;
        });
        this.groupOldLinesByGaranties((_this$f8Data4 = this.f8Data) === null || _this$f8Data4 === void 0 ? void 0 : _this$f8Data4.oldLines);
      }
    },
    reformatNewLinesAndGaranties: function reformatNewLinesAndGaranties() {
      var _this$f8Data5,
        _this2 = this;
      if (!['', null, undefined].includes((_this$f8Data5 = this.f8Data) === null || _this$f8Data5 === void 0 ? void 0 : _this$f8Data5.newLines)) {
        var _this$f8Data6, _this$f8Data7;
        (_this$f8Data6 = this.f8Data) === null || _this$f8Data6 === void 0 || (_this$f8Data6 = _this$f8Data6.newLines) === null || _this$f8Data6 === void 0 || _this$f8Data6.forEach(function (newLine) {
          var _this2$f8Data;
          var new_ids = ((_this2$f8Data = _this2.f8Data) === null || _this2$f8Data === void 0 || (_this2$f8Data = _this2$f8Data.newLinesgarantiesGenerales) === null || _this2$f8Data === void 0 || (_this2$f8Data = _this2$f8Data.filter(function (newLinesgarantie) {
            return (newLinesgarantie === null || newLinesgarantie === void 0 ? void 0 : newLinesgarantie.parentId.includes(newLine.id)) && !["", null, undefined].includes(newLinesgarantie.name_garantie);
          })) === null || _this2$f8Data === void 0 ? void 0 : _this2$f8Data.map(function (newLinesgarantie) {
            return newLinesgarantie.id;
          })) || [];
          newLine["garanties_general_id"] = new_ids;
        });
        this.groupNewLinesByGaranties((_this$f8Data7 = this.f8Data) === null || _this$f8Data7 === void 0 ? void 0 : _this$f8Data7.newLines);
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/scene_cover/PRES2.vue?vue&type=template&id=582aaba7&scoped=true":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/scene_cover/PRES2.vue?vue&type=template&id=582aaba7&scoped=true ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm$f8Data, _vm$f8Data2, _vm$f8Data4, _vm$f8Data5, _vm$f8Data6, _vm$f8Data7, _vm$f8Data8, _vm$f8Data9, _vm$f8Data0, _vm$f8Data1, _vm$f8Data11, _vm$f8Data12, _vm$f8Data13, _vm$f8Data14, _vm$f8Data15, _vm$f8Data16;
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    "class": _vm.paysageClasses
  }, [_vm._m(0), _vm._v(" "), _c("div", {
    staticClass: "card rounded-0 mb-3 w-100"
  }, [_c("div", {
    staticClass: "card-header"
  }, [_vm._v("Synthèse des lignes")]), _vm._v(" "), _c("div", {
    staticClass: "card-body p-0"
  }, [_c("div", {
    staticClass: "table-responsive m-0",
    "class": _vm.tableResponsiveClasses
  }, [_c("table", {
    staticClass: "table table-bordered"
  }, [_vm._m(1), _vm._v(" "), _c("tbody", [_c("tr", [_c("td", {
    staticClass: "fw-bold"
  }, [_vm._v("Lignes")]), _vm._v(" "), _c("td", {
    staticClass: "fw-bold"
  }, [_vm._v("Autorisation")]), _vm._v(" "), (_vm$f8Data = _vm.f8Data) !== null && _vm$f8Data !== void 0 && _vm$f8Data.encoursAu ? _c("td", {
    staticClass: "fw-bold"
  }, [_c("span", [_vm._v("Encours au")]), _vm._v("\n                        " + _vm._s(_vm.formatDate((_vm$f8Data2 = _vm.f8Data) === null || _vm$f8Data2 === void 0 ? void 0 : _vm$f8Data2.encoursAu)) + "\n                        ")]) : _c("td", {
    staticClass: "fw-bold"
  }, [_vm._v("Encours au")]), _vm._v(" "), _c("td", {
    staticClass: "fw-bold"
  }, [_vm._v("Taux (%)")]), _vm._v(" "), _c("td", {
    staticClass: "fw-bold"
  }, [_vm._v("Durée (mois)")]), _vm._v(" "), _c("td", {
    staticClass: "fw-bold"
  }, [_vm._v("Echéance")]), _vm._v(" "), _c("td", {
    staticClass: "fw-bold min-garantie-size"
  }, [_vm._v("Garanties / covenants spécifiques proposées")]), _vm._v(" "), _c("td", {
    staticClass: "fw-bold min-garantie-size"
  }, [_vm._v("Garanties / covenants générales proposées")])]), _vm._v(" "), _vm._l(_vm.regroupOldLignes, function (groupOldLigne, groupIndex) {
    return _vm._l(groupOldLigne, function (oldLigne, lineIndex) {
      var _vm$f8Data3;
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
          }, [(sure === null || sure === void 0 || (_sure$state_ = sure.state_) === null || _sure$state_ === void 0 ? void 0 : _sure$state_.has_speOr_spe) == "specifique" && (sure === null || sure === void 0 || (_sure$name_garantie = sure.name_garantie) === null || _sure$name_garantie === void 0 ? void 0 : _sure$name_garantie.trim()) != "" ? _c("li", [_vm._v("\n                                            - " + _vm._s(sure === null || sure === void 0 ? void 0 : sure.name_garantie) + "\n                                        ")]) : _vm._e()]);
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
        }, [surete.parentId.includes(groupOldLigne[0].id) && !["", null, undefined].includes(surete === null || surete === void 0 || (_surete$name_garantie = surete.name_garantie) === null || _surete$name_garantie === void 0 ? void 0 : _surete$name_garantie.trim()) ? _c("li", [_vm._v("\n                                            - " + _vm._s(surete === null || surete === void 0 ? void 0 : surete.name_garantie) + "\n                                        ")]) : _vm._e()]);
      }), 0)]) : _vm._e()]);
    });
  }), _vm._v(" "), _c("tr", [_c("th", {
    attrs: {
      colspan: "2"
    }
  }, [_vm._v("S/Total lignes existantes")]), _vm._v(" "), _c("th", [_vm._v(_vm._s(_vm.formatAmount(((_vm$f8Data4 = _vm.f8Data) === null || _vm$f8Data4 === void 0 || (_vm$f8Data4 = _vm$f8Data4.totaux) === null || _vm$f8Data4 === void 0 ? void 0 : _vm$f8Data4.st_caisse_ligne_existantes_autorisation) + ((_vm$f8Data5 = _vm.f8Data) === null || _vm$f8Data5 === void 0 || (_vm$f8Data5 = _vm$f8Data5.totaux) === null || _vm$f8Data5 === void 0 ? void 0 : _vm$f8Data5.st_signature_ligne_existantes_autorisation))))]), _vm._v(" "), _c("th", [_vm._v(_vm._s(_vm.formatAmount(((_vm$f8Data6 = _vm.f8Data) === null || _vm$f8Data6 === void 0 || (_vm$f8Data6 = _vm$f8Data6.totaux) === null || _vm$f8Data6 === void 0 ? void 0 : _vm$f8Data6.st_caisse_ligne_existantes_encours) + ((_vm$f8Data7 = _vm.f8Data) === null || _vm$f8Data7 === void 0 || (_vm$f8Data7 = _vm$f8Data7.totaux) === null || _vm$f8Data7 === void 0 ? void 0 : _vm$f8Data7.st_signature_ligne_existantes_encours))) + "\n                        ")]), _vm._v(" "), _c("th", {
    attrs: {
      colspan: "5"
    }
  })])], 2)])]), _vm._v(" "), _vm._m(2)])]), _vm._v(" "), _c("div", {
    staticClass: "card rounded-0 mb-3 w-100"
  }, [_c("div", {
    staticClass: "card-header"
  }, [_vm._v("Commentaire sur les lignes existantes")]), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    domProps: {
      innerHTML: _vm._s((_vm$f8Data8 = _vm.f8Data) === null || _vm$f8Data8 === void 0 ? void 0 : _vm$f8Data8.commentaire_lignes_existantes)
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "card rounded-0 mb-3 w-100"
  }, [_c("div", {
    staticClass: "card-header"
  }, [_vm._v("Commentaire sur les garanties non détenues")]), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    domProps: {
      innerHTML: _vm._s((_vm$f8Data9 = _vm.f8Data) === null || _vm$f8Data9 === void 0 ? void 0 : _vm$f8Data9.commentaire_lignes_existantes_garanties_nd)
    }
  })])]), _vm._v(" "), _vm._m(3), _vm._v(" "), _c("div", {
    staticClass: "card rounded-0 mb-3 w-100"
  }, [_c("div", {
    staticClass: "card-body p-0"
  }, [_c("div", {
    staticClass: "table-responsive m-0",
    "class": _vm.tableResponsiveClasses
  }, [_c("table", {
    staticClass: "table table-bordered"
  }, [_vm._m(4), _vm._v(" "), _c("tbody", [_c("tr", [_c("td", {
    staticClass: "fw-bold"
  }, [_vm._v("Lignes")]), _vm._v(" "), _c("td", {
    staticClass: "fw-bold"
  }, [_vm._v("Status")]), _vm._v(" "), _c("td", {
    staticClass: "fw-bold"
  }, [_vm._v("Montant")]), _vm._v(" "), _c("td", {
    staticClass: "fw-bold"
  }, [_vm._v("Proposition")]), _vm._v(" "), (_vm$f8Data0 = _vm.f8Data) !== null && _vm$f8Data0 !== void 0 && _vm$f8Data0.encoursAu ? _c("td", {
    staticClass: "fw-bold"
  }, [_c("span", [_vm._v("Encours au")]), _vm._v("\n                        " + _vm._s(_vm.formatDate((_vm$f8Data1 = _vm.f8Data) === null || _vm$f8Data1 === void 0 ? void 0 : _vm$f8Data1.encoursAu)) + "\n                        ")]) : _c("td", {
    staticClass: "fw-bold"
  }, [_vm._v("Encours au")]), _vm._v(" "), _c("td", {
    staticClass: "fw-bold"
  }, [_vm._v("Taux (%)")]), _vm._v(" "), _c("td", {
    staticClass: "fw-bold"
  }, [_vm._v("Durée (mois)")]), _vm._v(" "), _c("td", {
    staticClass: "fw-bold"
  }, [_vm._v("Echéance")]), _vm._v(" "), _c("td", {
    staticClass: "fw-bold min-garantie-size"
  }, [_vm._v("Garanties / covenants spécifiques proposées")]), _vm._v(" "), _c("td", {
    staticClass: "fw-bold min-garantie-size"
  }, [_vm._v("Garanties / covenants générales proposées")])]), _vm._v(" "), _vm._l(_vm.regroupNewLignes, function (groupNewLigne, groupIndex) {
    return _vm._l(groupNewLigne, function (line, newlineIndex) {
      var _vm$f8Data10;
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
      }, _vm._l(_vm.deleteDuplicate((_vm$f8Data10 = _vm.f8Data) === null || _vm$f8Data10 === void 0 ? void 0 : _vm$f8Data10.newLinesgarantiesGenerales, groupNewLigne[0].id), function (surete, sureteIndex) {
        var _surete$name_garantie2;
        return _c("ul", {
          key: "generales_" + groupIndex + "-" + sureteIndex
        }, [surete.parentId.includes(groupNewLigne[0].id) && !["", null, undefined].includes(surete === null || surete === void 0 || (_surete$name_garantie2 = surete.name_garantie) === null || _surete$name_garantie2 === void 0 ? void 0 : _surete$name_garantie2.trim()) ? _c("li", [_vm._v("\n                                            - " + _vm._s(surete === null || surete === void 0 ? void 0 : surete.name_garantie) + "\n                                        ")]) : _vm._e()]);
      }), 0)]) : _vm._e()]);
    });
  }), _vm._v(" "), _c("tr", [_c("th", {
    attrs: {
      colspan: "3"
    }
  }, [_vm._v("S/Total concours sollicités")]), _vm._v(" "), _c("th", [_vm._v(_vm._s(_vm.formatAmount(((_vm$f8Data11 = _vm.f8Data) === null || _vm$f8Data11 === void 0 || (_vm$f8Data11 = _vm$f8Data11.totaux) === null || _vm$f8Data11 === void 0 ? void 0 : _vm$f8Data11.st_caisse_nouvelles_lignes_montant) + ((_vm$f8Data12 = _vm.f8Data) === null || _vm$f8Data12 === void 0 || (_vm$f8Data12 = _vm$f8Data12.totaux) === null || _vm$f8Data12 === void 0 ? void 0 : _vm$f8Data12.st_signature_nouvelles_lignes_montant))))]), _vm._v(" "), _c("th", [_vm._v(_vm._s(_vm.formatAmount(((_vm$f8Data13 = _vm.f8Data) === null || _vm$f8Data13 === void 0 || (_vm$f8Data13 = _vm$f8Data13.totaux) === null || _vm$f8Data13 === void 0 ? void 0 : _vm$f8Data13.st_caisse_nouvelles_lignes_proposition) + ((_vm$f8Data14 = _vm.f8Data) === null || _vm$f8Data14 === void 0 || (_vm$f8Data14 = _vm$f8Data14.totaux) === null || _vm$f8Data14 === void 0 ? void 0 : _vm$f8Data14.st_signature_nouvelles_lignes_proposition))) + "\n                        ")]), _vm._v(" "), _c("th", {
    attrs: {
      colspan: "6"
    }
  })])], 2)])]), _vm._v(" "), _vm._m(5)])]), _vm._v(" "), _c("div", {
    staticClass: "card rounded-0 mb-3 w-100"
  }, [_c("div", {
    staticClass: "card-header"
  }, [_vm._v("Commentaire sur les nouvelles lignes")]), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    domProps: {
      innerHTML: _vm._s((_vm$f8Data15 = _vm.f8Data) === null || _vm$f8Data15 === void 0 ? void 0 : _vm$f8Data15.commentaire_nouvelles_lignes)
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "card rounded-0 mb-3 w-100"
  }, [_c("div", {
    staticClass: "card-header"
  }, [_vm._v("Commentaire sur les garanties non détenues")]), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    domProps: {
      innerHTML: _vm._s((_vm$f8Data16 = _vm.f8Data) === null || _vm$f8Data16 === void 0 ? void 0 : _vm$f8Data16.commentaire_nouvelles_lignes_garanties_nd)
    }
  })])])]);
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
  }, [_vm._v("A - Lignes actuelles et garanties retenues\n        ")])]);
}, function () {
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
  return _c("ul", {
    staticClass: "p-2"
  }, [_c("li", [_vm._v("(*) TBB=10,7% actuellement ")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "justify-content-center"
  }, [_c("div", {
    staticClass: "head-memorandum-title px-3 mb-3",
    staticStyle: {
      "text-align": "center"
    }
  }, [_vm._v("B - Lignes sollicitées et garanties proposées\n        ")])]);
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
  return _c("ul", {
    staticClass: "p-2"
  }, [_c("li", [_vm._v("(*) TBB=10,7% actuellement ")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/scene_cover/PRES2.vue?vue&type=style&index=0&id=582aaba7&lang=css&scoped=true":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/scene_cover/PRES2.vue?vue&type=style&index=0&id=582aaba7&lang=css&scoped=true ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.bg-grey[data-v-582aaba7],\r\n.th[data-v-582aaba7] {\r\n    background-color: #f4f3f3;\r\n    font-weight: 600;\n}\n.memo[data-v-582aaba7] {\r\n    margin-top: 10px;\r\n    padding: 10px;\r\n    border: 2px solid #fff;\r\n    font-weight: 550;\r\n    font-size: 16px;\r\n    text-align: left;\r\n    text-transform: uppercase;\r\n    background-color: #34495e;\r\n    color: #fff;\n}\n.head-memorandum-title[data-v-582aaba7] {\r\n    margin-top: 15px;\r\n    padding: 16px;\r\n    color: #fff;\r\n    font-weight: bold;\r\n    background-color: #34495e;\r\n    border: 2px solid #575759;\r\n    box-shadow: 1px 3px 4px #ddd;\r\n    font-size: 16px;\r\n    text-align: center;\r\n    text-transform: uppercase;\r\n    border-radius: 10px;\r\n    margin-bottom: 15px;\n}\n.vertical-middle[data-v-582aaba7] {\r\n    vertical-align: middle;\n}\n.mr-2[data-v-582aaba7] {\r\n    margin-right: 0.5rem;\n}\n.ml-25-px[data-v-582aaba7] {\r\n    margin-left: 25px;\n}\n.ml-45-px[data-v-582aaba7] {\r\n    margin-left: 45px;\n}\n.table-bordered[data-v-582aaba7] {\r\n    font-size: 0.9rem;\n}\n.form-check-input[data-v-582aaba7]:disabled {\r\n    opacity: 1;\n}\n.activite td[data-v-582aaba7] {\r\n    padding: 7px;\n}\n.card[data-v-582aaba7] {\r\n    position: static;\r\n    float: none;\r\n    border: 1px solid rgba(0,0,0,0.175) !important;\n}\n.card-body[data-v-582aaba7] {\r\n    font-size: 0.9rem;\r\n    float: none;\n}\n.card-body [class*='col-'][data-v-582aaba7] {\r\n    margin-bottom: 10px;\n}\n.min-garantie-size[data-v-582aaba7]{\r\n    min-width: 250px;\n}\n@media print {\nbody[data-v-582aaba7] {\r\n    margin: 0;\r\n    padding: 0;\n}\r\n\r\n  /* Règles @page nommées */\n@page portrait {\r\n    size: portrait;\r\n    margin: 20mm;\n}\n@page paysage {\r\n    size: landscape;\r\n    margin: 20mm;\n}\r\n\r\n  /* Application des règles @page */\n.portrait[data-v-582aaba7] {\r\n    page: portrait;\r\n    page-break-before: always;\n}\n.paysage[data-v-582aaba7] {\r\n    page: paysage;\r\n    width: 100% !important;\r\n    page-break-before: always;\r\n    page-break-after: always;\n}\r\n\r\n  /* Cacher le bouton à l'impression */\n#printBtn[data-v-582aaba7] {\r\n    display: none;\n}\r\n\r\n  /* Optionnel : ajuster la taille du texte à l'impression */\n.portrait[data-v-582aaba7],\r\n  .paysage[data-v-582aaba7] {\r\n    font-size: 12pt;\n}\n.paysage .table-responsive[data-v-582aaba7] {\r\n    overflow: visible !important;\r\n    width: auto !important;\r\n    max-width: none !important;\r\n    display: block !important;\n}\n.paysage .table-responsive table[data-v-582aaba7] {\r\n    width: 100% !important;\r\n    max-width: none !important;\r\n    display: table !important;\n}\r\n\r\n  /* Réduction taille police et padding */\n.paysage .table-wide table[data-v-582aaba7] {\r\n    font-size: 7pt;\n}\n.paysage .table-wide th[data-v-582aaba7],\r\n  td[data-v-582aaba7] {\r\n    padding: 2px 3px;\n}\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/scene_cover/PRES2.vue?vue&type=style&index=0&id=582aaba7&lang=css&scoped=true":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/scene_cover/PRES2.vue?vue&type=style&index=0&id=582aaba7&lang=css&scoped=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PRES2_vue_vue_type_style_index_0_id_582aaba7_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PRES2.vue?vue&type=style&index=0&id=582aaba7&lang=css&scoped=true */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/scene_cover/PRES2.vue?vue&type=style&index=0&id=582aaba7&lang=css&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PRES2_vue_vue_type_style_index_0_id_582aaba7_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PRES2_vue_vue_type_style_index_0_id_582aaba7_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/offview/bank/nsia/memo/scene_cover/PRES2.vue":
/*!******************************************************************************!*\
  !*** ./resources/js/components/offview/bank/nsia/memo/scene_cover/PRES2.vue ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PRES2_vue_vue_type_template_id_582aaba7_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PRES2.vue?vue&type=template&id=582aaba7&scoped=true */ "./resources/js/components/offview/bank/nsia/memo/scene_cover/PRES2.vue?vue&type=template&id=582aaba7&scoped=true");
/* harmony import */ var _PRES2_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PRES2.vue?vue&type=script&lang=js */ "./resources/js/components/offview/bank/nsia/memo/scene_cover/PRES2.vue?vue&type=script&lang=js");
/* harmony import */ var _PRES2_vue_vue_type_style_index_0_id_582aaba7_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PRES2.vue?vue&type=style&index=0&id=582aaba7&lang=css&scoped=true */ "./resources/js/components/offview/bank/nsia/memo/scene_cover/PRES2.vue?vue&type=style&index=0&id=582aaba7&lang=css&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _PRES2_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _PRES2_vue_vue_type_template_id_582aaba7_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _PRES2_vue_vue_type_template_id_582aaba7_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "582aaba7",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/offview/bank/nsia/memo/scene_cover/PRES2.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/offview/bank/nsia/memo/scene_cover/PRES2.vue?vue&type=script&lang=js":
/*!******************************************************************************************************!*\
  !*** ./resources/js/components/offview/bank/nsia/memo/scene_cover/PRES2.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PRES2_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PRES2.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/scene_cover/PRES2.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PRES2_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/offview/bank/nsia/memo/scene_cover/PRES2.vue?vue&type=style&index=0&id=582aaba7&lang=css&scoped=true":
/*!**************************************************************************************************************************************!*\
  !*** ./resources/js/components/offview/bank/nsia/memo/scene_cover/PRES2.vue?vue&type=style&index=0&id=582aaba7&lang=css&scoped=true ***!
  \**************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PRES2_vue_vue_type_style_index_0_id_582aaba7_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PRES2.vue?vue&type=style&index=0&id=582aaba7&lang=css&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/scene_cover/PRES2.vue?vue&type=style&index=0&id=582aaba7&lang=css&scoped=true");


/***/ }),

/***/ "./resources/js/components/offview/bank/nsia/memo/scene_cover/PRES2.vue?vue&type=template&id=582aaba7&scoped=true":
/*!************************************************************************************************************************!*\
  !*** ./resources/js/components/offview/bank/nsia/memo/scene_cover/PRES2.vue?vue&type=template&id=582aaba7&scoped=true ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PRES2_vue_vue_type_template_id_582aaba7_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PRES2_vue_vue_type_template_id_582aaba7_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PRES2_vue_vue_type_template_id_582aaba7_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PRES2.vue?vue&type=template&id=582aaba7&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/scene_cover/PRES2.vue?vue&type=template&id=582aaba7&scoped=true");


/***/ })

}]);