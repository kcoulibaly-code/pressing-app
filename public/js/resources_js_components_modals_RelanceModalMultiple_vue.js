"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_modals_RelanceModalMultiple_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/modals/RelanceModalMultiple.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/modals/RelanceModalMultiple.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_credit_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/credit.service */ "./resources/js/services/credit.service.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./resources/js/services/auth.service.js");
/* harmony import */ var _services_ebapis_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/ebapis.service */ "./resources/js/services/ebapis.service.js");
/* harmony import */ var _services_notifications_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/notifications.service */ "./resources/js/services/notifications.service.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return r; }; var t, r = {}, e = Object.prototype, n = e.hasOwnProperty, o = "function" == typeof Symbol ? Symbol : {}, i = o.iterator || "@@iterator", a = o.asyncIterator || "@@asyncIterator", u = o.toStringTag || "@@toStringTag"; function c(t, r, e, n) { Object.defineProperty(t, r, { value: e, enumerable: !n, configurable: !n, writable: !n }); } try { c({}, ""); } catch (t) { c = function c(t, r, e) { return t[r] = e; }; } function h(r, e, n, o) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype); return c(a, "_invoke", function (r, e, n) { var o = 1; return function (i, a) { if (3 === o) throw Error("Generator is already running"); if (4 === o) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var u = n.delegate; if (u) { var c = d(u, n); if (c) { if (c === f) continue; return c; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (1 === o) throw o = 4, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = 3; var h = s(r, e, n); if ("normal" === h.type) { if (o = n.done ? 4 : 2, h.arg === f) continue; return { value: h.arg, done: n.done }; } "throw" === h.type && (o = 4, n.method = "throw", n.arg = h.arg); } }; }(r, n, new Context(o || [])), !0), a; } function s(t, r, e) { try { return { type: "normal", arg: t.call(r, e) }; } catch (t) { return { type: "throw", arg: t }; } } r.wrap = h; var f = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var l = {}; c(l, i, function () { return this; }); var p = Object.getPrototypeOf, y = p && p(p(x([]))); y && y !== e && n.call(y, i) && (l = y); var v = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(l); function g(t) { ["next", "throw", "return"].forEach(function (r) { c(t, r, function (t) { return this._invoke(r, t); }); }); } function AsyncIterator(t, r) { function e(o, i, a, u) { var c = s(t[o], t, i); if ("throw" !== c.type) { var h = c.arg, f = h.value; return f && "object" == _typeof(f) && n.call(f, "__await") ? r.resolve(f.__await).then(function (t) { e("next", t, a, u); }, function (t) { e("throw", t, a, u); }) : r.resolve(f).then(function (t) { h.value = t, a(h); }, function (t) { return e("throw", t, a, u); }); } u(c.arg); } var o; c(this, "_invoke", function (t, n) { function i() { return new r(function (r, o) { e(t, n, r, o); }); } return o = o ? o.then(i, i) : i(); }, !0); } function d(r, e) { var n = e.method, o = r.i[n]; if (o === t) return e.delegate = null, "throw" === n && r.i["return"] && (e.method = "return", e.arg = t, d(r, e), "throw" === e.method) || "return" !== n && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + n + "' method")), f; var i = s(o, r.i, e.arg); if ("throw" === i.type) return e.method = "throw", e.arg = i.arg, e.delegate = null, f; var a = i.arg; return a ? a.done ? (e[r.r] = a.value, e.next = r.n, "return" !== e.method && (e.method = "next", e.arg = t), e.delegate = null, f) : a : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f); } function w(t) { this.tryEntries.push(t); } function m(r) { var e = r[4] || {}; e.type = "normal", e.arg = t, r[4] = e; } function Context(t) { this.tryEntries = [[-1]], t.forEach(w, this), this.reset(!0); } function x(r) { if (null != r) { var e = r[i]; if (e) return e.call(r); if ("function" == typeof r.next) return r; if (!isNaN(r.length)) { var o = -1, a = function e() { for (; ++o < r.length;) if (n.call(r, o)) return e.value = r[o], e.done = !1, e; return e.value = t, e.done = !0, e; }; return a.next = a; } } throw new TypeError(_typeof(r) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, c(v, "constructor", GeneratorFunctionPrototype), c(GeneratorFunctionPrototype, "constructor", GeneratorFunction), c(GeneratorFunctionPrototype, u, GeneratorFunction.displayName = "GeneratorFunction"), r.isGeneratorFunction = function (t) { var r = "function" == typeof t && t.constructor; return !!r && (r === GeneratorFunction || "GeneratorFunction" === (r.displayName || r.name)); }, r.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, c(t, u, "GeneratorFunction")), t.prototype = Object.create(v), t; }, r.awrap = function (t) { return { __await: t }; }, g(AsyncIterator.prototype), c(AsyncIterator.prototype, a, function () { return this; }), r.AsyncIterator = AsyncIterator, r.async = function (t, e, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(h(t, e, n, o), i); return r.isGeneratorFunction(e) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, g(v), c(v, u, "Generator"), c(v, i, function () { return this; }), c(v, "toString", function () { return "[object Generator]"; }), r.keys = function (t) { var r = Object(t), e = []; for (var n in r) e.unshift(n); return function t() { for (; e.length;) if ((n = e.pop()) in r) return t.value = n, t.done = !1, t; return t.done = !0, t; }; }, r.values = x, Context.prototype = { constructor: Context, reset: function reset(r) { if (this.prev = this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(m), !r) for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0][4]; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(r) { if (this.done) throw r; var e = this; function n(t) { a.type = "throw", a.arg = r, e.next = t; } for (var o = e.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i[4], u = this.prev, c = i[1], h = i[2]; if (-1 === i[0]) return n("end"), !1; if (!c && !h) throw Error("try statement without catch or finally"); if (null != i[0] && i[0] <= u) { if (u < c) return this.method = "next", this.arg = t, n(c), !0; if (u < h) return n(h), !1; } } }, abrupt: function abrupt(t, r) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var n = this.tryEntries[e]; if (n[0] > -1 && n[0] <= this.prev && this.prev < n[2]) { var o = n; break; } } o && ("break" === t || "continue" === t) && o[0] <= r && r <= o[2] && (o = null); var i = o ? o[4] : {}; return i.type = t, i.arg = r, o ? (this.method = "next", this.next = o[2], f) : this.complete(i); }, complete: function complete(t, r) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), f; }, finish: function finish(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[2] === t) return this.complete(e[4], e[3]), m(e), f; } }, "catch": function _catch(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[0] === t) { var n = e[4]; if ("throw" === n.type) { var o = n.arg; m(e); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(r, e, n) { return this.delegate = { i: x(r), r: e, n: n }, "next" === this.method && (this.arg = t), f; } }, r; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
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




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "RelanceModal",
  props: {
    dossier_credit: Object
  },
  data: function data() {
    return {
      current_step: null,
      ebapisHost: _services_ebapis_service__WEBPACK_IMPORTED_MODULE_2__["default"].host,
      isLoading: false,
      isLoadingMarkRead: false,
      NUMBER_OF_STEPS_AFTER_CURRENT_STEP_TO_SHOW: 0,
      activeTab: 'new',
      // 'new' ou 'history'
      relancesList: [],
      // Liste de toutes les relances
      relanceForm: {
        receivers: [],
        // is_received: {},
        // is_seen: {},
        message: null,
        sender: null,
        sent_at: null
      },
      errorMessage: null,
      relanceReceiverState: {},
      RELANCE_STATUS: {
        SENDING: 'SENDING',
        SENT: 'SENT',
        RECEIVED: 'RECEIVED'
      },
      workflows: []
    };
  },
  computed: {
    main_receiver: function main_receiver() {
      var _this$workflows,
        _this = this,
        _this$dossier;
      // current_stage
      // affectation_target
      var main_receiver = (_this$workflows = this.workflows) === null || _this$workflows === void 0 ? void 0 : _this$workflows.find(function (item) {
        return item.stage_id == _this.current_step;
      });
      if ((_this$dossier = this.dossier) !== null && _this$dossier !== void 0 && _this$dossier.has_affectation) {
        var _this$workflows2;
        main_receiver = (_this$workflows2 = this.workflows) === null || _this$workflows2 === void 0 ? void 0 : _this$workflows2.find(function (item) {
          var _this$dossier2;
          return item.user_id == ((_this$dossier2 = _this.dossier) === null || _this$dossier2 === void 0 || (_this$dossier2 = _this$dossier2.affectation) === null || _this$dossier2 === void 0 || (_this$dossier2 = _this$dossier2.target) === null || _this$dossier2 === void 0 ? void 0 : _this$dossier2.user_id);
        });
      }
      return main_receiver;
    },
    is_current_user_only_available_receiver: function is_current_user_only_available_receiver() {
      return this.current_step == 0;
    },
    is_multiple_receivers: function is_multiple_receivers() {
      var _this$relanceForm;
      return ((_this$relanceForm = this.relanceForm) === null || _this$relanceForm === void 0 || (_this$relanceForm = _this$relanceForm.receivers) === null || _this$relanceForm === void 0 ? void 0 : _this$relanceForm.length) > 1;
    },
    secondary_receivers: function secondary_receivers() {
      return [];
    },
    relance_already_sent: function relance_already_sent() {
      // Une relance est considérée comme déjà envoyée si c'est la relanceForm actuelle qui a un sent_at
      // ET si on est en mode "nouvelle relance" (activeTab === 'new')
      return this.activeTab === 'new' && !!this.relanceForm.sent_at;
    },
    receivers: function receivers() {
      var _this$relanceForm2;
      return (_this$relanceForm2 = this.relanceForm) === null || _this$relanceForm2 === void 0 ? void 0 : _this$relanceForm2.receivers;
    },
    receivers_name_text: function receivers_name_text() {
      var text = "";
      var receivers = this.receivers.map(function (u) {
        return u.name;
      });
      if (receivers) {
        text = receivers[0];
        if (receivers.length > 1) {
          if (receivers.length > 2) {
            text += ', ';
            text += receivers.slice(1, receivers.length - 1).join(", ");
          }
          text += " et " + receivers[receivers.length - 1];
        }
      }
      return text;
    }
  },
  mounted: function mounted() {
    var _this$dossier_credit, _this$dossier_credit2, _this$dossier_credit3, _this$dossier_credit4, _this$dossier_credit5, _this$dossier_credit7;
    // this.$console.log("**MOUNTED** RelanceModal", this.authenticatedUser);
    this.decision_logs = _toConsumableArray((_this$dossier_credit = this.dossier_credit) === null || _this$dossier_credit === void 0 ? void 0 : _this$dossier_credit.decision_logs);
    var _workflows = _toConsumableArray((_this$dossier_credit2 = this.dossier_credit) === null || _this$dossier_credit2 === void 0 ? void 0 : _this$dossier_credit2.pub_workflow);
    this.final_outcome = (_this$dossier_credit3 = this.dossier_credit) === null || _this$dossier_credit3 === void 0 ? void 0 : _this$dossier_credit3.final_outcome;
    this.current_step = (_this$dossier_credit4 = this.dossier_credit) === null || _this$dossier_credit4 === void 0 || (_this$dossier_credit4 = _this$dossier_credit4.workflow) === null || _this$dossier_credit4 === void 0 || (_this$dossier_credit4 = _this$dossier_credit4.current_stage) === null || _this$dossier_credit4 === void 0 ? void 0 : _this$dossier_credit4.stage_id;
    this.workflows = _workflows.slice(0, this.current_step + this.NUMBER_OF_STEPS_AFTER_CURRENT_STEP_TO_SHOW + 1).reverse();
    this.workflows = _toConsumableArray(this.workflows).map(function (workflow) {
      return _objectSpread({
        user_id: workflow.responsible_id,
        name: workflow.responsible
      }, workflow);
    });
    // Gérer la liste des relances (array au lieu d'un seul objet)
    if (Array.isArray((_this$dossier_credit5 = this.dossier_credit) === null || _this$dossier_credit5 === void 0 ? void 0 : _this$dossier_credit5.relance)) {
      this.relancesList = this.dossier_credit.relance;
    } else {
      var _this$dossier_credit6;
      if ((_this$dossier_credit6 = this.dossier_credit) !== null && _this$dossier_credit6 !== void 0 && _this$dossier_credit6.relance) {
        // Compatibilité avec l'ancien format (objet unique)
        this.relancesList = [this.dossier_credit.relance];
      } else {
        this.relancesList = [];
      }
    }
    this.relanceForm = _objectSpread(_objectSpread({
      cred_pub_key: (_this$dossier_credit7 = this.dossier_credit) === null || _this$dossier_credit7 === void 0 ? void 0 : _this$dossier_credit7.cred_pub_key
    }, this.relanceForm), {}, {
      sender: this.authenticatedUser
    });

    // this.relanceReceiverState = Object.fromEntries(this.relanceForm.receivers.map(item => ([item.user_id, item.status ?? null])))
    // this.$console.log("workflows", this.workflows);
    // this.$console.log("current step", this.current_step);
    // this.$console.log("authenticatedUser", this.authenticatedUser);
  },
  methods: {
    receivers_name_text_individual: function receivers_name_text_individual(relance) {
      var text = "";
      var receivers = relance === null || relance === void 0 ? void 0 : relance.receivers.map(function (u) {
        return u.name;
      });
      if (receivers) {
        text = receivers[0];
        if (receivers.length > 1) {
          if (receivers.length > 2) {
            text += ', ';
            text += receivers.slice(1, receivers.length - 1).join(", ");
          }
          text += " et " + receivers[receivers.length - 1];
        }
      }
      return text;
    },
    is_relance_sent_by_current_user: function is_relance_sent_by_current_user(relance) {
      var _ref, _relance$sender, _this$authenticatedUs;
      return (_ref = (relance === null || relance === void 0 || (_relance$sender = relance.sender) === null || _relance$sender === void 0 ? void 0 : _relance$sender.user_id) == ((_this$authenticatedUs = this.authenticatedUser) === null || _this$authenticatedUs === void 0 ? void 0 : _this$authenticatedUs.user_id)) !== null && _ref !== void 0 ? _ref : false;
    },
    has_current_user_answered: function has_current_user_answered(relance) {
      var _relance$receivers$so,
        _this2 = this;
      return (_relance$receivers$so = relance === null || relance === void 0 ? void 0 : relance.receivers.some(function (u) {
        var _this2$authenticatedU;
        return u.user_id == ((_this2$authenticatedU = _this2.authenticatedUser) === null || _this2$authenticatedU === void 0 ? void 0 : _this2$authenticatedU.user_id) && u.is_read;
      })) !== null && _relance$receivers$so !== void 0 ? _relance$receivers$so : false;
    },
    is_current_user_a_receiver: function is_current_user_a_receiver(relance) {
      var _relance$receivers$so2,
        _this3 = this;
      return (_relance$receivers$so2 = relance === null || relance === void 0 ? void 0 : relance.receivers.some(function (u) {
        var _this3$authenticatedU;
        return u.user_id == ((_this3$authenticatedU = _this3.authenticatedUser) === null || _this3$authenticatedU === void 0 ? void 0 : _this3$authenticatedU.user_id);
      })) !== null && _relance$receivers$so2 !== void 0 ? _relance$receivers$so2 : false;
    },
    canSelectReceiver: function canSelectReceiver(user_id) {
      var _this$authenticatedUs2;
      return ((_this$authenticatedUs2 = this.authenticatedUser) === null || _this$authenticatedUs2 === void 0 ? void 0 : _this$authenticatedUs2.user_id) != user_id;
    },
    closeModal: function closeModal() {
      this.$emit('close-modal');
    },
    isCurrentUser: function isCurrentUser(responsible_id) {
      var _this$authenticatedUs3;
      return ((_this$authenticatedUs3 = this.authenticatedUser) === null || _this$authenticatedUs3 === void 0 ? void 0 : _this$authenticatedUs3.user_id) == responsible_id;
    },
    isUserVisible: function isUserVisible(_ref2) {
      var user_id = _ref2.user_id;
      if (!this.relanceForm.sent_at) {
        return true;
      }
      return this.isSelected(user_id);
    },
    isSelected: function isSelected(user_id) {
      var _this$receivers;
      return ((_this$receivers = this.receivers) === null || _this$receivers === void 0 ? void 0 : _this$receivers.findIndex(function (item) {
        return item.user_id == user_id;
      })) !== -1;
    },
    resetReceivers: function resetReceivers() {
      this.relanceForm.receivers = [];
    },
    resetRelanceForm: function resetRelanceForm() {
      var _this$dossier_credit8;
      this.relanceForm = {
        cred_pub_key: (_this$dossier_credit8 = this.dossier_credit) === null || _this$dossier_credit8 === void 0 ? void 0 : _this$dossier_credit8.cred_pub_key,
        receivers: [],
        message: null,
        sender: this.authenticatedUser,
        sent_at: null
      };
    },
    // Nouvelle méthode pour créer une nouvelle relance
    createNewRelance: function createNewRelance() {
      this.resetRelanceForm();
      this.activeTab = 'new';
      this.relanceReceiverState = {};
    },
    // Méthode pour basculer vers l'onglet "Nouvelle Relance"
    switchToNewTab: function switchToNewTab() {
      this.activeTab = 'new';
      // Si la relanceForm actuelle a déjà été envoyée, la réinitialiser
      if (this.relanceForm.sent_at) {
        this.resetRelanceForm();
        this.relanceReceiverState = {};
      }
    },
    sendRelance: function sendRelance() {
      var _this4 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _this4.errorMessage = null;
              // this.$console.log(">>sendRelance", this.relanceForm)
              _this4.relanceReceiverState = Object.fromEntries(_this4.receivers.map(function (item) {
                return [item.user_id, _this4.RELANCE_STATUS.SENDING];
              }));
              // this.$console.log("relanceReceiverState", this.relanceReceiverState);
              _this4.isLoading = true;
              _context.next = 5;
              return _this4.$axios.post("/api/send-relance", _this4.relanceForm).then(function (res) {
                var response = res.data;
                console.dir(response);
                if (!(response !== null && response !== void 0 && response.is_success)) {
                  var _response$message;
                  _this4.$toasted.show((_response$message = response === null || response === void 0 ? void 0 : response.message) !== null && _response$message !== void 0 ? _response$message : "Action indisponible pour l'instant. Veuillez réessayer plus tard");
                  _this4.errorMessage = "Une erreur s'est produite. Veuillez réessayer";
                  _this4.relanceReceiverState = Object.fromEntries(_this4.receivers.map(function (item) {
                    return [item.user_id, null];
                  }));
                  return;
                }
                var data = response === null || response === void 0 ? void 0 : response.data;
                _this4.relanceForm = data;

                // Ajouter la nouvelle relance à la liste
                _this4.relancesList.push(data);

                // Passer automatiquement à l'onglet historique après l'envoi
                _this4.activeTab = 'history';
                _this4.relanceReceiverState = Object.fromEntries(_this4.relanceForm.receivers.map(function (item) {
                  return [item.user_id, item.status];
                }));
              })["catch"](function (err) {
                console.error(err);
                _this4.isLoading = false;
                _this4.$toasted.show("Une erreur s'est produite ! veuillez réessayer");
                _this4.errorMessage = "Une erreur s'est produite. Veuillez réessayer";
                _this4.relanceReceiverState = Object.fromEntries(_this4.receivers.map(function (item) {
                  return [item.user_id, null];
                }));
              })["finally"](function () {
                _this4.isLoading = false;
              });
            case 5:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    },
    startRelance: function startRelance() {
      var _this$relanceForm3, _this$relanceForm4;
      this.errorMessage = null;
      var messageText = !!((_this$relanceForm3 = this.relanceForm) !== null && _this$relanceForm3 !== void 0 && _this$relanceForm3.message) ? ' avec le message: "' + ((_this$relanceForm4 = this.relanceForm) === null || _this$relanceForm4 === void 0 ? void 0 : _this$relanceForm4.message) + '"' : '';
      this.$confirm("Vous allez relancer " + this.receivers_name_text + messageText + ".\n Etes-vous sûr(e) de continuer ?", "Lancer Relance").then(this.sendRelance);
    },
    toggleSelect: function toggleSelect(_ref3) {
      var name = _ref3.name,
        user_id = _ref3.user_id;
      // this.$console.log("toggleSelect", name, user_id);
      if (this.isCurrentUser(user_id)) return;
      if (this.relanceReceiverState[user_id] != null) return;
      var receivers = _toConsumableArray(this.relanceForm.receivers);
      var index = receivers === null || receivers === void 0 ? void 0 : receivers.findIndex(function (item) {
        return item.user_id == user_id;
      });
      if (index !== -1) {
        receivers.splice(index, 1);
      } else {
        receivers.push({
          user_id: user_id,
          name: name
        });
      }
      this.relanceForm = _objectSpread(_objectSpread({}, this.relanceForm), {}, {
        receivers: receivers
      });
    },
    worflowIDClass: function worflowIDClass(workflow) {
      var _this$dossier_credit9;
      if (((_this$dossier_credit9 = this.dossier_credit) === null || _this$dossier_credit9 === void 0 || (_this$dossier_credit9 = _this$dossier_credit9.affectation) === null || _this$dossier_credit9 === void 0 || (_this$dossier_credit9 = _this$dossier_credit9.target) === null || _this$dossier_credit9 === void 0 ? void 0 : _this$dossier_credit9.stage_id) == (workflow === null || workflow === void 0 ? void 0 : workflow.id)) return 'bg-affectation color-white';
      if (this.current_step > (workflow === null || workflow === void 0 ? void 0 : workflow.id)) return 'bg-success color-white';
      if (this.current_step < (workflow === null || workflow === void 0 ? void 0 : workflow.id)) return 'bg-light';
      if (this.current_step == (workflow === null || workflow === void 0 ? void 0 : workflow.id)) return 'bg-deep-blue color-white';
    },
    // Nouvelles méthodes pour l'onglet historique
    formatDate: function formatDate(dateString) {
      if (!dateString) return '';
      var date = new Date(dateString);
      return date.toLocaleDateString('fr-FR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
    },
    getRelanceStatusBadge: function getRelanceStatusBadge(relance) {
      var allAnswered = relance.receivers.every(function (r) {
        return r.is_read;
      });
      var someAnswered = relance.receivers.some(function (r) {
        return r.is_read;
      });
      if (allAnswered) return 'bg-success';
      if (someAnswered) return 'bg-warning';
      return 'bg-secondary';
    },
    getRelanceStatusText: function getRelanceStatusText(relance) {
      var totalReceivers = relance.receivers.length;
      var answeredCount = relance.receivers.filter(function (r) {
        return r.is_read;
      }).length;
      if (answeredCount === totalReceivers) return 'Tous ont répondu';
      if (answeredCount === 0) return 'En attente';
      return "".concat(answeredCount, "/").concat(totalReceivers, " ont r\xE9pondu");
    },
    isCurrentUserReceiverAndNotAnswered: function isCurrentUserReceiverAndNotAnswered(relance) {
      var _this5 = this;
      var currentUserReceiver = relance.receivers.find(function (r) {
        var _this5$authenticatedU;
        return r.user_id === ((_this5$authenticatedU = _this5.authenticatedUser) === null || _this5$authenticatedU === void 0 ? void 0 : _this5$authenticatedU.user_id);
      });
      return currentUserReceiver && !currentUserReceiver.is_read;
    },
    hasCurrentUserAnswered: function hasCurrentUserAnswered(relance) {
      var _this6 = this;
      var currentUserReceiver = relance.receivers.find(function (r) {
        var _this6$authenticatedU;
        return r.user_id === ((_this6$authenticatedU = _this6.authenticatedUser) === null || _this6$authenticatedU === void 0 ? void 0 : _this6$authenticatedU.user_id);
      });
      return currentUserReceiver && currentUserReceiver.is_read;
    },
    // Modifier la méthode markRelanceAsRead pour accepter une relance spécifique
    markRelanceAsRead: function markRelanceAsRead() {
      var _arguments = arguments,
        _this7 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var _this7$dossier_credit;
        var relance, index, targetRelance, sender, endpoint, option, _res$data, _targetRelance$sender, res, _res$data$message, _res$data2, _index, _res$data3, _res$data4;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              relance = _arguments.length > 0 && _arguments[0] !== undefined ? _arguments[0] : null;
              index = _arguments.length > 1 && _arguments[1] !== undefined ? _arguments[1] : 0;
              _this7.isLoadingMarkRead = true;

              // Si aucune relance spécifique n'est fournie, utiliser la relanceForm actuelle
              targetRelance = relance || _this7.relanceForm;
              sender = targetRelance.sender;
              endpoint = "notifications/api/v1/mark-relance-as-read/";
              option = {
                user: _this7.authenticatedUser,
                cred_pub_key: (_this7$dossier_credit = _this7.dossier_credit) === null || _this7$dossier_credit === void 0 ? void 0 : _this7$dossier_credit.cred_pub_key,
                sender: sender,
                index: index // Ajouter l'ID de la relance si disponible
              };
              _context2.prev = 7;
              _context2.next = 10;
              return _this7.$axios.post(_this7.ebapisHost + endpoint, option);
            case 10:
              res = _context2.sent;
              if ((_res$data = res.data) !== null && _res$data !== void 0 && _res$data.is_success) {
                _context2.next = 14;
                break;
              }
              _this7.$toasted.show((_res$data$message = (_res$data2 = res.data) === null || _res$data2 === void 0 ? void 0 : _res$data2.message) !== null && _res$data$message !== void 0 ? _res$data$message : "Une erreur s'est produite");
              return _context2.abrupt("return");
            case 14:
              _this7.$toasted.show("Vous avez répondu à la relance de " + ((_targetRelance$sender = targetRelance.sender) === null || _targetRelance$sender === void 0 ? void 0 : _targetRelance$sender.name));

              // Mettre à jour la relance dans la liste
              if (relance) {
                _index = _this7.relancesList.findIndex(function (r) {
                  return r.id === relance.id || r === relance;
                });
                if (_index !== -1) {
                  _this7.relancesList[_index] = (_res$data3 = res.data) === null || _res$data3 === void 0 ? void 0 : _res$data3.data;
                }
              } else {
                _this7.relanceForm = (_res$data4 = res.data) === null || _res$data4 === void 0 ? void 0 : _res$data4.data;
              }
              _context2.next = 22;
              break;
            case 18:
              _context2.prev = 18;
              _context2.t0 = _context2["catch"](7);
              _this7.$console.error(_context2.t0);
              _this7.$toasted.show("Une erreur s'est produite");
            case 22:
              _context2.prev = 22;
              _this7.isLoadingMarkRead = false;
              return _context2.finish(22);
            case 25:
            case "end":
              return _context2.stop();
          }
        }, _callee2, null, [[7, 18, 22, 25]]);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/modals/RelanceModalMultiple.vue?vue&type=template&id=30263c83&scoped=true":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/modals/RelanceModalMultiple.vue?vue&type=template&id=30263c83&scoped=true ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm$workflows;
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "popup-modal"
  }, [_c("div", {
    staticClass: "container-fluid rounded"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-md-12 p-0 rounded"
  }, [_c("div", {
    staticClass: "text-center border-bottom"
  }, [_vm._m(0), _vm._v(" "), _c("div", {
    staticClass: "d-flex border-top"
  }, [_c("button", {
    staticClass: "btn flex-fill border-0 rounded-0 py-2",
    "class": _vm.activeTab === "new" ? "bg-orange text-white" : "bg-light",
    on: {
      click: _vm.switchToNewTab
    }
  }, [_c("i", {
    staticClass: "icofont-plus me-1"
  }), _vm._v("\n                  Nouvelle Relance\n                ")]), _vm._v(" "), _c("button", {
    staticClass: "btn flex-fill border-0 rounded-0 py-2 border-start",
    "class": _vm.activeTab === "history" ? "bg-orange text-white" : "bg-light",
    on: {
      click: function click($event) {
        _vm.activeTab = "history";
      }
    }
  }, [_c("i", {
    staticClass: "icofont-history me-1"
  }), _vm._v("\n                  Historique (" + _vm._s(_vm.relancesList.length) + ")\n                ")])]), _vm._v(" "), _vm.activeTab === "new" && _vm.receivers.length > 0 && !_vm.relance_already_sent ? _c("div", {
    staticClass: "px-3 py-1 border-top d-flex justify-content-between align-items-center"
  }, [_c("span", [_vm._v("\n                  " + _vm._s(_vm.receivers.length) + " personne" + _vm._s(_vm.receivers.length > 1 ? "s" : "") + " selectionnée" + _vm._s(_vm.receivers.length > 1 ? "s" : "") + "\n                ")]), _vm._v(" "), _c("span", {
    staticClass: "cursor-pointer",
    on: {
      click: function click($event) {
        $event.stopPropagation();
        return _vm.resetReceivers.apply(null, arguments);
      }
    }
  }, [_c("i", {
    staticClass: "icofont-close"
  })])]) : _vm._e()]), _vm._v(" "), _vm.activeTab === "new" ? [_vm.is_current_user_only_available_receiver ? _c("section", {
    staticClass: "p-4 text-center"
  }, [_vm._v("\n                Le dossier est présentement à votre niveau.\n              ")]) : _vm._e(), _vm._v(" "), [!_vm.is_current_user_only_available_receiver && ((_vm$workflows = _vm.workflows) === null || _vm$workflows === void 0 ? void 0 : _vm$workflows.length) > 0 ? _c("section", {
    staticStyle: {
      "max-height": "40vh",
      "overflow-y": "scroll"
    }
  }, [_c("hr", {
    staticClass: "my-0"
  }), _vm._v(" "), _vm._l(_vm.workflows, function (workflow, i) {
    var _vm$authenticatedUser, _vm$authenticatedUser2, _vm$authenticatedUser3, _vm$dossier_credit, _vm$workflows2;
    return _c("div", {
      key: i,
      attrs: {
        title: ((_vm$authenticatedUser = _vm.authenticatedUser) === null || _vm$authenticatedUser === void 0 ? void 0 : _vm$authenticatedUser.user_id) == (workflow === null || workflow === void 0 ? void 0 : workflow.responsible_id) ? "C'est vous" : (_vm.isSelected(workflow === null || workflow === void 0 ? void 0 : workflow.responsible_id) ? "Déselectionner" : "Selectionner ") + (workflow === null || workflow === void 0 ? void 0 : workflow.responsible)
      },
      on: {
        click: function click($event) {
          $event.stopPropagation();
          return _vm.toggleSelect(workflow);
        }
      }
    }, [_c("div", {
      staticClass: "d-flex gap-3 align-items-start justify-content-start p-3 py-2 cursor-pointer hover-white",
      "class": {
        "bg-light": _vm.current_step < workflow.id || _vm.isCurrentUser(workflow === null || workflow === void 0 ? void 0 : workflow.responsible_id)
      }
    }, [!_vm.isCurrentUser(workflow === null || workflow === void 0 ? void 0 : workflow.responsible_id) ? _c("div", {
      staticClass: "rounded-circle border text-center p-3 d-flex justify-content-center align-items-center",
      "class": [_vm.isSelected(workflow === null || workflow === void 0 ? void 0 : workflow.responsible_id) ? "bg-orange text-white" : ""],
      staticStyle: {
        height: "10px",
        width: "10px",
        overflow: "hidden"
      },
      attrs: {
        title: ((_vm$authenticatedUser2 = _vm.authenticatedUser) === null || _vm$authenticatedUser2 === void 0 ? void 0 : _vm$authenticatedUser2.user_id) == (workflow === null || workflow === void 0 ? void 0 : workflow.responsible_id) ? "C'est vous" : (_vm.isSelected(workflow === null || workflow === void 0 ? void 0 : workflow.responsible_id) ? "Déselectionner" : "Selectionner ") + (workflow === null || workflow === void 0 ? void 0 : workflow.responsible)
      }
    }, [_c("i", {
      staticClass: "icofont-check-alt icofont-2x"
    })]) : _vm._e(), _vm._v(" "), _c("div", {
      staticClass: "text-left w-100",
      staticStyle: {
        "background-color": "transparent!important"
      }
    }, [_c("p", {
      staticClass: "fs-6 mb-0 d-flex align-items-center justify-content-between"
    }, [_c("strong", [_vm._v(" " + _vm._s(workflow === null || workflow === void 0 ? void 0 : workflow.responsible))]), _vm._v(" "), ((_vm$authenticatedUser3 = _vm.authenticatedUser) === null || _vm$authenticatedUser3 === void 0 ? void 0 : _vm$authenticatedUser3.user_id) == (workflow === null || workflow === void 0 ? void 0 : workflow.responsible_id) ? _c("b", {
      staticClass: "badge bg-orange text-white my-1"
    }, [_vm._v("(C'est vous)")]) : _vm._e()]), _vm._v(" "), _c("p", {
      staticClass: "fs-6 mb-0"
    }, [_vm._v("\n                            " + _vm._s(workflow === null || workflow === void 0 ? void 0 : workflow.responsible_role) + "\n                          ")]), _vm._v(" "), _c("div", {
      staticClass: "d-flex align-items-center justify-content-between",
      staticStyle: {
        color: "#7f8c8d",
        "margin-bottom": "5px"
      }
    }, [_c("small", {
      "class": [_vm.current_step == (workflow === null || workflow === void 0 ? void 0 : workflow.id) ? "text-deep-blue fw-bold" : ""]
    }, [_vm._v(_vm._s(workflow === null || workflow === void 0 ? void 0 : workflow.action))]), _vm._v(" "), ((_vm$dossier_credit = _vm.dossier_credit) === null || _vm$dossier_credit === void 0 || (_vm$dossier_credit = _vm$dossier_credit.affectation) === null || _vm$dossier_credit === void 0 || (_vm$dossier_credit = _vm$dossier_credit.target) === null || _vm$dossier_credit === void 0 ? void 0 : _vm$dossier_credit.stage_id) == (workflow === null || workflow === void 0 ? void 0 : workflow.id) ? _c("b", {
      staticClass: "badge bg-affectation text-white"
    }, [_vm._v("\n                              Dossier affecté ici\n                            ")]) : _vm._e(), _vm._v(" "), _vm.current_step == (workflow === null || workflow === void 0 ? void 0 : workflow.id) ? _c("b", {
      staticClass: "badge bg-deep-blue text-white"
    }, [_vm._v("\n                              Dossier ici\n                            ")]) : _vm._e()]), _vm._v(" "), _c("div", {
      staticClass: "d-flex gap-2 align-items-center justify-content-between"
    }, [_c("span"), _vm._v(" "), _c("div", [_vm.relanceReceiverState[workflow === null || workflow === void 0 ? void 0 : workflow.user_id] == _vm.RELANCE_STATUS.SENDING ? _c("div", {
      staticClass: "d-flex gap-2 justify-content-end align-items-center"
    }, [_c("span", {
      staticClass: "spinner-border spinner-border-sm"
    }), _vm._v(" "), _c("span", [_vm._v("Envoi de la relance"), _c("span", {
      domProps: {
        innerHTML: _vm._s(_vm.loadingDots)
      }
    })])]) : _vm._e(), _vm._v(" "), _vm.relanceReceiverState[workflow === null || workflow === void 0 ? void 0 : workflow.user_id] == _vm.RELANCE_STATUS.SENT ? _c("div", {
      staticClass: "d-flex gap-2 justify-content-end align-items-center"
    }, [_c("i", {
      staticClass: "icofont-check"
    }), _vm._v(" "), _c("span", [_vm._v("\n                                  Relance envoyée\n                                ")])]) : _vm._e(), _vm._v(" "), _vm.relanceReceiverState[workflow === null || workflow === void 0 ? void 0 : workflow.user_id] == _vm.RELANCE_STATUS.RECEIVED ? _c("div", {
      staticClass: "d-flex gap-2 justify-content-end align-items-center"
    }, [_c("i", {
      staticClass: "text-success icofont-check-circle"
    }), _vm._v(" "), _c("span", [_vm._v("\n                                  Relance reçue\n                                ")])]) : _vm._e()])])])]), _vm._v(" "), i < ((_vm$workflows2 = _vm.workflows) === null || _vm$workflows2 === void 0 ? void 0 : _vm$workflows2.length) - 1 ? _c("div", {}, [_c("hr", {
      staticClass: "my-0"
    })]) : _vm._e()]);
  })], 2) : _vm._e()], _vm._v(" "), !_vm.relance_already_sent ? [_c("hr", {
    staticClass: "my-0"
  }), _vm._v(" "), _vm.isLoading ? _c("div", {
    staticClass: "d-flex gap-2 justify-content-center align-items-center p-2"
  }, [_c("div", {
    staticClass: "spinner-border spinner-border-sm"
  }), _vm._v(" "), _c("h5", {
    staticClass: "my-1"
  }, [_vm._v("\n                      Relance en cours\n                  ")])]) : [_vm.receivers.length > 0 ? _c("div", [_c("div", {
    staticClass: "p-2 pb-1"
  }, [_c("label", {
    staticClass: "fw-semibold mb-1",
    attrs: {
      "for": "relance_message_input"
    }
  }, [_vm._v("Message (optionel) :")]), _vm._v(" "), _c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.relanceForm.message,
      expression: "relanceForm.message"
    }],
    staticClass: "form-control",
    attrs: {
      id: "relance_message_input",
      rows: "",
      cols: "",
      placeholder: "Ajoutez un message"
    },
    domProps: {
      value: _vm.relanceForm.message
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.relanceForm, "message", $event.target.value);
      }
    }
  })]), _vm._v(" "), _vm.errorMessage ? _c("span", {
    staticClass: "px-2 text-danger fw-semibold mb-1"
  }, [_vm._v("\n                      " + _vm._s(_vm.errorMessage) + "\n                    ")]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "text-center p-2"
  }, [_c("button", {
    staticClass: "btn w-100 text-center p-2 cursor-pointer",
    "class": [_vm.receivers.length > 0 ? "bg-orange text-white" : "hover-white hover-text-danger"],
    on: {
      click: function click($event) {
        $event.stopPropagation();
        return _vm.startRelance.apply(null, arguments);
      }
    }
  }, [_c("b", [_vm._v("\n                            Relancer \n                            "), _c("span", [_vm._v("\n                              " + _vm._s(_vm.receivers_name_text) + "\n                            ")])])])])]) : _vm._e()]] : _vm._e()] : _vm._e(), _vm._v(" "), _vm.activeTab === "history" ? [_vm.relancesList.length === 0 ? _c("div", {
    staticClass: "p-4 text-center text-muted"
  }, [_c("i", {
    staticClass: "icofont-history icofont-2x mb-2"
  }), _vm._v(" "), _c("p", {
    staticClass: "mb-0"
  }, [_vm._v("Aucune relance pour ce dossier")]), _vm._v(" "), _c("button", {
    staticClass: "btn btn-orange mt-3",
    on: {
      click: _vm.createNewRelance
    }
  }, [_c("i", {
    staticClass: "icofont-plus me-1"
  }), _vm._v("\n                  Créer une relance\n                ")])]) : _c("div", {
    staticClass: "p-0",
    staticStyle: {
      "max-height": "60vh",
      "overflow-y": "auto"
    }
  }, _vm._l(_vm.relancesList, function (relance, index) {
    var _relance$sender, _relance$sender2, _relance$sender3, _relance$receivers, _relance$receivers2, _relance$receivers3, _relance$receivers4, _relance$receivers5, _relance$sender4, _relance$sender5, _relance$sender6;
    return _c("div", {
      key: index,
      staticClass: "border-bottom"
    }, [_vm.is_current_user_a_receiver(relance) ? _c("div", {
      staticClass: "p-3 text-center d-flex flex-column gap-2 justify-content-center align-items-center"
    }, [_c("p", [_c("b", [_vm._v(_vm._s(relance === null || relance === void 0 || (_relance$sender = relance.sender) === null || _relance$sender === void 0 ? void 0 : _relance$sender.name) + " "), relance !== null && relance !== void 0 && (_relance$sender2 = relance.sender) !== null && _relance$sender2 !== void 0 && _relance$sender2.role_sigle ? _c("span", [_vm._v("(" + _vm._s(relance === null || relance === void 0 || (_relance$sender3 = relance.sender) === null || _relance$sender3 === void 0 ? void 0 : _relance$sender3.role_sigle) + ")")]) : _vm._e(), _vm._v(" "), (relance === null || relance === void 0 || (_relance$receivers = relance.receivers) === null || _relance$receivers === void 0 ? void 0 : _relance$receivers.length) == 1 ? _c("span", [_vm._v("vous")]) : _vm._e(), _vm._v(" a envoyé une relance")]), _vm._v(" "), (relance === null || relance === void 0 || (_relance$receivers2 = relance.receivers) === null || _relance$receivers2 === void 0 ? void 0 : _relance$receivers2.length) > 2 ? _c("span", [_vm._v(" à vous et " + _vm._s((relance === null || relance === void 0 || (_relance$receivers3 = relance.receivers) === null || _relance$receivers3 === void 0 ? void 0 : _relance$receivers3.length) - 1) + " autre" + _vm._s((relance === null || relance === void 0 || (_relance$receivers4 = relance.receivers) === null || _relance$receivers4 === void 0 ? void 0 : _relance$receivers4.length) > 1 ? "s" : "") + " personne" + _vm._s((relance === null || relance === void 0 || (_relance$receivers5 = relance.receivers) === null || _relance$receivers5 === void 0 ? void 0 : _relance$receivers5.length) > 1 ? "s" : ""))]) : _vm._e(), _vm._v(" "), relance !== null && relance !== void 0 && relance.message ? _c("span", [_vm._v("avec le message "), _c("b", [_vm._v(_vm._s(relance === null || relance === void 0 ? void 0 : relance.message))])]) : _vm._e()]), _vm._v(" "), !_vm.has_current_user_answered(relance) ? _c("a", {
      staticClass: "btn w-100 btn-success text-white",
      on: {
        click: function click($event) {
          $event.stopPropagation();
          return _vm.markRelanceAsRead(relance, index);
        }
      }
    }, [_vm._v("Bien reçu"), _vm.isLoadingMarkRead ? _c("span", {
      domProps: {
        innerHTML: _vm._s(_vm.loadingDots)
      }
    }) : _vm._e()]) : _c("a", {
      staticClass: "text-success"
    }, [_vm._v("Vous avez répondu à la relance")])]) : _c("div", {
      staticClass: "p-3 text-center"
    }, [_vm.is_relance_sent_by_current_user(relance) ? _c("span", [_vm._v("Vous avez ")]) : _c("span", [_vm._v("\n                        " + _vm._s(relance === null || relance === void 0 || (_relance$sender4 = relance.sender) === null || _relance$sender4 === void 0 ? void 0 : _relance$sender4.name) + " "), relance !== null && relance !== void 0 && (_relance$sender5 = relance.sender) !== null && _relance$sender5 !== void 0 && _relance$sender5.role_sigle ? _c("span", [_vm._v("(" + _vm._s(relance === null || relance === void 0 || (_relance$sender6 = relance.sender) === null || _relance$sender6 === void 0 ? void 0 : _relance$sender6.role_sigle) + ")")]) : _vm._e(), _vm._v(" a déjà\n                      ")]), _vm._v("\n                      envoyé une relance à "), _c("b", [_vm._v(_vm._s(_vm.receivers_name_text_individual(relance)))]), _vm._v(" "), relance !== null && relance !== void 0 && relance.message ? _c("span", [_vm._v("avec le message "), _c("b", [_vm._v(_vm._s(relance === null || relance === void 0 ? void 0 : relance.message))])]) : _vm._e()])]);
  }), 0)] : _vm._e()], 2)])]), _vm._v(" "), _c("div")]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "p-3"
  }, [_c("h5", {
    staticClass: "mb-0"
  }, [_vm._v("\n                    Gestion des Relances\n                ")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/modals/RelanceModalMultiple.vue?vue&type=style&index=0&id=30263c83&lang=css&scoped=true":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/modals/RelanceModalMultiple.vue?vue&type=style&index=0&id=30263c83&lang=css&scoped=true ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.popup-modal[data-v-30263c83] {\r\n    background-color: #fefefe;\r\n    position: absolute;\r\n    left: 2%;\r\n    width: 60vh;\r\n    top: 105%;\r\n    z-index: 999;\r\n    border: 1px solid #95a5a6;\r\n    border-radius: 10px;\r\n    overflow: auto;\r\n    height: auto;\r\n    padding: 0;\r\n    box-shadow: 0 0 3px 0 #212529a8;\n}\n.popup-modal[data-v-30263c83]::-webkit-scrollbar-track {\r\n    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\r\n    background-color: #F5F5F5;\n}\n.popup-modal[data-v-30263c83]::-webkit-scrollbar {\r\n    width: 5px;\r\n    background-color: #F5F5F5;\n}\n.popup-modal[data-v-30263c83]::-webkit-scrollbar-thumb {\r\n    background-color: #2c3e50;\r\n    border: 2px solid #555555;\n}\n.ctn_dropdwn3[data-v-30263c83] {\r\n  opacity: 0;\r\n  box-shadow: 1px 1px 1px 1px grey;\r\n  width: 25vh;\r\n  position: relative;\r\n  left: 20vh;\r\n  top: -4vh;\r\n  padding: 1vh;\r\n  cursor: pointer;\n}\n#sous_menu li[data-v-30263c83],\r\n#sous_menu_Workflow li[data-v-30263c83] {\r\n  display: block;\r\n  border-bottom: 1px solid grey;\r\n  cursor: pointer;\n}\n#sous_menu[data-v-30263c83]:hover {\r\n  border-color: red;\n}\n#sous_menu[data-v-30263c83],\r\n#sous_menu_Workflow[data-v-30263c83] {\r\n  position: absolute;\r\n  background: white;\r\n  width: 120px;\r\n  box-shadow: 1px 1px 1px 1px grey;\r\n  z-index: 99999;\r\n  height: 22vh;\r\n  padding: 1vh;\r\n  transition: 0.5s;\r\n  min-height: 150px;\n}\n#sous_menu_Workflow[data-v-30263c83] {\r\n  left: 1vh;\n}\n.text-container[data-v-30263c83]::-webkit-scrollbar-track {\r\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\r\n  background-color: #F5F5F5;\n}\n.text-container[data-v-30263c83]::-webkit-scrollbar {\r\n  width: 5px;\r\n  background-color: #F5F5F5;\n}\n.text-container[data-v-30263c83]::-webkit-scrollbar-thumb {\r\n  background-color: #2c3e50;\r\n  border: 2px solid #555555;\n}\n.input-elevated2[data-v-30263c83] {\r\n  font-size: 16px;\r\n  line-height: 1.5;\r\n  border: none;\r\n  /* background: #FFFFFF;\r\n  background-image: url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20'><path fill='%23838D99' d='M13.22 14.63a8 8 0 1 1 1.41-1.41l4.29 4.29a1 1 0 1 1-1.41 1.41l-4.29-4.29zm-.66-2.07a6 6 0 1 0-8.49-8.49 6 6 0 0 0 8.49 8.49z'></path></svg>\"); */\r\n  /* background-repeat: no-repeat; */\r\n  background-position: 10px 10px;\r\n  background-size: 20px 20px;\r\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.08);\r\n  border-radius: 5px;\r\n  width: 300px;\r\n  padding: .5em 1em .5em 0.5em;\n}\n.input-elevated2[data-v-30263c83]::-moz-placeholder {\r\n  color: #838D99;\n}\n.input-elevated2[data-v-30263c83]::placeholder {\r\n  color: #838D99;\n}\n.input-elevated2[data-v-30263c83]:focus {\r\n  outline: none;\r\n  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.16);\n}\r\n\r\n/* TWO */\n.custom-field.two input[data-v-30263c83] {\r\n  border-radius: 0;\r\n  border-top-left-radius: 3px;\r\n  border-top-right-radius: 3px;\r\n  background:\r\n    linear-gradient(90deg, #222, #222) center bottom/0 0.15em no-repeat,\r\n    linear-gradient(90deg, #ccc, #ccc) left bottom/100% 0.15em no-repeat,\r\n    linear-gradient(90deg, #fafafa, #fafafa) left bottom/100% no-repeat;\r\n  transition: background-size 0.3s ease;\n}\n.custom-field.two input[data-v-30263c83]:not(:-moz-placeholder) {\r\n  background-size: 100% 0.15em, 100% 0.1em, 100%;\n}\n.custom-field.two input.dirty[data-v-30263c83],\r\n.custom-field.two input[data-v-30263c83]:not(:placeholder-shown),\r\n.custom-field.two input[data-v-30263c83]:focus {\r\n  background-size: 100% 0.15em, 100% 0.1em, 100%;\n}\na[data-v-30263c83] {\r\n  color: #000;\n}\r\n\r\n/* \r\n.show-menu-option {\r\n  background: #fff;\r\n  border: 1px solid;\r\n  position: absolute;\r\n  right: 4vh;\r\n  width: 125%;\r\n  top: 9vh;\r\n  z-index: 99999;\r\n  overflow: auto;\r\n  font-size: 15px;\r\n  box-shadow: 0 0 3px 0 grey;\r\n} */\n.hover-white[data-v-30263c83]:hover{\r\n  background-color: #f7f8f8;\n}\n.hover-text-danger[data-v-30263c83]:hover{\r\n  color: rgba(237, 28, 36, 0.8);\n}\n.btn-orange[data-v-30263c83] {\r\n  background-color: #ff6600;\r\n  border-color: #ff6600;\r\n  color: white;\n}\n.btn-orange[data-v-30263c83]:hover {\r\n  background-color: #e55a00;\r\n  border-color: #e55a00;\r\n  color: white;\n}\n.text-orange[data-v-30263c83] {\r\n  color: #ff6600;\n}\n.gestion-compte[data-v-30263c83]  {\r\n  display: flex;\n}\n.gestion-compte a[data-v-30263c83] {\r\n  border: 1px solid #dadce0;\r\n  border-radius: 5px;\r\n  width: 80%;\r\n  padding: 5px 10px;\n}\n.gestion-compte a[data-v-30263c83]:hover {\r\n  background-color: #f7f8f8;\n}\n.deconnexion[data-v-30263c83] {\r\n  border: 1px solid #dadce0;\r\n  border-radius: 0px;\r\n  padding-left: 30px;\r\n  padding-right: 30px;\r\n  padding-top: 10px;\r\n  padding-bottom: 10px;\n}\n.deconnexion a[data-v-30263c83]:hover {\r\n  background-color: #f7f8f8;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/modals/RelanceModalMultiple.vue?vue&type=style&index=0&id=30263c83&lang=css&scoped=true":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/modals/RelanceModalMultiple.vue?vue&type=style&index=0&id=30263c83&lang=css&scoped=true ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RelanceModalMultiple_vue_vue_type_style_index_0_id_30263c83_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RelanceModalMultiple.vue?vue&type=style&index=0&id=30263c83&lang=css&scoped=true */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/modals/RelanceModalMultiple.vue?vue&type=style&index=0&id=30263c83&lang=css&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RelanceModalMultiple_vue_vue_type_style_index_0_id_30263c83_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RelanceModalMultiple_vue_vue_type_style_index_0_id_30263c83_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/modals/RelanceModalMultiple.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/components/modals/RelanceModalMultiple.vue ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _RelanceModalMultiple_vue_vue_type_template_id_30263c83_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RelanceModalMultiple.vue?vue&type=template&id=30263c83&scoped=true */ "./resources/js/components/modals/RelanceModalMultiple.vue?vue&type=template&id=30263c83&scoped=true");
/* harmony import */ var _RelanceModalMultiple_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RelanceModalMultiple.vue?vue&type=script&lang=js */ "./resources/js/components/modals/RelanceModalMultiple.vue?vue&type=script&lang=js");
/* harmony import */ var _RelanceModalMultiple_vue_vue_type_style_index_0_id_30263c83_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RelanceModalMultiple.vue?vue&type=style&index=0&id=30263c83&lang=css&scoped=true */ "./resources/js/components/modals/RelanceModalMultiple.vue?vue&type=style&index=0&id=30263c83&lang=css&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _RelanceModalMultiple_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _RelanceModalMultiple_vue_vue_type_template_id_30263c83_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _RelanceModalMultiple_vue_vue_type_template_id_30263c83_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "30263c83",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/modals/RelanceModalMultiple.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/modals/RelanceModalMultiple.vue?vue&type=script&lang=js":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/modals/RelanceModalMultiple.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RelanceModalMultiple_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RelanceModalMultiple.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/modals/RelanceModalMultiple.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RelanceModalMultiple_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/modals/RelanceModalMultiple.vue?vue&type=style&index=0&id=30263c83&lang=css&scoped=true":
/*!*************************************************************************************************************************!*\
  !*** ./resources/js/components/modals/RelanceModalMultiple.vue?vue&type=style&index=0&id=30263c83&lang=css&scoped=true ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RelanceModalMultiple_vue_vue_type_style_index_0_id_30263c83_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RelanceModalMultiple.vue?vue&type=style&index=0&id=30263c83&lang=css&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/modals/RelanceModalMultiple.vue?vue&type=style&index=0&id=30263c83&lang=css&scoped=true");


/***/ }),

/***/ "./resources/js/components/modals/RelanceModalMultiple.vue?vue&type=template&id=30263c83&scoped=true":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/components/modals/RelanceModalMultiple.vue?vue&type=template&id=30263c83&scoped=true ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RelanceModalMultiple_vue_vue_type_template_id_30263c83_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RelanceModalMultiple_vue_vue_type_template_id_30263c83_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RelanceModalMultiple_vue_vue_type_template_id_30263c83_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RelanceModalMultiple.vue?vue&type=template&id=30263c83&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/modals/RelanceModalMultiple.vue?vue&type=template&id=30263c83&scoped=true");


/***/ })

}]);