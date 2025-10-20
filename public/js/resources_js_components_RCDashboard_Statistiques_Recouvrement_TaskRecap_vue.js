"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_RCDashboard_Statistiques_Recouvrement_TaskRecap_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/RCDashboard/Statistiques/Recouvrement/DailyTaskRecap.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/RCDashboard/Statistiques/Recouvrement/DailyTaskRecap.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _shared_ZeroCross_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/ZeroCross.vue */ "./resources/js/components/shared/ZeroCross.vue");
/* harmony import */ var _services_recovery_recovery_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../services/recovery/recovery.js */ "./resources/js/services/recovery/recovery.js");
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return r; }; var t, r = {}, e = Object.prototype, n = e.hasOwnProperty, o = "function" == typeof Symbol ? Symbol : {}, i = o.iterator || "@@iterator", a = o.asyncIterator || "@@asyncIterator", u = o.toStringTag || "@@toStringTag"; function c(t, r, e, n) { Object.defineProperty(t, r, { value: e, enumerable: !n, configurable: !n, writable: !n }); } try { c({}, ""); } catch (t) { c = function c(t, r, e) { return t[r] = e; }; } function h(r, e, n, o) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype); return c(a, "_invoke", function (r, e, n) { var o = 1; return function (i, a) { if (3 === o) throw Error("Generator is already running"); if (4 === o) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var u = n.delegate; if (u) { var c = d(u, n); if (c) { if (c === f) continue; return c; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (1 === o) throw o = 4, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = 3; var h = s(r, e, n); if ("normal" === h.type) { if (o = n.done ? 4 : 2, h.arg === f) continue; return { value: h.arg, done: n.done }; } "throw" === h.type && (o = 4, n.method = "throw", n.arg = h.arg); } }; }(r, n, new Context(o || [])), !0), a; } function s(t, r, e) { try { return { type: "normal", arg: t.call(r, e) }; } catch (t) { return { type: "throw", arg: t }; } } r.wrap = h; var f = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var l = {}; c(l, i, function () { return this; }); var p = Object.getPrototypeOf, y = p && p(p(x([]))); y && y !== e && n.call(y, i) && (l = y); var v = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(l); function g(t) { ["next", "throw", "return"].forEach(function (r) { c(t, r, function (t) { return this._invoke(r, t); }); }); } function AsyncIterator(t, r) { function e(o, i, a, u) { var c = s(t[o], t, i); if ("throw" !== c.type) { var h = c.arg, f = h.value; return f && "object" == _typeof(f) && n.call(f, "__await") ? r.resolve(f.__await).then(function (t) { e("next", t, a, u); }, function (t) { e("throw", t, a, u); }) : r.resolve(f).then(function (t) { h.value = t, a(h); }, function (t) { return e("throw", t, a, u); }); } u(c.arg); } var o; c(this, "_invoke", function (t, n) { function i() { return new r(function (r, o) { e(t, n, r, o); }); } return o = o ? o.then(i, i) : i(); }, !0); } function d(r, e) { var n = e.method, o = r.i[n]; if (o === t) return e.delegate = null, "throw" === n && r.i["return"] && (e.method = "return", e.arg = t, d(r, e), "throw" === e.method) || "return" !== n && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + n + "' method")), f; var i = s(o, r.i, e.arg); if ("throw" === i.type) return e.method = "throw", e.arg = i.arg, e.delegate = null, f; var a = i.arg; return a ? a.done ? (e[r.r] = a.value, e.next = r.n, "return" !== e.method && (e.method = "next", e.arg = t), e.delegate = null, f) : a : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f); } function w(t) { this.tryEntries.push(t); } function m(r) { var e = r[4] || {}; e.type = "normal", e.arg = t, r[4] = e; } function Context(t) { this.tryEntries = [[-1]], t.forEach(w, this), this.reset(!0); } function x(r) { if (null != r) { var e = r[i]; if (e) return e.call(r); if ("function" == typeof r.next) return r; if (!isNaN(r.length)) { var o = -1, a = function e() { for (; ++o < r.length;) if (n.call(r, o)) return e.value = r[o], e.done = !1, e; return e.value = t, e.done = !0, e; }; return a.next = a; } } throw new TypeError(_typeof(r) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, c(v, "constructor", GeneratorFunctionPrototype), c(GeneratorFunctionPrototype, "constructor", GeneratorFunction), c(GeneratorFunctionPrototype, u, GeneratorFunction.displayName = "GeneratorFunction"), r.isGeneratorFunction = function (t) { var r = "function" == typeof t && t.constructor; return !!r && (r === GeneratorFunction || "GeneratorFunction" === (r.displayName || r.name)); }, r.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, c(t, u, "GeneratorFunction")), t.prototype = Object.create(v), t; }, r.awrap = function (t) { return { __await: t }; }, g(AsyncIterator.prototype), c(AsyncIterator.prototype, a, function () { return this; }), r.AsyncIterator = AsyncIterator, r.async = function (t, e, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(h(t, e, n, o), i); return r.isGeneratorFunction(e) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, g(v), c(v, u, "Generator"), c(v, i, function () { return this; }), c(v, "toString", function () { return "[object Generator]"; }), r.keys = function (t) { var r = Object(t), e = []; for (var n in r) e.unshift(n); return function t() { for (; e.length;) if ((n = e.pop()) in r) return t.value = n, t.done = !1, t; return t.done = !0, t; }; }, r.values = x, Context.prototype = { constructor: Context, reset: function reset(r) { if (this.prev = this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(m), !r) for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0][4]; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(r) { if (this.done) throw r; var e = this; function n(t) { a.type = "throw", a.arg = r, e.next = t; } for (var o = e.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i[4], u = this.prev, c = i[1], h = i[2]; if (-1 === i[0]) return n("end"), !1; if (!c && !h) throw Error("try statement without catch or finally"); if (null != i[0] && i[0] <= u) { if (u < c) return this.method = "next", this.arg = t, n(c), !0; if (u < h) return n(h), !1; } } }, abrupt: function abrupt(t, r) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var n = this.tryEntries[e]; if (n[0] > -1 && n[0] <= this.prev && this.prev < n[2]) { var o = n; break; } } o && ("break" === t || "continue" === t) && o[0] <= r && r <= o[2] && (o = null); var i = o ? o[4] : {}; return i.type = t, i.arg = r, o ? (this.method = "next", this.next = o[2], f) : this.complete(i); }, complete: function complete(t, r) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), f; }, finish: function finish(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[2] === t) return this.complete(e[4], e[3]), m(e), f; } }, "catch": function _catch(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[0] === t) { var n = e[4]; if ("throw" === n.type) { var o = n.arg; m(e); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(r, e, n) { return this.delegate = { i: x(r), r: e, n: n }, "next" === this.method && (this.arg = t), f; } }, r; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "DailyTaskRecap",
  components: {
    ZeroCross: _shared_ZeroCross_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: {
    durees: {
      type: Array,
      "default": function _default() {
        return [{
          label: "De 1 à 15 jours",
          min: 1,
          max: 15
        }, {
          label: "De 16 à 30 jours",
          min: 16,
          max: 30
        }, {
          label: "De 31 à 45 jours",
          min: 31,
          max: 45
        }, {
          label: "De 46 à 90 jours",
          min: 46,
          max: 90
        }, {
          label: "De 91 à 180 jours",
          min: 91,
          max: 180
        }, {
          label: "+ De 181 jours",
          min: 181,
          max: "Infini"
        }];
      }
    }
  },
  data: function data() {
    return {
      title: "Récapitulatif Journalier des Tâches",
      action_icons: {
        "appel": "icofont-phone",
        "visite": "icofont-ui-home",
        "decharge": "icofont-envelope-open"
      },
      rows: [],
      headers: [],
      loading: false,
      error: null,
      filters: {
        use_type: "client",
        target: "client",
        agence: null,
        filiale: null,
        range: null,
        top: 20,
        views: "daily",
        year: new Date().getFullYear(),
        month: new Date().getMonth() + 1,
        week_of_month: (0,_services_recovery_recovery_js__WEBPACK_IMPORTED_MODULE_1__.getWeekOfMonth)()
      }
    };
  },
  computed: {
    disableWeekFilter: function disableWeekFilter() {
      return this.filters.views === "weekly";
    },
    availableYears: function availableYears() {
      return (0,_services_recovery_recovery_js__WEBPACK_IMPORTED_MODULE_1__.getRecoveryAvailableYears)();
    },
    availableMonths: function availableMonths() {
      return (0,_services_recovery_recovery_js__WEBPACK_IMPORTED_MODULE_1__.getAvailableMonths)(this.filters.year);
    },
    availableWeeks: function availableWeeks() {
      return (0,_services_recovery_recovery_js__WEBPACK_IMPORTED_MODULE_1__.getAvailableWeeks)(this.filters.year, this.filters.month);
    }
  },
  mounted: function mounted() {
    var _this = this;
    this.init();
    EventBus.$on('filiale-and-agence-change', /*#__PURE__*/function () {
      var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(newVal) {
        var _newVal$agence, _this$$route$query;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _this.filters.filiale = newVal === null || newVal === void 0 ? void 0 : newVal.filiale;
              _this.filters.agence = newVal === null || newVal === void 0 || (_newVal$agence = newVal.agence) === null || _newVal$agence === void 0 ? void 0 : _newVal$agence.code;
              if (!(((_this$$route$query = _this.$route.query) === null || _this$$route$query === void 0 ? void 0 : _this$$route$query["super-tab"]) === "rapport-execution-taches")) {
                _context.next = 5;
                break;
              }
              _context.next = 5;
              return _this.getData(true);
            case 5:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
  },
  methods: {
    init: function init() {
      var _this2 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var _ref2, _this2$__filiale__, _this2$$store$getters, _this2$$store$getters2;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _this2.error = null;
              if (!_this2.__filiale__ && !_this2.$store.getters.filiale) {
                setTimeout(function () {
                  _this2.init();
                }, 1000);
              } else {
                _this2.filters.filiale = (_ref2 = (_this2$__filiale__ = _this2.__filiale__) !== null && _this2$__filiale__ !== void 0 ? _this2$__filiale__ : _this2.$store.getters.filiale) !== null && _ref2 !== void 0 ? _ref2 : null;
                _this2.filters.agence = (_this2$$store$getters = (_this2$$store$getters2 = _this2.$store.getters.agence_obj) === null || _this2$$store$getters2 === void 0 ? void 0 : _this2$$store$getters2.code) !== null && _this2$$store$getters !== void 0 ? _this2$$store$getters : null;
                Promise.all([_this2.getData()])["finally"](function () {
                  _this2.loading = false;
                });
              }
            case 2:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }))();
    },
    toastError: function toastError(messageOrError) {
      if (_typeof(messageOrError) === "object") {
        var _messageOrError, _messageOrError2;
        if ((_messageOrError = messageOrError) !== null && _messageOrError !== void 0 && (_messageOrError = _messageOrError.response) !== null && _messageOrError !== void 0 && (_messageOrError = _messageOrError.data) !== null && _messageOrError !== void 0 && _messageOrError.message) {
          messageOrError = messageOrError.response.data.message;
        } else if ((_messageOrError2 = messageOrError) !== null && _messageOrError2 !== void 0 && _messageOrError2.message) {
          messageOrError = messageOrError.message;
        }
      }
      this.$toasted.error(messageOrError || "Une erreur est survenue");
    },
    showError: function showError(messageOrError) {
      if (_typeof(messageOrError) === "object") {
        var _messageOrError3, _messageOrError4;
        if ((_messageOrError3 = messageOrError) !== null && _messageOrError3 !== void 0 && (_messageOrError3 = _messageOrError3.response) !== null && _messageOrError3 !== void 0 && (_messageOrError3 = _messageOrError3.data) !== null && _messageOrError3 !== void 0 && _messageOrError3.message) {
          messageOrError = messageOrError.response.data.message;
        } else if ((_messageOrError4 = messageOrError) !== null && _messageOrError4 !== void 0 && _messageOrError4.message) {
          messageOrError = messageOrError.message;
        }
      }
      this.error = messageOrError || "Une erreur est survenue";
    },
    getData: function getData() {
      var _arguments = arguments,
        _this3 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var stopLoading, _yield$_this3$$axios$, res;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              stopLoading = _arguments.length > 0 && _arguments[0] !== undefined ? _arguments[0] : false;
              _this3.error = null;
              _this3.loading = true;
              _context3.prev = 3;
              _context3.next = 6;
              return _this3.$axios.post(_this3.reportex_link(_this3.filters.filiale) + 'creditbuilder/api/v1/recouvrement/daily-weekly-task-recap/', {
                filters: _this3.filters,
                user: _this3.__user__
              });
            case 6:
              _yield$_this3$$axios$ = _context3.sent;
              res = _yield$_this3$$axios$.data;
              if (res !== null && res !== void 0 && res.is_success) {
                _context3.next = 12;
                break;
              }
              _this3.toastError(res);
              _this3.showError(res);
              return _context3.abrupt("return", false);
            case 12:
              _this3.headers = res === null || res === void 0 ? void 0 : res.headers;
              _this3.rows = res === null || res === void 0 ? void 0 : res.rows;
              _context3.next = 20;
              break;
            case 16:
              _context3.prev = 16;
              _context3.t0 = _context3["catch"](3);
              _this3.toastError(_context3.t0);
              _this3.showError(_context3.t0);
            case 20:
              _context3.prev = 20;
              _this3.loading = !stopLoading;
              return _context3.finish(20);
            case 23:
            case "end":
              return _context3.stop();
          }
        }, _callee3, null, [[3, 16, 20, 23]]);
      }))();
    },
    resetFilter: function resetFilter() {
      var _this4 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        var _this4$$store$getters, _this4$$store$getters2;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _this4.filters = {
                use_type: "client",
                target: "client",
                action: "appel",
                agence: (_this4$$store$getters = (_this4$$store$getters2 = _this4.$store.getters.agence_obj) === null || _this4$$store$getters2 === void 0 ? void 0 : _this4$$store$getters2.code) !== null && _this4$$store$getters !== void 0 ? _this4$$store$getters : null,
                filiale: _this4.filters.filiale,
                range: null,
                top: 20,
                views: "daily",
                year: new Date().getFullYear(),
                month: new Date().getMonth() + 1,
                week_of_month: (0,_services_recovery_recovery_js__WEBPACK_IMPORTED_MODULE_1__.getWeekOfMonth)()
              };
              _context4.next = 3;
              return _this4.getData(true);
            case 3:
            case "end":
              return _context4.stop();
          }
        }, _callee4);
      }))();
    },
    handleYearChange: function handleYearChange() {
      var _this5 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              if (!_this5.availableMonths.includes(_this5.filters.month)) {
                _this5.filters.month = _this5.availableMonths[0].id;
              }
              _context5.next = 3;
              return _this5.getData(true);
            case 3:
            case "end":
              return _context5.stop();
          }
        }, _callee5);
      }))();
    },
    downloadTable: function downloadTable() {
      var _this6 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
        var data;
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              _context6.next = 2;
              return _this6.getData(true);
            case 2:
              data = {};
              data = {
                "headers": [],
                "items": _this6.rows,
                "fileType": "excel",
                "title": _this6.title
              };
              EventBus.$emit("download-table-data", data);
            case 5:
            case "end":
              return _context6.stop();
          }
        }, _callee6);
      }))();
    }
  },
  watch: _defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "filters.month", function filtersMonth(newVal, oldVal) {
    if (newVal !== oldVal) {
      var date = new Date(this.filters.year, newVal - 1, 1);
      this.filters.week_of_month = (0,_services_recovery_recovery_js__WEBPACK_IMPORTED_MODULE_1__.getWeekOfMonth)(date);
    }
  }), "__filiale__", function __filiale__(val) {
    if (val != this.filters.filiale) {
      var _this$$store$getters$, _this$$store$getters$2;
      this.filters.filiale = val;
      this.filters.agence = (_this$$store$getters$ = (_this$$store$getters$2 = this.$store.getters.agence_obj) === null || _this$$store$getters$2 === void 0 ? void 0 : _this$$store$getters$2.code) !== null && _this$$store$getters$ !== void 0 ? _this$$store$getters$ : null;
      this.getData(true);
    }
  }), 'filters.agence', function filtersAgence(newVal, oldVal) {
    if (newVal !== oldVal) {
      this.filters.agence = newVal;
      this.getData(true);
    }
  }), 'filters.filiale', function filtersFiliale(newVal, oldVal) {
    if (newVal !== oldVal) {
      this.filters.filiale = newVal;
      this.getData(true);
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/RCDashboard/Statistiques/Recouvrement/ExecutedTaskRecapByClient.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/RCDashboard/Statistiques/Recouvrement/ExecutedTaskRecapByClient.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_recovery_recovery_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../services/recovery/recovery.js */ "./resources/js/services/recovery/recovery.js");
/* harmony import */ var _Input_SelectFiliale_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Input/SelectFiliale.vue */ "./resources/js/components/RCDashboard/Input/SelectFiliale.vue");
/* harmony import */ var _shared_ZeroCross_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/ZeroCross.vue */ "./resources/js/components/shared/ZeroCross.vue");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return r; }; var t, r = {}, e = Object.prototype, n = e.hasOwnProperty, o = "function" == typeof Symbol ? Symbol : {}, i = o.iterator || "@@iterator", a = o.asyncIterator || "@@asyncIterator", u = o.toStringTag || "@@toStringTag"; function c(t, r, e, n) { Object.defineProperty(t, r, { value: e, enumerable: !n, configurable: !n, writable: !n }); } try { c({}, ""); } catch (t) { c = function c(t, r, e) { return t[r] = e; }; } function h(r, e, n, o) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype); return c(a, "_invoke", function (r, e, n) { var o = 1; return function (i, a) { if (3 === o) throw Error("Generator is already running"); if (4 === o) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var u = n.delegate; if (u) { var c = d(u, n); if (c) { if (c === f) continue; return c; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (1 === o) throw o = 4, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = 3; var h = s(r, e, n); if ("normal" === h.type) { if (o = n.done ? 4 : 2, h.arg === f) continue; return { value: h.arg, done: n.done }; } "throw" === h.type && (o = 4, n.method = "throw", n.arg = h.arg); } }; }(r, n, new Context(o || [])), !0), a; } function s(t, r, e) { try { return { type: "normal", arg: t.call(r, e) }; } catch (t) { return { type: "throw", arg: t }; } } r.wrap = h; var f = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var l = {}; c(l, i, function () { return this; }); var p = Object.getPrototypeOf, y = p && p(p(x([]))); y && y !== e && n.call(y, i) && (l = y); var v = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(l); function g(t) { ["next", "throw", "return"].forEach(function (r) { c(t, r, function (t) { return this._invoke(r, t); }); }); } function AsyncIterator(t, r) { function e(o, i, a, u) { var c = s(t[o], t, i); if ("throw" !== c.type) { var h = c.arg, f = h.value; return f && "object" == _typeof(f) && n.call(f, "__await") ? r.resolve(f.__await).then(function (t) { e("next", t, a, u); }, function (t) { e("throw", t, a, u); }) : r.resolve(f).then(function (t) { h.value = t, a(h); }, function (t) { return e("throw", t, a, u); }); } u(c.arg); } var o; c(this, "_invoke", function (t, n) { function i() { return new r(function (r, o) { e(t, n, r, o); }); } return o = o ? o.then(i, i) : i(); }, !0); } function d(r, e) { var n = e.method, o = r.i[n]; if (o === t) return e.delegate = null, "throw" === n && r.i["return"] && (e.method = "return", e.arg = t, d(r, e), "throw" === e.method) || "return" !== n && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + n + "' method")), f; var i = s(o, r.i, e.arg); if ("throw" === i.type) return e.method = "throw", e.arg = i.arg, e.delegate = null, f; var a = i.arg; return a ? a.done ? (e[r.r] = a.value, e.next = r.n, "return" !== e.method && (e.method = "next", e.arg = t), e.delegate = null, f) : a : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f); } function w(t) { this.tryEntries.push(t); } function m(r) { var e = r[4] || {}; e.type = "normal", e.arg = t, r[4] = e; } function Context(t) { this.tryEntries = [[-1]], t.forEach(w, this), this.reset(!0); } function x(r) { if (null != r) { var e = r[i]; if (e) return e.call(r); if ("function" == typeof r.next) return r; if (!isNaN(r.length)) { var o = -1, a = function e() { for (; ++o < r.length;) if (n.call(r, o)) return e.value = r[o], e.done = !1, e; return e.value = t, e.done = !0, e; }; return a.next = a; } } throw new TypeError(_typeof(r) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, c(v, "constructor", GeneratorFunctionPrototype), c(GeneratorFunctionPrototype, "constructor", GeneratorFunction), c(GeneratorFunctionPrototype, u, GeneratorFunction.displayName = "GeneratorFunction"), r.isGeneratorFunction = function (t) { var r = "function" == typeof t && t.constructor; return !!r && (r === GeneratorFunction || "GeneratorFunction" === (r.displayName || r.name)); }, r.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, c(t, u, "GeneratorFunction")), t.prototype = Object.create(v), t; }, r.awrap = function (t) { return { __await: t }; }, g(AsyncIterator.prototype), c(AsyncIterator.prototype, a, function () { return this; }), r.AsyncIterator = AsyncIterator, r.async = function (t, e, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(h(t, e, n, o), i); return r.isGeneratorFunction(e) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, g(v), c(v, u, "Generator"), c(v, i, function () { return this; }), c(v, "toString", function () { return "[object Generator]"; }), r.keys = function (t) { var r = Object(t), e = []; for (var n in r) e.unshift(n); return function t() { for (; e.length;) if ((n = e.pop()) in r) return t.value = n, t.done = !1, t; return t.done = !0, t; }; }, r.values = x, Context.prototype = { constructor: Context, reset: function reset(r) { if (this.prev = this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(m), !r) for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0][4]; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(r) { if (this.done) throw r; var e = this; function n(t) { a.type = "throw", a.arg = r, e.next = t; } for (var o = e.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i[4], u = this.prev, c = i[1], h = i[2]; if (-1 === i[0]) return n("end"), !1; if (!c && !h) throw Error("try statement without catch or finally"); if (null != i[0] && i[0] <= u) { if (u < c) return this.method = "next", this.arg = t, n(c), !0; if (u < h) return n(h), !1; } } }, abrupt: function abrupt(t, r) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var n = this.tryEntries[e]; if (n[0] > -1 && n[0] <= this.prev && this.prev < n[2]) { var o = n; break; } } o && ("break" === t || "continue" === t) && o[0] <= r && r <= o[2] && (o = null); var i = o ? o[4] : {}; return i.type = t, i.arg = r, o ? (this.method = "next", this.next = o[2], f) : this.complete(i); }, complete: function complete(t, r) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), f; }, finish: function finish(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[2] === t) return this.complete(e[4], e[3]), m(e), f; } }, "catch": function _catch(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[0] === t) { var n = e[4]; if ("throw" === n.type) { var o = n.arg; m(e); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(r, e, n) { return this.delegate = { i: x(r), r: e, n: n }, "next" === this.method && (this.arg = t), f; } }, r; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "ExecutedTaskRecapByClient",
  components: {
    SelectFiliale: _Input_SelectFiliale_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    ZeroCross: _shared_ZeroCross_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      error: null,
      loading: false,
      items: [],
      total: null,
      search: "",
      sortKey: "",
      aggregateur: "dureeimp",
      top: 20,
      tops: [{
        label: 'Top 10',
        value: 10
      }, {
        label: 'Top 20',
        value: 20
      }, {
        label: 'Top 30',
        value: 30
      }, {
        label: 'Top 50',
        value: 50
      }, {
        label: 'Global',
        value: 'tous'
      }],
      filtre: {},
      ascending: false,
      filiale: null,
      agence: null,
      year: new Date().getFullYear(),
      month: null,
      target: "client"
    };
  },
  computed: {
    keyInFinalAggregation: function keyInFinalAggregation() {
      return ['client', 'dossier'].includes(this.aggregateur);
    },
    availableYears: function availableYears() {
      return (0,_services_recovery_recovery_js__WEBPACK_IMPORTED_MODULE_0__.getRecoveryAvailableYears)();
    },
    availableMonths: function availableMonths() {
      return (0,_services_recovery_recovery_js__WEBPACK_IMPORTED_MODULE_0__.getAvailableMonths)(this.year);
    }
  },
  mounted: function mounted() {
    var _this = this;
    this.init();
    EventBus.$on('filiale-and-agence-change', /*#__PURE__*/function () {
      var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(newVal) {
        var _newVal$agence, _this$$route$query;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _this.filiale = newVal === null || newVal === void 0 ? void 0 : newVal.filiale;
              _this.agence = newVal === null || newVal === void 0 || (_newVal$agence = newVal.agence) === null || _newVal$agence === void 0 ? void 0 : _newVal$agence.code;
              if (!(((_this$$route$query = _this.$route.query) === null || _this$$route$query === void 0 ? void 0 : _this$$route$query["super-tab"]) === "rapport-execution-taches")) {
                _context.next = 5;
                break;
              }
              _context.next = 5;
              return _this.getData(true);
            case 5:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
  },
  methods: {
    init: function init() {
      var _this2 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var _this2$$store$getters, _this2$$store$getters2;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _this2.error = null;
              if (!_this2.__filiale__) {
                setTimeout(function () {
                  _this2.init();
                }, 500);
              } else {
                _this2.filiale = _this2.__filiale__;
                _this2.agence = (_this2$$store$getters = (_this2$$store$getters2 = _this2.$store.getters.agence_obj) === null || _this2$$store$getters2 === void 0 ? void 0 : _this2$$store$getters2.code) !== null && _this2$$store$getters !== void 0 ? _this2$$store$getters : null;
                Promise.all([_this2.getData()])["finally"](function () {
                  _this2.loading = false;
                });
              }
            case 2:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }))();
    },
    toastError: function toastError(messageOrError) {
      if (_typeof(messageOrError) === "object") {
        var _messageOrError, _messageOrError2;
        if ((_messageOrError = messageOrError) !== null && _messageOrError !== void 0 && (_messageOrError = _messageOrError.response) !== null && _messageOrError !== void 0 && (_messageOrError = _messageOrError.data) !== null && _messageOrError !== void 0 && _messageOrError.message) {
          messageOrError = messageOrError.response.data.message;
        } else if ((_messageOrError2 = messageOrError) !== null && _messageOrError2 !== void 0 && _messageOrError2.message) {
          messageOrError = messageOrError.message;
        }
      }
      this.$toasted.error(messageOrError || "Une erreur est survenue");
    },
    showError: function showError(messageOrError) {
      if (_typeof(messageOrError) === "object") {
        var _messageOrError3, _messageOrError4;
        if ((_messageOrError3 = messageOrError) !== null && _messageOrError3 !== void 0 && (_messageOrError3 = _messageOrError3.response) !== null && _messageOrError3 !== void 0 && (_messageOrError3 = _messageOrError3.data) !== null && _messageOrError3 !== void 0 && _messageOrError3.message) {
          messageOrError = messageOrError.response.data.message;
        } else if ((_messageOrError4 = messageOrError) !== null && _messageOrError4 !== void 0 && _messageOrError4.message) {
          messageOrError = messageOrError.message;
        }
      }
      this.error = messageOrError || "Une erreur est survenue";
    },
    getData: function getData() {
      var _arguments = arguments,
        _this3 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var stopLoading, _yield$_this3$$axios$, res;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              stopLoading = _arguments.length > 0 && _arguments[0] !== undefined ? _arguments[0] : false;
              _this3.error = null;
              _this3.loading = true;
              _context3.prev = 3;
              _this3.filtre['use_duree'] = true;
              _context3.next = 7;
              return _this3.$axios.post(_this3.reportex_link(_this3.filiale) + 'creditbuilder/api/v1/recouvrement/comptage-taches-executees/', {
                filiale: _this3.filiale,
                agence: _this3.agence,
                top: _this3.top,
                aggregateur: _this3.aggregateur,
                month: _this3.month,
                year: _this3.year,
                // duree: "",
                filtre: _this3.filtre,
                user: _this3.__user__,
                use_type: "client",
                target: _this3.target
              });
            case 7:
              _yield$_this3$$axios$ = _context3.sent;
              res = _yield$_this3$$axios$.data;
              _this3.items = res.data;
              _this3.total = res.total;
              _context3.next = 17;
              break;
            case 13:
              _context3.prev = 13;
              _context3.t0 = _context3["catch"](3);
              _this3.toastError(_context3.t0);
              _this3.showError(_context3.t0);
            case 17:
              _context3.prev = 17;
              _this3.loading = !stopLoading;
              return _context3.finish(17);
            case 20:
            case "end":
              return _context3.stop();
          }
        }, _callee3, null, [[3, 13, 17, 20]]);
      }))();
    },
    toggler: function toggler() {
      this.$emit("toggle-view");
    },
    sortBy: function sortBy(key) {
      console.log("Sort by", key);
    },
    handleYearChange: function handleYearChange() {
      var _this4 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _this4.month = null;
              _context4.next = 3;
              return _this4.getData(true);
            case 3:
            case "end":
              return _context4.stop();
          }
        }, _callee4);
      }))();
    },
    resetFilter: function resetFilter() {
      var _this5 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
        var _this5$$store$getters, _this5$$store$getters2;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              _this5.agence = (_this5$$store$getters = (_this5$$store$getters2 = _this5.$store.getters.agence_obj) === null || _this5$$store$getters2 === void 0 ? void 0 : _this5$$store$getters2.code) !== null && _this5$$store$getters !== void 0 ? _this5$$store$getters : null;
              _this5.top = 20;
              _this5.aggregateur = "dureeimp";
              _this5.month = null;
              _this5.year = new Date().getFullYear();
              _this5.target = "client";
              // this.duree: "";
              _this5.filtre = {};
              _context5.next = 9;
              return _this5.getData(true);
            case 9:
            case "end":
              return _context5.stop();
          }
        }, _callee5);
      }))();
    },
    downloadTable: function downloadTable() {
      var _this6 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
        var data;
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              _context6.next = 2;
              return _this6.getData(true);
            case 2:
              data = {};
              data = {
                "headers": [],
                "items": _this6.items,
                "fileType": "excel",
                "title": "Rapport par dossier de crédit"
              };
              EventBus.$emit("download-table-data", data);
            case 5:
            case "end":
              return _context6.stop();
          }
        }, _callee6);
      }))();
    }
  },
  watch: {
    __filiale__: function __filiale__(val) {
      if (val != this.filiale) {
        var _this$$store$getters$, _this$$store$getters$2;
        this.filiale = val;
        this.agence = (_this$$store$getters$ = (_this$$store$getters$2 = this.$store.getters.agence_obj) === null || _this$$store$getters$2 === void 0 ? void 0 : _this$$store$getters$2.code) !== null && _this$$store$getters$ !== void 0 ? _this$$store$getters$ : null;
        this.getData(true);
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/RCDashboard/Statistiques/Recouvrement/NextRecapTaskExecution.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/RCDashboard/Statistiques/Recouvrement/NextRecapTaskExecution.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_drilldown_DrillDownEngine_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../services/drilldown/DrillDownEngine.js */ "./resources/js/services/drilldown/DrillDownEngine.js");
/* harmony import */ var _services_drilldown_hierarchies_recouvrement_hierarchy_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../services/drilldown/hierarchies/recouvrement-hierarchy.js */ "./resources/js/services/drilldown/hierarchies/recouvrement-hierarchy.js");
/* harmony import */ var _services_drilldown_RecouvrementDDContract_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/drilldown/RecouvrementDDContract.js */ "./resources/js/services/drilldown/RecouvrementDDContract.js");
/* harmony import */ var _shared_ZeroCross_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/ZeroCross.vue */ "./resources/js/components/shared/ZeroCross.vue");
/* harmony import */ var _ErrorRetry__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ErrorRetry */ "./resources/js/components/RCDashboard/Statistiques/Recouvrement/ErrorRetry.vue");
/* harmony import */ var _services_recovery_recovery_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/recovery/recovery.js */ "./resources/js/services/recovery/recovery.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return r; }; var t, r = {}, e = Object.prototype, n = e.hasOwnProperty, o = "function" == typeof Symbol ? Symbol : {}, i = o.iterator || "@@iterator", a = o.asyncIterator || "@@asyncIterator", u = o.toStringTag || "@@toStringTag"; function c(t, r, e, n) { Object.defineProperty(t, r, { value: e, enumerable: !n, configurable: !n, writable: !n }); } try { c({}, ""); } catch (t) { c = function c(t, r, e) { return t[r] = e; }; } function h(r, e, n, o) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype); return c(a, "_invoke", function (r, e, n) { var o = 1; return function (i, a) { if (3 === o) throw Error("Generator is already running"); if (4 === o) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var u = n.delegate; if (u) { var c = d(u, n); if (c) { if (c === f) continue; return c; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (1 === o) throw o = 4, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = 3; var h = s(r, e, n); if ("normal" === h.type) { if (o = n.done ? 4 : 2, h.arg === f) continue; return { value: h.arg, done: n.done }; } "throw" === h.type && (o = 4, n.method = "throw", n.arg = h.arg); } }; }(r, n, new Context(o || [])), !0), a; } function s(t, r, e) { try { return { type: "normal", arg: t.call(r, e) }; } catch (t) { return { type: "throw", arg: t }; } } r.wrap = h; var f = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var l = {}; c(l, i, function () { return this; }); var p = Object.getPrototypeOf, y = p && p(p(x([]))); y && y !== e && n.call(y, i) && (l = y); var v = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(l); function g(t) { ["next", "throw", "return"].forEach(function (r) { c(t, r, function (t) { return this._invoke(r, t); }); }); } function AsyncIterator(t, r) { function e(o, i, a, u) { var c = s(t[o], t, i); if ("throw" !== c.type) { var h = c.arg, f = h.value; return f && "object" == _typeof(f) && n.call(f, "__await") ? r.resolve(f.__await).then(function (t) { e("next", t, a, u); }, function (t) { e("throw", t, a, u); }) : r.resolve(f).then(function (t) { h.value = t, a(h); }, function (t) { return e("throw", t, a, u); }); } u(c.arg); } var o; c(this, "_invoke", function (t, n) { function i() { return new r(function (r, o) { e(t, n, r, o); }); } return o = o ? o.then(i, i) : i(); }, !0); } function d(r, e) { var n = e.method, o = r.i[n]; if (o === t) return e.delegate = null, "throw" === n && r.i["return"] && (e.method = "return", e.arg = t, d(r, e), "throw" === e.method) || "return" !== n && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + n + "' method")), f; var i = s(o, r.i, e.arg); if ("throw" === i.type) return e.method = "throw", e.arg = i.arg, e.delegate = null, f; var a = i.arg; return a ? a.done ? (e[r.r] = a.value, e.next = r.n, "return" !== e.method && (e.method = "next", e.arg = t), e.delegate = null, f) : a : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f); } function w(t) { this.tryEntries.push(t); } function m(r) { var e = r[4] || {}; e.type = "normal", e.arg = t, r[4] = e; } function Context(t) { this.tryEntries = [[-1]], t.forEach(w, this), this.reset(!0); } function x(r) { if (null != r) { var e = r[i]; if (e) return e.call(r); if ("function" == typeof r.next) return r; if (!isNaN(r.length)) { var o = -1, a = function e() { for (; ++o < r.length;) if (n.call(r, o)) return e.value = r[o], e.done = !1, e; return e.value = t, e.done = !0, e; }; return a.next = a; } } throw new TypeError(_typeof(r) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, c(v, "constructor", GeneratorFunctionPrototype), c(GeneratorFunctionPrototype, "constructor", GeneratorFunction), c(GeneratorFunctionPrototype, u, GeneratorFunction.displayName = "GeneratorFunction"), r.isGeneratorFunction = function (t) { var r = "function" == typeof t && t.constructor; return !!r && (r === GeneratorFunction || "GeneratorFunction" === (r.displayName || r.name)); }, r.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, c(t, u, "GeneratorFunction")), t.prototype = Object.create(v), t; }, r.awrap = function (t) { return { __await: t }; }, g(AsyncIterator.prototype), c(AsyncIterator.prototype, a, function () { return this; }), r.AsyncIterator = AsyncIterator, r.async = function (t, e, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(h(t, e, n, o), i); return r.isGeneratorFunction(e) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, g(v), c(v, u, "Generator"), c(v, i, function () { return this; }), c(v, "toString", function () { return "[object Generator]"; }), r.keys = function (t) { var r = Object(t), e = []; for (var n in r) e.unshift(n); return function t() { for (; e.length;) if ((n = e.pop()) in r) return t.value = n, t.done = !1, t; return t.done = !0, t; }; }, r.values = x, Context.prototype = { constructor: Context, reset: function reset(r) { if (this.prev = this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(m), !r) for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0][4]; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(r) { if (this.done) throw r; var e = this; function n(t) { a.type = "throw", a.arg = r, e.next = t; } for (var o = e.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i[4], u = this.prev, c = i[1], h = i[2]; if (-1 === i[0]) return n("end"), !1; if (!c && !h) throw Error("try statement without catch or finally"); if (null != i[0] && i[0] <= u) { if (u < c) return this.method = "next", this.arg = t, n(c), !0; if (u < h) return n(h), !1; } } }, abrupt: function abrupt(t, r) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var n = this.tryEntries[e]; if (n[0] > -1 && n[0] <= this.prev && this.prev < n[2]) { var o = n; break; } } o && ("break" === t || "continue" === t) && o[0] <= r && r <= o[2] && (o = null); var i = o ? o[4] : {}; return i.type = t, i.arg = r, o ? (this.method = "next", this.next = o[2], f) : this.complete(i); }, complete: function complete(t, r) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), f; }, finish: function finish(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[2] === t) return this.complete(e[4], e[3]), m(e), f; } }, "catch": function _catch(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[0] === t) { var n = e[4]; if ("throw" === n.type) { var o = n.arg; m(e); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(r, e, n) { return this.delegate = { i: x(r), r: e, n: n }, "next" === this.method && (this.arg = t), f; } }, r; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * NextRecapTaskExecution.vue
 * 
 * Composant principal pour l'affichage et la navigation drill-down des rapports
 * d'exécution de tâches de l'équipe précontentieux.
 * 
 * Fonctionnalités principales :
 * - Navigation hiérarchique drill-down (équipes -> responsables -> agents -> clients -> dossiers)
 * - Système de cache intelligent avec TTL pour optimiser les performances
 * - Filtrage avancé par année, mois, type et cible
 * - Export Excel des données (Backlog)
 * - Breadcrumb navigation pour retour rapide aux étapes précédentes
 * - Protection contre les chargements simultanés
 * 
 * Système de cache :
 * - Clés déterministes basées sur l'étape et les filtres
 * - TTL configurable (défaut: 5 minutes)
 * - Nettoyage automatique des entrées expirées
 * - API de debugging accessible via window.drillDownCache
 * 
 * @author ovarion
 * @version 2.0.0
 */






var CustomZeroCross = {
  name: 'CustomZeroCross',
  components: {
    ZeroCross: _shared_ZeroCross_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  props: {
    value: {
      type: Number,
      required: true
    },
    row: {
      type: Object,
      "default": function _default() {
        return {};
      }
    },
    column: {
      type: Object,
      "default": function _default() {
        return {};
      }
    }
  },
  computed: {
    formattedValue: function formattedValue() {
      if (this.value == null || this.value === undefined) return 0;
      return new Intl.NumberFormat("fr-FR").format(String(this.value).replace(/\s/g, "").replace(",", "."));
    }
  },
  template: "\n    <div class=\"custom-zero-cross\">\n      <ZeroCross \n        v-if=\"!value\" \n        :value=\"formattedValue\" \n        style=\"font-family: monospace !important; font-size: 1.1em; font-weight: normal;\" \n      />\n      <span v-else style=\"font-family: monospace; font-weight: normal;\">\n        {{ formattedValue }}\n      </span>\n    </div>\n  "
};
var defaultFilters = {
  top: 20,
  target: 'client',
  type: 'dossier',
  range: null,
  year: new Date().getFullYear(),
  month: null,
  tool_key: null
};

// Configuration globale du système de cache
var CACHE_CONFIG = {
  TTL: 5 * 60 * 1000,
  // Durée d'expiration : 5 minutes
  MAX_SIZE: 50,
  // Nombre maximum d'entrées dans le cache
  KEY_PREFIX: 'drill_down_cache_'
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "NextRecapTaskExecution",
  components: {
    ErrorRetry: _ErrorRetry__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  props: {
    user: Object,
    filiale: [String, null]
    // loading: Boolean,
  },
  data: function data() {
    return {
      // État des erreurs et contexte utilisateur
      error: null,
      userContext: null,
      // Moteurs de navigation drill-down
      /** @type {DrillDownEngine} */
      ddEngine: null,
      /** @type {RecouvrementDDContract} */
      ddContract: null,
      // Données et état de navigation
      currentData: [],
      finalResult: null,
      currentToolKey: null,
      // Configuration des filtres
      tops: [{
        label: 'Top 10',
        value: 10
      }, {
        label: 'Top 20',
        value: 20
      }, {
        label: 'Top 30',
        value: 30
      }, {
        label: 'Top 50',
        value: 50
      }, {
        label: 'Global',
        value: 'tous'
      }],
      filters: structuredClone(defaultFilters),
      internalLoading: false,
      // Système de cache pour optimiser la navigation
      dataCache: new Map(),
      cacheConfig: _objectSpread({}, CACHE_CONFIG),
      cacheCleanupInterval: null,
      isDataFromCache: false,
      // Protection contre les chargements simultanés
      isLoadingStep: false,
      currentLoadingPromise: null
    };
  },
  computed: {
    /* -------------- PROPRIÉTÉS CALCULÉES - CONFIGURATION ET ÉTAT -------------- */title: function title() {
      return "Rapport d'exécution de tâches (Équipe précontentieux)";
    },
    currentToolConfig: function currentToolConfig() {
      this.filters.tool_key = this.currentToolKey;
      return this.currentToolKey && this.ddContract ? this.ddContract.getToolConfig(this.currentToolKey) : null;
    },
    currentStepIdx: function currentStepIdx() {
      this.currentToolKey; // Tracker la clé d'outil actuelle
      if (this.ddEngine && this.ddEngine.isStarted) {
        return this.ddEngine.getCurrentIndex();
      }
      return -1;
    },
    /* ---------------- PROPRIÉTÉS CALCULÉES - DONNÉES ET OPTIONS --------------- */availableYears: function availableYears() {
      return (0,_services_recovery_recovery_js__WEBPACK_IMPORTED_MODULE_5__.getRecoveryAvailableYears)();
    },
    availableMonths: function availableMonths() {
      return (0,_services_recovery_recovery_js__WEBPACK_IMPORTED_MODULE_5__.getAvailableMonths)(this.filters.year);
    },
    customZeroCrossComponent: function customZeroCrossComponent() {
      return CustomZeroCross;
    },
    /* ------- PROPRIÉTÉS CALCULÉES - AFFICHAGE CONDITIONNEL DES COLONNES ------- */shouldShowMatricule: function shouldShowMatricule() {
      return !["equipe_list", "responsable_list", "agent_list"].includes(this.currentToolKey);
    },
    shouldShowCAF: function shouldShowCAF() {
      return !["equipe_list", "responsable_list", "agent_list", "client_list"].includes(this.currentToolKey);
    },
    shouldShowAgence: function shouldShowAgence() {
      return !["equipe_list", "responsable_list", "agent_list", "client_list"].includes(this.currentToolKey);
    },
    /* -------------- PROPRIÉTÉS CALCULÉES - NAVIGATION BREADCRUMB -------------- */navigationBreadcrumb: function navigationBreadcrumb() {
      var _this = this;
      this.currentToolKey; // Tracker pour réactivité

      if (!this.ddEngine || !this.ddEngine.isStarted) {
        return [];
      }
      var currentIndex = this.ddEngine.getCurrentIndex();
      var fullPath = this.ddEngine.getFullPath();
      var breadcrumb = this.ddEngine.getBreadcrumb();
      var navigation = [];

      // Ajouter l'étape actuelle au minimum
      if (currentIndex >= 0 && fullPath[currentIndex]) {
        var _this$ddContract;
        var currentStep = fullPath[currentIndex];
        var tool = (_this$ddContract = this.ddContract) === null || _this$ddContract === void 0 ? void 0 : _this$ddContract.getToolConfig(currentStep.toolKey);
        if (tool) {
          navigation.push({
            stepIndex: currentIndex,
            toolKey: currentStep.toolKey,
            label: tool.label
          });
        }
      }

      // Ajouter les étapes précédentes du breadcrumb
      breadcrumb.forEach(function (crumb, index) {
        if (crumb.step && index < currentIndex) {
          var _this$ddContract2;
          var _tool = (_this$ddContract2 = _this.ddContract) === null || _this$ddContract2 === void 0 ? void 0 : _this$ddContract2.getToolConfig(crumb.step.toolKey);
          if (_tool) {
            var _crumb$context;
            var label = _tool.label;

            // Ajouter le nom de la sélection si disponible
            if ((_crumb$context = crumb.context) !== null && _crumb$context !== void 0 && _crumb$context.selection) {
              var selection = crumb.context.selection;
              var name = selection.nom_caf || selection.name || selection.label || '';
              if (name) {
                label += " : ".concat(name);
              }
            }

            // Insérer à la bonne position
            navigation.splice(index, 0, {
              stepIndex: index,
              toolKey: crumb.step.toolKey,
              label: label
            });
          }
        }
      });
      return navigation;
    }
  },
  methods: {
    /* -------------------------------------------------------------------------- */
    /*                        MÉTHODES DE GESTION DU CACHE                        */
    /* -------------------------------------------------------------------------- */
    /**
     * Génère une clé unique et stable pour le cache
     * @param {number} stepIndex - Index de l'étape de navigation
     * @param {string} toolKey - Clé de l'outil/étape
     * @param {Object} params - Paramètres supplémentaires
     * @returns {string} Clé de cache unique
     */
    generateCacheKey: function generateCacheKey(stepIndex, toolKey) {
      var _params$user, _this$user;
      var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var currentFilters = params.filters || this.filters;

      // Normaliser les filtres pour éviter les variations mineures
      var normalizedFilters = {
        top: currentFilters.top,
        target: currentFilters.target,
        type: currentFilters.type,
        year: currentFilters.year,
        month: currentFilters.month
      };

      // Construire une clé stable et déterministe
      var keyParts = [stepIndex, toolKey, ((_params$user = params.user) === null || _params$user === void 0 ? void 0 : _params$user.id) || ((_this$user = this.user) === null || _this$user === void 0 ? void 0 : _this$user.id), this._hashObject(normalizedFilters), params.selection ? params.selection.id || params.selection.nom_caf || this._hashObject(params.selection) : 'null'];
      return this.cacheConfig.KEY_PREFIX + keyParts.join('_');
    },
    /**
     * Génère un hash déterministe pour un objet
     * @param {Object} obj - Objet à hasher
     * @returns {string} Hash de l'objet
     */
    _hashObject: function _hashObject(obj) {
      if (!obj) return 'null';

      // Trier les clés pour un hash déterministe
      var sortedKeys = Object.keys(obj).sort();
      var sortedObj = {};
      sortedKeys.forEach(function (key) {
        sortedObj[key] = obj[key];
      });

      // Générer un hash simple mais efficace
      var str = JSON.stringify(sortedObj);
      var hash = 0;
      for (var i = 0; i < str.length; i++) {
        var _char = str.charCodeAt(i);
        hash = (hash << 5) - hash + _char;
        hash = hash & hash; // Convert to 32-bit integer
      }
      return Math.abs(hash).toString(36);
    },
    /**
     * Vérifie si une entrée de cache est encore valide
     * @param {Object} cacheEntry - Entrée du cache à vérifier
     * @returns {boolean} True si l'entrée est valide
     */
    isCacheEntryValid: function isCacheEntryValid(cacheEntry) {
      if (!cacheEntry || !cacheEntry.timestamp) {
        return false;
      }
      var now = Date.now();
      var age = now - cacheEntry.timestamp;
      return age < this.cacheConfig.TTL;
    },
    /**
     * Récupère des données depuis le cache
     * @param {number} stepIndex - Index de l'étape
     * @param {string} toolKey - Clé de l'outil
     * @param {Object} params - Paramètres de recherche
     * @returns {*|null} Données du cache ou null si non trouvées
     */
    getFromCache: function getFromCache(stepIndex, toolKey) {
      var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      try {
        var cacheKey = this.generateCacheKey(stepIndex, toolKey, params);
        var cacheEntry = this.dataCache.get(cacheKey);
        if (cacheEntry && this.isCacheEntryValid(cacheEntry)) {
          return cacheEntry.data;
        }

        // Supprimer les entrées expirées
        if (cacheEntry) {
          this.dataCache["delete"](cacheKey);
        }
        return null;
      } catch (error) {
        console.warn('Erreur lors de la récupération du cache:', error);
        return null;
      }
    },
    /**
     * Stocke des données dans le cache
     * @param {number} stepIndex - Index de l'étape
     * @param {string} toolKey - Clé de l'outil
     * @param {*} data - Données à stocker
     * @param {Object} params - Paramètres de stockage
     */
    setToCache: function setToCache(stepIndex, toolKey, data) {
      var params = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
      try {
        var cacheKey = this.generateCacheKey(stepIndex, toolKey, params);

        // Nettoyer le cache si nécessaire
        this.cleanupCache();
        var cacheEntry = {
          data: structuredClone(data),
          timestamp: Date.now(),
          stepIndex: stepIndex,
          toolKey: toolKey,
          params: structuredClone(params)
        };
        this.dataCache.set(cacheKey, cacheEntry);
      } catch (error) {
        console.warn('Erreur lors de la mise en cache:', error);
      }
    },
    /**
     * Nettoie le cache des entrées expirées et limite la taille
     */
    cleanupCache: function cleanupCache() {
      var _this2 = this;
      var toDelete = [];

      // Identifier les entrées expirées
      var _iterator = _createForOfIteratorHelper(this.dataCache.entries()),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _step$value = _slicedToArray(_step.value, 2),
            key = _step$value[0],
            entry = _step$value[1];
          if (!this.isCacheEntryValid(entry)) {
            toDelete.push(key);
          }
        }

        // Supprimer les entrées expirées
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      toDelete.forEach(function (key) {
        return _this2.dataCache["delete"](key);
      });

      // Limiter la taille du cache
      if (this.dataCache.size >= this.cacheConfig.MAX_SIZE) {
        var entries = Array.from(this.dataCache.entries());
        entries.sort(function (a, b) {
          return a[1].timestamp - b[1].timestamp;
        });
        var toRemove = entries.slice(0, Math.floor(this.cacheConfig.MAX_SIZE / 2));
        toRemove.forEach(function (_ref) {
          var _ref2 = _slicedToArray(_ref, 1),
            key = _ref2[0];
          return _this2.dataCache["delete"](key);
        });
      }
    },
    /**
     * Vide complètement le cache
     */
    clearCache: function clearCache() {
      this.dataCache.clear();
    },
    /**
     * Configure la durée de vie du cache
     * @param {number} ttlMs - Durée de vie en millisecondes
     */
    setCacheTTL: function setCacheTTL(ttlMs) {
      this.cacheConfig.TTL = ttlMs;
    },
    /**
     * Retourne les statistiques du cache
     * @returns {Object} Statistiques détaillées du cache
     */
    getCacheStats: function getCacheStats() {
      var validEntries = 0;
      var expiredEntries = 0;
      var _iterator2 = _createForOfIteratorHelper(this.dataCache.entries()),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var _step2$value = _slicedToArray(_step2.value, 2),
            key = _step2$value[0],
            entry = _step2$value[1];
          if (this.isCacheEntryValid(entry)) {
            validEntries++;
          } else {
            expiredEntries++;
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      return {
        totalEntries: this.dataCache.size,
        validEntries: validEntries,
        expiredEntries: expiredEntries,
        maxSize: this.cacheConfig.MAX_SIZE,
        ttl: this.cacheConfig.TTL
      };
    },
    /**
     * Affiche les statistiques du cache dans la console
     */
    logCacheStats: function logCacheStats() {
      var stats = this.getCacheStats();
      console.table(stats);
      console.log('📋 Entrées du cache:', Array.from(this.dataCache.keys()));
    },
    /* -------------------------------------------------------------------------- */
    /*                  MÉTHODES DE GESTION DES ÉQUIPES ET RÔLES                  */
    /* -------------------------------------------------------------------------- */
    /**
     * Récupère l'équipe d'un utilisateur
     * @param {Object} user - Utilisateur
     * @param {boolean} name - Retourner le nom plutôt que l'ID
     * @returns {string|number} ID ou nom de l'équipe
     */
    getUserTeam: function getUserTeam(user) {
      var _user$recovery_team_i, _user$recovery_team_i2;
      var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      if (typeof (user === null || user === void 0 || (_user$recovery_team_i = user.recovery_team_info) === null || _user$recovery_team_i === void 0 ? void 0 : _user$recovery_team_i.teams) !== "string") {
        return -1;
      }
      var teamName = user === null || user === void 0 || (_user$recovery_team_i2 = user.recovery_team_info) === null || _user$recovery_team_i2 === void 0 ? void 0 : _user$recovery_team_i2.teams;
      if (name) {
        return teamName !== null && teamName !== void 0 ? teamName : -1;
      }
      var _teamName$split = teamName.split("_"),
        _teamName$split2 = _slicedToArray(_teamName$split, 2),
        numStr = _teamName$split2[1];
      return isNaN(numStr) ? -1 : parseInt(numStr, 10);
    },
    /**
     * Vérifie si un utilisateur est membre d'une équipe de recouvrement
     * @param {string} roleUuid - UUID du rôle
     * @returns {boolean} True si membre d'équipe de recouvrement
     */
    isRecoveryTeamMember: function isRecoveryTeamMember(roleUuid) {
      return ["aFwisnrdo42c4n9MHCG2",
      // AR - Agent de Recouvrement
      "tmu3PEDVQsevYH2rhw4o" // RESR - Responsable
      ].includes(roleUuid);
    },
    /**
     * Vérifie si un utilisateur est un agent de recouvrement
     * @param {string} roleUuid - UUID du rôle
     * @returns {boolean} True si agent de recouvrement
     */
    isRecoveryAgent: function isRecoveryAgent(roleUuid) {
      return ["aFwisnrdo42c4n9MHCG2" // AR - Agent de Recouvrement
      ].includes(roleUuid);
    },
    /**
     * Met à jour le contexte utilisateur avec les informations d'équipe
     * @param {Object} user - Utilisateur
     * @returns {Object|null} Contexte utilisateur mis à jour
     */
    updateUserContext: function updateUserContext(user) {
      var _this3 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var _user$id;
        var userRoleUuid, team, userContext, isAgent, prefix, userAccess;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              userRoleUuid = (user === null || user === void 0 ? void 0 : user.role_uuid) || (user === null || user === void 0 ? void 0 : user.role_id);
              if (userRoleUuid) {
                _context.next = 3;
                break;
              }
              return _context.abrupt("return", null);
            case 3:
              team = _this3.getUserTeam(user);
              if (!(team === -1)) {
                _context.next = 6;
                break;
              }
              return _context.abrupt("return", null);
            case 6:
              userContext = {
                id: (_user$id = user.id) !== null && _user$id !== void 0 ? _user$id : user.user_id,
                name: user.name,
                role: null,
                isResponsable: false,
                equipeId: null,
                filiale: _this3.filiale || user.filiale || null
              };
              if (!_this3.isRecoveryTeamMember(userRoleUuid)) {
                _context.next = 15;
                break;
              }
              isAgent = _this3.isRecoveryAgent(userRoleUuid);
              prefix = isAgent ? "ROLE_AGENT_E" : "ROLE_RESPONSABLE_E";
              userContext.role = "".concat(prefix).concat(team);
              userContext.isResponsable = !isAgent;
              userContext.equipeId = team;
              _context.next = 19;
              break;
            case 15:
              _context.next = 17;
              return _this3.determineAccess(user);
            case 17:
              userAccess = _context.sent;
              if (userAccess === "all") {
                userContext.role = "ROLE_DIRECTEUR";
              }
            case 19:
              return _context.abrupt("return", userContext);
            case 20:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    },
    /**
     * Initialise le moteur de drill-down et charge les données initiales
     */
    initializeEngine: function initializeEngine() {
      var _this4 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _this4.internalLoading = true;
              _this4.clearCache(); // Nettoyer le cache à chaque initialisation
              _context2.next = 5;
              return _this4.updateUserContext(_this4.user);
            case 5:
              _this4.userContext = _context2.sent;
              _this4.ddContract = new _services_drilldown_RecouvrementDDContract_js__WEBPACK_IMPORTED_MODULE_2__["default"]();
              _this4.ddEngine = new _services_drilldown_DrillDownEngine_js__WEBPACK_IMPORTED_MODULE_0__["default"](_services_drilldown_hierarchies_recouvrement_hierarchy_js__WEBPACK_IMPORTED_MODULE_1__.HIERARCHY_CONFIG);
              _this4.finalResult = null;
              if (!_this4.ddEngine.start(_this4.userContext.role)) {
                _context2.next = 14;
                break;
              }
              _context2.next = 12;
              return _this4.loadCurrentStepData();
            case 12:
              _context2.next = 15;
              break;
            case 14:
              _this4.error = "Aucun parcours défini pour ce rôle.";
            case 15:
              _context2.next = 21;
              break;
            case 17:
              _context2.prev = 17;
              _context2.t0 = _context2["catch"](0);
              _this4.error = "Une erreur s'est produite lors de l'initialisation.";
              console.error(_context2.t0);
            case 21:
              _context2.prev = 21;
              _this4.internalLoading = false;
              return _context2.finish(21);
            case 24:
            case "end":
              return _context2.stop();
          }
        }, _callee2, null, [[0, 17, 21, 24]]);
      }))();
    },
    /**
     * Construit les paramètres pour le chargement des données
     * Inclut automatiquement user, userContext, filters, breadcrumb context et appInstance
     * @param {Object} additionalParams - Paramètres supplémentaires à fusionner
     * @returns {Object} Objet de paramètres complet pour le chargement de données
     */
    buildDataParams: function buildDataParams() {
      var _this$ddEngine;
      var additionalParams = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var breadcrumb = ((_this$ddEngine = this.ddEngine) === null || _this$ddEngine === void 0 ? void 0 : _this$ddEngine.getBreadcrumb()) || [];
      var contexts = breadcrumb.map(function (b) {
        return b.context || {};
      });
      var lastContext = contexts[contexts.length - 1] || {};
      return _objectSpread(_objectSpread({
        user: this.user,
        userContext: this.userContext,
        filters: structuredClone(this.filters),
        appInstance: this,
        breadcrumb: contexts
      }, lastContext), additionalParams);
    },
    /**
     * Méthode centralisée de chargement de données
     * Gère la logique commune de chargement, gestion d'erreurs et états de chargement
     * @param {Object} additionalParams - Paramètres supplémentaires pour cet appel spécifique
     * @param {Object} options - Options de chargement (skipLoading, etc.)
     * @returns {Promise} Résultat du chargement de données
     */
    loadData: function loadData() {
      var _arguments = arguments,
        _this5 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var additionalParams, options, _options$skipLoading, skipLoading, toolConfig, params, result;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              additionalParams = _arguments.length > 0 && _arguments[0] !== undefined ? _arguments[0] : {};
              options = _arguments.length > 1 && _arguments[1] !== undefined ? _arguments[1] : {};
              _options$skipLoading = options.skipLoading, skipLoading = _options$skipLoading === void 0 ? false : _options$skipLoading;
              if (!skipLoading) {
                _this5.internalLoading = true;
              }
              _context3.prev = 4;
              toolConfig = _this5.currentToolConfig;
              if (toolConfig) {
                _context3.next = 8;
                break;
              }
              throw new Error("No tool configuration available");
            case 8:
              params = _this5.buildDataParams(additionalParams);
              _context3.next = 11;
              return _this5.ddContract.resolveData(toolConfig.resolverKey, params);
            case 11:
              result = _context3.sent;
              return _context3.abrupt("return", result);
            case 15:
              _context3.prev = 15;
              _context3.t0 = _context3["catch"](4);
              _this5.error = _context3.t0.message;
              console.error("Error loading data:", _context3.t0);
              throw _context3.t0;
            case 20:
              _context3.prev = 20;
              if (!skipLoading) {
                _this5.internalLoading = false;
              }
              return _context3.finish(20);
            case 23:
            case "end":
              return _context3.stop();
          }
        }, _callee3, null, [[4, 15, 20, 23]]);
      }))();
    },
    /**
     * Charge les données pour l'étape actuelle avec gestion du cache et protection contre les chargements multiples
     * @param {Object} params - Paramètres pour le chargement
     */
    loadCurrentStepData: function loadCurrentStepData() {
      var _arguments2 = arguments,
        _this6 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        var params, step, stepIndex, cachedData, result;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              params = _arguments2.length > 0 && _arguments2[0] !== undefined ? _arguments2[0] : {};
              if (!(_this6.isLoadingStep && _this6.currentLoadingPromise)) {
                _context4.next = 5;
                break;
              }
              _context4.next = 4;
              return _this6.currentLoadingPromise;
            case 4:
              return _context4.abrupt("return", _context4.sent);
            case 5:
              step = _this6.ddEngine.getCurrentStep();
              if (step) {
                _context4.next = 9;
                break;
              }
              if (_this6.currentData) _this6.finalResult = _this6.currentData; // Fin du chemin
              return _context4.abrupt("return");
            case 9:
              ;
              _this6.currentToolKey = step.toolKey;
              stepIndex = _this6.ddEngine.getCurrentIndex(); // Vérifier le cache en premier
              cachedData = _this6.getFromCache(stepIndex, step.toolKey, params);
              if (!cachedData) {
                _context4.next = 17;
                break;
              }
              _this6.currentData = cachedData;
              _this6.isDataFromCache = true;
              return _context4.abrupt("return");
            case 17:
              _this6.isLoadingStep = true;
              _this6.internalLoading = true;
              _this6.error = null;
              _this6.isDataFromCache = false;

              // Créer une promesse pour éviter les chargements multiples
              _this6.currentLoadingPromise = _this6._doLoadCurrentStepData(step, stepIndex, params);
              _context4.prev = 22;
              _context4.next = 25;
              return _this6.currentLoadingPromise;
            case 25:
              result = _context4.sent;
              return _context4.abrupt("return", result);
            case 27:
              _context4.prev = 27;
              _this6.isLoadingStep = false;
              _this6.currentLoadingPromise = null;
              _this6.internalLoading = false;
              return _context4.finish(27);
            case 32:
            case "end":
              return _context4.stop();
          }
        }, _callee4, null, [[22,, 27, 32]]);
      }))();
    },
    /**
     * Exécute le chargement réel des données (méthode interne)
     * @param {Object} step - Étape de navigation actuelle
     * @param {number} stepIndex - Index de l'étape
     * @param {Object} params - Paramètres de chargement
     * @returns {Promise} Résultat du chargement
     * @private
     */
    _doLoadCurrentStepData: function _doLoadCurrentStepData(step, stepIndex, params) {
      var _this7 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
        var result, nextParams, nextResult;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              _context5.prev = 0;
              _context5.next = 3;
              return _this7.loadData(params, {
                skipLoading: true
              });
            case 3:
              result = _context5.sent;
              if (!(result && result.skip === true)) {
                _context5.next = 11;
                break;
              }
              nextParams = result.nextParams || {};
              nextResult = _this7.ddEngine.next(_objectSpread({}, nextParams));
              if (!nextResult) {
                _context5.next = 10;
                break;
              }
              _context5.next = 10;
              return _this7.loadCurrentStepData({
                selection: result.nextParams
              });
            case 10:
              return _context5.abrupt("return");
            case 11:
              _this7.currentData = result;

              // Mettre en cache les données chargées
              _this7.setToCache(stepIndex, step.toolKey, result, params);
              return _context5.abrupt("return", result);
            case 16:
              _context5.prev = 16;
              _context5.t0 = _context5["catch"](0);
              console.error("Error in _doLoadCurrentStepData:", _context5.t0);
              _this7.error = _context5.t0.message || "Erreur lors du chargement";
              throw _context5.t0;
            case 21:
            case "end":
              return _context5.stop();
          }
        }, _callee5, null, [[0, 16]]);
      }))();
    },
    /* -------------------------------------------------------------------------- */
    /*           MÉTHODES DE GESTION DES FILTRES ET ACTIONS UTILISATEUR           */
    /* -------------------------------------------------------------------------- */
    /**
     * Gère les changements de filtres
     */
    handleFilter: function handleFilter() {
      this.clearCache(); // Vider le cache quand les filtres changent
      this.refreshCurrentData();
    },
    /**
     * Recharge les données actuelles avec les filtres en cours
     */
    refreshCurrentData: function refreshCurrentData() {
      var _this8 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              _context6.prev = 0;
              _context6.next = 3;
              return _this8.loadCurrentStepData();
            case 3:
              _context6.next = 8;
              break;
            case 5:
              _context6.prev = 5;
              _context6.t0 = _context6["catch"](0);
              console.error("Error refreshing current data:", _context6.t0);
            case 8:
            case "end":
              return _context6.stop();
          }
        }, _callee6, null, [[0, 5]]);
      }))();
    },
    /* -------------------------------------------------------------------------- */
    /*                     MÉTHODES DE NAVIGATION ET SÉLECTION                    */
    /* -------------------------------------------------------------------------- */
    /**
     * Gère la sélection d'une ligne dans le tableau
     * @param {Object} row - Ligne sélectionnée
     */
    onSelect: function onSelect(row) {
      var _this9 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              if (row) {
                _context7.next = 2;
                break;
              }
              return _context7.abrupt("return");
            case 2:
              _this9.internalLoading = true;
              _context7.prev = 3;
              if (!(_this9.currentToolKey === 'dossier_list')) {
                _context7.next = 7;
                break;
              }
              _this9.$router.push({
                name: "creation",
                params: {
                  templateId: row === null || row === void 0 ? void 0 : row.cred_pub_key
                }
              });
              return _context7.abrupt("return");
            case 7:
              // Navigation drill-down normale
              _this9.ddEngine.next({
                selection: row
              });
              _context7.next = 10;
              return _this9.loadCurrentStepData({
                selection: row
              });
            case 10:
              _context7.prev = 10;
              _this9.internalLoading = false;
              return _context7.finish(10);
            case 13:
            case "end":
              return _context7.stop();
          }
        }, _callee7, null, [[3,, 10, 13]]);
      }))();
    },
    /**
     * Retourne à l'étape précédente
     */
    goBack: function goBack() {
      var _this0 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
        var breadcrumb;
        return _regeneratorRuntime().wrap(function _callee8$(_context8) {
          while (1) switch (_context8.prev = _context8.next) {
            case 0:
              if (!_this0.ddEngine.previous()) {
                _context8.next = 7;
                break;
              }
              breadcrumb = _this0.ddEngine.getBreadcrumb();
              if (Array.isArray(breadcrumb)) {
                _context8.next = 5;
                break;
              }
              console.error("Breadcrumb is not an array:", breadcrumb);
              return _context8.abrupt("return");
            case 5:
              _context8.next = 7;
              return _this0.loadCurrentStepData();
            case 7:
            case "end":
              return _context8.stop();
          }
        }, _callee8);
      }))();
    },
    /**
     * Navigue vers une étape spécifique du breadcrumb
     * @param {number} stepIndex - Index de l'étape cible
     */
    navigateToBreadcrumbStep: function navigateToBreadcrumbStep(stepIndex) {
      var _this1 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
        return _regeneratorRuntime().wrap(function _callee9$(_context9) {
          while (1) switch (_context9.prev = _context9.next) {
            case 0:
              if (!(!_this1.ddEngine || stepIndex < 0)) {
                _context9.next = 2;
                break;
              }
              return _context9.abrupt("return");
            case 2:
              _this1.ddEngine.goToStep(stepIndex);
              _context9.next = 5;
              return _this1.loadCurrentStepData();
            case 5:
            case "end":
              return _context9.stop();
          }
        }, _callee9);
      }))();
    },
    /* -------------------------------------------------------------------------- */
    /*                        MÉTHODES D'EXPORT ET ACTIONS                        */
    /* -------------------------------------------------------------------------- */
    /**
     * Télécharge le tableau au format Excel
     */
    downloadTable: function downloadTable() {
      var _this10 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee0() {
        var _this10$currentToolCo, exportFilters, originalFilters, allData, data;
        return _regeneratorRuntime().wrap(function _callee0$(_context0) {
          while (1) switch (_context0.prev = _context0.next) {
            case 0:
              _context0.prev = 0;
              exportFilters = _objectSpread(_objectSpread({}, _this10.filters), {}, {
                top: 'tous'
              }); // Exporter toutes les données
              // Sauvegarder les filtres actuels
              originalFilters = structuredClone(_this10.filters); // Appliquer temporairement les filtres d'export
              _this10.filters = exportFilters;

              // Charger les données via le système de cache (mais avec de nouveaux filtres)
              _context0.next = 6;
              return _this10.loadData({
                filters: exportFilters
              }, {
                skipLoading: false
              });
            case 6:
              allData = _context0.sent;
              // Restaurer les filtres originaux
              _this10.filters = originalFilters;
              data = {
                "headers": [],
                "items": allData || _this10.currentData,
                "fileType": "excel",
                "title": "Rapport d'ex\xE9cution par acteur - ".concat(((_this10$currentToolCo = _this10.currentToolConfig) === null || _this10$currentToolCo === void 0 ? void 0 : _this10$currentToolCo.label) || 'Données')
              };
              EventBus.$emit("download-table-data", data);
              _context0.next = 16;
              break;
            case 12:
              _context0.prev = 12;
              _context0.t0 = _context0["catch"](0);
              console.error("Erreur lors de l'export:", _context0.t0);
              _this10.error = "Erreur lors de l'export des données";
            case 16:
            case "end":
              return _context0.stop();
          }
        }, _callee0, null, [[0, 12]]);
      }))();
    },
    /**
     * Remet les filtres à leurs valeurs par défaut
     */
    resetFilter: function resetFilter() {
      this.filters = structuredClone(defaultFilters);
      this.initializeEngine();
    },
    /**
     * Met à jour les données du tableau (callback pour OvaTable)
     * @param {Object} params - Paramètres de mise à jour
     */
    updateData: function updateData(params) {
      console.log("Update data with params:", params);
    },
    /**
     * Émet l'état de chargement vers le composant parent
     * @param {boolean} value - État de chargement
     */
    updateLoading: function updateLoading(value) {
      this.$emit("loading", value);
    },
    /* -------------------------------------------------------------------------- */
    /*                    MÉTHODES DE DEBUGGING (DÉVELOPPEMENT)                   */
    /* -------------------------------------------------------------------------- */
    /**
     * Force le rechargement des données sans utiliser le cache
     * Utile pour le debugging et les tests
     */
    forceReloadWithoutCache: function forceReloadWithoutCache() {
      var _this11 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee1() {
        var result, stepIndex, step;
        return _regeneratorRuntime().wrap(function _callee1$(_context1) {
          while (1) switch (_context1.prev = _context1.next) {
            case 0:
              _this11.isDataFromCache = false;
              _context1.prev = 1;
              _context1.next = 4;
              return _this11.loadData({}, {
                skipLoading: false
              });
            case 4:
              result = _context1.sent;
              _this11.currentData = result;

              // Mettre à jour le cache avec les nouvelles données
              stepIndex = _this11.ddEngine.getCurrentIndex();
              step = _this11.ddEngine.getCurrentStep();
              if (step) {
                _this11.setToCache(stepIndex, step.toolKey, result);
              }
              _context1.next = 14;
              break;
            case 11:
              _context1.prev = 11;
              _context1.t0 = _context1["catch"](1);
              console.error("Error in force reload:", _context1.t0);
            case 14:
            case "end":
              return _context1.stop();
          }
        }, _callee1, null, [[1, 11]]);
      }))();
    },
    /**
     * Affiche les détails de génération d'une clé de cache (debugging)
     * @param {number} stepIndex - Index de l'étape
     * @param {string} toolKey - Clé de l'outil
     * @param {Object} params - Paramètres supplémentaires
     * @returns {string} Clé générée
     */
    debugCacheKey: function debugCacheKey(stepIndex, toolKey) {
      var _this$user2;
      var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      console.log('🔍 DEBUG Cache Key Generation:');
      console.log('  stepIndex:', stepIndex);
      console.log('  toolKey:', toolKey);
      console.log('  params:', params);
      console.log('  this.filters:', this.filters);
      console.log('  this.user?.id:', (_this$user2 = this.user) === null || _this$user2 === void 0 ? void 0 : _this$user2.id);
      var key = this.generateCacheKey(stepIndex, toolKey, params);
      console.log('  Generated key:', key);
      return key;
    }
  },
  watch: {
    // Réinitialiser le moteur quand l'utilisateur change
    user: {
      handler: function handler() {
        this.initializeEngine();
      },
      immediate: true
    },
    filiale: {
      handler: function handler(newVal, oldVal) {
        if (newVal !== oldVal) {
          this.initializeEngine();
        }
      },
      immediate: true
    }
  },
  mounted: function mounted() {
    var _this12 = this;
    // Démarrer le nettoyage périodique du cache (toutes les minutes)
    this.cacheCleanupInterval = setInterval(function () {
      _this12.cleanupCache();
    }, 60000);

    // Exposer l'API de cache globalement pour le debugging
    if (window) {
      window.drillDownCache = {
        stats: function stats() {
          return _this12.getCacheStats();
        },
        log: function log() {
          return _this12.logCacheStats();
        },
        clear: function clear() {
          return _this12.clearCache();
        },
        setTTL: function setTTL(ttl) {
          return _this12.setCacheTTL(ttl);
        },
        cleanup: function cleanup() {
          return _this12.cleanupCache();
        },
        forceReload: function forceReload() {
          return _this12.forceReloadWithoutCache();
        },
        showKeys: function showKeys() {
          return Array.from(_this12.dataCache.keys());
        },
        debugKey: function debugKey(stepIndex, toolKey, params) {
          return _this12.debugCacheKey(stepIndex, toolKey, params);
        },
        // Accès direct au composant pour debugging avancé
        component: this
      };
    }
  },
  beforeUnmount: function beforeUnmount() {
    // Nettoyer les ressources avant la destruction du composant
    if (this.cacheCleanupInterval) {
      clearInterval(this.cacheCleanupInterval);
    }
    this.clearCache();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/RCDashboard/Statistiques/Recouvrement/RecapByTask.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/RCDashboard/Statistiques/Recouvrement/RecapByTask.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Input_SelectFiliale_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Input/SelectFiliale.vue */ "./resources/js/components/RCDashboard/Input/SelectFiliale.vue");
/* harmony import */ var _shared_ZeroCross_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/ZeroCross.vue */ "./resources/js/components/shared/ZeroCross.vue");
/* harmony import */ var _services_recovery_recovery_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/recovery/recovery.js */ "./resources/js/services/recovery/recovery.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return r; }; var t, r = {}, e = Object.prototype, n = e.hasOwnProperty, o = "function" == typeof Symbol ? Symbol : {}, i = o.iterator || "@@iterator", a = o.asyncIterator || "@@asyncIterator", u = o.toStringTag || "@@toStringTag"; function c(t, r, e, n) { Object.defineProperty(t, r, { value: e, enumerable: !n, configurable: !n, writable: !n }); } try { c({}, ""); } catch (t) { c = function c(t, r, e) { return t[r] = e; }; } function h(r, e, n, o) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype); return c(a, "_invoke", function (r, e, n) { var o = 1; return function (i, a) { if (3 === o) throw Error("Generator is already running"); if (4 === o) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var u = n.delegate; if (u) { var c = d(u, n); if (c) { if (c === f) continue; return c; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (1 === o) throw o = 4, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = 3; var h = s(r, e, n); if ("normal" === h.type) { if (o = n.done ? 4 : 2, h.arg === f) continue; return { value: h.arg, done: n.done }; } "throw" === h.type && (o = 4, n.method = "throw", n.arg = h.arg); } }; }(r, n, new Context(o || [])), !0), a; } function s(t, r, e) { try { return { type: "normal", arg: t.call(r, e) }; } catch (t) { return { type: "throw", arg: t }; } } r.wrap = h; var f = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var l = {}; c(l, i, function () { return this; }); var p = Object.getPrototypeOf, y = p && p(p(x([]))); y && y !== e && n.call(y, i) && (l = y); var v = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(l); function g(t) { ["next", "throw", "return"].forEach(function (r) { c(t, r, function (t) { return this._invoke(r, t); }); }); } function AsyncIterator(t, r) { function e(o, i, a, u) { var c = s(t[o], t, i); if ("throw" !== c.type) { var h = c.arg, f = h.value; return f && "object" == _typeof(f) && n.call(f, "__await") ? r.resolve(f.__await).then(function (t) { e("next", t, a, u); }, function (t) { e("throw", t, a, u); }) : r.resolve(f).then(function (t) { h.value = t, a(h); }, function (t) { return e("throw", t, a, u); }); } u(c.arg); } var o; c(this, "_invoke", function (t, n) { function i() { return new r(function (r, o) { e(t, n, r, o); }); } return o = o ? o.then(i, i) : i(); }, !0); } function d(r, e) { var n = e.method, o = r.i[n]; if (o === t) return e.delegate = null, "throw" === n && r.i["return"] && (e.method = "return", e.arg = t, d(r, e), "throw" === e.method) || "return" !== n && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + n + "' method")), f; var i = s(o, r.i, e.arg); if ("throw" === i.type) return e.method = "throw", e.arg = i.arg, e.delegate = null, f; var a = i.arg; return a ? a.done ? (e[r.r] = a.value, e.next = r.n, "return" !== e.method && (e.method = "next", e.arg = t), e.delegate = null, f) : a : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f); } function w(t) { this.tryEntries.push(t); } function m(r) { var e = r[4] || {}; e.type = "normal", e.arg = t, r[4] = e; } function Context(t) { this.tryEntries = [[-1]], t.forEach(w, this), this.reset(!0); } function x(r) { if (null != r) { var e = r[i]; if (e) return e.call(r); if ("function" == typeof r.next) return r; if (!isNaN(r.length)) { var o = -1, a = function e() { for (; ++o < r.length;) if (n.call(r, o)) return e.value = r[o], e.done = !1, e; return e.value = t, e.done = !0, e; }; return a.next = a; } } throw new TypeError(_typeof(r) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, c(v, "constructor", GeneratorFunctionPrototype), c(GeneratorFunctionPrototype, "constructor", GeneratorFunction), c(GeneratorFunctionPrototype, u, GeneratorFunction.displayName = "GeneratorFunction"), r.isGeneratorFunction = function (t) { var r = "function" == typeof t && t.constructor; return !!r && (r === GeneratorFunction || "GeneratorFunction" === (r.displayName || r.name)); }, r.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, c(t, u, "GeneratorFunction")), t.prototype = Object.create(v), t; }, r.awrap = function (t) { return { __await: t }; }, g(AsyncIterator.prototype), c(AsyncIterator.prototype, a, function () { return this; }), r.AsyncIterator = AsyncIterator, r.async = function (t, e, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(h(t, e, n, o), i); return r.isGeneratorFunction(e) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, g(v), c(v, u, "Generator"), c(v, i, function () { return this; }), c(v, "toString", function () { return "[object Generator]"; }), r.keys = function (t) { var r = Object(t), e = []; for (var n in r) e.unshift(n); return function t() { for (; e.length;) if ((n = e.pop()) in r) return t.value = n, t.done = !1, t; return t.done = !0, t; }; }, r.values = x, Context.prototype = { constructor: Context, reset: function reset(r) { if (this.prev = this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(m), !r) for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0][4]; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(r) { if (this.done) throw r; var e = this; function n(t) { a.type = "throw", a.arg = r, e.next = t; } for (var o = e.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i[4], u = this.prev, c = i[1], h = i[2]; if (-1 === i[0]) return n("end"), !1; if (!c && !h) throw Error("try statement without catch or finally"); if (null != i[0] && i[0] <= u) { if (u < c) return this.method = "next", this.arg = t, n(c), !0; if (u < h) return n(h), !1; } } }, abrupt: function abrupt(t, r) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var n = this.tryEntries[e]; if (n[0] > -1 && n[0] <= this.prev && this.prev < n[2]) { var o = n; break; } } o && ("break" === t || "continue" === t) && o[0] <= r && r <= o[2] && (o = null); var i = o ? o[4] : {}; return i.type = t, i.arg = r, o ? (this.method = "next", this.next = o[2], f) : this.complete(i); }, complete: function complete(t, r) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), f; }, finish: function finish(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[2] === t) return this.complete(e[4], e[3]), m(e), f; } }, "catch": function _catch(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[0] === t) { var n = e[4]; if ("throw" === n.type) { var o = n.arg; m(e); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(r, e, n) { return this.delegate = { i: x(r), r: e, n: n }, "next" === this.method && (this.arg = t), f; } }, r; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "RecapByTask",
  components: {
    SelectFiliale: _Input_SelectFiliale_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    ZeroCross: _shared_ZeroCross_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      error: null,
      loading: false,
      items: [],
      total: null,
      search: "",
      sortKey: "",
      aggregateur: "dureeimp",
      top: 20,
      tops: [{
        label: 'Top 10',
        value: 10
      }, {
        label: 'Top 20',
        value: 20
      }, {
        label: 'Top 30',
        value: 30
      }, {
        label: 'Top 50',
        value: 50
      }, {
        label: 'Global',
        value: 'tous'
      }],
      filtre: {},
      ascending: false,
      filiale: null,
      agence: null,
      year: new Date().getFullYear(),
      month: null
    };
  },
  computed: {
    keyInFinalAggregation: function keyInFinalAggregation() {
      return ['client', 'dossier'].includes(this.aggregateur);
    },
    availableYears: function availableYears() {
      return (0,_services_recovery_recovery_js__WEBPACK_IMPORTED_MODULE_2__.getRecoveryAvailableYears)();
    },
    availableMonths: function availableMonths() {
      return (0,_services_recovery_recovery_js__WEBPACK_IMPORTED_MODULE_2__.getAvailableMonths)(this.year);
    }
  },
  mounted: function mounted() {
    var _this = this;
    this.init();
    EventBus.$on('filiale-and-agence-change', /*#__PURE__*/function () {
      var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(newVal) {
        var _newVal$agence, _this$$route$query;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _this.filiale = newVal === null || newVal === void 0 ? void 0 : newVal.filiale;
              _this.agence = newVal === null || newVal === void 0 || (_newVal$agence = newVal.agence) === null || _newVal$agence === void 0 ? void 0 : _newVal$agence.code;
              if (!(((_this$$route$query = _this.$route.query) === null || _this$$route$query === void 0 ? void 0 : _this$$route$query["super-tab"]) === "rapport-execution-taches")) {
                _context.next = 5;
                break;
              }
              _context.next = 5;
              return _this.getData(true);
            case 5:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
  },
  methods: {
    init: function init() {
      var _this2 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var _this2$$store$getters, _this2$$store$getters2;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _this2.error = null;
              if (!_this2.__filiale__) {
                setTimeout(function () {
                  _this2.init();
                }, 500);
              } else {
                _this2.filiale = _this2.__filiale__;
                _this2.agence = (_this2$$store$getters = (_this2$$store$getters2 = _this2.$store.getters.agence_obj) === null || _this2$$store$getters2 === void 0 ? void 0 : _this2$$store$getters2.code) !== null && _this2$$store$getters !== void 0 ? _this2$$store$getters : null;
                Promise.all([_this2.getData()])["finally"](function () {
                  _this2.loading = false;
                });
              }
            case 2:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }))();
    },
    toastError: function toastError(messageOrError) {
      if (_typeof(messageOrError) === "object") {
        var _messageOrError, _messageOrError2;
        if ((_messageOrError = messageOrError) !== null && _messageOrError !== void 0 && (_messageOrError = _messageOrError.response) !== null && _messageOrError !== void 0 && (_messageOrError = _messageOrError.data) !== null && _messageOrError !== void 0 && _messageOrError.message) {
          messageOrError = messageOrError.response.data.message;
        } else if ((_messageOrError2 = messageOrError) !== null && _messageOrError2 !== void 0 && _messageOrError2.message) {
          messageOrError = messageOrError.message;
        }
      }
      this.$toasted.error(messageOrError || "Une erreur est survenue");
    },
    showError: function showError(messageOrError) {
      if (_typeof(messageOrError) === "object") {
        var _messageOrError3, _messageOrError4;
        if ((_messageOrError3 = messageOrError) !== null && _messageOrError3 !== void 0 && (_messageOrError3 = _messageOrError3.response) !== null && _messageOrError3 !== void 0 && (_messageOrError3 = _messageOrError3.data) !== null && _messageOrError3 !== void 0 && _messageOrError3.message) {
          messageOrError = messageOrError.response.data.message;
        } else if ((_messageOrError4 = messageOrError) !== null && _messageOrError4 !== void 0 && _messageOrError4.message) {
          messageOrError = messageOrError.message;
        }
      }
      this.error = messageOrError || "Une erreur est survenue";
    },
    getData: function getData() {
      var _arguments = arguments,
        _this3 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var stopLoading, _this3$agence, _yield$_this3$$axios$, res;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              stopLoading = _arguments.length > 0 && _arguments[0] !== undefined ? _arguments[0] : false;
              _this3.error = null;
              _this3.loading = true;
              _context3.prev = 3;
              _context3.next = 6;
              return _this3.$axios.post(_this3.reportex_link(_this3.filiale) + 'creditbuilder/api/v1/recouvrement/comptage-taches-executees/', {
                filiale: _this3.filiale,
                agence: (_this3$agence = _this3.agence) !== null && _this3$agence !== void 0 ? _this3$agence : '',
                top: _this3.top,
                aggregateur: _this3.aggregateur,
                month: _this3.month,
                year: _this3.year,
                // duree: this.duree,
                filtre: _this3.filtre,
                all_teams: true,
                user: _this3.__user__,
                use_type: "action"
              });
            case 6:
              _yield$_this3$$axios$ = _context3.sent;
              res = _yield$_this3$$axios$.data;
              _this3.items = res.data;
              _this3.total = res.total;
              _context3.next = 16;
              break;
            case 12:
              _context3.prev = 12;
              _context3.t0 = _context3["catch"](3);
              _this3.toastError(_context3.t0);
              _this3.showError(_context3.t0);
            case 16:
              _context3.prev = 16;
              _this3.loading = !stopLoading;
              return _context3.finish(16);
            case 19:
            case "end":
              return _context3.stop();
          }
        }, _callee3, null, [[3, 12, 16, 19]]);
      }))();
    },
    // updateAgence(agence) {
    //   this.agence = agence;
    //   this.getData(true);
    // },
    toggler: function toggler() {
      this.$emit("toggle-view");
    },
    sortBy: function sortBy(key) {
      console.log("Sort by", key);
    },
    handleYearChange: function handleYearChange() {
      var _this4 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _this4.month = null;
              _context4.next = 3;
              return _this4.getData(true);
            case 3:
            case "end":
              return _context4.stop();
          }
        }, _callee4);
      }))();
    },
    resetFilter: function resetFilter() {
      var _this5 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
        var _this5$$store$getters, _this5$$store$getters2;
        var now;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              now = new Date();
              _this5.agence = (_this5$$store$getters = (_this5$$store$getters2 = _this5.$store.getters.agence_obj) === null || _this5$$store$getters2 === void 0 ? void 0 : _this5$$store$getters2.code) !== null && _this5$$store$getters !== void 0 ? _this5$$store$getters : null;
              _this5.top = 20;
              _this5.aggregateur = "dureeimp";
              _this5.month = null;
              _this5.year = now.getFullYear();
              // this.duree: "";
              _this5.filtre = {};
              _context5.next = 9;
              return _this5.getData(true);
            case 9:
            case "end":
              return _context5.stop();
          }
        }, _callee5);
      }))();
    },
    downloadTable: function downloadTable() {
      var _this6 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
        var data;
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              _context6.next = 2;
              return _this6.getData(true);
            case 2:
              data = {};
              data = {
                "headers": [],
                "items": _this6.items,
                "fileType": "excel",
                "title": "Rapport par actions"
              };
              EventBus.$emit("download-table-data", data);
            case 5:
            case "end":
              return _context6.stop();
          }
        }, _callee6);
      }))();
    }
  },
  watch: {
    __filiale__: function __filiale__(val) {
      if (val != this.filiale) {
        var _this$$store$getters$, _this$$store$getters$2;
        this.filiale = val;
        this.agence = (_this$$store$getters$ = (_this$$store$getters$2 = this.$store.getters.agence_obj) === null || _this$$store$getters$2 === void 0 ? void 0 : _this$$store$getters$2.code) !== null && _this$$store$getters$ !== void 0 ? _this$$store$getters$ : null;
        this.getData(true);
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/RCDashboard/Statistiques/Recouvrement/RecapTaskExecution.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/RCDashboard/Statistiques/Recouvrement/RecapTaskExecution.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_recovery_recovery_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../services/recovery/recovery.js */ "./resources/js/services/recovery/recovery.js");
/* harmony import */ var _ErrorRetry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ErrorRetry */ "./resources/js/components/RCDashboard/Statistiques/Recouvrement/ErrorRetry.vue");
/* harmony import */ var _shared_ZeroCross_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/ZeroCross.vue */ "./resources/js/components/shared/ZeroCross.vue");
/* harmony import */ var _NextRecapTaskExecution_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NextRecapTaskExecution.vue */ "./resources/js/components/RCDashboard/Statistiques/Recouvrement/NextRecapTaskExecution.vue");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return r; }; var t, r = {}, e = Object.prototype, n = e.hasOwnProperty, o = "function" == typeof Symbol ? Symbol : {}, i = o.iterator || "@@iterator", a = o.asyncIterator || "@@asyncIterator", u = o.toStringTag || "@@toStringTag"; function c(t, r, e, n) { Object.defineProperty(t, r, { value: e, enumerable: !n, configurable: !n, writable: !n }); } try { c({}, ""); } catch (t) { c = function c(t, r, e) { return t[r] = e; }; } function h(r, e, n, o) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype); return c(a, "_invoke", function (r, e, n) { var o = 1; return function (i, a) { if (3 === o) throw Error("Generator is already running"); if (4 === o) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var u = n.delegate; if (u) { var c = d(u, n); if (c) { if (c === f) continue; return c; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (1 === o) throw o = 4, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = 3; var h = s(r, e, n); if ("normal" === h.type) { if (o = n.done ? 4 : 2, h.arg === f) continue; return { value: h.arg, done: n.done }; } "throw" === h.type && (o = 4, n.method = "throw", n.arg = h.arg); } }; }(r, n, new Context(o || [])), !0), a; } function s(t, r, e) { try { return { type: "normal", arg: t.call(r, e) }; } catch (t) { return { type: "throw", arg: t }; } } r.wrap = h; var f = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var l = {}; c(l, i, function () { return this; }); var p = Object.getPrototypeOf, y = p && p(p(x([]))); y && y !== e && n.call(y, i) && (l = y); var v = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(l); function g(t) { ["next", "throw", "return"].forEach(function (r) { c(t, r, function (t) { return this._invoke(r, t); }); }); } function AsyncIterator(t, r) { function e(o, i, a, u) { var c = s(t[o], t, i); if ("throw" !== c.type) { var h = c.arg, f = h.value; return f && "object" == _typeof(f) && n.call(f, "__await") ? r.resolve(f.__await).then(function (t) { e("next", t, a, u); }, function (t) { e("throw", t, a, u); }) : r.resolve(f).then(function (t) { h.value = t, a(h); }, function (t) { return e("throw", t, a, u); }); } u(c.arg); } var o; c(this, "_invoke", function (t, n) { function i() { return new r(function (r, o) { e(t, n, r, o); }); } return o = o ? o.then(i, i) : i(); }, !0); } function d(r, e) { var n = e.method, o = r.i[n]; if (o === t) return e.delegate = null, "throw" === n && r.i["return"] && (e.method = "return", e.arg = t, d(r, e), "throw" === e.method) || "return" !== n && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + n + "' method")), f; var i = s(o, r.i, e.arg); if ("throw" === i.type) return e.method = "throw", e.arg = i.arg, e.delegate = null, f; var a = i.arg; return a ? a.done ? (e[r.r] = a.value, e.next = r.n, "return" !== e.method && (e.method = "next", e.arg = t), e.delegate = null, f) : a : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f); } function w(t) { this.tryEntries.push(t); } function m(r) { var e = r[4] || {}; e.type = "normal", e.arg = t, r[4] = e; } function Context(t) { this.tryEntries = [[-1]], t.forEach(w, this), this.reset(!0); } function x(r) { if (null != r) { var e = r[i]; if (e) return e.call(r); if ("function" == typeof r.next) return r; if (!isNaN(r.length)) { var o = -1, a = function e() { for (; ++o < r.length;) if (n.call(r, o)) return e.value = r[o], e.done = !1, e; return e.value = t, e.done = !0, e; }; return a.next = a; } } throw new TypeError(_typeof(r) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, c(v, "constructor", GeneratorFunctionPrototype), c(GeneratorFunctionPrototype, "constructor", GeneratorFunction), c(GeneratorFunctionPrototype, u, GeneratorFunction.displayName = "GeneratorFunction"), r.isGeneratorFunction = function (t) { var r = "function" == typeof t && t.constructor; return !!r && (r === GeneratorFunction || "GeneratorFunction" === (r.displayName || r.name)); }, r.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, c(t, u, "GeneratorFunction")), t.prototype = Object.create(v), t; }, r.awrap = function (t) { return { __await: t }; }, g(AsyncIterator.prototype), c(AsyncIterator.prototype, a, function () { return this; }), r.AsyncIterator = AsyncIterator, r.async = function (t, e, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(h(t, e, n, o), i); return r.isGeneratorFunction(e) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, g(v), c(v, u, "Generator"), c(v, i, function () { return this; }), c(v, "toString", function () { return "[object Generator]"; }), r.keys = function (t) { var r = Object(t), e = []; for (var n in r) e.unshift(n); return function t() { for (; e.length;) if ((n = e.pop()) in r) return t.value = n, t.done = !1, t; return t.done = !0, t; }; }, r.values = x, Context.prototype = { constructor: Context, reset: function reset(r) { if (this.prev = this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(m), !r) for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0][4]; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(r) { if (this.done) throw r; var e = this; function n(t) { a.type = "throw", a.arg = r, e.next = t; } for (var o = e.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i[4], u = this.prev, c = i[1], h = i[2]; if (-1 === i[0]) return n("end"), !1; if (!c && !h) throw Error("try statement without catch or finally"); if (null != i[0] && i[0] <= u) { if (u < c) return this.method = "next", this.arg = t, n(c), !0; if (u < h) return n(h), !1; } } }, abrupt: function abrupt(t, r) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var n = this.tryEntries[e]; if (n[0] > -1 && n[0] <= this.prev && this.prev < n[2]) { var o = n; break; } } o && ("break" === t || "continue" === t) && o[0] <= r && r <= o[2] && (o = null); var i = o ? o[4] : {}; return i.type = t, i.arg = r, o ? (this.method = "next", this.next = o[2], f) : this.complete(i); }, complete: function complete(t, r) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), f; }, finish: function finish(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[2] === t) return this.complete(e[4], e[3]), m(e), f; } }, "catch": function _catch(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[0] === t) { var n = e[4]; if ("throw" === n.type) { var o = n.arg; m(e); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(r, e, n) { return this.delegate = { i: x(r), r: e, n: n }, "next" === this.method && (this.arg = t), f; } }, r; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }





// Custom component for formatting numbers with ZeroCross
var CustomZeroCross = {
  name: 'CustomZeroCross',
  components: {
    ZeroCross: _shared_ZeroCross_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  props: {
    value: {
      type: Number,
      required: true
    },
    row: {
      type: Object,
      "default": function _default() {
        return {};
      }
    },
    column: {
      type: Object,
      "default": function _default() {
        return {};
      }
    }
  },
  computed: {
    formattedValue: function formattedValue() {
      if (this.value == null || this.value === undefined) return 0;
      return new Intl.NumberFormat("fr-FR").format(String(this.value).replace(/\s/g, "").replace(",", "."));
    }
  },
  template: "\n    <div class=\"custom-zero-cross\">\n      <ZeroCross \n        v-if=\"!value\" \n        :value=\"formattedValue\" \n        style=\"font-family: monospace !important; font-size: 1.1em; font-weight: normal;\" \n      />\n      <span v-else style=\"font-family: monospace; font-weight: normal;\">\n        {{ formattedValue }}\n      </span>\n    </div>\n  "
};
var HIERARCHY = ['dex', 'agence', 'caf', 'client', 'dossier'];
var LEVEL_TOOLS = {
  dex: [function (_, ctx) {
    return ctx.filtre = null;
  }],
  agence: [function (row, ctx) {
    return ctx.agence = row === null || row === void 0 ? void 0 : row.code_agence;
  }],
  caf: [function (row, ctx) {
    return ctx.filtre = {
      id_caf: row === null || row === void 0 ? void 0 : row.id_caf
    };
  }],
  client: [function (row, ctx) {
    return ctx.filtre = {
      matricule_client: row === null || row === void 0 ? void 0 : row.matricule_client
    };
  }],
  dossier: [(/*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(row, ctx) {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return ctx.$router.push({
              name: "creation",
              params: {
                templateId: row === null || row === void 0 ? void 0 : row.cred_pub_key
              }
            });
          case 2:
            EventBus.$emit("view-only");
          case 3:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }())]
};
var AGG_LABEL = {
  'dossier': 'Dossier',
  'client': 'Client',
  'caf': 'CAF',
  'agence': 'Agence',
  'dex': 'DEX'
};
var getNextLevel = function getNextLevel(currentLevel) {
  var currentIndex = HIERARCHY.indexOf(currentLevel);
  return currentIndex !== -1 && currentIndex < HIERARCHY.length - 1 ? HIERARCHY[currentIndex + 1] : null;
};
var getLevelTool = function getLevelTool(level) {
  return LEVEL_TOOLS[level] || [];
};
function callLevelTool(_x3, _x4) {
  return _callLevelTool.apply(this, arguments);
}
function _callLevelTool() {
  _callLevelTool = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee10(level, row) {
    var _this0 = this;
    var tools;
    return _regeneratorRuntime().wrap(function _callee10$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          tools = getLevelTool(level);
          _context10.next = 3;
          return Promise.all(tools.map(function (tool) {
            return tool(row, _this0);
          }));
        case 3:
        case "end":
          return _context10.stop();
      }
    }, _callee10);
  }));
  return _callLevelTool.apply(this, arguments);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "RecapTaskExecution",
  components: {
    ErrorRetry: _ErrorRetry__WEBPACK_IMPORTED_MODULE_1__["default"],
    ZeroCross: _shared_ZeroCross_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    CustomZeroCross: CustomZeroCross,
    NextRecapTaskExecution: _NextRecapTaskExecution_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data: function data() {
    return {
      error: null,
      loading: false,
      items: [],
      aggregateur: null,
      useType: 'client',
      target: 'client',
      agence: null,
      filiale: null,
      filtre: {},
      year: new Date().getFullYear(),
      month: null,
      top: 20,
      tops: [{
        label: 'Top 10',
        value: 10
      }, {
        label: 'Top 20',
        value: 20
      }, {
        label: 'Top 30',
        value: 30
      }, {
        label: 'Top 50',
        value: 50
      }, {
        label: 'Global',
        value: 'tous'
      }],
      aggregators: [],
      duree: null,
      history: [],
      showRecoveryTeamReport: false
    };
  },
  computed: {
    title: function title() {
      var dexLevelIndex = HIERARCHY.indexOf('dex');
      var currentLevelIndex = HIERARCHY.indexOf(this.aggregateur);
      if (currentLevelIndex >= dexLevelIndex) {
        return "Rapport d'ex\xE9cution par acteur <span style=\"text-transform: uppercase;\">(".concat(AGG_LABEL[this.aggregateur], ")</span>");
      }
      return "Rapport d'ex\xE9cution contentieux <span style=\"text-transform: uppercase;\">(".concat(AGG_LABEL[this.aggregateur], ")</span>");
    },
    keyInFinalAggregation: function keyInFinalAggregation() {
      return ['client', 'dossier'].includes(this.aggregateur);
    },
    availableYears: function availableYears() {
      return (0,_services_recovery_recovery_js__WEBPACK_IMPORTED_MODULE_0__.getRecoveryAvailableYears)();
    },
    availableMonths: function availableMonths() {
      return (0,_services_recovery_recovery_js__WEBPACK_IMPORTED_MODULE_0__.getAvailableMonths)(this.year);
    },
    customZeroCrossComponent: function customZeroCrossComponent() {
      return CustomZeroCross;
    },
    shouldShowMatricule: function shouldShowMatricule() {
      return this.keyInFinalAggregation;
    },
    shouldShowCAF: function shouldShowCAF() {
      return this.keyInFinalAggregation;
    },
    shouldShowAgence: function shouldShowAgence() {
      return this.aggregateur != 'dex';
    },
    cAggregators: function cAggregators() {
      var _this$filtre;
      var aggregators = _toConsumableArray(this.aggregators);
      if (!((_this$filtre = this.filtre) !== null && _this$filtre !== void 0 && _this$filtre.matricule_client)) {
        aggregators = aggregators.filter(function (a) {
          return a.value != 'dossier';
        });
      }
      if (this.aggregateur == 'dossier') {
        // disable
        aggregators = aggregators.filter(function (a) {
          return a.value != 'client' && a.value != 'caf' && a.value != 'agence' && a.value != 'dex';
        });
      }
      return aggregators;
    },
    // Process items for OvaTable with row index
    filteredItems: function filteredItems() {
      if (!this.items || !Array.isArray(this.items)) return [];
      return this.items.map(function (item, index) {
        return _objectSpread(_objectSpread({}, item), {}, {
          // Ensure all required fields exist with default values
          appel_execute_succes: item.appel_execute_succes || 0,
          appel_execute_echec: item.appel_execute_echec || 0,
          appel_execute_total: item.appel_execute_total || 0,
          visite_execute_succes: item.visite_execute_succes || 0,
          visite_execute_echec: item.visite_execute_echec || 0,
          visite_execute_total: item.visite_execute_total || 0,
          decharge_execute_succes: item.decharge_execute_succes || 0,
          decharge_execute_echec: item.decharge_execute_echec || 0,
          decharge_execute_total: item.decharge_execute_total || 0
        });
      });
    },
    userTeam: function userTeam() {
      this.__user__;
      return this.getUserTeam();
    }
  },
  mounted: function mounted() {
    var _this = this;
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return _this.getAggregators();
          case 2:
            _context3.next = 4;
            return _this.determineAggregator();
          case 4:
            _this.init();
            EventBus.$on('filiale-and-agence-change', /*#__PURE__*/function () {
              var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(newVal) {
                var _newVal$agence, _this$$route$query;
                return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                  while (1) switch (_context2.prev = _context2.next) {
                    case 0:
                      _this.filiale = newVal === null || newVal === void 0 ? void 0 : newVal.filiale;
                      _this.agence = newVal === null || newVal === void 0 || (_newVal$agence = newVal.agence) === null || _newVal$agence === void 0 ? void 0 : _newVal$agence.code;
                      if (!(((_this$$route$query = _this.$route.query) === null || _this$$route$query === void 0 ? void 0 : _this$$route$query["super-tab"]) === "rapport-execution-taches")) {
                        _context2.next = 5;
                        break;
                      }
                      _context2.next = 5;
                      return _this.getData(true);
                    case 5:
                    case "end":
                      return _context2.stop();
                  }
                }, _callee2);
              }));
              return function (_x5) {
                return _ref2.apply(this, arguments);
              };
            }());
          case 6:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    }))();
  },
  methods: {
    init: function init() {
      var _this2 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        var _this2$$store$getters, _this2$$store$getters2;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _this2.error = null;
              if (!_this2.__filiale__ || !_this2.__user__) {
                setTimeout(function () {
                  _this2.init();
                }, 500);
              } else {
                _this2.filiale = _this2.__filiale__;
                _this2.agence = (_this2$$store$getters = (_this2$$store$getters2 = _this2.$store.getters.agence_obj) === null || _this2$$store$getters2 === void 0 ? void 0 : _this2$$store$getters2.code) !== null && _this2$$store$getters !== void 0 ? _this2$$store$getters : null;
                Promise.all([_this2.getData()])["finally"](function () {
                  _this2.loading = false;
                });
              }
            case 2:
            case "end":
              return _context4.stop();
          }
        }, _callee4);
      }))();
    },
    toastError: function toastError(messageOrError) {
      if (_typeof(messageOrError) === "object") {
        var _messageOrError, _messageOrError2;
        if ((_messageOrError = messageOrError) !== null && _messageOrError !== void 0 && (_messageOrError = _messageOrError.response) !== null && _messageOrError !== void 0 && (_messageOrError = _messageOrError.data) !== null && _messageOrError !== void 0 && _messageOrError.message) {
          messageOrError = messageOrError.response.data.message;
        } else if ((_messageOrError2 = messageOrError) !== null && _messageOrError2 !== void 0 && _messageOrError2.message) {
          messageOrError = messageOrError.message;
        }
      }
      this.$toasted.error(messageOrError || "Une erreur est survenue");
    },
    showError: function showError(messageOrError) {
      if (_typeof(messageOrError) === "object") {
        var _messageOrError3, _messageOrError4;
        if ((_messageOrError3 = messageOrError) !== null && _messageOrError3 !== void 0 && (_messageOrError3 = _messageOrError3.response) !== null && _messageOrError3 !== void 0 && (_messageOrError3 = _messageOrError3.data) !== null && _messageOrError3 !== void 0 && _messageOrError3.message) {
          messageOrError = messageOrError.response.data.message;
        } else if ((_messageOrError4 = messageOrError) !== null && _messageOrError4 !== void 0 && _messageOrError4.message) {
          messageOrError = messageOrError.message;
        }
      }
      this.error = messageOrError || "Une erreur est survenue";
    },
    getData: function getData() {
      var _arguments = arguments,
        _this3 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
        var stopLoading, _res$data, res;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              stopLoading = _arguments.length > 0 && _arguments[0] !== undefined ? _arguments[0] : false;
              _this3.error = null;
              _this3.loading = true;
              if (!(_this3.aggregateur === 'extended')) {
                _context5.next = 9;
                break;
              }
              _this3.showRecoveryTeamReport = true;
              _this3.loading = !stopLoading;
              return _context5.abrupt("return");
            case 9:
              _this3.showRecoveryTeamReport = false;
            case 10:
              _context5.prev = 10;
              _context5.next = 13;
              return _this3.$axios.post(_this3.reportex_link(_this3.filiale) + 'creditbuilder/api/v1/execution-taches-recouvrement/', {
                filiale: _this3.filiale,
                agence: _this3.agence,
                top: _this3.top,
                aggregateur: _this3.aggregateur,
                duree: _this3.duree,
                filtre: _this3.filtre,
                use_type: _this3.useType,
                target: _this3.target,
                month: _this3.month,
                year: _this3.year
              });
            case 13:
              res = _context5.sent;
              _this3.items = ((_res$data = res.data) === null || _res$data === void 0 ? void 0 : _res$data.data) || [];
              _context5.next = 21;
              break;
            case 17:
              _context5.prev = 17;
              _context5.t0 = _context5["catch"](10);
              _this3.toastError(_context5.t0);
              _this3.showError(_context5.t0);
            case 21:
              _context5.prev = 21;
              _this3.loading = !stopLoading;
              return _context5.finish(21);
            case 24:
            case "end":
              return _context5.stop();
          }
        }, _callee5, null, [[10, 17, 21, 24]]);
      }))();
    },
    handleAggregator: function handleAggregator() {
      if (this.aggregateur == 'dex') this.agence = '';
      if (this.aggregateur == 'client') this.useType = 'action';
      this.getData(true);
    },
    resetFilter: function resetFilter() {
      var _this4 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
        var _this4$$store$getters, _this4$$store$getters2, _yield$_this4$determi;
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              _this4.top = 20;
              _this4.agence = (_this4$$store$getters = (_this4$$store$getters2 = _this4.$store.getters.agence_obj) === null || _this4$$store$getters2 === void 0 ? void 0 : _this4$$store$getters2.code) !== null && _this4$$store$getters !== void 0 ? _this4$$store$getters : null;
              _context6.next = 4;
              return _this4.determineAggregator();
            case 4:
              _context6.t1 = _yield$_this4$determi = _context6.sent;
              _context6.t0 = _context6.t1 !== null;
              if (!_context6.t0) {
                _context6.next = 8;
                break;
              }
              _context6.t0 = _yield$_this4$determi !== void 0;
            case 8:
              if (!_context6.t0) {
                _context6.next = 12;
                break;
              }
              _context6.t2 = _yield$_this4$determi;
              _context6.next = 13;
              break;
            case 12:
              _context6.t2 = 'client';
            case 13:
              _this4.aggregateur = _context6.t2;
              _this4.filtre = null;
              _this4.useType = 'client';
              _this4.target = 'client';
              _this4.year = new Date().getFullYear();
              _this4.month = null;
              _this4.duree = null;
              _context6.next = 22;
              return _this4.getData(true);
            case 22:
            case "end":
              return _context6.stop();
          }
        }, _callee6);
      }))();
    },
    onSelect: function onSelect(row) {
      var _this5 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
        var history;
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              if (row) {
                _context7.next = 2;
                break;
              }
              return _context7.abrupt("return");
            case 2:
              history = {
                aggregateur: _this5.aggregateur,
                filtre: _this5.filtre,
                agence: _this5.agence,
                items: _this5.items,
                top: _this5.top
              };
              _this5.aggregateur = getNextLevel(_this5.aggregateur);
              _context7.next = 6;
              return callLevelTool.bind(_this5)(_this5.aggregateur, row);
            case 6:
              if (_this5.aggregateur !== history.aggregateur) {
                _this5.history.push(history);
              }
              _this5.getData(true);
            case 8:
            case "end":
              return _context7.stop();
          }
        }, _callee7);
      }))();
    },
    goBack: function goBack() {
      var last = this.history.pop();
      if (last) {
        this.aggregateur = last.aggregateur;
        this.agence = last.agence;
        this.filtre = last.filtre;
        this.items = last.items;
        this.top = last.top;
      }
    },
    handleYearChange: function handleYearChange() {
      var _this6 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
        return _regeneratorRuntime().wrap(function _callee8$(_context8) {
          while (1) switch (_context8.prev = _context8.next) {
            case 0:
              _this6.month = null;
              _context8.next = 3;
              return _this6.getData(true);
            case 3:
            case "end":
              return _context8.stop();
          }
        }, _callee8);
      }))();
    },
    downloadTable: function downloadTable() {
      var _this7 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
        var data;
        return _regeneratorRuntime().wrap(function _callee9$(_context9) {
          while (1) switch (_context9.prev = _context9.next) {
            case 0:
              _context9.next = 2;
              return _this7.getData(true);
            case 2:
              data = {};
              data = {
                "headers": [],
                "items": _this7.items,
                "fileType": "excel",
                "title": "Rapport d'exécution par acteur"
              };
              EventBus.$emit("download-table-data", data);
            case 5:
            case "end":
              return _context9.stop();
          }
        }, _callee9);
      }))();
    },
    getAggregators: function getAggregators() {
      var _this8 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee0() {
        var _this8$__user__;
        var userAccess, GROUP_BY;
        return _regeneratorRuntime().wrap(function _callee0$(_context0) {
          while (1) switch (_context0.prev = _context0.next) {
            case 0:
              _context0.next = 2;
              return _this8.determineAccess(_this8.__user__);
            case 2:
              userAccess = _context0.sent;
              GROUP_BY = {
                DEX: {
                  label: "DEX",
                  value: "dex"
                },
                CAF: {
                  label: "Chargé d'affaire",
                  value: "caf"
                },
                CLIENT: {
                  label: "Client",
                  value: "client"
                },
                AGENCE: {
                  label: "Agence",
                  value: "agence"
                },
                DOSSIER: {
                  label: "Dossier",
                  value: "dossier"
                }
              };
              _this8.aggregators = _this8.aggregators = [GROUP_BY.DOSSIER, GROUP_BY.CLIENT, GROUP_BY.CAF];
              _context0.t0 = userAccess;
              _context0.next = _context0.t0 === "all" ? 8 : _context0.t0 === "filiale" ? 10 : 12;
              break;
            case 8:
              _this8.aggregators = _this8.aggregators.concat([GROUP_BY.AGENCE, GROUP_BY.DEX]);
              return _context0.abrupt("break", 12);
            case 10:
              _this8.aggregators = _this8.aggregators.concat([GROUP_BY.AGENCE]);
              return _context0.abrupt("break", 12);
            case 12:
              if (["K8C1dfx52rvA5ugR1mqt", "aFwisnrdo42c4n9MHCG2", "tmu3PEDVQsevYH2rhw4o", "icWghWx71w9VpwZ6y1mT"].includes((_this8$__user__ = _this8.__user__) === null || _this8$__user__ === void 0 ? void 0 : _this8$__user__.role_uuid)) {
                _this8.aggregators = _this8.aggregators.concat([GROUP_BY.DEX]);
              }
            case 13:
            case "end":
              return _context0.stop();
          }
        }, _callee0);
      }))();
    },
    isRecoveryTeamMember: function isRecoveryTeamMember() {
      var _this$__user__;
      return [
      // "K8C1dfx52rvA5ugR1mqt", // DISPRC
      "aFwisnrdo42c4n9MHCG2",
      // AR
      "tmu3PEDVQsevYH2rhw4o" // RESR
      // "icWghWx71w9VpwZ6y1mT", // SUPEG
      ].includes((_this$__user__ = this.__user__) === null || _this$__user__ === void 0 ? void 0 : _this$__user__.role_uuid);
    },
    isRecoveryAgent: function isRecoveryAgent() {
      var _this$__user__2;
      return ["aFwisnrdo42c4n9MHCG2" // AR
      ].includes((_this$__user__2 = this.__user__) === null || _this$__user__2 === void 0 ? void 0 : _this$__user__2.role_uuid);
    },
    getUserTeam: function getUserTeam() {
      var _this$__user__3, _this$__user__4;
      var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      if (typeof ((_this$__user__3 = this.__user__) === null || _this$__user__3 === void 0 || (_this$__user__3 = _this$__user__3.recovery_team_info) === null || _this$__user__3 === void 0 ? void 0 : _this$__user__3.teams) !== "string") {
        return -1;
      }
      var teamName = (_this$__user__4 = this.__user__) === null || _this$__user__4 === void 0 || (_this$__user__4 = _this$__user__4.recovery_team_info) === null || _this$__user__4 === void 0 ? void 0 : _this$__user__4.teams;
      if (name) {
        return teamName !== null && teamName !== void 0 ? teamName : -1;
      }
      var _teamName$split = teamName.split("_"),
        _teamName$split2 = _slicedToArray(_teamName$split, 2),
        numStr = _teamName$split2[1];
      return isNaN(numStr) ? -1 : parseInt(numStr, 10);
    },
    determineAggregator: function determineAggregator() {
      var _this9 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee1() {
        var access;
        return _regeneratorRuntime().wrap(function _callee1$(_context1) {
          while (1) switch (_context1.prev = _context1.next) {
            case 0:
              _context1.next = 2;
              return _this9.determineAccess(_this9.__user__);
            case 2:
              access = _context1.sent;
              _context1.t0 = access;
              _context1.next = _context1.t0 === "all" ? 6 : _context1.t0 === "filiale" ? 9 : _context1.t0 === "agence" ? 12 : _context1.t0 === "user" ? 14 : 17;
              break;
            case 6:
              // this.aggregateur = 'directeur';
              _this9.aggregateur = 'extended';
              _this9.showRecoveryTeamReport = true;
              return _context1.abrupt("break", 17);
            case 9:
              // DEX
              _this9.aggregateur = 'agence';
              if (_this9.isRecoveryTeamMember()) {
                if (_this9.userTeam > 1) _this9.aggregateur = 'extended';
                _this9.showRecoveryTeamReport = true;
              }
              return _context1.abrupt("break", 17);
            case 12:
              // CA
              _this9.aggregateur = 'caf';
              return _context1.abrupt("break", 17);
            case 14:
              // CAF
              _this9.aggregateur = 'client';
              _this9.filtre = {
                "id_caf": _this9.__user__.user_id,
                "nom_caf": _this9.__user__.name
              };
              return _context1.abrupt("break", 17);
            case 17:
              return _context1.abrupt("return", _this9.aggregateur);
            case 18:
            case "end":
              return _context1.stop();
          }
        }, _callee1);
      }))();
    }
  },
  watch: {
    __filiale__: function __filiale__(val) {
      if (val != this.filiale) {
        var _this$$store$getters$, _this$$store$getters$2;
        this.filiale = val;
        this.agence = (_this$$store$getters$ = (_this$$store$getters$2 = this.$store.getters.agence_obj) === null || _this$$store$getters$2 === void 0 ? void 0 : _this$$store$getters$2.code) !== null && _this$$store$getters$ !== void 0 ? _this$$store$getters$ : null;
        this.getData(true);
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/RCDashboard/Statistiques/Recouvrement/TaskRecap.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/RCDashboard/Statistiques/Recouvrement/TaskRecap.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DailyTaskRecap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DailyTaskRecap.vue */ "./resources/js/components/RCDashboard/Statistiques/Recouvrement/DailyTaskRecap.vue");
/* harmony import */ var _ExecutedTaskRecapByClient_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ExecutedTaskRecapByClient.vue */ "./resources/js/components/RCDashboard/Statistiques/Recouvrement/ExecutedTaskRecapByClient.vue");
/* harmony import */ var _RecapByTask_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RecapByTask.vue */ "./resources/js/components/RCDashboard/Statistiques/Recouvrement/RecapByTask.vue");
/* harmony import */ var _TaskRecapHistory_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TaskRecapHistory.vue */ "./resources/js/components/RCDashboard/Statistiques/Recouvrement/TaskRecapHistory.vue");
/* harmony import */ var _RecapTaskExecution_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./RecapTaskExecution.vue */ "./resources/js/components/RCDashboard/Statistiques/Recouvrement/RecapTaskExecution.vue");





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "TaskRecap",
  components: {
    DailyTaskRecap: _DailyTaskRecap_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    ExecutedTaskRecapByClient: _ExecutedTaskRecapByClient_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    RecapByTask: _RecapByTask_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    TaskRecapHistory: _TaskRecapHistory_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    RecapTaskExecution: _RecapTaskExecution_vue__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  data: function data() {
    return {
      toggle: true
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/RCDashboard/Statistiques/Recouvrement/TaskRecapHistory.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/RCDashboard/Statistiques/Recouvrement/TaskRecapHistory.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _shared_ZeroCross_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/ZeroCross.vue */ "./resources/js/components/shared/ZeroCross.vue");
/* harmony import */ var _Input_SelectFiliale_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Input/SelectFiliale.vue */ "./resources/js/components/RCDashboard/Input/SelectFiliale.vue");
/* harmony import */ var _services_recovery_recovery_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/recovery/recovery.js */ "./resources/js/services/recovery/recovery.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return r; }; var t, r = {}, e = Object.prototype, n = e.hasOwnProperty, o = "function" == typeof Symbol ? Symbol : {}, i = o.iterator || "@@iterator", a = o.asyncIterator || "@@asyncIterator", u = o.toStringTag || "@@toStringTag"; function c(t, r, e, n) { Object.defineProperty(t, r, { value: e, enumerable: !n, configurable: !n, writable: !n }); } try { c({}, ""); } catch (t) { c = function c(t, r, e) { return t[r] = e; }; } function h(r, e, n, o) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype); return c(a, "_invoke", function (r, e, n) { var o = 1; return function (i, a) { if (3 === o) throw Error("Generator is already running"); if (4 === o) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var u = n.delegate; if (u) { var c = d(u, n); if (c) { if (c === f) continue; return c; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (1 === o) throw o = 4, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = 3; var h = s(r, e, n); if ("normal" === h.type) { if (o = n.done ? 4 : 2, h.arg === f) continue; return { value: h.arg, done: n.done }; } "throw" === h.type && (o = 4, n.method = "throw", n.arg = h.arg); } }; }(r, n, new Context(o || [])), !0), a; } function s(t, r, e) { try { return { type: "normal", arg: t.call(r, e) }; } catch (t) { return { type: "throw", arg: t }; } } r.wrap = h; var f = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var l = {}; c(l, i, function () { return this; }); var p = Object.getPrototypeOf, y = p && p(p(x([]))); y && y !== e && n.call(y, i) && (l = y); var v = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(l); function g(t) { ["next", "throw", "return"].forEach(function (r) { c(t, r, function (t) { return this._invoke(r, t); }); }); } function AsyncIterator(t, r) { function e(o, i, a, u) { var c = s(t[o], t, i); if ("throw" !== c.type) { var h = c.arg, f = h.value; return f && "object" == _typeof(f) && n.call(f, "__await") ? r.resolve(f.__await).then(function (t) { e("next", t, a, u); }, function (t) { e("throw", t, a, u); }) : r.resolve(f).then(function (t) { h.value = t, a(h); }, function (t) { return e("throw", t, a, u); }); } u(c.arg); } var o; c(this, "_invoke", function (t, n) { function i() { return new r(function (r, o) { e(t, n, r, o); }); } return o = o ? o.then(i, i) : i(); }, !0); } function d(r, e) { var n = e.method, o = r.i[n]; if (o === t) return e.delegate = null, "throw" === n && r.i["return"] && (e.method = "return", e.arg = t, d(r, e), "throw" === e.method) || "return" !== n && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + n + "' method")), f; var i = s(o, r.i, e.arg); if ("throw" === i.type) return e.method = "throw", e.arg = i.arg, e.delegate = null, f; var a = i.arg; return a ? a.done ? (e[r.r] = a.value, e.next = r.n, "return" !== e.method && (e.method = "next", e.arg = t), e.delegate = null, f) : a : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f); } function w(t) { this.tryEntries.push(t); } function m(r) { var e = r[4] || {}; e.type = "normal", e.arg = t, r[4] = e; } function Context(t) { this.tryEntries = [[-1]], t.forEach(w, this), this.reset(!0); } function x(r) { if (null != r) { var e = r[i]; if (e) return e.call(r); if ("function" == typeof r.next) return r; if (!isNaN(r.length)) { var o = -1, a = function e() { for (; ++o < r.length;) if (n.call(r, o)) return e.value = r[o], e.done = !1, e; return e.value = t, e.done = !0, e; }; return a.next = a; } } throw new TypeError(_typeof(r) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, c(v, "constructor", GeneratorFunctionPrototype), c(GeneratorFunctionPrototype, "constructor", GeneratorFunction), c(GeneratorFunctionPrototype, u, GeneratorFunction.displayName = "GeneratorFunction"), r.isGeneratorFunction = function (t) { var r = "function" == typeof t && t.constructor; return !!r && (r === GeneratorFunction || "GeneratorFunction" === (r.displayName || r.name)); }, r.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, c(t, u, "GeneratorFunction")), t.prototype = Object.create(v), t; }, r.awrap = function (t) { return { __await: t }; }, g(AsyncIterator.prototype), c(AsyncIterator.prototype, a, function () { return this; }), r.AsyncIterator = AsyncIterator, r.async = function (t, e, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(h(t, e, n, o), i); return r.isGeneratorFunction(e) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, g(v), c(v, u, "Generator"), c(v, i, function () { return this; }), c(v, "toString", function () { return "[object Generator]"; }), r.keys = function (t) { var r = Object(t), e = []; for (var n in r) e.unshift(n); return function t() { for (; e.length;) if ((n = e.pop()) in r) return t.value = n, t.done = !1, t; return t.done = !0, t; }; }, r.values = x, Context.prototype = { constructor: Context, reset: function reset(r) { if (this.prev = this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(m), !r) for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0][4]; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(r) { if (this.done) throw r; var e = this; function n(t) { a.type = "throw", a.arg = r, e.next = t; } for (var o = e.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i[4], u = this.prev, c = i[1], h = i[2]; if (-1 === i[0]) return n("end"), !1; if (!c && !h) throw Error("try statement without catch or finally"); if (null != i[0] && i[0] <= u) { if (u < c) return this.method = "next", this.arg = t, n(c), !0; if (u < h) return n(h), !1; } } }, abrupt: function abrupt(t, r) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var n = this.tryEntries[e]; if (n[0] > -1 && n[0] <= this.prev && this.prev < n[2]) { var o = n; break; } } o && ("break" === t || "continue" === t) && o[0] <= r && r <= o[2] && (o = null); var i = o ? o[4] : {}; return i.type = t, i.arg = r, o ? (this.method = "next", this.next = o[2], f) : this.complete(i); }, complete: function complete(t, r) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), f; }, finish: function finish(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[2] === t) return this.complete(e[4], e[3]), m(e), f; } }, "catch": function _catch(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[0] === t) { var n = e[4]; if ("throw" === n.type) { var o = n.arg; m(e); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(r, e, n) { return this.delegate = { i: x(r), r: e, n: n }, "next" === this.method && (this.arg = t), f; } }, r; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "TaskRecapHistory",
  components: {
    ZeroCross: _shared_ZeroCross_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    SelectFiliale: _Input_SelectFiliale_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      title: "Historique des tâches exécutées",
      months: [],
      rows: [],
      loading: false,
      error: null,
      actions: _services_recovery_recovery_js__WEBPACK_IMPORTED_MODULE_2__.actions,
      filters: {
        filiale: null,
        agence: null,
        top: null,
        year: new Date().getFullYear(),
        use_type: "client",
        target: "client",
        action: _services_recovery_recovery_js__WEBPACK_IMPORTED_MODULE_2__.actions[0].value
      }
    };
  },
  computed: {
    role: function role() {
      var _this$__user__;
      return (_this$__user__ = this.__user__) === null || _this$__user__ === void 0 ? void 0 : _this$__user__.role_sigle;
    },
    totals: function totals() {
      var _this = this;
      var all_totals = {};
      var _iterator = _createForOfIteratorHelper(this.months),
        _step;
      try {
        var _loop = function _loop() {
          var m = _step.value;
          all_totals[m.number] = {
            oui: _this.rows.reduce(function (acc, cur) {
              var _cur$bucket;
              return acc + (cur === null || cur === void 0 || (_cur$bucket = cur.bucket) === null || _cur$bucket === void 0 || (_cur$bucket = _cur$bucket["".concat(m.number)]) === null || _cur$bucket === void 0 ? void 0 : _cur$bucket.oui_count);
            }, 0),
            non: _this.rows.reduce(function (acc, cur) {
              var _cur$bucket2;
              return acc + (cur === null || cur === void 0 || (_cur$bucket2 = cur.bucket) === null || _cur$bucket2 === void 0 || (_cur$bucket2 = _cur$bucket2["".concat(m.number)]) === null || _cur$bucket2 === void 0 ? void 0 : _cur$bucket2.non_count);
            }, 0),
            total: _this.rows.reduce(function (acc, cur) {
              var _cur$bucket3;
              return acc + (cur === null || cur === void 0 || (_cur$bucket3 = cur.bucket) === null || _cur$bucket3 === void 0 || (_cur$bucket3 = _cur$bucket3["".concat(m.number)]) === null || _cur$bucket3 === void 0 ? void 0 : _cur$bucket3.total_count);
            }, 0)
          };
        };
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          _loop();
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      return all_totals;
    },
    availableYears: function availableYears() {
      var currentYear = new Date().getFullYear();
      return Array.from({
        length: currentYear - _services_recovery_recovery_js__WEBPACK_IMPORTED_MODULE_2__.RECOVERY_START_DATE.year + 1
      }, function (_, i) {
        return currentYear - i;
      });
    }
  },
  mounted: function mounted() {
    var _this2 = this;
    this.init();
    EventBus.$on('filiale-and-agence-change', /*#__PURE__*/function () {
      var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(newVal) {
        var _newVal$agence, _this2$$route$query;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _this2.filters.filiale = newVal === null || newVal === void 0 ? void 0 : newVal.filiale;
              _this2.filters.agence = newVal === null || newVal === void 0 || (_newVal$agence = newVal.agence) === null || _newVal$agence === void 0 ? void 0 : _newVal$agence.code;
              if (!(((_this2$$route$query = _this2.$route.query) === null || _this2$$route$query === void 0 ? void 0 : _this2$$route$query["super-tab"]) === "rapport-execution-taches")) {
                _context.next = 5;
                break;
              }
              _context.next = 5;
              return _this2.getData(true);
            case 5:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
  },
  methods: {
    init: function init() {
      var _this3 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var _this3$$store$getters, _this3$$store$getters2;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _this3.error = null;
              if (!_this3.__filiale__ || !_this3.role) {
                setTimeout(function () {
                  _this3.init();
                }, 500);
              } else {
                _this3.filters.filiale = _this3.__filiale__;
                _this3.filters.agence = (_this3$$store$getters = (_this3$$store$getters2 = _this3.$store.getters.agence_obj) === null || _this3$$store$getters2 === void 0 ? void 0 : _this3$$store$getters2.code) !== null && _this3$$store$getters !== void 0 ? _this3$$store$getters : null;
                Promise.all([_this3.getData()])["finally"](function () {
                  _this3.loading = false;
                });
              }
            case 2:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }))();
    },
    toastError: function toastError(messageOrError) {
      if (_typeof(messageOrError) === "object") {
        var _messageOrError, _messageOrError2;
        if ((_messageOrError = messageOrError) !== null && _messageOrError !== void 0 && (_messageOrError = _messageOrError.response) !== null && _messageOrError !== void 0 && (_messageOrError = _messageOrError.data) !== null && _messageOrError !== void 0 && _messageOrError.message) {
          messageOrError = messageOrError.response.data.message;
        } else if ((_messageOrError2 = messageOrError) !== null && _messageOrError2 !== void 0 && _messageOrError2.message) {
          messageOrError = messageOrError.message;
        }
      }
      this.$toasted.error(messageOrError || "Une erreur est survenue");
    },
    showError: function showError(messageOrError) {
      if (_typeof(messageOrError) === "object") {
        var _messageOrError3, _messageOrError4;
        if ((_messageOrError3 = messageOrError) !== null && _messageOrError3 !== void 0 && (_messageOrError3 = _messageOrError3.response) !== null && _messageOrError3 !== void 0 && (_messageOrError3 = _messageOrError3.data) !== null && _messageOrError3 !== void 0 && _messageOrError3.message) {
          messageOrError = messageOrError.response.data.message;
        } else if ((_messageOrError4 = messageOrError) !== null && _messageOrError4 !== void 0 && _messageOrError4.message) {
          messageOrError = messageOrError.message;
        }
      }
      this.error = messageOrError || "Une erreur est survenue";
    },
    getData: function getData() {
      var _arguments = arguments,
        _this4 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var stopLoading, _yield$_this4$$axios$, res, data;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              stopLoading = _arguments.length > 0 && _arguments[0] !== undefined ? _arguments[0] : false;
              _this4.loading = true;
              _context3.prev = 2;
              _context3.next = 5;
              return _this4.$axios.post(_this4.reportex_link(_this4.filters.filiale) + 'creditbuilder/api/v1/recouvrement/historique-taches-executees/', {
                agence: _this4.filters.agence,
                filiale: _this4.filters.filiale,
                filters: _this4.filters,
                user: _this4.__user__
              });
            case 5:
              _yield$_this4$$axios$ = _context3.sent;
              res = _yield$_this4$$axios$.data;
              if (res !== null && res !== void 0 && res.is_success) {
                _context3.next = 11;
                break;
              }
              _this4.toastError(res);
              _this4.showError(res);
              return _context3.abrupt("return", false);
            case 11:
              data = res === null || res === void 0 ? void 0 : res.data;
              _this4.months = data === null || data === void 0 ? void 0 : data.header;
              _this4.rows = data === null || data === void 0 ? void 0 : data.rows;
              _context3.next = 20;
              break;
            case 16:
              _context3.prev = 16;
              _context3.t0 = _context3["catch"](2);
              _this4.toastError(_context3.t0);
              _this4.showError(_context3.t0);
            case 20:
              _context3.prev = 20;
              _this4.loading = !stopLoading;
              return _context3.finish(20);
            case 23:
            case "end":
              return _context3.stop();
          }
        }, _callee3, null, [[2, 16, 20, 23]]);
      }))();
    },
    resetFilter: function resetFilter() {
      var _this5 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        var _this5$$store$getters, _this5$$store$getters2;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _this5.filters = {
                filiale: _this5.filters.filiale,
                agence: (_this5$$store$getters = (_this5$$store$getters2 = _this5.$store.getters.agence_obj) === null || _this5$$store$getters2 === void 0 ? void 0 : _this5$$store$getters2.code) !== null && _this5$$store$getters !== void 0 ? _this5$$store$getters : null,
                top: null,
                year: new Date().getFullYear(),
                use_type: "client",
                target: "client",
                action: _services_recovery_recovery_js__WEBPACK_IMPORTED_MODULE_2__.actions[0].value
              };
              _context4.next = 3;
              return _this5.getData(true);
            case 3:
            case "end":
              return _context4.stop();
          }
        }, _callee4);
      }))();
    },
    // updateAgence(agence) {
    //   this.agence = agence;
    //   this.getData(true);
    // },
    downloadTable: function downloadTable() {
      var _this6 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
        var new_data, data;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return _this6.getData(true);
            case 2:
              new_data = [];
              _this6.rows.forEach(function (row) {
                var reformatObject = function reformatObject(row) {
                  return {
                    duree_impaye: row.label,
                    lignes: row.bucket
                  };
                };
                new_data.push(reformatObject(row));
              });
              data = {};
              data = {
                "headers": [],
                "items": new_data,
                "fileType": "excel",
                "title": _this6.title,
                "months": _this6.months
              };
              EventBus.$emit("download-table-data", data);
            case 7:
            case "end":
              return _context5.stop();
          }
        }, _callee5);
      }))();
    }
  },
  watch: {
    __filiale__: function __filiale__(val) {
      if (val != this.filiale) {
        var _this$$store$getters$, _this$$store$getters$2;
        this.filters.filiale = val;
        this.filters.agence = (_this$$store$getters$ = (_this$$store$getters$2 = this.$store.getters.agence_obj) === null || _this$$store$getters$2 === void 0 ? void 0 : _this$$store$getters$2.code) !== null && _this$$store$getters$ !== void 0 ? _this$$store$getters$ : null;
        this.getData(true);
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/RCDashboard/Statistiques/Recouvrement/DailyTaskRecap.vue?vue&type=template&id=388be928&scoped=true":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/RCDashboard/Statistiques/Recouvrement/DailyTaskRecap.vue?vue&type=template&id=388be928&scoped=true ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("stat-table", {
    attrs: {
      loading: _vm.loading,
      items: _vm.rows,
      title: _vm.title,
      useToolbar: "",
      spacer: false,
      useDownload: false,
      "show-empty": !_vm.error,
      useCounter: false
    },
    scopedSlots: _vm._u([{
      key: "header",
      fn: function fn() {
        return [_c("div", {
          staticClass: "d-flex"
        }, [_c("h3", [_vm._v(_vm._s(_vm.title))])])];
      },
      proxy: true
    }, {
      key: "toolbar-buttons",
      fn: function fn() {
        return [_c("div", {
          staticClass: "w-100 d-flex gap-5 flex-column px-2"
        }, [_c("div", {
          staticClass: "d-flex gap-2"
        }, [_c("div", {
          staticClass: "d-flex flex-column gap-1"
        }, [_c("label", {
          staticStyle: {
            "text-wrap": "nowrap"
          },
          attrs: {
            "for": "data-range"
          }
        }, [_vm._v("Par :")]), _vm._v(" "), _c("select", {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: _vm.filters.range,
            expression: "filters.range"
          }],
          staticClass: "form-select fs-small",
          attrs: {
            id: "data-range"
          },
          on: {
            change: [function ($event) {
              var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
                return o.selected;
              }).map(function (o) {
                var val = "_value" in o ? o._value : o.value;
                return val;
              });
              _vm.$set(_vm.filters, "range", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
            }, function ($event) {
              return _vm.getData(true);
            }]
          }
        }, [_c("option", {
          attrs: {
            selected: "",
            label: "Toutes durée confondues"
          },
          domProps: {
            value: null
          }
        }), _vm._v(" "), _vm._l(_vm.durees, function (d) {
          return _c("option", {
            key: d.label,
            attrs: {
              label: d.label
            },
            domProps: {
              value: d
            }
          });
        })], 2)]), _vm._v(" "), _c("div", {
          staticClass: "d-flex flex-column gap-1"
        }, [_c("label", {
          staticStyle: {
            "text-wrap": "nowrap"
          },
          attrs: {
            "for": "data-top"
          }
        }, [_vm._v("Top :")]), _vm._v(" "), _c("select", {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: _vm.filters.top,
            expression: "filters.top"
          }],
          staticClass: "form-select fs-small",
          attrs: {
            id: "data-top"
          },
          on: {
            change: [function ($event) {
              var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
                return o.selected;
              }).map(function (o) {
                var val = "_value" in o ? o._value : o.value;
                return val;
              });
              _vm.$set(_vm.filters, "top", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
            }, function ($event) {
              return _vm.getData(true);
            }]
          }
        }, [_c("option", {
          attrs: {
            selected: "",
            label: "Global"
          },
          domProps: {
            value: null
          }
        }), _vm._v(" "), _vm._l([10, 20, 30, 50], function (t) {
          return _c("option", {
            key: t,
            attrs: {
              label: "Top ".concat(t)
            },
            domProps: {
              value: t
            }
          });
        })], 2)]), _vm._v(" "), _c("div", {
          staticClass: "d-flex flex-column gap-1"
        }, [_c("label", {
          staticStyle: {
            "text-wrap": "nowrap"
          },
          attrs: {
            "for": "data-target"
          }
        }, [_vm._v("Concerné :")]), _vm._v(" "), _c("select", {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: _vm.filters.target,
            expression: "filters.target"
          }],
          staticClass: "form-select fs-small",
          attrs: {
            id: "data-target"
          },
          on: {
            change: [function ($event) {
              var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
                return o.selected;
              }).map(function (o) {
                var val = "_value" in o ? o._value : o.value;
                return val;
              });
              _vm.$set(_vm.filters, "target", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
            }, function ($event) {
              return _vm.getData(true);
            }]
          }
        }, [_c("option", {
          attrs: {
            selected: "",
            value: "client",
            label: "Client"
          }
        }, [_vm._v("Client")]), _vm._v(" "), _c("option", {
          attrs: {
            value: "caution",
            label: "Caution(s)"
          }
        }, [_vm._v("Caution(s)")])])]), _vm._v(" "), _c("div", {
          staticClass: "d-flex flex-column gap-1"
        }, [_c("label", {
          staticStyle: {
            "text-wrap": "nowrap"
          },
          attrs: {
            "for": "data-use-type"
          }
        }, [_vm._v("Type :")]), _vm._v(" "), _c("select", {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: _vm.filters.use_type,
            expression: "filters.use_type"
          }],
          staticClass: "form-select fs-small",
          attrs: {
            id: "data-use-type"
          },
          on: {
            change: [function ($event) {
              var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
                return o.selected;
              }).map(function (o) {
                var val = "_value" in o ? o._value : o.value;
                return val;
              });
              _vm.$set(_vm.filters, "use_type", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
            }, function ($event) {
              return _vm.getData(true);
            }]
          }
        }, [_c("option", {
          attrs: {
            selected: "",
            value: "client",
            label: "Client"
          }
        }), _vm._v(" "), _c("option", {
          attrs: {
            value: "action",
            label: "Action"
          }
        })])]), _vm._v(" "), _c("div", {
          staticClass: "d-flex flex-column gap-1"
        }, [_c("label", {
          staticStyle: {
            "text-wrap": "nowrap"
          },
          attrs: {
            "for": "data-year"
          }
        }, [_vm._v("Année :")]), _vm._v(" "), _c("select", {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: _vm.filters.year,
            expression: "filters.year"
          }],
          staticClass: "form-select fs-small",
          attrs: {
            id: "data-year"
          },
          on: {
            change: [function ($event) {
              var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
                return o.selected;
              }).map(function (o) {
                var val = "_value" in o ? o._value : o.value;
                return val;
              });
              _vm.$set(_vm.filters, "year", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
            }, _vm.handleYearChange]
          }
        }, _vm._l(_vm.availableYears, function (y) {
          return _c("option", {
            key: y,
            attrs: {
              label: y
            },
            domProps: {
              value: y
            }
          });
        }), 0)]), _vm._v(" "), _c("div", {
          staticClass: "d-flex flex-column gap-1"
        }, [_c("label", {
          staticStyle: {
            "text-wrap": "nowrap"
          },
          attrs: {
            "for": "data-views"
          }
        }, [_vm._v("Vues :")]), _vm._v(" "), _c("select", {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: _vm.filters.views,
            expression: "filters.views"
          }],
          staticClass: "form-select fs-small",
          attrs: {
            id: "data-views"
          },
          on: {
            change: [function ($event) {
              var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
                return o.selected;
              }).map(function (o) {
                var val = "_value" in o ? o._value : o.value;
                return val;
              });
              _vm.$set(_vm.filters, "views", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
            }, function ($event) {
              return _vm.getData(true);
            }]
          }
        }, [_c("option", {
          attrs: {
            selected: "",
            value: "daily",
            label: "Journalière"
          }
        }), _vm._v(" "), _c("option", {
          attrs: {
            value: "weekly",
            label: "Hebdomadaire"
          }
        })])]), _vm._v(" "), _c("div", {
          staticClass: "d-flex flex-column gap-1"
        }, [_c("label", {
          staticStyle: {
            "text-wrap": "nowrap"
          },
          attrs: {
            "for": "data-month"
          }
        }, [_vm._v("Mois :")]), _vm._v(" "), _c("select", {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: _vm.filters.month,
            expression: "filters.month"
          }],
          staticClass: "form-select fs-small",
          attrs: {
            id: "data-month"
          },
          on: {
            change: [function ($event) {
              var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
                return o.selected;
              }).map(function (o) {
                var val = "_value" in o ? o._value : o.value;
                return val;
              });
              _vm.$set(_vm.filters, "month", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
            }, function ($event) {
              return _vm.getData(true);
            }]
          }
        }, _vm._l(_vm.availableMonths, function (m) {
          return _c("option", {
            key: m.id,
            attrs: {
              label: m.name
            },
            domProps: {
              value: m.id
            }
          });
        }), 0)]), _vm._v(" "), _c("div", {
          staticClass: "d-flex flex-column gap-1"
        }, [_c("label", {
          "class": {
            "text-secondary": _vm.disableWeekFilter
          },
          staticStyle: {
            "text-wrap": "nowrap"
          },
          attrs: {
            "for": "data-week"
          }
        }, [_vm._v("Semaine :")]), _vm._v(" "), _c("select", {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: _vm.filters.week_of_month,
            expression: "filters.week_of_month"
          }],
          staticClass: "form-select fs-small",
          attrs: {
            id: "data-week",
            disabled: _vm.disableWeekFilter,
            title: _vm.disableWeekFilter ? "Veuillez choisir la vue journalière pour activer ce filtre" : ""
          },
          on: {
            change: [function ($event) {
              var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
                return o.selected;
              }).map(function (o) {
                var val = "_value" in o ? o._value : o.value;
                return val;
              });
              _vm.$set(_vm.filters, "week_of_month", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
            }, function ($event) {
              return _vm.getData(true);
            }]
          }
        }, _vm._l(_vm.availableWeeks, function (w) {
          return _c("option", {
            key: w.number,
            attrs: {
              label: w.label
            },
            domProps: {
              value: w.number
            }
          });
        }), 0)]), _vm._v(" "), _c("div", {
          staticClass: "d-flex flex-column gap-1 justify-content-end"
        }, [_c("button", {
          staticClass: "btn btn-success fs-small",
          on: {
            click: _vm.downloadTable
          }
        }, [_c("svg", {
          staticClass: "bi bi-download",
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "currentColor",
            viewBox: "0 0 16 16"
          }
        }, [_c("path", {
          attrs: {
            d: "M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5"
          }
        }), _vm._v(" "), _c("path", {
          attrs: {
            d: "M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z"
          }
        })])])]), _vm._v(" "), _c("div", {
          staticClass: "d-flex flex-column gap-1 justify-content-end"
        }, [_c("button", {
          staticClass: "btn btn-danger fs-small",
          on: {
            click: _vm.resetFilter
          }
        }, [_c("i", {
          staticClass: "fa fa-refresh"
        }), _vm._v(" Réinitialiser\n                        ")])])]), _vm._v(" "), _vm.error ? _c("div", [_c("div", {
          staticClass: "alert alert-danger"
        }, [_vm._v(_vm._s(_vm.error))]), _vm._v(" "), _c("div", [_c("button", {
          staticClass: "btn btn-primary",
          on: {
            click: _vm.init
          }
        }, [_c("i", {
          staticClass: "fa fa-refresh"
        }), _vm._v(" Réessayer\n                        ")])])]) : _vm._e()])];
      },
      proxy: true
    }, {
      key: "tableHeader",
      fn: function fn() {
        return [_c("tr", [_c("th", {
          staticClass: "tb-sticky text-center align-middle fw-normal",
          staticStyle: {
            "vertical-align": "middle",
            "text-align": "center",
            "max-width": "fit-content !important",
            "border-bottom": "solid 1px black !important",
            "border-top": "solid 1px black !important"
          },
          attrs: {
            colspan: 2
          }
        }, [_vm._v("\n                    Actions\n                ")]), _vm._v(" "), _vm._l(_vm.headers, function (h) {
          return _c("th", {
            key: h.label,
            staticClass: "text-center align-middle fw-normal text-capitalize",
            staticStyle: {
              "min-width": "150px",
              "border-bottom": "solid 1px black !important",
              "border-top": "solid 1px black !important"
            },
            attrs: {
              rowspan: "2"
            }
          }, [_vm._v("\n                    " + _vm._s(h.label) + "\n                ")]);
        })], 2)];
      },
      proxy: true
    }, {
      key: "default",
      fn: function fn(_ref) {
        var items = _ref.items;
        return [_vm._l(items, function (item, index) {
          return [_c("tr", {
            key: index
          }, [_c("td", {
            staticClass: "tb-sticky text-center align-middle fw-normal",
            staticStyle: {
              "border-bottom": "solid 1px black !important"
            },
            attrs: {
              rowspan: 3
            }
          }, [_c("span", {
            staticClass: "d-flex w-100 d-flex flex-column gap-2 justify-content-center align-items-center"
          }, [_c("span", [_vm._v(_vm._s(item.action_label))]), _vm._v(" "), _c("i", {
            staticClass: "fs-3",
            "class": _vm.action_icons[item.action],
            attrs: {
              "data-bs-toggle": "tooltip",
              "data-bs-placement": "top",
              title: item.action_label
            }
          })])]), _vm._v(" "), _c("td", {
            staticClass: "tb-sticky text-center fw-normal"
          }, [_vm._v("\n                        Succès\n                    ")]), _vm._v(" "), _vm._l(item.data, function (day, dayIndex) {
            return _c("td", {
              key: "success-".concat(dayIndex),
              staticClass: "text-center fw-normal"
            }, [_c("ZeroCross", {
              attrs: {
                value: day.oui_count
              }
            })], 1);
          })], 2), _vm._v(" "), _c("tr", {
            key: "".concat(index, "-1")
          }, [_c("td", {
            staticClass: "tb-sticky text-center fw-normal"
          }, [_vm._v("\n                        Échec\n                    ")]), _vm._v(" "), _vm._l(item.data, function (day, dayIndex) {
            return _c("td", {
              key: "echec-".concat(dayIndex),
              staticClass: "text-center fw-normal"
            }, [_c("ZeroCross", {
              attrs: {
                value: day.non_count
              }
            })], 1);
          })], 2), _vm._v(" "), _c("tr", {
            key: "".concat(index, "-2")
          }, [_c("td", {
            staticClass: "tb-sticky text-center fw-normal",
            staticStyle: {
              "border-bottom": "solid 1px black !important"
            }
          }, [_vm._v("\n                        Total\n                    ")]), _vm._v(" "), _vm._l(item.data, function (day, dayIndex) {
            return _c("td", {
              key: "total-".concat(dayIndex),
              staticClass: "text-center fw-normal",
              staticStyle: {
                "border-bottom": "solid 1px black !important"
              }
            }, [_c("ZeroCross", {
              attrs: {
                value: day.total_count
              }
            })], 1);
          })], 2)];
        })];
      }
    }])
  })], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/RCDashboard/Statistiques/Recouvrement/ExecutedTaskRecapByClient.vue?vue&type=template&id=9e0adedc&scoped=true":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/RCDashboard/Statistiques/Recouvrement/ExecutedTaskRecapByClient.vue?vue&type=template&id=9e0adedc&scoped=true ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("stat-table", {
    attrs: {
      loading: _vm.loading,
      title: "Rapport par dossier de crédit",
      useToolbar: "",
      useSearch: "",
      searchKey: ["nom_caf", "caf", "agence"],
      spacer: false,
      items: _vm.items,
      useDownload: false,
      useYearUpdater: false,
      searchMinWidth: "400px",
      searchValue: _vm.search,
      "show-empty": !_vm.error,
      useCounter: false
    },
    scopedSlots: _vm._u([{
      key: "toolbar-buttons",
      fn: function fn() {
        return [_c("div", {
          staticClass: "w-100 d-flex gap-5 flex-column px-2"
        }, [_c("div", {
          staticClass: "d-flex gap-2 justify-content-between align-items-end"
        }, [_c("div", {
          staticClass: "d-flex gap-2"
        }, [_c("div", {
          staticClass: "d-flex flex-column gap-1"
        }, [_c("label", {
          staticStyle: {
            "text-wrap": "nowrap"
          },
          attrs: {
            "for": "data-top"
          }
        }, [_vm._v("Top :")]), _vm._v(" "), _c("select", {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: _vm.top,
            expression: "top"
          }],
          staticClass: "form-select fs-small",
          attrs: {
            id: "data-top"
          },
          on: {
            change: [function ($event) {
              var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
                return o.selected;
              }).map(function (o) {
                var val = "_value" in o ? o._value : o.value;
                return val;
              });
              _vm.top = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
            }, function ($event) {
              return _vm.getData(true);
            }]
          }
        }, _vm._l(_vm.tops, function (top) {
          return _c("option", {
            key: top.value,
            attrs: {
              label: top.label
            },
            domProps: {
              value: top.value
            }
          });
        }), 0)]), _vm._v(" "), _c("div", {
          staticClass: "d-flex flex-column gap-1"
        }, [_c("label", {
          staticStyle: {
            "text-wrap": "nowrap"
          },
          attrs: {
            "for": "data-year"
          }
        }, [_vm._v("Année :")]), _vm._v(" "), _c("select", {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: _vm.year,
            expression: "year"
          }],
          staticClass: "form-select fs-small",
          attrs: {
            id: "data-year"
          },
          on: {
            change: [function ($event) {
              var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
                return o.selected;
              }).map(function (o) {
                var val = "_value" in o ? o._value : o.value;
                return val;
              });
              _vm.year = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
            }, _vm.handleYearChange]
          }
        }, [_c("option", {
          attrs: {
            label: "Toutes les années",
            selected: ""
          },
          domProps: {
            value: null
          }
        }), _vm._v(" "), _vm._l(_vm.availableYears, function (y) {
          return _c("option", {
            key: y,
            attrs: {
              label: y
            },
            domProps: {
              value: y
            }
          });
        })], 2)]), _vm._v(" "), _c("div", {
          staticClass: "d-flex flex-column gap-1"
        }, [_c("label", {
          staticStyle: {
            "text-wrap": "nowrap"
          },
          attrs: {
            "for": "data-year"
          }
        }, [_vm._v("Année :")]), _vm._v(" "), _c("select", {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: _vm.year,
            expression: "year"
          }],
          staticClass: "form-select fs-small",
          attrs: {
            id: "data-year"
          },
          on: {
            change: [function ($event) {
              var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
                return o.selected;
              }).map(function (o) {
                var val = "_value" in o ? o._value : o.value;
                return val;
              });
              _vm.year = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
            }, _vm.handleYearChange]
          }
        }, [_c("option", {
          attrs: {
            label: "Toutes les années",
            selected: ""
          },
          domProps: {
            value: null
          }
        }), _vm._v(" "), _vm._l(_vm.availableYears, function (y) {
          return _c("option", {
            key: y,
            attrs: {
              label: y
            },
            domProps: {
              value: y
            }
          });
        })], 2)]), _vm._v(" "), _c("div", {
          staticClass: "d-flex flex-column gap-1"
        }, [_c("label", {
          staticStyle: {
            "text-wrap": "nowrap"
          },
          attrs: {
            "for": "data-target"
          }
        }, [_vm._v("Concerné :")]), _vm._v(" "), _c("select", {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: _vm.target,
            expression: "target"
          }],
          staticClass: "form-select fs-small",
          attrs: {
            id: "data-target"
          },
          on: {
            change: [function ($event) {
              var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
                return o.selected;
              }).map(function (o) {
                var val = "_value" in o ? o._value : o.value;
                return val;
              });
              _vm.target = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
            }, function ($event) {
              return _vm.getData(true);
            }]
          }
        }, [_c("option", {
          attrs: {
            value: "client"
          }
        }, [_vm._v("Client")]), _vm._v(" "), _c("option", {
          attrs: {
            value: "caution"
          }
        }, [_vm._v("Caution(s)")])])]), _vm._v(" "), _c("div", {
          staticClass: "d-flex flex-column gap-1 justify-content-end"
        }, [_c("button", {
          staticClass: "btn btn-success fs-small",
          on: {
            click: _vm.downloadTable
          }
        }, [_c("svg", {
          staticClass: "bi bi-download",
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "currentColor",
            viewBox: "0 0 16 16"
          }
        }, [_c("path", {
          attrs: {
            d: "M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5"
          }
        }), _vm._v(" "), _c("path", {
          attrs: {
            d: "M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z"
          }
        })])])]), _vm._v(" "), _c("div", {
          staticClass: "d-flex flex-column gap-1 justify-content-end"
        }, [_c("button", {
          staticClass: "btn btn-danger fs-small",
          on: {
            click: _vm.resetFilter
          }
        }, [_c("i", {
          staticClass: "fa fa-refresh"
        }), _vm._v(" Réinitialiser\n            ")])]), _vm._v(" "), _c("div", {
          staticClass: "d-flex flex-column gap-1 justify-content-end"
        }, [_c("button", {
          staticClass: "btn btn-primary fs-small",
          on: {
            click: _vm.toggler
          }
        }, [_vm._v("\n              Voir le recap par action\n            ")])])]), _vm._v(" "), _c("div", {
          staticClass: "col px-2 position-relative",
          staticStyle: {
            "min-width": "400px",
            "max-width": "400px"
          }
        }, [_c("div", {
          staticClass: "input-group"
        }, [_c("input", {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: _vm.search,
            expression: "search"
          }],
          staticClass: "form-control shadow-none border-0 bg-grey fs-small",
          staticStyle: {
            background: "rgb(191, 190, 190, .2)"
          },
          attrs: {
            type: "text",
            placeholder: "Recherche..."
          },
          domProps: {
            value: _vm.search
          },
          on: {
            input: function input($event) {
              if ($event.target.composing) return;
              _vm.search = $event.target.value;
            }
          }
        }), _vm._v(" "), _c("span", {
          staticClass: "input-group-text d-flex align-items-center px-2 border-0",
          staticStyle: {
            background: "rgb(191, 190, 190, .2)"
          }
        }, [_c("i", {
          staticClass: "icofont-search"
        })])])])]), _vm._v(" "), _vm.error ? _c("div", [_c("div", {
          staticClass: "alert alert-danger"
        }, [_vm._v(_vm._s(_vm.error))]), _vm._v(" "), _c("div", [_c("button", {
          staticClass: "btn btn-primary",
          on: {
            click: _vm.init
          }
        }, [_c("i", {
          staticClass: "fa fa-refresh"
        }), _vm._v(" Réessayer\n          ")])])]) : _vm._e()])];
      },
      proxy: true
    }, {
      key: "toolbar-search",
      fn: function fn() {
        return [_c("span")];
      },
      proxy: true
    }, {
      key: "tableHeader",
      fn: function fn() {
        return [_c("tr", [_c("th", {
          staticClass: "text-start align-middle fw-normal",
          attrs: {
            rowspan: "2"
          },
          on: {
            click: function click($event) {
              return _vm.sortBy("nom_caf");
            }
          }
        }, [_vm._v("\n        Durée Impayé\n        "), _vm.sortKey == "nom_caf" ? _c("span", {
          staticStyle: {
            color: "#36fb2d"
          }
        }, [!_vm.ascending ? _c("i", {
          staticClass: "icofont-caret-down",
          staticStyle: {
            "font-size": "1.2em"
          }
        }) : _c("i", {
          staticClass: "icofont-caret-up",
          staticStyle: {
            "font-size": "1.2em"
          }
        })]) : _c("span", {
          staticStyle: {
            "font-size": ".5em"
          }
        }, [_c("i", {
          staticClass: "icofont-sort fw-normal"
        })])]), _vm._v(" "), _c("th", {
          staticClass: "text-center align-middle fw-normal",
          staticStyle: {
            "min-width": "150px"
          },
          attrs: {
            rowspan: "2"
          },
          on: {
            click: function click($event) {
              return _vm.sortBy("encours_total");
            }
          }
        }, [_vm._v("\n        Encours\n        "), _vm.sortKey == "encours_total" ? _c("span", {
          staticStyle: {
            color: "#36fb2d"
          }
        }, [!_vm.ascending ? _c("i", {
          staticClass: "icofont-caret-down",
          staticStyle: {
            "font-size": "1.2em"
          }
        }) : _c("i", {
          staticClass: "icofont-caret-up",
          staticStyle: {
            "font-size": "1.2em"
          }
        })]) : _c("span", {
          staticStyle: {
            "font-size": ".5em"
          }
        }, [_c("i", {
          staticClass: "icofont-sort fw-normal"
        })])]), _vm._v(" "), _c("th", {
          staticClass: "text-center align-middle fw-normal",
          staticStyle: {
            "min-width": "150px"
          },
          attrs: {
            rowspan: "2"
          },
          on: {
            click: function click($event) {
              return _vm.sortBy("encours_impaye");
            }
          }
        }, [_vm._v("\n        Encours Impayé\n        "), _vm.sortKey == "encours_impaye" ? _c("span", {
          staticStyle: {
            color: "#36fb2d"
          }
        }, [!_vm.ascending ? _c("i", {
          staticClass: "icofont-caret-down",
          staticStyle: {
            "font-size": "1.2em"
          }
        }) : _c("i", {
          staticClass: "icofont-caret-up",
          staticStyle: {
            "font-size": "1.2em"
          }
        })]) : _c("span", {
          staticStyle: {
            "font-size": ".5em"
          }
        }, [_c("i", {
          staticClass: "icofont-sort fw-normal"
        })])]), _vm._v(" "), _c("th", {
          staticClass: "text-center align-middle fw-normal",
          staticStyle: {
            "min-width": "150px"
          },
          attrs: {
            rowspan: "2"
          },
          on: {
            click: function click($event) {
              return _vm.sortBy("somme_recouvre");
            }
          }
        }, [_vm._v("\n        Somme Recouvrée\n        "), _vm.sortKey == "somme_recouvre" ? _c("span", {
          staticStyle: {
            color: "#36fb2d"
          }
        }, [!_vm.ascending ? _c("i", {
          staticClass: "icofont-caret-down",
          staticStyle: {
            "font-size": "1.2em"
          }
        }) : _c("i", {
          staticClass: "icofont-caret-up",
          staticStyle: {
            "font-size": "1.2em"
          }
        })]) : _c("span", {
          staticStyle: {
            "font-size": ".5em"
          }
        }, [_c("i", {
          staticClass: "icofont-sort fw-normal"
        })])]), _vm._v(" "), _c("th", {
          staticClass: "text-center align-middle fw-normal",
          staticStyle: {
            "min-width": "150px"
          },
          attrs: {
            rowspan: "2"
          },
          on: {
            click: function click($event) {
              return _vm.sortBy("nombre_dossiers");
            }
          }
        }, [_vm._v("\n        Nombre dossiers\n        "), _vm.sortKey == "nombre_dossiers" ? _c("span", {
          staticStyle: {
            color: "#36fb2d"
          }
        }, [!_vm.ascending ? _c("i", {
          staticClass: "icofont-caret-down",
          staticStyle: {
            "font-size": "1.2em"
          }
        }) : _c("i", {
          staticClass: "icofont-caret-up",
          staticStyle: {
            "font-size": "1.2em"
          }
        })]) : _c("span", {
          staticStyle: {
            "font-size": ".5em"
          }
        }, [_c("i", {
          staticClass: "icofont-sort fw-normal"
        })])]), _vm._v(" "), _c("th", {
          staticClass: "text-center fw-normal",
          staticStyle: {
            "min-width": "150px"
          },
          attrs: {
            colspan: "3"
          }
        }, [_vm._v("Appels")]), _vm._v(" "), _c("th", {
          staticClass: "text-center fw-normal",
          staticStyle: {
            "min-width": "150px"
          },
          attrs: {
            colspan: "3"
          }
        }, [_vm._v("Visites")]), _vm._v(" "), _c("th", {
          staticClass: "text-center fw-normal",
          staticStyle: {
            "min-width": "150px"
          },
          attrs: {
            colspan: "3"
          }
        }, [_vm._v("Décharges")])]), _vm._v(" "), _c("tr", [_vm._l(3, function (i) {
          return [_c("th", {
            key: i * 3,
            staticClass: "fw-normal text-center"
          }, [_vm._v("Succès")]), _vm._v(" "), _c("th", {
            key: i * 4,
            staticClass: "fw-normal text-center"
          }, [_vm._v("Echec")]), _vm._v(" "), _c("th", {
            key: i * 5,
            staticClass: "fw-normal text-center"
          }, [_vm._v("Total")])];
        })], 2)];
      },
      proxy: true
    }, {
      key: "default",
      fn: function fn(_ref) {
        var items = _ref.items;
        return [items ? _vm._l(items, function (item, index) {
          return _c("tr", {
            key: index
          }, [_c("td", {
            "class": {
              "my-sticky": !_vm.keyInFinalAggregation
            }
          }, [_vm._v("\n          " + _vm._s(item.duree) + "\n        ")]), _vm._v(" "), _c("td", {
            staticClass: "number-style text-end"
          }, [_vm._v("\n          " + _vm._s(_vm._f("formatNumber")(item.encours_total)) + "\n        ")]), _vm._v(" "), _c("td", {
            staticClass: "number-style text-end"
          }, [_vm._v("\n          " + _vm._s(_vm._f("formatNumber")(item.encours_impaye)) + "\n        ")]), _vm._v(" "), _c("td", {
            staticClass: "number-style text-end"
          }, [_vm._v("\n          " + _vm._s(_vm._f("formatNumber")(item.somme_recouvre)) + "\n        ")]), _vm._v(" "), _c("td", {
            staticClass: "number-style text-end"
          }, [_c("ZeroCross", {
            staticStyle: {
              "font-family": "monospace !important",
              "font-size": "1.1em",
              "font-weight": "normal"
            },
            attrs: {
              value: _vm._f("formatNumber")(item.nombre_dossiers)
            }
          })], 1), _vm._v(" "), _vm._l(["appel", "visite", "decharge"], function (el) {
            return [_c("td", {
              key: el + "_execute_succes",
              staticClass: "number-style text-end"
            }, [_c("ZeroCross", {
              staticStyle: {
                "font-family": "monospace !important",
                "font-size": "1.1em",
                "font-weight": "normal"
              },
              attrs: {
                value: _vm._f("formatNumber")(item[el + "_execute_succes"])
              }
            })], 1), _vm._v(" "), _c("td", {
              key: el + "_execute_echec",
              staticClass: "number-style text-end"
            }, [_c("ZeroCross", {
              staticStyle: {
                "font-family": "monospace !important",
                "font-size": "1.1em",
                "font-weight": "normal"
              },
              attrs: {
                value: _vm._f("formatNumber")(item[el + "_execute_echec"])
              }
            })], 1), _vm._v(" "), _c("td", {
              key: el + "_execute_total",
              staticClass: "number-style text-end"
            }, [_c("ZeroCross", {
              staticStyle: {
                "font-family": "monospace !important",
                "font-size": "1.1em",
                "font-weight": "normal"
              },
              attrs: {
                value: _vm._f("formatNumber")(item[el + "_execute_total"])
              }
            })], 1)];
          })], 2);
        }) : _vm._e()];
      }
    }, _vm.total ? {
      key: "total",
      fn: function fn() {
        return [_c("tr", {
          staticClass: "table-light"
        }, [_c("th", {
          staticClass: "my-sticky ps-2"
        }, [_vm._v("Total")]), _vm._v(" "), _c("th", {
          staticClass: "number-style text-end"
        }, [_vm._v("\n        " + _vm._s(_vm._f("formatNumber")(_vm.total.encours_total)) + "\n      ")]), _vm._v(" "), _c("th", {
          staticClass: "number-style text-end"
        }, [_vm._v("\n        " + _vm._s(_vm._f("formatNumber")(_vm.total.encours_impaye)) + "\n      ")]), _vm._v(" "), _c("th", {
          staticClass: "number-style text-end"
        }, [_vm._v("\n        " + _vm._s(_vm._f("formatNumber")(_vm.total.somme_recouvre)) + "\n      ")]), _vm._v(" "), _c("th", {
          staticClass: "number-style text-end"
        }, [_vm._v("\n        " + _vm._s(_vm._f("formatNumber")(_vm.total.nombre_dossiers)) + "\n      ")]), _vm._v(" "), _vm._l(["appel", "visite", "decharge"], function (el) {
          return [_c("td", {
            key: el + "_execute_succes",
            staticClass: "number-style text-end"
          }, [_c("ZeroCross", {
            staticStyle: {
              "font-family": "monospace !important",
              "font-size": "1.1em",
              "font-weight": "normal"
            },
            attrs: {
              value: _vm._f("formatNumber")(_vm.total[el + "_execute_succes"])
            }
          })], 1), _vm._v(" "), _c("td", {
            key: el + "_execute_echec",
            staticClass: "number-style text-end"
          }, [_c("ZeroCross", {
            staticStyle: {
              "font-family": "monospace !important",
              "font-size": "1.1em",
              "font-weight": "normal"
            },
            attrs: {
              value: _vm._f("formatNumber")(_vm.total[el + "_execute_echec"])
            }
          })], 1), _vm._v(" "), _c("td", {
            key: el + "_execute_total",
            staticClass: "number-style text-end"
          }, [_c("ZeroCross", {
            staticStyle: {
              "font-family": "monospace !important",
              "font-size": "1.1em",
              "font-weight": "normal"
            },
            attrs: {
              value: _vm._f("formatNumber")(_vm.total[el + "_execute_total"])
            }
          })], 1)];
        })], 2)];
      },
      proxy: true
    } : null], null, true)
  });
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/RCDashboard/Statistiques/Recouvrement/NextRecapTaskExecution.vue?vue&type=template&id=38e28a32&scoped=true":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/RCDashboard/Statistiques/Recouvrement/NextRecapTaskExecution.vue?vue&type=template&id=38e28a32&scoped=true ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "next-recap-task-execution mb-3"
  }, [_c("OvaTableSuite", {
    attrs: {
      data: _vm.currentData,
      loading: _vm.internalLoading,
      bordered: "",
      hover: "",
      itemsPerPage: 10,
      processingMode: "local",
      "clickable-rows": "",
      "default-sort-key": "encours_total",
      "default-sort-direction": "desc"
    },
    on: {
      "row-click": _vm.onSelect,
      update: _vm.updateData
    }
  }, [_c("OvaTableColumn", {
    attrs: {
      when: function when() {
        return _vm.shouldShowMatricule;
      },
      field: "matricule_client",
      label: "Matricule",
      sortable: "",
      type: "text",
      headerClass: "fw-normal ova-sticky text-center align-middle",
      cellClass: "ova-sticky text-uppercase text-center align-middle",
      cellStyle: "min-width: 200px;",
      before: "nom_caf"
    }
  }), _vm._v(" "), _c("OvaTableColumn", {
    attrs: {
      field: "nom_caf",
      label: "Nom",
      sortable: "",
      filterable: "",
      type: "text",
      headerStyle: "min-width: 200px;",
      headerClass: ["fw-normal text-center align-middle", {
        "ova-sticky": !_vm.shouldShowMatricule
      }],
      cellClass: ["text-uppercase text-center align-middle", {
        "ova-sticky": !_vm.shouldShowMatricule
      }],
      cellStyle: "min-width: 200px;"
    }
  }), _vm._v(" "), _c("OvaTableColumn", {
    attrs: {
      when: function when() {
        return _vm.shouldShowCAF;
      },
      field: "caf",
      label: "CAF",
      sortable: "",
      type: "text",
      headerClass: "fw-normal text-center align-middle",
      after: "nom_caf",
      cellClass: "text-uppercase text-center align-middle",
      cellStyle: "min-width: 200px;"
    }
  }), _vm._v(" "), _c("OvaTableColumn", {
    attrs: {
      when: function when() {
        return _vm.shouldShowAgence;
      },
      field: "agence",
      label: "Agence",
      sortable: "",
      filterable: "",
      type: "text",
      cellClass: "text-center fw-normal align-middle",
      cellStyle: "min-width: 200px;"
    }
  }), _vm._v(" "), _c("OvaTableColumn", {
    attrs: {
      field: "encours_total",
      label: "Encours",
      sortable: "",
      type: "currency",
      aggregate: "sum",
      cellClass: "text-end fw-normal align-middle",
      cellStyle: "min-width: 180px;"
    }
  }), _vm._v(" "), _c("OvaTableColumn", {
    attrs: {
      field: "encours_impaye",
      label: "Encours Impayé",
      sortable: "",
      type: "currency",
      aggregate: "sum",
      cellClass: "text-end fw-normal align-middle",
      cellStyle: "min-width: 180px;"
    }
  }), _vm._v(" "), _c("OvaTableColumn", {
    attrs: {
      field: "somme_recouvre",
      label: "Somme Recouvrée",
      sortable: "",
      type: "currency",
      aggregate: "sum",
      cellClass: "text-end fw-normal align-middle",
      cellStyle: "min-width: 180px;"
    }
  }), _vm._v(" "), _c("OvaTableColumn", {
    attrs: {
      field: "nombre_dossiers",
      label: "Nombre dossiers",
      sortable: "",
      type: "number",
      aggregate: "sum",
      cellClass: "text-center fw-normal align-middle",
      cellStyle: "min-width: 180px;"
    }
  }), _vm._v(" "), _c("OvaTableColumn", {
    attrs: {
      keyName: "appels-group",
      label: "Appels",
      cellClass: "text-center fw-normal align-middle"
    }
  }, [_c("OvaTableColumn", {
    attrs: {
      field: "appel_execute_succes",
      label: "Succès",
      type: "number",
      aggregate: "sum",
      cellClass: "text-center fw-normal align-middle",
      component: _vm.customZeroCrossComponent
    }
  }), _vm._v(" "), _c("OvaTableColumn", {
    attrs: {
      field: "appel_execute_echec",
      label: "Échec",
      type: "number",
      aggregate: "sum",
      cellClass: "text-center fw-normal align-middle",
      component: _vm.customZeroCrossComponent,
      before: "appel_execute_succes"
    }
  }), _vm._v(" "), _c("OvaTableColumn", {
    attrs: {
      field: "appel_execute_total",
      label: "Total",
      type: "number",
      aggregate: "sum",
      cellClass: "text-center fw-normal align-middle",
      component: _vm.customZeroCrossComponent
    }
  })], 1), _vm._v(" "), _c("OvaTableColumn", {
    attrs: {
      keyName: "visites-group",
      label: "Visites",
      cellClass: "text-center fw-normal align-middle"
    }
  }, [_c("OvaTableColumn", {
    attrs: {
      field: "visite_execute_succes",
      label: "Succès",
      type: "number",
      aggregate: "sum",
      cellClass: "text-center fw-normal align-middle",
      component: _vm.customZeroCrossComponent
    }
  }), _vm._v(" "), _c("OvaTableColumn", {
    attrs: {
      field: "visite_execute_echec",
      label: "Échec",
      type: "number",
      aggregate: "sum",
      cellClass: "text-center fw-normal align-middle",
      component: _vm.customZeroCrossComponent
    }
  }), _vm._v(" "), _c("OvaTableColumn", {
    attrs: {
      field: "visite_execute_total",
      label: "Total",
      type: "number",
      aggregate: "sum",
      cellClass: "text-center fw-normal align-middle",
      component: _vm.customZeroCrossComponent
    }
  })], 1), _vm._v(" "), _c("OvaTableColumn", {
    attrs: {
      keyName: "decharges-group",
      label: "Décharges",
      cellClass: "text-center fw-normal align-middle"
    }
  }, [_c("OvaTableColumn", {
    attrs: {
      field: "decharge_execute_succes",
      label: "Succès",
      type: "number",
      aggregate: "sum",
      cellClass: "text-center fw-normal align-middle",
      component: _vm.customZeroCrossComponent
    }
  }), _vm._v(" "), _c("OvaTableColumn", {
    attrs: {
      field: "decharge_execute_echec",
      label: "Échec",
      type: "number",
      aggregate: "sum",
      cellClass: "text-center fw-normal align-middle",
      component: _vm.customZeroCrossComponent
    }
  }), _vm._v(" "), _c("OvaTableColumn", {
    attrs: {
      field: "decharge_execute_total",
      label: "Total",
      type: "number",
      aggregate: "sum",
      cellClass: "text-center fw-normal align-middle",
      component: _vm.customZeroCrossComponent
    }
  })], 1), _vm._v(" "), _c("OvaTableToolbar", [_c("OvaTableToolbarRow", {
    scopedSlots: _vm._u([{
      key: "full",
      fn: function fn() {
        return [_c("h5", {
          staticClass: "m-0",
          domProps: {
            innerHTML: _vm._s(_vm.title)
          }
        })];
      },
      proxy: true
    }])
  }), _vm._v(" "), _c("OvaTableToolbarRow", {
    scopedSlots: _vm._u([{
      key: "left",
      fn: function fn() {
        return [_c("div", {
          staticClass: "d-flex gap-2 align-items-end flex-wrap"
        }, [_c("div", {
          staticClass: "form-group"
        }, [_c("label", {
          staticClass: "form-label small text-muted"
        }, [_vm._v("Top :")]), _vm._v(" "), _c("select", {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: _vm.filters.top,
            expression: "filters.top"
          }],
          staticClass: "form-select form-select-sm",
          staticStyle: {
            "min-width": "100px"
          },
          on: {
            change: [function ($event) {
              var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
                return o.selected;
              }).map(function (o) {
                var val = "_value" in o ? o._value : o.value;
                return val;
              });
              _vm.$set(_vm.filters, "top", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
            }, _vm.handleFilter]
          }
        }, _vm._l(_vm.tops, function (top, index) {
          return _c("option", {
            key: "top-".concat(top.value, "-").concat(index),
            domProps: {
              value: top.value
            }
          }, [_vm._v("\n                  " + _vm._s(top.label) + "\n                ")]);
        }), 0)]), _vm._v(" "), _c("div", {
          staticClass: "form-group"
        }, [_c("label", {
          staticClass: "form-label small text-muted"
        }, [_vm._v("Concerné :")]), _vm._v(" "), _c("select", {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: _vm.filters.target,
            expression: "filters.target"
          }],
          staticClass: "form-select form-select-sm",
          staticStyle: {
            "min-width": "100px"
          },
          on: {
            change: [function ($event) {
              var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
                return o.selected;
              }).map(function (o) {
                var val = "_value" in o ? o._value : o.value;
                return val;
              });
              _vm.$set(_vm.filters, "target", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
            }, _vm.handleFilter]
          }
        }, [_c("option", {
          attrs: {
            value: "client"
          }
        }, [_vm._v("Client")]), _vm._v(" "), _c("option", {
          attrs: {
            value: "caution"
          }
        }, [_vm._v("Caution(s)")])])]), _vm._v(" "), _c("div", {
          staticClass: "form-group"
        }, [_c("label", {
          staticClass: "form-label small text-muted"
        }, [_vm._v("Type :")]), _vm._v(" "), _c("select", {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: _vm.filters.type,
            expression: "filters.type"
          }],
          staticClass: "form-select form-select-sm",
          staticStyle: {
            "min-width": "100px"
          },
          on: {
            change: [function ($event) {
              var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
                return o.selected;
              }).map(function (o) {
                var val = "_value" in o ? o._value : o.value;
                return val;
              });
              _vm.$set(_vm.filters, "type", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
            }, _vm.handleFilter]
          }
        }, [_c("option", {
          attrs: {
            value: "dossier"
          }
        }, [_vm._v("Dossier")]), _vm._v(" "), _c("option", {
          attrs: {
            value: "action"
          }
        }, [_vm._v("Action")])])])])];
      },
      proxy: true
    }, {
      key: "right",
      fn: function fn() {
        return [_c("OvaTableSearch", {
          attrs: {
            placeholder: "Rechercher dans le rapport...",
            clearable: true,
            debounce: 300
          }
        })];
      },
      proxy: true
    }])
  }), _vm._v(" "), _c("OvaTableToolbarRow", {
    scopedSlots: _vm._u([{
      key: "left",
      fn: function fn() {
        return [_c("div", {
          staticClass: "d-flex gap-2 align-items-end flex-wrap"
        }, [_c("div", {
          staticClass: "form-group"
        }, [_c("label", {
          staticClass: "form-label small text-muted"
        }, [_vm._v("Année :")]), _vm._v(" "), _c("select", {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: _vm.filters.year,
            expression: "filters.year"
          }],
          staticClass: "form-select form-select-sm",
          staticStyle: {
            "min-width": "160px"
          },
          on: {
            change: [function ($event) {
              var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
                return o.selected;
              }).map(function (o) {
                var val = "_value" in o ? o._value : o.value;
                return val;
              });
              _vm.$set(_vm.filters, "year", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
            }, _vm.handleFilter]
          }
        }, [_c("option", {
          domProps: {
            value: null
          }
        }, [_vm._v("Toutes les années")]), _vm._v(" "), _vm._l(_vm.availableYears, function (y, index) {
          return _c("option", {
            key: "year-".concat(index, "-").concat(y),
            domProps: {
              value: y
            }
          }, [_vm._v("\n                  " + _vm._s(y) + "\n                ")]);
        })], 2)]), _vm._v(" "), _c("div", {
          staticClass: "form-group"
        }, [_c("label", {
          staticClass: "form-label small text-muted"
        }, [_vm._v("Mois :")]), _vm._v(" "), _c("select", {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: _vm.filters.month,
            expression: "filters.month"
          }],
          staticClass: "form-select form-select-sm",
          staticStyle: {
            "min-width": "160px"
          },
          on: {
            change: [function ($event) {
              var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
                return o.selected;
              }).map(function (o) {
                var val = "_value" in o ? o._value : o.value;
                return val;
              });
              _vm.$set(_vm.filters, "month", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
            }, _vm.handleFilter]
          }
        }, [_c("option", {
          domProps: {
            value: null
          }
        }, [_vm._v("Tous les mois")]), _vm._v(" "), _vm._l(_vm.availableMonths, function (m, index) {
          return _c("option", {
            key: "month-".concat(index, "-").concat(m.id),
            domProps: {
              value: m.id
            }
          }, [_vm._v("\n                  " + _vm._s(m.name) + "\n                ")]);
        })], 2)]), _vm._v(" "), _c("div", {
          staticClass: "form-group"
        }, [_c("button", {
          staticClass: "btn btn-outline-danger btn-sm",
          attrs: {
            disabled: _vm.internalLoading
          },
          on: {
            click: _vm.resetFilter
          }
        }, [_c("svg", {
          attrs: {
            fill: "currentColor",
            width: "16",
            height: "16",
            viewBox: "0 0 1920 1920",
            xmlns: "http://www.w3.org/2000/svg"
          }
        }, [_c("g", {
          attrs: {
            id: "SVGRepo_bgCarrier",
            "stroke-width": "0"
          }
        }), _vm._v(" "), _c("g", {
          attrs: {
            id: "SVGRepo_tracerCarrier",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }
        }), _vm._v(" "), _c("g", {
          attrs: {
            id: "SVGRepo_iconCarrier"
          }
        }, [_c("path", {
          attrs: {
            d: "M960 0v112.941c467.125 0 847.059 379.934 847.059 847.059 0 467.125-379.934 847.059-847.059 847.059-467.125 0-847.059-379.934-847.059-847.059 0-267.106 126.607-515.915 338.824-675.727v393.374h112.94V112.941H0v112.941h342.89C127.058 407.38 0 674.711 0 960c0 529.355 430.645 960 960 960s960-430.645 960-960S1489.355 0 960 0",
            "fill-rule": "evenodd"
          }
        })])])])])])];
      },
      proxy: true
    }, {
      key: "right",
      fn: function fn() {
        return [_c("div", {
          staticClass: "d-flex gap-2 align-items-center"
        }, [_vm.currentStepIdx > 0 ? _c("button", {
          staticClass: "btn btn-sm btn-outline-secondary",
          attrs: {
            disabled: _vm.internalLoading
          },
          on: {
            click: _vm.goBack
          }
        }, [_c("i", {
          staticClass: "icofont-arrow-left me-1"
        }), _vm._v("\n              Retour\n            ")]) : _vm._e()])];
      },
      proxy: true
    }])
  }), _vm._v(" "), _vm.navigationBreadcrumb.length > 0 ? _c("OvaTableToolbarRow", {
    staticClass: "m-0",
    scopedSlots: _vm._u([{
      key: "full",
      fn: function fn() {
        return [_c("nav", {
          staticClass: "mb-0",
          staticStyle: {
            "--bs-breadcrumb-divider": "'/'"
          },
          attrs: {
            "aria-label": "breadcrumb"
          }
        }, [_c("ol", {
          staticClass: "breadcrumb mb-0"
        }, _vm._l(_vm.navigationBreadcrumb, function (item, index) {
          return _c("li", {
            key: "breadcrumb-".concat(index),
            "class": ["breadcrumb-item", {
              active: index === _vm.navigationBreadcrumb.length - 1
            }],
            attrs: {
              "aria-current": index === _vm.navigationBreadcrumb.length - 1 ? "page" : null
            }
          }, [index < _vm.navigationBreadcrumb.length - 1 ? _c("a", {
            staticClass: "text-decoration-none",
            attrs: {
              href: "#"
            },
            on: {
              click: function click($event) {
                $event.preventDefault();
                return _vm.navigateToBreadcrumbStep(index);
              }
            }
          }, [_vm._v("\n                  " + _vm._s(item.label) + "\n                ")]) : _c("span", [_vm._v(_vm._s(item.label))])]);
        }), 0)])];
      },
      proxy: true
    }], null, false, 1989788219)
  }) : _vm._e()], 1), _vm._v(" "), _vm.internalLoading ? _c("div", [_c("OvaLoadingSpinner")], 1) : _vm.error ? _c("div", {
    staticClass: "text-danger small"
  }, [_c("ErrorRetry", {
    attrs: {
      error: _vm.error
    },
    on: {
      retry: _vm.refreshCurrentData
    }
  })], 1) : [_c("OvaTableResponsive", {
    staticStyle: {
      "max-height": "460px"
    }
  }, [_c("OvaTableHeader", {
    attrs: {
      sticky: ""
    }
  }), _vm._v(" "), _c("OvaTableBody"), _vm._v(" "), _c("OvaTableFooter", {
    attrs: {
      combinedCellText: "Totaux",
      combinedCellClass: "text-muted",
      maxFirstCellColSpan: 1,
      combineAllEmptyCells: true,
      enableCombinedCell: true,
      sticky: ""
    }
  })], 1), _vm._v(" "), _c("OvaTablePagination")]], 2)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/RCDashboard/Statistiques/Recouvrement/RecapByTask.vue?vue&type=template&id=3a2648e0&scoped=true":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/RCDashboard/Statistiques/Recouvrement/RecapByTask.vue?vue&type=template&id=3a2648e0&scoped=true ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("stat-table", {
    attrs: {
      loading: _vm.loading,
      title: "Rapport par action effectuée",
      useToolbar: "",
      useSearch: "",
      searchKey: ["nom_caf", "caf", "agence"],
      spacer: false,
      items: _vm.items,
      useDownload: false,
      useYearUpdater: false,
      searchMinWidth: "400px",
      searchValue: _vm.search,
      "show-empty": !_vm.error,
      useCounter: false
    },
    scopedSlots: _vm._u([{
      key: "toolbar-buttons",
      fn: function fn() {
        return [_c("div", {
          staticClass: "w-100 d-flex gap-5 flex-column px-2"
        }, [_c("div", {
          staticClass: "d-flex gap-2 justify-content-between align-items-end"
        }, [_c("div", {
          staticClass: "d-flex gap-2"
        }, [_c("div", {
          staticClass: "d-flex flex-column gap-1"
        }, [_c("label", {
          staticStyle: {
            "text-wrap": "nowrap"
          },
          attrs: {
            "for": "data-top"
          }
        }, [_vm._v("Top :")]), _vm._v(" "), _c("select", {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: _vm.top,
            expression: "top"
          }],
          staticClass: "form-select fs-small",
          attrs: {
            id: "data-top"
          },
          on: {
            change: [function ($event) {
              var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
                return o.selected;
              }).map(function (o) {
                var val = "_value" in o ? o._value : o.value;
                return val;
              });
              _vm.top = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
            }, function ($event) {
              return _vm.getData(true);
            }]
          }
        }, _vm._l(_vm.tops, function (top) {
          return _c("option", {
            key: top.value,
            attrs: {
              label: top.label
            },
            domProps: {
              value: top.value
            }
          });
        }), 0)]), _vm._v(" "), _c("div", {
          staticClass: "d-flex flex-column gap-1"
        }, [_c("label", {
          staticStyle: {
            "text-wrap": "nowrap"
          },
          attrs: {
            "for": "data-year"
          }
        }, [_vm._v("Année :")]), _vm._v(" "), _c("select", {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: _vm.year,
            expression: "year"
          }],
          staticClass: "form-select fs-small",
          attrs: {
            id: "data-year"
          },
          on: {
            change: [function ($event) {
              var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
                return o.selected;
              }).map(function (o) {
                var val = "_value" in o ? o._value : o.value;
                return val;
              });
              _vm.year = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
            }, _vm.handleYearChange]
          }
        }, [_c("option", {
          attrs: {
            label: "Toutes les années",
            selected: ""
          },
          domProps: {
            value: null
          }
        }), _vm._v(" "), _vm._l(_vm.availableYears, function (y) {
          return _c("option", {
            key: y,
            attrs: {
              label: y
            },
            domProps: {
              value: y
            }
          });
        })], 2)]), _vm._v(" "), _c("div", {
          staticClass: "d-flex flex-column gap-1"
        }, [_c("label", {
          staticStyle: {
            "text-wrap": "nowrap"
          },
          attrs: {
            "for": "data-month"
          }
        }, [_vm._v("Mois :")]), _vm._v(" "), _c("select", {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: _vm.month,
            expression: "month"
          }],
          staticClass: "form-select fs-small",
          attrs: {
            id: "data-month"
          },
          on: {
            change: [function ($event) {
              var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
                return o.selected;
              }).map(function (o) {
                var val = "_value" in o ? o._value : o.value;
                return val;
              });
              _vm.month = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
            }, function ($event) {
              return _vm.getData(true);
            }]
          }
        }, [_c("option", {
          attrs: {
            label: "Tous les mois",
            selected: ""
          },
          domProps: {
            value: null
          }
        }), _vm._v(" "), _vm._l(_vm.availableMonths, function (m) {
          return _c("option", {
            key: m.id,
            attrs: {
              label: m.name
            },
            domProps: {
              value: m.id
            }
          });
        })], 2)]), _vm._v(" "), _c("div", {
          staticClass: "d-flex flex-column gap-1 justify-content-end"
        }, [_c("button", {
          staticClass: "btn btn-success fs-small",
          on: {
            click: _vm.downloadTable
          }
        }, [_c("svg", {
          staticClass: "bi bi-download",
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "currentColor",
            viewBox: "0 0 16 16"
          }
        }, [_c("path", {
          attrs: {
            d: "M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5"
          }
        }), _vm._v(" "), _c("path", {
          attrs: {
            d: "M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z"
          }
        })])])]), _vm._v(" "), _c("div", {
          staticClass: "d-flex flex-column gap-1 justify-content-end"
        }, [_c("button", {
          staticClass: "btn btn-danger fs-small",
          on: {
            click: _vm.resetFilter
          }
        }, [_c("i", {
          staticClass: "fa fa-refresh"
        }), _vm._v(" Réinitialiser\n            ")])]), _vm._v(" "), _c("div", {
          staticClass: "d-flex flex-column gap-1 justify-content-end"
        }, [_c("button", {
          staticClass: "btn btn-primary fs-small",
          on: {
            click: _vm.toggler
          }
        }, [_vm._v("\n              Voir le recap par client\n            ")])])]), _vm._v(" "), _c("div", {
          staticClass: "col px-2 position-relative",
          staticStyle: {
            "min-width": "400px",
            "max-width": "400px"
          }
        }, [_c("div", {
          staticClass: "input-group"
        }, [_c("input", {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: _vm.search,
            expression: "search"
          }],
          staticClass: "form-control shadow-none border-0 bg-grey fs-small",
          staticStyle: {
            background: "rgb(191, 190, 190, .2)"
          },
          attrs: {
            type: "text",
            placeholder: "Recherche..."
          },
          domProps: {
            value: _vm.search
          },
          on: {
            input: function input($event) {
              if ($event.target.composing) return;
              _vm.search = $event.target.value;
            }
          }
        }), _vm._v(" "), _c("span", {
          staticClass: "input-group-text d-flex align-items-center px-2 border-0",
          staticStyle: {
            background: "rgb(191, 190, 190, .2)"
          }
        }, [_c("i", {
          staticClass: "icofont-search"
        })])])])]), _vm._v(" "), _vm.error ? _c("div", [_c("div", {
          staticClass: "alert alert-danger"
        }, [_vm._v(_vm._s(_vm.error))]), _vm._v(" "), _c("div", [_c("button", {
          staticClass: "btn btn-primary",
          on: {
            click: _vm.init
          }
        }, [_c("i", {
          staticClass: "fa fa-refresh"
        }), _vm._v(" Réessayer\n          ")])])]) : _vm._e()])];
      },
      proxy: true
    }, {
      key: "toolbar-search",
      fn: function fn() {
        return [_c("span")];
      },
      proxy: true
    }, {
      key: "tableHeader",
      fn: function fn() {
        return [_c("tr", [_c("th", {
          staticClass: "text-start align-middle fw-normal",
          attrs: {
            rowspan: "2"
          },
          on: {
            click: function click($event) {
              return _vm.sortBy("nom_caf");
            }
          }
        }, [_vm._v("\n        Durée Impayé\n        "), _vm.sortKey == "nom_caf" ? _c("span", {
          staticStyle: {
            color: "#36fb2d"
          }
        }, [!_vm.ascending ? _c("i", {
          staticClass: "icofont-caret-down",
          staticStyle: {
            "font-size": "1.2em"
          }
        }) : _c("i", {
          staticClass: "icofont-caret-up",
          staticStyle: {
            "font-size": "1.2em"
          }
        })]) : _c("span", {
          staticStyle: {
            "font-size": ".5em"
          }
        }, [_c("i", {
          staticClass: "icofont-sort fw-normal"
        })])]), _vm._v(" "), _c("th", {
          staticClass: "text-center align-middle fw-normal",
          staticStyle: {
            "min-width": "150px"
          },
          attrs: {
            rowspan: "2"
          },
          on: {
            click: function click($event) {
              return _vm.sortBy("encours_total");
            }
          }
        }, [_vm._v("\n        Encours\n        "), _vm.sortKey == "encours_total" ? _c("span", {
          staticStyle: {
            color: "#36fb2d"
          }
        }, [!_vm.ascending ? _c("i", {
          staticClass: "icofont-caret-down",
          staticStyle: {
            "font-size": "1.2em"
          }
        }) : _c("i", {
          staticClass: "icofont-caret-up",
          staticStyle: {
            "font-size": "1.2em"
          }
        })]) : _c("span", {
          staticStyle: {
            "font-size": ".5em"
          }
        }, [_c("i", {
          staticClass: "icofont-sort fw-normal"
        })])]), _vm._v(" "), _c("th", {
          staticClass: "text-center align-middle fw-normal",
          staticStyle: {
            "min-width": "150px"
          },
          attrs: {
            rowspan: "2"
          },
          on: {
            click: function click($event) {
              return _vm.sortBy("nombre_dossiers");
            }
          }
        }, [_vm._v("\n        Nombre dossiers\n        "), _vm.sortKey == "nombre_dossiers" ? _c("span", {
          staticStyle: {
            color: "#36fb2d"
          }
        }, [!_vm.ascending ? _c("i", {
          staticClass: "icofont-caret-down",
          staticStyle: {
            "font-size": "1.2em"
          }
        }) : _c("i", {
          staticClass: "icofont-caret-up",
          staticStyle: {
            "font-size": "1.2em"
          }
        })]) : _c("span", {
          staticStyle: {
            "font-size": ".5em"
          }
        }, [_c("i", {
          staticClass: "icofont-sort fw-normal"
        })])]), _vm._v(" "), _c("th", {
          staticClass: "text-center fw-normal",
          staticStyle: {
            "min-width": "150px"
          },
          attrs: {
            colspan: "3"
          }
        }, [_vm._v("Appels")]), _vm._v(" "), _c("th", {
          staticClass: "text-center fw-normal",
          staticStyle: {
            "min-width": "150px"
          },
          attrs: {
            colspan: "3"
          }
        }, [_vm._v("Visites")]), _vm._v(" "), _c("th", {
          staticClass: "text-center fw-normal",
          staticStyle: {
            "min-width": "150px"
          },
          attrs: {
            colspan: "3"
          }
        }, [_vm._v("Décharges")])]), _vm._v(" "), _c("tr", [_vm._l(3, function (i) {
          return [_c("th", {
            key: i * 3,
            staticClass: "fw-normal text-center"
          }, [_vm._v("Succès")]), _vm._v(" "), _c("th", {
            key: i * 4,
            staticClass: "fw-normal text-center"
          }, [_vm._v("Echec")]), _vm._v(" "), _c("th", {
            key: i * 5,
            staticClass: "fw-normal text-center"
          }, [_vm._v("Total")])];
        })], 2)];
      },
      proxy: true
    }, {
      key: "default",
      fn: function fn(_ref) {
        var items = _ref.items;
        return [items ? _vm._l(items, function (item, index) {
          return _c("tr", {
            key: index
          }, [_c("td", {
            "class": {
              "my-sticky": !_vm.keyInFinalAggregation
            }
          }, [_vm._v("\n          " + _vm._s(item.duree) + "\n        ")]), _vm._v(" "), _c("td", {
            staticClass: "mono text-end",
            staticStyle: {
              "font-family": "monospace !important",
              "font-size": "1.1em",
              "font-weight": "normal"
            }
          }, [_vm._v("\n          " + _vm._s(_vm._f("formatNumber")(item.encours_total)) + "\n        ")]), _vm._v(" "), _c("td", {
            staticClass: "mono text-end"
          }, [_c("ZeroCross", {
            staticStyle: {
              "font-family": "monospace !important",
              "font-size": "1.1em",
              "font-weight": "normal"
            },
            attrs: {
              value: _vm._f("formatNumber")(item.nombre_dossiers)
            }
          })], 1), _vm._v(" "), _vm._l(["appel", "visite", "decharge"], function (el) {
            return [_c("td", {
              key: el + "_execute_succes",
              staticClass: "mono text-end"
            }, [_c("ZeroCross", {
              staticStyle: {
                "font-family": "monospace !important",
                "font-size": "1.1em",
                "font-weight": "normal"
              },
              attrs: {
                value: _vm._f("formatNumber")(item[el + "_execute_succes"])
              }
            })], 1), _vm._v(" "), _c("td", {
              key: el + "_execute_echec",
              staticClass: "mono text-end"
            }, [_c("ZeroCross", {
              staticStyle: {
                "font-family": "monospace !important",
                "font-size": "1.1em",
                "font-weight": "normal"
              },
              attrs: {
                value: _vm._f("formatNumber")(item[el + "_execute_echec"])
              }
            })], 1), _vm._v(" "), _c("td", {
              key: el + "_execute_total",
              staticClass: "mono text-end"
            }, [_c("ZeroCross", {
              staticStyle: {
                "font-family": "monospace !important",
                "font-size": "1.1em",
                "font-weight": "normal"
              },
              attrs: {
                value: _vm._f("formatNumber")(item[el + "_execute_total"])
              }
            })], 1)];
          })], 2);
        }) : _vm._e()];
      }
    }, _vm.total ? {
      key: "total",
      fn: function fn() {
        var _vm$total, _vm$total2;
        return [_c("tr", {
          staticClass: "table-light"
        }, [_c("th", {
          staticClass: "my-sticky ps-2"
        }, [_vm._v("Total")]), _vm._v(" "), _c("th", {
          staticClass: "mono mono text-end",
          staticStyle: {
            "font-family": "monospace !important",
            "font-size": "1.1em",
            "font-weight": "normal"
          }
        }, [_vm._v("\n        " + _vm._s(_vm._f("formatNumber")((_vm$total = _vm.total) === null || _vm$total === void 0 ? void 0 : _vm$total.encours_total)) + "\n      ")]), _vm._v(" "), _c("th", {
          staticClass: "mono mono text-end"
        }, [_vm._v("\n        " + _vm._s(_vm._f("formatNumber")((_vm$total2 = _vm.total) === null || _vm$total2 === void 0 ? void 0 : _vm$total2.nombre_dossiers)) + "\n      ")]), _vm._v(" "), _vm._l(["appel", "visite", "decharge"], function (el) {
          return [_c("td", {
            key: el + "_execute_succes-1",
            staticClass: "mono text-end"
          }, [_c("ZeroCross", {
            staticStyle: {
              "font-family": "monospace !important",
              "font-size": "1.1em",
              "font-weight": "normal"
            },
            attrs: {
              value: _vm._f("formatNumber")(_vm.total[el + "_execute_succes"])
            }
          })], 1), _vm._v(" "), _c("td", {
            key: el + "_execute_echec-2",
            staticClass: "mono text-end"
          }, [_c("ZeroCross", {
            staticStyle: {
              "font-family": "monospace !important",
              "font-size": "1.1em",
              "font-weight": "normal"
            },
            attrs: {
              value: _vm._f("formatNumber")(_vm.total[el + "_execute_echec"])
            }
          })], 1), _vm._v(" "), _c("td", {
            key: el + "_execute_total-3",
            staticClass: "mono text-end"
          }, [_c("ZeroCross", {
            staticStyle: {
              "font-family": "monospace !important",
              "font-size": "1.1em",
              "font-weight": "normal"
            },
            attrs: {
              value: _vm._f("formatNumber")(_vm.total[el + "_execute_total"])
            }
          })], 1)];
        })], 2)];
      },
      proxy: true
    } : null], null, true)
  });
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/RCDashboard/Statistiques/Recouvrement/RecapTaskExecution.vue?vue&type=template&id=d8cf2642&scoped=true":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/RCDashboard/Statistiques/Recouvrement/RecapTaskExecution.vue?vue&type=template&id=d8cf2642&scoped=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.aggregateur ? _c("div", [_vm.aggregateur !== "extended" ? _c("div", {
    staticClass: "recap-task-execution"
  }, [_c("OvaTableSuite", {
    attrs: {
      data: _vm.filteredItems,
      loading: _vm.loading,
      bordered: "",
      hover: "",
      itemsPerPage: 20,
      processingMode: "local",
      "clickable-rows": "",
      "default-sort-key": "encours_total",
      "default-sort-direction": "desc"
    },
    on: {
      "row-click": _vm.onSelect
    }
  }, [_c("OvaTableColumn", {
    attrs: {
      when: function when() {
        return _vm.shouldShowMatricule;
      },
      field: "matricule_client",
      label: "Matricule",
      sortable: "",
      type: "text",
      headerClass: "fw-normal ova-sticky text-center align-middle",
      cellClass: "ova-sticky text-uppercase text-center align-middle",
      cellStyle: "min-width: 200px;",
      before: "nom_caf"
    }
  }), _vm._v(" "), _c("OvaTableColumn", {
    attrs: {
      field: "nom_caf",
      label: "Nom",
      sortable: "",
      filterable: "",
      type: "text",
      headerStyle: "min-width: 200px;",
      headerClass: ["fw-normal text-center align-middle", {
        "ova-sticky": !_vm.keyInFinalAggregation
      }],
      cellClass: ["text-uppercase text-center align-middle", {
        "ova-sticky": !_vm.keyInFinalAggregation
      }],
      cellStyle: "min-width: 200px;"
    }
  }), _vm._v(" "), _c("OvaTableColumn", {
    attrs: {
      when: function when() {
        return _vm.shouldShowCAF;
      },
      field: "caf",
      label: "CAF",
      sortable: "",
      type: "text",
      headerClass: "fw-normal text-center align-middle",
      after: "nom_caf",
      cellClass: "text-uppercase text-center align-middle",
      cellStyle: "min-width: 200px;"
    }
  }), _vm._v(" "), _c("OvaTableColumn", {
    attrs: {
      when: function when() {
        return _vm.shouldShowAgence;
      },
      field: "agence",
      label: "Agence",
      sortable: "",
      filterable: "",
      type: "text",
      cellClass: "text-center fw-normal align-middle",
      cellStyle: "min-width: 200px;"
    }
  }), _vm._v(" "), _c("OvaTableColumn", {
    attrs: {
      field: "encours_total",
      label: "Encours",
      sortable: "",
      type: "currency",
      aggregate: "sum",
      cellClass: "text-end fw-normal align-middle",
      cellStyle: "min-width: 180px;"
    }
  }), _vm._v(" "), _c("OvaTableColumn", {
    attrs: {
      field: "encours_impaye",
      label: "Encours Impayé",
      sortable: "",
      type: "currency",
      aggregate: "sum",
      cellClass: "text-end fw-normal align-middle",
      cellStyle: "min-width: 180px;"
    }
  }), _vm._v(" "), _c("OvaTableColumn", {
    attrs: {
      field: "somme_recouvre",
      label: "Somme Recouvrée",
      sortable: "",
      type: "currency",
      aggregate: "sum",
      cellClass: "text-end fw-normal align-middle",
      cellStyle: "min-width: 180px;"
    }
  }), _vm._v(" "), _c("OvaTableColumn", {
    attrs: {
      field: "nombre_dossiers",
      label: "Nombre dossiers",
      sortable: "",
      type: "number",
      aggregate: "sum",
      cellClass: "text-center fw-normal align-middle",
      cellStyle: "min-width: 180px;"
    }
  }), _vm._v(" "), _c("OvaTableColumn", {
    attrs: {
      keyName: "appels-group",
      label: "Appels",
      cellClass: "text-center fw-normal align-middle"
    }
  }, [_c("OvaTableColumn", {
    attrs: {
      field: "appel_execute_succes",
      label: "Succès",
      type: "number",
      aggregate: "sum",
      cellClass: "text-center fw-normal align-middle",
      component: _vm.customZeroCrossComponent
    }
  }), _vm._v(" "), _c("OvaTableColumn", {
    attrs: {
      field: "appel_execute_echec",
      label: "Échec",
      type: "number",
      aggregate: "sum",
      cellClass: "text-center fw-normal align-middle",
      component: _vm.customZeroCrossComponent,
      before: "appel_execute_succes"
    }
  }), _vm._v(" "), _c("OvaTableColumn", {
    attrs: {
      field: "appel_execute_total",
      label: "Total",
      type: "number",
      aggregate: "sum",
      cellClass: "text-center fw-normal align-middle",
      component: _vm.customZeroCrossComponent
    }
  })], 1), _vm._v(" "), _c("OvaTableColumn", {
    attrs: {
      keyName: "visites-group",
      label: "Visites",
      cellClass: "text-center fw-normal align-middle"
    }
  }, [_c("OvaTableColumn", {
    attrs: {
      field: "visite_execute_succes",
      label: "Succès",
      type: "number",
      aggregate: "sum",
      cellClass: "text-center fw-normal align-middle",
      component: _vm.customZeroCrossComponent
    }
  }), _vm._v(" "), _c("OvaTableColumn", {
    attrs: {
      field: "visite_execute_echec",
      label: "Échec",
      type: "number",
      aggregate: "sum",
      cellClass: "text-center fw-normal align-middle",
      component: _vm.customZeroCrossComponent
    }
  }), _vm._v(" "), _c("OvaTableColumn", {
    attrs: {
      field: "visite_execute_total",
      label: "Total",
      type: "number",
      aggregate: "sum",
      cellClass: "text-center fw-normal align-middle",
      component: _vm.customZeroCrossComponent
    }
  })], 1), _vm._v(" "), _c("OvaTableColumn", {
    attrs: {
      keyName: "decharges-group",
      label: "Décharges",
      cellClass: "text-center fw-normal align-middle"
    }
  }, [_c("OvaTableColumn", {
    attrs: {
      field: "decharge_execute_succes",
      label: "Succès",
      type: "number",
      aggregate: "sum",
      cellClass: "text-center fw-normal align-middle",
      component: _vm.customZeroCrossComponent
    }
  }), _vm._v(" "), _c("OvaTableColumn", {
    attrs: {
      field: "decharge_execute_echec",
      label: "Échec",
      type: "number",
      aggregate: "sum",
      cellClass: "text-center fw-normal align-middle",
      component: _vm.customZeroCrossComponent
    }
  }), _vm._v(" "), _c("OvaTableColumn", {
    attrs: {
      field: "decharge_execute_total",
      label: "Total",
      type: "number",
      aggregate: "sum",
      cellClass: "text-center fw-normal align-middle",
      component: _vm.customZeroCrossComponent
    }
  })], 1), _vm._v(" "), _c("OvaTableToolbar", [_c("OvaTableToolbarRow", {
    scopedSlots: _vm._u([{
      key: "full",
      fn: function fn() {
        return [_c("h5", {
          staticClass: "m-0",
          domProps: {
            innerHTML: _vm._s(_vm.title)
          }
        })];
      },
      proxy: true
    }], null, false, 2837367996)
  }), _vm._v(" "), _c("OvaTableToolbarRow", {
    scopedSlots: _vm._u([{
      key: "left",
      fn: function fn() {
        return [_c("div", {
          staticClass: "d-flex gap-2 align-items-end flex-wrap"
        }, [_c("div", {
          staticClass: "form-group"
        }, [_c("label", {
          staticClass: "form-label small text-muted"
        }, [_vm._v("Groupé par :")]), _vm._v(" "), _c("select", {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: _vm.aggregateur,
            expression: "aggregateur"
          }],
          staticClass: "form-select form-select-sm",
          staticStyle: {
            "min-width": "150px"
          },
          on: {
            change: [function ($event) {
              var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
                return o.selected;
              }).map(function (o) {
                var val = "_value" in o ? o._value : o.value;
                return val;
              });
              _vm.aggregateur = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
            }, _vm.handleAggregator]
          }
        }, _vm._l(_vm.cAggregators, function (a, index) {
          return _c("option", {
            key: "agg-".concat(a.value, "-").concat(index),
            domProps: {
              value: a.value
            }
          }, [_vm._v("\n                    " + _vm._s(a.label) + "\n                  ")]);
        }), 0)]), _vm._v(" "), _c("div", {
          staticClass: "form-group"
        }, [_c("label", {
          staticClass: "form-label small text-muted"
        }, [_vm._v("Top :")]), _vm._v(" "), _c("select", {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: _vm.top,
            expression: "top"
          }],
          staticClass: "form-select form-select-sm",
          staticStyle: {
            "min-width": "100px"
          },
          on: {
            change: [function ($event) {
              var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
                return o.selected;
              }).map(function (o) {
                var val = "_value" in o ? o._value : o.value;
                return val;
              });
              _vm.top = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
            }, function ($event) {
              return _vm.getData(true);
            }]
          }
        }, _vm._l(_vm.tops, function (top, index) {
          return _c("option", {
            key: "top-".concat(top.value, "-").concat(index),
            domProps: {
              value: top.value
            }
          }, [_vm._v("\n                    " + _vm._s(top.label) + "\n                  ")]);
        }), 0)]), _vm._v(" "), _c("div", {
          staticClass: "form-group"
        }, [_c("label", {
          staticClass: "form-label small text-muted"
        }, [_vm._v("Concerné :")]), _vm._v(" "), _c("select", {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: _vm.target,
            expression: "target"
          }],
          staticClass: "form-select form-select-sm",
          staticStyle: {
            "min-width": "100px"
          },
          on: {
            change: [function ($event) {
              var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
                return o.selected;
              }).map(function (o) {
                var val = "_value" in o ? o._value : o.value;
                return val;
              });
              _vm.target = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
            }, function ($event) {
              return _vm.getData(true);
            }]
          }
        }, [_c("option", {
          attrs: {
            value: "client"
          }
        }, [_vm._v("Client")]), _vm._v(" "), _c("option", {
          attrs: {
            value: "caution"
          }
        }, [_vm._v("Caution(s)")])])]), _vm._v(" "), _c("div", {
          staticClass: "form-group"
        }, [_c("label", {
          staticClass: "form-label small text-muted"
        }, [_vm._v("Type :")]), _vm._v(" "), _c("select", {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: _vm.useType,
            expression: "useType"
          }],
          staticClass: "form-select form-select-sm",
          staticStyle: {
            "min-width": "100px"
          },
          attrs: {
            disabled: _vm.aggregateur == "client"
          },
          on: {
            change: [function ($event) {
              var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
                return o.selected;
              }).map(function (o) {
                var val = "_value" in o ? o._value : o.value;
                return val;
              });
              _vm.useType = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
            }, function ($event) {
              return _vm.getData(true);
            }]
          }
        }, [_c("option", {
          attrs: {
            value: "client"
          }
        }, [_vm._v("Client")]), _vm._v(" "), _c("option", {
          attrs: {
            value: "action"
          }
        }, [_vm._v("Action")])])]), _vm._v(" "), _c("div", {
          staticClass: "form-group"
        }, [_c("label", {
          staticClass: "form-label small text-muted"
        }, [_vm._v("Par :")]), _vm._v(" "), _c("select", {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: _vm.duree,
            expression: "duree"
          }],
          staticClass: "form-select form-select-sm",
          staticStyle: {
            "min-width": "215px"
          },
          on: {
            change: [function ($event) {
              var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
                return o.selected;
              }).map(function (o) {
                var val = "_value" in o ? o._value : o.value;
                return val;
              });
              _vm.duree = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
            }, function ($event) {
              return _vm.getData(true);
            }]
          }
        }, [_c("option", {
          domProps: {
            value: null
          }
        }, [_vm._v("Toutes durées confondues")]), _vm._v(" "), _vm._l(_vm.__par__, function (d, index) {
          return _c("option", {
            key: "par-".concat(index),
            domProps: {
              value: d
            }
          }, [_vm._v("\n                    " + _vm._s(d.label) + "\n                  ")]);
        })], 2)])])];
      },
      proxy: true
    }, {
      key: "right",
      fn: function fn() {
        return [_c("OvaTableSearch", {
          attrs: {
            placeholder: "Rechercher dans le rapport...",
            clearable: true,
            debounce: 300
          }
        })];
      },
      proxy: true
    }], null, false, 2367446916)
  }), _vm._v(" "), _c("OvaTableToolbarRow", {
    scopedSlots: _vm._u([{
      key: "left",
      fn: function fn() {
        return [_c("div", {
          staticClass: "d-flex gap-2 align-items-end flex-wrap"
        }, [_c("div", {
          staticClass: "form-group"
        }, [_c("label", {
          staticClass: "form-label small text-muted"
        }, [_vm._v("Année :")]), _vm._v(" "), _c("select", {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: _vm.year,
            expression: "year"
          }],
          staticClass: "form-select form-select-sm",
          staticStyle: {
            "min-width": "160px"
          },
          on: {
            change: [function ($event) {
              var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
                return o.selected;
              }).map(function (o) {
                var val = "_value" in o ? o._value : o.value;
                return val;
              });
              _vm.year = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
            }, _vm.handleYearChange]
          }
        }, [_c("option", {
          domProps: {
            value: null
          }
        }, [_vm._v("Toutes les années")]), _vm._v(" "), _vm._l(_vm.availableYears, function (y, index) {
          return _c("option", {
            key: "year-".concat(index, "-").concat(y),
            domProps: {
              value: y
            }
          }, [_vm._v("\n                    " + _vm._s(y) + "\n                  ")]);
        })], 2)]), _vm._v(" "), _c("div", {
          staticClass: "form-group"
        }, [_c("label", {
          staticClass: "form-label small text-muted"
        }, [_vm._v("Mois :")]), _vm._v(" "), _c("select", {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: _vm.month,
            expression: "month"
          }],
          staticClass: "form-select form-select-sm",
          staticStyle: {
            "min-width": "160px"
          },
          on: {
            change: [function ($event) {
              var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
                return o.selected;
              }).map(function (o) {
                var val = "_value" in o ? o._value : o.value;
                return val;
              });
              _vm.month = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
            }, function ($event) {
              return _vm.getData(true);
            }]
          }
        }, [_c("option", {
          domProps: {
            value: null
          }
        }, [_vm._v("Tous les mois")]), _vm._v(" "), _vm._l(_vm.availableMonths, function (m, index) {
          return _c("option", {
            key: "month-".concat(index, "-").concat(m.id),
            domProps: {
              value: m.id
            }
          }, [_vm._v("\n                    " + _vm._s(m.name) + "\n                  ")]);
        })], 2)]), _vm._v(" "), _c("div", {
          staticClass: "form-group"
        }, [_c("button", {
          staticClass: "btn btn-success btn-sm me-2",
          attrs: {
            disabled: _vm.loading
          },
          on: {
            click: _vm.downloadTable
          }
        }, [_c("svg", {
          staticClass: "bi bi-download",
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "currentColor",
            viewBox: "0 0 16 16"
          }
        }, [_c("path", {
          attrs: {
            d: "M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5"
          }
        }), _vm._v(" "), _c("path", {
          attrs: {
            d: "M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z"
          }
        })])]), _vm._v(" "), _c("button", {
          staticClass: "btn btn-outline-danger btn-sm",
          attrs: {
            disabled: _vm.loading
          },
          on: {
            click: _vm.resetFilter
          }
        }, [_c("svg", {
          attrs: {
            fill: "currentColor",
            width: "16",
            height: "16",
            viewBox: "0 0 1920 1920",
            xmlns: "http://www.w3.org/2000/svg"
          }
        }, [_c("g", {
          attrs: {
            id: "SVGRepo_bgCarrier",
            "stroke-width": "0"
          }
        }), _vm._v(" "), _c("g", {
          attrs: {
            id: "SVGRepo_tracerCarrier",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }
        }), _vm._v(" "), _c("g", {
          attrs: {
            id: "SVGRepo_iconCarrier"
          }
        }, [_c("path", {
          attrs: {
            d: "M960 0v112.941c467.125 0 847.059 379.934 847.059 847.059 0 467.125-379.934 847.059-847.059 847.059-467.125 0-847.059-379.934-847.059-847.059 0-267.106 126.607-515.915 338.824-675.727v393.374h112.94V112.941H0v112.941h342.89C127.058 407.38 0 674.711 0 960c0 529.355 430.645 960 960 960s960-430.645 960-960S1489.355 0 960 0",
            "fill-rule": "evenodd"
          }
        })])])])])])];
      },
      proxy: true
    }, {
      key: "right",
      fn: function fn() {
        return [_c("div", {
          staticClass: "d-flex gap-2 align-items-center"
        }, [_vm.aggregateur != "dex" && _vm.history.length ? _c("button", {
          staticClass: "btn btn-sm btn-outline-secondary",
          on: {
            click: _vm.goBack
          }
        }, [_c("i", {
          staticClass: "icofont-arrow-left me-1"
        }), _vm._v("\n                Retour\n              ")]) : _vm._e()])];
      },
      proxy: true
    }], null, false, 1338527587)
  })], 1), _vm._v(" "), _vm.loading ? _c("div", [_c("OvaLoadingSpinner")], 1) : _vm.error ? _c("div", {
    staticClass: "text-danger small"
  }, [_c("ErrorRetry", {
    attrs: {
      error: _vm.error
    },
    on: {
      retry: _vm.init
    }
  })], 1) : [_c("OvaTableResponsive", {
    staticStyle: {
      "max-height": "460px"
    }
  }, [_c("OvaTableHeader", {
    attrs: {
      sticky: ""
    }
  }), _vm._v(" "), _c("OvaTableBody"), _vm._v(" "), _c("OvaTableFooter", {
    attrs: {
      combinedCellText: "Totaux",
      combinedCellClass: "text-muted",
      maxFirstCellColSpan: 1,
      combineAllEmptyCells: true,
      enableCombinedCell: true,
      sticky: ""
    }
  })], 1), _vm._v(" "), _c("OvaTablePagination")]], 2)], 1) : _vm._e(), _vm._v(" "), _vm.showRecoveryTeamReport ? _c("div", {}, [_c("NextRecapTaskExecution", {
    attrs: {
      user: _vm.__user__,
      loading: _vm.loading,
      filiale: _vm.filiale
    },
    on: {
      loading: function loading($event) {
        _vm.loading = $event;
      }
    }
  })], 1) : _vm._e()]) : _vm._e();
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/RCDashboard/Statistiques/Recouvrement/TaskRecap.vue?vue&type=template&id=1b504a82":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/RCDashboard/Statistiques/Recouvrement/TaskRecap.vue?vue&type=template&id=1b504a82 ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("DailyTaskRecap", {
    attrs: {
      durees: _vm.__par__
    }
  }), _vm._v(" "), _c("h3", [_vm._v("Rapport d'Execution de Tâche selon la Durée de l'Impayé")]), _vm._v(" "), _vm.toggle ? _c("ExecutedTaskRecapByClient", {
    on: {
      "toggle-view": function toggleView($event) {
        _vm.toggle = !_vm.toggle;
      }
    }
  }) : _c("RecapByTask", {
    on: {
      "toggle-view": function toggleView($event) {
        _vm.toggle = !_vm.toggle;
      }
    }
  }), _vm._v(" "), _c("RecapTaskExecution"), _vm._v(" "), _c("TaskRecapHistory")], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/RCDashboard/Statistiques/Recouvrement/TaskRecapHistory.vue?vue&type=template&id=a578f9f6&scoped=true":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/RCDashboard/Statistiques/Recouvrement/TaskRecapHistory.vue?vue&type=template&id=a578f9f6&scoped=true ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("stat-table", {
    attrs: {
      loading: _vm.loading,
      items: _vm.rows,
      title: _vm.title,
      spacer: false,
      useDownload: false,
      useCounter: false
    },
    scopedSlots: _vm._u([{
      key: "header",
      fn: function fn() {
        return [_c("div", {
          staticClass: "d-flex"
        }, [_c("h3", [_vm._v(_vm._s(_vm.title))])])];
      },
      proxy: true
    }, {
      key: "toolbar-buttons",
      fn: function fn() {
        return [_c("div", {
          staticClass: "w-100 d-flex gap-5 flex-column px-2"
        }, [_c("div", {
          staticClass: "d-flex gap-2"
        }, [_c("div", {
          staticClass: "d-flex flex-column gap-1"
        }, [_c("label", {
          staticStyle: {
            "text-wrap": "nowrap"
          },
          attrs: {
            "for": "data-action"
          }
        }, [_vm._v("Action :")]), _vm._v(" "), _c("select", {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: _vm.filters.action,
            expression: "filters.action"
          }],
          staticClass: "form-select fs-small",
          attrs: {
            id: "data-action"
          },
          on: {
            change: [function ($event) {
              var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
                return o.selected;
              }).map(function (o) {
                var val = "_value" in o ? o._value : o.value;
                return val;
              });
              _vm.$set(_vm.filters, "action", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
            }, function ($event) {
              return _vm.getData(true);
            }]
          }
        }, _vm._l(_vm.actions, function (a) {
          return _c("option", {
            key: a.value,
            attrs: {
              label: a.label
            },
            domProps: {
              value: a.value
            }
          });
        }), 0)]), _vm._v(" "), _c("div", {
          staticClass: "d-flex flex-column gap-1"
        }, [_c("label", {
          staticStyle: {
            "text-wrap": "nowrap"
          },
          attrs: {
            "for": "data-year"
          }
        }, [_vm._v("Année :")]), _vm._v(" "), _c("select", {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: _vm.filters.year,
            expression: "filters.year"
          }],
          staticClass: "form-select fs-small",
          attrs: {
            id: "data-year"
          },
          on: {
            change: [function ($event) {
              var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
                return o.selected;
              }).map(function (o) {
                var val = "_value" in o ? o._value : o.value;
                return val;
              });
              _vm.$set(_vm.filters, "year", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
            }, function ($event) {
              return _vm.getData(true);
            }]
          }
        }, _vm._l(_vm.availableYears, function (y) {
          return _c("option", {
            key: y,
            attrs: {
              label: y
            },
            domProps: {
              value: y
            }
          });
        }), 0)]), _vm._v(" "), _c("div", {
          staticClass: "d-flex flex-column gap-1"
        }, [_c("label", {
          staticStyle: {
            "text-wrap": "nowrap"
          },
          attrs: {
            "for": "data-use-type"
          }
        }, [_vm._v("Concerné :")]), _vm._v(" "), _c("select", {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: _vm.filters.target,
            expression: "filters.target"
          }],
          staticClass: "form-select fs-small",
          attrs: {
            id: "data-use-type"
          },
          on: {
            change: [function ($event) {
              var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
                return o.selected;
              }).map(function (o) {
                var val = "_value" in o ? o._value : o.value;
                return val;
              });
              _vm.$set(_vm.filters, "target", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
            }, function ($event) {
              return _vm.getData(true);
            }]
          }
        }, [_c("option", {
          attrs: {
            value: "client"
          }
        }, [_vm._v("Client")]), _vm._v(" "), _c("option", {
          attrs: {
            value: "caution"
          }
        }, [_vm._v("Caution(s)")])])]), _vm._v(" "), _c("div", {
          staticClass: "d-flex flex-column gap-1"
        }, [_c("label", {
          staticStyle: {
            "text-wrap": "nowrap"
          },
          attrs: {
            "for": "data-use-type"
          }
        }, [_vm._v("Type :")]), _vm._v(" "), _c("select", {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: _vm.filters.use_type,
            expression: "filters.use_type"
          }],
          staticClass: "form-select fs-small",
          attrs: {
            id: "data-use-type"
          },
          on: {
            change: [function ($event) {
              var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
                return o.selected;
              }).map(function (o) {
                var val = "_value" in o ? o._value : o.value;
                return val;
              });
              _vm.$set(_vm.filters, "use_type", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
            }, function ($event) {
              return _vm.getData(true);
            }]
          }
        }, [_c("option", {
          attrs: {
            selected: "",
            value: "client",
            label: "Client"
          }
        }), _vm._v(" "), _c("option", {
          attrs: {
            value: "action",
            label: "Action"
          }
        })])]), _vm._v(" "), _c("div", {
          staticClass: "d-flex flex-column gap-1 justify-content-end"
        }, [_c("button", {
          staticClass: "btn btn-success fs-small",
          on: {
            click: _vm.downloadTable
          }
        }, [_c("svg", {
          staticClass: "bi bi-download",
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "currentColor",
            viewBox: "0 0 16 16"
          }
        }, [_c("path", {
          attrs: {
            d: "M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5"
          }
        }), _vm._v(" "), _c("path", {
          attrs: {
            d: "M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z"
          }
        })])])]), _vm._v(" "), _c("div", {
          staticClass: "d-flex flex-column gap-1 justify-content-end"
        }, [_c("button", {
          staticClass: "btn btn-danger fs-small",
          on: {
            click: _vm.resetFilter
          }
        }, [_c("i", {
          staticClass: "fa fa-refresh"
        }), _vm._v(" Réinitialiser\n            ")])])]), _vm._v(" "), _vm.error ? _c("div", [_c("div", {
          staticClass: "alert alert-danger"
        }, [_vm._v(_vm._s(_vm.error))]), _vm._v(" "), _c("div", [_c("button", {
          staticClass: "btn btn-primary",
          on: {
            click: _vm.init
          }
        }, [_c("i", {
          staticClass: "fa fa-refresh"
        }), _vm._v(" Réessayer\n            ")])])]) : _vm._e()])];
      },
      proxy: true
    }, {
      key: "tableHeader",
      fn: function fn() {
        return [_c("tr", [_c("th", {
          staticClass: "tb-sticky text-start align-middle fw-normal",
          staticStyle: {
            "vertical-align": "middle",
            "text-align": "center",
            "max-width": "fit-content !important",
            "min-width": "200px",
            width: "200px",
            "border-top": "solid 1px black",
            "border-bottom": "solid 1px black"
          },
          attrs: {
            rowspan: "2"
          }
        }, [_vm._v("\n          Durée Impayé\n        ")]), _vm._v(" "), _vm._l(_vm.months, function (m, index) {
          return _c("th", {
            key: index,
            staticClass: "text-center fw-normal text-capitalize",
            staticStyle: {
              "min-width": "150px",
              "border-top": "solid 1px black"
            },
            attrs: {
              colspan: 3
            }
          }, [_vm._v("\n          " + _vm._s(m.name) + "\n        ")]);
        })], 2), _vm._v(" "), _c("tr", [_vm._l(_vm.months, function (_, index) {
          return [_c("th", {
            key: index,
            staticClass: "fw-normal text-center"
          }, [_vm._v("Succès")]), _vm._v(" "), _c("th", {
            key: "".concat(index, "-1"),
            staticClass: "fw-normal text-center"
          }, [_vm._v("Echec")]), _vm._v(" "), _c("th", {
            key: "".concat(index, "-2"),
            staticClass: "fw-normal text-center"
          }, [_vm._v("Total")])];
        })], 2)];
      },
      proxy: true
    }, {
      key: "default",
      fn: function fn(_ref) {
        var items = _ref.items;
        return [items ? _vm._l(items, function (item, index) {
          return _c("tr", {
            key: index,
            style: index == 0 ? "border-top: 2px solid black;" : ""
          }, [_c("td", {
            staticClass: "tb-sticky text-start align-middle fw-normal",
            staticStyle: {
              "border-right": "solid 1px black"
            }
          }, [_vm._v("\n            " + _vm._s(item.label) + "\n          ")]), _vm._v(" "), _vm._l(_vm.months, function (m, index) {
            var _item$bucket, _item$bucket2, _item$bucket3;
            return [_c("td", {
              key: index,
              staticClass: "text-center fw-normal"
            }, [_c("ZeroCross", {
              staticStyle: {
                "font-family": "monospace !important",
                "font-size": "1.1em",
                "font-weight": "normal"
              },
              attrs: {
                value: item === null || item === void 0 || (_item$bucket = item.bucket) === null || _item$bucket === void 0 || (_item$bucket = _item$bucket["".concat(m.number)]) === null || _item$bucket === void 0 ? void 0 : _item$bucket.oui_count
              }
            })], 1), _vm._v(" "), _c("td", {
              key: "".concat(index, "-1"),
              staticClass: "text-center fw-normal"
            }, [_c("ZeroCross", {
              staticStyle: {
                "font-family": "monospace !important",
                "font-size": "1.1em",
                "font-weight": "normal"
              },
              attrs: {
                value: item === null || item === void 0 || (_item$bucket2 = item.bucket) === null || _item$bucket2 === void 0 || (_item$bucket2 = _item$bucket2["".concat(m.number)]) === null || _item$bucket2 === void 0 ? void 0 : _item$bucket2.non_count
              }
            })], 1), _vm._v(" "), _c("td", {
              key: "".concat(index, "-2"),
              staticClass: "text-center fw-normal",
              staticStyle: {
                "border-right": "solid 1px black"
              }
            }, [_c("ZeroCross", {
              staticStyle: {
                "font-family": "monospace !important",
                "font-size": "1.1em",
                "font-weight": "normal"
              },
              attrs: {
                value: item === null || item === void 0 || (_item$bucket3 = item.bucket) === null || _item$bucket3 === void 0 || (_item$bucket3 = _item$bucket3["".concat(m.number)]) === null || _item$bucket3 === void 0 ? void 0 : _item$bucket3.total_count
              }
            })], 1)];
          })], 2);
        }) : _vm._e()];
      }
    }, {
      key: "total",
      fn: function fn() {
        return [_c("tr", [_c("td", {
          staticClass: "tb-sticky",
          staticStyle: {
            "border-right": "solid 1px black",
            "border-top": "solid 1px black !important",
            "border-bottom": "solid 1px black !important"
          }
        }, [_vm._v("\n          Total")]), _vm._v(" "), _vm._l(_vm.months, function (m, index) {
          var _vm$totals$m$number, _vm$totals$m$number2, _vm$totals$m$number3;
          return [_c("td", {
            key: index,
            staticClass: "text-center fw-normal",
            staticStyle: {
              "border-top": "solid 1px black",
              "border-bottom": "solid 1px black"
            }
          }, [_c("ZeroCross", {
            staticStyle: {
              "font-family": "monospace !important",
              "font-size": "1.1em",
              "font-weight": "normal"
            },
            attrs: {
              value: (_vm$totals$m$number = _vm.totals[m.number]) === null || _vm$totals$m$number === void 0 ? void 0 : _vm$totals$m$number.oui
            }
          })], 1), _vm._v(" "), _c("td", {
            key: "".concat(index, "-1"),
            staticClass: "text-center fw-normal",
            staticStyle: {
              "border-top": "solid 1px black",
              "border-bottom": "solid 1px black"
            }
          }, [_c("ZeroCross", {
            staticStyle: {
              "font-family": "monospace !important",
              "font-size": "1.1em",
              "font-weight": "normal"
            },
            attrs: {
              value: (_vm$totals$m$number2 = _vm.totals[m.number]) === null || _vm$totals$m$number2 === void 0 ? void 0 : _vm$totals$m$number2.non
            }
          })], 1), _vm._v(" "), _c("td", {
            key: "".concat(index, "-2"),
            staticClass: "text-center fw-normal",
            staticStyle: {
              "border-right": "solid 1px black",
              "border-top": "solid 1px black",
              "border-bottom": "solid 1px black"
            }
          }, [_c("ZeroCross", {
            staticStyle: {
              "font-family": "monospace !important",
              "font-size": "1.1em",
              "font-weight": "normal"
            },
            attrs: {
              value: (_vm$totals$m$number3 = _vm.totals[m.number]) === null || _vm$totals$m$number3 === void 0 ? void 0 : _vm$totals$m$number3.total
            }
          })], 1)];
        })], 2)];
      },
      proxy: true
    }])
  })], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/RCDashboard/Statistiques/Recouvrement/DailyTaskRecap.vue?vue&type=style&index=0&id=388be928&scoped=true&lang=css":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/RCDashboard/Statistiques/Recouvrement/DailyTaskRecap.vue?vue&type=style&index=0&id=388be928&scoped=true&lang=css ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.tb-sticky[data-v-388be928] {\r\n    background-color: rgb(241, 241, 241) !important;\r\n    /* border: 2px solid rgb(241, 241, 241) !important; */\r\n    position: sticky;\r\n    left: -2px;\r\n    z-index: 10;\n}\nth.tb-sticky[data-v-388be928] {\r\n    top: 0 !important;\r\n    z-index: 2000 !important;\r\n    position: sticky;\r\n    color: black;\n}\n.fs-small[data-v-388be928] {\r\n    font-size: 0.8rem;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/RCDashboard/Statistiques/Recouvrement/ExecutedTaskRecapByClient.vue?vue&type=style&index=0&id=9e0adedc&scoped=true&lang=css":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/RCDashboard/Statistiques/Recouvrement/ExecutedTaskRecapByClient.vue?vue&type=style&index=0&id=9e0adedc&scoped=true&lang=css ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.sortable i[data-v-9e0adedc] {\r\n  color: red;\n}\n.fs-small[data-v-9e0adedc] {\r\n  font-size: 0.8rem;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/RCDashboard/Statistiques/Recouvrement/NextRecapTaskExecution.vue?vue&type=style&index=0&id=38e28a32&scoped=true&lang=css":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/RCDashboard/Statistiques/Recouvrement/NextRecapTaskExecution.vue?vue&type=style&index=0&id=38e28a32&scoped=true&lang=css ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.next-recap-task-execution[data-v-38e28a32] {\r\n  position: relative;\n}\n.form-group[data-v-38e28a32] {\r\n  margin-bottom: 0.5rem;\n}\n.form-label[data-v-38e28a32] {\r\n  margin-bottom: 0.25rem;\r\n  font-weight: 500;\n}\n.form-select-sm[data-v-38e28a32] {\r\n  font-size: 0.875rem;\r\n  padding: 0.25rem 0.5rem;\n}\n.btn-sm[data-v-38e28a32] {\r\n  padding: 0.25rem 0.75rem;\r\n  font-size: 0.875rem;\n}\r\n\r\n/* Responsive adjustments */\n@media (max-width: 768px) {\n.nextrecap-task-execution[data-v-38e28a32] {\r\n    padding: 0.5rem;\n}\n.form-group[data-v-38e28a32] {\r\n    margin-bottom: 0.75rem;\n}\n}\r\n\r\n/* Button group styling */\n.btn-group .btn[data-v-38e28a32] {\r\n  border-radius: 0;\n}\n.btn-group .btn[data-v-38e28a32]:first-child {\r\n  border-top-left-radius: 0.375rem;\r\n  border-bottom-left-radius: 0.375rem;\n}\n.btn-group .btn[data-v-38e28a32]:last-child {\r\n  border-top-right-radius: 0.375rem;\r\n  border-bottom-right-radius: 0.375rem;\n}\n.mono[data-v-38e28a32] {\r\n  font-family: monospace !important;\n}\n.fs-small[data-v-38e28a32] {\r\n  font-size: 0.8rem;\n}\n.breadcrumb-item a[data-v-38e28a32] {\r\n  color: #54415e;\n}\n.breadcrumb-item.active[data-v-38e28a32] {\r\n  color: #6c757dcc;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/RCDashboard/Statistiques/Recouvrement/RecapByTask.vue?vue&type=style&index=0&id=3a2648e0&scoped=true&lang=css":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/RCDashboard/Statistiques/Recouvrement/RecapByTask.vue?vue&type=style&index=0&id=3a2648e0&scoped=true&lang=css ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.mono[data-v-3a2648e0] {\r\n  font-family: monospace !important;\n}\n.sortable i[data-v-3a2648e0] {\r\n  color: red;\n}\n.fs-small[data-v-3a2648e0] {\r\n  font-size: 0.8rem;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/RCDashboard/Statistiques/Recouvrement/RecapTaskExecution.vue?vue&type=style&index=0&id=d8cf2642&scoped=true&lang=css":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/RCDashboard/Statistiques/Recouvrement/RecapTaskExecution.vue?vue&type=style&index=0&id=d8cf2642&scoped=true&lang=css ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.recap-task-execution[data-v-d8cf2642] {\r\n  position: relative;\n}\n.form-group[data-v-d8cf2642] {\r\n  margin-bottom: 0.5rem;\n}\n.form-label[data-v-d8cf2642] {\r\n  margin-bottom: 0.25rem;\r\n  font-weight: 500;\n}\n.form-select-sm[data-v-d8cf2642] {\r\n  font-size: 0.875rem;\r\n  padding: 0.25rem 0.5rem;\n}\n.btn-sm[data-v-d8cf2642] {\r\n  padding: 0.25rem 0.75rem;\r\n  font-size: 0.875rem;\n}\r\n\r\n/* Responsive adjustments */\n@media (max-width: 768px) {\n.nextrecap-task-execution[data-v-d8cf2642] {\r\n    padding: 0.5rem;\n}\n.form-group[data-v-d8cf2642] {\r\n    margin-bottom: 0.75rem;\n}\n}\r\n\r\n/* Button group styling */\n.btn-group .btn[data-v-d8cf2642] {\r\n  border-radius: 0;\n}\n.btn-group .btn[data-v-d8cf2642]:first-child {\r\n  border-top-left-radius: 0.375rem;\r\n  border-bottom-left-radius: 0.375rem;\n}\n.btn-group .btn[data-v-d8cf2642]:last-child {\r\n  border-top-right-radius: 0.375rem;\r\n  border-bottom-right-radius: 0.375rem;\n}\n.mono[data-v-d8cf2642] {\r\n  font-family: monospace !important;\n}\n.fs-small[data-v-d8cf2642] {\r\n  font-size: 0.8rem;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/RCDashboard/Statistiques/Recouvrement/TaskRecapHistory.vue?vue&type=style&index=0&id=a578f9f6&scoped=true&lang=css":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/RCDashboard/Statistiques/Recouvrement/TaskRecapHistory.vue?vue&type=style&index=0&id=a578f9f6&scoped=true&lang=css ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.table-bordered[data-v-a578f9f6] {\r\n  border: 1px solid black;\n}\n.tb-sticky[data-v-a578f9f6] {\r\n  background-color: rgb(241, 241, 241) !important;\r\n  /* border: 2px solid rgb(241, 241, 241) !important; */\r\n  position: sticky;\r\n  left: -2px;\r\n  z-index: 10;\n}\nth.tb-sticky[data-v-a578f9f6] {\r\n  top: 0 !important;\r\n  z-index: 2000 !important;\r\n  position: sticky;\r\n  color: black;\n}\n.fs-small[data-v-a578f9f6] {\r\n  font-size: 0.8rem;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/RCDashboard/Statistiques/Recouvrement/DailyTaskRecap.vue?vue&type=style&index=0&id=388be928&scoped=true&lang=css":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/RCDashboard/Statistiques/Recouvrement/DailyTaskRecap.vue?vue&type=style&index=0&id=388be928&scoped=true&lang=css ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DailyTaskRecap_vue_vue_type_style_index_0_id_388be928_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DailyTaskRecap.vue?vue&type=style&index=0&id=388be928&scoped=true&lang=css */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/RCDashboard/Statistiques/Recouvrement/DailyTaskRecap.vue?vue&type=style&index=0&id=388be928&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DailyTaskRecap_vue_vue_type_style_index_0_id_388be928_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DailyTaskRecap_vue_vue_type_style_index_0_id_388be928_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/RCDashboard/Statistiques/Recouvrement/ExecutedTaskRecapByClient.vue?vue&type=style&index=0&id=9e0adedc&scoped=true&lang=css":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/RCDashboard/Statistiques/Recouvrement/ExecutedTaskRecapByClient.vue?vue&type=style&index=0&id=9e0adedc&scoped=true&lang=css ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ExecutedTaskRecapByClient_vue_vue_type_style_index_0_id_9e0adedc_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ExecutedTaskRecapByClient.vue?vue&type=style&index=0&id=9e0adedc&scoped=true&lang=css */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/RCDashboard/Statistiques/Recouvrement/ExecutedTaskRecapByClient.vue?vue&type=style&index=0&id=9e0adedc&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ExecutedTaskRecapByClient_vue_vue_type_style_index_0_id_9e0adedc_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ExecutedTaskRecapByClient_vue_vue_type_style_index_0_id_9e0adedc_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/RCDashboard/Statistiques/Recouvrement/NextRecapTaskExecution.vue?vue&type=style&index=0&id=38e28a32&scoped=true&lang=css":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/RCDashboard/Statistiques/Recouvrement/NextRecapTaskExecution.vue?vue&type=style&index=0&id=38e28a32&scoped=true&lang=css ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NextRecapTaskExecution_vue_vue_type_style_index_0_id_38e28a32_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NextRecapTaskExecution.vue?vue&type=style&index=0&id=38e28a32&scoped=true&lang=css */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/RCDashboard/Statistiques/Recouvrement/NextRecapTaskExecution.vue?vue&type=style&index=0&id=38e28a32&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NextRecapTaskExecution_vue_vue_type_style_index_0_id_38e28a32_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NextRecapTaskExecution_vue_vue_type_style_index_0_id_38e28a32_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/RCDashboard/Statistiques/Recouvrement/RecapByTask.vue?vue&type=style&index=0&id=3a2648e0&scoped=true&lang=css":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/RCDashboard/Statistiques/Recouvrement/RecapByTask.vue?vue&type=style&index=0&id=3a2648e0&scoped=true&lang=css ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RecapByTask_vue_vue_type_style_index_0_id_3a2648e0_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RecapByTask.vue?vue&type=style&index=0&id=3a2648e0&scoped=true&lang=css */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/RCDashboard/Statistiques/Recouvrement/RecapByTask.vue?vue&type=style&index=0&id=3a2648e0&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RecapByTask_vue_vue_type_style_index_0_id_3a2648e0_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RecapByTask_vue_vue_type_style_index_0_id_3a2648e0_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/RCDashboard/Statistiques/Recouvrement/RecapTaskExecution.vue?vue&type=style&index=0&id=d8cf2642&scoped=true&lang=css":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/RCDashboard/Statistiques/Recouvrement/RecapTaskExecution.vue?vue&type=style&index=0&id=d8cf2642&scoped=true&lang=css ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RecapTaskExecution_vue_vue_type_style_index_0_id_d8cf2642_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RecapTaskExecution.vue?vue&type=style&index=0&id=d8cf2642&scoped=true&lang=css */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/RCDashboard/Statistiques/Recouvrement/RecapTaskExecution.vue?vue&type=style&index=0&id=d8cf2642&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RecapTaskExecution_vue_vue_type_style_index_0_id_d8cf2642_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RecapTaskExecution_vue_vue_type_style_index_0_id_d8cf2642_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/RCDashboard/Statistiques/Recouvrement/TaskRecapHistory.vue?vue&type=style&index=0&id=a578f9f6&scoped=true&lang=css":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/RCDashboard/Statistiques/Recouvrement/TaskRecapHistory.vue?vue&type=style&index=0&id=a578f9f6&scoped=true&lang=css ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TaskRecapHistory_vue_vue_type_style_index_0_id_a578f9f6_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TaskRecapHistory.vue?vue&type=style&index=0&id=a578f9f6&scoped=true&lang=css */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/RCDashboard/Statistiques/Recouvrement/TaskRecapHistory.vue?vue&type=style&index=0&id=a578f9f6&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TaskRecapHistory_vue_vue_type_style_index_0_id_a578f9f6_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TaskRecapHistory_vue_vue_type_style_index_0_id_a578f9f6_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/RCDashboard/Statistiques/Recouvrement/DailyTaskRecap.vue":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/RCDashboard/Statistiques/Recouvrement/DailyTaskRecap.vue ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DailyTaskRecap_vue_vue_type_template_id_388be928_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DailyTaskRecap.vue?vue&type=template&id=388be928&scoped=true */ "./resources/js/components/RCDashboard/Statistiques/Recouvrement/DailyTaskRecap.vue?vue&type=template&id=388be928&scoped=true");
/* harmony import */ var _DailyTaskRecap_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DailyTaskRecap.vue?vue&type=script&lang=js */ "./resources/js/components/RCDashboard/Statistiques/Recouvrement/DailyTaskRecap.vue?vue&type=script&lang=js");
/* harmony import */ var _DailyTaskRecap_vue_vue_type_style_index_0_id_388be928_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DailyTaskRecap.vue?vue&type=style&index=0&id=388be928&scoped=true&lang=css */ "./resources/js/components/RCDashboard/Statistiques/Recouvrement/DailyTaskRecap.vue?vue&type=style&index=0&id=388be928&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _DailyTaskRecap_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _DailyTaskRecap_vue_vue_type_template_id_388be928_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _DailyTaskRecap_vue_vue_type_template_id_388be928_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "388be928",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/RCDashboard/Statistiques/Recouvrement/DailyTaskRecap.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/RCDashboard/Statistiques/Recouvrement/DailyTaskRecap.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/components/RCDashboard/Statistiques/Recouvrement/DailyTaskRecap.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DailyTaskRecap_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DailyTaskRecap.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/RCDashboard/Statistiques/Recouvrement/DailyTaskRecap.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DailyTaskRecap_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/RCDashboard/Statistiques/Recouvrement/DailyTaskRecap.vue?vue&type=style&index=0&id=388be928&scoped=true&lang=css":
/*!**************************************************************************************************************************************************!*\
  !*** ./resources/js/components/RCDashboard/Statistiques/Recouvrement/DailyTaskRecap.vue?vue&type=style&index=0&id=388be928&scoped=true&lang=css ***!
  \**************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DailyTaskRecap_vue_vue_type_style_index_0_id_388be928_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DailyTaskRecap.vue?vue&type=style&index=0&id=388be928&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/RCDashboard/Statistiques/Recouvrement/DailyTaskRecap.vue?vue&type=style&index=0&id=388be928&scoped=true&lang=css");


/***/ }),

/***/ "./resources/js/components/RCDashboard/Statistiques/Recouvrement/DailyTaskRecap.vue?vue&type=template&id=388be928&scoped=true":
/*!************************************************************************************************************************************!*\
  !*** ./resources/js/components/RCDashboard/Statistiques/Recouvrement/DailyTaskRecap.vue?vue&type=template&id=388be928&scoped=true ***!
  \************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DailyTaskRecap_vue_vue_type_template_id_388be928_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DailyTaskRecap_vue_vue_type_template_id_388be928_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DailyTaskRecap_vue_vue_type_template_id_388be928_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DailyTaskRecap.vue?vue&type=template&id=388be928&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/RCDashboard/Statistiques/Recouvrement/DailyTaskRecap.vue?vue&type=template&id=388be928&scoped=true");


/***/ }),

/***/ "./resources/js/components/RCDashboard/Statistiques/Recouvrement/ExecutedTaskRecapByClient.vue":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/RCDashboard/Statistiques/Recouvrement/ExecutedTaskRecapByClient.vue ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ExecutedTaskRecapByClient_vue_vue_type_template_id_9e0adedc_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ExecutedTaskRecapByClient.vue?vue&type=template&id=9e0adedc&scoped=true */ "./resources/js/components/RCDashboard/Statistiques/Recouvrement/ExecutedTaskRecapByClient.vue?vue&type=template&id=9e0adedc&scoped=true");
/* harmony import */ var _ExecutedTaskRecapByClient_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ExecutedTaskRecapByClient.vue?vue&type=script&lang=js */ "./resources/js/components/RCDashboard/Statistiques/Recouvrement/ExecutedTaskRecapByClient.vue?vue&type=script&lang=js");
/* harmony import */ var _ExecutedTaskRecapByClient_vue_vue_type_style_index_0_id_9e0adedc_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ExecutedTaskRecapByClient.vue?vue&type=style&index=0&id=9e0adedc&scoped=true&lang=css */ "./resources/js/components/RCDashboard/Statistiques/Recouvrement/ExecutedTaskRecapByClient.vue?vue&type=style&index=0&id=9e0adedc&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ExecutedTaskRecapByClient_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _ExecutedTaskRecapByClient_vue_vue_type_template_id_9e0adedc_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _ExecutedTaskRecapByClient_vue_vue_type_template_id_9e0adedc_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "9e0adedc",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/RCDashboard/Statistiques/Recouvrement/ExecutedTaskRecapByClient.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/RCDashboard/Statistiques/Recouvrement/ExecutedTaskRecapByClient.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************!*\
  !*** ./resources/js/components/RCDashboard/Statistiques/Recouvrement/ExecutedTaskRecapByClient.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ExecutedTaskRecapByClient_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ExecutedTaskRecapByClient.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/RCDashboard/Statistiques/Recouvrement/ExecutedTaskRecapByClient.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ExecutedTaskRecapByClient_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/RCDashboard/Statistiques/Recouvrement/ExecutedTaskRecapByClient.vue?vue&type=style&index=0&id=9e0adedc&scoped=true&lang=css":
/*!*************************************************************************************************************************************************************!*\
  !*** ./resources/js/components/RCDashboard/Statistiques/Recouvrement/ExecutedTaskRecapByClient.vue?vue&type=style&index=0&id=9e0adedc&scoped=true&lang=css ***!
  \*************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ExecutedTaskRecapByClient_vue_vue_type_style_index_0_id_9e0adedc_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ExecutedTaskRecapByClient.vue?vue&type=style&index=0&id=9e0adedc&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/RCDashboard/Statistiques/Recouvrement/ExecutedTaskRecapByClient.vue?vue&type=style&index=0&id=9e0adedc&scoped=true&lang=css");


/***/ }),

/***/ "./resources/js/components/RCDashboard/Statistiques/Recouvrement/ExecutedTaskRecapByClient.vue?vue&type=template&id=9e0adedc&scoped=true":
/*!***********************************************************************************************************************************************!*\
  !*** ./resources/js/components/RCDashboard/Statistiques/Recouvrement/ExecutedTaskRecapByClient.vue?vue&type=template&id=9e0adedc&scoped=true ***!
  \***********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ExecutedTaskRecapByClient_vue_vue_type_template_id_9e0adedc_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ExecutedTaskRecapByClient_vue_vue_type_template_id_9e0adedc_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ExecutedTaskRecapByClient_vue_vue_type_template_id_9e0adedc_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ExecutedTaskRecapByClient.vue?vue&type=template&id=9e0adedc&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/RCDashboard/Statistiques/Recouvrement/ExecutedTaskRecapByClient.vue?vue&type=template&id=9e0adedc&scoped=true");


/***/ }),

/***/ "./resources/js/components/RCDashboard/Statistiques/Recouvrement/NextRecapTaskExecution.vue":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/RCDashboard/Statistiques/Recouvrement/NextRecapTaskExecution.vue ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _NextRecapTaskExecution_vue_vue_type_template_id_38e28a32_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NextRecapTaskExecution.vue?vue&type=template&id=38e28a32&scoped=true */ "./resources/js/components/RCDashboard/Statistiques/Recouvrement/NextRecapTaskExecution.vue?vue&type=template&id=38e28a32&scoped=true");
/* harmony import */ var _NextRecapTaskExecution_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NextRecapTaskExecution.vue?vue&type=script&lang=js */ "./resources/js/components/RCDashboard/Statistiques/Recouvrement/NextRecapTaskExecution.vue?vue&type=script&lang=js");
/* harmony import */ var _NextRecapTaskExecution_vue_vue_type_style_index_0_id_38e28a32_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NextRecapTaskExecution.vue?vue&type=style&index=0&id=38e28a32&scoped=true&lang=css */ "./resources/js/components/RCDashboard/Statistiques/Recouvrement/NextRecapTaskExecution.vue?vue&type=style&index=0&id=38e28a32&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _NextRecapTaskExecution_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _NextRecapTaskExecution_vue_vue_type_template_id_38e28a32_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _NextRecapTaskExecution_vue_vue_type_template_id_38e28a32_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "38e28a32",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/RCDashboard/Statistiques/Recouvrement/NextRecapTaskExecution.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/RCDashboard/Statistiques/Recouvrement/NextRecapTaskExecution.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************!*\
  !*** ./resources/js/components/RCDashboard/Statistiques/Recouvrement/NextRecapTaskExecution.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NextRecapTaskExecution_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NextRecapTaskExecution.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/RCDashboard/Statistiques/Recouvrement/NextRecapTaskExecution.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NextRecapTaskExecution_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/RCDashboard/Statistiques/Recouvrement/NextRecapTaskExecution.vue?vue&type=style&index=0&id=38e28a32&scoped=true&lang=css":
/*!**********************************************************************************************************************************************************!*\
  !*** ./resources/js/components/RCDashboard/Statistiques/Recouvrement/NextRecapTaskExecution.vue?vue&type=style&index=0&id=38e28a32&scoped=true&lang=css ***!
  \**********************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NextRecapTaskExecution_vue_vue_type_style_index_0_id_38e28a32_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NextRecapTaskExecution.vue?vue&type=style&index=0&id=38e28a32&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/RCDashboard/Statistiques/Recouvrement/NextRecapTaskExecution.vue?vue&type=style&index=0&id=38e28a32&scoped=true&lang=css");


/***/ }),

/***/ "./resources/js/components/RCDashboard/Statistiques/Recouvrement/NextRecapTaskExecution.vue?vue&type=template&id=38e28a32&scoped=true":
/*!********************************************************************************************************************************************!*\
  !*** ./resources/js/components/RCDashboard/Statistiques/Recouvrement/NextRecapTaskExecution.vue?vue&type=template&id=38e28a32&scoped=true ***!
  \********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NextRecapTaskExecution_vue_vue_type_template_id_38e28a32_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NextRecapTaskExecution_vue_vue_type_template_id_38e28a32_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NextRecapTaskExecution_vue_vue_type_template_id_38e28a32_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NextRecapTaskExecution.vue?vue&type=template&id=38e28a32&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/RCDashboard/Statistiques/Recouvrement/NextRecapTaskExecution.vue?vue&type=template&id=38e28a32&scoped=true");


/***/ }),

/***/ "./resources/js/components/RCDashboard/Statistiques/Recouvrement/RecapByTask.vue":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/RCDashboard/Statistiques/Recouvrement/RecapByTask.vue ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _RecapByTask_vue_vue_type_template_id_3a2648e0_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RecapByTask.vue?vue&type=template&id=3a2648e0&scoped=true */ "./resources/js/components/RCDashboard/Statistiques/Recouvrement/RecapByTask.vue?vue&type=template&id=3a2648e0&scoped=true");
/* harmony import */ var _RecapByTask_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RecapByTask.vue?vue&type=script&lang=js */ "./resources/js/components/RCDashboard/Statistiques/Recouvrement/RecapByTask.vue?vue&type=script&lang=js");
/* harmony import */ var _RecapByTask_vue_vue_type_style_index_0_id_3a2648e0_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RecapByTask.vue?vue&type=style&index=0&id=3a2648e0&scoped=true&lang=css */ "./resources/js/components/RCDashboard/Statistiques/Recouvrement/RecapByTask.vue?vue&type=style&index=0&id=3a2648e0&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _RecapByTask_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _RecapByTask_vue_vue_type_template_id_3a2648e0_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _RecapByTask_vue_vue_type_template_id_3a2648e0_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "3a2648e0",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/RCDashboard/Statistiques/Recouvrement/RecapByTask.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/RCDashboard/Statistiques/Recouvrement/RecapByTask.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/components/RCDashboard/Statistiques/Recouvrement/RecapByTask.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RecapByTask_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RecapByTask.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/RCDashboard/Statistiques/Recouvrement/RecapByTask.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RecapByTask_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/RCDashboard/Statistiques/Recouvrement/RecapByTask.vue?vue&type=style&index=0&id=3a2648e0&scoped=true&lang=css":
/*!***********************************************************************************************************************************************!*\
  !*** ./resources/js/components/RCDashboard/Statistiques/Recouvrement/RecapByTask.vue?vue&type=style&index=0&id=3a2648e0&scoped=true&lang=css ***!
  \***********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RecapByTask_vue_vue_type_style_index_0_id_3a2648e0_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RecapByTask.vue?vue&type=style&index=0&id=3a2648e0&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/RCDashboard/Statistiques/Recouvrement/RecapByTask.vue?vue&type=style&index=0&id=3a2648e0&scoped=true&lang=css");


/***/ }),

/***/ "./resources/js/components/RCDashboard/Statistiques/Recouvrement/RecapByTask.vue?vue&type=template&id=3a2648e0&scoped=true":
/*!*********************************************************************************************************************************!*\
  !*** ./resources/js/components/RCDashboard/Statistiques/Recouvrement/RecapByTask.vue?vue&type=template&id=3a2648e0&scoped=true ***!
  \*********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RecapByTask_vue_vue_type_template_id_3a2648e0_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RecapByTask_vue_vue_type_template_id_3a2648e0_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RecapByTask_vue_vue_type_template_id_3a2648e0_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RecapByTask.vue?vue&type=template&id=3a2648e0&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/RCDashboard/Statistiques/Recouvrement/RecapByTask.vue?vue&type=template&id=3a2648e0&scoped=true");


/***/ }),

/***/ "./resources/js/components/RCDashboard/Statistiques/Recouvrement/RecapTaskExecution.vue":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/RCDashboard/Statistiques/Recouvrement/RecapTaskExecution.vue ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _RecapTaskExecution_vue_vue_type_template_id_d8cf2642_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RecapTaskExecution.vue?vue&type=template&id=d8cf2642&scoped=true */ "./resources/js/components/RCDashboard/Statistiques/Recouvrement/RecapTaskExecution.vue?vue&type=template&id=d8cf2642&scoped=true");
/* harmony import */ var _RecapTaskExecution_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RecapTaskExecution.vue?vue&type=script&lang=js */ "./resources/js/components/RCDashboard/Statistiques/Recouvrement/RecapTaskExecution.vue?vue&type=script&lang=js");
/* harmony import */ var _RecapTaskExecution_vue_vue_type_style_index_0_id_d8cf2642_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RecapTaskExecution.vue?vue&type=style&index=0&id=d8cf2642&scoped=true&lang=css */ "./resources/js/components/RCDashboard/Statistiques/Recouvrement/RecapTaskExecution.vue?vue&type=style&index=0&id=d8cf2642&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _RecapTaskExecution_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _RecapTaskExecution_vue_vue_type_template_id_d8cf2642_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _RecapTaskExecution_vue_vue_type_template_id_d8cf2642_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "d8cf2642",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/RCDashboard/Statistiques/Recouvrement/RecapTaskExecution.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/RCDashboard/Statistiques/Recouvrement/RecapTaskExecution.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************!*\
  !*** ./resources/js/components/RCDashboard/Statistiques/Recouvrement/RecapTaskExecution.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RecapTaskExecution_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RecapTaskExecution.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/RCDashboard/Statistiques/Recouvrement/RecapTaskExecution.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RecapTaskExecution_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/RCDashboard/Statistiques/Recouvrement/RecapTaskExecution.vue?vue&type=style&index=0&id=d8cf2642&scoped=true&lang=css":
/*!******************************************************************************************************************************************************!*\
  !*** ./resources/js/components/RCDashboard/Statistiques/Recouvrement/RecapTaskExecution.vue?vue&type=style&index=0&id=d8cf2642&scoped=true&lang=css ***!
  \******************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RecapTaskExecution_vue_vue_type_style_index_0_id_d8cf2642_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RecapTaskExecution.vue?vue&type=style&index=0&id=d8cf2642&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/RCDashboard/Statistiques/Recouvrement/RecapTaskExecution.vue?vue&type=style&index=0&id=d8cf2642&scoped=true&lang=css");


/***/ }),

/***/ "./resources/js/components/RCDashboard/Statistiques/Recouvrement/RecapTaskExecution.vue?vue&type=template&id=d8cf2642&scoped=true":
/*!****************************************************************************************************************************************!*\
  !*** ./resources/js/components/RCDashboard/Statistiques/Recouvrement/RecapTaskExecution.vue?vue&type=template&id=d8cf2642&scoped=true ***!
  \****************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RecapTaskExecution_vue_vue_type_template_id_d8cf2642_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RecapTaskExecution_vue_vue_type_template_id_d8cf2642_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RecapTaskExecution_vue_vue_type_template_id_d8cf2642_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RecapTaskExecution.vue?vue&type=template&id=d8cf2642&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/RCDashboard/Statistiques/Recouvrement/RecapTaskExecution.vue?vue&type=template&id=d8cf2642&scoped=true");


/***/ }),

/***/ "./resources/js/components/RCDashboard/Statistiques/Recouvrement/TaskRecap.vue":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/RCDashboard/Statistiques/Recouvrement/TaskRecap.vue ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TaskRecap_vue_vue_type_template_id_1b504a82__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TaskRecap.vue?vue&type=template&id=1b504a82 */ "./resources/js/components/RCDashboard/Statistiques/Recouvrement/TaskRecap.vue?vue&type=template&id=1b504a82");
/* harmony import */ var _TaskRecap_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TaskRecap.vue?vue&type=script&lang=js */ "./resources/js/components/RCDashboard/Statistiques/Recouvrement/TaskRecap.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TaskRecap_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _TaskRecap_vue_vue_type_template_id_1b504a82__WEBPACK_IMPORTED_MODULE_0__.render,
  _TaskRecap_vue_vue_type_template_id_1b504a82__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/RCDashboard/Statistiques/Recouvrement/TaskRecap.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/RCDashboard/Statistiques/Recouvrement/TaskRecap.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/components/RCDashboard/Statistiques/Recouvrement/TaskRecap.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TaskRecap_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TaskRecap.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/RCDashboard/Statistiques/Recouvrement/TaskRecap.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TaskRecap_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/RCDashboard/Statistiques/Recouvrement/TaskRecap.vue?vue&type=template&id=1b504a82":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/components/RCDashboard/Statistiques/Recouvrement/TaskRecap.vue?vue&type=template&id=1b504a82 ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TaskRecap_vue_vue_type_template_id_1b504a82__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TaskRecap_vue_vue_type_template_id_1b504a82__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TaskRecap_vue_vue_type_template_id_1b504a82__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TaskRecap.vue?vue&type=template&id=1b504a82 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/RCDashboard/Statistiques/Recouvrement/TaskRecap.vue?vue&type=template&id=1b504a82");


/***/ }),

/***/ "./resources/js/components/RCDashboard/Statistiques/Recouvrement/TaskRecapHistory.vue":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/RCDashboard/Statistiques/Recouvrement/TaskRecapHistory.vue ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TaskRecapHistory_vue_vue_type_template_id_a578f9f6_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TaskRecapHistory.vue?vue&type=template&id=a578f9f6&scoped=true */ "./resources/js/components/RCDashboard/Statistiques/Recouvrement/TaskRecapHistory.vue?vue&type=template&id=a578f9f6&scoped=true");
/* harmony import */ var _TaskRecapHistory_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TaskRecapHistory.vue?vue&type=script&lang=js */ "./resources/js/components/RCDashboard/Statistiques/Recouvrement/TaskRecapHistory.vue?vue&type=script&lang=js");
/* harmony import */ var _TaskRecapHistory_vue_vue_type_style_index_0_id_a578f9f6_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TaskRecapHistory.vue?vue&type=style&index=0&id=a578f9f6&scoped=true&lang=css */ "./resources/js/components/RCDashboard/Statistiques/Recouvrement/TaskRecapHistory.vue?vue&type=style&index=0&id=a578f9f6&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _TaskRecapHistory_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _TaskRecapHistory_vue_vue_type_template_id_a578f9f6_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _TaskRecapHistory_vue_vue_type_template_id_a578f9f6_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "a578f9f6",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/RCDashboard/Statistiques/Recouvrement/TaskRecapHistory.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/RCDashboard/Statistiques/Recouvrement/TaskRecapHistory.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************!*\
  !*** ./resources/js/components/RCDashboard/Statistiques/Recouvrement/TaskRecapHistory.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TaskRecapHistory_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TaskRecapHistory.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/RCDashboard/Statistiques/Recouvrement/TaskRecapHistory.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TaskRecapHistory_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/RCDashboard/Statistiques/Recouvrement/TaskRecapHistory.vue?vue&type=style&index=0&id=a578f9f6&scoped=true&lang=css":
/*!****************************************************************************************************************************************************!*\
  !*** ./resources/js/components/RCDashboard/Statistiques/Recouvrement/TaskRecapHistory.vue?vue&type=style&index=0&id=a578f9f6&scoped=true&lang=css ***!
  \****************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TaskRecapHistory_vue_vue_type_style_index_0_id_a578f9f6_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TaskRecapHistory.vue?vue&type=style&index=0&id=a578f9f6&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/RCDashboard/Statistiques/Recouvrement/TaskRecapHistory.vue?vue&type=style&index=0&id=a578f9f6&scoped=true&lang=css");


/***/ }),

/***/ "./resources/js/components/RCDashboard/Statistiques/Recouvrement/TaskRecapHistory.vue?vue&type=template&id=a578f9f6&scoped=true":
/*!**************************************************************************************************************************************!*\
  !*** ./resources/js/components/RCDashboard/Statistiques/Recouvrement/TaskRecapHistory.vue?vue&type=template&id=a578f9f6&scoped=true ***!
  \**************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TaskRecapHistory_vue_vue_type_template_id_a578f9f6_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TaskRecapHistory_vue_vue_type_template_id_a578f9f6_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TaskRecapHistory_vue_vue_type_template_id_a578f9f6_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TaskRecapHistory.vue?vue&type=template&id=a578f9f6&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/RCDashboard/Statistiques/Recouvrement/TaskRecapHistory.vue?vue&type=template&id=a578f9f6&scoped=true");


/***/ }),

/***/ "./resources/js/services/drilldown/DrillDownContract.js":
/*!**************************************************************!*\
  !*** ./resources/js/services/drilldown/DrillDownContract.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DrillDownContract)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var DrillDownContract = /*#__PURE__*/function () {
  function DrillDownContract() {
    _classCallCheck(this, DrillDownContract);
    if (this.constructor === DrillDownContract) throw new TypeError("Abstract class");
  }
  return _createClass(DrillDownContract, [{
    key: "getToolConfig",
    value: function getToolConfig(toolKey) {
      throw new Error("Must implement");
    }
  }, {
    key: "resolveData",
    value: function resolveData(resolverKey, params) {
      throw new Error("Must implement");
    }
  }]);
}();


/***/ }),

/***/ "./resources/js/services/drilldown/DrillDownEngine.js":
/*!************************************************************!*\
  !*** ./resources/js/services/drilldown/DrillDownEngine.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DrillDownEngine)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classPrivateMethodInitSpec(e, a) { _checkPrivateRedeclaration(e, a), a.add(e); }
function _classPrivateFieldInitSpec(e, t, a) { _checkPrivateRedeclaration(e, t), t.set(e, a); }
function _checkPrivateRedeclaration(e, t) { if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object"); }
function _classPrivateFieldGet(s, a) { return s.get(_assertClassBrand(s, a)); }
function _classPrivateFieldSet(s, a, r) { return s.set(_assertClassBrand(s, a), r), r; }
function _assertClassBrand(e, t, n) { if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError("Private element is not present on this object"); }
var _fullPath = /*#__PURE__*/new WeakMap();
var _started = /*#__PURE__*/new WeakMap();
var _currentIndex = /*#__PURE__*/new WeakMap();
var _breadcrumb = /*#__PURE__*/new WeakMap();
var _DrillDownEngine_brand = /*#__PURE__*/new WeakSet();
var DrillDownEngine = /*#__PURE__*/function () {
  function DrillDownEngine(hierarchyConfig) {
    _classCallCheck(this, DrillDownEngine);
    /**
     * Résout le chemin complet à partir d'un nom de chemin donné.
     * @param {string} pathName
     * @returns
     * @private
     */
    _classPrivateMethodInitSpec(this, _DrillDownEngine_brand);
    _classPrivateFieldInitSpec(this, _fullPath, []);
    _classPrivateFieldInitSpec(this, _started, false);
    _classPrivateFieldInitSpec(this, _currentIndex, -1);
    _classPrivateFieldInitSpec(this, _breadcrumb, []);
    this.config = hierarchyConfig;
    this.reset();
  }
  return _createClass(DrillDownEngine, [{
    key: "reset",
    value: function reset() {
      _classPrivateFieldSet(_fullPath, this, []);
      _classPrivateFieldSet(_currentIndex, this, -1);
      _classPrivateFieldSet(_breadcrumb, this, []);
    }

    /**
     * Démarre le moteur de drill-down.
     * @param {string} userRole - Le rôle de l'utilisateur.
     * @param {string|null} pathNameOverride - Un nom de chemin alternatif.
     * @param {string|null} startAtTool - L'outil à partir duquel commencer.
     * @returns {boolean} - Retourne vrai si le démarrage a réussi, sinon faux.
     */
  }, {
    key: "start",
    value: function start(userRole) {
      var pathNameOverride = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var startAtTool = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      this.reset();
      var entryPoint = this.config.entryPoints[userRole];
      if (!entryPoint && !pathNameOverride) return false;
      var pathName = pathNameOverride || entryPoint.pathName;
      var startTool = startAtTool || entryPoint.startAtTool;
      if (startTool) {
        _classPrivateFieldSet(_fullPath, this, [{
          toolKey: startTool
        }]);
      } else {
        _classPrivateFieldSet(_fullPath, this, _assertClassBrand(_DrillDownEngine_brand, this, _resolveFullPath).call(this, pathName));
      }
      _classPrivateFieldSet(_currentIndex, this, 0);
      _classPrivateFieldSet(_started, this, true);
      return true;
    }
  }, {
    key: "isStarted",
    get: function get() {
      return _classPrivateFieldGet(_started, this);
    }
  }, {
    key: "getCurrentStep",
    value: function getCurrentStep() {
      return _classPrivateFieldGet(_fullPath, this)[_classPrivateFieldGet(_currentIndex, this)] || null;
    }
  }, {
    key: "getFullPath",
    value: function getFullPath() {
      if (!_classPrivateFieldGet(_started, this)) {
        throw new Error("DrillDownEngine must be started before accessing the full path.");
      }
      return _classPrivateFieldGet(_fullPath, this);
    }
  }, {
    key: "getBreadcrumb",
    value: function getBreadcrumb() {
      return _classPrivateFieldGet(_breadcrumb, this);
    }
  }, {
    key: "getCurrentIndex",
    value: function getCurrentIndex() {
      return _classPrivateFieldGet(_currentIndex, this);
    }

    /**
     *
     * @param {{[x: string]: *}} selectionContext
     * @returns
     */
  }, {
    key: "next",
    value: function next(selectionContext) {
      var _this$currentIndex, _this$currentIndex2;
      if (_classPrivateFieldGet(_currentIndex, this) >= _classPrivateFieldGet(_fullPath, this).length - 1) return false;
      _classPrivateFieldGet(_breadcrumb, this).push({
        step: this.getCurrentStep(),
        context: selectionContext
      });
      _classPrivateFieldSet(_currentIndex, this, (_this$currentIndex = _classPrivateFieldGet(_currentIndex, this), _this$currentIndex2 = _this$currentIndex++, _this$currentIndex)), _this$currentIndex2;
      return true;
    }
  }, {
    key: "previous",
    value: function previous() {
      var _this$currentIndex3, _this$currentIndex4;
      if (_classPrivateFieldGet(_currentIndex, this) <= 0) return false;
      _classPrivateFieldGet(_breadcrumb, this).pop();
      _classPrivateFieldSet(_currentIndex, this, (_this$currentIndex3 = _classPrivateFieldGet(_currentIndex, this), _this$currentIndex4 = _this$currentIndex3--, _this$currentIndex3)), _this$currentIndex4;
      return true;
    }
  }, {
    key: "goToStep",
    value: function goToStep(index) {
      if (index < _classPrivateFieldGet(_currentIndex, this)) {
        while (_classPrivateFieldGet(_currentIndex, this) > index) {
          this.previous();
        }
      } else if (index > _classPrivateFieldGet(_currentIndex, this)) {
        while (_classPrivateFieldGet(_currentIndex, this) < index) {
          this.next();
        }
      }
    }
  }]);
}();
function _resolveFullPath(pathName) {
  var pathSteps = this.config.paths[pathName];
  var resolved = [];
  var _iterator = _createForOfIteratorHelper(pathSteps),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var step = _step.value;
      if (typeof step === "string") {
        resolved.push({
          toolKey: step
        });
      } else if (step.importPath) {
        resolved.push.apply(resolved, _toConsumableArray(_assertClassBrand(_DrillDownEngine_brand, this, _resolveFullPath).call(this, step.importPath)));
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return resolved;
}


/***/ }),

/***/ "./resources/js/services/drilldown/RecouvrementDDContract.js":
/*!*******************************************************************!*\
  !*** ./resources/js/services/drilldown/RecouvrementDDContract.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RecouvrementDDContract)
/* harmony export */ });
/* harmony import */ var _DrillDownContract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DrillDownContract.js */ "./resources/js/services/drilldown/DrillDownContract.js");
/* harmony import */ var _tools_recouvrement_tools_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tools/recouvrement-tools.js */ "./resources/js/services/drilldown/tools/recouvrement-tools.js");
/* harmony import */ var _data_resolvers_recouvrement_data_resolver_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data-resolvers/recouvrement-data-resolver.js */ "./resources/js/services/drilldown/data-resolvers/recouvrement-data-resolver.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return r; }; var t, r = {}, e = Object.prototype, n = e.hasOwnProperty, o = "function" == typeof Symbol ? Symbol : {}, i = o.iterator || "@@iterator", a = o.asyncIterator || "@@asyncIterator", u = o.toStringTag || "@@toStringTag"; function c(t, r, e, n) { Object.defineProperty(t, r, { value: e, enumerable: !n, configurable: !n, writable: !n }); } try { c({}, ""); } catch (t) { c = function c(t, r, e) { return t[r] = e; }; } function h(r, e, n, o) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype); return c(a, "_invoke", function (r, e, n) { var o = 1; return function (i, a) { if (3 === o) throw Error("Generator is already running"); if (4 === o) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var u = n.delegate; if (u) { var c = d(u, n); if (c) { if (c === f) continue; return c; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (1 === o) throw o = 4, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = 3; var h = s(r, e, n); if ("normal" === h.type) { if (o = n.done ? 4 : 2, h.arg === f) continue; return { value: h.arg, done: n.done }; } "throw" === h.type && (o = 4, n.method = "throw", n.arg = h.arg); } }; }(r, n, new Context(o || [])), !0), a; } function s(t, r, e) { try { return { type: "normal", arg: t.call(r, e) }; } catch (t) { return { type: "throw", arg: t }; } } r.wrap = h; var f = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var l = {}; c(l, i, function () { return this; }); var p = Object.getPrototypeOf, y = p && p(p(x([]))); y && y !== e && n.call(y, i) && (l = y); var v = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(l); function g(t) { ["next", "throw", "return"].forEach(function (r) { c(t, r, function (t) { return this._invoke(r, t); }); }); } function AsyncIterator(t, r) { function e(o, i, a, u) { var c = s(t[o], t, i); if ("throw" !== c.type) { var h = c.arg, f = h.value; return f && "object" == _typeof(f) && n.call(f, "__await") ? r.resolve(f.__await).then(function (t) { e("next", t, a, u); }, function (t) { e("throw", t, a, u); }) : r.resolve(f).then(function (t) { h.value = t, a(h); }, function (t) { return e("throw", t, a, u); }); } u(c.arg); } var o; c(this, "_invoke", function (t, n) { function i() { return new r(function (r, o) { e(t, n, r, o); }); } return o = o ? o.then(i, i) : i(); }, !0); } function d(r, e) { var n = e.method, o = r.i[n]; if (o === t) return e.delegate = null, "throw" === n && r.i["return"] && (e.method = "return", e.arg = t, d(r, e), "throw" === e.method) || "return" !== n && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + n + "' method")), f; var i = s(o, r.i, e.arg); if ("throw" === i.type) return e.method = "throw", e.arg = i.arg, e.delegate = null, f; var a = i.arg; return a ? a.done ? (e[r.r] = a.value, e.next = r.n, "return" !== e.method && (e.method = "next", e.arg = t), e.delegate = null, f) : a : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f); } function w(t) { this.tryEntries.push(t); } function m(r) { var e = r[4] || {}; e.type = "normal", e.arg = t, r[4] = e; } function Context(t) { this.tryEntries = [[-1]], t.forEach(w, this), this.reset(!0); } function x(r) { if (null != r) { var e = r[i]; if (e) return e.call(r); if ("function" == typeof r.next) return r; if (!isNaN(r.length)) { var o = -1, a = function e() { for (; ++o < r.length;) if (n.call(r, o)) return e.value = r[o], e.done = !1, e; return e.value = t, e.done = !0, e; }; return a.next = a; } } throw new TypeError(_typeof(r) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, c(v, "constructor", GeneratorFunctionPrototype), c(GeneratorFunctionPrototype, "constructor", GeneratorFunction), c(GeneratorFunctionPrototype, u, GeneratorFunction.displayName = "GeneratorFunction"), r.isGeneratorFunction = function (t) { var r = "function" == typeof t && t.constructor; return !!r && (r === GeneratorFunction || "GeneratorFunction" === (r.displayName || r.name)); }, r.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, c(t, u, "GeneratorFunction")), t.prototype = Object.create(v), t; }, r.awrap = function (t) { return { __await: t }; }, g(AsyncIterator.prototype), c(AsyncIterator.prototype, a, function () { return this; }), r.AsyncIterator = AsyncIterator, r.async = function (t, e, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(h(t, e, n, o), i); return r.isGeneratorFunction(e) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, g(v), c(v, u, "Generator"), c(v, i, function () { return this; }), c(v, "toString", function () { return "[object Generator]"; }), r.keys = function (t) { var r = Object(t), e = []; for (var n in r) e.unshift(n); return function t() { for (; e.length;) if ((n = e.pop()) in r) return t.value = n, t.done = !1, t; return t.done = !0, t; }; }, r.values = x, Context.prototype = { constructor: Context, reset: function reset(r) { if (this.prev = this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(m), !r) for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0][4]; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(r) { if (this.done) throw r; var e = this; function n(t) { a.type = "throw", a.arg = r, e.next = t; } for (var o = e.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i[4], u = this.prev, c = i[1], h = i[2]; if (-1 === i[0]) return n("end"), !1; if (!c && !h) throw Error("try statement without catch or finally"); if (null != i[0] && i[0] <= u) { if (u < c) return this.method = "next", this.arg = t, n(c), !0; if (u < h) return n(h), !1; } } }, abrupt: function abrupt(t, r) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var n = this.tryEntries[e]; if (n[0] > -1 && n[0] <= this.prev && this.prev < n[2]) { var o = n; break; } } o && ("break" === t || "continue" === t) && o[0] <= r && r <= o[2] && (o = null); var i = o ? o[4] : {}; return i.type = t, i.arg = r, o ? (this.method = "next", this.next = o[2], f) : this.complete(i); }, complete: function complete(t, r) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), f; }, finish: function finish(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[2] === t) return this.complete(e[4], e[3]), m(e), f; } }, "catch": function _catch(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[0] === t) { var n = e[4]; if ("throw" === n.type) { var o = n.arg; m(e); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(r, e, n) { return this.delegate = { i: x(r), r: e, n: n }, "next" === this.method && (this.arg = t), f; } }, r; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }



var RecouvrementDDContract = /*#__PURE__*/function (_DrillDownContract) {
  function RecouvrementDDContract() {
    _classCallCheck(this, RecouvrementDDContract);
    return _callSuper(this, RecouvrementDDContract, arguments);
  }
  _inherits(RecouvrementDDContract, _DrillDownContract);
  return _createClass(RecouvrementDDContract, [{
    key: "getToolConfig",
    value: function getToolConfig(toolKey) {
      var tool = _tools_recouvrement_tools_js__WEBPACK_IMPORTED_MODULE_1__.TOOLS_CONFIG[toolKey];
      if (!tool) throw new Error("Outil non trouv\xE9: ".concat(toolKey));
      return tool;
    }
  }, {
    key: "resolveData",
    value: function () {
      var _resolveData = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(resolverKey, params) {
        var resolver;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              resolver = _data_resolvers_recouvrement_data_resolver_js__WEBPACK_IMPORTED_MODULE_2__.DATA_RESOLVERS[resolverKey];
              if (resolver) {
                _context.next = 3;
                break;
              }
              throw new Error("R\xE9solveur non trouv\xE9: ".concat(resolverKey));
            case 3:
              return _context.abrupt("return", resolver(params));
            case 4:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      function resolveData(_x, _x2) {
        return _resolveData.apply(this, arguments);
      }
      return resolveData;
    }()
  }]);
}(_DrillDownContract_js__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./resources/js/services/drilldown/data-resolvers/recouvrement-data-resolver.js":
/*!**************************************************************************************!*\
  !*** ./resources/js/services/drilldown/data-resolvers/recouvrement-data-resolver.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DATA_RESOLVERS: () => (/* binding */ DATA_RESOLVERS)
/* harmony export */ });
/* harmony import */ var _recouvrement_service_teams_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../recouvrement.service_teams.js */ "./resources/js/services/recouvrement.service_teams.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return r; }; var t, r = {}, e = Object.prototype, n = e.hasOwnProperty, o = "function" == typeof Symbol ? Symbol : {}, i = o.iterator || "@@iterator", a = o.asyncIterator || "@@asyncIterator", u = o.toStringTag || "@@toStringTag"; function c(t, r, e, n) { Object.defineProperty(t, r, { value: e, enumerable: !n, configurable: !n, writable: !n }); } try { c({}, ""); } catch (t) { c = function c(t, r, e) { return t[r] = e; }; } function h(r, e, n, o) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype); return c(a, "_invoke", function (r, e, n) { var o = 1; return function (i, a) { if (3 === o) throw Error("Generator is already running"); if (4 === o) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var u = n.delegate; if (u) { var c = d(u, n); if (c) { if (c === f) continue; return c; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (1 === o) throw o = 4, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = 3; var h = s(r, e, n); if ("normal" === h.type) { if (o = n.done ? 4 : 2, h.arg === f) continue; return { value: h.arg, done: n.done }; } "throw" === h.type && (o = 4, n.method = "throw", n.arg = h.arg); } }; }(r, n, new Context(o || [])), !0), a; } function s(t, r, e) { try { return { type: "normal", arg: t.call(r, e) }; } catch (t) { return { type: "throw", arg: t }; } } r.wrap = h; var f = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var l = {}; c(l, i, function () { return this; }); var p = Object.getPrototypeOf, y = p && p(p(x([]))); y && y !== e && n.call(y, i) && (l = y); var v = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(l); function g(t) { ["next", "throw", "return"].forEach(function (r) { c(t, r, function (t) { return this._invoke(r, t); }); }); } function AsyncIterator(t, r) { function e(o, i, a, u) { var c = s(t[o], t, i); if ("throw" !== c.type) { var h = c.arg, f = h.value; return f && "object" == _typeof(f) && n.call(f, "__await") ? r.resolve(f.__await).then(function (t) { e("next", t, a, u); }, function (t) { e("throw", t, a, u); }) : r.resolve(f).then(function (t) { h.value = t, a(h); }, function (t) { return e("throw", t, a, u); }); } u(c.arg); } var o; c(this, "_invoke", function (t, n) { function i() { return new r(function (r, o) { e(t, n, r, o); }); } return o = o ? o.then(i, i) : i(); }, !0); } function d(r, e) { var n = e.method, o = r.i[n]; if (o === t) return e.delegate = null, "throw" === n && r.i["return"] && (e.method = "return", e.arg = t, d(r, e), "throw" === e.method) || "return" !== n && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + n + "' method")), f; var i = s(o, r.i, e.arg); if ("throw" === i.type) return e.method = "throw", e.arg = i.arg, e.delegate = null, f; var a = i.arg; return a ? a.done ? (e[r.r] = a.value, e.next = r.n, "return" !== e.method && (e.method = "next", e.arg = t), e.delegate = null, f) : a : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f); } function w(t) { this.tryEntries.push(t); } function m(r) { var e = r[4] || {}; e.type = "normal", e.arg = t, r[4] = e; } function Context(t) { this.tryEntries = [[-1]], t.forEach(w, this), this.reset(!0); } function x(r) { if (null != r) { var e = r[i]; if (e) return e.call(r); if ("function" == typeof r.next) return r; if (!isNaN(r.length)) { var o = -1, a = function e() { for (; ++o < r.length;) if (n.call(r, o)) return e.value = r[o], e.done = !1, e; return e.value = t, e.done = !0, e; }; return a.next = a; } } throw new TypeError(_typeof(r) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, c(v, "constructor", GeneratorFunctionPrototype), c(GeneratorFunctionPrototype, "constructor", GeneratorFunction), c(GeneratorFunctionPrototype, u, GeneratorFunction.displayName = "GeneratorFunction"), r.isGeneratorFunction = function (t) { var r = "function" == typeof t && t.constructor; return !!r && (r === GeneratorFunction || "GeneratorFunction" === (r.displayName || r.name)); }, r.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, c(t, u, "GeneratorFunction")), t.prototype = Object.create(v), t; }, r.awrap = function (t) { return { __await: t }; }, g(AsyncIterator.prototype), c(AsyncIterator.prototype, a, function () { return this; }), r.AsyncIterator = AsyncIterator, r.async = function (t, e, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(h(t, e, n, o), i); return r.isGeneratorFunction(e) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, g(v), c(v, u, "Generator"), c(v, i, function () { return this; }), c(v, "toString", function () { return "[object Generator]"; }), r.keys = function (t) { var r = Object(t), e = []; for (var n in r) e.unshift(n); return function t() { for (; e.length;) if ((n = e.pop()) in r) return t.value = n, t.done = !1, t; return t.done = !0, t; }; }, r.values = x, Context.prototype = { constructor: Context, reset: function reset(r) { if (this.prev = this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(m), !r) for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0][4]; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(r) { if (this.done) throw r; var e = this; function n(t) { a.type = "throw", a.arg = r, e.next = t; } for (var o = e.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i[4], u = this.prev, c = i[1], h = i[2]; if (-1 === i[0]) return n("end"), !1; if (!c && !h) throw Error("try statement without catch or finally"); if (null != i[0] && i[0] <= u) { if (u < c) return this.method = "next", this.arg = t, n(c), !0; if (u < h) return n(h), !1; } } }, abrupt: function abrupt(t, r) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var n = this.tryEntries[e]; if (n[0] > -1 && n[0] <= this.prev && this.prev < n[2]) { var o = n; break; } } o && ("break" === t || "continue" === t) && o[0] <= r && r <= o[2] && (o = null); var i = o ? o[4] : {}; return i.type = t, i.arg = r, o ? (this.method = "next", this.next = o[2], f) : this.complete(i); }, complete: function complete(t, r) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), f; }, finish: function finish(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[2] === t) return this.complete(e[4], e[3]), m(e), f; } }, "catch": function _catch(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[0] === t) { var n = e[4]; if ("throw" === n.type) { var o = n.arg; m(e); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(r, e, n) { return this.delegate = { i: x(r), r: e, n: n }, "next" === this.method && (this.arg = t), f; } }, r; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }

var getUserHost = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(user, appInstance) {
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          if (user !== null && user !== void 0 && user.filiale) {
            _context.next = 2;
            break;
          }
          throw new Error("Invalid user");
        case 2:
          if (!(typeof (appInstance === null || appInstance === void 0 ? void 0 : appInstance.reportex_link) !== "function")) {
            _context.next = 4;
            break;
          }
          throw new Error("Invalid app instance");
        case 4:
          _context.next = 6;
          return appInstance.reportex_link(user.filiale);
        case 6:
          return _context.abrupt("return", _context.sent);
        case 7:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function getUserHost(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var apiClient = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(appInstance, user, endpoint, data) {
    var host;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          data = data || {};
          _context2.next = 3;
          return getUserHost(user, appInstance);
        case 3:
          host = _context2.sent;
          return _context2.abrupt("return", appInstance.$axios.post("".concat(host, "/").concat(endpoint), _objectSpread(_objectSpread({}, data), {}, {
            user: user,
            filiale: data.filiale || user.filiale
          })));
        case 5:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function apiClient(_x3, _x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();
var recoveryApiClient = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(data, endpoint) {
    var _data$userContext, _data$userContext2, _response$data;
    var response;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          data = data || {};
          data.filters.filiale = (_data$userContext = data.userContext) === null || _data$userContext === void 0 ? void 0 : _data$userContext.filiale;
          _context3.next = 4;
          return apiClient(data.appInstance, data.user, "creditbuilder/api/v1/".concat(endpoint), {
            user: data.user,
            filiale: (_data$userContext2 = data.userContext) === null || _data$userContext2 === void 0 ? void 0 : _data$userContext2.filiale,
            filters: data.filters,
            selection: data.selection,
            user_context: data.userContext
          });
        case 4:
          response = _context3.sent;
          return _context3.abrupt("return", ((_response$data = response.data) === null || _response$data === void 0 ? void 0 : _response$data.data) || []);
        case 6:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return function recoveryApiClient(_x7, _x8) {
    return _ref3.apply(this, arguments);
  };
}();
var getRecoveryTeamActors = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(filiale) {
    var options,
      teamsData,
      _args4 = arguments;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          options = _args4.length > 1 && _args4[1] !== undefined ? _args4[1] : {};
          _context4.next = 3;
          return _recouvrement_service_teams_js__WEBPACK_IMPORTED_MODULE_0__["default"].getRecoveryMapDispAgents(filiale, _objectSpread({
            to_array: true
          }, options));
        case 3:
          teamsData = _context4.sent;
          if (teamsData) {
            _context4.next = 6;
            break;
          }
          throw new Error("Impossible de récupérer la liste des agents de recouvrement");
        case 6:
          return _context4.abrupt("return", teamsData.find(function (teamData) {
            return teamData.team === options.team;
          }) || {});
        case 7:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return function getRecoveryTeamActors(_x9) {
    return _ref4.apply(this, arguments);
  };
}();
var DATA_RESOLVERS = {
  resolveAgentEntryChoice: function resolveAgentEntryChoice(params) {
    var _params$userContext;
    var choices = [{
      id: "browse_teams",
      name: "Parcourir les équipes"
    }, {
      id: "my_clients",
      name: "Voir mes clients"
    }];
    if (((_params$userContext = params.userContext) === null || _params$userContext === void 0 ? void 0 : _params$userContext.role) === "ROLE_AGENT_E1") {
      choices = choices.filter(function (c) {
        return c.id === "my_clients";
      });
    }
    return Promise.resolve(choices);
  },
  fetchDexList: function () {
    var _fetchDexList = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(params) {
      var _params$userContext2;
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            if (params !== null && params !== void 0 && (_params$userContext2 = params.userContext) !== null && _params$userContext2 !== void 0 && _params$userContext2.filiale) {
              _context5.next = 2;
              break;
            }
            throw new Error("Filiale is required");
          case 2:
            return _context5.abrupt("return", []);
          case 3:
          case "end":
            return _context5.stop();
        }
      }, _callee5);
    }));
    function fetchDexList(_x0) {
      return _fetchDexList.apply(this, arguments);
    }
    return fetchDexList;
  }(),
  filterTeamsByRole: function filterTeamsByRole(params) {
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
      var _params$userContext3, _params$userContext4, _params$userContext5;
      var role, allTeams, filteredTeams, team_restriction;
      return _regeneratorRuntime().wrap(function _callee6$(_context6) {
        while (1) switch (_context6.prev = _context6.next) {
          case 0:
            role = params === null || params === void 0 || (_params$userContext3 = params.userContext) === null || _params$userContext3 === void 0 ? void 0 : _params$userContext3.role; // Récupérer toutes les équipes avec leurs statistiques
            // const allTeams = getTeams();
            allTeams = ["EQUIPE_1", "EQUIPE_2", "EQUIPE_3"];
            filteredTeams = [];
            team_restriction = {};
            _context6.t0 = role;
            _context6.next = _context6.t0 === "ROLE_DIRECTEUR" ? 7 : _context6.t0 === "ROLE_RESPONSABLE_E3" ? 9 : _context6.t0 === "ROLE_AGENT_E3" ? 11 : _context6.t0 === "ROLE_RESPONSABLE_E2" ? 14 : _context6.t0 === "ROLE_AGENT_E2" ? 16 : _context6.t0 === "ROLE_RESPONSABLE_E1" ? 19 : _context6.t0 === "ROLE_AGENT_E1" ? 21 : 23;
            break;
          case 7:
            // Directeur: listes des équipes 1, 2, 3
            filteredTeams = allTeams;
            return _context6.abrupt("break", 24);
          case 9:
            // Responsable E3: listes des équipes 1, 2, 3
            filteredTeams = allTeams;
            return _context6.abrupt("break", 24);
          case 11:
            // Agent E3: listes des équipes 1, 2
            filteredTeams = allTeams;
            team_restriction["EQUIPE_3"] = {
              actors_ids: [(_params$userContext4 = params.userContext) === null || _params$userContext4 === void 0 ? void 0 : _params$userContext4.id]
            };
            return _context6.abrupt("break", 24);
          case 14:
            // Responsable E2: listes des équipes 1, 2
            filteredTeams = allTeams.filter(function (team) {
              return team === "EQUIPE_1" || team === "EQUIPE_2";
            });
            // team_restriction['EQUIPE_2'] = await getRecoveryTeamAgents("EQUIPE_2", params.userContext?.filiale);
            return _context6.abrupt("break", 24);
          case 16:
            // Agent E2: listes des équipes 1 (une seule équipe)
            filteredTeams = allTeams.filter(function (team) {
              return team === "EQUIPE_1" || team === "EQUIPE_2";
            });
            team_restriction["EQUIPE_2"] = {
              actors_ids: [(_params$userContext5 = params.userContext) === null || _params$userContext5 === void 0 ? void 0 : _params$userContext5.id]
            };
            return _context6.abrupt("break", 24);
          case 19:
            // Responsable E1: listes des équipes 1 (une seule équipe)
            filteredTeams = allTeams.filter(function (team) {
              return team === "EQUIPE_1";
            });
            return _context6.abrupt("break", 24);
          case 21:
            // Agent E1: accès limité, peut-être aucune équipe ou données personnelles
            filteredTeams = [];
            return _context6.abrupt("break", 24);
          case 23:
            filteredTeams = [];
          case 24:
            params.filters.teams = filteredTeams;
            params.filters.team_restriction = team_restriction;
            return _context6.abrupt("return", recoveryApiClient(params, "execution-taches-recouvrement/extended/"));
          case 27:
          case "end":
            return _context6.stop();
        }
      }, _callee6);
    }))();
  },
  fetchResponsablesByEquipe: function () {
    var _fetchResponsablesByEquipe = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8(params) {
      var _params$selection, _params$userContext6;
      var team, userContext, result, isTeamResp, responsablesAgainAgents, checkTeam, _params$userContext7;
      return _regeneratorRuntime().wrap(function _callee8$(_context8) {
        while (1) switch (_context8.prev = _context8.next) {
          case 0:
            // afficher la liste des responsables de l'équipe
            // si le user est lui meme de l'équipe on ne retourne que lui
            team = params === null || params === void 0 || (_params$selection = params.selection) === null || _params$selection === void 0 ? void 0 : _params$selection.id;
            userContext = params === null || params === void 0 ? void 0 : params.userContext;
            _context8.next = 4;
            return getRecoveryTeamActors((_params$userContext6 = params.userContext) === null || _params$userContext6 === void 0 ? void 0 : _params$userContext6.filiale, {
              team: team,
              filter_type: "team_responsables"
            });
          case 4:
            result = _context8.sent;
            isTeamResp = team === "EQUIPE_".concat(userContext === null || userContext === void 0 ? void 0 : userContext.equipeId) &&
            // Il est de l'équipe
            (userContext === null || userContext === void 0 ? void 0 : userContext.role) === "ROLE_RESPONSABLE_E".concat(userContext === null || userContext === void 0 ? void 0 : userContext.equipeId); // Il est responsable de l'équipe
            _context8.next = 8;
            return Promise.all(result.responsables.map(/*#__PURE__*/function () {
              var _ref5 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7(resp) {
                var result;
                return _regeneratorRuntime().wrap(function _callee7$(_context7) {
                  while (1) switch (_context7.prev = _context7.next) {
                    case 0:
                      if (!(isTeamResp && resp.id !== (userContext === null || userContext === void 0 ? void 0 : userContext.id))) {
                        _context7.next = 2;
                        break;
                      }
                      return _context7.abrupt("return", null);
                    case 2:
                      _context7.next = 4;
                      return getRecoveryTeamActors(userContext === null || userContext === void 0 ? void 0 : userContext.filiale, {
                        team: team,
                        filter_type: "agents_by_responsable",
                        responsable_id: resp.id
                      });
                    case 4:
                      result = _context7.sent;
                      return _context7.abrupt("return", {
                        id: resp.id,
                        name: resp.name,
                        agents: result.agents.map(function (a) {
                          return a.id;
                        })
                      });
                    case 6:
                    case "end":
                      return _context7.stop();
                  }
                }, _callee7);
              }));
              return function (_x10) {
                return _ref5.apply(this, arguments);
              };
            }()));
          case 8:
            responsablesAgainAgents = _context8.sent;
            params.filters.responsables = responsablesAgainAgents.filter(Boolean);
            params.filters.team = team;
            checkTeam = function checkTeam(tn) {
              return "ROLE_AGENT_E".concat(tn) === (userContext === null || userContext === void 0 ? void 0 : userContext.role) && team === "EQUIPE_".concat(userContext === null || userContext === void 0 ? void 0 : userContext.equipeId);
            };
            if ([2, 3].some(checkTeam)) {
              params.filters.responsables = responsablesAgainAgents.filter(function (r) {
                return r.agents.includes(userContext === null || userContext === void 0 ? void 0 : userContext.id);
              }).map(function (r) {
                r.agents = r.agents.filter(function (aId) {
                  return aId === (userContext === null || userContext === void 0 ? void 0 : userContext.id);
                });
                return r;
              });
              params.filters.team_restriction = _defineProperty({}, team, {
                actors_ids: [(_params$userContext7 = params.userContext) === null || _params$userContext7 === void 0 ? void 0 : _params$userContext7.id]
              });
            }
            return _context8.abrupt("return", recoveryApiClient(params, "execution-taches-recouvrement/extended/"));
          case 14:
          case "end":
            return _context8.stop();
        }
      }, _callee8);
    }));
    function fetchResponsablesByEquipe(_x1) {
      return _fetchResponsablesByEquipe.apply(this, arguments);
    }
    return fetchResponsablesByEquipe;
  }(),
  fetchAgentsByResponsable: function () {
    var _fetchAgentsByResponsable = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee9(params) {
      var _params$selection2, _prevContext$selectio;
      var prevContext, responsableId, team, userContext, result, agents, checkTeam;
      return _regeneratorRuntime().wrap(function _callee9$(_context9) {
        while (1) switch (_context9.prev = _context9.next) {
          case 0:
            prevContext = ((params === null || params === void 0 ? void 0 : params.breadcrumb) || []).slice(-2, -1)[0] || {};
            responsableId = params === null || params === void 0 || (_params$selection2 = params.selection) === null || _params$selection2 === void 0 ? void 0 : _params$selection2.id;
            team = prevContext === null || prevContext === void 0 || (_prevContext$selectio = prevContext.selection) === null || _prevContext$selectio === void 0 ? void 0 : _prevContext$selectio.id;
            userContext = params === null || params === void 0 ? void 0 : params.userContext;
            if (responsableId) {
              _context9.next = 6;
              break;
            }
            throw new Error("Responsable ID is required");
          case 6:
            _context9.next = 8;
            return getRecoveryTeamActors(userContext === null || userContext === void 0 ? void 0 : userContext.filiale, {
              team: team,
              filter_type: "agents_by_responsable",
              responsable_id: responsableId
            });
          case 8:
            result = _context9.sent;
            agents = (result.agents || []).map(function (a) {
              return {
                id: a.id,
                name: a.name
              };
            });
            checkTeam = function checkTeam(tn) {
              return "ROLE_AGENT_E".concat(tn) === (userContext === null || userContext === void 0 ? void 0 : userContext.role) && team === "EQUIPE_".concat(userContext === null || userContext === void 0 ? void 0 : userContext.equipeId);
            };
            if ([2, 3].some(checkTeam)) {
              agents = agents.filter(function (a) {
                return a.id === userContext.id;
              });
            }
            params.filters.agents = agents;
            params.filters.team = team;
            return _context9.abrupt("return", recoveryApiClient(params, "execution-taches-recouvrement/extended/"));
          case 15:
          case "end":
            return _context9.stop();
        }
      }, _callee9);
    }));
    function fetchAgentsByResponsable(_x11) {
      return _fetchAgentsByResponsable.apply(this, arguments);
    }
    return fetchAgentsByResponsable;
  }(),
  fetchClientsByAgent: function fetchClientsByAgent(params) {
    var _params$selection3, _params$userContext8;
    var agentId = params === null || params === void 0 || (_params$selection3 = params.selection) === null || _params$selection3 === void 0 ? void 0 : _params$selection3.id;
    if (!agentId && (params === null || params === void 0 || (_params$userContext8 = params.userContext) === null || _params$userContext8 === void 0 ? void 0 : _params$userContext8.role) === "ROLE_AGENT_E1") {
      var _params$userContext$i, _params$userContext9, _params$userContext0;
      agentId = (_params$userContext$i = params === null || params === void 0 || (_params$userContext9 = params.userContext) === null || _params$userContext9 === void 0 ? void 0 : _params$userContext9.id) !== null && _params$userContext$i !== void 0 ? _params$userContext$i : params === null || params === void 0 || (_params$userContext0 = params.userContext) === null || _params$userContext0 === void 0 ? void 0 : _params$userContext0.user_id;
    }
    params.filters.agent_id = agentId;
    return recoveryApiClient(params, "execution-taches-recouvrement/extended/");
  },
  fetchDossiersByClient: function fetchDossiersByClient(params) {
    var _params$selection4;
    var clientDocs = params === null || params === void 0 || (_params$selection4 = params.selection) === null || _params$selection4 === void 0 ? void 0 : _params$selection4.cred_pub_keys;
    if (!clientDocs) {
      throw new Error("Client documents are required");
    }
    params.filters.cred_pub_keys = clientDocs;
    return recoveryApiClient(params, "execution-taches-recouvrement/extended/");
  },
  navigateToDossier: function navigateToDossier(params) {
    var _params$selection5;
    var dossierId = params === null || params === void 0 || (_params$selection5 = params.selection) === null || _params$selection5 === void 0 ? void 0 : _params$selection5.cred_pub_key;
    var app = params === null || params === void 0 ? void 0 : params.appInstance;
    if (!app) {
      throw new Error("App instance is required");
    }
    if (!dossierId) {
      throw new Error("Dossier ID is required");
    }
    app.router.push({
      name: "creation",
      params: {
        templateId: dossierId
      }
    });
  }
};

/***/ }),

/***/ "./resources/js/services/drilldown/hierarchies/recouvrement-hierarchy.js":
/*!*******************************************************************************!*\
  !*** ./resources/js/services/drilldown/hierarchies/recouvrement-hierarchy.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HIERARCHY_CONFIG: () => (/* binding */ HIERARCHY_CONFIG)
/* harmony export */ });
var HIERARCHY_CONFIG = {
  paths: {
    client_to_dossier_path: ['client_list', 'dossier_list', 'dossier_detail'],
    agent_to_dossier_path: ['agent_list', {
      importPath: 'client_to_dossier_path'
    }],
    responsable_to_dossier_path: ['responsable_list', {
      importPath: 'agent_to_dossier_path'
    }],
    full_team_browse_path: ['equipe_list', {
      importPath: 'responsable_to_dossier_path'
    }]
  },
  entryPoints: {
    'ROLE_DIRECTEUR': {
      pathName: 'full_team_browse_path'
    },
    'ROLE_RESPONSABLE_E3': {
      pathName: 'full_team_browse_path'
    },
    'ROLE_RESPONSABLE_E2': {
      pathName: 'full_team_browse_path'
    },
    'ROLE_RESPONSABLE_E1': {
      pathName: 'full_team_browse_path'
    },
    'ROLE_AGENT_E3': {
      pathName: 'full_team_browse_path'
    },
    'ROLE_AGENT_E2': {
      pathName: 'full_team_browse_path'
    },
    'ROLE_AGENT_E1': {
      pathName: 'client_to_dossier_path'
    }
  }
};

/***/ }),

/***/ "./resources/js/services/drilldown/tools/recouvrement-tools.js":
/*!*********************************************************************!*\
  !*** ./resources/js/services/drilldown/tools/recouvrement-tools.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TOOLS_CONFIG: () => (/* binding */ TOOLS_CONFIG)
/* harmony export */ });
var TOOLS_CONFIG = {
  agent_entry_choice: {
    label: "Que souhaitez-vous faire ?",
    resolverKey: "resolveAgentEntryChoice",
    component: "ChoiceMenuComponent",
    outcomes: {
      browse_teams: {
        pathName: "full_team_browse_path"
      },
      my_clients: {
        pathName: "client_to_dossier_path"
      }
    }
  },
  equipe_list: {
    resolverKey: "filterTeamsByRole",
    label: "Equipes"
  },
  responsable_list: {
    label: "Responsables",
    resolverKey: "fetchResponsablesByEquipe",
    component: "UserListComponent"
  },
  agent_list: {
    label: "Agents",
    resolverKey: "fetchAgentsByResponsable",
    component: "UserListComponent"
  },
  client_list: {
    label: "Clients",
    resolverKey: "fetchClientsByAgent",
    component: "GenericListComponent"
  },
  dossier_list: {
    label: "Dossiers du client",
    resolverKey: "fetchDossiersByClient",
    component: "DossierTableComponent"
  },
  dossier_detail: {
    label: "Affichage du Dossier",
    resolverKey: "navigateToDossier",
    component: "DossierDetailComponent"
  }
};

/***/ })

}]);