"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_forms_afg_decouvert_privilege_DC-PV1_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/decouvert_privilege/DC-PV1.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/decouvert_privilege/DC-PV1.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
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
    MoreVerticalIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_9__.MoreVerticalIcon,
    ChevronUpIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_9__.ChevronUpIcon,
    ChevronDownIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_9__.ChevronDownIcon,
    PlusIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_9__.PlusIcon,
    TrashIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_9__.TrashIcon,
    AirplayIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_9__.AirplayIcon,
    Multiselect: _vueform_multiselect_dist_multiselect_vue2__WEBPACK_IMPORTED_MODULE_4__["default"],
    VueTagsInput: (_johmun_vue_tags_input__WEBPACK_IMPORTED_MODULE_5___default()),
    PhoneInput: _shared_PhoneInput_vue__WEBPACK_IMPORTED_MODULE_7__["default"]
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
        return d.groupe_categorie === 'DECOUVERT';
      });
      // console.log('d', d)
      if (d) {
        this.facilites_sollicitees[0].type_facilite = d.libelle;
        this.facilites_sollicitees[0].facilite_libelle = d.groupe_categorie;
        this.facilites_sollicitees[0].infos_fcub = d.infos_flexcub;
        this.facilites_selectionnees[0].facilite_libelle = d.libelle;
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
      var _this$data_tb, _this$data_tb2, _this$data_tb3;
      if (((_this$data_tb = this.data_tb1) === null || _this$data_tb === void 0 ? void 0 : _this$data_tb.revenu_domicilie) == undefined || ((_this$data_tb2 = this.data_tb1) === null || _this$data_tb2 === void 0 ? void 0 : _this$data_tb2.revenu_domicilie) == '') return '';
      var node_salaire = (_this$data_tb3 = this.data_tb1) === null || _this$data_tb3 === void 0 ? void 0 : _this$data_tb3.revenu_domicilie[0];
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
              var _item$revenu_domicili;
              var item = data;
              _this2.formDataToBeWatched.denomination_client = (item === null || item === void 0 ? void 0 : item.nom) + ' ' + (data === null || data === void 0 ? void 0 : data.prenoms);
              _this2.matrimoniale = item === null || item === void 0 ? void 0 : item.matrimoniale;
              _this2.revenu_domicilie = (_item$revenu_domicili = item.revenu_domicilie) !== null && _item$revenu_domicili !== void 0 ? _item$revenu_domicili : [];
              _this2.formDataToBeWatched.pourcentage_quotite = item.pourcentage_quotite;
              _this2.formDataToBeWatched.quotite_cessible = item.quotite_cessible;
              _this2.formDataToBeWatched.quotite_cessible_general = item.quotite_cessible_general;
              _this2.formDataToBeWatched.pourcentage_quotite_general = item.pourcentage_quotite_general;
              _this2.formDataToBeWatched.revenu_total_colonne_emprunteur = item.revenu_total_colonne_emprunteur;
              _this2.formDataToBeWatched.revenu_total_colonne_montant_pondere = item.revenu_total_colonne_montant_pondere;
              _this2.getRevenuAutre();
              _this2.getTauxEndettement();
              _this2.getRemboursement();
            });
          case 6:
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
      table1: (_this$meta_data$dossi = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi === void 0 ? void 0 : _this$meta_data$dossi.cred_pub_tb_20000,
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
      }, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_formDataToBeWatched, "is_first_time", null), "nom", ""), "prenoms", ""), "denomination_client", ""), "type_demande", ""), "type_credit", ""), "contact_client", ""), "email_client", ""), "montant_sollicite", 0), "montant_credit", 0), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_formDataToBeWatched, "duree_credit", 0), "montant_sollicite", 0), "remb_autre_credit", 0), "remb_nouveau_credit", 0), "taux_endettement", 0)),
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
        "echeancier": "Mensuelle",
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
        user_id: (_this$authenticatedUs11 = (_this$authenticatedUs12 = this.authenticatedUser) === null || _this$authenticatedUs12 === void 0 ? void 0 : _this$authenticatedUs12.id) !== null && _this$authenticatedUs11 !== void 0 ? _this$authenticatedUs11 : (_this$authenticatedUs13 = this.authenticatedUser) === null || _this$authenticatedUs13 === void 0 ? void 0 : _this$authenticatedUs13.user_id,
        duree_utilisation_max: 0
      }],
      facilites_selectionnees: [{
        "id": 1,
        "uuid": this.generateUuid(),
        "facilite_uuid": "",
        "facilite_libelle": "",
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
      data_tb1: (_this$meta_data$dossi2 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi2 === void 0 ? void 0 : _this$meta_data$dossi2.cred_pub_tb_20000
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
        var facility, create, facIndex, _facility, newFacility, found, result;
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
              facility = data.facility, create = data.create;
              facIndex = -1;
              if (!create) {
                _context2.next = 15;
                break;
              }
              // Nétoyer les facilités sollicitée
              _this6.facilites_sollicitees = _this6.facilites_sollicitees.filter(function (el) {
                return el.type_facilite && !["", 0, "0"].includes(el.montant_credit);
              });
              _this6.addMoreFaciliteSollicites((_facility = facility) === null || _facility === void 0 ? void 0 : _facility.uuid);
              newFacility = _this6.facilites_sollicitees[_this6.facilites_sollicitees.length - 1];
              facility = _objectSpread(_objectSpread(_objectSpread({}, newFacility), facility), {}, {
                id: newFacility.id,
                uuid: newFacility.uuid
              });
              facIndex = facility.id - 1;
              _context2.next = 23;
              break;
            case 15:
              found = _this6.facilites_sollicitees.findIndex(function (el) {
                return el.uuid === facility.uuid || el.id === facility.id;
              });
              if (!(found !== -1)) {
                _context2.next = 22;
                break;
              }
              facility = _objectSpread(_objectSpread({}, _this6.facilites_sollicitees[found]), facility);
              _this6.facilites_sollicitees[found] = facility;
              facIndex = found;
              _context2.next = 23;
              break;
            case 22:
              return _context2.abrupt("return", {
                success: false,
                message: "La facilité sollicitée n'a pas été trouvée."
              });
            case 23:
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
            case 29:
              _context2.prev = 29;
              _context2.t0 = _context2["catch"](0);
              console.error("xx updateFacilitySollicitees error", _context2.t0);
              return _context2.abrupt("return", {
                success: false,
                message: "Erreur lors de la mise à jour de la facilité sollicitée."
              });
            case 33:
            case "end":
              return _context2.stop();
          }
        }, _callee2, null, [[0, 29]]);
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
    /****************************************************** */tableClosedOrOpened: function tableClosedOrOpened() {
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
      var _this$meta_data$dossi3,
        _this11 = this,
        _this$meta_data$dossi22;
      var lentb = this.meta_data["dossier_credit"]["tbs_in_use"];
      var createdKey = this.tb_name;
      var createdKeyArr = createdKey.split("tb");
      createdKey = "cred_pub_tb_" + createdKeyArr[1];

      // Close table by default
      // this.defaultRetract(
      //     false,
      //     this.meta_data["dossier_credit"]?.applied_templ_id
      // );
      if ((_this$meta_data$dossi3 = this.meta_data["dossier_credit"]) !== null && _this$meta_data$dossi3 !== void 0 && _this$meta_data$dossi3["cred_pub_tb_20000"]) {
        var _this$meta_data$dossi4, _this$meta_data$dossi5, _this$meta_data$dossi6, _this$meta_data$dossi7, _this$table;
        // Assignations
        // console.log("lodingi..",this.meta_data["dossier_credit"]?.["cred_pub_tb_120001"])

        this.revenu_domicilie = (_this$meta_data$dossi4 = (_this$meta_data$dossi5 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi5 === void 0 ? void 0 : _this$meta_data$dossi5["cred_pub_tb_20000"].revenu_domicilie) !== null && _this$meta_data$dossi4 !== void 0 ? _this$meta_data$dossi4 : [];
        this.formDataToBeWatched.revenu_total_colonne_emprunteur = (_this$meta_data$dossi6 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi6 === void 0 ? void 0 : _this$meta_data$dossi6["cred_pub_tb_20000"].revenu_total_colonne_emprunteur;
        this.formDataToBeWatched.revenu_total_colonne_montant_pondere = (_this$meta_data$dossi7 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi7 === void 0 ? void 0 : _this$meta_data$dossi7["cred_pub_tb_20000"].revenu_total_colonne_montant_pondere;
        this.formDataToBeWatched.pourcentage_quotite = this.table1.pourcentage_quotite;
        this.formDataToBeWatched.quotite_cessible = this.table1.quotite_cessible;
        this.formDataToBeWatched.quotite_cessible_general = this.table1.quotite_cessible_general;
        this.formDataToBeWatched.pourcentage_quotite_general = this.table1.pourcentage_quotite_general;
        this.matrimoniale = (_this$table = this.table1) === null || _this$table === void 0 ? void 0 : _this$table.matrimoniale;
      }
      if (this.meta_data["dossier_credit"][createdKey] == undefined) {
        var _this$meta_data$dossi8;
        if (((_this$meta_data$dossi8 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi8 === void 0 ? void 0 : _this$meta_data$dossi8['cred_pub_tb_10009']) != undefined) {
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
        var _this$meta_data$dossi14;
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
          var _this$meta_data$dossi9, _this$formDataToBeWat, _this$meta_data$dossi0, _this$meta_data$dossi1;
          this.formDataToBeWatched = this.meta_data["dossier_credit"][createdKey];
          this.setSegmentEntreprise((_this$meta_data$dossi9 = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi9 === void 0 || (_this$meta_data$dossi9 = _this$meta_data$dossi9.cred_pub_tb_00) === null || _this$meta_data$dossi9 === void 0 ? void 0 : _this$meta_data$dossi9.segment_entreprise);
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
          if (((_this$meta_data$dossi0 = this.meta_data["dossier_credit"][createdKey]["facilites_selectionnees"]) === null || _this$meta_data$dossi0 === void 0 ? void 0 : _this$meta_data$dossi0.length) > 0) {
            this.facilites_selectionnees = this.meta_data["dossier_credit"][createdKey]["facilites_selectionnees"];
            ensureUserId("facilites_selectionnees");
          }

          // CHECK WHETHER IT IS FIRST TIME
          if (((_this$meta_data$dossi1 = this.meta_data['dossier_credit'][createdKey]) === null || _this$meta_data$dossi1 === void 0 ? void 0 : _this$meta_data$dossi1.is_first_time) === false) {
            this.setAllDefaultFields(createdKey);
          } else {
            var _this$meta_data$dossi10, _this$meta_data$dossi11;
            if (((_this$meta_data$dossi10 = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi10 === void 0 ? void 0 : _this$meta_data$dossi10.doss_central_file_recorder) !== undefined) {
              this.setAllDefaultFieldsRecByEnr();
            }
            if (((_this$meta_data$dossi11 = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi11 === void 0 ? void 0 : _this$meta_data$dossi11.caf_recorded_file) !== undefined) {
              this.setAllDefaultFieldsRecByCaf();
            }
          }
        } else {
          var _this$meta_data$dossi12, _this$meta_data$dossi13;
          if (((_this$meta_data$dossi12 = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi12 === void 0 ? void 0 : _this$meta_data$dossi12.doss_central_file_recorder) !== undefined) {
            this.setAllDefaultFieldsRecByEnr();
          }
          if (((_this$meta_data$dossi13 = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi13 === void 0 ? void 0 : _this$meta_data$dossi13.caf_recorded_file) != undefined) {
            this.setAllDefaultFieldsRecByCaf();
          }
        }
        // SET FIRST TIME TO FALSE
        this.formDataToBeWatched.is_first_time = false;
        this.formDataToBeWatched.type_de_clientele = "Particuliers";
        this.formDataToBeWatched.carcasse_type = (_this$meta_data$dossi14 = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi14 === void 0 ? void 0 : _this$meta_data$dossi14.applied_templ_name;
        setTimeout(function () {
          _this11.selectTypeClientele('Particuliers');
        }, 3000);
      } else {
        var _this$meta_data$dossi15;
        if (!this.dismissFormData.includes((_this$meta_data$dossi15 = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi15 === void 0 ? void 0 : _this$meta_data$dossi15.applied_templ_id)) {
          var _this$meta_data$dossi16, _this$meta_data$dossi17;
          if (((_this$meta_data$dossi16 = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi16 === void 0 ? void 0 : _this$meta_data$dossi16.doss_central_file_recorder) !== undefined) {
            this.setAllDefaultFieldsRecByEnr();
          }

          // IN CASE THE FILE IS OPENED BY CAF
          else if (((_this$meta_data$dossi17 = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi17 === void 0 ? void 0 : _this$meta_data$dossi17.caf_recorded_file) !== undefined) {
            var _this$meta_data$dossi18;
            this.setAllDefaultFieldsRecByCaf();
            var caf_recorded_file = this.meta_data["dossier_credit"]["caf_recorded_file"];
            this.formDataToBeWatched.montant_sollicite = caf_recorded_file === null || caf_recorded_file === void 0 ? void 0 : caf_recorded_file.montant;
            if (((_this$meta_data$dossi18 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi18 === void 0 || (_this$meta_data$dossi18 = _this$meta_data$dossi18['cred_pub_tb_10009']) === null || _this$meta_data$dossi18 === void 0 ? void 0 : _this$meta_data$dossi18.montant_credit) != undefined) {
              var _this$meta_data$dossi19, _this$meta_data$dossi20, _this$meta_data$dossi21;
              this.formDataToBeWatched.montant_credit = (_this$meta_data$dossi19 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi19 === void 0 || (_this$meta_data$dossi19 = _this$meta_data$dossi19['cred_pub_tb_10009']) === null || _this$meta_data$dossi19 === void 0 ? void 0 : _this$meta_data$dossi19.montant_credit;
              this.formDataToBeWatched.duree_credit = (_this$meta_data$dossi20 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi20 === void 0 || (_this$meta_data$dossi20 = _this$meta_data$dossi20['cred_pub_tb_10009']) === null || _this$meta_data$dossi20 === void 0 ? void 0 : _this$meta_data$dossi20.duree_credit;
              this.formDataToBeWatched.taux = (_this$meta_data$dossi21 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi21 === void 0 || (_this$meta_data$dossi21 = _this$meta_data$dossi21['cred_pub_tb_10009']) === null || _this$meta_data$dossi21 === void 0 ? void 0 : _this$meta_data$dossi21.taux;
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
      if (((_this$meta_data$dossi22 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi22 === void 0 ? void 0 : _this$meta_data$dossi22['cred_pub_tb_10009']) != undefined) {
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
      // this.emitData2()
      this.getTauxEndettement();
      this.getRemboursement();
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
      if (event[0] == 'montant_credit') {
        this[key][index]['montant_demande'] = event[1];
      }
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
    checkboxValSingle: function checkboxValSingle(event, index, key) {
      var _event$target;
      if (event.target.value == 'Oui') {
        this.showClmnTypeRachat = true;
      } else {
        this.showClmnTypeRachat = false;
        this.facilites_sollicitees[index].type_rachat = "";
        this.facilites_sollicitees[index].num_fcub_pret = "";
        this.facilites_sollicitees[index].montant_rachat = 0;
      }
      this.formDataToBeWatched[key][index][(_event$target = event.target) === null || _event$target === void 0 ? void 0 : _event$target.id] = event.target.value;
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
        "echeancier": "Mensuelle",
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
        user_id: (_this$authenticatedUs28 = (_this$authenticatedUs29 = this.authenticatedUser) === null || _this$authenticatedUs29 === void 0 ? void 0 : _this$authenticatedUs29.id) !== null && _this$authenticatedUs28 !== void 0 ? _this$authenticatedUs28 : (_this$authenticatedUs30 = this.authenticatedUser) === null || _this$authenticatedUs30 === void 0 ? void 0 : _this$authenticatedUs30.user_id,
        duree_utilisation_max: 0
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
      var _this$meta_data$dossi23;
      var tier_employeur = (_this$meta_data$dossi23 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi23 === void 0 || (_this$meta_data$dossi23 = _this$meta_data$dossi23.cred_pub_tb_120002) === null || _this$meta_data$dossi23 === void 0 ? void 0 : _this$meta_data$dossi23.statut_entreprise;
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
      this.formDataToBeWatched.taux_endettement = taux_endettement;
      if (taux_endettement >= 100) {
        taux_endettement = 100;
      }
      return {
        taux_endettement: taux_endettement.toFixed(2),
        reste_a_vivre: this.formatAmount(reste_a_vivre)
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
      var _this$data_tb4, _this$data_tb5, _this$data_tb6;
      if (((_this$data_tb4 = this.data_tb1) === null || _this$data_tb4 === void 0 ? void 0 : _this$data_tb4.revenu_domicilie) == undefined || ((_this$data_tb5 = this.data_tb1) === null || _this$data_tb5 === void 0 ? void 0 : _this$data_tb5.revenu_domicilie) == '') return '';
      var autre_revenu = 0;
      (_this$data_tb6 = this.data_tb1) === null || _this$data_tb6 === void 0 || _this$data_tb6.revenu_domicilie.forEach(function (el) {
        if (el.libelle != "Salaire net" && el.checked == true) {
          var _el$montant_salaire;
          autre_revenu += parseInt((el === null || el === void 0 || (_el$montant_salaire = el.montant_salaire) === null || _el$montant_salaire === void 0 ? void 0 : _el$montant_salaire.toString().replace(/\s/g, "")) || "0");
        }
      });
      return autre_revenu;
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/decouvert_privilege/DC-PV1.vue?vue&type=template&id=71d50199&scoped=true":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/decouvert_privilege/DC-PV1.vue?vue&type=template&id=71d50199&scoped=true ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm$formDataToBeWatch, _vm$totalsFacilitesCo, _vm$totalsFacilitesCo2, _vm$totalsFacilitesCo3, _vm$formDataToBeWatch2;
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
    }, [_c("td", [_c("select", {
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
        id: "type_facilite",
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
    })], 1), _vm._v(" "), _c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: el.duree_utilisation_max,
        expression: "el.duree_utilisation_max"
      }],
      staticClass: "form-control flex-1",
      staticStyle: {
        "min-width": "45px",
        "margin-right": "2px"
      },
      attrs: {
        type: "number",
        min: "0",
        id: "duree_utilisation_max"
      },
      domProps: {
        value: el.duree_utilisation_max
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(el, "duree_utilisation_max", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", [_c("textarea", {
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
  }, [_vm._v("Totaux")]), _vm._v(" "), _c("td"), _vm._v(" "), _c("td"), _vm._v(" "), _c("td"), _vm._v(" "), _c("td"), _vm._v(" "), _c("td", {
    staticClass: "fw-bold"
  }, [_vm._v(_vm._s(_vm._f("formatNumber")(_vm.totalsFacilites.montant_credit)))]), _vm._v(" "), _c("td"), _vm._v(" "), _c("td", {
    attrs: {
      colspan: "3"
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
  })], 1);
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
  }, [_c("b", [_vm._v("Ce client a-t-il des prêts chez les confrères ?\n                                                ")])]);
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
  }, [_vm._v("Mt découvert"), _c("span", {
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
  }, [_vm._v("Durée d'utilisation max")]), _vm._v(" "), _c("td", {
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
  }, [_vm._v("Mt de l'assurance TTC"), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v("*")])]), _vm._v(" "), _c("td", {
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

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/decouvert_privilege/DC-PV1.vue?vue&type=style&index=0&id=71d50199&lang=css&scoped=true":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/decouvert_privilege/DC-PV1.vue?vue&type=style&index=0&id=71d50199&lang=css&scoped=true ***!
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
___CSS_LOADER_EXPORT___.push([module.id, "\n*[data-v-71d50199] {\r\n    font-family: \"Google sans\";\n}\nlabel[data-v-71d50199] {\r\n    height: 10px;\r\n    font-size: 13px;\n}\ninput[data-v-71d50199],\r\nselect[data-v-71d50199] {\r\n    /* height: 35px; */\r\n    border-color: #34495e;\r\n    color: #57606f;\r\n    font-size: 13px;\r\n    font-weight: bold;\n}\n.th[data-v-71d50199] {\r\n    padding: 4px;\r\n    padding-bottom: 0px;\n}\n.card-width-height[data-v-71d50199] {\r\n    width: 100%;\r\n    height: 100%;\n}\n.head[data-v-71d50199] {\r\n    color: #f1f2f6;\r\n    font-size: 22px;\n}\n.hdc[data-v-71d50199] {\r\n    background-color: #57606f;\n}\n.relook-header[data-v-71d50199] {\r\n    color: #000;\r\n    background-color: #f4f3f3;\r\n    padding: 5px;\r\n    border-bottom: 1px solid #b6b8bb;\n}\n.badge-sm[data-v-71d50199] {\r\n    display: inline-block;\r\n    width: 15px;\r\n    height: 15px;\r\n    background: rgba(255, 0, 0, 0.882);\r\n    color: white;\r\n    font-size: 12px;\r\n    font-weight: 500;\r\n    border-radius: 100%;\r\n    position: absolute;\r\n    top: -20%;\r\n    left: 55%;\r\n    text-align: center;\n}\n.imageM22[data-v-71d50199] {\r\n    background: url(\"/images/capture_cofina/exemple_source_revenus.png\") no-repeat;\r\n    background-position: center;\r\n    background-size: contain;\r\n    width: 1000px;\r\n    height: 200px;\n}\ntd[data-v-71d50199],\r\np[data-v-71d50199] {\r\n    font-size: 13px;\n}\n.relook-header[data-v-71d50199] {\r\n    color: #000;\r\n    background-color: #f4f3f3;\r\n    padding: 5px;\r\n    border-bottom: 1px solid #b6b8bb;\n}\n.width-100[data-v-71d50199] {\r\n    width: 90%;\n}\n.personne input[data-v-71d50199] {\r\n    width: 135px;\n}\n._border_right[data-v-71d50199] {\r\n    border-right: 1px solid;\n}\n.spinner-custom-input[data-v-71d50199] {\r\n    --bs-spinner-width: 1rem;\r\n    --bs-spinner-height: 1rem;\r\n    --bs-spinner-border-width: 0.15em;\r\n    border: var(--bs-spinner-border-width) solid #ee6a00;\r\n    border-right-color: transparent;\r\n    position: absolute;\r\n    right: 13px;\n}\ninput[type=\"checkbox\"][data-v-71d50199] {\r\n    height: 18px;\r\n    width: 20px;\r\n    margin-right: 5px;\n}\n.image1[data-v-71d50199] {\r\n    background: url(\"/images/capture/exemples/demande_de_pret.png\") no-repeat;\r\n    background-position: center;\r\n    background-size: contain;\r\n\r\n    width: 500px;\r\n    height: 300px;\n}\n.math[data-v-71d50199] {\r\n      font-size: 20px;\n}\r\n", ""]);
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

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/decouvert_privilege/DC-PV1.vue?vue&type=style&index=0&id=71d50199&lang=css&scoped=true":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/decouvert_privilege/DC-PV1.vue?vue&type=style&index=0&id=71d50199&lang=css&scoped=true ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DC_PV1_vue_vue_type_style_index_0_id_71d50199_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DC-PV1.vue?vue&type=style&index=0&id=71d50199&lang=css&scoped=true */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/decouvert_privilege/DC-PV1.vue?vue&type=style&index=0&id=71d50199&lang=css&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DC_PV1_vue_vue_type_style_index_0_id_71d50199_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DC_PV1_vue_vue_type_style_index_0_id_71d50199_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

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

/***/ "./resources/js/components/forms/afg/decouvert_privilege/DC-PV1.vue":
/*!**************************************************************************!*\
  !*** ./resources/js/components/forms/afg/decouvert_privilege/DC-PV1.vue ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DC_PV1_vue_vue_type_template_id_71d50199_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DC-PV1.vue?vue&type=template&id=71d50199&scoped=true */ "./resources/js/components/forms/afg/decouvert_privilege/DC-PV1.vue?vue&type=template&id=71d50199&scoped=true");
/* harmony import */ var _DC_PV1_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DC-PV1.vue?vue&type=script&lang=js */ "./resources/js/components/forms/afg/decouvert_privilege/DC-PV1.vue?vue&type=script&lang=js");
/* harmony import */ var _DC_PV1_vue_vue_type_style_index_0_id_71d50199_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DC-PV1.vue?vue&type=style&index=0&id=71d50199&lang=css&scoped=true */ "./resources/js/components/forms/afg/decouvert_privilege/DC-PV1.vue?vue&type=style&index=0&id=71d50199&lang=css&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _DC_PV1_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _DC_PV1_vue_vue_type_template_id_71d50199_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _DC_PV1_vue_vue_type_template_id_71d50199_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "71d50199",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/forms/afg/decouvert_privilege/DC-PV1.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/forms/afg/decouvert_privilege/DC-PV1.vue?vue&type=script&lang=js":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/forms/afg/decouvert_privilege/DC-PV1.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DC_PV1_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DC-PV1.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/decouvert_privilege/DC-PV1.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DC_PV1_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/forms/afg/decouvert_privilege/DC-PV1.vue?vue&type=style&index=0&id=71d50199&lang=css&scoped=true":
/*!**********************************************************************************************************************************!*\
  !*** ./resources/js/components/forms/afg/decouvert_privilege/DC-PV1.vue?vue&type=style&index=0&id=71d50199&lang=css&scoped=true ***!
  \**********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DC_PV1_vue_vue_type_style_index_0_id_71d50199_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DC-PV1.vue?vue&type=style&index=0&id=71d50199&lang=css&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/decouvert_privilege/DC-PV1.vue?vue&type=style&index=0&id=71d50199&lang=css&scoped=true");


/***/ }),

/***/ "./resources/js/components/forms/afg/decouvert_privilege/DC-PV1.vue?vue&type=template&id=71d50199&scoped=true":
/*!********************************************************************************************************************!*\
  !*** ./resources/js/components/forms/afg/decouvert_privilege/DC-PV1.vue?vue&type=template&id=71d50199&scoped=true ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DC_PV1_vue_vue_type_template_id_71d50199_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DC_PV1_vue_vue_type_template_id_71d50199_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DC_PV1_vue_vue_type_template_id_71d50199_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DC-PV1.vue?vue&type=template&id=71d50199&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/decouvert_privilege/DC-PV1.vue?vue&type=template&id=71d50199&scoped=true");


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


/***/ })

}]);