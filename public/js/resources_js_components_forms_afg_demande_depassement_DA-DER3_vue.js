"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_forms_afg_demande_depassement_DA-DER3_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/demande_depassement/DA-DER3.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/demande_depassement/DA-DER3.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
/* harmony import */ var _services_ebapis_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../services/ebapis.service */ "./resources/js/services/ebapis.service.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../services/auth.service */ "./resources/js/services/auth.service.js");
/* harmony import */ var _services_credit_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/credit.service */ "./resources/js/services/credit.service.js");
/* harmony import */ var _johmun_vue_tags_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @johmun/vue-tags-input */ "./node_modules/@johmun/vue-tags-input/dist/vue-tags-input.js");
/* harmony import */ var _johmun_vue_tags_input__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_johmun_vue_tags_input__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _helpers_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../helpers/helper */ "./resources/js/helpers/helper.js");
/* harmony import */ var _helpers_indexedDB__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../helpers/indexedDB */ "./resources/js/helpers/indexedDB.js");
/* harmony import */ var _helpers_indexedDB__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_helpers_indexedDB__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _services_afg_getSpecificDoc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../services/afg/getSpecificDoc */ "./resources/js/services/afg/getSpecificDoc.js");
/* provided dependency */ var process = __webpack_require__(/*! process/browser.js */ "./node_modules/process/browser.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
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
    VueTagsInput: (_johmun_vue_tags_input__WEBPACK_IMPORTED_MODULE_3___default())
    // BookOpenIcon,
  },
  computed: {
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
      // Construire la liste des groupes de catégories une seule fois
      var list_categories_final = this.type_credits.map(function (el) {
        return el.groupe_categorie;
      });
      return this.type_credits.reduce(function (acc, item) {
        // Initialiser la clé si elle n'existe pas encore
        if (!acc[item.groupe_categorie]) {
          acc[item.groupe_categorie] = [];
        }
        // Ajouter l'élément à la bonne catégorie
        acc[item.groupe_categorie].push(item);
        return acc;
      }, {});
    },
    editableFacilitesSollicitees: function editableFacilitesSollicitees() {
      return this.facilites_sollicitees.filter(function (facilite) {
        return facilite.isEditable === true;
      });
    },
    totalsExistante: function totalsExistante() {
      return this.facilites_existante.reduce(function (acc, item) {
        acc.montant_credit += parseFloat((item.montant_credit || 0).toString().replace(/\s/g, '')) || 0;
        acc.montant_echeance += parseFloat((item.montant_echeance || 0).toString().replace(/\s/g, '')) || 0;
        acc.impaye += parseFloat((item.impaye || 0).toString().replace(/\s/g, '')) || 0;
        acc.frais_dossier += parseFloat((item.frais_dossier || 0).toString().replace(/\s/g, '')) || 0;
        acc.montant_assurance += parseFloat((item.montant_assurance || 0).toString().replace(/\s/g, '')) || 0;
        acc.encours += parseFloat((item.encours || 0).toString().replace(/\s/g, '')) || 0;
        return acc;
      }, {
        montant_credit: 0,
        duree: 0,
        taux: 0,
        montant_echeance: 0,
        impaye: 0,
        frais_dossier: 0,
        montant_assurance: 0,
        teg: 0,
        encours: 0
      });
    },
    totalsSollicitees: function totalsSollicitees() {
      return this.facilites_sollicitees.reduce(function (acc, item) {
        acc.montant_demande += parseFloat((item.montant_demande || 0).toString().replace(/\s/g, '')) || 0;
        acc.montant_credit += parseFloat((item.montant_credit || 0).toString().replace(/\s/g, '')) || 0;
        acc.encours_avant += parseFloat((item.encours_avant || 0).toString().replace(/\s/g, '')) || 0;
        acc.encours_apres += parseFloat((item.encours_apres || 0).toString().replace(/\s/g, '')) || 0;
        acc.montant_echeance += parseFloat((item.montant_echeance || 0).toString().replace(/\s/g, '')) || 0;
        acc.frais_dossier += parseFloat((item.frais_dossier || 0).toString().replace(/\s/g, '')) || 0;
        acc.montant_assurance += parseFloat((item.montant_assurance || 0).toString().replace(/\s/g, '')) || 0;
        return acc;
      }, {
        montant_demande: 0,
        montant_credit: 0,
        encours_avant: 0,
        encours_apres: 0,
        duree: 0,
        taux: 0,
        montant_echeance: 0,
        frais_dossier: 0,
        montant_assurance: 0,
        teg: 0
      });
    },
    totalsGaranties: function totalsGaranties() {
      return this.garanties_proposees.reduce(function (acc, item) {
        acc.montant += parseFloat((item.montant || 0).toString().replace(/\s/g, '')) || 0;
        return acc;
      }, {
        montant: 0
      });
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
      var _this$meta_data$dossi, _this$meta_data, _this$getSpecificDoc, _this$meta_data2;
      var oldCredPub, cred_pub_tb_120004;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            oldCredPub = (_this$meta_data$dossi = (_this$meta_data = _this.meta_data) === null || _this$meta_data === void 0 || (_this$meta_data = _this$meta_data.dossier_credit) === null || _this$meta_data === void 0 || (_this$meta_data = _this$meta_data.caf_recorded_file) === null || _this$meta_data === void 0 ? void 0 : _this$meta_data.oldDossRef) !== null && _this$meta_data$dossi !== void 0 ? _this$meta_data$dossi : null;
            _context.next = 3;
            return _this.getSpecificDoc.setData({
              toasted: _this.$toasted,
              instance_vue: _this,
              cred_pub_key: oldCredPub
            });
          case 3:
            cred_pub_tb_120004 = (_this$getSpecificDoc = _this.getSpecificDoc) === null || _this$getSpecificDoc === void 0 || (_this$getSpecificDoc = _this$getSpecificDoc.dossier_credit) === null || _this$getSpecificDoc === void 0 ? void 0 : _this$getSpecificDoc.cred_pub_tb_120004;
            if (cred_pub_tb_120004) {
              _this.formDataToBeWatched.facilites_existante = cred_pub_tb_120004 === null || cred_pub_tb_120004 === void 0 ? void 0 : cred_pub_tb_120004.facilites_existante;
              // this.formDataToBeWatched.facilites_sollicitees = cred_pub_tb_120004?.facilites_sollicitees
              _this.formDataToBeWatched.garanties_proposees = cred_pub_tb_120004 === null || cred_pub_tb_120004 === void 0 ? void 0 : cred_pub_tb_120004.garanties_proposees;
              // this.formDataToBeWatched.date_deblocage_prev = cred_pub_tb_120004?.date_deblocage_prev
              // this.formDataToBeWatched.date_reception_demande_client = cred_pub_tb_120004?.date_reception_demande_client
              _this.formDataToBeWatched.pret_couvert_cash_call = cred_pub_tb_120004 === null || cred_pub_tb_120004 === void 0 ? void 0 : cred_pub_tb_120004.pret_couvert_cash_call;
              _this.syncFaciliteToSollicitees();
            }
            _context.next = 7;
            return _services_credit_service__WEBPACK_IMPORTED_MODULE_2__["default"].loadCAFAfg((_this$meta_data2 = _this.meta_data) === null || _this$meta_data2 === void 0 || (_this$meta_data2 = _this$meta_data2.dossier_credit) === null || _this$meta_data2 === void 0 ? void 0 : _this$meta_data2.monteur_doss_email).then(function (res) {
              _this.cafData(res);
            })["catch"](function (err) {
              console.log(err);
            });
          case 7:
            _this.loadScoringData();
            _context.next = 10;
            return _this.getCreditBanques();
          case 10:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }))();
  },
  mounted: function mounted() {
    this.loadRetrieved();
    this.loadTbAttrs();
    this.tableClosedOrOpened();
  },
  data: function data() {
    var vm = this;
    return {
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
      disp: false,
      isLoading: false,
      type_credits: [],
      loadTypeCredit: false,
      //slug_banque_credit: 'CI04220200817103617iXX8OjOaNY',
      meta_parseable: {
        cred_pub_key: this.meta_data["cred_pub_key"],
        tb_name: this.tb_name
      },
      formDataToBeWatched: {
        notes: [],
        type_credit: "",
        taux: "",
        duree_credit: "",
        montant_sollicite: "",
        //banque: 'CI04220200817103617iXX8OjOaNY',
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
        pret_couvert_cash_call: "",
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
        garanties_proposees: []
      },
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
        "name": "Demande d'autorisation de dépassement (DAD)",
        "checked": false,
        "disabled": false
      }, {
        "id": 2,
        "name": "Demande d'autorisation exeptionnelle (DAE)",
        "checked": false,
        "disabled": false
      }
      // {
      //     "id": 3,
      //     "name": "Revue annuelle",
      //     "checked": false,
      //     "disabled": false
      // },
      // {
      //     "id": 4,
      //     "name": "Revue intérimaire",
      //     "checked": false,
      //     "disabled": false
      // },
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
      facilites_existante: [{
        "id": 1,
        "uuid": this.generateUuid(),
        "type_facilite": "",
        "filiale": "",
        "montant_credit": 0,
        "duree": 0,
        "taux": 0,
        "echeancier": "",
        "montant_echeance": 0,
        "impaye": 0,
        "encours": 0,
        "frais_dossier": 0,
        "montant_assurance": 0,
        "teg": "",
        "statut": "",
        "date_echeance": "",
        "is_remboursement_anticipe": null,
        "is_rachat": null,
        "commentaire": "",
        "checked": false,
        "disabled": false,
        "line": "credit_old",
        "encours_avant": 0,
        "encours_apres": 0,
        "facilite_libelle": ""
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
      facilites_sollicitees: [],
      tableTag: [],
      tableTags: [],
      garanties_proposees: [{
        type: "",
        ligne_associee: [],
        montant: 0,
        commentaire: "",
        is_recueillie: null,
        is_detenue: null
      }],
      data_garanties: [],
      isSyncing: false,
      filiale_afg: ["AFGB CI", "AFGB GA", "AFGB ML", "AFGB MG", "AFGB CM", "AFGB KM", "AFGB BJ"],
      getSpecificDoc: _services_afg_getSpecificDoc__WEBPACK_IMPORTED_MODULE_6__["default"]
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
      var _this2 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              if (_DEBUG) console.log(">> updateFormDataForDeletion");
              _this2.formDataToBeWatched.is_deleted = true;
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
      var _this3 = this;
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
              if (!_this3.formDataToBeWatched.is_deleted) {
                _context3.next = 5;
                break;
              }
              return _context3.abrupt("return");
            case 5:
              // Upload current (and arguably latest) formDataToBeWatched data

              _this3.uploadDataToServerAndUpdateLastSave(_this3.formDataToBeWatched, _this3.formDataToBeWatched);
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
      var _this4 = this;
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
                  _this4.uploadDataToServerAndUpdateLastSave(newVal, oldVal);
                }
              }
              // First upload
              if (!_lastSaveTime) {
                _this4.uploadDataToServerAndUpdateLastSave(newVal, oldVal);
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
      var _this5 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              if (_DEBUG) console.log(">> uploadDataToServerAndUpdateLastSave");
              _context5.prev = 1;
              if (_DEBUG) console.log(">> this.autosaving");
              _context5.next = 5;
              return _this5.autosaving(newVal, oldVal);
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
      var _this6 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              if (_DEBUG) console.log(">> uploadDataToServerBeforePageCloses");
              _context6.prev = 1;
              _context6.next = 4;
              return _this6.autosaving(newVal, oldVal);
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
      var _this7 = this;
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
              return _this7.autosaving(_this7.formDataToBeWatched, _this7.formDataToBeWatched);
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
          console.log(err);
        });
      }
    },
    setAllDefaultFields: function setAllDefaultFields(createdKey) {
      var _this9 = this;
      this.formDataToBeWatched = this.meta_data['dossier_credit'][createdKey];
      setTimeout(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
        var _this9$formDataToBeWa;
        return _regeneratorRuntime().wrap(function _callee8$(_context8) {
          while (1) switch (_context8.prev = _context8.next) {
            case 0:
              if (((_this9$formDataToBeWa = _this9.formDataToBeWatched) === null || _this9$formDataToBeWa === void 0 ? void 0 : _this9$formDataToBeWa.type_credit) != "") {
                _this9.dpcredit1 = !_this9.dpcredit1;
              }
            case 1:
            case "end":
              return _context8.stop();
          }
        }, _callee8);
      })), 100);
    },
    setAllDefaultFieldsRecByCaf: function setAllDefaultFieldsRecByCaf() {
      var _this0 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee0() {
        var _this0$meta_data$doss, _this0$meta_data$doss2, _this0$meta_data$doss3, _this0$meta_data$doss4, _this0$meta_data$doss5, _this0$meta_data$doss6;
        return _regeneratorRuntime().wrap(function _callee0$(_context0) {
          while (1) switch (_context0.prev = _context0.next) {
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
              setTimeout(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
                var _this0$formDataToBeWa3;
                return _regeneratorRuntime().wrap(function _callee9$(_context9) {
                  while (1) switch (_context9.prev = _context9.next) {
                    case 0:
                      if (((_this0$formDataToBeWa3 = _this0.formDataToBeWatched) === null || _this0$formDataToBeWa3 === void 0 ? void 0 : _this0$formDataToBeWa3.type_credit) != "") {
                        _this0.dpcredit1 = !_this0.dpcredit1;
                      }
                    case 1:
                    case "end":
                      return _context9.stop();
                  }
                }, _callee9);
              })), 100);
            case 7:
            case "end":
              return _context0.stop();
          }
        }, _callee0);
      }))();
    },
    setAllDefaultFieldsRecByEnr: function setAllDefaultFieldsRecByEnr() {
      var _this1 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee10() {
        var _this1$meta_data$doss, _this1$meta_data$doss2, _this1$meta_data$doss3, _this1$meta_data$doss4, _this1$meta_data$doss5, _this1$meta_data$doss6;
        return _regeneratorRuntime().wrap(function _callee10$(_context10) {
          while (1) switch (_context10.prev = _context10.next) {
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
              setTimeout(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee1() {
                var _this1$formDataToBeWa3;
                return _regeneratorRuntime().wrap(function _callee1$(_context1) {
                  while (1) switch (_context1.prev = _context1.next) {
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
    selectTypeClientele: function selectTypeClientele(typeDeClientele) {
      var _this10 = this;
      var tbVal = null;
      var credVal = this.determineCredPubTablesFromDosCred(this.meta_data.dossier_credit);
      if (credVal[0]) {
        tbVal = credVal[2];
        _services_credit_service__WEBPACK_IMPORTED_MODULE_2__["default"].typeOfDispatcher(typeDeClientele, this.meta_data.cred_pub_key, tbVal).then(function (res) {
          _this10.formDataToBeWatched.disp_risq_filiale = res.data;
        })["catch"](function (err) {
          console.log(err);
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
    cafData: function cafData(res) {
      var _this$cafInfo;
      this.cafInfo = res.data;
      if (this.formDataToBeWatched.telephone_principal_dirg == undefined || this.formDataToBeWatched.telephone_principal_dirg.length === 0) {
        this.formDataToBeWatched.telephone_principal_dirg = this.cafInfo.phonecode;
      }
      this.formDataToBeWatched.filiale = "AFGB ML";
      this.formDataToBeWatched.agence = this.cafInfo.agence.replaceAll("_", " ");
      this.formDataToBeWatched.agence = this.formDataToBeWatched.agence.replace(this.formDataToBeWatched.filiale, "");
      this.formDataToBeWatched.caf = this.cafInfo.nom + " (" + this.cafInfo.codecaf + ")";
      this.formDataToBeWatched.pays = this.list_entites[this.formDataToBeWatched.filiale];
      this.formDataToBeWatched.nom_complet_caf = this.cafInfo.nom;
      this.formDataToBeWatched.email_caf = this.cafInfo.email;
      this.formDataToBeWatched.id_caf = this.cafInfo.id;
      this.formDataToBeWatched.chef_agence = this.cafInfo.chef_agence;
      this.formDataToBeWatched.chef_zone = this.cafInfo.chef_zone;
      this.formDataToBeWatched.dir_engagement = this.cafInfo.dir_engagement;
      this.formDataToBeWatched.disp_engagement = this.cafInfo.disp_engagement;
      this.formDataToBeWatched.centrale_app = this.cafInfo.centrale_app;

      /************************************************************************/
      this.formDataToBeWatched.chef_depart_dcp = (_this$cafInfo = this.cafInfo) === null || _this$cafInfo === void 0 ? void 0 : _this$cafInfo.chef_depart_dcp;
      // this.formDataToBeWatched.disp_risq_filiale = this.cafInfo?.disp_risq_filiale
      this.formDataToBeWatched.dir_jur_filiale = this.cafInfo.dir_jur_filiale;
      this.formDataToBeWatched.dir_gen_filiale = this.cafInfo.dir_gen_filiale;
      this.formDataToBeWatched.dir_gen_adj_filiale = this.cafInfo.dir_gen_adj_filiale;
      this.formDataToBeWatched.dir_dcp = this.cafInfo.dir_dcp;
      this.formDataToBeWatched.dir_centr_exploi = this.cafInfo.dir_centr_exploi;
      this.formDataToBeWatched.chef_serv_acp = this.cafInfo.chef_serv_acp;
      this.formDataToBeWatched.chef_depart_dc = this.cafInfo.chef_depart_dc;
      this.formDataToBeWatched.dir_cred = this.cafInfo.dir_cred;
    },
    /****************************************************** */slctExistant: function slctExistant() {
      var _this$meta_data$dossi2;
      var existance;
      var experience = (_this$meta_data$dossi2 = this.meta_data.dossier_credit) === null || _this$meta_data$dossi2 === void 0 || (_this$meta_data$dossi2 = _this$meta_data$dossi2.cred_pub_tb_00) === null || _this$meta_data$dossi2 === void 0 ? void 0 : _this$meta_data$dossi2.experience_secteur;
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
    loadRetrieved: function loadRetrieved() {
      var _this12 = this;
      var lentb = this.meta_data["dossier_credit"]["tbs_in_use"];
      var createdKey = this.tb_name;
      var createdKeyArr = createdKey.split("tb");
      createdKey = "cred_pub_tb_" + createdKeyArr[1];

      // Close table by default
      // this.defaultRetract(
      //     false,
      //     this.meta_data["dossier_credit"]?.applied_templ_id
      // );

      // if (this.meta_data["dossier_credit"][createdKey] == undefined) {
      //     if (this.meta_data["dossier_credit"]?.['cred_pub_tb_10009'] != undefined) {
      //         let data_tb9 = this.meta_data["dossier_credit"]['cred_pub_tb_10009'];
      //         if (data_tb9?.frais_credits) {
      //             data_tb9?.frais_credits.forEach(el => {
      //                 if (el.libelle == "Prime d'assurance") {
      //                     this.formDataToBeWatched.taux_prime = el.taux;
      //                 }
      //             });
      //         }
      //     }
      // }

      if (lentb.length > 0) {
        var _this$meta_data$dossi8;
        if (this.meta_data["dossier_credit"][createdKey] != undefined) {
          var _this$formDataToBeWat, _this$meta_data$dossi3;
          this.formDataToBeWatched = this.meta_data["dossier_credit"][createdKey];
          // this.setSegmentEntreprise(this.meta_data['dossier_credit']?.cred_pub_tb_00?.segment_entreprise)

          // let checkedSegmentEntreprise = this.segment_entreprise_list.filter((item) => {
          //     if (item.name == this.formDataToBeWatched.segment_entreprise) {
          //         return item.checked = true;
          //     }
          // });

          // if (checkedSegmentEntreprise[0] != undefined && checkedSegmentEntreprise[0].id != undefined) {
          //     this.checkboxValSegEnt(checkedSegmentEntreprise[0].name, checkedSegmentEntreprise[0].id);
          // }

          // if (this.formDataToBeWatched.credit != undefined && this.formDataToBeWatched.credit.taux_max != undefined) {
          //     this.credit = this.formDataToBeWatched.credit;

          //     if (this.credit.duree_min != null && this.credit.duree_max != null) {
          //         this.info_sup = `(Min : ${this.credit.duree_min} Mois, Max : ${this.credit.duree_max} Mois)`;
          //     } else if (this.credit.duree_min != null && this.credit.duree_min > 1) {
          //         this.info_sup = `(Min : ${this.credit.duree_min} Mois)`;
          //     } else if (this.credit.duree_max != null) {
          //         this.info_sup = `(Max : ${this.credit.duree_max} Mois)`;
          //     }

          //     this.handleSimulate();

          // }

          if (['', null, undefined].includes((_this$formDataToBeWat = this.formDataToBeWatched) === null || _this$formDataToBeWat === void 0 ? void 0 : _this$formDataToBeWat.date_reception_demande_client)) {
            this.$set(this.formDataToBeWatched, 'date_reception_demande_client', "");
          }
          if (this.meta_data["dossier_credit"][createdKey]["facilites_existante"].length > 0) {
            this.facilites_existante = this.meta_data["dossier_credit"][createdKey]["facilites_existante"];
          }
          if (this.meta_data["dossier_credit"][createdKey]["facilites_sollicitees"].length > 0) {
            this.facilites_sollicitees = this.meta_data["dossier_credit"][createdKey]["facilites_sollicitees"];
          }
          if (this.meta_data["dossier_credit"][createdKey]["garanties_proposees"].length > 0) {
            this.garanties_proposees = this.meta_data["dossier_credit"][createdKey]["garanties_proposees"].map(function (garantie) {
              var ligne_associee = garantie.ligne_associee || [];
              return _objectSpread(_objectSpread({}, garantie), {}, {
                ligne_associee: ligne_associee
              });
            });
            this.tableTag = this.garanties_proposees.map(function () {
              return '';
            });
            this.tableTags = this.garanties_proposees.map(function (garantie) {
              return (garantie.ligne_associee || []).map(function (uuid) {
                var facilite = _this12.facilites_sollicitees.find(function (f) {
                  return f.uuid === uuid;
                });
                return {
                  text: facilite ? facilite.type_facilite || "Ligne ".concat(_this12.facilites_sollicitees.indexOf(facilite) + 1) : uuid,
                  uuid: uuid
                };
              });
            });
          } else {
            this.tableTag = [''];
            this.tableTags = [[]];
          }

          // CHECK WHETHER IT IS FIRST TIME
          if (((_this$meta_data$dossi3 = this.meta_data['dossier_credit'][createdKey]) === null || _this$meta_data$dossi3 === void 0 ? void 0 : _this$meta_data$dossi3.is_first_time) === false) {
            this.setAllDefaultFields(createdKey);
          } else {
            var _this$meta_data$dossi4, _this$meta_data$dossi5;
            if (((_this$meta_data$dossi4 = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi4 === void 0 ? void 0 : _this$meta_data$dossi4.doss_central_file_recorder) !== undefined) {
              this.setAllDefaultFieldsRecByEnr();
            }
            if (((_this$meta_data$dossi5 = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi5 === void 0 ? void 0 : _this$meta_data$dossi5.caf_recorded_file) !== undefined) {
              this.setAllDefaultFieldsRecByCaf();
            }
          }
        } else {
          var _this$meta_data$dossi6, _this$meta_data$dossi7;
          if (((_this$meta_data$dossi6 = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi6 === void 0 ? void 0 : _this$meta_data$dossi6.doss_central_file_recorder) !== undefined) {
            this.setAllDefaultFieldsRecByEnr();
          }
          if (((_this$meta_data$dossi7 = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi7 === void 0 ? void 0 : _this$meta_data$dossi7.caf_recorded_file) != undefined) {
            this.setAllDefaultFieldsRecByCaf();
          }
        }
        // SET FIRST TIME TO FALSE
        this.formDataToBeWatched.is_first_time = false;
        this.formDataToBeWatched.type_de_clientele = "Particuliers";
        this.formDataToBeWatched.carcasse_type = (_this$meta_data$dossi8 = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi8 === void 0 ? void 0 : _this$meta_data$dossi8.applied_templ_name;
        setTimeout(function () {
          _this12.selectTypeClientele('Particuliers');
        }, 3000);
      } else {
        var _this$meta_data$dossi9;
        if (!this.dismissFormData.includes((_this$meta_data$dossi9 = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi9 === void 0 ? void 0 : _this$meta_data$dossi9.applied_templ_id)) {
          var _this$meta_data$dossi0, _this$meta_data$dossi1;
          if (((_this$meta_data$dossi0 = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi0 === void 0 ? void 0 : _this$meta_data$dossi0.doss_central_file_recorder) !== undefined) {
            this.setAllDefaultFieldsRecByEnr();
          }

          // IN CASE THE FILE IS OPENED BY CAF
          else if (((_this$meta_data$dossi1 = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi1 === void 0 ? void 0 : _this$meta_data$dossi1.caf_recorded_file) !== undefined) {
            this.setAllDefaultFieldsRecByCaf();
          }
          // IN CASE THE FILE IS OPENED BY ENR

          // SET FIRST TIME TO FALSE
          this.formDataToBeWatched.is_first_time = false;
          this.formDataToBeWatched.type_de_clientele = "Particuliers";
          setTimeout(function () {
            _this12.selectTypeClientele('Particuliers');
          }, 3000);
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
      // this.handleSimulate();
      // EventBus.$emit("dossier-updated-dcp-1", {
      //     data_tb1: this.formDataToBeWatched,
      // });

      // this.syncFaciliteToSollicitees();
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
      var _this13 = this;
      _services_credit_service__WEBPACK_IMPORTED_MODULE_2__["default"].loadCreditBanques().then(function (res) {
        _this13.type_credits = res.data;
        localStorage.setItem('banque_credit_types', JSON.stringify(res.data));
      })["catch"](function (err) {
        console.log(err);
      });
    },
    handleChangeTypeCredit: function handleChangeTypeCredit(val) {
      var _arguments = arguments,
        _this14 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee11() {
        var resetValue, data;
        return _regeneratorRuntime().wrap(function _callee11$(_context11) {
          while (1) switch (_context11.prev = _context11.next) {
            case 0:
              resetValue = _arguments.length > 1 && _arguments[1] !== undefined ? _arguments[1] : false;
              _this14.info_sup = "";
              _this14.formDataToBeWatched.taux = _this14.formDataToBeWatched.taux != "" ? _this14.formDataToBeWatched.taux : "";
              _this14.formDataToBeWatched.duree_credit = _this14.formDataToBeWatched.duree_credit != "" ? _this14.formDataToBeWatched.duree_credit : "";
              if (resetValue) {
                _this14.formDataToBeWatched.taux = "";
                _this14.formDataToBeWatched.duree_credit = "";
              }
              data = $.grep(_this14.type_credits, function (v) {
                return v.libelle === val;
              });
              if (data.length > 0) {
                _this14.credit = data[0];
                _this14.formDataToBeWatched.credit = data[0];

                /* await Credit.loadFraisCreditChapCahp(this.credit.slug, slug_banque)
                    .then(res => {
                        this.taxe = res.data.data.Credit.taxe.valeur_taxe;
                    }).catch(err => {
                        console.log(err)
                    }) */

                if (_this14.formDataToBeWatched.taux == "") {
                  _this14.formDataToBeWatched.taux = data[0].taux_max == null ? data[0].taux_min : data[0].taux_max;
                }
                if (_this14.formDataToBeWatched.duree_credit == "") {
                  _this14.formDataToBeWatched.duree_credit = data[0].duree_max == null ? data[0].duree_min : data[0].duree_max;
                }
                if (_this14.credit.duree_min != null && _this14.credit.duree_max != null) {
                  _this14.info_sup = "(Min : ".concat(_this14.credit.duree_min, " Mois, Max : ").concat(_this14.credit.duree_max, " Mois)");
                } else if (_this14.credit.duree_min != null && _this14.credit.duree_min > 1) {
                  _this14.info_sup = "(Min : ".concat(_this14.credit.duree_min, " Mois)");
                } else if (_this14.credit.duree_max != null) {
                  _this14.info_sup = "(Max : ".concat(_this14.credit.duree_max, " Mois)");
                }

                // this.handleSimulate();
              }
            case 7:
            case "end":
              return _context11.stop();
          }
        }, _callee11);
      }))();
    },
    formatAmount: function formatAmount(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    },
    convertInt: function convertInt(n) {
      try {
        var _n$toString;
        return Number(n === null || n === void 0 || (_n$toString = n.toString()) === null || _n$toString === void 0 ? void 0 : _n$toString.replace(/\s/g, '')) || 0;
      } catch (e) {
        return 0;
      }
    },
    // handleSimulate() {
    //     if (this.formDataToBeWatched.taux == '') {
    //         this.formDataToBeWatched.taux = 0;
    //     }
    //     this.taux = parseFloat(this.formDataToBeWatched.taux);
    //     let montant = this.convertInt(this.formDataToBeWatched.montant_credit);
    //     let duree = parseFloat(this.formDataToBeWatched.duree_credit);
    //     this.formDataToBeWatched.duree_credit = duree;
    //     let tauxMensuel = Math.pow((1 + this.taux / 100), 1 / 12) - 1
    //     let mensualite = Hypo.VPM(montant, duree, tauxMensuel, 0);
    //     let interet_ht = (mensualite * duree) - montant
    //     this.res = Math.ceil(interet_ht + (interet_ht * this.taxe / 100))
    //     mensualite = Math.ceil(mensualite + ((interet_ht * this.taxe / 100) / duree))
    //     let totalCredt = this.res + parseInt(montant)
    //     this.formDataToBeWatched.r_mensualite = (this.formatAmount(mensualite));
    //     this.formDataToBeWatched.r_interet = (this.formatAmount(this.res));
    //     this.formDataToBeWatched.r_ttcredit = (this.formatAmount(totalCredt));
    //     EventBus.$emit("cred_pub_tb_10001-updated", {
    //         montant_sollicite: this.formDataToBeWatched.montant_sollicite,
    //         montant_credit: this.formDataToBeWatched.montant_credit,
    //         echeance: this.formDataToBeWatched.r_mensualite,
    //         taux: this.formDataToBeWatched.taux,
    //         taux_prime: this.formDataToBeWatched.taux_prime,
    //         duree_credit: this.formDataToBeWatched.duree_credit,
    //         r_mensualite: this.formDataToBeWatched.r_mensualite,
    //         r_interet: this.formDataToBeWatched.r_interet,
    //         r_ttcredit: this.formDataToBeWatched.r_ttcredit,
    //         mode_paiement_demande: this.formDataToBeWatched.mode_paiement_demande,
    //     });
    //     EventBus.$emit("dossier-updated-dcp-1", {
    //         data_tb1: this.formDataToBeWatched,
    //     });
    // },
    addMoreFaciliteExistante: function addMoreFaciliteExistante() {
      var _this$facilites_exist;
      var nb = (_this$facilites_exist = this.facilites_existante) === null || _this$facilites_exist === void 0 ? void 0 : _this$facilites_exist.length;
      this.facilites_existante.push({
        "id": nb + 1,
        "uuid": this.generateUuid(),
        "type_facilite": "",
        "montant_credit": 0,
        "duree": 0,
        "taux": 0,
        "echeancier": "",
        "montant_echeance": 0,
        "encours": 0,
        "frais_dossier": 0,
        "montant_assurance": 0,
        "teg": "",
        "statut": "",
        // "date_echeance": "",
        // "is_remboursement_anticipe": null,
        "is_rachat": null,
        "commentaire": "",
        "checked": false,
        "disabled": false,
        "line": "credit_old",
        "facilite_libelle": ""
      });
      this.syncFaciliteToSollicitees();
      this.handleInput();
    },
    removeFaciliteExist: function removeFaciliteExist(index) {
      this.facilites_existante.splice(index, 1);
      // this.reconstructionFacilitiesSollicites()
      this.handleInput();
    },
    formDataVars3: function formDataVars3(event, index, key) {
      var _event = _slicedToArray(event, 2),
        field = _event[0],
        value = _event[1];
      if (key === 'facilites_sollicitees') {
        var isModified = this.isLineModified(index, field);
        if (["montant_demande", "encours_avant"].includes(field)) {
          this.$set(this[key][index], field, value);
          var new_encours_apres = this.convertInt(this[key][index]['montant_demande']) + this.convertInt(this[key][index]['encours_avant']);
          this.$set(this[key][index], 'encours_apres', new_encours_apres);
          this.formDataToBeWatched[key] = this[key];
        }
      } else {
        this.$set(this[key][index], field, value);
        this.formDataToBeWatched[key] = this[key];
      }
      this.handleInput();
    },
    formDataVarsGaranties: function formDataVarsGaranties(event, index, key) {
      var _event2 = _slicedToArray(event, 2),
        field = _event2[0],
        value = _event2[1];
      this[key][index][event[0]] = event[1];
      this.$set(this[key][index], field, value);
      this.formDataToBeWatched[key] = this[key];
      if (key === 'facilites_sollicitees') {
        var isModified = this.isLineModified(index, field);
      }
      this.handleInput();
      // this.reconstructionFacilitiesSollicites()
      // this.emitEventForTbEndettement()
    },
    handleInputGaranties: function handleInputGaranties() {
      this.formDataToBeWatched.facilites_existante = this.facilites_existante;
      // this.reconstructionFacilitiesSollicites()
      this.emitEventForTbEndettement();
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
      this.formDataToBeWatched[key][index][(_event$target = event.target) === null || _event$target === void 0 ? void 0 : _event$target.id] = event.target.value;
      // this.reconstructionFacilitiesSollicites()
      this.emitEventForTbEndettement();
    },
    handleInput3: function handleInput3(event, index) {
      console.log();
      this.formDataToBeWatched.facilites_sollicitees = this.facilites_sollicitees;
      if (index) {
        var _event3 = _slicedToArray(event, 2),
          field = _event3[0],
          value = _event3[1];
        this.isLineModified(index, field);
      }
      this.handleInput();
    },
    addMoreFaciliteSollicites: function addMoreFaciliteSollicites() {
      var _this$facilites_solli;
      var nb = (_this$facilites_solli = this.facilites_sollicitees) === null || _this$facilites_solli === void 0 ? void 0 : _this$facilites_solli.length;
      this.facilites_sollicitees.push({
        "id": nb + 1,
        "uuid": this.generateUuid(),
        "type_facilite": "",
        "montant_demande": 0,
        "montant_credit": 0,
        "duree": 0,
        "taux": 0,
        "echeancier": "",
        "montant_echeance": 0,
        "encours": 0,
        "frais_dossier": 0,
        "montant_assurance": 0,
        "teg": "",
        "statut": "",
        "date_echeance": "",
        "is_remboursement_anticipe": null,
        "is_rachat": null,
        "commentaire": "",
        "checked": false,
        "disabled": false,
        "line": "credit_new",
        // "impayes":"",
        "encours_apres": 0,
        "encours_avant": 0,
        "modifiedFields": [],
        "facilite_libelle": ""
      });
      this.handleInput();
    },
    syncFaciliteToSollicitees: function syncFaciliteToSollicitees() {
      var _this15 = this;
      // Séparer les lignes "nouvelles" (non issues de facilites_existante) des lignes existantes
      var newLines = this.facilites_sollicitees.filter(function (item) {
        return item.origin === 'new' || !item.origin;
      });
      var existingLines = [];

      // Synchroniser les lignes existantes à partir de facilites_existante
      this.facilites_existante.forEach(function (faciliteExistante) {
        var _this15$facilites_exi;
        var existingIndex = _this15.facilites_sollicitees.findIndex(function (item) {
          return item.uuid === faciliteExistante.uuid && item.origin === 'existing';
        });
        var selectedType = faciliteExistante === null || faciliteExistante === void 0 ? void 0 : faciliteExistante.type_facilite;
        var type_groupe = _this15.findGroupForType(selectedType, _this15.transformLoadedCreditsBanques_);

        // Impossible d'avoir des facilités avec des concours differents
        if (((_this15$facilites_exi = _this15.facilites_existante) === null || _this15$facilites_exi === void 0 ? void 0 : _this15$facilites_exi.length) > 1) {
          var _this15$facilites_exi2;
          var label = (_this15$facilites_exi2 = _this15.facilites_existante[0]) === null || _this15$facilites_exi2 === void 0 ? void 0 : _this15$facilites_exi2.type_facilite;
          for (var index = 0; index < _this15.facilites_existante.length; index++) {
            var sollicitee = _this15.facilites_existante[index];
            if (label != (sollicitee === null || sollicitee === void 0 ? void 0 : sollicitee.type_facilite) && ![null, "", undefined].includes(sollicitee === null || sollicitee === void 0 ? void 0 : sollicitee.type_facilite)) {
              _this15.facilites_existante[index].type_facilite = "";
              _this15.facilites_existante[index].facilite_libelle = "";
              _this15.$toasted.show("Il est impossible de b\xE9n\xE9ficier simultan\xE9ment de plusieurs facilit\xE9s ayant des natures de concours diff\xE9rentes du tableau DA-DER3: Concours/Facilit\xE9s.", {
                duration: 8000
              });
            }
          }
        }
        if (existingIndex === -1) {
          // Nouvelle ligne existante à ajouter
          var newFacilite = _objectSpread(_objectSpread({}, faciliteExistante), {}, {
            montant_demande: 0,
            origin: 'existing',
            isEditable: false,
            modifiedFields: [],
            encours_avant: faciliteExistante.encours,
            encours_apres: faciliteExistante.encours,
            facilite_libelle: type_groupe
          });
          existingLines.push(newFacilite);
        } else {
          // Mise à jour d'une ligne existante déjà présente
          var updatedFacilite = _objectSpread(_objectSpread(_objectSpread({}, _this15.facilites_sollicitees[existingIndex]), faciliteExistante), {}, {
            montant_demande: _this15.facilites_sollicitees[existingIndex].montant_demande,
            origin: 'existing',
            isEditable: _this15.facilites_sollicitees[existingIndex].isEditable || false,
            modifiedFields: _this15.facilites_sollicitees[existingIndex].modifiedFields || [],
            encours_avant: faciliteExistante.encours,
            encours_apres: _this15.convertInt(_this15.facilites_sollicitees[existingIndex].montant_demande) + _this15.convertInt(faciliteExistante.encours),
            facilite_libelle: type_groupe
          });
          existingLines.push(updatedFacilite);

          // Ne pas appeler isLineModified ici pour éviter les boucles
        }
      });

      // Combiner les lignes existantes et nouvelles
      var newData = [].concat(existingLines, _toConsumableArray(newLines));

      // Mise à jour systématique de facilites_sollicitees avec newData
      console.log('Mise à jour de facilites_sollicitees');
      this.facilites_sollicitees = newData; // Assigner directement le nouveau tableau
      this.formDataToBeWatched.facilites_sollicitees = this.facilites_sollicitees;
      this.handleInput();
    },
    removeFaciliteSollic: function removeFaciliteSollic(index) {
      this.facilites_sollicitees.splice(index, 1);
      this.handleInput();
    },
    addMoreGarantiesPropos: function addMoreGarantiesPropos() {
      this.garanties_proposees.push({
        type: '',
        ligne_associee: [],
        montant: 0,
        commentaire: '',
        is_recueillie: '',
        is_detenue: ''
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
    handleDuplicateTag: function handleDuplicateTag(duplicateTag) {
      // Log pour debugging
      console.log('Tentative d’ajout d’un doublon détectée:', duplicateTag);

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

        // Option 3 : Possibilité d'ajouter une logique personnalisée
        // Par exemple, ignorer silencieusement (comportement par défaut)
        // ou forcer l'ajout si désiré (nécessite modification dans updateTableTags)
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
    scoringData: function scoringData(res) {
      var _this16 = this;
      var criteres = res.data.data.criteres;
      criteres.forEach(function (element) {
        if (element.type == 'ppo' || element.type == null) {
          if (element.slug == 'garanties') {
            _this16.data_garanties = element.elements;
          }
        }
      });
    },
    loadScoringData: function loadScoringData() {
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
    },
    // emitEventForTbEndettement() {
    //     EventBus.$emit("dossier-updated-dcpp-pcp4-0", {
    //         data_tb4: this.formDataToBeWatched,
    //     });
    // },
    toggleEditable: function toggleEditable(index) {
      this.$set(this.facilites_sollicitees[index], 'isEditable', this.facilites_sollicitees[index].isEditable);
      // this.isLineModified(index, key);
      this.handleInput(); // Déclencher la mise à jour
    },
    generateUuid: function generateUuid() {
      var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      var uuid = '';
      for (var i = 0; i < 8; i++) {
        uuid += chars.charAt(Math.floor(Math.random() * chars.length));
      }
      return uuid;
    },
    updateLigneAssociee: function updateLigneAssociee(index) {
      var ligneAssociee = this.garanties_proposees[index].ligne_associee || [];
      this.garanties_proposees[index].ligne_associee = ligneAssociee.map(function (facilite) {
        return facilite.uuid;
      });
      this.handleInput3();
    },
    isLineModified: function isLineModified(index, key) {
      var _this$facilites_solli2, _sollicitee$modifiedF;
      // 1. Vérification des préconditions
      if (!((_this$facilites_solli2 = this.facilites_sollicitees) !== null && _this$facilites_solli2 !== void 0 && _this$facilites_solli2[index])) {
        return false;
      }
      var sollicitee = this.facilites_sollicitees[index];

      // 2. Ne vérifier que les lignes existantes et éditables
      if (sollicitee.origin !== 'existing' || !sollicitee.isEditable) {
        return false;
      }

      // 3. Trouver la ligne correspondante dans facilites_existante
      var existante = this.facilites_existante.find(function (el) {
        return el.uuid === sollicitee.uuid;
      });
      if (!existante) {
        return false;
      }

      // 4. Mapping des correspondances entre champs
      var fieldMappings = {
        'montant_demande': 'montant_credit' // Mapping spécifique
        // Ajouter d'autres mappings ici si nécessaire
      };

      // 5. Liste des champs autorisés pour comparaison
      var allowedFields = ['filiale', 'type_facilite', 'montant_demande', 'montant_credit', 'duree', 'taux', 'echeancier', 'montant_echeance', 'frais_dossier', 'montant_assurance', 'teg', 'date_echeance', 'commentaire'];

      // 6. Traitement pour une clé spécifique (si fournie)
      if (key && allowedFields.includes(key)) {
        // Déterminer le champ correspondant dans existante
        var existanteKey = fieldMappings[key] || key;

        // Vérifier si le champ existe dans les deux objets
        if (key in sollicitee && existanteKey in existante) {
          var isModified = this.compareFieldValues(sollicitee[key], existante[existanteKey]);
          var currentModifiedFields = sollicitee.modifiedFields || [];

          // Mise à jour des champs modifiés
          if (isModified && !currentModifiedFields.includes(key)) {
            this.$set(this.facilites_sollicitees[index], 'modifiedFields', [].concat(_toConsumableArray(currentModifiedFields), [key]));
          } else if (!isModified && currentModifiedFields.includes(key)) {
            this.$set(this.facilites_sollicitees[index], 'modifiedFields', currentModifiedFields.filter(function (f) {
              return f !== key;
            }));
          }
          if (_DEBUG) {
            console.log("[Debug] Champ \"".concat(key, "\" (\u2192 \"").concat(existanteKey, "\")"), "Modifi\xE9: ".concat(isModified), "Valeurs: ".concat(sollicitee[key], " \u2192 ").concat(existante[existanteKey]));
          }
        }
      }

      // 7. Retourner l'état de modification global
      return (((_sollicitee$modifiedF = sollicitee.modifiedFields) === null || _sollicitee$modifiedF === void 0 ? void 0 : _sollicitee$modifiedF.length) || 0) > 0;
    },
    compareFieldValues: function compareFieldValues(newVal, oldVal) {
      if (newVal === null || newVal === undefined) newVal = '';
      if (oldVal === null || oldVal === undefined) oldVal = '';
      var numNewVal = Number(newVal);
      var numOldVal = Number(oldVal);
      if (!isNaN(numNewVal) && !isNaN(numOldVal) && numNewVal === numOldVal) {
        return false;
      }
      if (typeof newVal === 'string' && typeof oldVal === 'string') {
        return newVal.trim() !== oldVal.trim();
      }
      if (newVal instanceof Date && oldVal instanceof Date) {
        return newVal.getTime() !== oldVal.getTime();
      }
      return newVal !== oldVal;
    },
    filteredTable: function filteredTable(index) {
      var _this18 = this,
        _this$tableTag$index;
      // Liste complète des facilités sollicitées disponibles
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
    findGroupForType: function findGroupForType(type, creditsData) {
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
      return '';
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/demande_depassement/DA-DER3.vue?vue&type=template&id=64cd9607&scoped=true":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/demande_depassement/DA-DER3.vue?vue&type=template&id=64cd9607&scoped=true ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
      id: "dcp-ppo1-head"
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col"
  }, [_vm._v("\n                            " + _vm._s(_vm.tb_display_name) + " : Concours/Facilités\n                        ")]), _vm._v(" "), _c("div", {
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
  }, [_vm._v("\n                                    Demande de prêt\n                                    "), _c("chevron-up-icon", {
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
  }, [_vm._v("--Choisir type de demande--\n                                                                        ")]), _vm._v(" "), _vm._l(_vm.type_demande_list, function (type_demande_) {
    return _c("option", {
      key: type_demande_.name,
      attrs: {
        disabled: type_demande_.disabled
      },
      domProps: {
        value: type_demande_.name
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
  }, [_vm._v("\n                                                                            --- Sélectionner le type de clientèle --\n                                                                        ")]), _vm._v(" "), _c("optgroup", {
    attrs: {
      label: "Clientèle Ordinaire"
    }
  }, [_c("option", {
    attrs: {
      value: "Particuliers"
    }
  }, [_vm._v(" Particuliers\n                                                                            ")])])])])])], 1)])])]), _vm._v(" "), _c("br")])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4 mt-2"
  }, [_vm._m(2), _vm._v(" "), _c("date-input", {
    attrs: {
      id: "date_deblocage_prev",
      value: _vm.formDataToBeWatched.date_deblocage_prev
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4 mt-2"
  }, [_vm._m(3), _vm._v(" "), _c("date-input", {
    attrs: {
      id: "date_reception_demande_client",
      value: _vm.formDataToBeWatched.date_reception_demande_client
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4 mt-2"
  }, [_vm._m(4), _vm._v(" "), _c("div", {
    staticClass: "d-flex"
  }, [_c("div", {
    staticClass: "m-2 d-flex mr-4"
  }, [_c("input", {
    attrs: {
      type: "checkbox",
      value: "Oui",
      id: "pret_couvert_cash_call_oui"
    },
    domProps: {
      checked: _vm.formDataToBeWatched.pret_couvert_cash_call == "Oui"
    },
    on: {
      input: function input($event) {
        return _vm.checkboxValCashCall($event);
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "text-nowrap",
    attrs: {
      "for": "pret_couvert_cash_call_oui"
    }
  }, [_vm._v("Oui")])]), _vm._v(" "), _c("div", {
    staticClass: "m-2 d-flex mr-4"
  }, [_c("input", {
    attrs: {
      type: "checkbox",
      value: "Non",
      id: "pret_couvert_cash_call_non"
    },
    domProps: {
      checked: _vm.formDataToBeWatched.pret_couvert_cash_call == "Non"
    },
    on: {
      input: function input($event) {
        return _vm.checkboxValCashCall($event);
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "text-nowrap",
    attrs: {
      "for": "pret_couvert_cash_call_non"
    }
  }, [_vm._v("Non")])])])]), _vm._v(" "), _vm.formDataToBeWatched.pret_couvert_cash_call == "Oui" ? _c("div", {
    staticClass: "col-md-6 pl-4 mt-2"
  }, [_vm._m(5), _vm._v(" "), _c("currency-input2", {
    staticClass: "form-control",
    attrs: {
      "default-typing": false,
      id: "montant_cash_call",
      type: "text"
    },
    model: {
      value: _vm.formDataToBeWatched.montant_cash_call,
      callback: function callback($$v) {
        _vm.$set(_vm.formDataToBeWatched, "montant_cash_call", $$v);
      },
      expression: "formDataToBeWatched.montant_cash_call"
    }
  })], 1) : _vm._e()])])]) : _c("div", {
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
  }, [_vm._v("\n                                    Demande de prêt\n                                    "), _c("chevron-down-icon", {
    staticClass: "custom-class",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    },
    attrs: {
      size: "21"
    }
  })], 1)])]), _vm._v(" "), _vm.seen0_2 ? _c("div", {
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
  }, [_vm._v("\n                                    Concours/Facilités existantes\n                                    "), _c("chevron-up-icon", {
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
  }, [_vm._m(6), _vm._v(" "), _c("tbody", _vm._l(_vm.facilites_existante, function (el, ind) {
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
        }, _vm.syncFaciliteToSollicitees]
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
      }, [_vm._v(_vm._s(filiale_afg) + "\n                                                        ")]);
    })], 2)]), _vm._v(" "), _c("td", {
      staticClass: "text-center"
    }, [_c("select", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: el.type_facilite,
        expression: "el.type_facilite"
      }],
      staticClass: "form-control",
      attrs: {
        id: "type_facilite"
      },
      on: {
        change: [function ($event) {
          var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
            return o.selected;
          }).map(function (o) {
            var val = "_value" in o ? o._value : o.value;
            return val;
          });
          _vm.$set(el, "type_facilite", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
        }, _vm.syncFaciliteToSollicitees]
      }
    }, [_c("option", {
      attrs: {
        disabled: "",
        selected: "",
        value: ""
      }
    }, [_vm._v("\n                                                            --- Choisissez le type ---\n                                                        ")]), _vm._v(" "), _vm._l(_vm.transformLoadedCreditsBanques_, function (items, group) {
      return _c("optgroup", {
        key: group,
        attrs: {
          label: group
        }
      }, _vm._l(items, function (credit) {
        return _c("option", {
          key: credit.id,
          domProps: {
            value: credit.libelle
          }
        }, [_vm._v("\n                                                            " + _vm._s(credit.libelle) + "\n                                                            ")]);
      }), 0);
    })], 2)]), _vm._v(" "), _c("td", [_c("currency-input2", {
      staticStyle: {
        "min-width": "150px"
      },
      attrs: {
        value: el.montant_credit,
        id: "montant_credit"
      },
      on: {
        input: function input($event) {
          _vm.formDataVarsGaranties($event, ind, "facilites_existante");
          _vm.syncFaciliteToSollicitees();
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
          _vm.formDataVarsGaranties($event, ind, "facilites_existante");
          _vm.syncFaciliteToSollicitees();
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
          _vm.formDataVarsGaranties($event, ind, "facilites_existante");
          _vm.syncFaciliteToSollicitees();
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
              "float": "",
              percentage: "",
              id: "taux"
            },
            on: {
              input: function input($event) {
                _vm.formDataVarsGaranties($event, ind, "facilites_existante");
                _vm.syncFaciliteToSollicitees();
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
        }, _vm.syncFaciliteToSollicitees]
      }
    }, [_c("option", {
      attrs: {
        disabled: "",
        selected: "",
        value: ""
      }
    }, [_vm._v("--- Choisissez l'échéancier ---")]), _vm._v(" "), _vm._l(_vm.periodicites, function (el, index) {
      return [_c("option", {
        key: index,
        domProps: {
          value: el.libelle
        }
      }, [_vm._v(_vm._s(el.libelle))])];
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
          _vm.formDataVarsGaranties($event, ind, "facilites_existante");
          _vm.syncFaciliteToSollicitees();
        }
      }
    })], 1), _vm._v(" "), _c("td", [_c("currency-input2", {
      staticStyle: {
        "min-width": "150px"
      },
      attrs: {
        value: el.impaye,
        id: "impaye"
      },
      on: {
        input: function input($event) {
          _vm.formDataVarsGaranties($event, ind, "facilites_existante");
          _vm.syncFaciliteToSollicitees();
        }
      }
    })], 1), _vm._v(" "), _c("td", [_c("currency-input2", {
      staticStyle: {
        "min-width": "150px"
      },
      attrs: {
        value: el.frais_dossier,
        id: "frais_dossier"
      },
      on: {
        input: function input($event) {
          _vm.formDataVarsGaranties($event, ind, "facilites_existante");
          _vm.syncFaciliteToSollicitees();
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
          _vm.formDataVarsGaranties($event, ind, "facilites_existante");
          _vm.syncFaciliteToSollicitees();
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
              value: el.teg,
              "float": "",
              percentage: "",
              id: "teg"
            },
            on: {
              input: function input($event) {
                _vm.formDataVarsGaranties($event, ind, "facilites_existante");
                _vm.syncFaciliteToSollicitees();
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
          _vm.formDataVarsGaranties($event, ind, "facilites_existante");
          _vm.syncFaciliteToSollicitees();
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
          return _vm.formDataVars3(["commentaire", el.commentaire], ind, "facilites_existante");
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
          _vm.addMoreFaciliteExistante();
          _vm.syncFaciliteToSollicitees();
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
          _vm.removeFaciliteExist(ind);
          _vm.syncFaciliteToSollicitees();
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
      colspan: "2"
    }
  }, [_vm._v("Totaux")]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.totalsExistante.montant_credit))]), _vm._v(" "), _c("td", [_vm._v(" " + _vm._s(_vm.totalsExistante.encours) + " ")]), _vm._v(" "), _c("td", [_vm._v("-")]), _vm._v(" "), _c("td", [_vm._v("-")]), _vm._v(" "), _c("td"), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.totalsExistante.montant_echeance))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.totalsExistante.impaye))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.totalsExistante.frais_dossier))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.totalsExistante.montant_assurance))]), _vm._v(" "), _c("td", [_vm._v("-")]), _vm._v(" "), _c("td", {
    attrs: {
      colspan: "2"
    }
  })])])])])])]) : _c("div", {
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
  }, [_vm._v("\n                                    Concours/Facilités existantes\n                                    "), _c("chevron-down-icon", {
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
      id: "frais-de-crédit"
    }
  }, [_vm._v("\n                                    Concours/Facilités sollicitées faisant l'objet de la demande\n                                    "), _c("chevron-up-icon", {
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
  }, [_vm._m(7), _vm._v(" "), _c("tbody", _vm._l(_vm.facilites_sollicitees, function (el, ind) {
    return _c("tr", {
      key: ind
    }, [_c("td", {
      staticClass: "text-center vertical-middle"
    }, [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: el.isEditable,
        expression: "el.isEditable"
      }],
      attrs: {
        type: "checkbox",
        disabled: el.origin !== "existing"
      },
      domProps: {
        checked: Array.isArray(el.isEditable) ? _vm._i(el.isEditable, null) > -1 : el.isEditable
      },
      on: {
        input: function input($event) {
          return _vm.toggleEditable(ind);
        },
        change: function change($event) {
          var $$a = el.isEditable,
            $$el = $event.target,
            $$c = $$el.checked ? true : false;
          if (Array.isArray($$a)) {
            var $$v = null,
              $$i = _vm._i($$a, $$v);
            if ($$el.checked) {
              $$i < 0 && _vm.$set(el, "isEditable", $$a.concat([$$v]));
            } else {
              $$i > -1 && _vm.$set(el, "isEditable", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
            }
          } else {
            _vm.$set(el, "isEditable", $$c);
          }
        }
      }
    })]), _vm._v(" "), _c("td", [_c("select", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: el.filiale,
        expression: "el.filiale"
      }],
      staticClass: "form-select",
      "class": {
        "bg-blue": el.isEditable && (!el.modifiedFields || !el.modifiedFields.includes("filiale")),
        "bg-red": el.isEditable && el.modifiedFields && el.modifiedFields.includes("filiale")
      },
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
        }, function ($event) {
          return _vm.formDataVars3(["filiale", el.filiale], ind, "facilites_sollicitees");
        }]
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
      }, [_vm._v(_vm._s(filiale_afg) + "\n                                                        ")]);
    })], 2)]), _vm._v(" "), _c("td", {
      staticClass: "text-center"
    }, [_c("select", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: el.type_facilite,
        expression: "el.type_facilite"
      }],
      staticClass: "form-control",
      "class": {
        "bg-blue": el.isEditable && (!el.modifiedFields || !el.modifiedFields.includes("type_facilite")),
        "bg-red": el.isEditable && el.modifiedFields && el.modifiedFields.includes("type_facilite")
      },
      attrs: {
        id: "type_facilite",
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
          _vm.$set(el, "type_facilite", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
        }, function ($event) {
          return _vm.formDataVars3(["type_facilite", el.type_facilite], ind, "facilites_sollicitees");
        }]
      }
    }, [_c("option", {
      attrs: {
        disabled: "",
        selected: "",
        value: ""
      }
    }, [_vm._v("\n                                                            --- Choisissez le type ---\n                                                        ")]), _vm._v(" "), _vm._l(_vm.transformLoadedCreditsBanques_, function (items, group) {
      return _c("optgroup", {
        key: group,
        attrs: {
          label: group
        }
      }, _vm._l(items, function (credit) {
        return _c("option", {
          key: credit.id,
          domProps: {
            value: credit.libelle
          }
        }, [_vm._v("\n                                                            " + _vm._s(credit.libelle) + "\n                                                            ")]);
      }), 0);
    })], 2)]), _vm._v(" "), _c("td", [_c("input", {
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
    })]), _vm._v(" "), _c("td", [_c("currency-input2", {
      "class": {
        "bg-blue": el.isEditable && (!el.modifiedFields || !el.modifiedFields.includes("montant_credit")),
        "bg-red": el.isEditable && el.modifiedFields && el.modifiedFields.includes("montant_credit")
      },
      staticStyle: {
        "min-width": "150px"
      },
      attrs: {
        value: el.montant_credit,
        id: "montant_credit",
        disabled: ""
      },
      on: {
        input: function input($event) {
          return _vm.formDataVars3($event, ind, "facilites_sollicitees");
        }
      }
    })], 1), _vm._v(" "), _c("td", [_c("currency-input2", {
      "class": {
        "bg-blue": el.isEditable && (!el.modifiedFields || !el.modifiedFields.includes("encours_avant")),
        "bg-red": el.isEditable && el.modifiedFields && el.modifiedFields.includes("encours_avant")
      },
      staticStyle: {
        "min-width": "150px"
      },
      attrs: {
        value: el.encours_avant,
        id: "encours_avant",
        disabled: el.origin === "existing" && !el.isEditable
      },
      on: {
        input: function input($event) {
          return _vm.formDataVars3($event, ind, "facilites_sollicitees");
        }
      }
    })], 1), _vm._v(" "), _c("td", [_c("currency-input2", {
      "class": {
        "bg-blue": el.isEditable && (!el.modifiedFields || !el.modifiedFields.includes("montant_demande")),
        "bg-red": el.isEditable && el.modifiedFields && el.modifiedFields.includes("montant_demande")
      },
      staticStyle: {
        "min-width": "150px"
      },
      attrs: {
        value: el.montant_demande,
        id: "montant_demande",
        disabled: el.origin === "existing" && !el.isEditable
      },
      on: {
        input: function input($event) {
          return _vm.formDataVars3($event, ind, "facilites_sollicitees");
        }
      }
    })], 1), _vm._v(" "), _c("td", [_c("currency-input2", {
      "class": {
        "bg-blue": el.isEditable && (!el.modifiedFields || !el.modifiedFields.includes("encours_apres")),
        "bg-red": el.isEditable && el.modifiedFields && el.modifiedFields.includes("encours_apres")
      },
      staticStyle: {
        "min-width": "150px"
      },
      attrs: {
        value: el.encours_apres,
        id: "encours_apres",
        disabled: ""
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
      "class": {
        "bg-blue": el.isEditable && (!el.modifiedFields || !el.modifiedFields.includes("duree")),
        "bg-red": el.isEditable && el.modifiedFields && el.modifiedFields.includes("duree")
      },
      staticStyle: {
        "min-width": "45px",
        "margin-right": "2px"
      },
      attrs: {
        type: "number",
        min: "1",
        id: "duree",
        disabled: el.origin === "existing" && !el.isEditable
      },
      domProps: {
        value: el.duree
      },
      on: {
        input: [function ($event) {
          if ($event.target.composing) return;
          _vm.$set(el, "duree", $event.target.value);
        }, function ($event) {
          return _vm.formDataVars3(["duree", el.duree], ind, "facilites_sollicitees");
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
            "class": {
              "bg-blue": el.isEditable && (!el.modifiedFields || !el.modifiedFields.includes("taux")),
              "bg-red": el.isEditable && el.modifiedFields && el.modifiedFields.includes("taux")
            },
            attrs: {
              value: el.taux,
              "float": "",
              percentage: "",
              id: "taux",
              disabled: el.origin === "existing" && !el.isEditable
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
      "class": {
        "bg-blue": el.isEditable && (!el.modifiedFields || !el.modifiedFields.includes("echeancier")),
        "bg-red": el.isEditable && el.modifiedFields && el.modifiedFields.includes("echeancier")
      },
      attrs: {
        id: "echeancier",
        disabled: el.origin === "existing" && !el.isEditable
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
          return _vm.formDataVars3(["echeancier", el.echeancier], ind, "facilites_sollicitees");
        }]
      }
    }, [_c("option", {
      attrs: {
        disabled: "",
        selected: "",
        value: ""
      }
    }, [_vm._v("--- Choisissez l'échéancier ---")]), _vm._v(" "), _vm._l(_vm.periodicites, function (el, index) {
      return [_c("option", {
        key: index,
        domProps: {
          value: el.libelle
        }
      }, [_vm._v(_vm._s(el.libelle))])];
    })], 2)]), _vm._v(" "), _c("td", [_c("currency-input2", {
      "class": {
        "bg-blue": el.isEditable && (!el.modifiedFields || !el.modifiedFields.includes("montant_echeance")),
        "bg-red": el.isEditable && el.modifiedFields && el.modifiedFields.includes("montant_echeance")
      },
      staticStyle: {
        "min-width": "150px"
      },
      attrs: {
        value: el.montant_echeance,
        id: "montant_echeance",
        disabled: el.origin === "existing" && !el.isEditable
      },
      on: {
        input: function input($event) {
          return _vm.formDataVars3($event, ind, "facilites_sollicitees");
        }
      }
    })], 1), _vm._v(" "), _c("td", [_c("currency-input2", {
      "class": {
        "bg-blue": el.isEditable && (!el.modifiedFields || !el.modifiedFields.includes("frais_dossier")),
        "bg-red": el.isEditable && el.modifiedFields && el.modifiedFields.includes("frais_dossier")
      },
      staticStyle: {
        "min-width": "150px"
      },
      attrs: {
        value: el.frais_dossier,
        id: "frais_dossier",
        disabled: el.origin === "existing" && !el.isEditable
      },
      on: {
        input: function input($event) {
          return _vm.formDataVars3($event, ind, "facilites_sollicitees");
        }
      }
    })], 1), _vm._v(" "), _c("td", [_c("currency-input2", {
      "class": {
        "bg-blue": el.isEditable && (!el.modifiedFields || !el.modifiedFields.includes("montant_assurance")),
        "bg-red": el.isEditable && el.modifiedFields && el.modifiedFields.includes("montant_assurance")
      },
      staticStyle: {
        "min-width": "150px"
      },
      attrs: {
        value: el.montant_assurance,
        id: "montant_assurance",
        disabled: el.origin === "existing" && !el.isEditable
      },
      on: {
        input: function input($event) {
          return _vm.formDataVars3($event, ind, "facilites_sollicitees");
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
            "class": {
              "bg-blue": el.isEditable && (!el.modifiedFields || !el.modifiedFields.includes("teg")),
              "bg-red": el.isEditable && el.modifiedFields && el.modifiedFields.includes("teg")
            },
            attrs: {
              value: el.teg,
              "float": "",
              percentage: "",
              id: "teg",
              disabled: el.origin === "existing" && !el.isEditable
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
    })], 1), _vm._v(" "), _c("td", [_c("date-input", {
      staticStyle: {
        width: "210px"
      },
      attrs: {
        value: el.date_echeance,
        id: "date_echeance",
        background: el.origin === "existing" && !el.isEditable ? "background:#e9ecef" : el.isEditable && !el.modifiedFields.includes("date_echeance") ? "background: #00ffff21" : el.isEditable && el.modifiedFields.includes("date_echeance") ? "background: #ffcccc" : "",
        color: el.isEditable ? "color: #000" : ""
      },
      on: {
        input: function input($event) {
          return _vm.formDataVars3($event, ind, "facilites_sollicitees");
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
      "class": {
        "bg-blue": el.isEditable && (!el.modifiedFields || !el.modifiedFields.includes("commentaire")),
        "bg-red": el.isEditable && el.modifiedFields && el.modifiedFields.includes("commentaire")
      },
      attrs: {
        rows: "1",
        id: "commentaire",
        disabled: el.origin === "existing" && !el.isEditable
      },
      domProps: {
        value: el.commentaire
      },
      on: {
        input: [function ($event) {
          if ($event.target.composing) return;
          _vm.$set(el, "commentaire", $event.target.value);
        }, function ($event) {
          return _vm.formDataVars3(["commentaire", el.commentaire], ind, "facilites_sollicitees");
        }]
      }
    })]), _vm._v(" "), _c("td", {
      staticClass: "vertical-middle text-right",
      staticStyle: {
        width: "15px"
      }
    }, [ind == _vm.firstGarantiesNewIndex ? _c("button", {
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
          return _vm.addMoreFaciliteSollicites();
        }
      }
    }, [_c("plus-icon", {
      staticClass: "custom-class",
      attrs: {
        size: "21"
      }
    })], 1) : _vm._e(), _vm._v(" "), ind > _vm.firstGarantiesNewIndex ? _c("button", {
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
          return _vm.removeFaciliteSollic(ind);
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
      colspan: "4"
    }
  }, [_vm._v("Totaux")]), _vm._v(" "), _c("td", [_c("b", [_vm._v(_vm._s(_vm.formatAmount(_vm.totalsSollicitees.montant_credit)))])]), _vm._v(" "), _c("td", [_c("b", [_vm._v(_vm._s(_vm.formatAmount(_vm.totalsSollicitees.encours_avant)))])]), _vm._v(" "), _c("td", [_c("b", [_vm._v(_vm._s(_vm.formatAmount(_vm.totalsSollicitees.montant_demande)))])]), _vm._v(" "), _c("td", [_c("b", [_vm._v(_vm._s(_vm.formatAmount(_vm.totalsSollicitees.encours_apres)))])]), _vm._v(" "), _c("td", [_vm._v("-")]), _vm._v(" "), _c("td", [_vm._v("-")]), _vm._v(" "), _c("td"), _vm._v(" "), _c("td", [_c("b", [_vm._v(_vm._s(_vm.formatAmount(_vm.totalsSollicitees.montant_echeance)))])]), _vm._v(" "), _c("td", [_c("b", [_vm._v(_vm._s(_vm.formatAmount(_vm.totalsSollicitees.frais_dossier)))])]), _vm._v(" "), _c("td", [_c("b", [_vm._v(_vm._s(_vm.formatAmount(_vm.totalsSollicitees.montant_assurance)))])]), _vm._v(" "), _c("td", [_vm._v("-")]), _vm._v(" "), _c("td", {
    attrs: {
      colspan: "2"
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
      id: "frais-de-crédit"
    }
  }, [_vm._v("\n                                    Concours/Facilités sollicitées faisant l'objet de la demande\n                                    "), _c("chevron-down-icon", {
    staticClass: "custom-class",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    },
    attrs: {
      size: "21"
    }
  })], 1)])]), _vm._v(" "), _vm.seen0_4 ? _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "relook-header",
    on: {
      click: function click($event) {
        _vm.seen0_4 = !_vm.seen0_4;
      }
    }
  }, [_c("h6", {
    "class": " subdiv" + this.tb_name,
    attrs: {
      id: "frais-de-crédit"
    }
  }, [_vm._v("\n                                    Garanties proposées\n                                    "), _c("chevron-up-icon", {
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
    staticClass: "table table-bordered",
    staticStyle: {
      "margin-bottom": "100px"
    }
  }, [_vm._m(8), _vm._v(" "), _c("tbody", _vm._l(_vm.garanties_proposees, function (el, ind) {
    return _c("tr", {
      key: ind
    }, [_c("td", [_c("div", {
      staticClass: "d-flex position-relative align-items-center"
    }, [_c("select", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: el.type,
        expression: "el.type"
      }],
      staticClass: "form-control",
      style: (_vm.data_garanties == "" || _vm.data_garanties.length == 0 ? "padding-right: 38px;" : "") + "min-width: 150px;",
      on: {
        change: [function ($event) {
          var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
            return o.selected;
          }).map(function (o) {
            var val = "_value" in o ? o._value : o.value;
            return val;
          });
          _vm.$set(el, "type", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
        }, function ($event) {
          return _vm.formDataVars3($event, ind, "garanties_proposees");
        }]
      }
    }, [_c("option", {
      attrs: {
        value: "",
        disabled: "",
        selected: ""
      }
    }, [_vm._v("\n                                                                --- Sélectionner l'intitulé ---\n                                                            ")]), _vm._v(" "), _c("option", {
      attrs: {
        value: ""
      }
    }), _vm._v(" "), _vm._l(_vm.data_garanties, function (el, ind_) {
      return _c("option", {
        key: ind_,
        domProps: {
          value: el
        }
      }, [_vm._v(_vm._s(el.libelle))]);
    })], 2), _vm._v(" "), _vm.data_garanties == "" || _vm.data_garanties.length == 0 ? _c("span", {
      staticClass: "spinner-border spinner-border spinner-custom-input"
    }) : _vm._e()])]), _vm._v(" "), _c("td", [_c("div", {
      staticClass: "d-flex position-relative align-items-center"
    }, [_c("vue-tags-input", {
      staticStyle: {
        "min-width": "290px"
      },
      attrs: {
        "autocomplete-items": _vm.filteredTable(ind),
        tags: _vm.tableTags[ind],
        placeholder: "Associer les concours"
      },
      on: {
        "tags-changed": function tagsChanged(newTags) {
          return _vm.updateTableTags(ind, newTags);
        },
        "adding-duplicate": _vm.handleDuplicateTag
      },
      model: {
        value: _vm.tableTag[ind],
        callback: function callback($$v) {
          _vm.$set(_vm.tableTag, ind, $$v);
        },
        expression: "tableTag[ind]"
      }
    })], 1)]), _vm._v(" "), _c("td", [_c("currency-input2", {
      staticStyle: {
        "min-width": "150px"
      },
      attrs: {
        value: el.montant,
        id: "montant"
      },
      on: {
        input: function input($event) {
          return _vm.formDataVars3($event, ind, "garanties_proposees");
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
      staticStyle: {
        "min-width": "250px"
      },
      attrs: {
        rows: "1"
      },
      domProps: {
        value: el.commentaire
      },
      on: {
        change: function change($event) {
          return _vm.formDataVars3($event, ind, "garanties_proposees");
        },
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(el, "commentaire", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", {
      staticStyle: {
        "align-content": "center"
      }
    }, [_c("div", {
      staticClass: "d-flex justify-content-center"
    }, [_c("div", {
      staticStyle: {
        display: "flex"
      }
    }, [_c("label", {
      attrs: {
        "for": "recueillie_oui"
      }
    }, [_vm._v("Oui")]), _vm._v(" "), _c("input", {
      attrs: {
        type: "checkbox",
        value: "Oui",
        id: "is_recueillie"
      },
      domProps: {
        checked: el.is_recueillie == "Oui"
      },
      on: {
        input: function input($event) {
          return _vm.checkboxValSingle($event, ind, "garanties_proposees", "is_recueillie");
        }
      }
    })]), _vm._v(" "), _c("div", {
      staticStyle: {
        display: "flex"
      }
    }, [_c("label", {
      attrs: {
        "for": "recueillie_non"
      }
    }, [_vm._v("Non")]), _vm._v(" "), _c("input", {
      attrs: {
        type: "checkbox",
        value: "Non",
        id: "is_recueillie"
      },
      domProps: {
        checked: el.is_recueillie == "Non"
      },
      on: {
        input: function input($event) {
          return _vm.checkboxValSingle($event, ind, "garanties_proposees", "is_recueillie");
        }
      }
    })])])]), _vm._v(" "), _c("td", {
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
          return _vm.addMoreGarantiesPropos();
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
          return _vm.removeGarantiesPropos(ind);
        }
      }
    }, [_c("trash-icon", {
      staticClass: "custom-class",
      attrs: {
        size: "21"
      }
    })], 1)])]);
  }), 0), _vm._v(" "), _c("tfoot", [_c("tr", [_c("td", {
    staticClass: "fw-bold text-left",
    attrs: {
      colspan: "2"
    }
  }, [_vm._v("Total")]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.totalsGaranties.montant))]), _vm._v(" "), _c("td", {
    attrs: {
      colspan: "2"
    }
  })])])])])])]) : _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "relook-header",
    on: {
      click: function click($event) {
        _vm.seen0_4 = !_vm.seen0_4;
      }
    }
  }, [_c("h6", {
    attrs: {
      id: "frais-de-crédit"
    }
  }, [_vm._v("\n                                    Garanties proposées\n                                    "), _c("chevron-down-icon", {
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
      id: "dcp-ppo1-head"
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col"
  }, [_vm._v("\n                            " + _vm._s(_vm.tb_display_name) + " : Concours/Facilités\n                        ")]), _vm._v(" "), _c("div", {
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
  }), _vm._v(" "), _c("h5", [_vm._v("\n                                    Chargement des données en cours ... "), _c("br"), _vm._v("\n                                    Ceci peut prendre un peu de temps\n                                ")])])]);
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
  }, [_vm._v("\n                                                            TYPE DE DEMANDE "), _c("span", {
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
  }, [_vm._v("\n                                                            TYPE DE CLIENTELE "), _c("span", {
    staticStyle: {
      color: "red"
    }
  }, [_vm._v("*")])])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "text-nowrap",
    attrs: {
      "for": "date_deblocage_prev"
    }
  }, [_vm._v("Date de déblocage\n                                            prévisionnel "), _c("span", {
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
      "for": "date_reception_demande_client"
    }
  }, [_vm._v("Date de réception\n                                            de la demande client "), _c("span", {
    staticStyle: {
      color: "red"
    }
  }, [_vm._v("*")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_c("b", [_vm._v("Ce prêt est-il couvert à 100% minimum par un Cash\n                                                Call ? ")]), _vm._v(" "), _c("span", {
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
      "for": "montant_cash_call"
    }
  }, [_vm._v("Montant de Cash Coll"), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
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
  }, [_vm._v("Montant autrorisé"), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v("*")])]), _vm._v(" "), _c("td", {
    staticClass: "th fw-bold",
    staticStyle: {
      "align-content": "center",
      "min-width": "150px"
    }
  }, [_vm._v("Encours"), _c("span", {
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
  }, [_vm._v("Montant de l’échéance"), _c("span", {
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
      "min-width": "150px"
    }
  }, [_vm._v("Frais de dossier"), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v("*")])]), _vm._v(" "), _c("td", {
    staticClass: "th fw-bold",
    staticStyle: {
      "align-content": "center",
      "min-width": "150px"
    }
  }, [_vm._v("Montant assurance"), _c("span", {
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
  }, [_vm._v("Commentaire")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("td", {
    staticClass: "th fw-bold",
    staticStyle: {
      "align-content": "center",
      "min-width": "50px"
    }
  }), _vm._v(" "), _c("td", {
    staticClass: "th fw-bold",
    staticStyle: {
      "align-content": "center",
      "min-width": "250px"
    }
  }, [_vm._v("Filiale")]), _vm._v(" "), _c("td", {
    staticClass: "th fw-bold",
    staticStyle: {
      "align-content": "center",
      "min-width": "250px"
    }
  }, [_vm._v("Type de crédit")]), _vm._v(" "), _c("td", {
    staticClass: "th fw-bold",
    staticStyle: {
      "align-content": "center",
      "min-width": "250px"
    }
  }, [_vm._v("Nature du concours"), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v("*")])]), _vm._v(" "), _c("td", {
    staticClass: "th fw-bold",
    staticStyle: {
      "align-content": "center",
      "min-width": "150px"
    }
  }, [_vm._v("Mt. autorisé")]), _vm._v(" "), _c("td", {
    staticClass: "th fw-bold",
    staticStyle: {
      "align-content": "center",
      "min-width": "150px"
    }
  }, [_vm._v("Encours avant")]), _vm._v(" "), _c("td", {
    staticClass: "th fw-bold",
    staticStyle: {
      "align-content": "center",
      "min-width": "150px"
    }
  }, [_vm._v("Mt. demandé (Nvle)")]), _vm._v(" "), _c("td", {
    staticClass: "th fw-bold",
    staticStyle: {
      "align-content": "center",
      "min-width": "150px"
    }
  }, [_vm._v("Encours après")]), _vm._v(" "), _c("td", {
    staticClass: "th fw-bold",
    staticStyle: {
      "align-content": "center",
      "min-width": "150px"
    }
  }, [_vm._v("Durée (Mois)")]), _vm._v(" "), _c("td", {
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
  }, [_vm._v("Mt. de l’échéance")]), _vm._v(" "), _c("td", {
    staticClass: "th fw-bold",
    staticStyle: {
      "align-content": "center",
      "min-width": "150px"
    }
  }, [_vm._v("Frais de dossier")]), _vm._v(" "), _c("td", {
    staticClass: "th fw-bold",
    staticStyle: {
      "align-content": "center",
      "min-width": "150px"
    }
  }, [_vm._v("Mt. assurance")]), _vm._v(" "), _c("td", {
    staticClass: "th fw-bold",
    staticStyle: {
      "align-content": "center",
      "min-width": "150px"
    }
  }, [_vm._v("TEG")]), _vm._v(" "), _c("td", {
    staticClass: "th fw-bold",
    staticStyle: {
      "align-content": "center",
      "min-width": "200px"
    }
  }, [_vm._v("Date échéance")]), _vm._v(" "), _c("td", {
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
      "min-width": "250px"
    }
  }, [_vm._v("Intitulé de la garantie")]), _vm._v(" "), _c("td", {
    staticClass: "th fw-bold",
    staticStyle: {
      "min-width": "300px"
    }
  }, [_vm._v("Ligne associée "), _c("br"), _vm._v(" "), _c("small", {
    staticStyle: {
      color: "red"
    }
  }, [_c("i", [_vm._v("Saisisez la nature du concour à associer.")])])]), _vm._v(" "), _c("td", {
    staticClass: "th fw-bold"
  }, [_vm._v("Valeur")]), _vm._v(" "), _c("td", {
    staticClass: "th fw-bold"
  }, [_vm._v("Commentaire/Description")]), _vm._v(" "), _c("td", {
    staticClass: "th fw-bold"
  }, [_vm._v("Garantie recueillie (Oui/Non)")])])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/demande_depassement/DA-DER3.vue?vue&type=style&index=0&id=64cd9607&lang=css&scoped=true":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/demande_depassement/DA-DER3.vue?vue&type=style&index=0&id=64cd9607&lang=css&scoped=true ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n*[data-v-64cd9607] {\r\n    font-family: \"Google sans\";\n}\nlabel[data-v-64cd9607] {\r\n    height: 10px;\r\n    font-size: 13px;\n}\ninput[data-v-64cd9607],\r\nselect[data-v-64cd9607] {\r\n    /* height: 35px; */\r\n    border-color: #34495e;\r\n    color: #57606f;\r\n    font-size: 13px;\r\n    font-weight: bold;\n}\n.th[data-v-64cd9607] {\r\n    padding: 4px;\r\n    padding-bottom: 0px;\n}\n.card-width-height[data-v-64cd9607] {\r\n    width: 100%;\r\n    height: 100%;\n}\n.head[data-v-64cd9607] {\r\n    color: #f1f2f6;\r\n    font-size: 22px;\n}\n.hdc[data-v-64cd9607] {\r\n    background-color: #57606f;\n}\n.relook-header[data-v-64cd9607] {\r\n    color: #000;\r\n    background-color: #f4f3f3;\r\n    padding: 5px;\r\n    border-bottom: 1px solid #b6b8bb;\n}\n.badge-sm[data-v-64cd9607] {\r\n    display: inline-block;\r\n    width: 15px;\r\n    height: 15px;\r\n    background: rgba(255, 0, 0, 0.882);\r\n    color: white;\r\n    font-size: 12px;\r\n    font-weight: 500;\r\n    border-radius: 100%;\r\n    position: absolute;\r\n    top: -20%;\r\n    left: 55%;\r\n    text-align: center;\n}\n.imageM22[data-v-64cd9607] {\r\n    background: url(\"/images/capture_cofina/exemple_source_revenus.png\") no-repeat;\r\n    background-position: center;\r\n    background-size: contain;\r\n    width: 1000px;\r\n    height: 200px;\n}\ntd[data-v-64cd9607],\r\np[data-v-64cd9607] {\r\n    font-size: 13px;\n}\n.relook-header[data-v-64cd9607] {\r\n    color: #000;\r\n    background-color: #f4f3f3;\r\n    padding: 5px;\r\n    border-bottom: 1px solid #b6b8bb;\n}\n.width-100[data-v-64cd9607] {\r\n    width: 90%;\n}\n.personne input[data-v-64cd9607] {\r\n    width: 135px;\n}\n._border_right[data-v-64cd9607] {\r\n    border-right: 1px solid;\n}\n.spinner-custom-input[data-v-64cd9607] {\r\n    --bs-spinner-width: 1rem;\r\n    --bs-spinner-height: 1rem;\r\n    --bs-spinner-border-width: 0.15em;\r\n    border: var(--bs-spinner-border-width) solid #ee6a00;\r\n    border-right-color: transparent;\r\n    position: absolute;\r\n    right: 13px;\n}\ninput[type=\"checkbox\"][data-v-64cd9607] {\r\n    height: 18px;\r\n    width: 20px;\r\n    margin-right: 5px;\n}\n.image1[data-v-64cd9607] {\r\n    background: url(\"/images/capture/exemples/demande_de_pret.png\") no-repeat;\r\n    background-position: center;\r\n    background-size: contain;\r\n\r\n    width: 500px;\r\n    height: 300px;\n}\n.bg-blue[data-v-64cd9607] {\r\n  background-color: #00ffff21; /* Bleu clair */\n}\n.bg-red[data-v-64cd9607] {\r\n  background-color: #ffcccc; /* Rouge clair */\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/demande_depassement/DA-DER3.vue?vue&type=style&index=0&id=64cd9607&lang=css&scoped=true":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/demande_depassement/DA-DER3.vue?vue&type=style&index=0&id=64cd9607&lang=css&scoped=true ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DA_DER3_vue_vue_type_style_index_0_id_64cd9607_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DA-DER3.vue?vue&type=style&index=0&id=64cd9607&lang=css&scoped=true */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/demande_depassement/DA-DER3.vue?vue&type=style&index=0&id=64cd9607&lang=css&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DA_DER3_vue_vue_type_style_index_0_id_64cd9607_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DA_DER3_vue_vue_type_style_index_0_id_64cd9607_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/forms/afg/demande_depassement/DA-DER3.vue":
/*!***************************************************************************!*\
  !*** ./resources/js/components/forms/afg/demande_depassement/DA-DER3.vue ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DA_DER3_vue_vue_type_template_id_64cd9607_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DA-DER3.vue?vue&type=template&id=64cd9607&scoped=true */ "./resources/js/components/forms/afg/demande_depassement/DA-DER3.vue?vue&type=template&id=64cd9607&scoped=true");
/* harmony import */ var _DA_DER3_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DA-DER3.vue?vue&type=script&lang=js */ "./resources/js/components/forms/afg/demande_depassement/DA-DER3.vue?vue&type=script&lang=js");
/* harmony import */ var _DA_DER3_vue_vue_type_style_index_0_id_64cd9607_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DA-DER3.vue?vue&type=style&index=0&id=64cd9607&lang=css&scoped=true */ "./resources/js/components/forms/afg/demande_depassement/DA-DER3.vue?vue&type=style&index=0&id=64cd9607&lang=css&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _DA_DER3_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _DA_DER3_vue_vue_type_template_id_64cd9607_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _DA_DER3_vue_vue_type_template_id_64cd9607_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "64cd9607",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/forms/afg/demande_depassement/DA-DER3.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/forms/afg/demande_depassement/DA-DER3.vue?vue&type=script&lang=js":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/forms/afg/demande_depassement/DA-DER3.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DA_DER3_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DA-DER3.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/demande_depassement/DA-DER3.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DA_DER3_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/forms/afg/demande_depassement/DA-DER3.vue?vue&type=style&index=0&id=64cd9607&lang=css&scoped=true":
/*!***********************************************************************************************************************************!*\
  !*** ./resources/js/components/forms/afg/demande_depassement/DA-DER3.vue?vue&type=style&index=0&id=64cd9607&lang=css&scoped=true ***!
  \***********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DA_DER3_vue_vue_type_style_index_0_id_64cd9607_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DA-DER3.vue?vue&type=style&index=0&id=64cd9607&lang=css&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/demande_depassement/DA-DER3.vue?vue&type=style&index=0&id=64cd9607&lang=css&scoped=true");


/***/ }),

/***/ "./resources/js/components/forms/afg/demande_depassement/DA-DER3.vue?vue&type=template&id=64cd9607&scoped=true":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/components/forms/afg/demande_depassement/DA-DER3.vue?vue&type=template&id=64cd9607&scoped=true ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DA_DER3_vue_vue_type_template_id_64cd9607_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DA_DER3_vue_vue_type_template_id_64cd9607_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DA_DER3_vue_vue_type_template_id_64cd9607_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DA-DER3.vue?vue&type=template&id=64cd9607&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/demande_depassement/DA-DER3.vue?vue&type=template&id=64cd9607&scoped=true");


/***/ }),

/***/ "./resources/js/services/afg/getSpecificDoc.js":
/*!*****************************************************!*\
  !*** ./resources/js/services/afg/getSpecificDoc.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _custom_axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom.axios */ "./resources/js/services/custom.axios.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return r; }; var t, r = {}, e = Object.prototype, n = e.hasOwnProperty, o = "function" == typeof Symbol ? Symbol : {}, i = o.iterator || "@@iterator", a = o.asyncIterator || "@@asyncIterator", u = o.toStringTag || "@@toStringTag"; function c(t, r, e, n) { Object.defineProperty(t, r, { value: e, enumerable: !n, configurable: !n, writable: !n }); } try { c({}, ""); } catch (t) { c = function c(t, r, e) { return t[r] = e; }; } function h(r, e, n, o) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype); return c(a, "_invoke", function (r, e, n) { var o = 1; return function (i, a) { if (3 === o) throw Error("Generator is already running"); if (4 === o) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var u = n.delegate; if (u) { var c = d(u, n); if (c) { if (c === f) continue; return c; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (1 === o) throw o = 4, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = 3; var h = s(r, e, n); if ("normal" === h.type) { if (o = n.done ? 4 : 2, h.arg === f) continue; return { value: h.arg, done: n.done }; } "throw" === h.type && (o = 4, n.method = "throw", n.arg = h.arg); } }; }(r, n, new Context(o || [])), !0), a; } function s(t, r, e) { try { return { type: "normal", arg: t.call(r, e) }; } catch (t) { return { type: "throw", arg: t }; } } r.wrap = h; var f = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var l = {}; c(l, i, function () { return this; }); var p = Object.getPrototypeOf, y = p && p(p(x([]))); y && y !== e && n.call(y, i) && (l = y); var v = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(l); function g(t) { ["next", "throw", "return"].forEach(function (r) { c(t, r, function (t) { return this._invoke(r, t); }); }); } function AsyncIterator(t, r) { function e(o, i, a, u) { var c = s(t[o], t, i); if ("throw" !== c.type) { var h = c.arg, f = h.value; return f && "object" == _typeof(f) && n.call(f, "__await") ? r.resolve(f.__await).then(function (t) { e("next", t, a, u); }, function (t) { e("throw", t, a, u); }) : r.resolve(f).then(function (t) { h.value = t, a(h); }, function (t) { return e("throw", t, a, u); }); } u(c.arg); } var o; c(this, "_invoke", function (t, n) { function i() { return new r(function (r, o) { e(t, n, r, o); }); } return o = o ? o.then(i, i) : i(); }, !0); } function d(r, e) { var n = e.method, o = r.i[n]; if (o === t) return e.delegate = null, "throw" === n && r.i["return"] && (e.method = "return", e.arg = t, d(r, e), "throw" === e.method) || "return" !== n && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + n + "' method")), f; var i = s(o, r.i, e.arg); if ("throw" === i.type) return e.method = "throw", e.arg = i.arg, e.delegate = null, f; var a = i.arg; return a ? a.done ? (e[r.r] = a.value, e.next = r.n, "return" !== e.method && (e.method = "next", e.arg = t), e.delegate = null, f) : a : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f); } function w(t) { this.tryEntries.push(t); } function m(r) { var e = r[4] || {}; e.type = "normal", e.arg = t, r[4] = e; } function Context(t) { this.tryEntries = [[-1]], t.forEach(w, this), this.reset(!0); } function x(r) { if (null != r) { var e = r[i]; if (e) return e.call(r); if ("function" == typeof r.next) return r; if (!isNaN(r.length)) { var o = -1, a = function e() { for (; ++o < r.length;) if (n.call(r, o)) return e.value = r[o], e.done = !1, e; return e.value = t, e.done = !0, e; }; return a.next = a; } } throw new TypeError(_typeof(r) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, c(v, "constructor", GeneratorFunctionPrototype), c(GeneratorFunctionPrototype, "constructor", GeneratorFunction), c(GeneratorFunctionPrototype, u, GeneratorFunction.displayName = "GeneratorFunction"), r.isGeneratorFunction = function (t) { var r = "function" == typeof t && t.constructor; return !!r && (r === GeneratorFunction || "GeneratorFunction" === (r.displayName || r.name)); }, r.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, c(t, u, "GeneratorFunction")), t.prototype = Object.create(v), t; }, r.awrap = function (t) { return { __await: t }; }, g(AsyncIterator.prototype), c(AsyncIterator.prototype, a, function () { return this; }), r.AsyncIterator = AsyncIterator, r.async = function (t, e, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(h(t, e, n, o), i); return r.isGeneratorFunction(e) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, g(v), c(v, u, "Generator"), c(v, i, function () { return this; }), c(v, "toString", function () { return "[object Generator]"; }), r.keys = function (t) { var r = Object(t), e = []; for (var n in r) e.unshift(n); return function t() { for (; e.length;) if ((n = e.pop()) in r) return t.value = n, t.done = !1, t; return t.done = !0, t; }; }, r.values = x, Context.prototype = { constructor: Context, reset: function reset(r) { if (this.prev = this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(m), !r) for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0][4]; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(r) { if (this.done) throw r; var e = this; function n(t) { a.type = "throw", a.arg = r, e.next = t; } for (var o = e.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i[4], u = this.prev, c = i[1], h = i[2]; if (-1 === i[0]) return n("end"), !1; if (!c && !h) throw Error("try statement without catch or finally"); if (null != i[0] && i[0] <= u) { if (u < c) return this.method = "next", this.arg = t, n(c), !0; if (u < h) return n(h), !1; } } }, abrupt: function abrupt(t, r) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var n = this.tryEntries[e]; if (n[0] > -1 && n[0] <= this.prev && this.prev < n[2]) { var o = n; break; } } o && ("break" === t || "continue" === t) && o[0] <= r && r <= o[2] && (o = null); var i = o ? o[4] : {}; return i.type = t, i.arg = r, o ? (this.method = "next", this.next = o[2], f) : this.complete(i); }, complete: function complete(t, r) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), f; }, finish: function finish(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[2] === t) return this.complete(e[4], e[3]), m(e), f; } }, "catch": function _catch(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[0] === t) { var n = e[4]; if ("throw" === n.type) { var o = n.arg; m(e); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(r, e, n) { return this.delegate = { i: x(r), r: e, n: n }, "next" === this.method && (this.arg = t), f; } }, r; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

// import ebapis from '../ebapis.service';
var GetSpecificDoc = /*#__PURE__*/function () {
  function GetSpecificDoc() {
    _classCallCheck(this, GetSpecificDoc);
    _defineProperty(this, "authcheckUsr", null);
    _defineProperty(this, "dossier_credit", null);
    _defineProperty(this, "what_tobe_produced", null);
    _defineProperty(this, "$toasted", null);
    _defineProperty(this, "credpub0", null);
    _defineProperty(this, "credpub1", null);
    _defineProperty(this, "cred_pub_key", null);
    _defineProperty(this, "instance_vue", null);
    _defineProperty(this, "tb_", {});
  }
  return _createClass(GetSpecificDoc, [{
    key: "setData",
    value: function () {
      var _setData = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(data) {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              this.authcheckUsr = data === null || data === void 0 ? void 0 : data.authcheckUsr;
              this.what_tobe_produced = data === null || data === void 0 ? void 0 : data.what_tobe_produced;
              this.$toasted = data === null || data === void 0 ? void 0 : data.toasted;
              this.instance_vue = data === null || data === void 0 ? void 0 : data.instance_vue;
              this.cred_pub_key = data === null || data === void 0 ? void 0 : data.cred_pub_key;
              _context.next = 7;
              return this.getDossInfo();
            case 7:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function setData(_x) {
        return _setData.apply(this, arguments);
      }
      return setData;
    }()
  }, {
    key: "getDossInfo",
    value: function () {
      var _getDossInfo = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var _this = this;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _custom_axios__WEBPACK_IMPORTED_MODULE_0__["default"].post(this.instance_vue.ebapisHost + "creditbuilder/api/v1/get-specific-doc/", {
                cred_pub_key: this.cred_pub_key
              }).then(function (res) {
                var _res$data;
                _this.dossier_credit = res === null || res === void 0 || (_res$data = res.data) === null || _res$data === void 0 ? void 0 : _res$data.dossier;
              })["catch"](function (err) {
                console.error(err);
              });
            case 2:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function getDossInfo() {
        return _getDossInfo.apply(this, arguments);
      }
      return getDossInfo;
    }()
  }]);
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new GetSpecificDoc());

/***/ })

}]);