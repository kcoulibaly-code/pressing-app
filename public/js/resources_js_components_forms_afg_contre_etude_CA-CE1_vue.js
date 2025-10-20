"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_forms_afg_contre_etude_CA-CE1_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/contre_etude/CA-CE1.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/contre_etude/CA-CE1.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
/* harmony import */ var _services_ebapis_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../services/ebapis.service */ "./resources/js/services/ebapis.service.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../services/auth.service */ "./resources/js/services/auth.service.js");
/* harmony import */ var _services_credit_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/credit.service */ "./resources/js/services/credit.service.js");
/* harmony import */ var _vueform_multiselect_dist_multiselect_vue2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vueform/multiselect/dist/multiselect.vue2 */ "./node_modules/@vueform/multiselect/dist/multiselect.vue2.js");
/* harmony import */ var _helpers_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../helpers/helper */ "./resources/js/helpers/helper.js");
/* harmony import */ var _services_afg_amortissement_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/afg/amortissement.js */ "./resources/js/services/afg/amortissement.js");
/* harmony import */ var _shared_afg_Simulateur_SimulateurDeCredit_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/afg/Simulateur/SimulateurDeCredit.vue */ "./resources/js/components/shared/afg/Simulateur/SimulateurDeCredit.vue");
var _methods;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return r; }; var t, r = {}, e = Object.prototype, n = e.hasOwnProperty, o = "function" == typeof Symbol ? Symbol : {}, i = o.iterator || "@@iterator", a = o.asyncIterator || "@@asyncIterator", u = o.toStringTag || "@@toStringTag"; function c(t, r, e, n) { Object.defineProperty(t, r, { value: e, enumerable: !n, configurable: !n, writable: !n }); } try { c({}, ""); } catch (t) { c = function c(t, r, e) { return t[r] = e; }; } function h(r, e, n, o) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype); return c(a, "_invoke", function (r, e, n) { var o = 1; return function (i, a) { if (3 === o) throw Error("Generator is already running"); if (4 === o) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var u = n.delegate; if (u) { var c = d(u, n); if (c) { if (c === f) continue; return c; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (1 === o) throw o = 4, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = 3; var h = s(r, e, n); if ("normal" === h.type) { if (o = n.done ? 4 : 2, h.arg === f) continue; return { value: h.arg, done: n.done }; } "throw" === h.type && (o = 4, n.method = "throw", n.arg = h.arg); } }; }(r, n, new Context(o || [])), !0), a; } function s(t, r, e) { try { return { type: "normal", arg: t.call(r, e) }; } catch (t) { return { type: "throw", arg: t }; } } r.wrap = h; var f = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var l = {}; c(l, i, function () { return this; }); var p = Object.getPrototypeOf, y = p && p(p(x([]))); y && y !== e && n.call(y, i) && (l = y); var v = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(l); function g(t) { ["next", "throw", "return"].forEach(function (r) { c(t, r, function (t) { return this._invoke(r, t); }); }); } function AsyncIterator(t, r) { function e(o, i, a, u) { var c = s(t[o], t, i); if ("throw" !== c.type) { var h = c.arg, f = h.value; return f && "object" == _typeof(f) && n.call(f, "__await") ? r.resolve(f.__await).then(function (t) { e("next", t, a, u); }, function (t) { e("throw", t, a, u); }) : r.resolve(f).then(function (t) { h.value = t, a(h); }, function (t) { return e("throw", t, a, u); }); } u(c.arg); } var o; c(this, "_invoke", function (t, n) { function i() { return new r(function (r, o) { e(t, n, r, o); }); } return o = o ? o.then(i, i) : i(); }, !0); } function d(r, e) { var n = e.method, o = r.i[n]; if (o === t) return e.delegate = null, "throw" === n && r.i["return"] && (e.method = "return", e.arg = t, d(r, e), "throw" === e.method) || "return" !== n && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + n + "' method")), f; var i = s(o, r.i, e.arg); if ("throw" === i.type) return e.method = "throw", e.arg = i.arg, e.delegate = null, f; var a = i.arg; return a ? a.done ? (e[r.r] = a.value, e.next = r.n, "return" !== e.method && (e.method = "next", e.arg = t), e.delegate = null, f) : a : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f); } function w(t) { this.tryEntries.push(t); } function m(r) { var e = r[4] || {}; e.type = "normal", e.arg = t, r[4] = e; } function Context(t) { this.tryEntries = [[-1]], t.forEach(w, this), this.reset(!0); } function x(r) { if (null != r) { var e = r[i]; if (e) return e.call(r); if ("function" == typeof r.next) return r; if (!isNaN(r.length)) { var o = -1, a = function e() { for (; ++o < r.length;) if (n.call(r, o)) return e.value = r[o], e.done = !1, e; return e.value = t, e.done = !0, e; }; return a.next = a; } } throw new TypeError(_typeof(r) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, c(v, "constructor", GeneratorFunctionPrototype), c(GeneratorFunctionPrototype, "constructor", GeneratorFunction), c(GeneratorFunctionPrototype, u, GeneratorFunction.displayName = "GeneratorFunction"), r.isGeneratorFunction = function (t) { var r = "function" == typeof t && t.constructor; return !!r && (r === GeneratorFunction || "GeneratorFunction" === (r.displayName || r.name)); }, r.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, c(t, u, "GeneratorFunction")), t.prototype = Object.create(v), t; }, r.awrap = function (t) { return { __await: t }; }, g(AsyncIterator.prototype), c(AsyncIterator.prototype, a, function () { return this; }), r.AsyncIterator = AsyncIterator, r.async = function (t, e, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(h(t, e, n, o), i); return r.isGeneratorFunction(e) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, g(v), c(v, u, "Generator"), c(v, i, function () { return this; }), c(v, "toString", function () { return "[object Generator]"; }), r.keys = function (t) { var r = Object(t), e = []; for (var n in r) e.unshift(n); return function t() { for (; e.length;) if ((n = e.pop()) in r) return t.value = n, t.done = !1, t; return t.done = !0, t; }; }, r.values = x, Context.prototype = { constructor: Context, reset: function reset(r) { if (this.prev = this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(m), !r) for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0][4]; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(r) { if (this.done) throw r; var e = this; function n(t) { a.type = "throw", a.arg = r, e.next = t; } for (var o = e.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i[4], u = this.prev, c = i[1], h = i[2]; if (-1 === i[0]) return n("end"), !1; if (!c && !h) throw Error("try statement without catch or finally"); if (null != i[0] && i[0] <= u) { if (u < c) return this.method = "next", this.arg = t, n(c), !0; if (u < h) return n(h), !1; } } }, abrupt: function abrupt(t, r) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var n = this.tryEntries[e]; if (n[0] > -1 && n[0] <= this.prev && this.prev < n[2]) { var o = n; break; } } o && ("break" === t || "continue" === t) && o[0] <= r && r <= o[2] && (o = null); var i = o ? o[4] : {}; return i.type = t, i.arg = r, o ? (this.method = "next", this.next = o[2], f) : this.complete(i); }, complete: function complete(t, r) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), f; }, finish: function finish(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[2] === t) return this.complete(e[4], e[3]), m(e), f; } }, "catch": function _catch(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[0] === t) { var n = e[4]; if ("throw" === n.type) { var o = n.arg; m(e); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(r, e, n) { return this.delegate = { i: x(r), r: e, n: n }, "next" === this.method && (this.arg = t), f; } }, r; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }








window.$ = window.jQuery = __webpack_require__(/*! jquery/dist/jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Concours_et_facilites",
  display: "Concours/Facilités",
  components: {
    MoreVerticalIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_7__.MoreVerticalIcon,
    ChevronUpIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_7__.ChevronUpIcon,
    ChevronDownIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_7__.ChevronDownIcon,
    PlusIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_7__.PlusIcon,
    TrashIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_7__.TrashIcon,
    AirplayIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_7__.AirplayIcon,
    Multiselect: _vueform_multiselect_dist_multiselect_vue2__WEBPACK_IMPORTED_MODULE_3__["default"],
    SimulateurDeCredit: _shared_afg_Simulateur_SimulateurDeCredit_vue__WEBPACK_IMPORTED_MODULE_6__["default"]
    // BookOpenIcon,
  },
  computed: _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({
    totalsPropositionsSelectionnees: function totalsPropositionsSelectionnees() {
      // Fonction pour parser les valeurs en nombres
      var parseCurrency = function parseCurrency(value) {
        if (value == null) return 0;
        if (typeof value === 'number') return value;
        if (typeof value !== 'string') return 0;
        var cleaned = value.replace(/[^0-9.-]/g, '').replace(',', '.');
        return parseFloat(cleaned) || 0;
      };

      // Calcul des totaux bruts (en nombres)
      var totals = this.propositions_selectionnees.reduce(function (acc, item) {
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
    totalsPropositions: function totalsPropositions() {
      // Fonction pour parser les valeurs en nombres
      var parseCurrency = function parseCurrency(value) {
        if (!value || typeof value !== 'string') return 0;
        var cleaned = value.replace(/[^0-9.-]/g, '').replace(',', '.');
        return parseFloat(cleaned) || 0;
      };

      // Calcul des totaux bruts (en nombres)
      var totals = this.propositions_concours.reduce(function (acc, item) {
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
    firstGarantiesNewIndex: function firstGarantiesNewIndex() {
      return this.facilites_sollicitees.findIndex(function (obj) {
        return obj.line === "credit_new";
      });
    },
    groupeCreditByCategorie: function groupeCreditByCategorie() {
      // let test = new Set()
      // this.type_credits.forEach(el => {
      //     test.add(el.groupe_categorie)
      // });
      // return test

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
      // console.log('d', d)
      if (d) {
        this.facilites_sollicitees[0].type_facilite = d.libelle;
        this.facilites_sollicitees[0].facilite_libelle = d.groupe_categorie; // 
        this.facilites_sollicitees[0].infos_fcub = d.infos_flexcub;
      }
      return list_categories;
    },
    getQuotiteCessible: function getQuotiteCessible() {
      var montant = 0;
      this.formDataToBeWatched["propositions_concours"].forEach(function (facilite) {
        if ((facilite === null || facilite === void 0 ? void 0 : facilite.montant_echeance) === 0) {} else {
          var _facilite$montant_ech;
          montant += parseInt(facilite === null || facilite === void 0 || (_facilite$montant_ech = facilite.montant_echeance) === null || _facilite$montant_ech === void 0 ? void 0 : _facilite$montant_ech.replace(/\s/g, ""), 10);
        }
      });
      this.formDataToBeWatched.quotite_cessible_disponible = Number(this.formDataToBeWatched.quotite_cessible) - montant;
      this.formDataToBeWatched.quotite_cessible_disponible_general = Number(this.formDataToBeWatched.quotite_cessible_general) - montant;
      return {
        quotite_cessible_disponible: this.formDataToBeWatched.quotite_cessible_disponible,
        quotite_cessible_disponible_general: this.formDataToBeWatched.quotite_cessible_disponible_general,
        montant: montant
      };
    }
  }, "totalsFacilitesExistante", function totalsFacilitesExistante() {
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
  }), "totalsFacilites", function totalsFacilites() {
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
  }), "totalsProposition", function totalsProposition() {
    // Fonction pour parser les valeurs en nombres
    var parseCurrency = function parseCurrency(value) {
      if (!value || typeof value !== 'string') return 0;
      var cleaned = value.replace(/[^0-9.-]/g, '').replace(',', '.');
      return parseFloat(cleaned) || 0;
    };

    // Calcul des totaux bruts (en nombres)
    var totals = this.propositions_concours.reduce(function (acc, item) {
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
  }), "totalsFacilitesSelectionnees", function totalsFacilitesSelectionnees() {
    // Fonction pour parser les valeurs en nombres
    var parseCurrency = function parseCurrency(value) {
      if (value == null) return 0;
      if (typeof value === 'number') return value;
      if (typeof value !== 'string') return 0;
      var cleaned = value.replace(/[^0-9.-]/g, '').replace(',', '.');
      return parseFloat(cleaned) || 0;
    };

    // Calcul des totaux bruts (en nombres)
    var totals = this.propositions_selectionnees.reduce(function (acc, item) {
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
  }), "editableFacilitesSollicitees", function editableFacilitesSollicitees() {
    return this.facilites_sollicitees;
  }),
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
            _this2.loadScoringData();
            _context.next = 3;
            return _this2.getCreditBanques();
          case 3:
            //this.loadTypeCredit = false;

            EventBus.$on("cred_pub_tb_10002-updated", function (data) {
              _this2.formDataToBeWatched.denomination_client = (data === null || data === void 0 ? void 0 : data.nom) + ' ' + (data === null || data === void 0 ? void 0 : data.prenoms);
            });
            EventBus.$on("dossier-updated-dcp-0", function (data) {
              var _data$data_tb, _data$data_tb2, _data$data_tb3, _data$data_tb4, _data$data_tb5, _data$data_tb6, _data$data_tb7;
              _this2.formDataToBeWatched.taux = data === null || data === void 0 || (_data$data_tb = data.data_tb0) === null || _data$data_tb === void 0 ? void 0 : _data$data_tb.taux;
              _this2.formDataToBeWatched.duree_credit = data === null || data === void 0 || (_data$data_tb2 = data.data_tb0) === null || _data$data_tb2 === void 0 ? void 0 : _data$data_tb2.duree_credit;
              _this2.formDataToBeWatched.montant_credit = data === null || data === void 0 || (_data$data_tb3 = data.data_tb0) === null || _data$data_tb3 === void 0 ? void 0 : _data$data_tb3.montant_credit;
              _this2.formDataToBeWatched.date_echeance = data === null || data === void 0 || (_data$data_tb4 = data.data_tb0) === null || _data$data_tb4 === void 0 ? void 0 : _data$data_tb4.date_echeance;
              _this2.formDataToBeWatched.mode_paiement_demande = data === null || data === void 0 || (_data$data_tb5 = data.data_tb0) === null || _data$data_tb5 === void 0 ? void 0 : _data$data_tb5.mode_paiement_demande;
              _this2.formDataToBeWatched.duree_differee = (data === null || data === void 0 || (_data$data_tb6 = data.data_tb0) === null || _data$data_tb6 === void 0 ? void 0 : _data$data_tb6.duree_differee) || 0;
              if (data !== null && data !== void 0 && (_data$data_tb7 = data.data_tb0) !== null && _data$data_tb7 !== void 0 && _data$data_tb7.frais_credits) {
                var _data$data_tb8;
                data === null || data === void 0 || (_data$data_tb8 = data.data_tb0) === null || _data$data_tb8 === void 0 || _data$data_tb8.frais_credits.forEach(function (el) {
                  if (el.libelle == "Prime d'assurance") {
                    _this2.formDataToBeWatched.taux_prime = el.taux;
                  }
                });
              }
              _this2.handleSimulate();
            });
            EventBus.$on("dossier-updated-cace-0", function (data) {
              // console.log('dossier-updated-cace-0 *** ',data)
              if ((data === null || data === void 0 ? void 0 : data.data0) != undefined) {
                var _item$revenu_domicili, _item$revenu_domicili2;
                var item = data.data0;
                _this2.data_tb1 = item;
                _this2.revenu_domicilie = (_item$revenu_domicili = item.revenu_domicilie_afg) !== null && _item$revenu_domicili !== void 0 ? _item$revenu_domicili : [];
                _this2.formDataToBeWatched.taux_qc1 = ((_item$revenu_domicili2 = item.revenu_domicilie_afg) === null || _item$revenu_domicili2 === void 0 || (_item$revenu_domicili2 = _item$revenu_domicili2[0]) === null || _item$revenu_domicili2 === void 0 ? void 0 : _item$revenu_domicili2['taux_qc1']) || 0;
                _this2.getRevenuAutre();
                _this2.formDataToBeWatched.pourcentage_quotite = item.pourcentage_quotite;
                _this2.formDataToBeWatched.quotite_cessible = item.quotite_cessible;
                _this2.formDataToBeWatched.quotite_cessible_general = item.quotite_cessible_general;
                _this2.formDataToBeWatched.pourcentage_quotite_general = item.pourcentage_quotite_general;
                _this2.formDataToBeWatched.revenu_total_colonne_emprunteur = item.revenu_total_colonne_emprunteur;
                _this2.formDataToBeWatched.revenu_total_colonne_montant_pondere = item.revenu_total_colonne_montant_pondere;
              }
              _this2.getRemboursement();
              _this2.getTauxEndettement();
            });
            EventBus.$on("dossier-updated-dcpp-pcp1-0", function (d) {
              if ((d === null || d === void 0 ? void 0 : d.data_tb1) != undefined) {
                var data = d.data_tb1;
                _this2.data_tb1 = data;
                _this2.getTauxEndettement();
              }
            });
          case 7:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }))();
  },
  mounted: function mounted() {
    var _this$meta_data,
      _this$meta_data2,
      _this3 = this;
    var applied_templ_name = (_this$meta_data = this.meta_data) === null || _this$meta_data === void 0 || (_this$meta_data = _this$meta_data.dossier_credit) === null || _this$meta_data === void 0 ? void 0 : _this$meta_data.applied_templ_name;
    var tbArrays = this.determineCredPubTables(applied_templ_name, (_this$meta_data2 = this.meta_data) === null || _this$meta_data2 === void 0 ? void 0 : _this$meta_data2.dossier_credit);
    this.credpubIn0 = tbArrays[0];
    this.credpubIn1 = tbArrays[3];
    this.credpubIn2 = tbArrays[4];
    this.credpubIn3 = tbArrays[5];
    this.credpubIn4 = tbArrays[6];
    this.loadRetrieved();
    EventBus.$on("collect-quotite-encours", function () {
      _this3.emitEventForTbEndettement();
    });
    EventBus.$on("update-facility", function (data) {
      return _this3.updateFacilitySollicitees(data);
    });
    this.loadTbAttrs(); // charge les attributs + sous attributs des tables
    this.tableClosedOrOpened();
    this.getTauxEndettement();
  },
  data: function data() {
    var _ref, _this$meta_data$dossi, _this$meta_data$dossi2, _this$meta_data$dossi3, _this$authenticatedUs, _this$authenticatedUs2, _this$authenticatedUs3, _this$authenticatedUs4, _this$authenticatedUs5, _this$authenticatedUs6;
    var vm = this;
    return {
      ebapisHost: _services_ebapis_service__WEBPACK_IMPORTED_MODULE_0__["default"].host,
      authcheck: false,
      authcheckUsr: null,
      authcheckStatus: null,
      watchInPause: false,
      initLoad: true,
      credpubIn0: null,
      credpubIn1: null,
      credpubIn2: null,
      credpubIn3: null,
      credpubIn4: null,
      seen: true,
      seen1: true,
      disp: false,
      isLoading: false,
      type_credits: [],
      loadTypeCredit: false,
      list_type_rachat: ["Rachat interne", "Rachat externe"],
      data_tb1: (_ref = (_this$meta_data$dossi = (_this$meta_data$dossi2 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi2 === void 0 ? void 0 : _this$meta_data$dossi2.cred_pub_tb_14070) !== null && _this$meta_data$dossi !== void 0 ? _this$meta_data$dossi : (_this$meta_data$dossi3 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi3 === void 0 ? void 0 : _this$meta_data$dossi3.cred_pub_tb_120001) !== null && _ref !== void 0 ? _ref : [],
      meta_parseable: {
        cred_pub_key: this.meta_data["cred_pub_key"],
        tb_name: this.tb_name
      },
      taux_endettement: {
        salaire: {
          label: "Salaire",
          formule: "(A)",
          value: 0
        },
        autres_revenues: {
          label: "Autres revenus",
          formule: "(B)",
          value: 0
        },
        remb_autre_credit: {
          label: "Remboursement des autres crédits",
          formule: "(C)",
          value: 0
        },
        remb_nouveau_credit: {
          label: "Remboursement nouveau crédit",
          formule: "(D)",
          value: 0
        },
        taux_endettement: {
          label: "Taux d'endettement",
          formule: "(C + D) / (A + B)",
          value: 0,
          calculable: true,
          percentage: true,
          bold: true
        },
        rav: {
          label: "Reste à vivre",
          formule: "(A + B) - (C + D)",
          value: 0,
          calculable: true,
          bold: true
        }
      },
      rav: {
        rav_theorique: {
          label: "RAV Théorique",
          value: 0,
          calculable: true,
          formule: "*"
        },
        rav_reel: {
          label: "RAV Réel",
          value: 0,
          calculable: true,
          formule: "*"
        },
        rav_reel_gt_rav_theorique: {
          label: "RAV Réel > RAV Théorique",
          value: false,
          calculable: false
        },
        rav: {
          label: "Reste à vivre",
          value: 0,
          calculable: true,
          offview: false,
          formule: "(A + B) - (C + D)"
        }
      },
      status_object: {},
      donnee_calculs: {},
      formDataToBeWatched: {
        global_env_entity: _services_ebapis_service__WEBPACK_IMPORTED_MODULE_0__["default"].loadableEntity()[0].toUpperCase(),
        facilites_existante: [],
        facilites_sollicitees: [],
        propositions_concours: [],
        facilites_selectionnees: [],
        propositions_selectionnees: [],
        pourcentage_quotite: "",
        pourcentage_quotite_general: "",
        quotite_cessible: "",
        quotite_cessible_general: "",
        quotite_cessible_disponible: "",
        quotite_cessible_disponible_general: "",
        revenu_total_colonne_emprunteur: "",
        revenu_total_colonne_montant_pondere: 0,
        pret_cher_confrere: "",
        observations: "",
        notes: [],
        revenu_afg_total: 0,
        taux_endettement: {},
        rav: {},
        tva: null,
        status_object: {},
        matrimoniale: "",
        regime_matrimonial: "",
        habitation: "",
        anciennete_adresse: "",
        nbre_enfant: "",
        conjoint: {
          nom: "",
          prenoms: "",
          matrimoniale: "",
          adresse: ""
          // profession: "",
        },
        taux_qc1: 0
      },
      facilites_existante: [{
        "id": 1,
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
        uuid: _helpers_helper__WEBPACK_IMPORTED_MODULE_4__["default"].generateUUID(),
        by_ana_de: true,
        user_id: null,
        is_locale: true
      }],
      facilites_sollicitees: [{
        "id": 1,
        "filiale": "",
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
        user_id: null,
        uuid: _helpers_helper__WEBPACK_IMPORTED_MODULE_4__["default"].generateUUID(),
        by_ana_de: true,
        "differe": "",
        "nbre_differe": 0
      }],
      propositions_concours: [{
        "id": 1,
        "filiale": "",
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
        user_id: (_this$authenticatedUs = (_this$authenticatedUs2 = this.authenticatedUser) === null || _this$authenticatedUs2 === void 0 ? void 0 : _this$authenticatedUs2.id) !== null && _this$authenticatedUs !== void 0 ? _this$authenticatedUs : (_this$authenticatedUs3 = this.authenticatedUser) === null || _this$authenticatedUs3 === void 0 ? void 0 : _this$authenticatedUs3.user_id,
        uuid: _helpers_helper__WEBPACK_IMPORTED_MODULE_4__["default"].generateUUID(),
        by_ana_de: true,
        "differe": "",
        "nbre_differe": 0
      }],
      propositions_selectionnees: [{
        "id": 1,
        "uuid": this.generateUuid(),
        "facilite_uuid": "",
        "facilite_libelle": "",
        "frais_dossier": 0,
        "montant_assurance": 0,
        "tva_montant_assurance": 0,
        "TEG": "",
        "frais_cheque_certifie": 0,
        "frais_huissier": 0,
        "cash_call_percent": "",
        "cash_call_amount": 0,
        "compte_cash_coll": "",
        "taux_periodique": "",
        "teg_ttc": "",
        "taux_usure": "",
        "teg_teorique": "",
        "tva_frais_dossier": "",
        user_id: (_this$authenticatedUs4 = (_this$authenticatedUs5 = this.authenticatedUser) === null || _this$authenticatedUs5 === void 0 ? void 0 : _this$authenticatedUs5.id) !== null && _this$authenticatedUs4 !== void 0 ? _this$authenticatedUs4 : (_this$authenticatedUs6 = this.authenticatedUser) === null || _this$authenticatedUs6 === void 0 ? void 0 : _this$authenticatedUs6.user_id
      }],
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
      }, {
        title: "Supprimer",
        icon: "icofont icofont-trash",
        handler: this.startDeletingTbFromContext,
        disabled: false
      }],
      type_demande_list: [{
        "id": 1,
        "name": "Nouvelle demande",
        "checked": false,
        "disabled": false
      }, {
        "id": 2,
        "name": "Première demande",
        "checked": false,
        "disabled": false
      }, {
        "id": 3,
        "name": "Revue annuelle",
        "checked": false,
        "disabled": false
      }, {
        "id": 4,
        "name": "Revue intérimaire",
        "checked": false,
        "disabled": false
      }, {
        "id": 5,
        "name": "Appel à la décision",
        "checked": false,
        "disabled": false
      }, {
        "id": 6,
        "name": "Prorogation",
        "checked": false,
        "disabled": false
      }, {
        "id": 7,
        "name": "Renégociation / Restructuration",
        "checked": false,
        "disabled": false
      }],
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
      filiales: ["AFG ML"],
      list_entites: {
        "AFG ML": "MALI"
      },
      seen0_1: true,
      seen0_2: true,
      seen0_3: true,
      seen0_4: true,
      seen0_5: true,
      seen0_6: true,
      seen0_7: true,
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
      data_garanties: [],
      list_hors_forfait: [{
        libelle: "Montant du crédit",
        commentaire: "",
        checked: false
      }, {
        libelle: "durée du credit",
        commentaire: "",
        checked: false
      }, {
        libelle: "taux d'endettement",
        commentaire: "",
        checked: false
      }],
      filiale_afg: ["AFGB CI", "AFGB GA", "AFGB ML", "AFGB MG", "AFGB CM", "AFGB KM", "AFGB BJ", "AFGB HLD"],
      revenu_domicilie: [],
      matrimoniale: "",
      amortissementManager: new _services_afg_amortissement_js__WEBPACK_IMPORTED_MODULE_5__["default"](),
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
      defaultSimulation: null,
      passOnBeforeClose: false,
      canInportSimulation: true
    };
  },
  methods: (_methods = {
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
      // console.log('selTypeRachat -> value',value);

      if (['', undefined, null, 'Rachat externe'].includes(value)) {
        this.propositions_concours[index].num_fcub_pret = "";
        this.formDataToBeWatched.propositions_concours = this.propositions_concours;
      }
      this.handleInput();
      this.getRemboursement();
      this.setFraisData(value, index); // Mise à jour des clés [frais_huissier, frais_cheque_certifie] dans propositions_selectionnees en cas de Rachat interne
    },
    setFraisData: function setFraisData(value, index) {
      if (['', undefined, null, 'Rachat interne'].includes(value)) {
        this.propositions_selectionnees[index].frais_huissier = "";
        this.propositions_selectionnees[index].frais_cheque_certifie = "";
        this.formDataToBeWatched.propositions_selectionnees = this.propositions_selectionnees;
      }
    },
    isRachatExterne: function isRachatExterne(index) {
      var _this$propositions_co;
      var facilite = this.propositions_selectionnees[index];
      if (!facilite) return true;
      var ligne = (_this$propositions_co = this.propositions_concours) === null || _this$propositions_co === void 0 ? void 0 : _this$propositions_co.find(function (f) {
        return f.uuid === facilite.facilite_uuid;
      });
      return (ligne === null || ligne === void 0 ? void 0 : ligne.type_rachat) === 'Rachat externe' ? false : true;
    },
    recalculerTVAFraisDossier: function recalculerTVAFraisDossier(event, index, fiedName) {
      var _this$authcheckUsr$tv, _this$authcheckUsr;
      var frais = parseFloat(String(event.target.value).replace(/\s+/g, ""));
      var tvaRate = parseFloat((_this$authcheckUsr$tv = (_this$authcheckUsr = this.authcheckUsr) === null || _this$authcheckUsr === void 0 ? void 0 : _this$authcheckUsr.tva) !== null && _this$authcheckUsr$tv !== void 0 ? _this$authcheckUsr$tv : 0);

      // On calcule la TVA comme pourcentage (ex: 19.25%)
      this.propositions_selectionnees[index].tva_frais_dossier = parseInt(frais * tvaRate / 100) || 0;
      this.propositions_selectionnees[index][fiedName] = frais;
      this.formDataToBeWatched['propositions_selectionnees'] = this.propositions_selectionnees;
    },
    recalculerCashCall: function recalculerCashCall(event, index, fieldName) {
      var _this$facilites_solli;
      var refresh = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
      var cashCallPercent;
      if (refresh) {
        var _this$propositions_se;
        cashCallPercent = (_this$propositions_se = this.propositions_selectionnees[index]) === null || _this$propositions_se === void 0 ? void 0 : _this$propositions_se[fieldName];
      } else {
        var _event$;
        var rawInput = (_event$ = event === null || event === void 0 ? void 0 : event[1]) !== null && _event$ !== void 0 ? _event$ : '';
        cashCallPercent = parseFloat(String(rawInput).replace(/\s+/g, ''));
      }

      // Si cashCallPercent est null, NaN ou négatif, on le met à 0
      if (!cashCallPercent || isNaN(cashCallPercent) || cashCallPercent < 0) {
        cashCallPercent = 0;
      }
      var montantCreditRaw = ((_this$facilites_solli = this.facilites_sollicitees[index]) === null || _this$facilites_solli === void 0 ? void 0 : _this$facilites_solli.montant_credit) || 0;
      var montantCredit = this.convertInt(montantCreditRaw);
      var cashCallAmount = parseInt(cashCallPercent / 100 * montantCredit) || 0;
      this.propositions_selectionnees[index].cash_call_amount = cashCallAmount;
      this.propositions_selectionnees[index][fieldName] = cashCallPercent;
      this.formDataToBeWatched['propositions_selectionnees'] = this.propositions_selectionnees;
    },
    parseMontant: function parseMontant(montant) {
      if (typeof montant === 'number') {
        montant = montant.toString();
      } else if (typeof montant === 'string') {
        montant = montant.replace(/\s/g, "").trim();
      } else {
        return 0;
      }
      var valeur = this.localeStringToFloat(montant);
      return isNaN(valeur) ? 0 : valeur;
    },
    formDataVarsTE: function formDataVarsTE(event) {
      if (!Array.isArray(event) || !event.length) {
        console.error("Event must be an array of 2 elements");
        return;
      }
      var _event = _slicedToArray(event, 2),
        key = _event[0],
        value = _event[1];
      if (!key || !this.taux_endettement[key]) {
        console.error("Key ".concat(key, " does not exist in taux_endettement"));
        return;
      }
      this.taux_endettement[key].value = this.localeStringToFloat(value);
    },
    getRevenuSalaire: function getRevenuSalaire() {
      var _this$data_tb, _this$data_tb2, _this$taux_endettemen;
      var revenuDomicilie = ((_this$data_tb = this.data_tb1) === null || _this$data_tb === void 0 ? void 0 : _this$data_tb.revenu_domicilie_afg) || ((_this$data_tb2 = this.data_tb1) === null || _this$data_tb2 === void 0 ? void 0 : _this$data_tb2.revenu_domicilie);
      if (!Array.isArray(revenuDomicilie) || revenuDomicilie.length === 0) return 0;
      var nodeSalaire = revenuDomicilie[0];
      var salaire = 0;
      if ((nodeSalaire === null || nodeSalaire === void 0 ? void 0 : nodeSalaire.libelle) === "Salaire net" && (nodeSalaire === null || nodeSalaire === void 0 ? void 0 : nodeSalaire.checked) === true && (nodeSalaire === null || nodeSalaire === void 0 ? void 0 : nodeSalaire.montant_salaire) != null && (nodeSalaire === null || nodeSalaire === void 0 ? void 0 : nodeSalaire.montant_salaire) !== "") {
        salaire = this.localeStringToFloat(String(nodeSalaire.montant_salaire));
      }
      if ((_this$taux_endettemen = this.taux_endettement) !== null && _this$taux_endettemen !== void 0 && _this$taux_endettemen.salaire) {
        this.taux_endettement.salaire.value = salaire;
      }
      return salaire;
    },
    getRemboursement: function getRemboursement() {
      var _this4 = this,
        _this$propositions_co2;
      if (!Array.isArray(this.facilites_existante) && !Array.isArray(this.propositions_concours)) {
        return {
          remb_autre: 0,
          remb_nouveau: 0
        };
      }
      var calculeTotal = function calculeTotal(facilites) {
        return Array.isArray(facilites) ? facilites.reduce(function (total, f) {
          return total + _this4.parseMontant(f.montant_echeance);
        }, 0) : 0;
      };
      var remb_autre = calculeTotal(this.facilites_existante);
      var remb_nouveau = calculeTotal(this.propositions_concours);
      var rachat_interne = false;
      (_this$propositions_co2 = this.propositions_concours) === null || _this$propositions_co2 === void 0 || _this$propositions_co2.forEach(function (facilite) {
        if ((facilite === null || facilite === void 0 ? void 0 : facilite.is_rachat) == 'Oui' && (facilite === null || facilite === void 0 ? void 0 : facilite.type_rachat) == 'Rachat interne') {
          rachat_interne = true;
        }
      });
      if (rachat_interne == true) {
        remb_autre = 0;
      }
      this.taux_endettement.remb_autre_credit.value = remb_autre;
      this.taux_endettement.remb_nouveau_credit.value = remb_nouveau;
      return {
        remb_autre: remb_autre,
        remb_nouveau: remb_nouveau
      };
    },
    getRevenuAutre: function getRevenuAutre() {
      var _this$data_tb3,
        _this$data_tb4,
        _this5 = this,
        _this$taux_endettemen2;
      var revenuDomicilie = ((_this$data_tb3 = this.data_tb1) === null || _this$data_tb3 === void 0 ? void 0 : _this$data_tb3.revenu_domicilie_afg) || ((_this$data_tb4 = this.data_tb1) === null || _this$data_tb4 === void 0 ? void 0 : _this$data_tb4.revenu_domicilie);
      ;
      if (!Array.isArray(revenuDomicilie) || revenuDomicilie.length === 0) return 0;
      var autre_revenu = 0;
      revenuDomicilie.forEach(function (el) {
        if ((el === null || el === void 0 ? void 0 : el.libelle) !== "Salaire net" && (el === null || el === void 0 ? void 0 : el.mensualite) != null && (el === null || el === void 0 ? void 0 : el.mensualite) !== "") {
          autre_revenu += _this5.localeStringToFloat(String(el.mensualite));
        }
      });
      if ((_this$taux_endettemen2 = this.taux_endettement) !== null && _this$taux_endettemen2 !== void 0 && _this$taux_endettemen2.autres_revenues) {
        this.taux_endettement.autres_revenues.value = autre_revenu;
      }
      return autre_revenu;
    },
    getRAVTheorique: function getRAVTheorique() {
      var _this$data_tb5, _this$data_tb6;
      var montantParSituation = [{
        situation: "Célibataire",
        montant: 40000,
        montant_par_enfant: 10000
      }, {
        situation: "Marié(e)",
        montant: 60000,
        montant_par_enfant: 10000
      }];
      var situationActuelle = (_this$data_tb5 = this.data_tb1) === null || _this$data_tb5 === void 0 || (_this$data_tb5 = _this$data_tb5.matrimoniale) === null || _this$data_tb5 === void 0 ? void 0 : _this$data_tb5.trim().toUpperCase().charAt(0);
      var nombreEnfants = this.parseMontant((_this$data_tb6 = this.data_tb1) === null || _this$data_tb6 === void 0 ? void 0 : _this$data_tb6.nbre_enfant);
      if (!situationActuelle || isNaN(nombreEnfants)) {
        return;
      }
      var situationTrouvee = montantParSituation.find(function (el) {
        return el.situation.toUpperCase().charAt(0) === situationActuelle;
      });
      if (!situationTrouvee) {
        return;
      }
      var montantBase = this.parseMontant(situationTrouvee.montant);
      var montantParEnfant = this.parseMontant(situationTrouvee.montant_par_enfant);
      var ravTheorique = montantBase + nombreEnfants * montantParEnfant;
      return ravTheorique;
    },
    getTauxEndettement: function getTauxEndettement() {
      var _this6 = this,
        _this$taux_endettemen3,
        _this$taux_endettemen4,
        _this$rav;
      var salaire = this.getRevenuSalaire();
      var autre_revenus = this.getRevenuAutre();
      var _this$getRemboursemen = this.getRemboursement(),
        remb_autre = _this$getRemboursemen.remb_autre,
        remb_nouveau = _this$getRemboursemen.remb_nouveau;
      var rav_theorique = this.getRAVTheorique();
      var rav_reel = salaire + autre_revenus - (remb_autre + remb_nouveau);
      var rav_reel_gt_rav_theorique = rav_reel > rav_theorique;
      Object.entries({
        rav_theorique: rav_theorique,
        rav_reel: rav_reel,
        rav_reel_gt_rav_theorique: rav_reel_gt_rav_theorique
      }).forEach(function (_ref2) {
        var _ref3 = _slicedToArray(_ref2, 2),
          key = _ref3[0],
          value = _ref3[1];
        if (!_this6.rav) _this6.rav = {};
        if (!_this6.rav[key]) {
          _this6.rav[key] = {
            value: 0
          };
        }
        _this6.rav[key].value = value;
      });

      // Vérifie que salaire et autre_revenus sont des nombres valides
      if (typeof salaire !== "number" || isNaN(salaire) || salaire <= 0) {
        return {
          taux_endettement: 0,
          rav: 0,
          rav_theorique: rav_theorique,
          rav_reel: rav_reel,
          rav_reel_gt_rav_theorique: rav_reel_gt_rav_theorique
        };
      }

      // const remb_autre = this.localeStringToFloat(this.taux_endettement?.remb_autre_credit?.value) || 0;
      // const remb_nouveau = this.localeStringToFloat(this.taux_endettement?.remb_nouveau_credit?.value) || 0;
      var total_revenus = salaire + (typeof autre_revenus === "number" ? autre_revenus : 0);
      var total_remb = remb_autre + remb_nouveau;
      var taux_endettement = (total_revenus > 0 ? total_remb / total_revenus : 0) * 100;
      var rav = total_revenus - total_remb;
      if ((_this$taux_endettemen3 = this.taux_endettement) !== null && _this$taux_endettemen3 !== void 0 && _this$taux_endettemen3.taux_endettement) {
        this.taux_endettement.taux_endettement.value = taux_endettement;
      }
      if ((_this$taux_endettemen4 = this.taux_endettement) !== null && _this$taux_endettemen4 !== void 0 && _this$taux_endettemen4.rav) {
        this.taux_endettement.rav.value = rav;
      }
      if ((_this$rav = this.rav) !== null && _this$rav !== void 0 && _this$rav.rav) {
        this.rav.rav.value = rav;
      }
      this.syncTEWithFormData();
      return {
        taux_endettement: Math.round(taux_endettement * 100) / 100,
        rav: Math.round(rav * 100) / 100,
        rav_theorique: rav_theorique,
        rav_reel: rav_reel,
        rav_reel_gt_rav_theorique: rav_reel_gt_rav_theorique
      };
    },
    syncTEWithFormData: function syncTEWithFormData() {
      var _this7 = this;
      Object.entries(this.taux_endettement).forEach(function (_ref4) {
        var _ref5 = _slicedToArray(_ref4, 2),
          key = _ref5[0],
          value = _ref5[1];
        if (!_this7.formDataToBeWatched.taux_endettement) {
          _this7.formDataToBeWatched.taux_endettement = {};
        }
        _this7.formDataToBeWatched.taux_endettement[key] = value.value;
      });
      Object.entries(this.rav).forEach(function (_ref6) {
        var _ref7 = _slicedToArray(_ref6, 2),
          key = _ref7[0],
          value = _ref7[1];
        if (!_this7.formDataToBeWatched.rav) {
          _this7.formDataToBeWatched.rav = {};
        }
        _this7.formDataToBeWatched.rav[key] = value.value;
      });
    },
    accentuate: function accentuate(el) {
      if (!el) return false;
      // return el?.user_id === (this.authenticatedUser?.id ?? this.authenticatedUser?.user_id);
      return (el === null || el === void 0 ? void 0 : el.by_ana_de) !== true;
    },
    onRequestTypeChange: function onRequestTypeChange() {
      this.handleInput();
    },
    checkboxValSegEnt: function checkboxValSegEnt(segment_entreprise, id) {
      var _this8 = this;
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
        _services_credit_service__WEBPACK_IMPORTED_MODULE_2__["default"].typeOfChefDCEI(segment_entreprise, this.meta_data.cred_pub_key, tbVal).then(function (res) {
          var ObjKey = res.data[0];
          var ObjVal = res.data[1];
          _this8.formDataToBeWatched[ObjKey] = ObjVal;
          if (!['', null, undefined].includes(res === null || res === void 0 ? void 0 : res.data[2])) {
            var _res$data$2$, _res$data$2$2;
            var ObjKey2 = (_res$data$2$ = res === null || res === void 0 ? void 0 : res.data[2][0]) !== null && _res$data$2$ !== void 0 ? _res$data$2$ : null;
            var ObjVal2 = (_res$data$2$2 = res === null || res === void 0 ? void 0 : res.data[2][1]) !== null && _res$data$2$2 !== void 0 ? _res$data$2$2 : null;
            if (!['', null, undefined].includes(ObjKey2)) {
              _this8.formDataToBeWatched[ObjKey2] = ObjVal2;
            }
          }
        })["catch"](function (err) {
          //  console.log(err)
        });
      }
    },
    setAllDefaultFields: function setAllDefaultFields(createdKey) {
      var _this9 = this;
      this.formDataToBeWatched = this.meta_data['dossier_credit'][createdKey];
      setTimeout(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var _this9$formDataToBeWa;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              if (((_this9$formDataToBeWa = _this9.formDataToBeWatched) === null || _this9$formDataToBeWa === void 0 ? void 0 : _this9$formDataToBeWa.type_credit) != "") {
                _this9.dpcredit1 = !_this9.dpcredit1;
              }
            case 1:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      })), 100);
    },
    setAllDefaultFieldsRecByCaf: function setAllDefaultFieldsRecByCaf() {
      var _this0 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        var _this0$meta_data$doss, _this0$meta_data$doss2, _this0$meta_data$doss3, _this0$meta_data$doss4, _this0$meta_data$doss5, _this0$meta_data$doss6;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _this0.formDataToBeWatched.denomination_client = ((_this0$meta_data$doss = _this0.meta_data['dossier_credit']) === null || _this0$meta_data$doss === void 0 || (_this0$meta_data$doss = _this0$meta_data$doss.caf_recorded_file) === null || _this0$meta_data$doss === void 0 || (_this0$meta_data$doss = _this0$meta_data$doss.client) === null || _this0$meta_data$doss === void 0 ? void 0 : _this0$meta_data$doss.nomcli) + ' ' + ((_this0$meta_data$doss2 = _this0.meta_data['dossier_credit']) === null || _this0$meta_data$doss2 === void 0 || (_this0$meta_data$doss2 = _this0$meta_data$doss2.caf_recorded_file) === null || _this0$meta_data$doss2 === void 0 || (_this0$meta_data$doss2 = _this0$meta_data$doss2.client) === null || _this0$meta_data$doss2 === void 0 ? void 0 : _this0$meta_data$doss2.prenomcli);
              _this0.formDataToBeWatched.type_demande = (_this0$meta_data$doss3 = _this0.meta_data['dossier_credit']) === null || _this0$meta_data$doss3 === void 0 || (_this0$meta_data$doss3 = _this0$meta_data$doss3.caf_recorded_file) === null || _this0$meta_data$doss3 === void 0 ? void 0 : _this0$meta_data$doss3.type_demande;
              _this0.formDataToBeWatched.type_credit = (_this0$meta_data$doss4 = _this0.meta_data['dossier_credit']) === null || _this0$meta_data$doss4 === void 0 || (_this0$meta_data$doss4 = _this0$meta_data$doss4.caf_recorded_file) === null || _this0$meta_data$doss4 === void 0 ? void 0 : _this0$meta_data$doss4.type_credit;
              _this0.formDataToBeWatched.contact_client = (_this0$meta_data$doss5 = _this0.meta_data['dossier_credit']) === null || _this0$meta_data$doss5 === void 0 || (_this0$meta_data$doss5 = _this0$meta_data$doss5.caf_recorded_file) === null || _this0$meta_data$doss5 === void 0 ? void 0 : _this0$meta_data$doss5.phone;
              _this0.formDataToBeWatched.email_client = (_this0$meta_data$doss6 = _this0.meta_data['dossier_credit']) === null || _this0$meta_data$doss6 === void 0 || (_this0$meta_data$doss6 = _this0$meta_data$doss6.caf_recorded_file) === null || _this0$meta_data$doss6 === void 0 ? void 0 : _this0$meta_data$doss6.email;
              // this.setTypeDemande(this.formDataToBeWatched?.type_demande)
              setTimeout(function () {
                var _this0$meta_data$doss7, _this0$meta_data$doss8, _this0$formDataToBeWa, _this0$formDataToBeWa2, _this0$meta_data$doss9;
                _this0.formDataToBeWatched.type_credit = (_this0$meta_data$doss7 = _this0.meta_data['dossier_credit']) === null || _this0$meta_data$doss7 === void 0 || (_this0$meta_data$doss7 = _this0$meta_data$doss7.caf_recorded_file) === null || _this0$meta_data$doss7 === void 0 ? void 0 : _this0$meta_data$doss7.type_de_pret;
                _this0.formDataToBeWatched.montant_sollicite = (_this0$meta_data$doss8 = _this0.meta_data['dossier_credit']) === null || _this0$meta_data$doss8 === void 0 || (_this0$meta_data$doss8 = _this0$meta_data$doss8.caf_recorded_file) === null || _this0$meta_data$doss8 === void 0 || (_this0$meta_data$doss8 = _this0$meta_data$doss8.montant) === null || _this0$meta_data$doss8 === void 0 ? void 0 : _this0$meta_data$doss8.toString().replace(/\s/g, '');
                _this0.formDataToBeWatched.enc_cumule_apres_acc = Number((_this0$formDataToBeWa = _this0.formDataToBeWatched.encours_actuel) === null || _this0$formDataToBeWa === void 0 ? void 0 : _this0$formDataToBeWa.toString().replace(/\s/g, '')) + Number((_this0$formDataToBeWa2 = _this0.formDataToBeWatched.montant_sollicite) === null || _this0$formDataToBeWa2 === void 0 ? void 0 : _this0$formDataToBeWa2.toString().replace(/\s/g, ''));
                if (((_this0$meta_data$doss9 = _this0.meta_data["dossier_credit"]) === null || _this0$meta_data$doss9 === void 0 || (_this0$meta_data$doss9 = _this0$meta_data$doss9['cred_pub_tb_10009']) === null || _this0$meta_data$doss9 === void 0 ? void 0 : _this0$meta_data$doss9.montant_credit) != undefined) {
                  var _this0$meta_data$doss0, _this0$meta_data$doss1, _this0$meta_data$doss10;
                  _this0.formDataToBeWatched.montant_credit = (_this0$meta_data$doss0 = _this0.meta_data["dossier_credit"]) === null || _this0$meta_data$doss0 === void 0 || (_this0$meta_data$doss0 = _this0$meta_data$doss0['cred_pub_tb_10009']) === null || _this0$meta_data$doss0 === void 0 ? void 0 : _this0$meta_data$doss0.montant_credit;
                  _this0.formDataToBeWatched.duree_credit = (_this0$meta_data$doss1 = _this0.meta_data["dossier_credit"]) === null || _this0$meta_data$doss1 === void 0 || (_this0$meta_data$doss1 = _this0$meta_data$doss1['cred_pub_tb_10009']) === null || _this0$meta_data$doss1 === void 0 ? void 0 : _this0$meta_data$doss1.duree_credit;
                  _this0.formDataToBeWatched.taux = (_this0$meta_data$doss10 = _this0.meta_data["dossier_credit"]) === null || _this0$meta_data$doss10 === void 0 || (_this0$meta_data$doss10 = _this0$meta_data$doss10['cred_pub_tb_10009']) === null || _this0$meta_data$doss10 === void 0 ? void 0 : _this0$meta_data$doss10.taux;
                } else {
                  var _this0$meta_data$doss11;
                  _this0.formDataToBeWatched.montant_credit = (_this0$meta_data$doss11 = _this0.meta_data['dossier_credit']) === null || _this0$meta_data$doss11 === void 0 || (_this0$meta_data$doss11 = _this0$meta_data$doss11.caf_recorded_file) === null || _this0$meta_data$doss11 === void 0 || (_this0$meta_data$doss11 = _this0$meta_data$doss11.montant) === null || _this0$meta_data$doss11 === void 0 ? void 0 : _this0$meta_data$doss11.toString().replace(/\s/g, '');
                }
              }, 1000);
              setTimeout(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
                var _this0$formDataToBeWa3;
                return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                  while (1) switch (_context3.prev = _context3.next) {
                    case 0:
                      if (((_this0$formDataToBeWa3 = _this0.formDataToBeWatched) === null || _this0$formDataToBeWa3 === void 0 ? void 0 : _this0$formDataToBeWa3.type_credit) != "") {
                        _this0.dpcredit1 = !_this0.dpcredit1;
                      }
                    case 1:
                    case "end":
                      return _context3.stop();
                  }
                }, _callee3);
              })), 100);
            case 7:
            case "end":
              return _context4.stop();
          }
        }, _callee4);
      }))();
    },
    setAllDefaultFieldsRecByEnr: function setAllDefaultFieldsRecByEnr() {
      var _this1 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
        var _this1$meta_data$doss, _this1$meta_data$doss2, _this1$meta_data$doss3, _this1$meta_data$doss4, _this1$meta_data$doss5, _this1$meta_data$doss6;
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              _this1.formDataToBeWatched.denomination_client = ((_this1$meta_data$doss = _this1.meta_data['dossier_credit']) === null || _this1$meta_data$doss === void 0 || (_this1$meta_data$doss = _this1$meta_data$doss.doss_central_file_recorder) === null || _this1$meta_data$doss === void 0 || (_this1$meta_data$doss = _this1$meta_data$doss.client) === null || _this1$meta_data$doss === void 0 ? void 0 : _this1$meta_data$doss.nomcli) + ' ' + ((_this1$meta_data$doss2 = _this1.meta_data['dossier_credit']) === null || _this1$meta_data$doss2 === void 0 || (_this1$meta_data$doss2 = _this1$meta_data$doss2.doss_central_file_recorder) === null || _this1$meta_data$doss2 === void 0 || (_this1$meta_data$doss2 = _this1$meta_data$doss2.client) === null || _this1$meta_data$doss2 === void 0 ? void 0 : _this1$meta_data$doss2.prenomcli);
              _this1.formDataToBeWatched.type_demande = (_this1$meta_data$doss3 = _this1.meta_data['dossier_credit']) === null || _this1$meta_data$doss3 === void 0 || (_this1$meta_data$doss3 = _this1$meta_data$doss3.doss_central_file_recorder) === null || _this1$meta_data$doss3 === void 0 ? void 0 : _this1$meta_data$doss3.type_demande;
              _this1.formDataToBeWatched.type_credit = (_this1$meta_data$doss4 = _this1.meta_data['dossier_credit']) === null || _this1$meta_data$doss4 === void 0 || (_this1$meta_data$doss4 = _this1$meta_data$doss4.doss_central_file_recorder) === null || _this1$meta_data$doss4 === void 0 ? void 0 : _this1$meta_data$doss4.type_credit;
              _this1.formDataToBeWatched.contact_client = (_this1$meta_data$doss5 = _this1.meta_data['dossier_credit']) === null || _this1$meta_data$doss5 === void 0 || (_this1$meta_data$doss5 = _this1$meta_data$doss5.doss_central_file_recorder) === null || _this1$meta_data$doss5 === void 0 ? void 0 : _this1$meta_data$doss5.phone;
              _this1.formDataToBeWatched.email_client = (_this1$meta_data$doss6 = _this1.meta_data['dossier_credit']) === null || _this1$meta_data$doss6 === void 0 || (_this1$meta_data$doss6 = _this1$meta_data$doss6.doss_central_file_recorder) === null || _this1$meta_data$doss6 === void 0 ? void 0 : _this1$meta_data$doss6.email;
              // this.setTypeDemande(this.formDataToBeWatched?.type_demande)
              setTimeout(function () {
                var _this1$meta_data$doss7, _this1$meta_data$doss8, _this1$formDataToBeWa, _this1$formDataToBeWa2, _this1$meta_data$doss9;
                _this1.formDataToBeWatched.type_credit = (_this1$meta_data$doss7 = _this1.meta_data['dossier_credit']) === null || _this1$meta_data$doss7 === void 0 || (_this1$meta_data$doss7 = _this1$meta_data$doss7.doss_central_file_recorder) === null || _this1$meta_data$doss7 === void 0 ? void 0 : _this1$meta_data$doss7.type_de_pret;
                _this1.formDataToBeWatched.montant_sollicite = (_this1$meta_data$doss8 = _this1.meta_data['dossier_credit']) === null || _this1$meta_data$doss8 === void 0 || (_this1$meta_data$doss8 = _this1$meta_data$doss8.doss_central_file_recorder) === null || _this1$meta_data$doss8 === void 0 || (_this1$meta_data$doss8 = _this1$meta_data$doss8.montant) === null || _this1$meta_data$doss8 === void 0 ? void 0 : _this1$meta_data$doss8.toString().replace(/\s/g, '');
                _this1.formDataToBeWatched.enc_cumule_apres_acc = Number((_this1$formDataToBeWa = _this1.formDataToBeWatched.encours_actuel) === null || _this1$formDataToBeWa === void 0 ? void 0 : _this1$formDataToBeWa.toString().replace(/\s/g, '')) + Number((_this1$formDataToBeWa2 = _this1.formDataToBeWatched.montant_sollicite) === null || _this1$formDataToBeWa2 === void 0 ? void 0 : _this1$formDataToBeWa2.toString().replace(/\s/g, ''));
                if (((_this1$meta_data$doss9 = _this1.meta_data["dossier_credit"]) === null || _this1$meta_data$doss9 === void 0 || (_this1$meta_data$doss9 = _this1$meta_data$doss9['cred_pub_tb_10009']) === null || _this1$meta_data$doss9 === void 0 ? void 0 : _this1$meta_data$doss9.montant_credit) != undefined) {
                  var _this1$meta_data$doss0, _this1$meta_data$doss1, _this1$meta_data$doss10;
                  _this1.formDataToBeWatched.montant_credit = (_this1$meta_data$doss0 = _this1.meta_data["dossier_credit"]) === null || _this1$meta_data$doss0 === void 0 || (_this1$meta_data$doss0 = _this1$meta_data$doss0['cred_pub_tb_10009']) === null || _this1$meta_data$doss0 === void 0 ? void 0 : _this1$meta_data$doss0.montant_credit;
                  _this1.formDataToBeWatched.duree_credit = (_this1$meta_data$doss1 = _this1.meta_data["dossier_credit"]) === null || _this1$meta_data$doss1 === void 0 || (_this1$meta_data$doss1 = _this1$meta_data$doss1['cred_pub_tb_10009']) === null || _this1$meta_data$doss1 === void 0 ? void 0 : _this1$meta_data$doss1.duree_credit;
                  _this1.formDataToBeWatched.taux = (_this1$meta_data$doss10 = _this1.meta_data["dossier_credit"]) === null || _this1$meta_data$doss10 === void 0 || (_this1$meta_data$doss10 = _this1$meta_data$doss10['cred_pub_tb_10009']) === null || _this1$meta_data$doss10 === void 0 ? void 0 : _this1$meta_data$doss10.taux;
                } else {
                  var _this1$meta_data$doss11;
                  _this1.formDataToBeWatched.montant_credit = (_this1$meta_data$doss11 = _this1.meta_data['dossier_credit']) === null || _this1$meta_data$doss11 === void 0 || (_this1$meta_data$doss11 = _this1$meta_data$doss11.doss_central_file_recorder) === null || _this1$meta_data$doss11 === void 0 || (_this1$meta_data$doss11 = _this1$meta_data$doss11.montant) === null || _this1$meta_data$doss11 === void 0 ? void 0 : _this1$meta_data$doss11.toString().replace(/\s/g, '');
                }
              }, 1000);
              setTimeout(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
                var _this1$formDataToBeWa3;
                return _regeneratorRuntime().wrap(function _callee5$(_context5) {
                  while (1) switch (_context5.prev = _context5.next) {
                    case 0:
                      // setTimeout(async () => {
                      //     let matcli = await this.fetchClientsAll(this.formDataToBeWatched.matricule_client)
                      //     this.matricule_client = matcli[0]
                      // }, 0)
                      if (((_this1$formDataToBeWa3 = _this1.formDataToBeWatched) === null || _this1$formDataToBeWa3 === void 0 ? void 0 : _this1$formDataToBeWa3.type_credit) != "") {
                        _this1.dpcredit1 = !_this1.dpcredit1;
                      }
                    case 1:
                    case "end":
                      return _context5.stop();
                  }
                }, _callee5);
              })), 100);
            case 7:
            case "end":
              return _context6.stop();
          }
        }, _callee6);
      }))();
    },
    selectTypeClientele: function selectTypeClientele(typeDeClientele) {
      var _this10 = this;
      var tbVal = null;
      var credVal = this.determineCredPubTablesFromDosCred(this.meta_data.dossier_credit);
      if (credVal[0]) {
        tbVal = credVal[2];
        _services_credit_service__WEBPACK_IMPORTED_MODULE_2__["default"].typeOfDispatcher(typeDeClientele, this.meta_data.cred_pub_key, tbVal).then(function (res) {
          _this10.formDataToBeWatched.disp_risq_filiale = res.data;
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
      var _this$meta_data$dossi4;
      var existance;
      var experience = (_this$meta_data$dossi4 = this.meta_data.dossier_credit) === null || _this$meta_data$dossi4 === void 0 || (_this$meta_data$dossi4 = _this$meta_data$dossi4.cred_pub_tb_00) === null || _this$meta_data$dossi4 === void 0 ? void 0 : _this$meta_data$dossi4.experience_secteur;
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
      var _this11 = this;
      _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["default"].loadUserData().then(function (res) {
        _this11.send2Backend(res, 0, 0);
      })["catch"](function (err) {
        _this11.loadWithError(err);
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
      this.handleInput();
    },
    onChange: function onChange(e) {
      if (e.target.value == "Non") {
        this.disp = true;
      } else {
        this.disp = false;
      }
    },
    populateFormData: function populateFormData(cred_pub_tb_120004, cred_pub_tb_14070, cred_pub_tb_120001) {
      var _cred_pub_tb_120004$f,
        _cred_pub_tb_120004$f2,
        _this$formDataToBeWat3,
        _cred_pub_tb_120004$f3,
        _this12 = this;
      if (cred_pub_tb_120004 !== null && cred_pub_tb_120004 !== void 0 && cred_pub_tb_120004.tva) {
        this.formDataToBeWatched.tva = cred_pub_tb_120004 === null || cred_pub_tb_120004 === void 0 ? void 0 : cred_pub_tb_120004.tva;
      }
      if ((cred_pub_tb_120004 === null || cred_pub_tb_120004 === void 0 || (_cred_pub_tb_120004$f = cred_pub_tb_120004.facilites_existante) === null || _cred_pub_tb_120004$f === void 0 ? void 0 : _cred_pub_tb_120004$f.length) > 0) {
        var _this$formDataToBeWat;
        this.formDataToBeWatched.facilites_existante = cred_pub_tb_120004 === null || cred_pub_tb_120004 === void 0 ? void 0 : cred_pub_tb_120004.facilites_existante;
        this.facilites_existante = (_this$formDataToBeWat = this.formDataToBeWatched) === null || _this$formDataToBeWat === void 0 ? void 0 : _this$formDataToBeWat.facilites_existante;
      }
      if ((cred_pub_tb_120004 === null || cred_pub_tb_120004 === void 0 || (_cred_pub_tb_120004$f2 = cred_pub_tb_120004.facilites_selectionnees) === null || _cred_pub_tb_120004$f2 === void 0 ? void 0 : _cred_pub_tb_120004$f2.length) > 0) {
        var _this$formDataToBeWat2;
        this.formDataToBeWatched.propositions_selectionnees = cred_pub_tb_120004 === null || cred_pub_tb_120004 === void 0 ? void 0 : cred_pub_tb_120004.facilites_selectionnees;
        this.propositions_selectionnees = JSON.parse(JSON.stringify((_this$formDataToBeWat2 = this.formDataToBeWatched) === null || _this$formDataToBeWat2 === void 0 ? void 0 : _this$formDataToBeWat2.propositions_selectionnees));
      }
      this.formDataToBeWatched.facilites_sollicitees = cred_pub_tb_120004 === null || cred_pub_tb_120004 === void 0 ? void 0 : cred_pub_tb_120004.facilites_sollicitees;
      this.facilites_sollicitees = (_this$formDataToBeWat3 = this.formDataToBeWatched) === null || _this$formDataToBeWat3 === void 0 ? void 0 : _this$formDataToBeWat3.facilites_sollicitees;
      if ((cred_pub_tb_120004 === null || cred_pub_tb_120004 === void 0 || (_cred_pub_tb_120004$f3 = cred_pub_tb_120004.facilites_sollicitees) === null || _cred_pub_tb_120004$f3 === void 0 ? void 0 : _cred_pub_tb_120004$f3.length) > 0) {
        var _this$formDataToBeWat4, _this$meta_data$dossi5;
        this.formDataToBeWatched.propositions_concours = JSON.parse(JSON.stringify(cred_pub_tb_120004 === null || cred_pub_tb_120004 === void 0 ? void 0 : cred_pub_tb_120004.facilites_sollicitees));
        this.propositions_concours = (_this$formDataToBeWat4 = this.formDataToBeWatched) === null || _this$formDataToBeWat4 === void 0 ? void 0 : _this$formDataToBeWat4.propositions_concours;
        if (((_this$meta_data$dossi5 = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi5 === void 0 || (_this$meta_data$dossi5 = _this$meta_data$dossi5[this.credpubIn0]) === null || _this$meta_data$dossi5 === void 0 || (_this$meta_data$dossi5 = _this$meta_data$dossi5.propositions_selectionnees) === null || _this$meta_data$dossi5 === void 0 ? void 0 : _this$meta_data$dossi5.length) > 0) {
          var _this$meta_data$dossi6;
          this.propositions_selectionnees = (_this$meta_data$dossi6 = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi6 === void 0 || (_this$meta_data$dossi6 = _this$meta_data$dossi6[this.credpubIn0]) === null || _this$meta_data$dossi6 === void 0 ? void 0 : _this$meta_data$dossi6.propositions_selectionnees;
          this.propositions_selectionnees = this.propositions_selectionnees.map(function (ed) {
            return _objectSpread(_objectSpread({}, ed), {}, {
              comeFrom: _this12.credpubIn0
            });
          });
        }
      }

      // --- Bloc commun pour cred_pub_tb_14070 et cred_pub_tb_120001 ---
      var dataSource = cred_pub_tb_14070 || cred_pub_tb_120001;
      if (dataSource) {
        this.status_object = dataSource === null || dataSource === void 0 ? void 0 : dataSource.status_object;
        this.updateRevenuData(dataSource);
        // this.revenu_domicilie = dataSource.revenu_domicilie_afg ?? dataSource.revenu_domicilie ?? []
        // this.formDataToBeWatched.taux_qc1 = this.revenu_domicilie?.[0]?.['taux_qc1'] || 0
        this.formDataToBeWatched.revenu_total_colonne_emprunteur = dataSource.revenu_total_colonne_emprunteur;
        this.formDataToBeWatched.revenu_total_colonne_montant_pondere = dataSource.revenu_total_colonne_montant_pondere;
        this.formDataToBeWatched.pourcentage_quotite = dataSource.pourcentage_quotite;
        this.formDataToBeWatched.quotite_cessible = dataSource.quotite_cessible;
        this.formDataToBeWatched.quotite_cessible_disponible = dataSource === null || dataSource === void 0 ? void 0 : dataSource.quotite_cessible_disponible;
        this.formDataToBeWatched.quotite_cessible_disponible_general = dataSource === null || dataSource === void 0 ? void 0 : dataSource.quotite_cessible_disponible_general;
        this.formDataToBeWatched.quotite_cessible_general = dataSource.quotite_cessible_general;
        this.formDataToBeWatched.pourcentage_quotite_general = dataSource.pourcentage_quotite_general;
        this.matrimoniale = dataSource === null || dataSource === void 0 ? void 0 : dataSource.matrimoniale;
      }
      this.handleInput3();
    },
    updateRevenuData: function updateRevenuData(source) {
      var _ref1, _source$revenu_domici, _this$revenu_domicili;
      if (!source) return;

      // On prend revenu_domicilie_afg en priorité, sinon revenu_domicilie
      this.revenu_domicilie = (_ref1 = (_source$revenu_domici = source.revenu_domicilie_afg) !== null && _source$revenu_domici !== void 0 ? _source$revenu_domici : source.revenu_domicilie) !== null && _ref1 !== void 0 ? _ref1 : [];

      // Mise à jour du taux
      this.formDataToBeWatched.taux_qc1 = ((_this$revenu_domicili = this.revenu_domicilie) === null || _this$revenu_domicili === void 0 || (_this$revenu_domicili = _this$revenu_domicili[0]) === null || _this$revenu_domicili === void 0 ? void 0 : _this$revenu_domicili['taux_qc1']) || 0;
    },
    loadRetrieved: function loadRetrieved() {
      var _this$meta_data$dossi7,
        _this$meta_data$dossi8,
        _this$meta_data$dossi9,
        _this$meta_data$dossi1,
        _this13 = this,
        _this$propositions_co3,
        _this$facilites_exist,
        _this$propositions_se2;
      var lentb = this.meta_data["dossier_credit"]["tbs_in_use"];
      var createdKey = this.tb_name;
      var createdKeyArr = createdKey.split("tb");
      createdKey = "cred_pub_tb_" + createdKeyArr[1];
      var cred_pub_tb_120004 = (_this$meta_data$dossi7 = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi7 === void 0 ? void 0 : _this$meta_data$dossi7[this.credpubIn1];
      var cred_pub_tb_120001 = (_this$meta_data$dossi8 = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi8 === void 0 ? void 0 : _this$meta_data$dossi8[this.credpubIn0];
      var cred_pub_tb_14070 = (_this$meta_data$dossi9 = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi9 === void 0 ? void 0 : _this$meta_data$dossi9['cred_pub_tb_14070'];
      if (this.meta_data["dossier_credit"][createdKey] == undefined) {
        this.populateFormData(cred_pub_tb_120004, cred_pub_tb_14070, cred_pub_tb_120001);
      }
      if (lentb.length > 0) {
        var _this$meta_data$dossi0;
        if (this.meta_data["dossier_credit"][createdKey] != undefined) {
          var _this$formDataToBeWat5, _this$formDataToBeWat6, _this$formDataToBeWat7, _this$formDataToBeWat8;
          this.formDataToBeWatched = this.meta_data["dossier_credit"][createdKey];
          this.facilites_existante = (_this$formDataToBeWat5 = this.formDataToBeWatched) === null || _this$formDataToBeWat5 === void 0 ? void 0 : _this$formDataToBeWat5.facilites_existante;
          this.facilites_sollicitees = (_this$formDataToBeWat6 = this.formDataToBeWatched) === null || _this$formDataToBeWat6 === void 0 ? void 0 : _this$formDataToBeWat6.facilites_sollicitees;
          this.propositions_selectionnees = (_this$formDataToBeWat7 = this.formDataToBeWatched) === null || _this$formDataToBeWat7 === void 0 ? void 0 : _this$formDataToBeWat7.propositions_selectionnees;
          if (((_this$formDataToBeWat8 = this.formDataToBeWatched) === null || _this$formDataToBeWat8 === void 0 || (_this$formDataToBeWat8 = _this$formDataToBeWat8.propositions_concours) === null || _this$formDataToBeWat8 === void 0 ? void 0 : _this$formDataToBeWat8.length) > 0) {
            var _this$formDataToBeWat9;
            this.propositions_concours = (_this$formDataToBeWat9 = this.formDataToBeWatched) === null || _this$formDataToBeWat9 === void 0 ? void 0 : _this$formDataToBeWat9.propositions_concours;
          }
          this.status_object = this.meta_data["dossier_credit"][createdKey]["status_object"];
          var dataSource = cred_pub_tb_14070 || cred_pub_tb_120001;
          this.updateRevenuData(dataSource);
        }

        // SET FIRST TIME TO FALSE
        this.formDataToBeWatched.is_first_time = false;
        this.formDataToBeWatched.type_de_clientele = "Particuliers";
        this.formDataToBeWatched.carcasse_type = (_this$meta_data$dossi0 = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi0 === void 0 ? void 0 : _this$meta_data$dossi0.applied_templ_name;
      } else {
        // SET FIRST TIME TO FALSE
        this.formDataToBeWatched.is_first_time = false;
        this.formDataToBeWatched.type_de_clientele = "Particuliers";
      }
      if (((_this$meta_data$dossi1 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi1 === void 0 ? void 0 : _this$meta_data$dossi1['cred_pub_tb_10009']) != undefined) {
        var data_tb9 = this.meta_data["dossier_credit"]['cred_pub_tb_10009'];
        if (data_tb9 !== null && data_tb9 !== void 0 && data_tb9.frais_credits) {
          data_tb9 === null || data_tb9 === void 0 || data_tb9.frais_credits.forEach(function (el) {
            if (el.libelle == "Prime d'assurance") {
              _this13.formDataToBeWatched.taux_prime = el.taux;
            }
          });
        }
        this.formDataToBeWatched.taux = data_tb9 === null || data_tb9 === void 0 ? void 0 : data_tb9.taux;
        this.formDataToBeWatched.duree_credit = data_tb9 === null || data_tb9 === void 0 ? void 0 : data_tb9.duree_credit;
        this.formDataToBeWatched.montant_credit = data_tb9 === null || data_tb9 === void 0 ? void 0 : data_tb9.montant_credit;
        this.formDataToBeWatched.date_echeance = data_tb9 === null || data_tb9 === void 0 ? void 0 : data_tb9.date_echeance;
        this.formDataToBeWatched.mode_paiement_demande = data_tb9 === null || data_tb9 === void 0 ? void 0 : data_tb9.mode_paiement_demande;
      }
      (_this$propositions_co3 = this.propositions_concours) === null || _this$propositions_co3 === void 0 || _this$propositions_co3.forEach(function (elm) {
        if (elm && elm.by_ana_de === undefined) {
          var _this13$authenticated, _this13$authenticated2, _this13$authenticated3;
          if ((elm === null || elm === void 0 ? void 0 : elm.user_id) == ((_this13$authenticated = (_this13$authenticated2 = _this13.authenticatedUser) === null || _this13$authenticated2 === void 0 ? void 0 : _this13$authenticated2.id) !== null && _this13$authenticated !== void 0 ? _this13$authenticated : (_this13$authenticated3 = _this13.authenticatedUser) === null || _this13$authenticated3 === void 0 ? void 0 : _this13$authenticated3.user_id)) {
            elm["by_ana_de"] = true;
          } else {
            elm["by_ana_de"] = false;
          }
        }
      });
      (_this$facilites_exist = this.facilites_existante) === null || _this$facilites_exist === void 0 || _this$facilites_exist.forEach(function (elm) {
        if (elm && elm.by_ana_de === undefined) {
          var _this13$authenticated4, _this13$authenticated5, _this13$authenticated6;
          if ((elm === null || elm === void 0 ? void 0 : elm.user_id) == ((_this13$authenticated4 = (_this13$authenticated5 = _this13.authenticatedUser) === null || _this13$authenticated5 === void 0 ? void 0 : _this13$authenticated5.id) !== null && _this13$authenticated4 !== void 0 ? _this13$authenticated4 : (_this13$authenticated6 = _this13.authenticatedUser) === null || _this13$authenticated6 === void 0 ? void 0 : _this13$authenticated6.user_id)) {
            elm["by_ana_de"] = true;
          } else {
            elm["by_ana_de"] = false;
          }
        }
      });
      (_this$propositions_se2 = this.propositions_selectionnees) === null || _this$propositions_se2 === void 0 || _this$propositions_se2.forEach(function (elm) {
        if (elm && elm.by_ana_de === undefined) {
          var _this13$authenticated7, _this13$authenticated8, _this13$authenticated9;
          if ((elm === null || elm === void 0 ? void 0 : elm.user_id) == ((_this13$authenticated7 = (_this13$authenticated8 = _this13.authenticatedUser) === null || _this13$authenticated8 === void 0 ? void 0 : _this13$authenticated8.id) !== null && _this13$authenticated7 !== void 0 ? _this13$authenticated7 : (_this13$authenticated9 = _this13.authenticatedUser) === null || _this13$authenticated9 === void 0 ? void 0 : _this13$authenticated9.user_id)) {
            elm["by_ana_de"] = true;
          } else {
            elm["by_ana_de"] = false;
          }
        }
      });
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
    },
    emitData: function emitData() {
      // EventBus.$emit("dossier-updated-dcp-1", {
      //     data_tb1: this.formDataToBeWatched,
      // });
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
    precomputeScore: function precomputeScore() {
      var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      this.meta_parseable["type_table"] = a;
      var scoringVar = [];
      if (a == "organisation") {
        scoringVar = ["vivre", "competences_manageriales", "formalisation", "interaction"];
      }
      //   else if (a=="evaluation") {
      //     scoringVar = ["diversification", "structure_fournisseur", "structure_clientele", "saisonnalite", "couverture_geographique", "concurrence"];
      //   }
      if (a == "evaluation") {
        scoringVar = ["technologie", "risque_juridique", "risque_politique"];
      }
      if (a == "activite") {
        scoringVar = ["diversification", "structure_fournisseur", "structure_clientele", "saisonnalite", "couverture_geographique", "concurrence"];
      }
      if (a == "competence") {
        scoringVar = ["maitrise", "dynamisme", "compet_gestion", "avis_cc", "reputation", "stabilite", "competence", "historique"];
      }
      for (var i = 0; i < scoringVar.length; i++) {
        if (this.formDataToBeWatched[scoringVar[i]] == "") {
          return false;
        }
      }
      return true;
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
    checkboxValCashCallPartieLie: function checkboxValCashCallPartieLie(event) {
      if (event.target.checked) {
        this.formDataToBeWatched.partie_lie = event.target.value;
      } else {
        this.formDataToBeWatched.partie_lie = "";
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
      var _this14 = this;
      // const cachedCreditTypes = localStorage.getItem('banque_credit_types');
      // if (!cachedCreditTypes) {
      _services_credit_service__WEBPACK_IMPORTED_MODULE_2__["default"].loadCreditBanques({
        "categorie_client": "Retail"
      }).then(function (res) {
        _this14.type_credits = res.data;
        // localStorage.setItem('banque_credit_types', JSON.stringify(res.data));
        setTimeout(function () {
          _this14.handleChangeTypeCredit(_this14.formDataToBeWatched.type_credit);
        }, 1000);
      })["catch"](function (err) {
        console.log(err);
      });
      // } else {
      //     let data = JSON.parse(cachedCreditTypes);
      //     this.type_credits = data;
      //     setTimeout(() => {
      //         this.handleChangeTypeCredit(this.formDataToBeWatched.type_credit);
      //     }, 1000);
      // }
    },
    handleChangeTypeCredit: function handleChangeTypeCredit(val) {
      var _arguments = arguments,
        _this15 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
        var resetValue, data;
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              resetValue = _arguments.length > 1 && _arguments[1] !== undefined ? _arguments[1] : false;
              _this15.info_sup = "";
              _this15.formDataToBeWatched.taux = _this15.formDataToBeWatched.taux != "" ? _this15.formDataToBeWatched.taux : "";
              _this15.formDataToBeWatched.duree_credit = _this15.formDataToBeWatched.duree_credit != "" ? _this15.formDataToBeWatched.duree_credit : "";
              if (resetValue) {
                _this15.formDataToBeWatched.taux = "";
                _this15.formDataToBeWatched.duree_credit = "";
              }
              data = $.grep(_this15.type_credits, function (v) {
                return v.libelle === val;
              });
              if (data.length > 0) {
                _this15.credit = data[0];
                _this15.formDataToBeWatched.credit = data[0];

                /* await Credit.loadFraisCreditChapCahp(this.credit.slug, slug_banque)
                    .then(res => {
                        this.taxe = res.data.data.Credit.taxe.valeur_taxe;
                    }).catch(err => {
                        console.log(err)
                    }) */

                if (_this15.formDataToBeWatched.taux == "") {
                  _this15.formDataToBeWatched.taux = data[0].taux_max == null ? data[0].taux_min : data[0].taux_max;
                }
                if (_this15.formDataToBeWatched.duree_credit == "") {
                  _this15.formDataToBeWatched.duree_credit = data[0].duree_max == null ? data[0].duree_min : data[0].duree_max;
                }
                if (_this15.credit.duree_min != null && _this15.credit.duree_max != null) {
                  _this15.info_sup = "(Min : ".concat(_this15.credit.duree_min, " Mois, Max : ").concat(_this15.credit.duree_max, " Mois)");
                } else if (_this15.credit.duree_min != null && _this15.credit.duree_min > 1) {
                  _this15.info_sup = "(Min : ".concat(_this15.credit.duree_min, " Mois)");
                } else if (_this15.credit.duree_max != null) {
                  _this15.info_sup = "(Max : ".concat(_this15.credit.duree_max, " Mois)");
                }
                _this15.handleSimulate();
              }
            case 7:
            case "end":
              return _context7.stop();
          }
        }, _callee7);
      }))();
    },
    formatAmount: function formatAmount(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    },
    convertInt: function convertInt(n) {
      var _n$toString;
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
      this.getTauxEndettement();
      this.emitEventForTbEndettement();
      this.emitData();
    },
    addMoreFaciliteExistante: function addMoreFaciliteExistante() {
      var _this$facilites_exist2, _this$authenticatedUs7, _this$authenticatedUs8, _this$authenticatedUs9, _this$authenticatedUs0;
      var nb = (_this$facilites_exist2 = this.facilites_existante) === null || _this$facilites_exist2 === void 0 ? void 0 : _this$facilites_exist2.length;
      this.facilites_existante.push({
        "id": nb + 1,
        "filiale": (_this$authenticatedUs7 = this.authenticatedUser) === null || _this$authenticatedUs7 === void 0 ? void 0 : _this$authenticatedUs7.filiale,
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
        uuid: this.generateUuid(),
        "user_id": (_this$authenticatedUs8 = (_this$authenticatedUs9 = this.authenticatedUser) === null || _this$authenticatedUs9 === void 0 ? void 0 : _this$authenticatedUs9.id) !== null && _this$authenticatedUs8 !== void 0 ? _this$authenticatedUs8 : (_this$authenticatedUs0 = this.authenticatedUser) === null || _this$authenticatedUs0 === void 0 ? void 0 : _this$authenticatedUs0.user_id,
        by_ana_de: true,
        is_locale: true
      });
      this.handleInput();
    },
    removeFaciliteExist: function removeFaciliteExist(index) {
      this.formDataToBeWatched.facilites_existante.splice(index, 1);
      // this.reconstructionFacilitiesSollicites()
      this.handleInput();
      this.sendFacilitesEventMessage();
      this.emitData();
    },
    // formDataVars3(event, index, key) {
    //     this[key][index][event[0]] = event[1]
    //     this.formDataToBeWatched[key] = this[key];
    //     this.getTauxEndettement();
    //     this.sendFacilitesEventMessage();
    //     this.emitData()
    // },
    formDataVars3: function formDataVars3(event, index, key) {
      // Validate event is an array with at least two elements
      if (!Array.isArray(event) || event.length < 2) {
        console.error("Invalid event format in formDataVars3:", event);
        this.$toasted.show("Erreur: Données d'entrée invalides.", {
          duration: 8000
        });
        return;
      }

      // Validate key and index
      if (!this[key] || !Array.isArray(this[key]) || !this[key][index]) {
        //   console.error(`Invalid key (${key}) or index (${index}) in formDataVars3`);
        //   this.$toasted.show("Erreur: Données de formulaire invalides.", { duration: 8000 });
        return;
      }

      // Update data
      this[key][index][event[0]] = event[1];
      this.formDataToBeWatched[key] = this[key];
      this.getTauxEndettement();
      this.sendFacilitesEventMessage();
      this.emitData();
    },
    sendFacilitesEventMessage: function sendFacilitesEventMessage() {
      EventBus.$emit("dossier-updated-dcpp-pcp4-0-1", this.facilites_sollicitees);
    },
    formDataVarsGaranties: function formDataVarsGaranties(event, index, key) {
      this[key][index][event[0]] = event[1];
      this.formDataToBeWatched[key] = this[key];
      // this.reconstructionFacilitiesSollicites()
      // this.emitEventForTbEndettement()
      this.getTauxEndettement();
    },
    handleInputGaranties: function handleInputGaranties(index, key) {
      this.formDataToBeWatched.facilites_existante = this.facilites_existante;
      this.formDataToBeWatched.propositions_concours = this.propositions_concours;
      if (index >= 0 && index < this.facilites_existante.length && key === 'facilites_existante') {
        var selectedType = this.facilites_existante[index].type_facilite;
        this.facilites_existante[index].facilite_libelle = this.findGroupForType(selectedType, this.transformLoadedCreditsBanques_);
      }
      if (index >= 0 && index < this.propositions_concours.length && key === 'propositions_concours') {
        var _this$propositions_co6;
        this.formDataToBeWatched.propositions_concours = this.propositions_concours;
        var selectedType2 = this.propositions_concours[index].type_facilite;
        this.propositions_concours[index].facilite_libelle = this.findGroupForType(selectedType2, this.transformLoadedCreditsBanques_, 'propositions_concours', index);
        this.propositions_concours[index].infos_fcub = this.findFlexcubeByType('propositions_concours', selectedType2, this.transformLoadedCreditsBanques_, index);
        this.propositions_concours[index].duree = 0;
        this.propositions_concours[index].echeancier = "";
        if (index == 0) {
          var _this$propositions_co4;
          if (((_this$propositions_co4 = this.propositions_concours) === null || _this$propositions_co4 === void 0 ? void 0 : _this$propositions_co4.length) > 1) {
            var _this$propositions_co5;
            var label = (_this$propositions_co5 = this.propositions_concours[index]) === null || _this$propositions_co5 === void 0 ? void 0 : _this$propositions_co5.facilite_libelle;
            for (var idx = 1; idx < this.propositions_concours.length; idx++) {
              var sollicitee = this.propositions_concours[idx];
              if (label != (sollicitee === null || sollicitee === void 0 ? void 0 : sollicitee.facilite_libelle) && ![null, "", undefined].includes(sollicitee === null || sollicitee === void 0 ? void 0 : sollicitee.facilite_libelle)) {
                this.propositions_concours[idx].type_facilite = "";
                this.propositions_concours[idx].facilite_libelle = "";
                this.propositions_concours[idx].infos_fcub = "";
              }
            }
          }
        }

        // Impossible d'avoir des facilités avec des concours differents
        if (((_this$propositions_co6 = this.propositions_concours) === null || _this$propositions_co6 === void 0 ? void 0 : _this$propositions_co6.length) > 1) {
          var _this$propositions_co7, _this$propositions_co8;
          var _label = (_this$propositions_co7 = this.propositions_concours[0]) === null || _this$propositions_co7 === void 0 ? void 0 : _this$propositions_co7.facilite_libelle;
          var typeFte = (_this$propositions_co8 = this.propositions_concours[0]) === null || _this$propositions_co8 === void 0 ? void 0 : _this$propositions_co8.type_facilite;
          if (['', undefined, null].includes(typeFte)) {
            this.propositions_concours[index].type_facilite = "";
            this.propositions_concours[index].facilite_libelle = "";
            this.propositions_concours[index].infos_fcub = "";
            this.$toasted.show("Veuillez d'abord s\xE9lectionner le cr\xE9dit \xE0 la ligne 1 (premi\xE8re ligne) du tableau DCPP-PCP4 : Concours/Facilit\xE9s.", {
              duration: 8000
            });
            return;
          }
          for (var _index = 0; _index < this.propositions_concours.length; _index++) {
            var _sollicitee = this.propositions_concours[_index];
            if (_label != (_sollicitee === null || _sollicitee === void 0 ? void 0 : _sollicitee.facilite_libelle) && ![null, "", undefined].includes(_sollicitee === null || _sollicitee === void 0 ? void 0 : _sollicitee.facilite_libelle)) {
              this.propositions_concours[_index].type_facilite = "";
              this.propositions_concours[_index].facilite_libelle = "";
              this.propositions_concours[_index].infos_fcub = "";
              this.$toasted.show("Il est impossible de b\xE9n\xE9ficier simultan\xE9ment de plusieurs facilit\xE9s ayant des natures de concours diff\xE9rentes du tableau DCPP-PCP4: Concours/Facilit\xE9s.", {
                duration: 8000
              });
              return;
            }
          }
        }
      }
      if (index >= 0 && index < this.propositions_concours.length && key === 'propositions_concours') {
        this.formDataToBeWatched.propositions_concours = this.propositions_concours;
        var _selectedType = this.propositions_concours[index].type_facilite;
        this.propositions_concours[index].facilite_libelle = this.findGroupForType(_selectedType, this.transformLoadedCreditsBanques_, 'propositions_concours', index);
        this.propositions_selectionnees[index].facilite_uuid = this.propositions_concours[index].uuid;
        this.propositions_selectionnees[index].facilite_libelle = this.propositions_concours[index].type_facilite;
      }
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
        if (found) return group;
      }
      return null;
    },
    findGroupForType2: function findGroupForType2(type, creditsData) {
      var _this16 = this;
      var key = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var index = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
      if (!type) return '';
      var _loop = function _loop() {
          var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i2], 2),
            group = _Object$entries2$_i[0],
            items = _Object$entries2$_i[1];
          var found = items.find(function (credit) {
            return credit.libelle === type;
          });
          if (key === 'propositions_concours') {
            var item_sollicite = _this16[key][index];
            var matchingFacilite = _this16.facilites_selectionnees.find(function (facilite) {
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
      for (var _i2 = 0, _Object$entries2 = Object.entries(creditsData); _i2 < _Object$entries2.length; _i2++) {
        _ret = _loop();
        if (_ret) return _ret.v;
      }
      // console.log('hrer')

      return '';
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
    checkboxValSingle2: function checkboxValSingle2(event, index, key) {
      var _event$target;
      this.formDataToBeWatched[key][index][(_event$target = event.target) === null || _event$target === void 0 ? void 0 : _event$target.id] = event.target.value;
      // this.reconstructionFacilitiesSollicites()
      // this.emitEventForTbEndettement()
    },
    handleInput3: function handleInput3() {
      this.formDataToBeWatched.facilites_existante = this.facilites_existante;
      this.formDataToBeWatched.facilites_sollicitees = this.facilites_sollicitees;
      this.formDataToBeWatched.propositions_selectionnees = this.propositions_selectionnees;
      this.formDataToBeWatched.status_object = this.status_object;
    },
    generateUuid: function generateUuid() {
      var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      var uuid = '';
      for (var i = 0; i < 8; i++) {
        uuid += chars.charAt(Math.floor(Math.random() * chars.length));
      }
      return uuid;
    },
    addMorePropositionsConcours: function addMorePropositionsConcours() {
      var _this$formDataToBeWat0, _this$authenticatedUs1, _this$authenticatedUs10, _this$authenticatedUs11, _this$authenticatedUs12, _this$authenticatedUs13, _this$authenticatedUs14, _this$authenticatedUs15;
      var uuid = this.generateUuid();
      var nb = (_this$formDataToBeWat0 = this.formDataToBeWatched.propositions_concours) === null || _this$formDataToBeWat0 === void 0 ? void 0 : _this$formDataToBeWat0.length;
      this.formDataToBeWatched.propositions_concours.push({
        "id": nb + 1,
        "type_facilite": "",
        "uuid": uuid,
        "filiale": (_this$authenticatedUs1 = this.authenticatedUser) === null || _this$authenticatedUs1 === void 0 ? void 0 : _this$authenticatedUs1.filiale,
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
        "user_id": (_this$authenticatedUs10 = (_this$authenticatedUs11 = this.authenticatedUser) === null || _this$authenticatedUs11 === void 0 ? void 0 : _this$authenticatedUs11.id) !== null && _this$authenticatedUs10 !== void 0 ? _this$authenticatedUs10 : (_this$authenticatedUs12 = this.authenticatedUser) === null || _this$authenticatedUs12 === void 0 ? void 0 : _this$authenticatedUs12.user_id,
        by_ana_de: true
      });
      this.propositions_selectionnees.push({
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
        "compte_cash_coll": "",
        "cash_call_percent": "",
        "taux_periodique": "",
        "taux_usure": "",
        "teg_teorique": "",
        "tva_frais_dossier": "",
        user_id: (_this$authenticatedUs13 = (_this$authenticatedUs14 = this.authenticatedUser) === null || _this$authenticatedUs14 === void 0 ? void 0 : _this$authenticatedUs14.id) !== null && _this$authenticatedUs13 !== void 0 ? _this$authenticatedUs13 : (_this$authenticatedUs15 = this.authenticatedUser) === null || _this$authenticatedUs15 === void 0 ? void 0 : _this$authenticatedUs15.user_id,
        by_ana_de: true
      });
      this.handleInput();
    },
    removePropositionsConcours: function removePropositionsConcours(index) {
      this.formDataToBeWatched.propositions_concours.splice(index, 1);
      this.propositions_selectionnees.splice(index, 1);
      this.handleInput();
      this.sendFacilitesEventMessage();
      // this.getQuotiteCessible;
      // this.emitData()
    },
    scoringData: function scoringData(res) {
      var _this17 = this;
      var criteres = res.data.data.criteres;
      criteres.forEach(function (element) {
        if (element.type == 'ppo' || element.type == null) {
          if (element.slug == 'garanties') {
            _this17.data_garanties = element.elements;
          }
        }
      });
    },
    loadScoringData: function loadScoringData() {
      var _this18 = this;
      var cachedScoringCritere = localStorage.getItem('scoring_criteres');
      if (!cachedScoringCritere) {
        _services_credit_service__WEBPACK_IMPORTED_MODULE_2__["default"].loadScoringData().then(function (res) {
          _this18.scoringData(res);
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
      this.list_hors_forfait.push({
        libelle: "",
        checked: true,
        commentaire: "",
        by_ana_de: true
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
    }
  }, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_methods, "formatAmount", function formatAmount(x) {
    return x === null || x === void 0 ? void 0 : x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }), "donneeDeCalcul", function donneeDeCalcul(data, data_facilites) {
    var _this19 = this;
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
        var _String;
        montant_echeance += parseInt((_String = String((facilite === null || facilite === void 0 ? void 0 : facilite.montant_echeance) || 0)) === null || _String === void 0 ? void 0 : _String.replace(/\s/g, ""), 10);
      });
    }
    data.forEach(function (el) {
      var mt = _this19.convertInt(el === null || el === void 0 ? void 0 : el.montant_salaire);
      var montant_qc1 = _this19.convertInt(el === null || el === void 0 ? void 0 : el.montant_qc1);
      var montant_qc2 = _this19.convertInt(el === null || el === void 0 ? void 0 : el.montant_qc2);
      _this19.donnee_calculs["A"].push(_this19.formatAmount(mt));
      _this19.donnee_calculs["B"].push(_this19.formatAmount(montant_qc1));
      _this19.donnee_calculs["F"].push(_this19.formatAmount(montant_qc2));
      _this19.donnee_calculs["H"].push(_this19.formatAmount(el === null || el === void 0 ? void 0 : el.montant_pondere));
      montant_quotite += _this19.convertInt(montant_qc1);
      if ((el === null || el === void 0 ? void 0 : el.taux_qc2) > 0) {
        montant_quotite_legal += _this19.convertInt(montant_qc2);
        montant_pondere_legal += _this19.convertInt(el === null || el === void 0 ? void 0 : el.montant_pondere);
      }
      montant_pondere += _this19.convertInt(el === null || el === void 0 ? void 0 : el.montant_pondere);
    });
    this.donnee_calculs["A"] = "A = " + this.donnee_calculs["A"].join(" + ");
    this.donnee_calculs["B"] = "B = " + this.donnee_calculs["B"].join(" + ");
    this.donnee_calculs["C"] = "C = " + this.formatAmount(montant_quotite) + " / " + this.formatAmount(montant_pondere);
    this.donnee_calculs["D"] = "D = " + this.formatAmount(montant_quotite) + " - " + this.formatAmount(montant_echeance);
    this.donnee_calculs["F"] = "F = " + this.donnee_calculs["F"].join(" + ");
    this.donnee_calculs["E"] = "E = " + this.formatAmount(montant_quotite_legal) + " / " + this.formatAmount(montant_pondere_legal);
    this.donnee_calculs["G"] = "G = " + this.formatAmount(montant_quotite_legal) + " - " + this.formatAmount(montant_echeance);
    this.donnee_calculs["H"] = "H = " + this.donnee_calculs["H"].join(" + ");
  }), "handleInput3", function handleInput3() {
    this.formDataToBeWatched.facilites_existante = this.facilites_existante;
    this.formDataToBeWatched.facilites_sollicitees = this.facilites_sollicitees;
    this.formDataToBeWatched.propositions_concours = this.propositions_concours;
    // this.formDataToBeWatched.garanties_proposees = this.garanties_proposees;
    // this.emitData()
  }), "selTypeRachat", function selTypeRachat(key, index, fieldName, item, event) {
    var value = event === null || event === void 0 ? void 0 : event.target.value;
    var checked = event === null || event === void 0 ? void 0 : event.target.checked;
    if (['', undefined, null, 'Rachat externe'].includes(value)) {
      this[key][index].num_fcub_pret = "";
      this.formDataToBeWatched[key] = this[key];
    }
    this.handleInput();
    this.getRemboursement();
    this.setFraisData(value, index); // Mise à jour des clés [frais_huissier, frais_cheque_certifie] dans facilites_selectionnees en cas de Rachat interne
  }), "setFraisData", function setFraisData(value, index) {
    if (['', undefined, null, 'Rachat interne'].includes(value)) {
      this.propositions_selectionnees[index].frais_huissier = "";
      this.propositions_selectionnees[index].frais_cheque_certifie = "";
      this.formDataToBeWatched.propositions_selectionnees = this.propositions_selectionnees;
    }
  }), "recalculerTVAFraisDossier", function recalculerTVAFraisDossier(event, index, fiedName) {
    var _this$authcheckUsr$tv2, _this$authcheckUsr2;
    var frais = parseFloat(String(event.target.value).replace(/\s+/g, ""));
    var tvaRate = parseFloat((_this$authcheckUsr$tv2 = (_this$authcheckUsr2 = this.authcheckUsr) === null || _this$authcheckUsr2 === void 0 ? void 0 : _this$authcheckUsr2.tva) !== null && _this$authcheckUsr$tv2 !== void 0 ? _this$authcheckUsr$tv2 : 0);

    // On calcule la TVA comme pourcentage (ex: 19.25%)
    this.propositions_selectionnees[index].tva_frais_dossier = parseInt(frais * tvaRate / 100) || 0;
    this.propositions_selectionnees[index][fiedName] = frais;
    this.formDataToBeWatched['propositions_selectionnees'] = this.propositions_selectionnees;
  }), "recalculerCashCall", function recalculerCashCall(event, index, fieldName) {
    var _this$propositions_co9;
    var refresh = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    var inputValue;
    if (refresh) {
      var _this$propositions_se3;
      inputValue = (_this$propositions_se3 = this.propositions_selectionnees[index]) === null || _this$propositions_se3 === void 0 ? void 0 : _this$propositions_se3[fieldName];
    } else {
      var _event$2;
      var rawInput = (_event$2 = event === null || event === void 0 ? void 0 : event[1]) !== null && _event$2 !== void 0 ? _event$2 : '';
      inputValue = parseFloat(String(rawInput).replace(/\s+/g, ''));
    }

    // Si la valeur est null, NaN ou négative, on met à 0
    if (!inputValue || isNaN(inputValue) || inputValue < 0) {
      inputValue = 0;
    }
    var montantCreditRaw = ((_this$propositions_co9 = this.propositions_concours[index]) === null || _this$propositions_co9 === void 0 ? void 0 : _this$propositions_co9.montant_credit) || 0;
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
    this.propositions_selectionnees[index].cash_call_amount = cashCallAmount;
    this.propositions_selectionnees[index].cash_call_percent = cashCallPercent;
    this.formDataToBeWatched['propositions_selectionnees'] = this.propositions_selectionnees;
  }), "checkboxValSingle", function checkboxValSingle(event, index, key) {
    var _event$target2;
    if (event.target.value == 'Oui') {
      this.showClmnTypeRachat = true;
    } else {
      this.showClmnTypeRachat = false;
      this[key][index].type_rachat = "";
      this[key][index].num_fcub_pret = "";
      this[key][index].montant_rachat = 0;
    }
    this.formDataToBeWatched[key][index][(_event$target2 = event.target) === null || _event$target2 === void 0 ? void 0 : _event$target2.id] = event.target.value;
    this.formDataToBeWatched[key][index]['type_rachat'] = '';
    // this.reconstructionFacilitiesSollicites()
    // this.emitEventForTbEndettement()

    this.handleInput();
    this.getRemboursement();
  }), "showTamor", function showTamor(item_sollicite, index) {
    var _this$revenu_domicili2,
      _this$revenu_domicili3,
      _this20 = this;
    var useViewOnly = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    this.resetData();
    // console.log("showTamor", item_sollicite, index)

    // if (!item_sollicite.type_facilite && !item_sollicite.facilite_libelle) {
    //     this.$toasted.show("Veullez renseignez le type de crédit");
    //     return ;
    // }

    var faciliteSelectionnee = this.propositions_selectionnees.find(function (facilite) {
      return facilite.facilite_uuid === item_sollicite.uuid;
    });
    var dccpPcp1 = this.meta_data["dossier_credit"]["cred_pub_tb_120001"];
    var cace0 = this.meta_data["dossier_credit"]["cred_pub_tb_14070"];
    // const cace1 =  this.meta_data["dossier_credit"]["cred_pub_tb_14071"]; 
    var nbreDiffere = 0;
    var quotite_cessible = this.formDataToBeWatched.quotite_cessible;
    // const revenueDomicilie = cace0?.revenu_domicilie_afg || [];
    var revenueDomicilie = (_this$revenu_domicili2 = this.revenu_domicilie) !== null && _this$revenu_domicili2 !== void 0 ? _this$revenu_domicili2 : [];
    var ligneSalaireNet = revenueDomicilie.find(function (revenu) {
      return revenu.libelle === 'Salaire net';
    });
    var quotite = this.localeStringToFloat(quotite_cessible) || 0;
    var quotitePercent = this.localeStringToFloat((_this$revenu_domicili3 = this.revenu_domicilie) === null || _this$revenu_domicili3 === void 0 || (_this$revenu_domicili3 = _this$revenu_domicili3[0]) === null || _this$revenu_domicili3 === void 0 ? void 0 : _this$revenu_domicili3['taux_qc1']) || 0;
    // console.log('revenueDomicilie',revenueDomicilie);
    // console.log('quotitePercent',quotitePercent);

    var dccpPcp4 = this.meta_data["dossier_credit"]["cred_pub_tb_120004"];
    var facilitesExistantes = this.facilites_existante || [];
    // console.log('facilitesExistantes',facilitesExistantes);

    // const encours = facilitesExistantes.reduce((acc, curr) => {
    //     return acc + (this.localeStringToFloat(curr.encours) || 0);
    // }, 0);

    var encours = facilitesExistantes.reduce(function (acc, curr) {
      var valeur = _this20.localeStringToFloat(curr.encours);
      return acc + (valeur > 0 ? _this20.localeStringToFloat(curr.montant_echeance) : 0);
    }, 0);
    this.canInportSimulation = true;
    var differeCheck = item_sollicite.differe == 'Oui';
    if (differeCheck) {
      nbreDiffere = item_sollicite.nbre_differe;
    }

    // console.log('encours',encours);

    // if (!ligneSalaireNet) {
    //     this.$toasted.error("Veullez renseignez le salaire net dans le tableau DCPP-PCP1 pour visualiser un tableau d'amortissement correcte");
    // }

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
          salaire_net: _this20.localeStringToFloat(ligneSalaireNet === null || ligneSalaireNet === void 0 ? void 0 : ligneSalaireNet.mensualite) || 0,
          quotite: quotite,
          differe: nbreDiffere,
          tva: TVA,
          mois_debut_pmt: 0,
          frais_cheque_certifier: _this20.localeStringToFloat(faciliteSelectionnee === null || faciliteSelectionnee === void 0 ? void 0 : faciliteSelectionnee.frais_cheque_certifie) || 0,
          frais_huissier: _this20.localeStringToFloat(faciliteSelectionnee === null || faciliteSelectionnee === void 0 ? void 0 : faciliteSelectionnee.frais_huissier) || 0,
          frais_dossier_facilite: fraisDossier,
          assurance: montantAssurance,
          date_deblocage_prev: '',
          type_facilite: (facility === null || facility === void 0 ? void 0 : facility.type_facilite) || null,
          montant_credit: _this20.localeStringToFloat(facility === null || facility === void 0 ? void 0 : facility.montant_credit) || 0,
          echeancier: (facility === null || facility === void 0 ? void 0 : facility.echeancier) || '',
          duree: _this20.localeStringToFloat(facility === null || facility === void 0 ? void 0 : facility.duree) || 0,
          taux_annuel_ht: _this20.localeStringToFloat(facility === null || facility === void 0 ? void 0 : facility.taux) || 0,
          date_echeance: (facility === null || facility === void 0 ? void 0 : facility.date_echeance) || '',
          encours: _this20.localeStringToFloat(encours) || 0,
          // this.localeStringToFloat(facility?.encours) || 
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
        },
        tableau: []
      };
      _this20.mergeObjetIfNotKey(baseSim, simulation || {});
      _this20.mergeObjetIfNotKey(baseSim.caracteristiques_credit, (simulation === null || simulation === void 0 ? void 0 : simulation.caracteristiques_credit) || {});
      _this20.mergeObjetIfNotKey(baseSim.donnees_calculees, (simulation === null || simulation === void 0 ? void 0 : simulation.donnees_calculees) || {});
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
    if (useViewOnly) {
      this.viewOnly = useViewOnly;
      this.canInportSimulation = false;
    }
    this.$modal.show('show-simulation-concours');
    // this.$modal.show('simulateur_de_credit');

    // setTimeout(() => {
    //     EventBus.$emit("simulator-set-data", {
    //         simulation: this.defaultSimulation,
    //         facility: item_sollicite,
    //     });
    // }, 200);
  }), "closeModal", function closeModal() {
    this.viewOnly = false;
    this.defaultFacility = null;
    this.defaultSimulation = null;
    this.resetData();
    this.$modal.hide("show-simulation-concours");
  }), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_methods, "closeOldModal", function closeOldModal() {
    this.$modal.hide("show-tamor-concours-old");
    this.resetData();
  }), "resetData", function resetData() {
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
  }), "updateFacilitySollicitees", function updateFacilitySollicitees(data) {
    var _this21 = this;
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
      var checkValue, facility, create, facIndex, _this21$propositions_, _this21$propositions_2, _facility, hasFacilities, hasOneValid, newFacility, tvaApply, isRachatExterne, tva_frais_dossier, selected, found, _tvaApply, _isRachatExterne, _tva_frais_dossier, updateFields, _selected, result;
      return _regeneratorRuntime().wrap(function _callee8$(_context8) {
        while (1) switch (_context8.prev = _context8.next) {
          case 0:
            _context8.prev = 0;
            if (data) {
              _context8.next = 3;
              break;
            }
            return _context8.abrupt("return", {
              success: false,
              message: "Aucune donnée à mettre à jour"
            });
          case 3:
            if (!Array.isArray(data)) {
              _context8.next = 5;
              break;
            }
            return _context8.abrupt("return", {
              success: false,
              message: "Le format des données n'est pas valide."
            });
          case 5:
            checkValue = [null, '', undefined, '0', 0];
            facility = data.facility, create = data.create;
            facIndex = -1;
            if (!create) {
              _context8.next = 25;
              break;
            }
            // Nettoyer les facilités
            // console.log('propositions_concours before filter ',this.propositions_concours);
            // console.log('propositions_selectionnees before filter ',this.propositions_selectionnees);

            _this21.propositions_concours = _this21.propositions_concours.filter(function (el) {
              return el.type_facilite && !["", 0, "0"].includes(el.montant_credit);
            });

            // filtrer aussi les propositions_selectionnees
            _this21.propositions_selectionnees = _this21.propositions_selectionnees.filter(function (el) {
              return el.facilite_uuid && !["", null, undefined].includes(el.facilite_libelle);
            });

            // console.log('propositions_concours after filter ',this.propositions_concours);
            // console.log('propositions_selectionnees after filter ',this.propositions_selectionnees);
            // console.log('facility?.uuid',facility?.uuid);

            // return
            hasFacilities = ((_this21$propositions_ = _this21.propositions_selectionnees) === null || _this21$propositions_ === void 0 ? void 0 : _this21$propositions_.length) > 0;
            hasOneValid = (_this21$propositions_2 = _this21.propositions_selectionnees) === null || _this21$propositions_2 === void 0 ? void 0 : _this21$propositions_2.some(function (el) {
              return el.facilite_uuid && el.facilite_libelle;
            });
            if (hasFacilities && !hasOneValid) {
              _this21.propositions_selectionnees = [];
            }
            _this21.addMorePropositionsConcours((_facility = facility) === null || _facility === void 0 ? void 0 : _facility.uuid);
            newFacility = _this21.propositions_concours.at(-1);
            tvaApply = facility.tva || _this21.formDataToBeWatched.tva;
            isRachatExterne = !checkValue.includes(facility.frais_cheque_certifier) || !checkValue.includes(facility.frais_huissier);
            tva_frais_dossier = facility.frais_dossier * tvaApply || 0;
            facility = _objectSpread(_objectSpread(_objectSpread({}, newFacility), facility), {}, {
              id: newFacility.id,
              uuid: newFacility.uuid,
              is_rachat: isRachatExterne ? "Oui" : null,
              type_rachat: isRachatExterne ? "Rachat externe" : null
            });
            facIndex = newFacility.id - 1;
            selected = _this21.propositions_selectionnees.find(function (f) {
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
              _this21.handleInput();
            }

            // console.log('newFacility items **',newFacility);
            // console.log('facility **** ',facility);
            // console.log('facility.id ',facility.id);
            // console.log('facIndex',facIndex);

            // return 
            _context8.next = 37;
            break;
          case 25:
            found = _this21.propositions_concours.findIndex(function (el) {
              return el.uuid === facility.uuid || el.id === facility.id;
            });
            if (!(found === -1)) {
              _context8.next = 28;
              break;
            }
            return _context8.abrupt("return", {
              success: false,
              message: "La facilité sollicitée n'a pas été trouvée."
            });
          case 28:
            _tvaApply = _this21.formDataToBeWatched.tva;
            _isRachatExterne = !checkValue.includes(facility.frais_cheque_certifier) || !checkValue.includes(facility.frais_huissier);
            _tva_frais_dossier = facility.frais_dossier * _tvaApply || 0;
            facility = _objectSpread(_objectSpread(_objectSpread({}, _this21.propositions_concours[found]), facility), {}, {
              is_rachat: _isRachatExterne ? "Oui" : null,
              type_rachat: _isRachatExterne ? "Rachat externe" : null
            });
            _this21.propositions_concours[found] = facility;
            facIndex = found;
            updateFields = {
              facilite_libelle: facility.type_facilite,
              montant_assurance: facility.montant_assurance,
              frais_dossier: facility.frais_dossier,
              tva_frais_dossier: _tva_frais_dossier,
              frais_cheque_certifie: _isRachatExterne ? facility.frais_cheque_certifier : undefined,
              frais_huissier: _isRachatExterne ? facility.frais_huissier : undefined
            };
            _selected = _this21.propositions_selectionnees.find(function (f) {
              return f.facilite_uuid === facility.uuid;
            });
            if (_selected) {
              Object.assign(_this21.propositions_selectionnees[found], updateFields);
              _this21.handleInput();
            }
          case 37:
            // console.log('facIndex !== -1 **** ',facIndex !== -1);
            // return
            if (facIndex !== -1) {
              _this21.propositions_concours[facIndex] = JSON.parse(JSON.stringify(facility));
              _this21.formDataToBeWatched.propositions_concours = _this21.propositions_concours;
              _this21.handleInput();
            }
            result = {
              facility: facility,
              success: true,
              message: "Facilité sollicitée mise à jour avec succès."
            };
            EventBus.$emit("facility-updated", _objectSpread(_objectSpread({}, result), {}, {
              create: create
            }));
            return _context8.abrupt("return", result);
          case 43:
            _context8.prev = 43;
            _context8.t0 = _context8["catch"](0);
            console.error("updateFacilitySollicitees error", _context8.t0);
            return _context8.abrupt("return", {
              success: false,
              message: "Erreur lors de la mise à jour de la facilité sollicitée."
            });
          case 47:
          case "end":
            return _context8.stop();
        }
      }, _callee8, null, [[0, 43]]);
    }))();
  }), "checkboxValDiffereOld", function checkboxValDiffereOld(event, index, key) {
    var value = "";
    if (event.target.value != '') {
      value = event.target.value;
    }
    this.$set(this[key][index], "differe", value);
    this.handleInput();
  }), "checkboxValDiffere", function checkboxValDiffere(event, index, key) {
    var _event$target3 = event.target,
      checked = _event$target3.checked,
      targetValue = _event$target3.value;
    var value = checked ? targetValue : "";
    var item = this[key][index];
    if (!checked || targetValue === 'Non') {
      this.$set(item, 'nbre_differe', 0);
    }
    this.$set(item, 'differe', value);
    this.handleInput();
  })),
  watch: {
    formDataToBeWatched: {
      handler: function handler(newVal, oldVal) {
        this.autosaving(newVal, oldVal);
      },
      deep: true,
      immediate: true
    },
    propositions_concours: {
      handler: function handler(newVal, oldVal) {
        this.donneeDeCalcul(this.revenu_domicilie, newVal);
        EventBus.$emit('de-facilites-updated', {
          propositions_concours: newVal
          // facilites_selectionnees: this.facilites_selectionnees
        });
      },
      deep: true
    },
    propositions_selectionnees: {
      handler: function handler(newVal, oldVal) {
        EventBus.$emit('de-facilites-updated', {
          propositions_concours: this.propositions_concours,
          propositions_selectionnees: newVal
        });
      },
      deep: true
    },
    revenu_domicilie: {
      handler: function handler(newVal, oldVal) {
        this.donneeDeCalcul(newVal, this.propositions_concours);
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/contre_etude/CA-CE1.vue?vue&type=template&id=2af8da5a&scoped=true":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/contre_etude/CA-CE1.vue?vue&type=template&id=2af8da5a&scoped=true ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render=function render(){var _vm$formDataToBeWatch,_vm$meta_data,_vm$donnee_calculs$A,_vm$donnee_calculs,_vm$donnee_calculs$A2,_vm$donnee_calculs2,_vm$donnee_calculs$H,_vm$donnee_calculs3,_vm$donnee_calculs$H2,_vm$donnee_calculs4,_vm$donnee_calculs$B,_vm$donnee_calculs5,_vm$donnee_calculs$B2,_vm$donnee_calculs6,_vm$donnee_calculs$C,_vm$donnee_calculs7,_vm$donnee_calculs$C2,_vm$donnee_calculs8,_vm$donnee_calculs$D,_vm$donnee_calculs9,_vm$donnee_calculs$D2,_vm$donnee_calculs0,_vm$donnee_calculs$E,_vm$donnee_calculs1,_vm$donnee_calculs$E2,_vm$donnee_calculs10,_vm$donnee_calculs$F,_vm$donnee_calculs11,_vm$donnee_calculs$F2,_vm$donnee_calculs12,_vm$donnee_calculs$G,_vm$donnee_calculs13,_vm$donnee_calculs$G2,_vm$donnee_calculs14,_vm$formDataToBeWatch2,_vm$data_tamor;var _vm=this,_c=_vm._self._c;return _c("div",{on:{contextmenu:function contextmenu($event){return _vm.$refs.menu.open($event,_vm.tb_name);}}},[_vm.isLoading?_c("loader"):_vm._e(),_vm._v(" "),_c("div",{staticClass:"row bg-light card-width-height",staticStyle:{width:"100%",height:"100%"}},[_c("ContextMenu",{ref:"menu",attrs:{id:_vm.tb_name,cred_pub_key:_vm.meta_parseable.cred_pub_key,tb_name:_vm.tb_name,contextList:_vm.contextList}}),_vm._v(" "),_vm.seen===true?_c("div",{staticClass:"card",staticStyle:{width:"100%",height:"100%"}},[_c("br"),_vm._v(" "),_c("div",{staticClass:"card-header hdc pb-0 pt-2"},[_c("h6",{ref:"topdiv",staticClass:"head",attrs:{id:"dcp-ppo1-head"}},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col"},[_vm._v("\n                               "+_vm._s(_vm.tb_display_name)+" : Concours/Facilités\n                           ")]),_vm._v(" "),_c("div",{staticClass:"col-auto"},[((_vm$formDataToBeWatch=_vm.formDataToBeWatched.notes)===null||_vm$formDataToBeWatch===void 0?void 0:_vm$formDataToBeWatch.length)>0?_c("div",{staticStyle:{display:"inline-block",position:"relative"}},[_c("span",{attrs:{type:"button"},on:{click:function click($event){return _vm.openNotesModal(true);}}},[_c("i",{staticClass:"icofont icofont-comment text-white px-2",staticStyle:{"font-size":"12px"},attrs:{role:"button"}}),_vm._v(" "),_c("span",{staticClass:"badge-sm"},[_c("span",[_vm._v(_vm._s(_vm.formDataToBeWatched.notes.length))])])])]):_vm._e(),_vm._v(" "),_c("airplay-icon",{staticClass:"custom-class mt-1",staticStyle:{cursor:"pointer",margin:"0 5px"},attrs:{size:"0.7x",title:"exemple"},on:{click:function click($event){return _vm.$modal.show("demande_de_pret");}}}),_vm._v(" "),_c("chevron-up-icon",{staticClass:"custom-class",staticStyle:{cursor:"pointer"},attrs:{size:"21"},on:{click:function click($event){return _vm.retract();}}})],1)])])]),_vm._v(" "),_c("div",{staticClass:"row p-0"},[_c("div",{staticClass:"col-12 p-0 position-relative"},[_vm.loadTypeCredit?_c("div",{staticClass:"card-body"},[_vm._m(0)]):_c("div",[_vm.seen0_2?_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"relook-header",on:{click:function click($event){_vm.seen0_2=!_vm.seen0_2;}}},[_c("h6",{"class":" subdiv"+this.tb_name,attrs:{id:"frais-de-crédit"}},[_vm._v("\n                                       Concours/Facilités existantes\n                                       "),_c("chevron-up-icon",{staticClass:"custom-class",staticStyle:{"float":"right",cursor:"pointer"},attrs:{size:"21"}})],1)]),_vm._v(" "),_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"table-responsive"},[_c("table",{staticClass:"table table-bordered"},[_c("thead",[_c("tr",[_vm._m(1),_vm._v(" "),_vm._m(2),_vm._v(" "),_vm._m(3),_vm._v(" "),_vm._m(4),_vm._v(" "),_vm._m(5),_vm._v(" "),_vm._m(6),_vm._v(" "),_vm._m(7),_vm._v(" "),_vm._m(8),_vm._v(" "),_vm._m(9),_vm._v(" "),_vm._m(10),_vm._v(" "),_vm._m(11),_vm._v(" "),_vm._m(12),_vm._v(" "),_c("td",{staticClass:"th fw-bold",staticStyle:{"align-content":"center","min-width":"280px"}},[_vm._v("Commentaire")]),_vm._v(" "),_c("td",{staticClass:"th fw-bold"},[_c("button",{staticStyle:{"background-color":"#2c3e50",color:"#ffffff","border-radius":"15%",border:"none"},attrs:{type:"button",title:"Ajouter une ligne"},on:{click:function click($event){return _vm.addMoreFaciliteExistante();}}},[_c("plus-icon",{staticClass:"custom-class",attrs:{size:"21"}})],1)])])]),_vm._v(" "),_c("tbody",_vm._l(_vm.facilites_existante,function(el,ind){return _c("tr",{key:ind},[_c("td",[el.is_locale!=true&&![null,undefined,""].includes(el.filiale)?_c("select",{directives:[{name:"model",rawName:"v-model",value:el.filiale,expression:"el.filiale"}],staticClass:"form-select","class":{"bg-blue":_vm.accentuate(el)},attrs:{disabled:true},on:{change:[function($event){var $$selectedVal=Array.prototype.filter.call($event.target.options,function(o){return o.selected;}).map(function(o){var val="_value"in o?o._value:o.value;return val;});_vm.$set(el,"filiale",$event.target.multiple?$$selectedVal:$$selectedVal[0]);},_vm.handleInput3]}},[_c("option",{attrs:{disabled:"",selected:"",value:""}}),_vm._v(" "),_vm._l(_vm.filiale_afg,function(filiale_afg,indexF){return _c("option",{key:indexF+"4z_1",domProps:{value:filiale_afg}},[_vm._v(_vm._s(filiale_afg))]);})],2):_c("select",{directives:[{name:"model",rawName:"v-model",value:el.filiale,expression:"el.filiale"}],staticClass:"form-select","class":{"bg-blue":_vm.accentuate(el)},on:{change:[function($event){var $$selectedVal=Array.prototype.filter.call($event.target.options,function(o){return o.selected;}).map(function(o){var val="_value"in o?o._value:o.value;return val;});_vm.$set(el,"filiale",$event.target.multiple?$$selectedVal:$$selectedVal[0]);},_vm.handleInput3]}},[_c("option",{attrs:{disabled:"",selected:"",value:""}}),_vm._v(" "),_vm._l(_vm.filiale_afg,function(filiale_afg,indexF){return _c("option",{key:indexF+"4z_1",domProps:{value:filiale_afg}},[_vm._v(_vm._s(filiale_afg))]);})],2)]),_vm._v(" "),_c("td",[el.is_locale!=true&&![null,undefined,""].includes(el.facilite_libelle)?_c("input",{directives:[{name:"model",rawName:"v-model",value:el.facilite_libelle,expression:"el.facilite_libelle"}],staticClass:"form-control","class":{"bg-blue":_vm.accentuate(el)},staticStyle:{width:"200px !important"},attrs:{type:"text",id:"facilite_libelle"},domProps:{value:el.facilite_libelle},on:{input:function input($event){if($event.target.composing)return;_vm.$set(el,"facilite_libelle",$event.target.value);}}}):_c("input",{directives:[{name:"model",rawName:"v-model",value:el.facilite_libelle,expression:"el.facilite_libelle"}],staticClass:"form-control","class":{"bg-blue":_vm.accentuate(el)},staticStyle:{width:"200px !important"},attrs:{type:"text",id:"facilite_libelle"},domProps:{value:el.facilite_libelle},on:{input:function input($event){if($event.target.composing)return;_vm.$set(el,"facilite_libelle",$event.target.value);}}})]),_vm._v(" "),_c("td",[el.is_locale!=true&&![null,undefined,""].includes(el.credit_type_code)?_c("input",{directives:[{name:"model",rawName:"v-model",value:el.credit_type_code,expression:"el.credit_type_code"}],staticClass:"form-control","class":{"bg-blue":_vm.accentuate(el)},staticStyle:{width:"200px !important"},attrs:{type:"text",id:"credit_type_code"},domProps:{value:el.credit_type_code},on:{input:function input($event){if($event.target.composing)return;_vm.$set(el,"credit_type_code",$event.target.value);}}}):_c("input",{directives:[{name:"model",rawName:"v-model",value:el.credit_type_code,expression:"el.credit_type_code"}],staticClass:"form-control","class":{"bg-blue":_vm.accentuate(el)},staticStyle:{width:"200px !important"},attrs:{type:"text",id:"credit_type_code"},domProps:{value:el.credit_type_code},on:{input:function input($event){if($event.target.composing)return;_vm.$set(el,"credit_type_code",$event.target.value);}}})]),_vm._v(" "),_c("td",[el.is_locale!=true&&![null,undefined,""].includes(el.credit_number)?_c("input",{directives:[{name:"model",rawName:"v-model",value:el.credit_number,expression:"el.credit_number"}],staticClass:"form-control","class":{"bg-blue":_vm.accentuate(el)},staticStyle:{width:"200px !important"},attrs:{type:"text",id:"credit_number"},domProps:{value:el.credit_number},on:{input:function input($event){if($event.target.composing)return;_vm.$set(el,"credit_number",$event.target.value);}}}):_c("input",{directives:[{name:"model",rawName:"v-model",value:el.credit_number,expression:"el.credit_number"}],staticClass:"form-control","class":{"bg-blue":_vm.accentuate(el)},staticStyle:{width:"200px !important"},attrs:{type:"text",id:"credit_number"},domProps:{value:el.credit_number},on:{input:function input($event){if($event.target.composing)return;_vm.$set(el,"credit_number",$event.target.value);}}})]),_vm._v(" "),_c("td",[el.is_locale!=true&&![null,undefined,""].includes(el.montant_credit)?_c("currency-input2",{"class":{"bg-blue":_vm.accentuate(el)},staticStyle:{"min-width":"150px"},attrs:{value:el===null||el===void 0?void 0:el.montant_credit,id:"montant_credit"},on:{input:function input($event){return _vm.formDataVarsGaranties($event,ind,"facilites_existante");}}}):_c("currency-input2",{"class":{"bg-blue":_vm.accentuate(el)},staticStyle:{"min-width":"150px"},attrs:{value:el===null||el===void 0?void 0:el.montant_credit,id:"montant_credit"},on:{input:function input($event){return _vm.formDataVarsGaranties($event,ind,"facilites_existante");}}})],1),_vm._v(" "),_c("td",[el.is_locale!=true&&![null,undefined,""].includes(el.duree)?_c("input",{directives:[{name:"model",rawName:"v-model",value:el.duree,expression:"el.duree"}],staticClass:"form-control flex-1","class":{"bg-blue":_vm.accentuate(el)},staticStyle:{"min-width":"45px","margin-right":"2px"},attrs:{type:"number",min:"1",id:"duree"},domProps:{value:el.duree},on:{input:[function($event){if($event.target.composing)return;_vm.$set(el,"duree",$event.target.value);},function($event){return _vm.formDataVarsGaranties($event,ind,"facilites_existante");}]}}):_c("input",{directives:[{name:"model",rawName:"v-model",value:el.duree,expression:"el.duree"}],staticClass:"form-control flex-1","class":{"bg-blue":_vm.accentuate(el)},staticStyle:{"min-width":"45px","margin-right":"2px"},attrs:{type:"number",min:"1",id:"duree"},domProps:{value:el.duree},on:{input:[function($event){if($event.target.composing)return;_vm.$set(el,"duree",$event.target.value);},function($event){return _vm.formDataVarsGaranties($event,ind,"facilites_existante");}]}})]),_vm._v(" "),_c("td",[_c("input-group",{staticStyle:{"min-width":"110px"},scopedSlots:_vm._u([{key:"input",fn:function fn(){return[el.is_locale!=true&&![null,undefined,""].includes(el.taux)?_c("currency-input",{"class":{"bg-blue":_vm.accentuate(el)},attrs:{value:el.taux,max:100,"float":"",percentage:"",id:"taux"},on:{input:function input($event){return _vm.formDataVarsGaranties($event,ind,"facilites_existante");}}}):_c("currency-input",{"class":{"bg-blue":_vm.accentuate(el)},attrs:{value:el.taux,max:100,"float":"",percentage:"",id:"taux"},on:{input:function input($event){return _vm.formDataVarsGaranties($event,ind,"facilites_existante");}}})];},proxy:true},{key:"right",fn:function fn(){return[_vm._v("%")];},proxy:true}],null,true)})],1),_vm._v(" "),_c("td",[el.is_locale!=true&&![null,undefined,""].includes(el.echeancier)?_c("input",{directives:[{name:"model",rawName:"v-model",value:el.echeancier,expression:"el.echeancier"}],staticClass:"form-control flex-1","class":{"bg-blue":_vm.accentuate(el)},staticStyle:{"min-width":"45px","margin-right":"2px"},attrs:{id:"echeancier"},domProps:{value:el.echeancier},on:{input:[function($event){if($event.target.composing)return;_vm.$set(el,"echeancier",$event.target.value);},function($event){return _vm.formDataVarsGaranties($event,ind,"facilites_existante");}]}}):_c("select",{directives:[{name:"model",rawName:"v-model",value:el.echeancier,expression:"el.echeancier"}],staticClass:"form-control","class":{"bg-blue":_vm.accentuate(el)},attrs:{id:"echeancier"},on:{change:[function($event){var $$selectedVal=Array.prototype.filter.call($event.target.options,function(o){return o.selected;}).map(function(o){var val="_value"in o?o._value:o.value;return val;});_vm.$set(el,"echeancier",$event.target.multiple?$$selectedVal:$$selectedVal[0]);},_vm.handleInputGaranties]}},[_c("option",{attrs:{disabled:"",selected:"",value:""}},[_vm._v("\n                                                               --- Choisissez l'écheancier ---\n                                                           ")]),_vm._v(" "),_c("option",{attrs:{value:""}}),_vm._v(" "),_vm._l(_vm.periodicites,function(el,index){return[_c("option",{key:index+"4z_3",domProps:{value:el.libelle}},[_vm._v("\n                                                                   "+_vm._s(el.libelle)+"\n                                                               ")])];})],2)]),_vm._v(" "),_c("td",[_c("currency-input2",{"class":{"bg-blue":_vm.accentuate(el)},staticStyle:{"min-width":"150px"},attrs:{value:el.montant_echeance,id:"montant_echeance"},on:{input:function input($event){return _vm.formDataVarsGaranties($event,ind,"facilites_existante");}}})],1),_vm._v(" "),_c("td",[el.is_locale!=true&&![null,undefined,""].includes(el.encours)?_c("currency-input2",{"class":{"bg-blue":_vm.accentuate(el)},staticStyle:{"min-width":"150px"},attrs:{value:el.encours,id:"encours"},on:{input:function input($event){return _vm.formDataVarsGaranties($event,ind,"facilites_existante");}}}):_c("currency-input2",{"class":{"bg-blue":_vm.accentuate(el)},staticStyle:{"min-width":"150px"},attrs:{value:el.encours,id:"encours"},on:{input:function input($event){return _vm.formDataVarsGaranties($event,ind,"facilites_existante");}}})],1),_vm._v(" "),_c("td",[el.is_locale!=true&&![null,undefined,""].includes(el.impaye)?_c("currency-input2",{"class":{"bg-blue":_vm.accentuate(el)},staticStyle:{"min-width":"150px"},attrs:{value:el.impaye,id:"impaye"},on:{input:function input($event){return _vm.formDataVarsGaranties($event,ind,"facilites_existante");}}}):_c("currency-input2",{"class":{"bg-blue":_vm.accentuate(el)},staticStyle:{"min-width":"150px"},attrs:{value:el.impaye,id:"impaye"},on:{input:function input($event){return _vm.formDataVarsGaranties($event,ind,"facilites_existante");}}})],1),_vm._v(" "),_c("td",[el.is_locale!=true&&![null,undefined,""].includes(el.date_echeance)?_c("date-input",{staticStyle:{width:"210px"},attrs:{value:el.date_echeance,id:"date_echeance",background:_vm.accentuate(el)?"background : #00ffff21":"background: inherit"},on:{input:function input($event){return _vm.formDataVarsGaranties($event,ind,"facilites_existante");}}}):_c("date-input",{staticStyle:{width:"210px"},attrs:{value:el.date_echeance,id:"date_echeance",background:_vm.accentuate(el)?"background : #00ffff21":"background: inherit"},on:{input:function input($event){return _vm.formDataVarsGaranties($event,ind,"facilites_existante");}}})],1),_vm._v(" "),_c("td",[_c("textarea",{directives:[{name:"model",rawName:"v-model",value:el.commentaire,expression:"el.commentaire"}],staticClass:"form-control","class":{"bg-blue":_vm.accentuate(el)},attrs:{rows:"1",id:"commentaire"},domProps:{value:el.commentaire},on:{input:[function($event){if($event.target.composing)return;_vm.$set(el,"commentaire",$event.target.value);},function($event){return _vm.formDataVarsGaranties($event,ind,"facilites_existante");}]}})]),_vm._v(" "),_c("td",{staticClass:"vertical-middle text-right",staticStyle:{width:"15px"}},[ind>=0?_c("button",{staticStyle:{"background-color":"transparent",border:"none"},attrs:{type:"button",title:"Supprimer cette ligne"},on:{click:function click($event){return _vm.removeFaciliteExist(ind);}}},[_c("trash-icon",{staticClass:"custom-class",attrs:{size:"21"}})],1):_vm._e()])]);}),0),_vm._v(" "),_c("tfoot",[_c("tr",[_c("td",{staticClass:"fw-bold text-left",attrs:{colspan:"0"}},[_vm._v("Totaux")]),_vm._v(" "),_c("td"),_vm._v(" "),_c("td"),_vm._v(" "),_c("td"),_vm._v(" "),_c("td",{staticClass:"fw-bold"},[_vm._v(_vm._s(_vm._f("formatNumber")(_vm.totalsFacilitesExistante.montant_credit)))]),_vm._v(" "),_c("td"),_vm._v(" "),_c("td"),_vm._v(" "),_c("td"),_vm._v(" "),_c("td",{staticClass:"fw-bold"},[_vm._v(_vm._s(_vm._f("formatNumber")(_vm.totalsFacilitesExistante.montant_echeance)))]),_vm._v(" "),_c("td",{staticClass:"fw-bold"},[_vm._v(_vm._s(_vm._f("formatNumber")(_vm.totalsFacilitesExistante.encours)))]),_vm._v(" "),_c("td",{staticClass:"fw-bold"},[_vm._v(_vm._s(_vm._f("formatNumber")(_vm.totalsFacilitesExistante.impaye)))]),_vm._v(" "),_c("td"),_vm._v(" "),_c("td"),_vm._v(" "),_c("td")])])])])])]):_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"relook-header",on:{click:function click($event){_vm.seen0_2=!_vm.seen0_2;}}},[_c("h6",{attrs:{id:"frais-de-crédit"}},[_vm._v("\n                                       Concours/Facilités existantes\n                                       "),_c("chevron-down-icon",{staticClass:"custom-class",staticStyle:{"float":"right",cursor:"pointer"},attrs:{size:"21"}})],1)])]),_vm._v(" "),_vm.meta_data.dossier_credit.applied_templ_name=="CRESCO"?[_vm.seen0_3?_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"relook-header",on:{click:function click($event){_vm.seen0_3=!_vm.seen0_3;}}},[_c("h6",{"class":" subdiv"+this.tb_name,attrs:{id:"frais-de-crédit-facitlite"}},[_vm._v("\n                                           Concours/Facilités sollicitées\n                                           "),_c("chevron-up-icon",{staticClass:"custom-class",staticStyle:{"float":"right",cursor:"pointer"},attrs:{size:"21"}})],1)]),_vm._v(" "),_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"table-responsive"},[_c("table",{staticClass:"table table-bordered"},[_vm._m(13),_vm._v(" "),_c("tbody",_vm._l(_vm.facilites_sollicitees,function(el,ind){var _el$infos_fcub,_el$infos_fcub2;return _c("tr",{key:ind},[_c("td",{staticStyle:{"text-align":"center"}},[_c("button",{staticStyle:{"background-color":"#eb0523",color:"#ffffff","border-radius":"15%",border:"none","margin-top":"8px",width:"34px"},attrs:{type:"button",title:"Faire une simulation"},on:{click:function click($event){return _vm.showTamor(el,ind,true);}}},[_c("i",{staticClass:"icofont-file-alt"})])]),_vm._v(" "),_c("td",[_c("select",{directives:[{name:"model",rawName:"v-model",value:el.filiale,expression:"el.filiale"}],staticClass:"form-select",attrs:{disabled:""},on:{change:[function($event){var $$selectedVal=Array.prototype.filter.call($event.target.options,function(o){return o.selected;}).map(function(o){var val="_value"in o?o._value:o.value;return val;});_vm.$set(el,"filiale",$event.target.multiple?$$selectedVal:$$selectedVal[0]);},_vm.handleInput3]}},[_c("option",{attrs:{disabled:"",selected:"",value:""}}),_vm._v(" "),_vm._l(_vm.filiale_afg,function(filiale_afg,indexF){return _c("option",{key:indexF+"4z_1",domProps:{value:filiale_afg}},[_vm._v(_vm._s(filiale_afg)+"\n                                                               ")]);})],2)]),_vm._v(" "),_c("td",{staticClass:"text-center"},[_c("input",{directives:[{name:"model",rawName:"v-model",value:el.type_facilite,expression:"el.type_facilite"}],staticClass:"form-control",staticStyle:{width:"200px !important"},attrs:{type:"text",id:"facilite_libelle",readonly:""},domProps:{value:el.type_facilite},on:{input:function input($event){if($event.target.composing)return;_vm.$set(el,"type_facilite",$event.target.value);}}})]),_vm._v(" "),_c("td",[_c("input",{directives:[{name:"model",rawName:"v-model",value:el.facilite_libelle,expression:"el.facilite_libelle"}],staticClass:"form-control",staticStyle:{width:"200px !important"},attrs:{type:"text",id:"facilite_libelle",readonly:""},domProps:{value:el.facilite_libelle},on:{input:function input($event){if($event.target.composing)return;_vm.$set(el,"facilite_libelle",$event.target.value);}}})]),_vm._v(" "),_c("td",[_c("input",{staticClass:"form-control",staticStyle:{width:"200px !important"},attrs:{type:"text",id:"infos_fcub_"+ind,readonly:""},domProps:{value:el===null||el===void 0||(_el$infos_fcub=el.infos_fcub)===null||_el$infos_fcub===void 0?void 0:_el$infos_fcub.PRODUCT_CODE}})]),_vm._v(" "),_c("td",[_c("textarea",{staticClass:"form-control",staticStyle:{width:"190px"},attrs:{rows:"2",readonly:""},domProps:{value:el===null||el===void 0||(_el$infos_fcub2=el.infos_fcub)===null||_el$infos_fcub2===void 0?void 0:_el$infos_fcub2.PRODUCT_DESC}})]),_vm._v(" "),_c("td",[_c("currency-input2",{staticStyle:{"min-width":"150px"},attrs:{disabled:"",value:el.montant_demande,id:"montant_demande"},on:{input:function input($event){return _vm.formDataVars3($event,ind,"facilites_sollicitees");}}})],1),_vm._v(" "),_c("td",[_c("currency-input2",{staticStyle:{"min-width":"150px"},attrs:{disabled:"",value:el.montant_credit,id:"montant_credit"},on:{input:function input($event){return _vm.formDataVars3($event,ind,"facilites_sollicitees");}}})],1),_vm._v(" "),_c("td",[_c("input",{directives:[{name:"model",rawName:"v-model",value:el.duree,expression:"el.duree"}],staticClass:"form-control flex-1",staticStyle:{"min-width":"45px","margin-right":"2px"},attrs:{type:"number",disabled:"",min:"1",id:"duree"},domProps:{value:el.duree},on:{blur:function blur($event){return _vm.checkingCoherenceField("facilites_sollicitees",ind,"duree",el,$event);},input:function input($event){if($event.target.composing)return;_vm.$set(el,"duree",$event.target.value);}}})]),_vm._v(" "),_c("td",[_c("input-group",{staticStyle:{"min-width":"110px"},scopedSlots:_vm._u([{key:"input",fn:function fn(){return[_c("currency-input",{attrs:{value:el.taux,disabled:"",max:100,"float":"",percentage:"",id:"taux"},on:{input:function input($event){return _vm.formDataVars3($event,ind,"facilites_sollicitees");}}})];},proxy:true},{key:"right",fn:function fn(){return[_vm._v("%")];},proxy:true}],null,true)})],1),_vm._v(" "),_c("td",[_c("select",{directives:[{name:"model",rawName:"v-model",value:el.echeancier,expression:"el.echeancier"}],staticClass:"form-control",attrs:{id:"echeancier",disabled:""},on:{change:[function($event){var $$selectedVal=Array.prototype.filter.call($event.target.options,function(o){return o.selected;}).map(function(o){var val="_value"in o?o._value:o.value;return val;});_vm.$set(el,"echeancier",$event.target.multiple?$$selectedVal:$$selectedVal[0]);},function($event){return _vm.checkingCoherenceField("facilites_sollicitees",ind,"echeancier",el,$event);}]}},[_c("option",{attrs:{disabled:"",selected:"",value:""}},[_vm._v("\n                                                                   --- Choisissez l'écheancier ---\n                                                               ")]),_vm._v(" "),_c("option",{attrs:{value:""}}),_vm._v(" "),_vm._l(_vm.periodicites,function(el,index){return[_c("option",{domProps:{value:el.libelle}},[_vm._v("\n                                                                       "+_vm._s(el.libelle)+"\n                                                                   ")])];})],2)]),_vm._v(" "),_c("td",[_c("currency-input2",{staticStyle:{"min-width":"150px"},attrs:{value:el.montant_echeance,disabled:"",id:"montant_echeance"},on:{input:function input($event){return _vm.formDataVars3($event,ind,"facilites_sollicitees");}}})],1),_vm._v(" "),_c("td",[_c("div",{staticClass:"d-flex justify-content-center"},[_c("div",{staticClass:"mx-2",staticStyle:{display:"flex"}},[_c("label",{attrs:{"for":"differe_oui"+ind}},[_vm._v("Oui")]),_vm._v(" "),_c("input",{attrs:{type:"checkbox",value:"Oui",id:"differe_oui"+ind,disabled:""},domProps:{checked:el.differe=="Oui"},on:{input:function input($event){return _vm.checkboxValDiffere($event,ind,"propositions_concours");}}})]),_vm._v(" "),_c("div",{staticClass:"mx-2",staticStyle:{display:"flex"}},[_c("label",{attrs:{"for":"differe_non"+ind}},[_vm._v("Non")]),_vm._v(" "),_c("input",{attrs:{type:"checkbox",value:"Non",id:"differe_non"+ind,disabled:""},domProps:{checked:el.differe=="Non"},on:{input:function input($event){return _vm.checkboxValDiffere($event,ind,"propositions_concours");}}})])])]),_vm._v(" "),_c("td",[["",undefined,null,"Non"].includes(el.differe)?[_c("input",{staticClass:"form-control flex-1","class":{"bg-blue":_vm.accentuate(el)},staticStyle:{"min-width":"45px","margin-right":"2px"},attrs:{type:"text",readonly:""}})]:[_c("input",{directives:[{name:"model",rawName:"v-model",value:el.nbre_differe,expression:"el.nbre_differe"}],staticClass:"form-control flex-1",staticStyle:{"min-width":"45px","margin-right":"2px"},attrs:{type:"number",min:"1",id:"nbre_differe",disabled:""},domProps:{value:el.nbre_differe},on:{input:function input($event){if($event.target.composing)return;_vm.$set(el,"nbre_differe",$event.target.value);}}})]],2),_vm._v(" "),_c("td",[_c("date-input",{staticStyle:{width:"210px"},attrs:{value:el.date_echeance,disabled:"",id:"date_echeance"},on:{input:function input($event){return _vm.formDataVars3($event,ind,"facilites_sollicitees");}}})],1),_vm._v(" "),_c("td",[_c("textarea",{directives:[{name:"model",rawName:"v-model",value:el.commentaire,expression:"el.commentaire"}],staticClass:"form-control",attrs:{rows:"1",disabled:"",id:"commentaire"},domProps:{value:el.commentaire},on:{input:[function($event){if($event.target.composing)return;_vm.$set(el,"commentaire",$event.target.value);},function($event){return _vm.formDataVars3($event,ind,"facilites_sollicitees");}]}})])]);}),0),_vm._v(" "),_c("tfoot",[_c("tr",[_c("td",{staticClass:"fw-bold text-left"},[_vm._v("Totaux")]),_vm._v(" "),_c("td",{attrs:{colspan:"5"}}),_vm._v(" "),_c("td",{staticClass:"fw-bold"},[_vm._v(_vm._s(_vm._f("formatNumber")(_vm.totalsFacilites.montant_demande)))]),_vm._v(" "),_c("td",{staticClass:"fw-bold"},[_vm._v(_vm._s(_vm._f("formatNumber")(_vm.totalsFacilites.montant_credit)))]),_vm._v(" "),_c("td",{attrs:{colspan:"3"}}),_vm._v(" "),_c("td",{staticClass:"fw-bold"},[_vm._v(_vm._s(_vm._f("formatNumber")(_vm.totalsFacilites.montant_echeance)))]),_vm._v(" "),_c("td",{attrs:{colspan:"3"}})])])])])])]):_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"relook-header",on:{click:function click($event){_vm.seen0_3=!_vm.seen0_3;}}},[_c("h6",{attrs:{id:"frais-de-crédit-facitlite"}},[_vm._v("\n                                           Concours/Facilités sollicitées\n                                           "),_c("chevron-down-icon",{staticClass:"custom-class",staticStyle:{"float":"right",cursor:"pointer"},attrs:{size:"21"}})],1)])])]:[_vm.seen0_3?_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"relook-header",on:{click:function click($event){_vm.seen0_3=!_vm.seen0_3;}}},[_c("h6",{"class":" subdiv"+this.tb_name,attrs:{id:"frais-de-crédit"}},[_vm._v("\n                                           Concours/Facilités sollicitées\n                                           "),_c("chevron-up-icon",{staticClass:"custom-class",staticStyle:{"float":"right",cursor:"pointer"},attrs:{size:"21"}})],1)]),_vm._v(" "),_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"table-responsive"},[_c("table",{staticClass:"table table-bordered"},[_vm._m(14),_vm._v(" "),_c("tbody",_vm._l(_vm.facilites_sollicitees,function(el,ind){var _el$infos_fcub3,_el$infos_fcub4;return _c("tr",{key:ind},[_c("td",{staticStyle:{"text-align":"center"}},[_c("button",{staticStyle:{"background-color":"#eb0523",color:"#ffffff","border-radius":"15%",border:"none","margin-top":"8px",width:"34px"},attrs:{type:"button",title:"Faire une simulation"},on:{click:function click($event){return _vm.showTamor(el,ind,true);}}},[_c("i",{staticClass:"icofont-file-alt"})])]),_vm._v(" "),_c("td",[_c("select",{directives:[{name:"model",rawName:"v-model",value:el.filiale,expression:"el.filiale"}],staticClass:"form-select",attrs:{readonly:"",disabled:""},on:{change:[function($event){var $$selectedVal=Array.prototype.filter.call($event.target.options,function(o){return o.selected;}).map(function(o){var val="_value"in o?o._value:o.value;return val;});_vm.$set(el,"filiale",$event.target.multiple?$$selectedVal:$$selectedVal[0]);},_vm.handleInput3]}},[_c("option",{attrs:{disabled:"",selected:"",value:""}}),_vm._v(" "),_vm._l(_vm.filiale_afg,function(filiale_afg,indexF){return _c("option",{key:indexF+"4z_1",domProps:{value:filiale_afg}},[_vm._v(_vm._s(filiale_afg)+"\n                                                               ")]);})],2)]),_vm._v(" "),_c("td",{staticClass:"text-center"},[_c("select",{directives:[{name:"model",rawName:"v-model",value:el.type_facilite,expression:"el.type_facilite"}],staticClass:"form-control",attrs:{id:"type_facilite",readonly:"",disabled:""},on:{change:[function($event){var $$selectedVal=Array.prototype.filter.call($event.target.options,function(o){return o.selected;}).map(function(o){var val="_value"in o?o._value:o.value;return val;});_vm.$set(el,"type_facilite",$event.target.multiple?$$selectedVal:$$selectedVal[0]);},function($event){return _vm.handleInputGaranties(ind,"facilites_sollicitees");}]}},[_c("option",{attrs:{disabled:"",selected:"",value:""}},[_vm._v("--- Choisissez le type ---")]),_vm._v(" "),_c("option",{attrs:{value:""}}),_vm._v(" "),_vm._l(_vm.transformLoadedCreditsBanques_,function(items,group){return _c("optgroup",{key:group,attrs:{label:group}},_vm._l(items,function(credit){return _c("option",{key:credit.id,domProps:{value:credit.libelle}},[_vm._v(_vm._s(credit.libelle))]);}),0);})],2)]),_vm._v(" "),_c("td",[_c("input",{directives:[{name:"model",rawName:"v-model",value:el.facilite_libelle,expression:"el.facilite_libelle"}],staticClass:"form-control",staticStyle:{width:"200px !important"},attrs:{type:"text",id:"facilite_libelle",readonly:""},domProps:{value:el.facilite_libelle},on:{input:function input($event){if($event.target.composing)return;_vm.$set(el,"facilite_libelle",$event.target.value);}}})]),_vm._v(" "),_c("td",[_c("input",{staticClass:"form-control",staticStyle:{width:"200px !important"},attrs:{type:"text",id:"infos_fcub_"+ind,readonly:""},domProps:{value:el===null||el===void 0||(_el$infos_fcub3=el.infos_fcub)===null||_el$infos_fcub3===void 0?void 0:_el$infos_fcub3.PRODUCT_CODE}})]),_vm._v(" "),_c("td",[_c("textarea",{staticClass:"form-control",staticStyle:{width:"190px"},attrs:{rows:"2",readonly:""},domProps:{value:el===null||el===void 0||(_el$infos_fcub4=el.infos_fcub)===null||_el$infos_fcub4===void 0?void 0:_el$infos_fcub4.PRODUCT_DESC}})]),_vm._v(" "),_c("td",[_c("currency-input2",{staticStyle:{"min-width":"150px"},attrs:{value:el.montant_demande,readonly:"",disabled:"",id:"montant_demande"},on:{input:function input($event){return _vm.formDataVars3($event,ind,"facilites_sollicitees");}}})],1),_vm._v(" "),_c("td",[_c("currency-input2",{staticStyle:{"min-width":"150px"},attrs:{value:el.montant_credit,readonly:"",disabled:"",id:"montant_credit"},on:{input:function input($event){return _vm.formDataVars3($event,ind,"facilites_sollicitees");}}})],1),_vm._v(" "),_c("td",[_c("input",{directives:[{name:"model",rawName:"v-model",value:el.duree,expression:"el.duree"}],staticClass:"form-control flex-1",staticStyle:{"min-width":"45px","margin-right":"2px"},attrs:{type:"number",min:"1",id:"duree",readonly:"",disabled:""},domProps:{value:el.duree},on:{blur:function blur($event){return _vm.checkingCoherenceField("facilites_sollicitees",ind,"duree",el,$event);},input:function input($event){if($event.target.composing)return;_vm.$set(el,"duree",$event.target.value);}}})]),_vm._v(" "),_c("td",[_c("input-group",{staticStyle:{"min-width":"110px"},scopedSlots:_vm._u([{key:"input",fn:function fn(){return[_c("currency-input",{attrs:{value:el.taux,max:100,"float":"",percentage:"",id:"taux",readonly:"",disabled:""},on:{input:function input($event){return _vm.formDataVars3($event,ind,"facilites_sollicitees");}}})];},proxy:true},{key:"right",fn:function fn(){return[_vm._v("%")];},proxy:true}],null,true)})],1),_vm._v(" "),_c("td",[_c("select",{directives:[{name:"model",rawName:"v-model",value:el.echeancier,expression:"el.echeancier"}],staticClass:"form-control",attrs:{id:"echeancier",readonly:"",disabled:""},on:{change:[function($event){var $$selectedVal=Array.prototype.filter.call($event.target.options,function(o){return o.selected;}).map(function(o){var val="_value"in o?o._value:o.value;return val;});_vm.$set(el,"echeancier",$event.target.multiple?$$selectedVal:$$selectedVal[0]);},function($event){return _vm.checkingCoherenceField("facilites_sollicitees",ind,"echeancier",el,$event);}]}},[_c("option",{attrs:{disabled:"",selected:"",value:""}},[_vm._v("\n                                                                   --- Choisissez l'écheancier ---\n                                                               ")]),_vm._v(" "),_c("option",{attrs:{value:""}}),_vm._v(" "),_vm._l(_vm.periodicites,function(el,index){return[_c("option",{key:index+"4z_2",domProps:{value:el.libelle}},[_vm._v("\n                                                                       "+_vm._s(el.libelle)+"\n                                                                   ")])];})],2)]),_vm._v(" "),_c("td",[_c("currency-input2",{staticStyle:{"min-width":"150px"},attrs:{value:el.montant_echeance,readonly:"",disabled:"",id:"montant_echeance"},on:{input:function input($event){return _vm.formDataVars3($event,ind,"facilites_sollicitees");}}})],1),_vm._v(" "),_c("td",[_c("date-input",{staticStyle:{width:"210px"},attrs:{value:el.date_echeance,disabled:"",id:"date_echeance"},on:{input:function input($event){return _vm.formDataVars3($event,ind,"facilites_sollicitees");}}})],1),_vm._v(" "),_c("td",[_c("div",{staticClass:"d-flex"},[_c("div",{staticClass:"m-2 d-flex mr-4"},[_c("input",{attrs:{type:"checkbox",readonly:"",disabled:"",value:"Oui",id:"is_rachat"},domProps:{checked:el.is_rachat=="Oui"},on:{input:function input($event){return _vm.checkboxValSingle($event,ind,"facilites_sollicitees");}}}),_vm._v(" "),_c("label",{staticClass:"text-nowrap",attrs:{"for":"is_rachat_oui"}},[_vm._v("Oui")])]),_vm._v(" "),_c("div",{staticClass:"m-2 d-flex mr-4"},[_c("input",{attrs:{type:"checkbox",readonly:"",disabled:"",value:"Non",id:"is_rachat"},domProps:{checked:el.is_rachat=="Non"},on:{input:function input($event){return _vm.checkboxValSingle($event,ind,"facilites_sollicitees");}}}),_vm._v(" "),_c("label",{staticClass:"text-nowrap",attrs:{"for":"is_rachat_non"}},[_vm._v("Non")])])])]),_vm._v(" "),_c("td",[["",undefined,null,"Non"].includes(el.is_rachat)?[_c("input",{staticClass:"form-control flex-1",staticStyle:{"min-width":"45px","margin-right":"2px"},attrs:{type:"text",readonly:"",disabled:""}})]:[_c("select",{directives:[{name:"model",rawName:"v-model",value:el.type_rachat,expression:"el.type_rachat"}],staticClass:"form-control",attrs:{id:"type_rachat"+ind,readonly:"",disabled:""},on:{change:[function($event){var $$selectedVal=Array.prototype.filter.call($event.target.options,function(o){return o.selected;}).map(function(o){var val="_value"in o?o._value:o.value;return val;});_vm.$set(el,"type_rachat",$event.target.multiple?$$selectedVal:$$selectedVal[0]);},function($event){return _vm.selTypeRachat("facilites_sollicitees",ind,"type_rachat",el,$event);}]}},[_c("option",{attrs:{value:"",disabled:""}}),_vm._v(" "),_vm._l(_vm.list_type_rachat,function(label,index){return[_c("option",{key:"type-rachat-"+index,domProps:{value:label}},[_vm._v(" "+_vm._s(label)+" ")])];})],2)]],2),_vm._v(" "),_c("td",[["",undefined,null,"Rachat externe"].includes(el.type_rachat)?[_c("input",{directives:[{name:"model",rawName:"v-model",value:el.num_fcub_pret,expression:"el.num_fcub_pret"}],staticClass:"form-control",staticStyle:{width:"200px !important"},attrs:{type:"text",id:"num_fcub_pret"+ind,readonly:"",disabled:""},domProps:{value:el.num_fcub_pret},on:{input:function input($event){if($event.target.composing)return;_vm.$set(el,"num_fcub_pret",$event.target.value);}}})]:[_c("input",{directives:[{name:"model",rawName:"v-model",value:el.num_fcub_pret,expression:"el.num_fcub_pret"}],staticClass:"form-control",staticStyle:{width:"200px !important"},attrs:{type:"text",id:"num_fcub_pret"+ind,readonly:"",disabled:""},domProps:{value:el.num_fcub_pret},on:{input:function input($event){if($event.target.composing)return;_vm.$set(el,"num_fcub_pret",$event.target.value);}}})]],2),_vm._v(" "),_c("td",[["",undefined,null,"Non"].includes(el.is_rachat)?[_c("input",{staticClass:"form-control flex-1",staticStyle:{"min-width":"45px","margin-right":"2px"},attrs:{type:"text",readonly:"",disabled:""}})]:[_c("currency-input2",{staticStyle:{"min-width":"150px"},attrs:{value:el.montant_rachat,readonly:"",disabled:"",id:"montant_rachat"},on:{input:function input($event){return _vm.formDataVars3($event,ind,"facilites_sollicitees");}}})]],2),_vm._v(" "),_c("td",[_c("textarea",{directives:[{name:"model",rawName:"v-model",value:el.commentaire,expression:"el.commentaire"}],staticClass:"form-control",attrs:{rows:"1",id:"commentaire",readonly:"",disabled:""},domProps:{value:el.commentaire},on:{input:[function($event){if($event.target.composing)return;_vm.$set(el,"commentaire",$event.target.value);},function($event){return _vm.formDataVars3($event,ind,"facilites_sollicitees");}]}})])]);}),0),_vm._v(" "),_c("tfoot",[_c("tr",[_c("td",{staticClass:"fw-bold text-left"},[_vm._v("Totaux")]),_vm._v(" "),_c("td",{attrs:{colspan:"5"}}),_vm._v(" "),_c("td",{staticClass:"fw-bold"},[_vm._v(_vm._s(_vm._f("formatNumber")(_vm.totalsFacilites.montant_demande)))]),_vm._v(" "),_c("td",{staticClass:"fw-bold"},[_vm._v(_vm._s(_vm._f("formatNumber")(_vm.totalsFacilites.montant_credit)))]),_vm._v(" "),_c("td",{attrs:{colspan:"3"}}),_vm._v(" "),_c("td",{staticClass:"fw-bold"},[_vm._v(_vm._s(_vm._f("formatNumber")(_vm.totalsFacilites.montant_echeance)))]),_vm._v(" "),_c("td",{attrs:{colspan:"3"}})])])])])])]):_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"relook-header",on:{click:function click($event){_vm.seen0_3=!_vm.seen0_3;}}},[_c("h6",{attrs:{id:"frais-de-crédit"}},[_vm._v("\n                                           Concours/Facilités sollicitées\n                                           "),_c("chevron-down-icon",{staticClass:"custom-class",staticStyle:{"float":"right",cursor:"pointer"},attrs:{size:"21"}})],1)])])],_vm._v(" "),_vm.seen0_5?_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"relook-header",on:{click:function click($event){_vm.seen0_5=!_vm.seen0_5;}}},[_c("h6",{"class":" subdiv"+this.tb_name,attrs:{id:"bref-rappel-des-relations-du-client-avec-la-nsia-banque-ci"}},[_vm._v("\n                                       Proposition de concours / Facilités après analyse\n                                       "),_c("chevron-up-icon",{staticClass:"custom-class",staticStyle:{"float":"right",cursor:"pointer"},attrs:{size:"21"}})],1)]),_vm._v(" "),_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"table-responsive"},[_vm.meta_data.dossier_credit.applied_templ_name=="CRESCO"?[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"table-responsive"},[_c("table",{staticClass:"table table-bordered"},[_vm._m(15),_vm._v(" "),_c("tbody",_vm._l(_vm.propositions_concours,function(el,ind){var _el$infos_fcub5,_el$infos_fcub6;return _c("tr",{key:ind},[_c("td",{staticStyle:{"text-align":"center"}},[_c("button",{staticStyle:{"background-color":"#eb0523",color:"#ffffff","border-radius":"15%",border:"none","margin-top":"8px",width:"34px"},attrs:{type:"button",title:"Faire une simulation"},on:{click:function click($event){return _vm.showTamor(el,ind);}}},[_c("i",{staticClass:"icofont-file-alt"})])]),_vm._v(" "),_c("td",[_c("select",{directives:[{name:"model",rawName:"v-model",value:el.filiale,expression:"el.filiale"}],staticClass:"form-select",attrs:{disabled:""},on:{change:[function($event){var $$selectedVal=Array.prototype.filter.call($event.target.options,function(o){return o.selected;}).map(function(o){var val="_value"in o?o._value:o.value;return val;});_vm.$set(el,"filiale",$event.target.multiple?$$selectedVal:$$selectedVal[0]);},_vm.handleInput3]}},[_c("option",{attrs:{disabled:"",selected:"",value:""}}),_vm._v(" "),_vm._l(_vm.filiale_afg,function(filiale_afg,indexF){return _c("option",{key:indexF+"4z_1",domProps:{value:filiale_afg}},[_vm._v(_vm._s(filiale_afg)+"\n                                                                       ")]);})],2)]),_vm._v(" "),_c("td",{staticClass:"text-center"},[_c("input",{directives:[{name:"model",rawName:"v-model",value:el.type_facilite,expression:"el.type_facilite"}],staticClass:"form-control",staticStyle:{width:"200px !important"},attrs:{type:"text",id:"facilite_libelle",readonly:""},domProps:{value:el.type_facilite},on:{input:function input($event){if($event.target.composing)return;_vm.$set(el,"type_facilite",$event.target.value);}}})]),_vm._v(" "),_c("td",[_c("input",{directives:[{name:"model",rawName:"v-model",value:el.facilite_libelle,expression:"el.facilite_libelle"}],staticClass:"form-control",staticStyle:{width:"200px !important"},attrs:{type:"text",id:"facilite_libelle",readonly:""},domProps:{value:el.facilite_libelle},on:{input:function input($event){if($event.target.composing)return;_vm.$set(el,"facilite_libelle",$event.target.value);}}})]),_vm._v(" "),_c("td",[_c("input",{staticClass:"form-control",staticStyle:{width:"200px !important"},attrs:{type:"text",id:"infos_fcub_"+ind,readonly:""},domProps:{value:el===null||el===void 0||(_el$infos_fcub5=el.infos_fcub)===null||_el$infos_fcub5===void 0?void 0:_el$infos_fcub5.PRODUCT_CODE}})]),_vm._v(" "),_c("td",[_c("textarea",{staticClass:"form-control",staticStyle:{width:"190px"},attrs:{rows:"2",readonly:""},domProps:{value:el===null||el===void 0||(_el$infos_fcub6=el.infos_fcub)===null||_el$infos_fcub6===void 0?void 0:_el$infos_fcub6.PRODUCT_DESC}})]),_vm._v(" "),_c("td",[_c("currency-input2",{"class":{"bg-blue":_vm.accentuate(el)},staticStyle:{"min-width":"150px"},attrs:{value:el.montant_demande,id:"montant_demande"},on:{input:function input($event){return _vm.formDataVars3($event,ind,"propositions_concours");}}})],1),_vm._v(" "),_c("td",[_c("currency-input2",{"class":{"bg-blue":_vm.accentuate(el)},staticStyle:{"min-width":"150px"},attrs:{value:el.montant_credit,id:"montant_credit"},on:{input:function input($event){return _vm.formDataVars3($event,ind,"propositions_concours");}}})],1),_vm._v(" "),_c("td",[_c("input",{directives:[{name:"model",rawName:"v-model",value:el.duree,expression:"el.duree"}],staticClass:"form-control flex-1","class":{"bg-blue":_vm.accentuate(el)},staticStyle:{"min-width":"45px","margin-right":"2px"},attrs:{type:"number",min:"1",id:"duree"},domProps:{value:el.duree},on:{blur:function blur($event){return _vm.checkingCoherenceField("propositions_concours",ind,"duree",el,$event);},input:function input($event){if($event.target.composing)return;_vm.$set(el,"duree",$event.target.value);}}})]),_vm._v(" "),_c("td",[_c("input-group",{staticStyle:{"min-width":"110px"},scopedSlots:_vm._u([{key:"input",fn:function fn(){return[_c("currency-input",{"class":{"bg-blue":_vm.accentuate(el)},attrs:{value:el.taux,max:100,"float":"",percentage:"",id:"taux"},on:{input:function input($event){return _vm.formDataVars3($event,ind,"propositions_concours");}}})];},proxy:true},{key:"right",fn:function fn(){return[_vm._v("%")];},proxy:true}],null,true)})],1),_vm._v(" "),_c("td",[_c("select",{directives:[{name:"model",rawName:"v-model",value:el.echeancier,expression:"el.echeancier"}],staticClass:"form-control","class":{"bg-blue":_vm.accentuate(el)},attrs:{id:"echeancier"},on:{change:[function($event){var $$selectedVal=Array.prototype.filter.call($event.target.options,function(o){return o.selected;}).map(function(o){var val="_value"in o?o._value:o.value;return val;});_vm.$set(el,"echeancier",$event.target.multiple?$$selectedVal:$$selectedVal[0]);},function($event){return _vm.checkingCoherenceField("propositions_concours",ind,"echeancier",el,$event);}]}},[_c("option",{attrs:{disabled:"",selected:"",value:""}},[_vm._v("\n                                                                           --- Choisissez l'écheancier ---\n                                                                       ")]),_vm._v(" "),_c("option",{attrs:{value:""}}),_vm._v(" "),_vm._l(_vm.periodicites,function(el,index){return[_c("option",{domProps:{value:el.libelle}},[_vm._v("\n                                                                               "+_vm._s(el.libelle)+"\n                                                                           ")])];})],2)]),_vm._v(" "),_c("td",[_c("currency-input2",{"class":{"bg-blue":_vm.accentuate(el)},staticStyle:{"min-width":"150px"},attrs:{value:el.montant_echeance,id:"montant_echeance"},on:{input:function input($event){return _vm.formDataVars3($event,ind,"propositions_concours");}}})],1),_vm._v(" "),_c("td",[_c("date-input",{staticStyle:{width:"210px"},attrs:{value:el.date_echeance,id:"date_echeance",background:_vm.accentuate(el)?"background : #00ffff21":"background: inherit"},on:{input:function input($event){return _vm.formDataVars3($event,ind,"propositions_concours");}}})],1),_vm._v(" "),_c("td",[_c("div",{staticClass:"d-flex justify-content-center"},[_c("div",{staticClass:"mx-2",staticStyle:{display:"flex"}},[_c("label",{attrs:{"for":"differe_oui"+ind}},[_vm._v("Oui")]),_vm._v(" "),_c("input",{attrs:{type:"checkbox",value:"Oui",id:"differe_oui"+ind},domProps:{checked:el.differe=="Oui"},on:{input:function input($event){return _vm.checkboxValDiffere($event,ind,"propositions_concours");}}})]),_vm._v(" "),_c("div",{staticClass:"mx-2",staticStyle:{display:"flex"}},[_c("label",{attrs:{"for":"differe_non"+ind}},[_vm._v("Non")]),_vm._v(" "),_c("input",{attrs:{type:"checkbox",value:"Non",id:"differe_non"+ind},domProps:{checked:el.differe=="Non"},on:{input:function input($event){return _vm.checkboxValDiffere($event,ind,"propositions_concours");}}})])])]),_vm._v(" "),_c("td",[["",undefined,null,"Non"].includes(el.differe)?[_c("input",{staticClass:"form-control flex-1",staticStyle:{"min-width":"45px","margin-right":"2px"},attrs:{type:"text",readonly:""}})]:[_c("input",{directives:[{name:"model",rawName:"v-model",value:el.nbre_differe,expression:"el.nbre_differe"}],staticClass:"form-control flex-1","class":{"bg-blue":_vm.accentuate(el)},staticStyle:{"min-width":"45px","margin-right":"2px"},attrs:{type:"number",min:"1",id:"nbre_differe"},domProps:{value:el.nbre_differe},on:{input:function input($event){if($event.target.composing)return;_vm.$set(el,"nbre_differe",$event.target.value);}}})]],2),_vm._v(" "),_c("td",[_c("textarea",{directives:[{name:"model",rawName:"v-model",value:el.commentaire,expression:"el.commentaire"}],staticClass:"form-control","class":{"bg-blue":_vm.accentuate(el)},attrs:{rows:"1",id:"commentaire"},domProps:{value:el.commentaire},on:{input:[function($event){if($event.target.composing)return;_vm.$set(el,"commentaire",$event.target.value);},function($event){return _vm.formDataVars3($event,ind,"propositions_concours");}]}})])]);}),0),_vm._v(" "),_c("tfoot",[_c("tr",[_c("td",{staticClass:"fw-bold text-left"},[_vm._v("Totaux")]),_vm._v(" "),_c("td",{attrs:{colspan:"5"}}),_vm._v(" "),_c("td",{staticClass:"fw-bold"},[_vm._v(_vm._s(_vm._f("formatNumber")(_vm.totalsFacilites.montant_demande)))]),_vm._v(" "),_c("td",{staticClass:"fw-bold"},[_vm._v(_vm._s(_vm._f("formatNumber")(_vm.totalsFacilites.montant_credit)))]),_vm._v(" "),_c("td",{attrs:{colspan:"3"}}),_vm._v(" "),_c("td",{staticClass:"fw-bold"},[_vm._v(_vm._s(_vm._f("formatNumber")(_vm.totalsFacilites.montant_echeance)))]),_vm._v(" "),_c("td",{attrs:{colspan:"4"}})])])])])])]:[_c("table",{staticClass:"table table-bordered"},[_c("thead",[_c("tr",[_c("td",{staticClass:"th fw-bold",staticStyle:{"align-content":"center","font-style":"italic"}},[_vm._v("Simulation")]),_vm._v(" "),_vm._m(16),_vm._v(" "),_vm._m(17),_vm._v(" "),_c("td",{staticClass:"th fw-bold",staticStyle:{"align-content":"center","min-width":"150px"}},[_vm._v("Nature du concours")]),_vm._v(" "),_c("td",{staticClass:"th fw-bold",staticStyle:{"align-content":"center","min-width":"150px"}},[_vm._v("Code produit")]),_vm._v(" "),_c("td",{staticClass:"th fw-bold",staticStyle:{"align-content":"center","min-width":"150px"}},[_vm._v("Descr. produit")]),_vm._v(" "),_vm._m(18),_vm._v(" "),_vm._m(19),_vm._v(" "),_vm._m(20),_vm._v(" "),_vm._m(21),_vm._v(" "),_vm._m(22),_vm._v(" "),_vm._m(23),_vm._v(" "),_vm._m(24),_vm._v(" "),_vm._m(25),_vm._v(" "),_vm._m(26),_vm._v(" "),_vm._m(27),_vm._v(" "),_vm._m(28),_vm._v(" "),_c("td",{staticClass:"th fw-bold",staticStyle:{"align-content":"center","min-width":"280px"}},[_vm._v("Commentaire")]),_vm._v(" "),_c("td",{staticClass:"th fw-bold"},[_c("button",{staticStyle:{"background-color":"#2c3e50",color:"#ffffff","border-radius":"15%",border:"none"},attrs:{type:"button",title:"Ajouter une ligne"},on:{click:function click($event){return _vm.addMorePropositionsConcours();}}},[_c("plus-icon",{staticClass:"custom-class",attrs:{size:"21"}})],1)])])]),_vm._v(" "),_c("tbody",_vm._l(_vm.propositions_concours,function(el,ind){var _el$infos_fcub7,_el$infos_fcub8;return _c("tr",{key:ind},[_c("td",{staticStyle:{"text-align":"center"}},[_c("button",{staticStyle:{"background-color":"#eb0523",color:"#ffffff","border-radius":"15%",border:"none","margin-top":"8px",width:"34px"},attrs:{type:"button",title:"Faire une simulation"},on:{click:function click($event){return _vm.showTamor(el,ind);}}},[_c("i",{staticClass:"icofont-file-alt"})])]),_vm._v(" "),_c("td",[_c("select",{directives:[{name:"model",rawName:"v-model",value:el.filiale,expression:"el.filiale"}],staticClass:"form-select",attrs:{disabled:""},on:{change:[function($event){var $$selectedVal=Array.prototype.filter.call($event.target.options,function(o){return o.selected;}).map(function(o){var val="_value"in o?o._value:o.value;return val;});_vm.$set(el,"filiale",$event.target.multiple?$$selectedVal:$$selectedVal[0]);},_vm.handleInput3]}},[_c("option",{attrs:{disabled:"",selected:"",value:""}}),_vm._v(" "),_vm._l(_vm.filiale_afg,function(filiale_afg,indexF){return _c("option",{key:indexF+"4z_1",domProps:{value:filiale_afg}},[_vm._v(_vm._s(filiale_afg)+"\n                                                               ")]);})],2)]),_vm._v(" "),_c("td",{staticClass:"text-center"},[_c("select",{directives:[{name:"model",rawName:"v-model",value:el.type_facilite,expression:"el.type_facilite"}],staticClass:"form-control","class":{"bg-blue":_vm.accentuate(el)},attrs:{id:"type_facilite"},on:{change:[function($event){var $$selectedVal=Array.prototype.filter.call($event.target.options,function(o){return o.selected;}).map(function(o){var val="_value"in o?o._value:o.value;return val;});_vm.$set(el,"type_facilite",$event.target.multiple?$$selectedVal:$$selectedVal[0]);},function($event){return _vm.handleInputGaranties(ind,"propositions_concours");}]}},[_c("option",{attrs:{disabled:"",selected:"",value:""}},[_vm._v("--- Choisissez le type ---")]),_vm._v(" "),_c("option",{attrs:{value:""}}),_vm._v(" "),_vm._l(_vm.transformLoadedCreditsBanques_,function(items,group){return _c("optgroup",{key:group,attrs:{label:group}},_vm._l(items,function(credit){return _c("option",{key:credit.id,domProps:{value:credit.libelle}},[_vm._v(_vm._s(credit.libelle))]);}),0);})],2)]),_vm._v(" "),_c("td",[_c("input",{directives:[{name:"model",rawName:"v-model",value:el.facilite_libelle,expression:"el.facilite_libelle"}],staticClass:"form-control",staticStyle:{width:"200px !important"},attrs:{type:"text",id:"facilite_libelle",readonly:""},domProps:{value:el.facilite_libelle},on:{input:function input($event){if($event.target.composing)return;_vm.$set(el,"facilite_libelle",$event.target.value);}}})]),_vm._v(" "),_c("td",[_c("input",{staticClass:"form-control",staticStyle:{width:"200px !important"},attrs:{type:"text",id:"infos_fcub_"+ind,readonly:""},domProps:{value:el===null||el===void 0||(_el$infos_fcub7=el.infos_fcub)===null||_el$infos_fcub7===void 0?void 0:_el$infos_fcub7.PRODUCT_CODE}})]),_vm._v(" "),_c("td",[_c("textarea",{staticClass:"form-control",staticStyle:{width:"190px"},attrs:{rows:"2",readonly:""},domProps:{value:el===null||el===void 0||(_el$infos_fcub8=el.infos_fcub)===null||_el$infos_fcub8===void 0?void 0:_el$infos_fcub8.PRODUCT_DESC}})]),_vm._v(" "),_c("td",[_c("currency-input2",{staticStyle:{"min-width":"150px"},attrs:{value:el.montant_demande,id:"montant_demande",disabled:_vm.accentuate(el)},on:{input:function input($event){return _vm.formDataVars3($event,ind,"propositions_concours");}}})],1),_vm._v(" "),_c("td",[_c("currency-input2",{"class":{"bg-blue":_vm.accentuate(el)},staticStyle:{"min-width":"150px"},attrs:{value:el.montant_credit,id:"montant_credit"},on:{input:function input($event){return _vm.formDataVars3($event,ind,"propositions_concours");}}})],1),_vm._v(" "),_c("td",[_c("input",{directives:[{name:"model",rawName:"v-model",value:el.duree,expression:"el.duree"}],staticClass:"form-control flex-1","class":{"bg-blue":_vm.accentuate(el)},staticStyle:{"min-width":"45px","margin-right":"2px"},attrs:{type:"number",min:"1",id:"duree"},domProps:{value:el.duree},on:{blur:function blur($event){return _vm.checkingCoherenceField("propositions_concours",ind,"duree",el,$event);},input:function input($event){if($event.target.composing)return;_vm.$set(el,"duree",$event.target.value);}}})]),_vm._v(" "),_c("td",[_c("input-group",{staticStyle:{"min-width":"110px"},scopedSlots:_vm._u([{key:"input",fn:function fn(){return[_c("currency-input",{"class":{"bg-blue":_vm.accentuate(el)},attrs:{value:el.taux,max:100,"float":"",percentage:"",id:"taux"},on:{input:function input($event){return _vm.formDataVars3($event,ind,"propositions_concours");}}})];},proxy:true},{key:"right",fn:function fn(){return[_vm._v("%")];},proxy:true}],null,true)})],1),_vm._v(" "),_c("td",[_c("select",{directives:[{name:"model",rawName:"v-model",value:el.echeancier,expression:"el.echeancier"}],staticClass:"form-control","class":{"bg-blue":_vm.accentuate(el)},attrs:{id:"echeancier"},on:{change:[function($event){var $$selectedVal=Array.prototype.filter.call($event.target.options,function(o){return o.selected;}).map(function(o){var val="_value"in o?o._value:o.value;return val;});_vm.$set(el,"echeancier",$event.target.multiple?$$selectedVal:$$selectedVal[0]);},function($event){return _vm.checkingCoherenceField("propositions_concours",ind,"echeancier",el,$event);}]}},[_c("option",{attrs:{disabled:"",selected:"",value:""}},[_vm._v("\n                                                                   --- Choisissez l'écheancier ---\n                                                               ")]),_vm._v(" "),_c("option",{attrs:{value:""}}),_vm._v(" "),_vm._l(_vm.periodicites,function(el,index){return[_c("option",{key:"periodicite-"+index,domProps:{value:el.libelle}},[_vm._v("\n                                                                       "+_vm._s(el.libelle)+"\n                                                                   ")])];})],2)]),_vm._v(" "),_c("td",[_c("currency-input2",{"class":{"bg-blue":_vm.accentuate(el)},staticStyle:{"min-width":"150px"},attrs:{value:el.montant_echeance,id:"montant_echeance"},on:{input:function input($event){return _vm.formDataVars3($event,ind,"propositions_concours");}}})],1),_vm._v(" "),_c("td",[_c("date-input",{staticStyle:{width:"210px"},attrs:{value:el.date_echeance,background:_vm.accentuate(el)?"background : #00ffff21":"background: inherit",id:"date_echeance"},on:{input:function input($event){return _vm.formDataVars3($event,ind,"propositions_concours");}}})],1),_vm._v(" "),_c("td",[_c("div",{staticClass:"d-flex"},[_c("div",{staticClass:"m-2 d-flex mr-4"},[_c("input",{"class":{"bg-blue":_vm.accentuate(el)},attrs:{type:"checkbox",value:"Oui",id:"is_rachat"},domProps:{checked:el.is_rachat=="Oui"},on:{input:function input($event){return _vm.checkboxValSingle($event,ind,"propositions_concours");}}}),_vm._v(" "),_c("label",{staticClass:"text-nowrap",attrs:{"for":"is_rachat_oui"}},[_vm._v("Oui")])]),_vm._v(" "),_c("div",{staticClass:"m-2 d-flex mr-4"},[_c("input",{"class":{"bg-blue":_vm.accentuate(el)},attrs:{type:"checkbox",value:"Non",id:"is_rachat"},domProps:{checked:el.is_rachat=="Non"},on:{input:function input($event){return _vm.checkboxValSingle($event,ind,"propositions_concours");}}}),_vm._v(" "),_c("label",{staticClass:"text-nowrap",attrs:{"for":"is_rachat_non"}},[_vm._v("Non")])])])]),_vm._v(" "),_c("td",[["",undefined,null,"Non"].includes(el.is_rachat)?[_c("input",{staticClass:"form-control flex-1","class":{"bg-blue":_vm.accentuate(el)},staticStyle:{"min-width":"45px","margin-right":"2px"},attrs:{type:"text",readonly:""}})]:[_c("select",{directives:[{name:"model",rawName:"v-model",value:el.type_rachat,expression:"el.type_rachat"}],staticClass:"form-control","class":{"bg-blue":_vm.accentuate(el)},attrs:{id:"type_rachat"+ind},on:{change:[function($event){var $$selectedVal=Array.prototype.filter.call($event.target.options,function(o){return o.selected;}).map(function(o){var val="_value"in o?o._value:o.value;return val;});_vm.$set(el,"type_rachat",$event.target.multiple?$$selectedVal:$$selectedVal[0]);},function($event){return _vm.selTypeRachat("propositions_concours",ind,"type_rachat",el,$event);}]}},[_c("option",{attrs:{value:"",disabled:""}}),_vm._v(" "),_vm._l(_vm.list_type_rachat,function(label,index){return[_c("option",{key:"propositions-type-rachat-"+index,domProps:{value:label}},[_vm._v(" "+_vm._s(label)+" ")])];})],2)]],2),_vm._v(" "),_c("td",[["",undefined,null,"Rachat externe"].includes(el.type_rachat)?[_c("input",{directives:[{name:"model",rawName:"v-model",value:el.num_fcub_pret,expression:"el.num_fcub_pret"}],staticClass:"form-control","class":{"bg-blue":_vm.accentuate(el)},staticStyle:{width:"200px !important"},attrs:{type:"text",id:"num_fcub_pret"+ind,readonly:""},domProps:{value:el.num_fcub_pret},on:{input:function input($event){if($event.target.composing)return;_vm.$set(el,"num_fcub_pret",$event.target.value);}}})]:[_c("input",{directives:[{name:"model",rawName:"v-model",value:el.num_fcub_pret,expression:"el.num_fcub_pret"}],staticClass:"form-control","class":{"bg-blue":_vm.accentuate(el)},staticStyle:{width:"200px !important"},attrs:{type:"text",id:"num_fcub_pret"+ind},domProps:{value:el.num_fcub_pret},on:{input:function input($event){if($event.target.composing)return;_vm.$set(el,"num_fcub_pret",$event.target.value);}}})]],2),_vm._v(" "),_c("td",[["",undefined,null,"Non"].includes(el.is_rachat)?[_c("input",{staticClass:"form-control flex-1","class":{"bg-blue":_vm.accentuate(el)},staticStyle:{"min-width":"45px","margin-right":"2px"},attrs:{type:"text",readonly:""}})]:[_c("currency-input2",{"class":{"bg-blue":_vm.accentuate(el)},staticStyle:{"min-width":"150px"},attrs:{value:el.montant_rachat,id:"montant_rachat"},on:{input:function input($event){return _vm.formDataVars3($event,ind,"propositions_concours");}}})]],2),_vm._v(" "),_c("td",[_c("textarea",{directives:[{name:"model",rawName:"v-model",value:el.commentaire,expression:"el.commentaire"}],staticClass:"form-control","class":{"bg-blue":_vm.accentuate(el)},attrs:{rows:"1",id:"commentaire"},domProps:{value:el.commentaire},on:{input:[function($event){if($event.target.composing)return;_vm.$set(el,"commentaire",$event.target.value);},function($event){return _vm.formDataVars3($event,ind,"propositions_concours");}]}})]),_vm._v(" "),_c("td",{staticClass:"vertical-middle text-right",staticStyle:{width:"15px"}},[ind>=0?_c("button",{staticStyle:{"background-color":"transparent",border:"none"},attrs:{type:"button",title:"Supprimer cette ligne"},on:{click:function click($event){return _vm.removePropositionsConcours(ind);}}},[_c("trash-icon",{staticClass:"custom-class",attrs:{size:"21"}})],1):_vm._e()])]);}),0),_vm._v(" "),_c("tfoot",[_c("tr",[_c("td",{staticClass:"fw-bold text-left"},[_vm._v("Totaux")]),_vm._v(" "),_c("td",{attrs:{colspan:"4"}}),_vm._v(" "),_c("td",{staticClass:"fw-bold"},[_vm._v(_vm._s(_vm._f("formatNumber")(_vm.totalsPropositions.montant_demande)))]),_vm._v(" "),_c("td",{staticClass:"fw-bold"},[_vm._v(_vm._s(_vm._f("formatNumber")(_vm.totalsPropositions.montant_credit)))]),_vm._v(" "),_c("td",{attrs:{colspan:"3"}}),_vm._v(" "),_c("td",{staticClass:"fw-bold"},[_vm._v(_vm._s(_vm._f("formatNumber")(_vm.totalsPropositions.montant_echeance)))]),_vm._v(" "),_c("td",{attrs:{colspan:"3"}})])])])]],2)])]):_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"relook-header",on:{click:function click($event){_vm.seen0_5=!_vm.seen0_5;}}},[_c("h6",{attrs:{id:"bref-rappel-des-relations-du-client-avec-la-nsia-banque-ci"}},[_vm._v("\n                                       Proposition de concours / Facilités après analyse\n                                       "),_c("chevron-down-icon",{staticClass:"custom-class",staticStyle:{"float":"right",cursor:"pointer"},attrs:{size:"21"}})],1)])]),_vm._v(" "),_vm.meta_data.dossier_credit.applied_templ_name=="CRESCO"?[_vm.seen0_7?_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"relook-header",on:{click:function click($event){_vm.seen0_7=!_vm.seen0_7;}}},[_c("h6",{"class":"subdiv"+this.tb_name,attrs:{id:"frais-de-crédit-facitlite"}},[_vm._v("\n                                           Frais divers associé à la ligne\n                                       "),_c("chevron-up-icon",{staticClass:"custom-class",staticStyle:{"float":"right",cursor:"pointer"},attrs:{size:"21"}})],1)]),_vm._v(" "),_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"table-responsive"},[_c("table",{staticClass:"table table-bordered"},[_vm._m(29),_vm._v(" "),_c("tbody",_vm._l(_vm.propositions_selectionnees,function(el,ind){return _c("tr",{key:ind},[_c("td",[_c("span",{staticClass:"fw-bold"},[_vm._v(_vm._s(el.facilite_libelle))])]),_vm._v(" "),_c("td",[_c("currency-input2",{"class":{"bg-blue":_vm.accentuate(el)},staticStyle:{"min-width":"150px"},attrs:{value:el.frais_dossier,id:"facilites_selectionnees_frais_dossier"+ind},on:{change:function change($event){return _vm.recalculerTVAFraisDossier($event,ind,"frais_dossier");}}})],1),_vm._v(" "),_c("td",[_c("currency-input2",{staticStyle:{"min-width":"150px"},attrs:{value:el.tva_frais_dossier,id:"tva_frais_dossier",disabled:""},on:{input:function input($event){return _vm.formDataVars3($event,ind,"facilites_selectionnees");}}})],1),_vm._v(" "),_c("td",[_c("currency-input2",{"class":{"bg-blue":_vm.accentuate(el)},staticStyle:{"min-width":"150px"},attrs:{value:el.montant_assurance,id:"montant_assurance"},on:{input:function input($event){return _vm.formDataVars3($event,ind,"facilites_selectionnees");}}})],1),_vm._v(" "),_c("td",[_c("input-group",{staticStyle:{"min-width":"110px"},scopedSlots:_vm._u([{key:"input",fn:function fn(){return[_c("currency-input",{"class":{"bg-blue":_vm.accentuate(el)},attrs:{value:el.teg_ttc,max:100,"float":"",percentage:"",id:"teg_ttc"},on:{input:function input($event){return _vm.formDataVars3($event,ind,"facilites_selectionnees");}}})];},proxy:true},{key:"right",fn:function fn(){return[_vm._v("%")];},proxy:true}],null,true)})],1),_vm._v(" "),_c("td",[_c("input-group",{staticStyle:{"min-width":"110px"},scopedSlots:_vm._u([{key:"input",fn:function fn(){return[_c("currency-input",{"class":{"bg-blue":_vm.accentuate(el)},attrs:{value:el.taux_periodique,max:100,"float":"",percentage:"",id:"taux_periodique"},on:{input:function input($event){return _vm.formDataVars3($event,ind,"facilites_selectionnees");}}})];},proxy:true},{key:"right",fn:function fn(){return[_vm._v("%")];},proxy:true}],null,true)})],1),_vm._v(" "),_c("td",[_c("input-group",{staticStyle:{"min-width":"110px"},scopedSlots:_vm._u([{key:"input",fn:function fn(){return[_c("currency-input",{"class":{"bg-blue":_vm.accentuate(el)},attrs:{value:el.taux_usure,max:100,"float":"",percentage:"",id:"taux_usure"},on:{input:function input($event){return _vm.formDataVars3($event,ind,"facilites_selectionnees");}}})];},proxy:true},{key:"right",fn:function fn(){return[_vm._v("%")];},proxy:true}],null,true)})],1)]);}),0),_vm._v(" "),_c("tfoot",[_c("tr",[_c("td",{staticClass:"fw-bold text-left",attrs:{rowspan:"2"}},[_vm._v("Totaux")]),_vm._v(" "),_c("td",{staticClass:"fw-bold"},[_vm._v(_vm._s(_vm._f("formatNumber")(_vm.totalsFacilitesSelectionnees.frais_dossier)))]),_vm._v(" "),_c("td",{staticClass:"fw-bold"},[_vm._v(_vm._s(_vm._f("formatNumber")(_vm.totalsFacilitesSelectionnees.tva_frais_dossier)))]),_vm._v(" "),_c("td",{staticClass:"fw-bold"},[_vm._v(_vm._s(_vm._f("formatNumber")(_vm.totalsFacilitesSelectionnees.montant_assurance)))]),_vm._v(" "),_c("td"),_vm._v(" "),_c("td"),_vm._v(" "),_c("td")])])])])])]):_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"relook-header",on:{click:function click($event){_vm.seen0_7=!_vm.seen0_7;}}},[_c("h6",{attrs:{id:"facilite-ligne-associee"}},[_vm._v("\n                                           Frais divers associé à la ligne\n                                           "),_c("chevron-down-icon",{staticClass:"custom-class",staticStyle:{"float":"right",cursor:"pointer"},attrs:{size:"21"}})],1)])])]:[_vm.seen0_7?_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"relook-header",on:{click:function click($event){_vm.seen0_7=!_vm.seen0_7;}}},[_c("h6",{"class":" subdiv"+this.tb_name,attrs:{id:"Frais-divers-associe-a-la-ligne"}},[_vm._v("\n                                           Frais divers associé à la ligne\n                                           "),_c("chevron-up-icon",{staticClass:"custom-class",staticStyle:{"float":"right",cursor:"pointer"},attrs:{size:"21"}})],1)]),_vm._v(" "),_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"table-responsive"},[_c("table",{staticClass:"table table-bordered"},[_vm._m(30),_vm._v(" "),_c("tbody",_vm._l(_vm.propositions_selectionnees,function(el,ind){return _c("tr",{key:ind},[_c("td",[_c("span",{staticClass:"fw-bold"},[_vm._v(_vm._s(el.facilite_libelle))])]),_vm._v(" "),_c("td",[_c("currency-input2",{"class":{"bg-blue":_vm.accentuate(el)},staticStyle:{"min-width":"150px"},attrs:{value:el.frais_dossier,id:"propositions_selectionnees_frais_dossier"+ind},on:{change:function change($event){return _vm.recalculerTVAFraisDossier($event,ind,"frais_dossier");}}})],1),_vm._v(" "),_c("td",[_c("currency-input2",{"class":{"bg-blue":_vm.accentuate(el)},staticStyle:{"min-width":"150px"},attrs:{value:el.tva_frais_dossier,id:"tva_frais_dossier",disabled:""},on:{input:function input($event){return _vm.formDataVars3($event,ind,"propositions_selectionnees");}}})],1),_vm._v(" "),_c("td",[_c("currency-input2",{"class":{"bg-blue":_vm.accentuate(el)},staticStyle:{"min-width":"150px"},attrs:{value:el.montant_assurance,id:"montant_assurance"},on:{input:function input($event){return _vm.formDataVars3($event,ind,"propositions_selectionnees");}}})],1),_vm._v(" "),_c("td",[_c("input-group",{staticStyle:{"min-width":"110px"},scopedSlots:_vm._u([{key:"input",fn:function fn(){return[_c("currency-input",{"class":{"bg-blue":_vm.accentuate(el)},attrs:{value:el.TEG,max:100,"float":"",percentage:"",id:"TEG"},on:{input:function input($event){return _vm.formDataVars3($event,ind,"propositions_selectionnees");}}})];},proxy:true},{key:"right",fn:function fn(){return[_vm._v("%")];},proxy:true}],null,true)})],1),_vm._v(" "),_c("td",[_c("currency-input2",{"class":{"bg-blue":_vm.accentuate(el)},staticStyle:{"min-width":"150px"},attrs:{value:el.frais_cheque_certifie,id:"frais_cheque_certifie",disabled:_vm.isRachatExterne(ind)},on:{input:function input($event){return _vm.formDataVars3($event,ind,"propositions_selectionnees");}}})],1),_vm._v(" "),_c("td",[_c("currency-input2",{"class":{"bg-blue":_vm.accentuate(el)},staticStyle:{"min-width":"150px"},attrs:{value:el.frais_huissier,id:"frais_huissier",disabled:_vm.isRachatExterne(ind)},on:{input:function input($event){return _vm.formDataVars3($event,ind,"propositions_selectionnees");}}})],1),_vm._v(" "),_c("td",[_c("input-group",{staticStyle:{"min-width":"110px"},scopedSlots:_vm._u([{key:"input",fn:function fn(){return[_c("currency-input",{"class":{"bg-blue":_vm.accentuate(el)},attrs:{value:el.cash_call_percent,max:100,"float":"",percentage:"",id:"cash_call_percent"},on:{input:function input($event){return _vm.recalculerCashCall($event,ind,"cash_call_percent");}}})];},proxy:true},{key:"right",fn:function fn(){return[_vm._v("%")];},proxy:true}],null,true)})],1),_vm._v(" "),_c("td",[_c("currency-input2",{"class":{"bg-blue":_vm.accentuate(el)},staticStyle:{"min-width":"150px"},attrs:{value:el.cash_call_amount,id:"propositions_selectionnees_cash_call_amount"+ind,disabled:""},on:{input:function input($event){return _vm.formDataVars3($event,ind,"propositions_selectionnees");}}})],1),_vm._v(" "),_c("td",[_c("input",{staticClass:"form-control","class":{"bg-blue":_vm.accentuate(el)},staticStyle:{"min-width":"150px"},attrs:{type:"text",id:"compte_cash_coll-".concat(ind)},domProps:{value:el.compte_cash_coll},on:{input:function input($event){var _$event$target;return _vm.formDataVars3(["compte_cash_coll",$event===null||$event===void 0||(_$event$target=$event.target)===null||_$event$target===void 0?void 0:_$event$target.value],ind,"propositions_selectionnees");}}})]),_vm._v(" "),_c("td",[_c("input-group",{staticStyle:{"min-width":"110px"},scopedSlots:_vm._u([{key:"input",fn:function fn(){return[_c("currency-input",{"class":{"bg-blue":_vm.accentuate(el)},attrs:{value:el.taux_periodique,max:100,"float":"",percentage:"",id:"taux_periodique"},on:{input:function input($event){return _vm.formDataVars3($event,ind,"propositions_selectionnees");}}})];},proxy:true},{key:"right",fn:function fn(){return[_vm._v("%")];},proxy:true}],null,true)})],1),_vm._v(" "),_c("td",[_c("input-group",{staticStyle:{"min-width":"110px"},scopedSlots:_vm._u([{key:"input",fn:function fn(){return[_c("currency-input",{"class":{"bg-blue":_vm.accentuate(el)},attrs:{value:el.taux_usure,max:100,"float":"",percentage:"",id:"taux_usure"},on:{input:function input($event){return _vm.formDataVars3($event,ind,"propositions_selectionnees");}}})];},proxy:true},{key:"right",fn:function fn(){return[_vm._v("%")];},proxy:true}],null,true)})],1)]);}),0),_vm._v(" "),_c("tfoot",[_c("tr",[_c("td",{staticClass:"fw-bold text-left",attrs:{rowspan:"2"}},[_vm._v("Totaux")]),_vm._v(" "),_c("td",{staticClass:"fw-bold"},[_vm._v(_vm._s(_vm._f("formatNumber")(_vm.totalsPropositionsSelectionnees.frais_dossier)))]),_vm._v(" "),_c("td",{staticClass:"fw-bold"},[_vm._v(_vm._s(_vm._f("formatNumber")(_vm.totalsPropositionsSelectionnees.tva_frais_dossier)))]),_vm._v(" "),_c("td",{staticClass:"fw-bold"},[_vm._v(_vm._s(_vm._f("formatNumber")(_vm.totalsPropositionsSelectionnees.montant_assurance)))]),_vm._v(" "),_c("td",{staticClass:"fw-bold"}),_vm._v(" "),_c("td",{staticClass:"fw-bold"},[_vm._v(_vm._s(_vm._f("formatNumber")(_vm.totalsPropositionsSelectionnees.frais_cheque_certifie)))]),_vm._v(" "),_c("td",{staticClass:"fw-bold"},[_vm._v(_vm._s(_vm._f("formatNumber")(_vm.totalsPropositionsSelectionnees.frais_huissier)))]),_vm._v(" "),_c("td",{staticClass:"fw-bold"}),_vm._v(" "),_c("td",{staticClass:"fw-bold"},[_vm._v(_vm._s(_vm._f("formatNumber")(_vm.totalsPropositionsSelectionnees.cash_call_amount)))]),_vm._v(" "),_c("td"),_vm._v(" "),_c("td",{staticClass:"fw-bold"}),_vm._v(" "),_c("td",{staticClass:"fw-bold"})])])])])])]):_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"relook-header",on:{click:function click($event){_vm.seen0_7=!_vm.seen0_7;}}},[_c("h6",{attrs:{id:"Frais-divers-associe-a-la-ligne"}},[_vm._v("\n                                           Frais divers associé à la ligne\n                                           "),_c("chevron-down-icon",{staticClass:"custom-class",staticStyle:{"float":"right",cursor:"pointer"},attrs:{size:"21"}})],1)])])],_vm._v(" "),((_vm$meta_data=_vm.meta_data)===null||_vm$meta_data===void 0||(_vm$meta_data=_vm$meta_data.dossier_credit)===null||_vm$meta_data===void 0?void 0:_vm$meta_data.applied_templ_name)!=="CRESCO"?[_vm.seen0_4?_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"relook-header",on:{click:function click($event){_vm.seen0_4=!_vm.seen0_4;}}},[_c("h6",{"class":" subdiv"+this.tb_name,attrs:{id:"bref-rappel-des-relations-du-client-avec-la-nsia-banque-ci"}},[_vm._v("\n                                           Calcul de la quotité\n                                           "),_c("chevron-up-icon",{staticClass:"custom-class",staticStyle:{"float":"right",cursor:"pointer"},attrs:{size:"21"}})],1)]),_vm._v(" "),_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-6 pl-4 mt-2",attrs:{title:(_vm$donnee_calculs$A=(_vm$donnee_calculs=_vm.donnee_calculs)===null||_vm$donnee_calculs===void 0?void 0:_vm$donnee_calculs["A"])!==null&&_vm$donnee_calculs$A!==void 0?_vm$donnee_calculs$A:"","data-bs-original-title":(_vm$donnee_calculs$A2=(_vm$donnee_calculs2=_vm.donnee_calculs)===null||_vm$donnee_calculs2===void 0?void 0:_vm$donnee_calculs2["A"])!==null&&_vm$donnee_calculs$A2!==void 0?_vm$donnee_calculs$A2:"","data-toggle":"tooltip","data-placement":"top"}},[_vm._m(31),_c("br"),_vm._v(" "),_vm._m(32),_vm._v(" "),_c("currency-input2",{attrs:{id:"revenu_total_colonne_emprunteur",value:_vm.formDataToBeWatched.revenu_total_colonne_emprunteur,readonly:""},on:{input:_vm.formDataVars}})],1),_vm._v(" "),_c("div",{staticClass:"col-md-6 pl-4 mt-2",attrs:{title:(_vm$donnee_calculs$H=(_vm$donnee_calculs3=_vm.donnee_calculs)===null||_vm$donnee_calculs3===void 0?void 0:_vm$donnee_calculs3["H"])!==null&&_vm$donnee_calculs$H!==void 0?_vm$donnee_calculs$H:"","data-bs-original-title":(_vm$donnee_calculs$H2=(_vm$donnee_calculs4=_vm.donnee_calculs)===null||_vm$donnee_calculs4===void 0?void 0:_vm$donnee_calculs4["H"])!==null&&_vm$donnee_calculs$H2!==void 0?_vm$donnee_calculs$H2:"","data-toggle":"tooltip","data-placement":"top"}},[_vm._m(33),_c("br"),_vm._v(" "),_vm._m(34),_vm._v(" "),_c("currency-input2",{attrs:{id:"revenu_total_colonne_montant_pondere",value:_vm.formDataToBeWatched.revenu_total_colonne_montant_pondere,readonly:""},on:{input:_vm.formDataVars}})],1),_vm._v(" "),_c("div",{staticClass:"col-md-6 pl-4 mt-2",attrs:{title:(_vm$donnee_calculs$B=(_vm$donnee_calculs5=_vm.donnee_calculs)===null||_vm$donnee_calculs5===void 0?void 0:_vm$donnee_calculs5["B"])!==null&&_vm$donnee_calculs$B!==void 0?_vm$donnee_calculs$B:"","data-bs-original-title":(_vm$donnee_calculs$B2=(_vm$donnee_calculs6=_vm.donnee_calculs)===null||_vm$donnee_calculs6===void 0?void 0:_vm$donnee_calculs6["B"])!==null&&_vm$donnee_calculs$B2!==void 0?_vm$donnee_calculs$B2:"","data-toggle":"tooltip","data-placement":"top"}},[_vm._m(35),_c("br"),_vm._v(" "),_vm._m(36),_vm._v(" "),_c("currency-input2",{attrs:{id:"quotite_cessible",value:_vm.formDataToBeWatched.quotite_cessible,readonly:""},on:{input:_vm.formDataVars}})],1),_vm._v(" "),_c("div",{staticClass:"col-md-6 pl-4 mt-2",attrs:{title:(_vm$donnee_calculs$C=(_vm$donnee_calculs7=_vm.donnee_calculs)===null||_vm$donnee_calculs7===void 0?void 0:_vm$donnee_calculs7["C"])!==null&&_vm$donnee_calculs$C!==void 0?_vm$donnee_calculs$C:"","data-bs-original-title":(_vm$donnee_calculs$C2=(_vm$donnee_calculs8=_vm.donnee_calculs)===null||_vm$donnee_calculs8===void 0?void 0:_vm$donnee_calculs8["C"])!==null&&_vm$donnee_calculs$C2!==void 0?_vm$donnee_calculs$C2:"","data-toggle":"tooltip","data-placement":"top"}},[_vm._m(37),_c("br"),_vm._v(" "),_vm._m(38),_vm._v(" "),_c("div",{staticClass:"d-flex position-relative align-items-center"},[_c("input-group",{scopedSlots:_vm._u([{key:"input",fn:function fn(){return[_c("currency-input",{attrs:{disabled:true,readonly:true,value:_vm.formDataToBeWatched.pourcentage_quotite,max:100,"float":"",percentage:""}})];},proxy:true},{key:"right",fn:function fn(){return[_vm._v("%")];},proxy:true}],null,false,1004298618)}),_vm._v(" "), false?0:_vm._e()],1)]),_vm._v(" "),_c("div",{staticClass:"col-md-6 pl-4 mt-2",attrs:{title:(_vm$donnee_calculs$D=(_vm$donnee_calculs9=_vm.donnee_calculs)===null||_vm$donnee_calculs9===void 0?void 0:_vm$donnee_calculs9["D"])!==null&&_vm$donnee_calculs$D!==void 0?_vm$donnee_calculs$D:"","data-bs-original-title":(_vm$donnee_calculs$D2=(_vm$donnee_calculs0=_vm.donnee_calculs)===null||_vm$donnee_calculs0===void 0?void 0:_vm$donnee_calculs0["D"])!==null&&_vm$donnee_calculs$D2!==void 0?_vm$donnee_calculs$D2:"","data-toggle":"tooltip","data-placement":"top"}},[_vm._m(39),_c("br"),_vm._v(" "),_vm._m(40),_vm._v(" "),_c("currency-input2",{"class":_vm.convertInt(_vm.formDataToBeWatched.quotite_cessible_disponible)<0?"is-invalid":"",attrs:{title:_vm.formuleQD(_vm.getQuotiteCessible.quotite_cessible_disponible,"D"),"data-bs-original-title":_vm.formuleQD(_vm.getQuotiteCessible.quotite_cessible_disponible,"D"),"data-toggle":"tooltip","data-placement":"top",id:"quotite_cessible_disponible",value:_vm.getQuotiteCessible.quotite_cessible_disponible,readonly:""},on:{input:_vm.formDataVars}}),_vm._v(" "),_vm._m(41)],1),_vm._v(" "),_c("div",{staticClass:"col-md-6 pl-4 mt-2",attrs:{title:(_vm$donnee_calculs$E=(_vm$donnee_calculs1=_vm.donnee_calculs)===null||_vm$donnee_calculs1===void 0?void 0:_vm$donnee_calculs1["E"])!==null&&_vm$donnee_calculs$E!==void 0?_vm$donnee_calculs$E:"","data-bs-original-title":(_vm$donnee_calculs$E2=(_vm$donnee_calculs10=_vm.donnee_calculs)===null||_vm$donnee_calculs10===void 0?void 0:_vm$donnee_calculs10["E"])!==null&&_vm$donnee_calculs$E2!==void 0?_vm$donnee_calculs$E2:"","data-toggle":"tooltip","data-placement":"top"}},[_vm._m(42),_c("br"),_vm._v(" "),_vm._m(43),_vm._v(" "),_c("div",{staticClass:"d-flex position-relative align-items-center"},[_c("input-group",{scopedSlots:_vm._u([{key:"input",fn:function fn(){return[_c("currency-input",{attrs:{disabled:true,readonly:true,value:_vm.formDataToBeWatched.pourcentage_quotite_general,max:100,"float":"",percentage:""}})];},proxy:true},{key:"right",fn:function fn(){return[_vm._v("%")];},proxy:true}],null,false,415308979)}),_vm._v(" "), false?0:_vm._e()],1)]),_vm._v(" "),_c("div",{staticClass:"col-md-6 pl-4 mt-2",attrs:{title:(_vm$donnee_calculs$F=(_vm$donnee_calculs11=_vm.donnee_calculs)===null||_vm$donnee_calculs11===void 0?void 0:_vm$donnee_calculs11["F"])!==null&&_vm$donnee_calculs$F!==void 0?_vm$donnee_calculs$F:"","data-bs-original-title":(_vm$donnee_calculs$F2=(_vm$donnee_calculs12=_vm.donnee_calculs)===null||_vm$donnee_calculs12===void 0?void 0:_vm$donnee_calculs12["F"])!==null&&_vm$donnee_calculs$F2!==void 0?_vm$donnee_calculs$F2:"","data-toggle":"tooltip","data-placement":"top"}},[_vm._m(44),_c("br"),_vm._v(" "),_vm._m(45),_vm._v(" "),_c("currency-input2",{attrs:{id:"quotite_cessible_general",value:_vm.formDataToBeWatched.quotite_cessible_general,readonly:""},on:{input:_vm.formDataVars}})],1),_vm._v(" "),_c("div",{staticClass:"col-md-6 pl-4 mt-2",attrs:{title:(_vm$donnee_calculs$G=(_vm$donnee_calculs13=_vm.donnee_calculs)===null||_vm$donnee_calculs13===void 0?void 0:_vm$donnee_calculs13["G"])!==null&&_vm$donnee_calculs$G!==void 0?_vm$donnee_calculs$G:"","data-bs-original-title":(_vm$donnee_calculs$G2=(_vm$donnee_calculs14=_vm.donnee_calculs)===null||_vm$donnee_calculs14===void 0?void 0:_vm$donnee_calculs14["G"])!==null&&_vm$donnee_calculs$G2!==void 0?_vm$donnee_calculs$G2:"","data-toggle":"tooltip","data-placement":"top"}},[_vm._m(46),_c("br"),_vm._v(" "),_vm._m(47),_vm._v(" "),_c("currency-input2",{"class":_vm.convertInt(_vm.formDataToBeWatched.quotite_cessible_disponible_general)<0?"is-invalid":"",attrs:{title:_vm.formuleQD(_vm.getQuotiteCessible.quotite_cessible_disponible_general,"G"),"data-bs-original-title":_vm.formuleQD(_vm.getQuotiteCessible.quotite_cessible_disponible_general,"G"),"data-toggle":"tooltip","data-placement":"top",id:"quotite_cessible_disponible_general",value:_vm.getQuotiteCessible.quotite_cessible_disponible_general,readonly:""},on:{input:_vm.formDataVars}}),_vm._v(" "),_vm._m(48)],1)])])]):_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"relook-header",on:{click:function click($event){_vm.seen0_4=!_vm.seen0_4;}}},[_c("h6",{attrs:{id:"bref-rappel-des-relations-du-client-avec-la-nsia-banque-ci"}},[_vm._v("\n                                           Calcul de la quotité\n                                           "),_c("chevron-down-icon",{staticClass:"custom-class",staticStyle:{"float":"right",cursor:"pointer"},attrs:{size:"21"}})],1)])])]:_vm._e(),_vm._v(" "),_vm.seen0_6?_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"relook-header",on:{click:function click($event){_vm.seen0_6=!_vm.seen0_6;}}},[_c("h6",{"class":" subdiv"+this.tb_name,attrs:{id:"bref-rappel-des-relations-du-client-avec-la-nsia-banque-ci"}},[_vm._v("\n                                       Taux d'endettement\n                                       "),_c("chevron-up-icon",{staticClass:"custom-class",staticStyle:{"float":"right",cursor:"pointer"},attrs:{size:"21"}})],1)]),_vm._v(" "),_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"table-responsive"},[_c("table",{staticClass:"table table-stripped table-bordered m-0"},[_c("tbody",{staticStyle:{"font-size":"16px"}},_vm._l(Object.keys(_vm.taux_endettement),function(key){var _vm$taux_endettement$,_vm$taux_endettement$2,_vm$taux_endettement$3,_vm$taux_endettement$4,_vm$taux_endettement$6;return _c("tr",{key:"".concat(key,"-taux-endettement")},[_c("td",{staticClass:"bg-beige","class":{"fw-bold":(_vm$taux_endettement$=_vm.taux_endettement[key])===null||_vm$taux_endettement$===void 0?void 0:_vm$taux_endettement$.bold},staticStyle:{width:"50%"}},[_vm._v("\n                                                       "+_vm._s((_vm$taux_endettement$2=_vm.taux_endettement[key])===null||_vm$taux_endettement$2===void 0?void 0:_vm$taux_endettement$2.label)+" "),_c("span",{staticClass:"fw-bold"},[_vm._v(_vm._s((_vm$taux_endettement$3=_vm.taux_endettement[key])===null||_vm$taux_endettement$3===void 0?void 0:_vm$taux_endettement$3.formule))])]),_vm._v(" "),(_vm$taux_endettement$4=_vm.taux_endettement[key])!==null&&_vm$taux_endettement$4!==void 0&&_vm$taux_endettement$4.percentage?_c("td",[_c("div",{staticClass:"d-flex position-relative align-items-center"},[_c("input-group",{scopedSlots:_vm._u([{key:"input",fn:function fn(){var _vm$taux_endettement$5;return[_c("currency-input",{attrs:{"default-typing":false,"float":"",percentage:"",value:(_vm$taux_endettement$5=_vm.taux_endettement[key])===null||_vm$taux_endettement$5===void 0?void 0:_vm$taux_endettement$5.value,id:key,readonly:""},on:{input:_vm.formDataVarsTE}})];},proxy:true},{key:"right",fn:function fn(){return[_vm._v("%")];},proxy:true}],null,true)})],1)]):_c("td",[_c("currency-input2",{attrs:{value:(_vm$taux_endettement$6=_vm.taux_endettement[key])===null||_vm$taux_endettement$6===void 0?void 0:_vm$taux_endettement$6.value,id:key,readonly:""},on:{input:_vm.formDataVarsTE}})],1)]);}),0)])])])]):_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"relook-header",on:{click:function click($event){_vm.seen0_6=!_vm.seen0_6;}}},[_c("h6",{attrs:{id:"bref-rappel-des-relations-du-client-avec-la-nsia-banque-ci"}},[_vm._v("\n                                       Taux d'endettement\n                                       "),_c("chevron-down-icon",{staticClass:"custom-class",staticStyle:{"float":"right",cursor:"pointer"},attrs:{size:"21"}})],1)])]),_vm._v(" "),_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row p-0"},[_c("div",{staticClass:"col-12 position-relative"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"table-responsive"},[_c("div",{staticClass:"col-md-12 mb-4"},[_vm._m(49),_vm._v(" "),_c("vue-editor",{attrs:{maximum:1000,id:"avis_apres_analyse"},on:{"update-value":function updateValue($event){_vm.formDataToBeWatched[$event[0]]=$event[1];}},model:{value:_vm.formDataToBeWatched.observations,callback:function callback($$v){_vm.$set(_vm.formDataToBeWatched,"observations",$$v);},expression:"formDataToBeWatched.observations"}})],1)])])])])])],2),_vm._v(" "),_c("div",{staticClass:"mb-5"}),_vm._v(" "),_c("button",{staticClass:"btn shadow-md text-white position-absolute",staticStyle:{cursor:"pointer",right:"16px",bottom:"10px",background:"#2c3e50","max-width":"max-content"},attrs:{type:"button",name:"button"},on:{click:function click($event){return _vm.retract();}}},[_vm._v("\n                           Fermer le tableau\n                       ")])])])]):_c("div",{staticClass:"card card-width-height"},[_c("br"),_vm._v(" "),_c("div",{staticClass:"card-header hdc pb-0 pt-2"},[_c("h6",{staticClass:"head",attrs:{id:"dcp-ppo1-head"}},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col"},[_vm._v("\n                               "+_vm._s(_vm.tb_display_name)+" : Concours/Facilités\n                           ")]),_vm._v(" "),_c("div",{staticClass:"col-auto"},[((_vm$formDataToBeWatch2=_vm.formDataToBeWatched.notes)===null||_vm$formDataToBeWatch2===void 0?void 0:_vm$formDataToBeWatch2.length)>0?_c("div",{staticStyle:{display:"inline-block",position:"relative"}},[_c("span",{attrs:{type:"button"},on:{click:function click($event){return _vm.openNotesModal(true);}}},[_c("i",{staticClass:"icofont icofont-comment text-white px-2",staticStyle:{"font-size":"12px"},attrs:{role:"button"}}),_vm._v(" "),_c("span",{staticClass:"badge-sm"},[_c("span",[_vm._v(" "+_vm._s(_vm.formDataToBeWatched.notes.length))])])])]):_vm._e(),_vm._v(" "),_c("airplay-icon",{staticClass:"custom-class mt-1",staticStyle:{cursor:"pointer",margin:"0 5px"},attrs:{size:"0.7x",title:"exemple"},on:{click:function click($event){return _vm.$modal.show("demande_de_pret");}}}),_vm._v(" "),_c("chevron-down-icon",{staticClass:"custom-class",staticStyle:{cursor:"pointer"},attrs:{size:"21"},on:{click:function click($event){return _vm.retract();}}})],1)])])])])],1),_vm._v(" "),_c("modal",{attrs:{name:"demande_de_pret",width:500,resizable:"",height:"300"}},[_c("div",{staticClass:"image1"})]),_vm._v(" "),_c("note-modal",{attrs:{name:_vm.tb_name,listingNote:_vm.listingNote,notes:_vm.formDataToBeWatched.notes},on:{close:function close($event){return _vm.$modal.hide(_vm.tb_name);},addNote:function addNote($event){return _vm.formDataToBeWatched.notes.unshift($event);}},model:{value:_vm.formDataToBeWatched.notes,callback:function callback($$v){_vm.$set(_vm.formDataToBeWatched,"notes",$$v);},expression:"formDataToBeWatched.notes"}}),_vm._v(" "),_c("modal",{attrs:{name:"show-simulation-concours",width:1000,resizable:"",height:"auto",scrollable:true}},[_c("div",{staticClass:"modal-content"},[_c("div",{staticClass:"memo",style:{"background-color":_vm.entityColor}},[_c("div",{staticClass:"container-fluid"},[_c("div",{staticClass:"d-flex justify-content-between align-items-center text-white"},[_c("div",[_vm._v("SIMULATEUR DE CREDIT")]),_vm._v(" "),_c("div",[_c("div",{staticClass:"d-flex justify-content-between align-items-center"},[_c("i",{staticClass:"icofont-close",attrs:{role:"button"},on:{click:_vm.closeModal}})])])])])]),_vm._v(" "),_c("div",{staticClass:"container pt-5 pb-4"},[_c("SimulateurDeCredit",{staticStyle:{"max-height":"80vh",overflow:"auto"},attrs:{"all-tamor":true,"can-import":_vm.canInportSimulation,"can-create-new-simulation":true,"view-only":_vm.viewOnly,"show-history":false,"default-edit-mode":false,"default-simulation-id":(_vm$data_tamor=_vm.data_tamor)===null||_vm$data_tamor===void 0?void 0:_vm$data_tamor.sim_pub_key,"can-select-facility":true,facilities:_vm.propositions_concours,"default-facility":_vm.defaultFacility,"default-simulation":_vm.defaultSimulation,"modal-name":"show-simulation-concours"},on:{close:_vm.closeModal}})],1)])])],1);};var staticRenderFns=[function(){var _vm=this,_c=_vm._self._c;return _c("div",{staticClass:"d-flex justify-content-center text-center align-items-center text-muted py-4"},[_c("div",[_c("span",{staticClass:"spinner-border spinner-border"}),_vm._v(" "),_c("h5",[_vm._v("\n                                       Chargement des données en cours ... "),_c("br"),_vm._v("\n                                       Ceci peut prendre un peu de temps\n                                   ")])])]);},function(){var _vm=this,_c=_vm._self._c;return _c("td",{staticClass:"th fw-bold",staticStyle:{"align-content":"center","min-width":"250px"}},[_vm._v("Filiale"),_c("span",{staticClass:"text-danger"})]);},function(){var _vm=this,_c=_vm._self._c;return _c("td",{staticClass:"th fw-bold",staticStyle:{"align-content":"center","min-width":"150px"}},[_vm._v("Nature du concours"),_c("span",{staticClass:"text-danger"})]);},function(){var _vm=this,_c=_vm._self._c;return _c("td",{staticClass:"th fw-bold",staticStyle:{"align-content":"center","min-width":"150px"}},[_vm._v("Code du crédit"),_c("span",{staticClass:"text-danger"})]);},function(){var _vm=this,_c=_vm._self._c;return _c("td",{staticClass:"th fw-bold",staticStyle:{"align-content":"center","min-width":"150px"}},[_vm._v("Code de prêt flexcube"),_c("span",{staticClass:"text-danger"})]);},function(){var _vm=this,_c=_vm._self._c;return _c("td",{staticClass:"th fw-bold",staticStyle:{"align-content":"center","min-width":"150px"}},[_vm._v("Mt crédit"),_c("span",{staticClass:"text-danger"})]);},function(){var _vm=this,_c=_vm._self._c;return _c("td",{staticClass:"th fw-bold",staticStyle:{"align-content":"center","min-width":"150px"}},[_vm._v("Durée (Mois)"),_c("span",{staticClass:"text-danger"})]);},function(){var _vm=this,_c=_vm._self._c;return _c("td",{staticClass:"th fw-bold",staticStyle:{"align-content":"center","min-width":"150px"}},[_vm._v("Taux"),_c("span",{staticClass:"text-danger"})]);},function(){var _vm=this,_c=_vm._self._c;return _c("td",{staticClass:"th fw-bold",staticStyle:{"align-content":"center","min-width":"220px"}},[_vm._v("Echéancier"),_c("span",{staticClass:"text-danger"})]);},function(){var _vm=this,_c=_vm._self._c;return _c("td",{staticClass:"th fw-bold",staticStyle:{"align-content":"center","min-width":"150px"}},[_vm._v("Mt de l’échéance"),_c("span",{staticClass:"text-danger"})]);},function(){var _vm=this,_c=_vm._self._c;return _c("td",{staticClass:"th fw-bold",staticStyle:{"align-content":"center","min-width":"150px"}},[_vm._v("Encours "),_c("span",{staticClass:"text-danger"})]);},function(){var _vm=this,_c=_vm._self._c;return _c("td",{staticClass:"th fw-bold",staticStyle:{"align-content":"center","min-width":"220px"}},[_vm._v("Impayé"),_c("span",{staticClass:"text-danger"})]);},function(){var _vm=this,_c=_vm._self._c;return _c("td",{staticClass:"th fw-bold",staticStyle:{"align-content":"center","min-width":"200px"}},[_vm._v("Date échéance"),_c("span",{staticClass:"text-danger"})]);},function(){var _vm=this,_c=_vm._self._c;return _c("thead",[_c("tr",[_c("td",{staticClass:"th fw-bold",staticStyle:{"align-content":"center","font-style":"italic"}},[_vm._v("Simulation")]),_vm._v(" "),_c("td",{staticClass:"th fw-bold",staticStyle:{"align-content":"center","min-width":"250px"}},[_vm._v("Filiale"),_c("span",{staticClass:"text-danger"},[_vm._v("*")])]),_vm._v(" "),_c("td",{staticClass:"th fw-bold",staticStyle:{"align-content":"center","min-width":"250px"}},[_vm._v("Type de crédit"),_c("span",{staticClass:"text-danger"},[_vm._v("*")])]),_vm._v(" "),_c("td",{staticClass:"th fw-bold",staticStyle:{"align-content":"center","min-width":"150px"}},[_vm._v("Nature du concours")]),_vm._v(" "),_c("td",{staticClass:"th fw-bold",staticStyle:{"align-content":"center","min-width":"150px"}},[_vm._v("Code produit")]),_vm._v(" "),_c("td",{staticClass:"th fw-bold",staticStyle:{"align-content":"center","min-width":"150px"}},[_vm._v("Descr. produit")]),_vm._v(" "),_c("td",{staticClass:"th fw-bold",staticStyle:{"align-content":"center","min-width":"150px"}},[_vm._v("Mt demandé"),_c("span",{staticClass:"text-danger"},[_vm._v("*")])]),_vm._v(" "),_c("td",{staticClass:"th fw-bold",staticStyle:{"align-content":"center","min-width":"150px"}},[_vm._v("Mt crédit"),_c("span",{staticClass:"text-danger"},[_vm._v("*")])]),_vm._v(" "),_c("td",{staticClass:"th fw-bold",staticStyle:{"align-content":"center","min-width":"150px"}},[_vm._v("Durée (Mois)"),_c("span",{staticClass:"text-danger"},[_vm._v("*")])]),_vm._v(" "),_c("td",{staticClass:"th fw-bold",staticStyle:{"align-content":"center","min-width":"150px"}},[_vm._v("Taux"),_c("span",{staticClass:"text-danger"},[_vm._v("*")])]),_vm._v(" "),_c("td",{staticClass:"th fw-bold",staticStyle:{"align-content":"center","min-width":"220px"}},[_vm._v("Echéancier"),_c("span",{staticClass:"text-danger"},[_vm._v("*")])]),_vm._v(" "),_c("td",{staticClass:"th fw-bold",staticStyle:{"align-content":"center","min-width":"150px"}},[_vm._v("Mt de l’échéance "),_c("span",{staticClass:"text-danger"},[_vm._v("*")])]),_vm._v(" "),_c("td",{staticClass:"th fw-bold",staticStyle:{"align-content":"center","min-width":"200px"}},[_vm._v("Date 1 "),_c("sup",[_vm._v("ère")]),_vm._v(" échéance "),_c("span",{staticClass:"text-danger"},[_vm._v("*")])]),_vm._v(" "),_c("td",{staticClass:"th fw-bold",staticStyle:{"align-content":"center","min-width":"280px"}},[_vm._v("Différé")]),_vm._v(" "),_c("td",{staticClass:"th fw-bold",staticStyle:{"align-content":"center","min-width":"280px"}},[_vm._v("Nbre de Différé")]),_vm._v(" "),_c("td",{staticClass:"th fw-bold",staticStyle:{"align-content":"center","min-width":"280px"}},[_vm._v("Commentaire")])])]);},function(){var _vm=this,_c=_vm._self._c;return _c("thead",[_c("tr",[_c("td",{staticClass:"th fw-bold",staticStyle:{"align-content":"center","font-style":"italic"}},[_vm._v("Simulation")]),_vm._v(" "),_c("td",{staticClass:"th fw-bold",staticStyle:{"align-content":"center","min-width":"250px"}},[_vm._v("Filiale"),_c("span",{staticClass:"text-danger"})]),_vm._v(" "),_c("td",{staticClass:"th fw-bold",staticStyle:{"align-content":"center","min-width":"250px"}},[_vm._v("Type de crédit"),_c("span",{staticClass:"text-danger"})]),_vm._v(" "),_c("td",{staticClass:"th fw-bold",staticStyle:{"align-content":"center","min-width":"150px"}},[_vm._v("Nature du concours")]),_vm._v(" "),_c("td",{staticClass:"th fw-bold",staticStyle:{"align-content":"center","min-width":"150px"}},[_vm._v("Code produit")]),_vm._v(" "),_c("td",{staticClass:"th fw-bold",staticStyle:{"align-content":"center","min-width":"150px"}},[_vm._v("Descr. produit")]),_vm._v(" "),_c("td",{staticClass:"th fw-bold text-nowrap",staticStyle:{"align-content":"center","min-width":"150px"}},[_vm._v("Mt demandé (Client)"),_c("span",{staticClass:"text-danger"})]),_vm._v(" "),_c("td",{staticClass:"th fw-bold text-nowrap",staticStyle:{"align-content":"center","min-width":"150px"}},[_vm._v("Mt crédit (Exploitation)"),_c("span",{staticClass:"text-danger"})]),_vm._v(" "),_c("td",{staticClass:"th fw-bold",staticStyle:{"align-content":"center","min-width":"150px"}},[_vm._v("Durée (Mois)"),_c("span",{staticClass:"text-danger"})]),_vm._v(" "),_c("td",{staticClass:"th fw-bold",staticStyle:{"align-content":"center","min-width":"150px"}},[_vm._v("Taux"),_c("span",{staticClass:"text-danger"})]),_vm._v(" "),_c("td",{staticClass:"th fw-bold",staticStyle:{"align-content":"center","min-width":"220px"}},[_vm._v("Echéancier"),_c("span",{staticClass:"text-danger"})]),_vm._v(" "),_c("td",{staticClass:"th fw-bold",staticStyle:{"align-content":"center","min-width":"150px"}},[_vm._v("Mt de l’échéance "),_c("span",{staticClass:"text-danger"})]),_vm._v(" "),_c("td",{staticClass:"th fw-bold",staticStyle:{"align-content":"center","min-width":"200px"}},[_vm._v("Date 1ère échéance "),_c("span",{staticClass:"text-danger"})]),_vm._v(" "),_c("td",{staticClass:"th fw-bold",staticStyle:{"align-content":"center","min-width":"200px"}},[_vm._v("Rachat ? "),_c("span",{staticClass:"text-danger"})]),_vm._v(" "),_c("td",{staticClass:"th fw-bold",staticStyle:{"align-content":"center","min-width":"200px"}},[_vm._v("Type de rachat "),_c("span",{staticClass:"text-danger"})]),_vm._v(" "),_c("td",{staticClass:"th fw-bold",staticStyle:{"align-content":"center","min-width":"200px"}},[_vm._v("N° prêt à racheter "),_c("span",{staticClass:"text-danger"})]),_vm._v(" "),_c("td",{staticClass:"th fw-bold",staticStyle:{"align-content":"center","min-width":"200px"}},[_vm._v("Montant du rachat "),_c("span",{staticClass:"text-danger"})]),_vm._v(" "),_c("td",{staticClass:"th fw-bold",staticStyle:{"align-content":"center","min-width":"280px"}},[_vm._v("Commentaire")])])]);},function(){var _vm=this,_c=_vm._self._c;return _c("thead",[_c("tr",[_c("td",{staticClass:"th fw-bold",staticStyle:{"align-content":"center","font-style":"italic"}},[_vm._v("Simulation")]),_vm._v(" "),_c("td",{staticClass:"th fw-bold",staticStyle:{"align-content":"center","min-width":"250px"}},[_vm._v("Filiale"),_c("span",{staticClass:"text-danger"},[_vm._v("*")])]),_vm._v(" "),_c("td",{staticClass:"th fw-bold",staticStyle:{"align-content":"center","min-width":"250px"}},[_vm._v("Type de crédit"),_c("span",{staticClass:"text-danger"},[_vm._v("*")])]),_vm._v(" "),_c("td",{staticClass:"th fw-bold",staticStyle:{"align-content":"center","min-width":"150px"}},[_vm._v("Nature du concours")]),_vm._v(" "),_c("td",{staticClass:"th fw-bold",staticStyle:{"align-content":"center","min-width":"150px"}},[_vm._v("Code produit")]),_vm._v(" "),_c("td",{staticClass:"th fw-bold",staticStyle:{"align-content":"center","min-width":"150px"}},[_vm._v("Descr. produit")]),_vm._v(" "),_c("td",{staticClass:"th fw-bold",staticStyle:{"align-content":"center","min-width":"150px"}},[_vm._v("Mt demandé"),_c("span",{staticClass:"text-danger"},[_vm._v("*")])]),_vm._v(" "),_c("td",{staticClass:"th fw-bold",staticStyle:{"align-content":"center","min-width":"150px"}},[_vm._v("Mt crédit"),_c("span",{staticClass:"text-danger"},[_vm._v("*")])]),_vm._v(" "),_c("td",{staticClass:"th fw-bold",staticStyle:{"align-content":"center","min-width":"150px"}},[_vm._v("Durée (Mois)"),_c("span",{staticClass:"text-danger"},[_vm._v("*")])]),_vm._v(" "),_c("td",{staticClass:"th fw-bold",staticStyle:{"align-content":"center","min-width":"150px"}},[_vm._v("Taux"),_c("span",{staticClass:"text-danger"},[_vm._v("*")])]),_vm._v(" "),_c("td",{staticClass:"th fw-bold",staticStyle:{"align-content":"center","min-width":"220px"}},[_vm._v("Echéancier"),_c("span",{staticClass:"text-danger"},[_vm._v("*")])]),_vm._v(" "),_c("td",{staticClass:"th fw-bold",staticStyle:{"align-content":"center","min-width":"150px"}},[_vm._v("Mt de l’échéance "),_c("span",{staticClass:"text-danger"},[_vm._v("*")])]),_vm._v(" "),_c("td",{staticClass:"th fw-bold",staticStyle:{"align-content":"center","min-width":"200px"}},[_vm._v("Date 1 "),_c("sup",[_vm._v("ère")]),_vm._v(" échéance "),_c("span",{staticClass:"text-danger"},[_vm._v("*")])]),_vm._v(" "),_c("td",{staticClass:"th fw-bold",staticStyle:{"align-content":"center","min-width":"280px"}},[_vm._v("Différé")]),_vm._v(" "),_c("td",{staticClass:"th fw-bold",staticStyle:{"align-content":"center","min-width":"280px"}},[_vm._v("Nbre de Différé")]),_vm._v(" "),_c("td",{staticClass:"th fw-bold",staticStyle:{"align-content":"center","min-width":"280px"}},[_vm._v("Commentaire")])])]);},function(){var _vm=this,_c=_vm._self._c;return _c("td",{staticClass:"th fw-bold",staticStyle:{"align-content":"center","min-width":"250px"}},[_vm._v("Filiale"),_c("span",{staticClass:"text-danger"})]);},function(){var _vm=this,_c=_vm._self._c;return _c("td",{staticClass:"th fw-bold",staticStyle:{"align-content":"center","min-width":"250px"}},[_vm._v("Type de crédit"),_c("span",{staticClass:"text-danger"})]);},function(){var _vm=this,_c=_vm._self._c;return _c("td",{staticClass:"th fw-bold text-nowrap",staticStyle:{"align-content":"center","min-width":"150px"}},[_vm._v("Mt demandé (Exploitation)"),_c("span",{staticClass:"text-danger"})]);},function(){var _vm=this,_c=_vm._self._c;return _c("td",{staticClass:"th fw-bold text-nowrap",staticStyle:{"align-content":"center","min-width":"150px"}},[_vm._v("Mt crédit (Analyste)"),_c("span",{staticClass:"text-danger"})]);},function(){var _vm=this,_c=_vm._self._c;return _c("td",{staticClass:"th fw-bold",staticStyle:{"align-content":"center","min-width":"150px"}},[_vm._v("Durée (Mois)"),_c("span",{staticClass:"text-danger"})]);},function(){var _vm=this,_c=_vm._self._c;return _c("td",{staticClass:"th fw-bold",staticStyle:{"align-content":"center","min-width":"150px"}},[_vm._v("Taux"),_c("span",{staticClass:"text-danger"})]);},function(){var _vm=this,_c=_vm._self._c;return _c("td",{staticClass:"th fw-bold",staticStyle:{"align-content":"center","min-width":"220px"}},[_vm._v("Echéancier"),_c("span",{staticClass:"text-danger"})]);},function(){var _vm=this,_c=_vm._self._c;return _c("td",{staticClass:"th fw-bold",staticStyle:{"align-content":"center","min-width":"150px"}},[_vm._v("Mt de l’échéance "),_c("span",{staticClass:"text-danger"})]);},function(){var _vm=this,_c=_vm._self._c;return _c("td",{staticClass:"th fw-bold",staticStyle:{"align-content":"center","min-width":"200px"}},[_vm._v("Date 1ère échéance "),_c("span",{staticClass:"text-danger"})]);},function(){var _vm=this,_c=_vm._self._c;return _c("td",{staticClass:"th fw-bold",staticStyle:{"align-content":"center","min-width":"200px"}},[_vm._v("Rachat ? "),_c("span",{staticClass:"text-danger"})]);},function(){var _vm=this,_c=_vm._self._c;return _c("td",{staticClass:"th fw-bold",staticStyle:{"align-content":"center","min-width":"200px"}},[_vm._v("Type de rachat "),_c("span",{staticClass:"text-danger"})]);},function(){var _vm=this,_c=_vm._self._c;return _c("td",{staticClass:"th fw-bold",staticStyle:{"align-content":"center","min-width":"200px"}},[_vm._v("N° prêt à racheter "),_c("span",{staticClass:"text-danger"})]);},function(){var _vm=this,_c=_vm._self._c;return _c("td",{staticClass:"th fw-bold",staticStyle:{"align-content":"center","min-width":"200px"}},[_vm._v("Montant du rachat "),_c("span",{staticClass:"text-danger"})]);},function(){var _vm=this,_c=_vm._self._c;return _c("thead",[_c("tr",[_c("td",{staticClass:"th fw-bold",staticStyle:{"align-content":"center","min-width":"150px"}},[_vm._v("Nom de la facilité")]),_vm._v(" "),_c("td",{staticClass:"th fw-bold",staticStyle:{"align-content":"center","min-width":"150px"}},[_vm._v("Frais dossier HT"),_c("span",{staticClass:"text-danger"},[_vm._v("*")])]),_vm._v(" "),_c("td",{staticClass:"th fw-bold",staticStyle:{"align-content":"center","min-width":"150px"}},[_vm._v("Mt TVA sur frais de dossier")]),_vm._v(" "),_c("td",{staticClass:"th fw-bold",staticStyle:{"align-content":"center","min-width":"150px"}},[_vm._v("Mt de l'assurance TTC"),_c("span",{staticClass:"text-danger"},[_vm._v("*")])]),_vm._v(" "),_c("td",{staticClass:"th fw-bold",staticStyle:{"align-content":"center","min-width":"150px"}},[_vm._v("TEG"),_c("span",{staticClass:"text-danger"},[_vm._v("*")])]),_vm._v(" "),_c("td",{staticClass:"th fw-bold",staticStyle:{"align-content":"center","min-width":"150px"}},[_vm._v("Taux périodique"),_c("span",{staticClass:"text-danger"},[_vm._v("*")])]),_vm._v(" "),_c("td",{staticClass:"th fw-bold",staticStyle:{"align-content":"center","min-width":"150px"}},[_vm._v("Taux d'usure"),_c("span",{staticClass:"text-danger"},[_vm._v("*")])])])]);},function(){var _vm=this,_c=_vm._self._c;return _c("thead",[_c("tr",[_c("td",{staticClass:"th fw-bold",staticStyle:{"align-content":"center","min-width":"150px"}},[_vm._v("Nom de la facilité")]),_vm._v(" "),_c("td",{staticClass:"th fw-bold",staticStyle:{"align-content":"center","min-width":"150px"}},[_vm._v("Frais dossier HT"),_c("span",{staticClass:"text-danger"})]),_vm._v(" "),_c("td",{staticClass:"th fw-bold text-nowrap",staticStyle:{"align-content":"center","min-width":"150px"}},[_vm._v("Mt TVA sur frais de dossier")]),_vm._v(" "),_c("td",{staticClass:"th fw-bold",staticStyle:{"align-content":"center","min-width":"150px"}},[_vm._v("Mt de l'assurance TTC"),_c("span",{staticClass:"text-danger"})]),_vm._v(" "),_c("td",{staticClass:"th fw-bold",staticStyle:{"align-content":"center","min-width":"150px"}},[_vm._v("TEG"),_c("span",{staticClass:"text-danger"})]),_vm._v(" "),_c("td",{staticClass:"th fw-bold",staticStyle:{"align-content":"center","min-width":"150px"}},[_vm._v("Frais chèque certifié"),_c("span",{staticClass:"text-danger"})]),_vm._v(" "),_c("td",{staticClass:"th fw-bold",staticStyle:{"align-content":"center","min-width":"150px"}},[_vm._v("Frais huissier"),_c("span",{staticClass:"text-danger"})]),_vm._v(" "),_c("td",{staticClass:"th fw-bold",staticStyle:{"align-content":"center","min-width":"150px"}},[_vm._v("% Cash coll"),_c("span",{staticClass:"text-danger"})]),_vm._v(" "),_c("td",{staticClass:"th fw-bold",staticStyle:{"align-content":"center","min-width":"150px"}},[_vm._v("Mt Cash coll")]),_vm._v(" "),_c("td",{staticClass:"th fw-bold",staticStyle:{"align-content":"center","min-width":"150px"}},[_vm._v("Nº Compte Cash Coll")]),_vm._v(" "),_c("td",{staticClass:"th fw-bold",staticStyle:{"align-content":"center","min-width":"150px"}},[_vm._v("Taux périodique")]),_vm._v(" "),_c("td",{staticClass:"th fw-bold",staticStyle:{"align-content":"center","min-width":"150px"}},[_vm._v("Taux d'usure")])])]);},function(){var _vm=this,_c=_vm._self._c;return _c("label",{attrs:{"for":"revenu_total_colonne_emprunteur"}},[_vm._v("\n                                               Revenu Global "),_c("b",[_vm._v("(A)")])]);},function(){var _vm=this,_c=_vm._self._c;return _c("span",{staticStyle:{"font-size":"11px"}},[_vm._v("\n\n                                                   ∑"),_c("sub",[_vm._v("RC")]),_vm._v(" = SN  "),_c("sub",[_vm._v("(Salaire Net)")]),_vm._v(" + PR "),_c("sub",[_vm._v("(Prime)")]),_vm._v(" + AR "),_c("sub",[_vm._v("(Autre révenu)")])]);},function(){var _vm=this,_c=_vm._self._c;return _c("label",{attrs:{"for":"revenu_total_colonne_montant_pondere"}},[_vm._v("\n                                               Revenu considéré "),_c("b",[_vm._v("(H)")])]);},function(){var _vm=this,_c=_vm._self._c;return _c("span",{staticStyle:{"font-size":"11px"}},[_vm._v("\n                                               ∑"),_c("sub",[_vm._v("RP")]),_vm._v(" = %SN  "),_c("sub",[_vm._v("(Salaire Net)")]),_vm._v(" + %PR "),_c("sub",[_vm._v("(Prime)")]),_vm._v(" + %AR "),_c("sub",[_vm._v("(Autre révenu)")])]);},function(){var _vm=this,_c=_vm._self._c;return _c("label",{attrs:{"for":"quotite_cessible"}},[_vm._v("Montant quotité cessible "),_c("b",[_vm._v("(B)")])]);},function(){var _vm=this,_c=_vm._self._c;return _c("span",{staticStyle:{"font-size":"11px"}},[_vm._v("\n\n                                               B = ∑ "),_c("sub",[_vm._v("%SN + %PR + %AR")])]);},function(){var _vm=this,_c=_vm._self._c;return _c("label",{attrs:{"for":"pourcentage_quotite"}},[_vm._v("% Quotité "),_c("b",[_vm._v("(C)")])]);},function(){var _vm=this,_c=_vm._self._c;return _c("span",{staticStyle:{"font-size":"11px"}},[_vm._v("\n\n                                               C = B "),_c("sub",[_vm._v("( Mt Quotité Céssible)")]),_vm._v(" / H"),_c("sub",[_vm._v("( Revenu considéré) ")])]);},function(){var _vm=this,_c=_vm._self._c;return _c("label",{attrs:{"for":"quotite_cessible_disponible"}},[_vm._v("Montant quotité disponible "),_c("b",[_vm._v("(D)")])]);},function(){var _vm=this,_c=_vm._self._c;return _c("span",{staticStyle:{"font-size":"11px"}},[_vm._v("\n\n                                               D = B - ∑"),_c("sub",[_vm._v("Ms "),_c("sub",[_vm._v("(Mensualités des facilité sollicitées)")])])]);},function(){var _vm=this,_c=_vm._self._c;return _c("div",{staticClass:"invalid-feedback fw-bold",attrs:{id:"quotite_cessible_disponibleFeedback"}},[_c("small",[_vm._v("Attention la quotité disponible est négatif.")])]);},function(){var _vm=this,_c=_vm._self._c;return _c("label",{attrs:{"for":"pourcentage_quotite_general"}},[_vm._v("% Quotité légal "),_c("b",[_vm._v("(E)")])]);},function(){var _vm=this,_c=_vm._self._c;return _c("span",{staticStyle:{"font-size":"11px"}},[_c("span",[_c("br")])]);},function(){var _vm=this,_c=_vm._self._c;return _c("label",{attrs:{"for":"quotite_cessible_general"}},[_vm._v("Montant quotité cessible légal "),_c("b",[_vm._v("(F)")])]);},function(){var _vm=this,_c=_vm._self._c;return _c("span",{staticStyle:{"font-size":"11px"}},[_vm._v("\n\n                                               F = ∑ "),_c("sub",[_vm._v("%SN + %PR + %AR")])]);},function(){var _vm=this,_c=_vm._self._c;return _c("label",{attrs:{"for":"quotite_cessible_disponible_general"}},[_vm._v("Montant quotité disponible légal "),_c("b",[_vm._v("(G)")])]);},function(){var _vm=this,_c=_vm._self._c;return _c("span",{staticStyle:{"font-size":"11px"}},[_vm._v("\n\n                                               G = F - ∑"),_c("sub",[_vm._v("Ms "),_c("sub",[_vm._v("(Mensualités des facilité sollicitées)")])])]);},function(){var _vm=this,_c=_vm._self._c;return _c("div",{staticClass:"invalid-feedback fw-bold",attrs:{id:"quotite_cessible_disponible_generalFeedback"}},[_c("small",[_vm._v("Attention la quotité disponible est négatif.")])]);},function(){var _vm=this,_c=_vm._self._c;return _c("label",{attrs:{"for":"avis_apres_analyse"}},[_c("b",[_vm._v("Commentaire")])]);}];render._withStripped=true;

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

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/contre_etude/CA-CE1.vue?vue&type=style&index=0&id=2af8da5a&lang=css&scoped=true":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/contre_etude/CA-CE1.vue?vue&type=style&index=0&id=2af8da5a&lang=css&scoped=true ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n*[data-v-2af8da5a] {\r\n    font-family: \"Google sans\";\n}\nlabel[data-v-2af8da5a] {\r\n    height: 10px;\r\n    font-size: 13px;\n}\ninput[data-v-2af8da5a],\r\nselect[data-v-2af8da5a] {\r\n    /* height: 35px; */\r\n    border-color: #34495e;\r\n    color: #57606f;\r\n    font-size: 13px;\r\n    font-weight: bold;\n}\n.th[data-v-2af8da5a] {\r\n    padding: 4px;\r\n    padding-bottom: 0px;\n}\n.card-width-height[data-v-2af8da5a] {\r\n    width: 100%;\r\n    height: 100%;\n}\n.head[data-v-2af8da5a] {\r\n    color: #f1f2f6;\r\n    font-size: 22px;\n}\n.hdc[data-v-2af8da5a] {\r\n    background-color: #57606f;\n}\n.relook-header[data-v-2af8da5a] {\r\n    color: #000;\r\n    background-color: #f4f3f3;\r\n    padding: 5px;\r\n    border-bottom: 1px solid #b6b8bb;\n}\n.badge-sm[data-v-2af8da5a] {\r\n    display: inline-block;\r\n    width: 15px;\r\n    height: 15px;\r\n    background: rgba(255, 0, 0, 0.882);\r\n    color: white;\r\n    font-size: 12px;\r\n    font-weight: 500;\r\n    border-radius: 100%;\r\n    position: absolute;\r\n    top: -20%;\r\n    left: 55%;\r\n    text-align: center;\n}\n.imageM22[data-v-2af8da5a] {\r\n    background: url(\"/images/capture_cofina/exemple_source_revenus.png\") no-repeat;\r\n    background-position: center;\r\n    background-size: contain;\r\n    width: 1000px;\r\n    height: 200px;\n}\ntd[data-v-2af8da5a],\r\np[data-v-2af8da5a] {\r\n    font-size: 13px;\n}\n.relook-header[data-v-2af8da5a] {\r\n    color: #000;\r\n    background-color: #f4f3f3;\r\n    padding: 5px;\r\n    border-bottom: 1px solid #b6b8bb;\n}\n.width-100[data-v-2af8da5a] {\r\n    width: 90%;\n}\n.personne input[data-v-2af8da5a] {\r\n    width: 135px;\n}\n._border_right[data-v-2af8da5a] {\r\n    border-right: 1px solid;\n}\n.spinner-custom-input[data-v-2af8da5a] {\r\n    --bs-spinner-width: 1rem;\r\n    --bs-spinner-height: 1rem;\r\n    --bs-spinner-border-width: 0.15em;\r\n    border: var(--bs-spinner-border-width) solid #ee6a00;\r\n    border-right-color: transparent;\r\n    position: absolute;\r\n    right: 13px;\n}\ninput[type=\"checkbox\"][data-v-2af8da5a] {\r\n    height: 18px;\r\n    width: 20px;\r\n    margin-right: 5px;\n}\n.image1[data-v-2af8da5a] {\r\n    background: url(\"/images/capture_nsia/exemples/demande_de_pret.png\") no-repeat;\r\n    background-position: center;\r\n    background-size: contain;\r\n\r\n    width: 500px;\r\n    height: 300px;\n}\n.bg-blue[data-v-2af8da5a] {\r\n    background-color: #00ffff21 !important;\n}\r\n\r\n", ""]);
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

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/contre_etude/CA-CE1.vue?vue&type=style&index=0&id=2af8da5a&lang=css&scoped=true":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/contre_etude/CA-CE1.vue?vue&type=style&index=0&id=2af8da5a&lang=css&scoped=true ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CA_CE1_vue_vue_type_style_index_0_id_2af8da5a_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CA-CE1.vue?vue&type=style&index=0&id=2af8da5a&lang=css&scoped=true */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/contre_etude/CA-CE1.vue?vue&type=style&index=0&id=2af8da5a&lang=css&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CA_CE1_vue_vue_type_style_index_0_id_2af8da5a_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CA_CE1_vue_vue_type_style_index_0_id_2af8da5a_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

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

/***/ "./resources/js/components/forms/afg/contre_etude/CA-CE1.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/components/forms/afg/contre_etude/CA-CE1.vue ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CA_CE1_vue_vue_type_template_id_2af8da5a_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CA-CE1.vue?vue&type=template&id=2af8da5a&scoped=true */ "./resources/js/components/forms/afg/contre_etude/CA-CE1.vue?vue&type=template&id=2af8da5a&scoped=true");
/* harmony import */ var _CA_CE1_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CA-CE1.vue?vue&type=script&lang=js */ "./resources/js/components/forms/afg/contre_etude/CA-CE1.vue?vue&type=script&lang=js");
/* harmony import */ var _CA_CE1_vue_vue_type_style_index_0_id_2af8da5a_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CA-CE1.vue?vue&type=style&index=0&id=2af8da5a&lang=css&scoped=true */ "./resources/js/components/forms/afg/contre_etude/CA-CE1.vue?vue&type=style&index=0&id=2af8da5a&lang=css&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _CA_CE1_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _CA_CE1_vue_vue_type_template_id_2af8da5a_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _CA_CE1_vue_vue_type_template_id_2af8da5a_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "2af8da5a",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/forms/afg/contre_etude/CA-CE1.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/forms/afg/contre_etude/CA-CE1.vue?vue&type=script&lang=js":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/forms/afg/contre_etude/CA-CE1.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CA_CE1_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CA-CE1.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/contre_etude/CA-CE1.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CA_CE1_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/forms/afg/contre_etude/CA-CE1.vue?vue&type=style&index=0&id=2af8da5a&lang=css&scoped=true":
/*!***************************************************************************************************************************!*\
  !*** ./resources/js/components/forms/afg/contre_etude/CA-CE1.vue?vue&type=style&index=0&id=2af8da5a&lang=css&scoped=true ***!
  \***************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CA_CE1_vue_vue_type_style_index_0_id_2af8da5a_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CA-CE1.vue?vue&type=style&index=0&id=2af8da5a&lang=css&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/contre_etude/CA-CE1.vue?vue&type=style&index=0&id=2af8da5a&lang=css&scoped=true");


/***/ }),

/***/ "./resources/js/components/forms/afg/contre_etude/CA-CE1.vue?vue&type=template&id=2af8da5a&scoped=true":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/components/forms/afg/contre_etude/CA-CE1.vue?vue&type=template&id=2af8da5a&scoped=true ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CA_CE1_vue_vue_type_template_id_2af8da5a_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CA_CE1_vue_vue_type_template_id_2af8da5a_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CA_CE1_vue_vue_type_template_id_2af8da5a_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CA-CE1.vue?vue&type=template&id=2af8da5a&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/contre_etude/CA-CE1.vue?vue&type=template&id=2af8da5a&scoped=true");


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