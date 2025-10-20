"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_RCDashboard_Statistiques_Recouvrement_ReportOne_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/RCDashboard/Statistiques/Recouvrement/ReportOne.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/RCDashboard/Statistiques/Recouvrement/ReportOne.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Input_SelectFiliale_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Input/SelectFiliale.vue */ "./resources/js/components/RCDashboard/Input/SelectFiliale.vue");
/* harmony import */ var _ErrorRetry_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ErrorRetry.vue */ "./resources/js/components/RCDashboard/Statistiques/Recouvrement/ErrorRetry.vue");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return r; }; var t, r = {}, e = Object.prototype, n = e.hasOwnProperty, o = "function" == typeof Symbol ? Symbol : {}, i = o.iterator || "@@iterator", a = o.asyncIterator || "@@asyncIterator", u = o.toStringTag || "@@toStringTag"; function c(t, r, e, n) { Object.defineProperty(t, r, { value: e, enumerable: !n, configurable: !n, writable: !n }); } try { c({}, ""); } catch (t) { c = function c(t, r, e) { return t[r] = e; }; } function h(r, e, n, o) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype); return c(a, "_invoke", function (r, e, n) { var o = 1; return function (i, a) { if (3 === o) throw Error("Generator is already running"); if (4 === o) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var u = n.delegate; if (u) { var c = d(u, n); if (c) { if (c === f) continue; return c; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (1 === o) throw o = 4, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = 3; var h = s(r, e, n); if ("normal" === h.type) { if (o = n.done ? 4 : 2, h.arg === f) continue; return { value: h.arg, done: n.done }; } "throw" === h.type && (o = 4, n.method = "throw", n.arg = h.arg); } }; }(r, n, new Context(o || [])), !0), a; } function s(t, r, e) { try { return { type: "normal", arg: t.call(r, e) }; } catch (t) { return { type: "throw", arg: t }; } } r.wrap = h; var f = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var l = {}; c(l, i, function () { return this; }); var p = Object.getPrototypeOf, y = p && p(p(x([]))); y && y !== e && n.call(y, i) && (l = y); var v = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(l); function g(t) { ["next", "throw", "return"].forEach(function (r) { c(t, r, function (t) { return this._invoke(r, t); }); }); } function AsyncIterator(t, r) { function e(o, i, a, u) { var c = s(t[o], t, i); if ("throw" !== c.type) { var h = c.arg, f = h.value; return f && "object" == _typeof(f) && n.call(f, "__await") ? r.resolve(f.__await).then(function (t) { e("next", t, a, u); }, function (t) { e("throw", t, a, u); }) : r.resolve(f).then(function (t) { h.value = t, a(h); }, function (t) { return e("throw", t, a, u); }); } u(c.arg); } var o; c(this, "_invoke", function (t, n) { function i() { return new r(function (r, o) { e(t, n, r, o); }); } return o = o ? o.then(i, i) : i(); }, !0); } function d(r, e) { var n = e.method, o = r.i[n]; if (o === t) return e.delegate = null, "throw" === n && r.i["return"] && (e.method = "return", e.arg = t, d(r, e), "throw" === e.method) || "return" !== n && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + n + "' method")), f; var i = s(o, r.i, e.arg); if ("throw" === i.type) return e.method = "throw", e.arg = i.arg, e.delegate = null, f; var a = i.arg; return a ? a.done ? (e[r.r] = a.value, e.next = r.n, "return" !== e.method && (e.method = "next", e.arg = t), e.delegate = null, f) : a : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f); } function w(t) { this.tryEntries.push(t); } function m(r) { var e = r[4] || {}; e.type = "normal", e.arg = t, r[4] = e; } function Context(t) { this.tryEntries = [[-1]], t.forEach(w, this), this.reset(!0); } function x(r) { if (null != r) { var e = r[i]; if (e) return e.call(r); if ("function" == typeof r.next) return r; if (!isNaN(r.length)) { var o = -1, a = function e() { for (; ++o < r.length;) if (n.call(r, o)) return e.value = r[o], e.done = !1, e; return e.value = t, e.done = !0, e; }; return a.next = a; } } throw new TypeError(_typeof(r) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, c(v, "constructor", GeneratorFunctionPrototype), c(GeneratorFunctionPrototype, "constructor", GeneratorFunction), c(GeneratorFunctionPrototype, u, GeneratorFunction.displayName = "GeneratorFunction"), r.isGeneratorFunction = function (t) { var r = "function" == typeof t && t.constructor; return !!r && (r === GeneratorFunction || "GeneratorFunction" === (r.displayName || r.name)); }, r.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, c(t, u, "GeneratorFunction")), t.prototype = Object.create(v), t; }, r.awrap = function (t) { return { __await: t }; }, g(AsyncIterator.prototype), c(AsyncIterator.prototype, a, function () { return this; }), r.AsyncIterator = AsyncIterator, r.async = function (t, e, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(h(t, e, n, o), i); return r.isGeneratorFunction(e) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, g(v), c(v, u, "Generator"), c(v, i, function () { return this; }), c(v, "toString", function () { return "[object Generator]"; }), r.keys = function (t) { var r = Object(t), e = []; for (var n in r) e.unshift(n); return function t() { for (; e.length;) if ((n = e.pop()) in r) return t.value = n, t.done = !1, t; return t.done = !0, t; }; }, r.values = x, Context.prototype = { constructor: Context, reset: function reset(r) { if (this.prev = this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(m), !r) for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0][4]; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(r) { if (this.done) throw r; var e = this; function n(t) { a.type = "throw", a.arg = r, e.next = t; } for (var o = e.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i[4], u = this.prev, c = i[1], h = i[2]; if (-1 === i[0]) return n("end"), !1; if (!c && !h) throw Error("try statement without catch or finally"); if (null != i[0] && i[0] <= u) { if (u < c) return this.method = "next", this.arg = t, n(c), !0; if (u < h) return n(h), !1; } } }, abrupt: function abrupt(t, r) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var n = this.tryEntries[e]; if (n[0] > -1 && n[0] <= this.prev && this.prev < n[2]) { var o = n; break; } } o && ("break" === t || "continue" === t) && o[0] <= r && r <= o[2] && (o = null); var i = o ? o[4] : {}; return i.type = t, i.arg = r, o ? (this.method = "next", this.next = o[2], f) : this.complete(i); }, complete: function complete(t, r) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), f; }, finish: function finish(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[2] === t) return this.complete(e[4], e[3]), m(e), f; } }, "catch": function _catch(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[0] === t) { var n = e[4]; if ("throw" === n.type) { var o = n.arg; m(e); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(r, e, n) { return this.delegate = { i: x(r), r: e, n: n }, "next" === this.method && (this.arg = t), f; } }, r; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "ReportOne",
  components: {
    SelectFiliale: _Input_SelectFiliale_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    ErrorRetry: _ErrorRetry_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      error: null,
      loading: false,
      items: [],
      total: {},
      filiale: null,
      agence: null,
      headers: [],
      lastElement: 0
    };
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
              if (!(((_this$$route$query = _this.$route.query) === null || _this$$route$query === void 0 ? void 0 : _this$$route$query["super-tab"]) === "recovery-report")) {
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
        var _this2$$store$getters;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _this2.error = null;
              if (!_this2.__filiale__ || !_this2.__user__) {
                setTimeout(function () {
                  _this2.init();
                }, 500);
              } else {
                _this2.filiale = _this2.__filiale__;
                _this2.agence = (_this2$$store$getters = _this2.$store.getters.agence_obj) === null || _this2$$store$getters === void 0 ? void 0 : _this2$$store$getters.code;
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
        var _this3$__user__;
        var stopLoading, caf, _this3$__user__2, _this3$__user__3, _res$data$data, _res$data, _res$data$total, _res$data2, _res$data$bins, _res$data3, res, bins;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              stopLoading = _arguments.length > 0 && _arguments[0] !== undefined ? _arguments[0] : false;
              _this3.error = null;
              _this3.loading = true;
              caf = null;
              if (((_this3$__user__ = _this3.__user__) === null || _this3$__user__ === void 0 ? void 0 : _this3$__user__.role_uuid) == 'r472oAxtaFJSlsh5') {
                caf = {
                  id: (_this3$__user__2 = _this3.__user__) === null || _this3$__user__2 === void 0 ? void 0 : _this3$__user__2.user_id,
                  name: (_this3$__user__3 = _this3.__user__) === null || _this3$__user__3 === void 0 ? void 0 : _this3$__user__3.name
                };
              }
              _context3.prev = 5;
              _context3.next = 8;
              return _this3.$axios.post(_this3.reportex_link(_this3.filiale) + 'creditbuilder/api/v1/report-encours/', {
                filiale: _this3.filiale,
                agence: _this3.agence,
                user: _this3.__user__,
                caf: caf
              });
            case 8:
              res = _context3.sent;
              _this3.items = (_res$data$data = (_res$data = res.data) === null || _res$data === void 0 ? void 0 : _res$data.data) !== null && _res$data$data !== void 0 ? _res$data$data : [];
              _this3.total = (_res$data$total = (_res$data2 = res.data) === null || _res$data2 === void 0 ? void 0 : _res$data2.total) !== null && _res$data$total !== void 0 ? _res$data$total : 0;
              bins = (_res$data$bins = (_res$data3 = res.data) === null || _res$data3 === void 0 ? void 0 : _res$data3.bins) !== null && _res$data$bins !== void 0 ? _res$data$bins : [];
              _this3.lastElement = bins[bins.length - 2];
              _context3.next = 18;
              break;
            case 15:
              _context3.prev = 15;
              _context3.t0 = _context3["catch"](5);
              _this3.showError(_context3.t0);
              // this.toastError(error);
            case 18:
              _context3.prev = 18;
              _this3.loading = !stopLoading;
              return _context3.finish(18);
            case 21:
            case "end":
              return _context3.stop();
          }
        }, _callee3, null, [[5, 15, 18, 21]]);
      }))();
    },
    downloadTable: function downloadTable() {
      var _this4 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        var new_data, data;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return _this4.getData(true);
            case 2:
              new_data = [];
              _this4.items.forEach(function (el) {
                var reformatObject = function reformatObject(el) {
                  return {
                    duree_imp: el.max_duree === 9999 ? "Plus de ".concat(el.min_duree, " jours") : "De ".concat(el.min_duree, " \xE0 ").concat(el.max_duree, " jours"),
                    encours: el.encours,
                    encours_percent: el.encours_percent,
                    nombre_dossiers: el.nombre_dossiers,
                    nombre_dossiers_percent: parseFloat(el.nombre_dossiers_percent.toFixed(2))
                  };
                };
                new_data.push(reformatObject(el));
              });
              data = {};
              data = {
                "headers": _this4.headers,
                "items": new_data,
                "fileType": "excel",
                "title": "PAR selon la durée impayée"
              };
              EventBus.$emit("download-table-data", data);
            case 7:
            case "end":
              return _context4.stop();
          }
        }, _callee4);
      }))();
    }
  },
  watch: {
    __filiale__: function __filiale__(val) {
      if (val != this.filiale) {
        var _this$$store$getters$;
        this.filiale = val;
        this.agence = (_this$$store$getters$ = this.$store.getters.agence_obj) === null || _this$$store$getters$ === void 0 ? void 0 : _this$$store$getters$.code;
        this.getData(true);
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/RCDashboard/Statistiques/Recouvrement/ReportOne.vue?vue&type=template&id=4e3225d2":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/RCDashboard/Statistiques/Recouvrement/ReportOne.vue?vue&type=template&id=4e3225d2 ***!
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
  return _c("stat-table", {
    attrs: {
      loading: _vm.loading,
      title: "PAR selon la durée impayée",
      spacer: false,
      items: _vm.items,
      tableStyle: "max-width: 50%;",
      tdMaxWidth: "100px !important",
      useYearUpdater: false,
      showEmpty: !_vm.error,
      useDownload: false,
      useCounter: false
    },
    scopedSlots: _vm._u([{
      key: "toolbar-buttons",
      fn: function fn() {
        return [_c("div", {
          staticClass: "w-100 d-flex gap-4 flex-column px-2"
        }, [_c("div", {
          staticClass: "d-flex gap-2"
        }, [_c("div", {
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
        })])])])]), _vm._v(" "), _c("ErrorRetry", {
          attrs: {
            error: _vm.error
          },
          on: {
            retry: _vm.init
          }
        })], 1)];
      },
      proxy: true
    }, {
      key: "tableHeader",
      fn: function fn() {
        return [_c("tr", [_c("th", {
          staticClass: "my-sticky align-middle text-start",
          staticStyle: {
            width: "180px !important"
          },
          attrs: {
            rowspan: "2"
          }
        }, [_vm._v("\n        Durée Impayé\n      ")]), _vm._v(" "), _c("th", {
          staticClass: "text-center",
          attrs: {
            colspan: "2"
          }
        }, [_vm._v("Encours")]), _vm._v(" "), _c("th", {
          staticClass: "text-center",
          attrs: {
            colspan: "2"
          }
        }, [_vm._v("Nbre dossiers")])]), _vm._v(" "), _c("tr", {
          staticClass: "table-light"
        }, [_c("th", {
          staticClass: "text-center",
          staticStyle: {
            width: "180px !important"
          }
        }, [_vm._v("Montant")]), _vm._v(" "), _c("th", {
          staticClass: "text-center",
          staticStyle: {
            width: "70px !important"
          }
        }, [_vm._v("%")]), _vm._v(" "), _c("th", {
          staticClass: "text-center",
          staticStyle: {
            width: "100px !important"
          }
        }, [_vm._v("Nombre")]), _vm._v(" "), _c("th", {
          staticClass: "text-center",
          staticStyle: {
            width: "70px !important"
          }
        }, [_vm._v("%")])])];
      },
      proxy: true
    }, _vm.total ? {
      key: "total",
      fn: function fn() {
        var _vm$total, _vm$total2, _vm$total3, _vm$total4;
        return [_c("tr", {
          staticClass: "table-light"
        }, [_c("th", {
          staticClass: "my-sticky",
          attrs: {
            colspan: "1"
          }
        }, [_vm._v("Total")]), _vm._v(" "), _c("th", {
          staticClass: "number-style text-end"
        }, [_vm._v(_vm._s(_vm._f("formatNumber")((_vm$total = _vm.total) === null || _vm$total === void 0 ? void 0 : _vm$total.encours)) + "\n      ")]), _vm._v(" "), _c("th", {
          staticClass: "number-style text-end"
        }, [_vm._v(_vm._s(_vm._f("formatNumber")((_vm$total2 = _vm.total) === null || _vm$total2 === void 0 ? void 0 : _vm$total2.encours_percent)) + "\n      ")]), _vm._v(" "), _c("th", {
          staticClass: "number-style text-end"
        }, [_vm._v(_vm._s(_vm._f("formatNumber")((_vm$total3 = _vm.total) === null || _vm$total3 === void 0 ? void 0 : _vm$total3.nombre_dossiers)) + "\n      ")]), _vm._v(" "), _c("th", {
          staticClass: "number-style text-end"
        }, [_vm._v("\n        " + _vm._s(_vm._f("formatNumber")((_vm$total4 = _vm.total) === null || _vm$total4 === void 0 ? void 0 : _vm$total4.nombre_dossiers_percent)) + "\n      ")])])];
      },
      proxy: true
    } : null], null, true)
  }, [_vm._v(" "), _vm._v(" "), [_vm.items ? _vm._l(_vm.items, function (item) {
    return _c("tr", {
      key: item.acteur
    }, [_c("td", {
      staticClass: "my-sticky text-start"
    }, [item.max_duree >= _vm.lastElement ? _c("span", [_vm._v("\n            Plus de " + _vm._s(item.min_duree % 2 ? item.min_duree : item.min_duree - 1) + " jours\n          ")]) : _c("span", [_vm._v("De " + _vm._s(item.min_duree) + " à " + _vm._s(item.max_duree) + " jours")])]), _vm._v(" "), _c("td", {
      staticClass: "number-style text-end"
    }, [_vm._v(_vm._s(_vm._f("formatNumber")(item.encours)))]), _vm._v(" "), _c("td", {
      staticClass: "number-style text-end"
    }, [_vm._v(" " + _vm._s(_vm._f("formatNumber")(item.encours_percent, true)))]), _vm._v(" "), _c("td", {
      staticClass: "number-style text-end"
    }, [_vm._v(_vm._s(_vm._f("formatNumber")(item.nombre_dossiers)))]), _vm._v(" "), _c("td", {
      staticClass: "number-style text-end"
    }, [_vm._v(_vm._s(_vm._f("formatNumber")(item.nombre_dossiers_percent, true)))])]);
  }) : _vm._e()]], 2);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/components/RCDashboard/Statistiques/Recouvrement/ReportOne.vue":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/RCDashboard/Statistiques/Recouvrement/ReportOne.vue ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ReportOne_vue_vue_type_template_id_4e3225d2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ReportOne.vue?vue&type=template&id=4e3225d2 */ "./resources/js/components/RCDashboard/Statistiques/Recouvrement/ReportOne.vue?vue&type=template&id=4e3225d2");
/* harmony import */ var _ReportOne_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ReportOne.vue?vue&type=script&lang=js */ "./resources/js/components/RCDashboard/Statistiques/Recouvrement/ReportOne.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ReportOne_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _ReportOne_vue_vue_type_template_id_4e3225d2__WEBPACK_IMPORTED_MODULE_0__.render,
  _ReportOne_vue_vue_type_template_id_4e3225d2__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/RCDashboard/Statistiques/Recouvrement/ReportOne.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/RCDashboard/Statistiques/Recouvrement/ReportOne.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/components/RCDashboard/Statistiques/Recouvrement/ReportOne.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportOne_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ReportOne.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/RCDashboard/Statistiques/Recouvrement/ReportOne.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportOne_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/RCDashboard/Statistiques/Recouvrement/ReportOne.vue?vue&type=template&id=4e3225d2":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/components/RCDashboard/Statistiques/Recouvrement/ReportOne.vue?vue&type=template&id=4e3225d2 ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportOne_vue_vue_type_template_id_4e3225d2__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportOne_vue_vue_type_template_id_4e3225d2__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportOne_vue_vue_type_template_id_4e3225d2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ReportOne.vue?vue&type=template&id=4e3225d2 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/RCDashboard/Statistiques/Recouvrement/ReportOne.vue?vue&type=template&id=4e3225d2");


/***/ })

}]);