"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_forms_afg_carcasse_ppo_DCPP-PCP3_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/carcasse_ppo/DCPP-PCP3.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/carcasse_ppo/DCPP-PCP3.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
/* harmony import */ var _services_ebapis_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../services/ebapis.service */ "./resources/js/services/ebapis.service.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../services/auth.service */ "./resources/js/services/auth.service.js");
/* harmony import */ var _services_afg_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/afg.service */ "./resources/js/services/afg.service.js");
/* harmony import */ var _services_credit_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/credit.service */ "./resources/js/services/credit.service.js");
/* harmony import */ var _vueform_multiselect_dist_multiselect_vue2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @vueform/multiselect/dist/multiselect.vue2 */ "./node_modules/@vueform/multiselect/dist/multiselect.vue2.js");
/* harmony import */ var _helpers_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../helpers/helper */ "./resources/js/helpers/helper.js");
/* harmony import */ var _helpers_indexedDB__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../helpers/indexedDB */ "./resources/js/helpers/indexedDB.js");
/* harmony import */ var _helpers_indexedDB__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_helpers_indexedDB__WEBPACK_IMPORTED_MODULE_6__);
/* provided dependency */ var process = __webpack_require__(/*! process/browser.js */ "./node_modules/process/browser.js");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return r; }; var t, r = {}, e = Object.prototype, n = e.hasOwnProperty, o = "function" == typeof Symbol ? Symbol : {}, i = o.iterator || "@@iterator", a = o.asyncIterator || "@@asyncIterator", u = o.toStringTag || "@@toStringTag"; function c(t, r, e, n) { Object.defineProperty(t, r, { value: e, enumerable: !n, configurable: !n, writable: !n }); } try { c({}, ""); } catch (t) { c = function c(t, r, e) { return t[r] = e; }; } function h(r, e, n, o) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype); return c(a, "_invoke", function (r, e, n) { var o = 1; return function (i, a) { if (3 === o) throw Error("Generator is already running"); if (4 === o) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var u = n.delegate; if (u) { var c = d(u, n); if (c) { if (c === f) continue; return c; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (1 === o) throw o = 4, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = 3; var h = s(r, e, n); if ("normal" === h.type) { if (o = n.done ? 4 : 2, h.arg === f) continue; return { value: h.arg, done: n.done }; } "throw" === h.type && (o = 4, n.method = "throw", n.arg = h.arg); } }; }(r, n, new Context(o || [])), !0), a; } function s(t, r, e) { try { return { type: "normal", arg: t.call(r, e) }; } catch (t) { return { type: "throw", arg: t }; } } r.wrap = h; var f = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var l = {}; c(l, i, function () { return this; }); var p = Object.getPrototypeOf, y = p && p(p(x([]))); y && y !== e && n.call(y, i) && (l = y); var v = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(l); function g(t) { ["next", "throw", "return"].forEach(function (r) { c(t, r, function (t) { return this._invoke(r, t); }); }); } function AsyncIterator(t, r) { function e(o, i, a, u) { var c = s(t[o], t, i); if ("throw" !== c.type) { var h = c.arg, f = h.value; return f && "object" == _typeof(f) && n.call(f, "__await") ? r.resolve(f.__await).then(function (t) { e("next", t, a, u); }, function (t) { e("throw", t, a, u); }) : r.resolve(f).then(function (t) { h.value = t, a(h); }, function (t) { return e("throw", t, a, u); }); } u(c.arg); } var o; c(this, "_invoke", function (t, n) { function i() { return new r(function (r, o) { e(t, n, r, o); }); } return o = o ? o.then(i, i) : i(); }, !0); } function d(r, e) { var n = e.method, o = r.i[n]; if (o === t) return e.delegate = null, "throw" === n && r.i["return"] && (e.method = "return", e.arg = t, d(r, e), "throw" === e.method) || "return" !== n && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + n + "' method")), f; var i = s(o, r.i, e.arg); if ("throw" === i.type) return e.method = "throw", e.arg = i.arg, e.delegate = null, f; var a = i.arg; return a ? a.done ? (e[r.r] = a.value, e.next = r.n, "return" !== e.method && (e.method = "next", e.arg = t), e.delegate = null, f) : a : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f); } function w(t) { this.tryEntries.push(t); } function m(r) { var e = r[4] || {}; e.type = "normal", e.arg = t, r[4] = e; } function Context(t) { this.tryEntries = [[-1]], t.forEach(w, this), this.reset(!0); } function x(r) { if (null != r) { var e = r[i]; if (e) return e.call(r); if ("function" == typeof r.next) return r; if (!isNaN(r.length)) { var o = -1, a = function e() { for (; ++o < r.length;) if (n.call(r, o)) return e.value = r[o], e.done = !1, e; return e.value = t, e.done = !0, e; }; return a.next = a; } } throw new TypeError(_typeof(r) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, c(v, "constructor", GeneratorFunctionPrototype), c(GeneratorFunctionPrototype, "constructor", GeneratorFunction), c(GeneratorFunctionPrototype, u, GeneratorFunction.displayName = "GeneratorFunction"), r.isGeneratorFunction = function (t) { var r = "function" == typeof t && t.constructor; return !!r && (r === GeneratorFunction || "GeneratorFunction" === (r.displayName || r.name)); }, r.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, c(t, u, "GeneratorFunction")), t.prototype = Object.create(v), t; }, r.awrap = function (t) { return { __await: t }; }, g(AsyncIterator.prototype), c(AsyncIterator.prototype, a, function () { return this; }), r.AsyncIterator = AsyncIterator, r.async = function (t, e, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(h(t, e, n, o), i); return r.isGeneratorFunction(e) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, g(v), c(v, u, "Generator"), c(v, i, function () { return this; }), c(v, "toString", function () { return "[object Generator]"; }), r.keys = function (t) { var r = Object(t), e = []; for (var n in r) e.unshift(n); return function t() { for (; e.length;) if ((n = e.pop()) in r) return t.value = n, t.done = !1, t; return t.done = !0, t; }; }, r.values = x, Context.prototype = { constructor: Context, reset: function reset(r) { if (this.prev = this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(m), !r) for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0][4]; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(r) { if (this.done) throw r; var e = this; function n(t) { a.type = "throw", a.arg = r, e.next = t; } for (var o = e.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i[4], u = this.prev, c = i[1], h = i[2]; if (-1 === i[0]) return n("end"), !1; if (!c && !h) throw Error("try statement without catch or finally"); if (null != i[0] && i[0] <= u) { if (u < c) return this.method = "next", this.arg = t, n(c), !0; if (u < h) return n(h), !1; } } }, abrupt: function abrupt(t, r) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var n = this.tryEntries[e]; if (n[0] > -1 && n[0] <= this.prev && this.prev < n[2]) { var o = n; break; } } o && ("break" === t || "continue" === t) && o[0] <= r && r <= o[2] && (o = null); var i = o ? o[4] : {}; return i.type = t, i.arg = r, o ? (this.method = "next", this.next = o[2], f) : this.complete(i); }, complete: function complete(t, r) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), f; }, finish: function finish(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[2] === t) return this.complete(e[4], e[3]), m(e), f; } }, "catch": function _catch(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[0] === t) { var n = e[4]; if ("throw" === n.type) { var o = n.arg; m(e); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(r, e, n) { return this.delegate = { i: x(r), r: e, n: n }, "next" === this.method && (this.arg = t), f; } }, r; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }








// ? IndexedDB helper for formDataToBeWatched Cache management


/**
 * Cache Management variables
 */
var indexedDBName = "CREDITFLOW_TABLES";
var collectionName = "TABLES";
var documentName = "T";
var documentId = null;
var _cache,
  _lastSaveTime = null,
  _onlineSaveIntervalTimeInSeconds = 30;
var _DEBUG = process.env.MIX_APP_DEBUG;
var _cacheAutosaveInterval = null;
var _timeSpentInSeconds = 0;
// -- End Cache Management variables

window.$ = window.jQuery = __webpack_require__(/*! jquery/dist/jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({
  name: "Informations_sur_comptes",
  display: "Informations sur le(s) compte(s)",
  components: {
    MoreVerticalIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_7__.MoreVerticalIcon,
    ChevronUpIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_7__.ChevronUpIcon,
    ChevronDownIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_7__.ChevronDownIcon,
    PlusIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_7__.PlusIcon,
    TrashIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_7__.TrashIcon,
    AirplayIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_7__.AirplayIcon,
    Multiselect: _vueform_multiselect_dist_multiselect_vue2__WEBPACK_IMPORTED_MODULE_4__["default"]
    // BookOpenIcon,
  },
  computed: {
    transformTypeCreditsFacilite_: function transformTypeCreditsFacilite_() {
      return this.type_credits_facilite;
    },
    //  hasEpargneAccount() {
    //     return this.comptesAFGBank.some(el => el.libelle.includes("COMPTES EPARGNE PARTICULIER"));
    // },
    comptesAFGBank: function comptesAFGBank() {
      return this.comptes.filter(function (compte) {
        return compte.banque === 'AFG BANK';
      });
    },
    comptesAutreBank: function comptesAutreBank() {
      return this.comptes_chez_confrere.filter(function (compte) {
        return compte.banque !== 'AFG BANK';
      });
    },
    comptesConjointBank: function comptesConjointBank() {
      return this.comptes_conjoint;
    },
    listFocntionnements: function listFocntionnements() {
      return this.fonctionnement_comptes;
    }
  },
  props: {
    meta_data: Object,
    tb_name: String,
    tb_display_name: String
  },
  created: function created() {
    var _this = this;
    EventBus.$on("event-T0", function (data) {
      _this.formDataToBeWatched.vivre = _this.rtnExistant(data.formdata.experience_secteur);
    });
  }
}, "created", function created() {
  var _this2 = this;
  return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _this2.getFcubAccountClassTab();
        case 2:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }))();
}), "mounted", function mounted() {
  var _this3 = this;
  this.loadRetrieved();
  this.loadTbAttrs();
  this.tableClosedOrOpened();
  EventBus.$on("fresh-core-banking-data", function (data) {
    if (data) {
      _this3.core_banking_info = data;
      var save_locale_comptes = _this3.comptes.filter(function (item) {
        return item.is_locale == true;
      });
      _this3.matchingCoreBanking();
      _this3.comptes = [].concat(_toConsumableArray(_this3.comptes), _toConsumableArray(save_locale_comptes));
      _this3.handleInput();
    }
  });
}), "data", function data() {
  var _this$meta_data;
  var vm = this;
  return _defineProperty({
    ebapisHost: _services_ebapis_service__WEBPACK_IMPORTED_MODULE_0__["default"].host,
    authcheck: false,
    authcheckUsr: null,
    authcheckStatus: null,
    watchInPause: false,
    initLoad: true,
    seen: true,
    seen1: true,
    seen2: true,
    seen3: true,
    seen4: true,
    seen5: true,
    seen6: true,
    disp: false,
    isLoading: false,
    core_banking_info: (_this$meta_data = this.meta_data) === null || _this$meta_data === void 0 || (_this$meta_data = _this$meta_data.dossier_credit) === null || _this$meta_data === void 0 ? void 0 : _this$meta_data.client_core_banking,
    meta_parseable: {
      cred_pub_key: this.meta_data["cred_pub_key"],
      tb_name: this.tb_name
    },
    formDataToBeWatched: {
      notes: [],
      /* banque: "",
      rib: "",
      anc_banque_mm: "",
      anc_banque_aaaa: "", */
      comptes: [],
      comptes_conjoint: [],
      comptes_chez_confrere: [],
      fonctionnement_comptes: [],
      commentaire_fonctionnement_cmpte: ""
    },
    mois: [],
    annees: [],
    banques: [],
    banqueName: "",
    matrimoniale: "",
    date_entree_en_relation: "",
    type_credits_facilite: [],
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
      duree: "",
      is_locale: true
    }],
    comptes_chez_confrere: [{
      banque: "",
      libelle: "",
      autre_libelle: "",
      numero_compte: "",
      rib: "",
      iban: "",
      montant: "",
      date_extration_releve: "",
      date_ouverture_compte: "",
      montant_epargne: "",
      duree: ""
    }],
    comptes_conjoint: [{
      banque: "",
      libelle: "",
      autre_libelle: "",
      numero_compte: "",
      rib: "",
      iban: "",
      montant: "",
      date_extration_releve: "",
      date_ouverture_compte: "",
      montant_epargne: "",
      duree: ""
    }],
    isLoadingDataBanque: false,
    // Ajouter note
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
    soldeList: ["Compte courant", "Compte CAV", "Compte CSE", "Compte DAT", "Compte PEL", "Compte PEP", "Compte chèque", "Compte d'engagement", "Compte d'impayés", "Compte de garanties", "Compte d'épargne", "Compte de placement", "Compte en devises", "Compte titres", "Autre"],
    fonctionnement_comptes: [{
      "id": 1,
      "numero_compte": "",
      "fonctionnement": "",
      "commentaire": ""
    }],
    list_fonctionnement_comptes: [{
      "id": 1,
      "label": "Survenance d’impayé"
    }, {
      "id": 2,
      "label": "Incidents Banque Centrale"
    }, {
      "id": 3,
      "label": "Compte Créditeur ou à l’intérieur de l’autorisation"
    }, {
      "id": 4,
      "label": "Rien à signaler"
    }],
    list_comptes: []
  }, "seen4", true);
}), "methods", {
  convertDDMMYYYYtoYYYYMMDD: function convertDDMMYYYYtoYYYYMMDD(dateString) {
    if (typeof dateString !== 'string' || !dateString.includes('/')) {
      // console.warn('Date invalide :', dateString);
      return null; // ou retourne une valeur par défaut
    }
    var _dateString$split$map = dateString.split('/').map(Number),
      _dateString$split$map2 = _slicedToArray(_dateString$split$map, 3),
      day = _dateString$split$map2[0],
      month = _dateString$split$map2[1],
      year = _dateString$split$map2[2];

    // Vérification de base
    if (isNaN(day) || isNaN(month) || isNaN(year) || day < 1 || day > 31 || month < 1 || month > 12 || year < 1000) {
      console.warn('Composants de date invalides :', {
        day: day,
        month: month,
        year: year
      });
      return null;
    }
    var date = new Date(year, month - 1, day);
    var formattedYear = date.getFullYear();
    var formattedMonth = String(date.getMonth() + 1).padStart(2, '0');
    var formattedDay = String(date.getDate()).padStart(2, '0');
    return "".concat(formattedYear, "-").concat(formattedMonth, "-").concat(formattedDay);
  },
  tousLesComptes: function tousLesComptes() {
    var _this$core_banking_in,
      _this4 = this,
      _accountsData$comptes,
      _accountsData$autres_,
      _accountsData$credits,
      _accountsData$caution,
      _accountsData$credits2,
      _accountsData$autres;
    var accountsData = ((_this$core_banking_in = this.core_banking_info) === null || _this$core_banking_in === void 0 ? void 0 : _this$core_banking_in.accounts_data) || {};
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
      var _this4$meta_data;
      return {
        numero_compte: item.code || "",
        date_extration_releve: _this4.formatDate((_this4$meta_data = _this4.meta_data) === null || _this4$meta_data === void 0 || (_this4$meta_data = _this4$meta_data.dossier_credit) === null || _this4$meta_data === void 0 ? void 0 : _this4$meta_data.created_at) || "",
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
  contientEpargne: function contientEpargne(phrase) {
    return phrase.toLowerCase().includes('epargne');
  },
  isEpargneAccount: function isEpargneAccount(libelle) {
    if (!libelle) return false;
    return libelle.toLowerCase().includes("comptes epargne") || libelle.toLowerCase().includes("compte epargne") || libelle.toLowerCase().includes("compte d'épargne") || libelle.toLowerCase().includes("compte d'epargne");
  },
  selectedOptionFonction2: function selectedOptionFonction2(value, obj) {
    this.formDataToBeWatched.conjoint.fonction = obj === null || obj === void 0 ? void 0 : obj.libelle;
    if (this.conjoint_fonction == 'Autre') {
      this.formDataToBeWatched.conjoint.fonction = "";
    }
    this.handleInput();
  },
  getFcubAccountClassTab: function getFcubAccountClassTab() {
    var _this5 = this;
    _services_afg_service__WEBPACK_IMPORTED_MODULE_2__["default"].getFcubAccountClassTab().then(function (res) {
      // this.dynamique_question = res?.data
      _this5.type_credits_facilite = res === null || res === void 0 ? void 0 : res.data;
      // console.log("la data=>",data)
      // this.handleInput()
    })["catch"](function (err) {
      console.log(err);
    });
  },
  formatDate: function formatDate(isoDate) {
    if (!isoDate) return "";
    var date = new Date(isoDate);
    // console.log("date", date);
    if (isNaN(date.getTime())) return "";
    var day = String(date.getDate()).padStart(2, '0');
    var month = String(date.getMonth() + 1).padStart(2, '0');
    var year = date.getFullYear();
    return "".concat(year, "-").concat(month, "-").concat(day);

    // return new Intl.DateTimeFormat('fr-FR', {
    //     day: '2-digit',
    //     month: 'long',
    //     year: 'numeric'
    // }).format(date);
  },
  // ? ** formDataToBeWatched Cache Management Functions
  /**
   * sets up formToBeWatched cache management related listeners and stuff
   * ! to be executed in the *created* method
   */
  setupCache: function setupCache() {
    if (_DEBUG) console.log(">> setupCache");

    // ? Upload data to server before the page/tab/browser closes
    // ! Only visibly works on page reload, for some reason
    window.addEventListener("beforeunload", this.beforePageIsClosed);
    // console.log("beforePageIsClosed subscribed");
  },
  /**
   * adds an attribute to the formDataToBeWatched so that when it's deleted the pageunload callback doesn't refill it with empty values
   */
  updateFormDataForDeletion: function updateFormDataForDeletion() {
    var _this6 = this;
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            if (_DEBUG) console.log(">> updateFormDataForDeletion");
            _this6.formDataToBeWatched.is_deleted = true;
            // Actually delete from cache
            _context2.next = 4;
            return _cache["delete"](documentId);
          case 4:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }))();
  },
  /**
   * executes before the page/tab/browser is closed
   * ! actually only works when the tab is refreshed
   */
  beforePageIsClosed: function beforePageIsClosed(event) {
    var _this7 = this;
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            event.preventDefault();
            event.returnValue = ""; // ! Won't work without this

            if (_DEBUG) console.log(">> beforePageIsClosed");
            // shows native popup
            // ! Only works on page reloads

            // Check if formDataToBeWatched is empty
            if (!_this7.formDataToBeWatched.is_deleted) {
              _context3.next = 5;
              break;
            }
            return _context3.abrupt("return");
          case 5:
            // Upload current (and arguably latest) formDataToBeWatched data

            _this7.uploadDataToServerAndUpdateLastSave(_this7.formDataToBeWatched, _this7.formDataToBeWatched);
            if (_DEBUG) console.log("<< beforePageIsClosed");
          case 7:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    }))();
  },
  /**
   * initialises the caches and throws exceptions/notifications when cache is not available
   * @important uses the page param templateId to uniquely identify tables in the indexedDB
   * @param  {void}
   * @return {void}
   */
  initCache: function initCache() {
    if (_DEBUG) console.log(">> initCache");
    if (_cache) return;
    // ! Check if this.tb_name exists, this variable only exists in table components so if it exists it means that a table component is currently active
    if (!this.tb_name) return;
    // ? Config for the indexedDB cache manager
    documentName = this.tb_name;
    var templateId = this.$route.params.templateId;
    // ? This mixin is made for formDataToBeWatched in tables that have templateId
    // If templateDoesn't exist exit
    if (!templateId) return;
    var name = indexedDBName + "-" + templateId;
    var store = collectionName + "-" + templateId;
    documentId = documentName + "-" + templateId;
    //
    try {
      _cache = new (_helpers_indexedDB__WEBPACK_IMPORTED_MODULE_6___default())({
        name: name,
        store: store
      });
      if (_DEBUG) console.log("<< initCache");
    } catch (error) {
      if (_DEBUG) console.error("xx initCache ", error);
    }

    // Start timer
    clearInterval(_cacheAutosaveInterval);
    if (_DEBUG) console.log(">> Set up timer");
    _cacheAutosaveInterval = setInterval(this.uploadDataToServerEvery30Seconds, 1000);

    // Delete formDataToBeWatched without having to upload before reload
    if (_DEBUG) console.log(">> EventBus.$on tbDeleted");
    EventBus.$on("tbDeleted", this.updateFormDataForDeletion);
  },
  /**
   * saves form data in cache before sending form data to backend on ˜user idle˜ or in specified intervals
   * @param  {Object} newVal updated form data
   * @param  {Object} oldVal old form data
   * @return {void}
   */
  saveDataInCache: function saveDataInCache(newVal, oldVal) {
    var _this8 = this;
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
      var data, timeSpentInSeconds;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            if (_DEBUG) console.log(">> saveDataInCache");
            // Check if cache exists
            if (!_cache) {
              if (_DEBUG) console.log(">< saveDataInCache no cache");
              // this.initCache();
            }
            // * TODO
            // [x] - Save data locally on strokes as cache in indexedDB
            // [x] - Upload cached data when user is idle or on interval timeout
            // [x] - Clear cache data from indexDB
            // [x] - Rinse & Repeat
            data = _objectSpread({
              documentId: documentId
            }, newVal); // Update or Insert newVal in Object store
            _context4.next = 5;
            return _cache.upsert(documentId, data);
          case 5:
            if (_lastSaveTime != null) {
              // Last save time exists
              timeSpentInSeconds = (Date.now() - _lastSaveTime) / 1000; // Upload data to serve, update last save and clear cache when interval timeout
              if (timeSpentInSeconds >= _onlineSaveIntervalTimeInSeconds) {
                _this8.uploadDataToServerAndUpdateLastSave(newVal, oldVal);
              }
            }
            // First upload
            if (!_lastSaveTime) {
              _this8.uploadDataToServerAndUpdateLastSave(newVal, oldVal);
            }
          case 7:
          case "end":
            return _context4.stop();
        }
      }, _callee4);
    }))();
  },
  /**
   * does exactly what the long ass name says lol
   * @param  {Object} newVal updated form data
   * @param  {Object} oldVal old form data
   * @return {void}
   */
  uploadDataToServerAndUpdateLastSave: function uploadDataToServerAndUpdateLastSave(newVal, oldVal) {
    var _this9 = this;
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            if (_DEBUG) console.log(">> uploadDataToServerAndUpdateLastSave");
            _context5.prev = 1;
            if (_DEBUG) console.log(">> this.autosaving");
            _context5.next = 5;
            return _this9.autosaving(newVal, oldVal);
          case 5:
            // Update last save time
            _lastSaveTime = Date.now();
            // ! DONOT Clear cache
            // _cache.delete(documentId);
            if (_DEBUG) console.log("<< uploadDataToServerAndUpdateLastSave");
            _context5.next = 12;
            break;
          case 9:
            _context5.prev = 9;
            _context5.t0 = _context5["catch"](1);
            // TODO add error
            if (_DEBUG) console.error("xx uploadDataToServerAndUpdateLastSave", _context5.t0);
          case 12:
          case "end":
            return _context5.stop();
        }
      }, _callee5, null, [[1, 9]]);
    }))();
  },
  /**
   * it displays a pop when the user is about to close the tab or browser
   * then uploads formToBeWatched data to server to avoid losing data on unexpected page close
   * @param  {Object} newVal updated form data
   * @param  {Object} oldVal old form data
   * @return {void}
   */
  uploadDataToServerBeforePageCloses: function uploadDataToServerBeforePageCloses() {
    var _this0 = this;
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
      return _regeneratorRuntime().wrap(function _callee6$(_context6) {
        while (1) switch (_context6.prev = _context6.next) {
          case 0:
            if (_DEBUG) console.log(">> uploadDataToServerBeforePageCloses");
            _context6.prev = 1;
            _context6.next = 4;
            return _this0.autosaving(newVal, oldVal);
          case 4:
            // Update last save time
            _lastSaveTime = Date.now();
            // Clear cache
            _cache["delete"](documentId);
            if (_DEBUG) console.log("<< uploadDataToServerBeforePageCloses");
            _context6.next = 12;
            break;
          case 9:
            _context6.prev = 9;
            _context6.t0 = _context6["catch"](1);
            // TODO add error
            if (_DEBUG) console.error("xx uploadDataToServerBeforePageCloses", _context6.t0);
          case 12:
          case "end":
            return _context6.stop();
        }
      }, _callee6, null, [[1, 9]]);
    }))();
  },
  /**
   * does exactly what the name says
   * @return {void}
   */
  uploadDataToServerEvery30Seconds: function uploadDataToServerEvery30Seconds() {
    var _this1 = this;
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
      return _regeneratorRuntime().wrap(function _callee7$(_context7) {
        while (1) switch (_context7.prev = _context7.next) {
          case 0:
            // if (_DEBUG) console.log(">> uploadDataToServerEvery30Seconds", _timeSpentInSeconds);
            _timeSpentInSeconds++;
            if (!(_timeSpentInSeconds % 30 != 0)) {
              _context7.next = 3;
              break;
            }
            return _context7.abrupt("return");
          case 3:
            if (_DEBUG) console.log(">> uploadDataToServerEvery30Seconds", _timeSpentInSeconds);
            _context7.prev = 4;
            if (_DEBUG) console.log(">> uploadDataToServerEvery30Seconds >> autosaving", _timeSpentInSeconds);
            _context7.next = 8;
            return _this1.autosaving(_this1.formDataToBeWatched, _this1.formDataToBeWatched);
          case 8:
            // Update last save time
            _lastSaveTime = Date.now();
            // Clear cache ?
            // _cache.delete(documentId);
            if (_DEBUG) console.log("<< uploadDataToServerEvery30Seconds << autosaving");
            _context7.next = 15;
            break;
          case 12:
            _context7.prev = 12;
            _context7.t0 = _context7["catch"](4);
            // TODO add error
            if (_DEBUG) console.error("xx uploadDataToServerEvery30Seconds", _context7.t0);
          case 15:
          case "end":
            return _context7.stop();
        }
      }, _callee7, null, [[4, 12]]);
    }))();
  },
  // End Cache management functions
  slctExistant: function slctExistant() {
    var _this$meta_data$dossi;
    var existance;
    var experience = (_this$meta_data$dossi = this.meta_data.dossier_credit) === null || _this$meta_data$dossi === void 0 || (_this$meta_data$dossi = _this$meta_data$dossi.cred_pub_tb_00) === null || _this$meta_data$dossi === void 0 ? void 0 : _this$meta_data$dossi.experience_secteur;
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
    _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["default"].loadUserData().then(function (res) {
      _this10.send2Backend(res, 0, 0);
    })["catch"](function (err) {
      _this10.loadWithError(err);
    });
  },
  SetPermanantEmp: function SetPermanantEmp(event, index) {
    this.source_revenus[index][event[0]] = event[1];
    // this.formDataToBeWatched['total'] = parseInt(this.som)
    this.formDataToBeWatched["total"] = this.totalMontant;
    this.handleInput();
  },
  formDataVars: function formDataVars(event) {
    console.log("test Okk", event);
    this.formDataToBeWatched[event[0]] = event[1];
    console.log("formDataToBeWatched", this.formDataToBeWatched);
    // this.handleInput();
  },
  onChange: function onChange(e) {
    if (e.target.value == "Non") {
      this.disp = true;
    } else {
      this.disp = false;
    }
  },
  loadRetrieved: function loadRetrieved() {
    var lentb = this.meta_data["dossier_credit"]["tbs_in_use"];
    var createdKey = this.tb_name;
    var createdKeyArr = createdKey.split("tb");
    // console.log("createdKeyArr", createdKeyArr);
    createdKey = "cred_pub_tb_" + createdKeyArr[1];
    if (this.meta_data["dossier_credit"][createdKey] == undefined) {
      if (this.meta_data["dossier_credit"]["client_core_banking"] != undefined) {
        var _client_core_banking$;
        var client_core_banking = this.meta_data["dossier_credit"]["client_core_banking"];
        this.matchingCoreBanking();
        var compte_numero = client_core_banking === null || client_core_banking === void 0 || (_client_core_banking$ = client_core_banking.accounts_data) === null || _client_core_banking$ === void 0 || (_client_core_banking$ = _client_core_banking$.comptes_courants) === null || _client_core_banking$ === void 0 || (_client_core_banking$ = _client_core_banking$[0]) === null || _client_core_banking$ === void 0 ? void 0 : _client_core_banking$.code;
        if (compte_numero != undefined) {
          var _this$comptes$;
          if (((_this$comptes$ = this.comptes[0]) === null || _this$comptes$ === void 0 ? void 0 : _this$comptes$.compte_cheque) != undefined) {
            this.comptes[0].compte_cheque = compte_numero;
            this.formDataToBeWatched.comptes = this.comptes;
          }
        }
      }
    } else {}
    if (lentb.length > 0) {
      if (this.meta_data["dossier_credit"][createdKey] != undefined) {
        var _this$meta_data$dossi2, _this$meta_data$dossi3;
        this.formDataToBeWatched = this.meta_data["dossier_credit"][createdKey];

        /* if (this.formDataToBeWatched["banque"] != "" && this.formDataToBeWatched["banque"]?.nom) {
            this.banqueName = this.formDataToBeWatched["banque"].nom;
            this.getBanqueOthers(this.banqueName);
        } */

        if (this.meta_data["dossier_credit"][createdKey]["comptes"] != "") {
          this.comptes = this.meta_data["dossier_credit"][createdKey]["comptes"];
        }
        if (this.meta_data["dossier_credit"][createdKey]["comptes_conjoint"] != "") {
          this.comptes_conjoint = this.meta_data["dossier_credit"][createdKey]["comptes_conjoint"];
        }
        if (((_this$meta_data$dossi2 = this.meta_data["dossier_credit"][createdKey]["fonctionnement_comptes"]) === null || _this$meta_data$dossi2 === void 0 ? void 0 : _this$meta_data$dossi2.length) > 0) {
          this.fonctionnement_comptes = this.meta_data["dossier_credit"][createdKey]["fonctionnement_comptes"];
        }
        if (((_this$meta_data$dossi3 = this.meta_data["dossier_credit"][createdKey]["comptes_chez_confrere"]) === null || _this$meta_data$dossi3 === void 0 ? void 0 : _this$meta_data$dossi3.length) > 0) {
          this.comptes_chez_confrere = this.meta_data["dossier_credit"][createdKey]["comptes_chez_confrere"];
        }

        // Regrouper les deux listes dans list_comptes
        this.list_comptes = [].concat(_toConsumableArray(this.comptes), _toConsumableArray(this.comptes_chez_confrere));
      } else {}
    }
    if (this.meta_data["dossier_credit"]["cred_pub_tb_120001"] != undefined) {
      var _this$meta_data$dossi4, _this$meta_data$dossi5;
      this.matrimoniale = (_this$meta_data$dossi4 = this.meta_data["dossier_credit"]["cred_pub_tb_120001"]) === null || _this$meta_data$dossi4 === void 0 ? void 0 : _this$meta_data$dossi4.matrimoniale;
      this.date_entree_en_relation = (_this$meta_data$dossi5 = this.meta_data["dossier_credit"]["cred_pub_tb_120001"]) === null || _this$meta_data$dossi5 === void 0 ? void 0 : _this$meta_data$dossi5.date_entree_en_relation;
    }
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
    this.formDataToBeWatched.comptes = this.comptes;
    this.formDataToBeWatched.comptes_conjoint = this.comptes_conjoint;
    this.formDataToBeWatched.fonctionnement_comptes = this.fonctionnement_comptes;
    this.formDataToBeWatched.comptes_chez_confrere = this.comptes_chez_confrere;
    this.list_comptes = [].concat(_toConsumableArray(this.comptes), _toConsumableArray(this.comptes_chez_confrere));
    this.emitData2();
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
      id: "dcp-ppo5-head"
    };
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
  addMore: function addMore(objectName) {
    this[objectName].push({
      banque: "",
      anciennete: "",
      compte_cheque: "",
      compte_d_engagement: "",
      compte_d_impayes: "",
      compte_de_garanties: "",
      libelle: "",
      montant: ""
    });
    this.handleInput();
  },
  remove: function remove(objectName, index) {
    this[objectName].splice(index, 1);
    this.handleInput();
  },
  selectedOptionBanque: function selectedOptionBanque(selectedOption, object) {
    this.formDataToBeWatched.banque = object;
  },
  getBanqueOthers: function getBanqueOthers(searchQuery, id) {
    var _this11 = this;
    searchQuery = searchQuery.toString().trim();
    if (searchQuery.length > 2) {
      this.isLoadingDataBanque = true;
      _services_credit_service__WEBPACK_IMPORTED_MODULE_3__["default"].loadBanqueOthers(searchQuery).then(function (res) {
        _this11.banques = res.data.data;
        _this11.isLoadingDataBanque = false;
      })["catch"](function (err) {
        console.log(err);
      });
    } else {
      this.isLoadingDataBanque = false;
    }
  },
  formDataVars2: function formDataVars2(event, index, objectName, keyName) {
    this[objectName][index][keyName] = event[1];
    this.handleInput();
  },
  addMoreCompte: function addMoreCompte() {
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
  },
  addMoreCompteConfrere: function addMoreCompteConfrere() {
    this.comptes_chez_confrere.push({
      banque: "",
      libelle: "",
      autre_libelle: "",
      anciennete: "",
      numero_compte: "",
      montant: "",
      date_extration_releve: "",
      date_ouverture_compte: "",
      montant_epargne: "",
      duree: ""
    });
    this.handleInput();
    this.$forceUpdate();
  },
  addMoreCompteConjoint: function addMoreCompteConjoint() {
    this.comptes_conjoint.push({
      banque: "",
      libelle: "",
      autre_libelle: "",
      anciennete: "",
      numero_compte: "",
      montant: "",
      date_extration_releve: "",
      date_ouverture_compte: "",
      montant_epargne: "",
      duree: ""
    });
    this.handleInput();
    this.$forceUpdate();
  },
  addMoreCompteAdjoint: function addMoreCompteAdjoint() {
    this.comptes_conjoint.push({
      banque: "",
      libelle: "",
      autre_libelle: "",
      anciennete: "",
      numero_compte: "",
      montant: "",
      date_extration_releve: "",
      date_ouverture_compte: "",
      montant_epargne: "",
      duree: ""
    });
    this.handleInput();
  },
  handleInput2: function handleInput2(key) {
    this.formDataToBeWatched[key] = this[key];
  },
  addMoreFctCompte: function addMoreFctCompte() {
    var id = this.fonctionnement_comptes.length + 1;
    this.fonctionnement_comptes.push({
      "id": id,
      "numero_compte": "",
      "fonctionnement": "",
      "commentaire": ""
    });
    this.handleInput2("fonctionnement_comptes");
  },
  removeLine: function removeLine(index, key) {
    this[key].splice(index, 1);
    this.handleInput2("fonctionnement_comptes");
  },
  matchingCoreBanking: function matchingCoreBanking() {
    this.comptes = this.tousLesComptes();
    if (['', null, undefined].includes(this.comptes) || Array.isArray(this.comptes) && this.comptes.length == 0) {
      this.addMoreCompte();
    }
    this.handleInput();
    // console.log("COMPTES",this.comptes)
  },
  emitData2: function emitData2() {
    EventBus.$emit("dossier-updated-dcpp-3", {
      data_tb3: this.formDataToBeWatched
    });
  }
}), "watch", {
  formDataToBeWatched: {
    handler: function handler(newVal, oldVal) {
      this.autosaving(newVal, oldVal);
    },
    deep: true,
    immediate: true
  }
}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/carcasse_ppo/DCPP-PCP3.vue?vue&type=template&id=3ab20f90&scoped=true":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/carcasse_ppo/DCPP-PCP3.vue?vue&type=template&id=3ab20f90&scoped=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm$formDataToBeWatch, _vm$formDataToBeWatch2;
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
      id: "dcp-ppo5-head"
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col"
  }, [_vm._v("\n                            " + _vm._s(_vm.tb_display_name) + " : Informations sur le(s) compte(s)\n                        ")]), _vm._v(" "), _c("div", {
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
  }, [_c("span", [_vm._v(" " + _vm._s(_vm.formDataToBeWatched.notes.length) + " ")])])])]) : _vm._e(), _vm._v(" "), _c("chevron-up-icon", {
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
  }, [_vm.seen4 ? _c("div", {
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
  }, [_vm._m(0), _vm._v(" "), _c("tbody", _vm._l(_vm.comptesAFGBank, function (el, ind) {
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
        fn: function fn(_ref) {
          var option = _ref.option;
          return [_c("p", {
            staticClass: "multiselect-option"
          }, [_vm._v(_vm._s(option.description))])];
        }
      }, {
        key: "singlelabel",
        fn: function fn(_ref2) {
          var value = _ref2.value;
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
          return _vm.remove("comptes", ind);
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
  })], 1)])]), _vm._v(" "), _vm.seen5 ? _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "relook-header",
    on: {
      click: function click($event) {
        _vm.seen5 = !_vm.seen5;
      }
    }
  }, [_c("h6", {
    "class": " subdiv" + this.tb_name,
    attrs: {
      id: "frais-de-crédit-chez-confrere"
    }
  }, [_vm._v("\n                                Compte(s) chez les confrères\n                                "), _c("chevron-up-icon", {
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
  }, [_vm._m(1), _vm._v(" "), _c("tbody", _vm._l(_vm.comptesAutreBank, function (el, ind) {
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
        type: "text"
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
    }, [_c("div", {
      staticClass: "d-flex position-relative align-items-center"
    }, [_c("select", {
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
      on: {
        change: [function ($event) {
          var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
            return o.selected;
          }).map(function (o) {
            var val = "_value" in o ? o._value : o.value;
            return val;
          });
          _vm.$set(el, "libelle", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
        }, _vm.handleInput]
      }
    }, [_c("option", {
      attrs: {
        value: "",
        disabled: "",
        selected: ""
      }
    }, [_vm._v("--- Sélectionner l'intitulé ---")]), _vm._v(" "), _c("option", {
      attrs: {
        value: ""
      }
    }), _vm._v(" "), _vm._l(_vm.soldeList, function (val, ind_) {
      return _c("option", {
        key: ind_,
        domProps: {
          value: val
        }
      }, [_vm._v(_vm._s(val))]);
    })], 2), _vm._v(" "), el.libelle == "Autre" ? _c("div", {
      staticStyle: {
        "margin-left": "5px"
      }
    }, [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: el.autre_libelle,
        expression: "el.autre_libelle"
      }],
      staticClass: "form-control",
      staticStyle: {
        width: "150px"
      },
      attrs: {
        type: "text"
      },
      domProps: {
        value: el.autre_libelle
      },
      on: {
        input: [function ($event) {
          if ($event.target.composing) return;
          _vm.$set(el, "autre_libelle", $event.target.value);
        }, _vm.handleInput]
      }
    })]) : _vm._e()])]), _vm._v(" "), _c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: el.iban,
        expression: "el.iban"
      }],
      staticClass: "form-control",
      staticStyle: {
        width: "150px"
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
    })]), _vm._v(" "), _c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: el.numero_compte,
        expression: "el.numero_compte"
      }],
      staticClass: "form-control",
      staticStyle: {
        width: "150px"
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
    })]), _vm._v(" "), _c("td", [_c("date-input", {
      staticStyle: {
        width: "210px"
      },
      attrs: {
        value: el.date_ouverture_compte,
        id: "date_ouverture_compte"
      },
      on: {
        input: function input($event) {
          return _vm.formDataVars2($event, ind, "comptes_chez_confrere", "date_ouverture_compte");
        }
      }
    })], 1), _vm._v(" "), _c("td", [_c("currency-input2", {
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
        value: el.montant,
        callback: function callback($$v) {
          _vm.$set(el, "montant", $$v);
        },
        expression: "el.montant"
      }
    })], 1), _vm._v(" "), _c("td", [_c("currency-input2", {
      staticStyle: {
        width: "150px"
      },
      attrs: {
        "default-typing": false,
        readonly: !_vm.isEpargneAccount(el.libelle)
      },
      on: {
        input: _vm.handleInput
      },
      model: {
        value: el.montant_epargne,
        callback: function callback($$v) {
          _vm.$set(el, "montant_epargne", $$v);
        },
        expression: "el.montant_epargne"
      }
    })], 1), _vm._v(" "), _c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: el.duree,
        expression: "el.duree"
      }],
      staticClass: "form-control",
      staticStyle: {
        width: "150px"
      },
      attrs: {
        type: "number",
        readonly: !_vm.isEpargneAccount(el.libelle)
      },
      domProps: {
        value: el.duree
      },
      on: {
        input: [function ($event) {
          if ($event.target.composing) return;
          _vm.$set(el, "duree", $event.target.value);
        }, _vm.handleInput]
      }
    })]), _vm._v(" "), _c("td", [_c("date-input", {
      staticStyle: {
        width: "210px"
      },
      attrs: {
        value: el.date_extration_releve,
        id: "date_extration_releve"
      },
      on: {
        input: function input($event) {
          return _vm.formDataVars2($event, ind, "comptes_chez_confrere", "date_extration_releve");
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
          return _vm.addMoreCompteConfrere();
        }
      }
    }, [_c("plus-icon", {
      staticClass: "custom-class",
      attrs: {
        size: "21"
      }
    })], 1) : _c("button", {
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
          return _vm.remove("comptes_chez_confrere", ind);
        }
      }
    }, [_c("trash-icon", {
      staticClass: "custom-class",
      attrs: {
        size: "21"
      }
    })], 1)])]);
  }), 0)])])])]) : _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "relook-header",
    on: {
      click: function click($event) {
        _vm.seen5 = !_vm.seen5;
      }
    }
  }, [_c("h6", {
    attrs: {
      id: "frais-de-crédit-chez-confrere"
    }
  }, [_vm._v("\n                                Compte(s) chez les confrères\n                                "), _c("chevron-down-icon", {
    staticClass: "custom-class",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    },
    attrs: {
      size: "21"
    }
  })], 1)])]), _vm._v(" "), _vm.matrimoniale == "Marié(e)" ? _c("div", [_vm.seen6 ? _c("div", {
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
      id: "frais-de-crédit-conjoint"
    }
  }, [_vm._v("\n                                    Compte(s) conjoint(e)\n                                    "), _c("chevron-up-icon", {
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
  }, [_vm._m(2), _vm._v(" "), _c("tbody", _vm._l(_vm.comptesConjointBank, function (el, ind) {
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
        type: "text"
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
    }, [_c("div", {
      staticClass: "d-flex position-relative align-items-center"
    }, [_c("select", {
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
      on: {
        change: [function ($event) {
          var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
            return o.selected;
          }).map(function (o) {
            var val = "_value" in o ? o._value : o.value;
            return val;
          });
          _vm.$set(el, "libelle", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
        }, _vm.handleInput]
      }
    }, [_c("option", {
      attrs: {
        value: "",
        disabled: "",
        selected: ""
      }
    }, [_vm._v("--- Sélectionner l'intitulé ---")]), _vm._v(" "), _c("option", {
      attrs: {
        value: ""
      }
    }), _vm._v(" "), _vm._l(_vm.soldeList, function (val, ind_) {
      return _c("option", {
        key: ind_,
        domProps: {
          value: val
        }
      }, [_vm._v(_vm._s(val))]);
    })], 2), _vm._v(" "), el.libelle == "Autre" ? _c("div", {
      staticStyle: {
        "margin-left": "5px"
      }
    }, [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: el.autre_libelle,
        expression: "el.autre_libelle"
      }],
      staticClass: "form-control",
      staticStyle: {
        width: "150px"
      },
      attrs: {
        type: "text"
      },
      domProps: {
        value: el.autre_libelle
      },
      on: {
        input: [function ($event) {
          if ($event.target.composing) return;
          _vm.$set(el, "autre_libelle", $event.target.value);
        }, _vm.handleInput]
      }
    })]) : _vm._e()])]), _vm._v(" "), _c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: el.iban,
        expression: "el.iban"
      }],
      staticClass: "form-control",
      staticStyle: {
        width: "150px"
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
    })]), _vm._v(" "), _c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: el.numero_compte,
        expression: "el.numero_compte"
      }],
      staticClass: "form-control",
      staticStyle: {
        width: "150px"
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
    })]), _vm._v(" "), _c("td", [_c("date-input", {
      staticStyle: {
        width: "210px"
      },
      attrs: {
        value: el.date_ouverture_compte,
        id: "date_ouverture_compte"
      },
      on: {
        input: function input($event) {
          return _vm.formDataVars2($event, ind, "comptes_conjoint", "date_ouverture_compte");
        }
      }
    })], 1), _vm._v(" "), _c("td", [_c("currency-input2", {
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
        value: el.montant,
        callback: function callback($$v) {
          _vm.$set(el, "montant", $$v);
        },
        expression: "el.montant"
      }
    })], 1), _vm._v(" "), _c("td", [_c("currency-input2", {
      staticStyle: {
        width: "150px"
      },
      attrs: {
        "default-typing": false,
        readonly: !_vm.isEpargneAccount(el.libelle)
      },
      on: {
        input: _vm.handleInput
      },
      model: {
        value: el.montant_epargne,
        callback: function callback($$v) {
          _vm.$set(el, "montant_epargne", $$v);
        },
        expression: "el.montant_epargne"
      }
    })], 1), _vm._v(" "), _c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: el.duree,
        expression: "el.duree"
      }],
      staticClass: "form-control",
      staticStyle: {
        width: "150px"
      },
      attrs: {
        type: "number",
        readonly: !_vm.isEpargneAccount(el.libelle)
      },
      domProps: {
        value: el.duree
      },
      on: {
        input: [function ($event) {
          if ($event.target.composing) return;
          _vm.$set(el, "duree", $event.target.value);
        }, _vm.handleInput]
      }
    })]), _vm._v(" "), _c("td", [_c("date-input", {
      staticStyle: {
        width: "210px"
      },
      attrs: {
        value: el.date_extration_releve,
        id: "date_extration_releve"
      },
      on: {
        input: function input($event) {
          return _vm.formDataVars2($event, ind, "comptes_conjoint", "date_extration_releve");
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
          return _vm.addMoreCompteConjoint();
        }
      }
    }, [_c("plus-icon", {
      staticClass: "custom-class",
      attrs: {
        size: "21"
      }
    })], 1) : _c("button", {
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
          return _vm.remove("comptes_conjoint", ind);
        }
      }
    }, [_c("trash-icon", {
      staticClass: "custom-class",
      attrs: {
        size: "21"
      }
    })], 1)])]);
  }), 0)])])])]) : _c("div", {
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
      id: "frais-de-crédit-conjoint"
    }
  }, [_vm._v("\n                                    Compte(s) conjoint(e)\n                                    "), _c("chevron-down-icon", {
    staticClass: "custom-class",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    },
    attrs: {
      size: "21"
    }
  })], 1)])])]) : _vm._e(), _vm._v(" "), _vm.seen4 ? _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "relook-header",
    on: {
      click: function click($event) {
        _vm.seen4 = !_vm.seen4;
      }
    }
  }, [_c("h6", {
    "class": " subdiv7" + this.tb_name,
    attrs: {
      id: "Caractéristiques-du-prêt"
    }
  }, [_vm._v("\n                                Fonctionnement de compte(s)\n                                "), _c("chevron-up-icon", {
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
  }, [_vm._m(3), _vm._v(" "), _c("tbody", _vm._l(_vm.fonctionnement_comptes, function (cmpte, index) {
    return _c("tr", {
      key: "fct_cpte" + cmpte.id
    }, [_c("td", [_c("div", {
      staticClass: "d-flex position-relative align-items-center"
    }, [_c("select", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: cmpte.numero_compte,
        expression: "cmpte.numero_compte"
      }],
      staticClass: "form-control",
      staticStyle: {
        "min-width": "200px"
      },
      on: {
        change: [function ($event) {
          var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
            return o.selected;
          }).map(function (o) {
            var val = "_value" in o ? o._value : o.value;
            return val;
          });
          _vm.$set(cmpte, "numero_compte", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
        }, _vm.handleInput]
      }
    }, [_c("option", {
      attrs: {
        value: "",
        disabled: "",
        selected: ""
      }
    }, [_vm._v("--- Sélectionner l'intitulé ---")]), _vm._v(" "), _c("option", {
      attrs: {
        value: ""
      }
    }), _vm._v(" "), _vm._l(_vm.list_comptes, function (val, ind_) {
      return _c("option", {
        key: ind_,
        domProps: {
          value: val.numero_compte
        }
      }, [_vm._v(_vm._s(val.numero_compte) + "-" + _vm._s(val.libelle) + "-" + _vm._s(val.banque))]);
    })], 2)])]), _vm._v(" "), _c("td", {
      staticClass: "text-center"
    }, [_c("div", {
      staticClass: "d-flex position-relative align-items-center"
    }, [_c("select", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: cmpte.fonctionnement,
        expression: "cmpte.fonctionnement"
      }],
      staticClass: "form-control",
      staticStyle: {
        "min-width": "300px !important"
      },
      on: {
        change: [function ($event) {
          var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
            return o.selected;
          }).map(function (o) {
            var val = "_value" in o ? o._value : o.value;
            return val;
          });
          _vm.$set(cmpte, "fonctionnement", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
        }, _vm.handleInput]
      }
    }, [_c("option", {
      attrs: {
        value: "",
        disabled: "",
        selected: ""
      }
    }, [_vm._v("--- Sélectionner l'intitulé ---")]), _vm._v(" "), _c("option", {
      attrs: {
        value: ""
      }
    }), _vm._v(" "), _vm._l(_vm.list_fonctionnement_comptes, function (val, ind_) {
      return _c("option", {
        key: ind_,
        domProps: {
          value: val.label
        }
      }, [_vm._v(_vm._s(val.label))]);
    })], 2)])]), _vm._v(" "), _c("td", {
      staticClass: "text-center"
    }, [_c("div", {
      staticClass: "mr-4"
    }, [_c("textarea", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: cmpte.commentaire,
        expression: "cmpte.commentaire"
      }],
      staticClass: "form-control",
      staticStyle: {
        width: "300px !important"
      },
      attrs: {
        rows: "1",
        id: "commentaire"
      },
      domProps: {
        value: cmpte.commentaire
      },
      on: {
        input: [function ($event) {
          if ($event.target.composing) return;
          _vm.$set(cmpte, "commentaire", $event.target.value);
        }, _vm.handleInput]
      }
    })])]), _vm._v(" "), _c("td", {
      staticClass: "vertical-middle"
    }, [index == 0 ? _c("button", {
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
          return _vm.addMoreFctCompte();
        }
      }
    }, [_c("plus-icon", {
      staticClass: "custom-class",
      attrs: {
        size: "21"
      }
    })], 1) : _vm._e(), _vm._v(" "), index == 1 ? _c("button", {
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
          return _vm.removeLine(index, "fonctionnement_comptes");
        }
      }
    }, [_c("trash-icon", {
      staticClass: "custom-class",
      attrs: {
        size: "21"
      }
    })], 1) : _vm._e()])]);
  }), 0)]), _vm._v(" "), _c("br"), _vm._v(" "), _vm._m(4), _vm._v(" "), _c("vue-editor", {
    attrs: {
      id: "commentaire_fonctionnement_cmpte"
    },
    on: {
      "update-value": function updateValue($event) {
        _vm.formDataToBeWatched[$event[0]] = $event[1];
      }
    },
    model: {
      value: _vm.formDataToBeWatched.commentaire_fonctionnement_cmpte,
      callback: function callback($$v) {
        _vm.$set(_vm.formDataToBeWatched, "commentaire_fonctionnement_cmpte", $$v);
      },
      expression: "formDataToBeWatched.commentaire_fonctionnement_cmpte"
    }
  })], 1)])]) : _c("div", {
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
      id: "Caractéristiques-du-prêt"
    }
  }, [_vm._v("\n                                Fonctionnement compte(s)\n                                "), _c("chevron-down-icon", {
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
      id: "dcp-ppo5-head"
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col"
  }, [_vm._v("\n                            " + _vm._s(_vm.tb_display_name) + " : Informations sur le(s) compte(s)\n                        ")]), _vm._v(" "), _c("div", {
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
  }, [_c("span", [_vm._v(" " + _vm._s(_vm.formDataToBeWatched.notes.length) + " ")])])])]) : _vm._e(), _vm._v(" "), _c("chevron-down-icon", {
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
      name: "instruction211a",
      width: 1000,
      resizable: "",
      height: 200
    }
  }, [_c("div", {
    staticClass: "imageM22"
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
  }, [_vm._v("Type de compte "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v("*")])])]), _vm._v(" "), _c("td", {
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
    staticClass: "th text-nowrap"
  }, [_vm._v("Banque")]), _vm._v(" "), _c("td", {
    staticClass: "th text-nowrap"
  }, [_vm._v("Type de compte")]), _vm._v(" "), _c("td", {
    staticClass: "th text-nowrap"
  }, [_vm._v("IBAN")]), _vm._v(" "), _c("td", {
    staticClass: "th text-nowrap"
  }, [_vm._v("Numéro compte")]), _vm._v(" "), _c("td", {
    staticClass: "th text-nowrap"
  }, [_vm._v("Date ouverture du compte")]), _vm._v(" "), _c("td", {
    staticClass: "th text-nowrap"
  }, [_vm._v("Solde du compte")]), _vm._v(" "), _c("td", {
    staticClass: "th text-nowrap"
  }, [_vm._v("Montant épargné")]), _vm._v(" "), _c("td", {
    staticClass: "th text-nowrap"
  }, [_vm._v("Durée de l'épargne (Mois)")]), _vm._v(" "), _c("td", {
    staticClass: "th text-nowrap"
  }, [_vm._v("Date d'extraction du relevé")]), _vm._v(" "), _c("td", {
    staticClass: "th text-nowrap"
  })])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("td", {
    staticClass: "th text-nowrap"
  }, [_vm._v("Banque")]), _vm._v(" "), _c("td", {
    staticClass: "th text-nowrap"
  }, [_vm._v("Type de compte")]), _vm._v(" "), _c("td", {
    staticClass: "th text-nowrap"
  }, [_vm._v("IBAN")]), _vm._v(" "), _c("td", {
    staticClass: "th text-nowrap"
  }, [_vm._v("Numéro compte")]), _vm._v(" "), _c("td", {
    staticClass: "th text-nowrap"
  }, [_vm._v("Date ouverture du compte")]), _vm._v(" "), _c("td", {
    staticClass: "th text-nowrap"
  }, [_vm._v("Solde du compte")]), _vm._v(" "), _c("td", {
    staticClass: "th text-nowrap"
  }, [_vm._v("Montant épargné")]), _vm._v(" "), _c("td", {
    staticClass: "th text-nowrap"
  }, [_vm._v("Durée de l'épargne (Mois)")]), _vm._v(" "), _c("td", {
    staticClass: "th text-nowrap"
  }, [_vm._v("Date d'extraction du relevé")]), _vm._v(" "), _c("td", {
    staticClass: "th text-nowrap"
  })])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", {}, [_c("td", {
    staticClass: "th fw-bold"
  }, [_c("label", [_vm._v("Numéro de compte")])]), _vm._v(" "), _c("td", {
    staticClass: "th fw-bold text-center"
  }, [_c("label", [_vm._v("Fonctionnement")])]), _vm._v(" "), _c("td", {
    staticClass: "th fw-bold text-center"
  }, [_c("label", [_vm._v("Commentaire")])])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    attrs: {
      "for": ""
    }
  }, [_c("b", [_vm._v("Commentaire sur le fonctionnement des comptes")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/carcasse_ppo/DCPP-PCP3.vue?vue&type=style&index=0&id=3ab20f90&lang=css&scoped=true":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/carcasse_ppo/DCPP-PCP3.vue?vue&type=style&index=0&id=3ab20f90&lang=css&scoped=true ***!
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
___CSS_LOADER_EXPORT___.push([module.id, "\n*[data-v-3ab20f90] {\r\n    font-family: \"Google sans\";\n}\nlabel[data-v-3ab20f90] {\r\n    height: 10px;\r\n    font-size: 13px;\n}\ninput[data-v-3ab20f90],\r\nselect[data-v-3ab20f90] {\r\n    /* height: 35px; */\r\n    border-color: #34495e;\r\n    color: #57606f;\r\n    font-size: 13px;\r\n    font-weight: bold;\n}\n.th[data-v-3ab20f90] {\r\n    padding: 4px;\r\n    padding-bottom: 0px;\n}\n.card-width-height[data-v-3ab20f90] {\r\n    width: 100%;\r\n    height: 100%;\n}\n.head[data-v-3ab20f90] {\r\n    color: #f1f2f6;\r\n    font-size: 22px;\n}\n.hdc[data-v-3ab20f90] {\r\n    background-color: #57606f;\n}\n.relook-header[data-v-3ab20f90] {\r\n    color: #000;\r\n    background-color: #f4f3f3;\r\n    padding: 5px;\r\n    border-bottom: 1px solid #b6b8bb;\n}\n.badge-sm[data-v-3ab20f90] {\r\n    display: inline-block;\r\n    width: 15px;\r\n    height: 15px;\r\n    background: rgba(255, 0, 0, 0.882);\r\n    color: white;\r\n    font-size: 12px;\r\n    font-weight: 500;\r\n    border-radius: 100%;\r\n    position: absolute;\r\n    top: -20%;\r\n    left: 55%;\r\n    text-align: center;\n}\n.imageM22[data-v-3ab20f90] {\r\n    background: url(\"/images/capture_cofina/exemple_source_revenus.png\") no-repeat;\r\n    background-position: center;\r\n    background-size: contain;\r\n    width: 1000px;\r\n    height: 200px;\n}\ntd[data-v-3ab20f90],\r\np[data-v-3ab20f90] {\r\n    font-size: 13px;\n}\n.relook-header[data-v-3ab20f90] {\r\n    color: #000;\r\n    background-color: #f4f3f3;\r\n    padding: 5px;\r\n    border-bottom: 1px solid #b6b8bb;\n}\n.width-100[data-v-3ab20f90] {\r\n    width: 90%;\n}\n.personne input[data-v-3ab20f90] {\r\n    width: 135px;\n}\n._border_right[data-v-3ab20f90] {\r\n    border-right: 1px solid;\n}\n.text-red[data-v-3ab20f90] {\r\n    color: red;\n}\n.multiselect-option p[data-v-3ab20f90] {\r\n    margin: 0!important;\r\n    padding: 10px!important;\n}\n.vertical-middle[data-v-3ab20f90] {\r\n    vertical-align: middle;\n}\r\n\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/carcasse_ppo/DCPP-PCP3.vue?vue&type=style&index=0&id=3ab20f90&lang=css&scoped=true":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/carcasse_ppo/DCPP-PCP3.vue?vue&type=style&index=0&id=3ab20f90&lang=css&scoped=true ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DCPP_PCP3_vue_vue_type_style_index_0_id_3ab20f90_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DCPP-PCP3.vue?vue&type=style&index=0&id=3ab20f90&lang=css&scoped=true */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/carcasse_ppo/DCPP-PCP3.vue?vue&type=style&index=0&id=3ab20f90&lang=css&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DCPP_PCP3_vue_vue_type_style_index_0_id_3ab20f90_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DCPP_PCP3_vue_vue_type_style_index_0_id_3ab20f90_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/forms/afg/carcasse_ppo/DCPP-PCP3.vue":
/*!**********************************************************************!*\
  !*** ./resources/js/components/forms/afg/carcasse_ppo/DCPP-PCP3.vue ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DCPP_PCP3_vue_vue_type_template_id_3ab20f90_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DCPP-PCP3.vue?vue&type=template&id=3ab20f90&scoped=true */ "./resources/js/components/forms/afg/carcasse_ppo/DCPP-PCP3.vue?vue&type=template&id=3ab20f90&scoped=true");
/* harmony import */ var _DCPP_PCP3_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DCPP-PCP3.vue?vue&type=script&lang=js */ "./resources/js/components/forms/afg/carcasse_ppo/DCPP-PCP3.vue?vue&type=script&lang=js");
/* harmony import */ var _DCPP_PCP3_vue_vue_type_style_index_0_id_3ab20f90_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DCPP-PCP3.vue?vue&type=style&index=0&id=3ab20f90&lang=css&scoped=true */ "./resources/js/components/forms/afg/carcasse_ppo/DCPP-PCP3.vue?vue&type=style&index=0&id=3ab20f90&lang=css&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _DCPP_PCP3_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _DCPP_PCP3_vue_vue_type_template_id_3ab20f90_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _DCPP_PCP3_vue_vue_type_template_id_3ab20f90_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "3ab20f90",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/forms/afg/carcasse_ppo/DCPP-PCP3.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/forms/afg/carcasse_ppo/DCPP-PCP3.vue?vue&type=script&lang=js":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/forms/afg/carcasse_ppo/DCPP-PCP3.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DCPP_PCP3_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DCPP-PCP3.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/carcasse_ppo/DCPP-PCP3.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DCPP_PCP3_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/forms/afg/carcasse_ppo/DCPP-PCP3.vue?vue&type=style&index=0&id=3ab20f90&lang=css&scoped=true":
/*!******************************************************************************************************************************!*\
  !*** ./resources/js/components/forms/afg/carcasse_ppo/DCPP-PCP3.vue?vue&type=style&index=0&id=3ab20f90&lang=css&scoped=true ***!
  \******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DCPP_PCP3_vue_vue_type_style_index_0_id_3ab20f90_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DCPP-PCP3.vue?vue&type=style&index=0&id=3ab20f90&lang=css&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/carcasse_ppo/DCPP-PCP3.vue?vue&type=style&index=0&id=3ab20f90&lang=css&scoped=true");


/***/ }),

/***/ "./resources/js/components/forms/afg/carcasse_ppo/DCPP-PCP3.vue?vue&type=template&id=3ab20f90&scoped=true":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/components/forms/afg/carcasse_ppo/DCPP-PCP3.vue?vue&type=template&id=3ab20f90&scoped=true ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DCPP_PCP3_vue_vue_type_template_id_3ab20f90_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DCPP_PCP3_vue_vue_type_template_id_3ab20f90_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DCPP_PCP3_vue_vue_type_template_id_3ab20f90_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DCPP-PCP3.vue?vue&type=template&id=3ab20f90&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/carcasse_ppo/DCPP-PCP3.vue?vue&type=template&id=3ab20f90&scoped=true");


/***/ })

}]);