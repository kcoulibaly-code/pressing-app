"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_forms_afg_cresco_DCPP-CS2_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/cresco/DCPP-CS2.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/cresco/DCPP-CS2.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
/* harmony import */ var _services_ebapis_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../services/ebapis.service */ "./resources/js/services/ebapis.service.js");
/* harmony import */ var _services_connects_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../services/connects.service */ "./resources/js/services/connects.service.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/auth.service */ "./resources/js/services/auth.service.js");
/* harmony import */ var _services_credit_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/credit.service */ "./resources/js/services/credit.service.js");
/* harmony import */ var _vueform_multiselect_dist_multiselect_vue2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @vueform/multiselect/dist/multiselect.vue2 */ "./node_modules/@vueform/multiselect/dist/multiselect.vue2.js");
/* harmony import */ var _johmun_vue_tags_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @johmun/vue-tags-input */ "./node_modules/@johmun/vue-tags-input/dist/vue-tags-input.js");
/* harmony import */ var _johmun_vue_tags_input__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_johmun_vue_tags_input__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _helpers_indexedDB__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../helpers/indexedDB */ "./resources/js/helpers/indexedDB.js");
/* harmony import */ var _helpers_indexedDB__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_helpers_indexedDB__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _shared_PhoneInput_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/PhoneInput.vue */ "./resources/js/components/shared/PhoneInput.vue");
/* harmony import */ var _services_proxy_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../services/proxy.service */ "./resources/js/services/proxy.service.js");
/* harmony import */ var _services_afg_amortissement_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../services/afg/amortissement.js */ "./resources/js/services/afg/amortissement.js");
/* harmony import */ var _shared_afg_Simulateur_SimulateurDeCredit_vue__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/afg/Simulateur/SimulateurDeCredit.vue */ "./resources/js/components/shared/afg/Simulateur/SimulateurDeCredit.vue");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return r; }; var t, r = {}, e = Object.prototype, n = e.hasOwnProperty, o = "function" == typeof Symbol ? Symbol : {}, i = o.iterator || "@@iterator", a = o.asyncIterator || "@@asyncIterator", u = o.toStringTag || "@@toStringTag"; function c(t, r, e, n) { Object.defineProperty(t, r, { value: e, enumerable: !n, configurable: !n, writable: !n }); } try { c({}, ""); } catch (t) { c = function c(t, r, e) { return t[r] = e; }; } function h(r, e, n, o) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype); return c(a, "_invoke", function (r, e, n) { var o = 1; return function (i, a) { if (3 === o) throw Error("Generator is already running"); if (4 === o) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var u = n.delegate; if (u) { var c = d(u, n); if (c) { if (c === f) continue; return c; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (1 === o) throw o = 4, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = 3; var h = s(r, e, n); if ("normal" === h.type) { if (o = n.done ? 4 : 2, h.arg === f) continue; return { value: h.arg, done: n.done }; } "throw" === h.type && (o = 4, n.method = "throw", n.arg = h.arg); } }; }(r, n, new Context(o || [])), !0), a; } function s(t, r, e) { try { return { type: "normal", arg: t.call(r, e) }; } catch (t) { return { type: "throw", arg: t }; } } r.wrap = h; var f = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var l = {}; c(l, i, function () { return this; }); var p = Object.getPrototypeOf, y = p && p(p(x([]))); y && y !== e && n.call(y, i) && (l = y); var v = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(l); function g(t) { ["next", "throw", "return"].forEach(function (r) { c(t, r, function (t) { return this._invoke(r, t); }); }); } function AsyncIterator(t, r) { function e(o, i, a, u) { var c = s(t[o], t, i); if ("throw" !== c.type) { var h = c.arg, f = h.value; return f && "object" == _typeof(f) && n.call(f, "__await") ? r.resolve(f.__await).then(function (t) { e("next", t, a, u); }, function (t) { e("throw", t, a, u); }) : r.resolve(f).then(function (t) { h.value = t, a(h); }, function (t) { return e("throw", t, a, u); }); } u(c.arg); } var o; c(this, "_invoke", function (t, n) { function i() { return new r(function (r, o) { e(t, n, r, o); }); } return o = o ? o.then(i, i) : i(); }, !0); } function d(r, e) { var n = e.method, o = r.i[n]; if (o === t) return e.delegate = null, "throw" === n && r.i["return"] && (e.method = "return", e.arg = t, d(r, e), "throw" === e.method) || "return" !== n && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + n + "' method")), f; var i = s(o, r.i, e.arg); if ("throw" === i.type) return e.method = "throw", e.arg = i.arg, e.delegate = null, f; var a = i.arg; return a ? a.done ? (e[r.r] = a.value, e.next = r.n, "return" !== e.method && (e.method = "next", e.arg = t), e.delegate = null, f) : a : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f); } function w(t) { this.tryEntries.push(t); } function m(r) { var e = r[4] || {}; e.type = "normal", e.arg = t, r[4] = e; } function Context(t) { this.tryEntries = [[-1]], t.forEach(w, this), this.reset(!0); } function x(r) { if (null != r) { var e = r[i]; if (e) return e.call(r); if ("function" == typeof r.next) return r; if (!isNaN(r.length)) { var o = -1, a = function e() { for (; ++o < r.length;) if (n.call(r, o)) return e.value = r[o], e.done = !1, e; return e.value = t, e.done = !0, e; }; return a.next = a; } } throw new TypeError(_typeof(r) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, c(v, "constructor", GeneratorFunctionPrototype), c(GeneratorFunctionPrototype, "constructor", GeneratorFunction), c(GeneratorFunctionPrototype, u, GeneratorFunction.displayName = "GeneratorFunction"), r.isGeneratorFunction = function (t) { var r = "function" == typeof t && t.constructor; return !!r && (r === GeneratorFunction || "GeneratorFunction" === (r.displayName || r.name)); }, r.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, c(t, u, "GeneratorFunction")), t.prototype = Object.create(v), t; }, r.awrap = function (t) { return { __await: t }; }, g(AsyncIterator.prototype), c(AsyncIterator.prototype, a, function () { return this; }), r.AsyncIterator = AsyncIterator, r.async = function (t, e, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(h(t, e, n, o), i); return r.isGeneratorFunction(e) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, g(v), c(v, u, "Generator"), c(v, i, function () { return this; }), c(v, "toString", function () { return "[object Generator]"; }), r.keys = function (t) { var r = Object(t), e = []; for (var n in r) e.unshift(n); return function t() { for (; e.length;) if ((n = e.pop()) in r) return t.value = n, t.done = !1, t; return t.done = !0, t; }; }, r.values = x, Context.prototype = { constructor: Context, reset: function reset(r) { if (this.prev = this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(m), !r) for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0][4]; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(r) { if (this.done) throw r; var e = this; function n(t) { a.type = "throw", a.arg = r, e.next = t; } for (var o = e.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i[4], u = this.prev, c = i[1], h = i[2]; if (-1 === i[0]) return n("end"), !1; if (!c && !h) throw Error("try statement without catch or finally"); if (null != i[0] && i[0] <= u) { if (u < c) return this.method = "next", this.arg = t, n(c), !0; if (u < h) return n(h), !1; } } }, abrupt: function abrupt(t, r) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var n = this.tryEntries[e]; if (n[0] > -1 && n[0] <= this.prev && this.prev < n[2]) { var o = n; break; } } o && ("break" === t || "continue" === t) && o[0] <= r && r <= o[2] && (o = null); var i = o ? o[4] : {}; return i.type = t, i.arg = r, o ? (this.method = "next", this.next = o[2], f) : this.complete(i); }, complete: function complete(t, r) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), f; }, finish: function finish(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[2] === t) return this.complete(e[4], e[3]), m(e), f; } }, "catch": function _catch(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[0] === t) { var n = e[4]; if ("throw" === n.type) { var o = n.arg; m(e); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(r, e, n) { return this.delegate = { i: x(r), r: e, n: n }, "next" === this.method && (this.arg = t), f; } }, r; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }








// ? IndexedDB helper for formDataToBeWatched Cache management





window.$ = window.jQuery = __webpack_require__(/*! jquery/dist/jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Concours_et_facilites",
  display: "Concours/Facilités",
  components: {
    MoreVerticalIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_11__.MoreVerticalIcon,
    ChevronUpIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_11__.ChevronUpIcon,
    ChevronDownIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_11__.ChevronDownIcon,
    PlusIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_11__.PlusIcon,
    TrashIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_11__.TrashIcon,
    AirplayIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_11__.AirplayIcon,
    Multiselect: _vueform_multiselect_dist_multiselect_vue2__WEBPACK_IMPORTED_MODULE_4__["default"],
    VueTagsInput: (_johmun_vue_tags_input__WEBPACK_IMPORTED_MODULE_5___default()),
    PhoneInput: _shared_PhoneInput_vue__WEBPACK_IMPORTED_MODULE_7__["default"],
    SimulateurDeCredit: _shared_afg_Simulateur_SimulateurDeCredit_vue__WEBPACK_IMPORTED_MODULE_10__["default"]
    // BookOpenIcon,
  },
  computed: {
    getQuotiteCessible: function getQuotiteCessible() {
      // if (!this.meta_data["dossier_credit"]?.cred_pub_tb_120004?.facilites_sollicitees) {
      //     return;
      // }
      var montant = 0;
      this.facilites_sollicitees.forEach(function (facilite) {
        if ((facilite === null || facilite === void 0 ? void 0 : facilite.montant_echeance) === 0) {} else {
          var _String;
          montant += parseInt((_String = String((facilite === null || facilite === void 0 ? void 0 : facilite.montant_echeance) || 0)) === null || _String === void 0 ? void 0 : _String.replace(/\s/g, ""), 10);
        }
      });
      this.formDataToBeWatched.quotite_cessible_disponible = Number(this.formDataToBeWatched.quotite_cessible) - montant;
      this.formDataToBeWatched.quotite_cessible_disponible_general = Number(this.formDataToBeWatched.quotite_cessible_general) - montant;
      return {
        quotite_cessible_disponible: this.formDataToBeWatched.quotite_cessible_disponible,
        quotite_cessible_disponible_general: this.formDataToBeWatched.quotite_cessible_disponible_general,
        montant: montant
      };
    },
    totalsFacilitesConfrere: function totalsFacilitesConfrere() {
      // Fonction pour parser les valeurs en nombres
      var parseCurrency = function parseCurrency(value) {
        if (!value || typeof value !== 'string') return 0;
        var cleaned = value.replace(/[^0-9.-]/g, '').replace(',', '.');
        return parseFloat(cleaned) || 0;
      };

      // Calcul des totaux bruts (en nombres)
      var totals = this.facilites_existante_confrere.reduce(function (acc, item) {
        return {
          montant_credit: acc.montant_credit + parseCurrency(item.montant_credit),
          duree: acc.duree + (parseFloat(item.duree) || 0),
          montant_echeance: acc.montant_echeance + parseCurrency(item.montant_echeance),
          encours: acc.encours + parseCurrency(item.encours),
          frais_dossier: acc.frais_dossier + parseCurrency(item.frais_dossier),
          montant_assurance: acc.montant_assurance + parseCurrency(item.montant_assurance),
          impaye: acc.impaye + parseCurrency(item.impaye)
        };
      }, {
        montant_credit: 0,
        duree: 0,
        montant_echeance: 0,
        encours: 0,
        frais_dossier: 0,
        montant_assurance: 0,
        impaye: 0
      });

      // Retourner les totaux formatés
      return {
        montant_credit: totals.montant_credit,
        duree: totals.duree,
        montant_echeance: totals.montant_echeance,
        encours: totals.encours,
        frais_dossier: totals.frais_dossier,
        montant_assurance: totals.montant_assurance,
        impaye: totals.impaye
      };
    },
    totalsFacilitesConjoint: function totalsFacilitesConjoint() {
      // Fonction pour parser les valeurs en nombres
      var parseCurrency = function parseCurrency(value) {
        if (!value || typeof value !== 'string') return 0;
        var cleaned = value.replace(/[^0-9.-]/g, '').replace(',', '.');
        return parseFloat(cleaned) || 0;
      };

      // Calcul des totaux bruts (en nombres)
      var totals = this.facilites_existante_conjoint.reduce(function (acc, item) {
        return {
          montant_credit: acc.montant_credit + parseCurrency(item.montant_credit),
          duree: acc.duree + (parseFloat(item.duree) || 0),
          montant_echeance: acc.montant_echeance + parseCurrency(item.montant_echeance),
          encours: acc.encours + parseCurrency(item.encours),
          frais_dossier: acc.frais_dossier + parseCurrency(item.frais_dossier),
          montant_assurance: acc.montant_assurance + parseCurrency(item.montant_assurance),
          impaye: acc.impaye + parseCurrency(item.impaye)
        };
      }, {
        montant_credit: 0,
        duree: 0,
        montant_echeance: 0,
        encours: 0,
        frais_dossier: 0,
        montant_assurance: 0,
        impaye: 0
      });

      // Retourner les totaux formatés
      return {
        montant_credit: totals.montant_credit,
        duree: totals.duree,
        montant_echeance: totals.montant_echeance,
        encours: totals.encours,
        frais_dossier: totals.frais_dossier,
        montant_assurance: totals.montant_assurance,
        impaye: totals.impaye
      };
    },
    totalsFacilitesExistante: function totalsFacilitesExistante() {
      // Fonction pour parser les valeurs en nombres
      var parseCurrency = function parseCurrency(value) {
        if (!value || typeof value !== 'string') return 0;
        var cleaned = value.replace(/[^0-9.-]/g, '').replace(',', '.');
        return parseFloat(cleaned) || 0;
      };

      // Calcul des totaux bruts (en nombres)
      var totals = this.facilites_existante.reduce(function (acc, item) {
        return {
          montant_credit: acc.montant_credit + parseCurrency(item.montant_credit),
          duree: acc.duree + (parseFloat(item.duree) || 0),
          montant_echeance: acc.montant_echeance + parseCurrency(item.montant_echeance),
          encours: acc.encours + parseCurrency(item.encours),
          frais_dossier: acc.frais_dossier + parseCurrency(item.frais_dossier),
          montant_assurance: acc.montant_assurance + parseCurrency(item.montant_assurance),
          impaye: acc.impaye + parseCurrency(item.impaye)
        };
      }, {
        montant_credit: 0,
        duree: 0,
        montant_echeance: 0,
        encours: 0,
        frais_dossier: 0,
        montant_assurance: 0,
        impaye: 0
      });

      // Retourner les totaux formatés
      return {
        montant_credit: totals.montant_credit,
        duree: totals.duree,
        montant_echeance: totals.montant_echeance,
        encours: totals.encours,
        frais_dossier: totals.frais_dossier,
        montant_assurance: totals.montant_assurance,
        impaye: totals.impaye
      };
    },
    totalsFacilites: function totalsFacilites() {
      // Fonction pour parser les valeurs en nombres
      var parseCurrency = function parseCurrency(value) {
        if (!value || typeof value !== 'string') return 0;
        var cleaned = value.replace(/[^0-9.-]/g, '').replace(',', '.');
        return parseFloat(cleaned) || 0;
      };

      // Calcul des totaux bruts (en nombres)
      var totals = this.facilites_sollicitees.reduce(function (acc, item) {
        return {
          montant_demande: acc.montant_demande + parseCurrency(item.montant_demande),
          montant_credit: acc.montant_credit + parseCurrency(item.montant_credit),
          duree: acc.duree + (parseFloat(item.duree) || 0),
          montant_echeance: acc.montant_echeance + parseCurrency(item.montant_echeance),
          frais_dossier: acc.frais_dossier + parseCurrency(item.frais_dossier),
          montant_assurance: acc.montant_assurance + parseCurrency(item.montant_assurance)
        };
      }, {
        montant_demande: 0,
        montant_credit: 0,
        duree: 0,
        montant_echeance: 0,
        frais_dossier: 0,
        montant_assurance: 0
      });

      // Retourner les totaux formatés
      return {
        montant_demande: totals.montant_demande,
        montant_credit: totals.montant_credit,
        duree: totals.duree,
        montant_echeance: totals.montant_echeance,
        frais_dossier: totals.frais_dossier,
        montant_assurance: totals.montant_assurance
      };
    },
    totalsFacilitesSelectionnees: function totalsFacilitesSelectionnees() {
      // Fonction pour parser les valeurs en nombres
      var parseCurrency = function parseCurrency(value) {
        if (value == null) return 0;
        if (typeof value === 'number') return value;
        if (typeof value !== 'string') return 0;
        var cleaned = value.replace(/[^0-9.-]/g, '').replace(',', '.');
        return parseFloat(cleaned) || 0;
      };

      // Calcul des totaux bruts (en nombres)
      var totals = this.facilites_selectionnees.reduce(function (acc, item) {
        return {
          frais_dossier: acc.frais_dossier + parseCurrency(item.frais_dossier),
          frais_huissier: acc.frais_huissier + parseCurrency(item.frais_huissier),
          frais_cheque_certifie: acc.frais_cheque_certifie + parseCurrency(item.frais_cheque_certifie),
          montant_assurance: acc.montant_assurance + parseCurrency(item.montant_assurance),
          tva_montant_assurance: acc.montant_assurance + parseCurrency(item.tva_montant_assurance),
          fond_de_garantie: acc.fond_de_garantie + parseCurrency(item.fond_de_garantie),
          cash_call_amount: acc.cash_call_amount + parseCurrency(item.cash_call_amount),
          taux_periodique: acc.taux_periodique + parseCurrency(item.taux_periodique),
          taux_usure: acc.taux_usure + parseCurrency(item.taux_usure),
          tva_frais_dossier: acc.tva_frais_dossier + parseCurrency(item.tva_frais_dossier),
          TEG: acc.TEG
        };
      }, {
        frais_dossier: 0,
        frais_cheque_certifie: 0,
        frais_huissier: 0,
        montant_assurance: 0,
        tva_montant_assurance: 0,
        fond_de_garantie: 0,
        cash_call_amount: 0,
        tva_frais_dossier: 0,
        TEG: 0
      });
      return {
        frais_dossier: totals.frais_dossier,
        frais_cheque_certifie: totals.frais_cheque_certifie,
        frais_huissier: totals.frais_huissier,
        tva_montant_assurance: totals.tva_montant_assurance,
        montant_assurance: totals.montant_assurance,
        fond_de_garantie: totals.fond_de_garantie,
        cash_call_amount: totals.cash_call_amount,
        TEG: null,
        taux_periodique: totals.taux_periodique,
        taux_usure: totals.taux_usure,
        tva_frais_dossier: totals.tva_frais_dossier
      };
    },
    editableFacilitesSollicitees: function editableFacilitesSollicitees() {
      return this.facilites_sollicitees;
    },
    totalsGaranties: function totalsGaranties() {
      return this.garanties_proposees.reduce(function (acc, item) {
        acc.montant += parseFloat((item.montant || 0).toString().replace(/\s/g, '')) || 0;
        return acc;
      }, {
        montant: 0
      });
    },
    firstGarantiesNewIndex: function firstGarantiesNewIndex() {
      return this.facilites_sollicitees.findIndex(function (obj) {
        return obj.line === "credit_new";
      });
    },
    groupeCreditByCategorie: function groupeCreditByCategorie() {
      return this.type_credits.reduce(function (acc, credit) {
        var category = credit.groupe_categorie || "Autre";
        if (!acc[category]) {
          acc[category] = [];
        }
        acc[category].push(credit);
        return acc;
      }, []);
    },
    transformLoadedCreditsBanques_: function transformLoadedCreditsBanques_() {
      var _this = this;
      var list_categories = this.type_credits.reduce(function (acc, item) {
        var list_categories_final = [];
        _this.type_credits.forEach(function (el) {
          list_categories_final.push(el.groupe_categorie);
        });
        if (list_categories_final.includes(item.groupe_categorie)) {
          if (!acc[item.groupe_categorie]) {
            acc[item.groupe_categorie] = [];
          }
          acc[item.groupe_categorie].push(item);
        }
        return acc;
      }, {});
      var all = Object.values(list_categories || {}).flat();
      var d = all.find(function (d) {
        return d.groupe_categorie === 'CCT';
      });
      console.log('d', d);
      if (d) {
        this.facilites_sollicitees[0].type_facilite = d.libelle;
        this.facilites_sollicitees[0].facilite_libelle = d.groupe_categorie; // 
        this.facilites_sollicitees[0].infos_fcub = d.infos_flexcub;
      }
      return list_categories;
    },
    doesItHaveCreditImmobilier: function doesItHaveCreditImmobilier() {
      var a = false;
      this.facilites_sollicitees.forEach(function (el) {
        if (el.facilite_libelle == "CREDIT IMMO") {
          a = true;
        }
      });
      return a;
    },
    getRevenuSalaire: function getRevenuSalaire() {
      if (this.revenu_domicilie == undefined || this.revenu_domicilie == '') return '';
      var node_salaire = this.revenu_domicilie.find(function (node) {
        return node.libelle == "Salaire net";
      });
      if (node_salaire == undefined) return '';
      if (node_salaire.libelle == "Salaire net" && node_salaire.checked == true) {
        return node_salaire.montant_salaire;
      }
      return '';
    }
  },
  props: {
    meta_data: Object,
    tb_name: String,
    tb_display_name: String
  },
  created: function created() {
    var _this2 = this;
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["default"].loadUserData().then(function (res) {
              _this2.authcheckUsr = res.data;
              // console.log('authcheckUsr',this.authcheckUsr)
            })["catch"](function (err) {
              _this2.loadWithError(err);
            });
            _this2.loadScoringData();
            _context.next = 4;
            return _this2.getCreditBanques();
          case 4:
            EventBus.$on("cred_pub_tb_10004-updated", function (d) {
              // console.log("lauhght", d );
              if ((d === null || d === void 0 ? void 0 : d.data_tb1) != undefined) {
                var data = d.data_tb6;
                _this2.data_tb1 = data;
                _this2.getRevenuAutre();
              }
              _this2.getTauxEndettement();
              _this2.getRemboursement();
            });

            //this.loadTypeCredit = false;

            EventBus.$on("cred_pub_tb_10002-updated", function (data) {
              _this2.formDataToBeWatched.denomination_client = (data === null || data === void 0 ? void 0 : data.nom) + ' ' + (data === null || data === void 0 ? void 0 : data.prenoms);
              _this2.matrimoniale = data === null || data === void 0 ? void 0 : data.matrimoniale;
            });

            // EventBus.$on("cred_pub_tb_10002-updated", (data) => {
            //     this.revenu_domicilie = data.revenu_domicilie ?? [] ;
            //     this.formDataToBeWatched.pourcentage_quotite = data.pourcentage_quotite
            //         this.formDataToBeWatched.quotite_cessible = data.quotite_cessible
            //         this.formDataToBeWatched.quotite_cessible_general = data.quotite_cessible_general
            //         this.formDataToBeWatched.pourcentage_quotite_general = data.pourcentage_quotite_general
            //         this.formDataToBeWatched.revenu_total_colonne_emprunteur = data.revenu_total_colonne_emprunteur
            //         this.formDataToBeWatched.revenu_total_colonne_montant_pondere = data.revenu_total_colonne_montant_pondere

            //         this.getRevenuAutre();  
            //         this.getTauxEndettement();
            //         this.getRemboursement();
            // });

            EventBus.$on("dossier-updated-dcpp-1", function (data) {
              var _item$revenu_domicili;
              console.log('dossier-updated-dcpp-1 -> data_tb2', data.data_tb2);
              var item = data.data_tb2;
              _this2.revenu_domicilie = (_item$revenu_domicili = item.revenu_domicilie) !== null && _item$revenu_domicili !== void 0 ? _item$revenu_domicili : [];
              _this2.formDataToBeWatched.pourcentage_quotite = item.pourcentage_quotite;
              _this2.formDataToBeWatched.quotite_cessible = item.quotite_cessible;
              _this2.formDataToBeWatched.quotite_cessible_general = item.quotite_cessible_general;
              _this2.formDataToBeWatched.pourcentage_quotite_general = item.pourcentage_quotite_general;
              _this2.formDataToBeWatched.revenu_total_colonne_emprunteur = item.revenu_total_colonne_emprunteur;
              _this2.formDataToBeWatched.revenu_total_colonne_montant_pondere = item.revenu_total_colonne_montant_pondere;
              // this.matrimoniale = data?.matrimoniale;
              // this.getQuotiteCessible;
              _this2.getRevenuAutre();
              _this2.getTauxEndettement();
              _this2.getRemboursement();
            });
          case 7:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }))();
  },
  mounted: function mounted() {
    var _this3 = this;
    this.loadRetrieved();
    this.loadTbAttrs(); // charge les attributs + sous attributs des tables
    this.tableClosedOrOpened();
    EventBus.$on("collect-quotite-encours", function () {
      _this3.emitEventForTbEndettement();
    });
    EventBus.$on("update-facility", function (data) {
      return _this3.updateFacilitySollicitees(data);
    });
    EventBus.$on("created-extra-file-template", function (data) {
      _this3.cautionnement_personnel.forEach(function (element, index) {
        var _data$template;
        var template_name = "Pièce(s) jointe(s) -cautionnemnt_personnel_et_solidaire" + index + "_" + _this3.$route.params.templateId;
        if (template_name == (data === null || data === void 0 || (_data$template = data.template) === null || _data$template === void 0 ? void 0 : _data$template.name)) {
          var _data$template2, _data$template3, _data$template4;
          _this3.cautionnement_personnel[index]["template"] = {
            id: data === null || data === void 0 || (_data$template2 = data.template) === null || _data$template2 === void 0 ? void 0 : _data$template2.id,
            name: data === null || data === void 0 || (_data$template3 = data.template) === null || _data$template3 === void 0 ? void 0 : _data$template3.name,
            slug: data === null || data === void 0 || (_data$template4 = data.template) === null || _data$template4 === void 0 ? void 0 : _data$template4.slug
          };
          _this3.handleInput();
        }
      });
    });
    EventBus.$on("updated-extra-file-upload", function (data) {
      _this3.getFiles();
    });
    this.getFiles();
  },
  data: function data() {
    var _this$meta_data, _this$meta_data$dossi, _formDataToBeWatched, _this$authenticatedUs, _this$authenticatedUs2, _this$authenticatedUs3, _this$authenticatedUs4, _this$authenticatedUs5, _this$authenticatedUs6, _this$authenticatedUs7, _this$authenticatedUs8, _this$authenticatedUs9, _this$authenticatedUs0, _this$authenticatedUs1, _this$authenticatedUs10, _this$authenticatedUs11, _this$authenticatedUs12, _this$authenticatedUs13, _this$authenticatedUs14, _this$authenticatedUs15, _this$authenticatedUs16, _this$meta_data$dossi2;
    var vm = this;
    return {
      core_banking_info: (_this$meta_data = this.meta_data) === null || _this$meta_data === void 0 || (_this$meta_data = _this$meta_data.dossier_credit) === null || _this$meta_data === void 0 ? void 0 : _this$meta_data.client_core_banking,
      ebapisHost: _services_ebapis_service__WEBPACK_IMPORTED_MODULE_0__["default"].host,
      list_categories_final: null,
      connectsHost: _services_connects_service__WEBPACK_IMPORTED_MODULE_1__["default"].loadablehost(),
      authcheck: false,
      authcheckUsr: null,
      authcheckStatus: null,
      watchInPause: false,
      initLoad: true,
      seen: true,
      seen1: true,
      seen2: true,
      seen3: true,
      disp: false,
      isLoading: false,
      type_credits: [],
      loadTypeCredit: false,
      showBtnDownload: false,
      showAllFiles: [],
      meta_parseable: {
        cred_pub_key: this.meta_data["cred_pub_key"],
        tb_name: this.tb_name
      },
      table1: (_this$meta_data$dossi = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi === void 0 ? void 0 : _this$meta_data$dossi.cred_pub_tb_120501,
      formDataToBeWatched: (_formDataToBeWatched = {
        notes: [],
        type_credit: "",
        taux: "",
        duree_credit: "",
        montant_sollicite: "",
        credit: "",
        r_mensualite: "",
        r_interet: "",
        r_ttcredit: "",
        objet_du_pret: "",
        taux_prime: "",
        duree_differee: "",
        /***************************** */
        type_demande: "",
        global_env_entity: _services_ebapis_service__WEBPACK_IMPORTED_MODULE_0__["default"].loadableEntity()[0].toUpperCase(),
        carcasse_type: "",
        is_first_time: null,
        segment_entreprise: "",
        forfait: "",
        list_hors_forfait: [],
        montant_cash_call: 0,
        filiale: null,
        denomination_client: "",
        montant_credit: 0,
        date_deblocage_prev: '',
        mode_paiement_demande: "",
        date_echeance: "",
        date_reception_demande_client: "",
        description_du_projet: "",
        plan_de_financement: "",
        facilites_existante: [],
        facilites_sollicitees: [],
        garanties_proposees: [],
        cautionnement_personnel: [],
        facilites_existante_confrere: [],
        facilites_existante_conjoint: [],
        pourcentage_quotite: "",
        pourcentage_quotite_general: "",
        quotite_cessible: "",
        quotite_cessible_general: "",
        quotite_cessible_disponible: "",
        quotite_cessible_disponible_general: "",
        revenu_total_colonne_emprunteur: "",
        revenu_total_colonne_montant_pondere: 0,
        pret_cher_confrere: "",
        pret_couvert_cash_call: "",
        is_except_prog_fin: "",
        is_caractere_locatif: "",
        credit_en_cours: "",
        facilites_selectionnees: [],
        condition_specifique: "",
        condition_generale: []
      }, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_formDataToBeWatched, "is_first_time", null), "nom", ""), "prenoms", ""), "denomination_client", ""), "type_demande", ""), "type_credit", ""), "contact_client", ""), "email_client", ""), "montant_sollicite", 0), "montant_credit", 0), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_formDataToBeWatched, "duree_credit", 0), "montant_sollicite", 0), "remb_autre_credit", 0), "remb_nouveau_credit", 0), "taux_endettement", 0), "taux_endettement_avant", 0), "taux_qc1", 0)),
      info_sup: "",
      credit: "",
      taxe: "",
      res: "",
      taux: "",
      listingNote: false,
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
      },
      // {
      //     title: "Rejeter",
      //     icon: "icofont icofont-close",
      //     handler: function () { },
      //     disabled: true
      // },
      // {
      //     title: "Vider",
      //     icon: "icofont icofont-paperclip",
      //     handler: function () { },
      //     disabled: true
      // },
      {
        title: "Supprimer",
        icon: "icofont icofont-trash",
        handler: this.startDeletingTbFromContext,
        disabled: false
      }],
      type_demande_list: [{
        "id": 1,
        "name": "1ʳᵉ demande (1er dossier de crédit)",
        "value": "1ʳᵉ demande",
        "checked": false,
        "disabled": false
      }, {
        "id": 2,
        "name": "Nouvelle demande (Nième demande)",
        "value": "Nouvelle demande",
        "checked": false,
        "disabled": false
      }, {
        "id": 3,
        "name": "Renouvellement",
        "value": "Renouvellement",
        "checked": false,
        "disabled": false
      }, {
        "id": 4,
        "name": "Restructuration",
        "value": "Restructuration",
        "checked": false,
        "disabled": false
      }
      // {
      //     "id": 5,
      //     "name": "Appel à la décision",
      //     "checked": false,
      //     "disabled": false
      // },
      // {
      //     "id": 6,
      //     "name": "Prorogation",
      //     "checked": false,
      //     "disabled": false
      // },
      // {
      //     "id": 7,
      //     "name": "Renégociation / Restructuration",
      //     "checked": false,
      //     "disabled": false
      // }
      ],
      segment_entreprise_list: [{
        "id": 1,
        "name": "Abidjan nord",
        "checked": false,
        "disabled": false
      }, {
        "id": 2,
        "name": "Abidjan sud",
        "checked": false,
        "disabled": false
      }, {
        "id": 3,
        "name": "Province",
        "checked": false,
        "disabled": false
      }],
      dpcredit0: false,
      dpcredit1: false,
      dismissFormData: [5, 6],
      filiales: ["AFGB ML"],
      list_entites: {
        "AFGB ML": "MALI"
      },
      seen0_1: true,
      seen0_2: true,
      seen0_3: true,
      seen0_4: true,
      seen0_5: true,
      seen0_6: true,
      seen0_7: true,
      seen0_8: true,
      seen0_9: true,
      seen0_10: true,
      seen_13: true,
      facilites_existante_confrere: [{
        "id": 1,
        "uuid": this.generateUuid(),
        "institution_confrere": "",
        "type_facilite": "",
        "facilite_libelle": "",
        "fcub_type_categorie": "",
        "montant_credit": 0,
        "duree": 0,
        "taux": 0,
        "echeancier": "",
        "montant_echeance": 0,
        // "impaye":0,
        "encours": 0,
        // "frais_dossier": 0,
        // "montant_assurance": 0,
        // "TEG": "",
        // "statut": "",
        "date_echeance": "",
        // "is_remboursement_anticipe": null,
        // "is_rachat": null,
        "commentaire": "",
        "checked": false,
        "disabled": false,
        "line": "credit_old",
        user_id: (_this$authenticatedUs = (_this$authenticatedUs2 = this.authenticatedUser) === null || _this$authenticatedUs2 === void 0 ? void 0 : _this$authenticatedUs2.id) !== null && _this$authenticatedUs !== void 0 ? _this$authenticatedUs : (_this$authenticatedUs3 = this.authenticatedUser) === null || _this$authenticatedUs3 === void 0 ? void 0 : _this$authenticatedUs3.user_id
      }],
      facilites_existante: [{
        "id": 1,
        "uuid": this.generateUuid(),
        "filiale": (_this$authenticatedUs4 = this.authenticatedUser) === null || _this$authenticatedUs4 === void 0 ? void 0 : _this$authenticatedUs4.filiale,
        "type_facilite": "",
        "facilite_libelle": "",
        "fcub_type_categorie": "",
        "montant_credit": 0,
        "duree": 0,
        "taux": 0,
        "echeancier": "",
        "montant_echeance": 0,
        "impaye": 0,
        "credit_en_cours": "",
        "encours": 0,
        "frais_dossier": 0,
        "montant_assurance": 0,
        "TEG": "",
        "statut": "",
        "date_echeance": "",
        "is_remboursement_anticipe": null,
        "is_rachat": null,
        "commentaire": "",
        "checked": false,
        "disabled": false,
        "line": "credit_old",
        user_id: (_this$authenticatedUs5 = (_this$authenticatedUs6 = this.authenticatedUser) === null || _this$authenticatedUs6 === void 0 ? void 0 : _this$authenticatedUs6.id) !== null && _this$authenticatedUs5 !== void 0 ? _this$authenticatedUs5 : (_this$authenticatedUs7 = this.authenticatedUser) === null || _this$authenticatedUs7 === void 0 ? void 0 : _this$authenticatedUs7.user_id
      }],
      facilites_existante_conjoint: [{
        "id": 1,
        "uuid": this.generateUuid(),
        "filiale": (_this$authenticatedUs8 = this.authenticatedUser) === null || _this$authenticatedUs8 === void 0 ? void 0 : _this$authenticatedUs8.filiale,
        "type_facilite": "",
        "facilite_libelle": "",
        "fcub_type_categorie": "",
        "montant_credit": 0,
        "duree": 0,
        "taux": 0,
        "echeancier": "",
        "montant_echeance": 0,
        "impaye": 0,
        "encours": 0,
        "frais_dossier": 0,
        "montant_assurance": 0,
        "TEG": "",
        "statut": "",
        "date_echeance": "",
        "is_remboursement_anticipe": null,
        "is_rachat": null,
        "commentaire": "",
        "checked": false,
        "disabled": false,
        "line": "credit_old",
        user_id: (_this$authenticatedUs9 = (_this$authenticatedUs0 = this.authenticatedUser) === null || _this$authenticatedUs0 === void 0 ? void 0 : _this$authenticatedUs0.id) !== null && _this$authenticatedUs9 !== void 0 ? _this$authenticatedUs9 : (_this$authenticatedUs1 = this.authenticatedUser) === null || _this$authenticatedUs1 === void 0 ? void 0 : _this$authenticatedUs1.user_id
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
      facilites_sollicitees: [{
        "id": 1,
        "uuid": this.generateUuid(),
        "filiale": (_this$authenticatedUs10 = this.authenticatedUser) === null || _this$authenticatedUs10 === void 0 ? void 0 : _this$authenticatedUs10.filiale,
        "type_facilite": "",
        "facilite_libelle": "",
        "infos_fcub": "",
        "montant_demande": 0,
        "montant_credit": 0,
        "duree": 0,
        "taux": 0,
        "echeancier": "",
        "montant_echeance": 0,
        "encours": 0,
        "frais_dossier": 0,
        "montant_assurance": 0,
        "TEG": "",
        "statut": "",
        "date_echeance": "",
        "is_remboursement_anticipe": null,
        "is_rachat": null,
        "montant_rachat": 0,
        "commentaire": "",
        "checked": false,
        "disabled": false,
        "line": "credit_new",
        "type_rachat": "",
        "num_fcub_pret": "",
        "differe": "",
        "nbre_differe": 0,
        user_id: (_this$authenticatedUs11 = (_this$authenticatedUs12 = this.authenticatedUser) === null || _this$authenticatedUs12 === void 0 ? void 0 : _this$authenticatedUs12.id) !== null && _this$authenticatedUs11 !== void 0 ? _this$authenticatedUs11 : (_this$authenticatedUs13 = this.authenticatedUser) === null || _this$authenticatedUs13 === void 0 ? void 0 : _this$authenticatedUs13.user_id
      }],
      facilites_selectionnees: [{
        "id": 1,
        "uuid": this.generateUuid(),
        "facilite_uuid": "",
        "facilite_libelle": "Crédit scolaire",
        "frais_dossier": 0,
        "montant_assurance": 0,
        "tva_montant_assurance": 0,
        "TEG": "",
        "frais_cheque_certifie": 0,
        "taux_usure": "",
        "taux_periodique": "",
        "teg_ht": 0,
        "teg_ttc": 0,
        user_id: (_this$authenticatedUs14 = (_this$authenticatedUs15 = this.authenticatedUser) === null || _this$authenticatedUs15 === void 0 ? void 0 : _this$authenticatedUs15.id) !== null && _this$authenticatedUs14 !== void 0 ? _this$authenticatedUs14 : (_this$authenticatedUs16 = this.authenticatedUser) === null || _this$authenticatedUs16 === void 0 ? void 0 : _this$authenticatedUs16.user_id
      }],
      tableTag: [],
      tableTags: [],
      garanties_proposees: [{
        type: "",
        ligne_associee: [],
        montant: 0,
        commentaire: "",
        is_recueillie: null
        // is_detenue: null
      }],
      cautionnement_personnel: [{
        firstname: "",
        lastname: "",
        telephone: "",
        adresse: "",
        valeur_caution: "",
        piece: "",
        files: 0
        // is_detenue: null
      }],
      condition_generale: [{
        libelle: '',
        value: ''
      }],
      data_garanties: [],
      list_hors_forfait: [{
        libelle: "Montant du crédit",
        commentaire: "",
        checked: false
      }, {
        libelle: "Durée du credit",
        commentaire: "",
        checked: false
      }, {
        libelle: "Taux d'endettement",
        commentaire: "",
        checked: false
      }, {
        libelle: "Contrat de travail",
        commentaire: "",
        checked: false
      }],
      filiale_afg: ["AFGB CI", "AFGB GA", "AFGB ML", "AFGB MG", "AFGB CM", "AFGB KM", "AFGB BJ"],
      selectedGroup1: '',
      matrimoniale: "",
      revenu_domicilie: [],
      donnee_calculs: {},
      showClmnTypeRachat: false,
      list_type_rachat: ["Rachat interne", "Rachat externe"],
      data_tb1: (_this$meta_data$dossi2 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi2 === void 0 ? void 0 : _this$meta_data$dossi2.cred_pub_tb_120501,
      amortissementManager: new _services_afg_amortissement_js__WEBPACK_IMPORTED_MODULE_9__["default"](),
      data_tamor: {
        id: "",
        caracteristiques_credit: {
          id: "",
          type_facilite: "",
          montant_credit: 0,
          salaire_net: 0,
          echeancier: "",
          duree: 0,
          // en mois
          taux_annuel_ht: 0,
          date_deblocage_prev: "",
          date_echeance: "",
          quotite: 0,
          differe: 0,
          // en mois
          tva: 19.25,
          mois_debut_pmt: 0,
          frais_cheque_certifier: 0,
          frais_huissier: 0,
          frais_dossier_facilite: 0,
          assurance: 0,
          encours: 0,
          quotite_percent: 0
        },
        donnees_calculees: {
          dsr: 0,
          taux_ttc: 0,
          // assurance: 0,
          total: 0,
          net_a_percevoir: 0,
          paiement_mensuel: 0,
          interet_ttc: 0,
          total_rembourse: 0,
          interet_ht: 0
          // encours: 0,
        },
        tableau: [],
        is_success: true,
        msg_traitment: ""
      },
      viewOnly: false,
      defaultFacility: null,
      defaultSimulation: null
    };
  },
  methods: {
    transformLoadedCreditsBanque: function transformLoadedCreditsBanque() {
      var _this4 = this;
      return this.type_credits.reduce(function (acc, item) {
        var list_categories_final = [];
        _this4.type_credits.forEach(function (el) {
          list_categories_final.push(el.groupe_categorie);
        });
        if (list_categories_final.includes(item.groupe_categorie)) {
          if (!acc[item.groupe_categorie]) {
            acc[item.groupe_categorie] = [];
          }
          acc[item.groupe_categorie].push(item);
        }
        return acc;
      }, {});
      // console.log('list_categories', list_categories)
      // this.list_categories_final = this.findFlexcubeByType('facilites_sollicitees', this.facilites_sollicitees[0].type_facilite, list_categories, 0);
      // console.log('this.list_categories_final', this.list_categories_final)
      // return list_categories;
    },
    getPaymentFrequency: function getPaymentFrequency(months) {
      var parsedMonths = Number(months);
      if (isNaN(parsedMonths) || months === '' || months === null || months === undefined) {
        return 'Inconnu';
      }
      switch (Number(months)) {
        case 1:
          return 'Mensuel';
        case 2:
          return 'Bimestriel';
        case 3:
          return 'Trimestriel';
        case 4:
          return 'Quadrimestriel';
        case 6:
          return 'Semestriel';
        case 12:
          return 'Annuel';
        default:
          return 'Inconnu';
      }
    },
    convertDDMMYYYYtoYYYYMMDD: function convertDDMMYYYYtoYYYYMMDD(dateString) {
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
    facilites: function facilites() {
      var _this$core_banking_in,
        _this$core_banking_in2,
        _this$core_banking_in3,
        _this5 = this;
      if (!((_this$core_banking_in = this.core_banking_info) !== null && _this$core_banking_in !== void 0 && _this$core_banking_in.credits_amortissables) || !Array.isArray((_this$core_banking_in2 = this.core_banking_info) === null || _this$core_banking_in2 === void 0 ? void 0 : _this$core_banking_in2.credits_amortissables)) {
        return [];
      }
      var amortissable = (_this$core_banking_in3 = this.core_banking_info) === null || _this$core_banking_in3 === void 0 ? void 0 : _this$core_banking_in3.credits_amortissables.filter(function (item) {
        return item.amount > 0;
      }).map(function (item) {
        var _this5$authenticatedU, _this5$convertDDMMYYY;
        return {
          filiale: (_this5$authenticatedU = _this5.authenticatedUser) === null || _this5$authenticatedU === void 0 ? void 0 : _this5$authenticatedU.filiale,
          type_facilite: item.type_facilite || '',
          facilite_libelle: item.credit_type_name || '',
          montant_credit: item.amount || '0',
          duree: item.number_of_installments || '0',
          taux: ((item === null || item === void 0 ? void 0 : item.interest_rate) || '0').toString().replace(',', '.'),
          echeancier: _this5.getPaymentFrequency(item === null || item === void 0 ? void 0 : item.installement_period_frequency) || '',
          installement_periods: (item === null || item === void 0 ? void 0 : item.installement_periods) || '',
          montant_echeance: (item === null || item === void 0 ? void 0 : item.amount_due) || '0',
          encours: (item === null || item === void 0 ? void 0 : item.outstanding_capital) || '0',
          frais_dossier: (item === null || item === void 0 ? void 0 : item.frais_dossier) || '0',
          montant_assurance: (item === null || item === void 0 ? void 0 : item.montant_assurance) || '0',
          impaye: (item === null || item === void 0 ? void 0 : item.unpaid_amount) || '0',
          credit_type_code: (item === null || item === void 0 ? void 0 : item.credit_type_code) || '0',
          credit_number: (item === null || item === void 0 ? void 0 : item.credit_number) || '0',
          date_echeance: (_this5$convertDDMMYYY = _this5.convertDDMMYYYYtoYYYYMMDD(item === null || item === void 0 ? void 0 : item.maturity_date)) !== null && _this5$convertDDMMYYY !== void 0 ? _this5$convertDDMMYYY : "",
          fcub_type_categorie: item === null || item === void 0 ? void 0 : item.credit_type_code,
          infos_fcub: _this5.findFlexcubeByType('', item.type_facilite, _this5.transformLoadedCreditsBanques_, null)
        };
      });
      this.facilites_existante = amortissable;
      this.handleInput3();
    },
    updateFacilitySollicitees: function updateFacilitySollicitees(data) {
      var _this6 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var checkValue, facility, create, facIndex, _this6$facilites_sele, _this6$facilites_sele2, _facility, hasFacilities, hasOneValid, newFacility, tvaApply, isRachatExterne, tva_frais_dossier, selected, found, _tvaApply, _isRachatExterne, _tva_frais_dossier, isDiffere, updateFields, _selected, result;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              if (data) {
                _context2.next = 3;
                break;
              }
              return _context2.abrupt("return", {
                success: false,
                message: "Aucune donnée à mettre à jour"
              });
            case 3:
              if (!Array.isArray(data)) {
                _context2.next = 5;
                break;
              }
              return _context2.abrupt("return", {
                success: false,
                message: "Le format des données n'est pas valide."
              });
            case 5:
              checkValue = [null, '', undefined, '0', 0];
              facility = data.facility, create = data.create;
              facIndex = -1;
              if (!create) {
                _context2.next = 25;
                break;
              }
              // Nettoyer les facilités
              // console.log('facilites_sollicitees before filter ',this.facilites_sollicitees);
              // console.log('facilites_selectionnees before filter ',this.facilites_selectionnees);

              _this6.facilites_sollicitees = _this6.facilites_sollicitees.filter(function (el) {
                return el.type_facilite && !["", 0, "0"].includes(el.montant_credit);
              });

              // filtrer aussi les facilites_selectionnees
              _this6.facilites_selectionnees = _this6.facilites_selectionnees.filter(function (el) {
                return el.facilite_uuid && !["", null, undefined].includes(el.facilite_libelle);
              });

              // console.log('facilites_sollicitees after filter ',this.facilites_sollicitees);
              // console.log('facilites_selectionnees after filter ',this.facilites_selectionnees);
              // console.log('facility?.uuid',facility?.uuid);

              // return
              hasFacilities = ((_this6$facilites_sele = _this6.facilites_selectionnees) === null || _this6$facilites_sele === void 0 ? void 0 : _this6$facilites_sele.length) > 0;
              hasOneValid = (_this6$facilites_sele2 = _this6.facilites_selectionnees) === null || _this6$facilites_sele2 === void 0 ? void 0 : _this6$facilites_sele2.some(function (el) {
                return el.facilite_uuid && el.facilite_libelle;
              });
              if (hasFacilities && !hasOneValid) {
                _this6.facilites_selectionnees = [];
              }
              _this6.addMoreFaciliteSollicites((_facility = facility) === null || _facility === void 0 ? void 0 : _facility.uuid);
              newFacility = _this6.facilites_sollicitees.at(-1);
              tvaApply = facility.tva || _this6.formDataToBeWatched.tva;
              isRachatExterne = !checkValue.includes(facility.frais_cheque_certifier) || !checkValue.includes(facility.frais_huissier);
              tva_frais_dossier = facility.frais_dossier * tvaApply || 0; // newFacility.is_rachat = isRachatExterne ? "Oui" : null
              // newFacility.type_rachat = isRachatExterne ? "Oui" : null
              facility = _objectSpread(_objectSpread(_objectSpread({}, newFacility), facility), {}, {
                id: newFacility.id,
                uuid: newFacility.uuid
                // is_rachat: isRachatExterne ? "Oui" : null,
                // type_rachat: isRachatExterne ? "Rachat externe" : null
              });
              facIndex = newFacility.id - 1;
              selected = _this6.facilites_selectionnees.find(function (f) {
                return f.facilite_uuid === newFacility.uuid;
              });
              if (selected) {
                Object.assign(selected, {
                  facilite_libelle: facility.type_facilite,
                  montant_assurance: facility.montant_assurance,
                  frais_dossier: facility.frais_dossier,
                  tva_frais_dossier: tvaApply ? tva_frais_dossier : null,
                  frais_cheque_certifie: isRachatExterne ? facility.frais_cheque_certifier : 0,
                  frais_huissier: isRachatExterne ? facility.frais_huissier : 0
                });
                _this6.handleInput();
              }

              // console.log('newFacility items **',newFacility);
              // console.log('facility **** ',facility);
              // console.log('facility.id ',facility.id);
              // console.log('facIndex',facIndex);

              // return 
              _context2.next = 38;
              break;
            case 25:
              found = _this6.facilites_sollicitees.findIndex(function (el) {
                return el.uuid === facility.uuid || el.id === facility.id;
              });
              if (!(found === -1)) {
                _context2.next = 28;
                break;
              }
              return _context2.abrupt("return", {
                success: false,
                message: "La facilité sollicitée n'a pas été trouvée."
              });
            case 28:
              _tvaApply = _this6.formDataToBeWatched.tva;
              _isRachatExterne = !checkValue.includes(facility.frais_cheque_certifier) || !checkValue.includes(facility.frais_huissier);
              _tva_frais_dossier = facility.frais_dossier * _tvaApply || 0;
              isDiffere = ![0, '0', null, undefined].includes(facility.differe);
              facility = _objectSpread(_objectSpread(_objectSpread({}, _this6.facilites_sollicitees[found]), facility), {}, {
                differe: isDiffere ? 'Oui' : null
                // is_rachat: isRachatExterne ? "Oui" : null,
                // type_rachat: isRachatExterne ? "Rachat externe" : null,
              });
              _this6.facilites_sollicitees[found] = facility;
              facIndex = found;
              updateFields = {
                facilite_libelle: facility.type_facilite,
                montant_assurance: facility.montant_assurance,
                frais_dossier: facility.frais_dossier,
                tva_frais_dossier: _tva_frais_dossier,
                frais_cheque_certifie: _isRachatExterne ? facility.frais_cheque_certifier : undefined,
                frais_huissier: _isRachatExterne ? facility.frais_huissier : undefined
              };
              _selected = _this6.facilites_selectionnees.find(function (f) {
                return f.facilite_uuid === facility.uuid;
              });
              if (_selected) {
                Object.assign(_this6.facilites_selectionnees[found], updateFields);
                _this6.handleInput();
              }
            case 38:
              // console.log('facIndex !== -1 **** ',facIndex !== -1);
              // return
              if (facIndex !== -1) {
                _this6.facilites_sollicitees[facIndex] = JSON.parse(JSON.stringify(facility));
                _this6.formDataToBeWatched.facilites_sollicitees = _this6.facilites_sollicitees;
                _this6.handleInput();
              }
              result = {
                facility: facility,
                success: true,
                message: "Facilité sollicitée mise à jour avec succès."
              };
              EventBus.$emit("facility-updated", _objectSpread(_objectSpread({}, result), {}, {
                create: create
              }));
              return _context2.abrupt("return", result);
            case 44:
              _context2.prev = 44;
              _context2.t0 = _context2["catch"](0);
              console.error("updateFacilitySollicitees error", _context2.t0);
              return _context2.abrupt("return", {
                success: false,
                message: "Erreur lors de la mise à jour de la facilité sollicitée."
              });
            case 48:
            case "end":
              return _context2.stop();
          }
        }, _callee2, null, [[0, 44]]);
      }))();
    },
    onRequestTypeChange: function onRequestTypeChange() {
      this.handleInput();
    },
    checkboxValSegEnt: function checkboxValSegEnt(segment_entreprise, id) {
      var _this7 = this;
      this.formDataToBeWatched['segment_entreprise'] = segment_entreprise;
      for (var i = 0; i < this.segment_entreprise_list.length; i++) {
        if (i != id - 1) {
          this.segment_entreprise_list[i]['disabled'] = !this.segment_entreprise_list[i]['disabled'];
        }
      }
      var tbVal = null;
      var credVal = this.determineCredPubTablesFromDosCred(this.meta_data.dossier_credit);
      if (credVal[0]) {
        tbVal = credVal[2];
        _services_credit_service__WEBPACK_IMPORTED_MODULE_3__["default"].typeOfChefDCEI(segment_entreprise, this.meta_data.cred_pub_key, tbVal).then(function (res) {
          var ObjKey = res.data[0];
          var ObjVal = res.data[1];
          _this7.formDataToBeWatched[ObjKey] = ObjVal;
          if (!['', null, undefined].includes(res === null || res === void 0 ? void 0 : res.data[2])) {
            var _res$data$2$, _res$data$2$2;
            var ObjKey2 = (_res$data$2$ = res === null || res === void 0 ? void 0 : res.data[2][0]) !== null && _res$data$2$ !== void 0 ? _res$data$2$ : null;
            var ObjVal2 = (_res$data$2$2 = res === null || res === void 0 ? void 0 : res.data[2][1]) !== null && _res$data$2$2 !== void 0 ? _res$data$2$2 : null;
            if (!['', null, undefined].includes(ObjKey2)) {
              _this7.formDataToBeWatched[ObjKey2] = ObjVal2;
            }
          }
        })["catch"](function (err) {
          //  console.log(err)
        });
      }
    },
    setAllDefaultFields: function setAllDefaultFields(createdKey) {
      var _this8 = this;
      this.formDataToBeWatched = this.meta_data['dossier_credit'][createdKey];
      setTimeout(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var _this8$formDataToBeWa;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              if (((_this8$formDataToBeWa = _this8.formDataToBeWatched) === null || _this8$formDataToBeWa === void 0 ? void 0 : _this8$formDataToBeWa.type_credit) != "") {
                _this8.dpcredit1 = !_this8.dpcredit1;
              }
            case 1:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      })), 100);
    },
    setAllDefaultFieldsRecByCaf: function setAllDefaultFieldsRecByCaf() {
      var _this9 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
        var _this9$meta_data$doss, _this9$meta_data$doss2, _this9$meta_data$doss3, _this9$meta_data$doss4, _this9$meta_data$doss5, _this9$meta_data$doss6;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              _this9.formDataToBeWatched.denomination_client = ((_this9$meta_data$doss = _this9.meta_data['dossier_credit']) === null || _this9$meta_data$doss === void 0 || (_this9$meta_data$doss = _this9$meta_data$doss.caf_recorded_file) === null || _this9$meta_data$doss === void 0 || (_this9$meta_data$doss = _this9$meta_data$doss.client) === null || _this9$meta_data$doss === void 0 ? void 0 : _this9$meta_data$doss.nomcli) + ' ' + ((_this9$meta_data$doss2 = _this9.meta_data['dossier_credit']) === null || _this9$meta_data$doss2 === void 0 || (_this9$meta_data$doss2 = _this9$meta_data$doss2.caf_recorded_file) === null || _this9$meta_data$doss2 === void 0 || (_this9$meta_data$doss2 = _this9$meta_data$doss2.client) === null || _this9$meta_data$doss2 === void 0 ? void 0 : _this9$meta_data$doss2.prenomcli);
              _this9.formDataToBeWatched.type_demande = (_this9$meta_data$doss3 = _this9.meta_data['dossier_credit']) === null || _this9$meta_data$doss3 === void 0 || (_this9$meta_data$doss3 = _this9$meta_data$doss3.caf_recorded_file) === null || _this9$meta_data$doss3 === void 0 ? void 0 : _this9$meta_data$doss3.type_demande;
              _this9.formDataToBeWatched.type_credit = (_this9$meta_data$doss4 = _this9.meta_data['dossier_credit']) === null || _this9$meta_data$doss4 === void 0 || (_this9$meta_data$doss4 = _this9$meta_data$doss4.caf_recorded_file) === null || _this9$meta_data$doss4 === void 0 ? void 0 : _this9$meta_data$doss4.type_credit;
              _this9.formDataToBeWatched.contact_client = (_this9$meta_data$doss5 = _this9.meta_data['dossier_credit']) === null || _this9$meta_data$doss5 === void 0 || (_this9$meta_data$doss5 = _this9$meta_data$doss5.caf_recorded_file) === null || _this9$meta_data$doss5 === void 0 ? void 0 : _this9$meta_data$doss5.phone;
              _this9.formDataToBeWatched.email_client = (_this9$meta_data$doss6 = _this9.meta_data['dossier_credit']) === null || _this9$meta_data$doss6 === void 0 || (_this9$meta_data$doss6 = _this9$meta_data$doss6.caf_recorded_file) === null || _this9$meta_data$doss6 === void 0 ? void 0 : _this9$meta_data$doss6.email;
              // this.setTypeDemande(this.formDataToBeWatched?.type_demande)
              setTimeout(function () {
                var _this9$meta_data$doss7, _this9$meta_data$doss8, _this9$formDataToBeWa, _this9$formDataToBeWa2, _this9$meta_data$doss9;
                _this9.formDataToBeWatched.type_credit = (_this9$meta_data$doss7 = _this9.meta_data['dossier_credit']) === null || _this9$meta_data$doss7 === void 0 || (_this9$meta_data$doss7 = _this9$meta_data$doss7.caf_recorded_file) === null || _this9$meta_data$doss7 === void 0 ? void 0 : _this9$meta_data$doss7.type_de_pret;
                _this9.formDataToBeWatched.montant_sollicite = (_this9$meta_data$doss8 = _this9.meta_data['dossier_credit']) === null || _this9$meta_data$doss8 === void 0 || (_this9$meta_data$doss8 = _this9$meta_data$doss8.caf_recorded_file) === null || _this9$meta_data$doss8 === void 0 || (_this9$meta_data$doss8 = _this9$meta_data$doss8.montant) === null || _this9$meta_data$doss8 === void 0 ? void 0 : _this9$meta_data$doss8.toString().replace(/\s/g, '');
                _this9.formDataToBeWatched.enc_cumule_apres_acc = Number((_this9$formDataToBeWa = _this9.formDataToBeWatched.encours_actuel) === null || _this9$formDataToBeWa === void 0 ? void 0 : _this9$formDataToBeWa.toString().replace(/\s/g, '')) + Number((_this9$formDataToBeWa2 = _this9.formDataToBeWatched.montant_sollicite) === null || _this9$formDataToBeWa2 === void 0 ? void 0 : _this9$formDataToBeWa2.toString().replace(/\s/g, ''));
                if (((_this9$meta_data$doss9 = _this9.meta_data["dossier_credit"]) === null || _this9$meta_data$doss9 === void 0 || (_this9$meta_data$doss9 = _this9$meta_data$doss9['cred_pub_tb_10009']) === null || _this9$meta_data$doss9 === void 0 ? void 0 : _this9$meta_data$doss9.montant_credit) != undefined) {
                  var _this9$meta_data$doss0, _this9$meta_data$doss1, _this9$meta_data$doss10;
                  _this9.formDataToBeWatched.montant_credit = (_this9$meta_data$doss0 = _this9.meta_data["dossier_credit"]) === null || _this9$meta_data$doss0 === void 0 || (_this9$meta_data$doss0 = _this9$meta_data$doss0['cred_pub_tb_10009']) === null || _this9$meta_data$doss0 === void 0 ? void 0 : _this9$meta_data$doss0.montant_credit;
                  _this9.formDataToBeWatched.duree_credit = (_this9$meta_data$doss1 = _this9.meta_data["dossier_credit"]) === null || _this9$meta_data$doss1 === void 0 || (_this9$meta_data$doss1 = _this9$meta_data$doss1['cred_pub_tb_10009']) === null || _this9$meta_data$doss1 === void 0 ? void 0 : _this9$meta_data$doss1.duree_credit;
                  _this9.formDataToBeWatched.taux = (_this9$meta_data$doss10 = _this9.meta_data["dossier_credit"]) === null || _this9$meta_data$doss10 === void 0 || (_this9$meta_data$doss10 = _this9$meta_data$doss10['cred_pub_tb_10009']) === null || _this9$meta_data$doss10 === void 0 ? void 0 : _this9$meta_data$doss10.taux;
                } else {
                  var _this9$meta_data$doss11;
                  _this9.formDataToBeWatched.montant_credit = (_this9$meta_data$doss11 = _this9.meta_data['dossier_credit']) === null || _this9$meta_data$doss11 === void 0 || (_this9$meta_data$doss11 = _this9$meta_data$doss11.caf_recorded_file) === null || _this9$meta_data$doss11 === void 0 || (_this9$meta_data$doss11 = _this9$meta_data$doss11.montant) === null || _this9$meta_data$doss11 === void 0 ? void 0 : _this9$meta_data$doss11.toString().replace(/\s/g, '');
                }
              }, 1000);
              setTimeout(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
                var _this9$formDataToBeWa3;
                return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                  while (1) switch (_context4.prev = _context4.next) {
                    case 0:
                      if (((_this9$formDataToBeWa3 = _this9.formDataToBeWatched) === null || _this9$formDataToBeWa3 === void 0 ? void 0 : _this9$formDataToBeWa3.type_credit) != "") {
                        _this9.dpcredit1 = !_this9.dpcredit1;
                      }
                    case 1:
                    case "end":
                      return _context4.stop();
                  }
                }, _callee4);
              })), 100);
            case 7:
            case "end":
              return _context5.stop();
          }
        }, _callee5);
      }))();
    },
    setAllDefaultFieldsRecByEnr: function setAllDefaultFieldsRecByEnr() {
      var _this0 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
        var _this0$meta_data$doss, _this0$meta_data$doss2, _this0$meta_data$doss3, _this0$meta_data$doss4, _this0$meta_data$doss5, _this0$meta_data$doss6;
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              _this0.formDataToBeWatched.denomination_client = ((_this0$meta_data$doss = _this0.meta_data['dossier_credit']) === null || _this0$meta_data$doss === void 0 || (_this0$meta_data$doss = _this0$meta_data$doss.doss_central_file_recorder) === null || _this0$meta_data$doss === void 0 || (_this0$meta_data$doss = _this0$meta_data$doss.client) === null || _this0$meta_data$doss === void 0 ? void 0 : _this0$meta_data$doss.nomcli) + ' ' + ((_this0$meta_data$doss2 = _this0.meta_data['dossier_credit']) === null || _this0$meta_data$doss2 === void 0 || (_this0$meta_data$doss2 = _this0$meta_data$doss2.doss_central_file_recorder) === null || _this0$meta_data$doss2 === void 0 || (_this0$meta_data$doss2 = _this0$meta_data$doss2.client) === null || _this0$meta_data$doss2 === void 0 ? void 0 : _this0$meta_data$doss2.prenomcli);
              _this0.formDataToBeWatched.type_demande = (_this0$meta_data$doss3 = _this0.meta_data['dossier_credit']) === null || _this0$meta_data$doss3 === void 0 || (_this0$meta_data$doss3 = _this0$meta_data$doss3.doss_central_file_recorder) === null || _this0$meta_data$doss3 === void 0 ? void 0 : _this0$meta_data$doss3.type_demande;
              _this0.formDataToBeWatched.type_credit = (_this0$meta_data$doss4 = _this0.meta_data['dossier_credit']) === null || _this0$meta_data$doss4 === void 0 || (_this0$meta_data$doss4 = _this0$meta_data$doss4.doss_central_file_recorder) === null || _this0$meta_data$doss4 === void 0 ? void 0 : _this0$meta_data$doss4.type_credit;
              _this0.formDataToBeWatched.contact_client = (_this0$meta_data$doss5 = _this0.meta_data['dossier_credit']) === null || _this0$meta_data$doss5 === void 0 || (_this0$meta_data$doss5 = _this0$meta_data$doss5.doss_central_file_recorder) === null || _this0$meta_data$doss5 === void 0 ? void 0 : _this0$meta_data$doss5.phone;
              _this0.formDataToBeWatched.email_client = (_this0$meta_data$doss6 = _this0.meta_data['dossier_credit']) === null || _this0$meta_data$doss6 === void 0 || (_this0$meta_data$doss6 = _this0$meta_data$doss6.doss_central_file_recorder) === null || _this0$meta_data$doss6 === void 0 ? void 0 : _this0$meta_data$doss6.email;
              // this.setTypeDemande(this.formDataToBeWatched?.type_demande)
              setTimeout(function () {
                var _this0$meta_data$doss7, _this0$meta_data$doss8, _this0$formDataToBeWa, _this0$formDataToBeWa2, _this0$meta_data$doss9;
                _this0.formDataToBeWatched.type_credit = (_this0$meta_data$doss7 = _this0.meta_data['dossier_credit']) === null || _this0$meta_data$doss7 === void 0 || (_this0$meta_data$doss7 = _this0$meta_data$doss7.doss_central_file_recorder) === null || _this0$meta_data$doss7 === void 0 ? void 0 : _this0$meta_data$doss7.type_de_pret;
                _this0.formDataToBeWatched.montant_sollicite = (_this0$meta_data$doss8 = _this0.meta_data['dossier_credit']) === null || _this0$meta_data$doss8 === void 0 || (_this0$meta_data$doss8 = _this0$meta_data$doss8.doss_central_file_recorder) === null || _this0$meta_data$doss8 === void 0 || (_this0$meta_data$doss8 = _this0$meta_data$doss8.montant) === null || _this0$meta_data$doss8 === void 0 ? void 0 : _this0$meta_data$doss8.toString().replace(/\s/g, '');
                _this0.formDataToBeWatched.enc_cumule_apres_acc = Number((_this0$formDataToBeWa = _this0.formDataToBeWatched.encours_actuel) === null || _this0$formDataToBeWa === void 0 ? void 0 : _this0$formDataToBeWa.toString().replace(/\s/g, '')) + Number((_this0$formDataToBeWa2 = _this0.formDataToBeWatched.montant_sollicite) === null || _this0$formDataToBeWa2 === void 0 ? void 0 : _this0$formDataToBeWa2.toString().replace(/\s/g, ''));
                if (((_this0$meta_data$doss9 = _this0.meta_data["dossier_credit"]) === null || _this0$meta_data$doss9 === void 0 || (_this0$meta_data$doss9 = _this0$meta_data$doss9['cred_pub_tb_10009']) === null || _this0$meta_data$doss9 === void 0 ? void 0 : _this0$meta_data$doss9.montant_credit) != undefined) {
                  var _this0$meta_data$doss0, _this0$meta_data$doss1, _this0$meta_data$doss10;
                  _this0.formDataToBeWatched.montant_credit = (_this0$meta_data$doss0 = _this0.meta_data["dossier_credit"]) === null || _this0$meta_data$doss0 === void 0 || (_this0$meta_data$doss0 = _this0$meta_data$doss0['cred_pub_tb_10009']) === null || _this0$meta_data$doss0 === void 0 ? void 0 : _this0$meta_data$doss0.montant_credit;
                  _this0.formDataToBeWatched.duree_credit = (_this0$meta_data$doss1 = _this0.meta_data["dossier_credit"]) === null || _this0$meta_data$doss1 === void 0 || (_this0$meta_data$doss1 = _this0$meta_data$doss1['cred_pub_tb_10009']) === null || _this0$meta_data$doss1 === void 0 ? void 0 : _this0$meta_data$doss1.duree_credit;
                  _this0.formDataToBeWatched.taux = (_this0$meta_data$doss10 = _this0.meta_data["dossier_credit"]) === null || _this0$meta_data$doss10 === void 0 || (_this0$meta_data$doss10 = _this0$meta_data$doss10['cred_pub_tb_10009']) === null || _this0$meta_data$doss10 === void 0 ? void 0 : _this0$meta_data$doss10.taux;
                } else {
                  var _this0$meta_data$doss11;
                  _this0.formDataToBeWatched.montant_credit = (_this0$meta_data$doss11 = _this0.meta_data['dossier_credit']) === null || _this0$meta_data$doss11 === void 0 || (_this0$meta_data$doss11 = _this0$meta_data$doss11.doss_central_file_recorder) === null || _this0$meta_data$doss11 === void 0 || (_this0$meta_data$doss11 = _this0$meta_data$doss11.montant) === null || _this0$meta_data$doss11 === void 0 ? void 0 : _this0$meta_data$doss11.toString().replace(/\s/g, '');
                }
              }, 1000);
              setTimeout(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
                var _this0$formDataToBeWa3;
                return _regeneratorRuntime().wrap(function _callee6$(_context6) {
                  while (1) switch (_context6.prev = _context6.next) {
                    case 0:
                      // setTimeout(async () => {
                      //     let matcli = await this.fetchClientsAll(this.formDataToBeWatched.matricule_client)
                      //     this.matricule_client = matcli[0]
                      // }, 0)
                      if (((_this0$formDataToBeWa3 = _this0.formDataToBeWatched) === null || _this0$formDataToBeWa3 === void 0 ? void 0 : _this0$formDataToBeWa3.type_credit) != "") {
                        _this0.dpcredit1 = !_this0.dpcredit1;
                      }
                    case 1:
                    case "end":
                      return _context6.stop();
                  }
                }, _callee6);
              })), 100);
            case 7:
            case "end":
              return _context7.stop();
          }
        }, _callee7);
      }))();
    },
    selectTypeClientele: function selectTypeClientele(typeDeClientele) {
      var _this1 = this;
      var tbVal = null;
      var credVal = this.determineCredPubTablesFromDosCred(this.meta_data.dossier_credit);
      if (credVal[0]) {
        tbVal = credVal[2];
        _services_credit_service__WEBPACK_IMPORTED_MODULE_3__["default"].typeOfDispatcher(typeDeClientele, this.meta_data.cred_pub_key, tbVal).then(function (res) {
          _this1.formDataToBeWatched.disp_risq_filiale = res.data;
        })["catch"](function (err) {
          // console.log(err)
        });
      }
    },
    setSegmentEntreprise: function setSegmentEntreprise(segment_entreprise) {
      for (var i = 0; i < this.segment_entreprise_list.length; i++) {
        if (this.segment_entreprise_list[i]['name'] === segment_entreprise) {
          this.segment_entreprise_list[i]['checked'] = true;
          this.checkboxValSegEnt(segment_entreprise, this.segment_entreprise_list[i]['id']);
        }
      }
    },
    /****************************************************** */slctExistant: function slctExistant() {
      var _this$meta_data$dossi3;
      var existance;
      var experience = (_this$meta_data$dossi3 = this.meta_data.dossier_credit) === null || _this$meta_data$dossi3 === void 0 || (_this$meta_data$dossi3 = _this$meta_data$dossi3.cred_pub_tb_00) === null || _this$meta_data$dossi3 === void 0 ? void 0 : _this$meta_data$dossi3.experience_secteur;
      // console.log("experience", experience);
      if (experience <= 3) {
        existance = "<3 ans";
      } else {
        if (experience <= 5) {
          existance = ">3 ans";
        } else {
          if (experience <= 10) existance = ">5 ans";else existance = ">10 ans";
        }
      }
      return existance;
    },
    rtnExistant: function rtnExistant(data) {
      var existance;
      var experience = data;
      // console.log("experience", experience);
      if (experience <= 3) {
        existance = "<3 ans";
      } else {
        if (experience <= 5) {
          existance = ">3 ans";
        } else {
          if (experience <= 10) existance = ">5 ans";else existance = ">10 ans";
        }
      }
      return existance;
    },
    setCoSignataireVars: function setCoSignataireVars(event, index) {
      this.co_signataire[index][event[0]] = event[1];
      this.handleInput();
    },
    tableClosedOrOpened: function tableClosedOrOpened() {
      this.seen = this.fetchClosedTables(this.tb_name + this.meta_data["cred_pub_key"]);
    },
    openNotesModal: function openNotesModal() {
      var listing = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      this.listingNote = listing;
      this.$modal.show(this.tb_name);
    },
    // AJOUTER
    launchAutoSaver: function launchAutoSaver() {
      var _this10 = this;
      _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["default"].loadUserData().then(function (res) {
        _this10.send2Backend(res, 0, 0);
      })["catch"](function (err) {
        _this10.loadWithError(err);
      });
    },
    SetPermanantEmp: function SetPermanantEmp(event, index) {
      this.source_revenus[index][event[0]] = event[1];
      // this.som = parseInt(this.source_revenus[index].Permanente?.toString().replace(/\s/g, ''))
      // console.log(this.source_revenus[index].Permanente?.toString().replace(/\s/g, ''))
      // this.formDataToBeWatched['total'] = parseInt(this.som)
      this.formDataToBeWatched["total"] = this.totalMontant;
      this.handleInput();
    },
    formDataVars: function formDataVars(event) {
      this.formDataToBeWatched[event[0]] = event[1];
      if (event[0] == "date_reception_demande_client") {
        var d2 = new Date();
        var DateReception = new Date(event[1]);
        if (DateReception > d2) {
          this.formDataToBeWatched[event[0]] = "";
          this.$toasted.show("La date de réception de la demande client doit être antérieur à la date d'aujourd'hui.", {
            duration: 5000
          });
          return;
        }
      }
      this.handleInput();
    },
    onChange: function onChange(e) {
      if (e.target.value == "Non") {
        this.disp = true;
      } else {
        this.disp = false;
      }
    },
    loadRetrieved: function loadRetrieved() {
      var _this$meta_data$dossi4,
        _this11 = this,
        _this$meta_data$dossi23;
      var lentb = this.meta_data["dossier_credit"]["tbs_in_use"];
      var createdKey = this.tb_name;
      var createdKeyArr = createdKey.split("tb");
      createdKey = "cred_pub_tb_" + createdKeyArr[1];

      // Close table by default
      // this.defaultRetract(
      //     false,
      //     this.meta_data["dossier_credit"]?.applied_templ_id
      // );
      if ((_this$meta_data$dossi4 = this.meta_data["dossier_credit"]) !== null && _this$meta_data$dossi4 !== void 0 && _this$meta_data$dossi4["cred_pub_tb_120501"]) {
        var _this$meta_data$dossi5, _this$meta_data$dossi6, _this$revenu_domicili, _this$meta_data$dossi7, _this$meta_data$dossi8, _this$table;
        // Assignations
        // console.log("lodingi..",this.meta_data["dossier_credit"]?.["cred_pub_tb_120001"])

        this.revenu_domicilie = (_this$meta_data$dossi5 = (_this$meta_data$dossi6 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi6 === void 0 ? void 0 : _this$meta_data$dossi6["cred_pub_tb_120501"].revenu_domicilie) !== null && _this$meta_data$dossi5 !== void 0 ? _this$meta_data$dossi5 : [];
        this.formDataToBeWatched.taux_qc1 = ((_this$revenu_domicili = this.revenu_domicilie) === null || _this$revenu_domicili === void 0 || (_this$revenu_domicili = _this$revenu_domicili[0]) === null || _this$revenu_domicili === void 0 ? void 0 : _this$revenu_domicili['taux_qc1']) || 0;
        this.formDataToBeWatched.revenu_total_colonne_emprunteur = (_this$meta_data$dossi7 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi7 === void 0 ? void 0 : _this$meta_data$dossi7["cred_pub_tb_120501"].revenu_total_colonne_emprunteur;
        this.formDataToBeWatched.revenu_total_colonne_montant_pondere = (_this$meta_data$dossi8 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi8 === void 0 ? void 0 : _this$meta_data$dossi8["cred_pub_tb_120501"].revenu_total_colonne_montant_pondere;
        this.formDataToBeWatched.pourcentage_quotite = this.table1.pourcentage_quotite;
        this.formDataToBeWatched.quotite_cessible = this.table1.quotite_cessible;
        this.formDataToBeWatched.quotite_cessible_general = this.table1.quotite_cessible_general;
        this.formDataToBeWatched.pourcentage_quotite_general = this.table1.pourcentage_quotite_general;
        this.matrimoniale = (_this$table = this.table1) === null || _this$table === void 0 ? void 0 : _this$table.matrimoniale;
      }
      if (this.meta_data["dossier_credit"][createdKey] == undefined) {
        var _this$meta_data$dossi9;
        if (((_this$meta_data$dossi9 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi9 === void 0 ? void 0 : _this$meta_data$dossi9['cred_pub_tb_10009']) != undefined) {
          var data_tb9 = this.meta_data["dossier_credit"]['cred_pub_tb_10009'];
          if (data_tb9 !== null && data_tb9 !== void 0 && data_tb9.frais_credits) {
            data_tb9 === null || data_tb9 === void 0 || data_tb9.frais_credits.forEach(function (el) {
              if (el.libelle == "Prime d'assurance") {
                _this11.formDataToBeWatched.taux_prime = el.taux;
              }
            });
          }
        }
        this.facilites();
      }
      if (lentb.length > 0) {
        var _this$meta_data$dossi15;
        var ensureUserId = function ensureUserId(key) {
          var _this11$key;
          (_this11$key = _this11[key]) === null || _this11$key === void 0 || _this11$key.forEach(function (item) {
            if (!item.user_id || item.user_id === 0) {
              var _this11$authenticated, _this11$authenticated2, _this11$authenticated3;
              item.user_id = (_this11$authenticated = (_this11$authenticated2 = _this11.authenticatedUser) === null || _this11$authenticated2 === void 0 ? void 0 : _this11$authenticated2.id) !== null && _this11$authenticated !== void 0 ? _this11$authenticated : (_this11$authenticated3 = _this11.authenticatedUser) === null || _this11$authenticated3 === void 0 ? void 0 : _this11$authenticated3.user_id;
            }
          });
        };
        if (this.meta_data["dossier_credit"][createdKey] != undefined) {
          var _this$meta_data$dossi0, _this$formDataToBeWat, _this$meta_data$dossi1, _this$meta_data$dossi10;
          this.formDataToBeWatched = this.meta_data["dossier_credit"][createdKey];
          this.setSegmentEntreprise((_this$meta_data$dossi0 = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi0 === void 0 || (_this$meta_data$dossi0 = _this$meta_data$dossi0.cred_pub_tb_00) === null || _this$meta_data$dossi0 === void 0 ? void 0 : _this$meta_data$dossi0.segment_entreprise);
          var checkedSegmentEntreprise = this.segment_entreprise_list.filter(function (item) {
            if (item.name == _this11.formDataToBeWatched.segment_entreprise) {
              return item.checked = true;
            }
          });
          if (checkedSegmentEntreprise[0] != undefined && checkedSegmentEntreprise[0].id != undefined) {
            this.checkboxValSegEnt(checkedSegmentEntreprise[0].name, checkedSegmentEntreprise[0].id);
          }
          if (this.formDataToBeWatched.credit != undefined && this.formDataToBeWatched.credit.taux_max != undefined) {
            this.credit = this.formDataToBeWatched.credit;
            if (this.credit.duree_min != null && this.credit.duree_max != null) {
              this.info_sup = "(Min : ".concat(this.credit.duree_min, " Mois, Max : ").concat(this.credit.duree_max, " Mois)");
            } else if (this.credit.duree_min != null && this.credit.duree_min > 1) {
              this.info_sup = "(Min : ".concat(this.credit.duree_min, " Mois)");
            } else if (this.credit.duree_max != null) {
              this.info_sup = "(Max : ".concat(this.credit.duree_max, " Mois)");
            }
            this.handleSimulate();
          }
          if (['', null, undefined].includes((_this$formDataToBeWat = this.formDataToBeWatched) === null || _this$formDataToBeWat === void 0 ? void 0 : _this$formDataToBeWat.date_reception_demande_client)) {
            this.$set(this.formDataToBeWatched, 'date_reception_demande_client', "");
          }
          if (this.meta_data["dossier_credit"][createdKey]["facilites_existante"].length > 0) {
            this.facilites_existante = this.meta_data["dossier_credit"][createdKey]["facilites_existante"];
            ensureUserId("facilites_existante");
          }
          if (this.meta_data["dossier_credit"][createdKey]["facilites_existante_confrere"].length > 0) {
            this.facilites_existante_confrere = this.meta_data["dossier_credit"][createdKey]["facilites_existante_confrere"];
            ensureUserId("facilites_existante_confrere");
          }
          if (this.meta_data["dossier_credit"][createdKey]["facilites_existante_conjoint"].length > 0) {
            this.facilites_existante_conjoint = this.meta_data["dossier_credit"][createdKey]["facilites_existante_conjoint"];
            ensureUserId("facilites_existante_conjoint");
          }
          if (this.meta_data["dossier_credit"][createdKey]["facilites_sollicitees"].length > 0) {
            this.facilites_sollicitees = this.meta_data["dossier_credit"][createdKey]["facilites_sollicitees"];
            ensureUserId("facilites_sollicitees");
            EventBus.$emit("facilites-sollicitees-update", this.facilites_sollicitees);
          }
          if (((_this$meta_data$dossi1 = this.meta_data["dossier_credit"][createdKey]["facilites_selectionnees"]) === null || _this$meta_data$dossi1 === void 0 ? void 0 : _this$meta_data$dossi1.length) > 0) {
            this.facilites_selectionnees = this.meta_data["dossier_credit"][createdKey]["facilites_selectionnees"];
            ensureUserId("facilites_selectionnees");
          }

          // CHECK WHETHER IT IS FIRST TIME
          if (((_this$meta_data$dossi10 = this.meta_data['dossier_credit'][createdKey]) === null || _this$meta_data$dossi10 === void 0 ? void 0 : _this$meta_data$dossi10.is_first_time) === false) {
            this.setAllDefaultFields(createdKey);
          } else {
            var _this$meta_data$dossi11, _this$meta_data$dossi12;
            if (((_this$meta_data$dossi11 = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi11 === void 0 ? void 0 : _this$meta_data$dossi11.doss_central_file_recorder) !== undefined) {
              this.setAllDefaultFieldsRecByEnr();
            }
            if (((_this$meta_data$dossi12 = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi12 === void 0 ? void 0 : _this$meta_data$dossi12.caf_recorded_file) !== undefined) {
              this.setAllDefaultFieldsRecByCaf();
            }
          }
        } else {
          var _this$meta_data$dossi13, _this$meta_data$dossi14;
          if (((_this$meta_data$dossi13 = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi13 === void 0 ? void 0 : _this$meta_data$dossi13.doss_central_file_recorder) !== undefined) {
            this.setAllDefaultFieldsRecByEnr();
          }
          if (((_this$meta_data$dossi14 = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi14 === void 0 ? void 0 : _this$meta_data$dossi14.caf_recorded_file) != undefined) {
            this.setAllDefaultFieldsRecByCaf();
          }
        }
        // SET FIRST TIME TO FALSE
        this.formDataToBeWatched.is_first_time = false;
        this.formDataToBeWatched.type_de_clientele = "Particuliers";
        this.formDataToBeWatched.carcasse_type = (_this$meta_data$dossi15 = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi15 === void 0 ? void 0 : _this$meta_data$dossi15.applied_templ_name;
        setTimeout(function () {
          _this11.selectTypeClientele('Particuliers');
        }, 3000);
      } else {
        var _this$meta_data$dossi16;
        if (!this.dismissFormData.includes((_this$meta_data$dossi16 = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi16 === void 0 ? void 0 : _this$meta_data$dossi16.applied_templ_id)) {
          var _this$meta_data$dossi17, _this$meta_data$dossi18;
          if (((_this$meta_data$dossi17 = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi17 === void 0 ? void 0 : _this$meta_data$dossi17.doss_central_file_recorder) !== undefined) {
            this.setAllDefaultFieldsRecByEnr();
          }

          // IN CASE THE FILE IS OPENED BY CAF
          else if (((_this$meta_data$dossi18 = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi18 === void 0 ? void 0 : _this$meta_data$dossi18.caf_recorded_file) !== undefined) {
            var _this$meta_data$dossi19;
            this.setAllDefaultFieldsRecByCaf();
            var caf_recorded_file = this.meta_data["dossier_credit"]["caf_recorded_file"];
            this.formDataToBeWatched.montant_sollicite = caf_recorded_file === null || caf_recorded_file === void 0 ? void 0 : caf_recorded_file.montant;
            if (((_this$meta_data$dossi19 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi19 === void 0 || (_this$meta_data$dossi19 = _this$meta_data$dossi19['cred_pub_tb_10009']) === null || _this$meta_data$dossi19 === void 0 ? void 0 : _this$meta_data$dossi19.montant_credit) != undefined) {
              var _this$meta_data$dossi20, _this$meta_data$dossi21, _this$meta_data$dossi22;
              this.formDataToBeWatched.montant_credit = (_this$meta_data$dossi20 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi20 === void 0 || (_this$meta_data$dossi20 = _this$meta_data$dossi20['cred_pub_tb_10009']) === null || _this$meta_data$dossi20 === void 0 ? void 0 : _this$meta_data$dossi20.montant_credit;
              this.formDataToBeWatched.duree_credit = (_this$meta_data$dossi21 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi21 === void 0 || (_this$meta_data$dossi21 = _this$meta_data$dossi21['cred_pub_tb_10009']) === null || _this$meta_data$dossi21 === void 0 ? void 0 : _this$meta_data$dossi21.duree_credit;
              this.formDataToBeWatched.taux = (_this$meta_data$dossi22 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi22 === void 0 || (_this$meta_data$dossi22 = _this$meta_data$dossi22['cred_pub_tb_10009']) === null || _this$meta_data$dossi22 === void 0 ? void 0 : _this$meta_data$dossi22.taux;
            } else {
              this.formDataToBeWatched.montant_credit = caf_recorded_file === null || caf_recorded_file === void 0 ? void 0 : caf_recorded_file.montant;
            }
          }
          // IN CASE THE FILE IS OPENED BY ENR

          // SET FIRST TIME TO FALSE
          this.formDataToBeWatched.is_first_time = false;
          this.formDataToBeWatched.type_de_clientele = "Particuliers";
          setTimeout(function () {
            _this11.selectTypeClientele('Particuliers');
          }, 3000);
        }
      }
      if (((_this$meta_data$dossi23 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi23 === void 0 ? void 0 : _this$meta_data$dossi23['cred_pub_tb_10009']) != undefined) {
        var _data_tb = this.meta_data["dossier_credit"]['cred_pub_tb_10009'];
        if (_data_tb !== null && _data_tb !== void 0 && _data_tb.frais_credits) {
          _data_tb === null || _data_tb === void 0 || _data_tb.frais_credits.forEach(function (el) {
            if (el.libelle == "Prime d'assurance") {
              _this11.formDataToBeWatched.taux_prime = el.taux;
            }
          });
        }
        this.formDataToBeWatched.taux = _data_tb === null || _data_tb === void 0 ? void 0 : _data_tb.taux;
        this.formDataToBeWatched.duree_credit = _data_tb === null || _data_tb === void 0 ? void 0 : _data_tb.duree_credit;
        this.formDataToBeWatched.montant_credit = _data_tb === null || _data_tb === void 0 ? void 0 : _data_tb.montant_credit;
        this.formDataToBeWatched.date_echeance = _data_tb === null || _data_tb === void 0 ? void 0 : _data_tb.date_echeance;
        this.formDataToBeWatched.mode_paiement_demande = _data_tb === null || _data_tb === void 0 ? void 0 : _data_tb.mode_paiement_demande;
      }
      this.emitEventForTAFNearRight();
    },
    setTbVal: function setTbVal(val) {
      this.cred_pub_key = val;
    },
    loadWithError: function loadWithError(err) {
      //// window.location.href = "/login";
    },
    send2Backend: function send2Backend(res, newVal, oldVal) {
      this.authcheck = true;
      this.authcheckUsr = res.data;
      this.authcheckStatus = res.status;
      if (this.formDataToBeWatched.filiale == null) {
        this.formDataToBeWatched.filiale = this.authcheckUsr.filiale;
      }
      if (this.authcheck === true) {
        // console.log(this.formDataToBeWatched)
        this.$emit("autosaving");
        this.$axios.post(this.ebapisHost + "creditbuilder/api/v1/autosaving/", {
          user: this.authcheckUsr,
          meta_parseable: this.meta_parseable,
          filledData: this.formDataToBeWatched
        }).then(function (response) {
          this.$emit("autosaving");
          // this.$Progress.finish();
          // console.log(response);
          var tbFetcheData = response.data;
          // this.launchScoringTable("organisation");
          // this.launchScoringTable("evaluation");
          // this.launchScoringTable("activite");
          // this.launchScoringTable("competence");
          if (tbFetcheData["is_success"] === true) {
            this.$emit("load-shell");
          }
        }.bind(this))["catch"](function (error) {
          this.$Progress.finish();
          // console.log(error);
        }.bind(this));
      } else {
        alert("Unauthenticated");
      }
    },
    onSlctMatCli: function onSlctMatCli(obj, key) {
      this.entite_connectes[key]["raison_social_entite_connecte"] = obj.nomcli;
      this.entite_connectes[key]["matricule_client_entite_connecte"] = obj.matclihan;
      this.handleInput();
    },
    retract: function retract() {
      this.seen = !this.seen;
      var a = {
        tb_name: this.tb_name + this.meta_data["cred_pub_key"],
        status: this.seen
      };
      EventBus.$emit("savedclosed-table", a);
    },
    // add defaultRetract
    defaultRetract: function defaultRetract(rc, ra) {
      if (ra != null) {
        this.seen = rc;
        var a = {
          tb_name: this.tb_name + this.meta_data["cred_pub_key"],
          status: this.seen
        };
        EventBus.$emit("savedclosed-table", a);
      }
    },
    retract1: function retract1() {
      this.seen1 = !this.seen1;
    },
    somX3: function somX3(ob, key) {
      var som = 0;
      ob.filter(function (elm) {
        var _elm$key;
        som += Number((_elm$key = elm[key]) === null || _elm$key === void 0 ? void 0 : _elm$key.toString().replace(/\s/g, ""));
      });
      return som;
    },
    somX4: function somX4(ob, keyA, keyB) {
      var _ob$0$keyA, _ob$0$keyB;
      var som = Number((_ob$0$keyA = ob[0][keyA]) === null || _ob$0$keyA === void 0 ? void 0 : _ob$0$keyA.toString().replace(/\s/g, "")) * Number((_ob$0$keyB = ob[0][keyB]) === null || _ob$0$keyB === void 0 ? void 0 : _ob$0$keyB.toString().replace(/\s/g, ""));
      ob.filter(function (elm, index) {
        if (index > 0) {
          var _elm$keyA, _elm$keyB;
          var result = Number((_elm$keyA = elm[keyA]) === null || _elm$keyA === void 0 ? void 0 : _elm$keyA.toString().replace(/\s/g, "")) * Number((_elm$keyB = elm[keyB]) === null || _elm$keyB === void 0 ? void 0 : _elm$keyB.toString().replace(/\s/g, ""));
          som += result;
        }
      });
      return som;
    },
    handleInput: function handleInput(evt, index) {
      this.handleSimulate();
      this.getTauxEndettement();
      this.getRemboursement();
      EventBus.$emit("dossier-updated-cs-2", {
        data: this.formDataToBeWatched
      });
    },
    emitData: function emitData() {
      EventBus.$emit("dossier-updated-dcp-1", {
        data_tb1: this.formDataToBeWatched
      });
    },
    loadTbAttrs: function loadTbAttrs() {
      var l = [];
      var topdivel = this.$refs.topdiv;
      var k = document.querySelectorAll(".subdiv" + this.tb_name);
      // console.log(k)
      k.forEach(function (e) {
        l.push(e.innerText);
        // console.log(l)
      });
      var p = {
        name_of_title: topdivel.innerText,
        list_of_content: l,
        id: "dcp-ppo1-head"
      };
      // console.log(p)
      this.$emit("load-buffer", p);
    },
    checkboxValCashCall: function checkboxValCashCall(event) {
      if (event.target.checked) {
        this.formDataToBeWatched.pret_couvert_cash_call = event.target.value;
      } else {
        this.formDataToBeWatched.pret_couvert_cash_call = "";
      }
    },
    checkboxValCashCall2: function checkboxValCashCall2(event) {
      if (event.target.checked) {
        this.formDataToBeWatched.forfait = event.target.value;
      } else {
        this.formDataToBeWatched.forfait = "";
      }
    },
    checkboxValCashCall3: function checkboxValCashCall3(event) {
      if (event.target.checked) {
        this.formDataToBeWatched.pret_cher_confrere = event.target.value;
        if (event.target.value == "Non") {
          this.formDataToBeWatched.facilites_existante_confrere = [];
        } else {
          this.facilites_existante_confrere = [{
            "id": 1,
            "uuid": this.generateUuid(),
            "filiale": "",
            "type_facilite": "",
            "facilite_libelle": "",
            "fcub_type_categorie": "",
            "montant_credit": 0,
            "duree": 0,
            "taux": 0,
            "echeancier": "",
            "montant_echeance": 0,
            "impaye": 0,
            "encours": 0,
            "frais_dossier": 0,
            "montant_assurance": 0,
            "TEG": "",
            "statut": "",
            "date_echeance": "",
            "is_remboursement_anticipe": null,
            "is_rachat": null,
            "commentaire": "",
            "checked": false,
            "disabled": false,
            "line": "credit_old"
          }];
        }
      } else {
        this.formDataToBeWatched.pret_cher_confrere = "";
      }
    },
    checkboxValCashCallPartieLie: function checkboxValCashCallPartieLie(event) {
      if (event.target.checked) {
        this.formDataToBeWatched.partie_lie = event.target.value;
      } else {
        this.formDataToBeWatched.partie_lie = "";
      }
    },
    checkboxProgramFinancement: function checkboxProgramFinancement(event) {
      if (event.target.checked) {
        this.formDataToBeWatched.is_except_prog_fin = event.target.value;
      } else {
        this.formDataToBeWatched.is_except_prog_fin = "";
      }
    },
    checkboxCaractereLocatif: function checkboxCaractereLocatif(event) {
      if (event.target.checked) {
        this.formDataToBeWatched.is_caractere_locatif = event.target.value;
      } else {
        this.formDataToBeWatched.is_caractere_locatif = "";
      }
    },
    checkboxValCashCallCreditEmploye: function checkboxValCashCallCreditEmploye(event) {
      if (event.target.checked) {
        this.formDataToBeWatched.credit_employe_afg = event.target.value;
      } else {
        this.formDataToBeWatched.credit_employe_afg = "";
      }
    },
    getCreditBanques: function getCreditBanques() {
      var _this12 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
        return _regeneratorRuntime().wrap(function _callee8$(_context8) {
          while (1) switch (_context8.prev = _context8.next) {
            case 0:
              _context8.next = 2;
              return _services_credit_service__WEBPACK_IMPORTED_MODULE_3__["default"].loadCreditBanques().then(function (res) {
                _this12.type_credits = res.data;
                _this12.list_categories_final = _this12.type_credits;
                // localStorage.setItem('banque_credit_types', JSON.stringify(res.data));
                setTimeout(function () {
                  _this12.handleChangeTypeCredit(_this12.formDataToBeWatched.type_credit);
                }, 1000);
              })["catch"](function (err) {
                // console.log(err)
              });
            case 2:
            case "end":
              return _context8.stop();
          }
        }, _callee8);
      }))();
    },
    handleChangeTypeCredit: function handleChangeTypeCredit(val) {
      var _arguments = arguments,
        _this13 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
        var resetValue, data;
        return _regeneratorRuntime().wrap(function _callee9$(_context9) {
          while (1) switch (_context9.prev = _context9.next) {
            case 0:
              resetValue = _arguments.length > 1 && _arguments[1] !== undefined ? _arguments[1] : false;
              _this13.info_sup = "";
              _this13.formDataToBeWatched.taux = _this13.formDataToBeWatched.taux != "" ? _this13.formDataToBeWatched.taux : "";
              _this13.formDataToBeWatched.duree_credit = _this13.formDataToBeWatched.duree_credit != "" ? _this13.formDataToBeWatched.duree_credit : "";
              if (resetValue) {
                _this13.formDataToBeWatched.taux = "";
                _this13.formDataToBeWatched.duree_credit = "";
              }
              data = $.grep(_this13.type_credits, function (v) {
                return v.libelle === val;
              });
              if (data.length > 0) {
                _this13.credit = data[0];
                _this13.formDataToBeWatched.credit = data[0];

                /* await Credit.loadFraisCreditChapCahp(this.credit.slug, slug_banque)
                    .then(res => {
                        this.taxe = res.data.data.Credit.taxe.valeur_taxe;
                    }).catch(err => {
                        console.log(err)
                    }) */

                if (_this13.formDataToBeWatched.taux == "") {
                  _this13.formDataToBeWatched.taux = data[0].taux_max == null ? data[0].taux_min : data[0].taux_max;
                }
                if (_this13.formDataToBeWatched.duree_credit == "") {
                  _this13.formDataToBeWatched.duree_credit = data[0].duree_max == null ? data[0].duree_min : data[0].duree_max;
                }
                if (_this13.credit.duree_min != null && _this13.credit.duree_max != null) {
                  _this13.info_sup = "(Min : ".concat(_this13.credit.duree_min, " Mois, Max : ").concat(_this13.credit.duree_max, " Mois)");
                } else if (_this13.credit.duree_min != null && _this13.credit.duree_min > 1) {
                  _this13.info_sup = "(Min : ".concat(_this13.credit.duree_min, " Mois)");
                } else if (_this13.credit.duree_max != null) {
                  _this13.info_sup = "(Max : ".concat(_this13.credit.duree_max, " Mois)");
                }
                _this13.handleSimulate();
              }
            case 7:
            case "end":
              return _context9.stop();
          }
        }, _callee9);
      }))();
    },
    getIndicatifBureau: function getIndicatifBureau(index) {
      var _this$formDataToBeWat2, _this$formDataToBeWat3;
      return (_this$formDataToBeWat2 = this.formDataToBeWatched) !== null && _this$formDataToBeWat2 !== void 0 && (_this$formDataToBeWat2 = _this$formDataToBeWat2.cautionnement_personnel[index]) !== null && _this$formDataToBeWat2 !== void 0 && _this$formDataToBeWat2.telephone ? (_this$formDataToBeWat3 = this.formDataToBeWatched) === null || _this$formDataToBeWat3 === void 0 || (_this$formDataToBeWat3 = _this$formDataToBeWat3.cautionnement_personnel[index]) === null || _this$formDataToBeWat3 === void 0 ? void 0 : _this$formDataToBeWat3.telephone.split(' ')[0] : '+';
    },
    formatAmount: function formatAmount(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    },
    convertInt: function convertInt(n) {
      var _n$toString;
      if (['', null, undefined].includes(n)) return 0;
      return Number(n === null || n === void 0 || (_n$toString = n.toString()) === null || _n$toString === void 0 ? void 0 : _n$toString.replace(/\s/g, ''));
    },
    handleSimulate: function handleSimulate() {
      if (this.formDataToBeWatched.taux == '') {
        this.formDataToBeWatched.taux = 0;
      }
      this.taux = parseFloat(this.formDataToBeWatched.taux);
      var montant = this.convertInt(this.formDataToBeWatched.montant_credit);
      var duree = parseFloat(this.formDataToBeWatched.duree_credit);
      this.formDataToBeWatched.duree_credit = duree;

      /* if (duree == 0) {
          this.formDataToBeWatched.duree_credit = this.credit.duree_min;
          this.$toasted.error("La durée ne peut pas être de 0.", { duration: 5000 });
          return 0;
      }
      if (montant == 0 || montant == "") {
          this.$toasted.error("Le montant ne peut pas être de 0.", { duration: 5000 });
          return 0;
      }
      if (this.formDataToBeWatched.type_credit == "") {
          this.$toasted.error("Veuillez choisir le type de crédit.", { duration: 5000 });
          return 0;
      }
        if (this.credit.duree_min == undefined || this.credit.duree_max == undefined) {
          return 0;
      }
        let __duree = this.formDataToBeWatched.duree_credit;
      if(!(this.credit.duree_min <= __duree && this.credit.duree_max >= __duree)) {
          this.formDataToBeWatched.duree_credit = (this.credit.duree_min > __duree) ? this.credit.duree_min : this.credit.duree_max;
          this.$toasted.error(`La durée du crédit doit être comprise entre ${this.credit.duree_min} et ${this.credit.duree_max}.`, { duration: 5000 });
          return 0;
      } */

      var tauxMensuel = Math.pow(1 + this.taux / 100, 1 / 12) - 1;
      var mensualite = Hypo.VPM(montant, duree, tauxMensuel, 0);
      var interet_ht = mensualite * duree - montant;
      this.res = Math.ceil(interet_ht + interet_ht * this.taxe / 100);
      mensualite = Math.ceil(mensualite + interet_ht * this.taxe / 100 / duree);
      var totalCredt = this.res + parseInt(montant);
      this.formDataToBeWatched.r_mensualite = this.formatAmount(mensualite);
      this.formDataToBeWatched.r_interet = this.formatAmount(this.res);
      this.formDataToBeWatched.r_ttcredit = this.formatAmount(totalCredt);
      EventBus.$emit("cred_pub_tb_10001-updated", {
        montant_sollicite: this.formDataToBeWatched.montant_sollicite,
        montant_credit: this.formDataToBeWatched.montant_credit,
        echeance: this.formDataToBeWatched.r_mensualite,
        taux: this.formDataToBeWatched.taux,
        taux_prime: this.formDataToBeWatched.taux_prime,
        duree_credit: this.formDataToBeWatched.duree_credit,
        r_mensualite: this.formDataToBeWatched.r_mensualite,
        r_interet: this.formDataToBeWatched.r_interet,
        r_ttcredit: this.formDataToBeWatched.r_ttcredit,
        mode_paiement_demande: this.formDataToBeWatched.mode_paiement_demande
      });
      this.emitEventForTbEndettement();
      this.getRemboursement();
      this.emitData();
    },
    addMoreFaciliteExistanteChezConfrere: function addMoreFaciliteExistanteChezConfrere() {
      var _this$facilites_exist, _this$authenticatedUs17, _this$authenticatedUs18, _this$authenticatedUs19;
      var nb = (_this$facilites_exist = this.facilites_existante_confrere) === null || _this$facilites_exist === void 0 ? void 0 : _this$facilites_exist.length;
      this.facilites_existante_confrere.push({
        "id": nb + 1,
        "uuid": this.generateUuid(),
        "institution_confrere": "",
        "type_facilite": "",
        "facilite_libelle": "",
        "fcub_type_categorie": "",
        "montant_credit": 0,
        "duree": 0,
        "taux": 0,
        "echeancier": "",
        "montant_echeance": 0,
        "encours": 0,
        // "frais_dossier": 0,
        // "montant_assurance": 0,
        // "impaye":0,
        // "TEG": "",
        // "statut": "",
        "date_echeance": "",
        // "is_remboursement_anticipe": null,
        // "is_rachat": null,
        "commentaire": "",
        "checked": false,
        "disabled": false,
        "line": "credit_old",
        user_id: (_this$authenticatedUs17 = (_this$authenticatedUs18 = this.authenticatedUser) === null || _this$authenticatedUs18 === void 0 ? void 0 : _this$authenticatedUs18.id) !== null && _this$authenticatedUs17 !== void 0 ? _this$authenticatedUs17 : (_this$authenticatedUs19 = this.authenticatedUser) === null || _this$authenticatedUs19 === void 0 ? void 0 : _this$authenticatedUs19.user_id
      });
      this.handleInput();
    },
    addMoreFaciliteExistanteChezConjoint: function addMoreFaciliteExistanteChezConjoint() {
      var _this$facilites_exist2, _this$authenticatedUs20, _this$authenticatedUs21, _this$authenticatedUs22;
      var nb = (_this$facilites_exist2 = this.facilites_existante_conjoint) === null || _this$facilites_exist2 === void 0 ? void 0 : _this$facilites_exist2.length;
      this.facilites_existante_conjoint.push({
        "id": nb + 1,
        "uuid": this.generateUuid(),
        "type_facilite": "",
        "facilite_libelle": "",
        "fcub_type_categorie": "",
        "montant_credit": 0,
        "duree": 0,
        "taux": 0,
        "echeancier": "",
        "montant_echeance": 0,
        "encours": 0,
        "frais_dossier": 0,
        "montant_assurance": 0,
        "impaye": 0,
        "TEG": "",
        "statut": "",
        "date_echeance": "",
        "is_remboursement_anticipe": null,
        "is_rachat": null,
        "commentaire": "",
        "checked": false,
        "disabled": false,
        "line": "credit_old",
        user_id: (_this$authenticatedUs20 = (_this$authenticatedUs21 = this.authenticatedUser) === null || _this$authenticatedUs21 === void 0 ? void 0 : _this$authenticatedUs21.id) !== null && _this$authenticatedUs20 !== void 0 ? _this$authenticatedUs20 : (_this$authenticatedUs22 = this.authenticatedUser) === null || _this$authenticatedUs22 === void 0 ? void 0 : _this$authenticatedUs22.user_id
      });
      this.handleInput();
    },
    addMoreFaciliteExistante: function addMoreFaciliteExistante() {
      var _this$facilites_exist3, _this$authenticatedUs23, _this$authenticatedUs24, _this$authenticatedUs25, _this$authenticatedUs26;
      var nb = (_this$facilites_exist3 = this.facilites_existante) === null || _this$facilites_exist3 === void 0 ? void 0 : _this$facilites_exist3.length;
      this.facilites_existante.push({
        "id": nb + 1,
        "uuid": this.generateUuid(),
        "filiale": (_this$authenticatedUs23 = this.authenticatedUser) === null || _this$authenticatedUs23 === void 0 ? void 0 : _this$authenticatedUs23.filiale,
        "type_facilite": "",
        "facilite_libelle": "",
        "fcub_type_categorie": "",
        "montant_credit": 0,
        "duree": 0,
        "taux": 0,
        "echeancier": "",
        "montant_echeance": 0,
        "encours": 0,
        "frais_dossier": 0,
        "montant_assurance": 0,
        "impaye": 0,
        "credit_en_cours": "",
        "TEG": "",
        "statut": "",
        "date_echeance": "",
        "is_remboursement_anticipe": null,
        "is_rachat": null,
        "commentaire": "",
        "checked": false,
        "disabled": false,
        "line": "credit_old",
        "is_locale": true,
        user_id: (_this$authenticatedUs24 = (_this$authenticatedUs25 = this.authenticatedUser) === null || _this$authenticatedUs25 === void 0 ? void 0 : _this$authenticatedUs25.id) !== null && _this$authenticatedUs24 !== void 0 ? _this$authenticatedUs24 : (_this$authenticatedUs26 = this.authenticatedUser) === null || _this$authenticatedUs26 === void 0 ? void 0 : _this$authenticatedUs26.user_id
      });
      this.handleInput();
    },
    removeFaciliteExistChezConjoint: function removeFaciliteExistChezConjoint(index) {
      this.facilites_existante_conjoint.splice(index, 1);
      this.handleInput();
      this.sendFacilitesEventMessage();
      // this.emitData()
    },
    removeFaciliteExistChezConfrere: function removeFaciliteExistChezConfrere(index) {
      this.facilites_existante_confrere.splice(index, 1);
      // this.reconstructionFacilitiesSollicites()
      this.handleInput();
      this.sendFacilitesEventMessage();
      this.getRemboursement();
      // this.emitData()
      // this.getQuotiteCessible();
    },
    removeFaciliteExist: function removeFaciliteExist(index) {
      this.facilites_existante.splice(index, 1);
      // this.reconstructionFacilitiesSollicites()
      this.handleInput();
      this.sendFacilitesEventMessage();
      this.getRemboursement();
      // this.emitData()
      // this.getQuotiteCessible();
    },
    formDataVars3: function formDataVars3(event, index, key) {
      this[key][index][event[0]] = event[1];
      this.formDataToBeWatched[key] = this[key];
      if (event[0] == 'montant_credit') {
        this.recalculerCashCall(event, index, 'cash_call_percent', true);
      }
      this.sendFacilitesEventMessage();
      this.getRemboursement();
      // this.emitData()

      EventBus.$emit("dcpp-pcp4-updated", this.formDataToBeWatched);
    },
    recalculerTVAFraisDossier: function recalculerTVAFraisDossier(event, index, fiedName) {
      var _this$authcheckUsr$tv, _this$authcheckUsr;
      var frais = parseFloat(String(event.target.value).replace(/\s+/g, ""));
      var tvaRate = parseFloat((_this$authcheckUsr$tv = (_this$authcheckUsr = this.authcheckUsr) === null || _this$authcheckUsr === void 0 ? void 0 : _this$authcheckUsr.tva) !== null && _this$authcheckUsr$tv !== void 0 ? _this$authcheckUsr$tv : 0);

      // On calcule la TVA comme pourcentage (ex: 19.25%)
      this.facilites_selectionnees[index].tva_frais_dossier = parseInt(frais * tvaRate / 100) || 0;
      this.facilites_selectionnees[index][fiedName] = frais;
      this.formDataToBeWatched['facilites_selectionnees'] = this.facilites_selectionnees;
    },
    recalculerCashCall: function recalculerCashCall(event, index, fieldName) {
      var _this$facilites_solli;
      var refresh = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
      var inputValue;
      if (refresh) {
        var _this$facilites_selec;
        inputValue = (_this$facilites_selec = this.facilites_selectionnees[index]) === null || _this$facilites_selec === void 0 ? void 0 : _this$facilites_selec[fieldName];
      } else {
        var _event$;
        var rawInput = (_event$ = event === null || event === void 0 ? void 0 : event[1]) !== null && _event$ !== void 0 ? _event$ : '';
        inputValue = parseFloat(String(rawInput).replace(/\s+/g, ''));
      }

      // Si la valeur est null, NaN ou négative, on met à 0
      if (!inputValue || isNaN(inputValue) || inputValue < 0) {
        inputValue = 0;
      }
      var montantCreditRaw = ((_this$facilites_solli = this.facilites_sollicitees[index]) === null || _this$facilites_solli === void 0 ? void 0 : _this$facilites_solli.montant_credit) || 0;
      var montantCredit = this.convertInt(montantCreditRaw);
      var cashCallPercent = 0;
      var cashCallAmount = 0;
      if (fieldName === 'cash_call_percent') {
        cashCallPercent = inputValue;
        cashCallAmount = parseInt(cashCallPercent / 100 * montantCredit) || 0;
      } else if (fieldName === 'cash_call_amount') {
        cashCallAmount = inputValue;
        cashCallPercent = montantCredit > 0 ? cashCallAmount / montantCredit * 100 : 0;
        cashCallPercent = Math.round(cashCallPercent * 100) / 100; // optionnel : arrondi à 2 décimales
      }

      // Met à jour les valeurs dans l'objet
      this.facilites_selectionnees[index].cash_call_amount = cashCallAmount;
      this.facilites_selectionnees[index].cash_call_percent = cashCallPercent;
      this.formDataToBeWatched['facilites_selectionnees'] = this.facilites_selectionnees;
    },
    formDataVars4: function formDataVars4(event, index, key) {
      this[key][index][event[0]] = event[1];
      this.formDataToBeWatched[key] = this[key];
    },
    sendFacilitesEventMessage: function sendFacilitesEventMessage() {
      EventBus.$emit("dossier-updated-dcpp-pcp4-0-1", this.facilites_sollicitees);
    },
    formDataVarsGaranties: function formDataVarsGaranties(event, index, key) {
      this.totalsFacilitesConfrere;
      this[key][index][event[0]] = event[1];
      this.formDataToBeWatched[key] = this[key];
      // this.reconstructionFacilitiesSollicites()
      this.emitEventForTbEndettement();
      this.getRemboursement();
      // this.getQuotiteCessible();
      // this.emitData()
    },
    findGroupForType: function findGroupForType(type, creditsData) {
      var _this14 = this;
      var key = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var index = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
      if (!type) return '';
      var _loop = function _loop() {
          var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
            group = _Object$entries$_i[0],
            items = _Object$entries$_i[1];
          var found = items.find(function (credit) {
            return credit.libelle === type;
          });
          if (key === 'facilites_sollicitees') {
            var item_sollicite = _this14[key][index];
            var matchingFacilite = _this14.facilites_selectionnees.find(function (facilite) {
              return facilite.facilite_uuid === item_sollicite.uuid;
            });
            if (matchingFacilite) {
              matchingFacilite.facilite_libelle = (item_sollicite === null || item_sollicite === void 0 ? void 0 : item_sollicite.type_facilite) || '';
            } else {
              console.warn("No matching facilite found in facilites_selectionnees for uuid: ".concat(item_sollicite === null || item_sollicite === void 0 ? void 0 : item_sollicite.uuid));
            }
          }
          if (found) return {
            v: group
          };
        },
        _ret;
      for (var _i = 0, _Object$entries = Object.entries(creditsData); _i < _Object$entries.length; _i++) {
        _ret = _loop();
        if (_ret) return _ret.v;
      }
      // console.log('hrer')

      return '';
    },
    handleInputGaranties: function handleInputGaranties(index, key) {
      this.formDataToBeWatched.facilites_existante = this.facilites_existante;
      if (index >= 0 && index < this.facilites_existante.length && key === 'facilites_existante') {
        var selectedType = this.facilites_existante[index].type_facilite;
        this.facilites_existante[index].facilite_libelle = this.findGroupForType(selectedType, this.transformLoadedCreditsBanques_);
      }
      if (index >= 0 && index < this.facilites_sollicitees.length && key === 'facilites_sollicitees') {
        var _this$facilites_solli4;
        this.formDataToBeWatched.facilites_sollicitees = this.facilites_sollicitees;
        var selectedType2 = this.facilites_sollicitees[index].type_facilite;
        this.facilites_sollicitees[index].facilite_libelle = this.findGroupForType(selectedType2, this.transformLoadedCreditsBanques_, 'facilites_sollicitees', index);
        this.facilites_sollicitees[index].infos_fcub = this.findFlexcubeByType('facilites_sollicitees', selectedType2, this.transformLoadedCreditsBanques_, index);
        this.facilites_sollicitees[index].duree = 0;
        this.facilites_sollicitees[index].echeancier = "";
        if (index == 0) {
          var _this$facilites_solli2;
          if (((_this$facilites_solli2 = this.facilites_sollicitees) === null || _this$facilites_solli2 === void 0 ? void 0 : _this$facilites_solli2.length) > 1) {
            var _this$facilites_solli3;
            var label = (_this$facilites_solli3 = this.facilites_sollicitees[index]) === null || _this$facilites_solli3 === void 0 ? void 0 : _this$facilites_solli3.facilite_libelle;
            for (var idx = 1; idx < this.facilites_sollicitees.length; idx++) {
              var sollicitee = this.facilites_sollicitees[idx];
              if (label != (sollicitee === null || sollicitee === void 0 ? void 0 : sollicitee.facilite_libelle) && ![null, "", undefined].includes(sollicitee === null || sollicitee === void 0 ? void 0 : sollicitee.facilite_libelle)) {
                this.facilites_sollicitees[idx].type_facilite = "";
                this.facilites_sollicitees[idx].facilite_libelle = "";
                this.facilites_sollicitees[idx].infos_fcub = "";
              }
            }
          }
        }

        // Impossible d'avoir des facilités avec des concours differents
        if (((_this$facilites_solli4 = this.facilites_sollicitees) === null || _this$facilites_solli4 === void 0 ? void 0 : _this$facilites_solli4.length) > 1) {
          var _this$facilites_solli5, _this$facilites_solli6;
          var _label = (_this$facilites_solli5 = this.facilites_sollicitees[0]) === null || _this$facilites_solli5 === void 0 ? void 0 : _this$facilites_solli5.facilite_libelle;
          var typeFte = (_this$facilites_solli6 = this.facilites_sollicitees[0]) === null || _this$facilites_solli6 === void 0 ? void 0 : _this$facilites_solli6.type_facilite;
          if (['', undefined, null].includes(typeFte)) {
            this.facilites_sollicitees[index].type_facilite = "";
            this.facilites_sollicitees[index].facilite_libelle = "";
            this.facilites_sollicitees[index].infos_fcub = "";
            this.$toasted.show("Veuillez d'abord s\xE9lectionner le cr\xE9dit \xE0 la ligne 1 (premi\xE8re ligne) du tableau DCPP-PCP4 : Concours/Facilit\xE9s.", {
              duration: 8000
            });
            return;
          }
          for (var _index = 0; _index < this.facilites_sollicitees.length; _index++) {
            var _sollicitee = this.facilites_sollicitees[_index];
            if (_label != (_sollicitee === null || _sollicitee === void 0 ? void 0 : _sollicitee.facilite_libelle) && ![null, "", undefined].includes(_sollicitee === null || _sollicitee === void 0 ? void 0 : _sollicitee.facilite_libelle)) {
              this.facilites_sollicitees[_index].type_facilite = "";
              this.facilites_sollicitees[_index].facilite_libelle = "";
              this.facilites_sollicitees[_index].infos_fcub = "";
              this.$toasted.show("Il est impossible de b\xE9n\xE9ficier simultan\xE9ment de plusieurs facilit\xE9s ayant des natures de concours diff\xE9rentes du tableau DCPP-PCP4: Concours/Facilit\xE9s.", {
                duration: 8000
              });
              return;
            }
          }
        }
      }
      if (index >= 0 && index < this.facilites_sollicitees.length && key === 'facilites_sollicitees') {
        this.formDataToBeWatched.facilites_sollicitees = this.facilites_sollicitees;
        var _selectedType = this.facilites_sollicitees[index].type_facilite;
        this.facilites_sollicitees[index].facilite_libelle = this.findGroupForType(_selectedType, this.transformLoadedCreditsBanques_, 'facilites_sollicitees', index);
      }
      if (index >= 0 && index < this.facilites_existante_confrere.length && key === 'facilites_existante_confrere') {
        this.formDataToBeWatched.facilites_existante_confrere = this.facilites_existante_confrere;
        var selectedType3 = this.facilites_existante_confrere[index].type_facilite;
        this.facilites_existante_confrere[index].facilite_libelle = this.findGroupForType(selectedType3, this.transformLoadedCreditsBanques_);
      }
      if (index >= 0 && index < this.facilites_existante_conjoint.length && key === 'facilites_existante_conjoint') {
        this.formDataToBeWatched.facilites_existante_conjoint = this.facilites_existante_conjoint;
        var _selectedType2 = this.facilites_existante_conjoint[index].type_facilite;
        this.facilites_existante_conjoint[index].facilite_libelle = this.findGroupForType(_selectedType2, this.transformLoadedCreditsBanques_);
      }
      this.emitEventForTbEndettement();
      this.emitEventForTAFNearRight();
      // this.getQuotiteCessible();
    },
    reconstructionFacilitiesSollicites: function reconstructionFacilitiesSollicites() {
      var facilities_sollicites_lines = this.facilites_sollicitees.filter(function (obj) {
        return obj.line !== "credit_old";
      });
      // Créer une copie profonde de facilites_existante

      var copiedFacilitesExistante = JSON.parse(JSON.stringify(this.facilites_existante.filter(function (obj) {
        return obj.type_facilite !== "";
      })));
      // Générer un nouvel array avec de nouveaux IDs
      var facilites_sollicitees = facilities_sollicites_lines.map(function (obj, index) {
        return _objectSpread(_objectSpread({}, obj), {}, {
          id: Math.max.apply(Math, _toConsumableArray(copiedFacilitesExistante.map(function (o) {
            return o.id;
          })).concat([0])) + index + 1
        });
      });
      // Fusionner les tableaux en utilisant la copie profonde
      this.facilites_sollicitees = [].concat(_toConsumableArray(copiedFacilitesExistante), _toConsumableArray(facilites_sollicitees));
      this.formDataToBeWatched.facilites_sollicitees = this.facilites_sollicitees;
    },
    checkboxValDiffere: function checkboxValDiffere(event, index, key) {
      var _event$target = event.target,
        checked = _event$target.checked,
        targetValue = _event$target.value;
      var value = checked ? targetValue : "";
      var item = this[key][index];
      if (!checked || targetValue === 'Non') {
        this.$set(item, 'nbre_differe', 0);
      }
      this.$set(item, 'differe', value);
      this.handleInput();
    },
    checkboxValSingle: function checkboxValSingle(event, index, key) {
      var _event$target2;
      if (event.target.value == 'Oui') {
        this.showClmnTypeRachat = true;
      } else {
        this.showClmnTypeRachat = false;
        this.facilites_sollicitees[index].type_rachat = "";
        this.facilites_sollicitees[index].num_fcub_pret = "";
        this.facilites_sollicitees[index].montant_rachat = 0;
      }
      this.formDataToBeWatched[key][index][(_event$target2 = event.target) === null || _event$target2 === void 0 ? void 0 : _event$target2.id] = event.target.value;
      this.formDataToBeWatched[key][index]['type_rachat'] = '';
      // this.reconstructionFacilitiesSollicites()
      this.emitEventForTbEndettement();
    },
    handleInput3: function handleInput3() {
      this.formDataToBeWatched.facilites_existante = this.facilites_existante;
      this.formDataToBeWatched.facilites_sollicitees = this.facilites_sollicitees;
      this.formDataToBeWatched.garanties_proposees = this.garanties_proposees;
      // this.emitData()
      this.getRemboursement();
    },
    addMoreFaciliteSollicites: function addMoreFaciliteSollicites(uuid_) {
      var _this$facilites_solli7, _this$authenticatedUs27, _this$authenticatedUs28, _this$authenticatedUs29, _this$authenticatedUs30, _this$authenticatedUs31, _this$authenticatedUs32, _this$authenticatedUs33;
      var uuid = uuid_ || this.generateUuid();
      var nb = (_this$facilites_solli7 = this.facilites_sollicitees) === null || _this$facilites_solli7 === void 0 ? void 0 : _this$facilites_solli7.length;
      this.facilites_sollicitees.push({
        "id": nb + 1,
        "uuid": uuid,
        "filiale": (_this$authenticatedUs27 = this.authenticatedUser) === null || _this$authenticatedUs27 === void 0 ? void 0 : _this$authenticatedUs27.filiale,
        "type_facilite": "",
        "facilite_libelle": "",
        "infos_fcub": "",
        "montant_demande": 0,
        "montant_credit": 0,
        "duree": 0,
        "taux": 0,
        "echeancier": "",
        "montant_echeance": 0,
        "encours": 0,
        "frais_dossier": 0,
        "montant_assurance": 0,
        "TEG": "",
        "statut": "",
        "date_echeance": "",
        "is_remboursement_anticipe": null,
        "is_rachat": null,
        "commentaire": "",
        "checked": false,
        "disabled": false,
        "line": "credit_new",
        "type_rachat": "",
        "num_fcub_pret": "",
        "differe": "",
        user_id: (_this$authenticatedUs28 = (_this$authenticatedUs29 = this.authenticatedUser) === null || _this$authenticatedUs29 === void 0 ? void 0 : _this$authenticatedUs29.id) !== null && _this$authenticatedUs28 !== void 0 ? _this$authenticatedUs28 : (_this$authenticatedUs30 = this.authenticatedUser) === null || _this$authenticatedUs30 === void 0 ? void 0 : _this$authenticatedUs30.user_id
      });
      this.facilites_selectionnees.push({
        "id": nb + 1,
        "uuid": this.generateUuid(),
        "facilite_uuid": uuid,
        "facilite_libelle": "",
        "frais_dossier": 0,
        "tva_montant_assurance": 0,
        "montant_assurance": 0,
        "TEG": "",
        "frais_cheque_certifie": "",
        "frais_huissier": "",
        "fond_de_garantie": 0,
        "cash_call_amount": 0,
        "cash_call_percent": "",
        "taux_periodique": "",
        "taux_usure": "",
        "teg_teorique": "",
        "tva_frais_dossier": "",
        user_id: (_this$authenticatedUs31 = (_this$authenticatedUs32 = this.authenticatedUser) === null || _this$authenticatedUs32 === void 0 ? void 0 : _this$authenticatedUs32.id) !== null && _this$authenticatedUs31 !== void 0 ? _this$authenticatedUs31 : (_this$authenticatedUs33 = this.authenticatedUser) === null || _this$authenticatedUs33 === void 0 ? void 0 : _this$authenticatedUs33.user_id
      });
      this.handleInput();
    },
    removeFaciliteSollic: function removeFaciliteSollic(index) {
      this.facilites_sollicitees.splice(index, 1);
      this.facilites_selectionnees.splice(index, 1);
      this.handleInput();
      this.sendFacilitesEventMessage();
      this.getRemboursement();
      // this.reconstructionFacilitiesSollicites()
      // this.getQuotiteCessible;
      // this.emitData()
    },
    scoringData: function scoringData(res) {
      var _this15 = this;
      var criteres = res.data.data.criteres;
      criteres.forEach(function (element) {
        if (element.type == 'ppo' || element.type == null) {
          if (element.slug == 'garanties') {
            _this15.data_garanties = element.elements;
          }
        }
      });
    },
    loadScoringData: function loadScoringData() {
      var _this16 = this;
      var cachedScoringCritere = localStorage.getItem('scoring_criteres');
      if (!cachedScoringCritere) {
        _services_credit_service__WEBPACK_IMPORTED_MODULE_3__["default"].loadScoringData().then(function (res) {
          _this16.scoringData(res);
          localStorage.setItem('scoring_criteres', JSON.stringify(res));
        })["catch"](function (err) {
          // console.log(err)
        });
      } else {
        var data = JSON.parse(cachedScoringCritere);
        this.scoringData(data);
      }
    },
    emitEventForTbEndettement: function emitEventForTbEndettement() {
      EventBus.$emit("dossier-updated-dcpp-pcp4-0", {
        data_tb4: this.formDataToBeWatched
      });
    },
    addMoreFofait: function addMoreFofait() {
      var _this$authenticatedUs34, _this$authenticatedUs35, _this$authenticatedUs36;
      this.list_hors_forfait.push({
        libelle: "",
        checked: true,
        commentaire: "",
        user_id: (_this$authenticatedUs34 = (_this$authenticatedUs35 = this.authenticatedUser) === null || _this$authenticatedUs35 === void 0 ? void 0 : _this$authenticatedUs35.id) !== null && _this$authenticatedUs34 !== void 0 ? _this$authenticatedUs34 : (_this$authenticatedUs36 = this.authenticatedUser) === null || _this$authenticatedUs36 === void 0 ? void 0 : _this$authenticatedUs36.user_id
      });
      this.handleInput();
    },
    removeForfait: function removeForfait(index) {
      this.list_hors_forfait.splice(index, 1);
      this.handleInput();
    },
    resetValues: function resetValues(event, index, objectName) {
      if (objectName == 'list_hors_forfait') {
        this[objectName][index].libelle = "";
        this[objectName][index].commentaire = "";
        this[objectName][index].checked = false;
      }
      this.handleInput();
    },
    formDataVarsForfait: function formDataVarsForfait(event, index, key) {
      this[key][index][event[0]] = event[1];
      this.formDataToBeWatched[key] = this[key];
      // this.reconstructionFacilitiesSollicites()
      // this.emitEventForTbEndettement()
    },
    formuleQD: function formuleQD(mt, colonn) {
      mt = isNaN(mt) ? 0 : mt;
      return "Formule de calcul:  ".concat(colonn, " = B - \u2211 Ms (Mensualit\xE9s des facilit\xE9 sollicit\xE9es)");
      // return 'Formule de calcul: Quotité disponible = Quotité cessible ('+ this.formatAmount(mt) + ') - Mensualités totales ('+ this.formatAmount(this.getQuotiteCessible.montant)+')'
    },
    donneeDeCalcul: function donneeDeCalcul(data, data_facilites) {
      var _this17 = this;
      this.donnee_calculs["A"] = [];
      this.donnee_calculs["B"] = [];
      this.donnee_calculs["F"] = [];
      this.donnee_calculs["H"] = [];
      var montant_pondere = 0;
      var montant_pondere_legal = 0;
      var montant_quotite = 0;
      var montant_quotite_legal = 0;
      var montant_echeance = 0;
      if (!['', null, undefined].includes(data_facilites)) {
        data_facilites.forEach(function (facilite) {
          var _String2;
          montant_echeance += parseInt((_String2 = String((facilite === null || facilite === void 0 ? void 0 : facilite.montant_echeance) || 0)) === null || _String2 === void 0 ? void 0 : _String2.replace(/\s/g, ""), 10);
        });
      }
      data.forEach(function (el) {
        var mt = _this17.convertInt(el === null || el === void 0 ? void 0 : el.montant_salaire);
        var montant_qc1 = _this17.convertInt(el === null || el === void 0 ? void 0 : el.montant_qc1);
        var montant_qc2 = _this17.convertInt(el === null || el === void 0 ? void 0 : el.montant_qc2);
        _this17.donnee_calculs["A"].push(_this17.formatAmount(mt));
        _this17.donnee_calculs["B"].push(_this17.formatAmount(montant_qc1));
        _this17.donnee_calculs["F"].push(_this17.formatAmount(montant_qc2));
        _this17.donnee_calculs["H"].push(_this17.formatAmount(el === null || el === void 0 ? void 0 : el.montant_pondere));
        montant_quotite += _this17.convertInt(montant_qc1);
        if ((el === null || el === void 0 ? void 0 : el.taux_qc2) > 0) {
          montant_quotite_legal += _this17.convertInt(montant_qc2);
          montant_pondere_legal += _this17.convertInt(el === null || el === void 0 ? void 0 : el.montant_pondere);
        }
        montant_pondere += _this17.convertInt(el === null || el === void 0 ? void 0 : el.montant_pondere);
      });
      this.donnee_calculs["A"] = "A = " + this.donnee_calculs["A"].join(" + ");
      this.donnee_calculs["B"] = "B = " + this.donnee_calculs["B"].join(" + ");
      this.donnee_calculs["C"] = "C = " + this.formatAmount(montant_quotite) + " / " + this.formatAmount(montant_pondere);
      this.donnee_calculs["D"] = "D = " + this.formatAmount(montant_quotite) + " - " + this.formatAmount(montant_echeance);
      this.donnee_calculs["F"] = "F = " + this.donnee_calculs["F"].join(" + ");
      this.donnee_calculs["E"] = "E = " + this.formatAmount(montant_quotite_legal) + " / " + this.formatAmount(montant_pondere_legal);
      this.donnee_calculs["G"] = "G = " + this.formatAmount(montant_quotite_legal) + " - " + this.formatAmount(montant_echeance);
      this.donnee_calculs["H"] = "H = " + this.donnee_calculs["H"].join(" + ");
    },
    filteredTable: function filteredTable(index) {
      var _this18 = this,
        _this$tableTag$index;
      // const allOptions = this.editableFacilitesSollicitees.map(facilite => ({
      //     text: facilite.type_facilite || `Ligne ${this.editableFacilitesSollicitees.indexOf(facilite) + 1}`,
      // }));
      var allOptions = this.editableFacilitesSollicitees.map(function (facilite) {
        return {
          text: facilite.type_facilite || "Ligne ".concat(_this18.editableFacilitesSollicitees.indexOf(facilite) + 1),
          uuid: facilite.uuid
        };
      });

      // Récupérer les tags actuels pour CETTE ligne spécifique
      var currentTagsForLine = this.tableTags[index] || [];
      var currentInput = ((_this$tableTag$index = this.tableTag[index]) === null || _this$tableTag$index === void 0 ? void 0 : _this$tableTag$index.toLowerCase()) || '';

      // Filtrer uniquement en fonction de l'entrée utilisateur et des tags de cette ligne
      return allOptions.filter(function (item) {
        return item.text.toLowerCase().includes(currentInput) && !currentTagsForLine.some(function (tag) {
          return tag.uuid === item.uuid;
        });
      });
    },
    addMoreGarantiesPropos: function addMoreGarantiesPropos() {
      this.garanties_proposees.push({
        type: '',
        ligne_associee: [],
        montant: 0,
        commentaire: '',
        is_recueillie: ''
        // is_detenue: ''
      });
      // Ajouter une entrée vide pour la nouvelle ligne dans tableTag et tableTags
      this.$set(this.tableTag, this.garanties_proposees.length - 1, '');
      this.$set(this.tableTags, this.garanties_proposees.length - 1, []);
      this.handleInput3(); // Si nécessaire pour mettre à jour les données globales
    },
    removeGarantiesPropos: function removeGarantiesPropos(index) {
      this.garanties_proposees.splice(index, 1);
      this.tableTag.splice(index, 1); // Supprimer le champ correspondant
      this.tableTags.splice(index, 1); // Supprimer les tags correspondants
      this.handleInput();
    },
    addMoreCautionPersonnelle: function addMoreCautionPersonnelle() {
      this.cautionnement_personnel.push({
        firstname: "",
        lastname: "",
        telephone: "",
        adresse: "",
        valeur_caution: "",
        piece: "",
        files: 0
      });
    },
    addMoreGeneralCondition: function addMoreGeneralCondition() {
      this.condition_generale.push({
        libelle: "",
        value: ""
      });
    },
    removeCautionPersonnelle: function removeCautionPersonnelle(index) {
      this.cautionnement_personnel.splice(index, 1);
      this.handleInput();
    },
    removeConditionGenerale: function removeConditionGenerale(index) {
      this.condition_generale.splice(index, 1);
      this.handleInput();
    },
    handleDuplicateTag: function handleDuplicateTag(duplicateTag) {
      // Log pour debugging
      // console.log('Tentative d’ajout d’un doublon détectée:', duplicateTag);

      // Vérifier si le tag existe déjà dans tableTags pour cette ligne
      var currentTags = this.tableTags[ind] || [];
      var isDuplicate = currentTags.some(function (tag) {
        return tag.text === duplicateTag.text;
      });
      if (isDuplicate) {
        // Option 1 : Informer l'utilisateur (par exemple, via une alerte)
        alert("La ligne \"".concat(duplicateTag.text, "\" est d\xE9j\xE0 assign\xE9e \xE0 cette garantie !"));

        // Option 2 : Réinitialiser le champ de saisie (tableTag) pour éviter confusion
        this.$set(this.tableTag, ind, '');
      }

      // Option 4 : Émettre un événement ou mettre à jour un état global si nécessaire
      this.$emit('duplicate-detected', {
        index: ind,
        tag: duplicateTag
      });
    },
    updateTableTags: function updateTableTags(index, newTags) {
      var uniqueTags = newTags.filter(function (tag, i, self) {
        return i === self.findIndex(function (t) {
          return t.uuid === tag.uuid;
        });
      });

      // Mettre à jour les tags pour cette ligne
      this.$set(this.tableTags, index, newTags);

      // Mettre à jour ligne_associee avec les UUIDs
      this.garanties_proposees[index].ligne_associee = newTags.map(function (tag) {
        return tag.uuid;
      });

      // Appeler la mise à jour globale
      this.handleInput3();
    },
    generateUuid: function generateUuid() {
      var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      var uuid = '';
      for (var i = 0; i < 8; i++) {
        uuid += chars.charAt(Math.floor(Math.random() * chars.length));
      }
      return uuid;
    },
    determineClientStatusForfait: function determineClientStatusForfait() {
      var _this$meta_data$dossi24;
      var tier_employeur = (_this$meta_data$dossi24 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi24 === void 0 || (_this$meta_data$dossi24 = _this$meta_data$dossi24.cred_pub_tb_120002) === null || _this$meta_data$dossi24 === void 0 ? void 0 : _this$meta_data$dossi24.statut_entreprise;
      if (tier_employeur == "TIER 1") {
        return true;
      }
      return false;
    },
    emitEventForTAFNearRight: function emitEventForTAFNearRight() {
      EventBus.$emit("dossier-updated-dcpp-pcp4-barrer-docname", {
        facilites_sollicitees: this.facilites_sollicitees
      });
    },
    getIcon: function getIcon(extension) {
      var icon = '';
      switch (extension === null || extension === void 0 ? void 0 : extension.toLowerCase()) {
        case 'png':
        case 'webp':
        case 'jpg':
        case 'jpeg':
          icon = 'icofont-file-jpg text-purple';
          break;
        case 'xls':
        case 'xlsx':
          icon = 'icofont-file-spreadsheet text-success';
          break;
        case 'pdf':
          icon = 'icofont-file-pdf text-danger';
          break;
        case 'doc':
        case 'docx':
          icon = 'icofont-file-word text-primary';
          break;
        case 'ppt':
        case 'pptx':
          icon = 'icofont-file-powerpoint text-warning';
          break;
        default:
          icon = '';
      }
      return icon;
    },
    formatFileName: function formatFileName(name) {
      return this.isFileNameTooLong(name) ? this.shortenFileName(name) : name;
    },
    downloadFile: function downloadFile(index, fileIndex) {
      var file = this.file_data_list[index][fileIndex];
      var url = window.location.origin + '/file?f=' + encodeURIComponent(file.file_url);
      window.open(url, '_blank');
    },
    handleDoubleClickOrClick: function handleDoubleClickOrClick(event, index, element) {
      var _this19 = this;
      EventBus.$emit("open-extra-file-explorer");
      setTimeout(function () {
        EventBus.$emit("data-extra-file-explorer", {
          name: "Pièce(s) jointe(s) {(*)}cautionnemnt_personnel_et_solidaire" + index + "_" + _this19.$route.params.templateId,
          // view: element?.from_monteur_doss
          is_auto: false
        });
      }, 500);
      // EventBus.$emit("open-extra-file-explorer");
      // const dateNow = new Date().toLocaleDateString();
      // const numeroPiece = this.cautionnement_personnel[index]?.nom?.trim() || "";
      // const result = numeroPiece;
      // setTimeout(() => {
      //   EventBus.$emit("data-extra-file-explorer", {
      //     name:"cautionnement {(*)}personnel_" +index +"_" +this.$route.params.templateId,
      //     is_auto: false
      //   });
      // }, 500);
    },
    handleContionGeneral: function handleContionGeneral(event, index, key) {
      this.condition_generale[index][key] = event.target.value;
      this.formDataToBeWatched.condition_generale = this.condition_generale;
      // emit > > condition-generale
      EventBus.$emit("condition-generale", this.formDataToBeWatched.condition_generale);
    },
    getFiles: function getFiles() {
      var _this20 = this;
      _services_proxy_service__WEBPACK_IMPORTED_MODULE_8__["default"].proxyEbapis({
        url: this.connectsHost + 'api/get-files',
        method: 'POST',
        data: {
          file_identity: this.meta_data["dossier_credit"].cred_pub_key
        }
      }).then(function (res) {
        var _res$data$data, _res$data$data2;
        res.data = JSON.parse(res.data);
        if (((_res$data$data = res.data.data) === null || _res$data$data === void 0 ? void 0 : _res$data$data.length) > 0 || ((_res$data$data2 = res.data.data) === null || _res$data$data2 === void 0 ? void 0 : _res$data$data2.length) != null) {
          _this20.files = res.data.data;
          _this20.cautionnement_personnel.forEach(function (element, index) {
            var count = 0;
            _this20.files.forEach(function (file) {
              var _element$template;
              if ((file === null || file === void 0 ? void 0 : file.extra_file_template_id) != null && (element === null || element === void 0 || (_element$template = element.template) === null || _element$template === void 0 ? void 0 : _element$template.id) == (file === null || file === void 0 ? void 0 : file.extra_file_template_id)) {
                count++;
              }
            });
            _this20.cautionnement_personnel[index]['files'] = count;
            _this20.handleGetFile();
          });
        }
      })["catch"](function (err) {
        console.error(err);
      });
    },
    handleGetFile: function handleGetFile() {
      this.formDataToBeWatched.cautionnement_personnel = this.cautionnement_personnel;
    },
    getFcubTypeCategorieByLibelle: function getFcubTypeCategorieByLibelle(label, credBanqueList) {
      for (var categorie in credBanqueList) {
        var produits = credBanqueList[categorie];
        var _iterator = _createForOfIteratorHelper(produits),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var produit = _step.value;
            if (produit.libelle === label) {
              return produit === null || produit === void 0 ? void 0 : produit.infos_flexcub;
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
      return null;
    },
    findFlexcubeByType: function findFlexcubeByType(key, selectedType, credBanqueList, index) {
      return this.getFcubTypeCategorieByLibelle(selectedType, credBanqueList);
    },
    checkingCoherenceField: function checkingCoherenceField(key, index, fieldName, itemData, event) {
      if (![undefined, null, ''].includes(itemData === null || itemData === void 0 ? void 0 : itemData.infos_fcub)) {
        var _itemData$infos_fcub, _itemData$infos_fcub2, _itemData$infos_fcub3;
        var MIN_TENOR = itemData === null || itemData === void 0 || (_itemData$infos_fcub = itemData.infos_fcub) === null || _itemData$infos_fcub === void 0 ? void 0 : _itemData$infos_fcub.MIN_TENOR;
        var MAX_TENOR = itemData === null || itemData === void 0 || (_itemData$infos_fcub2 = itemData.infos_fcub) === null || _itemData$infos_fcub2 === void 0 ? void 0 : _itemData$infos_fcub2.MAX_TENOR;
        var TENOR_UNIT = itemData === null || itemData === void 0 || (_itemData$infos_fcub3 = itemData.infos_fcub) === null || _itemData$infos_fcub3 === void 0 ? void 0 : _itemData$infos_fcub3.TENOR_UNIT;
        if (['duree'].includes(fieldName)) {
          if (['', undefined, null].includes(itemData === null || itemData === void 0 ? void 0 : itemData.type_facilite)) {
            this[key][index][fieldName] = 0;
            this.$toasted.show("Veuillez s\xE9lectionner le \xAB type de cr\xE9dit \xBB", {
              duration: 5000
            });
            return;
          }
          var value = event.target.value;
          if (!(value >= MIN_TENOR && value <= MAX_TENOR)) {
            this[key][index][fieldName] = MIN_TENOR;
            this.$toasted.show("La dur\xE9e doit \xEAtre comprise entre ".concat(MIN_TENOR, " et ").concat(MAX_TENOR, " Mois"), {
              duration: 5000
            });
            return;
          }
          this[key][index][fieldName] = value;
          this.formDataToBeWatched[key] = this[key];
        }
        if (['echeancier'].includes(fieldName)) {
          if (['', undefined, null].includes(itemData === null || itemData === void 0 ? void 0 : itemData.type_facilite)) {
            this[key][index][fieldName] = '';
            this.$toasted.show("Veuillez s\xE9lectionner le \xAB type de cr\xE9dit \xBB", {
              duration: 5000
            });
            return;
          }
          var _value = event.target.value;
          var to_mapping = {
            'Mensuelle': 'M'
          };
          if (!(TENOR_UNIT == to_mapping[_value])) {
            this[key][index][fieldName] = '';
            this.$toasted.show("Cet \xE9ch\xE9ancier n'est pas disponible pour ce type de cr\xE9dit.", {
              duration: 5000
            });
            return;
          }
          this[key][index][fieldName] = _value;
          this.formDataToBeWatched[key] = this[key];
        }
      }
    },
    selTypeRachat: function selTypeRachat(key, index, fieldName, item, event) {
      var value = event === null || event === void 0 ? void 0 : event.target.value;
      if (['', undefined, null, 'Rachat externe'].includes(value)) {
        this.facilites_sollicitees[index].num_fcub_pret = "";
        this.formDataToBeWatched.facilites_sollicitees = this.facilites_sollicitees;
      }
      this.setFraisData(value, index); // Mise à jour des clés [frais_huissier, frais_cheque_certifie] dans facilites_selectionnees en cas de Rachat interne
    },
    isRachatExterne: function isRachatExterne(index) {
      var _this$facilites_solli8;
      var facilite = this.facilites_selectionnees[index];
      if (!facilite) return true;
      var ligne = (_this$facilites_solli8 = this.facilites_sollicitees) === null || _this$facilites_solli8 === void 0 ? void 0 : _this$facilites_solli8.find(function (f) {
        return f.uuid === facilite.facilite_uuid;
      });
      return (ligne === null || ligne === void 0 ? void 0 : ligne.type_rachat) === 'Rachat externe' ? false : true;
    },
    setFraisData: function setFraisData(value, index) {
      if (['', undefined, null, 'Rachat interne'].includes(value)) {
        this.facilites_selectionnees[index].frais_huissier = "";
        this.facilites_selectionnees[index].frais_cheque_certifie = "";
        this.formDataToBeWatched.facilites_selectionnees = this.facilites_selectionnees;
      }
    },
    getTauxEndettement: function getTauxEndettement() {
      var _this$getRevenuSalair;
      var salaire = parseInt(((_this$getRevenuSalair = this.getRevenuSalaire) !== null && _this$getRevenuSalair !== void 0 ? _this$getRevenuSalair : '').toString().replace(/\s/g, ''), 10) || 0;
      var autre_revenus = this.getRevenuAutre() || 0;
      var remb_autre_credit = parseFloat(this.formDataToBeWatched.remb_autre_credit) || 0;
      var remb_nouveau_credit = parseFloat(this.formDataToBeWatched.remb_nouveau_credit) || 0;
      var total_revenu = salaire + autre_revenus;
      var total_remboursement = remb_autre_credit + remb_nouveau_credit;
      if (total_revenu === 0) {
        return {
          taux_endettement: '',
          reste_a_vivre: ''
        };
      }
      var taux_endettement = total_remboursement / total_revenu * 100;
      var reste_a_vivre = total_revenu - total_remboursement;
      var taux_endettement_avant = remb_autre_credit / total_revenu * 100;
      this.formDataToBeWatched.taux_endettement = taux_endettement;
      this.formDataToBeWatched.taux_endettement_avant = taux_endettement_avant;
      if (taux_endettement >= 100) {
        taux_endettement = 100;
      }
      if (taux_endettement_avant >= 100) {
        taux_endettement_avant = 100;
      }
      return {
        taux_endettement: taux_endettement.toFixed(2),
        reste_a_vivre: this.formatAmount(reste_a_vivre),
        taux_endettement_avant: taux_endettement_avant.toFixed(2)
      };
    },
    getRemboursement: function getRemboursement() {
      var _this$facilites_exist4,
        _this21 = this,
        _this$facilites_solli9;
      this.formDataToBeWatched.remb_autre_credit = 0;
      this.formDataToBeWatched.remb_nouveau_credit = 0;
      var parseEcheance = function parseEcheance(value) {
        if (value == null || value === '') return 0;
        if (typeof value === 'number') return value;
        if (typeof value === 'string') {
          var cleaned = value.replace(/\s/g, '');
          var parsed = parseFloat(cleaned);
          return isNaN(parsed) ? 0 : parsed;
        }
        return 0;
      };
      var rachat_interne = false;
      if (((_this$facilites_exist4 = this.facilites_existante) === null || _this$facilites_exist4 === void 0 ? void 0 : _this$facilites_exist4.length) > 0) {
        this.facilites_existante.forEach(function (facilite, index) {
          if ((facilite === null || facilite === void 0 ? void 0 : facilite.is_rachat) == 'Oui' && (facilite === null || facilite === void 0 ? void 0 : facilite.type_rachat) == 'Rachat interne') {
            rachat_interne = true;
          }
          var montant_echeance = facilite.montant_echeance;
          var montant_encours = _this21.transformValue(facilite.encours);
          if (typeof montant_echeance === 'string') {
            montant_echeance = montant_echeance.replace(/\s/g, "");
          } else if (typeof montant_echeance === 'number') {
            montant_echeance = montant_echeance.toString();
          }
          var montant = parseInt(montant_echeance, 10);
          if (montant_encours > 0) {
            _this21.formDataToBeWatched.remb_autre_credit += isNaN(montant) ? 0 : montant;
          }
        });
      }

      // Calculate remb_nouveau_credit from facilites_sollicitees
      if (((_this$facilites_solli9 = this.facilites_sollicitees) === null || _this$facilites_solli9 === void 0 ? void 0 : _this$facilites_solli9.length) > 0) {
        this.facilites_sollicitees.forEach(function (facilite, index) {
          var montant = parseEcheance(facilite.montant_echeance);
          _this21.formDataToBeWatched.remb_nouveau_credit += montant;
        });
      }
      if (rachat_interne == true) {
        this.formDataToBeWatched.remb_autre_credit = 0;
      }
    },
    transformValue: function transformValue(value) {
      if (typeof value === 'string' && !isNaN(value) && value.trim() !== '') {
        return Number(value);
      } else if (typeof value === 'number') {
        return value;
      }
      return value;
    },
    intConverter: function intConverter(val) {
      if (typeof val == 'string') {
        return parseInt(val === null || val === void 0 ? void 0 : val.replace(/\s/g, ''), 10);
      }
      return val;
    },
    getRevenuAutre: function getRevenuAutre() {
      var _this$data_tb, _this$data_tb2, _this$data_tb3;
      if (((_this$data_tb = this.data_tb1) === null || _this$data_tb === void 0 ? void 0 : _this$data_tb.revenu_domicilie) == undefined || ((_this$data_tb2 = this.data_tb1) === null || _this$data_tb2 === void 0 ? void 0 : _this$data_tb2.revenu_domicilie) == '') return '';
      var autre_revenu = 0;
      (_this$data_tb3 = this.data_tb1) === null || _this$data_tb3 === void 0 || _this$data_tb3.revenu_domicilie.forEach(function (el) {
        if (el.libelle != "Salaire net" && el.checked == true) {
          var _el$montant_salaire;
          autre_revenu += parseInt((el === null || el === void 0 || (_el$montant_salaire = el.montant_salaire) === null || _el$montant_salaire === void 0 ? void 0 : _el$montant_salaire.toString().replace(/\s/g, "")) || "0");
        }
      });
      return autre_revenu;
    },
    showTamor: function showTamor(item_sollicite, index) {
      var _this$revenu_domicili2,
        _this22 = this;
      this.resetData();
      // console.log("showTamor", item_sollicite, index)

      // if (!item_sollicite.type_facilite && !item_sollicite.facilite_libelle) {
      //     this.$toasted.show("Veullez renseignez le type de crédit");
      //     return ;
      // }

      var faciliteSelectionnee = this.facilites_selectionnees.find(function (facilite) {
        return facilite.facilite_uuid === item_sollicite.uuid;
      });
      var dccpPcp1 = this.meta_data["dossier_credit"]["cred_pub_tb_120501"];
      // const revenueDomicilie = dccpPcp1?.revenu_domicilie || [];
      var revenueDomicilie = this.revenu_domicilie || [];
      var ligneSalaireNet = revenueDomicilie.find(function (revenu) {
        return revenu.libelle === 'Salaire net';
      });
      var quotiteCessibleValue = this.formDataToBeWatched.quotite_cessible > 0 ? this.formDataToBeWatched.quotite_cessible : dccpPcp1 === null || dccpPcp1 === void 0 ? void 0 : dccpPcp1.quotite_cessible;
      var quotite = this.localeStringToFloat(quotiteCessibleValue) || 0;
      var quotitePercent = this.localeStringToFloat((_this$revenu_domicili2 = this.revenu_domicilie) === null || _this$revenu_domicili2 === void 0 || (_this$revenu_domicili2 = _this$revenu_domicili2[0]) === null || _this$revenu_domicili2 === void 0 ? void 0 : _this$revenu_domicili2['taux_qc1']) || 0;
      // console.log('quotite',quotite);

      var nbreDiffere = 0;
      var differeCheck = item_sollicite.differe == 'Oui';
      if (differeCheck) {
        nbreDiffere = item_sollicite.nbre_differe;
      }
      // 

      // const dccpPcp4 = this.meta_data["dossier_credit"]["cred_pub_tb_120004"];
      var facilitesExistantes = this.facilites_existante || [];
      var encours = facilitesExistantes.reduce(function (acc, curr) {
        var valeur = _this22.localeStringToFloat(curr.encours);
        return acc + (valeur > 0 ? _this22.localeStringToFloat(curr.montant_echeance) : 0);
      }, 0);
      if (!ligneSalaireNet) {
        this.$toasted.error("Veullez renseignez le salaire net dans le tableau DCPP-PCP1 pour visualiser un tableau d'amortissement correcte");
      }
      var fraisDossier = this.localeStringToFloat(faciliteSelectionnee === null || faciliteSelectionnee === void 0 ? void 0 : faciliteSelectionnee.frais_dossier) || 0;
      var montantAssurance = this.localeStringToFloat(faciliteSelectionnee === null || faciliteSelectionnee === void 0 ? void 0 : faciliteSelectionnee.montant_assurance) || 0;
      var mtTvaSurFraisDossier = this.localeStringToFloat(faciliteSelectionnee === null || faciliteSelectionnee === void 0 ? void 0 : faciliteSelectionnee.tva_frais_dossier) || 0;
      var precision = Math.pow(10, 2); // 2 decimal places
      var TVA = Math.round((fraisDossier > 0 ? mtTvaSurFraisDossier / fraisDossier * 100 : 19.25) * precision) / precision;
      // console.log("TVA", TVA, "fraisDossier", fraisDossier, "mtTvaSurFraisDossier", mtTvaSurFraisDossier);

      var simulationFactory = function simulationFactory(facility, simulation) {
        var _simulation$caracteri;
        var baseSim = {
          sim_pub_key: '',
          name: '',
          facilite_uuid: (facility === null || facility === void 0 ? void 0 : facility.uuid) || null,
          facilite_id: (facility === null || facility === void 0 ? void 0 : facility.id) || null,
          id: '',
          caracteristiques_credit: {
            id: '',
            salaire_net: _this22.localeStringToFloat(ligneSalaireNet === null || ligneSalaireNet === void 0 ? void 0 : ligneSalaireNet.mensualite) || 0,
            quotite: quotite,
            differe: nbreDiffere,
            tva: TVA,
            mois_debut_pmt: 0,
            frais_cheque_certifier: _this22.localeStringToFloat(faciliteSelectionnee === null || faciliteSelectionnee === void 0 ? void 0 : faciliteSelectionnee.frais_cheque_certifie) || 0,
            frais_huissier: _this22.localeStringToFloat(faciliteSelectionnee === null || faciliteSelectionnee === void 0 ? void 0 : faciliteSelectionnee.frais_huissier) || 0,
            frais_dossier_facilite: fraisDossier,
            assurance: montantAssurance,
            date_deblocage_prev: '',
            type_facilite: (facility === null || facility === void 0 ? void 0 : facility.type_facilite) || null,
            montant_credit: _this22.localeStringToFloat(facility === null || facility === void 0 ? void 0 : facility.montant_credit) || 0,
            echeancier: (facility === null || facility === void 0 ? void 0 : facility.echeancier) || '',
            duree: _this22.localeStringToFloat(facility === null || facility === void 0 ? void 0 : facility.duree) || 0,
            taux_annuel_ht: _this22.localeStringToFloat(facility === null || facility === void 0 ? void 0 : facility.taux) || 0,
            date_echeance: (facility === null || facility === void 0 ? void 0 : facility.date_echeance) || '',
            encours: _this22.localeStringToFloat(encours) || 0,
            quotite_percent: quotitePercent
          },
          donnees_calculees: {
            dsr: 0,
            taux_ttc: 0,
            // assurance: 0,
            total: 0,
            net_a_percevoir: 0,
            paiement_mensuel: 0,
            interet_ttc: 0,
            total_rembourse: 0,
            interet_ht: 0
            // encours: encours || 0, // this.localeStringToFloat(facility?.encours) || 
          },
          tableau: []
        };
        _this22.mergeObjetIfNotKey(baseSim, simulation || {});
        _this22.mergeObjetIfNotKey(baseSim.caracteristiques_credit, (simulation === null || simulation === void 0 ? void 0 : simulation.caracteristiques_credit) || {});
        _this22.mergeObjetIfNotKey(baseSim.donnees_calculees, (simulation === null || simulation === void 0 ? void 0 : simulation.donnees_calculees) || {});
        var simDate = simulation === null || simulation === void 0 || (_simulation$caracteri = simulation.caracteristiques_credit) === null || _simulation$caracteri === void 0 ? void 0 : _simulation$caracteri.date_echeance;
        if (simDate instanceof Date) {
          baseSim.caracteristiques_credit.date_echeance = simDate.toISOString();
        }
        return baseSim;
      };
      if (!item_sollicite) {
        console.error("Facility not found for the given item_sollicite:", item_sollicite);
        return;
      }
      this.data_tamor.caracteristiques_credit.id = item_sollicite === null || item_sollicite === void 0 ? void 0 : item_sollicite.id;
      this.defaultFacility = JSON.parse(JSON.stringify(item_sollicite));
      // console.log("defaultFacility", this.defaultFacility);
      this.defaultSimulation = simulationFactory(item_sollicite, this.data_tamor);
      this.data_tamor = JSON.parse(JSON.stringify(this.defaultSimulation));

      // this.viewOnly = true;
      this.$modal.show('show-simulation-concours');
      // this.$modal.show('simulateur_de_credit');

      // setTimeout(() => {
      //     EventBus.$emit("simulator-set-data", {
      //         simulation: this.defaultSimulation,
      //         facility: item_sollicite,
      //     });
      // }, 200);
    },
    closeModal: function closeModal() {
      this.viewOnly = false;
      this.defaultFacility = null;
      this.defaultSimulation = null;
      this.resetData();
      this.$modal.hide("show-simulation-concours");
    },
    closeOldModal: function closeOldModal() {
      this.$modal.hide("show-tamor-concours-old");
      this.resetData();
    },
    resetData: function resetData() {
      this.data_tamor = {
        id: "",
        caracteristiques_credit: {
          id: "",
          type_facilite: "",
          montant_credit: 0,
          salaire_net: 0,
          echeancier: "",
          duree: 0,
          // en mois
          taux_annuel_ht: 0,
          date_deblocage_prev: "",
          date_echeance: "",
          quotite: 0,
          differe: 0,
          // en mois
          tva: 19.25,
          mois_debut_pmt: 0,
          frais_cheque_certifier: 0,
          frais_huissier: 0,
          frais_dossier_facilite: 0,
          assurance: 0,
          quotite_percent: 0
        },
        donnees_calculees: {
          dsr: 0,
          taux_ttc: 0,
          // assurance: 0,
          total: 0,
          net_a_percevoir: 0,
          paiement_mensuel: 0,
          interet_ttc: 0,
          total_rembourse: 0,
          interet_ht: 0,
          encours: 0
        },
        tableau: [],
        is_success: true,
        msg_traitment: ""
      };
    }
  },
  watch: {
    "authenticatedUser.filiale": {
      handler: function handler(newVal) {
        if (newVal) {
          var _this$facilites_solli0;
          this.facilites_sollicitees[0].filiale = newVal;
          this.facilites_existante[0].filiale = newVal;
          this.facilites_selectionnees[0].facilite_uuid = (_this$facilites_solli0 = this.facilites_sollicitees[0]) === null || _this$facilites_solli0 === void 0 ? void 0 : _this$facilites_solli0.uuid;
        }
      },
      immediate: true
    },
    formDataToBeWatched: {
      handler: function handler(newVal, oldVal) {
        this.autosaving(newVal, oldVal);
        // this.getQuotiteCessible;
      },
      deep: true,
      immediate: true
    },
    facilites_sollicitees: {
      handler: function handler(newVal, oldVal) {
        this.donneeDeCalcul(this.revenu_domicilie, newVal);
        EventBus.$emit('facilites-updated', {
          facilites_sollicitees: newVal,
          facilites_selectionnees: this.facilites_selectionnees
        });
      },
      deep: true
    },
    facilites_selectionnees: {
      handler: function handler(newVal, oldVal) {
        EventBus.$emit('facilites-updated', {
          facilites_sollicitees: this.facilites_sollicitees,
          facilites_selectionnees: newVal
        });
      },
      deep: true
    },
    revenu_domicilie: {
      handler: function handler(newVal, oldVal) {
        this.donneeDeCalcul(newVal, this.facilites_sollicitees);
      },
      deep: true,
      immediate: true
    },
    'transformLoadedCreditsBanques_': {
      handler: function handler(newVal, oldVal) {
        // this.donneeDeCalcul(this.revenu_domicilie, this.facilites_sollicitees)
      },
      deep: true,
      immediate: true
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/ErrorRetry.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/ErrorRetry.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "ErrorRetry",
  props: {
    error: null,
    retrying: {
      type: Boolean,
      "default": false
    },
    canRetry: {
      type: Boolean,
      "default": true
    }
  },
  methods: {
    retry: function retry() {
      if (!this.canRetry) return;
      this.$emit('retry', this.error);
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/Simulateur/LoadSimulation.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/Simulateur/LoadSimulation.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'LoadSimulation',
  props: {
    value: {
      type: String,
      "default": ''
    },
    simulations: {
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    canCreateNewSimulation: {
      type: Boolean,
      "default": true
    },
    disabled: {
      type: Boolean,
      "default": false
    }
  },
  data: function data() {
    return {
      simPubKey: this.value
    };
  },
  watch: {
    simPubKey: function simPubKey(newVal) {
      this.$emit('input', newVal);
    },
    value: {
      handler: function handler(newVal) {
        this.simPubKey = newVal;
      },
      immediate: true
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/Simulateur/SimCurrencyInput.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/Simulateur/SimCurrencyInput.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'SimCurrencyInput',
  props: {
    value: {
      type: [Number, String],
      "default": '0'
    },
    label: {
      type: String,
      "default": ''
    },
    disabled: {
      type: Boolean,
      "default": false
    },
    disabledClass: {
      type: String,
      "default": ''
    }
  },
  data: function data() {
    return {
      id: "sim-currency-input-".concat(Math.random().toString(36).substr(2, 9)),
      inputValue: String(this.value)
    };
  },
  methods: {
    handleCurrencyInput: function handleCurrencyInput(value) {
      if (!Array.isArray(value) || value.length !== 3) {
        throw new Error('Expected value to be an array with three elements! [key, value, boolean]');
      }
      var _value = _slicedToArray(value, 3),
        _ = _value[0],
        val = _value[1],
        isValid = _value[2];
      var finalValue = 0;
      if (isValid) {
        finalValue = Number(String(val).replace(/[^0-9.-]+/g, '')) || 0;
      }
      this.$emit('input', finalValue);
      this.$emit('change', finalValue);
    }
  },
  watch: {
    value: function value(newValue) {
      this.inputValue = String(newValue);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/Simulateur/SimDateInput.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/Simulateur/SimDateInput.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'SimDateInput',
  props: {
    value: {
      type: String,
      "default": ''
    },
    label: {
      type: String,
      "default": ''
    },
    disabled: {
      type: Boolean,
      "default": false
    },
    fallbackValue: {
      type: String,
      "default": ''
    }
  },
  data: function data() {
    return {
      id: "sim-date-input-".concat(Math.random().toString(36).substr(2, 9))
    };
  },
  methods: {
    handleDateInput: function handleDateInput(value) {
      if (!Array.isArray(value) || value.length !== 3) {
        throw new Error('Expected value to be an array with three elements! [key, value, boolean]');
      }
      var _value = _slicedToArray(value, 3),
        _ = _value[0],
        val = _value[1],
        isValid = _value[2];
      var finalValue = isValid ? val : '';
      this.$emit('input', finalValue);
      this.$emit('change', finalValue);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/Simulateur/SimInput.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/Simulateur/SimInput.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'SimInput',
  props: {
    value: {
      type: [Number, String],
      "default": 0
    },
    label: {
      type: String,
      "default": ''
    },
    disabled: {
      type: Boolean,
      "default": false
    },
    type: {
      type: String,
      "default": 'text'
    },
    suffix: {
      type: String,
      "default": ''
    },
    placeholder: {
      type: String,
      "default": ''
    },
    fallbackValue: {
      type: [String, Number],
      "default": ''
    }
  },
  data: function data() {
    return {
      id: "sim-input-".concat(Math.random().toString(36).substr(2, 9)),
      inputValue: this.value
    };
  },
  computed: {
    displayedValued: function displayedValued() {
      if (this.type === 'number') {
        return this.formatNumber(this.inputValue) || this.fallbackValue;
      }
      return this.inputValue || this.fallbackValue;
    }
  },
  methods: {
    handleInput: function handleInput(value) {
      if (this.type === 'number') {
        var numericValue = parseFloat(String(value).replace(",", ".").replace(/[^0-9.-]+/g, ''));
        this.inputValue = isNaN(numericValue) ? 0 : numericValue;
      }
      this.$emit('input', this.inputValue);
      this.$emit('change', this.inputValue);
    },
    formatNumber: function formatNumber(n) {
      if (n === null || n === undefined || n === '') return '';
      var num = String(n).replace(',', '.').replace(/[^0-9.-]/g, '');
      var _num$split = num.split('.'),
        _num$split2 = _slicedToArray(_num$split, 2),
        intPart = _num$split2[0],
        decPart = _num$split2[1];
      intPart = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
      return decPart !== undefined ? "".concat(intPart, ".").concat(decPart) : intPart;
    }
  },
  watch: {
    value: function value(newVal) {
      this.inputValue = newVal;
      this.handleInput(newVal);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/Simulateur/SimSelect.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/Simulateur/SimSelect.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'SimSelect',
  props: {
    value: {
      type: [String, Number],
      "default": ''
    },
    label: {
      type: String,
      "default": ''
    },
    disabled: {
      type: Boolean,
      "default": false
    },
    name: {
      type: String,
      "default": ''
    },
    options: {
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    optionLabelKey: {
      type: String,
      "default": 'label'
    },
    optionValueKey: {
      type: String,
      "default": 'value'
    },
    fallbackValue: {
      type: [String, Number],
      "default": ''
    }
  },
  data: function data() {
    return {
      id: "sim-select-".concat(Math.random().toString(36).substr(2, 9)),
      selectedValue: this.value
    };
  },
  computed: {
    displayedValue: function displayedValue() {
      var _this = this;
      var selected = this.options.find(function (opt) {
        return _this.optionValue(opt) === _this.selectedValue;
      });
      return selected ? this.optionLabel(selected) : this.value || this.fallbackValue;
    }
  },
  methods: {
    handleChange: function handleChange() {
      this.$emit('input', this.selectedValue);
      this.$emit('change', this.selectedValue);
    },
    optionLabel: function optionLabel(option) {
      var _option$this$optionLa;
      return (_option$this$optionLa = option[this.optionLabelKey]) !== null && _option$this$optionLa !== void 0 ? _option$this$optionLa : option;
    },
    optionValue: function optionValue(option) {
      var _option$this$optionVa;
      return (_option$this$optionVa = option[this.optionValueKey]) !== null && _option$this$optionVa !== void 0 ? _option$this$optionVa : option;
    }
  },
  watch: {
    value: function value(newVal) {
      this.selectedValue = newVal;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/Simulateur/SimulateurDeCredit.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/Simulateur/SimulateurDeCredit.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Simulator_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Simulator.vue */ "./resources/js/components/shared/afg/Simulateur/Simulator.vue");
/* harmony import */ var _SimulatorHistory_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SimulatorHistory.vue */ "./resources/js/components/shared/afg/Simulateur/SimulatorHistory.vue");
/* harmony import */ var _SimulationActions_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SimulationActions.vue */ "./resources/js/components/shared/afg/Simulateur/SimulationActions.vue");
/* harmony import */ var _SimulationActionsBtn_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SimulationActionsBtn.vue */ "./resources/js/components/shared/afg/Simulateur/SimulationActionsBtn.vue");
/* harmony import */ var _services_ebapis_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/ebapis.service */ "./resources/js/services/ebapis.service.js");
/* harmony import */ var _shared_ErrorRetry_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/ErrorRetry.vue */ "./resources/js/components/shared/ErrorRetry.vue");
/* harmony import */ var _services_printer_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../services/printer.service */ "./resources/js/services/printer.service.js");
/* harmony import */ var _PrintModal_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../PrintModal.vue */ "./resources/js/components/shared/PrintModal.vue");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* provided dependency */ var process = __webpack_require__(/*! process/browser.js */ "./node_modules/process/browser.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _excluded = ["create"];
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return r; }; var t, r = {}, e = Object.prototype, n = e.hasOwnProperty, o = "function" == typeof Symbol ? Symbol : {}, i = o.iterator || "@@iterator", a = o.asyncIterator || "@@asyncIterator", u = o.toStringTag || "@@toStringTag"; function c(t, r, e, n) { Object.defineProperty(t, r, { value: e, enumerable: !n, configurable: !n, writable: !n }); } try { c({}, ""); } catch (t) { c = function c(t, r, e) { return t[r] = e; }; } function h(r, e, n, o) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype); return c(a, "_invoke", function (r, e, n) { var o = 1; return function (i, a) { if (3 === o) throw Error("Generator is already running"); if (4 === o) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var u = n.delegate; if (u) { var c = d(u, n); if (c) { if (c === f) continue; return c; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (1 === o) throw o = 4, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = 3; var h = s(r, e, n); if ("normal" === h.type) { if (o = n.done ? 4 : 2, h.arg === f) continue; return { value: h.arg, done: n.done }; } "throw" === h.type && (o = 4, n.method = "throw", n.arg = h.arg); } }; }(r, n, new Context(o || [])), !0), a; } function s(t, r, e) { try { return { type: "normal", arg: t.call(r, e) }; } catch (t) { return { type: "throw", arg: t }; } } r.wrap = h; var f = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var l = {}; c(l, i, function () { return this; }); var p = Object.getPrototypeOf, y = p && p(p(x([]))); y && y !== e && n.call(y, i) && (l = y); var v = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(l); function g(t) { ["next", "throw", "return"].forEach(function (r) { c(t, r, function (t) { return this._invoke(r, t); }); }); } function AsyncIterator(t, r) { function e(o, i, a, u) { var c = s(t[o], t, i); if ("throw" !== c.type) { var h = c.arg, f = h.value; return f && "object" == _typeof(f) && n.call(f, "__await") ? r.resolve(f.__await).then(function (t) { e("next", t, a, u); }, function (t) { e("throw", t, a, u); }) : r.resolve(f).then(function (t) { h.value = t, a(h); }, function (t) { return e("throw", t, a, u); }); } u(c.arg); } var o; c(this, "_invoke", function (t, n) { function i() { return new r(function (r, o) { e(t, n, r, o); }); } return o = o ? o.then(i, i) : i(); }, !0); } function d(r, e) { var n = e.method, o = r.i[n]; if (o === t) return e.delegate = null, "throw" === n && r.i["return"] && (e.method = "return", e.arg = t, d(r, e), "throw" === e.method) || "return" !== n && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + n + "' method")), f; var i = s(o, r.i, e.arg); if ("throw" === i.type) return e.method = "throw", e.arg = i.arg, e.delegate = null, f; var a = i.arg; return a ? a.done ? (e[r.r] = a.value, e.next = r.n, "return" !== e.method && (e.method = "next", e.arg = t), e.delegate = null, f) : a : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f); } function w(t) { this.tryEntries.push(t); } function m(r) { var e = r[4] || {}; e.type = "normal", e.arg = t, r[4] = e; } function Context(t) { this.tryEntries = [[-1]], t.forEach(w, this), this.reset(!0); } function x(r) { if (null != r) { var e = r[i]; if (e) return e.call(r); if ("function" == typeof r.next) return r; if (!isNaN(r.length)) { var o = -1, a = function e() { for (; ++o < r.length;) if (n.call(r, o)) return e.value = r[o], e.done = !1, e; return e.value = t, e.done = !0, e; }; return a.next = a; } } throw new TypeError(_typeof(r) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, c(v, "constructor", GeneratorFunctionPrototype), c(GeneratorFunctionPrototype, "constructor", GeneratorFunction), c(GeneratorFunctionPrototype, u, GeneratorFunction.displayName = "GeneratorFunction"), r.isGeneratorFunction = function (t) { var r = "function" == typeof t && t.constructor; return !!r && (r === GeneratorFunction || "GeneratorFunction" === (r.displayName || r.name)); }, r.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, c(t, u, "GeneratorFunction")), t.prototype = Object.create(v), t; }, r.awrap = function (t) { return { __await: t }; }, g(AsyncIterator.prototype), c(AsyncIterator.prototype, a, function () { return this; }), r.AsyncIterator = AsyncIterator, r.async = function (t, e, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(h(t, e, n, o), i); return r.isGeneratorFunction(e) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, g(v), c(v, u, "Generator"), c(v, i, function () { return this; }), c(v, "toString", function () { return "[object Generator]"; }), r.keys = function (t) { var r = Object(t), e = []; for (var n in r) e.unshift(n); return function t() { for (; e.length;) if ((n = e.pop()) in r) return t.value = n, t.done = !1, t; return t.done = !0, t; }; }, r.values = x, Context.prototype = { constructor: Context, reset: function reset(r) { if (this.prev = this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(m), !r) for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0][4]; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(r) { if (this.done) throw r; var e = this; function n(t) { a.type = "throw", a.arg = r, e.next = t; } for (var o = e.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i[4], u = this.prev, c = i[1], h = i[2]; if (-1 === i[0]) return n("end"), !1; if (!c && !h) throw Error("try statement without catch or finally"); if (null != i[0] && i[0] <= u) { if (u < c) return this.method = "next", this.arg = t, n(c), !0; if (u < h) return n(h), !1; } } }, abrupt: function abrupt(t, r) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var n = this.tryEntries[e]; if (n[0] > -1 && n[0] <= this.prev && this.prev < n[2]) { var o = n; break; } } o && ("break" === t || "continue" === t) && o[0] <= r && r <= o[2] && (o = null); var i = o ? o[4] : {}; return i.type = t, i.arg = r, o ? (this.method = "next", this.next = o[2], f) : this.complete(i); }, complete: function complete(t, r) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), f; }, finish: function finish(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[2] === t) return this.complete(e[4], e[3]), m(e), f; } }, "catch": function _catch(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[0] === t) { var n = e[4]; if ("throw" === n.type) { var o = n.arg; m(e); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(r, e, n) { return this.delegate = { i: x(r), r: e, n: n }, "next" === this.method && (this.arg = t), f; } }, r; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }









var __default__ = {
  name: 'SimulateurDeCredit',
  components: {
    Simulator: _Simulator_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    SimulatorHistory: _SimulatorHistory_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    SimulationActions: _SimulationActions_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    SimulationActionsBtn: _SimulationActionsBtn_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    ErrorRetry: _shared_ErrorRetry_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
    PrintModal: _PrintModal_vue__WEBPACK_IMPORTED_MODULE_7__["default"]
  },
  props: {
    facilities: {
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    canSelectFacility: {
      type: Boolean,
      "default": false
    },
    canDelete: {
      type: Boolean,
      "default": false
    },
    canEdit: {
      type: Boolean,
      "default": true
    },
    canImport: {
      type: Boolean,
      "default": false
    },
    canSave: {
      type: Boolean,
      "default": false
    },
    canPrint: {
      type: Boolean,
      "default": false
    },
    overflowY: {
      type: String,
      "default": 'auto'
    },
    showHistory: {
      type: Boolean,
      "default": true
    },
    showCloseBtn: {
      type: Boolean,
      "default": true
    },
    allTamor: {
      type: Boolean,
      "default": false
    },
    defaultEditMode: {
      type: Boolean,
      "default": false
    },
    canCreateNewSimulation: {
      type: Boolean,
      "default": true
    },
    defaultFacility: {
      type: Object,
      "default": function _default() {
        return null;
      }
    },
    defaultSimulation: {
      type: Object,
      "default": function _default() {
        return null;
      }
    },
    modalName: {
      type: String,
      "default": 'simulateur-modal'
    },
    viewOnly: {
      type: Boolean,
      "default": false
    },
    dossierCredit: {
      type: Object,
      "default": function _default() {}
    },
    canInportSimulation: {
      type: Boolean,
      "default": false
    }
  },
  data: function data() {
    return {
      frozenData: {},
      ebapisHost: _services_ebapis_service__WEBPACK_IMPORTED_MODULE_4__["default"].host,
      currentTab: 'simulateur',
      facility: null,
      simulation: null,
      diffSimulation: null,
      editMode: this.defaultEditMode,
      hasChanged: false,
      history: {
        data: [],
        loading: false,
        error: null
      },
      internalViewOnly: this.viewOnly,
      importRequired: false
    };
  },
  computed: {
    showHistoryTab: function showHistoryTab() {
      return this.showHistory && this.useIfTab('historique');
    },
    showFooter: function showFooter() {
      return this.showCloseBtn && (this.useIfTab('simulateur') || this.useIfTab('historique'));
    }
  },
  methods: {
    handleFacility: function handleFacility(e) {
      this.facility = e;
    },
    handleDiffSim: function handleDiffSim(simulation) {
      if (!this.viewOnly) return;
      this.diffSimulation = simulation;
    },
    toggleTab: function toggleTab(tab) {
      this.currentTab = tab;
      if (tab === 'simulateur') {
        this.internalViewOnly = this.viewOnly; // Reset to prop value when switching to simulator
      }
    },
    useIfTab: function useIfTab(tab) {
      return this.currentTab === tab;
    },
    ensureEbapisHost: function ensureEbapisHost() {
      var _this = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var _this$authenticatedUs;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (_this.ebapisHost) {
                _context.next = 4;
                break;
              }
              _context.next = 3;
              return _services_ebapis_service__WEBPACK_IMPORTED_MODULE_4__["default"].loadablehost((_this$authenticatedUs = _this.authenticatedUser) === null || _this$authenticatedUs === void 0 ? void 0 : _this$authenticatedUs.filiale);
            case 3:
              _this.ebapisHost = _services_ebapis_service__WEBPACK_IMPORTED_MODULE_4__["default"].host;
            case 4:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    },
    handleHttpError: function handleHttpError(err) {
      var _err$response$data$me, _err$response;
      var fallbackMessage = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Erreur inconnue.';
      if (process.env.MIX_NODE_ENV === 'development') {
        console.error('HTTP Error:', err);
      }
      var message = (_err$response$data$me = err === null || err === void 0 || (_err$response = err.response) === null || _err$response === void 0 || (_err$response = _err$response.data) === null || _err$response === void 0 ? void 0 : _err$response.message) !== null && _err$response$data$me !== void 0 ? _err$response$data$me : fallbackMessage;
      this.$toasted.error(message);
    },
    loadHistory: function loadHistory() {
      var _this2 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var LOAD_ERROR, _this2$authenticatedU, _this2$authenticatedU2, _this2$authenticatedU3, filters, response, _response$data$histor, _response$data$messag, _response$data$messag2, _err$response$data$me2, _err$response2;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _this2.history.loading = true;
              LOAD_ERROR = 'Erreur lors du chargement de l\'historique des simulations.';
              _context2.prev = 2;
              _context2.next = 5;
              return _this2.ensureEbapisHost();
            case 5:
              filters = {
                user_id: (_this2$authenticatedU = (_this2$authenticatedU2 = _this2.authenticatedUser) === null || _this2$authenticatedU2 === void 0 ? void 0 : _this2$authenticatedU2.id) !== null && _this2$authenticatedU !== void 0 ? _this2$authenticatedU : (_this2$authenticatedU3 = _this2.authenticatedUser) === null || _this2$authenticatedU3 === void 0 ? void 0 : _this2$authenticatedU3.user_id
              };
              _context2.next = 8;
              return _this2.$axios.post("".concat(_this2.ebapisHost, "creditbuilder/api/v1/simulateur/historique/"), {
                filters: filters
              });
            case 8:
              response = _context2.sent;
              if (response.data.is_success) {
                _this2.history.data = (_response$data$histor = response.data.historique) !== null && _response$data$histor !== void 0 ? _response$data$histor : [];
                _this2.history.error = null;
              } else {
                _this2.history.error = (_response$data$messag = response.data.message) !== null && _response$data$messag !== void 0 ? _response$data$messag : LOAD_ERROR;
                _this2.$toasted.error((_response$data$messag2 = response.data.message) !== null && _response$data$messag2 !== void 0 ? _response$data$messag2 : LOAD_ERROR);
              }
              _context2.next = 16;
              break;
            case 12:
              _context2.prev = 12;
              _context2.t0 = _context2["catch"](2);
              _this2.handleHttpError(_context2.t0, LOAD_ERROR);
              _this2.history.error = (_err$response$data$me2 = _context2.t0 === null || _context2.t0 === void 0 || (_err$response2 = _context2.t0.response) === null || _err$response2 === void 0 || (_err$response2 = _err$response2.data) === null || _err$response2 === void 0 ? void 0 : _err$response2.message) !== null && _err$response$data$me2 !== void 0 ? _err$response$data$me2 : LOAD_ERROR;
            case 16:
              _context2.prev = 16;
              _this2.history.loading = false;
              return _context2.finish(16);
            case 19:
            case "end":
              return _context2.stop();
          }
        }, _callee2, null, [[2, 12, 16, 19]]);
      }))();
    },
    canCloseModal: function canCloseModal() {
      var _this3 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var confirmed;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              if (!(_this3.hasChanged && !_this3.internalViewOnly && _this3.canSave)) {
                _context3.next = 5;
                break;
              }
              _context3.next = 3;
              return _this3.confirmation("La simulation n'a pas été enregistrée. Si vous fermez, vous perdrez les modifications.", 'Attention !');
            case 3:
              confirmed = _context3.sent;
              return _context3.abrupt("return", confirmed);
            case 5:
              return _context3.abrupt("return", true);
            case 6:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }))();
    },
    closeModal: function closeModal() {
      var _this4 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return _this4.canCloseModal();
            case 2:
              if (!_context4.sent) {
                _context4.next = 5;
                break;
              }
              _this4.$modal.hide(_this4.modalName);
              _this4.$emit('close');
            case 5:
            case "end":
              return _context4.stop();
          }
        }, _callee4);
      }))();
    },
    handleAction: function handleAction(event) {
      var _this5 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
        var action, value;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              action = event.action, value = event.value;
              _context5.t0 = action;
              _context5.next = _context5.t0 === 'save' ? 4 : _context5.t0 === 'import' ? 7 : _context5.t0 === 'print' ? 10 : _context5.t0 === 'edit' ? 13 : 17;
              break;
            case 4:
              _context5.next = 6;
              return _this5.saveSimulation();
            case 6:
              return _context5.abrupt("break", 18);
            case 7:
              _context5.next = 9;
              return _this5.launchImport();
            case 9:
              return _context5.abrupt("break", 18);
            case 10:
              _context5.next = 12;
              return _this5.launchPrinter();
            case 12:
              return _context5.abrupt("break", 18);
            case 13:
              _this5.editMode = value;
              _this5.internalViewOnly = false; // Exit viewOnly when editing
              _this5.$toasted.show("Mode \xE9dition ".concat(value ? 'désactivé' : 'activé', "."));
              return _context5.abrupt("break", 18);
            case 17:
              console.warn("Unknown action: ".concat(action));
            case 18:
            case "end":
              return _context5.stop();
          }
        }, _callee5);
      }))();
    },
    launchPrinter: function launchPrinter() {
      var _this6 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              if (_this6.simulation) {
                _context6.next = 3;
                break;
              }
              _this6.$toasted.error('Veuillez terminer la simulation avant impression.');
              return _context6.abrupt("return");
            case 3:
              _this6.editMode = true;
              _services_printer_service__WEBPACK_IMPORTED_MODULE_6__["default"].launchPrinter(null, null, null, 'credit-simulator', 'landscape', true);
            case 5:
            case "end":
              return _context6.stop();
          }
        }, _callee6);
      }))();
    },
    showSaveDialog: function showSaveDialog() {
      var _this7 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
        var _this7$simulation$nam, _this7$simulation;
        var findSelected, _yield$Swal$fire, value, dismiss;
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              findSelected = function findSelected(simPubKey) {
                return _this7.history.data.find(function (i) {
                  return i.sim_pub_key === simPubKey;
                });
              };
              _context7.next = 3;
              return sweetalert2__WEBPACK_IMPORTED_MODULE_8___default().fire({
                title: "Confirmer l'enregistrement",
                html: "\n          <input id=\"swal-name\" class=\"form-control mt-3\" placeholder=\"Nom de la simulation\" value=\"".concat((_this7$simulation$nam = (_this7$simulation = _this7.simulation) === null || _this7$simulation === void 0 ? void 0 : _this7$simulation.name) !== null && _this7$simulation$nam !== void 0 ? _this7$simulation$nam : '', "\">\n          ").concat(_this7.history.data.length > 0 ? "\n          <select id=\"swal-select\" class=\"form-select mt-3\">\n            <option value=\"\">Cr\xE9er un nouvel enregistrement</option>\n            ".concat(_this7.history.data.map(function (item) {
                  var _this7$simulation2;
                  return "\n              <option value=\"".concat(item.sim_pub_key, "\" ").concat(((_this7$simulation2 = _this7.simulation) === null || _this7$simulation2 === void 0 ? void 0 : _this7$simulation2.sim_pub_key) === item.sim_pub_key ? 'selected' : '', ">\n                ").concat(item.name, " - ").concat(item.caracteristiques_credit.montant_credit, "\n              </option>\n            ");
                }).join(''), "\n          </select>") : '', "\n        "),
                showCancelButton: true,
                confirmButtonText: "Enregistrer",
                cancelButtonText: "Annuler",
                preConfirm: function preConfirm() {
                  var _this7$simulation3;
                  var name = document.getElementById("swal-name").value.trim();
                  var selectInput = document.getElementById("swal-select");
                  var sim_pub_key = selectInput ? selectInput.value : (_this7$simulation3 = _this7.simulation) === null || _this7$simulation3 === void 0 ? void 0 : _this7$simulation3.sim_pub_key;
                  if (!name) {
                    _this7.$toasted.error('Nom requis pour enregistrer.');
                    return false;
                  }
                  return {
                    name: name,
                    sim_pub_key: sim_pub_key
                  };
                },
                onOpen: function onOpen() {
                  var nameInput = document.getElementById("swal-name");
                  if (nameInput) {
                    nameInput.focus();
                  }
                  var selectInput = document.getElementById("swal-select");
                  if (selectInput) {
                    selectInput.addEventListener('change', function () {
                      var selectedOption = selectInput.options[selectInput.selectedIndex];
                      if (selectedOption.value) {
                        var selected = findSelected(selectedOption.value);
                        nameInput.value = (selected === null || selected === void 0 ? void 0 : selected.name) || '';
                      } else {
                        nameInput.value = '';
                      }
                    });
                  }
                }
              });
            case 3:
              _yield$Swal$fire = _context7.sent;
              value = _yield$Swal$fire.value;
              dismiss = _yield$Swal$fire.dismiss;
              return _context7.abrupt("return", dismiss === (sweetalert2__WEBPACK_IMPORTED_MODULE_8___default().DismissReason).cancel ? null : value);
            case 7:
            case "end":
              return _context7.stop();
          }
        }, _callee7);
      }))();
    },
    saveSimulation: function saveSimulation() {
      var _this8 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
        var simInfo, _this8$authenticatedU, _this8$authenticatedU2, _this8$authenticatedU3, _this8$authenticatedU4, _this8$authenticatedU5, existByName, user, payload, endpoint, url, response;
        return _regeneratorRuntime().wrap(function _callee8$(_context8) {
          while (1) switch (_context8.prev = _context8.next) {
            case 0:
              if (_this8.hasChanged) {
                _context8.next = 3;
                break;
              }
              _this8.$toasted.show('Aucune modification à enregistrer.');
              return _context8.abrupt("return");
            case 3:
              if (_this8.simulation) {
                _context8.next = 6;
                break;
              }
              _this8.$toasted.error('Veuillez terminer la simulation avant de l\'enregistrer.');
              return _context8.abrupt("return");
            case 6:
              _context8.next = 8;
              return _this8.showSaveDialog();
            case 8:
              simInfo = _context8.sent;
              if (simInfo) {
                _context8.next = 11;
                break;
              }
              return _context8.abrupt("return");
            case 11:
              _context8.prev = 11;
              _this8.history.loading = true;
              existByName = _this8.history.data.find(function (i) {
                return i.name === simInfo.name && i.sim_pub_key !== simInfo.sim_pub_key;
              });
              if (!existByName) {
                _context8.next = 17;
                break;
              }
              _this8.$toasted.error('Une simulation avec ce nom existe déjà.');
              return _context8.abrupt("return");
            case 17:
              _context8.next = 19;
              return _this8.ensureEbapisHost();
            case 19:
              user = {
                id: (_this8$authenticatedU = (_this8$authenticatedU2 = _this8.authenticatedUser) === null || _this8$authenticatedU2 === void 0 ? void 0 : _this8$authenticatedU2.id) !== null && _this8$authenticatedU !== void 0 ? _this8$authenticatedU : (_this8$authenticatedU3 = _this8.authenticatedUser) === null || _this8$authenticatedU3 === void 0 ? void 0 : _this8$authenticatedU3.user_id,
                email: (_this8$authenticatedU4 = _this8.authenticatedUser) === null || _this8$authenticatedU4 === void 0 ? void 0 : _this8$authenticatedU4.email,
                name: (_this8$authenticatedU5 = _this8.authenticatedUser) === null || _this8$authenticatedU5 === void 0 ? void 0 : _this8$authenticatedU5.name
              };
              payload = {
                simulation: {
                  name: simInfo.name,
                  caracteristiques_credit: _this8.simulation.caracteristiques_credit,
                  donnees_calculees: _this8.simulation.donnees_calculees,
                  tableau: _this8.simulation.tableau
                }
              };
              endpoint = simInfo.sim_pub_key ? 'update' : 'save';
              url = "".concat(_this8.ebapisHost, "creditbuilder/api/v1/simulateur/historique/").concat(endpoint, "/");
              if (simInfo.sim_pub_key) {
                payload.user_id = user.id;
                payload.simulation.sim_pub_key = simInfo.sim_pub_key;
              } else {
                payload.user = user;
              }
              _context8.next = 26;
              return _this8.$axios.post(url, payload);
            case 26:
              response = _context8.sent;
              if (!response.data.is_success) {
                _context8.next = 36;
                break;
              }
              if (!simInfo.sim_pub_key) {
                _this8.simulation.sim_pub_key = response.data.sim_pub_key;
              }
              _this8.$toasted.show('Simulation enregistrée avec succès.');
              _this8.hasChanged = false;
              _this8.internalViewOnly = false; // Exit viewOnly after saving
              _context8.next = 34;
              return _this8.loadHistory();
            case 34:
              _context8.next = 37;
              break;
            case 36:
              _this8.$toasted.error(response.data.message || 'Erreur lors de l\'enregistrement.');
            case 37:
              _context8.next = 42;
              break;
            case 39:
              _context8.prev = 39;
              _context8.t0 = _context8["catch"](11);
              _this8.handleHttpError(_context8.t0, 'Erreur lors de la vérification des doublons.');
            case 42:
              _context8.prev = 42;
              _this8.history.loading = false;
              return _context8.finish(42);
            case 45:
            case "end":
              return _context8.stop();
          }
        }, _callee8, null, [[11, 39, 42, 45]]);
      }))();
    },
    launchImport: function launchImport() {
      var _this9 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
        var _frozenSimulation, _this9$facility, _frozenSimulation2, _this9$facility2, _frozenSimulation3, _this9$facility3, _frozenSimulation4, _this9$facility4, _frozenSimulation5, _this9$facility5, _frozenSimulation6, _this9$facility6, _frozenSimulation7, _this9$facility7, _frozenSimulation8, _this9$facility8, _frozenSimulation9, _this9$facility9, _frozenSimulation0, _this9$facility0, _frozenSimulation1, _this9$facility1, _frozenSimulation10, _this9$facility10, _frozenSimulation11, _this9$facility11, _frozenSimulation12, _this9$facility12, frozenSimulation, montantCredit, _this9$facility13, _this9$facility13$cre, createFacility, facility, isConfirmed;
        return _regeneratorRuntime().wrap(function _callee9$(_context9) {
          while (1) switch (_context9.prev = _context9.next) {
            case 0:
              _context9.prev = 0;
              frozenSimulation = JSON.parse(JSON.stringify(_this9.simulation));
              _this9.frozenData = {
                simulation: _objectSpread({}, frozenSimulation)
              };
              if (_this9.simulation) {
                _context9.next = 6;
                break;
              }
              _this9.$toasted.error('Veuillez terminer la simulation avant exportation.');
              return _context9.abrupt("return");
            case 6:
              _context9.next = 8;
              return new Promise(function (resolve) {
                return setTimeout(resolve, 500);
              });
            case 8:
              // console.log('launchImport called with:', {
              //   simulation: this.simulation,
              //   facility: this.facility,
              // });

              if (_this9.viewOnly) {
                frozenSimulation = _objectSpread(_objectSpread({}, frozenSimulation), _this9.diffSimulation);
              }

              // if (!this.simulation.sim_pub_key) {
              //   this.$toasted.error('Veuillez enregistrer la simulation avant exportation.');
              //   return;
              // }
              if (_this9.facility) {
                _context9.next = 12;
                break;
              }
              _this9.$toasted.error("Veuillez d'abord sélectionner une facilité.");
              return _context9.abrupt("return");
            case 12:
              // Ensure facility has simulation applied
              montantCredit = ((_frozenSimulation = frozenSimulation) === null || _frozenSimulation === void 0 || (_frozenSimulation = _frozenSimulation.caracteristiques_credit) === null || _frozenSimulation === void 0 ? void 0 : _frozenSimulation.montant_credit) || ((_this9$facility = _this9.facility) === null || _this9$facility === void 0 ? void 0 : _this9$facility.montant_credit) || 0;
              _this9.facility = _objectSpread(_objectSpread({}, _this9.facility), {}, {
                type_facilite: ((_frozenSimulation2 = frozenSimulation) === null || _frozenSimulation2 === void 0 || (_frozenSimulation2 = _frozenSimulation2.caracteristiques_credit) === null || _frozenSimulation2 === void 0 ? void 0 : _frozenSimulation2.type_facilite) || ((_this9$facility2 = _this9.facility) === null || _this9$facility2 === void 0 ? void 0 : _this9$facility2.type_facilite),
                montant_echeance: String(((_frozenSimulation3 = frozenSimulation) === null || _frozenSimulation3 === void 0 || (_frozenSimulation3 = _frozenSimulation3.tableau) === null || _frozenSimulation3 === void 0 || (_frozenSimulation3 = _frozenSimulation3[0]) === null || _frozenSimulation3 === void 0 ? void 0 : _frozenSimulation3.montant_echeance) || ((_this9$facility3 = _this9.facility) === null || _this9$facility3 === void 0 ? void 0 : _this9$facility3.montant_echeance) || 0),
                sim_pub_key: ((_frozenSimulation4 = frozenSimulation) === null || _frozenSimulation4 === void 0 ? void 0 : _frozenSimulation4.sim_pub_key) || ((_this9$facility4 = _this9.facility) === null || _this9$facility4 === void 0 ? void 0 : _this9$facility4.sim_pub_key),
                montant_credit: String(montantCredit),
                montant_demande: String(montantCredit),
                duree: ((_frozenSimulation5 = frozenSimulation) === null || _frozenSimulation5 === void 0 || (_frozenSimulation5 = _frozenSimulation5.caracteristiques_credit) === null || _frozenSimulation5 === void 0 ? void 0 : _frozenSimulation5.duree) || ((_this9$facility5 = _this9.facility) === null || _this9$facility5 === void 0 ? void 0 : _this9$facility5.duree),
                taux: ((_frozenSimulation6 = frozenSimulation) === null || _frozenSimulation6 === void 0 || (_frozenSimulation6 = _frozenSimulation6.caracteristiques_credit) === null || _frozenSimulation6 === void 0 ? void 0 : _frozenSimulation6.taux_annuel_ht) || ((_this9$facility6 = _this9.facility) === null || _this9$facility6 === void 0 ? void 0 : _this9$facility6.taux),
                echeancier: ((_frozenSimulation7 = frozenSimulation) === null || _frozenSimulation7 === void 0 || (_frozenSimulation7 = _frozenSimulation7.caracteristiques_credit) === null || _frozenSimulation7 === void 0 ? void 0 : _frozenSimulation7.echeancier) || ((_this9$facility7 = _this9.facility) === null || _this9$facility7 === void 0 ? void 0 : _this9$facility7.echeancier),
                encours: String(((_frozenSimulation8 = frozenSimulation) === null || _frozenSimulation8 === void 0 || (_frozenSimulation8 = _frozenSimulation8.caracteristiques_credit) === null || _frozenSimulation8 === void 0 ? void 0 : _frozenSimulation8.encours) || ((_this9$facility8 = _this9.facility) === null || _this9$facility8 === void 0 ? void 0 : _this9$facility8.encours) || 0),
                // encours: String(frozenSimulation?.donnees_calculees?.encours || this.facility?.encours || 0),
                frais_dossier: String(((_frozenSimulation9 = frozenSimulation) === null || _frozenSimulation9 === void 0 || (_frozenSimulation9 = _frozenSimulation9.caracteristiques_credit) === null || _frozenSimulation9 === void 0 ? void 0 : _frozenSimulation9.frais_dossier_facilite) || ((_this9$facility9 = _this9.facility) === null || _this9$facility9 === void 0 ? void 0 : _this9$facility9.frais_dossier) || 0),
                montant_assurance: String(((_frozenSimulation0 = frozenSimulation) === null || _frozenSimulation0 === void 0 || (_frozenSimulation0 = _frozenSimulation0.caracteristiques_credit) === null || _frozenSimulation0 === void 0 ? void 0 : _frozenSimulation0.assurance) || ((_this9$facility0 = _this9.facility) === null || _this9$facility0 === void 0 ? void 0 : _this9$facility0.montant_assurance) || 0),
                date_echeance: ((_frozenSimulation1 = frozenSimulation) === null || _frozenSimulation1 === void 0 || (_frozenSimulation1 = _frozenSimulation1.caracteristiques_credit) === null || _frozenSimulation1 === void 0 ? void 0 : _frozenSimulation1.date_echeance) || ((_this9$facility1 = _this9.facility) === null || _this9$facility1 === void 0 ? void 0 : _this9$facility1.date_echeance),
                frais_cheque_certifier: ((_frozenSimulation10 = frozenSimulation) === null || _frozenSimulation10 === void 0 || (_frozenSimulation10 = _frozenSimulation10.caracteristiques_credit) === null || _frozenSimulation10 === void 0 ? void 0 : _frozenSimulation10.frais_cheque_certifier) || ((_this9$facility10 = _this9.facility) === null || _this9$facility10 === void 0 ? void 0 : _this9$facility10.frais_cheque_certifier),
                frais_huissier: ((_frozenSimulation11 = frozenSimulation) === null || _frozenSimulation11 === void 0 || (_frozenSimulation11 = _frozenSimulation11.caracteristiques_credit) === null || _frozenSimulation11 === void 0 ? void 0 : _frozenSimulation11.frais_huissier) || ((_this9$facility11 = _this9.facility) === null || _this9$facility11 === void 0 ? void 0 : _this9$facility11.frais_huissier),
                tva: ((_frozenSimulation12 = frozenSimulation) === null || _frozenSimulation12 === void 0 || (_frozenSimulation12 = _frozenSimulation12.caracteristiques_credit) === null || _frozenSimulation12 === void 0 ? void 0 : _frozenSimulation12.tva) || ((_this9$facility12 = _this9.facility) === null || _this9$facility12 === void 0 ? void 0 : _this9$facility12.tva)
              });

              // console.log('launchImport facility:', this.facility);
              _this9$facility13 = _this9.facility, _this9$facility13$cre = _this9$facility13.create, createFacility = _this9$facility13$cre === void 0 ? false : _this9$facility13$cre, facility = _objectWithoutProperties(_this9$facility13, _excluded);
              _this9.facility.sim_pub_key = frozenSimulation.sim_pub_key;
              _context9.next = 18;
              return _this9.confirmation('Êtes-vous sûr de vouloir exporter cette simulation ? Cette action remplacera certaines données du dossier crédit par celles de la simulation.', 'Confirmer l\'exportation');
            case 18:
              isConfirmed = _context9.sent;
              if (isConfirmed) {
                _context9.next = 21;
                break;
              }
              return _context9.abrupt("return");
            case 21:
              _this9.history.loading = true;

              // console.log('Exporting simulation with facility:', {
              //   simulation: frozenSimulation,
              //   facility,
              //   createFacility,
              // });

              EventBus.$emit('update-facility', {
                facility: facility,
                create: createFacility
              });
              if (!createFacility) {
                _context9.next = 25;
                break;
              }
              return _context9.abrupt("return");
            case 25:
              _context9.next = 27;
              return _this9.exportSimulation();
            case 27:
              _context9.next = 32;
              break;
            case 29:
              _context9.prev = 29;
              _context9.t0 = _context9["catch"](0);
              _this9.handleHttpError(_context9.t0, "Erreur lors de l'exportation de la simulation.");
            case 32:
            case "end":
              return _context9.stop();
          }
        }, _callee9, null, [[0, 29]]);
      }))();
    },
    handleSelectSimulation: function handleSelectSimulation(simPubKey) {
      var simulation = this.history.data.find(function (item) {
        return item.sim_pub_key === simPubKey;
      });
      if (!simulation) {
        this.$toasted.error('Simulation non trouvée.');
        return;
      }
      this.simulation = simulation;
      this.internalViewOnly = true; // Enable viewOnly for history selection
      this.editMode = true; // Disable editing by default
      this.toggleTab('simulateur');
      this.$toasted.show("Simulation \"".concat(simulation.name, "\" charg\xE9e avec succ\xE8s."));
    },
    handleDeleteSimulation: function handleDeleteSimulation(simPubKey) {
      var _this0 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee0() {
        var confirmation, _this0$authenticatedU, _this0$authenticatedU2, _this0$authenticatedU3, response, _this0$simulation, _response$data$messag3;
        return _regeneratorRuntime().wrap(function _callee0$(_context0) {
          while (1) switch (_context0.prev = _context0.next) {
            case 0:
              _context0.next = 2;
              return _this0.confirmation('Êtes-vous sûr de vouloir supprimer cette simulation ?', 'Confirmer la suppression');
            case 2:
              confirmation = _context0.sent;
              if (confirmation) {
                _context0.next = 5;
                break;
              }
              return _context0.abrupt("return");
            case 5:
              _context0.prev = 5;
              _context0.next = 8;
              return _this0.ensureEbapisHost();
            case 8:
              _context0.next = 10;
              return _this0.$axios.post("".concat(_this0.ebapisHost, "creditbuilder/api/v1/simulateur/historique/delete/"), {
                sim_pub_key: simPubKey,
                user_id: (_this0$authenticatedU = (_this0$authenticatedU2 = _this0.authenticatedUser) === null || _this0$authenticatedU2 === void 0 ? void 0 : _this0$authenticatedU2.id) !== null && _this0$authenticatedU !== void 0 ? _this0$authenticatedU : (_this0$authenticatedU3 = _this0.authenticatedUser) === null || _this0$authenticatedU3 === void 0 ? void 0 : _this0$authenticatedU3.user_id
              });
            case 10:
              response = _context0.sent;
              if (!response.data.is_success) {
                _context0.next = 18;
                break;
              }
              _this0.$toasted.show(response.data.message);
              _context0.next = 15;
              return _this0.loadHistory();
            case 15:
              if (((_this0$simulation = _this0.simulation) === null || _this0$simulation === void 0 ? void 0 : _this0$simulation.sim_pub_key) === simPubKey) {
                _this0.simulation = null;
                _this0.internalViewOnly = false;
              }
              _context0.next = 19;
              break;
            case 18:
              _this0.$toasted.error((_response$data$messag3 = response.data.message) !== null && _response$data$messag3 !== void 0 ? _response$data$messag3 : 'Erreur lors de la suppression.');
            case 19:
              _context0.next = 24;
              break;
            case 21:
              _context0.prev = 21;
              _context0.t0 = _context0["catch"](5);
              _this0.handleHttpError(_context0.t0, 'Erreur lors de la suppression.');
            case 24:
            case "end":
              return _context0.stop();
          }
        }, _callee0, null, [[5, 21]]);
      }))();
    },
    exportSimulation: function exportSimulation() {
      var _this1 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee1() {
        return _regeneratorRuntime().wrap(function _callee1$(_context1) {
          while (1) switch (_context1.prev = _context1.next) {
            case 0:
              try {
                _this1.history.loading = true;
                // console.log('exportSimulation called with:', {
                //   simulation: this.simulation,
                //   facility: this.facility,
                // });

                EventBus.$emit('export-simulation', {
                  simulation: _this1.simulation,
                  facility: _this1.facility
                });
              } catch (err) {
                console.error('Error exporting simulation:', err);
                _this1.handleHttpError(err, 'Erreur lors de l\'exportation de la simulation.');
              } finally {
                setTimeout(function () {
                  if (_this1.history.loading) {
                    _this1.$toasted.show("L'exportation peut prendre un peu de temps, veuillez patienter.");
                    setTimeout(function () {
                      if (_this1.history.loading) {
                        _this1.$toasted.error("L'exportation a échoué ou a pris trop de temps. Réactualisez la page pour réessayer.");
                        _this1.history.loading = false;
                      }
                    }, 15000);
                  }
                }, 15000);
                _this1.simulation = _this1.frozenData.simulation || null;
                delete _this1.frozenData.simulation;
              }
            case 1:
            case "end":
              return _context1.stop();
          }
        }, _callee1);
      }))();
    }
  },
  mounted: function mounted() {
    var _this10 = this;
    // console.log(' mounted Simcredit simulation before ** ',this.simulation);

    this.$nextTick(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee10() {
      return _regeneratorRuntime().wrap(function _callee10$(_context10) {
        while (1) switch (_context10.prev = _context10.next) {
          case 0:
            _context10.next = 2;
            return _this10.loadHistory();
          case 2:
            if (_this10.defaultSimulation) {
              _this10.simulation = _this10.defaultSimulation;
              _this10.internalViewOnly = _this10.viewOnly;
              // console.log('mounted Simcredit simulation ** ',this.simulation);
            }
          case 3:
          case "end":
            return _context10.stop();
        }
      }, _callee10);
    })));
    EventBus.$on('facility-updated', /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee11(result) {
        var _ref3, _ref3$success, success, _ref3$message, message;
        return _regeneratorRuntime().wrap(function _callee11$(_context11) {
          while (1) switch (_context11.prev = _context11.next) {
            case 0:
              _context11.prev = 0;
              _ref3 = result || {}, _ref3$success = _ref3.success, success = _ref3$success === void 0 ? false : _ref3$success, _ref3$message = _ref3.message, message = _ref3$message === void 0 ? "Erreur lors de la mise à jour de la facilité." : _ref3$message;
              if (success) {
                _context11.next = 7;
                break;
              }
              _this10.$toasted.error(message);
              return _context11.abrupt("return");
            case 7:
              _this10.$toasted.show(result.message);
            case 8:
              _this10.exportSimulation();
              _context11.next = 15;
              break;
            case 11:
              _context11.prev = 11;
              _context11.t0 = _context11["catch"](0);
              console.error('Error handling facility-updated event:', _context11.t0);
              _this10.$toasted.error("Erreur lors de la mise à jour de la facilité.");
            case 15:
            case "end":
              return _context11.stop();
          }
        }, _callee11, null, [[0, 11]]);
      }));
      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
    EventBus.$on('simulation-exported', function (result) {
      try {
        _this10.history.loading = false;
        var _ref4 = result || {},
          _ref4$success = _ref4.success,
          success = _ref4$success === void 0 ? false : _ref4$success,
          _ref4$message = _ref4.message,
          message = _ref4$message === void 0 ? "Erreur lors de l'exportation de la simulation." : _ref4$message;
        if (!success) {
          _this10.$toasted.error(message);
          return;
        }
        if (result.success) {
          _this10.$toasted.show(result.message);
          _this10.hasChanged = false;
          _this10.editMode = true;
          _this10.internalViewOnly = false; // Exit viewOnly after export

          setTimeout(function () {
            document.location.reload(); // Reload to ensure the latest data is displayed
          }, 3000);
        } else {
          _this10.$toasted.error(result.message);
        }
      } catch (err) {
        console.error('Error handling simulation-updated event:', err);
        _this10.$toasted.error("Erreur lors de l'exportation de la simulation.");
      }
    });
  },
  watch: {
    defaultFacility: {
      handler: function handler(newVal) {
        this.facility = newVal;
        if (newVal !== null && newVal !== void 0 && newVal.sim_pub_key) {
          this.simulation = this.history.data.find(function (item) {
            return item.sim_pub_key === newVal.sim_pub_key;
          }) || null;
          this.internalViewOnly = this.viewOnly;
        }
      },
      immediate: true,
      deep: true
    },
    defaultSimulation: {
      handler: function handler(newVal) {
        // console.log('watch -> defaultSimulation ** ',this.defaultSimulation);
        this.simulation = newVal;
        if (newVal !== null && newVal !== void 0 && newVal.sim_pub_key) {
          this.facility = this.facilities.find(function (f) {
            return f.sim_pub_key === newVal.sim_pub_key;
          }) || null;
          this.simulation = this.history.data.find(function (item) {
            return item.sim_pub_key === newVal.sim_pub_key;
          }) || null;
          this.internalViewOnly = this.viewOnly;
        }
        // console.log('handler -> Simulation ** ',this.simulation);
      },
      immediate: true,
      deep: true
    },
    diffSimulation: function diffSimulation(newVal) {
      if (this.viewOnly && newVal) {
        var _newTableau$, _this$defaultFacility;
        var newTableau = (newVal === null || newVal === void 0 ? void 0 : newVal.tableau) || [];
        var newEcheance = this.localeStringToFloat((_newTableau$ = newTableau[0]) === null || _newTableau$ === void 0 ? void 0 : _newTableau$.montant_echeance) || 0;
        var facilityEcheance = this.localeStringToFloat((_this$defaultFacility = this.defaultFacility) === null || _this$defaultFacility === void 0 ? void 0 : _this$defaultFacility.montant_echeance) || 0;
        if (newEcheance !== facilityEcheance) {
          this.importRequired = true;
          EventBus.$emit('simulation-import-requested', {
            simulation: this.defaultSimulation,
            facility: this.defaultFacility
          });
        } else {
          this.importRequired = false;
          EventBus.$emit('simulation-import-requested', {
            simulation: null,
            facility: null
          });
        }
      }
    }
  }
};

var __injectCSSVars__ = function __injectCSSVars__() {
  (0,vue__WEBPACK_IMPORTED_MODULE_9__.useCssVars)(function (_vm, _setup) {
    return {
      "b8275906-overflowY": _vm.overflowY
    };
  });
};
var __setup__ = __default__.setup;
__default__.setup = __setup__ ? function (props, ctx) {
  __injectCSSVars__();
  return __setup__(props, ctx);
} : __injectCSSVars__;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/Simulateur/SimulationActions.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/Simulateur/SimulationActions.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'SimulationActions',
  props: {
    canEdit: {
      type: Boolean,
      "default": false
    },
    canImport: {
      type: Boolean,
      "default": false
    },
    canSave: {
      type: Boolean,
      "default": false
    },
    canPrint: {
      type: Boolean,
      "default": false
    },
    hasChanged: {
      type: Boolean,
      "default": false
    },
    defaultEditMode: {
      type: Boolean,
      "default": false
    }
  },
  data: function data() {
    return {
      isEditMode: this.defaultEditMode
    };
  },
  computed: {
    showActions: function showActions() {
      return this.canEdit || this.canImport || this.canSave || this.canPrint;
    }
  },
  methods: {
    emitAction: function emitAction(action) {
      var value = null;
      switch (action) {
        case 'edit':
          this.isEditMode = !this.isEditMode;
          value = this.isEditMode;
          break;
      }
      this.$emit('action', {
        action: action,
        value: value
      });
    }
  },
  watch: {
    defaultEditMode: function defaultEditMode(newValue) {
      this.isEditMode = newValue;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/Simulateur/SimulationActionsBtn.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/Simulateur/SimulationActionsBtn.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'SimulationActionsBtn',
  props: {
    canEdit: {
      type: Boolean,
      "default": false
    },
    canImport: {
      type: Boolean,
      "default": false
    },
    canSave: {
      type: Boolean,
      "default": false
    },
    canPrint: {
      type: Boolean,
      "default": false
    },
    hasChanged: {
      type: Boolean,
      "default": false
    },
    defaultEditMode: {
      type: Boolean,
      "default": false
    }
  },
  data: function data() {
    return {
      isEditMode: this.defaultEditMode
    };
  },
  computed: {
    showActions: function showActions() {
      return this.canEdit || this.canImport || this.canSave || this.canPrint;
    }
  },
  methods: {
    emitAction: function emitAction(action) {
      var value = null;
      switch (action) {
        case 'edit':
          this.isEditMode = !this.isEditMode;
          value = this.isEditMode;
          break;
      }
      this.$emit('action', {
        action: action,
        value: value
      });
    }
  },
  watch: {
    defaultEditMode: function defaultEditMode(newValue) {
      this.isEditMode = newValue;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/Simulateur/Simulator.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/Simulateur/Simulator.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _LoadSimulation_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LoadSimulation.vue */ "./resources/js/components/shared/afg/Simulateur/LoadSimulation.vue");
/* harmony import */ var _SimCurrencyInput_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SimCurrencyInput.vue */ "./resources/js/components/shared/afg/Simulateur/SimCurrencyInput.vue");
/* harmony import */ var _SimInput_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SimInput.vue */ "./resources/js/components/shared/afg/Simulateur/SimInput.vue");
/* harmony import */ var _SimDateInput_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SimDateInput.vue */ "./resources/js/components/shared/afg/Simulateur/SimDateInput.vue");
/* harmony import */ var _SimSelect_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SimSelect.vue */ "./resources/js/components/shared/afg/Simulateur/SimSelect.vue");
/* harmony import */ var _TamorTable_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TamorTable.vue */ "./resources/js/components/shared/afg/Simulateur/TamorTable.vue");
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../services/afg/tb_amortissement'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _services_credit_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../services/credit.service */ "./resources/js/services/credit.service.js");
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return r; }; var t, r = {}, e = Object.prototype, n = e.hasOwnProperty, o = "function" == typeof Symbol ? Symbol : {}, i = o.iterator || "@@iterator", a = o.asyncIterator || "@@asyncIterator", u = o.toStringTag || "@@toStringTag"; function c(t, r, e, n) { Object.defineProperty(t, r, { value: e, enumerable: !n, configurable: !n, writable: !n }); } try { c({}, ""); } catch (t) { c = function c(t, r, e) { return t[r] = e; }; } function h(r, e, n, o) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype); return c(a, "_invoke", function (r, e, n) { var o = 1; return function (i, a) { if (3 === o) throw Error("Generator is already running"); if (4 === o) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var u = n.delegate; if (u) { var c = d(u, n); if (c) { if (c === f) continue; return c; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (1 === o) throw o = 4, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = 3; var h = s(r, e, n); if ("normal" === h.type) { if (o = n.done ? 4 : 2, h.arg === f) continue; return { value: h.arg, done: n.done }; } "throw" === h.type && (o = 4, n.method = "throw", n.arg = h.arg); } }; }(r, n, new Context(o || [])), !0), a; } function s(t, r, e) { try { return { type: "normal", arg: t.call(r, e) }; } catch (t) { return { type: "throw", arg: t }; } } r.wrap = h; var f = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var l = {}; c(l, i, function () { return this; }); var p = Object.getPrototypeOf, y = p && p(p(x([]))); y && y !== e && n.call(y, i) && (l = y); var v = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(l); function g(t) { ["next", "throw", "return"].forEach(function (r) { c(t, r, function (t) { return this._invoke(r, t); }); }); } function AsyncIterator(t, r) { function e(o, i, a, u) { var c = s(t[o], t, i); if ("throw" !== c.type) { var h = c.arg, f = h.value; return f && "object" == _typeof(f) && n.call(f, "__await") ? r.resolve(f.__await).then(function (t) { e("next", t, a, u); }, function (t) { e("throw", t, a, u); }) : r.resolve(f).then(function (t) { h.value = t, a(h); }, function (t) { return e("throw", t, a, u); }); } u(c.arg); } var o; c(this, "_invoke", function (t, n) { function i() { return new r(function (r, o) { e(t, n, r, o); }); } return o = o ? o.then(i, i) : i(); }, !0); } function d(r, e) { var n = e.method, o = r.i[n]; if (o === t) return e.delegate = null, "throw" === n && r.i["return"] && (e.method = "return", e.arg = t, d(r, e), "throw" === e.method) || "return" !== n && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + n + "' method")), f; var i = s(o, r.i, e.arg); if ("throw" === i.type) return e.method = "throw", e.arg = i.arg, e.delegate = null, f; var a = i.arg; return a ? a.done ? (e[r.r] = a.value, e.next = r.n, "return" !== e.method && (e.method = "next", e.arg = t), e.delegate = null, f) : a : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f); } function w(t) { this.tryEntries.push(t); } function m(r) { var e = r[4] || {}; e.type = "normal", e.arg = t, r[4] = e; } function Context(t) { this.tryEntries = [[-1]], t.forEach(w, this), this.reset(!0); } function x(r) { if (null != r) { var e = r[i]; if (e) return e.call(r); if ("function" == typeof r.next) return r; if (!isNaN(r.length)) { var o = -1, a = function e() { for (; ++o < r.length;) if (n.call(r, o)) return e.value = r[o], e.done = !1, e; return e.value = t, e.done = !0, e; }; return a.next = a; } } throw new TypeError(_typeof(r) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, c(v, "constructor", GeneratorFunctionPrototype), c(GeneratorFunctionPrototype, "constructor", GeneratorFunction), c(GeneratorFunctionPrototype, u, GeneratorFunction.displayName = "GeneratorFunction"), r.isGeneratorFunction = function (t) { var r = "function" == typeof t && t.constructor; return !!r && (r === GeneratorFunction || "GeneratorFunction" === (r.displayName || r.name)); }, r.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, c(t, u, "GeneratorFunction")), t.prototype = Object.create(v), t; }, r.awrap = function (t) { return { __await: t }; }, g(AsyncIterator.prototype), c(AsyncIterator.prototype, a, function () { return this; }), r.AsyncIterator = AsyncIterator, r.async = function (t, e, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(h(t, e, n, o), i); return r.isGeneratorFunction(e) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, g(v), c(v, u, "Generator"), c(v, i, function () { return this; }), c(v, "toString", function () { return "[object Generator]"; }), r.keys = function (t) { var r = Object(t), e = []; for (var n in r) e.unshift(n); return function t() { for (; e.length;) if ((n = e.pop()) in r) return t.value = n, t.done = !1, t; return t.done = !0, t; }; }, r.values = x, Context.prototype = { constructor: Context, reset: function reset(r) { if (this.prev = this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(m), !r) for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0][4]; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(r) { if (this.done) throw r; var e = this; function n(t) { a.type = "throw", a.arg = r, e.next = t; } for (var o = e.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i[4], u = this.prev, c = i[1], h = i[2]; if (-1 === i[0]) return n("end"), !1; if (!c && !h) throw Error("try statement without catch or finally"); if (null != i[0] && i[0] <= u) { if (u < c) return this.method = "next", this.arg = t, n(c), !0; if (u < h) return n(h), !1; } } }, abrupt: function abrupt(t, r) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var n = this.tryEntries[e]; if (n[0] > -1 && n[0] <= this.prev && this.prev < n[2]) { var o = n; break; } } o && ("break" === t || "continue" === t) && o[0] <= r && r <= o[2] && (o = null); var i = o ? o[4] : {}; return i.type = t, i.arg = r, o ? (this.method = "next", this.next = o[2], f) : this.complete(i); }, complete: function complete(t, r) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), f; }, finish: function finish(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[2] === t) return this.complete(e[4], e[3]), m(e), f; } }, "catch": function _catch(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[0] === t) { var n = e[4]; if ("throw" === n.type) { var o = n.arg; m(e); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(r, e, n) { return this.delegate = { i: x(r), r: e, n: n }, "next" === this.method && (this.arg = t), f; } }, r; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }








var _mergeObjetIfNotKey = function mergeObjetIfNotKey(target, source) {
  if (!target || _typeof(target) !== 'object') {
    return source;
  }
  if (!source || _typeof(source) !== 'object') {
    return target;
  }
  Object.keys(source).forEach(function (key) {
    if (!target[key]) {
      target[key] = source[key];
    } else if (_typeof(source[key]) === 'object' && source[key] !== null) {
      if (_typeof(target[key]) !== 'object' || target[key] === null) {
        target[key] = {};
      }
      _mergeObjetIfNotKey(target[key], source[key]);
    }
  });
  return target;
};
var _simulationFactory = function simulationFactory(facility, simulation, monneyToNumberFn) {
  var _simulation$caracteri;
  var baseSim = {
    sim_pub_key: '',
    name: '',
    facilite_uuid: (facility === null || facility === void 0 ? void 0 : facility.uuid) || null,
    facilite_id: (facility === null || facility === void 0 ? void 0 : facility.id) || null,
    id: '',
    caracteristiques_credit: {
      id: '',
      salaire_net: 0,
      quotite: 0,
      quotite_percent: 0,
      differe: 0,
      tva: 19.25,
      mois_debut_pmt: 0,
      frais_cheque_certifier: 0,
      frais_huissier: 0,
      frais_dossier_facilite: 0,
      assurance: 0,
      date_deblocage_prev: '',
      type_facilite: (facility === null || facility === void 0 ? void 0 : facility.type_facilite) || null,
      montant_credit: monneyToNumberFn(facility === null || facility === void 0 ? void 0 : facility.montant_credit) || 0,
      echeancier: (facility === null || facility === void 0 ? void 0 : facility.echeancier) || '',
      duree: monneyToNumberFn(facility === null || facility === void 0 ? void 0 : facility.duree) || 0,
      taux_annuel_ht: monneyToNumberFn(facility === null || facility === void 0 ? void 0 : facility.taux),
      // || 12
      date_echeance: (facility === null || facility === void 0 ? void 0 : facility.date_echeance) || '',
      encours: monneyToNumberFn(facility === null || facility === void 0 ? void 0 : facility.encours) || 0
    },
    donnees_calculees: {
      dsr: 0,
      taux_ttc: 0,
      // assurance: 0,
      total: 0,
      net_a_percevoir: 0,
      paiement_mensuel: 0,
      interet_ttc: 0,
      total_rembourse: 0,
      interet_ht: 0
      // encours: monneyToNumberFn(facility?.encours) || 0,
    },
    tableau: []
  };
  _mergeObjetIfNotKey(baseSim, simulation || {});
  _mergeObjetIfNotKey(baseSim.caracteristiques_credit, (simulation === null || simulation === void 0 ? void 0 : simulation.caracteristiques_credit) || {});
  _mergeObjetIfNotKey(baseSim.donnees_calculees, (simulation === null || simulation === void 0 ? void 0 : simulation.donnees_calculees) || {});
  var simDate = simulation === null || simulation === void 0 || (_simulation$caracteri = simulation.caracteristiques_credit) === null || _simulation$caracteri === void 0 ? void 0 : _simulation$caracteri.date_echeance;
  if (simDate instanceof Date) {
    baseSim.caracteristiques_credit.date_echeance = simDate.toISOString();
  }
  return baseSim;
};
var generateUuid = function generateUuid() {
  var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var uuid = '';
  for (var i = 0; i < 8; i++) {
    uuid += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return uuid;
};
var _facilityFactory = function facilityFactory(simulation) {
  var _tableau$;
  var generateUUID = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var monneyToNumberFn = arguments.length > 2 ? arguments[2] : undefined;
  var cc = (simulation === null || simulation === void 0 ? void 0 : simulation.caracteristiques_credit) || {};
  var dc = (simulation === null || simulation === void 0 ? void 0 : simulation.donnees_calculees) || {};
  var tableau = (simulation === null || simulation === void 0 ? void 0 : simulation.tableau) || [];
  var baseFacility = {
    id: '',
    uuid: generateUUID ? generateUuid() : '',
    sim_pub_key: '',
    filiale: '',
    type_facilite: cc.type_facilite || null,
    facilite_libelle: null,
    montant_demande: 0,
    montant_credit: monneyToNumberFn(cc.montant_credit) || 0,
    duree: monneyToNumberFn(cc.duree) || 0,
    taux: monneyToNumberFn(cc.taux_annuel_ht),
    // || 12
    echeancier: cc.echeancier || null,
    montant_echeance: monneyToNumberFn((_tableau$ = tableau[0]) === null || _tableau$ === void 0 ? void 0 : _tableau$.montant_echeance) || 0,
    encours: monneyToNumberFn(cc.encours) || 0,
    // encours: monneyToNumberFn(dc.encours) || 0,
    frais_dossier: monneyToNumberFn(cc.frais_dossier_facilite) || 0,
    // montant_assurance: monneyToNumberFn(dc.assurance) || 0,
    montant_assurance: monneyToNumberFn(cc.assurance) || 0,
    TEG: null,
    statut: null,
    date_echeance: cc.date_echeance || null,
    is_remboursement_anticipe: null,
    is_rachat: null,
    commentaire: null,
    checked: false,
    disabled: false,
    line: 'credit_new'
  };
  return baseFacility;
};

// Payment method (modality)
var paymentMethod = [{
  label: 'Mensuelle',
  frequence_mois: 1,
  frequence_versement: 1
}, {
  label: 'Bimestrielle',
  frequence_mois: 2,
  frequence_versement: 1
}, {
  label: 'Trimestrielle',
  frequence_mois: 3,
  frequence_versement: 1
}, {
  label: 'Semestrielle',
  frequence_mois: 6,
  frequence_versement: 1
}, {
  label: 'Annuelle',
  frequence_mois: 12,
  frequence_versement: 1
}, {
  label: 'Bimensuelle',
  frequence_mois: 1,
  frequence_versement: 2
}];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({
  name: "Simulator",
  components: {
    LoadSimulation: _LoadSimulation_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    SimCurrencyInput: _SimCurrencyInput_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    SimInput: _SimInput_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    SimDateInput: _SimDateInput_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    SimSelect: _SimSelect_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    TamorTable: _TamorTable_vue__WEBPACK_IMPORTED_MODULE_5__["default"]
  },
  props: {
    value: {
      type: Object,
      "default": function _default() {
        return {};
      }
    },
    simulations: {
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    disabled: {
      type: Boolean,
      "default": false
    },
    canCreateNewSimulation: {
      type: Boolean,
      "default": true
    },
    allTamor: {
      type: Boolean,
      "default": false
    },
    facility: {
      type: Object,
      "default": function _default() {
        return {};
      }
    },
    facilities: {
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    canSelectFacility: {
      type: Boolean,
      "default": false
    },
    viewOnly: {
      type: Boolean,
      "default": false
    },
    dossierCredit: {
      type: Object,
      "default": function _default() {}
    }
  },
  emits: ["input", "update:facility", "has-changed", "diff-simulation"],
  data: function data() {
    var _this$value;
    return {
      simulation: null,
      tmpSimulation: _simulationFactory(null, null, this.localeStringToFloat),
      tamorComputationResult: {
        is_success: false,
        msg_traitment: 'Veuillez remplir les champs requis pour lancer la simulation.'
      },
      paymentMethod: paymentMethod,
      hasChanged: false,
      creditTypes: [],
      facilityValue: this.facility,
      simPubKey: this.defaultId || ((_this$value = this.value) === null || _this$value === void 0 ? void 0 : _this$value.sim_pub_key) || '',
      createNewFacility: false,
      isProcessing: false,
      externalData: {
        caracteristiques_credit: {},
        donnees_calculees: {}
      },
      facilityTypeValue: ''
    };
  },
  computed: {
    error: function error() {
      var _this = this;
      if (this.viewOnly) {
        return ''; // Pas d'erreur en mode visualisation
      }
      if (!this.simPubKey && !this.canCreateNewSimulation) {
        return 'Veuillez sélectionner une simulation ou créer une nouvelle.';
      } else if (this.simPubKey && !this.simulations.some(function (sim) {
        return sim.sim_pub_key === _this.simPubKey;
      })) {
        return 'La simulation sélectionnée n\'existe pas.';
      }
      return '';
    },
    transformLoadedCreditsBanques_: function transformLoadedCreditsBanques_() {
      var _this2 = this,
        _this$dossierCredit;
      var allCredits = this.creditTypes.reduce(function (acc, item) {
        var listFinalCategories = [];
        _this2.creditTypes.forEach(function (el) {
          listFinalCategories.push(el.groupe_categorie);
        });
        if (listFinalCategories.includes(item.groupe_categorie)) {
          if (!acc[item.groupe_categorie]) {
            acc[item.groupe_categorie] = [];
          }
          acc[item.groupe_categorie].push(item);
        }
        return acc;
      }, {});

      // remove CCT et DECOUVERT
      if (['Proposition de crédit aux particuliers'].includes((_this$dossierCredit = this.dossierCredit) === null || _this$dossierCredit === void 0 ? void 0 : _this$dossierCredit.applied_templ_name)) {
        delete allCredits["CCT"];
        delete allCredits["DECOUVERT"];
      }
      // console.log('facilities *** ', this.facilities);
      // console.log('allCredits *** ',allCredits);

      // Vérifier si toutes les facilities ont le même facilite_libelle
      var haveSameFaciliteLibelle = function haveSameFaciliteLibelle(data) {
        if (!Array.isArray(data) || data.length === 0) return null;
        var firstValue = data[0].facilite_libelle;
        return data.some(function (item) {
          return item.facilite_libelle === firstValue;
        }) ? firstValue : null;
      };
      var commonLibelle = haveSameFaciliteLibelle(this.facilities);
      // console.log('commonLibelle *** ',commonLibelle);
      // console.log('allCredits[commonLibelle] *** ',allCredits[commonLibelle]);

      // Retourner selon le résultat
      return commonLibelle && allCredits[commonLibelle] ? _defineProperty({}, commonLibelle, allCredits[commonLibelle]) : allCredits;
    },
    docEntity: function docEntity() {
      var _doc$caf_recorded_fil, _doc$caf_recorded_fil2;
      var doc = this.dossierCredit;
      return (_doc$caf_recorded_fil = doc === null || doc === void 0 || (_doc$caf_recorded_fil2 = doc.caf_recorded_file) === null || _doc$caf_recorded_fil2 === void 0 ? void 0 : _doc$caf_recorded_fil2.filiale) !== null && _doc$caf_recorded_fil !== void 0 ? _doc$caf_recorded_fil : null;
    }
  }
}, "emits", ['update:value']), "methods", {
  facilityFactory: function facilityFactory(simulation, generateUUID) {
    return _facilityFactory(simulation, generateUUID, this.localeStringToFloat);
  },
  simulationFactory: function simulationFactory(facility, simulation) {
    return _simulationFactory(facility, simulation, this.localeStringToFloat);
  },
  emitUpdate: function emitUpdate(simulation, from) {
    var _simulation;
    // console.log('emitUpdate from && simulation',from, simulation);

    simulation = _objectSpread(_objectSpread({}, this.simulation), simulation);
    // console.log('emitUpdate simulation ',simulation);
    if (!this.canCreateNewSimulation && !((_simulation = simulation) !== null && _simulation !== void 0 && _simulation.sim_pub_key)) {
      // && !this.viewOnly
      simulation = null;
    }
    // console.log('emitUpdate after  simulation = null',simulation);
    this.$emit('input', simulation);
  },
  emitFacilityUpdate: function emitFacilityUpdate() {
    var facility = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    if (!this.canSelectFacility || this.viewOnly) return;
    this.$emit("update:facility", facility);
  },
  syncTmpToSimulation: function syncTmpToSimulation() {
    this.simulation = _objectSpread({}, this.tmpSimulation);
  },
  syncExternalDataToTmpSimulationOdl: function syncExternalDataToTmpSimulationOdl() {
    if (this.viewOnly) return; // Pas de synchronisation en mode visualisation
    // console.log('syncExternalDataToTmpSimulation externalData before',this.externalData.donnees_calculees);
    // console.log('syncExternalDataToTmpSimulation tmpSimulation before',this.tmpSimulation.donnees_calculees);

    this.tmpSimulation.caracteristiques_credit = _objectSpread(_objectSpread({}, this.tmpSimulation.caracteristiques_credit), this.externalData.caracteristiques_credit);
    this.tmpSimulation.donnees_calculees = _objectSpread(_objectSpread({}, this.tmpSimulation.donnees_calculees), this.externalData.donnees_calculees);
    // console.log('syncExternalDataToTmpSimulation tmpSimulation after', this.tmpSimulation.donnees_calculees);
    // console.log('syncExternalDataToTmpSimulation externalData after', this.externalData.donnees_calculees);
  },
  syncExternalDataToTmpSimulation: function syncExternalDataToTmpSimulation() {
    if (this.viewOnly) return;
    var currentEncours = this.tmpSimulation.caracteristiques_credit.encours; // Sauvegarde de la valeur actuelle de encours

    // Fusionner les propriétés, mais préserver encours si modifié manuellement
    this.tmpSimulation.caracteristiques_credit = _objectSpread(_objectSpread(_objectSpread({}, this.tmpSimulation.caracteristiques_credit), this.externalData.caracteristiques_credit), {}, {
      // Ne pas écraser encours si une valeur manuelle existe
      encours: currentEncours !== undefined && currentEncours !== null ? currentEncours : this.externalData.caracteristiques_credit.encours || 0
    });
    this.tmpSimulation.donnees_calculees = _objectSpread(_objectSpread({}, this.tmpSimulation.donnees_calculees), this.externalData.donnees_calculees);

    // console.log('syncExternalDataToTmpSimulation - encours:', this.tmpSimulation.caracteristiques_credit.encours);
  },
  viewOnlyComputation: function viewOnlyComputation() {},
  handleEncoursInput: function handleEncoursInput(value) {
    // console.log('Encours input value:', value);
    // console.log('tmpSimulation.caracteristiques_credit.encours before:', this.tmpSimulation.caracteristiques_credit.encours);
    this.handleSimulationChange(true, 'caracteristiques_credit.encours');
    // console.log('tmpSimulation.caracteristiques_credit.encours after:', this.tmpSimulation.caracteristiques_credit.encours);
  },
  handleSimulationChange: function handleSimulationChange() {
    var emitUpdate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
    var from = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'self';
    // if (!this.simChanged(this.tmpSimulation, this.simulation)) {
    //   console.warn('No changes detected in simulation, skipping computation.',this.tmpSimulation, this.simulation);
    //   return;
    // }
    // console.log('handleSimulationChange called from:', from);
    this.syncExternalDataToTmpSimulation();
    if (this.isProcessing) return; // Prevent recursive calls
    this.isProcessing = true;
    try {
      if (this.viewOnly) {
        var _this$tmpSimulation;
        if (!((_this$tmpSimulation = this.tmpSimulation) !== null && _this$tmpSimulation !== void 0 && _this$tmpSimulation.totals)) {
          // console.log('viewOnly, !this.tmpSimulation?.totals',this.tmpSimulation.donnees_calculees);

          var _tbAmortissement = new Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../services/afg/tb_amortissement'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(this.tmpSimulation.caracteristiques_credit);
          var _result = _tbAmortissement.calculer_et_arrondir();
          // console.log('tbAmortissement --> result', result);

          if (!_result.is_success) {
            this.tamorComputationResult = {
              is_success: false,
              msg_traitment: _result.msg_traitment || 'Erreur lors du calcul du tableau d\'amortissement.'
            };
            return;
          }
          this.tmpSimulation.tableau = _result.tableau;
          this.tmpSimulation.donnees_calculees = _objectSpread(_objectSpread({}, this.tmpSimulation.donnees_calculees), _result.donnees_calculees);
          this.tmpSimulation.caracteristiques_credit = _objectSpread(_objectSpread({}, this.tmpSimulation.caracteristiques_credit), _result.caracteristiques_credit);
          this.tamorComputationResult = {
            is_success: true,
            msg_traitment: 'Simulation en mode visualisation.',
            totals: _tbAmortissement.getTableauTotauxArrondie()
          };
        } else {
          this.tamorComputationResult = {
            is_success: true,
            msg_traitment: 'Simulation en mode visualisation.',
            totals: this.tmpSimulation.totals || {}
          };
        }
        this.syncTmpToSimulation();
        this.$emit('diff-simulation', this.tmpSimulation);
        return;
      }
      if (!this.viewOnly) {
        var _this$tmpSimulation2;
        if (!this.canCreateNewSimulation && !((_this$tmpSimulation2 = this.tmpSimulation) !== null && _this$tmpSimulation2 !== void 0 && _this$tmpSimulation2.sim_pub_key)) {
          // console.log('!this.canCreateNewSimulation && !this.tmpSimulation?.sim_pub_key');

          this.emitUpdate(null);
          return;
        }
      }

      // Clone tmpSimulation and ensure date_echeance is a string
      var clonedSimulation = JSON.parse(JSON.stringify(this.tmpSimulation, function (key, value) {
        if (value instanceof Date) {
          return value.toISOString();
        }
        return value;
      }));
      // console.log('handleSimulationChange clonedSimulation ', clonedSimulation);

      var tbAmortissement = new Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../services/afg/tb_amortissement'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(clonedSimulation.caracteristiques_credit, clonedSimulation.donnees_calculees);
      var result = tbAmortissement.calculer_et_arrondir();
      // console.log('class TbAmortissement result', result);

      if (!result.is_success) {
        this.tamorComputationResult = {
          is_success: false,
          msg_traitment: result.msg_traitment || 'Erreur lors du calcul du tableau d\'amortissement.'
        };
      } else {
        this.tamorComputationResult = {
          is_success: true,
          msg_traitment: 'Simulation réussie.',
          totals: tbAmortissement.getTableauTotauxArrondie()
        };
        this.tmpSimulation.tableau = result.tableau;
        this.tmpSimulation.donnees_calculees = _objectSpread(_objectSpread({}, this.tmpSimulation.donnees_calculees), result.donnees_calculees);
        this.tmpSimulation.caracteristiques_credit = _objectSpread(_objectSpread({}, this.tmpSimulation.caracteristiques_credit), result.caracteristiques_credit);

        // Update simPubKey without triggering watcher
        // console.log('Before --> syncTmpToSimulation ',this.simulation, this.tmpSimulation);

        this.syncTmpToSimulation();
        // console.log('After --> syncTmpToSimulation ',this.simulation, this.tmpSimulation);
        emitUpdate && !this.viewOnly && this.emitUpdate(this.simulation, 'handleSimulationChange');
      }
    } finally {
      this.isProcessing = false;
    }
  },
  simChanged: function simChanged(v1, v2) {
    var _v, _v2, _v3, _v4, _v5, _v6;
    v1 = {
      caracteristiques_credit: _objectSpread({}, (_v = v1) === null || _v === void 0 ? void 0 : _v.caracteristiques_credit),
      donnees_calculees: _objectSpread({}, (_v2 = v1) === null || _v2 === void 0 ? void 0 : _v2.donnees_calculees),
      tableau: _toConsumableArray(((_v3 = v1) === null || _v3 === void 0 ? void 0 : _v3.tableau) || [])
    };
    v2 = {
      caracteristiques_credit: _objectSpread({}, (_v4 = v2) === null || _v4 === void 0 ? void 0 : _v4.caracteristiques_credit),
      donnees_calculees: _objectSpread({}, (_v5 = v2) === null || _v5 === void 0 ? void 0 : _v5.donnees_calculees),
      tableau: _toConsumableArray(((_v6 = v2) === null || _v6 === void 0 ? void 0 : _v6.tableau) || [])
    };
    return JSON.stringify(v1) !== JSON.stringify(v2);
  },
  getCreditBanques: function getCreditBanques() {
    var _this3 = this;
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var res;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _services_credit_service__WEBPACK_IMPORTED_MODULE_7__["default"].loadCreditBanques({
              "categorie_client": "Retail",
              "filiale": _this3.docEntity
            });
          case 3:
            res = _context.sent;
            _this3.creditTypes = res.data;
            _context.next = 11;
            break;
          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            console.error('Error loading credit banques:', _context.t0);
            _this3.creditTypes = [];
          case 11:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 7]]);
    }))();
  },
  getfacilityId: function getfacilityId(facility) {
    var useType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    return (facility === null || facility === void 0 ? void 0 : facility.uuid) || (facility === null || facility === void 0 ? void 0 : facility.id) || (useType ? facility === null || facility === void 0 ? void 0 : facility.type_facilite : '') || '';
  },
  handleFacilityChange: function handleFacilityChange(newVal) {
    var _this$authenticatedUs;
    if (this.viewOnly) return; // Pas de changement en mode visualisation
    // console.log('handleFacilityChange called with newVal:', newVal);

    var creditData = this.externalData.caracteristiques_credit;
    if (!newVal) {
      Object.assign(this.externalData, {
        facilite_id: null,
        facilite_uuid: null
      });
      creditData.type_facilite = null;
      this.handleSimulationChange(true, 'handleFacilityChange: reset facility');
      return;
    }
    var facility = this.facilities.find(function (f) {
      return f.uuid === newVal || f.id === newVal;
    });
    // console.log('Selected facility:', facility);
    var filiale = ((_this$authenticatedUs = this.authenticatedUser) === null || _this$authenticatedUs === void 0 ? void 0 : _this$authenticatedUs.filiale) || '';
    // console.log('Filiale:', filiale);

    if (facility) {
      this.externalData.facilite_id = facility.id;
      this.externalData.facilite_uuid = facility.uuid;
      creditData.type_facilite = facility.type_facilite;
      this.facilityValue = _objectSpread(_objectSpread(_objectSpread({}, this.facilityFactory(this.tmpSimulation, true)), JSON.parse(JSON.stringify(facility))), {}, {
        filiale: filiale
      });
      this.createNewFacility = false;
    } else {
      var _newVal$split = newVal.split('+++'),
        _newVal$split2 = _slicedToArray(_newVal$split, 2),
        type_facilite = _newVal$split2[0],
        facilite_libelle = _newVal$split2[1];
      // console.log('findGroupForType --> ',this.findGroupForType(type_facilite,this.transformLoadedCreditsBanques_))
      // console.log('type_facilite',type_facilite);
      // console.log('facilite_libelle',facilite_libelle);
      // console.log('findFlexcubeByType --> ',this.findFlexcubeByType(type_facilite,this.transformLoadedCreditsBanques_))
      var infos_fcub = this.findFlexcubeByType(type_facilite, this.transformLoadedCreditsBanques_);
      this.externalData.facilite_id = null;
      this.externalData.facilite_uuid = null;
      creditData.type_facilite = type_facilite || null;
      creditData.facilite_libelle = facilite_libelle || null;
      creditData.infos_fcub = infos_fcub || null;
      this.facilityValue = _objectSpread(_objectSpread({}, this.facilityFactory(this.tmpSimulation, true)), {}, {
        type_facilite: type_facilite,
        facilite_libelle: facilite_libelle,
        infos_fcub: infos_fcub,
        filiale: filiale,
        create: true
      });
      this.createNewFacility = true;
    }
    this.handleSimulationChange(true, 'handleFacilityChange: facility changed');
    this.emitFacilityUpdate(this.facilityValue);
  },
  findGroupForType: function findGroupForType(type, creditsData) {
    var key = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    var index = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
    if (!type) return '';
    for (var _i = 0, _Object$entries = Object.entries(creditsData); _i < _Object$entries.length; _i++) {
      var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
        group = _Object$entries$_i[0],
        items = _Object$entries$_i[1];
      var found = items.find(function (credit) {
        return credit.libelle === type;
      });
      //  if (key === 'facilites_sollicitees') {
      //     let item_sollicite = this[key][index];
      //     let matchingFacilite = this.facilites_selectionnees.find(
      //         facilite => facilite.facilite_uuid === item_sollicite.uuid
      //     );
      //     if (matchingFacilite) {
      //         matchingFacilite.facilite_libelle = item_sollicite?.type_facilite || '';
      //     } else {
      //         console.warn(
      //         `No matching facilite found in facilites_selectionnees for uuid: ${item_sollicite?.uuid}`
      //         );
      //     }
      // }

      if (found) return group;
    }
    return '';
  },
  getFcubTypeCategorieByLibelle: function getFcubTypeCategorieByLibelle(label, credBanqueList) {
    for (var categorie in credBanqueList) {
      var produits = credBanqueList[categorie];
      var _iterator = _createForOfIteratorHelper(produits),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var produit = _step.value;
          if (produit.libelle === label) {
            return produit === null || produit === void 0 ? void 0 : produit.infos_flexcub;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
    return null;
  },
  findFlexcubeByType: function findFlexcubeByType(selectedType, credBanqueList) {
    return this.getFcubTypeCategorieByLibelle(selectedType, credBanqueList);
  }
}), "created", function created() {
  var _this4 = this;
  return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return _this4.getCreditBanques();
        case 2:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }))();
}), "mounted", function mounted() {
  var _this5 = this;
  this.tmpSimulation = this.simulationFactory(this.facility, this.value);
  if (this.viewOnly) {
    this.handleSimulationChange(false, 'mounted viewOnly');
  }
  this.facilityTypeValue = this.getfacilityId(this.facilityValue, true);
  EventBus.$on("simulator-set-data", function (data) {
    var _data$simulation, _data$facility;
    var simPubKey = (data === null || data === void 0 || (_data$simulation = data.simulation) === null || _data$simulation === void 0 ? void 0 : _data$simulation.sim_pub_key) || (data === null || data === void 0 || (_data$facility = data.facility) === null || _data$facility === void 0 ? void 0 : _data$facility.sim_pub_key) || _this5.tmpSimulation.sim_pub_key || '';
    _this5.simPubKey = simPubKey;
    _this5.tmpSimulation = (data === null || data === void 0 ? void 0 : data.simulation) || _this5.simulationFactory(_this5.facility, _this5.value);
    _this5.handleSimulationChange(true, 'simulator-set-data');
  });
  // console.log('mounted event dossier-updated-dcpp-pcp4-0');

  EventBus.$on("dossier-updated-dcpp-pcp4-0", function (data) {
    if (data !== null && data !== void 0 && data.data_tb4 && !_this5.viewOnly) {
      // console.log('dossier-updated-dcpp-pcp4-0',data);

      var tb4Data = data.data_tb4;
      _this5.externalData.caracteristiques_credit.quotite = tb4Data.quotite_cessible || 0;
      _this5.externalData.caracteristiques_credit.quotite_percent = tb4Data.taux_qc1 || 0;
      // 
      var existingFacilities = tb4Data.facilites_existante || [];

      // Calculer encours à partir des facilités existantes
      var calculatedEncours = Array.isArray(existingFacilities) && existingFacilities.length > 0 ? existingFacilities.reduce(function (acc, facility) {
        var valeur = _this5.localeStringToFloat(facility.encours);
        return acc + (valeur > 0 ? _this5.localeStringToFloat(facility.montant_echeance) : 0);
      }, 0) : 0;

      // Mettre à jour externalData seulement si encours n'a pas été modifié manuellement
      if (_this5.tmpSimulation.caracteristiques_credit.encours === _this5.simulationFactory(_this5.facility, _this5.value).caracteristiques_credit.encours) {
        _this5.externalData.caracteristiques_credit.encours = calculatedEncours;
      }

      // console.log('dossier-updated-dcpp-pcp4-0 - calculatedEncours:', calculatedEncours);
      // console.log('dossier-updated-dcpp-pcp4-0 - externalData.encours:', this.externalData.caracteristiques_credit.encours);
      // console.log('dossier-updated-dcpp-pcp4-0 - tmpSimulation.encours:', this.tmpSimulation.caracteristiques_credit.encours);

      _this5.handleSimulationChange(true, 'dossier-updated-dcpp-pcp4-0');
    }
  });
  if (this.allTamor) {
    // console.log('check allTamor');
    EventBus.$emit("collect-quotite-encours");
  }
}), "watch", {
  value: {
    handler: function handler(newVal) {
      var _this$tmpSimulation3, _this$tmpSimulation4, _this$tmpSimulation5;
      // console.log('value watcher triggered:', newVal);
      if (!newVal || Object.keys(newVal).length === 0) {
        this.tmpSimulation = this.simulationFactory(this.facility);
        // console.log('(!newVal || Object.keys(newVal).length === 0) tmpSimulation',  this.tmpSimulation);
        this.syncTmpToSimulation();
        return;
      }
      newVal.caracteristiques_credit.quotite = newVal.caracteristiques_credit.quotite || ((_this$tmpSimulation3 = this.tmpSimulation) === null || _this$tmpSimulation3 === void 0 ? void 0 : _this$tmpSimulation3.caracteristiques_credit.quotite) || 0;
      newVal.caracteristiques_credit.quotite_percent = newVal.caracteristiques_credit.quotite_percent || ((_this$tmpSimulation4 = this.tmpSimulation) === null || _this$tmpSimulation4 === void 0 ? void 0 : _this$tmpSimulation4.caracteristiques_credit.quotite_percent) || 0;
      newVal.caracteristiques_credit.encours = newVal.caracteristiques_credit.encours || ((_this$tmpSimulation5 = this.tmpSimulation) === null || _this$tmpSimulation5 === void 0 ? void 0 : _this$tmpSimulation5.caracteristiques_credit.encours) || 0;
      // console.log('watch value ', newVal);
      // console.log('watch newVal.donnees_calculees.encours ', newVal.donnees_calculees.encours);

      this.tmpSimulation = JSON.parse(JSON.stringify(newVal));
      this.handleSimulationChange(false, 'value watcher');
    },
    immediate: true,
    deep: true
  },
  tmpSimulation: {
    handler: function handler() {
      var _this$tamorComputatio,
        _this$tmpSimulation6,
        _this6 = this;
      this.hasChanged = (_this$tamorComputatio = this.tamorComputationResult) === null || _this$tamorComputatio === void 0 ? void 0 : _this$tamorComputatio.is_success;
      // console.log('watch tmpSimulation **************');
      if ((_this$tmpSimulation6 = this.tmpSimulation) !== null && _this$tmpSimulation6 !== void 0 && _this$tmpSimulation6.sim_pub_key && !this.viewOnly) {
        var existingSimulation = this.simulations.find(function (sim) {
          return sim.sim_pub_key === _this6.tmpSimulation.sim_pub_key;
        });
        if (existingSimulation) {
          this.hasChanged = this.simChanged(existingSimulation, this.tmpSimulation);
        }
      }
      this.$emit('has-changed', this.hasChanged);
    },
    deep: true
  },
  facility: {
    handler: function handler(newVal) {
      this.facilityValue = _objectSpread(_objectSpread({}, this.facilityFactory(this.tmpSimulation)), newVal || {});
      // if (newVal?.sim_pub_key) {
      //   const simulation = this.simulations.find(sim => sim.sim_pub_key === newVal.sim_pub_key);
      //   if (simulation) {
      //     this.tmpSimulation = this.simulationFactory(newVal, simulation);
      //   } else {
      //     this.tmpSimulation = this.simulationFactory(newVal);
      //   }

      //   this.handleSimulationChange(false, 'facaility watcher');
      // }
    },
    immediate: true,
    deep: true
  },
  simPubKey: {
    handler: function handler(newVal, oldVal) {
      if (this.viewOnly || newVal === oldVal) return; // Prevent updates in viewOnly or redundant updates

      if (newVal) {
        var simulation = this.simulations.find(function (sim) {
          return sim.sim_pub_key === newVal;
        });
        if (simulation) {
          this.tmpSimulation = this.simulationFactory(this.facility, simulation);
          this.handleSimulationChange(true, 'simPubKey watcher simulation found');
        } else {
          this.tmpSimulation = this.simulationFactory(this.facility);
          this.handleSimulationChange(true, 'simPubKey watcher simulation not found');
        }
      } else {
        this.tmpSimulation = this.simulationFactory(this.facility);
        this.handleSimulationChange(true, 'simPubKey watcher no simPubKey');
      }
    },
    immediate: true
  },
  facilityTypeValue: {
    handler: function handler(newVal, oldVal) {
      if (newVal === oldVal) return; // Prevent redundant updates
      this.handleFacilityChange(newVal);
    }
  }
  // allTamor(newVal) { // Watch utilisé pour vérifier l'impact de v-if allTamor
  //   console.log('allTamor changed:', newVal);
  //   console.log('tmpSimulation.caracteristiques_credit.encours:', this.tmpSimulation.caracteristiques_credit.encours);
  // },
}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/Simulateur/SimulatorHistory.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/Simulateur/SimulatorHistory.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'SimulatorHistory',
  props: {
    history: {
      type: Object,
      required: true
    },
    canDelete: {
      type: Boolean,
      "default": true
    }
  },
  methods: {
    loadHistory: function loadHistory() {
      this.$emit('load-history');
    },
    selectSimulation: function selectSimulation(simPubKey) {
      this.$emit('select-simulation', simPubKey);
    },
    deleteSimulation: function deleteSimulation(simPubKey) {
      this.$emit('delete-simulation', simPubKey);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/Simulateur/TamorTable.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/Simulateur/TamorTable.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'TamorTable',
  props: {
    table: {
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    totals: {
      type: Object,
      "default": function _default() {
        return {
          principal_paye: 0,
          interet_paye_ttc: 0,
          interet_paye_ht: 0,
          tva_sur_interet: 0,
          montant_echeance: 0
        };
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/cresco/DCPP-CS2.vue?vue&type=template&id=33c7319c&scoped=true":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/cresco/DCPP-CS2.vue?vue&type=template&id=33c7319c&scoped=true ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm$formDataToBeWatch, _vm$totalsFacilitesCo, _vm$totalsFacilitesCo2, _vm$totalsFacilitesCo3, _vm$formDataToBeWatch2, _vm$data_tamor;
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
  }, [_vm._v("\n                                " + _vm._s(_vm.tb_display_name) + " : Concours/Facilités\n                            ")]), _vm._v(" "), _c("div", {
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
  }, [_c("span", [_vm._v(_vm._s(_vm.formDataToBeWatched.notes.length))])])])]) : _vm._e(), _vm._v(" "), _c("airplay-icon", {
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
        return _vm.$modal.show("demande_de_pret");
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
  }, [_vm.loadTypeCredit ? _c("div", {
    staticClass: "card-body"
  }, [_vm._m(0)]) : _c("div", [_vm.seen0_1 ? _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "relook-header",
    on: {
      click: function click($event) {
        _vm.seen0_1 = !_vm.seen0_1;
      }
    }
  }, [_c("h6", {
    "class": " subdiv" + this.tb_name,
    attrs: {
      id: "frais-de-crédit"
    }
  }, [_vm._v("\n                                        Demande de prêt\n                                        "), _c("chevron-up-icon", {
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
    staticClass: "col-12 p-0 position-relative"
  }, [_c("div", {
    staticClass: "card-body pt-2 pb-0 table-responsive"
  }, [_c("table", {
    staticClass: "table table-bordered mb-0"
  }, [_vm._m(1), _vm._v(" "), _c("tbody", [_c("tr", [_c("td", [_c("center", [_c("div", {
    staticClass: "col-8"
  }, [_c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.type_demande,
      expression: "formDataToBeWatched.type_demande"
    }],
    staticClass: "form-select single-select",
    attrs: {
      required: "",
      id: "type_demande",
      disabled: ""
    },
    on: {
      change: [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.formDataToBeWatched, "type_demande", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }, function ($event) {
        return _vm.onRequestTypeChange();
      }]
    }
  }, [_c("option", {
    attrs: {
      value: ""
    }
  }, [_vm._v("--Choisir type de demande--\n                                                                            ")]), _vm._v(" "), _vm._l(_vm.type_demande_list, function (type_demande_) {
    return _c("option", {
      key: type_demande_.value,
      attrs: {
        disabled: type_demande_.disabled
      },
      domProps: {
        value: type_demande_.value
      }
    }, [_vm._v(_vm._s(type_demande_.name))]);
  })], 2)])])], 1), _vm._v(" "), _c("td", [_c("center", [_c("div", {
    staticClass: "col-8"
  }, [_c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.type_de_clientele,
      expression: "formDataToBeWatched.type_de_clientele"
    }],
    staticClass: "form-select single-select",
    attrs: {
      required: "",
      disabled: "",
      id: "type_de_clientele"
    },
    on: {
      change: [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.formDataToBeWatched, "type_de_clientele", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }, function ($event) {
        return _vm.selectTypeClientele($event.target.value);
      }]
    }
  }, [_c("option", {
    attrs: {
      disabled: "",
      selected: ""
    }
  }, [_vm._v("\n                                                                                --- Sélectionner le type de clientèle --\n                                                                            ")]), _vm._v(" "), _c("optgroup", {
    attrs: {
      label: "Clientèle Ordinaire"
    }
  }, [_c("option", {
    attrs: {
      value: "Particuliers"
    }
  }, [_vm._v(" Particuliers\n                                                                                ")])])])])])], 1)])])]), _vm._v(" "), _c("br")])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4 mt-2"
  }, [_vm._m(2), _vm._v(" "), _c("div", {
    staticClass: "d-flex"
  }, [_c("div", {
    staticClass: "m-2 d-flex mr-4"
  }, [_c("input", {
    attrs: {
      type: "checkbox",
      value: "Oui",
      id: "pret_cher_confrere_oui"
    },
    domProps: {
      checked: _vm.formDataToBeWatched.pret_cher_confrere == "Oui"
    },
    on: {
      input: function input($event) {
        return _vm.checkboxValCashCall3($event);
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "text-nowrap",
    attrs: {
      "for": "pret_cher_confrere_oui"
    }
  }, [_vm._v("Oui")])]), _vm._v(" "), _c("div", {
    staticClass: "m-2 d-flex mr-4"
  }, [_c("input", {
    attrs: {
      type: "checkbox",
      value: "Non",
      id: "pret_cher_confrere_non"
    },
    domProps: {
      checked: _vm.formDataToBeWatched.pret_cher_confrere == "Non"
    },
    on: {
      input: function input($event) {
        return _vm.checkboxValCashCall3($event);
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "text-nowrap",
    attrs: {
      "for": "pret_cher_confrere_non"
    }
  }, [_vm._v("Non")])])])])])])]) : _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "relook-header",
    on: {
      click: function click($event) {
        _vm.seen0_1 = !_vm.seen0_1;
      }
    }
  }, [_c("h6", {
    attrs: {
      id: "frais-de-crédit"
    }
  }, [_vm._v("\n                                        Demande de prêt\n                                        "), _c("chevron-down-icon", {
    staticClass: "custom-class",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    },
    attrs: {
      size: "21"
    }
  })], 1)])]), _vm._v(" "), _vm.formDataToBeWatched.pret_cher_confrere == "Oui" ? _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "relook-header",
    on: {
      click: function click($event) {
        _vm.formDataToBeWatched.pret_cher_confrere = !_vm.formDataToBeWatched.pret_cher_confrere;
      }
    }
  }, [_c("h6", {
    "class": " subdiv" + this.tb_name,
    attrs: {
      id: "frais-de-crédit-chez-confrere"
    }
  }, [_vm._v("\n                                        Concours/Facilités existantes(Chez les confrères)\n                                        "), _c("chevron-up-icon", {
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
    staticClass: "table table-bordered"
  }, [_vm._m(3), _vm._v(" "), _c("tbody", _vm._l(_vm.facilites_existante_confrere, function (el, ind) {
    return _c("tr", {
      key: ind
    }, [_c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: el.institution_confrere,
        expression: "el.institution_confrere"
      }],
      staticClass: "form-control",
      attrs: {
        type: "text",
        id: "institution_confrere"
      },
      domProps: {
        value: el.institution_confrere
      },
      on: {
        input: [function ($event) {
          if ($event.target.composing) return;
          _vm.$set(el, "institution_confrere", $event.target.value);
        }, function ($event) {
          return _vm.formDataVarsGaranties($event, ind, "facilites_existante_confrere");
        }]
      }
    })]), _vm._v(" "), _c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: el.type_facilite,
        expression: "el.type_facilite"
      }],
      staticClass: "form-control",
      attrs: {
        type: "text",
        id: "type_facilite"
      },
      domProps: {
        value: el.type_facilite
      },
      on: {
        input: [function ($event) {
          if ($event.target.composing) return;
          _vm.$set(el, "type_facilite", $event.target.value);
        }, function ($event) {
          return _vm.formDataVarsGaranties($event, ind, "facilites_existante_confrere");
        }]
      }
    })]), _vm._v(" "), _c("td", [_c("currency-input2", {
      staticStyle: {
        "min-width": "150px"
      },
      attrs: {
        value: el.montant_credit,
        id: "montant_credit"
      },
      on: {
        input: function input($event) {
          return _vm.formDataVarsGaranties($event, ind, "facilites_existante_confrere");
        }
      }
    })], 1), _vm._v(" "), _c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: el.duree,
        expression: "el.duree"
      }],
      staticClass: "form-control flex-1",
      staticStyle: {
        "min-width": "45px",
        "margin-right": "2px"
      },
      attrs: {
        type: "number",
        min: "1",
        id: "duree"
      },
      domProps: {
        value: el.duree
      },
      on: {
        input: [function ($event) {
          if ($event.target.composing) return;
          _vm.$set(el, "duree", $event.target.value);
        }, function ($event) {
          return _vm.formDataVarsGaranties($event, ind, "facilites_existante_confrere");
        }]
      }
    })]), _vm._v(" "), _c("td", [_c("input-group", {
      staticStyle: {
        "min-width": "110px"
      },
      scopedSlots: _vm._u([{
        key: "input",
        fn: function fn() {
          return [_c("currency-input", {
            attrs: {
              value: el.taux,
              max: 100,
              "float": "",
              percentage: "",
              id: "taux"
            },
            on: {
              input: function input($event) {
                return _vm.formDataVarsGaranties($event, ind, "facilites_existante_confrere");
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
    })], 1), _vm._v(" "), _c("td", [_c("select", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: el.echeancier,
        expression: "el.echeancier"
      }],
      staticClass: "form-control",
      attrs: {
        id: "echeancier"
      },
      on: {
        change: [function ($event) {
          var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
            return o.selected;
          }).map(function (o) {
            var val = "_value" in o ? o._value : o.value;
            return val;
          });
          _vm.$set(el, "echeancier", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
        }, _vm.handleInputGaranties]
      }
    }, [_c("option", {
      attrs: {
        disabled: "",
        selected: "",
        value: ""
      }
    }, [_vm._v("\n                                                                --- Choisissez l'écheancier ---\n                                                            ")]), _vm._v(" "), _c("option", {
      attrs: {
        value: ""
      }
    }), _vm._v(" "), _vm._l(_vm.periodicites, function (el, index) {
      return [_c("option", {
        domProps: {
          value: el.libelle
        }
      }, [_vm._v("\n                                                                    " + _vm._s(el.libelle) + "\n                                                                ")])];
    })], 2)]), _vm._v(" "), _c("td", [_c("currency-input2", {
      staticStyle: {
        "min-width": "150px"
      },
      attrs: {
        value: el.montant_echeance,
        id: "montant_echeance"
      },
      on: {
        input: function input($event) {
          return _vm.formDataVarsGaranties($event, ind, "facilites_existante_confrere");
        }
      }
    })], 1), _vm._v(" "), _c("td", [_c("currency-input2", {
      staticStyle: {
        "min-width": "150px"
      },
      attrs: {
        value: el.encours,
        id: "encours"
      },
      on: {
        input: function input($event) {
          return _vm.formDataVarsGaranties($event, ind, "facilites_existante_confrere");
        }
      }
    })], 1), _vm._v(" "), _c("td", [_c("date-input", {
      staticStyle: {
        width: "210px"
      },
      attrs: {
        value: el.date_echeance,
        id: "date_echeance"
      },
      on: {
        input: function input($event) {
          return _vm.formDataVarsGaranties($event, ind, "facilites_existante_confrere");
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
      attrs: {
        rows: "1",
        id: "commentaire"
      },
      domProps: {
        value: el.commentaire
      },
      on: {
        input: [function ($event) {
          if ($event.target.composing) return;
          _vm.$set(el, "commentaire", $event.target.value);
        }, function ($event) {
          return _vm.formDataVarsGaranties($event, ind, "facilites_existante_confrere");
        }]
      }
    })]), _vm._v(" "), _c("td", {
      staticClass: "vertical-middle text-right",
      staticStyle: {
        width: "15px"
      }
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
          return _vm.addMoreFaciliteExistanteChezConfrere();
        }
      }
    }, [_c("plus-icon", {
      staticClass: "custom-class",
      attrs: {
        size: "21"
      }
    })], 1) : _vm._e(), _vm._v(" "), ind > 0 ? _c("button", {
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
          return _vm.removeFaciliteExistChezConfrere(ind);
        }
      }
    }, [_c("trash-icon", {
      staticClass: "custom-class",
      attrs: {
        size: "21"
      }
    })], 1) : _vm._e()])]);
  }), 0), _vm._v(" "), _c("tfoot", [_c("tr", [_c("td", {
    staticClass: "fw-bold",
    attrs: {
      colspan: "2"
    }
  }, [_vm._v("Totaux")]), _vm._v(" "), _c("td", {
    staticClass: "fw-bold"
  }, [_vm._v(_vm._s(_vm._f("formatNumber")((_vm$totalsFacilitesCo = _vm.totalsFacilitesConfrere) === null || _vm$totalsFacilitesCo === void 0 ? void 0 : _vm$totalsFacilitesCo.montant_credit)))]), _vm._v(" "), _c("td"), _vm._v(" "), _c("td"), _vm._v(" "), _c("td"), _vm._v(" "), _c("td", {
    staticClass: "fw-bold"
  }, [_vm._v(_vm._s(_vm._f("formatNumber")((_vm$totalsFacilitesCo2 = _vm.totalsFacilitesConfrere) === null || _vm$totalsFacilitesCo2 === void 0 ? void 0 : _vm$totalsFacilitesCo2.montant_echeance)))]), _vm._v(" "), _c("td", {
    staticClass: "fw-bold"
  }, [_vm._v(_vm._s(_vm._f("formatNumber")((_vm$totalsFacilitesCo3 = _vm.totalsFacilitesConfrere) === null || _vm$totalsFacilitesCo3 === void 0 ? void 0 : _vm$totalsFacilitesCo3.encours)))]), _vm._v(" "), _c("td"), _vm._v(" "), _c("td", {
    attrs: {
      colspan: "4"
    }
  })])])])])])]) : _vm._e(), _vm._v(" "), _vm.seen0_2 ? _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "relook-header",
    on: {
      click: function click($event) {
        _vm.seen0_2 = !_vm.seen0_2;
      }
    }
  }, [_c("h6", {
    "class": " subdiv" + this.tb_name,
    attrs: {
      id: "frais-de-crédit"
    }
  }, [_vm._v("\n                                    Concours/Facilités existantes(Chez AFG BANK)\n                                    "), _c("chevron-up-icon", {
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
    staticClass: "table table-bordered"
  }, [_vm._m(4), _vm._v(" "), _c("tbody", _vm._l(_vm.facilites_existante, function (el, ind) {
    return _c("tr", {
      key: ind
    }, [_c("td", [el.is_locale != true && ![null, undefined, ""].includes(el.filiale) ? _c("select", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: el.filiale,
        expression: "el.filiale"
      }],
      staticClass: "form-select",
      attrs: {
        disabled: true,
        readonly: true
      },
      on: {
        change: [function ($event) {
          var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
            return o.selected;
          }).map(function (o) {
            var val = "_value" in o ? o._value : o.value;
            return val;
          });
          _vm.$set(el, "filiale", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
        }, _vm.handleInput3]
      }
    }, [_c("option", {
      attrs: {
        disabled: "",
        selected: "",
        value: ""
      }
    }), _vm._v(" "), _vm._l(_vm.filiale_afg, function (filiale_afg, indexF) {
      return _c("option", {
        key: indexF + "4z_1",
        domProps: {
          value: filiale_afg
        }
      }, [_vm._v(_vm._s(filiale_afg))]);
    })], 2) : _c("select", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: el.filiale,
        expression: "el.filiale"
      }],
      staticClass: "form-select",
      on: {
        change: [function ($event) {
          var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
            return o.selected;
          }).map(function (o) {
            var val = "_value" in o ? o._value : o.value;
            return val;
          });
          _vm.$set(el, "filiale", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
        }, _vm.handleInput3]
      }
    }, [_c("option", {
      attrs: {
        disabled: "",
        selected: "",
        value: ""
      }
    }), _vm._v(" "), _vm._l(_vm.filiale_afg, function (filiale_afg, indexF) {
      return _c("option", {
        key: indexF + "4z_1",
        domProps: {
          value: filiale_afg
        }
      }, [_vm._v(_vm._s(filiale_afg))]);
    })], 2)]), _vm._v(" "), _c("td", [el.is_locale != true && ![null, undefined, ""].includes(el.facilite_libelle) ? _c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: el.facilite_libelle,
        expression: "el.facilite_libelle"
      }],
      staticClass: "form-control",
      staticStyle: {
        width: "200px !important"
      },
      attrs: {
        readonly: true,
        type: "text",
        id: "facilite_libelle"
      },
      domProps: {
        value: el.facilite_libelle
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(el, "facilite_libelle", $event.target.value);
        }
      }
    }) : _c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: el.facilite_libelle,
        expression: "el.facilite_libelle"
      }],
      staticClass: "form-control",
      staticStyle: {
        width: "200px !important"
      },
      attrs: {
        type: "text",
        id: "facilite_libelle"
      },
      domProps: {
        value: el.facilite_libelle
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(el, "facilite_libelle", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", [el.is_locale != true && ![null, undefined, ""].includes(el.credit_type_code) ? _c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: el.credit_type_code,
        expression: "el.credit_type_code"
      }],
      staticClass: "form-control",
      staticStyle: {
        width: "200px !important"
      },
      attrs: {
        readonly: true,
        type: "text",
        id: "credit_type_code"
      },
      domProps: {
        value: el.credit_type_code
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(el, "credit_type_code", $event.target.value);
        }
      }
    }) : _c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: el.credit_type_code,
        expression: "el.credit_type_code"
      }],
      staticClass: "form-control",
      staticStyle: {
        width: "200px !important"
      },
      attrs: {
        type: "text",
        id: "credit_type_code"
      },
      domProps: {
        value: el.credit_type_code
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(el, "credit_type_code", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", [el.is_locale != true && ![null, undefined, ""].includes(el.credit_number) ? _c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: el.credit_number,
        expression: "el.credit_number"
      }],
      staticClass: "form-control",
      staticStyle: {
        width: "200px !important"
      },
      attrs: {
        readonly: true,
        type: "text",
        id: "credit_number"
      },
      domProps: {
        value: el.credit_number
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(el, "credit_number", $event.target.value);
        }
      }
    }) : _c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: el.credit_number,
        expression: "el.credit_number"
      }],
      staticClass: "form-control",
      staticStyle: {
        width: "200px !important"
      },
      attrs: {
        type: "text",
        id: "credit_number"
      },
      domProps: {
        value: el.credit_number
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(el, "credit_number", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", [el.is_locale != true && ![null, undefined, ""].includes(el.montant_credit) ? _c("currency-input2", {
      staticStyle: {
        "min-width": "150px"
      },
      attrs: {
        readonly: true,
        value: el === null || el === void 0 ? void 0 : el.montant_credit,
        id: "montant_credit"
      },
      on: {
        input: function input($event) {
          return _vm.formDataVarsGaranties($event, ind, "facilites_existante");
        }
      }
    }) : _c("currency-input2", {
      staticStyle: {
        "min-width": "150px"
      },
      attrs: {
        value: el === null || el === void 0 ? void 0 : el.montant_credit,
        id: "montant_credit"
      },
      on: {
        input: function input($event) {
          return _vm.formDataVarsGaranties($event, ind, "facilites_existante");
        }
      }
    })], 1), _vm._v(" "), _c("td", [el.is_locale != true && ![null, undefined, ""].includes(el.duree) ? _c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: el.duree,
        expression: "el.duree"
      }],
      staticClass: "form-control flex-1",
      staticStyle: {
        "min-width": "45px",
        "margin-right": "2px"
      },
      attrs: {
        readonly: true,
        type: "number",
        min: "1",
        id: "duree"
      },
      domProps: {
        value: el.duree
      },
      on: {
        input: [function ($event) {
          if ($event.target.composing) return;
          _vm.$set(el, "duree", $event.target.value);
        }, function ($event) {
          return _vm.formDataVarsGaranties($event, ind, "facilites_existante");
        }]
      }
    }) : _c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: el.duree,
        expression: "el.duree"
      }],
      staticClass: "form-control flex-1",
      staticStyle: {
        "min-width": "45px",
        "margin-right": "2px"
      },
      attrs: {
        type: "number",
        min: "1",
        id: "duree"
      },
      domProps: {
        value: el.duree
      },
      on: {
        input: [function ($event) {
          if ($event.target.composing) return;
          _vm.$set(el, "duree", $event.target.value);
        }, function ($event) {
          return _vm.formDataVarsGaranties($event, ind, "facilites_existante");
        }]
      }
    })]), _vm._v(" "), _c("td", [_c("input-group", {
      staticStyle: {
        "min-width": "110px"
      },
      scopedSlots: _vm._u([{
        key: "input",
        fn: function fn() {
          return [el.is_locale != true && ![null, undefined, ""].includes(el.taux) ? _c("currency-input", {
            attrs: {
              readonly: true,
              value: el.taux,
              max: 100,
              "float": "",
              percentage: "",
              id: "taux"
            },
            on: {
              input: function input($event) {
                return _vm.formDataVarsGaranties($event, ind, "facilites_existante");
              }
            }
          }) : _c("currency-input", {
            attrs: {
              value: el.taux,
              max: 100,
              "float": "",
              percentage: "",
              id: "taux"
            },
            on: {
              input: function input($event) {
                return _vm.formDataVarsGaranties($event, ind, "facilites_existante");
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
    })], 1), _vm._v(" "), _c("td", [el.is_locale != true && ![null, undefined, ""].includes(el.echeancier) ? _c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: el.echeancier,
        expression: "el.echeancier"
      }],
      staticClass: "form-control flex-1",
      staticStyle: {
        "min-width": "45px",
        "margin-right": "2px"
      },
      attrs: {
        readonly: true,
        id: "echeancier"
      },
      domProps: {
        value: el.echeancier
      },
      on: {
        input: [function ($event) {
          if ($event.target.composing) return;
          _vm.$set(el, "echeancier", $event.target.value);
        }, function ($event) {
          return _vm.formDataVarsGaranties($event, ind, "facilites_existante");
        }]
      }
    }) : _c("select", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: el.echeancier,
        expression: "el.echeancier"
      }],
      staticClass: "form-control",
      attrs: {
        id: "echeancier"
      },
      on: {
        change: [function ($event) {
          var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
            return o.selected;
          }).map(function (o) {
            var val = "_value" in o ? o._value : o.value;
            return val;
          });
          _vm.$set(el, "echeancier", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
        }, _vm.handleInputGaranties]
      }
    }, [_c("option", {
      attrs: {
        disabled: "",
        selected: "",
        value: ""
      }
    }, [_vm._v("\n                                                                --- Choisissez l'écheancier ---\n                                                            ")]), _vm._v(" "), _c("option", {
      attrs: {
        value: ""
      }
    }), _vm._v(" "), _vm._l(_vm.periodicites, function (el, index) {
      return [_c("option", {
        domProps: {
          value: el.libelle
        }
      }, [_vm._v("\n                                                                    " + _vm._s(el.libelle) + "\n                                                                ")])];
    })], 2)]), _vm._v(" "), _c("td", [el.is_locale != true && ![null, undefined, ""].includes(el.montant_echeance) ? _c("currency-input2", {
      staticStyle: {
        "min-width": "150px"
      },
      attrs: {
        readonly: true,
        value: el.montant_echeance,
        id: "montant_echeance"
      },
      on: {
        input: function input($event) {
          return _vm.formDataVarsGaranties($event, ind, "facilites_existante");
        }
      }
    }) : _c("currency-input2", {
      staticStyle: {
        "min-width": "150px"
      },
      attrs: {
        value: el.montant_echeance,
        id: "montant_echeance"
      },
      on: {
        input: function input($event) {
          return _vm.formDataVarsGaranties($event, ind, "facilites_existante");
        }
      }
    })], 1), _vm._v(" "), _c("td", [el.is_locale != true && ![null, undefined, ""].includes(el.encours) ? _c("currency-input2", {
      staticStyle: {
        "min-width": "150px"
      },
      attrs: {
        readonly: true,
        value: el.encours,
        id: "encours"
      },
      on: {
        input: function input($event) {
          return _vm.formDataVarsGaranties($event, ind, "facilites_existante");
        }
      }
    }) : _c("currency-input2", {
      staticStyle: {
        "min-width": "150px"
      },
      attrs: {
        value: el.encours,
        id: "encours"
      },
      on: {
        input: function input($event) {
          return _vm.formDataVarsGaranties($event, ind, "facilites_existante");
        }
      }
    })], 1), _vm._v(" "), _c("td", [el.is_locale != true && ![null, undefined, ""].includes(el.impaye) ? _c("currency-input2", {
      staticStyle: {
        "min-width": "150px"
      },
      attrs: {
        readonly: true,
        value: el.impaye,
        id: "impaye"
      },
      on: {
        input: function input($event) {
          return _vm.formDataVarsGaranties($event, ind, "facilites_existante");
        }
      }
    }) : _c("currency-input2", {
      staticStyle: {
        "min-width": "150px"
      },
      attrs: {
        value: el.impaye,
        id: "impaye"
      },
      on: {
        input: function input($event) {
          return _vm.formDataVarsGaranties($event, ind, "facilites_existante");
        }
      }
    })], 1), _vm._v(" "), _c("td", [el.is_locale != true && ![null, undefined, ""].includes(el.date_echeance) ? _c("date-input", {
      staticStyle: {
        width: "210px"
      },
      attrs: {
        viewonly: true,
        value: el.date_echeance,
        id: "date_echeance"
      },
      on: {
        input: function input($event) {
          return _vm.formDataVarsGaranties($event, ind, "facilites_existante");
        }
      }
    }) : _c("date-input", {
      staticStyle: {
        width: "210px"
      },
      attrs: {
        value: el.date_echeance,
        id: "date_echeance"
      },
      on: {
        input: function input($event) {
          return _vm.formDataVarsGaranties($event, ind, "facilites_existante");
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
      attrs: {
        rows: "1",
        id: "commentaire"
      },
      domProps: {
        value: el.commentaire
      },
      on: {
        input: [function ($event) {
          if ($event.target.composing) return;
          _vm.$set(el, "commentaire", $event.target.value);
        }, function ($event) {
          return _vm.formDataVarsGaranties($event, ind, "facilites_existante");
        }]
      }
    })]), _vm._v(" "), _c("td", {
      staticClass: "vertical-middle text-right",
      staticStyle: {
        width: "15px"
      }
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
          return _vm.addMoreFaciliteExistante();
        }
      }
    }, [_c("plus-icon", {
      staticClass: "custom-class",
      attrs: {
        size: "21"
      }
    })], 1) : _vm._e(), _vm._v(" "), ind > 0 ? _c("button", {
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
          return _vm.removeFaciliteExist(ind);
        }
      }
    }, [_c("trash-icon", {
      staticClass: "custom-class",
      attrs: {
        size: "21"
      }
    })], 1) : _vm._e()])]);
  }), 0), _vm._v(" "), _c("tfoot", [_c("tr", [_c("td", {
    staticClass: "fw-bold text-left",
    attrs: {
      colspan: "0"
    }
  }, [_vm._v("Totaux")]), _vm._v(" "), _c("td"), _vm._v(" "), _c("td"), _vm._v(" "), _c("td"), _vm._v(" "), _c("td", {
    staticClass: "fw-bold"
  }, [_vm._v(_vm._s(_vm._f("formatNumber")(_vm.totalsFacilitesExistante.montant_credit)))]), _vm._v(" "), _c("td"), _vm._v(" "), _c("td"), _vm._v(" "), _c("td"), _vm._v(" "), _c("td", {
    staticClass: "fw-bold"
  }, [_vm._v(_vm._s(_vm._f("formatNumber")(_vm.totalsFacilitesExistante.montant_echeance)))]), _vm._v(" "), _c("td", {
    staticClass: "fw-bold"
  }, [_vm._v(_vm._s(_vm._f("formatNumber")(_vm.totalsFacilitesExistante.encours)))]), _vm._v(" "), _c("td", {
    staticClass: "fw-bold"
  }, [_vm._v(_vm._s(_vm._f("formatNumber")(_vm.totalsFacilitesExistante.impaye)))]), _vm._v(" "), _c("td"), _vm._v(" "), _c("td"), _vm._v(" "), _c("td")])])])])])]) : _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "relook-header",
    on: {
      click: function click($event) {
        _vm.seen0_2 = !_vm.seen0_2;
      }
    }
  }, [_c("h6", {
    attrs: {
      id: "frais-de-crédit"
    }
  }, [_vm._v("\n                                        Concours/Facilités existantes(Chez AFG BANK)\n                                        "), _c("chevron-down-icon", {
    staticClass: "custom-class",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    },
    attrs: {
      size: "21"
    }
  })], 1)])]), _vm._v(" "), _vm.seen0_3 ? _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "relook-header",
    on: {
      click: function click($event) {
        _vm.seen0_3 = !_vm.seen0_3;
      }
    }
  }, [_c("h6", {
    "class": " subdiv" + this.tb_name,
    attrs: {
      id: "frais-de-crédit-facitlite"
    }
  }, [_vm._v("\n                                        Concours/Facilités sollicitées\n                                        "), _c("chevron-up-icon", {
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
    staticClass: "table table-bordered"
  }, [_vm._m(5), _vm._v(" "), _c("tbody", _vm._l(_vm.facilites_sollicitees, function (el, ind) {
    var _el$infos_fcub, _el$infos_fcub2;
    return _c("tr", {
      key: ind
    }, [_c("td", {
      staticStyle: {
        "text-align": "center"
      }
    }, [_c("button", {
      staticStyle: {
        "background-color": "#eb0523",
        color: "#ffffff",
        "border-radius": "15%",
        border: "none",
        "margin-top": "8px",
        width: "34px"
      },
      attrs: {
        type: "button",
        title: "Faire une simulation"
      },
      on: {
        click: function click($event) {
          return _vm.showTamor(el, ind);
        }
      }
    }, [_c("i", {
      staticClass: "icofont-file-alt"
    })])]), _vm._v(" "), _c("td", [_c("select", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: el.filiale,
        expression: "el.filiale"
      }],
      staticClass: "form-select",
      attrs: {
        disabled: ""
      },
      on: {
        change: [function ($event) {
          var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
            return o.selected;
          }).map(function (o) {
            var val = "_value" in o ? o._value : o.value;
            return val;
          });
          _vm.$set(el, "filiale", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
        }, _vm.handleInput3]
      }
    }, [_c("option", {
      attrs: {
        disabled: "",
        selected: "",
        value: ""
      }
    }), _vm._v(" "), _vm._l(_vm.filiale_afg, function (filiale_afg, indexF) {
      return _c("option", {
        key: indexF + "4z_1",
        domProps: {
          value: filiale_afg
        }
      }, [_vm._v(_vm._s(filiale_afg) + "\n                                                            ")]);
    })], 2)]), _vm._v(" "), _c("td", {
      staticClass: "text-center"
    }, [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: el.type_facilite,
        expression: "el.type_facilite"
      }],
      staticClass: "form-control",
      staticStyle: {
        width: "200px !important"
      },
      attrs: {
        type: "text",
        id: "facilite_libelle",
        readonly: ""
      },
      domProps: {
        value: el.type_facilite
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(el, "type_facilite", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: el.facilite_libelle,
        expression: "el.facilite_libelle"
      }],
      staticClass: "form-control",
      staticStyle: {
        width: "200px !important"
      },
      attrs: {
        type: "text",
        id: "facilite_libelle",
        readonly: ""
      },
      domProps: {
        value: el.facilite_libelle
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(el, "facilite_libelle", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", [_c("input", {
      staticClass: "form-control",
      staticStyle: {
        width: "200px !important"
      },
      attrs: {
        type: "text",
        id: "infos_fcub_" + ind,
        readonly: ""
      },
      domProps: {
        value: el === null || el === void 0 || (_el$infos_fcub = el.infos_fcub) === null || _el$infos_fcub === void 0 ? void 0 : _el$infos_fcub.PRODUCT_CODE
      }
    })]), _vm._v(" "), _c("td", [_c("textarea", {
      staticClass: "form-control",
      staticStyle: {
        width: "190px"
      },
      attrs: {
        rows: "2",
        readonly: ""
      },
      domProps: {
        value: el === null || el === void 0 || (_el$infos_fcub2 = el.infos_fcub) === null || _el$infos_fcub2 === void 0 ? void 0 : _el$infos_fcub2.PRODUCT_DESC
      }
    })]), _vm._v(" "), _c("td", [_c("currency-input2", {
      staticStyle: {
        "min-width": "150px"
      },
      attrs: {
        value: el.montant_demande,
        id: "montant_demande"
      },
      on: {
        input: function input($event) {
          return _vm.formDataVars3($event, ind, "facilites_sollicitees");
        }
      }
    })], 1), _vm._v(" "), _c("td", [_c("currency-input2", {
      staticStyle: {
        "min-width": "150px"
      },
      attrs: {
        value: el.montant_credit,
        id: "montant_credit"
      },
      on: {
        input: function input($event) {
          return _vm.formDataVars3($event, ind, "facilites_sollicitees");
        }
      }
    })], 1), _vm._v(" "), _c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: el.duree,
        expression: "el.duree"
      }],
      staticClass: "form-control flex-1",
      staticStyle: {
        "min-width": "45px",
        "margin-right": "2px"
      },
      attrs: {
        type: "number",
        min: "1",
        id: "duree"
      },
      domProps: {
        value: el.duree
      },
      on: {
        blur: function blur($event) {
          return _vm.checkingCoherenceField("facilites_sollicitees", ind, "duree", el, $event);
        },
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(el, "duree", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", [_c("input-group", {
      staticStyle: {
        "min-width": "110px"
      },
      scopedSlots: _vm._u([{
        key: "input",
        fn: function fn() {
          return [_c("currency-input", {
            attrs: {
              value: el.taux,
              max: 100,
              "float": "",
              percentage: "",
              id: "taux"
            },
            on: {
              input: function input($event) {
                return _vm.formDataVars3($event, ind, "facilites_sollicitees");
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
    })], 1), _vm._v(" "), _c("td", [_c("select", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: el.echeancier,
        expression: "el.echeancier"
      }],
      staticClass: "form-control",
      attrs: {
        id: "echeancier"
      },
      on: {
        change: [function ($event) {
          var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
            return o.selected;
          }).map(function (o) {
            var val = "_value" in o ? o._value : o.value;
            return val;
          });
          _vm.$set(el, "echeancier", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
        }, function ($event) {
          return _vm.checkingCoherenceField("facilites_sollicitees", ind, "echeancier", el, $event);
        }]
      }
    }, [_c("option", {
      attrs: {
        disabled: "",
        selected: "",
        value: ""
      }
    }, [_vm._v("\n                                                                --- Choisissez l'écheancier ---\n                                                            ")]), _vm._v(" "), _c("option", {
      attrs: {
        value: ""
      }
    }), _vm._v(" "), _vm._l(_vm.periodicites, function (el, index) {
      return [_c("option", {
        domProps: {
          value: el.libelle
        }
      }, [_vm._v("\n                                                                    " + _vm._s(el.libelle) + "\n                                                                ")])];
    })], 2)]), _vm._v(" "), _c("td", [_c("currency-input2", {
      staticStyle: {
        "min-width": "150px"
      },
      attrs: {
        value: el.montant_echeance,
        id: "montant_echeance"
      },
      on: {
        input: function input($event) {
          return _vm.formDataVars3($event, ind, "facilites_sollicitees");
        }
      }
    })], 1), _vm._v(" "), _c("td", [_c("date-input", {
      staticStyle: {
        width: "210px"
      },
      attrs: {
        value: el.date_echeance,
        id: "date_echeance"
      },
      on: {
        input: function input($event) {
          return _vm.formDataVars3($event, ind, "facilites_sollicitees");
        }
      }
    })], 1), _vm._v(" "), _c("td", [_c("div", {
      staticClass: "d-flex justify-content-center"
    }, [_c("div", {
      staticClass: "mx-2",
      staticStyle: {
        display: "flex"
      }
    }, [_c("label", {
      attrs: {
        "for": "differe_oui" + ind
      }
    }, [_vm._v("Oui")]), _vm._v(" "), _c("input", {
      attrs: {
        type: "checkbox",
        value: "Oui",
        id: "differe_oui" + ind
      },
      domProps: {
        checked: el.differe == "Oui"
      },
      on: {
        input: function input($event) {
          return _vm.checkboxValDiffere($event, ind, "facilites_sollicitees");
        }
      }
    })]), _vm._v(" "), _c("div", {
      staticClass: "mx-2",
      staticStyle: {
        display: "flex"
      }
    }, [_c("label", {
      attrs: {
        "for": "differe_non" + ind
      }
    }, [_vm._v("Non")]), _vm._v(" "), _c("input", {
      attrs: {
        type: "checkbox",
        value: "Non",
        id: "differe_non" + ind
      },
      domProps: {
        checked: el.differe == "Non"
      },
      on: {
        input: function input($event) {
          return _vm.checkboxValDiffere($event, ind, "facilites_sollicitees");
        }
      }
    })])])]), _vm._v(" "), _c("td", [["", undefined, null, "Non"].includes(el.differe) ? [_c("input", {
      staticClass: "form-control flex-1",
      staticStyle: {
        "min-width": "45px",
        "margin-right": "2px"
      },
      attrs: {
        type: "text",
        readonly: ""
      }
    })] : [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: el.nbre_differe,
        expression: "el.nbre_differe"
      }],
      staticClass: "form-control flex-1",
      staticStyle: {
        "min-width": "45px",
        "margin-right": "2px"
      },
      attrs: {
        type: "number",
        min: "1",
        id: "nbre_differe"
      },
      domProps: {
        value: el.nbre_differe
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(el, "nbre_differe", $event.target.value);
        }
      }
    })]], 2), _vm._v(" "), _c("td", [_c("textarea", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: el.commentaire,
        expression: "el.commentaire"
      }],
      staticClass: "form-control",
      attrs: {
        rows: "1",
        id: "commentaire"
      },
      domProps: {
        value: el.commentaire
      },
      on: {
        input: [function ($event) {
          if ($event.target.composing) return;
          _vm.$set(el, "commentaire", $event.target.value);
        }, function ($event) {
          return _vm.formDataVars3($event, ind, "facilites_sollicitees");
        }]
      }
    })])]);
  }), 0), _vm._v(" "), _c("tfoot", [_c("tr", [_c("td", {
    staticClass: "fw-bold text-left"
  }, [_vm._v("Totaux")]), _vm._v(" "), _c("td", {
    attrs: {
      colspan: "5"
    }
  }), _vm._v(" "), _c("td", {
    staticClass: "fw-bold"
  }, [_vm._v(_vm._s(_vm._f("formatNumber")(_vm.totalsFacilites.montant_demande)))]), _vm._v(" "), _c("td", {
    staticClass: "fw-bold"
  }, [_vm._v(_vm._s(_vm._f("formatNumber")(_vm.totalsFacilites.montant_credit)))]), _vm._v(" "), _c("td", {
    attrs: {
      colspan: "3"
    }
  }), _vm._v(" "), _c("td", {
    staticClass: "fw-bold"
  }, [_vm._v(_vm._s(_vm._f("formatNumber")(_vm.totalsFacilites.montant_echeance)))]), _vm._v(" "), _c("td", {
    attrs: {
      colspan: "4"
    }
  })])])])])])]) : _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "relook-header",
    on: {
      click: function click($event) {
        _vm.seen0_3 = !_vm.seen0_3;
      }
    }
  }, [_c("h6", {
    attrs: {
      id: "frais-de-crédit-facitlite"
    }
  }, [_vm._v("\n                                        Concours/Facilités sollicitées\n                                        "), _c("chevron-down-icon", {
    staticClass: "custom-class",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    },
    attrs: {
      size: "21"
    }
  })], 1)])]), _vm._v(" "), _vm.seen0_8 ? _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "relook-header",
    on: {
      click: function click($event) {
        _vm.seen0_8 = !_vm.seen0_8;
      }
    }
  }, [_c("h6", {
    "class": "subdiv" + this.tb_name,
    attrs: {
      id: "frais-de-crédit-facitlite"
    }
  }, [_vm._v("\n                                        Frais divers associé à la ligne\n                                    "), _c("chevron-up-icon", {
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
    staticClass: "table table-bordered"
  }, [_vm._m(6), _vm._v(" "), _c("tbody", _vm._l(_vm.facilites_selectionnees, function (el, ind) {
    return _c("tr", {
      key: ind
    }, [_c("td", [_c("span", {
      staticClass: "fw-bold"
    }, [_vm._v(_vm._s(el.facilite_libelle))])]), _vm._v(" "), _c("td", [_c("currency-input2", {
      staticStyle: {
        "min-width": "150px"
      },
      attrs: {
        value: el.frais_dossier,
        id: "facilites_selectionnees_frais_dossier" + ind
      },
      on: {
        change: function change($event) {
          return _vm.recalculerTVAFraisDossier($event, ind, "frais_dossier");
        }
      }
    })], 1), _vm._v(" "), _c("td", [_c("currency-input2", {
      staticStyle: {
        "min-width": "150px"
      },
      attrs: {
        value: el.tva_frais_dossier,
        id: "tva_frais_dossier",
        disabled: ""
      },
      on: {
        input: function input($event) {
          return _vm.formDataVars3($event, ind, "facilites_selectionnees");
        }
      }
    })], 1), _vm._v(" "), _c("td", [_c("currency-input2", {
      staticStyle: {
        "min-width": "150px"
      },
      attrs: {
        value: el.montant_assurance,
        id: "montant_assurance"
      },
      on: {
        input: function input($event) {
          return _vm.formDataVars3($event, ind, "facilites_selectionnees");
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
              value: el.teg_ttc,
              max: 100,
              "float": "",
              percentage: "",
              id: "teg_ttc"
            },
            on: {
              input: function input($event) {
                return _vm.formDataVars3($event, ind, "facilites_selectionnees");
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
    })], 1), _vm._v(" "), _c("td", [_c("input-group", {
      staticStyle: {
        "min-width": "110px"
      },
      scopedSlots: _vm._u([{
        key: "input",
        fn: function fn() {
          return [_c("currency-input", {
            attrs: {
              value: el.taux_periodique,
              max: 100,
              "float": "",
              percentage: "",
              id: "taux_periodique"
            },
            on: {
              input: function input($event) {
                return _vm.formDataVars3($event, ind, "facilites_selectionnees");
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
    })], 1), _vm._v(" "), _c("td", [_c("input-group", {
      staticStyle: {
        "min-width": "110px"
      },
      scopedSlots: _vm._u([{
        key: "input",
        fn: function fn() {
          return [_c("currency-input", {
            attrs: {
              value: el.taux_usure,
              max: 100,
              "float": "",
              percentage: "",
              id: "taux_usure"
            },
            on: {
              input: function input($event) {
                return _vm.formDataVars3($event, ind, "facilites_selectionnees");
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
    })], 1)]);
  }), 0), _vm._v(" "), _c("tfoot", [_c("tr", [_c("td", {
    staticClass: "fw-bold text-left",
    attrs: {
      rowspan: "2"
    }
  }, [_vm._v("Totaux")]), _vm._v(" "), _c("td", {
    staticClass: "fw-bold"
  }, [_vm._v(_vm._s(_vm._f("formatNumber")(_vm.totalsFacilitesSelectionnees.frais_dossier)))]), _vm._v(" "), _c("td", {
    staticClass: "fw-bold"
  }, [_vm._v(_vm._s(_vm._f("formatNumber")(_vm.totalsFacilitesSelectionnees.tva_frais_dossier)))]), _vm._v(" "), _c("td", {
    staticClass: "fw-bold"
  }, [_vm._v(_vm._s(_vm._f("formatNumber")(_vm.totalsFacilitesSelectionnees.montant_assurance)))]), _vm._v(" "), _c("td"), _vm._v(" "), _c("td"), _vm._v(" "), _c("td")])])])])])]) : _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "relook-header",
    on: {
      click: function click($event) {
        _vm.seen0_8 = !_vm.seen0_8;
      }
    }
  }, [_c("h6", {
    attrs: {
      id: "facilite-ligne-associee"
    }
  }, [_vm._v("\n                                        Frais divers associé à la ligne\n                                        "), _c("chevron-down-icon", {
    staticClass: "custom-class",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    },
    attrs: {
      size: "21"
    }
  })], 1)])]), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "row p-4"
  }, [_c("div", {
    staticClass: "col-12 p-0 position-relative"
  }, [_vm.seen1 ? _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "relook-header",
    on: {
      click: function click($event) {
        _vm.seen1 = !_vm.seen1;
      }
    }
  }, [_c("h6", {
    "class": " subdiv" + this.tb_name,
    attrs: {
      id: "conjoint(e)"
    }
  }, [_vm._v("\n                                                Recap\n                                                "), _c("chevron-up-icon", {
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
    staticClass: "card-body"
  }, [_c("table", {
    staticClass: "table table-bordered mt-3"
  }, [_c("thead", [_c("tr", [_c("td", {
    staticClass: "bg-beige",
    staticStyle: {
      width: "50%"
    }
  }, [_vm._v("Salaire (A) ")]), _vm._v(" "), _c("td", [_c("currency-input2", {
    attrs: {
      id: "revenu_saalaire",
      value: _vm.getRevenuSalaire,
      readonly: ""
    }
  })], 1)])]), _vm._v(" "), _c("tbody", {
    staticStyle: {
      "font-size": "16px"
    }
  }, [_c("tr", [_c("td", {
    staticClass: "bg-beige",
    staticStyle: {
      width: "50%"
    }
  }, [_vm._v("Autres revenus (B) ")]), _vm._v(" "), _c("td", [_c("currency-input2", {
    attrs: {
      id: "revenu_autre",
      value: _vm.getRevenuAutre(),
      readonly: ""
    }
  })], 1)]), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "bg-beige",
    staticStyle: {
      width: "50%"
    }
  }, [_vm._v("Remboursement autres crédits (C) ")]), _vm._v(" "), _c("td", [_c("currency-input2", {
    attrs: {
      id: "remb_autre_credit",
      value: _vm.formDataToBeWatched.remb_autre_credit,
      readonly: ""
    }
  })], 1)]), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "bg-beige",
    staticStyle: {
      width: "50%"
    }
  }, [_vm._v("Remboursement Nouveau crédit (D) ")]), _vm._v(" "), _c("td", [_c("currency-input2", {
    attrs: {
      id: "remb_nouveau_credit",
      value: _vm.formDataToBeWatched.remb_nouveau_credit,
      readonly: ""
    }
  })], 1)]), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "bg-beige",
    staticStyle: {
      width: "50%",
      "font-weight": "800"
    }
  }, [_vm._v("Taux d'endettement (C+D) /(A+B) ")]), _vm._v(" "), _c("td", [_c("div", {
    staticClass: "d-flex position-relative align-items-center"
  }, [_c("input-group", {
    scopedSlots: _vm._u([{
      key: "input",
      fn: function fn() {
        return [_c("currency-input", {
          attrs: {
            disabled: true,
            value: _vm.getTauxEndettement().taux_endettement,
            max: 100,
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
    }], null, false, 1263306297)
  }), _vm._v(" "),  false ? 0 : _vm._e()], 1)])])])])])])])]) : _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "relook-header",
    on: {
      click: function click($event) {
        _vm.seen1 = !_vm.seen1;
      }
    }
  }, [_c("h6", {
    attrs: {
      id: "conjoint(e)"
    }
  }, [_vm._v("\n                                                Recap\n                                                "), _c("chevron-down-icon", {
    staticClass: "custom-class",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    },
    attrs: {
      size: "21"
    }
  })], 1)])])])])])]), _vm._v(" "), _c("div", {
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
  }, [_vm._v("\n                            Fermer le tableau\n                        ")])])])]) : _c("div", {
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
  }, [_vm._v("\n                                " + _vm._s(_vm.tb_display_name) + " : Concours/Facilités\n                            ")]), _vm._v(" "), _c("div", {
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
  }, [_c("span", [_vm._v(" " + _vm._s(_vm.formDataToBeWatched.notes.length))])])])]) : _vm._e(), _vm._v(" "), _c("airplay-icon", {
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
        return _vm.$modal.show("demande_de_pret");
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
  })], 1)])])])])], 1), _vm._v(" "), _c("modal", {
    attrs: {
      name: "demande_de_pret",
      width: 500,
      resizable: "",
      height: "300"
    }
  }, [_c("div", {
    staticClass: "image1"
  })]), _vm._v(" "), _c("note-modal", {
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
  }), _vm._v(" "), _c("modal", {
    attrs: {
      name: "show-simulation-concours",
      width: 1000,
      resizable: "",
      height: "auto",
      scrollable: true
    }
  }, [_c("div", {
    staticClass: "modal-content"
  }, [_c("div", {
    staticClass: "memo",
    style: {
      "background-color": _vm.entityColor
    }
  }, [_c("div", {
    staticClass: "container-fluid"
  }, [_c("div", {
    staticClass: "d-flex justify-content-between align-items-center text-white"
  }, [_c("div", [_vm._v("SIMULATEUR DE CREDIT")]), _vm._v(" "), _c("div", [_c("div", {
    staticClass: "d-flex justify-content-between align-items-center"
  }, [_c("i", {
    staticClass: "icofont-close",
    attrs: {
      role: "button"
    },
    on: {
      click: _vm.closeModal
    }
  })])])])])]), _vm._v(" "), _c("div", {
    staticClass: "container pt-5 pb-4"
  }, [_c("SimulateurDeCredit", {
    staticStyle: {
      "max-height": "80vh",
      overflow: "auto"
    },
    attrs: {
      "all-tamor": true,
      "can-import": true,
      "can-create-new-simulation": true,
      "view-only": _vm.viewOnly,
      "show-history": false,
      "default-edit-mode": false,
      "default-simulation-id": (_vm$data_tamor = _vm.data_tamor) === null || _vm$data_tamor === void 0 ? void 0 : _vm$data_tamor.sim_pub_key,
      "can-select-facility": true,
      facilities: _vm.facilites_sollicitees,
      "default-facility": _vm.defaultFacility,
      "default-simulation": _vm.defaultSimulation,
      "modal-name": "show-simulation-concours"
    },
    on: {
      close: _vm.closeModal
    }
  })], 1)])])], 1);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "d-flex justify-content-center text-center align-items-center text-muted py-4"
  }, [_c("div", [_c("span", {
    staticClass: "spinner-border spinner-border"
  }), _vm._v(" "), _c("h5", [_vm._v("\n                                        Chargement des données en cours ... "), _c("br"), _vm._v("\n                                        Ceci peut prendre un peu de temps\n                                    ")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", {
    staticClass: "bg-ed-primary"
  }, [_c("tr", [_c("th", {
    staticStyle: {
      "text-align": "center"
    },
    attrs: {
      colspan: "",
      scope: "row"
    }
  }, [_vm._v("\n                                                                TYPE DE DEMANDE "), _c("span", {
    staticStyle: {
      color: "red"
    }
  }, [_vm._v("*")])]), _vm._v(" "), _c("th", {
    staticStyle: {
      "text-align": "center"
    },
    attrs: {
      colspan: "",
      scope: "row"
    }
  }, [_vm._v("\n                                                                TYPE DE CLIENTELE "), _c("span", {
    staticStyle: {
      color: "red"
    }
  }, [_vm._v("*")])])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_c("b", [_vm._v("Ce client a-t-il des prêts chez les confrères ?\n                                                ")]), _vm._v(" "), _c("span", {
    staticStyle: {
      color: "red"
    }
  }, [_vm._v("*")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("td", {
    staticClass: "th fw-bold",
    staticStyle: {
      "align-content": "center",
      "min-width": "250px"
    }
  }, [_vm._v("Institutions/Confrères"), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v("*")])]), _vm._v(" "), _c("td", {
    staticClass: "th fw-bold",
    staticStyle: {
      "align-content": "center",
      "min-width": "250px"
    }
  }, [_vm._v("Type de crédit"), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v("*")])]), _vm._v(" "), _c("td", {
    staticClass: "th fw-bold",
    staticStyle: {
      "align-content": "center",
      "min-width": "150px"
    }
  }, [_vm._v("Mt crédit"), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v("*")])]), _vm._v(" "), _c("td", {
    staticClass: "th fw-bold",
    staticStyle: {
      "align-content": "center",
      "min-width": "150px"
    }
  }, [_vm._v("Durée (Mois)"), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v("*")])]), _vm._v(" "), _c("td", {
    staticClass: "th fw-bold",
    staticStyle: {
      "align-content": "center",
      "min-width": "150px"
    }
  }, [_vm._v("Taux")]), _vm._v(" "), _c("td", {
    staticClass: "th fw-bold",
    staticStyle: {
      "align-content": "center",
      "min-width": "220px"
    }
  }, [_vm._v("Echéancier")]), _vm._v(" "), _c("td", {
    staticClass: "th fw-bold",
    staticStyle: {
      "align-content": "center",
      "min-width": "150px"
    }
  }, [_vm._v("Mt de l'échéance "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v("*")])]), _vm._v(" "), _c("td", {
    staticClass: "th fw-bold",
    staticStyle: {
      "align-content": "center",
      "min-width": "150px"
    }
  }, [_vm._v("Encours "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v("*")])]), _vm._v(" "), _c("td", {
    staticClass: "th fw-bold",
    staticStyle: {
      "align-content": "center",
      "min-width": "200px"
    }
  }, [_vm._v("Date échéance "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v("*")])]), _vm._v(" "), _c("td", {
    staticClass: "th fw-bold",
    staticStyle: {
      "align-content": "center",
      "min-width": "280px"
    }
  }, [_vm._v("Commentaire")]), _vm._v(" "), _c("td", {
    staticClass: "th fw-bold"
  })])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("td", {
    staticClass: "th fw-bold",
    staticStyle: {
      "align-content": "center",
      "min-width": "250px"
    }
  }, [_vm._v("Filiale"), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v("*")])]), _vm._v(" "), _c("td", {
    staticClass: "th fw-bold",
    staticStyle: {
      "align-content": "center",
      "min-width": "150px"
    }
  }, [_vm._v("Nature du concours"), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v("*")])]), _vm._v(" "), _c("td", {
    staticClass: "th fw-bold",
    staticStyle: {
      "align-content": "center",
      "min-width": "150px"
    }
  }, [_vm._v("Code du crédit"), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v("*")])]), _vm._v(" "), _c("td", {
    staticClass: "th fw-bold",
    staticStyle: {
      "align-content": "center",
      "min-width": "150px"
    }
  }, [_vm._v("Code de prêt flexcube"), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v("*")])]), _vm._v(" "), _c("td", {
    staticClass: "th fw-bold",
    staticStyle: {
      "align-content": "center",
      "min-width": "150px"
    }
  }, [_vm._v("Mt crédit"), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v("*")])]), _vm._v(" "), _c("td", {
    staticClass: "th fw-bold",
    staticStyle: {
      "align-content": "center",
      "min-width": "150px"
    }
  }, [_vm._v("Durée (Mois)"), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v("*")])]), _vm._v(" "), _c("td", {
    staticClass: "th fw-bold",
    staticStyle: {
      "align-content": "center",
      "min-width": "150px"
    }
  }, [_vm._v("Taux"), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v("*")])]), _vm._v(" "), _c("td", {
    staticClass: "th fw-bold",
    staticStyle: {
      "align-content": "center",
      "min-width": "220px"
    }
  }, [_vm._v("Echéancier"), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v("*")])]), _vm._v(" "), _c("td", {
    staticClass: "th fw-bold",
    staticStyle: {
      "align-content": "center",
      "min-width": "150px"
    }
  }, [_vm._v("Mt de l’échéance"), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v("*")])]), _vm._v(" "), _c("td", {
    staticClass: "th fw-bold",
    staticStyle: {
      "align-content": "center",
      "min-width": "150px"
    }
  }, [_vm._v("Encours "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v("*")])]), _vm._v(" "), _c("td", {
    staticClass: "th fw-bold",
    staticStyle: {
      "align-content": "center",
      "min-width": "220px"
    }
  }, [_vm._v("Impayé"), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v("*")])]), _vm._v(" "), _c("td", {
    staticClass: "th fw-bold",
    staticStyle: {
      "align-content": "center",
      "min-width": "200px"
    }
  }, [_vm._v("Date échéance"), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v("*")])]), _vm._v(" "), _c("td", {
    staticClass: "th fw-bold",
    staticStyle: {
      "align-content": "center",
      "min-width": "280px"
    }
  }, [_vm._v("Commentaire")]), _vm._v(" "), _c("td", {
    staticClass: "th fw-bold"
  })])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("td", {
    staticClass: "th fw-bold",
    staticStyle: {
      "align-content": "center",
      "font-style": "italic"
    }
  }, [_vm._v("Simulation")]), _vm._v(" "), _c("td", {
    staticClass: "th fw-bold",
    staticStyle: {
      "align-content": "center",
      "min-width": "250px"
    }
  }, [_vm._v("Filiale"), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v("*")])]), _vm._v(" "), _c("td", {
    staticClass: "th fw-bold",
    staticStyle: {
      "align-content": "center",
      "min-width": "250px"
    }
  }, [_vm._v("Type de crédit"), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v("*")])]), _vm._v(" "), _c("td", {
    staticClass: "th fw-bold",
    staticStyle: {
      "align-content": "center",
      "min-width": "150px"
    }
  }, [_vm._v("Nature du concours")]), _vm._v(" "), _c("td", {
    staticClass: "th fw-bold",
    staticStyle: {
      "align-content": "center",
      "min-width": "150px"
    }
  }, [_vm._v("Code produit")]), _vm._v(" "), _c("td", {
    staticClass: "th fw-bold",
    staticStyle: {
      "align-content": "center",
      "min-width": "150px"
    }
  }, [_vm._v("Descr. produit")]), _vm._v(" "), _c("td", {
    staticClass: "th fw-bold",
    staticStyle: {
      "align-content": "center",
      "min-width": "150px"
    }
  }, [_vm._v("Mt demandé"), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v("*")])]), _vm._v(" "), _c("td", {
    staticClass: "th fw-bold",
    staticStyle: {
      "align-content": "center",
      "min-width": "150px"
    }
  }, [_vm._v("Mt crédit"), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v("*")])]), _vm._v(" "), _c("td", {
    staticClass: "th fw-bold",
    staticStyle: {
      "align-content": "center",
      "min-width": "150px"
    }
  }, [_vm._v("Durée (Mois)"), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v("*")])]), _vm._v(" "), _c("td", {
    staticClass: "th fw-bold",
    staticStyle: {
      "align-content": "center",
      "min-width": "150px"
    }
  }, [_vm._v("Taux"), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v("*")])]), _vm._v(" "), _c("td", {
    staticClass: "th fw-bold",
    staticStyle: {
      "align-content": "center",
      "min-width": "220px"
    }
  }, [_vm._v("Echéancier"), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v("*")])]), _vm._v(" "), _c("td", {
    staticClass: "th fw-bold",
    staticStyle: {
      "align-content": "center",
      "min-width": "150px"
    }
  }, [_vm._v("Mt de l’échéance "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v("*")])]), _vm._v(" "), _c("td", {
    staticClass: "th fw-bold",
    staticStyle: {
      "align-content": "center",
      "min-width": "200px"
    }
  }, [_vm._v("Date 1 "), _c("sup", [_vm._v("ère")]), _vm._v(" échéance "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v("*")])]), _vm._v(" "), _c("td", {
    staticClass: "th fw-bold",
    staticStyle: {
      "align-content": "center",
      "min-width": "280px"
    }
  }, [_vm._v("Différé")]), _vm._v(" "), _c("td", {
    staticClass: "th fw-bold",
    staticStyle: {
      "align-content": "center",
      "min-width": "280px"
    }
  }, [_vm._v("Nbre de Différé")]), _vm._v(" "), _c("td", {
    staticClass: "th fw-bold",
    staticStyle: {
      "align-content": "center",
      "min-width": "280px"
    }
  }, [_vm._v("Commentaire")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("td", {
    staticClass: "th fw-bold",
    staticStyle: {
      "align-content": "center",
      "min-width": "150px"
    }
  }, [_vm._v("Nom de la facilité")]), _vm._v(" "), _c("td", {
    staticClass: "th fw-bold",
    staticStyle: {
      "align-content": "center",
      "min-width": "150px"
    }
  }, [_vm._v("Frais dossier HT"), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v("*")])]), _vm._v(" "), _c("td", {
    staticClass: "th fw-bold",
    staticStyle: {
      "align-content": "center",
      "min-width": "150px"
    }
  }, [_vm._v("Mt TVA sur frais de dossier")]), _vm._v(" "), _c("td", {
    staticClass: "th fw-bold",
    staticStyle: {
      "align-content": "center",
      "min-width": "150px"
    }
  }, [_vm._v("Mt de l'assurance TTC")]), _vm._v(" "), _c("td", {
    staticClass: "th fw-bold",
    staticStyle: {
      "align-content": "center",
      "min-width": "150px"
    }
  }, [_vm._v("TEG"), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v("*")])]), _vm._v(" "), _c("td", {
    staticClass: "th fw-bold",
    staticStyle: {
      "align-content": "center",
      "min-width": "150px"
    }
  }, [_vm._v("Taux périodique"), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v("*")])]), _vm._v(" "), _c("td", {
    staticClass: "th fw-bold",
    staticStyle: {
      "align-content": "center",
      "min-width": "150px"
    }
  }, [_vm._v("Taux d'usure"), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v("*")])])])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/ErrorRetry.vue?vue&type=template&id=366ecdcf":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/ErrorRetry.vue?vue&type=template&id=366ecdcf ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.error ? _c("div", [_c("div", {
    staticClass: "alert",
    "class": [{
      "alert-light": _vm.retrying,
      "alert-danger": _vm.error && !_vm.retrying
    }]
  }, [_vm._v("\n    " + _vm._s(_vm.retrying ? "Chargement..." : _vm.error) + "\n  ")]), _vm._v(" "), _vm.canRetry ? _c("div", [_c("button", {
    staticClass: "btn bg-deep-blue text-white d-flex gap-1 align-items-center justify-content-center",
    attrs: {
      disabled: _vm.retrying
    },
    on: {
      click: _vm.retry
    }
  }, [_vm.retrying ? _c("span", {
    staticClass: "spinner-border spinner-border-sm"
  }) : _vm._e(), _vm._v(" "), _c("i", {
    staticClass: "fa fa-refresh"
  }), _vm._v(" Réessayer\n    ")])]) : _vm._e()]) : _vm._e();
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/Simulateur/LoadSimulation.vue?vue&type=template&id=02d49562&scoped=true":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/Simulateur/LoadSimulation.vue?vue&type=template&id=02d49562&scoped=true ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "d-flex gap-1 flex-column align-items-center justify-content-center"
  }, [_c("span", {
    staticClass: "text-center"
  }, [_vm._v("\n    Charger une simulation existante\n  ")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.simPubKey,
      expression: "simPubKey"
    }],
    staticClass: "form-select mw-50",
    attrs: {
      disabled: _vm.disabled
    },
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.simPubKey = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }
    }
  }, [_c("option", {
    attrs: {
      value: ""
    }
  }, [_vm.canCreateNewSimulation ? [_vm._v("\n        Vide - Créer une nouvelle simulation\n        ")] : [_vm._v("\n        Sélectionner une simulation\n        ")]], 2), _vm._v(" "), _vm.simulations.length === 0 ? _c("option", {
    attrs: {
      disabled: ""
    }
  }, [_vm._v("\n      Aucune simulation disponible\n    ")]) : _vm._e(), _vm._v(" "), _vm._l(_vm.simulations, function (item) {
    return _c("option", {
      key: item.sim_pub_key,
      domProps: {
        value: item.sim_pub_key,
        selected: _vm.simPubKey === item.sim_pub_key
      }
    }, [_vm._v("\n      " + _vm._s(_vm._f("formatDate")(item.created_at)) + " - " + _vm._s(item.name) + " - " + _vm._s(_vm._f("formatNumber")(item.caracteristiques_credit.montant_credit)) + "\n    ")]);
  })], 2)]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/Simulateur/SimCurrencyInput.vue?vue&type=template&id=d705b938&scoped=true":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/Simulateur/SimCurrencyInput.vue?vue&type=template&id=d705b938&scoped=true ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "w-100"
  }, [_c("div", {
    staticClass: "sim-currency-input"
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": _vm.id
    }
  }, [_vm._v(_vm._s(_vm.label))]), _vm._v(" "), _vm.disabled ? _c("span", {
    "class": _vm.disabledClass
  }, [_vm._v(_vm._s(_vm._f("formatNumber")(_vm.value)))]) : _c("currency-input2", {
    staticClass: "form-control",
    attrs: {
      id: _vm.id,
      value: _vm.inputValue
    },
    on: {
      input: _vm.handleCurrencyInput
    }
  })], 1)]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/Simulateur/SimDateInput.vue?vue&type=template&id=8c6c3432&scoped=true":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/Simulateur/SimDateInput.vue?vue&type=template&id=8c6c3432&scoped=true ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "w-100"
  }, [_c("div", {
    staticClass: "sim-date-input"
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": _vm.id
    }
  }, [_vm._v(_vm._s(_vm.label))]), _vm._v(" "), _vm.disabled ? _c("span", [_vm._v(_vm._s(_vm.value ? _vm.formatDate(_vm.value) : _vm.fallbackValue))]) : _c("date-input", {
    staticClass: "date-form-control",
    attrs: {
      id: _vm.id,
      value: _vm.value,
      disabled: _vm.disabled
    },
    on: {
      change: _vm.handleDateInput
    }
  })], 1)]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/Simulateur/SimInput.vue?vue&type=template&id=521b9916&scoped=true":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/Simulateur/SimInput.vue?vue&type=template&id=521b9916&scoped=true ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "w-100"
  }, [_c("div", {
    staticClass: "sim-input"
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": _vm.id
    }
  }, [_vm._v(_vm._s(_vm.label))]), _vm._v(" "), _vm.disabled ? _c("span", [_vm._v(_vm._s(_vm.displayedValued) + _vm._s(_vm.suffix))]) : _c("div", {
    staticClass: "input-group"
  }, [_vm.type === "checkbox" ? _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.inputValue,
      expression: "inputValue"
    }],
    staticClass: "form-control",
    attrs: {
      placeholder: _vm.placeholder,
      id: _vm.id,
      "aria-describedby": _vm.id + "-suffix",
      disabled: _vm.disabled,
      type: "checkbox"
    },
    domProps: {
      checked: Array.isArray(_vm.inputValue) ? _vm._i(_vm.inputValue, null) > -1 : _vm.inputValue
    },
    on: {
      input: function input($event) {
        return _vm.handleInput($event.target.value);
      },
      change: function change($event) {
        var $$a = _vm.inputValue,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = null,
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && (_vm.inputValue = $$a.concat([$$v]));
          } else {
            $$i > -1 && (_vm.inputValue = $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.inputValue = $$c;
        }
      }
    }
  }) : _vm.type === "radio" ? _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.inputValue,
      expression: "inputValue"
    }],
    staticClass: "form-control",
    attrs: {
      placeholder: _vm.placeholder,
      id: _vm.id,
      "aria-describedby": _vm.id + "-suffix",
      disabled: _vm.disabled,
      type: "radio"
    },
    domProps: {
      checked: _vm._q(_vm.inputValue, null)
    },
    on: {
      input: function input($event) {
        return _vm.handleInput($event.target.value);
      },
      change: function change($event) {
        _vm.inputValue = null;
      }
    }
  }) : _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.inputValue,
      expression: "inputValue"
    }],
    staticClass: "form-control",
    attrs: {
      placeholder: _vm.placeholder,
      id: _vm.id,
      "aria-describedby": _vm.id + "-suffix",
      disabled: _vm.disabled,
      type: _vm.type
    },
    domProps: {
      value: _vm.inputValue
    },
    on: {
      input: [function ($event) {
        if ($event.target.composing) return;
        _vm.inputValue = $event.target.value;
      }, function ($event) {
        return _vm.handleInput($event.target.value);
      }]
    }
  }), _vm._v(" "), _vm.suffix ? _c("span", {
    staticClass: "input-group-text",
    attrs: {
      id: _vm.id + "-suffix"
    }
  }, [_vm._v(_vm._s(_vm.suffix))]) : _vm._e()])])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/Simulateur/SimSelect.vue?vue&type=template&id=5499ade1&scoped=true":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/Simulateur/SimSelect.vue?vue&type=template&id=5499ade1&scoped=true ***!
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
    staticClass: "w-100"
  }, [_c("div", {
    staticClass: "sim-select"
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": _vm.id
    }
  }, [_vm._v(_vm._s(_vm.label))]), _vm._v(" "), _vm.disabled ? _c("span", [_vm._v(_vm._s(_vm.displayedValue))]) : _vm._t("select", function () {
    return [_c("select", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.selectedValue,
        expression: "selectedValue"
      }],
      staticClass: "form-control",
      attrs: {
        id: _vm.id,
        name: _vm.name
      },
      on: {
        change: [function ($event) {
          var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
            return o.selected;
          }).map(function (o) {
            var val = "_value" in o ? o._value : o.value;
            return val;
          });
          _vm.selectedValue = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
        }, _vm.handleChange]
      }
    }, _vm._l(_vm.options, function (option, index) {
      return _c("option", {
        key: "option-".concat(index),
        domProps: {
          value: _vm.optionValue(option)
        }
      }, [_vm._v("\n          " + _vm._s(_vm.optionLabel(option)) + "\n        ")]);
    }), 0)];
  })], 2)]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/Simulateur/SimulateurDeCredit.vue?vue&type=template&id=b8275906&scoped=true":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/Simulateur/SimulateurDeCredit.vue?vue&type=template&id=b8275906&scoped=true ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm$defaultFacility, _vm$diffSimulation;
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "sim-content"
  }, [_vm.showHistory ? _c("header", {
    staticClass: "sim-header"
  }, [_c("nav", {
    staticClass: "d-flex"
  }, [_c("ul", {
    staticClass: "nav nav-tabs row w-100 ms-0"
  }, [_c("li", {
    staticClass: "nav-item col-6 p-2 border d-flex justify-content-center bg-deep-blue fw-semibold cursor-pointer align-items-center",
    "class": [{
      "bg-white text-orange": _vm.useIfTab("simulateur")
    }],
    on: {
      click: function click($event) {
        return _vm.toggleTab("simulateur");
      }
    }
  }, [_vm._v("\n          SIMULATEUR\n        ")]), _vm._v(" "), _c("li", {
    staticClass: "nav-item col-6 p-2 border d-flex justify-content-center bg-deep-blue fw-semibold cursor-pointer align-items-center",
    "class": [{
      "bg-white text-orange": _vm.useIfTab("historique")
    }],
    on: {
      click: function click($event) {
        return _vm.toggleTab("historique");
      }
    }
  }, [_vm._v("\n          HISTORIQUE\n        ")])])])]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "sim-body"
  }, [_vm.history.loading && !_vm.history.error ? _c("div", {
    staticClass: "d-flex flex-column border align-items-center justify-content-center text-capitalize my-4 p-2"
  }, [_vm._m(0), _vm._v(" "), _c("div", [_vm._v("Chargement...")])]) : [_vm.history.error ? _c("ErrorRetry", {
    staticClass: "my-4",
    attrs: {
      error: _vm.history.error,
      retrying: _vm.history.loading
    },
    on: {
      retry: _vm.loadHistory
    }
  }) : [_vm.useIfTab("simulateur") ? _c("SimulationActions", {
    attrs: {
      simulation: _vm.simulation,
      simulations: _vm.history.data,
      canEdit: _vm.canEdit && !_vm.viewOnly,
      canImport: _vm.canImport,
      canSave: _vm.canSave && !_vm.viewOnly,
      canPrint: _vm.canPrint,
      "has-changed": _vm.hasChanged,
      "default-edit-mode": _vm.editMode
    },
    on: {
      action: _vm.handleAction
    }
  }) : _vm._e(), _vm._v(" "), _vm.showHistoryTab ? _c("SimulatorHistory", {
    attrs: {
      history: _vm.history,
      "can-delete": _vm.canDelete
    },
    on: {
      "load-history": _vm.loadHistory,
      "select-simulation": _vm.handleSelectSimulation,
      "delete-simulation": _vm.handleDeleteSimulation
    }
  }) : _vm._e(), _vm._v(" "), _vm.importRequired ? _c("div", {
    staticClass: "d-flex flex-column border align-items-center justify-content-center text-danger my-4 p-2 text-center"
  }, [_c("p", {
    staticClass: "text-capitalize"
  }, [_vm._v("\n            EXPORTATION REQUISE\n          ")]), _vm._v(" "), _c("p", {
    staticClass: "m-0"
  }, [_vm._v("\n            Le montant de l'échéance de la facilité est différent de celui du TAMOR."), _c("br"), _vm._v("\n            Montant de l'échéance de la facilité : " + _vm._s(_vm._f("formatNumber")((_vm$defaultFacility = _vm.defaultFacility) === null || _vm$defaultFacility === void 0 ? void 0 : _vm$defaultFacility.montant_echeance)) + " ≠ " + _vm._s(_vm._f("formatNumber")((_vm$diffSimulation = _vm.diffSimulation) === null || _vm$diffSimulation === void 0 || (_vm$diffSimulation = _vm$diffSimulation.tableau) === null || _vm$diffSimulation === void 0 || (_vm$diffSimulation = _vm$diffSimulation[0]) === null || _vm$diffSimulation === void 0 ? void 0 : _vm$diffSimulation.montant_echeance)) + " Montant de l'échéance du TAMOR."), _c("br")])]) : _vm._e(), _vm._v(" "), _vm.useIfTab("simulateur") ? _c("div", {
    attrs: {
      id: "credit-simulator"
    }
  }, [_c("Simulator", {
    attrs: {
      simulations: _vm.history.data,
      disabled: _vm.editMode,
      facility: _vm.facility,
      "all-tamor": _vm.allTamor,
      facilities: _vm.facilities,
      "can-select-facility": _vm.canSelectFacility,
      "can-create-new-simulation": _vm.canCreateNewSimulation,
      "view-only": _vm.viewOnly,
      "dossier-credit": _vm.dossierCredit
    },
    on: {
      "update:facility": _vm.handleFacility,
      "has-changed": function hasChanged($event) {
        _vm.hasChanged = $event;
      },
      "diff-simulation": _vm.handleDiffSim
    },
    model: {
      value: _vm.simulation,
      callback: function callback($$v) {
        _vm.simulation = $$v;
      },
      expression: "simulation"
    }
  })], 1) : _vm._e()]]], 2), _vm._v(" "), _vm.showFooter ? _c("div", {
    staticClass: "sim-footer mt-3"
  }, [_c("div", {
    staticClass: "d-flex gap-2 justify-content-end align-items-center p-2 w-100"
  }, [_vm.useIfTab("simulateur") ? _c("SimulationActionsBtn", {
    staticClass: "flex-1 w-100",
    attrs: {
      simulation: _vm.simulation,
      simulations: _vm.history.data,
      canEdit: _vm.canEdit && !_vm.viewOnly,
      canImport: _vm.canImport,
      canSave: _vm.canSave && !_vm.viewOnly,
      canPrint: _vm.canPrint,
      "has-changed": _vm.hasChanged,
      "default-edit-mode": _vm.editMode
    },
    on: {
      action: _vm.handleAction
    }
  }) : _vm._e(), _vm._v(" "), _c("button", {
    staticClass: "btn btn-sm",
    staticStyle: {
      background: "rgb(44, 62, 80)",
      color: "white"
    },
    attrs: {
      type: "button"
    },
    on: {
      click: _vm.closeModal
    }
  }, [_vm._v("\n        Fermer\n      ")])], 1)]) : _vm._e(), _vm._v(" "), _c("PrintModal", {
    on: {
      "cancel-print": function cancelPrint($event) {
        _vm.editMode = false;
      }
    }
  })], 1);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "spinner-border text-deep-blue",
    attrs: {
      role: "status"
    }
  }, [_c("span", {
    staticClass: "visually-hidden"
  }, [_vm._v("Chargement...")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/Simulateur/SimulationActions.vue?vue&type=template&id=ad8c1ab8&scoped=true":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/Simulateur/SimulationActions.vue?vue&type=template&id=ad8c1ab8&scoped=true ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.showActions ? _c("div", {
    staticClass: "head-opt-block-container printer-skip"
  }, [_c("div", {
    staticClass: "head-opt-block d-flex"
  }, [_vm.canEdit ? _c("button", {
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.emitAction("edit");
      }
    }
  }, [!_vm.isEditMode ? _c("i", {
    staticClass: "icofont icofont-paperclip",
    attrs: {
      title: "Edit mode désactivé"
    }
  }) : _c("i", {
    staticClass: "icofont icofont-pencil",
    attrs: {
      title: "Edit mode activé"
    }
  })]) : _vm._e(), _vm._v(" "), _vm.canImport ? _c("button", {
    staticClass: "d-flex btn btn-sm align-items-center bg-deep-blue rounded-pill px-2",
    attrs: {
      type: "button",
      title: "Importer dans le dossier"
    },
    on: {
      click: function click($event) {
        return _vm.emitAction("import");
      }
    }
  }, [_c("i", {
    staticClass: "icofont-download",
    staticStyle: {
      color: "white !important"
    }
  }), _vm._v(" "), _c("span", [_vm._v("Importer dans le dossier")])]) : _vm._e(), _vm._v(" "), _vm.canSave ? _c("button", {
    attrs: {
      type: "button",
      title: "Enregistrer"
    },
    on: {
      click: function click($event) {
        return _vm.emitAction("save");
      }
    }
  }, [_c("i", {
    staticClass: "icofont icofont-save position-relative"
  }, [_vm.hasChanged ? _c("span", {
    staticClass: "position-absolute top-0 translate-middle p-1 bg-danger border border-light rounded-circle"
  }, [_c("span", {
    staticClass: "visually-hidden"
  }, [_vm._v("Changements non enregistrés")])]) : _vm._e()])]) : _vm._e(), _vm._v(" "), _vm.canPrint ? _c("button", {
    attrs: {
      type: "button",
      title: "Imprimer"
    },
    on: {
      click: function click($event) {
        return _vm.emitAction("print");
      }
    }
  }, [_c("i", {
    staticClass: "icofont-print"
  })]) : _vm._e()])]) : _vm._e();
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/Simulateur/SimulationActionsBtn.vue?vue&type=template&id=2c8c6f48&scoped=true":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/Simulateur/SimulationActionsBtn.vue?vue&type=template&id=2c8c6f48&scoped=true ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.showActions ? _c("div", {
    staticClass: "printer-skip"
  }, [_c("div", {
    staticClass: "d-flex justify-content-center align-items-center gap-2"
  }, [_vm.canEdit ? _c("button", {
    staticClass: "d-flex gap-1 btn btn-sm align-items-center bg-deep-blue px-2",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.emitAction("edit");
      }
    }
  }, [!_vm.isEditMode ? _c("i", {
    staticClass: "icofont icofont-paperclip",
    attrs: {
      title: "Edit mode désactivé"
    }
  }) : _c("i", {
    staticClass: "icofont icofont-pencil",
    attrs: {
      title: "Edit mode activé"
    }
  }), _vm._v(" "), _c("span", [_vm._v("Edit mode " + _vm._s(_vm.isEditMode ? "désactivé" : "activé"))])]) : _vm._e(), _vm._v(" "), _vm.canImport ? _c("button", {
    staticClass: "d-flex gap-1 btn btn-sm align-items-center bg-deep-blue px-2",
    attrs: {
      type: "button",
      title: "Importer dans le dossier"
    },
    on: {
      click: function click($event) {
        return _vm.emitAction("import");
      }
    }
  }, [_c("i", {
    staticClass: "icofont-download",
    staticStyle: {
      color: "white !important"
    }
  }), _vm._v(" "), _c("span", [_vm._v("Importer dans le dossier")])]) : _vm._e(), _vm._v(" "), _vm.canSave ? _c("button", {
    staticClass: "d-flex gap-1 btn btn-sm align-items-center bg-deep-blue px-2 position-relative",
    attrs: {
      type: "button",
      title: "Enregistrer"
    },
    on: {
      click: function click($event) {
        return _vm.emitAction("save");
      }
    }
  }, [_c("i", {
    staticClass: "icofont icofont-save"
  }), _vm._v(" "), _vm.hasChanged ? _c("span", {
    staticClass: "position-absolute translate-middle bg-danger border border-light rounded-circle",
    staticStyle: {
      padding: "0.4rem",
      right: "-10px",
      top: "0"
    }
  }, [_c("span", {
    staticClass: "visually-hidden"
  }, [_vm._v("Changements non enregistrés")])]) : _vm._e(), _vm._v(" "), _c("span", [_vm._v("Enregistrer")])]) : _vm._e(), _vm._v(" "), _vm.canPrint ? _c("button", {
    staticClass: "d-flex gap-1 btn btn-sm align-items-center bg-deep-blue px-2",
    attrs: {
      type: "button",
      title: "Imprimer"
    },
    on: {
      click: function click($event) {
        return _vm.emitAction("print");
      }
    }
  }, [_c("i", {
    staticClass: "icofont-print"
  }), _vm._v(" "), _c("span", [_vm._v("Imprimer")])]) : _vm._e()])]) : _vm._e();
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/Simulateur/Simulator.vue?vue&type=template&id=e92f7e9c&scoped=true":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/Simulateur/Simulator.vue?vue&type=template&id=e92f7e9c&scoped=true ***!
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
  return _c("table", {
    staticClass: "table table-striped table-bordered table-hover sim-table"
  }, [_c("caption", {
    staticClass: "caption-top sim-caption"
  }, [!_vm.viewOnly ? _c("div", {
    staticClass: "w-100 hidden_before_printer"
  }, [_c("LoadSimulation", {
    staticClass: "border p-2 text-uppercase fw-bold",
    attrs: {
      simulations: _vm.simulations,
      "can-create-new-simulation": _vm.canCreateNewSimulation
    },
    model: {
      value: _vm.simPubKey,
      callback: function callback($$v) {
        _vm.simPubKey = $$v;
      },
      expression: "simPubKey"
    }
  })], 1) : _vm._e(), _vm._v(" "), _c("h6", {
    staticClass: "text-center text-uppercase fw-bold border px-2 py-2 m-0"
  }, [_vm._v("\n      TA: SIMULATION DE CRÉDIT\n    ")])]), _vm._v(" "), _vm.error ? _c("tr", {
    staticClass: "table-danger"
  }, [_c("td", {
    staticClass: "text-center text-danger",
    attrs: {
      colspan: "100%"
    }
  }, [_vm._v(_vm._s(_vm.error))])]) : [_c("tr", [_c("td", {
    staticClass: "w-50",
    attrs: {
      colspan: "1"
    }
  }, [_c("SimCurrencyInput", {
    attrs: {
      label: "Salaire net",
      disabled: _vm.disabled || _vm.viewOnly
    },
    on: {
      input: function input($event) {
        return _vm.handleSimulationChange(true, "caracteristiques_credit.salaire_net");
      }
    },
    model: {
      value: _vm.tmpSimulation.caracteristiques_credit.salaire_net,
      callback: function callback($$v) {
        _vm.$set(_vm.tmpSimulation.caracteristiques_credit, "salaire_net", $$v);
      },
      expression: "tmpSimulation.caracteristiques_credit.salaire_net"
    }
  })], 1), _vm._v(" "), _c("td", {
    staticClass: "w-50",
    attrs: {
      colspan: "1"
    }
  }, [_vm.allTamor ? _c("SimCurrencyInput", {
    attrs: {
      label: "Mensualité encours",
      disabled: _vm.disabled || _vm.viewOnly
    },
    on: {
      input: _vm.handleEncoursInput
    },
    model: {
      value: _vm.tmpSimulation.caracteristiques_credit.encours,
      callback: function callback($$v) {
        _vm.$set(_vm.tmpSimulation.caracteristiques_credit, "encours", $$v);
      },
      expression: "tmpSimulation.caracteristiques_credit.encours"
    }
  }) : _c("SimInput", {
    attrs: {
      type: "number",
      label: "DSR",
      suffix: "%",
      disabled: _vm.disabled || _vm.viewOnly
    },
    on: {
      input: function input($event) {
        return _vm.handleSimulationChange(true, "donnees_calculees.dsr");
      }
    },
    model: {
      value: _vm.tmpSimulation.donnees_calculees.dsr,
      callback: function callback($$v) {
        _vm.$set(_vm.tmpSimulation.donnees_calculees, "dsr", $$v);
      },
      expression: "tmpSimulation.donnees_calculees.dsr"
    }
  })], 1)]), _vm._v(" "), _vm.allTamor ? _c("tr", [_c("td", {
    staticClass: "w-100 d-flex flex-column gap-2",
    attrs: {
      colspan: "1"
    }
  }, [_c("SimCurrencyInput", {
    attrs: {
      label: "Quotité",
      disabled: true
    },
    on: {
      input: function input($event) {
        return _vm.handleSimulationChange(true, "caracteristiques_credit.quotite");
      }
    },
    model: {
      value: _vm.tmpSimulation.caracteristiques_credit.quotite,
      callback: function callback($$v) {
        _vm.$set(_vm.tmpSimulation.caracteristiques_credit, "quotite", $$v);
      },
      expression: "tmpSimulation.caracteristiques_credit.quotite"
    }
  }), _vm._v(" "), _c("SimInput", {
    attrs: {
      type: "number",
      label: "% Quotité",
      suffix: "%",
      disabled: true
    },
    on: {
      input: function input($event) {
        return _vm.handleSimulationChange(true, "caracteristiques_credit.quotite_percent");
      }
    },
    model: {
      value: _vm.tmpSimulation.caracteristiques_credit.quotite_percent,
      callback: function callback($$v) {
        _vm.$set(_vm.tmpSimulation.caracteristiques_credit, "quotite_percent", $$v);
      },
      expression: "tmpSimulation.caracteristiques_credit.quotite_percent"
    }
  })], 1), _vm._v(" "), _c("td", {
    staticClass: "w-50",
    attrs: {
      colspan: "1"
    }
  }, [_c("SimInput", {
    attrs: {
      type: "number",
      label: "DSR",
      suffix: "%",
      disabled: true
    },
    on: {
      input: function input($event) {
        return _vm.handleSimulationChange(true, "donnees_calculees.dsr");
      }
    },
    model: {
      value: _vm.tmpSimulation.donnees_calculees.dsr,
      callback: function callback($$v) {
        _vm.$set(_vm.tmpSimulation.donnees_calculees, "dsr", $$v);
      },
      expression: "tmpSimulation.donnees_calculees.dsr"
    }
  })], 1)]) : _vm._e(), _vm._v(" "), _vm._m(0), _vm._v(" "), _vm.allTamor ? _c("tr", {
    staticClass: "as-table"
  }, [_c("td", {
    staticClass: "w-100",
    attrs: {
      colspan: "2"
    }
  }, [_c("SimSelect", {
    attrs: {
      label: "Type de crédit",
      disabled: _vm.viewOnly || (_vm.canSelectFacility ? _vm.disabled : true),
      "fallback-value": _vm.tmpSimulation.caracteristiques_credit.type_facilite || "Non spécifié"
    },
    scopedSlots: _vm._u([{
      key: "select",
      fn: function fn() {
        var _vm$facilities, _vm$facilities$filter;
        return [_c("span", [_c("select", {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: _vm.facilityTypeValue,
            expression: "facilityTypeValue"
          }],
          staticClass: "form-control",
          attrs: {
            id: "type_facilite"
          },
          on: {
            change: function change($event) {
              var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
                return o.selected;
              }).map(function (o) {
                var val = "_value" in o ? o._value : o.value;
                return val;
              });
              _vm.facilityTypeValue = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
            }
          }
        }, [_c("option", {
          attrs: {
            value: ""
          }
        }, [_vm._v("Sélectionner une facilité")]), _vm._v(" "), _vm.canSelectFacility && (_vm$facilities = _vm.facilities) !== null && _vm$facilities !== void 0 && (_vm$facilities$filter = _vm$facilities.filter) !== null && _vm$facilities$filter !== void 0 && (_vm$facilities$filter = _vm$facilities$filter.call(_vm$facilities, function (f) {
          return f.type_facilite;
        })) !== null && _vm$facilities$filter !== void 0 && _vm$facilities$filter.length ? [_c("option", {
          attrs: {
            value: "___existing___",
            disabled: ""
          }
        }, [_vm._v("--- Choisissez une facilité ---")]), _vm._v(" "), _c("optgroup", {
          attrs: {
            label: "FACILITÉS EXISTANTES"
          }
        }, [_vm._l(_vm.facilities, function (facility) {
          return [facility.type_facilite && (facility.uuid || facility.id) ? _c("option", {
            key: facility.id || facility.uuid,
            domProps: {
              value: facility.uuid || facility.id
            }
          }, [_vm._v("\n                        " + _vm._s(facility.filiale) + " - " + _vm._s(facility.type_facilite) + " - " + _vm._s(facility.montant_demande) + "\n                      ")]) : _vm._e()];
        })], 2)] : _vm._e(), _vm._v(" "), _c("option", {
          attrs: {
            disabled: "",
            value: "___new___"
          }
        }, [_vm._v("--- Nouvelle facilité ---")]), _vm._v(" "), _vm._l(_vm.transformLoadedCreditsBanques_, function (items, group) {
          return _c("optgroup", {
            key: group,
            attrs: {
              label: group
            }
          }, _vm._l(items, function (credit) {
            return _c("option", {
              key: credit.id,
              domProps: {
                value: "".concat(credit.libelle, "+++").concat(credit.groupe_categorie)
              }
            }, [_vm._v(_vm._s(credit.libelle) + "\n                  ")]);
          }), 0);
        })], 2), _vm._v(" "), _vm.createNewFacility ? _c("span", {
          staticClass: "fs-small text-danger"
        }, [_vm._v("\n                Une nouvelle facilité sera créée\n              ")]) : _vm._e(), _vm._v(" "), !_vm.facilityTypeValue && _vm.canSelectFacility ? _c("span", {
          staticClass: "fs-small text-danger"
        }, [_vm._v("\n                Sélectionnez ou créez une facilité.\n              ")]) : _vm._e()])];
      },
      proxy: true
    }], null, false, 1387275),
    model: {
      value: _vm.tmpSimulation.caracteristiques_credit.type_facilite,
      callback: function callback($$v) {
        _vm.$set(_vm.tmpSimulation.caracteristiques_credit, "type_facilite", $$v);
      },
      expression: "tmpSimulation.caracteristiques_credit.type_facilite"
    }
  })], 1)]) : _vm._e(), _vm._v(" "), _c("tr", {
    staticClass: "as-table"
  }, [_c("td", {
    staticClass: "w-100",
    attrs: {
      colspan: "2"
    }
  }, [_c("SimCurrencyInput", {
    attrs: {
      label: "Principal",
      disabled: _vm.disabled || _vm.viewOnly
    },
    on: {
      input: function input($event) {
        return _vm.handleSimulationChange(true, "caracteristiques_credit.montant_credit");
      }
    },
    model: {
      value: _vm.tmpSimulation.caracteristiques_credit.montant_credit,
      callback: function callback($$v) {
        _vm.$set(_vm.tmpSimulation.caracteristiques_credit, "montant_credit", $$v);
      },
      expression: "tmpSimulation.caracteristiques_credit.montant_credit"
    }
  })], 1)]), _vm._v(" "), _c("tr", {
    staticClass: "as-table"
  }, [_c("td", {
    staticClass: "w-100",
    attrs: {
      colspan: "2"
    }
  }, [_c("SimInput", {
    attrs: {
      type: "number",
      label: "Taux Annuel HT (%)",
      suffix: "%",
      disabled: _vm.disabled || _vm.viewOnly
    },
    on: {
      input: function input($event) {
        return _vm.handleSimulationChange(true, "caracteristiques_credit.taux_annuel_ht");
      }
    },
    model: {
      value: _vm.tmpSimulation.caracteristiques_credit.taux_annuel_ht,
      callback: function callback($$v) {
        _vm.$set(_vm.tmpSimulation.caracteristiques_credit, "taux_annuel_ht", $$v);
      },
      expression: "tmpSimulation.caracteristiques_credit.taux_annuel_ht"
    }
  })], 1)]), _vm._v(" "), _c("tr", {
    staticClass: "as-table"
  }, [_c("td", {
    staticClass: "w-100",
    attrs: {
      colspan: "2"
    }
  }, [_c("SimInput", {
    attrs: {
      type: "number",
      label: "Durée (Mois)",
      suffix: " Mois",
      disabled: _vm.disabled || _vm.viewOnly
    },
    on: {
      input: function input($event) {
        return _vm.handleSimulationChange(true, "caracteristiques_credit.duree");
      }
    },
    model: {
      value: _vm.tmpSimulation.caracteristiques_credit.duree,
      callback: function callback($$v) {
        _vm.$set(_vm.tmpSimulation.caracteristiques_credit, "duree", $$v);
      },
      expression: "tmpSimulation.caracteristiques_credit.duree"
    }
  })], 1)]), _vm._v(" "), _c("tr", {
    staticClass: "as-table"
  }, [_c("td", {
    staticClass: "w-100",
    attrs: {
      colspan: "2"
    }
  }, [_c("SimDateInput", {
    attrs: {
      label: "Date de 1re échéance",
      disabled: _vm.disabled || _vm.viewOnly,
      "fallback-value": "Non spécifié"
    },
    on: {
      input: function input($event) {
        return _vm.handleSimulationChange(true, "caracteristiques_credit.date_echeance");
      }
    },
    model: {
      value: _vm.tmpSimulation.caracteristiques_credit.date_echeance,
      callback: function callback($$v) {
        _vm.$set(_vm.tmpSimulation.caracteristiques_credit, "date_echeance", $$v);
      },
      expression: "tmpSimulation.caracteristiques_credit.date_echeance"
    }
  })], 1)]), _vm._v(" "), _c("tr", {
    staticClass: "as-table"
  }, [_c("td", {
    staticClass: "w-100",
    attrs: {
      colspan: "2"
    }
  }, [_c("SimSelect", {
    attrs: {
      "option-value-key": "label",
      options: _vm.paymentMethod,
      name: "echeancier",
      label: "Echéancier/Périodicité de remboursement",
      disabled: _vm.disabled || _vm.viewOnly,
      "fallback-value": "Non spécifié"
    },
    on: {
      input: function input($event) {
        return _vm.handleSimulationChange(true, "caracteristiques_credit.echeancier");
      }
    },
    model: {
      value: _vm.tmpSimulation.caracteristiques_credit.echeancier,
      callback: function callback($$v) {
        _vm.$set(_vm.tmpSimulation.caracteristiques_credit, "echeancier", $$v);
      },
      expression: "tmpSimulation.caracteristiques_credit.echeancier"
    }
  })], 1)]), _vm._v(" "), _c("tr", {
    staticClass: "as-table"
  }, [_c("td", {
    staticClass: "w-100",
    attrs: {
      colspan: "2"
    }
  }, [_c("SimInput", {
    attrs: {
      type: "number",
      label: "Comprenant un Différé (Mois)",
      suffix: " Mois",
      disabled: _vm.disabled || _vm.viewOnly
    },
    on: {
      input: function input($event) {
        return _vm.handleSimulationChange(true, "caracteristiques_credit.differe");
      }
    },
    model: {
      value: _vm.tmpSimulation.caracteristiques_credit.differe,
      callback: function callback($$v) {
        _vm.$set(_vm.tmpSimulation.caracteristiques_credit, "differe", $$v);
      },
      expression: "tmpSimulation.caracteristiques_credit.differe"
    }
  })], 1)]), _vm._v(" "), _c("tr", {
    staticClass: "as-table"
  }, [_c("td", {
    staticClass: "w-100",
    attrs: {
      colspan: "2"
    }
  }, [_c("SimInput", {
    attrs: {
      type: "number",
      label: "TVA (%)",
      suffix: "%",
      disabled: _vm.disabled || _vm.viewOnly
    },
    on: {
      input: function input($event) {
        return _vm.handleSimulationChange(true, "caracteristiques_credit.tva");
      }
    },
    model: {
      value: _vm.tmpSimulation.caracteristiques_credit.tva,
      callback: function callback($$v) {
        _vm.$set(_vm.tmpSimulation.caracteristiques_credit, "tva", $$v);
      },
      expression: "tmpSimulation.caracteristiques_credit.tva"
    }
  })], 1)]), _vm._v(" "), _c("tr", {
    staticClass: "as-table"
  }, [_c("td", {
    staticClass: "w-100",
    attrs: {
      colspan: "2"
    }
  }, [_c("SimInput", {
    attrs: {
      type: "number",
      label: "Taux TTC (%)",
      suffix: "%",
      disabled: true
    },
    on: {
      input: function input($event) {
        return _vm.handleSimulationChange(true, "donnees_calculees.taux_ttc");
      }
    },
    model: {
      value: _vm.tmpSimulation.donnees_calculees.taux_ttc,
      callback: function callback($$v) {
        _vm.$set(_vm.tmpSimulation.donnees_calculees, "taux_ttc", $$v);
      },
      expression: "tmpSimulation.donnees_calculees.taux_ttc"
    }
  })], 1)]), _vm._v(" "), _c("tr", {
    staticClass: "as-table border-top"
  }, [_c("td", {
    staticClass: "w-100",
    attrs: {
      colspan: "2"
    }
  }, [_c("SimCurrencyInput", {
    attrs: {
      label: "Frais chèque certifié",
      disabled: _vm.disabled || _vm.viewOnly
    },
    on: {
      input: function input($event) {
        return _vm.handleSimulationChange(true, "caracteristiques_credit.frais_cheque_certifier");
      }
    },
    model: {
      value: _vm.tmpSimulation.caracteristiques_credit.frais_cheque_certifier,
      callback: function callback($$v) {
        _vm.$set(_vm.tmpSimulation.caracteristiques_credit, "frais_cheque_certifier", $$v);
      },
      expression: "tmpSimulation.caracteristiques_credit.frais_cheque_certifier"
    }
  })], 1)]), _vm._v(" "), _c("tr", {
    staticClass: "as-table"
  }, [_c("td", {
    staticClass: "w-100",
    attrs: {
      colspan: "2"
    }
  }, [_c("SimCurrencyInput", {
    attrs: {
      label: "Frais huissier",
      disabled: _vm.disabled || _vm.viewOnly
    },
    on: {
      input: function input($event) {
        return _vm.handleSimulationChange(true, "caracteristiques_credit.frais_huissier");
      }
    },
    model: {
      value: _vm.tmpSimulation.caracteristiques_credit.frais_huissier,
      callback: function callback($$v) {
        _vm.$set(_vm.tmpSimulation.caracteristiques_credit, "frais_huissier", $$v);
      },
      expression: "tmpSimulation.caracteristiques_credit.frais_huissier"
    }
  })], 1)]), _vm._v(" "), _c("tr", {
    staticClass: "as-table"
  }, [_c("td", {
    staticClass: "w-100",
    attrs: {
      colspan: "2"
    }
  }, [_c("SimCurrencyInput", {
    attrs: {
      label: "Frais Dossier et facilité",
      disabled: _vm.disabled || _vm.viewOnly
    },
    on: {
      input: function input($event) {
        return _vm.handleSimulationChange(true, "caracteristiques_credit.frais_dossier_facilite");
      }
    },
    model: {
      value: _vm.tmpSimulation.caracteristiques_credit.frais_dossier_facilite,
      callback: function callback($$v) {
        _vm.$set(_vm.tmpSimulation.caracteristiques_credit, "frais_dossier_facilite", $$v);
      },
      expression: "tmpSimulation.caracteristiques_credit.frais_dossier_facilite"
    }
  })], 1)]), _vm._v(" "), _c("tr", {
    staticClass: "as-table"
  }, [_c("td", {
    staticClass: "w-100",
    attrs: {
      colspan: "2"
    }
  }, [_c("SimCurrencyInput", {
    attrs: {
      label: "Assurance",
      disabled: _vm.disabled || _vm.viewOnly
    },
    on: {
      input: function input($event) {
        return _vm.handleSimulationChange(true, "caracteristiques_credit.assurance");
      }
    },
    model: {
      value: _vm.tmpSimulation.caracteristiques_credit.assurance,
      callback: function callback($$v) {
        _vm.$set(_vm.tmpSimulation.caracteristiques_credit, "assurance", $$v);
      },
      expression: "tmpSimulation.caracteristiques_credit.assurance"
    }
  })], 1)]), _vm._v(" "), _c("tr", {
    staticClass: "as-table"
  }, [_c("td", {
    staticClass: "w-100",
    attrs: {
      colspan: "2"
    }
  }, [_c("SimCurrencyInput", {
    attrs: {
      label: "Total",
      disabled: true
    },
    on: {
      input: function input($event) {
        return _vm.handleSimulationChange(true, "donnees_calculees.total");
      }
    },
    model: {
      value: _vm.tmpSimulation.donnees_calculees.total,
      callback: function callback($$v) {
        _vm.$set(_vm.tmpSimulation.donnees_calculees, "total", $$v);
      },
      expression: "tmpSimulation.donnees_calculees.total"
    }
  })], 1)]), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "text-right w-100",
    attrs: {
      colspan: "2"
    }
  }, [_c("span", {
    staticClass: "fw-bold"
  }, [_vm._v("Net à percevoir")]), _vm._v(" "), _c("span", {
    staticClass: "px-2 py-1",
    staticStyle: {
      "background-color": "yellow"
    }
  }, [_vm._v("\n          " + _vm._s(_vm._f("formatNumber")(_vm.tmpSimulation.donnees_calculees.net_a_percevoir)) + "\n        ")])])]), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "w-50",
    attrs: {
      colspan: "1"
    }
  }, [_c("SimCurrencyInput", {
    attrs: {
      label: "Paiement mensuel",
      disabled: true,
      disabledClass: "fw-bold"
    },
    on: {
      input: function input($event) {
        return _vm.handleSimulationChange(true, "donnees_calculees.paiement_mensuel");
      }
    },
    model: {
      value: _vm.tmpSimulation.donnees_calculees.paiement_mensuel,
      callback: function callback($$v) {
        _vm.$set(_vm.tmpSimulation.donnees_calculees, "paiement_mensuel", $$v);
      },
      expression: "tmpSimulation.donnees_calculees.paiement_mensuel"
    }
  })], 1), _vm._v(" "), _c("td", {
    staticClass: "w-50",
    attrs: {
      colspan: "1"
    }
  }, [_c("SimCurrencyInput", {
    attrs: {
      label: "Intérêt TTC",
      disabled: true,
      disabledClass: "fw-bold"
    },
    on: {
      input: function input($event) {
        return _vm.handleSimulationChange(true, "donnees_calculees.interet_ttc");
      }
    },
    model: {
      value: _vm.tmpSimulation.donnees_calculees.interet_ttc,
      callback: function callback($$v) {
        _vm.$set(_vm.tmpSimulation.donnees_calculees, "interet_ttc", $$v);
      },
      expression: "tmpSimulation.donnees_calculees.interet_ttc"
    }
  })], 1)]), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "w-50",
    attrs: {
      colspan: "1"
    }
  }, [_c("SimCurrencyInput", {
    attrs: {
      label: "Total Remboursé",
      disabled: true,
      disabledClass: "fw-bold"
    },
    on: {
      input: function input($event) {
        return _vm.handleSimulationChange(true, "donnees_calculees.total_rembourse");
      }
    },
    model: {
      value: _vm.tmpSimulation.donnees_calculees.total_rembourse,
      callback: function callback($$v) {
        _vm.$set(_vm.tmpSimulation.donnees_calculees, "total_rembourse", $$v);
      },
      expression: "tmpSimulation.donnees_calculees.total_rembourse"
    }
  })], 1), _vm._v(" "), _c("td", {
    staticClass: "w-50",
    attrs: {
      colspan: "1"
    }
  }, [_c("SimCurrencyInput", {
    attrs: {
      label: "Intérêt HT",
      disabled: true,
      disabledClass: "fw-bold"
    },
    on: {
      input: function input($event) {
        return _vm.handleSimulationChange(true, "donnees_calculees.interet_ht");
      }
    },
    model: {
      value: _vm.tmpSimulation.donnees_calculees.interet_ht,
      callback: function callback($$v) {
        _vm.$set(_vm.tmpSimulation.donnees_calculees, "interet_ht", $$v);
      },
      expression: "tmpSimulation.donnees_calculees.interet_ht"
    }
  })], 1)]), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "w-100",
    attrs: {
      colspan: "2"
    }
  }, [_vm.tamorComputationResult.is_success ? _c("TamorTable", {
    attrs: {
      table: _vm.tmpSimulation.tableau,
      totals: _vm.tamorComputationResult.totals
    }
  }) : _c("span", {
    staticClass: "tamor-error border"
  }, [_vm._v(_vm._s(_vm.tamorComputationResult.msg_traitment))])], 1)])]], 2);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("tr", [_c("td", {
    staticClass: "text-center fw-bold w-100",
    attrs: {
      colspan: "2"
    }
  }, [_vm._v("\n        TABLEAU D'AMORTISSEMENT INDICATIF\n      ")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/Simulateur/SimulatorHistory.vue?vue&type=template&id=33a515b2":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/Simulateur/SimulatorHistory.vue?vue&type=template&id=33a515b2 ***!
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
  return _c("div", [_vm.history.loading && !_vm.history.error ? _c("div", {
    staticClass: "text-center"
  }, [_vm._m(0)]) : _vm.history.error ? _c("ErrorRetry", {
    attrs: {
      error: _vm.history.error,
      retrying: _vm.history.loading
    },
    on: {
      retry: _vm.loadHistory
    }
  }) : !_vm.history.data.length ? _c("div", [_c("p", {
    staticClass: "text-center"
  }, [_vm._v("Aucune donnée disponible pour l'instant.")])]) : _c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-bordered table-hover align-middle"
  }, [_vm._m(1), _vm._v(" "), _c("tbody", _vm._l(_vm.history.data, function (item) {
    return _c("tr", {
      key: item.sim_pub_key
    }, [_c("td", {
      staticClass: "text-center"
    }, [_vm._v(_vm._s(_vm._f("formatDate")(item.created_at)))]), _vm._v(" "), _c("td", {
      staticClass: "text-center"
    }, [_vm._v(_vm._s(item.name))]), _vm._v(" "), _c("td", {
      staticClass: "text-end"
    }, [_vm._v(_vm._s(_vm._f("formatNumber")(item.caracteristiques_credit.montant_credit)))]), _vm._v(" "), _c("td", {
      staticClass: "text-center"
    }, [_c("button", {
      staticClass: "btn btn-outline-secondary btn-sm me-1",
      attrs: {
        title: "Charger cette simulation"
      },
      on: {
        click: function click($event) {
          return _vm.selectSimulation(item.sim_pub_key);
        }
      }
    }, [_c("i", {
      staticClass: "icofont-upload-alt"
    })]), _vm._v(" "), _vm.canDelete ? _c("button", {
      staticClass: "btn btn-outline-danger btn-sm",
      attrs: {
        title: "Supprimer cette simulation"
      },
      on: {
        click: function click($event) {
          return _vm.deleteSimulation(item.sim_pub_key);
        }
      }
    }, [_c("i", {
      staticClass: "icofont-trash"
    })]) : _vm._e()])]);
  }), 0)])])], 1);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "spinner-border text-deep-blue",
    attrs: {
      role: "status"
    }
  }, [_c("span", {
    staticClass: "visually-hidden"
  }, [_vm._v("Chargement...")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", {
    staticClass: "table-secondary"
  }, [_c("tr", {}, [_c("th", {
    staticClass: "text-center",
    attrs: {
      scope: "col"
    }
  }, [_vm._v("Date")]), _vm._v(" "), _c("th", {
    staticClass: "text-center",
    staticStyle: {
      "min-width": "200px"
    },
    attrs: {
      scope: "col"
    }
  }, [_vm._v("Nom")]), _vm._v(" "), _c("th", {
    staticClass: "text-end",
    attrs: {
      scope: "col"
    }
  }, [_vm._v("Montant du crédit")]), _vm._v(" "), _c("th", {
    staticClass: "text-center",
    attrs: {
      scope: "col"
    }
  }, [_vm._v("Actions")])])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/Simulateur/TamorTable.vue?vue&type=template&id=d0eba866&scoped=true":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/Simulateur/TamorTable.vue?vue&type=template&id=d0eba866&scoped=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm$totals, _vm$totals2, _vm$totals3, _vm$totals4, _vm$totals5;
  var _vm = this,
    _c = _vm._self._c;
  return _c("table", {
    staticClass: "tamor-table"
  }, [_vm._m(0), _vm._v(" "), _c("tbody", _vm._l(_vm.table, function (item, index) {
    return _c("tr", {
      key: index
    }, [_c("td", [_vm._v(_vm._s(item.no))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm._f("formatNumber")(item.balance_debut_period)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm._f("formatNumber")(item.balance_fin_period)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm._f("formatNumber")(item.principal_paye)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm._f("formatNumber")(item.interet_paye_ttc)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm._f("formatNumber")(item.interet_paye_ht)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm._f("formatNumber")(item.tva_sur_interet)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm._f("formatNumber")(item.montant_echeance)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm._f("formatDate")(item.date)))])]);
  }), 0), _vm._v(" "), _c("tfoot", {
    staticClass: "tamor-table-footer"
  }, [_c("tr", [_c("td"), _vm._v(" "), _c("td"), _vm._v(" "), _c("td"), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm._f("formatNumber")((_vm$totals = _vm.totals) === null || _vm$totals === void 0 ? void 0 : _vm$totals.principal_paye)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm._f("formatNumber")((_vm$totals2 = _vm.totals) === null || _vm$totals2 === void 0 ? void 0 : _vm$totals2.interet_paye_ttc)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm._f("formatNumber")((_vm$totals3 = _vm.totals) === null || _vm$totals3 === void 0 ? void 0 : _vm$totals3.interet_paye_ht)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm._f("formatNumber")((_vm$totals4 = _vm.totals) === null || _vm$totals4 === void 0 ? void 0 : _vm$totals4.tva_sur_interet)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm._f("formatNumber")((_vm$totals5 = _vm.totals) === null || _vm$totals5 === void 0 ? void 0 : _vm$totals5.montant_echeance)))]), _vm._v(" "), _c("td")])])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("th", [_vm._v("Pmt")]), _vm._v(" "), _c("th", [_vm._v("Balance Début Période")]), _vm._v(" "), _c("th", [_vm._v("Balance Fin Période")]), _vm._v(" "), _c("th", [_vm._v("Principal Payé")]), _vm._v(" "), _c("th", [_vm._v("Intérêts Payé TTC")]), _vm._v(" "), _c("th", [_vm._v("Intérêts Payé HT")]), _vm._v(" "), _c("th", [_vm._v("TVA sur Intérêts")]), _vm._v(" "), _c("th", [_vm._v("Montant de L'Échéance")]), _vm._v(" "), _c("th", [_vm._v("Année")])])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/cresco/DCPP-CS2.vue?vue&type=style&index=0&id=33c7319c&lang=css&scoped=true":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/cresco/DCPP-CS2.vue?vue&type=style&index=0&id=33c7319c&lang=css&scoped=true ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n*[data-v-33c7319c] {\r\n    font-family: \"Google sans\";\n}\nlabel[data-v-33c7319c] {\r\n    height: 10px;\r\n    font-size: 13px;\n}\ninput[data-v-33c7319c],\r\nselect[data-v-33c7319c] {\r\n    /* height: 35px; */\r\n    border-color: #34495e;\r\n    color: #57606f;\r\n    font-size: 13px;\r\n    font-weight: bold;\n}\n.th[data-v-33c7319c] {\r\n    padding: 4px;\r\n    padding-bottom: 0px;\n}\n.card-width-height[data-v-33c7319c] {\r\n    width: 100%;\r\n    height: 100%;\n}\n.head[data-v-33c7319c] {\r\n    color: #f1f2f6;\r\n    font-size: 22px;\n}\n.hdc[data-v-33c7319c] {\r\n    background-color: #57606f;\n}\n.relook-header[data-v-33c7319c] {\r\n    color: #000;\r\n    background-color: #f4f3f3;\r\n    padding: 5px;\r\n    border-bottom: 1px solid #b6b8bb;\n}\n.badge-sm[data-v-33c7319c] {\r\n    display: inline-block;\r\n    width: 15px;\r\n    height: 15px;\r\n    background: rgba(255, 0, 0, 0.882);\r\n    color: white;\r\n    font-size: 12px;\r\n    font-weight: 500;\r\n    border-radius: 100%;\r\n    position: absolute;\r\n    top: -20%;\r\n    left: 55%;\r\n    text-align: center;\n}\n.imageM22[data-v-33c7319c] {\r\n    background: url(\"/images/capture_cofina/exemple_source_revenus.png\") no-repeat;\r\n    background-position: center;\r\n    background-size: contain;\r\n    width: 1000px;\r\n    height: 200px;\n}\ntd[data-v-33c7319c],\r\np[data-v-33c7319c] {\r\n    font-size: 13px;\n}\n.relook-header[data-v-33c7319c] {\r\n    color: #000;\r\n    background-color: #f4f3f3;\r\n    padding: 5px;\r\n    border-bottom: 1px solid #b6b8bb;\n}\n.width-100[data-v-33c7319c] {\r\n    width: 90%;\n}\n.personne input[data-v-33c7319c] {\r\n    width: 135px;\n}\n._border_right[data-v-33c7319c] {\r\n    border-right: 1px solid;\n}\n.spinner-custom-input[data-v-33c7319c] {\r\n    --bs-spinner-width: 1rem;\r\n    --bs-spinner-height: 1rem;\r\n    --bs-spinner-border-width: 0.15em;\r\n    border: var(--bs-spinner-border-width) solid #ee6a00;\r\n    border-right-color: transparent;\r\n    position: absolute;\r\n    right: 13px;\n}\ninput[type=\"checkbox\"][data-v-33c7319c] {\r\n    height: 18px;\r\n    width: 20px;\r\n    margin-right: 5px;\n}\n.image1[data-v-33c7319c] {\r\n    background: url(\"/images/capture/exemples/demande_de_pret.png\") no-repeat;\r\n    background-position: center;\r\n    background-size: contain;\r\n\r\n    width: 500px;\r\n    height: 300px;\n}\n.math[data-v-33c7319c] {\r\n      font-size: 20px;\n}\r\n", ""]);
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

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/Simulateur/LoadSimulation.vue?vue&type=style&index=0&id=02d49562&scoped=true&lang=css":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/Simulateur/LoadSimulation.vue?vue&type=style&index=0&id=02d49562&scoped=true&lang=css ***!
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.mw-50[data-v-02d49562] {\r\n  max-width: 50%;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/Simulateur/SimCurrencyInput.vue?vue&type=style&index=0&id=d705b938&scoped=true&lang=css":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/Simulateur/SimCurrencyInput.vue?vue&type=style&index=0&id=d705b938&scoped=true&lang=css ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.sim-currency-input[data-v-d705b938] {\r\n  display: flex;\r\n  gap: 2rem;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  width: 100%;\n}\n.form-label[data-v-d705b938] {\r\n  min-width: -moz-max-content;\r\n  min-width: max-content;\r\n  padding: 0;\r\n  margin: 0;\n}\n.form-control[data-v-d705b938] {\r\n  width: 100%;\r\n  max-width: 300px;\r\n  flex-grow: 1;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/Simulateur/SimDateInput.vue?vue&type=style&index=0&id=8c6c3432&scoped=true&lang=css":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/Simulateur/SimDateInput.vue?vue&type=style&index=0&id=8c6c3432&scoped=true&lang=css ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.sim-date-input[data-v-8c6c3432] {\r\n  display: flex;\r\n  gap: 2rem;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  width: 100%;\n}\n.form-label[data-v-8c6c3432] {\r\n  min-width: -moz-max-content;\r\n  min-width: max-content;\r\n  padding: 0;\r\n  margin: 0;\n}\n.date-form-control[data-v-8c6c3432] {\r\n  width: 100%;\r\n  max-width: 300px;\r\n  flex-grow: 1;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/Simulateur/SimInput.vue?vue&type=style&index=0&id=521b9916&scoped=true&lang=css":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/Simulateur/SimInput.vue?vue&type=style&index=0&id=521b9916&scoped=true&lang=css ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.sim-input[data-v-521b9916] {\r\n  display: flex;\r\n  gap: 2rem;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  width: 100%;\n}\n.form-label[data-v-521b9916] {\r\n  min-width: -moz-max-content;\r\n  min-width: max-content;\r\n  padding: 0;\r\n  margin: 0;\n}\n.input-group[data-v-521b9916] {\r\n  width: 100%;\r\n  max-width: 300px;\r\n  flex-grow: 1;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/Simulateur/SimSelect.vue?vue&type=style&index=0&id=5499ade1&scoped=true&lang=css":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/Simulateur/SimSelect.vue?vue&type=style&index=0&id=5499ade1&scoped=true&lang=css ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.sim-select[data-v-5499ade1] {\r\n  display: flex;\r\n  gap: 2rem;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  width: 100%;\n}\n.form-label[data-v-5499ade1] {\r\n  min-width: -moz-max-content;\r\n  min-width: max-content;\r\n  padding: 0;\r\n  margin: 0;\n}\nselect.form-control[data-v-5499ade1] {\r\n  max-width: 300px;\r\n  width: 100%;\r\n  flex-grow: 1;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/Simulateur/SimulateurDeCredit.vue?vue&type=style&index=0&id=b8275906&scoped=true&lang=css":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/Simulateur/SimulateurDeCredit.vue?vue&type=style&index=0&id=b8275906&scoped=true&lang=css ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.sim-content[data-v-b8275906] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 100%;\r\n  height: 100%;\r\n  max-height: 80vh;\r\n  overflow-y: var(--b8275906-overflowY);\n}\n.sim-header[data-v-b8275906] {\r\n  width: 100%;\r\n  height: 50px;\r\n  position: sticky;\r\n  top: 0;\r\n  z-index: 5;\n}\n.sim-body[data-v-b8275906] {\r\n  width: 100%;\r\n  height: calc(100% - 50px);\r\n  overflow-y: var(--b8275906-overflowY);\r\n  padding: 0 0.5rem;\n}\n.sim-footer[data-v-b8275906] {\r\n  width: 100%;\r\n  height: 50px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: end;\r\n  align-items: end;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/Simulateur/SimulationActions.vue?vue&type=style&index=0&id=ad8c1ab8&scoped=true&lang=css":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/Simulateur/SimulationActions.vue?vue&type=style&index=0&id=ad8c1ab8&scoped=true&lang=css ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.head-opt-block-container[data-v-ad8c1ab8] {\r\n  /* position: sticky; */\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/Simulateur/Simulator.vue?vue&type=style&index=0&id=e92f7e9c&scoped=true&lang=css":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/Simulateur/Simulator.vue?vue&type=style&index=0&id=e92f7e9c&scoped=true&lang=css ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.sim-caption[data-v-e92f7e9c] {\r\n  padding: 0;\r\n  margin-bottom: 0.75rem;\r\n  border: none;\n}\n.sim-caption>*[data-v-e92f7e9c]:not(:last-child) {\r\n  margin-bottom: 0.75rem;\n}\n.caption-top[data-v-e92f7e9c] {\r\n  caption-side: top;\n}\n.sim-table td[data-v-e92f7e9c] {\r\n  border: var(--bs-border-width) var(--bs-border-style) var(--bs-border-color);\r\n  padding: 0.3125rem;\n}\n.w-50[data-v-e92f7e9c] {\r\n  width: 50%;\n}\n.w-33[data-v-e92f7e9c] {\r\n  width: 33%;\n}\n.as-table[data-v-e92f7e9c] {\r\n  border: none;\n}\n.as-table[data-v-e92f7e9c]:first-child {\r\n  border-top: var(--bs-border-width) var(--bs-border-style) var(--bs-border-color);\n}\n.as-table[data-v-e92f7e9c]:last-child {\r\n  border-bottom: var(--bs-border-width) var(--bs-border-style) var(--bs-border-color);\n}\n.as-table td[data-v-e92f7e9c] {\r\n  border: none;\r\n  padding: 0.3125rem;\n}\n.as-table td[data-v-e92f7e9c]:first-child {\r\n  border-left: var(--bs-border-width) var(--bs-border-style) var(--bs-border-color);\n}\n.as-table td[data-v-e92f7e9c]:last-child {\r\n  border-right: var(--bs-border-width) var(--bs-border-style) var(--bs-border-color);\n}\n.as-table td>*[data-v-e92f7e9c] {\r\n  padding: 0 0.5rem;\n}\n.tamor-error[data-v-e92f7e9c] {\r\n  color: red;\r\n  font-weight: bold;\r\n  text-align: center;\r\n  padding: 0.5rem;\r\n  display: block;\n}\n.fs-small[data-v-e92f7e9c] {\r\n  font-size: 0.875rem;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/Simulateur/TamorTable.vue?vue&type=style&index=0&id=d0eba866&scoped=true&lang=css":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/Simulateur/TamorTable.vue?vue&type=style&index=0&id=d0eba866&scoped=true&lang=css ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.tamor-table[data-v-d0eba866] {\r\n  width: 100%;\r\n  border-collapse: collapse;\r\n  text-align: right;\n}\n.tamor-table th[data-v-d0eba866],\r\n.tamor-table td[data-v-d0eba866] {\r\n  border: var(--bs-border-width) var(--bs-border-style) var(--bs-border-color);\r\n  padding: 0.3125rem;\n}\n.tamor-table-footer[data-v-d0eba866] {\r\n  background-color: #2c3e50;\r\n  color: #ffffff;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/cresco/DCPP-CS2.vue?vue&type=style&index=0&id=33c7319c&lang=css&scoped=true":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/cresco/DCPP-CS2.vue?vue&type=style&index=0&id=33c7319c&lang=css&scoped=true ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DCPP_CS2_vue_vue_type_style_index_0_id_33c7319c_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DCPP-CS2.vue?vue&type=style&index=0&id=33c7319c&lang=css&scoped=true */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/cresco/DCPP-CS2.vue?vue&type=style&index=0&id=33c7319c&lang=css&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DCPP_CS2_vue_vue_type_style_index_0_id_33c7319c_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DCPP_CS2_vue_vue_type_style_index_0_id_33c7319c_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

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

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/Simulateur/LoadSimulation.vue?vue&type=style&index=0&id=02d49562&scoped=true&lang=css":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/Simulateur/LoadSimulation.vue?vue&type=style&index=0&id=02d49562&scoped=true&lang=css ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadSimulation_vue_vue_type_style_index_0_id_02d49562_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./LoadSimulation.vue?vue&type=style&index=0&id=02d49562&scoped=true&lang=css */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/Simulateur/LoadSimulation.vue?vue&type=style&index=0&id=02d49562&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadSimulation_vue_vue_type_style_index_0_id_02d49562_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadSimulation_vue_vue_type_style_index_0_id_02d49562_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/Simulateur/SimCurrencyInput.vue?vue&type=style&index=0&id=d705b938&scoped=true&lang=css":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/Simulateur/SimCurrencyInput.vue?vue&type=style&index=0&id=d705b938&scoped=true&lang=css ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SimCurrencyInput_vue_vue_type_style_index_0_id_d705b938_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SimCurrencyInput.vue?vue&type=style&index=0&id=d705b938&scoped=true&lang=css */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/Simulateur/SimCurrencyInput.vue?vue&type=style&index=0&id=d705b938&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SimCurrencyInput_vue_vue_type_style_index_0_id_d705b938_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SimCurrencyInput_vue_vue_type_style_index_0_id_d705b938_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/Simulateur/SimDateInput.vue?vue&type=style&index=0&id=8c6c3432&scoped=true&lang=css":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/Simulateur/SimDateInput.vue?vue&type=style&index=0&id=8c6c3432&scoped=true&lang=css ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SimDateInput_vue_vue_type_style_index_0_id_8c6c3432_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SimDateInput.vue?vue&type=style&index=0&id=8c6c3432&scoped=true&lang=css */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/Simulateur/SimDateInput.vue?vue&type=style&index=0&id=8c6c3432&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SimDateInput_vue_vue_type_style_index_0_id_8c6c3432_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SimDateInput_vue_vue_type_style_index_0_id_8c6c3432_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/Simulateur/SimInput.vue?vue&type=style&index=0&id=521b9916&scoped=true&lang=css":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/Simulateur/SimInput.vue?vue&type=style&index=0&id=521b9916&scoped=true&lang=css ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SimInput_vue_vue_type_style_index_0_id_521b9916_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SimInput.vue?vue&type=style&index=0&id=521b9916&scoped=true&lang=css */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/Simulateur/SimInput.vue?vue&type=style&index=0&id=521b9916&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SimInput_vue_vue_type_style_index_0_id_521b9916_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SimInput_vue_vue_type_style_index_0_id_521b9916_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/Simulateur/SimSelect.vue?vue&type=style&index=0&id=5499ade1&scoped=true&lang=css":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/Simulateur/SimSelect.vue?vue&type=style&index=0&id=5499ade1&scoped=true&lang=css ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SimSelect_vue_vue_type_style_index_0_id_5499ade1_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SimSelect.vue?vue&type=style&index=0&id=5499ade1&scoped=true&lang=css */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/Simulateur/SimSelect.vue?vue&type=style&index=0&id=5499ade1&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SimSelect_vue_vue_type_style_index_0_id_5499ade1_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SimSelect_vue_vue_type_style_index_0_id_5499ade1_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/Simulateur/SimulateurDeCredit.vue?vue&type=style&index=0&id=b8275906&scoped=true&lang=css":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/Simulateur/SimulateurDeCredit.vue?vue&type=style&index=0&id=b8275906&scoped=true&lang=css ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SimulateurDeCredit_vue_vue_type_style_index_0_id_b8275906_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SimulateurDeCredit.vue?vue&type=style&index=0&id=b8275906&scoped=true&lang=css */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/Simulateur/SimulateurDeCredit.vue?vue&type=style&index=0&id=b8275906&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SimulateurDeCredit_vue_vue_type_style_index_0_id_b8275906_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SimulateurDeCredit_vue_vue_type_style_index_0_id_b8275906_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/Simulateur/SimulationActions.vue?vue&type=style&index=0&id=ad8c1ab8&scoped=true&lang=css":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/Simulateur/SimulationActions.vue?vue&type=style&index=0&id=ad8c1ab8&scoped=true&lang=css ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SimulationActions_vue_vue_type_style_index_0_id_ad8c1ab8_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SimulationActions.vue?vue&type=style&index=0&id=ad8c1ab8&scoped=true&lang=css */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/Simulateur/SimulationActions.vue?vue&type=style&index=0&id=ad8c1ab8&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SimulationActions_vue_vue_type_style_index_0_id_ad8c1ab8_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SimulationActions_vue_vue_type_style_index_0_id_ad8c1ab8_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/Simulateur/Simulator.vue?vue&type=style&index=0&id=e92f7e9c&scoped=true&lang=css":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/Simulateur/Simulator.vue?vue&type=style&index=0&id=e92f7e9c&scoped=true&lang=css ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Simulator_vue_vue_type_style_index_0_id_e92f7e9c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Simulator.vue?vue&type=style&index=0&id=e92f7e9c&scoped=true&lang=css */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/Simulateur/Simulator.vue?vue&type=style&index=0&id=e92f7e9c&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Simulator_vue_vue_type_style_index_0_id_e92f7e9c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Simulator_vue_vue_type_style_index_0_id_e92f7e9c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/Simulateur/TamorTable.vue?vue&type=style&index=0&id=d0eba866&scoped=true&lang=css":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/Simulateur/TamorTable.vue?vue&type=style&index=0&id=d0eba866&scoped=true&lang=css ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TamorTable_vue_vue_type_style_index_0_id_d0eba866_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TamorTable.vue?vue&type=style&index=0&id=d0eba866&scoped=true&lang=css */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/Simulateur/TamorTable.vue?vue&type=style&index=0&id=d0eba866&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TamorTable_vue_vue_type_style_index_0_id_d0eba866_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TamorTable_vue_vue_type_style_index_0_id_d0eba866_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/forms/afg/cresco/DCPP-CS2.vue":
/*!***************************************************************!*\
  !*** ./resources/js/components/forms/afg/cresco/DCPP-CS2.vue ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DCPP_CS2_vue_vue_type_template_id_33c7319c_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DCPP-CS2.vue?vue&type=template&id=33c7319c&scoped=true */ "./resources/js/components/forms/afg/cresco/DCPP-CS2.vue?vue&type=template&id=33c7319c&scoped=true");
/* harmony import */ var _DCPP_CS2_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DCPP-CS2.vue?vue&type=script&lang=js */ "./resources/js/components/forms/afg/cresco/DCPP-CS2.vue?vue&type=script&lang=js");
/* harmony import */ var _DCPP_CS2_vue_vue_type_style_index_0_id_33c7319c_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DCPP-CS2.vue?vue&type=style&index=0&id=33c7319c&lang=css&scoped=true */ "./resources/js/components/forms/afg/cresco/DCPP-CS2.vue?vue&type=style&index=0&id=33c7319c&lang=css&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _DCPP_CS2_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _DCPP_CS2_vue_vue_type_template_id_33c7319c_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _DCPP_CS2_vue_vue_type_template_id_33c7319c_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "33c7319c",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/forms/afg/cresco/DCPP-CS2.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/forms/afg/cresco/DCPP-CS2.vue?vue&type=script&lang=js":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/forms/afg/cresco/DCPP-CS2.vue?vue&type=script&lang=js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DCPP_CS2_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DCPP-CS2.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/cresco/DCPP-CS2.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DCPP_CS2_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/forms/afg/cresco/DCPP-CS2.vue?vue&type=style&index=0&id=33c7319c&lang=css&scoped=true":
/*!***********************************************************************************************************************!*\
  !*** ./resources/js/components/forms/afg/cresco/DCPP-CS2.vue?vue&type=style&index=0&id=33c7319c&lang=css&scoped=true ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DCPP_CS2_vue_vue_type_style_index_0_id_33c7319c_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DCPP-CS2.vue?vue&type=style&index=0&id=33c7319c&lang=css&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/cresco/DCPP-CS2.vue?vue&type=style&index=0&id=33c7319c&lang=css&scoped=true");


/***/ }),

/***/ "./resources/js/components/forms/afg/cresco/DCPP-CS2.vue?vue&type=template&id=33c7319c&scoped=true":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/components/forms/afg/cresco/DCPP-CS2.vue?vue&type=template&id=33c7319c&scoped=true ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DCPP_CS2_vue_vue_type_template_id_33c7319c_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DCPP_CS2_vue_vue_type_template_id_33c7319c_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DCPP_CS2_vue_vue_type_template_id_33c7319c_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DCPP-CS2.vue?vue&type=template&id=33c7319c&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/cresco/DCPP-CS2.vue?vue&type=template&id=33c7319c&scoped=true");


/***/ }),

/***/ "./resources/js/components/shared/ErrorRetry.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/shared/ErrorRetry.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ErrorRetry_vue_vue_type_template_id_366ecdcf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ErrorRetry.vue?vue&type=template&id=366ecdcf */ "./resources/js/components/shared/ErrorRetry.vue?vue&type=template&id=366ecdcf");
/* harmony import */ var _ErrorRetry_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ErrorRetry.vue?vue&type=script&lang=js */ "./resources/js/components/shared/ErrorRetry.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ErrorRetry_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _ErrorRetry_vue_vue_type_template_id_366ecdcf__WEBPACK_IMPORTED_MODULE_0__.render,
  _ErrorRetry_vue_vue_type_template_id_366ecdcf__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/shared/ErrorRetry.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/shared/ErrorRetry.vue?vue&type=script&lang=js":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/shared/ErrorRetry.vue?vue&type=script&lang=js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ErrorRetry_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ErrorRetry.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/ErrorRetry.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ErrorRetry_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/shared/ErrorRetry.vue?vue&type=template&id=366ecdcf":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/shared/ErrorRetry.vue?vue&type=template&id=366ecdcf ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ErrorRetry_vue_vue_type_template_id_366ecdcf__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ErrorRetry_vue_vue_type_template_id_366ecdcf__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ErrorRetry_vue_vue_type_template_id_366ecdcf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ErrorRetry.vue?vue&type=template&id=366ecdcf */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/ErrorRetry.vue?vue&type=template&id=366ecdcf");


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

/***/ "./resources/js/components/shared/afg/Simulateur/LoadSimulation.vue":
/*!**************************************************************************!*\
  !*** ./resources/js/components/shared/afg/Simulateur/LoadSimulation.vue ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _LoadSimulation_vue_vue_type_template_id_02d49562_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LoadSimulation.vue?vue&type=template&id=02d49562&scoped=true */ "./resources/js/components/shared/afg/Simulateur/LoadSimulation.vue?vue&type=template&id=02d49562&scoped=true");
/* harmony import */ var _LoadSimulation_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LoadSimulation.vue?vue&type=script&lang=js */ "./resources/js/components/shared/afg/Simulateur/LoadSimulation.vue?vue&type=script&lang=js");
/* harmony import */ var _LoadSimulation_vue_vue_type_style_index_0_id_02d49562_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LoadSimulation.vue?vue&type=style&index=0&id=02d49562&scoped=true&lang=css */ "./resources/js/components/shared/afg/Simulateur/LoadSimulation.vue?vue&type=style&index=0&id=02d49562&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _LoadSimulation_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _LoadSimulation_vue_vue_type_template_id_02d49562_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _LoadSimulation_vue_vue_type_template_id_02d49562_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "02d49562",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/shared/afg/Simulateur/LoadSimulation.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/shared/afg/Simulateur/LoadSimulation.vue?vue&type=script&lang=js":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/shared/afg/Simulateur/LoadSimulation.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadSimulation_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./LoadSimulation.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/Simulateur/LoadSimulation.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadSimulation_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/shared/afg/Simulateur/LoadSimulation.vue?vue&type=style&index=0&id=02d49562&scoped=true&lang=css":
/*!**********************************************************************************************************************************!*\
  !*** ./resources/js/components/shared/afg/Simulateur/LoadSimulation.vue?vue&type=style&index=0&id=02d49562&scoped=true&lang=css ***!
  \**********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadSimulation_vue_vue_type_style_index_0_id_02d49562_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./LoadSimulation.vue?vue&type=style&index=0&id=02d49562&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/Simulateur/LoadSimulation.vue?vue&type=style&index=0&id=02d49562&scoped=true&lang=css");


/***/ }),

/***/ "./resources/js/components/shared/afg/Simulateur/LoadSimulation.vue?vue&type=template&id=02d49562&scoped=true":
/*!********************************************************************************************************************!*\
  !*** ./resources/js/components/shared/afg/Simulateur/LoadSimulation.vue?vue&type=template&id=02d49562&scoped=true ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadSimulation_vue_vue_type_template_id_02d49562_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadSimulation_vue_vue_type_template_id_02d49562_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadSimulation_vue_vue_type_template_id_02d49562_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./LoadSimulation.vue?vue&type=template&id=02d49562&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/Simulateur/LoadSimulation.vue?vue&type=template&id=02d49562&scoped=true");


/***/ }),

/***/ "./resources/js/components/shared/afg/Simulateur/SimCurrencyInput.vue":
/*!****************************************************************************!*\
  !*** ./resources/js/components/shared/afg/Simulateur/SimCurrencyInput.vue ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SimCurrencyInput_vue_vue_type_template_id_d705b938_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SimCurrencyInput.vue?vue&type=template&id=d705b938&scoped=true */ "./resources/js/components/shared/afg/Simulateur/SimCurrencyInput.vue?vue&type=template&id=d705b938&scoped=true");
/* harmony import */ var _SimCurrencyInput_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SimCurrencyInput.vue?vue&type=script&lang=js */ "./resources/js/components/shared/afg/Simulateur/SimCurrencyInput.vue?vue&type=script&lang=js");
/* harmony import */ var _SimCurrencyInput_vue_vue_type_style_index_0_id_d705b938_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SimCurrencyInput.vue?vue&type=style&index=0&id=d705b938&scoped=true&lang=css */ "./resources/js/components/shared/afg/Simulateur/SimCurrencyInput.vue?vue&type=style&index=0&id=d705b938&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _SimCurrencyInput_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _SimCurrencyInput_vue_vue_type_template_id_d705b938_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _SimCurrencyInput_vue_vue_type_template_id_d705b938_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "d705b938",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/shared/afg/Simulateur/SimCurrencyInput.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/shared/afg/Simulateur/SimCurrencyInput.vue?vue&type=script&lang=js":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/shared/afg/Simulateur/SimCurrencyInput.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SimCurrencyInput_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SimCurrencyInput.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/Simulateur/SimCurrencyInput.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SimCurrencyInput_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/shared/afg/Simulateur/SimCurrencyInput.vue?vue&type=style&index=0&id=d705b938&scoped=true&lang=css":
/*!************************************************************************************************************************************!*\
  !*** ./resources/js/components/shared/afg/Simulateur/SimCurrencyInput.vue?vue&type=style&index=0&id=d705b938&scoped=true&lang=css ***!
  \************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SimCurrencyInput_vue_vue_type_style_index_0_id_d705b938_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SimCurrencyInput.vue?vue&type=style&index=0&id=d705b938&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/Simulateur/SimCurrencyInput.vue?vue&type=style&index=0&id=d705b938&scoped=true&lang=css");


/***/ }),

/***/ "./resources/js/components/shared/afg/Simulateur/SimCurrencyInput.vue?vue&type=template&id=d705b938&scoped=true":
/*!**********************************************************************************************************************!*\
  !*** ./resources/js/components/shared/afg/Simulateur/SimCurrencyInput.vue?vue&type=template&id=d705b938&scoped=true ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SimCurrencyInput_vue_vue_type_template_id_d705b938_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SimCurrencyInput_vue_vue_type_template_id_d705b938_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SimCurrencyInput_vue_vue_type_template_id_d705b938_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SimCurrencyInput.vue?vue&type=template&id=d705b938&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/Simulateur/SimCurrencyInput.vue?vue&type=template&id=d705b938&scoped=true");


/***/ }),

/***/ "./resources/js/components/shared/afg/Simulateur/SimDateInput.vue":
/*!************************************************************************!*\
  !*** ./resources/js/components/shared/afg/Simulateur/SimDateInput.vue ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SimDateInput_vue_vue_type_template_id_8c6c3432_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SimDateInput.vue?vue&type=template&id=8c6c3432&scoped=true */ "./resources/js/components/shared/afg/Simulateur/SimDateInput.vue?vue&type=template&id=8c6c3432&scoped=true");
/* harmony import */ var _SimDateInput_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SimDateInput.vue?vue&type=script&lang=js */ "./resources/js/components/shared/afg/Simulateur/SimDateInput.vue?vue&type=script&lang=js");
/* harmony import */ var _SimDateInput_vue_vue_type_style_index_0_id_8c6c3432_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SimDateInput.vue?vue&type=style&index=0&id=8c6c3432&scoped=true&lang=css */ "./resources/js/components/shared/afg/Simulateur/SimDateInput.vue?vue&type=style&index=0&id=8c6c3432&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _SimDateInput_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _SimDateInput_vue_vue_type_template_id_8c6c3432_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _SimDateInput_vue_vue_type_template_id_8c6c3432_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "8c6c3432",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/shared/afg/Simulateur/SimDateInput.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/shared/afg/Simulateur/SimDateInput.vue?vue&type=script&lang=js":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/shared/afg/Simulateur/SimDateInput.vue?vue&type=script&lang=js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SimDateInput_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SimDateInput.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/Simulateur/SimDateInput.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SimDateInput_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/shared/afg/Simulateur/SimDateInput.vue?vue&type=style&index=0&id=8c6c3432&scoped=true&lang=css":
/*!********************************************************************************************************************************!*\
  !*** ./resources/js/components/shared/afg/Simulateur/SimDateInput.vue?vue&type=style&index=0&id=8c6c3432&scoped=true&lang=css ***!
  \********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SimDateInput_vue_vue_type_style_index_0_id_8c6c3432_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SimDateInput.vue?vue&type=style&index=0&id=8c6c3432&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/Simulateur/SimDateInput.vue?vue&type=style&index=0&id=8c6c3432&scoped=true&lang=css");


/***/ }),

/***/ "./resources/js/components/shared/afg/Simulateur/SimDateInput.vue?vue&type=template&id=8c6c3432&scoped=true":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/components/shared/afg/Simulateur/SimDateInput.vue?vue&type=template&id=8c6c3432&scoped=true ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SimDateInput_vue_vue_type_template_id_8c6c3432_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SimDateInput_vue_vue_type_template_id_8c6c3432_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SimDateInput_vue_vue_type_template_id_8c6c3432_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SimDateInput.vue?vue&type=template&id=8c6c3432&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/Simulateur/SimDateInput.vue?vue&type=template&id=8c6c3432&scoped=true");


/***/ }),

/***/ "./resources/js/components/shared/afg/Simulateur/SimInput.vue":
/*!********************************************************************!*\
  !*** ./resources/js/components/shared/afg/Simulateur/SimInput.vue ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SimInput_vue_vue_type_template_id_521b9916_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SimInput.vue?vue&type=template&id=521b9916&scoped=true */ "./resources/js/components/shared/afg/Simulateur/SimInput.vue?vue&type=template&id=521b9916&scoped=true");
/* harmony import */ var _SimInput_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SimInput.vue?vue&type=script&lang=js */ "./resources/js/components/shared/afg/Simulateur/SimInput.vue?vue&type=script&lang=js");
/* harmony import */ var _SimInput_vue_vue_type_style_index_0_id_521b9916_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SimInput.vue?vue&type=style&index=0&id=521b9916&scoped=true&lang=css */ "./resources/js/components/shared/afg/Simulateur/SimInput.vue?vue&type=style&index=0&id=521b9916&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _SimInput_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _SimInput_vue_vue_type_template_id_521b9916_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _SimInput_vue_vue_type_template_id_521b9916_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "521b9916",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/shared/afg/Simulateur/SimInput.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/shared/afg/Simulateur/SimInput.vue?vue&type=script&lang=js":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/shared/afg/Simulateur/SimInput.vue?vue&type=script&lang=js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SimInput_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SimInput.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/Simulateur/SimInput.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SimInput_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/shared/afg/Simulateur/SimInput.vue?vue&type=style&index=0&id=521b9916&scoped=true&lang=css":
/*!****************************************************************************************************************************!*\
  !*** ./resources/js/components/shared/afg/Simulateur/SimInput.vue?vue&type=style&index=0&id=521b9916&scoped=true&lang=css ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SimInput_vue_vue_type_style_index_0_id_521b9916_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SimInput.vue?vue&type=style&index=0&id=521b9916&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/Simulateur/SimInput.vue?vue&type=style&index=0&id=521b9916&scoped=true&lang=css");


/***/ }),

/***/ "./resources/js/components/shared/afg/Simulateur/SimInput.vue?vue&type=template&id=521b9916&scoped=true":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/components/shared/afg/Simulateur/SimInput.vue?vue&type=template&id=521b9916&scoped=true ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SimInput_vue_vue_type_template_id_521b9916_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SimInput_vue_vue_type_template_id_521b9916_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SimInput_vue_vue_type_template_id_521b9916_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SimInput.vue?vue&type=template&id=521b9916&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/Simulateur/SimInput.vue?vue&type=template&id=521b9916&scoped=true");


/***/ }),

/***/ "./resources/js/components/shared/afg/Simulateur/SimSelect.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/components/shared/afg/Simulateur/SimSelect.vue ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SimSelect_vue_vue_type_template_id_5499ade1_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SimSelect.vue?vue&type=template&id=5499ade1&scoped=true */ "./resources/js/components/shared/afg/Simulateur/SimSelect.vue?vue&type=template&id=5499ade1&scoped=true");
/* harmony import */ var _SimSelect_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SimSelect.vue?vue&type=script&lang=js */ "./resources/js/components/shared/afg/Simulateur/SimSelect.vue?vue&type=script&lang=js");
/* harmony import */ var _SimSelect_vue_vue_type_style_index_0_id_5499ade1_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SimSelect.vue?vue&type=style&index=0&id=5499ade1&scoped=true&lang=css */ "./resources/js/components/shared/afg/Simulateur/SimSelect.vue?vue&type=style&index=0&id=5499ade1&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _SimSelect_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _SimSelect_vue_vue_type_template_id_5499ade1_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _SimSelect_vue_vue_type_template_id_5499ade1_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "5499ade1",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/shared/afg/Simulateur/SimSelect.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/shared/afg/Simulateur/SimSelect.vue?vue&type=script&lang=js":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/shared/afg/Simulateur/SimSelect.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SimSelect_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SimSelect.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/Simulateur/SimSelect.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SimSelect_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/shared/afg/Simulateur/SimSelect.vue?vue&type=style&index=0&id=5499ade1&scoped=true&lang=css":
/*!*****************************************************************************************************************************!*\
  !*** ./resources/js/components/shared/afg/Simulateur/SimSelect.vue?vue&type=style&index=0&id=5499ade1&scoped=true&lang=css ***!
  \*****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SimSelect_vue_vue_type_style_index_0_id_5499ade1_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SimSelect.vue?vue&type=style&index=0&id=5499ade1&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/Simulateur/SimSelect.vue?vue&type=style&index=0&id=5499ade1&scoped=true&lang=css");


/***/ }),

/***/ "./resources/js/components/shared/afg/Simulateur/SimSelect.vue?vue&type=template&id=5499ade1&scoped=true":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/components/shared/afg/Simulateur/SimSelect.vue?vue&type=template&id=5499ade1&scoped=true ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SimSelect_vue_vue_type_template_id_5499ade1_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SimSelect_vue_vue_type_template_id_5499ade1_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SimSelect_vue_vue_type_template_id_5499ade1_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SimSelect.vue?vue&type=template&id=5499ade1&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/Simulateur/SimSelect.vue?vue&type=template&id=5499ade1&scoped=true");


/***/ }),

/***/ "./resources/js/components/shared/afg/Simulateur/SimulateurDeCredit.vue":
/*!******************************************************************************!*\
  !*** ./resources/js/components/shared/afg/Simulateur/SimulateurDeCredit.vue ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SimulateurDeCredit_vue_vue_type_template_id_b8275906_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SimulateurDeCredit.vue?vue&type=template&id=b8275906&scoped=true */ "./resources/js/components/shared/afg/Simulateur/SimulateurDeCredit.vue?vue&type=template&id=b8275906&scoped=true");
/* harmony import */ var _SimulateurDeCredit_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SimulateurDeCredit.vue?vue&type=script&lang=js */ "./resources/js/components/shared/afg/Simulateur/SimulateurDeCredit.vue?vue&type=script&lang=js");
/* harmony import */ var _SimulateurDeCredit_vue_vue_type_style_index_0_id_b8275906_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SimulateurDeCredit.vue?vue&type=style&index=0&id=b8275906&scoped=true&lang=css */ "./resources/js/components/shared/afg/Simulateur/SimulateurDeCredit.vue?vue&type=style&index=0&id=b8275906&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _SimulateurDeCredit_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _SimulateurDeCredit_vue_vue_type_template_id_b8275906_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _SimulateurDeCredit_vue_vue_type_template_id_b8275906_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "b8275906",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/shared/afg/Simulateur/SimulateurDeCredit.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/shared/afg/Simulateur/SimulateurDeCredit.vue?vue&type=script&lang=js":
/*!******************************************************************************************************!*\
  !*** ./resources/js/components/shared/afg/Simulateur/SimulateurDeCredit.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SimulateurDeCredit_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SimulateurDeCredit.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/Simulateur/SimulateurDeCredit.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SimulateurDeCredit_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/shared/afg/Simulateur/SimulateurDeCredit.vue?vue&type=style&index=0&id=b8275906&scoped=true&lang=css":
/*!**************************************************************************************************************************************!*\
  !*** ./resources/js/components/shared/afg/Simulateur/SimulateurDeCredit.vue?vue&type=style&index=0&id=b8275906&scoped=true&lang=css ***!
  \**************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SimulateurDeCredit_vue_vue_type_style_index_0_id_b8275906_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SimulateurDeCredit.vue?vue&type=style&index=0&id=b8275906&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/Simulateur/SimulateurDeCredit.vue?vue&type=style&index=0&id=b8275906&scoped=true&lang=css");


/***/ }),

/***/ "./resources/js/components/shared/afg/Simulateur/SimulateurDeCredit.vue?vue&type=template&id=b8275906&scoped=true":
/*!************************************************************************************************************************!*\
  !*** ./resources/js/components/shared/afg/Simulateur/SimulateurDeCredit.vue?vue&type=template&id=b8275906&scoped=true ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SimulateurDeCredit_vue_vue_type_template_id_b8275906_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SimulateurDeCredit_vue_vue_type_template_id_b8275906_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SimulateurDeCredit_vue_vue_type_template_id_b8275906_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SimulateurDeCredit.vue?vue&type=template&id=b8275906&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/Simulateur/SimulateurDeCredit.vue?vue&type=template&id=b8275906&scoped=true");


/***/ }),

/***/ "./resources/js/components/shared/afg/Simulateur/SimulationActions.vue":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/shared/afg/Simulateur/SimulationActions.vue ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SimulationActions_vue_vue_type_template_id_ad8c1ab8_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SimulationActions.vue?vue&type=template&id=ad8c1ab8&scoped=true */ "./resources/js/components/shared/afg/Simulateur/SimulationActions.vue?vue&type=template&id=ad8c1ab8&scoped=true");
/* harmony import */ var _SimulationActions_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SimulationActions.vue?vue&type=script&lang=js */ "./resources/js/components/shared/afg/Simulateur/SimulationActions.vue?vue&type=script&lang=js");
/* harmony import */ var _SimulationActions_vue_vue_type_style_index_0_id_ad8c1ab8_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SimulationActions.vue?vue&type=style&index=0&id=ad8c1ab8&scoped=true&lang=css */ "./resources/js/components/shared/afg/Simulateur/SimulationActions.vue?vue&type=style&index=0&id=ad8c1ab8&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _SimulationActions_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _SimulationActions_vue_vue_type_template_id_ad8c1ab8_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _SimulationActions_vue_vue_type_template_id_ad8c1ab8_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "ad8c1ab8",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/shared/afg/Simulateur/SimulationActions.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/shared/afg/Simulateur/SimulationActions.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/shared/afg/Simulateur/SimulationActions.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SimulationActions_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SimulationActions.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/Simulateur/SimulationActions.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SimulationActions_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/shared/afg/Simulateur/SimulationActions.vue?vue&type=style&index=0&id=ad8c1ab8&scoped=true&lang=css":
/*!*************************************************************************************************************************************!*\
  !*** ./resources/js/components/shared/afg/Simulateur/SimulationActions.vue?vue&type=style&index=0&id=ad8c1ab8&scoped=true&lang=css ***!
  \*************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SimulationActions_vue_vue_type_style_index_0_id_ad8c1ab8_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SimulationActions.vue?vue&type=style&index=0&id=ad8c1ab8&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/Simulateur/SimulationActions.vue?vue&type=style&index=0&id=ad8c1ab8&scoped=true&lang=css");


/***/ }),

/***/ "./resources/js/components/shared/afg/Simulateur/SimulationActions.vue?vue&type=template&id=ad8c1ab8&scoped=true":
/*!***********************************************************************************************************************!*\
  !*** ./resources/js/components/shared/afg/Simulateur/SimulationActions.vue?vue&type=template&id=ad8c1ab8&scoped=true ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SimulationActions_vue_vue_type_template_id_ad8c1ab8_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SimulationActions_vue_vue_type_template_id_ad8c1ab8_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SimulationActions_vue_vue_type_template_id_ad8c1ab8_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SimulationActions.vue?vue&type=template&id=ad8c1ab8&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/Simulateur/SimulationActions.vue?vue&type=template&id=ad8c1ab8&scoped=true");


/***/ }),

/***/ "./resources/js/components/shared/afg/Simulateur/SimulationActionsBtn.vue":
/*!********************************************************************************!*\
  !*** ./resources/js/components/shared/afg/Simulateur/SimulationActionsBtn.vue ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SimulationActionsBtn_vue_vue_type_template_id_2c8c6f48_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SimulationActionsBtn.vue?vue&type=template&id=2c8c6f48&scoped=true */ "./resources/js/components/shared/afg/Simulateur/SimulationActionsBtn.vue?vue&type=template&id=2c8c6f48&scoped=true");
/* harmony import */ var _SimulationActionsBtn_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SimulationActionsBtn.vue?vue&type=script&lang=js */ "./resources/js/components/shared/afg/Simulateur/SimulationActionsBtn.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SimulationActionsBtn_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _SimulationActionsBtn_vue_vue_type_template_id_2c8c6f48_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _SimulationActionsBtn_vue_vue_type_template_id_2c8c6f48_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "2c8c6f48",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/shared/afg/Simulateur/SimulationActionsBtn.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/shared/afg/Simulateur/SimulationActionsBtn.vue?vue&type=script&lang=js":
/*!********************************************************************************************************!*\
  !*** ./resources/js/components/shared/afg/Simulateur/SimulationActionsBtn.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SimulationActionsBtn_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SimulationActionsBtn.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/Simulateur/SimulationActionsBtn.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SimulationActionsBtn_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/shared/afg/Simulateur/SimulationActionsBtn.vue?vue&type=template&id=2c8c6f48&scoped=true":
/*!**************************************************************************************************************************!*\
  !*** ./resources/js/components/shared/afg/Simulateur/SimulationActionsBtn.vue?vue&type=template&id=2c8c6f48&scoped=true ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SimulationActionsBtn_vue_vue_type_template_id_2c8c6f48_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SimulationActionsBtn_vue_vue_type_template_id_2c8c6f48_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SimulationActionsBtn_vue_vue_type_template_id_2c8c6f48_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SimulationActionsBtn.vue?vue&type=template&id=2c8c6f48&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/Simulateur/SimulationActionsBtn.vue?vue&type=template&id=2c8c6f48&scoped=true");


/***/ }),

/***/ "./resources/js/components/shared/afg/Simulateur/Simulator.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/components/shared/afg/Simulateur/Simulator.vue ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Simulator_vue_vue_type_template_id_e92f7e9c_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Simulator.vue?vue&type=template&id=e92f7e9c&scoped=true */ "./resources/js/components/shared/afg/Simulateur/Simulator.vue?vue&type=template&id=e92f7e9c&scoped=true");
/* harmony import */ var _Simulator_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Simulator.vue?vue&type=script&lang=js */ "./resources/js/components/shared/afg/Simulateur/Simulator.vue?vue&type=script&lang=js");
/* harmony import */ var _Simulator_vue_vue_type_style_index_0_id_e92f7e9c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Simulator.vue?vue&type=style&index=0&id=e92f7e9c&scoped=true&lang=css */ "./resources/js/components/shared/afg/Simulateur/Simulator.vue?vue&type=style&index=0&id=e92f7e9c&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Simulator_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Simulator_vue_vue_type_template_id_e92f7e9c_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _Simulator_vue_vue_type_template_id_e92f7e9c_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "e92f7e9c",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/shared/afg/Simulateur/Simulator.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/shared/afg/Simulateur/Simulator.vue?vue&type=script&lang=js":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/shared/afg/Simulateur/Simulator.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Simulator_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Simulator.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/Simulateur/Simulator.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Simulator_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/shared/afg/Simulateur/Simulator.vue?vue&type=style&index=0&id=e92f7e9c&scoped=true&lang=css":
/*!*****************************************************************************************************************************!*\
  !*** ./resources/js/components/shared/afg/Simulateur/Simulator.vue?vue&type=style&index=0&id=e92f7e9c&scoped=true&lang=css ***!
  \*****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Simulator_vue_vue_type_style_index_0_id_e92f7e9c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Simulator.vue?vue&type=style&index=0&id=e92f7e9c&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/Simulateur/Simulator.vue?vue&type=style&index=0&id=e92f7e9c&scoped=true&lang=css");


/***/ }),

/***/ "./resources/js/components/shared/afg/Simulateur/Simulator.vue?vue&type=template&id=e92f7e9c&scoped=true":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/components/shared/afg/Simulateur/Simulator.vue?vue&type=template&id=e92f7e9c&scoped=true ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Simulator_vue_vue_type_template_id_e92f7e9c_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Simulator_vue_vue_type_template_id_e92f7e9c_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Simulator_vue_vue_type_template_id_e92f7e9c_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Simulator.vue?vue&type=template&id=e92f7e9c&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/Simulateur/Simulator.vue?vue&type=template&id=e92f7e9c&scoped=true");


/***/ }),

/***/ "./resources/js/components/shared/afg/Simulateur/SimulatorHistory.vue":
/*!****************************************************************************!*\
  !*** ./resources/js/components/shared/afg/Simulateur/SimulatorHistory.vue ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SimulatorHistory_vue_vue_type_template_id_33a515b2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SimulatorHistory.vue?vue&type=template&id=33a515b2 */ "./resources/js/components/shared/afg/Simulateur/SimulatorHistory.vue?vue&type=template&id=33a515b2");
/* harmony import */ var _SimulatorHistory_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SimulatorHistory.vue?vue&type=script&lang=js */ "./resources/js/components/shared/afg/Simulateur/SimulatorHistory.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SimulatorHistory_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _SimulatorHistory_vue_vue_type_template_id_33a515b2__WEBPACK_IMPORTED_MODULE_0__.render,
  _SimulatorHistory_vue_vue_type_template_id_33a515b2__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/shared/afg/Simulateur/SimulatorHistory.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/shared/afg/Simulateur/SimulatorHistory.vue?vue&type=script&lang=js":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/shared/afg/Simulateur/SimulatorHistory.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SimulatorHistory_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SimulatorHistory.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/Simulateur/SimulatorHistory.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SimulatorHistory_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/shared/afg/Simulateur/SimulatorHistory.vue?vue&type=template&id=33a515b2":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/components/shared/afg/Simulateur/SimulatorHistory.vue?vue&type=template&id=33a515b2 ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SimulatorHistory_vue_vue_type_template_id_33a515b2__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SimulatorHistory_vue_vue_type_template_id_33a515b2__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SimulatorHistory_vue_vue_type_template_id_33a515b2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SimulatorHistory.vue?vue&type=template&id=33a515b2 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/Simulateur/SimulatorHistory.vue?vue&type=template&id=33a515b2");


/***/ }),

/***/ "./resources/js/components/shared/afg/Simulateur/TamorTable.vue":
/*!**********************************************************************!*\
  !*** ./resources/js/components/shared/afg/Simulateur/TamorTable.vue ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TamorTable_vue_vue_type_template_id_d0eba866_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TamorTable.vue?vue&type=template&id=d0eba866&scoped=true */ "./resources/js/components/shared/afg/Simulateur/TamorTable.vue?vue&type=template&id=d0eba866&scoped=true");
/* harmony import */ var _TamorTable_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TamorTable.vue?vue&type=script&lang=js */ "./resources/js/components/shared/afg/Simulateur/TamorTable.vue?vue&type=script&lang=js");
/* harmony import */ var _TamorTable_vue_vue_type_style_index_0_id_d0eba866_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TamorTable.vue?vue&type=style&index=0&id=d0eba866&scoped=true&lang=css */ "./resources/js/components/shared/afg/Simulateur/TamorTable.vue?vue&type=style&index=0&id=d0eba866&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _TamorTable_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _TamorTable_vue_vue_type_template_id_d0eba866_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _TamorTable_vue_vue_type_template_id_d0eba866_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "d0eba866",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/shared/afg/Simulateur/TamorTable.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/shared/afg/Simulateur/TamorTable.vue?vue&type=script&lang=js":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/shared/afg/Simulateur/TamorTable.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TamorTable_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TamorTable.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/Simulateur/TamorTable.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TamorTable_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/shared/afg/Simulateur/TamorTable.vue?vue&type=style&index=0&id=d0eba866&scoped=true&lang=css":
/*!******************************************************************************************************************************!*\
  !*** ./resources/js/components/shared/afg/Simulateur/TamorTable.vue?vue&type=style&index=0&id=d0eba866&scoped=true&lang=css ***!
  \******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TamorTable_vue_vue_type_style_index_0_id_d0eba866_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TamorTable.vue?vue&type=style&index=0&id=d0eba866&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/Simulateur/TamorTable.vue?vue&type=style&index=0&id=d0eba866&scoped=true&lang=css");


/***/ }),

/***/ "./resources/js/components/shared/afg/Simulateur/TamorTable.vue?vue&type=template&id=d0eba866&scoped=true":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/components/shared/afg/Simulateur/TamorTable.vue?vue&type=template&id=d0eba866&scoped=true ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TamorTable_vue_vue_type_template_id_d0eba866_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TamorTable_vue_vue_type_template_id_d0eba866_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TamorTable_vue_vue_type_template_id_d0eba866_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TamorTable.vue?vue&type=template&id=d0eba866&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/Simulateur/TamorTable.vue?vue&type=template&id=d0eba866&scoped=true");


/***/ }),

/***/ "./resources/js/services/afg/amortissement.js":
/*!****************************************************!*\
  !*** ./resources/js/services/afg/amortissement.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AmortissementManager)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/format/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/addMonths/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/lastDayOfMonth/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/differenceInDays/index.js");
/* harmony import */ var _models_classes_amortissement_line_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/classes/amortissement_line.js */ "./resources/js/models/classes/amortissement_line.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }



// const NOW = new Date();
// const BANQUE = f8Constants.banque
var DEFAULT_DATA = {
  notes: [],
  caracteristiques_credit: {
    montant_emprunte: 0,
    taux_interet_ht: 0,
    tps: 0,
    taux_interet_ttc: 0,
    duree_annee: 0,
    duree_mois: 0,
    taux_assurance: 0,
    date_deblocage: '',
    date_echeance: '',
    mode_paiement_demande: '',
    total_engagement: 0,
    salaire: 0,
    taux_frais_dossier: 3
  },
  donnees_calculees: {
    nb_total_echeance: 0,
    montant_mensualite: 0,
    cout_total_pret: 0,
    interet: 0,
    taxe_interet: 0,
    assurance: 0,
    frais_dossier: 0,
    capital_rembourse: 0,
    coef_endettement: 0,
    montant_reco_dette: 0
  }
};
var AmortissementManager = /*#__PURE__*/function () {
  function AmortissementManager() {
    _classCallCheck(this, AmortissementManager);
    _defineProperty(this, "test_data", {
      notes: [],
      caracteristiques_credit: {
        montant_emprunte: 20000000,
        taux_interet_ht: 12,
        tps: 10,
        taux_interet_ttc: 13.20,
        duree_annee: 0,
        duree_mois: 84,
        taux_assurance: 0.60,
        date_deblocage: '2023-04-06',
        date_echeance: '',
        mode_paiement_demande: '',
        total_engagement: 814401,
        salaire: 1837643,
        taux_frais_dossier: 3
      },
      donnees_calculees: {
        nb_total_echeance: 84,
        montant_mensualite: 372594,
        cout_total_pret: 32717412,
        interet: 10536880,
        taxe_interet: 1053688,
        assurance: 526844,
        frais_dossier: 600000,
        capital_rembourse: 20000000,
        coef_endettement: 44.32,
        montant_reco_dette: 31297900
      }
    });
    _defineProperty(this, "data", {
      notes: [],
      caracteristiques_credit: {
        montant_emprunte: 0,
        taux_interet_ht: 0,
        tps: 10,
        taux_interet_ttc: 0,
        duree_annee: 0,
        duree_mois: 0,
        taux_assurance: 0,
        date_deblocage: '',
        date_echeance: '',
        mode_paiement_demande: '',
        total_engagement: 0,
        salaire: 0,
        taux_frais_dossier: 3,
        details_tranche_versement: {
          mode_tranche: "",
          frequence_mois: 0,
          frequence_versement: 0
        },
        duree_differee: 0,
        new_montant_pret_differee: 0,
        new_mensualite_differee: 0
      },
      donnees_calculees: {
        nb_total_echeance: 0,
        montant_mensualite: 0,
        cout_total_pret: 0,
        interet: 0,
        taxe_interet: 0,
        assurance: 0,
        frais_dossier: 0,
        capital_rembourse: 0,
        coef_endettement: 0,
        montant_reco_dette: 0
      }
    });
    _defineProperty(this, "simulationAmortissement", []);
    _defineProperty(this, "advancedParams", [{
      choix: 'P',
      possible: '',
      retenu: ''
    }, {
      choix: 12,
      possible: '',
      retenu: ''
    }, {
      choix: 360,
      possible: '',
      retenu: ''
    }]);
  }
  return _createClass(AmortissementManager, [{
    key: "setData",
    value: function setData(data) {
      this.data = data;
      this.runSimulation();
    }
  }, {
    key: "setDefaultData",
    value: function setDefaultData() {
      this.data = DEFAULT_DATA;
    }
  }, {
    key: "runSimulation",
    value: function runSimulation() {
      var _this$data$caracteris;
      var tps = ((_this$data$caracteris = this.data.caracteristiques_credit) === null || _this$data$caracteris === void 0 ? void 0 : _this$data$caracteris.tps) / 100;
      this.data.caracteristiques_credit.taux_interet_ttc = (this.data.caracteristiques_credit.taux_interet_ht + this.data.caracteristiques_credit.taux_interet_ht * tps).toFixed(2);
      var simulation = [];
      simulation.push(new _models_classes_amortissement_line_js__WEBPACK_IMPORTED_MODULE_0__["default"]({
        no: 0,
        date: this.data.caracteristiques_credit.date_deblocage,
        date_formatted: this.data.caracteristiques_credit.date_deblocage,
        rembPeriodeAffiche: 0,
        rembPeriode: 0,
        interet: 0,
        capital: 0,
        assurance: 0,
        taxe: 0,
        soldeCompte: this.data.caracteristiques_credit.montant_emprunte
      }));
      if (!this.canRunSimulation()) {
        this.simulationAmortissement = [].concat(simulation);
        // return;
      } else {
        var L10 = this.advancedParams[2].choix;
        if (this.data.caracteristiques_credit.date_deblocage != '') {
          for (var i = 1; i < this.data.donnees_calculees.nb_total_echeance + 1; i++) {
            var _this$data$caracteris2, _this$data$caracteris4;
            var pv_date = simulation[i - 1].date;
            if (((_this$data$caracteris2 = this.data.caracteristiques_credit) === null || _this$data$caracteris2 === void 0 ? void 0 : _this$data$caracteris2.mode_paiement_demande) == 'In fine') {
              var _this$data$caracteris3;
              pv_date = (_this$data$caracteris3 = this.data.caracteristiques_credit) === null || _this$data$caracteris3 === void 0 ? void 0 : _this$data$caracteris3.date_echeance;
            }
            var d = new Date(pv_date);
            if (d == 'Invalid Date') return;
            var previousDate = new Date(pv_date);
            var date = this.nextDate(previousDate, (_this$data$caracteris4 = this.data.caracteristiques_credit.details_tranche_versement) === null || _this$data$caracteris4 === void 0 ? void 0 : _this$data$caracteris4.frequence_mois);
            var previousBalance = simulation[i - 1].soldeCompte;
            var interet = this.nextInterest(previousBalance, this.data.caracteristiques_credit.taux_interet_ht / 100, previousDate, date, L10);
            var assurance = this.nextAssurance(L10, previousBalance, this.data.caracteristiques_credit.taux_assurance / 100, date, previousDate);
            var taxe = this.nextTaxe(interet, this.data.caracteristiques_credit.tps / 100);
            var capital = this.nextCapital(i, this.data.donnees_calculees.montant_mensualite, this.data.donnees_calculees.nb_total_echeance, this.data.caracteristiques_credit.montant_emprunte, interet, assurance, taxe);
            var soldeCompte = this.nextSoldeCompte(capital, previousBalance);
            var duree_differee = this.data.caracteristiques_credit.duree_differee;
            var mont_mensuel = this.data.donnees_calculees.montant_mensualite;
            var newcapital = i === this.data.donnees_calculees.nb_total_echeance ? previousBalance : capital;

            // DANS LE CAS ILYA DIFFEREE
            if (duree_differee && i <= duree_differee) {
              var _date = this.nextDate(previousDate, 1);
              var _interet = this.nextInterest(previousBalance, this.data.caracteristiques_credit.taux_interet_ht / 100, previousDate, _date, L10);
              var _assurance = this.nextAssurance(L10, previousBalance, this.data.caracteristiques_credit.taux_assurance / 100, _date, previousDate);
              var _taxe = this.nextTaxe(_interet, this.data.caracteristiques_credit.tps / 100);
              if (duree_differee == i) {
                this.data.caracteristiques_credit.new_montant_pret_differee = previousBalance + _interet + _assurance + _taxe;
                this.data.caracteristiques_credit.new_mensualite_differee = this.determineNewMensualite(this.data);
              }
              simulation.push(new _models_classes_amortissement_line_js__WEBPACK_IMPORTED_MODULE_0__["default"]({
                no: "".concat(i, " - Diff"),
                date: _date,
                date_formatted: date_fns__WEBPACK_IMPORTED_MODULE_1__["default"](_date, 'yyyy-MM-dd'),
                rembPeriodeAffiche: 0,
                rembPeriode: 0,
                interet: _interet,
                capital: 0,
                assurance: _assurance,
                taxe: _taxe,
                soldeCompte: previousBalance + _interet + _assurance + _taxe
              }));
            } else {
              if (duree_differee > 0) {
                mont_mensuel = this.data.caracteristiques_credit.new_mensualite_differee;
              }
              simulation.push(new _models_classes_amortissement_line_js__WEBPACK_IMPORTED_MODULE_0__["default"]({
                no: i,
                date: date,
                date_formatted: date_fns__WEBPACK_IMPORTED_MODULE_1__["default"](date, 'yyyy-MM-dd'),
                rembPeriode: mont_mensuel,
                rembPeriodeAffiche: Math.round(mont_mensuel),
                interet: interet,
                capital: newcapital,
                capitalAffiche: Math.round(newcapital),
                assurance: assurance,
                taxe: taxe,
                soldeCompte: i === this.data.donnees_calculees.nb_total_echeance ? 0 : soldeCompte
              }));
            }
          }
        }
        this.simulationAmortissement = [].concat(simulation);
      }
      this.data.donnees_calculees.interet = this.simulationAmortissement.reduce(function (acc, curr) {
        return acc += curr === null || curr === void 0 ? void 0 : curr.interet;
      }, 0);
      this.data.donnees_calculees.taxe_interet = this.simulationAmortissement.reduce(function (acc, curr) {
        return acc += curr === null || curr === void 0 ? void 0 : curr.taxe;
      }, 0);
      this.data.donnees_calculees.assurance = this.simulationAmortissement.reduce(function (acc, curr) {
        return acc += curr === null || curr === void 0 ? void 0 : curr.assurance;
      }, 0);
      this.data.donnees_calculees.capital_rembourse = this.simulationAmortissement.reduce(function (acc, curr) {
        return acc += curr === null || curr === void 0 ? void 0 : curr.capital;
      }, 0);
      this.data.donnees_calculees.montant_reco_dette = this.simulationAmortissement.reduce(function (acc, curr) {
        return acc += curr === null || curr === void 0 ? void 0 : curr.rembPeriode;
      }, 0);
      var taux_ = this.data.caracteristiques_credit.taux_frais_dossier / 100;
      this.data.donnees_calculees.frais_dossier = this.data.caracteristiques_credit.montant_emprunte * taux_;
      this.data.donnees_calculees.cout_total_pret = Math.round(this.data.donnees_calculees.interet + this.data.donnees_calculees.taxe_interet + this.data.donnees_calculees.assurance + this.data.donnees_calculees.capital_rembourse + this.data.donnees_calculees.frais_dossier);
    }
  }, {
    key: "nextDate",
    value: function nextDate(previousDate, frequence_mois) {
      var newDate = date_fns__WEBPACK_IMPORTED_MODULE_2__["default"](previousDate, parseInt(frequence_mois));
      var finalDate = date_fns__WEBPACK_IMPORTED_MODULE_3__["default"](newDate);
      return finalDate;
    }
  }, {
    key: "nextInterest",
    value: function nextInterest(previousBalance, tauxInteretHt, previousDate, currentDate, divider) {
      if (isNaN(divider)) return '';
      var dayDifference = date_fns__WEBPACK_IMPORTED_MODULE_4__["default"](currentDate, previousDate);

      //console.log('previousBalance in nextInt', previousBalance);
      var interet = previousBalance * tauxInteretHt * dayDifference / divider;
      return Math.ceil(interet);
    }
  }, {
    key: "nextCapital",
    value: function nextCapital(no, rembPeriode, nbEcheance, montantEmprunte, interet, assurance, taxe) {
      // console.log(no, rembPeriode, nbEcheance, montantEmprunte, interet, assurance, taxe);
      if (isNaN(rembPeriode)) return '';
      if (no == nbEcheance) {
        return montantEmprunte;
      }
      return rembPeriode - (interet + assurance + taxe);
    }
  }, {
    key: "nextTaxe",
    value: function nextTaxe(interet, tps) {
      if (isNaN(interet)) return '';
      return Math.floor(interet * tps);
    }
  }, {
    key: "nextAssurance",
    value: function nextAssurance(L10, previousBalance, tauxAssurance, currentDate, previousDate) {
      //console.log('in assur');
      //console.log(L10, previousBalance, tauxAssurance, currentDate, previousDate);
      if (isNaN(L10)) return '';
      var daysDifference = date_fns__WEBPACK_IMPORTED_MODULE_4__["default"](currentDate, previousDate);
      var res = previousBalance * tauxAssurance * daysDifference / L10;
      return Math.floor(res);
    }
  }, {
    key: "nextSoldeCompte",
    value: function nextSoldeCompte(capital, previousBalance) {
      if (isNaN(capital)) return '';
      var res = previousBalance - capital;
      return Math.floor(res);
    }
  }, {
    key: "canRunSimulation",
    value: function canRunSimulation() {
      var _this$data$caracteris5;
      if (!((_this$data$caracteris5 = this.data.caracteristiques_credit.details_tranche_versement) !== null && _this$data$caracteris5 !== void 0 && _this$data$caracteris5.frequence_mois)) return false;
      return true;
      // removed by dead control flow
{}
      // removed by dead control flow
{}
      //if(!this.data.caracteristiques_credit.tps) return false;
      // removed by dead control flow
{}
      //if(!this.data.caracteristiques_credit.taux_assurance) return false;
      // removed by dead control flow
{}
      // removed by dead control flow
{}
      // removed by dead control flow
{}
      // removed by dead control flow
{}
    }
  }, {
    key: "determineNewMensualite",
    value: function determineNewMensualite(data) {
      var _caracts$details_tran;
      var caracts = data.caracteristiques_credit;
      var tauxHT = caracts.taux_interet_ht / 100;
      var tps = caracts.tps / 100;
      var tauxTTC = tauxHT * (1 + tps) + caracts.taux_assurance / 100;
      var frequence_mois = parseInt((_caracts$details_tran = caracts.details_tranche_versement) === null || _caracts$details_tran === void 0 ? void 0 : _caracts$details_tran.frequence_mois);
      var frequence_versement = parseInt(caracts.details_tranche_versement.frequence_versement);
      var duree = caracts.duree_mois;
      var nbEcheance = Math.floor(duree * frequence_versement / frequence_mois);
      var nbEcheanceAnnuel = 12 * frequence_versement / frequence_mois;
      var montant = parseInt(caracts.new_montant_pret_differee);
      var tauxInteret = tauxTTC / nbEcheanceAnnuel;
      var montantEcheance = montant * tauxInteret / (1 - Math.pow(1 + tauxInteret, -1 * nbEcheance));
      return montantEcheance;
    }
  }]);
}();


/***/ })

}]);