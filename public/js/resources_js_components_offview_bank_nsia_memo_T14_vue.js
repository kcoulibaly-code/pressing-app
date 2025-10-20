"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_offview_bank_nsia_memo_T14_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/T14.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/T14.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../services/auth.service */ "./resources/js/services/auth.service.js");
/* harmony import */ var _services_ebapis_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../services/ebapis.service */ "./resources/js/services/ebapis.service.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    dossier_credit: Object
  },
  mounted: function mounted() {
    // this.tableClosedOrOpened();
    // this.loadRetrieved();
    // this.loadTbAttrs();
    // if (this.dossier_credit?.cred_pub_tb_14) {
    //     this.loadBeforeRequest()
    // }
  },
  data: function data() {
    return {
      ebapisHost: _services_ebapis_service__WEBPACK_IMPORTED_MODULE_1__["default"].host,
      notationFinale: "",
      notationFinanciere: "",
      codeRatiosActivite: "",
      notationQuantitative: "",
      notationQualitatif: "",
      notation_qualitative: "",
      annee_referentielle: "",
      ncc: ''
    };
  },
  methods: {
    loadBeforeRequest: function loadBeforeRequest() {
      var _this = this;
      _services_auth_service__WEBPACK_IMPORTED_MODULE_0__["default"].loadUserData().then(function (res) {
        // this.getRatios(res)
        _this.getNotationFinale(res);
        _this.getNotationFinanciere(res);
        _this.getNotationQualitative(res);
      })["catch"](function (err) {
        console.log(err);
      });
    },
    getNotationFinanciere: function getNotationFinanciere(res) {
      var _this$dossier_credit,
        _this$dossier_credit2,
        _this2 = this;
      this.annee_referentielle = (_this$dossier_credit = this.dossier_credit) === null || _this$dossier_credit === void 0 || (_this$dossier_credit = _this$dossier_credit.cred_pub_tb_14) === null || _this$dossier_credit === void 0 ? void 0 : _this$dossier_credit.annee_referentielle;
      this.ncc = (_this$dossier_credit2 = this.dossier_credit) === null || _this$dossier_credit2 === void 0 || (_this$dossier_credit2 = _this$dossier_credit2.cred_pub_tb_14) === null || _this$dossier_credit2 === void 0 ? void 0 : _this$dossier_credit2.ncc;
      if (res.status == 200) {
        this.$axios.post(this.ebapisHost + 'creditbuilder/api/v1/apinoteratio/', {
          cc: this.ncc,
          annee: this.annee_referentielle
        }).then(function (response) {
          var _response$data, _response$data2;
          // this.sortedRatios(response.data)
          _this2.notationFinanciere = (_response$data = response.data) === null || _response$data === void 0 || (_response$data = _response$data.analyse_fin) === null || _response$data === void 0 ? void 0 : _response$data.RATIO;
          _this2.notationQuantitative = (_response$data2 = response.data) === null || _response$data2 === void 0 || (_response$data2 = _response$data2.analyse_fin) === null || _response$data2 === void 0 || (_response$data2 = _response$data2.NOTE_ENTREPRISE) === null || _response$data2 === void 0 ? void 0 : _response$data2[0];
        })["catch"](function (error) {
          console.error(error);
        });
      }
    },
    getNotationFinale: function getNotationFinale(res) {
      var _this$dossier_credit3,
        _this$dossier_credit4,
        _this3 = this;
      this.annee_referentielle = (_this$dossier_credit3 = this.dossier_credit) === null || _this$dossier_credit3 === void 0 || (_this$dossier_credit3 = _this$dossier_credit3.cred_pub_tb_00) === null || _this$dossier_credit3 === void 0 ? void 0 : _this$dossier_credit3.annee_referentielle;
      this.ncc = (_this$dossier_credit4 = this.dossier_credit) === null || _this$dossier_credit4 === void 0 || (_this$dossier_credit4 = _this$dossier_credit4.cred_pub_tb_00) === null || _this$dossier_credit4 === void 0 ? void 0 : _this$dossier_credit4.compte_contribuable;
      if (res.status == 200) {
        this.$axios.post(this.ebapisHost + 'creditbuilder/api/v1/load-score/', {
          cc: this.ncc
        }).then(function (response) {
          // this.sortedRatios(response.data)
          _this3.notationFinale = response.data.score;
        })["catch"](function (error) {
          console.error(error);
        });
      }
    },
    getNotationQualitative: function getNotationQualitative(res) {
      var _this$dossier_credit5,
        _this$dossier_credit6,
        _this4 = this;
      this.annee_referentielle = (_this$dossier_credit5 = this.dossier_credit) === null || _this$dossier_credit5 === void 0 || (_this$dossier_credit5 = _this$dossier_credit5.cred_pub_tb_00) === null || _this$dossier_credit5 === void 0 ? void 0 : _this$dossier_credit5.annee_referentielle;
      this.ncc = (_this$dossier_credit6 = this.dossier_credit) === null || _this$dossier_credit6 === void 0 || (_this$dossier_credit6 = _this$dossier_credit6.cred_pub_tb_00) === null || _this$dossier_credit6 === void 0 ? void 0 : _this$dossier_credit6.compte_contribuable;
      if (res.status == 200) {
        this.$axios.post(this.ebapisHost + 'creditbuilder/api/v1/load-notation-qualitatif/', {
          cc: this.ncc,
          annee: this.annee_referentielle
        }).then(function (response) {
          var _response$data3, _response$data4;
          // console.log("Notation qualitaive",response.data);
          // this.sortedRatios(response.data)
          _this4.notationQualitatif = response === null || response === void 0 || (_response$data3 = response.data) === null || _response$data3 === void 0 || (_response$data3 = _response$data3.analyse_fin) === null || _response$data3 === void 0 ? void 0 : _response$data3.notation_categorie;
          _this4.notation_qualitative = response === null || response === void 0 || (_response$data4 = response.data) === null || _response$data4 === void 0 || (_response$data4 = _response$data4.analyse_fin) === null || _response$data4 === void 0 ? void 0 : _response$data4.notation_qualitative;
        })["catch"](function (error) {
          console.error(error);
        });
      }
    },
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/T14.vue?vue&type=template&id=5ec5dab2&scoped=true":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/T14.vue?vue&type=template&id=5ec5dab2&scoped=true ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm$dossier_credit, _vm$dossier_credit2, _vm$dossier_credit3, _vm$dossier_credit4, _vm$dossier_credit5, _vm$dossier_credit6, _vm$dossier_credit7, _vm$dossier_credit8, _vm$dossier_credit9, _vm$dossier_credit0, _vm$dossier_credit1, _vm$dossier_credit10, _vm$dossier_credit11, _vm$dossier_credit12, _vm$dossier_credit13, _vm$dossier_credit14, _vm$dossier_credit15, _vm$dossier_credit16, _vm$dossier_credit17, _vm$dossier_credit18, _vm$dossier_credit19, _vm$dossier_credit20, _vm$dossier_credit21;
  var _vm = this,
    _c = _vm._self._c;
  return (_vm$dossier_credit = _vm.dossier_credit) !== null && _vm$dossier_credit !== void 0 && _vm$dossier_credit.cred_pub_tb_14 ? _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "justify-content-center"
  }, [_c("div", {
    staticClass: "head-memorandum-title mb-4 text-uppercase",
    staticStyle: {
      "text-align": "center"
    }
  }, [_vm._v("Commentaire sur la notation")]), _vm._v(" "), _c("div", {
    staticClass: "table-responsive py-3 justify-content-center"
  }, [_c("table", {
    staticClass: "table table-bordered"
  }, [_vm._m(0), _vm._v(" "), _c("tbody", [_vm._l((_vm$dossier_credit2 = _vm.dossier_credit) === null || _vm$dossier_credit2 === void 0 || (_vm$dossier_credit2 = _vm$dossier_credit2.cred_pub_tb_14) === null || _vm$dossier_credit2 === void 0 ? void 0 : _vm$dossier_credit2.notationFinanciere, function (notation, index) {
    return _c("tr", {
      key: index
    }, [_c("td", [_vm._v(_vm._s(notation === null || notation === void 0 ? void 0 : notation.NOM) + " - " + _vm._s(notation === null || notation === void 0 ? void 0 : notation.LIB))]), _vm._v(" "), _c("td", {
      staticClass: "text-center"
    }, [_vm._v(_vm._s(_vm._f("numberPrecision")(notation === null || notation === void 0 ? void 0 : notation.SCORE)))]), _vm._v(" "), _c("td", {
      staticClass: "text-center"
    }, [_vm._v(_vm._s(notation === null || notation === void 0 ? void 0 : notation.NOTE))]), _vm._v(" "), _c("td", {
      staticClass: "text-center"
    }, [_vm._v(_vm._s(notation.CRAN))]), _vm._v(" "), _c("td", {
      staticClass: "text-center"
    }, [_vm._v(_vm._s(notation.QUALIFICATION))])]);
  }), _vm._v(" "), _c("tr", {
    staticClass: "fw-bold text-upercase text-white",
    staticStyle: {
      "background-color": "#34495e"
    }
  }, [_c("td", [_vm._v("NOTATION PARTIELLE RATING QUANTITATIF")]), _vm._v(" "), _c("td"), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$dossier_credit3 = _vm.dossier_credit) === null || _vm$dossier_credit3 === void 0 || (_vm$dossier_credit3 = _vm$dossier_credit3.cred_pub_tb_14) === null || _vm$dossier_credit3 === void 0 || (_vm$dossier_credit3 = _vm$dossier_credit3.notationQuantitative) === null || _vm$dossier_credit3 === void 0 ? void 0 : _vm$dossier_credit3.NOTE))]), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$dossier_credit4 = _vm.dossier_credit) === null || _vm$dossier_credit4 === void 0 || (_vm$dossier_credit4 = _vm$dossier_credit4.cred_pub_tb_14) === null || _vm$dossier_credit4 === void 0 || (_vm$dossier_credit4 = _vm$dossier_credit4.notationQuantitative) === null || _vm$dossier_credit4 === void 0 ? void 0 : _vm$dossier_credit4.CRAN))]), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$dossier_credit5 = _vm.dossier_credit) === null || _vm$dossier_credit5 === void 0 || (_vm$dossier_credit5 = _vm$dossier_credit5.cred_pub_tb_14) === null || _vm$dossier_credit5 === void 0 || (_vm$dossier_credit5 = _vm$dossier_credit5.notationQuantitative) === null || _vm$dossier_credit5 === void 0 ? void 0 : _vm$dossier_credit5.QUALIFICATION))])])], 2)]), _vm._v(" "), _c("table", {
    staticClass: "table table-bordered mb-1"
  }, [_vm._m(1), _vm._v(" "), _c("tbody", [_vm._l((_vm$dossier_credit6 = _vm.dossier_credit) === null || _vm$dossier_credit6 === void 0 || (_vm$dossier_credit6 = _vm$dossier_credit6.cred_pub_tb_14) === null || _vm$dossier_credit6 === void 0 ? void 0 : _vm$dossier_credit6.notationQualitatif, function (note_qualit, index_) {
    return _c("tr", {
      key: index_
    }, [_c("td", [_vm._v(_vm._s(note_qualit === null || note_qualit === void 0 ? void 0 : note_qualit.categorie))]), _vm._v(" "), _c("td", {
      staticClass: "text-center"
    }, [_vm._v(_vm._s(_vm._f("numberPrecision")(note_qualit === null || note_qualit === void 0 ? void 0 : note_qualit.note)))]), _vm._v(" "), _c("td", {
      staticClass: "text-center"
    }, [_vm._v(_vm._s(note_qualit === null || note_qualit === void 0 ? void 0 : note_qualit.cran))]), _vm._v(" "), _c("td", {
      staticClass: "text-center"
    }, [_vm._v(_vm._s(note_qualit === null || note_qualit === void 0 ? void 0 : note_qualit.qualification))])]);
  }), _vm._v(" "), _c("tr", {
    staticClass: "fw-bold text-upercase text-white",
    staticStyle: {
      "background-color": "#34495e"
    }
  }, [_c("td", [_vm._v("NOTATION QUALITATIVE")]), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$dossier_credit7 = _vm.dossier_credit) === null || _vm$dossier_credit7 === void 0 || (_vm$dossier_credit7 = _vm$dossier_credit7.cred_pub_tb_14) === null || _vm$dossier_credit7 === void 0 || (_vm$dossier_credit7 = _vm$dossier_credit7.notation_qualitative) === null || _vm$dossier_credit7 === void 0 ? void 0 : _vm$dossier_credit7.note))]), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$dossier_credit8 = _vm.dossier_credit) === null || _vm$dossier_credit8 === void 0 || (_vm$dossier_credit8 = _vm$dossier_credit8.cred_pub_tb_14) === null || _vm$dossier_credit8 === void 0 || (_vm$dossier_credit8 = _vm$dossier_credit8.notation_qualitative) === null || _vm$dossier_credit8 === void 0 ? void 0 : _vm$dossier_credit8.cran))]), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$dossier_credit9 = _vm.dossier_credit) === null || _vm$dossier_credit9 === void 0 || (_vm$dossier_credit9 = _vm$dossier_credit9.cred_pub_tb_14) === null || _vm$dossier_credit9 === void 0 || (_vm$dossier_credit9 = _vm$dossier_credit9.notation_qualitative) === null || _vm$dossier_credit9 === void 0 ? void 0 : _vm$dossier_credit9.qualification))])])], 2)]), _vm._v(" "), _c("table", {
    staticClass: "table table-bordered mb-1"
  }, [_vm._m(2), _vm._v(" "), _c("tbody", [_c("tr", [_c("td", [_vm._v("RACINE CLIENT")]), _vm._v(" "), _c("td", {
    staticClass: "text-center"
  }, [_vm._v(_vm._s((_vm$dossier_credit0 = _vm.dossier_credit) === null || _vm$dossier_credit0 === void 0 || (_vm$dossier_credit0 = _vm$dossier_credit0.cred_pub_tb_14) === null || _vm$dossier_credit0 === void 0 || (_vm$dossier_credit0 = _vm$dossier_credit0.notationFinale) === null || _vm$dossier_credit0 === void 0 || (_vm$dossier_credit0 = _vm$dossier_credit0[0]) === null || _vm$dossier_credit0 === void 0 ? void 0 : _vm$dossier_credit0.RACINE))])]), _vm._v(" "), _c("tr", [_c("td", [_vm._v("COMPTE CONTRIBUABLE  ")]), _vm._v(" "), _c("td", {
    staticClass: "text-center"
  }, [_vm._v(_vm._s((_vm$dossier_credit1 = _vm.dossier_credit) === null || _vm$dossier_credit1 === void 0 || (_vm$dossier_credit1 = _vm$dossier_credit1.cred_pub_tb_14) === null || _vm$dossier_credit1 === void 0 || (_vm$dossier_credit1 = _vm$dossier_credit1.notationFinale) === null || _vm$dossier_credit1 === void 0 || (_vm$dossier_credit1 = _vm$dossier_credit1[0]) === null || _vm$dossier_credit1 === void 0 ? void 0 : _vm$dossier_credit1.NO_CPTE_CTRIB))])]), _vm._v(" "), _c("tr", [_c("td", [_vm._v("RAISON SOCIALE / SIGLE")]), _vm._v(" "), _c("td", {
    staticClass: "text-center"
  }, [_vm._v(_vm._s((_vm$dossier_credit10 = _vm.dossier_credit) === null || _vm$dossier_credit10 === void 0 || (_vm$dossier_credit10 = _vm$dossier_credit10.cred_pub_tb_14) === null || _vm$dossier_credit10 === void 0 || (_vm$dossier_credit10 = _vm$dossier_credit10.notationFinale) === null || _vm$dossier_credit10 === void 0 || (_vm$dossier_credit10 = _vm$dossier_credit10[0]) === null || _vm$dossier_credit10 === void 0 ? void 0 : _vm$dossier_credit10.NOM_ENT))])]), _vm._v(" "), _c("tr", [_c("td", [_vm._v("FORME JURIDIQUE")]), _vm._v(" "), _c("td", {
    staticClass: "text-center"
  }, [_vm._v(_vm._s((_vm$dossier_credit11 = _vm.dossier_credit) === null || _vm$dossier_credit11 === void 0 || (_vm$dossier_credit11 = _vm$dossier_credit11.cred_pub_tb_14) === null || _vm$dossier_credit11 === void 0 || (_vm$dossier_credit11 = _vm$dossier_credit11.notationFinale) === null || _vm$dossier_credit11 === void 0 || (_vm$dossier_credit11 = _vm$dossier_credit11[0]) === null || _vm$dossier_credit11 === void 0 ? void 0 : _vm$dossier_credit11.LIB_FRM_JUR))])]), _vm._v(" "), _c("tr", [_c("td", [_vm._v("ACTIVITÉ PRINCIPALE ")]), _vm._v(" "), _c("td", {
    staticClass: "text-center"
  }, [_vm._v(_vm._s((_vm$dossier_credit12 = _vm.dossier_credit) === null || _vm$dossier_credit12 === void 0 || (_vm$dossier_credit12 = _vm$dossier_credit12.cred_pub_tb_14) === null || _vm$dossier_credit12 === void 0 || (_vm$dossier_credit12 = _vm$dossier_credit12.notationFinale) === null || _vm$dossier_credit12 === void 0 || (_vm$dossier_credit12 = _vm$dossier_credit12[0]) === null || _vm$dossier_credit12 === void 0 ? void 0 : _vm$dossier_credit12.activite))])]), _vm._v(" "), _vm._m(3), _vm._v(" "), _c("tr", [_c("td", [_vm._v("CA " + _vm._s((_vm$dossier_credit13 = _vm.dossier_credit) === null || _vm$dossier_credit13 === void 0 || (_vm$dossier_credit13 = _vm$dossier_credit13.cred_pub_tb_00) === null || _vm$dossier_credit13 === void 0 ? void 0 : _vm$dossier_credit13.annee_referentielle))]), _vm._v(" "), _c("td", {
    staticClass: "text-center"
  }, [_vm._v(_vm._s((_vm$dossier_credit14 = _vm.dossier_credit) === null || _vm$dossier_credit14 === void 0 || (_vm$dossier_credit14 = _vm$dossier_credit14.cred_pub_tb_14) === null || _vm$dossier_credit14 === void 0 || (_vm$dossier_credit14 = _vm$dossier_credit14.notationFinale) === null || _vm$dossier_credit14 === void 0 || (_vm$dossier_credit14 = _vm$dossier_credit14[0]) === null || _vm$dossier_credit14 === void 0 ? void 0 : _vm$dossier_credit14.CA))])]), _vm._v(" "), _c("tr", [_c("td", [_vm._v("Capital " + _vm._s((_vm$dossier_credit15 = _vm.dossier_credit) === null || _vm$dossier_credit15 === void 0 || (_vm$dossier_credit15 = _vm$dossier_credit15.cred_pub_tb_00) === null || _vm$dossier_credit15 === void 0 ? void 0 : _vm$dossier_credit15.annee_referentielle))]), _vm._v(" "), _c("td", {
    staticClass: "text-center"
  }, [_vm._v(_vm._s((_vm$dossier_credit16 = _vm.dossier_credit) === null || _vm$dossier_credit16 === void 0 || (_vm$dossier_credit16 = _vm$dossier_credit16.cred_pub_tb_14) === null || _vm$dossier_credit16 === void 0 || (_vm$dossier_credit16 = _vm$dossier_credit16.notationFinale) === null || _vm$dossier_credit16 === void 0 || (_vm$dossier_credit16 = _vm$dossier_credit16[0]) === null || _vm$dossier_credit16 === void 0 ? void 0 : _vm$dossier_credit16.XB))])]), _vm._v(" "), _c("tr", [_c("td", [_vm._v("Rating " + _vm._s((_vm$dossier_credit17 = _vm.dossier_credit) === null || _vm$dossier_credit17 === void 0 || (_vm$dossier_credit17 = _vm$dossier_credit17.cred_pub_tb_00) === null || _vm$dossier_credit17 === void 0 ? void 0 : _vm$dossier_credit17.annee_referentielle))]), _vm._v(" "), _c("td", {
    staticClass: "text-center"
  }, [_vm._v(_vm._s((_vm$dossier_credit18 = _vm.dossier_credit) === null || _vm$dossier_credit18 === void 0 || (_vm$dossier_credit18 = _vm$dossier_credit18.cred_pub_tb_14) === null || _vm$dossier_credit18 === void 0 || (_vm$dossier_credit18 = _vm$dossier_credit18.notationFinale) === null || _vm$dossier_credit18 === void 0 || (_vm$dossier_credit18 = _vm$dossier_credit18[0]) === null || _vm$dossier_credit18 === void 0 ? void 0 : _vm$dossier_credit18.CRAN))])]), _vm._v(" "), _c("tr", [_c("td", [_vm._v("Ancien Rating " + _vm._s(((_vm$dossier_credit19 = _vm.dossier_credit) === null || _vm$dossier_credit19 === void 0 || (_vm$dossier_credit19 = _vm$dossier_credit19.cred_pub_tb_00) === null || _vm$dossier_credit19 === void 0 ? void 0 : _vm$dossier_credit19.annee_referentielle) - 1))]), _vm._v(" "), _c("td", {
    staticClass: "text-center"
  }, [_vm._v(_vm._s((_vm$dossier_credit20 = _vm.dossier_credit) === null || _vm$dossier_credit20 === void 0 || (_vm$dossier_credit20 = _vm$dossier_credit20.cred_pub_tb_14) === null || _vm$dossier_credit20 === void 0 || (_vm$dossier_credit20 = _vm$dossier_credit20.notationFinale) === null || _vm$dossier_credit20 === void 0 || (_vm$dossier_credit20 = _vm$dossier_credit20[1]) === null || _vm$dossier_credit20 === void 0 ? void 0 : _vm$dossier_credit20.CRAN))])]), _vm._v(" "), _vm._m(4)])]), _vm._v(" "), _c("table", {
    staticClass: "table table-bordered mb-3"
  }, [_vm._m(5), _vm._v(" "), _c("tbody", {
    staticStyle: {
      "font-size": "0.9rem"
    }
  }, [_c("tr", [_c("td", {
    domProps: {
      innerHTML: _vm._s((_vm$dossier_credit21 = _vm.dossier_credit) === null || _vm$dossier_credit21 === void 0 || (_vm$dossier_credit21 = _vm$dossier_credit21.cred_pub_tb_14) === null || _vm$dossier_credit21 === void 0 ? void 0 : _vm$dossier_credit21.commentaire_notation)
    }
  })])])])])])]) : _vm._e();
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", {
    staticClass: "bg-grey text-center"
  }, [_c("th", {
    attrs: {
      colspan: "5"
    }
  }, [_vm._v("NOTATION FINANCIERE")])]), _vm._v(" "), _c("tr", [_c("th", [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Rating edane")])]), _vm._v(" "), _c("th", [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Ratio")])]), _vm._v(" "), _c("th", [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("NI")])]), _vm._v(" "), _c("th", [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Notation")])]), _vm._v(" "), _c("th", [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Qualification")])])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", {
    staticClass: "bg-grey text-center"
  }, [_c("th", {
    attrs: {
      colspan: "5"
    }
  }, [_vm._v("NOTATION QUALITATIVE")])]), _vm._v(" "), _c("tr", [_c("th", [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Rating edane")])]), _vm._v(" "), _c("th", [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("NI")])]), _vm._v(" "), _c("th", [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Notation")])]), _vm._v(" "), _c("th", [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Qualification")])])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", {
    staticClass: "bg-grey text-center"
  }, [_c("th", {
    attrs: {
      colspan: "5"
    }
  }, [_vm._v("NOTATION FINALE")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("tr", [_c("td", [_vm._v("OBJET DE LA NOTATION ")]), _vm._v(" "), _c("td", {
    staticClass: "text-center"
  }, [_vm._v("A PRIORI")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("tr", [_c("td", [_vm._v("GESTIONNAIRE")]), _vm._v(" "), _c("td", {
    staticClass: "text-center"
  }, [_vm._v("Grande entreprise AFFAIRE")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", {
    staticStyle: {
      position: "sticky",
      top: "-0.9px",
      "z-index": "0"
    }
  }, [_c("tr", [_c("th", {
    staticClass: "text-center bg-grey",
    staticStyle: {
      "text-transform": "uppercase"
    }
  }, [_vm._v("Commentaire sur la notation")])])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/T14.vue?vue&type=style&index=0&id=5ec5dab2&lang=css&scoped=true":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/T14.vue?vue&type=style&index=0&id=5ec5dab2&lang=css&scoped=true ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.bg-grey[data-v-5ec5dab2]{\r\n    background-color:#f4f3f3;\r\n    font-weight: 600;\r\n    width: 32%;\n}\n.memo[data-v-5ec5dab2] {\r\n  margin-top: 10px;\r\n  padding: 10px;\r\n  border: 2px solid #fff;\r\n  font-weight: 550;\r\n  font-size: 16px;\r\n  text-align: left;\r\n  text-transform: uppercase;\r\n  background-color: #34495e;\r\n  color: #fff;\n}\r\n/* td {\r\n    width: 250px;\r\n} */\r\n\r\n/* input {\r\n    width: 250px;\r\n}\r\n.th{\r\n    padding: 4px;\r\n    padding-bottom: 0px;\r\n}\r\n\r\nselect {\r\n    width: 250px;\r\n} */\n.head-memorandum-title[data-v-5ec5dab2] {\r\n    margin-top: 15px;\r\n    padding: 16px;\r\n    color:#fff;\r\n    font-weight: bold;\r\n    background-color: #34495e;\r\n    border:2px solid #575759;\r\n    box-shadow: 1px 3px 4px #ddd;\r\n    font-size: 16px;\r\n    text-align: center;\r\n    text-transform: uppercase;\r\n    border-radius: 10px;\r\n    margin-bottom: 15px;\n}\n.lgcrd[data-v-5ec5dab2] {\r\n    font-size:20px;\r\n    font-weight:bold;\r\n    color:#dc0030;\n}\n.head-memorandum-title[data-v-5ec5dab2] {\r\n    margin-top: 15px;\r\n    padding: 16px;\r\n    color:#fff;\r\n    font-weight: bold;\r\n    background-color: #34495e;\r\n    border:2px solid #575759;\r\n    box-shadow: 1px 3px 4px #ddd;\r\n    font-size: 16px;\r\n    text-align: center;\r\n    text-transform: uppercase;\r\n    border-radius: 10px;\r\n    margin-bottom: 15px;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/T14.vue?vue&type=style&index=0&id=5ec5dab2&lang=css&scoped=true":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/T14.vue?vue&type=style&index=0&id=5ec5dab2&lang=css&scoped=true ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_T14_vue_vue_type_style_index_0_id_5ec5dab2_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./T14.vue?vue&type=style&index=0&id=5ec5dab2&lang=css&scoped=true */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/T14.vue?vue&type=style&index=0&id=5ec5dab2&lang=css&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_T14_vue_vue_type_style_index_0_id_5ec5dab2_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_T14_vue_vue_type_style_index_0_id_5ec5dab2_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/offview/bank/nsia/memo/T14.vue":
/*!****************************************************************!*\
  !*** ./resources/js/components/offview/bank/nsia/memo/T14.vue ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _T14_vue_vue_type_template_id_5ec5dab2_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./T14.vue?vue&type=template&id=5ec5dab2&scoped=true */ "./resources/js/components/offview/bank/nsia/memo/T14.vue?vue&type=template&id=5ec5dab2&scoped=true");
/* harmony import */ var _T14_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./T14.vue?vue&type=script&lang=js */ "./resources/js/components/offview/bank/nsia/memo/T14.vue?vue&type=script&lang=js");
/* harmony import */ var _T14_vue_vue_type_style_index_0_id_5ec5dab2_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./T14.vue?vue&type=style&index=0&id=5ec5dab2&lang=css&scoped=true */ "./resources/js/components/offview/bank/nsia/memo/T14.vue?vue&type=style&index=0&id=5ec5dab2&lang=css&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _T14_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _T14_vue_vue_type_template_id_5ec5dab2_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _T14_vue_vue_type_template_id_5ec5dab2_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "5ec5dab2",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/offview/bank/nsia/memo/T14.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/offview/bank/nsia/memo/T14.vue?vue&type=script&lang=js":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/offview/bank/nsia/memo/T14.vue?vue&type=script&lang=js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_T14_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./T14.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/T14.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_T14_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/offview/bank/nsia/memo/T14.vue?vue&type=style&index=0&id=5ec5dab2&lang=css&scoped=true":
/*!************************************************************************************************************************!*\
  !*** ./resources/js/components/offview/bank/nsia/memo/T14.vue?vue&type=style&index=0&id=5ec5dab2&lang=css&scoped=true ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_T14_vue_vue_type_style_index_0_id_5ec5dab2_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./T14.vue?vue&type=style&index=0&id=5ec5dab2&lang=css&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/T14.vue?vue&type=style&index=0&id=5ec5dab2&lang=css&scoped=true");


/***/ }),

/***/ "./resources/js/components/offview/bank/nsia/memo/T14.vue?vue&type=template&id=5ec5dab2&scoped=true":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/components/offview/bank/nsia/memo/T14.vue?vue&type=template&id=5ec5dab2&scoped=true ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_T14_vue_vue_type_template_id_5ec5dab2_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_T14_vue_vue_type_template_id_5ec5dab2_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_T14_vue_vue_type_template_id_5ec5dab2_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./T14.vue?vue&type=template&id=5ec5dab2&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/T14.vue?vue&type=template&id=5ec5dab2&scoped=true");


/***/ })

}]);