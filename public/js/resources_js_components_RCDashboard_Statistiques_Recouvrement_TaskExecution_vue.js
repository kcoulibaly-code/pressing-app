"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_RCDashboard_Statistiques_Recouvrement_TaskExecution_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/RCDashboard/Statistiques/Recouvrement/TaskExecution.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/RCDashboard/Statistiques/Recouvrement/TaskExecution.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Input_SelectFiliale_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Input/SelectFiliale.vue */ "./resources/js/components/RCDashboard/Input/SelectFiliale.vue");
/* harmony import */ var _ErrorRetry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ErrorRetry */ "./resources/js/components/RCDashboard/Statistiques/Recouvrement/ErrorRetry.vue");
/* harmony import */ var _shared_ZeroCross_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/ZeroCross.vue */ "./resources/js/components/shared/ZeroCross.vue");
/* harmony import */ var _Utils_excel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Utils/excel */ "./resources/js/components/RCDashboard/Utils/excel.js");
/* harmony import */ var _Components_Spacer_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Components/Spacer.vue */ "./resources/js/components/RCDashboard/Components/Spacer.vue");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return r; }; var t, r = {}, e = Object.prototype, n = e.hasOwnProperty, o = "function" == typeof Symbol ? Symbol : {}, i = o.iterator || "@@iterator", a = o.asyncIterator || "@@asyncIterator", u = o.toStringTag || "@@toStringTag"; function c(t, r, e, n) { Object.defineProperty(t, r, { value: e, enumerable: !n, configurable: !n, writable: !n }); } try { c({}, ""); } catch (t) { c = function c(t, r, e) { return t[r] = e; }; } function h(r, e, n, o) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype); return c(a, "_invoke", function (r, e, n) { var o = 1; return function (i, a) { if (3 === o) throw Error("Generator is already running"); if (4 === o) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var u = n.delegate; if (u) { var c = d(u, n); if (c) { if (c === f) continue; return c; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (1 === o) throw o = 4, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = 3; var h = s(r, e, n); if ("normal" === h.type) { if (o = n.done ? 4 : 2, h.arg === f) continue; return { value: h.arg, done: n.done }; } "throw" === h.type && (o = 4, n.method = "throw", n.arg = h.arg); } }; }(r, n, new Context(o || [])), !0), a; } function s(t, r, e) { try { return { type: "normal", arg: t.call(r, e) }; } catch (t) { return { type: "throw", arg: t }; } } r.wrap = h; var f = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var l = {}; c(l, i, function () { return this; }); var p = Object.getPrototypeOf, y = p && p(p(x([]))); y && y !== e && n.call(y, i) && (l = y); var v = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(l); function g(t) { ["next", "throw", "return"].forEach(function (r) { c(t, r, function (t) { return this._invoke(r, t); }); }); } function AsyncIterator(t, r) { function e(o, i, a, u) { var c = s(t[o], t, i); if ("throw" !== c.type) { var h = c.arg, f = h.value; return f && "object" == _typeof(f) && n.call(f, "__await") ? r.resolve(f.__await).then(function (t) { e("next", t, a, u); }, function (t) { e("throw", t, a, u); }) : r.resolve(f).then(function (t) { h.value = t, a(h); }, function (t) { return e("throw", t, a, u); }); } u(c.arg); } var o; c(this, "_invoke", function (t, n) { function i() { return new r(function (r, o) { e(t, n, r, o); }); } return o = o ? o.then(i, i) : i(); }, !0); } function d(r, e) { var n = e.method, o = r.i[n]; if (o === t) return e.delegate = null, "throw" === n && r.i["return"] && (e.method = "return", e.arg = t, d(r, e), "throw" === e.method) || "return" !== n && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + n + "' method")), f; var i = s(o, r.i, e.arg); if ("throw" === i.type) return e.method = "throw", e.arg = i.arg, e.delegate = null, f; var a = i.arg; return a ? a.done ? (e[r.r] = a.value, e.next = r.n, "return" !== e.method && (e.method = "next", e.arg = t), e.delegate = null, f) : a : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f); } function w(t) { this.tryEntries.push(t); } function m(r) { var e = r[4] || {}; e.type = "normal", e.arg = t, r[4] = e; } function Context(t) { this.tryEntries = [[-1]], t.forEach(w, this), this.reset(!0); } function x(r) { if (null != r) { var e = r[i]; if (e) return e.call(r); if ("function" == typeof r.next) return r; if (!isNaN(r.length)) { var o = -1, a = function e() { for (; ++o < r.length;) if (n.call(r, o)) return e.value = r[o], e.done = !1, e; return e.value = t, e.done = !0, e; }; return a.next = a; } } throw new TypeError(_typeof(r) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, c(v, "constructor", GeneratorFunctionPrototype), c(GeneratorFunctionPrototype, "constructor", GeneratorFunction), c(GeneratorFunctionPrototype, u, GeneratorFunction.displayName = "GeneratorFunction"), r.isGeneratorFunction = function (t) { var r = "function" == typeof t && t.constructor; return !!r && (r === GeneratorFunction || "GeneratorFunction" === (r.displayName || r.name)); }, r.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, c(t, u, "GeneratorFunction")), t.prototype = Object.create(v), t; }, r.awrap = function (t) { return { __await: t }; }, g(AsyncIterator.prototype), c(AsyncIterator.prototype, a, function () { return this; }), r.AsyncIterator = AsyncIterator, r.async = function (t, e, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(h(t, e, n, o), i); return r.isGeneratorFunction(e) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, g(v), c(v, u, "Generator"), c(v, i, function () { return this; }), c(v, "toString", function () { return "[object Generator]"; }), r.keys = function (t) { var r = Object(t), e = []; for (var n in r) e.unshift(n); return function t() { for (; e.length;) if ((n = e.pop()) in r) return t.value = n, t.done = !1, t; return t.done = !0, t; }; }, r.values = x, Context.prototype = { constructor: Context, reset: function reset(r) { if (this.prev = this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(m), !r) for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0][4]; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(r) { if (this.done) throw r; var e = this; function n(t) { a.type = "throw", a.arg = r, e.next = t; } for (var o = e.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i[4], u = this.prev, c = i[1], h = i[2]; if (-1 === i[0]) return n("end"), !1; if (!c && !h) throw Error("try statement without catch or finally"); if (null != i[0] && i[0] <= u) { if (u < c) return this.method = "next", this.arg = t, n(c), !0; if (u < h) return n(h), !1; } } }, abrupt: function abrupt(t, r) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var n = this.tryEntries[e]; if (n[0] > -1 && n[0] <= this.prev && this.prev < n[2]) { var o = n; break; } } o && ("break" === t || "continue" === t) && o[0] <= r && r <= o[2] && (o = null); var i = o ? o[4] : {}; return i.type = t, i.arg = r, o ? (this.method = "next", this.next = o[2], f) : this.complete(i); }, complete: function complete(t, r) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), f; }, finish: function finish(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[2] === t) return this.complete(e[4], e[3]), m(e), f; } }, "catch": function _catch(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[0] === t) { var n = e[4]; if ("throw" === n.type) { var o = n.arg; m(e); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(r, e, n) { return this.delegate = { i: x(r), r: e, n: n }, "next" === this.method && (this.arg = t), f; } }, r; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "TaskExecution",
  components: {
    SelectFiliale: _Input_SelectFiliale_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    ErrorRetry: _ErrorRetry__WEBPACK_IMPORTED_MODULE_1__["default"],
    ZeroCross: _shared_ZeroCross_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    Spacer: _Components_Spacer_vue__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  data: function data() {
    return {
      items: [],
      total: null,
      loading: false,
      error: null,
      search: "",
      aggregateur: "client",
      agence: null,
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
      duree: null,
      filtre: {},
      baseFiltre: {},
      sortKey: null,
      history: [],
      filiale: null,
      doss_state: "courant",
      state: {
        'caf': ['courant', 'retard', 'urgent'],
        'dex': ['courant', 'urgent']
      },
      currentPage: 1,
      allowedRoles: ['yYnev325ob1vDkgq', 'r472oAxtaFJSlsh5', 'l6yd6NDjeLEpIIWh', 'QBRHlcRW5H52grDn', '1gwhyPuYhPuAfuEz'],
      aggr_option: ['client', 'caf', 'agence']
    };
  },
  computed: {
    stateOption: function stateOption() {
      if (['r472oAxtaFJSlsh5', 'yYnev325ob1vDkgq'].includes(this.__user__.role_uuid)) {
        return this.state['caf'];
      } else if (['l6yd6NDjeLEpIIWh', 'QBRHlcRW5H52grDn', '1gwhyPuYhPuAfuEz'].includes(this.__user__.role_uuid)) {
        return this.state['dex'];
      } else {
        return [];
      }
    },
    role: function role() {
      var _this$__user__, _this$__user__2;
      // const access = this.determineAccess(this.__user__);

      // switch (access) {
      //   // case "all":
      //   // case "filiale": // DEX
      //   //   this.aggregateur = 'agence'
      //   //   break;
      //   case "agence": // CA
      //     this.aggregateur = 'caf'
      //     break;
      //   case "user": // CAF
      //     this.aggregateur = 'client'
      //     this.filtre = { "user_id": this.__user__?.user_id, "id_caf": this.__user__?.user_id, "nom_caf": this.__user__?.name, "role": this.__user__?.role_uuid, use_duree: true }
      //     break;
      // }

      if (["tmu3PEDVQsevYH2rhw4o", "aFwisnrdo42c4n9MHCG2", "K8C1dfx52rvA5ugR1mqt"].includes((_this$__user__ = this.__user__) === null || _this$__user__ === void 0 ? void 0 : _this$__user__.role_uuid)) {
        this.aggregateur = 'client';
      }
      return (_this$__user__2 = this.__user__) === null || _this$__user__2 === void 0 ? void 0 : _this$__user__2.role_sigle;
    },
    keyInFinalAggregation: function keyInFinalAggregation() {
      return ['client', 'dossier'].includes(this.aggregateur);
    }
  },
  mounted: function mounted() {
    var _this = this;
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _this.determineAggregateur();
          case 2:
            _this.init();
            EventBus.$on('filiale-and-agence-change', /*#__PURE__*/function () {
              var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(newVal) {
                var _newVal$agence, _this$$route$query;
                return _regeneratorRuntime().wrap(function _callee$(_context) {
                  while (1) switch (_context.prev = _context.next) {
                    case 0:
                      _this.filiale = newVal === null || newVal === void 0 ? void 0 : newVal.filiale;
                      _this.agence = newVal === null || newVal === void 0 || (_newVal$agence = newVal.agence) === null || _newVal$agence === void 0 ? void 0 : _newVal$agence.code;
                      if (!(((_this$$route$query = _this.$route.query) === null || _this$$route$query === void 0 ? void 0 : _this$$route$query["super-tab"]) === "execution-taches")) {
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
          case 4:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }))();
  },
  methods: {
    switchState: function switchState(tab) {
      this.doss_state = tab;
      this.getData(true);
    },
    init: function init() {
      var _this2 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var _this2$$store$getters, _this2$$store$getters2;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _this2.error = null;
              console.log("Initializing...", _this2.filiale, _this2.__filiale__, _this2.agence, _this2.__user__);
              if (!_this2.__filiale__ || !_this2.__user__) {
                setTimeout(function () {
                  _this2.init();
                }, 500);
              } else {
                _this2.filtre = _objectSpread({}, _this2.baseFiltre);
                _this2.filiale = _this2.__filiale__;
                _this2.agence = (_this2$$store$getters = (_this2$$store$getters2 = _this2.$store.getters.agence_obj) === null || _this2$$store$getters2 === void 0 ? void 0 : _this2$$store$getters2.code) !== null && _this2$$store$getters !== void 0 ? _this2$$store$getters : null;
                Promise.all([_this2.getData()])["finally"](function () {
                  _this2.loading = false;
                });
              }
            case 3:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
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
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        var stopLoading, _this3$__user__, _this3$__user__2, _res$data, _res$data2, _this3$__user__3, url, filtres, res, itemsArray;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              stopLoading = _arguments.length > 0 && _arguments[0] !== undefined ? _arguments[0] : false;
              _this3.error = null;
              _this3.loading = true;
              _context4.prev = 3;
              url = _this3.allowedRoles.includes((_this3$__user__ = _this3.__user__) === null || _this3$__user__ === void 0 ? void 0 : _this3$__user__.role_uuid) ? 'creditbuilder/api/v2/execution-taches-recouvrement/' : 'creditbuilder/api/v1/execution-taches-recouvrement/';
              filtres = _this3.filtre;
              if (_this3.allowedRoles.includes((_this3$__user__2 = _this3.__user__) === null || _this3$__user__2 === void 0 ? void 0 : _this3$__user__2.role_uuid)) {
                filtres.late = _this3.doss_state != 'courant';
                filtres.user_id = _this3.__user__.user_id;
                filtres.priority = _this3.doss_state;
                filtres.filiale = _this3.filiale;
                filtres.aggregateur = _this3.aggregateur;
              }
              _context4.next = 9;
              return _this3.$axios.post(_this3.reportex_link(_this3.filiale) + url, {
                filiale: _this3.filiale,
                agence: _this3.agence,
                top: _this3.top,
                aggregateur: _this3.aggregateur,
                duree: _this3.duree,
                filtre: filtres
              });
            case 9:
              res = _context4.sent;
              _this3.items = ((_res$data = res.data) === null || _res$data === void 0 ? void 0 : _res$data.data) || [];
              _this3.total = ((_res$data2 = res.data) === null || _res$data2 === void 0 ? void 0 : _res$data2.total) || 0;
              _this3.currentPage = 1;
              if (_this3.allowedRoles.includes((_this3$__user__3 = _this3.__user__) === null || _this3$__user__3 === void 0 ? void 0 : _this3$__user__3.role_uuid)) {
                itemsArray = _this3.items.map(function (it) {
                  return _objectSpread(_objectSpread({}, it), {}, {
                    agence: (0,_Utils_excel__WEBPACK_IMPORTED_MODULE_3__.getAgencyName_v2)(it.agence, _this3.filiale),
                    encours_total: Math.round(it.encours_total)
                  });
                });
                _this3.total.encours_total = Math.round(_this3.total.encours_total);
                _this3.items = itemsArray;
              }
              _context4.next = 21;
              break;
            case 16:
              _context4.prev = 16;
              _context4.t0 = _context4["catch"](3);
              console.log(_context4.t0);
              _this3.toastError(_context4.t0);
              _this3.showError(_context4.t0);
            case 21:
              _context4.prev = 21;
              _this3.loading = !stopLoading;
              return _context4.finish(21);
            case 24:
            case "end":
              return _context4.stop();
          }
        }, _callee4, null, [[3, 16, 21, 24]]);
      }))();
    },
    resetFilter: function resetFilter() {
      var _this4 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
        var _this4$$store$getters, _this4$$store$getters2;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              _this4.agence = (_this4$$store$getters = (_this4$$store$getters2 = _this4.$store.getters.agence_obj) === null || _this4$$store$getters2 === void 0 ? void 0 : _this4$$store$getters2.code) !== null && _this4$$store$getters !== void 0 ? _this4$$store$getters : null;
              _this4.top = 20;
              _this4.duree = null;
              _this4.aggregateur = "client";
              _this4.filtre = _objectSpread({}, _this4.baseFiltre);
              _this4.search = "";
              _this4.history = [];
              _this4.getData(true);
            case 8:
            case "end":
              return _context5.stop();
          }
        }, _callee5);
      }))();
    },
    sortBy: function sortBy(key) {
      var _this5 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
        var _this5$items2;
        var _this5$items;
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              if (_this5.sortKey == key) _this5.ascending = !_this5.ascending;
              _this5.sortKey = key;
              if (['nom_caf', 'agence', 'caf'].includes(_this5.sortKey)) {
                (_this5$items = _this5.items) === null || _this5$items === void 0 || _this5$items.sort(function (a, b) {
                  if (_this5.ascending) return a[_this5.sortKey].localeCompare(b[_this5.sortKey]);
                  return b[_this5.sortKey].localeCompare(a[_this5.sortKey]);
                });
              }
              (_this5$items2 = _this5.items) === null || _this5$items2 === void 0 || _this5$items2.sort(function (a, b) {
                if (_this5.ascending) return a[_this5.sortKey] - b[_this5.sortKey];
                return b[_this5.sortKey] - a[_this5.sortKey];
              });
            case 4:
            case "end":
              return _context6.stop();
          }
        }, _callee6);
      }))();
    },
    onSelect: function onSelect(row) {
      var _this6 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
        var _this6$__user__;
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
                aggregateur: _this6.aggregateur,
                agence: _this6.agence,
                filtre: _this6.filtre,
                top: _this6.top,
                duree: _this6.duree,
                items: _this6.items,
                total: _this6.total,
                search: _this6.search,
                sortKey: _this6.sortKey,
                ascending: _this6.ascending
              };
              _context7.t0 = _this6.aggregateur;
              _context7.next = _context7.t0 === "caf" ? 6 : _context7.t0 === "agence" ? 9 : _context7.t0 === "dossier" ? 11 : _context7.t0 === "client" ? 15 : 19;
              break;
            case 6:
              _this6.filtre = _objectSpread(_objectSpread({}, _this6.baseFiltre), {}, {
                id_caf: item.id_caf,
                role: (_this6$__user__ = _this6.__user__) === null || _this6$__user__ === void 0 ? void 0 : _this6$__user__.role_uuid
              });
              _this6.aggregateur = "client";
              return _context7.abrupt("break", 19);
            case 9:
              _this6.agence = item.code_agence;
              _this6.aggregateur = "caf";
            case 11:
              _context7.next = 13;
              return _this6.$router.push({
                name: "creation",
                params: {
                  templateId: row.cred_pub_key
                }
              });
            case 13:
              EventBus.$emit("view-only");
              return _context7.abrupt("return");
            case 15:
              _context7.next = 17;
              return _this6.$router.push({
                name: "creation",
                params: {
                  templateId: row.cred_pub_key
                }
              });
            case 17:
              EventBus.$emit("view-only");
              return _context7.abrupt("return");
            case 19:
              if (_this6.aggregateur !== history.aggregateur) {
                _this6.history.push(history);
              }
              _this6.getData(true);
            case 21:
            case "end":
              return _context7.stop();
          }
        }, _callee7);
      }))();
    },
    onSelectV2: function onSelectV2(row) {
      var _this7 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
        var _this7$__user__;
        var history;
        return _regeneratorRuntime().wrap(function _callee8$(_context8) {
          while (1) switch (_context8.prev = _context8.next) {
            case 0:
              if (row) {
                _context8.next = 2;
                break;
              }
              return _context8.abrupt("return");
            case 2:
              history = {
                aggregateur: _this7.aggregateur,
                agence: _this7.agence,
                filtre: _this7.filtre,
                top: _this7.top,
                duree: _this7.duree,
                items: _this7.items,
                total: _this7.total,
                search: _this7.search,
                sortKey: _this7.sortKey,
                ascending: _this7.ascending
              };
              _context8.t0 = _this7.aggregateur;
              _context8.next = _context8.t0 === "caf" ? 6 : _context8.t0 === "agence" ? 10 : _context8.t0 === "dossier" ? 12 : _context8.t0 === "client" ? 16 : 20;
              break;
            case 6:
              _this7.filtre = _objectSpread(_objectSpread({}, _this7.baseFiltre), {}, {
                id_caf: row.id_caf,
                role: (_this7$__user__ = _this7.__user__) === null || _this7$__user__ === void 0 ? void 0 : _this7$__user__.role_uuid
              });
              _this7.aggregateur = "client";
              _this7.getData();
              return _context8.abrupt("break", 20);
            case 10:
              _this7.agence = item.agence;
              _this7.aggregateur = "caf";
            case 12:
              _context8.next = 14;
              return _this7.$router.push({
                name: "creation",
                params: {
                  templateId: row.cred_pub_key
                }
              });
            case 14:
              EventBus.$emit("view-only");
              return _context8.abrupt("return");
            case 16:
              _context8.next = 18;
              return _this7.$router.push({
                name: "creation",
                params: {
                  templateId: row.cred_pub_key
                }
              });
            case 18:
              EventBus.$emit("view-only");
              return _context8.abrupt("return");
            case 20:
              if (_this7.aggregateur !== history.aggregateur) {
                _this7.history.push(history);
              }
              _this7.getData(true);
            case 22:
            case "end":
              return _context8.stop();
          }
        }, _callee8);
      }))();
    },
    goBack: function goBack() {
      var _this8 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
        var history;
        return _regeneratorRuntime().wrap(function _callee9$(_context9) {
          while (1) switch (_context9.prev = _context9.next) {
            case 0:
              history = _this8.history.pop();
              if (history) {
                _this8.aggregateur = history.aggregateur;
                _this8.agence = history.agence;
                _this8.filtre = history.filtre;
                _this8.top = history.top;
                _this8.duree = history.duree;
                _this8.items = history.items;
                _this8.total = history.total;
                _this8.search = history.search;
                _this8.sortKey = history.sortKey;
                _this8.ascending = history.ascending;
              }
            case 2:
            case "end":
              return _context9.stop();
          }
        }, _callee9);
      }))();
    },
    downloadTable: function downloadTable() {
      var _this9 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee0() {
        var data;
        return _regeneratorRuntime().wrap(function _callee0$(_context0) {
          while (1) switch (_context0.prev = _context0.next) {
            case 0:
              _context0.next = 2;
              return _this9.getData(true);
            case 2:
              data = {};
              data = {
                "headers": [],
                "items": _this9.items,
                "fileType": "excel",
                "title": "Mes clients à recouvrer"
              };
              EventBus.$emit("download-table-data", data);
            case 5:
            case "end":
              return _context0.stop();
          }
        }, _callee0);
      }))();
    },
    determineAggregateur: function determineAggregateur() {
      var _this0 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee1() {
        var _this0$__user__, _this0$__user__2, _this0$__user__3, _this0$__user__4, _this0$__user__7;
        var userAccess, _this0$__user__5, _this0$__user__6;
        return _regeneratorRuntime().wrap(function _callee1$(_context1) {
          while (1) switch (_context1.prev = _context1.next) {
            case 0:
              _context1.next = 2;
              return _this0.determineAccess(_this0.__user__);
            case 2:
              userAccess = _context1.sent;
              _this0.baseFiltre = {
                user_id: (_this0$__user__ = _this0.__user__) === null || _this0$__user__ === void 0 ? void 0 : _this0$__user__.user_id,
                role: (_this0$__user__2 = _this0.__user__) === null || _this0$__user__2 === void 0 ? void 0 : _this0$__user__2.role_uuid,
                team: (_this0$__user__3 = _this0.__user__) === null || _this0$__user__3 === void 0 || (_this0$__user__3 = _this0$__user__3.recovery_team_info) === null || _this0$__user__3 === void 0 ? void 0 : _this0$__user__3.teams,
                use_duree: true
              };
              // this.aggregateur = 'client';

              if (((_this0$__user__4 = _this0.__user__) === null || _this0$__user__4 === void 0 ? void 0 : _this0$__user__4.role_uuid) == 'r472oAxtaFJSlsh5') {
                // this.aggregateur = 'client'
                // this.aggr_option= ['client']
                _this0.baseFiltre = _objectSpread(_objectSpread({}, _this0.baseFiltre), {}, {
                  id_caf: (_this0$__user__5 = _this0.__user__) === null || _this0$__user__5 === void 0 ? void 0 : _this0$__user__5.user_id,
                  nom_caf: (_this0$__user__6 = _this0.__user__) === null || _this0$__user__6 === void 0 ? void 0 : _this0$__user__6.name
                });
              } else if (((_this0$__user__7 = _this0.__user__) === null || _this0$__user__7 === void 0 ? void 0 : _this0$__user__7.role_uuid) == 'yYnev325ob1vDkgq') {
                // CA
                // this.aggregateur = "caf"
                // this.aggr_option = [
                //   'client',
                //   'caf',
                //   // 'agence'
                //       ]
              }

              // if (["tmu3PEDVQsevYH2rhw4o", "aFwisnrdo42c4n9MHCG2", "K8C1dfx52rvA5ugR1mqt"].includes(this.__user__?.role_uuid)) {
              //   this.aggregateur = 'client';
              // }

              _this0.filtre = _objectSpread({}, _this0.baseFiltre);
            case 6:
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/RCDashboard/Statistiques/Recouvrement/TaskExecution.vue?vue&type=template&id=14d27c98&scoped=true":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/RCDashboard/Statistiques/Recouvrement/TaskExecution.vue?vue&type=template&id=14d27c98&scoped=true ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_vm.allowedRoles.includes(_vm.__user__.role_uuid) ? _c("div", {
    staticClass: "d-flex flex-wrap gap-2 justify-content-between align-items-center mt-2 mb-4"
  }, [_c("div", {
    staticClass: "d-flex rounded pb-0 mb-0"
  }, [_c("ul", {
    staticClass: "nav nav-tabs rounded border-none flex-nowrap d-flex",
    attrs: {
      id: "myTab",
      role: "tablist"
    }
  }, [_vm._l(_vm.stateOption, function (t, ind) {
    return [_c("li", {
      key: t,
      staticClass: "nav-item bg-white col rounded-0 fw-normal col m-0",
      staticStyle: {
        "min-width": "fit-content",
        border: "none"
      },
      attrs: {
        role: "presentation"
      }
    }, [_c("button", {
      staticClass: "nav-link text-dark rounded-0 w-100",
      "class": {
        "active-btn": _vm.doss_state == t,
        "grey-bg": _vm.doss_state != t,
        "rounded-start": ind == 0,
        "rounded-end": ind == _vm.stateOption.length - 1
      },
      staticStyle: {
        border: "#54415e !important"
      },
      attrs: {
        tabindex: "0",
        id: t + "-tab",
        "data-bs-toggle": "tab",
        "data-bs-target": "#" + t + "-tab-pane",
        type: "button",
        role: "tab",
        "aria-controls": t + "-tab-pane",
        "aria-selected": "true"
      },
      on: {
        click: function click($event) {
          return _vm.switchState(t);
        }
      }
    }, [_vm._v("\n              " + _vm._s(t.charAt(0).toUpperCase() + t.slice(1)) + "\n            ")])])];
  })], 2)])]) : _vm._e(), _vm._v(" "), _c("stat-table", {
    attrs: {
      loading: _vm.loading,
      title: "Mes clients à recouvrer",
      useToolbar: "",
      useSearch: "",
      useCounter: false,
      searchKey: ["nom_caf", "agence", "caf"],
      spacer: false,
      items: _vm.items,
      useDownload: false,
      useYearUpdater: false,
      searchMinWidth: "400px",
      searchValue: _vm.search,
      showEmpty: !_vm.error
    },
    scopedSlots: _vm._u([{
      key: "toolbar-buttons",
      fn: function fn() {
        return [_c("div", {
          staticClass: "w-100 d-flex gap-4 flex-column px-2"
        }, [_c("div", {
          staticClass: "d-flex gap-2 justify-content-between align-items-end"
        }, [_c("div", {
          staticClass: "d-flex gap-2 justify-content-between"
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
          staticClass: "d-flex gap-2 justify-content-between"
        }, [_vm.aggregateur != "dex" && _vm.history.length ? _c("div", {
          staticClass: "col-auto"
        }, [_c("button", {
          staticClass: "btn btn-sm btn-outline-reportex d-flex align-items-center",
          on: {
            click: _vm.goBack
          }
        }, [_c("i", {
          staticClass: "icofont-arrow-left"
        }), _vm._v(" Retour\n              ")])]) : _vm._e(), _vm._v(" "), _c("div", {
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
        var _vm$role, _vm$role2;
        return [_c("tr", [_c("th", {
          staticClass: "my-sticky text-start align-middle fw-normal",
          staticStyle: {
            "vertical-align": "middle",
            "text-align": "center",
            "min-width": "35px !important",
            "max-width": "fit-content !important"
          },
          attrs: {
            rowspan: "2"
          }
        }, [_vm._v("\n          #\n        ")]), _vm._v(" "), _vm.keyInFinalAggregation ? _c("th", {
          staticClass: "my-sticky2 text-start align-middle fw-normal",
          staticStyle: {
            "vertical-align": "middle",
            "text-align": "center",
            "max-width": "fit-content !important"
          },
          attrs: {
            rowspan: "2"
          }
        }, [_vm._v("\n          Matricule\n        ")]) : _vm._e(), _vm._v(" "), _c("th", {
          staticClass: "text-start align-middle fw-normal",
          "class": {
            "my-sticky2": !_vm.keyInFinalAggregation
          },
          staticStyle: {
            "vertical-align": "middle",
            "text-align": "center",
            "max-width": "fit-content !important"
          },
          attrs: {
            rowspan: "2"
          },
          on: {
            click: function click($event) {
              return _vm.sortBy("nom_caf");
            }
          }
        }, [_vm._v("\n          Nom\n          "), _vm.sortKey == "nom_caf" ? _c("span", {
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
        })])]), _vm._v(" "), _vm.keyInFinalAggregation ? _c("th", {
          staticClass: "text-start align-middle fw-normal",
          staticStyle: {
            "vertical-align": "middle",
            "text-align": "center",
            "max-width": "fit-content !important"
          },
          attrs: {
            rowspan: "2"
          },
          on: {
            click: function click($event) {
              return _vm.sortBy("caf");
            }
          }
        }, [_vm._v("\n          CAF\n          "), _vm.sortKey == "caf" ? _c("span", {
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
        })])]) : _vm._e(), _vm._v(" "), _c("th", {
          staticClass: "text-start align-middle fw-normal",
          attrs: {
            rowspan: "2"
          },
          on: {
            click: function click($event) {
              return _vm.sortBy("agence");
            }
          }
        }, [_vm._v("\n          Agence\n          "), _vm.sortKey == "agence" ? _c("span", {
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
        }, [_vm._v("\n          Encours\n          "), _vm.sortKey == "encours_total" ? _c("span", {
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
        }, [_vm._v("\n          Encours Impayé\n          "), _vm.sortKey == "encours_impaye" ? _c("span", {
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
        }, [_vm._v("\n          Somme Recouvrée\n          "), _vm.sortKey == "somme_recouvre" ? _c("span", {
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
        }, [_vm._v("\n          Nbre dossiers\n          "), _vm.sortKey == "nombre_dossiers" ? _c("span", {
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
        }, [_vm._v("Visites")]), _vm._v(" "), !((_vm$role = _vm.role) !== null && _vm$role !== void 0 && _vm$role.startsWith("DEX")) ? _c("th", {
          staticClass: "text-center fw-normal",
          staticStyle: {
            "min-width": "150px"
          },
          attrs: {
            colspan: "3"
          }
        }, [_vm._v("\n          Décharges\n        ")]) : _vm._e()]), _vm._v(" "), _c("tr", [_vm._l(2, function (i) {
          return [_c("th", {
            key: i + "s",
            staticClass: "fw-normal text-center"
          }, [_vm._v("Succès")]), _vm._v(" "), _c("th", {
            key: i + "e",
            staticClass: "fw-normal text-center"
          }, [_vm._v("Echec")]), _vm._v(" "), _c("th", {
            key: i + "t",
            staticClass: "fw-normal text-center"
          }, [_vm._v("Total")])];
        }), _vm._v(" "), !((_vm$role2 = _vm.role) !== null && _vm$role2 !== void 0 && _vm$role2.startsWith("DEX")) ? [_c("th", {
          staticClass: "fw-normal text-center"
        }, [_vm._v("Succès")]), _vm._v(" "), _c("th", {
          staticClass: "fw-normal text-center"
        }, [_vm._v("Echec")]), _vm._v(" "), _c("th", {
          staticClass: "fw-normal text-center"
        }, [_vm._v("Total")])] : _vm._e()], 2)];
      },
      proxy: true
    }, {
      key: "default",
      fn: function fn(_ref) {
        var items = _ref.items,
          currentPage = _ref.currentPage,
          perPage = _ref.perPage;
        return [items ? _vm._l(items, function (item, index) {
          var _vm$role3;
          return _c("tr", {
            key: item.nom_caf,
            staticClass: "cursor-pointer",
            attrs: {
              title: (item === null || item === void 0 ? void 0 : item.dureeimp) + "jrs de retard"
            },
            on: {
              click: function click($event) {
                return _vm.onSelectV2(item);
              }
            }
          }, [_c("td", {
            staticClass: "my-sticky text-uppercase"
          }, [_vm._v(" " + _vm._s(++index + (currentPage - 1) * perPage) + " ")]), _vm._v(" "), _vm.keyInFinalAggregation ? _c("td", {
            staticClass: "my-sticky2 text-uppercase"
          }, [_vm._v("\n            " + _vm._s(item.matricule_client) + "\n          ")]) : _vm._e(), _vm._v(" "), _c("td", {
            staticClass: "text-uppercase",
            "class": {
              "my-sticky2": !_vm.keyInFinalAggregation
            },
            staticStyle: {
              width: "250px !important"
            }
          }, [_vm._v("\n            " + _vm._s(item.nom_caf) + "\n          ")]), _vm._v(" "), _vm.keyInFinalAggregation ? _c("td", {
            staticClass: "text-uppercase",
            "class": {
              "my-sticky2": !_vm.keyInFinalAggregation
            },
            staticStyle: {
              width: "200px !important"
            }
          }, [_vm._v("\n            " + _vm._s(item.caf) + "\n          ")]) : _vm._e(), _vm._v(" "), _c("td", {
            staticClass: "text-start text-uppercase",
            staticStyle: {
              width: "200px !important"
            }
          }, [_vm._v(" " + _vm._s(item.agence) + " ")]), _vm._v(" "), _c("td", {
            staticClass: "mono text-end",
            staticStyle: {
              "font-family": "monospace !important",
              "font-size": "1.1em",
              "font-weight": "normal"
            }
          }, [_vm._v("\n            " + _vm._s(_vm._f("formatNumber")(item.encours_total)) + "\n          ")]), _vm._v(" "), _c("td", {
            staticClass: "mono text-end",
            staticStyle: {
              "font-family": "monospace !important",
              "font-size": "1.1em",
              "font-weight": "normal"
            }
          }, [_vm._v("\n            " + _vm._s(_vm._f("formatNumber")(item.encours_impaye)) + "\n          ")]), _vm._v(" "), _c("td", {
            staticClass: "mono text-end",
            staticStyle: {
              "font-family": "monospace !important",
              "font-size": "1.1em",
              "font-weight": "normal"
            }
          }, [_vm._v("\n            " + _vm._s(_vm._f("formatNumber")(item.somme_recouvre)) + "\n          ")]), _vm._v(" "), _c("td", {
            staticClass: "mono text-end"
          }, [_vm._v("\n            " + _vm._s(_vm._f("formatNumber")(item.nombre_dossiers)) + "\n            \n          ")]), _vm._v(" "), [_vm._l(["appel", "visite"], function (el) {
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
          }), _vm._v(" "), !((_vm$role3 = _vm.role) !== null && _vm$role3 !== void 0 && _vm$role3.startsWith("DEX")) ? [_c("td", {
            staticClass: "mono text-end"
          }, [_c("ZeroCross", {
            staticStyle: {
              "font-family": "monospace !important",
              "font-size": "1.1em",
              "font-weight": "normal"
            },
            attrs: {
              value: _vm._f("formatNumber")(item.decharge_execute_succes)
            }
          })], 1), _vm._v(" "), _c("td", {
            staticClass: "mono text-end"
          }, [_c("ZeroCross", {
            staticStyle: {
              "font-family": "monospace !important",
              "font-size": "1.1em",
              "font-weight": "normal"
            },
            attrs: {
              value: _vm._f("formatNumber")(item.decharge_execute_echec)
            }
          })], 1), _vm._v(" "), _c("td", {
            staticClass: "mono text-end"
          }, [_c("ZeroCross", {
            staticStyle: {
              "font-family": "monospace !important",
              "font-size": "1.1em",
              "font-weight": "normal"
            },
            attrs: {
              value: _vm._f("formatNumber")(item.decharge_execute_total)
            }
          })], 1)] : _vm._e()]], 2);
        }) : _vm._e()];
      }
    }, _vm.total ? {
      key: "total",
      fn: function fn() {
        var _vm$total, _vm$total2, _vm$total3, _vm$total4, _vm$role4;
        return [_c("tr", {
          staticClass: "table-light"
        }, [_c("th", {
          staticClass: "my-sticky ps-2"
        }), _vm._v(" "), _c("th", {
          staticClass: "my-sticky ps-2"
        }, [_vm._v("Total")]), _vm._v(" "), _c("th", {
          staticClass: "mono mono text-end",
          staticStyle: {
            "font-family": "monospace !important",
            "font-size": "1.1em",
            "font-weight": "normal"
          },
          attrs: {
            colspan: _vm.keyInFinalAggregation ? 4 : 2
          }
        }, [_vm._v(_vm._s(_vm._f("formatNumber")((_vm$total = _vm.total) === null || _vm$total === void 0 ? void 0 : _vm$total.encours_total)) + "\n        ")]), _vm._v(" "), _c("th", {
          staticClass: "mono mono text-end",
          staticStyle: {
            "font-family": "monospace !important",
            "font-size": "1.1em",
            "font-weight": "normal"
          },
          attrs: {
            colspan: 1
          }
        }, [_vm._v("\n          " + _vm._s(_vm._f("formatNumber")((_vm$total2 = _vm.total) === null || _vm$total2 === void 0 ? void 0 : _vm$total2.encours_impaye)) + "\n        ")]), _vm._v(" "), _c("th", {
          staticClass: "mono mono text-end",
          staticStyle: {
            "font-family": "monospace !important",
            "font-size": "1.1em",
            "font-weight": "normal"
          },
          attrs: {
            colspan: 1
          }
        }, [_vm._v("\n          " + _vm._s(_vm._f("formatNumber")((_vm$total3 = _vm.total) === null || _vm$total3 === void 0 ? void 0 : _vm$total3.somme_recouvre)) + "\n        ")]), _vm._v(" "), _c("th", {
          staticClass: "mono mono text-end",
          staticStyle: {
            "font-family": "monospace !important",
            "font-size": "1.1em",
            "font-weight": "normal"
          }
        }, [_vm._v("\n          " + _vm._s(_vm._f("formatNumber")((_vm$total4 = _vm.total) === null || _vm$total4 === void 0 ? void 0 : _vm$total4.nombre_dossiers)) + "\n        ")]), _vm._v(" "), _vm._l(["appel", "visite"], function (el) {
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
              value: _vm._f("formatNumber")(_vm.total[el + "_execute_succes"])
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
              value: _vm._f("formatNumber")(_vm.total[el + "_execute_echec"])
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
              value: _vm._f("formatNumber")(_vm.total[el + "_execute_total"])
            }
          })], 1)];
        }), _vm._v(" "), !((_vm$role4 = _vm.role) !== null && _vm$role4 !== void 0 && _vm$role4.startsWith("DEX")) ? [_c("td", {
          staticClass: "mono text-end"
        }, [_c("ZeroCross", {
          staticStyle: {
            "font-family": "monospace !important",
            "font-size": "1.1em",
            "font-weight": "normal"
          },
          attrs: {
            value: _vm._f("formatNumber")(_vm.total.decharge_execute_succes)
          }
        })], 1), _vm._v(" "), _c("td", {
          staticClass: "mono text-end"
        }, [_c("ZeroCross", {
          staticStyle: {
            "font-family": "monospace !important",
            "font-size": "1.1em",
            "font-weight": "normal"
          },
          attrs: {
            value: _vm._f("formatNumber")(_vm.total.decharge_execute_echec)
          }
        })], 1), _vm._v(" "), _c("td", {
          staticClass: "mono text-end"
        }, [_c("ZeroCross", {
          staticStyle: {
            "font-family": "monospace !important",
            "font-size": "1.1em",
            "font-weight": "normal"
          },
          attrs: {
            value: _vm._f("formatNumber")(_vm.total.decharge_execute_total)
          }
        })], 1)] : _vm._e()], 2)];
      },
      proxy: true
    } : null], null, true)
  })], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/RCDashboard/Statistiques/Recouvrement/TaskExecution.vue?vue&type=style&index=0&id=14d27c98&scoped=true&lang=css":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/RCDashboard/Statistiques/Recouvrement/TaskExecution.vue?vue&type=style&index=0&id=14d27c98&scoped=true&lang=css ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.mono[data-v-14d27c98] {\r\n  font-family: monospace !important;\n}\n.fs-small[data-v-14d27c98] {\r\n  font-size: 0.8rem;\n}\n.active-btn[data-v-14d27c98] {\r\n  background: #54415e !important;\r\n  color: white !important;\r\n  /* font-weight: bold !important; */\n}\n.grey-bg[data-v-14d27c98] {\r\n  background: rgba(230, 229, 229, 0.603);\n}\n#myTab li[class=\"nav-item\"] button[data-v-14d27c98] {\r\n  border-radius: unset !important;\n}\n#myTab li[data-v-14d27c98]:hover {\r\n  background: white;\n}\n#myTab li[data-v-14d27c98],\r\n#myTab2 li[data-v-14d27c98] {\r\n  font-size: 14px;\n}\n#myTab li[data-v-14d27c98] {\r\n  background: #5c6264;\r\n  margin-left: 1px;\n}\n#myTab2 li[class=\"nav-item\"] button[data-v-14d27c98]:focus {\r\n  border-bottom: 5px solid green;\n}\r\n\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/RCDashboard/Statistiques/Recouvrement/TaskExecution.vue?vue&type=style&index=0&id=14d27c98&scoped=true&lang=css":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/RCDashboard/Statistiques/Recouvrement/TaskExecution.vue?vue&type=style&index=0&id=14d27c98&scoped=true&lang=css ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TaskExecution_vue_vue_type_style_index_0_id_14d27c98_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TaskExecution.vue?vue&type=style&index=0&id=14d27c98&scoped=true&lang=css */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/RCDashboard/Statistiques/Recouvrement/TaskExecution.vue?vue&type=style&index=0&id=14d27c98&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TaskExecution_vue_vue_type_style_index_0_id_14d27c98_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TaskExecution_vue_vue_type_style_index_0_id_14d27c98_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/RCDashboard/Statistiques/Recouvrement/TaskExecution.vue":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/RCDashboard/Statistiques/Recouvrement/TaskExecution.vue ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TaskExecution_vue_vue_type_template_id_14d27c98_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TaskExecution.vue?vue&type=template&id=14d27c98&scoped=true */ "./resources/js/components/RCDashboard/Statistiques/Recouvrement/TaskExecution.vue?vue&type=template&id=14d27c98&scoped=true");
/* harmony import */ var _TaskExecution_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TaskExecution.vue?vue&type=script&lang=js */ "./resources/js/components/RCDashboard/Statistiques/Recouvrement/TaskExecution.vue?vue&type=script&lang=js");
/* harmony import */ var _TaskExecution_vue_vue_type_style_index_0_id_14d27c98_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TaskExecution.vue?vue&type=style&index=0&id=14d27c98&scoped=true&lang=css */ "./resources/js/components/RCDashboard/Statistiques/Recouvrement/TaskExecution.vue?vue&type=style&index=0&id=14d27c98&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _TaskExecution_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _TaskExecution_vue_vue_type_template_id_14d27c98_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _TaskExecution_vue_vue_type_template_id_14d27c98_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "14d27c98",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/RCDashboard/Statistiques/Recouvrement/TaskExecution.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/RCDashboard/Statistiques/Recouvrement/TaskExecution.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/components/RCDashboard/Statistiques/Recouvrement/TaskExecution.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TaskExecution_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TaskExecution.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/RCDashboard/Statistiques/Recouvrement/TaskExecution.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TaskExecution_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/RCDashboard/Statistiques/Recouvrement/TaskExecution.vue?vue&type=style&index=0&id=14d27c98&scoped=true&lang=css":
/*!*************************************************************************************************************************************************!*\
  !*** ./resources/js/components/RCDashboard/Statistiques/Recouvrement/TaskExecution.vue?vue&type=style&index=0&id=14d27c98&scoped=true&lang=css ***!
  \*************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TaskExecution_vue_vue_type_style_index_0_id_14d27c98_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TaskExecution.vue?vue&type=style&index=0&id=14d27c98&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/RCDashboard/Statistiques/Recouvrement/TaskExecution.vue?vue&type=style&index=0&id=14d27c98&scoped=true&lang=css");


/***/ }),

/***/ "./resources/js/components/RCDashboard/Statistiques/Recouvrement/TaskExecution.vue?vue&type=template&id=14d27c98&scoped=true":
/*!***********************************************************************************************************************************!*\
  !*** ./resources/js/components/RCDashboard/Statistiques/Recouvrement/TaskExecution.vue?vue&type=template&id=14d27c98&scoped=true ***!
  \***********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TaskExecution_vue_vue_type_template_id_14d27c98_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TaskExecution_vue_vue_type_template_id_14d27c98_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TaskExecution_vue_vue_type_template_id_14d27c98_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TaskExecution.vue?vue&type=template&id=14d27c98&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/RCDashboard/Statistiques/Recouvrement/TaskExecution.vue?vue&type=template&id=14d27c98&scoped=true");


/***/ })

}]);