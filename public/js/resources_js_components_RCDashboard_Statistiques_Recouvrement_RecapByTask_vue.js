"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_RCDashboard_Statistiques_Recouvrement_RecapByTask_vue"],{

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


/***/ })

}]);