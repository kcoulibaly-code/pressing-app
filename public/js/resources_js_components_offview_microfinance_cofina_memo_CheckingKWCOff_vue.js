"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_offview_microfinance_cofina_memo_CheckingKWCOff_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/microfinance/cofina/memo/CheckingKWCOff.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/microfinance/cofina/memo/CheckingKWCOff.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_ebapis_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../services/ebapis.service */ "./resources/js/services/ebapis.service.js");
/* harmony import */ var _shared_extra_file_explorer_ExtraFileTree__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/extra_file_explorer/ExtraFileTree */ "./resources/js/components/shared/extra_file_explorer/ExtraFileTree.vue");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "CheckingKWCOff",
  props: {
    dossier_credit: Object
  },
  components: {
    ExtraFileTree: _shared_extra_file_explorer_ExtraFileTree__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  mounted: function mounted() {},
  computed: _defineProperty({
    date: function date() {
      var _this$dossier_credit;
      var formattedDate = '',
        formatedHour = '';
      var checker_one = (_this$dossier_credit = this.dossier_credit) === null || _this$dossier_credit === void 0 || (_this$dossier_credit = _this$dossier_credit.kwc_checklist) === null || _this$dossier_credit === void 0 ? void 0 : _this$dossier_credit.checker_one;
      if (![null, undefined, ''].includes(checker_one === null || checker_one === void 0 ? void 0 : checker_one.when_has_done_it)) {
        // let [jour, heure] = checker_one?.when_has_done_it.split('T')
        var isoDateStr = checker_one === null || checker_one === void 0 ? void 0 : checker_one.when_has_done_it; // Date au format ISO 8601
        var _date = new Date(isoDateStr);
        var day = String(_date.getDate()).padStart(2, '0'); // Ajoute un zéro si nécessaire pour le jour
        var month = String(_date.getMonth() + 1).padStart(2, '0'); // Ajoute un zéro si nécessaire pour le mois
        var year = _date.getFullYear(); // Extrait l'année
        var hours = String(_date.getHours()).padStart(2, '0');
        var minutes = String(_date.getMinutes()).padStart(2, '0');
        var seconds = String(_date.getSeconds()).padStart(2, '0');
        formattedDate = "".concat(day, "/").concat(month, "/").concat(year);
        formatedHour = "".concat(hours, ":").concat(minutes, ":").concat(seconds);
      }
      return [formattedDate, formatedHour];
    },
    entriesHasCNILine: function entriesHasCNILine() {
      var _this$kwc_checklist;
      var res = false;
      var entries = (_this$kwc_checklist = this.kwc_checklist) === null || _this$kwc_checklist === void 0 || (_this$kwc_checklist = _this$kwc_checklist.checker_one) === null || _this$kwc_checklist === void 0 ? void 0 : _this$kwc_checklist.entries;
      if (![undefined, null, ''].includes(entries)) {
        var actionnaires = this.cleanActionnaire;
        var _iterator = _createForOfIteratorHelper(actionnaires),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var entrie = _step.value;
            if (['Ancienne CNI', 'Nouvelle CNI'].includes(entrie === null || entrie === void 0 ? void 0 : entrie.nature_piece)) {
              return true;
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        var dirigeants = this.cleanDirigeants;
        var _iterator2 = _createForOfIteratorHelper(dirigeants),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var _entrie = _step2.value;
            if (['Ancienne CNI', 'Nouvelle CNI'].includes(_entrie === null || _entrie === void 0 ? void 0 : _entrie.nature_piece)) {
              return true;
            }
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
        var cautions = this.cleanCautions;
        var _iterator3 = _createForOfIteratorHelper(cautions),
          _step3;
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var _entrie2 = _step3.value;
            if (['Ancienne CNI', 'Nouvelle CNI'].includes(_entrie2 === null || _entrie2 === void 0 ? void 0 : _entrie2.nature_piece)) {
              return true;
            }
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
        var autreRef = this.cleanAutreReferent;
        var _iterator4 = _createForOfIteratorHelper(autreRef),
          _step4;
        try {
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
            var _entrie3 = _step4.value;
            if (['Ancienne CNI', 'Nouvelle CNI'].includes(_entrie3 === null || _entrie3 === void 0 ? void 0 : _entrie3.nature_piece)) {
              return true;
            }
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
        }
      }
      return res;
    },
    isVerify: function isVerify() {
      var _this$cleanActionnair;
      if (((_this$cleanActionnair = this.cleanActionnaire) === null || _this$cleanActionnair === void 0 ? void 0 : _this$cleanActionnair.length) > 0) {
        var _iterator5 = _createForOfIteratorHelper(this.cleanActionnaire),
          _step5;
        try {
          for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
            var element = _step5.value;
            if (["CNI", "Ancienne CNI", "Nouvelle CNI"].includes(element.nature_piece)) {
              if ([undefined, null, ''].includes(element.piece_authentified)) {
                return false;
              }
            }
          }
        } catch (err) {
          _iterator5.e(err);
        } finally {
          _iterator5.f();
        }
      }
      return true;
    },
    cleanActionnaire: function cleanActionnaire() {
      var _this$kwc_checklist2,
        _this = this;
      var actionnaires = {};
      var entries = (_this$kwc_checklist2 = this.kwc_checklist) === null || _this$kwc_checklist2 === void 0 || (_this$kwc_checklist2 = _this$kwc_checklist2.checker_one) === null || _this$kwc_checklist2 === void 0 ? void 0 : _this$kwc_checklist2.entries;
      if (![undefined, null, ''].includes(entries)) {
        var _this$kwc_checklist3;
        actionnaires = (_this$kwc_checklist3 = this.kwc_checklist) === null || _this$kwc_checklist3 === void 0 || (_this$kwc_checklist3 = _this$kwc_checklist3.checker_one) === null || _this$kwc_checklist3 === void 0 || (_this$kwc_checklist3 = _this$kwc_checklist3.entries) === null || _this$kwc_checklist3 === void 0 ? void 0 : _this$kwc_checklist3.actionnaires;
        if (![undefined, null, ''].includes(actionnaires)) {
          var _actionnaires;
          return (_actionnaires = actionnaires) === null || _actionnaires === void 0 ? void 0 : _actionnaires.filter(function (el) {
            return !_this.isEmpty(el);
          });
        } else {
          return [];
        }
      }
      return [];
    },
    cleanDirigeants: function cleanDirigeants() {
      var _this$kwc_checklist4,
        _this2 = this;
      var tabs = {};
      var entries = (_this$kwc_checklist4 = this.kwc_checklist) === null || _this$kwc_checklist4 === void 0 || (_this$kwc_checklist4 = _this$kwc_checklist4.checker_one) === null || _this$kwc_checklist4 === void 0 ? void 0 : _this$kwc_checklist4.entries;
      if (![undefined, null, ''].includes(entries)) {
        var _this$kwc_checklist5;
        tabs = (_this$kwc_checklist5 = this.kwc_checklist) === null || _this$kwc_checklist5 === void 0 || (_this$kwc_checklist5 = _this$kwc_checklist5.checker_one) === null || _this$kwc_checklist5 === void 0 || (_this$kwc_checklist5 = _this$kwc_checklist5.entries) === null || _this$kwc_checklist5 === void 0 ? void 0 : _this$kwc_checklist5.dirigeants;
        if (![undefined, null, ''].includes(tabs)) {
          var _tabs;
          return (_tabs = tabs) === null || _tabs === void 0 ? void 0 : _tabs.filter(function (el) {
            return !_this2.isEmpty(el);
          });
        } else {
          return [];
        }
      }
      return [];
    },
    cleanCautions: function cleanCautions() {
      var _this$kwc_checklist6,
        _this3 = this;
      var tabs = {};
      var entries = (_this$kwc_checklist6 = this.kwc_checklist) === null || _this$kwc_checklist6 === void 0 || (_this$kwc_checklist6 = _this$kwc_checklist6.checker_one) === null || _this$kwc_checklist6 === void 0 ? void 0 : _this$kwc_checklist6.entries;
      if (![undefined, null, ''].includes(entries)) {
        var _this$kwc_checklist7;
        tabs = (_this$kwc_checklist7 = this.kwc_checklist) === null || _this$kwc_checklist7 === void 0 || (_this$kwc_checklist7 = _this$kwc_checklist7.checker_one) === null || _this$kwc_checklist7 === void 0 || (_this$kwc_checklist7 = _this$kwc_checklist7.entries) === null || _this$kwc_checklist7 === void 0 || (_this$kwc_checklist7 = _this$kwc_checklist7.cautions) === null || _this$kwc_checklist7 === void 0 ? void 0 : _this$kwc_checklist7.caution_added;
        if (![undefined, null, ''].includes(tabs)) {
          var _tabs2;
          return (_tabs2 = tabs) === null || _tabs2 === void 0 ? void 0 : _tabs2.filter(function (el) {
            return !_this3.isEmpty(el);
          });
        } else {
          return [];
        }
      }
      return [];
    },
    cleanAutreReferent: function cleanAutreReferent() {
      var _this$kwc_checklist8,
        _this4 = this;
      var tabs = {};
      var entries = (_this$kwc_checklist8 = this.kwc_checklist) === null || _this$kwc_checklist8 === void 0 || (_this$kwc_checklist8 = _this$kwc_checklist8.checker_one) === null || _this$kwc_checklist8 === void 0 ? void 0 : _this$kwc_checklist8.entries;
      if (![undefined, null, ''].includes(entries)) {
        var _this$kwc_checklist9;
        tabs = (_this$kwc_checklist9 = this.kwc_checklist) === null || _this$kwc_checklist9 === void 0 || (_this$kwc_checklist9 = _this$kwc_checklist9.checker_one) === null || _this$kwc_checklist9 === void 0 || (_this$kwc_checklist9 = _this$kwc_checklist9.entries) === null || _this$kwc_checklist9 === void 0 ? void 0 : _this$kwc_checklist9.autre_referent;
        if (![undefined, null, ''].includes(tabs)) {
          var _tabs3;
          return (_tabs3 = tabs) === null || _tabs3 === void 0 ? void 0 : _tabs3.filter(function (el) {
            return !_this4.isEmpty(el);
          });
        } else {
          return [];
        }
      }
      return [];
    },
    getFiliale: function getFiliale() {
      var _this$dossier_credit$;
      var applied_templ_name = this.dossier_credit.applied_templ_name;
      var credkeys = this.determineCredPubTables(applied_templ_name);
      return (_this$dossier_credit$ = this.dossier_credit[credkeys[0]]) === null || _this$dossier_credit$ === void 0 ? void 0 : _this$dossier_credit$.filiale;
    },
    mapIdLogoWithFil: function mapIdLogoWithFil() {
      var filiale = this.getFiliale;
      if (filiale === "CFN BF") {
        return 'bf_oni_logo.jpg';
      } else if (["CFN CIV", "FINL"].includes(filiale)) {
        return 'oneci_logo.png';
      } else {
        return '';
      }
    },
    kwc_checklist: function kwc_checklist() {
      var _this$dossier_credit2;
      return (_this$dossier_credit2 = this.dossier_credit) === null || _this$dossier_credit2 === void 0 ? void 0 : _this$dossier_credit2.kwc_checklist;
    },
    keysToHave: function keysToHave() {
      var _this$dossier_credit3;
      var keysToHave = [];
      var checker_one = (_this$dossier_credit3 = this.dossier_credit) === null || _this$dossier_credit3 === void 0 || (_this$dossier_credit3 = _this$dossier_credit3.kwc_checklist) === null || _this$dossier_credit3 === void 0 ? void 0 : _this$dossier_credit3.checker_one;
      if (![null, undefined, ''].includes(checker_one)) {
        for (var _i = 0, _Object$keys = Object.keys(checker_one.entries); _i < _Object$keys.length; _i++) {
          var key = _Object$keys[_i];
          if (!keysToHave.includes(key)) keysToHave.push(key);
        }
      }
      return keysToHave;
    }
  }, "date", function date() {
    var _this$dossier_credit4;
    var formattedDate = '',
      formatedHour = '';
    var checker_one = (_this$dossier_credit4 = this.dossier_credit) === null || _this$dossier_credit4 === void 0 || (_this$dossier_credit4 = _this$dossier_credit4.kwc_checklist) === null || _this$dossier_credit4 === void 0 ? void 0 : _this$dossier_credit4.checker_one;
    if (![null, undefined, ''].includes(checker_one === null || checker_one === void 0 ? void 0 : checker_one.when_has_done_it)) {
      // let [jour, heure] = checker_one?.when_has_done_it.split('T')
      var isoDateStr = checker_one === null || checker_one === void 0 ? void 0 : checker_one.when_has_done_it; // Date au format ISO 8601
      var _date2 = new Date(isoDateStr);
      var day = String(_date2.getDate()).padStart(2, '0'); // Ajoute un zéro si nécessaire pour le jour
      var month = String(_date2.getMonth() + 1).padStart(2, '0'); // Ajoute un zéro si nécessaire pour le mois
      var year = _date2.getFullYear(); // Extrait l'année
      var hours = String(_date2.getHours()).padStart(2, '0');
      var minutes = String(_date2.getMinutes()).padStart(2, '0');
      var seconds = String(_date2.getSeconds()).padStart(2, '0');
      formattedDate = "".concat(day, "/").concat(month, "/").concat(year);
      formatedHour = "".concat(hours, ":").concat(minutes, ":").concat(seconds);
    }
    return [formattedDate, formatedHour];
  }),
  data: function data() {
    return {
      checker_one: null,
      httpHost: _services_ebapis_service__WEBPACK_IMPORTED_MODULE_0__["default"].loadableHttpHost()
    };
  },
  methods: {
    isEmpty: function isEmpty(el) {
      if (![undefined, null, ''].includes(el)) {
        for (var _i2 = 0, _Object$entries = Object.entries(el); _i2 < _Object$entries.length; _i2++) {
          var _Object$entries$_i = _slicedToArray(_Object$entries[_i2], 2),
            key = _Object$entries$_i[0],
            value = _Object$entries$_i[1];
          if (Array.isArray(el[key])) {
            var _el$key;
            if (((_el$key = el[key]) === null || _el$key === void 0 ? void 0 : _el$key.length) > 0) {
              return false;
            }
          } else {
            if (![undefined, '', null, 0].includes(value)) {
              return false;
            }
          }
        }
        return true;
      }
      return true;
    },
    handleDoubleClickOrClick: function handleDoubleClickOrClick() {
      var _this$dossier_credit5;
      var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var slug_ = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      EventBus.$emit("open-extra-file-explorer");
      // const dateNow = new Date().toLocaleDateString();
      // const numeroPiece = this.caution_solidaires?.[index]?.numero_piece_identite?.trim() || '';
      // const result = numeroPiece;
      var entries = (_this$dossier_credit5 = this.dossier_credit) === null || _this$dossier_credit5 === void 0 || (_this$dossier_credit5 = _this$dossier_credit5.kwc_checklist) === null || _this$dossier_credit5 === void 0 || (_this$dossier_credit5 = _this$dossier_credit5.checker_one) === null || _this$dossier_credit5 === void 0 ? void 0 : _this$dossier_credit5.entries;
      var slug = null,
        name = null;
      if (slug_ != null && index != null) {
        var element = {};
        if (slug_ !== "caution_solidaires") {
          if (![null, undefined, ""].includes(entries[slug_])) {
            if (![null, undefined, 0].includes(entries[slug_])) {
              var _element, _element2, _this$$route;
              element = entries[slug_];
              slug = (_element = element) !== null && _element !== void 0 && _element.from_caf && (_element2 = element) !== null && _element2 !== void 0 && _element2.has_file ? "cautionnement_solidaires" : slug_ + "_kwc_checklist";
              name = "Pi\xE8ce jointe {(*)}".concat(slug) + index + '_' + ((_this$$route = this.$route) === null || _this$$route === void 0 || (_this$$route = _this$$route.params) === null || _this$$route === void 0 ? void 0 : _this$$route.templateId);
            }
          }
        } else {
          var _entries$cautions;
          if (![null, undefined, ""].includes(entries === null || entries === void 0 || (_entries$cautions = entries.cautions) === null || _entries$cautions === void 0 ? void 0 : _entries$cautions.caution_added)) {
            var _entries$cautions2;
            if (![null, undefined, 0].includes(entries === null || entries === void 0 || (_entries$cautions2 = entries.cautions) === null || _entries$cautions2 === void 0 ? void 0 : _entries$cautions2.caution_added)) {
              var _entries$cautions3, _element3, _element4, _this$$route2;
              element = entries === null || entries === void 0 || (_entries$cautions3 = entries.cautions) === null || _entries$cautions3 === void 0 || (_entries$cautions3 = _entries$cautions3.caution_added) === null || _entries$cautions3 === void 0 ? void 0 : _entries$cautions3[index];
              slug = (_element3 = element) !== null && _element3 !== void 0 && _element3.from_caf && (_element4 = element) !== null && _element4 !== void 0 && _element4.has_file ? "cautionnement_solidaires" : slug_ + "_kwc_checklist";
              name = "Pi\xE8ce jointe {(*)}".concat(slug) + index + '_' + ((_this$$route2 = this.$route) === null || _this$$route2 === void 0 || (_this$$route2 = _this$$route2.params) === null || _this$$route2 === void 0 ? void 0 : _this$$route2.templateId);
            }
          }
        }
      } else {
        slug = slug_;
        name = "Pi\xE8ce jointe {(*)}".concat(slug) + '_' + this.$route.params.templateId;
      }
      setTimeout(function () {
        EventBus.$emit("data-extra-file-explorer", {
          name: name,
          view: true
        });
      }, 500);
    },
    reloadComponent: function reloadComponent() {
      window.location.reload();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/microfinance/cofina/memo/CheckingKWCOff.vue?vue&type=template&id=6ecae33d&scoped=true":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/microfinance/cofina/memo/CheckingKWCOff.vue?vue&type=template&id=6ecae33d&scoped=true ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm$dossier_credit, _vm$cleanActionnaire, _vm$cleanDirigeants, _vm$cleanCautions, _vm$kwc_checklist, _vm$cleanAutreReferen;
  var _vm = this,
    _c = _vm._self._c;
  return (_vm$dossier_credit = _vm.dossier_credit) !== null && _vm$dossier_credit !== void 0 && _vm$dossier_credit.kwc_checklist ? _c("div", [_c("div", {
    staticClass: "head-analyse-financiere mb-1 mt_4 justify-content-center d-flex align-items-center",
    staticStyle: {
      "text-align": "center",
      position: "relative"
    }
  }, [_c("div", {}, [_vm._v("\n             KNOW YOUR CUSTOMER VERIFICATION\n              ")]), _vm._v(" "), ["CFN CIV", "FINL"].includes(_vm.getFiliale) ? _c("svg", {
    staticStyle: {
      position: "absolute",
      right: "0",
      top: "-7px",
      opacity: "0.6"
    },
    attrs: {
      width: "132",
      height: "132"
    }
  }, [_c("circle", {
    attrs: {
      cx: "66",
      cy: "66",
      r: "65",
      fill: "none",
      stroke: "#001A62",
      "stroke-width": "2"
    }
  }), _vm._v(" "), _c("circle", {
    attrs: {
      cx: "66",
      cy: "66",
      r: "65",
      fill: "none",
      stroke: "rgb(0,26,98,0.4)",
      "stroke-width": "2"
    }
  }), _vm._v(" "), _c("circle", {
    attrs: {
      cx: "66",
      cy: "66",
      r: "48",
      fill: "none",
      stroke: "#001A62",
      "stroke-width": "1"
    }
  }), _vm._v(" "), _c("circle", {
    attrs: {
      cx: "66",
      cy: "66",
      r: "46",
      fill: "none",
      stroke: "#001A62",
      "stroke-width": "1"
    }
  }), _vm._v(" "), _c("defs", [_c("path", {
    attrs: {
      id: "upper-arc",
      d: "M12 61A55 62 0 0 1 120 64",
      fill: "none"
    }
  }), _vm._v(" "), _c("path", {
    attrs: {
      id: "lower-arc",
      d: "M6 66A60 60 0 0 0 126 66",
      fill: "none"
    }
  })]), _vm._v(" "), _vm.entriesHasCNILine ? _c("image", {
    attrs: {
      x: "36",
      y: "36",
      width: "60",
      height: "60",
      href: "/images/" + _vm.mapIdLogoWithFil
    }
  }) : [_c("text", {
    attrs: {
      "dominant-baseline": "middle",
      "text-anchor": "middle",
      x: "50%",
      y: "51%",
      "font-family": "Manrope3-ExtraBold, Manrope3",
      "font-size": "11",
      "font-weight": "100",
      fill: "none",
      stroke: "#001A62",
      "stroke-width": "2"
    }
  }, [_vm._v("Lu et approuvé")]), _vm._v(" "), _c("text", {
    attrs: {
      "dominant-baseline": "middle",
      "text-anchor": "middle",
      x: "50%",
      y: "65%",
      "font-family": "Manrope3-ExtraBold, Manrope3",
      "font-size": "10",
      "font-weight": "50",
      fill: "none",
      stroke: "#dc0030",
      "stroke-width": "1"
    }
  }, [_vm._v(_vm._s(_vm.date[0]))]), _vm._v(" "), _c("text", {
    attrs: {
      "dominant-baseline": "middle",
      "text-anchor": "middle",
      x: "50%",
      y: "72%",
      "font-family": "Manrope3-ExtraBold, Manrope3",
      "font-size": "10",
      "font-weight": "50",
      fill: "none",
      stroke: "#dc0030",
      "stroke-width": "1"
    }
  }, [_vm._v(_vm._s(_vm.date[1]))])], _vm._v(" "), _c("text", [_c("textPath", {
    attrs: {
      "xlink:href": "#upper-arc",
      "font-family": "Manrope3-ExtraBold, Manrope3",
      "font-size": "10",
      "font-weight": "600",
      fill: "#001A62",
      "letter-spacing": "2",
      startOffset: "0%"
    }
  }, [_vm._v("\n                     •KNOW YOUR CUSTOMER•\n                 ")])]), _vm._v(" "), _c("text", [_c("textPath", {
    attrs: {
      "xlink:href": "#lower-arc",
      "font-family": "Manrope3-ExtraBold, Manrope3",
      "font-size": "8",
      "font-weight": "600",
      fill: _vm.isVerify === true ? "#198754" : "#ee6a00",
      "letter-spacing": "3",
      startOffset: "0%"
    }
  }, [_vm._v("\n                     " + _vm._s(_vm.isVerify === true ? "Informations vérifiées" : "Informations non vérifiées") + "\n                 ")])])], 2) : _vm._e()]), _vm._v(" "), _c("div", {
    staticClass: "card-body mb-2"
  }, [_vm.keysToHave.includes("actionnaires") && ((_vm$cleanActionnaire = _vm.cleanActionnaire) === null || _vm$cleanActionnaire === void 0 ? void 0 : _vm$cleanActionnaire.length) > 0 ? _c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-bordered mb-3 mb-2"
  }, [_vm._m(0), _vm._v(" "), _c("tbody", _vm._l(_vm.cleanActionnaire, function (actionnaire, index) {
    var _actionnaire$files, _actionnaire$files2, _actionnaire$numero_p;
    return _c("tr", {
      key: index
    }, [_c("td", [_vm._v(_vm._s(actionnaire === null || actionnaire === void 0 ? void 0 : actionnaire.nom_prenoms))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm._f("formatDate")(actionnaire === null || actionnaire === void 0 ? void 0 : actionnaire.date_naissance)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(actionnaire === null || actionnaire === void 0 ? void 0 : actionnaire.lieu_naissance))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(actionnaire.nature_piece))]), _vm._v(" "), _c("td", [_c("div", {
      staticClass: "d-flex items-center justify-content-around"
    }, [_c("span", [_vm._v(_vm._s(actionnaire.numero_piece_identite))]), _vm._v(" "), actionnaire !== null && actionnaire !== void 0 && actionnaire.piece_authentified ? _c("span", {
      attrs: {
        title: "Pièce d'identité verifiée"
      }
    }, [_c("img", {
      attrs: {
        width: "25",
        src: "/images/certification-creditflow_1.png",
        alt: ""
      }
    })]) : _c("span", [_c("span", {
      staticClass: "badge badge-pill badge-warning"
    }, [_vm._v("Non authentifiée")])])])]), _vm._v(" "), _c("td", [(actionnaire === null || actionnaire === void 0 || (_actionnaire$files = actionnaire.files) === null || _actionnaire$files === void 0 ? void 0 : _actionnaire$files.length) > 0 ? _c("div", {
      staticClass: "d-flex align-items-center"
    }, [_c("div", [(actionnaire === null || actionnaire === void 0 || (_actionnaire$files2 = actionnaire.files) === null || _actionnaire$files2 === void 0 ? void 0 : _actionnaire$files2.length) > 0 ? _c("span", {
      staticClass: "p-1 px-2 mx-2 text-nowrap",
      staticStyle: {
        "background-color": "rgb(44, 62, 80)",
        color: "white",
        "font-size": "13px",
        "border-radius": "5px",
        "margin-left": "0!important",
        width: "150px"
      }
    }, [_vm._v(_vm._s((actionnaire === null || actionnaire === void 0 ? void 0 : actionnaire.files.length) > 0 ? (actionnaire === null || actionnaire === void 0 ? void 0 : actionnaire.files.length) + " fichier(s) uploadé(s)" : ""))]) : _vm._e()]), _vm._v(" "), (actionnaire === null || actionnaire === void 0 || (_actionnaire$numero_p = actionnaire.numero_piece_identite) === null || _actionnaire$numero_p === void 0 || (_actionnaire$numero_p = _actionnaire$numero_p.toUpperCase()) === null || _actionnaire$numero_p === void 0 ? void 0 : _actionnaire$numero_p.trim()) != "" ? _c("div", [_c("button", {
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
          return _vm.handleDoubleClickOrClick(index, "actionnaires");
        }
      }
    }, [_c("i", {
      staticClass: "icofont-attachment"
    })])]) : _vm._e()]) : _c("div", {
      staticClass: "text-center text-danger"
    }, [_vm._v("\n                                 Aucun fichier(s) uploadé(s)\n                             ")])])]);
  }), 0)])]) : _vm._e(), _vm._v(" "), _vm.keysToHave.includes("dirigeants") && ((_vm$cleanDirigeants = _vm.cleanDirigeants) === null || _vm$cleanDirigeants === void 0 ? void 0 : _vm$cleanDirigeants.length) > 0 ? _c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-bordered mb-3 mb-2"
  }, [_vm._m(1), _vm._v(" "), _c("tbody", _vm._l(_vm.cleanDirigeants, function (dirigeant, index) {
    var _dirigeant$files, _dirigeant$files2, _dirigeant$numero_pie;
    return _c("tr", {
      key: index
    }, [_c("td", [_vm._v(_vm._s(dirigeant === null || dirigeant === void 0 ? void 0 : dirigeant.nom_prenoms))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm._f("formatDate")(dirigeant === null || dirigeant === void 0 ? void 0 : dirigeant.date_naissance)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(dirigeant === null || dirigeant === void 0 ? void 0 : dirigeant.lieu_naissance))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(dirigeant.nature_piece))]), _vm._v(" "), _c("td", [_c("div", {
      staticClass: "d-flex items-center justify-content-around"
    }, [_c("span", [_vm._v(_vm._s(dirigeant.numero_piece_identite))]), _vm._v(" "), dirigeant !== null && dirigeant !== void 0 && dirigeant.piece_authentified ? _c("span", {
      attrs: {
        title: "Pièce d'identité verifiée"
      }
    }, [_c("img", {
      attrs: {
        width: "25",
        src: "/images/certification-creditflow_1.png",
        alt: ""
      }
    })]) : _c("span", [_c("span", {
      staticClass: "badge badge-pill badge-warning"
    }, [_vm._v("Non authentifiée")])])])]), _vm._v(" "), _c("td", [(dirigeant === null || dirigeant === void 0 || (_dirigeant$files = dirigeant.files) === null || _dirigeant$files === void 0 ? void 0 : _dirigeant$files.length) > 0 ? _c("div", {
      staticClass: "d-flex align-items-center"
    }, [_c("div", [(dirigeant === null || dirigeant === void 0 || (_dirigeant$files2 = dirigeant.files) === null || _dirigeant$files2 === void 0 ? void 0 : _dirigeant$files2.length) > 0 ? _c("span", {
      staticClass: "p-1 px-2 mx-2 text-nowrap",
      staticStyle: {
        "background-color": "rgb(44, 62, 80)",
        color: "white",
        "font-size": "13px",
        "border-radius": "5px",
        "margin-left": "0!important",
        width: "150px"
      }
    }, [_vm._v(_vm._s((dirigeant === null || dirigeant === void 0 ? void 0 : dirigeant.files.length) > 0 ? (dirigeant === null || dirigeant === void 0 ? void 0 : dirigeant.files.length) + " fichier(s) uploadé(s)" : ""))]) : _vm._e()]), _vm._v(" "), (dirigeant === null || dirigeant === void 0 || (_dirigeant$numero_pie = dirigeant.numero_piece_identite) === null || _dirigeant$numero_pie === void 0 || (_dirigeant$numero_pie = _dirigeant$numero_pie.toUpperCase()) === null || _dirigeant$numero_pie === void 0 ? void 0 : _dirigeant$numero_pie.trim()) != "" ? _c("div", [_c("button", {
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
          return _vm.handleDoubleClickOrClick(index, "dirigeants");
        }
      }
    }, [_c("i", {
      staticClass: "icofont-attachment"
    })])]) : _vm._e()]) : _c("div", {
      staticClass: "text-center text-danger"
    }, [_vm._v("\n                                 Aucun fichier(s) uploadé(s)\n                             ")])])]);
  }), 0)])]) : _vm._e(), _vm._v(" "), _vm.keysToHave.includes("cautions") && ((_vm$cleanCautions = _vm.cleanCautions) === null || _vm$cleanCautions === void 0 ? void 0 : _vm$cleanCautions.length) > 0 ? _c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-bordered mb-2"
  }, [_c("thead", {
    staticClass: "bg-ed-primary"
  }, [_vm._m(2), _vm._v(" "), ["", "Non", 0].includes((_vm$kwc_checklist = _vm.kwc_checklist) === null || _vm$kwc_checklist === void 0 || (_vm$kwc_checklist = _vm$kwc_checklist.checker_one) === null || _vm$kwc_checklist === void 0 || (_vm$kwc_checklist = _vm$kwc_checklist.entries) === null || _vm$kwc_checklist === void 0 || (_vm$kwc_checklist = _vm$kwc_checklist.cautions) === null || _vm$kwc_checklist === void 0 || (_vm$kwc_checklist = _vm$kwc_checklist.caution_added) === null || _vm$kwc_checklist === void 0 ? void 0 : _vm$kwc_checklist.length) ? _c("tr", [_c("td", {
    attrs: {
      colspan: "12",
      scope: "row"
    }
  }, [_vm._v("Vous n'avez pas ajouter de caution")])]) : _c("tr", [_c("th", [_vm._v("\n                             Nom et prénoms\n                         ")]), _vm._v(" "), _c("th", [_vm._v("\n                             Date de naissance\n                         ")]), _vm._v(" "), _c("th", [_vm._v("\n                             Lieu de naissance\n                         ")]), _vm._v(" "), _c("th", [_vm._v("\n                             Nature de la pièce d'identité\n                         ")]), _vm._v(" "), _c("th", [_vm._v("\n                             Numero de la pièce d'identité\n                         ")]), _vm._v(" "), _c("th", [_vm._v("\n                            Pièces Jointes\n                         ")])])]), _vm._v(" "), _c("tbody", _vm._l(_vm.cleanCautions, function (caution, index) {
    var _caution$numero_piece, _caution$files, _caution$files2, _caution$numero_piece2;
    return _c("tr", {
      key: index
    }, [_c("td", [_vm._v(_vm._s(caution === null || caution === void 0 ? void 0 : caution.nom_prenoms))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm._f("formatDate")(caution === null || caution === void 0 ? void 0 : caution.date_naissance)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(caution === null || caution === void 0 ? void 0 : caution.lieu_naissance))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(caution === null || caution === void 0 ? void 0 : caution.nature_piece))]), _vm._v(" "), _c("td", [_c("div", {
      staticClass: "d-flex items-center justify-content-around"
    }, [_c("span", [_vm._v(_vm._s(caution === null || caution === void 0 || (_caution$numero_piece = caution.numero_piece_identite) === null || _caution$numero_piece === void 0 ? void 0 : _caution$numero_piece.toUpperCase()))]), _vm._v(" "), caution !== null && caution !== void 0 && caution.piece_authentified ? _c("span", {
      attrs: {
        title: "Pièce d'identité verifiée"
      }
    }, [_c("img", {
      attrs: {
        width: "25",
        src: "/images/certification-creditflow_1.png",
        alt: ""
      }
    })]) : _c("span", [_c("span", {
      staticClass: "badge badge-pill badge-warning"
    }, [_vm._v("Non authentifiée")])])])]), _vm._v(" "), _c("td", [(caution === null || caution === void 0 || (_caution$files = caution.files) === null || _caution$files === void 0 ? void 0 : _caution$files.length) > 0 ? _c("div", {
      staticClass: "d-flex align-items-center"
    }, [_c("div", [(caution === null || caution === void 0 || (_caution$files2 = caution.files) === null || _caution$files2 === void 0 ? void 0 : _caution$files2.length) > 0 ? _c("span", {
      staticClass: "p-1 px-2 mx-2 text-nowrap",
      staticStyle: {
        "background-color": "rgb(44, 62, 80)",
        color: "white",
        "font-size": "13px",
        "border-radius": "5px",
        "margin-left": "0!important",
        width: "150px"
      }
    }, [_vm._v(_vm._s((caution === null || caution === void 0 ? void 0 : caution.files.length) > 0 ? (caution === null || caution === void 0 ? void 0 : caution.files.length) + " fichier(s) uploadé(s)" : ""))]) : _vm._e()]), _vm._v(" "), (caution === null || caution === void 0 || (_caution$numero_piece2 = caution.numero_piece_identite) === null || _caution$numero_piece2 === void 0 ? void 0 : _caution$numero_piece2.trim()) != "" ? _c("div", [_c("button", {
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
          return _vm.handleDoubleClickOrClick(index, "caution_solidaires");
        }
      }
    }, [_c("i", {
      staticClass: "icofont-attachment"
    })])]) : _vm._e()]) : _c("div", {
      staticClass: "text-center text-danger"
    }, [_vm._v("\n                                 Aucun fichier(s) uploadé(s)\n                             ")])])]);
  }), 0)])]) : _vm._e(), _vm._v(" "), _vm.keysToHave.includes("autre_referent") && ((_vm$cleanAutreReferen = _vm.cleanAutreReferent) === null || _vm$cleanAutreReferen === void 0 ? void 0 : _vm$cleanAutreReferen.length) > 0 ? _c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-bordered mb-3 mb-2"
  }, [_vm._m(3), _vm._v(" "), _c("tbody", _vm._l(_vm.cleanAutreReferent, function (autre_ref, index) {
    var _autre_ref$numero_pie, _autre_ref$files, _autre_ref$files2, _autre_ref$numero_pie2;
    return _c("tr", {
      key: index
    }, [_c("td", [_vm._v(_vm._s(autre_ref === null || autre_ref === void 0 ? void 0 : autre_ref.nom_prenoms))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm._f("formatDate")(autre_ref === null || autre_ref === void 0 ? void 0 : autre_ref.date_naissance)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(autre_ref === null || autre_ref === void 0 ? void 0 : autre_ref.lieu_naissance))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(autre_ref.nature_piece))]), _vm._v(" "), _c("td", [_c("div", {
      staticClass: "d-flex items-center justify-content-around"
    }, [_c("span", [_vm._v(_vm._s(autre_ref === null || autre_ref === void 0 || (_autre_ref$numero_pie = autre_ref.numero_piece_identite) === null || _autre_ref$numero_pie === void 0 ? void 0 : _autre_ref$numero_pie.toUpperCase()))]), _vm._v(" "), autre_ref !== null && autre_ref !== void 0 && autre_ref.piece_authentified ? _c("span", {
      attrs: {
        title: "Pièce d'identité verifiée"
      }
    }, [_c("img", {
      attrs: {
        width: "25",
        src: "/images/certification-creditflow_1.png",
        alt: ""
      }
    })]) : _c("span", [_c("span", {
      staticClass: "badge badge-pill badge-warning"
    }, [_vm._v("Non authentifiée")])])])]), _vm._v(" "), _c("td", [(autre_ref === null || autre_ref === void 0 || (_autre_ref$files = autre_ref.files) === null || _autre_ref$files === void 0 ? void 0 : _autre_ref$files.length) > 0 ? _c("div", {
      staticClass: "d-flex align-items-center"
    }, [_c("div", [(autre_ref === null || autre_ref === void 0 || (_autre_ref$files2 = autre_ref.files) === null || _autre_ref$files2 === void 0 ? void 0 : _autre_ref$files2.length) > 0 ? _c("span", {
      staticClass: "p-1 px-2 mx-2 text-nowrap",
      staticStyle: {
        "background-color": "rgb(44, 62, 80)",
        color: "white",
        "font-size": "13px",
        "border-radius": "5px",
        "margin-left": "0!important",
        width: "150px"
      }
    }, [_vm._v(_vm._s((autre_ref === null || autre_ref === void 0 ? void 0 : autre_ref.files.length) > 0 ? (autre_ref === null || autre_ref === void 0 ? void 0 : autre_ref.files.length) + " fichier(s) uploadé(s)" : ""))]) : _vm._e()]), _vm._v(" "), (autre_ref === null || autre_ref === void 0 || (_autre_ref$numero_pie2 = autre_ref.numero_piece_identite) === null || _autre_ref$numero_pie2 === void 0 ? void 0 : _autre_ref$numero_pie2.trim()) != "" ? _c("div", [_c("button", {
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
          return _vm.handleDoubleClickOrClick(index, "autre_referent");
        }
      }
    }, [_c("i", {
      staticClass: "icofont-attachment"
    })])]) : _vm._e()]) : _c("div", {
      staticClass: "text-center text-danger"
    }, [_vm._v("\n                                 Aucun fichier(s) uploadé(s)\n                             ")])])]);
  }), 0)])]) : _vm._e()])]) : _vm._e();
};
var staticRenderFns = [function () {
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
      colspan: "11",
      scope: "row"
    }
  }, [_vm._v("Actionnaires / Propriétaires")])]), _vm._v(" "), _c("tr", [_c("th", [_vm._v("\n                             Nom et prénoms\n                         ")]), _vm._v(" "), _c("th", [_vm._v("\n                             Date de naissance\n                         ")]), _vm._v(" "), _c("th", [_vm._v("\n                             Lieu de naissance\n                         ")]), _vm._v(" "), _c("th", [_vm._v("\n                             Nature de la pièce d'identité\n                         ")]), _vm._v(" "), _c("th", [_vm._v("\n                             Numéro de la pièce d'identité\n                         ")]), _vm._v(" "), _c("th", [_vm._v("\n                            Pièces Jointes\n                         ")])])]);
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
      colspan: "11",
      scope: "row"
    }
  }, [_vm._v("Dirigeants")])]), _vm._v(" "), _c("tr", [_c("th", [_vm._v("\n                             Nom et prénoms\n                         ")]), _vm._v(" "), _c("th", [_vm._v("\n                             Date de naissance\n                         ")]), _vm._v(" "), _c("th", [_vm._v("\n                             Lieu de naissance\n                         ")]), _vm._v(" "), _c("th", [_vm._v("\n                             Nature de la pièce d'identité\n                         ")]), _vm._v(" "), _c("th", [_vm._v("\n                             Numéro de la pièce d'identité\n                         ")]), _vm._v(" "), _c("th", [_vm._v("\n                            Pièces Jointes\n                         ")])])]);
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
      colspan: "12",
      scope: "row"
    }
  }, [_vm._v("Cautions / Garants")])]);
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
      colspan: "11",
      scope: "row"
    }
  }, [_vm._v("Autres référents")])]), _vm._v(" "), _c("tr", [_c("th", [_vm._v("\n                             Nom et prénoms\n                         ")]), _vm._v(" "), _c("th", [_vm._v("\n                             Date de naissance\n                         ")]), _vm._v(" "), _c("th", [_vm._v("\n                             Lieu de naissance\n                         ")]), _vm._v(" "), _c("th", [_vm._v("\n                             Nature de la pièce d'identité\n                         ")]), _vm._v(" "), _c("th", [_vm._v("\n                             Numéro de la pièce d'identité\n                         ")]), _vm._v(" "), _c("th", [_vm._v("\n                            Pièces Jointes\n                         ")])])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/microfinance/cofina/memo/CheckingKWCOff.vue?vue&type=style&index=0&id=6ecae33d&lang=css&scoped=true":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/microfinance/cofina/memo/CheckingKWCOff.vue?vue&type=style&index=0&id=6ecae33d&lang=css&scoped=true ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.bg-grey[data-v-6ecae33d] {\r\n    background-color: #f4f3f3;\n}\r\n\r\n/* th {\r\n    background: #f4f3f3;\r\n} */\n.head-memorandum-title[data-v-6ecae33d] {\r\n    border: 2px #2c3e50 solid;\r\n    height: 44px;\r\n    background: #f4f3f3;\n}\n.bg-relooker[data-v-6ecae33d] {\r\n    background-color: #2c3e50;\r\n    color: white;\n}\n.head-analyse-financiere[data-v-6ecae33d]{\r\n  margin-top: 10px;\r\n  padding: 16px;\r\n  border: 2px solid ;\r\n  font-weight: bold;\r\n  text-align: center;\r\n  text-transform: uppercase;\r\n  background: rgb(215, 210, 210);\n}\n.unclickable-chb[data-v-6ecae33d]{\r\n    width: 25px;\r\n    height: 25px;\r\n    background-color: blue;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    border-radius: 5px;\n}\n.unclickable-chb i[data-v-6ecae33d]{\r\n    color: white;\n}\n.badge[data-v-6ecae33d]{\r\n    display: inline-block;\r\n    padding: .25em .4em;\r\n    font-size: 75%;\r\n    font-weight: 700;\r\n    line-height: 1;\r\n    text-align: center;\r\n    white-space: nowrap;\r\n    vertical-align: baseline;\r\n    border-radius: .25rem;\n}\n.badge-pill[data-v-6ecae33d]{\r\n    padding-right: .6em;\r\n    padding-left: .6em;\r\n    border-radius: 10rem;\n}\n.badge-warning[data-v-6ecae33d]{\r\n    color: #212529;\r\n    background-color: #ffc107;\n}\r\n/* .stamp {\r\n  transform: rotate(12deg);\r\n\tcolor: #555;\r\n\tfont-size: 3rem;\r\n\tfont-weight: 500;\r\n\tborder: 0.25rem solid #555;\r\n\tdisplay: inline-block;\r\n\tpadding: 0px 5px;\r\n\ttext-transform: uppercase;\r\n\tborder-radius: 5px;\r\n\tfont-family: 'Courier';\r\n\t-webkit-mask-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/8399/grunge.png');\r\n  -webkit-mask-size: 944px 604px;\r\n  mix-blend-mode: multiply;\r\n}\r\n\r\n.is-nope {\r\n  color: #D23;\r\n  border: 5px double #D23;\r\n  transform: rotate(0deg);\r\n\t-webkit-mask-position: 2rem 3rem;\r\n  font-size: 12px;\r\n} */\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/microfinance/cofina/memo/CheckingKWCOff.vue?vue&type=style&index=0&id=6ecae33d&lang=css&scoped=true":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/microfinance/cofina/memo/CheckingKWCOff.vue?vue&type=style&index=0&id=6ecae33d&lang=css&scoped=true ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CheckingKWCOff_vue_vue_type_style_index_0_id_6ecae33d_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CheckingKWCOff.vue?vue&type=style&index=0&id=6ecae33d&lang=css&scoped=true */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/microfinance/cofina/memo/CheckingKWCOff.vue?vue&type=style&index=0&id=6ecae33d&lang=css&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CheckingKWCOff_vue_vue_type_style_index_0_id_6ecae33d_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CheckingKWCOff_vue_vue_type_style_index_0_id_6ecae33d_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/offview/microfinance/cofina/memo/CheckingKWCOff.vue":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/offview/microfinance/cofina/memo/CheckingKWCOff.vue ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CheckingKWCOff_vue_vue_type_template_id_6ecae33d_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CheckingKWCOff.vue?vue&type=template&id=6ecae33d&scoped=true */ "./resources/js/components/offview/microfinance/cofina/memo/CheckingKWCOff.vue?vue&type=template&id=6ecae33d&scoped=true");
/* harmony import */ var _CheckingKWCOff_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CheckingKWCOff.vue?vue&type=script&lang=js */ "./resources/js/components/offview/microfinance/cofina/memo/CheckingKWCOff.vue?vue&type=script&lang=js");
/* harmony import */ var _CheckingKWCOff_vue_vue_type_style_index_0_id_6ecae33d_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CheckingKWCOff.vue?vue&type=style&index=0&id=6ecae33d&lang=css&scoped=true */ "./resources/js/components/offview/microfinance/cofina/memo/CheckingKWCOff.vue?vue&type=style&index=0&id=6ecae33d&lang=css&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _CheckingKWCOff_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _CheckingKWCOff_vue_vue_type_template_id_6ecae33d_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _CheckingKWCOff_vue_vue_type_template_id_6ecae33d_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "6ecae33d",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/offview/microfinance/cofina/memo/CheckingKWCOff.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/offview/microfinance/cofina/memo/CheckingKWCOff.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/components/offview/microfinance/cofina/memo/CheckingKWCOff.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CheckingKWCOff_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CheckingKWCOff.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/microfinance/cofina/memo/CheckingKWCOff.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CheckingKWCOff_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/offview/microfinance/cofina/memo/CheckingKWCOff.vue?vue&type=style&index=0&id=6ecae33d&lang=css&scoped=true":
/*!*********************************************************************************************************************************************!*\
  !*** ./resources/js/components/offview/microfinance/cofina/memo/CheckingKWCOff.vue?vue&type=style&index=0&id=6ecae33d&lang=css&scoped=true ***!
  \*********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CheckingKWCOff_vue_vue_type_style_index_0_id_6ecae33d_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CheckingKWCOff.vue?vue&type=style&index=0&id=6ecae33d&lang=css&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/microfinance/cofina/memo/CheckingKWCOff.vue?vue&type=style&index=0&id=6ecae33d&lang=css&scoped=true");


/***/ }),

/***/ "./resources/js/components/offview/microfinance/cofina/memo/CheckingKWCOff.vue?vue&type=template&id=6ecae33d&scoped=true":
/*!*******************************************************************************************************************************!*\
  !*** ./resources/js/components/offview/microfinance/cofina/memo/CheckingKWCOff.vue?vue&type=template&id=6ecae33d&scoped=true ***!
  \*******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CheckingKWCOff_vue_vue_type_template_id_6ecae33d_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CheckingKWCOff_vue_vue_type_template_id_6ecae33d_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CheckingKWCOff_vue_vue_type_template_id_6ecae33d_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CheckingKWCOff.vue?vue&type=template&id=6ecae33d&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/microfinance/cofina/memo/CheckingKWCOff.vue?vue&type=template&id=6ecae33d&scoped=true");


/***/ })

}]);