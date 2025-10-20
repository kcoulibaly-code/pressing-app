"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_shared_TemplateStamp_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/TemplateStamp.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/TemplateStamp.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DisplayTimesheet_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DisplayTimesheet.vue */ "./resources/js/components/shared/DisplayTimesheet.vue");
/* harmony import */ var _SignaturePo_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SignaturePo.vue */ "./resources/js/components/shared/SignaturePo.vue");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "TemplateStamp",
  props: {
    dossier_credit: {
      type: Object,
      required: true
    },
    final_outcome: {
      type: Object,
      required: true
    },
    recommandations: {
      type: Array,
      required: false
    },
    condition_decaissements: {
      type: Array,
      required: false
    },
    condition_commerciales: {
      type: Array,
      required: false
    },
    timesheets: {
      type: Array,
      required: false
    },
    ajournement_logs: {
      type: Array,
      required: false
    },
    affectationLogs: {
      type: Array,
      required: false
    },
    name_final_outcome: {
      type: String,
      required: false
    },
    name_decision: {
      type: String,
      required: false
    },
    mise_en_place: {
      type: Boolean,
      required: false
    },
    process_name: {
      type: String,
      required: false
    }
  },
  components: {
    DisplayTimesheet: _DisplayTimesheet_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    SignaturePo: _SignaturePo_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  computed: {
    _timesheets: function _timesheets() {
      var _this = this;
      return this.timesheets.filter(function (el) {
        var _this$final_outcome;
        return (el === null || el === void 0 ? void 0 : el.stage_id) > ((_this$final_outcome = _this.final_outcome) === null || _this$final_outcome === void 0 ? void 0 : _this$final_outcome.stage_id);
      });
    },
    _final_outcome: function _final_outcome() {
      var _this$dossier_credit;
      return (_this$dossier_credit = this.dossier_credit) === null || _this$dossier_credit === void 0 ? void 0 : _this$dossier_credit[this.name_final_outcome];
    },
    _decision_logs: function _decision_logs() {
      var _this$dossier_credit2;
      return (_this$dossier_credit2 = this.dossier_credit) === null || _this$dossier_credit2 === void 0 ? void 0 : _this$dossier_credit2[this.name_decision];
    }
  },
  methods: {
    indexFinder: function indexFinder(timesheets, stage_id) {
      for (var i = 0; i < timesheets.length; i++) {
        if (timesheets[i]['stage_id'] == stage_id) {
          return i;
        }
      }
      return 0;
    },
    getData: function getData(user_id, data, key) {
      var data_ = [];
      if (!['', null, undefined].includes(data)) {
        data.forEach(function (element) {
          if (element.user.user_id == user_id) {
            if (element[key] != undefined) {
              data_ = data_.concat(element[key]);
            }
          }
        });
      }
      return data_;
    },
    clearCafAvis: function clearCafAvis(avis) {
      return avis === null || avis === void 0 ? void 0 : avis.split("|");
    },
    hasBeenAssigned: function hasBeenAssigned(curr_stage_id) {
      var b0 = [];
      for (var i = 0; i < this.affectationLogs.length; i++) {
        var p = this.affectationLogs[i];
        if ((p === null || p === void 0 ? void 0 : p.to_stage_id) == curr_stage_id) {
          b0.push(this.affectationLogs[i]);
        }
      }
      return b0;
    },
    hasBeenAj: function hasBeenAj(curr_stage_id) {
      var b0 = [];
      for (var i = 0; i < ((_this$dossier_credit3 = this.dossier_credit) === null || _this$dossier_credit3 === void 0 ? void 0 : _this$dossier_credit3.aj_desc_logs.length); i++) {
        var _this$dossier_credit3, _this$dossier_credit4;
        var p = (_this$dossier_credit4 = this.dossier_credit) === null || _this$dossier_credit4 === void 0 ? void 0 : _this$dossier_credit4.aj_desc_logs[i];
        if ((p === null || p === void 0 ? void 0 : p.stage_id) == curr_stage_id) {
          var _this$dossier_credit5;
          b0.push((_this$dossier_credit5 = this.dossier_credit) === null || _this$dossier_credit5 === void 0 ? void 0 : _this$dossier_credit5.aj_desc_logs[i]);
        }
      }
      return b0;
    },
    hasBeenAjournee: function hasBeenAjournee(curr_stage_id) {
      var b0 = [];
      for (var i = 0; i < this.ajournement_logs.length; i++) {
        var p = this.ajournement_logs[i];
        if ((p === null || p === void 0 ? void 0 : p.stage_id) == curr_stage_id) {
          b0.push(this.ajournement_logs[i]);
        }
      }
      return b0;
    },
    filterDecisionLog: function filterDecisionLog(decision_logs) {
      var _this2 = this;
      var last_key = null;
      decision_logs.forEach(function (el, index) {
        el.text_decision = null;
        if (el.outcome === 2) {
          el.text_decision = "Avis Favorable";
        }
        if (el.outcome === 3) {
          el.text_decision = "Avis Défavorable";
        }
        if (_this2.name_decision == "serv_review_de_decision_logs") {
          if (el.outcome === 3) {
            el.text_decision = "Avis d'objection";
          }
          if (el.outcome === 2) {
            var _this2$getData, _this2$dossier_credit;
            var d = ((_this2$getData = _this2.getData(el.given_by, (_this2$dossier_credit = _this2.dossier_credit) === null || _this2$dossier_credit === void 0 ? void 0 : _this2$dossier_credit.reserves, 'reserve')) === null || _this2$getData === void 0 ? void 0 : _this2$getData.length) > 0;
            el.text_decision = "Avis de non objection" + (d ? ' sous reserve' : '');
          }
        }
        if (_this2.name_decision == "serv_jurid_decision_logs") {
          if (el.giver_role_sigle == "AG_DAJ") {
            if (el.outcome === 3) {
              el.text_decision = "Avis d'objection";
            }
            if (el.outcome === 2) {
              var _this2$getData2, _this2$dossier_credit2;
              var _d = ((_this2$getData2 = _this2.getData(el.given_by, (_this2$dossier_credit2 = _this2.dossier_credit) === null || _this2$dossier_credit2 === void 0 ? void 0 : _this2$dossier_credit2.reserves, 'reserve')) === null || _this2$getData2 === void 0 ? void 0 : _this2$getData2.length) > 0;
              el.text_decision = "Avis de non objection" + (_d ? ' sous reserve' : '');
            }
          }
          if (el.giver_role_sigle === 'CAE') {
            el.text_decision = "Conforme";
          }
          if (el.giver_role_sigle === 'RESP_DAJ') {
            el.text_decision = "Conforme";
          }
          if (el.giver_role_sigle === 'DE') {
            el.text_decision = "Conforme";
          }
          if (el.giver_role_sigle === 'DDAJ') {
            el.text_decision = "Conforme";
          }
        }
        if (_this2.name_decision == "serv_case_decision_logs") {
          if (el.giver_role_sigle == "AG_CASE") {
            if (el.outcome === 2) {
              el.text_decision = "Encodage effectué";
            }
          }
          if (el.giver_role_sigle === 'DCASE') {
            el.text_decision = "Encodage verifié";
          }
        }
        if (_this2.name_decision == "serv_back_office_decision_logs") {
          if (el.giver_role_sigle === 'AG_BO') {
            el.text_decision = "Demande de mise en place";
          }
          if (el.giver_role_sigle === 'R_BO') {
            el.text_decision = "Ok to process";
          }
          if (el.giver_role_sigle === 'DO') {
            var _dossier_credit;
            if (['Découvert Privilège'].includes((_dossier_credit = dossier_credit) === null || _dossier_credit === void 0 ? void 0 : _dossier_credit.applied_templ_name)) {
              el.text_decision = "Autorisé";
            } else {
              el.text_decision = "Accord pour mise en place";
            }
          }
        }
        if (last_key && decision_logs[last_key]) {
          var last_el = decision_logs[last_key];
          decision_logs[last_key] = last_el;
        }
        last_key = index;
      });
      return decision_logs;
    },
    madebyCafDemain: function madebyCafDemain(giver_role, stage_id) {
      if (stage_id == 0) {
        var _this$dossier_credit6;
        if (((_this$dossier_credit6 = this.dossier_credit) === null || _this$dossier_credit6 === void 0 ? void 0 : _this$dossier_credit6.mounted_by_caf_demain) == true) {
          return "CAF de demain";
        }
      }
      return giver_role;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/TemplateStamp.vue?vue&type=template&id=db35972c&scoped=true":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/TemplateStamp.vue?vue&type=template&id=db35972c&scoped=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm$dossier_credit5, _vm$dossier_credit6, _vm$dossier_credit7, _vm$dossier_credit8, _vm$dossier_credit9, _vm$dossier_credit0, _vm$dossier_credit1, _vm$dossier_credit10, _vm$dossier_credit11, _vm$dossier_credit12, _vm$dossier_credit13, _vm$dossier_credit14, _vm$dossier_credit15, _vm$_final_outcome, _vm$dossier_credit16, _vm$_final_outcome2, _vm$getData2, _vm$dossier_credit17, _vm$_final_outcome3, _vm$_final_outcome4, _vm$getData3, _vm$dossier_credit18, _vm$_final_outcome5, _vm$_final_outcome6, _vm$getData4, _vm$dossier_credit19, _vm$_final_outcome7, _vm$_final_outcome8, _vm$getData5, _vm$dossier_credit20, _vm$_final_outcome9, _vm$dossier_credit21, _vm$_final_outcome0, _vm$_final_outcome1, _vm$_final_outcome10, _vm$_final_outcome11, _vm$_final_outcome12, _vm$_final_outcome13, _vm$_final_outcome14;
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("div", {
    staticClass: "head-analyse-financiere relative",
    staticStyle: {
      "text-align": "center"
    }
  }, [_vm._v("\n    " + _vm._s(_vm.process_name) + "\n  ")]), _vm._v(" "), _c("hr", {
    staticStyle: {
      color: "#2980b9",
      "font-weight": "bold"
    }
  }), _vm._v(" "), _c("table", {
    staticClass: "table table-responsive"
  }, [_vm._m(0), _vm._v(" "), _vm._timesheets != undefined ? _c("tbody", _vm._l(_vm.filterDecisionLog(_vm._decision_logs), function (decision_log, index) {
    var _vm$hasBeenAjournee, _vm$dossier_credit2, _vm$dossier_credit4, _vm$recommandations, _vm$recommandations2, _vm$condition_decaiss, _vm$condition_decaiss2, _vm$condition_commerc, _vm$condition_commerc2, _vm$getData;
    return _c("tr", {
      key: index
    }, [_c("td", {
      staticClass: "col-md-3"
    }, [_vm._v(_vm._s(decision_log.stage_label))]), _vm._v(" "), _c("td", {
      staticClass: "col-md-5"
    }, [_vm.ajournement_logs != undefined ? _c("div", [_vm._l(_vm.hasBeenAjournee(decision_log.stage_id), function (hasBeenAj, jindex) {
      var _vm$dossier_credit;
      return _c("div", {
        key: jindex
      }, [_c("span", {
        staticClass: "stamp is-nope2"
      }, [_vm._v("Dossier Ajourné")]), _vm._v(" "), _c("br"), _vm._v(" "), _c("span", {
        staticStyle: {
          "font-size": "13px"
        }
      }, [_c("b", [_vm._v("Ajourné le")]), _vm._v("  :  "), _c("span", {
        staticStyle: {
          color: "#3498db"
        }
      }, [_vm._v(_vm._s(hasBeenAj["date"]))])]), _c("br"), _vm._v(" "), _c("span", {
        staticStyle: {
          "font-size": "13px"
        }
      }, [_c("b", [_vm._v("Par")]), _vm._v("  : " + _vm._s(hasBeenAj["name_ajourneur"]) + " | "), _c("span", {
        staticStyle: {
          color: "#34495e"
        }
      }, [_c("b", [_vm._v(_vm._s(hasBeenAj["role_ajourneur"]))])])]), _c("br"), _vm._v(" "), _c("h6", [_vm._v("Motifs de l'ajournement")]), _vm._v("\n              " + _vm._s(hasBeenAj["raison"]) + "\n              "), ![null, undefined].includes((_vm$dossier_credit = _vm.dossier_credit) === null || _vm$dossier_credit === void 0 ? void 0 : _vm$dossier_credit.pts_amendments_aj) ? [_c("br"), _vm._v(" "), _c("hr"), _vm._v(" "), _vm._m(1, true), _vm._v(" "), _c("button", {
        staticClass: "btn btn-sm border",
        staticStyle: {
          "box-shadow": "0 2px 4px 0 rgba(0, 0, 0, 0.08)"
        },
        attrs: {
          title: "VOIR LES POINTS"
        },
        on: {
          click: function click($event) {
            return _vm.openPts({
              user_id: decision_log === null || decision_log === void 0 ? void 0 : decision_log.user_id,
              stage_id: decision_log === null || decision_log === void 0 ? void 0 : decision_log.stage_id
            });
          }
        }
      }, [_c("i", {
        staticClass: "icofont-plus"
      }), _vm._v(" \n                  VOIR PLUS")])] : _vm._e()], 2);
    }), _vm._v(" "), !["", null, undefined, 0, "0"].includes((_vm$hasBeenAjournee = _vm.hasBeenAjournee(decision_log.stage_id)) === null || _vm$hasBeenAjournee === void 0 ? void 0 : _vm$hasBeenAjournee.length) ? _c("hr") : _vm._e()], 2) : _vm._e(), _vm._v(" "), _c("div", [decision_log.outcome === 1 ? _c("span", {
      staticClass: "stamp avis-fav"
    }, [_vm._v(_vm._s((decision_log === null || decision_log === void 0 ? void 0 : decision_log.text_decision) != undefined ? decision_log.text_decision : "Clôturé avec accord") + " ")]) : _vm._e(), _vm._v(" "), decision_log.outcome === -1 ? _c("span", {
      staticClass: "stamp avis-nonfav"
    }, [_vm._v(_vm._s((decision_log === null || decision_log === void 0 ? void 0 : decision_log.text_decision) != undefined ? decision_log.text_decision : "Clôturé avec refus") + " ")]) : _vm._e(), _vm._v(" "), decision_log.outcome === 2 ? _c("span", {
      staticClass: "stamp is-approved"
    }, [_vm._v(_vm._s((decision_log === null || decision_log === void 0 ? void 0 : decision_log.text_decision) != undefined ? decision_log.text_decision : "Avis Favorable") + " ")]) : _vm._e(), _vm._v(" "), decision_log.outcome === 3 ? _c("span", {
      staticClass: "stamp is-nope"
    }, [_vm._v(_vm._s((decision_log === null || decision_log === void 0 ? void 0 : decision_log.text_decision) != undefined ? decision_log.text_decision : "Avis défavorable") + " ")]) : _vm._e()]), _vm._v(" "), _c("br"), _vm._v(" "), _c("DisplayTimesheet", {
      attrs: {
        timesheet: _vm._timesheets[_vm.indexFinder(_vm._timesheets, decision_log.stage_id)],
        dossier_credit: _vm.dossier_credit,
        decision_log: decision_log
      }
    }), _vm._v(" "), _c("br"), _vm._v(" "), _c("span", {
      staticStyle: {
        "font-size": "13px"
      }
    }, [_c("b", [_vm._v("Par")]), _vm._v("  : " + _vm._s(decision_log.giver_name) + " | "), _c("span", {
      staticStyle: {
        color: "#34495e"
      }
    }, [_c("b", [_vm._v(_vm._s(_vm.madebyCafDemain(decision_log.giver_role, decision_log.stage_id)))])])]), _c("br"), _vm._v(" "), _c("SignaturePo", {
      attrs: {
        decision_log: decision_log
      }
    })], 1), _vm._v(" "), _c("td", {
      staticClass: "col-md-4"
    }, [((_vm$dossier_credit2 = _vm.dossier_credit) === null || _vm$dossier_credit2 === void 0 ? void 0 : _vm$dossier_credit2.aj_desc_logs) != undefined ? _c("div", _vm._l(_vm.hasBeenAj(decision_log.stage_id), function (hasBeenAssign, jindex) {
      var _vm$dossier_credit3;
      return _c("div", {
        key: jindex
      }, [_c("hr", {
        staticStyle: {
          border: "none",
          "border-top": "4px dotted #2980b9"
        }
      }), _vm._v(" "), _c("h6", [_c("b", {
        staticStyle: {
          color: "#e74c3c",
          "text-decoration": "underline"
        }
      }, [((_vm$dossier_credit3 = _vm.dossier_credit) === null || _vm$dossier_credit3 === void 0 ? void 0 : _vm$dossier_credit3.applied_templ_name) == "Derogation" ? [_vm._v("Avis du Directeur du crédit après ajournement")] : [_vm._v("Avis du CAF après ajournement")]], 2)]), _vm._v(" "), _c("b", [_vm._v(_vm._s(hasBeenAssign === null || hasBeenAssign === void 0 ? void 0 : hasBeenAssign.decision))]), _vm._v(" "), _c("br"), _vm._v(" "), _c("span", [_vm._v(_vm._s(hasBeenAssign === null || hasBeenAssign === void 0 ? void 0 : hasBeenAssign.message))]), _vm._v(" "), _c("br"), _vm._v(" "), _c("span", {
        staticStyle: {
          "font-size": "13px"
        }
      }, [_c("b", [_vm._v("Date")]), _vm._v(" : " + _vm._s(hasBeenAssign === null || hasBeenAssign === void 0 ? void 0 : hasBeenAssign.decision_date))]), _c("br"), _vm._v(" "), _c("hr", {
        staticStyle: {
          border: "none",
          "border-top": "4px dotted #2980b9"
        }
      })]);
    }), 0) : _vm._e(), _vm._v(" "), _vm.affectationLogs != undefined ? _c("div", _vm._l(_vm.hasBeenAssigned(decision_log.stage_id), function (hasBeenAssign, jindex) {
      return _c("div", {
        key: jindex
      }, [_c("hr", {
        staticStyle: {
          color: "#8e44ad",
          "font-weight": "bold"
        }
      }), _vm._v(" "), _c("span", {
        staticStyle: {
          "font-size": "13px"
        }
      }, [_c("b", [_vm._v("Affecté le")]), _vm._v("  :  "), _c("span", {
        staticStyle: {
          color: "#3498db"
        }
      }, [_vm._v(_vm._s(_vm._f("formatDateWhithTimeZone")(hasBeenAssign["date"])))])]), _c("br"), _vm._v(" "), _c("span", {
        staticStyle: {
          "font-size": "13px"
        }
      }, [_c("b", [_vm._v("Par")]), _vm._v("  : " + _vm._s(hasBeenAssign["author"]["name"]) + " | "), _c("span", {
        staticStyle: {
          color: "#34495e"
        }
      }, [_c("b", [_vm._v(_vm._s(hasBeenAssign["author"]["role"]))])])]), _c("br"), _vm._v(" "), _c("span", {
        staticStyle: {
          "font-size": "13px"
        }
      }, [_c("b", [_vm._v("Motifs de l'affectation")]), _vm._v("  : " + _vm._s(hasBeenAssign === null || hasBeenAssign === void 0 ? void 0 : hasBeenAssign.message) + " ")]), _c("br"), _vm._v(" "), "completed_at" in hasBeenAssign ? _c("span", [_vm._m(2, true), _vm._v(" "), _c("b", [_vm._v(_vm._s(hasBeenAssign["decision"]))]), _c("br"), _vm._v(" "), _c("span", [_vm._v(_vm._s(hasBeenAssign === null || hasBeenAssign === void 0 ? void 0 : hasBeenAssign.comment))]), _vm._v(" "), _c("br"), _vm._v(" "), _c("span", {
        staticStyle: {
          "font-size": "13px"
        }
      }, [_c("b", [_vm._v("Date")]), _vm._v(" : " + _vm._s(hasBeenAssign["completed_at"]))]), _c("br")]) : _vm._e(), _vm._v(" "), _c("hr", {
        staticStyle: {
          color: "#8e44ad",
          "font-weight": "bold"
        }
      })]);
    }), 0) : _vm._e(), _vm._v(" "), decision_log.stage_id === 0 && ((_vm$dossier_credit4 = _vm.dossier_credit) === null || _vm$dossier_credit4 === void 0 ? void 0 : _vm$dossier_credit4.aj_desc_logs) != undefined ? _c("div", [_c("ul", _vm._l(_vm.clearCafAvis(decision_log.outcome_message), function (item, idx) {
      return _c("li", {
        key: "av" + idx
      }, [idx == 0 ? _c("span", [_vm._v("\n                  " + _vm._s(item) + "\n                ")]) : _c("span", [item.length > 0 ? _c("span", [_c("b", {
        staticStyle: {
          color: "#e74c3c",
          "text-decoration": "underline"
        }
      }, [_vm._v("\n                      Avis après ajournement # " + _vm._s(idx) + "\n                    ")]), _vm._v(" "), _c("br"), _vm._v("\n                    " + _vm._s(item) + "\n                  ")]) : _vm._e()]), _vm._v(" "), _c("hr", {
        staticStyle: {
          color: "red"
        }
      })]);
    }), 0)]) : _c("div", [_vm._v(_vm._s(decision_log.outcome_message))]), _vm._v(" "), _c("hr", {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: ((_vm$recommandations = _vm.recommandations) === null || _vm$recommandations === void 0 ? void 0 : _vm$recommandations.length) > 0,
        expression: "recommandations?.length > 0"
      }]
    }), _vm._v(" "), _c("h6", {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: ((_vm$recommandations2 = _vm.recommandations) === null || _vm$recommandations2 === void 0 ? void 0 : _vm$recommandations2.length) > 0,
        expression: "recommandations?.length > 0"
      }]
    }, [_vm.getData(decision_log.given_by, _vm.recommandations, "recommandation").length > 0 ? _c("span", {
      staticClass: "italic"
    }, [_vm._v("Recommandations")]) : _vm._e()]), _vm._v(" "), _vm.recommandations ? _c("ul", _vm._l(_vm.getData(decision_log.given_by, _vm.recommandations, "recommandation"), function (rec, indexRec) {
      return _c("li", {
        key: indexRec
      }, [rec !== null && rec !== void 0 && rec.libelle ? _c("span", [_vm._v("- " + _vm._s(rec === null || rec === void 0 ? void 0 : rec.libelle))]) : _vm._e()]);
    }), 0) : _vm._e(), _vm._v(" "), _c("hr", {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: ((_vm$condition_decaiss = _vm.condition_decaissements) === null || _vm$condition_decaiss === void 0 ? void 0 : _vm$condition_decaiss.length) > 0,
        expression: "condition_decaissements?.length > 0"
      }]
    }), _vm._v(" "), _c("h6", {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: ((_vm$condition_decaiss2 = _vm.condition_decaissements) === null || _vm$condition_decaiss2 === void 0 ? void 0 : _vm$condition_decaiss2.length) > 0,
        expression: "condition_decaissements?.length > 0"
      }]
    }, [_vm.getData(decision_log.given_by, _vm.condition_decaissements, "condition_decaissements").length > 0 ? _c("span", {
      staticClass: "italic"
    }, [_vm._v("Condition de decaissements")]) : _vm._e()]), _vm._v(" "), _vm.condition_decaissements ? _c("ul", _vm._l(_vm.getData(decision_log.given_by, _vm.condition_decaissements, "condition_decaissements"), function (rec, indexRec) {
      return _c("li", {
        key: indexRec
      }, [rec !== null && rec !== void 0 && rec.libelle ? [_vm._v("- " + _vm._s(rec === null || rec === void 0 ? void 0 : rec.libelle))] : _vm._e()], 2);
    }), 0) : _vm._e(), _vm._v(" "), _c("hr", {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: ((_vm$condition_commerc = _vm.condition_commerciales) === null || _vm$condition_commerc === void 0 ? void 0 : _vm$condition_commerc.length) > 0,
        expression: "condition_commerciales?.length > 0"
      }]
    }), _vm._v(" "), _c("h6", {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: ((_vm$condition_commerc2 = _vm.condition_commerciales) === null || _vm$condition_commerc2 === void 0 ? void 0 : _vm$condition_commerc2.length) > 0,
        expression: "condition_commerciales?.length > 0"
      }]
    }, [((_vm$getData = _vm.getData(decision_log.given_by, _vm.condition_commerciales, "condition_commerciales")) === null || _vm$getData === void 0 ? void 0 : _vm$getData.length) > 0 ? _c("span", {
      staticClass: "italic"
    }, [_vm._v("Condition commerciales")]) : _vm._e()]), _vm._v(" "), _vm.condition_commerciales ? _c("ul", _vm._l(_vm.getData(decision_log.given_by, _vm.condition_commerciales, "condition_commerciales"), function (rec, indexRec) {
      return _c("li", {
        key: indexRec
      }, [rec !== null && rec !== void 0 && rec.libelle ? [_vm._v("- " + _vm._s(rec === null || rec === void 0 ? void 0 : rec.libelle))] : _vm._e()], 2);
    }), 0) : _vm._e()])]);
  }), 0) : _vm._e()]), _vm._v(" "), _c("br"), _vm._v(" "), (_vm$dossier_credit5 = _vm.dossier_credit) !== null && _vm$dossier_credit5 !== void 0 && _vm$dossier_credit5.has_affectation ? _c("div", [_c("div", {
    staticClass: "container-fluid tb"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-sm-6 col-md-6 col-lg-6"
  }, [_c("span", {
    staticClass: "stamp is-nope3"
  }, [_vm._v("Dossier Affecté")]), _vm._v(" "), _c("br"), _c("br"), _vm._v(" "), _c("span", {
    staticStyle: {
      "font-size": "13px"
    }
  }, [_c("b", [_vm._v("Affecté le")]), _vm._v("  :  "), _c("span", {
    staticStyle: {
      color: "#3498db"
    }
  }, [_vm._v(_vm._s(_vm._f("formatDateWhithTimeZone")((_vm$dossier_credit6 = _vm.dossier_credit) === null || _vm$dossier_credit6 === void 0 || (_vm$dossier_credit6 = _vm$dossier_credit6.affectation_logs[((_vm$dossier_credit7 = _vm.dossier_credit) === null || _vm$dossier_credit7 === void 0 ? void 0 : _vm$dossier_credit7.affectation_logs.length) - 1]) === null || _vm$dossier_credit6 === void 0 ? void 0 : _vm$dossier_credit6.date)))])]), _c("br"), _vm._v(" "), _c("span", {
    staticStyle: {
      "font-size": "13px"
    }
  }, [_c("b", [_vm._v("A")]), _vm._v("  : " + _vm._s((_vm$dossier_credit8 = _vm.dossier_credit) === null || _vm$dossier_credit8 === void 0 || (_vm$dossier_credit8 = _vm$dossier_credit8.affectation_logs[((_vm$dossier_credit9 = _vm.dossier_credit) === null || _vm$dossier_credit9 === void 0 ? void 0 : _vm$dossier_credit9.affectation_logs.length) - 1]) === null || _vm$dossier_credit8 === void 0 || (_vm$dossier_credit8 = _vm$dossier_credit8.target) === null || _vm$dossier_credit8 === void 0 ? void 0 : _vm$dossier_credit8.name) + " | "), _c("span", {
    staticStyle: {
      color: "#34495e"
    }
  }, [_c("b", [_vm._v(_vm._s((_vm$dossier_credit0 = _vm.dossier_credit) === null || _vm$dossier_credit0 === void 0 || (_vm$dossier_credit0 = _vm$dossier_credit0.affectation_logs[((_vm$dossier_credit1 = _vm.dossier_credit) === null || _vm$dossier_credit1 === void 0 ? void 0 : _vm$dossier_credit1.affectation_logs.length) - 1]) === null || _vm$dossier_credit0 === void 0 || (_vm$dossier_credit0 = _vm$dossier_credit0.target) === null || _vm$dossier_credit0 === void 0 ? void 0 : _vm$dossier_credit0.role))])])]), _c("br"), _vm._v(" "), _c("span", {
    staticStyle: {
      "font-size": "13px"
    }
  }, [_c("b", [_vm._v("Par")]), _vm._v("  : " + _vm._s((_vm$dossier_credit10 = _vm.dossier_credit) === null || _vm$dossier_credit10 === void 0 || (_vm$dossier_credit10 = _vm$dossier_credit10.affectation_logs[((_vm$dossier_credit11 = _vm.dossier_credit) === null || _vm$dossier_credit11 === void 0 ? void 0 : _vm$dossier_credit11.affectation_logs.length) - 1]) === null || _vm$dossier_credit10 === void 0 || (_vm$dossier_credit10 = _vm$dossier_credit10.author) === null || _vm$dossier_credit10 === void 0 ? void 0 : _vm$dossier_credit10.name) + " | "), _c("span", {
    staticStyle: {
      color: "#34495e"
    }
  }, [_c("b", [_vm._v(_vm._s((_vm$dossier_credit12 = _vm.dossier_credit) === null || _vm$dossier_credit12 === void 0 || (_vm$dossier_credit12 = _vm$dossier_credit12.affectation_logs[((_vm$dossier_credit13 = _vm.dossier_credit) === null || _vm$dossier_credit13 === void 0 ? void 0 : _vm$dossier_credit13.affectation_logs.length) - 1]) === null || _vm$dossier_credit12 === void 0 || (_vm$dossier_credit12 = _vm$dossier_credit12.author) === null || _vm$dossier_credit12 === void 0 ? void 0 : _vm$dossier_credit12.role))])])]), _c("br")]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-6 col-md-6 col-lg-6"
  }, [_c("h5", [_vm._v("Motifs de l'affectation")]), _vm._v("\n        " + _vm._s((_vm$dossier_credit14 = _vm.dossier_credit) === null || _vm$dossier_credit14 === void 0 || (_vm$dossier_credit14 = _vm$dossier_credit14.affectation_logs[((_vm$dossier_credit15 = _vm.dossier_credit) === null || _vm$dossier_credit15 === void 0 ? void 0 : _vm$dossier_credit15.affectation_logs.length) - 1]) === null || _vm$dossier_credit14 === void 0 ? void 0 : _vm$dossier_credit14.message) + "\n      ")])])])]) : _vm._e(), _vm._v(" "), _c("br"), _vm._v(" "), ((_vm$_final_outcome = _vm._final_outcome) === null || _vm$_final_outcome === void 0 ? void 0 : _vm$_final_outcome.outcome) != 0 ? _c("div", {
    "class": {
      "box ma": _vm.mise_en_place
    },
    attrs: {
      "data-label": ["Découvert Privilège"].includes((_vm$dossier_credit16 = _vm.dossier_credit) === null || _vm$dossier_credit16 === void 0 ? void 0 : _vm$dossier_credit16.applied_templ_name) ? "AUTORISE" : "MISE EN PLACE"
    }
  }, [_c("div", {
    staticClass: "container-fluid tb"
  }, [_c("div", {
    staticClass: "row"
  }, [_vm.name_decision == "serv_review_de_decision_logs" ? [_c("div", {
    staticClass: "col-sm-6 col-md-6 col-lg-6"
  }, [((_vm$_final_outcome2 = _vm._final_outcome) === null || _vm$_final_outcome2 === void 0 ? void 0 : _vm$_final_outcome2.outcome) === 1 ? _c("span", {
    staticClass: "stamp avis-fav"
  }, [_vm._v("Avis de non objection "), ((_vm$getData2 = _vm.getData(_vm._final_outcome.given_by, (_vm$dossier_credit17 = _vm.dossier_credit) === null || _vm$dossier_credit17 === void 0 ? void 0 : _vm$dossier_credit17.reserves, "reserve")) === null || _vm$getData2 === void 0 ? void 0 : _vm$getData2.length) > 0 ? _c("span", [_vm._v("sous reserve")]) : _vm._e()]) : _vm._e(), _vm._v(" "), ((_vm$_final_outcome3 = _vm._final_outcome) === null || _vm$_final_outcome3 === void 0 ? void 0 : _vm$_final_outcome3.outcome) === -1 ? _c("span", {
    staticClass: "stamp avis-nonfav"
  }, [_vm._v("Avis d'objection")]) : _vm._e(), _vm._v(" "), ((_vm$_final_outcome4 = _vm._final_outcome) === null || _vm$_final_outcome4 === void 0 ? void 0 : _vm$_final_outcome4.outcome) === 2 ? _c("span", {
    staticClass: "stamp is-approved"
  }, [_vm._v("Avis de non objection "), ((_vm$getData3 = _vm.getData(_vm._final_outcome.given_by, (_vm$dossier_credit18 = _vm.dossier_credit) === null || _vm$dossier_credit18 === void 0 ? void 0 : _vm$dossier_credit18.reserves, "reserve")) === null || _vm$getData3 === void 0 ? void 0 : _vm$getData3.length) > 0 ? _c("span", [_vm._v("sous reserve")]) : _vm._e()]) : _vm._e(), _vm._v(" "), ((_vm$_final_outcome5 = _vm._final_outcome) === null || _vm$_final_outcome5 === void 0 ? void 0 : _vm$_final_outcome5.outcome) === 3 ? _c("span", {
    staticClass: "stamp is-nope"
  }, [_vm._v("Avis d'objection")]) : _vm._e(), _vm._v(" "), _c("br")])] : _vm.name_decision == "serv_review_amount_decision_logs" ? [_c("div", {
    staticClass: "col-sm-6 col-md-6 col-lg-6"
  }, [((_vm$_final_outcome6 = _vm._final_outcome) === null || _vm$_final_outcome6 === void 0 ? void 0 : _vm$_final_outcome6.outcome) === 1 ? _c("span", {
    staticClass: "stamp avis-fav"
  }, [_vm._v("Avis de non objection "), ((_vm$getData4 = _vm.getData(_vm._final_outcome.given_by, (_vm$dossier_credit19 = _vm.dossier_credit) === null || _vm$dossier_credit19 === void 0 ? void 0 : _vm$dossier_credit19.reserves, "reserve")) === null || _vm$getData4 === void 0 ? void 0 : _vm$getData4.length) > 0 ? _c("span", [_vm._v("sous reserve")]) : _vm._e()]) : _vm._e(), _vm._v(" "), ((_vm$_final_outcome7 = _vm._final_outcome) === null || _vm$_final_outcome7 === void 0 ? void 0 : _vm$_final_outcome7.outcome) === -1 ? _c("span", {
    staticClass: "stamp avis-nonfav"
  }, [_vm._v("Avis d'objection")]) : _vm._e(), _vm._v(" "), ((_vm$_final_outcome8 = _vm._final_outcome) === null || _vm$_final_outcome8 === void 0 ? void 0 : _vm$_final_outcome8.outcome) === 2 ? _c("span", {
    staticClass: "stamp is-approved"
  }, [_vm._v("Avis de non objection "), ((_vm$getData5 = _vm.getData(_vm._final_outcome.given_by, (_vm$dossier_credit20 = _vm.dossier_credit) === null || _vm$dossier_credit20 === void 0 ? void 0 : _vm$dossier_credit20.reserves, "reserve")) === null || _vm$getData5 === void 0 ? void 0 : _vm$getData5.length) > 0 ? _c("span", [_vm._v("sous reserve")]) : _vm._e()]) : _vm._e(), _vm._v(" "), ((_vm$_final_outcome9 = _vm._final_outcome) === null || _vm$_final_outcome9 === void 0 ? void 0 : _vm$_final_outcome9.outcome) === 3 ? _c("span", {
    staticClass: "stamp is-nope"
  }, [_vm._v("Avis d'objection")]) : _vm._e(), _vm._v(" "), _c("br")])] : _vm.name_decision == "serv_back_office_decision_logs" ? [_c("div", {
    staticClass: "col-sm-6 col-md-6 col-lg-6"
  }, [["Découvert Privilège"].includes((_vm$dossier_credit21 = _vm.dossier_credit) === null || _vm$dossier_credit21 === void 0 ? void 0 : _vm$dossier_credit21.applied_templ_name) ? _c("span", {
    staticClass: "stamp avis-fav"
  }, [_vm._v("Autorisé")]) : _c("span", {
    staticClass: "stamp avis-fav"
  }, [_vm._v("Accord pour mise en place ")]), _vm._v(" "), _c("br")])] : _vm.name_decision == "serv_jurid_decision_logs" ? [_vm._m(3)] : _vm.name_decision == "serv_case_decision_logs" ? [_vm._m(4)] : [_c("div", {
    staticClass: "col-sm-6 col-md-6 col-lg-6"
  }, [((_vm$_final_outcome0 = _vm._final_outcome) === null || _vm$_final_outcome0 === void 0 ? void 0 : _vm$_final_outcome0.outcome) === 1 ? _c("span", {
    staticClass: "stamp avis-fav"
  }, [_vm._v("Accord")]) : _vm._e(), _vm._v(" "), ((_vm$_final_outcome1 = _vm._final_outcome) === null || _vm$_final_outcome1 === void 0 ? void 0 : _vm$_final_outcome1.outcome) === -1 ? _c("span", {
    staticClass: "stamp avis-nonfav"
  }, [_vm._v("Refus")]) : _vm._e(), _vm._v(" "), ((_vm$_final_outcome10 = _vm._final_outcome) === null || _vm$_final_outcome10 === void 0 ? void 0 : _vm$_final_outcome10.outcome) === 2 ? _c("span", {
    staticClass: "stamp is-approved"
  }, [_vm._v("Avis Favorable")]) : _vm._e(), _vm._v(" "), ((_vm$_final_outcome11 = _vm._final_outcome) === null || _vm$_final_outcome11 === void 0 ? void 0 : _vm$_final_outcome11.outcome) === 3 ? _c("span", {
    staticClass: "stamp is-nope"
  }, [_vm._v("Avis défavorable")]) : _vm._e(), _vm._v(" "), _c("br")])], _vm._v(" "), _c("div", {
    staticClass: "col-sm-6 col-md-6 col-lg-6"
  }, [_c("span", {
    staticStyle: {
      "font-size": "13px"
    }
  }, [_c("b", [_vm._v("Fait le")]), _vm._v("  :  "), _c("span", {
    staticStyle: {
      color: "#3498db"
    }
  }, [_vm._v(_vm._s((_vm$_final_outcome12 = _vm._final_outcome) === null || _vm$_final_outcome12 === void 0 ? void 0 : _vm$_final_outcome12.outcome_date))])]), _c("br"), _vm._v(" "), _c("span", {
    staticStyle: {
      "font-size": "13px"
    }
  }, [_c("b", [_vm._v("Par")]), _vm._v("  : " + _vm._s((_vm$_final_outcome13 = _vm._final_outcome) === null || _vm$_final_outcome13 === void 0 ? void 0 : _vm$_final_outcome13.giver_name) + " | "), _c("span", {
    staticStyle: {
      color: "#34495e"
    }
  }, [_c("b", [_vm._v(_vm._s((_vm$_final_outcome14 = _vm._final_outcome) === null || _vm$_final_outcome14 === void 0 ? void 0 : _vm$_final_outcome14.giver_role))])])]), _vm._v(" "), _c("br"), _vm._v(" "), _c("br")])], 2)])]) : _vm._e()]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", {
    staticStyle: {
      "background-color": "#34495e",
      color: "white",
      "font-size": "15px"
    }
  }, [_c("th", {
    staticClass: "col-md-3"
  }, [_vm._v("  Etape")]), _vm._v(" "), _c("th", {
    staticClass: "col-md-5"
  }, [_vm._v("Décision")]), _vm._v(" "), _c("th", {
    staticClass: "col-md-4"
  }, [_vm._v("Avis / Commentaire / Recommandations")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("h6", [_c("b", [_vm._v("Points d'ajournement à lever")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("h6", [_c("b", {
    staticStyle: {
      color: "#e74c3c",
      "text-decoration": "underline"
    }
  }, [_vm._v("\n                  Avis après affectation\n                ")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "col-sm-6 col-md-6 col-lg-6"
  }, [_c("span", {
    staticClass: "stamp avis-fav"
  }, [_vm._v("Conforme ")]), _vm._v(" "), _c("br")]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "col-sm-6 col-md-6 col-lg-6"
  }, [_c("span", {
    staticClass: "stamp avis-fav"
  }, [_vm._v("Décaissement autorisé")]), _vm._v(" "), _c("br")]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/TemplateStamp.vue?vue&type=style&index=0&id=db35972c&lang=css&scoped=true":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/TemplateStamp.vue?vue&type=style&index=0&id=db35972c&lang=css&scoped=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.head-analyse-financiere[data-v-db35972c]{\n  margin-top: 10px;\n  padding: 16px;\n  border: 2px solid ;\n  font-weight: bold;\n  text-align: center;\n  text-transform: uppercase;\n  background: rgb(215, 210, 210);\n}\n.stamp[data-v-db35972c] {\n  transform: rotate(-4deg);\n    color:  #3498db;\n    font-size: 1.5rem;\n    font-weight: 700;\n    border: 0.25rem solid #3498db;\n    display: inline-block;\n    padding: 0.25rem 1rem;\n  margin: 1rem auto;\n    text-transform: uppercase;\n  text-align: center;\n    border-radius: 1rem;\n    font-family: 'Courier';\n    -webkit-mask-image: url('/images/grunge.png');\n  -webkit-mask-size: 944px 604px;\n  mix-blend-mode: multiply;\n  /* float: right; */\n  /*\n  position: relative; */\n  /* top: 20vh;\n  right: -25vh; */\n}\n.is-nope[data-v-db35972c] {\n  color: #D23;\n  border: 0.5rem double #D23;\n  transform: rotate(3deg);\n    -webkit-mask-position: 2rem 3rem;\n  font-size: 1.5rem;\n}\n.is-approved[data-v-db35972c] {\n    color: #0A9928;\n    border: 0.5rem solid #0A9928;\n    -webkit-mask-position: 13rem 6rem;\n    transform: rotate(-4deg);\n  border-radius: 0;\n}\n.avis-fav[data-v-db35972c] {\n    color: #2ecc71;\n    border: 1rem double #2ecc71;\n    transform: rotate(1deg);\n  font-size: 1.2rem;\n  font-family: \"Open sans\", Helvetica, Arial, sans-serif;\n  border-radius: 0;\n  padding: 0.5rem;\n}\n.avis-nonfav[data-v-db35972c] {\n    color: #e74c3c;\n    border: 1rem double #e74c3c;\n    transform: rotate(1deg);\n  font-size: 1.2rem;\n  font-family: \"Open sans\", Helvetica, Arial, sans-serif;\n  border-radius: 0;\n  padding: 0.5rem;\n}\n.arbitrage[data-v-db35972c]{\n  color: #c1ff09;\n    border: 0.5rem solid #d5ff18;\n    -webkit-mask-position: 13rem 6rem;\n    transform: rotate(-4deg);\n  border-radius: 0;\n}\n.tb[data-v-db35972c]{\n   background-color: #ecf0f1;\n   padding:10px;\n   border-radius: 3px;\n   /* box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22); */\n   box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;\n}\n.is-nope2[data-v-db35972c] {\n  color: #e67e22;\n  border: 0.5rem double #e67e22;\n  transform: rotate(3deg);\n    -webkit-mask-position: 2rem 3rem;\n  font-size: 1.5rem;\n}\n.is-nope3[data-v-db35972c] {\n  color: #8e44ad;\n  border: 0.5rem double #8e44ad;\n  transform: rotate(3deg);\n    -webkit-mask-position: 2rem 3rem;\n  font-size: 1.5rem;\n}\n.is-nope4[data-v-db35972c] {\n  color: #a7d403;\n  border: 0.5rem double #a7d403;\n  transform: rotate(3deg);\n    -webkit-mask-position: 2rem 3rem;\n  font-size: 1.5rem;\n}\ndiv.box.ma[data-v-db35972c]:after\n{\n  content: attr(data-label);\n  position:absolute;\n  top:70px;\n  left:15px;\n  z-index:1;\n  font-family:Arial,sans-serif; /* Safari */ /* Firefox */ /* IE */ /* Opera */\n  transform: rotate(-45deg);\n  font-size:30px;\n  color:#3498db;\n  background:#fff;\n  border:solid 2px #3498db;\n  padding:3px;\n  border-radius:5px;\n  zoom:1;\n  filter:alpha(opacity=20);\n  opacity:0.3;\n  -webkit-text-shadow: 0 0 5px #3498db;\n  text-shadow: 0 0 5px #3498db;\n  box-shadow: 0 0 5px #3498db;\n}\n.rotingtxt[data-v-db35972c]{\n    transform: rotate(331deg);\n    font-size: 6em;\n    color: rgba(255, 5, 5, 0.17);\n    position: absolute;\n    font-family: \"Open sans\", Helvetica, Arial, sans-serif;\n    text-transform:uppercase;\n    padding-left: 6%;\n}\n.rotingtxt2[data-v-db35972c]{\n    /* transform: rotate(331deg); */\n    font-size: 0.8em;\n    color:#9b59b6;\n    /* position: absolute; */\n    font-family: \"Open sans\", Helvetica, Arial, sans-serif;\n    text-transform:uppercase;\n    /* padding-left: 2%; */\n}\ntd.overflow-wrap-anywhere div[data-v-db35972c] {\n  overflow-wrap: anywhere;\n}\n.specific-bg-color[data-v-db35972c] {\n  background: #f2f6fc;\n}\n.stamp-gray[data-v-db35972c] {\n  color: gray!important;\n    border: 0.25rem solid gray!important;\n}\n.accordion-button[data-v-db35972c] {\n  background-color: #007BFF;\n  color: white;\n  cursor: pointer;\n  padding: 10px 20px;\n  border: none;\n  border-radius: 5px;\n  outline: none;\n  transition: background-color 0.3s;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.accordion-button[data-v-db35972c]:hover {\n  background-color: #0056b3;\n}\n.chevron[data-v-db35972c] {\n  /* font-size: 18px; */\n  transition: transform 0.3s;\n}\n.chevron.open[data-v-db35972c] {\n  transform: rotate(180deg);\n}\n.accordion-content[data-v-db35972c] {\n  background-color: #f1f1f1;\n  padding: 15px;\n  margin-top: 10px;\n  border: 1px solid #ddd;\n  border-radius: 5px;\n  overflow: hidden;\n}\n\n/* Transitions */\n.accordion-enter-active[data-v-db35972c], .accordion-leave-active[data-v-db35972c] {\n  transition: all 0.3s ease;\n}\n.accordion-enter[data-v-db35972c], .accordion-leave-to[data-v-db35972c] {\n  height: 0;\n  padding: 0 15px;\n  opacity: 0;\n}\n.row-mixte[data-v-db35972c] {\n  display: flex;\n  margin-bottom: 8px;\n  border: black 1px solid;\n}\n.other_counter_container[data-v-db35972c] {\n  position: absolute;\n  top: 100px;\n  left: 0;\n  right: 0;\n  /* bottom: 0; */\n  display: flex; \n  justify-content: center;\n  align-items: center;\n  overflow: hidden;\n  pointer-events: none;\n  z-index: 1;\n  height: 1000px;\n}\n.other_counter[data-v-db35972c] {\n  transform: rotate(-55deg);\n  font-size: 5.5em;\n  color: rgba(52, 152, 219, 0.3);\n  white-space: nowrap;\n  font-weight: 900;\n}\n\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/TemplateStamp.vue?vue&type=style&index=0&id=db35972c&lang=css&scoped=true":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/TemplateStamp.vue?vue&type=style&index=0&id=db35972c&lang=css&scoped=true ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TemplateStamp_vue_vue_type_style_index_0_id_db35972c_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TemplateStamp.vue?vue&type=style&index=0&id=db35972c&lang=css&scoped=true */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/TemplateStamp.vue?vue&type=style&index=0&id=db35972c&lang=css&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TemplateStamp_vue_vue_type_style_index_0_id_db35972c_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TemplateStamp_vue_vue_type_style_index_0_id_db35972c_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/shared/TemplateStamp.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/shared/TemplateStamp.vue ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TemplateStamp_vue_vue_type_template_id_db35972c_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TemplateStamp.vue?vue&type=template&id=db35972c&scoped=true */ "./resources/js/components/shared/TemplateStamp.vue?vue&type=template&id=db35972c&scoped=true");
/* harmony import */ var _TemplateStamp_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TemplateStamp.vue?vue&type=script&lang=js */ "./resources/js/components/shared/TemplateStamp.vue?vue&type=script&lang=js");
/* harmony import */ var _TemplateStamp_vue_vue_type_style_index_0_id_db35972c_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TemplateStamp.vue?vue&type=style&index=0&id=db35972c&lang=css&scoped=true */ "./resources/js/components/shared/TemplateStamp.vue?vue&type=style&index=0&id=db35972c&lang=css&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _TemplateStamp_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _TemplateStamp_vue_vue_type_template_id_db35972c_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _TemplateStamp_vue_vue_type_template_id_db35972c_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "db35972c",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/shared/TemplateStamp.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/shared/TemplateStamp.vue?vue&type=script&lang=js":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/shared/TemplateStamp.vue?vue&type=script&lang=js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TemplateStamp_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TemplateStamp.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/TemplateStamp.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TemplateStamp_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/shared/TemplateStamp.vue?vue&type=style&index=0&id=db35972c&lang=css&scoped=true":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/components/shared/TemplateStamp.vue?vue&type=style&index=0&id=db35972c&lang=css&scoped=true ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TemplateStamp_vue_vue_type_style_index_0_id_db35972c_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TemplateStamp.vue?vue&type=style&index=0&id=db35972c&lang=css&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/TemplateStamp.vue?vue&type=style&index=0&id=db35972c&lang=css&scoped=true");


/***/ }),

/***/ "./resources/js/components/shared/TemplateStamp.vue?vue&type=template&id=db35972c&scoped=true":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/shared/TemplateStamp.vue?vue&type=template&id=db35972c&scoped=true ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TemplateStamp_vue_vue_type_template_id_db35972c_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TemplateStamp_vue_vue_type_template_id_db35972c_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TemplateStamp_vue_vue_type_template_id_db35972c_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TemplateStamp.vue?vue&type=template&id=db35972c&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/TemplateStamp.vue?vue&type=template&id=db35972c&scoped=true");


/***/ })

}]);