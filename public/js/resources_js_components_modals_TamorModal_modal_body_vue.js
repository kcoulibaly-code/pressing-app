"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_modals_TamorModal_modal_body_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/modals/TamorModal_modal_body.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/modals/TamorModal_modal_body.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_recouvrement_service_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/recouvrement.service.js */ "./resources/js/services/recouvrement.service.js");
/* harmony import */ var _services_credit_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/credit.service */ "./resources/js/services/credit.service.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./resources/js/services/auth.service.js");
/* harmony import */ var _services_ebapis_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/ebapis.service */ "./resources/js/services/ebapis.service.js");
/* harmony import */ var _services_connects_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/connects.service */ "./resources/js/services/connects.service.js");
/* harmony import */ var _services_proxy_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/proxy.service */ "./resources/js/services/proxy.service.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return r; }; var t, r = {}, e = Object.prototype, n = e.hasOwnProperty, o = "function" == typeof Symbol ? Symbol : {}, i = o.iterator || "@@iterator", a = o.asyncIterator || "@@asyncIterator", u = o.toStringTag || "@@toStringTag"; function c(t, r, e, n) { Object.defineProperty(t, r, { value: e, enumerable: !n, configurable: !n, writable: !n }); } try { c({}, ""); } catch (t) { c = function c(t, r, e) { return t[r] = e; }; } function h(r, e, n, o) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype); return c(a, "_invoke", function (r, e, n) { var o = 1; return function (i, a) { if (3 === o) throw Error("Generator is already running"); if (4 === o) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var u = n.delegate; if (u) { var c = d(u, n); if (c) { if (c === f) continue; return c; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (1 === o) throw o = 4, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = 3; var h = s(r, e, n); if ("normal" === h.type) { if (o = n.done ? 4 : 2, h.arg === f) continue; return { value: h.arg, done: n.done }; } "throw" === h.type && (o = 4, n.method = "throw", n.arg = h.arg); } }; }(r, n, new Context(o || [])), !0), a; } function s(t, r, e) { try { return { type: "normal", arg: t.call(r, e) }; } catch (t) { return { type: "throw", arg: t }; } } r.wrap = h; var f = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var l = {}; c(l, i, function () { return this; }); var p = Object.getPrototypeOf, y = p && p(p(x([]))); y && y !== e && n.call(y, i) && (l = y); var v = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(l); function g(t) { ["next", "throw", "return"].forEach(function (r) { c(t, r, function (t) { return this._invoke(r, t); }); }); } function AsyncIterator(t, r) { function e(o, i, a, u) { var c = s(t[o], t, i); if ("throw" !== c.type) { var h = c.arg, f = h.value; return f && "object" == _typeof(f) && n.call(f, "__await") ? r.resolve(f.__await).then(function (t) { e("next", t, a, u); }, function (t) { e("throw", t, a, u); }) : r.resolve(f).then(function (t) { h.value = t, a(h); }, function (t) { return e("throw", t, a, u); }); } u(c.arg); } var o; c(this, "_invoke", function (t, n) { function i() { return new r(function (r, o) { e(t, n, r, o); }); } return o = o ? o.then(i, i) : i(); }, !0); } function d(r, e) { var n = e.method, o = r.i[n]; if (o === t) return e.delegate = null, "throw" === n && r.i["return"] && (e.method = "return", e.arg = t, d(r, e), "throw" === e.method) || "return" !== n && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + n + "' method")), f; var i = s(o, r.i, e.arg); if ("throw" === i.type) return e.method = "throw", e.arg = i.arg, e.delegate = null, f; var a = i.arg; return a ? a.done ? (e[r.r] = a.value, e.next = r.n, "return" !== e.method && (e.method = "next", e.arg = t), e.delegate = null, f) : a : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f); } function w(t) { this.tryEntries.push(t); } function m(r) { var e = r[4] || {}; e.type = "normal", e.arg = t, r[4] = e; } function Context(t) { this.tryEntries = [[-1]], t.forEach(w, this), this.reset(!0); } function x(r) { if (null != r) { var e = r[i]; if (e) return e.call(r); if ("function" == typeof r.next) return r; if (!isNaN(r.length)) { var o = -1, a = function e() { for (; ++o < r.length;) if (n.call(r, o)) return e.value = r[o], e.done = !1, e; return e.value = t, e.done = !0, e; }; return a.next = a; } } throw new TypeError(_typeof(r) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, c(v, "constructor", GeneratorFunctionPrototype), c(GeneratorFunctionPrototype, "constructor", GeneratorFunction), c(GeneratorFunctionPrototype, u, GeneratorFunction.displayName = "GeneratorFunction"), r.isGeneratorFunction = function (t) { var r = "function" == typeof t && t.constructor; return !!r && (r === GeneratorFunction || "GeneratorFunction" === (r.displayName || r.name)); }, r.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, c(t, u, "GeneratorFunction")), t.prototype = Object.create(v), t; }, r.awrap = function (t) { return { __await: t }; }, g(AsyncIterator.prototype), c(AsyncIterator.prototype, a, function () { return this; }), r.AsyncIterator = AsyncIterator, r.async = function (t, e, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(h(t, e, n, o), i); return r.isGeneratorFunction(e) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, g(v), c(v, u, "Generator"), c(v, i, function () { return this; }), c(v, "toString", function () { return "[object Generator]"; }), r.keys = function (t) { var r = Object(t), e = []; for (var n in r) e.unshift(n); return function t() { for (; e.length;) if ((n = e.pop()) in r) return t.value = n, t.done = !1, t; return t.done = !0, t; }; }, r.values = x, Context.prototype = { constructor: Context, reset: function reset(r) { if (this.prev = this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(m), !r) for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0][4]; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(r) { if (this.done) throw r; var e = this; function n(t) { a.type = "throw", a.arg = r, e.next = t; } for (var o = e.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i[4], u = this.prev, c = i[1], h = i[2]; if (-1 === i[0]) return n("end"), !1; if (!c && !h) throw Error("try statement without catch or finally"); if (null != i[0] && i[0] <= u) { if (u < c) return this.method = "next", this.arg = t, n(c), !0; if (u < h) return n(h), !1; } } }, abrupt: function abrupt(t, r) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var n = this.tryEntries[e]; if (n[0] > -1 && n[0] <= this.prev && this.prev < n[2]) { var o = n; break; } } o && ("break" === t || "continue" === t) && o[0] <= r && r <= o[2] && (o = null); var i = o ? o[4] : {}; return i.type = t, i.arg = r, o ? (this.method = "next", this.next = o[2], f) : this.complete(i); }, complete: function complete(t, r) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), f; }, finish: function finish(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[2] === t) return this.complete(e[4], e[3]), m(e), f; } }, "catch": function _catch(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[0] === t) { var n = e[4]; if ("throw" === n.type) { var o = n.arg; m(e); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(r, e, n) { return this.delegate = { i: x(r), r: e, n: n }, "next" === this.method && (this.arg = t), f; } }, r; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }







// TODO add reupload component
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "TamorModal",
  props: {
    dossier_credit: {
      type: [Object],
      required: true,
      "default": function _default() {
        return {};
      }
    }
  },
  data: function data() {
    return {
      api_action: null,
      authcheck: null,
      authcheckUsr: null,
      authcheckStatus: null,
      canClose: true,
      CONF: {
        TODAY: "Aujourd'hui"
      },
      CONFIG: {
        CAN_RESEND_REMINDER_ON_SAME_DAY: true,
        ECHEANCE_REMINDER_PERIOD_IN_DAYS: 5,
        //
        ECHEANCE_WARNING_PERIOD_IN_DAYS: 2,
        MIN_NOTICE_PERIOD_IN_DAYS: 30,
        MIN_NOTIFY_RELOAD_PERIOD_IN_DAYS: 1,
        WARNING: 'WARNING',
        REMINDER: 'REMINDER',
        NULL_INDICATOR: '--'
      },
      connectsHost: _services_connects_service__WEBPACK_IMPORTED_MODULE_4__["default"].loadablehost(),
      // cred_pub_key: "202312-2015-40132023-12-20-3ba9743f-0e30-443c-b1f0-423b371d8310",
      currentTab: 'tab_tamor',
      // currentTab: 'tab_reminders',
      // dossier_credit: null,
      ebapisHost: _services_ebapis_service__WEBPACK_IMPORTED_MODULE_3__["default"].host,
      errorMessage: null,
      errorHint: null,
      extensions: ["xlsx", "xls"],
      fileToUpload: null,
      isDragging: false,
      isLoading: false,
      isLoadingInput: false,
      isLoadingInputUpload: {},
      isLoadingSetupTamor: false,
      loadingMessage: "Chargement du TAMOR",
      loadingHint: null,
      navigationTabs: [{
        title: "Tableau d'amortissement",
        slug: 'tab_tamor'
      }, {
        title: "Rappels",
        slug: 'tab_reminders'
      }],
      selectedEcheance: null,
      selectedEcheanceIndex: null,
      selectedEcheanceNumber: null,
      showFileInputForm: false,
      state: {},
      tamor: null,
      tamor_data: null,
      TAMOR_READ_ERROR: null,
      userAPIDATA: null
    };
  },
  mounted: function mounted() {
    var _this = this;
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _this.$modal.show('tamor_modal');
            _this.$console.log("===TAMOR_MODAL===");
            _this.$console.log("Auth user", _this.authUser);
            _this.$console.log("Dossier Crédit", _this.dossier_credit);
            _this.initApp();
          case 5:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }))();
  },
  computed: {
    cred_pub_key: function cred_pub_key() {
      var _this$dossier_credit;
      return (_this$dossier_credit = this.dossier_credit) === null || _this$dossier_credit === void 0 ? void 0 : _this$dossier_credit.cred_pub_key;
    },
    isAnEcheanceSelected: function isAnEcheanceSelected() {
      return this.isRemindersListVisible;
    },
    isRemindersListVisible: function isRemindersListVisible() {
      return this.selectedEcheanceNumber != null;
    },
    isTamorDataValid: function isTamorDataValid() {
      var _this$tamor, _this$tamor$tamor_dat, _this$tamor2;
      return !!((_this$tamor = this.tamor) !== null && _this$tamor !== void 0 && _this$tamor.file_url) && ((_this$tamor$tamor_dat = (_this$tamor2 = this.tamor) === null || _this$tamor2 === void 0 || (_this$tamor2 = _this$tamor2.tamor_data) === null || _this$tamor2 === void 0 || (_this$tamor2 = _this$tamor2.headers) === null || _this$tamor2 === void 0 ? void 0 : _this$tamor2.length) !== null && _this$tamor$tamor_dat !== void 0 ? _this$tamor$tamor_dat : 0) > 0;
    },
    tamorData: function tamorData() {
      var _this$tamor3;
      return (_this$tamor3 = this.tamor) === null || _this$tamor3 === void 0 ? void 0 : _this$tamor3.tamor_data;
    }
  },
  methods: {
    initApp: function initApp() {
      var _arguments = arguments,
        _this2 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var _ref, _ref$refresh, refresh, _this2$dossier_credit, _this2$dossier_credit2, _this2$dossier_credit3, _this2$dossier_credit4;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _ref = _arguments.length > 0 && _arguments[0] !== undefined ? _arguments[0] : {}, _ref$refresh = _ref.refresh, refresh = _ref$refresh === void 0 ? false : _ref$refresh;
              _this2.$console.log("TAMOR_MODAL:: initApp");
              _this2.initUserAPIData();
              _context2.next = 5;
              return _this2.fetchSettings();
            case 5:
              if (_this2.dossier_credit) {
                _context2.next = 8;
                break;
              }
              _this2.setError("Dossier crédit pas chargé", "Veuillez patienter quelques minutes ou recharger la page.");
              return _context2.abrupt("return");
            case 8:
              if (refresh) {
                _context2.next = 18;
                break;
              }
              if (!(!!((_this2$dossier_credit = _this2.dossier_credit) !== null && _this2$dossier_credit !== void 0 && (_this2$dossier_credit = _this2$dossier_credit.tamor) !== null && _this2$dossier_credit !== void 0 && _this2$dossier_credit.file_url) && ((_this2$dossier_credit2 = (_this2$dossier_credit3 = _this2.dossier_credit) === null || _this2$dossier_credit3 === void 0 || (_this2$dossier_credit3 = _this2$dossier_credit3.tamor) === null || _this2$dossier_credit3 === void 0 || (_this2$dossier_credit3 = _this2$dossier_credit3.tamor_data) === null || _this2$dossier_credit3 === void 0 || (_this2$dossier_credit3 = _this2$dossier_credit3.headers) === null || _this2$dossier_credit3 === void 0 ? void 0 : _this2$dossier_credit3.length) !== null && _this2$dossier_credit2 !== void 0 ? _this2$dossier_credit2 : 0) > 0)) {
                _context2.next = 18;
                break;
              }
              console.log(">> tamor exists");
              _this2.setLoading();
              _this2.tamor = (_this2$dossier_credit4 = _this2.dossier_credit) === null || _this2$dossier_credit4 === void 0 ? void 0 : _this2$dossier_credit4.tamor;
              // set state
              _this2.setStates();
              // TODO show error
              _context2.next = 16;
              return _this2.$sleep(1000);
            case 16:
              _this2.clearLoading();
              return _context2.abrupt("return");
            case 18:
              console.log(">> tamor doesn't exist");
              _this2.state = [];
              // await this.setAuthInfo()
              // await this.fetchDossierCredit(this.cred_pub_key);
              // TODO fetch dossier with credpubkey
              _context2.next = 22;
              return _this2.readTamorFile();
            case 22:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }))();
    },
    initUserAPIData: function initUserAPIData() {
      if (this.authUser) {
        var _this$authUser = this.authUser,
          email = _this$authUser.email,
          name = _this$authUser.name,
          role = _this$authUser.role;
        var id = this.authUser.id;
        var _role$at = role === null || role === void 0 ? void 0 : role.at(0),
          display_name = _role$at.display_name,
          role_sigle = _role$at.role_sigle; // ?- Because for some reason the role is an array
        if (!id) {
          var _this$authUser2;
          id = (_this$authUser2 = this.authUser) === null || _this$authUser2 === void 0 ? void 0 : _this$authUser2.user_id;
        }
        var user_id = id;
        this.userAPIDATA = {
          email: email,
          name: name,
          id: id,
          user_id: user_id,
          role: display_name,
          role_sigle: role_sigle
        };
      }
    },
    calcReminderAttributes: function calcReminderAttributes(reminder) {
      var attributes = {
        color: 'secondary',
        icon: 'clock-time',
        status: 'En attente'
      };
      if (reminder !== null && reminder !== void 0 && reminder.is_sent) {
        return {
          color: "success",
          icon: "send-mail",
          status: "Envoyé"
        };
      }
      if (!(reminder !== null && reminder !== void 0 && reminder.is_active)) {
        return {
          color: "danger",
          icon: "close-squared-alt",
          status: "Annulé"
        };
      }
      if (reminder !== null && reminder !== void 0 && reminder.error) {
        return {
          color: "danger",
          icon: "exclamation-tringle",
          status: "Erreur d'envoi"
        };
      }
      return attributes;
    },
    cancelEcheanceReminders: function cancelEcheanceReminders(echeance) {
      var _arguments2 = arguments,
        _this3 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var echeance_index, _res$data, res, errorMessage, updated_reminder_data;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              echeance_index = _arguments2.length > 1 && _arguments2[1] !== undefined ? _arguments2[1] : null;
              if (!_this3.state[(echeance === null || echeance === void 0 ? void 0 : echeance.date_echeance) + '_cancel_echeance_reminders_loading']) {
                _context3.next = 3;
                break;
              }
              return _context3.abrupt("return");
            case 3:
              if (!_this3.state[(echeance === null || echeance === void 0 ? void 0 : echeance.date_echeance) + '_cancel_echeance_reminders_success']) {
                _context3.next = 5;
                break;
              }
              return _context3.abrupt("return");
            case 5:
              // 
              _this3.toggleState((echeance === null || echeance === void 0 ? void 0 : echeance.date_echeance) + '_cancel_echeance_reminders_error', null);
              _this3.$console.log(">>cancelEcheanceReminders");
              _context3.prev = 7;
              _this3.toggleState((echeance === null || echeance === void 0 ? void 0 : echeance.date_echeance) + '_cancel_echeance_reminders_loading', true);
              // 
              _context3.next = 11;
              return _services_recouvrement_service_js__WEBPACK_IMPORTED_MODULE_0__["default"].cancelEcheanceReminders({
                cred_pub_key: _this3.cred_pub_key,
                date_echeance: echeance === null || echeance === void 0 ? void 0 : echeance.date_echeance,
                echeance_index: echeance_index,
                user: _this3.userAPIDATA,
                with_data: true
              });
            case 11:
              res = _context3.sent;
              // 
              _this3.$console.log("<<cancelEcheanceReminders");
              if (res !== null && res !== void 0 && res.is_success) {
                _context3.next = 19;
                break;
              }
              errorMessage = "Une erreur s'est produite";
              _this3.toggleState((echeance === null || echeance === void 0 ? void 0 : echeance.date_echeance) + '_cancel_echeance_reminders_error', errorMessage);
              if (res !== null && res !== void 0 && res.message) {
                errorMessage = res === null || res === void 0 ? void 0 : res.message;
              }
              _this3.$toasted.show(errorMessage);
              return _context3.abrupt("return");
            case 19:
              updated_reminder_data = (_res$data = res === null || res === void 0 ? void 0 : res.data) !== null && _res$data !== void 0 ? _res$data : {};
              _this3.tamor.tamor_data.rows[echeance_index].reminder_data = updated_reminder_data;
              _this3.$toasted.show("Tous les rappels automatiques de l'échéance du " + (echeance === null || echeance === void 0 ? void 0 : echeance.date_echeance) + " ont été annulées");
              if (_this3.isEcheanceSelected(_this3.tamor.tamor_data.rows[echeance_index])) {
                _this3.selectEcheance(_this3.tamor.tamor_data.rows[echeance_index], echeance_index);
              }
              _context3.next = 30;
              break;
            case 25:
              _context3.prev = 25;
              _context3.t0 = _context3["catch"](7);
              _this3.toggleState((echeance === null || echeance === void 0 ? void 0 : echeance.date_echeance) + '_cancel_echeance_reminders_error', "Une erreur s'est produite");
              _this3.$toasted.show("Oups, une erreur s'est produite veuillez réessayer plus tard");
              _this3.$console.log("xx cancelEcheanceReminders", _context3.t0);
            case 30:
              _context3.prev = 30;
              _this3.toggleState((echeance === null || echeance === void 0 ? void 0 : echeance.date_echeance) + '_cancel_echeance_reminders_loading', false);
              return _context3.finish(30);
            case 33:
            case "end":
              return _context3.stop();
          }
        }, _callee3, null, [[7, 25, 30, 33]]);
      }))();
    },
    cancelScheduledReminder: function cancelScheduledReminder(echeance) {
      var _arguments3 = arguments,
        _this4 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        var echeance_index, reminder, reminder_index, _res$data2, res, errorMessage, updated_reminder_data;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              echeance_index = _arguments3.length > 1 && _arguments3[1] !== undefined ? _arguments3[1] : null;
              reminder = _arguments3.length > 2 ? _arguments3[2] : undefined;
              reminder_index = _arguments3.length > 3 && _arguments3[3] !== undefined ? _arguments3[3] : null;
              if (!_this4.state[(reminder === null || reminder === void 0 ? void 0 : reminder.date) + '_cancel_scheduled_reminder_loading']) {
                _context4.next = 5;
                break;
              }
              return _context4.abrupt("return");
            case 5:
              if (!_this4.state[(reminder === null || reminder === void 0 ? void 0 : reminder.date) + '_cancel_scheduled_reminder_success']) {
                _context4.next = 7;
                break;
              }
              return _context4.abrupt("return");
            case 7:
              // 
              _this4.toggleState((reminder === null || reminder === void 0 ? void 0 : reminder.date) + '_cancel_scheduled_reminder_error', null);
              _this4.$console.log(">>cancelScheduledReminder");
              _context4.prev = 9;
              _this4.toggleState((reminder === null || reminder === void 0 ? void 0 : reminder.date) + '_cancel_scheduled_reminder_loading', true);
              // 
              _context4.next = 13;
              return _services_recouvrement_service_js__WEBPACK_IMPORTED_MODULE_0__["default"].cancelScheduledReminder({
                cred_pub_key: _this4.cred_pub_key,
                date_echeance: echeance === null || echeance === void 0 ? void 0 : echeance.date_echeance,
                echeance_index: echeance_index,
                reminder_date: reminder === null || reminder === void 0 ? void 0 : reminder.date,
                reminder_index: reminder_index,
                user: _this4.userAPIDATA,
                with_data: true
              });
            case 13:
              res = _context4.sent;
              // 
              _this4.$console.log("<<cancelScheduledReminder");
              if (res !== null && res !== void 0 && res.is_success) {
                _context4.next = 21;
                break;
              }
              errorMessage = "Une erreur s'est produite";
              _this4.toggleState((reminder === null || reminder === void 0 ? void 0 : reminder.date) + '_cancel_scheduled_reminder_error', errorMessage);
              if (res !== null && res !== void 0 && res.message) {
                errorMessage = res === null || res === void 0 ? void 0 : res.message;
              }
              _this4.$toasted.show(errorMessage);
              return _context4.abrupt("return");
            case 21:
              updated_reminder_data = (_res$data2 = res === null || res === void 0 ? void 0 : res.data) !== null && _res$data2 !== void 0 ? _res$data2 : {};
              echeance.reminder_data = updated_reminder_data;
              _this4.tamor.tamor_data.rows[echeance_index].reminder_data = updated_reminder_data;
              _this4.$toasted.show("Le rappel automatique du " + (reminder === null || reminder === void 0 ? void 0 : reminder.date) + " a été annulé");
              if (_this4.isEcheanceSelected(echeance)) {
                _this4.selectEcheance(echeance, echeance_index);
              }
              _context4.next = 33;
              break;
            case 28:
              _context4.prev = 28;
              _context4.t0 = _context4["catch"](9);
              _this4.toggleState((reminder === null || reminder === void 0 ? void 0 : reminder.date) + '_cancel_scheduled_reminder_error', "Une erreur s'est produite");
              _this4.$toasted.show("Oups, une erreur s'est produite veuillez réessayer plus tard");
              _this4.$console.log("xx cancelScheduledReminder", _context4.t0);
            case 33:
              _context4.prev = 33;
              _this4.toggleState((reminder === null || reminder === void 0 ? void 0 : reminder.date) + '_cancel_scheduled_reminder_loading', false);
              return _context4.finish(33);
            case 36:
            case "end":
              return _context4.stop();
          }
        }, _callee4, null, [[9, 28, 33, 36]]);
      }))();
    },
    canEditFileName: function canEditFileName(_ref2) {
      var renaming = _ref2.renaming,
        isUploaded = _ref2.isUploaded;
      if (this.isLoadingInput) return false;
      return !renaming && !isUploaded;
    },
    canShowFileEditInput: function canShowFileEditInput(_ref3) {
      var renaming = _ref3.renaming,
        isUploaded = _ref3.isUploaded;
      return renaming && !isUploaded;
    },
    canShowRemindersStatus: function canShowRemindersStatus(row) {
      var _this$CONFIG, _row$reminder_data;
      return this.getRemainingDays(row === null || row === void 0 ? void 0 : row.date_echeance) <= ((_this$CONFIG = this.CONFIG) === null || _this$CONFIG === void 0 ? void 0 : _this$CONFIG.MIN_NOTICE_PERIOD_IN_DAYS) || (row === null || row === void 0 || (_row$reminder_data = row.reminder_data) === null || _row$reminder_data === void 0 || (_row$reminder_data = _row$reminder_data.reminders) === null || _row$reminder_data === void 0 ? void 0 : _row$reminder_data.length) > 0;
    },
    canUserStopAutomaticReminders: function canUserStopAutomaticReminders(row) {
      return true;
    },
    clearError: function clearError() {
      this.api_action = null;
      this.errorMessage = null;
      this.errorHint = null;
      this.TAMOR_READ_ERROR = null;
    },
    clearInputForm: function clearInputForm() {
      var clearAll = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      if (this.isLoadingInput) {
        this.$toasted.show("Chargement du fichier en cours");
        return;
      }
      if (clearAll) {
        this.fileToUpload = null;
        this.showFileInputForm = false;
        return;
      }
      if (this.fileToUpload) {
        this.fileToUpload = null;
        return;
      }
      if (this.showFileInputForm) {
        this.showFileInputForm = false;
        return;
      }
      return;
    },
    clearLoading: function clearLoading() {
      this.isLoading = false;
      this.loadingHint = null;
    },
    echeanceAction: function echeanceAction(date) {
      var _this$CONFIG2, _this$CONFIG4;
      var daysDifference = this.getRemainingDays(date);
      // 
      if (daysDifference <= ((_this$CONFIG2 = this.CONFIG) === null || _this$CONFIG2 === void 0 ? void 0 : _this$CONFIG2.ECHEANCE_WARNING_PERIOD_IN_DAYS)) {
        var _this$CONFIG3;
        return (_this$CONFIG3 = this.CONFIG) === null || _this$CONFIG3 === void 0 ? void 0 : _this$CONFIG3.WARNING;
      }
      if (daysDifference <= ((_this$CONFIG4 = this.CONFIG) === null || _this$CONFIG4 === void 0 ? void 0 : _this$CONFIG4.ECHEANCE_REMINDER_PERIOD_IN_DAYS)) {
        var _this$CONFIG5;
        return (_this$CONFIG5 = this.CONFIG) === null || _this$CONFIG5 === void 0 ? void 0 : _this$CONFIG5.REMINDER;
      }
      return null;
    },
    fetchDossierCredit: function fetchDossierCredit(cred_pub_key) {
      var _this5 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
        var res, fetchedData;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              _context5.prev = 0;
              _this5.$console.log(">>fetchDossierCredit", cred_pub_key);
              _context5.next = 4;
              return axios.post(_this5.ebapisHost + "creditbuilder/api/v1/compile/", {
                user: _this5.authUser,
                cred_pub_key: cred_pub_key
              });
            case 4:
              res = _context5.sent;
              fetchedData = res.data;
              if (fetchedData["is_success"] === true) {
                _this5.$console.log("<<fetchDossierCredit");
                _this5.dossier_credit = fetchedData["dossier_credit"];
                _this5.readTamorFile();
              } else {
                _this5.setError("Erreur du chargement du dossier", "Veuillez réessayer dans quelques minutes");
              }
              _context5.next = 13;
              break;
            case 9:
              _context5.prev = 9;
              _context5.t0 = _context5["catch"](0);
              _this5.setError("Erreur du chargement du dossier", "Le dossier n'a pas pu être chargé");
              _this5.$console.log("xx fetchDossierCredit", _context5.t0);
            case 13:
            case "end":
              return _context5.stop();
          }
        }, _callee5, null, [[0, 9]]);
      }))();
    },
    fetchSettings: function fetchSettings() {
      var _this6 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
        var _res$data3, res, conf;
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              _context6.prev = 0;
              _context6.next = 3;
              return _services_recouvrement_service_js__WEBPACK_IMPORTED_MODULE_0__["default"].getSettings();
            case 3:
              res = _context6.sent;
              if (res !== null && res !== void 0 && res.is_success) {
                _context6.next = 6;
                break;
              }
              return _context6.abrupt("return");
            case 6:
              // this.$console.log("<<fetchSettings", res?.data);
              conf = (_res$data3 = res === null || res === void 0 ? void 0 : res.data) !== null && _res$data3 !== void 0 ? _res$data3 : _this6.CONFIG;
              _this6.CONFIG = _objectSpread({}, conf);
              _context6.next = 12;
              break;
            case 10:
              _context6.prev = 10;
              _context6.t0 = _context6["catch"](0);
            case 12:
            case "end":
              return _context6.stop();
          }
        }, _callee6, null, [[0, 10]]);
      }))();
    },
    formatFileName: function formatFileName(input) {
      return this.isFileNameTooLong(input) ? this.shortenFileName(input) : input.name;
    },
    getDaysTillNextReminderText: function getDaysTillNextReminderText() {
      return "4 jours";
    },
    getSentRemindersText: function getSentRemindersText(remaining_days) {
      var plural = this._plural(Math.abs(remaining_days));
      var text = "";
      if (remaining_days < 0) {
        text = "Dernier rappel il ya " + Math.abs(remaining_days) + " jour" + plural;
      } else if (remaining_days > 0) {
        text = "Prochain rappel dans " + Math.abs(remaining_days) + " jour" + plural;
      } else {
        text = "Rappel programmé aujourd'hui";
      }
      return text;
    },
    getRemainingDaysText: function getRemainingDaysText(remaining_days) {
      if (remaining_days == null) return null;
      var plural = this._plural(Math.abs(remaining_days));
      var text = "";
      if (remaining_days < 0) {
        text = "Il y a " + Math.abs(remaining_days) + " jour" + plural;
      } else if (remaining_days > 0) {
        text = "Dans " + Math.abs(remaining_days) + " jour" + plural;
      } else {
        var _this$CONF;
        // text = "Aujourd'hui";
        text = (_this$CONF = this.CONF) === null || _this$CONF === void 0 ? void 0 : _this$CONF.TODAY;
      }
      return text;
    },
    getRemainingDays: function getRemainingDays(date) {
      if (date == null) return null;
      var currentDate = moment__WEBPACK_IMPORTED_MODULE_6___default()();
      // const originalDate = moment(date, 'YYYY-MM-DDTHH:mm:ss');
      var originalDate = null;
      try {
        originalDate = moment__WEBPACK_IMPORTED_MODULE_6___default()(date, 'DD-MM-YYYY');
      } catch (error) {
        originalDate = moment__WEBPACK_IMPORTED_MODULE_6___default()(date, 'DD/MM/YYYY');
      }
      // Calculate the difference in days
      var daysDifference = originalDate.diff(currentDate, 'days');
      return daysDifference;
    },
    hasAction: function hasAction(date) {
      var is_today = this.getRemainingDaysText(date) == this.CONF.TODAY;
      if (is_today) {
        return this.echeanceAction(date) != null;
      }
      return this.echeanceAction(date) != null && !this.isTooEarlyToSendNotice(date);
    },
    isEcheanceSelected: function isEcheanceSelected(echeance) {
      return this.selectedEcheanceNumber == (echeance === null || echeance === void 0 ? void 0 : echeance.n_ech);
    },
    isFileNameTooLong: function isFileNameTooLong(_ref4) {
      var name = _ref4.name;
      return (name === null || name === void 0 ? void 0 : name.length) > this.MAX_NAME_LENGTH;
    },
    isReminderSentByCurrentUser: function isReminderSentByCurrentUser(reminder) {
      var _reminder$sent_by, _this$authUser3;
      return (reminder === null || reminder === void 0 || (_reminder$sent_by = reminder.sent_by) === null || _reminder$sent_by === void 0 ? void 0 : _reminder$sent_by.id) == ((_this$authUser3 = this.authUser) === null || _this$authUser3 === void 0 ? void 0 : _this$authUser3.id);
    },
    isTooEarlyToSendNotice: function isTooEarlyToSendNotice() {
      var date = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      if (!date) return false;
      var days = Math.abs(this.getRemainingDays(date));
      return days == 0;
      // removed by dead control flow
{}
    },
    onClose: function onClose() {
      var _this7 = this;
      if (this.isLoadingInput) {
        // this.$toasted.show("Chargement du fichier en cours")
        this.$confirm("Fichier en téléchargement", "Un fichier est en cours de téléchargement ! Êtes-vous sur(e) de vouloir fermer ?").then(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
          return _regeneratorRuntime().wrap(function _callee7$(_context7) {
            while (1) switch (_context7.prev = _context7.next) {
              case 0:
                _this7.canClose = true;
                _this7.$modal.hide('tamor_modal');
              case 2:
              case "end":
                return _context7.stop();
            }
          }, _callee7);
        })));
        return;
      }
      if (!this.canClose) return false;
      return true;
    },
    onDrop: function onDrop(e) {
      // console.log("onDrop", e, d);
      e.preventDefault();
      var droppedFiles = e.dataTransfer.files;
      this.onFileInputChanged(e, {
        droppedFiles: droppedFiles
      });
    },
    onDragEnter: function onDragEnter() {
      this.isDragging = true;
    },
    onDragLeave: function onDragLeave() {
      var _this8 = this;
      setTimeout(function () {
        // console.log("Drag Leave");
        _this8.isDragging = false;
      }, 2000);
    },
    onFileInputChanged: function onFileInputChanged(event) {
      var _event$target;
      var _ref6 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        _ref6$droppedFiles = _ref6.droppedFiles,
        droppedFiles = _ref6$droppedFiles === void 0 ? null : _ref6$droppedFiles;
      this.$console.log("onFileInputChanged", event === null || event === void 0 || (_event$target = event.target) === null || _event$target === void 0 ? void 0 : _event$target.files, "droppedFile:", droppedFiles);
      this.isLoadingInput = true;
      this.TAMOR_READ_ERROR = null;
      try {
        var _ref7, _ref8, _event$target2, _uploadedFile$name, _this$extensions, _uploadedFile$name2, _this$fileToUpload, _this$fileToUpload2;
        var user = this.authUser;
        // let uploadedFile

        var uploadedFile = (_ref7 = (_ref8 = droppedFiles != null ? droppedFiles[0] : null) !== null && _ref8 !== void 0 ? _ref8 : event === null || event === void 0 || (_event$target2 = event.target) === null || _event$target2 === void 0 ? void 0 : _event$target2.files[0]) !== null && _ref7 !== void 0 ? _ref7 : null;
        var ext = uploadedFile === null || uploadedFile === void 0 || (_uploadedFile$name = uploadedFile.name) === null || _uploadedFile$name === void 0 ? void 0 : _uploadedFile$name.split('.').at(-1);
        if (!((_this$extensions = this.extensions) !== null && _this$extensions !== void 0 && _this$extensions.includes(ext))) {
          this.$toasted.show("'" + (uploadedFile === null || uploadedFile === void 0 ? void 0 : uploadedFile.name) + "' Refusé. Ce type de fichier n'est pas accepté", {
            duration: 5000
          });
        }

        // format filelist

        var fileNameExt = uploadedFile === null || uploadedFile === void 0 || (_uploadedFile$name2 = uploadedFile.name) === null || _uploadedFile$name2 === void 0 ? void 0 : _uploadedFile$name2.split('.');
        this.fileToUpload = {
          file: uploadedFile,
          name: fileNameExt[0],
          ext: fileNameExt.at(-1),
          errors: [],
          uploadErrors: [],
          isUploaded: null,
          hasUploadError: false
        };
        var hasError = false;
        //
        var errors = [];
        var errorMessage = "";
        if (!this.authorizedExt.includes((_this$fileToUpload = this.fileToUpload) === null || _this$fileToUpload === void 0 || (_this$fileToUpload = _this$fileToUpload.file) === null || _this$fileToUpload === void 0 || (_this$fileToUpload = _this$fileToUpload.name) === null || _this$fileToUpload === void 0 ? void 0 : _this$fileToUpload.split('.').at(-1))) {
          errors.push({
            code: 401,
            message: "Ce type de fichier n'est pas autorisé"
          });
        }
        if (this.limitSize < ((_this$fileToUpload2 = this.fileToUpload) === null || _this$fileToUpload2 === void 0 ? void 0 : _this$fileToUpload2.file.size)) {
          errors.push({
            code: 413,
            message: "Fichier trop volumineux (taille maximum autorisée : " + (this.limitSize / 1048576).toFixed(0) + " Mo)"
          });
        }
        if (errors.length > 0) {
          hasError = true;
          this.fileToUpload = _objectSpread(_objectSpread({}, this.fileToUpload), {}, {
            errors: errors
          });
        }
        if (hasError) {
          this.isLoadingInput = false;
          this.$toasted.show("Ce fichier présente des erreurs.");
          return;
        }
        this.isLoadingInput = false;
      } catch (error) {
        this.isLoading = false;
        this.$toasted.show("Une erreur s'est produite");
        this.isLoadingInput = false;
        this.$console.error(error);
        // throw error;
      } finally {
        this.isLoadingInput = false;
      }
    },
    openFileDialog: function openFileDialog() {
      var elm = document.getElementById("tamor_file_input");
      if (!elm) return;
      elm.click();
    },
    // 
    readTamorFile: function readTamorFile() {
      var _arguments4 = arguments,
        _this9 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
        var _ref9, _ref9$from_upload, from_upload, _res$data4, _this9$tamorData, _this9$tamorData2, res, _res$message;
        return _regeneratorRuntime().wrap(function _callee8$(_context8) {
          while (1) switch (_context8.prev = _context8.next) {
            case 0:
              _ref9 = _arguments4.length > 0 && _arguments4[0] !== undefined ? _arguments4[0] : {}, _ref9$from_upload = _ref9.from_upload, from_upload = _ref9$from_upload === void 0 ? false : _ref9$from_upload;
              if (!_this9.isLoading) {
                _context8.next = 3;
                break;
              }
              return _context8.abrupt("return");
            case 3:
              _this9.$console.log(">>readTamorFile");
              _this9.clearError();
              _context8.prev = 5;
              _this9.setLoading();
              // 
              _context8.next = 9;
              return _services_recouvrement_service_js__WEBPACK_IMPORTED_MODULE_0__["default"].readTamorFile({
                cred_pub_key: _this9.cred_pub_key
              });
            case 9:
              res = _context8.sent;
              // 
              _this9.$console.log("<<readTamorFile ", res === null || res === void 0 ? void 0 : res.is_success);
              if (res !== null && res !== void 0 && res.is_success) {
                _context8.next = 16;
                break;
              }
              _this9.setError((_res$message = res === null || res === void 0 ? void 0 : res.message) !== null && _res$message !== void 0 ? _res$message : "Impossible de lire le TAMOR.", "Assurez-vous que le fichier TAMOR est attaché au dossier");
              // 
              if (res !== null && res !== void 0 && res.action) {
                _this9.api_action = res === null || res === void 0 ? void 0 : res.action;
              }
              _this9.$toasted.show(_this9.errorMessage);
              return _context8.abrupt("return");
            case 16:
              _this9.tamor = (_res$data4 = res === null || res === void 0 ? void 0 : res.data) !== null && _res$data4 !== void 0 ? _res$data4 : null;
              _this9.setStates();
              if (!_this9.tamor) {
                _this9.setError("Fichier TAMOR Inexistant sur ce dossier", "Ajoutez le fichier TAMOR pour continuer");
                _this9.api_action = 'REUPLOAD';
              }
              if (((_this9$tamorData = _this9.tamorData) === null || _this9$tamorData === void 0 || (_this9$tamorData = _this9$tamorData.headers) === null || _this9$tamorData === void 0 ? void 0 : _this9$tamorData.length) == 0) {
                _this9.setError("Fichier TAMOR Illisible", "Nous n'avons pas pu lire le fichier TAMOR.");
                _this9.api_action = 'REUPLOAD';
              }
              if (((_this9$tamorData2 = _this9.tamorData) === null || _this9$tamorData2 === void 0 || (_this9$tamorData2 = _this9$tamorData2.rows) === null || _this9$tamorData2 === void 0 ? void 0 : _this9$tamorData2.length) == 0) {
                _this9.setError("Fichier TAMOR vide", "Aucune ligne d'échéance trouvées. Veuillez reuploader le fichier TAMOR");
                _this9.api_action = 'REUPLOAD';
              }
              if (_this9.api_action) {
                _this9.$toasted.show("TAMOR chargé avec des errreurs");
              } else {
                _this9.$toasted.show("TAMOR chargé avec succès");
              }
              _context8.next = 29;
              break;
            case 24:
              _context8.prev = 24;
              _context8.t0 = _context8["catch"](5);
              _this9.setError("Une erreur s'est produite dans la lecture du fichier TAMOR", false);
              _this9.$toasted.show("Oups, Impossible de lire le TAMOR.");
              _this9.$console.log("xx readTamorFile", _context8.t0);
            case 29:
              _context8.prev = 29;
              _this9.clearLoading();
              return _context8.finish(29);
            case 32:
            case "end":
              return _context8.stop();
          }
        }, _callee8, null, [[5, 24, 29, 32]]);
      }))();
    },
    refresh: function refresh() {
      var _this0 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
        return _regeneratorRuntime().wrap(function _callee9$(_context9) {
          while (1) switch (_context9.prev = _context9.next) {
            case 0:
              if (!(_this0.api_action == 'REUPLOAD')) {
                _context9.next = 3;
                break;
              }
              _this0.showFileInputForm = true;
              return _context9.abrupt("return");
            case 3:
              _this0.initApp({
                refresh: true
              });
            case 4:
            case "end":
              return _context9.stop();
          }
        }, _callee9);
      }))();
    },
    selectEcheance: function selectEcheance() {
      var _arguments5 = arguments,
        _this1 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee0() {
        var _echeance$n_ech;
        var echeance, index, id;
        return _regeneratorRuntime().wrap(function _callee0$(_context0) {
          while (1) switch (_context0.prev = _context0.next) {
            case 0:
              echeance = _arguments5.length > 0 && _arguments5[0] !== undefined ? _arguments5[0] : null;
              index = _arguments5.length > 1 && _arguments5[1] !== undefined ? _arguments5[1] : null;
              if (!(_this1.currentTab != 'tab_reminders')) {
                _context0.next = 16;
                break;
              }
              _this1.unSelectEcheance();
              _this1.switchTab({
                slug: 'tab_reminders'
              });
              // 
              _context0.next = 7;
              return _this1.$sleep(300);
            case 7:
              _context0.prev = 7;
              // const id = index+ '_echeance_details';
              // const id = 'echeance_details';
              id = 'title_tamor_modal';
              _this1.scrollTo(id);
              _context0.next = 12;
              return _this1.$sleep(300);
            case 12:
              _context0.next = 16;
              break;
            case 14:
              _context0.prev = 14;
              _context0.t0 = _context0["catch"](7);
            case 16:
              _this1.selectedEcheance = echeance;
              _this1.selectedEcheanceNumber = (_echeance$n_ech = echeance === null || echeance === void 0 ? void 0 : echeance.n_ech) !== null && _echeance$n_ech !== void 0 ? _echeance$n_ech : null;
              _this1.selectedEcheanceIndex = index !== null && index !== void 0 ? index : null;
            case 19:
            case "end":
              return _context0.stop();
          }
        }, _callee0, null, [[7, 14]]);
      }))();
    },
    sendClientNotice: function sendClientNotice(echeance_item) {
      var _arguments6 = arguments,
        _this10 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee10() {
        var index, _ref0, _ref0$bypass, bypass, date, numero_echeance, montant_echeance, date_echeance, _echeance_item$remind, remaining_days, severity, message, question;
        return _regeneratorRuntime().wrap(function _callee10$(_context10) {
          while (1) switch (_context10.prev = _context10.next) {
            case 0:
              index = _arguments6.length > 1 && _arguments6[1] !== undefined ? _arguments6[1] : -1;
              _ref0 = _arguments6.length > 2 && _arguments6[2] !== undefined ? _arguments6[2] : {}, _ref0$bypass = _ref0.bypass, bypass = _ref0$bypass === void 0 ? false : _ref0$bypass;
              _this10.$console.log("sendClientNotice", echeance_item, "index", index, "bypass", bypass);
              if (!(_this10.state[echeance_item === null || echeance_item === void 0 ? void 0 : echeance_item.date] == 'LOADING')) {
                _context10.next = 6;
                break;
              }
              _this10.$toasted.show("Opération en cours...");
              return _context10.abrupt("return");
            case 6:
              date = echeance_item.date_echeance, numero_echeance = echeance_item.n_ech, montant_echeance = echeance_item.montant_echeance, date_echeance = echeance_item.date_echeance;
              if (bypass) {
                _context10.next = 11;
                break;
              }
              if (!_this10.isTooEarlyToSendNotice(echeance_item === null || echeance_item === void 0 || (_echeance_item$remind = echeance_item.reminder_data) === null || _echeance_item$remind === void 0 || (_echeance_item$remind = _echeance_item$remind.reminders) === null || _echeance_item$remind === void 0 || (_echeance_item$remind = _echeance_item$remind.at(-1)) === null || _echeance_item$remind === void 0 ? void 0 : _echeance_item$remind.created_at)) {
                _context10.next = 11;
                break;
              }
              _this10.toggleState(date + '_too_early', true);
              return _context10.abrupt("return");
            case 11:
              // 
              remaining_days = _this10.getRemainingDays(date);
              severity = _this10.echeanceAction(date);
              message = "Vous êtes sur le point d'envoyer un rappel au client ! ";
              question = "Êtes vous sûr(e) de vouloir continuer ?";
              _this10.$confirm(message + question, "Envoyer un rappel au client").then(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee1() {
                var _res$data5, _this10$authUser, email, name, role, id, _role$at2, display_name, role_sigle, _this10$authUser2, user_id, formData, res, _res$message2, errorMessage, updated_echeance, _errorMessage;
                return _regeneratorRuntime().wrap(function _callee1$(_context1) {
                  while (1) switch (_context1.prev = _context1.next) {
                    case 0:
                      _this10.toggleState(date + '_too_early', null);
                      _this10.toggleState(date, 'LOADING');
                      _this10.toggleState(date + '_error', null);
                      // 
                      // 
                      _context1.prev = 3;
                      // if(index != null && index != undefined){
                      //   this.toggleState(date+'_error', "Une erreur s'est produite")
                      //   this.$toasted.show("Index écheance invalide");
                      //   return;
                      // }
                      _this10$authUser = _this10.authUser, email = _this10$authUser.email, name = _this10$authUser.name, role = _this10$authUser.role;
                      id = _this10.authUser.id;
                      _role$at2 = role === null || role === void 0 ? void 0 : role.at(0), display_name = _role$at2.display_name, role_sigle = _role$at2.role_sigle; // ?- Because for some reason the role is an array
                      if (!id) {
                        id = (_this10$authUser2 = _this10.authUser) === null || _this10$authUser2 === void 0 ? void 0 : _this10$authUser2.user_id;
                      }
                      user_id = id;
                      formData = {
                        cred_pub_key: _this10.cred_pub_key,
                        numero_echeance: numero_echeance,
                        date_echeance: date_echeance,
                        severity: severity,
                        remaining_days: remaining_days,
                        montant_echeance: montant_echeance,
                        user: _this10.userAPIDATA
                      };
                      _this10.$console.log("sendClientNotice", formData);
                      _context1.next = 13;
                      return _services_recouvrement_service_js__WEBPACK_IMPORTED_MODULE_0__["default"].notifyClient(formData);
                    case 13:
                      res = _context1.sent;
                      if (res !== null && res !== void 0 && res.is_success) {
                        _context1.next = 20;
                        break;
                      }
                      _this10.toggleState(date, 'ERROR');
                      errorMessage = (_res$message2 = res === null || res === void 0 ? void 0 : res.message) !== null && _res$message2 !== void 0 ? _res$message2 : "Une erreur s'est produite. Veuillez réessayer";
                      _this10.toggleState(date + '_error', errorMessage);
                      _this10.$toasted.show(errorMessage);
                      return _context1.abrupt("return");
                    case 20:
                      updated_echeance = (_res$data5 = res === null || res === void 0 ? void 0 : res.data) !== null && _res$data5 !== void 0 ? _res$data5 : echeance_item; // update echeance
                      _this10.tamor.tamor_data.rows[index] = updated_echeance;
                      if (_this10.isEcheanceSelected(updated_echeance)) {
                        _this10.selectEcheance(updated_echeance, index);
                      }
                      _this10.toggleState(date, 'SENT');
                      _this10.$toasted.show("Rappel envoyé au client !");
                      _context1.next = 34;
                      break;
                    case 27:
                      _context1.prev = 27;
                      _context1.t0 = _context1["catch"](3);
                      _this10.toggleState(date, 'ERROR');
                      _errorMessage = "Une erreur s'est produite. Veuillez réessayer";
                      _this10.toggleState(date + '_error', _errorMessage);
                      _this10.$toasted.show(_errorMessage);
                      _this10.$console.log("xx error", _context1.t0);
                    case 34:
                    case "end":
                      return _context1.stop();
                  }
                }, _callee1, null, [[3, 27]]);
              })));
            case 16:
            case "end":
              return _context10.stop();
          }
        }, _callee10);
      }))();
    },
    sendAnotherFile: function sendAnotherFile() {
      var _this11 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee11() {
        return _regeneratorRuntime().wrap(function _callee11$(_context11) {
          while (1) switch (_context11.prev = _context11.next) {
            case 0:
              _this11.clearInputForm();
              _context11.next = 3;
              return _this11.$sleep(500);
            case 3:
              _this11.openFileDialog();
            case 4:
            case "end":
              return _context11.stop();
          }
        }, _callee11);
      }))();
    },
    sendFiles: function sendFiles() {
      var _this12 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee12() {
        var _this12$fileToUpload, _this12$fileToUpload2;
        return _regeneratorRuntime().wrap(function _callee12$(_context12) {
          while (1) switch (_context12.prev = _context12.next) {
            case 0:
              if (!_this12.isLoadingInput) {
                _context12.next = 2;
                break;
              }
              return _context12.abrupt("return");
            case 2:
              _this12.$console.log("sendFiles");
              _context12.prev = 3;
              if (!(((_this12$fileToUpload = _this12.fileToUpload) === null || _this12$fileToUpload === void 0 ? void 0 : _this12$fileToUpload.isUploaded) == true)) {
                _context12.next = 7;
                break;
              }
              _this12.setupTAMORInDossierCredit({
                cred_pub_key: _this12.cred_pub_key,
                file_url: (_this12$fileToUpload2 = _this12.fileToUpload) === null || _this12$fileToUpload2 === void 0 ? void 0 : _this12$fileToUpload2.file_url
              });
              return _context12.abrupt("return");
            case 7:
              _this12.toggleInputUploadingState('hasUploadError', false);
              _this12.isLoadingInput = true;
              _this12.uploadTAMOR();
              _context12.next = 17;
              break;
            case 12:
              _context12.prev = 12;
              _context12.t0 = _context12["catch"](3);
              _this12.$console.error(_context12.t0);
              _this12.isLoadingInput = false;
              _this12.$toasted.show("Oups, une erreur s'est produite");
            case 17:
            case "end":
              return _context12.stop();
          }
        }, _callee12, null, [[3, 12]]);
      }))();
    },
    setAuthInfo: function setAuthInfo() {
      var _this13 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee13() {
        var res;
        return _regeneratorRuntime().wrap(function _callee13$(_context13) {
          while (1) switch (_context13.prev = _context13.next) {
            case 0:
              _context13.prev = 0;
              if (!_this13.isAuthenticated) {
                _context13.next = 3;
                break;
              }
              return _context13.abrupt("return");
            case 3:
              _this13.$console.log("TAMOR_MODAL:: setAuthInfo");
              _this13.setLoading();
              _this13.initUserAPIData();
              _context13.next = 8;
              return _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["default"].loadUserData();
            case 8:
              res = _context13.sent;
              _this13.authcheck = true;
              _this13.authcheckUsr = res.data;
              _this13.authcheckStatus = res.status;
              // 
              if (!(_this13.authcheckStatus === 401)) {
                _context13.next = 21;
                break;
              }
              _this13.$console.log("UN_AUTHORIZE");
              _this13.$toasted.show("Vous n'êtes pas authentifié");
              _context13.next = 17;
              return _this13.$sleep(2000);
            case 17:
              _this13.$toasted.show("Vous allez être redirigé vers l'espace d'authentification !");
              _context13.next = 20;
              return _this13.$sleep(3000);
            case 20:
              window.location.href = "/login";
            case 21:
              _this13.$console.log("TAMOR_MODAL:: setAuthInfo authenticated");
              // this.$store.dispatch("auth/login", res.data?.user)
              // this.$store.dispatch("auth/setDashboardData", res.data)
              _context13.next = 27;
              break;
            case 24:
              _context13.prev = 24;
              _context13.t0 = _context13["catch"](0);
              window.location.href = "/login";
            case 27:
              _context13.prev = 27;
              _this13.clearLoading();
              return _context13.finish(27);
            case 30:
            case "end":
              return _context13.stop();
          }
        }, _callee13, null, [[0, 24, 27, 30]]);
      }))();
    },
    setError: function setError() {
      var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var hint = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      this.errorMessage = message !== null && message !== void 0 ? message : "Une erreur s'est produite";
      this.errorHint = hint !== null && hint !== void 0 ? hint : "Veuillez réessayer dans quelques minutes";
      this.clearLoading();
    },
    setLoading: function setLoading() {
      var _this14 = this;
      this.isLoading = true;
      this.api_action = null;
      var hints = ["Veuillez patienter", "Traitement en cours", "Ceci peut prendre une minute", "Merci de patienter svp", "Opération inhabituellement longue", "Veuillez recharger la page"];
      // let index = 0;
      // const interval = setInterval(() => {
      //   this.loadingHint = hints[index]
      //   index++;
      // }, 100000);
      setTimeout(function () {
        _this14.loadingHint = "Veuillez patienter";
      }, 10000);
    },
    setModeReupload: function setModeReupload() {
      this.api_action = 'REUPLOAD';
      this.setError("Lignes du TAMOR vides", "Veuillez réupploader un fichier valide");
      this.showFileInputForm = true;
    },
    setStates: function setStates() {
      var _this$CONFIG6,
        _this$tamorData,
        _this15 = this;
      var val = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (_this$CONFIG6 = this.CONFIG) === null || _this$CONFIG6 === void 0 ? void 0 : _this$CONFIG6.DEFAULT_NULL_INDICATOR;
      this.$console.log(">>setStates ", this.state);
      (_this$tamorData = this.tamorData) === null || _this$tamorData === void 0 || (_this$tamorData = _this$tamorData.rows) === null || _this$tamorData === void 0 || _this$tamorData.forEach(function (row) {
        _this15.toggleState(row === null || row === void 0 ? void 0 : row.date_echeance, val);
      });
      this.$console.log("<<setStates ", this.state);
    },
    setupTAMORInDossierCredit: function setupTAMORInDossierCredit() {
      var _arguments7 = arguments,
        _this16 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee14() {
        var _ref10, cred_pub_key, file_url, with_data, formData, res, _res$message3, _res$message4, errorMessage, message, _tamor$tamor_data, _tamor$tamor_data2, tamor, _errorMessage2;
        return _regeneratorRuntime().wrap(function _callee14$(_context14) {
          while (1) switch (_context14.prev = _context14.next) {
            case 0:
              _ref10 = _arguments7.length > 0 && _arguments7[0] !== undefined ? _arguments7[0] : {}, cred_pub_key = _ref10.cred_pub_key, file_url = _ref10.file_url;
              if (!_this16.isLoadingSetupTamor) {
                _context14.next = 3;
                break;
              }
              return _context14.abrupt("return");
            case 3:
              _this16.isLoadingSetupTamor = true;
              // 
              _context14.prev = 4;
              with_data = true;
              formData = {
                cred_pub_key: cred_pub_key,
                file_url: file_url,
                user: _this16.userAPIDATA,
                with_data: with_data
              };
              _this16.$console.log("setupTAMORInDossierCredit", formData);
              _context14.next = 10;
              return _services_recouvrement_service_js__WEBPACK_IMPORTED_MODULE_0__["default"].setupTAMOR(formData);
            case 10:
              res = _context14.sent;
              _this16.$console.log("<< setupTAMORInDossierCredit", res);

              // this.clearInputForm(true);
              if (res !== null && res !== void 0 && res.is_success) {
                _context14.next = 24;
                break;
              }
              errorMessage = (_res$message3 = res === null || res === void 0 ? void 0 : res.message) !== null && _res$message3 !== void 0 ? _res$message3 : "Une erreur s'est produite. Veuillez réessayer";
              _this16.$toasted.show(errorMessage);
              if (res !== null && res !== void 0 && res.action) {
                _this16.api_action = res === null || res === void 0 ? void 0 : res.action;
              }
              _this16.toggleInputFileState('isUploaded', false);
              _this16.toggleInputFileState('hasUploadError', true);
              _this16.toggleInputUploadingState('hasUploadError', true);
              message = (_res$message4 = res === null || res === void 0 ? void 0 : res.message) !== null && _res$message4 !== void 0 ? _res$message4 : "Les lignes du TAMOR ne sont pas lisibles";
              if ((res === null || res === void 0 ? void 0 : res.code) == 'TAMOR_READ_ERROR') {
                _this16.TAMOR_READ_ERROR = true;
                message += ". \nVeuillez uploader un fichier excel contenant le TAMOR dans le format recommandé svp";
              }

              // message += "\n Si l'erreur persiste, contactez un support"
              // 
              _this16.toggleInputFileState('uploadErrors', [{
                code: 500,
                message: message
              }]);
              // 

              _this16.isLoadingSetupTamor = false;
              return _context14.abrupt("return");
            case 24:
              if (!(res !== null && res !== void 0 && res.data)) {
                _context14.next = 42;
                break;
              }
              _this16.setLoading();
              _this16.clearError();
              _context14.next = 29;
              return _this16.$sleep(1000);
            case 29:
              // 
              _this16.clearLoading();
              // 
              tamor = res === null || res === void 0 ? void 0 : res.data;
              if (!(!(tamor !== null && tamor !== void 0 && (_tamor$tamor_data = tamor.tamor_data) !== null && _tamor$tamor_data !== void 0 && _tamor$tamor_data.headers) && !(tamor !== null && tamor !== void 0 && (_tamor$tamor_data2 = tamor.tamor_data) !== null && _tamor$tamor_data2 !== void 0 && _tamor$tamor_data2.rows))) {
                _context14.next = 38;
                break;
              }
              _this16.setError("Erreur de lecture du TAMOR", "Les lignes du TAMOR ne sont pas lisibles. Veuillez reuploader le fichier");
              _this16.toggleInputFileState('isUploaded', false);
              _this16.toggleInputFileState('hasUploadError', true);
              _this16.toggleInputUploadingState('hasUploadError', true);
              _this16.toggleInputFileState('uploadErrors', [{
                code: 500,
                message: "Les lignes du TAMOR ne sont pas lisibles"
              }]);
              return _context14.abrupt("return");
            case 38:
              _this16.tamor = tamor;
              _this16.clearInputForm(true);
              _context14.next = 44;
              break;
            case 42:
              _this16.$toasted.show("TAMOR ajouté !");
              _this16.initApp();
            case 44:
              _context14.next = 51;
              break;
            case 46:
              _context14.prev = 46;
              _context14.t0 = _context14["catch"](4);
              _errorMessage2 = "Une erreur s'est produite. Veuillez réessayer";
              _this16.$toasted.show(_errorMessage2);
              _this16.$console.log("xx error", _context14.t0);
            case 51:
              _context14.prev = 51;
              _this16.isLoadingSetupTamor = false;
              return _context14.finish(51);
            case 54:
            case "end":
              return _context14.stop();
          }
        }, _callee14, null, [[4, 46, 51, 54]]);
      }))();
    },
    shortenFileName: function shortenFileName(_ref11) {
      var name = _ref11.name;
      // ?- ({abcdefghijklmnopqrstuvxyz}) => abcdef....qrstuvxyz
      return (name === null || name === void 0 ? void 0 : name.substring(0, Math.floor(this.MAX_NAME_LENGTH / 2))) + this.SHORT_NAME_SEPARATOR + (name === null || name === void 0 ? void 0 : name.substring((name === null || name === void 0 ? void 0 : name.length) - 1 - Math.floor(this.MAX_NAME_LENGTH / 2), (name === null || name === void 0 ? void 0 : name.length) - 1));
    },
    switchTab: function switchTab(_ref12) {
      var slug = _ref12.slug;
      this.$console.log("switchTab", slug);
      this.currentTab = slug;

      // this.$router.push({ query: { tab: comp_name } });
    },
    textColor: function textColor(date) {
      var _this$CONFIG7, _this$CONFIG8;
      if (this.echeanceAction(date) == ((_this$CONFIG7 = this.CONFIG) === null || _this$CONFIG7 === void 0 ? void 0 : _this$CONFIG7.REMINDER)) {
        return 'warning';
      }
      if (this.echeanceAction(date) == ((_this$CONFIG8 = this.CONFIG) === null || _this$CONFIG8 === void 0 ? void 0 : _this$CONFIG8.WARNING)) {
        return 'danger';
      }
      return null;
    },
    toggleInputFileState: function toggleInputFileState(field, value) {
      // this.$console.log("toggleInputFileState", field, value)
      var data = _objectSpread({}, this.fileToUpload);
      data[field] = value;
      this.fileToUpload = data;
    },
    toggleInputUploadingState: function toggleInputUploadingState(field, value) {
      var data = _objectSpread({}, this.isLoadingInputUpload);
      data[field] = value;
      this.isLoadingInputUpload = data;
    },
    toggleRenamingForm: function toggleRenamingForm() {
      var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      if (this.isLoadingInput) return;
      if (state == false) {
        if (!!value == false) {
          this.$toasted.show("Veuillez ajouter un nom au fichier");
          var n = 1;
          this.toggleInputFileState('name', 'fichier_' + n);
        }
      }
      this.toggleInputFileState('renaming', state);
    },
    toggleSelectEcheance: function toggleSelectEcheance() {
      var _echeance;
      var echeance = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      // this.$console.log("toggleSelectEcheance", !!echeance);
      if (!!this.selectedEcheanceNumber && this.selectedEcheanceNumber == ((_echeance = echeance) === null || _echeance === void 0 ? void 0 : _echeance.n_ech)) {
        echeance = null;
      }
      this.selectEcheance(echeance, index);
    },
    toggleState: function toggleState(key, val) {
      this.$console.log("toggleState", key, val);
      var data = _objectSpread({}, this.state);
      data[key] = val;
      this.state = data;
      this.$console.log("toggleState", this.state[key]);
    },
    unSelectEcheance: function unSelectEcheance() {
      // this.$console.log("unSelectEcheance");

      this.selectedEcheance = null;
      this.selectedEcheanceNumber = null;
      this.selectedEcheanceIndex = null;
    },
    uploadTAMOR: function uploadTAMOR() {
      var _this$user,
        _this$user2,
        _this$user3,
        _this$user4,
        _this$fileToUpload$na,
        _this17 = this;
      this.$console.log("Uploading TAMOR");
      if (!this.cred_pub_key) {
        this.$toasted.show("Dossier non trouvé. Veuiller rafraichir la page svp");
        this.toggleInputFileState('uploadErrors', ["Dossier non trouvé. Veuillez rafraichir la page svp"]);
        return;
      }
      if (!this.authUser) {
        this.$toasted.show("Vous n'êtes pas authentifié. Veuiller rafraichir la page svp");
        return;
      }
      //
      this.isLoadingInput = true;
      this.toggleInputFileState('hasUploadError', false);
      this.toggleInputFileState('uploadErrors', []);
      this.toggleInputFileState('uploadPercentage', 0);
      this.toggleInputUploadingState('hasUploadError', false);
      var data = new FormData();
      // 
      data.append('user_id', (_this$user = this.user) === null || _this$user === void 0 ? void 0 : _this$user.user_id);
      data.append('entity_id', (_this$user2 = this.user) === null || _this$user2 === void 0 ? void 0 : _this$user2.type_entite);
      data.append('entity_name', (_this$user3 = this.user) === null || _this$user3 === void 0 ? void 0 : _this$user3.nom_entite);
      data.append('application_id', (_this$user4 = this.user) === null || _this$user4 === void 0 ? void 0 : _this$user4.app_id);
      data.append('file_identity', this.cred_pub_key);
      // 
      // data.append('file_template_id', null)
      // data.append('extra_file_template_id', template?.id)
      // data.append('extra_file_template_name', template?.name)
      // data.append('extra_file_template_slug', template?.slug)
      // 
      data.append('file_url', this.fileToUpload.file);
      data.append('file_name', (_this$fileToUpload$na = this.fileToUpload.name) === null || _this$fileToUpload$na === void 0 ? void 0 : _this$fileToUpload$na.replace(/\s/g, '_'));
      data.append('file_ext', this.fileToUpload.ext);
      data.append('parameters', JSON.stringify({
        url: this.connectsHost + 'api/upload-file-tamor',
        method: 'POST'
      }));
      var headers = {
        'Content-Type': 'multipart/form-data'
      };
      _services_proxy_service__WEBPACK_IMPORTED_MODULE_5__["default"].proxyRequestByFormData(data, {
        callback: function (progressEvent) {
          var uploadPercentage = parseInt(Math.round(progressEvent.loaded / progressEvent.total * 100));
          this.toggleInputFileState('uploadPercentage', uploadPercentage);
        }.bind(this)
      }).then(function (res) {
        var _file$file_url$split$, _this17$fileToUpload;
        res.data = JSON.parse(res.data);
        _this17.$console.log("data", res.data);
        var resp = res.data;
        if (!(resp !== null && resp !== void 0 && resp.is_success)) {
          var _resp$message;
          _this17.$toasted.show((_resp$message = resp === null || resp === void 0 ? void 0 : resp.message) !== null && _resp$message !== void 0 ? _resp$message : "Une erreur s'est produite");
          return;
        }
        var file = resp.data;
        var ext = (_file$file_url$split$ = file.file_url.split('.').at(-1)) === null || _file$file_url$split$ === void 0 ? void 0 : _file$file_url$split$.toLowerCase();
        file.ext = ext;
        _this17.toggleInputFileState('isUploaded', true);
        var file_url = file === null || file === void 0 ? void 0 : file.file_url;
        if (file_url.startsWith('https://') || file_url.startsWith('http://')) {} else {
          file_url = "http" + "://" + file_url;
        }

        // update dossier credit
        _this17.fileToUpload.file_url = file_url;
        _this17.setupTAMORInDossierCredit({
          cred_pub_key: _this17.cred_pub_key,
          file_url: (_this17$fileToUpload = _this17.fileToUpload) === null || _this17$fileToUpload === void 0 ? void 0 : _this17$fileToUpload.file_url
        });
        // TODO read tamor file
        _this17.isLoadingInput = false;
      })["catch"](function (err) {
        _this17.$console.error(err);
        _this17.toggleInputFileState('isUploaded', false);
        _this17.toggleInputFileState('hasUploadError', true);
        _this17.toggleInputFileState('uploadPercentage', 100);
        _this17.toggleInputUploadingState('hasUploadError', true);
        _this17.toggleInputFileState('uploadErrors', [{
          code: 500,
          message: "Erreur sur l'upload."
        }]);
        _this17.isLoadingInput = false;
      })["finally"](function () {
        _this17.isLoadingInput = false;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/modals/TamorModal_modal_body.vue?vue&type=template&id=aab697aa&scoped=true":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/modals/TamorModal_modal_body.vue?vue&type=template&id=aab697aa&scoped=true ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
var render = function render() {
  var _vm$fileToUpload, _vm$fileToUpload2, _vm$fileToUpload3, _vm$fileToUpload4, _ref, _ref2, _vm$fileToUpload$ext, _ref3, _ref4, _vm$fileToUpload5, _vm$fileToUpload6, _vm$isLoadingInputUpl, _vm$isLoadingInputUpl2, _vm$fileToUpload7, _vm$tamorData, _vm$tamorData2, _vm$tamorData3, _vm$tamorData4, _vm$selectedEcheance, _vm$tamorData5, _vm$selectedEcheance2, _vm$selectedEcheance3, _vm$dashboardInfo$sig, _vm$dashboardInfo, _vm$selectedEcheance4, _vm$dashboardInfo$sig2, _vm$dashboardInfo2, _vm$selectedEcheance5, _vm$dashboardInfo$sig3, _vm$dashboardInfo3, _vm$selectedEcheance6, _vm$dashboardInfo$sig4, _vm$dashboardInfo4, _vm$selectedEcheance$, _vm$selectedEcheance7, _vm$selectedEcheance8, _vm$selectedEcheance9, _vm$selectedEcheance0, _vm$selectedEcheance$2, _vm$selectedEcheance1, _vm$selectedEcheance10, _vm$selectedEcheance11, _vm$selectedEcheance12, _vm$selectedEcheance13, _vm$selectedEcheance14, _vm$selectedEcheance$3, _vm$selectedEcheance15, _vm$selectedEcheance16, _vm$selectedEcheance19, _vm$getRemainingDaysT4, _vm$selectedEcheance20, _vm$selectedEcheance$4, _vm$selectedEcheance21, _vm$CONFIG13, _vm$selectedEcheance22, _vm$selectedEcheance23, _vm$selectedEcheance$5, _vm$selectedEcheance24, _vm$CONFIG14, _vm$selectedEcheance25, _vm$getRemainingDaysT5, _vm$selectedEcheance26, _vm$selectedEcheance27, _vm$selectedEcheance28, _vm$selectedEcheance29, _vm$selectedEcheance30, _vm$state2, _vm$selectedEcheance31, _vm$selectedEcheance32, _vm$selectedEcheance33, _vm$CONFIG15, _vm$selectedEcheance35, _vm$selectedEcheance36, _vm$selectedEcheance37, _vm$selectedEcheance$6, _vm$selectedEcheance38, _vm$selectedEcheance39;
  var _vm = this,
    _c = _vm._self._c;
  return _c("modal", {
    staticClass: "mx-auto",
    attrs: {
      name: "tamor_modal",
      width: 1200,
      height: "auto",
      adaptive: true,
      resizable: false,
      draggable: false
    },
    on: {
      close: function close($event) {
        return _vm.onClose();
      }
    }
  }, [_c("div", {
    staticClass: "container m-0 bg-white border mx-auto p-3",
    staticStyle: {
      height: "90vh",
      "overflow-y": "auto",
      "overflow-x": "hidden",
      "z-index": "9999"
    }
  }, [_c("div", {
    staticClass: "card border-0 mx-auto d-flex flex-column",
    staticStyle: {
      width: "100%",
      margin: "0 auto"
    }
  }, [_c("div", {
    staticClass: "modal-header d-flex align-items-center p-3 bg-white border-b",
    staticStyle: {
      position: "sticky",
      top: "0",
      "z-index": "5"
    }
  }, [_c("h5", {
    staticClass: "modal-title ps-3",
    attrs: {
      id: "explorer"
    }
  }, [_vm._v("\n                TAMOR\n            ")]), _vm._v(" "), _c("div", {
    staticClass: "d-flex align-items-center gap-3"
  }, [_c("button", {
    staticClass: "btn-close",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.$modal.hide("tamor_modal");
      }
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "modal-body pb-3"
  }, [_vm.isLoading ? [_c("div", {
    staticClass: "d-flex flex-column gap-1 justify-content-center text-center py-5 align-items-center text-secondary"
  }, [_c("span", {
    staticClass: "spinner-border spinner-border-lg"
  }), _vm._v(" "), _c("h3", {
    staticClass: "mt-3 mb-0"
  }, [_vm._v(_vm._s(_vm.loadingMessage)), _c("loading-dots")], 1), _vm._v(" "), _vm.loadingHint ? _c("h5", [_vm._v(_vm._s(_vm.loadingHint))]) : _vm._e()])] : [_vm.errorMessage ? [_c("div", {
    staticClass: "d-flex flex-column text-secondary justify-content-center align-items-center text-center py-5"
  }, [_c("i", {
    staticClass: "icofont-warning icofont-4x"
  }), _vm._v(" "), _c("h4", {
    staticClass: "my-2 mb-1"
  }, [_vm._v("\n                      " + _vm._s(_vm.errorMessage) + "\n                  ")]), _vm._v(" "), _vm.errorHint ? _c("h6", [_vm._v(_vm._s(_vm.errorHint))]) : _vm._e(), _vm._v(" "), _vm.showFileInputForm ? _c("section", {
    staticClass: "form-group py-1 pb-2 border rounded bg-light"
  }, [_c("h5", {
    staticClass: "my-2 mb-1"
  }, [_vm._v("Uploader le Fichier TAMOR")]), _vm._v(" "), !_vm.fileToUpload ? _c("div", {
    staticClass: "px-3"
  }, [_c("div", {
    staticClass: "input-group"
  }, [_c("input", {
    staticClass: "d-none",
    attrs: {
      id: "tamor_file_input",
      type: "file",
      accept: _vm.extensions.map(function (k) {
        return "." + k;
      }).join(",")
    },
    on: {
      change: _vm.onFileInputChanged
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "drop-zone fs-5 mt-2",
    "class": {
      expanded: _vm.fileToUpload != null || _vm.isDragging
    },
    on: {
      dragover: function dragover($event) {
        $event.preventDefault();
      },
      dragenter: function dragenter($event) {
        $event.preventDefault();
        return _vm.onDragEnter();
      },
      dragleave: function dragleave($event) {
        $event.preventDefault();
        return _vm.onDragLeave();
      },
      drop: _vm.onDrop,
      click: _vm.openFileDialog
    }
  }, [_vm.isDragging ? _c("span", [_vm._v("\n                                    Déposez le fichier ici\n                                ")]) : _c("span", [_vm._v("\n                                    Glissez le fichier ou cliquez ici\n                                ")])])])]) : _vm._e(), _vm._v(" "), !_vm.fileToUpload && _vm.isLoadingInput == true ? _c("div", {
    staticClass: "d-flex justify-content-center align-items-center gap-2 px-3"
  }, [_c("div", {
    staticClass: "spinner-border spinner-border-sm"
  }), _vm._v(" "), _c("span", {
    staticClass: "fs-5"
  }, [_vm._v("\n                            Chargement en cours ...\n                        ")])]) : _vm._e(), _vm._v(" "), _vm.fileToUpload != null ? _c("div", {
    staticClass: "mt-2"
  }, [_c("div", {
    staticClass: "d-flex justify-content-center align-items-center my-2 px-3"
  }, [_vm._v("\n                              Fichier ajouté\n                        ")]), _vm._v(" "), _c("div", {
    staticClass: "p-1 mx-3 rounded"
  }, [_c("div", {
    staticClass: "relative transition-color bg-white border rounded p-2 mb-2",
    "class": [((_vm$fileToUpload = _vm.fileToUpload) === null || _vm$fileToUpload === void 0 ? void 0 : _vm$fileToUpload.errors.length) > 0 ? "border border-danger" : "border-secondary"]
  }, [_c("div", {
    staticClass: "d-flex gap-2"
  }, [_c("span", {
    staticClass: "rounded border p-2 file-thumbnail d-flex justify-content-center align-items-center",
    "class": [((_vm$fileToUpload2 = _vm.fileToUpload) === null || _vm$fileToUpload2 === void 0 ? void 0 : _vm$fileToUpload2.errors.length) > 0 ? "border border-danger" : ""],
    staticStyle: {
      overflow: "hidden"
    }
  }, [_c("span", {
    staticClass: "text-uppercase px-2 text-secondary",
    "class": [((_vm$fileToUpload3 = _vm.fileToUpload) === null || _vm$fileToUpload3 === void 0 || (_vm$fileToUpload3 = _vm$fileToUpload3.ext) === null || _vm$fileToUpload3 === void 0 ? void 0 : _vm$fileToUpload3.length) < 4 ? "fs-4" : "fs-6", !_vm.authorizedExt.includes(_vm.fileToUpload.ext) ? "text-danger" : ""]
  }, [_vm._v("\n                                            " + _vm._s((_vm$fileToUpload4 = _vm.fileToUpload) === null || _vm$fileToUpload4 === void 0 ? void 0 : _vm$fileToUpload4.ext) + "\n                                        ")])]), _vm._v(" "), _c("div", {
    staticClass: "col d-flex flex-column gap-1"
  }, [_c("div", {
    staticClass: "d-flex gap-3 justify-content-between align-items-start"
  }, [_c("div", {
    staticClass: "col d-flex",
    "class": [_vm.canEditFileName(_vm.fileToUpload) ? "cursor-edit" : ""],
    staticStyle: {
      "word-break": "break-all"
    },
    attrs: {
      title: (!_vm.fileToUpload.isUploaded ? "Modifier " : "") + _vm.fileToUpload.name
    },
    on: {
      click: function click($event) {
        _vm.canEditFileName(_vm.fileToUpload) ? _vm.toggleRenamingForm() : null;
      }
    }
  }, [_vm.canShowFileEditInput(_vm.fileToUpload) ? _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.fileToUpload.name,
      expression: "fileToUpload.name"
    }],
    staticClass: "form-control mb-1",
    attrs: {
      type: "text"
    },
    domProps: {
      value: _vm.fileToUpload.name
    },
    on: {
      keyup: [function ($event) {
        if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) return null;
        return _vm.toggleRenamingForm(false, _vm.fileToUpload.name);
      }, function ($event) {
        if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "esc", 27, $event.key, ["Esc", "Escape"])) return null;
        return _vm.toggleRenamingForm(false, _vm.fileToUpload.name);
      }],
      blur: function blur($event) {
        return _vm.toggleRenamingForm(false, _vm.fileToUpload.name);
      },
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.fileToUpload, "name", $event.target.value);
      }
    }
  }) : _c("span", {
    on: {
      click: function click($event) {
        return _vm.toggleRenamingForm();
      }
    }
  }, [_vm._v("\n                                                    " + _vm._s(_vm.formatFileName(_vm.fileToUpload)) + "\n                                                ")])]), _vm._v(" "), !_vm.isLoadingInput ? _c("span", {
    staticClass: "delete-icon-btn transition-color text-danger p-1 rounded no-shrink",
    style: "visibility: " + (!_vm.isLoadingInput && !_vm.fileToUpload.isUploaded || _vm.fileToUpload.hasUploadError ? "visible" : "hidden") + ";",
    attrs: {
      title: "Supprimer le fichier " + _vm.fileToUpload.file.name
    },
    on: {
      click: function click($event) {
        return _vm.clearInputForm();
      }
    }
  }, [_c("i", {
    staticClass: "icofont-trash"
  }), _vm._v(" "), _c("i", {
    staticClass: "icofont-ui-delete"
  })]) : _vm._e()]), _vm._v(" "), _c("small", {
    staticClass: "d-flex gap-3 justify-content-between align-items-center"
  }, [_c("div", {
    staticClass: "d-flex flex-wrap text-secondary",
    staticStyle: {
      gap: "0rem 1rem"
    }
  }, [_c("div", {
    staticClass: "transition-color",
    "class": {
      "text-danger": !_vm.authorizedExt.includes(_vm.fileToUpload.ext)
    }
  }, [_vm._v("\n                                                    Type:\n                                                    "), !_vm.authorizedExt.includes(_vm.fileToUpload.ext) ? _c("i", {
    staticClass: "icofont-exclamation-tringle text-danger"
  }) : _c("i", {
    "class": {
      "icofont-file-jpg": (_ref = ["png", "webp", "jpg", "jpeg"]) === null || _ref === void 0 ? void 0 : _ref.includes(_vm.fileToUpload.ext),
      "icofont-file-spreadsheet": (_ref2 = ["xls", "xlsx"]) === null || _ref2 === void 0 ? void 0 : _ref2.includes(_vm.fileToUpload.ext),
      "icofont-file-pdf": ((_vm$fileToUpload$ext = _vm.fileToUpload.ext) === null || _vm$fileToUpload$ext === void 0 ? void 0 : _vm$fileToUpload$ext.toLowerCase()) === "pdf",
      "icofont-file-word": (_ref3 = ["doc", "docx"]) === null || _ref3 === void 0 ? void 0 : _ref3.includes(_vm.fileToUpload.ext),
      "icofont-file-powerpoint": (_ref4 = ["ppt", "pptx"]) === null || _ref4 === void 0 ? void 0 : _ref4.includes(_vm.fileToUpload.ext)
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "transition-color",
    "class": {
      "text-danger": _vm.fileToUpload.errors.find(function (e) {
        return e.code == 413;
      })
    }
  }, [_vm._v("\n                                                    Taille : " + _vm._s((_vm.fileToUpload.file.size / 1048576).toFixed(2)) + " Mo\n                                                ")])]), _vm._v(" "), _c("div", [_c("b", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.fileToUpload.isUploaded == true,
      expression: "fileToUpload.isUploaded == true"
    }],
    staticClass: "transition-color text-success"
  }, [_vm._v("Envoyé")])])]), _vm._v(" "), _vm.isLoadingInput === true || _vm.fileToUpload.isUploaded != null ? _c("small", [_c("div", {
    staticClass: "progress mt-1",
    staticStyle: {
      height: ".5rem!important"
    }
  }, [_c("div", {
    staticClass: "progress-bar",
    "class": {
      "bg-success": _vm.fileToUpload.isUploaded,
      "progress-bar-striped progress-bar-animated": _vm.fileToUpload.isUploaded == null,
      "bg-danger": _vm.fileToUpload.hasUploadError
    },
    style: "width: " + _vm.fileToUpload.uploadPercentage + "%",
    attrs: {
      role: "progressbar",
      "aria-valuenow": _vm.fileToUpload.uploadPercentage,
      "aria-valuemin": "0",
      "aria-valuemax": "100"
    }
  })])]) : _vm._e(), _vm._v(" "), _c("small", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.fileToUpload.errors,
      expression: "fileToUpload.errors"
    }],
    staticClass: "transition-color text-left"
  }, _vm._l(_vm.fileToUpload.errors, function (err, k) {
    return _c("b", {
      key: k,
      staticClass: "text-danger"
    }, [_vm._v("\n                                                " + _vm._s(err.message) + " "), _c("br")]);
  }), 0), _vm._v(" "), _c("small", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.fileToUpload.uploadErrors,
      expression: "fileToUpload.uploadErrors"
    }],
    staticClass: "transition-color"
  }, _vm._l(_vm.fileToUpload.uploadErrors, function (err, k) {
    return _c("b", {
      key: k,
      staticClass: "text-danger"
    }, [k == 0 && _vm.fileToUpload.hasUploadError ? _c("div", {
      staticClass: "d-flex justify-content-between align-items-center text-start"
    }, [_c("span", [_vm._v("\n                                                        " + _vm._s(err.message) + "\n                                                    ")]), _vm._v(" "), _c("span", {
      staticClass: "icofont icofont-refresh cursor-pointer text-black hover-spin",
      attrs: {
        title: "Renvoyer ce fichier"
      },
      on: {
        click: function click($event) {
          return _vm.uploadTAMOR();
        }
      }
    })]) : _c("span", [_vm._v("\n                                                    " + _vm._s(err.message) + " "), _c("br")])]);
  }), 0)])])])]), _vm._v(" "), _vm.isLoadingInput == true ? _c("div", {
    staticClass: "d-flex justify-content-center align-items-center gap-2 px-3"
  }, [_c("div", {
    staticClass: "spinner-border spinner-border-sm"
  }), _vm._v(" "), _c("span", {
    staticClass: "fs-5"
  }, [_vm._v("\n                              Chargement en cours ...\n                          ")])]) : _c("div", {
    staticClass: "d-flex gap-2 px-3"
  }, [_vm.TAMOR_READ_ERROR ? _c("a", {
    staticClass: "btn btn-deep-blue d-flex justify-content-center align-items-center w-100 mt-2",
    on: {
      click: function click($event) {
        return _vm.sendAnotherFile();
      }
    }
  }, [_vm._v("\n                                Envoyer un autre fichier\n                            ")]) : _c("a", {
    staticClass: "btn d-flex justify-content-center align-items-center w-100 mt-2",
    "class": [((_vm$fileToUpload5 = _vm.fileToUpload) === null || _vm$fileToUpload5 === void 0 ? void 0 : _vm$fileToUpload5.isUploaded) == true ? " btn-success" : "bg-deep-blue"],
    on: {
      click: function click($event) {
        return _vm.sendFiles();
      }
    }
  }, [((_vm$fileToUpload6 = _vm.fileToUpload) === null || _vm$fileToUpload6 === void 0 ? void 0 : _vm$fileToUpload6.isUploaded) == true ? _c("span", [_vm.isLoadingSetupTamor ? [_vm._v("\n                                    Rechargement du TAMOR"), _c("span", {
    domProps: {
      innerHTML: _vm._s(_vm.loadingDots)
    }
  })] : [_vm._v("\n                                    Recharger le TAMOR\n                                  ")]], 2) : _c("span", [((_vm$isLoadingInputUpl = _vm.isLoadingInputUpload) === null || _vm$isLoadingInputUpl === void 0 ? void 0 : _vm$isLoadingInputUpl.isLoading) == true ? _c("div", {
    staticClass: "d-flex gap-2 align-items-center justify-content-center"
  }, [_c("span", {
    staticClass: "spinner-border spinner-border-sm"
  }), _vm._v(" "), _c("span", [_vm._v("Envoi du fichier en cours...")])]) : _c("div", [_vm._v("\n                                        " + _vm._s(((_vm$isLoadingInputUpl2 = _vm.isLoadingInputUpload) === null || _vm$isLoadingInputUpl2 === void 0 ? void 0 : _vm$isLoadingInputUpl2.hasUploadError) == true ? "Renvoyer" : "Envoyer") + " le fichier \n                                    ")])])])])]) : _vm._e()]) : _vm._e(), _vm._v(" "), !_vm.showFileInputForm ? _c("button", {
    staticClass: "mt-2 btn btn-sm btn-secondary d-flex gap-2 justify-content-center align-items-center",
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.refresh();
      }
    }
  }, [_vm.api_action == "REUPLOAD" ? _c("i", {
    staticClass: "icofont-upload-alt"
  }) : _c("i", {
    staticClass: "icofont-refresh"
  }), _vm._v(" "), _c("span", [_vm._v("\n                      " + _vm._s(_vm.api_action == "REUPLOAD" ? "Uploader le fichier TAMOR" : "Relancer le TAMOR") + "\n                    ")])]) : [!((_vm$fileToUpload7 = _vm.fileToUpload) !== null && _vm$fileToUpload7 !== void 0 && _vm$fileToUpload7.isUploaded) ? _c("button", {
    staticClass: "mt-2 btn btn-sm btn-danger d-flex gap-2 justify-content-center align-items-center",
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.clearInputForm();
      }
    }
  }, [_vm._v("\n                      Annuler                  \n                    ")]) : _vm._e()]], 2)] : [_c("div", {
    staticClass: "row mb-3"
  }, [_c("div", {
    staticClass: "col relative"
  }, [_c("h3", {
    staticClass: "text-center my-3",
    attrs: {
      id: "title_tamor_modal"
    }
  }, [_vm._v("Simulation du tableau d'amortissement")]), _vm._v(" "), _c("button", {
    staticClass: "absolute btn btn-sm hover-white",
    staticStyle: {
      top: "50%",
      right: "0px",
      transform: "translateY(-50%)"
    },
    on: {
      click: function click($event) {
        return _vm.refresh();
      }
    }
  }, [_c("i", {
    staticClass: "icofont-refresh"
  }), _vm._v("\n                    Relancer\n                  ")])])]), _vm._v(" "), _c("main", [_c("div", {
    staticClass: "col-12 d-flex border"
  }, _vm._l(_vm.navigationTabs, function (tab, i) {
    return _c("div", {
      key: i,
      staticClass: "col cursor-pointer d-flex justify-content-center align-items-center text-center bg-deep-blue p-2",
      "class": [_vm.currentTab == (tab === null || tab === void 0 ? void 0 : tab.slug) ? "bg-white text-orange fw-semibold" : ""],
      on: {
        click: function click($event) {
          return _vm.switchTab(tab);
        }
      }
    }, [_vm._v("\n                        " + _vm._s(tab === null || tab === void 0 ? void 0 : tab.title) + "\n                    ")]);
  }), 0), _vm._v(" "), _c("div", {
    staticClass: "tab-content bg-white",
    attrs: {
      id: "TamorModalTabViewPanes"
    }
  }, [_vm.currentTab == "tab_tamor" ? _c("div", {
    staticClass: "transition-color tab-pane fade show active",
    attrs: {
      id: "tamor-tabview-tab-pane",
      role: "tabpanel",
      "aria-labelledby": "tamor-tabview-tab",
      tabindex: "0"
    }
  }, [_c("section", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col"
  }, [_vm.isTamorDataValid ? _c("table", {
    staticClass: "table table-bordered table-responsive mb-0"
  }, [_c("thead", [_c("tr", [_vm._l((_vm$tamorData = _vm.tamorData) === null || _vm$tamorData === void 0 ? void 0 : _vm$tamorData.headers, function (header, i) {
    return _c("th", {
      key: i
    }, [_vm._v(_vm._s(header))]);
  }), _vm._v(" "), _c("th", {
    staticClass: "text-center"
  }, [_vm._v("Rappels")])], 2)]), _vm._v(" "), _c("tbody", {}, _vm._l((_vm$tamorData2 = _vm.tamorData) === null || _vm$tamorData2 === void 0 ? void 0 : _vm$tamorData2.rows, function (row, i) {
    var _row$n_ech, _vm$CONFIG, _row$n_ral, _vm$CONFIG2, _row$date_echeance, _vm$CONFIG3, _vm$CONFIG4, _vm$CONFIG5, _vm$CONFIG6, _vm$CONFIG7, _vm$CONFIG8, _vm$CONFIG9, _row$reminder_data$re, _row$reminder_data, _row$reminder_data2, _row$reminder_data3, _row$reminder_data4, _row$reminder_data5, _vm$getRemainingDaysT, _row$reminder_data6, _row$reminder_data$re2, _row$reminder_data7, _vm$CONFIG0, _row$reminder_data8, _vm$getRemainingDaysT2, _row$reminder_data9, _row$reminder_data0, _row$reminder_data1, _row$reminder_data10, _row$reminder_data$ne, _row$reminder_data11, _vm$CONFIG1, _row$reminder_data12, _vm$getRemainingDaysT3, _row$reminder_data13, _vm$state, _row$reminder_data14, _vm$CONFIG10, _row$reminder_data15;
    return _c("tr", {
      key: i,
      staticClass: "hover-white transition-color",
      attrs: {
        title: "Afficher les rappels cette échéance"
      }
    }, [_c("td", {
      staticClass: "text-right",
      on: {
        click: function click($event) {
          return _vm.selectEcheance(row, i);
        }
      }
    }, [_vm._v(_vm._s((_row$n_ech = row === null || row === void 0 ? void 0 : row.n_ech) !== null && _row$n_ech !== void 0 ? _row$n_ech : (_vm$CONFIG = _vm.CONFIG) === null || _vm$CONFIG === void 0 ? void 0 : _vm$CONFIG.NULL_INDICATOR))]), _vm._v(" "), _c("td", {
      on: {
        click: function click($event) {
          return _vm.selectEcheance(row, i);
        }
      }
    }, [_vm._v(_vm._s((_row$n_ral = row === null || row === void 0 ? void 0 : row.n_ral) !== null && _row$n_ral !== void 0 ? _row$n_ral : (_vm$CONFIG2 = _vm.CONFIG) === null || _vm$CONFIG2 === void 0 ? void 0 : _vm$CONFIG2.NULL_INDICATOR))]), _vm._v(" "), _c("td", {
      on: {
        click: function click($event) {
          return _vm.selectEcheance(row, i);
        }
      }
    }, [_c("div", {
      staticClass: "d-flex flex-column align-items-center gap-1 text-center"
    }, [_vm.canShowRemindersStatus(row) ? _c("span", {
      staticClass: "bg-light px-2 py-1 rounded text-one-line border",
      "class": [_vm.textColor(row === null || row === void 0 ? void 0 : row.date_echeance) ? "text-" + _vm.textColor(row === null || row === void 0 ? void 0 : row.date_echeance) : ""]
    }, [_vm._v(_vm._s(_vm.getRemainingDaysText(_vm.getRemainingDays(row === null || row === void 0 ? void 0 : row.date_echeance))))]) : _vm._e(), _vm._v(" "), _c("span", {
      staticClass: "text-one-line"
    }, [_vm._v("\n                                          " + _vm._s((_row$date_echeance = row === null || row === void 0 ? void 0 : row.date_echeance) !== null && _row$date_echeance !== void 0 ? _row$date_echeance : (_vm$CONFIG3 = _vm.CONFIG) === null || _vm$CONFIG3 === void 0 ? void 0 : _vm$CONFIG3.NULL_INDICATOR) + "\n                                        ")])])]), _vm._v(" "), _c("td", {
      staticClass: "text-right",
      on: {
        click: function click($event) {
          return _vm.selectEcheance(row, i);
        }
      }
    }, [(row === null || row === void 0 ? void 0 : row.montant_int_cap) != null ? _c("span", [_vm._v("\n\n                                        " + _vm._s(_vm._f("formatNumber")(row === null || row === void 0 ? void 0 : row.montant_int_cap)) + "\n                                      ")]) : _c("span", [_vm._v(_vm._s((_vm$CONFIG4 = _vm.CONFIG) === null || _vm$CONFIG4 === void 0 ? void 0 : _vm$CONFIG4.NULL_INDICATOR))])]), _vm._v(" "), _c("td", {
      staticClass: "text-right",
      on: {
        click: function click($event) {
          return _vm.selectEcheance(row, i);
        }
      }
    }, [(row === null || row === void 0 ? void 0 : row.montant_ech_int) != null ? _c("span", [_vm._v("\n\n                                        " + _vm._s(_vm._f("formatNumber")(row === null || row === void 0 ? void 0 : row.montant_ech_int)) + "\n                                      ")]) : _c("span", [_vm._v(_vm._s((_vm$CONFIG5 = _vm.CONFIG) === null || _vm$CONFIG5 === void 0 ? void 0 : _vm$CONFIG5.NULL_INDICATOR))])]), _vm._v(" "), _c("td", {
      staticClass: "text-right",
      on: {
        click: function click($event) {
          return _vm.selectEcheance(row, i);
        }
      }
    }, [(row === null || row === void 0 ? void 0 : row.montant_ech_cap) != null ? _c("span", [_vm._v("\n\n                                        " + _vm._s(_vm._f("formatNumber")(row === null || row === void 0 ? void 0 : row.montant_ech_cap)) + "\n                                      ")]) : _c("span", [_vm._v(_vm._s((_vm$CONFIG6 = _vm.CONFIG) === null || _vm$CONFIG6 === void 0 ? void 0 : _vm$CONFIG6.NULL_INDICATOR))])]), _vm._v(" "), _c("td", {
      staticClass: "text-right",
      on: {
        click: function click($event) {
          return _vm.selectEcheance(row, i);
        }
      }
    }, [(row === null || row === void 0 ? void 0 : row.tva) != null ? _c("span", [_vm._v("\n\n                                        " + _vm._s(_vm._f("formatNumber")(row === null || row === void 0 ? void 0 : row.tva)) + "\n                                      ")]) : _c("span", [_vm._v(_vm._s((_vm$CONFIG7 = _vm.CONFIG) === null || _vm$CONFIG7 === void 0 ? void 0 : _vm$CONFIG7.NULL_INDICATOR))])]), _vm._v(" "), _c("td", {
      staticClass: "text-right",
      on: {
        click: function click($event) {
          return _vm.selectEcheance(row, i);
        }
      }
    }, [(row === null || row === void 0 ? void 0 : row.montant_echeance) != null ? _c("span", [_vm._v("\n\n                                      " + _vm._s(_vm._f("formatNumber")(row === null || row === void 0 ? void 0 : row.montant_echeance)) + "\n                                    ")]) : _c("span", [_vm._v(_vm._s((_vm$CONFIG8 = _vm.CONFIG) === null || _vm$CONFIG8 === void 0 ? void 0 : _vm$CONFIG8.NULL_INDICATOR))])]), _vm._v(" "), _c("td", {
      staticClass: "text-right",
      on: {
        click: function click($event) {
          return _vm.selectEcheance(row, i);
        }
      }
    }, [(row === null || row === void 0 ? void 0 : row.cap_rest_du) != null ? _c("span", [_vm._v("\n\n                                      " + _vm._s(_vm._f("formatNumber")(row === null || row === void 0 ? void 0 : row.cap_rest_du)) + "\n                                    ")]) : _c("span", [_vm._v(_vm._s((_vm$CONFIG9 = _vm.CONFIG) === null || _vm$CONFIG9 === void 0 ? void 0 : _vm$CONFIG9.NULL_INDICATOR))])]), _vm._v(" "), _c("td", {
      staticClass: "p-0"
    }, [_vm.canShowRemindersStatus(row) ? _c("section", {
      staticClass: "bg-white text-center"
    }, [_c("article", {
      staticClass: "p-2 d-flex flex-column gap-1 border-bottom"
    }, [_c("b", [((_row$reminder_data$re = row === null || row === void 0 || (_row$reminder_data = row.reminder_data) === null || _row$reminder_data === void 0 || (_row$reminder_data = _row$reminder_data.reminders) === null || _row$reminder_data === void 0 ? void 0 : _row$reminder_data.length) !== null && _row$reminder_data$re !== void 0 ? _row$reminder_data$re : 0) == 0 ? [_c("span", [_vm._v("Aucun rappel envoyé")])] : [_c("span", [_vm._v(_vm._s(row === null || row === void 0 || (_row$reminder_data2 = row.reminder_data) === null || _row$reminder_data2 === void 0 || (_row$reminder_data2 = _row$reminder_data2.reminders) === null || _row$reminder_data2 === void 0 ? void 0 : _row$reminder_data2.length))]), _vm._v(" rappel" + _vm._s(_vm._plural(row === null || row === void 0 || (_row$reminder_data3 = row.reminder_data) === null || _row$reminder_data3 === void 0 ? void 0 : _row$reminder_data3.reminders)) + " envoyé" + _vm._s(_vm._plural(row === null || row === void 0 || (_row$reminder_data4 = row.reminder_data) === null || _row$reminder_data4 === void 0 || (_row$reminder_data4 = _row$reminder_data4.reminders) === null || _row$reminder_data4 === void 0 ? void 0 : _row$reminder_data4.length)) + "\n                                          ")]], 2), _vm._v(" "), row !== null && row !== void 0 && (_row$reminder_data5 = row.reminder_data) !== null && _row$reminder_data5 !== void 0 && (_row$reminder_data5 = _row$reminder_data5.reminders) !== null && _row$reminder_data5 !== void 0 && _row$reminder_data5.at(-1) ? _c("div", {
      staticClass: "text-secondary fs-6"
    }, [_vm._v("\n                                          Dernier rappel : "), _c("b", [_vm._v(_vm._s((_vm$getRemainingDaysT = _vm.getRemainingDaysText(_vm.getRemainingDays(row === null || row === void 0 || (_row$reminder_data6 = row.reminder_data) === null || _row$reminder_data6 === void 0 || (_row$reminder_data6 = _row$reminder_data6.reminders) === null || _row$reminder_data6 === void 0 || (_row$reminder_data6 = _row$reminder_data6.at(-1)) === null || _row$reminder_data6 === void 0 ? void 0 : _row$reminder_data6.created_at))) !== null && _vm$getRemainingDaysT !== void 0 ? _vm$getRemainingDaysT : "--"))]), _vm._v(" "), _c("b", [_vm._v(_vm._s((_row$reminder_data$re2 = row === null || row === void 0 || (_row$reminder_data7 = row.reminder_data) === null || _row$reminder_data7 === void 0 || (_row$reminder_data7 = _row$reminder_data7.reminders) === null || _row$reminder_data7 === void 0 || (_row$reminder_data7 = _row$reminder_data7.at(-1)) === null || _row$reminder_data7 === void 0 ? void 0 : _row$reminder_data7.created_at_readable) !== null && _row$reminder_data$re2 !== void 0 ? _row$reminder_data$re2 : (_vm$CONFIG0 = _vm.CONFIG) === null || _vm$CONFIG0 === void 0 ? void 0 : _vm$CONFIG0.NULL_INDICATOR))]), _vm._v(" "), !!_vm.getRemainingDays(row === null || row === void 0 || (_row$reminder_data8 = row.reminder_data) === null || _row$reminder_data8 === void 0 || (_row$reminder_data8 = _row$reminder_data8.reminders) === null || _row$reminder_data8 === void 0 || (_row$reminder_data8 = _row$reminder_data8.at(-1)) === null || _row$reminder_data8 === void 0 ? void 0 : _row$reminder_data8.created_at) ? _c("span", [_vm._v("(" + _vm._s((_vm$getRemainingDaysT2 = _vm.getRemainingDaysText(_vm.getRemainingDays(row === null || row === void 0 || (_row$reminder_data9 = row.reminder_data) === null || _row$reminder_data9 === void 0 || (_row$reminder_data9 = _row$reminder_data9.reminders) === null || _row$reminder_data9 === void 0 || (_row$reminder_data9 = _row$reminder_data9.at(-1)) === null || _row$reminder_data9 === void 0 ? void 0 : _row$reminder_data9.created_at))) !== null && _vm$getRemainingDaysT2 !== void 0 ? _vm$getRemainingDaysT2 : "--") + ")")]) : _vm._e()]) : _vm._e(), _vm._v(" "), row !== null && row !== void 0 && (_row$reminder_data0 = row.reminder_data) !== null && _row$reminder_data0 !== void 0 && (_row$reminder_data0 = _row$reminder_data0.next_reminder) !== null && _row$reminder_data0 !== void 0 && _row$reminder_data0.date ? _c("div", {
      staticClass: "text-secondary fs-6"
    }, [[(row === null || row === void 0 || (_row$reminder_data1 = row.reminder_data) === null || _row$reminder_data1 === void 0 || (_row$reminder_data1 = _row$reminder_data1.reminders) === null || _row$reminder_data1 === void 0 ? void 0 : _row$reminder_data1.length) > 0 ? _c("span", [_vm._v("Prochain rappel")]) : _c("span", [_vm._v("Rappel")])], _vm._v("\n                                          automatique \n                                          "), [row !== null && row !== void 0 && (_row$reminder_data10 = row.reminder_data) !== null && _row$reminder_data10 !== void 0 && (_row$reminder_data10 = _row$reminder_data10.next_reminder) !== null && _row$reminder_data10 !== void 0 && _row$reminder_data10.date ? _c("span", [_vm._v("\n                                              le "), _c("b", [_vm._v(_vm._s((_row$reminder_data$ne = row === null || row === void 0 || (_row$reminder_data11 = row.reminder_data) === null || _row$reminder_data11 === void 0 || (_row$reminder_data11 = _row$reminder_data11.next_reminder) === null || _row$reminder_data11 === void 0 ? void 0 : _row$reminder_data11.date) !== null && _row$reminder_data$ne !== void 0 ? _row$reminder_data$ne : (_vm$CONFIG1 = _vm.CONFIG) === null || _vm$CONFIG1 === void 0 ? void 0 : _vm$CONFIG1.NULL_INDICATOR))]), _vm._v(" "), !!_vm.getRemainingDays(row === null || row === void 0 || (_row$reminder_data12 = row.reminder_data) === null || _row$reminder_data12 === void 0 || (_row$reminder_data12 = _row$reminder_data12.next_reminder) === null || _row$reminder_data12 === void 0 ? void 0 : _row$reminder_data12.date) ? _c("span", [_vm._v("(" + _vm._s((_vm$getRemainingDaysT3 = _vm.getRemainingDaysText(_vm.getRemainingDays(row === null || row === void 0 || (_row$reminder_data13 = row.reminder_data) === null || _row$reminder_data13 === void 0 || (_row$reminder_data13 = _row$reminder_data13.next_reminder) === null || _row$reminder_data13 === void 0 ? void 0 : _row$reminder_data13.date))) !== null && _vm$getRemainingDaysT3 !== void 0 ? _vm$getRemainingDaysT3 : "--") + ")")]) : _vm._e()]) : _c("b", [_vm._v("NON_DEFINI")])]], 2) : _vm._e()]), _vm._v(" "), _c("a", {
      staticClass: "text-primary p-2 fw-semibold hover-white d-flex justify-content-center align-items-center text-center border-bottom",
      attrs: {
        title: "Afficher les rappels cette échéance"
      },
      on: {
        click: function click($event) {
          return _vm.selectEcheance(row, i);
        }
      }
    }, [_vm._v("\n                                        Voir les rappels\n                                      ")]), _vm._v(" "), _c("article", {
      staticClass: "p-2 d-flex flex-column gap-1 text-center",
      "class": [!_vm.hasAction(row === null || row === void 0 ? void 0 : row.date_echeance) ? "" : ""]
    }, [_vm.state[row === null || row === void 0 ? void 0 : row.date_echeance] == "LOADING" ? _c("a", {
      staticClass: "d-flex gap-2 justify-content-center align-items-center mt-2 btn btn-sm bg-deep-blue fw-semibold shadow-sm",
      attrs: {
        title: "Envoi du rappel en cours..."
      }
    }, [_c("span", [_vm._v("Envoi du rappel en cours"), _c("loading-dots")], 1)]) : _vm.state[row === null || row === void 0 ? void 0 : row.date_echeance] == "SENT" ? _c("a", {
      staticClass: "d-flex gap-2 justify-content-center align-items-center mt-2 btn btn-sm btn-success fw-semibold shadow-sm"
    }, [_c("span", [_vm._v("Rappel envoyé")]), _vm._v(" "), _c("i", {
      staticClass: "icofont-check"
    })]) : [_vm.state[(row === null || row === void 0 ? void 0 : row.date_echeance) + "_error"] ? _c("b", {
      staticClass: "text-danger fs-6"
    }, [_vm._v(_vm._s((_vm$state = _vm.state[(row === null || row === void 0 ? void 0 : row.date_echeance) + "_error"]) !== null && _vm$state !== void 0 ? _vm$state : "Une erreur s'est produite"))]) : _vm._e(), _vm._v(" "), _vm.state[(row === null || row === void 0 ? void 0 : row.date_echeance) + "_too_early"] ? [_c("div", {
      staticClass: "text-center px-2 py-1 mt-2 border bg-light fw-semibold"
    }, [_vm._v("\n                                              " + _vm._s(_vm.isReminderSentByCurrentUser(row === null || row === void 0 || (_row$reminder_data14 = row.reminder_data) === null || _row$reminder_data14 === void 0 || (_row$reminder_data14 = _row$reminder_data14.reminders) === null || _row$reminder_data14 === void 0 ? void 0 : _row$reminder_data14.at(-1)) ? "Vous avez envoyé un rappel" : "Un rappel a été envoyé") + " au client il y moins d'une journée.\n                                            ")]), _vm._v(" "), _c("div", {
      staticClass: "d-flex flex-column gap-2"
    }, [(_vm$CONFIG10 = _vm.CONFIG) !== null && _vm$CONFIG10 !== void 0 && _vm$CONFIG10.CAN_RESEND_REMINDER_ON_SAME_DAY ? _c("button", {
      staticClass: "btn btn-sm btn-danger fw-bold mt-2 cursor-pointer",
      on: {
        click: function click($event) {
          $event.preventDefault();
          return _vm.sendClientNotice(row, i, {
            bypass: true
          });
        }
      }
    }, [_vm._v("Renvoyer un rappel quand même")]) : _vm._e(), _vm._v(" "), _c("button", {
      staticClass: "btn btn-sm btn-outline-danger fw-bold cursor-pointer",
      on: {
        click: function click($event) {
          $event.preventDefault();
          return _vm.toggleState((row === null || row === void 0 ? void 0 : row.date_echeance) + "_too_early", false);
        }
      }
    }, [_vm._v("Annuler")])])] : [_vm.hasAction(row === null || row === void 0 ? void 0 : row.date_echeance) ? _c("a", {
      staticClass: "d-flex gap-2 justify-content-center align-items-center mt-2 btn btn-sm bg-deep-blue fw-semibold shadow-sm",
      on: {
        click: function click($event) {
          return _vm.sendClientNotice(row, i);
        }
      }
    }, [_vm.state[row === null || row === void 0 ? void 0 : row.date_echeance] == "ERROR" ? _c("span", [_vm._v("\n                                                Renvoyer le rappel\n                                              ")]) : _c("span", [_vm._v("\n                                                Envoyer un "), (row === null || row === void 0 || (_row$reminder_data15 = row.reminder_data) === null || _row$reminder_data15 === void 0 || (_row$reminder_data15 = _row$reminder_data15.reminders) === null || _row$reminder_data15 === void 0 ? void 0 : _row$reminder_data15.length) > 0 ? _c("span", [_vm._v("autre")]) : _vm._e(), _vm._v(" rappel au client\n                                              ")])]) : _c("span", [_vm._v("\n                                              AUCUNE ACTION DISPONIBLE\n                                            ")])]]], 2)]) : _c("empty-block", {
      staticClass: "px-3 py-2 text-secondary text-center"
    }, [_vm._v("\n                                      Echeance pas encore atteinte\n                                    ")])], 1)]);
  }), 0), _vm._v(" "), _c("tfoot", [_c("tr", [_vm._l((_vm$tamorData3 = _vm.tamorData) === null || _vm$tamorData3 === void 0 ? void 0 : _vm$tamorData3.footer, function (item, i) {
    return _c("th", {
      key: i,
      staticClass: "text-center"
    }, [!!item ? [isNaN(item) ? [_vm._v("\n                                        " + _vm._s(item) + "\n                                      ")] : [_vm._v("\n                                        " + _vm._s(_vm._f("formatNumber")(item)) + "\n                                      ")]] : _vm._e()], 2);
  }), _vm._v(" "), _c("td")], 2)])]) : _c("article", {
    staticClass: "d-flex flex-column text-secondary justify-content-center align-items-center text-center py-5"
  }, [_c("i", {
    staticClass: "icofont-warning icofont-4x"
  }), _vm._v(" "), _c("h4", {
    staticClass: "my-2 mb-1"
  }, [_vm._v("\n                                  Lignes du TAMOR vides\n                              ")]), _vm._v(" "), _c("h6", [_vm._v("\n                                Veuillez réupploader un fichier valide\n                              ")]), _vm._v(" "), !_vm.showFileInputForm ? _c("button", {
    staticClass: "mt-2 btn btn-sm btn-secondary d-flex gap-2 justify-content-center align-items-center",
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.setModeReupload();
      }
    }
  }, [_c("i", {
    staticClass: "icofont-upload-alt"
  }), _vm._v(" "), _c("span", [_vm._v("\n                                  Uploader le fichier TAMOR\n                                ")])]) : _vm._e()])])])]) : _vm._e(), _vm._v(" "), _vm.currentTab == "tab_reminders" ? _c("div", {
    staticClass: "transition-color tab-pane fade show active",
    attrs: {
      id: "reminders-tabview-tab-pane",
      role: "tabpanel",
      "aria-labelledby": "reminders-tabview-tab",
      tabindex: "0"
    }
  }, [_vm.isTamorDataValid ? _c("div", {
    staticClass: "d-flex"
  }, [_c("table", {
    staticClass: "table table-bordered table-responsive mb-0"
  }, [_c("thead", [_c("tr", {
    staticClass: "border-bottom"
  }, [_c("th", [_vm._v("N° Echéance")]), _vm._v(" "), _c("th", {
    staticClass: "text-center"
  }, [_vm._v("Date Echéance")])])]), _vm._v(" "), _c("tbody", {}, _vm._l((_vm$tamorData4 = _vm.tamorData) === null || _vm$tamorData4 === void 0 ? void 0 : _vm$tamorData4.rows, function (row, i) {
    var _row$n_ech2, _vm$CONFIG11, _row$date_echeance2, _vm$CONFIG12, _row$reminder_data16, _row$reminder_data17;
    return _c("tr", {
      key: i,
      staticClass: "hover-white transition-color",
      "class": [_vm.selectedEcheanceNumber == null ? "bg-white" : _vm.isEcheanceSelected(row) ? "border-l-4-orange bg-white text-orange fw-bold" : "bg-light"],
      attrs: {
        id: i + "_echeance_details",
        title: "Afficher les rappel de l'échéance n°" + (row === null || row === void 0 ? void 0 : row.n_ech)
      },
      on: {
        click: function click($event) {
          return _vm.toggleSelectEcheance(row, i);
        }
      }
    }, [_c("td", {
      staticClass: "text-center"
    }, [_vm._v("\n                                " + _vm._s((_row$n_ech2 = row === null || row === void 0 ? void 0 : row.n_ech) !== null && _row$n_ech2 !== void 0 ? _row$n_ech2 : (_vm$CONFIG11 = _vm.CONFIG) === null || _vm$CONFIG11 === void 0 ? void 0 : _vm$CONFIG11.NULL_INDICATOR) + "\n                              ")]), _vm._v(" "), _c("td", [_c("div", {
      staticClass: "d-flex justify-content-center align-items-center gap-2 text-center"
    }, [_c("span", {
      staticClass: "text-one-line"
    }, [_vm._v(" " + _vm._s((_row$date_echeance2 = row === null || row === void 0 ? void 0 : row.date_echeance) !== null && _row$date_echeance2 !== void 0 ? _row$date_echeance2 : (_vm$CONFIG12 = _vm.CONFIG) === null || _vm$CONFIG12 === void 0 ? void 0 : _vm$CONFIG12.NULL_INDICATOR))]), _vm._v(" "), _vm.canShowRemindersStatus(row) ? _c("span", {
      staticClass: "bg-light px-2 py-1 rounded text-one-line border",
      "class": [_vm.textColor(row === null || row === void 0 ? void 0 : row.date_echeance) ? "text-" + _vm.textColor(row === null || row === void 0 ? void 0 : row.date_echeance) : ""]
    }, [_vm._v(_vm._s(_vm.getRemainingDaysText(_vm.getRemainingDays(row === null || row === void 0 ? void 0 : row.date_echeance))))]) : _vm._e(), _vm._v(" "), (row === null || row === void 0 || (_row$reminder_data16 = row.reminder_data) === null || _row$reminder_data16 === void 0 || (_row$reminder_data16 = _row$reminder_data16.reminders) === null || _row$reminder_data16 === void 0 ? void 0 : _row$reminder_data16.length) > 0 ? _c("span", {
      staticClass: "bg-light px-1 rounded text-one-line text-secondary",
      attrs: {
        title: "Nombre de rappels envoyés"
      }
    }, [_c("i", {
      staticClass: "icofont-flag-alt-1 icofont-1x"
    }), _vm._v("\n                                    " + _vm._s(row === null || row === void 0 || (_row$reminder_data17 = row.reminder_data) === null || _row$reminder_data17 === void 0 || (_row$reminder_data17 = _row$reminder_data17.reminders) === null || _row$reminder_data17 === void 0 ? void 0 : _row$reminder_data17.length) + "\n                                  ")]) : _vm._e()])])]);
  }), 0), _vm._v(" "), _c("tfoot")]), _vm._v(" "), _c("aside", {
    staticClass: "col-md-7 border"
  }, [!_vm.isAnEcheanceSelected ? _c("section", {
    staticClass: "transition-color d-flex flex-column align-items-center justify-content-center text-center",
    staticStyle: {
      height: "100%"
    }
  }, [_c("span", {
    staticClass: "d-flex gap-2 align-items-center px-3"
  }, [_c("i", {
    staticClass: "icofont-hand-left"
  }), _vm._v("\n                              Cliquez sur une echeance pour afficher les rappels envoyés\n                            ")])]) : _c("section", {
    staticClass: "transition-color d-flex flex-column bg-light",
    staticStyle: {
      height: "100%"
    }
  }, [_vm.state["is_loading_reminders"] ? _c("div", {
    staticClass: "bg-white p-5 rounded d-flex flex-column gap-2 justify-content-center align-items-center h-100"
  }, [_c("div", {
    staticClass: "spinner-border spinner-border-xl"
  }), _vm._v(" "), _c("h5", {
    staticClass: "my-1 text-center"
  }, [_vm._v("\n                                      Chargement des rappels envoyés...\n                                  ")])]) : [_c("section", [_c("header", {
    staticClass: "bg-white border-bottom relative"
  }, [_c("fieldset", {
    staticClass: "row fw-semibold text-one-line p-2"
  }, [_c("div", {
    staticClass: "col-md-4 d-flex justify-content-between gap-1",
    attrs: {
      id: "echeance_details"
    }
  }, [_c("span", {}, [_vm._v("Echéance n°:")]), _vm._v(" "), _c("b", {
    staticClass: "text-secondary"
  }, [_c("span", {
    staticClass: "text-orange"
  }, [_vm._v(_vm._s((_vm$selectedEcheance = _vm.selectedEcheance) === null || _vm$selectedEcheance === void 0 ? void 0 : _vm$selectedEcheance.n_ech))]), _vm._v("/" + _vm._s((_vm$tamorData5 = _vm.tamorData) === null || _vm$tamorData5 === void 0 || (_vm$tamorData5 = _vm$tamorData5.rows) === null || _vm$tamorData5 === void 0 ? void 0 : _vm$tamorData5.length))])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-4 d-flex justify-content-between gap-1"
  }, [_c("span", {}, [_vm._v("Date:")]), _vm._v(" "), _c("b", {
    staticClass: "text-secondary"
  }, [_vm._v(_vm._s((_vm$selectedEcheance2 = _vm.selectedEcheance) === null || _vm$selectedEcheance2 === void 0 ? void 0 : _vm$selectedEcheance2.date_echeance))])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-4 d-flex justify-content-between gap-1"
  }, [_c("span", {}, [_vm._v("Montant:")]), _vm._v(" "), _c("b", {
    staticClass: "text-secondary"
  }, [_vm._v(_vm._s(_vm._f("formatNumber")((_vm$selectedEcheance3 = _vm.selectedEcheance) === null || _vm$selectedEcheance3 === void 0 ? void 0 : _vm$selectedEcheance3.montant_echeance)) + " \n                                            "), _c("small", {
    staticClass: "fs-7"
  }, [_vm._v(" " + _vm._s((_vm$dashboardInfo$sig = (_vm$dashboardInfo = _vm.dashboardInfo) === null || _vm$dashboardInfo === void 0 ? void 0 : _vm$dashboardInfo.sigle_devise) !== null && _vm$dashboardInfo$sig !== void 0 ? _vm$dashboardInfo$sig : ""))])])])]), _vm._v(" "), _c("fieldset", {
    staticClass: "row fw-semibold text-one-line p-2"
  }, [_c("div", {
    staticClass: "col-md-4 d-flex justify-content-between gap-1"
  }, [_c("span", {}, [_vm._v("Intérêts:")]), _vm._v(" "), _c("span", {
    staticClass: "d-flex gap-1"
  }, [_c("b", {
    staticClass: "text-secondary"
  }, [_vm._v(_vm._s(_vm._f("formatNumber")((_vm$selectedEcheance4 = _vm.selectedEcheance) === null || _vm$selectedEcheance4 === void 0 ? void 0 : _vm$selectedEcheance4.montant_ech_int)) + " \n                                              "), _c("small", {
    staticClass: "fs-7"
  }, [_vm._v(" " + _vm._s((_vm$dashboardInfo$sig2 = (_vm$dashboardInfo2 = _vm.dashboardInfo) === null || _vm$dashboardInfo2 === void 0 ? void 0 : _vm$dashboardInfo2.sigle_devise) !== null && _vm$dashboardInfo$sig2 !== void 0 ? _vm$dashboardInfo$sig2 : ""))])])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-4 d-flex justify-content-between gap-1"
  }, [_c("span", {}, [_vm._v("Capital:")]), _vm._v(" "), _c("span", {
    staticClass: "d-flex gap-1"
  }, [_c("b", {
    staticClass: "text-secondary"
  }, [_vm._v(_vm._s(_vm._f("formatNumber")((_vm$selectedEcheance5 = _vm.selectedEcheance) === null || _vm$selectedEcheance5 === void 0 ? void 0 : _vm$selectedEcheance5.montant_ech_cap)) + " \n                                              "), _c("small", {
    staticClass: "fs-7"
  }, [_vm._v(" " + _vm._s((_vm$dashboardInfo$sig3 = (_vm$dashboardInfo3 = _vm.dashboardInfo) === null || _vm$dashboardInfo3 === void 0 ? void 0 : _vm$dashboardInfo3.sigle_devise) !== null && _vm$dashboardInfo$sig3 !== void 0 ? _vm$dashboardInfo$sig3 : ""))])])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-4 d-flex justify-content-between gap-1"
  }, [_c("span", {}, [_vm._v("Restant du:")]), _vm._v(" "), _c("b", {
    staticClass: "text-secondary"
  }, [_vm._v(_vm._s(_vm._f("formatNumber")((_vm$selectedEcheance6 = _vm.selectedEcheance) === null || _vm$selectedEcheance6 === void 0 ? void 0 : _vm$selectedEcheance6.cap_rest_du)) + " \n                                            "), _c("small", {
    staticClass: "fs-7"
  }, [_vm._v(" " + _vm._s((_vm$dashboardInfo$sig4 = (_vm$dashboardInfo4 = _vm.dashboardInfo) === null || _vm$dashboardInfo4 === void 0 ? void 0 : _vm$dashboardInfo4.sigle_devise) !== null && _vm$dashboardInfo$sig4 !== void 0 ? _vm$dashboardInfo$sig4 : ""))])])])]), _vm._v(" "), _c("fieldset", {
    staticClass: "col d-flex flex-column gap-1 border-top"
  }, [_c("h5", {
    staticClass: "d-flex justify-content-between p-2 bg-white mb-0 text-deep-blue cursor-pointer",
    "class": [_vm.state["selected_echeance_reminder_panel_hide"] ? "border-bottom" : ""],
    on: {
      click: function click($event) {
        var _vm$state$selected_ec;
        _vm.toggleState("selected_echeance_reminder_panel_hide", !((_vm$state$selected_ec = _vm.state["selected_echeance_reminder_panel_hide"]) !== null && _vm$state$selected_ec !== void 0 ? _vm$state$selected_ec : false));
      }
    }
  }, [_c("div", {
    staticClass: "d-flex align-items-center gap-3"
  }, [_c("i", {
    staticClass: "icofont-flag-alt-1 fw-bold"
  }), _vm._v(" "), ((_vm$selectedEcheance$ = (_vm$selectedEcheance7 = _vm.selectedEcheance) === null || _vm$selectedEcheance7 === void 0 || (_vm$selectedEcheance7 = _vm$selectedEcheance7.reminder_data) === null || _vm$selectedEcheance7 === void 0 || (_vm$selectedEcheance7 = _vm$selectedEcheance7.reminders) === null || _vm$selectedEcheance7 === void 0 ? void 0 : _vm$selectedEcheance7.length) !== null && _vm$selectedEcheance$ !== void 0 ? _vm$selectedEcheance$ : 0) == 0 ? [_c("span", [_vm._v("Aucun rappel envoyé")])] : [_c("span", [_vm._v(_vm._s((_vm$selectedEcheance8 = _vm.selectedEcheance) === null || _vm$selectedEcheance8 === void 0 || (_vm$selectedEcheance8 = _vm$selectedEcheance8.reminder_data) === null || _vm$selectedEcheance8 === void 0 || (_vm$selectedEcheance8 = _vm$selectedEcheance8.reminders) === null || _vm$selectedEcheance8 === void 0 ? void 0 : _vm$selectedEcheance8.length))]), _vm._v(" rappel" + _vm._s(_vm._plural((_vm$selectedEcheance9 = _vm.selectedEcheance) === null || _vm$selectedEcheance9 === void 0 || (_vm$selectedEcheance9 = _vm$selectedEcheance9.reminder_data) === null || _vm$selectedEcheance9 === void 0 ? void 0 : _vm$selectedEcheance9.reminders)) + " envoyé" + _vm._s(_vm._plural((_vm$selectedEcheance0 = _vm.selectedEcheance) === null || _vm$selectedEcheance0 === void 0 || (_vm$selectedEcheance0 = _vm$selectedEcheance0.reminder_data) === null || _vm$selectedEcheance0 === void 0 ? void 0 : _vm$selectedEcheance0.reminders)) + "\n                                            ")]], 2), _vm._v(" "), _c("div", [!_vm.state["selected_echeance_reminder_panel_hide"] ? _c("i", {
    staticClass: "icofont-caret-up"
  }) : _c("i", {
    staticClass: "icofont-caret-down"
  })])]), _vm._v(" "), _c("transition", {
    attrs: {
      name: "fade-up"
    }
  }, [!_vm.state["selected_echeance_reminder_panel_hide"] ? _c("section", {
    staticClass: "d-flex align-items-start gap-2 text-deep-blue p-2"
  }, [_c("div", {
    staticClass: "w-100 text-secondary fs-6"
  }, [[_c("section", {
    staticClass: "d-flex flex-column gap-1"
  }, [_c("div", {
    staticClass: "d-flex justify-content-between align-items-center"
  }, [_c("h6", {
    staticClass: "mb-0 fw-bold"
  }, [_vm._v("Rappels programmés:")]), _vm._v(" "), ((_vm$selectedEcheance$2 = (_vm$selectedEcheance1 = _vm.selectedEcheance) === null || _vm$selectedEcheance1 === void 0 || (_vm$selectedEcheance1 = _vm$selectedEcheance1.reminder_data) === null || _vm$selectedEcheance1 === void 0 || (_vm$selectedEcheance1 = _vm$selectedEcheance1.schedule) === null || _vm$selectedEcheance1 === void 0 ? void 0 : _vm$selectedEcheance1.length) !== null && _vm$selectedEcheance$2 !== void 0 ? _vm$selectedEcheance$2 : 0) > 0 ? _c("div", {
    staticClass: "d-flex gap-1 justify-content-end align-items-center"
  }, [_vm.hasAction((_vm$selectedEcheance10 = _vm.selectedEcheance) === null || _vm$selectedEcheance10 === void 0 ? void 0 : _vm$selectedEcheance10.date_echeance) && _vm.canUserStopAutomaticReminders(_vm.selectedEcheance) && (_vm$selectedEcheance11 = _vm.selectedEcheance) !== null && _vm$selectedEcheance11 !== void 0 && (_vm$selectedEcheance11 = _vm$selectedEcheance11.reminder_data) !== null && _vm$selectedEcheance11 !== void 0 && _vm$selectedEcheance11.run_schedule && (_vm$selectedEcheance12 = _vm.selectedEcheance) !== null && _vm$selectedEcheance12 !== void 0 && (_vm$selectedEcheance12 = _vm$selectedEcheance12.reminder_data) !== null && _vm$selectedEcheance12 !== void 0 && (_vm$selectedEcheance12 = _vm$selectedEcheance12.schedule) !== null && _vm$selectedEcheance12 !== void 0 && _vm$selectedEcheance12.some(function (el) {
    return (el === null || el === void 0 ? void 0 : el.is_active) && (el === null || el === void 0 ? void 0 : el.is_sent) == null;
  }) ? [_vm.state[((_vm$selectedEcheance13 = _vm.selectedEcheance) === null || _vm$selectedEcheance13 === void 0 ? void 0 : _vm$selectedEcheance13.date_echeance) + "_cancel_echeance_reminders_loading"] ? _c("b", {
    staticClass: "d-flex gap-1 align-items-center",
    attrs: {
      title: "Annulation de tous les rappels automatiques pour cette échéance"
    }
  }, [_c("i", {
    staticClass: "icofont-close-circled"
  }), _vm._v(" "), _c("span", [_vm._v("Annulation des rappels"), _c("span", {
    domProps: {
      innerHTML: _vm._s(_vm.loadingDots)
    }
  })]), _vm._v(" "), _c("span", {
    staticClass: "spinner-border spinner-border-sm"
  })]) : _vm.state[((_vm$selectedEcheance14 = _vm.selectedEcheance) === null || _vm$selectedEcheance14 === void 0 ? void 0 : _vm$selectedEcheance14.date_echeance) + "_cancel_echeance_reminders_success"] ? _c("b", {
    staticClass: "d-flex gap-1 align-items-center text-success",
    attrs: {
      title: "Annulation de tous les rappels automatiques pour cette échéance"
    }
  }, [_vm._v("\n                                                          Rappels automatiques annulés\n                                                          "), _c("i", {
    staticClass: "icofont-check"
  })]) : _c("a", {
    staticClass: "hover-white text-danger fs-6 mb-0 fw-bold px-2 rounded",
    attrs: {
      title: "Stopper les rappels automatiques pour cette échéance"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.cancelEcheanceReminders(_vm.selectedEcheance, _vm.selectedEcheanceIndex);
      }
    }
  }, [_c("i", {
    staticClass: "icofont-close-circled"
  }), _vm._v(" "), _c("b", [_vm._v("Tout annuler")])])] : _vm._e()], 2) : _vm._e()]), _vm._v(" "), ((_vm$selectedEcheance$3 = (_vm$selectedEcheance15 = _vm.selectedEcheance) === null || _vm$selectedEcheance15 === void 0 || (_vm$selectedEcheance15 = _vm$selectedEcheance15.reminder_data) === null || _vm$selectedEcheance15 === void 0 || (_vm$selectedEcheance15 = _vm$selectedEcheance15.schedule) === null || _vm$selectedEcheance15 === void 0 ? void 0 : _vm$selectedEcheance15.length) !== null && _vm$selectedEcheance$3 !== void 0 ? _vm$selectedEcheance$3 : 0) > 0 ? [_c("div", {
    staticClass: "col d-flex gap-2 flex-wrap"
  }, _vm._l((_vm$selectedEcheance16 = _vm.selectedEcheance) === null || _vm$selectedEcheance16 === void 0 || (_vm$selectedEcheance16 = _vm$selectedEcheance16.reminder_data) === null || _vm$selectedEcheance16 === void 0 ? void 0 : _vm$selectedEcheance16.schedule, function (reminder, i) {
    var _vm$calcReminderAttri, _vm$calcReminderAttri2, _vm$calcReminderAttri3, _vm$calcReminderAttri4, _vm$selectedEcheance17, _vm$selectedEcheance18;
    return _c("div", {
      key: i,
      staticClass: "col d-flex flex-column rounded border px-2 py-1",
      "class": ["border-" + ((_vm$calcReminderAttri = _vm.calcReminderAttributes(reminder)) === null || _vm$calcReminderAttri === void 0 ? void 0 : _vm$calcReminderAttri.color), "text-" + ((_vm$calcReminderAttri2 = _vm.calcReminderAttributes(reminder)) === null || _vm$calcReminderAttri2 === void 0 ? void 0 : _vm$calcReminderAttri2.color), [true, false].includes(reminder === null || reminder === void 0 ? void 0 : reminder.is_sent) || (reminder === null || reminder === void 0 ? void 0 : reminder.is_active) == false ? "bg-light" : ""]
    }, [_c("span", {
      staticClass: "text-one-line"
    }, [_vm._v(_vm._s(reminder === null || reminder === void 0 ? void 0 : reminder.date))]), _vm._v(" "), _c("div", {
      staticClass: "d-flex gap-1 justify-content-between align-items-center"
    }, [_c("b", {
      staticClass: "d-flex align-items-center gap-1 text-one-line",
      "class": ["text-" + ((_vm$calcReminderAttri3 = _vm.calcReminderAttributes(reminder)) === null || _vm$calcReminderAttri3 === void 0 ? void 0 : _vm$calcReminderAttri3.color)]
    }, [_vm._v("\n                                                            " + _vm._s((_vm$calcReminderAttri4 = _vm.calcReminderAttributes(reminder)) === null || _vm$calcReminderAttri4 === void 0 ? void 0 : _vm$calcReminderAttri4.status) + "\n                                                          ")]), _vm._v(" "), _vm.hasAction((_vm$selectedEcheance17 = _vm.selectedEcheance) === null || _vm$selectedEcheance17 === void 0 ? void 0 : _vm$selectedEcheance17.date_echeance) && _vm.canUserStopAutomaticReminders(_vm.selectedEcheance) && reminder !== null && reminder !== void 0 && reminder.is_active && (_vm$selectedEcheance18 = _vm.selectedEcheance) !== null && _vm$selectedEcheance18 !== void 0 && (_vm$selectedEcheance18 = _vm$selectedEcheance18.reminder_data) !== null && _vm$selectedEcheance18 !== void 0 && _vm$selectedEcheance18.run_schedule && ![true, false].includes(reminder === null || reminder === void 0 ? void 0 : reminder.is_sent) ? [_vm.state[(reminder === null || reminder === void 0 ? void 0 : reminder.date) + "_cancel_scheduled_reminder_loading"] ? _c("span", {
      staticClass: "spinner-border spinner-border-sm text-danger",
      attrs: {
        title: "Annulation du rappel automatique en cours..."
      }
    }) : _vm.state[(reminder === null || reminder === void 0 ? void 0 : reminder.date) + "_cancel_scheduled_reminder_error"] ? _c("span", {
      staticClass: "text-danger"
    }, [_c("i", {
      staticClass: "icofont-exclamation-tringle"
    })]) : _c("a", {
      staticClass: "cursor-pointer text-danger",
      attrs: {
        title: "Annuler le rappel automatique du " + (reminder === null || reminder === void 0 ? void 0 : reminder.date)
      },
      on: {
        click: function click($event) {
          return _vm.cancelScheduledReminder(_vm.selectedEcheance, _vm.selectedEcheanceIndex, reminder, i);
        }
      }
    }, [_c("i", {
      staticClass: "icofont-close-circled"
    })])] : _vm._e()], 2)]);
  }), 0), _vm._v(" "), _c("section", {
    staticClass: "d-flex flex-column align-items-center justify-content-center mt-2"
  }, [(_vm$selectedEcheance19 = _vm.selectedEcheance) !== null && _vm$selectedEcheance19 !== void 0 && (_vm$selectedEcheance19 = _vm$selectedEcheance19.reminder_data) !== null && _vm$selectedEcheance19 !== void 0 && (_vm$selectedEcheance19 = _vm$selectedEcheance19.reminders) !== null && _vm$selectedEcheance19 !== void 0 && _vm$selectedEcheance19.at(-1) ? _c("div", {
    staticClass: "d-flex justify-content-center gap-1"
  }, [_vm._v("\n                                                        Dernier rappel : "), _c("b", [_vm._v(_vm._s((_vm$getRemainingDaysT4 = _vm.getRemainingDaysText(_vm.getRemainingDays((_vm$selectedEcheance20 = _vm.selectedEcheance) === null || _vm$selectedEcheance20 === void 0 || (_vm$selectedEcheance20 = _vm$selectedEcheance20.reminder_data) === null || _vm$selectedEcheance20 === void 0 || (_vm$selectedEcheance20 = _vm$selectedEcheance20.reminders) === null || _vm$selectedEcheance20 === void 0 || (_vm$selectedEcheance20 = _vm$selectedEcheance20.at(-1)) === null || _vm$selectedEcheance20 === void 0 ? void 0 : _vm$selectedEcheance20.created_at))) !== null && _vm$getRemainingDaysT4 !== void 0 ? _vm$getRemainingDaysT4 : "--"))]), _vm._v(" "), _c("b", [_vm._v(_vm._s((_vm$selectedEcheance$4 = (_vm$selectedEcheance21 = _vm.selectedEcheance) === null || _vm$selectedEcheance21 === void 0 || (_vm$selectedEcheance21 = _vm$selectedEcheance21.reminder_data) === null || _vm$selectedEcheance21 === void 0 || (_vm$selectedEcheance21 = _vm$selectedEcheance21.reminders) === null || _vm$selectedEcheance21 === void 0 || (_vm$selectedEcheance21 = _vm$selectedEcheance21.at(-1)) === null || _vm$selectedEcheance21 === void 0 ? void 0 : _vm$selectedEcheance21.created_at_readable) !== null && _vm$selectedEcheance$4 !== void 0 ? _vm$selectedEcheance$4 : (_vm$CONFIG13 = _vm.CONFIG) === null || _vm$CONFIG13 === void 0 ? void 0 : _vm$CONFIG13.NULL_INDICATOR))])]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "d-flex justify-content-center gap-1"
  }, [[((_vm$selectedEcheance22 = _vm.selectedEcheance) === null || _vm$selectedEcheance22 === void 0 || (_vm$selectedEcheance22 = _vm$selectedEcheance22.reminder_data) === null || _vm$selectedEcheance22 === void 0 || (_vm$selectedEcheance22 = _vm$selectedEcheance22.reminders) === null || _vm$selectedEcheance22 === void 0 ? void 0 : _vm$selectedEcheance22.length) > 0 ? _c("span", [_vm._v("Prochain rappel")]) : _c("span", [_vm._v("Rappel")])], _vm._v("\n                                                        automatique \n                                                        "), _c("div", {
    staticClass: "d-flex gap-1"
  }, [(_vm$selectedEcheance23 = _vm.selectedEcheance) !== null && _vm$selectedEcheance23 !== void 0 && (_vm$selectedEcheance23 = _vm$selectedEcheance23.reminder_data) !== null && _vm$selectedEcheance23 !== void 0 && (_vm$selectedEcheance23 = _vm$selectedEcheance23.next_reminder) !== null && _vm$selectedEcheance23 !== void 0 && _vm$selectedEcheance23.date ? _c("span", [_vm._v("\n                                                            le "), _c("b", [_vm._v(_vm._s((_vm$selectedEcheance$5 = (_vm$selectedEcheance24 = _vm.selectedEcheance) === null || _vm$selectedEcheance24 === void 0 || (_vm$selectedEcheance24 = _vm$selectedEcheance24.reminder_data) === null || _vm$selectedEcheance24 === void 0 || (_vm$selectedEcheance24 = _vm$selectedEcheance24.next_reminder) === null || _vm$selectedEcheance24 === void 0 ? void 0 : _vm$selectedEcheance24.date) !== null && _vm$selectedEcheance$5 !== void 0 ? _vm$selectedEcheance$5 : (_vm$CONFIG14 = _vm.CONFIG) === null || _vm$CONFIG14 === void 0 ? void 0 : _vm$CONFIG14.NULL_INDICATOR))]), _vm._v(" "), !!_vm.getRemainingDays((_vm$selectedEcheance25 = _vm.selectedEcheance) === null || _vm$selectedEcheance25 === void 0 || (_vm$selectedEcheance25 = _vm$selectedEcheance25.reminder_data) === null || _vm$selectedEcheance25 === void 0 || (_vm$selectedEcheance25 = _vm$selectedEcheance25.next_reminder) === null || _vm$selectedEcheance25 === void 0 ? void 0 : _vm$selectedEcheance25.date) ? _c("span", [_vm._v("(" + _vm._s((_vm$getRemainingDaysT5 = _vm.getRemainingDaysText(_vm.getRemainingDays((_vm$selectedEcheance26 = _vm.selectedEcheance) === null || _vm$selectedEcheance26 === void 0 || (_vm$selectedEcheance26 = _vm$selectedEcheance26.reminder_data) === null || _vm$selectedEcheance26 === void 0 || (_vm$selectedEcheance26 = _vm$selectedEcheance26.next_reminder) === null || _vm$selectedEcheance26 === void 0 ? void 0 : _vm$selectedEcheance26.date))) !== null && _vm$getRemainingDaysT5 !== void 0 ? _vm$getRemainingDaysT5 : "--") + ")")]) : _vm._e()]) : _c("b", [_vm._v("NON_DEFINI")])])], 2)])] : _c("empty-block", {
    staticClass: "p-3 text-secondary text-center rounded border"
  }, [_vm._v("\n                                                    Aucun rappel automatique programmé\n                                                  ")])], 2)]], 2)]) : _vm._e()]), _vm._v(" "), _c("transition", {
    attrs: {
      name: "fade-up"
    }
  }, [!_vm.state["selected_echeance_reminder_panel_hide"] ? _c("article", {
    staticClass: "p-2 d-flex flex-column gap-1 text-center",
    "class": [!_vm.hasAction((_vm$selectedEcheance27 = _vm.selectedEcheance) === null || _vm$selectedEcheance27 === void 0 ? void 0 : _vm$selectedEcheance27.date_echeance) ? "border" : ""]
  }, [_c("div", [_vm.state[(_vm$selectedEcheance28 = _vm.selectedEcheance) === null || _vm$selectedEcheance28 === void 0 ? void 0 : _vm$selectedEcheance28.date_echeance] == "LOADING" ? _c("a", {
    staticClass: "d-flex gap-2 justify-content-center align-items-center mt-2 btn btn-sm bg-deep-blue fw-semibold shadow-sm",
    attrs: {
      title: "Envoi du rappel en cours..."
    }
  }, [_c("div", [_c("span", {
    staticClass: "spinner-border spinner-border-sm"
  })]), _vm._v(" "), _c("span", [_vm._v("Envoi du rappel en cours"), _c("loading-dots")], 1)]) : _vm.state[(_vm$selectedEcheance29 = _vm.selectedEcheance) === null || _vm$selectedEcheance29 === void 0 ? void 0 : _vm$selectedEcheance29.date_echeance] == "SENT" ? _c("a", {
    staticClass: "d-flex gap-2 justify-content-center align-items-center mt-2 btn btn-sm btn-success fw-semibold shadow-sm"
  }, [_c("span", [_vm._v("Rappel envoyé")]), _vm._v(" "), _c("i", {
    staticClass: "icofont-check"
  })]) : [_vm.state[((_vm$selectedEcheance30 = _vm.selectedEcheance) === null || _vm$selectedEcheance30 === void 0 ? void 0 : _vm$selectedEcheance30.date_echeance) + "_error"] ? _c("b", {
    staticClass: "text-danger fs-6"
  }, [_vm._v(_vm._s((_vm$state2 = _vm.state[((_vm$selectedEcheance31 = _vm.selectedEcheance) === null || _vm$selectedEcheance31 === void 0 ? void 0 : _vm$selectedEcheance31.date_echeance) + "_error"]) !== null && _vm$state2 !== void 0 ? _vm$state2 : "Une erreur s'est produite"))]) : _vm._e(), _vm._v(" "), _vm.state[((_vm$selectedEcheance32 = _vm.selectedEcheance) === null || _vm$selectedEcheance32 === void 0 ? void 0 : _vm$selectedEcheance32.date_echeance) + "_too_early"] ? _c("div", {
    staticClass: "d-flex flex-column"
  }, [_c("div", {
    staticClass: "d-flex flex-column align-items-center justify-content-center text-center px-2 py-1 my-2 border bg-light fw-semibold text-danger"
  }, [_c("i", {
    staticClass: "icofont-warning mb-1 fs-6"
  }), _vm._v("\n                                                    " + _vm._s(_vm.isReminderSentByCurrentUser((_vm$selectedEcheance33 = _vm.selectedEcheance) === null || _vm$selectedEcheance33 === void 0 || (_vm$selectedEcheance33 = _vm$selectedEcheance33.reminder_data) === null || _vm$selectedEcheance33 === void 0 || (_vm$selectedEcheance33 = _vm$selectedEcheance33.reminders) === null || _vm$selectedEcheance33 === void 0 ? void 0 : _vm$selectedEcheance33.at(-1)) ? "Vous avez déjà envoyé un rappel" : "Un rappel a déjà été envoyé") + " au client il y moins d'une journée.\n                                                  ")]), _vm._v(" "), _c("div", {
    staticClass: "d-flex flex-column gap-2"
  }, [(_vm$CONFIG15 = _vm.CONFIG) !== null && _vm$CONFIG15 !== void 0 && _vm$CONFIG15.CAN_RESEND_REMINDER_ON_SAME_DAY ? _c("button", {
    staticClass: "mx-auto btn btn-sm btn-danger fw-bold mt-2 cursor-pointer",
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.sendClientNotice(_vm.selectedEcheance, _vm.selectedEcheanceIndex, {
          bypass: true
        });
      }
    }
  }, [_vm._v("\n                                                      > Renvoyer un rappel quand même <\n                                                    ")]) : _vm._e(), _vm._v(" "), _c("button", {
    staticClass: "mx-auto btn btn-sm btn-outline-danger fw-bold cursor-pointer",
    on: {
      click: function click($event) {
        var _vm$selectedEcheance34;
        $event.preventDefault();
        return _vm.toggleState(((_vm$selectedEcheance34 = _vm.selectedEcheance) === null || _vm$selectedEcheance34 === void 0 ? void 0 : _vm$selectedEcheance34.date_echeance) + "_too_early", false);
      }
    }
  }, [_vm._v("Annuler")])])]) : [_vm.hasAction((_vm$selectedEcheance35 = _vm.selectedEcheance) === null || _vm$selectedEcheance35 === void 0 ? void 0 : _vm$selectedEcheance35.date_echeance) ? _c("a", {
    staticClass: "d-flex gap-2 justify-content-center align-items-center mt-2 btn btn-sm bg-deep-blue fw-semibold shadow-sm",
    on: {
      click: function click($event) {
        return _vm.sendClientNotice(_vm.selectedEcheance, _vm.selectedEcheanceIndex);
      }
    }
  }, [_vm.state[(_vm$selectedEcheance36 = _vm.selectedEcheance) === null || _vm$selectedEcheance36 === void 0 ? void 0 : _vm$selectedEcheance36.date_echeance] == "ERROR" ? _c("span", [_vm._v("\n                                                      Renvoyer le rappel\n                                                    ")]) : _c("span", [_vm._v("\n                                                      Envoyer un "), ((_vm$selectedEcheance37 = _vm.selectedEcheance) === null || _vm$selectedEcheance37 === void 0 || (_vm$selectedEcheance37 = _vm$selectedEcheance37.reminder_data) === null || _vm$selectedEcheance37 === void 0 || (_vm$selectedEcheance37 = _vm$selectedEcheance37.reminders) === null || _vm$selectedEcheance37 === void 0 ? void 0 : _vm$selectedEcheance37.length) > 0 ? _c("span", [_vm._v("autre")]) : _vm._e(), _vm._v(" rappel au client\n                                                    ")])]) : _c("span", [_vm._v("\n                                                    AUCUNE ACTION DISPONIBLE\n                                                  ")])]]], 2)]) : _vm._e()])], 1)]), _vm._v(" "), [_c("h5", {
    staticClass: "d-flex justify-content-between p-2 bg-white mb-0 text-deep-blue cursor-pointer",
    "class": [!_vm.state["selected_echeance_reminder_messages_show"] ? "border-bottom" : ""],
    on: {
      click: function click($event) {
        var _vm$state$selected_ec2;
        _vm.toggleState("selected_echeance_reminder_messages_show", !((_vm$state$selected_ec2 = _vm.state["selected_echeance_reminder_messages_show"]) !== null && _vm$state$selected_ec2 !== void 0 ? _vm$state$selected_ec2 : false));
      }
    }
  }, [_c("div", {
    staticClass: "d-flex align-items-center gap-3"
  }, [_c("i", {
    staticClass: "icofont-ui-messaging fw-bold"
  }), _vm._v("\n\n                                          " + _vm._s(_vm.state["selected_echeance_reminder_messages_show"] ? "Cacher" : "Voir") + " les messages\n                                        ")]), _vm._v(" "), _c("div", [_vm.state["selected_echeance_reminder_messages_show"] ? _c("i", {
    staticClass: "icofont-caret-up"
  }) : _c("i", {
    staticClass: "icofont-caret-down"
  })])]), _vm._v(" "), _c("transition", {
    attrs: {
      name: "fade-up"
    }
  }, [_vm.state["selected_echeance_reminder_messages_show"] ? _c("ul", {
    staticClass: "p-1 border-bottom bg-white"
  }, [((_vm$selectedEcheance$6 = (_vm$selectedEcheance38 = _vm.selectedEcheance) === null || _vm$selectedEcheance38 === void 0 || (_vm$selectedEcheance38 = _vm$selectedEcheance38.reminder_data) === null || _vm$selectedEcheance38 === void 0 || (_vm$selectedEcheance38 = _vm$selectedEcheance38.reminders) === null || _vm$selectedEcheance38 === void 0 ? void 0 : _vm$selectedEcheance38.length) !== null && _vm$selectedEcheance$6 !== void 0 ? _vm$selectedEcheance$6 : 0) == 0 ? _c("aside", {
    staticClass: "bg-white h-100 py-5 d-flex justify-content-center align-items-center"
  }, [_c("h6", [_vm._v("Aucun rappel envoyé")])]) : _vm._l(_toConsumableArray((_vm$selectedEcheance39 = _vm.selectedEcheance) === null || _vm$selectedEcheance39 === void 0 || (_vm$selectedEcheance39 = _vm$selectedEcheance39.reminder_data) === null || _vm$selectedEcheance39 === void 0 ? void 0 : _vm$selectedEcheance39.reminders).reverse(), function (reminder, i) {
    var _reminder$sent_by, _reminder$sent_by$rol, _reminder$sent_by2, _reminder$sent_by3, _reminder$sent_by$nam, _reminder$sent_by4, _vm$CONFIG16, _ref5, _reminder$created_at_, _vm$CONFIG17;
    return _c("li", {
      key: i,
      staticClass: "bg-white d-flex flex-column p-2",
      "class": [i % 2 == 0 ? "" : "border-top"]
    }, [_c("header", {
      staticClass: "cursor-pointer d-flex align-items-end justify-content-between gap-2 text-one-line",
      on: {
        click: function click($event) {
          var _vm$state3;
          _vm.toggleState(i + "_reminder_hide", !((_vm$state3 = _vm.state[i + "_reminder_hide"]) !== null && _vm$state3 !== void 0 ? _vm$state3 : false));
        }
      }
    }, [[_vm.isReminderSentByCurrentUser(reminder) ? _c("div", [_vm._v("Envoyé par "), _c("b", {
      staticClass: "text-orange"
    }, [_vm._v("vous")])]) : _c("div", [_vm._v("\n                                                      Envoyé par\n                                                      "), _c("div", {
      staticClass: "d-flex gap-1 flex-wrap"
    }, [reminder !== null && reminder !== void 0 && (_reminder$sent_by = reminder.sent_by) !== null && _reminder$sent_by !== void 0 && _reminder$sent_by.role ? _c("b", [_vm._v(_vm._s((_reminder$sent_by$rol = reminder === null || reminder === void 0 || (_reminder$sent_by2 = reminder.sent_by) === null || _reminder$sent_by2 === void 0 ? void 0 : _reminder$sent_by2.role_sigle) !== null && _reminder$sent_by$rol !== void 0 ? _reminder$sent_by$rol : reminder === null || reminder === void 0 || (_reminder$sent_by3 = reminder.sent_by) === null || _reminder$sent_by3 === void 0 ? void 0 : _reminder$sent_by3.role))]) : _vm._e(), _vm._v(" "), _c("b", [_vm._v(_vm._s((_reminder$sent_by$nam = reminder === null || reminder === void 0 || (_reminder$sent_by4 = reminder.sent_by) === null || _reminder$sent_by4 === void 0 ? void 0 : _reminder$sent_by4.name) !== null && _reminder$sent_by$nam !== void 0 ? _reminder$sent_by$nam : (_vm$CONFIG16 = _vm.CONFIG) === null || _vm$CONFIG16 === void 0 ? void 0 : _vm$CONFIG16.DEFAULT_NULL_INDICATOR))])])])], _vm._v(" "), _c("div", {
      staticClass: "d-flex align-items-center gap-3"
    }, [_c("b", [_vm._v(_vm._s((_ref5 = (_reminder$created_at_ = reminder === null || reminder === void 0 ? void 0 : reminder.created_at_readable) !== null && _reminder$created_at_ !== void 0 ? _reminder$created_at_ : reminder === null || reminder === void 0 ? void 0 : reminder.created_at) !== null && _ref5 !== void 0 ? _ref5 : (_vm$CONFIG17 = _vm.CONFIG) === null || _vm$CONFIG17 === void 0 ? void 0 : _vm$CONFIG17.DEFAULT_NULL_INDICATOR))]), _vm._v(" "), _c("div", [_vm.state[i + "_reminder_hide"] ? _c("i", {
      staticClass: "icofont-caret-up"
    }) : _c("i", {
      staticClass: "icofont-caret-down"
    })])])], 2), _vm._v(" "), _c("transition", {
      attrs: {
        name: "fade-up"
      }
    }, [!_vm.state[i + "_reminder_hide"] ? _c("article", {
      staticClass: "mt-1 p-2 rounded bg-light border"
    }, [_c("p", {
      domProps: {
        innerHTML: _vm._s(reminder === null || reminder === void 0 ? void 0 : reminder.message)
      }
    })]) : _vm._e()])], 1);
  })], 2) : _vm._e()])]], 2)]], 2)])]) : _c("article", {
    staticClass: "d-flex flex-column text-secondary justify-content-center align-items-center text-center py-5"
  }, [_c("i", {
    staticClass: "icofont-warning icofont-4x"
  }), _vm._v(" "), _c("h4", {
    staticClass: "my-2 mb-1"
  }, [_vm._v("\n                            Lignes du TAMOR vides\n                        ")]), _vm._v(" "), _c("h6", [_vm._v("\n                          Veuillez réupploader un fichier valide\n                        ")]), _vm._v(" "), !_vm.showFileInputForm ? _c("button", {
    staticClass: "mt-2 btn btn-sm btn-secondary d-flex gap-2 justify-content-center align-items-center",
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.setModeReupload();
      }
    }
  }, [_c("i", {
    staticClass: "icofont-upload-alt"
  }), _vm._v(" "), _c("span", [_vm._v("\n                            Uploader le fichier TAMOR\n                          ")])]) : _vm._e()])]) : _vm._e()])])]]], 2)])])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/modals/TamorModal_modal_body.vue?vue&type=style&index=0&id=aab697aa&scoped=true&lang=css":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/modals/TamorModal_modal_body.vue?vue&type=style&index=0&id=aab697aa&scoped=true&lang=css ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.tableFixedHead[data-v-aab697aa]          { background-color: #fff; overflow: auto; height: 100px;\n}\n.tableFixedHead thead th[data-v-aab697aa] { background-color: #fff; position: sticky !important; top: 0; z-index: 1;\n}\n.sticky[data-v-aab697aa]{ \r\n  background-color: #fff; \r\n  position: sticky !important; \r\n  top: 0; \r\n  z-index: 1;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/modals/TamorModal_modal_body.vue?vue&type=style&index=0&id=aab697aa&scoped=true&lang=css":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/modals/TamorModal_modal_body.vue?vue&type=style&index=0&id=aab697aa&scoped=true&lang=css ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TamorModal_modal_body_vue_vue_type_style_index_0_id_aab697aa_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TamorModal_modal_body.vue?vue&type=style&index=0&id=aab697aa&scoped=true&lang=css */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/modals/TamorModal_modal_body.vue?vue&type=style&index=0&id=aab697aa&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TamorModal_modal_body_vue_vue_type_style_index_0_id_aab697aa_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TamorModal_modal_body_vue_vue_type_style_index_0_id_aab697aa_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/modals/TamorModal_modal_body.vue":
/*!******************************************************************!*\
  !*** ./resources/js/components/modals/TamorModal_modal_body.vue ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TamorModal_modal_body_vue_vue_type_template_id_aab697aa_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TamorModal_modal_body.vue?vue&type=template&id=aab697aa&scoped=true */ "./resources/js/components/modals/TamorModal_modal_body.vue?vue&type=template&id=aab697aa&scoped=true");
/* harmony import */ var _TamorModal_modal_body_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TamorModal_modal_body.vue?vue&type=script&lang=js */ "./resources/js/components/modals/TamorModal_modal_body.vue?vue&type=script&lang=js");
/* harmony import */ var _TamorModal_modal_body_vue_vue_type_style_index_0_id_aab697aa_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TamorModal_modal_body.vue?vue&type=style&index=0&id=aab697aa&scoped=true&lang=css */ "./resources/js/components/modals/TamorModal_modal_body.vue?vue&type=style&index=0&id=aab697aa&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _TamorModal_modal_body_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _TamorModal_modal_body_vue_vue_type_template_id_aab697aa_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _TamorModal_modal_body_vue_vue_type_template_id_aab697aa_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "aab697aa",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/modals/TamorModal_modal_body.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/modals/TamorModal_modal_body.vue?vue&type=script&lang=js":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/modals/TamorModal_modal_body.vue?vue&type=script&lang=js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TamorModal_modal_body_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TamorModal_modal_body.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/modals/TamorModal_modal_body.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TamorModal_modal_body_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/modals/TamorModal_modal_body.vue?vue&type=style&index=0&id=aab697aa&scoped=true&lang=css":
/*!**************************************************************************************************************************!*\
  !*** ./resources/js/components/modals/TamorModal_modal_body.vue?vue&type=style&index=0&id=aab697aa&scoped=true&lang=css ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TamorModal_modal_body_vue_vue_type_style_index_0_id_aab697aa_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TamorModal_modal_body.vue?vue&type=style&index=0&id=aab697aa&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/modals/TamorModal_modal_body.vue?vue&type=style&index=0&id=aab697aa&scoped=true&lang=css");


/***/ }),

/***/ "./resources/js/components/modals/TamorModal_modal_body.vue?vue&type=template&id=aab697aa&scoped=true":
/*!************************************************************************************************************!*\
  !*** ./resources/js/components/modals/TamorModal_modal_body.vue?vue&type=template&id=aab697aa&scoped=true ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TamorModal_modal_body_vue_vue_type_template_id_aab697aa_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TamorModal_modal_body_vue_vue_type_template_id_aab697aa_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TamorModal_modal_body_vue_vue_type_template_id_aab697aa_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TamorModal_modal_body.vue?vue&type=template&id=aab697aa&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/modals/TamorModal_modal_body.vue?vue&type=template&id=aab697aa&scoped=true");


/***/ })

}]);