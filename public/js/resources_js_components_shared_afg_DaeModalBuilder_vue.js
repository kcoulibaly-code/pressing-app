"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_shared_afg_DaeModalBuilder_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/DaeModalBuilder.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/DaeModalBuilder.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _shared_afg_InputCoreBankingClientNumber_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/afg/InputCoreBankingClientNumber.vue */ "./resources/js/components/shared/afg/InputCoreBankingClientNumber.vue");
/* harmony import */ var _vueform_multiselect_dist_multiselect_vue2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vueform/multiselect/dist/multiselect.vue2 */ "./node_modules/@vueform/multiselect/dist/multiselect.vue2.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({
  name: "BuilderDaeDad",
  props: {
    formAddDoss: {
      type: Object,
      "default": false
    },
    categorieClient: {
      type: String,
      "default": false
    },
    selectedTemplate: {
      type: Number,
      "default": false
    },
    queuedTemplateId: {
      type: Number,
      "default": false
    },
    userData: {
      type: Object,
      "default": false
    },
    onCoreBankingClientChanged: {
      type: Function,
      "default": false
    },
    loadConEntreprise: {
      type: Boolean,
      "default": false
    },
    setTypeDemande: {
      type: Function,
      "default": false
    },
    handleInputFile: {
      type: Function,
      "default": false
    },
    launchCreating: {
      type: Function,
      "default": false
    },
    loadingCreateDoss: {
      type: Boolean,
      "default": false
    },
    editFormAdd: {
      type: Boolean,
      "default": false
    },
    uploading: {
      type: Boolean,
      "default": false
    },
    handleInput: {
      type: Function,
      "default": false
    },
    convention_entreprises_: {
      type: Array,
      "default": false
    },
    convention_entreprise: {
      type: String,
      "default": false
    },
    countries: {
      type: Array,
      "default": false
    },
    MIX_ENTITY: {
      type: String,
      "default": false
    },
    clientBank: {
      type: String,
      "default": false
    },
    clientSelct: {
      type: Function,
      "default": false
    },
    ifSubmit: {
      type: Boolean,
      "default": false
    },
    authcheckUsr: {
      type: Object,
      "default": false
    },
    loadOldDossDad: {
      type: Function,
      "default": false
    }
  },
  components: {
    InputCoreBankingClientNumber: _shared_afg_InputCoreBankingClientNumber_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    Multiselect: _vueform_multiselect_dist_multiselect_vue2__WEBPACK_IMPORTED_MODULE_1__["default"]
  }
}, "name", "DaeModalBuilder"), "data", function data() {
  return {
    currentStep: 1,
    in_creditflow: null,
    is_sain: null,
    additionalInfo1: "",
    additionalInfo2: "",
    localConventionEntreprise: this.convention_entreprise,
    localConventionEntreprise_: this.convention_entreprises_
  };
}), "mounted", function mounted() {
  var _this = this;
  this.closeModal('openDaeInCreditflow');
  this.closeModal('openDaeInNotCreditflow');
  EventBus.$on('convention_entreprise', function (data) {
    _this.localConventionEntreprise = data;
    _this.$emit('update_convention_entreprise', _this.localConventionEntreprise);
    console.log("new this.localConventionEntreprise", _this.localConventionEntreprise);
  });
}), "methods", {
  updateConvention: function updateConvention(value, obj) {
    console.log(value);
    this.$emit('update_convention_entreprise', value);
  },
  onInput: function onInput(event) {
    this.handleInput(event.target.value);
  },
  closeModal: function closeModal(modalName) {
    this.$modal.hide(modalName);
  },
  returnToStep1: function returnToStep1() {
    this.is_sain = null, this.closeModal('openDaeSain');
    this.$modal.show("openDaeModal");
  },
  returnToStep2: function returnToStep2() {
    this.is_sain = null, this.closeModal('openDaeInCreditflow');
    this.closeModal('openDaeInNotCreditflow');
    this.$modal.show("openDaeSain");
  },
  handleStep1: function handleStep1(answer) {
    this.in_creditflow = answer;
    this.closeModal('openDaeModal');
    this.$modal.show("openDaeSain");
  },
  handleStep2: function handleStep2(answer) {
    this.is_sain = answer;
    if (this.is_sain == true) {
      this.closeModal('openDaeSain');
      this.$modal.show("openDaeDouteux");
    } else {
      if (this.in_creditflow == false) {
        this.closeModal('openDaeSain');
        this.$modal.show("openDaeInCreditflow");
      } else {
        this.closeModal('openDaeSain');
        this.$modal.show("openDaeInNotCreditflow");
      }
    }
  },
  goBack: function goBack() {
    if (this.currentStep > 1) {
      this.currentStep--;
      if (this.currentStep === 2) {
        this.is_sain = null;
      }
      if (this.currentStep === 1) {
        this.in_creditflow = null;
        this.is_sain = null;
      }
    }
  }
}), "computed", {}), "watch", {
  // formAddDoss(newVal, oldVal) {
  //   console.log(`maVariable a changé de "${oldVal}" à "${newVal}"`);
  // }
}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/InputCoreBankingClientNumber.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/InputCoreBankingClientNumber.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_afg_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/afg.service */ "./resources/js/services/afg.service.js");
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return r; }; var t, r = {}, e = Object.prototype, n = e.hasOwnProperty, o = "function" == typeof Symbol ? Symbol : {}, i = o.iterator || "@@iterator", a = o.asyncIterator || "@@asyncIterator", u = o.toStringTag || "@@toStringTag"; function c(t, r, e, n) { Object.defineProperty(t, r, { value: e, enumerable: !n, configurable: !n, writable: !n }); } try { c({}, ""); } catch (t) { c = function c(t, r, e) { return t[r] = e; }; } function h(r, e, n, o) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype); return c(a, "_invoke", function (r, e, n) { var o = 1; return function (i, a) { if (3 === o) throw Error("Generator is already running"); if (4 === o) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var u = n.delegate; if (u) { var c = d(u, n); if (c) { if (c === f) continue; return c; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (1 === o) throw o = 4, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = 3; var h = s(r, e, n); if ("normal" === h.type) { if (o = n.done ? 4 : 2, h.arg === f) continue; return { value: h.arg, done: n.done }; } "throw" === h.type && (o = 4, n.method = "throw", n.arg = h.arg); } }; }(r, n, new Context(o || [])), !0), a; } function s(t, r, e) { try { return { type: "normal", arg: t.call(r, e) }; } catch (t) { return { type: "throw", arg: t }; } } r.wrap = h; var f = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var l = {}; c(l, i, function () { return this; }); var p = Object.getPrototypeOf, y = p && p(p(x([]))); y && y !== e && n.call(y, i) && (l = y); var v = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(l); function g(t) { ["next", "throw", "return"].forEach(function (r) { c(t, r, function (t) { return this._invoke(r, t); }); }); } function AsyncIterator(t, r) { function e(o, i, a, u) { var c = s(t[o], t, i); if ("throw" !== c.type) { var h = c.arg, f = h.value; return f && "object" == _typeof(f) && n.call(f, "__await") ? r.resolve(f.__await).then(function (t) { e("next", t, a, u); }, function (t) { e("throw", t, a, u); }) : r.resolve(f).then(function (t) { h.value = t, a(h); }, function (t) { return e("throw", t, a, u); }); } u(c.arg); } var o; c(this, "_invoke", function (t, n) { function i() { return new r(function (r, o) { e(t, n, r, o); }); } return o = o ? o.then(i, i) : i(); }, !0); } function d(r, e) { var n = e.method, o = r.i[n]; if (o === t) return e.delegate = null, "throw" === n && r.i["return"] && (e.method = "return", e.arg = t, d(r, e), "throw" === e.method) || "return" !== n && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + n + "' method")), f; var i = s(o, r.i, e.arg); if ("throw" === i.type) return e.method = "throw", e.arg = i.arg, e.delegate = null, f; var a = i.arg; return a ? a.done ? (e[r.r] = a.value, e.next = r.n, "return" !== e.method && (e.method = "next", e.arg = t), e.delegate = null, f) : a : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f); } function w(t) { this.tryEntries.push(t); } function m(r) { var e = r[4] || {}; e.type = "normal", e.arg = t, r[4] = e; } function Context(t) { this.tryEntries = [[-1]], t.forEach(w, this), this.reset(!0); } function x(r) { if (null != r) { var e = r[i]; if (e) return e.call(r); if ("function" == typeof r.next) return r; if (!isNaN(r.length)) { var o = -1, a = function e() { for (; ++o < r.length;) if (n.call(r, o)) return e.value = r[o], e.done = !1, e; return e.value = t, e.done = !0, e; }; return a.next = a; } } throw new TypeError(_typeof(r) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, c(v, "constructor", GeneratorFunctionPrototype), c(GeneratorFunctionPrototype, "constructor", GeneratorFunction), c(GeneratorFunctionPrototype, u, GeneratorFunction.displayName = "GeneratorFunction"), r.isGeneratorFunction = function (t) { var r = "function" == typeof t && t.constructor; return !!r && (r === GeneratorFunction || "GeneratorFunction" === (r.displayName || r.name)); }, r.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, c(t, u, "GeneratorFunction")), t.prototype = Object.create(v), t; }, r.awrap = function (t) { return { __await: t }; }, g(AsyncIterator.prototype), c(AsyncIterator.prototype, a, function () { return this; }), r.AsyncIterator = AsyncIterator, r.async = function (t, e, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(h(t, e, n, o), i); return r.isGeneratorFunction(e) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, g(v), c(v, u, "Generator"), c(v, i, function () { return this; }), c(v, "toString", function () { return "[object Generator]"; }), r.keys = function (t) { var r = Object(t), e = []; for (var n in r) e.unshift(n); return function t() { for (; e.length;) if ((n = e.pop()) in r) return t.value = n, t.done = !1, t; return t.done = !0, t; }; }, r.values = x, Context.prototype = { constructor: Context, reset: function reset(r) { if (this.prev = this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(m), !r) for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0][4]; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(r) { if (this.done) throw r; var e = this; function n(t) { a.type = "throw", a.arg = r, e.next = t; } for (var o = e.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i[4], u = this.prev, c = i[1], h = i[2]; if (-1 === i[0]) return n("end"), !1; if (!c && !h) throw Error("try statement without catch or finally"); if (null != i[0] && i[0] <= u) { if (u < c) return this.method = "next", this.arg = t, n(c), !0; if (u < h) return n(h), !1; } } }, abrupt: function abrupt(t, r) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var n = this.tryEntries[e]; if (n[0] > -1 && n[0] <= this.prev && this.prev < n[2]) { var o = n; break; } } o && ("break" === t || "continue" === t) && o[0] <= r && r <= o[2] && (o = null); var i = o ? o[4] : {}; return i.type = t, i.arg = r, o ? (this.method = "next", this.next = o[2], f) : this.complete(i); }, complete: function complete(t, r) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), f; }, finish: function finish(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[2] === t) return this.complete(e[4], e[3]), m(e), f; } }, "catch": function _catch(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[0] === t) { var n = e[4]; if ("throw" === n.type) { var o = n.arg; m(e); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(r, e, n) { return this.delegate = { i: x(r), r: e, n: n }, "next" === this.method && (this.arg = t), f; } }, r; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'InputCoreBankingClientNumber',
  props: {
    formAddDoss: {
      type: Object,
      required: true,
      "default": function _default() {
        return {};
      }
    },
    userData: Object,
    categorieClient: {
      type: String,
      "default": null
    },
    showLabel: {
      type: Boolean,
      "default": true
    },
    create: {
      type: Boolean,
      "default": false
    }
  },
  data: function data() {
    return {
      afgClientIndiceInput: "",
      loadingAFGCustomer: false,
      hasAFGCustomerResult: null,
      customers_collection: null
    };
  },
  mounted: function mounted() {
    var _this = this,
      _this$$route$params;
    EventBus.$on('create-prospect', function (data) {
      if (data && _typeof(data) == 'object') {
        _this.onClientInputChange(data);
      }
    });
    EventBus.$on('new-formAddDoss', function (data) {
      _this.afgClientIndiceInput = data;
    });
    var customer_code = (_this$$route$params = this.$route.params) === null || _this$$route$params === void 0 ? void 0 : _this$$route$params.customer_code;
    if (!!customer_code) {
      this.afgClientIndiceInput = customer_code;
      this.onClientInputChange();
    }
  },
  computed: {
    computedClientIndiceInput: function computedClientIndiceInput() {
      var _this$formAddDoss;
      var indice = "";
      if (!['', null, undefined].includes((_this$formAddDoss = this.formAddDoss) === null || _this$formAddDoss === void 0 ? void 0 : _this$formAddDoss.oldDossRef)) {
        var _this$formAddDoss2;
        indice = (_this$formAddDoss2 = this.formAddDoss) === null || _this$formAddDoss2 === void 0 ? void 0 : _this$formAddDoss2.matcli;
      }
      return;
    }
  },
  methods: {
    // ?- Fetches AFG customer data from afg api and customer code
    loadAFGCustomer: function loadAFGCustomer(customer_code) {
      var _this2 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var _result$data, _result2, useTestData, result, _result$message, _result, data, _process$env$MIX_TEST, _data, _process$env$MIX_TEST2, _data2, _data3, _data$phone_numbers, _data4, _phoneNumbers$find$ph, _phoneNumbers$find, _data$addresses, _data5, _ref, _address$email, _data6, phoneNumbers, phone, _phoneNumbers$0$phone, _phoneNumbers$, normalizedPhone, addresses, address;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _this2.hasAFGCustomerResult = null;
              if (!(!customer_code || (customer_code === null || customer_code === void 0 ? void 0 : customer_code.length) < _services_afg_service__WEBPACK_IMPORTED_MODULE_0__["default"].CUSTOMER_CODE_LENGTH)) {
                _context.next = 6;
                break;
              }
              _this2.$toasted.show("Entrez un code client à " + _services_afg_service__WEBPACK_IMPORTED_MODULE_0__["default"].CUSTOMER_CODE_LENGTH + " chiffres", {
                duration: 5000
              });
              _this2.hasAFGCustomerResult = false;
              return _context.abrupt("return", null);
            case 6:
              _this2.loadingAFGCustomer = true;
              _this2.loading();
              useTestData = "local" == 'local';
              result = {};
              _context.next = 12;
              return _services_afg_service__WEBPACK_IMPORTED_MODULE_0__["default"].getCustomerCreditInfo(customer_code);
            case 12:
              result = _context.sent;
              _this2.loadingAFGCustomer = false;
              _this2.loaded();
              if (result.is_success) {
                _context.next = 20;
                break;
              }
              _this2.$console.log("error", result.error);
              _this2.$toasted.show((_result$message = (_result = result) === null || _result === void 0 ? void 0 : _result.message) !== null && _result$message !== void 0 ? _result$message : "Une erreur s'est produite, veuillez réessayer", {
                duration: 5000
              });
              _this2.hasAFGCustomerResult = false;
              return _context.abrupt("return", null);
            case 20:
              _this2.hasAFGCustomerResult = true;
              data = (_result$data = (_result2 = result) === null || _result2 === void 0 ? void 0 : _result2.data) !== null && _result$data !== void 0 ? _result$data : null;
              if (data) {
                _context.next = 26;
                break;
              }
              _this2.$toasted.show("Client Introuvable", {
                duration: 5000
              });
              _this2.hasAFGCustomerResult = false;
              return _context.abrupt("return", null);
            case 26:
              if (useTestData && false) // removed by dead control flow
{} else {
                if (!['', null, undefined].includes((_data3 = data) === null || _data3 === void 0 ? void 0 : _data3.middle_name)) {
                  data['first_name'] = data['first_name'] + ' ' + data['middle_name'];
                }
                phoneNumbers = (_data$phone_numbers = (_data4 = data) === null || _data4 === void 0 ? void 0 : _data4.phone_numbers) !== null && _data$phone_numbers !== void 0 ? _data$phone_numbers : [];
                phone = (_phoneNumbers$find$ph = (_phoneNumbers$find = phoneNumbers.find(function (p) {
                  return ["mobile", "Mobile"].includes(p === null || p === void 0 ? void 0 : p.phone_type_name);
                })) === null || _phoneNumbers$find === void 0 ? void 0 : _phoneNumbers$find.phone_number) !== null && _phoneNumbers$find$ph !== void 0 ? _phoneNumbers$find$ph : null;
                if (!phone) {
                  phone = (_phoneNumbers$0$phone = (_phoneNumbers$ = phoneNumbers[0]) === null || _phoneNumbers$ === void 0 ? void 0 : _phoneNumbers$.phone_number) !== null && _phoneNumbers$0$phone !== void 0 ? _phoneNumbers$0$phone : null;
                }
                if (typeof phone === 'string' && phone.length > 0) {
                  normalizedPhone = _this2.normalizePhoneNumber(phone);
                  data = _objectSpread(_objectSpread({}, data), {}, {
                    email: '',
                    indicatif: normalizedPhone.indicatif,
                    phone: normalizedPhone.phone
                  });
                }
                addresses = (_data$addresses = (_data5 = data) === null || _data5 === void 0 ? void 0 : _data5.addresses) !== null && _data$addresses !== void 0 ? _data$addresses : [];
                address = addresses.find(function (a) {
                  return a === null || a === void 0 ? void 0 : a.email;
                });
                data.email = (_ref = (_address$email = address === null || address === void 0 ? void 0 : address.email) !== null && _address$email !== void 0 ? _address$email : (_data6 = data) === null || _data6 === void 0 ? void 0 : _data6.email) !== null && _ref !== void 0 ? _ref : '';
              }
              return _context.abrupt("return", data);
            case 30:
              _context.prev = 30;
              _context.t0 = _context["catch"](0);
              _this2.hasAFGCustomerResult = false;
              _this2.$console.error("xxloadAFGCustomer", _context.t0);
              _this2.$toasted.show("Une erreur de réseau s'est produite", {
                duration: 5000
              });
              return _context.abrupt("return", null);
            case 36:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[0, 30]]);
      }))();
    },
    loading: function loading() {
      this.loadingAFGCustomer = true;
      this.$emit('loading', true);
    },
    loaded: function loaded() {
      this.loadingAFGCustomer = false;
      this.$emit('loading', false);
      this.$emit('loaded');
    },
    onClientInputChange: function onClientInputChange() {
      var _arguments = arguments,
        _this3 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var data, _this3$userData, _response, _response2, _response3, formData, response, NUMBER_LENGTH, _this3$userData2, _this3$userData3, fil;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              data = _arguments.length > 0 && _arguments[0] !== undefined ? _arguments[0] : null;
              _context2.prev = 1;
              formData = _objectSpread({}, _this3.formAddDoss);
              formData.filiale = "";
              formData.agence = "";
              formData.caf = "";
              formData.codeagence = "";
              formData.pays = "";
              formData.num_agence = "";
              if (!_this3.create) {
                _context2.next = 13;
                break;
              }
              response = _this3.createProspectData(data);
              _context2.next = 16;
              break;
            case 13:
              _context2.next = 15;
              return _this3.loadAFGCustomer(_this3.afgClientIndiceInput);
            case 15:
              response = _context2.sent;
            case 16:
              if (response) {
                _context2.next = 19;
                break;
              }
              _this3.$emit('core-banking-client-changed', null);
              return _context2.abrupt("return");
            case 19:
              formData.filiale = (_this3$userData = _this3.userData) === null || _this3$userData === void 0 ? void 0 : _this3$userData.filiale;
              NUMBER_LENGTH = 10; // formData.codeagence = formData.filiale?.toString()?.replace(" ", "_")+"_" + response.branch_name?.replace(/\s/g, "_");
              formData.codeagence = (_response = response) === null || _response === void 0 || (_response = _response.agence_info) === null || _response === void 0 || (_response = _response.agenceOrigination) === null || _response === void 0 ? void 0 : _response.code;
              formData.agence = (_response2 = response) === null || _response2 === void 0 || (_response2 = _response2.agence_info) === null || _response2 === void 0 || (_response2 = _response2.agenceOrigination) === null || _response2 === void 0 ? void 0 : _response2.agence;
              if (!response.branch_name) {
                fil = formData.filiale;
                formData.codeagence = (_this3$userData2 = _this3.userData) === null || _this3$userData2 === void 0 ? void 0 : _this3$userData2.codeagence;
                formData.agence = (_this3$userData3 = _this3.userData) === null || _this3$userData3 === void 0 || (_this3$userData3 = _this3$userData3.codeagence) === null || _this3$userData3 === void 0 ? void 0 : _this3$userData3.replaceAll('_', ' ').replace(fil, "").trim();
              }
              formData.codecaf = response.customer_officer_code;
              // formData.caf = response.customer_officer_name
              formData.caf = response.customer_officer_code;
              formData.matcli = response.customer_code;
              formData.nomcli = response.last_name;
              formData.prenomcli = response.first_name;
              formData.pays = response.country;
              formData.num_pays = response.country_code;
              formData.num_agence = (_response3 = response) === null || _response3 === void 0 || (_response3 = _response3.agence_info) === null || _response3 === void 0 || (_response3 = _response3.agenceOrigination) === null || _response3 === void 0 ? void 0 : _response3.numeros;
              // formData.phone = response.phone?.slice(-NUMBER_LENGTH);
              formData.phone = response.phone;
              formData.email = response.email;
              formData.adrescli = response.adress;
              formData.phonecli = response.phone;
              formData.indicatif = response.indicatif || formData.indicatif || "";
              formData.client = _objectSpread({}, formData);
              formData.client_core_banking = _objectSpread({}, response);
              _this3.$emit('core-banking-client-changed', formData);
              _context2.next = 45;
              break;
            case 42:
              _context2.prev = 42;
              _context2.t0 = _context2["catch"](1);
              _this3.$console.log("xx onClientInputChange", _context2.t0);
              // this.$toasted.show("Erreur ",{ duration: 5000 });
            case 45:
            case "end":
              return _context2.stop();
          }
        }, _callee2, null, [[1, 42]]);
      }))();
    },
    createProspectData: function createProspectData(data) {
      if (this.userData) {
        var _this$userData;
        data.is_retail = ((_this$userData = this.userData) === null || _this$userData === void 0 ? void 0 : _this$userData.categorie_client) == 'Retail';
        return _services_afg_service__WEBPACK_IMPORTED_MODULE_0__["default"].createProspectData(data);
      }
    },
    showLabelIndice: function showLabelIndice() {
      if (this.realEntity.toUpperCase() == "AFG") {
        return "ID client";
      }
      return "Indice client";
    },
    normalizePhoneNumber: function normalizePhoneNumber(rawPhone) {
      // Sana 
      if (!rawPhone || typeof rawPhone !== 'string') return {
        phone: rawPhone,
        indicatif: ''
      };
      ;
      rawPhone = rawPhone.replace(/[\s\-().]/g, ''); // Nettoyer : retirer espaces, tirets, parenthèses, etc.

      // Liste des indicatifs par pays, avec variantes
      var indicatifs = {
        Cameroun: ['+237', '237', '00237'],
        Mali: ['+223', '223', '00223']
      };
      var longueurs = {
        Cameroun: 9,
        Mali: 8
      };
      var indics = Object.values(indicatifs).flat();
      var longeurPhones = Object.values(longueurs).flat().sort(function (a, b) {
        return b - a;
      });
      var finalIndicatif = '';
      var finalPhone = rawPhone;
      var _iterator = _createForOfIteratorHelper(indics),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var indicatif = _step.value;
          var regex = new RegExp("^".concat(indicatif.replace("+", '\\+'), "[0-9]+"));
          if (regex.test(rawPhone)) {
            var _iterator2 = _createForOfIteratorHelper(longeurPhones),
              _step2;
            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var longeurPhone = _step2.value;
                var longueur = indicatif.length + longeurPhone;
                if (rawPhone.length >= longueur) {
                  finalIndicatif = indicatif.replace('+', '').replace('00', '');
                  finalPhone = rawPhone.replace(indicatif, '');
                  return {
                    phone: finalPhone,
                    indicatif: finalIndicatif
                  };
                }
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      return {
        phone: finalPhone,
        indicatif: ''
      };
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/DaeModalBuilder.vue?vue&type=template&id=4843caea&scoped=true":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/DaeModalBuilder.vue?vue&type=template&id=4843caea&scoped=true ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm$formAddDoss, _vm$formAddDoss2, _vm$formAddDoss3, _vm$formAddDoss4, _vm$formAddDoss$clien, _vm$formAddDoss5, _vm$formAddDoss6, _vm$formAddDoss$clien2, _vm$formAddDoss7, _vm$categorieClient, _vm$categorieClient2, _vm$categorieClient3, _vm$categorieClient4, _vm$formAddDoss8, _vm$formAddDoss9, _vm$formAddDoss1, _vm$formAddDoss10, _vm$formAddDoss11, _vm$categorieClient5, _vm$categorieClient6, _vm$categorieClient7, _vm$categorieClient8, _vm$formAddDoss12, _vm$formAddDoss13, _vm$categorieClient9, _vm$categorieClient0, _vm$categorieClient1, _vm$formAddDoss15, _vm$formAddDoss$clien3, _vm$formAddDoss16, _vm$categorieClient10, _vm$categorieClient11, _vm$categorieClient12, _vm$formAddDoss17, _vm$categorieClient13, _vm$categorieClient14, _vm$categorieClient15, _vm$categorieClient16, _vm$formAddDoss19;
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("modal", {
    staticClass: "pb-5",
    attrs: {
      name: "openDaeModal",
      width: "534px",
      height: "276",
      adaptive: true,
      resizable: true,
      clickToClose: false
    }
  }, [_c("div", {
    staticClass: "container py-3 mb-2",
    staticStyle: {
      overflow: "auto"
    }
  }, [_c("div", {
    staticClass: "col-12"
  }, [_c("div", {
    staticClass: "d-flex justify-content-end"
  }, [_c("i", {
    staticClass: "close-btn-modal icofont-close-circled icofont-2x",
    staticStyle: {
      cursor: "pointer"
    },
    on: {
      click: function click($event) {
        return _vm.closeModal("openDaeModal");
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "container my-5"
  }, [_c("div", {
    staticClass: "text-center fw-bold",
    staticStyle: {
      "font-size": "1rem"
    }
  }, [_vm._v("\n                        La présente DAE/DAD concerne-t-elle un dossier\n                        instruit dans CREDITFLOW ?\n                    ")]), _vm._v(" "), _c("div", {
    staticClass: "d-flex justify-content-center gap-5 my-4"
  }, [_c("button", {
    staticClass: "btn",
    staticStyle: {
      "background-color": "#27ae60",
      color: "white",
      "font-weight": "bold",
      padding: "10px 50px"
    },
    on: {
      click: function click($event) {
        return _vm.handleStep1(true);
      }
    }
  }, [_vm._v("\n                            OUI\n                        ")]), _vm._v(" "), _c("button", {
    staticClass: "btn",
    staticStyle: {
      "background-color": "#c0392b",
      color: "white",
      "font-weight": "bold",
      padding: "10px 50px"
    },
    on: {
      click: function click($event) {
        return _vm.handleStep1(false);
      }
    }
  }, [_vm._v("\n                            NON\n                        ")])])])])])]), _vm._v(" "), _c("modal", {
    staticClass: "pb-5",
    attrs: {
      name: "openDaeSain",
      width: "534px",
      height: "276",
      adaptive: true,
      resizable: true,
      clickToClose: false
    }
  }, [_c("div", {
    staticClass: "container py-3 mb-2",
    staticStyle: {
      overflow: "auto"
    }
  }, [_c("div", {
    staticClass: "col-12"
  }, [_c("div", {
    staticClass: "d-flex justify-content-end"
  }, [_c("i", {
    staticClass: "close-btn-modal icofont-close-circled icofont-2x",
    staticStyle: {
      cursor: "pointer"
    },
    on: {
      click: function click($event) {
        return _vm.closeModal("openDaeSain");
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "container my-5"
  }, [_c("div", {
    staticClass: "text-center fw-bold",
    staticStyle: {
      "font-size": "1rem"
    }
  }, [_vm._v("\n                        La présente DAE/DAD concerne-t-elle un client douteux ou litigieux ?\n                    ")]), _vm._v(" "), _c("div", {
    staticClass: "d-flex justify-content-center gap-5 my-4"
  }, [_c("button", {
    staticClass: "btn",
    staticStyle: {
      "background-color": "#27ae60",
      color: "white",
      "font-weight": "bold",
      padding: "10px 50px"
    },
    on: {
      click: function click($event) {
        return _vm.handleStep2(true);
      }
    }
  }, [_vm._v("\n                            OUI\n                        ")]), _vm._v(" "), _c("button", {
    staticClass: "btn",
    staticStyle: {
      "background-color": "#c0392b",
      color: "white",
      "font-weight": "bold",
      padding: "10px 50px"
    },
    on: {
      click: function click($event) {
        return _vm.handleStep2(false);
      }
    }
  }, [_vm._v("\n                            NON\n                        ")])]), _vm._v(" "), _c("div", {
    staticClass: "d-flex justify-content-end"
  }, [_c("button", {
    staticClass: "btn btn-secondary",
    on: {
      click: function click($event) {
        return _vm.returnToStep1();
      }
    }
  }, [_vm._v("\n                            Retour\n                        ")])])])])])]), _vm._v(" "), _c("modal", {
    staticClass: "pb-5",
    attrs: {
      name: "openDaeDouteux",
      width: "534px",
      height: "276",
      adaptive: true,
      resizable: true,
      clickToClose: false
    }
  }, [_c("div", {
    staticClass: "container py-3 mb-2",
    staticStyle: {
      overflow: "auto"
    }
  }, [_c("div", {
    staticClass: "col-12"
  }, [_c("div", {
    staticClass: "d-flex justify-content-end"
  }, [_c("i", {
    staticClass: "close-btn-modal icofont-close-circled icofont-2x",
    staticStyle: {
      cursor: "pointer"
    },
    on: {
      click: function click($event) {
        return _vm.closeModal("openDaeDouteux");
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "container my-5"
  }, [_c("div", {
    staticClass: "text-center fw-bold",
    staticStyle: {
      "font-size": "1rem"
    }
  }, [_c("p", {
    staticClass: "warning-text"
  }, [_vm._v("\n                    Le client étant douteux ou litigieux, il est impossible d'instruire un DAE/DAD\n                ")])])])])])]), _vm._v(" "), _c("modal", {
    staticClass: "pb-5",
    attrs: {
      name: "openDaeInCreditflow",
      width: "784px",
      height: "670px",
      adaptive: true,
      resizable: true,
      clickToClose: false
    }
  }, [_c("div", {
    staticClass: "container py-3 mb-2",
    staticStyle: {
      overflow: "auto"
    }
  }, [_c("div", {
    staticClass: "col-12"
  }, [_c("div", {
    staticClass: "d-flex justify-content-end"
  }, [_c("i", {
    staticClass: "close-btn-modal icofont-close-circled icofont-2x",
    staticStyle: {
      cursor: "pointer"
    },
    on: {
      click: function click($event) {
        return _vm.closeModal("openDaeInCreditflow");
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "container my-1"
  }, [_c("div", {
    staticClass: "col-12 mb-3"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Reférence du dossier "), _c("span", {
    staticStyle: {
      color: "red"
    }
  }, [_vm._v("* (Prière de sasir la référence du dossier " + _vm._s(_vm.selectedTemplate == 9 ? "à restructurer" : "") + ")")])]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formAddDoss.ref_dossier,
      expression: "formAddDoss.ref_dossier"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text"
    },
    domProps: {
      value: _vm.formAddDoss.ref_dossier
    },
    on: {
      input: [function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formAddDoss, "ref_dossier", $event.target.value);
      }, function ($event) {
        return _vm.setTypeDemande();
      }]
    }
  })]), _vm._v(" "), ![null, undefined, ""].includes((_vm$formAddDoss = _vm.formAddDoss) === null || _vm$formAddDoss === void 0 ? void 0 : _vm$formAddDoss.ref_dossier) && ![null, undefined].includes((_vm$formAddDoss2 = _vm.formAddDoss) === null || _vm$formAddDoss2 === void 0 || (_vm$formAddDoss2 = _vm$formAddDoss2.ref_dossier) === null || _vm$formAddDoss2 === void 0 ? void 0 : _vm$formAddDoss2.length) && ((_vm$formAddDoss3 = _vm.formAddDoss) === null || _vm$formAddDoss3 === void 0 || (_vm$formAddDoss3 = _vm$formAddDoss3.ref_dossier) === null || _vm$formAddDoss3 === void 0 ? void 0 : _vm$formAddDoss3.length) > 5 ? _c("div", [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "mb-3 col-6"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Type de demamde ")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formAddDoss.type_demande,
      expression: "formAddDoss.type_demande"
    }],
    staticClass: "form-select single-select",
    attrs: {
      disabled: false
    },
    on: {
      change: [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.formAddDoss, "type_demande", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }, _vm.onInput]
    }
  }, [_c("option", {
    attrs: {
      disabled: "",
      selected: "",
      value: ""
    }
  }, [_vm._v("\n                                -- Sélectionner la Demande --\n                                ")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "iDemande d'autorisation de dépassement (DAD)"
    }
  }, [_vm._v("Demande d'autorisation de dépassement (DAD)")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "Demande d'autorisation exeptionnelle (DAE)"
    }
  }, [_vm._v("Demande d'autorisation exeptionnelle (DAE)")])])]), _vm._v(" "), _c("InputCoreBankingClientNumber", {
    staticClass: "col-6",
    "class": _vm.formAddDoss.is_prospect == "Non" ? "" : "d-none",
    attrs: {
      formAddDoss: _vm.formAddDoss,
      userData: _vm.userData,
      categorieClient: _vm.categorieClient,
      create: _vm.formAddDoss.is_prospect == "Oui"
    },
    on: {
      "core-banking-client-changed": _vm.onCoreBankingClientChanged
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-6"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Nom du client"), _c("span", {
    staticStyle: {
      color: "red"
    }
  }, [_vm._v("*")])]), _vm._v(" "), _vm.formAddDoss.is_prospect == "Oui" ? _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formAddDoss.last_name,
      expression: "formAddDoss.last_name"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text"
    },
    domProps: {
      value: _vm.formAddDoss.last_name
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formAddDoss, "last_name", $event.target.value);
      }
    }
  }) : ((_vm$formAddDoss4 = _vm.formAddDoss) === null || _vm$formAddDoss4 === void 0 || (_vm$formAddDoss4 = _vm$formAddDoss4.client_core_banking) === null || _vm$formAddDoss4 === void 0 ? void 0 : _vm$formAddDoss4["default"]) == true ? _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formAddDoss.last_name,
      expression: "formAddDoss.last_name"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text"
    },
    domProps: {
      value: _vm.formAddDoss.last_name
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formAddDoss, "last_name", $event.target.value);
      }
    }
  }) : _c("input", {
    staticClass: "form-control",
    attrs: {
      type: "text",
      readonly: ""
    },
    domProps: {
      value: (_vm$formAddDoss$clien = (_vm$formAddDoss5 = _vm.formAddDoss) === null || _vm$formAddDoss5 === void 0 || (_vm$formAddDoss5 = _vm$formAddDoss5.client_core_banking) === null || _vm$formAddDoss5 === void 0 ? void 0 : _vm$formAddDoss5.last_name) !== null && _vm$formAddDoss$clien !== void 0 ? _vm$formAddDoss$clien : ""
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-6"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("\n                                Prénoms du client"), _c("span", {
    staticStyle: {
      color: "red"
    }
  }, [_vm._v("*")])]), _vm._v(" "), _vm.formAddDoss.is_prospect == "Oui" ? _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formAddDoss.first_name,
      expression: "formAddDoss.first_name"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text"
    },
    domProps: {
      value: _vm.formAddDoss.first_name
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formAddDoss, "first_name", $event.target.value);
      }
    }
  }) : ((_vm$formAddDoss6 = _vm.formAddDoss) === null || _vm$formAddDoss6 === void 0 || (_vm$formAddDoss6 = _vm$formAddDoss6.client_core_banking) === null || _vm$formAddDoss6 === void 0 ? void 0 : _vm$formAddDoss6["default"]) == true ? _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formAddDoss.first_name,
      expression: "formAddDoss.first_name"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text"
    },
    domProps: {
      value: _vm.formAddDoss.first_name
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formAddDoss, "first_name", $event.target.value);
      }
    }
  }) : _c("input", {
    staticClass: "form-control",
    attrs: {
      type: "text",
      readonly: ""
    },
    domProps: {
      value: (_vm$formAddDoss$clien2 = (_vm$formAddDoss7 = _vm.formAddDoss) === null || _vm$formAddDoss7 === void 0 || (_vm$formAddDoss7 = _vm$formAddDoss7.client_core_banking) === null || _vm$formAddDoss7 === void 0 ? void 0 : _vm$formAddDoss7.first_name) !== null && _vm$formAddDoss$clien2 !== void 0 ? _vm$formAddDoss$clien2 : ""
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-2"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(" Code"), _c("span", {
    staticStyle: {
      color: "red"
    }
  }, [_vm._v("*")])]), _vm._v(" "), _c("Multiselect", {
    attrs: {
      disabled: false,
      searchable: true,
      trackBy: "name",
      label: "name",
      "value-prop": "phonecode",
      classes: {
        optionPointed: "text-gray-800 bg-gray-100"
      },
      options: _vm.countries
    },
    scopedSlots: _vm._u([{
      key: "option",
      fn: function fn(_ref) {
        var option = _ref.option,
          isPointed = _ref.isPointed;
        return [_c("p", {
          staticClass: "multiselect-option"
        }, [_vm._v(_vm._s(option.name))])];
      }
    }, {
      key: "singlelabel",
      fn: function fn(_ref2) {
        var value = _ref2.value;
        return [_c("p", {
          staticClass: "multiselect-single-label"
        }, [_vm._v(_vm._s(value.phonecode))])];
      }
    }], null, false, 3006985993),
    model: {
      value: _vm.formAddDoss.indicatif,
      callback: function callback($$v) {
        _vm.$set(_vm.formAddDoss, "indicatif", $$v);
      },
      expression: "formAddDoss.indicatif"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-5"
  }, [_c("label", [_vm._v("\n                                Contact ("), _c("span", {
    staticStyle: {
      color: "green",
      "font-size": "0.7rem"
    }
  }, [_vm._v("WhatsApp")]), _vm._v(")"), _c("span", {
    staticStyle: {
      color: "red"
    }
  }, [_vm._v("*")])]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formAddDoss.phone,
      expression: "formAddDoss.phone"
    }],
    staticClass: "form-control",
    attrs: {
      type: "number"
    },
    domProps: {
      value: _vm.formAddDoss.phone
    },
    on: {
      input: [function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formAddDoss, "phone", $event.target.value);
      }, _vm.handleInput]
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-5"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Employeur"), _c("span", {
    staticStyle: {
      color: "red"
    }
  }, [_vm._v("*")])]), _vm._v(" "), _c("div", {
    staticClass: "d-flex position-relative align-items-center"
  }, [_c("Multiselect", {
    attrs: {
      id: "convention_entreprise",
      searchable: true,
      trackBy: "denomination",
      label: "denomination",
      "value-prop": "ent_pub_key",
      classes: {
        optionPointed: "text-gray-800 bg-gray-100"
      },
      options: _vm.convention_entreprises_
    },
    on: {
      select: _vm.updateConvention
    },
    scopedSlots: _vm._u([{
      key: "option",
      fn: function fn(_ref3) {
        var option = _ref3.option;
        return [_c("p", {
          staticClass: "multiselect-option"
        }, [_vm._v(_vm._s(option.denomination))])];
      }
    }, {
      key: "singlelabel",
      fn: function fn(_ref4) {
        var value = _ref4.value;
        return [_c("p", {
          staticClass: "multiselect-single-label",
          staticStyle: {
            overflow: "hidden"
          }
        }, [_vm._v(_vm._s(value.denomination))])];
      }
    }], null, false, 2405702391),
    model: {
      value: _vm.localConventionEntreprise,
      callback: function callback($$v) {
        _vm.localConventionEntreprise = $$v;
      },
      expression: "localConventionEntreprise"
    }
  }), _vm._v(" "), _vm.loadConEntreprise ? _c("span", {
    staticClass: "spinner-border spinner-border spinner-custom-input",
    staticStyle: {
      "margin-right": "17px"
    }
  }) : _vm._e()], 1)])]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    "class": ["mb-3", ((_vm$categorieClient = _vm.categorieClient) === null || _vm$categorieClient === void 0 ? void 0 : _vm$categorieClient.toUpperCase()) == "CORPORATE" ? "col-4" : "col-3"]
  }, [_c("label", {
    attrs: {
      "for": "filiale"
    }
  }, [_vm._v("Code filiale")]), _vm._v(" "), _c("input", {
    staticClass: "form-control",
    attrs: {
      required: "",
      type: "text",
      id: "filiale",
      disabled: ""
    },
    domProps: {
      value: _vm.formAddDoss.filiale
    }
  })]), _vm._v(" "), _c("div", {
    "class": ["mb-3", ((_vm$categorieClient2 = _vm.categorieClient) === null || _vm$categorieClient2 === void 0 ? void 0 : _vm$categorieClient2.toUpperCase()) == "CORPORATE" ? "col-8" : "col-6"]
  }, [_c("label", {
    attrs: {
      "for": "agence"
    }
  }, [_vm._v("Agence")]), _vm._v(" "), _c("input", {
    staticClass: "form-control",
    attrs: {
      id: "agence",
      required: "",
      type: "text",
      title: _vm.formAddDoss.agence,
      disabled: ""
    },
    domProps: {
      value: _vm.formAddDoss.agence
    }
  })]), _vm._v(" "), _c("div", {
    "class": ["mb-3", ((_vm$categorieClient3 = _vm.categorieClient) === null || _vm$categorieClient3 === void 0 ? void 0 : _vm$categorieClient3.toUpperCase()) == "CORPORATE" ? "col-4" : "col-3"]
  }, [["AFG"].includes(_vm.MIX_ENTITY) ? _c("label", {
    staticClass: "text-nowrap",
    attrs: {
      "for": "cae"
    }
  }, [_vm._v("Code exploitant "), _c("span", {
    staticStyle: {
      color: "red",
      display: "none"
    }
  }, [_vm._v("*")])]) : _c("label", {
    attrs: {
      "for": "cae"
    }
  }, [_vm._v("Code "), ((_vm$categorieClient4 = _vm.categorieClient) === null || _vm$categorieClient4 === void 0 ? void 0 : _vm$categorieClient4.toUpperCase()) == "CORPORATE" ? _c("span", [_vm._v("CAE")]) : _c("span", [_vm._v("CC")]), _vm._v(" "), ((_vm$formAddDoss8 = _vm.formAddDoss) === null || _vm$formAddDoss8 === void 0 ? void 0 : _vm$formAddDoss8.is_prospect) == "Oui" ? _c("span", {
    staticStyle: {
      color: "red"
    }
  }, [_vm._v("*")]) : _vm._e()]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formAddDoss.caf,
      expression: "formAddDoss.caf"
    }],
    staticClass: "form-control",
    attrs: {
      required: "",
      type: "text",
      id: "cae"
    },
    domProps: {
      value: _vm.formAddDoss.caf
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formAddDoss, "caf", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-5"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(" E-mail"), _c("span", {
    staticStyle: {
      color: "red"
    }
  }, [_vm._v("*")])]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formAddDoss.email,
      expression: "formAddDoss.email"
    }],
    staticClass: "form-control",
    attrs: {
      type: "email"
    },
    domProps: {
      value: _vm.formAddDoss.email
    },
    on: {
      input: [function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formAddDoss, "email", $event.target.value);
      }, _vm.handleInput]
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-7"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Demande du client")]), _vm._v(" "), _vm.formAddDoss.document_client ? _c("div", [(_vm$formAddDoss9 = _vm.formAddDoss) !== null && _vm$formAddDoss9 !== void 0 && _vm$formAddDoss9.document_client ? _c("span", {
    on: {
      click: function click($event) {
        var _vm$formAddDoss0;
        return _vm.openFileDemande("http://" + ((_vm$formAddDoss0 = _vm.formAddDoss) === null || _vm$formAddDoss0 === void 0 ? void 0 : _vm$formAddDoss0.document_client));
      }
    }
  }, [_c("i", {
    staticClass: "icofont icofont-file-document btn icofont-2x",
    staticStyle: {
      "border-radius": "5vh"
    },
    attrs: {
      title: "Voir la demande"
    }
  })]) : _vm._e(), _vm._v(" "), _c("i", {
    staticClass: "icofont icofont-pen-alt-1 btn btn-sm rounded-pill",
    attrs: {
      title: "Modifier la demande"
    },
    on: {
      click: function click($event) {
        _vm.formAddDoss.document_client = "";
      }
    }
  })]) : _c("input", {
    ref: "demandeClient",
    staticClass: "form-control",
    attrs: {
      type: "file"
    },
    on: {
      change: _vm.handleInputFile
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "my-3 col-7"
  }, [_c("button", {
    staticClass: "btn btn-orange",
    attrs: {
      disabled: !Boolean(_vm.formAddDoss.filiale),
      type: "button"
    },
    on: {
      click: _vm.launchCreating
    }
  }, [_vm.loadingCreateDoss ? _c("span", [_c("span", {
    staticClass: "spinner-border spinner-border-sm",
    attrs: {
      role: "status",
      "aria-hidden": "true"
    }
  }), _vm._v("\n                                Loading...\n                            ")]) : _c("span", [_vm.editFormAdd ? _c("span", [_vm._v("Modifer")]) : _c("span", [_vm.uploading ? _c("span", [_vm._v(" Upload en cours ... ")]) : _c("span", [_vm._v(" Ouvrir ")])])])])])]) : _c("div", {
    staticClass: "card-body",
    staticStyle: {
      border: "1px solid gray",
      "border-radius": "7px",
      "margin-top": "5%"
    }
  }, [_c("div", {
    staticClass: "d-flex justify-content-center text-center align-items-center text-muted py-4",
    staticStyle: {
      height: "405px"
    }
  }, [_c("div", [_c("h1", {
    staticStyle: {
      color: "indianred"
    }
  }, [_c("i", {
    staticClass: "icofont-warning-alt icofont-4x",
    staticStyle: {
      color: "indianred"
    }
  }), _vm._v(" "), _c("br"), _vm._v("\n                                    Aucune référence saisie\n                                ")])])])]), _vm._v(" "), _c("div", {
    staticClass: "d-flex justify-content-end mt-4"
  }, [_c("button", {
    staticClass: "btn btn-secondary",
    on: {
      click: function click($event) {
        return _vm.returnToStep2();
      }
    }
  }, [_vm._v("\n                            Retour\n                        ")])])])])])]), _vm._v(" "), _c("modal", {
    staticClass: "pb-5",
    attrs: {
      name: "openDaeInNotCreditflow",
      width: "789px",
      height: "690px",
      adaptive: true,
      resizable: true,
      clickToClose: false
    }
  }, [_c("div", {
    staticClass: "container py-3 mb-2",
    staticStyle: {
      overflow: "auto"
    }
  }, [_c("div", {
    staticClass: "col-12"
  }, [_c("div", {
    staticClass: "d-flex justify-content-end"
  }, [_c("i", {
    staticClass: "close-btn-modal icofont-close-circled icofont-2x",
    staticStyle: {
      cursor: "pointer"
    },
    on: {
      click: function click($event) {
        return _vm.closeModal("openDaeInNotCreditflow");
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "container my-1"
  }, [_vm.in_creditflow == false ? _c("div", [_c("div", {
    staticClass: "col-12 mb-3"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Reférence du dossier "), _c("span", {
    staticStyle: {
      color: "red"
    }
  }, [_vm._v("* (Prière de sasir la référence du dossier " + _vm._s(_vm.selectedTemplate == 9 ? "à restructurer" : "") + ")")])]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formAddDoss.ref_dossier,
      expression: "formAddDoss.ref_dossier"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text"
    },
    domProps: {
      value: _vm.formAddDoss.ref_dossier
    },
    on: {
      input: [function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formAddDoss, "ref_dossier", $event.target.value);
      }, function ($event) {
        return _vm.setTypeDemande();
      }]
    }
  })]), _vm._v(" "), ![null, undefined, ""].includes((_vm$formAddDoss1 = _vm.formAddDoss) === null || _vm$formAddDoss1 === void 0 ? void 0 : _vm$formAddDoss1.ref_dossier) && ![null, undefined].includes((_vm$formAddDoss10 = _vm.formAddDoss) === null || _vm$formAddDoss10 === void 0 || (_vm$formAddDoss10 = _vm$formAddDoss10.ref_dossier) === null || _vm$formAddDoss10 === void 0 ? void 0 : _vm$formAddDoss10.length) && ((_vm$formAddDoss11 = _vm.formAddDoss) === null || _vm$formAddDoss11 === void 0 || (_vm$formAddDoss11 = _vm$formAddDoss11.ref_dossier) === null || _vm$formAddDoss11 === void 0 ? void 0 : _vm$formAddDoss11.length) > 5 ? _c("div", {
    staticClass: "row"
  }, [_vm.selectedTemplate == 5 ? [_c("div", {
    staticClass: "mb-3 col-6"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Type de demamde ")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formAddDoss.type_demande,
      expression: "formAddDoss.type_demande"
    }],
    staticClass: "form-select single-select",
    attrs: {
      disabled: false
    },
    on: {
      change: [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.formAddDoss, "type_demande", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }, _vm.handleInput]
    }
  }, [_c("option", {
    attrs: {
      disabled: "",
      selected: "",
      value: ""
    }
  }, [_vm._v("\n                                -- Sélectionner la Demande --\n                                ")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "iDemande d'autorisation de dépassement (DAD)"
    }
  }, [_vm._v("Demande d'autorisation de dépassement (DAD)")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "Demande d'autorisation exeptionnelle (DAE)"
    }
  }, [_vm._v("Demande d'autorisation exeptionnelle (DAE)")])])]), _vm._v(" "), _c("InputCoreBankingClientNumber", {
    staticClass: "col-6",
    "class": _vm.formAddDoss.is_prospect == "Non" ? "" : "d-none",
    attrs: {
      formAddDoss: _vm.formAddDoss,
      userData: _vm.userData,
      categorieClient: _vm.categorieClient,
      create: _vm.formAddDoss.is_prospect == "Oui"
    },
    on: {
      "core-banking-client-changed": _vm.onCoreBankingClientChanged
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-6"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Nom du client"), _c("span", {
    staticStyle: {
      color: "red"
    }
  }, [_vm._v("*")])]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formAddDoss.last_name,
      expression: "formAddDoss.last_name"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text"
    },
    domProps: {
      value: _vm.formAddDoss.last_name
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formAddDoss, "last_name", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-6"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("\n                                Prénoms du client"), _c("span", {
    staticStyle: {
      color: "red"
    }
  }, [_vm._v("*")])]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formAddDoss.first_name,
      expression: "formAddDoss.first_name"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text"
    },
    domProps: {
      value: _vm.formAddDoss.first_name
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formAddDoss, "first_name", $event.target.value);
      }
    }
  })])])] : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "mb-3 col-12"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-2"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(" Code"), _c("span", {
    staticStyle: {
      color: "red"
    }
  }, [_vm._v("*")])]), _vm._v(" "), _c("Multiselect", {
    attrs: {
      disabled: false,
      searchable: true,
      trackBy: "name",
      label: "name",
      "value-prop": "phonecode",
      classes: {
        optionPointed: "text-gray-800 bg-gray-100"
      },
      options: _vm.countries
    },
    scopedSlots: _vm._u([{
      key: "option",
      fn: function fn(_ref5) {
        var option = _ref5.option,
          isPointed = _ref5.isPointed;
        return [_c("p", {
          staticClass: "multiselect-option"
        }, [_vm._v(_vm._s(option.name))])];
      }
    }, {
      key: "singlelabel",
      fn: function fn(_ref6) {
        var value = _ref6.value;
        return [_c("p", {
          staticClass: "multiselect-single-label"
        }, [_vm._v(_vm._s(value.phonecode))])];
      }
    }], null, false, 3006985993),
    model: {
      value: _vm.formAddDoss.indicatif,
      callback: function callback($$v) {
        _vm.$set(_vm.formAddDoss, "indicatif", $$v);
      },
      expression: "formAddDoss.indicatif"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-5"
  }, [_c("label", [_vm._v("\n                                Contact ("), _c("span", {
    staticStyle: {
      color: "green",
      "font-size": "0.7rem"
    }
  }, [_vm._v("WhatsApp")]), _vm._v(")"), _c("span", {
    staticStyle: {
      color: "red"
    }
  }, [_vm._v("*")])]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formAddDoss.phone,
      expression: "formAddDoss.phone"
    }],
    staticClass: "form-control",
    attrs: {
      type: "number"
    },
    domProps: {
      value: _vm.formAddDoss.phone
    },
    on: {
      input: [function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formAddDoss, "phone", $event.target.value);
      }, _vm.handleInput]
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-5"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Employeur"), _c("span", {
    staticStyle: {
      color: "red"
    }
  }, [_vm._v("*")])]), _vm._v(" "), _c("div", {
    staticClass: "d-flex position-relative align-items-center"
  }, [_c("Multiselect", {
    attrs: {
      id: "convention_entreprise",
      searchable: true,
      trackBy: "denomination",
      label: "denomination",
      "value-prop": "ent_pub_key",
      classes: {
        optionPointed: "text-gray-800 bg-gray-100"
      },
      options: _vm.convention_entreprises_
    },
    on: {
      select: _vm.updateConvention
    },
    scopedSlots: _vm._u([{
      key: "option",
      fn: function fn(_ref7) {
        var option = _ref7.option;
        return [_c("p", {
          staticClass: "multiselect-option"
        }, [_vm._v(_vm._s(option.denomination))])];
      }
    }, {
      key: "singlelabel",
      fn: function fn(_ref8) {
        var value = _ref8.value;
        return [_c("p", {
          staticClass: "multiselect-single-label",
          staticStyle: {
            overflow: "hidden"
          }
        }, [_vm._v(_vm._s(value.denomination))])];
      }
    }], null, false, 2405702391),
    model: {
      value: _vm.localConventionEntreprise,
      callback: function callback($$v) {
        _vm.localConventionEntreprise = $$v;
      },
      expression: "localConventionEntreprise"
    }
  }), _vm._v(" "), _vm.loadConEntreprise ? _c("span", {
    staticClass: "spinner-border spinner-border spinner-custom-input",
    staticStyle: {
      "margin-right": "17px"
    }
  }) : _vm._e()], 1)])])]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    "class": ["mb-3", ((_vm$categorieClient5 = _vm.categorieClient) === null || _vm$categorieClient5 === void 0 ? void 0 : _vm$categorieClient5.toUpperCase()) == "CORPORATE" ? "col-4" : "col-3"]
  }, [_c("label", {
    attrs: {
      "for": "filiale"
    }
  }, [_vm._v("Code filiale")]), _vm._v(" "), _c("input", {
    staticClass: "form-control",
    attrs: {
      required: "",
      type: "text",
      id: "filiale",
      disabled: ""
    },
    domProps: {
      value: _vm.formAddDoss.filiale
    }
  })]), _vm._v(" "), _c("div", {
    "class": ["mb-3", ((_vm$categorieClient6 = _vm.categorieClient) === null || _vm$categorieClient6 === void 0 ? void 0 : _vm$categorieClient6.toUpperCase()) == "CORPORATE" ? "col-8" : "col-6"]
  }, [_c("label", {
    attrs: {
      "for": "agence"
    }
  }, [_vm._v("Agence")]), _vm._v(" "), _c("input", {
    staticClass: "form-control",
    attrs: {
      id: "agence",
      required: "",
      type: "text",
      title: _vm.formAddDoss.agence,
      disabled: ""
    },
    domProps: {
      value: _vm.formAddDoss.agence
    }
  })]), _vm._v(" "), _c("div", {
    "class": ["mb-3", ((_vm$categorieClient7 = _vm.categorieClient) === null || _vm$categorieClient7 === void 0 ? void 0 : _vm$categorieClient7.toUpperCase()) == "CORPORATE" ? "col-4" : "col-3"]
  }, [["AFG"].includes(_vm.MIX_ENTITY) ? _c("label", {
    staticClass: "text-nowrap",
    attrs: {
      "for": "cae"
    }
  }, [_vm._v("Code exploitant "), _c("span", {
    staticStyle: {
      color: "red",
      display: "none"
    }
  }, [_vm._v("*")])]) : _c("label", {
    attrs: {
      "for": "cae"
    }
  }, [_vm._v("Code "), ((_vm$categorieClient8 = _vm.categorieClient) === null || _vm$categorieClient8 === void 0 ? void 0 : _vm$categorieClient8.toUpperCase()) == "CORPORATE" ? _c("span", [_vm._v("CAE")]) : _c("span", [_vm._v("CC")]), _vm._v(" "), ((_vm$formAddDoss12 = _vm.formAddDoss) === null || _vm$formAddDoss12 === void 0 ? void 0 : _vm$formAddDoss12.is_prospect) == "Oui" ? _c("span", {
    staticStyle: {
      color: "red"
    }
  }, [_vm._v("*")]) : _vm._e()]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formAddDoss.caf,
      expression: "formAddDoss.caf"
    }],
    staticClass: "form-control",
    attrs: {
      required: "",
      type: "text",
      id: "cae"
    },
    domProps: {
      value: _vm.formAddDoss.caf
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formAddDoss, "caf", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-5"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(" E-mail"), _c("span", {
    staticStyle: {
      color: "red"
    }
  }, [_vm._v("*")])]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formAddDoss.email,
      expression: "formAddDoss.email"
    }],
    staticClass: "form-control",
    attrs: {
      type: "email"
    },
    domProps: {
      value: _vm.formAddDoss.email
    },
    on: {
      input: [function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formAddDoss, "email", $event.target.value);
      }, _vm.handleInput]
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-7"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Demande du client")]), _vm._v(" "), _vm.formAddDoss.document_client ? _c("div", [(_vm$formAddDoss13 = _vm.formAddDoss) !== null && _vm$formAddDoss13 !== void 0 && _vm$formAddDoss13.document_client ? _c("span", {
    on: {
      click: function click($event) {
        var _vm$formAddDoss14;
        return _vm.openFileDemande("http://" + ((_vm$formAddDoss14 = _vm.formAddDoss) === null || _vm$formAddDoss14 === void 0 ? void 0 : _vm$formAddDoss14.document_client));
      }
    }
  }, [_c("i", {
    staticClass: "icofont icofont-file-document btn icofont-2x",
    staticStyle: {
      "border-radius": "5vh"
    },
    attrs: {
      title: "Voir la demande"
    }
  })]) : _vm._e(), _vm._v(" "), _c("i", {
    staticClass: "icofont icofont-pen-alt-1 btn btn-sm rounded-pill",
    attrs: {
      title: "Modifier la demande"
    },
    on: {
      click: function click($event) {
        _vm.formAddDoss.document_client = "";
      }
    }
  })]) : _c("input", {
    ref: "demandeClient",
    staticClass: "form-control",
    attrs: {
      type: "file"
    },
    on: {
      change: _vm.handleInputFile
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "my-3 col-7"
  }, [_c("button", {
    staticClass: "btn btn-orange",
    attrs: {
      disabled: !Boolean(_vm.formAddDoss.filiale),
      type: "button"
    },
    on: {
      click: _vm.launchCreating
    }
  }, [_vm.loadingCreateDoss ? _c("span", [_c("span", {
    staticClass: "spinner-border spinner-border-sm",
    attrs: {
      role: "status",
      "aria-hidden": "true"
    }
  }), _vm._v("\n                                Loading...\n                            ")]) : _c("span", [_vm.editFormAdd ? _c("span", [_vm._v("Modifer")]) : _c("span", [_vm.uploading ? _c("span", [_vm._v(" Upload en cours ... ")]) : _c("span", [_vm._v(" Ouvrir ")])])])])])], 2) : _c("div", {
    staticClass: "card-body",
    staticStyle: {
      border: "1px solid gray",
      "border-radius": "7px",
      "margin-top": "5%"
    }
  }, [_c("div", {
    staticClass: "d-flex justify-content-center text-center align-items-center text-muted py-4",
    staticStyle: {
      height: "405px"
    }
  }, [_c("div", [_c("h1", {
    staticStyle: {
      color: "indianred"
    }
  }, [_c("i", {
    staticClass: "icofont-warning-alt icofont-4x",
    staticStyle: {
      color: "indianred"
    }
  }), _vm._v(" "), _c("br"), _vm._v("\n                                    Aucune référence saisie\n                                ")])])])])]) : _vm._e(), _vm._v(" "), _vm.in_creditflow == true ? _c("div", [_c("span", {
    staticStyle: {
      color: "#e74c3c"
    }
  }, [_c("i", [_vm._v("\n                          Rechercher et selectionner le dossier sur lequel vous voulez ouvrir la DAD/DAE *\n                          ")])]), _vm._v(" "), _c("custom-search", {
    attrs: {
      user: _vm.authcheckUsr,
      customClickHandler: true,
      ableAdvancedBtn: false,
      color: "#fff",
      inputClass: "form-control bg-white  border-2 rounded",
      parentClass: "bg-white",
      changementCond: {
        memo: _vm.selectedTemplate == 5 ? "dad" : ""
      },
      placeholder: "Rechercher l'ancien dossier..."
    },
    on: {
      selected: _vm.loadOldDossDad
    }
  })], 1) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_vm.queuedTemplateId !== 5 ? _c("div", {
    staticClass: "col-12 mb-2"
  }, [_c("div", {
    staticClass: "d-flex text-orange fw-bold justify-content-between align-items-center"
  }, [_c("div", {
    staticClass: "col fw-bold"
  }, [_vm._v("Ce client est-il un prospect ? ")]), _vm._v(" "), _c("div", {
    staticClass: "col"
  }, [_c("div", {
    staticClass: "d-flex justify-content-end align-items-center"
  }, [_c("div", {
    staticClass: "m-2 mr-4",
    staticStyle: {
      "vertical-align": "middle"
    }
  }, [_c("input", {
    staticClass: "form-check-input",
    staticStyle: {
      width: "20px",
      height: "20px"
    },
    attrs: {
      type: "checkbox",
      value: "Oui",
      id: "oui"
    },
    domProps: {
      checked: _vm.formAddDoss.is_prospect == "Oui"
    },
    on: {
      change: function change($event) {
        return _vm.setBoolVar($event, "is_prospect");
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "text-nowrap",
    attrs: {
      "for": "oui"
    }
  }, [_vm._v(" Oui")])]), _vm._v(" "), _c("div", {
    staticClass: "m-2 mr-4"
  }, [_c("input", {
    staticClass: "form-check-input",
    staticStyle: {
      width: "20px",
      height: "20px"
    },
    attrs: {
      type: "checkbox",
      value: "Non",
      id: "non"
    },
    domProps: {
      checked: _vm.formAddDoss.is_prospect == "Non"
    },
    on: {
      change: function change($event) {
        return _vm.setBoolVar($event, "is_prospect");
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "text-nowrap",
    attrs: {
      "for": "non"
    }
  }, [_vm._v(" Non")])])])])])]) : _vm._e(), _vm._v(" "), ((_vm$categorieClient9 = _vm.categorieClient) === null || _vm$categorieClient9 === void 0 ? void 0 : _vm$categorieClient9.toUpperCase()) == "RETAIL" ? _c("div", {
    staticClass: "mb-3 col-6"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Type de demande")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formAddDoss.type_demande,
      expression: "formAddDoss.type_demande"
    }],
    staticClass: "form-select single-select",
    on: {
      change: [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.formAddDoss, "type_demande", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }, _vm.handleInput]
    }
  }, [_c("option", {
    attrs: {
      disabled: "",
      selected: "",
      value: ""
    }
  }, [_vm._v("\n                              -- Sélectionner la Demande --\n                            ")]), _vm._v(" "), _vm.queuedTemplateId !== 5 ? [_c("option", {
    attrs: {
      value: "Nouvelle demande"
    }
  }, [_vm._v("Nouvelle demande")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "Première demande"
    }
  }, [_vm._v("Première demande")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "Revue annuelle"
    }
  }, [_vm._v("Revue annuelle")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "Revue intérimaire"
    }
  }, [_vm._v("Revue intérimaire")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "Appel à la décision"
    }
  }, [_vm._v("Appel à la décision")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "Prorogation"
    }
  }, [_vm._v("Prorogation")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "Renégociation / Restructuration"
    }
  }, [_vm._v("Renégociation / Restructuration")])] : [_c("option", {
    attrs: {
      value: "Demande d'autorisation de dépassement (DAD)"
    }
  }, [_vm._v("Demande d'autorisation de dépassement (DAD)")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "Demande d'autorisation exeptionnelle (DAE)"
    }
  }, [_vm._v("Demande d'autorisation exeptionnelle (DAE)")])]], 2)]) : _vm._e(), _vm._v(" "), ((_vm$categorieClient0 = _vm.categorieClient) === null || _vm$categorieClient0 === void 0 ? void 0 : _vm$categorieClient0.toUpperCase()) == "RETAIL" && ["NSIA"].includes(_vm.MIX_ENTITY) ? _c("div", {
    staticClass: "mb-3 col-6"
  }, [_c("label", [_vm._v("\n                            Type de prêt / Template"), _c("span", {
    staticStyle: {
      color: "red"
    }
  }, [_vm._v("*")])]), _vm._v(" "), ["AFG"].includes(_vm.MIX_ENTITY) ? _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formAddDoss.type_de_pret,
      expression: "formAddDoss.type_de_pret"
    }],
    staticClass: "form-select single-select",
    attrs: {
      id: "type_creditt"
    },
    on: {
      change: [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.formAddDoss, "type_de_pret", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }, _vm.handleInput]
    }
  }, [_c("option", {
    attrs: {
      disabled: "",
      selected: "",
      value: ""
    }
  }, [_vm._v("\n                              --- Sélectionner le crédit --\n                            ")]), _vm._v(" "), _vm._l(_vm.transformLoadedCreditsBanques_, function (items, group) {
    return _c("optgroup", {
      key: group,
      attrs: {
        label: group
      }
    }, _vm._l(items, function (credit) {
      return _c("option", {
        key: credit.id,
        domProps: {
          value: credit.libelle
        }
      }, [_vm._v("\n                                " + _vm._s(credit.libelle) + "\n                              ")]);
    }), 0);
  })], 2) : _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formAddDoss.type_de_pret,
      expression: "formAddDoss.type_de_pret"
    }],
    staticClass: "form-select single-select",
    attrs: {
      id: "type_credit"
    },
    on: {
      change: [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.formAddDoss, "type_de_pret", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }, _vm.handleInput]
    }
  }, [_c("option", {
    attrs: {
      disabled: "",
      selected: "",
      value: ""
    }
  }, [_vm._v("\n                              --- Sélectionner le crédit --\n                            ")]), _vm._v(" "), _vm._l(_vm.loadedCreditsBanques_, function (credit, kk) {
    return _c("option", {
      key: kk,
      domProps: {
        value: credit.libelle
      }
    }, [_vm._v("\n                              " + _vm._s(credit.libelle) + "\n                            ")]);
  })], 2)]) : _vm._e(), _vm._v(" "), ["AFG"].includes(_vm.MIX_ENTITY) ? [_c("InputCoreBankingClientNumber", {
    staticClass: "col-6",
    "class": _vm.formAddDoss.is_prospect == "Non" ? "" : "d-none",
    attrs: {
      formAddDoss: _vm.formAddDoss,
      userData: _vm.userData,
      categorieClient: _vm.categorieClient,
      create: _vm.formAddDoss.is_prospect == "Oui"
    },
    on: {
      "core-banking-client-changed": _vm.onCoreBankingClientChanged
    }
  })] : _vm._e(), _vm._v(" "), ((_vm$categorieClient1 = _vm.categorieClient) === null || _vm$categorieClient1 === void 0 ? void 0 : _vm$categorieClient1.toUpperCase()) == "RETAIL" ? [_c("div", {
    "class": ["mb-3", this.entityType.toUpperCase() == "BANK" ? "col-12" : "col-4"]
  }, [this.realEntity.toUpperCase() !== "AFG" ? [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("\n                              Montant demandé"), _c("span", {
    staticStyle: {
      color: "red"
    }
  }, [_vm._v("*")])]), _vm._v(" "), _c("currency-input2", {
    attrs: {
      "default-typing": false
    },
    on: {
      input: _vm.handleInput
    },
    model: {
      value: _vm.formAddDoss.montant,
      callback: function callback($$v) {
        _vm.$set(_vm.formAddDoss, "montant", $$v);
      },
      expression: "formAddDoss.montant"
    }
  })] : _vm._e()], 2), _vm._v(" "), this.entityType.toUpperCase() == "BANK" ? [["NSIA"].includes(_vm.MIX_ENTITY) ? _c("InputCoreBankingClientNumber", {
    staticClass: "col-4",
    "class": _vm.formAddDoss.is_prospect == "Non" ? "" : "d-none",
    attrs: {
      formAddDoss: _vm.formAddDoss,
      userData: _vm.userData,
      categorieClient: _vm.categorieClient,
      create: _vm.formAddDoss.is_prospect == "Oui"
    },
    on: {
      "core-banking-client-changed": _vm.onCoreBankingClientChanged
    }
  }) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "mb-3",
    "class": _vm.formAddDoss.is_prospect == "Non" && ["NSIA"].includes(_vm.MIX_ENTITY) ? " col-4" : "col-6"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Nom du client"), _c("span", {
    staticStyle: {
      color: "red"
    }
  }, [_vm._v("*")])]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formAddDoss.last_name,
      expression: "formAddDoss.last_name"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      readonly: ""
    },
    domProps: {
      value: _vm.formAddDoss.last_name
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formAddDoss, "last_name", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "mb-3",
    "class": _vm.formAddDoss.is_prospect == "Non" && ["NSIA"].includes(_vm.MIX_ENTITY) ? " col-4" : "col-6"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("\n                                  Prénoms du client"), _c("span", {
    staticStyle: {
      color: "red"
    }
  }, [_vm._v("*")])]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formAddDoss.first_name,
      expression: "formAddDoss.first_name"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      readonly: ""
    },
    domProps: {
      value: _vm.formAddDoss.first_name
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formAddDoss, "first_name", $event.target.value);
      }
    }
  })])] : [_c("div", {
    staticClass: "mb-3 col-4"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Nom du client/Matricule"), _c("span", {
    staticStyle: {
      color: "red"
    }
  }, [_vm._v("*")])]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.clientBank,
      expression: "clientBank"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text"
    },
    domProps: {
      value: _vm.clientBank
    },
    on: {
      change: _vm.clientSelct,
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.clientBank = $event.target.value;
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "mb-3 col-4"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Prénoms du client"), _c("span", {
    staticStyle: {
      color: "red"
    }
  }, [_vm._v("*")])]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.prenomClientBank,
      expression: "prenomClientBank"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text"
    },
    domProps: {
      value: _vm.prenomClientBank
    },
    on: {
      change: _vm.clientSelct,
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.prenomClientBank = $event.target.value;
      }
    }
  })])]] : [_c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: false,
      expression: "false"
    }],
    staticClass: "mb-3 col-5"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Dénomination sociale"), _c("span", {
    staticStyle: {
      color: "red"
    }
  }, [_vm._v("*")])]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.clientBank,
      expression: "clientBank"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text"
    },
    domProps: {
      value: _vm.clientBank
    },
    on: {
      change: _vm.clientSelct,
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.clientBank = $event.target.value;
      }
    }
  })]), _vm._v(" "), this.entityType.toUpperCase() == "BANK" ? [["NSIA"].includes(_vm.MIX_ENTITY) ? _c("InputCoreBankingClientNumber", {
    staticClass: "col-5",
    "class": _vm.formAddDoss.is_prospect == "Non" ? "" : "d-none",
    attrs: {
      formAddDoss: _vm.formAddDoss,
      userData: _vm.userData,
      categorieClient: _vm.categorieClient,
      create: _vm.formAddDoss.is_prospect == "Oui"
    },
    on: {
      "core-banking-client-changed": _vm.onCoreBankingClientChanged
    }
  }) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "mb-3",
    "class": _vm.formAddDoss.is_prospect == "Oui" ? "col-12" : ["NSIA"].includes(_vm.MIX_ENTITY) ? "col-7" : "col-6"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Dénomination sociale"), _c("span", {
    staticStyle: {
      color: "red"
    }
  }, [_vm._v("*")])]), _vm._v(" "), _vm.formAddDoss.is_prospect == "Oui" ? _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formAddDoss.denomination_client,
      expression: "formAddDoss.denomination_client"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text"
    },
    domProps: {
      value: _vm.formAddDoss.denomination_client
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formAddDoss, "denomination_client", $event.target.value);
      }
    }
  }) : ((_vm$formAddDoss15 = _vm.formAddDoss) === null || _vm$formAddDoss15 === void 0 || (_vm$formAddDoss15 = _vm$formAddDoss15.client_core_banking) === null || _vm$formAddDoss15 === void 0 ? void 0 : _vm$formAddDoss15["default"]) == true ? _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formAddDoss.denomination_client,
      expression: "formAddDoss.denomination_client"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text"
    },
    domProps: {
      value: _vm.formAddDoss.denomination_client
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formAddDoss, "denomination_client", $event.target.value);
      }
    }
  }) : _c("input", {
    staticClass: "form-control",
    attrs: {
      type: "text",
      readonly: ""
    },
    domProps: {
      value: (_vm$formAddDoss$clien3 = (_vm$formAddDoss16 = _vm.formAddDoss) === null || _vm$formAddDoss16 === void 0 || (_vm$formAddDoss16 = _vm$formAddDoss16.client_core_banking) === null || _vm$formAddDoss16 === void 0 ? void 0 : _vm$formAddDoss16.name) !== null && _vm$formAddDoss$clien3 !== void 0 ? _vm$formAddDoss$clien3 : ""
    }
  })])] : _vm._e()], _vm._v(" "), ((_vm$categorieClient10 = _vm.categorieClient) === null || _vm$categorieClient10 === void 0 ? void 0 : _vm$categorieClient10.toUpperCase()) == "RETAIL" ? _c("div", {
    staticClass: "mb-3 col-12"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-3"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(" Code"), _c("span", {
    staticStyle: {
      color: "red"
    }
  }, [_vm._v("*")])]), _vm._v(" "), _c("Multiselect", {
    attrs: {
      searchable: true,
      trackBy: "name",
      label: "name",
      "value-prop": "phonecode",
      classes: {
        optionPointed: "text-gray-800 bg-gray-100"
      },
      options: _vm.countries
    },
    scopedSlots: _vm._u([{
      key: "option",
      fn: function fn(_ref9) {
        var option = _ref9.option,
          isPointed = _ref9.isPointed;
        return [_c("p", {
          staticClass: "multiselect-option"
        }, [_vm._v(_vm._s(option.name))])];
      }
    }, {
      key: "singlelabel",
      fn: function fn(_ref0) {
        var value = _ref0.value;
        return [_c("p", {
          staticClass: "multiselect-single-label"
        }, [_vm._v(_vm._s(value.phonecode))])];
      }
    }], null, false, 3006985993),
    model: {
      value: _vm.formAddDoss.indicatif,
      callback: function callback($$v) {
        _vm.$set(_vm.formAddDoss, "indicatif", $$v);
      },
      expression: "formAddDoss.indicatif"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-4"
  }, [_c("label", [_vm._v("\n                                Contact ("), _c("span", {
    staticStyle: {
      color: "green",
      "font-size": "0.7rem"
    }
  }, [_vm._v("WhatsApp")]), _vm._v(")"), _c("span", {
    staticStyle: {
      color: "red"
    }
  }, [_vm._v("*")])]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formAddDoss.phone,
      expression: "formAddDoss.phone"
    }],
    staticClass: "form-control",
    style: _vm.formAddDoss.phone != "" ? "background: #00ffff21; color: #000;" : "",
    attrs: {
      type: "number"
    },
    domProps: {
      value: _vm.formAddDoss.phone
    },
    on: {
      input: [function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formAddDoss, "phone", $event.target.value);
      }, function ($event) {
        _vm.handleInput();
        _vm.createProspect();
      }]
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-5"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Employeur"), _c("span", {
    staticStyle: {
      color: "red"
    }
  }, [_vm._v("*")])]), _vm._v(" "), _c("div", {
    staticClass: "d-flex position-relative align-items-center"
  }, [_c("Multiselect", {
    attrs: {
      id: "convention_entreprise",
      searchable: true,
      trackBy: "denomination",
      label: "denomination",
      "value-prop": "ent_pub_key",
      classes: {
        optionPointed: "text-gray-800 bg-gray-100"
      },
      options: _vm.convention_entreprises_
    },
    on: {
      select: _vm.updateConvention
    },
    scopedSlots: _vm._u([{
      key: "option",
      fn: function fn(_ref1) {
        var option = _ref1.option;
        return [_c("p", {
          staticClass: "multiselect-option"
        }, [_vm._v(_vm._s(option.denomination))])];
      }
    }, {
      key: "singlelabel",
      fn: function fn(_ref10) {
        var value = _ref10.value;
        return [_c("p", {
          staticClass: "multiselect-single-label",
          staticStyle: {
            overflow: "hidden"
          }
        }, [_vm._v(_vm._s(value.denomination))])];
      }
    }], null, false, 2405702391),
    model: {
      value: _vm.localConventionEntreprise,
      callback: function callback($$v) {
        _vm.localConventionEntreprise = $$v;
      },
      expression: "localConventionEntreprise"
    }
  }), _vm._v(" "), _vm.loadConEntreprise ? _c("span", {
    staticClass: "spinner-border spinner-border spinner-custom-input",
    staticStyle: {
      "margin-right": "17px"
    }
  }) : _vm._e()], 1)]), _vm._v(" "), _vm.convention_entreprise == "autre" ? _c("div", {
    staticClass: "col-12 mt-2"
  }, [_c("label", [_vm._v("Autre employeur (Non listé)"), _c("span", {
    staticStyle: {
      color: "red"
    }
  }, [_vm._v("*")])]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.convention_entreprise_autre,
      expression: "convention_entreprise_autre"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text"
    },
    domProps: {
      value: _vm.convention_entreprise_autre
    },
    on: {
      input: [function ($event) {
        if ($event.target.composing) return;
        _vm.convention_entreprise_autre = $event.target.value;
      }, _vm.handleInput]
    }
  })]) : _vm._e()])]) : _c("div", {
    staticClass: "mb-3",
    "class": ((_vm$categorieClient11 = _vm.categorieClient) === null || _vm$categorieClient11 === void 0 ? void 0 : _vm$categorieClient11.toUpperCase()) == "CORPORATE" ? "col-7" : "col-12"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-4"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(" Code"), _c("span", {
    staticStyle: {
      color: "red"
    }
  }, [_vm._v("*")])]), _vm._v(" "), _c("Multiselect", {
    attrs: {
      searchable: true,
      trackBy: "name",
      label: "name",
      "value-prop": "phonecode",
      classes: {
        optionPointed: "text-gray-800 bg-gray-100"
      },
      options: _vm.countries
    },
    scopedSlots: _vm._u([{
      key: "option",
      fn: function fn(_ref11) {
        var option = _ref11.option,
          isPointed = _ref11.isPointed;
        return [_c("p", {
          staticClass: "multiselect-option"
        }, [_vm._v(_vm._s(option.name))])];
      }
    }, {
      key: "singlelabel",
      fn: function fn(_ref12) {
        var value = _ref12.value;
        return [_c("p", {
          staticClass: "multiselect-single-label"
        }, [_vm._v(_vm._s(value.phonecode))])];
      }
    }]),
    model: {
      value: _vm.formAddDoss.indicatif,
      callback: function callback($$v) {
        _vm.$set(_vm.formAddDoss, "indicatif", $$v);
      },
      expression: "formAddDoss.indicatif"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-8"
  }, [_c("label", [_vm._v("\n                                Contact ("), _c("span", {
    staticStyle: {
      color: "green",
      "font-size": "0.7rem"
    }
  }, [_vm._v("WhatsApp")]), _vm._v(")"), _c("span", {
    staticStyle: {
      color: "red"
    }
  }, [_vm._v("*")])]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formAddDoss.phone,
      expression: "formAddDoss.phone"
    }],
    staticClass: "form-control",
    style: _vm.formAddDoss.phone != "" ? "background: #00ffff21; color: #000;" : "",
    attrs: {
      type: "number"
    },
    domProps: {
      value: _vm.formAddDoss.phone
    },
    on: {
      input: [function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formAddDoss, "phone", $event.target.value);
      }, _vm.handleInput]
    }
  })])])]), _vm._v(" "), _c("div", {
    staticClass: "mb-3 col-5"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(" E-mail"), _c("span", {
    staticStyle: {
      color: "red"
    }
  }, [_vm._v("*")])]), _vm._v(" "), _vm.formAddDoss.is_prospect == "Oui" ? _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formAddDoss.email,
      expression: "formAddDoss.email"
    }],
    staticClass: "form-control",
    style: _vm.formAddDoss.email != "" ? "background: #00ffff21; color: #000;" : "",
    attrs: {
      type: "email"
    },
    domProps: {
      value: _vm.formAddDoss.email
    },
    on: {
      input: [function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formAddDoss, "email", $event.target.value);
      }, function ($event) {
        _vm.handleInput();
        _vm.createProspect();
      }]
    }
  }) : _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formAddDoss.email,
      expression: "formAddDoss.email"
    }],
    staticClass: "form-control",
    style: _vm.formAddDoss.email != "" ? "background: #00ffff21; color: #000;" : "",
    attrs: {
      type: "email"
    },
    domProps: {
      value: _vm.formAddDoss.email
    },
    on: {
      input: [function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formAddDoss, "email", $event.target.value);
      }, function ($event) {
        return _vm.handleInput();
      }]
    }
  })]), _vm._v(" "), _c("div", {
    "class": ["mb-3", ((_vm$categorieClient12 = _vm.categorieClient) === null || _vm$categorieClient12 === void 0 ? void 0 : _vm$categorieClient12.toUpperCase()) == "CORPORATE" ? "col-8" : "col-7"]
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Demande du client")]), _vm._v(" "), _vm.formAddDoss.document_client ? _c("div", [(_vm$formAddDoss17 = _vm.formAddDoss) !== null && _vm$formAddDoss17 !== void 0 && _vm$formAddDoss17.document_client ? _c("span", {
    on: {
      click: function click($event) {
        var _vm$formAddDoss18;
        return _vm.openFileDemande("http://" + ((_vm$formAddDoss18 = _vm.formAddDoss) === null || _vm$formAddDoss18 === void 0 ? void 0 : _vm$formAddDoss18.document_client));
      }
    }
  }, [_c("i", {
    staticClass: "icofont icofont-file-document btn icofont-2x",
    staticStyle: {
      "border-radius": "5vh"
    },
    attrs: {
      title: "Voir la demande"
    }
  })]) : _vm._e(), _vm._v(" "), _c("i", {
    staticClass: "icofont icofont-pen-alt-1 btn btn-sm rounded-pill",
    attrs: {
      title: "Modifier la demande"
    },
    on: {
      click: function click($event) {
        _vm.formAddDoss.document_client = "";
      }
    }
  })]) : _c("input", {
    ref: "demandeClient",
    staticClass: "form-control",
    attrs: {
      type: "file"
    },
    on: {
      change: _vm.handleInputFile
    }
  })]), _vm._v(" "), _c("div", {
    "class": ["mb-3", ((_vm$categorieClient13 = _vm.categorieClient) === null || _vm$categorieClient13 === void 0 ? void 0 : _vm$categorieClient13.toUpperCase()) == "CORPORATE" ? "col-4" : "col-3"]
  }, [_c("label", {
    attrs: {
      "for": "filiale"
    }
  }, [_vm._v("Code filiale")]), _vm._v(" "), _c("input", {
    staticClass: "form-control",
    attrs: {
      required: "",
      type: "text",
      id: "filiale",
      disabled: ""
    },
    domProps: {
      value: _vm.formAddDoss.filiale
    }
  })]), _vm._v(" "), _c("div", {
    "class": ["mb-3", ((_vm$categorieClient14 = _vm.categorieClient) === null || _vm$categorieClient14 === void 0 ? void 0 : _vm$categorieClient14.toUpperCase()) == "CORPORATE" ? "col-8" : "col-6"]
  }, [_c("label", {
    attrs: {
      "for": "agence"
    }
  }, [_vm._v("Agence")]), _vm._v(" "), _c("input", {
    staticClass: "form-control",
    attrs: {
      id: "agence",
      required: "",
      type: "text",
      title: _vm.formAddDoss.agence,
      disabled: ""
    },
    domProps: {
      value: _vm.formAddDoss.agence
    }
  })]), _vm._v(" "), _c("div", {
    "class": ["mb-3", ((_vm$categorieClient15 = _vm.categorieClient) === null || _vm$categorieClient15 === void 0 ? void 0 : _vm$categorieClient15.toUpperCase()) == "CORPORATE" ? "col-4" : "col-3"]
  }, [["AFG"].includes(_vm.MIX_ENTITY) ? _c("label", {
    staticClass: "text-nowrap",
    attrs: {
      "for": "cae"
    }
  }, [_vm._v("Code exploitant "), _c("span", {
    staticStyle: {
      color: "red",
      display: "none"
    }
  }, [_vm._v("*")])]) : _c("label", {
    attrs: {
      "for": "cae"
    }
  }, [_vm._v("Code "), ((_vm$categorieClient16 = _vm.categorieClient) === null || _vm$categorieClient16 === void 0 ? void 0 : _vm$categorieClient16.toUpperCase()) == "CORPORATE" ? _c("span", [_vm._v("CAE")]) : _c("span", [_vm._v("CC")]), _vm._v(" "), ((_vm$formAddDoss19 = _vm.formAddDoss) === null || _vm$formAddDoss19 === void 0 ? void 0 : _vm$formAddDoss19.is_prospect) == "Oui" ? _c("span", {
    staticStyle: {
      color: "red"
    }
  }, [_vm._v("*")]) : _vm._e()]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formAddDoss.caf,
      expression: "formAddDoss.caf"
    }],
    staticClass: "form-control",
    attrs: {
      required: "",
      type: "text",
      id: "cae"
    },
    domProps: {
      value: _vm.formAddDoss.caf
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formAddDoss, "caf", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "my-3 col-7"
  }, [_c("button", {
    staticClass: "btn btn-orange",
    attrs: {
      type: "button",
      disabled: _vm.loadingCreateDoss || _vm.ifSubmit
    },
    on: {
      click: _vm.launchCreating
    }
  }, [_vm.loadingCreateDoss ? _c("span", [_c("span", {
    staticClass: "spinner-border spinner-border-sm",
    attrs: {
      role: "status",
      "aria-hidden": "true"
    }
  }), _vm._v("\n                              En cours d'ouverture ...\n                            ")]) : _c("span", [_vm.editFormAdd ? _c("span", [_vm._v("Modifer")]) : _c("span", [_vm.uploading ? _c("span", [_vm._v(" Upload en cours ... ")]) : _c("span", [_vm._v(" Ouvrir ")])])])])])], 2), _vm._v(" "), _c("div", {
    staticClass: "d-flex justify-content-end mt-4"
  }, [_c("button", {
    staticClass: "btn btn-secondary",
    on: {
      click: function click($event) {
        return _vm.returnToStep2();
      }
    }
  }, [_vm._v("\n                            Retour\n                        ")])])])])])])], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/InputCoreBankingClientNumber.vue?vue&type=template&id=5973690d":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/InputCoreBankingClientNumber.vue?vue&type=template&id=5973690d ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "mb-3 d-flex justify-content-between align-items-end gap-2"
  }, [_c("div", {
    staticClass: "w-100"
  }, [_vm.showLabel ? _c("label", {
    attrs: {
      "for": "core_banking_client_indice_input"
    }
  }, [_vm._v(" " + _vm._s(_vm.showLabelIndice()) + " "), _c("span", {
    staticStyle: {
      color: "red"
    }
  }, [_vm._v("*")])]) : _vm._e(), _vm._v(" "), _c("span", {
    staticClass: "border rounded d-flex align-items-center bg-light"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.afgClientIndiceInput,
      expression: "afgClientIndiceInput"
    }],
    staticClass: "px-2 py-1 rounded border-none w-100",
    attrs: {
      type: "text",
      id: "core_banking_client_indice_input",
      placeholder: "Entrez un indice client"
    },
    domProps: {
      value: _vm.afgClientIndiceInput
    },
    on: {
      change: _vm.onClientInputChange,
      keydown: function keydown($event) {
        if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) return null;
        return _vm.onClientInputChange.apply(null, arguments);
      },
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.afgClientIndiceInput = $event.target.value;
      }
    }
  }), _vm._v(" "), !_vm.loadingAFGCustomer ? _c("span", {
    staticClass: "border-start bg-white p-1 px-2 cursor-pointer rounded-end"
  }, [_vm.afgClientIndiceInput && !_vm.loadingAFGCustomer ? _c("i", {
    staticClass: "icofont-close",
    on: {
      click: function click($event) {
        _vm.afgClientIndiceInput = null;
      }
    }
  }) : _c("i", {
    staticClass: "icofont-search",
    attrs: {
      title: "Rechercher indice client"
    }
  })]) : _vm._e()])]), _vm._v(" "), _c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.loadingAFGCustomer || _vm.hasAFGCustomerResult != null,
      expression: "loadingAFGCustomer || hasAFGCustomerResult != null"
    }]
  }, [_c("span", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.loadingAFGCustomer && _vm.hasAFGCustomerResult == null,
      expression: "loadingAFGCustomer && hasAFGCustomerResult == null"
    }],
    staticClass: "spinner-border spinner-border-xs",
    attrs: {
      role: "status",
      "aria-hidden": "true"
    }
  }), _vm._v(" "), _c("i", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.hasAFGCustomerResult == false,
      expression: "hasAFGCustomerResult == false"
    }],
    staticClass: "icofont-exclamation-circle icofont-2x text-danger"
  }), _vm._v(" "), _c("i", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.hasAFGCustomerResult == true,
      expression: "hasAFGCustomerResult == true"
    }],
    staticClass: "icofont-check-circled icofont-2x text-success"
  })])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/DaeModalBuilder.vue?vue&type=style&index=0&id=4843caea&lang=css&scoped=true":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/DaeModalBuilder.vue?vue&type=style&index=0&id=4843caea&lang=css&scoped=true ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_public_css_bootstrap_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! -!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../public/css/bootstrap/css/bootstrap.min.css */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./public/css/bootstrap/css/bootstrap.min.css");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_public_css_icofont_icofont_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../public/css/icofont/icofont.min.css */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./public/css/icofont/icofont.min.css");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_public_css_style_page_three_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! -!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../public/css/style_page_three.css */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./public/css/style_page_three.css");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_public_css_media_three_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! -!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../public/css/media_three.css */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./public/css/media_three.css");
// Imports





var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
___CSS_LOADER_EXPORT___.i(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_public_css_bootstrap_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_public_css_icofont_icofont_min_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_public_css_style_page_three_css__WEBPACK_IMPORTED_MODULE_3__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_public_css_media_three_css__WEBPACK_IMPORTED_MODULE_4__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.input-elevated[data-v-4843caea] {\r\n    font-size: 16px;\r\n    line-height: 1.5;\r\n    border: none;\r\n    background: #ffffff\r\n        url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20'><path fill='%23838D99' d='M13.22 14.63a8 8 0 1 1 1.41-1.41l4.29 4.29a1 1 0 1 1-1.41 1.41l-4.29-4.29zm-.66-2.07a6 6 0 1 0-8.49-8.49 6 6 0 0 0 8.49 8.49z'></path></svg>\")\r\n        no-repeat 10px 10px;\r\n    background-size: 20px 20px;\r\n    box-shadow: 0 0 1px 2px rgba(0, 0, 0, 0.08);\r\n    border-radius: 5px;\r\n    /*width: 500px;*/\r\n    padding: 0.3em 0em 0em 2.5em;\n}\n.input-elevated.multiselect > input[data-v-4843caea] {\r\n    border: 1px solid black;\n}\n.text-container[data-v-4843caea]::-webkit-scrollbar-track {\r\n    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\r\n    background-color: #f5f5f5;\n}\n.text-container[data-v-4843caea]::-webkit-scrollbar {\r\n    width: 5px;\r\n    background-color: #f5f5f5;\n}\n.text-container[data-v-4843caea]::-webkit-scrollbar-thumb {\r\n    background-color: #2c3e50;\r\n    border: 2px solid #555555;\n}\na[data-v-4843caea] {\r\n    color: #34495e;\n}\n.liste-deroulante li[data-v-4843caea] {\r\n    cursor: pointer;\n}\na[data-v-4843caea] {\r\n    color: #34495e;\n}\n.show-menu-option[data-v-4843caea] {\r\n    /* border: 1px #fff solid; */\r\n    background: none;\r\n    position: absolute;\r\n    right: 1vh;\r\n    width: 50vh;\r\n    top: 6vh;\r\n    z-index: 99999;\r\n    /* border: 1px solid #95a5a6; */\r\n    border-radius: 10px;\r\n    overflow: auto;\r\n    height: auto;\r\n    padding: 0;\r\n    /* box-shadow: 0 0 3px 0 grey; */\n}\n.show-menu-option div[data-v-4843caea] {\r\n    background-color: #fff;\n}\n.show-menu-option > div[data-v-4843caea] {\r\n    /* border: 1px solid #95a5a6; */\r\n    width: 100%;\r\n    /* box-shadow: 0px 0px 2px 0px #95a5a6; */\r\n    /* border-radius: 2px; */\n}\n.liste-deroulante li[data-v-4843caea] {\r\n    cursor: pointer;\n}\n.liste-deroulante li[data-v-4843caea]:hover {\r\n    background: #ecf0f1;\r\n    color: grey;\n}\n.show-menu-editing[data-v-4843caea] {\r\n    background: #fff;\r\n    border: 1px solid #000;\r\n    box-shadow: grey 0px 0px 4px 0px;\r\n    position: absolute;\r\n    /* right: -5px; */\r\n    right: -99%;\r\n    width: 100%;\r\n    /* height: 25%; */\r\n    height: 30%;\r\n    /* top: 340px; */\r\n    top: 80%;\r\n    z-index: 3;\r\n    overflow: auto;\n}\n.show-menu-editing-change[data-v-4843caea] {\r\n    background: #fff;\r\n    border: 1px solid;\r\n    position: absolute;\r\n    right: 40px;\r\n    width: 211px;\r\n    height: 69px;\r\n    z-index: 2;\r\n    overflow: auto;\r\n    margin-top: -30px;\n}\n.custom-class[data-v-4843caea]:hover {\r\n    background-color: #dadce0;\r\n    border-radius: 9px;\n}\n.change li[data-v-4843caea]:hover {\r\n    background-color: inherit !important;\n}\n.div-container[data-v-4843caea] {\r\n    position: relative;\n}\r\n\r\n/* .show-msg-over:hover{\r\n     box-shadow: inset 0vh 5vh 2vh 150vh rgba(24,122,53,0.8);\r\n} */\n.show-msg-over:hover .img[data-v-4843caea] {\r\n    opacity: 0.05;\n}\n.Show-Msg-Loading[data-v-4843caea] {\r\n    position: absolute;\r\n    top: 15vh;\r\n    margin: 0px;\r\n    padding: 0px;\r\n    opacity: 0;\r\n    transition: 0.5s;\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    color: white !important;\r\n    text-align: center !important;\r\n    text-shadow: 0 1px 0 grey;\n}\n.show-msg-over[data-v-4843caea] {\r\n    position: relative;\n}\n.show-msg-over:hover > .Show-Msg-Loading[data-v-4843caea] {\r\n    opacity: 1;\r\n    border-color: white;\r\n    font-weight: bold;\n}\n.show-msg-over .result-processing-time[data-v-4843caea] {\r\n    opacity: 1;\r\n    border-color: white;\r\n    position: absolute;\r\n    top: 50px;\r\n    left: 10px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    text-shadow: 0 1px 0 grey;\r\n\r\n    transform: rotate(-4deg);\r\n    color: #34495e;\r\n    font-size: 1.5rem;\r\n    font-weight: 200;\r\n    border: 0.15rem solid #34495e;\r\n    padding: 0.15rem 1rem;\r\n    text-transform: uppercase;\r\n    border-radius: 1rem;\r\n    font-family: \"Courier\";\n}\n.show-msg-over:hover span[data-v-4843caea] {\r\n    opacity: 0.3;\n}\n.show-msg-over *[data-v-4843caea] {\r\n    transition: 0.5s;\n}\n.spacerOne[data-v-4843caea] {\r\n    margin-top: 60px;\n}\n.color_theme4[data-v-4843caea]:hover {\r\n    box-shadow: inset 0vh 5vh 2vh 150vh rgba(24, 122, 53, 0.8);\n}\n.color_theme2[data-v-4843caea]:hover {\r\n    box-shadow: inset 0vh 5vh 2vh 150vh rgba(237, 28, 36, 0.8);\n}\n.color_theme2_0[data-v-4843caea]:hover {\r\n    box-shadow: inset 0vh 5vh 2vh 150vh rgba(155, 89, 182, 0.8);\n}\n.color_theme1_0[data-v-4843caea]:hover {\r\n    box-shadow: inset 0vh 5vh 2vh 150vh rgba(52, 73, 94, 0.8);\n}\n.color_theme1[data-v-4843caea]:hover {\r\n    box-shadow: inset 0vh 5vh 2vh 150vh rgba(69, 170, 242, 0.8);\n}\n.color_theme3[data-v-4843caea]:hover {\r\n    box-shadow: inset 0vh 5vh 2vh 150vh rgba(230, 126, 34, 0.8);\n}\n.color_theme5_0[data-v-4843caea]:hover {\r\n    box-shadow: inset 0vh 5vh 2vh 150vh rgba(192, 57, 43, 1);\n}\n.color_theme5_1[data-v-4843caea]:hover {\r\n    box-shadow: inset 0vh 5vh 2vh 150vh rgba(39, 174, 96, 1);\n}\n.color_theme5_2[data-v-4843caea]:hover {\r\n    box-shadow: inset 0vh 5vh 2vh 150vh rgb(109, 126, 116);\n}\n.color_theme5_3[data-v-4843caea]:hover {\r\n    box-shadow: inset 0vh 5vh 2vh 150vh #5f27cd;\n}\r\n\r\n/******************************************************************/\n.color_theme3_0[data-v-4843caea]:hover {\r\n    box-shadow: inset 0vh 5vh 2vh 150vh #70a1ff;\n}\n.color_theme4_0[data-v-4843caea]:hover {\r\n    box-shadow: inset 0vh 5vh 2vh 150vh #eccc68;\n}\n.color_theme5_0[data-v-4843caea]:hover {\r\n    box-shadow: inset 0vh 5vh 2vh 150vh #bdc581;\n}\n.color_theme5[data-v-4843caea]:hover {\r\n    box-shadow: inset 0vh 5vh 2vh 150vh #82589f;\n}\n.color_theme6_0[data-v-4843caea]:hover {\r\n    box-shadow: inset 0vh 5vh 2vh 150vh #6d214f;\n}\n.color_theme6[data-v-4843caea]:hover {\r\n    box-shadow: inset 0vh 5vh 2vh 150vh #3b3b98;\n}\n.color_theme7_0[data-v-4843caea]:hover {\r\n    box-shadow: inset 0vh 5vh 2vh 150vh #e77f67;\n}\n.color_theme7[data-v-4843caea]:hover {\r\n    box-shadow: inset 0vh 5vh 2vh 150vh #f78fb3;\n}\n.color_theme8_0[data-v-4843caea]:hover {\r\n    box-shadow: inset 0vh 5vh 2vh 150vh rgb(255, 196, 18, 0.8);\n}\n.color_theme8[data-v-4843caea]:hover {\r\n    box-shadow: inset 0vh 5vh 2vh 150vh rgb(238, 90, 36, 0.8);\n}\n.color_theme9_0[data-v-4843caea]:hover {\r\n    box-shadow: inset 0vh 5vh 2vh 150vh rgb(196, 229, 56, 0.8);\n}\n.color_theme9[data-v-4843caea]:hover {\r\n    box-shadow: inset 0vh 5vh 2vh 150vh rgb(0, 148, 50, 0.8);\n}\n.color_theme10_0[data-v-4843caea]:hover {\r\n    box-shadow: inset 0vh 5vh 2vh 150vh rgb(18, 203, 196, 0.8);\n}\n.color_theme10[data-v-4843caea]:hover {\r\n    box-shadow: inset 0vh 5vh 2vh 150vh rgb(6, 82, 217, 0.8);\n}\n.color_theme11_0[data-v-4843caea]:hover {\r\n    box-shadow: inset 0vh 5vh 2vh 150vh rgb(250, 173, 255, 0.8);\n}\n.color_theme11[data-v-4843caea]:hover {\r\n    box-shadow: inset 0vh 5vh 2vh 150vh rgb(153, 128, 250, 0.8);\n}\r\n\r\n/******************************************************************/\r\n\r\n-webkit-transition: 0.5s;\r\n-moz-transition: 0.5s;\r\n-o-transition: 0.5s;\r\n/* .action_dg:hover{\r\n  box-shadow: inset 0vh 5vh 2vh 150vh rgba(237,28,36,0.8);\r\n} */\n.multiselect-option.newval[data-v-4843caea] {\r\n    padding: 5px 8px;\r\n    border-radius: 22px;\r\n    background: #35495e;\r\n    margin: 0;\r\n    border: 1px solid black;\n}\n.mt-70[data-v-4843caea] {\r\n    margin-top: 70px;\n}\n.my-file[data-v-4843caea] {\r\n    background-color: #ee6a00;\r\n    border: 2px solid black;\r\n    color: white;\n}\n.btn-orange[data-v-4843caea] {\r\n    background-color: #ee6a00;\r\n    color: white;\n}\n.text-orange[data-v-4843caea] {\r\n    color: #ee6a00;\n}\n.multiselect-dropdown.is-open[data-v-4843caea] {\r\n    min-width: 250px;\n}\n.on-focused[data-v-4843caea]:focus {\r\n    border: 2px dashed red;\n}\n.stamp[data-v-4843caea] {\r\n    transform: rotate(-4deg);\r\n    color: #e74c3c;\r\n    font-size: 1.5rem;\r\n    font-weight: 700;\r\n    border: 0.25rem solid #e74c3c;\r\n    display: inline-block;\r\n    padding: 0.25rem 1rem;\r\n    text-transform: uppercase;\r\n    text-align: center;\r\n    border-radius: 1rem;\r\n    font-family: \"Courier\";\r\n    -webkit-mask-image: url(\"/images/grunge.png\");\r\n    -webkit-mask-size: 944px 604px;\r\n    mix-blend-mode: multiply;\r\n    /* float: right; */\r\n    /*\r\n    position: relative; */\r\n    /* top: 20vh;\r\n    right: -25vh; */\n}\n.stamp-color[data-v-4843caea] {\r\n    transform: rotate(-4deg);\r\n    color: #34495e;\r\n    font-size: 1.5rem;\r\n    font-weight: 700;\r\n    border: 0.25rem solid #34495e;\r\n    display: inline-block;\r\n    padding: 0.25rem 1rem;\r\n    text-transform: uppercase;\r\n    text-align: center;\r\n    border-radius: 1rem;\r\n    font-family: \"Courier\";\r\n    -webkit-mask-image: url(\"/images/grunge.png\");\r\n    -webkit-mask-size: 944px 604px;\r\n    mix-blend-mode: multiply;\r\n    /* float: right; */\r\n    /*\r\n    position: relative; */\r\n    /* top: 20vh;\r\n    right: -25vh; */\n}\n.stamp-45deg[data-v-4843caea] {\r\n    transform: rotate(-45deg);\n}\n.stamp-40deg[data-v-4843caea] {\r\n    transform: rotate(-65deg);\n}\n.stamp-overlay[data-v-4843caea] {\r\n    cursor: pointer;\r\n    position: absolute;\r\n    z-index: 2;\r\n    /* background-color: rgba(41, 74, 239, 0.15); */\r\n    top: 0;\r\n    left: 0;\r\n    height: 100%;\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    /* float: right; */\r\n    /*\r\n    position: relative; */\r\n    /* top: 20vh;\r\n    right: -25vh; */\n}\n.ready-cf tr th[data-v-4843caea],\r\n.ready-cf tr td[data-v-4843caea] {\r\n    font-size: 0.8rem;\r\n    vertical-align: middle;\n}\n.der_checkbox[data-v-4843caea] {\r\n    /* position: relative; */\r\n    /* top: 2px; */\r\n    transform: scale(1.6) !important;\n}\n.selected-folder[data-v-4843caea] {\r\n    background-color: #dcf0fa !important;\n}\n.tag-retard[data-v-4843caea] {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    color: #fff;\r\n    padding: 5px;\r\n    width: 61px;\r\n    height: 30px;\r\n    border-bottom-right-radius: 20px !important;\r\n    border-top-left-radius: 5px !important;\r\n    font-size: small;\r\n    background: #e74c3c;\n}\n.between-year[data-v-4843caea] {\r\n    margin-left: -10px !important;\n}\r\n/* .close-btn-modal:hover {\r\n    cursor: pointer;\r\n    background: red;\r\n    color: white;\r\n} */\r\n\r\n/* Styles à ajouter dans la section style de votre composant */\n.unpaid-header[data-v-4843caea] {\r\n    background: linear-gradient(135deg, #2c3e50, #4a5568);\r\n    color: white;\r\n    border-radius: 8px 8px 0 0;\r\n    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\r\n    font-weight: 500;\r\n    letter-spacing: 1px;\n}\n.warning-message[data-v-4843caea] {\r\n    color: #bf2424;\r\n    font-size: medium;\r\n    font-weight: bold;\r\n    background-color: rgba(191, 36, 36, 0.05);\r\n    border-radius: 8px;\r\n    border-left: 4px solid #bf2424;\n}\n.info-note[data-v-4843caea] {\r\n    font-size: 13px;\r\n    color: #2e7d32;\r\n    font-style: italic;\r\n    font-weight: 500;\n}\n.client-info-header[data-v-4843caea] {\r\n    background-color: #f8f9fa;\r\n    border-radius: 8px;\r\n    display: flex;\r\n    justify-content: center;\r\n    flex-wrap: wrap;\r\n    gap: 10px;\r\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);\n}\n.client-info-item[data-v-4843caea] {\r\n    font-weight: 500;\r\n    margin: 0 8px;\n}\n.data-card-container[data-v-4843caea] {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    overflow: hidden;\r\n    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);\n}\n.data-card[data-v-4843caea] {\r\n    flex: 1 1 200px;\r\n    transition: all 0.3s ease;\n}\n.data-card[data-v-4843caea]:hover {\r\n    background-color: #f8f9fa;\n}\n.data-card-title[data-v-4843caea] {\r\n    font-weight: 500;\r\n    font-size: 0.9rem;\r\n    text-transform: uppercase;\n}\n.data-card-value[data-v-4843caea] {\r\n    font-size: 1.2rem;\r\n    font-weight: 500;\n}\n.data-card-subtitle[data-v-4843caea] {\r\n    font-size: 0.85rem;\r\n    color: #6c757d;\n}\n.exception-section[data-v-4843caea] {\r\n    background-color: #daedff;\r\n    border-radius: 8px;\n}\n.exception-button[data-v-4843caea] {\r\n    background-color: #dc3545;\r\n    color: white;\r\n    border: none;\r\n    border-radius: 4px;\r\n    font-weight: 500;\r\n    transition: all 0.2s ease;\n}\n.exception-button[data-v-4843caea]:hover:not(:disabled) {\r\n    background-color: #c82333;\r\n    transform: translateY(-2px);\r\n    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);\n}\n.exception-button[data-v-4843caea]:disabled {\r\n    opacity: 0.65;\n}\n.close-button[data-v-4843caea] {\r\n    background: linear-gradient(135deg, #3d3d3d, #2c2c2c);\r\n    color: white;\r\n    border: none;\r\n    border-radius: 4px;\r\n    font-weight: 500;\r\n    transition: all 0.3s ease;\n}\n.close-button[data-v-4843caea]:hover {\r\n    background: linear-gradient(135deg, #2c2c2c, #1a1a1a);\r\n    transform: translateY(-2px);\r\n    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);\n}\n.badge[data-v-4843caea] {\r\n    font-size: 0.7rem;\r\n    font-weight: 500;\n}\n.bg-badge-pret[data-v-4843caea] {\r\n    background: #f5f6f6;\r\n    color: #242628;\n}\n.data-card-value.text-orange[data-v-4843caea] {\r\n    color: #e67e22;\n}\n.text-gray-950[data-v-4843caea] {\r\n    color: #242628;\n}\n.trline[data-v-4843caea] {\n}\n.trline[data-v-4843caea]:hover {\r\n    background: #f1f1f1;\n}\r\n\r\n/* .{\r\n  max-width: 600px;\r\n  margin: 0 auto;\r\n  padding: 20px;\r\n} */\n.progress-circles[data-v-4843caea] {\r\n    display: flex;\r\n    justify-content: center;\r\n    margin-bottom: 30px;\n}\n.circle[data-v-4843caea] {\r\n    width: 15px;\r\n    height: 15px;\r\n    border-radius: 50%;\r\n    background-color: #ccc;\r\n    margin: 0 10px;\r\n    transition: all 0.3s ease;\n}\n.circle.active[data-v-4843caea] {\r\n    background-color: #4caf50;\n}\n.circle.completed[data-v-4843caea] {\r\n    background-color: #2e7d32;\n}\n.step[data-v-4843caea] {\r\n    text-align: center;\r\n    position: relative;\r\n    min-height: 200px;\n}\n.h2[data-v-4843caea] {\r\n    margin-bottom: 20px;\r\n    font-size: 1rem;\n}\n.button-group[data-v-4843caea] {\r\n    display: flex;\r\n    justify-content: center;\r\n    gap: 20px;\r\n    margin: 20px 0;\n}\n.button[data-v-4843caea] {\r\n    padding: 10px 20px;\r\n    background-color: #4caf50;\r\n    color: white;\r\n    border: none;\r\n    border-radius: 4px;\r\n    cursor: pointer;\r\n    transition: background-color 0.3s;\n}\n.button[data-v-4843caea]:hover {\r\n    background-color: #45a049;\n}\n.back-btn[data-v-4843caea] {\r\n    background-color: #666;\r\n    position: absolute;\r\n    bottom: 0;\r\n    left: 0;\n}\n.back-btn[data-v-4843caea]:hover {\r\n    background-color: #555;\n}\n.warning-text[data-v-4843caea] {\r\n    font-weight: bold;\r\n    font-size: 18px;\r\n    color: #d32f2f;\r\n    margin: 20px 0;\r\n    text-align: center;\n}\n.input-group[data-v-4843caea] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 15px;\r\n    margin: 20px 0;\n}\n.input[data-v-4843caea] {\r\n    padding: 10px;\r\n    border: 1px solid #ccc;\r\n    border-radius: 4px;\r\n    font-size: 16px;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/DaeModalBuilder.vue?vue&type=style&index=0&id=4843caea&lang=css&scoped=true":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/DaeModalBuilder.vue?vue&type=style&index=0&id=4843caea&lang=css&scoped=true ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DaeModalBuilder_vue_vue_type_style_index_0_id_4843caea_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DaeModalBuilder.vue?vue&type=style&index=0&id=4843caea&lang=css&scoped=true */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/DaeModalBuilder.vue?vue&type=style&index=0&id=4843caea&lang=css&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DaeModalBuilder_vue_vue_type_style_index_0_id_4843caea_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DaeModalBuilder_vue_vue_type_style_index_0_id_4843caea_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/shared/afg/DaeModalBuilder.vue":
/*!****************************************************************!*\
  !*** ./resources/js/components/shared/afg/DaeModalBuilder.vue ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DaeModalBuilder_vue_vue_type_template_id_4843caea_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DaeModalBuilder.vue?vue&type=template&id=4843caea&scoped=true */ "./resources/js/components/shared/afg/DaeModalBuilder.vue?vue&type=template&id=4843caea&scoped=true");
/* harmony import */ var _DaeModalBuilder_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DaeModalBuilder.vue?vue&type=script&lang=js */ "./resources/js/components/shared/afg/DaeModalBuilder.vue?vue&type=script&lang=js");
/* harmony import */ var _DaeModalBuilder_vue_vue_type_style_index_0_id_4843caea_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DaeModalBuilder.vue?vue&type=style&index=0&id=4843caea&lang=css&scoped=true */ "./resources/js/components/shared/afg/DaeModalBuilder.vue?vue&type=style&index=0&id=4843caea&lang=css&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _DaeModalBuilder_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _DaeModalBuilder_vue_vue_type_template_id_4843caea_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _DaeModalBuilder_vue_vue_type_template_id_4843caea_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "4843caea",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/shared/afg/DaeModalBuilder.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/shared/afg/DaeModalBuilder.vue?vue&type=script&lang=js":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/shared/afg/DaeModalBuilder.vue?vue&type=script&lang=js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DaeModalBuilder_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DaeModalBuilder.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/DaeModalBuilder.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DaeModalBuilder_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/shared/afg/DaeModalBuilder.vue?vue&type=style&index=0&id=4843caea&lang=css&scoped=true":
/*!************************************************************************************************************************!*\
  !*** ./resources/js/components/shared/afg/DaeModalBuilder.vue?vue&type=style&index=0&id=4843caea&lang=css&scoped=true ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DaeModalBuilder_vue_vue_type_style_index_0_id_4843caea_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DaeModalBuilder.vue?vue&type=style&index=0&id=4843caea&lang=css&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/DaeModalBuilder.vue?vue&type=style&index=0&id=4843caea&lang=css&scoped=true");


/***/ }),

/***/ "./resources/js/components/shared/afg/DaeModalBuilder.vue?vue&type=template&id=4843caea&scoped=true":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/components/shared/afg/DaeModalBuilder.vue?vue&type=template&id=4843caea&scoped=true ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DaeModalBuilder_vue_vue_type_template_id_4843caea_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DaeModalBuilder_vue_vue_type_template_id_4843caea_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DaeModalBuilder_vue_vue_type_template_id_4843caea_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DaeModalBuilder.vue?vue&type=template&id=4843caea&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/DaeModalBuilder.vue?vue&type=template&id=4843caea&scoped=true");


/***/ }),

/***/ "./resources/js/components/shared/afg/InputCoreBankingClientNumber.vue":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/shared/afg/InputCoreBankingClientNumber.vue ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _InputCoreBankingClientNumber_vue_vue_type_template_id_5973690d__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InputCoreBankingClientNumber.vue?vue&type=template&id=5973690d */ "./resources/js/components/shared/afg/InputCoreBankingClientNumber.vue?vue&type=template&id=5973690d");
/* harmony import */ var _InputCoreBankingClientNumber_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InputCoreBankingClientNumber.vue?vue&type=script&lang=js */ "./resources/js/components/shared/afg/InputCoreBankingClientNumber.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _InputCoreBankingClientNumber_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _InputCoreBankingClientNumber_vue_vue_type_template_id_5973690d__WEBPACK_IMPORTED_MODULE_0__.render,
  _InputCoreBankingClientNumber_vue_vue_type_template_id_5973690d__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/shared/afg/InputCoreBankingClientNumber.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/shared/afg/InputCoreBankingClientNumber.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/shared/afg/InputCoreBankingClientNumber.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InputCoreBankingClientNumber_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./InputCoreBankingClientNumber.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/InputCoreBankingClientNumber.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InputCoreBankingClientNumber_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/shared/afg/InputCoreBankingClientNumber.vue?vue&type=template&id=5973690d":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/components/shared/afg/InputCoreBankingClientNumber.vue?vue&type=template&id=5973690d ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_InputCoreBankingClientNumber_vue_vue_type_template_id_5973690d__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_InputCoreBankingClientNumber_vue_vue_type_template_id_5973690d__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_InputCoreBankingClientNumber_vue_vue_type_template_id_5973690d__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./InputCoreBankingClientNumber.vue?vue&type=template&id=5973690d */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/InputCoreBankingClientNumber.vue?vue&type=template&id=5973690d");


/***/ })

}]);