"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_forms_nsia_revue_fiche_engagement_DC-REV1_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/nsia/revue_fiche_engagement/DC-REV1.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/nsia/revue_fiche_engagement/DC-REV1.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************************************************/
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
/* harmony import */ var _helpers_indexedDB__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../helpers/indexedDB */ "./resources/js/helpers/indexedDB.js");
/* harmony import */ var _helpers_indexedDB__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_helpers_indexedDB__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _services_nsia_amortissement_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../services/nsia/amortissement.js */ "./resources/js/services/nsia/amortissement.js");
/* provided dependency */ var process = __webpack_require__(/*! process/browser.js */ "./node_modules/process/browser.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return r; }; var t, r = {}, e = Object.prototype, n = e.hasOwnProperty, o = "function" == typeof Symbol ? Symbol : {}, i = o.iterator || "@@iterator", a = o.asyncIterator || "@@asyncIterator", u = o.toStringTag || "@@toStringTag"; function c(t, r, e, n) { Object.defineProperty(t, r, { value: e, enumerable: !n, configurable: !n, writable: !n }); } try { c({}, ""); } catch (t) { c = function c(t, r, e) { return t[r] = e; }; } function h(r, e, n, o) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype); return c(a, "_invoke", function (r, e, n) { var o = 1; return function (i, a) { if (3 === o) throw Error("Generator is already running"); if (4 === o) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var u = n.delegate; if (u) { var c = d(u, n); if (c) { if (c === f) continue; return c; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (1 === o) throw o = 4, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = 3; var h = s(r, e, n); if ("normal" === h.type) { if (o = n.done ? 4 : 2, h.arg === f) continue; return { value: h.arg, done: n.done }; } "throw" === h.type && (o = 4, n.method = "throw", n.arg = h.arg); } }; }(r, n, new Context(o || [])), !0), a; } function s(t, r, e) { try { return { type: "normal", arg: t.call(r, e) }; } catch (t) { return { type: "throw", arg: t }; } } r.wrap = h; var f = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var l = {}; c(l, i, function () { return this; }); var p = Object.getPrototypeOf, y = p && p(p(x([]))); y && y !== e && n.call(y, i) && (l = y); var v = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(l); function g(t) { ["next", "throw", "return"].forEach(function (r) { c(t, r, function (t) { return this._invoke(r, t); }); }); } function AsyncIterator(t, r) { function e(o, i, a, u) { var c = s(t[o], t, i); if ("throw" !== c.type) { var h = c.arg, f = h.value; return f && "object" == _typeof(f) && n.call(f, "__await") ? r.resolve(f.__await).then(function (t) { e("next", t, a, u); }, function (t) { e("throw", t, a, u); }) : r.resolve(f).then(function (t) { h.value = t, a(h); }, function (t) { return e("throw", t, a, u); }); } u(c.arg); } var o; c(this, "_invoke", function (t, n) { function i() { return new r(function (r, o) { e(t, n, r, o); }); } return o = o ? o.then(i, i) : i(); }, !0); } function d(r, e) { var n = e.method, o = r.i[n]; if (o === t) return e.delegate = null, "throw" === n && r.i["return"] && (e.method = "return", e.arg = t, d(r, e), "throw" === e.method) || "return" !== n && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + n + "' method")), f; var i = s(o, r.i, e.arg); if ("throw" === i.type) return e.method = "throw", e.arg = i.arg, e.delegate = null, f; var a = i.arg; return a ? a.done ? (e[r.r] = a.value, e.next = r.n, "return" !== e.method && (e.method = "next", e.arg = t), e.delegate = null, f) : a : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f); } function w(t) { this.tryEntries.push(t); } function m(r) { var e = r[4] || {}; e.type = "normal", e.arg = t, r[4] = e; } function Context(t) { this.tryEntries = [[-1]], t.forEach(w, this), this.reset(!0); } function x(r) { if (null != r) { var e = r[i]; if (e) return e.call(r); if ("function" == typeof r.next) return r; if (!isNaN(r.length)) { var o = -1, a = function e() { for (; ++o < r.length;) if (n.call(r, o)) return e.value = r[o], e.done = !1, e; return e.value = t, e.done = !0, e; }; return a.next = a; } } throw new TypeError(_typeof(r) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, c(v, "constructor", GeneratorFunctionPrototype), c(GeneratorFunctionPrototype, "constructor", GeneratorFunction), c(GeneratorFunctionPrototype, u, GeneratorFunction.displayName = "GeneratorFunction"), r.isGeneratorFunction = function (t) { var r = "function" == typeof t && t.constructor; return !!r && (r === GeneratorFunction || "GeneratorFunction" === (r.displayName || r.name)); }, r.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, c(t, u, "GeneratorFunction")), t.prototype = Object.create(v), t; }, r.awrap = function (t) { return { __await: t }; }, g(AsyncIterator.prototype), c(AsyncIterator.prototype, a, function () { return this; }), r.AsyncIterator = AsyncIterator, r.async = function (t, e, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(h(t, e, n, o), i); return r.isGeneratorFunction(e) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, g(v), c(v, u, "Generator"), c(v, i, function () { return this; }), c(v, "toString", function () { return "[object Generator]"; }), r.keys = function (t) { var r = Object(t), e = []; for (var n in r) e.unshift(n); return function t() { for (; e.length;) if ((n = e.pop()) in r) return t.value = n, t.done = !1, t; return t.done = !0, t; }; }, r.values = x, Context.prototype = { constructor: Context, reset: function reset(r) { if (this.prev = this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(m), !r) for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0][4]; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(r) { if (this.done) throw r; var e = this; function n(t) { a.type = "throw", a.arg = r, e.next = t; } for (var o = e.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i[4], u = this.prev, c = i[1], h = i[2]; if (-1 === i[0]) return n("end"), !1; if (!c && !h) throw Error("try statement without catch or finally"); if (null != i[0] && i[0] <= u) { if (u < c) return this.method = "next", this.arg = t, n(c), !0; if (u < h) return n(h), !1; } } }, abrupt: function abrupt(t, r) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var n = this.tryEntries[e]; if (n[0] > -1 && n[0] <= this.prev && this.prev < n[2]) { var o = n; break; } } o && ("break" === t || "continue" === t) && o[0] <= r && r <= o[2] && (o = null); var i = o ? o[4] : {}; return i.type = t, i.arg = r, o ? (this.method = "next", this.next = o[2], f) : this.complete(i); }, complete: function complete(t, r) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), f; }, finish: function finish(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[2] === t) return this.complete(e[4], e[3]), m(e), f; } }, "catch": function _catch(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[0] === t) { var n = e[4]; if ("throw" === n.type) { var o = n.arg; m(e); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(r, e, n) { return this.delegate = { i: x(r), r: e, n: n }, "next" === this.method && (this.arg = t), f; } }, r; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }






;

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Simulateur_de_pret",
  display: "Revue fiche d'engagement",
  components: {
    MoreVerticalIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_7__.MoreVerticalIcon,
    ChevronUpIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_7__.ChevronUpIcon,
    ChevronDownIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_7__.ChevronDownIcon,
    PlusIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_7__.PlusIcon,
    TrashIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_7__.TrashIcon,
    AirplayIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_7__.AirplayIcon,
    Multiselect: _vueform_multiselect_dist_multiselect_vue2__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  computed: {
    convention_entreprises_: function convention_entreprises_() {
      var autre_employeur = {
        ent_pub_key: "autre",
        denomination: "Autre",
        type_entreprise: ["ENTREPRISE_NORMALE"],
        info_entreprise: {
          sigle: "",
          denomination: "Autre",
          dpt: "",
          gestionnaire: "",
          indice: ""
        }
      };
      return [_objectSpread({}, autre_employeur)].concat(_toConsumableArray(this.convention_entreprises));
    }
  },
  props: {
    meta_data: Object,
    tb_name: String,
    tb_display_name: String
  },
  created: function created() {
    var _this = this;
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _this.getCreditBanques();
          case 2:
            _context.next = 4;
            return _this.loadPourQuotiteData();
          case 4:
            _context.next = 6;
            return _services_credit_service__WEBPACK_IMPORTED_MODULE_2__["default"].loadNsiaFraisBanque().then(function (res) {
              _this.frais_banques = res.data;
            })["catch"](function (err) {
              console.log(err);
            });
          case 6:
            _context.next = 8;
            return _services_credit_service__WEBPACK_IMPORTED_MODULE_2__["default"].loadNsiaTauxParticuliers().then(function (res) {
              _this.montantsQuotites = res.data;
              _this.handleInput();
            })["catch"](function (err) {
              console.log(err);
            });
          case 8:
            _context.next = 10;
            return _this.loadConventionEntreprise().then(function (res) {
              _this.loadConEntreprise = false;
              _this.convention_entreprises = res.data.data;
            })["catch"](function (err) {
              console.error(err);
              _this.loadConEntreprise = false;
            });
          case 10:
            _this.loadingData = false;
            EventBus.$on("dossier-updated-dcp-1", function (data) {
              var _data$data_tb, _data$data_tb2, _data$data_tb3, _data$data_tb4;
              if (_this.formDataToBeWatched.taux != (data === null || data === void 0 || (_data$data_tb = data.data_tb1) === null || _data$data_tb === void 0 ? void 0 : _data$data_tb.taux) || _this.formDataToBeWatched.duree_credit != (data === null || data === void 0 || (_data$data_tb2 = data.data_tb1) === null || _data$data_tb2 === void 0 ? void 0 : _data$data_tb2.duree_credit) || _this.formDataToBeWatched.type_demande != (data === null || data === void 0 || (_data$data_tb3 = data.data_tb1) === null || _data$data_tb3 === void 0 ? void 0 : _data$data_tb3.type_demande) || _this.formDataToBeWatched.type_credit != (data === null || data === void 0 || (_data$data_tb4 = data.data_tb1) === null || _data$data_tb4 === void 0 ? void 0 : _data$data_tb4.type_credit)) {
                var _data$data_tb5, _data$data_tb6, _data$data_tb7, _data$data_tb8, _data$data_tb9;
                // this.formDataToBeWatched.montant_credit != data?.data_tb1?.montant_credit || 

                _this.formDataToBeWatched.taux = data === null || data === void 0 || (_data$data_tb5 = data.data_tb1) === null || _data$data_tb5 === void 0 ? void 0 : _data$data_tb5.taux;
                _this.formDataToBeWatched.duree_credit = data === null || data === void 0 || (_data$data_tb6 = data.data_tb1) === null || _data$data_tb6 === void 0 ? void 0 : _data$data_tb6.duree_credit;
                _this.formDataToBeWatched.montant_credit = data === null || data === void 0 || (_data$data_tb7 = data.data_tb1) === null || _data$data_tb7 === void 0 ? void 0 : _data$data_tb7.montant_credit;
                _this.formDataToBeWatched.type_demande = data === null || data === void 0 || (_data$data_tb8 = data.data_tb1) === null || _data$data_tb8 === void 0 ? void 0 : _data$data_tb8.type_demande;
                _this.formDataToBeWatched.type_credit = data === null || data === void 0 || (_data$data_tb9 = data.data_tb1) === null || _data$data_tb9 === void 0 ? void 0 : _data$data_tb9.type_credit;
                _this.handleSimulate();
                _this.loadDataRentabilite();
              }
            });
            EventBus.$on("dossier-updated-dcp-2", function (data) {
              var _data$data_tb0, _data$data_tb1, _data$data_tb10, _data$data_tb11, _data$data_tb12, _data$data_tb13, _data$data_tb14, _data$data_tb15, _data$data_tb16, _data$data_tb17, _data$data_tb18, _data$data_tb19, _data$data_tb20, _data$data_tb21, _data$data_tb22, _data$data_tb23, _data$data_tb24, _data$data_tb25;
              _this.engagements_en_cours = data === null || data === void 0 || (_data$data_tb0 = data.data_tb2) === null || _data$data_tb0 === void 0 ? void 0 : _data$data_tb0.engagements_en_cours;
              _this.formDataToBeWatched.engagements_en_cours = data === null || data === void 0 || (_data$data_tb1 = data.data_tb2) === null || _data$data_tb1 === void 0 ? void 0 : _data$data_tb1.engagements_en_cours;
              _this.formDataToBeWatched.engagements_en_cours_total_encours = data === null || data === void 0 || (_data$data_tb10 = data.data_tb2) === null || _data$data_tb10 === void 0 ? void 0 : _data$data_tb10.engagements_en_cours_total_encours;
              _this.formDataToBeWatched.engagements_en_cours_total_mensualite = data === null || data === void 0 || (_data$data_tb11 = data.data_tb2) === null || _data$data_tb11 === void 0 ? void 0 : _data$data_tb11.engagements_en_cours_total_mensualite;
              _this.formDataToBeWatched.engagements_en_cours_total_montant = data === null || data === void 0 || (_data$data_tb12 = data.data_tb2) === null || _data$data_tb12 === void 0 ? void 0 : _data$data_tb12.engagements_en_cours_total_montant;
              _this.revenu_domicilie_nsia = data === null || data === void 0 || (_data$data_tb13 = data.data_tb2) === null || _data$data_tb13 === void 0 ? void 0 : _data$data_tb13.revenu_domicilie_nsia;
              _this.formDataToBeWatched.revenu_domicilie_nsia = data === null || data === void 0 || (_data$data_tb14 = data.data_tb2) === null || _data$data_tb14 === void 0 ? void 0 : _data$data_tb14.revenu_domicilie_nsia;
              _this.formDataToBeWatched.revenu_nsia_total = data === null || data === void 0 || (_data$data_tb15 = data.data_tb2) === null || _data$data_tb15 === void 0 ? void 0 : _data$data_tb15.revenu_nsia_total;
              _this.formDataToBeWatched.revenu_nsia_total_colonne_conjoint = data === null || data === void 0 || (_data$data_tb16 = data.data_tb2) === null || _data$data_tb16 === void 0 ? void 0 : _data$data_tb16.revenu_nsia_total_colonne_conjoint;
              _this.formDataToBeWatched.revenu_nsia_total_colonne_emprunteur = data === null || data === void 0 || (_data$data_tb17 = data.data_tb2) === null || _data$data_tb17 === void 0 ? void 0 : _data$data_tb17.revenu_nsia_total_colonne_emprunteur;
              _this.formDataToBeWatched.revenu_nsia_total_colonne_mensualite = data === null || data === void 0 || (_data$data_tb18 = data.data_tb2) === null || _data$data_tb18 === void 0 ? void 0 : _data$data_tb18.revenu_nsia_total_colonne_mensualite;
              _this.formDataToBeWatched.revenu_nsia_total_colonne_montant_pondere = data === null || data === void 0 || (_data$data_tb19 = data.data_tb2) === null || _data$data_tb19 === void 0 ? void 0 : _data$data_tb19.revenu_nsia_total_colonne_montant_pondere;
              _this.formDataToBeWatched.revenu_nsia_total_colonne_montant_qc1 = data === null || data === void 0 || (_data$data_tb20 = data.data_tb2) === null || _data$data_tb20 === void 0 ? void 0 : _data$data_tb20.revenu_nsia_total_colonne_montant_qc1;
              _this.formDataToBeWatched.revenu_nsia_total_colonne_montant_qc2 = data === null || data === void 0 || (_data$data_tb21 = data.data_tb2) === null || _data$data_tb21 === void 0 ? void 0 : _data$data_tb21.revenu_nsia_total_colonne_montant_qc2;
              _this.formDataToBeWatched.revenu_nsia_total_colonne_taux_qc1 = data === null || data === void 0 || (_data$data_tb22 = data.data_tb2) === null || _data$data_tb22 === void 0 ? void 0 : _data$data_tb22.revenu_nsia_total_colonne_taux_qc1;
              _this.formDataToBeWatched.revenu_nsia_total_colonne_taux_qc2 = data === null || data === void 0 || (_data$data_tb23 = data.data_tb2) === null || _data$data_tb23 === void 0 ? void 0 : _data$data_tb23.revenu_nsia_total_colonne_taux_qc2;
              _this.formDataToBeWatched.salaire_brut = data === null || data === void 0 || (_data$data_tb24 = data.data_tb2) === null || _data$data_tb24 === void 0 ? void 0 : _data$data_tb24.salaire_brut;
              _this.formDataToBeWatched.type_client = data === null || data === void 0 || (_data$data_tb25 = data.data_tb2) === null || _data$data_tb25 === void 0 ? void 0 : _data$data_tb25.type_client;
            });
          case 13:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }))();
  },
  mounted: function mounted() {
    var _this2 = this;
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _this2.loadRetrieved();
            _this2.loadTbAttrs(); // charge les attributs + sous attributs des tables
            _this2.tableClosedOrOpened();
          case 3:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }))();
  },
  data: function data() {
    var vm = this;
    return {
      montantsQuotites: undefined,
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
      loadingData: true,
      type_credits: [],
      meta_parseable: {
        cred_pub_key: this.meta_data["cred_pub_key"],
        tb_name: this.tb_name
      },
      formDataToBeWatched: {
        notes: [],
        revenu_domicilie_nsia: [],
        engagements_en_cours: [],
        frais_garanties: [],
        frais_credits: [],
        engagements_en_cours_total_montant: 0,
        engagements_en_cours_total_encours: 0,
        engagements_en_cours_total_mensualite: 0,
        revenu_nsia_total_colonne_emprunteur: 0,
        revenu_nsia_total_colonne_mensualite: 0,
        revenu_nsia_total_colonne_montant_pondere: 0,
        revenu_nsia_total_colonne_montant_qc1: 0,
        revenu_nsia_total_colonne_montant_qc2: 0,
        revenu_nsia_total_colonne_taux_qc1: 0,
        revenu_nsia_total_colonne_taux_qc2: 0,
        engagements_en_cours_total_encours_theorique: 0,
        engagements_en_cours_total_encours_ecart: 0,
        total_frais_credit: 0,
        total_frais_garantie: 0,
        revenu_nsia_total: 0,
        montant_credit: 0,
        montant_sollicite: 0,
        type_credit: "",
        type_demande: "",
        duree_credit: 0,
        taux: 0,
        r_mensualite: 0,
        r_interet: 0,
        r_ttcredit: 0,
        rentabilite: "",
        quotite_cessible_disponible: 0,
        quotite_cessible_disponible_general: 0,
        salaire_brut: 0,
        mode_paiement_demande: "",
        date_echeance: "",
        mode_tranche: "",
        frequence_mois: 1,
        frequence_versement: 1,
        duree_differee: 0,
        tps: 10
      },
      revenu_domicilie_nsia: [{
        libelle: "Salaire net",
        checked: false,
        montant_emprunteur: 0,
        montant_conjoint: 0,
        total_ligne: 0,
        eligible: false,
        source_remboursement: false,
        periodicite: "",
        mensualite: 0,
        taux: 0,
        montant_pondere: 0,
        taux_qc1: 0,
        montant_qc1: 0,
        taux_qc2: 0,
        montant_qc2: 0,
        commentaire: ""
      }, {
        libelle: "Prime",
        checked: false,
        montant_emprunteur: 0,
        montant_conjoint: 0,
        total_ligne: 0,
        eligible: false,
        source_remboursement: false,
        periodicite: "",
        mensualite: 0,
        taux: 0,
        montant_pondere: 0,
        taux_qc1: 0,
        montant_qc1: 0,
        taux_qc2: 0,
        montant_qc2: 0,
        commentaire: ""
      }, {
        libelle: "Loyer",
        checked: false,
        montant_emprunteur: 0,
        montant_conjoint: 0,
        total_ligne: 0,
        eligible: false,
        source_remboursement: false,
        periodicite: "",
        mensualite: 0,
        taux: 0,
        montant_pondere: 0,
        taux_qc1: 0,
        montant_qc1: 0,
        taux_qc2: 0,
        montant_qc2: 0,
        commentaire: ""
      }],
      engagements_en_cours: [{
        banque: "",
        libelle: "",
        type_credit: "",
        checked: true,
        montant: 0,
        encours: 0,
        mensualite: 0,
        date_echeance: "",
        rachat: ""
        // periodicite: "",
        // montant_periodicite: 0,
        // duree_credit: 0,
      }],
      frais_credits: [{
        libelle: "Frais de dossier",
        taux: 0,
        taux_initial: 0,
        valeur: 0
      }, {
        libelle: "Prime d'assurance",
        taux: 0,
        taux_initial: 0,
        valeur: 0
      }, {
        libelle: "Prime de risque",
        taux: 0,
        taux_initial: 0,
        valeur: 0
      }],
      frais_garanties: [{
        libelle: "Déposit",
        taux: 0,
        taux_initial: 0,
        valeur: 0
      }],
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
      frais_banques: [],
      pourcentages_quotites: [],
      taxe: "",
      res: "",
      interetLoading: false,
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
      periodicites_remboursement: [{
        libelle: "In fine",
        month: 1
      }, {
        libelle: "Mensuelle",
        month: 1
      }
      // {
      //     libelle: "Trimestrielle",
      //     month: 3,
      // },
      // {
      //     libelle: "Semestrielle",
      //     month: 6,
      // },
      ],
      echeance_total: 0,
      montant_quotite_cessible: 0,
      charge_emprunt_sollicite: 0,
      total_engagements_actuels: 0,
      coefficient_d_endettement: 0,
      total_engagements_mensuels: 0,
      nouveau_disponible_net_mensuel: 0,
      montant_quotite_cessible_disponible: 0,
      net_sur_bulletin_de_salaire_prime: 0,
      total_revenu_net_mensuel: 0,
      convention_entreprise: "",
      convention_entreprises: [],
      loadConEntreprise: true,
      convention_entreprise_autre: null,
      data_convention: [],
      list_tranches: [{
        libelle: "Mensuelle",
        val: "Mensuelle"
      }, {
        libelle: "Trimestrielle",
        val: "Trimestrielle"
      }, {
        libelle: "Semestrielle",
        val: "Semestrielle"
      }, {
        libelle: "Annuel",
        val: "Annuel"
      }, {
        libelle: "In fine",
        val: "In fine"
      }, {
        libelle: "Bimensuelle",
        val: "Bimensuelle"
      }, {
        libelle: "Bimestrielle",
        val: "Bimestrielle"
      }, {
        libelle: "Plusieurs tranches",
        val: "Plusieurs tranches"
      }]
    };
  },
  methods: {
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
      var _this3 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              if (_DEBUG) console.log(">> updateFormDataForDeletion");
              _this3.formDataToBeWatched.is_deleted = true;
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
      var _this4 = this;
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
              if (!_this4.formDataToBeWatched.is_deleted) {
                _context4.next = 5;
                break;
              }
              return _context4.abrupt("return");
            case 5:
              // Upload current (and arguably latest) formDataToBeWatched data

              _this4.uploadDataToServerAndUpdateLastSave(_this4.formDataToBeWatched, _this4.formDataToBeWatched);
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
        _cache = new (_helpers_indexedDB__WEBPACK_IMPORTED_MODULE_5___default())({
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
      var _this5 = this;
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
                  _this5.uploadDataToServerAndUpdateLastSave(newVal, oldVal);
                }
              }
              // First upload
              if (!_lastSaveTime) {
                _this5.uploadDataToServerAndUpdateLastSave(newVal, oldVal);
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
      var _this6 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              if (_DEBUG) console.log(">> uploadDataToServerAndUpdateLastSave");
              _context6.prev = 1;
              if (_DEBUG) console.log(">> this.autosaving");
              _context6.next = 5;
              return _this6.autosaving(newVal, oldVal);
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
      var _this7 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              if (_DEBUG) console.log(">> uploadDataToServerBeforePageCloses");
              _context7.prev = 1;
              _context7.next = 4;
              return _this7.autosaving(newVal, oldVal);
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
      var _this8 = this;
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
              return _this8.autosaving(_this8.formDataToBeWatched, _this8.formDataToBeWatched);
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
      var _this9 = this;
      _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["default"].loadUserData().then(function (res) {
        _this9.send2Backend(res, 0, 0);
      })["catch"](function (err) {
        _this9.loadWithError(err);
      });
    },
    formDataVars: function formDataVars(event) {
      this.formDataToBeWatched[event[0]] = event[1];
      if (event[0] == 'montant_credit') {
        this.majTauxDuree();
      }
      this.handleInput();
    },
    updateRachat: function updateRachat(event, index, objectName) {
      if (event.target.value == 'R') {
        // this[objectName][index]["encours"] = 0;
        this[objectName][index]["mensualite"] = 0;
      }
      this.handleInput();
    },
    formDataVars2: function formDataVars2(event, index, objectName, keyName) {
      this[objectName][index][keyName] = event[1];
      if (['mensualite', 'taux', 'montant_pondere'].includes(keyName) && objectName == 'revenu_domicilie_nsia') {
        this.handleInput(true);
      } else {
        this.handleInput();
      }
    },
    computedMensualite: function computedMensualite() {
      var _this0 = this;
      this.engagements_en_cours.forEach(function (el, index) {
        var periodicite = el === null || el === void 0 ? void 0 : el['periodicite'];
        var montant_periodicite = el === null || el === void 0 ? void 0 : el['montant_periodicite'];
        var duree_credit = _this0.convertInt(el === null || el === void 0 ? void 0 : el['duree_credit']);
        if (!['', null, undefined, 0, '0', NaN, 'NaN'].includes(montant_periodicite) && !['', null, undefined, 0, '0', NaN, 'NaN'].includes(duree_credit) && !['', null, undefined].includes(periodicite)) {
          if (['In fine'].includes(periodicite)) {
            var montant = _this0.convertInt(montant_periodicite) / duree_credit;
            el['mensualite'] = _this0.convertInt(montant);
          }
          if (['Mensuelle'].includes(periodicite)) {
            el['mensualite'] = _this0.convertInt(montant_periodicite);
          }
          if (['Trimestrielle'].includes(periodicite)) {
            var _montant = _this0.convertInt(montant_periodicite) / 3;
            el['mensualite'] = _this0.convertInt(_montant);
          }
          if (['Semestrielle'].includes(periodicite)) {
            var _montant2 = _this0.convertInt(montant_periodicite) / 6;
            el['mensualite'] = _this0.convertInt(_montant2);
          }
          if (['Annuel'].includes(periodicite)) {
            var _montant3 = _this0.convertInt(montant_periodicite) / 12;
            el['mensualite'] = _this0.convertInt(_montant3);
          }
          if (['Bimensuelle'].includes(periodicite)) {
            var _montant4 = _this0.convertInt(montant_periodicite) * 2;
            el['mensualite'] = _this0.convertInt(_montant4);
          }
          if (['Bimestrielle'].includes(periodicite)) {
            var _montant5 = _this0.convertInt(montant_periodicite) / 2;
            el['mensualite'] = _this0.convertInt(_montant5);
          }
        }
        _this0.engagements_en_cours[index] = el;
      });
    },
    formDataVars3: function formDataVars3(event, index, objectName, keyName) {
      var _event$target;
      if ((event === null || event === void 0 || (_event$target = event.target) === null || _event$target === void 0 ? void 0 : _event$target.value) == "NSIA BANQUE-CI") {
        var _event$target2;
        this[objectName][index][keyName] = event === null || event === void 0 || (_event$target2 = event.target) === null || _event$target2 === void 0 ? void 0 : _event$target2.value;
      } else {
        this[objectName][index][keyName] = '';
      }
      this.handleInput();
    },
    formuleQD: function formuleQD(mt) {
      return 'Formule de calcul: Quotité disponible = Quotité cessible (' + this.formatAmount(mt) + ') - Mensualités totales (' + this.formatAmount(this.echeance_total) + ')';
    },
    calculValeurSituationFinanciere: function calculValeurSituationFinanciere() {
      var _this$formDataToBeWat, _this$formDataToBeWat2, _this$total_engagemen, _this$formDataToBeWat3, _this$total_engagemen2;
      var quotite_cessible = Number((_this$formDataToBeWat = this.formDataToBeWatched.revenu_nsia_total_colonne_taux_qc1) === null || _this$formDataToBeWat === void 0 ? void 0 : _this$formDataToBeWat.toString().replace(/\s/g, ''));
      this.total_revenu_net_mensuel = Number((_this$formDataToBeWat2 = this.formDataToBeWatched.revenu_nsia_total_colonne_montant_pondere) === null || _this$formDataToBeWat2 === void 0 ? void 0 : _this$formDataToBeWat2.toString().replace(/\s/g, ''));
      var total_engagements_actuels = Number((_this$total_engagemen = this.total_engagements_actuels) === null || _this$total_engagemen === void 0 ? void 0 : _this$total_engagemen.toString().replace(/\s/g, ''));
      var charge_emprunt_sollicite = Number((_this$formDataToBeWat3 = this.formDataToBeWatched.r_mensualite) === null || _this$formDataToBeWat3 === void 0 ? void 0 : _this$formDataToBeWat3.toString().replace(/\s/g, ''));
      this.total_engagements_mensuels = total_engagements_actuels + charge_emprunt_sollicite;
      var total_engagements_mensuels = Number((_this$total_engagemen2 = this.total_engagements_mensuels) === null || _this$total_engagemen2 === void 0 ? void 0 : _this$total_engagemen2.toString().replace(/\s/g, ''));
      this.nouveau_disponible_net_mensuel = this.total_revenu_net_mensuel - total_engagements_mensuels;
      if (this.total_revenu_net_mensuel > 0) {
        var coefficient_d_endettement = total_engagements_mensuels / this.total_revenu_net_mensuel * 100;
        this.coefficient_d_endettement = coefficient_d_endettement.toFixed(2);
      } else {
        this.coefficient_d_endettement = 0;
      }
      this.montant_quotite_cessible = parseInt(this.total_revenu_net_mensuel * (quotite_cessible / 100));
      this.montant_quotite_cessible_disponible = this.montant_quotite_cessible - total_engagements_actuels;
    },
    changeEligibleValue: function changeEligibleValue(event, index) {
      var _this1 = this;
      setTimeout(function () {
        if (_this1.revenu_domicilie_nsia[index]['eligible'] == false) {
          _this1.revenu_domicilie_nsia[index]['taux'] = 0;
          _this1.revenu_domicilie_nsia[index]['montant_pondere'] = 0;
          _this1.revenu_domicilie_nsia[index]['taux_qc1'] = 0;
          _this1.revenu_domicilie_nsia[index]['montant_qc1'] = 0;
          _this1.revenu_domicilie_nsia[index]['taux_qc2'] = 0;
          _this1.revenu_domicilie_nsia[index]['montant_qc2'] = 0;
          _this1.revenu_domicilie_nsia[index]['source_remboursement'] = false;
          _this1.revenu_domicilie_nsia[index]['periodicite'] = "";
          _this1.revenu_domicilie_nsia[index]['mensualite'] = "";
          _this1.revenu_domicilie_nsia[index]['commentaire'] = "";
        } else {
          if (_this1.revenu_domicilie_nsia[index]['libelle'] == 'Salaire net') {
            _this1.revenu_domicilie_nsia[index]['taux'] = 100;
          }
          if (['Loyer', 'Prime'].includes(_this1.revenu_domicilie_nsia[index]['libelle'])) {
            _this1.revenu_domicilie_nsia[index]['taux'] = 75;
            _this1.revenu_domicilie_nsia[index]['taux_qc1'] = 75;
          }
        }
        _this1.handleInput();
      }, 500);
    },
    resetValues: function resetValues(event, index, objectName) {
      if (objectName == 'garanties_proposees') {
        this[objectName][index].commentaire = "";
        this[objectName][index].montant = "";
        if (index > 1) {
          this[objectName][index].type = "";
        }
      } else if (objectName == 'revenu_domicilie_nsia') {
        this[objectName][index].montant_emprunteur = 0;
        this[objectName][index].montant_conjoint = 0;
        this[objectName][index].eligible = false;
        this[objectName][index].source_remboursement = false;
        this[objectName][index].periodicite = "";
        this[objectName][index].mensualite = 0;
        this[objectName][index].taux = 0;
        this[objectName][index].montant_pondere = 0;
        this[objectName][index].taux_qc1 = 0;
        this[objectName][index].montant_qc1 = 0;
        this[objectName][index].taux_qc2 = 0;
        this[objectName][index].montant_qc2 = 0;
        this[objectName][index].commentaire = "";
        if (this[objectName][index].libelle == 'Salaire net') {
          this[objectName][index].eligible = true;
          this[objectName][index].source_remboursement = false;
          this[objectName][index].taux = 100;
          this[objectName][index].montant_pondere = 0;
        }
      } else {
        this[objectName][index].date_echeance = "";
        this[objectName][index].montant = "";
        this[objectName][index].encours = "";
        this[objectName][index].mensualite = "";
      }
      this.handleInput();
    },
    majTauxDuree: function majTauxDuree() {
      var _this10 = this;
      if (this.type_credits.length > 0) {
        var _this$formDataToBeWat4;
        var type_cred = this.formDataToBeWatched.type_credit;
        var data = $.grep(this.type_credits, function (v) {
          return v.libelle === type_cred;
        });
        if (data.length > 0) {
          this.formDataToBeWatched.duree_credit = data[0].duree_max == null ? data[0].duree_min : data[0].duree_max;
          this.formDataToBeWatched.taux = data[0].taux_max == null ? data[0].taux_min : data[0].taux_max;
        }
        this.loadTauxFraisDossier(Number((_this$formDataToBeWat4 = this.formDataToBeWatched.montant_credit) === null || _this$formDataToBeWat4 === void 0 ? void 0 : _this$formDataToBeWat4.toString().replace(/\s/g, "")));
        this.loadingData = false;
      } else {
        setTimeout(function () {
          _this10.loadingData = true;
          _this10.majTauxDuree();
        }, 1000);
      }
    },
    loadRetrieved: function loadRetrieved() {
      var _this$meta_data$dossi,
        _this11 = this;
      var lentb = this.meta_data["dossier_credit"]["tbs_in_use"];
      var createdKey = this.tb_name;
      var createdKeyArr = createdKey.split("tb");
      createdKey = "cred_pub_tb_" + createdKeyArr[1];
      var createdKey1 = "cred_pub_tb_" + (parseInt(createdKeyArr[1]) - 1);
      var type_carcasse = (_this$meta_data$dossi = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi === void 0 ? void 0 : _this$meta_data$dossi.applied_templ_name;
      // console.log("type_carcasse ", type_carcasse);
      var current_tbkey = "cred_pub_tb_10009";
      if ((type_carcasse === null || type_carcasse === void 0 ? void 0 : type_carcasse.toUpperCase()) == 'PPI') {
        current_tbkey = "cred_pub_tb_30009";
      }

      // Close table by default
      // this.defaultRetract(
      //     false,
      //     this.meta_data["dossier_credit"]?.applied_templ_id
      // );

      if (this.meta_data["dossier_credit"][createdKey] == undefined) {
        var _this$meta_data$dossi2, _this$meta_data$dossi3, _this$meta_data$dossi4, _this$meta_data$dossi5;
        this.formDataToBeWatched.type_credit = (_this$meta_data$dossi2 = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi2 === void 0 || (_this$meta_data$dossi2 = _this$meta_data$dossi2.caf_recorded_file) === null || _this$meta_data$dossi2 === void 0 ? void 0 : _this$meta_data$dossi2.type_de_pret;
        this.formDataToBeWatched.montant_sollicite = (_this$meta_data$dossi3 = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi3 === void 0 || (_this$meta_data$dossi3 = _this$meta_data$dossi3.caf_recorded_file) === null || _this$meta_data$dossi3 === void 0 || (_this$meta_data$dossi3 = _this$meta_data$dossi3.montant) === null || _this$meta_data$dossi3 === void 0 ? void 0 : _this$meta_data$dossi3.toString().replace(/\s/g, '');
        this.formDataToBeWatched.montant_credit = (_this$meta_data$dossi4 = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi4 === void 0 || (_this$meta_data$dossi4 = _this$meta_data$dossi4.caf_recorded_file) === null || _this$meta_data$dossi4 === void 0 || (_this$meta_data$dossi4 = _this$meta_data$dossi4.montant) === null || _this$meta_data$dossi4 === void 0 ? void 0 : _this$meta_data$dossi4.toString().replace(/\s/g, '');
        this.formDataToBeWatched.type_demande = (_this$meta_data$dossi5 = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi5 === void 0 || (_this$meta_data$dossi5 = _this$meta_data$dossi5.caf_recorded_file) === null || _this$meta_data$dossi5 === void 0 ? void 0 : _this$meta_data$dossi5.type_demande;
        if (this.meta_data["dossier_credit"]["client_core_banking"] != undefined) {
          var _client_core_banking$, _client_core_banking$3;
          var client_core_banking = this.meta_data["dossier_credit"]["client_core_banking"];
          var encours_theorique = 0;
          if (client_core_banking !== null && client_core_banking !== void 0 && (_client_core_banking$ = client_core_banking.accounts_data) !== null && _client_core_banking$ !== void 0 && _client_core_banking$["credits_amortissables"]) {
            var _client_core_banking$2;
            encours_theorique = client_core_banking === null || client_core_banking === void 0 || (_client_core_banking$2 = client_core_banking.accounts_data) === null || _client_core_banking$2 === void 0 || (_client_core_banking$2 = _client_core_banking$2["credits_amortissables"]) === null || _client_core_banking$2 === void 0 ? void 0 : _client_core_banking$2.reduce(function (acc, curr) {
              return acc += parseInt(curr === null || curr === void 0 ? void 0 : curr.balance);
            }, encours_theorique);
          }
          if (client_core_banking !== null && client_core_banking !== void 0 && (_client_core_banking$3 = client_core_banking.accounts_data) !== null && _client_core_banking$3 !== void 0 && _client_core_banking$3["credits_bail"]) {
            var _client_core_banking$4;
            encours_theorique = client_core_banking === null || client_core_banking === void 0 || (_client_core_banking$4 = client_core_banking.accounts_data) === null || _client_core_banking$4 === void 0 || (_client_core_banking$4 = _client_core_banking$4["credits_bail"]) === null || _client_core_banking$4 === void 0 ? void 0 : _client_core_banking$4.reduce(function (acc, curr) {
              return acc += parseInt(curr === null || curr === void 0 ? void 0 : curr.balance);
            }, encours_theorique);
          }
          this.formDataToBeWatched.engagements_en_cours_total_encours_theorique = encours_theorique;
          this.formDataToBeWatched.engagements_en_cours_total_encours_ecart = encours_theorique;
        }
        if (this.meta_data["dossier_credit"][current_tbkey] != undefined) {
          this.formDataToBeWatched = this.meta_data["dossier_credit"][current_tbkey];
          if (this.formDataToBeWatched["revenu_domicilie_nsia"] != "") {
            this.revenu_domicilie_nsia = this.formDataToBeWatched["revenu_domicilie_nsia"];
          }
          if (this.formDataToBeWatched["engagements_en_cours"] != "") {
            this.engagements_en_cours = this.formDataToBeWatched["engagements_en_cours"];
          }
          if (this.formDataToBeWatched["frais_credits"] != "") {
            this.frais_credits = this.formDataToBeWatched["frais_credits"];
          }
          if (this.formDataToBeWatched["frais_garanties"] != "") {
            this.frais_garanties = this.formDataToBeWatched["frais_garanties"];
          }
          this.total_engagements_actuels = 0;
          this.echeance_total = this.convertInt(this.formDataToBeWatched.r_mensualite);
          if (['', null, undefined, 0, '0'].includes(this.formDataToBeWatched.frequence_mois)) {
            this.formDataToBeWatched.frequence_mois = 1;
          }
          if (this.engagements_en_cours != '') {
            this.engagements_en_cours.forEach(function (element) {
              var _element$encours, _element$mensualite;
              element.is_recall_data = true;
              var mt = Number(element === null || element === void 0 || (_element$encours = element.encours) === null || _element$encours === void 0 ? void 0 : _element$encours.toString().replace(/\s/g, ""));
              var mt_m = Number(element === null || element === void 0 || (_element$mensualite = element.mensualite) === null || _element$mensualite === void 0 ? void 0 : _element$mensualite.toString().replace(/\s/g, ""));
              if (mt > 0 && element.rachat != 'R') {
                var _this11$echeance_tota, _this11$total_engagem;
                _this11.echeance_total = Number((_this11$echeance_tota = _this11.echeance_total) === null || _this11$echeance_tota === void 0 ? void 0 : _this11$echeance_tota.toString().replace(/\s/g, "")) + mt_m;
                _this11.total_engagements_actuels = Number((_this11$total_engagem = _this11.total_engagements_actuels) === null || _this11$total_engagem === void 0 ? void 0 : _this11$total_engagem.toString().replace(/\s/g, "")) + mt_m;
              }
            });
          }
          if (this.revenu_domicilie_nsia != '') {
            this.revenu_domicilie_nsia.forEach(function (element) {
              if (element.checked) {
                element.is_recall_data = true;
              }
            });
          }
          if (this.frais_credits != '') {
            this.frais_credits.forEach(function (element) {
              element.is_recall_data = true;
            });
          }
          if (this.frais_garanties != '') {
            this.frais_garanties.forEach(function (element) {
              element.is_recall_data = true;
            });
          }
          this.formDataToBeWatched.frais_credits = this.frais_credits;
          this.formDataToBeWatched.frais_garanties = this.frais_garanties;
          this.formDataToBeWatched.engagements_en_cours = this.engagements_en_cours;
          this.formDataToBeWatched.revenu_domicilie_nsia = this.revenu_domicilie_nsia;
          this.calculValeurSituationFinanciere();
        }
        this.majTauxDuree();
      }
      if (this.meta_data["dossier_credit"]["convention_entreprise"] != undefined) {
        var convention_entreprise = this.meta_data["dossier_credit"]["convention_entreprise"];
        if ((convention_entreprise === null || convention_entreprise === void 0 ? void 0 : convention_entreprise.ent_pub_key) != undefined) {
          var _convention_entrepris;
          this.convention_entreprise = convention_entreprise.ent_pub_key;
          this.convention_entreprise_autre = convention_entreprise.ent_pub_key == 'autre' ? convention_entreprise === null || convention_entreprise === void 0 || (_convention_entrepris = convention_entreprise.info_entreprise) === null || _convention_entrepris === void 0 ? void 0 : _convention_entrepris.denomination : "";
          this.data_convention = this.getTauxAndFraisDossByCarcasseType('ppo', convention_entreprise);
        }
      }
      if (lentb.length > 0) {
        if (this.meta_data["dossier_credit"][createdKey] != undefined) {
          this.formDataToBeWatched = this.meta_data["dossier_credit"][createdKey];
          if (this.meta_data["dossier_credit"][createdKey]["revenu_domicilie_nsia"] != "") {
            this.revenu_domicilie_nsia = this.meta_data["dossier_credit"][createdKey]["revenu_domicilie_nsia"];
          }
          if (this.meta_data["dossier_credit"][createdKey]["engagements_en_cours"] != "") {
            this.engagements_en_cours = this.meta_data["dossier_credit"][createdKey]["engagements_en_cours"];

            // this.engagements_en_cours.forEach((element, index) => {
            //     if ([null, undefined].includes(element?.periodicite)) {
            //         this.engagements_en_cours[index]['periodicite'] = ""
            //     }
            //     if ([null, undefined].includes(element?.montant_periodicite)) {
            //         this.engagements_en_cours[index]['montant_periodicite'] = 0
            //     }
            //     if ([null, undefined].includes(element?.duree_credit)) {
            //         this.engagements_en_cours[index]['duree_credit'] = 0
            //     }
            // });
          }
          if (this.meta_data["dossier_credit"][createdKey]["frais_credits"] != "") {
            this.frais_credits = this.meta_data["dossier_credit"][createdKey]["frais_credits"];
          }
          if (this.meta_data["dossier_credit"][createdKey]["frais_garanties"] != "") {
            this.frais_garanties = this.meta_data["dossier_credit"][createdKey]["frais_garanties"];
          }
          this.total_engagements_actuels = 0;
          this.echeance_total = this.convertInt(this.formDataToBeWatched.r_mensualite);
          if (['', null, undefined, 0, '0'].includes(this.formDataToBeWatched.frequence_mois)) {
            this.formDataToBeWatched.frequence_mois = 1;
          }
          if (this.engagements_en_cours != '') {
            this.engagements_en_cours.forEach(function (element) {
              var _element$encours2, _element$mensualite2;
              var mt = Number(element === null || element === void 0 || (_element$encours2 = element.encours) === null || _element$encours2 === void 0 ? void 0 : _element$encours2.toString().replace(/\s/g, ""));
              var mt_m = Number(element === null || element === void 0 || (_element$mensualite2 = element.mensualite) === null || _element$mensualite2 === void 0 ? void 0 : _element$mensualite2.toString().replace(/\s/g, ""));
              if (mt > 0 && element.rachat != 'R') {
                var _this11$echeance_tota2, _this11$total_engagem2;
                _this11.echeance_total = Number((_this11$echeance_tota2 = _this11.echeance_total) === null || _this11$echeance_tota2 === void 0 ? void 0 : _this11$echeance_tota2.toString().replace(/\s/g, "")) + mt_m;
                _this11.total_engagements_actuels = Number((_this11$total_engagem2 = _this11.total_engagements_actuels) === null || _this11$total_engagem2 === void 0 ? void 0 : _this11$total_engagem2.toString().replace(/\s/g, "")) + mt_m;
              }
            });
          }
          this.calculValeurSituationFinanciere();
        }
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
          console.log(error);
        }.bind(this));
      } else {
        alert("Unauthenticated");
      }
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
    retract2: function retract2() {
      this.seen2 = !this.seen2;
    },
    retract3: function retract3() {
      this.seen3 = !this.seen3;
    },
    retract4: function retract4() {
      this.seen4 = !this.seen4;
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
    handleInputModetranche: function handleInputModetranche($event) {
      if ($event.target.value == 'In fine') {
        var _this$formDataToBeWat5;
        this.formDataToBeWatched.mode_paiement_demande = "In fine";
        this.formDataToBeWatched.frequence_versement = 1;
        this.formDataToBeWatched.frequence_mois = (_this$formDataToBeWat5 = this.formDataToBeWatched) === null || _this$formDataToBeWat5 === void 0 ? void 0 : _this$formDataToBeWat5.duree_credit;
      }
      if ($event.target.value == 'Mensuelle') {
        this.formDataToBeWatched.mode_paiement_demande = "Mensuelle";
        this.formDataToBeWatched.frequence_versement = 1;
        this.formDataToBeWatched.frequence_mois = 1;
      }
      if ($event.target.value == 'Trimestrielle') {
        this.formDataToBeWatched.mode_paiement_demande = "Trimestrielle";
        this.formDataToBeWatched.frequence_versement = 1;
        this.formDataToBeWatched.frequence_mois = 3;
      }
      if ($event.target.value == 'Semestrielle') {
        this.formDataToBeWatched.mode_paiement_demande = "Semestrielle";
        this.formDataToBeWatched.frequence_versement = 1;
        this.formDataToBeWatched.frequence_mois = 6;
      }
      if ($event.target.value == 'Annuel') {
        this.formDataToBeWatched.mode_paiement_demande = "Annuel";
        this.formDataToBeWatched.frequence_versement = 1;
        this.formDataToBeWatched.frequence_mois = 12;
      }
      if ($event.target.value == 'Bimensuelle') {
        this.formDataToBeWatched.mode_paiement_demande = "Bimensuelle";
        this.formDataToBeWatched.frequence_versement = 2;
        this.formDataToBeWatched.frequence_mois = 1;
      }
      if ($event.target.value == 'Bimestrielle') {
        this.formDataToBeWatched.mode_paiement_demande = "Bimestrielle";
        this.formDataToBeWatched.frequence_versement = 1;
        this.formDataToBeWatched.frequence_mois = 2;
      }
      if ($event.target.value == 'Bimestrielle') {
        this.formDataToBeWatched.mode_paiement_demande = "Bimestrielle";
        this.formDataToBeWatched.frequence_versement = 1;
        this.formDataToBeWatched.frequence_mois = 2;
      }
      if ($event.target.value == 'Plusieurs tranches') {
        this.formDataToBeWatched.mode_paiement_demande = "Plusieurs tranches";
        this.formDataToBeWatched.frequence_versement = 0;
        this.formDataToBeWatched.frequence_mois = 0;
      }
      this.handleInputPeriodicite();
    },
    handleInputPeriodicite: function handleInputPeriodicite() {
      var _this12 = this;
      setTimeout(function () {
        if (_this12.formDataToBeWatched.mode_paiement_demande == 'In fine') {
          _this12.formDataToBeWatched.frequence_versement = 1;
          _this12.formDataToBeWatched.frequence_mois = _this12.formDataToBeWatched.duree_credit;
          _this12.updateTauxCredit();
        }
        _this12.handleInput();
      }, 1500);
    },
    updateTauxCredit: function updateTauxCredit() {
      var _this13 = this;
      var type_client = this.formDataToBeWatched.type_client;
      if (this.montantsQuotites != undefined) {
        var type_client_to_use = type_client == 'Privé' ? 'prive' : 'fonctionnaire';
        var mq = this.montantsQuotites.find(function (el) {
          if (el.type == type_client_to_use && _this13.formDataToBeWatched.duree_credit >= el.debut && _this13.formDataToBeWatched.duree_credit <= el.fin) {
            return el;
          }
        });
        if (mq) {
          if (['autre', '', null, undefined].includes(this.convention_entreprise)) {
            this.formDataToBeWatched.taux = mq.pourcentage;
          } else {
            var _this$data_convention;
            if (!['', null, undefined].includes((_this$data_convention = this.data_convention) === null || _this$data_convention === void 0 ? void 0 : _this$data_convention.taux)) {
              var _this$data_convention2;
              this.formDataToBeWatched.taux = (_this$data_convention2 = this.data_convention) === null || _this$data_convention2 === void 0 ? void 0 : _this$data_convention2.taux;
            } else {
              this.formDataToBeWatched.taux = mq.pourcentage;
            }
          }
        }
      }
      this.checkIfShowDureeDiffere();
      this.handleInput();
    },
    handleInput: function handleInput() {
      var _this$formDataToBeWat6,
        _this14 = this,
        _this$formDataToBeWat7,
        _this$formDataToBeWat8,
        _this$echeance_total,
        _this$formDataToBeWat9,
        _this$echeance_total2;
      var reset_taux_qc = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      if (((_this$formDataToBeWat6 = this.formDataToBeWatched) === null || _this$formDataToBeWat6 === void 0 ? void 0 : _this$formDataToBeWat6.mode_paiement_demande) == 'In fine') {
        this.formDataToBeWatched.frequence_versement = 1;
        this.formDataToBeWatched.frequence_mois = this.formDataToBeWatched.duree_credit;
      }
      var type_client = this.formDataToBeWatched.type_client;
      this.revenu_domicilie_nsia.forEach(function (el) {
        if (el.eligible) {
          var _el$taux, _el$mensualite, _el$taux_qc2, _el$montant_pondere2;
          var t = (Number((_el$taux = el.taux) === null || _el$taux === void 0 ? void 0 : _el$taux.toString().replace(/\s/g, "")) / 100).toFixed(2);
          var periode = 1;
          var periodicite = _this14.periodicites.find(function (p) {
            return p.libelle == el.periodicite;
          });
          if (periodicite != undefined && (periodicite === null || periodicite === void 0 ? void 0 : periodicite.month) != undefined) {
            periode = periodicite === null || periodicite === void 0 ? void 0 : periodicite.month;
          }
          if ((periodicite === null || periodicite === void 0 ? void 0 : periodicite.libelle) == "Bimensuelle") {
            var _el$montant_emprunteu;
            el.mensualite = Number((_el$montant_emprunteu = el.montant_emprunteur) === null || _el$montant_emprunteu === void 0 ? void 0 : _el$montant_emprunteu.toString().replace(/\s/g, "")) * periode;
          } else {
            var _el$montant_emprunteu2;
            el.mensualite = Number((_el$montant_emprunteu2 = el.montant_emprunteur) === null || _el$montant_emprunteu2 === void 0 ? void 0 : _el$montant_emprunteu2.toString().replace(/\s/g, "")) / periode;
          }
          el.mensualite = parseInt(el.mensualite.toFixed(2));
          el.montant_pondere = Number((_el$mensualite = el.mensualite) === null || _el$mensualite === void 0 ? void 0 : _el$mensualite.toString().replace(/\s/g, "")) * t;
          if (el.libelle == "Salaire net") {
            var _el$taux_qc, _el$montant_pondere;
            el.taux_qc1 = reset_taux_qc ? _this14.determinePourQutotite(el.montant_pondere, type_client) : el.taux_qc1;
            el.taux_qc2 = reset_taux_qc ? _this14.determinePourQutotite(el.montant_pondere) : el.taux_qc2;
            t = (Number((_el$taux_qc = el.taux_qc2) === null || _el$taux_qc === void 0 ? void 0 : _el$taux_qc.toString().replace(/\s/g, "")) / 100).toFixed(2);
            el.montant_qc2 = Number((_el$montant_pondere = el.montant_pondere) === null || _el$montant_pondere === void 0 ? void 0 : _el$montant_pondere.toString().replace(/\s/g, "")) * t;
          } else {
            if (['Prime', 'Loyer'].includes(el.libelle)) {
              el.taux_qc1 = el.taux_qc1 == 0 ? 75 : el.taux_qc1;
            }
          }
          t = (Number((_el$taux_qc2 = el.taux_qc1) === null || _el$taux_qc2 === void 0 ? void 0 : _el$taux_qc2.toString().replace(/\s/g, "")) / 100).toFixed(2);
          el.montant_qc1 = Number((_el$montant_pondere2 = el.montant_pondere) === null || _el$montant_pondere2 === void 0 ? void 0 : _el$montant_pondere2.toString().replace(/\s/g, "")) * t;
          el.montant_pondere = parseInt(el.montant_pondere.toFixed(2));
          el.montant_qc1 = parseInt(el.montant_qc1.toFixed(2));
          el.montant_qc2 = parseInt(el.montant_qc2.toFixed(2));
        }
      });
      this.frais_credits.forEach(function (el) {
        var _el$taux2, _this14$formDataToBeW;
        var t = (Number((_el$taux2 = el.taux) === null || _el$taux2 === void 0 ? void 0 : _el$taux2.toString().replace(/\s/g, "")) / 100).toFixed(4);
        el.valeur = Number((_this14$formDataToBeW = _this14.formDataToBeWatched.montant_credit) === null || _this14$formDataToBeW === void 0 ? void 0 : _this14$formDataToBeW.toString().replace(/\s/g, "")) * t;
        el.valeur = parseInt(el.valeur.toFixed(2));
        if (el.limite_max != 0) {
          if (el.valeur <= el.limite_min) {
            el.valeur = el.limite_min;
          }
          if (el.valeur >= el.limite_max) {
            el.valeur = el.limite_max;
          }
        } else {
          if (el.valeur <= el.limite_min) {
            el.valeur = el.limite_min;
          }
        }
      });
      this.frais_garanties.forEach(function (el) {
        var _el$taux3, _this14$formDataToBeW2;
        var t = (Number((_el$taux3 = el.taux) === null || _el$taux3 === void 0 ? void 0 : _el$taux3.toString().replace(/\s/g, "")) / 100).toFixed(4);
        el.valeur = Number((_this14$formDataToBeW2 = _this14.formDataToBeWatched.montant_credit) === null || _this14$formDataToBeW2 === void 0 ? void 0 : _this14$formDataToBeW2.toString().replace(/\s/g, "")) * t;
        el.valeur = parseInt(el.valeur.toFixed(2));
      });

      // this.computedMensualite()

      this.formDataToBeWatched.revenu_domicilie_nsia = this.revenu_domicilie_nsia;
      this.formDataToBeWatched.engagements_en_cours = this.engagements_en_cours;
      this.formDataToBeWatched.frais_credits = this.frais_credits;
      this.formDataToBeWatched.frais_garanties = this.frais_garanties;
      var total_encours = this.somX3(this.engagements_en_cours, 'encours');
      var total_montant = this.somX3(this.engagements_en_cours, 'montant');
      var total_mensualite = this.somX3(this.engagements_en_cours, 'mensualite');
      this.formDataToBeWatched.total_frais_credit = this.somX3(this.frais_credits, 'valeur');
      this.formDataToBeWatched.total_frais_garantie = this.somX3(this.frais_garanties, 'valeur');
      this.formDataToBeWatched.revenu_nsia_total_colonne_montant_pondere = this.somX3(this.revenu_domicilie_nsia, 'montant_pondere');
      this.formDataToBeWatched.revenu_nsia_total_colonne_mensualite = this.somX3(this.revenu_domicilie_nsia, 'mensualite');
      this.formDataToBeWatched.revenu_nsia_total_colonne_montant_qc1 = this.somX3(this.revenu_domicilie_nsia, 'montant_qc1');
      this.formDataToBeWatched.revenu_nsia_total_colonne_montant_qc2 = this.somX3(this.revenu_domicilie_nsia, 'montant_qc2');
      this.formDataToBeWatched.revenu_nsia_total_colonne_emprunteur = this.somX3(this.revenu_domicilie_nsia, 'montant_emprunteur');
      this.formDataToBeWatched.revenu_nsia_total_colonne_conjoint = this.somX3(this.revenu_domicilie_nsia, 'montant_conjoint');
      this.formDataToBeWatched.revenu_nsia_total = this.formDataToBeWatched.revenu_nsia_total_colonne_emprunteur + this.formDataToBeWatched.revenu_nsia_total_colonne_conjoint;
      if (this.convertInt(this.formDataToBeWatched.revenu_nsia_total_colonne_montant_pondere) > 0) {
        this.formDataToBeWatched.revenu_nsia_total_colonne_taux_qc1 = (this.convertInt(this.formDataToBeWatched.revenu_nsia_total_colonne_montant_qc1) / this.convertInt(this.formDataToBeWatched.revenu_nsia_total_colonne_montant_pondere) * 100).toFixed(2);
        this.formDataToBeWatched.revenu_nsia_total_colonne_taux_qc2 = (this.convertInt(this.formDataToBeWatched.revenu_nsia_total_colonne_montant_qc2) / this.convertInt(this.formDataToBeWatched.revenu_nsia_total_colonne_montant_pondere) * 100).toFixed(2);
      } else {
        this.formDataToBeWatched.revenu_nsia_total_colonne_taux_qc1 = 0;
        this.formDataToBeWatched.revenu_nsia_total_colonne_taux_qc2 = 0;
      }
      this.revenu_domicilie_nsia.forEach(function (element) {
        var _element$montant_empr, _element$montant_conj;
        var total = Number(element === null || element === void 0 || (_element$montant_empr = element.montant_emprunteur) === null || _element$montant_empr === void 0 ? void 0 : _element$montant_empr.toString().replace(/\s/g, "")) + Number(element === null || element === void 0 || (_element$montant_conj = element.montant_conjoint) === null || _element$montant_conj === void 0 ? void 0 : _element$montant_conj.toString().replace(/\s/g, ""));
        element.total_ligne = total;
      });
      this.formDataToBeWatched.engagements_en_cours_total_encours = total_encours;
      this.formDataToBeWatched.engagements_en_cours_total_montant = total_montant;
      this.formDataToBeWatched.engagements_en_cours_total_mensualite = total_mensualite;
      this.formDataToBeWatched.engagements_en_cours_total_encours_ecart = total_encours + Number((_this$formDataToBeWat7 = this.formDataToBeWatched.engagements_en_cours_total_encours_theorique) === null || _this$formDataToBeWat7 === void 0 ? void 0 : _this$formDataToBeWat7.toString().replace(/\s/g, ""));
      this.handleSimulate();
      this.loadDataRentabilite();
      this.total_engagements_actuels = 0;
      this.echeance_total = this.convertInt(this.formDataToBeWatched.r_mensualite);
      if (this.engagements_en_cours != '') {
        this.engagements_en_cours.forEach(function (element) {
          var _element$encours3, _element$mensualite3;
          var mt = Number(element === null || element === void 0 || (_element$encours3 = element.encours) === null || _element$encours3 === void 0 ? void 0 : _element$encours3.toString().replace(/\s/g, ""));
          var mt_m = Number(element === null || element === void 0 || (_element$mensualite3 = element.mensualite) === null || _element$mensualite3 === void 0 ? void 0 : _element$mensualite3.toString().replace(/\s/g, ""));
          if (mt > 0 && element.rachat != 'R') {
            var _this14$echeance_tota, _this14$total_engagem;
            _this14.echeance_total = Number((_this14$echeance_tota = _this14.echeance_total) === null || _this14$echeance_tota === void 0 ? void 0 : _this14$echeance_tota.toString().replace(/\s/g, "")) + mt_m;
            _this14.total_engagements_actuels = Number((_this14$total_engagem = _this14.total_engagements_actuels) === null || _this14$total_engagem === void 0 ? void 0 : _this14$total_engagem.toString().replace(/\s/g, "")) + mt_m;
          }
        });
      }
      this.formDataToBeWatched.quotite_cessible_disponible = Number((_this$formDataToBeWat8 = this.formDataToBeWatched.revenu_nsia_total_colonne_montant_qc1) === null || _this$formDataToBeWat8 === void 0 ? void 0 : _this$formDataToBeWat8.toString().replace(/\s/g, "")) - Number((_this$echeance_total = this.echeance_total) === null || _this$echeance_total === void 0 ? void 0 : _this$echeance_total.toString().replace(/\s/g, ""));
      this.formDataToBeWatched.quotite_cessible_disponible_general = Number((_this$formDataToBeWat9 = this.formDataToBeWatched.revenu_nsia_total_colonne_montant_qc2) === null || _this$formDataToBeWat9 === void 0 ? void 0 : _this$formDataToBeWat9.toString().replace(/\s/g, "")) - Number((_this$echeance_total2 = this.echeance_total) === null || _this$echeance_total2 === void 0 ? void 0 : _this$echeance_total2.toString().replace(/\s/g, ""));
      this.calculValeurSituationFinanciere();
      EventBus.$emit("dossier-updated-dc-rev-1", this.formDataToBeWatched);
      var conv_ent = this.convention_entreprises_.find(function (el) {
        return el.ent_pub_key == _this14.convention_entreprise;
      });
      if (conv_ent) {
        var _conv_ent;
        conv_ent = JSON.parse(JSON.stringify(conv_ent));
        if (((_conv_ent = conv_ent) === null || _conv_ent === void 0 ? void 0 : _conv_ent.ent_pub_key) == "autre") {
          conv_ent.denomination = this.convention_entreprise_autre;
          conv_ent.info_entreprise.denomination = this.convention_entreprise_autre;
        }
      }
      EventBus.$emit("dossier-updated-dcp-0", {
        data_tb0: this.formDataToBeWatched,
        convention_entreprise: conv_ent
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
        id: "dcp-ppo2-head"
      };
      // console.log(p)
      this.$emit("load-buffer", p);
    },
    addMoreRevenu: function addMoreRevenu() {
      this.revenu_domicilie_nsia.push({
        libelle: "",
        checked: true,
        montant_emprunteur: 0,
        montant_conjoint: 0,
        total_ligne: 0,
        eligible: false,
        source_remboursement: false,
        periodicite: "",
        mensualite: 0,
        taux: 0,
        montant_pondere: 0,
        taux_qc1: 0,
        montant_qc1: 0,
        taux_qc2: 0,
        montant_qc2: 0,
        commentaire: ""
      });
      this.handleInput();
    },
    removeRevenu: function removeRevenu(index) {
      this.revenu_domicilie_nsia.splice(index, 1);
      this.handleInput();
    },
    addMore: function addMore() {
      this.engagements_en_cours.push({
        libelle: "",
        banque: "",
        type_credit: "",
        checked: true,
        montant: 0,
        encours: 0,
        mensualite: 0,
        date_echeance: "",
        rachat: ""
        // periodicite: "",
        // montant_periodicite: 0,
        // duree_credit: 0,
      });
      this.handleInput();
    },
    remove: function remove(index) {
      this.engagements_en_cours.splice(index, 1);
      this.handleInput();
    },
    addMoreFrais1: function addMoreFrais1() {
      this.frais_credits.push({
        libelle: "",
        taux: 0,
        taux_initial: 0,
        valeur: 0
      });
      this.handleInput();
    },
    removeFrais1: function removeFrais1(index) {
      this.frais_credits.splice(index, 1);
      this.handleInput();
    },
    addMoreFrais2: function addMoreFrais2() {
      this.frais_garanties.push({
        libelle: "",
        taux: 0,
        taux_initial: 0,
        valeur: 0
      });
      this.handleInput();
    },
    removeFrais2: function removeFrais2(index) {
      this.frais_garanties.splice(index, 1);
      this.handleInput();
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
        _services_credit_service__WEBPACK_IMPORTED_MODULE_2__["default"].loadScoringData().then(function (res) {
          _this16.scoringData(res);
          localStorage.setItem('scoring_criteres', JSON.stringify(res));
        })["catch"](function (err) {
          console.log(err);
        });
      } else {
        var data = JSON.parse(cachedScoringCritere);
        this.scoringData(data);
      }
    },
    loadPourQuotiteData: function loadPourQuotiteData() {
      var _this17 = this;
      _services_credit_service__WEBPACK_IMPORTED_MODULE_2__["default"].loadPourQuotiteData().then(function (res) {
        _this17.pourcentages_quotites = res.data;
      })["catch"](function (err) {
        console.log(err);
      });

      // const cachedPourcentagesQuotites = localStorage.getItem('pourcentages_quotites');
      // if (!cachedPourcentagesQuotites) {

      //     Credit.loadPourQuotiteData()
      //         .then(res => {
      //             this.pourcentages_quotites = res.data;
      //             localStorage.setItem('pourcentages_quotites', JSON.stringify(res.data));
      //         }).catch(err => {
      //             console.log(err)
      //         })

      // } else {
      //     let data = JSON.parse(cachedPourcentagesQuotites);
      //     this.pourcentages_quotites = data;
      // }
    },
    determinePourQutotite: function determinePourQutotite(value) {
      var _this18 = this;
      var type_client = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var taux = 0;
      if (this.pourcentages_quotites.length == 0) {
        setTimeout(function () {
          _this18.handleInput();
        }, 1500);
      } else {
        this.pourcentages_quotites.forEach(function (element) {
          if (element.entity == 'NSIA' && element.type_client == type_client) {
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
    },
    getCreditBanques: function getCreditBanques() {
      var _this19 = this;
      var cachedCreditTypes = localStorage.getItem('banque_credit_types');
      if (!cachedCreditTypes) {
        _services_credit_service__WEBPACK_IMPORTED_MODULE_2__["default"].loadCreditBanques().then(function (res) {
          _this19.type_credits = res.data;
          localStorage.setItem('banque_credit_types', JSON.stringify(res.data));
        })["catch"](function (err) {
          console.log(err);
        });
      } else {
        var data = JSON.parse(cachedCreditTypes);
        this.type_credits = data;
      }
    },
    loadTauxFraisDossier: function loadTauxFraisDossier(value) {
      var _this20 = this;
      if (this.frais_banques.length == 0) {
        setTimeout(function () {
          _this20.loadTauxFraisDossier(value);
        }, 1500);
      } else {
        var newMinFraisDossier = "";
        var newMaxFraisDossier = "";
        var newTauxFraisDossier = "";
        if (!['autre', '', null, undefined].includes(this.convention_entreprise)) {
          var _this$data_convention3;
          if (!['', null, undefined].includes((_this$data_convention3 = this.data_convention) === null || _this$data_convention3 === void 0 ? void 0 : _this$data_convention3.frais_dossiers)) {
            if (this.data_convention.frais_dossiers.length > 0) {
              var _this$data_convention4;
              newMinFraisDossier = 0;
              newMaxFraisDossier = 0;
              newTauxFraisDossier = 0;

              /** CAS DU PPO */
              (_this$data_convention4 = this.data_convention) === null || _this$data_convention4 === void 0 || _this$data_convention4.frais_dossiers.forEach(function (el) {
                newTauxFraisDossier = el === null || el === void 0 ? void 0 : el.alpha;
                newMinFraisDossier = el === null || el === void 0 ? void 0 : el.frais_min;
                newMaxFraisDossier = el === null || el === void 0 ? void 0 : el.frais_max;
              });
              /** CAS DU PPO */
            }
          }
        }
        this.frais_credits.forEach(function (el) {
          _this20.frais_banques.forEach(function (b) {
            if (el.libelle == b.libelle) {
              var min = Number(b.montant_min);
              var max = Number(b.montant_max);
              el.limite_min = Number(b.frais_min);
              el.limite_max = Number(b.frais_max);
              if (max != 0) {
                if (min <= value && max > value) {
                  el.taux_initial = b.taux;
                  el.taux = b.taux;
                }
              } else {
                if (value >= min) {
                  el.taux_initial = b.taux;
                  el.taux = b.taux;
                }
              }
              if (el.libelle == "Frais de dossier") {
                if (newTauxFraisDossier != "") {
                  el.taux_initial = newTauxFraisDossier;
                  el.taux = newTauxFraisDossier;
                  el.limite_min = Number(newMinFraisDossier);
                  el.limite_max = Number(newMaxFraisDossier);
                }
              }
            }
          });
        });
        this.handleInput();
      }
    },
    formatAmount: function formatAmount(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    },
    convertInt: function convertInt(n) {
      var _n$toString;
      return Number(n === null || n === void 0 || (_n$toString = n.toString()) === null || _n$toString === void 0 ? void 0 : _n$toString.replace(/\s/g, ''));
    },
    handleSimulate: function handleSimulate() {
      var _this$formDataToBeWat0, _this$formDataToBeWat1, _this$formDataToBeWat10, _this$formDataToBeWat11;
      var tauxHT = ((_this$formDataToBeWat0 = this.formDataToBeWatched) === null || _this$formDataToBeWat0 === void 0 ? void 0 : _this$formDataToBeWat0.taux) / 100;
      var tps_default = (_this$formDataToBeWat1 = (_this$formDataToBeWat10 = this.formDataToBeWatched) === null || _this$formDataToBeWat10 === void 0 ? void 0 : _this$formDataToBeWat10.tps) !== null && _this$formDataToBeWat1 !== void 0 ? _this$formDataToBeWat1 : 10;
      var tps = tps_default / 100;
      var tauxTTC = tauxHT * (1 + tps);
      this.formDataToBeWatched.tps = tps_default;
      if (['', null, undefined].includes(this.formDataToBeWatched.mode_tranche)) {
        this.formDataToBeWatched.mode_tranche = "Mensuelle";
      }
      if (['', null, undefined].includes(this.formDataToBeWatched.mode_paiement_demande)) {
        this.formDataToBeWatched.mode_paiement_demande = "Mensuelle";
      }
      if (['', null, undefined].includes(this.formDataToBeWatched.frequence_mois)) {
        this.formDataToBeWatched.frequence_mois = 1;
      }
      if (['', null, undefined].includes(this.formDataToBeWatched.frequence_versement)) {
        this.formDataToBeWatched.frequence_versement = 1;
      }
      var montant = this.convertInt(this.formDataToBeWatched.montant_credit);
      var duree = parseFloat(this.formDataToBeWatched.duree_credit);
      this.formDataToBeWatched.duree_credit = duree;
      if (this.frais_credits) {
        this.frais_credits.forEach(function (el) {
          if (el.libelle == "Prime d'assurance") {
            tauxTTC += el.taux / 100;
          }
        });
      }
      var frequence_mois = parseInt((_this$formDataToBeWat11 = this.formDataToBeWatched) === null || _this$formDataToBeWat11 === void 0 ? void 0 : _this$formDataToBeWat11.frequence_mois);
      var frequence_versement = parseInt(this.formDataToBeWatched.frequence_versement);
      var nbEcheance = duree * frequence_versement / frequence_mois;
      var nbEcheanceAnnuel = 12 * frequence_versement / frequence_mois;
      var tauxInteret = tauxTTC / nbEcheanceAnnuel;
      var montantEcheance = montant * tauxInteret / (1 - Math.pow(1 + tauxInteret, -1 * nbEcheance));
      var tauxMensuel = tauxInteret;
      var mensualite = montantEcheance;

      // let tauxMensuel = Math.pow((1 + taux / 100), frequence_mois / 12) - 1
      // let mensualite = Hypo.VPM(montant, duree, tauxMensuel, 0);

      this.res = 0;
      var interet_ht = 0;
      if (tauxMensuel == 0) {
        mensualite = montant;
      } else {
        interet_ht = mensualite * duree - montant;
        this.res = Math.ceil(interet_ht + interet_ht * this.taxe / 100);
      }
      if (duree == 0) {
        duree = 1;
      }

      // mensualite = Math.ceil(mensualite + ((interet_ht * this.taxe / 100) / duree))
      var totalCredt = this.res + parseInt(montant);
      this.formDataToBeWatched.r_mensualite = this.formatAmount(Math.ceil(mensualite));
      this.formDataToBeWatched.r_interet = this.formatAmount(this.res);
      this.formDataToBeWatched.r_ttcredit = this.formatAmount(totalCredt);
    },
    loadDataRentabilite: function loadDataRentabilite() {
      var _this21 = this;
      this.interetLoading = true;
      var frais = this.convertInt(this.formDataToBeWatched.total_frais_credit); // + this.convertInt(this.formDataToBeWatched.total_frais_garantie)
      var montant = this.convertInt(this.formDataToBeWatched.montant_credit);
      _services_credit_service__WEBPACK_IMPORTED_MODULE_2__["default"].calcul_interet(this.formDataToBeWatched.duree_credit, this.formDataToBeWatched.taux, montant, frais).then(function (res) {
        _this21.dataRentabilite(res);
        _this21.interetLoading = false;
      })["catch"](function (err) {
        _this21.interetLoading = false;
        console.log(err);
      });
    },
    dataRentabilite: function dataRentabilite(res) {
      this.formDataToBeWatched.rentabilite = res.data;
    },
    saveNewConventionEntreprise: function saveNewConventionEntreprise(data) {
      var _this22 = this;
      return new Promise(function (resolve, reject) {
        _this22.$axios.post(_this22.ebapisHost + "creditbuilder/api/v1/save-entreprise-convention/", data).then(function (res) {
          resolve(res);
        })["catch"](function (err) {
          return reject(err);
        });
      });
    },
    saveNewConventionEntreprise_: function saveNewConventionEntreprise_(d) {
      var _this23 = this;
      if (!['', null, undefined].includes(d)) {
        this.loadConEntreprise = true;
        var data = {
          "cred_pub_key": this.meta_parseable['cred_pub_key'],
          "data": d
        };
        this.handleInput();
        this.saveNewConventionEntreprise(data).then(function (res) {
          var _this23$formDataToBeW;
          _this23.data_convention = _this23.getTauxAndFraisDossByCarcasseType('ppo', d);
          _this23.updateTauxCredit();
          _this23.loadTauxFraisDossier(Number((_this23$formDataToBeW = _this23.formDataToBeWatched.montant_credit) === null || _this23$formDataToBeW === void 0 ? void 0 : _this23$formDataToBeW.toString().replace(/\s/g, "")));
          _this23.loadConEntreprise = false;
          EventBus.$emit('value-updated');
        })["catch"](function (err) {
          console.error(err);
          _this23.loadConEntreprise = false;
        });
      }
    },
    handleInputConventionEntrepriseAutre: function handleInputConventionEntrepriseAutre() {
      var _this24 = this;
      if (this.convention_entreprise_autre != "") {
        var conv_ent = this.convention_entreprises_.find(function (el) {
          return el.ent_pub_key == _this24.convention_entreprise;
        });
        if (conv_ent) {
          conv_ent = JSON.parse(JSON.stringify(conv_ent));
          conv_ent.denomination = this.convention_entreprise_autre;
          conv_ent.info_entreprise.denomination = this.convention_entreprise_autre;
          this.saveNewConventionEntreprise_(conv_ent);
          this.handleInput();
        }
      }
    },
    handleInputFreqMois: function handleInputFreqMois() {
      this.updateTauxCredit();
    },
    handleInputFreqVersement: function handleInputFreqVersement() {
      this.updateTauxCredit();
    },
    checkIfShowDureeDiffere: function checkIfShowDureeDiffere() {
      if (this.formDataToBeWatched.mode_paiement_demande != 'In fine') {
        var frequence_mois = parseInt(this.formDataToBeWatched.frequence_mois);
        var duree_credit = parseInt(this.formDataToBeWatched.duree_credit);
        var res = duree_credit % frequence_mois;
        this.formDataToBeWatched.duree_differee = res;
        return res != 0;
      }
      this.formDataToBeWatched.duree_differee = 0;
      return false;
    }
  },
  watch: {
    formDataToBeWatched: {
      handler: function handler(newVal, oldVal) {
        this.autosaving(newVal, oldVal);
      },
      deep: true,
      immediate: true
    },
    "formDataToBeWatched.type_client": {
      handler: function handler(newVal, oldVal) {
        if (newVal != oldVal && !['', null, undefined].includes(oldVal)) {
          this.handleInput(true);
        } else {
          this.handleInput();
        }
      },
      deep: true,
      immediate: true
    },
    convention_entreprise: {
      handler: function handler(newVal, oldVal) {
        if (!['', null, undefined].includes(oldVal)) {
          if (newVal != "autre") {
            this.convention_entreprise_autre = "";
            var conv = this.convention_entreprises_.find(function (el) {
              return el.ent_pub_key == newVal;
            });
            this.saveNewConventionEntreprise_(conv);
          }
        }
      },
      deep: true,
      immediate: false
    }
    // data_convention: {
    //     handler(newVal, oldVal) {
    //         this.updateTauxCredit();
    //         this.loadTauxFraisDossier(Number(this.formDataToBeWatched.montant_credit?.toString().replace(/\s/g, "")));
    //     },
    //     deep: true,
    //     immediate: false,
    // }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/nsia/revue_fiche_engagement/DC-REV1.vue?vue&type=template&id=fc3dda9e&scoped=true":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/nsia/revue_fiche_engagement/DC-REV1.vue?vue&type=template&id=fc3dda9e&scoped=true ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm$formDataToBeWatch, _vm$formDataToBeWatch2, _vm$formDataToBeWatch3, _vm$formDataToBeWatch4, _vm$formDataToBeWatch5, _vm$formDataToBeWatch6, _vm$formDataToBeWatch7, _vm$formDataToBeWatch8, _vm$formDataToBeWatch9;
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
      id: "dcp-ppo2-head"
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col"
  }, [_vm._v("\n                            " + _vm._s(_vm.tb_display_name) + " : Revue fiche d'engagement\n                        ")]), _vm._v(" "), _c("div", {
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
    staticClass: "row p-0"
  }, [_c("div", {
    staticClass: "col-12 p-0 position-relative"
  }, [_vm.loadingData ? _c("div", {
    staticClass: "card-body"
  }, [_vm._m(0)]) : _c("div", [_c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_c("label", {
    staticClass: "text-nowrap",
    attrs: {
      "for": "type_demande"
    }
  }, [_vm._v("Type de demande")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.type_demande,
      expression: "formDataToBeWatched.type_demande"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      readonly: "",
      id: "type_demande"
    },
    domProps: {
      value: _vm.formDataToBeWatched.type_demande
    },
    on: {
      input: [function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formDataToBeWatched, "type_demande", $event.target.value);
      }, _vm.handleInput]
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_c("label", {
    staticClass: "text-nowrap",
    attrs: {
      "for": "type_credit"
    }
  }, [_vm._v("Type de crédit")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.type_credit,
      expression: "formDataToBeWatched.type_credit"
    }],
    staticClass: "form-control recall-data",
    attrs: {
      type: "text",
      readonly: "",
      id: "type_credit"
    },
    domProps: {
      value: _vm.formDataToBeWatched.type_credit
    },
    on: {
      input: [function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formDataToBeWatched, "type_credit", $event.target.value);
      }, _vm.handleInput]
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(1), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.type_client,
      expression: "formDataToBeWatched.type_client"
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
        _vm.$set(_vm.formDataToBeWatched, "type_client", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }, _vm.updateTauxCredit]
    }
  }, [_c("option", {
    attrs: {
      value: ""
    }
  }), _vm._v(" "), _c("option", {
    attrs: {
      value: "Privé"
    }
  }, [_vm._v("Privé")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "Fonctionnaire"
    }
  }, [_vm._v("Fonctionnaire")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(2), _vm._v(" "), _c("div", {
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
      options: _vm.convention_entreprises_,
      disabled: _vm.loadConEntreprise
    },
    scopedSlots: _vm._u([{
      key: "option",
      fn: function fn(_ref) {
        var option = _ref.option;
        return [_c("p", {
          staticClass: "multiselect-option"
        }, [_vm._v(_vm._s(option.denomination))])];
      }
    }, {
      key: "singlelabel",
      fn: function fn(_ref2) {
        var value = _ref2.value;
        return [_c("p", {
          staticClass: "multiselect-single-label"
        }, [_vm._v(_vm._s(value.denomination))])];
      }
    }], null, false, 3492838596),
    model: {
      value: _vm.convention_entreprise,
      callback: function callback($$v) {
        _vm.convention_entreprise = $$v;
      },
      expression: "convention_entreprise"
    }
  }), _vm._v(" "), _vm.loadConEntreprise ? _c("span", {
    staticClass: "spinner-border spinner-border spinner-custom-input",
    staticStyle: {
      "margin-right": "17px"
    }
  }) : _vm._e()], 1)]), _vm._v(" "), _vm.convention_entreprise == "autre" ? _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(3), _vm._v(" "), _c("input", {
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
      change: _vm.handleInputConventionEntrepriseAutre,
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.convention_entreprise_autre = $event.target.value;
      }
    }
  })]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(4), _vm._v(" "), _c("div", {
    staticClass: "d-flex",
    staticStyle: {
      "min-width": "150px"
    }
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.duree_credit,
      expression: "formDataToBeWatched.duree_credit"
    }],
    staticClass: "form-control recall-data",
    attrs: {
      type: "number",
      id: "duree_credit",
      min: "0"
    },
    domProps: {
      value: _vm.formDataToBeWatched.duree_credit
    },
    on: {
      input: [function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formDataToBeWatched, "duree_credit", $event.target.value);
      }, _vm.updateTauxCredit]
    }
  }), _vm._v(" "), _c("input", {
    staticClass: "form-control flex-1",
    staticStyle: {
      "min-width": "45px",
      background: "#e9ecef",
      "margin-left": "2px"
    },
    attrs: {
      type: "text",
      placeholder: "Mois"
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4 d-none"
  }, [_c("label", {
    staticClass: "text-nowrap",
    attrs: {
      "for": "duree_credit"
    }
  }, [_vm._v("Périodicité")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.mode_paiement_demande,
      expression: "formDataToBeWatched.mode_paiement_demande"
    }],
    staticClass: "form-select single-select",
    attrs: {
      required: "",
      name: "mode_paiement"
    },
    on: {
      change: [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.formDataToBeWatched, "mode_paiement_demande", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }, _vm.handleInputPeriodicite]
    }
  }, [_c("option", {
    attrs: {
      value: ""
    }
  }), _vm._v(" "), _vm._l(_vm.periodicites_remboursement, function (period) {
    return _c("option", {
      domProps: {
        value: period.libelle
      }
    }, [_vm._v("\n                                            " + _vm._s(period.libelle) + "\n                                        ")]);
  })], 2)]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(5), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.mode_tranche,
      expression: "formDataToBeWatched.mode_tranche"
    }],
    staticClass: "form-select single-select",
    attrs: {
      required: "",
      name: "mode_tranche"
    },
    on: {
      change: [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.formDataToBeWatched, "mode_tranche", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }, _vm.handleInputModetranche]
    }
  }, [_c("option", {
    attrs: {
      value: ""
    }
  }), _vm._v(" "), _vm._l(_vm.list_tranches, function (tranche, index) {
    return _c("option", {
      key: "t_" + index,
      domProps: {
        value: tranche.val
      }
    }, [_vm._v("\n                                            " + _vm._s(tranche.libelle) + "\n                                        ")]);
  })], 2)]), _vm._v(" "), !["", null, undefined, "undefined"].includes(_vm.formDataToBeWatched.mode_paiement_demande) ? [_c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(6), _vm._v(" "), _c("div", {
    staticClass: "d-flex",
    staticStyle: {
      "min-width": "150px"
    }
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.frequence_versement,
      expression: "formDataToBeWatched.frequence_versement"
    }],
    staticClass: "form-control flex-1",
    staticStyle: {
      "min-width": "45px",
      "margin-right": "2px"
    },
    attrs: {
      type: "number",
      min: "1",
      name: "frequence_versement",
      disabled: _vm.formDataToBeWatched.mode_paiement_demande != "Plusieurs tranches"
    },
    domProps: {
      value: _vm.formDataToBeWatched.frequence_versement
    },
    on: {
      input: [function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formDataToBeWatched, "frequence_versement", $event.target.value);
      }, _vm.handleInputFreqVersement]
    }
  }), _vm._v(" "), _c("input", {
    staticClass: "form-control flex-1",
    staticStyle: {
      "min-width": "45px",
      background: "#e9ecef"
    },
    attrs: {
      type: "text",
      placeholder: "Fois",
      disabled: ""
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_c("label", {
    staticClass: "text-nowrap"
  }), _vm._v(" "), _c("div", {
    staticClass: "d-flex",
    staticStyle: {
      "min-width": "150px"
    }
  }, [_c("input", {
    staticClass: "form-control flex-1",
    staticStyle: {
      "min-width": "45px",
      background: "#e9ecef",
      "margin-right": "2px"
    },
    attrs: {
      type: "text",
      placeholder: "Chaque",
      disabled: ""
    }
  }), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.frequence_mois,
      expression: "formDataToBeWatched.frequence_mois"
    }],
    staticClass: "form-control flex-1",
    staticStyle: {
      "min-width": "45px",
      "margin-right": "2px"
    },
    attrs: {
      type: "number",
      min: "1",
      name: "frequence_mois",
      disabled: _vm.formDataToBeWatched.mode_paiement_demande != "Plusieurs tranches"
    },
    domProps: {
      value: _vm.formDataToBeWatched.frequence_mois
    },
    on: {
      input: [function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formDataToBeWatched, "frequence_mois", $event.target.value);
      }, _vm.handleInputFreqMois]
    }
  }), _vm._v(" "), _c("input", {
    staticClass: "form-control flex-1",
    staticStyle: {
      "min-width": "45px",
      background: "#e9ecef"
    },
    attrs: {
      type: "text",
      placeholder: "Mois",
      disabled: ""
    }
  })])])] : _vm._e(), _vm._v(" "), _vm.checkIfShowDureeDiffere() ? _c("div", {
    staticClass: "col-md-6 pl-4 mt-2"
  }, [_c("label", {
    staticClass: "text-nowrap",
    attrs: {
      "for": "duree_differee"
    }
  }, [_vm._v("Durée différée")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.duree_differee,
      expression: "formDataToBeWatched.duree_differee"
    }],
    staticClass: "form-control",
    attrs: {
      type: "number",
      id: "duree_differee",
      min: "0",
      disabled: ""
    },
    domProps: {
      value: _vm.formDataToBeWatched.duree_differee
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formDataToBeWatched, "duree_differee", $event.target.value);
      }
    }
  })]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_c("label", {
    attrs: {
      "for": "taux"
    }
  }, [_vm._v("Taux nominal de crédit")]), _vm._v(" "), _c("input-group", {
    scopedSlots: _vm._u([{
      key: "input",
      fn: function fn() {
        return [_c("currency-input", {
          staticClass: "recall-data",
          attrs: {
            value: _vm.formDataToBeWatched.taux,
            id: "taux",
            max: 100,
            "float": "",
            percentage: ""
          },
          on: {
            input: _vm.formDataVars
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
    }], null, false, 1613054157)
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-6 pl-4"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("TPS")]), _vm._v(" "), _c("input-group", {
    scopedSlots: _vm._u([{
      key: "input",
      fn: function fn() {
        return [_c("currency-input", {
          staticClass: "form-control",
          attrs: {
            "default-typing": false,
            id: "tps",
            type: "text"
          },
          on: {
            input: _vm.updateTauxCredit
          },
          model: {
            value: _vm.formDataToBeWatched.tps,
            callback: function callback($$v) {
              _vm.$set(_vm.formDataToBeWatched, "tps", $$v);
            },
            expression: "formDataToBeWatched.tps"
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
    }], null, false, 2894996336)
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_c("label", {
    attrs: {
      "for": "montant_sollicite"
    }
  }, [_vm._v("Montant sollicité")]), _vm._v(" "), _c("currency-input2", {
    attrs: {
      id: "montant_sollicite",
      readonly: "",
      value: _vm.formDataToBeWatched.montant_sollicite
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(7), _vm._v(" "), _c("currency-input2", {
    staticClass: "recall-data",
    attrs: {
      id: "montant_credit",
      value: _vm.formDataToBeWatched.montant_credit
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1)], 2)]), _vm._v(" "), _vm.seen1 ? _c("div", {
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
      id: "engagements-actuels"
    }
  }, [_vm._v("\n                                    Engagements actuels\n                                    "), _c("chevron-up-icon", {
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
  }, [_vm._m(8), _vm._v(" "), _c("tbody", [_vm._l(_vm.engagements_en_cours, function (el, ind) {
    return _c("tr", {
      key: ind
    }, [_c("td", {
      staticClass: "vertical-middle"
    }, [_c("div", {
      staticClass: "d-flex"
    }, [_c("select", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: el.banque,
        expression: "el.banque"
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
          _vm.$set(el, "banque", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
        }, function ($event) {
          return _vm.formDataVars3($event, ind, "engagements_en_cours", "libelle");
        }]
      }
    }, [_c("option", {
      attrs: {
        value: ""
      }
    }), _vm._v(" "), _c("option", {
      attrs: {
        value: "NSIA BANQUE-CI"
      }
    }, [_vm._v("NSIA BANQUE-CI")]), _vm._v(" "), _c("option", {
      attrs: {
        value: "AUTRE BANQUE"
      }
    }, [_vm._v("AUTRE BANQUE")])]), _vm._v(" "), el.banque != "" ? _c("div", [el.banque == "NSIA BANQUE-CI" ? _c("input", {
      staticClass: "form-control",
      staticStyle: {
        "min-width": "200px",
        display: "none"
      },
      attrs: {
        type: "text"
      },
      on: {
        input: _vm.handleInput
      }
    }) : _c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: el.libelle,
        expression: "el.libelle"
      }],
      staticClass: "form-control mx-2",
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
    })]) : _vm._e()])]), _vm._v(" "), _c("td", [_c("select", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: el.type_credit,
        expression: "el.type_credit"
      }],
      staticClass: "form-control",
      staticStyle: {
        "min-width": "200px"
      },
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
          _vm.$set(el, "type_credit", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
        }, _vm.handleInput]
      }
    }, [_c("option", {
      attrs: {
        value: ""
      }
    }), _vm._v(" "), _vm._l(_vm.type_credits, function (el, index) {
      return _c("option", {
        key: index,
        domProps: {
          value: el.libelle
        }
      }, [_vm._v(_vm._s(el.libelle))]);
    })], 2)]), _vm._v(" "), _c("td", [_c("div", {
      staticStyle: {
        width: "250px"
      }
    }, [_c("date-input", {
      attrs: {
        value: el.date_echeance
      },
      on: {
        input: function input($event) {
          return _vm.formDataVars2($event, ind, "engagements_en_cours", "date_echeance");
        }
      }
    })], 1)]), _vm._v(" "), _c("td", [_c("currency-input2", {
      staticStyle: {
        "min-width": "200px"
      },
      attrs: {
        value: el.montant
      },
      on: {
        input: function input($event) {
          return _vm.formDataVars2($event, ind, "engagements_en_cours", "montant");
        }
      }
    })], 1), _vm._v(" "), _c("td", [_c("currency-input2", {
      staticStyle: {
        "min-width": "200px"
      },
      attrs: {
        value: el.encours
      },
      on: {
        input: function input($event) {
          return _vm.formDataVars2($event, ind, "engagements_en_cours", "encours");
        }
      }
    })], 1), _vm._v(" "), _c("td", [_c("currency-input2", {
      staticStyle: {
        "min-width": "200px"
      },
      attrs: {
        value: el.mensualite,
        readonly: el.rachat == "R"
      },
      on: {
        input: function input($event) {
          return _vm.formDataVars2($event, ind, "engagements_en_cours", "mensualite");
        }
      }
    })], 1), _vm._v(" "), _c("td", [_c("select", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: el.rachat,
        expression: "el.rachat"
      }],
      staticClass: "form-control",
      staticStyle: {
        "min-width": "100px"
      },
      attrs: {
        id: "rachat"
      },
      on: {
        change: [function ($event) {
          var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
            return o.selected;
          }).map(function (o) {
            var val = "_value" in o ? o._value : o.value;
            return val;
          });
          _vm.$set(el, "rachat", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
        }, function ($event) {
          return _vm.updateRachat($event, ind, "engagements_en_cours");
        }]
      }
    }, [_c("option", {
      attrs: {
        value: ""
      }
    }), _vm._v(" "), _c("option", {
      attrs: {
        value: "R"
      }
    }, [_vm._v("R")])])]), _vm._v(" "), _c("td", {
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
          return _vm.addMore();
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
          return _vm.remove(ind);
        }
      }
    }, [_c("trash-icon", {
      staticClass: "custom-class",
      attrs: {
        size: "21"
      }
    })], 1)])]);
  }), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "text-right fw-bold vertical-middle",
    attrs: {
      colspan: "3"
    }
  }, [_vm._v("Total")]), _vm._v(" "), _c("td", [_c("currency-input2", {
    attrs: {
      readonly: ""
    },
    model: {
      value: _vm.formDataToBeWatched.engagements_en_cours_total_montant,
      callback: function callback($$v) {
        _vm.$set(_vm.formDataToBeWatched, "engagements_en_cours_total_montant", $$v);
      },
      expression: "formDataToBeWatched.engagements_en_cours_total_montant"
    }
  })], 1), _vm._v(" "), _c("td", [_c("currency-input2", {
    attrs: {
      readonly: ""
    },
    model: {
      value: _vm.formDataToBeWatched.engagements_en_cours_total_encours,
      callback: function callback($$v) {
        _vm.$set(_vm.formDataToBeWatched, "engagements_en_cours_total_encours", $$v);
      },
      expression: "formDataToBeWatched.engagements_en_cours_total_encours"
    }
  })], 1), _vm._v(" "), _c("td", [_c("currency-input2", {
    attrs: {
      readonly: ""
    },
    model: {
      value: _vm.formDataToBeWatched.engagements_en_cours_total_mensualite,
      callback: function callback($$v) {
        _vm.$set(_vm.formDataToBeWatched, "engagements_en_cours_total_mensualite", $$v);
      },
      expression: "formDataToBeWatched.engagements_en_cours_total_mensualite"
    }
  })], 1)]), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "text-right fw-bold",
    staticStyle: {
      "padding-top": "15px"
    },
    attrs: {
      colspan: "4"
    }
  }, [_vm._v("En cours théorique")]), _vm._v(" "), _c("td", [_c("currency-input2", {
    attrs: {
      readonly: ""
    },
    model: {
      value: _vm.formDataToBeWatched.engagements_en_cours_total_encours_theorique,
      callback: function callback($$v) {
        _vm.$set(_vm.formDataToBeWatched, "engagements_en_cours_total_encours_theorique", $$v);
      },
      expression: "formDataToBeWatched.engagements_en_cours_total_encours_theorique"
    }
  }), _vm._v(" "), _vm._m(9)], 1), _vm._v(" "), _c("td")]), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "text-right fw-bold",
    staticStyle: {
      "padding-top": "15px"
    },
    attrs: {
      colspan: "4"
    }
  }, [_vm._v("Ecart")]), _vm._v(" "), _c("td", [_c("currency-input2", {
    "class": _vm.convertInt(_vm.formDataToBeWatched.engagements_en_cours_total_encours_ecart) != 0 ? "is-invalid" : "",
    attrs: {
      readonly: ""
    },
    model: {
      value: _vm.formDataToBeWatched.engagements_en_cours_total_encours_ecart,
      callback: function callback($$v) {
        _vm.$set(_vm.formDataToBeWatched, "engagements_en_cours_total_encours_ecart", $$v);
      },
      expression: "formDataToBeWatched.engagements_en_cours_total_encours_ecart"
    }
  }), _vm._v(" "), _vm._m(10)], 1), _vm._v(" "), _c("td")])], 2)])])])]) : _c("div", {
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
      id: "engagements-actuels"
    }
  }, [_vm._v("\n                                    Engagements actuels\n                                    "), _c("chevron-down-icon", {
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
      id: "revenu-domicilié-à-la-nsia-banque-ci"
    }
  }, [_vm._v("\n                                    Revenu domicilié à la NSIA BANQUE-CI\n                                    "), _c("chevron-up-icon", {
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
  }, [_vm._m(11), _vm._v(" "), _c("tbody", [_vm._l(_vm.revenu_domicilie_nsia, function (el, ind) {
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
          return _vm.resetValues($event, ind, "revenu_domicilie_nsia");
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
        value: el.montant_emprunteur
      },
      on: {
        input: function input($event) {
          return _vm.formDataVars2($event, ind, "revenu_domicilie_nsia", "montant_emprunteur");
        }
      }
    }), _vm._v(" "), el.libelle == "Salaire net" && el.checked ? _c("div", {
      staticClass: "mt-1 d-flex align-items-baseline"
    }, [_vm._m(12, true), _vm._v(" "), _c("currency-input2", {
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
        disabled: !el.eligible
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
        }, _vm.handleInput]
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
        disabled: !el.eligible
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
        }, _vm.handleInput]
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
          return _vm.formDataVars2($event, ind, "revenu_domicilie_nsia", "mensualite");
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
              readonly: !el.eligible,
              value: el.taux,
              max: 100,
              "float": "",
              percentage: ""
            },
            on: {
              input: function input($event) {
                return _vm.formDataVars2($event, ind, "revenu_domicilie_nsia", "taux");
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
          return _vm.formDataVars2($event, ind, "revenu_domicilie_nsia", "montant_pondere");
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
              disabled: !el.eligible,
              value: el.taux_qc1,
              max: 100,
              "float": "",
              percentage: ""
            },
            on: {
              input: function input($event) {
                return _vm.formDataVars2($event, ind, "revenu_domicilie_nsia", "taux_qc1");
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
          return _vm.formDataVars2($event, ind, "revenu_domicilie_nsia", "montant_qc1");
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
              disabled: !el.eligible,
              readonly: el.libelle != "Salaire net",
              value: el.taux_qc2,
              max: 100,
              "float": "",
              percentage: ""
            },
            on: {
              input: function input($event) {
                return _vm.formDataVars2($event, ind, "revenu_domicilie_nsia", "taux_qc2");
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
          return _vm.formDataVars2($event, ind, "revenu_domicilie_nsia", "montant_qc2");
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
    }, [ind == 2 ? _c("button", {
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
    })], 1) : _vm._e(), _vm._v(" "), ind > 2 ? _c("button", {
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
      value: _vm.formDataToBeWatched.revenu_nsia_total_colonne_emprunteur
    }
  })], 1), _vm._v(" "), _c("td", {
    attrs: {
      colspan: "3"
    }
  }), _vm._v(" "), _c("td", [_c("currency-input2", {
    attrs: {
      readonly: "",
      value: _vm.formDataToBeWatched.revenu_nsia_total_colonne_mensualite
    }
  })], 1), _vm._v(" "), _c("td"), _vm._v(" "), _c("td", [_c("currency-input2", {
    attrs: {
      readonly: "",
      value: _vm.formDataToBeWatched.revenu_nsia_total_colonne_montant_pondere
    }
  })], 1), _vm._v(" "), _c("td", [_c("input-group", {
    staticStyle: {
      "min-width": "110px"
    },
    scopedSlots: _vm._u([{
      key: "input",
      fn: function fn() {
        return [_c("currency-input2", {
          attrs: {
            readonly: "",
            value: _vm.formDataToBeWatched.revenu_nsia_total_colonne_taux_qc1
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
    }], null, false, 3715642028)
  })], 1), _vm._v(" "), _c("td", [_c("currency-input2", {
    attrs: {
      readonly: "",
      value: _vm.formDataToBeWatched.revenu_nsia_total_colonne_montant_qc1
    }
  })], 1), _vm._v(" "), _c("td", [_c("input-group", {
    staticStyle: {
      "min-width": "110px"
    },
    scopedSlots: _vm._u([{
      key: "input",
      fn: function fn() {
        return [_c("currency-input2", {
          attrs: {
            readonly: "",
            value: _vm.formDataToBeWatched.revenu_nsia_total_colonne_taux_qc2
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
    }], null, false, 1584939407)
  })], 1), _vm._v(" "), _c("td", [_c("currency-input2", {
    attrs: {
      readonly: "",
      value: _vm.formDataToBeWatched.revenu_nsia_total_colonne_montant_qc2
    }
  })], 1)])], 2)])]), _vm._v(" "), _c("hr"), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_c("label", {
    attrs: {
      "for": "revenu_nsia_total_colonne_montant_pondere"
    }
  }, [_vm._v("Revenu considéré ")]), _vm._v(" "), _c("currency-input2", {
    attrs: {
      id: "revenu_nsia_total_colonne_montant_pondere",
      value: _vm.formDataToBeWatched.revenu_nsia_total_colonne_montant_pondere,
      readonly: ""
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_c("label", {
    attrs: {
      "for": "pourcentage_quotite"
    }
  }, [_vm._v("% Quotité NSIA ")]), _vm._v(" "), _c("input-group", {
    scopedSlots: _vm._u([{
      key: "input",
      fn: function fn() {
        return [_c("input", {
          staticClass: "form-control",
          attrs: {
            id: "pourcentage_quotite",
            type: "number",
            readonly: ""
          },
          domProps: {
            value: _vm.formDataToBeWatched.revenu_nsia_total_colonne_taux_qc1
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
    }], null, false, 416630197)
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_c("label", {
    attrs: {
      "for": "quotite_cessible"
    }
  }, [_vm._v("Quotité cessible NSIA")]), _vm._v(" "), _c("currency-input2", {
    attrs: {
      id: "quotite_cessible",
      value: _vm.formDataToBeWatched.revenu_nsia_total_colonne_montant_qc1,
      readonly: ""
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_c("label", {
    attrs: {
      "for": "quotite_cessible_disponible"
    }
  }, [_vm._v("Quotité disponible NSIA")]), _vm._v(" "), _c("currency-input2", {
    "class": _vm.convertInt(_vm.formDataToBeWatched.quotite_cessible_disponible) < 0 ? "is-invalid" : "",
    attrs: {
      title: _vm.formuleQD(_vm.formDataToBeWatched.revenu_nsia_total_colonne_montant_qc1),
      "data-bs-original-title": _vm.formuleQD(_vm.formDataToBeWatched.revenu_nsia_total_colonne_montant_qc1),
      "data-toggle": "tooltip",
      "data-placement": "top",
      id: "quotite_cessible_disponible",
      value: _vm.formDataToBeWatched.quotite_cessible_disponible,
      readonly: ""
    },
    on: {
      input: _vm.formDataVars
    }
  }), _vm._v(" "), _vm._m(13)], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_c("label", {
    attrs: {
      "for": "pourcentage_quotite_general"
    }
  }, [_vm._v("% Quotité Général ")]), _vm._v(" "), _c("input-group", {
    scopedSlots: _vm._u([{
      key: "input",
      fn: function fn() {
        return [_c("input", {
          staticClass: "form-control",
          attrs: {
            id: "pourcentage_quotite_general",
            type: "number",
            readonly: ""
          },
          domProps: {
            value: _vm.formDataToBeWatched.revenu_nsia_total_colonne_taux_qc2
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
    }], null, false, 3646340351)
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_c("label", {
    attrs: {
      "for": "quotite_cessible_general"
    }
  }, [_vm._v("Quotité cessible Général")]), _vm._v(" "), _c("currency-input2", {
    attrs: {
      id: "quotite_cessible_general",
      value: _vm.formDataToBeWatched.revenu_nsia_total_colonne_montant_qc2,
      readonly: ""
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_c("label", {
    attrs: {
      "for": "quotite_cessible_disponible_general"
    }
  }, [_vm._v("Quotité disponible Général")]), _vm._v(" "), _c("currency-input2", {
    "class": _vm.convertInt(_vm.formDataToBeWatched.quotite_cessible_disponible_general) < 0 ? "is-invalid" : "",
    attrs: {
      title: _vm.formuleQD(_vm.formDataToBeWatched.revenu_nsia_total_colonne_montant_qc2),
      "data-bs-original-title": _vm.formuleQD(_vm.formDataToBeWatched.revenu_nsia_total_colonne_montant_qc2),
      "data-toggle": "tooltip",
      "data-placement": "top",
      id: "quotite_cessible_disponible_general",
      value: _vm.formDataToBeWatched.quotite_cessible_disponible_general,
      readonly: ""
    },
    on: {
      input: _vm.formDataVars
    }
  }), _vm._v(" "), _vm._m(14)], 1)])])]) : _c("div", {
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
      id: "revenu-domicilié-à-la-nsia-banque-ci"
    }
  }, [_vm._v("\n                                    Revenu domicilié à la NSIA BANQUE-CI\n                                    "), _c("chevron-down-icon", {
    staticClass: "custom-class",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    },
    attrs: {
      size: "21"
    }
  })], 1)])]), _vm._v(" "), _vm.seen3 ? _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "relook-header",
    on: {
      click: function click($event) {
        _vm.seen3 = !_vm.seen3;
      }
    }
  }, [_c("h6", {
    "class": " subdiv" + this.tb_name,
    attrs: {
      id: "frais-de-crédit"
    }
  }, [_vm._v("\n                                    Frais de crédit\n                                    "), _c("chevron-up-icon", {
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
  }, [_vm._m(15), _vm._v(" "), _c("tbody", [_vm._l(_vm.frais_credits, function (el, ind) {
    return _c("tr", {
      key: "f_" + ind
    }, [_c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: el.libelle,
        expression: "el.libelle"
      }],
      staticClass: "form-control",
      staticStyle: {
        "min-width": "300px"
      },
      attrs: {
        readonly: ind < 3
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
    })]), _vm._v(" "), _c("td", [_c("input-group", {
      staticStyle: {
        "min-width": "110px"
      },
      scopedSlots: _vm._u([{
        key: "input",
        fn: function fn() {
          return [_c("currency-input", {
            attrs: {
              readonly: "",
              value: el.taux_initial,
              max: 100,
              "float": "",
              percentage: ""
            },
            on: {
              input: function input($event) {
                return _vm.formDataVars2($event, ind, "frais_credits", "taux_initial");
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
              value: el.taux,
              max: 100,
              "float": "",
              percentage: ""
            },
            on: {
              input: function input($event) {
                return _vm.formDataVars2($event, ind, "frais_credits", "taux");
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
      staticStyle: {
        "min-width": "200px"
      },
      attrs: {
        value: el.valeur,
        readonly: ""
      },
      on: {
        input: function input($event) {
          return _vm.formDataVars2($event, ind, "frais_credits", "valeur");
        }
      }
    })], 1), _vm._v(" "), _c("td", {
      staticClass: "vertical-middle"
    }, [ind == 2 ? _c("button", {
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
          return _vm.addMoreFrais1();
        }
      }
    }, [_c("plus-icon", {
      staticClass: "custom-class",
      attrs: {
        size: "21"
      }
    })], 1) : _vm._e(), _vm._v(" "), ind > 2 ? _c("button", {
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
          return _vm.removeFrais1(ind);
        }
      }
    }, [_c("trash-icon", {
      staticClass: "custom-class",
      attrs: {
        size: "21"
      }
    })], 1) : _vm._e()])]);
  }), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "text-right fw-bold vertical-middle",
    attrs: {
      colspan: "3"
    }
  }, [_vm._v("Total")]), _vm._v(" "), _c("td", [_c("currency-input2", {
    attrs: {
      readonly: ""
    },
    model: {
      value: _vm.formDataToBeWatched.total_frais_credit,
      callback: function callback($$v) {
        _vm.$set(_vm.formDataToBeWatched, "total_frais_credit", $$v);
      },
      expression: "formDataToBeWatched.total_frais_credit"
    }
  })], 1)])], 2)])])])]) : _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "relook-header",
    on: {
      click: function click($event) {
        _vm.seen3 = !_vm.seen3;
      }
    }
  }, [_c("h6", {
    attrs: {
      id: "frais-de-crédit"
    }
  }, [_vm._v("\n                                    Frais de crédit\n                                    "), _c("chevron-down-icon", {
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
      id: "Situation-financière"
    }
  }, [_vm._v("\n                                    Situation financière\n                                    "), _c("chevron-up-icon", {
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
  }, [_vm._m(16), _vm._v(" "), _c("tbody", [_c("tr", [_c("td", {
    staticClass: "vertical-middle fw-bold"
  }, [_vm._v("Salaire brut imposable")]), _vm._v(" "), _c("td", {
    staticClass: "vertical-middle text-right text-nowrap"
  }, [_vm._v(_vm._s(_vm.formatAmount((_vm$formDataToBeWatch2 = _vm.formDataToBeWatched) === null || _vm$formDataToBeWatch2 === void 0 ? void 0 : _vm$formDataToBeWatch2.salaire_brut)))]), _vm._v(" "), _c("td", {
    staticClass: "vertical-middle fw-bold"
  }, [_vm._v("Total engagements actuels")]), _vm._v(" "), _c("td", {
    staticClass: "vertical-middle text-right text-nowrap"
  }, [_vm._v(_vm._s(_vm.formatAmount(_vm.total_engagements_actuels)))])]), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "vertical-middle fw-bold"
  }, [_vm._v("Net sur bulletin de salaire / Prime")]), _vm._v(" "), _c("td", {
    staticClass: "vertical-middle text-right text-nowrap"
  }, [_vm._v(_vm._s(_vm.formatAmount((_vm$formDataToBeWatch3 = _vm.formDataToBeWatched) === null || _vm$formDataToBeWatch3 === void 0 ? void 0 : _vm$formDataToBeWatch3.revenu_nsia_total_colonne_montant_pondere)))]), _vm._v(" "), _c("td", {
    staticClass: "vertical-middle fw-bold"
  }, [_vm._v("Charge emprunt sollicité")]), _vm._v(" "), _c("td", {
    staticClass: "vertical-middle text-right text-nowrap"
  }, [_vm._v(_vm._s(_vm.formatAmount((_vm$formDataToBeWatch4 = _vm.formDataToBeWatched) === null || _vm$formDataToBeWatch4 === void 0 ? void 0 : _vm$formDataToBeWatch4.r_mensualite)))])]), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "vertical-middle fw-bold"
  }, [_vm._v("Total revenu net mensuel")]), _vm._v(" "), _c("td", {
    staticClass: "vertical-middle text-right text-nowrap"
  }, [_vm._v(_vm._s(_vm.formatAmount(_vm.total_revenu_net_mensuel)))]), _vm._v(" "), _c("td", {
    staticClass: "vertical-middle fw-bold"
  }, [_vm._v("Total engagements mensuels")]), _vm._v(" "), _c("td", {
    staticClass: "vertical-middle text-right text-nowrap"
  }, [_vm._v(_vm._s(_vm.formatAmount(_vm.total_engagements_mensuels)))])]), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "vertical-middle fw-bold"
  }, [_vm._v("Nouveau disponible net mensuel")]), _vm._v(" "), _c("td", {
    staticClass: "vertical-middle text-right text-nowrap"
  }, [_vm._v(_vm._s(_vm.formatAmount(_vm.nouveau_disponible_net_mensuel)))]), _vm._v(" "), _c("td", {
    staticClass: "vertical-middle fw-bold"
  }, [_vm._v("Coefficient d'endettement")]), _vm._v(" "), _c("td", {
    staticClass: "vertical-middle text-right text-nowrap"
  }, [_vm._v(_vm._s(_vm.formatAmount(_vm.coefficient_d_endettement)) + " %")])]), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "vertical-middle fw-bold"
  }, [_vm._v("Quotité cessible")]), _vm._v(" "), _c("td", {
    staticClass: "vertical-middle text-right text-nowrap"
  }, [_vm._v(_vm._s(_vm.formatAmount(_vm.montant_quotite_cessible)))]), _vm._v(" "), _c("td", {
    staticClass: "vertical-middle fw-bold"
  }, [_vm._v("Quotité cessible disponible")]), _vm._v(" "), _c("td", {
    staticClass: "vertical-middle text-right text-nowrap"
  }, [_vm._v(_vm._s(_vm.formatAmount(_vm.montant_quotite_cessible_disponible)))])])])])]), _vm._v(" "), _c("div", {
    staticClass: "text-right"
  }, [_c("label", {
    staticClass: "fw-bold"
  }, [_vm._v("QUOTITE CESSIBLE NORMALE : " + _vm._s(_vm.formDataToBeWatched.revenu_nsia_total_colonne_taux_qc1) + " %")])])])]) : _c("div", {
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
      id: "Situation-financière"
    }
  }, [_vm._v("\n                                    Situation financière\n                                    "), _c("chevron-down-icon", {
    staticClass: "custom-class",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    },
    attrs: {
      size: "21"
    }
  })], 1)])]), _vm._v(" "), _vm.seen6 ? _c("div", {
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
      id: "Caractéristiques-du-prêt"
    }
  }, [_vm._v("\n                                    Caractéristiques du prêt\n                                    "), _c("chevron-up-icon", {
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
  }, [_c("h6", [_vm._v("Information du prêt")]), _vm._v(" "), _c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-bordered"
  }, [_vm._m(17), _vm._v(" "), _c("tbody", [_c("tr", [_c("td", {
    staticClass: "text-right"
  }, [_vm._v(_vm._s(_vm.formatAmount(_vm.formDataToBeWatched.montant_credit)))]), _vm._v(" "), _c("td", {
    staticClass: "text-center"
  }, [_vm._v(_vm._s(_vm.formDataToBeWatched.taux) + " %")]), _vm._v(" "), _c("td", {
    staticClass: "text-center"
  }, [_vm._v(_vm._s(_vm.formDataToBeWatched.duree_credit))]), _vm._v(" "), _c("td", {
    staticClass: "text-right"
  }, [_vm._v(_vm._s(_vm.formatAmount(_vm.formDataToBeWatched.r_interet)))]), _vm._v(" "), _c("td", {
    staticClass: "text-right"
  }, [_vm._v(_vm._s(_vm.formatAmount(_vm.formDataToBeWatched.r_mensualite)))])])])])]), _vm._v(" "), _c("h6", [_vm._v("Frais")]), _vm._v(" "), _c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-bordered"
  }, [_vm._m(18), _vm._v(" "), _c("tbody", [_vm._l(_vm.frais_credits, function (el, ind) {
    return [el.valeur != "" && el.valeur != 0 ? _c("tr", {
      key: ind
    }, [_c("td", [_vm._v(_vm._s(el.libelle))]), _vm._v(" "), _c("td", {
      staticClass: "text-center"
    }, [_vm._v(_vm._s(el.taux) + " %")]), _vm._v(" "), _c("td", {
      staticClass: "text-right"
    }, [_vm._v(_vm._s(_vm.formatAmount(el.valeur)))])]) : _vm._e()];
  }), _vm._v(" "), _vm._l(_vm.frais_garanties, function (el, ind) {
    return [el.valeur != "" && el.valeur != 0 ? _c("tr", {
      key: "f_" + ind
    }, [_c("td", [_vm._v(_vm._s(el.libelle))]), _vm._v(" "), _c("td", {
      staticClass: "text-center"
    }, [_vm._v(_vm._s(el.taux) + " %")]), _vm._v(" "), _c("td", {
      staticClass: "text-right"
    }, [_vm._v(_vm._s(_vm.formatAmount(el.valeur)))])]) : _vm._e()];
  }), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "text-right",
    attrs: {
      colspan: "2"
    }
  }, [_vm._v("Total")]), _vm._v(" "), _c("td", {
    staticClass: "text-right",
    staticStyle: {
      "background-color": "#2c3e50",
      color: "#ffffff"
    }
  }, [_vm._v(_vm._s(_vm.formatAmount(_vm.convertInt(_vm.formDataToBeWatched.total_frais_credit) + _vm.convertInt(_vm.formDataToBeWatched.total_frais_garantie))))])])], 2)])]), _vm._v(" "), _c("h6", [_vm._v("Information de rentabilité")]), _vm._v(" "), _vm.interetLoading ? _c("div", {
    staticClass: "card-body"
  }, [_vm._m(19)]) : _c("div", [_c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-bordered"
  }, [_vm._m(20), _vm._v(" "), _c("tbody", [_c("tr", [_c("td", {
    staticClass: "text-center"
  }, [_vm._v(_vm._s((_vm$formDataToBeWatch5 = _vm.formDataToBeWatched) === null || _vm$formDataToBeWatch5 === void 0 || (_vm$formDataToBeWatch5 = _vm$formDataToBeWatch5.rentabilite) === null || _vm$formDataToBeWatch5 === void 0 ? void 0 : _vm$formDataToBeWatch5.coutCapital) + " %")]), _vm._v(" "), _c("td", {
    staticClass: "text-right"
  }, [_vm._v(_vm._s(_vm._f("formatNumber")(Math.ceil((_vm$formDataToBeWatch6 = _vm.formDataToBeWatched) === null || _vm$formDataToBeWatch6 === void 0 || (_vm$formDataToBeWatch6 = _vm$formDataToBeWatch6.rentabilite) === null || _vm$formDataToBeWatch6 === void 0 ? void 0 : _vm$formDataToBeWatch6.cashflow))))]), _vm._v(" "), _c("td", {
    staticClass: "text-center"
  }, [_vm._v(_vm._s((_vm$formDataToBeWatch7 = _vm.formDataToBeWatched) === null || _vm$formDataToBeWatch7 === void 0 || (_vm$formDataToBeWatch7 = _vm$formDataToBeWatch7.rentabilite) === null || _vm$formDataToBeWatch7 === void 0 ? void 0 : _vm$formDataToBeWatch7.rentabilitepret) + " %")]), _vm._v(" "), _c("td", {
    staticClass: "text-center"
  }, [_vm._v(_vm._s((_vm$formDataToBeWatch8 = _vm.formDataToBeWatched) === null || _vm$formDataToBeWatch8 === void 0 || (_vm$formDataToBeWatch8 = _vm$formDataToBeWatch8.rentabilite) === null || _vm$formDataToBeWatch8 === void 0 ? void 0 : _vm$formDataToBeWatch8.rentabiliteAnnuel) + " %")])])])])])])])]) : _c("div", {
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
      id: "Caractéristiques-du-prêt"
    }
  }, [_vm._v("\n                                    Caractéristiques du prêt\n                                    "), _c("chevron-down-icon", {
    staticClass: "custom-class",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    },
    attrs: {
      size: "21"
    }
  })], 1)])])]), _vm._v(" "), _c("div", {
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
      id: "dcp-ppo2-head"
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col"
  }, [_vm._v("\n                            " + _vm._s(_vm.tb_display_name) + " : Revue fiche d'engagement\n                        ")]), _vm._v(" "), _c("div", {
    staticClass: "col-auto"
  }, [((_vm$formDataToBeWatch9 = _vm.formDataToBeWatched.notes) === null || _vm$formDataToBeWatch9 === void 0 ? void 0 : _vm$formDataToBeWatch9.length) > 0 ? _c("div", {
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
  }, [_c("span", [_vm._v("\n                                            " + _vm._s(_vm.formDataToBeWatched.notes.length) + "\n                                        ")])])])]) : _vm._e(), _vm._v(" "), _c("chevron-down-icon", {
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
  return _c("div", {
    staticClass: "d-flex justify-content-center text-center align-items-center text-muted py-4"
  }, [_c("div", [_c("span", {
    staticClass: "spinner-border spinner-border"
  }), _vm._v(" "), _c("h5", [_vm._v("\n                                    Chargement des données en cours ... "), _c("br"), _vm._v("\n                                    Ceci peut prendre un peu de temps\n                                ")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    attrs: {
      "for": "montant_credit"
    }
  }, [_vm._v("Type client "), _c("span", {
    staticStyle: {
      color: "red"
    }
  }, [_vm._v("*")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Employeur"), _c("span", {
    staticStyle: {
      color: "red"
    }
  }, [_vm._v("*")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", [_vm._v("Autre employeur (Non listé)"), _c("span", {
    staticStyle: {
      color: "red"
    }
  }, [_vm._v("*")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "text-nowrap",
    attrs: {
      "for": "duree_credit"
    }
  }, [_vm._v("Durée du crédit "), _c("i", {
    staticStyle: {
      color: "#dc3545",
      "font-weight": "800"
    }
  }, [_vm._v("(différent du nombre d'échéances)")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "text-nowrap",
    attrs: {
      "for": "duree_credit"
    }
  }, [_vm._v("Mode de paiement "), _c("span", {
    staticStyle: {
      color: "red"
    }
  }, [_vm._v("*")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "text-nowrap"
  }, [_vm._v("Fréquence "), _c("span", {
    staticStyle: {
      color: "red"
    }
  }, [_vm._v("*")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    attrs: {
      "for": "montant_credit"
    }
  }, [_vm._v("Montant proposé par le CC "), _c("span", {
    staticStyle: {
      color: "red"
    }
  }, [_vm._v("*")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("td", {
    staticClass: "th"
  }, [_vm._v("Engagement")]), _vm._v(" "), _c("td", {
    staticClass: "th"
  }, [_vm._v("Type de prêt")]), _vm._v(" "), _c("td", {
    staticClass: "th"
  }, [_vm._v("Date d'écheance")]), _vm._v(" "), _c("td", {
    staticClass: "th"
  }, [_vm._v("Montant")]), _vm._v(" "), _c("td", {
    staticClass: "th"
  }, [_vm._v("En cours")]), _vm._v(" "), _c("td", {
    staticClass: "th"
  }, [_vm._v("Mensualité")]), _vm._v(" "), _c("td", {
    staticClass: "th"
  }, [_vm._v("Rachat")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "fw-bold",
    staticStyle: {
      color: "#dc3545"
    }
  }, [_c("small", [_vm._v("Source fiche client.")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "invalid-feedback fw-bold",
    attrs: {
      id: "engagements_en_cours_total_encours_ecartFeedback"
    }
  }, [_c("small", [_vm._v("Attention l'écart n'est pas nul, assurez-vous d'avoir bien renseigner le tableau des engagements actuels.")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("td", {
    staticClass: "th",
    staticStyle: {
      "min-width": "200px"
    }
  }, [_vm._v("Revenu")]), _vm._v(" "), _c("td", {
    staticClass: "th",
    staticStyle: {
      "min-width": "150px"
    }
  }, [_vm._v("Montant")]), _vm._v(" "), _c("td", {
    staticClass: "th"
  }, [_vm._v("Eligible")]), _vm._v(" "), _c("td", {
    staticClass: "th text-center",
    attrs: {
      "data-toggle": "tooltip",
      title: "Source de remboursement",
      "data-placement": "top"
    }
  }, [_vm._v("SR")]), _vm._v(" "), _c("td", {
    staticClass: "th",
    staticStyle: {
      "min-width": "150px"
    }
  }, [_vm._v("Périodicité")]), _vm._v(" "), _c("td", {
    staticClass: "th",
    staticStyle: {
      "min-width": "150px"
    }
  }, [_vm._v("Mensualité")]), _vm._v(" "), _c("td", {
    staticClass: "th",
    staticStyle: {
      "min-width": "100px"
    }
  }, [_vm._v("Taux")]), _vm._v(" "), _c("td", {
    staticClass: "th",
    staticStyle: {
      "min-width": "150px"
    }
  }, [_vm._v("Montant pondére")]), _vm._v(" "), _c("td", {
    staticClass: "th",
    staticStyle: {
      "min-width": "100px"
    }
  }, [_vm._v("TQC NSIA")]), _vm._v(" "), _c("td", {
    staticClass: "th",
    staticStyle: {
      "min-width": "150px"
    }
  }, [_vm._v("QC NSIA")]), _vm._v(" "), _c("td", {
    staticClass: "th",
    staticStyle: {
      "min-width": "100px"
    }
  }, [_vm._v("TQC Général")]), _vm._v(" "), _c("td", {
    staticClass: "th",
    staticStyle: {
      "min-width": "150px"
    }
  }, [_vm._v("QC Général")]), _vm._v(" "), _c("td", {
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
  }, [_c("i", [_vm._v("Salaire brut\n                                                            ")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "invalid-feedback fw-bold",
    attrs: {
      id: "quotite_cessible_disponibleFeedback"
    }
  }, [_c("small", [_vm._v("Attention la quotité disponible est négatif.")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "invalid-feedback fw-bold",
    attrs: {
      id: "quotite_cessible_disponible_generalFeedback"
    }
  }, [_c("small", [_vm._v("Attention la quotité disponible est négatif.")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("td", {
    staticClass: "th"
  }, [_vm._v("Libellé")]), _vm._v(" "), _c("td", {
    staticClass: "th"
  }, [_vm._v("Taux du crédit")]), _vm._v(" "), _c("td", {
    staticClass: "th"
  }, [_vm._v("Taux accordé")]), _vm._v(" "), _c("td", {
    staticClass: "th"
  }, [_vm._v("Valeur")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", {
    staticStyle: {
      "background-color": "#2c3e50",
      color: "#ffffff"
    }
  }, [_c("td", {
    staticClass: "th text-nowrap text-center p-2",
    attrs: {
      colspan: "2"
    }
  }, [_c("b", [_vm._v("Revenu nets mensuels")])]), _vm._v(" "), _c("td", {
    staticClass: "th text-nowrap text-center p-2",
    attrs: {
      colspan: "2"
    }
  }, [_c("b", [_vm._v("Engagements mensuels")])])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", {
    staticStyle: {
      "background-color": "#2c3e50",
      color: "#ffffff"
    }
  }, [_c("td", {
    staticClass: "th fw-bold p-2"
  }, [_vm._v("Montant du prêt")]), _vm._v(" "), _c("td", {
    staticClass: "th fw-bold p-2"
  }, [_vm._v("Taux du prêt")]), _vm._v(" "), _c("td", {
    staticClass: "th fw-bold p-2"
  }, [_vm._v("Durée du prêt")]), _vm._v(" "), _c("td", {
    staticClass: "th fw-bold p-2"
  }, [_vm._v("Intérêt du prêt")]), _vm._v(" "), _c("td", {
    staticClass: "th fw-bold p-2"
  }, [_vm._v("Echéance")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", {
    staticStyle: {
      "background-color": "#2c3e50",
      color: "#ffffff"
    }
  }, [_c("td", {
    staticClass: "th fw-bold p-2"
  }, [_vm._v("Libellé")]), _vm._v(" "), _c("td", {
    staticClass: "th fw-bold p-2"
  }, [_vm._v("Taux")]), _vm._v(" "), _c("td", {
    staticClass: "th fw-bold p-2"
  }, [_vm._v("Montant")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "d-flex justify-content-center text-center align-items-center text-muted py-4"
  }, [_c("div", [_c("span", {
    staticClass: "spinner-border spinner-border"
  }), _vm._v(" "), _c("h5", [_vm._v("\n                                                Chargement des données en cours ... "), _c("br"), _vm._v("\n                                                Ceci peut prendre un peu de temps\n                                            ")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", {
    staticStyle: {
      "background-color": "#2c3e50",
      color: "#ffffff"
    }
  }, [_c("td", {
    staticClass: "th fw-bold p-2 col-2",
    staticStyle: {
      "vertical-align": "middle"
    }
  }, [_vm._v("Coût du capital")]), _vm._v(" "), _c("td", {
    staticClass: "th fw-bold p-2 col-3",
    staticStyle: {
      "vertical-align": "middle"
    }
  }, [_vm._v("Cash Flow Actualisé")]), _vm._v(" "), _c("td", {
    staticClass: "th fw-bold p-2 col-4",
    staticStyle: {
      "vertical-align": "middle"
    }
  }, [_vm._v("Rentabilité sur la durée du prêt")]), _vm._v(" "), _c("td", {
    staticClass: "th fw-bold p-2 col-3",
    staticStyle: {
      "vertical-align": "middle"
    }
  }, [_vm._v("Rentabilité annuelle du prêt")])])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/nsia/revue_fiche_engagement/DC-REV1.vue?vue&type=style&index=0&id=fc3dda9e&lang=css&scoped=true":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/nsia/revue_fiche_engagement/DC-REV1.vue?vue&type=style&index=0&id=fc3dda9e&lang=css&scoped=true ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n*[data-v-fc3dda9e] {\r\n    font-family: \"Google sans\";\n}\nlabel[data-v-fc3dda9e] {\r\n    height: 10px;\r\n    font-size: 13px;\n}\ninput[data-v-fc3dda9e],\r\nselect[data-v-fc3dda9e],\r\ntextarea[data-v-fc3dda9e] {\r\n    /* height: 35px; */\r\n    border-color: #34495e;\r\n    color: #57606f;\r\n    font-size: 13px;\r\n    font-weight: bold;\n}\n.th[data-v-fc3dda9e] {\r\n    padding: 4px;\r\n    padding-bottom: 0px;\n}\n.card-width-height[data-v-fc3dda9e] {\r\n    width: 100%;\r\n    height: 100%;\n}\n.head[data-v-fc3dda9e] {\r\n    color: #f1f2f6;\r\n    font-size: 22px;\n}\n.hdc[data-v-fc3dda9e] {\r\n    background-color: #57606f;\n}\n.relook-header[data-v-fc3dda9e] {\r\n    color: #000;\r\n    background-color: #f4f3f3;\r\n    padding: 5px;\r\n    border-bottom: 1px solid #b6b8bb;\n}\n.badge-sm[data-v-fc3dda9e] {\r\n    display: inline-block;\r\n    width: 15px;\r\n    height: 15px;\r\n    background: rgba(255, 0, 0, 0.882);\r\n    color: white;\r\n    font-size: 12px;\r\n    font-weight: 500;\r\n    border-radius: 100%;\r\n    position: absolute;\r\n    top: -20%;\r\n    left: 55%;\r\n    text-align: center;\n}\n.imageM22[data-v-fc3dda9e] {\r\n    background: url(\"/images/capture_cofina/exemple_source_revenus.png\") no-repeat;\r\n    background-position: center;\r\n    background-size: contain;\r\n    width: 1000px;\r\n    height: 200px;\n}\ntd[data-v-fc3dda9e],\r\np[data-v-fc3dda9e] {\r\n    font-size: 13px;\n}\n.relook-header[data-v-fc3dda9e] {\r\n    color: #000;\r\n    background-color: #f4f3f3;\r\n    padding: 5px;\r\n    border-bottom: 1px solid #b6b8bb;\n}\n.width-100[data-v-fc3dda9e] {\r\n    width: 90%;\n}\n.personne input[data-v-fc3dda9e] {\r\n    width: 135px;\n}\n._border_right[data-v-fc3dda9e] {\r\n    border-right: 1px solid;\n}\n.text-red[data-v-fc3dda9e] {\r\n    color: red;\n}\n.multiselect-option p[data-v-fc3dda9e] {\r\n    margin: 0 !important;\r\n    padding: 10px !important;\n}\n.vertical-middle[data-v-fc3dda9e] {\r\n    vertical-align: middle;\n}\ninput[type=\"checkbox\"][data-v-fc3dda9e] {\r\n    height: 18px;\r\n    width: 20px;\r\n    margin-right: 5px;\n}\n.revenu input[type=\"checkbox\"][data-v-fc3dda9e],\r\n.engagement input[type=\"checkbox\"][data-v-fc3dda9e],\r\n.garantie input[type=\"checkbox\"][data-v-fc3dda9e] {\r\n    height: 26px;\r\n    width: 24px;\r\n    margin-right: 5px;\n}\n.mt-2_5-px[data-v-fc3dda9e] {\r\n    margin-top: 2.5px;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/nsia/revue_fiche_engagement/DC-REV1.vue?vue&type=style&index=0&id=fc3dda9e&lang=css&scoped=true":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/nsia/revue_fiche_engagement/DC-REV1.vue?vue&type=style&index=0&id=fc3dda9e&lang=css&scoped=true ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DC_REV1_vue_vue_type_style_index_0_id_fc3dda9e_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DC-REV1.vue?vue&type=style&index=0&id=fc3dda9e&lang=css&scoped=true */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/nsia/revue_fiche_engagement/DC-REV1.vue?vue&type=style&index=0&id=fc3dda9e&lang=css&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DC_REV1_vue_vue_type_style_index_0_id_fc3dda9e_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DC_REV1_vue_vue_type_style_index_0_id_fc3dda9e_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/forms/nsia/revue_fiche_engagement/DC-REV1.vue":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/forms/nsia/revue_fiche_engagement/DC-REV1.vue ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DC_REV1_vue_vue_type_template_id_fc3dda9e_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DC-REV1.vue?vue&type=template&id=fc3dda9e&scoped=true */ "./resources/js/components/forms/nsia/revue_fiche_engagement/DC-REV1.vue?vue&type=template&id=fc3dda9e&scoped=true");
/* harmony import */ var _DC_REV1_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DC-REV1.vue?vue&type=script&lang=js */ "./resources/js/components/forms/nsia/revue_fiche_engagement/DC-REV1.vue?vue&type=script&lang=js");
/* harmony import */ var _DC_REV1_vue_vue_type_style_index_0_id_fc3dda9e_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DC-REV1.vue?vue&type=style&index=0&id=fc3dda9e&lang=css&scoped=true */ "./resources/js/components/forms/nsia/revue_fiche_engagement/DC-REV1.vue?vue&type=style&index=0&id=fc3dda9e&lang=css&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _DC_REV1_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _DC_REV1_vue_vue_type_template_id_fc3dda9e_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _DC_REV1_vue_vue_type_template_id_fc3dda9e_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "fc3dda9e",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/forms/nsia/revue_fiche_engagement/DC-REV1.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/forms/nsia/revue_fiche_engagement/DC-REV1.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/forms/nsia/revue_fiche_engagement/DC-REV1.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DC_REV1_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DC-REV1.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/nsia/revue_fiche_engagement/DC-REV1.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DC_REV1_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/forms/nsia/revue_fiche_engagement/DC-REV1.vue?vue&type=style&index=0&id=fc3dda9e&lang=css&scoped=true":
/*!***************************************************************************************************************************************!*\
  !*** ./resources/js/components/forms/nsia/revue_fiche_engagement/DC-REV1.vue?vue&type=style&index=0&id=fc3dda9e&lang=css&scoped=true ***!
  \***************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DC_REV1_vue_vue_type_style_index_0_id_fc3dda9e_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DC-REV1.vue?vue&type=style&index=0&id=fc3dda9e&lang=css&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/nsia/revue_fiche_engagement/DC-REV1.vue?vue&type=style&index=0&id=fc3dda9e&lang=css&scoped=true");


/***/ }),

/***/ "./resources/js/components/forms/nsia/revue_fiche_engagement/DC-REV1.vue?vue&type=template&id=fc3dda9e&scoped=true":
/*!*************************************************************************************************************************!*\
  !*** ./resources/js/components/forms/nsia/revue_fiche_engagement/DC-REV1.vue?vue&type=template&id=fc3dda9e&scoped=true ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DC_REV1_vue_vue_type_template_id_fc3dda9e_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DC_REV1_vue_vue_type_template_id_fc3dda9e_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DC_REV1_vue_vue_type_template_id_fc3dda9e_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DC-REV1.vue?vue&type=template&id=fc3dda9e&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/nsia/revue_fiche_engagement/DC-REV1.vue?vue&type=template&id=fc3dda9e&scoped=true");


/***/ })

}]);