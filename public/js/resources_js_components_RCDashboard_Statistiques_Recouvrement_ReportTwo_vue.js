"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_RCDashboard_Statistiques_Recouvrement_ReportTwo_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/RCDashboard/Statistiques/Recouvrement/ReportTwo.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/RCDashboard/Statistiques/Recouvrement/ReportTwo.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Input_SelectFiliale_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Input/SelectFiliale.vue */ "./resources/js/components/RCDashboard/Input/SelectFiliale.vue");
/* harmony import */ var _ErrorRetry_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ErrorRetry.vue */ "./resources/js/components/RCDashboard/Statistiques/Recouvrement/ErrorRetry.vue");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return r; }; var t, r = {}, e = Object.prototype, n = e.hasOwnProperty, o = "function" == typeof Symbol ? Symbol : {}, i = o.iterator || "@@iterator", a = o.asyncIterator || "@@asyncIterator", u = o.toStringTag || "@@toStringTag"; function c(t, r, e, n) { Object.defineProperty(t, r, { value: e, enumerable: !n, configurable: !n, writable: !n }); } try { c({}, ""); } catch (t) { c = function c(t, r, e) { return t[r] = e; }; } function h(r, e, n, o) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype); return c(a, "_invoke", function (r, e, n) { var o = 1; return function (i, a) { if (3 === o) throw Error("Generator is already running"); if (4 === o) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var u = n.delegate; if (u) { var c = d(u, n); if (c) { if (c === f) continue; return c; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (1 === o) throw o = 4, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = 3; var h = s(r, e, n); if ("normal" === h.type) { if (o = n.done ? 4 : 2, h.arg === f) continue; return { value: h.arg, done: n.done }; } "throw" === h.type && (o = 4, n.method = "throw", n.arg = h.arg); } }; }(r, n, new Context(o || [])), !0), a; } function s(t, r, e) { try { return { type: "normal", arg: t.call(r, e) }; } catch (t) { return { type: "throw", arg: t }; } } r.wrap = h; var f = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var l = {}; c(l, i, function () { return this; }); var p = Object.getPrototypeOf, y = p && p(p(x([]))); y && y !== e && n.call(y, i) && (l = y); var v = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(l); function g(t) { ["next", "throw", "return"].forEach(function (r) { c(t, r, function (t) { return this._invoke(r, t); }); }); } function AsyncIterator(t, r) { function e(o, i, a, u) { var c = s(t[o], t, i); if ("throw" !== c.type) { var h = c.arg, f = h.value; return f && "object" == _typeof(f) && n.call(f, "__await") ? r.resolve(f.__await).then(function (t) { e("next", t, a, u); }, function (t) { e("throw", t, a, u); }) : r.resolve(f).then(function (t) { h.value = t, a(h); }, function (t) { return e("throw", t, a, u); }); } u(c.arg); } var o; c(this, "_invoke", function (t, n) { function i() { return new r(function (r, o) { e(t, n, r, o); }); } return o = o ? o.then(i, i) : i(); }, !0); } function d(r, e) { var n = e.method, o = r.i[n]; if (o === t) return e.delegate = null, "throw" === n && r.i["return"] && (e.method = "return", e.arg = t, d(r, e), "throw" === e.method) || "return" !== n && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + n + "' method")), f; var i = s(o, r.i, e.arg); if ("throw" === i.type) return e.method = "throw", e.arg = i.arg, e.delegate = null, f; var a = i.arg; return a ? a.done ? (e[r.r] = a.value, e.next = r.n, "return" !== e.method && (e.method = "next", e.arg = t), e.delegate = null, f) : a : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f); } function w(t) { this.tryEntries.push(t); } function m(r) { var e = r[4] || {}; e.type = "normal", e.arg = t, r[4] = e; } function Context(t) { this.tryEntries = [[-1]], t.forEach(w, this), this.reset(!0); } function x(r) { if (null != r) { var e = r[i]; if (e) return e.call(r); if ("function" == typeof r.next) return r; if (!isNaN(r.length)) { var o = -1, a = function e() { for (; ++o < r.length;) if (n.call(r, o)) return e.value = r[o], e.done = !1, e; return e.value = t, e.done = !0, e; }; return a.next = a; } } throw new TypeError(_typeof(r) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, c(v, "constructor", GeneratorFunctionPrototype), c(GeneratorFunctionPrototype, "constructor", GeneratorFunction), c(GeneratorFunctionPrototype, u, GeneratorFunction.displayName = "GeneratorFunction"), r.isGeneratorFunction = function (t) { var r = "function" == typeof t && t.constructor; return !!r && (r === GeneratorFunction || "GeneratorFunction" === (r.displayName || r.name)); }, r.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, c(t, u, "GeneratorFunction")), t.prototype = Object.create(v), t; }, r.awrap = function (t) { return { __await: t }; }, g(AsyncIterator.prototype), c(AsyncIterator.prototype, a, function () { return this; }), r.AsyncIterator = AsyncIterator, r.async = function (t, e, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(h(t, e, n, o), i); return r.isGeneratorFunction(e) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, g(v), c(v, u, "Generator"), c(v, i, function () { return this; }), c(v, "toString", function () { return "[object Generator]"; }), r.keys = function (t) { var r = Object(t), e = []; for (var n in r) e.unshift(n); return function t() { for (; e.length;) if ((n = e.pop()) in r) return t.value = n, t.done = !1, t; return t.done = !0, t; }; }, r.values = x, Context.prototype = { constructor: Context, reset: function reset(r) { if (this.prev = this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(m), !r) for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0][4]; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(r) { if (this.done) throw r; var e = this; function n(t) { a.type = "throw", a.arg = r, e.next = t; } for (var o = e.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i[4], u = this.prev, c = i[1], h = i[2]; if (-1 === i[0]) return n("end"), !1; if (!c && !h) throw Error("try statement without catch or finally"); if (null != i[0] && i[0] <= u) { if (u < c) return this.method = "next", this.arg = t, n(c), !0; if (u < h) return n(h), !1; } } }, abrupt: function abrupt(t, r) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var n = this.tryEntries[e]; if (n[0] > -1 && n[0] <= this.prev && this.prev < n[2]) { var o = n; break; } } o && ("break" === t || "continue" === t) && o[0] <= r && r <= o[2] && (o = null); var i = o ? o[4] : {}; return i.type = t, i.arg = r, o ? (this.method = "next", this.next = o[2], f) : this.complete(i); }, complete: function complete(t, r) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), f; }, finish: function finish(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[2] === t) return this.complete(e[4], e[3]), m(e), f; } }, "catch": function _catch(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[0] === t) { var n = e[4]; if ("throw" === n.type) { var o = n.arg; m(e); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(r, e, n) { return this.delegate = { i: x(r), r: e, n: n }, "next" === this.method && (this.arg = t), f; } }, r; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "ReportTwo",
  components: {
    SelectFiliale: _Input_SelectFiliale_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    ErrorRetry: _ErrorRetry_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      error: null,
      loading: false,
      items: [],
      headers: [],
      total: [],
      history: [],
      aggregateur: "agence",
      sortKey: 'encours_total',
      sumBy: "sum",
      ascending: false,
      par_group: [0, 30, 60, 90, 180].map(function (e) {
        return {
          name: "par".concat(e),
          label: "PAR ".concat(e),
          days: e
        };
      }),
      search: "",
      agence: null,
      caf: null,
      selectedRow: null,
      client: null,
      filiale: null,
      page: 1,
      perPage: 10
    };
  },
  computed: {
    title: function title() {
      var _this$agence, _this$caf, _this$client;
      switch (this.aggregateur) {
        case "agence":
          return "PAR par agence (".concat(this.filiale, ")");
        case "nom_caf":
          return "PAR par CAF (".concat((_this$agence = this.agence) === null || _this$agence === void 0 ? void 0 : _this$agence.name, ")");
        case "nom_client":
          return "PAR par client (".concat((_this$caf = this.caf) === null || _this$caf === void 0 ? void 0 : _this$caf.nom_caf, ")");
        case "dossier":
          return "PAR par dossier (".concat((_this$client = this.client) === null || _this$client === void 0 ? void 0 : _this$client.nom_client, ")");
        default:
          return "PAR";
      }
    },
    paginatedItems: function paginatedItems() {
      return this.items.slice((this.page - 1) * this.perPage, this.page * this.perPage);
    },
    is_caf: function is_caf() {
      var _this$__user__;
      return ((_this$__user__ = this.__user__) === null || _this$__user__ === void 0 ? void 0 : _this$__user__.role_uuid) == 'r472oAxtaFJSlsh5';
    },
    is_ca: function is_ca() {
      var _this$__user__2;
      return ((_this$__user__2 = this.__user__) === null || _this$__user__2 === void 0 ? void 0 : _this$__user__2.role_uuid) == 'yYnev325ob1vDkgq';
    },
    aggregatorLabel: function aggregatorLabel() {
      return this.aggregateur.replace('_', ' ');
    },
    sumKey: function sumKey() {
      return this.sumBy === "sum" ? "encours_total" : "nombre_dossiers";
    },
    userAccess: function userAccess() {
      var _this = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _this.determineAccess(_this.__user__);
            case 2:
              return _context.abrupt("return", _context.sent);
            case 3:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    }
  },
  mounted: function mounted() {
    var _this2 = this;
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return _this2.determineAggregator();
          case 2:
            _this2.init();
            EventBus.$on('filiale-and-agence-change', /*#__PURE__*/function () {
              var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(newVal) {
                var _this2$$route$query;
                return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                  while (1) switch (_context2.prev = _context2.next) {
                    case 0:
                      _this2.filiale = newVal === null || newVal === void 0 ? void 0 : newVal.filiale;
                      _this2.agence = newVal === null || newVal === void 0 ? void 0 : newVal.agence;
                      if (!_this2.agence) {
                        _context2.next = 6;
                        break;
                      }
                      _this2.aggregateur = "nom_caf";
                      _context2.next = 8;
                      break;
                    case 6:
                      _context2.next = 8;
                      return _this2.determineAggregator();
                    case 8:
                      if (!(((_this2$$route$query = _this2.$route.query) === null || _this2$$route$query === void 0 ? void 0 : _this2$$route$query["super-tab"]) === "recovery-report")) {
                        _context2.next = 11;
                        break;
                      }
                      _context2.next = 11;
                      return _this2.getData(true);
                    case 11:
                    case "end":
                      return _context2.stop();
                  }
                }, _callee2);
              }));
              return function (_x) {
                return _ref.apply(this, arguments);
              };
            }());
          case 4:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    }))();
  },
  methods: {
    init: function init() {
      var _this3 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _this3.error = null;
              if (!_this3.__filiale__ || !_this3.__user__) {
                setTimeout(function () {
                  _this3.init();
                }, 500);
              } else {
                _this3.filiale = _this3.__filiale__;
                _this3.agence = _this3.$store.getters.agence_obj;
                Promise.all([_this3.getData()])["finally"](function () {
                  _this3.loading = false;
                });
              }
            case 2:
            case "end":
              return _context4.stop();
          }
        }, _callee4);
      }))();
    },
    determineAggregator: function determineAggregator() {
      var _this4 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
        var userAccess;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return _this4.userAccess;
            case 2:
              userAccess = _context5.sent;
              _context5.t0 = userAccess;
              _context5.next = _context5.t0 === "all" ? 6 : _context5.t0 === "filiale" ? 6 : _context5.t0 === "agence" ? 8 : 10;
              break;
            case 6:
              // DEX
              _this4.aggregateur = "agence";
              return _context5.abrupt("break", 10);
            case 8:
              // CA
              _this4.aggregateur = "nom_caf";
              return _context5.abrupt("break", 10);
            case 10:
              return _context5.abrupt("return", _this4.aggregateur);
            case 11:
            case "end":
              return _context5.stop();
          }
        }, _callee5);
      }))();
    },
    sortBy: function sortBy(key) {
      var _this$items,
        _this5 = this;
      if (this.sortKey == key) this.ascending = !this.ascending;
      this.sortKey = key;
      (_this$items = this.items) === null || _this$items === void 0 || _this$items.sort(function (a, b) {
        if (_this5.ascending) return a[_this5.sortKey] - b[_this5.sortKey];
        return b[_this5.sortKey] - a[_this5.sortKey];
      });
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
        _this6 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
        var stopLoading, _this6$agence, _this6$__user__, _this6$__user__2, res, _res$data$total, _res$data, _res$data$data, _res$data2, total, totalKeys, sortOrder, baseHeaders, groupHeaders, _res$data$data2, _res$data3, _res$data$total2, _res$data4, _this6$items$;
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              stopLoading = _arguments.length > 0 && _arguments[0] !== undefined ? _arguments[0] : false;
              _this6.error = null;
              _this6.loading = true;
              _context6.prev = 3;
              _context6.next = 6;
              return _this6.$axios.post(_this6.reportex_link(_this6.filiale) + 'creditbuilder/api/v1/report-encours-by-agences/', {
                filiale: _this6.filiale,
                agence: (_this6$agence = _this6.agence) === null || _this6$agence === void 0 ? void 0 : _this6$agence.code,
                caf: _this6.caf,
                client: _this6.client,
                aggregateur: _this6.aggregateur,
                type_filter: _this6.sumBy,
                user_id: ((_this6$__user__ = _this6.__user__) === null || _this6$__user__ === void 0 ? void 0 : _this6$__user__.role_uuid) == 'r472oAxtaFJSlsh5' ? (_this6$__user__2 = _this6.__user__) === null || _this6$__user__2 === void 0 ? void 0 : _this6$__user__2.user_id : ''
              });
            case 6:
              res = _context6.sent;
              if (!_this6.client) {
                total = (_res$data$total = (_res$data = res.data) === null || _res$data === void 0 ? void 0 : _res$data.total) !== null && _res$data$total !== void 0 ? _res$data$total : {};
                totalKeys = Object.keys(total).filter(function (k) {
                  return k !== 'code_agence';
                });
                total = totalKeys.flatMap(function (el) {
                  var baseEntry = {
                    key: el,
                    val: total[el]
                  };
                  if ([_this6.aggregateur, 'code_agence', _this6.sumKey].includes(el)) {
                    return [baseEntry];
                  } else {
                    var percentKey = el + 'percent';
                    var percentVal = _this6.sumBy === "sum" ? total[el] / total.encours_total * 100 : total[el] / total.nombre_dossiers * 100;
                    if (isNaN(percentVal) || percentVal == Number.POSITIVE_INFINITY || percentVal == Number.NEGATIVE_INFINITY) {
                      percentVal = 0;
                    }
                    return [baseEntry, {
                      key: percentKey,
                      val: percentVal
                    }];
                  }
                });
                sortOrder = [_this6.aggregateur, _this6.sumKey];
                _this6.total = total.sort(function (a, b) {
                  var aIndex = sortOrder.indexOf(a.key);
                  var bIndex = sortOrder.indexOf(b.key);
                  if (aIndex === -1 && bIndex === -1) return 0;
                  if (aIndex === -1) return 1;
                  if (bIndex === -1) return -1;
                  return aIndex - bIndex;
                });
                baseHeaders = [{
                  label: _this6.aggregateur === "agence" ? "Agence" : _this6.aggregateur === "nom_caf" ? "CAF" : "Client",
                  key: _this6.aggregateur,
                  align: 'start',
                  type: 'string'
                }, {
                  label: _this6.sumBy === "sum" ? "Montant encours" : "Nbre de dossiers",
                  key: "encours_total",
                  align: 'end',
                  type: 'number',
                  colspan: 2
                }];
                groupHeaders = [0, 30, 60, 90, 180].flatMap(function (e) {
                  return [{
                    label: _this6.sumBy === "sum" ? "Montant " : "Nbre de dossiers",
                    key: "par" + e,
                    align: 'end',
                    type: 'number'
                  }, {
                    label: '%',
                    key: "par" + e + "percent",
                    align: 'end',
                    type: 'number'
                  }];
                });
                _this6.headers = baseHeaders.concat(groupHeaders);
                _this6.items = (_res$data$data = (_res$data2 = res.data) === null || _res$data2 === void 0 ? void 0 : _res$data2.data) !== null && _res$data$data !== void 0 ? _res$data$data : [];
                _this6.items = _this6.items.map(function (item) {
                  var _item$encours_total;
                  return _objectSpread(_objectSpread({}, item), {}, {
                    encours_total: Math.ceil((_item$encours_total = item.encours_total) !== null && _item$encours_total !== void 0 ? _item$encours_total : 0)
                  }, Object.fromEntries(totalKeys.flatMap(function (k) {
                    if ([_this6.aggregateur, 'code_agence', _this6.sumKey].includes(k)) {
                      return [[k, item[k]]];
                    } else {
                      var _item$k;
                      var percentKey = k + 'percent';
                      var val = (_item$k = item[k]) !== null && _item$k !== void 0 ? _item$k : 0;
                      var percentVal = (val / item[_this6.sumKey] * 100).toFixed(2);
                      if (isNaN(percentVal) || percentVal == Number.POSITIVE_INFINITY || percentVal == Number.NEGATIVE_INFINITY) {
                        percentVal = 0;
                      }
                      return [[k, Math.ceil(val)], [percentKey, percentVal]];
                    }
                  })));
                });
              } else {
                _this6.items = (_res$data$data2 = (_res$data3 = res.data) === null || _res$data3 === void 0 ? void 0 : _res$data3.data) !== null && _res$data$data2 !== void 0 ? _res$data$data2 : [];
                _this6.total = (_res$data$total2 = (_res$data4 = res.data) === null || _res$data4 === void 0 ? void 0 : _res$data4.total) !== null && _res$data$total2 !== void 0 ? _res$data$total2 : [];
                _this6.headers = Object.keys((_this6$items$ = _this6.items[0]) !== null && _this6$items$ !== void 0 ? _this6$items$ : {}).filter(function (k) {
                  return !["cred_pub_key"].includes(k);
                }).map(function (k) {
                  return {
                    key: k,
                    label: k.replace(/_/g, ' ').toUpperCase(),
                    align: k === "encours_total" ? "end" : "start",
                    type: k === "encours_total" ? "number" : "string"
                  };
                });
              }
              _context6.next = 13;
              break;
            case 10:
              _context6.prev = 10;
              _context6.t0 = _context6["catch"](3);
              _this6.showError(_context6.t0);
              // this.toastError(error);
            case 13:
              _context6.prev = 13;
              _this6.loading = !stopLoading;
              return _context6.finish(13);
            case 16:
            case "end":
              return _context6.stop();
          }
        }, _callee6, null, [[3, 10, 13, 16]]);
      }))();
    },
    onSelect: function onSelect(row) {
      var _this7 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
        var history, checkPar, _this7$selectedRow, _this7$selectedRow2, _this7$selectedRow3, _this7$selectedRow4, _this7$selectedRow5, _this7$selectedRow6, _this7$selectedRow$ma, _this7$selectedRow7, _this7$selectedRow8, _this7$selectedRow9;
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              history = {
                aggregateur: _this7.aggregateur,
                agence: _this7.agence,
                caf: _this7.caf,
                client: _this7.client,
                items: _this7.items,
                headers: _this7.headers,
                total: _this7.total,
                page: _this7.page
              };
              checkPar = function checkPar(msg) {
                if (_this7.selectedRow && _this7.selectedRow.par0 == 0) {
                  _this7.$toasted.error(msg);
                  return false;
                }
                return true;
              };
              if (row && _typeof(row) == 'object' && !Array.isArray(row)) _this7.selectedRow = row;
              if (_this7.agence) {
                _context7.next = 9;
                break;
              }
              if (checkPar("Cette agence n'a pas de dossier en recouvrement")) {
                _context7.next = 6;
                break;
              }
              return _context7.abrupt("return");
            case 6:
              if (_this7.selectedRow.code_agence) {
                _this7.agence = {
                  name: (_this7$selectedRow = _this7.selectedRow) === null || _this7$selectedRow === void 0 ? void 0 : _this7$selectedRow.agence,
                  code: (_this7$selectedRow2 = _this7.selectedRow) === null || _this7$selectedRow2 === void 0 ? void 0 : _this7$selectedRow2.code_agence
                };
                _this7.aggregateur = "nom_caf";
              }
              _context7.next = 26;
              break;
            case 9:
              if (_this7.caf) {
                _context7.next = 15;
                break;
              }
              if (checkPar("Ce CAF n'a pas de dossier en recouvrement")) {
                _context7.next = 12;
                break;
              }
              return _context7.abrupt("return");
            case 12:
              if ((_this7$selectedRow3 = _this7.selectedRow) !== null && _this7$selectedRow3 !== void 0 && _this7$selectedRow3.nom_caf) {
                _this7.caf = {
                  nom_caf: (_this7$selectedRow4 = _this7.selectedRow) === null || _this7$selectedRow4 === void 0 ? void 0 : _this7$selectedRow4.nom_caf
                };
                _this7.aggregateur = "nom_client";
              }
              _context7.next = 26;
              break;
            case 15:
              if (_this7.client) {
                _context7.next = 21;
                break;
              }
              if (checkPar("Ce client n'a pas de dossier en recouvrement")) {
                _context7.next = 18;
                break;
              }
              return _context7.abrupt("return");
            case 18:
              if ((_this7$selectedRow5 = _this7.selectedRow) !== null && _this7$selectedRow5 !== void 0 && _this7$selectedRow5.nom_client) {
                _this7.client = {
                  nom_client: (_this7$selectedRow6 = _this7.selectedRow) === null || _this7$selectedRow6 === void 0 ? void 0 : _this7$selectedRow6.nom_client,
                  matcli: (_this7$selectedRow$ma = (_this7$selectedRow7 = _this7.selectedRow) === null || _this7$selectedRow7 === void 0 ? void 0 : _this7$selectedRow7.matcli) !== null && _this7$selectedRow$ma !== void 0 ? _this7$selectedRow$ma : (_this7$selectedRow8 = _this7.selectedRow) === null || _this7$selectedRow8 === void 0 ? void 0 : _this7$selectedRow8.matricule_client
                };
                _this7.aggregateur = "dossier";
              }
              _context7.next = 26;
              break;
            case 21:
              if (!(_this7.aggregateur === "dossier")) {
                _context7.next = 25;
                break;
              }
              _context7.next = 24;
              return _this7.$router.push({
                name: "creation",
                params: {
                  templateId: (_this7$selectedRow9 = _this7.selectedRow) === null || _this7$selectedRow9 === void 0 ? void 0 : _this7$selectedRow9.cred_pub_key
                }
              });
            case 24:
              EventBus.$emit("view-only");
            case 25:
              return _context7.abrupt("return");
            case 26:
              if (_this7.aggregateur !== history.aggregateur) {
                _this7.history.push(history);
              }
              _context7.next = 29;
              return _this7.getData(true);
            case 29:
              _this7.page = 1;
            case 30:
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
        this.caf = last.caf;
        this.client = last.client;
        this.items = last.items;
        this.headers = last.headers;
        this.total = last.total;
        this.page = last.page;
      }
    },
    downloadTable: function downloadTable() {
      var _this8 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
        var data, new_headers;
        return _regeneratorRuntime().wrap(function _callee8$(_context8) {
          while (1) switch (_context8.prev = _context8.next) {
            case 0:
              _context8.next = 2;
              return _this8.getData(true);
            case 2:
              data = {};
              new_headers = [];
              data = {
                "headers": new_headers,
                "items": _this8.items,
                "fileType": "excel",
                "title": _this8.title
              };
              EventBus.$emit("download-table-data", data);
            case 6:
            case "end":
              return _context8.stop();
          }
        }, _callee8);
      }))();
    },
    formatNumber: function formatNumber(num) {
      return Intl.NumberFormat('fr-FR').format(num);
    }
  },
  watch: {
    __filiale__: function __filiale__(val) {
      if (val != this.filiale) {
        this.filiale = val;
        this.agence = this.$store.getters.agence_obj;
        this.getData(true);
      }
    },
    agence: function agence(val) {
      if (val && this.aggregateur == "agence") {
        this.aggregateur = "nom_caf";
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/RCDashboard/Statistiques/Recouvrement/ReportTwo.vue?vue&type=template&id=1d62c406&scoped=true":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/RCDashboard/Statistiques/Recouvrement/ReportTwo.vue?vue&type=template&id=1d62c406&scoped=true ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm$items;
  var _vm = this,
    _c = _vm._self._c;
  return !_vm.is_caf ? _c("stat-table", {
    attrs: {
      loading: _vm.loading,
      title: _vm.title,
      spacer: false,
      useToolbar: "",
      items: _vm.items,
      thStyle: "text-align: center;",
      tdMinWidth: "auto",
      headers: _vm.headers,
      useYearUpdater: false,
      showEmpty: !_vm.error,
      useDownload: false,
      truncateLength: 600,
      useSearch: "",
      searchKey: [_vm.aggregateur],
      searchValue: _vm.search,
      maxHeight: "500px",
      perPage: _vm.perPage,
      count: (_vm$items = _vm.items) === null || _vm$items === void 0 ? void 0 : _vm$items.length,
      activePage: _vm.page,
      useCounter: false
    },
    on: {
      paginate: function paginate($event) {
        _vm.page = $event;
      }
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
            "for": "data-sum-by"
          }
        }, [_vm._v("Sommé par:")]), _vm._v(" "), _c("select", {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: _vm.sumBy,
            expression: "sumBy"
          }],
          staticClass: "form-select fs-small",
          attrs: {
            id: "data-sum-by"
          },
          on: {
            change: [function ($event) {
              var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
                return o.selected;
              }).map(function (o) {
                var val = "_value" in o ? o._value : o.value;
                return val;
              });
              _vm.sumBy = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
            }, function ($event) {
              return _vm.getData(true);
            }]
          }
        }, [_c("option", {
          attrs: {
            value: "sum"
          }
        }, [_vm._v("Montant")]), _vm._v(" "), _c("option", {
          attrs: {
            value: "count"
          }
        }, [_vm._v("Nombre de dossier")])])]), _vm._v(" "), _c("div", {
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
        })])])])]), _vm._v(" "), _c("div", {
          staticClass: "d-flex gap-1 align-items-end"
        }, [_vm.history.length > 0 ? _c("div", {
          staticClass: "col-auto"
        }, [_c("button", {
          staticClass: "btn btn-sm btn-outline-reportex d-flex align-items-center",
          on: {
            click: _vm.goBack
          }
        }, [_c("i", {
          staticClass: "icofont-arrow-left"
        }), _vm._v(" Retour\n            ")])]) : _vm._e(), _vm._v(" "), _c("div", {
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
        })])])])])]), _vm._v(" "), _c("ErrorRetry", {
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
      key: "toolbar-search",
      fn: function fn() {
        return [_c("span")];
      },
      proxy: true
    }, {
      key: "tableHeader",
      fn: function fn() {
        return [_vm.aggregateur == "dossier" ? [_c("tr", _vm._l(_vm.headers, function (h, index) {
          return _c("th", {
            key: h.key,
            "class": index == 0 ? "my-sticky2" : ""
          }, [_vm._v("\n          " + _vm._s(h.label) + "\n        ")]);
        }), 0)] : [_c("tr", [_c("th", {
          staticClass: "table-light my-sticky text-center",
          staticStyle: {
            "vertical-align": "middle",
            "text-align": "center",
            "text-transform": "uppercase"
          },
          attrs: {
            rowspan: "2",
            colspan: "1"
          }
        }, [_vm._v("\n          " + _vm._s(_vm.aggregatorLabel) + "\n        ")]), _vm._v(" "), _c("th", {
          staticClass: "table-light text-center",
          staticStyle: {
            "vertical-align": "middle",
            "text-align": "center",
            "text-transform": "uppercase"
          },
          attrs: {
            colspan: "2"
          },
          on: {
            click: function click($event) {
              return _vm.sortBy("encours_total");
            }
          }
        }, [_vm._v("\n          " + _vm._s(_vm.sumBy == "sum" ? "encours" : "Nombre total de dossiers") + "\n          "), _vm.sortKey == "encours_total" ? _c("span", {
          staticClass: "cursor-pointer",
          staticStyle: {
            color: "#36fb2d"
          }
        }, [!_vm.ascending ? _c("i", {
          staticClass: "icofont-caret-down"
        }) : _c("i", {
          staticClass: "icofont-caret-up"
        })]) : _c("span", {
          staticClass: "cursor-pointer",
          staticStyle: {
            "font-size": ".5em"
          }
        }, [_c("i", {
          staticClass: "icofont-sort fw-normal"
        })])]), _vm._v(" "), _vm._l(_vm.par_group, function (pg) {
          return _c("th", {
            key: pg.name,
            staticStyle: {
              "text-align": "center"
            },
            attrs: {
              colspan: "2"
            },
            on: {
              click: function click($event) {
                return _vm.sortBy(pg.name);
              }
            }
          }, [_vm._v("\n          " + _vm._s(pg.label) + "\n          "), _vm.sortKey == pg.name ? _c("span", {
            staticClass: "cursor-pointer",
            staticStyle: {
              color: "#36fb2d"
            }
          }, [!_vm.ascending ? _c("i", {
            staticClass: "icofont-caret-down"
          }) : _c("i", {
            staticClass: "icofont-caret-up"
          })]) : _c("span", {
            staticClass: "cursor-pointer",
            staticStyle: {
              "font-size": ".5em"
            }
          }, [_c("i", {
            staticClass: "icofont-sort fw-normal"
          })])]);
        })], 2), _vm._v(" "), _c("tr", {
          staticClass: "table-light text-center"
        }, [_c("th", {
          attrs: {
            colspan: "2"
          }
        }, [_vm._v(_vm._s(_vm.sumBy == "sum" ? "Montant" : "Nbre total de dossiers"))]), _vm._v(" "), _vm._l(_vm.par_group, function (pg) {
          return [_c("th", {
            key: "".concat(pg.name, "-1")
          }, [_vm._v(_vm._s(_vm.sumBy == "sum" ? "Montant" : "Nbre de dossiers"))]), _vm._v(" "), _c("th", {
            key: "".concat(pg.name, "-2"),
            staticStyle: {
              width: "70px !important"
            }
          }, [_vm._v("%")])];
        })], 2)]];
      },
      proxy: true
    }, _vm.total ? {
      key: "total",
      fn: function fn() {
        return [_c("tr", [_vm._l(_vm.total, function (item, index) {
          var _item$key;
          return [item.key == _vm.aggregateur ? _c("th", {
            key: item.key + index,
            staticClass: "my-sticky",
            attrs: {
              colspan: "1"
            }
          }, [_vm._v("\n          " + _vm._s(item.val) + "\n        ")]) : item.key == _vm.sumKey ? _c("th", {
            key: item.key + index,
            staticClass: "text-end number-style",
            attrs: {
              colspan: "2"
            }
          }, [_vm._v("\n          " + _vm._s(_vm._f("formatNumber")(Math.ceil(item.val))) + "\n        ")]) : _c("th", {
            key: "".concat(item.key, "-").concat(index + 1),
            staticClass: "text-end number-style",
            staticStyle: {
              "font-family": "monospace !important",
              "font-size": "1.1em",
              "font-weight": "normal"
            }
          }, [(_item$key = item.key) !== null && _item$key !== void 0 && _item$key.includes("percent") ? [_vm._v("\n            " + _vm._s(item.val.toFixed(2)) + "\n          ")] : [_vm._v("\n            " + _vm._s(_vm._f("formatNumber")(Math.ceil(item.val))) + "\n          ")]], 2)];
        })], 2)];
      },
      proxy: true
    } : null], null, true)
  }, [_vm._v(" "), _vm._v(" "), _vm._v(" "), [_vm.paginatedItems ? [_vm.aggregateur == "dossier" ? _vm._l(_vm.paginatedItems, function (item, index) {
    return _c("tr", {
      key: index,
      staticClass: "cursor-pointer",
      on: {
        click: function click($event) {
          return _vm.onSelect(item);
        }
      }
    }, [_c("td", {
      staticClass: "my-sticky2 text-start"
    }, [_vm._v(_vm._s(item === null || item === void 0 ? void 0 : item.matricule_client))]), _vm._v(" "), _c("td", {
      staticClass: "text-start"
    }, [_vm._v(_vm._s(item === null || item === void 0 ? void 0 : item.nom_client))]), _vm._v(" "), _c("td", {
      staticClass: "text-start"
    }, [_vm._v(_vm._s(item === null || item === void 0 ? void 0 : item.nom_caf))]), _vm._v(" "), _c("td", {
      staticClass: "text-start"
    }, [_vm._v(_vm._s(item === null || item === void 0 ? void 0 : item.numero_dossier))]), _vm._v(" "), _c("td", {
      staticClass: "text-end number-style"
    }, [_vm._v(_vm._s(_vm.formatNumber(Math.ceil(item === null || item === void 0 ? void 0 : item.encours_total))))])]);
  }) : _vm._l(_vm.paginatedItems, function (item, index) {
    return _c("tr", {
      key: index,
      staticClass: "cursor-pointer",
      on: {
        click: function click($event) {
          return _vm.onSelect(item);
        }
      }
    }, [item !== null && item !== void 0 && item[_vm.aggregateur] ? [_c("td", {
      staticClass: "my-sticky2 text-start"
    }, [_vm._v(_vm._s(item === null || item === void 0 ? void 0 : item[_vm.aggregateur]))]), _vm._v(" "), _c("td", {
      staticClass: "text-end number-style",
      attrs: {
        colspan: "2"
      }
    }, [_vm._v(_vm._s(typeof (item === null || item === void 0 ? void 0 : item[_vm.sumKey]) == "number" ? _vm.formatNumber(Math.ceil(item === null || item === void 0 ? void 0 : item[_vm.sumKey])) : item === null || item === void 0 ? void 0 : item[_vm.sumKey]))]), _vm._v(" "), _vm._l(_vm.par_group, function (pg) {
      return [_c("td", {
        key: pg.name + 3,
        staticClass: "text-end number-style",
        staticStyle: {
          width: "180px !important"
        }
      }, [_vm._v(_vm._s(_vm._f("formatNumber")(Math.ceil(item === null || item === void 0 ? void 0 : item[pg.name]))))]), _vm._v(" "), _c("td", {
        key: pg.name + 4,
        staticClass: "text-end number-style",
        staticStyle: {
          "min-width": "80px !important"
        }
      }, [_vm._v(_vm._s(item === null || item === void 0 ? void 0 : item[pg.name + "percent"]))])];
    })] : _vm._e()], 2);
  })] : _vm._e()]], 2) : _vm._e();
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/RCDashboard/Statistiques/Recouvrement/ReportTwo.vue?vue&type=style&index=0&id=1d62c406&scoped=true&lang=css":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/RCDashboard/Statistiques/Recouvrement/ReportTwo.vue?vue&type=style&index=0&id=1d62c406&scoped=true&lang=css ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.tb-sticky[data-v-1d62c406] {\r\n  background-color: rgb(241, 241, 241) !important;\r\n  /* border: 2px solid rgb(241, 241, 241) !important; */\r\n  position: sticky;\r\n  left: -2px;\r\n  z-index: 10;\n}\nth.tb-sticky[data-v-1d62c406] {\r\n  top: 0 !important;\r\n  z-index: 2000 !important;\r\n  position: sticky;\r\n  color: black;\n}\n.fs-small[data-v-1d62c406] {\r\n  font-size: 0.8rem;\n}\n.my-sticky[data-v-1d62c406] {\r\n  background-color: rgb(241, 241, 241) !important;\r\n  border: 2px solid rgb(241, 241, 241) !important;\r\n  position: sticky;\r\n  left: -2px;\r\n  z-index: 10\n}\nth.my-sticky[data-v-1d62c406] {\r\n  top: 0 !important;\r\n  z-index: 2000 !important;\r\n  position: sticky;\r\n  color: black\n}\ntd[data-v-1d62c406] {\r\n  min-width: 200px;\r\n  max-width: 200px;\n}\n.my-sticky2[data-v-1d62c406] {\r\n  left: 0 !important;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/RCDashboard/Statistiques/Recouvrement/ReportTwo.vue?vue&type=style&index=0&id=1d62c406&scoped=true&lang=css":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/RCDashboard/Statistiques/Recouvrement/ReportTwo.vue?vue&type=style&index=0&id=1d62c406&scoped=true&lang=css ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportTwo_vue_vue_type_style_index_0_id_1d62c406_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ReportTwo.vue?vue&type=style&index=0&id=1d62c406&scoped=true&lang=css */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/RCDashboard/Statistiques/Recouvrement/ReportTwo.vue?vue&type=style&index=0&id=1d62c406&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportTwo_vue_vue_type_style_index_0_id_1d62c406_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportTwo_vue_vue_type_style_index_0_id_1d62c406_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/RCDashboard/Statistiques/Recouvrement/ReportTwo.vue":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/RCDashboard/Statistiques/Recouvrement/ReportTwo.vue ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ReportTwo_vue_vue_type_template_id_1d62c406_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ReportTwo.vue?vue&type=template&id=1d62c406&scoped=true */ "./resources/js/components/RCDashboard/Statistiques/Recouvrement/ReportTwo.vue?vue&type=template&id=1d62c406&scoped=true");
/* harmony import */ var _ReportTwo_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ReportTwo.vue?vue&type=script&lang=js */ "./resources/js/components/RCDashboard/Statistiques/Recouvrement/ReportTwo.vue?vue&type=script&lang=js");
/* harmony import */ var _ReportTwo_vue_vue_type_style_index_0_id_1d62c406_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ReportTwo.vue?vue&type=style&index=0&id=1d62c406&scoped=true&lang=css */ "./resources/js/components/RCDashboard/Statistiques/Recouvrement/ReportTwo.vue?vue&type=style&index=0&id=1d62c406&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ReportTwo_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _ReportTwo_vue_vue_type_template_id_1d62c406_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _ReportTwo_vue_vue_type_template_id_1d62c406_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "1d62c406",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/RCDashboard/Statistiques/Recouvrement/ReportTwo.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/RCDashboard/Statistiques/Recouvrement/ReportTwo.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/components/RCDashboard/Statistiques/Recouvrement/ReportTwo.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportTwo_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ReportTwo.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/RCDashboard/Statistiques/Recouvrement/ReportTwo.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportTwo_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/RCDashboard/Statistiques/Recouvrement/ReportTwo.vue?vue&type=style&index=0&id=1d62c406&scoped=true&lang=css":
/*!*********************************************************************************************************************************************!*\
  !*** ./resources/js/components/RCDashboard/Statistiques/Recouvrement/ReportTwo.vue?vue&type=style&index=0&id=1d62c406&scoped=true&lang=css ***!
  \*********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportTwo_vue_vue_type_style_index_0_id_1d62c406_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ReportTwo.vue?vue&type=style&index=0&id=1d62c406&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/RCDashboard/Statistiques/Recouvrement/ReportTwo.vue?vue&type=style&index=0&id=1d62c406&scoped=true&lang=css");


/***/ }),

/***/ "./resources/js/components/RCDashboard/Statistiques/Recouvrement/ReportTwo.vue?vue&type=template&id=1d62c406&scoped=true":
/*!*******************************************************************************************************************************!*\
  !*** ./resources/js/components/RCDashboard/Statistiques/Recouvrement/ReportTwo.vue?vue&type=template&id=1d62c406&scoped=true ***!
  \*******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportTwo_vue_vue_type_template_id_1d62c406_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportTwo_vue_vue_type_template_id_1d62c406_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportTwo_vue_vue_type_template_id_1d62c406_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ReportTwo.vue?vue&type=template&id=1d62c406&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/RCDashboard/Statistiques/Recouvrement/ReportTwo.vue?vue&type=template&id=1d62c406&scoped=true");


/***/ })

}]);