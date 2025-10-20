"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_offview_bank_afg_contre_analyse_daj_facility_security_agreement_CFSA2_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/contre_analyse_daj/facility_security_agreement/CFSA2.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/contre_analyse_daj/facility_security_agreement/CFSA2.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_connects_service_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../services/connects.service.js */ "./resources/js/services/connects.service.js");
/* harmony import */ var _services_proxy_service_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../services/proxy.service.js */ "./resources/js/services/proxy.service.js");
/* harmony import */ var _services_afg_f8_data_extractor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../services/afg/f8-data-extractor */ "./resources/js/services/afg/f8-data-extractor.js");
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    dossier_credit: Object
  },
  mounted: function mounted() {
    var _this$dossier_credit;
    var cred_pub_keys = this.determineCredPubTables((_this$dossier_credit = this.dossier_credit) === null || _this$dossier_credit === void 0 ? void 0 : _this$dossier_credit.applied_templ_name);
    this.f8Data = this.f8DataExtractor.getData(this.dossier_credit, cred_pub_keys[2]);
  },
  data: function data() {
    var _this$dossier_credit2, _this$dossier_credit3, _this$dossier_credit4, _this$dossier_credit5;
    return {
      connectsHost: _services_connects_service_js__WEBPACK_IMPORTED_MODULE_0__["default"].loadablehost(),
      current_key: '',
      kyc_checking: (_this$dossier_credit2 = this.dossier_credit) === null || _this$dossier_credit2 === void 0 || (_this$dossier_credit2 = _this$dossier_credit2.cred_pub_tb_19015) === null || _this$dossier_credit2 === void 0 ? void 0 : _this$dossier_credit2.kyc_checking,
      conformite_juridique: (_this$dossier_credit3 = this.dossier_credit) === null || _this$dossier_credit3 === void 0 || (_this$dossier_credit3 = _this$dossier_credit3.cred_pub_tb_19016) === null || _this$dossier_credit3 === void 0 ? void 0 : _this$dossier_credit3.conformite_juridique,
      revues_garanties: (_this$dossier_credit4 = this.dossier_credit) === null || _this$dossier_credit4 === void 0 || (_this$dossier_credit4 = _this$dossier_credit4.cred_pub_tb_19017) === null || _this$dossier_credit4 === void 0 ? void 0 : _this$dossier_credit4.revues_garanties,
      garantie_recueillis: (_this$dossier_credit5 = this.dossier_credit) === null || _this$dossier_credit5 === void 0 || (_this$dossier_credit5 = _this$dossier_credit5.cred_pub_tb_19017) === null || _this$dossier_credit5 === void 0 ? void 0 : _this$dossier_credit5.garantie_recueillis,
      f8Data: null,
      f8DataExtractor: _services_afg_f8_data_extractor__WEBPACK_IMPORTED_MODULE_2__["default"]
    };
  },
  computed: {
    ouiItems: function ouiItems(key) {
      var _this$key;
      return (_this$key = this[key]) === null || _this$key === void 0 ? void 0 : _this$key.filter(function (item) {
        return item.value === "Oui";
      });
      // return this.`${key}`?.filter((item) => item.value === "Oui");
    },
    garantiesGeneralesOld: function garantiesGeneralesOld() {
      var _this = this;
      return function () {
        var _this$f8Data, _this$f8Data2;
        var generales = Array.isArray((_this$f8Data = _this.f8Data) === null || _this$f8Data === void 0 ? void 0 : _this$f8Data.oldLinesgarantiesGenerales) ? _this.f8Data.oldLinesgarantiesGenerales : [];
        var specifiques = Array.isArray((_this$f8Data2 = _this.f8Data) === null || _this$f8Data2 === void 0 ? void 0 : _this$f8Data2.oldLinesgarantiesSpecifiques) ? _this.f8Data.oldLinesgarantiesSpecifiques : [];

        // Combine arrays
        var garantieOld = [].concat(_toConsumableArray(generales), _toConsumableArray(specifiques));
        return garantieOld.filter(function (garantie) {
          var _this$f8Data3, _this$authenticatedUs;
          // Find matching line, default to null if not found
          var line = ((_this$f8Data3 = _this.f8Data) === null || _this$f8Data3 === void 0 || (_this$f8Data3 = _this$f8Data3.oldLines) === null || _this$f8Data3 === void 0 ? void 0 : _this$f8Data3.find(function (l) {
            return Array.isArray(garantie.parentId) && (garantie.parentId.includes(l.id) || garantie.parentId.includes(l.from));
          })) || null;

          // Return true only if line exists and filiale matches
          return line && line.filiale === ((_this$authenticatedUs = _this.authenticatedUser) === null || _this$authenticatedUs === void 0 ? void 0 : _this$authenticatedUs.filiale);
        });
      };
    },
    garantie_recueilliss: function garantie_recueilliss() {
      var _this$dossier_credit6;
      return Array.isArray((_this$dossier_credit6 = this.dossier_credit) === null || _this$dossier_credit6 === void 0 || (_this$dossier_credit6 = _this$dossier_credit6.cred_pub_tb_19017) === null || _this$dossier_credit6 === void 0 ? void 0 : _this$dossier_credit6.garantie_recueillis) ? this.dossier_credit.cred_pub_tb_19017.garantie_recueillis : [];
    },
    combinedGaranties: function combinedGaranties() {
      var oldGaranties = this.garantiesGeneralesOld();
      var recueillirGaranties = this.garantie_recueilliss;
      var maxLength = Math.max(oldGaranties.length, recueillirGaranties.length);

      // Create paired array
      var combined = [];
      for (var i = 0; i < maxLength; i++) {
        combined.push({
          old: oldGaranties[i] || null,
          recueillir: recueillirGaranties[i] || null
        });
      }
      return combined;
    }
  },
  //   methods: {
  //     handleDoubleClickOrClick(event, index, key) {
  //       this.current_key = key;
  //       EventBus.$emit("open-extra-file-explorer");

  //       // Determine the correct array based on key
  //       let pieces;
  //       if (key === 'kyc_checking') {
  //         pieces = this.ouiItems?.[index];
  //       } else if (key === 'revues_garanties') {
  //         pieces = this.combinedGaranties[index]; // Use combinedGaranties for revues_garanties
  //       } else {
  //         console.warn(`Unknown key: ${key}`);
  //         return;
  //       }

  //       console.log('Pieces:', pieces, 'Current Key:', this.current_key);

  //       setTimeout(() => {
  //         EventBus.$emit("data-extra-file-explorer", {
  //           name: `Pièce jointe {(*)} ${key}${index}_${this.$route.params.templateId}`,
  //           template: key === 'revues_garanties' ? pieces?.old?.template || pieces?.recueillir?.template : pieces?.template,
  //           view: true,
  //         });
  //       }, 500);
  //     },
  //     determineCurrentKey() {
  //       return this.current_key; // Fix: Return this.current_key
  //     },
  //     countBy(index) {
  //       return index + 1;
  //     },
  //     getFiles() {
  //       ProxyService.proxyEbapis({
  //         url: this.connectsHost + 'api/get-files',
  //         method: 'POST',
  //         data: { file_identity: this.dossier_credit?.cred_pub_key },
  //       })
  //         .then(res => {
  //           res.data = JSON.parse(res.data);
  //           if (res.data.data?.length > 0 || res.data.data?.length != null) {
  //             this.files = res.data.data;
  //             let current_key = this.determineCurrentKey();
  //             console.log("Current Key:", current_key);

  //             // Determine the correct array based on current_key
  //             let targetArray;
  //             if (current_key === 'kyc_checking') {
  //               targetArray = this.ouiItems;
  //             } else if (current_key === 'revues_garanties') {
  //               targetArray = this.combinedGaranties;
  //             } else {
  //               console.warn(`Invalid current_key: ${current_key}`);
  //               return;
  //             }

  //             if (Array.isArray(targetArray)) {
  //               targetArray.forEach((element, index) => {
  //                 let count = 0;
  //                 this.files.forEach(file => {
  //                   if (file?.extra_file_template_id != null && element?.template?.id == file?.extra_file_template_id) {
  //                     count++;
  //                   }
  //                 });
  //                 targetArray[index]['files'] = count;
  //               });
  //             } else {
  //               console.warn(`Target array for ${current_key} is not an array`);
  //             }
  //           }
  //         })
  //         .catch(err => {
  //           console.error("getFiles error", err);
  //         });
  //     },
  //   },

  methods: {
    handleDoubleClickOrClick: function handleDoubleClickOrClick(event, index, key) {
      var _this$ouiItems,
        _this2 = this;
      this.current_key = key;
      EventBus.$emit("open-extra-file-explorer");
      var pieces = (_this$ouiItems = this.ouiItems) === null || _this$ouiItems === void 0 ? void 0 : _this$ouiItems[index];
      console.log(pieces, this.current_key);
      setTimeout(function () {
        EventBus.$emit("data-extra-file-explorer", {
          name: "Pièce jointe" + " {(*)} ".concat(key) + index + "_" + _this2.$route.params.templateId,
          // name: "Pièce jointe" + " {(*)}" + 'kyc_checking' + '_' + pieces?.id,

          template: pieces === null || pieces === void 0 ? void 0 : pieces.template,
          view: true
        });
      }, 500);
    },
    determineCurrentKey: function determineCurrentKey() {
      return current_key;
    },
    countBy: function countBy(index) {
      var i = index + 1;
      return i;
    },
    getFiles: function getFiles() {
      var _this$dossier_credit7,
        _this3 = this;
      _services_proxy_service_js__WEBPACK_IMPORTED_MODULE_1__["default"].proxyEbapis({
        url: this.connectsHost + 'api/get-files',
        method: 'POST',
        data: {
          file_identity: (_this$dossier_credit7 = this.dossier_credit) === null || _this$dossier_credit7 === void 0 ? void 0 : _this$dossier_credit7.cred_pub_key
        }
      }).then(function (res) {
        var _res$data$data, _res$data$data2;
        res.data = JSON.parse(res.data);
        if (((_res$data$data = res.data.data) === null || _res$data$data === void 0 ? void 0 : _res$data$data.length) > 0 || ((_res$data$data2 = res.data.data) === null || _res$data$data2 === void 0 ? void 0 : _res$data$data2.length) != null) {
          _this3.files = res.data.data;
          var _current_key = _this3.determineCurrentKey();
          console.log("current", _current_key);
          _this3[_current_key].forEach(function (element, index) {
            var count = 0;
            _this3.files.forEach(function (file) {
              var _element$template;
              if ((file === null || file === void 0 ? void 0 : file.extra_file_template_id) != null && (element === null || element === void 0 || (_element$template = element.template) === null || _element$template === void 0 ? void 0 : _element$template.id) == (file === null || file === void 0 ? void 0 : file.extra_file_template_id)) {
                count++;
              }
            });
            _this3[_current_key][index]['files'] = count;
          });
        }
      })["catch"](function (err) {
        console.error("getFiles error", err);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/contre_analyse_daj/facility_security_agreement/CFSA2.vue?vue&type=template&id=4c7a819b&scoped=true":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/contre_analyse_daj/facility_security_agreement/CFSA2.vue?vue&type=template&id=4c7a819b&scoped=true ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm$dossier_credit, _vm$dossier_credit2, _vm$dossier_credit3, _vm$dossier_credit4, _vm$dossier_credit5, _vm$dossier_credit6, _vm$dossier_credit7, _vm$dossier_credit8, _vm$dossier_credit9, _vm$dossier_credit0, _vm$dossier_credit1, _vm$dossier_credit10, _vm$dossier_credit11, _vm$dossier_credit12, _vm$dossier_credit13, _vm$dossier_credit14, _vm$dossier_credit15, _vm$dossier_credit16;
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "row p-0 m-0"
  }, [_c("div", {
    staticClass: "col-12 p-2"
  }, [_c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-bordered"
  }, [_c("tbody", [_vm._m(0), _vm._v(" "), _c("tr", [_c("td", [_vm._v(_vm._s(_vm._f("formatDate")((_vm$dossier_credit = _vm.dossier_credit) === null || _vm$dossier_credit === void 0 || (_vm$dossier_credit = _vm$dossier_credit.cred_pub_tb_19014) === null || _vm$dossier_credit === void 0 ? void 0 : _vm$dossier_credit.date_saisie)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$dossier_credit2 = _vm.dossier_credit) === null || _vm$dossier_credit2 === void 0 || (_vm$dossier_credit2 = _vm$dossier_credit2.cred_pub_tb_00) === null || _vm$dossier_credit2 === void 0 ? void 0 : _vm$dossier_credit2.denomination_client))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm._f("formatDate")((_vm$dossier_credit3 = _vm.dossier_credit) === null || _vm$dossier_credit3 === void 0 || (_vm$dossier_credit3 = _vm$dossier_credit3.serv_jurid_decision_logs) === null || _vm$dossier_credit3 === void 0 || (_vm$dossier_credit3 = _vm$dossier_credit3[0]) === null || _vm$dossier_credit3 === void 0 ? void 0 : _vm$dossier_credit3.outcome_date)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$dossier_credit4 = _vm.dossier_credit) === null || _vm$dossier_credit4 === void 0 || (_vm$dossier_credit4 = _vm$dossier_credit4.serv_jurid_decision_logs) === null || _vm$dossier_credit4 === void 0 || (_vm$dossier_credit4 = _vm$dossier_credit4[0]) === null || _vm$dossier_credit4 === void 0 ? void 0 : _vm$dossier_credit4.giver_name))])])])])])]), _vm._v(" "), _c("div", {
    staticClass: "col-12 p-2"
  }, [_c("ol", [_c("li", {
    attrs: {
      type: "I"
    }
  }, [_c("h5", {
    staticStyle: {
      "text-decoration": "underline"
    }
  }, [_vm._v("SIGNALETIQUE")]), _vm._v(" "), _c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-bordered"
  }, [_c("thead", [_c("tr", [_c("td", [_vm._v("DENOMINATION CLIENT")]), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$dossier_credit5 = _vm.dossier_credit) === null || _vm$dossier_credit5 === void 0 || (_vm$dossier_credit5 = _vm$dossier_credit5.cred_pub_tb_19014) === null || _vm$dossier_credit5 === void 0 ? void 0 : _vm$dossier_credit5.dom_client))]), _vm._v(" "), _c("td", [_vm._v("N° COMPTE")]), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$dossier_credit6 = _vm.dossier_credit) === null || _vm$dossier_credit6 === void 0 || (_vm$dossier_credit6 = _vm$dossier_credit6.cred_pub_tb_19014) === null || _vm$dossier_credit6 === void 0 ? void 0 : _vm$dossier_credit6.numero_compte))])])]), _vm._v(" "), _c("tbody", [_c("tr", [_c("td", [_vm._v("GROUPE")]), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$dossier_credit7 = _vm.dossier_credit) === null || _vm$dossier_credit7 === void 0 || (_vm$dossier_credit7 = _vm$dossier_credit7.cred_pub_tb_19014) === null || _vm$dossier_credit7 === void 0 ? void 0 : _vm$dossier_credit7.groupe))]), _vm._v(" "), _c("td", [_vm._v("DATE D’OUVERTURE")]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm._f("formatDate")((_vm$dossier_credit8 = _vm.dossier_credit) === null || _vm$dossier_credit8 === void 0 || (_vm$dossier_credit8 = _vm$dossier_credit8.cred_pub_tb_19014) === null || _vm$dossier_credit8 === void 0 ? void 0 : _vm$dossier_credit8.date_douvertue)))])]), _vm._v(" "), _c("tr", [_c("td", [_vm._v("CAPITAL SOCIAL ")]), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$dossier_credit9 = _vm.dossier_credit) === null || _vm$dossier_credit9 === void 0 || (_vm$dossier_credit9 = _vm$dossier_credit9.cred_pub_tb_19014) === null || _vm$dossier_credit9 === void 0 ? void 0 : _vm$dossier_credit9.capital_social))]), _vm._v(" "), _c("td", [_vm._v("ACTIVITE")]), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$dossier_credit0 = _vm.dossier_credit) === null || _vm$dossier_credit0 === void 0 || (_vm$dossier_credit0 = _vm$dossier_credit0.cred_pub_tb_19014) === null || _vm$dossier_credit0 === void 0 ? void 0 : _vm$dossier_credit0.activite))])]), _vm._v(" "), _c("tr", [_c("td", [_vm._v("ADRESSE/ SIEGE SOCIAL")]), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$dossier_credit1 = _vm.dossier_credit) === null || _vm$dossier_credit1 === void 0 || (_vm$dossier_credit1 = _vm$dossier_credit1.cred_pub_tb_19014) === null || _vm$dossier_credit1 === void 0 ? void 0 : _vm$dossier_credit1.siege_social))]), _vm._v(" "), _c("td", [_vm._v("CONTACTS")]), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$dossier_credit10 = _vm.dossier_credit) === null || _vm$dossier_credit10 === void 0 || (_vm$dossier_credit10 = _vm$dossier_credit10.cred_pub_tb_19014) === null || _vm$dossier_credit10 === void 0 ? void 0 : _vm$dossier_credit10.contacts))])]), _vm._v(" "), _c("tr", [_c("td", [_vm._v("DATE DE CREATION ")]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm._f("formatDate")((_vm$dossier_credit11 = _vm.dossier_credit) === null || _vm$dossier_credit11 === void 0 || (_vm$dossier_credit11 = _vm$dossier_credit11.cred_pub_tb_19014) === null || _vm$dossier_credit11 === void 0 ? void 0 : _vm$dossier_credit11.date_creation)))]), _vm._v(" "), _c("td", [_vm._v("CHARGE D’AFFAIRE")]), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$dossier_credit12 = _vm.dossier_credit) === null || _vm$dossier_credit12 === void 0 || (_vm$dossier_credit12 = _vm$dossier_credit12.cred_pub_tb_19014) === null || _vm$dossier_credit12 === void 0 ? void 0 : _vm$dossier_credit12.charge_d_affaire))])]), _vm._v(" "), _c("tr", [_c("td", [_vm._v("FORME JURIDIQUE ")]), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$dossier_credit13 = _vm.dossier_credit) === null || _vm$dossier_credit13 === void 0 || (_vm$dossier_credit13 = _vm$dossier_credit13.cred_pub_tb_19014) === null || _vm$dossier_credit13 === void 0 ? void 0 : _vm$dossier_credit13.forme_juridique))]), _vm._v(" "), _c("td", [_vm._v("DIRIGEANTS")]), _vm._v(" "), _c("td", _vm._l((_vm$dossier_credit14 = _vm.dossier_credit) === null || _vm$dossier_credit14 === void 0 || (_vm$dossier_credit14 = _vm$dossier_credit14.cred_pub_tb_19014) === null || _vm$dossier_credit14 === void 0 ? void 0 : _vm$dossier_credit14.dirigeants, function (dirigeant) {
    return _c("span", {
      key: "dirigeant" + dirigeant.id
    }, [_c("span", {
      staticClass: "fw-bold"
    }, [_vm._v("Nom : ")]), _vm._v(" " + _vm._s(dirigeant === null || dirigeant === void 0 ? void 0 : dirigeant.dirigeants) + " "), _c("br"), _vm._v(" "), _c("span", {
      staticClass: "fw-bold"
    }, [_vm._v("sexe : ")]), _vm._v(" " + _vm._s(dirigeant === null || dirigeant === void 0 ? void 0 : dirigeant.sexe) + " "), _c("br")]);
  }), 0)]), _vm._v(" "), _c("tr", [_c("td", [_vm._v("ACTIONNAIRES")]), _vm._v(" "), _c("td", {
    attrs: {
      colspan: "3"
    }
  }, _vm._l((_vm$dossier_credit15 = _vm.dossier_credit) === null || _vm$dossier_credit15 === void 0 || (_vm$dossier_credit15 = _vm$dossier_credit15.cred_pub_tb_19014) === null || _vm$dossier_credit15 === void 0 ? void 0 : _vm$dossier_credit15.actionnaires, function (actionnaire) {
    return _c("span", {
      key: "actionnaire" + actionnaire.id
    }, [_c("span", {
      staticClass: "fw-bold"
    }, [_vm._v("Nom : ")]), _vm._v(" " + _vm._s(actionnaire === null || actionnaire === void 0 ? void 0 : actionnaire.nom_actionnaire) + " "), _c("br")]);
  }), 0)])])])])]), _vm._v(" "), _c("li", [_c("h5", {
    staticStyle: {
      "text-decoration": "underline"
    }
  }, [_vm._v("KYC CHECKING ")]), _vm._v(" "), _c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-bordered"
  }, [_vm._m(1), _vm._v(" "), _c("tbody", _vm._l(_vm.kyc_checking, function (el, index) {
    return _c("tr", {
      key: "kyc_checking" + index
    }, [_c("th", [_vm._v(_vm._s(_vm.countBy(index)))]), _vm._v(" "), _c("td", [_c("span", {
      staticClass: "fw-bold"
    }, [_vm._v(_vm._s(el.name.split(" : ")[0]) + " : ")]), _vm._v(_vm._s(el.name))]), _vm._v(" "), _c("td", [_c("span", [_vm._v("\n                                        " + _vm._s(el.value === "Non applicable" ? "Non" : el.value === "Oui" ? "Oui" : "Non") + "\n                                        ")]), _vm._v(" "), el.value == "Oui" && (el === null || el === void 0 ? void 0 : el.files) > 0 ? _c("span", [_c("span", [(el === null || el === void 0 ? void 0 : el.files) > 0 ? _c("span", {
      staticClass: "p-1 px-2 mx-2 text-nowrap",
      staticStyle: {
        "background-color": "rgb(44, 62, 80)",
        color: "white",
        "font-size": "13px",
        "border-radius": "5px",
        "margin-left": "0!important",
        width: "150px",
        cursor: "pointer"
      },
      on: {
        click: function click($event) {
          return _vm.handleDoubleClickOrClick($event, index, "kyc_checking");
        }
      }
    }, [_vm._v(_vm._s((el === null || el === void 0 ? void 0 : el.files) > 0 ? (el === null || el === void 0 ? void 0 : el.files) + " fichier(s) uploadé(s)" : "") + "\n                                            ")]) : _vm._e()])]) : _vm._e()]), _vm._v(" "), _c("td", [_vm._v(_vm._s(el.comment))])]);
  }), 0)])])]), _vm._v(" "), _c("li", [_c("h5", {
    staticStyle: {
      "text-decoration": "underline"
    }
  }, [_vm._v("CONFORMITE JURIDIQUE DE L’ACTIVITÉ ")]), _vm._v(" "), _c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-bordered"
  }, [_vm._m(2), _vm._v(" "), _c("tbody", _vm._l(_vm.conformite_juridique, function (elm, i) {
    return _c("tr", {
      key: "conformite_juridique_activite" + i
    }, [_c("th", [_vm._v(_vm._s(_vm.countBy(i)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(elm.name))]), _vm._v(" "), _c("td", [_c("span", [_vm._v("\n                                        " + _vm._s(elm.value === "Non applicable" ? "Non" : elm.value === "Oui" ? "Oui" : "Non") + "\n                                        ")]), _vm._v(" "), elm.value == "Oui" && (elm === null || elm === void 0 ? void 0 : elm.files) > 0 ? _c("span", [_c("span", [(elm === null || elm === void 0 ? void 0 : elm.files) > 0 ? _c("span", {
      staticClass: "p-1 px-2 mx-2 text-nowrap",
      staticStyle: {
        "background-color": "rgb(44, 62, 80)",
        color: "white",
        "font-size": "13px",
        "border-radius": "5px",
        "margin-left": "0!important",
        width: "150px",
        cursor: "pointer"
      },
      on: {
        click: function click($event) {
          return _vm.handleDoubleClickOrClick($event, i, "conformite_juridique");
        }
      }
    }, [_vm._v(_vm._s((elm === null || elm === void 0 ? void 0 : elm.files) > 0 ? (elm === null || elm === void 0 ? void 0 : elm.files) + " fichier(s) uploadé(s)" : "") + "\n                                            ")]) : _vm._e()])]) : _vm._e()]), _vm._v(" "), _c("td", [_vm._v(_vm._s(elm.comment))])]);
  }), 0)])])]), _vm._v(" "), _c("li", [_c("h5", {
    staticStyle: {
      "text-decoration": "underline"
    }
  }, [_vm._v("REVUE DES GARANTIES ")]), _vm._v(" "), _c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-bordered"
  }, [_vm._m(3), _vm._v(" "), _c("tbody", _vm._l(_vm.revues_garanties, function (item, k) {
    return _c("tr", {
      key: "revue_garanties" + k
    }, [_c("th", [_vm._v(_vm._s(_vm.countBy(k)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(item.name))]), _vm._v(" "), _c("td", [_c("span", [_vm._v("\n                                        " + _vm._s(item.value === "Non applicable" ? "Non" : item.value === "Oui" ? "Oui" : "Non") + "\n                                        ")]), _vm._v(" "), item.value == "Oui" && (item === null || item === void 0 ? void 0 : item.files) > 0 ? _c("span", [_c("span", [(item === null || item === void 0 ? void 0 : item.files) > 0 ? _c("span", {
      staticClass: "p-1 px-2 mx-2 text-nowrap",
      staticStyle: {
        "background-color": "rgb(44, 62, 80)",
        color: "white",
        "font-size": "13px",
        "border-radius": "5px",
        "margin-left": "0!important",
        width: "150px",
        cursor: "pointer"
      },
      on: {
        click: function click($event) {
          return _vm.handleDoubleClickOrClick($event, k, "revues_garanties");
        }
      }
    }, [_vm._v(_vm._s((item === null || item === void 0 ? void 0 : item.files) > 0 ? (item === null || item === void 0 ? void 0 : item.files) + " fichier(s) uploadé(s)" : "") + "\n                                            ")]) : _vm._e()])]) : _vm._e()]), _vm._v(" "), _c("td", [_vm._v(_vm._s(item.comment))])]);
  }), 0)])]), _vm._v(" "), _c("div", {
    staticClass: "table-responsive mt-4"
  }, [_c("table", {
    staticClass: "table table-bordered"
  }, [_vm._m(4), _vm._v(" "), _c("tbody", _vm._l(_vm.combinedGaranties, function (item, n) {
    var _item$old, _item$old2, _item$old3, _item$recueillir, _item$recueillir2;
    return _c("tr", {
      key: "garantie_row" + n
    }, [_c("th", [_vm._v(_vm._s(n + 1))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(((_item$old = item.old) === null || _item$old === void 0 ? void 0 : _item$old.formulation_surete) || "-"))]), _vm._v(" "), _c("td", [_c("ul", [_c("li", [((_item$old2 = item.old) === null || _item$old2 === void 0 || (_item$old2 = _item$old2.state_) === null || _item$old2 === void 0 ? void 0 : _item$old2.is_detained) == "detenues" ? _c("span", {
      staticClass: "badge badge-success"
    }, [_vm._v("Recueilli")]) : item.old ? _c("span", {
      staticClass: "badge badge-danger"
    }, [_vm._v("Non Recueilli")]) : _c("span", [_vm._v("-")])])])]), _vm._v(" "), _c("td", [_vm._v(_vm._s(((_item$old3 = item.old) === null || _item$old3 === void 0 ? void 0 : _item$old3.name_garantie) || "-"))]), _vm._v(" "), _c("th", [_vm._v(_vm._s(n + 1))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(((_item$recueillir = item.recueillir) === null || _item$recueillir === void 0 ? void 0 : _item$recueillir.formulation_surete) || "-"))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(((_item$recueillir2 = item.recueillir) === null || _item$recueillir2 === void 0 ? void 0 : _item$recueillir2.name_garantie) || "-"))])]);
  }), 0)])]), _vm._v(" "), _c("div", {
    staticClass: "table-responsive py-3 justify-content-center"
  }, [_c("table", {
    staticClass: "table table-bordered mb-3"
  }, [_c("tbody", {
    staticStyle: {
      "font-size": "0.9rem"
    }
  }, [_c("tr", [_c("td", {
    domProps: {
      innerHTML: _vm._s((_vm$dossier_credit16 = _vm.dossier_credit) === null || _vm$dossier_credit16 === void 0 || (_vm$dossier_credit16 = _vm$dossier_credit16.cred_pub_tb_19017) === null || _vm$dossier_credit16 === void 0 ? void 0 : _vm$dossier_credit16.comment_pieces_requises)
    }
  })])])])])])])])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("tr", [_c("td", [_vm._v("Date de saisine")]), _vm._v(" "), _c("td", [_vm._v("Demandeur")]), _vm._v(" "), _c("td", [_vm._v("Analyse effectuée par ")]), _vm._v(" "), _c("td", [_vm._v("Date d'émission de l'avis ")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("th", {
    staticClass: "text-danger"
  }, [_vm._v("N°")]), _vm._v(" "), _c("th", {
    staticClass: "text-danger text-center"
  }, [_vm._v("Éléments et Documents à vérifier  ")]), _vm._v(" "), _c("th", {
    staticClass: "text-danger"
  }, [_vm._v("Vu (Oui ou Non)")]), _vm._v(" "), _c("th", {
    staticClass: "text-danger"
  }, [_vm._v("Observations ")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("th", {
    staticClass: "text-dark"
  }), _vm._v(" "), _c("th", {
    staticClass: "text-dark"
  }, [_vm._v("KEY POINTS")]), _vm._v(" "), _c("th", {
    staticClass: "text-dark"
  }, [_vm._v("Vu (Oui ou Non)")]), _vm._v(" "), _c("th", {
    staticClass: "text-dark"
  }, [_vm._v("Observations ")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("th", {
    staticClass: "text-dark"
  }), _vm._v(" "), _c("th", {
    staticClass: "text-dark"
  }, [_vm._v("A. KEY POINTS")]), _vm._v(" "), _c("th", {
    staticClass: "text-dark"
  }, [_vm._v("Vu (Oui ou Non)")]), _vm._v(" "), _c("th", {
    staticClass: "text-dark"
  }, [_vm._v("Observations ")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("th", {
    staticClass: "text-dark",
    attrs: {
      colspan: "7"
    }
  }, [_vm._v("\n                                    B. APPRECIATION DES GARANTIES DU DOSSIER DE CREDIT\n                                ")])]), _vm._v(" "), _c("tr", {
    staticClass: "text-center"
  }, [_c("th", {
    staticClass: "text-dark"
  }, [_vm._v("N°")]), _vm._v(" "), _c("th", {
    staticClass: "text-dark"
  }, [_vm._v("GARANTIES DÉTENUES")]), _vm._v(" "), _c("th", {
    staticClass: "text-dark"
  }, [_vm._v("STATUT")]), _vm._v(" "), _c("th", {
    staticClass: "text-dark"
  }, [_vm._v("Titre de Matérialisation")]), _vm._v(" "), _c("th", {
    staticClass: "text-dark"
  }, [_vm._v("N°")]), _vm._v(" "), _c("th", {
    staticClass: "text-dark"
  }, [_vm._v("GARANTIES À RECUEILLIR")]), _vm._v(" "), _c("th", {
    staticClass: "text-dark"
  }, [_vm._v("\n                                    Appréciation juridique et économique"), _c("br"), _vm._v(" "), _c("span", {
    staticStyle: {
      "font-size": "12px"
    }
  }, [_vm._v("(Vérification / opérationnalité / formalisation / commercialité)")])])])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/contre_analyse_daj/facility_security_agreement/CFSA2.vue?vue&type=style&index=0&id=4c7a819b&scoped=true&lang=css":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/contre_analyse_daj/facility_security_agreement/CFSA2.vue?vue&type=style&index=0&id=4c7a819b&scoped=true&lang=css ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.table[data-v-4c7a819b]{\n   border-color: unset !important;\n}\nol[data-v-4c7a819b],li[data-v-4c7a819b]{\n    list-style-type: upper-roman;\n    padding-left: 25px !important;\n    margin-top: 10px !important;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/contre_analyse_daj/facility_security_agreement/CFSA2.vue?vue&type=style&index=0&id=4c7a819b&scoped=true&lang=css":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/contre_analyse_daj/facility_security_agreement/CFSA2.vue?vue&type=style&index=0&id=4c7a819b&scoped=true&lang=css ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CFSA2_vue_vue_type_style_index_0_id_4c7a819b_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CFSA2.vue?vue&type=style&index=0&id=4c7a819b&scoped=true&lang=css */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/contre_analyse_daj/facility_security_agreement/CFSA2.vue?vue&type=style&index=0&id=4c7a819b&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CFSA2_vue_vue_type_style_index_0_id_4c7a819b_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CFSA2_vue_vue_type_style_index_0_id_4c7a819b_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/offview/bank/afg/contre_analyse_daj/facility_security_agreement/CFSA2.vue":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/components/offview/bank/afg/contre_analyse_daj/facility_security_agreement/CFSA2.vue ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CFSA2_vue_vue_type_template_id_4c7a819b_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CFSA2.vue?vue&type=template&id=4c7a819b&scoped=true */ "./resources/js/components/offview/bank/afg/contre_analyse_daj/facility_security_agreement/CFSA2.vue?vue&type=template&id=4c7a819b&scoped=true");
/* harmony import */ var _CFSA2_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CFSA2.vue?vue&type=script&lang=js */ "./resources/js/components/offview/bank/afg/contre_analyse_daj/facility_security_agreement/CFSA2.vue?vue&type=script&lang=js");
/* harmony import */ var _CFSA2_vue_vue_type_style_index_0_id_4c7a819b_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CFSA2.vue?vue&type=style&index=0&id=4c7a819b&scoped=true&lang=css */ "./resources/js/components/offview/bank/afg/contre_analyse_daj/facility_security_agreement/CFSA2.vue?vue&type=style&index=0&id=4c7a819b&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _CFSA2_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _CFSA2_vue_vue_type_template_id_4c7a819b_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _CFSA2_vue_vue_type_template_id_4c7a819b_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "4c7a819b",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/offview/bank/afg/contre_analyse_daj/facility_security_agreement/CFSA2.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/offview/bank/afg/contre_analyse_daj/facility_security_agreement/CFSA2.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************!*\
  !*** ./resources/js/components/offview/bank/afg/contre_analyse_daj/facility_security_agreement/CFSA2.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CFSA2_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CFSA2.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/contre_analyse_daj/facility_security_agreement/CFSA2.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CFSA2_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/offview/bank/afg/contre_analyse_daj/facility_security_agreement/CFSA2.vue?vue&type=style&index=0&id=4c7a819b&scoped=true&lang=css":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./resources/js/components/offview/bank/afg/contre_analyse_daj/facility_security_agreement/CFSA2.vue?vue&type=style&index=0&id=4c7a819b&scoped=true&lang=css ***!
  \*******************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CFSA2_vue_vue_type_style_index_0_id_4c7a819b_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CFSA2.vue?vue&type=style&index=0&id=4c7a819b&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/contre_analyse_daj/facility_security_agreement/CFSA2.vue?vue&type=style&index=0&id=4c7a819b&scoped=true&lang=css");


/***/ }),

/***/ "./resources/js/components/offview/bank/afg/contre_analyse_daj/facility_security_agreement/CFSA2.vue?vue&type=template&id=4c7a819b&scoped=true":
/*!*****************************************************************************************************************************************************!*\
  !*** ./resources/js/components/offview/bank/afg/contre_analyse_daj/facility_security_agreement/CFSA2.vue?vue&type=template&id=4c7a819b&scoped=true ***!
  \*****************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CFSA2_vue_vue_type_template_id_4c7a819b_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CFSA2_vue_vue_type_template_id_4c7a819b_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CFSA2_vue_vue_type_template_id_4c7a819b_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CFSA2.vue?vue&type=template&id=4c7a819b&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/contre_analyse_daj/facility_security_agreement/CFSA2.vue?vue&type=template&id=4c7a819b&scoped=true");


/***/ })

}]);