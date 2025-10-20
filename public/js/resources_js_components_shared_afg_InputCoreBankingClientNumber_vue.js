"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_shared_afg_InputCoreBankingClientNumber_vue"],{

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