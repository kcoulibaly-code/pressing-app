"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_reportex_statistics_Annexe_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/reportex/statistics/Annexe.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/reportex/statistics/Annexe.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ChooseMonth_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChooseMonth.vue */ "./resources/js/components/reportex/statistics/ChooseMonth.vue");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return r; }; var t, r = {}, e = Object.prototype, n = e.hasOwnProperty, o = "function" == typeof Symbol ? Symbol : {}, i = o.iterator || "@@iterator", a = o.asyncIterator || "@@asyncIterator", u = o.toStringTag || "@@toStringTag"; function c(t, r, e, n) { Object.defineProperty(t, r, { value: e, enumerable: !n, configurable: !n, writable: !n }); } try { c({}, ""); } catch (t) { c = function c(t, r, e) { return t[r] = e; }; } function h(r, e, n, o) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype); return c(a, "_invoke", function (r, e, n) { var o = 1; return function (i, a) { if (3 === o) throw Error("Generator is already running"); if (4 === o) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var u = n.delegate; if (u) { var c = d(u, n); if (c) { if (c === f) continue; return c; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (1 === o) throw o = 4, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = 3; var h = s(r, e, n); if ("normal" === h.type) { if (o = n.done ? 4 : 2, h.arg === f) continue; return { value: h.arg, done: n.done }; } "throw" === h.type && (o = 4, n.method = "throw", n.arg = h.arg); } }; }(r, n, new Context(o || [])), !0), a; } function s(t, r, e) { try { return { type: "normal", arg: t.call(r, e) }; } catch (t) { return { type: "throw", arg: t }; } } r.wrap = h; var f = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var l = {}; c(l, i, function () { return this; }); var p = Object.getPrototypeOf, y = p && p(p(x([]))); y && y !== e && n.call(y, i) && (l = y); var v = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(l); function g(t) { ["next", "throw", "return"].forEach(function (r) { c(t, r, function (t) { return this._invoke(r, t); }); }); } function AsyncIterator(t, r) { function e(o, i, a, u) { var c = s(t[o], t, i); if ("throw" !== c.type) { var h = c.arg, f = h.value; return f && "object" == _typeof(f) && n.call(f, "__await") ? r.resolve(f.__await).then(function (t) { e("next", t, a, u); }, function (t) { e("throw", t, a, u); }) : r.resolve(f).then(function (t) { h.value = t, a(h); }, function (t) { return e("throw", t, a, u); }); } u(c.arg); } var o; c(this, "_invoke", function (t, n) { function i() { return new r(function (r, o) { e(t, n, r, o); }); } return o = o ? o.then(i, i) : i(); }, !0); } function d(r, e) { var n = e.method, o = r.i[n]; if (o === t) return e.delegate = null, "throw" === n && r.i["return"] && (e.method = "return", e.arg = t, d(r, e), "throw" === e.method) || "return" !== n && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + n + "' method")), f; var i = s(o, r.i, e.arg); if ("throw" === i.type) return e.method = "throw", e.arg = i.arg, e.delegate = null, f; var a = i.arg; return a ? a.done ? (e[r.r] = a.value, e.next = r.n, "return" !== e.method && (e.method = "next", e.arg = t), e.delegate = null, f) : a : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f); } function w(t) { this.tryEntries.push(t); } function m(r) { var e = r[4] || {}; e.type = "normal", e.arg = t, r[4] = e; } function Context(t) { this.tryEntries = [[-1]], t.forEach(w, this), this.reset(!0); } function x(r) { if (null != r) { var e = r[i]; if (e) return e.call(r); if ("function" == typeof r.next) return r; if (!isNaN(r.length)) { var o = -1, a = function e() { for (; ++o < r.length;) if (n.call(r, o)) return e.value = r[o], e.done = !1, e; return e.value = t, e.done = !0, e; }; return a.next = a; } } throw new TypeError(_typeof(r) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, c(v, "constructor", GeneratorFunctionPrototype), c(GeneratorFunctionPrototype, "constructor", GeneratorFunction), c(GeneratorFunctionPrototype, u, GeneratorFunction.displayName = "GeneratorFunction"), r.isGeneratorFunction = function (t) { var r = "function" == typeof t && t.constructor; return !!r && (r === GeneratorFunction || "GeneratorFunction" === (r.displayName || r.name)); }, r.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, c(t, u, "GeneratorFunction")), t.prototype = Object.create(v), t; }, r.awrap = function (t) { return { __await: t }; }, g(AsyncIterator.prototype), c(AsyncIterator.prototype, a, function () { return this; }), r.AsyncIterator = AsyncIterator, r.async = function (t, e, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(h(t, e, n, o), i); return r.isGeneratorFunction(e) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, g(v), c(v, u, "Generator"), c(v, i, function () { return this; }), c(v, "toString", function () { return "[object Generator]"; }), r.keys = function (t) { var r = Object(t), e = []; for (var n in r) e.unshift(n); return function t() { for (; e.length;) if ((n = e.pop()) in r) return t.value = n, t.done = !1, t; return t.done = !0, t; }; }, r.values = x, Context.prototype = { constructor: Context, reset: function reset(r) { if (this.prev = this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(m), !r) for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0][4]; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(r) { if (this.done) throw r; var e = this; function n(t) { a.type = "throw", a.arg = r, e.next = t; } for (var o = e.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i[4], u = this.prev, c = i[1], h = i[2]; if (-1 === i[0]) return n("end"), !1; if (!c && !h) throw Error("try statement without catch or finally"); if (null != i[0] && i[0] <= u) { if (u < c) return this.method = "next", this.arg = t, n(c), !0; if (u < h) return n(h), !1; } } }, abrupt: function abrupt(t, r) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var n = this.tryEntries[e]; if (n[0] > -1 && n[0] <= this.prev && this.prev < n[2]) { var o = n; break; } } o && ("break" === t || "continue" === t) && o[0] <= r && r <= o[2] && (o = null); var i = o ? o[4] : {}; return i.type = t, i.arg = r, o ? (this.method = "next", this.next = o[2], f) : this.complete(i); }, complete: function complete(t, r) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), f; }, finish: function finish(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[2] === t) return this.complete(e[4], e[3]), m(e), f; } }, "catch": function _catch(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[0] === t) { var n = e[4]; if ("throw" === n.type) { var o = n.arg; m(e); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(r, e, n) { return this.delegate = { i: x(r), r: e, n: n }, "next" === this.method && (this.arg = t), f; } }, r; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }

var months = {
  'janvier': 1,
  'février': 2,
  'mars': 3,
  'avril': 4,
  'mai': 5,
  'juin': 6,
  'juillet': 7,
  'août': 8,
  'septembre': 9,
  'octobre': 10,
  'novembre': 11,
  'décembre': 12
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'Profile2',
  components: {
    ChooseMonth: _ChooseMonth_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      sources: [{
        label: "Production",
        value: 'sum'
      }, {
        label: "Nombre de dossiers",
        value: 'count'
      }],
      periods: [{
        label: "Year To Date",
        value: 'ytd'
      }, {
        label: "Month To Date",
        value: 'mtd'
      }, {
        label: "Date Personalisée",
        value: 'custom'
      }],
      start_date: '',
      end_date: '',
      source_analyse: "sum",
      period: 'ytd',
      data: null,
      headers: [],
      monthRow: 'mois',
      dataOfMonth: null,
      monthHeaders: [],
      historicalData: null,
      historicalHeaders: [],
      type_donnee: 'code_agence',
      type_donnees: [{
        value: 'code_agence',
        label: "Agence"
      }, {
        value: 'tranche',
        label: "Tranche"
      }, {
        value: 'type_de_clientele',
        label: "Type de clientèle"
      }, {
        value: 'type_demande',
        label: "Type de demande"
      }],
      loading: false,
      monthLoading: false,
      total_data: [],
      monthTotal: [],
      historicalTotal: [],
      mois: [],
      showMonths: false,
      historicalLoading: false,
      years: [],
      year: new Date().getFullYear(),
      scrollingHistorical: false,
      segmentHistoricData: [],
      segmentHistoricHeaders: [],
      segmentHistoricTotal: [],
      type_credits: [],
      showMonthInput: false,
      month: ''
    };
  },
  created: function created() {
    var _this = this;
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var start, end, i;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            start = 2023;
            end = new Date().getFullYear();
            for (i = start; i <= end; i++) {
              _this.years.unshift(i);
            }
            _context.next = 5;
            return _this.getData();
          case 5:
            _context.next = 7;
            return _this.getAnnexAmount();
          case 7:
            _context.next = 9;
            return _this.getannexCount();
          case 9:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }))();
  },
  computed: {
    user: function user() {
      return this.$store.state.reportex.user;
    },
    filiales: function filiales() {
      return this.$store.state.reportex.filiales;
    },
    filiale: function filiale() {
      if (!this.filiale_) this.filiale_ = this.$store.state.reportex.filiale;
      return this.$store.state.reportex.filiale;
    },
    dataLabel: function dataLabel() {
      return "agence";
    }
  },
  methods: {
    getAllData: function getAllData() {
      var _this2 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              if (!(_this2.period == "custom" && !_this2.month)) {
                _context2.next = 2;
                break;
              }
              return _context2.abrupt("return");
            case 2:
              _this2.getData();
              _this2.getAnnexAmount();
              _this2.getannexCount();
            case 5:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }))();
    },
    getData: function getData() {
      var _this3 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _this3.loading = true;
              _this3.$axios.post(_this3.reportex_link() + "reportex/api/v1/statistiques-annexes/", {
                filiale: _this3.filiale,
                period: _this3.period,
                start_date: _this3.start_date,
                end_date: _this3.end_date,
                basic: true
              }).then(function (res) {
                var _this3$data;
                var total_data = [{
                  status: 'Total général',
                  production: res.data.map(function (el) {
                    return el.production;
                  }).reduce(function (sum, curr) {
                    return sum + curr;
                  }, 0),
                  "production_%": 100,
                  nombre_dossiers: res.data.map(function (el) {
                    return el.nombre_dossiers;
                  }).reduce(function (sum, curr) {
                    return sum + curr;
                  }, 0),
                  "nombre_dossiers_%": 100
                }];
                _this3.total_data = total_data;
                _this3.data = res.data.map(function (el) {
                  el['production_%'] = el['production_%'];
                  el['nombre_dossiers_%'] = el['nombre_dossiers_%'];
                  el.production = el.production.toLocaleString();
                  el.nombre_dossiers = el.nombre_dossiers.toLocaleString();
                  return {
                    status: el.status,
                    production: el.production,
                    'production_%': el['production_%'],
                    nombre_dossiers: el.nombre_dossiers,
                    "nombre_dossiers_%": el['nombre_dossiers_%']
                  };
                });
                if ((_this3$data = _this3.data) !== null && _this3$data !== void 0 && _this3$data.length) {
                  var keys = Object.keys(_this3.data[0]);
                  _this3.headers = keys;
                }
              })["finally"](function () {
                return _this3.loading = false;
              });
            case 2:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }))();
    },
    getAnnexAmount: function getAnnexAmount() {
      var _this4 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _this4.monthLoading = true;
              _this4.$axios.post(_this4.reportex_link() + "reportex/api/v1/statistiques-annexes/", {
                filiale: _this4.filiale,
                period: _this4.period,
                stat_type: "sum",
                start_date: _this4.start_date,
                end_date: _this4.end_date
              }).then(function (res) {
                var _this4$segmentHistori;
                var total = res.data.stats.map(function (el) {
                  return el.total;
                }).reduce(function (sum, curr) {
                  return sum + curr;
                }, 0);
                var keys = res.data.stats.length ? Object.keys(res.data.stats[0]).filter(function (el) {
                  return el.toLowerCase() != "agence";
                }) : [];
                keys = keys.reduce(function (sum, curr) {
                  if (!curr.includes('total')) {
                    var montant = res.data.stats.map(function (el) {
                      return el[curr] || 0;
                    }).reduce(function (cumul, current) {
                      return cumul + current;
                    }, 0);
                    sum[curr] = {
                      montant: montant,
                      percent: montant / (total || 1) * 100
                    };
                  } else {
                    var _montant = res.data.stats.map(function (el) {
                      return el.total || 0;
                    }).reduce(function (cumul, current) {
                      return cumul + current;
                    }, 0);
                    sum['total'] = {
                      montant: _montant,
                      percent: 100
                    };
                  }
                  return sum;
                }, {});
                var segmentHistoricTotal = {};
                segmentHistoricTotal[_this4.dataLabel] = "Total Général";
                segmentHistoricTotal = _objectSpread(_objectSpread({}, segmentHistoricTotal), keys);
                _this4.segmentHistoricTotal = [segmentHistoricTotal];
                _this4.segmentHistoricData = res.data.stats.map(function (el) {
                  var data = {};
                  data[_this4.dataLabel] = el[_this4.dataLabel];

                  // const total = el.Corporate + el.Retail
                  delete el[_this4.dataLabel];
                  for (var key in el) {
                    if (key.includes('total')) {
                      data[key] = {
                        montant: el[key],
                        'percent': 100
                      };
                    } else {
                      data[key] = {
                        montant: el[key],
                        'percent': (el[key] / (el.total || 1) * 100).toFixed(2)
                      };
                    }
                  }
                  return data;
                });
                if ((_this4$segmentHistori = _this4.segmentHistoricData) !== null && _this4$segmentHistori !== void 0 && _this4$segmentHistori.length) {
                  _this4.segmentHistoricHeaders = Object.keys(_this4.segmentHistoricData[0]).filter(function (el) {
                    return !el.includes('%');
                  });
                }
              })["catch"](function (err) {
                return console.error(err);
              })["finally"](function () {
                return _this4.monthLoading = false;
              });
            case 2:
            case "end":
              return _context4.stop();
          }
        }, _callee4);
      }))();
    },
    getannexCount: function getannexCount() {
      var _this5 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              _this5.monthLoading = true;
              _this5.$axios.post(_this5.reportex_link() + "reportex/api/v1/statistiques-annexes/", {
                filiale: _this5.filiale,
                period: _this5.period,
                stat_type: "count",
                start_date: _this5.start_date,
                end_date: _this5.end_date
              }).then(function (res) {
                var _this5$historicalData;
                var total = res.data.stats.map(function (el) {
                  return el.total;
                }).reduce(function (sum, curr) {
                  return sum + curr;
                }, 0);
                var keys = res.data.stats.length ? Object.keys(res.data.stats[0]).filter(function (el) {
                  return el.toLowerCase() != "agence";
                }) : [];
                keys = keys.reduce(function (sum, curr) {
                  if (!curr.includes('total')) {
                    var montant = res.data.stats.map(function (el) {
                      return el[curr] || 0;
                    }).reduce(function (cumul, current) {
                      return cumul + current;
                    }, 0);
                    sum[curr] = {
                      montant: montant,
                      percent: montant / (total || 1) * 100
                    };
                  } else {
                    var _montant2 = res.data.stats.map(function (el) {
                      return el.total || 0;
                    }).reduce(function (cumul, current) {
                      return cumul + current;
                    }, 0);
                    sum['total'] = {
                      montant: _montant2,
                      percent: 100
                    };
                  }
                  return sum;
                }, {});
                var historicalTotal = {};
                historicalTotal[_this5.dataLabel] = "Total Général";
                historicalTotal = _objectSpread(_objectSpread({}, historicalTotal), keys);
                _this5.historicalTotal = [historicalTotal];
                _this5.historicalData = res.data.stats.map(function (el) {
                  var data = {};
                  data[_this5.dataLabel] = el[_this5.dataLabel];

                  // const total = el.Corporate + el.Retail
                  delete el[_this5.dataLabel];
                  for (var key in el) {
                    if (key.includes('total')) {
                      data[key] = {
                        montant: el[key],
                        'percent': 100
                      };
                    } else {
                      data[key] = {
                        montant: el[key],
                        'percent': (el[key] / (el.total || 1) * 100).toFixed(2)
                      };
                    }
                  }
                  return data;
                });
                if ((_this5$historicalData = _this5.historicalData) !== null && _this5$historicalData !== void 0 && _this5$historicalData.length) {
                  _this5.historicalHeaders = Object.keys(_this5.historicalData[0]).filter(function (el) {
                    return !el.includes('%');
                  });
                }
              })["catch"](function (err) {
                return console.error(err);
              })["finally"](function () {
                return _this5.monthLoading = false;
              });
            case 2:
            case "end":
              return _context5.stop();
          }
        }, _callee5);
      }))();
    }
  },
  mounted: function mounted() {
    var _this6 = this;
    EventBus.$on('reportex-update-stats', /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
      return _regeneratorRuntime().wrap(function _callee6$(_context6) {
        while (1) switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return _this6.getData();
          case 2:
            _context6.next = 4;
            return _this6.getAnnexAmount();
          case 4:
            _context6.next = 6;
            return _this6.getannexCount();
          case 6:
          case "end":
            return _context6.stop();
        }
      }, _callee6);
    })));
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/reportex/statistics/ChooseMonth.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/reportex/statistics/ChooseMonth.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "ChooseMonth",
  data: function data() {
    return {
      months: [{
        value: "janvier",
        label: "Janvier",
        number: 1
      }, {
        value: "février",
        label: "février",
        number: 2
      }, {
        value: "mars",
        label: "mars",
        number: 3
      }, {
        value: "avril",
        label: "avril",
        number: 4
      }, {
        value: "mai",
        label: "mai",
        number: 5
      }, {
        value: "juin",
        label: "juin",
        number: 6
      }, {
        value: "juillet",
        label: "juillet",
        number: 7
      }, {
        value: "août",
        label: "août",
        number: 8
      }, {
        value: "septembre",
        label: "septembre",
        number: 9
      }, {
        value: "octobre",
        label: "octobre",
        number: 10
      }, {
        value: "novembre",
        label: "novembre",
        number: 11
      }, {
        value: "décembre",
        label: "décembre",
        number: 12
      }],
      mois: [],
      showMonths: false,
      current: null
    };
  },
  computed: {
    getCol: function getCol() {
      if (this.months.length <= 4) return 'col';else if (this.months.length % 4 == 0) return 'col-4';
      return 'col-4';
    }
  },
  mounted: function mounted() {
    // const number = new Date().getMonth()
    // this.months = this.months.filter(el => el.number <= (number + 1))
  },
  methods: {
    removeMois: function removeMois(mois) {
      this.mois = this.mois.filter(function (el) {
        return el != mois;
      });
      this.$emit('input', this.mois);
      this.$emit('change', this.mois);
    }
  },
  props: {
    value: {
      type: Array
    }
  },
  watch: {
    value: {
      handler: function handler(val) {
        if (val && Array.isArray(val)) {
          this.mois = val;
        }
      },
      immediate: true
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/reportex/statistics/Annexe.vue?vue&type=template&id=74cfe800&scoped=true":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/reportex/statistics/Annexe.vue?vue&type=template&id=74cfe800&scoped=true ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "container-fluid bg-white",
    staticStyle: {
      position: "relative"
    }
  }, [_c("div", {
    staticClass: "row py-3"
  }, [_c("div", {
    staticClass: "col-12 d-flex gap-2"
  }, [_c("div", [_c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.period,
      expression: "period"
    }],
    staticClass: "form-select w-auto",
    attrs: {
      name: "period",
      id: "period"
    },
    on: {
      change: [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.period = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }, function ($event) {
        return _vm.getAllData();
      }]
    }
  }, [_c("option", {
    attrs: {
      value: "ytd"
    }
  }, [_vm._v("Year to date")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "mtd"
    }
  }, [_vm._v("Month to date")])])]), _vm._v(" "), _vm.period == "custom" ? _c("div", [(_vm.showMonthInput || _vm.month ? "month" : "text") === "checkbox" ? _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.month,
      expression: "month"
    }],
    staticClass: "form-control",
    attrs: {
      placeholder: "mmmmm-yyyyy",
      type: "checkbox"
    },
    domProps: {
      checked: Array.isArray(_vm.month) ? _vm._i(_vm.month, null) > -1 : _vm.month
    },
    on: {
      click: function click($event) {
        _vm.showMonthInput = true;
      },
      change: function change($event) {
        var $$a = _vm.month,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = null,
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && (_vm.month = $$a.concat([$$v]));
          } else {
            $$i > -1 && (_vm.month = $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.month = $$c;
        }
      }
    }
  }) : (_vm.showMonthInput || _vm.month ? "month" : "text") === "radio" ? _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.month,
      expression: "month"
    }],
    staticClass: "form-control",
    attrs: {
      placeholder: "mmmmm-yyyyy",
      type: "radio"
    },
    domProps: {
      checked: _vm._q(_vm.month, null)
    },
    on: {
      click: function click($event) {
        _vm.showMonthInput = true;
      },
      change: function change($event) {
        _vm.month = null;
      }
    }
  }) : _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.month,
      expression: "month"
    }],
    staticClass: "form-control",
    attrs: {
      placeholder: "mmmmm-yyyyy",
      type: _vm.showMonthInput || _vm.month ? "month" : "text"
    },
    domProps: {
      value: _vm.month
    },
    on: {
      click: function click($event) {
        _vm.showMonthInput = true;
      },
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.month = $event.target.value;
      }
    }
  })]) : _vm._e()]), _vm._v(" "), _c("div", {
    staticClass: "col col-lg-12 col-xl-6"
  }, [_c("stat-table", {
    staticClass: "main",
    attrs: {
      loading: _vm.loading,
      perPage: 5,
      useCounter: false,
      tdMinWidth: "auto",
      spacer: false,
      title: "",
      useYearUpdater: false,
      useToolbar: false,
      headers: _vm.headers,
      items: _vm.data,
      total: _vm.total_data
    },
    scopedSlots: _vm._u([{
      key: "toolbar",
      fn: function fn(_ref) {
        var title = _ref.title;
        return [title ? _c("h5", {
          staticClass: "stat-header-cofina text-uppercase text-center py-3"
        }, [_vm._v(" " + _vm._s(title))]) : _vm._e()];
      }
    }, {
      key: "tableHeader",
      fn: function fn(props) {
        return [_c("tr", {
          staticClass: "text-center"
        }, _vm._l(props.headers, function (header, i) {
          return _c("th", {
            key: header,
            staticClass: "text-capitalize fw-normal background-grey-cofina",
            "class": {
              "text-end": i > 0,
              "background-grey-cofina": true
            },
            attrs: {
              role: "button"
            },
            on: {
              click: function click($event) {
                return _vm.$emit("sort", header);
              }
            }
          }, [header.includes("%") ? _c("span", [_vm._v(" % ")]) : _c("span", [_vm._v(" " + _vm._s(header.split("_").join(" ")) + " ")])]);
        }), 0)];
      }
    }, {
      key: "default",
      fn: function fn(_ref2) {
        var items = _ref2.items;
        return _vm._l(items, function (item, index) {
          return _c("tr", {
            key: index,
            staticClass: "cursor-pointer",
            attrs: {
              role: "button"
            },
            on: {
              click: function click($event) {
                return _vm.$emit("select", item);
              }
            }
          }, _vm._l(_vm.headers, function (h, ind) {
            return _c("td", {
              key: h,
              staticClass: "col",
              "class": {
                "text-end": ind > 0
              },
              style: {
                "min-width": "auto"
              },
              attrs: {
                title: item === null || item === void 0 ? void 0 : item[h]
              }
            }, [h == "status" ? _c("span", [_vm._v(" " + _vm._s(item === null || item === void 0 ? void 0 : item[h]))]) : _c("span", [h.includes("%") ? _c("span", [_vm._v(" " + _vm._s(_vm._f("formatNumber")(item === null || item === void 0 ? void 0 : item[h], true)) + " ")]) : _c("span", [_vm._v(" " + _vm._s(_vm._f("formatNumber")(item === null || item === void 0 ? void 0 : item[h])) + " ")])])]);
          }), 0);
        });
      }
    }, {
      key: "total",
      fn: function fn() {
        return _vm._l(_vm.total_data, function (tot) {
          return _c("tr", {
            key: tot === null || tot === void 0 ? void 0 : tot.profile,
            staticClass: "background-red-cofina text-white"
          }, _vm._l(_vm.headers, function (key, index) {
            return _c("td", {
              key: key + (index === null || index === void 0 ? void 0 : index.toString()),
              staticClass: "text-capitalize",
              "class": {
                "text-end": index != 0
              },
              attrs: {
                colspan: index == 0 ? 1 : 1
              }
            }, [index != 0 ? _c("span", [_vm._v("\n\n                " + _vm._s(_vm._f("formatNumber")(tot[key])) + "\n              ")]) : _c("span", [_vm._v("\n                " + _vm._s(tot[key]) + "\n              ")])]);
          }), 0);
        });
      },
      proxy: true
    }])
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-12"
  }, [_c("stat-table", {
    staticClass: "monthHistoric",
    attrs: {
      loading: _vm.monthLoading,
      total: _vm.monthTotal,
      perPage: 5,
      useCounter: false,
      spacer: false,
      title: "",
      tdMinWidth: "auto",
      useYearUpdater: false,
      items: _vm.segmentHistoricData
    },
    scopedSlots: _vm._u([{
      key: "toolbar",
      fn: function fn(_ref3) {
        var title = _ref3.title;
        return [title ? _c("h5", {
          staticClass: "stat-header-cofina text-uppercase text-center py-3"
        }, [_vm._v(" " + _vm._s(title))]) : _vm._e()];
      }
    }, {
      key: "tableHeader",
      fn: function fn(_ref4) {
        var sortKey = _ref4.sortKey;
        return [_c("tr", {
          staticClass: "text-center"
        }, _vm._l(_vm.segmentHistoricHeaders, function (header) {
          return _c("th", {
            key: header,
            staticClass: "text-capitalize background-grey-cofina align-middle align-items-center text-center",
            attrs: {
              colspan: ["nom", "Nom", _vm.dataLabel].includes(header) ? 1 : 2,
              rowspan: ["nom", "Nom", _vm.dataLabel].includes(header) ? 2 : 1,
              role: "button"
            },
            on: {
              click: function click($event) {
                _vm.$emit("sort", header);
                sortKey = header;
              }
            }
          }, [_vm._v("\n              " + _vm._s(header) + "\n              "), sortKey == header ? _c("span", [_vm.ascending ? _c("i", {
            staticClass: "icofont-caret-down"
          }) : _c("i", {
            staticClass: "icofont-caret-up"
          })]) : _vm._e()]);
        }), 0), _vm._v(" "), _c("tr", [_vm._l(_vm.segmentHistoricHeaders, function (header, ind) {
          return [!["nom", "Nom", _vm.dataLabel].includes(header) ? _vm._l(["Montant", "%"], function (i) {
            return _c("td", {
              key: ind + header + i,
              staticClass: "text-end px-1 background-light-blue-cofina",
              staticStyle: {
                "min-width": "auto"
              }
            }, [_vm._v("\n                  " + _vm._s(i) + "\n                ")]);
          }) : _vm._e()];
        })], 2)];
      }
    }, {
      key: "default",
      fn: function fn(_ref5) {
        var items = _ref5.items;
        return _vm._l(items, function (item, index) {
          return _c("tr", {
            key: index + _vm._uid,
            staticClass: "cursor-pointer",
            attrs: {
              role: "button"
            },
            on: {
              click: function click($event) {
                return _vm.$emit("select", item);
              }
            }
          }, [_vm._l(_vm.segmentHistoricHeaders, function (h, ind) {
            return [["nom", "Nom", _vm.dataLabel].includes(h) ? _c("td", {
              key: ind,
              staticClass: "text-truncate",
              staticStyle: {
                "min-width": "200px"
              },
              attrs: {
                title: item[h]
              }
            }, [_vm._v(_vm._s(_vm._f("textTruncate")(item[h], 22)))]) : _vm._l(item[h], function (val, key) {
              return _c("td", {
                key: h + val,
                staticClass: "col",
                "class": {
                  "text-end": ind > 0
                },
                staticStyle: {
                  "min-width": "auto"
                },
                attrs: {
                  title: val
                }
              }, [key !== null && key !== void 0 && key.includes("percent") || key !== null && key !== void 0 && key.includes("%") ? _c("span", [_vm._v("\n                    " + _vm._s(_vm._f("formatNumber")(val, true)) + "\n                  ")]) : _c("span", [_vm._v("\n                    " + _vm._s(_vm._f("formatNumber")(val)) + "\n                  ")])]);
            })];
          })], 2);
        });
      }
    }, {
      key: "total",
      fn: function fn() {
        return _vm._l(_vm.segmentHistoricTotal, function (tot, index) {
          return _c("tr", {
            key: index,
            staticClass: "background-red-cofina text-white"
          }, [_vm._l(tot, function (val, key) {
            return [key != _vm.dataLabel ? _vm._l(val, function (item, key2) {
              return _c("td", {
                key: key + item + (index === null || index === void 0 ? void 0 : index.toString()),
                staticClass: "text-capitalize",
                "class": {
                  "text-end": key != _vm.dataLabel
                },
                attrs: {
                  colspan: key == _vm.dataLabel ? 1 : 1
                }
              }, [key2 !== null && key2 !== void 0 && key2.includes("percent") || key2 !== null && key2 !== void 0 && key2.includes("%") ? _c("span", [_vm._v("\n                    " + _vm._s(_vm._f("formatNumber")(item, true)) + "\n                  ")]) : _c("span", [_vm._v("\n                    " + _vm._s(_vm._f("formatNumber")(item)) + "\n                  ")])]);
            }) : _c("td", {
              key: key + (index === null || index === void 0 ? void 0 : index.toString())
            }, [_c("span", [_vm._v("\n                  " + _vm._s(val) + "\n                ")])])];
          })], 2);
        });
      },
      proxy: true
    }])
  }), _vm._v(" "), _c("stat-table", {
    staticClass: "monthHistoric",
    attrs: {
      loading: _vm.monthLoading,
      total: _vm.historicalTotal,
      perPage: 5,
      useCounter: false,
      spacer: false,
      title: "",
      tdMinWidth: "auto",
      useYearUpdater: false,
      items: _vm.historicalData
    },
    scopedSlots: _vm._u([{
      key: "toolbar",
      fn: function fn(_ref6) {
        var title = _ref6.title;
        return [title ? _c("h5", {
          staticClass: "stat-header-cofina text-uppercase text-center py-3"
        }, [_vm._v(" " + _vm._s(title))]) : _vm._e()];
      }
    }, {
      key: "tableHeader",
      fn: function fn(_ref7) {
        var sortKey = _ref7.sortKey;
        return [_c("tr", {
          staticClass: "text-center"
        }, _vm._l(_vm.historicalHeaders, function (header) {
          return _c("th", {
            key: header,
            staticClass: "text-capitalize background-grey-cofina align-middle align-items-center text-center",
            attrs: {
              colspan: ["nom", "Nom", _vm.dataLabel].includes(header) ? 1 : 2,
              rowspan: ["nom", "Nom", _vm.dataLabel].includes(header) ? 2 : 1,
              role: "button"
            },
            on: {
              click: function click($event) {
                _vm.$emit("sort", header);
                sortKey = header;
              }
            }
          }, [_vm._v("\n              " + _vm._s(header) + "\n              "), sortKey == header ? _c("span", [_vm.ascending ? _c("i", {
            staticClass: "icofont-caret-down"
          }) : _c("i", {
            staticClass: "icofont-caret-up"
          })]) : _vm._e()]);
        }), 0), _vm._v(" "), _c("tr", [_vm._l(_vm.historicalHeaders, function (header, ind) {
          return [!["nom", "Nom", _vm.dataLabel].includes(header) ? _vm._l(["Nombre de dossiers", "%"], function (i) {
            return _c("td", {
              key: ind + header + i,
              staticClass: "text-end px-1 background-light-blue-cofina",
              staticStyle: {
                "min-width": "auto"
              }
            }, [_vm._v("\n                  " + _vm._s(i) + "\n                ")]);
          }) : _vm._e()];
        })], 2)];
      }
    }, {
      key: "default",
      fn: function fn(_ref8) {
        var items = _ref8.items;
        return _vm._l(items, function (item, index) {
          return _c("tr", {
            key: index + _vm._uid,
            staticClass: "cursor-pointer",
            attrs: {
              role: "button"
            },
            on: {
              click: function click($event) {
                return _vm.$emit("select", item);
              }
            }
          }, [_vm._l(_vm.historicalHeaders, function (h, ind) {
            return [["nom", "Nom", _vm.dataLabel].includes(h) ? _c("td", {
              key: ind,
              staticClass: "text-truncate",
              staticStyle: {
                "min-width": "200px"
              },
              attrs: {
                title: item[h]
              }
            }, [_vm._v(_vm._s(_vm._f("textTruncate")(item[h], 22)))]) : _vm._l(item[h], function (val, key) {
              return _c("td", {
                key: h + val,
                staticClass: "col",
                "class": {
                  "text-end": ind > 0
                },
                staticStyle: {
                  "min-width": "auto"
                },
                attrs: {
                  title: val
                }
              }, [key !== null && key !== void 0 && key.includes("percent") || key !== null && key !== void 0 && key.includes("%") ? _c("span", [_vm._v("\n                    " + _vm._s(_vm._f("formatNumber")(val, true)) + "\n                  ")]) : _c("span", [_vm._v("\n                    " + _vm._s(_vm._f("formatNumber")(val)) + "\n                  ")])]);
            })];
          })], 2);
        });
      }
    }, {
      key: "total",
      fn: function fn() {
        return _vm._l(_vm.historicalTotal, function (tot, index) {
          return _c("tr", {
            key: index,
            staticClass: "background-red-cofina text-white"
          }, [_vm._l(tot, function (val, key) {
            return [key != _vm.dataLabel ? _vm._l(val, function (item, key2) {
              return _c("td", {
                key: key + item + (index === null || index === void 0 ? void 0 : index.toString()),
                staticClass: "text-capitalize",
                "class": {
                  "text-end": key != _vm.dataLabel
                },
                attrs: {
                  colspan: key == _vm.dataLabel ? 1 : 1
                }
              }, [key2 !== null && key2 !== void 0 && key2.includes("percent") || key2 !== null && key2 !== void 0 && key2.includes("%") ? _c("span", [_vm._v("\n                    " + _vm._s(_vm._f("formatNumber")(item, true)) + "\n                  ")]) : _c("span", [_vm._v("\n                    " + _vm._s(_vm._f("formatNumber")(item)) + "\n                  ")])]);
            }) : _c("td", {
              key: key + (index === null || index === void 0 ? void 0 : index.toString())
            }, [_c("span", [_vm._v("\n                  " + _vm._s(val) + "\n                ")])])];
          })], 2);
        });
      },
      proxy: true
    }])
  })], 1)])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/reportex/statistics/ChooseMonth.vue?vue&type=template&id=0d63d46c&scoped=true":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/reportex/statistics/ChooseMonth.vue?vue&type=template&id=0d63d46c&scoped=true ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "position-relative",
    staticStyle: {
      "max-width": "600px",
      width: "100%"
    }
  }, [_c("button", {
    staticClass: "form-control w-auto",
    attrs: {
      role: "button"
    },
    on: {
      mouseenter: function mouseenter($event) {
        _vm.showMonths = true;
      },
      click: function click($event) {
        _vm.showMonths = !_vm.showMonths;
      }
    }
  }, [!_vm.mois.length ? _c("span", [_vm._v("Choisir mois")]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "d-flex flex-wrap align-items-center gap-1"
  }, _vm._l(_vm.mois, function (m) {
    return _c("div", {
      key: m,
      staticClass: "badge moisSelected d-flex justify-content-between align-items-center gap-1",
      on: {
        mouseover: function mouseover($event) {
          _vm.current = m;
        },
        mouseleave: function mouseleave($event) {
          _vm.current = null;
        }
      }
    }, [_c("div", [_vm._v(_vm._s(m))]), _vm._v(" "), _vm.current == m ? _c("div", {
      staticClass: "close d-flex align-items-center text-danger",
      attrs: {
        title: "Supprimer " + m
      },
      on: {
        click: function click($event) {
          return _vm.removeMois(m);
        }
      }
    }, [_c("i", {
      staticClass: "icofont-close"
    })]) : _vm._e()]);
  }), 0)]), _vm._v(" "), _vm.showMonths ? _c("div", {
    staticClass: "position-relative"
  }, [_c("div", {
    staticClass: "card border-0 shadow",
    staticStyle: {
      position: "absolute",
      top: "0",
      left: "-10px",
      "z-index": "300",
      width: "auto",
      "min-width": "600px"
    },
    on: {
      mouseleave: function mouseleave($event) {
        _vm.showMonths = false;
      }
    }
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "d-flex justify-content-between align-items-end"
  }, [_c("h5", {
    staticClass: "card-title my-0"
  }, [_vm._v("Choisir un ou plusieurs mois")]), _vm._v(" "), _c("button", {
    staticClass: "btn btn-sm btn-light rounded-pill monthSelection",
    attrs: {
      title: "Fermer "
    },
    on: {
      click: function click($event) {
        _vm.showMonths = false;
      }
    }
  }, [_c("i", {
    staticClass: "icofont-close"
  })])]), _vm._v(" "), _c("div", {
    staticClass: "d-flex flex-wrap py-4"
  }, _vm._l(_vm.months, function (month) {
    return _c("div", {
      key: month.label + _vm._uid,
      staticClass: "rounded fs-5 p-2 monthSelection",
      "class": _vm.getCol,
      attrs: {
        value: month
      }
    }, [_c("div", {
      staticClass: "form-check"
    }, [_c("label", {
      staticClass: "form-check-label text-capitalize",
      attrs: {
        title: "Ajouter " + month.label + " à la liste des mois à afficher",
        role: "button",
        "for": month.label
      }
    }, [_vm._v(" " + _vm._s(month.label))]), _vm._v(" "), _c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.mois,
        expression: "mois"
      }],
      staticClass: "form-check-input",
      attrs: {
        title: "Ajouter " + month.label + "à la liste des mois a afficher",
        role: "button",
        type: "checkbox",
        name: "mois",
        id: month.label
      },
      domProps: {
        value: month.value,
        checked: Array.isArray(_vm.mois) ? _vm._i(_vm.mois, month.value) > -1 : _vm.mois
      },
      on: {
        change: [function ($event) {
          var $$a = _vm.mois,
            $$el = $event.target,
            $$c = $$el.checked ? true : false;
          if (Array.isArray($$a)) {
            var $$v = month.value,
              $$i = _vm._i($$a, $$v);
            if ($$el.checked) {
              $$i < 0 && (_vm.mois = $$a.concat([$$v]));
            } else {
              $$i > -1 && (_vm.mois = $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
            }
          } else {
            _vm.mois = $$c;
          }
        }, function ($event) {
          _vm.$emit("input", _vm.mois);
          _vm.$emit("change", _vm.mois);
        }]
      }
    })])]);
  }), 0), _vm._v(" "), _c("hr", {
    staticClass: "mt-0 mb-2"
  }), _vm._v(" "), _c("div", {
    staticClass: "d-flex",
    staticStyle: {
      gap: "10px !important"
    }
  }, [_c("span", {
    staticClass: "text-underline monthSelection px-2 py-1 rounded",
    attrs: {
      role: "button"
    },
    on: {
      click: function click($event) {
        _vm.mois = _vm.months.map(function (el) {
          return el.value;
        });
        _vm.$emit("input", _vm.mois);
        _vm.$emit("change", _vm.mois);
      }
    }
  }, [_c("i", {
    staticClass: "icofont-checked"
  }), _vm._v(" Tout sélectionner\n          ")]), _vm._v(" "), _c("span", {
    staticClass: "text-underline monthSelection p-1 rounded",
    attrs: {
      role: "button"
    },
    on: {
      click: function click($event) {
        _vm.mois = [];
        _vm.$emit("input", _vm.mois);
        _vm.$emit("change", _vm.mois);
      }
    }
  }, [_c("i", {
    staticClass: "icofont-close-squared"
  }), _vm._v(" Vider\n          ")])])])])]) : _vm._e()]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/reportex/statistics/Annexe.vue?vue&type=style&index=0&id=74cfe800&scoped=true&lang=css":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/reportex/statistics/Annexe.vue?vue&type=style&index=0&id=74cfe800&scoped=true&lang=css ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.background-grey-cofina[data-v-74cfe800] {\r\n    background: var(--secondary) !important;\r\n    color: white;\r\n    font-weight: normal !important;\n}\n.background-red-cofina[data-v-74cfe800] {\r\n    background: var(--primary);\r\n    /* rgb(178, 0, 0);*/\r\n    color: white\n}\n.background-positive-cofina[data-v-74cfe800] {\r\n    background: rgb(104, 164, 144);\n}\n.background-light-blue-cofina[data-v-74cfe800] {\r\n    background: #ddebf7 !important;\n}\n.stat-header-cofina[data-v-74cfe800] {\r\n    background: #FCE4D6 !important;\r\n    color: rgb(50, 50, 50);\r\n    /* background : #9e19453a !important;\r\n      color: #9e1945 */\n}\n.monthSelection[data-v-74cfe800]:hover {\r\n    background: rgba(200, 200, 200, .3);\n}\ntr>th[data-v-74cfe800]:first-child {\r\n    position: sticky;\r\n    left: 0;\r\n    z-index: 2\n}\ntr>td[data-v-74cfe800]:first-child {\r\n    position: sticky;\r\n    left: 0;\r\n    background: white\n}\ntr:last-child>td[data-v-74cfe800]:first-child {\r\n    position: sticky;\r\n    left: 0;\r\n    background: inherit;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/reportex/statistics/ChooseMonth.vue?vue&type=style&index=0&id=0d63d46c&scoped=true&lang=css":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/reportex/statistics/ChooseMonth.vue?vue&type=style&index=0&id=0d63d46c&scoped=true&lang=css ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.monthSelection[data-v-0d63d46c]:hover {\r\n  background: rgba(200, 200, 200, .3);\n}\n.moisSelected[data-v-0d63d46c] {\r\n  background: var(--secondary-100);\r\n  color: var(--secondary-950);\r\n  text-transform: capitalize;\n}\n.moisSelected>.close[data-v-0d63d46c] {\r\n  /* background: var(--secondary-200);\r\n  color: var(--secondary-950); */\r\n  border-radius: 50%;\r\n  width: auto;\r\n  height: auto;\r\n  padding: .01rem;\n}\r\n\r\n/* .moisSelected>.close:hover {\r\n  background: var(--secondary-300);\r\n  color: var(--secondary-950);\r\n} */\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/reportex/statistics/Annexe.vue?vue&type=style&index=0&id=74cfe800&scoped=true&lang=css":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/reportex/statistics/Annexe.vue?vue&type=style&index=0&id=74cfe800&scoped=true&lang=css ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Annexe_vue_vue_type_style_index_0_id_74cfe800_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Annexe.vue?vue&type=style&index=0&id=74cfe800&scoped=true&lang=css */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/reportex/statistics/Annexe.vue?vue&type=style&index=0&id=74cfe800&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Annexe_vue_vue_type_style_index_0_id_74cfe800_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Annexe_vue_vue_type_style_index_0_id_74cfe800_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/reportex/statistics/ChooseMonth.vue?vue&type=style&index=0&id=0d63d46c&scoped=true&lang=css":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/reportex/statistics/ChooseMonth.vue?vue&type=style&index=0&id=0d63d46c&scoped=true&lang=css ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ChooseMonth_vue_vue_type_style_index_0_id_0d63d46c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ChooseMonth.vue?vue&type=style&index=0&id=0d63d46c&scoped=true&lang=css */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/reportex/statistics/ChooseMonth.vue?vue&type=style&index=0&id=0d63d46c&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ChooseMonth_vue_vue_type_style_index_0_id_0d63d46c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ChooseMonth_vue_vue_type_style_index_0_id_0d63d46c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/reportex/statistics/Annexe.vue":
/*!****************************************************************!*\
  !*** ./resources/js/components/reportex/statistics/Annexe.vue ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Annexe_vue_vue_type_template_id_74cfe800_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Annexe.vue?vue&type=template&id=74cfe800&scoped=true */ "./resources/js/components/reportex/statistics/Annexe.vue?vue&type=template&id=74cfe800&scoped=true");
/* harmony import */ var _Annexe_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Annexe.vue?vue&type=script&lang=js */ "./resources/js/components/reportex/statistics/Annexe.vue?vue&type=script&lang=js");
/* harmony import */ var _Annexe_vue_vue_type_style_index_0_id_74cfe800_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Annexe.vue?vue&type=style&index=0&id=74cfe800&scoped=true&lang=css */ "./resources/js/components/reportex/statistics/Annexe.vue?vue&type=style&index=0&id=74cfe800&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Annexe_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Annexe_vue_vue_type_template_id_74cfe800_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _Annexe_vue_vue_type_template_id_74cfe800_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "74cfe800",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/reportex/statistics/Annexe.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/reportex/statistics/Annexe.vue?vue&type=script&lang=js":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/reportex/statistics/Annexe.vue?vue&type=script&lang=js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Annexe_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Annexe.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/reportex/statistics/Annexe.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Annexe_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/reportex/statistics/Annexe.vue?vue&type=style&index=0&id=74cfe800&scoped=true&lang=css":
/*!************************************************************************************************************************!*\
  !*** ./resources/js/components/reportex/statistics/Annexe.vue?vue&type=style&index=0&id=74cfe800&scoped=true&lang=css ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Annexe_vue_vue_type_style_index_0_id_74cfe800_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Annexe.vue?vue&type=style&index=0&id=74cfe800&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/reportex/statistics/Annexe.vue?vue&type=style&index=0&id=74cfe800&scoped=true&lang=css");


/***/ }),

/***/ "./resources/js/components/reportex/statistics/Annexe.vue?vue&type=template&id=74cfe800&scoped=true":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/components/reportex/statistics/Annexe.vue?vue&type=template&id=74cfe800&scoped=true ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Annexe_vue_vue_type_template_id_74cfe800_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Annexe_vue_vue_type_template_id_74cfe800_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Annexe_vue_vue_type_template_id_74cfe800_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Annexe.vue?vue&type=template&id=74cfe800&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/reportex/statistics/Annexe.vue?vue&type=template&id=74cfe800&scoped=true");


/***/ }),

/***/ "./resources/js/components/reportex/statistics/ChooseMonth.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/components/reportex/statistics/ChooseMonth.vue ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ChooseMonth_vue_vue_type_template_id_0d63d46c_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChooseMonth.vue?vue&type=template&id=0d63d46c&scoped=true */ "./resources/js/components/reportex/statistics/ChooseMonth.vue?vue&type=template&id=0d63d46c&scoped=true");
/* harmony import */ var _ChooseMonth_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ChooseMonth.vue?vue&type=script&lang=js */ "./resources/js/components/reportex/statistics/ChooseMonth.vue?vue&type=script&lang=js");
/* harmony import */ var _ChooseMonth_vue_vue_type_style_index_0_id_0d63d46c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ChooseMonth.vue?vue&type=style&index=0&id=0d63d46c&scoped=true&lang=css */ "./resources/js/components/reportex/statistics/ChooseMonth.vue?vue&type=style&index=0&id=0d63d46c&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ChooseMonth_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _ChooseMonth_vue_vue_type_template_id_0d63d46c_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _ChooseMonth_vue_vue_type_template_id_0d63d46c_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "0d63d46c",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/reportex/statistics/ChooseMonth.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/reportex/statistics/ChooseMonth.vue?vue&type=script&lang=js":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/reportex/statistics/ChooseMonth.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChooseMonth_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ChooseMonth.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/reportex/statistics/ChooseMonth.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChooseMonth_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/reportex/statistics/ChooseMonth.vue?vue&type=style&index=0&id=0d63d46c&scoped=true&lang=css":
/*!*****************************************************************************************************************************!*\
  !*** ./resources/js/components/reportex/statistics/ChooseMonth.vue?vue&type=style&index=0&id=0d63d46c&scoped=true&lang=css ***!
  \*****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ChooseMonth_vue_vue_type_style_index_0_id_0d63d46c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ChooseMonth.vue?vue&type=style&index=0&id=0d63d46c&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/reportex/statistics/ChooseMonth.vue?vue&type=style&index=0&id=0d63d46c&scoped=true&lang=css");


/***/ }),

/***/ "./resources/js/components/reportex/statistics/ChooseMonth.vue?vue&type=template&id=0d63d46c&scoped=true":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/components/reportex/statistics/ChooseMonth.vue?vue&type=template&id=0d63d46c&scoped=true ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ChooseMonth_vue_vue_type_template_id_0d63d46c_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ChooseMonth_vue_vue_type_template_id_0d63d46c_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ChooseMonth_vue_vue_type_template_id_0d63d46c_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ChooseMonth.vue?vue&type=template&id=0d63d46c&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/reportex/statistics/ChooseMonth.vue?vue&type=template&id=0d63d46c&scoped=true");


/***/ })

}]);