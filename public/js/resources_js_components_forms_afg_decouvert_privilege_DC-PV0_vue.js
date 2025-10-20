"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_forms_afg_decouvert_privilege_DC-PV0_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/decouvert_privilege/DC-PV0.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/decouvert_privilege/DC-PV0.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
/* harmony import */ var _services_ebapis_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../services/ebapis.service */ "./resources/js/services/ebapis.service.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../services/auth.service */ "./resources/js/services/auth.service.js");
/* harmony import */ var _services_credit_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/credit.service */ "./resources/js/services/credit.service.js");
/* harmony import */ var _vueform_multiselect_dist_multiselect_vue2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vueform/multiselect/dist/multiselect.vue2 */ "./node_modules/@vueform/multiselect/dist/multiselect.vue2.js");
/* harmony import */ var _shared_PhoneInput_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/PhoneInput.vue */ "./resources/js/components/shared/PhoneInput.vue");
/* harmony import */ var _shared_PhoneInputCustom_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/PhoneInputCustom.vue */ "./resources/js/components/shared/PhoneInputCustom.vue");
/* harmony import */ var _components_shared_MothAndYearInput_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../components/shared/MothAndYearInput.vue */ "./resources/js/components/shared/MothAndYearInput.vue");
/* harmony import */ var _services_afg_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../services/afg.service */ "./resources/js/services/afg.service.js");
var _methods;
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return r; }; var t, r = {}, e = Object.prototype, n = e.hasOwnProperty, o = "function" == typeof Symbol ? Symbol : {}, i = o.iterator || "@@iterator", a = o.asyncIterator || "@@asyncIterator", u = o.toStringTag || "@@toStringTag"; function c(t, r, e, n) { Object.defineProperty(t, r, { value: e, enumerable: !n, configurable: !n, writable: !n }); } try { c({}, ""); } catch (t) { c = function c(t, r, e) { return t[r] = e; }; } function h(r, e, n, o) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype); return c(a, "_invoke", function (r, e, n) { var o = 1; return function (i, a) { if (3 === o) throw Error("Generator is already running"); if (4 === o) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var u = n.delegate; if (u) { var c = d(u, n); if (c) { if (c === f) continue; return c; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (1 === o) throw o = 4, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = 3; var h = s(r, e, n); if ("normal" === h.type) { if (o = n.done ? 4 : 2, h.arg === f) continue; return { value: h.arg, done: n.done }; } "throw" === h.type && (o = 4, n.method = "throw", n.arg = h.arg); } }; }(r, n, new Context(o || [])), !0), a; } function s(t, r, e) { try { return { type: "normal", arg: t.call(r, e) }; } catch (t) { return { type: "throw", arg: t }; } } r.wrap = h; var f = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var l = {}; c(l, i, function () { return this; }); var p = Object.getPrototypeOf, y = p && p(p(x([]))); y && y !== e && n.call(y, i) && (l = y); var v = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(l); function g(t) { ["next", "throw", "return"].forEach(function (r) { c(t, r, function (t) { return this._invoke(r, t); }); }); } function AsyncIterator(t, r) { function e(o, i, a, u) { var c = s(t[o], t, i); if ("throw" !== c.type) { var h = c.arg, f = h.value; return f && "object" == _typeof(f) && n.call(f, "__await") ? r.resolve(f.__await).then(function (t) { e("next", t, a, u); }, function (t) { e("throw", t, a, u); }) : r.resolve(f).then(function (t) { h.value = t, a(h); }, function (t) { return e("throw", t, a, u); }); } u(c.arg); } var o; c(this, "_invoke", function (t, n) { function i() { return new r(function (r, o) { e(t, n, r, o); }); } return o = o ? o.then(i, i) : i(); }, !0); } function d(r, e) { var n = e.method, o = r.i[n]; if (o === t) return e.delegate = null, "throw" === n && r.i["return"] && (e.method = "return", e.arg = t, d(r, e), "throw" === e.method) || "return" !== n && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + n + "' method")), f; var i = s(o, r.i, e.arg); if ("throw" === i.type) return e.method = "throw", e.arg = i.arg, e.delegate = null, f; var a = i.arg; return a ? a.done ? (e[r.r] = a.value, e.next = r.n, "return" !== e.method && (e.method = "next", e.arg = t), e.delegate = null, f) : a : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f); } function w(t) { this.tryEntries.push(t); } function m(r) { var e = r[4] || {}; e.type = "normal", e.arg = t, r[4] = e; } function Context(t) { this.tryEntries = [[-1]], t.forEach(w, this), this.reset(!0); } function x(r) { if (null != r) { var e = r[i]; if (e) return e.call(r); if ("function" == typeof r.next) return r; if (!isNaN(r.length)) { var o = -1, a = function e() { for (; ++o < r.length;) if (n.call(r, o)) return e.value = r[o], e.done = !1, e; return e.value = t, e.done = !0, e; }; return a.next = a; } } throw new TypeError(_typeof(r) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, c(v, "constructor", GeneratorFunctionPrototype), c(GeneratorFunctionPrototype, "constructor", GeneratorFunction), c(GeneratorFunctionPrototype, u, GeneratorFunction.displayName = "GeneratorFunction"), r.isGeneratorFunction = function (t) { var r = "function" == typeof t && t.constructor; return !!r && (r === GeneratorFunction || "GeneratorFunction" === (r.displayName || r.name)); }, r.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, c(t, u, "GeneratorFunction")), t.prototype = Object.create(v), t; }, r.awrap = function (t) { return { __await: t }; }, g(AsyncIterator.prototype), c(AsyncIterator.prototype, a, function () { return this; }), r.AsyncIterator = AsyncIterator, r.async = function (t, e, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(h(t, e, n, o), i); return r.isGeneratorFunction(e) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, g(v), c(v, u, "Generator"), c(v, i, function () { return this; }), c(v, "toString", function () { return "[object Generator]"; }), r.keys = function (t) { var r = Object(t), e = []; for (var n in r) e.unshift(n); return function t() { for (; e.length;) if ((n = e.pop()) in r) return t.value = n, t.done = !1, t; return t.done = !0, t; }; }, r.values = x, Context.prototype = { constructor: Context, reset: function reset(r) { if (this.prev = this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(m), !r) for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0][4]; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(r) { if (this.done) throw r; var e = this; function n(t) { a.type = "throw", a.arg = r, e.next = t; } for (var o = e.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i[4], u = this.prev, c = i[1], h = i[2]; if (-1 === i[0]) return n("end"), !1; if (!c && !h) throw Error("try statement without catch or finally"); if (null != i[0] && i[0] <= u) { if (u < c) return this.method = "next", this.arg = t, n(c), !0; if (u < h) return n(h), !1; } } }, abrupt: function abrupt(t, r) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var n = this.tryEntries[e]; if (n[0] > -1 && n[0] <= this.prev && this.prev < n[2]) { var o = n; break; } } o && ("break" === t || "continue" === t) && o[0] <= r && r <= o[2] && (o = null); var i = o ? o[4] : {}; return i.type = t, i.arg = r, o ? (this.method = "next", this.next = o[2], f) : this.complete(i); }, complete: function complete(t, r) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), f; }, finish: function finish(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[2] === t) return this.complete(e[4], e[3]), m(e), f; } }, "catch": function _catch(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[0] === t) { var n = e[4]; if ("throw" === n.type) { var o = n.arg; m(e); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(r, e, n) { return this.delegate = { i: x(r), r: e, n: n }, "next" === this.method && (this.arg = t), f; } }, r; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }









window.$ = window.jQuery = __webpack_require__(/*! jquery/dist/jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Identification_du_client",
  display: "Identification du client",
  components: {
    MoreVerticalIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_8__.MoreVerticalIcon,
    ChevronUpIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_8__.ChevronUpIcon,
    ChevronDownIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_8__.ChevronDownIcon,
    PlusIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_8__.PlusIcon,
    TrashIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_8__.TrashIcon,
    AirplayIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_8__.AirplayIcon,
    Multiselect: _vueform_multiselect_dist_multiselect_vue2__WEBPACK_IMPORTED_MODULE_3__["default"],
    PhoneInput: _shared_PhoneInput_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    PhoneInputCustom: _shared_PhoneInputCustom_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
    MothAndYearInput: _components_shared_MothAndYearInput_vue__WEBPACK_IMPORTED_MODULE_6__["default"]
    // BookOpenIcon,
  },
  computed: {
    compte_contribuable_label: function compte_contribuable_label() {
      var _this$authenticatedUs;
      if (((_this$authenticatedUs = this.authenticatedUser) === null || _this$authenticatedUs === void 0 ? void 0 : _this$authenticatedUs.filiale) == "AFGB CM") {
        return 'N° d\'identifiant unique (NIU)';
      } else {
        return 'N° compte contribuable (NCC)';
      }
    },
    comptesAFGBank: function comptesAFGBank() {
      return this.comptes.filter(function (compte) {
        return compte.banque === 'AFG BANK';
      });
    },
    sexMaping: function sexMaping() {
      if (this.core_banking_info.sex == 'M') {
        return "Masculin";
      } else {
        return "Féminin";
      }
    },
    contryMaping: function contryMaping() {
      var _this = this;
      var findNationnalites = this.nationnalites.find(function (el) {
        var _this$core_banking_in;
        return el.code == ((_this$core_banking_in = _this.core_banking_info) === null || _this$core_banking_in === void 0 ? void 0 : _this$core_banking_in.country_code);
      });
      if (!findNationnalites) return {
        libelle: "",
        pays: "",
        indicatif: "",
        code: ""
      };
      var libelle = findNationnalites.libelle,
        pays = findNationnalites.pays,
        indicatif = findNationnalites.indicatif,
        code = findNationnalites.code;
      this.formDataToBeWatched.nationnalite = libelle;
      return {
        libelle: libelle,
        pays: pays,
        indicatif: indicatif,
        code: code
      };
    },
    situationMapping: function situationMapping() {
      switch (this.core_banking_info.situation_matrimoniale_code) {
        case 'D':
          return "Divorcé(e)";
        case 'S':
          return "Célibataire";
        case 'M':
          return "Marié(e)";
        case 'E':
          return "Veuf(ve)";
        case 'CO':
          return "Concubinage";
        case 'R':
          return "Remarié(e)";
        default:
          return "";
      }
    },
    getIndicatifTel: function getIndicatifTel() {
      var _this$core_banking_in2,
        _this2 = this;
      if ((_this$core_banking_in2 = this.core_banking_info) !== null && _this$core_banking_in2 !== void 0 && _this$core_banking_in2.indicatif && typeof this.core_banking_info.indicatif == 'string') {
        var _indicatif = this.core_banking_info.indicatif.trim();
        _indicatif = _indicatif.startsWith('+') ? _indicatif : '+' + _indicatif;
        var nationality = this.nationnalites.find(function (el) {
          return el.indicatif === _indicatif;
        });
        if (!nationality) {
          return {
            libelle: "",
            pays: "",
            indicatif: _indicatif,
            code: ""
          };
        }
        var _libelle = nationality.libelle,
          _pays = nationality.pays,
          _code = nationality.code;
        return {
          libelle: _libelle,
          pays: _pays,
          indicatif: _indicatif,
          code: _code
        };
      }
      var findIndicatif = this.nationnalites.find(function (el) {
        var _this2$core_banking_i;
        return el.code === ((_this2$core_banking_i = _this2.core_banking_info) === null || _this2$core_banking_i === void 0 ? void 0 : _this2$core_banking_i.country_code);
      });
      if (!findIndicatif) return {
        libelle: "",
        pays: "",
        indicatif: "",
        code: ""
      };
      var libelle = findIndicatif.libelle,
        pays = findIndicatif.pays,
        indicatif = findIndicatif.indicatif,
        code = findIndicatif.code;
      return {
        libelle: libelle,
        pays: pays,
        indicatif: indicatif,
        code: code
      };
    },
    getIndicatifBureau: function getIndicatifBureau() {
      var _this$formDataToBeWat, _this$formDataToBeWat2;
      return (_this$formDataToBeWat = this.formDataToBeWatched) !== null && _this$formDataToBeWat !== void 0 && _this$formDataToBeWat.telephone_bureau ? (_this$formDataToBeWat2 = this.formDataToBeWatched) === null || _this$formDataToBeWat2 === void 0 ? void 0 : _this$formDataToBeWat2.telephone_bureau.split(' ')[0] : '+';
    },
    showAssuranceAutre: function showAssuranceAutre() {
      return this.assurance_souscrit == "Autre" ? true : false;
    },
    getIndicatif: function getIndicatif() {
      return this.currentIndicatif;
    },
    professions_: function professions_() {
      return [{
        id: 0,
        libelle: 'Autre',
        slug: 'autre'
      }].concat(_toConsumableArray(this.professions));
    },
    transformTypeCreditsFacilite_: function transformTypeCreditsFacilite_() {
      return this.type_credits_facilite;
    }
  },
  props: {
    meta_data: Object,
    tb_name: String,
    tb_display_name: String
  },
  created: function created() {
    var _this3 = this;
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var _this3$meta_data, _this3$meta_data2, _this3$meta_data3, _this3$core_banking_i, _this3$core_banking_i2, _this3$meta_data4, _this3$formDataToBeWa;
      var phoneNumber, bureauPhone;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            EventBus.$on("fresh-core-banking-data", function (data) {
              if (data) {
                _this3.core_banking_info = data;
                _this3.matchingCoreBanking();
              }
            });
            _context.next = 3;
            return _this3.userSession();
          case 3:
            _context.next = 5;
            return _this3.getFcubAccountClassTab();
          case 5:
            _context.next = 7;
            return _services_credit_service__WEBPACK_IMPORTED_MODULE_2__["default"].loadCAFAfg((_this3$meta_data = _this3.meta_data) === null || _this3$meta_data === void 0 || (_this3$meta_data = _this3$meta_data.dossier_credit) === null || _this3$meta_data === void 0 ? void 0 : _this3$meta_data.monteur_doss_email).then(function (res) {
              _this3.cafData(res);
            })["catch"](function (err) {
              console.log(err);
            });
          case 7:
            if ((_this3$meta_data2 = _this3.meta_data) !== null && _this3$meta_data2 !== void 0 && (_this3$meta_data2 = _this3$meta_data2.dossier_credit) !== null && _this3$meta_data2 !== void 0 && _this3$meta_data2.numero_dossier.startsWith('AFGBCM')) {
              _this3.currentIndicatif = "+237";
              _this3.currentState = "Cameroun";
            }
            if ((_this3$meta_data3 = _this3.meta_data) !== null && _this3$meta_data3 !== void 0 && (_this3$meta_data3 = _this3$meta_data3.dossier_credit) !== null && _this3$meta_data3 !== void 0 && _this3$meta_data3.numero_dossier.startsWith('AFGBML')) {
              _this3.currentIndicatif = "+223";
              _this3.currentState = "Mali";
            }
            phoneNumber = ((_this3$core_banking_i = _this3.core_banking_info) === null || _this3$core_banking_i === void 0 ? void 0 : _this3$core_banking_i.phone) || ((_this3$core_banking_i2 = _this3.core_banking_info) === null || _this3$core_banking_i2 === void 0 || (_this3$core_banking_i2 = _this3$core_banking_i2.phone_numbers[0]) === null || _this3$core_banking_i2 === void 0 ? void 0 : _this3$core_banking_i2.phone_number.slice(-8));
            _this3.formDataToBeWatched.telephone = "".concat(_this3.currentIndicatif, " ").concat(_this3.normalizePhoneNumber(phoneNumber, _this3.currentState)) || "".concat(_this3.cuentIndicatif).concat(phoneNumber);
            bureauPhone = (_this3$meta_data4 = _this3.meta_data) === null || _this3$meta_data4 === void 0 || (_this3$meta_data4 = _this3$meta_data4.dossier_credit) === null || _this3$meta_data4 === void 0 || (_this3$meta_data4 = _this3$meta_data4.cred_pub_tb_120001) === null || _this3$meta_data4 === void 0 ? void 0 : _this3$meta_data4.telephone_bureau;
            _this3.formDataToBeWatched.getPhoneBureau = bureauPhone ? bureauPhone.split(' ')[1] : (_this3$formDataToBeWa = _this3.formDataToBeWatched) === null || _this3$formDataToBeWa === void 0 ? void 0 : _this3$formDataToBeWa.telephone_bureau;
            _this3.formDataToBeWatched.getIndicatifBureau = bureauPhone ? bureauPhone.split(' ')[0] : _this3.currentIndicatif;
            _context.next = 16;
            return _this3.getNationalites();
          case 16:
            _context.next = 18;
            return _this3.getCreditBanques();
          case 18:
            _context.next = 20;
            return _this3.loadPourQuotiteData();
          case 20:
            EventBus.$on("dossier-updated-dcp-0", function (data) {
              var _data$data_tb, _data$data_tb2;
              _this3.revenu_domicilie = data === null || data === void 0 || (_data$data_tb = data.data_tb0) === null || _data$data_tb === void 0 ? void 0 : _data$data_tb.revenu_domicilie;
              _this3.formDataToBeWatched.revenu_domicilie = data === null || data === void 0 || (_data$data_tb2 = data.data_tb0) === null || _data$data_tb2 === void 0 ? void 0 : _data$data_tb2.revenu_domicilie;
            });
          case 21:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }))();
  },
  beforeDestroy: function beforeDestroy() {
    EventBus.$off("dossier-updated-dcpp-pcp4-0-1", this.handleDossierUpdate);
  },
  mounted: function mounted() {
    var _this4 = this;
    this.loadRetrieved();
    this.loadTbAttrs();
    this.tableClosedOrOpened();
    this.loadScoringData();
    this.getProfessions();
    EventBus.$on("export-simulation", function (data) {
      // formDataToBeWatched.salaire_brut
      try {
        var salaireNetIndex = _this4.revenu_domicilie.findIndex(function (el) {
          return el.libelle === 'Salaire net';
        });
        if (salaireNetIndex !== -1) {
          var _data$simulation;
          var salaireNet = data === null || data === void 0 || (_data$simulation = data.simulation) === null || _data$simulation === void 0 || (_data$simulation = _data$simulation.caracteristiques_credit) === null || _data$simulation === void 0 ? void 0 : _data$simulation.salaire_net;
          if (salaireNet) {
            var _this4$formatNumber;
            var event = ['montant_salaire', salaireNet];
            _this4.formDataVars2([event[0], ((_this4$formatNumber = _this4.formatNumber) === null || _this4$formatNumber === void 0 ? void 0 : _this4$formatNumber.call(_this4, String(event[1]))) || String(event[1])], salaireNetIndex, 'revenu_domicilie', 'montant_salaire');
          }
        }
        EventBus.$emit("simulation-exported", {
          success: true,
          message: "Simulation exportée avec succès"
        });
      } catch (err) {
        console.error("Erreur lors de l'exportation de la simulation :", err);
        EventBus.$emit("simulation-exported", {
          success: false,
          message: "Erreur lors de l'exportation de la simulation"
        });
      }
    });
  },
  data: function data() {
    var _this$meta_data;
    var vm = this;
    return {
      ebapisHost: _services_ebapis_service__WEBPACK_IMPORTED_MODULE_0__["default"].host,
      core_banking_info: (_this$meta_data = this.meta_data) === null || _this$meta_data === void 0 || (_this$meta_data = _this$meta_data.dossier_credit) === null || _this$meta_data === void 0 ? void 0 : _this$meta_data.client_core_banking,
      authcheck: false,
      authcheckUsr: null,
      authcheckStatus: null,
      watchInPause: false,
      initLoad: true,
      seen: true,
      seen_avoir: true,
      isLoading: false,
      meta_parseable: {
        cred_pub_key: this.meta_data["cred_pub_key"],
        tb_name: this.tb_name
      },
      type_credits: [],
      contextList: [{
        title: "Commenter",
        icon: "icofont icofont-comment",
        handler: function () {
          this.openNotesModal();
        }.bind(vm),
        disabled: false
      }, {
        title: "Assigner",
        icon: "icofont icofont-check",
        handler: function handler() {},
        disabled: true
      }, {
        title: "Supprimer",
        icon: "icofont icofont-trash",
        handler: this.startDeletingTbFromContext,
        disabled: false
      }],
      periodicites: [{
        libelle: "Mensuelle",
        month: 1
      }, {
        libelle: "Bimensuelle",
        month: 1
      }, {
        libelle: "Trimestrielle",
        month: 3
      }, {
        libelle: "Semestrielle",
        month: 6
      }, {
        libelle: "Annuelle",
        month: 12
      }],
      status_object: {},
      listingNote: false,
      formDataToBeWatched: {
        status_object: {},
        notes: [],
        is_first_time: null,
        global_env_entity: _services_ebapis_service__WEBPACK_IMPORTED_MODULE_0__["default"].loadableEntity()[0].toUpperCase(),
        getPhoneBureau: "",
        getIndicatifBureau: "",
        nom: "",
        prenoms: "",
        carcasse_type: "",
        denomination_client: "",
        contact_client: "",
        numero_matricule: "",
        entreprise: "",
        statut_entreprise: "",
        employeur: "",
        profession: "",
        fonction: "",
        type_client: "",
        compte_contribuable: "",
        adresse_employeur: "",
        date_embauche: "",
        compte_numero: "",
        // email_client : "",
        indice: "",
        // compte_numero: "",
        telephone: "",
        telephone_bureau: "",
        // type_piece: "",
        num_piece: "",
        sexe: "",
        date_naissance: "",
        ville_naissance: "",
        ville_residence: "",
        nationnalite: "",
        matrimoniale: "",
        regime_matrimonial: "",
        conjoint: {
          nom: "",
          prenoms: "",
          matrimoniale: "",
          adresse: ""
        },
        adresse: "",
        adresse_postale: "",
        revenu_domicilie: "",
        revenu_total_colonne_emprunteur: 0,
        revenu_total_colonne_conjoint: 0,
        revenu_total_colonne_mensualite: 0,
        revenu_total_colonne_mensualite_conjoint: 0,
        revenu_total_colonne_montant_pondere: 0,
        revenu_total_colonne_montant_pondere_conjoint: 0,
        revenu_total_colonne_montant_qc1: 0,
        revenu_total_colonne_montant_qc1_conjoint: 0,
        revenu_total_colonne_montant_qc2: 0,
        revenu_total_colonne_taux_qc1: 0,
        revenu_total_colonne_taux_qc1_conjoint: 0,
        revenu_total_colonne_taux_qc2: 0,
        revenu_total: "",
        salaire_brut: 0,
        pourcentage_quotite: "",
        pourcentage_quotite_conjoint: "",
        pourcentage_quotite_general: "",
        quotite_cessible: "",
        quotite_cessible_conjoint: "",
        quotite_cessible_general: "",
        quotite_cessible_disponible: "",
        quotite_cessible_disponible_general: "",
        comptes: [],
        reference_familiales_personne_contacters: []
      },
      professions: [],
      entreprise: "",
      fonction: "",
      avoirs_investissements: [{
        label: "",
        value: ""
      }],
      newAvoir: "",
      mask_telephone: "",
      nationnalites: [],
      seen1: true,
      seen2: true,
      revenu_domicilie: [{
        libelle: "Salaire net",
        checked: true,
        montant_salaire: "",
        montant_conjoint: "",
        total_ligne: "",
        eligible: true,
        source_remboursement: true,
        periodicite: "",
        mensualite: 0,
        mensualite_conjoint: 0,
        taux: 0,
        montant_pondere: 0,
        montant_pondere_conjoint: 0,
        taux_qc1: 0,
        taux_qtc_conjoint: 0,
        montant_qc1: 0,
        montant_qc1_conjoint: 0,
        taux_qc2: 0,
        montant_qc2: 0,
        commentaire: ""
      }, {
        libelle: "Prime",
        checked: false,
        montant_salaire: "",
        montant_conjoint: "",
        total_ligne: "",
        eligible: false,
        source_remboursement: false,
        periodicite: "",
        mensualite: 0,
        mensualite_conjoint: 0,
        taux: 0,
        montant_pondere: 0,
        taux_qc1: 0,
        taux_qtc_conjoint: 0,
        montant_qc1: 0,
        montant_qc1_conjoint: 0,
        taux_qc2: 0,
        montant_qc2: 0,
        commentaire: ""
      }],
      pourcentages_quotites: [],
      seen3: true,
      seen3_1: true,
      seen3_2: true,
      bref_produit_eventuellement_souscrits: [{
        "id": 1,
        "libelle": "Compte courant (numéro compte + montant solde)",
        "commentaire": "",
        "checked": false,
        "default": true
      }, {
        "id": 2,
        "libelle": "Compte d’épargne / compte d’épargne plus (numéro compte + montant solde)",
        "commentaire": "",
        "checked": false,
        "default": true
      }, {
        "id": 3,
        "libelle": "Cartes (si oui, quel type)",
        "commentaire": "",
        "checked": false,
        "default": true
      }, {
        "id": 4,
        "libelle": "B2W",
        "commentaire": "",
        "checked": false,
        "default": true
      }, {
        "id": 5,
        "libelle": "E-banking",
        "commentaire": "",
        "checked": false,
        "default": true
      }, {
        "id": 6,
        "libelle": "Sms-banking",
        "commentaire": "",
        "checked": false,
        "default": true
      }],
      bref_produit_assurance: [{
        "id": 1,
        "assurance": null,
        "commentaire": "",
        "checked": false
      }],
      comptes: [{
        banque: "AFG BANK",
        libelle: "",
        autre_libelle: "",
        iban: "",
        numero_compte: "",
        montant: "",
        date_extration_releve: "",
        date_ouverture_compte: "",
        montant_epargne: "",
        duree: ""
      }],
      data_garanties: [],
      lock_fields: [{
        lock: false
      }],
      seen5: true,
      seen4: true,
      seen6: true,
      seen7: true,
      seen8: true,
      seen9: true,
      seen10: true,
      all_assurance: [null, "AFG Assurance", "Beneficial", "Sunu", "Allianz/Salam", "Autre"],
      produits_assurance: ["AFG Assurance", "Autre"],
      autre_produits_assurance: ["Beneficial", "Sunu", "Allianz/Salam", "Autre"],
      assurance_souscrit: "",
      assurance_souscrit_autre: "",
      currentIndicatif: '',
      currentState: '',
      reference_familiales_personne_contacters: [{
        nom: "",
        contact: "",
        adresse: "",
        lien_parente: "",
        commentaire: ""
      }],
      type_credits_facilite: [],
      show_input: false,
      assurance_souscrit_autre_input: '',
      lien_parente: ["Enfant", "Parent", "Petit-enfant", "Frère", "Soeur", "Grand-parent", "Neveu", "Nièce", "Oncle", "Tante", "Cousin", "Conjointe/Conjoint", "Autre"],
      max_rows: 2,
      comptesCoreBankings: []
    };
  },
  methods: (_methods = {
    accountLib: function accountLib(account_is_courant) {
      if ([null, undefined, ''].includes(account_is_courant)) return '';
      return account_is_courant ? 'Compte courant' : 'Autre';
    },
    getFcubAccountClassTab: function getFcubAccountClassTab() {
      var _this5 = this;
      _services_afg_service__WEBPACK_IMPORTED_MODULE_7__["default"].getFcubAccountClassTab().then(function (res) {
        _this5.type_credits_facilite = res === null || res === void 0 ? void 0 : res.data;
      })["catch"](function (err) {
        console.log(err);
      });
    },
    tousLesComptes: function tousLesComptes() {
      var _this$core_banking_in3,
        _this6 = this,
        _accountsData$comptes,
        _accountsData$autres_,
        _accountsData$credits,
        _accountsData$caution,
        _accountsData$credits2,
        _accountsData$autres;
      var accountsData = ((_this$core_banking_in3 = this.core_banking_info) === null || _this$core_banking_in3 === void 0 ? void 0 : _this$core_banking_in3.accounts_data) || {};
      if (_typeof(accountsData) !== 'object' || accountsData === null) {
        console.error("accounts_data n'est pas un objet valide :", accountsData);
        return [];
      }
      var defaultAttributes = {
        banque: "AFG BANK",
        libelle: "",
        autre_libelle: "",
        numero_compte: "",
        montant: "",
        date_extration_releve: "",
        date_ouverture_compte: "",
        montant_epargne: "",
        duree: ""
      };
      var mapItem = function mapItem(item) {
        var _this6$meta_data;
        return {
          numero_compte: item.code || "",
          date_extration_releve: _this6.formatDate((_this6$meta_data = _this6.meta_data) === null || _this6$meta_data === void 0 || (_this6$meta_data = _this6$meta_data.dossier_credit) === null || _this6$meta_data === void 0 ? void 0 : _this6$meta_data.created_at) || "",
          libelle: item.type || ""
        };
      };
      var tousLesComptes = [].concat(_toConsumableArray(((_accountsData$comptes = accountsData.comptes_courants) === null || _accountsData$comptes === void 0 ? void 0 : _accountsData$comptes.map(function (item) {
        return _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, defaultAttributes), item), mapItem(item)), {}, {
          type: "Compte courant"
        });
      })) || []), _toConsumableArray(((_accountsData$autres_ = accountsData.autres_comptes) === null || _accountsData$autres_ === void 0 ? void 0 : _accountsData$autres_.map(function (item) {
        return _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, defaultAttributes), item), mapItem(item)), {}, {
          type: "Compte d'engagement"
        });
      })) || []), _toConsumableArray(((_accountsData$credits = accountsData.credits_amortissables) === null || _accountsData$credits === void 0 ? void 0 : _accountsData$credits.map(function (item) {
        return _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, defaultAttributes), item), mapItem(item)), {}, {
          type: "Compte d'engagement"
        });
      })) || []), _toConsumableArray(((_accountsData$caution = accountsData.cautions) === null || _accountsData$caution === void 0 ? void 0 : _accountsData$caution.map(function (item) {
        return _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, defaultAttributes), item), mapItem(item)), {}, {
          type: "Compte d'engagement"
        });
      })) || []), _toConsumableArray(((_accountsData$credits2 = accountsData.credits_bail) === null || _accountsData$credits2 === void 0 ? void 0 : _accountsData$credits2.map(function (item) {
        return _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, defaultAttributes), item), mapItem(item)), {}, {
          type: "Compte d'engagement"
        });
      })) || []), _toConsumableArray(((_accountsData$autres = accountsData.autres) === null || _accountsData$autres === void 0 ? void 0 : _accountsData$autres.map(function (item) {
        return _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, defaultAttributes), item), mapItem(item)), {}, {
          type: "Autre"
        });
      })) || []));
      return tousLesComptes;
    },
    formDataVars: function formDataVars(event) {
      this.formDataToBeWatched[event[0]] = event[1];
      this.handleInput();
    },
    formatDate: function formatDate(isoDate) {
      if (!isoDate) return "";
      var date = new Date(isoDate);
      if (isNaN(date.getTime())) return "";
      var day = String(date.getDate()).padStart(2, '0');
      var month = String(date.getMonth() + 1).padStart(2, '0');
      var year = date.getFullYear();
      return "".concat(year, "-").concat(month, "-").concat(day);
    },
    getProfessions: function getProfessions() {
      var _this7 = this;
      var cachedProfessions = localStorage.getItem('professions');
      if (!cachedProfessions) {
        _services_credit_service__WEBPACK_IMPORTED_MODULE_2__["default"].loadProfessions().then(function (res) {
          _this7.professions = res.data.data;
          localStorage.setItem('professions', JSON.stringify(res.data.data));
        })["catch"](function (err) {
          console.log(err);
        });
      } else {
        var data = JSON.parse(cachedProfessions);
        this.professions = data;
      }
    },
    selectedOptionFonction: function selectedOptionFonction(value, obj) {
      this.formDataToBeWatched.fonction = obj === null || obj === void 0 ? void 0 : obj.libelle;
      if (this.fonction == 'Autre') {
        this.formDataToBeWatched.fonction = "";
      }
      this.handleInput();
    },
    onAssuranceChange: function onAssuranceChange(index, el) {
      if (el.assurance == "Autre") {
        el.assurance = "";
        this.bref_produit_assurance[index].assurance = "";
        this.formDataToBeWatched.bref_produit_assurance = this.bref_produit_assurance;
        this.$set(this.bref_produit_assurance, index, el);
      }
    },
    convertDDMMYYYYtoYYYYMMDD: function convertDDMMYYYYtoYYYYMMDD(dateString) {
      if (['', null, undefined].includes(dateString)) return "";
      var _dateString$split$map = dateString.split('/').map(Number),
        _dateString$split$map2 = _slicedToArray(_dateString$split$map, 3),
        day = _dateString$split$map2[0],
        month = _dateString$split$map2[1],
        year = _dateString$split$map2[2];
      var date = new Date(year, month - 1, day);
      var formattedYear = date.getFullYear();
      var formattedMonth = String(date.getMonth() + 1).padStart(2, '0');
      var formattedDay = String(date.getDate()).padStart(2, '0');
      return formattedYear + '-' + formattedMonth + '-' + formattedDay;
    },
    addAvoir: function addAvoir() {
      this.avoirs_investissements.push({
        label: "",
        value: ""
      });
      this.handleInput();
    },
    removeAvoir: function removeAvoir(index) {
      this.avoirs_investissements.splice(index, 1);
      this.handleInput();
    },
    updateIndicatif: function updateIndicatif() {
      var _this$authcheckUsr;
      var current_filiale = (_this$authcheckUsr = this.authcheckUsr) === null || _this$authcheckUsr === void 0 || (_this$authcheckUsr = _this$authcheckUsr.filiale) === null || _this$authcheckUsr === void 0 ? void 0 : _this$authcheckUsr.replace(" ", "_");
      var list_indicatif = {
        "AFGB_CIV": "+225",
        "AFGB_BF": "+226",
        "AFGB_CG": "+242",
        "AFGB_GN": "+224",
        "AFGB_ML": "+223",
        "AFGB_SN": "+221",
        "AFGB_TG": "+228",
        "AFGB_GB": "+241",
        "AFGB_CM": "+237"
      };
      this.currentIndicatif = list_indicatif[current_filiale] || ""; // Mettre à jour la variable réactive
    },
    userSession: function userSession() {
      var _this8 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["default"].loadUserData().then(function (res) {
                _this8.authcheckUsr = res.data;
                // this.logo = this.authcheckUsr["logo"];
              })["catch"](function (err) {
                console.log(err);
              });
            case 1:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }))();
    },
    matchingCoreBanking: function matchingCoreBanking() {
      var _this$core_banking_in4, _this$core_banking_in5, _this$core_banking_in6, _this$core_banking_in7, _this$core_banking_in8, _this$core_banking_in9, _this$core_banking_in0, _this$core_banking_in1, _this$core_banking_in10, _this$core_banking_in11, _this$core_banking_in12, _this$core_banking_in13, _this$core_banking_in14, _this$core_banking_in15, _this$core_banking_in16, _this$core_banking_in17, _this$core_banking_in18, _this$core_banking_in19, _this$core_banking_in20, _this$core_banking_in21;
      // console.log('matchingCoreBanking', this.core_banking_info, this.currentState, this.currentIndicatif);
      var phoneNumber = ((_this$core_banking_in4 = this.core_banking_info) === null || _this$core_banking_in4 === void 0 ? void 0 : _this$core_banking_in4.phone) || ((_this$core_banking_in5 = this.core_banking_info) === null || _this$core_banking_in5 === void 0 || (_this$core_banking_in5 = _this$core_banking_in5.phone_numbers[0]) === null || _this$core_banking_in5 === void 0 ? void 0 : _this$core_banking_in5.phone_number.slice(-8));
      this.formDataToBeWatched.email_client = (_this$core_banking_in6 = this.core_banking_info) === null || _this$core_banking_in6 === void 0 ? void 0 : _this$core_banking_in6.email;
      this.formDataToBeWatched.compte_contribuable = (_this$core_banking_in7 = (_this$core_banking_in8 = this.core_banking_info) === null || _this$core_banking_in8 === void 0 ? void 0 : _this$core_banking_in8.taxid_no) !== null && _this$core_banking_in7 !== void 0 ? _this$core_banking_in7 : "";
      // this.formDataToBeWatched.telephone = `${this.currentIndicatif}${this.normalizePhoneNumber(phoneNumber, this.currentState)}` || `${this.cuentIndicatif}${phoneNumber}`;
      this.formDataToBeWatched.type_piece = (_this$core_banking_in9 = this.core_banking_info) === null || _this$core_banking_in9 === void 0 ? void 0 : _this$core_banking_in9.id_type;
      this.formDataToBeWatched.dad = (_this$core_banking_in0 = this.core_banking_info) === null || _this$core_banking_in0 === void 0 ? void 0 : _this$core_banking_in0.father_name;
      this.formDataToBeWatched.mum = (_this$core_banking_in1 = this.core_banking_info) === null || _this$core_banking_in1 === void 0 ? void 0 : _this$core_banking_in1.mother_name;
      this.formDataToBeWatched.date_delivrance_piece = this.convertDDMMYYYYtoYYYYMMDD((_this$core_banking_in10 = this.core_banking_info) === null || _this$core_banking_in10 === void 0 ? void 0 : _this$core_banking_in10.id_delivery_date);
      this.formDataToBeWatched.date_naissance = this.convertDDMMYYYYtoYYYYMMDD((_this$core_banking_in11 = this.core_banking_info) === null || _this$core_banking_in11 === void 0 ? void 0 : _this$core_banking_in11.birth_date);
      this.formDataToBeWatched.num_piece = (_this$core_banking_in12 = this.core_banking_info) === null || _this$core_banking_in12 === void 0 ? void 0 : _this$core_banking_in12.id_number;
      this.formDataToBeWatched.lieu_delivrance_piece = (_this$core_banking_in13 = this.core_banking_info) === null || _this$core_banking_in13 === void 0 ? void 0 : _this$core_banking_in13.id_delivery_place;
      this.formDataToBeWatched.sexe = this.sexMaping;
      this.formDataToBeWatched.ville_naissance = (_this$core_banking_in14 = this.core_banking_info) === null || _this$core_banking_in14 === void 0 ? void 0 : _this$core_banking_in14.place_of_birth;
      this.formDataToBeWatched.ville_residence = (_this$core_banking_in15 = this.core_banking_info) === null || _this$core_banking_in15 === void 0 || (_this$core_banking_in15 = _this$core_banking_in15.addresses[0]) === null || _this$core_banking_in15 === void 0 ? void 0 : _this$core_banking_in15.address_city;
      this.formDataToBeWatched.adresse = (_this$core_banking_in16 = this.core_banking_info) === null || _this$core_banking_in16 === void 0 ? void 0 : _this$core_banking_in16.address;
      this.formDataToBeWatched.nbre_enfant = (_this$core_banking_in17 = this.core_banking_info) === null || _this$core_banking_in17 === void 0 ? void 0 : _this$core_banking_in17.number_of_chidren;
      this.formDataToBeWatched.matrimoniale = this.situationMapping;
      this.formDataToBeWatched.conjoint.matrimoniale = this.situationMapping;
      this.formDataToBeWatched.nationnalite = this.contryMaping.libelle;
      this.formDataToBeWatched.agence = (_this$core_banking_in18 = this.core_banking_info) === null || _this$core_banking_in18 === void 0 || (_this$core_banking_in18 = _this$core_banking_in18.agence_info) === null || _this$core_banking_in18 === void 0 || (_this$core_banking_in18 = _this$core_banking_in18.agenceOrigination) === null || _this$core_banking_in18 === void 0 ? void 0 : _this$core_banking_in18.agence;
      this.formDataToBeWatched.agence_domiciliation = (_this$core_banking_in19 = this.core_banking_info) === null || _this$core_banking_in19 === void 0 || (_this$core_banking_in19 = _this$core_banking_in19.agence_info) === null || _this$core_banking_in19 === void 0 || (_this$core_banking_in19 = _this$core_banking_in19.agenceDomiciliation) === null || _this$core_banking_in19 === void 0 ? void 0 : _this$core_banking_in19.agence;
      var rel_date = (_this$core_banking_in20 = this.core_banking_info) === null || _this$core_banking_in20 === void 0 || (_this$core_banking_in20 = _this$core_banking_in20.creation_date) === null || _this$core_banking_in20 === void 0 || (_this$core_banking_in20 = _this$core_banking_in20.split(" ")[0]) === null || _this$core_banking_in20 === void 0 ? void 0 : _this$core_banking_in20.split('/');
      if (!['', null, undefined].includes(rel_date)) {
        this.formDataToBeWatched.date_entree_en_relation = rel_date[2] + '-' + rel_date[1] + '-' + rel_date[0];
      }
      var statusObject = {
        email_client: ![null, undefined, ''].includes(this.formDataToBeWatched.email_client),
        date_delivrance_piece: ![null, undefined, ''].includes(this.formDataToBeWatched.date_delivrance_piece),
        dad: ![null, undefined, ''].includes(this.formDataToBeWatched.dad),
        mum: ![null, undefined, ''].includes(this.formDataToBeWatched.mum),
        date_naissance: ![null, undefined, ''].includes(this.formDataToBeWatched.date_naissance),
        telephone: ![null, undefined, ''].includes(this.formDataToBeWatched.telephone),
        type_piece: ![null, undefined, ''].includes(this.formDataToBeWatched.type_piece),
        num_piece: ![null, undefined, ''].includes(this.formDataToBeWatched.num_piece),
        lieu_delivrance_piece: ![null, undefined, ''].includes(this.formDataToBeWatched.lieu_delivrance_piece),
        sexe: ![null, undefined, ''].includes(this.formDataToBeWatched.sexe),
        ville_naissance: ![null, undefined, ''].includes(this.formDataToBeWatched.ville_naissance),
        ville_residence: ![null, undefined, ''].includes(this.formDataToBeWatched.ville_residence),
        adresse: ![null, undefined, ''].includes(this.formDataToBeWatched.adresse),
        nbre_enfant: ![null, undefined, ''].includes(this.formDataToBeWatched.nbre_enfant),
        matrimoniale: ![null, undefined, ''].includes(this.formDataToBeWatched.matrimoniale),
        nationnalite: ![null, undefined, ''].includes(this.formDataToBeWatched.nationnalite),
        date_entree_en_relation: ![null, undefined, ''].includes(this.formDataToBeWatched.date_entree_en_relation),
        compte_numero: ![null, undefined, ''].includes((_this$core_banking_in21 = this.core_banking_info) === null || _this$core_banking_in21 === void 0 || (_this$core_banking_in21 = _this$core_banking_in21.accounts_data) === null || _this$core_banking_in21 === void 0 || (_this$core_banking_in21 = _this$core_banking_in21.comptes_courants) === null || _this$core_banking_in21 === void 0 || (_this$core_banking_in21 = _this$core_banking_in21[0]) === null || _this$core_banking_in21 === void 0 ? void 0 : _this$core_banking_in21.code),
        agence: ![null, undefined, ''].includes(this.formDataToBeWatched.agence),
        agence_domiciliation: ![null, undefined, ''].includes(this.formDataToBeWatched.agence_domiciliation),
        compte_contribuable: ![null, undefined, ''].includes(this.formDataToBeWatched.compte_contribuable)
      };
      this.status_object = statusObject;
      this.comptes = this.tousLesComptes();
      this.handleInput();
    },
    normalizePhoneNumber: function normalizePhoneNumber(rawPhone, country) {
      if (!rawPhone || typeof rawPhone !== 'string') return '';

      // Nettoyer : retirer espaces, tirets, parenthèses, etc.
      var phone = rawPhone.replace(/[\s\-().]/g, '');

      // Liste des indicatifs par pays, avec variantes
      var indicatifs = {
        Cameroun: ['+237', '237', '00237'],
        Mali: ['+223', '223', '00223']
      };
      var longueurs = {
        Cameroun: 9,
        Mali: 8
      };
      var indicatifsPays = indicatifs[country] || [];
      var longueurAttendue = longueurs[country] || 9;
      var _iterator = _createForOfIteratorHelper(indicatifsPays),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var indicatif = _step.value;
          if (phone.startsWith(indicatif)) {
            phone = phone.slice(indicatif.length);
            break;
          }
        }

        // if (phone.length > longueurAttendue) {
        //     phone = phone.slice(-longueurAttendue);
        // }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      var regex = new RegExp("^[0-9]{".concat(longueurAttendue, "}$"));
      var isValid = regex.test(phone);
      return isValid ? phone : '';
    },
    cafData: function cafData(res) {
      var _this$cafInfo$entite, _this$cafInfo;
      this.cafInfo = res.data;
      if (this.formDataToBeWatched.telephone_principal_dirg == undefined || this.formDataToBeWatched.telephone_principal_dirg.length === 0) {
        this.formDataToBeWatched.telephone_principal_dirg = this.cafInfo.phonecode;
      }
      this.formDataToBeWatched.filiale = (_this$cafInfo$entite = (_this$cafInfo = this.cafInfo) === null || _this$cafInfo === void 0 ? void 0 : _this$cafInfo.entite) !== null && _this$cafInfo$entite !== void 0 ? _this$cafInfo$entite : 'AFGB ML';

      // this.formDataToBeWatched.agence = this.cafInfo.agence.replaceAll("_", " ");
      // this.formDataToBeWatched.agence = this.formDataToBeWatched.agence.replace(this.formDataToBeWatched.filiale, "")
      this.formDataToBeWatched.caf = this.cafInfo.nom + " (" + this.cafInfo.codecaf + ")";
      this.formDataToBeWatched.pays = this.list_entites[this.formDataToBeWatched.filiale];
      this.formDataToBeWatched.nom_complet_caf = this.cafInfo.nom;
      this.formDataToBeWatched.email_caf = this.cafInfo.email;
      this.formDataToBeWatched.id_caf = this.cafInfo.id;
    },
    getNationalites: function getNationalites() {
      var _this9 = this;
      _services_credit_service__WEBPACK_IMPORTED_MODULE_2__["default"].loadNationalites().then(function (res) {
        _this9.nationnalites = res.data;
      })["catch"](function (err) {
        console.log(err);
      });
    },
    getCreditBanques: function getCreditBanques() {
      var _this0 = this;
      var cachedCreditTypes = localStorage.getItem('banque_credit_types');
      if (!cachedCreditTypes) {
        _services_credit_service__WEBPACK_IMPORTED_MODULE_2__["default"].loadCreditBanques().then(function (res) {
          _this0.type_credits = res.data;
          localStorage.setItem('banque_credit_types', JSON.stringify(res.data));
        })["catch"](function (err) {
          console.log(err);
        });
      } else {
        var data = JSON.parse(cachedCreditTypes);
        this.type_credits = data;
      }
    },
    loadTbAttrs: function loadTbAttrs() {
      var l = [];
      var topdivel = this.$refs.topdiv;
      var k = document.querySelectorAll(".subdiv" + this.tb_name);
      k.forEach(function (e) {
        l.push(e.innerText);
      });
      var p = {
        name_of_title: topdivel.innerText,
        list_of_content: l,
        id: "dcp-ppo1-head"
      };
      this.$emit("load-buffer", p);
    },
    tableClosedOrOpened: function tableClosedOrOpened() {
      this.seen = this.fetchClosedTables(this.tb_name + this.meta_data["cred_pub_key"]);
    },
    somX3: function somX3(ob, key) {
      var som = 0;
      if (Array.isArray(ob)) {
        ob.forEach(function (elm) {
          var value = elm[key];
          var num = Number(String(value).replace(/\s/g, "")) || 0;
          if (!isNaN(num) && elm.source_remboursement == true) {
            som += num;
          }
        });
      }
      return som;
    },
    convertInt: function convertInt(n) {
      var _n$toString;
      return Number(n === null || n === void 0 || (_n$toString = n.toString()) === null || _n$toString === void 0 ? void 0 : _n$toString.replace(/\s/g, ''));
    }
  }, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_methods, "formDataVars", function formDataVars(event) {
    this.formDataToBeWatched[event[0]] = event[1];
    this.handleInput();
  }), "formDataVars2", function formDataVars2(event, index, objectName, keyName) {
    this[objectName][index][keyName] = event[1];
    if (['mensualite', 'mensualite_conjoint', 'taux', 'montant_pondere', 'montant_pondere_conjoint', 'montant_salaire', 'periodicite', 'montant_conjoint', 'source_remboursement'].includes(keyName) && objectName == 'revenu_domicilie') {
      this.handleInput(true);
    } else {
      this.handleInput();
    }
  }), "handleInput", function handleInput() {
    var _this$revenu_domicili,
      _this1 = this;
    var reset_taux_qc = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    //chanrge account 
    this.formDataToBeWatched.comptes = this.comptes;
    var type_client = this.formDataToBeWatched.type_client;
    var mensualiteSuperieur = 0;
    this.formDataToBeWatched.avoirs_investissements = this.avoirs_investissements;
    if (this.formDataToBeWatched.matrimoniale === 'Marié(e)') {
      this.formDataToBeWatched.conjoint.adresse = this.formDataToBeWatched.adresse;
      this.formDataToBeWatched.conjoint.matrimoniale = 'Marié(e)';
    } else {
      this.formDataToBeWatched.conjoint = {
        nom: "",
        prenoms: "",
        email: "",
        telephone: "",
        type_piece: "",
        num_piece: "",
        sexe: "",
        date_naissance: "",
        ville_naissance: "",
        ville_residence: "",
        nationnalite: "",
        matrimoniale: "",
        habitation: "",
        anciennete_adresse: "",
        nbre_enfant: "",
        adresse: "",
        compte_chez_banque_ci: "",
        autres_comptes: "",
        revenu_domicilie: ""
      };
    }
    if (typeof reset_taux_qc != 'boolean') {
      reset_taux_qc = false;
    }
    (_this$revenu_domicili = this.revenu_domicilie) === null || _this$revenu_domicili === void 0 || _this$revenu_domicili.forEach(function (el) {
      if (el.eligible) {
        var _el$taux, _el$mensualite, _el$mensualite_conjoi, _el$taux_qc2, _el$montant_pondere2, _el$taux_qtc_conjoint, _el$montant_pondere_c;
        var t = (Number(((_el$taux = el.taux) === null || _el$taux === void 0 ? void 0 : _el$taux.toString().replace(/\s/g, "")) || 0) / 100).toFixed(2);
        var periode = 1;
        var periodicite = _this1.periodicites.find(function (p) {
          return p.libelle === el.periodicite;
        });
        if (el.taux_qc2 > 0) {
          mensualiteSuperieur += Number(el.mensualite.toString().replace(/\s/g, "") || 0);
        }
        if (periodicite !== null && periodicite !== void 0 && periodicite.month) {
          periode = periodicite.month;
        }
        if ((periodicite === null || periodicite === void 0 ? void 0 : periodicite.libelle) === "Bimensuelle") {
          var _el$montant_salaire, _el$montant_conjoint;
          el.mensualite = Number(((_el$montant_salaire = el.montant_salaire) === null || _el$montant_salaire === void 0 ? void 0 : _el$montant_salaire.toString().replace(/\s/g, "")) || 0) * periode;
          el.mensualite_conjoint = parseInt(((_el$montant_conjoint = el.montant_conjoint) === null || _el$montant_conjoint === void 0 ? void 0 : _el$montant_conjoint.toString().replace(/\s/g, "")) || 0) * periode;
        } else {
          var _el$montant_salaire2, _el$montant_conjoint2;
          el.mensualite = Number(((_el$montant_salaire2 = el.montant_salaire) === null || _el$montant_salaire2 === void 0 ? void 0 : _el$montant_salaire2.toString().replace(/\s/g, "")) || 0) / periode;
          el.mensualite_conjoint = parseInt(((_el$montant_conjoint2 = el.montant_conjoint) === null || _el$montant_conjoint2 === void 0 ? void 0 : _el$montant_conjoint2.toString().replace(/\s/g, "")) || 0) / periode;
        }
        el.mensualite = parseInt(el.mensualite.toFixed(2)) || 0;
        el.mensualite_conjoint = parseInt(el.mensualite_conjoint.toFixed(2)) || 0;
        el.montant_pondere = Number(((_el$mensualite = el.mensualite) === null || _el$mensualite === void 0 ? void 0 : _el$mensualite.toString().replace(/\s/g, "")) || 0) * t;
        el.montant_pondere_conjoint = Number(((_el$mensualite_conjoi = el.mensualite_conjoint) === null || _el$mensualite_conjoi === void 0 ? void 0 : _el$mensualite_conjoi.toString().replace(/\s/g, "")) || 0) * t;
        if (el.libelle === "Salaire net" && el.source_remboursement === true) {
          var _el$taux_qc, _el$montant_pondere;
          _this1.$set(el, 'taux_qc1', reset_taux_qc ? _this1.determinePourQutotite(el.montant_pondere, type_client) : el.taux_qc1 || 0);
          el.taux_qc1 = reset_taux_qc ? _this1.determinePourQutotite(el.montant_pondere, type_client) : el.taux_qc1 || 0;
          el.taux_qtc_conjoint = reset_taux_qc ? _this1.determinePourQutotite(el.montant_pondere_conjoint, type_client) : el.taux_qtc_conjoint || 0;
          el.taux_qc2 = 33;
          // el.taux_qc2 = reset_taux_qc ? this.determinePourQutotite(el.montant_pondere) : (el.taux_qc2 || 0);

          var t_qc2 = (Number(((_el$taux_qc = el.taux_qc2) === null || _el$taux_qc === void 0 ? void 0 : _el$taux_qc.toString().replace(/\s/g, "")) || 0) / 100).toFixed(2);
          el.montant_qc2 = Number(((_el$montant_pondere = el.montant_pondere) === null || _el$montant_pondere === void 0 ? void 0 : _el$montant_pondere.toString().replace(/\s/g, "")) || 0) * t_qc2;
        } else if (['Prime', 'Revenu locatif'].includes(el.libelle)) {
          el.taux_qc1 = el.taux_qc1 === 0 ? 75 : el.taux_qc1 || 0;
          el.taux_qtc_conjoint = el.taux_qtc_conjoint === 0 ? 75 : el.taux_qtc_conjoint || 0;
        }
        var t_qc1 = (Number(((_el$taux_qc2 = el.taux_qc1) === null || _el$taux_qc2 === void 0 ? void 0 : _el$taux_qc2.toString().replace(/\s/g, "")) || 0) / 100).toFixed(2);
        el.montant_qc1 = Number(((_el$montant_pondere2 = el.montant_pondere) === null || _el$montant_pondere2 === void 0 ? void 0 : _el$montant_pondere2.toString().replace(/\s/g, "")) || 0) * t_qc1;
        var t_qc_conjoint = (Number(((_el$taux_qtc_conjoint = el.taux_qtc_conjoint) === null || _el$taux_qtc_conjoint === void 0 ? void 0 : _el$taux_qtc_conjoint.toString().replace(/\s/g, "")) || 0) / 100).toFixed(2);
        el.montant_qc1_conjoint = Number(((_el$montant_pondere_c = el.montant_pondere_conjoint) === null || _el$montant_pondere_c === void 0 ? void 0 : _el$montant_pondere_c.toString().replace(/\s/g, "")) || 0) * t_qc_conjoint;
        el.montant_pondere = parseInt(el.montant_pondere.toFixed(2)) || 0;
        el.montant_qc1 = parseInt(el.montant_qc1.toFixed(2)) || 0;
        el.montant_qc1_conjoint = parseInt(el.montant_qc1_conjoint.toFixed(2)) || 0;
        el.montant_qc2 = parseInt(el.montant_qc2.toFixed(2)) || 0;
      } else {
        // Ensure montant_qc1_conjoint is reset to 0 if not eligible
        el.montant_qc1_conjoint = 0;
        el.montant_qc1 = 0;
        el.montant_pondere = 0;
        el.montant_pondere_conjoint = 0;
        el.montant_qc2 = 0;
      }
    });
    this.formDataToBeWatched.revenu_domicilie = this.revenu_domicilie;
    this.formDataToBeWatched.status_object = this.status_object;

    // Calculate totals
    this.formDataToBeWatched.revenu_total_colonne_montant_qc1 = this.somX3(this.revenu_domicilie, 'montant_qc1');
    this.formDataToBeWatched.revenu_total_colonne_montant_qc1_conjoint = this.somX3(this.revenu_domicilie, 'montant_qc1_conjoint');
    this.formDataToBeWatched.revenu_total_colonne_montant_qc2 = this.somX3(this.revenu_domicilie, 'montant_qc2');
    this.formDataToBeWatched.revenu_total_colonne_mensualite = this.somX3(this.revenu_domicilie, 'mensualite');
    this.formDataToBeWatched.revenu_total_colonne_mensualite_conjoint = this.somX3(this.revenu_domicilie, 'mensualite_conjoint');
    this.formDataToBeWatched.revenu_total_colonne_montant_pondere = this.somX3(this.revenu_domicilie, 'montant_pondere');
    this.formDataToBeWatched.revenu_total_colonne_montant_pondere_conjoint = this.somX3(this.revenu_domicilie, 'montant_pondere_conjoint');
    this.formDataToBeWatched.revenu_total_colonne_emprunteur = this.somX3(this.revenu_domicilie, 'montant_salaire');
    this.formDataToBeWatched.revenu_total_colonne_conjoint = this.somX3(this.revenu_domicilie, 'montant_conjoint');
    this.formDataToBeWatched.revenu_total = this.formDataToBeWatched.revenu_total_colonne_emprunteur + this.formDataToBeWatched.revenu_total_colonne_conjoint;
    if (this.convertInt(this.formDataToBeWatched.revenu_total_colonne_montant_pondere) > 0) {
      this.formDataToBeWatched.revenu_total_colonne_taux_qc1 = (this.convertInt(this.formDataToBeWatched.revenu_total_colonne_montant_qc1) / this.convertInt(this.formDataToBeWatched.revenu_total_colonne_montant_pondere) * 100).toFixed(2);
      this.formDataToBeWatched.revenu_total_colonne_taux_qc1_conjoint = (this.convertInt(this.formDataToBeWatched.revenu_total_colonne_montant_qc1_conjoint) / this.convertInt(this.formDataToBeWatched.revenu_total_colonne_montant_pondere_conjoint) * 100).toFixed(2);
      // this.formDataToBeWatched.revenu_total_colonne_taux_qc2 = ((this.convertInt(this.formDataToBeWatched.revenu_total_colonne_montant_qc2) / this.convertInt(this.formDataToBeWatched.revenu_total_colonne_montant_pondere)) * 100).toFixed(2);
      this.formDataToBeWatched.revenu_total_colonne_taux_qc2 = (this.convertInt(this.formDataToBeWatched.quotite_cessible_general) / this.convertInt(mensualiteSuperieur) * 100).toFixed(2);
    } else {
      this.formDataToBeWatched.revenu_total_colonne_taux_qc1 = 0;
      this.formDataToBeWatched.revenu_total_colonne_taux_qc1_conjoint = 0;
      this.formDataToBeWatched.revenu_total_colonne_taux_qc2 = 0;
    }
    this.revenu_domicilie.forEach(function (element) {
      var _element$montant_sala, _element$montant_conj;
      var total = Number((element === null || element === void 0 || (_element$montant_sala = element.montant_salaire) === null || _element$montant_sala === void 0 ? void 0 : _element$montant_sala.toString().replace(/\s/g, "")) || 0) + Number((element === null || element === void 0 || (_element$montant_conj = element.montant_conjoint) === null || _element$montant_conj === void 0 ? void 0 : _element$montant_conj.toString().replace(/\s/g, "")) || 0);
      element.total_ligne = total;
    });
    this.formDataToBeWatched.pourcentage_quotite = Number(this.formDataToBeWatched.revenu_total_colonne_taux_qc1) || 0;
    this.formDataToBeWatched.pourcentage_quotite_conjoint = Number(this.formDataToBeWatched.revenu_total_colonne_taux_qc1_conjoint) || 0;
    this.formDataToBeWatched.quotite_cessible = Number(this.formDataToBeWatched.revenu_total_colonne_montant_qc1) || 0;
    this.formDataToBeWatched.quotite_cessible_general = Number(this.formDataToBeWatched.revenu_total_colonne_montant_qc2) || 0;
    this.formDataToBeWatched.pourcentage_quotite_general = Number(this.formDataToBeWatched.revenu_total_colonne_taux_qc2) || 0;
    this.emitData();
    this.emitData2();
    this.emitEventForTbRevenuDimocile();
  }), "handlePersonnesContaters", function handlePersonnesContaters() {
    this.formDataToBeWatched["reference_familiales_personne_contacters"] = this.reference_familiales_personne_contacters;
  }), "updateNumber", function updateNumber(event, index, obj) {
    this.$set(this[obj][index], "contact", event);
    this.handlePersonnesContaters();
  }), "retract", function retract() {
    this.seen = !this.seen;
    var a = {
      tb_name: this.tb_name + this.meta_data["cred_pub_key"],
      status: this.seen
    };
    EventBus.$emit("savedclosed-table", a);
  }), "openNotesModal", function openNotesModal() {
    var listing = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    this.listingNote = listing;
    this.$modal.show(this.tb_name);
  }), "send2Backend", function send2Backend(res, newVal, oldVal) {
    this.authcheck = true;
    this.authcheckUsr = res.data;
    this.authcheckStatus = res.status;
    if (this.authcheckStatus === 401) {
      // // window.location.href = "/login";
    }
    if (this.authcheck === true) {
      this.$emit("autosaving");
      this.$axios.post(this.ebapisHost + "creditbuilder/api/v1/autosaving/", {
        user: this.authcheckUsr,
        meta_parseable: this.meta_parseable,
        filledData: this.formDataToBeWatched
      }).then(function (response) {
        this.$emit("autosaving");
        // this.$Progress.finish();
        var tbFetcheData = response.data;
        if (tbFetcheData["is_success"] === true) {
          this.$emit("load-shell");
        }
      }.bind(this))["catch"](function (error) {
        this.$Progress.finish();
        console.log(error);
      }.bind(this));
    } else {
      alert("Unauthenticated");
    }
  }), "loadWithError", function loadWithError(err) {
    //// window.location.href = "/login";
  }), "launchAutoSaver", function launchAutoSaver() {
    var _this10 = this;
    _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["default"].loadUserData().then(function (res) {
      _this10.send2Backend(res, 0, 0);
    })["catch"](function (err) {
      _this10.loadWithError(err);
    });
  }), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_methods, "setTbVal", function setTbVal(val) {
    this.cred_pub_key = val;
  }), "changeStatutEntreprise", function changeStatutEntreprise(value) {
    var _this11 = this;
    var statut_entreprise = value === null || value === void 0 ? void 0 : value.toLowerCase();
    if (this.$el.querySelector('#statut_client')) {
      this.$el.querySelector('#statut_client').querySelectorAll('option').forEach(function (el) {
        if (el.textContent == "Salarié d'entreprise " + statut_entreprise) {
          _this11.formDataToBeWatched.statut_client = el.textContent;
        }
      });
      this.handleInput();
    }
  }), "loadRetrieved", function loadRetrieved() {
    var _this$meta_data2;
    var lentb = this.meta_data["dossier_credit"]["tbs_in_use"];
    var createdKey = this.tb_name;
    var createdKeyArr = createdKey.split("tb");
    createdKey = "cred_pub_tb_" + createdKeyArr[1];

    // if (this.meta_data["dossier_credit"][createdKey] == undefined) {
    //     if (this.meta_data["dossier_credit"]["client_core_banking"] != undefined) {
    //         let client_core_banking = this.meta_data["dossier_credit"]["client_core_banking"];
    //         let compte_numero = client_core_banking?.accounts_data?.comptes_courants[0]?.code;
    //         if (compte_numero != undefined) {
    //             this.formDataToBeWatched.compte_numero = compte_numero;
    //         }
    //     }
    // }

    if ((_this$meta_data2 = this.meta_data) !== null && _this$meta_data2 !== void 0 && (_this$meta_data2 = _this$meta_data2.dossier_credit) !== null && _this$meta_data2 !== void 0 && _this$meta_data2.client_core_banking) {
      var _comptes$find, _comptesCourants$;
      var accounts_data = this.meta_data.dossier_credit.client_core_banking.accounts_data;
      var comptesCourants = (accounts_data === null || accounts_data === void 0 ? void 0 : accounts_data.comptes_courants) || [];
      var autresComptes = (accounts_data === null || accounts_data === void 0 ? void 0 : accounts_data.autres) || [];

      // Fusionner les comptes
      var comptes = [].concat(_toConsumableArray(comptesCourants), _toConsumableArray(autresComptes));

      // Récupérer le compte courant prioritaire (sinon premier compte courant dispo)
      var compte_numero = ((_comptes$find = comptes.find(function (c) {
        return c.is_compte_courrant;
      })) === null || _comptes$find === void 0 ? void 0 : _comptes$find.code) || ((_comptesCourants$ = comptesCourants[0]) === null || _comptesCourants$ === void 0 ? void 0 : _comptesCourants$.code) || "";
      this.comptesCoreBankings = comptes;
      if (compte_numero) {
        if (this.meta_data["dossier_credit"][createdKey] == undefined) {
          this.formDataToBeWatched.compte_numero = compte_numero;
          if (!this.formDataToBeWatched.compte_numero) {
            this.$toasted.error("Attention, ce client ne dispose pas de compte courant.", {
              duration: 15000000,
              position: "top-center"
            });
          }
        }
      }
    }
    if (lentb.length > 0) {
      var _this$meta_data$dossi4;
      if (this.meta_data["dossier_credit"][createdKey] != undefined) {
        var _this$meta_data$dossi;
        this.formDataToBeWatched = this.meta_data["dossier_credit"][createdKey];
        if (this.meta_data["dossier_credit"][createdKey]["revenu_domicilie"] != "") {
          this.revenu_domicilie = this.meta_data["dossier_credit"][createdKey]["revenu_domicilie"];
        }
        if (this.meta_data["dossier_credit"][createdKey]["comptes"] != "") {
          this.comptes = this.meta_data["dossier_credit"][createdKey]["comptes"];
        }
        if (this.formDataToBeWatched["fonction"] != "" && this.formDataToBeWatched["fonction"]) {
          this.fonction = this.formDataToBeWatched["fonction"];
        }
        if (this.meta_data["dossier_credit"][createdKey]["reference_familiales_personne_contacters"] != "") {
          this.reference_familiales_personne_contacters = this.meta_data["dossier_credit"][createdKey]["reference_familiales_personne_contacters"];
        }
        this.status_object = this.meta_data["dossier_credit"][createdKey]["status_object"];

        // CHECK WHETHER IT IS FIRST TIME
        if (((_this$meta_data$dossi = this.meta_data['dossier_credit'][createdKey]) === null || _this$meta_data$dossi === void 0 ? void 0 : _this$meta_data$dossi.is_first_time) === false) {
          this.setAllDefaultFields(createdKey);
        } else {
          var _this$meta_data$dossi2;
          if (((_this$meta_data$dossi2 = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi2 === void 0 ? void 0 : _this$meta_data$dossi2.caf_recorded_file) !== undefined) {
            this.setAllDefaultFieldsRecByCaf();
          }
        }
      } else {
        var _this$meta_data$dossi3;
        if (((_this$meta_data$dossi3 = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi3 === void 0 ? void 0 : _this$meta_data$dossi3.caf_recorded_file) != undefined) {
          this.setAllDefaultFieldsRecByCaf();
        }
      }

      // SET FIRST TIME TO FALSE
      this.formDataToBeWatched.is_first_time = false;
      this.formDataToBeWatched.carcasse_type = (_this$meta_data$dossi4 = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi4 === void 0 ? void 0 : _this$meta_data$dossi4.applied_templ_name;
    } else {
      var _this$meta_data$dossi5;
      if (((_this$meta_data$dossi5 = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi5 === void 0 ? void 0 : _this$meta_data$dossi5.caf_recorded_file) !== undefined) {
        this.setAllDefaultFieldsRecByCaf();
        var caf_recorded_file = this.meta_data["dossier_credit"]["caf_recorded_file"];
        this.formDataToBeWatched.montant_sollicite = caf_recorded_file === null || caf_recorded_file === void 0 ? void 0 : caf_recorded_file.montant;
        this.formDataToBeWatched.montant_credit = caf_recorded_file === null || caf_recorded_file === void 0 ? void 0 : caf_recorded_file.montant;
      }

      // SET FIRST TIME TO FALSE
      this.formDataToBeWatched.is_first_time = false;
    }
    if (this.meta_data["dossier_credit"]["convention_entreprise"] != undefined) {
      var convention_entreprise = this.meta_data["dossier_credit"]["convention_entreprise"];
      if ((convention_entreprise === null || convention_entreprise === void 0 ? void 0 : convention_entreprise.ent_pub_key) != undefined) {
        var _convention_entrepris, _convention_entrepris2, _this$meta_data$dossi6, _this$meta_data$dossi7;
        this.entreprise = convention_entreprise === null || convention_entreprise === void 0 || (_convention_entrepris = convention_entreprise.info_entreprise) === null || _convention_entrepris === void 0 ? void 0 : _convention_entrepris.denomination;
        this.formDataToBeWatched.entreprise = convention_entreprise === null || convention_entreprise === void 0 || (_convention_entrepris2 = convention_entreprise.info_entreprise) === null || _convention_entrepris2 === void 0 ? void 0 : _convention_entrepris2.denomination;
        this.formDataToBeWatched.statut_entreprise = "".concat(((_this$meta_data$dossi6 = this.meta_data.dossier_credit) === null || _this$meta_data$dossi6 === void 0 || (_this$meta_data$dossi6 = _this$meta_data$dossi6.convention_entreprise) === null || _this$meta_data$dossi6 === void 0 || (_this$meta_data$dossi6 = _this$meta_data$dossi6.tiering) === null || _this$meta_data$dossi6 === void 0 || (_this$meta_data$dossi6 = _this$meta_data$dossi6.toString()) === null || _this$meta_data$dossi6 === void 0 ? void 0 : _this$meta_data$dossi6.replace('_', ' ')) || '', " - ").concat(((_this$meta_data$dossi7 = this.meta_data.dossier_credit) === null || _this$meta_data$dossi7 === void 0 || (_this$meta_data$dossi7 = _this$meta_data$dossi7.convention_entreprise) === null || _this$meta_data$dossi7 === void 0 || (_this$meta_data$dossi7 = _this$meta_data$dossi7.type_entreprise) === null || _this$meta_data$dossi7 === void 0 ? void 0 : _this$meta_data$dossi7[0]) || '');
        if (convention_entreprise.ent_pub_key == 'autre') {
          this.entreprise = "Autre";
          this.formDataToBeWatched.statut_entreprise = "Non listée";
        }
        this.changeStatutEntreprise(this.formDataToBeWatched.statut_entreprise);
      }
    }
  }), "setAllDefaultFieldsRecByCaf", function setAllDefaultFieldsRecByCaf() {
    var _this12 = this;
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
      var _this12$meta_data$dos, _this12$meta_data$dos2, _this12$meta_data$dos3, _this12$meta_data$dos4, _this12$meta_data$dos5, _this12$meta_data$dos6, _this12$meta_data$dos7, _this12$meta_data$dos8, _this12$meta_data$dos9;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            if (!(_this12.formDataToBeWatched.is_first_time == false)) {
              _context3.next = 2;
              break;
            }
            return _context3.abrupt("return");
          case 2:
            setTimeout(function () {
              return _this12.matchingCoreBanking();
            }, 1000);
            _this12.formDataToBeWatched.denomination_client = ((_this12$meta_data$dos = _this12.meta_data['dossier_credit']) === null || _this12$meta_data$dos === void 0 || (_this12$meta_data$dos = _this12$meta_data$dos.caf_recorded_file) === null || _this12$meta_data$dos === void 0 || (_this12$meta_data$dos = _this12$meta_data$dos.client) === null || _this12$meta_data$dos === void 0 ? void 0 : _this12$meta_data$dos.nomcli) + ' ' + ((_this12$meta_data$dos2 = _this12.meta_data['dossier_credit']) === null || _this12$meta_data$dos2 === void 0 || (_this12$meta_data$dos2 = _this12$meta_data$dos2.caf_recorded_file) === null || _this12$meta_data$dos2 === void 0 || (_this12$meta_data$dos2 = _this12$meta_data$dos2.client) === null || _this12$meta_data$dos2 === void 0 ? void 0 : _this12$meta_data$dos2.prenomcli);
            _this12.formDataToBeWatched.type_demande = (_this12$meta_data$dos3 = _this12.meta_data['dossier_credit']) === null || _this12$meta_data$dos3 === void 0 || (_this12$meta_data$dos3 = _this12$meta_data$dos3.caf_recorded_file) === null || _this12$meta_data$dos3 === void 0 ? void 0 : _this12$meta_data$dos3.type_demande;
            _this12.formDataToBeWatched.type_credit = (_this12$meta_data$dos4 = _this12.meta_data['dossier_credit']) === null || _this12$meta_data$dos4 === void 0 || (_this12$meta_data$dos4 = _this12$meta_data$dos4.caf_recorded_file) === null || _this12$meta_data$dos4 === void 0 ? void 0 : _this12$meta_data$dos4.type_credit;
            _this12.formDataToBeWatched.contact_client = (_this12$meta_data$dos5 = _this12.meta_data['dossier_credit']) === null || _this12$meta_data$dos5 === void 0 || (_this12$meta_data$dos5 = _this12$meta_data$dos5.caf_recorded_file) === null || _this12$meta_data$dos5 === void 0 ? void 0 : _this12$meta_data$dos5.phone;
            _this12.formDataToBeWatched.email_client = (_this12$meta_data$dos6 = _this12.meta_data['dossier_credit']) === null || _this12$meta_data$dos6 === void 0 || (_this12$meta_data$dos6 = _this12$meta_data$dos6.caf_recorded_file) === null || _this12$meta_data$dos6 === void 0 ? void 0 : _this12$meta_data$dos6.email;
            _this12.formDataToBeWatched.nom = (_this12$meta_data$dos7 = _this12.meta_data['dossier_credit']) === null || _this12$meta_data$dos7 === void 0 || (_this12$meta_data$dos7 = _this12$meta_data$dos7.caf_recorded_file) === null || _this12$meta_data$dos7 === void 0 ? void 0 : _this12$meta_data$dos7.client.nomcli;
            _this12.formDataToBeWatched.prenoms = (_this12$meta_data$dos8 = _this12.meta_data['dossier_credit']) === null || _this12$meta_data$dos8 === void 0 || (_this12$meta_data$dos8 = _this12$meta_data$dos8.caf_recorded_file) === null || _this12$meta_data$dos8 === void 0 ? void 0 : _this12$meta_data$dos8.client.prenomcli;
            _this12.formDataToBeWatched.indice = (_this12$meta_data$dos9 = _this12.meta_data['dossier_credit']) === null || _this12$meta_data$dos9 === void 0 || (_this12$meta_data$dos9 = _this12$meta_data$dos9.caf_recorded_file) === null || _this12$meta_data$dos9 === void 0 ? void 0 : _this12$meta_data$dos9.client.matcli;
            _this12.formDataToBeWatched.is_first_time = true;
          case 12:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    }))();
  }), "setAllDefaultFields", function setAllDefaultFields(createdKey) {
    var _this$meta_data$dossi8;
    this.formDataToBeWatched = this.meta_data['dossier_credit'][createdKey];
    if (((_this$meta_data$dossi8 = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi8 === void 0 ? void 0 : _this$meta_data$dossi8.caf_recorded_file) !== undefined) {
      this.setAllDefaultFieldsRecByCaf();
    }
  }), "defaultRetract", function defaultRetract(rc, ra) {
    if (ra != null) {
      this.seen = rc;
      var a = {
        tb_name: this.tb_name + this.meta_data["cred_pub_key"],
        status: this.seen
      };
      EventBus.$emit("savedclosed-table", a);
    }
  }), "checkValueNbreEnfant", function checkValueNbreEnfant() {
    this.formDataToBeWatched.nbre_enfant = Number(this.formDataToBeWatched.nbre_enfant.toString().replace(/\s/g, ''));
    if (this.formDataToBeWatched.nbre_enfant > 20) {
      this.formDataToBeWatched.nbre_enfant = '20';
    } else if (this.formDataToBeWatched.nbre_enfant < 0 && this.formDataToBeWatched.nbre_enfant == '00') {
      this.formDataToBeWatched.nbre_enfant = '0';
    }
  }), "emitData", function emitData() {
    EventBus.$emit("cred_pub_tb_10002-updated", {
      // engagements_en_cours: this.engagements_en_cours,
      // engagements_en_cours_conjoints: this.engagements_en_cours_conjoints,
      matrimoniale: this.formDataToBeWatched.matrimoniale,
      habitation: this.formDataToBeWatched.habitation,
      revenu_domicilie: this.revenu_domicilie,
      date_entree_en_relation: this.formDataToBeWatched.date_entree_en_relation,
      nom: this.formDataToBeWatched.nom,
      prenoms: this.formDataToBeWatched.prenoms,
      date_naissance: this.formDataToBeWatched.date_naissance,
      revenu_total_colonne_montant_pondere: this.formDataToBeWatched.revenu_total_colonne_montant_pondere,
      revenu_total_colonne_montant_qc1: this.formDataToBeWatched.revenu_total_colonne_montant_qc1,
      revenu_total_colonne_montant_qc2: this.formDataToBeWatched.revenu_total_colonne_montant_qc2,
      revenu_total_colonne_montant_qc1_conjoint: this.formDataToBeWatched.revenu_total_colonne_montant_qc1_conjoint,
      revenu_total_colonne_taux_qc1_conjoint: this.formDataToBeWatched.revenu_total_colonne_taux_qc1_conjoint
    });
  }), "emitData2", function emitData2() {
    EventBus.$emit("dossier-updated-dcpp-1", {
      data_tb2: this.formDataToBeWatched
    });
  }), "changeEligibleValue", function changeEligibleValue(event, index) {
    // setTimeout(() => {
    //     if (this.revenu_domicilie[index]['eligible'] === false) {
    //         this.revenu_domicilie[index]['taux'] = 0;
    //         this.revenu_domicilie[index]['montant_pondere'] = 0;
    //         this.revenu_domicilie[index]['montant_pondere_conjoint'] = 0;
    //         this.revenu_domicilie[index]['taux_qc1'] = 0;
    //         this.revenu_domicilie[index]['taux_qtc_conjoint'] = 0;
    //         this.revenu_domicilie[index]['montant_qc1'] = 0;
    //         this.revenu_domicilie[index]['montant_qc1_conjoint'] = 0;
    //         this.revenu_domicilie[index]['taux_qc2'] = 0;
    //         this.revenu_domicilie[index]['montant_qc2'] = 0;
    //         this.revenu_domicilie[index]['source_remboursement'] = false;
    //         this.revenu_domicilie[index]['periodicite'] = "";
    //         this.revenu_domicilie[index]['mensualite'] = 0;
    //         this.revenu_domicilie[index]['commentaire'] = "";
    //     } else {
    //         if (this.revenu_domicilie[index]['libelle'] === 'Salaire net') {
    //             this.revenu_domicilie[index]['taux'] = 100;
    //         }
    //         if (['Revenu locatif', 'Prime'].includes(this.revenu_domicilie[index]['libelle'])) {
    //             this.revenu_domicilie[index]['taux'] = 75;
    //             this.revenu_domicilie[index]['taux_qc1'] = 75;
    //             this.revenu_domicilie[index]['taux_qtc_conjoint'] = 75;
    //         }
    //     }
    //     this.handleInput();
    // }, 500);
  }), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_methods, "changeEligibleValueSR", function changeEligibleValueSR(event, index) {
    var _this13 = this;
    setTimeout(function () {
      if (_this13.revenu_domicilie[index]['source_remboursement'] === false) {
        _this13.revenu_domicilie[index]['taux'] = 0;
        _this13.revenu_domicilie[index]['montant_pondere'] = 0;
        _this13.revenu_domicilie[index]['montant_pondere_conjoint'] = 0;
        _this13.revenu_domicilie[index]['taux_qc1'] = 0;
        _this13.revenu_domicilie[index]['taux_qtc_conjoint'] = 0;
        _this13.revenu_domicilie[index]['montant_qc1'] = 0;
        _this13.revenu_domicilie[index]['montant_qc1_conjoint'] = 0;
        _this13.revenu_domicilie[index]['taux_qc2'] = 0;
        _this13.revenu_domicilie[index]['montant_qc2'] = 0;
        _this13.revenu_domicilie[index]['eligible'] = false;
        _this13.revenu_domicilie[index]['periodicite'] = "";
        _this13.revenu_domicilie[index]['mensualite'] = 0;
        _this13.revenu_domicilie[index]['commentaire'] = "";
        _this13.revenu_domicilie[index]['taux_qc2'] = "";
      } else {
        if (_this13.revenu_domicilie[index]['libelle'] === 'Salaire net') {
          _this13.revenu_domicilie[index]['taux'] = 100;
        }
        if (['Revenu locatif', 'Prime'].includes(_this13.revenu_domicilie[index]['libelle'])) {
          _this13.revenu_domicilie[index]['taux'] = 75;
          _this13.revenu_domicilie[index]['taux_qc1'] = 75;
          _this13.revenu_domicilie[index]['taux_qtc_conjoint'] = 75;
        }
      }
      _this13.handleInput();
    }, 500);
  }), "resetValues", function resetValues(event, index, objectName) {
    if (objectName === 'revenu_domicilie') {
      this[objectName][index].montant_salaire = "";
      this[objectName][index].montant_conjoint = "";
      this[objectName][index].eligible = false;
      this[objectName][index].source_remboursement = false;
      this[objectName][index].periodicite = "";
      this[objectName][index].mensualite = 0;
      this[objectName][index].taux = 0;
      this[objectName][index].montant_pondere = 0;
      this[objectName][index].taux_qc1 = 0;
      this[objectName][index].taux_qtc_conjoint = 0;
      this[objectName][index].montant_qc1 = 0;
      this[objectName][index].montant_qc1_conjoint = 0;
      this[objectName][index].taux_qc2 = 0;
      this[objectName][index].montant_qc2 = 0;
      this[objectName][index].commentaire = "";
      if (this[objectName][index].libelle === 'Salaire net') {
        this[objectName][index].eligible = true;
        this[objectName][index].source_remboursement = true;
        this[objectName][index].taux = 100;
        this[objectName][index].montant_pondere = 0;
      }
    }
    this.handleInput();
  }), "determinePourQutotite", function determinePourQutotite(value) {
    var _this14 = this;
    var type_client = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var taux = 0;
    // console.log("DATA",this.pourcentages_quotites);
    if (this.pourcentages_quotites.length == 0) {
      setTimeout(function () {
        _this14.handleInput();
      }, 1500);
    } else {
      this.pourcentages_quotites.forEach(function (element) {
        if (element.entity == 'AFG' && element.type_client == type_client) {
          var min = Number(element.min);
          var max = Number(element.max);
          if (max != 0) {
            if (min <= value && max > value) {
              taux = element.pourcentage;
            }
          } else {
            if (value >= min) {
              taux = element.pourcentage;
            }
          }
        }
      });
    }
    return taux;
  }), "addMoreRevenu", function addMoreRevenu() {
    this.revenu_domicilie.push({
      libelle: "",
      checked: true,
      montant_salaire: "",
      montant_conjoint: "",
      total_ligne: "",
      eligible: false,
      source_remboursement: false,
      periodicite: "",
      mensualite: 0
      // montant_pondere_conjoint: 0,
      // taux: 0,
      // montant_pondere: 0,
      // taux_qc1: 0,
      // taux_qtc_conjoint: 0,
      // montant_qc1: 0,
      // montant_qc1_conjoint: 0,
      // taux_qc2: 0,
      // montant_qc2: 0,
      // commentaire: "",
    });
    this.handleInput();
  }), "addMoreCompte", function addMoreCompte() {
    this.comptes.push({
      banque: "AFG BANK",
      libelle: "",
      autre_libelle: "",
      numero_compte: "",
      montant: "",
      date_extration_releve: "",
      date_ouverture_compte: "",
      montant_epargne: "",
      duree: "",
      account_open_date: "",
      is_locale: true
    });
    this.handleInput();
    this.$forceUpdate();
  }), "removeRevenu", function removeRevenu(index) {
    this.revenu_domicilie.splice(index, 1);
    this.handleInput();
  }), "removeCompte", function removeCompte(objectName, index) {
    this[objectName].splice(index, 1);
    this.handleInput();
  }), "loadPourQuotiteData", function loadPourQuotiteData() {
    var _this15 = this;
    _services_credit_service__WEBPACK_IMPORTED_MODULE_2__["default"].loadPourQuotiteData().then(function (res) {
      _this15.pourcentages_quotites = res.data;
    })["catch"](function (err) {
      console.log(err);
    });
  }), "scoringData", function scoringData(res) {
    var _this16 = this;
    var criteres = res.data.data.criteres;
    criteres.forEach(function (element) {
      if (element.type == 'ppo' || element.type == null) {
        if (element.slug == 'garanties') {
          _this16.data_garanties = element.elements;
        }
      }
    });
  }), "loadScoringData", function loadScoringData() {
    var _this17 = this;
    var cachedScoringCritere = localStorage.getItem('scoring_criteres');
    if (!cachedScoringCritere) {
      _services_credit_service__WEBPACK_IMPORTED_MODULE_2__["default"].loadScoringData().then(function (res) {
        _this17.scoringData(res);
        localStorage.setItem('scoring_criteres', JSON.stringify(res));
      })["catch"](function (err) {
        console.log(err);
      });
    } else {
      var data = JSON.parse(cachedScoringCritere);
      this.scoringData(data);
    }
  }), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_methods, "handleDateInput", function handleDateInput(event) {
    var _this$meta_data3;
    this.formDataToBeWatched[event[0]] = event[1];
    var d2 = new Date((_this$meta_data3 = this.meta_data) === null || _this$meta_data3 === void 0 || (_this$meta_data3 = _this$meta_data3.dossier_credit) === null || _this$meta_data3 === void 0 ? void 0 : _this$meta_data3.created_at);
    var DateRelation = new Date(this.formDataToBeWatched.date_entree_en_relation);
    if (DateRelation > d2) {
      this.formDataToBeWatched.date_entree_en_relation = '';
      this.$toasted.show("La date d'entrée en relation doit être anterieur à la date de création du dossier");
    } else {
      this.handleInput();
    }
  }), "emitEventForTbRevenuDimocile", function emitEventForTbRevenuDimocile() {
    EventBus.$emit("dossier-updated-dcpp-pcp1-0", {
      data_tb1: this.formDataToBeWatched
    });
  }), "formuleQD", function formuleQD(mt) {
    mt = isNaN(mt) ? 0 : mt;
    return 'Formule de calcul: Quotité disponible = Quotité cessible (' + this.formatAmount(mt) + ') - Mensualités totales (' + this.formatAmount(this.echeance_total) + ')';
  }), "formatAmount", function formatAmount(x) {
    return x === null || x === void 0 ? void 0 : x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }), "addMoreAssurance", function addMoreAssurance() {
    this.bref_produit_assurance.push({
      "id": this.bref_produit_assurance.length + 1,
      "assurance": null,
      "commentaire": ""
    });
    this.formDataToBeWatched.bref_produit_assurance = this.bref_produit_assurance;
  }), "removeAssurance", function removeAssurance(index) {
    this.bref_produit_assurance.splice(index, 1);
    this.formDataToBeWatched.bref_produit_assurance = this.bref_produit_assurance;
  }), "getRows", function getRows(el) {
    if (!el || !el.commentaire) {
      return 1; // Ligne par défaut
    }
    var text = el.commentaire;
    var charactersPerLine = 25; // Estimation des caractères par ligne

    // Compter les retours à la ligne explicites
    var explicitLines = (text.match(/\n/g) || []).length + 1;

    // Estimer les lignes dues au wrapping automatique
    var estimatedLines = Math.ceil(text.length / charactersPerLine);

    // Prendre le maximum entre les deux
    var calculatedRows = Math.max(explicitLines, estimatedLines);

    // Respecter la limite maximale
    return Math.min(calculatedRows, this.max_rows);
  }), "addMoreProduct", function addMoreProduct() {
    var _this$bref_produit_ev;
    // if (this.bref_produit_eventuellement_souscrits.length == 1) return is.$toasted.show("Vous devez renseigner au moins un produit avant de pouvoir ajouter un autre")
    var nb = (_this$bref_produit_ev = this.bref_produit_eventuellement_souscrits) === null || _this$bref_produit_ev === void 0 ? void 0 : _this$bref_produit_ev.length;
    this.bref_produit_eventuellement_souscrits.push({
      "id": nb + 1,
      "libelle": "",
      "checked": true,
      "commentaire": ""
    });
    this.handleInput();
  }), "removeProduct", function removeProduct(index) {
    this.bref_produit_eventuellement_souscrits.splice(index, 1);
    this.handleInput();
  }), "formDataVarsProduit", function formDataVarsProduit(event, index, key) {
    if (!this[key] || !this[key][index]) {
      console.error("Invalid key or index: ".concat(key, "[").concat(index, "]"));
      return;
    }
    var field, value;
    if (Array.isArray(event)) {
      field = event[0];
      value = event[1];
    } else {
      field = event.target.id;
      value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
    }
    this[key][index][field] = value;
    this.formDataToBeWatched[key] = this[key];
    this.emitData2();
  }), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_methods, "changeAssurance", function changeAssurance() {
    this.formDataToBeWatched.assurance_souscrit = this.assurance_souscrit;
    if (this.assurance_souscrit == "Autre") {
      this.formDataToBeWatched.assurance_souscrit_autre = "";
    }
    this.show_input = false;
  }), "changeAutreAssurance", function changeAutreAssurance(event) {
    if (this.assurance_souscrit_autre == "Autre") {
      this.formDataToBeWatched.assurance_souscrit_autre = "";
      this.show_input = true;
    }
    this.formDataToBeWatched.assurance_souscrit_autre = this.assurance_souscrit_autre;
  }), "changeAutreAssuranceInput", function changeAutreAssuranceInput() {
    this.formDataToBeWatched.assurance_souscrit_autre = this.assurance_souscrit_autre_input;
  }), "addMore", function addMore() {
    this.reference_familiales_personne_contacters.push({
      nom: "",
      contact: "",
      email: "",
      adresse: "",
      lien_parente: "",
      commentaire: ""
    });
  }), "remove", function remove(index) {
    this.reference_familiales_personne_contacters.splice(index, 1);
  })),
  watch: {
    formDataToBeWatched: {
      handler: function handler(newVal, oldVal) {
        this.autosaving(newVal, oldVal);
      },
      deep: true,
      immediate: true
    },
    authcheckUsr: {
      handler: function handler(newVal, oldVal) {
        // Mettre à jour l'indicatif lorsque authcheckUsr change
        this.updateIndicatif();
      },
      deep: true,
      // Permet de surveiller les changements profonds dans l'objet
      immediate: true // Exécute le watcher immédiatement après sa création
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/MothAndYearInput.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/MothAndYearInput.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "MothAndYearInput",
  props: {
    id: String,
    value: {
      type: String,
      "default": ""
    },
    readonly: Boolean,
    viewonly: Boolean,
    defaultTyping: {
      type: Boolean,
      "default": true
    },
    background: {
      type: String,
      "default": ""
    },
    color: {
      type: String,
      "default": ""
    },
    classname: {
      type: String,
      "default": ""
    }
  },
  data: function data() {
    return {
      month: "",
      year: "",
      date: "",
      readonly_: false,
      months: [{
        intitule: "Janvier",
        value: "01"
      }, {
        intitule: "Février",
        value: "02"
      }, {
        intitule: "Mars",
        value: "03"
      }, {
        intitule: "Avril",
        value: "04"
      }, {
        intitule: "Mai",
        value: "05"
      }, {
        intitule: "Juin",
        value: "06"
      }, {
        intitule: "Juillet",
        value: "07"
      }, {
        intitule: "Août",
        value: "08"
      }, {
        intitule: "Septembre",
        value: "09"
      }, {
        intitule: "Octobre",
        value: "10"
      }, {
        intitule: "Novembre",
        value: "11"
      }, {
        intitule: "Décembre",
        value: "12"
      }]
    };
  },
  mounted: function mounted() {
    this.readonly_ = this.viewonly || this.readonly;
    if (this.value) {
      this.defaultValue(this.value);
    }
  },
  methods: {
    handleInput: function handleInput() {
      if (this.month && this.year && /^\d{4}$/.test(this.year)) {
        this.date = "".concat(this.year, "-").concat(this.month);
      } else {
        this.date = "";
      }
      this.emitValue();
    },
    emitValue: function emitValue() {
      this.$emit("input", this.date);
      this.$emit("change", this.date);
    },
    defaultValue: function defaultValue(val) {
      if (!val || typeof val !== "string") {
        this.month = "";
        this.year = "";
        this.date = "";
        return;
      }
      var split = val.split("-");
      if (split.length === 2 && /^\d{4}$/.test(split[0]) && /^\d{2}$/.test(split[1])) {
        // Format attendu : "2040-05"
        this.year = split[0];
        this.month = split[1];
        this.date = val;
      } else {
        this.month = "";
        this.year = "";
        this.date = "";
      }
    }
  },
  watch: {
    value: function value(newVal) {
      if (newVal !== this.date) {
        this.defaultValue(newVal);
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/PhoneInput.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/PhoneInput.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    isDisabled: Boolean,
    indicatif: String,
    number: String
  },
  data: function data() {
    return {
      query: this.indicatif || '+',
      indicatifData: this.indicatif || '+',
      numberData: this.number || '',
      phoneNumber: '',
      opened: false,
      stayOpened: false,
      filteredItems: [],
      items: [{
        flag: "",
        indicatif: "+93"
      },
      // Afghanistan
      {
        flag: "",
        indicatif: "+27"
      },
      // South Africa
      {
        flag: "",
        indicatif: "+355"
      },
      // Albania
      {
        flag: "",
        indicatif: "+213"
      },
      // Algeria
      {
        flag: "",
        indicatif: "+49"
      },
      // Germany
      {
        flag: "",
        indicatif: "+376"
      },
      // Andorra
      {
        flag: "",
        indicatif: "+244"
      },
      // Angola
      {
        flag: "",
        indicatif: "+1264"
      },
      // Anguilla
      {
        flag: "",
        indicatif: "+1268"
      },
      // Antigua and Barbuda
      {
        flag: "",
        indicatif: "+966"
      },
      // Saudi Arabia
      {
        flag: "",
        indicatif: "+54"
      },
      // Argentina
      {
        flag: "",
        indicatif: "+374"
      },
      // Armenia
      {
        flag: "",
        indicatif: "+297"
      },
      // Aruba
      {
        flag: "",
        indicatif: "+247"
      },
      // Ascension Island
      {
        flag: "",
        indicatif: "+61"
      },
      // Australia
      {
        flag: "",
        indicatif: "+43"
      },
      // Austria
      {
        flag: "",
        indicatif: "+994"
      },
      // Azerbaijan
      {
        flag: "",
        indicatif: "+1242"
      },
      // Bahamas
      {
        flag: "",
        indicatif: "+973"
      },
      // Bahrain
      {
        flag: "",
        indicatif: "+880"
      },
      // Bangladesh
      {
        flag: "",
        indicatif: "+1246"
      },
      // Barbados
      {
        flag: "",
        indicatif: "+32"
      },
      // Belgium
      {
        flag: "",
        indicatif: "+501"
      },
      // Belize
      {
        flag: "",
        indicatif: "+229"
      },
      // Benin
      {
        flag: "",
        indicatif: "+1441"
      },
      // Bermuda
      {
        flag: "",
        indicatif: "+975"
      },
      // Bhutan
      {
        flag: "",
        indicatif: "+375"
      },
      // Belarus
      {
        flag: "",
        indicatif: "+95"
      },
      // Myanmar
      {
        flag: "",
        indicatif: "+591"
      },
      // Bolivia
      {
        flag: "",
        indicatif: "+387"
      },
      // Bosnia and Herzegovina
      {
        flag: "",
        indicatif: "+267"
      },
      // Botswana
      {
        flag: "",
        indicatif: "+55"
      },
      // Brazil
      {
        flag: "",
        indicatif: "+673"
      },
      // Brunei
      {
        flag: "",
        indicatif: "+359"
      },
      // Bulgaria
      {
        flag: "",
        indicatif: "+226"
      },
      // Burkina Faso
      {
        flag: "",
        indicatif: "+257"
      },
      // Burundi
      {
        flag: "",
        indicatif: "+855"
      },
      // Cambodia
      {
        flag: "",
        indicatif: "+237"
      },
      // Cameroon
      {
        flag: "",
        indicatif: "+1"
      },
      // Canada
      {
        flag: "",
        indicatif: "+238"
      },
      // Cape Verde
      {
        flag: "",
        indicatif: "+1345"
      },
      // Cayman Islands
      {
        flag: "",
        indicatif: "+236"
      },
      // Central African Republic
      {
        flag: "",
        indicatif: "+56"
      },
      // Chile
      {
        flag: "",
        indicatif: "+86"
      },
      // China
      {
        flag: "",
        indicatif: "+357"
      },
      // Cyprus
      {
        flag: "",
        indicatif: "+57"
      },
      // Colombia
      {
        flag: "",
        indicatif: "+269"
      },
      // Comoros
      {
        flag: "",
        indicatif: "+243"
      },
      // Democratic Republic of the Congo
      {
        flag: "",
        indicatif: "+242"
      },
      // Republic of the Congo
      {
        flag: "",
        indicatif: "+682"
      },
      // Cook Islands
      {
        flag: "",
        indicatif: "+850"
      },
      // North Korea
      {
        flag: "",
        indicatif: "+82"
      },
      // South Korea
      {
        flag: "",
        indicatif: "+506"
      },
      // Costa Rica
      {
        flag: "",
        indicatif: "+225"
      },
      // Côte d'Ivoire
      {
        flag: "",
        indicatif: "+385"
      },
      // Croatia
      {
        flag: "",
        indicatif: "+53"
      },
      // Cuba
      {
        flag: "",
        indicatif: "+599"
      },
      // Curaçao
      {
        flag: "",
        indicatif: "+45"
      },
      // Denmark
      {
        flag: "",
        indicatif: "+246"
      },
      // British Indian Ocean Territory
      {
        flag: "",
        indicatif: "+253"
      },
      // Djibouti
      {
        flag: "",
        indicatif: "+1767"
      },
      // Dominica
      {
        flag: "",
        indicatif: "+20"
      },
      // Egypt
      {
        flag: "",
        indicatif: "+971"
      },
      // United Arab Emirates
      {
        flag: "",
        indicatif: "+593"
      },
      // Ecuador
      {
        flag: "",
        indicatif: "+291"
      },
      // Eritrea
      {
        flag: "",
        indicatif: "+34"
      },
      // Spain
      {
        flag: "",
        indicatif: "+372"
      },
      // Estonia
      {
        flag: "",
        indicatif: "+251"
      },
      // Ethiopia
      {
        flag: "",
        indicatif: "+298"
      },
      // Faroe Islands
      {
        flag: "",
        indicatif: "+679"
      },
      // Fiji
      {
        flag: "",
        indicatif: "+358"
      },
      // Finland
      {
        flag: "",
        indicatif: "+33"
      },
      // France
      {
        flag: "",
        indicatif: "+241"
      },
      // Gabon
      {
        flag: "",
        indicatif: "+220"
      },
      // The Gambia
      {
        flag: "",
        indicatif: "+995"
      },
      // Georgia
      {
        flag: "",
        indicatif: "+233"
      },
      // Ghana
      {
        flag: "",
        indicatif: "+350"
      },
      // Gibraltar
      {
        flag: "",
        indicatif: "+30"
      },
      // Greece
      {
        flag: "",
        indicatif: "+1473"
      },
      // Grenada
      {
        flag: "",
        indicatif: "+299"
      },
      // Greenland
      {
        flag: "",
        indicatif: "+590"
      },
      // Guadeloupe
      {
        flag: "",
        indicatif: "+1671"
      },
      // Guam
      {
        flag: "",
        indicatif: "+502"
      },
      // Guatemala
      {
        flag: "",
        indicatif: "+224"
      },
      // Guinea
      {
        flag: "",
        indicatif: "+240"
      },
      // Equatorial Guinea
      {
        flag: "",
        indicatif: "+245"
      },
      // Guinea-Bissau
      {
        flag: "",
        indicatif: "+592"
      },
      // Guyana
      {
        flag: "",
        indicatif: "+594"
      },
      // French Guiana
      {
        flag: "",
        indicatif: "+509"
      },
      // Haiti
      {
        flag: "",
        indicatif: "+504"
      },
      // Honduras
      {
        flag: "",
        indicatif: "+852"
      },
      // Hong Kong
      {
        flag: "",
        indicatif: "+36"
      },
      // Hungary
      {
        flag: "",
        indicatif: "+91"
      },
      // India
      {
        flag: "",
        indicatif: "+62"
      },
      // Indonesia
      {
        flag: "",
        indicatif: "+964"
      },
      // Iraq
      {
        flag: "",
        indicatif: "+98"
      },
      // Iran
      {
        flag: "",
        indicatif: "+353"
      },
      // Ireland
      {
        flag: "",
        indicatif: "+354"
      },
      // Iceland
      {
        flag: "",
        indicatif: "+972"
      },
      // Israel
      {
        flag: "",
        indicatif: "+39"
      },
      // Italy
      {
        flag: "",
        indicatif: "+1876"
      },
      // Jamaica
      {
        flag: "",
        indicatif: "+81"
      },
      // Japan
      {
        flag: "",
        indicatif: "+962"
      },
      // Jordan
      {
        flag: "",
        indicatif: "+7"
      },
      // Kazakhstan
      {
        flag: "",
        indicatif: "+254"
      },
      // Kenya
      {
        flag: "",
        indicatif: "+996"
      },
      // Kyrgyzstan
      {
        flag: "",
        indicatif: "+686"
      },
      // Kiribati
      {
        flag: "",
        indicatif: "+383"
      },
      // Kosovo
      {
        flag: "",
        indicatif: "+965"
      },
      // Kuwait
      {
        flag: "",
        indicatif: "+856"
      },
      // Laos
      {
        flag: "",
        indicatif: "+266"
      },
      // Lesotho
      {
        flag: "",
        indicatif: "+371"
      },
      // Latvia
      {
        flag: "",
        indicatif: "+961"
      },
      // Lebanon
      {
        flag: "",
        indicatif: "+231"
      },
      // Liberia
      {
        flag: "",
        indicatif: "+218"
      },
      // Libya
      {
        flag: "",
        indicatif: "+423"
      },
      // Liechtenstein
      {
        flag: "",
        indicatif: "+370"
      },
      // Lithuania
      {
        flag: "",
        indicatif: "+352"
      },
      // Luxembourg
      {
        flag: "",
        indicatif: "+853"
      },
      // Macau
      {
        flag: "",
        indicatif: "+389"
      },
      // North Macedonia
      {
        flag: "",
        indicatif: "+261"
      },
      // Madagascar
      {
        flag: "",
        indicatif: "+60"
      },
      // Malaysia
      {
        flag: "",
        indicatif: "+265"
      },
      // Malawi
      {
        flag: "",
        indicatif: "+960"
      },
      // Maldives
      {
        flag: "",
        indicatif: "+223"
      },
      // Mali
      {
        flag: "",
        indicatif: "+500"
      },
      // Falkland Islands
      {
        flag: "",
        indicatif: "+356"
      },
      // Malta
      {
        flag: "",
        indicatif: "+1670"
      },
      // Northern Mariana Islands
      {
        flag: "",
        indicatif: "+212"
      },
      // Morocco
      {
        flag: "",
        indicatif: "+692"
      },
      // Marshall Islands
      {
        flag: "",
        indicatif: "+596"
      },
      // Martinique
      {
        flag: "",
        indicatif: "+230"
      },
      // Mauritius
      {
        flag: "",
        indicatif: "+222"
      },
      // Mauritania
      {
        flag: "",
        indicatif: "+262"
      },
      // Mayotte/Reunion
      {
        flag: "",
        indicatif: "+52"
      },
      // Mexico
      {
        flag: "",
        indicatif: "+691"
      },
      // Micronesia
      {
        flag: "",
        indicatif: "+373"
      },
      // Moldova
      {
        flag: "",
        indicatif: "+377"
      },
      // Monaco
      {
        flag: "",
        indicatif: "+976"
      },
      // Mongolia
      {
        flag: "",
        indicatif: "+382"
      },
      // Montenegro
      {
        flag: "",
        indicatif: "+1664"
      },
      // Montserrat
      {
        flag: "",
        indicatif: "+258"
      },
      // Mozambique
      {
        flag: "",
        indicatif: "+264"
      },
      // Namibia
      {
        flag: "",
        indicatif: "+674"
      },
      // Nauru
      {
        flag: "",
        indicatif: "+977"
      },
      // Nepal
      {
        flag: "",
        indicatif: "+505"
      },
      // Nicaragua
      {
        flag: "",
        indicatif: "+227"
      },
      // Niger
      {
        flag: "",
        indicatif: "+234"
      },
      // Nigeria
      {
        flag: "",
        indicatif: "+683"
      },
      // Niue
      {
        flag: "",
        indicatif: "+47"
      },
      // Norway
      {
        flag: "",
        indicatif: "+687"
      },
      // New Caledonia
      {
        flag: "",
        indicatif: "+64"
      },
      // New Zealand
      {
        flag: "",
        indicatif: "+968"
      },
      // Oman
      {
        flag: "",
        indicatif: "+256"
      },
      // Uganda
      {
        flag: "",
        indicatif: "+998"
      },
      // Uzbekistan
      {
        flag: "",
        indicatif: "+92"
      },
      // Pakistan
      {
        flag: "",
        indicatif: "+680"
      },
      // Palau
      {
        flag: "",
        indicatif: "+970"
      },
      // Palestine
      {
        flag: "",
        indicatif: "+507"
      },
      // Panama
      {
        flag: "",
        indicatif: "+675"
      },
      // Papua New Guinea
      {
        flag: "",
        indicatif: "+595"
      },
      // Paraguay
      {
        flag: "",
        indicatif: "+31"
      },
      // Netherlands
      {
        flag: "",
        indicatif: "+51"
      },
      // Peru
      {
        flag: "",
        indicatif: "+63"
      },
      // Philippines
      {
        flag: "",
        indicatif: "+48"
      },
      // Poland
      {
        flag: "",
        indicatif: "+689"
      },
      // French Polynesia
      {
        flag: "",
        indicatif: "+351"
      },
      // Portugal
      {
        flag: "",
        indicatif: "+974"
      },
      // Qatar
      {
        flag: "",
        indicatif: "+40"
      },
      // Romania
      {
        flag: "",
        indicatif: "+44"
      },
      // United Kingdom
      {
        flag: "",
        indicatif: "+250"
      },
      // Rwanda
      {
        flag: "",
        indicatif: "+1869"
      },
      // Saint Kitts and Nevis
      {
        flag: "",
        indicatif: "+290"
      },
      // Saint Helena
      {
        flag: "",
        indicatif: "+1758"
      },
      // Saint Lucia
      {
        flag: "",
        indicatif: "+378"
      },
      // San Marino
      {
        flag: "",
        indicatif: "+508"
      },
      // Saint Pierre and Miquelon
      {
        flag: "",
        indicatif: "+1784"
      },
      // Saint Vincent and the Grenadines
      {
        flag: "",
        indicatif: "+677"
      },
      // Solomon Islands
      {
        flag: "",
        indicatif: "+503"
      },
      // El Salvador
      {
        flag: "",
        indicatif: "+685"
      },
      // Samoa
      {
        flag: "",
        indicatif: "+1684"
      },
      // American Samoa
      {
        flag: "",
        indicatif: "+239"
      },
      // São Tomé and Príncipe
      {
        flag: "",
        indicatif: "+221"
      },
      // Senegal
      {
        flag: "",
        indicatif: "+381"
      },
      // Serbia
      {
        flag: "",
        indicatif: "+248"
      },
      // Seychelles
      {
        flag: "",
        indicatif: "+232"
      },
      // Sierra Leone
      {
        flag: "",
        indicatif: "+65"
      },
      // Singapore
      {
        flag: "",
        indicatif: "+421"
      },
      // Slovakia
      {
        flag: "",
        indicatif: "+386"
      },
      // Slovenia
      {
        flag: "",
        indicatif: "+252"
      },
      // Somalia
      {
        flag: "",
        indicatif: "+249"
      },
      // Sudan
      {
        flag: "",
        indicatif: "+211"
      },
      // South Sudan
      {
        flag: "",
        indicatif: "+94"
      },
      // Sri Lanka
      {
        flag: "",
        indicatif: "+46"
      },
      // Sweden
      {
        flag: "",
        indicatif: "+41"
      },
      // Switzerland
      {
        flag: "",
        indicatif: "+597"
      },
      // Suriname
      {
        flag: "",
        indicatif: "+268"
      },
      // Eswatini
      {
        flag: "",
        indicatif: "+963"
      },
      // Syria
      {
        flag: "",
        indicatif: "+992"
      },
      // Tajikistan
      {
        flag: "",
        indicatif: "+255"
      },
      // Tanzania
      {
        flag: "",
        indicatif: "+886"
      },
      // Taiwan
      {
        flag: "",
        indicatif: "+235"
      },
      // Chad
      {
        flag: "",
        indicatif: "+420"
      },
      // Czech Republic
      {
        flag: "",
        indicatif: "+672"
      },
      // Christmas Island
      {
        flag: "",
        indicatif: "+66"
      },
      // Thailand
      {
        flag: "",
        indicatif: "+670"
      },
      // East Timor
      {
        flag: "",
        indicatif: "+228"
      },
      // Togo
      {
        flag: "",
        indicatif: "+690"
      },
      // Tokelau
      {
        flag: "",
        indicatif: "+676"
      },
      // Tonga
      {
        flag: "",
        indicatif: "+1868"
      },
      // Trinidad and Tobago
      {
        flag: "",
        indicatif: "+216"
      },
      // Tunisia
      {
        flag: "",
        indicatif: "+993"
      },
      // Turkmenistan
      {
        flag: "",
        indicatif: "+1649"
      },
      // Turks and Caicos Islands
      {
        flag: "",
        indicatif: "+90"
      },
      // Turkey
      {
        flag: "",
        indicatif: "+688"
      },
      // Tuvalu
      {
        flag: "",
        indicatif: "+380"
      },
      // Ukraine
      {
        flag: "",
        indicatif: "+598"
      },
      // Uruguay
      {
        flag: "",
        indicatif: "+678"
      },
      // Vanuatu
      {
        flag: "",
        indicatif: "+58"
      },
      // Venezuela
      {
        flag: "",
        indicatif: "+1340"
      },
      // U.S. Virgin Islands
      {
        flag: "",
        indicatif: "+1284"
      },
      // British Virgin Islands
      {
        flag: "",
        indicatif: "+84"
      },
      // Vietnam
      {
        flag: "",
        indicatif: "+681"
      },
      // Wallis and Futuna
      {
        flag: "",
        indicatif: "+967"
      },
      // Yemen
      {
        flag: "",
        indicatif: "+260"
      },
      // Zambia
      {
        flag: "",
        indicatif: "+263"
      } // Zimbabwe
      ]
    };
  },
  created: function created() {
    var _this = this;
    this.filterItems();
    // Initialize EventBus listener
    this.$on("tb-pcp1", function (data) {
      console.log("NUMBER", data);
      _this.numberData = _this.number || '';
      _this.indicatifData = _this.indicatif || '+';
      _this.query = _this.indicatif || '+';
      _this.filterItems();
    });
  },
  methods: {
    onUpdate: function onUpdate(v) {
      this.query = v;
      this.indicatifData = v;
      this.opened = false;
      this.stayOpened = false;
      this.$emit('update:indicatif', v);
    },
    filterItems: function filterItems() {
      if (!this.query) {
        this.filteredItems = this.items;
      } else {
        var search = this.query.toLowerCase().replace('+', '');
        this.filteredItems = this.items.filter(function (item) {
          return item.indicatif.toLowerCase().includes(search);
        });
      }
    }
  },
  watch: {
    indicatifData: function indicatifData(newVal) {
      this.phoneNumber = "".concat(newVal, " ").concat(this.numberData).trim();
      this.$emit('updatephone', this.phoneNumber);
    },
    numberData: function numberData(newVal) {
      if (newVal === undefined || newVal === null) {
        this.numberData = '';
        return;
      }
      if (newVal.length > 10) {
        this.numberData = newVal.slice(0, 10);
      }
      this.phoneNumber = "".concat(this.indicatifData || '+', " ").concat(this.numberData).trim();
      //   console.log('Emitting phoneNumber from numberData:', this.phoneNumber);
      this.$emit('updatephone', this.phoneNumber);
    },
    // numberData(newVal) {
    //   // Guard against undefined or null
    //   if (newVal === undefined || newVal === null) {
    //     this.numberData = '';
    //     return;
    //   }
    //   if (newVal.length > 10) {
    //     this.numberData = newVal.slice(0, 10);
    //   }
    //   this.phoneNumber = `${this.indicatifData} ${this.numberData}`.trim();
    //   this.$emit('updatephone', this.phoneNumber);
    // },
    query: function query(newVal) {
      var regex = /^\+?\d{0,4}$/;
      if (!regex.test(newVal)) {
        this.query = '+';
      }
      this.filterItems();
    },
    indicatif: function indicatif(newVal) {
      this.indicatifData = newVal || '+';
      this.query = newVal || '+';
      this.filterItems();
    },
    number: function number(newVal) {
      // Ensure numberData is always a string
      this.numberData = newVal || '';
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/PhoneInputCustom.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/PhoneInputCustom.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helpers_phoneCodes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/phoneCodes.js */ "./resources/js/helpers/phoneCodes.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "PhoneInputCustom",
  props: {
    modelValue: String,
    isDisabled: {
      type: Boolean,
      "default": false
    },
    defaultIndicatif: {
      type: String,
      "default": "+"
    }
  },
  data: function data() {
    return {
      query: this.defaultIndicatif,
      indicatifData: this.defaultIndicatif,
      numberData: "",
      opened: false,
      blurTimeout: null
    };
  },
  computed: {
    filteredItems: function filteredItems() {
      var search = this.query.replace("+", "").toLowerCase();
      return _helpers_phoneCodes_js__WEBPACK_IMPORTED_MODULE_0__["default"].filter(function (item) {
        return item.indicatif.replace("+", "").toLowerCase().includes(search);
      });
    },
    fullPhone: function fullPhone() {
      return "".concat(this.indicatifData, " ").concat(this.numberData).trim();
    }
  },
  watch: {
    modelValue: {
      immediate: true,
      handler: function handler(newVal) {
        var parts = (newVal || "").split(" ");
        this.indicatifData = parts[0] || this.defaultIndicatif;
        this.query = this.indicatifData;
        this.numberData = parts[1] || "";
      }
    },
    query: function query(newVal) {
      var regex = /^\+?\d{0,4}$/;
      if (!regex.test(newVal)) {
        this.query = this.indicatifData;
      }
    },
    defaultIndicatif: {
      immediate: true,
      handler: function handler(newVal) {
        if (['', null, undefined, '+'].includes(this.indicatifData)) {
          this.selectIndicatif(newVal);
        }
      }
    }
  },
  methods: {
    emitPhone: function emitPhone() {
      this.$emit("update:modelValue", this.fullPhone);
      this.$emit("change", this.fullPhone);
    },
    selectIndicatif: function selectIndicatif(value) {
      this.indicatifData = value;
      this.query = value;
      this.opened = false;
      this.emitPhone();
    },
    onFocus: function onFocus() {
      this.opened = true;
      clearTimeout(this.blurTimeout);
    },
    onBlur: function onBlur() {
      var _this = this;
      this.blurTimeout = setTimeout(function () {
        _this.opened = false;
      }, 150); // Laisse le temps au click d’être capté
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/decouvert_privilege/DC-PV0.vue?vue&type=template&id=71c6ea18&scoped=true":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/decouvert_privilege/DC-PV0.vue?vue&type=template&id=71c6ea18&scoped=true ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm$formDataToBeWatch, _vm$core_banking_info, _vm$status_object, _vm$status_object2, _vm$status_object3, _vm$status_object4, _vm$status_object5, _vm$status_object6, _vm$status_object7, _vm$status_object8, _vm$status_object9, _vm$status_object0, _vm$status_object1, _vm$status_object10, _vm$formDataToBeWatch2;
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    on: {
      contextmenu: function contextmenu($event) {
        return _vm.$refs.menu.open($event, _vm.tb_name);
      }
    }
  }, [_vm.isLoading ? _c("loader") : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "row bg-light card-width-height",
    staticStyle: {
      width: "100%",
      height: "100%"
    }
  }, [_c("ContextMenu", {
    ref: "menu",
    attrs: {
      id: _vm.tb_name,
      cred_pub_key: _vm.meta_parseable.cred_pub_key,
      tb_name: _vm.tb_name,
      contextList: _vm.contextList
    }
  }), _vm._v(" "), _vm.seen === true ? _c("div", {
    staticClass: "card",
    staticStyle: {
      width: "100%",
      height: "100%"
    }
  }, [_c("br"), _vm._v(" "), _c("div", {
    staticClass: "card-header hdc pb-0 pt-2"
  }, [_c("h6", {
    ref: "topdiv",
    staticClass: "head",
    attrs: {
      id: "dcp-ppo1-head"
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col"
  }, [_vm._v("\n                            " + _vm._s(_vm.tb_display_name) + " : Identification du client\n                        ")]), _vm._v(" "), _c("div", {
    staticClass: "col-auto"
  }, [((_vm$formDataToBeWatch = _vm.formDataToBeWatched.notes) === null || _vm$formDataToBeWatch === void 0 ? void 0 : _vm$formDataToBeWatch.length) > 0 ? _c("div", {
    staticStyle: {
      display: "inline-block",
      position: "relative"
    }
  }, [_c("span", {
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.openNotesModal(true);
      }
    }
  }, [_c("i", {
    staticClass: "icofont icofont-comment text-white px-2",
    staticStyle: {
      "font-size": "12px"
    },
    attrs: {
      role: "button"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "badge-sm"
  }, [_c("span", [_vm._v(" " + _vm._s(_vm.formDataToBeWatched.notes.length) + " ")])])])]) : _vm._e(), _vm._v(" "), _c("airplay-icon", {
    staticClass: "custom-class mt-1",
    staticStyle: {
      cursor: "pointer",
      margin: "0 5px"
    },
    attrs: {
      size: "0.7x",
      title: "exemple"
    },
    on: {
      click: function click($event) {
        return _vm.$modal.show("identification_client");
      }
    }
  }), _vm._v(" "), _c("chevron-up-icon", {
    staticClass: "custom-class",
    staticStyle: {
      cursor: "pointer"
    },
    attrs: {
      size: "21"
    },
    on: {
      click: function click($event) {
        return _vm.retract();
      }
    }
  })], 1)])])]), _vm._v(" "), _c("div", {
    staticClass: "row p-0"
  }, [_c("div", {
    staticClass: "col-12 p-0 position-relative"
  }, [_vm.seen6 ? _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "relook-header",
    on: {
      click: function click($event) {
        _vm.seen6 = !_vm.seen6;
      }
    }
  }, [_c("h6", {
    "class": " subdiv" + this.tb_name,
    attrs: {
      id: "bref-rappel-des-relations-du-client-avec-la-afg-banque-ci"
    }
  }, [_vm._v("\n                                Informations personnelles\n                                "), _c("chevron-up-icon", {
    staticClass: "custom-class",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    },
    attrs: {
      size: "21"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(0), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.nom,
      expression: "formDataToBeWatched.nom"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      readonly: "",
      id: "nom"
    },
    domProps: {
      value: _vm.formDataToBeWatched.nom
    },
    on: {
      input: [function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formDataToBeWatched, "nom", $event.target.value);
      }, _vm.formDataVars]
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(1), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.prenoms,
      expression: "formDataToBeWatched.prenoms"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      readonly: "",
      id: "prenoms"
    },
    domProps: {
      value: _vm.formDataToBeWatched.prenoms
    },
    on: {
      input: [function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formDataToBeWatched, "prenoms", $event.target.value);
      }, _vm.formDataVars]
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(2), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.indice,
      expression: "formDataToBeWatched.indice"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      readonly: "",
      id: "indice"
    },
    domProps: {
      value: _vm.formDataToBeWatched.indice
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formDataToBeWatched, "indice", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(3), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.compte_numero,
      expression: "formDataToBeWatched.compte_numero"
    }],
    staticClass: "form-control",
    attrs: {
      name: "num_compte"
    },
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.formDataToBeWatched, "compte_numero", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: ""
    }
  }, [_vm._v("Sélectionner un numéro de compte")]), _vm._v(" "), _vm._l(_vm.comptesCoreBankings, function (val, ind_) {
    return _c("option", {
      key: ind_,
      domProps: {
        value: val.code
      }
    }, [_vm._v("\n                                            " + _vm._s(val.type) + " - " + _vm._s(val.code) + "\n                                        ")]);
  })], 2)]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(4), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.telephone,
      expression: "formDataToBeWatched.telephone"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      readonly: !["", null, undefined].includes((_vm$core_banking_info = _vm.core_banking_info) === null || _vm$core_banking_info === void 0 ? void 0 : _vm$core_banking_info.phone),
      id: "telephone"
    },
    domProps: {
      value: _vm.formDataToBeWatched.telephone
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formDataToBeWatched, "telephone", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_c("label", {
    attrs: {
      "for": "email"
    }
  }, [_vm._v("Email")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.email_client,
      expression: "formDataToBeWatched.email_client"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      readonly: (_vm$status_object = _vm.status_object) === null || _vm$status_object === void 0 ? void 0 : _vm$status_object.email_client,
      id: "email_client"
    },
    domProps: {
      value: _vm.formDataToBeWatched.email_client
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formDataToBeWatched, "email_client", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(5), _vm._v(" "), ["Passport", "CNI", "PC", "Carte consulaire", "", null, undefined].includes(_vm.formDataToBeWatched.type_piece) ? _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.type_piece,
      expression: "formDataToBeWatched.type_piece"
    }],
    staticClass: "form-control",
    attrs: {
      id: "type_piece",
      disabled: (_vm$status_object2 = _vm.status_object) === null || _vm$status_object2 === void 0 ? void 0 : _vm$status_object2.type_piece
    },
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.formDataToBeWatched, "type_piece", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "",
      selected: ""
    }
  }, [_vm._v("\n                                            --- Sélectionner le type de pièce d'identité ---\n                                        ")]), _vm._v(" "), _c("option", {
    attrs: {
      value: ""
    }
  }), _vm._v(" "), _c("option", {
    attrs: {
      value: "Passport"
    }
  }, [_vm._v("Passport")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "CNI"
    }
  }, [_vm._v("Carte Nationnale d'identité (CNI)")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "PC"
    }
  }, [_vm._v("Permis de condure (PC)")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "Carte consulaire"
    }
  }, [_vm._v("Carte consulaire")])]) : _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.type_piece,
      expression: "formDataToBeWatched.type_piece"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      readonly: (_vm$status_object3 = _vm.status_object) === null || _vm$status_object3 === void 0 ? void 0 : _vm$status_object3.type_piece,
      id: "type_piece"
    },
    domProps: {
      value: _vm.formDataToBeWatched.type_piece
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formDataToBeWatched, "type_piece", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(6), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.num_piece,
      expression: "formDataToBeWatched.num_piece"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      readonly: (_vm$status_object4 = _vm.status_object) === null || _vm$status_object4 === void 0 ? void 0 : _vm$status_object4.num_piece,
      id: "num_piece"
    },
    domProps: {
      value: _vm.formDataToBeWatched.num_piece
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formDataToBeWatched, "num_piece", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(7), _vm._v(" "), _c("date-input", {
    attrs: {
      viewonly: (_vm$status_object5 = _vm.status_object) === null || _vm$status_object5 === void 0 ? void 0 : _vm$status_object5.date_delivrance_piece,
      value: _vm.formDataToBeWatched.date_delivrance_piece,
      id: "date_delivrance_piece"
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(8), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.lieu_delivrance_piece,
      expression: "formDataToBeWatched.lieu_delivrance_piece"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      disabled: (_vm$status_object6 = _vm.status_object) === null || _vm$status_object6 === void 0 ? void 0 : _vm$status_object6.lieu_delivrance_piece,
      id: "lieu_delivrance_piece"
    },
    domProps: {
      value: _vm.formDataToBeWatched.lieu_delivrance_piece
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formDataToBeWatched, "lieu_delivrance_piece", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(9), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.sexe,
      expression: "formDataToBeWatched.sexe "
    }],
    staticClass: "form-control",
    attrs: {
      id: "sexe",
      disabled: (_vm$status_object7 = _vm.status_object) === null || _vm$status_object7 === void 0 ? void 0 : _vm$status_object7.sexe
    },
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.formDataToBeWatched, "sexe", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "",
      disabled: "",
      selected: ""
    }
  }, [_vm._v("\n                                            --- Sélectionner le genre ---\n                                        ")]), _vm._v(" "), _c("option", {
    attrs: {
      value: ""
    }
  }), _vm._v(" "), _c("option", {
    attrs: {
      value: "Féminin"
    }
  }, [_vm._v("Féminin")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "Masculin"
    }
  }, [_vm._v("Masculin")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(10), _vm._v(" "), _c("date-input", {
    attrs: {
      viewonly: (_vm$status_object8 = _vm.status_object) === null || _vm$status_object8 === void 0 ? void 0 : _vm$status_object8.date_naissance,
      value: _vm.formDataToBeWatched.date_naissance,
      id: "date_naissance"
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(11), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.ville_naissance,
      expression: "formDataToBeWatched.ville_naissance"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      readonly: (_vm$status_object9 = _vm.status_object) === null || _vm$status_object9 === void 0 ? void 0 : _vm$status_object9.ville_naissance,
      id: "ville_naissance"
    },
    domProps: {
      value: _vm.formDataToBeWatched.ville_naissance
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formDataToBeWatched, "ville_naissance", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(12), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.ville_residence,
      expression: "formDataToBeWatched.ville_residence"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      readonly: (_vm$status_object0 = _vm.status_object) === null || _vm$status_object0 === void 0 ? void 0 : _vm$status_object0.ville_residence,
      id: "ville_residence"
    },
    domProps: {
      value: _vm.formDataToBeWatched.ville_residence
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formDataToBeWatched, "ville_residence", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(13), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.adresse,
      expression: "formDataToBeWatched.adresse"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      readonly: (_vm$status_object1 = _vm.status_object) === null || _vm$status_object1 === void 0 ? void 0 : _vm$status_object1.adresse,
      id: "adresse"
    },
    domProps: {
      value: _vm.formDataToBeWatched.adresse
    },
    on: {
      input: [function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formDataToBeWatched, "adresse", $event.target.value);
      }, _vm.handleInput]
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_c("label", {
    attrs: {
      "for": "adresse_postale"
    }
  }, [_vm._v("Adresse postale")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.adresse_postale,
      expression: "formDataToBeWatched.adresse_postale"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      id: "adresse_postale"
    },
    domProps: {
      value: _vm.formDataToBeWatched.adresse_postale
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formDataToBeWatched, "adresse_postale", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(14), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.type_client,
      expression: "formDataToBeWatched.type_client"
    }],
    staticClass: "form-select single-select",
    attrs: {
      id: "type_client"
    },
    on: {
      change: [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.formDataToBeWatched, "type_client", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }, function ($event) {
        return _vm.handleInput(true);
      }]
    }
  }, [_c("option", {
    attrs: {
      selected: "",
      disabled: "",
      hidden: ""
    }
  }, [_vm._v("---")]), _vm._v(" "), _c("option", {
    attrs: {
      value: ""
    }
  }), _vm._v(" "), _c("option", {
    attrs: {
      value: "Salarié Fonctionnaire"
    }
  }, [_vm._v("Salarié Fonctionnaire")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "Salarié Non Fonctionnaire"
    }
  }, [_vm._v("Salarié Non Fonctionnaire")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "compte_contribuable"
    }
  }, [_vm._v("\n                                        " + _vm._s(_vm.compte_contribuable_label) + " "), _c("span", {
    staticStyle: {
      color: "red"
    }
  }, [_vm._v("*")])]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.compte_contribuable,
      expression: "formDataToBeWatched.compte_contribuable"
    }],
    staticClass: "form-control",
    attrs: {
      required: "",
      type: "text",
      readonly: (_vm$status_object10 = _vm.status_object) === null || _vm$status_object10 === void 0 ? void 0 : _vm$status_object10.compte_contribuable,
      id: "compte_contribuable"
    },
    domProps: {
      value: _vm.formDataToBeWatched.compte_contribuable
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formDataToBeWatched, "compte_contribuable", $event.target.value);
      }
    }
  })])])])]) : _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "relook-header",
    on: {
      click: function click($event) {
        _vm.seen6 = !_vm.seen6;
      }
    }
  }, [_c("h6", {
    attrs: {
      id: "bref-rappel-des-relations-du-client-avec-la-afg-banque-ci"
    }
  }, [_vm._v("\n                                Informations personnelles\n                                "), _c("chevron-down-icon", {
    staticClass: "custom-class",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    },
    attrs: {
      size: "21"
    }
  })], 1)])]), _vm._v(" "), _vm.seen7 ? _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "relook-header",
    on: {
      click: function click($event) {
        _vm.seen7 = !_vm.seen7;
      }
    }
  }, [_c("h6", {
    "class": " subdiv" + this.tb_name,
    attrs: {
      id: "bref-rappel-des-relations-du-client-avec-la-afg-banque-ci"
    }
  }, [_vm._v("\n                                Informations sur l'employeur\n                                "), _c("chevron-up-icon", {
    staticClass: "custom-class",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    },
    attrs: {
      size: "21"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(15), _vm._v(" "), _c("div", {
    staticClass: "d-flex position-relative align-items-center"
  }, [_c("Multiselect", {
    staticStyle: {
      height: "42px",
      "border-color": "#34495e",
      color: "#57606f",
      "font-size": "13px",
      "font-weight": "bold"
    },
    attrs: {
      searchable: true,
      trackBy: "libelle",
      label: "libelle",
      "value-prop": "libelle",
      id: "fonction",
      classes: {
        optionPointed: "text-gray-800 bg-gray-100"
      },
      options: _vm.professions_
    },
    on: {
      select: _vm.selectedOptionFonction
    },
    scopedSlots: _vm._u([{
      key: "option",
      fn: function fn(_ref) {
        var option = _ref.option;
        return [_c("p", {
          staticClass: "multiselect-option"
        }, [_vm._v(_vm._s(option.libelle))])];
      }
    }, {
      key: "singlelabel",
      fn: function fn(_ref2) {
        var value = _ref2.value;
        return [_c("p", {
          staticClass: "multiselect-single-label"
        }, [_vm._v(_vm._s(value.libelle))])];
      }
    }], null, false, 70791940),
    model: {
      value: _vm.fonction,
      callback: function callback($$v) {
        _vm.fonction = $$v;
      },
      expression: "fonction"
    }
  }), _vm._v(" "), _vm.professions == "" || _vm.professions.length == 0 ? _c("span", {
    staticClass: "spinner-border spinner-border spinner-custom-input",
    staticStyle: {
      "margin-right": "17px"
    }
  }) : _vm._e()], 1)]), _vm._v(" "), _vm.fonction == "Autre" ? _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_c("label", {
    attrs: {
      "for": "entreprise_"
    }
  }, [_vm._v("Autre fonction actuelle ")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.fonction,
      expression: "formDataToBeWatched.fonction"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      id: "autre_fonction"
    },
    domProps: {
      value: _vm.formDataToBeWatched.fonction
    },
    on: {
      input: [function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formDataToBeWatched, "fonction", $event.target.value);
      }, _vm.handleInput]
    }
  })]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(16), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.entreprise,
      expression: "entreprise"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      disabled: "",
      id: "entreprise"
    },
    domProps: {
      value: _vm.entreprise
    },
    on: {
      input: [function ($event) {
        if ($event.target.composing) return;
        _vm.entreprise = $event.target.value;
      }, _vm.handleInput]
    }
  })]), _vm._v(" "), _vm.entreprise == "Autre" ? _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_c("label", {
    attrs: {
      "for": "entreprise_"
    }
  }, [_vm._v("Autre entreprise (Employeur) ")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.entreprise,
      expression: "formDataToBeWatched.entreprise"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      disabled: "",
      id: "entreprise_"
    },
    domProps: {
      value: _vm.formDataToBeWatched.entreprise
    },
    on: {
      input: [function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formDataToBeWatched, "entreprise", $event.target.value);
      }, _vm.handleInput]
    }
  })]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(17), _vm._v(" "), _c("date-input", {
    attrs: {
      value: _vm.formDataToBeWatched.date_embauche,
      id: "date_embauche"
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_c("label", {
    attrs: {
      "for": "annee_prec_emploi"
    }
  }, [_vm._v("Numéro de matricule")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.numero_matricule,
      expression: "formDataToBeWatched.numero_matricule"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      id: "numero_matricule"
    },
    domProps: {
      value: _vm.formDataToBeWatched.numero_matricule
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formDataToBeWatched, "numero_matricule", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_c("label", {
    attrs: {
      "for": "adresse"
    }
  }, [_vm._v("Adresse de l'employeur")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.adresse_employeur,
      expression: "formDataToBeWatched.adresse_employeur"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      id: "adresse_employeur"
    },
    domProps: {
      value: _vm.formDataToBeWatched.adresse_employeur
    },
    on: {
      input: [function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formDataToBeWatched, "adresse_employeur", $event.target.value);
      }, _vm.handleInput]
    }
  })])])])]) : _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "relook-header",
    on: {
      click: function click($event) {
        _vm.seen7 = !_vm.seen7;
      }
    }
  }, [_c("h6", {
    attrs: {
      id: "bref-rappel-des-relations-du-client-avec-la-afg-banque-ci"
    }
  }, [_vm._v("\n                                Informations sur l'employeur\n                                "), _c("chevron-down-icon", {
    staticClass: "custom-class",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    },
    attrs: {
      size: "21"
    }
  })], 1)])]), _vm._v(" "), _vm.seen4 ? _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "relook-header",
    on: {
      click: function click($event) {
        _vm.seen4 = !_vm.seen4;
      }
    }
  }, [_c("h6", {
    "class": " subdiv" + this.tb_name,
    attrs: {
      id: "frais-de-crédit"
    }
  }, [_vm._v("\n                                Compte(s) chez AFG BANK\n                                "), _c("chevron-up-icon", {
    staticClass: "custom-class",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    },
    attrs: {
      size: "21"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-borderless"
  }, [_vm._m(18), _vm._v(" "), _c("tbody", _vm._l(_vm.comptesAFGBank, function (el, ind) {
    return _c("tr", {
      key: ind
    }, [_c("td", [_c("div", {
      staticStyle: {
        "min-width": "130px"
      }
    }, [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: el.banque,
        expression: "el.banque"
      }],
      staticClass: "form-control",
      attrs: {
        type: "text",
        readonly: ""
      },
      domProps: {
        value: el.banque
      },
      on: {
        input: [function ($event) {
          if ($event.target.composing) return;
          _vm.$set(el, "banque", $event.target.value);
        }, _vm.handleInput]
      }
    })])]), _vm._v(" "), _c("td", {
      staticClass: "vertical-middle"
    }, [el.is_locale == true ? _c("div", {
      staticClass: "d-flex position-relative align-items-center"
    }, [_c("Multiselect", {
      staticStyle: {
        height: "42px",
        "border-color": "#34495e",
        color: "#57606f",
        "font-size": "13px",
        "font-weight": "bold"
      },
      attrs: {
        searchable: true,
        trackBy: "description",
        label: "description",
        "value-prop": "description",
        id: "type",
        classes: {
          optionPointed: "text-gray-800 bg-gray-100"
        },
        options: _vm.transformTypeCreditsFacilite_
      },
      scopedSlots: _vm._u([{
        key: "option",
        fn: function fn(_ref3) {
          var option = _ref3.option;
          return [_c("p", {
            staticClass: "multiselect-option"
          }, [_vm._v(_vm._s(option.description))])];
        }
      }, {
        key: "singlelabel",
        fn: function fn(_ref4) {
          var value = _ref4.value;
          return [_c("p", {
            staticClass: "multiselect-single-label"
          }, [_vm._v(_vm._s(value.description))])];
        }
      }], null, true),
      model: {
        value: el.libelle,
        callback: function callback($$v) {
          _vm.$set(el, "libelle", $$v);
        },
        expression: "el.libelle"
      }
    })], 1) : _c("div", {
      staticClass: "d-flex position-relative align-items-center"
    }, [_c("Multiselect", {
      staticStyle: {
        height: "42px",
        "border-color": "#34495e",
        color: "#57606f",
        "font-size": "13px",
        "font-weight": "bold"
      },
      attrs: {
        searchable: true,
        trackBy: "description",
        label: "description",
        "value-prop": "description",
        disabled: "",
        id: "type",
        classes: {
          optionPointed: "text-gray-800 bg-gray-100"
        },
        options: _vm.transformTypeCreditsFacilite_
      },
      scopedSlots: _vm._u([{
        key: "option",
        fn: function fn(_ref5) {
          var option = _ref5.option;
          return [_c("p", {
            staticClass: "multiselect-option"
          }, [_vm._v(_vm._s(option.description))])];
        }
      }, {
        key: "singlelabel",
        fn: function fn(_ref6) {
          var value = _ref6.value;
          return [_c("p", {
            staticClass: "multiselect-single-label"
          }, [_vm._v(_vm._s(value.description))])];
        }
      }], null, true),
      model: {
        value: el.libelle,
        callback: function callback($$v) {
          _vm.$set(el, "libelle", $$v);
        },
        expression: "el.libelle"
      }
    })], 1)]), _vm._v(" "), _c("td", [el.is_locale == true ? _c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: el.iban,
        expression: "el.iban"
      }],
      staticClass: "form-control",
      staticStyle: {
        width: "170px"
      },
      attrs: {
        type: "text"
      },
      domProps: {
        value: el.iban
      },
      on: {
        input: [function ($event) {
          if ($event.target.composing) return;
          _vm.$set(el, "iban", $event.target.value);
        }, _vm.handleInput]
      }
    }) : _c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: el.iban,
        expression: "el.iban"
      }],
      staticClass: "form-control",
      staticStyle: {
        width: "170px"
      },
      attrs: {
        readonly: "",
        type: "text"
      },
      domProps: {
        value: el.iban
      },
      on: {
        input: [function ($event) {
          if ($event.target.composing) return;
          _vm.$set(el, "iban", $event.target.value);
        }, _vm.handleInput]
      }
    })]), _vm._v(" "), _c("td", [el.is_locale == true ? _c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: el.numero_compte,
        expression: "el.numero_compte"
      }],
      staticClass: "form-control",
      staticStyle: {
        width: "170px"
      },
      attrs: {
        type: "text"
      },
      domProps: {
        value: el.numero_compte
      },
      on: {
        input: [function ($event) {
          if ($event.target.composing) return;
          _vm.$set(el, "numero_compte", $event.target.value);
        }, _vm.handleInput]
      }
    }) : _c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: el.numero_compte,
        expression: "el.numero_compte"
      }],
      staticClass: "form-control",
      staticStyle: {
        width: "170px"
      },
      attrs: {
        readonly: "",
        type: "text"
      },
      domProps: {
        value: el.numero_compte
      },
      on: {
        input: [function ($event) {
          if ($event.target.composing) return;
          _vm.$set(el, "numero_compte", $event.target.value);
        }, _vm.handleInput]
      }
    })]), _vm._v(" "), _c("td", [el.is_locale == true ? _c("date-input", {
      staticStyle: {
        width: "210px"
      },
      attrs: {
        value: el.account_open_date,
        id: "account_open_date"
      },
      on: {
        input: function input($event) {
          return _vm.formDataVars2($event, ind, "comptes", "account_open_date");
        }
      }
    }) : _c("date-input", {
      staticStyle: {
        width: "210px"
      },
      attrs: {
        viewonly: true,
        value: _vm.convertDDMMYYYYtoYYYYMMDD(el.account_open_date),
        id: "account_open_date"
      },
      on: {
        input: function input($event) {
          return _vm.formDataVars2($event, ind, "comptes", "account_open_date");
        }
      }
    })], 1), _vm._v(" "), _c("td", [el.is_locale == true ? _c("currency-input2", {
      staticStyle: {
        width: "150px"
      },
      attrs: {
        "default-typing": false
      },
      on: {
        input: _vm.handleInput
      },
      model: {
        value: el.balance,
        callback: function callback($$v) {
          _vm.$set(el, "balance", $$v);
        },
        expression: "el.balance"
      }
    }) : _c("currency-input2", {
      staticStyle: {
        width: "150px"
      },
      attrs: {
        readonly: "",
        "default-typing": false
      },
      on: {
        input: _vm.handleInput
      },
      model: {
        value: el.balance,
        callback: function callback($$v) {
          _vm.$set(el, "balance", $$v);
        },
        expression: "el.balance"
      }
    })], 1), _vm._v(" "), _c("td", [el.is_locale == true ? _c("date-input", {
      staticStyle: {
        width: "210px"
      },
      attrs: {
        value: el.date_extration_releve,
        id: "date_extration_releve"
      },
      on: {
        input: function input($event) {
          return _vm.formDataVars2($event, ind, "comptes", "date_extration_releve");
        }
      }
    }) : _c("date-input", {
      staticStyle: {
        width: "210px"
      },
      attrs: {
        viewonly: true,
        value: el.date_extration_releve,
        id: "date_extration_releve"
      },
      on: {
        input: function input($event) {
          return _vm.formDataVars2($event, ind, "comptes", "date_extration_releve");
        }
      }
    })], 1), _vm._v(" "), _c("td", {
      staticClass: "vertical-middle"
    }, [ind == 0 ? _c("button", {
      staticStyle: {
        "background-color": "#2c3e50",
        color: "#ffffff",
        "border-radius": "15%",
        border: "none"
      },
      attrs: {
        type: "button",
        title: "Ajouter une ligne"
      },
      on: {
        click: function click($event) {
          return _vm.addMoreCompte();
        }
      }
    }, [_c("plus-icon", {
      staticClass: "custom-class",
      attrs: {
        size: "21"
      }
    })], 1) : _vm._e(), _vm._v(" "), ind != 0 && el.is_locale == true ? _c("button", {
      staticStyle: {
        "background-color": "transparent",
        border: "none"
      },
      attrs: {
        type: "button",
        title: "Supprimer cette ligne"
      },
      on: {
        click: function click($event) {
          return _vm.removeCompte("comptes", ind);
        }
      }
    }, [_c("trash-icon", {
      staticClass: "custom-class",
      attrs: {
        size: "21"
      }
    })], 1) : _vm._e()])]);
  }), 0)])])])]) : _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "relook-header",
    on: {
      click: function click($event) {
        _vm.seen4 = !_vm.seen4;
      }
    }
  }, [_c("h6", {
    attrs: {
      id: "frais-de-crédit"
    }
  }, [_vm._v("\n                                Compte(s) chez AFG BANK\n                                "), _c("chevron-down-icon", {
    staticClass: "custom-class",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    },
    attrs: {
      size: "21"
    }
  })], 1)])]), _vm._v(" "), _vm.seen2 ? _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "relook-header",
    on: {
      click: function click($event) {
        _vm.seen2 = !_vm.seen2;
      }
    }
  }, [_c("h6", {
    "class": " subdiv" + this.tb_name,
    attrs: {
      id: "revenu-domicilié-à-la-afg-banque-ci"
    }
  }, [_vm._v("\n                                Revenu domicilié à AFG BANK\n                                "), _c("chevron-up-icon", {
    staticClass: "custom-class",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    },
    attrs: {
      size: "21"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-borderless"
  }, [_vm._m(19), _vm._v(" "), _c("tbody", [_vm._l(_vm.revenu_domicilie, function (el, ind) {
    return _c("tr", {
      key: ind
    }, [_c("td", [ind < 3 ? _c("div", {
      staticClass: "d-flex align-content-center revenu",
      staticStyle: {
        "min-width": "200px"
      }
    }, [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: el.checked,
        expression: "el.checked"
      }],
      staticClass: "form-check-input",
      attrs: {
        type: "checkbox"
      },
      domProps: {
        checked: Array.isArray(el.checked) ? _vm._i(el.checked, null) > -1 : el.checked
      },
      on: {
        change: [function ($event) {
          var $$a = el.checked,
            $$el = $event.target,
            $$c = $$el.checked ? true : false;
          if (Array.isArray($$a)) {
            var $$v = null,
              $$i = _vm._i($$a, $$v);
            if ($$el.checked) {
              $$i < 0 && _vm.$set(el, "checked", $$a.concat([$$v]));
            } else {
              $$i > -1 && _vm.$set(el, "checked", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
            }
          } else {
            _vm.$set(el, "checked", $$c);
          }
        }, function ($event) {
          return _vm.resetValues($event, ind, "revenu_domicilie");
        }]
      }
    }), _vm._v(" "), _c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: el.libelle,
        expression: "el.libelle"
      }],
      staticClass: "form-control",
      attrs: {
        readonly: "",
        type: "text"
      },
      domProps: {
        value: el.libelle
      },
      on: {
        input: [function ($event) {
          if ($event.target.composing) return;
          _vm.$set(el, "libelle", $event.target.value);
        }, _vm.handleInput]
      }
    })]) : _c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: el.libelle,
        expression: "el.libelle"
      }],
      staticClass: "form-control",
      staticStyle: {
        "min-width": "200px"
      },
      attrs: {
        type: "text"
      },
      domProps: {
        value: el.libelle
      },
      on: {
        input: [function ($event) {
          if ($event.target.composing) return;
          _vm.$set(el, "libelle", $event.target.value);
        }, _vm.handleInput]
      }
    })]), _vm._v(" "), _c("td", [_c("currency-input2", {
      attrs: {
        readonly: !el.checked,
        value: el.montant_salaire
      },
      on: {
        input: function input($event) {
          return _vm.formDataVars2($event, ind, "revenu_domicilie", "montant_salaire");
        }
      }
    }), _vm._v(" "), el.libelle == "Salaire net" && el.checked ? _c("div", {
      staticClass: "mt-1 d-flex align-items-baseline"
    }, [_vm._m(20, true), _vm._v(" "), _c("currency-input2", {
      staticStyle: {
        "min-width": "150px"
      },
      attrs: {
        readonly: !el.checked,
        value: _vm.formDataToBeWatched.salaire_brut,
        id: "salaire_brut"
      },
      on: {
        input: _vm.formDataVars
      }
    })], 1) : _vm._e()], 1), _vm._v(" "), _c("td", {
      staticClass: "text-center"
    }, [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: el.eligible,
        expression: "el.eligible"
      }],
      staticClass: "form-check-input m-0",
      attrs: {
        type: "checkbox",
        disabled: !el.checked
      },
      domProps: {
        checked: Array.isArray(el.eligible) ? _vm._i(el.eligible, null) > -1 : el.eligible
      },
      on: {
        change: [function ($event) {
          var $$a = el.eligible,
            $$el = $event.target,
            $$c = $$el.checked ? true : false;
          if (Array.isArray($$a)) {
            var $$v = null,
              $$i = _vm._i($$a, $$v);
            if ($$el.checked) {
              $$i < 0 && _vm.$set(el, "eligible", $$a.concat([$$v]));
            } else {
              $$i > -1 && _vm.$set(el, "eligible", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
            }
          } else {
            _vm.$set(el, "eligible", $$c);
          }
        }, function ($event) {
          return _vm.changeEligibleValue($event, ind);
        }]
      }
    })]), _vm._v(" "), _c("td", {
      staticClass: "text-center"
    }, [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: el.source_remboursement,
        expression: "el.source_remboursement"
      }],
      staticClass: "form-check-input m-0",
      attrs: {
        type: "checkbox",
        disabled: !el.checked
      },
      domProps: {
        checked: Array.isArray(el.source_remboursement) ? _vm._i(el.source_remboursement, null) > -1 : el.source_remboursement
      },
      on: {
        change: [function ($event) {
          var $$a = el.source_remboursement,
            $$el = $event.target,
            $$c = $$el.checked ? true : false;
          if (Array.isArray($$a)) {
            var $$v = null,
              $$i = _vm._i($$a, $$v);
            if ($$el.checked) {
              $$i < 0 && _vm.$set(el, "source_remboursement", $$a.concat([$$v]));
            } else {
              $$i > -1 && _vm.$set(el, "source_remboursement", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
            }
          } else {
            _vm.$set(el, "source_remboursement", $$c);
          }
        }, function ($event) {
          return _vm.changeEligibleValueSR($event, ind);
        }]
      }
    })]), _vm._v(" "), _c("td", {
      staticClass: "text-center"
    }, [_c("select", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: el.periodicite,
        expression: "el.periodicite"
      }],
      staticClass: "form-select",
      attrs: {
        disabled: !el.source_remboursement
      },
      on: {
        change: [function ($event) {
          var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
            return o.selected;
          }).map(function (o) {
            var val = "_value" in o ? o._value : o.value;
            return val;
          });
          _vm.$set(el, "periodicite", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
        }, function ($event) {
          return _vm.handleInput(true);
        }]
      }
    }, [_c("option", {
      attrs: {
        value: ""
      }
    }), _vm._v(" "), _vm._l(_vm.periodicites, function (op, inOp) {
      return _c("option", {
        key: "op" + inOp,
        domProps: {
          value: op.libelle
        }
      }, [_vm._v(_vm._s(op.libelle))]);
    })], 2)]), _vm._v(" "), _c("td", [_c("currency-input2", {
      attrs: {
        readonly: "",
        value: el.mensualite
      },
      on: {
        input: function input($event) {
          return _vm.formDataVars2($event, ind, "revenu_domicilie", "mensualite");
        }
      }
    })], 1), _vm._v(" "), _c("td", [_c("input-group", {
      staticStyle: {
        "min-width": "110px"
      },
      scopedSlots: _vm._u([{
        key: "input",
        fn: function fn() {
          return [_c("currency-input", {
            attrs: {
              disabled: !el.checked,
              readonly: !el.source_remboursement,
              value: el.taux,
              max: 100,
              "float": "",
              percentage: ""
            },
            on: {
              input: function input($event) {
                return _vm.formDataVars2($event, ind, "revenu_domicilie", "taux");
              }
            }
          })];
        },
        proxy: true
      }, {
        key: "right",
        fn: function fn() {
          return [_vm._v("%")];
        },
        proxy: true
      }], null, true)
    })], 1), _vm._v(" "), _c("td", [_c("currency-input2", {
      attrs: {
        readonly: "",
        value: el.montant_pondere
      },
      on: {
        input: function input($event) {
          return _vm.formDataVars2($event, ind, "revenu_domicilie", "montant_pondere");
        }
      }
    })], 1), _vm._v(" "), _c("td", [_c("input-group", {
      staticStyle: {
        "min-width": "110px"
      },
      scopedSlots: _vm._u([{
        key: "input",
        fn: function fn() {
          return [_c("currency-input", {
            attrs: {
              disabled: !el.source_remboursement,
              value: el.taux_qc1,
              max: 100,
              "float": "",
              percentage: ""
            },
            on: {
              input: function input($event) {
                return _vm.formDataVars2($event, ind, "revenu_domicilie", "taux_qc1");
              }
            }
          })];
        },
        proxy: true
      }, {
        key: "right",
        fn: function fn() {
          return [_vm._v("%")];
        },
        proxy: true
      }], null, true)
    })], 1), _vm._v(" "), _c("td", [_c("currency-input2", {
      attrs: {
        value: el.montant_qc1,
        readonly: ""
      },
      on: {
        input: function input($event) {
          return _vm.formDataVars2($event, ind, "revenu_domicilie", "montant_qc1");
        }
      }
    })], 1), _vm._v(" "), _c("td", [_c("input-group", {
      staticStyle: {
        "min-width": "110px"
      },
      scopedSlots: _vm._u([{
        key: "input",
        fn: function fn() {
          return [_c("currency-input", {
            attrs: {
              disabled: !el.source_remboursement,
              readonly: el.libelle != "Salaire net",
              value: el.taux_qc2,
              max: 100,
              "float": "",
              percentage: ""
            },
            on: {
              input: function input($event) {
                return _vm.formDataVars2($event, ind, "revenu_domicilie", "taux_qc2");
              }
            }
          })];
        },
        proxy: true
      }, {
        key: "right",
        fn: function fn() {
          return [_vm._v("%")];
        },
        proxy: true
      }], null, true)
    })], 1), _vm._v(" "), _c("td", [_c("currency-input2", {
      attrs: {
        value: el.montant_qc2,
        readonly: ""
      },
      on: {
        input: function input($event) {
          return _vm.formDataVars2($event, ind, "revenu_domicilie", "montant_qc2");
        }
      }
    })], 1), _vm._v(" "), _c("td", [_c("textarea", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: el.commentaire,
        expression: "el.commentaire"
      }],
      staticClass: "form-control",
      style: _vm.formDataToBeWatched.matrimoniale == "Marié(e)" ? "width: 200px" : "width: 250px",
      attrs: {
        rows: "1"
      },
      domProps: {
        value: el.commentaire
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(el, "commentaire", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", {
      staticClass: "vertical-middle text-right",
      staticStyle: {
        width: "15px"
      }
    }, [ind == 1 ? _c("button", {
      staticStyle: {
        "background-color": "#2c3e50",
        color: "#ffffff",
        "border-radius": "15%",
        border: "none"
      },
      attrs: {
        type: "button",
        title: "Ajouter une ligne"
      },
      on: {
        click: function click($event) {
          return _vm.addMoreRevenu();
        }
      }
    }, [_c("plus-icon", {
      staticClass: "custom-class",
      attrs: {
        size: "21"
      }
    })], 1) : _vm._e(), _vm._v(" "), ind > 1 ? _c("button", {
      staticStyle: {
        "background-color": "transparent",
        border: "none"
      },
      attrs: {
        type: "button",
        title: "Supprimer cette ligne"
      },
      on: {
        click: function click($event) {
          return _vm.removeRevenu(ind);
        }
      }
    }, [_c("trash-icon", {
      staticClass: "custom-class",
      attrs: {
        size: "21"
      }
    })], 1) : _vm._e()])]);
  }), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "fw-bold text-right vertical-middle"
  }, [_vm._v("Total")]), _vm._v(" "), _c("td", [_c("currency-input2", {
    attrs: {
      readonly: "",
      value: _vm.formDataToBeWatched.revenu_total_colonne_emprunteur
    }
  })], 1), _vm._v(" "), _c("td", {
    attrs: {
      colspan: "3"
    }
  }), _vm._v(" "), _c("td", [_c("currency-input2", {
    attrs: {
      readonly: "",
      value: _vm.formDataToBeWatched.revenu_total_colonne_mensualite
    }
  })], 1), _vm._v(" "), _c("td"), _vm._v(" "), _c("td", [_c("currency-input2", {
    attrs: {
      readonly: "",
      value: _vm.formDataToBeWatched.revenu_total_colonne_montant_pondere
    }
  })], 1), _vm._v(" "), _c("td", [_c("input-group", {
    staticStyle: {
      "min-width": "110px"
    },
    scopedSlots: _vm._u([{
      key: "input",
      fn: function fn() {
        return [_c("currency-input", {
          attrs: {
            readonly: "",
            value: _vm.formDataToBeWatched.revenu_total_colonne_taux_qc1,
            "float": "",
            percentage: ""
          }
        })];
      },
      proxy: true
    }, {
      key: "right",
      fn: function fn() {
        return [_vm._v("%")];
      },
      proxy: true
    }], null, false, 499303644)
  })], 1), _vm._v(" "), _c("td", [_c("currency-input2", {
    attrs: {
      readonly: "",
      value: _vm.formDataToBeWatched.revenu_total_colonne_montant_qc1
    }
  })], 1), _vm._v(" "), _c("td", [_c("input-group", {
    staticStyle: {
      "min-width": "110px"
    },
    scopedSlots: _vm._u([{
      key: "input",
      fn: function fn() {
        return [_c("currency-input", {
          attrs: {
            readonly: "",
            value: _vm.formDataToBeWatched.revenu_total_colonne_taux_qc2,
            "float": "",
            percentage: ""
          }
        })];
      },
      proxy: true
    }, {
      key: "right",
      fn: function fn() {
        return [_vm._v("%")];
      },
      proxy: true
    }], null, false, 1452648191)
  })], 1), _vm._v(" "), _c("td", [_c("currency-input2", {
    attrs: {
      readonly: "",
      value: _vm.formDataToBeWatched.revenu_total_colonne_montant_qc2
    }
  })], 1), _vm._v(" "), _c("td")])], 2)])])])]) : _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "relook-header",
    on: {
      click: function click($event) {
        _vm.seen2 = !_vm.seen2;
      }
    }
  }, [_c("h6", {
    attrs: {
      id: "revenu-domicilié-à-la-afg-banque-ci"
    }
  }, [_vm._v("\n                                Revenu domicilié à AFG BANK\n                                "), _c("chevron-down-icon", {
    staticClass: "custom-class",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    },
    attrs: {
      size: "21"
    }
  })], 1)])]), _vm._v(" "), _vm.seen10 ? _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "relook-header",
    on: {
      click: function click($event) {
        _vm.seen10 = !_vm.seen10;
      }
    }
  }, [_c("h6", {
    "class": " subdiv" + this.tb_name,
    attrs: {
      id: "bref-rappel-des-relations-du-client-avec-la-afg-banque-ci"
    }
  }, [_vm._v("\n                                Personnes à contacter en cas d'urgence\n                                "), _c("chevron-up-icon", {
    staticClass: "custom-class",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    },
    attrs: {
      size: "21"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "row p-0"
  }, [_c("div", {
    staticClass: "col-12 p-0"
  }, [_c("div", {
    staticClass: "card-body p-0 table-responsive"
  }, [_c("table", {
    staticClass: "table table-responsive table-bordered p-2"
  }, [_c("thead", [_c("tr", [_vm._m(21), _vm._v(" "), _vm._m(22), _vm._v(" "), _vm._m(23), _vm._v(" "), _vm._m(24), _vm._v(" "), _vm._m(25), _vm._v(" "), _vm._m(26), _vm._v(" "), _c("th", {
    staticClass: "font-weight-bold"
  }, [_c("button", {
    staticStyle: {
      "background-color": "#2c3e50",
      color: "#ffffff",
      "border-radius": "15%",
      border: "none"
    },
    attrs: {
      type: "button",
      title: "Ajouter une nouvelle référence familiale"
    },
    on: {
      click: function click($event) {
        return _vm.addMore();
      }
    }
  }, [_c("plus-icon", {
    staticClass: "custom-class",
    attrs: {
      size: "21"
    }
  })], 1)])])]), _vm._v(" "), _c("tbody", [_vm._l(_vm.reference_familiales_personne_contacters, function (reference_familiales_personne_contacter, index) {
    return _c("tr", {
      key: index
    }, [_c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: reference_familiales_personne_contacter.nom,
        expression: "\n                                                            reference_familiales_personne_contacter.nom\n                                                        "
      }],
      staticClass: "form-control",
      staticStyle: {
        "min-width": "200px"
      },
      attrs: {
        type: "text",
        id: "nom"
      },
      domProps: {
        value: reference_familiales_personne_contacter.nom
      },
      on: {
        input: [function ($event) {
          if ($event.target.composing) return;
          _vm.$set(reference_familiales_personne_contacter, "nom", $event.target.value);
        }, _vm.handlePersonnesContaters]
      }
    })]), _vm._v(" "), _c("td", [_c("div", {
      staticStyle: {
        "min-width": "270px"
      }
    }, [_c("phone-input-custom", {
      attrs: {
        modelValue: reference_familiales_personne_contacter.contact,
        id: "contact_" + index,
        defaultIndicatif: _vm.currentIndicatif
      },
      on: {
        change: function change($event) {
          return _vm.updateNumber($event, index, "reference_familiales_personne_contacters");
        }
      }
    })], 1)]), _vm._v(" "), _c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: reference_familiales_personne_contacter.email,
        expression: "\n                                                            reference_familiales_personne_contacter.email\n                                                        "
      }],
      staticClass: "form-control",
      staticStyle: {
        "min-width": "200px"
      },
      attrs: {
        type: "text",
        id: "nom"
      },
      domProps: {
        value: reference_familiales_personne_contacter.email
      },
      on: {
        input: [function ($event) {
          if ($event.target.composing) return;
          _vm.$set(reference_familiales_personne_contacter, "email", $event.target.value);
        }, _vm.handlePersonnesContaters]
      }
    })]), _vm._v(" "), _c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: reference_familiales_personne_contacter.adresse,
        expression: "\n                                                            reference_familiales_personne_contacter.adresse\n                                                        "
      }],
      staticClass: "form-control",
      staticStyle: {
        "min-width": "200px"
      },
      attrs: {
        type: "text",
        id: "adresse"
      },
      domProps: {
        value: reference_familiales_personne_contacter.adresse
      },
      on: {
        input: [function ($event) {
          if ($event.target.composing) return;
          _vm.$set(reference_familiales_personne_contacter, "adresse", $event.target.value);
        }, _vm.handlePersonnesContaters]
      }
    })]), _vm._v(" "), _c("td", [_c("select", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: reference_familiales_personne_contacter.lien_parente,
        expression: "\n                                                            reference_familiales_personne_contacter.lien_parente\n                                                        "
      }],
      staticClass: "form-select single-select",
      staticStyle: {
        "min-width": "200px"
      },
      attrs: {
        id: "lien_parente"
      },
      on: {
        change: [function ($event) {
          var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
            return o.selected;
          }).map(function (o) {
            var val = "_value" in o ? o._value : o.value;
            return val;
          });
          _vm.$set(reference_familiales_personne_contacter, "lien_parente", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
        }, _vm.handleInput]
      }
    }, _vm._l(_vm.lien_parente, function (lien, indexLien) {
      return _c("option", {
        key: indexLien + "lien",
        domProps: {
          value: lien
        }
      }, [_vm._v("\n                                                        " + _vm._s(lien) + "\n\n                                                    ")]);
    }), 0)]), _vm._v(" "), _c("td", [_c("textarea", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: reference_familiales_personne_contacter.commentaire,
        expression: "\n                                                            reference_familiales_personne_contacter.commentaire\n                                                        "
      }],
      staticClass: "form-control",
      staticStyle: {
        height: "36px",
        "min-width": "230px"
      },
      attrs: {
        id: "commentaire"
      },
      domProps: {
        value: reference_familiales_personne_contacter.commentaire
      },
      on: {
        input: [function ($event) {
          if ($event.target.composing) return;
          _vm.$set(reference_familiales_personne_contacter, "commentaire", $event.target.value);
        }, _vm.handlePersonnesContaters]
      }
    })]), _vm._v(" "), _c("td", [_c("button", {
      staticStyle: {
        "background-color": "transparent",
        border: "none"
      },
      attrs: {
        type: "button",
        title: "Supprimer cette ligne"
      },
      on: {
        click: function click($event) {
          return _vm.remove(index);
        }
      }
    }, [_c("trash-icon", {
      staticClass: "custom-class",
      attrs: {
        size: "21"
      }
    })], 1)])]);
  }), _vm._v(" "), _vm._m(27)], 2)])])])])])]) : _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "relook-header",
    on: {
      click: function click($event) {
        _vm.seen10 = !_vm.seen10;
      }
    }
  }, [_c("h6", {
    attrs: {
      id: "bref-rappel-des-relations-du-client-avec-la-afg-banque-ci"
    }
  }, [_vm._v("\n                                Personnes à contacter en cas d'urgence\n                                "), _c("chevron-down-icon", {
    staticClass: "custom-class",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    },
    attrs: {
      size: "21"
    }
  })], 1)])]), _vm._v(" "), _c("div", {
    staticClass: "mb-5"
  }), _vm._v(" "), _c("button", {
    staticClass: "btn shadow-md text-white position-absolute",
    staticStyle: {
      cursor: "pointer",
      right: "16px",
      bottom: "10px",
      background: "#2c3e50",
      "max-width": "max-content"
    },
    attrs: {
      type: "button",
      name: "button"
    },
    on: {
      click: function click($event) {
        return _vm.retract();
      }
    }
  }, [_vm._v("\n                        Fermer le tableau\n                    ")])])])]) : _c("div", {
    staticClass: "card card-width-height"
  }, [_c("br"), _vm._v(" "), _c("div", {
    staticClass: "card-header hdc pb-0 pt-2"
  }, [_c("h6", {
    staticClass: "head",
    attrs: {
      id: "dcp-ppo1-head"
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col"
  }, [_vm._v("\n                            " + _vm._s(_vm.tb_display_name) + " : Identification du client\n                        ")]), _vm._v(" "), _c("div", {
    staticClass: "col-auto"
  }, [((_vm$formDataToBeWatch2 = _vm.formDataToBeWatched.notes) === null || _vm$formDataToBeWatch2 === void 0 ? void 0 : _vm$formDataToBeWatch2.length) > 0 ? _c("div", {
    staticStyle: {
      display: "inline-block",
      position: "relative"
    }
  }, [_c("span", {
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.openNotesModal(true);
      }
    }
  }, [_c("i", {
    staticClass: "icofont icofont-comment text-white px-2",
    staticStyle: {
      "font-size": "12px"
    },
    attrs: {
      role: "button"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "badge-sm"
  }, [_c("span", [_vm._v("\n                                            " + _vm._s(_vm.formDataToBeWatched.notes.length) + "\n                                        ")])])])]) : _vm._e(), _vm._v(" "), _c("airplay-icon", {
    staticClass: "custom-class mt-1",
    staticStyle: {
      cursor: "pointer",
      margin: "0 5px"
    },
    attrs: {
      size: "0.7x",
      title: "exemple"
    },
    on: {
      click: function click($event) {
        return _vm.$modal.show("identification_client");
      }
    }
  }), _vm._v(" "), _c("chevron-down-icon", {
    staticClass: "custom-class",
    staticStyle: {
      cursor: "pointer"
    },
    attrs: {
      size: "21"
    },
    on: {
      click: function click($event) {
        return _vm.retract();
      }
    }
  })], 1)])])])])], 1), _vm._v(" "), _c("ketri-modal", {
    attrs: {
      name: "identification_client",
      images: ["/images/capture_afg/exemples/ppo_identification_client.png", "/images/capture_afg/exemples/ppo_identification_client2.png"]
    }
  }), _vm._v(" "), _c("note-modal", {
    attrs: {
      name: _vm.tb_name,
      listingNote: _vm.listingNote,
      notes: _vm.formDataToBeWatched.notes
    },
    on: {
      close: function close($event) {
        return _vm.$modal.hide(_vm.tb_name);
      },
      addNote: function addNote($event) {
        return _vm.formDataToBeWatched.notes.unshift($event);
      }
    },
    model: {
      value: _vm.formDataToBeWatched.notes,
      callback: function callback($$v) {
        _vm.$set(_vm.formDataToBeWatched, "notes", $$v);
      },
      expression: "formDataToBeWatched.notes"
    }
  })], 1);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    attrs: {
      "for": "nom"
    }
  }, [_vm._v("Nom "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v("*")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    attrs: {
      "for": "prenoms"
    }
  }, [_vm._v("Prénom "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v("*")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    attrs: {
      "for": "indice"
    }
  }, [_vm._v("ID Client "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v("*")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    attrs: {
      "for": "compte_numero"
    }
  }, [_vm._v("Compte N° "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v("*")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    attrs: {
      "for": "telephone"
    }
  }, [_vm._v("Numéro de téléphone "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v("*")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    attrs: {
      "for": "type_piece"
    }
  }, [_vm._v("Type de pièce d'identité "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v("*")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    attrs: {
      "for": "num_piece"
    }
  }, [_vm._v("Le numéro de la pièce d'identité "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v("*")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    attrs: {
      "for": "date_delivrance_piece"
    }
  }, [_vm._v("Date de délivrance "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v("*")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    attrs: {
      "for": "lieu_delivrance_piece"
    }
  }, [_vm._v("Lieu de délivrance "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v("*")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    attrs: {
      "for": "sexe"
    }
  }, [_vm._v("Genre "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v("*")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    attrs: {
      "for": "date_naissance"
    }
  }, [_vm._v("Date de naissance "), _c("span", {
    staticStyle: {
      color: "red"
    }
  }, [_vm._v("*")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    attrs: {
      "for": "ville_naissance"
    }
  }, [_vm._v("Ville de naissance "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v("*")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    attrs: {
      "for": "ville_residence"
    }
  }, [_vm._v("Ville de résidence "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v("*")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    attrs: {
      "for": "adresse"
    }
  }, [_vm._v("Adresse "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v("*")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "type_client"
    }
  }, [_vm._v("Le client est-il ? "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v("*")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    attrs: {
      "for": "fonction"
    }
  }, [_vm._v("Fonction actuelle "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v("*")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    attrs: {
      "for": "entreprise"
    }
  }, [_vm._v("Entreprise (Employeur)"), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v("*")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    attrs: {
      "for": "date_embauche"
    }
  }, [_vm._v("Date d'embauche"), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v("*")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("td", {
    staticClass: "th text-nowrap"
  }, [_vm._v("Banque"), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v("*")])]), _vm._v(" "), _c("td", {
    staticClass: "th text-nowrap"
  }, [_c("label", {
    staticStyle: {
      "min-width": "344px !important"
    },
    attrs: {
      "for": ""
    }
  }, [_vm._v("Type de compte")]), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v("*")])]), _vm._v(" "), _c("td", {
    staticClass: "th text-nowrap"
  }, [_vm._v("IBAN"), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v("*")])]), _vm._v(" "), _c("td", {
    staticClass: "th text-nowrap"
  }, [_vm._v("Numéro compte"), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v("*")])]), _vm._v(" "), _c("td", {
    staticClass: "th text-nowrap"
  }, [_vm._v("Date ouverture du compte"), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v("*")])]), _vm._v(" "), _c("td", {
    staticClass: "th text-nowrap"
  }, [_vm._v("Solde du compte"), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v("*")])]), _vm._v(" "), _c("td", {
    staticClass: "th text-nowrap"
  }, [_vm._v("Date d'extraction du relevé"), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v("*")])]), _vm._v(" "), _c("td", {
    staticClass: "th text-nowrap"
  })])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("td", {
    staticClass: "th",
    staticStyle: {
      "min-width": "200px"
    }
  }, [_vm._v("Source de revenu "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v("*")])]), _vm._v(" "), _c("td", {
    staticClass: "th",
    staticStyle: {
      "min-width": "150px"
    }
  }, [_vm._v("Montant "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v("*")])]), _vm._v(" "), _c("td", {
    staticClass: "th text-nowrap"
  }, [_vm._v("Eligible "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v("*")])]), _vm._v(" "), _c("td", {
    staticClass: "th text-center",
    attrs: {
      "data-toggle": "tooltip",
      title: "Source de remboursement",
      "data-placement": "top"
    }
  }, [_vm._v("SR "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v("*")])]), _vm._v(" "), _c("td", {
    staticClass: "th",
    staticStyle: {
      "min-width": "150px"
    }
  }, [_vm._v("Périodicité "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v("*")])]), _vm._v(" "), _c("td", {
    staticClass: "th",
    staticStyle: {
      "min-width": "150px"
    }
  }, [_vm._v("Revenu  "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v("*")])]), _vm._v(" "), _c("td", {
    staticClass: "th",
    staticStyle: {
      "min-width": "100px"
    }
  }, [_vm._v("Taux "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v("*")])]), _vm._v(" "), _c("td", {
    staticClass: "th",
    staticStyle: {
      "min-width": "150px"
    }
  }, [_vm._v("Montant pondéré "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v("*")])]), _vm._v(" "), _c("td", {
    staticClass: "th",
    staticStyle: {
      "min-width": "100px"
    }
  }, [_vm._v("TQC AFG BANK "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v("*")])]), _vm._v(" "), _c("td", {
    staticClass: "th",
    staticStyle: {
      "min-width": "150px"
    }
  }, [_vm._v("QC AFG BANK "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v("*")])]), _vm._v(" "), _c("td", {
    staticClass: "th",
    staticStyle: {
      "min-width": "100px"
    }
  }, [_vm._v("TQC Légal "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v("*")])]), _vm._v(" "), _c("td", {
    staticClass: "th",
    staticStyle: {
      "min-width": "150px"
    }
  }, [_vm._v("QC Légal "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v("*")])]), _vm._v(" "), _c("td", {
    staticClass: "th",
    staticStyle: {
      "min-width": "280px"
    }
  }, [_vm._v("Commentaire")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "text-nowrap mx-1 fw-bold",
    attrs: {
      "for": ""
    }
  }, [_c("i", [_vm._v("Salaire brut")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("th", {
    staticClass: "font-weight-bold"
  }, [_c("label", {
    staticClass: "form-label text-nowrap"
  }, [_vm._v("Nom & Prénoms "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v("*")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("th", {
    staticClass: "font-weight-bold"
  }, [_c("label", {
    staticClass: "form-label text-nowrap"
  }, [_vm._v("Numéro de téléphone "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v("*")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("th", {
    staticClass: "font-weight-bold"
  }, [_c("label", {
    staticClass: "form-label text-nowrap"
  }, [_vm._v("E-mail "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v("*")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("th", {
    staticClass: "font-weight-bold"
  }, [_c("label", {
    staticClass: "form-label"
  }, [_vm._v("Adresse "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v("*")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("th", {
    staticClass: "font-weight-bold"
  }, [_c("label", {
    staticClass: "form-label text-nowrap"
  }, [_vm._v("Lien de\n                                                        parenté "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v("*")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("th", {
    staticClass: "font-weight-bold"
  }, [_c("label", {
    staticClass: "form-label"
  }, [_vm._v("Commentaire")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("tr", [_c("td"), _vm._v(" "), _c("td"), _vm._v(" "), _c("td"), _vm._v(" "), _c("td"), _vm._v(" "), _c("td"), _c("td")]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/MothAndYearInput.vue?vue&type=template&id=67421d8a&scoped=true":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/MothAndYearInput.vue?vue&type=template&id=67421d8a&scoped=true ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", _vm._b({
    ref: _vm.id,
    staticClass: "d-flex",
    staticStyle: {
      "min-width": "72%"
    }
  }, "div", _vm.$attrs, false), [_c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.month,
      expression: "month"
    }],
    staticClass: "mx-1 flex-2 form-control",
    "class": _vm.classname,
    style: _vm.background + ";" + _vm.color,
    attrs: {
      disabled: _vm.readonly_ || _vm.viewonly
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
      }, _vm.handleInput]
    }
  }, [!_vm.readonly_ && !_vm.viewonly ? _c("option", {
    attrs: {
      selected: "",
      disabled: "",
      value: ""
    }
  }, [_vm._v("MM")]) : _vm._e(), _vm._v(" "), !_vm.readonly_ ? _c("option", {
    attrs: {
      value: ""
    }
  }) : _vm._e(), _vm._v(" "), _vm._l(_vm.months, function (el, index) {
    return _c("option", {
      key: index,
      domProps: {
        value: el.value
      }
    }, [_vm._v("\n      " + _vm._s(el.intitule) + "\n    ")]);
  })], 2), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.year,
      expression: "year"
    }],
    staticClass: "form-control flex-1",
    "class": _vm.classname,
    style: "min-width: 45px;" + _vm.background + ";" + _vm.color,
    attrs: {
      type: "text",
      readonly: _vm.readonly_ || _vm.viewonly,
      placeholder: "AAAA",
      maxlength: "4"
    },
    domProps: {
      value: _vm.year
    },
    on: {
      input: [function ($event) {
        if ($event.target.composing) return;
        _vm.year = $event.target.value;
      }, _vm.handleInput]
    }
  })]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/PhoneInput.vue?vue&type=template&id=27e5a94b&scoped=true":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/PhoneInput.vue?vue&type=template&id=27e5a94b&scoped=true ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "input-group"
  }, [_c("div", {
    staticClass: "input-group-prepend d-flex w-100"
  }, [_c("div", {
    staticClass: "position-relative",
    staticStyle: {
      width: "100px",
      "border-radius": "0"
    }
  }, [_c("div", [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.query,
      expression: "query"
    }],
    staticClass: "form-control shadow-none",
    staticStyle: {
      "border-radius": "0"
    },
    attrs: {
      disabled: _vm.isDisabled,
      type: "text",
      placeholder: "+"
    },
    domProps: {
      value: _vm.query
    },
    on: {
      focusout: function focusout($event) {
        _vm.opened = false;
      },
      focusin: function focusin($event) {
        _vm.opened = true;
      },
      input: [function ($event) {
        if ($event.target.composing) return;
        _vm.query = $event.target.value;
      }, _vm.filterItems]
    }
  })]), _vm._v(" "), _vm.opened || _vm.stayOpened ? _c("div", {
    staticClass: "options w-100 bg-white shadow-sm overflow-x-hidden overflow-auto",
    staticStyle: {
      "max-height": "350px"
    }
  }, [_c("ul", {
    staticClass: "list-group border-0",
    on: {
      mouseover: function mouseover($event) {
        _vm.stayOpened = true;
      },
      mouseleave: function mouseleave($event) {
        _vm.stayOpened = false;
      }
    }
  }, _vm._l(_vm.filteredItems, function (item, index) {
    return _c("li", {
      key: index,
      staticClass: "list-group-item p-1 border-top-0 border-left-0 border-right-0",
      "class": {
        "rounded-bottom": index === _vm.filteredItems.length - 1,
        "rounded-0": index !== _vm.filteredItems.length - 1
      },
      attrs: {
        role: "button"
      },
      on: {
        click: function click($event) {
          return _vm.onUpdate(item.indicatif);
        }
      }
    }, [_c("div", {
      staticClass: "d-flex align-items-center justify-item-start"
    }, [_c("span", {
      staticStyle: {
        "font-size": "14px"
      }
    }, [_vm._v(_vm._s(item.indicatif))])])]);
  }), 0)]) : _vm._e()]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.numberData,
      expression: "numberData"
    }],
    staticClass: "form-control w-100 rounded-l-0 shadow-none",
    staticStyle: {
      "border-radius": "0"
    },
    attrs: {
      disabled: _vm.isDisabled,
      type: "tel",
      placeholder: "Numéro de téléphone"
    },
    domProps: {
      value: _vm.numberData
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.numberData = $event.target.value;
      }
    }
  })])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/PhoneInputCustom.vue?vue&type=template&id=309843c8&scoped=true":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/PhoneInputCustom.vue?vue&type=template&id=309843c8&scoped=true ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "input-group"
  }, [_c("div", {
    staticClass: "input-group-prepend d-flex w-100"
  }, [_c("div", {
    staticClass: "position-relative",
    staticStyle: {
      width: "100px",
      "border-radius": "0"
    }
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.query,
      expression: "query"
    }],
    staticClass: "form-control shadow-none",
    staticStyle: {
      "border-radius": ".375rem 0 0 .375rem",
      "border-right": "0"
    },
    attrs: {
      disabled: _vm.isDisabled,
      type: "text"
    },
    domProps: {
      value: _vm.query
    },
    on: {
      focus: _vm.onFocus,
      blur: _vm.onBlur,
      input: [function ($event) {
        if ($event.target.composing) return;
        _vm.query = $event.target.value;
      }, _vm.emitPhone]
    }
  }), _vm._v(" "), _vm.opened ? _c("div", {
    staticClass: "options w-100 bg-white shadow-sm",
    staticStyle: {
      "max-height": "300px",
      overflow: "auto"
    }
  }, [_c("ul", {
    staticClass: "list-group"
  }, _vm._l(_vm.filteredItems, function (item, index) {
    return _c("li", {
      key: index,
      staticClass: "list-group-item p-1",
      "class": {
        "rounded-bottom": index === _vm.filteredItems.length - 1,
        "rounded-0": index !== _vm.filteredItems.length - 1
      },
      on: {
        mousedown: function mousedown($event) {
          $event.preventDefault();
          return _vm.selectIndicatif(item.indicatif);
        }
      }
    }, [_vm._v("\n                        " + _vm._s(item.indicatif) + "\n                    ")]);
  }), 0)]) : _vm._e()]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.numberData,
      expression: "numberData"
    }],
    staticClass: "form-control w-100 rounded-l-0 shadow-none",
    staticStyle: {
      "border-radius": "0 .375rem .375rem 0px"
    },
    attrs: {
      disabled: _vm.isDisabled,
      type: "tel"
    },
    domProps: {
      value: _vm.numberData
    },
    on: {
      input: [function ($event) {
        if ($event.target.composing) return;
        _vm.numberData = $event.target.value;
      }, _vm.emitPhone]
    }
  })])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/decouvert_privilege/DC-PV0.vue?vue&type=style&index=0&id=71c6ea18&lang=css&scoped=true":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/decouvert_privilege/DC-PV0.vue?vue&type=style&index=0&id=71c6ea18&lang=css&scoped=true ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n*[data-v-71c6ea18] {\r\n    font-family: \"Google sans\";\n}\nlabel[data-v-71c6ea18] {\r\n    height: 10px;\r\n    font-size: 13px;\n}\ninput[data-v-71c6ea18],\r\nselect[data-v-71c6ea18],\r\ntextarea[data-v-71c6ea18] {\r\n    /* height: 35px; */\r\n    border-color: #34495e;\r\n    color: #57606f;\r\n    font-size: 13px;\r\n    font-weight: bold;\n}\n.th[data-v-71c6ea18] {\r\n    padding: 4px;\r\n    padding-bottom: 0px;\n}\n.card-width-height[data-v-71c6ea18] {\r\n    width: 100%;\r\n    height: 100%;\n}\n.head[data-v-71c6ea18] {\r\n    color: #f1f2f6;\r\n    font-size: 22px;\n}\n.hdc[data-v-71c6ea18] {\r\n    background-color: #57606f;\n}\n.relook-header[data-v-71c6ea18] {\r\n    color: #000;\r\n    background-color: #f4f3f3;\r\n    padding: 5px;\r\n    border-bottom: 1px solid #b6b8bb;\n}\n.badge-sm[data-v-71c6ea18] {\r\n    display: inline-block;\r\n    width: 15px;\r\n    height: 15px;\r\n    background: rgba(255, 0, 0, 0.882);\r\n    color: white;\r\n    font-size: 12px;\r\n    font-weight: 500;\r\n    border-radius: 100%;\r\n    position: absolute;\r\n    top: -20%;\r\n    left: 55%;\r\n    text-align: center;\n}\n.imageM22[data-v-71c6ea18] {\r\n    background: url(\"/images/capture_cofina/exemple_source_revenus.png\") no-repeat;\r\n    background-position: center;\r\n    background-size: contain;\r\n    width: 1000px;\r\n    height: 200px;\n}\ntd[data-v-71c6ea18],\r\np[data-v-71c6ea18] {\r\n    font-size: 13px;\n}\n.relook-header[data-v-71c6ea18] {\r\n    color: #000;\r\n    background-color: #f4f3f3;\r\n    padding: 5px;\r\n    border-bottom: 1px solid #b6b8bb;\n}\n.width-100[data-v-71c6ea18] {\r\n    width: 90%;\n}\n.personne input[data-v-71c6ea18] {\r\n    width: 135px;\n}\n._border_right[data-v-71c6ea18] {\r\n    border-right: 1px solid;\n}\n.text-red[data-v-71c6ea18] {\r\n    color: red;\n}\n.multiselect-option p[data-v-71c6ea18] {\r\n    margin: 0 !important;\r\n    padding: 10px !important;\n}\n.vertical-middle[data-v-71c6ea18] {\r\n    vertical-align: middle;\n}\ninput[type=\"checkbox\"][data-v-71c6ea18] {\r\n    height: 18px;\r\n    width: 20px;\r\n    margin-right: 5px;\n}\n.revenu input[type=\"checkbox\"][data-v-71c6ea18],\r\n.engagement input[type=\"checkbox\"][data-v-71c6ea18],\r\n.garantie input[type=\"checkbox\"][data-v-71c6ea18] {\r\n    height: 26px;\r\n    width: 24px;\r\n    margin-right: 5px;\n}\n.mt-2_5-px[data-v-71c6ea18] {\r\n    margin-top: 2.5px;\n}\n.bg-blue[data-v-71c6ea18] {\r\n    background-color: #00ffff21 !important;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/MothAndYearInput.vue?vue&type=style&index=0&id=67421d8a&scoped=true&lang=css":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/MothAndYearInput.vue?vue&type=style&index=0&id=67421d8a&scoped=true&lang=css ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.d-flex[data-v-67421d8a] {\r\n  display: flex !important;\n}\n.flex-1[data-v-67421d8a] {\r\n  flex: 1;\n}\n.flex-2[data-v-67421d8a] {\r\n  flex: 2;\n}\n.mx-1[data-v-67421d8a] {\r\n  margin: 0 0.1rem !important;\n}\ninput[data-v-67421d8a],\r\nselect[data-v-67421d8a] {\r\n  border-color: #34495e;\r\n  color: #57606f;\r\n  font-size: 13px;\r\n  font-weight: bold;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/PhoneInput.vue?vue&type=style&index=0&id=27e5a94b&scoped=true&lang=css":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/PhoneInput.vue?vue&type=style&index=0&id=27e5a94b&scoped=true&lang=css ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.options[data-v-27e5a94b] {\r\n  position: absolute;\r\n  z-index: 1000;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/PhoneInputCustom.vue?vue&type=style&index=0&id=309843c8&scoped=true&lang=css":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/PhoneInputCustom.vue?vue&type=style&index=0&id=309843c8&scoped=true&lang=css ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.options[data-v-309843c8] {\r\n    position: absolute;\r\n    z-index: 1000;\n}\ninput[data-v-309843c8],\r\nselect[data-v-309843c8] {\r\n    border-color: #34495e;\r\n    color: #57606f;\r\n    font-size: 13px;\r\n    font-weight: bold;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/decouvert_privilege/DC-PV0.vue?vue&type=style&index=0&id=71c6ea18&lang=css&scoped=true":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/decouvert_privilege/DC-PV0.vue?vue&type=style&index=0&id=71c6ea18&lang=css&scoped=true ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DC_PV0_vue_vue_type_style_index_0_id_71c6ea18_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DC-PV0.vue?vue&type=style&index=0&id=71c6ea18&lang=css&scoped=true */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/decouvert_privilege/DC-PV0.vue?vue&type=style&index=0&id=71c6ea18&lang=css&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DC_PV0_vue_vue_type_style_index_0_id_71c6ea18_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DC_PV0_vue_vue_type_style_index_0_id_71c6ea18_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/MothAndYearInput.vue?vue&type=style&index=0&id=67421d8a&scoped=true&lang=css":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/MothAndYearInput.vue?vue&type=style&index=0&id=67421d8a&scoped=true&lang=css ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MothAndYearInput_vue_vue_type_style_index_0_id_67421d8a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MothAndYearInput.vue?vue&type=style&index=0&id=67421d8a&scoped=true&lang=css */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/MothAndYearInput.vue?vue&type=style&index=0&id=67421d8a&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MothAndYearInput_vue_vue_type_style_index_0_id_67421d8a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MothAndYearInput_vue_vue_type_style_index_0_id_67421d8a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/PhoneInput.vue?vue&type=style&index=0&id=27e5a94b&scoped=true&lang=css":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/PhoneInput.vue?vue&type=style&index=0&id=27e5a94b&scoped=true&lang=css ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PhoneInput_vue_vue_type_style_index_0_id_27e5a94b_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PhoneInput.vue?vue&type=style&index=0&id=27e5a94b&scoped=true&lang=css */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/PhoneInput.vue?vue&type=style&index=0&id=27e5a94b&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PhoneInput_vue_vue_type_style_index_0_id_27e5a94b_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PhoneInput_vue_vue_type_style_index_0_id_27e5a94b_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/PhoneInputCustom.vue?vue&type=style&index=0&id=309843c8&scoped=true&lang=css":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/PhoneInputCustom.vue?vue&type=style&index=0&id=309843c8&scoped=true&lang=css ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PhoneInputCustom_vue_vue_type_style_index_0_id_309843c8_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PhoneInputCustom.vue?vue&type=style&index=0&id=309843c8&scoped=true&lang=css */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/PhoneInputCustom.vue?vue&type=style&index=0&id=309843c8&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PhoneInputCustom_vue_vue_type_style_index_0_id_309843c8_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PhoneInputCustom_vue_vue_type_style_index_0_id_309843c8_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/forms/afg/decouvert_privilege/DC-PV0.vue":
/*!**************************************************************************!*\
  !*** ./resources/js/components/forms/afg/decouvert_privilege/DC-PV0.vue ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DC_PV0_vue_vue_type_template_id_71c6ea18_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DC-PV0.vue?vue&type=template&id=71c6ea18&scoped=true */ "./resources/js/components/forms/afg/decouvert_privilege/DC-PV0.vue?vue&type=template&id=71c6ea18&scoped=true");
/* harmony import */ var _DC_PV0_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DC-PV0.vue?vue&type=script&lang=js */ "./resources/js/components/forms/afg/decouvert_privilege/DC-PV0.vue?vue&type=script&lang=js");
/* harmony import */ var _DC_PV0_vue_vue_type_style_index_0_id_71c6ea18_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DC-PV0.vue?vue&type=style&index=0&id=71c6ea18&lang=css&scoped=true */ "./resources/js/components/forms/afg/decouvert_privilege/DC-PV0.vue?vue&type=style&index=0&id=71c6ea18&lang=css&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _DC_PV0_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _DC_PV0_vue_vue_type_template_id_71c6ea18_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _DC_PV0_vue_vue_type_template_id_71c6ea18_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "71c6ea18",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/forms/afg/decouvert_privilege/DC-PV0.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/forms/afg/decouvert_privilege/DC-PV0.vue?vue&type=script&lang=js":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/forms/afg/decouvert_privilege/DC-PV0.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DC_PV0_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DC-PV0.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/decouvert_privilege/DC-PV0.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DC_PV0_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/forms/afg/decouvert_privilege/DC-PV0.vue?vue&type=style&index=0&id=71c6ea18&lang=css&scoped=true":
/*!**********************************************************************************************************************************!*\
  !*** ./resources/js/components/forms/afg/decouvert_privilege/DC-PV0.vue?vue&type=style&index=0&id=71c6ea18&lang=css&scoped=true ***!
  \**********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DC_PV0_vue_vue_type_style_index_0_id_71c6ea18_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DC-PV0.vue?vue&type=style&index=0&id=71c6ea18&lang=css&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/decouvert_privilege/DC-PV0.vue?vue&type=style&index=0&id=71c6ea18&lang=css&scoped=true");


/***/ }),

/***/ "./resources/js/components/forms/afg/decouvert_privilege/DC-PV0.vue?vue&type=template&id=71c6ea18&scoped=true":
/*!********************************************************************************************************************!*\
  !*** ./resources/js/components/forms/afg/decouvert_privilege/DC-PV0.vue?vue&type=template&id=71c6ea18&scoped=true ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DC_PV0_vue_vue_type_template_id_71c6ea18_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DC_PV0_vue_vue_type_template_id_71c6ea18_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DC_PV0_vue_vue_type_template_id_71c6ea18_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DC-PV0.vue?vue&type=template&id=71c6ea18&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/decouvert_privilege/DC-PV0.vue?vue&type=template&id=71c6ea18&scoped=true");


/***/ }),

/***/ "./resources/js/components/shared/MothAndYearInput.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/shared/MothAndYearInput.vue ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _MothAndYearInput_vue_vue_type_template_id_67421d8a_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MothAndYearInput.vue?vue&type=template&id=67421d8a&scoped=true */ "./resources/js/components/shared/MothAndYearInput.vue?vue&type=template&id=67421d8a&scoped=true");
/* harmony import */ var _MothAndYearInput_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MothAndYearInput.vue?vue&type=script&lang=js */ "./resources/js/components/shared/MothAndYearInput.vue?vue&type=script&lang=js");
/* harmony import */ var _MothAndYearInput_vue_vue_type_style_index_0_id_67421d8a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MothAndYearInput.vue?vue&type=style&index=0&id=67421d8a&scoped=true&lang=css */ "./resources/js/components/shared/MothAndYearInput.vue?vue&type=style&index=0&id=67421d8a&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _MothAndYearInput_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _MothAndYearInput_vue_vue_type_template_id_67421d8a_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _MothAndYearInput_vue_vue_type_template_id_67421d8a_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "67421d8a",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/shared/MothAndYearInput.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/shared/MothAndYearInput.vue?vue&type=script&lang=js":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/shared/MothAndYearInput.vue?vue&type=script&lang=js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MothAndYearInput_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MothAndYearInput.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/MothAndYearInput.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MothAndYearInput_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/shared/MothAndYearInput.vue?vue&type=style&index=0&id=67421d8a&scoped=true&lang=css":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/components/shared/MothAndYearInput.vue?vue&type=style&index=0&id=67421d8a&scoped=true&lang=css ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MothAndYearInput_vue_vue_type_style_index_0_id_67421d8a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MothAndYearInput.vue?vue&type=style&index=0&id=67421d8a&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/MothAndYearInput.vue?vue&type=style&index=0&id=67421d8a&scoped=true&lang=css");


/***/ }),

/***/ "./resources/js/components/shared/MothAndYearInput.vue?vue&type=template&id=67421d8a&scoped=true":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/shared/MothAndYearInput.vue?vue&type=template&id=67421d8a&scoped=true ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MothAndYearInput_vue_vue_type_template_id_67421d8a_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MothAndYearInput_vue_vue_type_template_id_67421d8a_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MothAndYearInput_vue_vue_type_template_id_67421d8a_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MothAndYearInput.vue?vue&type=template&id=67421d8a&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/MothAndYearInput.vue?vue&type=template&id=67421d8a&scoped=true");


/***/ }),

/***/ "./resources/js/components/shared/PhoneInput.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/shared/PhoneInput.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PhoneInput_vue_vue_type_template_id_27e5a94b_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PhoneInput.vue?vue&type=template&id=27e5a94b&scoped=true */ "./resources/js/components/shared/PhoneInput.vue?vue&type=template&id=27e5a94b&scoped=true");
/* harmony import */ var _PhoneInput_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PhoneInput.vue?vue&type=script&lang=js */ "./resources/js/components/shared/PhoneInput.vue?vue&type=script&lang=js");
/* harmony import */ var _PhoneInput_vue_vue_type_style_index_0_id_27e5a94b_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PhoneInput.vue?vue&type=style&index=0&id=27e5a94b&scoped=true&lang=css */ "./resources/js/components/shared/PhoneInput.vue?vue&type=style&index=0&id=27e5a94b&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _PhoneInput_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _PhoneInput_vue_vue_type_template_id_27e5a94b_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _PhoneInput_vue_vue_type_template_id_27e5a94b_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "27e5a94b",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/shared/PhoneInput.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/shared/PhoneInput.vue?vue&type=script&lang=js":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/shared/PhoneInput.vue?vue&type=script&lang=js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PhoneInput_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PhoneInput.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/PhoneInput.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PhoneInput_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/shared/PhoneInput.vue?vue&type=style&index=0&id=27e5a94b&scoped=true&lang=css":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/components/shared/PhoneInput.vue?vue&type=style&index=0&id=27e5a94b&scoped=true&lang=css ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PhoneInput_vue_vue_type_style_index_0_id_27e5a94b_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PhoneInput.vue?vue&type=style&index=0&id=27e5a94b&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/PhoneInput.vue?vue&type=style&index=0&id=27e5a94b&scoped=true&lang=css");


/***/ }),

/***/ "./resources/js/components/shared/PhoneInput.vue?vue&type=template&id=27e5a94b&scoped=true":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/shared/PhoneInput.vue?vue&type=template&id=27e5a94b&scoped=true ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PhoneInput_vue_vue_type_template_id_27e5a94b_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PhoneInput_vue_vue_type_template_id_27e5a94b_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PhoneInput_vue_vue_type_template_id_27e5a94b_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PhoneInput.vue?vue&type=template&id=27e5a94b&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/PhoneInput.vue?vue&type=template&id=27e5a94b&scoped=true");


/***/ }),

/***/ "./resources/js/components/shared/PhoneInputCustom.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/shared/PhoneInputCustom.vue ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PhoneInputCustom_vue_vue_type_template_id_309843c8_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PhoneInputCustom.vue?vue&type=template&id=309843c8&scoped=true */ "./resources/js/components/shared/PhoneInputCustom.vue?vue&type=template&id=309843c8&scoped=true");
/* harmony import */ var _PhoneInputCustom_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PhoneInputCustom.vue?vue&type=script&lang=js */ "./resources/js/components/shared/PhoneInputCustom.vue?vue&type=script&lang=js");
/* harmony import */ var _PhoneInputCustom_vue_vue_type_style_index_0_id_309843c8_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PhoneInputCustom.vue?vue&type=style&index=0&id=309843c8&scoped=true&lang=css */ "./resources/js/components/shared/PhoneInputCustom.vue?vue&type=style&index=0&id=309843c8&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _PhoneInputCustom_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _PhoneInputCustom_vue_vue_type_template_id_309843c8_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _PhoneInputCustom_vue_vue_type_template_id_309843c8_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "309843c8",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/shared/PhoneInputCustom.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/shared/PhoneInputCustom.vue?vue&type=script&lang=js":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/shared/PhoneInputCustom.vue?vue&type=script&lang=js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PhoneInputCustom_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PhoneInputCustom.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/PhoneInputCustom.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PhoneInputCustom_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/shared/PhoneInputCustom.vue?vue&type=style&index=0&id=309843c8&scoped=true&lang=css":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/components/shared/PhoneInputCustom.vue?vue&type=style&index=0&id=309843c8&scoped=true&lang=css ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PhoneInputCustom_vue_vue_type_style_index_0_id_309843c8_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PhoneInputCustom.vue?vue&type=style&index=0&id=309843c8&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/PhoneInputCustom.vue?vue&type=style&index=0&id=309843c8&scoped=true&lang=css");


/***/ }),

/***/ "./resources/js/components/shared/PhoneInputCustom.vue?vue&type=template&id=309843c8&scoped=true":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/shared/PhoneInputCustom.vue?vue&type=template&id=309843c8&scoped=true ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PhoneInputCustom_vue_vue_type_template_id_309843c8_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PhoneInputCustom_vue_vue_type_template_id_309843c8_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PhoneInputCustom_vue_vue_type_template_id_309843c8_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PhoneInputCustom.vue?vue&type=template&id=309843c8&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/PhoneInputCustom.vue?vue&type=template&id=309843c8&scoped=true");


/***/ }),

/***/ "./resources/js/helpers/phoneCodes.js":
/*!********************************************!*\
  !*** ./resources/js/helpers/phoneCodes.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([{
  flag: "",
  indicatif: "+93"
},
// Afghanistan
{
  flag: "",
  indicatif: "+27"
},
// South Africa
{
  flag: "",
  indicatif: "+355"
},
// Albania
{
  flag: "",
  indicatif: "+213"
},
// Algeria
{
  flag: "",
  indicatif: "+49"
},
// Germany
{
  flag: "",
  indicatif: "+376"
},
// Andorra
{
  flag: "",
  indicatif: "+244"
},
// Angola
{
  flag: "",
  indicatif: "+1264"
},
// Anguilla
{
  flag: "",
  indicatif: "+1268"
},
// Antigua and Barbuda
{
  flag: "",
  indicatif: "+966"
},
// Saudi Arabia
{
  flag: "",
  indicatif: "+54"
},
// Argentina
{
  flag: "",
  indicatif: "+374"
},
// Armenia
{
  flag: "",
  indicatif: "+297"
},
// Aruba
{
  flag: "",
  indicatif: "+247"
},
// Ascension Island
{
  flag: "",
  indicatif: "+61"
},
// Australia
{
  flag: "",
  indicatif: "+43"
},
// Austria
{
  flag: "",
  indicatif: "+994"
},
// Azerbaijan
{
  flag: "",
  indicatif: "+1242"
},
// Bahamas
{
  flag: "",
  indicatif: "+973"
},
// Bahrain
{
  flag: "",
  indicatif: "+880"
},
// Bangladesh
{
  flag: "",
  indicatif: "+1246"
},
// Barbados
{
  flag: "",
  indicatif: "+32"
},
// Belgium
{
  flag: "",
  indicatif: "+501"
},
// Belize
{
  flag: "",
  indicatif: "+229"
},
// Benin
{
  flag: "",
  indicatif: "+1441"
},
// Bermuda
{
  flag: "",
  indicatif: "+975"
},
// Bhutan
{
  flag: "",
  indicatif: "+375"
},
// Belarus
{
  flag: "",
  indicatif: "+95"
},
// Myanmar
{
  flag: "",
  indicatif: "+591"
},
// Bolivia
{
  flag: "",
  indicatif: "+387"
},
// Bosnia and Herzegovina
{
  flag: "",
  indicatif: "+267"
},
// Botswana
{
  flag: "",
  indicatif: "+55"
},
// Brazil
{
  flag: "",
  indicatif: "+673"
},
// Brunei
{
  flag: "",
  indicatif: "+359"
},
// Bulgaria
{
  flag: "",
  indicatif: "+226"
},
// Burkina Faso
{
  flag: "",
  indicatif: "+257"
},
// Burundi
{
  flag: "",
  indicatif: "+855"
},
// Cambodia
{
  flag: "",
  indicatif: "+237"
},
// Cameroon
{
  flag: "",
  indicatif: "+1"
},
// Canada
{
  flag: "",
  indicatif: "+238"
},
// Cape Verde
{
  flag: "",
  indicatif: "+1345"
},
// Cayman Islands
{
  flag: "",
  indicatif: "+236"
},
// Central African Republic
{
  flag: "",
  indicatif: "+56"
},
// Chile
{
  flag: "",
  indicatif: "+86"
},
// China
{
  flag: "",
  indicatif: "+357"
},
// Cyprus
{
  flag: "",
  indicatif: "+57"
},
// Colombia
{
  flag: "",
  indicatif: "+269"
},
// Comoros
{
  flag: "",
  indicatif: "+243"
},
// Democratic Republic of the Congo
{
  flag: "",
  indicatif: "+242"
},
// Republic of the Congo
{
  flag: "",
  indicatif: "+682"
},
// Cook Islands
{
  flag: "",
  indicatif: "+850"
},
// North Korea
{
  flag: "",
  indicatif: "+82"
},
// South Korea
{
  flag: "",
  indicatif: "+506"
},
// Costa Rica
{
  flag: "",
  indicatif: "+225"
},
// Côte d'Ivoire
{
  flag: "",
  indicatif: "+385"
},
// Croatia
{
  flag: "",
  indicatif: "+53"
},
// Cuba
{
  flag: "",
  indicatif: "+599"
},
// Curaçao
{
  flag: "",
  indicatif: "+45"
},
// Denmark
{
  flag: "",
  indicatif: "+246"
},
// British Indian Ocean Territory
{
  flag: "",
  indicatif: "+253"
},
// Djibouti
{
  flag: "",
  indicatif: "+1767"
},
// Dominica
{
  flag: "",
  indicatif: "+20"
},
// Egypt
{
  flag: "",
  indicatif: "+971"
},
// United Arab Emirates
{
  flag: "",
  indicatif: "+593"
},
// Ecuador
{
  flag: "",
  indicatif: "+291"
},
// Eritrea
{
  flag: "",
  indicatif: "+34"
},
// Spain
{
  flag: "",
  indicatif: "+372"
},
// Estonia
{
  flag: "",
  indicatif: "+251"
},
// Ethiopia
{
  flag: "",
  indicatif: "+298"
},
// Faroe Islands
{
  flag: "",
  indicatif: "+679"
},
// Fiji
{
  flag: "",
  indicatif: "+358"
},
// Finland
{
  flag: "",
  indicatif: "+33"
},
// France
{
  flag: "",
  indicatif: "+241"
},
// Gabon
{
  flag: "",
  indicatif: "+220"
},
// The Gambia
{
  flag: "",
  indicatif: "+995"
},
// Georgia
{
  flag: "",
  indicatif: "+233"
},
// Ghana
{
  flag: "",
  indicatif: "+350"
},
// Gibraltar
{
  flag: "",
  indicatif: "+30"
},
// Greece
{
  flag: "",
  indicatif: "+1473"
},
// Grenada
{
  flag: "",
  indicatif: "+299"
},
// Greenland
{
  flag: "",
  indicatif: "+590"
},
// Guadeloupe
{
  flag: "",
  indicatif: "+1671"
},
// Guam
{
  flag: "",
  indicatif: "+502"
},
// Guatemala
{
  flag: "",
  indicatif: "+224"
},
// Guinea
{
  flag: "",
  indicatif: "+240"
},
// Equatorial Guinea
{
  flag: "",
  indicatif: "+245"
},
// Guinea-Bissau
{
  flag: "",
  indicatif: "+592"
},
// Guyana
{
  flag: "",
  indicatif: "+594"
},
// French Guiana
{
  flag: "",
  indicatif: "+509"
},
// Haiti
{
  flag: "",
  indicatif: "+504"
},
// Honduras
{
  flag: "",
  indicatif: "+852"
},
// Hong Kong
{
  flag: "",
  indicatif: "+36"
},
// Hungary
{
  flag: "",
  indicatif: "+91"
},
// India
{
  flag: "",
  indicatif: "+62"
},
// Indonesia
{
  flag: "",
  indicatif: "+964"
},
// Iraq
{
  flag: "",
  indicatif: "+98"
},
// Iran
{
  flag: "",
  indicatif: "+353"
},
// Ireland
{
  flag: "",
  indicatif: "+354"
},
// Iceland
{
  flag: "",
  indicatif: "+972"
},
// Israel
{
  flag: "",
  indicatif: "+39"
},
// Italy
{
  flag: "",
  indicatif: "+1876"
},
// Jamaica
{
  flag: "",
  indicatif: "+81"
},
// Japan
{
  flag: "",
  indicatif: "+962"
},
// Jordan
{
  flag: "",
  indicatif: "+7"
},
// Kazakhstan
{
  flag: "",
  indicatif: "+254"
},
// Kenya
{
  flag: "",
  indicatif: "+996"
},
// Kyrgyzstan
{
  flag: "",
  indicatif: "+686"
},
// Kiribati
{
  flag: "",
  indicatif: "+383"
},
// Kosovo
{
  flag: "",
  indicatif: "+965"
},
// Kuwait
{
  flag: "",
  indicatif: "+856"
},
// Laos
{
  flag: "",
  indicatif: "+266"
},
// Lesotho
{
  flag: "",
  indicatif: "+371"
},
// Latvia
{
  flag: "",
  indicatif: "+961"
},
// Lebanon
{
  flag: "",
  indicatif: "+231"
},
// Liberia
{
  flag: "",
  indicatif: "+218"
},
// Libya
{
  flag: "",
  indicatif: "+423"
},
// Liechtenstein
{
  flag: "",
  indicatif: "+370"
},
// Lithuania
{
  flag: "",
  indicatif: "+352"
},
// Luxembourg
{
  flag: "",
  indicatif: "+853"
},
// Macau
{
  flag: "",
  indicatif: "+389"
},
// North Macedonia
{
  flag: "",
  indicatif: "+261"
},
// Madagascar
{
  flag: "",
  indicatif: "+60"
},
// Malaysia
{
  flag: "",
  indicatif: "+265"
},
// Malawi
{
  flag: "",
  indicatif: "+960"
},
// Maldives
{
  flag: "",
  indicatif: "+223"
},
// Mali
{
  flag: "",
  indicatif: "+500"
},
// Falkland Islands
{
  flag: "",
  indicatif: "+356"
},
// Malta
{
  flag: "",
  indicatif: "+1670"
},
// Northern Mariana Islands
{
  flag: "",
  indicatif: "+212"
},
// Morocco
{
  flag: "",
  indicatif: "+692"
},
// Marshall Islands
{
  flag: "",
  indicatif: "+596"
},
// Martinique
{
  flag: "",
  indicatif: "+230"
},
// Mauritius
{
  flag: "",
  indicatif: "+222"
},
// Mauritania
{
  flag: "",
  indicatif: "+262"
},
// Mayotte/Reunion
{
  flag: "",
  indicatif: "+52"
},
// Mexico
{
  flag: "",
  indicatif: "+691"
},
// Micronesia
{
  flag: "",
  indicatif: "+373"
},
// Moldova
{
  flag: "",
  indicatif: "+377"
},
// Monaco
{
  flag: "",
  indicatif: "+976"
},
// Mongolia
{
  flag: "",
  indicatif: "+382"
},
// Montenegro
{
  flag: "",
  indicatif: "+1664"
},
// Montserrat
{
  flag: "",
  indicatif: "+258"
},
// Mozambique
{
  flag: "",
  indicatif: "+264"
},
// Namibia
{
  flag: "",
  indicatif: "+674"
},
// Nauru
{
  flag: "",
  indicatif: "+977"
},
// Nepal
{
  flag: "",
  indicatif: "+505"
},
// Nicaragua
{
  flag: "",
  indicatif: "+227"
},
// Niger
{
  flag: "",
  indicatif: "+234"
},
// Nigeria
{
  flag: "",
  indicatif: "+683"
},
// Niue
{
  flag: "",
  indicatif: "+47"
},
// Norway
{
  flag: "",
  indicatif: "+687"
},
// New Caledonia
{
  flag: "",
  indicatif: "+64"
},
// New Zealand
{
  flag: "",
  indicatif: "+968"
},
// Oman
{
  flag: "",
  indicatif: "+256"
},
// Uganda
{
  flag: "",
  indicatif: "+998"
},
// Uzbekistan
{
  flag: "",
  indicatif: "+92"
},
// Pakistan
{
  flag: "",
  indicatif: "+680"
},
// Palau
{
  flag: "",
  indicatif: "+970"
},
// Palestine
{
  flag: "",
  indicatif: "+507"
},
// Panama
{
  flag: "",
  indicatif: "+675"
},
// Papua New Guinea
{
  flag: "",
  indicatif: "+595"
},
// Paraguay
{
  flag: "",
  indicatif: "+31"
},
// Netherlands
{
  flag: "",
  indicatif: "+51"
},
// Peru
{
  flag: "",
  indicatif: "+63"
},
// Philippines
{
  flag: "",
  indicatif: "+48"
},
// Poland
{
  flag: "",
  indicatif: "+689"
},
// French Polynesia
{
  flag: "",
  indicatif: "+351"
},
// Portugal
{
  flag: "",
  indicatif: "+974"
},
// Qatar
{
  flag: "",
  indicatif: "+40"
},
// Romania
{
  flag: "",
  indicatif: "+44"
},
// United Kingdom
{
  flag: "",
  indicatif: "+250"
},
// Rwanda
{
  flag: "",
  indicatif: "+1869"
},
// Saint Kitts and Nevis
{
  flag: "",
  indicatif: "+290"
},
// Saint Helena
{
  flag: "",
  indicatif: "+1758"
},
// Saint Lucia
{
  flag: "",
  indicatif: "+378"
},
// San Marino
{
  flag: "",
  indicatif: "+508"
},
// Saint Pierre and Miquelon
{
  flag: "",
  indicatif: "+1784"
},
// Saint Vincent and the Grenadines
{
  flag: "",
  indicatif: "+677"
},
// Solomon Islands
{
  flag: "",
  indicatif: "+503"
},
// El Salvador
{
  flag: "",
  indicatif: "+685"
},
// Samoa
{
  flag: "",
  indicatif: "+1684"
},
// American Samoa
{
  flag: "",
  indicatif: "+239"
},
// São Tomé and Príncipe
{
  flag: "",
  indicatif: "+221"
},
// Senegal
{
  flag: "",
  indicatif: "+381"
},
// Serbia
{
  flag: "",
  indicatif: "+248"
},
// Seychelles
{
  flag: "",
  indicatif: "+232"
},
// Sierra Leone
{
  flag: "",
  indicatif: "+65"
},
// Singapore
{
  flag: "",
  indicatif: "+421"
},
// Slovakia
{
  flag: "",
  indicatif: "+386"
},
// Slovenia
{
  flag: "",
  indicatif: "+252"
},
// Somalia
{
  flag: "",
  indicatif: "+249"
},
// Sudan
{
  flag: "",
  indicatif: "+211"
},
// South Sudan
{
  flag: "",
  indicatif: "+94"
},
// Sri Lanka
{
  flag: "",
  indicatif: "+46"
},
// Sweden
{
  flag: "",
  indicatif: "+41"
},
// Switzerland
{
  flag: "",
  indicatif: "+597"
},
// Suriname
{
  flag: "",
  indicatif: "+268"
},
// Eswatini
{
  flag: "",
  indicatif: "+963"
},
// Syria
{
  flag: "",
  indicatif: "+992"
},
// Tajikistan
{
  flag: "",
  indicatif: "+255"
},
// Tanzania
{
  flag: "",
  indicatif: "+886"
},
// Taiwan
{
  flag: "",
  indicatif: "+235"
},
// Chad
{
  flag: "",
  indicatif: "+420"
},
// Czech Republic
{
  flag: "",
  indicatif: "+672"
},
// Christmas Island
{
  flag: "",
  indicatif: "+66"
},
// Thailand
{
  flag: "",
  indicatif: "+670"
},
// East Timor
{
  flag: "",
  indicatif: "+228"
},
// Togo
{
  flag: "",
  indicatif: "+690"
},
// Tokelau
{
  flag: "",
  indicatif: "+676"
},
// Tonga
{
  flag: "",
  indicatif: "+1868"
},
// Trinidad and Tobago
{
  flag: "",
  indicatif: "+216"
},
// Tunisia
{
  flag: "",
  indicatif: "+993"
},
// Turkmenistan
{
  flag: "",
  indicatif: "+1649"
},
// Turks and Caicos Islands
{
  flag: "",
  indicatif: "+90"
},
// Turkey
{
  flag: "",
  indicatif: "+688"
},
// Tuvalu
{
  flag: "",
  indicatif: "+380"
},
// Ukraine
{
  flag: "",
  indicatif: "+598"
},
// Uruguay
{
  flag: "",
  indicatif: "+678"
},
// Vanuatu
{
  flag: "",
  indicatif: "+58"
},
// Venezuela
{
  flag: "",
  indicatif: "+1340"
},
// U.S. Virgin Islands
{
  flag: "",
  indicatif: "+1284"
},
// British Virgin Islands
{
  flag: "",
  indicatif: "+84"
},
// Vietnam
{
  flag: "",
  indicatif: "+681"
},
// Wallis and Futuna
{
  flag: "",
  indicatif: "+967"
},
// Yemen
{
  flag: "",
  indicatif: "+260"
},
// Zambia
{
  flag: "",
  indicatif: "+263"
} // Zimbabwe
]);

/***/ })

}]);