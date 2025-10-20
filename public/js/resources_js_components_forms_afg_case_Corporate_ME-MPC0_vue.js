"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_forms_afg_case_Corporate_ME-MPC0_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/case/Corporate/ME-MPC0.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/case/Corporate/ME-MPC0.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
/* harmony import */ var _helpers_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../helpers/helper */ "./resources/js/helpers/helper.js");
/* harmony import */ var _services_credit_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../services/credit.service */ "./resources/js/services/credit.service.js");
/* harmony import */ var _services_ebapis_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../services/ebapis.service */ "./resources/js/services/ebapis.service.js");
/* harmony import */ var _services_afg_atomic_sequence_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../services/afg/atomic-sequence.service */ "./resources/js/services/afg/atomic-sequence.service.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
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
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return r; }; var t, r = {}, e = Object.prototype, n = e.hasOwnProperty, o = "function" == typeof Symbol ? Symbol : {}, i = o.iterator || "@@iterator", a = o.asyncIterator || "@@asyncIterator", u = o.toStringTag || "@@toStringTag"; function c(t, r, e, n) { Object.defineProperty(t, r, { value: e, enumerable: !n, configurable: !n, writable: !n }); } try { c({}, ""); } catch (t) { c = function c(t, r, e) { return t[r] = e; }; } function h(r, e, n, o) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype); return c(a, "_invoke", function (r, e, n) { var o = 1; return function (i, a) { if (3 === o) throw Error("Generator is already running"); if (4 === o) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var u = n.delegate; if (u) { var c = d(u, n); if (c) { if (c === f) continue; return c; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (1 === o) throw o = 4, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = 3; var h = s(r, e, n); if ("normal" === h.type) { if (o = n.done ? 4 : 2, h.arg === f) continue; return { value: h.arg, done: n.done }; } "throw" === h.type && (o = 4, n.method = "throw", n.arg = h.arg); } }; }(r, n, new Context(o || [])), !0), a; } function s(t, r, e) { try { return { type: "normal", arg: t.call(r, e) }; } catch (t) { return { type: "throw", arg: t }; } } r.wrap = h; var f = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var l = {}; c(l, i, function () { return this; }); var p = Object.getPrototypeOf, y = p && p(p(x([]))); y && y !== e && n.call(y, i) && (l = y); var v = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(l); function g(t) { ["next", "throw", "return"].forEach(function (r) { c(t, r, function (t) { return this._invoke(r, t); }); }); } function AsyncIterator(t, r) { function e(o, i, a, u) { var c = s(t[o], t, i); if ("throw" !== c.type) { var h = c.arg, f = h.value; return f && "object" == _typeof(f) && n.call(f, "__await") ? r.resolve(f.__await).then(function (t) { e("next", t, a, u); }, function (t) { e("throw", t, a, u); }) : r.resolve(f).then(function (t) { h.value = t, a(h); }, function (t) { return e("throw", t, a, u); }); } u(c.arg); } var o; c(this, "_invoke", function (t, n) { function i() { return new r(function (r, o) { e(t, n, r, o); }); } return o = o ? o.then(i, i) : i(); }, !0); } function d(r, e) { var n = e.method, o = r.i[n]; if (o === t) return e.delegate = null, "throw" === n && r.i["return"] && (e.method = "return", e.arg = t, d(r, e), "throw" === e.method) || "return" !== n && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + n + "' method")), f; var i = s(o, r.i, e.arg); if ("throw" === i.type) return e.method = "throw", e.arg = i.arg, e.delegate = null, f; var a = i.arg; return a ? a.done ? (e[r.r] = a.value, e.next = r.n, "return" !== e.method && (e.method = "next", e.arg = t), e.delegate = null, f) : a : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f); } function w(t) { this.tryEntries.push(t); } function m(r) { var e = r[4] || {}; e.type = "normal", e.arg = t, r[4] = e; } function Context(t) { this.tryEntries = [[-1]], t.forEach(w, this), this.reset(!0); } function x(r) { if (null != r) { var e = r[i]; if (e) return e.call(r); if ("function" == typeof r.next) return r; if (!isNaN(r.length)) { var o = -1, a = function e() { for (; ++o < r.length;) if (n.call(r, o)) return e.value = r[o], e.done = !1, e; return e.value = t, e.done = !0, e; }; return a.next = a; } } throw new TypeError(_typeof(r) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, c(v, "constructor", GeneratorFunctionPrototype), c(GeneratorFunctionPrototype, "constructor", GeneratorFunction), c(GeneratorFunctionPrototype, u, GeneratorFunction.displayName = "GeneratorFunction"), r.isGeneratorFunction = function (t) { var r = "function" == typeof t && t.constructor; return !!r && (r === GeneratorFunction || "GeneratorFunction" === (r.displayName || r.name)); }, r.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, c(t, u, "GeneratorFunction")), t.prototype = Object.create(v), t; }, r.awrap = function (t) { return { __await: t }; }, g(AsyncIterator.prototype), c(AsyncIterator.prototype, a, function () { return this; }), r.AsyncIterator = AsyncIterator, r.async = function (t, e, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(h(t, e, n, o), i); return r.isGeneratorFunction(e) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, g(v), c(v, u, "Generator"), c(v, i, function () { return this; }), c(v, "toString", function () { return "[object Generator]"; }), r.keys = function (t) { var r = Object(t), e = []; for (var n in r) e.unshift(n); return function t() { for (; e.length;) if ((n = e.pop()) in r) return t.value = n, t.done = !1, t; return t.done = !0, t; }; }, r.values = x, Context.prototype = { constructor: Context, reset: function reset(r) { if (this.prev = this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(m), !r) for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0][4]; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(r) { if (this.done) throw r; var e = this; function n(t) { a.type = "throw", a.arg = r, e.next = t; } for (var o = e.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i[4], u = this.prev, c = i[1], h = i[2]; if (-1 === i[0]) return n("end"), !1; if (!c && !h) throw Error("try statement without catch or finally"); if (null != i[0] && i[0] <= u) { if (u < c) return this.method = "next", this.arg = t, n(c), !0; if (u < h) return n(h), !1; } } }, abrupt: function abrupt(t, r) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var n = this.tryEntries[e]; if (n[0] > -1 && n[0] <= this.prev && this.prev < n[2]) { var o = n; break; } } o && ("break" === t || "continue" === t) && o[0] <= r && r <= o[2] && (o = null); var i = o ? o[4] : {}; return i.type = t, i.arg = r, o ? (this.method = "next", this.next = o[2], f) : this.complete(i); }, complete: function complete(t, r) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), f; }, finish: function finish(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[2] === t) return this.complete(e[4], e[3]), m(e), f; } }, "catch": function _catch(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[0] === t) { var n = e[4]; if ("throw" === n.type) { var o = n.arg; m(e); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(r, e, n) { return this.delegate = { i: x(r), r: e, n: n }, "next" === this.method && (this.arg = t), f; } }, r; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _objectDestructuringEmpty(t) { if (null == t) throw new TypeError("Cannot destructure " + t); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }







var ACCENT_BG = '#00ffff21 !important';
var DATE_ACCENT_BG = "background: ".concat(ACCENT_BG, ";");
var EVENTS = {
  TB_UPDATED: 'tb-updated',
  ACTIVE_MEMO_UPDATED: 'active-memo-updated'
};
var MAP_ECHEANCEMENT = {
  A: 'annuelle',
  M: 'mensuelle',
  T: 'trimestrielle',
  S: 'semestrielle',
  annuelle: 'A',
  mensuelle: 'M',
  trimestrielle: 'T',
  semestrielle: 'S'
};
var DEVISE = {
  'AFGML': 'XOF',
  'AFGCM': 'XAF'
};
var RACHAT_FIELD_KEYS = ["rachat_externe", "banque_rachat_externe", "montant_ttc_rachat", "n_compte_pret", "principal_rachat", "interet_rachat", "tva_rachat", "penalite_rbsmt_anticipe", "penalite_retard", "ecart_rachat", 'type_rbsmt', 'type_rbsmt_autre', 'commentaire'];
var TYPE_COLLATERALS = [{
  value: "CPS",
  label: "CPS"
}, {
  value: "BAO",
  label: "BAO"
}, {
  value: "CESSION_CREANCE",
  label: "Cession Créance"
}];
var localState = vue__WEBPACK_IMPORTED_MODULE_5__["default"].observable({
  agenceOptions: [{
    value: '',
    label: 'Sélectionner un numéro d\'agence'
  }],
  headers: [{
    key: "date_jour",
    label: "Date Jour",
    type: "date",
    "default": function _default() {
      return new Date().toISOString().split("T")[0];
    }
  }, {
    key: "n",
    label: "Nº",
    type: "text",
    "default": function _default() {
      return 1;
    },
    disabled: true,
    readonly: true
  }, {
    key: "racine_client",
    label: "Racine Client",
    type: "text",
    disabled: true,
    readonly: true,
    "default": function _default(_ref) {
      var _dc$caf_recorded_file;
      var dc = _ref.dc;
      return (dc === null || dc === void 0 || (_dc$caf_recorded_file = dc.caf_recorded_file) === null || _dc$caf_recorded_file === void 0 ? void 0 : _dc$caf_recorded_file.matcli) || "";
    }
  }, {
    key: "nom_client",
    label: "Nom du Client",
    type: "text",
    disabled: true,
    readonly: true,
    "default": function _default(_ref2) {
      var _dc$client_core_banki;
      var dc = _ref2.dc,
        ctx = _ref2.ctx;
      return (ctx === null || ctx === void 0 ? void 0 : ctx.nom_client) || (dc === null || dc === void 0 || (_dc$client_core_banki = dc.client_core_banking) === null || _dc$client_core_banki === void 0 ? void 0 : _dc$client_core_banki.name) || "";
    }
  }, {
    key: "n_agence",
    label: "Nº Agence",
    type: "select",
    inputClass: {
      accentuate: true
    },
    options: [{
      value: '',
      label: 'Sélectionner un numéro d\'agence'
    }],
    "default": function _default(_ref3) {
      var _dc$client_core_banki2;
      var dc = _ref3.dc;
      this.options = localState.agenceOptions;
      var value = (dc === null || dc === void 0 || (_dc$client_core_banki2 = dc.client_core_banking) === null || _dc$client_core_banki2 === void 0 || (_dc$client_core_banki2 = _dc$client_core_banki2.agence_info) === null || _dc$client_core_banki2 === void 0 || (_dc$client_core_banki2 = _dc$client_core_banki2.agenceDomiciliation) === null || _dc$client_core_banki2 === void 0 ? void 0 : _dc$client_core_banki2.numeros) || '';
      var notExist = this.options.every(function (option) {
        return option.value !== value;
      });
      if (notExist && value) {
        this.options.push({
          value: value,
          label: value
        });
      }
      return value;
    },
    onChange: function onChange(value, row, context) {
      var agence = context.agences.find(function (a) {
        return a.numeros === value;
      });
      row.intitule_agence = agence ? agence.agence : '';
    }
  }, {
    key: "intitule_agence",
    label: "Intitulé Agence du Client",
    type: "text",
    disabled: true,
    readonly: true,
    "default": function _default(_ref4) {
      var _dc$client_core_banki3;
      var dc = _ref4.dc;
      return (dc === null || dc === void 0 || (_dc$client_core_banki3 = dc.client_core_banking) === null || _dc$client_core_banki3 === void 0 || (_dc$client_core_banki3 = _dc$client_core_banki3.agence_info) === null || _dc$client_core_banki3 === void 0 || (_dc$client_core_banki3 = _dc$client_core_banki3.agenceDomiciliation) === null || _dc$client_core_banki3 === void 0 ? void 0 : _dc$client_core_banki3.agence) || '';
    }
  }, {
    key: "gestionnaire_compte",
    label: "Gestionnaire de Compte Ayant Monté le Dossier",
    type: "text",
    disabled: true,
    readonly: true,
    "default": function _default(_ref5) {
      var dc = _ref5.dc;
      return (dc === null || dc === void 0 ? void 0 : dc.monteur_doss) || "";
    }
  }, {
    key: "montant_pret",
    label: "Montant Prêt",
    type: "currency",
    inputClass: {
      accentuate: true
    },
    "default": function _default(_ref6) {
      var dc = _ref6.dc,
        c = _ref6.c,
        ctx = _ref6.ctx;
      return getMontantLigne(dc, ctx === null || ctx === void 0 ? void 0 : ctx.index) || "";
    },
    onChange: function onChange(value, row, context) {
      row.collaterals.forEach(function (collateral) {
        collateral.montant_credit = value;
      });
      value = moneyToNumber(value);
      var tauxCashColl = moneyToNumber(row.taux_fond_garantie || 0);
      row.montant_fond_garantie = value * tauxCashColl / 100;
    }
  }, {
    key: "nbre_ech",
    label: "Nombre Échéances",
    type: "number",
    inputClass: {
      accentuate: true
    },
    "default": function _default(_ref7) {
      var c = _ref7.c;
      this.label = "Nombre Échéances";
      var duree = parseInt(String((c === null || c === void 0 ? void 0 : c.duree) || "0").trim());
      var echeance = MAP_ECHEANCEMENT[String((c === null || c === void 0 ? void 0 : c.echeancier) || "").trim().toLowerCase()];
      switch (echeance) {
        case "A":
          duree = duree / 12;
          this.label += " (Années)";
          break;
        case "T":
          duree = duree / 3;
          this.label += " (Trimestres)";
          break;
        case "S":
          duree = duree / 6;
          this.label += " (Semestres)";
          break;
        case "M":
        default:
          duree = duree;
          this.label += " (Mois)";
          break;
      }
      return duree;
    },
    onChange: function onChange(value, row, context) {
      value = parseInt(String(value || '0').trim());
      row.nbre_ech = value;
      var datePremiereEcheance = new Date(row.date_premiere_echeance);
      row.date_derniere_echeance = computeDateDerniereEcheance(datePremiereEcheance, value, row.periodicite || 'M');
    }
  }, {
    key: "date_deblocage",
    label: "Date Déblocage",
    type: "date",
    background: DATE_ACCENT_BG,
    "default": function _default(_ref8) {
      var dc = _ref8.dc;
      return new Date().toISOString().split('T')[0];
    },
    onChange: function onChange(value, row, context) {
      if (typeof value !== 'string' || !value.trim()) return;
      var date = new Date(value);
      var day = date.getDate();

      // If the day is 15 or later, set the date to the 24th of the next month else set it to the 24th of the current month
      if (day >= 15) {
        date.setMonth(date.getMonth() + 1);
      }
      date.setDate(24);
      row.date_premiere_echeance = date.toISOString().split('T')[0];
      row.date_derniere_echeance = computeDateDerniereEcheance(date, row.nbre_ech, row.periodicite || 'M');
    }
  }, {
    key: "date_premiere_echeance",
    label: "Date Première Échéance",
    type: "date",
    background: DATE_ACCENT_BG,
    "default": function _default(_ref9) {
      var c = _ref9.c;
      // if (!c?.echeance) return "";

      // const derniereEcheance = new Date(c?.echeance);

      // if (!derniereEcheance.getTime()) return "";

      // const duree = parseInt(String(c?.duree || "0").trim());

      // if (!duree) return "";

      // derniereEcheance.setMonth(derniereEcheance.getMonth() - duree + 1);

      // return derniereEcheance.toISOString().split("T")[0];

      var today = new Date();
      if (today.getDate() >= 15) {
        today.setMonth(today.getMonth() + 1);
        today.setDate(24);
      } else {
        today.setDate(24);
      }
      return today.toISOString().split('T')[0];
    },
    onChange: function onChange(value, row, context) {
      var duree = Math.max(parseInt(String((row === null || row === void 0 ? void 0 : row.nbre_ech) || '0').trim()), 0);
      var datePremiereEcheance = new Date(value);
      var echeance = MAP_ECHEANCEMENT[String((row === null || row === void 0 ? void 0 : row.echeancier) || '').trim().toLowerCase()] || 'M';
      row.date_derniere_echeance = computeDateDerniereEcheance(datePremiereEcheance, duree, echeance);
    }
  }, {
    key: "date_derniere_echeance",
    label: "Date Dernière Échéance",
    type: "date",
    // disabled: true,
    background: DATE_ACCENT_BG,
    "default": function _default(_ref0) {
      var c = _ref0.c;
      // =+EDATE(M2;J2-1)

      // if (!c?.echeance) return "";

      // const derniereEcheance = new Date(c?.echeance);

      // if (!derniereEcheance.getTime()) return "";

      // return derniereEcheance.toISOString().split("T")[0];
      var duree = parseInt(String((c === null || c === void 0 ? void 0 : c.duree) || "0").trim());
      var today = new Date();
      var datePremiereEcheance = today.getDate() >= 15 ? new Date(today.setMonth(today.getMonth() + 1, 24)) : new Date(today.setDate(24));
      return computeDateDerniereEcheance(datePremiereEcheance, duree, "M");
    }
  }, {
    key: "compte_a_vue",
    label: "Compte à Vue Client",
    type: "select",
    inputClass: {
      accentuate: true
    },
    options: [],
    "default": function _default(_ref1) {
      var _ctx$dynamicTbs;
      var dc = _ref1.dc,
        ctx = _ref1.ctx;
      var credPubTb00Key = (ctx === null || ctx === void 0 || (_ctx$dynamicTbs = ctx.dynamicTbs) === null || _ctx$dynamicTbs === void 0 ? void 0 : _ctx$dynamicTbs.tbIdentification) || "";
      var credPubTb00 = credPubTb00Key ? (dc === null || dc === void 0 ? void 0 : dc[credPubTb00Key]) || {} : {};
      var depositAccount = (credPubTb00 === null || credPubTb00 === void 0 ? void 0 : credPubTb00.compte_courant) || "";
      this.options = [{
        value: "",
        label: "Sélectionner un compte à vue"
      }];
      if (depositAccount) {
        this.options.push({
          value: depositAccount,
          label: depositAccount
        });
      }
      this.options.push({
        value: 'autre',
        label: 'Autre'
      });
      return depositAccount || "";
    }
  }, {
    key: 'compte_a_vue_autre',
    label: 'Autre Compte à Vue Client',
    type: 'text',
    specialInput: true
  }, {
    key: "taux_interet",
    label: "Taux d'Intérêt (%)",
    type: 'percentage',
    inputClass: {
      accentuate: true
    },
    "default": function _default(_ref10) {
      var c = _ref10.c;
      return c !== null && c !== void 0 && c.taux ? moneyToNumber(c.taux) || "" : "";
    },
    onChange: function onChange(value, row, context) {
      var _row$udes;
      if (_typeof(row === null || row === void 0 || (_row$udes = row.udes) === null || _row$udes === void 0 ? void 0 : _row$udes.INTEREST_RATE) !== 'object') {
        row.udes.INTEREST_RATE = {
          commission_hors_livre: false,
          is_default: true,
          label: 'Taux d\'Intérêt (%)',
          numero_compte_commission: "",
          value: 0
        };
      }
      row.udes.INTEREST_RATE.value = value;
    }
  }, {
    key: "frais_dossier",
    label: "Frais de Dossier HT",
    type: "currency",
    onChange: function onChange(value, row, context) {
      var _row$udes2;
      if (_typeof(row === null || row === void 0 || (_row$udes2 = row.udes) === null || _row$udes2 === void 0 ? void 0 : _row$udes2.FR_DOS_AMT_1) !== 'object') {
        row.udes.FR_DOS_AMT_1 = {
          commission_hors_livre: false,
          is_default: true,
          label: 'Frais Dossier Fixe',
          numero_compte_commission: "",
          value: 0
        };
      }
      row.udes.FR_DOS_AMT_1.value = value;
      var tva = moneyToNumber((context === null || context === void 0 ? void 0 : context.tva_user) || 19.25);
      row.frais_dossier_ttc = computeTtcFromHtAndTva(value, tva);
    }
  }, {
    key: 'frais_dossier_ttc',
    label: 'Frais de Dossier TTC',
    type: 'currency',
    inputClass: {
      accentuate: true
    }
  }, {
    key: "taux_rbsmt_anticipe",
    label: "Taux de Remboursement Anticipé (%)",
    type: 'percentage',
    onChange: function onChange(value, row, context) {
      var _row$udes3;
      if (_typeof(row === null || row === void 0 || (_row$udes3 = row.udes) === null || _row$udes3 === void 0 ? void 0 : _row$udes3.FR_REM_ANT_1) !== 'object') {
        row.udes.FR_REM_ANT_1 = {
          commission_hors_livre: false,
          is_default: true,
          label: "Frais Remb. Anticipé (%)",
          numero_compte_commission: "",
          value: 0
        };
      }
      row.udes.FR_REM_ANT_1.value = value;
    }
  }, {
    key: 'n_assurance',
    label: 'Nº Assurance',
    type: 'text'
  }, {
    key: "frais_prorogation_echeance",
    label: "Frais de Prorogation d'Échéance",
    type: "currency"
  }, {
    key: "debiteur_final",
    label: "Debiteur Final",
    type: "text"
  }, {
    key: 'taux_fond_garantie',
    label: 'Taux CASH COLL (%)',
    type: 'percentage',
    // options: [
    //     { value: 3, label: '3%' },
    //     { value: 4, label: '4%' },
    //     { value: 5, label: '5%' },
    // ],
    inputClass: {
      accentuate: true
    },
    hidden: true,
    "default": function _default(_ref11) {
      var s = _ref11.s;
      return 0;
    },
    onChange: function onChange(value, row, context) {
      value = moneyToNumber(value);
      var montantPret = moneyToNumber(row.montant_pret || '0');
      row.montant_fond_garantie = value * montantPret / 100;
    }
  }, {
    key: 'montant_fond_garantie',
    label: 'Montant CASH COLL',
    type: 'currency',
    inputClass: {
      accentuate: true
    },
    hidden: true,
    "default": function _default(_ref12) {
      var s = _ref12.s,
        c = _ref12.c;
      return 0;
    },
    onChange: function onChange(value, row, context) {
      var _row$udes4;
      if (_typeof(row === null || row === void 0 || (_row$udes4 = row.udes) === null || _row$udes4 === void 0 ? void 0 : _row$udes4.MONTANT_RTEGARPRET) !== 'object') {
        row.udes.MONTANT_RTEGARPRET = {
          commission_hors_livre: false,
          is_default: true,
          label: 'Fonds de Garantie',
          numero_compte_commission: "",
          value: 0
        };
      }
      row.udes.MONTANT_RTEGARPRET.value = value;
    }
  }, {
    key: "taux_teg",
    label: "Taux TEG (%)",
    type: 'percentage'
  }, {
    key: "periodicite",
    label: "Périodicité",
    type: "select",
    options: [{
      value: "",
      label: "Sélectionner une périodicité"
    }, {
      value: "A",
      label: "A - Annuelle"
    }, {
      value: "M",
      label: "M - Mensuelle"
    }, {
      value: "T",
      label: "T - Trimestrielle"
    }, {
      value: "S",
      label: "S - Semestrielle"
    }, {
      value: "BULLET",
      label: "BULLET"
    }]
  }, {
    key: 'montant_assurance',
    label: 'Montant Assurance',
    type: 'currency',
    inputClass: {
      accentuate: true
    },
    "default": function _default(_ref13) {
      var c = _ref13.c,
        s = _ref13.s;
      var assurance = 0;
      return assurance;
    },
    onChange: function onChange(value, row, context) {
      var _row$udes5;
      if (_typeof(row === null || row === void 0 || (_row$udes5 = row.udes) === null || _row$udes5 === void 0 ? void 0 : _row$udes5.PRIM_ASSUR_1) !== 'object') {
        row.udes.PRIM_ASSUR_1 = {
          commission_hors_livre: false,
          is_default: true,
          label: 'Prime d\'Assurance',
          numero_compte_commission: "",
          value: 0
        };
      }
      row.udes.PRIM_ASSUR_1.value = value;
    }
  },
  // {
  //   key: "montant_ttc_rachat_interne_1",
  //   label: "Montant TTC Rachat Interne 1",
  //   type: "currency",
  // },
  // {
  //   key: "principal_rachat_1",
  //   label: "Principal Rachat 1",
  //   type: "currency",
  // },
  // {
  //   key: "interet_rachat_1",
  //   label: "Intérêt Rachat 1",
  //   type: "currency",
  //   inputClass: { accentuate: true },
  // },
  // {
  //   key: "tva_rachat_1",
  //   label: "TVA Rachat 1",
  //   type: "currency",
  // },
  // {
  //   key: "penalite_rbsmt_anticipe_r1",
  //   label: "Pénalité Rbsmt Anticipé R1",
  //   type: "currency",
  // },
  // {
  //   key: "penalite_retard_r1",
  //   label: "Pénalité Retard R1",
  //   type: "currency",
  // },
  // {
  //   key: "n_compte_pret_1",
  //   label: "N° Compte Prêt 1 ou Contrat du Rachat Interne 1",
  //   type: "text",
  // },
  // {
  //   key: "ecart_rachat_1",
  //   label: "Écart Rachat 1",
  //   type: "currency",
  // },
  // {
  //   key: "montant_ttc_rachat_interne_2",
  //   label: "Montant TTC Rachat Interne 2",
  //   type: "currency",
  // },
  // {
  //   key: "principal_rachat_2",
  //   label: "Principal Rachat 2",
  //   type: "currency",
  // },
  // {
  //   key: "interet_rachat_2",
  //   label: "Intérêt Rachat 2",
  //   type: "currency",
  // },
  // {
  //   key: "tva_rachat_2",
  //   label: "TVA Rachat 2",
  //   type: "currency",
  // },
  // {
  //   key: "penalite_rbsmt_anticipe_r2",
  //   label: "Pénalité Rbsmt Anticipé R2",
  //   type: "currency",
  // },
  // {
  //   key: "penalite_retard_r2",
  //   label: "Pénalité Retard R2",
  //   type: "currency",
  // },
  // {
  //   key: "n_compte_pret_2",
  //   label: "N° Compte Prêt 2 ou Contrat du Rachat Interne 2",
  //   type: "text",
  // },
  // {
  //   key: "ecart_rachat_2",
  //   label: "Écart Rachat 2",
  //   type: "currency",
  // },
  {
    key: "code_produit",
    label: "Code Produit",
    type: "select",
    hidden: true,
    onChange: function onChange(value, row, context) {
      var creditMapping = context.creditMapping || [];
      var collaterals = context.collaterals || [];
      var selectedCollateral = collaterals.find(function (c) {
        return c.PRODUCTCODE === value;
      });
      var inferValues = _inferProductValues(value, creditMapping);
      row.description_code_produit = (inferValues === null || inferValues === void 0 ? void 0 : inferValues.description_code_produit) || "";
      // row.type_decaissement = inferValues?.type_decaissement || "";
      // row.line_code_autorisation = selectedCollateral?.LINE_CODE_AUTORISATION || '';
      // row.class_code_autorisation = selectedCollateral?.CLASS_CODE_AUTORISATION || '';

      row.linked_ref_no = concatLinkedRefNo(row);
      row.collaterals.forEach(function (collateral) {
        collateral.line_code_autorisation = (selectedCollateral === null || selectedCollateral === void 0 ? void 0 : selectedCollateral.LINE_CODE_AUTORISATION) || '';
      });
    }
  }, {
    key: "description_code_produit",
    label: "Description Code Produit",
    type: "text",
    hidden: true
  }, {
    key: 'linked_ref_no',
    label: 'Linked Ref No',
    type: 'text',
    disabled: true,
    hidden: true
  }, {
    key: "line_code_autorisation",
    label: "Line Code Autorisation",
    type: "text",
    hidden: true
  }, {
    key: "class_code_autorisation",
    label: "Class Code Autorisation",
    type: "text",
    hidden: true
  }, {
    key: "pret_pour_salaire",
    label: "Prêt pour Salaire OUI/NON",
    type: "select",
    options: ["", "OUI", "NON"],
    hidden: true
  },
  // {
  //   key: "code_class_garantie_1_cps",
  //   label: "Code Class Garantie 1 CPS",
  //   type: "text",
  // },
  // {
  //   key: "code_collateral_1",
  //   label: "Code Collateral 1",
  //   type: "text",
  // },
  // {
  //   key: "montant_garantie_1",
  //   label: "Montant Garantie 1",
  //   type: "currency",
  // },
  // {
  //   key: "categorie_collateral_garantie_1_cps",
  //   label: "Catégorie Collateral Garantie 1 CPS",
  //   type: "text",
  // },
  // {
  //   key: "description_garantie_1_cps",
  //   label: "Description Garantie 1 CPS",
  //   type: "text",
  // },
  // {
  //   key: "code_class_garantie_2_bao",
  //   label: "Code Class Garantie 2 BAO",
  //   type: "text",
  // },
  // {
  //   key: "code_collateral_2",
  //   label: "Code Collateral 2",
  //   type: "text",
  // },
  // {
  //   key: "montant_garantie_2",
  //   label: "Montant Garantie 2",
  //   type: "currency",
  // },
  // {
  //   key: "categorie_collateral_garantie_2_bao",
  //   label: "Catégorie Collateral Garantie 2 BAO",
  //   type: "text",
  // },
  // {
  //   key: "description_garantie_2_bao",
  //   label: "Description Garantie 2 BAO",
  //   type: "text",
  // },
  // {
  //   key: "code_class_garantie_3_cession_creance",
  //   label: "Code Class Garantie 3 Cession Créance",
  //   type: "text",
  // },
  // {
  //   key: "code_collateral_3",
  //   label: "Code Collateral 3",
  //   type: "text",
  // },
  // {
  //   key: "montant_garantie_3",
  //   label: "Montant Garantie 3",
  //   type: "currency",
  // },
  // {
  //   key: "categorie_collateral_garantie_3_cession_creance",
  //   label: "Catégorie Collateral Garantie 3 Cession Créance",
  //   type: "text",
  // },
  // {
  //   key: "description_garantie_3_cession_creance",
  //   label: "Description Garantie 3 Cession Créance",
  //   type: "text",
  // },
  {
    key: 'jour_rbsmt',
    label: 'Jour de Rbsmt',
    type: 'number',
    inputClass: {
      accentuate: true
    },
    "default": function _default() {
      return 24;
    }
  }, {
    key: "date_premier_rbsmt",
    label: "Date 1er Rbsmt",
    type: "date",
    hidden: true
  }, {
    key: "date_dernier_rbsmt",
    label: "Date Dernier Rbsmt",
    type: "date",
    hidden: true
  }, {
    key: "date_accord_cic",
    label: "Date Accord CIC",
    type: "date",
    disabled: true,
    "default": function _default(_ref14) {
      var _finalOutcome$outcome;
      var dc = _ref14.dc;
      var finalOutcome = (dc === null || dc === void 0 ? void 0 : dc.final_outcome) || {};
      var outcomeDate = (finalOutcome === null || finalOutcome === void 0 || (_finalOutcome$outcome = finalOutcome.outcome_date) === null || _finalOutcome$outcome === void 0 ? void 0 : _finalOutcome$outcome.trim()) || "";
      if (!outcomeDate) return "";

      // Input: "30-06-2025 15:25:09" or "30-06-2025"
      // Output: "2025-06-30"
      var date = outcomeDate.split(" ")[0].split("-").reverse().join("-");
      return date;
    }
  },
  // {
  //   key: "commentaire_remboursement_anticipe_1",
  //   label: "Commentaire Remboursement Anticipé 1",
  //   type: "text",
  // },
  // {
  //   key: "commentaire_remboursement_anticipe_2",
  //   label: "Commentaire Remboursement Anticipé 2",
  //   type: "text",
  // },
  {
    key: "nature_credit",
    label: "Nature Crédit",
    type: "text",
    inputClass: {
      accentuate: true
    },
    "default": function _default(_ref15) {
      var c = _ref15.c;
      // return c?.type || "";
      // =+IF(J2>24;"CREDIT MOYEN TERME";"CREDIT COURT TERME")
      // =+IF(K2>24;"CREDIT MOYEN TERME";"CREDIT COURT TERME")
      // K2: nombre d'échéances
      var nbreEch = parseInt(String((c === null || c === void 0 ? void 0 : c.duree) || "0").trim());
      return nbreEch > 24 ? "CREDIT MOYEN TERME" : "CREDIT COURT TERME";
    }
  }, {
    key: "type_decaissement",
    label: "Type Décaissement",
    type: "select",
    options: [{
      value: "",
      label: "Sélectionner un type de décaissement"
    }, {
      value: "A",
      label: "A - AUTOMATIQUE"
    }, {
      value: "M",
      label: "M - MANUEL"
    }]
  }, {
    key: "differe",
    label: "Différé",
    type: "select",
    options: ["", "OUI", "NON"]
  }, {
    key: "nbre_differe",
    label: "Nombre Différé",
    type: "number"
  }, {
    key: "montant_premier_decaissement",
    label: "Montant Premier Décaissement",
    type: "currency",
    hidden: true
  }, {
    key: 'montant_decaissement',
    label: 'Montant du Décaissement',
    type: 'currency'
  }, {
    key: "code_groupe_pool_garantie",
    label: "Code Groupe Pool Garantie",
    type: "text"
  }, {
    key: 'description_pool_garantie',
    label: 'Description Pool Garantie',
    type: 'textarea'
  }, {
    key: 'libelle_frais_huissier',
    label: 'Libellé Frais Huissier',
    type: 'textarea',
    hidden: true
  }, {
    key: 'libelle_pret',
    label: 'Libellé du Prêt',
    type: 'textarea',
    hidden: true
  }, {
    key: 'divers',
    label: 'Divers',
    type: 'textarea',
    hidden: true
  }, {
    key: 'cantonnement_frais_huissier',
    label: 'Cantonnement Frais Huissier',
    type: 'textarea',
    hidden: true
  }, {
    key: "statut",
    label: "Statut",
    type: "text",
    hidden: true
  }],
  udeHeaders: [{
    key: 'AUTR_COMM_1',
    label: 'Autres Commissions',
    type: 'currency',
    percentage: false,
    inputClass: {
      accentuate: true
    },
    is_default: true,
    "default": 0,
    hidden: true
  }, {
    key: 'FRAIS_HUISSIER_1',
    label: 'Frais d\'Huissier',
    type: 'currency',
    percentage: false,
    disabled: true,
    is_default: true,
    "default": function _default(_ref16) {
      var ctx = _ref16.ctx;
      // return ctx?.row?.frais_huissier || 0;
      return 0;
    }
  }, {
    key: 'FR_DOS_1',
    label: 'Frais de Dossier (%)',
    type: 'percentage',
    percentage: true,
    disabled: true,
    inputClass: {
      accentuate: true
    },
    is_default: true,
    hidden: true,
    "default": function _default(_ref17) {
      _objectDestructuringEmpty(_ref17);
      return 0;
    }
  }, {
    key: 'FR_DOS_AMT_1',
    label: 'Frais Dossier Fixe',
    type: 'currency',
    percentage: false,
    inputClass: {
      accentuate: true
    },
    is_default: true,
    hidden: true,
    "default": function _default(_ref18) {
      var _ctx$row;
      var ctx = _ref18.ctx;
      return (ctx === null || ctx === void 0 || (_ctx$row = ctx.row) === null || _ctx$row === void 0 ? void 0 : _ctx$row.frais_dossier) || 0;
    }
  }, {
    key: 'FR_REM_ANT_1',
    label: 'Frais Remb. Anticipé (%)',
    type: 'percentage',
    percentage: true,
    disabled: true,
    is_default: true,
    "default": function _default(_ref19) {
      var ctx = _ref19.ctx;
      // return ctx?.row?.taux_rbsmt_anticipe || 0;
      return 2;
    }
  }, {
    key: 'FR_REP_ECH_1',
    label: 'Pénalité Échéance (%)',
    type: 'percentage',
    percentage: true,
    inputClass: {
      accentuate: true
    },
    is_default: true,
    hidden: true,
    "default": 1.5
  }, {
    key: 'IMP_ECHE_1',
    label: 'Taxe sur Échéance (%)',
    type: 'percentage',
    percentage: true,
    inputClass: {
      accentuate: true
    },
    is_default: true,
    hidden: true,
    "default": 1.5
  }, {
    key: 'IMP_ECHI_1',
    label: 'Taxe Initiale (%)',
    type: 'percentage',
    percentage: true,
    inputClass: {
      accentuate: true
    },
    is_default: true,
    hidden: true,
    "default": 1.5
  }, {
    key: 'INTEREST_RATE',
    label: 'Taux d\'Intérêt (%)',
    type: 'percentage',
    percentage: true,
    disabled: true,
    is_default: true,
    "default": function _default(_ref20) {
      var _ctx$row2;
      var ctx = _ref20.ctx;
      return (ctx === null || ctx === void 0 || (_ctx$row2 = ctx.row) === null || _ctx$row2 === void 0 ? void 0 : _ctx$row2.taux_interet) || 0;
    }
  }, {
    key: 'MONTANT_RTEGARPRET',
    label: 'Fonds de Garantie',
    type: 'currency',
    percentage: false,
    disabled: true,
    hidden: true,
    is_default: true,
    "default": function _default(_ref21) {
      var ctx = _ref21.ctx;
      // return ctx?.row?.montant_fond_garantie || 0;
      return 0;
    }
  }, {
    key: 'PRIM_ASSUR_1',
    label: 'Prime d\'Assurance',
    type: 'currency',
    percentage: false,
    disabled: true,
    is_default: true,
    "default": function _default(_ref22) {
      var _ctx$row3;
      var ctx = _ref22.ctx;
      return (ctx === null || ctx === void 0 || (_ctx$row3 = ctx.row) === null || _ctx$row3 === void 0 ? void 0 : _ctx$row3.montant_assurance) || 0;
    }
  }, {
    key: 'TVA_1',
    label: 'TVA (%)',
    type: 'percentage',
    percentage: true,
    inputClass: {
      accentuate: true
    },
    is_default: true,
    hidden: true,
    "default": 19.25
  }, {
    key: 'Z_INTRMDT_RATE',
    label: 'Commission Intermédiaire (%)',
    type: 'percentage',
    percentage: true,
    inputClass: {
      accentuate: true
    },
    is_default: true,
    hidden: true,
    "default": 0
  }]
});
window.$ = window.jQuery = __webpack_require__(/*! jquery/dist/jquery */ "./node_modules/jquery/dist/jquery.js");
function computeTtcFromHtAndTva(montantHT, tva) {
  if (typeof montantHT !== 'number' || montantHT < 0) return 0;
  if (typeof tva !== 'number' || tva < 0) return 0;

  // Montant TTC = Montant HT * (1 + TVA / 100)

  var montantTTC = montantHT * (1 + tva / 100);
  return Math.round(montantTTC * 100) / 100;
}
function computeDateDerniereEcheance(datePremiereEcheance, duree, echeance) {
  if (!(datePremiereEcheance instanceof Date) || isNaN(datePremiereEcheance)) return '';
  if (typeof duree !== 'number' || duree < 0) return '';
  var date = new Date(datePremiereEcheance);
  date.setMonth(date.getMonth() + duree - 1);
  return date.toISOString().split('T')[0];
}
function concatLinkedRefNo(row) {
  if (!row || !row.line_code_autorisation) return '';
  return "".concat(row.line_code_autorisation || '', "_").concat(row.numero_sequence || '').replace(/(^_+|_+$)/g, '').trim();
}
function moneyToNumber(str) {
  if (!str) return 0;
  var num = parseFloat(String(str).replace(/[^0-9.-]+/g, ''));
  return isNaN(num) ? 0 : num;
}
function numberToMoney(num) {
  if (num === null || num === undefined) return '';
  var str = String(moneyToNumber(num));
  return str.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}
function _getNomCps(tbs, cUUID) {
  if (!Array.isArray(tbs) || tbs.length === 0 || !cUUID) return '';
  var garanties = tbs.reduce(function (acc, tb) {
    return acc.concat((tb === null || tb === void 0 ? void 0 : tb.garanties) || []);
  }, []);
  var caution = garanties.find(function (g) {
    var _g$id;
    return ((_g$id = g.id) === null || _g$id === void 0 ? void 0 : _g$id.toLowerCase()) === 'caution';
  }) || {};
  var infosCaution = (caution === null || caution === void 0 ? void 0 : caution.infos) || [];
  var rowInfo = infosCaution.find(function (info) {
    return info.ligneCredit === cUUID;
  }) || {};
  var nomCps = "".concat((rowInfo === null || rowInfo === void 0 ? void 0 : rowInfo.lastname) || '', " ").concat((rowInfo === null || rowInfo === void 0 ? void 0 : rowInfo.firstname) || '').trim();
  return nomCps || '';
}
function getMontantLigne(dossierCredit, ligneIndex) {
  var _lastBankDetails$lign, _lignes$ligneIndex;
  if (!dossierCredit) return 0;
  if (typeof ligneIndex !== 'number' || ligneIndex < 0) return 0;
  var caractInterPretBank = (dossierCredit === null || dossierCredit === void 0 ? void 0 : dossierCredit.caract_inter_pret_bank) || '';
  if (!Array.isArray(caractInterPretBank) || caractInterPretBank.length === 0) return '';
  var lastIndex = caractInterPretBank.length - 1;
  var lastBankDetails = caractInterPretBank[lastIndex];
  if (!(lastBankDetails !== null && lastBankDetails !== void 0 && (_lastBankDetails$lign = lastBankDetails.lignes) !== null && _lastBankDetails$lign !== void 0 && _lastBankDetails$lign.lignes_par_caisse)) return '';
  var ligneParCaisse = lastBankDetails.lignes.lignes_par_caisse || [];
  var ligneSignees = lastBankDetails.lignes.engagement_signatures || [];
  var lignes = ligneParCaisse.concat(ligneSignees).filter(function (l) {
    return (l === null || l === void 0 ? void 0 : l.ligne) && (l === null || l === void 0 ? void 0 : l.montant_ligne);
  });
  var montantLigne = (_lignes$ligneIndex = lignes[ligneIndex]) === null || _lignes$ligneIndex === void 0 ? void 0 : _lignes$ligneIndex.montant_ligne;
  var montantPret = moneyToNumber(montantLigne) || '';
  return montantPret;
}
function _inferProductValues(codeProduit) {
  var creditMapping = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  if (typeof codeProduit !== 'string' || !codeProduit) return {};
  if (!Array.isArray(creditMapping) || creditMapping.length === 0) return {};
  var credit = creditMapping.find(function (c) {
    return c.PRODUCT_CODE === codeProduit;
  });
  if (!credit) return {};
  return {
    type_decaissement: credit.DISBURSEMENT_MODE || '',
    description_code_produit: credit.PRODUCT_DESC || ''
  };
}
function _inferCollateralValues(codeProduit) {
  var collaterals = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  if (typeof codeProduit !== 'string' || !codeProduit) return {};
  if (!Array.isArray(collaterals) || collaterals.length === 0) return {};
  var collateral = collaterals.find(function (c) {
    return c.PRODUCTCODE === codeProduit;
  });
  if (!collateral) return {};
  return {
    // code_collateral: collateral.PRODUCT_DESC || '',
    description_code_produit: collateral.PRODUCT_DESC || '',
    line_code_autorisation: collateral.LINE_CODE_AUTORISATION || '',
    class_code_autorisation: collateral.CLASS_CODE_AUTORISATION || '',
    // pret_pour_salaire: collateral.PRODUCT_DESC || '',
    categorie_collateral: collateral.PRODUCT_CATEGORY || ''
    // code_class_garantie: collateral.PRODUCT_CATEGORY || '',
  };
}
function _inferCollateralTypeValues(classCode) {
  var collateralTypes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  if (typeof classCode !== 'string' || !classCode) return {};
  if (!Array.isArray(collateralTypes) || collateralTypes.length === 0) return {};
  var collateralType = collateralTypes.find(function (c) {
    return c.class_code === classCode;
  });
  if (!collateralType) return {};
  return {
    class_code: collateralType.class_code || "",
    categorie_collateral: collateralType.collateral_categorie || "",
    description_collateral_categorie: collateralType.description_collateral_categorie || ""
  };
}
function createRachatSet() {
  var concour = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return {
    rachat_externe: "NON",
    banque_rachat_externe: "",
    principal_rachat: "",
    interet_rachat: "",
    tva_rachat: "",
    penalite_rbsmt_anticipe: "",
    penalite_retard: "",
    montant_ttc_rachat: "",
    n_compte_pret: "",
    ecart_rachat: "",
    type_rbsmt: "total",
    type_rbsmt_autre: "",
    commentaire: ""
  };
}
function createCollateralSet() {
  var _ctx$row4, _concour$infos_fcub, _ctx$row5;
  var concour = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var dossierCredit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var ctx = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var codeProduit = (ctx === null || ctx === void 0 || (_ctx$row4 = ctx.row) === null || _ctx$row4 === void 0 ? void 0 : _ctx$row4.code_produit) || (concour === null || concour === void 0 || (_concour$infos_fcub = concour.infos_fcub) === null || _concour$infos_fcub === void 0 ? void 0 : _concour$infos_fcub.PRODUCT_CODE) || "";
  var collateralValues = codeProduit ? _inferCollateralValues(codeProduit, (ctx === null || ctx === void 0 ? void 0 : ctx.collaterals) || []) : {};
  var montantCredit = moneyToNumber((ctx === null || ctx === void 0 || (_ctx$row5 = ctx.row) === null || _ctx$row5 === void 0 ? void 0 : _ctx$row5.montant_pret) || 0);
  var tvaUser = moneyToNumber((ctx === null || ctx === void 0 ? void 0 : ctx.tva_user) || 19.25);
  var fraisHT = 15000;
  var tvaGarantie = Math.round(tvaUser * fraisHT / 100);
  return {
    code_collateral: "",
    class_code: "",
    description_collateral_categorie: "",
    nom_cps: "",
    categorie_collateral: "",
    line_code_autorisation: (collateralValues === null || collateralValues === void 0 ? void 0 : collateralValues.line_code_autorisation) || "",
    numero_sequence: "",
    montant_garantie: 0,
    montant_credit: montantCredit,
    frais_ht: fraisHT,
    tva_garantie: tvaGarantie,
    commentaire_rbsmt_anticipe: ""
  };
}
function createCantonnementPair() {
  return {
    libelle_debit: "",
    compte_debit: "",
    libelle_credit: "",
    compte_credit: "",
    montant: "",
    reference_debit: "",
    reference_credit: ""
  };
}
function createSecuriteDocumentation() {
  var concour = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var dossierCredit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return {
    libelle: '',
    formulation: '',
    checked: false,
    data: {},
    isDefault: false
  };
}
function otherUdeCounter(row) {
  if (!row) return 0;
  var udes = (row === null || row === void 0 ? void 0 : row.udes) || {};
  var others = Object.keys(udes).filter(function (key) {
    return key.startsWith('AUTR_COMM_');
  }).map(function (key) {
    return parseInt(key.split('_')[2], 10);
  });
  return Math.max.apply(Math, _toConsumableArray(others).concat([0])) + 1;
}
function createUde(row) {
  var otherCount = otherUdeCounter(row);
  var udeKey = "AUTR_COMM_".concat(otherCount);
  return {
    id: udeKey,
    val: {
      value: "",
      label: "",
      is_default: false,
      commission_hors_livre: true,
      numero_compte_commission: ""
    }
  };
}
function _rowFactory2(_x, _x2, _x3) {
  return _rowFactory.apply(this, arguments);
}
function _rowFactory() {
  _rowFactory = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee16(dossierCredit, concour, concourDetails) {
    var context,
      whichLine,
      row,
      _iterator,
      _step,
      header,
      _header$options,
      codePoolSequence,
      _args16 = arguments;
    return _regeneratorRuntime().wrap(function _callee16$(_context16) {
      while (1) switch (_context16.prev = _context16.next) {
        case 0:
          context = _args16.length > 3 && _args16[3] !== undefined ? _args16[3] : {};
          whichLine = "";
          _context16.t0 = concour === null || concour === void 0 ? void 0 : concour.which_line.toLowerCase();
          _context16.next = _context16.t0 === 'signature' ? 5 : _context16.t0 === 'caisse' ? 7 : 7;
          break;
        case 5:
          whichLine = 'signature';
          return _context16.abrupt("break", 8);
        case 7:
          whichLine = 'caisse';
        case 8:
          context = _objectSpread(_objectSpread({}, context), {}, {
            which_line: whichLine
          });
          row = {
            which_line: whichLine,
            facility_uuid: concour.uuid,
            rachats: [createRachatSet(concour)],
            collaterals: [],
            udes: {},
            securiteDocumentations: [createSecuriteDocumentation(concour, dossierCredit)]
          };
          _iterator = _createForOfIteratorHelper(localState.headers);
          _context16.prev = 11;
          _iterator.s();
        case 13:
          if ((_step = _iterator.n()).done) {
            _context16.next = 29;
            break;
          }
          header = _step.value;
          if (!(header["default"] !== undefined)) {
            _context16.next = 26;
            break;
          }
          if (!(typeof header["default"] === 'function')) {
            _context16.next = 22;
            break;
          }
          _context16.next = 19;
          return header["default"]({
            dc: dossierCredit,
            c: concour,
            s: concourDetails,
            ctx: context
          });
        case 19:
          _context16.t1 = _context16.sent;
          _context16.next = 23;
          break;
        case 22:
          _context16.t1 = header["default"];
        case 23:
          row[header.key] = _context16.t1;
          _context16.next = 27;
          break;
        case 26:
          row[header.key] = header.type === 'select' ? ((_header$options = header.options) === null || _header$options === void 0 || (_header$options = _header$options[0]) === null || _header$options === void 0 ? void 0 : _header$options.value) || '' : '';
        case 27:
          _context16.next = 13;
          break;
        case 29:
          _context16.next = 34;
          break;
        case 31:
          _context16.prev = 31;
          _context16.t2 = _context16["catch"](11);
          _iterator.e(_context16.t2);
        case 34:
          _context16.prev = 34;
          _iterator.f();
          return _context16.finish(34);
        case 37:
          row.cantonnements = [createCantonnementPair()];
          row.collaterals = [createCollateralSet(concour, dossierCredit, _objectSpread(_objectSpread({}, context), {}, {
            row: row
          }))];
          _context16.next = 41;
          return initUdeHeaders(concour, dossierCredit, _objectSpread(_objectSpread({}, context), {}, {
            row: row
          }));
        case 41:
          row.udes = _context16.sent;
          _context16.next = 44;
          return _services_afg_atomic_sequence_service__WEBPACK_IMPORTED_MODULE_3__.codePoolSequenceService.allocateSequence();
        case 44:
          codePoolSequence = _context16.sent;
          if (codePoolSequence) {
            _context16.next = 47;
            break;
          }
          throw new Error('Erreur lors de l\'allocation de la séquence de code pool. Veuillez recharger la page puis réessayer.');
        case 47:
          row.code_groupe_pool_garantie = "".concat(row.racine_client, "_").concat(codePoolSequence);
          return _context16.abrupt("return", row);
        case 49:
        case "end":
          return _context16.stop();
      }
    }, _callee16, null, [[11, 31, 34, 37]]);
  }));
  return _rowFactory.apply(this, arguments);
}
function _initHeaders2(_x4, _x5, _x6) {
  return _initHeaders.apply(this, arguments);
}
function _initHeaders() {
  _initHeaders = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee17(dossierCredit, concour, concourDetails) {
    var context,
      _iterator2,
      _step2,
      header,
      _args17 = arguments;
    return _regeneratorRuntime().wrap(function _callee17$(_context17) {
      while (1) switch (_context17.prev = _context17.next) {
        case 0:
          context = _args17.length > 3 && _args17[3] !== undefined ? _args17[3] : {};
          _iterator2 = _createForOfIteratorHelper(localState.headers);
          _context17.prev = 2;
          _iterator2.s();
        case 4:
          if ((_step2 = _iterator2.n()).done) {
            _context17.next = 11;
            break;
          }
          header = _step2.value;
          if (!(header["default"] !== undefined && typeof header["default"] === 'function')) {
            _context17.next = 9;
            break;
          }
          _context17.next = 9;
          return header["default"]({
            dc: dossierCredit,
            c: concour,
            s: concourDetails,
            ctx: context
          });
        case 9:
          _context17.next = 4;
          break;
        case 11:
          _context17.next = 16;
          break;
        case 13:
          _context17.prev = 13;
          _context17.t0 = _context17["catch"](2);
          _iterator2.e(_context17.t0);
        case 16:
          _context17.prev = 16;
          _iterator2.f();
          return _context17.finish(16);
        case 19:
        case "end":
          return _context17.stop();
      }
    }, _callee17, null, [[2, 13, 16, 19]]);
  }));
  return _initHeaders.apply(this, arguments);
}
function initUdeHeaders() {
  return _initUdeHeaders.apply(this, arguments);
}
function _initUdeHeaders() {
  _initUdeHeaders = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee19() {
    var concour,
      dossierCredit,
      context,
      result,
      promiseContext,
      _args19 = arguments;
    return _regeneratorRuntime().wrap(function _callee19$(_context19) {
      while (1) switch (_context19.prev = _context19.next) {
        case 0:
          concour = _args19.length > 0 && _args19[0] !== undefined ? _args19[0] : {};
          dossierCredit = _args19.length > 1 && _args19[1] !== undefined ? _args19[1] : {};
          context = _args19.length > 2 && _args19[2] !== undefined ? _args19[2] : {};
          result = {};
          promiseContext = {
            c: concour,
            dc: dossierCredit,
            ctx: context
          };
          _context19.next = 7;
          return Promise.all(localState.udeHeaders.map(/*#__PURE__*/function () {
            var _ref30 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee18(header) {
              var value;
              return _regeneratorRuntime().wrap(function _callee18$(_context18) {
                while (1) switch (_context18.prev = _context18.next) {
                  case 0:
                    value = '';
                    if (!(header["default"] !== undefined)) {
                      _context18.next = 10;
                      break;
                    }
                    if (!(typeof header["default"] === 'function')) {
                      _context18.next = 8;
                      break;
                    }
                    _context18.next = 5;
                    return header["default"](promiseContext);
                  case 5:
                    _context18.t0 = _context18.sent;
                    _context18.next = 9;
                    break;
                  case 8:
                    _context18.t0 = header["default"];
                  case 9:
                    value = _context18.t0;
                  case 10:
                    result[header.key] = {
                      value: value,
                      label: header.label,
                      is_default: true,
                      commission_hors_livre: false,
                      numero_compte_commission: ""
                    };
                  case 11:
                  case "end":
                    return _context18.stop();
                }
              }, _callee18);
            }));
            return function (_x1) {
              return _ref30.apply(this, arguments);
            };
          }()));
        case 7:
          return _context19.abrupt("return", result);
        case 8:
        case "end":
          return _context19.stop();
      }
    }, _callee19);
  }));
  return _initUdeHeaders.apply(this, arguments);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'SaisieEncodage',
  components: {
    ChevronUpIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_6__.ChevronUpIcon,
    ChevronDownIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_6__.ChevronDownIcon,
    AlertCircleIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_6__.AlertCircleIcon,
    PlusIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_6__.PlusIcon,
    TrashIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_6__.TrashIcon,
    LoaderIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_6__.LoaderIcon
  },
  props: {
    meta_data: Object,
    tb_name: String,
    tb_display_name: String
  },
  filters: {
    formatNumber: function formatNumber(value) {
      if (!value) return '0';
      return new Intl.NumberFormat('fr-FR').format(value).replace(/,/g, '.');
    }
  },
  created: function created() {
    var _this = this;
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _this.isLoading = true;
            _this.initDynamicTbs();
            _context.next = 5;
            return _this.loadAgences();
          case 5:
            _context.next = 7;
            return _this.loadCollaterals();
          case 7:
            _context.next = 9;
            return _this.loadCollateralTypes();
          case 9:
            _context.next = 11;
            return _this.loadCreditMapping();
          case 11:
            _context.next = 13;
            return _this.loadRetrieved();
          case 13:
            _this.loadTbAttrs();
            _this.tableClosedOrOpened();
            _context.next = 20;
            break;
          case 17:
            _context.prev = 17;
            _context.t0 = _context["catch"](0);
            _this.handleError(_context.t0, 'Erreur lors du chargement des données');
          case 20:
            _context.prev = 20;
            _this.isLoading = false;
            return _context.finish(20);
          case 23:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 17, 20, 23]]);
    }))();
  },
  data: function data() {
    var _this2 = this;
    return {
      isLoading: false,
      loadingCollateral: false,
      fatalError: null,
      listingNote: false,
      seen: true,
      seen1: true,
      seen2: true,
      seen3: true,
      seen4: true,
      seen5: true,
      seen6: true,
      seen7: true,
      seen8: true,
      seen9: true,
      seen10: true,
      seen11: true,
      seen12: true,
      showRachatSection: true,
      contextList: [{
        title: 'Commenter',
        icon: 'icofont icofont-comment',
        handler: function handler() {
          return _this2.openNotesModal();
        },
        disabled: false
      }, {
        title: 'Assigner',
        icon: 'icofont icofont-check',
        handler: function handler() {},
        disabled: true
      }, {
        title: 'Supprimer',
        icon: 'icofont icofont-trash',
        handler: this.startDeletingTbFromContext,
        disabled: false
      }],
      ebapisHost: _services_ebapis_service__WEBPACK_IMPORTED_MODULE_2__["default"].host,
      authcheck: false,
      authcheckUsr: null,
      authcheckStatus: null,
      dossier_credit: null,
      meta_parseable: {
        cred_pub_key: this.meta_data['cred_pub_key'],
        tb_name: this.tb_name
      },
      type_collaterals: TYPE_COLLATERALS,
      concours: {},
      agences: [],
      collaterals: [],
      collateralTypes: [],
      creditMapping: [],
      activeFacilityUuid: '',
      activeCollateralHasCPS: false,
      facilities: [{
        uuid: '',
        nature: 'Non renseigné',
        code: 'Non renseigné',
        montant: 0
      }],
      rows: {},
      formDataToBeWatched: {
        notes: [],
        rows: [],
        resever: 'DIRECTION DES OPERATIONS',
        sender: 'DIRECTION DES ENGAGEMENTS',
        cc: 'DIRECTION GENERALE'
      },
      handleFieldChange: lodash__WEBPACK_IMPORTED_MODULE_4___default().debounce(this._handleFieldChange, 0),
      handleCollateralChange: lodash__WEBPACK_IMPORTED_MODULE_4___default().debounce(this._handleCollateralChange, 0),
      handleRachatChange: lodash__WEBPACK_IMPORTED_MODULE_4___default().debounce(this._handleRachatChange, 0),
      syncRowsToFormData: lodash__WEBPACK_IMPORTED_MODULE_4___default().debounce(this._syncRowsToFormData, 0)
    };
  },
  computed: {
    devise: function devise() {
      var _this$dossier_credit, _ref23, _this$authcheckUsr, _sigleDevise$split$;
      var numDoss = ((_this$dossier_credit = this.dossier_credit) === null || _this$dossier_credit === void 0 ? void 0 : _this$dossier_credit.numero_dossier) || '';
      var filiale = numDoss.split('-')[0];
      var devise = DEVISE[filiale] || '';
      if (devise) return devise;
      var user = (_ref23 = (_this$authcheckUsr = this.authcheckUsr) !== null && _this$authcheckUsr !== void 0 ? _this$authcheckUsr : this.__user__) !== null && _ref23 !== void 0 ? _ref23 : this.authenticatedUser;
      if (!user) return devise;
      var sigleDevise = (user === null || user === void 0 ? void 0 : user.sigle_devise_dis_name) || (user === null || user === void 0 ? void 0 : user.sigle_devise) || '';
      devise = (_sigleDevise$split$ = sigleDevise.split(' ')[0]) === null || _sigleDevise$split$ === void 0 ? void 0 : _sigleDevise$split$.toUpperCase();
      return devise;
    },
    staticHeaders: function staticHeaders() {
      return localState.headers;
    },
    staticUdeHeaders: function staticUdeHeaders() {
      return localState.udeHeaders;
    },
    visibleHeaders: function visibleHeaders() {
      var _this3 = this;
      return this.staticHeaders.filter(function (header) {
        var _this3$rows$_this3$ac;
        // Ne pas afficher compte_a_vue_autre si la valeur n'est pas 'autre'
        if (header.key === 'compte_a_vue_autre' && ((_this3$rows$_this3$ac = _this3.rows[_this3.activeFacilityUuid]) === null || _this3$rows$_this3$ac === void 0 ? void 0 : _this3$rows$_this3$ac.compte_a_vue) !== 'autre') {
          return false;
        }
        return true;
      });
    },
    visibleUdeHeaders: function visibleUdeHeaders() {
      return this.staticUdeHeaders.filter(Boolean);
    },
    udeHeaders: function udeHeaders() {
      return Object.fromEntries(this.visibleUdeHeaders.map(function (header) {
        return [header.key, header];
      }));
    },
    totalsRachat: function totalsRachat() {
      var _this$rows$this$activ;
      if (!this.activeFacilityUuid || !((_this$rows$this$activ = this.rows[this.activeFacilityUuid]) !== null && _this$rows$this$activ !== void 0 && _this$rows$this$activ.rachats)) {
        return {
          principal_rachat: 0,
          interet_rachat: 0,
          tva_rachat: 0,
          penalite_rbsmt_anticipe: 0,
          penalite_retard: 0,
          montant_ttc_rachat: 0,
          ecart_rachat: 0
        };
      }
      return this.rows[this.activeFacilityUuid].rachats.reduce(function (totals, rachat) {
        var _rachat$rachat_extern;
        totals.principal_rachat += Number(rachat.principal_rachat) || 0;
        totals.interet_rachat += Number(rachat.interet_rachat) || 0;
        totals.tva_rachat += Number(rachat.tva_rachat) || 0;
        totals.penalite_rbsmt_anticipe += Number(rachat.penalite_rbsmt_anticipe) || 0;
        totals.penalite_retard += Number(rachat.penalite_retard) || 0;
        totals.montant_ttc_rachat += Number(rachat.montant_ttc_rachat) || 0;
        totals.ecart_rachat += Number(rachat.ecart_rachat) || 0;
        var isExternal = ((_rachat$rachat_extern = rachat.rachat_externe) === null || _rachat$rachat_extern === void 0 ? void 0 : _rachat$rachat_extern.toUpperCase()) === "OUI";
        totals.nbre_rachat_externe += isExternal ? 1 : 0;
        totals.mt_rachat_externe += isExternal ? Number(rachat.montant_ttc_rachat) || 0 : 0;
        return totals;
      }, {
        principal_rachat: 0,
        interet_rachat: 0,
        tva_rachat: 0,
        penalite_rbsmt_anticipe: 0,
        penalite_retard: 0,
        montant_ttc_rachat: 0,
        ecart_rachat: 0,
        nbre_rachat_externe: 0,
        mt_rachat_externe: 0
      });
    }
  },
  methods: {
    isCpsCollateral: function isCpsCollateral(collateral) {
      var _collateral$class_cod;
      return (_collateral$class_cod = collateral.class_code) === null || _collateral$class_cod === void 0 || (_collateral$class_cod = _collateral$class_cod.toUpperCase()) === null || _collateral$class_cod === void 0 ? void 0 : _collateral$class_cod.startsWith('CPS');
    },
    initDynamicTbs: function initDynamicTbs() {
      var dossierCredit = this.meta_data['dossier_credit'] || {};
      var tbArrays = this.determineCredPubTables(dossierCredit === null || dossierCredit === void 0 ? void 0 : dossierCredit.applied_templ_name, dossierCredit);
      var tbProfilPro = tbArrays[1];
      var tbComptes = tbArrays[2];
      this.dynamicTbs = {
        tbIdentification: tbArrays[0],
        tbProfilPro: tbProfilPro,
        tbComptes: tbComptes,
        tbFacilite: tbArrays[3],
        tbGarantie: tbArrays[4]
      };
    },
    getContext: function getContext() {
      var _this$meta_data,
        _dossierCredit$this$d,
        _this$authcheckUsr2,
        _this4 = this;
      var additional = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      additional = additional !== null && additional !== void 0 ? additional : {};
      if (_typeof(additional) !== 'object' || Array.isArray(additional)) {
        throw new Error('Invalid context data');
      }
      var dossierCredit = ((_this$meta_data = this.meta_data) === null || _this$meta_data === void 0 ? void 0 : _this$meta_data['dossier_credit']) || {};
      var nom_client = dossierCredit === null || dossierCredit === void 0 || (_dossierCredit$this$d = dossierCredit[this.dynamicTbs.tbIdentification]) === null || _dossierCredit$this$d === void 0 ? void 0 : _dossierCredit$this$d.denomination_client;
      var tvaUser = moneyToNumber(((_this$authcheckUsr2 = this.authcheckUsr) === null || _this$authcheckUsr2 === void 0 ? void 0 : _this$authcheckUsr2.tva) || 19.25);
      return _objectSpread({
        agences: this.agences,
        tva_user: tvaUser,
        nom_client: nom_client,
        devise: this.devise,
        nom_cps: this.getNomCps(this.activeFacilityUuid),
        collaterals: this.collaterals,
        collateralTypes: this.collateralTypes,
        creditMapping: this.creditMapping,
        dynamicTbs: this.dynamicTbs,
        row: this.activeFacilityUuid ? this.rows[this.activeFacilityUuid] : {},
        rows: this.rows,
        facility: this.facilities.find(function (f) {
          return f.uuid === _this4.activeFacilityUuid;
        }) || {},
        activeFacilityUuid: this.activeFacilityUuid
      }, additional);
    },
    isRachatExterne: function isRachatExterne(rachat) {
      var _rachat$rachat_extern2;
      return (rachat === null || rachat === void 0 || (_rachat$rachat_extern2 = rachat.rachat_externe) === null || _rachat$rachat_extern2 === void 0 ? void 0 : _rachat$rachat_extern2.toUpperCase()) === "OUI";
    },
    loadCreditMapping: function loadCreditMapping() {
      var _this5 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return _services_credit_service__WEBPACK_IMPORTED_MODULE_1__["default"].loadCreditMapping({
                category: 'corporate'
              });
            case 3:
              _this5.creditMapping = _context2.sent;
              _context2.next = 9;
              break;
            case 6:
              _context2.prev = 6;
              _context2.t0 = _context2["catch"](0);
              _this5.handleError(_context2.t0, 'Erreur lors du chargement du mapping de crédit');
            case 9:
            case "end":
              return _context2.stop();
          }
        }, _callee2, null, [[0, 6]]);
      }))();
    },
    loadCollaterals: function loadCollaterals() {
      var _this6 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              _context3.next = 3;
              return _services_credit_service__WEBPACK_IMPORTED_MODULE_1__["default"].loadCollaterals();
            case 3:
              _this6.collaterals = _context3.sent;
              _context3.next = 9;
              break;
            case 6:
              _context3.prev = 6;
              _context3.t0 = _context3["catch"](0);
              _this6.handleError(_context3.t0, 'Erreur lors du chargement des collatéraux');
            case 9:
            case "end":
              return _context3.stop();
          }
        }, _callee3, null, [[0, 6]]);
      }))();
    },
    loadCollateralTypes: function loadCollateralTypes() {
      var _this7 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              _context4.next = 3;
              return _services_credit_service__WEBPACK_IMPORTED_MODULE_1__["default"].loadCollateralTypes();
            case 3:
              _this7.collateralTypes = _context4.sent;
              _context4.next = 9;
              break;
            case 6:
              _context4.prev = 6;
              _context4.t0 = _context4["catch"](0);
              _this7.handleError(_context4.t0, 'Erreur lors du chargement des types de collatéraux');
            case 9:
            case "end":
              return _context4.stop();
          }
        }, _callee4, null, [[0, 6]]);
      }))();
    },
    loadAgences: function loadAgences() {
      var _this8 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
        var response;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              _context5.prev = 0;
              _context5.next = 3;
              return _services_credit_service__WEBPACK_IMPORTED_MODULE_1__["default"].loadAllAgencies();
            case 3:
              response = _context5.sent;
              if (!(response !== null && response !== void 0 && response.data)) {
                _context5.next = 9;
                break;
              }
              _this8.agences = response.data;
              localState.agenceOptions = [{
                value: '',
                label: 'Sélectionner un numéro d\'agence'
              }].concat(_toConsumableArray(response.data.map(function (agence) {
                return {
                  value: agence === null || agence === void 0 ? void 0 : agence.numeros,
                  label: "".concat(agence === null || agence === void 0 ? void 0 : agence.numeros, " - ").concat(agence === null || agence === void 0 ? void 0 : agence.agence)
                };
              })));
              _context5.next = 10;
              break;
            case 9:
              throw new Error('No agency data received');
            case 10:
              _context5.next = 15;
              break;
            case 12:
              _context5.prev = 12;
              _context5.t0 = _context5["catch"](0);
              _this8.handleError(_context5.t0, 'Erreur lors du chargement des agences');
            case 15:
            case "end":
              return _context5.stop();
          }
        }, _callee5, null, [[0, 12]]);
      }))();
    },
    setActiveFacility: function setActiveFacility(facilityUuid) {
      var _this9 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
        var _this9$rows$_this9$ac;
        var concour, concourDetail, row, dossierCredit, codeProduit, inferedvalues, data;
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              if (facilityUuid) {
                _context6.next = 3;
                break;
              }
              _this9.$toasted.error('La facilité demandée n\'existe pas ou a été supprimée.');
              return _context6.abrupt("return");
            case 3:
              if (!(_this9.activeFacilityUuid === facilityUuid)) {
                _context6.next = 7;
                break;
              }
              _this9.activeFacilityUuid = '';
              _this9.$toasted.show('Facilité désactivée pour édition.');
              return _context6.abrupt("return");
            case 7:
              concour = _this9.concours[facilityUuid];
              concourDetail = {};
              if (concour) {
                _context6.next = 12;
                break;
              }
              _this9.$toasted.error('La facilité demandée n\'existe pas ou a été supprimée.');
              return _context6.abrupt("return");
            case 12:
              _this9.activeFacilityUuid = facilityUuid;
              row = _this9.rows[_this9.activeFacilityUuid];
              dossierCredit = _this9.meta_data['dossier_credit'];
              if (row) {
                _context6.next = 18;
                break;
              }
              _this9.$toasted.error('La facilité demandée n\'existe pas ou a été supprimée.');
              return _context6.abrupt("return");
            case 18:
              _context6.next = 20;
              return _this9.initHeaders(row.n - 1, dossierCredit, concour, concourDetail);
            case 20:
              // Update collaterals
              codeProduit = (_this9$rows$_this9$ac = _this9.rows[_this9.activeFacilityUuid]) === null || _this9$rows$_this9$ac === void 0 ? void 0 : _this9$rows$_this9$ac.code_produit;
              if (codeProduit) {
                inferedvalues = _this9.inferProductValues(codeProduit);
                vue__WEBPACK_IMPORTED_MODULE_5__["default"].set(_this9.rows[_this9.activeFacilityUuid], 'description_code_produit', inferedvalues.description_code_produit || '');
                // Vue.set(this.rows[this.activeFacilityUuid], 'type_decaissement', inferedvalues.type_decaissement || '');
              }
              data = {};
              data.devise = _this9.devise;
              // data.nom_cps = this.getNomCps(dossierCredit, this.activeFacilityUuid)

              _this9.updateSecuriteDocumentations(data);
              _this9.emitter(EVENTS.ACTIVE_MEMO_UPDATED, {
                facilityUuid: _this9.activeFacilityUuid
              });
              _this9.$toasted.show('Facilité activée pour édition.');
            case 27:
            case "end":
              return _context6.stop();
          }
        }, _callee6);
      }))();
    },
    addRachatSet: function addRachatSet() {
      if (!this.activeFacilityUuid) return;
      if (this.rows[this.activeFacilityUuid].rachats.length >= 10) {
        this.$toasted.error('Limite maximale de rachats atteinte.');
        return;
      }
      var concour = this.concours[this.activeFacilityUuid] || {};
      vue__WEBPACK_IMPORTED_MODULE_5__["default"].set(this.rows[this.activeFacilityUuid], 'rachats', [].concat(_toConsumableArray(this.rows[this.activeFacilityUuid].rachats), [createRachatSet(concour)]));
      this.$toasted.show('Nouveau rachat ajouté.');
    },
    removeRachatSet: function removeRachatSet(index) {
      if (!this.activeFacilityUuid) return;
      var rachats = _toConsumableArray(this.rows[this.activeFacilityUuid].rachats);
      if (rachats.length <= 1) {
        this.$toasted.show('Vous ne pouvez pas supprimer le dernier rachat.');
        return;
      }
      rachats.splice(index, 1);
      vue__WEBPACK_IMPORTED_MODULE_5__["default"].set(this.rows[this.activeFacilityUuid], 'rachats', rachats);
      this.$toasted.show("Rachat ".concat(index + 1, " supprim\xE9."));
    },
    addCollateralSet: function addCollateralSet() {
      var _this0 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
        var concour, context, collateral;
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              _context7.prev = 0;
              _this0.loadingCollateral = true;
              if (_this0.activeFacilityUuid) {
                _context7.next = 4;
                break;
              }
              return _context7.abrupt("return");
            case 4:
              if (!(_this0.rows[_this0.activeFacilityUuid].collaterals.length >= 10)) {
                _context7.next = 7;
                break;
              }
              _this0.$toasted.error('Limite maximale de collatéraux atteinte.');
              return _context7.abrupt("return");
            case 7:
              concour = _this0.concours[_this0.activeFacilityUuid] || {};
              context = _this0.getContext();
              collateral = createCollateralSet(concour, _this0.dossierCredit, context); // const row = this.rows[this.activeFacilityUuid] || {};
              // const racineClient = row?.racine_client || '';
              // const sequence = await collateralSequenceService.allocateSequence();
              // const collateralCode = `${racineClient}${collateral.class_code_autorisation}${sequence}`.toUpperCase();
              // collateral.code_collateral = collateralCode || collateral.code_collateral;
              vue__WEBPACK_IMPORTED_MODULE_5__["default"].set(_this0.rows[_this0.activeFacilityUuid], 'collaterals', [].concat(_toConsumableArray(_this0.rows[_this0.activeFacilityUuid].collaterals), [collateral]));
              _this0.$toasted.show('Nouveau collatéral ajouté.');
              _context7.next = 17;
              break;
            case 14:
              _context7.prev = 14;
              _context7.t0 = _context7["catch"](0);
              _this0.handleError(_context7.t0, 'Erreur lors de l\'ajout du collatéral');
            case 17:
              _context7.prev = 17;
              _this0.loadingCollateral = false;
              return _context7.finish(17);
            case 20:
            case "end":
              return _context7.stop();
          }
        }, _callee7, null, [[0, 14, 17, 20]]);
      }))();
    },
    removeCollateralSet: function removeCollateralSet(index) {
      var _this1 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
        var collaterals, collateral, codeCollateral, sequence, success;
        return _regeneratorRuntime().wrap(function _callee8$(_context8) {
          while (1) switch (_context8.prev = _context8.next) {
            case 0:
              _context8.prev = 0;
              _this1.loadingCollateral = true;
              if (_this1.activeFacilityUuid) {
                _context8.next = 4;
                break;
              }
              return _context8.abrupt("return");
            case 4:
              collaterals = _toConsumableArray(_this1.rows[_this1.activeFacilityUuid].collaterals); // if (collaterals.length <= 1) {
              //     this.$toasted.show('Vous ne pouvez pas supprimer le dernier collatéral.');
              //     return;
              // }
              collateral = collaterals[index];
              if (!collateral) {
                _context8.next = 16;
                break;
              }
              codeCollateral = collateral.code_collateral || '';
              sequence = _services_afg_atomic_sequence_service__WEBPACK_IMPORTED_MODULE_3__.collateralSequenceService.getSequenceFromCode(codeCollateral);
              if (!sequence) {
                _context8.next = 16;
                break;
              }
              _context8.next = 12;
              return _services_afg_atomic_sequence_service__WEBPACK_IMPORTED_MODULE_3__.collateralSequenceService.releaseSequence(sequence);
            case 12:
              success = _context8.sent;
              if (success) {
                _context8.next = 16;
                break;
              }
              _this1.$toasted.error('Erreur lors de la suppression du collatéral. Veuillez réessayer.');
              return _context8.abrupt("return");
            case 16:
              collaterals.splice(index, 1);
              vue__WEBPACK_IMPORTED_MODULE_5__["default"].set(_this1.rows[_this1.activeFacilityUuid], 'collaterals', collaterals);
              _this1.$toasted.show("Collat\xE9ral ".concat(index + 1, " supprim\xE9."));
              _context8.next = 24;
              break;
            case 21:
              _context8.prev = 21;
              _context8.t0 = _context8["catch"](0);
              _this1.handleError(_context8.t0, 'Erreur lors de la suppression du collatéral');
            case 24:
              _context8.prev = 24;
              _this1.loadingCollateral = false;
              return _context8.finish(24);
            case 27:
            case "end":
              return _context8.stop();
          }
        }, _callee8, null, [[0, 21, 24, 27]]);
      }))();
    },
    addCantonnementPair: function addCantonnementPair() {
      var _this$rows$this$activ2;
      if (!this.activeFacilityUuid) return;
      var currentList = ((_this$rows$this$activ2 = this.rows[this.activeFacilityUuid]) === null || _this$rows$this$activ2 === void 0 ? void 0 : _this$rows$this$activ2.cantonnements) || [];
      if (currentList.length >= 10) {
        this.$toasted.error('Limite maximale de cantonnement frais huissier atteinte.');
        return;
      }
      vue__WEBPACK_IMPORTED_MODULE_5__["default"].set(this.rows[this.activeFacilityUuid], 'cantonnements', [].concat(_toConsumableArray(currentList), [createCantonnementPair()]));
      this.$toasted.show('Nouveau cantonnement frais huissier (Débit/Crédit) ajouté.');
    },
    removeCantonnementPair: function removeCantonnementPair(index) {
      var _this$rows$this$activ3;
      if (!this.activeFacilityUuid) return;
      var fraisList = _toConsumableArray(((_this$rows$this$activ3 = this.rows[this.activeFacilityUuid]) === null || _this$rows$this$activ3 === void 0 ? void 0 : _this$rows$this$activ3.cantonnements) || []);
      fraisList.splice(index, 1);
      vue__WEBPACK_IMPORTED_MODULE_5__["default"].set(this.rows[this.activeFacilityUuid], 'cantonnements', fraisList);
      this.$toasted.show("Cantonnement frais huissier ".concat(index + 1, " supprim\xE9."));
    },
    handleCantonnementChange: function handleCantonnementChange(value, index, key) {
      if (!this.activeFacilityUuid) return;
      if (!this.rows[this.activeFacilityUuid].cantonnements) {
        vue__WEBPACK_IMPORTED_MODULE_5__["default"].set(this.rows[this.activeFacilityUuid], 'cantonnements', []);
      }
      vue__WEBPACK_IMPORTED_MODULE_5__["default"].set(this.rows[this.activeFacilityUuid].cantonnements[index], key, value);
    },
    _handleRachatChange: function _handleRachatChange(value, index, key) {
      if (!this.activeFacilityUuid) return;
      vue__WEBPACK_IMPORTED_MODULE_5__["default"].set(this.rows[this.activeFacilityUuid].rachats[index], key, value);

      // =+Y2-Z2-AA2-AB2-AC2-AD2
      // Y2: montant_ttc_rachat
      // Z2: principal_rachat
      // AA2: interet_rachat
      // AB2: tva_rachat
      // AC2: penalite_rbsmt_anticipe
      // AD2: penalite_retard

      var rachat = this.rows[this.activeFacilityUuid].rachats[index] || {};
      var montantTtcRachat = rachat.montant_ttc_rachat || 0;
      var principalRachat = rachat.principal_rachat || 0;
      var interetRachat = rachat.interet_rachat || 0;
      var tvaRachat = rachat.tva_rachat || 0;
      var penaliteRbsmtAnticipe = rachat.penalite_rbsmt_anticipe || 0;
      var penaliteRetard = rachat.penalite_retard || 0;
      var ecart = montantTtcRachat - (principalRachat + interetRachat + tvaRachat + penaliteRbsmtAnticipe + penaliteRetard);
      vue__WEBPACK_IMPORTED_MODULE_5__["default"].set(this.rows[this.activeFacilityUuid].rachats[index], key, ecart);

      // =+IF(AF2=0;"NON, MONTANT PENALITE A ANNULER";"OUI, APPLIQUER LA PENALITE")
      // AF2: ecart_rachat
      var commentaire = ecart === 0 ? "NON, MONTANT PENALITE A ANNULER" : "OUI, APPLIQUER LA PENALITE";
      vue__WEBPACK_IMPORTED_MODULE_5__["default"].set(this.rows[this.activeFacilityUuid].rachats[index], 'commentaire', commentaire);
    },
    getCollateralCode: function getCollateralCode(classCode) {
      var _this10 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
        var row, racineClient, sequence, collateralCode;
        return _regeneratorRuntime().wrap(function _callee9$(_context9) {
          while (1) switch (_context9.prev = _context9.next) {
            case 0:
              _context9.prev = 0;
              if (!(typeof classCode !== 'string' || !classCode)) {
                _context9.next = 3;
                break;
              }
              return _context9.abrupt("return", null);
            case 3:
              if (_this10.activeFacilityUuid) {
                _context9.next = 5;
                break;
              }
              return _context9.abrupt("return", null);
            case 5:
              row = _this10.rows[_this10.activeFacilityUuid];
              if (row) {
                _context9.next = 8;
                break;
              }
              return _context9.abrupt("return", null);
            case 8:
              racineClient = row.racine_client || '';
              _context9.next = 11;
              return _services_afg_atomic_sequence_service__WEBPACK_IMPORTED_MODULE_3__.collateralSequenceService.allocateSequence();
            case 11:
              sequence = _context9.sent;
              collateralCode = "".concat(racineClient).concat(classCode).concat(sequence).toUpperCase();
              return _context9.abrupt("return", collateralCode);
            case 16:
              _context9.prev = 16;
              _context9.t0 = _context9["catch"](0);
              _this10.handleError(_context9.t0, 'Erreur lors de la récupération du code collatéral');
              return _context9.abrupt("return", null);
            case 20:
            case "end":
              return _context9.stop();
          }
        }, _callee9, null, [[0, 16]]);
      }))();
    },
    _handleCollateralChange: function _handleCollateralChange(value, index, key) {
      var _this11 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee0() {
        var _value, _this11$authcheckUsr;
        var collateral, inferedTypeValues, collateralTypeKeys, codeCollateral, _i, _Object$entries, _Object$entries$_i, k, v, tvaUser, tvaGarantie, collaterals;
        return _regeneratorRuntime().wrap(function _callee0$(_context0) {
          while (1) switch (_context0.prev = _context0.next) {
            case 0:
              _context0.prev = 0;
              _this11.loadingCollateral = true;
              if (_this11.activeFacilityUuid) {
                _context0.next = 4;
                break;
              }
              return _context0.abrupt("return");
            case 4:
              collateral = _this11.rows[_this11.activeFacilityUuid].collaterals[index] || {};
              _context0.t0 = key;
              _context0.next = _context0.t0 === 'type_collateral' ? 8 : _context0.t0 === 'class_code' ? 10 : _context0.t0 === 'frais_ht' ? 27 : 35;
              break;
            case 8:
              if (value !== 'CPS') {
                vue__WEBPACK_IMPORTED_MODULE_5__["default"].set(_this11.rows[_this11.activeFacilityUuid].collaterals[index], 'nom_cps', '');
              }
              return _context0.abrupt("break", 35);
            case 10:
              if (!((_value = value) !== null && _value !== void 0 && (_value = _value.toUpperCase()) !== null && _value !== void 0 && _value.startsWith('CPS'))) {
                vue__WEBPACK_IMPORTED_MODULE_5__["default"].set(_this11.rows[_this11.activeFacilityUuid].collaterals[index], 'nom_cps', '');
              }
              inferedTypeValues = _this11.inferCollateralTypeValues(value);
              collateralTypeKeys = Object.keys(collateral);
              codeCollateral = collateral.code_collateral || '';
              if (!codeCollateral) {
                _context0.next = 18;
                break;
              }
              codeCollateral = codeCollateral.replace(collateral.class_code, value);
              _context0.next = 21;
              break;
            case 18:
              _context0.next = 20;
              return _this11.getCollateralCode(value);
            case 20:
              codeCollateral = _context0.sent;
            case 21:
              if (codeCollateral) {
                _context0.next = 24;
                break;
              }
              _this11.$toasted.error('Erreur lors de la génération du code collatéral.');
              return _context0.abrupt("return");
            case 24:
              vue__WEBPACK_IMPORTED_MODULE_5__["default"].set(_this11.rows[_this11.activeFacilityUuid].collaterals[index], 'code_collateral', codeCollateral);
              for (_i = 0, _Object$entries = Object.entries(inferedTypeValues); _i < _Object$entries.length; _i++) {
                _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2), k = _Object$entries$_i[0], v = _Object$entries$_i[1];
                if (collateralTypeKeys.includes(k)) {
                  vue__WEBPACK_IMPORTED_MODULE_5__["default"].set(_this11.rows[_this11.activeFacilityUuid].collaterals[index], k, v);
                }
              }
              return _context0.abrupt("break", 35);
            case 27:
              value = moneyToNumber(value);
              if (!(isNaN(value) || value < 0)) {
                _context0.next = 31;
                break;
              }
              _this11.$toasted.error('Le montant des frais HT doit être un nombre positif.');
              return _context0.abrupt("return");
            case 31:
              tvaUser = moneyToNumber(((_this11$authcheckUsr = _this11.authcheckUsr) === null || _this11$authcheckUsr === void 0 ? void 0 : _this11$authcheckUsr.tva) || 19.25);
              tvaGarantie = Math.round(tvaUser * value / 100);
              vue__WEBPACK_IMPORTED_MODULE_5__["default"].set(_this11.rows[_this11.activeFacilityUuid].collaterals[index], 'tva_garantie', tvaGarantie);
              return _context0.abrupt("break", 35);
            case 35:
              vue__WEBPACK_IMPORTED_MODULE_5__["default"].set(_this11.rows[_this11.activeFacilityUuid].collaterals[index], key, value);
              if (key === 'class_code') {
                collaterals = _this11.rows[_this11.activeFacilityUuid].collaterals || [];
                _this11.activeCollateralHasCPS = collaterals.some(function (c) {
                  return _this11.isCpsCollateral(c);
                });
              }
              _context0.next = 42;
              break;
            case 39:
              _context0.prev = 39;
              _context0.t1 = _context0["catch"](0);
              _this11.handleError(_context0.t1, 'Erreur lors de la modification du collatéral');
            case 42:
              _context0.prev = 42;
              _this11.loadingCollateral = false;
              return _context0.finish(42);
            case 45:
            case "end":
              return _context0.stop();
          }
        }, _callee0, null, [[0, 39, 42, 45]]);
      }))();
    },
    inferProductValues: function inferProductValues(codeProduit) {
      return _inferProductValues(codeProduit, this.creditMapping);
    },
    inferCollateralValues: function inferCollateralValues(codeProduit) {
      return _inferCollateralValues(codeProduit, this.collaterals);
    },
    inferCollateralTypeValues: function inferCollateralTypeValues(classCode) {
      return _inferCollateralTypeValues(classCode, this.collateralTypes);
    },
    rowFactory: function rowFactory(index, dossierCredit, concour, concourDetails) {
      var _this12 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee1() {
        var context;
        return _regeneratorRuntime().wrap(function _callee1$(_context1) {
          while (1) switch (_context1.prev = _context1.next) {
            case 0:
              context = _this12.getContext({
                index: index
              });
              return _context1.abrupt("return", _rowFactory2(dossierCredit, concour, concourDetails, context));
            case 2:
            case "end":
              return _context1.stop();
          }
        }, _callee1);
      }))();
    },
    initHeaders: function initHeaders(index, dossierCredit, concour, concourDetails) {
      var _this13 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee10() {
        var context;
        return _regeneratorRuntime().wrap(function _callee10$(_context10) {
          while (1) switch (_context10.prev = _context10.next) {
            case 0:
              context = _this13.getContext({
                // nom_cps: this.getNomCps(dossierCredit, concour?.uuid),
                index: index
              });
              return _context10.abrupt("return", _initHeaders2(dossierCredit, concour, concourDetails, context));
            case 2:
            case "end":
              return _context10.stop();
          }
        }, _callee10);
      }))();
    },
    _handleFieldChange: function _handleFieldChange(value, key) {
      var _this14 = this;
      if (!this.activeFacilityUuid) return;
      vue__WEBPACK_IMPORTED_MODULE_5__["default"].set(this.rows[this.activeFacilityUuid], key, value);
      var header = this.staticHeaders.find(function (h) {
        return h.key === key;
      });
      if (header && typeof header.onChange === 'function') {
        var context = this.getContext();
        header.onChange(value, this.rows[this.activeFacilityUuid], context);
      }
      if (key === 'nom_cps' && value != '') {
        this.updateSecuriteDocumentations();
      }
      if (key === 'compte_a_vue' && value !== 'autre') {
        vue__WEBPACK_IMPORTED_MODULE_5__["default"].set(this.rows[this.activeFacilityUuid], 'compte_a_vue_autre', '');
      }
      if (key === 'code_produit') {
        var codeProduit = value || this.rows[this.activeFacilityUuid].code_produit;
        var inferedValues = this.inferCollateralValues(codeProduit);
        this.rows[this.activeFacilityUuid].collaterals.forEach(function (collateral, i) {
          if (!collateral) return;
          vue__WEBPACK_IMPORTED_MODULE_5__["default"].set(_this14.rows[_this14.activeFacilityUuid].collaterals, i, _objectSpread(_objectSpread({}, collateral), inferedValues));
        });
      }
      if (key === 'numero_sequence') {
        value = Number(value);
        if (!isNaN(value)) {
          value = value < 1 ? 1 : value > 99 ? 99 : value;
          vue__WEBPACK_IMPORTED_MODULE_5__["default"].set(this.rows[this.activeFacilityUuid], key, value);
        } else {
          vue__WEBPACK_IMPORTED_MODULE_5__["default"].set(this.rows[this.activeFacilityUuid], key, '');
        }
      }
      var linkedRefNoDependencyFields = ['line_code_autorisation', 'numero_sequence'];
      if (linkedRefNoDependencyFields.includes(key)) {
        vue__WEBPACK_IMPORTED_MODULE_5__["default"].set(this.rows[this.activeFacilityUuid], 'linked_ref_no', concatLinkedRefNo(this.rows[this.activeFacilityUuid]));
      }
    },
    loadRetrieved: function loadRetrieved() {
      var _this15 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee13() {
        var _dossierCredit$create, dossierCredit, tb8, ligneCaisses, ligneSignees, concoursArr, concourDetails, lentb, createdKey, createdKeyArr;
        return _regeneratorRuntime().wrap(function _callee13$(_context13) {
          while (1) switch (_context13.prev = _context13.next) {
            case 0:
              _context13.prev = 0;
              _this15.isLoading = true;
              dossierCredit = _this15.meta_data['dossier_credit'];
              _this15.facilities = [];
              tb8 = (dossierCredit === null || dossierCredit === void 0 ? void 0 : dossierCredit.cred_pub_tb_8) || {};
              ligneCaisses = (tb8 === null || tb8 === void 0 ? void 0 : tb8.nouvelles_lignes_caisse) || [];
              ligneSignees = (tb8 === null || tb8 === void 0 ? void 0 : tb8.nouvelles_lignes_signature) || [];
              concoursArr = ligneCaisses.concat(ligneSignees.map(function (ls) {
                return _objectSpread(_objectSpread({}, ls), {}, {
                  which_line: 'Signature'
                });
              })).filter(function (c) {
                return (c === null || c === void 0 ? void 0 : c.ligne) || (c === null || c === void 0 ? void 0 : c.proposition);
              }).map(function (c) {
                return _objectSpread(_objectSpread({}, c), {}, {
                  uuid: c.id || _helpers_helper__WEBPACK_IMPORTED_MODULE_0__["default"].generateUUID(),
                  montant_credit: moneyToNumber(c.proposition || ''),
                  which_line: c.which_line || 'Caisse'
                });
              });
              concourDetails = [];
              if (!(!concoursArr || !Array.isArray(concoursArr) || concoursArr.length === 0)) {
                _context13.next = 12;
                break;
              }
              _this15.fatalError = 'Aucun crédit n\'a été demandé, veuillez contacter les départements concernés.';
              return _context13.abrupt("return");
            case 12:
              _this15.facilities = concoursArr.map(function (concour, index) {
                return {
                  uuid: (concour === null || concour === void 0 ? void 0 : concour.uuid) || _helpers_helper__WEBPACK_IMPORTED_MODULE_0__["default"].generateUUID(),
                  nature: (concour === null || concour === void 0 ? void 0 : concour.ligne) || 'Non renseigné',
                  montant: getMontantLigne(_this15.meta_data["dossier_credit"], index) || moneyToNumber((concour === null || concour === void 0 ? void 0 : concour.proposition) || ''),
                  which_line: (concour === null || concour === void 0 ? void 0 : concour.which_line) || 'Caisse'
                };
              });
              _this15.concours = Object.fromEntries(concoursArr.map(function (concour) {
                return [concour.uuid, concour];
              }));
              lentb = dossierCredit['tbs_in_use'];
              createdKey = _this15.tb_name;
              createdKeyArr = createdKey.split('tb');
              createdKey = 'cred_pub_tb_' + createdKeyArr[1];
              if (!(lentb.length > 0 && (_dossierCredit$create = dossierCredit[createdKey]) !== null && _dossierCredit$create !== void 0 && (_dossierCredit$create = _dossierCredit$create.rows) !== null && _dossierCredit$create !== void 0 && _dossierCredit$create.length)) {
                _context13.next = 28;
                break;
              }
              concoursArr.forEach(function (concour, index) {
                var concourDetail = concourDetails.find(function (detail) {
                  return detail.facilite_uuid === concour.uuid;
                }) || {};
                _this15.initHeaders(index, dossierCredit, concour, concourDetail);
              });
              _this15.formDataToBeWatched = dossierCredit[createdKey];
              _context13.t0 = Object;
              _context13.next = 24;
              return Promise.all(_this15.formDataToBeWatched.rows.map(/*#__PURE__*/function () {
                var _ref24 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee11(row, index) {
                  var concour, rachatSets, maxRachatIndex, context, collateral, collateralKeys;
                  return _regeneratorRuntime().wrap(function _callee11$(_context11) {
                    while (1) switch (_context11.prev = _context11.next) {
                      case 0:
                        concour = _this15.concours[row.facility_uuid] || {};
                        row.n = index + 1;
                        row.devise = _this15.devise;
                        rachatSets = row.rachats || [];
                        maxRachatIndex = 0;
                        if (!Array.isArray(rachatSets) || !rachatSets.length) {
                          maxRachatIndex = 1;
                          // Convert flat rachat fields to rachatSets array
                          Object.keys(row).forEach(function (key) {
                            var regexString = RACHAT_FIELD_KEYS.join("|");
                            var regex = new RegExp("^(".concat(regexString, ")_(\\d+)$"));
                            // const match = key.match(/^(principal_rachat|interet_rachat|tva_rachat|penalite_rbsmt_r|penalite_retard_r|montant_ttc_rachat|n_compte_pret|commentaire_rbsmt_anticipe)_(\d+)$/);
                            var match = key.match(regex);
                            if (match) {
                              var field = match[1].replace(/_r$/, '');
                              var rachatIndex = parseInt(match[2]);
                              maxRachatIndex = Math.max(maxRachatIndex, rachatIndex);
                              if (!rachatSets[rachatIndex - 1]) {
                                rachatSets[rachatIndex - 1] = createRachatSet(concour);
                              }
                              rachatSets[rachatIndex - 1][field] = row[key];
                            }
                          });
                        }

                        // Ensure at least one rachat set
                        row.rachats = rachatSets.length > 0 ? rachatSets : [createRachatSet(concour)];

                        // Remove old flat rachat fields
                        if (maxRachatIndex) {
                          RACHAT_FIELD_KEYS.forEach(function (field) {
                            for (var i = 1; i <= maxRachatIndex; i++) {
                              delete row["".concat(field, "_").concat(i)];
                            }
                          });
                        }
                        context = _this15.getContext({
                          row: row
                        });
                        if (!Array.isArray(row.collaterals) || !row.collaterals.length) {
                          row.collaterals = [createCollateralSet(concour, dossierCredit, context)];
                        }
                        collateral = row.collaterals[0];
                        collateralKeys = Object.keys(collateral);
                        row.collaterals = row.collaterals.map(function (collateral) {
                          var classCode = collateral.class_code || '';
                          if (classCode) {
                            _this15.activeCollateralHasCPS = _this15.isCpsCollateral(collateral) || _this15.activeCollateralHasCPS;
                            var inferedValues = _this15.inferCollateralTypeValues(classCode);
                            for (var _i2 = 0, _Object$entries2 = Object.entries(inferedValues); _i2 < _Object$entries2.length; _i2++) {
                              var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i2], 2),
                                k = _Object$entries2$_i[0],
                                v = _Object$entries2$_i[1];
                              if (collateralKeys.includes(k)) {
                                collateral[k] = v;
                              }
                            }
                          }
                          return collateral;
                        });

                        // UDEs
                        if (!(!row.udes || _typeof(row.udes) !== 'object')) {
                          _context11.next = 17;
                          break;
                        }
                        _context11.next = 16;
                        return initUdeHeaders(concour, dossierCredit, context);
                      case 16:
                        row.udes = _context11.sent;
                      case 17:
                        return _context11.abrupt("return", [row.facility_uuid, row]);
                      case 18:
                      case "end":
                        return _context11.stop();
                    }
                  }, _callee11);
                }));
                return function (_x7, _x8) {
                  return _ref24.apply(this, arguments);
                };
              }()));
            case 24:
              _context13.t1 = _context13.sent;
              _this15.rows = _context13.t0.fromEntries.call(_context13.t0, _context13.t1);
              _context13.next = 33;
              break;
            case 28:
              _context13.t2 = Object;
              _context13.next = 31;
              return Promise.all(concoursArr.map(/*#__PURE__*/function () {
                var _ref25 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee12(concour, index) {
                  var concourDetail, row;
                  return _regeneratorRuntime().wrap(function _callee12$(_context12) {
                    while (1) switch (_context12.prev = _context12.next) {
                      case 0:
                        concourDetail = concourDetails.find(function (detail) {
                          return detail.facilite_uuid === concour.uuid;
                        }) || {};
                        _context12.next = 3;
                        return _this15.rowFactory(index, dossierCredit, concour, concourDetail);
                      case 3:
                        row = _context12.sent;
                        row.n = index + 1;
                        row.devise = _this15.devise;
                        return _context12.abrupt("return", [row.facility_uuid, row]);
                      case 7:
                      case "end":
                        return _context12.stop();
                    }
                  }, _callee12);
                }));
                return function (_x9, _x0) {
                  return _ref25.apply(this, arguments);
                };
              }()));
            case 31:
              _context13.t3 = _context13.sent;
              _this15.rows = _context13.t2.fromEntries.call(_context13.t2, _context13.t3);
            case 33:
              // Ensure rows are initialized
              Object.entries(_this15.rows || {}).forEach(function (_ref26) {
                var _this15$facilities$fi, _this15$authcheckUsr;
                var _ref27 = _slicedToArray(_ref26, 2),
                  facilityUuid = _ref27[0],
                  row = _ref27[1];
                var whichLine = ((_this15$facilities$fi = _this15.facilities.find(function (f) {
                  return f.uuid === facilityUuid;
                })) === null || _this15$facilities$fi === void 0 ? void 0 : _this15$facilities$fi.which_line) || 'Caisse';
                switch (whichLine.toLowerCase()) {
                  case 'signature':
                    row.which_line = 'signature';
                    break;
                  case 'caisse':
                  default:
                    row.which_line = 'caisse';
                }

                // Code produit
                if (row.code_produit) {
                  var inferedValues = _this15.inferCollateralValues(row.code_produit);

                  // row.line_code_autorisation = inferedValues.line_code_autorisation || '';
                  // row.class_code_autorisation = inferedValues.class_code_autorisation || '';
                  row.description_code_produit = inferedValues.description_code_produit || '';
                  row.linked_ref_no = concatLinkedRefNo(row);
                }

                // securiteDocumentations
                _this15.updateSecuriteDocumentations(row.securiteDocumentations, row.facility_uuid, _this15.rows, false);

                // Compute TTC fields
                var tva = moneyToNumber(((_this15$authcheckUsr = _this15.authcheckUsr) === null || _this15$authcheckUsr === void 0 ? void 0 : _this15$authcheckUsr.tva) || 19.25);
                var htTtcFields = [['frais_dossier', 'frais_dossier_ttc']];
                htTtcFields.forEach(function (_ref28) {
                  var _ref29 = _slicedToArray(_ref28, 2),
                    htField = _ref29[0],
                    ttcField = _ref29[1];
                  var value = row[htField];
                  if (value !== undefined) {
                    row[ttcField] = computeTtcFromHtAndTva(value, tva);
                  }
                });
              });
              _context13.next = 39;
              break;
            case 36:
              _context13.prev = 36;
              _context13.t4 = _context13["catch"](0);
              _this15.handleError(_context13.t4, 'Erreur lors du chargement des données');
            case 39:
              _context13.prev = 39;
              _this15.isLoading = false;
              return _context13.finish(39);
            case 42:
            case "end":
              return _context13.stop();
          }
        }, _callee13, null, [[0, 36, 39, 42]]);
      }))();
    },
    getNomCps: function getNomCps(cUUID) {
      var _this$dossier_credit2, _this$dossier_credit3, _this$dossier_credit4;
      var tbs = [(_this$dossier_credit2 = this.dossier_credit) === null || _this$dossier_credit2 === void 0 ? void 0 : _this$dossier_credit2.cred_pub_tb_15601, (_this$dossier_credit3 = this.dossier_credit) === null || _this$dossier_credit3 === void 0 ? void 0 : _this$dossier_credit3.cred_pub_tb_14072, (_this$dossier_credit4 = this.dossier_credit) === null || _this$dossier_credit4 === void 0 ? void 0 : _this$dossier_credit4.cred_pub_tb_120008];
      return _getNomCps(tbs, cUUID);
    },
    _syncRowsToFormData: function _syncRowsToFormData(newVal) {
      this.formDataToBeWatched.rows = Object.values(newVal).filter(function (value) {
        return value === null || value === void 0 ? void 0 : value.facility_uuid;
      });
    },
    tableClosedOrOpened: function tableClosedOrOpened() {
      this.seen = this.fetchClosedTables(this.tb_name + this.meta_data['cred_pub_key']);
    },
    send2Backend: function send2Backend(res, newVal, oldVal) {
      var _this16 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee14() {
        var response, tbFetchedData;
        return _regeneratorRuntime().wrap(function _callee14$(_context14) {
          while (1) switch (_context14.prev = _context14.next) {
            case 0:
              _context14.prev = 0;
              _this16.authcheck = true;
              _this16.authcheckUsr = res.data;
              _this16.authcheckStatus = res.status;
              if (!(_this16.authcheckStatus === 401)) {
                _context14.next = 7;
                break;
              }
              _this16.$toasted.error('Non authentifié');
              return _context14.abrupt("return");
            case 7:
              if (!_this16.authcheck) {
                _context14.next = 17;
                break;
              }
              _this16.$emit('autosaving');
              _context14.next = 11;
              return _this16.$axios.post(_this16.ebapisHost + 'creditbuilder/api/v1/autosaving/', {
                user: _this16.authcheckUsr,
                meta_parseable: _this16.meta_parseable,
                filledData: _this16.formDataToBeWatched,
                loadDossier: true
              });
            case 11:
              response = _context14.sent;
              _this16.$emit('autosaving');
              tbFetchedData = response.data;
              if (tbFetchedData['is_success']) {
                _this16.dossier_credit = tbFetchedData['dossier_credit'];
                _this16.$emit('load-shell');
              }
              _context14.next = 18;
              break;
            case 17:
              _this16.$toasted.error('Non authentifié');
            case 18:
              _context14.next = 23;
              break;
            case 20:
              _context14.prev = 20;
              _context14.t0 = _context14["catch"](0);
              _this16.handleError(_context14.t0, 'Erreur lors de l\'envoi des données');
            case 23:
            case "end":
              return _context14.stop();
          }
        }, _callee14, null, [[0, 20]]);
      }))();
    },
    retract: function retract() {
      this.seen = !this.seen;
      var tableState = {
        tb_name: this.tb_name + this.meta_data['cred_pub_key'],
        status: this.seen
      };
      EventBus.$emit('savedclosed-table', tableState);
    },
    defaultRetract: function defaultRetract(rc, ra) {
      if (ra != null) {
        this.seen = rc;
        var tableState = {
          tb_name: this.tb_name + this.meta_data['cred_pub_key'],
          status: this.seen
        };
        EventBus.$emit('savedclosed-table', tableState);
      }
    },
    toggleRachatSection: function toggleRachatSection() {
      this.showRachatSection = !this.showRachatSection;
    },
    loadTbAttrs: function loadTbAttrs() {
      var subtitles = [];
      var topdivel = this.$refs.topdiv;
      var subtitleElements = document.querySelectorAll('.subdiv' + this.tb_name);
      subtitleElements.forEach(function (e) {
        return subtitles.push(e.innerText);
      });
      var payload = {
        name_of_title: topdivel === null || topdivel === void 0 ? void 0 : topdivel.innerText,
        list_of_content: subtitles,
        id: 'ca6-head'
      };
      this.$emit('load-buffer', payload);
    },
    somX3: function somX3(ob, key) {
      return ob.reduce(function (sum, elm) {
        var result = String(elm[key]).replace(/\s+/g, '');
        return sum + (result === '' ? 0 : parseInt(result));
      }, 0);
    },
    somX4: function somX4(ob, key) {
      return ob.replace(/\s+/g, '') + key.replace(/\s+/g, '');
    },
    openNotesModal: function openNotesModal() {
      this.listingNote = true;
      this.$modal.show(this.tb_name);
    },
    handleError: function handleError(error, message) {
      console.error(error);
      this.fatalError = "".concat(message, ": ").concat(error.message || 'Une erreur est survenue');
      this.$toasted.error(this.fatalError);
    },
    addSecuriteDocumentation: function addSecuriteDocumentation() {
      if (!this.activeFacilityUuid) return;
      vue__WEBPACK_IMPORTED_MODULE_5__["default"].set(this.rows[this.activeFacilityUuid], 'securiteDocumentations', [].concat(_toConsumableArray(this.rows[this.activeFacilityUuid].securiteDocumentations), [createSecuriteDocumentation()]));
    },
    removeSecuriteDocumentation: function removeSecuriteDocumentation(index) {
      if (!this.activeFacilityUuid || this.rows[this.activeFacilityUuid].securiteDocumentations[index].isDefault) return;
      var documentations = _toConsumableArray(this.rows[this.activeFacilityUuid].securiteDocumentations);
      documentations.splice(index, 1);
      vue__WEBPACK_IMPORTED_MODULE_5__["default"].set(this.rows[this.activeFacilityUuid], 'securiteDocumentations', documentations);
    },
    handleSecuriteDocumentationChange: function handleSecuriteDocumentationChange(value, index, key) {
      if (!this.activeFacilityUuid) return;
      vue__WEBPACK_IMPORTED_MODULE_5__["default"].set(this.rows[this.activeFacilityUuid].securiteDocumentations[index], key, value);
    },
    handleUdeChange: function handleUdeChange(value, key, field) {
      if (!this.activeFacilityUuid) return;
      vue__WEBPACK_IMPORTED_MODULE_5__["default"].set(this.rows[this.activeFacilityUuid].udes[key], field, value);
      var header = this.staticUdeHeaders.find(function (h) {
        return h.key === key;
      });
      if (header && typeof header.onChange === 'function') {
        var context = this.getContext();
        header.onChange(value, this.rows[this.activeFacilityUuid], context);
      }
    },
    addUdeSet: function addUdeSet() {
      if (!this.activeFacilityUuid) return;
      var row = this.rows[this.activeFacilityUuid] || {};
      var newUde = createUde(row);
      vue__WEBPACK_IMPORTED_MODULE_5__["default"].set(this.rows[this.activeFacilityUuid].udes, newUde.id, newUde.val);
    },
    removeUdeSet: function removeUdeSet(key) {
      if (!this.activeFacilityUuid) return;
      var udes = _objectSpread({}, this.rows[this.activeFacilityUuid].udes);
      delete udes[key];
      vue__WEBPACK_IMPORTED_MODULE_5__["default"].set(this.rows[this.activeFacilityUuid], 'udes', udes);
    },
    formatDocumentation: function formatDocumentation(doc) {
      if (!doc.formulation || !doc.data) return doc.formulation;
      var formatted = doc.formulation;
      for (var _i3 = 0, _Object$entries3 = Object.entries(doc.data); _i3 < _Object$entries3.length; _i3++) {
        var _Object$entries3$_i = _slicedToArray(_Object$entries3[_i3], 2),
          key = _Object$entries3$_i[0],
          value = _Object$entries3$_i[1];
        formatted = formatted.replace("{".concat(key, "}"), value || '');
      }
      return formatted;
    },
    updateSecuriteDocumentations: function updateSecuriteDocumentations() {
      var _this17 = this;
      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      if (!this.activeFacilityUuid || !this.rows[this.activeFacilityUuid]) {
        return;
      }
      var row = this.rows[this.activeFacilityUuid];
      var nomCps = (data === null || data === void 0 ? void 0 : data.nom_cps) || row.nom_cps || '';
      var updatedDocs = row.securiteDocumentations.map(function (doc) {
        if (doc.libelle === "CPS") {
          return _objectSpread(_objectSpread({}, doc), {}, {
            formulation: "CPS de M. ".concat(nomCps, " ").concat(_this17.devise, " ").concat(row.montant_pret || ''),
            data: _objectSpread(_objectSpread({}, doc.data), {}, {
              nom_cps: nomCps,
              montant_pret: row.montant_pret || ''
            })
          });
        }
        return doc;
      });
      vue__WEBPACK_IMPORTED_MODULE_5__["default"].set(this.rows[this.activeFacilityUuid], 'securiteDocumentations', updatedDocs);
    },
    emitter: function emitter(event, payload) {
      EventBus.$emit('live-offview-me-mp9', [event, payload]);
    },
    releaseTbSequences: function releaseTbSequences() {
      var _this18 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee15() {
        var rows, collateralSequences, codePoolSequences, releaseSequence, allSequences;
        return _regeneratorRuntime().wrap(function _callee15$(_context15) {
          while (1) switch (_context15.prev = _context15.next) {
            case 0:
              _context15.prev = 0;
              rows = _this18.formDataToBeWatched.rows || [];
              if (!(rows.length === 0)) {
                _context15.next = 4;
                break;
              }
              return _context15.abrupt("return", true);
            case 4:
              collateralSequences = rows.flatMap(function (row) {
                var _row$collaterals;
                return ((_row$collaterals = row.collaterals) === null || _row$collaterals === void 0 ? void 0 : _row$collaterals.map(function (collateral) {
                  return _services_afg_atomic_sequence_service__WEBPACK_IMPORTED_MODULE_3__.collateralSequenceService.getSequenceFromCode(collateral.code_collateral);
                })) || [];
              }).filter(Boolean);
              codePoolSequences = rows.map(function (row) {
                return _services_afg_atomic_sequence_service__WEBPACK_IMPORTED_MODULE_3__.codePoolSequenceService.getSequenceFromCode(row.code_groupe_pool_garantie);
              }).filter(Boolean);
              releaseSequence = function releaseSequence(service, sequences) {
                return sequences.map(function (sequence) {
                  return service.releaseSequence(sequence);
                });
              };
              allSequences = [].concat(_toConsumableArray(releaseSequence(_services_afg_atomic_sequence_service__WEBPACK_IMPORTED_MODULE_3__.collateralSequenceService, collateralSequences)), _toConsumableArray(releaseSequence(_services_afg_atomic_sequence_service__WEBPACK_IMPORTED_MODULE_3__.codePoolSequenceService, codePoolSequences)));
              if (!(allSequences.length === 0)) {
                _context15.next = 10;
                break;
              }
              return _context15.abrupt("return", true);
            case 10:
              _context15.next = 12;
              return Promise.all(allSequences);
            case 12:
              return _context15.abrupt("return", true);
            case 15:
              _context15.prev = 15;
              _context15.t0 = _context15["catch"](0);
              console.error('Erreur lors de la libération des séquences de collatéraux:', _context15.t0);
              return _context15.abrupt("return", false);
            case 19:
            case "end":
              return _context15.stop();
          }
        }, _callee15, null, [[0, 15]]);
      }))();
    }
  },
  watch: {
    formDataToBeWatched: {
      handler: function handler(newVal, oldVal) {
        // this.send2Backend({ data: this.authcheckUsr, status: this.authcheckStatus }, newVal, oldVal);
        this.autosaving(newVal, oldVal);
        this.emitter(EVENTS.TB_UPDATED, newVal);
      },
      deep: true
    },
    rows: {
      handler: function handler(newVal) {
        this.syncRowsToFormData(newVal);
      },
      deep: true
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/case/Corporate/ME-MPC0.vue?vue&type=template&id=8986ee58&scoped=true":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/case/Corporate/ME-MPC0.vue?vue&type=template&id=8986ee58&scoped=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var render = function render() {
  var _vm$formDataToBeWatch, _vm$rows$_vm$activeFa, _vm$rows$_vm$activeFa2, _vm$rows$_vm$activeFa7, _vm$rows$_vm$activeFa8, _vm$rows$_vm$activeFa9, _vm$rows$_vm$activeFa0, _vm$rows$_vm$activeFa1, _vm$rows$_vm$activeFa12, _vm$rows$_vm$activeFa14, _vm$rows$_vm$activeFa15, _vm$rows$_vm$activeFa16, _vm$rows$_vm$activeFa17, _vm$rows$_vm$activeFa18, _vm$rows$_vm$activeFa19, _vm$formDataToBeWatch2;
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    on: {
      contextmenu: function contextmenu($event) {
        return _vm.$refs.menu.open($event, _vm.tb_name);
      }
    }
  }, [_c("div", {
    staticClass: "row bg-light position-relative",
    staticStyle: {
      width: "100%",
      height: "100%"
    }
  }, [_c("ContextMenu", {
    ref: "menu",
    attrs: {
      cred_pub_key: _vm.meta_parseable.cred_pub_key,
      id: _vm.tb_name,
      contextList: _vm.contextList
    }
  }), _vm._v(" "), _vm.seen ? _c("div", {
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
      id: "ca6-head"
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col"
  }, [_vm._v("\n                            " + _vm._s(_vm.tb_display_name) + " : Saisie / Encodage\n                        ")]), _vm._v(" "), _c("div", {
    staticClass: "col-auto"
  }, [((_vm$formDataToBeWatch = _vm.formDataToBeWatched.notes) === null || _vm$formDataToBeWatch === void 0 ? void 0 : _vm$formDataToBeWatch.length) > 0 ? _c("div", {
    staticStyle: {
      display: "inline-block",
      position: "relative"
    }
  }, [_c("span", {
    attrs: {
      type: "button",
      role: "button",
      "aria-label": "View notes"
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
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "badge-sm pb-3"
  }, [_vm._v(_vm._s(_vm.formDataToBeWatched.notes.length))])])]) : _vm._e(), _vm._v(" "), _c("chevron-up-icon", {
    staticClass: "custom-class",
    staticStyle: {
      cursor: "pointer"
    },
    attrs: {
      size: "21",
      "aria-label": "Collapse table"
    },
    on: {
      click: _vm.retract
    }
  })], 1)])])]), _vm._v(" "), _vm.fatalError ? _c("div", {
    staticClass: "text-center"
  }, [_c("alert-circle-icon", {
    staticStyle: {
      color: "#e74c3c",
      height: "85px !important",
      width: "60px"
    },
    attrs: {
      size: "1.5x"
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "m-1"
  }, [_c("p", {
    staticStyle: {
      "font-style": "italic"
    },
    attrs: {
      role: "alert"
    }
  }, [_vm._v(_vm._s(_vm.fatalError))])])], 1) : !_vm.isLoading ? _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "table-responsive"
  }, [_c("div", {
    staticClass: "facility-list",
    attrs: {
      role: "list"
    }
  }, _vm._l(_vm.facilities, function (facility) {
    return _c("div", {
      key: facility.uuid,
      staticClass: "facility-row",
      "class": {
        active: _vm.activeFacilityUuid === facility.uuid
      },
      attrs: {
        role: "listitem"
      }
    }, [_c("input", {
      staticClass: "form-control",
      style: {
        minWidth: "150px"
      },
      attrs: {
        type: "text",
        disabled: "",
        readonly: "",
        "aria-label": "Facility nature"
      },
      domProps: {
        value: facility.nature
      }
    }), _vm._v(" "), _c("currency-input3", {
      staticClass: "form-control",
      style: {
        minWidth: "150px"
      },
      attrs: {
        value: facility.montant,
        disabled: "",
        readonly: "",
        "aria-label": "Facility amount"
      }
    }), _vm._v(" "), _c("input", {
      staticClass: "form-control",
      style: {
        minWidth: "150px"
      },
      attrs: {
        type: "text",
        disabled: "",
        readonly: "",
        "aria-label": "Facility which line"
      },
      domProps: {
        value: facility.which_line
      }
    }), _vm._v(" "), _c("button", {
      staticClass: "btn load-facility-btn",
      attrs: {
        type: "button",
        "aria-label": _vm.activeFacilityUuid === facility.uuid ? "Disable editing" : "Load for editing"
      },
      on: {
        click: function click($event) {
          return _vm.setActiveFacility(facility.uuid);
        }
      }
    }, [_vm._v("\n                                " + _vm._s(_vm.activeFacilityUuid === facility.uuid ? "Désactiver" : "Charger pour édition") + "\n                            ")])], 1);
  }), 0)]), _vm._v(" "), _c("div", {
    staticClass: "table-responsive mt-3"
  }, [_c("p", {
    staticClass: "fs-small fst-italic mb-2",
    "class": {
      "text-danger": !_vm.activeFacilityUuid
    },
    attrs: {
      role: "status"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.activeFacilityUuid ? "Édition activée" : "Édition désactivée, veuillez charger une facilité pour activer l'édition.") + "\n                    ")]), _vm._v(" "), _c("table", {
    staticClass: "table table-bordered"
  }, [_vm._m(0), _vm._v(" "), _c("tbody", [_c("tr", [_c("td", [_c("Combobox", {
    attrs: {
      options: _vm.creditMapping,
      displayField: "PRODUCT_CODE",
      inputClass: ["custom-input", {
        accentuate: _vm.activeFacilityUuid
      }],
      disabled: !_vm.activeFacilityUuid,
      valueField: "PRODUCT_CODE",
      noResultsText: "Aucun résultat",
      placeholder: "Rechercher/Sélectionner un code produit",
      emptySearchOnBlur: true,
      value: (_vm$rows$_vm$activeFa = _vm.rows[_vm.activeFacilityUuid]) === null || _vm$rows$_vm$activeFa === void 0 ? void 0 : _vm$rows$_vm$activeFa.code_produit
    },
    on: {
      input: function input($event) {
        return _vm.handleFieldChange($event, "code_produit");
      }
    }
  })], 1), _vm._v(" "), _c("td", [_c("textarea", {
    staticClass: "form-control",
    staticStyle: {
      "min-height": "50px"
    },
    attrs: {
      rows: "2",
      disabled: !_vm.activeFacilityUuid || true
    },
    domProps: {
      value: (_vm$rows$_vm$activeFa2 = _vm.rows[_vm.activeFacilityUuid]) === null || _vm$rows$_vm$activeFa2 === void 0 ? void 0 : _vm$rows$_vm$activeFa2.description_code_produit
    },
    on: {
      input: function input($event) {
        var _$event$target;
        return _vm.handleFieldChange((_$event$target = $event.target) === null || _$event$target === void 0 ? void 0 : _$event$target.value, "description_code_produit");
      }
    }
  })])])])]), _vm._v(" "), _c("div", {
    staticClass: "fields-grid",
    "class": {
      disabled: !_vm.activeFacilityUuid
    },
    attrs: {
      role: "form"
    }
  }, [_vm._l(_vm.visibleHeaders, function (header, hIndex) {
    var _vm$rows$_vm$activeFa3, _vm$rows$_vm$activeFa4, _vm$rows$_vm$activeFa5, _vm$rows$_vm$activeFa6;
    return [!header.hidden ? _c("div", {
      key: "field-item-".concat(hIndex),
      staticClass: "field-item"
    }, [["currency", "percentage"].includes(header.type) ? [_c("label", {
      attrs: {
        "for": header.key
      }
    }, [_vm._v(_vm._s(header.label))]), _vm._v(" "), _c("currency-input3", {
      staticClass: "form-control",
      "class": _objectSpread({
        "disabled-input": !_vm.activeFacilityUuid
      }, header.inputClass || {}),
      style: _objectSpread(_objectSpread({
        minWidth: "150px"
      }, header.style || {}), header.inputStyle || {}),
      attrs: {
        value: (_vm$rows$_vm$activeFa3 = _vm.rows[_vm.activeFacilityUuid]) === null || _vm$rows$_vm$activeFa3 === void 0 ? void 0 : _vm$rows$_vm$activeFa3[header.key],
        id: header.key,
        disabled: header.disabled || !_vm.activeFacilityUuid,
        readonly: header.readonly || !_vm.activeFacilityUuid,
        "aria-disabled": header.disabled || !_vm.activeFacilityUuid,
        "aria-label": header.label,
        percentage: header.type === "percentage"
      },
      on: {
        input: function input($event) {
          return _vm.handleFieldChange($event[1], header.key);
        }
      }
    })] : header.type === "date" ? [_c("label", {
      attrs: {
        "for": header.key
      }
    }, [_vm._v(_vm._s(header.label))]), _vm._v(" "), _c("date-input", {
      "class": _objectSpread({
        "disabled-input": !_vm.activeFacilityUuid
      }, header.inputClass || {}),
      style: _objectSpread(_objectSpread({
        minWidth: "150px"
      }, header.style || {}), header.inputStyle || {}),
      attrs: {
        value: (_vm$rows$_vm$activeFa4 = _vm.rows[_vm.activeFacilityUuid]) === null || _vm$rows$_vm$activeFa4 === void 0 ? void 0 : _vm$rows$_vm$activeFa4[header.key],
        id: header.key,
        disabled: header.disabled || !_vm.activeFacilityUuid,
        readonly: header.readonly || !_vm.activeFacilityUuid,
        background: _vm.activeFacilityUuid ? header.background : undefined,
        "aria-disabled": header.disabled || !_vm.activeFacilityUuid,
        "aria-label": header.label
      },
      on: {
        input: function input($event) {
          return _vm.handleFieldChange($event[1], header.key);
        }
      }
    })] : header.type === "select" ? [_c("label", {
      attrs: {
        "for": header.key
      }
    }, [_vm._v(_vm._s(header.label))]), _vm._v(" "), _c("select", {
      staticClass: "form-control",
      "class": _objectSpread({
        "disabled-input": !_vm.activeFacilityUuid
      }, header.inputClass || {}),
      style: _objectSpread(_objectSpread({
        minWidth: "150px"
      }, header.style || {}), header.inputStyle || {}),
      attrs: {
        id: header.key,
        disabled: header.disabled || !_vm.activeFacilityUuid,
        "aria-disabled": header.disabled || !_vm.activeFacilityUuid,
        "aria-label": header.label
      },
      domProps: {
        value: (_vm$rows$_vm$activeFa5 = _vm.rows[_vm.activeFacilityUuid]) === null || _vm$rows$_vm$activeFa5 === void 0 ? void 0 : _vm$rows$_vm$activeFa5[header.key]
      },
      on: {
        change: function change($event) {
          var _$event$target2;
          return _vm.handleFieldChange((_$event$target2 = $event.target) === null || _$event$target2 === void 0 ? void 0 : _$event$target2.value, header.key);
        }
      }
    }, _vm._l(header.options, function (option, index) {
      return _c("option", {
        key: "".concat(header.key, "-").concat(index),
        domProps: {
          value: option.value || option
        }
      }, [_vm._v("\n                                            " + _vm._s(option.label || option) + "\n                                        ")]);
    }), 0)] : [_c("label", {
      attrs: {
        "for": header.key
      }
    }, [_vm._v(_vm._s(header.label))]), _vm._v(" "), _c("input", {
      staticClass: "form-control",
      "class": _objectSpread({
        "disabled-input": !_vm.activeFacilityUuid
      }, header.inputClass || {}),
      style: _objectSpread(_objectSpread({
        minWidth: "150px"
      }, header.style || {}), header.inputStyle || {}),
      attrs: {
        type: header.type || "text",
        id: header.key,
        disabled: header.disabled || !_vm.activeFacilityUuid,
        readonly: header.readonly || !_vm.activeFacilityUuid,
        "aria-disabled": header.disabled || !_vm.activeFacilityUuid,
        "aria-label": header.label
      },
      domProps: {
        value: (_vm$rows$_vm$activeFa6 = _vm.rows[_vm.activeFacilityUuid]) === null || _vm$rows$_vm$activeFa6 === void 0 ? void 0 : _vm$rows$_vm$activeFa6[header.key]
      },
      on: {
        input: function input($event) {
          var _$event$target3;
          return _vm.handleFieldChange((_$event$target3 = $event.target) === null || _$event$target3 === void 0 ? void 0 : _$event$target3.value, header.key);
        }
      }
    })]], 2) : _vm._e()];
  })], 2), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "relook-header",
    on: {
      click: function click($event) {
        _vm.seen7 = !_vm.seen7;
      }
    }
  }, [_c("h6", {
    staticClass: "text-uppercase",
    "class": "subdiv" + _vm.tb_name
  }, [_vm._v("\n                                Détail Facilité\n                                "), _vm.seen7 ? _c("chevron-up-icon", {
    staticClass: "custom-class",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    },
    attrs: {
      size: "21",
      "aria-label": "Collapse rachat section"
    }
  }) : _c("chevron-down-icon", {
    staticClass: "custom-class",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    },
    attrs: {
      size: "21",
      "aria-label": "Expand rachat section"
    }
  })], 1)]), _vm._v(" "), _vm.seen7 ? _c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-bordered"
  }, [_vm._m(1), _vm._v(" "), _c("tbody", [_c("tr", [_c("td", [_c("input", {
    staticClass: "form-control accentuate",
    attrs: {
      type: "text",
      disabled: !_vm.activeFacilityUuid
    },
    domProps: {
      value: (_vm$rows$_vm$activeFa7 = _vm.rows[_vm.activeFacilityUuid]) === null || _vm$rows$_vm$activeFa7 === void 0 ? void 0 : _vm$rows$_vm$activeFa7.class_code_autorisation
    },
    on: {
      input: function input($event) {
        var _$event$target4;
        return _vm.handleFieldChange((_$event$target4 = $event.target) === null || _$event$target4 === void 0 ? void 0 : _$event$target4.value, "class_code_autorisation");
      }
    }
  })]), _vm._v(" "), _c("td", [_c("currency-input3", {
    staticClass: "form-control accentuate",
    attrs: {
      value: (_vm$rows$_vm$activeFa8 = _vm.rows[_vm.activeFacilityUuid]) === null || _vm$rows$_vm$activeFa8 === void 0 ? void 0 : _vm$rows$_vm$activeFa8.montant_pret,
      disabled: !_vm.activeFacilityUuid
    },
    on: {
      input: function input($event) {
        return _vm.handleFieldChange($event[1], "montant_pret");
      }
    }
  })], 1), _vm._v(" "), _c("td", [_c("input", {
    staticClass: "form-control accentuate",
    attrs: {
      type: "text",
      disabled: !_vm.activeFacilityUuid
    },
    domProps: {
      value: (_vm$rows$_vm$activeFa9 = _vm.rows[_vm.activeFacilityUuid]) === null || _vm$rows$_vm$activeFa9 === void 0 ? void 0 : _vm$rows$_vm$activeFa9.line_code_autorisation
    },
    on: {
      input: function input($event) {
        var _$event$target5;
        return _vm.handleFieldChange((_$event$target5 = $event.target) === null || _$event$target5 === void 0 ? void 0 : _$event$target5.value, "line_code_autorisation");
      }
    }
  })]), _vm._v(" "), _c("td", [_c("input", {
    staticClass: "form-control",
    attrs: {
      type: "number",
      min: "1",
      max: "99",
      disabled: !_vm.activeFacilityUuid
    },
    domProps: {
      value: (_vm$rows$_vm$activeFa0 = _vm.rows[_vm.activeFacilityUuid]) === null || _vm$rows$_vm$activeFa0 === void 0 ? void 0 : _vm$rows$_vm$activeFa0.numero_sequence
    },
    on: {
      input: function input($event) {
        var _$event$target6;
        return _vm.handleFieldChange((_$event$target6 = $event.target) === null || _$event$target6 === void 0 ? void 0 : _$event$target6.value, "numero_sequence");
      }
    }
  })])])])])]) : _vm._e()]), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "relook-header",
    on: {
      click: function click($event) {
        _vm.seen2 = !_vm.seen2;
      }
    }
  }, [_c("h6", {
    staticClass: "text-uppercase",
    "class": "subdiv" + _vm.tb_name
  }, [_vm._v("\n                                Détail collatéral\n                                "), _vm.seen2 ? _c("chevron-up-icon", {
    staticClass: "custom-class",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    },
    attrs: {
      size: "21",
      "aria-label": "Collapse rachat section"
    }
  }) : _c("chevron-down-icon", {
    staticClass: "custom-class",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    },
    attrs: {
      size: "21",
      "aria-label": "Expand rachat section"
    }
  })], 1)]), _vm._v(" "), _vm.seen2 ? _c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-bordered"
  }, [_c("thead", [_c("tr", [_c("th", {
    staticClass: "th fw-bold",
    staticStyle: {
      "min-width": "180px"
    }
  }, [_vm._v("\n                                            Class Code\n                                        ")]), _vm._v(" "), _c("th", {
    staticClass: "th fw-bold",
    staticStyle: {
      "min-width": "180px"
    }
  }, [_vm._v("\n                                            Code Collateral\n                                        ")]), _vm._v(" "), _vm.activeCollateralHasCPS ? _c("th", {
    staticClass: "th fw-bold",
    staticStyle: {
      "min-width": "200px"
    }
  }, [_vm._v("\n                                            Nom CPS\n                                        ")]) : _vm._e(), _vm._v(" "), _c("th", {
    staticClass: "th fw-bold",
    staticStyle: {
      "min-width": "220px"
    }
  }, [_vm._v("\n                                            Catégorie Collateral\n                                        ")]), _vm._v(" "), _c("th", {
    staticClass: "th fw-bold",
    staticStyle: {
      "min-width": "200px"
    }
  }, [_vm._v("\n                                            Montant Garantie\n                                        ")]), _vm._v(" "), _c("th", {
    staticClass: "th fw-bold",
    staticStyle: {
      "min-width": "200px"
    }
  }, [_vm._v("\n                                            Montant du crédit\n                                        ")]), _vm._v(" "), _c("th", {
    staticClass: "th fw-bold",
    staticStyle: {
      "min-width": "200px"
    }
  }, [_vm._v("\n                                            Frais HT\n                                        ")]), _vm._v(" "), _c("th", {
    staticClass: "th fw-bold",
    staticStyle: {
      "min-width": "200px"
    }
  }, [_vm._v("\n                                            TVA\n                                        ")]), _vm._v(" "), _c("th", {
    staticClass: "th fw-bold",
    staticStyle: {
      "min-width": "200px"
    }
  }, [_vm._v("Description")]), _vm._v(" "), _c("th", {
    staticClass: "th fw-bold",
    staticStyle: {
      "min-width": "50px"
    }
  }, [_vm.rows[_vm.activeFacilityUuid] ? _c("button", {
    staticStyle: {
      "background-color": "#2c3e50",
      color: "#ffffff",
      "border-radius": "15%",
      border: "none"
    },
    attrs: {
      type: "button",
      title: "Ajouter un collatéral",
      disabled: !_vm.activeFacilityUuid || _vm.loadingCollateral,
      "aria-label": "Add new collateral set"
    },
    on: {
      click: _vm.addCollateralSet
    }
  }, [_vm.loadingCollateral ? _c("span", {
    staticClass: "spinner-border spinner-border-sm",
    attrs: {
      role: "status",
      "aria-hidden": "true"
    }
  }) : _c("plus-icon", {
    staticClass: "custom-class",
    attrs: {
      size: "21"
    }
  })], 1) : _vm._e()])])]), _vm._v(" "), _c("tbody", _vm._l((_vm$rows$_vm$activeFa1 = _vm.rows[_vm.activeFacilityUuid]) === null || _vm$rows$_vm$activeFa1 === void 0 ? void 0 : _vm$rows$_vm$activeFa1.collaterals, function (collateral, index) {
    var _vm$rows$_vm$activeFa10, _vm$rows$_vm$activeFa11;
    return _c("tr", {
      key: "collateral-".concat(index)
    }, [_c("td", {
      key: "collateral-class_code-".concat(index)
    }, [_c("Combobox", {
      attrs: {
        options: _vm.collateralTypes,
        displayField: "class_code",
        inputClass: ["custom-input"],
        disabled: !_vm.activeFacilityUuid || _vm.loadingCollateral,
        valueField: "class_code",
        noResultsText: "Aucun résultat",
        placeholder: "Rechercher/Sélectionner un class code",
        emptySearchOnBlur: true,
        value: collateral.class_code
      },
      on: {
        input: function input($event) {
          return _vm.handleCollateralChange($event, index, "class_code");
        }
      }
    })], 1), _vm._v(" "), _c("td", {
      key: "collateral-code_collateral-".concat(index)
    }, [_c("input", {
      staticClass: "form-control accentuate",
      attrs: {
        type: "text",
        disabled: !_vm.activeFacilityUuid
      },
      domProps: {
        value: collateral.code_collateral
      },
      on: {
        input: function input($event) {
          var _$event$target7;
          return _vm.handleCollateralChange((_$event$target7 = $event.target) === null || _$event$target7 === void 0 ? void 0 : _$event$target7.value, index, "code_collateral");
        }
      }
    })]), _vm._v(" "), _vm.activeCollateralHasCPS ? [!((_vm$rows$_vm$activeFa10 = _vm.rows[_vm.activeFacilityUuid]) !== null && _vm$rows$_vm$activeFa10 !== void 0 && (_vm$rows$_vm$activeFa10 = _vm$rows$_vm$activeFa10.cpss) !== null && _vm$rows$_vm$activeFa10 !== void 0 && _vm$rows$_vm$activeFa10.length) ? _c("td", {
      key: "collateral-nom_cps-".concat(index)
    }, [_c("select", {
      staticClass: "form-control",
      attrs: {
        disabled: !_vm.activeFacilityUuid || !_vm.activeCollateralHasCPS || _vm.loadingCollateral || !_vm.isCpsCollateral(collateral)
      },
      domProps: {
        value: collateral.nom_cps
      },
      on: {
        input: function input($event) {
          var _$event$target8;
          return _vm.handleCollateralChange((_$event$target8 = $event.target) === null || _$event$target8 === void 0 ? void 0 : _$event$target8.value, index, "nom_cps");
        }
      }
    }, [_c("option", {
      attrs: {
        value: ""
      }
    }, [_vm._v("Sélectionner une CPS")]), _vm._v(" "), _vm._l((_vm$rows$_vm$activeFa11 = _vm.rows[_vm.activeFacilityUuid]) === null || _vm$rows$_vm$activeFa11 === void 0 ? void 0 : _vm$rows$_vm$activeFa11.cpss, function (cps) {
      return _c("option", {
        key: cps.id,
        domProps: {
          value: cps.id
        }
      }, [_vm._v("\n                                                        " + _vm._s(cps.firstname) + " " + _vm._s(cps.lastname) + "\n                                                    ")]);
    })], 2)]) : _c("td", {
      key: "collateral-nom_cps-".concat(index)
    }, [_c("input", {
      staticClass: "form-control",
      attrs: {
        type: "text",
        disabled: !_vm.activeFacilityUuid || !_vm.activeCollateralHasCPS || _vm.loadingCollateral || !_vm.isCpsCollateral(collateral)
      },
      domProps: {
        value: collateral.nom_cps
      },
      on: {
        input: function input($event) {
          var _$event$target9;
          return _vm.handleCollateralChange((_$event$target9 = $event.target) === null || _$event$target9 === void 0 ? void 0 : _$event$target9.value, index, "nom_cps");
        }
      }
    })])] : _vm._e(), _vm._v(" "), _c("td", {
      key: "collateral-categorie_collateral-".concat(index)
    }, [_c("input", {
      staticClass: "form-control accentuate",
      attrs: {
        type: "text",
        disabled: !_vm.activeFacilityUuid
      },
      domProps: {
        value: collateral.categorie_collateral
      },
      on: {
        input: function input($event) {
          var _$event$target0;
          return _vm.handleCollateralChange((_$event$target0 = $event.target) === null || _$event$target0 === void 0 ? void 0 : _$event$target0.value, index, "categorie_collateral");
        }
      }
    })]), _vm._v(" "), _c("td", {
      key: "collateral-montant_garantie-".concat(index)
    }, [_c("currency-input3", {
      staticClass: "form-control",
      attrs: {
        value: collateral.montant_garantie,
        disabled: !_vm.activeFacilityUuid
      },
      on: {
        input: function input($event) {
          return _vm.handleCollateralChange($event[1], index, "montant_garantie");
        }
      }
    })], 1), _vm._v(" "), _c("td", {
      key: "collateral-montant_credit-".concat(index)
    }, [_c("currency-input3", {
      staticClass: "form-control",
      attrs: {
        value: collateral.montant_credit,
        disabled: !_vm.activeFacilityUuid || true
      },
      on: {
        input: function input($event) {
          return _vm.handleCollateralChange($event[1], index, "montant_credit");
        }
      }
    })], 1), _vm._v(" "), _c("td", {
      key: "collateral-frais_ht-".concat(index)
    }, [_c("currency-input3", {
      staticClass: "form-control accentuate",
      attrs: {
        value: collateral.frais_ht,
        disabled: !_vm.activeFacilityUuid
      },
      on: {
        input: function input($event) {
          return _vm.handleCollateralChange($event[1], index, "frais_ht");
        }
      }
    })], 1), _vm._v(" "), _c("td", {
      key: "collateral-tva_garantie-".concat(index)
    }, [_c("currency-input3", {
      staticClass: "form-control accentuate",
      attrs: {
        value: collateral.tva_garantie,
        disabled: !_vm.activeFacilityUuid
      },
      on: {
        input: function input($event) {
          return _vm.handleCollateralChange($event[1], index, "tva_garantie");
        }
      }
    })], 1), _vm._v(" "), _c("td", [_c("textarea", {
      staticClass: "form-control",
      attrs: {
        rows: "1",
        id: "description_".concat(index),
        disabled: !_vm.activeFacilityUuid,
        "aria-label": "Description Garantie ".concat(index + 1)
      },
      domProps: {
        value: collateral.description
      },
      on: {
        input: function input($event) {
          var _$event$target1;
          return _vm.handleCollateralChange((_$event$target1 = $event.target) === null || _$event$target1 === void 0 ? void 0 : _$event$target1.value, index, "description");
        }
      }
    })]), _vm._v(" "), _c("td", {
      staticClass: "vertical-middle text-right",
      staticStyle: {
        width: "50px"
      }
    }, [index > 0 ? _c("button", {
      staticStyle: {
        "background-color": "transparent",
        border: "none"
      },
      attrs: {
        type: "button",
        title: "Supprimer ce collateral",
        disabled: !_vm.activeFacilityUuid || _vm.loadingCollateral,
        "aria-label": "Remove collateral set ".concat(index + 1)
      },
      on: {
        click: function click($event) {
          return _vm.removeCollateralSet(index);
        }
      }
    }, [_c("trash-icon", {
      staticClass: "custom-class",
      attrs: {
        size: "21"
      }
    })], 1) : _vm._e()])], 2);
  }), 0)])]) : _vm._e()]), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "relook-header",
    on: {
      click: function click($event) {
        _vm.seen4 = !_vm.seen4;
      }
    }
  }, [_c("h6", {
    staticClass: "text-uppercase",
    "class": "subdiv" + _vm.tb_name
  }, [_vm._v("\n                                DéTAILS des LIAISONS UDEs\n                                "), _vm.seen4 ? _c("chevron-up-icon", {
    staticClass: "custom-class",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    },
    attrs: {
      size: "21",
      "aria-label": "Collapse rachat section"
    }
  }) : _c("chevron-down-icon", {
    staticClass: "custom-class",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    },
    attrs: {
      size: "21",
      "aria-label": "Expand rachat section"
    }
  })], 1)]), _vm._v(" "), _vm.seen4 ? _c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-bordered"
  }, [_c("thead", [_c("tr", [_c("td", {
    staticClass: "fw-bold text-uppercase"
  }, [_vm._v("LIBELLE")]), _vm._v(" "), _c("td", {
    staticClass: "fw-bold text-uppercase"
  }, [_vm._v("VALEUR")]), _vm._v(" "), _c("td", {
    staticClass: "fw-bold text-uppercase"
  }, [_vm._v("COMMISSION HORS LIVRES")]), _vm._v(" "), _c("td", {
    staticClass: "fw-bold text-uppercase"
  }, [_vm._v("NUMERO COMPTE COMMISSION")]), _vm._v(" "), _c("td", [_vm.rows[_vm.activeFacilityUuid] ? _c("button", {
    staticStyle: {
      "background-color": "#2c3e50",
      color: "#ffffff",
      "border-radius": "15%",
      border: "none"
    },
    attrs: {
      type: "button",
      title: "Ajouter une liaison UDE",
      disabled: !_vm.activeFacilityUuid,
      "aria-label": "Add new UDE"
    },
    on: {
      click: _vm.addUdeSet
    }
  }, [_c("plus-icon", {
    staticClass: "custom-class",
    attrs: {
      size: "21"
    }
  })], 1) : _vm._e()])])]), _vm._v(" "), _c("tbody", [_vm._l(Object.entries(((_vm$rows$_vm$activeFa12 = _vm.rows[_vm.activeFacilityUuid]) === null || _vm$rows$_vm$activeFa12 === void 0 ? void 0 : _vm$rows$_vm$activeFa12.udes) || {}), function (_ref, index) {
    var _vm$udeHeaders$udeId, _vm$udeHeaders$udeId2, _vm$udeHeaders$udeId3, _vm$udeHeaders$udeId4, _vm$rows$_vm$activeFa13, _vm$udeHeaders$udeId5, _vm$udeHeaders$udeId6, _vm$udeHeaders$udeId7, _vm$udeHeaders$udeId8, _vm$udeHeaders$udeId9;
    var _ref2 = _slicedToArray(_ref, 2),
      udeId = _ref2[0],
      udeVal = _ref2[1];
    return [!((_vm$udeHeaders$udeId = _vm.udeHeaders[udeId]) !== null && _vm$udeHeaders$udeId !== void 0 && _vm$udeHeaders$udeId.hidden) ? _c("tr", {
      key: "ude-header-".concat(index)
    }, [_c("td", [_c("input", {
      staticClass: "form-control",
      "class": _objectSpread({}, ((_vm$udeHeaders$udeId2 = _vm.udeHeaders[udeId]) === null || _vm$udeHeaders$udeId2 === void 0 ? void 0 : _vm$udeHeaders$udeId2.inputClass) || {}),
      attrs: {
        type: "text",
        disabled: !_vm.activeFacilityUuid || ((_vm$udeHeaders$udeId3 = _vm.udeHeaders[udeId]) === null || _vm$udeHeaders$udeId3 === void 0 ? void 0 : _vm$udeHeaders$udeId3.disabled) || false
      },
      domProps: {
        value: udeVal.label
      },
      on: {
        input: function input($event) {
          var _$event$target10;
          return _vm.handleUdeChange((_$event$target10 = $event.target) === null || _$event$target10 === void 0 ? void 0 : _$event$target10.value, udeId, "label");
        }
      }
    })]), _vm._v(" "), _c("td", [_c("currency-input3", {
      staticClass: "form-control",
      "class": _objectSpread({
        "disabled-input": !_vm.activeFacilityUuid
      }, ((_vm$udeHeaders$udeId4 = _vm.udeHeaders[udeId]) === null || _vm$udeHeaders$udeId4 === void 0 ? void 0 : _vm$udeHeaders$udeId4.inputClass) || {}),
      attrs: {
        value: (_vm$rows$_vm$activeFa13 = _vm.rows[_vm.activeFacilityUuid]) === null || _vm$rows$_vm$activeFa13 === void 0 || (_vm$rows$_vm$activeFa13 = _vm$rows$_vm$activeFa13.udes) === null || _vm$rows$_vm$activeFa13 === void 0 || (_vm$rows$_vm$activeFa13 = _vm$rows$_vm$activeFa13[udeId]) === null || _vm$rows$_vm$activeFa13 === void 0 ? void 0 : _vm$rows$_vm$activeFa13.value,
        id: "ude-".concat(udeId),
        disabled: !_vm.activeFacilityUuid || ((_vm$udeHeaders$udeId5 = _vm.udeHeaders[udeId]) === null || _vm$udeHeaders$udeId5 === void 0 ? void 0 : _vm$udeHeaders$udeId5.disabled) || false,
        "aria-label": "UDE ".concat(udeVal.label),
        percentage: ((_vm$udeHeaders$udeId6 = _vm.udeHeaders[udeId]) === null || _vm$udeHeaders$udeId6 === void 0 ? void 0 : _vm$udeHeaders$udeId6.type) === "percentage"
      },
      on: {
        input: function input($event) {
          return _vm.handleUdeChange($event[1], udeId, "value");
        }
      }
    })], 1), _vm._v(" "), _c("td", [_c("div", {
      staticClass: "d-flex justify-content-center gap-2"
    }, [_c("span", {
      staticClass: "d-flex flex-column"
    }, [_c("span", [_vm._v("OUI")]), _vm._v(" "), _c("input", {
      "class": _objectSpread({}, ((_vm$udeHeaders$udeId7 = _vm.udeHeaders[udeId]) === null || _vm$udeHeaders$udeId7 === void 0 ? void 0 : _vm$udeHeaders$udeId7.inputClass) || {}),
      staticStyle: {
        width: "1.2rem",
        height: "1.2rem"
      },
      attrs: {
        type: "checkbox",
        name: "commission_hors_livre_".concat(index),
        disabled: !_vm.activeFacilityUuid
      },
      domProps: {
        value: true,
        checked: udeVal.commission_hors_livre === true
      },
      on: {
        change: function change($event) {
          return _vm.handleUdeChange(true, udeId, "commission_hors_livre");
        }
      }
    })]), _vm._v(" "), _c("span", {
      staticClass: "d-flex flex-column"
    }, [_c("span", [_vm._v("NON")]), _vm._v(" "), _c("input", {
      "class": _objectSpread({}, ((_vm$udeHeaders$udeId8 = _vm.udeHeaders[udeId]) === null || _vm$udeHeaders$udeId8 === void 0 ? void 0 : _vm$udeHeaders$udeId8.inputClass) || {}),
      staticStyle: {
        width: "1.2rem",
        height: "1.2rem"
      },
      attrs: {
        type: "checkbox",
        name: "commission_hors_livre_".concat(index),
        disabled: !_vm.activeFacilityUuid
      },
      domProps: {
        value: false,
        checked: udeVal.commission_hors_livre === false
      },
      on: {
        change: function change($event) {
          return _vm.handleUdeChange(false, udeId, "commission_hors_livre");
        }
      }
    })])])]), _vm._v(" "), _c("td", [_c("input", {
      staticClass: "form-control",
      attrs: {
        type: "text",
        disabled: !_vm.activeFacilityUuid || !udeVal.commission_hors_livre
      },
      domProps: {
        value: udeVal.numero_compte_commission
      },
      on: {
        input: function input($event) {
          var _$event$target11;
          return _vm.handleUdeChange((_$event$target11 = $event.target) === null || _$event$target11 === void 0 ? void 0 : _$event$target11.value, udeId, "numero_compte_commission");
        }
      }
    })]), _vm._v(" "), _c("td", [!((_vm$udeHeaders$udeId9 = _vm.udeHeaders[udeId]) !== null && _vm$udeHeaders$udeId9 !== void 0 && _vm$udeHeaders$udeId9.is_default) ? _c("button", {
      staticStyle: {
        "background-color": "transparent",
        border: "none"
      },
      attrs: {
        type: "button",
        title: "Supprimer cette liaison UDE",
        disabled: !_vm.activeFacilityUuid,
        "aria-label": "Remove UDE ".concat(index + 1)
      },
      on: {
        click: function click($event) {
          return _vm.removeUde(udeId);
        }
      }
    }, [_c("trash-icon", {
      staticClass: "custom-class",
      attrs: {
        size: "21"
      }
    })], 1) : _vm._e()])]) : _vm._e()];
  })], 2)])]) : _vm._e()]), _vm._v(" "), ((_vm$rows$_vm$activeFa14 = _vm.rows[_vm.activeFacilityUuid]) === null || _vm$rows$_vm$activeFa14 === void 0 ? void 0 : _vm$rows$_vm$activeFa14.which_line) === "signature" ? _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "relook-header",
    on: {
      click: function click($event) {
        _vm.seen8 = !_vm.seen8;
      }
    }
  }, [_c("h6", {
    staticClass: "text-uppercase",
    "class": "subdiv" + _vm.tb_name
  }, [_vm._v("\n                                Cantonnement Frais Huissier\n                                "), _vm.seen8 ? _c("chevron-up-icon", {
    staticClass: "custom-class",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    },
    attrs: {
      size: "21",
      "aria-label": "Collapse rachat section"
    }
  }) : _c("chevron-down-icon", {
    staticClass: "custom-class",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    },
    attrs: {
      size: "21",
      "aria-label": "Expand rachat section"
    }
  })], 1)]), _vm._v(" "), _vm.seen8 ? _c("div", {
    staticClass: "mt-3"
  }, [_c("div", [_c("vue-editor", {
    attrs: {
      id: "cantonnement_frais_huissier",
      disabled: !_vm.activeFacilityUuid,
      value: (_vm$rows$_vm$activeFa15 = _vm.rows[_vm.activeFacilityUuid]) === null || _vm$rows$_vm$activeFa15 === void 0 ? void 0 : _vm$rows$_vm$activeFa15.cantonnement_frais_huissier
    },
    on: {
      "update-value": function updateValue($event) {
        return _vm.handleFieldChange($event[1], "cantonnement_frais_huissier");
      }
    }
  })], 1)]) : _vm._e()]) : _vm._e(), _vm._v(" "), ((_vm$rows$_vm$activeFa16 = _vm.rows[_vm.activeFacilityUuid]) === null || _vm$rows$_vm$activeFa16 === void 0 ? void 0 : _vm$rows$_vm$activeFa16.which_line) === "signature" ? _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "relook-header",
    on: {
      click: function click($event) {
        _vm.seen9 = !_vm.seen9;
      }
    }
  }, [_c("h6", {
    staticClass: "text-uppercase",
    "class": "subdiv" + _vm.tb_name
  }, [_vm._v("\n                                FRS / CESSION DE CREANCES\n                                "), _vm.seen9 ? _c("chevron-up-icon", {
    staticClass: "custom-class",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    },
    attrs: {
      size: "21",
      "aria-label": "Collapse rachat section"
    }
  }) : _c("chevron-down-icon", {
    staticClass: "custom-class",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    },
    attrs: {
      size: "21",
      "aria-label": "Expand rachat section"
    }
  })], 1)]), _vm._v(" "), _vm.seen9 ? _c("div", {
    staticClass: "mt-3"
  }, [_c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-bordered"
  }, [_c("thead", [_c("tr", [_c("th", {
    staticClass: "th fw-bold",
    staticStyle: {
      "min-width": "300px"
    }
  }, [_vm._v("LIBELLÉ")]), _vm._v(" "), _c("th", {
    staticClass: "th fw-bold",
    staticStyle: {
      "min-width": "150px"
    }
  }, [_vm._v("COMPTE")]), _vm._v(" "), _c("th", {
    staticClass: "th fw-bold",
    staticStyle: {
      "min-width": "150px"
    }
  }, [_vm._v("MTT " + _vm._s(_vm.devise))]), _vm._v(" "), _c("th", {
    staticClass: "th fw-bold",
    staticStyle: {
      "min-width": "100px"
    }
  }, [_vm._v("SENS")]), _vm._v(" "), _c("th", {
    staticClass: "th fw-bold",
    staticStyle: {
      "min-width": "200px"
    }
  }, [_vm._v("RÉF")])])]), _vm._v(" "), _c("tbody", [_vm._l(((_vm$rows$_vm$activeFa17 = _vm.rows[_vm.activeFacilityUuid]) === null || _vm$rows$_vm$activeFa17 === void 0 ? void 0 : _vm$rows$_vm$activeFa17.cantonnements) || [], function (frais, index) {
    return [_c("tr", {
      key: "cantonnement-pair-".concat(index, "-d")
    }, [_c("td", [_c("textarea", {
      staticClass: "form-control",
      attrs: {
        rows: "3",
        disabled: !_vm.activeFacilityUuid,
        "aria-label": "Libell\xE9 D\xE9bit ".concat(index + 1)
      },
      domProps: {
        value: frais.libelle_debit
      },
      on: {
        input: function input($event) {
          var _$event$target12;
          return _vm.handleCantonnementChange((_$event$target12 = $event.target) === null || _$event$target12 === void 0 ? void 0 : _$event$target12.value, index, "libelle_debit");
        }
      }
    })]), _vm._v(" "), _c("td", [_c("input", {
      staticClass: "form-control",
      attrs: {
        type: "text",
        disabled: !_vm.activeFacilityUuid,
        "aria-label": "Compte D\xE9bit ".concat(index + 1)
      },
      domProps: {
        value: frais.compte_debit
      },
      on: {
        input: function input($event) {
          var _$event$target13;
          return _vm.handleCantonnementChange((_$event$target13 = $event.target) === null || _$event$target13 === void 0 ? void 0 : _$event$target13.value, index, "compte_debit");
        }
      }
    })]), _vm._v(" "), _c("td", {
      attrs: {
        rowspan: "2"
      }
    }, [_c("currency-input3", {
      staticClass: "form-control",
      attrs: {
        value: frais.montant,
        disabled: !_vm.activeFacilityUuid,
        "aria-label": "Montant ".concat(index + 1)
      },
      on: {
        input: function input($event) {
          return _vm.handleCantonnementChange($event[1], index, "montant");
        }
      }
    })], 1), _vm._v(" "), _c("td", {
      staticClass: "text-center fw-bold vertical-middle"
    }, [_vm._v("\n                                                    D\n                                                ")]), _vm._v(" "), _c("td", [_c("textarea", {
      staticClass: "form-control",
      attrs: {
        rows: "2",
        disabled: !_vm.activeFacilityUuid,
        "aria-label": "R\xE9f\xE9rence D\xE9bit ".concat(index + 1)
      },
      domProps: {
        value: frais.reference_debit
      },
      on: {
        input: function input($event) {
          var _$event$target14;
          return _vm.handleCantonnementChange((_$event$target14 = $event.target) === null || _$event$target14 === void 0 ? void 0 : _$event$target14.value, index, "reference_debit");
        }
      }
    })])]), _vm._v(" "), _c("tr", {
      key: "cantonnement-pair-".concat(index, "-c")
    }, [_c("td", [_c("textarea", {
      staticClass: "form-control",
      attrs: {
        rows: "3",
        disabled: !_vm.activeFacilityUuid,
        "aria-label": "Libell\xE9 Cr\xE9dit ".concat(index + 1)
      },
      domProps: {
        value: frais.libelle_credit
      },
      on: {
        input: function input($event) {
          var _$event$target15;
          return _vm.handleCantonnementChange((_$event$target15 = $event.target) === null || _$event$target15 === void 0 ? void 0 : _$event$target15.value, index, "libelle_credit");
        }
      }
    })]), _vm._v(" "), _c("td", [_c("input", {
      staticClass: "form-control",
      attrs: {
        type: "text",
        disabled: !_vm.activeFacilityUuid,
        "aria-label": "Compte Cr\xE9dit ".concat(index + 1)
      },
      domProps: {
        value: frais.compte_credit
      },
      on: {
        input: function input($event) {
          var _$event$target16;
          return _vm.handleCantonnementChange((_$event$target16 = $event.target) === null || _$event$target16 === void 0 ? void 0 : _$event$target16.value, index, "compte_credit");
        }
      }
    })]), _vm._v(" "), _c("td", {
      staticClass: "text-center fw-bold vertical-middle"
    }, [_vm._v("\n                                                    C\n                                                ")]), _vm._v(" "), _c("td", [_c("textarea", {
      staticClass: "form-control",
      attrs: {
        rows: "2",
        disabled: !_vm.activeFacilityUuid,
        "aria-label": "R\xE9f\xE9rence Cr\xE9dit ".concat(index + 1)
      },
      domProps: {
        value: frais.reference_credit
      },
      on: {
        input: function input($event) {
          var _$event$target17;
          return _vm.handleCantonnementChange((_$event$target17 = $event.target) === null || _$event$target17 === void 0 ? void 0 : _$event$target17.value, index, "reference_credit");
        }
      }
    })])])];
  })], 2)])])]) : _vm._e()]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "relook-header",
    on: {
      click: function click($event) {
        _vm.seen3 = !_vm.seen3;
      }
    }
  }, [_c("h6", {
    staticClass: "text-uppercase",
    "class": "subdiv" + _vm.tb_name
  }, [_vm._v("\n                                Sécurité et documentations\n                                "), _vm.seen3 ? _c("chevron-up-icon", {
    staticClass: "custom-class",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    },
    attrs: {
      size: "21",
      "aria-label": "Collapse rachat section"
    }
  }) : _c("chevron-down-icon", {
    staticClass: "custom-class",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    },
    attrs: {
      size: "21",
      "aria-label": "Expand rachat section"
    }
  })], 1)]), _vm._v(" "), _vm.seen3 ? _c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-bordered"
  }, [_c("thead", [_c("tr", [_c("th"), _vm._v(" "), _c("th", {
    staticClass: "th fw-bold",
    staticStyle: {
      "min-width": "300px"
    }
  }, [_vm._v("Document/Sécurité")]), _vm._v(" "), _c("th", {
    staticClass: "th fw-bold",
    staticStyle: {
      "min-width": "300px"
    }
  }, [_vm._v("Formulation")]), _vm._v(" "), _c("th", {
    staticClass: "th fw-bold",
    staticStyle: {
      "min-width": "50px"
    }
  }, [_vm.rows[_vm.activeFacilityUuid] ? _c("button", {
    staticStyle: {
      "background-color": "#2c3e50",
      color: "#ffffff",
      "border-radius": "15%",
      border: "none"
    },
    attrs: {
      type: "button",
      title: "Ajouter une documentation",
      disabled: !_vm.activeFacilityUuid,
      "aria-label": "Add new documentation"
    },
    on: {
      click: _vm.addSecuriteDocumentation
    }
  }, [_c("plus-icon", {
    staticClass: "custom-class",
    attrs: {
      size: "21"
    }
  })], 1) : _vm._e()])])]), _vm._v(" "), _c("tbody", _vm._l((_vm$rows$_vm$activeFa18 = _vm.rows[_vm.activeFacilityUuid]) === null || _vm$rows$_vm$activeFa18 === void 0 ? void 0 : _vm$rows$_vm$activeFa18.securiteDocumentations, function (doc, index) {
    var _doc$libelle;
    return _c("tr", {
      key: "doc-".concat(index)
    }, [_c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: doc.checked,
        expression: "doc.checked"
      }],
      staticClass: "form-check-input me-2",
      staticStyle: {
        width: "1.2rem",
        height: "1.2rem"
      },
      attrs: {
        type: "checkbox",
        disabled: !_vm.activeFacilityUuid || ((_doc$libelle = doc.libelle) === null || _doc$libelle === void 0 ? void 0 : _doc$libelle.length) < 2,
        "aria-label": "Check ".concat(doc.libelle)
      },
      domProps: {
        checked: Array.isArray(doc.checked) ? _vm._i(doc.checked, null) > -1 : doc.checked
      },
      on: {
        change: function change($event) {
          var $$a = doc.checked,
            $$el = $event.target,
            $$c = $$el.checked ? true : false;
          if (Array.isArray($$a)) {
            var $$v = null,
              $$i = _vm._i($$a, $$v);
            if ($$el.checked) {
              $$i < 0 && _vm.$set(doc, "checked", $$a.concat([$$v]));
            } else {
              $$i > -1 && _vm.$set(doc, "checked", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
            }
          } else {
            _vm.$set(doc, "checked", $$c);
          }
        }
      }
    })]), _vm._v(" "), _c("td", [_c("input", {
      staticClass: "form-control",
      "class": {
        "disabled-input": doc.isDefault
      },
      attrs: {
        type: "text",
        disabled: !_vm.activeFacilityUuid || doc.isDefault,
        "aria-label": "Document label ".concat(index + 1)
      },
      domProps: {
        value: doc.libelle
      },
      on: {
        input: function input($event) {
          var _$event$target18;
          return _vm.handleSecuriteDocumentationChange((_$event$target18 = $event.target) === null || _$event$target18 === void 0 ? void 0 : _$event$target18.value, index, "libelle");
        }
      }
    })]), _vm._v(" "), _c("td", [_c("textarea", {
      staticClass: "form-control",
      "class": {
        accentuate: doc.isDefault
      },
      attrs: {
        rows: "4",
        disabled: !_vm.activeFacilityUuid,
        "aria-label": "Document formulation ".concat(index + 1)
      },
      domProps: {
        value: _vm.formatDocumentation(doc)
      },
      on: {
        input: function input($event) {
          var _$event$target19;
          return _vm.handleSecuriteDocumentationChange((_$event$target19 = $event.target) === null || _$event$target19 === void 0 ? void 0 : _$event$target19.value, index, "formulation");
        }
      }
    })]), _vm._v(" "), _c("td", {
      staticClass: "vertical-middle text-right",
      staticStyle: {
        width: "50px"
      }
    }, [!doc.isDefault ? _c("button", {
      staticStyle: {
        "background-color": "transparent",
        border: "none"
      },
      attrs: {
        type: "button",
        title: "Supprimer cette documentation",
        disabled: !_vm.activeFacilityUuid,
        "aria-label": "Remove documentation ".concat(index + 1)
      },
      on: {
        click: function click($event) {
          return _vm.removeSecuriteDocumentation(index);
        }
      }
    }, [_c("trash-icon", {
      staticClass: "custom-class",
      attrs: {
        size: "21"
      }
    })], 1) : _vm._e()])]);
  }), 0)])]) : _vm._e()]), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "relook-header",
    on: {
      click: function click($event) {
        _vm.seen6 = !_vm.seen6;
      }
    }
  }, [_c("h6", {
    staticClass: "text-uppercase",
    "class": "subdiv" + _vm.tb_name
  }, [_vm._v("\n                                Divers\n                                "), _vm.seen6 ? _c("chevron-up-icon", {
    staticClass: "custom-class",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    },
    attrs: {
      size: "21",
      "aria-label": "Collapse rachat section"
    }
  }) : _c("chevron-down-icon", {
    staticClass: "custom-class",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    },
    attrs: {
      size: "21",
      "aria-label": "Expand rachat section"
    }
  })], 1)]), _vm._v(" "), _vm.seen6 ? _c("div", {
    staticClass: "mt-3"
  }, [_c("div", [_c("vue-editor", {
    attrs: {
      id: "divers",
      disabled: !_vm.activeFacilityUuid,
      value: (_vm$rows$_vm$activeFa19 = _vm.rows[_vm.activeFacilityUuid]) === null || _vm$rows$_vm$activeFa19 === void 0 ? void 0 : _vm$rows$_vm$activeFa19.divers
    },
    on: {
      "update-value": function updateValue($event) {
        return _vm.handleFieldChange($event[1], "divers");
      }
    }
  })], 1)]) : _vm._e()])])]) : _c("div", {
    staticClass: "card-body"
  }, [_vm._m(2)]), _vm._v(" "), _c("div", {
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
      "aria-label": "Close table"
    },
    on: {
      click: _vm.retract
    }
  }, [_vm._v("\n                Fermer le tableau\n            ")])]) : _c("div", {
    staticClass: "card card-width-height"
  }, [_c("br"), _vm._v(" "), _c("div", {
    staticClass: "card-header hdc pb-0 pt-2"
  }, [_c("h6", {
    ref: "topdiv",
    staticClass: "head",
    attrs: {
      id: "ca6-head"
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col"
  }, [_vm._v("\n                            " + _vm._s(_vm.tb_display_name) + " : Saisie / Encodage\n                        ")]), _vm._v(" "), _c("div", {
    staticClass: "col-auto"
  }, [((_vm$formDataToBeWatch2 = _vm.formDataToBeWatched.notes) === null || _vm$formDataToBeWatch2 === void 0 ? void 0 : _vm$formDataToBeWatch2.length) > 0 ? _c("div", {
    staticStyle: {
      display: "inline-block",
      position: "relative"
    }
  }, [_c("span", {
    attrs: {
      type: "button",
      role: "button",
      "aria-label": "View notes"
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
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "badge-sm pb-3"
  }, [_vm._v(_vm._s(_vm.formDataToBeWatched.notes.length))])])]) : _vm._e(), _vm._v(" "), _c("chevron-down-icon", {
    staticClass: "custom-class",
    staticStyle: {
      cursor: "pointer"
    },
    attrs: {
      size: "21",
      "aria-label": "Expand table"
    },
    on: {
      click: _vm.retract
    }
  })], 1)])])])])], 1), _vm._v(" "), _c("note-modal", {
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
  return _c("thead", [_c("tr", [_c("th", {
    staticClass: "th fw-bold",
    staticStyle: {
      "min-width": "160px"
    }
  }, [_vm._v("\n                                    Code Produit\n                                    ")]), _vm._v(" "), _c("th", {
    staticClass: "th fw-bold",
    staticStyle: {
      "min-width": "220px"
    }
  }, [_vm._v("\n                                    Description Code Produit\n                                    ")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("th", {
    staticClass: "th fw-bold",
    staticStyle: {
      "min-width": "210px"
    }
  }, [_vm._v("\n                                            Class Code\n                                        ")]), _vm._v(" "), _c("th", {
    staticClass: "th fw-bold",
    staticStyle: {
      "min-width": "200px"
    }
  }, [_vm._v("\n                                            Montant Prêt\n                                        ")]), _vm._v(" "), _c("th", {
    staticClass: "th fw-bold",
    staticStyle: {
      "min-width": "220px"
    }
  }, [_vm._v("\n                                            Autorisation\n                                        ")]), _vm._v(" "), _c("th", {
    staticClass: "th fw-bold",
    staticStyle: {
      "min-width": "200px"
    }
  }, [_vm._v("\n                                            Numéro de séquence\n                                        ")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "text-center"
  }, [_c("span", {
    staticClass: "spinner-border spinner-border-lg",
    attrs: {
      role: "status",
      "aria-hidden": "true"
    }
  }), _vm._v(" "), _c("p", {
    staticClass: "mt-2"
  }, [_vm._v("Chargement en cours...")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/case/Corporate/ME-MPC0.vue?vue&type=style&index=0&id=8986ee58&lang=css&scoped=true":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/case/Corporate/ME-MPC0.vue?vue&type=style&index=0&id=8986ee58&lang=css&scoped=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n[data-v-8986ee58] .custom-input,\r\ninput[data-v-8986ee58],\r\nselect[data-v-8986ee58],\r\ntextarea[data-v-8986ee58] {\r\n    height: 35px;\r\n    border-color: #34495e;\r\n    color: #57606f;\r\n    font-size: 13px;\r\n    font-weight: bold;\n}\n*[data-v-8986ee58] {\r\n    font-family: 'Google Sans', sans-serif;\n}\ntd[data-v-8986ee58] {\r\n    font-size: 13px;\n}\n.card-width-height[data-v-8986ee58] {\r\n    width: 100%;\r\n    height: 100%;\n}\n.head[data-v-8986ee58] {\r\n    color: #f1f2f6;\r\n    font-size: 22px;\n}\n.hdc[data-v-8986ee58] {\r\n    background-color: #57606f;\n}\n.badge-sm[data-v-8986ee58] {\r\n    display: inline-block;\r\n    width: 15px;\r\n    height: 15px;\r\n    background: rgba(255, 0, 0, 0.882);\r\n    color: white;\r\n    font-size: 12px;\r\n    font-weight: 500;\r\n    border-radius: 100%;\r\n    position: absolute;\r\n    top: -20%;\r\n    left: 55%;\r\n    text-align: center;\n}\n.relook-header[data-v-8986ee58] {\r\n    color: #000;\r\n    background-color: #f4f3f3;\r\n    padding: 5px;\r\n    border-bottom: 1px solid #b6b8bb;\r\n    cursor: pointer;\n}\n.facility-list[data-v-8986ee58] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 1.5rem;\r\n    min-width: -moz-fit-content;\r\n    min-width: fit-content;\n}\n.facility-row[data-v-8986ee58] {\r\n    display: flex;\r\n    flex-direction: row;\r\n    gap: 1rem;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    width: 100%;\r\n    padding: 0.5rem;\r\n    border-bottom: 1px solid #ddd;\n}\n.facility-row.active[data-v-8986ee58] {\r\n    /* background-color: #e9e9df; */\r\n    /* border-left: 3px solid #0b5ed7; */\r\n\r\n    background-color: #f39c12;\r\n    /* border-left: 3px solid #f1c40f; */\n}\n.facility-row[data-v-8986ee58]:last-child {\r\n    border-bottom: none;\n}\n.facility-row *[data-v-8986ee58] {\r\n    text-align: center;\r\n    text-transform: uppercase;\n}\n.fields-grid[data-v-8986ee58] {\r\n    display: grid;\r\n    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\r\n    row-gap: 0.8rem;\r\n    -moz-column-gap: 1.5rem;\r\n         column-gap: 1.5rem;\n}\n.fields-grid.disabled input[data-v-8986ee58],\r\n.fields-grid.disabled select[data-v-8986ee58],\r\n.fields-grid.disabled .form-control[data-v-8986ee58] {\r\n    background: #e0e0e0 !important;\r\n    cursor: not-allowed !important;\n}\n.field-item[data-v-8986ee58] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 0.5rem;\r\n    justify-content: end;\n}\n.form-control.disabled-input[data-v-8986ee58] {\r\n    background: #e9ecef !important;\n}\n.field-item label[data-v-8986ee58] {\r\n    text-transform: uppercase;\r\n    font-weight: bold;\n}\n[data-v-8986ee58] .accentuate,\r\n.accentuate[data-v-8986ee58] {\r\n    background-color: #deffff;\n}\n.load-facility-btn[data-v-8986ee58] {\r\n    color: #ffffff;\r\n    cursor: pointer;\r\n    background: #0b5ed7;\r\n    max-width: -moz-max-content;\r\n    max-width: max-content;\r\n    min-width: -moz-max-content;\r\n    min-width: max-content;\n}\n.table-responsive[data-v-8986ee58] {\r\n    overflow-x: auto;\n}\n.th[data-v-8986ee58] {\r\n    text-align: center;\r\n    vertical-align: middle;\r\n    text-transform: uppercase;\n}\n.vertical-middle[data-v-8986ee58] {\r\n    vertical-align: middle;\n}\n.bg-blue[data-v-8986ee58] {\r\n    background-color: #00ffff21 !important;\n}\n.securite input[type=\"checkbox\"][data-v-8986ee58] {\r\n    height: 26px;\r\n    width: 24px;\r\n    margin-right: 5px;\n}\n.spinner[data-v-8986ee58] {\r\n    animation: spin-8986ee58 1s linear infinite;\n}\n@keyframes spin-8986ee58 {\n0% {\r\n        transform: rotate(0deg);\n}\n100% {\r\n        transform: rotate(360deg);\n}\n}\n.min-w-50[data-v-8986ee58] {\r\n    min-width: 50%;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/case/Corporate/ME-MPC0.vue?vue&type=style&index=0&id=8986ee58&lang=css&scoped=true":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/case/Corporate/ME-MPC0.vue?vue&type=style&index=0&id=8986ee58&lang=css&scoped=true ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ME_MPC0_vue_vue_type_style_index_0_id_8986ee58_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ME-MPC0.vue?vue&type=style&index=0&id=8986ee58&lang=css&scoped=true */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/case/Corporate/ME-MPC0.vue?vue&type=style&index=0&id=8986ee58&lang=css&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ME_MPC0_vue_vue_type_style_index_0_id_8986ee58_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ME_MPC0_vue_vue_type_style_index_0_id_8986ee58_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/forms/afg/case/Corporate/ME-MPC0.vue":
/*!**********************************************************************!*\
  !*** ./resources/js/components/forms/afg/case/Corporate/ME-MPC0.vue ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ME_MPC0_vue_vue_type_template_id_8986ee58_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ME-MPC0.vue?vue&type=template&id=8986ee58&scoped=true */ "./resources/js/components/forms/afg/case/Corporate/ME-MPC0.vue?vue&type=template&id=8986ee58&scoped=true");
/* harmony import */ var _ME_MPC0_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ME-MPC0.vue?vue&type=script&lang=js */ "./resources/js/components/forms/afg/case/Corporate/ME-MPC0.vue?vue&type=script&lang=js");
/* harmony import */ var _ME_MPC0_vue_vue_type_style_index_0_id_8986ee58_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ME-MPC0.vue?vue&type=style&index=0&id=8986ee58&lang=css&scoped=true */ "./resources/js/components/forms/afg/case/Corporate/ME-MPC0.vue?vue&type=style&index=0&id=8986ee58&lang=css&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ME_MPC0_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _ME_MPC0_vue_vue_type_template_id_8986ee58_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _ME_MPC0_vue_vue_type_template_id_8986ee58_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "8986ee58",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/forms/afg/case/Corporate/ME-MPC0.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/forms/afg/case/Corporate/ME-MPC0.vue?vue&type=script&lang=js":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/forms/afg/case/Corporate/ME-MPC0.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ME_MPC0_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ME-MPC0.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/case/Corporate/ME-MPC0.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ME_MPC0_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/forms/afg/case/Corporate/ME-MPC0.vue?vue&type=style&index=0&id=8986ee58&lang=css&scoped=true":
/*!******************************************************************************************************************************!*\
  !*** ./resources/js/components/forms/afg/case/Corporate/ME-MPC0.vue?vue&type=style&index=0&id=8986ee58&lang=css&scoped=true ***!
  \******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ME_MPC0_vue_vue_type_style_index_0_id_8986ee58_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ME-MPC0.vue?vue&type=style&index=0&id=8986ee58&lang=css&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/case/Corporate/ME-MPC0.vue?vue&type=style&index=0&id=8986ee58&lang=css&scoped=true");


/***/ }),

/***/ "./resources/js/components/forms/afg/case/Corporate/ME-MPC0.vue?vue&type=template&id=8986ee58&scoped=true":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/components/forms/afg/case/Corporate/ME-MPC0.vue?vue&type=template&id=8986ee58&scoped=true ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ME_MPC0_vue_vue_type_template_id_8986ee58_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ME_MPC0_vue_vue_type_template_id_8986ee58_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ME_MPC0_vue_vue_type_template_id_8986ee58_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ME-MPC0.vue?vue&type=template&id=8986ee58&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/case/Corporate/ME-MPC0.vue?vue&type=template&id=8986ee58&scoped=true");


/***/ }),

/***/ "./resources/js/services/afg/atomic-sequence.service.js":
/*!**************************************************************!*\
  !*** ./resources/js/services/afg/atomic-sequence.service.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   codePoolSequenceService: () => (/* binding */ codePoolSequenceService),
/* harmony export */   collateralSequenceService: () => (/* binding */ collateralSequenceService)
/* harmony export */ });
/* harmony import */ var _custom_axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom.axios */ "./resources/js/services/custom.axios.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return r; }; var t, r = {}, e = Object.prototype, n = e.hasOwnProperty, o = "function" == typeof Symbol ? Symbol : {}, i = o.iterator || "@@iterator", a = o.asyncIterator || "@@asyncIterator", u = o.toStringTag || "@@toStringTag"; function c(t, r, e, n) { Object.defineProperty(t, r, { value: e, enumerable: !n, configurable: !n, writable: !n }); } try { c({}, ""); } catch (t) { c = function c(t, r, e) { return t[r] = e; }; } function h(r, e, n, o) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype); return c(a, "_invoke", function (r, e, n) { var o = 1; return function (i, a) { if (3 === o) throw Error("Generator is already running"); if (4 === o) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var u = n.delegate; if (u) { var c = d(u, n); if (c) { if (c === f) continue; return c; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (1 === o) throw o = 4, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = 3; var h = s(r, e, n); if ("normal" === h.type) { if (o = n.done ? 4 : 2, h.arg === f) continue; return { value: h.arg, done: n.done }; } "throw" === h.type && (o = 4, n.method = "throw", n.arg = h.arg); } }; }(r, n, new Context(o || [])), !0), a; } function s(t, r, e) { try { return { type: "normal", arg: t.call(r, e) }; } catch (t) { return { type: "throw", arg: t }; } } r.wrap = h; var f = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var l = {}; c(l, i, function () { return this; }); var p = Object.getPrototypeOf, y = p && p(p(x([]))); y && y !== e && n.call(y, i) && (l = y); var v = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(l); function g(t) { ["next", "throw", "return"].forEach(function (r) { c(t, r, function (t) { return this._invoke(r, t); }); }); } function AsyncIterator(t, r) { function e(o, i, a, u) { var c = s(t[o], t, i); if ("throw" !== c.type) { var h = c.arg, f = h.value; return f && "object" == _typeof(f) && n.call(f, "__await") ? r.resolve(f.__await).then(function (t) { e("next", t, a, u); }, function (t) { e("throw", t, a, u); }) : r.resolve(f).then(function (t) { h.value = t, a(h); }, function (t) { return e("throw", t, a, u); }); } u(c.arg); } var o; c(this, "_invoke", function (t, n) { function i() { return new r(function (r, o) { e(t, n, r, o); }); } return o = o ? o.then(i, i) : i(); }, !0); } function d(r, e) { var n = e.method, o = r.i[n]; if (o === t) return e.delegate = null, "throw" === n && r.i["return"] && (e.method = "return", e.arg = t, d(r, e), "throw" === e.method) || "return" !== n && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + n + "' method")), f; var i = s(o, r.i, e.arg); if ("throw" === i.type) return e.method = "throw", e.arg = i.arg, e.delegate = null, f; var a = i.arg; return a ? a.done ? (e[r.r] = a.value, e.next = r.n, "return" !== e.method && (e.method = "next", e.arg = t), e.delegate = null, f) : a : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f); } function w(t) { this.tryEntries.push(t); } function m(r) { var e = r[4] || {}; e.type = "normal", e.arg = t, r[4] = e; } function Context(t) { this.tryEntries = [[-1]], t.forEach(w, this), this.reset(!0); } function x(r) { if (null != r) { var e = r[i]; if (e) return e.call(r); if ("function" == typeof r.next) return r; if (!isNaN(r.length)) { var o = -1, a = function e() { for (; ++o < r.length;) if (n.call(r, o)) return e.value = r[o], e.done = !1, e; return e.value = t, e.done = !0, e; }; return a.next = a; } } throw new TypeError(_typeof(r) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, c(v, "constructor", GeneratorFunctionPrototype), c(GeneratorFunctionPrototype, "constructor", GeneratorFunction), c(GeneratorFunctionPrototype, u, GeneratorFunction.displayName = "GeneratorFunction"), r.isGeneratorFunction = function (t) { var r = "function" == typeof t && t.constructor; return !!r && (r === GeneratorFunction || "GeneratorFunction" === (r.displayName || r.name)); }, r.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, c(t, u, "GeneratorFunction")), t.prototype = Object.create(v), t; }, r.awrap = function (t) { return { __await: t }; }, g(AsyncIterator.prototype), c(AsyncIterator.prototype, a, function () { return this; }), r.AsyncIterator = AsyncIterator, r.async = function (t, e, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(h(t, e, n, o), i); return r.isGeneratorFunction(e) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, g(v), c(v, u, "Generator"), c(v, i, function () { return this; }), c(v, "toString", function () { return "[object Generator]"; }), r.keys = function (t) { var r = Object(t), e = []; for (var n in r) e.unshift(n); return function t() { for (; e.length;) if ((n = e.pop()) in r) return t.value = n, t.done = !1, t; return t.done = !0, t; }; }, r.values = x, Context.prototype = { constructor: Context, reset: function reset(r) { if (this.prev = this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(m), !r) for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0][4]; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(r) { if (this.done) throw r; var e = this; function n(t) { a.type = "throw", a.arg = r, e.next = t; } for (var o = e.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i[4], u = this.prev, c = i[1], h = i[2]; if (-1 === i[0]) return n("end"), !1; if (!c && !h) throw Error("try statement without catch or finally"); if (null != i[0] && i[0] <= u) { if (u < c) return this.method = "next", this.arg = t, n(c), !0; if (u < h) return n(h), !1; } } }, abrupt: function abrupt(t, r) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var n = this.tryEntries[e]; if (n[0] > -1 && n[0] <= this.prev && this.prev < n[2]) { var o = n; break; } } o && ("break" === t || "continue" === t) && o[0] <= r && r <= o[2] && (o = null); var i = o ? o[4] : {}; return i.type = t, i.arg = r, o ? (this.method = "next", this.next = o[2], f) : this.complete(i); }, complete: function complete(t, r) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), f; }, finish: function finish(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[2] === t) return this.complete(e[4], e[3]), m(e), f; } }, "catch": function _catch(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[0] === t) { var n = e[4]; if ("throw" === n.type) { var o = n.arg; m(e); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(r, e, n) { return this.delegate = { i: x(r), r: e, n: n }, "next" === this.method && (this.arg = t), f; } }, r; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classPrivateMethodInitSpec(e, a) { _checkPrivateRedeclaration(e, a), a.add(e); }
function _classPrivateFieldInitSpec(e, t, a) { _checkPrivateRedeclaration(e, t), t.set(e, a); }
function _checkPrivateRedeclaration(e, t) { if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object"); }
function _classPrivateFieldGet(s, a) { return s.get(_assertClassBrand(s, a)); }
function _classPrivateFieldSet(s, a, r) { return s.set(_assertClassBrand(s, a), r), r; }
function _assertClassBrand(e, t, n) { if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError("Private element is not present on this object"); }

var _config = /*#__PURE__*/new WeakMap();
var _path = /*#__PURE__*/new WeakMap();
var _lastConfigFetch = /*#__PURE__*/new WeakMap();
var _AtomicSequenceService_brand = /*#__PURE__*/new WeakSet();
var AtomicSequenceService = /*#__PURE__*/function () {
  /**
   * Constructeur de la classe AtomicSequenceService.
   * @param {string} path - Le type de séquence (ex: "collateral-sequence", "code-pool-sequence").
   */
  function AtomicSequenceService(path) {
    _classCallCheck(this, AtomicSequenceService);
    /**
     * Construit l'URL de l'API pour une action donnée.
     * @param {string} action - L'action à exécuter (ex: "allocate", "release", "config").
     * @returns {string} L'URL de l'API.
     */
    _classPrivateMethodInitSpec(this, _AtomicSequenceService_brand);
    _classPrivateFieldInitSpec(this, _config, {
      length: 6
    });
    // Longueur par défaut
    _classPrivateFieldInitSpec(this, _path, "");
    _classPrivateFieldInitSpec(this, _lastConfigFetch, null);
    if (!path || typeof path !== "string") {
      throw new Error("Path must be a non-empty string");
    }
    _classPrivateFieldSet(_path, this, path);
  }
  return _createClass(AtomicSequenceService, [{
    key: "allocateSequence",
    value: (
    /**
     * Alloue une nouvelle séquence (méthode publique).
     * @returns {Promise<string|null>} La séquence allouée ou null en cas d'erreur.
     */
    function () {
      var _allocateSequence2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return", _assertClassBrand(_AtomicSequenceService_brand, this, _allocateSequence).call(this));
            case 1:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function allocateSequence() {
        return _allocateSequence2.apply(this, arguments);
      }
      return allocateSequence;
    }()
    /**
     * Libère une séquence (méthode publique).
     * @param {string} sequence - La séquence à libérer.
     * @returns {Promise<boolean>} True si la libération réussit, false sinon.
     */
    )
  }, {
    key: "releaseSequence",
    value: (function () {
      var _releaseSequence2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(sequence) {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              return _context2.abrupt("return", _assertClassBrand(_AtomicSequenceService_brand, this, _releaseSequence).call(this, sequence));
            case 1:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function releaseSequence(_x) {
        return _releaseSequence2.apply(this, arguments);
      }
      return releaseSequence;
    }()
    /**
     * Extrait une séquence à partir d'un code.
     * @param {string} code - Le code contenant la séquence.
     * @returns {string|null} La séquence extraite ou null si invalide.
     */
    )
  }, {
    key: "getSequenceFromCode",
    value: function getSequenceFromCode(code) {
      var _classPrivateFieldGet2;
      if (!code || typeof code !== "string" || !((_classPrivateFieldGet2 = _classPrivateFieldGet(_config, this)) !== null && _classPrivateFieldGet2 !== void 0 && _classPrivateFieldGet2.length)) {
        return null;
      }
      return code.slice(-_classPrivateFieldGet(_config, this).length);
    }
  }]);
}();
function _sequenceAPI(action) {
  return "/api/afg/atomic-sequence/".concat(_classPrivateFieldGet(_path, this), "/").concat(action);
}
/**
 * Alloue une nouvelle séquence.
 * @returns {Promise<string|null>} La séquence allouée ou null en cas d'erreur.
 */
function _allocateSequence() {
  return _allocateSequence3.apply(this, arguments);
}
function _allocateSequence3() {
  _allocateSequence3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
    var _response$data, response;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          if (_classPrivateFieldGet(_config, this)) {
            _context3.next = 4;
            break;
          }
          _context3.next = 4;
          return _assertClassBrand(_AtomicSequenceService_brand, this, _getSequenceConfig).call(this);
        case 4:
          _context3.next = 6;
          return _custom_axios__WEBPACK_IMPORTED_MODULE_0__["default"].post(_assertClassBrand(_AtomicSequenceService_brand, this, _sequenceAPI).call(this, "allocate"));
        case 6:
          response = _context3.sent;
          if (!(response.status === 200 && (_response$data = response.data) !== null && _response$data !== void 0 && _response$data.sequence)) {
            _context3.next = 10;
            break;
          }
          _classPrivateFieldGet(_config, this).length = response.data.sequence.length || _classPrivateFieldGet(_config, this).length;
          return _context3.abrupt("return", response.data.sequence);
        case 10:
          return _context3.abrupt("return", null);
        case 13:
          _context3.prev = 13;
          _context3.t0 = _context3["catch"](0);
          console.error("Error allocating sequence for ".concat(_classPrivateFieldGet(_path, this), ":"), _context3.t0);
          return _context3.abrupt("return", null);
        case 17:
        case "end":
          return _context3.stop();
      }
    }, _callee3, this, [[0, 13]]);
  }));
  return _allocateSequence3.apply(this, arguments);
}
/**
 * Libère une séquence.
 * @param {string} sequence - La séquence à libérer.
 * @returns {Promise<boolean>} True si la libération réussit, false sinon.
 */
function _releaseSequence(_x2) {
  return _releaseSequence3.apply(this, arguments);
}
function _releaseSequence3() {
  _releaseSequence3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(sequence) {
    var response;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          if (!(!sequence || typeof sequence !== "string")) {
            _context4.next = 3;
            break;
          }
          throw new Error("Sequence must be a non-empty string");
        case 3:
          if (_classPrivateFieldGet(_config, this)) {
            _context4.next = 6;
            break;
          }
          _context4.next = 6;
          return _assertClassBrand(_AtomicSequenceService_brand, this, _getSequenceConfig).call(this);
        case 6:
          _context4.next = 8;
          return _custom_axios__WEBPACK_IMPORTED_MODULE_0__["default"].post(_assertClassBrand(_AtomicSequenceService_brand, this, _sequenceAPI).call(this, "release"), {
            sequence: sequence
          });
        case 8:
          response = _context4.sent;
          return _context4.abrupt("return", response.status === 200);
        case 12:
          _context4.prev = 12;
          _context4.t0 = _context4["catch"](0);
          console.error("Error releasing sequence for ".concat(_classPrivateFieldGet(_path, this), ":"), _context4.t0);
          return _context4.abrupt("return", false);
        case 16:
        case "end":
          return _context4.stop();
      }
    }, _callee4, this, [[0, 12]]);
  }));
  return _releaseSequence3.apply(this, arguments);
}
/**
 * Récupère la configuration de la séquence depuis le backend.
 * Utilise un cache pour éviter les requêtes répétées (valide pendant 60 secondes).
 * @returns {Promise<object|null>} La configuration ou null en cas d'erreur.
 */
function _getSequenceConfig() {
  return _getSequenceConfig2.apply(this, arguments);
}
function _getSequenceConfig2() {
  _getSequenceConfig2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
    var response;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          if (!(_classPrivateFieldGet(_config, this) && _classPrivateFieldGet(_lastConfigFetch, this) && Date.now() - _classPrivateFieldGet(_lastConfigFetch, this) < 60000)) {
            _context5.next = 3;
            break;
          }
          return _context5.abrupt("return", _classPrivateFieldGet(_config, this));
        case 3:
          _context5.next = 5;
          return _custom_axios__WEBPACK_IMPORTED_MODULE_0__["default"].post(_assertClassBrand(_AtomicSequenceService_brand, this, _sequenceAPI).call(this, "config"));
        case 5:
          response = _context5.sent;
          if (!(response.status === 200 && response.data)) {
            _context5.next = 10;
            break;
          }
          _classPrivateFieldSet(_config, this, {
            length: response.data.length || _classPrivateFieldGet(_config, this).length
          });
          _classPrivateFieldSet(_lastConfigFetch, this, Date.now());
          return _context5.abrupt("return", _classPrivateFieldGet(_config, this));
        case 10:
          return _context5.abrupt("return", null);
        case 13:
          _context5.prev = 13;
          _context5.t0 = _context5["catch"](0);
          console.error("Error fetching sequence config for ".concat(_classPrivateFieldGet(_path, this), ":"), _context5.t0);
          _classPrivateFieldSet(_config, this, {
            length: 6
          }); // Fallback à la valeur par défaut
          return _context5.abrupt("return", null);
        case 18:
        case "end":
          return _context5.stop();
      }
    }, _callee5, this, [[0, 13]]);
  }));
  return _getSequenceConfig2.apply(this, arguments);
}
var collateralSequenceService = new AtomicSequenceService("collateral");
var codePoolSequenceService = new AtomicSequenceService("code-pool");

/***/ })

}]);