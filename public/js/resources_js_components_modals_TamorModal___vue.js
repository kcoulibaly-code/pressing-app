"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_modals_TamorModal___vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/modals/TamorModal__.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/modals/TamorModal__.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_recouvrement_service_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/recouvrement.service.js */ "./resources/js/services/recouvrement.service.js");
/* harmony import */ var _services_credit_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/credit.service */ "./resources/js/services/credit.service.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./resources/js/services/auth.service.js");
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
  name: "TamorModal",
  data: function data() {
    return {
      CONFIG: {
        ECHEANCE_NOTIFY_PERIOD_IN_DAYS: 2,
        //
        ECHEANCE_WARNING_PERIOD_IN_DAYS: 5,
        WARNING: 'WARNING',
        NOTIFY: 'NOTIFY'
      },
      authcheck: null,
      authcheckUsr: null,
      authcheckStatus: null,
      cred_pub_key: "202312-2015-40132023-12-20-3ba9743f-0e30-443c-b1f0-423b371d8310",
      file: null,
      data: {},
      dataRows: [{
        numero_echeance: 1,
        numero_ral: "RAL001",
        date_echeance: "2024-01-23",
        montant_int_cap: 1500.25,
        montant_ech_int: 200.5,
        montant_ech_cap: 1300.75,
        tva: 75.3,
        montant_echeance: 1676.8,
        cap_rest_du: 8000.0
      }, {
        numero_echeance: 2,
        numero_ral: "RAL002",
        date_echeance: "2024-01-24",
        montant_int_cap: 1200.75,
        montant_ech_int: 180.2,
        montant_ech_cap: 1020.55,
        tva: 55.8,
        montant_echeance: 1156.35,
        cap_rest_du: 7200.25
      }, {
        numero_echeance: 3,
        numero_ral: "RAL003",
        date_echeance: "2024-01-28",
        montant_int_cap: 900.5,
        montant_ech_int: 150.75,
        montant_ech_cap: 749.75,
        tva: 45.2,
        montant_echeance: 795.95,
        cap_rest_du: 6450.5
      }, {
        numero_echeance: 4,
        numero_ral: "RAL004",
        date_echeance: "2024-05-01",
        montant_int_cap: 1100.25,
        montant_ech_int: 220.3,
        montant_ech_cap: 880.95,
        tva: 65.4,
        montant_echeance: 946.35,
        cap_rest_du: 5600.25
      }, {
        numero_echeance: 5,
        numero_ral: "RAL005",
        date_echeance: "2024-01-25",
        montant_int_cap: 1300.75,
        montant_ech_int: 190.5,
        montant_ech_cap: 1110.25,
        tva: 80.15,
        montant_echeance: 1290.4,
        cap_rest_du: 4490.0
      }, {
        numero_echeance: 6,
        numero_ral: "RAL006",
        date_echeance: "2024-01-26",
        montant_int_cap: 950.2,
        montant_ech_int: 170.25,
        montant_ech_cap: 780.95,
        tva: 50.3,
        montant_echeance: 831.25,
        cap_rest_du: 3739.75
      }, {
        numero_echeance: 7,
        numero_ral: "RAL007",
        date_echeance: "2024-01-23",
        montant_int_cap: 800.5,
        montant_ech_int: 130.75,
        montant_ech_cap: 669.75,
        tva: 40.2,
        montant_echeance: 710.95,
        cap_rest_du: 2969.0
      }, {
        numero_echeance: 8,
        numero_ral: "RAL008",
        date_echeance: "2024-09-01",
        montant_int_cap: 1000.25,
        montant_ech_int: 200.3,
        montant_ech_cap: 800.95,
        tva: 60.4,
        montant_echeance: 901.35,
        cap_rest_du: 2168.75
      }, {
        numero_echeance: 9,
        numero_ral: "RAL009",
        date_echeance: "2024-10-01",
        montant_int_cap: 1150.75,
        montant_ech_int: 180.5,
        montant_ech_cap: 970.25,
        tva: 70.15,
        montant_echeance: 1100.4,
        cap_rest_du: 1198.5
      }, {
        numero_echeance: 10,
        numero_ral: "RAL010",
        date_echeance: "2024-11-01",
        montant_int_cap: 850.2,
        montant_ech_int: 160.25,
        montant_ech_cap: 689.95,
        tva: 45.3,
        montant_echeance: 735.25,
        cap_rest_du: 508.5
      }],
      dossier_credit: null,
      total: {}
    };
  },
  mounted: function mounted() {
    var _this = this;
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _this.setAuthInfo();
          case 2:
            _context.next = 4;
            return _this.fetchDossierCredit();
          case 4:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }))();
  },
  methods: {
    setAuthInfo: function setAuthInfo() {
      var _this2 = this;
      _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["default"].loadUserData().then(function (res) {
        _this2.authcheck = true;
        _this2.authcheckUsr = res.data;
        _this2.authcheckStatus = res.status;
        if (_this2.authcheckStatus === 401) {
          console.log("UN_AUTHORIZE");
          // window.location.href = "/login";
        }
        _this2.fetchDossierCredit();
      })["catch"](function (err) {
        // this.loadWithError(err);
        window.location.href = "/login";
      });
    },
    fetchDossierCredit: function fetchDossierCredit() {
      var _this3 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              axios.post(_this3.ebapisHost + "creditbuilder/api/v1/compile/", {
                user: _this3.authcheckUsr,
                cred_pub_key: _this3.cred_pub_key
              }).then(function (response) {
                var fetchedData = response.data;
                if (fetchedData["is_success"] === true) {
                  _this3.dossier_credit = fetchedData["dossier_credit"];
                  _this3.dossier_credit = _objectSpread(_objectSpread({}, _this3.dossier_credit), _this3.$store.state.creation.current_dossier);
                }
              })["catch"](function (error) {
                console.log(error);
              }.bind(_this3));
            case 1:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }))();
    },
    hasAction: function hasAction(date) {
      return this.echeanceAction(date) != null;
    },
    textColor: function textColor(date) {
      if (this.echeanceAction(date) == this.CONFIG.NOTIFY) {
        return 'danger';
      }
      if (this.echeanceAction(date) == this.CONFIG.WARNING) {
        return 'warning';
      }
      return null;
    },
    echeanceAction: function echeanceAction(date) {
      var daysDifference = this.getRemaingDays(date);
      // 
      if (daysDifference <= this.CONFIG.ECHEANCE_NOTIFY_PERIOD_IN_DAYS) {
        return this.CONFIG.NOTIFY;
      }
      if (daysDifference <= this.CONFIG.ECHEANCE_WARNING_PERIOD_IN_DAYS) {
        return this.CONFIG.WARNING;
      }
      return null;
    },
    getRemaingDays: function getRemaingDays(date) {
      // const date = "2024-02-01";
      var dateEcheance = new Date(date);
      var currentDate = new Date();
      var timeDifference = dateEcheance - currentDate;
      var daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      return daysDifference;
    },
    onFileInputChanged: function onFileInputChanged(event) {
      var _event$target$files$, _event$target;
      this.$console.log("onFileInputChanged", event);
      this.file = (_event$target$files$ = event === null || event === void 0 || (_event$target = event.target) === null || _event$target === void 0 ? void 0 : _event$target.files[0]) !== null && _event$target$files$ !== void 0 ? _event$target$files$ : null;
      this.$console.log("onFileInputChanged ===", this.file);
    },
    notifyClient: function notifyClient(date) {
      var _this4 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var days_remaining, severity, res;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              days_remaining = _this4.getRemaingDays(date);
              severity = _this4.echeanceAction(date); // 
              _context3.prev = 2;
              _context3.next = 5;
              return _services_recouvrement_service_js__WEBPACK_IMPORTED_MODULE_0__["default"].notifyClient({
                severity: severity,
                days_remaining: days_remaining
              });
            case 5:
              res = _context3.sent;
              _context3.next = 12;
              break;
            case 8:
              _context3.prev = 8;
              _context3.t0 = _context3["catch"](2);
              _this4.$toasted.show("Une erreur s'est produite");
              console.log("xx error", _context3.t0);
            case 12:
            case "end":
              return _context3.stop();
          }
        }, _callee3, null, [[2, 8]]);
      }))();
    },
    uploadTamor: function uploadTamor() {
      var _this5 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        var _this5$file$name;
        var data, headers;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              data = new FormData(); //
              //
              //
              data.append("file_url", _this5.file);
              data.append("file_name", (_this5$file$name = _this5.file.name) === null || _this5$file$name === void 0 ? void 0 : _this5$file$name.replace(/\s/g, "_"));
              data.append("file_ext", _this5.file.ext);
              headers = {
                "Content-Type": "multipart/form-data"
              };
              axios.post("http://127.0.0.1:8083/" + "api/upload-file-tamor", data).then(function (res) {
                var data = res;
                console.log("response upload tamor", data);

                // this.uploadLoading[index] = false
              })["catch"](function (err) {
                console.error(err);
              });
            case 6:
            case "end":
              return _context4.stop();
          }
        }, _callee4);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/modals/TamorModal__.vue?vue&type=template&id=200b0cf8":
/*!************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/modals/TamorModal__.vue?vue&type=template&id=200b0cf8 ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm$data$agency, _vm$data$client, _vm$data$montant_capi, _vm$data$secteur_acti, _vm$data$repartition_, _vm$data$repartition_2, _vm$data$date_mise_en, _vm$data$premiere_ech, _vm$data$derniere_ech, _vm$data$epargne_obli, _vm$total$montant_ech, _vm$total, _vm$total$montant_ech2, _vm$total2, _vm$total$montant_ech3, _vm$total3;
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "container mx-2 bg-white border p-3"
  }, [_vm._m(0), _vm._v(" "), _c("div", {
    staticClass: "row mb-3"
  }, [_c("div", {
    staticClass: "col-12 col-md-6"
  }, [_c("div", {
    staticClass: "d-flex justify-content-between"
  }, [_c("span", [_vm._v("Agency")]), _c("span", [_vm._v(_vm._s((_vm$data$agency = _vm.data.agency) !== null && _vm$data$agency !== void 0 ? _vm$data$agency : "--"))])]), _vm._v(" "), _c("div", {
    staticClass: "d-flex justify-content-between"
  }, [_c("span", [_vm._v("Client")]), _c("span", [_vm._v(_vm._s((_vm$data$client = _vm.data.client) !== null && _vm$data$client !== void 0 ? _vm$data$client : "--"))])]), _vm._v(" "), _c("div", {
    staticClass: "d-flex justify-content-between"
  }, [_c("span", [_vm._v("Montant capital du prêt")]), _c("span", [_vm._v(_vm._s((_vm$data$montant_capi = _vm.data.montant_capital_pret) !== null && _vm$data$montant_capi !== void 0 ? _vm$data$montant_capi : "--"))])]), _vm._v(" "), _c("div", {
    staticClass: "d-flex justify-content-between"
  }, [_c("span", [_vm._v("Secteur d'activité")]), _c("span", [_vm._v(_vm._s((_vm$data$secteur_acti = _vm.data.secteur_activite) !== null && _vm$data$secteur_acti !== void 0 ? _vm$data$secteur_acti : "--"))])]), _vm._v(" "), _c("div", {
    staticClass: "d-flex justify-content-between"
  }, [_c("span", [_vm._v("Répartition Objet")]), _c("span", [_vm._v(_vm._s((_vm$data$repartition_ = _vm.data.repartition_objet) !== null && _vm$data$repartition_ !== void 0 ? _vm$data$repartition_ : "--"))])])]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-md-6"
  }, [_c("div", {
    staticClass: "d-flex justify-content-between"
  }, [_c("span", [_vm._v("Répartition Programme")]), _c("span", [_vm._v(_vm._s((_vm$data$repartition_2 = _vm.data.repartition_programme) !== null && _vm$data$repartition_2 !== void 0 ? _vm$data$repartition_2 : "--"))])]), _vm._v(" "), _c("div", {
    staticClass: "d-flex justify-content-between"
  }, [_c("span", [_vm._v("Date de mise en place")]), _c("span", [_vm._v(_vm._s((_vm$data$date_mise_en = _vm.data.date_mise_en_place) !== null && _vm$data$date_mise_en !== void 0 ? _vm$data$date_mise_en : "--"))])]), _vm._v(" "), _c("div", {
    staticClass: "d-flex justify-content-between"
  }, [_c("span", [_vm._v("1ère Echéance")]), _c("span", [_vm._v(_vm._s((_vm$data$premiere_ech = _vm.data.premiere_echeance) !== null && _vm$data$premiere_ech !== void 0 ? _vm$data$premiere_ech : "--"))])]), _vm._v(" "), _c("div", {
    staticClass: "d-flex justify-content-between"
  }, [_c("span", [_vm._v("Dernière Echéance")]), _c("span", [_vm._v(_vm._s((_vm$data$derniere_ech = _vm.data.derniere_echeance) !== null && _vm$data$derniere_ech !== void 0 ? _vm$data$derniere_ech : "--"))])]), _vm._v(" "), _c("div", {
    staticClass: "d-flex justify-content-between"
  }, [_c("span", [_vm._v("Epargne obligatoire")]), _c("span", [_vm._v(_vm._s((_vm$data$epargne_obli = _vm.data.epargne_obligatoire) !== null && _vm$data$epargne_obli !== void 0 ? _vm$data$epargne_obli : "--"))])])])]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col"
  }, [_c("table", {
    staticClass: "table table-bordered table-striped table-responsive"
  }, [_vm._m(1), _vm._v(" "), _c("tbody", {}, _vm._l(_vm.dataRows, function (row, i) {
    var _row$numero_echeance, _row$numero_ral, _row$date_echeance, _row$montant_int_cap, _row$montant_ech_int, _row$montant_ech_cap, _row$tva, _row$montant_echeance, _row$cap_rest_du;
    return _c("tr", {
      key: i
    }, [_c("td", [_vm._v(_vm._s((_row$numero_echeance = row === null || row === void 0 ? void 0 : row.numero_echeance) !== null && _row$numero_echeance !== void 0 ? _row$numero_echeance : "--"))]), _vm._v(" "), _c("td", [_vm._v(_vm._s((_row$numero_ral = row === null || row === void 0 ? void 0 : row.numero_ral) !== null && _row$numero_ral !== void 0 ? _row$numero_ral : "--"))]), _vm._v(" "), _c("td", [_c("div", {
      "class": [_vm.textColor(row === null || row === void 0 ? void 0 : row.date_echeance) ? "text-" + _vm.textColor(row === null || row === void 0 ? void 0 : row.date_echeance) : ""]
    }, [_vm._v("\n                      " + _vm._s((_row$date_echeance = row === null || row === void 0 ? void 0 : row.date_echeance) !== null && _row$date_echeance !== void 0 ? _row$date_echeance : "--") + "\n                  ")])]), _vm._v(" "), _c("td", {
      staticClass: "text-right"
    }, [_vm._v(_vm._s(_vm._f("formatNumber")((_row$montant_int_cap = row === null || row === void 0 ? void 0 : row.montant_int_cap) !== null && _row$montant_int_cap !== void 0 ? _row$montant_int_cap : "--")))]), _vm._v(" "), _c("td", {
      staticClass: "text-right"
    }, [_vm._v(_vm._s(_vm._f("formatNumber")((_row$montant_ech_int = row === null || row === void 0 ? void 0 : row.montant_ech_int) !== null && _row$montant_ech_int !== void 0 ? _row$montant_ech_int : "--")))]), _vm._v(" "), _c("td", {
      staticClass: "text-right"
    }, [_vm._v(_vm._s(_vm._f("formatNumber")((_row$montant_ech_cap = row === null || row === void 0 ? void 0 : row.montant_ech_cap) !== null && _row$montant_ech_cap !== void 0 ? _row$montant_ech_cap : "--")))]), _vm._v(" "), _c("td", {
      staticClass: "text-right"
    }, [_vm._v(_vm._s(_vm._f("formatNumber")((_row$tva = row === null || row === void 0 ? void 0 : row.tva) !== null && _row$tva !== void 0 ? _row$tva : "--")))]), _vm._v(" "), _c("td", {
      staticClass: "text-right"
    }, [_vm._v(_vm._s(_vm._f("formatNumber")((_row$montant_echeance = row === null || row === void 0 ? void 0 : row.montant_echeance) !== null && _row$montant_echeance !== void 0 ? _row$montant_echeance : "--")))]), _vm._v(" "), _c("td", {
      staticClass: "text-right"
    }, [_vm._v(_vm._s(_vm._f("formatNumber")((_row$cap_rest_du = row === null || row === void 0 ? void 0 : row.cap_rest_du) !== null && _row$cap_rest_du !== void 0 ? _row$cap_rest_du : "--")))]), _vm._v(" "), _c("td", [_c("div", [_vm.hasAction(row === null || row === void 0 ? void 0 : row.date_echeance) ? _c("a", {
      staticClass: "btn btn-sm",
      "class": [_vm.textColor(row === null || row === void 0 ? void 0 : row.date_echeance) ? "btn-" + _vm.textColor(row === null || row === void 0 ? void 0 : row.date_echeance) : ""],
      on: {
        click: function click($event) {
          return _vm.notifyClient(row === null || row === void 0 ? void 0 : row.date_echeance);
        }
      }
    }, [_vm._v("\n                      Notifier le client\n                  ")]) : _vm._e()])])]);
  }), 0), _vm._v(" "), _c("tfoot", [_c("tr", [_c("th", {
    attrs: {
      colspan: "5"
    }
  }, [_vm._v("Total")]), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$total$montant_ech = (_vm$total = _vm.total) === null || _vm$total === void 0 ? void 0 : _vm$total.montant_ech_int) !== null && _vm$total$montant_ech !== void 0 ? _vm$total$montant_ech : "--"))]), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$total$montant_ech2 = (_vm$total2 = _vm.total) === null || _vm$total2 === void 0 ? void 0 : _vm$total2.montant_ech_cap) !== null && _vm$total$montant_ech2 !== void 0 ? _vm$total$montant_ech2 : "--"))]), _vm._v(" "), _c("td"), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$total$montant_ech3 = (_vm$total3 = _vm.total) === null || _vm$total3 === void 0 ? void 0 : _vm$total3.montant_echeance) !== null && _vm$total$montant_ech3 !== void 0 ? _vm$total$montant_ech3 : "--"))]), _vm._v(" "), _c("td")])])])])]), _vm._v(" "), _c("form", {
    attrs: {
      method: "post",
      enctype: "multipart/form-data"
    },
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.uploadTamor();
      }
    }
  }, [_c("input", {
    attrs: {
      type: "file",
      name: "file",
      accepts: ".xlsx",
      required: ""
    },
    on: {
      change: _vm.onFileInputChanged
    }
  }), _vm._v(" "), _c("button", {
    attrs: {
      type: "submit"
    }
  }, [_vm._v("Import")])])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "row mb-3"
  }, [_c("div", {
    staticClass: "col"
  }, [_c("h5", {
    staticClass: "text-center"
  }, [_vm._v("Simulation du tableau d'amortissement")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("th", [_vm._v("N° ech")]), _vm._v(" "), _c("th", [_vm._v("N° Ral")]), _vm._v(" "), _c("th", [_vm._v("Date Echéance")]), _vm._v(" "), _c("th", [_vm._v("Montant Int Cap")]), _vm._v(" "), _c("th", [_vm._v("Montant Ech Int")]), _vm._v(" "), _c("th", [_vm._v("Montant Ech Cap")]), _vm._v(" "), _c("th", [_vm._v("TVA")]), _vm._v(" "), _c("th", [_vm._v("Montant Echéance")]), _vm._v(" "), _c("th", [_vm._v("Cap Rest Du")]), _vm._v(" "), _c("th", [_vm._v("Action")])])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/components/modals/TamorModal__.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/modals/TamorModal__.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TamorModal_vue_vue_type_template_id_200b0cf8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TamorModal__.vue?vue&type=template&id=200b0cf8 */ "./resources/js/components/modals/TamorModal__.vue?vue&type=template&id=200b0cf8");
/* harmony import */ var _TamorModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TamorModal__.vue?vue&type=script&lang=js */ "./resources/js/components/modals/TamorModal__.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TamorModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _TamorModal_vue_vue_type_template_id_200b0cf8__WEBPACK_IMPORTED_MODULE_0__.render,
  _TamorModal_vue_vue_type_template_id_200b0cf8__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/modals/TamorModal__.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/modals/TamorModal__.vue?vue&type=script&lang=js":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/modals/TamorModal__.vue?vue&type=script&lang=js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TamorModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TamorModal__.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/modals/TamorModal__.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TamorModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/modals/TamorModal__.vue?vue&type=template&id=200b0cf8":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/modals/TamorModal__.vue?vue&type=template&id=200b0cf8 ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TamorModal_vue_vue_type_template_id_200b0cf8__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TamorModal_vue_vue_type_template_id_200b0cf8__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TamorModal_vue_vue_type_template_id_200b0cf8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TamorModal__.vue?vue&type=template&id=200b0cf8 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/modals/TamorModal__.vue?vue&type=template&id=200b0cf8");


/***/ })

}]);