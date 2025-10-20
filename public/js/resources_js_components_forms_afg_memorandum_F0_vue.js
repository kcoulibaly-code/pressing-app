"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_forms_afg_memorandum_F0_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/memorandum/F0.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/memorandum/F0.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
/* harmony import */ var _shared_ContextMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/ContextMenu */ "./resources/js/components/shared/ContextMenu.vue");
/* harmony import */ var _shared_ContextMenuItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/ContextMenuItem */ "./resources/js/components/shared/ContextMenuItem.vue");
/* harmony import */ var _services_ebapis_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/ebapis.service */ "./resources/js/services/ebapis.service.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/auth.service */ "./resources/js/services/auth.service.js");
/* harmony import */ var _services_credit_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/credit.service */ "./resources/js/services/credit.service.js");
/* harmony import */ var _vueform_multiselect_dist_multiselect_vue2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @vueform/multiselect/dist/multiselect.vue2 */ "./node_modules/@vueform/multiselect/dist/multiselect.vue2.js");
/* harmony import */ var _helpers_indexedDB__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../helpers/indexedDB */ "./resources/js/helpers/indexedDB.js");
/* harmony import */ var _helpers_indexedDB__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_helpers_indexedDB__WEBPACK_IMPORTED_MODULE_6__);
/* provided dependency */ var process = __webpack_require__(/*! process/browser.js */ "./node_modules/process/browser.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return r; }; var t, r = {}, e = Object.prototype, n = e.hasOwnProperty, o = "function" == typeof Symbol ? Symbol : {}, i = o.iterator || "@@iterator", a = o.asyncIterator || "@@asyncIterator", u = o.toStringTag || "@@toStringTag"; function c(t, r, e, n) { Object.defineProperty(t, r, { value: e, enumerable: !n, configurable: !n, writable: !n }); } try { c({}, ""); } catch (t) { c = function c(t, r, e) { return t[r] = e; }; } function h(r, e, n, o) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype); return c(a, "_invoke", function (r, e, n) { var o = 1; return function (i, a) { if (3 === o) throw Error("Generator is already running"); if (4 === o) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var u = n.delegate; if (u) { var c = d(u, n); if (c) { if (c === f) continue; return c; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (1 === o) throw o = 4, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = 3; var h = s(r, e, n); if ("normal" === h.type) { if (o = n.done ? 4 : 2, h.arg === f) continue; return { value: h.arg, done: n.done }; } "throw" === h.type && (o = 4, n.method = "throw", n.arg = h.arg); } }; }(r, n, new Context(o || [])), !0), a; } function s(t, r, e) { try { return { type: "normal", arg: t.call(r, e) }; } catch (t) { return { type: "throw", arg: t }; } } r.wrap = h; var f = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var l = {}; c(l, i, function () { return this; }); var p = Object.getPrototypeOf, y = p && p(p(x([]))); y && y !== e && n.call(y, i) && (l = y); var v = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(l); function g(t) { ["next", "throw", "return"].forEach(function (r) { c(t, r, function (t) { return this._invoke(r, t); }); }); } function AsyncIterator(t, r) { function e(o, i, a, u) { var c = s(t[o], t, i); if ("throw" !== c.type) { var h = c.arg, f = h.value; return f && "object" == _typeof(f) && n.call(f, "__await") ? r.resolve(f.__await).then(function (t) { e("next", t, a, u); }, function (t) { e("throw", t, a, u); }) : r.resolve(f).then(function (t) { h.value = t, a(h); }, function (t) { return e("throw", t, a, u); }); } u(c.arg); } var o; c(this, "_invoke", function (t, n) { function i() { return new r(function (r, o) { e(t, n, r, o); }); } return o = o ? o.then(i, i) : i(); }, !0); } function d(r, e) { var n = e.method, o = r.i[n]; if (o === t) return e.delegate = null, "throw" === n && r.i["return"] && (e.method = "return", e.arg = t, d(r, e), "throw" === e.method) || "return" !== n && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + n + "' method")), f; var i = s(o, r.i, e.arg); if ("throw" === i.type) return e.method = "throw", e.arg = i.arg, e.delegate = null, f; var a = i.arg; return a ? a.done ? (e[r.r] = a.value, e.next = r.n, "return" !== e.method && (e.method = "next", e.arg = t), e.delegate = null, f) : a : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f); } function w(t) { this.tryEntries.push(t); } function m(r) { var e = r[4] || {}; e.type = "normal", e.arg = t, r[4] = e; } function Context(t) { this.tryEntries = [[-1]], t.forEach(w, this), this.reset(!0); } function x(r) { if (null != r) { var e = r[i]; if (e) return e.call(r); if ("function" == typeof r.next) return r; if (!isNaN(r.length)) { var o = -1, a = function e() { for (; ++o < r.length;) if (n.call(r, o)) return e.value = r[o], e.done = !1, e; return e.value = t, e.done = !0, e; }; return a.next = a; } } throw new TypeError(_typeof(r) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, c(v, "constructor", GeneratorFunctionPrototype), c(GeneratorFunctionPrototype, "constructor", GeneratorFunction), c(GeneratorFunctionPrototype, u, GeneratorFunction.displayName = "GeneratorFunction"), r.isGeneratorFunction = function (t) { var r = "function" == typeof t && t.constructor; return !!r && (r === GeneratorFunction || "GeneratorFunction" === (r.displayName || r.name)); }, r.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, c(t, u, "GeneratorFunction")), t.prototype = Object.create(v), t; }, r.awrap = function (t) { return { __await: t }; }, g(AsyncIterator.prototype), c(AsyncIterator.prototype, a, function () { return this; }), r.AsyncIterator = AsyncIterator, r.async = function (t, e, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(h(t, e, n, o), i); return r.isGeneratorFunction(e) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, g(v), c(v, u, "Generator"), c(v, i, function () { return this; }), c(v, "toString", function () { return "[object Generator]"; }), r.keys = function (t) { var r = Object(t), e = []; for (var n in r) e.unshift(n); return function t() { for (; e.length;) if ((n = e.pop()) in r) return t.value = n, t.done = !1, t; return t.done = !0, t; }; }, r.values = x, Context.prototype = { constructor: Context, reset: function reset(r) { if (this.prev = this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(m), !r) for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0][4]; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(r) { if (this.done) throw r; var e = this; function n(t) { a.type = "throw", a.arg = r, e.next = t; } for (var o = e.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i[4], u = this.prev, c = i[1], h = i[2]; if (-1 === i[0]) return n("end"), !1; if (!c && !h) throw Error("try statement without catch or finally"); if (null != i[0] && i[0] <= u) { if (u < c) return this.method = "next", this.arg = t, n(c), !0; if (u < h) return n(h), !1; } } }, abrupt: function abrupt(t, r) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var n = this.tryEntries[e]; if (n[0] > -1 && n[0] <= this.prev && this.prev < n[2]) { var o = n; break; } } o && ("break" === t || "continue" === t) && o[0] <= r && r <= o[2] && (o = null); var i = o ? o[4] : {}; return i.type = t, i.arg = r, o ? (this.method = "next", this.next = o[2], f) : this.complete(i); }, complete: function complete(t, r) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), f; }, finish: function finish(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[2] === t) return this.complete(e[4], e[3]), m(e), f; } }, "catch": function _catch(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[0] === t) { var n = e[4]; if ("throw" === n.type) { var o = n.arg; m(e); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(r, e, n) { return this.delegate = { i: x(r), r: e, n: n }, "next" === this.method && (this.arg = t), f; } }, r; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }








// ? IndexedDB helper for formDataToBeWatched Cache management

;

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "FicheSignaletique",
  display: "FicheSignaletique",
  components: {
    ContextMenu: _shared_ContextMenu__WEBPACK_IMPORTED_MODULE_0__["default"],
    ContextMenuItem: _shared_ContextMenuItem__WEBPACK_IMPORTED_MODULE_1__["default"],
    MoreVerticalIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_7__.MoreVerticalIcon,
    ChevronUpIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_7__.ChevronUpIcon,
    ChevronDownIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_7__.ChevronDownIcon,
    PlusIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_7__.PlusIcon,
    BookOpenIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_7__.BookOpenIcon,
    TrashIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_7__.TrashIcon,
    AirplayIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_7__.AirplayIcon,
    Multiselect: _vueform_multiselect_dist_multiselect_vue2__WEBPACK_IMPORTED_MODULE_5__["default"]
  },
  props: {
    meta_data: Object,
    tb_name: String,
    tb_display_name: String
  },
  computed: {
    contryMaping: function contryMaping() {
      var _this = this;
      var findNationnalites = this.nations.find(function (el) {
        var _this$core_banking_in;
        return el.code == ((_this$core_banking_in = _this.core_banking_info) === null || _this$core_banking_in === void 0 ? void 0 : _this$core_banking_in.country_code);
      });
      if (!findNationnalites) return "";
      return findNationnalites.pays.toUpperCase();
    },
    filialeComput: function filialeComput() {
      var _this$core_banking_in2;
      switch ((_this$core_banking_in2 = this.core_banking_info) === null || _this$core_banking_in2 === void 0 ? void 0 : _this$core_banking_in2.country_code) {
        case 'ML':
          return 'AFGB ML';
        case 'CI':
          return 'AFG CIV';
        case 'CG':
          return 'AFG CG';
        case 'BF':
          return 'AFG BF';
        case 'GN':
          return 'AFG GN';
        case 'SN':
          return 'AFG SN';
        case 'TG':
          return 'AFG TG';
        case 'GA':
          return 'AFG GB';
        default:
          return 'GROUPE';
      }
    },
    totalPartPourcentageActionnariats: function totalPartPourcentageActionnariats() {
      var trying = this.actionnariats.map(function (el) {
        el.pourcentage_participation = String(el.pourcentage_participation).replace(/\s+/g, "");
        if (!el.pourcentage_participation) return 0;
        return Number(el.pourcentage_participation);
      }).reduce(function (sum, curr) {
        return sum + curr;
      }, 0);
      if (trying > 100) return "100.00";
      return trying.toLocaleString("fr-FR");
    },
    ActionnariatMaxNumber: function ActionnariatMaxNumber() {
      var restant = 100 - Number(this.totalPartPourcentageActionnariats);
      if (restant < 0) return 0;
      return restant;
    },
    secteurs_activites_: function secteurs_activites_() {
      var _this2 = this;
      if (this.formDataToBeWatched.groupe_activite == "" || this.formDataToBeWatched.groupe_activite == null) {
        this.selected_secteur_activite = "";
        this.formDataToBeWatched.secteur_activite = "";
      }
      var array = [];
      this.secteurs_activites.forEach(function (element) {
        if (_this2.formDataToBeWatched.groupe_activite == "" || _this2.formDataToBeWatched.groupe_activite == null) {
          array.push(element);
        } else {
          if (_this2.selected_groupe_secteur == "" || _this2.selected_groupe_secteur != '' && _this2.selected_groupe_secteur.id == element.groupe_activite_id) {
            array.push(element);
          }
        }
      });
      return array;
    },
    groupes_activites_: function groupes_activites_() {
      var array = [];
      this.groupes_activites.forEach(function (element) {
        array.push(element);
      });
      return array;
    },
    listeClientele: function listeClientele() {
      var items = [];
      if (this.formDataToBeWatched.categorie_clientele == 'Clientèle Ordinaire') {
        var _this$authcheckUsr;
        if (((_this$authcheckUsr = this.authcheckUsr) === null || _this$authcheckUsr === void 0 ? void 0 : _this$authcheckUsr.categorie_client) == "Retail") {
          items = [{
            label: "",
            value: ''
          }, {
            label: "Professionnel",
            value: 'Professionnel'
          }, {
            label: "TPE/TPI",
            value: 'TPE/TPI'
          }];
        } else {
          items = [{
            label: "",
            value: ''
          }, {
            label: "Grandes Entreprises",
            value: 'Grandes Entreprises'
          }, {
            label: "PME/PMI",
            value: 'PME/PMI'
          }];
        }
      } else if (this.formDataToBeWatched.categorie_clientele == "Structure Financière Décentralisé ( SFD )") {
        items = [{
          label: "",
          value: ''
        }, {
          label: "Microfinances",
          value: 'Microfinances'
        }, {
          label: "Mutuelles",
          value: 'Mutuelles'
        }];
      } else if (this.formDataToBeWatched.categorie_clientele == "Assurances") {
        items = [{
          label: "Assurances",
          value: 'Assurances'
        }];
      } else if (this.formDataToBeWatched.categorie_clientele == "Fonds Commun de Placement") {
        items = [{
          label: "Fonds Commun de Placement",
          value: 'Fonds Commun de Placement'
        }];
      } else if (this.formDataToBeWatched.categorie_clientele == "Institutionnels") {
        items = [{
          label: "Institutionnels",
          value: 'Institutionnels'
        }];
      } else if (this.formDataToBeWatched.categorie_clientele == "SCI") {
        items = [{
          label: "SCI",
          value: 'SCI'
        }];
      } else if (this.formDataToBeWatched.categorie_clientele == "ONG et associations") {
        items = [{
          label: "ONG et associations",
          value: 'ONG et associations'
        }];
      } else if (this.formDataToBeWatched.categorie_clientele == "États") {
        items = [{
          label: "États",
          value: 'États'
        }];
      } else if (this.formDataToBeWatched.categorie_clientele == "Autres") {
        items = [{
          label: "Autres",
          value: 'Autres'
        }];
      }
      return items;
    },
    categoriesClientele: function categoriesClientele() {
      var items = [{
        label: "--- Sélectionner la catégorie de clientèle --",
        value: ''
      }, {
        label: "",
        value: ''
      }, {
        label: "Clientèle Ordinaire",
        value: 'Clientèle Ordinaire'
      }, {
        label: "Structure Financière Décentralisé ( SFD )",
        value: 'Structure Financière Décentralisé ( SFD )'
      }, {
        label: "Assurances",
        value: 'Assurances'
      }, {
        label: "Fonds Commun de Placement",
        value: 'Fonds Commun de Placement'
      }, {
        label: "Institutionnels",
        value: 'Institutionnels'
      }, {
        label: "SCI",
        value: 'SCI'
      }, {
        label: "ONG et associations",
        value: 'ONG et associations'
      }, {
        label: "États",
        value: 'États'
      }, {
        label: "Autres",
        value: 'Autres'
      }];
      return items;
    },
    shouldHaveDefaultNote: function shouldHaveDefaultNote() {
      return this.formDataToBeWatched.categorie_clientele && this.formDataToBeWatched.categorie_clientele != 'Clientèle Ordinaire' || this.formDataToBeWatched.has_sni == 'Non';
    },
    notes_edane: function notes_edane() {
      if (this.shouldHaveDefaultNote) return [""];
      return ["", "A3", "A2+", "A2", "A2-", "A1+", "A1", "A1-", "B+", "B", "B-", "C+", "C", "C-", "D+", "D", "D-", "E"];
    },
    compte_contribuable_label: function compte_contribuable_label() {
      var _this$authenticatedUs;
      if (((_this$authenticatedUs = this.authenticatedUser) === null || _this$authenticatedUs === void 0 ? void 0 : _this$authenticatedUs.filiale) == "AFGB CM") {
        return 'N° d\'identifiant unique (NIU)';
      } else {
        return 'N° compte contribuable (NCC)';
      }
    },
    erreurAnneeReferentielle: function erreurAnneeReferentielle() {
      var annee = parseInt(this.formDataToBeWatched.annee_referentielle, 10);
      var anneeCourante = new Date().getFullYear();
      if (!annee || isNaN(annee)) {
        // this.formDataToBeWatched.annee_referentielle = ""
        return "Veuillez saisir une année valide.";
      }
      if (annee > anneeCourante - 1) {
        // this.formDataToBeWatched.annee_referentielle = ""
        return "L'ann\xE9e de r\xE9f\xE9rence ne peut pas \xEAtre sup\xE9rieure \xE0 ".concat(anneeCourante - 1, ".");
      }
      return null; // Pas d'erreur
    }
  },
  created: function created() {
    var _this3 = this;
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var _this3$meta_data;
      var cachedCreditTypes;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["default"].loadUserData().then(function (res) {
              var _this3$meta_data$doss, _this3$authcheckUsr, _this3$meta_data$doss2;
              _this3.authcheck = true;
              _this3.authcheckUsr = res.data;
              _this3.authcheckStatus = res.status;
              if (((_this3$meta_data$doss = _this3.meta_data['dossier_credit']) === null || _this3$meta_data$doss === void 0 || (_this3$meta_data$doss = _this3$meta_data$doss.final_outcome) === null || _this3$meta_data$doss === void 0 ? void 0 : _this3$meta_data$doss.outcome) == 0 && ['DUxMP2ZQheGFreQt5z2s', 'r472oAxtaFJSlsh5', 'weu2BjZkaf0Y4tHguD2Y', 'kggrA5A18KdHk452gEtk', 'PTh9sMKbrT0gpqcw4WaT', 'THzsvqanYXFlqROQVHJt'].includes((_this3$authcheckUsr = _this3.authcheckUsr) === null || _this3$authcheckUsr === void 0 ? void 0 : _this3$authcheckUsr.role_uuid) && ((_this3$meta_data$doss2 = _this3.meta_data['dossier_credit']) === null || _this3$meta_data$doss2 === void 0 ? void 0 : _this3$meta_data$doss2.is_ajournee) == true) {
                _this3.onClasseRisqueChange();
              }
            })["catch"](function (err) {
              _this3.loadWithError(err);
            });
          case 2:
            _context.next = 4;
            return _services_credit_service__WEBPACK_IMPORTED_MODULE_4__["default"].loadCAFAfg((_this3$meta_data = _this3.meta_data) === null || _this3$meta_data === void 0 || (_this3$meta_data = _this3$meta_data.dossier_credit) === null || _this3$meta_data === void 0 ? void 0 : _this3$meta_data.monteur_doss_email).then(function (res) {
              _this3.cafData(res);
            })["catch"](function (err) {
              console.log(err);
            });
          case 4:
            cachedCreditTypes = localStorage.getItem('credit_types'); // if (!cachedCreditTypes) {
            //     // console.log("\n *** using credit types from server");
            //     // await Credit.loadCredits()
            //     //     .then(res => {
            //     //         this.credData(res);
            //     //         localStorage.setItem('credit_types', JSON.stringify(res.data));
            //     //     }).catch(err => {
            //     //         console.log(err)
            //     //     })
            // } else {
            //     // console.log("\n *** using credit types from caches");
            //     let data = JSON.parse(cachedCreditTypes);
            //     this.credits = data;
            // }
            _context.next = 7;
            return _services_credit_service__WEBPACK_IMPORTED_MODULE_4__["default"].loadActivite().then(function (res) {
              _this3.secteurs_activites = res.data.data.activites;
              _this3.groupes_activites = res.data.data.groupes;
              _this3.updateValueSelected();
            })["catch"](function (err) {
              console.log(err);
            });
          case 7:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }))();
  },
  mounted: function mounted() {
    var _this4 = this;
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            // Initiate cache
            // ! // TODO remove next 2 lines
            // // this.initCache();
            //
            //  this.getClasseRique()

            _this4.loadRetrieved();
            _this4.loadTbAttrs(); // charge les attributs + sous attributs des tables
            _this4.tableClosedOrOpened();
            _this4.getNationalites();
            _this4.setReadonly();
            EventBus.$on("reload-T1", function () {
              EventBus.$emit("event-T0", {
                formdata: _this4.formDataToBeWatched
              });
            });
            EventBus.$on("ligne-selected-updated", function (data) {
              // console.log("data", data)
              _this4.formDataToBeWatched.montant_sollicite = data === null || data === void 0 ? void 0 : data.total_nouvelle_ligne_0;
              // console.log("montant_sollicite ==> ", data?.total_nouvelle_ligne_0)
            });
            EventBus.$on("created-extra-file-template", function (data) {
              var _data$template, _data$template2, _data$template3;
              _this4.formDataToBeWatched.note_verification = {
                id: data === null || data === void 0 || (_data$template = data.template) === null || _data$template === void 0 ? void 0 : _data$template.id,
                name: data === null || data === void 0 || (_data$template2 = data.template) === null || _data$template2 === void 0 ? void 0 : _data$template2.name,
                slug: data === null || data === void 0 || (_data$template3 = data.template) === null || _data$template3 === void 0 ? void 0 : _data$template3.slug,
                files_count: 0
              };
            });
            EventBus.$on('extra-files-uploaded', function (data) {
              var _this4$formDataToBeWa;
              if (((_this4$formDataToBeWa = _this4.formDataToBeWatched) === null || _this4$formDataToBeWa === void 0 || (_this4$formDataToBeWa = _this4$formDataToBeWa.note_verification) === null || _this4$formDataToBeWa === void 0 ? void 0 : _this4$formDataToBeWa.id) == data.template.id) {
                _this4.formDataToBeWatched.note_verification.files_count = data.files.length;
              }
            });
            EventBus.$on('update-sni', function () {
              _this4.onClasseRisqueChange();
            });
            EventBus.$on("fresh-core-banking-data", function (data) {
              if (data) {
                _this4.core_banking_info = data;
                _this4.matchingCoreBanking();
              }
            });
          case 11:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }))();
  },
  data: function data() {
    var _this$meta_data;
    var vm = this;
    return {
      core_banking_info: (_this$meta_data = this.meta_data) === null || _this$meta_data === void 0 || (_this$meta_data = _this$meta_data.dossier_credit) === null || _this$meta_data === void 0 ? void 0 : _this$meta_data.client_core_banking,
      classe_riques_bg_color: {
        'background-color': "#e9ecef"
      },
      //
      actionnariats: [{
        nom_actionnaire: "",
        pourcentage_participation: "",
        max: 100
      }],
      seen5: true,
      seen4: true,
      seen6: true,
      seen7: true,
      seen8: true,
      seen10: true,
      //
      date_demande_type: "text",
      ebapisHost: _services_ebapis_service__WEBPACK_IMPORTED_MODULE_2__["default"].host,
      max_amount_retail: 35000000,
      alert_max_amount_retail: false,
      authcheck: false,
      authcheckUsr: null,
      authcheckStatus: null,
      watchInPause: false,
      initLoad: true,
      seen: true,
      cafInfo: null,
      clients: [],
      encours: null,
      gl_key: null,
      dpcredit0: false,
      dpcredit1: false,
      nations: [],
      type_demande_list: [{
        "id": 1,
        "name": "Première demande",
        "checked": false,
        "disabled": false
      }, {
        "id": 2,
        "name": "Renouvellement simple ou avec extension *",
        "checked": false,
        "disabled": false
      }, {
        "id": 3,
        "name": "Modification de lignes",
        "checked": false,
        "disabled": false
      }, {
        "id": 4,
        "name": "Restructuration/incident de paiement",
        "checked": false,
        "disabled": false
      }],
      segment_entreprise_list: [{
        "id": 1,
        "name": "Secteur Public",
        "checked": false,
        "disabled": false
      }, {
        "id": 2,
        "name": "Grandes Entreprises",
        "checked": false,
        "disabled": false
      }, {
        "id": 3,
        "name": "PME/PMI",
        "checked": false,
        "disabled": false
      }, {
        "id": 4,
        "name": "Professionnel",
        "checked": false,
        "disabled": false
      }],
      list_entites: {
        "AFGB CI": "CÔTE D'IVOIRE",
        "AFGB GA": "GABON",
        "AFGB ML": "MALI",
        "AFGB MG": "MADAGASCAR",
        "AFGB CM": "CAMEROUN",
        "AFGB KM": "COMORES",
        "AFGB BJ": "BENIN"
      },
      // filiales: ["AFG BF", "AFG CG", "AFG CIV", "AFG GB", "AFG GN", "AFGB ML", "AFG SN", "AFG TG", "GROUPE"],
      list_notes: {
        "A": "Très bon risque",
        "B": "Bon risque",
        "C": "Risque acceptable / modéré",
        "D": "Risque à surveiller",
        "E": "Mauvaus risque",
        "F": "Très mauvais risque",
        "X": "Exclusion"
      },
      list_secteurs: ["Matières premières agricoles", "Matières premières minières et énergétiques", "Immobilier résidentiel", "Véhicules de tourisme et pièces détachées", "Mobilier, ameublement, électroménager et multimédia", "Textiles et accessoires", "Tourisme, restauration et loisirs", "Agroalimentaire et produits de consommation courante", "Santé et services à la personne", "Energie (électricité et produits pétroliers raffinés)", "Education & Formation", "Transport de personnes", "Matériaux de construction & Fournitures industrielles", "Technologie et Services industriels", "Infrastructures et Immobilier professionnel", "Véhicules industriels et pièces détachées", "Services financiers (Banques, Assurances, Invest immo & fin.)", "TelCo et services publics (environnement,...)", "Administrations publiques", "Divers"],
      list_secteurs_edane: ["Agriculture-Elevage-Pêche", "Industrie - Boulangerie", "Industrie Agro-Alimentaire", "Industrie Boisson-Jus-Bière", "Industrie Corps Gras - Huilerie", "BTP Complet", "BTP Specialise", "Commerce Automobile et Pièces détachées", "Commerce Quincaillerie", "Commerce de Detail Divers", "Commerce de Gros Divers", "Commerce de Gros de Produits Agricoles", "Distributeur de Carburant Major", "Hotel Restaurant", "Pharmacies - Détaillants", "Pharmacies - Grossistes", "Station de Carburant", "Energie-Eau-Gaz", "Industrie - Metalurgie", "Industrie Chimique", "Industrie Cimenterie", "Industrie Divers", "Industrie Medical", "Industrie Papier-Imprimerie", "Industrie Plastique", "Industrie Tabac", "Industrie Textile", "Industrie du Bois", "Mine", "Pétrole", "Agence de voyage", "Agences et Activités Immobilières", "Architecture et Ingénierie", "Auxilliaire Assurance et Finance", "Conseils Informatique", "Conseils Juridiques Comptables", "Enseignement", "Gardiennage - Sécurité", "Main d'oeuvre - Nettoyage - Formation", "Publicité Communication", "Réparation-Installation-Maintenance", "Santé (Cliniques Medecins)", "Services Divers", "Telecom - Divers", "Telecom - Opérateurs", "Entreposage", "Transit - Manutention-Logistique", "Transport Passager et Marchandise", "Divers"],
      contextList: [
      // Ajouter note
      {
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
      meta_parseable: {
        cred_pub_key: this.meta_data['cred_pub_key'],
        tb_name: this.tb_name
      },
      credits: [],
      secteurs_activites: [],
      groupes_activites: [],
      selected_secteur_activite: "",
      selected_groupe_secteur: "",
      matricule_client: "",
      // cran_edane:"",
      // qualification_edane:"",
      // segment_edane:"",
      formDataToBeWatched: {
        // begin new data
        note_verification: {},
        nouvelle_relation: "",
        groupe: "",
        nom_groupe: "",
        exposition_groupe: 0,
        forme_juridique: "",
        capital: 0,
        bilan_certifie: "",
        nom_cabinet_comptable: "",
        consentement_bic: "",
        cote_en_bourse: "",
        date_creation: "",
        date_entre_relation: "",
        actionnariats: [],
        decision_ccdg: "",
        motivations_ccdg: "",
        compte_contribuable: "",
        note_edane: "",
        // personne_politiquement_expose: "",
        total_part: "",
        // end new data
        pays: "",
        agence: "",
        filiale: "",
        caf: "",
        contact_client: "",
        email_client: "",
        geo_lat: null,
        geo_lon: null,
        date_demande: null,
        type_demande: "",
        type_de_clientele: "",
        type_credit: "",
        montant_sollicite: 0,
        duree_credit: "",
        denomination_client: "",
        //
        secteur_activite: "",
        //
        classe_risque: "",
        //
        matricule_client: "",
        //
        // ajouter note
        notes: [],
        commentaire_note: '',
        is_first_time: null,
        chef_agence: null,
        dir_expl: null,
        chef_zone: null,
        dir_engagement: null,
        annee_referentielle: "",
        global_env_entity: _services_ebapis_service__WEBPACK_IMPORTED_MODULE_2__["default"].loadableEntity()[0].toUpperCase(),
        segment_entreprise: "",
        credit_syndique: "",
        cheffe_file: '',
        groupe_activite: "",
        categorie_clientele: "",
        has_etat_financier: "",
        has_sni: "",
        type_de_clientele_autre: "",
        date_reception_demande_client: "",
        sni_details: null,
        status_note_sni: null,
        compte_courant: "",
        date_ouverture: "",
        adresse: "",
        principal_dirigeant: "",
        nom_commissaire_aux_comptes: "",
        type_clientele_label: "",
        code_clientele: ""
      },
      // ajouter note
      listingNote: false,
      maxdate: "",
      dismissFormData: [5, 6],
      fetch_score: false,
      caf_recorded_file: this.meta_data['dossier_credit'].caf_recorded_file,
      list_readonly: []
    };
  },
  methods: {
    // si la valeur est vide , l'input n'est plus en lecture seule , déterminer les champs dans ce cas
    setReadonly: function setReadonly() {
      var _this5 = this;
      var vals = {
        'matricule_client': this.matricule_client,
        'denomination_client': this.formDataToBeWatched.denomination_client,
        'secteur_activite': this.formDataToBeWatched.secteur_activite,
        'caf': this.formDataToBeWatched.caf,
        'contact_client': this.formDataToBeWatched.contact_client,
        'email_client': this.formDataToBeWatched.email_client,
        'compte_courant': this.formDataToBeWatched.compte_courant,
        'date_ouverture': this.formDataToBeWatched.date_ouverture,
        'adresse': this.formDataToBeWatched.adresse,
        'compte_contribuable': this.formDataToBeWatched.compte_contribuable
      };
      Object.entries(vals).forEach(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
          key = _ref2[0],
          value = _ref2[1];
        if (['', null, undefined].includes(value)) {
          _this5.list_readonly.push(key);
        }
      });
    },
    matchingCoreBanking: function matchingCoreBanking() {
      var _this$core_banking_in3, _this$core_banking_in4, _this$core_banking_in5, _this$core_banking_in6, _this$core_banking_in7, _this$core_banking_in8, _this$authcheckUsr2, _this$core_banking_in9, _this$core_banking_in0, _this$core_banking_in1, _this$core_banking_in10, _this$core_banking_in11, _this$core_banking_in12, _this$meta_data2, _this$core_banking_in13;
      this.matricule_client = (_this$core_banking_in3 = this.core_banking_info) === null || _this$core_banking_in3 === void 0 ? void 0 : _this$core_banking_in3.code;
      this.formDataToBeWatched.denomination_client = (_this$core_banking_in4 = this.core_banking_info) === null || _this$core_banking_in4 === void 0 ? void 0 : _this$core_banking_in4.name;
      this.formDataToBeWatched.compte_contribuable = (_this$core_banking_in5 = (_this$core_banking_in6 = this.core_banking_info) === null || _this$core_banking_in6 === void 0 ? void 0 : _this$core_banking_in6.taxid_no) !== null && _this$core_banking_in5 !== void 0 ? _this$core_banking_in5 : "";
      this.formDataToBeWatched.agence = (_this$core_banking_in7 = this.core_banking_info) === null || _this$core_banking_in7 === void 0 || (_this$core_banking_in7 = _this$core_banking_in7.agence_info) === null || _this$core_banking_in7 === void 0 || (_this$core_banking_in7 = _this$core_banking_in7.agenceOrigination) === null || _this$core_banking_in7 === void 0 ? void 0 : _this$core_banking_in7.agence;
      this.formDataToBeWatched.agence_domiciliation = (_this$core_banking_in8 = this.core_banking_info) === null || _this$core_banking_in8 === void 0 || (_this$core_banking_in8 = _this$core_banking_in8.agence_info) === null || _this$core_banking_in8 === void 0 || (_this$core_banking_in8 = _this$core_banking_in8.agenceDomiciliation) === null || _this$core_banking_in8 === void 0 ? void 0 : _this$core_banking_in8.agence;
      this.formDataToBeWatched.caf = (_this$authcheckUsr2 = this.authcheckUsr) === null || _this$authcheckUsr2 === void 0 ? void 0 : _this$authcheckUsr2.name;
      this.formDataToBeWatched.contact_client = (_this$core_banking_in9 = this.core_banking_info) === null || _this$core_banking_in9 === void 0 || (_this$core_banking_in9 = _this$core_banking_in9.phone_numbers[0]) === null || _this$core_banking_in9 === void 0 ? void 0 : _this$core_banking_in9.phone_number;
      this.formDataToBeWatched.email_client = (_this$core_banking_in0 = this.core_banking_info) === null || _this$core_banking_in0 === void 0 || (_this$core_banking_in0 = _this$core_banking_in0.addresses[0]) === null || _this$core_banking_in0 === void 0 ? void 0 : _this$core_banking_in0.email;
      this.formDataToBeWatched.adresse = (_this$core_banking_in1 = this.core_banking_info) === null || _this$core_banking_in1 === void 0 ? void 0 : _this$core_banking_in1.address;
      this.formDataToBeWatched.compte_courant = (_this$core_banking_in10 = this.core_banking_info) === null || _this$core_banking_in10 === void 0 || (_this$core_banking_in10 = _this$core_banking_in10.accounts_data) === null || _this$core_banking_in10 === void 0 || (_this$core_banking_in10 = _this$core_banking_in10.comptes_courants[0]) === null || _this$core_banking_in10 === void 0 ? void 0 : _this$core_banking_in10.code;
      // format date_ouveture
      var date_ouverture_compte = (_this$core_banking_in11 = (_this$core_banking_in12 = this.core_banking_info) === null || _this$core_banking_in12 === void 0 ? void 0 : _this$core_banking_in12.creation_date) !== null && _this$core_banking_in11 !== void 0 ? _this$core_banking_in11 : "";
      this.formDataToBeWatched.date_ouverture = date_ouverture_compte.split('/').reverse().join('-');
      this.formDataToBeWatched.filiale = (_this$meta_data2 = this.meta_data) === null || _this$meta_data2 === void 0 || (_this$meta_data2 = _this$meta_data2.dossier_credit) === null || _this$meta_data2 === void 0 || (_this$meta_data2 = _this$meta_data2.caf_recorded_file) === null || _this$meta_data2 === void 0 ? void 0 : _this$meta_data2.filiale;
      this.formDataToBeWatched.pays = this.list_entites[this.formDataToBeWatched.filiale];
      // console.log("this.formDataToBeWatched.filiale=>",this.filialeComput);

      if ((_this$core_banking_in13 = this.core_banking_info) !== null && _this$core_banking_in13 !== void 0 && _this$core_banking_in13.activity_name) {
        var _this$core_banking_in14;
        this.formDataToBeWatched.secteur_activite = (_this$core_banking_in14 = this.core_banking_info) === null || _this$core_banking_in14 === void 0 ? void 0 : _this$core_banking_in14.activity_name;
      }
      this.dpcredit1 = true;
      this.setReadonly();
      this.onClasseRisqueChange();
    },
    getNationalites: function getNationalites() {
      var _this6 = this;
      _services_credit_service__WEBPACK_IMPORTED_MODULE_4__["default"].loadNationalites().then(function (res) {
        _this6.nations = res.data;
      })["catch"](function (err) {
        console.log(err);
      });
    },
    updateClasseRisque: function updateClasseRisque() {
      var _this$formDataToBeWat, _this$formDataToBeWat2, _this$formDataToBeWat3, _this$formDataToBeWat4, _this$formDataToBeWat5, _this$formDataToBeWat6, _this$formDataToBeWat7, _this$formDataToBeWat8, _this$formDataToBeWat9;
      // alert(0)

      this.formDataToBeWatched.has_default_note = this.shouldHaveDefaultNote;
      var graduations = {
        excellent: ["A3"],
        very_good: ["A2", "A2+", "A2-"],
        good: ["A", "A1+", "A1-"],
        acceptable: ["B", "B+"],
        sensible: ["B-"],
        weak: ["C", 'C+', "C-"],
        not_acceptable: ["D", 'D+', "D-"],
        not_considered: ["E"]
      };
      if (graduations !== null && graduations !== void 0 && graduations.excellent.includes((_this$formDataToBeWat = this.formDataToBeWatched) === null || _this$formDataToBeWat === void 0 ? void 0 : _this$formDataToBeWat.note_edane)) {
        this.formDataToBeWatched.classe_risque = 'EXCELLENT';
        this.classe_riques_bg_color = {
          "background-color": '#974EC3',
          'color': "#ffffff"
        };
      } else if (graduations !== null && graduations !== void 0 && graduations.very_good.includes((_this$formDataToBeWat2 = this.formDataToBeWatched) === null || _this$formDataToBeWat2 === void 0 ? void 0 : _this$formDataToBeWat2.note_edane)) {
        // alert(1)
        this.formDataToBeWatched.classe_risque = 'TRES BON';
        this.classe_riques_bg_color = {
          "background-color": '#78C1F3',
          'color': "#ffffff"
        };
      } else if (graduations !== null && graduations !== void 0 && graduations.good.includes((_this$formDataToBeWat3 = this.formDataToBeWatched) === null || _this$formDataToBeWat3 === void 0 ? void 0 : _this$formDataToBeWat3.note_edane)) {
        this.formDataToBeWatched.classe_risque = 'BON';
        this.classe_riques_bg_color = {
          "background-color": '#1D5D9B',
          'color': "#ffffff"
        };
      } else if (graduations !== null && graduations !== void 0 && graduations.acceptable.includes((_this$formDataToBeWat4 = this.formDataToBeWatched) === null || _this$formDataToBeWat4 === void 0 ? void 0 : _this$formDataToBeWat4.note_edane)) {
        this.formDataToBeWatched.classe_risque = 'ACCEPTABLE';
        this.classe_riques_bg_color = {
          "background-color": '#8EAC50',
          'color': "#ffffff"
        };
      } else if (graduations !== null && graduations !== void 0 && graduations.sensible.includes((_this$formDataToBeWat5 = this.formDataToBeWatched) === null || _this$formDataToBeWat5 === void 0 ? void 0 : _this$formDataToBeWat5.note_edane)) {
        this.formDataToBeWatched.classe_risque = 'SENSIBLE';
        this.classe_riques_bg_color = {
          "background-color": '#FFC95F',
          'color': "#ffffff"
        };
      } else if (graduations !== null && graduations !== void 0 && graduations.weak.includes((_this$formDataToBeWat6 = this.formDataToBeWatched) === null || _this$formDataToBeWat6 === void 0 ? void 0 : _this$formDataToBeWat6.note_edane)) {
        this.formDataToBeWatched.classe_risque = 'FRAGILE';
        this.classe_riques_bg_color = {
          "background-color": '#F8DE22',
          'color': "#ffffff"
        };
      } else if (graduations !== null && graduations !== void 0 && graduations.not_acceptable.includes((_this$formDataToBeWat7 = this.formDataToBeWatched) === null || _this$formDataToBeWat7 === void 0 ? void 0 : _this$formDataToBeWat7.note_edane)) {
        this.formDataToBeWatched.classe_risque = 'NON ACCEPTABLE';
        this.classe_riques_bg_color = {
          "background-color": 'rgb(248 106 34)',
          'color': "#ffffff"
        };
      } else if (graduations !== null && graduations !== void 0 && graduations.not_considered.includes((_this$formDataToBeWat8 = this.formDataToBeWatched) === null || _this$formDataToBeWat8 === void 0 ? void 0 : _this$formDataToBeWat8.note_edane)) {
        this.formDataToBeWatched.classe_risque = 'SANS INTERET';
        this.classe_riques_bg_color = {
          "background-color": '#445069',
          'color': "#ffffff"
        };
      } else if (!((_this$formDataToBeWat9 = this.formDataToBeWatched) !== null && _this$formDataToBeWat9 !== void 0 && _this$formDataToBeWat9.note_edane)) {
        this.formDataToBeWatched.classe_risque = '';
      }
    },
    checkboxValCashCall: function checkboxValCashCall(event) {
      var vars = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      // si etat financier exist pas , cocher sni à non
      if (true) {
        if (event.target.checked) {
          if (event.target.value == 'Non') {
            this.formDataToBeWatched['has_sni'] = 'Non';
          }
        } else {
          this.formDataToBeWatched['has_sni'] = "";
        }
      }
      if (vars == 'credit_syndique') {
        if (event.target.checked) {
          this.formDataToBeWatched[vars] = event.target.value;
          if (event.target.value == 'Non') {
            this.formDataToBeWatched.cheffe_file = '';
          }
        }
      } else {
        if (event.target.checked) {
          this.formDataToBeWatched[vars] = event.target.value;
        } else {
          this.formDataToBeWatched[vars] = "";
        }
      }
      // console.log('vars', vars);
      // console.log("event.target",event.target.value);

      // if (vars =="has_sni") {

      // }
    },
    eventToAnaFin: function eventToAnaFin() {
      EventBus.$emit("send-to-ana_fin", {
        annee_referentielle: this.formDataToBeWatched.annee_referentielle,
        compte_contribuable: this.formDataToBeWatched.compte_contribuable
      });
    },
    addMore: function addMore(listName) {
      this[listName].push({
        nom_actionnaire: "",
        pourcentage_participation: "",
        max: this.ActionnariatMaxNumber
      });
    },
    remove: function remove(index) {
      this.actionnariats.splice(index, 1);
      this.formDataToBeWatched.total_part = this.totalPartPourcentageActionnariats;
      this.handleInput();
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
      var _this7 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              if (_DEBUG) console.log(">> updateFormDataForDeletion");
              _this7.formDataToBeWatched.is_deleted = true;
              // Actually delete from cache
              _context3.next = 4;
              return _cache["delete"](documentId);
            case 4:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }))();
    },
    /**
    * executes before the page/tab/browser is closed
    * ! actually only works when the tab is refreshed
    */
    beforePageIsClosed: function beforePageIsClosed(event) {
      var _this8 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              event.preventDefault();
              event.returnValue = ""; // ! Won't work without this

              if (_DEBUG) console.log(">> beforePageIsClosed");
              // shows native popup
              // ! Only works on page reloads

              // Check if formDataToBeWatched is empty
              if (!_this8.formDataToBeWatched.is_deleted) {
                _context4.next = 5;
                break;
              }
              return _context4.abrupt("return");
            case 5:
              // Upload current (and arguably latest) formDataToBeWatched data

              _this8.uploadDataToServerAndUpdateLastSave(_this8.formDataToBeWatched, _this8.formDataToBeWatched);
              if (_DEBUG) console.log("<< beforePageIsClosed");
            case 7:
            case "end":
              return _context4.stop();
          }
        }, _callee4);
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
      var _this9 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
        var data, timeSpentInSeconds;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
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
              _context5.next = 5;
              return _cache.upsert(documentId, data);
            case 5:
              if (_lastSaveTime != null) {
                // Last save time exists
                timeSpentInSeconds = (Date.now() - _lastSaveTime) / 1000; // Upload data to serve, update last save and clear cache when interval timeout
                if (timeSpentInSeconds >= _onlineSaveIntervalTimeInSeconds) {
                  _this9.uploadDataToServerAndUpdateLastSave(newVal, oldVal);
                }
              }
              // First upload
              if (!_lastSaveTime) {
                _this9.uploadDataToServerAndUpdateLastSave(newVal, oldVal);
              }
            case 7:
            case "end":
              return _context5.stop();
          }
        }, _callee5);
      }))();
    },
    /**
    * does exactly what the long ass name says lol
    * @param  {Object} newVal updated form data
    * @param  {Object} oldVal old form data
    * @return {void}
    */
    uploadDataToServerAndUpdateLastSave: function uploadDataToServerAndUpdateLastSave(newVal, oldVal) {
      var _this0 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              if (_DEBUG) console.log(">> uploadDataToServerAndUpdateLastSave");
              _context6.prev = 1;
              if (_DEBUG) console.log(">> this.autosaving");
              _context6.next = 5;
              return _this0.autosaving(newVal, oldVal);
            case 5:
              // Update last save time
              _lastSaveTime = Date.now();
              // ! DONOT Clear cache
              // _cache.delete(documentId);
              if (_DEBUG) console.log("<< uploadDataToServerAndUpdateLastSave");
              _context6.next = 12;
              break;
            case 9:
              _context6.prev = 9;
              _context6.t0 = _context6["catch"](1);
              // TODO add error
              if (_DEBUG) console.error("xx uploadDataToServerAndUpdateLastSave", _context6.t0);
            case 12:
            case "end":
              return _context6.stop();
          }
        }, _callee6, null, [[1, 9]]);
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
      var _this1 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              if (_DEBUG) console.log(">> uploadDataToServerBeforePageCloses");
              _context7.prev = 1;
              _context7.next = 4;
              return _this1.autosaving(newVal, oldVal);
            case 4:
              // Update last save time
              _lastSaveTime = Date.now();
              // Clear cache
              _cache["delete"](documentId);
              if (_DEBUG) console.log("<< uploadDataToServerBeforePageCloses");
              _context7.next = 12;
              break;
            case 9:
              _context7.prev = 9;
              _context7.t0 = _context7["catch"](1);
              // TODO add error
              if (_DEBUG) console.error("xx uploadDataToServerBeforePageCloses", _context7.t0);
            case 12:
            case "end":
              return _context7.stop();
          }
        }, _callee7, null, [[1, 9]]);
      }))();
    },
    /**
    * does exactly what the name says
    * @return {void}
    */
    uploadDataToServerEvery30Seconds: function uploadDataToServerEvery30Seconds() {
      var _this10 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
        return _regeneratorRuntime().wrap(function _callee8$(_context8) {
          while (1) switch (_context8.prev = _context8.next) {
            case 0:
              // if (_DEBUG) console.log(">> uploadDataToServerEvery30Seconds", _timeSpentInSeconds);
              _timeSpentInSeconds++;
              if (!(_timeSpentInSeconds % 30 != 0)) {
                _context8.next = 3;
                break;
              }
              return _context8.abrupt("return");
            case 3:
              if (_DEBUG) console.log(">> uploadDataToServerEvery30Seconds", _timeSpentInSeconds);
              _context8.prev = 4;
              if (_DEBUG) console.log(">> uploadDataToServerEvery30Seconds >> autosaving", _timeSpentInSeconds);
              _context8.next = 8;
              return _this10.autosaving(_this10.formDataToBeWatched, _this10.formDataToBeWatched);
            case 8:
              // Update last save time
              _lastSaveTime = Date.now();
              // Clear cache ?
              // _cache.delete(documentId);
              if (_DEBUG) console.log("<< uploadDataToServerEvery30Seconds << autosaving");
              _context8.next = 15;
              break;
            case 12:
              _context8.prev = 12;
              _context8.t0 = _context8["catch"](4);
              // TODO add error
              if (_DEBUG) console.error("xx uploadDataToServerEvery30Seconds", _context8.t0);
            case 15:
            case "end":
              return _context8.stop();
          }
        }, _callee8, null, [[4, 12]]);
      }))();
    },
    // End Cache management functions
    findIndexByObj: function findIndexByObj(label) {
      var _this$tab;
      var tab = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "secteurs_activites";
      return (_this$tab = this[tab]) === null || _this$tab === void 0 ? void 0 : _this$tab.findIndex(function (el) {
        return (el === null || el === void 0 ? void 0 : el.secteurs_cofina) === label;
      });
    },
    change_secteur: function change_secteur(event) {
      //this.formDataToBeWatched.secteur_activite_pcb = this.secteurs_activites[this.findIndexByObj(event.target.value)]?.secteurs_pcb
      //this.formDataToBeWatched.sous_secteur_activite_pcb = this.secteurs_activites[this.findIndexByObj(event.target.value)]?.sous_secteur_pcb
    },
    checkboxValSegEnt: function checkboxValSegEnt(segment_entreprise, id) {
      var _this$meta_data$dossi,
        _this11 = this;
      this.formDataToBeWatched['segment_entreprise'] = segment_entreprise;
      for (var i = 0; i < this.segment_entreprise_list.length; i++) {
        if (i != id - 1) {
          this.segment_entreprise_list[i]['disabled'] = !this.segment_entreprise_list[i]['disabled'];
        }
      }
      _services_credit_service__WEBPACK_IMPORTED_MODULE_4__["default"].typeOfRespMar(segment_entreprise, this.meta_data.cred_pub_key, null, (_this$meta_data$dossi = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi === void 0 ? void 0 : _this$meta_data$dossi.categorie_client).then(function (res) {
        var ObjKey = res.data[0];
        var ObjVal = res.data[1];
        // console.log('ObjKey',res.data[0])
        // console.log('ObjVal',res.data[1])

        _this11.formDataToBeWatched[ObjKey] = ObjVal;
        if (!['', null, undefined].includes(res === null || res === void 0 ? void 0 : res.data[2])) {
          var _res$data$2$, _res$data$2$2;
          var ObjKey2 = (_res$data$2$ = res === null || res === void 0 ? void 0 : res.data[2][0]) !== null && _res$data$2$ !== void 0 ? _res$data$2$ : null;
          var ObjVal2 = (_res$data$2$2 = res === null || res === void 0 ? void 0 : res.data[2][1]) !== null && _res$data$2$2 !== void 0 ? _res$data$2$2 : null;
          if (!['', null, undefined].includes(ObjKey2)) {
            _this11.formDataToBeWatched[ObjKey2] = ObjVal2;
          }
        }
      })["catch"](function (err) {
        console.log(err);
      });
    },
    onRequestTypeChange: function onRequestTypeChange() {
      var _this12 = this;
      var raw_searchable = this.credits.find(function (credit) {
        return credit.lebelle == _this12.formDataToBeWatched.type_credit;
      });
      if (raw_searchable && Object.keys(raw_searchable).length > 0) {
        if (this.formDataToBeWatched.duree_credit == "") {
          this.formDataToBeWatched.duree_credit = raw_searchable.duree_min;
          this.dpcredit1 = true;
        }
      }
    },
    loadSlctMatCliEnc: function loadSlctMatCliEnc() {
      var load = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      this.formDataToBeWatched.montant_demander = this.formDataToBeWatched.montant_sollicite;
    },
    formatPrice: function formatPrice(value) {
      var val = (value / 1).toFixed(0).replace('.', ',');
      return val.toString().replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    },
    sendEventClientele: function sendEventClientele() {
      EventBus.$emit("type_de_clientele_change", this.formDataToBeWatched);
      // EventBus.$emit("type_de_clientele_change",this.formDataToBeWatched.type_de_clientele)
    },
    updateTypeClientele: function updateTypeClientele(event) {
      var _event$target;
      this.formDataToBeWatched.type_de_clientele = event === null || event === void 0 || (_event$target = event.target) === null || _event$target === void 0 ? void 0 : _event$target.value;
    },
    selectTypeClientele: function selectTypeClientele(typeDeClientele) {
      var _this13 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
        var _this13$authcheckUsr;
        return _regeneratorRuntime().wrap(function _callee9$(_context9) {
          while (1) switch (_context9.prev = _context9.next) {
            case 0:
              if (!(_this13.authcheckUsr == null)) {
                _context9.next = 5;
                break;
              }
              _context9.next = 3;
              return _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["default"].loadUserData().then(function (res) {
                _this13.authcheck = true;
                _this13.authcheckUsr = res.data;
                _this13.authcheckStatus = res.status;
                if (_this13.authcheckUsr.categorie_client.toUpperCase() === "RETAIL") typeDeClientele = "Particuliers";
              })["catch"](function (err) {
                _this13.loadWithError(err);
              });
            case 3:
              _context9.next = 6;
              break;
            case 5:
              if (_this13.authcheckUsr.categorie_client.toUpperCase() === "RETAIL") typeDeClientele = "Particuliers";
            case 6:
              if (_this13.formDataToBeWatched.type_de_clientele != '') {
                // console.log("type_de_clientele 1 ",typeDeClientele)
                _this13.sendEventClientele();
              }
              _this13.mapClienteleToSegmentEntreprise();
              // let tbVal = null
              // let credVal = this.determineCredPubTablesFromDosCred(this.meta_data.dossier_credit)
              _services_credit_service__WEBPACK_IMPORTED_MODULE_4__["default"].typeOfDispatcher(typeDeClientele, _this13.meta_data.cred_pub_key).then(function (res) {
                _this13.formDataToBeWatched.disp_risq_filiale = res.data;
              })["catch"](function (err) {
                console.log(err);
              });
              // if(credVal[0]){
              //     tbVal = credVal[2]

              // }

              if (((_this13$authcheckUsr = _this13.authcheckUsr) === null || _this13$authcheckUsr === void 0 ? void 0 : _this13$authcheckUsr.categorie_client) == "Retail") {
                _this13.formDataToBeWatched.segment_entreprise = "Clientèle des Particuliers et des Professionnels";
                _services_credit_service__WEBPACK_IMPORTED_MODULE_4__["default"].typeOfChefDCEI(_this13.formDataToBeWatched.segment_entreprise, _this13.meta_data.cred_pub_key).then(function (res) {
                  var ObjKey = res.data[0];
                  var ObjVal = res.data[1];
                  _this13.formDataToBeWatched[ObjKey] = ObjVal;
                  if (!['', null, undefined].includes(res === null || res === void 0 ? void 0 : res.data[2])) {
                    var _res$data$2$3, _res$data$2$4;
                    var ObjKey2 = (_res$data$2$3 = res === null || res === void 0 ? void 0 : res.data[2][0]) !== null && _res$data$2$3 !== void 0 ? _res$data$2$3 : null;
                    var ObjVal2 = (_res$data$2$4 = res === null || res === void 0 ? void 0 : res.data[2][1]) !== null && _res$data$2$4 !== void 0 ? _res$data$2$4 : null;
                    if (!['', null, undefined].includes(ObjKey2)) {
                      _this13.formDataToBeWatched[ObjKey2] = ObjVal2;
                    }
                  }
                })["catch"](function (err) {
                  console.log(err);
                });
              }
            case 10:
            case "end":
              return _context9.stop();
          }
        }, _callee9);
      }))();
    },
    // selectTypeClientele(typeDeClientele) {
    //     Credit.typeOfDispatcher(typeDeClientele, this.meta_data.cred_pub_key);
    // },
    fetchClients: function fetchClients(data) {
      return new Promise(function (resolve, reject) {
        if (data.length >= 3) {
          _services_credit_service__WEBPACK_IMPORTED_MODULE_4__["default"].loadClients(data).then(function (res) {
            res.data.forEach(function (element) {
              element['slug'] = element.nomcli + ' - ' + element.matcli;
            });
            resolve(res.data);
          })["catch"](function (err) {
            console.log(err);
          });
        } else {
          resolve([]);
        }
      });
    },
    // tableClosedOrOpened
    tableClosedOrOpened: function tableClosedOrOpened() {
      this.seen = this.fetchClosedTables(this.tb_name + this.meta_data['cred_pub_key']);
    },
    openNotesModal: function openNotesModal() {
      var listing = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      this.listingNote = listing;
      this.$modal.show(this.tb_name);
    },
    // AJOUTER
    launchAutoSaver: function launchAutoSaver() {
      var _this14 = this;
      _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["default"].loadUserData().then(function (res) {
        _this14.send2Backend(res, 0, 0);
      })["catch"](function (err) {
        _this14.loadWithError(err);
      });
    },
    formDataVars: function formDataVars(event) {
      this.formDataToBeWatched[event[0]] = event[1];
    },
    formatDateForInput: function formatDateForInput(data) {
      var day = data.getDate() <= 9 ? "0" + data.getDate() : data.getDate();
      var monthNumber = data.getMonth() + 1;
      var month = monthNumber <= 9 ? "0" + monthNumber : monthNumber;
      return data.getFullYear() + "-" + month + "-" + day;
    },
    loadRetrieved: function loadRetrieved() {
      var _this15 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee0() {
        var _this15$meta_data$dos;
        var lentb, createdKey, createdKeyArr, nowdate, anneeCourante, format_date, client_core_banking, activity_name, _this15$meta_data$dos2, _this15$meta_data$dos3, _this15$formDataToBeW, _this15$formDataToBeW2, _this15$meta_data$dos4, _this15$meta_data$dos5, _this15$meta_data$dos6, _this15$meta_data$dos7, _this15$meta_data$dos8;
        return _regeneratorRuntime().wrap(function _callee0$(_context0) {
          while (1) switch (_context0.prev = _context0.next) {
            case 0:
              lentb = _this15.meta_data['dossier_credit']['tbs_in_use'];
              createdKey = _this15.tb_name;
              createdKeyArr = createdKey.split("tb");
              createdKey = "cred_pub_tb_" + createdKeyArr[1];
              _this15.gl_key = createdKey;

              // Close table by default
              _this15.defaultRetract(false, (_this15$meta_data$dos = _this15.meta_data["dossier_credit"]) === null || _this15$meta_data$dos === void 0 ? void 0 : _this15$meta_data$dos.applied_templ_id);
              nowdate = new Date();
              anneeCourante = new Date().getFullYear();
              format_date = new Date(_this15.meta_data['dossier_credit'].created_at);
              _this15.formDataToBeWatched.date_demande = _this15.formatDateForInput(format_date);
              // format_date = this.formatDateForInput(format_date)
              _this15.maxdate = _this15.formatDateForInput(nowdate);
              if (!(_this15.meta_data['dossier_credit'][createdKey] == undefined)) {
                _context0.next = 19;
                break;
              }
              if (!(_this15.meta_data["dossier_credit"]["client_core_banking"] != undefined)) {
                _context0.next = 18;
                break;
              }
              client_core_banking = _this15.meta_data["dossier_credit"]["client_core_banking"];
              _context0.next = 16;
              return _this15.matchingCoreBanking();
            case 16:
              activity_name = client_core_banking === null || client_core_banking === void 0 ? void 0 : client_core_banking.activity_name;
              if (activity_name != undefined) {
                _this15.formDataToBeWatched.secteur_activite = activity_name;
              }
            case 18:
              _this15.formDataToBeWatched.annee_referentielle = anneeCourante - 1;
            case 19:
              if (lentb.length > 0) {
                if (_this15.meta_data['dossier_credit'][createdKey] != undefined) {
                  _this15.setSegmentEntreprise((_this15$meta_data$dos2 = _this15.meta_data['dossier_credit']) === null || _this15$meta_data$dos2 === void 0 || (_this15$meta_data$dos2 = _this15$meta_data$dos2.cred_pub_tb_00) === null || _this15$meta_data$dos2 === void 0 ? void 0 : _this15$meta_data$dos2.segment_entreprise);
                  _this15.selectTypeClientele((_this15$meta_data$dos3 = _this15.meta_data['dossier_credit']) === null || _this15$meta_data$dos3 === void 0 || (_this15$meta_data$dos3 = _this15$meta_data$dos3.cred_pub_tb_00) === null || _this15$meta_data$dos3 === void 0 ? void 0 : _this15$meta_data$dos3.type_de_clientele);
                  _this15.formDataToBeWatched = _this15.meta_data['dossier_credit'][createdKey];
                  if (_this15.meta_data['dossier_credit'][createdKey]["actionnariats"] != "") {
                    _this15.actionnariats = _this15.meta_data['dossier_credit'][createdKey]["actionnariats"];
                  }
                  if (['', null, undefined].includes((_this15$formDataToBeW = _this15.formDataToBeWatched) === null || _this15$formDataToBeW === void 0 ? void 0 : _this15$formDataToBeW.date_reception_demande_client)) {
                    _this15.$set(_this15.formDataToBeWatched, 'date_reception_demande_client', "");
                  }
                  if (['', null, undefined].includes((_this15$formDataToBeW2 = _this15.formDataToBeWatched) === null || _this15$formDataToBeW2 === void 0 ? void 0 : _this15$formDataToBeW2.type_de_clientele_autre)) {
                    _this15.$set(_this15.formDataToBeWatched, 'type_de_clientele_autre', "");
                  }

                  // CHECK WHETHER IT IS FIRST TIME
                  if (((_this15$meta_data$dos4 = _this15.meta_data['dossier_credit'][createdKey]) === null || _this15$meta_data$dos4 === void 0 ? void 0 : _this15$meta_data$dos4.is_first_time) === false) {
                    _this15.setAllDefaultFields(createdKey);
                  } else {
                    if (((_this15$meta_data$dos5 = _this15.meta_data['dossier_credit']) === null || _this15$meta_data$dos5 === void 0 ? void 0 : _this15$meta_data$dos5.caf_recorded_file) !== undefined) {
                      _this15.setAllDefaultFieldsRecByCaf();
                    }
                  }
                  _this15.updateClasseRisque();
                } else {
                  if (((_this15$meta_data$dos6 = _this15.meta_data['dossier_credit']) === null || _this15$meta_data$dos6 === void 0 ? void 0 : _this15$meta_data$dos6.caf_recorded_file) != undefined) {
                    _this15.setAllDefaultFieldsRecByCaf();
                  }
                }
                // SET FIRST TIME TO FALSE
                _this15.formDataToBeWatched.is_first_time = false;
              } else {
                if (!_this15.dismissFormData.includes((_this15$meta_data$dos7 = _this15.meta_data['dossier_credit']) === null || _this15$meta_data$dos7 === void 0 ? void 0 : _this15$meta_data$dos7.applied_templ_id)) {
                  // IN CASE THE FILE IS OPENED BY CAF
                  if (((_this15$meta_data$dos8 = _this15.meta_data['dossier_credit']) === null || _this15$meta_data$dos8 === void 0 ? void 0 : _this15$meta_data$dos8.caf_recorded_file) !== undefined) {
                    _this15.setAllDefaultFieldsRecByCaf();
                  }
                  // IN CASE THE FILE IS OPENED BY ENR

                  // SET FIRST TIME TO FALSE
                  _this15.formDataToBeWatched.is_first_time = false;
                }
              }
              setTimeout(function () {
                var _this15$meta_data$dos9, _this15$meta_data$dos0, _this15$meta_data$dos1, _this15$meta_data$dos10, _this15$meta_data$dos11, _this15$authcheckUsr, _this15$meta_data$dos12;
                var decision_logs = (_this15$meta_data$dos9 = (_this15$meta_data$dos0 = _this15.meta_data['dossier_credit']) === null || _this15$meta_data$dos0 === void 0 ? void 0 : _this15$meta_data$dos0.decision_logs) !== null && _this15$meta_data$dos9 !== void 0 ? _this15$meta_data$dos9 : [];
                var current_stage = (_this15$meta_data$dos1 = (_this15$meta_data$dos10 = _this15.meta_data['dossier_credit']) === null || _this15$meta_data$dos10 === void 0 || (_this15$meta_data$dos10 = _this15$meta_data$dos10.workflow) === null || _this15$meta_data$dos10 === void 0 || (_this15$meta_data$dos10 = _this15$meta_data$dos10.current_stage) === null || _this15$meta_data$dos10 === void 0 ? void 0 : _this15$meta_data$dos10.stage_id) !== null && _this15$meta_data$dos1 !== void 0 ? _this15$meta_data$dos1 : 0;
                if (!['', null, undefined].includes(decision_logs) && decision_logs.length == 0 && current_stage == 0 || ((_this15$meta_data$dos11 = _this15.meta_data['dossier_credit']) === null || _this15$meta_data$dos11 === void 0 || (_this15$meta_data$dos11 = _this15$meta_data$dos11.final_outcome) === null || _this15$meta_data$dos11 === void 0 ? void 0 : _this15$meta_data$dos11.outcome) == 0 && ['DUxMP2ZQheGFreQt5z2s', 'r472oAxtaFJSlsh5', 'weu2BjZkaf0Y4tHguD2Y', 'kggrA5A18KdHk452gEtk', 'PTh9sMKbrT0gpqcw4WaT', 'THzsvqanYXFlqROQVHJt'].includes((_this15$authcheckUsr = _this15.authcheckUsr) === null || _this15$authcheckUsr === void 0 ? void 0 : _this15$authcheckUsr.role_uuid) && ((_this15$meta_data$dos12 = _this15.meta_data['dossier_credit']) === null || _this15$meta_data$dos12 === void 0 ? void 0 : _this15$meta_data$dos12.is_ajournee) == true) {
                  _this15.onClasseRisqueChange();
                  // if (this.formDataToBeWatched.coming_from_sni == true) {
                  // }
                }
              }, 3000);
              _this15.dpcredit1 = true;
            case 22:
            case "end":
              return _context0.stop();
          }
        }, _callee0);
      }))();
    },
    setAllDefaultFieldsRecByCaf: function setAllDefaultFieldsRecByCaf() {
      var _this16 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee10() {
        var _this16$meta_data$dos, _this16$meta_data$dos2, _this16$meta_data$dos3;
        return _regeneratorRuntime().wrap(function _callee10$(_context10) {
          while (1) switch (_context10.prev = _context10.next) {
            case 0:
              _context10.next = 2;
              return _this16.matchingCoreBanking();
            case 2:
              _this16.formDataToBeWatched.type_demande = (_this16$meta_data$dos = _this16.meta_data['dossier_credit']) === null || _this16$meta_data$dos === void 0 || (_this16$meta_data$dos = _this16$meta_data$dos.caf_recorded_file) === null || _this16$meta_data$dos === void 0 ? void 0 : _this16$meta_data$dos.type_demande;
              _this16.formDataToBeWatched.contact_client = (_this16$meta_data$dos2 = _this16.meta_data['dossier_credit']) === null || _this16$meta_data$dos2 === void 0 || (_this16$meta_data$dos2 = _this16$meta_data$dos2.caf_recorded_file) === null || _this16$meta_data$dos2 === void 0 ? void 0 : _this16$meta_data$dos2.phone;
              _this16.formDataToBeWatched.email_client = (_this16$meta_data$dos3 = _this16.meta_data['dossier_credit']) === null || _this16$meta_data$dos3 === void 0 || (_this16$meta_data$dos3 = _this16$meta_data$dos3.caf_recorded_file) === null || _this16$meta_data$dos3 === void 0 ? void 0 : _this16$meta_data$dos3.email;
              setTimeout(function () {
                var _this16$meta_data$dos4, _this16$meta_data$dos5, _this16$formDataToBeW, _this16$formDataToBeW2, _this16$meta_data$dos6;
                _this16.formDataToBeWatched.type_credit = (_this16$meta_data$dos4 = _this16.meta_data['dossier_credit']) === null || _this16$meta_data$dos4 === void 0 || (_this16$meta_data$dos4 = _this16$meta_data$dos4.caf_recorded_file) === null || _this16$meta_data$dos4 === void 0 ? void 0 : _this16$meta_data$dos4.type_de_pret;
                _this16.formDataToBeWatched.montant_sollicite = (_this16$meta_data$dos5 = _this16.meta_data['dossier_credit']) === null || _this16$meta_data$dos5 === void 0 || (_this16$meta_data$dos5 = _this16$meta_data$dos5.caf_recorded_file) === null || _this16$meta_data$dos5 === void 0 || (_this16$meta_data$dos5 = _this16$meta_data$dos5.montant) === null || _this16$meta_data$dos5 === void 0 ? void 0 : _this16$meta_data$dos5.toString().replace(/\s/g, '');
                _this16.formDataToBeWatched.enc_cumule_apres_acc = Number((_this16$formDataToBeW = _this16.formDataToBeWatched.encours_actuel) === null || _this16$formDataToBeW === void 0 ? void 0 : _this16$formDataToBeW.toString().replace(/\s/g, '')) + Number((_this16$formDataToBeW2 = _this16.formDataToBeWatched.montant_sollicite) === null || _this16$formDataToBeW2 === void 0 ? void 0 : _this16$formDataToBeW2.toString().replace(/\s/g, ''));
                _this16.matricule_client = (_this16$meta_data$dos6 = _this16.meta_data['dossier_credit']) === null || _this16$meta_data$dos6 === void 0 || (_this16$meta_data$dos6 = _this16$meta_data$dos6.caf_recorded_file) === null || _this16$meta_data$dos6 === void 0 || (_this16$meta_data$dos6 = _this16$meta_data$dos6.client) === null || _this16$meta_data$dos6 === void 0 ? void 0 : _this16$meta_data$dos6.matcli;
              }, 1000);
              setTimeout(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee1() {
                var _this16$formDataToBeW3;
                return _regeneratorRuntime().wrap(function _callee1$(_context1) {
                  while (1) switch (_context1.prev = _context1.next) {
                    case 0:
                      if (((_this16$formDataToBeW3 = _this16.formDataToBeWatched) === null || _this16$formDataToBeW3 === void 0 ? void 0 : _this16$formDataToBeW3.type_credit) != "") {
                        _this16.dpcredit1 = !_this16.dpcredit1;
                      }
                    case 1:
                    case "end":
                      return _context1.stop();
                  }
                }, _callee1);
              })), 100);
            case 7:
            case "end":
              return _context10.stop();
          }
        }, _callee10);
      }))();
    },
    setAllDefaultFields: function setAllDefaultFields(createdKey) {
      var _this17 = this;
      this.formDataToBeWatched = this.meta_data['dossier_credit'][createdKey];
      setTimeout(function () {
        var _this17$meta_data$dos;
        _this17.matricule_client = (_this17$meta_data$dos = _this17.meta_data['dossier_credit']) === null || _this17$meta_data$dos === void 0 || (_this17$meta_data$dos = _this17$meta_data$dos.caf_recorded_file) === null || _this17$meta_data$dos === void 0 || (_this17$meta_data$dos = _this17$meta_data$dos.client) === null || _this17$meta_data$dos === void 0 ? void 0 : _this17$meta_data$dos.matcli;
      }, 1000);
      setTimeout(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee11() {
        var _this17$formDataToBeW;
        return _regeneratorRuntime().wrap(function _callee11$(_context11) {
          while (1) switch (_context11.prev = _context11.next) {
            case 0:
              if (((_this17$formDataToBeW = _this17.formDataToBeWatched) === null || _this17$formDataToBeW === void 0 ? void 0 : _this17$formDataToBeW.type_credit) != "") {
                _this17.dpcredit1 = !_this17.dpcredit1;
              }
            case 1:
            case "end":
              return _context11.stop();
          }
        }, _callee11);
      })), 100);
    },
    setSegmentEntreprise: function setSegmentEntreprise(segment_entreprise) {
      for (var i = 0; i < this.segment_entreprise_list.length; i++) {
        if (this.segment_entreprise_list[i]['name'] === segment_entreprise) {
          this.segment_entreprise_list[i]['checked'] = true;
          this.checkboxValSegEnt(segment_entreprise, this.segment_entreprise_list[i]['id']);
        }
      }
    },
    setTbVal: function setTbVal(val) {
      this.cred_pub_key = val;
    },
    loadWithError: function loadWithError(err) {
      // // window.location.href = "/login"
    },
    send2Backend: function send2Backend(res, newVal, oldVal) {
      this.authcheck = true;
      this.authcheckUsr = res.data;
      this.authcheckStatus = res.status;
      if (this.authcheckStatus === 401) {
        //            // window.location.href = "/login"
      }
      if (this.authcheck === true) {
        if (['', null].includes(this.formDataToBeWatched.global_env_entity)) {
          // this.$console.log('global_env_entity', this.formDataToBeWatched.global_env_entity)
          this.formDataToBeWatched.global_env_entity = _services_ebapis_service__WEBPACK_IMPORTED_MODULE_2__["default"].loadableEntity()[0].toUpperCase();
          // this.$console.log('global_env_entity', this.formDataToBeWatched.global_env_entity)
        }
        this.$emit('autosaving');
        this.$axios.post(this.ebapisHost + 'creditbuilder/api/v1/autosaving/', {
          user: this.authcheckUsr,
          meta_parseable: this.meta_parseable,
          filledData: this.formDataToBeWatched
        }).then(function (response) {
          // this.$Progress.finish();

          this.$emit('autosaving');

          // console.log(response)

          var tbFetcheData = response.data;
          if (tbFetcheData['is_success'] === true) {
            this.$emit('load-shell');
          }
        }.bind(this))["catch"](function (error) {
          this.$Progress.finish();
          console.log(error);
        }.bind(this));
      } else {
        alert("Unauthenticated");
      }
    },
    // launchDexInfoUpdate(dexInfo) {
    //     Auth.loadUserData()
    //         .then(res => {
    //             this.updateDexInfo(res, dexInfo);
    //         }).catch(err => { this.loadWithError(err) })
    // },
    retract: function retract() {
      this.seen = !this.seen;
      var a = {
        "tb_name": this.tb_name + this.meta_data['cred_pub_key'],
        "status": this.seen
      };
      EventBus.$emit("savedclosed-table", a);
    },
    // add defaultRetract
    defaultRetract: function defaultRetract(rc, ra) {
      if (ra != null) {
        this.seen = rc;
        var a = {
          "tb_name": this.tb_name + this.meta_data['cred_pub_key'],
          "status": this.seen
        };
        EventBus.$emit("savedclosed-table", a);
      }
    },
    retract1: function retract1() {
      this.seen1 = !this.seen1;
    },
    retract2: function retract2() {
      this.seen2 = !this.seen2;
    },
    retract6: function retract6() {
      this.seen6 = !this.seen6;
    },
    deleteTB: function deleteTB() {
      if (confirm('Êtes-vous sûr de vouloir supprimer ce tableau ?')) {
        this.$emit('delete-tb', {
          tb_name: this.tb_name
        });
      }
    },
    loadDate: function loadDate() {
      var options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      };
      var today = new Date();
      this.dateOfToday = today.toLocaleDateString("fr-FR");
    },
    loadTbAttrs: function loadTbAttrs() {
      var l = [];
      var topdivel = this.$refs.topdiv;
      // let k = document.querySelectorAll('.subdiv')
      var k = document.querySelectorAll('.subdiv' + this.tb_name);
      // console.log(k)
      k.forEach(function (e) {
        l.push(e.innerText);
      });
      var p = {
        'name_of_title': topdivel.innerText,
        'list_of_content': l,
        id: "f0-head"
      };
      // console.log(p)
      this.$emit('load-buffer', p);
    },
    cafData: function cafData(res) {
      this.cafInfo = res.data;
      // console.log("cafInfo", this.cafInfo);

      if (this.formDataToBeWatched.telephone_principal_dirg == undefined || this.formDataToBeWatched.telephone_principal_dirg.length === 0) {
        this.formDataToBeWatched.telephone_principal_dirg = this.cafInfo.phonecode;
      }
      // this.formDataToBeWatched.filiale = this.cafInfo.codecaf.replace(/[0-9]/g, "");
      if (this.entityType.toUpperCase() == 'BANK') {
        var _this$cafInfo;
        this.formDataToBeWatched.filiale = (_this$cafInfo = this.cafInfo) === null || _this$cafInfo === void 0 ? void 0 : _this$cafInfo.entite;
        //   this.formDataToBeWatched.pays = this.list_entites[this.formDataToBeWatched.filiale]
      } else {
        this.formDataToBeWatched.filiale = "CFN CIV";
      }

      // this.formDataToBeWatched.agence = this.cafInfo.agence.replaceAll("_", " ");
      // this.formDataToBeWatched.agence = this.formDataToBeWatched.agence.replace(this.formDataToBeWatched.filiale, "")
      this.formDataToBeWatched.caf = this.cafInfo.codecaf ? this.cafInfo.nom + " (" + this.cafInfo.codecaf + ")" : this.cafInfo.nom;
      this.formDataToBeWatched.pays = this.list_entites[this.formDataToBeWatched.filiale];
      this.formDataToBeWatched.nom_complet_caf = this.cafInfo.nom;
      this.formDataToBeWatched.email_caf = this.cafInfo.email;
      this.formDataToBeWatched.id_caf = this.cafInfo.id;
      this.formDataToBeWatched.chef_agence = this.cafInfo.chef_agence;
      this.formDataToBeWatched.chef_zone = this.cafInfo.chef_zone;
      this.formDataToBeWatched.dri_1 = this.cafInfo.dri_1;
      this.formDataToBeWatched.dir_engagement = this.cafInfo.dir_engagement;
      this.formDataToBeWatched.disp_engagement = this.cafInfo.disp_engagement;
      this.formDataToBeWatched.centrale_app = this.cafInfo.centrale_app;

      /************************************************************************/
      // this.formDataToBeWatched.chef_depart_dcei = this.cafInfo.chef_depart_dcei
      this.formDataToBeWatched.dir_dcei = this.cafInfo.dir_dcei;
      this.formDataToBeWatched.disp_dsm = this.cafInfo.disp_dsm;
      this.formDataToBeWatched.dir_centr_exploi = this.cafInfo.dir_centr_exploi;
      this.formDataToBeWatched.assistant_rse = this.cafInfo.assistant_rse;
      this.formDataToBeWatched.chef_serv_rse = this.cafInfo.chef_serv_rse;
      this.formDataToBeWatched.chef_depart_rse = this.cafInfo.chef_depart_rse;
      this.formDataToBeWatched.dir_rse = this.cafInfo.dir_rse;
      // this.formDataToBeWatched.disp_dc = this.cafInfo.disp_dc
      this.formDataToBeWatched.analyste_risq_cred = this.cafInfo.analyste_risq_cred;
      this.formDataToBeWatched.chef_serv_acei = this.cafInfo.chef_serv_acei;
      this.formDataToBeWatched.chef_depart_dc = this.cafInfo.chef_depart_dc;
      this.formDataToBeWatched.dir_cred = this.cafInfo.dir_cred;
      this.formDataToBeWatched.disp_dgr = this.cafInfo.disp_dgr;
      this.formDataToBeWatched.agent_grc = this.cafInfo.agent_grc;
      this.formDataToBeWatched.chef_serv_grc = this.cafInfo.chef_serv_grc;
      this.formDataToBeWatched.dir_grc = this.cafInfo.dir_grc;
      this.formDataToBeWatched.disp_grc = this.cafInfo.disp_grc;
      this.formDataToBeWatched.chef_serv_rcg = this.cafInfo.chef_serv_rcg;
      this.formDataToBeWatched.chef_dept_rcg = this.cafInfo.chef_dept_rcg;
      this.formDataToBeWatched.dir_rcg = this.cafInfo.dir_rcg;
      this.formDataToBeWatched.dir_ccca = this.cafInfo.dir_ccca;
      this.formDataToBeWatched.dir_ca = this.cafInfo.dir_ca;
      this.formDataToBeWatched.dir_dcp = this.cafInfo.dir_dcp;
      /************************************************************************/

      //this.formDataToBeWatched.cofiscore = this.meta_data.dossier_credit?.cred_pub_tb_000?.note_interne
    },
    instruction4: function instruction4(id) {
      var id0 = "#" + id;
      window.$(id0).modal("show");
    },
    clientData: function clientData(res) {
      this.clients = res.data;
    },
    handleInput: function handleInput() {
      this.formDataToBeWatched["actionnariats"] = this.actionnariats;
      this.formDataToBeWatched.total_part = this.totalPartPourcentageActionnariats;
      EventBus.$emit("event-T0", {
        formdata: this.formDataToBeWatched
      });
    },
    onClasseRisqueChange: function onClasseRisqueChange() {
      var _this18 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee12() {
        var _this18$formDataToBeW, _this18$formDataToBeW2;
        var _this18$formDataToBeW3, note_edane, classe_risque, capital, response, score_info;
        return _regeneratorRuntime().wrap(function _callee12$(_context12) {
          while (1) switch (_context12.prev = _context12.next) {
            case 0:
              if (!(((_this18$formDataToBeW = _this18.formDataToBeWatched) === null || _this18$formDataToBeW === void 0 ? void 0 : _this18$formDataToBeW.has_sni) == "Non" || ((_this18$formDataToBeW2 = _this18.formDataToBeWatched) === null || _this18$formDataToBeW2 === void 0 ? void 0 : _this18$formDataToBeW2.has_etat_financier) == "Non")) {
                _context12.next = 2;
                break;
              }
              return _context12.abrupt("return");
            case 2:
              _this18$formDataToBeW3 = _this18.formDataToBeWatched, note_edane = _this18$formDataToBeW3.note_edane, classe_risque = _this18$formDataToBeW3.classe_risque, capital = _this18$formDataToBeW3.capital;
              _this18.formDataToBeWatched.note_edane = "";
              _this18.formDataToBeWatched.classe_risque = "";
              _this18.formDataToBeWatched.capital = "";
              _this18.formDataToBeWatched.coming_from_sni = false;
              _this18.formDataToBeWatched.has_sni = "";
              _this18.$set(_this18.formDataToBeWatched, 'status_note_sni', null);
              _this18.$set(_this18.formDataToBeWatched, 'sni_details', null);
              _this18.eventToAnaFin();
              _context12.next = 13;
              return _this18.getClasseRisque(_this18.formDataToBeWatched.compte_contribuable);
            case 13:
              response = _context12.sent;
              _this18.fetch_score = false;
              if (response["is_success"] == true) {
                score_info = response["score"][0];
                if (["", null, undefined].includes(score_info === null || score_info === void 0 ? void 0 : score_info["error"])) {
                  _this18.formDataToBeWatched.note_edane = score_info["CRAN"];
                  _this18.formDataToBeWatched.classe_risque = score_info["QUALIFICATION"];
                  _this18.formDataToBeWatched.capital = score_info["CA"];
                  _this18.formDataToBeWatched.coming_from_sni = true;
                  _this18.formDataToBeWatched.has_sni = "Oui";
                  _this18.$set(_this18.formDataToBeWatched, 'sni_details', score_info);
                  _this18.$set(_this18.formDataToBeWatched, 'status_note_sni', score_info === null || score_info === void 0 ? void 0 : score_info['VALIDATION']);
                  _this18.updateClasseRisque();
                  EventBus.$emit('update-sni-callback');
                }
              } else {
                _this18.formDataToBeWatched.note_edane = note_edane;
                _this18.formDataToBeWatched.classe_risque = classe_risque;
                _this18.formDataToBeWatched.capital = capital;
              }
            case 16:
            case "end":
              return _context12.stop();
          }
        }, _callee12);
      }))();
    },
    getClasseRisque: function getClasseRisque(compte_contribuable) {
      var _this19 = this;
      // console.log("compte_contribuable==> ",this.formDataToBeWatched.compte_contribuable)
      return new Promise(function (resolve, reject) {
        if (!['', null, undefined].includes(compte_contribuable)) {
          if (compte_contribuable.length > 7) {
            _this19.fetch_score = true;
            _this19.$axios.post(_this19.ebapisHost + "creditbuilder/api/v1/load-score/", {
              cc: compte_contribuable
            }).then(function (res) {
              _this19.fetch_score = false;
              resolve(res.data);
            })["catch"](function (err) {
              console.log(err);
            });
          }
        }
      });
    },
    setActionnariatsVars: function setActionnariatsVars(event, index) {
      // si la valeur a été tapée au clavier
      if (event[2]) {
        if (this.actionnariats[index].pourcentage_participation == 0) this.actionnariats[index].max = this.ActionnariatMaxNumber;
        if (Number(this.actionnariats[index].pourcentage_participation) > 0) this.actionnariats[index].max = Number(this.ActionnariatMaxNumber) + Number(this.actionnariats[index][event[0]]);
      }
      this.actionnariats[index][event[0]] = event[1];
      this.handleInput();
    },
    updateValueSelected: function updateValueSelected() {
      var _this20 = this;
      if (this.formDataToBeWatched.secteur_activite != "") {
        var found = this.secteurs_activites.filter(function (item) {
          return item.intitule == _this20.formDataToBeWatched.secteur_activite;
        });
        if (found.length > 0) {
          this.selected_secteur_activite = found[0];
        }
      }
      if (this.formDataToBeWatched.groupe_activite != "") {
        var _found = this.groupes_activites.filter(function (item) {
          return item.intitule == _this20.formDataToBeWatched.groupe_activite;
        });
        if (_found.length > 0) {
          this.selected_groupe_secteur = _found[0];
        }
      }
    },
    selectedOptionSecteurActivite: function selectedOptionSecteurActivite(value, obj) {
      this.selected_secteur_activite = obj;
      var found = this.groupes_activites.filter(function (item) {
        return item.id == obj.groupe_activite_id;
      });
      if (found.length > 0) {
        this.selected_groupe_secteur = found[0];
        this.formDataToBeWatched.groupe_activite = found[0].intitule;
      }
      this.handleInput();
    },
    selectedOptionGroupeSecteurActivite: function selectedOptionGroupeSecteurActivite(value, obj) {
      this.selected_groupe_secteur = obj;
      this.selected_secteur_activite = "";
      this.formDataToBeWatched.secteur_activite = "";
      this.handleInput();
    },
    loadNoteVerification: function loadNoteVerification() {
      var _this21 = this;
      EventBus.$emit("open-extra-file-explorer");
      setTimeout(function () {
        EventBus.$emit("data-extra-file-explorer", {
          name: "Pièce justificative {(*)}piece_justificative_note_" + _this21.$route.params.templateId
        });
      }, 500);
    },
    mapClienteleToSegmentEntreprise: function mapClienteleToSegmentEntreprise() {
      var clienteleToSegmentMapping = {
        'États': 'Secteur Public',
        'Grandes Entreprises': 'Grandes Entreprises',
        'PME/PMI': 'Petites et Moyennes Entreprises'
      };

      // const mappedSegment = clienteleToSegmentMapping[this.formDataToBeWatched.type_de_clientele];
      return;
      // removed by dead control flow
{ var segmentIndex; }
    },
    handleCurrencyInput: function handleCurrencyInput(event) {
      this.formDataToBeWatched[event[0]] = event[1];
    }
  },
  watch: {
    formDataToBeWatched: {
      handler: function handler(newVal, oldVal) {
        // let montant = Number(newVal.montant_sollicite?.toString().replace(/\s/g, ''))
        // let type_client = newVal.type_de_clientele

        // if (type_client === "Retail") {
        //     this.alert_max_amount_retail = montant > this.max_amount_retail
        // } else {
        //     this.alert_max_amount_retail = false
        // }

        EventBus.$emit("send-f0-to-f13", {
          annee_referentielle: newVal.annee_referentielle,
          compte_contribuable: newVal.compte_contribuable,
          coming_from_sni: newVal.coming_from_sni,
          status_note_sni: newVal.status_note_sni,
          sni_details: newVal.sni_details
        });
        // this.matchingCoreBanking();
        this.autosaving(newVal, oldVal);
        // ? Cache management
        // this.saveDataInCache(newVal, oldVal);
      },
      deep: true,
      immediate: true
    },
    'formDataToBeWatched.bilan_certifie': function formDataToBeWatchedBilan_certifie() {
      var _this$formDataToBeWat0;
      if (this.formDataToBeWatched.bilan_certifie == 'Non' && ((_this$formDataToBeWat0 = this.formDataToBeWatched.nom_cabinet_comptable) === null || _this$formDataToBeWat0 === void 0 ? void 0 : _this$formDataToBeWat0.length) > 0) {
        // console.log("nom_cabinet_comptable",this.formDataToBeWatched.nom_cabinet_comptable)
        this.formDataToBeWatched.nom_cabinet_comptable = "";
      }
    },
    shouldHaveDefaultNote: function shouldHaveDefaultNote(val) {
      // if (vars == 'has_etat_financier') {
      this.formDataToBeWatched.has_default_note = val;
      if (val) {
        // this.formDataToBeWatched.note_edane = ""
        // this.formDataToBeWatched.classe_risque = ""
        // this.formDataToBeWatched.capital = ""
        this.formDataToBeWatched.coming_from_sni = false;
        this.$set(this.formDataToBeWatched, 'status_note_sni', null);
        this.$set(this.formDataToBeWatched, 'sni_details', null);
      } else {
        var _this$formDataToBeWat1;
        if (['', null, undefined, false].includes((_this$formDataToBeWat1 = this.formDataToBeWatched) === null || _this$formDataToBeWat1 === void 0 ? void 0 : _this$formDataToBeWat1.coming_from_sni)) {
          // this.formDataToBeWatched.note_edane = ""
          // this.formDataToBeWatched.classe_risque = ""
          // this.formDataToBeWatched.capital = ""
          this.formDataToBeWatched.coming_from_sni = false;
          this.$set(this.formDataToBeWatched, 'status_note_sni', null);
          this.$set(this.formDataToBeWatched, 'sni_details', null);
        }
        if (!['', null, undefined].includes(this.formDataToBeWatched.compte_contribuable) && !val) {
          this.onClasseRisqueChange();
        }
      }
      this.updateClasseRisque();
      // }
    },
    'core_banking_info.agent_economique_name': {
      handler: function handler(val) {
        if (val) {
          if (!['', null, undefined].includes(this.core_banking_info.agent_economique_name)) {
            this.formDataToBeWatched.type_de_clientele = this.core_banking_info.agent_economique_name;
            this.formDataToBeWatched.code_clientele = this.core_banking_info.agent_economique_code;
            this.formDataToBeWatched.type_clientele_label = "".concat(this.core_banking_info.agent_economique_name, " (").concat(this.core_banking_info.agent_economique_code, ")");
          }
        }
      },
      immediate: true
    },
    matricule_client: function matricule_client(val, oldVal) {
      if (val && val !== oldVal) {
        this.formDataToBeWatched.matricule_client = val;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/memorandum/F0.vue?vue&type=template&id=0408e33a&scoped=true":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/memorandum/F0.vue?vue&type=template&id=0408e33a&scoped=true ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var render = function render() {
  var _vm$formDataToBeWatch, _vm$listeClientele, _vm$listeClientele2, _vm$core_banking_info, _vm$listeClientele3, _vm$meta_data, _vm$meta_data2, _vm$formDataToBeWatch2, _vm$formDataToBeWatch3, _vm$formDataToBeWatch4, _vm$formDataToBeWatch5, _vm$formDataToBeWatch6, _vm$authenticatedUser, _vm$formDataToBeWatch7, _vm$formDataToBeWatch8, _vm$formDataToBeWatch9, _vm$formDataToBeWatch0, _vm$caf_recorded_file, _vm$formDataToBeWatch1;
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
  }), _vm._v(" "), _vm.seen === true ? _c("div", {
    staticClass: "card card-width-height"
  }, [_c("br"), _vm._v(" "), _c("div", {
    staticClass: "card-header hdc pb-0 pt-2"
  }, [_c("h6", {
    ref: "topdiv",
    staticClass: "head",
    attrs: {
      id: "f0-head"
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col"
  }, [_vm._v("\n                            " + _vm._s(_vm.tb_display_name) + " : Fiche signalétique\n                        ")]), _vm._v(" "), _c("div", {
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
    staticClass: "custom-class",
    staticStyle: {
      cursor: "pointer"
    },
    attrs: {
      size: "0.7x"
    },
    on: {
      click: function click($event) {
        return _vm.$modal.show("fiche_signaletique");
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
  })], 1)])])]), _vm._v(" "), _c("table", {
    staticClass: "table table-bordered mt-3"
  }, [_vm._m(0), _vm._v(" "), _c("tbody", [_c("tr", [_c("td", {
    staticClass: "py-2",
    "class": ((_vm$listeClientele = _vm.listeClientele) === null || _vm$listeClientele === void 0 ? void 0 : _vm$listeClientele.length) > 1 ? "col-4 " : "col-6"
  }, [_c("div", {
    staticClass: "form-group"
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
      id: "type_demande"
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
  }, [_vm._v("-- Sélectionner le type de demande --")]), _vm._v(" "), _c("option", {
    attrs: {
      value: ""
    }
  }), _vm._v(" "), _vm._l(_vm.type_demande_list, function (type_demande_) {
    return _c("option", {
      key: type_demande_.name,
      attrs: {
        disabled: type_demande_.disabled
      },
      domProps: {
        value: type_demande_.name
      }
    }, [_vm._v(_vm._s(type_demande_.name))]);
  })], 2)])]), _vm._v(" "), _c("td", {
    staticClass: "py-2",
    "class": ((_vm$listeClientele2 = _vm.listeClientele) === null || _vm$listeClientele2 === void 0 ? void 0 : _vm$listeClientele2.length) > 1 ? "col-8" : "col-6"
  }, [_c("div", {
    staticClass: "d-flex justify-content-between gap-1"
  }, [_c("div", {
    staticClass: "form-group col"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.type_clientele_label,
      expression: "formDataToBeWatched.type_clientele_label"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      disabled: !["", null, undefined].includes((_vm$core_banking_info = _vm.core_banking_info) === null || _vm$core_banking_info === void 0 ? void 0 : _vm$core_banking_info.agent_economique_name),
      id: "type_de_clientele"
    },
    domProps: {
      value: _vm.formDataToBeWatched.type_clientele_label
    },
    on: {
      change: function change($event) {
        return _vm.updateTypeClientele($event);
      },
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formDataToBeWatched, "type_clientele_label", $event.target.value);
      }
    }
  })]), _vm._v(" "), _vm.formDataToBeWatched.categorie_clientele == "Autres" ? _c("div", {
    staticClass: "form-group col-auto"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.type_de_clientele_autre,
      expression: "formDataToBeWatched.type_de_clientele_autre"
    }],
    staticClass: "form-control",
    attrs: {
      id: "type_de_clientele_autre"
    },
    domProps: {
      value: _vm.formDataToBeWatched.type_de_clientele_autre
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formDataToBeWatched, "type_de_clientele_autre", $event.target.value);
      }
    }
  })]) : ((_vm$listeClientele3 = _vm.listeClientele) === null || _vm$listeClientele3 === void 0 ? void 0 : _vm$listeClientele3.length) > 1 ? _c("div", {
    staticClass: "form-group col-auto"
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
      id: "type_clientele"
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
  }, _vm._l(_vm.listeClientele, function (typeC) {
    return _c("option", {
      key: typeC.label,
      domProps: {
        value: typeC.value
      }
    }, [_vm._v("\n                                            " + _vm._s(typeC.label) + "\n                                        ")]);
  }), 0)]) : _vm._e()])])])])]), _vm._v(" "), _c("div", {
    staticClass: "row p-0"
  }, [_c("div", {
    staticClass: "col-12 p-0 position-relative"
  }, [_c("div", {
    staticClass: "card-body mb-5 table-responsive"
  }, [["", null, undefined, false].includes((_vm$meta_data = _vm.meta_data) === null || _vm$meta_data === void 0 || (_vm$meta_data = _vm$meta_data.dossier_credit) === null || _vm$meta_data === void 0 ? void 0 : _vm$meta_data.is_retail_doss) ? [_c("table", {
    staticClass: "table table-bordered mb-0"
  }, [_vm._m(1), _vm._v(" "), _c("tbody", [_c("tr", _vm._l(_vm.segment_entreprise_list, function (segment_entreprise_) {
    return _c("td", {
      key: segment_entreprise_.name
    }, [_c("center", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: segment_entreprise_.checked,
        expression: "segment_entreprise_.checked"
      }],
      attrs: {
        type: "checkbox",
        disabled: segment_entreprise_.disabled,
        id: segment_entreprise_.id
      },
      domProps: _defineProperty({
        checked: segment_entreprise_.checked,
        value: segment_entreprise_.name
      }, "checked", Array.isArray(segment_entreprise_.checked) ? _vm._i(segment_entreprise_.checked, segment_entreprise_.name) > -1 : segment_entreprise_.checked),
      on: {
        input: function input($event) {
          return _vm.checkboxValSegEnt($event.target.value, segment_entreprise_.id);
        },
        change: function change($event) {
          var $$a = segment_entreprise_.checked,
            $$el = $event.target,
            $$c = $$el.checked ? true : false;
          if (Array.isArray($$a)) {
            var $$v = segment_entreprise_.name,
              $$i = _vm._i($$a, $$v);
            if ($$el.checked) {
              $$i < 0 && _vm.$set(segment_entreprise_, "checked", $$a.concat([$$v]));
            } else {
              $$i > -1 && _vm.$set(segment_entreprise_, "checked", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
            }
          } else {
            _vm.$set(segment_entreprise_, "checked", $$c);
          }
        }
      }
    })]), _vm._v(" "), _c("center", [_c("b", [_vm._v("\n                                                    " + _vm._s(segment_entreprise_.name) + "\n                                                ")])])], 1);
  }), 0)])]), _vm._v(" "), _c("br")] : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "relook-header",
    on: {
      click: function click($event) {
        _vm.seen8 = !_vm.seen8;
      }
    }
  }, [_c("h6", {
    "class": " subdiv" + this.tb_name,
    attrs: {
      id: "bilan-certifié"
    }
  }, [_c("span", {
    staticClass: "text-capitalize"
  }, [_vm._v("états")]), _vm._v("  financiers ?\n                                        "), _c("chevron-up-icon", {
    staticClass: "custom-class",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    },
    attrs: {
      size: "21"
    }
  })], 1)]), _vm._v(" "), _vm.seen8 ? _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "table-responsive",
    attrs: {
      id: "autres_besoins"
    }
  }, [_c("div", {
    staticClass: "d-flex"
  }, [_vm._m(2), _vm._v(" "), _c("div", {
    staticClass: "col-md-4 pl-4"
  }, [_c("div", {
    staticClass: "d-flex justify-content-end"
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
      id: "has_etat_financier_oui'"
    },
    domProps: {
      checked: _vm.formDataToBeWatched.has_etat_financier == "Oui"
    },
    on: {
      change: function change($event) {
        return _vm.checkboxValCashCall($event, "has_etat_financier");
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "text-nowrap",
    attrs: {
      "for": "has_etat_financier_oui"
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
      id: "has_etat_financier_non"
    },
    domProps: {
      checked: _vm.formDataToBeWatched.has_etat_financier == "Non"
    },
    on: {
      change: function change($event) {
        return _vm.checkboxValCashCall($event, "has_etat_financier");
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "text-nowrap",
    attrs: {
      "for": "has_etat_financier_non"
    }
  }, [_vm._v(" Non")])])])])])]), _vm._v(" "), _c("div", {
    staticClass: "table-responsive",
    attrs: {
      id: "autres_besoins"
    }
  }, [_c("div", {
    staticClass: "d-flex"
  }, [_vm._m(3), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_c("div", {
    staticClass: "d-flex justify-content-end"
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
      disabled: _vm.formDataToBeWatched.has_etat_financier == "Non",
      value: "Oui",
      id: "has_etat_financier_oui'"
    },
    domProps: {
      checked: _vm.formDataToBeWatched.has_sni == "Oui"
    },
    on: {
      change: function change($event) {
        return _vm.checkboxValCashCall($event, "has_sni");
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "text-nowrap",
    attrs: {
      "for": "has_etat_financier_oui"
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
      disabled: _vm.formDataToBeWatched.has_etat_financier == "Non",
      value: "Non",
      id: "has_etat_financier_non"
    },
    domProps: {
      checked: _vm.formDataToBeWatched.has_sni == "Non"
    },
    on: {
      change: function change($event) {
        return _vm.checkboxValCashCall($event, "has_sni");
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "text-nowrap",
    attrs: {
      "for": "has_etat_financier_non"
    }
  }, [_vm._v(" Non")])])])])])])]) : _vm._e()]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [((_vm$meta_data2 = _vm.meta_data) === null || _vm$meta_data2 === void 0 || (_vm$meta_data2 = _vm$meta_data2.dossier_credit) === null || _vm$meta_data2 === void 0 || (_vm$meta_data2 = _vm$meta_data2.caf_recorded_file) === null || _vm$meta_data2 === void 0 ? void 0 : _vm$meta_data2.is_prospect) != "Oui" ? _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_c("label", {
    staticClass: "form-label"
  }, [_vm._v("Indice du client\n                                ")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.matricule_client,
      expression: "matricule_client"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      readonly: !_vm.list_readonly.includes("matricule_client"),
      id: "indice"
    },
    domProps: {
      value: _vm.matricule_client
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.matricule_client = $event.target.value;
      }
    }
  })]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "denomination_client"
    }
  }, [_vm._v("\n                                    Dénomination client\n                                ")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.denomination_client,
      expression: "formDataToBeWatched.denomination_client"
    }],
    staticClass: "form-control",
    attrs: _defineProperty(_defineProperty({
      required: "",
      type: "text",
      readonly: ""
    }, "readonly", !_vm.list_readonly.includes("denomination_client")), "id", "denomination_client"),
    domProps: {
      value: _vm.formDataToBeWatched.denomination_client
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formDataToBeWatched, "denomination_client", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "compte_contribuable"
    }
  }, [_vm._v("\n                                    " + _vm._s(_vm.compte_contribuable_label)), ((_vm$formDataToBeWatch2 = _vm.formDataToBeWatched) === null || _vm$formDataToBeWatch2 === void 0 ? void 0 : _vm$formDataToBeWatch2.has_sni) == "Oui" ? _c("span", {
    staticStyle: {
      color: "red"
    }
  }, [_vm._v("*")]) : _vm._e()]), _vm._v(" "), _c("input", {
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
      id: "compte_contribuable"
    },
    domProps: {
      value: _vm.formDataToBeWatched.compte_contribuable
    },
    on: {
      change: _vm.onClasseRisqueChange,
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formDataToBeWatched, "compte_contribuable", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(4), _vm._v(" "), _c("div", {
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
      trackBy: "intitule",
      label: "intitule",
      "value-prop": "intitule",
      id: "secteur_activite",
      classes: {
        optionPointed: "text-gray-800 bg-gray-100"
      },
      options: _vm.secteurs_activites_,
      "data-bs-original-title": (_vm$formDataToBeWatch3 = _vm.formDataToBeWatched) === null || _vm$formDataToBeWatch3 === void 0 ? void 0 : _vm$formDataToBeWatch3.secteur_activite,
      title: (_vm$formDataToBeWatch4 = _vm.formDataToBeWatched) === null || _vm$formDataToBeWatch4 === void 0 ? void 0 : _vm$formDataToBeWatch4.secteur_activite,
      "data-toggle": "tooltip",
      "data-placement": "top"
    },
    on: {
      select: _vm.selectedOptionSecteurActivite
    },
    scopedSlots: _vm._u([{
      key: "option",
      fn: function fn(_ref) {
        var option = _ref.option;
        return [_c("p", {
          staticClass: "multiselect-option"
        }, [_vm._v(_vm._s(option.intitule))])];
      }
    }, {
      key: "singlelabel",
      fn: function fn(_ref2) {
        var value = _ref2.value;
        return [_c("p", {
          staticClass: "multiselect-single-label",
          staticStyle: {
            overflow: "hidden"
          }
        }, [_vm._v(_vm._s(value.intitule))])];
      }
    }], null, false, 1667831191),
    model: {
      value: _vm.formDataToBeWatched.secteur_activite,
      callback: function callback($$v) {
        _vm.$set(_vm.formDataToBeWatched, "secteur_activite", $$v);
      },
      expression: "formDataToBeWatched.secteur_activite"
    }
  }), _vm._v(" "), _vm.secteurs_activites_ == "" || _vm.secteurs_activites_.length == 0 ? _c("span", {
    staticClass: "spinner-border spinner-border spinner-custom-input",
    staticStyle: {
      "margin-right": "17px"
    }
  }) : _vm._e()], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(5), _vm._v(" "), _c("div", {
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
      trackBy: "intitule",
      label: "intitule",
      "value-prop": "intitule",
      id: "groupe_activite",
      classes: {
        optionPointed: "text-gray-800 bg-gray-100"
      },
      options: _vm.groupes_activites_,
      "data-bs-original-title": (_vm$formDataToBeWatch5 = _vm.formDataToBeWatched) === null || _vm$formDataToBeWatch5 === void 0 ? void 0 : _vm$formDataToBeWatch5.groupe_activite,
      title: (_vm$formDataToBeWatch6 = _vm.formDataToBeWatched) === null || _vm$formDataToBeWatch6 === void 0 ? void 0 : _vm$formDataToBeWatch6.groupe_activite,
      "data-toggle": "tooltip",
      "data-placement": "top"
    },
    on: {
      select: _vm.selectedOptionGroupeSecteurActivite
    },
    scopedSlots: _vm._u([{
      key: "option",
      fn: function fn(_ref3) {
        var option = _ref3.option;
        return [_c("p", {
          staticClass: "multiselect-option"
        }, [_vm._v(_vm._s(option.intitule))])];
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
        }, [_vm._v(_vm._s(value.intitule))])];
      }
    }], null, false, 1667831191),
    model: {
      value: _vm.formDataToBeWatched.groupe_activite,
      callback: function callback($$v) {
        _vm.$set(_vm.formDataToBeWatched, "groupe_activite", $$v);
      },
      expression: "formDataToBeWatched.groupe_activite"
    }
  }), _vm._v(" "), _vm.groupes_activites_ == "" || _vm.groupes_activites_.length == 0 ? _c("span", {
    staticClass: "spinner-border spinner-border spinner-custom-input",
    staticStyle: {
      "margin-right": "17px"
    }
  }) : _vm._e()], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(6), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.nouvelle_relation,
      expression: "formDataToBeWatched.nouvelle_relation"
    }],
    staticClass: "form-select single-select",
    attrs: {
      id: "nouvelle_relation"
    },
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.formDataToBeWatched, "nouvelle_relation", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
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
      value: "Oui"
    }
  }, [_vm._v("Oui")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "Non"
    }
  }, [_vm._v("Non")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(7), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.groupe,
      expression: "formDataToBeWatched.groupe"
    }],
    staticClass: "form-select single-select",
    attrs: {
      id: "nouvelle_relation"
    },
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.formDataToBeWatched, "groupe", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
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
      value: "Oui"
    }
  }, [_vm._v("Oui")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "Non"
    }
  }, [_vm._v("Non")])])]), _vm._v(" "), _vm.formDataToBeWatched.groupe == "Oui" ? _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(8), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.nom_groupe,
      expression: "formDataToBeWatched.nom_groupe"
    }],
    staticClass: "form-control",
    attrs: {
      id: "nom_groupe"
    },
    domProps: {
      value: _vm.formDataToBeWatched.nom_groupe
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formDataToBeWatched, "nom_groupe", $event.target.value);
      }
    }
  })]) : _vm._e(), _vm._v(" "), _vm.formDataToBeWatched.groupe == "Oui" ? _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(9), _vm._v(" "), _c("currency-input2", {
    attrs: {
      value: _vm.formDataToBeWatched.exposition_groupe,
      id: "exposition_groupe"
    },
    on: {
      input: function input($event) {
        return _vm.handleCurrencyInput($event);
      }
    }
  })], 1) : _vm._e(), _vm._v(" "), ((_vm$authenticatedUser = _vm.authenticatedUser) === null || _vm$authenticatedUser === void 0 ? void 0 : _vm$authenticatedUser.filiale) != "AFGB CM" ? _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(10), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.consentement_bic,
      expression: "formDataToBeWatched.consentement_bic"
    }],
    staticClass: "form-select single-select",
    attrs: {
      id: "consentement_bic"
    },
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.formDataToBeWatched, "consentement_bic", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
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
      value: "Oui"
    }
  }, [_vm._v("Oui")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "Non"
    }
  }, [_vm._v("Non")])])]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "forme_juridique"
    }
  }, [_vm._v("\n                                    Forme juridique\n                                ")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.forme_juridique,
      expression: "formDataToBeWatched.forme_juridique"
    }],
    staticClass: "form-select single-select",
    attrs: {
      id: "forme_juridique"
    },
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.formDataToBeWatched, "forme_juridique", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
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
      value: "SARL Unipersonnelle"
    }
  }, [_vm._v("SARL Unipersonnelle")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "SARL Pluripersonnelle"
    }
  }, [_vm._v("SARL Pluripersonnelle")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "Entreprise Individuelle"
    }
  }, [_vm._v("Entreprise Individuelle")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "Société en nom collectif (SNC)"
    }
  }, [_vm._v("Société en nom collectif\n                                        (SNC)")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "Société Anonyme (SA)"
    }
  }, [_vm._v("Société Anonyme (SA)")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "Société en commandité simple (SCS)"
    }
  }, [_vm._v("Société en commandité\n                                        simple (SCS)")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "Groupement d'intérêt Économique (GIE)"
    }
  }, [_vm._v("Groupement d'intérêt\n                                        Économique (GIE)")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "COOPERATIVE"
    }
  }, [_vm._v("COOPERATIVE")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "Association et Mutuelles"
    }
  }, [_vm._v("Association et Mutuelles")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "Société par actions simplifiées (SAS)"
    }
  }, [_vm._v("Société par actions simplifiées (SAS)")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "capital"
    }
  }, [_vm._v("\n                                    Capital social\n                                ")]), _vm._v(" "), _c("div", {
    staticClass: "d-flex position-relative align-items-center"
  }, [_c("currency-input", {
    style: (_vm$formDataToBeWatch7 = _vm.formDataToBeWatched) !== null && _vm$formDataToBeWatch7 !== void 0 && _vm$formDataToBeWatch7.coming_from_sni ? "background: #00ffff21; color: #000;" : "",
    attrs: {
      value: _vm.formDataToBeWatched.capital,
      id: "capital"
    },
    on: {
      input: _vm.formDataVars
    }
  }), _vm._v(" "), _vm.fetch_score ? _c("span", {
    staticClass: "spinner-border spinner-border spinner-custom-input"
  }) : _vm._e()], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(11), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.cote_en_bourse,
      expression: "formDataToBeWatched.cote_en_bourse"
    }],
    staticClass: "form-select single-select",
    attrs: {
      id: "cote_en_bourse"
    },
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.formDataToBeWatched, "cote_en_bourse", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
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
      value: "Oui"
    }
  }, [_vm._v("Oui")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "Non"
    }
  }, [_vm._v("Non")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(12), _vm._v(" "), _c("date-input", {
    attrs: {
      value: _vm.formDataToBeWatched.date_creation,
      id: "date_creation"
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(13), _vm._v(" "), _c("date-input", {
    attrs: {
      value: _vm.formDataToBeWatched.date_entre_relation,
      id: "date_entre_relation"
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_c("div", {
    staticClass: "d-flex align-items-end gap-1"
  }, [_c("div", {
    staticClass: "col"
  }, [_vm._m(14), _vm._v(" "), _c("div", {
    staticClass: "d-flex position-relative align-items-center"
  }, [_vm.shouldHaveDefaultNote ? _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.note_edane,
      expression: "formDataToBeWatched.note_edane"
    }],
    staticClass: "form-control",
    attrs: {
      required: "",
      type: "text"
    },
    domProps: {
      value: _vm.formDataToBeWatched.note_edane
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formDataToBeWatched, "note_edane", $event.target.value);
      }
    }
  }) : _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.note_edane,
      expression: "formDataToBeWatched.note_edane"
    }],
    staticClass: "form-select",
    style: (_vm$formDataToBeWatch8 = _vm.formDataToBeWatched) !== null && _vm$formDataToBeWatch8 !== void 0 && _vm$formDataToBeWatch8.coming_from_sni ? "" : "background: #00ffff21; color: #000;",
    attrs: {
      required: "",
      type: "text",
      disabled: (_vm$formDataToBeWatch9 = _vm.formDataToBeWatched) === null || _vm$formDataToBeWatch9 === void 0 ? void 0 : _vm$formDataToBeWatch9.coming_from_sni,
      id: "note_edane"
    },
    on: {
      change: [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.formDataToBeWatched, "note_edane", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }, function ($event) {
        return _vm.updateClasseRisque();
      }]
    }
  }, _vm._l(_vm.notes_edane, function (n) {
    return _c("option", {
      key: n,
      domProps: {
        value: n
      }
    }, [_vm._v(" " + _vm._s(n) + " "), _vm.shouldHaveDefaultNote ? _c("span", [_vm._v(" ( Par défaut )")]) : _vm._e()]);
  }), 0), _vm._v(" "), _vm.fetch_score ? _c("span", {
    staticClass: "spinner-border spinner-border spinner-custom-input"
  }) : _vm._e()])]), _vm._v(" "), _vm.shouldHaveDefaultNote ? _c("div", {
    staticClass: "col-auto"
  }, [_c("button", {
    staticClass: "btn",
    "class": (_vm$formDataToBeWatch0 = _vm.formDataToBeWatched) !== null && _vm$formDataToBeWatch0 !== void 0 && (_vm$formDataToBeWatch0 = _vm$formDataToBeWatch0.note_verification) !== null && _vm$formDataToBeWatch0 !== void 0 && _vm$formDataToBeWatch0.files_count ? "btn-success" : "btn-secondary",
    attrs: {
      title: "Cliquer ici pour uploader ou voir le(s) fichier(s)"
    },
    on: {
      click: _vm.loadNoteVerification
    }
  }, [_c("i", {
    staticClass: "icofont-attachment"
  })])]) : _vm._e()])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(15), _vm._v(" "), _vm.shouldHaveDefaultNote ? _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.classe_risque,
      expression: "formDataToBeWatched.classe_risque"
    }],
    staticClass: "form-control",
    attrs: {
      required: "",
      type: "text"
    },
    domProps: {
      value: _vm.formDataToBeWatched.classe_risque
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formDataToBeWatched, "classe_risque", $event.target.value);
      }
    }
  }) : _c("div", {
    staticClass: "d-flex position-relative align-items-center"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.classe_risque,
      expression: "formDataToBeWatched.classe_risque"
    }],
    staticClass: "form-control",
    style: _vm.classe_riques_bg_color,
    attrs: {
      required: "",
      type: "text",
      id: "classe_risque",
      readonly: ""
    },
    domProps: {
      value: _vm.formDataToBeWatched.classe_risque
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formDataToBeWatched, "classe_risque", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.fetch_score ? _c("span", {
    staticClass: "spinner-border spinner-border spinner-custom-input"
  }) : _vm._e()])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(16), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.pays,
      expression: "formDataToBeWatched.pays"
    }],
    staticClass: "form-select single-select",
    attrs: {
      disabled: "",
      readonly: "",
      id: "pays"
    },
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.formDataToBeWatched, "pays", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, _vm._l(_vm.list_entites, function (pays, entite, idx) {
    return _c("option", {
      key: "pays" + idx,
      domProps: {
        value: pays
      }
    }, [_vm._v(_vm._s(pays))]);
  }), 0)]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(17), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.agence,
      expression: "formDataToBeWatched.agence "
    }],
    staticClass: "form-control number",
    attrs: {
      required: "",
      readonly: "",
      type: "text"
    },
    domProps: {
      value: _vm.formDataToBeWatched.agence
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formDataToBeWatched, "agence", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(18), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.agence_domiciliation,
      expression: "formDataToBeWatched.agence_domiciliation "
    }],
    staticClass: "form-control number",
    attrs: {
      required: "",
      readonly: "",
      type: "text"
    },
    domProps: {
      value: _vm.formDataToBeWatched.agence_domiciliation
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formDataToBeWatched, "agence_domiciliation", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(19), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.filiale,
      expression: "formDataToBeWatched.filiale "
    }],
    staticClass: "form-control number",
    attrs: {
      required: "",
      readonly: "",
      type: "text"
    },
    domProps: {
      value: _vm.formDataToBeWatched.filiale
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formDataToBeWatched, "filiale", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(20), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.caf,
      expression: "formDataToBeWatched.caf "
    }],
    staticClass: "form-control",
    attrs: {
      required: "",
      step: "any",
      type: "text",
      readonly: !_vm.list_readonly.includes("caf"),
      id: "caf"
    },
    domProps: {
      value: _vm.formDataToBeWatched.caf
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formDataToBeWatched, "caf", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(21), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model.lazy",
      value: _vm.formDataToBeWatched.contact_client,
      expression: "formDataToBeWatched.contact_client",
      modifiers: {
        lazy: true
      }
    }],
    staticClass: "form-control",
    attrs: {
      required: "",
      step: "any",
      type: "text",
      readonly: !_vm.list_readonly.includes("contact_client"),
      id: "contact_client"
    },
    domProps: {
      value: _vm.formDataToBeWatched.contact_client
    },
    on: {
      change: function change($event) {
        return _vm.$set(_vm.formDataToBeWatched, "contact_client", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(22), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model.lazy",
      value: _vm.formDataToBeWatched.email_client,
      expression: "formDataToBeWatched.email_client",
      modifiers: {
        lazy: true
      }
    }],
    staticClass: "form-control",
    attrs: {
      required: "",
      step: "any",
      type: "text",
      readonly: !_vm.list_readonly.includes("email_client"),
      id: "email_client"
    },
    domProps: {
      value: _vm.formDataToBeWatched.email_client
    },
    on: {
      change: function change($event) {
        return _vm.$set(_vm.formDataToBeWatched, "email_client", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(23), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model.lazy",
      value: _vm.formDataToBeWatched.annee_referentielle,
      expression: "formDataToBeWatched.annee_referentielle",
      modifiers: {
        lazy: true
      }
    }],
    staticClass: "form-control",
    attrs: {
      required: "",
      step: "any",
      type: "text",
      id: "annee_referentielle",
      maxlength: "4"
    },
    domProps: {
      value: _vm.formDataToBeWatched.annee_referentielle
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.formDataToBeWatched, "annee_referentielle", $event.target.value);
      }, _vm.eventToAnaFin]
    }
  }), _vm._v(" "), _vm.erreurAnneeReferentielle ? _c("small", {
    staticStyle: {
      color: "red",
      "font-size": "0.9em",
      "margin-top": "4px",
      "font-style": "italic"
    }
  }, [_vm._v("\n                                        " + _vm._s(_vm.erreurAnneeReferentielle) + "\n                                    ")]) : _vm._e()]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(24), _vm._v(" "), _c("date-input", {
    attrs: {
      id: "date_reception_demande_client",
      value: _vm.formDataToBeWatched.date_reception_demande_client
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(25), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.compte_courant,
      expression: "formDataToBeWatched.compte_courant"
    }],
    staticClass: "form-control",
    attrs: {
      readonly: !_vm.list_readonly.includes("compte_courant"),
      id: "compte_courant"
    },
    domProps: {
      value: _vm.formDataToBeWatched.compte_courant
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formDataToBeWatched, "compte_courant", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(26), _vm._v(" "), _c("date-input", {
    attrs: {
      viewonly: !_vm.list_readonly.includes("date_ouverture"),
      value: _vm.formDataToBeWatched.date_ouverture,
      id: "date_ouverture"
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(27), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.adresse,
      expression: "formDataToBeWatched.adresse"
    }],
    staticClass: "form-control",
    attrs: {
      readonly: !_vm.list_readonly.includes("adresse"),
      id: "adresse"
    },
    domProps: {
      value: _vm.formDataToBeWatched.adresse
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formDataToBeWatched, "adresse", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(28), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.principal_actionnaire,
      expression: "formDataToBeWatched.principal_actionnaire"
    }],
    staticClass: "form-control",
    attrs: {
      required: "",
      type: "text",
      id: "principal_actionnaire"
    },
    domProps: {
      value: _vm.formDataToBeWatched.principal_actionnaire
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formDataToBeWatched, "principal_actionnaire", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(29), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.principal_dirigeant,
      expression: "formDataToBeWatched.principal_dirigeant"
    }],
    staticClass: "form-control",
    attrs: {
      required: "",
      type: "text",
      id: "principal_dirigeant"
    },
    domProps: {
      value: _vm.formDataToBeWatched.principal_dirigeant
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formDataToBeWatched, "principal_dirigeant", $event.target.value);
      }
    }
  })]), _vm._v(" "), _vm.seen5 ? _c("div", {
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
      id: "actionnariat"
    }
  }, [_vm._v("\n                                        Actionnariat\n                                        "), _c("chevron-up-icon", {
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
    staticClass: "table table-borderless mb-1"
  }, [_vm._m(30), _vm._v(" "), _c("tbody", [_vm._l(_vm.actionnariats, function (actionnariat, index) {
    return _c("tr", {
      key: index
    }, [_c("td", {
      staticClass: "col-8"
    }, [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model.lazy",
        value: actionnariat.nom_actionnaire,
        expression: "actionnariat.nom_actionnaire\n                                                                ",
        modifiers: {
          lazy: true
        }
      }],
      staticClass: "form-control",
      attrs: {
        type: "text",
        required: ""
      },
      domProps: {
        value: actionnariat.nom_actionnaire
      },
      on: {
        change: [function ($event) {
          return _vm.$set(actionnariat, "nom_actionnaire", $event.target.value);
        }, _vm.handleInput]
      }
    })]), _vm._v(" "), _c("td", {
      staticClass: "col-4"
    }, [_c("currency-input", {
      attrs: {
        percentage: "",
        max: actionnariat.max,
        value: actionnariat.pourcentage_participation,
        id: "pourcentage_participation",
        "float": ""
      },
      on: {
        input: function input($event) {
          return _vm.setActionnariatsVars($event, index, "pourcentage_participation");
        }
      }
    })], 1), _vm._v(" "), index == 0 ? _c("td", [_c("button", {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: index == 0,
        expression: "index == 0"
      }],
      staticStyle: {
        "background-color": "#2c3e50",
        color: "#ffffff",
        "border-radius": "15%",
        border: "none",
        "font-size": "16px"
      },
      attrs: {
        type: "button",
        title: "Ajouter un bien"
      },
      on: {
        click: function click($event) {
          return _vm.addMore("actionnariats");
        }
      }
    }, [_c("plus-icon", {
      staticClass: "custom-class",
      attrs: {
        size: "21"
      }
    })], 1)]) : _c("td", [_c("button", {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: index != 0,
        expression: "index != 0"
      }],
      staticStyle: {
        "background-color": "transparent",
        border: "none"
      },
      attrs: {
        type: "button",
        title: "Supprimer"
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
  }), _vm._v(" "), _c("tr", [_c("td", [_vm._v("\n                                                        Total\n                                                    ")]), _vm._v(" "), _c("td", [_c("currency-input", {
    attrs: {
      percentage: "",
      max: 100,
      value: _vm.formDataToBeWatched.total_part,
      id: "total_part",
      "float": "",
      disabled: ""
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1)])], 2)])])])]) : _c("div", {
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
      id: "actionnariat"
    }
  }, [_vm._v("\n                                        Actionnariat\n                                        "), _c("chevron-down-icon", {
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
      id: "bilan-certifié"
    }
  }, [_vm._v("\n                                        Bilan certifié\n                                        "), _c("chevron-up-icon", {
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
    staticClass: "table-responsive",
    attrs: {
      id: "autres_besoins"
    }
  }, [_c("div", {
    staticClass: "d-flex"
  }, [_vm._m(31), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_c("div", {
    staticClass: "d-flex justify-content-end"
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
      checked: _vm.formDataToBeWatched.bilan_certifie == "Oui"
    },
    on: {
      change: function change($event) {
        return _vm.checkboxValCashCall($event, "bilan_certifie");
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
      checked: _vm.formDataToBeWatched.bilan_certifie == "Non"
    },
    on: {
      change: function change($event) {
        return _vm.checkboxValCashCall($event, "bilan_certifie");
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "text-nowrap",
    attrs: {
      "for": "non"
    }
  }, [_vm._v(" Non")])])])])]), _vm._v(" "), _c("hr"), _vm._v(" "), _vm.formDataToBeWatched.bilan_certifie == "Oui" ? _c("table", {
    staticClass: "table table-borderless mt-2"
  }, [_c("tbody", [_c("tr", [_vm._m(32), _vm._v(" "), _c("td", [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.nom_cabinet_comptable,
      expression: "formDataToBeWatched.nom_cabinet_comptable"
    }],
    staticClass: "form-control",
    attrs: {
      required: "",
      type: "text",
      id: "nom_cabinet_comptable"
    },
    domProps: {
      value: _vm.formDataToBeWatched.nom_cabinet_comptable
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formDataToBeWatched, "nom_cabinet_comptable", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c("tr", [_vm._m(33), _vm._v(" "), _c("td", [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.nom_commissaire_aux_comptes,
      expression: "formDataToBeWatched.nom_commissaire_aux_comptes"
    }],
    staticClass: "form-control",
    attrs: {
      required: "",
      type: "text",
      id: "nom_commissaire_aux_comptes"
    },
    domProps: {
      value: _vm.formDataToBeWatched.nom_commissaire_aux_comptes
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formDataToBeWatched, "nom_commissaire_aux_comptes", $event.target.value);
      }
    }
  })])])])]) : _vm._e()])])]) : _c("div", {
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
      id: "bilan-certifié"
    }
  }, [_vm._v("\n                                        Bilan certifié\n                                        "), _c("chevron-down-icon", {
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
      id: "bilan-certifié"
    }
  }, [_vm._v("\n                                        Crédit syndiqué\n                                        "), _c("chevron-up-icon", {
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
    staticClass: "table-responsive",
    attrs: {
      id: "autres_besoins"
    }
  }, [_c("div", {
    staticClass: "d-flex"
  }, [_vm._m(34), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_c("div", {
    staticClass: "d-flex justify-content-end"
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
      id: "oui" + 2
    },
    domProps: {
      checked: _vm.formDataToBeWatched.credit_syndique == "Oui"
    },
    on: {
      change: function change($event) {
        return _vm.checkboxValCashCall($event, "credit_syndique");
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "text-nowrap",
    attrs: {
      "for": "oui" + 2
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
      id: "non" + 2
    },
    domProps: {
      checked: _vm.formDataToBeWatched.credit_syndique == "Non"
    },
    on: {
      change: function change($event) {
        return _vm.checkboxValCashCall($event, "credit_syndique");
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "text-nowrap",
    attrs: {
      "for": "non" + 2
    }
  }, [_vm._v(" Non")])])])])]), _vm._v(" "), _c("hr"), _vm._v(" "), _vm.formDataToBeWatched.credit_syndique == "Oui" ? _c("table", {
    staticClass: "table table-borderless mt-2"
  }, [_c("tbody", [_c("tr", [_c("td", [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": ""
    }
  }, [_c("b", [_vm._v(_vm._s((_vm$caf_recorded_file = _vm.caf_recorded_file) === null || _vm$caf_recorded_file === void 0 ? void 0 : _vm$caf_recorded_file.filiale) + " est-il le chef de file ?")]), _c("span", {
    staticStyle: {
      color: "red"
    }
  })])]), _vm._v(" "), _c("td", [_c("div", {
    staticClass: "d-flex justify-content-end"
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
      id: "oui" + 3
    },
    domProps: {
      checked: _vm.formDataToBeWatched.cheffe_file == "Oui"
    },
    on: {
      change: function change($event) {
        return _vm.checkboxValCashCall($event, "cheffe_file");
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "text-nowrap",
    attrs: {
      "for": "oui" + 3
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
      id: "non" + 3
    },
    domProps: {
      checked: _vm.formDataToBeWatched.cheffe_file == "Non"
    },
    on: {
      change: function change($event) {
        return _vm.checkboxValCashCall($event, "cheffe_file");
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "text-nowrap",
    attrs: {
      "for": "non" + 3
    }
  }, [_vm._v(" Non")])])])])])])]) : _vm._e()])])]) : _c("div", {
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
      id: "bilan-certifié"
    }
  }, [_vm._v("\n                                        Crédit syndiqué\n                                        "), _c("chevron-down-icon", {
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
      id: "questions-supplementaires"
    }
  }, [_vm._v("\n                                        Commentaires\n                                        "), _c("chevron-up-icon", {
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
    staticClass: "col-md-12 mb-4"
  }, [_vm._m(35), _vm._v(" "), _c("vue-editor", {
    attrs: {
      maximum: 500,
      id: "commentaires"
    },
    on: {
      "update-value": function updateValue($event) {
        _vm.formDataToBeWatched[$event[0]] = $event[1];
      }
    },
    model: {
      value: _vm.formDataToBeWatched.commentaires,
      callback: function callback($$v) {
        _vm.$set(_vm.formDataToBeWatched, "commentaires", $$v);
      },
      expression: "formDataToBeWatched.commentaires"
    }
  })], 1)])]) : _c("div", {
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
      id: "commentaires"
    }
  }, [_vm._v("\n                                        Commentaires\n                                        "), _c("chevron-down-icon", {
    staticClass: "custom-class",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    },
    attrs: {
      size: "21"
    }
  })], 1)])])])], 2)]), _vm._v(" "), _c("div", {
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
  }, [_vm._v("\n                    Fermer le tableau\n                ")])])]) : _c("div", {
    staticClass: "card card-width-height"
  }, [_c("br"), _vm._v(" "), _c("div", {
    staticClass: "card-header hdc pb-0 pt-2"
  }, [_c("h6", {
    staticClass: "head",
    attrs: {
      id: "f0-head"
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col"
  }, [_vm._v("\n                            " + _vm._s(_vm.tb_display_name) + " : Fiche signalétique\n                        ")]), _vm._v(" "), _c("div", {
    staticClass: "col-auto"
  }, [((_vm$formDataToBeWatch1 = _vm.formDataToBeWatched.notes) === null || _vm$formDataToBeWatch1 === void 0 ? void 0 : _vm$formDataToBeWatch1.length) > 0 ? _c("div", {
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
    staticClass: "custom-class",
    staticStyle: {
      cursor: "pointer"
    },
    attrs: {
      size: "0.7x"
    },
    on: {
      click: function click($event) {
        return _vm.$modal.show("fiche_signaletique");
      }
    }
  }), _vm._v(" "), _c("chevron-down-icon", {
    staticClass: "custom-class",
    staticStyle: {
      cursor: "pointer"
    },
    attrs: {
      size: "0.7x"
    },
    on: {
      click: function click($event) {
        return _vm.retract();
      }
    }
  })], 1)])])])])], 1), _vm._v(" "), _c("ketri-modal", {
    attrs: {
      name: "fiche_signaletique",
      images: ["/images/capture_afg/exemples/fiche_signaletique.png"]
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
  return _c("thead", [_c("tr", [_c("th", {
    staticClass: "text-center"
  }, [_c("label", {
    attrs: {
      "for": "type_demande"
    }
  }, [_c("b", [_vm._v("TYPE DE DEMANDE "), _c("span", {
    staticStyle: {
      color: "red"
    }
  }, [_vm._v("*")])])])]), _vm._v(" "), _c("th", {
    staticClass: "text-center"
  }, [_c("label", {
    attrs: {
      "for": "type_clientele"
    }
  }, [_c("b", [_vm._v("TYPE DE CLIENTELE "), _c("span", {
    staticStyle: {
      color: "red"
    }
  }, [_vm._v("*")])])])])])]);
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
      colspan: "4",
      scope: "row"
    }
  }, [_vm._v("\n                                            SECTION\n                                        ")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "col-md-8"
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": ""
    }
  }, [_vm._v("\n                                                    L'entreprise détient-elle des états financiers ? "), _c("span", {
    staticStyle: {
      color: "red"
    }
  }, [_vm._v("*")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "col-md-6"
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": ""
    }
  }, [_vm._v("\n                                                    L'entreprise a t-elle été notée sur le SNI (Système de Notation Interne) ? "), _c("span", {
    staticStyle: {
      color: "red"
    }
  }, [_vm._v("*")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "secteur_activite"
    }
  }, [_vm._v("\n                                    Secteur d'activité"), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "groupe_activite"
    }
  }, [_vm._v("\n                                    Groupe d'activité"), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label",
    attrs: {
      "for": ""
    }
  }, [_vm._v("\n                                    Nouvelle relation "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label",
    attrs: {
      "for": ""
    }
  }, [_vm._v("\n                                    Groupe "), _c("span", {
    staticStyle: {
      color: "red"
    }
  }, [_vm._v("*")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label",
    attrs: {
      "for": ""
    }
  }, [_vm._v("\n                                    Nom de groupe "), _c("span", {
    staticStyle: {
      color: "red"
    }
  }, [_vm._v("*")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label",
    attrs: {
      "for": ""
    }
  }, [_vm._v("\n                                    Montant de l'exposition  sur le groupe "), _c("span", {
    staticStyle: {
      color: "red"
    }
  }, [_vm._v("*")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label",
    attrs: {
      "for": ""
    }
  }, [_vm._v("\n                                    Consentement BIC "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label",
    attrs: {
      "for": ""
    }
  }, [_vm._v("\n                                    Côté en bourse "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "date_creation"
    }
  }, [_vm._v("Date de création "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "date_entre_relation"
    }
  }, [_vm._v("Date d'entré en relation"), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "note_edane"
    }
  }, [_vm._v("Notation(*)/Cotation"), _c("span", {
    staticStyle: {
      color: "red"
    }
  }, [_vm._v("*")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "classe_risque"
    }
  }, [_vm._v("Classification "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "pays"
    }
  }, [_vm._v("Pays "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "agence"
    }
  }, [_vm._v("Agence "), _c("small", [_vm._v("(Origination du dossier)")]), _vm._v(" "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "agence"
    }
  }, [_vm._v("Agence "), _c("small", [_vm._v("(Domiciliation)")]), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "filiale"
    }
  }, [_vm._v("Filiale "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "caf"
    }
  }, [_vm._v("Chargé d'affaire"), _c("span", {
    staticClass: "periodicite"
  }), _vm._v(" "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "contact_client"
    }
  }, [_vm._v("Contact du client"), _c("span", {
    staticClass: "periodicite"
  }), _vm._v(" "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "email_client"
    }
  }, [_vm._v("E-mail du client "), _c("span", {
    staticClass: "periodicite"
  }), _vm._v(" "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "annee_referentielle"
    }
  }, [_vm._v("Année de reférence (date de dernier\n                                    état financier)"), _c("span", {
    staticClass: "periodicite"
  }), _vm._v(" "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "text-nowrap",
    attrs: {
      "for": "date_reception_demande_client"
    }
  }, [_vm._v("Date de réception de la demande client "), _c("span", {
    staticStyle: {
      color: "red"
    }
  }, [_vm._v("*")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "compte_courant"
    }
  }, [_vm._v("\n                                    N° compte courant "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "date_ouverture"
    }
  }, [_vm._v("Date d'ouverture "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "adresse"
    }
  }, [_vm._v("Adresse/Siege social "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "principal_actionnaire"
    }
  }, [_vm._v("Principal actionnaire"), _c("span", {
    staticClass: "periodicite"
  }), _vm._v(" "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "principal_dirigeant"
    }
  }, [_vm._v("Principal dirigeant"), _c("span", {
    staticClass: "periodicite"
  }), _vm._v(" "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("td", [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("\n                                                            Nom et prénoms / Dénomination sociale ")])]), _vm._v(" "), _c("td", [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(" % de Participation")])])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "col-md-6"
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": ""
    }
  }, [_c("b", [_vm._v("Bilan certifié ? ")]), _c("span", {
    staticClass: "text-danger"
  })])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": ""
    }
  }, [_c("b", [_vm._v("Nom du cabinet comptable")]), _c("span", {
    staticStyle: {
      color: "red"
    }
  })])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "nom_commissaire_aux_comptes"
    }
  }, [_c("b", [_vm._v("Nom du commissaire aux comptes")]), _c("span", {
    staticStyle: {
      color: "red"
    }
  })])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "col-md-6"
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": ""
    }
  }, [_c("b", [_vm._v("Ce crédit est-il syndiqué ? ")]), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v("*")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", [_c("b", [_vm._v("Commentaires")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/memorandum/F0.vue?vue&type=style&index=0&id=0408e33a&lang=css&scoped=true":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/memorandum/F0.vue?vue&type=style&index=0&id=0408e33a&lang=css&scoped=true ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\ninput[data-v-0408e33a] {\r\n    /*border: 1px solid red;*/\n}\n*[data-v-0408e33a] {\r\n\r\n    font-family: \"Google sans\";\n}\nlabel[data-v-0408e33a] {\r\n    height: 10px;\r\n    font-size: 13px;\n}\ninput[data-v-0408e33a],\r\nselect[data-v-0408e33a] {\r\n    height: 35px;\r\n    border-color: #34495e;\r\n    color: #57606f;\r\n    font-size: 13px;\r\n    font-weight: bold;\n}\n.card-width-height[data-v-0408e33a] {\r\n    width: 100%;\r\n    height: 100%;\n}\n.head[data-v-0408e33a] {\r\n    color: #f1f2f6;\r\n    font-size: 22px;\n}\n.hdc[data-v-0408e33a] {\r\n    background-color: #57606f;\n}\r\n\r\n\r\n/* .relook-header {\r\n    color: #fff;\r\n    background-color: #7f8c8d;\r\n    padding: 5px;\r\n    border: none;\r\n} */\n.relook-header[data-v-0408e33a] {\r\n    color: #000;\r\n    background-color: #f4f3f3;\r\n    padding: 2px;\r\n    border-bottom: 1px solid #b6b8bb;\n}\r\n\r\n\r\n/* Ajouter note */\n.badge-sm[data-v-0408e33a] {\r\n    display: inline-block;\r\n    width: 15px;\r\n    height: 15px;\r\n    background: rgba(255, 0, 0, 0.882);\r\n    color: white;\r\n    font-size: 12px;\r\n    font-weight: 500;\r\n    border-radius: 100%;\r\n    position: absolute;\r\n    top: -20%;\r\n    left: 55%;\r\n    text-align: center;\n}\ninput[type=checkbox][data-v-0408e33a] {\r\n    /* Double-sized Checkboxes */\r\n    /* IE */\r\n    /* FF */\r\n    /* Safari and Chrome */\r\n    /* Opera */\r\n    transform: scale(2);\r\n    padding: 10px;\n}\ninput[type=checkbox].form-check-input[data-v-0408e33a] {\r\n    /* IE */\r\n    /* FF */\r\n    /* Safari and Chrome */\r\n    /* Opera */\r\n    transform: scale(1);\r\n    padding: 0px;\n}\r\n\r\n/* Might want to wrap a span around your checkbox text */\n.checkboxtext[data-v-0408e33a] {\r\n    /* Checkbox text */\r\n    font-size: 110%;\r\n    display: inline;\n}\n[data-v-0408e33a]::-webkit-calendar-picker-indicator {}\n#secteur_activite[data-v-0408e33a] {\r\n    background: #00ffff21;\r\n    color: #000;\n}\r\n\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/memorandum/F0.vue?vue&type=style&index=0&id=0408e33a&lang=css&scoped=true":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/memorandum/F0.vue?vue&type=style&index=0&id=0408e33a&lang=css&scoped=true ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_F0_vue_vue_type_style_index_0_id_0408e33a_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./F0.vue?vue&type=style&index=0&id=0408e33a&lang=css&scoped=true */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/memorandum/F0.vue?vue&type=style&index=0&id=0408e33a&lang=css&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_F0_vue_vue_type_style_index_0_id_0408e33a_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_F0_vue_vue_type_style_index_0_id_0408e33a_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/forms/afg/memorandum/F0.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/forms/afg/memorandum/F0.vue ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _F0_vue_vue_type_template_id_0408e33a_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./F0.vue?vue&type=template&id=0408e33a&scoped=true */ "./resources/js/components/forms/afg/memorandum/F0.vue?vue&type=template&id=0408e33a&scoped=true");
/* harmony import */ var _F0_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./F0.vue?vue&type=script&lang=js */ "./resources/js/components/forms/afg/memorandum/F0.vue?vue&type=script&lang=js");
/* harmony import */ var _F0_vue_vue_type_style_index_0_id_0408e33a_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./F0.vue?vue&type=style&index=0&id=0408e33a&lang=css&scoped=true */ "./resources/js/components/forms/afg/memorandum/F0.vue?vue&type=style&index=0&id=0408e33a&lang=css&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _F0_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _F0_vue_vue_type_template_id_0408e33a_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _F0_vue_vue_type_template_id_0408e33a_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "0408e33a",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/forms/afg/memorandum/F0.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/forms/afg/memorandum/F0.vue?vue&type=script&lang=js":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/forms/afg/memorandum/F0.vue?vue&type=script&lang=js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_F0_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./F0.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/memorandum/F0.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_F0_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/forms/afg/memorandum/F0.vue?vue&type=style&index=0&id=0408e33a&lang=css&scoped=true":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/components/forms/afg/memorandum/F0.vue?vue&type=style&index=0&id=0408e33a&lang=css&scoped=true ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_F0_vue_vue_type_style_index_0_id_0408e33a_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./F0.vue?vue&type=style&index=0&id=0408e33a&lang=css&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/memorandum/F0.vue?vue&type=style&index=0&id=0408e33a&lang=css&scoped=true");


/***/ }),

/***/ "./resources/js/components/forms/afg/memorandum/F0.vue?vue&type=template&id=0408e33a&scoped=true":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/forms/afg/memorandum/F0.vue?vue&type=template&id=0408e33a&scoped=true ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_F0_vue_vue_type_template_id_0408e33a_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_F0_vue_vue_type_template_id_0408e33a_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_F0_vue_vue_type_template_id_0408e33a_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./F0.vue?vue&type=template&id=0408e33a&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/memorandum/F0.vue?vue&type=template&id=0408e33a&scoped=true");


/***/ })

}]);