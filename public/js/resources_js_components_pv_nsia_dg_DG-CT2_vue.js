"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_pv_nsia_dg_DG-CT2_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pv/nsia/dg/DG-CT2.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pv/nsia/dg/DG-CT2.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************************/
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
/* harmony import */ var _services_nsia_f8_data_extractor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/nsia/f8-data-extractor */ "./resources/js/services/nsia/f8-data-extractor.js");
/* harmony import */ var _services_nsia_f8_constants_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../services/nsia/f8-constants.js */ "./resources/js/services/nsia/f8-constants.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/format/index.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return r; }; var t, r = {}, e = Object.prototype, n = e.hasOwnProperty, o = "function" == typeof Symbol ? Symbol : {}, i = o.iterator || "@@iterator", a = o.asyncIterator || "@@asyncIterator", u = o.toStringTag || "@@toStringTag"; function c(t, r, e, n) { Object.defineProperty(t, r, { value: e, enumerable: !n, configurable: !n, writable: !n }); } try { c({}, ""); } catch (t) { c = function c(t, r, e) { return t[r] = e; }; } function h(r, e, n, o) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype); return c(a, "_invoke", function (r, e, n) { var o = 1; return function (i, a) { if (3 === o) throw Error("Generator is already running"); if (4 === o) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var u = n.delegate; if (u) { var c = d(u, n); if (c) { if (c === f) continue; return c; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (1 === o) throw o = 4, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = 3; var h = s(r, e, n); if ("normal" === h.type) { if (o = n.done ? 4 : 2, h.arg === f) continue; return { value: h.arg, done: n.done }; } "throw" === h.type && (o = 4, n.method = "throw", n.arg = h.arg); } }; }(r, n, new Context(o || [])), !0), a; } function s(t, r, e) { try { return { type: "normal", arg: t.call(r, e) }; } catch (t) { return { type: "throw", arg: t }; } } r.wrap = h; var f = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var l = {}; c(l, i, function () { return this; }); var p = Object.getPrototypeOf, y = p && p(p(x([]))); y && y !== e && n.call(y, i) && (l = y); var v = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(l); function g(t) { ["next", "throw", "return"].forEach(function (r) { c(t, r, function (t) { return this._invoke(r, t); }); }); } function AsyncIterator(t, r) { function e(o, i, a, u) { var c = s(t[o], t, i); if ("throw" !== c.type) { var h = c.arg, f = h.value; return f && "object" == _typeof(f) && n.call(f, "__await") ? r.resolve(f.__await).then(function (t) { e("next", t, a, u); }, function (t) { e("throw", t, a, u); }) : r.resolve(f).then(function (t) { h.value = t, a(h); }, function (t) { return e("throw", t, a, u); }); } u(c.arg); } var o; c(this, "_invoke", function (t, n) { function i() { return new r(function (r, o) { e(t, n, r, o); }); } return o = o ? o.then(i, i) : i(); }, !0); } function d(r, e) { var n = e.method, o = r.i[n]; if (o === t) return e.delegate = null, "throw" === n && r.i["return"] && (e.method = "return", e.arg = t, d(r, e), "throw" === e.method) || "return" !== n && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + n + "' method")), f; var i = s(o, r.i, e.arg); if ("throw" === i.type) return e.method = "throw", e.arg = i.arg, e.delegate = null, f; var a = i.arg; return a ? a.done ? (e[r.r] = a.value, e.next = r.n, "return" !== e.method && (e.method = "next", e.arg = t), e.delegate = null, f) : a : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f); } function w(t) { this.tryEntries.push(t); } function m(r) { var e = r[4] || {}; e.type = "normal", e.arg = t, r[4] = e; } function Context(t) { this.tryEntries = [[-1]], t.forEach(w, this), this.reset(!0); } function x(r) { if (null != r) { var e = r[i]; if (e) return e.call(r); if ("function" == typeof r.next) return r; if (!isNaN(r.length)) { var o = -1, a = function e() { for (; ++o < r.length;) if (n.call(r, o)) return e.value = r[o], e.done = !1, e; return e.value = t, e.done = !0, e; }; return a.next = a; } } throw new TypeError(_typeof(r) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, c(v, "constructor", GeneratorFunctionPrototype), c(GeneratorFunctionPrototype, "constructor", GeneratorFunction), c(GeneratorFunctionPrototype, u, GeneratorFunction.displayName = "GeneratorFunction"), r.isGeneratorFunction = function (t) { var r = "function" == typeof t && t.constructor; return !!r && (r === GeneratorFunction || "GeneratorFunction" === (r.displayName || r.name)); }, r.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, c(t, u, "GeneratorFunction")), t.prototype = Object.create(v), t; }, r.awrap = function (t) { return { __await: t }; }, g(AsyncIterator.prototype), c(AsyncIterator.prototype, a, function () { return this; }), r.AsyncIterator = AsyncIterator, r.async = function (t, e, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(h(t, e, n, o), i); return r.isGeneratorFunction(e) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, g(v), c(v, u, "Generator"), c(v, i, function () { return this; }), c(v, "toString", function () { return "[object Generator]"; }), r.keys = function (t) { var r = Object(t), e = []; for (var n in r) e.unshift(n); return function t() { for (; e.length;) if ((n = e.pop()) in r) return t.value = n, t.done = !1, t; return t.done = !0, t; }; }, r.values = x, Context.prototype = { constructor: Context, reset: function reset(r) { if (this.prev = this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(m), !r) for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0][4]; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(r) { if (this.done) throw r; var e = this; function n(t) { a.type = "throw", a.arg = r, e.next = t; } for (var o = e.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i[4], u = this.prev, c = i[1], h = i[2]; if (-1 === i[0]) return n("end"), !1; if (!c && !h) throw Error("try statement without catch or finally"); if (null != i[0] && i[0] <= u) { if (u < c) return this.method = "next", this.arg = t, n(c), !0; if (u < h) return n(h), !1; } } }, abrupt: function abrupt(t, r) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var n = this.tryEntries[e]; if (n[0] > -1 && n[0] <= this.prev && this.prev < n[2]) { var o = n; break; } } o && ("break" === t || "continue" === t) && o[0] <= r && r <= o[2] && (o = null); var i = o ? o[4] : {}; return i.type = t, i.arg = r, o ? (this.method = "next", this.next = o[2], f) : this.complete(i); }, complete: function complete(t, r) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), f; }, finish: function finish(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[2] === t) return this.complete(e[4], e[3]), m(e), f; } }, "catch": function _catch(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[0] === t) { var n = e[4]; if ("throw" === n.type) { var o = n.arg; m(e); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(r, e, n) { return this.delegate = { i: x(r), r: e, n: n }, "next" === this.method && (this.arg = t), f; } }, r; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }




// import { BookOpenIcon } from "vue-feather-icons";



// import connects from "../../../../services/connects.service";
// import Multiselect from "@vueform/multiselect/dist/multiselect.vue2";
// import helper from "../../../../helpers/helper";
// import Multiselect from "@vueform/multiselect/dist/multiselect.vue2";
// import ST1 from "../../../shared/widgets/subtable/ST1.vue";



window.$ = window.jQuery = __webpack_require__(/*! jquery/dist/jquery */ "./node_modules/jquery/dist/jquery.js");
var NOW = new Date();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "DG-CT2",
  display: "DG-CT2",
  components: {
    PlusIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_7__.PlusIcon,
    TrashIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_7__.TrashIcon,
    MoreVerticalIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_7__.MoreVerticalIcon,
    ChevronUpIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_7__.ChevronUpIcon,
    ChevronDownIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_7__.ChevronDownIcon,
    ContextMenu: _shared_ContextMenu__WEBPACK_IMPORTED_MODULE_0__["default"],
    ContextMenuItem: _shared_ContextMenuItem__WEBPACK_IMPORTED_MODULE_1__["default"],
    AirplayIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_7__.AirplayIcon
  },
  props: {
    meta_data: Object,
    tb_name: String,
    tb_display_name: String
  },
  created: function created() {},
  mounted: function mounted() {
    var _this$meta_data$dossi,
      _this$meta_data$dossi2,
      _this$meta_data$dossi3,
      _this$meta_data$dossi4,
      _this = this,
      _this$meta_data$dossi5;
    var applied_templ_name = (_this$meta_data$dossi = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi === void 0 ? void 0 : _this$meta_data$dossi.applied_templ_name;
    var tbArrays = this.determineCredPubTables(applied_templ_name);
    this.f8Data = this.f8DataExtractor.getData(this.meta_data['dossier_credit'], tbArrays[2]);
    this.credpub00 = tbArrays[0];
    this.credpub_8 = tbArrays[2];
    this.ncc = (_this$meta_data$dossi2 = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi2 === void 0 || (_this$meta_data$dossi2 = _this$meta_data$dossi2[this.credpub00]) === null || _this$meta_data$dossi2 === void 0 ? void 0 : _this$meta_data$dossi2.compte_contribuable;
    this.annee_referentielle = (_this$meta_data$dossi3 = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi3 === void 0 || (_this$meta_data$dossi3 = _this$meta_data$dossi3[this.credpub00]) === null || _this$meta_data$dossi3 === void 0 ? void 0 : _this$meta_data$dossi3.annee_referentielle;
    this.tableClosedOrOpened();
    this.loadRetrieved();
    // this.loadCommentaire()
    this.loadTbAttrs();
    this.setAllDefaultFieldsRecByEnr();
    //this.setRates(this.meta_data['dossier_credit'][this.credpub_8]);
    (_this$meta_data$dossi4 = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi4 === void 0 || (_this$meta_data$dossi4 = _this$meta_data$dossi4.caract_inter_pret_bank) === null || _this$meta_data$dossi4 === void 0 || _this$meta_data$dossi4.filter(function (elm) {
      if (elm.role_sigle == "DR_RSE") {
        var _elm$lignes;
        (_elm$lignes = elm.lignes) === null || _elm$lignes === void 0 || (_elm$lignes = _elm$lignes.lignes_par_caisse) === null || _elm$lignes === void 0 || _elm$lignes.filter(function (vars) {
          var _vars$montant_ligne;
          _this.accorde.push(vars.montant_ligne);
          _this.total_accorde += parseInt((_vars$montant_ligne = vars.montant_ligne) === null || _vars$montant_ligne === void 0 ? void 0 : _vars$montant_ligne.toString().replace(/\s/g, ""));
        });
      }
    });
    (_this$meta_data$dossi5 = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi5 === void 0 || (_this$meta_data$dossi5 = _this$meta_data$dossi5.caract_inter_pret_bank) === null || _this$meta_data$dossi5 === void 0 || _this$meta_data$dossi5.filter(function (elm) {
      if (elm.role_sigle == "DR_RSE") {
        var _elm$lignes2;
        (_elm$lignes2 = elm.lignes) === null || _elm$lignes2 === void 0 || (_elm$lignes2 = _elm$lignes2.lignes_par_caisse) === null || _elm$lignes2 === void 0 || _elm$lignes2.filter(function (vars) {
          var _vars$montant_ligne2;
          _this.initial.push(vars.montant_ligne_demande);
          _this.total_initial += parseInt((_vars$montant_ligne2 = vars.montant_ligne) === null || _vars$montant_ligne2 === void 0 ? void 0 : _vars$montant_ligne2.toString().replace(/\s/g, ""));
        });
      }
    });
    EventBus.$on("ST1-content", function (data) {
      _this.getSt1Content(data);
    });
    EventBus.$on("montant-credit-updated", function (data) {});
  },
  computed: {
    totalEngagementGlobal: function totalEngagementGlobal() {
      var trying = this.engagement_globales.map(function (el) {
        el.montant_engagement_globale = String(el.montant_engagement_globale).replace(/\s+/g, "");
        if (!el.montant_engagement_globale) return 0;
        return Number(el.montant_engagement_globale);
      }).reduce(function (sum, curr) {
        return sum + curr;
      }, 0);
      return trying.toLocaleString("fr-FR");
    },
    souscriptionValue: function souscriptionValue() {
      var _this$meta_data$dossi6, _this$meta_data$dossi7;
      var res = 0;
      var dure = Number((_this$meta_data$dossi6 = this.meta_data.dossier_credit) === null || _this$meta_data$dossi6 === void 0 || (_this$meta_data$dossi6 = _this$meta_data$dossi6.cred_pub_tb_00) === null || _this$meta_data$dossi6 === void 0 ? void 0 : _this$meta_data$dossi6.duree_credit) || 0;
      var mode = (_this$meta_data$dossi7 = this.meta_data.dossier_credit) === null || _this$meta_data$dossi7 === void 0 || (_this$meta_data$dossi7 = _this$meta_data$dossi7.cred_pub_tb_1) === null || _this$meta_data$dossi7 === void 0 || (_this$meta_data$dossi7 = _this$meta_data$dossi7.mode_paiement) === null || _this$meta_data$dossi7 === void 0 ? void 0 : _this$meta_data$dossi7.toLowerCase();
      var diviseur = 1;
      if (mode === "mensuelle") {
        diviseur = 1;
        res = dure / diviseur;
      }
      if (mode === "bi-mensuel") {
        diviseur = 2;
        res = dure * diviseur;
      }
      if (mode === "trimestriel") {
        diviseur = 3;
        res = dure / diviseur;
      }
      if (mode === "semestriel") {
        diviseur = 6;
        res = dure / diviseur;
      }
      if (mode === "in fine") {
        diviseur = dure || 1;
        res = dure / diviseur;
      }
      return res;
    },
    engagement_value: function engagement_value() {
      return {
        label: "Engagement de domiciliation globale de ".concat(this.totalEngagementGlobal, "  FCFA"),
        nom: "engagement",
        total_montant_engagement_globale: this.totalEngagementGlobal
      };
    },
    nantissement_dat: function nantissement_dat() {
      return {
        label: "Nantissement DAT de ".concat(this.formDataToBeWatched.montant_dat, " FCFA  qui a pour r\xE9f\xE9rence ").concat(this.formDataToBeWatched.reference_dat),
        nom: "nantissement",
        montant_dat: this.formDataToBeWatched.montant_dat,
        reference_dat: this.formDataToBeWatched.reference_dat
      };
    },
    isAfterToday: function isAfterToday() {
      var _this$lignes_existant;
      var today = new Date().getTime();
      var elem = {
        existante: {},
        caution: {}
      };
      (_this$lignes_existant = this.lignes_existantes) === null || _this$lignes_existant === void 0 || _this$lignes_existant.forEach(function (el, index) {
        var cond = new Date(el.ligne_echeance).getTime() > today;
        if (cond) {
          elem.existante[index] = true;
        } else {
          elem.existante[index] = false;
        }
      });
      return elem;
    },
    isAllAuthorized: function isAllAuthorized() {
      return Object.values(this.isAuthorized).every(function (el) {
        return el === true;
      });
    }
  },
  data: function data() {
    var _formDataToBeWatched;
    var vm = this;
    return _defineProperty({
      INDICATOR: '•',
      f8Data: {},
      defaultSuretes: [],
      newSurete: "",
      // suretes_diverses: [],
      ebapisHost: _services_ebapis_service__WEBPACK_IMPORTED_MODULE_2__["default"].host,
      authcheck: false,
      authcheckUsr: null,
      authcheckStatus: null,
      dossier_credit: null,
      watchInPause: false,
      initLoad: true,
      seen: true,
      credits: [],
      annee_referentielle: 0,
      cautions: false,
      accorde: [],
      initial: [],
      total_accorde: 0,
      total_initial: 0,
      general_hypotheques: "",
      is_detained_caution_hypothecaires: "",
      listingNote: false,
      date: new Date().getFullYear(),
      f8DataExtractor: _services_nsia_f8_data_extractor__WEBPACK_IMPORTED_MODULE_5__["default"],
      f8Constants: _services_nsia_f8_constants_js__WEBPACK_IMPORTED_MODULE_6__["default"],
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
      formDataToBeWatched: (_formDataToBeWatched = {
        hypotheques: [],
        gages: [],
        caution_hypothecaires: [],
        cond_particulieres: [],
        total_hypotheques_valeur_marchande: "",
        total_hypotheques_valeur_considere: "",
        total_gages_valeur_marchande: "",
        total_gages_valeur_considere: "",
        notes: [],
        suretes_diverses: [],
        autres_suretes_diverses: [],
        cautionnement_solidaires: [],
        engagement_globales: "",
        total_montant_engagement_globale: 0,
        copie_cr2_precedente: "",
        copie_differentes_adressees_comite_credit: "",
        total_caisse_ligne_existante_encours: 0,
        total_lignes_sollicitees_n_1: 0,
        total_lignes_sollicitees_n_2: 0,
        total_lignes_sollicitees_n_3: 0,
        annee_referentielle: new Date().getFullYear()
      }, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_formDataToBeWatched, "notes", []), "st_signature_ligne_existantes_autorisation", ''), "st_signature_ligne_existantes_encours", ''), "total_lignes_existantes_autorisation", ""), "total_lignes_existantes_encours", ''), "nouvelles_lignes_caisse", ''), "st_caisse_nouvelles_lignes_montant", ''), "st_caisse_nouvelles_lignes_proposition", ''), "nouvelles_lignes_signature", ''), "st_signature_nouvelles_lignes_montant", ''), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_formDataToBeWatched, "st_signature_nouvelles_lignes_proposition", ''), "total_nouvelles_lignes_montant", ""), "total_nouvelles_lignes_proposition", ''), "encours_au", ""), "comment_old_line", ""), "comment_new_line", ""), "recommandations_suivies", ""), "nouvelles_lignes_caisse", []), "nouvelles_lignes_signature", []), "lignes_selectionnees", []), _defineProperty(_defineProperty(_defineProperty(_formDataToBeWatched, "oldSuretes", []), "liste_commentaire_denouement_lignes_existantes", {}), "load_ca_amount", false)),
      credpub_8: null,
      selected_path_type: "",
      lignes_existantes_engagements_signatures: [{
        banque: 'NSIA BANQUE',
        ligne: '',
        autorisation: 0,
        encours: 0,
        taux: '',
        duree: "",
        echeance: '',
        id: String(new Date().getTime() + Math.random() * 100)
      }],
      nv_lignes_caisse_1: [],
      nv_lignes_caisse_2: [],
      nv_lignes_signature_1: [],
      nv_lignes_signature_2: [],
      optionLines: [].concat(_toConsumableArray(_services_nsia_f8_constants_js__WEBPACK_IMPORTED_MODULE_6__["default"].tous_les_lignes), _toConsumableArray(_services_nsia_f8_constants_js__WEBPACK_IMPORTED_MODULE_6__["default"].lignes_engagements_signatures)),
      tous_les_lignes: [{
        libelle: 'Découvert'
      }, {
        libelle: 'Crédit de Campagne'
      }, {
        libelle: 'Avance sur marché'
      }, {
        libelle: 'Avance sur facture'
      }, {
        libelle: 'Escompte commerciale'
      }, {
        libelle: 'Escompte financier'
      }, {
        libelle: "Crédit d'investissement"
      }, {
        libelle: 'Crédit bail'
      }, {
        libelle: 'Crédit Court Terme'
      }, {
        libelle: 'Crédit Moyen Terme'
      }, {
        libelle: 'Crédit Long Terme'
      }, {
        libelle: 'Autres(Impayés)'
      }],
      tous_les_lignes_filtres: [{
        libelle: 'Découvert'
      }, {
        libelle: 'Crédit de Campagne'
      }, {
        libelle: 'Avance sur marché'
      }, {
        libelle: 'Avance sur facture'
      }, {
        libelle: 'Escompte commerciale'
      }, {
        libelle: 'Escompte financier'
      }, {
        libelle: "Crédit d'investissement"
      }, {
        libelle: 'Crédit bail'
      }, {
        libelle: 'Crédit Court Terme'
      }, {
        libelle: 'Crédit Moyen Terme'
      }, {
        libelle: 'Crédit Long Terme'
      }, {
        libelle: 'Autres(Impayés)'
      }],
      lignes_engagements_signatures: [{
        libelle: 'Caution de soumissission'
      }, {
        libelle: 'Caution de demarrage'
      }, {
        libelle: 'Caution provisoire'
      }, {
        libelle: 'Caution définitive'
      }, {
        libelle: 'Caution de bonne fin'
      }, {
        libelle: 'Caution de retenue de garantie'
      }, {
        libelle: "Caution d'admission temporaire"
      }, {
        libelle: 'Caution de garantie de paiement'
      }, {
        libelle: "Obligation Cautionnée"
      }, {
        libelle: 'Caution pour impôt contesté'
      }, {
        libelle: 'Aval de traites'
      }, {
        libelle: 'Credoc Irrévocable'
      }, {
        libelle: 'Credoc notifié'
      }, {
        libelle: 'Credoc confirmé'
      }, {
        libelle: 'Engagement de financement'
      }, {
        libelle: "LC's"
      }, {
        libelle: "SBLC"
      }, {
        libelle: "Autres"
      }],
      lignes_engagements_signatures_filtres: [{
        libelle: 'Caution de soumissission'
      }, {
        libelle: 'Caution de demarrage'
      }, {
        libelle: 'Caution provisoire'
      }, {
        libelle: 'Caution définitive'
      }, {
        libelle: 'Caution de bonne fin'
      }, {
        libelle: 'Caution de retenue de garantie'
      }, {
        libelle: "Caution d'admission temporaire"
      }, {
        libelle: 'Caution de garantie de paiement'
      }, {
        libelle: "Obligation Cautionnée"
      }, {
        libelle: 'Caution pour impôt contesté'
      }, {
        libelle: 'Aval de traites'
      }, {
        libelle: 'Credoc Irrévocable'
      }, {
        libelle: 'Credoc notifié'
      }, {
        libelle: 'Credoc confirmé'
      }, {
        libelle: 'Engagement de financement'
      }, {
        libelle: "LC's"
      }, {
        libelle: "SBLC"
      }, {
        libelle: "Autres"
      }],
      keys: ["hypotheques", 'gages', "cautionnement_solidaires", "cautionnement_solidaires_personnes_morales", "caution_hypothecaires", "protection_financieres", "cond_particulieres"],
      encours_au: date_fns__WEBPACK_IMPORTED_MODULE_8__["default"](NOW, 'yyyy-MM-dd'),
      ligneSelected: {},
      liste_commentaire_denouement_lignes_existantes: {},
      ncc: "",
      isLodingCa: false
    }, "annee_referentielle", "");
  },
  methods: {
    getRatiosByAPI: function getRatiosByAPI() {
      var _this2 = this;
      this.isLodingCa = true;
      if (Boolean(this.ncc)) {
        this.$axios({
          method: 'get',
          url: 'https://ebapis.com/basix/api/v3/public/ultimate-db/',
          params: {
            ncc: this.ncc,
            annee: "null",
            operation: "READ"
          }
        }).then(function (res) {
          var year = 0;
          var response = res === null || res === void 0 ? void 0 : res.data;
          for (var _i = 0, _Object$entries = Object.entries(response); _i < _Object$entries.length; _i++) {
            var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
              key = _Object$entries$_i[0],
              value = _Object$entries$_i[1];
            if (!['is_present', 'num_yrs'].includes(key)) {
              if (year <= key) {
                year = key;
              }
            }
          }
          if ((response === null || response === void 0 ? void 0 : response[year]) != undefined) {
            var _response$year;
            if (((_response$year = response[year]) === null || _response$year === void 0 ? void 0 : _response$year['XB']) != undefined) {
              var ca_ = parseFloat(response[year]['XB']);
              _this2.formDataToBeWatched.load_ca_amount = true;
              _this2.formDataToBeWatched.chiffre_affaires_n_3 = isNaN(ca_) ? 0 : ca_;
              _this2.handleInput();
            }
          }
          _this2.isLodingCa = false;
        })["catch"](function (e) {
          _this2.isLodingCa = false;
        });
      } else {
        this.isLodingCa = false;
      }
    },
    handleLignesExis: function handleLignesExis(obj, index, key) {
      if (obj == "lignes_existantes") {
        this.nv_lignes_caisse_1[index][key] = this[obj][index][key];
        this.nv_lignes_caisse_1[index]["id"] = String(new Date().getTime() + Math.random() * 100);
        this.nv_lignes_caisse_1[index]["incomming_ligne_id"] = this[obj][index]['id'];
        if (key == 'autorisation') {
          this.nv_lignes_caisse_1[index]['montant'] = this[obj][index][key];
          this.nv_lignes_caisse_1[index]['proposition'] = this[obj][index][key];
          this.computedTypeStatus('nv_lignes_caisse_1', index);
        }
      }
      if (obj == "lignes_existantes_engagements_signatures") {
        this.nv_lignes_signature_1[index][key] = this[obj][index][key];
        this.nv_lignes_signature_1[index]["id"] = String(new Date().getTime() + Math.random() * 100);
        this.nv_lignes_signature_1[index]["incomming_ligne_id"] = this[obj][index]['id'];
        if (key == 'autorisation') {
          this.nv_lignes_signature_1[index]['montant'] = this[obj][index][key];
          this.nv_lignes_signature_1[index]['proposition'] = this[obj][index][key];
          this.computedTypeStatus('nv_lignes_signature_1', index);
        }
      } else {
        this[obj][index][key] = this[obj][index][key];
        this[obj][index]["proposition"] = this[obj][index][key];
        // if(key == "montant"){
        // }
      }
      this.handleInput();
    },
    hasSuretes: function hasSuretes(ligne) {
      var _this3 = this;
      // console.log('ligne', ligne)
      // let b = {backgroundColor : "#deffff"}
      var b = {
        backgroundColor: "#ee6a00"
      };
      var res0 = [];
      var res = [];
      this.keys.forEach(function (key) {
        if (![undefined, "", null].includes(_this3.formDataToBeWatched[key])) {
          res = _this3.formDataToBeWatched[key].filter(function (el) {
            return el.parentId == ligne.id;
          });
          res0 = _this3.formDataToBeWatched[key].filter(function (el) {
            return el.parentId == ligne.incomming_ligne_id;
          });
          if (res.length > 0 || res0.length > 0) {
            b = {
              backgroundColor: "#27ae60"
            };
          }
        }
      });
      return b;
    },
    openModal: function openModal(modalName, ligneSelected, type) {
      var _this$formDataToBeWat;
      // console.log("ligneSelected", ligneSelected)
      var allLignes = [];
      var lignes_selectionnees = (_this$formDataToBeWat = this.formDataToBeWatched) === null || _this$formDataToBeWat === void 0 ? void 0 : _this$formDataToBeWat.lignes_selectionnees;
      console.log("lignes_selectionnees", lignes_selectionnees);
      if ((ligneSelected === null || ligneSelected === void 0 ? void 0 : ligneSelected.ligne.trim()) != '') {
        if (lignes_selectionnees.length > 0) {
          var _lignes_selectionnees;
          allLignes = (_lignes_selectionnees = lignes_selectionnees[0]) === null || _lignes_selectionnees === void 0 ? void 0 : _lignes_selectionnees.options;
        }
        if (lignes_selectionnees.length > 1) {
          var _lignes_selectionnees2;
          allLignes = (_lignes_selectionnees2 = lignes_selectionnees[1]) === null || _lignes_selectionnees2 === void 0 ? void 0 : _lignes_selectionnees2.options;
        }
        console.log("allLignes", allLignes);
        this.ligneSelected = allLignes.find(function (element) {
          return (element === null || element === void 0 ? void 0 : element.item0.trim()) == (ligneSelected === null || ligneSelected === void 0 ? void 0 : ligneSelected.ligne);
        });
        this.ligneSelected["id"] = ligneSelected === null || ligneSelected === void 0 ? void 0 : ligneSelected.id;
        this.ligneSelected["incomming_ligne_id"] = ligneSelected === null || ligneSelected === void 0 ? void 0 : ligneSelected.incomming_ligne_id;
        // console.log("lignes selected", this.ligneSelected)
        // console.log("lignes selected==>", ligneSelected)

        this.$modal.show('hypo_modal_dc');
        EventBus.$emit('updated-st-1-hypo', {
          ligneSelected: this.ligneSelected,
          lignes_selectionnees: lignes_selectionnees,
          tb_name: this.tb_name,
          meta_data: this.meta_data
        });
      } else {
        this.$toasted.show("Veuillez selectionner la ligne avant d'attacher les suretés ");
        return;
      }
    },
    checkCond: function checkCond(el, k, key) {
      var _el$state_, _el$state_2;
      var hypo = [];
      var a = true;
      if (["", null, undefined].includes(el === null || el === void 0 || (_el$state_ = el.state_) === null || _el$state_ === void 0 || (_el$state_ = _el$state_.has_speOr_spe) === null || _el$state_ === void 0 ? void 0 : _el$state_.trim())) {
        a = false;
        hypo.push(k);
        this.flag[key] = hypo;
      }
      if (["", null, undefined].includes(el === null || el === void 0 || (_el$state_2 = el.state_) === null || _el$state_2 === void 0 || (_el$state_2 = _el$state_2.is_detained) === null || _el$state_2 === void 0 ? void 0 : _el$state_2.trim())) {
        a = false;
        hypo.push(k);
        this.flag[key] = hypo;
        // this.flag.push({key: 'hypotheques', ligne: k, vars:"is_detained"})
      }
      return a;
    },
    closeModal: function closeModal(modalName) {
      var _this4 = this;
      var a = true;
      var keys = ["hypotheques", 'gages', "cautionnement_solidaires", "cautionnement_solidaires_personnes_morales", "caution_hypothecaires", "protection_financieres", "cond_particulieres"]; // all keys after
      this.flag = {};
      // this.formDataToBeWatched = this.meta_data?.dossier_credit?.cred_pub_tb_20501
      keys.forEach(function (key) {
        if (![[], undefined, '', null].includes(_this4.formDataToBeWatched[key])) {
          if (_this4.formDataToBeWatched[key].length > 0) {
            var _this4$formDataToBeWa;
            (_this4$formDataToBeWa = _this4.formDataToBeWatched) === null || _this4$formDataToBeWa === void 0 || _this4$formDataToBeWa[key].filter(function (el) {
              return el.parentId == _this4.ligneSelected.id;
            }).forEach(function (el, k) {
              if (key == "hypotheques") {
                var _el$bien_hypotheque;
                if ((el === null || el === void 0 || (_el$bien_hypotheque = el.bien_hypotheque) === null || _el$bien_hypotheque === void 0 ? void 0 : _el$bien_hypotheque.trim()) != '') {
                  a = _this4.checkCond(el, k, key);
                }
              } else if (key == "gages") {
                var _el$bien_a_gage;
                if ((el === null || el === void 0 || (_el$bien_a_gage = el.bien_a_gage) === null || _el$bien_a_gage === void 0 ? void 0 : _el$bien_a_gage.trim()) != '') {
                  a = _this4.checkCond(el, k, key);
                }
              } else if (key == "cautionnement_solidaires") {
                var _el$nom_prenoms;
                if ((el === null || el === void 0 || (_el$nom_prenoms = el.nom_prenoms) === null || _el$nom_prenoms === void 0 ? void 0 : _el$nom_prenoms.trim()) != '') {
                  a = _this4.checkCond(el, k, key);
                }
              } else if (key == "cautionnement_solidaires_personnes_morales") {
                var _el$denomination_soci;
                if ((el === null || el === void 0 || (_el$denomination_soci = el.denomination_sociale) === null || _el$denomination_soci === void 0 ? void 0 : _el$denomination_soci.trim()) != '') {
                  a = _this4.checkCond(el, k, key);
                }
              } else if (key == "caution_hypothecaires") {
                var _el$bien;
                if ((el === null || el === void 0 || (_el$bien = el.bien) === null || _el$bien === void 0 ? void 0 : _el$bien.trim()) != '') {
                  a = _this4.checkCond(el, k, key);
                }
              } else if (key == "protection_financieres") {
                var _el$garantie;
                if ((el === null || el === void 0 || (_el$garantie = el.garantie) === null || _el$garantie === void 0 ? void 0 : _el$garantie.trim()) != '') {
                  a = _this4.checkCond(el, k, key);
                }
              } else {
                var _el$cond_name;
                if ((el === null || el === void 0 || (_el$cond_name = el.cond_name) === null || _el$cond_name === void 0 ? void 0 : _el$cond_name.trim()) != '') {
                  a = _this4.checkCond(el, k, key);
                }
              }

              // second check
            });
          }
        }
      });
      if (a == true) {
        this.$modal.hide(modalName);
      } else {
        // console.log("falg", this.flag)
        EventBus.$emit("flag", this.flag);
        this.$toasted.show("Veuillez specifier si cette suretés est speficique ou générale, déténue ou non déténue");
      }
    },
    loadLigneSelected: function loadLigneSelected() {
      var lignes_selectionnees = [];
      var lignes_1 = [];
      var lignes_2 = [];
      var lignes_3 = [];
      var lignes_4 = [];
      if (this.nv_lignes_caisse_1.length > 0) {
        this.nv_lignes_caisse_1.forEach(function (element) {
          var _element$statut;
          if (!['', 'Abandon'].includes(element === null || element === void 0 || (_element$statut = element.statut) === null || _element$statut === void 0 ? void 0 : _element$statut.toString().trim())) {
            lignes_4.push({
              name: "Nouvelles lignes",
              type: "Banques",
              nature: "Caisse",
              item0: element.ligne,
              item: element.ligne + ' (Banques | Caisse)',
              id: element.id
            });
          }
        });
      }
      if (this.nv_lignes_signature_1.length > 0) {
        this.nv_lignes_signature_1.forEach(function (element) {
          var _element$statut2;
          if (!['', 'Abandon'].includes(element === null || element === void 0 || (_element$statut2 = element.statut) === null || _element$statut2 === void 0 ? void 0 : _element$statut2.toString().trim())) {
            lignes_4.push({
              name: "Nouvelles lignes",
              type: "Engagements",
              nature: "Signature",
              item0: element.ligne,
              item: element.ligne + ' (Engagements | Signature)',
              id: element.id
            });
          }
        });
      }
      if (this.nv_lignes_caisse_2.length > 0) {
        this.nv_lignes_caisse_2.forEach(function (element) {
          var _element$ligne;
          if ((element === null || element === void 0 || (_element$ligne = element.ligne) === null || _element$ligne === void 0 ? void 0 : _element$ligne.toString().trim()) != '') {
            lignes_4.push({
              name: "Nouvelles lignes",
              type: "Banques",
              nature: "Caisse",
              item0: element.ligne,
              item: element.ligne + ' (Banques | Caisse)',
              id: element.id
            });
          }
        });
      }
      if (this.nv_lignes_signature_2.length > 0) {
        this.nv_lignes_signature_2.forEach(function (element) {
          var _element$ligne2;
          if ((element === null || element === void 0 || (_element$ligne2 = element.ligne) === null || _element$ligne2 === void 0 ? void 0 : _element$ligne2.toString().trim()) != '') {
            lignes_4.push({
              name: "Nouvelles lignes",
              type: "Engagements",
              nature: "Signature",
              item0: element.ligne,
              item: element.ligne + ' (Engagements | Signature)',
              id: element.id
            });
          }
        });
      }
      if (lignes_3.length > 0) {
        lignes_selectionnees.push({
          name: 'Lignes existantes',
          options: lignes_3
        });
      }
      if (lignes_4.length > 0) {
        lignes_selectionnees.push({
          name: 'Nouvelles lignes',
          options: lignes_4
        });
      }
      this.formDataToBeWatched.lignes_selectionnees = lignes_selectionnees;
    },
    getSt1Content: function getSt1Content(event) {
      var _this$formDataToBeWat3, _this$formDataToBeWat4, _this$formDataToBeWat5, _this$formDataToBeWat8, _this$formDataToBeWat9, _this$formDataToBeWat0, _this$formDataToBeWat1;
      // console.log("event", event)
      this.formDataToBeWatched.hypotheques = [].concat(_toConsumableArray(this.formDataToBeWatched.hypotheques.filter(function (el) {
        return el.parentId != event.parentId;
      })), _toConsumableArray(event === null || event === void 0 ? void 0 : event.hypotheques));
      this.formDataToBeWatched.gages = [].concat(_toConsumableArray(this.formDataToBeWatched.gages.filter(function (el) {
        return el.parentId != event.parentId;
      })), _toConsumableArray(event === null || event === void 0 ? void 0 : event.gages));
      if (!["", undefined].includes(this.formDataToBeWatched.cautionnement_solidaires)) {
        var _this$formDataToBeWat2;
        this.formDataToBeWatched.cautionnement_solidaires = [].concat(_toConsumableArray((_this$formDataToBeWat2 = this.formDataToBeWatched.cautionnement_solidaires) === null || _this$formDataToBeWat2 === void 0 ? void 0 : _this$formDataToBeWat2.filter(function (el) {
          return el.parentId != event.parentId;
        })), _toConsumableArray(event === null || event === void 0 ? void 0 : event.cautionnement_solidaires));
      }
      this.formDataToBeWatched.cautionnement_solidaires_personnes_morales = [].concat(_toConsumableArray((_this$formDataToBeWat3 = this.formDataToBeWatched.cautionnement_solidaires_personnes_morales) === null || _this$formDataToBeWat3 === void 0 ? void 0 : _this$formDataToBeWat3.filter(function (el) {
        return el.parentId != event.parentId;
      })), _toConsumableArray(event === null || event === void 0 ? void 0 : event.cautionnement_solidaires_personnes_morales));
      this.formDataToBeWatched.caution_hypothecaires = [].concat(_toConsumableArray((_this$formDataToBeWat4 = this.formDataToBeWatched.caution_hypothecaires) === null || _this$formDataToBeWat4 === void 0 ? void 0 : _this$formDataToBeWat4.filter(function (el) {
        return el.parentId != event.parentId;
      })), _toConsumableArray(event === null || event === void 0 ? void 0 : event.caution_hypothecaires));
      this.formDataToBeWatched.protection_financieres = [].concat(_toConsumableArray((_this$formDataToBeWat5 = this.formDataToBeWatched.protection_financieres) === null || _this$formDataToBeWat5 === void 0 ? void 0 : _this$formDataToBeWat5.filter(function (el) {
        return el.parentId != event.parentId;
      })), _toConsumableArray(event === null || event === void 0 ? void 0 : event.protection_financieres));
      if (!["", undefined].includes(this.formDataToBeWatched.cond_particulieres)) {
        var _this$formDataToBeWat6;
        this.formDataToBeWatched.cond_particulieres = [].concat(_toConsumableArray((_this$formDataToBeWat6 = this.formDataToBeWatched.cond_particulieres) === null || _this$formDataToBeWat6 === void 0 ? void 0 : _this$formDataToBeWat6.filter(function (el) {
          return el.parentId != event.parentId;
        })), _toConsumableArray(event === null || event === void 0 ? void 0 : event.cond_particulieres));
      }
      if (!["", undefined].includes(this.formDataToBeWatched.engagement_globales)) {
        var _this$formDataToBeWat7;
        this.formDataToBeWatched.engagement_globales = [].concat(_toConsumableArray((_this$formDataToBeWat7 = this.formDataToBeWatched) === null || _this$formDataToBeWat7 === void 0 || (_this$formDataToBeWat7 = _this$formDataToBeWat7.engagement_globales) === null || _this$formDataToBeWat7 === void 0 ? void 0 : _this$formDataToBeWat7.filter(function (el) {
          return el.parentId != event.parentId;
        })), _toConsumableArray(event === null || event === void 0 ? void 0 : event.engagement_globales));
      } else {
        this.formDataToBeWatched.engagement_globales = _toConsumableArray(event === null || event === void 0 ? void 0 : event.engagement_globales);
      }
      this.formDataToBeWatched.suretes_diverses = [].concat(_toConsumableArray((_this$formDataToBeWat8 = this.formDataToBeWatched.suretes_diverses) === null || _this$formDataToBeWat8 === void 0 ? void 0 : _this$formDataToBeWat8.filter(function (el) {
        return el.parentId != event.parentId;
      })), _toConsumableArray(event === null || event === void 0 ? void 0 : event.suretes_diverses));
      this.formDataToBeWatched.autres_suretes_diverses = [].concat(_toConsumableArray((_this$formDataToBeWat9 = this.formDataToBeWatched.autres_suretes_diverses) === null || _this$formDataToBeWat9 === void 0 ? void 0 : _this$formDataToBeWat9.filter(function (el) {
        return el.parentId != event.parentId;
      })), _toConsumableArray(event === null || event === void 0 ? void 0 : event.autres_suretes_diverses));
      this.formDataToBeWatched.montant_dat = [].concat(_toConsumableArray((_this$formDataToBeWat0 = this.formDataToBeWatched.montant_dat) === null || _this$formDataToBeWat0 === void 0 ? void 0 : _this$formDataToBeWat0.filter(function (el) {
        return el.parentId != event.parentId;
      })), [event === null || event === void 0 ? void 0 : event.montant_dat]);
      this.formDataToBeWatched.reference_dat = [].concat(_toConsumableArray((_this$formDataToBeWat1 = this.formDataToBeWatched.reference_dat) === null || _this$formDataToBeWat1 === void 0 ? void 0 : _this$formDataToBeWat1.filter(function (el) {
        return el.parentId != event.parentId;
      })), [event === null || event === void 0 ? void 0 : event.reference_dat]);
    },
    addMore3: function addMore3() {
      this.nv_lignes_caisse_2.push({
        banque: 'NSIA BANQUE',
        ligne: '',
        statut: 'Nouveau',
        montant: 0,
        proposition: 0,
        encours: 0,
        duree: '',
        echeance: '',
        taux: '',
        id: String(new Date().getTime() + Math.random() * 100)
      });
    },
    remove3: function remove3(index) {
      this.nv_lignes_caisse_2.splice(index, 1);
      this.handleInput();
    },
    addMore4: function addMore4() {
      this.nv_lignes_signature_2.push({
        banque: 'NSIA BANQUE',
        ligne: '',
        montant: 0,
        proposition: 0,
        duree: '',
        echeance: '',
        taux: '',
        id: String(new Date().getTime() + Math.random() * 100)
      });
    },
    remove4: function remove4(index) {
      this.nv_lignes_signature_2.splice(index, 1);
      this.handleInput();
    },
    isAuthorized: function isAuthorized() {
      var _this5 = this;
      var elem = {
        existante: {},
        caution: {}
      };
      this.lignes_existantes.forEach(function (el, index) {
        var cond = _this5.localeStringToFloat(el.ligne_existante_autorisation) >= _this5.localeStringToFloat(el.ligne_encours);
        if (cond) {
          elem.existante[index] = true;
        } else {
          elem.existante[index] = false;
        }
      });
      // this.cautions_lignes_existantes.forEach((el, index) => {
      //     const cond = this.localeStringToFloat(el.caution_ligne_existante_autorisation) >= this.localeStringToFloat(el.caution_ligne_existante_encours)
      //     console.log(this.localeStringToFloat(el.caution_ligne_existante_autorisation), this.localeStringToFloat(el.caution_ligne_existante_encours), cond)
      //     if (cond) {
      //         elem.caution[index] = true
      //     } else {
      //         elem.caution[index] = false
      //     }
      // })
      return elem;
    },
    computedTypeStatus: function computedTypeStatus(obj, index) {
      var _this$obj2$index, _this$obj$index, _this$obj2$index2, _this$obj$index2, _this$obj2$index3, _this$obj$index3, _this$obj2$index4;
      var obj2 = 'lignes_existantes';
      if (obj == 'nv_lignes_caisse_1') {
        obj2 = "lignes_existantes";
      } else {
        obj2 = "lignes_existantes_engagements_signatures";
      }
      this[obj][index].montant = (_this$obj2$index = this[obj2][index]) === null || _this$obj2$index === void 0 ? void 0 : _this$obj2$index.autorisation;
      if (Number(String((_this$obj$index = this[obj][index]) === null || _this$obj$index === void 0 ? void 0 : _this$obj$index.proposition).replace(/\s+/g, "")) > Number(String((_this$obj2$index2 = this[obj2][index]) === null || _this$obj2$index2 === void 0 ? void 0 : _this$obj2$index2.autorisation).replace(/\s+/g, ""))) {
        this[obj][index].type = "RH";
      } else if (Number(String((_this$obj$index2 = this[obj][index]) === null || _this$obj$index2 === void 0 ? void 0 : _this$obj$index2.proposition).replace(/\s+/g, "")) < Number(String((_this$obj2$index3 = this[obj2][index]) === null || _this$obj2$index3 === void 0 ? void 0 : _this$obj2$index3.autorisation).replace(/\s+/g, ""))) {
        this[obj][index].type = "RB";
      } else if (Number(String((_this$obj$index3 = this[obj][index]) === null || _this$obj$index3 === void 0 ? void 0 : _this$obj$index3.proposition).replace(/\s+/g, "")) == Number(String((_this$obj2$index4 = this[obj2][index]) === null || _this$obj2$index4 === void 0 ? void 0 : _this$obj2$index4.autorisation).replace(/\s+/g, ""))) {
        this[obj][index].type = "RI";
      } else {
        this[obj][index].type = '';
      }
      this.handleInput();
    },
    checkboxValCashCall: function checkboxValCashCall(event) {
      var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      if (event.target.checked) {
        this.formDataToBeWatched.reclamation_main_levee_cautions = event.target.value;
      } else {
        this.formDataToBeWatched.reclamation_main_levee_cautions = "";
      }
    },
    checkboxValCashCall2: function checkboxValCashCall2(event) {
      var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      if (event.target.checked) {
        this.formDataToBeWatched.budget_entierement_boucle = event.target.value;
      } else {
        this.formDataToBeWatched.budget_entierement_boucle = "";
      }
    },
    checkboxValCashCall3: function checkboxValCashCall3(event) {
      var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      if (event.target.checked) {
        this.formDataToBeWatched.rappel_recommandations_contenues_derniere_cr2 = event.target.value;
      } else {
        this.formDataToBeWatched.rappel_recommandations_contenues_derniere_cr2 = "";
      }
    },
    checkboxValCashCall4: function checkboxValCashCall4(event, key) {
      var index = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      if (index == null) {
        if (event.target.checked) {
          this.formDataToBeWatched[key] = event.target.value;
        } else {
          this.formDataToBeWatched[key] = "";
        }
      } else {
        if (event.target.checked) {
          this.elements_constructifs[index][key] = event.target.value;
        } else {
          this.elements_constructifs[index][key] = "";
        }
        this.handleInput();
      }
    },
    checkboxValCashCall5: function checkboxValCashCall5(event, key) {
      var index = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      if (event.target.checked) {
        this.recommandations_particulieres_contenues[index][key] = event.target.value;
      } else {
        this.recommandations_particulieres_contenues[index][key] = "";
      }
      this.handleInput();
    },
    checkboxValCashCall6: function checkboxValCashCall6(event) {
      var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      if (event.target.checked) {
        this.formDataToBeWatched.montant_encours_eng_type_caution_non_applicable = event.target.value;
        this.montant_encours_date_prise_engagement_type_caution = [{
          montant: 0,
          commentaire: "",
          date_debut: ""
        }];
        this.handleInput();
      } else {
        this.formDataToBeWatched.montant_encours_eng_type_caution_non_applicable = "";
      }
    },
    formatAmount: function formatAmount(x) {
      return x === null || x === void 0 ? void 0 : x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    },
    formDataVars: function formDataVars(event, index) {
      var _this6 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _this6.suivi_taux[index][event[0]] = event[1];
              _this6.handleInput();
            case 2:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    },
    formDataVars2: function formDataVars2(event, index, objectName, keyName) {
      this[objectName][index][keyName] = event[1];
      this.refreshSurete();
      this.handleInput();
    },
    formDataVars3: function formDataVars3(event, index, objectName, keyName) {
      this[objectName][index][keyName] = event;
      this.handleInput();
    },
    setRates: function setRates(step_data) {
      this.suivi_taux = [];
      var nl = step_data['nouvelles_lignes_caisse'] || [];
      var ol = step_data['lignes_existantes'] || [];
      var current_year = new Date().getFullYear();
      for (var i = 0; i < nl.length; i++) {
        if (!nl[i]['proposition']) continue;
        if (nl[i]['proposition'] == 0) continue;
        this.addRateLine({
          ligne_compte: nl[i]['ligne'],
          status: "Nouvelle",
          ligne_compte_n_2: 0,
          ligne_compte_n_1: 0,
          ligne_compte_solicite: nl[i]['taux']
        });
      }
      for (var _i2 = 0; _i2 < ol.length; _i2++) {
        if (!ol[_i2]['autorisation']) continue;
        if (nl[_i2]['autorisation'] == 0) continue;
        //if(!ol[i]['echeance']) alert(`La date d'échéance pour la ligne existante ${ol[i]['ligne_mfcfa']} n'a pas été renseignée`)
        var olEndDate = new Date(ol[_i2]['echeance']);
        var olyear = olEndDate.getFullYear();
        this.addRateLine({
          ligne_compte: ol[_i2]['ligne'],
          status: "Ancienne",
          ligne_compte_n_2: current_year - 1 === olyear ? ol[_i2]['taux'] : 0,
          ligne_compte_n_1: current_year === olyear ? ol[_i2]['taux'] : 0,
          ligne_compte_solicite: 0
        });
      }
    },
    someMtn: function someMtn(tb) {
      var som = 0;
      if (tb.length > 0 && tb.length == 1) {
        return tb[0];
      } else {
        tb.forEach(function (el) {
          var result = String(el).replace(/\s+/g, "");
          if (result === "" || isNaN(result)) {
            som += 0;
          } else {
            som += parseInt(result);
          }
        });
      }
      return som;
    },
    refreshSurete: function refreshSurete(e) {
      var index = this.suretes_diverses.findIndex(function (el) {
        return el.nom == "engagement";
      });
      this.$set(this.suretes_diverses, index, this.engagement_value);
      this.formDataToBeWatched.total_montant_engagement_globale = this.totalEngagementGlobal;
    },
    onChange: function onChange(evt) {
      if (evt.target.defaultValue == "non") {
        this.cautions = false;
      } else {
        this.cautions = true;
      }
    },
    setAllDefaultFieldsRecByEnr: function setAllDefaultFieldsRecByEnr() {
      var _this7 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _services_credit_service__WEBPACK_IMPORTED_MODULE_4__["default"].loadCredits().then(function (res) {
                _this7.credits = res.data;
                // console.log("data", res.data)
                //   this.credData(res);
              })["catch"](function (err) {
                console.log(err);
              });
            case 2:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }))();
    },
    refreshSurete1: function refreshSurete1(e) {
      var index = this.suretes_diverses.findIndex(function (el) {
        return el.nom == "nantissement";
      });
      this.$set(this.suretes_diverses, index, this.nantissement_dat);
    },
    addMoreRappel: function addMoreRappel() {
      this.recommandations_particulieres_contenues.push({
        nom: "",
        direction: "",
        recommendation: "",
        status: "",
        commentaire_rappel: ""
      });
      this.handleInput();
    },
    removeRappel: function removeRappel(index) {
      this.recommandations_particulieres_contenues.splice(index, 1);
      this.handleInput();
    },
    addMoreexistantes: function addMoreexistantes() {
      var _this$lignes_existant2;
      this.lignes_existantes.push({
        banque: 'NSIA BANQUE',
        ligne: '',
        autorisation: 0,
        encours: 0,
        taux: '',
        duree: '',
        echeance: '',
        id: String(new Date().getTime())
      });
      this.nv_lignes_caisse_1.push({
        banque: 'NSIA BANQUE',
        ligne: '',
        statut: '',
        montant: 0,
        proposition: 0,
        encours: 0,
        duree: '',
        echeance: '',
        taux: '',
        type: '',
        incomming_ligne_id: (_this$lignes_existant2 = this.lignes_existantes.at(-1)) === null || _this$lignes_existant2 === void 0 ? void 0 : _this$lignes_existant2.id,
        id: String(new Date().getTime())
      });
    },
    removeexistantes: function removeexistantes(index) {
      this.lignes_existantes.splice(index, 1);
      this.nv_lignes_caisse_1.splice(index, 1);
      this.handleInput();
    },
    // addMore1() {
    //     this.cautionnement_solidaires.push({
    //         nom_prenoms: '',
    //         profession: '',
    //         revenu_mensuel: 0,
    //         valeur_patrimoine: 0
    //     })
    //     this.handleInput()
    // },
    addMore1: function addMore1() {
      var _this$lignes_existant3;
      this.lignes_existantes.push({
        banque: 'NSIA BANQUE',
        ligne: '',
        autorisation: 0,
        encours: 0,
        taux: '',
        duree: '',
        echeance: '',
        id: String(new Date().getTime())
      });
      this.nv_lignes_caisse_1.push({
        banque: 'NSIA BANQUE',
        ligne: '',
        statut: '',
        montant: 0,
        proposition: 0,
        encours: 0,
        duree: '',
        echeance: '',
        taux: '',
        type: '',
        incomming_ligne_id: (_this$lignes_existant3 = this.lignes_existantes.at(-1)) === null || _this$lignes_existant3 === void 0 ? void 0 : _this$lignes_existant3.id,
        id: String(new Date().getTime())
      });
    },
    remove1: function remove1(index) {
      this.cautionnement_solidaires.splice(index, 1);
    },
    addMore2: function addMore2() {
      var _this$lignes_existant4;
      this.lignes_existantes_engagements_signatures.push({
        banque: 'NSIA BANQUE',
        ligne: '',
        autorisation: 0,
        encours: 0,
        taux: '',
        duree: "",
        echeance: '',
        id: String(new Date().getTime())
      });
      this.nv_lignes_signature_1.push({
        banque: 'NSIA BANQUE',
        ligne: '',
        statut: '',
        montant: 0,
        proposition: 0,
        encours: 0,
        duree: '',
        echeance: '',
        taux: '',
        type: '',
        incomming_ligne_id: (_this$lignes_existant4 = this.lignes_existantes_engagements_signatures.at(-1)) === null || _this$lignes_existant4 === void 0 ? void 0 : _this$lignes_existant4.id,
        id: String(new Date().getTime())
      });
    },
    remove2: function remove2(index) {
      this.lignes_existantes_engagements_signatures.splice(index, 1);
      this.nv_lignes_signature_2.splice(index, 1);
      this.handleInput();
    },
    addRateLine: function addRateLine() {
      var rate_data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      if (rate_data) {
        // console.log('rate_data', rate_data);
        this.suivi_taux.push(rate_data);
      } else {
        this.suivi_taux.push({
          ligne_compte: "",
          status: "",
          ligne_compte_n_2: 0,
          ligne_compte_n_1: 0,
          ligne_compte_solicite: 0
        });
      }
      this.handleInput();
    },
    removes: function removes(index) {
      this.suivi_taux.splice(index, 1);
    },
    addAutreSurete: function addAutreSurete() {
      if (this.newSurete) {
        this.formDataToBeWatched.autres_suretes_diverses.push({
          label: this.newSurete,
          value: this.newSurete
        });
      }
      this.newSurete = '';
    },
    removeAutreSurete: function removeAutreSurete(index) {
      this.formDataToBeWatched.autres_suretes_diverses.splice(index, 1);
    },
    tableClosedOrOpened: function tableClosedOrOpened() {
      this.seen = this.fetchClosedTables(this.tb_name + this.meta_data['cred_pub_key']);
    },
    openNotesModal: function openNotesModal() {
      var listing = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      this.listingNote = listing;
      this.$modal.show(this.tb_name);
    },
    setCoSignataireVars: function setCoSignataireVars(event, index) {
      this.co_signataire[index][event[0]] = event[1];
      this.handleInput();
    },
    loadCommentaire: function loadCommentaire() {
      var _this8 = this;
      var lentb = this.meta_data["dossier_credit"]["tbs_in_use"];
      var createdKey = this.tb_name;
      var createdKeyArr = createdKey.split("tb");
      createdKey = "cred_pub_tb_" + createdKeyArr[1];
      if ((lentb === null || lentb === void 0 ? void 0 : lentb.length) > 0) {
        if (this.meta_data["dossier_credit"][createdKey] != undefined) {
          this.formDataToBeWatched.commentaire_activite = this.meta_data["dossier_credit"][createdKey]["commentaire_activite"];
        }
      }
      this.defaultSuretes = [{
        label: "Souscription de ".concat(this.souscriptionValue, " billets \xE0 ordre sign\xE9s par l'emprunteur"),
        value: {
          label: "Souscription de ".concat(this.souscriptionValue, " billets \xE0 ordre sign\xE9s par l'emprunteur"),
          nom: "souscription",
          billets: this.souscriptionValue
        },
        id: "souscription"
      }, {
        label: "D\xE9p\xF4t de garantie et compte de r\xE9serve du service de la dette (DG + CRSD) \xE0 hauteur de ".concat(this.montant_dep_gar_crsd, " FCFA soit ").concat(this.taux_dep_gar_crsd, "% du montant propos\xE9"),
        value: {
          label: "D\xE9p\xF4t de garantie et compte de r\xE9serve du service de la dette (DG + CRSD) \xE0 hauteur de ".concat(this.montant_dep_gar_crsd, " FCFA soit ").concat(this.taux_dep_gar_crsd, "% du montant propos\xE9"),
          nom: "depot",
          taux: this.taux_dep_gar_crsd,
          montant: this.montant_dep_gar_crsd
        },
        id: "depot"
      }, {
        label: "Nantissement de stock",
        value: {
          label: "Nantissement de stock",
          nom: "nantissement_stock"
        },
        id: "nantissement_stock"
      }];
      this.formDataToBeWatched.suretes_diverses.forEach(function (el, index) {
        _this8.defaultSuretes.forEach(function (elem) {
          if (elem.value.nom === el.nom) {
            _this8.formDataToBeWatched.suretes_diverses[index] = elem.value;
            // console.log({el: el.label, elem: elem.label})
          }
        });
      });
    },
    loadRetrieved: function loadRetrieved() {
      var _this9 = this;
      var lentb = this.meta_data["dossier_credit"]["tbs_in_use"];
      var createdKey = this.tb_name;
      var createdKeyArr = createdKey.split("tb");
      createdKey = "cred_pub_tb_" + createdKeyArr[1];
      var keys_garanties = ["hypotheques", "total_hypotheques_valeur_marchande", "total_prise_hypotheque", "total_hypotheques_valeur_considere", "gages", "total_gages_valeur_considere", "total_gages_valeur_marchande", "cautionnement_solidaires", "cautionnement_solidaires_personnes_morales", "total_cautionnement_solidaires_valeur_patrimoine", "total_cautionnement_solidaires_valeur_revenu_mensuel", "total_cautionnement_solidaires_morale_valeur_ca", "total_cautionnement_solidaires_morale_valeur_total_bilan", "total_cautionnement_solidaires_morale_valeur_resultat_net", "caution_hypothecaires", "protection_financieres", "cond_particulieres", "total_protection_financieres_valeur_considere", "total_protection_financieres_valeur_marchande", "total_caution_hypothecaires_valeur_considere", "total_caution_hypothecaires_valeur_marchande", "defaultSuretes", "engagement_globales", "montant_dat", "reference_dat", "autres_suretes_diverses", "st_caisse_nouvelles_lignes_montant", "st_caisse_nouvelles_lignes_proposition", "st_signature_ligne_existantes_autorisation", "st_signature_ligne_existantes_encours", "st_signature_nouvelles_lignes_montant", "st_signature_nouvelles_lignes_proposition", "suretes_diverses"];
      if (this.meta_data["dossier_credit"][createdKey] == undefined) {
        var _this$meta_data$dossi8, _data_f, _data_f4, _data_f7, _data_f0;
        this.engagement_globales = [];
        var oldLinesId = [];
        this.f8Data.oldLines.forEach(function (el) {
          oldLinesId.push({
            id: el.id,
            echeance: el.echeance,
            montant: el.autorisation
          });
        });
        var data_f8 = (_this$meta_data$dossi8 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi8 === void 0 ? void 0 : _this$meta_data$dossi8["cred_pub_tb_19003"];
        if (data_f8 === undefined) {
          data_f8 = this.meta_data["dossier_credit"][this.credpub_8];
        }

        // this.formDataToBeWatched.total_lignes_sollicitees_n_3 = this.somX3(data_f8['nouvelles_lignes_caisse'], 'proposition');

        // this.setRates(data_f8);
        // this.getRatiosByAPI();

        keys_garanties.forEach(function (key, id) {
          if (![undefined, "", null, []].includes(data_f8[key])) {
            _this9.formDataToBeWatched[key] = data_f8[key];
            // console.log(`${key}`, this.formDataToBeWatched[key])
          }
        });
        if (((_data_f = data_f8) === null || _data_f === void 0 ? void 0 : _data_f.lignes_existantes) != undefined) {
          var _data_f2;
          if (((_data_f2 = data_f8) === null || _data_f2 === void 0 ? void 0 : _data_f2.lignes_existantes) != '') {
            var _data_f3;
            this.lignes_existantes = (_data_f3 = data_f8) === null || _data_f3 === void 0 ? void 0 : _data_f3.lignes_existantes;
            this.lignes_existantes = this.lignes_existantes.map(function (ed) {
              return _objectSpread(_objectSpread({}, ed), {}, {
                cameFrom: 'tb_8'
              });
            });

            // this.lignes_existantes.forEach(el => {
            //     this.liste_commentaire_denouement_lignes_existantes['ligne_' + el.id] = "";
            // });
          }
        }
        if (((_data_f4 = data_f8) === null || _data_f4 === void 0 ? void 0 : _data_f4.lignes_existantes_engagements_signatures) != undefined) {
          var _data_f5;
          if ((_data_f5 = data_f8) !== null && _data_f5 !== void 0 && _data_f5.lignes_existantes_engagements_signatures) {
            var _data_f6;
            this.lignes_existantes_engagements_signatures = (_data_f6 = data_f8) === null || _data_f6 === void 0 ? void 0 : _data_f6.lignes_existantes_engagements_signatures;
            this.lignes_existantes_engagements_signatures = this.lignes_existantes_engagements_signatures.map(function (ed) {
              return _objectSpread(_objectSpread({}, ed), {}, {
                cameFrom: 'tb_8'
              });
            });
            this.lignes_existantes_engagements_signatures.forEach(function (el) {
              _this9.liste_commentaire_denouement_lignes_existantes['ligne_' + el.id] = "";
            });
          }
        }
        if (((_data_f7 = data_f8) === null || _data_f7 === void 0 ? void 0 : _data_f7.nouvelles_lignes_caisse) != undefined) {
          var _data_f8;
          if ((_data_f8 = data_f8) !== null && _data_f8 !== void 0 && _data_f8.nouvelles_lignes_caisse) {
            var _data_f9;
            this.nouvelles_lignes_caisse = (_data_f9 = data_f8) === null || _data_f9 === void 0 ? void 0 : _data_f9.nouvelles_lignes_caisse;
            if (this.nouvelles_lignes_caisse.length > 0) {
              this.nv_lignes_caisse_1 = [];
              this.nouvelles_lignes_caisse.forEach(function (element) {
                if (element.statut != 'Abandon') {
                  _this9.nv_lignes_caisse_1.push(element);
                } else {
                  if (element.statut != 'Abandon') {
                    _this9.nv_lignes_caisse_1.push(element);
                  }
                }
              });
              if (this.nv_lignes_caisse_1.length > 0) {
                this.nv_lignes_caisse_1 = this.nv_lignes_caisse_1.map(function (ed) {
                  return _objectSpread(_objectSpread({}, ed), {}, {
                    already_exist: true,
                    incomming_ligne_id: ed.id,
                    id: String(new Date().getTime() + Math.random() * 100)
                  });
                });
                // console.log('nv_lignes_caisse_1', this.nv_lignes_caisse_1)
              } else {
                this.nv_lignes_caisse_2 = [{
                  banque: 'NSIA BANQUE',
                  ligne: '',
                  statut: '',
                  montant: 0,
                  proposition: 0,
                  encours: 0,
                  echeance: '',
                  taux: '',
                  type: "",
                  id: String(new Date().getTime() + Math.random() * 100)
                }];
              }
            }
          }
        }
        if (((_data_f0 = data_f8) === null || _data_f0 === void 0 ? void 0 : _data_f0.nouvelles_lignes_signature) != undefined) {
          var _data_f1;
          if ((_data_f1 = data_f8) !== null && _data_f1 !== void 0 && _data_f1.nouvelles_lignes_signature) {
            var _data_f10;
            this.nouvelles_lignes_signature = (_data_f10 = data_f8) === null || _data_f10 === void 0 ? void 0 : _data_f10.nouvelles_lignes_signature;
            if (this.nouvelles_lignes_signature.length > 0) {
              this.nv_lignes_signature_1 = [];
              this.nouvelles_lignes_signature.forEach(function (element) {
                if (element.statut != 'Abandon') {
                  _this9.nv_lignes_signature_1.push(element);
                } else {
                  if (element.statut != 'Abandon') {
                    _this9.nv_lignes_signature_1.push(element);
                  }
                }
              });
              if (this.nv_lignes_signature_1.length > 0) {
                this.nv_lignes_signature_1 = this.nv_lignes_signature_1.map(function (ed) {
                  return _objectSpread(_objectSpread({}, ed), {}, {
                    cameFrom: 'tb_8',
                    incomming_ligne_id: ed.id,
                    id: String(new Date().getTime() + Math.random() * 100)
                  });
                });
              } else {
                this.nv_lignes_signature_2 = [{
                  banque: 'NSIA BANQUE',
                  ligne: '',
                  statut: '',
                  montant: 0,
                  proposition: 0,
                  encours: '',
                  duree: '',
                  echeance: '',
                  taux: '',
                  type: '',
                  id: String(new Date().getTime() + Math.random() * 100)
                }];
              }
            }
          }
        }
        this.handleInput();
      }
      if (lentb.length > 0) {
        var _this$meta_data$dossi9;
        if (this.meta_data["dossier_credit"][createdKey] != undefined) {
          var _this$formDataToBeWat10, _this$formDataToBeWat13;
          this.formDataToBeWatched = this.meta_data["dossier_credit"][createdKey];

          // if (this.formDataToBeWatched?.lignes_existantes != undefined) {
          //     if (this.formDataToBeWatched?.lignes_existantes != '') {
          //         this.lignes_existantes = this.formDataToBeWatched?.lignes_existantes
          //     }
          // }
          // if (this.formDataToBeWatched?.lignes_existantes_engagements_signatures != undefined) {
          //     if (this.formDataToBeWatched?.lignes_existantes_engagements_signatures) {
          //         this.lignes_existantes_engagements_signatures = this.formDataToBeWatched?.lignes_existantes_engagements_signatures
          //     }
          // }
          if (((_this$formDataToBeWat10 = this.formDataToBeWatched) === null || _this$formDataToBeWat10 === void 0 ? void 0 : _this$formDataToBeWat10.nouvelles_lignes_caisse) != undefined) {
            var _this$formDataToBeWat11;
            if ((_this$formDataToBeWat11 = this.formDataToBeWatched) !== null && _this$formDataToBeWat11 !== void 0 && _this$formDataToBeWat11.nouvelles_lignes_caisse) {
              var _this$formDataToBeWat12;
              this.nouvelles_lignes_caisse = (_this$formDataToBeWat12 = this.formDataToBeWatched) === null || _this$formDataToBeWat12 === void 0 ? void 0 : _this$formDataToBeWat12.nouvelles_lignes_caisse;
              this.nv_lignes_caisse_2 = [];
              this.nv_lignes_caisse_1 = [];
              this.nouvelles_lignes_caisse.forEach(function (element) {
                if (element.statut == 'Nouveau') {
                  _this9.nv_lignes_caisse_2.push(element);
                } else {
                  if (element.statut != 'Abandon') {
                    _this9.nv_lignes_caisse_1.push(element);
                  }
                  // this.computedTypeStatus("nv_lignes_caisse_1",index)
                }
              });
            }
          }
          if (((_this$formDataToBeWat13 = this.formDataToBeWatched) === null || _this$formDataToBeWat13 === void 0 ? void 0 : _this$formDataToBeWat13.nouvelles_lignes_signature) != undefined) {
            var _this$formDataToBeWat14;
            if ((_this$formDataToBeWat14 = this.formDataToBeWatched) !== null && _this$formDataToBeWat14 !== void 0 && _this$formDataToBeWat14.nouvelles_lignes_signature) {
              var _this$formDataToBeWat15;
              this.nouvelles_lignes_signature = (_this$formDataToBeWat15 = this.formDataToBeWatched) === null || _this$formDataToBeWat15 === void 0 ? void 0 : _this$formDataToBeWat15.nouvelles_lignes_signature;
              this.nv_lignes_signature_2 = [];
              this.nv_lignes_signature_1 = [];
              this.nouvelles_lignes_signature.forEach(function (element) {
                if (element.statut == 'Nouveau') {
                  _this9.nv_lignes_signature_2.push(element);
                } else {
                  if (element.statut != 'Abandon') {
                    _this9.nv_lignes_signature_1.push(element);
                  }
                  // this.computedTypeStatus("nv_lignes_signature_1",index)
                }
              });
            }
          }
        }
        // Close table by default
        this.defaultRetract(false, (_this$meta_data$dossi9 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi9 === void 0 ? void 0 : _this$meta_data$dossi9.applied_templ_id);
      }
    },
    launchAutoSaver: function launchAutoSaver() {
      var _this0 = this;
      _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["default"].loadUserData().then(function (res) {
        _this0.send2Backend(res, 0, 0);
      })["catch"](function (err) {
        _this0.loadWithError(err);
      });
    },
    recomputeSouscriptionValue: function recomputeSouscriptionValue(data) {
      var res = 0;
      this.duree_credit0 = data.duree_credit;
      if (data.mode_paiement != null) {
        var _data$mode_paiement;
        this.mode_paiement0 = (_data$mode_paiement = data.mode_paiement) === null || _data$mode_paiement === void 0 ? void 0 : _data$mode_paiement.toLowerCase();
      } else {
        if (this.mode_paiement0 == null) {
          var _this$meta_data$dossi0;
          this.mode_paiement0 = (_this$meta_data$dossi0 = this.meta_data.dossier_credit.cred_pub_tb_1.mode_paiement) === null || _this$meta_data$dossi0 === void 0 ? void 0 : _this$meta_data$dossi0.toLowerCase();
          // console.log('mode_paiement0', this.mode_paiement0)
        }
        // console.log('mode_paiement1', this.mode_paiement0)
      }

      // if (data.duree_credit != null) {
      //     this.duree_credit0 = data.duree_credit?.toLowerCase()
      // } else {
      //     if (this.duree_credit0 == null) {
      //         this.duree_credit0 = this.meta_data.dossier_credit.cred_pub_tb_1.duree_credit?.toLowerCase()
      //         console.log('duree_credit0', this.duree_credit0)
      //     }
      //     console.log('duree_credit1', this.duree_credit0)

      // }

      var dure = Number(this.duree_credit0) || 0;
      var mode = this.mode_paiement0.toLowerCase();
      var diviseur = 1;
      if (mode === "mensuelle") {
        diviseur = 1;
        res = dure / diviseur;
        // console.log('res', res)
      }
      if (mode === "bi-mensuel") {
        diviseur = 2;
        res = dure * diviseur;
        // console.log('res', res)
      }
      if (mode === "trimestriel") {
        diviseur = 3;
        res = dure / diviseur;
        // console.log('res', res)
      }
      if (mode === "semestriel") {
        diviseur = 6;
        res = dure / diviseur;
        // console.log('res', res)
      }
      if (mode === "in fine") {
        diviseur = dure || 1;
        res = dure / diviseur;
        // console.log('res', res)
      }
      var updatedBillet = {
        label: "Souscription de ".concat(res, " billets \xE0 ordre sign\xE9s par l'emprunteur"),
        value: {
          label: "Souscription de ".concat(res, " billets \xE0 ordre sign\xE9s par l'emprunteur"),
          nom: "souscription",
          billets: res
        },
        id: "souscription"
      };
      this.defaultSuretes[0] = updatedBillet;
      this.defaultSuretes[0] = updatedBillet;
      this.$set(this.defaultSuretes, 0, updatedBillet);
      // console.log('defaultSuretes', this.defaultSuretes)
    },
    addEngagementGlobale: function addEngagementGlobale() {
      this.engagement_globales.push({
        montant_engagement_globale: "",
        entreprise_engagement_globale: "",
        echeance: "",
        statut: ""
      });
    },
    removeEngagementGlobale: function removeEngagementGlobale(index) {
      this.engagement_globales.splice(index, 1);
      this.refreshSurete();
    },
    removePes: function removePes(index) {
      this.elements_constructifs.splice(index, 1);
    },
    addMoreEncours: function addMoreEncours() {
      this.montant_encours_date_prise_engagement_type_caution.push({
        montant: 0,
        commentaire: "",
        date_debut: ""
      });
      this.handleInput();
    },
    addMorePres: function addMorePres() {
      this.elements_constructifs.push({
        libelle: "",
        reponse: ""
      });
    },
    addMoreGage: function addMoreGage() {
      this.gages.push(_defineProperty({
        bien_a_gage: "",
        proprietaire: "",
        annee_achat: "",
        adresse_emplacement: "",
        date_evaluation: "",
        valeur_marchande: 0,
        valeur_considere: 0
      }, "date_evaluation", ""));
    },
    addCondPart: function addCondPart() {
      this.cond_particulieres.push({
        cond_name: "",
        cond_description: ""
      });
    },
    somX3: function somX3(ob, key) {
      if (!ob || !key) return 0;
      var som = 0;
      ob.filter(function (elm) {
        var _elm$key;
        som += parseInt((_elm$key = elm[key]) === null || _elm$key === void 0 ? void 0 : _elm$key.toString().replace(/\s/g, ''));
      });
      return som;
    },
    removeEncours: function removeEncours(index) {
      this.montant_encours_date_prise_engagement_type_caution.splice(index, 1);
      this.handleInput();
    },
    removeGage: function removeGage(index) {
      this.gages.splice(index, 1);
      this.formDataToBeWatched["total_gages_valeur_marchande"] = this.somX3(this.gages, 'valeur_marchande');
      this.formDataToBeWatched["total_gages_valeur_considere"] = this.somX3(this.gages, 'valeur_considere');
    },
    removeByKey: function removeByKey(index, removeList) {
      this[removeList].splice(index, 1);
    },
    loadTbAttrs: function loadTbAttrs() {
      var l = [];
      var topdivel = this.$refs.topdiv;
      // let k = document.querySelectorAll('.subdiv')
      var k = document.querySelectorAll(".subdiv" + this.tb_name);
      if ((k === null || k === void 0 ? void 0 : k.length) > 0) {
        k.forEach(function (e) {
          l.push(e.innerText);
        });
      }
      var p = {
        name_of_title: topdivel.innerText,
        list_of_content: l,
        id: "f26-head"
      };
      this.$emit("load-buffer", p);
    },
    retract: function retract() {
      this.seen = !this.seen;
      var a = {
        "tb_name": this.tb_name + this.meta_data['cred_pub_key'],
        "status": this.seen
      };
      EventBus.$emit("savedclosed-table", a);
    },
    setTbVal: function setTbVal(val) {
      this.cred_pub_key = val;
    },
    loadWithError: function loadWithError(err) {
      // // window.location.href = "/login";
    },
    send2Backend: function send2Backend(res, newVal, oldVal) {
      this.authcheck = true;
      this.authcheckUsr = res.data;
      this.authcheckStatus = res.status;
      if (this.authcheckStatus === 401) {
        // window.location.href = "/login";
      }
      if (this.authcheck === true) {
        this.$emit('autosaving');
        this.$axios.post(this.ebapisHost + "creditbuilder/api/v1/autosaving/", {
          user: this.authcheckUsr,
          meta_parseable: this.meta_parseable,
          filledData: this.formDataToBeWatched
        }).then(function (response) {
          this.$emit('autosaving');
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
    handleInput: function handleInput() {
      var _this$formDataToBeWat16;
      this.formDataToBeWatched.liste_commentaire_denouement_lignes_existantes = this.liste_commentaire_denouement_lignes_existantes;
      this.formDataToBeWatched.suivi_taux = this.suivi_taux;
      this.formDataToBeWatched.total_montant_encours = this.somX3(this.montant_encours_date_prise_engagement_type_caution, 'montant');
      this.formDataToBeWatched["montant_encours_date_prise_engagement_type_caution"] = this.montant_encours_date_prise_engagement_type_caution;
      this.formDataToBeWatched.lignes_sollicitees_chiffres_affaires_n_1 = this.division(this.formDataToBeWatched.total_lignes_sollicitees_n_1, this.formDataToBeWatched.chiffre_affaires_n_1) * 100;
      this.formDataToBeWatched.lignes_sollicitees_chiffres_affaires_n_2 = this.division(this.formDataToBeWatched.total_lignes_sollicitees_n_2, this.formDataToBeWatched.chiffre_affaires_n_2) * 100;
      this.formDataToBeWatched.lignes_sollicitees_chiffres_affaires_n_3 = this.division(this.formDataToBeWatched.total_lignes_sollicitees_n_3, this.formDataToBeWatched.chiffre_affaires_n_3) * 100;
      // this.formDataToBeWatched.total_gages_valeur_marchande = this.somX3(this.gages, 'valeur_marchande')
      // this.formDataToBeWatched.total_gages_valeur_considere = this.somX3(this.gages, 'valeur_considere')
      // this.formDataToBeWatched.gages = this.gages

      // this.formDataToBeWatched['suretes_diverses'] = this.suretes_diverses
      this.formDataToBeWatched['co_signataire'] = this.co_signataire;
      this.formDataToBeWatched['cond_particulieres'] = this.cond_particulieres;
      this.formDataToBeWatched['cautionnement_solidaires'] = this.cautionnement_solidaires;
      this.formDataToBeWatched["engagement_globales"] = this.engagement_globales;
      this.formDataToBeWatched.elements_constructifs = this.elements_constructifs;
      this.formDataToBeWatched['recommandations_particulieres_contenues'] = this.recommandations_particulieres_contenues;
      this.formDataToBeWatched.lignes_existantes = this.lignes_existantes;
      this.formDataToBeWatched.st_caisse_ligne_existantes_autorisation = this.somX3(this.lignes_existantes, "autorisation");
      this.formDataToBeWatched.st_caisse_ligne_existantes_encours = this.somX3(this.lignes_existantes, "encours");
      this.formDataToBeWatched.lignes_existantes_engagements_signatures = this.lignes_existantes_engagements_signatures;
      this.formDataToBeWatched.st_signature_ligne_existantes_autorisation = this.somX3(this.lignes_existantes_engagements_signatures, "autorisation");
      this.formDataToBeWatched.st_signature_ligne_existantes_encours = this.somX3(this.lignes_existantes_engagements_signatures, "encours");
      this.formDataToBeWatched.total_lignes_existantes_autorisation = this.formDataToBeWatched.st_caisse_ligne_existantes_autorisation + this.formDataToBeWatched.st_signature_ligne_existantes_autorisation;
      this.formDataToBeWatched.total_lignes_existantes_encours = this.formDataToBeWatched.st_caisse_ligne_existantes_encours + this.formDataToBeWatched.st_signature_ligne_existantes_encours;
      this.nv_lignes_caisse_1.forEach(function (element) {
        if ((element === null || element === void 0 ? void 0 : element.statut) == "Abandon") {
          element.montant = 0;
          element.proposition = 0;
        }
      });
      this.nouvelles_lignes_caisse = this.nv_lignes_caisse_1.concat(this.nv_lignes_caisse_2);
      this.formDataToBeWatched.nouvelles_lignes_caisse = this.nouvelles_lignes_caisse;
      this.formDataToBeWatched.st_caisse_nouvelles_lignes_montant = this.somX3(this.nouvelles_lignes_caisse, "montant");
      this.formDataToBeWatched.st_caisse_nouvelles_lignes_proposition = this.somX3(this.nouvelles_lignes_caisse, "proposition");
      this.nv_lignes_signature_1.forEach(function (element) {
        if ((element === null || element === void 0 ? void 0 : element.statut) == "Abandon") {
          element.montant = 0;
          element.proposition = 0;
        }
      });
      this.nouvelles_lignes_signature = this.nv_lignes_signature_1.concat(this.nv_lignes_signature_2);
      this.formDataToBeWatched.nouvelles_lignes_signature = this.nouvelles_lignes_signature;
      this.formDataToBeWatched.st_signature_nouvelles_lignes_montant = this.somX3(this.nouvelles_lignes_signature, "montant");
      this.formDataToBeWatched.st_signature_nouvelles_lignes_proposition = this.somX3(this.nouvelles_lignes_signature, "proposition");
      this.formDataToBeWatched.total_nouvelles_lignes_proposition = this.formDataToBeWatched.st_caisse_nouvelles_lignes_proposition + this.formDataToBeWatched.st_signature_nouvelles_lignes_proposition;
      this.formDataToBeWatched.total_nouvelles_lignes_montant = this.formDataToBeWatched.st_caisse_nouvelles_lignes_montant + this.formDataToBeWatched.st_signature_nouvelles_lignes_montant;
      this.formDataToBeWatched.total_caisse_situation_apres_accord_autorisation = this.somX3(this.situations_apres_accords, "situation_apres_accord_autorisation");
      this.formDataToBeWatched["situations_apres_accords"] = this.situations_apres_accords;
      this.formDataToBeWatched.total_caisse_situation_apres_accord_condition_ht = this.somX3(this.situations_apres_accords, "situation_apres_accord_condition_ht");
      this.formDataToBeWatched["situations_apres_accords"] = this.situations_apres_accords;
      this.formDataToBeWatched.total_caisse_situation_apres_accord_encours = this.somX3(this.situations_apres_accords, "situation_apres_accord_encours");
      this.formDataToBeWatched["situations_apres_accords"] = this.situations_apres_accords;
      this.formDataToBeWatched.total_lignes_sollicitees_n_3 = this.formDataToBeWatched.st_caisse_nouvelles_lignes_proposition;
      this.formDataToBeWatched.lignes_sollicitees_chiffres_affaires_n_3 = this.division(this.formDataToBeWatched.total_lignes_sollicitees_n_3, this.formDataToBeWatched.chiffre_affaires_n_3) * 100;
      EventBus.$emit("ligne-selected-updated", {
        "total_nouvelle_ligne_0": (_this$formDataToBeWat16 = this.formDataToBeWatched) === null || _this$formDataToBeWat16 === void 0 ? void 0 : _this$formDataToBeWat16.total_nouvelles_lignes_montant
      });
      this.handleChangeLinges();
      this.loadLigneSelected();
    },
    handleChangeLinges: function handleChangeLinges() {
      var _this1 = this;
      this.tous_les_lignes_filtres = [];
      this.tous_les_lignes.forEach(function (el) {
        var f = false;
        _this1.nv_lignes_caisse_2.forEach(function (el1) {
          if (el.libelle == el1.ligne) {
            f = true;
          }
        });
        _this1.nv_lignes_caisse_1.forEach(function (el1) {
          if (el.libelle == el1.ligne) {
            f = true;
          }
        });
        if (f == false) {
          _this1.tous_les_lignes_filtres.push(el);
        }
      });
      this.lignes_engagements_signatures_filtres = [];
      this.lignes_engagements_signatures.forEach(function (el) {
        var f = false;
        _this1.nv_lignes_signature_2.forEach(function (el1) {
          if (el.libelle == el1.ligne) {
            f = true;
          }
        });
        _this1.nv_lignes_signature_1.forEach(function (el1) {
          if (el.libelle == el1.ligne) {
            f = true;
          }
        });
        if (f == false) {
          _this1.lignes_engagements_signatures_filtres.push(el);
        }
      });
    },
    division: function division(n1, n2) {
      var _n, _n2;
      if (n2 == 0) return 0;
      if (typeof n1 === "string") n1 = parseInt((_n = n1) === null || _n === void 0 ? void 0 : _n.replace(/\s+/g, ""));
      if (typeof n2 === "string") n2 = parseInt((_n2 = n2) === null || _n2 === void 0 ? void 0 : _n2.replace(/\s+/g, ""));
      return (n1 / n2).toFixed(2);
      // return ((parseInt(n1?.replace(/\s+/g, "")) / parseInt(n2?.replace(/\s+/g, ""))) * 100).toFixed(2);
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
    // retract2() {
    //     this.seen2 = !this.seen2
    // },
    // retract3() {
    //     this.seen3 = !this.seen3
    // },
    // retract4() {
    //     this.seen4 = !this.seen4
    // },
    deleteTB: function deleteTB() {
      if (confirm('Êtes-vous sûr de vouloir supprimer ce tableau ?')) {
        this.$emit('delete-tb', {
          tb_name: this.tb_name
        });
      }
    },
    formatDateForInput: function formatDateForInput(data) {
      var day = data.getDate() <= 9 ? "0" + data.getDate() : data.getDate();
      var monthNumber = data.getMonth() + 1;
      var month = monthNumber <= 9 ? "0" + monthNumber : monthNumber;
      return data.getFullYear() + "-" + month + "-" + day;
    },
    formatDate: function formatDate(date) {
      if (['', null, undefined].includes(date)) return '';
      var options = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric'
      };
      return new Date(date).toLocaleDateString('fr', options);
    }
  },
  watch: {
    formDataToBeWatched: {
      handler: function handler(newVal, oldVal) {
        this.autosaving(newVal, oldVal);
      },
      deep: true,
      immediate: true
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pv/nsia/dg/DG-CT2.vue?vue&type=template&id=f556c3c2&scoped=true":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pv/nsia/dg/DG-CT2.vue?vue&type=template&id=f556c3c2&scoped=true ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm$formDataToBeWatch;
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    on: {
      contextmenu: function contextmenu($event) {
        return _vm.$refs.menu.open($event, _vm.tb_name);
      }
    }
  }, [_c("div", {
    staticClass: "row bg-light",
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
      id: "f7-head"
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col"
  }, [_vm._v("\n                            " + _vm._s(_vm.tb_display_name) + " : Synthèse des anciennes et nouvelles lignes\n                        ")]), _vm._v(" "), _c("div", {
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
  }, [_c("span", [_vm._v("\n                                            " + _vm._s(_vm.formDataToBeWatched.notes.length) + "\n                                        ")])])])]) : _vm._e(), _vm._v(" "), _c("chevron-up-icon", {
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
    staticClass: "table-responsive mt-4 p-0 mx-3"
  }, [_c("table", {
    staticClass: "table table-borderless"
  }, [_c("thead", [_vm._m(0), _vm._v(" "), _c("tr", {
    staticClass: "text-center",
    staticStyle: {
      "vertical-align": "center"
    }
  }, [_c("th", [_vm._v("Banque")]), _vm._v(" "), _c("th", [_vm._v("Lignes")]), _vm._v(" "), _c("th", [_vm._v("Statut")]), _vm._v(" "), _c("th", [_vm._v("Montant")]), _vm._v(" "), _c("th", [_vm._v("Proposition (autorisation)")]), _vm._v(" "), _c("th", [_c("span", [_vm._v("Encours au")]), _vm._v(" "), _c("date-input", {
    staticStyle: {
      "min-width": "250px"
    },
    attrs: {
      value: _vm.formDataToBeWatched.encours_au,
      id: "encours_au",
      background: "background: #00ffff21",
      color: "color: #000"
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1), _c("th", [_vm._v("Durée (mois)")]), _vm._v(" "), _c("th", [_vm._v("Ech/Durée tirage")]), _vm._v(" "), _c("th", [_vm._v("Taux")]), _vm._v(" "), _c("th"), _vm._v(" "), _c("th")])]), _vm._v(" "), _c("tbody", [_vm.nv_lignes_caisse_1.length > 0 ? _vm._l(_vm.nv_lignes_caisse_1, function (nv_ligne_caisse, idx_) {
    var _vm$nv_lignes_caisse_;
    return _c("tr", {
      key: idx_ + "nv_lg_1"
    }, [_c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: nv_ligne_caisse.banque,
        expression: "nv_ligne_caisse.banque"
      }],
      staticClass: "form-control",
      staticStyle: {
        width: "200px !important"
      },
      attrs: {
        type: "text",
        disabled: ""
      },
      domProps: {
        value: nv_ligne_caisse.banque
      },
      on: {
        change: function change($event) {
          return _vm.handleInput();
        },
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(nv_ligne_caisse, "banque", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", [nv_ligne_caisse.ligne == "" ? _c("select", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: nv_ligne_caisse.ligne,
        expression: "nv_ligne_caisse.ligne"
      }],
      staticClass: "form-select",
      attrs: {
        disabled: true
      },
      on: {
        change: [function ($event) {
          var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
            return o.selected;
          }).map(function (o) {
            var val = "_value" in o ? o._value : o.value;
            return val;
          });
          _vm.$set(nv_ligne_caisse, "ligne", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
        }, function ($event) {
          return _vm.handleInput();
        }]
      }
    }, [_c("option", {
      domProps: {
        value: ""
      }
    }), _vm._v(" "), _vm._l(_vm.f8Constants.tous_les_lignes_filtres, function (line, indexL) {
      return _c("option", {
        key: indexL + "4z_1",
        domProps: {
          value: line.libelle
        }
      }, [_vm._v(_vm._s(line.libelle) + "\n                                        ")]);
    })], 2) : _c("select", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: nv_ligne_caisse.ligne,
        expression: "nv_ligne_caisse.ligne"
      }],
      staticClass: "form-select",
      attrs: {
        disabled: true
      },
      on: {
        change: [function ($event) {
          var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
            return o.selected;
          }).map(function (o) {
            var val = "_value" in o ? o._value : o.value;
            return val;
          });
          _vm.$set(nv_ligne_caisse, "ligne", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
        }, function ($event) {
          return _vm.handleInput();
        }]
      }
    }, [_c("option", {
      domProps: {
        value: ""
      }
    }), _vm._v(" "), _vm._l(_vm.f8Constants.tous_les_lignes, function (line, indexL) {
      return _c("option", {
        key: indexL + "4z_1",
        domProps: {
          value: line.libelle
        }
      }, [_vm._v(_vm._s(line.libelle))]);
    })], 2)]), _vm._v(" "), _c("td", [_c("select", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: nv_ligne_caisse.statut,
        expression: "nv_ligne_caisse.statut"
      }],
      staticClass: "form-select",
      "class": {
        equipe: (nv_ligne_caisse === null || nv_ligne_caisse === void 0 ? void 0 : nv_ligne_caisse.cameFrom) == "tb_8"
      },
      staticStyle: {
        background: "#00ffff21",
        color: "#000"
      },
      attrs: {
        title: nv_ligne_caisse.statut
      },
      on: {
        change: [function ($event) {
          var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
            return o.selected;
          }).map(function (o) {
            var val = "_value" in o ? o._value : o.value;
            return val;
          });
          _vm.$set(nv_ligne_caisse, "statut", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
        }, function ($event) {
          return _vm.computedTypeStatus("nv_lignes_caisse_1", idx_);
        }]
      }
    }, [_c("option", {
      domProps: {
        value: "Renouvellement"
      }
    }, [_vm._v("Renouvellement")]), _vm._v(" "), _c("option", {
      domProps: {
        value: "Abandon"
      }
    }, [_vm._v("Abandon")])])]), _vm._v(" "), _c("td", [_c("currency-input2", {
      "class": {
        equipe: (nv_ligne_caisse === null || nv_ligne_caisse === void 0 ? void 0 : nv_ligne_caisse.cameFrom) == "tb_8"
      },
      staticStyle: {
        background: "#00ffff21",
        color: "#000"
      },
      attrs: {
        "default-typing": false
      },
      on: {
        change: function change($event) {
          return _vm.handleLignesExis("nv_lignes_caisse_1", idx_, "montant");
        }
      },
      model: {
        value: nv_ligne_caisse.montant,
        callback: function callback($$v) {
          _vm.$set(nv_ligne_caisse, "montant", $$v);
        },
        expression: "nv_ligne_caisse.montant"
      }
    })], 1), _vm._v(" "), _c("td", [_c("currency-input2", {
      "class": {
        equipe: (nv_ligne_caisse === null || nv_ligne_caisse === void 0 ? void 0 : nv_ligne_caisse.cameFrom) == "tb_8"
      },
      staticStyle: {
        background: "#00ffff21",
        color: "#000"
      },
      attrs: {
        "default-typing": false
      },
      on: {
        change: function change($event) {
          return _vm.computedTypeStatus("nv_lignes_caisse_1", idx_);
        }
      },
      model: {
        value: nv_ligne_caisse.proposition,
        callback: function callback($$v) {
          _vm.$set(nv_ligne_caisse, "proposition", $$v);
        },
        expression: "nv_ligne_caisse.proposition"
      }
    })], 1), _vm._v(" "), _c("td", [_c("currency-input2", {
      "class": {
        equipe: (nv_ligne_caisse === null || nv_ligne_caisse === void 0 ? void 0 : nv_ligne_caisse.cameFrom) == "tb_8"
      },
      staticStyle: {
        background: "#00ffff21",
        color: "#000"
      },
      attrs: {
        "default-typing": false
      },
      on: {
        change: function change($event) {
          return _vm.computedTypeStatus("nv_lignes_caisse_1", idx_);
        }
      },
      model: {
        value: nv_ligne_caisse.encours,
        callback: function callback($$v) {
          _vm.$set(nv_ligne_caisse, "encours", $$v);
        },
        expression: "nv_ligne_caisse.encours"
      }
    })], 1), _vm._v(" "), _c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: nv_ligne_caisse.duree,
        expression: "nv_ligne_caisse.duree"
      }],
      staticClass: "form-control",
      "class": {
        equipe: (nv_ligne_caisse === null || nv_ligne_caisse === void 0 ? void 0 : nv_ligne_caisse.cameFrom) == "tb_8"
      },
      staticStyle: {
        width: "80px",
        background: "#00ffff21",
        color: "#000"
      },
      attrs: {
        type: "number"
      },
      domProps: {
        value: nv_ligne_caisse.duree
      },
      on: {
        change: function change($event) {
          return _vm.computedTypeStatus("nv_lignes_caisse_1", idx_);
        },
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(nv_ligne_caisse, "duree", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", [_c("date-input", {
      staticStyle: {
        "min-width": "250px"
      },
      attrs: {
        value: nv_ligne_caisse.echeance,
        background: "background: #00ffff21",
        color: "color: #000"
      },
      on: {
        input: function input($event) {
          return _vm.formDataVars2($event, idx_, "nv_lignes_caisse_1", "echeance");
        }
      }
    })], 1), _vm._v(" "), _c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: nv_ligne_caisse.taux,
        expression: "nv_ligne_caisse.taux"
      }],
      staticClass: "form-control",
      "class": {
        equipe: (nv_ligne_caisse === null || nv_ligne_caisse === void 0 ? void 0 : nv_ligne_caisse.cameFrom) == "tb_8"
      },
      staticStyle: {
        background: "#00ffff21",
        color: "#000",
        width: "60px"
      },
      attrs: {
        type: "number"
      },
      domProps: {
        value: nv_ligne_caisse.taux
      },
      on: {
        change: function change($event) {
          return _vm.handleInput();
        },
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(nv_ligne_caisse, "taux", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: nv_ligne_caisse.type,
        expression: "nv_ligne_caisse.type"
      }],
      staticClass: "form-control",
      "class": {
        equipe: (nv_ligne_caisse === null || nv_ligne_caisse === void 0 ? void 0 : nv_ligne_caisse.cameFrom) == "tb_8"
      },
      staticStyle: {
        background: "#00ffff21",
        color: "#000",
        width: "60px"
      },
      attrs: {
        disabled: "",
        title: nv_ligne_caisse.type == "RI" ? "Renouvellement identique" : nv_ligne_caisse.type == "RH" ? "Renouvellement à la hausse" : nv_ligne_caisse.type == "RB" ? "Renouvellement à la baisse" : ""
      },
      domProps: {
        value: nv_ligne_caisse.type
      },
      on: {
        change: function change($event) {
          return _vm.handleInput();
        },
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(nv_ligne_caisse, "type", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", [_c("button", {
      staticStyle: {
        "background-color": "#ee6a00",
        color: "#ffffff",
        "border-radius": "15%",
        border: "none"
      },
      style: _vm.hasSuretes(nv_ligne_caisse),
      attrs: {
        type: "button",
        title: "Ajouter des suretés à cette ligne"
      },
      on: {
        click: function click($event) {
          return _vm.openModal("hypoModal", nv_ligne_caisse, "Nouvelles lignes");
        }
      }
    }, [_c("i", {
      staticClass: "icofont-list",
      attrs: {
        size: "21"
      }
    })])]), _vm._v(" "), idx_ == ((_vm$nv_lignes_caisse_ = _vm.nv_lignes_caisse_1) === null || _vm$nv_lignes_caisse_ === void 0 ? void 0 : _vm$nv_lignes_caisse_.length) - 1 ? _c("td", [_c("button", {
      staticStyle: {
        "background-color": "#2c3e50",
        color: "#ffffff",
        "border-radius": "15%",
        border: "none"
      },
      attrs: {
        type: "button",
        title: "Ajouter un nouvel article"
      },
      on: {
        click: function click($event) {
          return _vm.addMore3();
        }
      }
    }, [_c("plus-icon", {
      staticClass: "custom-class",
      attrs: {
        size: "21"
      }
    })], 1)]) : _vm._e()]);
  }) : _vm._e(), _vm._v(" "), _vm._l(_vm.nv_lignes_caisse_2, function (nv_ligne_caisse, idx_) {
    return _c("tr", {
      key: idx_ + "nv_lg_2"
    }, [_c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: nv_ligne_caisse.banque,
        expression: "nv_ligne_caisse.banque"
      }],
      staticClass: "form-control",
      staticStyle: {
        width: "200px"
      },
      attrs: {
        type: "text",
        readonly: ""
      },
      domProps: {
        value: nv_ligne_caisse.banque
      },
      on: {
        change: function change($event) {
          return _vm.handleInput();
        },
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(nv_ligne_caisse, "banque", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", [_c("select", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: nv_ligne_caisse.ligne,
        expression: "nv_ligne_caisse.ligne"
      }],
      staticClass: "form-select",
      "class": {
        equipe: (nv_ligne_caisse === null || nv_ligne_caisse === void 0 ? void 0 : nv_ligne_caisse.cameFrom) == "tb_8"
      },
      on: {
        change: [function ($event) {
          var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
            return o.selected;
          }).map(function (o) {
            var val = "_value" in o ? o._value : o.value;
            return val;
          });
          _vm.$set(nv_ligne_caisse, "ligne", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
        }, function ($event) {
          return _vm.handleInput();
        }]
      }
    }, [_c("option", {
      domProps: {
        value: ""
      }
    }), _vm._v(" "), nv_ligne_caisse.ligne != "" ? _c("option", {
      domProps: {
        value: nv_ligne_caisse.ligne
      }
    }, [_vm._v(_vm._s(nv_ligne_caisse.ligne))]) : _vm._e(), _vm._v(" "), _vm._l(_vm.f8Constants.tous_les_lignes_filtres, function (line, indexL) {
      return _c("option", {
        key: indexL + "4z_2",
        domProps: {
          value: line.libelle
        }
      }, [_vm._v(_vm._s(line.libelle) + "\n                                    ")]);
    })], 2)]), _vm._v(" "), _c("td", [_c("select", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: nv_ligne_caisse.statut,
        expression: "nv_ligne_caisse.statut"
      }],
      staticClass: "form-select",
      "class": {
        equipe: (nv_ligne_caisse === null || nv_ligne_caisse === void 0 ? void 0 : nv_ligne_caisse.cameFrom) == "tb_8"
      },
      attrs: {
        title: nv_ligne_caisse.statut
      },
      on: {
        change: function change($event) {
          var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
            return o.selected;
          }).map(function (o) {
            var val = "_value" in o ? o._value : o.value;
            return val;
          });
          _vm.$set(nv_ligne_caisse, "statut", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
        }
      }
    }, [_c("option", {
      domProps: {
        value: "Nouveau"
      }
    }, [_vm._v("Nouveau")])])]), _vm._v(" "), _c("td", [_c("currency-input2", {
      "class": {
        equipe: (nv_ligne_caisse === null || nv_ligne_caisse === void 0 ? void 0 : nv_ligne_caisse.cameFrom) == "tb_8"
      },
      attrs: {
        "default-typing": false
      },
      on: {
        change: function change($event) {
          return _vm.handleLignesExis("nv_lignes_caisse_2", idx_, "montant");
        }
      },
      model: {
        value: nv_ligne_caisse.montant,
        callback: function callback($$v) {
          _vm.$set(nv_ligne_caisse, "montant", $$v);
        },
        expression: "nv_ligne_caisse.montant"
      }
    })], 1), _vm._v(" "), _c("td", [_c("currency-input2", {
      "class": {
        equipe: (nv_ligne_caisse === null || nv_ligne_caisse === void 0 ? void 0 : nv_ligne_caisse.cameFrom) == "tb_8"
      },
      attrs: {
        "default-typing": false
      },
      on: {
        change: function change($event) {
          return _vm.handleInput();
        }
      },
      model: {
        value: nv_ligne_caisse.proposition,
        callback: function callback($$v) {
          _vm.$set(nv_ligne_caisse, "proposition", $$v);
        },
        expression: "nv_ligne_caisse.proposition"
      }
    })], 1), _vm._v(" "), _c("td", [_c("currency-input2", {
      "class": {
        equipe: (nv_ligne_caisse === null || nv_ligne_caisse === void 0 ? void 0 : nv_ligne_caisse.cameFrom) == "tb_8"
      },
      attrs: {
        "default-typing": false
      },
      on: {
        change: function change($event) {
          return _vm.handleInput();
        }
      },
      model: {
        value: nv_ligne_caisse.encours,
        callback: function callback($$v) {
          _vm.$set(nv_ligne_caisse, "encours", $$v);
        },
        expression: "nv_ligne_caisse.encours"
      }
    })], 1), _vm._v(" "), _c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: nv_ligne_caisse.duree,
        expression: "nv_ligne_caisse.duree"
      }],
      staticClass: "form-control",
      "class": {
        equipe: (nv_ligne_caisse === null || nv_ligne_caisse === void 0 ? void 0 : nv_ligne_caisse.cameFrom) == "tb_8"
      },
      staticStyle: {
        width: "80px"
      },
      attrs: {
        type: "number"
      },
      domProps: {
        value: nv_ligne_caisse.duree
      },
      on: {
        change: function change($event) {
          return _vm.handleInput();
        },
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(nv_ligne_caisse, "duree", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", [_c("date-input", {
      staticStyle: {
        "min-width": "250px"
      },
      attrs: {
        value: nv_ligne_caisse.echeance
      },
      on: {
        input: function input($event) {
          return _vm.formDataVars2($event, idx_, "nv_lignes_caisse_2", "echeance");
        }
      }
    })], 1), _vm._v(" "), _c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: nv_ligne_caisse.taux,
        expression: "nv_ligne_caisse.taux"
      }],
      staticClass: "form-control",
      "class": {
        equipe: (nv_ligne_caisse === null || nv_ligne_caisse === void 0 ? void 0 : nv_ligne_caisse.cameFrom) == "tb_8"
      },
      staticStyle: {
        width: "60px"
      },
      attrs: {
        type: "number"
      },
      domProps: {
        value: nv_ligne_caisse.taux
      },
      on: {
        change: function change($event) {
          return _vm.handleInput();
        },
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(nv_ligne_caisse, "taux", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td"), _vm._v(" "), _c("td", [_c("button", {
      staticStyle: {
        "background-color": "#ee6a00",
        color: "#ffffff",
        "border-radius": "15%",
        border: "none"
      },
      style: _vm.hasSuretes(nv_ligne_caisse),
      attrs: {
        type: "button",
        title: "Ajouter des suretés à cette ligne"
      },
      on: {
        click: function click($event) {
          return _vm.openModal("hypoModal", nv_ligne_caisse, "Nouvelles lignes");
        }
      }
    }, [_c("i", {
      staticClass: "icofont-list",
      attrs: {
        size: "21"
      }
    })])]), _vm._v(" "), _c("td", [_c("button", {
      staticStyle: {
        "background-color": "transparent",
        border: "none"
      },
      attrs: {
        type: "button",
        title: "Supprimer cette action"
      },
      on: {
        click: function click($event) {
          return _vm.remove3(idx_);
        }
      }
    }, [_c("trash-icon", {
      staticClass: "custom-class",
      attrs: {
        size: "21"
      }
    })], 1)])]);
  }), _vm._v(" "), _c("tr", [_vm._m(1), _vm._v(" "), _c("td", [_c("currency-input2", {
    staticClass: "form-control",
    staticStyle: {
      "min-width": "200px"
    },
    attrs: {
      "default-typing": false,
      readonly: ""
    },
    model: {
      value: _vm.formDataToBeWatched.st_caisse_nouvelles_lignes_montant,
      callback: function callback($$v) {
        _vm.$set(_vm.formDataToBeWatched, "st_caisse_nouvelles_lignes_montant", $$v);
      },
      expression: "formDataToBeWatched.st_caisse_nouvelles_lignes_montant"
    }
  })], 1), _vm._v(" "), _c("td", [_c("currency-input2", {
    staticClass: "form-control",
    staticStyle: {
      "min-width": "200px"
    },
    attrs: {
      "default-typing": false,
      readonly: ""
    },
    model: {
      value: _vm.formDataToBeWatched.st_caisse_nouvelles_lignes_proposition,
      callback: function callback($$v) {
        _vm.$set(_vm.formDataToBeWatched, "st_caisse_nouvelles_lignes_proposition", $$v);
      },
      expression: "formDataToBeWatched.st_caisse_nouvelles_lignes_proposition"
    }
  })], 1)])], 2)]), _vm._v(" "), _c("br"), _vm._v(" "), _c("b", [_vm._v("Engagement signature")]), _vm._v(" "), _c("table", {
    staticClass: "table table-borderless"
  }, [_c("thead", [_c("tr", {
    staticClass: "text-center",
    staticStyle: {
      "vertical-align": "center"
    }
  }, [_c("th", [_vm._v("Banque")]), _vm._v(" "), _c("th", [_vm._v("Lignes")]), _vm._v(" "), _c("th", [_vm._v("Statut")]), _vm._v(" "), _c("th", [_vm._v("Montant (demandé)")]), _vm._v(" "), _c("th", [_vm._v("Proposition (autorisation)")]), _vm._v(" "), _c("th", [_c("span", [_vm._v("Encours au")]), _vm._v(" "), _c("date-input", {
    staticStyle: {
      "min-width": "250px"
    },
    attrs: {
      value: _vm.formDataToBeWatched.encours_au,
      id: "encours_au",
      background: "background: #00ffff21",
      color: "color: #000"
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1), _vm._v(" "), _c("th", [_vm._v("Durée (mois)")]), _vm._v(" "), _c("th", [_vm._v("Echeance")]), _vm._v(" "), _c("th", [_vm._v("Taux")]), _vm._v(" "), _c("th"), _vm._v(" "), _c("th")])]), _vm._v(" "), _c("tbody", [_vm.nv_lignes_signature_1.length > 0 ? _vm._l(_vm.nv_lignes_signature_1, function (nv_ligne_sign, i) {
    var _vm$nv_lignes_signatu;
    return _c("tr", {
      key: i + "lg_ext"
    }, [_c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: nv_ligne_sign.banque,
        expression: "nv_ligne_sign.banque"
      }],
      staticClass: "form-control",
      staticStyle: {
        width: "200px"
      },
      attrs: {
        disabled: true,
        type: "text"
      },
      domProps: {
        value: nv_ligne_sign.banque
      },
      on: {
        change: function change($event) {
          return _vm.handleInput();
        },
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(nv_ligne_sign, "banque", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", [nv_ligne_sign.ligne == "" ? _c("select", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: nv_ligne_sign.ligne,
        expression: "nv_ligne_sign.ligne"
      }],
      staticClass: "form-select",
      "class": {
        equipe: (nv_ligne_sign === null || nv_ligne_sign === void 0 ? void 0 : nv_ligne_sign.cameFrom) == "tb_8"
      },
      staticStyle: {
        background: "#e9ecef",
        color: "#000"
      },
      attrs: {
        disabled: true
      },
      on: {
        change: [function ($event) {
          var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
            return o.selected;
          }).map(function (o) {
            var val = "_value" in o ? o._value : o.value;
            return val;
          });
          _vm.$set(nv_ligne_sign, "ligne", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
        }, function ($event) {
          return _vm.handleInput();
        }]
      }
    }, [_c("option", {
      domProps: {
        value: ""
      }
    }), _vm._v(" "), _vm._l(_vm.f8Constants.lignes_engagements_signatures_filtres, function (line, indexL) {
      return _c("option", {
        key: indexL + "4z_1",
        domProps: {
          value: line.libelle
        }
      }, [_vm._v(_vm._s(line.libelle) + "\n                                        ")]);
    })], 2) : _c("select", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: nv_ligne_sign.ligne,
        expression: "nv_ligne_sign.ligne"
      }],
      staticClass: "form-select",
      "class": {
        equipe: (nv_ligne_sign === null || nv_ligne_sign === void 0 ? void 0 : nv_ligne_sign.cameFrom) == "tb_8"
      },
      staticStyle: {
        background: "#e9ecef",
        color: "#000"
      },
      attrs: {
        disabled: true
      },
      on: {
        change: [function ($event) {
          var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
            return o.selected;
          }).map(function (o) {
            var val = "_value" in o ? o._value : o.value;
            return val;
          });
          _vm.$set(nv_ligne_sign, "ligne", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
        }, function ($event) {
          return _vm.handleInput();
        }]
      }
    }, [_c("option", {
      domProps: {
        value: ""
      }
    }), _vm._v(" "), _vm._l(_vm.f8Constants.lignes_engagements_signatures, function (line, indexL) {
      return _c("option", {
        key: indexL + "4z_1",
        domProps: {
          value: line.libelle
        }
      }, [_vm._v(_vm._s(line.libelle) + "\n                                        ")]);
    })], 2)]), _vm._v(" "), _c("td", [_c("select", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: nv_ligne_sign.statut,
        expression: "nv_ligne_sign.statut"
      }],
      staticClass: "form-select",
      "class": {
        equipe: (nv_ligne_sign === null || nv_ligne_sign === void 0 ? void 0 : nv_ligne_sign.cameFrom) == "tb_8"
      },
      attrs: {
        title: nv_ligne_sign.statut
      },
      on: {
        change: [function ($event) {
          var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
            return o.selected;
          }).map(function (o) {
            var val = "_value" in o ? o._value : o.value;
            return val;
          });
          _vm.$set(nv_ligne_sign, "statut", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
        }, function ($event) {
          return _vm.computedTypeStatus("nv_lignes_signature_1", i);
        }]
      }
    }, [_c("option", {
      domProps: {
        value: "Renouvellement"
      }
    }, [_vm._v("Renouvellement")]), _vm._v(" "), _c("option", {
      domProps: {
        value: "Abandon"
      }
    }, [_vm._v("Abandon")])])]), _vm._v(" "), _c("td", [_c("currency-input2", {
      "class": {
        equipe: (nv_ligne_sign === null || nv_ligne_sign === void 0 ? void 0 : nv_ligne_sign.cameFrom) == "tb_8"
      },
      attrs: {
        disabled: true,
        "default-typing": false
      },
      on: {
        change: function change($event) {
          return _vm.handleLignesExis("nv_lignes_signature_1", i, "montant");
        }
      },
      model: {
        value: nv_ligne_sign.montant,
        callback: function callback($$v) {
          _vm.$set(nv_ligne_sign, "montant", $$v);
        },
        expression: "nv_ligne_sign.montant"
      }
    })], 1), _vm._v(" "), _c("td", [_c("currency-input2", {
      "class": {
        equipe: (nv_ligne_sign === null || nv_ligne_sign === void 0 ? void 0 : nv_ligne_sign.cameFrom) == "tb_8"
      },
      attrs: {
        "default-typing": false
      },
      on: {
        change: function change($event) {
          return _vm.computedTypeStatus("nv_lignes_signature_1", i);
        }
      },
      model: {
        value: nv_ligne_sign.proposition,
        callback: function callback($$v) {
          _vm.$set(nv_ligne_sign, "proposition", $$v);
        },
        expression: "nv_ligne_sign.proposition"
      }
    })], 1), _vm._v(" "), _c("td", [_c("currency-input2", {
      "class": {
        equipe: (nv_ligne_sign === null || nv_ligne_sign === void 0 ? void 0 : nv_ligne_sign.cameFrom) == "tb_8"
      },
      attrs: {
        "default-typing": false
      },
      on: {
        change: function change($event) {
          return _vm.handleInput();
        }
      },
      model: {
        value: nv_ligne_sign.encours,
        callback: function callback($$v) {
          _vm.$set(nv_ligne_sign, "encours", $$v);
        },
        expression: "nv_ligne_sign.encours"
      }
    })], 1), _vm._v(" "), _c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: nv_ligne_sign.duree,
        expression: "nv_ligne_sign.duree"
      }],
      staticClass: "form-control",
      "class": {
        equipe: (nv_ligne_sign === null || nv_ligne_sign === void 0 ? void 0 : nv_ligne_sign.cameFrom) == "tb_8"
      },
      staticStyle: {
        width: "80px"
      },
      attrs: {
        type: "number"
      },
      domProps: {
        value: nv_ligne_sign.duree
      },
      on: {
        change: function change($event) {
          return _vm.handleInput();
        },
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(nv_ligne_sign, "duree", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", [_c("date-input", {
      staticStyle: {
        "min-width": "250px"
      },
      attrs: {
        value: nv_ligne_sign.echeance,
        background: "background: #00ffff21",
        color: "color: #000"
      },
      on: {
        input: function input($event) {
          return _vm.formDataVars2($event, i, "nv_lignes_signature_1", "echeance");
        }
      }
    })], 1), _vm._v(" "), _c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: nv_ligne_sign.taux,
        expression: "nv_ligne_sign.taux"
      }],
      staticClass: "form-control",
      "class": {
        equipe: (nv_ligne_sign === null || nv_ligne_sign === void 0 ? void 0 : nv_ligne_sign.cameFrom) == "tb_8"
      },
      staticStyle: {
        width: "60px"
      },
      attrs: {
        type: "number"
      },
      domProps: {
        value: nv_ligne_sign.taux
      },
      on: {
        change: function change($event) {
          return _vm.handleInput();
        },
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(nv_ligne_sign, "taux", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: nv_ligne_sign.type,
        expression: "nv_ligne_sign.type"
      }],
      staticClass: "form-control",
      "class": {
        equipe: (nv_ligne_sign === null || nv_ligne_sign === void 0 ? void 0 : nv_ligne_sign.cameFrom) == "tb_8"
      },
      staticStyle: {
        width: "60px"
      },
      attrs: {
        disabled: "",
        title: nv_ligne_sign.type == "RI" ? "Renouvellement identique" : nv_ligne_sign.type == "RH" ? "Renouvellement à la hausse" : nv_ligne_sign.type == "RB" ? "Renouvellement à la baisse" : ""
      },
      domProps: {
        value: nv_ligne_sign.type
      },
      on: {
        change: function change($event) {
          return _vm.handleInput();
        },
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(nv_ligne_sign, "type", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", [_c("button", {
      staticStyle: {
        "background-color": "#ee6a00",
        color: "#ffffff",
        "border-radius": "15%",
        border: "none"
      },
      style: _vm.hasSuretes(nv_ligne_sign),
      attrs: {
        type: "button",
        title: "Ajouter des suretés à cette ligne"
      },
      on: {
        click: function click($event) {
          return _vm.openModal("hypoModal", nv_ligne_sign, "Nouvelles lignes");
        }
      }
    }, [_c("i", {
      staticClass: "icofont-list",
      attrs: {
        size: "21"
      }
    })])]), _vm._v(" "), i == ((_vm$nv_lignes_signatu = _vm.nv_lignes_signature_1) === null || _vm$nv_lignes_signatu === void 0 ? void 0 : _vm$nv_lignes_signatu.length) - 1 ? _c("td", [_c("button", {
      staticStyle: {
        "background-color": "#2c3e50",
        color: "#ffffff",
        "border-radius": "15%",
        border: "none"
      },
      attrs: {
        type: "button",
        title: "Ajouter une nouvelle ligne"
      },
      on: {
        click: function click($event) {
          return _vm.addMore4();
        }
      }
    }, [_c("plus-icon", {
      staticClass: "custom-class",
      attrs: {
        size: "21"
      }
    })], 1)]) : _vm._e()]);
  }) : _vm._e(), _vm._v(" "), _vm._l(_vm.nv_lignes_signature_2, function (nv_ligne_sign, i) {
    var _vm$nv_lignes_signatu2;
    return _c("tr", {
      key: i + "lg_exv"
    }, [_c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: nv_ligne_sign.banque,
        expression: "nv_ligne_sign.banque"
      }],
      staticClass: "form-control",
      attrs: {
        type: "text",
        readonly: ""
      },
      domProps: {
        value: nv_ligne_sign.banque
      },
      on: {
        change: function change($event) {
          return _vm.handleInput();
        },
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(nv_ligne_sign, "banque", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", [nv_ligne_sign.ligne == "" ? _c("select", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: nv_ligne_sign.ligne,
        expression: "nv_ligne_sign.ligne"
      }],
      staticClass: "form-select",
      "class": {
        equipe: (nv_ligne_sign === null || nv_ligne_sign === void 0 ? void 0 : nv_ligne_sign.cameFrom) == "tb_8"
      },
      on: {
        change: [function ($event) {
          var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
            return o.selected;
          }).map(function (o) {
            var val = "_value" in o ? o._value : o.value;
            return val;
          });
          _vm.$set(nv_ligne_sign, "ligne", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
        }, function ($event) {
          return _vm.handleInput();
        }]
      }
    }, [_c("option", {
      domProps: {
        value: ""
      }
    }), _vm._v(" "), _vm._l(_vm.lignes_engagements_signatures_filtres, function (line, indexL) {
      return _c("option", {
        key: indexL + "4eg",
        domProps: {
          value: line.libelle
        }
      }, [_vm._v(_vm._s(line.libelle) + "\n                                    ")]);
    })], 2) : _c("select", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: nv_ligne_sign.ligne,
        expression: "nv_ligne_sign.ligne"
      }],
      staticClass: "form-select",
      "class": {
        equipe: (nv_ligne_sign === null || nv_ligne_sign === void 0 ? void 0 : nv_ligne_sign.cameFrom) == "tb_8"
      },
      on: {
        change: [function ($event) {
          var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
            return o.selected;
          }).map(function (o) {
            var val = "_value" in o ? o._value : o.value;
            return val;
          });
          _vm.$set(nv_ligne_sign, "ligne", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
        }, function ($event) {
          return _vm.handleInput();
        }]
      }
    }, [_c("option", {
      domProps: {
        value: ""
      }
    }), _vm._v(" "), _vm._l(_vm.lignes_engagements_signatures, function (line, indexL) {
      return _c("option", {
        key: indexL + "4eg",
        domProps: {
          value: line.libelle
        }
      }, [_vm._v(_vm._s(line.libelle) + "\n                                    ")]);
    })], 2)]), _vm._v(" "), _c("td", [_c("select", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: nv_ligne_sign.statut,
        expression: "nv_ligne_sign.statut"
      }],
      staticClass: "form-select",
      "class": {
        equipe: (nv_ligne_sign === null || nv_ligne_sign === void 0 ? void 0 : nv_ligne_sign.cameFrom) == "tb_8"
      },
      attrs: {
        title: nv_ligne_sign.statut
      },
      on: {
        change: function change($event) {
          var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
            return o.selected;
          }).map(function (o) {
            var val = "_value" in o ? o._value : o.value;
            return val;
          });
          _vm.$set(nv_ligne_sign, "statut", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
        }
      }
    }, [_c("option", {
      domProps: {
        value: "Nouveau"
      }
    }, [_vm._v("Nouveau")])])]), _vm._v(" "), _c("td", [_c("currency-input2", {
      "class": {
        equipe: (nv_ligne_sign === null || nv_ligne_sign === void 0 ? void 0 : nv_ligne_sign.cameFrom) == "tb_8"
      },
      attrs: {
        "default-typing": false
      },
      on: {
        change: function change($event) {
          return _vm.handleLignesExis("nv_lignes_signature_2", i, "montant");
        }
      },
      model: {
        value: nv_ligne_sign.montant,
        callback: function callback($$v) {
          _vm.$set(nv_ligne_sign, "montant", $$v);
        },
        expression: "nv_ligne_sign.montant"
      }
    })], 1), _vm._v(" "), _c("td", [_c("currency-input2", {
      "class": {
        equipe: (nv_ligne_sign === null || nv_ligne_sign === void 0 ? void 0 : nv_ligne_sign.cameFrom) == "tb_8"
      },
      attrs: {
        "default-typing": false
      },
      on: {
        change: function change($event) {
          return _vm.handleInput();
        }
      },
      model: {
        value: nv_ligne_sign.proposition,
        callback: function callback($$v) {
          _vm.$set(nv_ligne_sign, "proposition", $$v);
        },
        expression: "nv_ligne_sign.proposition"
      }
    })], 1), _vm._v(" "), _c("td", [_c("currency-input2", {
      "class": {
        equipe: (nv_ligne_sign === null || nv_ligne_sign === void 0 ? void 0 : nv_ligne_sign.cameFrom) == "tb_8"
      },
      attrs: {
        "default-typing": false
      },
      on: {
        change: function change($event) {
          return _vm.handleInput();
        }
      },
      model: {
        value: nv_ligne_sign.encours,
        callback: function callback($$v) {
          _vm.$set(nv_ligne_sign, "encours", $$v);
        },
        expression: "nv_ligne_sign.encours"
      }
    })], 1), _vm._v(" "), _c("td", [_c("currency-input2", {
      "class": {
        equipe: (nv_ligne_sign === null || nv_ligne_sign === void 0 ? void 0 : nv_ligne_sign.cameFrom) == "tb_8"
      },
      staticStyle: {
        width: "80px"
      },
      attrs: {
        "default-typing": false
      },
      on: {
        change: function change($event) {
          return _vm.handleInput();
        }
      },
      model: {
        value: nv_ligne_sign.duree,
        callback: function callback($$v) {
          _vm.$set(nv_ligne_sign, "duree", $$v);
        },
        expression: "nv_ligne_sign.duree"
      }
    })], 1), _vm._v(" "), _c("td", [_c("date-input", {
      staticStyle: {
        "min-width": "250px"
      },
      attrs: {
        value: nv_ligne_sign.echeance
      },
      on: {
        input: function input($event) {
          return _vm.formDataVars2($event, i, "nv_lignes_signature_2", "echeance");
        }
      }
    })], 1), _vm._v(" "), _c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: nv_ligne_sign.taux,
        expression: "nv_ligne_sign.taux"
      }],
      staticClass: "form-control",
      "class": {
        equipe: (nv_ligne_sign === null || nv_ligne_sign === void 0 ? void 0 : nv_ligne_sign.cameFrom) == "tb_8"
      },
      staticStyle: {
        width: "60px"
      },
      attrs: {
        type: "number"
      },
      domProps: {
        value: nv_ligne_sign.taux
      },
      on: {
        change: function change($event) {
          return _vm.handleInput();
        },
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(nv_ligne_sign, "taux", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td"), _vm._v(" "), _c("td", [_c("button", {
      staticStyle: {
        "background-color": "#ee6a00",
        color: "#ffffff",
        "border-radius": "15%",
        border: "none"
      },
      style: _vm.hasSuretes(nv_ligne_sign),
      attrs: {
        type: "button",
        title: "Ajouter des suretés à cette ligne"
      },
      on: {
        click: function click($event) {
          return _vm.openModal("hypoModal", nv_ligne_sign, "Nouvelles lignes");
        }
      }
    }, [_c("i", {
      staticClass: "icofont-list",
      attrs: {
        size: "21"
      }
    })])]), _vm._v(" "), ((_vm$nv_lignes_signatu2 = _vm.nv_lignes_signature_1) === null || _vm$nv_lignes_signatu2 === void 0 ? void 0 : _vm$nv_lignes_signatu2.length) == 0 && i == 0 ? _c("td", [_c("button", {
      staticStyle: {
        "background-color": "#2c3e50",
        color: "#ffffff",
        "border-radius": "15%",
        border: "none"
      },
      attrs: {
        type: "button",
        title: "Ajouter une nouvelle ligne"
      },
      on: {
        click: function click($event) {
          return _vm.addMore4();
        }
      }
    }, [_c("plus-icon", {
      staticClass: "custom-class",
      attrs: {
        size: "21"
      }
    })], 1)]) : _vm._e(), _vm._v(" "), i > 0 ? _c("td", [_c("button", {
      staticStyle: {
        "background-color": "transparent",
        border: "none"
      },
      attrs: {
        type: "button",
        title: "Supprimer cette action"
      },
      on: {
        click: function click($event) {
          return _vm.remove4(i);
        }
      }
    }, [_c("trash-icon", {
      staticClass: "custom-class",
      attrs: {
        size: "21"
      }
    })], 1)]) : _vm._e()]);
  }), _vm._v(" "), _c("tr", [_vm._m(2), _vm._v(" "), _c("td", [_c("currency-input2", {
    staticClass: "form-control",
    staticStyle: {
      "min-width": "200px"
    },
    attrs: {
      "default-typing": false,
      readonly: ""
    },
    model: {
      value: _vm.formDataToBeWatched.st_signature_nouvelles_lignes_montant,
      callback: function callback($$v) {
        _vm.$set(_vm.formDataToBeWatched, "st_signature_nouvelles_lignes_montant", $$v);
      },
      expression: "formDataToBeWatched.st_signature_nouvelles_lignes_montant"
    }
  })], 1), _vm._v(" "), _c("td", [_c("currency-input2", {
    staticClass: "form-control",
    staticStyle: {
      "min-width": "200px"
    },
    attrs: {
      "default-typing": false,
      readonly: ""
    },
    model: {
      value: _vm.formDataToBeWatched.st_signature_nouvelles_lignes_proposition,
      callback: function callback($$v) {
        _vm.$set(_vm.formDataToBeWatched, "st_signature_nouvelles_lignes_proposition", $$v);
      },
      expression: "formDataToBeWatched.st_signature_nouvelles_lignes_proposition"
    }
  })], 1)]), _vm._v(" "), _c("tr", [_vm._m(3), _vm._v(" "), _c("td", [_c("currency-input2", {
    staticClass: "form-control",
    staticStyle: {
      background: "#34495e",
      color: "#fff"
    },
    attrs: {
      "default-typing": false,
      readonly: ""
    },
    model: {
      value: _vm.formDataToBeWatched.total_nouvelles_lignes_montant,
      callback: function callback($$v) {
        _vm.$set(_vm.formDataToBeWatched, "total_nouvelles_lignes_montant", $$v);
      },
      expression: "formDataToBeWatched.total_nouvelles_lignes_montant"
    }
  })], 1), _vm._v(" "), _c("td", [_c("currency-input2", {
    staticClass: "form-control",
    staticStyle: {
      background: "#34495e",
      color: "#fff"
    },
    attrs: {
      "default-typing": false,
      readonly: ""
    },
    model: {
      value: _vm.formDataToBeWatched.total_nouvelles_lignes_proposition,
      callback: function callback($$v) {
        _vm.$set(_vm.formDataToBeWatched, "total_nouvelles_lignes_proposition", $$v);
      },
      expression: "formDataToBeWatched.total_nouvelles_lignes_proposition"
    }
  })], 1)])], 2)])]), _vm._v(" "), _c("br"), _vm._v(" "), _c("div", {
    staticClass: "col-md-12 mt-3 mb-3"
  }, [_vm._m(4), _vm._v(" "), _c("vue-editor", {
    attrs: {
      id: "comment_new_line"
    },
    on: {
      "update-value": function updateValue($event) {
        _vm.formDataToBeWatched[$event[0]] = $event[1];
      }
    },
    model: {
      value: _vm.formDataToBeWatched.comment_new_line,
      callback: function callback($$v) {
        _vm.$set(_vm.formDataToBeWatched, "comment_new_line", $$v);
      },
      expression: "formDataToBeWatched.comment_new_line"
    }
  })], 1), _vm._v(" "), _c("div", {
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
  }, [_vm._v("\n                Fermer le tableau\n            ")])]) : _c("div", {
    staticClass: "card card-width-height"
  }, [_c("br"), _vm._v(" "), _c("div", {
    staticClass: "card-header hdc pb-0 pt-2"
  }, [_c("h3", {
    staticClass: "head",
    attrs: {
      id: "f7-head"
    }
  }, [_vm._v("\n                    " + _vm._s(_vm.tb_display_name) + " : Synthèse des anciennes et nouvelles lignes\n                    "), _c("chevron-down-icon", {
    staticClass: "custom-class",
    staticStyle: {
      "float": "right",
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
  })], 1)])])], 1), _vm._v(" "), _c("div", {
    staticStyle: {
      position: "relative",
      "z-index": "999999999"
    }
  }, [_c("div", {
    staticClass: "modal fade modal-lg",
    attrs: {
      id: "instruction6",
      tabindex: "-1",
      "aria-labelledby": "instruction6",
      "aria-hidden": "true"
    }
  }, [_c("div", {
    staticClass: "modal-dialog",
    staticStyle: {
      width: "650px"
    }
  }, [_c("div", {
    staticClass: "modal-content"
  }, [_c("div", {
    staticClass: "modal-header"
  }, [_c("h5", {
    staticClass: "modal-title",
    attrs: {
      id: "instruction6"
    }
  }, [_vm._v("\n                            Instruction - " + _vm._s(_vm.tb_display_name) + " : Centrales\n                            risques - Adhésion au BIC(si applicable)\n                        ")]), _vm._v(" "), _c("button", {
    staticClass: "btn-close",
    attrs: {
      type: "button",
      "data-bs-dismiss": "modal",
      "aria-label": "Close"
    }
  })]), _vm._v(" "), _vm._m(5), _vm._v(" "), _vm._m(6)])])])]), _vm._v(" "), _c("note-modal", {
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
        var _vm$formDataToBeWatch2;
        (_vm$formDataToBeWatch2 = _vm.formDataToBeWatched.notes) === null || _vm$formDataToBeWatch2 === void 0 || _vm$formDataToBeWatch2.unshift($event);
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
  return _c("tr", [_c("th", {
    attrs: {
      colspan: "11"
    }
  }, [_vm._v("Nouvelles lignes (objet de la présente demande)")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {
    staticClass: "text-start",
    attrs: {
      colspan: "3"
    }
  }, [_c("label", [_c("b", [_vm._v("S/Total par caisse")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {
    staticClass: "text-start",
    attrs: {
      colspan: "3"
    }
  }, [_c("label", [_c("b", [_vm._v("S/Total par signature")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {
    staticClass: "text-start",
    attrs: {
      colspan: "3"
    }
  }, [_c("label", [_c("b", [_vm._v("Total")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_c("b", [_vm._v(" Commentaires")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "modal-body"
  }, [_c("img", {
    attrs: {
      src: "/images/capture_afg/centrale_risques_adhesion_au_bic.png",
      width: "100%; height:100%;"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "modal-footer"
  }, [_c("button", {
    staticClass: "btn btn-secondary",
    attrs: {
      type: "button",
      "data-bs-dismiss": "modal"
    }
  }, [_vm._v("\n                            Fermer\n                        ")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pv/nsia/dg/DG-CT2.vue?vue&type=style&index=0&id=f556c3c2&lang=css&scoped=true":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pv/nsia/dg/DG-CT2.vue?vue&type=style&index=0&id=f556c3c2&lang=css&scoped=true ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\ninput[data-v-f556c3c2] {\r\n    /*border: 1px solid red;*/\n}\n*[data-v-f556c3c2] {\r\n    font-family: \"Google sans\";\n}\nth[data-v-f556c3c2] {\r\n    font-size: 12px;\n}\nlabel[data-v-f556c3c2] {\r\n    height: 10px;\r\n    font-size: 13px;\n}\ninput[data-v-f556c3c2],\r\nselect[data-v-f556c3c2] {\r\n    height: 35px;\r\n    border-color: #34495e;\r\n    color: #57606f;\r\n    font-size: 13px;\r\n    font-weight: bold;\n}\r\n\r\n/* select{\r\n    width: 150px;\r\n} */\r\n\r\n/* textarea,\r\ninput[type=\"text\"],\r\ninput[type=\"date\"] {\r\n    width: 250px;\r\n} */\n.card-width-height[data-v-f556c3c2] {\r\n    width: 100%;\r\n    height: 100%;\n}\n.head[data-v-f556c3c2] {\r\n    color: #f1f2f6;\r\n    font-size: 22px;\n}\n.hdc[data-v-f556c3c2] {\r\n    background-color: #57606f;\n}\r\n\r\n/* Ajouter note */\n.badge-sm[data-v-f556c3c2] {\r\n    display: inline-block;\r\n    width: 15px;\r\n    height: 15px;\r\n    background: rgba(255, 0, 0, 0.882);\r\n    color: white;\r\n    font-size: 12px;\r\n    font-weight: 500;\r\n    border-radius: 100%;\r\n    position: absolute;\r\n    top: -20%;\r\n    left: 55%;\r\n    text-align: center;\n}\n.equipe[data-v-f556c3c2]{\r\n    background: #00ffff21;\r\n    color: #000;\n}\n.relook-header[data-v-f556c3c2] {\r\n    color: #000;\r\n    background-color: #f4f3f3;\r\n    padding: 5px;\r\n    border-bottom: 1px solid #b6b8bb;\n}\n.form-select[data-v-f556c3c2]{\r\n    min-width: 200px;\n}\n.form-control[data-v-f556c3c2]{\r\n    min-width: 100x;\n}\n.bg-relooker[data-v-f556c3c2] {\r\n    background-color: #2c3e50;\r\n    color: white;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pv/nsia/dg/DG-CT2.vue?vue&type=style&index=0&id=f556c3c2&lang=css&scoped=true":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pv/nsia/dg/DG-CT2.vue?vue&type=style&index=0&id=f556c3c2&lang=css&scoped=true ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DG_CT2_vue_vue_type_style_index_0_id_f556c3c2_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DG-CT2.vue?vue&type=style&index=0&id=f556c3c2&lang=css&scoped=true */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pv/nsia/dg/DG-CT2.vue?vue&type=style&index=0&id=f556c3c2&lang=css&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DG_CT2_vue_vue_type_style_index_0_id_f556c3c2_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DG_CT2_vue_vue_type_style_index_0_id_f556c3c2_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/pv/nsia/dg/DG-CT2.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/pv/nsia/dg/DG-CT2.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DG_CT2_vue_vue_type_template_id_f556c3c2_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DG-CT2.vue?vue&type=template&id=f556c3c2&scoped=true */ "./resources/js/components/pv/nsia/dg/DG-CT2.vue?vue&type=template&id=f556c3c2&scoped=true");
/* harmony import */ var _DG_CT2_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DG-CT2.vue?vue&type=script&lang=js */ "./resources/js/components/pv/nsia/dg/DG-CT2.vue?vue&type=script&lang=js");
/* harmony import */ var _DG_CT2_vue_vue_type_style_index_0_id_f556c3c2_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DG-CT2.vue?vue&type=style&index=0&id=f556c3c2&lang=css&scoped=true */ "./resources/js/components/pv/nsia/dg/DG-CT2.vue?vue&type=style&index=0&id=f556c3c2&lang=css&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _DG_CT2_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _DG_CT2_vue_vue_type_template_id_f556c3c2_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _DG_CT2_vue_vue_type_template_id_f556c3c2_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "f556c3c2",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/pv/nsia/dg/DG-CT2.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/pv/nsia/dg/DG-CT2.vue?vue&type=script&lang=js":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/pv/nsia/dg/DG-CT2.vue?vue&type=script&lang=js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DG_CT2_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DG-CT2.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pv/nsia/dg/DG-CT2.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DG_CT2_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/pv/nsia/dg/DG-CT2.vue?vue&type=style&index=0&id=f556c3c2&lang=css&scoped=true":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/components/pv/nsia/dg/DG-CT2.vue?vue&type=style&index=0&id=f556c3c2&lang=css&scoped=true ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DG_CT2_vue_vue_type_style_index_0_id_f556c3c2_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DG-CT2.vue?vue&type=style&index=0&id=f556c3c2&lang=css&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pv/nsia/dg/DG-CT2.vue?vue&type=style&index=0&id=f556c3c2&lang=css&scoped=true");


/***/ }),

/***/ "./resources/js/components/pv/nsia/dg/DG-CT2.vue?vue&type=template&id=f556c3c2&scoped=true":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/pv/nsia/dg/DG-CT2.vue?vue&type=template&id=f556c3c2&scoped=true ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DG_CT2_vue_vue_type_template_id_f556c3c2_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DG_CT2_vue_vue_type_template_id_f556c3c2_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DG_CT2_vue_vue_type_template_id_f556c3c2_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DG-CT2.vue?vue&type=template&id=f556c3c2&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pv/nsia/dg/DG-CT2.vue?vue&type=template&id=f556c3c2&scoped=true");


/***/ }),

/***/ "./resources/js/services/nsia/f8-data-extractor.js":
/*!*********************************************************!*\
  !*** ./resources/js/services/nsia/f8-data-extractor.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ro_data_extractor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ro-data-extractor */ "./resources/js/services/ro-data-extractor.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _classPrivateMethodInitSpec(e, a) { _checkPrivateRedeclaration(e, a), a.add(e); }
function _classPrivateFieldInitSpec(e, t, a) { _checkPrivateRedeclaration(e, t), t.set(e, a); }
function _checkPrivateRedeclaration(e, t) { if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object"); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classPrivateFieldGet(s, a) { return s.get(_assertClassBrand(s, a)); }
function _classPrivateFieldSet(s, a, r) { return s.set(_assertClassBrand(s, a), r), r; }
function _assertClassBrand(e, t, n) { if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError("Private element is not present on this object"); }


// const oldLineVars = [ "lignes_existantes", "lignes_existantes_engagements_signatures"]
var oldLineVars = {
  oldLines: "lignes_existantes",
  oldLinesEngSig: "lignes_existantes_engagements_signatures"
};
var newLineVars = {
  newLines: "nouvelles_lignes_caisse",
  newLinesEngSig: "nouvelles_lignes_signature"
};
/**
 *
 *
 * @class F8DataExtractor
 * @extends {RODataExtractor}
 * @author Edane
 */
var _oldLines = /*#__PURE__*/new WeakMap();
var _newLines = /*#__PURE__*/new WeakMap();
var _oldLinesComment = /*#__PURE__*/new WeakMap();
var _oldLinesgarantiesSpecifiques = /*#__PURE__*/new WeakMap();
var _oldLinesgarantiesGenerales = /*#__PURE__*/new WeakMap();
var _newLinesgarantiesSpecifiques = /*#__PURE__*/new WeakMap();
var _newLinesgarantiesGenerales = /*#__PURE__*/new WeakMap();
var _newLinesComment = /*#__PURE__*/new WeakMap();
var _encoursAu = /*#__PURE__*/new WeakMap();
var _totaux = /*#__PURE__*/new WeakMap();
var _F8DataExtractor_brand = /*#__PURE__*/new WeakSet();
var F8DataExtractor = /*#__PURE__*/function (_RODataExtractor) {
  function F8DataExtractor() {
    var _this;
    _classCallCheck(this, F8DataExtractor);
    _this = _callSuper(this, F8DataExtractor);
    //console.log('==== In F8 Data extractor ====');
    _classPrivateMethodInitSpec(_this, _F8DataExtractor_brand);
    _defineProperty(_this, "dossier_credit", null);
    _classPrivateFieldInitSpec(_this, _oldLines, []);
    _classPrivateFieldInitSpec(_this, _newLines, []);
    _classPrivateFieldInitSpec(_this, _oldLinesComment, "");
    _classPrivateFieldInitSpec(_this, _oldLinesgarantiesSpecifiques, null);
    _classPrivateFieldInitSpec(_this, _oldLinesgarantiesGenerales, null);
    _classPrivateFieldInitSpec(_this, _newLinesgarantiesSpecifiques, null);
    _classPrivateFieldInitSpec(_this, _newLinesgarantiesGenerales, null);
    _classPrivateFieldInitSpec(_this, _newLinesComment, "");
    _classPrivateFieldInitSpec(_this, _encoursAu, '');
    _classPrivateFieldInitSpec(_this, _totaux, {
      st_caisse_ligne_existantes_autorisation: "",
      st_caisse_ligne_existantes_encours: "",
      st_caisse_nouvelles_lignes_montant: "",
      st_caisse_nouvelles_lignes_proposition: "",
      st_signature_ligne_existantes_autorisation: "",
      st_signature_ligne_existantes_encours: "",
      st_signature_nouvelles_lignes_montant: "",
      st_signature_nouvelles_lignes_proposition: '',
      total_lignes_existantes_encours: '',
      total_lignes_existantes_autorisation: '',
      total_nouvelles_lignes_proposition: '',
      total_nouvelles_lignes_montant: ''
    });
    return _this;
  }

  /**
   *
   *
   * @param {*} dossier_credit
   * @param {string} credPubToUse
   * @return <br> {
   * oldLines: any[], <br>
   * newLines: any[], <br>
   * oldLinesComment: string, <br>
   * newLinesComment: string, <br>
   * encoursAu: string, <br>
   * totaux: { <br>
   *      st_caisse_ligne_existantes_autorisation : string, <br>
   *      st_caisse_ligne_existantes_encours : string, <br>
   *      st_caisse_nouvelles_lignes_montant : string, <br>
   *      st_caisse_nouvelles_lignes_proposition : string, <br>
   *      st_signature_ligne_existantes_autorisation : string, <br>
   *      st_signature_ligne_existantes_encours : string, <br>
   *      st_signature_nouvelles_lignes_montant : string, <br>
   *      st_signature_nouvelles_lignes_proposition : string, <br>
   *      total_lignes_existantes_encours: string, <br>
   *      total_lignes_existantes_autorisation: string, <br>
   *      total_nouvelles_lignes_proposition: string, <br>
   *      total_nouvelles_lignes_montant: string <br>
   * }, <br>
   * oldLinesgarantiesSpecifiques: any[], <br>
   * oldLinesgarantiesGenerales: any[], <br>
   * newLinesgarantiesSpecifiques: any[], <br>
   * newLinesgarantiesGenerales: any[], <br>
   * } 
   * @description Extract data about f8
   * 
   * @memberof F8DataExtractor
   */
  _inherits(F8DataExtractor, _RODataExtractor);
  return _createClass(F8DataExtractor, [{
    key: "getData",
    value: function getData(dossier_credit, credPubToUse) {
      var _this$dossier_credit$,
        _this$dossier_credit$2,
        _this$dossier_credit$3,
        _this$dossier_credit$4,
        _this2 = this,
        _this$dossier_credit,
        _this$dossier_credit2;
      // console.log('dossier_credit', dossier_credit);
      this.dossier_credit = _objectSpread({}, dossier_credit);
      this.credPubToUse = credPubToUse;
      if (this.dossier_credit[this.credPubToUse] == undefined) {
        return {
          oldLines: [],
          newLines: [],
          oldLinesComment: [],
          newLinesComment: [],
          encoursAu: [],
          totaux: [],
          oldLinesgarantiesSpecifiques: [],
          oldLinesgarantiesGenerales: [],
          newLinesgarantiesSpecifiques: [],
          newLinesgarantiesGenerales: [],
          commentaire_lignes_existantes_garanties_nd: '',
          commentaire_nouvelles_lignes_garanties_nd: ''
        };
      }

      // console.log('credPubToUse', credPubToUse);
      var hypotheques = this.dossier_credit[this.credPubToUse]['hypotheques'];
      var gages = this.dossier_credit[this.credPubToUse]['gages'];
      var cautionnement_solidaires = this.dossier_credit[this.credPubToUse]['cautionnement_solidaires'];
      var cautionnement_solidaires_personnes_morales = this.dossier_credit[this.credPubToUse]['cautionnement_solidaires_personnes_morales'];
      var caution_hypothecaires = this.dossier_credit[this.credPubToUse]['caution_hypothecaires'];
      var protection_financieres = this.dossier_credit[this.credPubToUse]['protection_financieres'];
      var cond_particulieres = this.dossier_credit[this.credPubToUse]['cond_particulieres'];
      var suretes_diverses = this.dossier_credit[this.credPubToUse]['suretes_diverses'].filter(function (el) {
        return el === null || el === void 0 ? void 0 : el.isChecked;
      });
      var autres_suretes_diverses = this.dossier_credit[this.credPubToUse]['autres_suretes_diverses'];
      var nantissements = (_this$dossier_credit$ = (_this$dossier_credit$2 = this.dossier_credit[this.credPubToUse]) === null || _this$dossier_credit$2 === void 0 ? void 0 : _this$dossier_credit$2['nantissements']) !== null && _this$dossier_credit$ !== void 0 ? _this$dossier_credit$ : [];
      var cession_creances = (_this$dossier_credit$3 = (_this$dossier_credit$4 = this.dossier_credit[this.credPubToUse]) === null || _this$dossier_credit$4 === void 0 ? void 0 : _this$dossier_credit$4['cession_creances']) !== null && _this$dossier_credit$3 !== void 0 ? _this$dossier_credit$3 : [];
      _classPrivateFieldSet(_oldLines, this, _assertClassBrand(_F8DataExtractor_brand, this, _extractOldLinesData).call(this, {
        hypotheques: hypotheques,
        gages: gages,
        cautionnement_solidaires: cautionnement_solidaires,
        cautionnement_solidaires_personnes_morales: cautionnement_solidaires_personnes_morales,
        caution_hypothecaires: caution_hypothecaires,
        protection_financieres: protection_financieres,
        cond_particulieres: cond_particulieres,
        suretes_diverses: suretes_diverses,
        autres_suretes_diverses: autres_suretes_diverses,
        nantissements: nantissements,
        cession_creances: cession_creances
      }));
      _classPrivateFieldSet(_newLines, this, _assertClassBrand(_F8DataExtractor_brand, this, _extractNewLinesData).call(this, {
        hypotheques: hypotheques,
        gages: gages,
        cautionnement_solidaires: cautionnement_solidaires,
        cautionnement_solidaires_personnes_morales: cautionnement_solidaires_personnes_morales,
        caution_hypothecaires: caution_hypothecaires,
        protection_financieres: protection_financieres,
        cond_particulieres: cond_particulieres,
        suretes_diverses: suretes_diverses,
        autres_suretes_diverses: autres_suretes_diverses,
        nantissements: nantissements,
        cession_creances: cession_creances
      }));
      _classPrivateFieldSet(_oldLinesComment, this, this.dossier_credit[this.credPubToUse]['commentaire_lignes_existantes']);
      _classPrivateFieldSet(_newLinesComment, this, this.dossier_credit[this.credPubToUse]['commentaire_nouvelles_lignes']);
      _classPrivateFieldSet(_encoursAu, this, this.dossier_credit[this.credPubToUse]['encours_au']);
      Object.keys(_classPrivateFieldGet(_totaux, this)).forEach(function (element) {
        _classPrivateFieldGet(_totaux, _this2)[element] = _this2.dossier_credit[_this2.credPubToUse][element];
      });
      return {
        oldLines: _classPrivateFieldGet(_oldLines, this),
        newLines: _classPrivateFieldGet(_newLines, this),
        oldLinesComment: _classPrivateFieldGet(_oldLinesComment, this),
        newLinesComment: _classPrivateFieldGet(_newLinesComment, this),
        encoursAu: _classPrivateFieldGet(_encoursAu, this),
        totaux: _classPrivateFieldGet(_totaux, this),
        oldLinesgarantiesSpecifiques: _classPrivateFieldGet(_oldLinesgarantiesSpecifiques, this),
        oldLinesgarantiesGenerales: _classPrivateFieldGet(_oldLinesgarantiesGenerales, this),
        newLinesgarantiesSpecifiques: _classPrivateFieldGet(_newLinesgarantiesSpecifiques, this),
        newLinesgarantiesGenerales: _classPrivateFieldGet(_newLinesgarantiesGenerales, this),
        commentaire_lignes_existantes_garanties_nd: (_this$dossier_credit = this.dossier_credit) === null || _this$dossier_credit === void 0 || (_this$dossier_credit = _this$dossier_credit[this.credPubToUse]) === null || _this$dossier_credit === void 0 ? void 0 : _this$dossier_credit.commentaire_lignes_existantes_garanties_nd,
        commentaire_nouvelles_lignes_garanties_nd: (_this$dossier_credit2 = this.dossier_credit) === null || _this$dossier_credit2 === void 0 || (_this$dossier_credit2 = _this$dossier_credit2[this.credPubToUse]) === null || _this$dossier_credit2 === void 0 ? void 0 : _this$dossier_credit2.commentaire_nouvelles_lignes_garanties_nd
      };
    }
  }, {
    key: "copyPropertyValueWithNewName",
    value: function copyPropertyValueWithNewName(data, xObjectAndFields) {
      // console.log('xObjectAndFields', xObjectAndFields);
      if (!data || data.length === 0) return [];
      var dataArray = _toConsumableArray(data).map(function (el) {
        var rulesObj = xObjectAndFields.find(function (elm) {
          return elm.propertyToAdd === el.type_garantie;
        });
        if (!rulesObj) return el;
        // console.log('rulesObj', rulesObj);
        var _iterator = _createForOfIteratorHelper(rulesObj === null || rulesObj === void 0 ? void 0 : rulesObj.xFieldsMap),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var renameEl = _step.value;
            // console.log('renameEl', renameEl);
            el[renameEl.newName] = el[renameEl.oldName];
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        return el;
      });
      return dataArray;
    }
  }, {
    key: "getNewLineStatusLabel",
    value: function getNewLineStatusLabel(line) {
      var status = line === null || line === void 0 ? void 0 : line.statut;
      if (status == 'Renouvellement') {
        // console.log('line', line);
        if (line.type === "RI") return "Renouvellement à l'identique";
        if (line.type === "RH") return "Renouvellement à la hausse";
        if (line.type === "RB") return "Renouvellement à la baisse";
      }
      return status;
    }
  }]);
}(_ro_data_extractor__WEBPACK_IMPORTED_MODULE_0__.RODataExtractor);
function _extractOldLinesData() {
  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    hypotheques: hypotheques,
    gages: gages,
    cautionnement_solidaires: cautionnement_solidaires,
    cautionnement_solidaires_personnes_morales: cautionnement_solidaires_personnes_morales,
    caution_hypothecaires: caution_hypothecaires,
    protection_financieres: protection_financieres,
    cond_particulieres: cond_particulieres,
    suretes_diverses: suretes_diverses,
    autres_suretes_diverses: autres_suretes_diverses,
    nantissements: nantissements,
    cession_creances: cession_creances
  };
  var oldLines = [];
  oldLines = [].concat(_toConsumableArray(this.dossier_credit[this.credPubToUse][oldLineVars.oldLines]), _toConsumableArray(this.dossier_credit[this.credPubToUse][oldLineVars.oldLinesEngSig]));
  var xObjAndFields = _assertClassBrand(_F8DataExtractor_brand, this, _getXObjFields).call(this, params);
  oldLines = _assertClassBrand(_F8DataExtractor_brand, this, _addPropertiesFromAnotherObject).call(this, oldLines, 'id', xObjAndFields);
  var garantiesGenerales = [];
  var garantiesSpecifiques = [];
  for (var _i = 0, _Object$keys = Object.keys(params); _i < _Object$keys.length; _i++) {
    var key = _Object$keys[_i];
    var _iterator2 = _createForOfIteratorHelper(params[key]),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var _garantie$state_, _garantie$state_2;
        var garantie = _step2.value;
        if (((_garantie$state_ = garantie.state_) === null || _garantie$state_ === void 0 ? void 0 : _garantie$state_.has_speOr_spe) == 'specifique') garantiesSpecifiques.push(_objectSpread(_objectSpread({}, garantie), {}, {
          type_garantie: key
        }));
        if (((_garantie$state_2 = garantie.state_) === null || _garantie$state_2 === void 0 ? void 0 : _garantie$state_2.has_speOr_spe) == 'general') garantiesGenerales.push(_objectSpread(_objectSpread({}, garantie), {}, {
          type_garantie: key
        }));
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
  }
  garantiesGenerales = this.copyPropertyValueWithNewName(garantiesGenerales, xObjAndFields);
  garantiesSpecifiques = this.copyPropertyValueWithNewName(garantiesSpecifiques, xObjAndFields);
  _classPrivateFieldSet(_oldLinesgarantiesSpecifiques, this, garantiesSpecifiques);
  _classPrivateFieldSet(_oldLinesgarantiesGenerales, this, garantiesGenerales);
  // console.log('garantiesGenerales', garantiesGenerales);
  // console.log('garantiesSpecifiques', garantiesSpecifiques);
  return oldLines;
}
function _extractNewLinesData() {
  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    hypotheques: hypotheques,
    gages: gages,
    cautionnement_solidaires: cautionnement_solidaires,
    cautionnement_solidaires_personnes_morales: cautionnement_solidaires_personnes_morales,
    caution_hypothecaires: caution_hypothecaires,
    protection_financieres: protection_financieres,
    cond_particulieres: cond_particulieres,
    suretes_diverses: suretes_diverses,
    autres_suretes_diverses: autres_suretes_diverses,
    nantissements: nantissements,
    cession_creances: cession_creances
  };
  var newLines = [];
  newLines = [].concat(_toConsumableArray(this.dossier_credit[this.credPubToUse][newLineVars.newLines]), _toConsumableArray(this.dossier_credit[this.credPubToUse][newLineVars.newLinesEngSig]));
  // Remove empty lines
  newLines = newLines.filter(function (nl) {
    return nl.proposition;
  });
  // 
  var xObjAndFields = _assertClassBrand(_F8DataExtractor_brand, this, _getXObjFields).call(this, params);
  newLines = _assertClassBrand(_F8DataExtractor_brand, this, _addPropertiesFromAnotherObject).call(this, newLines, 'id', xObjAndFields);
  var garantiesGenerales = [];
  var garantiesSpecifiques = [];
  for (var _i2 = 0, _Object$keys2 = Object.keys(params); _i2 < _Object$keys2.length; _i2++) {
    var key = _Object$keys2[_i2];
    var _iterator3 = _createForOfIteratorHelper(params[key]),
      _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var _garantie$state_3, _garantie$state_4;
        var garantie = _step3.value;
        if (((_garantie$state_3 = garantie.state_) === null || _garantie$state_3 === void 0 ? void 0 : _garantie$state_3.has_speOr_spe) == 'specifique') garantiesSpecifiques.push(garantie);
        if (((_garantie$state_4 = garantie.state_) === null || _garantie$state_4 === void 0 ? void 0 : _garantie$state_4.has_speOr_spe) == 'general') garantiesGenerales.push(garantie);
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
  }
  garantiesGenerales = this.copyPropertyValueWithNewName(garantiesGenerales, xObjAndFields);
  garantiesSpecifiques = this.copyPropertyValueWithNewName(garantiesSpecifiques, xObjAndFields);
  _classPrivateFieldSet(_newLinesgarantiesSpecifiques, this, garantiesSpecifiques);
  _classPrivateFieldSet(_newLinesgarantiesGenerales, this, garantiesGenerales);
  // console.log('garantiesGenerales', garantiesGenerales);
  // console.log('garantiesSpecifiques', garantiesSpecifiques);
  return newLines;
}
function _getXObjFields(params) {
  var _params$nantissements, _params$cession_crean;
  return [{
    propertyToAdd: "hypotheques",
    parentMapProperty: "parentId",
    xArray: params.hypotheques,
    xFieldsMap: [{
      oldName: "formulation_surete",
      newName: "name_garantie"
    }]
  }, {
    propertyToAdd: "gages",
    parentMapProperty: "parentId",
    xArray: params.gages,
    xFieldsMap: [{
      oldName: "formulation_surete",
      newName: "name_garantie"
    }]
  }, {
    propertyToAdd: "cautionnement_solidaires",
    parentMapProperty: "parentId",
    xArray: params.cautionnement_solidaires,
    xFieldsMap: [{
      oldName: "formulation_surete",
      newName: "name_garantie"
    }]
  }, {
    propertyToAdd: "cautionnement_solidaires_personnes_morales",
    parentMapProperty: "parentId",
    xArray: params.cautionnement_solidaires_personnes_morales,
    xFieldsMap: [{
      oldName: "formulation_surete",
      newName: "name_garantie"
    }]
  }, {
    propertyToAdd: "caution_hypothecaires",
    parentMapProperty: "parentId",
    xArray: params.caution_hypothecaires,
    xFieldsMap: [{
      oldName: "formulation_surete",
      newName: "name_garantie"
    }]
  }, {
    propertyToAdd: "protection_financieres",
    parentMapProperty: "parentId",
    xArray: params.protection_financieres,
    xFieldsMap: [{
      oldName: "formulation_surete",
      newName: "name_garantie"
    }]
  }, {
    propertyToAdd: "cond_particulieres",
    parentMapProperty: "parentId",
    xArray: params.cond_particulieres,
    xFieldsMap: [{
      oldName: "formulation_surete",
      newName: "name_garantie"
    }]
  }, {
    propertyToAdd: "suretes_diverses",
    parentMapProperty: "parentId",
    xArray: params.suretes_diverses,
    xFieldsMap: [{
      oldName: "label",
      newName: "name_garantie"
    }]
  }, {
    propertyToAdd: "autres_suretes_diverses",
    parentMapProperty: "parentId",
    xArray: params.autres_suretes_diverses,
    xFieldsMap: [{
      oldName: "label",
      newName: "name_garantie"
    }]
  }, {
    propertyToAdd: "nantissements",
    parentMapProperty: "parentId",
    xArray: (_params$nantissements = params === null || params === void 0 ? void 0 : params.nantissements) !== null && _params$nantissements !== void 0 ? _params$nantissements : [],
    xFieldsMap: [{
      oldName: "formulation_surete",
      newName: "name_garantie"
    }]
  }, {
    propertyToAdd: "cession_creances",
    parentMapProperty: "parentId",
    xArray: (_params$cession_crean = params === null || params === void 0 ? void 0 : params.cession_creances) !== null && _params$cession_crean !== void 0 ? _params$cession_crean : [],
    xFieldsMap: [{
      oldName: "formulation_surete",
      newName: "name_garantie"
    }]
  }];
}
function _addPropertiesFromAnotherObject(originalArray, originalArrayPropForMap, xObjectAndFields) {
  var finalObject = _toConsumableArray(originalArray);
  finalObject = finalObject.map(function (fo) {
    var newObj = _objectSpread({}, fo);
    var garanties = {};
    var _iterator4 = _createForOfIteratorHelper(xObjectAndFields),
      _step4;
    try {
      var _loop = function _loop() {
        var xObjAndFields = _step4.value;
        var newXarray = _toConsumableArray(xObjAndFields.xArray);
        if (xObjAndFields !== null && xObjAndFields !== void 0 && xObjAndFields.xFieldsMap) {
          newXarray = newXarray.map(function (nxa) {
            var _iterator5 = _createForOfIteratorHelper(xObjAndFields.xFieldsMap),
              _step5;
            try {
              for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                var renameEl = _step5.value;
                nxa[renameEl.newName] = nxa[renameEl.oldName];
              }
            } catch (err) {
              _iterator5.e(err);
            } finally {
              _iterator5.f();
            }
            return nxa;
          });
        }
        garanties[xObjAndFields.propertyToAdd] = newXarray.filter(function (el) {
          return el[xObjAndFields.parentMapProperty] == fo[originalArrayPropForMap];
        });
      };
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        _loop();
      }
      // newObj['garanties'][xObjAndFields.propertyToAdd] = xObjAndFields.xArray.filter(el =>el[xObjAndFields.parentMapProperty] == fo[originalArrayPropForMap]);
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }
    newObj['garanties'] = garanties;
    return newObj;
  });

  // console.log('finalObject', finalObject);
  return finalObject;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new F8DataExtractor());

/***/ })

}]);