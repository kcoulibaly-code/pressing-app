(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_offview_bank_afg_memo_conventions_fr_CONVENTION_CREDIT_AMORTISSAGE_NEW_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/conventions/fr/CONVENTION_CREDIT_AMORTISSAGE_NEW.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/conventions/fr/CONVENTION_CREDIT_AMORTISSAGE_NEW.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_ebapis_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../services/ebapis.service */ "./resources/js/services/ebapis.service.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../services/auth.service */ "./resources/js/services/auth.service.js");
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
/* harmony import */ var qrcode_generator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! qrcode-generator */ "./node_modules/qrcode-generator/qrcode.js");
/* harmony import */ var qrcode_generator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(qrcode_generator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! crypto-js */ "./node_modules/crypto-js/index.js");
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _html2canvas__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../html2canvas */ "./resources/js/html2canvas.js");
/* harmony import */ var _html2canvas__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_html2canvas__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jspdf */ "./node_modules/jspdf/dist/jspdf.es.min.js");
/* harmony import */ var _raw_loader_html_afg_fr_convention_pret_html__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!raw-loader!../../../../../../../html/afg/fr/convention_pret.html */ "./node_modules/raw-loader/dist/cjs.js!./resources/js/html/afg/fr/convention_pret.html");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return r; }; var t, r = {}, e = Object.prototype, n = e.hasOwnProperty, o = "function" == typeof Symbol ? Symbol : {}, i = o.iterator || "@@iterator", a = o.asyncIterator || "@@asyncIterator", u = o.toStringTag || "@@toStringTag"; function c(t, r, e, n) { Object.defineProperty(t, r, { value: e, enumerable: !n, configurable: !n, writable: !n }); } try { c({}, ""); } catch (t) { c = function c(t, r, e) { return t[r] = e; }; } function h(r, e, n, o) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype); return c(a, "_invoke", function (r, e, n) { var o = 1; return function (i, a) { if (3 === o) throw Error("Generator is already running"); if (4 === o) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var u = n.delegate; if (u) { var c = d(u, n); if (c) { if (c === f) continue; return c; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (1 === o) throw o = 4, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = 3; var h = s(r, e, n); if ("normal" === h.type) { if (o = n.done ? 4 : 2, h.arg === f) continue; return { value: h.arg, done: n.done }; } "throw" === h.type && (o = 4, n.method = "throw", n.arg = h.arg); } }; }(r, n, new Context(o || [])), !0), a; } function s(t, r, e) { try { return { type: "normal", arg: t.call(r, e) }; } catch (t) { return { type: "throw", arg: t }; } } r.wrap = h; var f = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var l = {}; c(l, i, function () { return this; }); var p = Object.getPrototypeOf, y = p && p(p(x([]))); y && y !== e && n.call(y, i) && (l = y); var v = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(l); function g(t) { ["next", "throw", "return"].forEach(function (r) { c(t, r, function (t) { return this._invoke(r, t); }); }); } function AsyncIterator(t, r) { function e(o, i, a, u) { var c = s(t[o], t, i); if ("throw" !== c.type) { var h = c.arg, f = h.value; return f && "object" == _typeof(f) && n.call(f, "__await") ? r.resolve(f.__await).then(function (t) { e("next", t, a, u); }, function (t) { e("throw", t, a, u); }) : r.resolve(f).then(function (t) { h.value = t, a(h); }, function (t) { return e("throw", t, a, u); }); } u(c.arg); } var o; c(this, "_invoke", function (t, n) { function i() { return new r(function (r, o) { e(t, n, r, o); }); } return o = o ? o.then(i, i) : i(); }, !0); } function d(r, e) { var n = e.method, o = r.i[n]; if (o === t) return e.delegate = null, "throw" === n && r.i["return"] && (e.method = "return", e.arg = t, d(r, e), "throw" === e.method) || "return" !== n && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + n + "' method")), f; var i = s(o, r.i, e.arg); if ("throw" === i.type) return e.method = "throw", e.arg = i.arg, e.delegate = null, f; var a = i.arg; return a ? a.done ? (e[r.r] = a.value, e.next = r.n, "return" !== e.method && (e.method = "next", e.arg = t), e.delegate = null, f) : a : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f); } function w(t) { this.tryEntries.push(t); } function m(r) { var e = r[4] || {}; e.type = "normal", e.arg = t, r[4] = e; } function Context(t) { this.tryEntries = [[-1]], t.forEach(w, this), this.reset(!0); } function x(r) { if (null != r) { var e = r[i]; if (e) return e.call(r); if ("function" == typeof r.next) return r; if (!isNaN(r.length)) { var o = -1, a = function e() { for (; ++o < r.length;) if (n.call(r, o)) return e.value = r[o], e.done = !1, e; return e.value = t, e.done = !0, e; }; return a.next = a; } } throw new TypeError(_typeof(r) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, c(v, "constructor", GeneratorFunctionPrototype), c(GeneratorFunctionPrototype, "constructor", GeneratorFunction), c(GeneratorFunctionPrototype, u, GeneratorFunction.displayName = "GeneratorFunction"), r.isGeneratorFunction = function (t) { var r = "function" == typeof t && t.constructor; return !!r && (r === GeneratorFunction || "GeneratorFunction" === (r.displayName || r.name)); }, r.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, c(t, u, "GeneratorFunction")), t.prototype = Object.create(v), t; }, r.awrap = function (t) { return { __await: t }; }, g(AsyncIterator.prototype), c(AsyncIterator.prototype, a, function () { return this; }), r.AsyncIterator = AsyncIterator, r.async = function (t, e, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(h(t, e, n, o), i); return r.isGeneratorFunction(e) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, g(v), c(v, u, "Generator"), c(v, i, function () { return this; }), c(v, "toString", function () { return "[object Generator]"; }), r.keys = function (t) { var r = Object(t), e = []; for (var n in r) e.unshift(n); return function t() { for (; e.length;) if ((n = e.pop()) in r) return t.value = n, t.done = !1, t; return t.done = !0, t; }; }, r.values = x, Context.prototype = { constructor: Context, reset: function reset(r) { if (this.prev = this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(m), !r) for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0][4]; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(r) { if (this.done) throw r; var e = this; function n(t) { a.type = "throw", a.arg = r, e.next = t; } for (var o = e.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i[4], u = this.prev, c = i[1], h = i[2]; if (-1 === i[0]) return n("end"), !1; if (!c && !h) throw Error("try statement without catch or finally"); if (null != i[0] && i[0] <= u) { if (u < c) return this.method = "next", this.arg = t, n(c), !0; if (u < h) return n(h), !1; } } }, abrupt: function abrupt(t, r) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var n = this.tryEntries[e]; if (n[0] > -1 && n[0] <= this.prev && this.prev < n[2]) { var o = n; break; } } o && ("break" === t || "continue" === t) && o[0] <= r && r <= o[2] && (o = null); var i = o ? o[4] : {}; return i.type = t, i.arg = r, o ? (this.method = "next", this.next = o[2], f) : this.complete(i); }, complete: function complete(t, r) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), f; }, finish: function finish(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[2] === t) return this.complete(e[4], e[3]), m(e), f; } }, "catch": function _catch(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[0] === t) { var n = e[4]; if ("throw" === n.type) { var o = n.arg; m(e); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(r, e, n) { return this.delegate = { i: x(r), r: e, n: n }, "next" === this.method && (this.arg = t), f; } }, r; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }









/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "ConventionCreditAmortissable",
  components: {
    PlusIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_7__.PlusIcon,
    TrashIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_7__.TrashIcon
  },
  props: {
    dossier_credit: {
      type: Object,
      "default": function _default() {
        return {};
      }
    },
    isLoading: {
      type: Boolean,
      "default": false
    },
    edit_mode: {
      type: Boolean,
      "default": false
    },
    meta_data: {
      type: Object,
      "default": function _default() {
        return {};
      }
    },
    tb_name: {
      type: String,
      "default": ""
    },
    indexSelectionne: {
      type: Number,
      "default": 0
    },
    facilite_index: {
      type: Object,
      "default": function _default() {
        return {};
      }
    },
    annexe: {
      type: Object,
      "default": function _default() {
        return {};
      }
    }
  },
  data: function data() {
    var _this$dossier_credit;
    return {
      ebapisHost: _services_ebapis_service__WEBPACK_IMPORTED_MODULE_0__["default"].host,
      // isLoading: false,
      build_off: false,
      remove_highlight: false,
      formData: {
        table: "cred_pub_tb_15501",
        banque: "",
        abreviation: "",
        capital_social: null,
        devise: "",
        siege: "",
        boite_postale: "",
        lieu_immatriculation: "",
        date_immatriculation: null,
        immatriculation: "",
        titre_client: "",
        nom_client: "",
        date_naissance: null,
        lieu_naissance: "",
        nom_du_pere: "",
        nom_de_la_mere: "",
        adresse: "",
        telephone: "",
        telephones: [],
        indicatif_telephone: "",
        email: "",
        fonction: "",
        employeur: "",
        boite_postale_employeur: "",
        titre_identification: "",
        num_identification: "",
        date_delivrance: null,
        lieu_delivrance: "",
        date_redaction: "",
        // designation: '',
        type_financement: "",
        objet: "",
        duree: null,
        taux_interets_annuel: null,
        fonds_garantie: null,
        montant_facilite: null,
        taux_interets: null,
        frais: null,
        taux_interet_annuel: null,
        taux_interet_retard_lettres: "",
        taux_interet_retard: null,
        code_guichet: "",
        num_bq: "",
        numero_de_compte: "",
        cle_rib: "",
        key: "convention_credit_amortissement",
        indexSelectionne: this.indexSelectionne,
        montant_credit: 0,
        num_compte: "",
        num_compte_2: "",
        lieu_redation: "",
        boite_postale_client: "",
        conditions_data: [],
        facilites: [],
        detail_garantie: [],
        agrement: "",
        siteweb: ""
      },
      telephones: [],
      check_fields: {},
      detail_garantie: [],
      conditions_data: [],
      facilites: [],
      var_1: {
        nom_du_pere: false,
        nom_de_la_mere: false,
        boite_postale_employeur: false
      },
      var_2: {},
      var_3: {
        num_compte: false,
        num_compte_2: false
      },
      var_4: {
        lieu_redation: false
      },
      var_5: {
        taux_interet_annuel: false,
        taux_interet_retard_lettres: false,
        taux_interet_retard: false
      },
      var_6: {
        code_guichet: false,
        num_bq: false,
        numero_de_compte: false,
        cle_rib: false,
        date_delivrance: false
      },
      pdf_process: false,
      mask_telephone: "",
      debounce: null,
      local_edit_mode: true,
      local_close_edit_mode: true,
      counters: {
        section: 0,
        subsection: 0
      },
      siege_filiale: "",
      numero_filiale: "",
      mail_filiale: "",
      filliale: "",
      comptes: [],
      data_tb: (_this$dossier_credit = this.dossier_credit) === null || _this$dossier_credit === void 0 ? void 0 : _this$dossier_credit.cred_pub_tb_120004,
      on_saving: false,
      authcheckUsr: null,
      logo: null,
      facilite: null,
      facilites_selectionnee: null,
      billet_ordre: null,
      load_data: true,
      cautionnement_personnel: [],
      cashcollAmount: 0,
      is_applicable: {}
    };
  },
  computed: {
    check_fields_: function check_fields_() {
      var pass = true;
      for (var _i = 0, _Object$entries = Object.entries(this.check_fields); _i < _Object$entries.length; _i++) {
        var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
          key = _Object$entries$_i[0],
          value = _Object$entries$_i[1];
        if (value !== true) {
          pass = false;
        }
      }
      return pass;
    },
    comptesAFGBank: function comptesAFGBank() {
      return this.comptes.filter(function (compte) {
        return compte.banque === "AFG BANK";
      });
    }
  },
  mounted: function mounted() {
    var _this = this;
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var _this$dossier_credit2, _this$meta_data$dossi, _this$facilite2, _this$facilite3, _this$facilite4, _this$facilite5, _this$facilite6, _this$dossier_credit$, _this$dossier_credit3, _this$dossier_credit$2, _this$dossier_credit4, _this$dossier_credit5, _this$facilite7, _this$facilite8, _this$dossier_credit$3, _this$dossier_credit6, _this$dossier_credit7, _this$dossier_credit8, _this$dossier_credit9, _this$meta_data$dossi2, _this$meta_data$dossi16, _this$meta_data$dossi20, _this$meta_data$dossi24, _this$meta_data$dossi26;
      var _this$facilite, _this$authcheckUsr$si, _this$authcheckUsr, _this$authcheckUsr$si2, _this$authcheckUsr2, _this$meta_data$dossi3, _this$meta_data$dossi4, _this$meta_data$dossi5, _this$meta_data$dossi6, _this$meta_data$dossi7, _this$meta_data$dossi8, _this$meta_data$dossi9, _this$meta_data$dossi0, _this$meta_data$dossi1, _this$meta_data$dossi10, _this$meta_data$dossi11, _this$meta_data$dossi12, _this$meta_data$dossi13, _this$meta_data$dossi14, _this$meta_data$dossi15, _this$meta_data$dossi17, _this$meta_data$dossi18, _this$meta_data$dossi19, _this$meta_data$dossi21, _this$meta_data$dossi22, _this$formData, _this$facilite$infos_, _this$meta_data$dossi23, _this$dossier_credit0, _this$dossier_credit1, duree, echeancierMapping, echeancier, montant_echeance, montant_credit, now, day, month, year, cashcollAmount, _this$meta_data$dossi25, _this$comptes, compte, tb4, _this$cautionnement_p, _this$cautionnement_p2, _this$cautionnement_p3, _this$cautionnement_p4, _this$cautionnement_p5, _this$cautionnement_p6, _this$cautionnement_p7, _this$cautionnement_p8, _this$cautionnement_p9, _this$cautionnement_p0, _this$cautionnement_p1, _this$cautionnement_p10, _this$cautionnement_p11, _this$cautionnement_p12, _this$cautionnement_p13, _this$cautionnement_p14, _this$cautionnement_p15, _this$cautionnement_p16, _this$cautionnement_p17, _this$cautionnement_p18, _this$cautionnement_p19, _this$cautionnement_p20, _this$cautionnement_p21, _this$cautionnement_p22, _this$cautionnement_p23, _principal$firstname, _principal$lastname, data, avoirs_dom, nantissement, compte_epargne, bon_de_casse, principal, cash_collateral, is_applicable, selected_garanties, selected_garanties_dom, nantissement_list, _cash_collateral, _cash_collateral2;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["default"].loadUserData().then(/*#__PURE__*/function () {
              var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(res) {
                return _regeneratorRuntime().wrap(function _callee$(_context) {
                  while (1) switch (_context.prev = _context.next) {
                    case 0:
                      _this.authcheckUsr = res.data;
                      _this.logo = _this.authcheckUsr["logo"];
                      _context.next = 4;
                      return _this.getAgenceLocation();
                    case 4:
                    case "end":
                      return _context.stop();
                  }
                }, _callee);
              }));
              return function (_x) {
                return _ref.apply(this, arguments);
              };
            }())["catch"](function (err) {
              console.log(err);
            });
          case 2:
            _this.loadRetrieved();
            _this.getGarantiesLigne((_this$dossier_credit2 = _this.dossier_credit) === null || _this$dossier_credit2 === void 0 || (_this$dossier_credit2 = _this$dossier_credit2.cred_pub_tb_120004) === null || _this$dossier_credit2 === void 0 || (_this$dossier_credit2 = _this$dossier_credit2.facilites_sollicitees[_this.facilite_index.index]) === null || _this$dossier_credit2 === void 0 ? void 0 : _this$dossier_credit2.uuid);
            _this.$on("generate-pdf-process", function (data) {
              _this.pdf_process = data;
            });
            _this.$on("build-off-printable", function () {
              _this.buildOffPrintable();
            });

            // Initialiser facilites_selectionnees et facilite
            _this.facilites_selectionnees = (_this$meta_data$dossi = _this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi === void 0 ? void 0 : _this$meta_data$dossi["cred_pub_tb_120004"].facilites_selectionnees;
            _this.facilite = _this.facilite_index;
            if (_this.facilites_selectionnees && _this.facilite) {
              _this.facilites_selectionnee = _this.facilites_selectionnees[(_this$facilite = _this.facilite) === null || _this$facilite === void 0 ? void 0 : _this$facilite.index];
            }

            // Initialiser conditions_data
            _this.conditions_data = [{
              id: 1,
              libelle: "Type de financement",
              value: ((_this$facilite2 = _this.facilite) === null || _this$facilite2 === void 0 ? void 0 : _this$facilite2.facilite_libelle) || "",
              checked: true,
              disabled: true
            }, {
              id: 2,
              libelle: "Objet",
              value: ((_this$facilite3 = _this.facilite) === null || _this$facilite3 === void 0 ? void 0 : _this$facilite3.type_facilite) || "",
              checked: true,
              disabled: true
            }, {
              id: 3,
              libelle: "Montant",
              value: ((_this$facilite4 = _this.facilite) === null || _this$facilite4 === void 0 ? void 0 : _this$facilite4.montant_credit) || 0,
              checked: true,
              disabled: true
            }, {
              id: 4,
              libelle: "Durée",
              value: ((_this$facilite5 = _this.facilite) === null || _this$facilite5 === void 0 ? void 0 : _this$facilite5.duree) + " Mois" || 0,
              checked: true,
              disabled: true
            }, {
              id: 5,
              libelle: "Taux d'intérêt annuel",
              value: ((_this$facilite6 = _this.facilite) === null || _this$facilite6 === void 0 ? void 0 : _this$facilite6.taux) + " %" || 0,
              checked: true,
              disabled: true
            }, {
              id: 6,
              libelle: "Frais de dossier et de mise en place",
              value: _this.formatMontant((_this$dossier_credit$ = (_this$dossier_credit3 = _this.dossier_credit) === null || _this$dossier_credit3 === void 0 || (_this$dossier_credit3 = _this$dossier_credit3.cred_pub_tb_120004) === null || _this$dossier_credit3 === void 0 || (_this$dossier_credit3 = _this$dossier_credit3.facilites_selectionnees[_this.facilite_index.index]) === null || _this$dossier_credit3 === void 0 ? void 0 : _this$dossier_credit3.frais_dossier) !== null && _this$dossier_credit$ !== void 0 ? _this$dossier_credit$ : 0),
              checked: true,
              disabled: true
            }, {
              id: 7,
              libelle: "Cash coll",
              value: _this.formatMontant((_this$dossier_credit$2 = (_this$dossier_credit4 = _this.dossier_credit) === null || _this$dossier_credit4 === void 0 || (_this$dossier_credit4 = _this$dossier_credit4.cred_pub_tb_120004) === null || _this$dossier_credit4 === void 0 || (_this$dossier_credit4 = _this$dossier_credit4.facilites_selectionnees[_this.facilite_index.index]) === null || _this$dossier_credit4 === void 0 ? void 0 : _this$dossier_credit4.cash_call_amount) !== null && _this$dossier_credit$2 !== void 0 ? _this$dossier_credit$2 : 0),
              checked: true,
              disabled: true
            }, {
              id: 8,
              libelle: "Prime assurance décès emprunteur",
              value: ((_this$dossier_credit5 = _this.dossier_credit) === null || _this$dossier_credit5 === void 0 || (_this$dossier_credit5 = _this$dossier_credit5.cred_pub_tb_120004) === null || _this$dossier_credit5 === void 0 || (_this$dossier_credit5 = _this$dossier_credit5.facilites_selectionnees[_this.facilite_index.index]) === null || _this$dossier_credit5 === void 0 ? void 0 : _this$dossier_credit5.montant_assurance) || 0,
              checked: true,
              disabled: true
            }];

            // Initialiser facilites
            _this.facilites = [{
              id: 1,
              libelle: "Montant facilité",
              value: ((_this$facilite7 = _this.facilite) === null || _this$facilite7 === void 0 ? void 0 : _this$facilite7.montant_credit) || "",
              checked: true,
              disabled: true
            }, {
              id: 2,
              libelle: "Taux intérêt",
              value: ((_this$facilite8 = _this.facilite) === null || _this$facilite8 === void 0 ? void 0 : _this$facilite8.taux) + " %" || 0,
              checked: true,
              disabled: true
            }, {
              id: 3,
              libelle: "Frais",
              value: _this.formatMontant((_this$dossier_credit$3 = (_this$dossier_credit6 = _this.dossier_credit) === null || _this$dossier_credit6 === void 0 || (_this$dossier_credit6 = _this$dossier_credit6.cred_pub_tb_120004) === null || _this$dossier_credit6 === void 0 || (_this$dossier_credit6 = _this$dossier_credit6.facilites_selectionnees[_this.facilite_index.index]) === null || _this$dossier_credit6 === void 0 ? void 0 : _this$dossier_credit6.frais_dossier) !== null && _this$dossier_credit$3 !== void 0 ? _this$dossier_credit$3 : 0),
              checked: true,
              disabled: true
            }, {
              id: 4,
              libelle: "TEG annuel",
              value: ((_this$dossier_credit7 = _this.dossier_credit) === null || _this$dossier_credit7 === void 0 || (_this$dossier_credit7 = _this$dossier_credit7.cred_pub_tb_120004) === null || _this$dossier_credit7 === void 0 || (_this$dossier_credit7 = _this$dossier_credit7.facilites_selectionnees[_this.facilite_index.index]) === null || _this$dossier_credit7 === void 0 ? void 0 : _this$dossier_credit7.TEG) + " %" || 0,
              checked: true,
              disabled: true
            }, {
              id: 5,
              libelle: "TEG Périodique",
              value: ((_this$dossier_credit8 = _this.dossier_credit) === null || _this$dossier_credit8 === void 0 || (_this$dossier_credit8 = _this$dossier_credit8.cred_pub_tb_120004) === null || _this$dossier_credit8 === void 0 || (_this$dossier_credit8 = _this$dossier_credit8.facilites_selectionnees[_this.facilite_index.index]) === null || _this$dossier_credit8 === void 0 ? void 0 : _this$dossier_credit8.taux_periodique) + " %" || 0,
              checked: true,
              disabled: true
            }, {
              id: 6,
              libelle: "Taux d'usure",
              value: ((_this$dossier_credit9 = _this.dossier_credit) === null || _this$dossier_credit9 === void 0 || (_this$dossier_credit9 = _this$dossier_credit9.cred_pub_tb_120004) === null || _this$dossier_credit9 === void 0 || (_this$dossier_credit9 = _this$dossier_credit9.facilites_selectionnees[_this.facilite_index.index]) === null || _this$dossier_credit9 === void 0 ? void 0 : _this$dossier_credit9.taux_usure) + " %" || 0,
              checked: true,
              disabled: true
            }];
            if (_this.authenticatedUser.filiale == "AFGB ML") {
              _this.siege_filiale = "Immeuble M1, rue 286, Hamdallaye ACI 2 000 BP 72, Bamako, MalI";
              _this.numero_filiale = "(+223) 44 98 07 00";
              _this.mail_filiale = "assistance@afgbank.ml";
              _this.formData.banque = "AFG BANK MALI";
              _this.formData.abreviation = "AFG BANK ML";
              _this.formData.capital_social = "10 000 060 000";
              _this.formData.siege = "Immeuble M1, rue 286, Hamdallaye ACI 2 000 BP 72, Bamako, MalI";
              _this.formData.boite_postale = "BP 72";
              _this.formData.immatriculation = "Mali";
              _this.formData.devise = (_this$authcheckUsr$si = (_this$authcheckUsr = _this.authcheckUsr) === null || _this$authcheckUsr === void 0 ? void 0 : _this$authcheckUsr.sigle_devise) !== null && _this$authcheckUsr$si !== void 0 ? _this$authcheckUsr$si : "";
              _this.formData.lieu_immatriculation = "MA BKO 2007 B 1183";
              _this.formData.date_immatriculation = "01/01/1999";
              _this.formData.lieu_redation = "Bamako";
              _this.formData.agrement = "";
              _this.formData.siteweb = "www.afgbank.ml";
            } else if (_this.authenticatedUser.filiale == "AFGB CM") {
              _this.siege_filiale = "1112 Boulevard de la Liberté - Akwa Douala, Cameroun";
              _this.numero_filiale = "(+237) 233 50 99 00";
              _this.mail_filiale = "customer.care@afgbank.cm";
              _this.formData.banque = "AFG BANK CAMEROUN";
              _this.formData.abreviation = "AFG BANK CM";
              _this.formData.capital_social = "28 857 520 000";
              _this.formData.siege = "Akwa, Douala";
              _this.formData.boite_postale = "2933 Douala Cameroun";
              _this.formData.immatriculation = "RC/DLA/2008/B/1195";
              _this.formData.lieu_redation = "Douala";
              _this.formData.devise = (_this$authcheckUsr$si2 = (_this$authcheckUsr2 = _this.authcheckUsr) === null || _this$authcheckUsr2 === void 0 ? void 0 : _this$authcheckUsr2.sigle_devise) !== null && _this$authcheckUsr$si2 !== void 0 ? _this$authcheckUsr$si2 : "";
              _this.formData.lieu_immatriculation = "Douala – Bonanjo";
              _this.formData.date_immatriculation = "19 juin 2008";
              _this.formData.agrement = "R.C N° DLA/2008/B/1195 | N° Contrib M0 608 000 250 28 W | Agrément N° 00000 322/MINFI du 06 du 06 juillet 2015";
              _this.formData.siteweb = "www.afgbank.cm";
              _this.formData.statut_juridique = "Société Anonyme avec Conseil d’Administration";
            }
            if ((_this$meta_data$dossi2 = _this.meta_data["dossier_credit"]) !== null && _this$meta_data$dossi2 !== void 0 && _this$meta_data$dossi2["cred_pub_tb_120001"]) {
              _this.formData.nom_client = ((_this$meta_data$dossi3 = _this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi3 === void 0 || (_this$meta_data$dossi3 = _this$meta_data$dossi3["cred_pub_tb_120001"]) === null || _this$meta_data$dossi3 === void 0 ? void 0 : _this$meta_data$dossi3["nom"]) + " " + ((_this$meta_data$dossi4 = _this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi4 === void 0 || (_this$meta_data$dossi4 = _this$meta_data$dossi4["cred_pub_tb_120001"]) === null || _this$meta_data$dossi4 === void 0 ? void 0 : _this$meta_data$dossi4["prenoms"]);
              _this.formData.telephone = (_this$meta_data$dossi5 = _this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi5 === void 0 || (_this$meta_data$dossi5 = _this$meta_data$dossi5["cred_pub_tb_120001"]) === null || _this$meta_data$dossi5 === void 0 ? void 0 : _this$meta_data$dossi5["telephone"];
              _this.formData.titre_client = ((_this$meta_data$dossi6 = _this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi6 === void 0 || (_this$meta_data$dossi6 = _this$meta_data$dossi6["cred_pub_tb_120001"]) === null || _this$meta_data$dossi6 === void 0 ? void 0 : _this$meta_data$dossi6["sexe"]) == "Masculin" ? "Monsieur" : "Madame";
              _this.formData.date_naissance = (_this$meta_data$dossi7 = _this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi7 === void 0 || (_this$meta_data$dossi7 = _this$meta_data$dossi7["cred_pub_tb_120001"]) === null || _this$meta_data$dossi7 === void 0 ? void 0 : _this$meta_data$dossi7["date_naissance"];
              _this.formData.lieu_naissance = (_this$meta_data$dossi8 = _this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi8 === void 0 || (_this$meta_data$dossi8 = _this$meta_data$dossi8["cred_pub_tb_120001"]) === null || _this$meta_data$dossi8 === void 0 ? void 0 : _this$meta_data$dossi8["ville_naissance"];
              _this.formData.adresse = (_this$meta_data$dossi9 = _this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi9 === void 0 || (_this$meta_data$dossi9 = _this$meta_data$dossi9["cred_pub_tb_120001"]) === null || _this$meta_data$dossi9 === void 0 ? void 0 : _this$meta_data$dossi9["adresse"];
              _this.formData.boite_postale_client = (_this$meta_data$dossi0 = _this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi0 === void 0 || (_this$meta_data$dossi0 = _this$meta_data$dossi0["cred_pub_tb_120001"]) === null || _this$meta_data$dossi0 === void 0 ? void 0 : _this$meta_data$dossi0["adresse_postale"];
              _this.formData.email = (_this$meta_data$dossi1 = _this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi1 === void 0 || (_this$meta_data$dossi1 = _this$meta_data$dossi1["cred_pub_tb_120001"]) === null || _this$meta_data$dossi1 === void 0 ? void 0 : _this$meta_data$dossi1["email_client"];
              _this.formData.lieu_delivrance = (_this$meta_data$dossi10 = _this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi10 === void 0 || (_this$meta_data$dossi10 = _this$meta_data$dossi10["cred_pub_tb_120001"]) === null || _this$meta_data$dossi10 === void 0 ? void 0 : _this$meta_data$dossi10["lieu_delivrance_piece"];
              _this.formData.date_delivrance = (_this$meta_data$dossi11 = _this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi11 === void 0 || (_this$meta_data$dossi11 = _this$meta_data$dossi11["cred_pub_tb_120001"]) === null || _this$meta_data$dossi11 === void 0 ? void 0 : _this$meta_data$dossi11["date_delivrance_piece"];
              _this.formData.titre_identification = (_this$meta_data$dossi12 = _this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi12 === void 0 || (_this$meta_data$dossi12 = _this$meta_data$dossi12["cred_pub_tb_120001"]) === null || _this$meta_data$dossi12 === void 0 ? void 0 : _this$meta_data$dossi12["type_piece"];
              _this.formData.num_identification = (_this$meta_data$dossi13 = _this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi13 === void 0 || (_this$meta_data$dossi13 = _this$meta_data$dossi13["cred_pub_tb_120001"]) === null || _this$meta_data$dossi13 === void 0 ? void 0 : _this$meta_data$dossi13["num_piece"];
              _this.formData.nom_du_pere = (_this$meta_data$dossi14 = _this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi14 === void 0 || (_this$meta_data$dossi14 = _this$meta_data$dossi14["cred_pub_tb_120001"]) === null || _this$meta_data$dossi14 === void 0 ? void 0 : _this$meta_data$dossi14["dad"];
              _this.formData.nom_de_la_mere = (_this$meta_data$dossi15 = _this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi15 === void 0 || (_this$meta_data$dossi15 = _this$meta_data$dossi15["cred_pub_tb_120001"]) === null || _this$meta_data$dossi15 === void 0 ? void 0 : _this$meta_data$dossi15["mum"];
            }
            if ((_this$meta_data$dossi16 = _this.meta_data["dossier_credit"]) !== null && _this$meta_data$dossi16 !== void 0 && _this$meta_data$dossi16["cred_pub_tb_120002"]) {
              _this.formData.fonction = (_this$meta_data$dossi17 = _this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi17 === void 0 || (_this$meta_data$dossi17 = _this$meta_data$dossi17["cred_pub_tb_120002"]) === null || _this$meta_data$dossi17 === void 0 ? void 0 : _this$meta_data$dossi17["fonction"];
              _this.formData.employeur = (_this$meta_data$dossi18 = _this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi18 === void 0 || (_this$meta_data$dossi18 = _this$meta_data$dossi18["cred_pub_tb_120002"]) === null || _this$meta_data$dossi18 === void 0 ? void 0 : _this$meta_data$dossi18["entreprise"];
              _this.formData.boite_postale_employeur = (_this$meta_data$dossi19 = _this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi19 === void 0 || (_this$meta_data$dossi19 = _this$meta_data$dossi19["cred_pub_tb_120002"]) === null || _this$meta_data$dossi19 === void 0 ? void 0 : _this$meta_data$dossi19["boite_postale_employeur"];
            }
            if ((_this$meta_data$dossi20 = _this.meta_data["dossier_credit"]) !== null && _this$meta_data$dossi20 !== void 0 && _this$meta_data$dossi20["cred_pub_tb_120004"]) {
              _this.facilites_selectionnee = _this.facilites_selectionnees[_this.facilite_index.index];
              _this.formData.demande_effectue = (_this$meta_data$dossi21 = _this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi21 === void 0 || (_this$meta_data$dossi21 = _this$meta_data$dossi21["cred_pub_tb_120004"]) === null || _this$meta_data$dossi21 === void 0 ? void 0 : _this$meta_data$dossi21["date_reception_demande_client"];
              _this.formData.objet = (_this$meta_data$dossi22 = _this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi22 === void 0 || (_this$meta_data$dossi22 = _this$meta_data$dossi22["cred_pub_tb_120004"]) === null || _this$meta_data$dossi22 === void 0 ? void 0 : _this$meta_data$dossi22["objet_du_pret"];
              _this.formData.montant_facilite = _this.facilite.montant_demande;
              _this.formData.montant_credit = _this.facilite.montant_credit;
              _this.formData.taux_interets = _this.facilite.taux;
              _this.formData.nombre_jour_remboursement_chiffre = _this.facilite.duree;
              duree = _this.facilite.duree;
              _this.formData.nombre_jour_remboursement_chiffre = duree;
              _this.formData.nombre_jour_remboursement_lettre = duree ? _this.nombreEnLettres(String(duree).replace(/\s+/g, "")) : "";
              _this.formData.modalite_remboursement_chiffre = _this.facilite.montant_echeance;
              _this.formData.modalite_remboursement_lettre = (_this$formData = _this.formData) !== null && _this$formData !== void 0 && _this$formData.modalite_remboursement_chiffre ? _this.nombreEnLettres(String(_this.formData.modalite_remboursement_chiffre).replace(/\s+/g, "")) : "";
              echeancierMapping = {
                Mensuelle: "mensualité",
                Bimensuelle: "bimestrialité",
                Trimestrielle: "trimestrialité",
                Semestrielle: "semestrialité",
                Annuelle: "annualité"
              };
              echeancier = _this.facilite.echeancier;
              _this.formData.echeancier = echeancierMapping[echeancier] || echeancier;
              _this.formData.type_financement = _this.facilite.facilite_libelle;
              _this.formData.code_type_financement = (_this$facilite$infos_ = _this.facilite.infos_fcub) === null || _this$facilite$infos_ === void 0 ? void 0 : _this$facilite$infos_.PRODUCT_CODE;
              montant_echeance = _this.convertNumber(_this.facilite.montant_echeance) || 0;
              montant_credit = _this.convertNumber(_this.facilite.montant_credit) || 0;
              _this.formData.nombre_echeance = _this.facilite.duree;
              now = new Date();
              day = String(now.getDate()).padStart(2, "0");
              month = String(now.getMonth() + 1).padStart(2, "0");
              year = now.getFullYear();
              _this.formData.date_octroit = (_this$meta_data$dossi23 = _this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi23 === void 0 || (_this$meta_data$dossi23 = _this$meta_data$dossi23["cred_pub_tb_120004"]) === null || _this$meta_data$dossi23 === void 0 ? void 0 : _this$meta_data$dossi23["date_deblocage_prev"];
              _this.formData.date_redaction = "".concat(day, "/").concat(month, "/").concat(year);
              // caution et garantie
              cashcollAmount = _this.formatMontant((_this$dossier_credit0 = _this.dossier_credit) === null || _this$dossier_credit0 === void 0 || (_this$dossier_credit0 = _this$dossier_credit0.cred_pub_tb_120004) === null || _this$dossier_credit0 === void 0 || (_this$dossier_credit0 = _this$dossier_credit0.facilites_selectionnees[_this.facilite_index.index]) === null || _this$dossier_credit0 === void 0 ? void 0 : _this$dossier_credit0.cash_call_amount);
              _this.cashcollAcount = (_this$dossier_credit1 = _this.dossier_credit) === null || _this$dossier_credit1 === void 0 || (_this$dossier_credit1 = _this$dossier_credit1.cred_pub_tb_120004) === null || _this$dossier_credit1 === void 0 || (_this$dossier_credit1 = _this$dossier_credit1.facilites_selectionnees[_this.facilite_index.index]) === null || _this$dossier_credit1 === void 0 ? void 0 : _this$dossier_credit1.compte_cash_coll;
              _this.cashcollAmount = cashcollAmount;
            }
            if ((_this$meta_data$dossi24 = _this.meta_data["dossier_credit"]) !== null && _this$meta_data$dossi24 !== void 0 && _this$meta_data$dossi24["cred_pub_tb_120003"]) {
              _this.comptes = (_this$meta_data$dossi25 = _this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi25 === void 0 || (_this$meta_data$dossi25 = _this$meta_data$dossi25["cred_pub_tb_120003"]) === null || _this$meta_data$dossi25 === void 0 ? void 0 : _this$meta_data$dossi25["comptes"];
              compte = (_this$comptes = _this.comptes) === null || _this$comptes === void 0 ? void 0 : _this$comptes.filter(function (x) {
                return x.type == "Compte courant";
              })[0]; // console.log("compte", this.comptes);
              _this.formData.code_guichet = (compte === null || compte === void 0 ? void 0 : compte.type_code) || "";
              _this.formData.numero_de_compte = (compte === null || compte === void 0 ? void 0 : compte.numero_compte) || "";
              _this.formData.cle_rib = compte === null || compte === void 0 ? void 0 : compte.iban;
            }
            tb4 = (_this$meta_data$dossi26 = _this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi26 === void 0 ? void 0 : _this$meta_data$dossi26.cred_pub_tb_120008;
            if (tb4) {
              // caution
              data = tb4 === null || tb4 === void 0 ? void 0 : tb4.garanties.find(function (el) {
                return el.id == 'caution' && el.checked;
              });
              _this.cautionnement_personnel = (data === null || data === void 0 ? void 0 : data.infos.find(function (el) {
                return el.isPrincipal == "Oui";
              })) || (data === null || data === void 0 ? void 0 : data.infos[0]);
              _this.formData.civilite_caution = ((_this$cautionnement_p = _this.cautionnement_personnel) === null || _this$cautionnement_p === void 0 ? void 0 : _this$cautionnement_p['sexe']) == 'Masculin' ? 'Monsieur' : 'Madame';

              // this.formData.nom_caution = this.cautionnement_personnel?.['firstname'] + ' ' + this.cautionnement_personnel?.['lastname'];
              _this.formData.nom_caution = [(_this$cautionnement_p2 = (_this$cautionnement_p3 = _this.cautionnement_personnel) === null || _this$cautionnement_p3 === void 0 ? void 0 : _this$cautionnement_p3.firstname) !== null && _this$cautionnement_p2 !== void 0 ? _this$cautionnement_p2 : '', (_this$cautionnement_p4 = (_this$cautionnement_p5 = _this.cautionnement_personnel) === null || _this$cautionnement_p5 === void 0 ? void 0 : _this$cautionnement_p5.lastname) !== null && _this$cautionnement_p4 !== void 0 ? _this$cautionnement_p4 : ''].filter(Boolean).join(' ');
              _this.formData.date_de_naissance_caution = _this.formatDate((_this$cautionnement_p6 = _this.cautionnement_personnel) === null || _this$cautionnement_p6 === void 0 ? void 0 : _this$cautionnement_p6['date_naissance']);
              _this.formData.lieu_naissance_caution = (_this$cautionnement_p7 = _this.cautionnement_personnel) === null || _this$cautionnement_p7 === void 0 ? void 0 : _this$cautionnement_p7['lieu_naissance'];
              _this.formData.nom_du_pere_caution = (_this$cautionnement_p8 = _this.cautionnement_personnel) === null || _this$cautionnement_p8 === void 0 ? void 0 : _this$cautionnement_p8['nom_du_pere'];
              _this.formData.nom_de_la_mere_caution = (_this$cautionnement_p9 = _this.cautionnement_personnel) === null || _this$cautionnement_p9 === void 0 ? void 0 : _this$cautionnement_p9['nom_de_la_mere'];
              _this.formData.adresse_de_la_caution = (_this$cautionnement_p0 = _this.cautionnement_personnel) === null || _this$cautionnement_p0 === void 0 ? void 0 : _this$cautionnement_p0['lieu_habitation'];
              _this.formData.type_piece_identite_caution = (_this$cautionnement_p1 = _this.cautionnement_personnel) === null || _this$cautionnement_p1 === void 0 ? void 0 : _this$cautionnement_p1['type_piece'];
              _this.formData.num_piece_identite_caution = (_this$cautionnement_p10 = _this.cautionnement_personnel) === null || _this$cautionnement_p10 === void 0 ? void 0 : _this$cautionnement_p10['piece'];
              _this.formData.telephone_caution = (_this$cautionnement_p11 = _this.cautionnement_personnel) === null || _this$cautionnement_p11 === void 0 ? void 0 : _this$cautionnement_p11['telephone'];
              _this.formData.date_delivrance_piece_identite_caution = _this.formatDate((_this$cautionnement_p12 = _this.cautionnement_personnel) === null || _this$cautionnement_p12 === void 0 ? void 0 : _this$cautionnement_p12['date_delivrance_piece']);
              _this.formData.lieu_delivrance_piece_identite_caution = (_this$cautionnement_p13 = _this.cautionnement_personnel) === null || _this$cautionnement_p13 === void 0 ? void 0 : _this$cautionnement_p13['lieu_delivration'];
              _this.formData.montant_caution = (_this$cautionnement_p14 = _this.cautionnement_personnel) === null || _this$cautionnement_p14 === void 0 ? void 0 : _this$cautionnement_p14['valeur_caution'];
              _this.formData.boite_postale_employeur_caution = (_this$cautionnement_p15 = _this.cautionnement_personnel) === null || _this$cautionnement_p15 === void 0 ? void 0 : _this$cautionnement_p15['bpEmployeur'];
              _this.formData.fonction_caution = (_this$cautionnement_p16 = _this.cautionnement_personnel) === null || _this$cautionnement_p16 === void 0 ? void 0 : _this$cautionnement_p16['fonction'];
              _this.formData.employeur_caution = (_this$cautionnement_p17 = _this.cautionnement_personnel) === null || _this$cautionnement_p17 === void 0 ? void 0 : _this$cautionnement_p17['nomEmployeur'];
              _this.formData.montant_caution = (_this$cautionnement_p18 = _this.cautionnement_personnel) === null || _this$cautionnement_p18 === void 0 ? void 0 : _this$cautionnement_p18['valeur_caution'];
              _this.formData.fonction_caution = (_this$cautionnement_p19 = _this.cautionnement_personnel) === null || _this$cautionnement_p19 === void 0 ? void 0 : _this$cautionnement_p19['fonction'];
              _this.formData.boite_postale_employeur_caution = (_this$cautionnement_p20 = _this.cautionnement_personnel) === null || _this$cautionnement_p20 === void 0 ? void 0 : _this$cautionnement_p20['bpEmployeur'];
              _this.formData.email_caution = (_this$cautionnement_p21 = _this.cautionnement_personnel) === null || _this$cautionnement_p21 === void 0 ? void 0 : _this$cautionnement_p21['email'];
              _this.formData.boite_postale_caution = (_this$cautionnement_p22 = _this.cautionnement_personnel) === null || _this$cautionnement_p22 === void 0 ? void 0 : _this$cautionnement_p22['boite_postale'];
              avoirs_dom = document.createElement('ul');
              (((_this$cautionnement_p23 = _this.cautionnement_personnel) === null || _this$cautionnement_p23 === void 0 ? void 0 : _this$cautionnement_p23['avoirsInvestissements']) || []).forEach(function (avoir) {
                var li = document.createElement('li');
                li.textContent = "".concat(avoir.label, " : ").concat(_this.formatMontant(avoir.value), " ").concat(_this.formData.devise);
                avoirs_dom.appendChild(li);
                li.classList.add('font-bold');
              });
              _this.formData.avoirs_investissements = avoirs_dom.innerHTML || ".....";
              // this.formData.avoirs_investissements = this.cautionnement_personnel?.['avoirsInvestissements'];
              // nantissement compte epargne, bon de caisse, depot a terme ( DAT )
              nantissement = tb4 === null || tb4 === void 0 ? void 0 : tb4.garanties.find(function (el) {
                return el.id == 'nantissement' && el.checked;
              });
              compte_epargne = nantissement === null || nantissement === void 0 ? void 0 : nantissement.infos.find(function (el) {
                return el.type == 'nantissement_compte_epargne';
              });
              bon_de_casse = nantissement === null || nantissement === void 0 ? void 0 : nantissement.infos.find(function (el) {
                return el.type == 'nantissement_bon_de_caisse';
              });
              principal = (nantissement === null || nantissement === void 0 ? void 0 : nantissement.infos.find(function (el) {
                return el.isPrincipal;
              })) || (nantissement === null || nantissement === void 0 ? void 0 : nantissement.infos[0]);
              cash_collateral = tb4 === null || tb4 === void 0 ? void 0 : tb4.garanties.find(function (el) {
                return el.id == 'cash_collateral' && el.checked;
              });
              is_applicable = {
                nantissement_compte_epargne: nantissement && (nantissement === null || nantissement === void 0 ? void 0 : nantissement.infos.some(function (i) {
                  return i.type == 'nantissement_compte_epargne';
                })),
                nantissement_bon_de_caisse: nantissement && (nantissement === null || nantissement === void 0 ? void 0 : nantissement.infos.some(function (i) {
                  return i.type == 'nantissement_bon_de_caisse';
                })),
                cash_collateral: !!_this.convertNumber(_this.cashcollAmount) || !!cash_collateral,
                cautionnement: !!_this.cautionnement_personnel,
                nantissement: !!nantissement
              };
              _this.is_applicable = is_applicable;
              _this.formData.is_nantissement_compte_epargne_applicable = is_applicable.nantissement_compte_epargne ? "" : "( Non Applicable)";
              _this.formData.is_nantissement_bon_de_caisse_applicable = is_applicable.nantissement_bon_de_caisse ? "" : "( Non Applicable)";
              _this.formData.is_cash_collateral_applicable = is_applicable.cash_collateral ? "" : "( Non Applicable)";
              _this.formData.is_cautionnement_applicable = is_applicable.cautionnement ? "" : "( Non Applicable)";
              _this.formData.is_nantissement_applicable = is_applicable.nantissement ? "" : "( Non Applicable)";
              selected_garanties = (tb4 === null || tb4 === void 0 ? void 0 : tb4.garanties.filter(function (el) {
                return el.checked;
              }).map(function (el) {
                return el.name;
              })) || [];
              selected_garanties_dom = document.createElement('ul');
              if (nantissement) {
                selected_garanties.splice(selected_garanties.indexOf('Nantissements ( compte bancaire / bon de caisse / DAT )'), 1);
                nantissement_list = nantissement.infos.map(function (n) {
                  if (n.type == 'nantissement_compte_epargne') {
                    return "Nantissement compte \xE9pargne";
                  } else if (n.type == 'nantissement_bon_de_caisse') {
                    return "Nantissement bon de caisse";
                  } else if (n.type == 'nantissement_dat') {
                    return "Nantissement d\xE9p\xF4t \xE0 terme";
                  }
                }).filter(Boolean);
                selected_garanties = selected_garanties.concat(nantissement_list);
              }
              selected_garanties.forEach(function (g) {
                var li = document.createElement('li');
                li.textContent = g;
                selected_garanties_dom.appendChild(li);
                li.classList.add('font-bold');
              });
              _this.formData.selected_garanties = selected_garanties_dom.innerHTML;
              if (cash_collateral) {
                cash_collateral = cash_collateral.infos[0];
                _this.cashcollAmount = ((_cash_collateral = cash_collateral) === null || _cash_collateral === void 0 ? void 0 : _cash_collateral.montant) || "......";
                _this.cashcollAccount = ((_cash_collateral2 = cash_collateral) === null || _cash_collateral2 === void 0 ? void 0 : _cash_collateral2.numero_compte_garanti) || ".....";
              }
              console.log({
                principal: principal
              });
              // information constituant
              _this.formData.nom_constituant = [(_principal$firstname = principal === null || principal === void 0 ? void 0 : principal.firstname) !== null && _principal$firstname !== void 0 ? _principal$firstname : '', (_principal$lastname = principal === null || principal === void 0 ? void 0 : principal.lastname) !== null && _principal$lastname !== void 0 ? _principal$lastname : ''].filter(Boolean).join(' ') || ".....";
              _this.formData.date_naissance_constituant = _this.formatDate(principal === null || principal === void 0 ? void 0 : principal['date_naissance']) || ".....";
              _this.formData.lieu_naissance_constituant = (principal === null || principal === void 0 ? void 0 : principal['lieu_naissance']) || ".....";
              _this.formData.nom_pere_constituant = (principal === null || principal === void 0 ? void 0 : principal['nom_du_pere']) || ".....";
              _this.formData.nom_mere_constituant = (principal === null || principal === void 0 ? void 0 : principal['nom_de_la_mere']) || ".....";
              _this.formData.adresse_constituant = (principal === null || principal === void 0 ? void 0 : principal['lieu_habitation']) || ".....";
              _this.formData.type_piece_identite_constituant = (principal === null || principal === void 0 ? void 0 : principal['type_piece']) || ".....";
              _this.formData.num_piece_identite_constituant = (principal === null || principal === void 0 ? void 0 : principal['piece']) || ".....";
              _this.formData.telephone_constituant = (principal === null || principal === void 0 ? void 0 : principal['telephone']) || ".....";
              _this.formData.email_constituant = (principal === null || principal === void 0 ? void 0 : principal['email']) || ".....";
              _this.formData.boite_postale_constituant = (principal === null || principal === void 0 ? void 0 : principal['boite_postale']) || ".....";
              _this.formData.date_delivrance_piece_identite_constituant = _this.formatDate(principal === null || principal === void 0 ? void 0 : principal['date_delivrance_piece']) || ".....";
              _this.formData.lieu_delivrance_piece_identite_constituant = (principal === null || principal === void 0 ? void 0 : principal['lieu_delivration']) || ".....";
              _this.formData.employeur_constituant = (principal === null || principal === void 0 ? void 0 : principal['nomEmployeur']) || ".....";
              _this.formData.fonction_constituant = (principal === null || principal === void 0 ? void 0 : principal['fonction']) || ".....";
              _this.formData.civilite_constituant = (principal === null || principal === void 0 ? void 0 : principal['sexe']) == 'Masculin' ? 'Monsieur' : 'Madame';
              _this.formData.boite_postale_employeur_constituant = principal === null || principal === void 0 ? void 0 : principal['bpEmployeur'];

              // compte d'epargne
              _this.formData.numero_compte_nanti = (compte_epargne === null || compte_epargne === void 0 ? void 0 : compte_epargne.numero_compte_nanti) || ".....";
              _this.formData.montant_nantissement_epargne = (compte_epargne === null || compte_epargne === void 0 ? void 0 : compte_epargne.montant_nanti) || ".....";

              // bon de caisse
              _this.formData.numero_bon_de_caisse = bon_de_casse === null || bon_de_casse === void 0 ? void 0 : bon_de_casse.numero_bon_de_caisse;
              _this.formData.date_souscription = _this.formatDate(bon_de_casse === null || bon_de_casse === void 0 ? void 0 : bon_de_casse.date_souscription);
              _this.formData.date_echeance = _this.formatDate(bon_de_casse === null || bon_de_casse === void 0 ? void 0 : bon_de_casse.date_echeance);
              _this.formData.montant_bon_caisse_nanti = bon_de_casse === null || bon_de_casse === void 0 ? void 0 : bon_de_casse.montant_nanti;
              _this.formData.souscripteur = bon_de_casse === null || bon_de_casse === void 0 ? void 0 : bon_de_casse.souscripteur;
              _this.formData.etablissement_depositaire = bon_de_casse === null || bon_de_casse === void 0 ? void 0 : bon_de_casse.etablissement_depositaire;
              _this.formData.compte_affectation = bon_de_casse === null || bon_de_casse === void 0 ? void 0 : bon_de_casse.compte_affectation;
              _this.formData.beneficiaire = bon_de_casse === null || bon_de_casse === void 0 ? void 0 : bon_de_casse.beneficiaire;
              _this.formData.lieu_souscription = bon_de_casse === null || bon_de_casse === void 0 ? void 0 : bon_de_casse.lieu_souscription;
              _this.formData.lieu_paiement = bon_de_casse === null || bon_de_casse === void 0 ? void 0 : bon_de_casse.lieu_paiement;
            }
            EventBus.$on("facilites-updated", function (data) {
              _this.facilites_selectionnees = data.facilites_selectionnees;
            });
            _this.setBilletOrdre();
            _this.$nextTick(function () {
              _this.loadContentHtml();
            });
          case 21:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }))();
  },
  methods: {
    nombreEnLettres: function nombreEnLettres(input) {
      var _this2 = this;
      var n = parseInt(input);
      if (isNaN(n)) return "non numérique";
      var unités = ["zéro", "un", "deux", "trois", "quatre", "cinq", "six", "sept", "huit", "neuf"];
      var dizaines = ["", "", "vingt", "trente", "quarante", "cinquante", "soixante", "soixante-dix", "quatre-vingt", "quatre-vingt-dix"];
      var dizainesSpeciales = ["dix", "onze", "douze", "treize", "quatorze", "quinze", "seize"];
      var milliers = ["", "mille", "million"];
      var moinsDeCent = function moinsDeCent(num) {
        if (num === 0) return "";
        if (num < 10) return unités[num];
        if (num < 17) return dizainesSpeciales[num - 10];
        if (num < 20) return "dix-" + unités[num - 10];
        var dizaine = Math.floor(num / 10);
        var unite = num % 10;
        if (num < 70) {
          return dizaines[dizaine] + (unite === 1 ? "-et-un" : unite > 0 ? "-" + unités[unite] : "");
        }
        if (num < 80) {
          return "soixante" + (unite === 0 ? "-dix" : "-" + _this2.nombreEnLettres(10 + unite));
        }
        return dizaines[dizaine] + (unite === 0 ? unite === 0 && dizaine === 8 ? "s" : "" : "-" + _this2.nombreEnLettres(unite));
      };
      var moinsDeMille = function moinsDeMille(num) {
        if (num === 0) return "zéro";
        if (num < 100) return moinsDeCent(num);
        if (num === 100) return "cent";
        var centaine = Math.floor(num / 100);
        var reste = num % 100;
        return (centaine > 1 ? unités[centaine] + " " : "") + "cent" + (centaine > 1 && reste === 0 ? "s" : "") + (reste > 0 ? " " + moinsDeCent(reste) : "");
      };
      if (n === 0) return unités[0];
      if (n < 1000) return moinsDeMille(n);
      var result = "";
      var num = n;
      var index = 0;
      while (num > 0) {
        var part = num % 1000;
        if (part > 0) {
          var partText = moinsDeMille(part);
          if (index === 1 && part === 1) {
            partText = "mille";
          } else if (index > 0) {
            partText += " " + milliers[index] + (part > 1 && index === 2 ? "s" : "");
          }
          result = partText + (result ? " " + result : "");
        }
        num = Math.floor(num / 1000);
        index++;
      }
      return result.trim();
    },
    setEditMode: function setEditMode() {
      var _this3 = this;
      this.$emit("edit-mode");
      this.local_edit_mode = false;
      if (!this.on_saving) {
        this.local_edit_mode = true;
      }
      setTimeout(function () {
        if (!_this3.edit_mode) {
          _this3.buildOffPrintable();
        } else {
          _this3.build_off = false;
        }
      }, 1000);
    },
    closeEditMode: function closeEditMode() {
      var _this4 = this;
      this.remove_highlight = !this.remove_highlight;
      this.$nextTick(function () {
        _this4.loadContentHtml(_this4.remove_highlight);
      });
    },
    formDataVars: function formDataVars(_ref2) {
      var _ref3 = _slicedToArray(_ref2, 2),
        key = _ref3[0],
        value = _ref3[1];
      this.formData[key] = value;
    },
    handleInput: function handleInput() {
      this.formData.telephones = this.telephones;
      this.formData.check_fields = this.check_fields;
    },
    checkField: function checkField(field) {
      var _this$check_fields$fi;
      if (["var_1", "var_2", "var_3", "var_4", "var_5", "var_6"].includes(field)) {
        var pass = true;
        for (var _i2 = 0, _Object$entries2 = Object.entries(this[field]); _i2 < _Object$entries2.length; _i2++) {
          var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i2], 1),
            key = _Object$entries2$_i[0];
          if (!["undefined", undefined].includes(this.check_fields[key])) {
            if (this.check_fields[key] !== true) {
              pass = false;
            }
          }
        }
        return pass;
      }
      return (_this$check_fields$fi = this.check_fields[field]) !== null && _this$check_fields$fi !== void 0 ? _this$check_fields$fi : false;
    },
    onCheckField: function onCheckField(check, field) {
      if (["var_1", "var_2", "var_3", "var_4", "var_5", "var_6"].includes(field)) {
        for (var _i3 = 0, _Object$entries3 = Object.entries(this[field]); _i3 < _Object$entries3.length; _i3++) {
          var _Object$entries3$_i = _slicedToArray(_Object$entries3[_i3], 1),
            key = _Object$entries3$_i[0];
          this.check_fields[key] = check;
        }
      } else {
        this.check_fields[field] = check;
      }
      this.handleInput();
    },
    send2Backend: function send2Backend(newVal) {
      var _this$dossier_credit10,
        _this5 = this;
      this.on_saving = true;
      this.$emit("autosaving");
      this.$axios.post(this.ebapisHost + "creditbuilder/api/v1/redaction-fiche-annexe/", {
        cred_pub_key: (_this$dossier_credit10 = this.dossier_credit) === null || _this$dossier_credit10 === void 0 ? void 0 : _this$dossier_credit10.cred_pub_key,
        filledData: newVal
      }).then(function () {
        _this5.on_saving = false;
        _this5.$emit("autosaving");
        if (!_this5.local_edit_mode) {
          _this5.$emit("edit-mode", {
            convention_id: _this5.formData.id
          });
          _this5.local_edit_mode = true;
        }
        if (!_this5.local_close_edit_mode) {
          _this5.$emit("edit-mode", {
            close: true
          });
          _this5.local_close_edit_mode = true;
        }
      })["catch"](function (error) {
        console.log(error);
      });
    },
    generateQRCode: function generateQRCode() {
      var _this$dossier_credit11, _this$dossier_credit12, _this$authenticatedUs, _this$authenticatedUs2, _this$authenticatedUs3, _this$dossier_credit13;
      var size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 100;
      var MIX_APP_KEY = "base64:gdjlPSs3+sKaDi+/SNwOI9pjIE/c9dlYM78gSikIAjY=";
      var secretKey = MIX_APP_KEY.replace("base64:", "");
      // const secretKey = "maCléSecrète123";

      // construction de data
      var payload = {
        num_doss: (_this$dossier_credit11 = this.dossier_credit) === null || _this$dossier_credit11 === void 0 ? void 0 : _this$dossier_credit11.numero_dossier,
        cred_pub_key: (_this$dossier_credit12 = this.dossier_credit) === null || _this$dossier_credit12 === void 0 ? void 0 : _this$dossier_credit12.cred_pub_key,
        user: {
          name: (_this$authenticatedUs = this.authenticatedUser) === null || _this$authenticatedUs === void 0 ? void 0 : _this$authenticatedUs.name,
          role: (_this$authenticatedUs2 = this.authenticatedUser) === null || _this$authenticatedUs2 === void 0 ? void 0 : _this$authenticatedUs2.role[0].display_name,
          email: (_this$authenticatedUs3 = this.authenticatedUser) === null || _this$authenticatedUs3 === void 0 ? void 0 : _this$authenticatedUs3.email
        },
        client: (_this$dossier_credit13 = this.dossier_credit) === null || _this$dossier_credit13 === void 0 || (_this$dossier_credit13 = _this$dossier_credit13.client_core_banking) === null || _this$dossier_credit13 === void 0 ? void 0 : _this$dossier_credit13.name
      };

      // Chiffrer les données avec CryptoJS
      var encryptedData = this.encryptData(payload, secretKey);
      // Générer le QR code
      var qr = qrcode_generator__WEBPACK_IMPORTED_MODULE_2___default()(0, "L");
      qr.addData(encryptedData);
      qr.make();
      var qrImg = document.createElement("img");
      qrImg.src = qr.createDataURL();
      qrImg.style.width = "".concat(size, "px");
      qrImg.style.height = "".concat(size, "px");
      qrImg.style.position = "absolute";
      qrImg.style.left = "50%";
      qrImg.style.transform = "translate(-50%, -50%)";
      return qrImg;
    },
    addTelephone: function addTelephone() {
      this.telephones.push({
        numero: "",
        indicatif: this.formData.indicatif_telephone
      });
      var index = this.telephones.length - 1;
      var field = "telephone_" + index;
      this.$set(this.check_fields, field, null);
      this.var_1[field] = null;
      this.handleInput();
    },
    removeTelephone: function removeTelephone(index) {
      this.telephones.splice(index, 1);
      var field = "telephone_" + index;
      delete this.check_fields[field];
      delete this.var_1[field];
      this.handleInput();
      this.reorderIndex("telephone");
    },
    reorderIndex: function reorderIndex(indexKey) {
      var backups = [];
      for (var _i4 = 0, _Object$entries4 = Object.entries(this.check_fields); _i4 < _Object$entries4.length; _i4++) {
        var _Object$entries4$_i = _slicedToArray(_Object$entries4[_i4], 2),
          key = _Object$entries4$_i[0],
          value = _Object$entries4$_i[1];
        var k = key.split("_");
        if (key.indexOf("_") !== -1 && k[0] === indexKey) {
          backups.push(value);
          delete this.check_fields[key];
        }
      }
      if (backups.length > 0) {
        for (var i = 0; i < backups.length; i++) {
          this.$set(this.check_fields, indexKey + "_" + i, backups[i]);
          this.var_1[indexKey + "_" + i] = backups[i];
          // this.check_fields_teg[indexKey + "_" + i] = backups[i];
        }
      }
      this.handleInput();
    },
    loadRetrieved: function loadRetrieved() {
      var _this$meta_data$dossi27, _this$meta_data$dossi28, _this$meta_data$dossi29;
      var createdKey = "convention_credit_amortissement";
      var found = (_this$meta_data$dossi27 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi27 === void 0 || (_this$meta_data$dossi27 = _this$meta_data$dossi27[createdKey]) === null || _this$meta_data$dossi27 === void 0 ? void 0 : _this$meta_data$dossi27[this.indexSelectionne];
      if (!((_this$meta_data$dossi28 = this.meta_data["dossier_credit"]) !== null && _this$meta_data$dossi28 !== void 0 && _this$meta_data$dossi28[createdKey])) {
        this.check_fields = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, this.var_1), this.var_2), this.var_3), this.var_4), this.var_5), this.var_6);
      } else if (found !== null && found !== void 0 && found.check_fields) {
        this.check_fields = found.check_fields;
      }
      if ((_this$meta_data$dossi29 = this.meta_data["dossier_credit"]) !== null && _this$meta_data$dossi29 !== void 0 && (_this$meta_data$dossi29 = _this$meta_data$dossi29.caf_recorded_file) !== null && _this$meta_data$dossi29 !== void 0 && _this$meta_data$dossi29.indicatif) {
        this.mask_telephone = "+".concat(this.meta_data["dossier_credit"].caf_recorded_file.indicatif, " ## ## ### ###");
        this.formData.indicatif_telephone = "+".concat(this.meta_data["dossier_credit"].caf_recorded_file.indicatif);
      }
      if (found) {
        // this.formData = { ...this.formData, ...found };
        this.check_fields = found.check_fields || {};
        this.telephones = found.telephones || [];
        // this.listGaranties = found.listGaranties
      }
      // this.initializeGarantiesKeys();
      this.load_data = false;
    },
    exportToPDF: function exportToPDF(download) {
      var _this6 = this;
      this.$nextTick(function () {
        _this6.loadContentHtml(true);
      });
      // this.loadContentHtml(true);
      this.generatePdf(download);
    },
    generatePdf: function generatePdf(download) {
      var _this7 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var _this7$annexe;
        var conventionName, filename, iframe, doc, pages, pdf, pageWidth, pageHeight, i, page, canvas, imgWidth, imgHeight, imgData, pdfBlob;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _this7.pdf_process = true;
              conventionName = (_this7$annexe = _this7.annexe) === null || _this7$annexe === void 0 ? void 0 : _this7$annexe.type_facilite.trim().replace(/\s+/g, "_").toLowerCase(); // let filename = conventionName + ".pdf";
              filename = "Convention de cr\xE9dit amortissable - Particulier/ ".concat(conventionName) + ".pdf"; // const pages = document.querySelectorAll(".print-page");
              // if (!pages.length) {
              //     console.error("❌ Aucun élément `.print-page` trouvé.");
              //     this.pdf_process = false;
              //     return;
              // }
              // Vérifier que l'iframe existe
              iframe = _this7.$refs.monIframe;
              if (!(!iframe || !iframe.contentWindow || !iframe.contentWindow.document)) {
                _context3.next = 8;
                break;
              }
              console.error("❌ Iframe ou document de l'iframe introuvable.");
              _this7.pdf_process = false;
              return _context3.abrupt("return");
            case 8:
              _context3.next = 10;
              return new Promise(function (resolve) {
                if (iframe.contentWindow.document.readyState === "complete") {
                  resolve();
                } else {
                  iframe.contentWindow.addEventListener("load", resolve);
                }
              });
            case 10:
              // Après l'attente du chargement
              doc = iframe.contentWindow.document; // Ajouter la classe "print-page" si absente
              doc.querySelectorAll(".page-pdf").forEach(function (el) {
                el.classList.add("print-page");
              });
              pages = doc.querySelectorAll(".print-page"); // console.log("pages", pages);
              if (pages.length) {
                _context3.next = 17;
                break;
              }
              console.error("❌ Aucun élément `.print-page` trouvé dans l'iframe.");
              _this7.pdf_process = false;
              return _context3.abrupt("return");
            case 17:
              pdf = new jspdf__WEBPACK_IMPORTED_MODULE_5__.jsPDF("p", "mm", "a4");
              pageWidth = pdf.internal.pageSize.width;
              pageHeight = pdf.internal.pageSize.height;
              _context3.prev = 20;
              i = 0;
            case 22:
              if (!(i < pages.length)) {
                _context3.next = 35;
                break;
              }
              page = pages[i]; // page.style.paddingLeft = "40px";
              // page.style.paddingRight = "40px";
              _context3.next = 26;
              return _html2canvas__WEBPACK_IMPORTED_MODULE_4___default()(page, {
                scale: 2,
                useCORS: true,
                logging: false
              });
            case 26:
              canvas = _context3.sent;
              imgWidth = pageWidth;
              imgHeight = pageHeight;
              imgData = canvas.toDataURL("image/jpeg", 0.7);
              if (i > 0) pdf.addPage();
              pdf.addImage(imgData, "JPEG", 0, 0, imgWidth, imgHeight);
            case 32:
              i++;
              _context3.next = 22;
              break;
            case 35:
              pdfBlob = pdf.output("blob");
              _this7.pdfFile = new File([pdfBlob], filename, {
                type: "application/pdf"
              });
              if (download) {
                pdf.save(filename);
              } else {
                _this7.handleDoubleClickOrClick(_this7.indexSelectionne, _this7.pdfFile);
              }
              _context3.next = 43;
              break;
            case 40:
              _context3.prev = 40;
              _context3.t0 = _context3["catch"](20);
              console.error("Erreur lors de la génération du PDF :", _context3.t0);
            case 43:
              _context3.prev = 43;
              _this7.pdf_process = false; // Désactiver l'indicateur, même en cas d'erreur
              _this7.$nextTick(function () {
                _this7.loadContentHtml(false);
              });
              return _context3.finish(43);
            case 47:
            case "end":
              return _context3.stop();
          }
        }, _callee3, null, [[20, 40, 43, 47]]);
      }))();
    },
    handleDoubleClickOrClick: function handleDoubleClickOrClick(index, pdfFile) {
      var _this8 = this;
      EventBus.$emit("open-extra-file-explorer");
      EventBus.$emit("transmission-file", {
        pdfFile: pdfFile
      });

      // let name= "Lettre {(*)}notifications_" + index +"_" +this.$route.params.templateId

      setTimeout(function () {
        EventBus.$emit("data-extra-file-explorer", {
          name: "Convention {(*)}credits_amortissable_".concat(index, "_").concat(_this8.$route.params.templateId),
          is_auto: true
        });
      }, 1000);
    },
    encryptData: function encryptData(data, secretKey) {
      return crypto_js__WEBPACK_IMPORTED_MODULE_3___default().AES.encrypt(JSON.stringify(data), secretKey).toString();
    },
    buildOffPrintable: function buildOffPrintable() {
      var _arguments = arguments,
        _this9 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        var retryCount, targetElement, preloader_content, elements, printableContainer, PAGE_WIDTH, PAGE_HEIGHT, MARGIN, PADDING, FOOTER_HEIGHT, QR_HEIGHT, AVAILABLE_HEIGHT, currentPage, currentHeight, pageCounter, createPage, createFooter, _applyStyleToFirstP, paginationDiv, qrCode;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              retryCount = _arguments.length > 0 && _arguments[0] !== undefined ? _arguments[0] : 0;
              _this9.build_off = false;
              targetElement = _this9.$refs.contentToCapture;
              if (targetElement) {
                _context4.next = 11;
                break;
              }
              if (!(retryCount < 3)) {
                _context4.next = 10;
                break;
              }
              _context4.next = 7;
              return new Promise(function (resolve) {
                return setTimeout(resolve, 500);
              });
            case 7:
              return _context4.abrupt("return", _this9.buildOffPrintable(retryCount + 1));
            case 10:
              return _context4.abrupt("return");
            case 11:
              if (_this9.logo) {
                _context4.next = 16;
                break;
              }
              if (!(retryCount < 5)) {
                _context4.next = 16;
                break;
              }
              _context4.next = 15;
              return new Promise(function (resolve) {
                return setTimeout(resolve, 2000);
              });
            case 15:
              return _context4.abrupt("return", _this9.buildOffPrintable(retryCount + 1));
            case 16:
              targetElement.querySelectorAll("br").forEach(function (br) {
                var div = document.createElement("div");
                div.style.height = "20px";
                div.style.display = "block";
                br.replaceWith(div);
              });
              preloader_content = document.getElementById("preloader-content");
              elements = Array.from(targetElement.children);
              printableContainer = document.getElementById("printable");
              printableContainer.innerHTML = "";
              PAGE_WIDTH = 794;
              PAGE_HEIGHT = 1122;
              MARGIN = 50;
              PADDING = 40;
              FOOTER_HEIGHT = 100;
              QR_HEIGHT = 110;
              AVAILABLE_HEIGHT = PAGE_HEIGHT - PADDING * 2 - FOOTER_HEIGHT;
              currentPage = null;
              currentHeight = 0;
              pageCounter = 1;
              createPage = function createPage() {
                var page = document.createElement("div");
                page.classList.add("print-page");
                page.style.width = "".concat(PAGE_WIDTH, "px");
                page.style.height = "".concat(PAGE_HEIGHT, "px");
                page.style.margin = "".concat(MARGIN, "px auto");
                page.style.padding = "".concat(PADDING, "px");
                page.style.boxSizing = "border-box";
                page.style.border = "1px solid #ddd";
                page.style.background = "white";
                page.style.position = "relative";
                page.style.paddingBottom = "".concat(QR_HEIGHT + FOOTER_HEIGHT, "px");
                return page;
              };
              createFooter = function createFooter() {
                var footer = document.createElement("div");
                footer.style.position = "absolute";
                footer.style.bottom = "10px";
                footer.style.left = "40px";
                footer.style.right = "40px";
                footer.style.fontSize = "10px";
                footer.style.color = "#444";
                footer.style.textAlign = "center";
                footer.style.lineHeight = "1.3";
                footer.innerHTML = "\n          <strong>".concat(_this9.formData.banque, "</strong><br>\n          Si\xE8ge social : ").concat(_this9.formData.siege, ", B.P. : ").concat(_this9.formData.boite_postale, ", T\xE9l : ").concat(_this9.numero_filiale, " |\n          SA au capital social de : ").concat(_this9.formData.capital_social, " ").concat(_this9.formData.devise, " |\n          R.C N\xB0 DLA/2008/B/1195 | N\xB0 Contrib M0 608 000 250 28 W | Agr\xE9ment N\xB0 00000 322/MINFI du 06 juillet 2015 | www.afgbank.cm\n        ");
                return footer;
              };
              _applyStyleToFirstP = function applyStyleToFirstP(element) {
                if (!element) return;
                if (element.tagName === "P") {
                  element.style.margin = "0px";
                  return;
                }
                var _iterator = _createForOfIteratorHelper(element.children),
                  _step;
                try {
                  for (_iterator.s(); !(_step = _iterator.n()).done;) {
                    var child = _step.value;
                    _applyStyleToFirstP(child);
                  }
                } catch (err) {
                  _iterator.e(err);
                } finally {
                  _iterator.f();
                }
              };
              elements.forEach(function (el, index) {
                var clonedElement = el.cloneNode(true);
                _applyStyleToFirstP(clonedElement);
                preloader_content.appendChild(clonedElement);
                var elementHeight = clonedElement.offsetHeight;
                var clone = clonedElement.cloneNode(true);
                if (currentHeight + elementHeight > AVAILABLE_HEIGHT || !currentPage) {
                  if (currentPage) {
                    var paginationDiv = document.createElement("div");
                    paginationDiv.textContent = "".concat(pageCounter);
                    paginationDiv.style.position = "absolute";
                    paginationDiv.style.bottom = "30px";
                    paginationDiv.style.right = "35px";
                    paginationDiv.style.fontSize = "15px";
                    paginationDiv.style.color = "#666";
                    currentPage.appendChild(paginationDiv);
                    currentPage.appendChild(createFooter());
                    printableContainer.appendChild(currentPage);
                    pageCounter++;
                  }
                  currentPage = createPage();
                  currentHeight = 0;

                  // Ajout du logo uniquement sur la première page
                  if (pageCounter === 1 && _this9.logo) {
                    var logoImg = document.createElement("img");
                    logoImg.src = "/images/".concat(_this9.logo);
                    logoImg.width = 80;
                    logoImg.alt = "";
                    logoImg.style.marginBottom = "20px";
                    currentPage.appendChild(logoImg);
                  }
                }
                if (clone.classList.contains("to-span")) {
                  var innerHTML = clone.innerHTML;
                  clone = document.createElement("span");
                  clone.innerHTML = innerHTML;
                }
                currentPage.appendChild(clone);
                currentHeight += elementHeight;
              });

              // Dernière page
              if (currentPage) {
                paginationDiv = document.createElement("div");
                paginationDiv.textContent = "".concat(pageCounter);
                paginationDiv.style.position = "absolute";
                paginationDiv.style.bottom = "30px";
                paginationDiv.style.right = "35px";
                paginationDiv.style.fontSize = "15px";
                paginationDiv.style.color = "#666";
                currentPage.appendChild(paginationDiv);
                qrCode = _this9.generateQRCode(100);
                qrCode.style.position = "absolute";
                qrCode.style.right = "".concat(PADDING / 2, "px");
                qrCode.style.bottom = "".concat(FOOTER_HEIGHT - 50, "px");
                currentPage.appendChild(qrCode);
                currentPage.appendChild(createFooter());
                printableContainer.appendChild(currentPage);
              }
              document.querySelector("#preloader-content").textContent = "";
              document.querySelector("#preloader-content").remove();
              _this9.build_off = true;
            case 39:
            case "end":
              return _context4.stop();
          }
        }, _callee4);
      }))();
    },
    formatDate: function formatDate(date) {
      if (["", null, undefined].includes(date)) return "";
      var options = {
        year: "numeric",
        month: "numeric",
        day: "numeric"
      };
      return new Date(date).toLocaleDateString("fr", options);
    },
    // Méthode pour réinitialiser le compteur à un numéro d'article spécifique
    resetCounter: function resetCounter(articleNumber) {
      this.counters.section = articleNumber - 1; // -1 car l'incrément se fait avant affichage
      this.counters.subsection = 0;
    },
    // Méthode pour incrémenter les compteurs
    incrementCounter: function incrementCounter(level) {
      if (level === "section") {
        this.counters.section++;
        this.counters.subsection = 0; // Réinitialise le sous-compteur
      } else if (level === "subsection") {
        this.counters.subsection++;
      }
    },
    addMoreConvention: function addMoreConvention() {
      var id = this.conditions_data.length + 1;
      this.conditions_data.push({
        id: id,
        libelle: "",
        value: "",
        checked: false,
        disabled: false
      });
      this.handleInput2("conditions_data");
    },
    addMoreFacilite: function addMoreFacilite() {
      var id = this.conditions_data.length + 1;
      this.facilites.push({
        id: id,
        libelle: "",
        value: "",
        checked: false,
        disabled: false
      });
      this.handleInput2("facilites");
    },
    removeLine: function removeLine(index, key) {
      this[key].splice(index, 1);
      // this.handleInput2(key);
    },
    formDataVars2: function formDataVars2(event, index, key) {
      // console.log("LOGO")
      // this[objectName][index][keyName] = event[1];
      this[key][index][event[0]] = event[1];
      this.formData[key] = this[key];
    },
    getGarantiesLigne: function getGarantiesLigne(creditLineUuid) {
      var _this$data_tb,
        _this$data_tb2,
        _this0 = this;
      // Validate inputs
      if (!creditLineUuid || typeof creditLineUuid !== "string") {
        console.warn("Invalid or missing creditLineUuid");
        return [];
      }
      if (!((_this$data_tb = this.data_tb) !== null && _this$data_tb !== void 0 && _this$data_tb.garanties_proposees) || !Array.isArray(this.data_tb.garanties_proposees)) {
        console.warn("No valid garanties_proposees found");
        return [];
      }
      if (!((_this$data_tb2 = this.data_tb) !== null && _this$data_tb2 !== void 0 && _this$data_tb2.facilites_sollicitees) || !Array.isArray(this.data_tb.facilites_sollicitees)) {
        console.warn("No valid facilites_sollicitees found");
        return [];
      }

      // Find the facility for display purposes (optional)
      var facilite = this.data_tb.facilites_sollicitees.find(function (f) {
        return f.uuid === creditLineUuid;
      });
      var faciliteText = facilite ? facilite.type_facilite || "Ligne ".concat(this.data_tb.facilites_sollicitees.indexOf(facilite) + 1) : "Unknown Line: ".concat(creditLineUuid);

      // Filter guarantees associated with the given credit line UUID
      this.data_tb.garanties_proposees.forEach(function (garantie, index) {
        var ligne_associee = Array.isArray(garantie.ligne_associee) ? garantie.ligne_associee : [];
        if (ligne_associee.includes(creditLineUuid)) {
          // Add guarantee to details
          _this0.detail_garantie.push(_objectSpread({}, garantie));
        }
      });
      return this.detail_garantie;
    },
    getAgenceLocation: function getAgenceLocation() {
      var _this1 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
        var _this1$authcheckUsr, _yield$axios$post, data;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              _context5.prev = 0;
              _context5.next = 3;
              return axios.post("/api/Helpdatabase/get-agence-location", {
                codeagence: (_this1$authcheckUsr = _this1.authcheckUsr) === null || _this1$authcheckUsr === void 0 ? void 0 : _this1$authcheckUsr.codeagence
              });
            case 3:
              _yield$axios$post = _context5.sent;
              data = _yield$axios$post.data;
              _this1.formData.lieu_redation = data.data;
              _context5.next = 11;
              break;
            case 8:
              _context5.prev = 8;
              _context5.t0 = _context5["catch"](0);
              console.log("Something went wrong");
            case 11:
            case "end":
              return _context5.stop();
          }
        }, _callee5, null, [[0, 8]]);
      }))();
    },
    formatMontant: function formatMontant(montant) {
      var montantStr = String(montant).replace(/[^0-9.-]/g, "");
      if (!montantStr || isNaN(montantStr)) {
        return "0";
      }
      var nombre = parseFloat(montantStr);
      var parties = nombre.toString().split(".");
      var partieEntiere = parties[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
      return parties.length > 1 ? "".concat(partieEntiere, ".").concat(parties[1]) : partieEntiere;
    },
    convertNumber: function convertNumber(montant) {
      if (!montant) return "0";
      return Number(String(montant).replace(/\s+/g, ""));
    },
    isNumeroComplet: function isNumeroComplet(numero) {
      // Vérifier si le numéro est une chaîne non vide
      if (!numero || typeof numero !== "string") {
        return false;
      }

      // Supprimer les espaces multiples et normaliser
      var numeroTrim = numero.trim();

      // Vérifier si le numéro commence par un indicatif (ex: +223)
      var indicatifPattern = /^\+\d{1,4}(?:\s|$)/;
      if (!indicatifPattern.test(numeroTrim)) {
        return false;
      }

      // Séparer l'indicatif et le reste du numéro
      var parties = numeroTrim.split(/\s+/);

      // Vérifier qu'il y a une partie après l'indicatif et qu'elle contient des chiffres
      return parties.length > 1 && /^[0-9]+$/.test(parties[1]);
    },
    setBilletOrdre: function setBilletOrdre() {
      var _this$dossier_credit14,
        _this$facilite9,
        _this10 = this;
      if (((_this$dossier_credit14 = this.dossier_credit) === null || _this$dossier_credit14 === void 0 || (_this$dossier_credit14 = _this$dossier_credit14.cred_pub_tb_15502) === null || _this$dossier_credit14 === void 0 || (_this$dossier_credit14 = _this$dossier_credit14.conventions) === null || _this$dossier_credit14 === void 0 ? void 0 : _this$dossier_credit14.length) > 0 && (_this$facilite9 = this.facilite) !== null && _this$facilite9 !== void 0 && _this$facilite9.type_facilite) {
        var _this$dossier_credit$4;
        // console.log("this.dossier_credit?.cred_pub_tb_15502?.conventions?.length", this.dossier_credit?.cred_pub_tb_15502?.conventions?.length)
        // console.log("this.facilite.type_facilite", this.facilite.type_facilite)
        var index = this.dossier_credit.cred_pub_tb_15502.conventions.findIndex(function (convention) {
          return convention.type_facilite === _this10.facilite.type_facilite;
        });

        // console.log("index", index);

        if (((_this$dossier_credit$4 = this.dossier_credit.cred_pub_tb_15502) === null || _this$dossier_credit$4 === void 0 || (_this$dossier_credit$4 = _this$dossier_credit$4.billet_ordre) === null || _this$dossier_credit$4 === void 0 ? void 0 : _this$dossier_credit$4.length) > 0) {
          var _this$dossier_credit$5;
          if (index !== -1 && (_this$dossier_credit$5 = this.dossier_credit.cred_pub_tb_15502) !== null && _this$dossier_credit$5 !== void 0 && _this$dossier_credit$5.billet_ordre[index]) {
            this.billet_ordre = this.dossier_credit.cred_pub_tb_15502.billet_ordre[index];
          }
        }
      }
    },
    loadContentHtml: function loadContentHtml() {
      var _this$dossier_credit15, _this$dossier_credit16, _this$formData2, _this$formData3, _this$formData4, _this$formData5, _this$formData6, _this$formData7, _this$formData8, _this$formData9, _this$formData0, _this$formData1, _this$formData10, _this$formData11, _this$formData12, _this$formData13, _this$formData14, _this$formData15, _this$formData16, _this$formData17, _this$formData18, _this$formData19, _this$formData20, _this$formData21, _this$formData22, _this$facilite0, _this$facilite1, _this$facilite10, _this$facilite11, _this$dossier_credit17, _this$dossier_credit18, _this$dossier_credit19, _this$dossier_credit20, _this$dossier_credit21, _this$dossier_credit22, _this$formData23, _this$facilite12, _this$formData24, _this$formData25, _this$formData26, _this$formData27, _this$formData28, _this$formData29, _this$formData30, _this$formData31, _this$formData32, _this$formData33, _this$formData34, _this$formData35, _this$formData36, _this$formData37, _this$formData38, _this$formData39, _this$formData40, _this$formData41, _this$formData42, _this$formData43, _this$formData44, _this$formData45, _this$formData46, _this$formData47, _this$formData48, _this$formData49, _this$formData50, _this$formData51, _this$formData52, _this$formData53, _this$formData54, _this$formData55, _this$formData56, _this$formData57, _this$formData58, _this$formData59, _this$formData60, _this$formData61, _this$formData62, _this$formData63, _this$formData64, _this$formData65, _this$formData66, _this$formData67, _this$formData68, _this$formData69, _this$formData70, _this$formData71, _this$formData72, _this$formData73, _this$formData74, _this$formData75, _this$formData76, _this$formData77, _this$formData78, _this$formData79, _this$formData80, _this$formData81, _this$formData82, _this$formData83, _this$formData84, _this$formData85, _this$formData86, _this$formData87, _this$formData88, _this$formData89, _this$formData90, _this$formData91, _this$formData92, _this$formData93, _this$formData94, _this$formData95, _this$formData96, _this$formData97, _this$formData98, _this$formData99, _this$formData100, _this$formData101, _this$formData102, _this$formData103, _this$formData104, _this$formData105, _this$formData106, _this$formData107, _this$formData108, _this$formData109, _this$formData110, _this$formData111, _this$formData112, _this$formData113, _this$formData114, _this$formData115, _this$formData116, _this$formData117, _this$formData118, _this$formData119, _this$formData120, _this$formData121, _this$formData122, _this$formData123, _this$formData124, _this$formData125, _this$formData126, _this$formData127, _this$formData128, _this$formData129, _this$formData130, _this$formData131, _this$formData132, _this$formData133, _injectPlaceholders;
      var remove_highlight = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var iframe = this.$refs.monIframe;
      function injectPlaceholders(template, data) {
        return template.replace(/{{\s*(\w+)\s*}}/g, function (match, key) {
          return key in data ? data[key] : match;
        });
      }
      //   console.log("this.formData", this.formData);
      //   console.log("this.billet_ordre", this.billet_ordre);
      var cashcollAmount = this.formatMontant((_this$dossier_credit15 = this.dossier_credit) === null || _this$dossier_credit15 === void 0 || (_this$dossier_credit15 = _this$dossier_credit15.cred_pub_tb_120004) === null || _this$dossier_credit15 === void 0 || (_this$dossier_credit15 = _this$dossier_credit15.facilites_selectionnees[this.facilite_index.index]) === null || _this$dossier_credit15 === void 0 ? void 0 : _this$dossier_credit15.cash_call_amount);
      var cashcollAcount = (_this$dossier_credit16 = this.dossier_credit) === null || _this$dossier_credit16 === void 0 || (_this$dossier_credit16 = _this$dossier_credit16.cred_pub_tb_120004) === null || _this$dossier_credit16 === void 0 || (_this$dossier_credit16 = _this$dossier_credit16.facilites_selectionnees[this.facilite_index.index]) === null || _this$dossier_credit16 === void 0 ? void 0 : _this$dossier_credit16.compte_cash_coll;
      // Remplacement des placeholders personnalisés
      var htmlModifié = injectPlaceholders(_raw_loader_html_afg_fr_convention_pret_html__WEBPACK_IMPORTED_MODULE_6__["default"], (_injectPlaceholders = {
        "banque": ((_this$formData2 = this.formData) === null || _this$formData2 === void 0 ? void 0 : _this$formData2.banque) || ".....",
        "abreviation": ((_this$formData3 = this.formData) === null || _this$formData3 === void 0 ? void 0 : _this$formData3.abreviation) || ".....",
        "capital_social": ((_this$formData4 = this.formData) === null || _this$formData4 === void 0 ? void 0 : _this$formData4.capital_social) || ".....",
        "devise": ((_this$formData5 = this.formData) === null || _this$formData5 === void 0 ? void 0 : _this$formData5.devise) || ".....",
        "siege": ((_this$formData6 = this.formData) === null || _this$formData6 === void 0 ? void 0 : _this$formData6.siege) || ".....",
        "boite_postale": ((_this$formData7 = this.formData) === null || _this$formData7 === void 0 ? void 0 : _this$formData7.boite_postale) || ".....",
        "lieu_immatriculation": ((_this$formData8 = this.formData) === null || _this$formData8 === void 0 ? void 0 : _this$formData8.lieu_immatriculation) || ".....",
        "date_immatriculation": ((_this$formData9 = this.formData) === null || _this$formData9 === void 0 ? void 0 : _this$formData9.date_immatriculation) || ".....",
        "immatriculation": ((_this$formData0 = this.formData) === null || _this$formData0 === void 0 ? void 0 : _this$formData0.immatriculation) || ".....",
        "titre_client": ((_this$formData1 = this.formData) === null || _this$formData1 === void 0 ? void 0 : _this$formData1.titre_client) || ".....",
        "nom_client": ((_this$formData10 = this.formData) === null || _this$formData10 === void 0 ? void 0 : _this$formData10.nom_client) || ".....",
        "date_naissance": this.formatDate(this.formData.date_naissance) || ".....",
        "lieu_naissance": ((_this$formData11 = this.formData) === null || _this$formData11 === void 0 ? void 0 : _this$formData11.lieu_naissance) || ".....",
        "nom_du_pere": ((_this$formData12 = this.formData) === null || _this$formData12 === void 0 ? void 0 : _this$formData12.nom_du_pere) || ".....",
        "nom_de_la_mere": ((_this$formData13 = this.formData) === null || _this$formData13 === void 0 ? void 0 : _this$formData13.nom_de_la_mere) || ".....",
        "adresse": ((_this$formData14 = this.formData) === null || _this$formData14 === void 0 ? void 0 : _this$formData14.adresse) || ".....",
        "boite_postale_client": ((_this$formData15 = this.formData) === null || _this$formData15 === void 0 ? void 0 : _this$formData15.boite_postale_client) || ".....",
        "telephone": ((_this$formData16 = this.formData) === null || _this$formData16 === void 0 ? void 0 : _this$formData16.telephone) || ".....",
        "email": ((_this$formData17 = this.formData) === null || _this$formData17 === void 0 ? void 0 : _this$formData17.email) || ".....",
        "fonction": ((_this$formData18 = this.formData) === null || _this$formData18 === void 0 ? void 0 : _this$formData18.fonction) || ".....",
        "employeur": ((_this$formData19 = this.formData) === null || _this$formData19 === void 0 ? void 0 : _this$formData19.employeur) || ".....",
        "titre_identification": ((_this$formData20 = this.formData) === null || _this$formData20 === void 0 ? void 0 : _this$formData20.titre_identification) || ".....",
        "num_identification": ((_this$formData21 = this.formData) === null || _this$formData21 === void 0 ? void 0 : _this$formData21.num_identification) || ".....",
        "date_delivrance": this.formatDate(this.formData.date_delivrance) || ".....",
        "lieu_delivrance": ((_this$formData22 = this.formData) === null || _this$formData22 === void 0 ? void 0 : _this$formData22.lieu_delivrance) || ".....",
        "montant_credit": this.formatMontant(this.formData.montant_credit) || ".....",
        "montant_credit_lettre": this.convertirEnLettres(this.formatMontant(this.formData.montant_credit)) || ".....",
        "financement": ((_this$facilite0 = this.facilite) === null || _this$facilite0 === void 0 ? void 0 : _this$facilite0.facilite_libelle) || ".....",
        "objet": ((_this$facilite1 = this.facilite) === null || _this$facilite1 === void 0 ? void 0 : _this$facilite1.type_facilite) || ".....",
        "duree": ((_this$facilite10 = this.facilite) === null || _this$facilite10 === void 0 ? void 0 : _this$facilite10.duree) || ".....",
        "taux": ((_this$facilite11 = this.facilite) === null || _this$facilite11 === void 0 ? void 0 : _this$facilite11.taux) || ".....",
        "frais": this.formatMontant((_this$dossier_credit17 = this.dossier_credit) === null || _this$dossier_credit17 === void 0 || (_this$dossier_credit17 = _this$dossier_credit17.cred_pub_tb_120004) === null || _this$dossier_credit17 === void 0 || (_this$dossier_credit17 = _this$dossier_credit17.facilites_selectionnees[this.facilite_index.index]) === null || _this$dossier_credit17 === void 0 ? void 0 : _this$dossier_credit17.frais_dossier) || ".....",
        "cashcoll": this.cashcollAmount || ".....",
        "numero_compte_cashcoll": this.cashcollAcount || ".....",
        "cashcoll_lettres": this.convertirEnLettres(this.cashcollAmount) || ".....",
        "pourcentage_cashcoll": this.formatMontant((_this$dossier_credit18 = this.dossier_credit) === null || _this$dossier_credit18 === void 0 || (_this$dossier_credit18 = _this$dossier_credit18.cred_pub_tb_120004) === null || _this$dossier_credit18 === void 0 || (_this$dossier_credit18 = _this$dossier_credit18.facilites_selectionnees[this.facilite_index.index]) === null || _this$dossier_credit18 === void 0 ? void 0 : _this$dossier_credit18.cash_call_percent) || ".....",
        "prime": ((_this$dossier_credit19 = this.dossier_credit) === null || _this$dossier_credit19 === void 0 || (_this$dossier_credit19 = _this$dossier_credit19.cred_pub_tb_120004) === null || _this$dossier_credit19 === void 0 || (_this$dossier_credit19 = _this$dossier_credit19.facilites_selectionnees[this.facilite_index.index]) === null || _this$dossier_credit19 === void 0 ? void 0 : _this$dossier_credit19.montant_assurance) || ".....",
        "teg": ((_this$dossier_credit20 = this.dossier_credit) === null || _this$dossier_credit20 === void 0 || (_this$dossier_credit20 = _this$dossier_credit20.cred_pub_tb_120004) === null || _this$dossier_credit20 === void 0 || (_this$dossier_credit20 = _this$dossier_credit20.facilites_selectionnees[this.facilite_index.index]) === null || _this$dossier_credit20 === void 0 ? void 0 : _this$dossier_credit20.TEG) || ".....",
        "tegperiodique": ((_this$dossier_credit21 = this.dossier_credit) === null || _this$dossier_credit21 === void 0 || (_this$dossier_credit21 = _this$dossier_credit21.cred_pub_tb_120004) === null || _this$dossier_credit21 === void 0 || (_this$dossier_credit21 = _this$dossier_credit21.facilites_selectionnees[this.facilite_index.index]) === null || _this$dossier_credit21 === void 0 ? void 0 : _this$dossier_credit21.taux_periodique) || ".....",
        "tauxusure": ((_this$dossier_credit22 = this.dossier_credit) === null || _this$dossier_credit22 === void 0 || (_this$dossier_credit22 = _this$dossier_credit22.cred_pub_tb_120004) === null || _this$dossier_credit22 === void 0 || (_this$dossier_credit22 = _this$dossier_credit22.facilites_selectionnees[this.facilite_index.index]) === null || _this$dossier_credit22 === void 0 ? void 0 : _this$dossier_credit22.taux_usure) || ".....",
        "numero_de_compte": ((_this$formData23 = this.formData) === null || _this$formData23 === void 0 ? void 0 : _this$formData23.numero_de_compte) || ".....",
        "duree_lettre": this.nombreEnLettres((_this$facilite12 = this.facilite) === null || _this$facilite12 === void 0 ? void 0 : _this$facilite12.duree) || ".....",
        "echeancier": ((_this$formData24 = this.formData) === null || _this$formData24 === void 0 ? void 0 : _this$formData24.echeancier) || ".....",
        "montant_echeance": ((_this$formData25 = this.formData) === null || _this$formData25 === void 0 ? void 0 : _this$formData25.modalite_remboursement_chiffre) || ".....",
        "montant_echeance_lettre": this.convertirEnLettres(this.formData.modalite_remboursement_chiffre) || ".....",
        "siege_filiale": this.siege_filiale || "....."
      }, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_injectPlaceholders, "boite_postale", ((_this$formData26 = this.formData) === null || _this$formData26 === void 0 ? void 0 : _this$formData26.boite_postale) || "....."), "numero_filiale", this.numero_filiale || "....."), "agrement", ((_this$formData27 = this.formData) === null || _this$formData27 === void 0 ? void 0 : _this$formData27.agrement) || "....."), "siteweb", ((_this$formData28 = this.formData) === null || _this$formData28 === void 0 ? void 0 : _this$formData28.siteweb) || "....."), "billett_ordre_mt", this.formatMontant(this.formData.montant_credit) || "....."), "billett_ordre_mt_lettres", this.convertirEnLettres(this.formatMontant(this.formData.montant_credit)) || "....."), "rib", ((_this$formData29 = this.formData) === null || _this$formData29 === void 0 ? void 0 : _this$formData29.cle_rib) || "....."), "lieu_redaction", ((_this$formData30 = this.formData) === null || _this$formData30 === void 0 ? void 0 : _this$formData30.lieu_redation) || "....."), "date_redaction", ((_this$formData31 = this.formData) === null || _this$formData31 === void 0 ? void 0 : _this$formData31.date_redaction) || "....."), "boite_postale_employeur", ((_this$formData32 = this.formData) === null || _this$formData32 === void 0 ? void 0 : _this$formData32.boite_postale_employeur) || "....."), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_injectPlaceholders, "logo", this.logo || "....."), "statut_juridique", (_this$formData33 = this.formData) === null || _this$formData33 === void 0 ? void 0 : _this$formData33.statut_juridique), "nombre_echeances", ((_this$formData34 = this.formData) === null || _this$formData34 === void 0 ? void 0 : _this$formData34.nombre_echeance) || "....."), "nombre_echeances_lettre", ((_this$formData35 = this.formData) === null || _this$formData35 === void 0 ? void 0 : _this$formData35.nombre_jour_remboursement_lettre) || "....."), "nom_caution", this.is_applicable.cautionnement && (_this$formData36 = this.formData) !== null && _this$formData36 !== void 0 && _this$formData36.nom_caution ? (_this$formData37 = this.formData) === null || _this$formData37 === void 0 ? void 0 : _this$formData37.nom_caution : "....."), "date_naissance_caution", this.is_applicable.cautionnement && (_this$formData38 = this.formData) !== null && _this$formData38 !== void 0 && _this$formData38.date_de_naissance_caution ? (_this$formData39 = this.formData) === null || _this$formData39 === void 0 ? void 0 : _this$formData39.date_de_naissance_caution : "....."), "lieu_naissance_caution", this.is_applicable.cautionnement && (_this$formData40 = this.formData) !== null && _this$formData40 !== void 0 && _this$formData40.lieu_naissance_caution ? (_this$formData41 = this.formData) === null || _this$formData41 === void 0 ? void 0 : _this$formData41.lieu_naissance_caution : "....."), "nom_pere_caution", this.is_applicable.cautionnement && (_this$formData42 = this.formData) !== null && _this$formData42 !== void 0 && _this$formData42.nom_du_pere_caution ? (_this$formData43 = this.formData) === null || _this$formData43 === void 0 ? void 0 : _this$formData43.nom_du_pere_caution : "....."), "nom_mere_caution", this.is_applicable.cautionnement && (_this$formData44 = this.formData) !== null && _this$formData44 !== void 0 && _this$formData44.nom_de_la_mere_caution ? (_this$formData45 = this.formData) === null || _this$formData45 === void 0 ? void 0 : _this$formData45.nom_de_la_mere_caution : "....."), "adresse_caution", this.is_applicable.cautionnement && (_this$formData46 = this.formData) !== null && _this$formData46 !== void 0 && _this$formData46.adresse_de_la_caution ? (_this$formData47 = this.formData) === null || _this$formData47 === void 0 ? void 0 : _this$formData47.adresse_de_la_caution : "....."), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_injectPlaceholders, "type_piece_identite_caution", this.is_applicable.cautionnement && (_this$formData48 = this.formData) !== null && _this$formData48 !== void 0 && _this$formData48.type_piece_identite_caution ? (_this$formData49 = this.formData) === null || _this$formData49 === void 0 ? void 0 : _this$formData49.type_piece_identite_caution : "....."), "num_piece_identite_caution", this.is_applicable.cautionnement && (_this$formData50 = this.formData) !== null && _this$formData50 !== void 0 && _this$formData50.num_piece_identite_caution ? (_this$formData51 = this.formData) === null || _this$formData51 === void 0 ? void 0 : _this$formData51.num_piece_identite_caution : "....."), "date_delivrance_piece_identite_caution", this.is_applicable.cautionnement && (_this$formData52 = this.formData) !== null && _this$formData52 !== void 0 && _this$formData52.date_delivrance_piece_identite_caution ? (_this$formData53 = this.formData) === null || _this$formData53 === void 0 ? void 0 : _this$formData53.date_delivrance_piece_identite_caution : "....."), "telephone_caution", this.is_applicable.cautionnement && (_this$formData54 = this.formData) !== null && _this$formData54 !== void 0 && _this$formData54.telephone_caution ? (_this$formData55 = this.formData) === null || _this$formData55 === void 0 ? void 0 : _this$formData55.telephone_caution : "....."), "employeur_caution", this.is_applicable.cautionnement && (_this$formData56 = this.formData) !== null && _this$formData56 !== void 0 && _this$formData56.employeur_caution ? (_this$formData57 = this.formData) === null || _this$formData57 === void 0 ? void 0 : _this$formData57.employeur_caution : "....."), "fonction_caution", this.is_applicable.cautionnement && (_this$formData58 = this.formData) !== null && _this$formData58 !== void 0 && _this$formData58.fonction ? (_this$formData59 = this.formData) === null || _this$formData59 === void 0 ? void 0 : _this$formData59.fonction : "....."), "lieu_delivrance_piece_identite_caution", this.is_applicable.cautionnement && (_this$formData60 = this.formData) !== null && _this$formData60 !== void 0 && _this$formData60.lieu_delivrance_piece_identite_caution ? (_this$formData61 = this.formData) === null || _this$formData61 === void 0 ? void 0 : _this$formData61.lieu_delivrance_piece_identite_caution : "....."), "civilite_caution", this.is_applicable.cautionnement && (_this$formData62 = this.formData) !== null && _this$formData62 !== void 0 && _this$formData62.civilite_caution ? (_this$formData63 = this.formData) === null || _this$formData63 === void 0 ? void 0 : _this$formData63.civilite_caution : "....."), "email_caution", this.is_applicable.cautionnement && (_this$formData64 = this.formData) !== null && _this$formData64 !== void 0 && _this$formData64.email_caution ? (_this$formData65 = this.formData) === null || _this$formData65 === void 0 ? void 0 : _this$formData65.email_caution : "....."), "bp_caution", this.is_applicable.cautionnement && (_this$formData66 = this.formData) !== null && _this$formData66 !== void 0 && _this$formData66.boite_postale_caution ? (_this$formData67 = this.formData) === null || _this$formData67 === void 0 ? void 0 : _this$formData67.boite_postale_caution : "....."), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_injectPlaceholders, "bp_employeur_caution", this.is_applicable.cautionnement && (_this$formData68 = this.formData) !== null && _this$formData68 !== void 0 && _this$formData68.boite_postale_employeur_caution ? (_this$formData69 = this.formData) === null || _this$formData69 === void 0 ? void 0 : _this$formData69.boite_postale_employeur_caution : "....."), "montant_caution", this.is_applicable.cautionnement && (_this$formData70 = this.formData) !== null && _this$formData70 !== void 0 && _this$formData70.montant_caution ? (_this$formData71 = this.formData) === null || _this$formData71 === void 0 ? void 0 : _this$formData71.montant_caution : "....."), "numero_compte_caution", this.is_applicable.cautionnement && (_this$formData72 = this.formData) !== null && _this$formData72 !== void 0 && _this$formData72.numero_de_compte ? (_this$formData73 = this.formData) === null || _this$formData73 === void 0 ? void 0 : _this$formData73.numero_de_compte : "....."), "montant_caution_lettres", this.is_applicable.cautionnement && !["0", 0, null, undefined].includes(this.formData.montant_caution) ? this.convertirEnLettres(this.formData.montant_caution) : "....."), "nom_cedant", this.is_applicable.cash_collateral && (_this$formData74 = this.formData) !== null && _this$formData74 !== void 0 && _this$formData74.nom_client ? ((_this$formData75 = this.formData) === null || _this$formData75 === void 0 ? void 0 : _this$formData75.nom_client) || "....." : "....."), "date_naissance_cedant", this.is_applicable.cash_collateral && this.formData.date_naissance ? this.formatDate(this.formData.date_naissance) || "....." : "....."), "lieu_naissance_cedant", this.is_applicable.cash_collateral && (_this$formData76 = this.formData) !== null && _this$formData76 !== void 0 && _this$formData76.lieu_naissance ? ((_this$formData77 = this.formData) === null || _this$formData77 === void 0 ? void 0 : _this$formData77.lieu_naissance) || "....." : "....."), "nom_du_pere_cedant", this.is_applicable.cash_collateral && (_this$formData78 = this.formData) !== null && _this$formData78 !== void 0 && _this$formData78.nom_du_pere ? ((_this$formData79 = this.formData) === null || _this$formData79 === void 0 ? void 0 : _this$formData79.nom_du_pere) || "....." : "....."), "nom_de_la_mere_cedant", this.is_applicable.cash_collateral && (_this$formData80 = this.formData) !== null && _this$formData80 !== void 0 && _this$formData80.nom_de_la_mere ? ((_this$formData81 = this.formData) === null || _this$formData81 === void 0 ? void 0 : _this$formData81.nom_de_la_mere) || "....." : "....."), "adresse_cedant", this.is_applicable.cash_collateral && (_this$formData82 = this.formData) !== null && _this$formData82 !== void 0 && _this$formData82.adresse ? ((_this$formData83 = this.formData) === null || _this$formData83 === void 0 ? void 0 : _this$formData83.adresse) || "....." : "....."), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_injectPlaceholders, "boite_postale_cedant", this.is_applicable.cash_collateral && (_this$formData84 = this.formData) !== null && _this$formData84 !== void 0 && _this$formData84.boite_postale_client ? ((_this$formData85 = this.formData) === null || _this$formData85 === void 0 ? void 0 : _this$formData85.boite_postale_client) || "....." : "....."), "telephone_cedant", this.is_applicable.cash_collateral && (_this$formData86 = this.formData) !== null && _this$formData86 !== void 0 && _this$formData86.telephone ? ((_this$formData87 = this.formData) === null || _this$formData87 === void 0 ? void 0 : _this$formData87.telephone) || "....." : "....."), "email_cedant", this.is_applicable.cash_collateral && (_this$formData88 = this.formData) !== null && _this$formData88 !== void 0 && _this$formData88.email ? ((_this$formData89 = this.formData) === null || _this$formData89 === void 0 ? void 0 : _this$formData89.email) || "....." : "....."), "fonction_cedant", this.is_applicable.cash_collateral && (_this$formData90 = this.formData) !== null && _this$formData90 !== void 0 && _this$formData90.fonction ? ((_this$formData91 = this.formData) === null || _this$formData91 === void 0 ? void 0 : _this$formData91.fonction) || "....." : "....."), "employeur_cedant", this.is_applicable.cash_collateral && (_this$formData92 = this.formData) !== null && _this$formData92 !== void 0 && _this$formData92.employeur ? ((_this$formData93 = this.formData) === null || _this$formData93 === void 0 ? void 0 : _this$formData93.employeur) || "....." : "....."), "titre_identification_cedant", this.is_applicable.cash_collateral && (_this$formData94 = this.formData) !== null && _this$formData94 !== void 0 && _this$formData94.titre_identification ? ((_this$formData95 = this.formData) === null || _this$formData95 === void 0 ? void 0 : _this$formData95.titre_identification) || "....." : "....."), "num_identification_cedant", this.is_applicable.cash_collateral && (_this$formData96 = this.formData) !== null && _this$formData96 !== void 0 && _this$formData96.num_identification ? ((_this$formData97 = this.formData) === null || _this$formData97 === void 0 ? void 0 : _this$formData97.num_identification) || "....." : "....."), "date_delivrance_cedant", this.is_applicable.cash_collateral && this.formData.date_delivrance ? this.formatDate(this.formData.date_delivrance) || "....." : "....."), "lieu_delivrance_cedant", this.is_applicable.cash_collateral && (_this$formData98 = this.formData) !== null && _this$formData98 !== void 0 && _this$formData98.lieu_delivrance ? ((_this$formData99 = this.formData) === null || _this$formData99 === void 0 ? void 0 : _this$formData99.lieu_delivrance) || "....." : "....."), "boite_postale_employeur_cedant", this.is_applicable.cash_collateral && (_this$formData100 = this.formData) !== null && _this$formData100 !== void 0 && _this$formData100.boite_postale_employeur ? ((_this$formData101 = this.formData) === null || _this$formData101 === void 0 ? void 0 : _this$formData101.boite_postale_employeur) || "....." : "....."), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_injectPlaceholders, "nom_constituant", this.is_applicable.nantissement && (_this$formData102 = this.formData) !== null && _this$formData102 !== void 0 && _this$formData102.nom_constituant ? (_this$formData103 = this.formData) === null || _this$formData103 === void 0 ? void 0 : _this$formData103.nom_constituant : "....."), "date_naissance_constituant", this.is_applicable.nantissement && this.formData.date_naissance_constituant ? this.formData.date_naissance_constituant : "....."), "lieu_naissance_constituant", this.is_applicable.nantissement && this.formData.lieu_naissance_constituant ? this.formData.lieu_naissance_constituant : "....."), "nom_pere_constituant", this.is_applicable.nantissement && this.formData.nom_pere_constituant ? this.formData.nom_pere_constituant : "....."), "nom_mere_constituant", this.is_applicable.nantissement && this.formData.nom_mere_constituant ? this.formData.nom_mere_constituant : "....."), "adresse_constituant", this.is_applicable.nantissement && this.formData.adresse_constituant ? this.formData.adresse_constituant : "....."), "type_piece_identite_constituant", this.is_applicable.nantissement && this.formData.type_piece_identite_constituant ? this.formData.type_piece_identite_constituant : "....."), "num_piece_identite_constituant", this.is_applicable.nantissement && this.formData.num_piece_identite_constituant ? this.formData.num_piece_identite_constituant : "....."), "telephone_constituant", this.is_applicable.nantissement && this.formData.telephone_constituant ? this.formData.telephone_constituant : "....."), "email_constituant", this.is_applicable.nantissement && this.formData.email_constituant ? this.formData.email_constituant : "....."), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_injectPlaceholders, "boite_postale_constituant", this.is_applicable.nantissement && this.formData.boite_postale_constituant ? this.formData.boite_postale_constituant : "....."), "date_delivrance_piece_identite_constituant", this.is_applicable.nantissement && this.formData.date_delivrance_piece_identite_constituant ? this.formData.date_delivrance_piece_identite_constituant : "....."), "lieu_delivrance_piece_identite_constituant", this.is_applicable.nantissement && this.formData.lieu_delivrance_piece_identite_constituant ? this.formData.lieu_delivrance_piece_identite_constituant : "....."), "avoirs_investissements", this.formData.avoirs_investissements || "....."), "employeur_constituant", this.is_applicable.nantissement && this.formData.employeur_constituant ? this.formData.employeur_constituant : "....."), "fonction_constituant", this.is_applicable.nantissement && this.formData.fonction_constituant ? this.formData.fonction_constituant : "....."), "civilite_constituant", this.is_applicable.nantissement && this.formData.civilite_constituant ? this.formData.civilite_constituant : "....."), "boite_postale_employeur_constituant", this.formData.boite_postale_employeur_constituant || "....."), "numero_compte_nanti", this.is_applicable.nantissement_compte_epargne && this.formData.numero_compte_nanti ? this.formData.numero_compte_nanti : "....."), "montant_nantissement_epargne", this.is_applicable.nantissement_compte_epargne && this.formData.montant_nantissement_epargne ? this.formData.montant_nantissement_epargne : "....."), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_injectPlaceholders, "numero_bon_de_caisse", this.is_applicable.nantissement_bon_de_caisse && (_this$formData104 = this.formData) !== null && _this$formData104 !== void 0 && _this$formData104.numero_bon_de_caisse ? (_this$formData105 = this.formData) === null || _this$formData105 === void 0 ? void 0 : _this$formData105.numero_bon_de_caisse : "....."), "date_souscription", this.is_applicable.nantissement_bon_de_caisse && (_this$formData106 = this.formData) !== null && _this$formData106 !== void 0 && _this$formData106.date_souscription ? (_this$formData107 = this.formData) === null || _this$formData107 === void 0 ? void 0 : _this$formData107.date_souscription : "....."), "date_echeance_bon", this.is_applicable.nantissement_bon_de_caisse && (_this$formData108 = this.formData) !== null && _this$formData108 !== void 0 && _this$formData108.date_echeance ? (_this$formData109 = this.formData) === null || _this$formData109 === void 0 ? void 0 : _this$formData109.date_echeance : "....."), "montant_bon_caisse_nanti", this.is_applicable.nantissement_bon_de_caisse && (_this$formData110 = this.formData) !== null && _this$formData110 !== void 0 && _this$formData110.montant_bon_caisse_nanti ? (_this$formData111 = this.formData) === null || _this$formData111 === void 0 ? void 0 : _this$formData111.montant_bon_caisse_nanti : "....."), "montant_bon_caisse_nanti_lettre", this.is_applicable.nantissement_bon_de_caisse && this.formData.montant_bon_caisse_nanti ? this.convertirEnLettres(this.formData.montant_bon_caisse_nanti) : "....."), "souscripteur_bon", this.is_applicable.nantissement_bon_de_caisse && (_this$formData112 = this.formData) !== null && _this$formData112 !== void 0 && _this$formData112.souscripteur ? (_this$formData113 = this.formData) === null || _this$formData113 === void 0 ? void 0 : _this$formData113.souscripteur : "....."), "etablissement_depositaire", this.is_applicable.nantissement_bon_de_caisse && (_this$formData114 = this.formData) !== null && _this$formData114 !== void 0 && _this$formData114.etablissement_depositaire ? (_this$formData115 = this.formData) === null || _this$formData115 === void 0 ? void 0 : _this$formData115.etablissement_depositaire : "....."), "compte_affectation_bon", this.is_applicable.nantissement_bon_de_caisse && (_this$formData116 = this.formData) !== null && _this$formData116 !== void 0 && _this$formData116.compte_affectation ? (_this$formData117 = this.formData) === null || _this$formData117 === void 0 ? void 0 : _this$formData117.compte_affectation : "....."), "beneficiaire_bon", this.is_applicable.nantissement_bon_de_caisse && (_this$formData118 = this.formData) !== null && _this$formData118 !== void 0 && _this$formData118.beneficiaire ? (_this$formData119 = this.formData) === null || _this$formData119 === void 0 ? void 0 : _this$formData119.beneficiaire : "....."), "lieu_souscription_bon", this.is_applicable.nantissement_bon_de_caisse && (_this$formData120 = this.formData) !== null && _this$formData120 !== void 0 && _this$formData120.lieu_souscription ? (_this$formData121 = this.formData) === null || _this$formData121 === void 0 ? void 0 : _this$formData121.lieu_souscription : "....."), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_injectPlaceholders, "lieu_paiement_bon", this.is_applicable.nantissement_bon_de_caisse && (_this$formData122 = this.formData) !== null && _this$formData122 !== void 0 && _this$formData122.lieu_paiement ? (_this$formData123 = this.formData) === null || _this$formData123 === void 0 ? void 0 : _this$formData123.lieu_paiement : "....."), "date_octroi_credit", this.is_applicable.nantissement_bon_de_caisse && (_this$formData124 = this.formData) !== null && _this$formData124 !== void 0 && _this$formData124.date_octroit ? (_this$formData125 = this.formData) === null || _this$formData125 === void 0 ? void 0 : _this$formData125.date_octroit : "....."), "montant_global_bon_caisse", this.is_applicable.nantissement_bon_de_caisse && (_this$formData126 = this.formData) !== null && _this$formData126 !== void 0 && _this$formData126.montant_credit ? (_this$formData127 = this.formData) === null || _this$formData127 === void 0 ? void 0 : _this$formData127.montant_credit : "....."), "code_type_financement", (_this$formData128 = this.formData) !== null && _this$formData128 !== void 0 && _this$formData128.code_type_financement ? (_this$formData129 = this.formData) === null || _this$formData129 === void 0 ? void 0 : _this$formData129.code_type_financement : "....."), "type_financement", (_this$formData130 = this.formData) !== null && _this$formData130 !== void 0 && _this$formData130.type_financement ? (_this$formData131 = this.formData) === null || _this$formData131 === void 0 ? void 0 : _this$formData131.type_financement : "....."), "selected_garanties", (_this$formData132 = this.formData) !== null && _this$formData132 !== void 0 && _this$formData132.selected_garanties ? (_this$formData133 = this.formData) === null || _this$formData133 === void 0 ? void 0 : _this$formData133.selected_garanties : "....."), "is_nantissement_compte_epargne_applicable", this.formData.is_nantissement_compte_epargne_applicable), "is_nantissement_bon_de_caisse_applicable", this.formData.is_nantissement_bon_de_caisse_applicable), "is_cash_collateral_applicable", this.formData.is_cash_collateral_applicable), "is_cautionnement_applicable", this.formData.is_cautionnement_applicable), _defineProperty(_injectPlaceholders, "is_nantissement_applicable", this.formData.is_nantissement_applicable)));

      // Créer un vrai document HTML autour du contenu
      var page = "".concat(htmlModifié);
      if (remove_highlight) page = page.replaceAll('title-background', '');

      // Injecter le contenu dans l’iframe
      var doc = iframe.contentWindow.document;
      doc.open();
      doc.write(page);
      doc.close();
    }
  },
  watch: {
    formData: {
      handler: function handler(newVal) {
        var _this11 = this;
        if (!this.first_time) {
          clearTimeout(this.debounce);
          this.debounce = setTimeout(function () {
            _this11.send2Backend(newVal);
          }, 3000);
        } else {
          this.first_time = false;
        }
      },
      deep: true,
      immediate: true
    },
    "dossier_credit.cred_pub_tb_15502.billet_ordre": {
      handler: function handler() {
        this.setBilletOrdre();
      },
      deep: true,
      immediate: true
    },
    load_data: {
      handler: function handler(newVal) {
        var _this12 = this;
        if (!newVal) {
          this.$nextTick(function () {
            _this12.loadContentHtml();
          });
        }
      },
      deep: true,
      immediate: true
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/conventions/fr/CONVENTION_CREDIT_AMORTISSAGE_NEW.vue?vue&type=template&id=359faca9&scoped=true":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/conventions/fr/CONVENTION_CREDIT_AMORTISSAGE_NEW.vue?vue&type=template&id=359faca9&scoped=true ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_vm.load_data ? _c("div", {
    staticClass: "card-body"
  }, [_vm._m(0)]) : _c("div", [_c("div", {
    staticClass: "position-absolute delete-element",
    staticStyle: {
      top: "10px",
      right: "0",
      "margin-right": "48px"
    }
  }, [_c("button", {
    staticClass: "btn btn-sm m-1 btn",
    staticStyle: {
      background: "rgb(238, 106, 0)",
      color: "white",
      "box-shadow": "rgba(12, 11, 11, 0.39) 0px 0px 2px 1px"
    },
    on: {
      click: _vm.closeEditMode
    }
  }, [!_vm.remove_highlight ? _c("span", [_c("i", {
    staticClass: "icofont-eye",
    attrs: {
      title: "Visualiser la convention"
    }
  }), _vm._v("\n                    Visualiser\n                ")]) : _c("span", [_c("i", {
    staticClass: "icofont-eye-close",
    attrs: {
      title: "Afficher la surbrillance"
    }
  }), _vm._v("\n                    Afficher la surbrillance\n                ")])]), _vm._v(" "), !_vm.pdf_process ? [_c("button", {
    staticClass: "btn btn-sm m-1 btn mx-2",
    staticStyle: {
      background: "#27ae60",
      color: "white",
      "box-shadow": "rgba(12, 11, 11, 0.39) 0px 0px 2px 1px"
    },
    on: {
      click: function click($event) {
        return _vm.exportToPDF(false);
      }
    }
  }, [_c("i", {
    staticClass: "icofont-upload-alt",
    attrs: {
      title: "Importer dans le dossier"
    }
  }), _vm._v("\n                    Importer dans le dossier\n                ")]), _vm._v(" "), _c("button", {
    staticClass: "btn btn-sm m-1 btn mx-2",
    staticStyle: {
      background: "#2c3e50",
      color: "white",
      "box-shadow": "rgba(12, 11, 11, 0.39) 0px 0px 2px 1px"
    },
    on: {
      click: function click($event) {
        return _vm.exportToPDF(true);
      }
    }
  }, [_c("i", {
    staticClass: "icofont-download",
    attrs: {
      title: "Télécharger le fichier"
    }
  }), _vm._v("\n                    Télécharger le fichier\n                ")])] : _c("div", {
    staticStyle: {
      display: "inline-block"
    }
  }, [_vm._m(1), _vm._v(" "), _c("span", {
    staticStyle: {
      "font-size": "0.9rem",
      "margin-left": "5px"
    }
  }, [_vm._v("\n                Génération du PDF en cours...\n            ")])])], 2), _vm._v(" "), _c("iframe", {
    ref: "monIframe",
    staticStyle: {
      width: "100%",
      height: "80vh"
    }
  })])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "d-flex justify-content-center text-center align-items-center text-muted py-4"
  }, [_c("div", [_c("span", {
    staticClass: "spinner-border spinner-border"
  }), _vm._v(" "), _c("h5", [_vm._v("\n                    Chargement des données en cours ... "), _c("br"), _vm._v("\n                    Ceci peut prendre un peu de temps\n                ")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "spinner-border text-secondary",
    staticStyle: {
      height: "20px",
      width: "20px"
    },
    attrs: {
      role: "status"
    }
  }, [_c("span", {
    staticClass: "sr-only"
  }, [_vm._v("Loading...")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/conventions/fr/CONVENTION_CREDIT_AMORTISSAGE_NEW.vue?vue&type=style&index=0&id=359faca9&scoped=true&lang=css":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/conventions/fr/CONVENTION_CREDIT_AMORTISSAGE_NEW.vue?vue&type=style&index=0&id=359faca9&scoped=true&lang=css ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\nfieldset[data-v-359faca9] {\r\n    border: 1px solid #ddd !important;\r\n    position: relative;\r\n    padding-left: 10px !important;\r\n    width: 100%;\r\n    background-color: #f5f5f5;\r\n    margin-top: 15px;\r\n    min-width: -moz-max-content;\r\n    min-width: max-content;\n}\nlegend[data-v-359faca9] {\r\n    font-weight: bold;\r\n    padding: 4px;\r\n    width: -moz-max-content;\r\n    width: max-content;\r\n    padding: 0 15px;\r\n    font-size: 16px;\r\n    float: none;\r\n    background-color: #ffffff;\r\n    border: 1px solid #ddd;\r\n    border-radius: 4px;\n}\nfieldset[data-v-359faca9] {\r\n    border: 1px solid #ddd !important;\r\n    position: relative;\r\n    padding-left: 10px !important;\r\n    width: 100%;\r\n    background-color: #f5f5f5;\r\n    margin-top: 15px;\n}\nlegend[data-v-359faca9] {\r\n    font-weight: bold;\r\n    padding: 4px;\r\n    width: -moz-max-content;\r\n    width: max-content;\r\n    padding: 0 15px;\r\n    font-size: 16px;\r\n    float: none;\r\n    background-color: #ffffff;\r\n    border: 1px solid #ddd;\r\n    border-radius: 4px;\n}\n.box[data-v-359faca9] {\r\n    border-color: #212529;\r\n    border-style: solid;\r\n    border-width: 1px;\r\n    padding: 10px;\n}\n.actd[data-v-359faca9] {\r\n    border-color: #212529;\r\n    border-style: solid;\r\n    border-width: 1px;\r\n    padding: 10px;\n}\n.pre[data-v-359faca9] {\r\n    font-size: 0.6rem;\n}\n.form-control[data-v-359faca9] {\r\n    display: initial;\r\n    width: initial;\n}\n.paragraph[data-v-359faca9] {\r\n    margin: 20px 0px;\r\n    position: relative;\r\n    padding: 5px;\n}\ninput[data-v-359faca9],\r\nselect[data-v-359faca9] {\r\n    margin: 2px;\r\n    border-color: #34495e;\r\n    color: black;\r\n    font-size: 13px;\r\n    height: 34px;\r\n    font-weight: bold;\r\n    background-color: #ffffad;\r\n    margin-right: 0px;\r\n    min-width: 45px;\r\n    border-top-right-radius: 0;\r\n    border-bottom-right-radius: 0;\r\n    border-right: none;\n}\n.input-group-append[data-v-359faca9] {\r\n    margin: 0 2px;\n}\n.input-group-text-right[data-v-359faca9] {\r\n    border-radius: 0 0.375rem 0.375rem 0;\r\n    margin-left: 0px;\r\n    cursor: pointer;\n}\n.input-group-text-left[data-v-359faca9] {\r\n    border-radius: 0.375rem 0 0 0.375rem;\n}\n.li-convention[data-v-359faca9] {\r\n    list-style-type: disc;\r\n    margin: 0;\r\n    padding: 0;\r\n    margin-left: 20px;\n}\n.input-group-text[data-v-359faca9] {\r\n    font-size: 13px;\r\n    line-height: 1.5;\r\n    height: 34px;\r\n    padding: 0.375rem 0.75rem;\r\n    border: 1px solid #34495e;\r\n    min-width: 45px;\r\n    text-align: center;\r\n    justify-content: center;\r\n    background-color: #ffffad;\r\n    color: black;\n}\n.checkbox-container .checkbox-input[data-v-359faca9] {\r\n    position: absolute;\r\n    opacity: 0;\r\n    cursor: pointer;\r\n    height: 80%;\r\n    width: 80%;\r\n    top: 0;\r\n    left: 0;\r\n    z-index: 1;\n}\n.checkbox-container[data-v-359faca9] {\r\n    display: block;\r\n    position: relative;\r\n    cursor: pointer;\r\n    -webkit-user-select: none;\r\n       -moz-user-select: none;\r\n            user-select: none;\n}\n.checkbox-container .checkbox-icon-cancel[data-v-359faca9] {\r\n    position: relative;\r\n    top: 0;\r\n    left: 0;\r\n    height: 50px;\r\n    width: 50px;\r\n    transition: all 0.3s;\r\n    font-size: 1.5em;\r\n    color: red;\n}\n.checkbox-container .checkbox-icon-success[data-v-359faca9] {\r\n    position: relative;\r\n    top: 0;\r\n    left: 0;\r\n    height: 50px;\r\n    width: 50px;\r\n    transition: all 0.3s;\r\n    font-size: 1.5em;\r\n    color: green;\n}\n.checkbox-container .checkbox-icon-success[data-v-359faca9] {\r\n    display: none;\n}\n.checkbox-container .checkbox-input:checked ~ .checkbox-icon-cancel[data-v-359faca9] {\r\n    display: none;\n}\n.checkbox-container .checkbox-input:checked ~ .checkbox-icon-success[data-v-359faca9] {\r\n    display: contents;\n}\n.valid-section[data-v-359faca9] {\r\n    pointer-events: auto;\r\n    top: 50%;\r\n    transform: translateY(-50%);\r\n    width: -moz-fit-content;\r\n    width: fit-content;\n}\n.st-valide[data-v-359faca9] {\r\n    position: absolute;\r\n    z-index: 99;\r\n    right: -252px;\r\n    top: 10px;\n}\r\n\r\n/*this is the new approach*/\n.position-relative[data-v-359faca9]:has(.valid-section:hover) {\r\n    background: #3498db6f;\n}\n.onAutoSave[data-v-359faca9] {\r\n    cursor: wait !important;\n}\n.onAutoSave > span[data-v-359faca9] {\r\n    pointer-events: none;\r\n    opacity: 0.6;\r\n    cursor: wait !important;\n}\nul[data-v-359faca9],\r\nli[data-v-359faca9] {\r\n    list-style-type: inherit;\n}\n.telephone-container[data-v-359faca9] {\r\n    white-space: nowrap;\r\n    overflow-x: auto;\r\n    padding: 5px 0;\n}\n.telephone-container[data-v-359faca9]::-webkit-scrollbar {\r\n    height: 8px;\n}\n.telephone-container[data-v-359faca9]::-webkit-scrollbar-thumb {\r\n    background-color: #ccc;\r\n    border-radius: 4px;\n}\ninput[type=\"checkbox\"][data-v-359faca9] {\r\n    height: 20px !important;\r\n    width: 20px !important;\n}\n.block[data-v-359faca9] {\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr;\r\n    gap: 5px;\r\n    margin-bottom: 10px;\r\n    align-items: stretch;\n}\n.column[data-v-359faca9] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 5px;\r\n    padding: 5px;\n}\n.article[data-v-359faca9] {\r\n    text-align: justify;\r\n    margin-top: 10px;\n}\n.article p[data-v-359faca9] {\r\n    margin: 10px 0;\n}\n.list[data-v-359faca9] {\r\n    margin-left: 20px;\r\n    list-style-type: disc;\n}\n.list li[data-v-359faca9] {\r\n    margin-bottom: 10px;\r\n    text-align: justify;\n}\n.highlight_[data-v-359faca9] {\r\n    font-weight: bold;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/qrcode-generator/qrcode.js":
/*!*************************************************!*\
  !*** ./node_modules/qrcode-generator/qrcode.js ***!
  \*************************************************/
/***/ ((module, exports) => {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;//---------------------------------------------------------------------
//
// QR Code Generator for JavaScript
//
// Copyright (c) 2009 Kazuhiko Arase
//
// URL: http://www.d-project.com/
//
// Licensed under the MIT license:
//  http://www.opensource.org/licenses/mit-license.php
//
// The word 'QR Code' is registered trademark of
// DENSO WAVE INCORPORATED
//  http://www.denso-wave.com/qrcode/faqpatent-e.html
//
//---------------------------------------------------------------------

var qrcode = function() {

  //---------------------------------------------------------------------
  // qrcode
  //---------------------------------------------------------------------

  /**
   * qrcode
   * @param typeNumber 1 to 40
   * @param errorCorrectionLevel 'L','M','Q','H'
   */
  var qrcode = function(typeNumber, errorCorrectionLevel) {

    var PAD0 = 0xEC;
    var PAD1 = 0x11;

    var _typeNumber = typeNumber;
    var _errorCorrectionLevel = QRErrorCorrectionLevel[errorCorrectionLevel];
    var _modules = null;
    var _moduleCount = 0;
    var _dataCache = null;
    var _dataList = [];

    var _this = {};

    var makeImpl = function(test, maskPattern) {

      _moduleCount = _typeNumber * 4 + 17;
      _modules = function(moduleCount) {
        var modules = new Array(moduleCount);
        for (var row = 0; row < moduleCount; row += 1) {
          modules[row] = new Array(moduleCount);
          for (var col = 0; col < moduleCount; col += 1) {
            modules[row][col] = null;
          }
        }
        return modules;
      }(_moduleCount);

      setupPositionProbePattern(0, 0);
      setupPositionProbePattern(_moduleCount - 7, 0);
      setupPositionProbePattern(0, _moduleCount - 7);
      setupPositionAdjustPattern();
      setupTimingPattern();
      setupTypeInfo(test, maskPattern);

      if (_typeNumber >= 7) {
        setupTypeNumber(test);
      }

      if (_dataCache == null) {
        _dataCache = createData(_typeNumber, _errorCorrectionLevel, _dataList);
      }

      mapData(_dataCache, maskPattern);
    };

    var setupPositionProbePattern = function(row, col) {

      for (var r = -1; r <= 7; r += 1) {

        if (row + r <= -1 || _moduleCount <= row + r) continue;

        for (var c = -1; c <= 7; c += 1) {

          if (col + c <= -1 || _moduleCount <= col + c) continue;

          if ( (0 <= r && r <= 6 && (c == 0 || c == 6) )
              || (0 <= c && c <= 6 && (r == 0 || r == 6) )
              || (2 <= r && r <= 4 && 2 <= c && c <= 4) ) {
            _modules[row + r][col + c] = true;
          } else {
            _modules[row + r][col + c] = false;
          }
        }
      }
    };

    var getBestMaskPattern = function() {

      var minLostPoint = 0;
      var pattern = 0;

      for (var i = 0; i < 8; i += 1) {

        makeImpl(true, i);

        var lostPoint = QRUtil.getLostPoint(_this);

        if (i == 0 || minLostPoint > lostPoint) {
          minLostPoint = lostPoint;
          pattern = i;
        }
      }

      return pattern;
    };

    var setupTimingPattern = function() {

      for (var r = 8; r < _moduleCount - 8; r += 1) {
        if (_modules[r][6] != null) {
          continue;
        }
        _modules[r][6] = (r % 2 == 0);
      }

      for (var c = 8; c < _moduleCount - 8; c += 1) {
        if (_modules[6][c] != null) {
          continue;
        }
        _modules[6][c] = (c % 2 == 0);
      }
    };

    var setupPositionAdjustPattern = function() {

      var pos = QRUtil.getPatternPosition(_typeNumber);

      for (var i = 0; i < pos.length; i += 1) {

        for (var j = 0; j < pos.length; j += 1) {

          var row = pos[i];
          var col = pos[j];

          if (_modules[row][col] != null) {
            continue;
          }

          for (var r = -2; r <= 2; r += 1) {

            for (var c = -2; c <= 2; c += 1) {

              if (r == -2 || r == 2 || c == -2 || c == 2
                  || (r == 0 && c == 0) ) {
                _modules[row + r][col + c] = true;
              } else {
                _modules[row + r][col + c] = false;
              }
            }
          }
        }
      }
    };

    var setupTypeNumber = function(test) {

      var bits = QRUtil.getBCHTypeNumber(_typeNumber);

      for (var i = 0; i < 18; i += 1) {
        var mod = (!test && ( (bits >> i) & 1) == 1);
        _modules[Math.floor(i / 3)][i % 3 + _moduleCount - 8 - 3] = mod;
      }

      for (var i = 0; i < 18; i += 1) {
        var mod = (!test && ( (bits >> i) & 1) == 1);
        _modules[i % 3 + _moduleCount - 8 - 3][Math.floor(i / 3)] = mod;
      }
    };

    var setupTypeInfo = function(test, maskPattern) {

      var data = (_errorCorrectionLevel << 3) | maskPattern;
      var bits = QRUtil.getBCHTypeInfo(data);

      // vertical
      for (var i = 0; i < 15; i += 1) {

        var mod = (!test && ( (bits >> i) & 1) == 1);

        if (i < 6) {
          _modules[i][8] = mod;
        } else if (i < 8) {
          _modules[i + 1][8] = mod;
        } else {
          _modules[_moduleCount - 15 + i][8] = mod;
        }
      }

      // horizontal
      for (var i = 0; i < 15; i += 1) {

        var mod = (!test && ( (bits >> i) & 1) == 1);

        if (i < 8) {
          _modules[8][_moduleCount - i - 1] = mod;
        } else if (i < 9) {
          _modules[8][15 - i - 1 + 1] = mod;
        } else {
          _modules[8][15 - i - 1] = mod;
        }
      }

      // fixed module
      _modules[_moduleCount - 8][8] = (!test);
    };

    var mapData = function(data, maskPattern) {

      var inc = -1;
      var row = _moduleCount - 1;
      var bitIndex = 7;
      var byteIndex = 0;
      var maskFunc = QRUtil.getMaskFunction(maskPattern);

      for (var col = _moduleCount - 1; col > 0; col -= 2) {

        if (col == 6) col -= 1;

        while (true) {

          for (var c = 0; c < 2; c += 1) {

            if (_modules[row][col - c] == null) {

              var dark = false;

              if (byteIndex < data.length) {
                dark = ( ( (data[byteIndex] >>> bitIndex) & 1) == 1);
              }

              var mask = maskFunc(row, col - c);

              if (mask) {
                dark = !dark;
              }

              _modules[row][col - c] = dark;
              bitIndex -= 1;

              if (bitIndex == -1) {
                byteIndex += 1;
                bitIndex = 7;
              }
            }
          }

          row += inc;

          if (row < 0 || _moduleCount <= row) {
            row -= inc;
            inc = -inc;
            break;
          }
        }
      }
    };

    var createBytes = function(buffer, rsBlocks) {

      var offset = 0;

      var maxDcCount = 0;
      var maxEcCount = 0;

      var dcdata = new Array(rsBlocks.length);
      var ecdata = new Array(rsBlocks.length);

      for (var r = 0; r < rsBlocks.length; r += 1) {

        var dcCount = rsBlocks[r].dataCount;
        var ecCount = rsBlocks[r].totalCount - dcCount;

        maxDcCount = Math.max(maxDcCount, dcCount);
        maxEcCount = Math.max(maxEcCount, ecCount);

        dcdata[r] = new Array(dcCount);

        for (var i = 0; i < dcdata[r].length; i += 1) {
          dcdata[r][i] = 0xff & buffer.getBuffer()[i + offset];
        }
        offset += dcCount;

        var rsPoly = QRUtil.getErrorCorrectPolynomial(ecCount);
        var rawPoly = qrPolynomial(dcdata[r], rsPoly.getLength() - 1);

        var modPoly = rawPoly.mod(rsPoly);
        ecdata[r] = new Array(rsPoly.getLength() - 1);
        for (var i = 0; i < ecdata[r].length; i += 1) {
          var modIndex = i + modPoly.getLength() - ecdata[r].length;
          ecdata[r][i] = (modIndex >= 0)? modPoly.getAt(modIndex) : 0;
        }
      }

      var totalCodeCount = 0;
      for (var i = 0; i < rsBlocks.length; i += 1) {
        totalCodeCount += rsBlocks[i].totalCount;
      }

      var data = new Array(totalCodeCount);
      var index = 0;

      for (var i = 0; i < maxDcCount; i += 1) {
        for (var r = 0; r < rsBlocks.length; r += 1) {
          if (i < dcdata[r].length) {
            data[index] = dcdata[r][i];
            index += 1;
          }
        }
      }

      for (var i = 0; i < maxEcCount; i += 1) {
        for (var r = 0; r < rsBlocks.length; r += 1) {
          if (i < ecdata[r].length) {
            data[index] = ecdata[r][i];
            index += 1;
          }
        }
      }

      return data;
    };

    var createData = function(typeNumber, errorCorrectionLevel, dataList) {

      var rsBlocks = QRRSBlock.getRSBlocks(typeNumber, errorCorrectionLevel);

      var buffer = qrBitBuffer();

      for (var i = 0; i < dataList.length; i += 1) {
        var data = dataList[i];
        buffer.put(data.getMode(), 4);
        buffer.put(data.getLength(), QRUtil.getLengthInBits(data.getMode(), typeNumber) );
        data.write(buffer);
      }

      // calc num max data.
      var totalDataCount = 0;
      for (var i = 0; i < rsBlocks.length; i += 1) {
        totalDataCount += rsBlocks[i].dataCount;
      }

      if (buffer.getLengthInBits() > totalDataCount * 8) {
        throw 'code length overflow. ('
          + buffer.getLengthInBits()
          + '>'
          + totalDataCount * 8
          + ')';
      }

      // end code
      if (buffer.getLengthInBits() + 4 <= totalDataCount * 8) {
        buffer.put(0, 4);
      }

      // padding
      while (buffer.getLengthInBits() % 8 != 0) {
        buffer.putBit(false);
      }

      // padding
      while (true) {

        if (buffer.getLengthInBits() >= totalDataCount * 8) {
          break;
        }
        buffer.put(PAD0, 8);

        if (buffer.getLengthInBits() >= totalDataCount * 8) {
          break;
        }
        buffer.put(PAD1, 8);
      }

      return createBytes(buffer, rsBlocks);
    };

    _this.addData = function(data, mode) {

      mode = mode || 'Byte';

      var newData = null;

      switch(mode) {
      case 'Numeric' :
        newData = qrNumber(data);
        break;
      case 'Alphanumeric' :
        newData = qrAlphaNum(data);
        break;
      case 'Byte' :
        newData = qr8BitByte(data);
        break;
      case 'Kanji' :
        newData = qrKanji(data);
        break;
      default :
        throw 'mode:' + mode;
      }

      _dataList.push(newData);
      _dataCache = null;
    };

    _this.isDark = function(row, col) {
      if (row < 0 || _moduleCount <= row || col < 0 || _moduleCount <= col) {
        throw row + ',' + col;
      }
      return _modules[row][col];
    };

    _this.getModuleCount = function() {
      return _moduleCount;
    };

    _this.make = function() {
      if (_typeNumber < 1) {
        var typeNumber = 1;

        for (; typeNumber < 40; typeNumber++) {
          var rsBlocks = QRRSBlock.getRSBlocks(typeNumber, _errorCorrectionLevel);
          var buffer = qrBitBuffer();

          for (var i = 0; i < _dataList.length; i++) {
            var data = _dataList[i];
            buffer.put(data.getMode(), 4);
            buffer.put(data.getLength(), QRUtil.getLengthInBits(data.getMode(), typeNumber) );
            data.write(buffer);
          }

          var totalDataCount = 0;
          for (var i = 0; i < rsBlocks.length; i++) {
            totalDataCount += rsBlocks[i].dataCount;
          }

          if (buffer.getLengthInBits() <= totalDataCount * 8) {
            break;
          }
        }

        _typeNumber = typeNumber;
      }

      makeImpl(false, getBestMaskPattern() );
    };

    _this.createTableTag = function(cellSize, margin) {

      cellSize = cellSize || 2;
      margin = (typeof margin == 'undefined')? cellSize * 4 : margin;

      var qrHtml = '';

      qrHtml += '<table style="';
      qrHtml += ' border-width: 0px; border-style: none;';
      qrHtml += ' border-collapse: collapse;';
      qrHtml += ' padding: 0px; margin: ' + margin + 'px;';
      qrHtml += '">';
      qrHtml += '<tbody>';

      for (var r = 0; r < _this.getModuleCount(); r += 1) {

        qrHtml += '<tr>';

        for (var c = 0; c < _this.getModuleCount(); c += 1) {
          qrHtml += '<td style="';
          qrHtml += ' border-width: 0px; border-style: none;';
          qrHtml += ' border-collapse: collapse;';
          qrHtml += ' padding: 0px; margin: 0px;';
          qrHtml += ' width: ' + cellSize + 'px;';
          qrHtml += ' height: ' + cellSize + 'px;';
          qrHtml += ' background-color: ';
          qrHtml += _this.isDark(r, c)? '#000000' : '#ffffff';
          qrHtml += ';';
          qrHtml += '"/>';
        }

        qrHtml += '</tr>';
      }

      qrHtml += '</tbody>';
      qrHtml += '</table>';

      return qrHtml;
    };

    _this.createSvgTag = function(cellSize, margin, alt, title) {

      var opts = {};
      if (typeof arguments[0] == 'object') {
        // Called by options.
        opts = arguments[0];
        // overwrite cellSize and margin.
        cellSize = opts.cellSize;
        margin = opts.margin;
        alt = opts.alt;
        title = opts.title;
      }

      cellSize = cellSize || 2;
      margin = (typeof margin == 'undefined')? cellSize * 4 : margin;

      // Compose alt property surrogate
      alt = (typeof alt === 'string') ? {text: alt} : alt || {};
      alt.text = alt.text || null;
      alt.id = (alt.text) ? alt.id || 'qrcode-description' : null;

      // Compose title property surrogate
      title = (typeof title === 'string') ? {text: title} : title || {};
      title.text = title.text || null;
      title.id = (title.text) ? title.id || 'qrcode-title' : null;

      var size = _this.getModuleCount() * cellSize + margin * 2;
      var c, mc, r, mr, qrSvg='', rect;

      rect = 'l' + cellSize + ',0 0,' + cellSize +
        ' -' + cellSize + ',0 0,-' + cellSize + 'z ';

      qrSvg += '<svg version="1.1" xmlns="http://www.w3.org/2000/svg"';
      qrSvg += !opts.scalable ? ' width="' + size + 'px" height="' + size + 'px"' : '';
      qrSvg += ' viewBox="0 0 ' + size + ' ' + size + '" ';
      qrSvg += ' preserveAspectRatio="xMinYMin meet"';
      qrSvg += (title.text || alt.text) ? ' role="img" aria-labelledby="' +
          escapeXml([title.id, alt.id].join(' ').trim() ) + '"' : '';
      qrSvg += '>';
      qrSvg += (title.text) ? '<title id="' + escapeXml(title.id) + '">' +
          escapeXml(title.text) + '</title>' : '';
      qrSvg += (alt.text) ? '<description id="' + escapeXml(alt.id) + '">' +
          escapeXml(alt.text) + '</description>' : '';
      qrSvg += '<rect width="100%" height="100%" fill="white" cx="0" cy="0"/>';
      qrSvg += '<path d="';

      for (r = 0; r < _this.getModuleCount(); r += 1) {
        mr = r * cellSize + margin;
        for (c = 0; c < _this.getModuleCount(); c += 1) {
          if (_this.isDark(r, c) ) {
            mc = c*cellSize+margin;
            qrSvg += 'M' + mc + ',' + mr + rect;
          }
        }
      }

      qrSvg += '" stroke="transparent" fill="black"/>';
      qrSvg += '</svg>';

      return qrSvg;
    };

    _this.createDataURL = function(cellSize, margin) {

      cellSize = cellSize || 2;
      margin = (typeof margin == 'undefined')? cellSize * 4 : margin;

      var size = _this.getModuleCount() * cellSize + margin * 2;
      var min = margin;
      var max = size - margin;

      return createDataURL(size, size, function(x, y) {
        if (min <= x && x < max && min <= y && y < max) {
          var c = Math.floor( (x - min) / cellSize);
          var r = Math.floor( (y - min) / cellSize);
          return _this.isDark(r, c)? 0 : 1;
        } else {
          return 1;
        }
      } );
    };

    _this.createImgTag = function(cellSize, margin, alt) {

      cellSize = cellSize || 2;
      margin = (typeof margin == 'undefined')? cellSize * 4 : margin;

      var size = _this.getModuleCount() * cellSize + margin * 2;

      var img = '';
      img += '<img';
      img += '\u0020src="';
      img += _this.createDataURL(cellSize, margin);
      img += '"';
      img += '\u0020width="';
      img += size;
      img += '"';
      img += '\u0020height="';
      img += size;
      img += '"';
      if (alt) {
        img += '\u0020alt="';
        img += escapeXml(alt);
        img += '"';
      }
      img += '/>';

      return img;
    };

    var escapeXml = function(s) {
      var escaped = '';
      for (var i = 0; i < s.length; i += 1) {
        var c = s.charAt(i);
        switch(c) {
        case '<': escaped += '&lt;'; break;
        case '>': escaped += '&gt;'; break;
        case '&': escaped += '&amp;'; break;
        case '"': escaped += '&quot;'; break;
        default : escaped += c; break;
        }
      }
      return escaped;
    };

    var _createHalfASCII = function(margin) {
      var cellSize = 1;
      margin = (typeof margin == 'undefined')? cellSize * 2 : margin;

      var size = _this.getModuleCount() * cellSize + margin * 2;
      var min = margin;
      var max = size - margin;

      var y, x, r1, r2, p;

      var blocks = {
        '██': '█',
        '█ ': '▀',
        ' █': '▄',
        '  ': ' '
      };

      var blocksLastLineNoMargin = {
        '██': '▀',
        '█ ': '▀',
        ' █': ' ',
        '  ': ' '
      };

      var ascii = '';
      for (y = 0; y < size; y += 2) {
        r1 = Math.floor((y - min) / cellSize);
        r2 = Math.floor((y + 1 - min) / cellSize);
        for (x = 0; x < size; x += 1) {
          p = '█';

          if (min <= x && x < max && min <= y && y < max && _this.isDark(r1, Math.floor((x - min) / cellSize))) {
            p = ' ';
          }

          if (min <= x && x < max && min <= y+1 && y+1 < max && _this.isDark(r2, Math.floor((x - min) / cellSize))) {
            p += ' ';
          }
          else {
            p += '█';
          }

          // Output 2 characters per pixel, to create full square. 1 character per pixels gives only half width of square.
          ascii += (margin < 1 && y+1 >= max) ? blocksLastLineNoMargin[p] : blocks[p];
        }

        ascii += '\n';
      }

      if (size % 2 && margin > 0) {
        return ascii.substring(0, ascii.length - size - 1) + Array(size+1).join('▀');
      }

      return ascii.substring(0, ascii.length-1);
    };

    _this.createASCII = function(cellSize, margin) {
      cellSize = cellSize || 1;

      if (cellSize < 2) {
        return _createHalfASCII(margin);
      }

      cellSize -= 1;
      margin = (typeof margin == 'undefined')? cellSize * 2 : margin;

      var size = _this.getModuleCount() * cellSize + margin * 2;
      var min = margin;
      var max = size - margin;

      var y, x, r, p;

      var white = Array(cellSize+1).join('██');
      var black = Array(cellSize+1).join('  ');

      var ascii = '';
      var line = '';
      for (y = 0; y < size; y += 1) {
        r = Math.floor( (y - min) / cellSize);
        line = '';
        for (x = 0; x < size; x += 1) {
          p = 1;

          if (min <= x && x < max && min <= y && y < max && _this.isDark(r, Math.floor((x - min) / cellSize))) {
            p = 0;
          }

          // Output 2 characters per pixel, to create full square. 1 character per pixels gives only half width of square.
          line += p ? white : black;
        }

        for (r = 0; r < cellSize; r += 1) {
          ascii += line + '\n';
        }
      }

      return ascii.substring(0, ascii.length-1);
    };

    _this.renderTo2dContext = function(context, cellSize) {
      cellSize = cellSize || 2;
      var length = _this.getModuleCount();
      for (var row = 0; row < length; row++) {
        for (var col = 0; col < length; col++) {
          context.fillStyle = _this.isDark(row, col) ? 'black' : 'white';
          context.fillRect(row * cellSize, col * cellSize, cellSize, cellSize);
        }
      }
    }

    return _this;
  };

  //---------------------------------------------------------------------
  // qrcode.stringToBytes
  //---------------------------------------------------------------------

  qrcode.stringToBytesFuncs = {
    'default' : function(s) {
      var bytes = [];
      for (var i = 0; i < s.length; i += 1) {
        var c = s.charCodeAt(i);
        bytes.push(c & 0xff);
      }
      return bytes;
    }
  };

  qrcode.stringToBytes = qrcode.stringToBytesFuncs['default'];

  //---------------------------------------------------------------------
  // qrcode.createStringToBytes
  //---------------------------------------------------------------------

  /**
   * @param unicodeData base64 string of byte array.
   * [16bit Unicode],[16bit Bytes], ...
   * @param numChars
   */
  qrcode.createStringToBytes = function(unicodeData, numChars) {

    // create conversion map.

    var unicodeMap = function() {

      var bin = base64DecodeInputStream(unicodeData);
      var read = function() {
        var b = bin.read();
        if (b == -1) throw 'eof';
        return b;
      };

      var count = 0;
      var unicodeMap = {};
      while (true) {
        var b0 = bin.read();
        if (b0 == -1) break;
        var b1 = read();
        var b2 = read();
        var b3 = read();
        var k = String.fromCharCode( (b0 << 8) | b1);
        var v = (b2 << 8) | b3;
        unicodeMap[k] = v;
        count += 1;
      }
      if (count != numChars) {
        throw count + ' != ' + numChars;
      }

      return unicodeMap;
    }();

    var unknownChar = '?'.charCodeAt(0);

    return function(s) {
      var bytes = [];
      for (var i = 0; i < s.length; i += 1) {
        var c = s.charCodeAt(i);
        if (c < 128) {
          bytes.push(c);
        } else {
          var b = unicodeMap[s.charAt(i)];
          if (typeof b == 'number') {
            if ( (b & 0xff) == b) {
              // 1byte
              bytes.push(b);
            } else {
              // 2bytes
              bytes.push(b >>> 8);
              bytes.push(b & 0xff);
            }
          } else {
            bytes.push(unknownChar);
          }
        }
      }
      return bytes;
    };
  };

  //---------------------------------------------------------------------
  // QRMode
  //---------------------------------------------------------------------

  var QRMode = {
    MODE_NUMBER :    1 << 0,
    MODE_ALPHA_NUM : 1 << 1,
    MODE_8BIT_BYTE : 1 << 2,
    MODE_KANJI :     1 << 3
  };

  //---------------------------------------------------------------------
  // QRErrorCorrectionLevel
  //---------------------------------------------------------------------

  var QRErrorCorrectionLevel = {
    L : 1,
    M : 0,
    Q : 3,
    H : 2
  };

  //---------------------------------------------------------------------
  // QRMaskPattern
  //---------------------------------------------------------------------

  var QRMaskPattern = {
    PATTERN000 : 0,
    PATTERN001 : 1,
    PATTERN010 : 2,
    PATTERN011 : 3,
    PATTERN100 : 4,
    PATTERN101 : 5,
    PATTERN110 : 6,
    PATTERN111 : 7
  };

  //---------------------------------------------------------------------
  // QRUtil
  //---------------------------------------------------------------------

  var QRUtil = function() {

    var PATTERN_POSITION_TABLE = [
      [],
      [6, 18],
      [6, 22],
      [6, 26],
      [6, 30],
      [6, 34],
      [6, 22, 38],
      [6, 24, 42],
      [6, 26, 46],
      [6, 28, 50],
      [6, 30, 54],
      [6, 32, 58],
      [6, 34, 62],
      [6, 26, 46, 66],
      [6, 26, 48, 70],
      [6, 26, 50, 74],
      [6, 30, 54, 78],
      [6, 30, 56, 82],
      [6, 30, 58, 86],
      [6, 34, 62, 90],
      [6, 28, 50, 72, 94],
      [6, 26, 50, 74, 98],
      [6, 30, 54, 78, 102],
      [6, 28, 54, 80, 106],
      [6, 32, 58, 84, 110],
      [6, 30, 58, 86, 114],
      [6, 34, 62, 90, 118],
      [6, 26, 50, 74, 98, 122],
      [6, 30, 54, 78, 102, 126],
      [6, 26, 52, 78, 104, 130],
      [6, 30, 56, 82, 108, 134],
      [6, 34, 60, 86, 112, 138],
      [6, 30, 58, 86, 114, 142],
      [6, 34, 62, 90, 118, 146],
      [6, 30, 54, 78, 102, 126, 150],
      [6, 24, 50, 76, 102, 128, 154],
      [6, 28, 54, 80, 106, 132, 158],
      [6, 32, 58, 84, 110, 136, 162],
      [6, 26, 54, 82, 110, 138, 166],
      [6, 30, 58, 86, 114, 142, 170]
    ];
    var G15 = (1 << 10) | (1 << 8) | (1 << 5) | (1 << 4) | (1 << 2) | (1 << 1) | (1 << 0);
    var G18 = (1 << 12) | (1 << 11) | (1 << 10) | (1 << 9) | (1 << 8) | (1 << 5) | (1 << 2) | (1 << 0);
    var G15_MASK = (1 << 14) | (1 << 12) | (1 << 10) | (1 << 4) | (1 << 1);

    var _this = {};

    var getBCHDigit = function(data) {
      var digit = 0;
      while (data != 0) {
        digit += 1;
        data >>>= 1;
      }
      return digit;
    };

    _this.getBCHTypeInfo = function(data) {
      var d = data << 10;
      while (getBCHDigit(d) - getBCHDigit(G15) >= 0) {
        d ^= (G15 << (getBCHDigit(d) - getBCHDigit(G15) ) );
      }
      return ( (data << 10) | d) ^ G15_MASK;
    };

    _this.getBCHTypeNumber = function(data) {
      var d = data << 12;
      while (getBCHDigit(d) - getBCHDigit(G18) >= 0) {
        d ^= (G18 << (getBCHDigit(d) - getBCHDigit(G18) ) );
      }
      return (data << 12) | d;
    };

    _this.getPatternPosition = function(typeNumber) {
      return PATTERN_POSITION_TABLE[typeNumber - 1];
    };

    _this.getMaskFunction = function(maskPattern) {

      switch (maskPattern) {

      case QRMaskPattern.PATTERN000 :
        return function(i, j) { return (i + j) % 2 == 0; };
      case QRMaskPattern.PATTERN001 :
        return function(i, j) { return i % 2 == 0; };
      case QRMaskPattern.PATTERN010 :
        return function(i, j) { return j % 3 == 0; };
      case QRMaskPattern.PATTERN011 :
        return function(i, j) { return (i + j) % 3 == 0; };
      case QRMaskPattern.PATTERN100 :
        return function(i, j) { return (Math.floor(i / 2) + Math.floor(j / 3) ) % 2 == 0; };
      case QRMaskPattern.PATTERN101 :
        return function(i, j) { return (i * j) % 2 + (i * j) % 3 == 0; };
      case QRMaskPattern.PATTERN110 :
        return function(i, j) { return ( (i * j) % 2 + (i * j) % 3) % 2 == 0; };
      case QRMaskPattern.PATTERN111 :
        return function(i, j) { return ( (i * j) % 3 + (i + j) % 2) % 2 == 0; };

      default :
        throw 'bad maskPattern:' + maskPattern;
      }
    };

    _this.getErrorCorrectPolynomial = function(errorCorrectLength) {
      var a = qrPolynomial([1], 0);
      for (var i = 0; i < errorCorrectLength; i += 1) {
        a = a.multiply(qrPolynomial([1, QRMath.gexp(i)], 0) );
      }
      return a;
    };

    _this.getLengthInBits = function(mode, type) {

      if (1 <= type && type < 10) {

        // 1 - 9

        switch(mode) {
        case QRMode.MODE_NUMBER    : return 10;
        case QRMode.MODE_ALPHA_NUM : return 9;
        case QRMode.MODE_8BIT_BYTE : return 8;
        case QRMode.MODE_KANJI     : return 8;
        default :
          throw 'mode:' + mode;
        }

      } else if (type < 27) {

        // 10 - 26

        switch(mode) {
        case QRMode.MODE_NUMBER    : return 12;
        case QRMode.MODE_ALPHA_NUM : return 11;
        case QRMode.MODE_8BIT_BYTE : return 16;
        case QRMode.MODE_KANJI     : return 10;
        default :
          throw 'mode:' + mode;
        }

      } else if (type < 41) {

        // 27 - 40

        switch(mode) {
        case QRMode.MODE_NUMBER    : return 14;
        case QRMode.MODE_ALPHA_NUM : return 13;
        case QRMode.MODE_8BIT_BYTE : return 16;
        case QRMode.MODE_KANJI     : return 12;
        default :
          throw 'mode:' + mode;
        }

      } else {
        throw 'type:' + type;
      }
    };

    _this.getLostPoint = function(qrcode) {

      var moduleCount = qrcode.getModuleCount();

      var lostPoint = 0;

      // LEVEL1

      for (var row = 0; row < moduleCount; row += 1) {
        for (var col = 0; col < moduleCount; col += 1) {

          var sameCount = 0;
          var dark = qrcode.isDark(row, col);

          for (var r = -1; r <= 1; r += 1) {

            if (row + r < 0 || moduleCount <= row + r) {
              continue;
            }

            for (var c = -1; c <= 1; c += 1) {

              if (col + c < 0 || moduleCount <= col + c) {
                continue;
              }

              if (r == 0 && c == 0) {
                continue;
              }

              if (dark == qrcode.isDark(row + r, col + c) ) {
                sameCount += 1;
              }
            }
          }

          if (sameCount > 5) {
            lostPoint += (3 + sameCount - 5);
          }
        }
      };

      // LEVEL2

      for (var row = 0; row < moduleCount - 1; row += 1) {
        for (var col = 0; col < moduleCount - 1; col += 1) {
          var count = 0;
          if (qrcode.isDark(row, col) ) count += 1;
          if (qrcode.isDark(row + 1, col) ) count += 1;
          if (qrcode.isDark(row, col + 1) ) count += 1;
          if (qrcode.isDark(row + 1, col + 1) ) count += 1;
          if (count == 0 || count == 4) {
            lostPoint += 3;
          }
        }
      }

      // LEVEL3

      for (var row = 0; row < moduleCount; row += 1) {
        for (var col = 0; col < moduleCount - 6; col += 1) {
          if (qrcode.isDark(row, col)
              && !qrcode.isDark(row, col + 1)
              &&  qrcode.isDark(row, col + 2)
              &&  qrcode.isDark(row, col + 3)
              &&  qrcode.isDark(row, col + 4)
              && !qrcode.isDark(row, col + 5)
              &&  qrcode.isDark(row, col + 6) ) {
            lostPoint += 40;
          }
        }
      }

      for (var col = 0; col < moduleCount; col += 1) {
        for (var row = 0; row < moduleCount - 6; row += 1) {
          if (qrcode.isDark(row, col)
              && !qrcode.isDark(row + 1, col)
              &&  qrcode.isDark(row + 2, col)
              &&  qrcode.isDark(row + 3, col)
              &&  qrcode.isDark(row + 4, col)
              && !qrcode.isDark(row + 5, col)
              &&  qrcode.isDark(row + 6, col) ) {
            lostPoint += 40;
          }
        }
      }

      // LEVEL4

      var darkCount = 0;

      for (var col = 0; col < moduleCount; col += 1) {
        for (var row = 0; row < moduleCount; row += 1) {
          if (qrcode.isDark(row, col) ) {
            darkCount += 1;
          }
        }
      }

      var ratio = Math.abs(100 * darkCount / moduleCount / moduleCount - 50) / 5;
      lostPoint += ratio * 10;

      return lostPoint;
    };

    return _this;
  }();

  //---------------------------------------------------------------------
  // QRMath
  //---------------------------------------------------------------------

  var QRMath = function() {

    var EXP_TABLE = new Array(256);
    var LOG_TABLE = new Array(256);

    // initialize tables
    for (var i = 0; i < 8; i += 1) {
      EXP_TABLE[i] = 1 << i;
    }
    for (var i = 8; i < 256; i += 1) {
      EXP_TABLE[i] = EXP_TABLE[i - 4]
        ^ EXP_TABLE[i - 5]
        ^ EXP_TABLE[i - 6]
        ^ EXP_TABLE[i - 8];
    }
    for (var i = 0; i < 255; i += 1) {
      LOG_TABLE[EXP_TABLE[i] ] = i;
    }

    var _this = {};

    _this.glog = function(n) {

      if (n < 1) {
        throw 'glog(' + n + ')';
      }

      return LOG_TABLE[n];
    };

    _this.gexp = function(n) {

      while (n < 0) {
        n += 255;
      }

      while (n >= 256) {
        n -= 255;
      }

      return EXP_TABLE[n];
    };

    return _this;
  }();

  //---------------------------------------------------------------------
  // qrPolynomial
  //---------------------------------------------------------------------

  function qrPolynomial(num, shift) {

    if (typeof num.length == 'undefined') {
      throw num.length + '/' + shift;
    }

    var _num = function() {
      var offset = 0;
      while (offset < num.length && num[offset] == 0) {
        offset += 1;
      }
      var _num = new Array(num.length - offset + shift);
      for (var i = 0; i < num.length - offset; i += 1) {
        _num[i] = num[i + offset];
      }
      return _num;
    }();

    var _this = {};

    _this.getAt = function(index) {
      return _num[index];
    };

    _this.getLength = function() {
      return _num.length;
    };

    _this.multiply = function(e) {

      var num = new Array(_this.getLength() + e.getLength() - 1);

      for (var i = 0; i < _this.getLength(); i += 1) {
        for (var j = 0; j < e.getLength(); j += 1) {
          num[i + j] ^= QRMath.gexp(QRMath.glog(_this.getAt(i) ) + QRMath.glog(e.getAt(j) ) );
        }
      }

      return qrPolynomial(num, 0);
    };

    _this.mod = function(e) {

      if (_this.getLength() - e.getLength() < 0) {
        return _this;
      }

      var ratio = QRMath.glog(_this.getAt(0) ) - QRMath.glog(e.getAt(0) );

      var num = new Array(_this.getLength() );
      for (var i = 0; i < _this.getLength(); i += 1) {
        num[i] = _this.getAt(i);
      }

      for (var i = 0; i < e.getLength(); i += 1) {
        num[i] ^= QRMath.gexp(QRMath.glog(e.getAt(i) ) + ratio);
      }

      // recursive call
      return qrPolynomial(num, 0).mod(e);
    };

    return _this;
  };

  //---------------------------------------------------------------------
  // QRRSBlock
  //---------------------------------------------------------------------

  var QRRSBlock = function() {

    var RS_BLOCK_TABLE = [

      // L
      // M
      // Q
      // H

      // 1
      [1, 26, 19],
      [1, 26, 16],
      [1, 26, 13],
      [1, 26, 9],

      // 2
      [1, 44, 34],
      [1, 44, 28],
      [1, 44, 22],
      [1, 44, 16],

      // 3
      [1, 70, 55],
      [1, 70, 44],
      [2, 35, 17],
      [2, 35, 13],

      // 4
      [1, 100, 80],
      [2, 50, 32],
      [2, 50, 24],
      [4, 25, 9],

      // 5
      [1, 134, 108],
      [2, 67, 43],
      [2, 33, 15, 2, 34, 16],
      [2, 33, 11, 2, 34, 12],

      // 6
      [2, 86, 68],
      [4, 43, 27],
      [4, 43, 19],
      [4, 43, 15],

      // 7
      [2, 98, 78],
      [4, 49, 31],
      [2, 32, 14, 4, 33, 15],
      [4, 39, 13, 1, 40, 14],

      // 8
      [2, 121, 97],
      [2, 60, 38, 2, 61, 39],
      [4, 40, 18, 2, 41, 19],
      [4, 40, 14, 2, 41, 15],

      // 9
      [2, 146, 116],
      [3, 58, 36, 2, 59, 37],
      [4, 36, 16, 4, 37, 17],
      [4, 36, 12, 4, 37, 13],

      // 10
      [2, 86, 68, 2, 87, 69],
      [4, 69, 43, 1, 70, 44],
      [6, 43, 19, 2, 44, 20],
      [6, 43, 15, 2, 44, 16],

      // 11
      [4, 101, 81],
      [1, 80, 50, 4, 81, 51],
      [4, 50, 22, 4, 51, 23],
      [3, 36, 12, 8, 37, 13],

      // 12
      [2, 116, 92, 2, 117, 93],
      [6, 58, 36, 2, 59, 37],
      [4, 46, 20, 6, 47, 21],
      [7, 42, 14, 4, 43, 15],

      // 13
      [4, 133, 107],
      [8, 59, 37, 1, 60, 38],
      [8, 44, 20, 4, 45, 21],
      [12, 33, 11, 4, 34, 12],

      // 14
      [3, 145, 115, 1, 146, 116],
      [4, 64, 40, 5, 65, 41],
      [11, 36, 16, 5, 37, 17],
      [11, 36, 12, 5, 37, 13],

      // 15
      [5, 109, 87, 1, 110, 88],
      [5, 65, 41, 5, 66, 42],
      [5, 54, 24, 7, 55, 25],
      [11, 36, 12, 7, 37, 13],

      // 16
      [5, 122, 98, 1, 123, 99],
      [7, 73, 45, 3, 74, 46],
      [15, 43, 19, 2, 44, 20],
      [3, 45, 15, 13, 46, 16],

      // 17
      [1, 135, 107, 5, 136, 108],
      [10, 74, 46, 1, 75, 47],
      [1, 50, 22, 15, 51, 23],
      [2, 42, 14, 17, 43, 15],

      // 18
      [5, 150, 120, 1, 151, 121],
      [9, 69, 43, 4, 70, 44],
      [17, 50, 22, 1, 51, 23],
      [2, 42, 14, 19, 43, 15],

      // 19
      [3, 141, 113, 4, 142, 114],
      [3, 70, 44, 11, 71, 45],
      [17, 47, 21, 4, 48, 22],
      [9, 39, 13, 16, 40, 14],

      // 20
      [3, 135, 107, 5, 136, 108],
      [3, 67, 41, 13, 68, 42],
      [15, 54, 24, 5, 55, 25],
      [15, 43, 15, 10, 44, 16],

      // 21
      [4, 144, 116, 4, 145, 117],
      [17, 68, 42],
      [17, 50, 22, 6, 51, 23],
      [19, 46, 16, 6, 47, 17],

      // 22
      [2, 139, 111, 7, 140, 112],
      [17, 74, 46],
      [7, 54, 24, 16, 55, 25],
      [34, 37, 13],

      // 23
      [4, 151, 121, 5, 152, 122],
      [4, 75, 47, 14, 76, 48],
      [11, 54, 24, 14, 55, 25],
      [16, 45, 15, 14, 46, 16],

      // 24
      [6, 147, 117, 4, 148, 118],
      [6, 73, 45, 14, 74, 46],
      [11, 54, 24, 16, 55, 25],
      [30, 46, 16, 2, 47, 17],

      // 25
      [8, 132, 106, 4, 133, 107],
      [8, 75, 47, 13, 76, 48],
      [7, 54, 24, 22, 55, 25],
      [22, 45, 15, 13, 46, 16],

      // 26
      [10, 142, 114, 2, 143, 115],
      [19, 74, 46, 4, 75, 47],
      [28, 50, 22, 6, 51, 23],
      [33, 46, 16, 4, 47, 17],

      // 27
      [8, 152, 122, 4, 153, 123],
      [22, 73, 45, 3, 74, 46],
      [8, 53, 23, 26, 54, 24],
      [12, 45, 15, 28, 46, 16],

      // 28
      [3, 147, 117, 10, 148, 118],
      [3, 73, 45, 23, 74, 46],
      [4, 54, 24, 31, 55, 25],
      [11, 45, 15, 31, 46, 16],

      // 29
      [7, 146, 116, 7, 147, 117],
      [21, 73, 45, 7, 74, 46],
      [1, 53, 23, 37, 54, 24],
      [19, 45, 15, 26, 46, 16],

      // 30
      [5, 145, 115, 10, 146, 116],
      [19, 75, 47, 10, 76, 48],
      [15, 54, 24, 25, 55, 25],
      [23, 45, 15, 25, 46, 16],

      // 31
      [13, 145, 115, 3, 146, 116],
      [2, 74, 46, 29, 75, 47],
      [42, 54, 24, 1, 55, 25],
      [23, 45, 15, 28, 46, 16],

      // 32
      [17, 145, 115],
      [10, 74, 46, 23, 75, 47],
      [10, 54, 24, 35, 55, 25],
      [19, 45, 15, 35, 46, 16],

      // 33
      [17, 145, 115, 1, 146, 116],
      [14, 74, 46, 21, 75, 47],
      [29, 54, 24, 19, 55, 25],
      [11, 45, 15, 46, 46, 16],

      // 34
      [13, 145, 115, 6, 146, 116],
      [14, 74, 46, 23, 75, 47],
      [44, 54, 24, 7, 55, 25],
      [59, 46, 16, 1, 47, 17],

      // 35
      [12, 151, 121, 7, 152, 122],
      [12, 75, 47, 26, 76, 48],
      [39, 54, 24, 14, 55, 25],
      [22, 45, 15, 41, 46, 16],

      // 36
      [6, 151, 121, 14, 152, 122],
      [6, 75, 47, 34, 76, 48],
      [46, 54, 24, 10, 55, 25],
      [2, 45, 15, 64, 46, 16],

      // 37
      [17, 152, 122, 4, 153, 123],
      [29, 74, 46, 14, 75, 47],
      [49, 54, 24, 10, 55, 25],
      [24, 45, 15, 46, 46, 16],

      // 38
      [4, 152, 122, 18, 153, 123],
      [13, 74, 46, 32, 75, 47],
      [48, 54, 24, 14, 55, 25],
      [42, 45, 15, 32, 46, 16],

      // 39
      [20, 147, 117, 4, 148, 118],
      [40, 75, 47, 7, 76, 48],
      [43, 54, 24, 22, 55, 25],
      [10, 45, 15, 67, 46, 16],

      // 40
      [19, 148, 118, 6, 149, 119],
      [18, 75, 47, 31, 76, 48],
      [34, 54, 24, 34, 55, 25],
      [20, 45, 15, 61, 46, 16]
    ];

    var qrRSBlock = function(totalCount, dataCount) {
      var _this = {};
      _this.totalCount = totalCount;
      _this.dataCount = dataCount;
      return _this;
    };

    var _this = {};

    var getRsBlockTable = function(typeNumber, errorCorrectionLevel) {

      switch(errorCorrectionLevel) {
      case QRErrorCorrectionLevel.L :
        return RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 0];
      case QRErrorCorrectionLevel.M :
        return RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 1];
      case QRErrorCorrectionLevel.Q :
        return RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 2];
      case QRErrorCorrectionLevel.H :
        return RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 3];
      default :
        return undefined;
      }
    };

    _this.getRSBlocks = function(typeNumber, errorCorrectionLevel) {

      var rsBlock = getRsBlockTable(typeNumber, errorCorrectionLevel);

      if (typeof rsBlock == 'undefined') {
        throw 'bad rs block @ typeNumber:' + typeNumber +
            '/errorCorrectionLevel:' + errorCorrectionLevel;
      }

      var length = rsBlock.length / 3;

      var list = [];

      for (var i = 0; i < length; i += 1) {

        var count = rsBlock[i * 3 + 0];
        var totalCount = rsBlock[i * 3 + 1];
        var dataCount = rsBlock[i * 3 + 2];

        for (var j = 0; j < count; j += 1) {
          list.push(qrRSBlock(totalCount, dataCount) );
        }
      }

      return list;
    };

    return _this;
  }();

  //---------------------------------------------------------------------
  // qrBitBuffer
  //---------------------------------------------------------------------

  var qrBitBuffer = function() {

    var _buffer = [];
    var _length = 0;

    var _this = {};

    _this.getBuffer = function() {
      return _buffer;
    };

    _this.getAt = function(index) {
      var bufIndex = Math.floor(index / 8);
      return ( (_buffer[bufIndex] >>> (7 - index % 8) ) & 1) == 1;
    };

    _this.put = function(num, length) {
      for (var i = 0; i < length; i += 1) {
        _this.putBit( ( (num >>> (length - i - 1) ) & 1) == 1);
      }
    };

    _this.getLengthInBits = function() {
      return _length;
    };

    _this.putBit = function(bit) {

      var bufIndex = Math.floor(_length / 8);
      if (_buffer.length <= bufIndex) {
        _buffer.push(0);
      }

      if (bit) {
        _buffer[bufIndex] |= (0x80 >>> (_length % 8) );
      }

      _length += 1;
    };

    return _this;
  };

  //---------------------------------------------------------------------
  // qrNumber
  //---------------------------------------------------------------------

  var qrNumber = function(data) {

    var _mode = QRMode.MODE_NUMBER;
    var _data = data;

    var _this = {};

    _this.getMode = function() {
      return _mode;
    };

    _this.getLength = function(buffer) {
      return _data.length;
    };

    _this.write = function(buffer) {

      var data = _data;

      var i = 0;

      while (i + 2 < data.length) {
        buffer.put(strToNum(data.substring(i, i + 3) ), 10);
        i += 3;
      }

      if (i < data.length) {
        if (data.length - i == 1) {
          buffer.put(strToNum(data.substring(i, i + 1) ), 4);
        } else if (data.length - i == 2) {
          buffer.put(strToNum(data.substring(i, i + 2) ), 7);
        }
      }
    };

    var strToNum = function(s) {
      var num = 0;
      for (var i = 0; i < s.length; i += 1) {
        num = num * 10 + chatToNum(s.charAt(i) );
      }
      return num;
    };

    var chatToNum = function(c) {
      if ('0' <= c && c <= '9') {
        return c.charCodeAt(0) - '0'.charCodeAt(0);
      }
      throw 'illegal char :' + c;
    };

    return _this;
  };

  //---------------------------------------------------------------------
  // qrAlphaNum
  //---------------------------------------------------------------------

  var qrAlphaNum = function(data) {

    var _mode = QRMode.MODE_ALPHA_NUM;
    var _data = data;

    var _this = {};

    _this.getMode = function() {
      return _mode;
    };

    _this.getLength = function(buffer) {
      return _data.length;
    };

    _this.write = function(buffer) {

      var s = _data;

      var i = 0;

      while (i + 1 < s.length) {
        buffer.put(
          getCode(s.charAt(i) ) * 45 +
          getCode(s.charAt(i + 1) ), 11);
        i += 2;
      }

      if (i < s.length) {
        buffer.put(getCode(s.charAt(i) ), 6);
      }
    };

    var getCode = function(c) {

      if ('0' <= c && c <= '9') {
        return c.charCodeAt(0) - '0'.charCodeAt(0);
      } else if ('A' <= c && c <= 'Z') {
        return c.charCodeAt(0) - 'A'.charCodeAt(0) + 10;
      } else {
        switch (c) {
        case ' ' : return 36;
        case '$' : return 37;
        case '%' : return 38;
        case '*' : return 39;
        case '+' : return 40;
        case '-' : return 41;
        case '.' : return 42;
        case '/' : return 43;
        case ':' : return 44;
        default :
          throw 'illegal char :' + c;
        }
      }
    };

    return _this;
  };

  //---------------------------------------------------------------------
  // qr8BitByte
  //---------------------------------------------------------------------

  var qr8BitByte = function(data) {

    var _mode = QRMode.MODE_8BIT_BYTE;
    var _data = data;
    var _bytes = qrcode.stringToBytes(data);

    var _this = {};

    _this.getMode = function() {
      return _mode;
    };

    _this.getLength = function(buffer) {
      return _bytes.length;
    };

    _this.write = function(buffer) {
      for (var i = 0; i < _bytes.length; i += 1) {
        buffer.put(_bytes[i], 8);
      }
    };

    return _this;
  };

  //---------------------------------------------------------------------
  // qrKanji
  //---------------------------------------------------------------------

  var qrKanji = function(data) {

    var _mode = QRMode.MODE_KANJI;
    var _data = data;

    var stringToBytes = qrcode.stringToBytesFuncs['SJIS'];
    if (!stringToBytes) {
      throw 'sjis not supported.';
    }
    !function(c, code) {
      // self test for sjis support.
      var test = stringToBytes(c);
      if (test.length != 2 || ( (test[0] << 8) | test[1]) != code) {
        throw 'sjis not supported.';
      }
    }('\u53cb', 0x9746);

    var _bytes = stringToBytes(data);

    var _this = {};

    _this.getMode = function() {
      return _mode;
    };

    _this.getLength = function(buffer) {
      return ~~(_bytes.length / 2);
    };

    _this.write = function(buffer) {

      var data = _bytes;

      var i = 0;

      while (i + 1 < data.length) {

        var c = ( (0xff & data[i]) << 8) | (0xff & data[i + 1]);

        if (0x8140 <= c && c <= 0x9FFC) {
          c -= 0x8140;
        } else if (0xE040 <= c && c <= 0xEBBF) {
          c -= 0xC140;
        } else {
          throw 'illegal char at ' + (i + 1) + '/' + c;
        }

        c = ( (c >>> 8) & 0xff) * 0xC0 + (c & 0xff);

        buffer.put(c, 13);

        i += 2;
      }

      if (i < data.length) {
        throw 'illegal char at ' + (i + 1);
      }
    };

    return _this;
  };

  //=====================================================================
  // GIF Support etc.
  //

  //---------------------------------------------------------------------
  // byteArrayOutputStream
  //---------------------------------------------------------------------

  var byteArrayOutputStream = function() {

    var _bytes = [];

    var _this = {};

    _this.writeByte = function(b) {
      _bytes.push(b & 0xff);
    };

    _this.writeShort = function(i) {
      _this.writeByte(i);
      _this.writeByte(i >>> 8);
    };

    _this.writeBytes = function(b, off, len) {
      off = off || 0;
      len = len || b.length;
      for (var i = 0; i < len; i += 1) {
        _this.writeByte(b[i + off]);
      }
    };

    _this.writeString = function(s) {
      for (var i = 0; i < s.length; i += 1) {
        _this.writeByte(s.charCodeAt(i) );
      }
    };

    _this.toByteArray = function() {
      return _bytes;
    };

    _this.toString = function() {
      var s = '';
      s += '[';
      for (var i = 0; i < _bytes.length; i += 1) {
        if (i > 0) {
          s += ',';
        }
        s += _bytes[i];
      }
      s += ']';
      return s;
    };

    return _this;
  };

  //---------------------------------------------------------------------
  // base64EncodeOutputStream
  //---------------------------------------------------------------------

  var base64EncodeOutputStream = function() {

    var _buffer = 0;
    var _buflen = 0;
    var _length = 0;
    var _base64 = '';

    var _this = {};

    var writeEncoded = function(b) {
      _base64 += String.fromCharCode(encode(b & 0x3f) );
    };

    var encode = function(n) {
      if (n < 0) {
        // error.
      } else if (n < 26) {
        return 0x41 + n;
      } else if (n < 52) {
        return 0x61 + (n - 26);
      } else if (n < 62) {
        return 0x30 + (n - 52);
      } else if (n == 62) {
        return 0x2b;
      } else if (n == 63) {
        return 0x2f;
      }
      throw 'n:' + n;
    };

    _this.writeByte = function(n) {

      _buffer = (_buffer << 8) | (n & 0xff);
      _buflen += 8;
      _length += 1;

      while (_buflen >= 6) {
        writeEncoded(_buffer >>> (_buflen - 6) );
        _buflen -= 6;
      }
    };

    _this.flush = function() {

      if (_buflen > 0) {
        writeEncoded(_buffer << (6 - _buflen) );
        _buffer = 0;
        _buflen = 0;
      }

      if (_length % 3 != 0) {
        // padding
        var padlen = 3 - _length % 3;
        for (var i = 0; i < padlen; i += 1) {
          _base64 += '=';
        }
      }
    };

    _this.toString = function() {
      return _base64;
    };

    return _this;
  };

  //---------------------------------------------------------------------
  // base64DecodeInputStream
  //---------------------------------------------------------------------

  var base64DecodeInputStream = function(str) {

    var _str = str;
    var _pos = 0;
    var _buffer = 0;
    var _buflen = 0;

    var _this = {};

    _this.read = function() {

      while (_buflen < 8) {

        if (_pos >= _str.length) {
          if (_buflen == 0) {
            return -1;
          }
          throw 'unexpected end of file./' + _buflen;
        }

        var c = _str.charAt(_pos);
        _pos += 1;

        if (c == '=') {
          _buflen = 0;
          return -1;
        } else if (c.match(/^\s$/) ) {
          // ignore if whitespace.
          continue;
        }

        _buffer = (_buffer << 6) | decode(c.charCodeAt(0) );
        _buflen += 6;
      }

      var n = (_buffer >>> (_buflen - 8) ) & 0xff;
      _buflen -= 8;
      return n;
    };

    var decode = function(c) {
      if (0x41 <= c && c <= 0x5a) {
        return c - 0x41;
      } else if (0x61 <= c && c <= 0x7a) {
        return c - 0x61 + 26;
      } else if (0x30 <= c && c <= 0x39) {
        return c - 0x30 + 52;
      } else if (c == 0x2b) {
        return 62;
      } else if (c == 0x2f) {
        return 63;
      } else {
        throw 'c:' + c;
      }
    };

    return _this;
  };

  //---------------------------------------------------------------------
  // gifImage (B/W)
  //---------------------------------------------------------------------

  var gifImage = function(width, height) {

    var _width = width;
    var _height = height;
    var _data = new Array(width * height);

    var _this = {};

    _this.setPixel = function(x, y, pixel) {
      _data[y * _width + x] = pixel;
    };

    _this.write = function(out) {

      //---------------------------------
      // GIF Signature

      out.writeString('GIF87a');

      //---------------------------------
      // Screen Descriptor

      out.writeShort(_width);
      out.writeShort(_height);

      out.writeByte(0x80); // 2bit
      out.writeByte(0);
      out.writeByte(0);

      //---------------------------------
      // Global Color Map

      // black
      out.writeByte(0x00);
      out.writeByte(0x00);
      out.writeByte(0x00);

      // white
      out.writeByte(0xff);
      out.writeByte(0xff);
      out.writeByte(0xff);

      //---------------------------------
      // Image Descriptor

      out.writeString(',');
      out.writeShort(0);
      out.writeShort(0);
      out.writeShort(_width);
      out.writeShort(_height);
      out.writeByte(0);

      //---------------------------------
      // Local Color Map

      //---------------------------------
      // Raster Data

      var lzwMinCodeSize = 2;
      var raster = getLZWRaster(lzwMinCodeSize);

      out.writeByte(lzwMinCodeSize);

      var offset = 0;

      while (raster.length - offset > 255) {
        out.writeByte(255);
        out.writeBytes(raster, offset, 255);
        offset += 255;
      }

      out.writeByte(raster.length - offset);
      out.writeBytes(raster, offset, raster.length - offset);
      out.writeByte(0x00);

      //---------------------------------
      // GIF Terminator
      out.writeString(';');
    };

    var bitOutputStream = function(out) {

      var _out = out;
      var _bitLength = 0;
      var _bitBuffer = 0;

      var _this = {};

      _this.write = function(data, length) {

        if ( (data >>> length) != 0) {
          throw 'length over';
        }

        while (_bitLength + length >= 8) {
          _out.writeByte(0xff & ( (data << _bitLength) | _bitBuffer) );
          length -= (8 - _bitLength);
          data >>>= (8 - _bitLength);
          _bitBuffer = 0;
          _bitLength = 0;
        }

        _bitBuffer = (data << _bitLength) | _bitBuffer;
        _bitLength = _bitLength + length;
      };

      _this.flush = function() {
        if (_bitLength > 0) {
          _out.writeByte(_bitBuffer);
        }
      };

      return _this;
    };

    var getLZWRaster = function(lzwMinCodeSize) {

      var clearCode = 1 << lzwMinCodeSize;
      var endCode = (1 << lzwMinCodeSize) + 1;
      var bitLength = lzwMinCodeSize + 1;

      // Setup LZWTable
      var table = lzwTable();

      for (var i = 0; i < clearCode; i += 1) {
        table.add(String.fromCharCode(i) );
      }
      table.add(String.fromCharCode(clearCode) );
      table.add(String.fromCharCode(endCode) );

      var byteOut = byteArrayOutputStream();
      var bitOut = bitOutputStream(byteOut);

      // clear code
      bitOut.write(clearCode, bitLength);

      var dataIndex = 0;

      var s = String.fromCharCode(_data[dataIndex]);
      dataIndex += 1;

      while (dataIndex < _data.length) {

        var c = String.fromCharCode(_data[dataIndex]);
        dataIndex += 1;

        if (table.contains(s + c) ) {

          s = s + c;

        } else {

          bitOut.write(table.indexOf(s), bitLength);

          if (table.size() < 0xfff) {

            if (table.size() == (1 << bitLength) ) {
              bitLength += 1;
            }

            table.add(s + c);
          }

          s = c;
        }
      }

      bitOut.write(table.indexOf(s), bitLength);

      // end code
      bitOut.write(endCode, bitLength);

      bitOut.flush();

      return byteOut.toByteArray();
    };

    var lzwTable = function() {

      var _map = {};
      var _size = 0;

      var _this = {};

      _this.add = function(key) {
        if (_this.contains(key) ) {
          throw 'dup key:' + key;
        }
        _map[key] = _size;
        _size += 1;
      };

      _this.size = function() {
        return _size;
      };

      _this.indexOf = function(key) {
        return _map[key];
      };

      _this.contains = function(key) {
        return typeof _map[key] != 'undefined';
      };

      return _this;
    };

    return _this;
  };

  var createDataURL = function(width, height, getPixel) {
    var gif = gifImage(width, height);
    for (var y = 0; y < height; y += 1) {
      for (var x = 0; x < width; x += 1) {
        gif.setPixel(x, y, getPixel(x, y) );
      }
    }

    var b = byteArrayOutputStream();
    gif.write(b);

    var base64 = base64EncodeOutputStream();
    var bytes = b.toByteArray();
    for (var i = 0; i < bytes.length; i += 1) {
      base64.writeByte(bytes[i]);
    }
    base64.flush();

    return 'data:image/gif;base64,' + base64;
  };

  //---------------------------------------------------------------------
  // returns qrcode function.

  return qrcode;
}();

// multibyte support
!function() {

  qrcode.stringToBytesFuncs['UTF-8'] = function(s) {
    // http://stackoverflow.com/questions/18729405/how-to-convert-utf8-string-to-byte-array
    function toUTF8Array(str) {
      var utf8 = [];
      for (var i=0; i < str.length; i++) {
        var charcode = str.charCodeAt(i);
        if (charcode < 0x80) utf8.push(charcode);
        else if (charcode < 0x800) {
          utf8.push(0xc0 | (charcode >> 6),
              0x80 | (charcode & 0x3f));
        }
        else if (charcode < 0xd800 || charcode >= 0xe000) {
          utf8.push(0xe0 | (charcode >> 12),
              0x80 | ((charcode>>6) & 0x3f),
              0x80 | (charcode & 0x3f));
        }
        // surrogate pair
        else {
          i++;
          // UTF-16 encodes 0x10000-0x10FFFF by
          // subtracting 0x10000 and splitting the
          // 20 bits of 0x0-0xFFFFF into two halves
          charcode = 0x10000 + (((charcode & 0x3ff)<<10)
            | (str.charCodeAt(i) & 0x3ff));
          utf8.push(0xf0 | (charcode >>18),
              0x80 | ((charcode>>12) & 0x3f),
              0x80 | ((charcode>>6) & 0x3f),
              0x80 | (charcode & 0x3f));
        }
      }
      return utf8;
    }
    return toUTF8Array(s);
  };

}();

(function (factory) {
  if (true) {
      !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else // removed by dead control flow
{}
}(function () {
    return qrcode;
}));


/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./resources/js/html/afg/fr/convention_pret.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./resources/js/html/afg/fr/convention_pret.html ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!DOCTYPE html>\r\n<html lang=\"fr\">\r\n\r\n<head>\r\n    <meta charset=\"UTF-8\">\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n    <title>Convention de Crédit Amortissable avec Constitution de Sûretés - Particuliers</title>\r\n    <style>\r\n        :root {\r\n            --primary-color: #000;\r\n            --font-size-small: 7.5pt;\r\n            --font-size-normal: 8.5pt;\r\n            --font-size-large: 10pt;\r\n            --page-margin: 2rem;\r\n            --content-padding: 15px;\r\n        }\r\n\r\n        * {\r\n            margin: 0;\r\n            padding: 0;\r\n            box-sizing: border-box;\r\n        }\r\n\r\n        body {\r\n            font-family: \"Arial Narrow\", Arial, sans-serif;\r\n            font-size: var(--font-size-normal);\r\n            line-height: 1.2;\r\n            color: var(--primary-color);\r\n            font-size: calc(8.5px * 1.33);\r\n        }\r\n\r\n        .print-page {\r\n            width: 210mm;\r\n            height: 297mm;\r\n            margin: 20px auto;\r\n            margin-top: 40px;\r\n            padding: var(--page-margin);\r\n            border: 1px solid #ddd;\r\n            position: relative;\r\n            page-break-after: always;\r\n            display: flex;\r\n            flex-direction: column;\r\n        }\r\n\r\n        @media print {\r\n            body {\r\n                background: white;\r\n            }\r\n\r\n            .print-page {\r\n                margin: 0;\r\n                border: none;\r\n                page-break-after: always;\r\n            }\r\n\r\n            @page {\r\n                size: A4;\r\n                margin: 0;\r\n            }\r\n        }\r\n\r\n        /* Header */\r\n        /* .page-header {\r\n            margin-bottom: 15px;\r\n            \r\n        } */\r\n\r\n        .logo-container {\r\n            width: 80px;\r\n            margin-bottom: 10px;\r\n        }\r\n\r\n        .logo-container img {\r\n            width: 100%;\r\n            height: auto;\r\n        }\r\n\r\n        .title-background {\r\n            background: #ffff00;\r\n\r\n        }\r\n\r\n        .document-title {\r\n            border-top: 2px solid #000;\r\n            border-right: 2px solid #000;\r\n            border-left: 2px solid #000;\r\n            border-bottom: 4px solid #000;\r\n            padding: 8px 15px;\r\n            text-align: center;\r\n            font-weight: bold;\r\n            font-size: var(--font-size-large);\r\n            margin-bottom: 15px;\r\n        }\r\n\r\n        /* Footer */\r\n        .page-footer {\r\n            position: absolute;\r\n            bottom: 5mm;\r\n            left: var(--page-margin);\r\n            right: var(--page-margin);\r\n            text-align: center;\r\n            font-size: var(--font-size-small);\r\n            line-height: 1.3;\r\n            /* border-top: 1px solid #000; */\r\n            /* padding-top: 5px; */\r\n        }\r\n\r\n        .page-number {\r\n            position: absolute;\r\n            bottom: 3mm;\r\n            right: var(--page-margin);\r\n            font-weight: bold;\r\n            font-size: var(--font-size-small);\r\n        }\r\n\r\n        /* Content sections */\r\n        .parties-section {\r\n            margin-bottom: 15px;\r\n        }\r\n\r\n        .border {\r\n            border: 1px solid #000;\r\n        }\r\n\r\n        .party-box {\r\n            padding: 3px;\r\n            line-height: 1.5;\r\n            /* margin-bottom: 10px; */\r\n        }\r\n\r\n        .party-title {\r\n            font-weight: bold;\r\n        }\r\n\r\n        .party-designation {\r\n            margin-top: 5px;\r\n            padding-top: 3px;\r\n        }\r\n\r\n        /* Articles */\r\n        .content-body {\r\n            flex: 1;\r\n        }\r\n\r\n        .article {\r\n            margin-bottom: 15px;\r\n        }\r\n\r\n        .article-title {\r\n            font-weight: bold;\r\n            text-decoration: underline;\r\n            margin-bottom: 8px;\r\n            font-size: var(--font-size-large);\r\n        }\r\n\r\n        .article-content {\r\n            text-align: justify;\r\n            line-height: 1.3;\r\n        }\r\n\r\n        .article-subsection {\r\n            margin-bottom: 10px;\r\n        }\r\n\r\n        .subsection-number {\r\n            font-weight: bold;\r\n            font-size: var(--font-size-small);\r\n        }\r\n\r\n        /* Tables */\r\n        .conditions-table {\r\n            width: 100%;\r\n            border-collapse: collapse;\r\n            /* margin: 10px 0; */\r\n        }\r\n\r\n        .conditions-table td {\r\n            border: 1px solid #000;\r\n            padding: 1px 2px;\r\n            vertical-align: top;\r\n        }\r\n\r\n        .conditions-table .label-col {\r\n            width: 60%;\r\n        }\r\n\r\n        .conditions-table .value-col {\r\n            width: 40%;\r\n        }\r\n\r\n        .teg-table {\r\n            width: 100%;\r\n            border-collapse: collapse;\r\n            margin: 10px 0;\r\n            text-align: center;\r\n        }\r\n\r\n        .teg-table th,\r\n        .teg-table td {\r\n            border: 1px solid #000;\r\n            padding: 4px;\r\n            font-size: var(--font-size-small);\r\n        }\r\n\r\n        .teg-table th {\r\n            background: white;\r\n            font-style: italic;\r\n        }\r\n\r\n        /* Two column layout */\r\n        .two-columns {\r\n            display: grid;\r\n            gap: 20px;\r\n            margin-top: 10px;\r\n            grid-template-columns: repeat(2, 1fr);\r\n        }\r\n\r\n        .column {\r\n            flex: 1;\r\n        }\r\n\r\n        /* Lists */\r\n        .article-list {\r\n            margin-left: 5px;\r\n            margin-bottom: 5px;\r\n        }\r\n\r\n        .article-list li {\r\n            margin-bottom: 5px;\r\n            text-align: justify;\r\n            list-style: none;\r\n        }\r\n\r\n        /* Signature section */\r\n        .signature-section {\r\n            margin-top: 30px;\r\n            padding-top: 15px;\r\n        }\r\n\r\n        .signature-table {\r\n            width: 100%;\r\n            text-align: center;\r\n        }\r\n\r\n        .signature-table td {\r\n            width: 33.33%;\r\n            vertical-align: top;\r\n            padding: 20px 10px;\r\n            border-bottom: 1px solid #000;\r\n        }\r\n\r\n        .signature-title {\r\n            font-weight: bold;\r\n            text-decoration: underline;\r\n            margin-bottom: 10px;\r\n        }\r\n\r\n        .manuscript-mention {\r\n            font-size: var(--font-size-small);\r\n            padding: 5px;\r\n            margin: 10px 0;\r\n            /* border: 1px dashed #000; */\r\n        }\r\n\r\n        /* Highlight boxes */\r\n        .highlight-box {\r\n            padding: 8px;\r\n            border: 1px solid #000;\r\n            margin: 10px 0;\r\n        }\r\n\r\n        /* Service client box */\r\n        .service-client-box {\r\n            border: 3px solid #000;\r\n            border-radius: 10px;\r\n            padding: 10px;\r\n            margin: 10px 0;\r\n        }\r\n\r\n        /* Spacing utilities */\r\n        .mb-5 {\r\n            margin-bottom: 5px;\r\n        }\r\n\r\n        .mb-7 {\r\n            margin-bottom: 7px;\r\n        }\r\n\r\n        .mb-10 {\r\n            margin-bottom: 10px;\r\n        }\r\n\r\n        .mb-15 {\r\n            margin-bottom: 15px;\r\n        }\r\n\r\n        .text-center {\r\n            text-align: center;\r\n        }\r\n\r\n        .text-right {\r\n            text-align: right;\r\n        }\r\n\r\n        .font-bold {\r\n            font-weight: bold;\r\n        }\r\n\r\n        .font-semibold {\r\n            font-weight: 600;\r\n        }\r\n\r\n        .underline {\r\n            text-decoration: underline;\r\n        }\r\n\r\n        /* Print optimizations */\r\n        @media print {\r\n            .print-page {\r\n                box-shadow: none;\r\n            }\r\n\r\n            * {\r\n                -webkit-print-color-adjust: exact !important;\r\n            }\r\n        }\r\n    </style>\r\n</head>\r\n\r\n<body>\r\n    <!-- PAGE 1 -->\r\n    <div class=\"print-page\">\r\n        <div class=\"page-header\">\r\n            <div class=\"logo-container\">\r\n                <img src=\"/images/{{logo}}\" alt=\"AFG Bank Logo\">\r\n            </div>\r\n            <div class=\"document-title\">\r\n                <span class=\"title-background\">\r\n                    CONVENTION DE CREDIT AMORTISSABLE AVEC CONSTITUTION DE SURETES –PARTICULIERS\r\n                </span>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"content-body\">\r\n            <div class=\"parties-section\">\r\n                <h3 class=\"font-bold mb-15\" style=\"font-size: 10px; margin-bottom: 2rem\">Entre les soussignés :</h3>\r\n\r\n                <div class=\"party-box border\">\r\n                    <div class=\"\">\r\n                        I- <span class=\"party-title \"> <span class=\"title-background\"> {{banque}} </span> en abrégé «\r\n                            <span class=\"title-background\"> {{abreviation}}</span> »</span>, <span\r\n                            class=\"title-background\">{{statut_juridique}}</span> au capital social de <span\r\n                            class=\"title-background\">{{capital_social}}</span> {{devise}} dont le siège social est à <span\r\n                            class=\"title-background\">{{siege}}</span>, boite postale <span\r\n                            class=\"title-background\">{{boite_postale}}</span>, immatriculée au Registre du Commerce et\r\n                        du Crédit Mobilier de <span class=\"title-background\">{{lieu_immatriculation}}</span> le <span\r\n                            class=\"title-background\">{{date_immatriculation}}</span> sous le numéro <span\r\n                            class=\"title-background\">{{immatriculation}}</span>.\r\n                    </div>\r\n                    <div class=\"party-designation\">\r\n                        Ci-après dénommée la \"Banque\" d'une part/ de première part;\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"party-title\">ET :</div>\r\n                <div class=\"party-box border\">\r\n                    <div>\r\n                        <span class=\"font-bold\">II- {{titre_client}} <span class=\"title-background\">{{nom_client}}</span>\r\n                        </span><br>\r\n                        Né le <span class=\"title-background\">{{date_naissance}}</span> à <span\r\n                            class=\"title-background\">{{lieu_naissance}}</span> de <span\r\n                            class=\"title-background\">{{nom_du_pere}}</span> et de <span\r\n                            class=\"title-background\">{{nom_de_la_mere}}</span><br>\r\n                        Demeurant à <span class=\"title-background\">{{adresse}}</span>; BP : <span\r\n                            class=\"title-background\">{{boite_postale_client}}</span>; Téléphone : <span\r\n                            class=\"title-background\">{{telephone}}</span>; <span class=\"font-bold\">email\r\n                            :</span> <span class=\"title-background\">{{email}}</span><br>\r\n                        Fonction : <span class=\"title-background\">{{fonction}}</span> Employeur : <span\r\n                            class=\"title-background\">{{employeur}}</span> BP : <span\r\n                            class=\"title-background\">{{boite_postale_employeur}}</span>; <span\r\n                            class=\"title-background\">{{titre_identification}}</span> N° <span\r\n                            class=\"title-background\">{{num_identification}}</span> Délivré(e) le <span\r\n                            class=\"title-background\">{{date_delivrance}}</span> à <span\r\n                            class=\"title-background\">{{lieu_delivrance}}</span>\r\n                    </div>\r\n                    <div class=\"party-designation mb-5\" style=\"text-align: end;\">\r\n                        Ci-dénommé(e) <span class=\"font-bold\"> \"l'EMPRUNTEUR\" </span> d'autre part/de deuxième part ;\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"party-box\">\r\n                    <div class=\"\">ET:</div>\r\n                    <div>\r\n                        {{civilite_caution}} <span class=\"title-background\">{{nom_caution}}</span><br>\r\n                        Né le <span class=\"title-background\">{{date_naissance_caution}}</span> à <span\r\n                            class=\"title-background\">{{lieu_naissance_caution}}</span> De <span\r\n                            class=\"title-background\">{{nom_pere_caution}}</span> Et de <span\r\n                            class=\"title-background\">{{nom_mere_caution}}</span><br>\r\n                        Demeurant à <span class=\"title-background\">{{adresse_caution}}</span>; BP : <span\r\n                            class=\"title-background\">{{bp_caution}}</span>; Téléphone : <span\r\n                            class=\"title-background\">{{telephone_caution}}</span>; <span class=\"font-bold\">email\r\n                            :</span><span class=\"title-background\">{{email_caution}}</span><br>\r\n                        Fonction : <span class=\"title-background\">{{fonction_caution}}</span> Employeur : <span\r\n                            class=\"title-background\">{{employeur_caution}}</span> BP : <span\r\n                            class=\"title-background\">{{bp_employeur_caution}}</span>; Titre d'Identification : <span\r\n                            class=\"title-background\">{{type_piece_identite_caution}}</span> N° <span\r\n                            class=\"title-background\">{{num_piece_identite_caution}}</span> Délivré(e) le <span\r\n                            class=\"title-background\">{{date_delivrance_piece_identite_caution}}</span> à <span\r\n                            class=\"title-background\">{{lieu_delivrance_piece_identite_caution}}</span>\r\n                    </div>\r\n                    <div class=\"party-designation border mb-10\" style=\"padding: 5px; text-align: right;\">\r\n                        désigné(e) : la <span class=\"font-bold\">\"Caution personnelle et solidaire\"</span> , de troisième\r\n                        part ;\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"party-box font-semibold border mb-15\">\r\n                    <div class=\"party-title\">ET :</div>\r\n                    <div>\r\n                        Mr./Mrs <span class=\"title-background\">{{nom_constituant}}</span><br>\r\n                        Né le <span class=\"title-background\">{{date_naissance_constituant}}</span> à <span\r\n                            class=\"title-background\">{{lieu_naissance_constituant}}</span> de <span\r\n                            class=\"title-background\">{{nom_pere_constituant}}</span> et de <span\r\n                            class=\"title-background\">{{nom_mere_constituant}}</span><br>\r\n                        Demeurant à <span class=\"title-background\">{{adresse_constituant}}</span> B.P: <span\r\n                            class=\"title-background\">{{boite_postale_constituant}}</span> Téléphone: <span\r\n                            class=\"title-background\">{{telephone_constituant}}</span> <span class=\"font-bold\">email\r\n                            :</span><span class=\"title-background\">{{email_constituant}}</span> Fonction: <span\r\n                            class=\"title-background\">{{fonction_constituant}}</span><br>\r\n                        Employeur <span class=\"title-background\">{{employeur_constituant}}</span> B.P: <span\r\n                            class=\"title-background\">{{boite_postale_employeur_constituant}}</span> <span\r\n                            class=\"title-background\">{{type_piece_identite_constituant}}</span> N°: <span\r\n                            class=\"title-background\">{{num_piece_identite_constituant}}</span> Délivré(e) le <span\r\n                            class=\"title-background\">{{date_delivrance_piece_identite_constituant}}</span> à <span\r\n                            class=\"title-background\">{{lieu_delivrance_piece_identite_constituant}}</span>\r\n                    </div>\r\n                    <div class=\"party-designation\">\r\n                        Ci-après dénommée <span class=\"font-bold\">\"LE CONSTITUANT\"</span> de troisième part/ de\r\n                        quatrième part ;\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"party-box border font-semibold\">\r\n                    <div>\r\n                        {{titre_client}} <span class=\"title-background\">{{nom_cedant}}</span> Né le <span\r\n                            class=\"title-background\">{{date_naissance_cedant}}</span> à <span\r\n                            class=\"title-background\">{{lieu_naissance_cedant}}</span> de <span\r\n                            class=\"title-background\">{{nom_du_pere_cedant}}</span> et de <span\r\n                            class=\"title-background\">{{nom_de_la_mere_cedant}}</span> Demeurant à <span\r\n                            class=\"title-background\">{{adresse_cedant}}</span>; BP : <span\r\n                            class=\"title-background\">{{boite_postale_cedant}}</span>; Canal de communication Téléphonique : <span\r\n                            class=\"title-background\">{{telephone_cedant}}</span>; Canal de communication électronique\r\n                        (email) <span class=\"title-background\">{{email_cedant}}</span> Fonction : <span\r\n                            class=\"title-background\">{{fonction_cedant}}</span> Employeur : <span\r\n                            class=\"title-background\">{{employeur_cedant}}</span> : <span\r\n                            class=\"title-background\">{{boite_postale_employeur_cedant}}</span>; Titre d'Identification : <span\r\n                            class=\"title-background\">{{titre_identification_cedant}}</span>; N° <span\r\n                            class=\"title-background\">{{num_identification_cedant}}</span> Délivré(e) le <span\r\n                            class=\"title-background\">{{date_delivrance_cedant}}</span> à <span\r\n                            class=\"title-background\">{{lieu_delivrance_cedant}}</span>\r\n                    </div>\r\n                    <div class=\"party-designation\">\r\n                        Ci-après dénommée <span class=\"font-bold\">\"LE CEDANT\"</span> de troisième part/ de quatrième\r\n                        part;\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"text-center mb-15\">\r\n                <h3 class=\"font-bold underline\">IL A ETE CONVENU ET ARRETE CE QUI SUIT</h3>\r\n                <hr style=\"border: 1px solid #000; margin-top: 10px;\">\r\n            </div>\r\n\r\n            <div class=\"two-columns\">\r\n\r\n                <div class=\"column\">\r\n                    <div class=\"article\">\r\n                        <div class=\"article-title\">Article 1 : Du crédit</div>\r\n                        <div class=\"article-content\">\r\n                            <div class=\"article-subsection\">\r\n                                <span class=\"subsection-number\">1.1 -</span> Suivant sa demande, la BANQUE accorde par\r\n                                la présente à l'Emprunteur qui y consent, un crédit amortissable d'un montant de <span\r\n                                    class=\"title-background\">{{montant_credit}}</span> {{devise}} (Le Crédit), valable et\r\n                                remboursable suivant les modalités ci-dessous définies.\r\n                            </div>\r\n                            <div class=\"article-subsection\">\r\n                                <span class=\"subsection-number\">1.2 –</span> L'Emprunteur reconnaît que les termes,\r\n                                conditions et modalités du présent financement lui ont été régulièrement communiqués\r\n                                pour son acceptation préalable.\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"article\">\r\n                        <div class=\"article-title\">Article 2 : Conditions Particulières</div>\r\n                        <div class=\"article-content\">\r\n                            <div class=\"article-subsection\">\r\n                                <span class=\"subsection-number\">2.1 -</span> Le Crédit est consenti aux termes et\r\n                                conditions ci-après, auxquelles l'Emprunteur s'oblige irrévocablement :\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"column\">\r\n                    <table class=\"conditions-table\">\r\n                        <tr>\r\n                            <td class=\"label-col\"><strong>Type de financement :</strong></td>\r\n                            <td class=\"value-col\"><span class=\"title-background\">{{type_financement}} ( {{code_type_financement}} )</span></td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td class=\"label-col\"><strong>Objet :</strong></td>\r\n                            <td class=\"value-col\"><span class=\"title-background\">{{objet}}</span></td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td class=\"label-col\"><strong>Montant :</strong></td>\r\n                            <td class=\"value-col\"><span class=\"title-background\">{{montant_credit}} {{devise}}</span></td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td class=\"label-col\"><strong>Durée :</strong></td>\r\n                            <td class=\"value-col\"><span class=\"title-background\">{{duree}} mois</span></td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td class=\"label-col\"><strong>Taux d'intérêts annuel :</strong></td>\r\n                            <td class=\"value-col\"><span class=\"title-background\">{{taux}} %</span></td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td class=\"label-col\"><strong>Frais de dossier et de mise en place :</strong></td>\r\n                            <td class=\"value-col\"><span class=\"title-background\">{{frais}} {{devise}}</span></td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td class=\"label-col\"><strong>Cash coll :</strong></td>\r\n                            <td class=\"value-col\"><span class=\"title-background\">{{cashcoll}} {{devise}}</span></td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td class=\"label-col\"><strong>Prime d'assurance Décès Emprunteur :</strong></td>\r\n                            <td class=\"value-col\"><span class=\"title-background\">{{prime}} {{devise}}</span></td>\r\n                        </tr>\r\n                    </table>\r\n                    <div class=\"article-subsection\">\r\n                        <span class=\"subsection-number\">2.2 -</span> L'Emprunteur reconnaît que dans le cadre de son\r\n                        offre de crédit, la Banque lui a préalablement communiqué les informations complètes sur le\r\n                        coût, les critères d'éligibilité, les conditions et modalités de financement, afin de lui\r\n                        permettre de déterminer si le crédit proposé est adapté à ses besoins et à sa situation\r\n                        financière.\r\n                    </div>\r\n                </div>\r\n\r\n\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"page-footer\">\r\n            <strong>{{banque}}</strong><br>\r\n            Siège social : <span class=\"title-background\">{{siege_filiale}}</span>, \r\n            B.P. : <span class=\"title-background\">{{boite_postale}}</span>, \r\n            Tél : <span class=\"title-background\">{{numero_filiale}}</span> | \r\n            SA au capital social de : <span class=\"title-background\">{{capital_social}}</span> {{devise}} | \r\n            <span class=\"title-background\">{{agrement}}</span> | <span class=\"title-background\">{{siteweb}}</span>\r\n        </div>\r\n        <div class=\"page-number\">1</div>\r\n    </div>\r\n\r\n    <!-- PAGE 2 -->\r\n    <div class=\"print-page page-2\">\r\n        <div class=\"content-body\">\r\n\r\n\r\n            <div class=\"two-columns\">\r\n                <div class=\"column\">\r\n                    <div class=\"article\">\r\n                        <div class=\"article-content\" style=\"margin-bottom: 40px;\">\r\n                            <div class=\"article-subsection\">\r\n                                <span class=\"subsection-number\">2.3 –</span> L'emprunteur dispose d'un droit de\r\n                                rétractation après réflexion, qu'il peut exercer dans les trois (03 jours suivant la\r\n                                conclusion de la présente convention. Ce délai est porté à quatorze (14) jours\r\n                                calendaires en cas de démarchage bancaire. L'utilisation du Crédit pendant le cours du\r\n                                délai de rétractation vaut irrévocablement acceptation des termes et conditions du\r\n                                financement. En cas de rétractation dans les délais susdits, l'annulation du Crédit\r\n                                n'est assujettie à aucune pénalité.\r\n                            </div>\r\n                            <div class=\"article-subsection\">\r\n                                <span class=\"subsection-number\">2.4 –</span> L'Emprunteur reconnaît en outre que les\r\n                                Taux Effectifs Globaux (TEG) et d'Usure ci-après ont été portés à sa connaissance :\r\n                            </div>\r\n                        </div>\r\n\r\n                        <table class=\"teg-table\">\r\n                            <tr>\r\n                                <th>Montant <br> Facilité</th>\r\n                                <th>Taux <br> d'intérêts</th>\r\n                                <th>Frais de <br> dossier</th>\r\n                                <th>TEG <br> Annuel</th>\r\n                                <th>TEG <br> Périodique</th>\r\n                                <th>Taux <br> d'Usure</th>\r\n                            </tr>\r\n                            <tr>\r\n                                <td><span class=\"title-background\">{{montant_credit}} {{devise}}</span></td>\r\n                                <td><span class=\"title-background\">{{taux}} %</span></td>\r\n                                <td><span class=\"title-background\">{{frais}} {{devise}}</span></td>\r\n                                <td><span class=\"title-background\">{{teg}} %</span></td>\r\n                                <td><span class=\"title-background\">{{tegperiodique}} %</span></td>\r\n                                <td><span class=\"title-background\">{{tauxusure}} %</span></td>\r\n                            </tr>\r\n                        </table>\r\n                    </div>\r\n                    <div class=\"article\" style=\"margin-bottom: 40px;\">\r\n                        <div class=\"article-title\">Article 3 : Intérêts et Commissions</div>\r\n                        <div class=\"article-content\">\r\n                            <div class=\"article-subsection\">\r\n                                <span class=\"subsection-number\">3.1 –</span> Le Crédit est productif d'intérêts au Taux\r\n                                de <span class=\"title-background\">{{taux}}</span> % HT ou TTC par an. La Taxe\r\n                                sur la Valeur Ajoutée (TVA), calculée au taux légal en vigueur, s'ajoutera aux intérêts\r\n                                et commissions prévus ci-dessus.\r\n                            </div>\r\n                            <div class=\"article-subsection\">\r\n                                <span class=\"subsection-number\">3.2 –</span> L'Emprunteur s'engage à honorer\r\n                                scrupuleusement l'échéancier de remboursement du Crédit. Toute somme impayée à son\r\n                                échéance sera productive des intérêts de retard calculés au taux de découvert standard\r\n                                de dix-sept pourcent (17%) hors taxes conformément aux conditions générales de Banque\r\n                                (Taux d'Intérêt Standard).\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"article\">\r\n                        <div class=\"article-title\">Article 4 : Déblocage et Remboursement</div>\r\n                        <div class=\"article-content\">\r\n                            <div class=\"article-subsection\">\r\n                                <div class=\"subsection-title mb-5\">\r\n                                    <span class=\"subsection-number\">4.1 –</span> <strong>Modalités de\r\n                                        déblocage</strong><br>\r\n                                </div>\r\n                                Dès le recueil exhaustif et effectif de la documentation exigible, le Crédit sera\r\n                                débloqué au profit de l'Emprunteur par le crédit de son compte <span\r\n                                    class=\"title-background\">{{numero_de_compte}}</span> ;<br>\r\n                                Si des avances sont consenties ou promises par la BANQUE, celle-ci pourra exiger que des\r\n                                effets soient tirés, souscrits ou acceptés à son ordre par le BENEFICIAIRE.<br>\r\n                                Le transfert de la propriété de ces effets au profit de la BANQUE produira les\r\n                                conséquences prévues à l'article 1, dont les dispositions seront applicables à la suite\r\n                                de l'opération.\r\n                            </div>\r\n                            <div class=\"article-subsection\">\r\n                                <div class=\"subsection-title mb-5\"><span class=\"subsection-number\">4.2 –</span>\r\n                                    <strong>Modalités de remboursement</strong><br></div>\r\n                                Le Crédit sera remboursé en <span class=\"title-background\">{{duree}}</span>\r\n                                (<span class=\"title-background\">{{nombre_echeances_lettre}}</span>) mensualités\r\n                                consécutives de  <span class=\"title-background\">{{montant_echeance}} {{devise}}</span> (<span\r\n                                    class=\"title-background\">{{montant_echeance_lettre}}</span>) conformément au tableau\r\n                                d'amortissement établi par les parties et communiqué à l'Emprunteur. A cet effet,\r\n                                l'Emprunteur constituera provision suffisante sur le compte N° <span\r\n                                    class=\"title-background\">{{numero_de_compte}}</span>, qu'il autorise la\r\n                                Banque de débiter pour le service de la dette.\r\n                            </div>\r\n                            <div class=\"article-subsection\">\r\n                                <div class=\"subsection-title mb-5\"><span class=\"subsection-number\">4.3 –</span>\r\n                                    <strong>Remboursement anticipé</strong><br></div>\r\n                                <strong>L'Emprunteur aura la faculté de rembourser par anticipation tout ou partie des sommes\r\n                                empruntées, moyennant le paiement d'une pénalité de remboursement anticipé (PRA)\r\n                                représentant deux pourcent (2%) de l'encours anticipé.</strong> Toutefois, il est précisé que la\r\n                                PRA ne devra pas dépasser le cumul des intérêts non courus. Tout remboursement anticipé\r\n                                partiel sera imputé sur les échéances du tableau d'amortissement en ordre chronologique\r\n                                inversé et ainsi sur les échéances les plus lointaines, la durée du Crédit étant réduite\r\n                                à due concurrence.\r\n                            </div>\r\n                            <div class=\"article-subsection\">\r\n                                <div class=\"subsection-title mb-5\"><span class=\"subsection-number\">4.4 –</span>\r\n                                    <strong>Exigibilité anticipée</strong><br></div>\r\n                                La BANQUE pourra par notification écrite à l'Emprunteur, exiger le remboursement\r\n                                anticipé de l'encours du Crédit dans l'un quelconque des cas suivants :\r\n                                <ul class=\"article-list\">\r\n                                    <li>a) en cas de défaut de paiement à bonne date par l'Emprunteur d'une somme\r\n                                        quelconque due en vertu de la présente convention ;</li>\r\n                                    <li>b) en cas de survenance d'un quelconque événement, affectant la situation\r\n                                        financière ou professionnelle de l'Emprunteur, et susceptible menacer le\r\n                                        remboursement du Crédit, notamment en cas de perte d'emploi, suspension, mise en\r\n                                        disponibilité, lock-out ;</li>\r\n                                    <li>c) en cas de survenance d'un quelconque événement susceptible d'affecter la\r\n                                        légalité ou la validité du Crédit, ou de la documentation ;</li>\r\n                                </ul>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"column\">\r\n                    <div class=\"article\">\r\n                        <div class=\"article-content\">\r\n                            <div class=\"article-subsection\">\r\n                                <ul class=\"article-list\">\r\n                                    <li>d) en cas de cessation d'exploitation, de redressement judiciaire ou de\r\n                                        liquidation amiable ou judiciaire de l'Employeur de l'Emprunteur ;</li>\r\n                                    <li>e) en cas de défaillance de l'Emprunteur dans l'exécution d'obligations\r\n                                        souscrites avec des tiers et/ou toute accélération ou exigibilité anticipée\r\n                                        d'une obligation de l'Emprunteur vis à vis d'un tiers ;</li>\r\n                                    <li>f) en cas de clôture du compte, de dé-domiciliation frauduleuse des revenus,\r\n                                        d'inexécution des termes de l'Attestation de Virement Irrévocable par\r\n                                        l'Employeur ;</li>\r\n                                    <li>g) En cas de production ou d'usage de faux documents ;</li>\r\n                                    <li>h) En cas de disparition de l'objet du financement ou de la source de\r\n                                        remboursement, notamment en cas de perte d'emploi non-suivi de l'accession, dans\r\n                                        le délai d'un (01) mois, à un nouvel emploi ;</li>\r\n                                    <li>i) Si l'une quelconque des déclarations, voire tout document de financement ou\r\n                                        de sûreté, s'avère frauduleux, erroné ou inexact ;</li>\r\n                                </ul>\r\n                                <p>Les paiements ou régularisations postérieurs ne feront pas obstacle à cette\r\n                                    exigibilité.</p>\r\n                            </div>\r\n\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"article\">\r\n                        <div class=\"article-content\">\r\n                            <div class=\"article-subsection\">\r\n                                <span class=\"subsection-number\">4.5 –</span> <strong>Ordre d'affectation des\r\n                                    paiements</strong><br>\r\n                                En l'absence de Défaut, l'ordre d'affectation des remboursements est le suivant :\r\n                                <ul class=\"article-list\">\r\n                                    <li>a) Premièrement, taxes et impôts exigibles ;</li>\r\n                                    <li>b) Deuxièmement, commissions, frais et autres accessoires ;</li>\r\n                                    <li>c) Troisièmement, intérêts de retard exigibles au titre du Crédit ainsi que\r\n                                        toute somme due et impayée à sa date d'exigibilité ;</li>\r\n                                    <li>d) Quatrièmement, intérêts du Crédit (à l'exception des intérêts de retard) ;\r\n                                    </li>\r\n                                    <li>e) Cinquièmement, remboursement du crédit en capital exigible.</li>\r\n                                    <li>f) Sixièmement, remboursement anticipé volontaire du Crédit.</li>\r\n                                </ul>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"article\">\r\n                        <div class=\"article-title\">Article 5 : Privilèges, documentation</div>\r\n                        <div class=\"article-content\">\r\n                            <div class=\"article-subsection\">\r\n                                <span class=\"subsection-number\">5.1 –</span> <strong>Documentation</strong><br>\r\n                                L'EMPRUNTEUR s'engage à la sûreté et garantie de remboursement du Crédit à constituer et\r\n                                produire à la BANQUE, préalablement à la mise en place de la ligne de crédit, et en la\r\n                                forme satisfaisante, les garanties suivantes :\r\n                                <ul class=\"article-list\">\r\n                                    <li>- Une demande de financement</li>\r\n                                    <li>- Une attestation de service ou contrat de travail ;</li>\r\n                                    <li>- Trois derniers bulletins de paie</li>\r\n                                    <li>- Une Attestation de Virement Irrévocable des salaires, régulièrement délivrée\r\n                                        par l'employeur ;</li>\r\n                                    <li>- Un bulletin individuel d'adhésion au contrat d'Assurance-invalidité décès\r\n                                        Groupe Emprunteur, dûment approuvé par l'Assureur ;</li>\r\n                                    <li>- Un formulaire d'adhésion au fonds de garantie dûment souscrit par l'Emprunteur\r\n                                        ;</li>\r\n                                    <li>- Un billet à ordre d'un montant de <span\r\n                                            class=\"title-background\">{{billett_ordre_mt}}</span> {{devise}} (<span\r\n                                            class=\"title-background\">{{billett_ordre_mt_lettres}}</span> FRANCS)\r\n                                        représentant le montant total de la créance en principal, intérêts et toute taxe\r\n                                        en vigueur, conformément au tableau d'amortissement ;</li>\r\n                                </ul>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"article-content\">\r\n                            <div class=\"article-subsection\">\r\n                                <span class=\"subsection-number\">5.2 –</span> <strong>Domiciliation irrévocable des\r\n                                    revenus et salaires</strong><br>\r\n                                En sûreté et à la garantie du remboursement du Crédit, l'Emprunteur déclare domicilier\r\n                                irrévocablement l'intégralité de ses salaires, avantages, indemnités et autres droits\r\n                                sociaux sur son compte au Relevé d'identité Bancaire ci-après :\r\n                            </div>\r\n\r\n                            <div class=\"highlight-box text-center\">\r\n                                <span class=\"title-background\">{{rib}}</span>\r\n                            </div>\r\n\r\n                            <p>\r\n                                Tant que l'Emprunteur demeurera tenu envers la Banque d'une quelconque dette, la\r\n                                domiciliation ci-dessus subsistera, nonobstant le changement de profession ou\r\n                                d'employeur. Aux effets ci-dessus, l'Emprunteur s'oblige à produire spontanément, dès le\r\n                                changement d'emploi, une Attestation de Virement Irrévocable de ses salaires, avantages\r\n                                et droits sociaux sur le compte de domiciliation, délivrée par nouvel employeur.\r\n                            </p>\r\n\r\n\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"page-footer\">\r\n            <strong>{{banque}}</strong><br>\r\n            Siège social : <span class=\"title-background\">{{siege_filiale}}</span>, \r\n            B.P. : <span class=\"title-background\">{{boite_postale}}</span>, \r\n            Tél : <span class=\"title-background\">{{numero_filiale}}</span> | \r\n            SA au capital social de : <span class=\"title-background\">{{capital_social}}</span> {{devise}} | \r\n            <span class=\"title-background\">{{agrement}}</span> | <span class=\"title-background\">{{siteweb}}</span>\r\n        </div>\r\n        <div class=\"page-number\">2</div>\r\n    </div>\r\n\r\n    <!-- PAGE 3 -->\r\n    <div class=\"print-page\">\r\n        <div class=\"content-body\">\r\n            <div class=\"two-columns\">\r\n                <div class=\"column\">\r\n                    <div class=\"article\">\r\n                        <div class=\"article-content\">\r\n                            <div class=\"article-subsection\">\r\n                                <p>\r\n                                    La Banque reconnaît que l'Emprunteur a satisfait à cette obligation, en lui\r\n                                    communiquant dès à présent une ATTESTATION DE VIREMENT IRREVOCABLE délivrée par son\r\n                                    employeur sus désigné.\r\n                                </p>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"article\">\r\n                        <div class=\"article-title\">Article 6 : Suretés constituées</div>\r\n                        <div class=\"article-content\">\r\n                            <p>\r\n                                Afin de garantir le paiement du crédit consenti dans le cadre de la présente convention,\r\n                                l'emprunteur s'engage à constituer les suretés ci-après énumérées :\r\n                            </p>\r\n                            <!-- <ul class=\"article-list\">\r\n                                <li>- NANTISSEMENT COMPTE EPARGNE</li>\r\n                                <li>- NANTISSEMENT BON DE CAISSE</li>\r\n                                <li>-NANTISSEMENT DE DEPOT A TERME</li>\r\n                                <li>- CAUTIONNEMENT SOLIDAIRE</li>\r\n                                <li>-TRANSFERT FIDUCIAIRE (CASH COLL <span\r\n                                        class=\"title-background\">{{pourcentage_cashcoll}}</span>%)</li>\r\n                            </ul> -->\r\n                            {{selected_garanties}}\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"article\">\r\n                        <div class=\"article-content\">\r\n                            <div class=\"article-subsection\">\r\n                                <span class=\"subsection-number\">6.1-</span> \r\n                                <strong>Nantissement compte épargne {{is_nantissement_compte_epargne_applicable}} </strong><br>\r\n                                En sûreté et à la garantie du remboursement intégral du crédit', le Constituant affecte\r\n                                irrévocablement en nantissement, au profit de la Banque, un montant de <span\r\n                                    class=\"title-background\">{{montant_nantissement_epargne}}</span> {{devise}} qu'il détient\r\n                                sur le Compte N°<span class=\"title-background\">{{numero_compte_nanti}}</span> ouvert\r\n                                dans les livres de la Banque (Le Compte Nanti), conformément aux dispositions des\r\n                                articles 127 et suivants de l'Acte Uniforme OHADA relatif aux Sûretés, au profit de la\r\n                                Banque.\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"article\">\r\n                        <div class=\"article-content\">\r\n                            <p class=\"mb-10\">\r\n                                - La Banque procèdera, le cas échéant, aux frais du Constituant qui s'y engage, à toutes\r\n                                les formalités nécessaires à la constitution, à la validité, à l'opposabilité et à\r\n                                l'efficacité du Nantissement par son inscription et, le cas échéant, son enregistrement\r\n                                auprès du Registre du Commerce et du Crédit Mobilier compétent.\r\n                            </p>\r\n                            <p class=\"mb-10\">\r\n                                La Banque procèdera en outre, à tout moment pendant la durée de la Convention, aux frais\r\n                                du Constituant qui s'y engage, autant que nécessaire, au renouvellement de l'inscription\r\n                                du Nantissement, et à toute autre formalité nécessaire pour en assurer la validité,\r\n                                l'opposabilité et l'efficacité, dans les conditions et délais légaux en vigueur.\r\n                            </p>\r\n                            <p class=\"mb-10\">\r\n                                Conformément aux dispositions de l’article 58 de l’Acte Uniforme sur les Sûretés,\r\n                                l’inscription du nantissement conservera les droits de la Banque pendant une durée\r\n                                de dix (10) ans à compter de l’inscription au RCCM.\r\n                            </p>\r\n                            <p class=\"mb-10\">\r\n                                Tous pouvoirs sont donnés au porteur d’un original, d’une copie ou d’un extrait de\r\n                                la Convention pour l’accomplissement de toute formalité.\r\n                            </p>\r\n                            <p class=\"mb-10\">\r\n                                - Tous droits détenus par le Constituant sur toutes sommes versées au crédit du\r\n                                Compte nanti sont automatiquement compris dans l'assiette du nantissement.\r\n                            </p>\r\n                            <p class=\"mb-10\">\r\n                                Le nantissement résultant de la présente Convention aura notamment pour effet\r\n                                de rendre inopérantes toute action ou saisie effectuée par tous tiers sur le Compte\r\n                                Nanti.\r\n                            </p>\r\n                            <p class=\"mb-10\">\r\n                                Le Nantissement s'ajoutera à toutes sûretés dont bénéficie la Banque, et ne\r\n                                pourra en aucun cas porter atteinte à, ni être compromis ou affecté, par lesdites\r\n                                sûretés.\r\n                            </p>\r\n                            <p class=\"mb-10\">\r\n                                Le Constituant renonce à se prévaloir des droits dont il pourrait être investi aux\r\n                                fins d’exiger de la Banque qu’elle procède ou exerce toute Sûreté à l’encontre de\r\n                                toute autre personne avant de procéder à l’exercice des droits constitués aux\r\n                                termes de la présente convention et de tout droit qu’elle pourrait avoir d’exiger\r\n                                que la Banque exerce ses droits dans un ordre spécifique au titre de la présente\r\n                                convention.\r\n                            </p>\r\n                            <p class=\"mb-10\">\r\n                                La présente convention est opposable de plein droit à la Banque conformément\r\n                                à l'article 132 de l'Acte Uniforme sur les Sûretés, l’intervention de la Banque\r\n                                en qualité de Bénéficiaire dispensant les parties des formalités de notification\r\n                                prévues à l'article 132 de l'Acte Uniforme sur les Sûretés.\r\n                            </p>\r\n                            <p class=\"mb-10\">\r\n                                Conformément à l’article 138 de l’Acte Uniforme sur les Sûretés, tant qu’une\r\n                                somme quelconque restera due par le Constituant à la Banque consécutivement\r\n                                à l’utilisation de la Facilité Garantie, le compte numéro\r\n                                <span class=\"title-background\">{{ numero_compte_nanti }}</span> . demeurera nanti en faveur de\r\n                                la Banque, et\r\n                                son solde ne pourra être payé par la Banque que dans les conditions ci-définies\r\n                            </p>\r\n\r\n                        </div>\r\n                    </div>\r\n\r\n                </div>\r\n\r\n                <div class=\"column\">\r\n                    <div class=\"article\">\r\n\r\n                        <p class=\"mb-10\">\r\n                            Conformément à l’article 133 de l’Acte Uniforme sur les Sûretés, la Banque\r\n                            s'engage à bloquer et conserver toutes sommes inscrites au crédit du Compte\r\n                            Nanti, dans la limite de la Créance Nantie\r\n                        </p>\r\n                        <p class=\"mb-10\">\r\n                            - Le Constituant s'engage, aux termes de la Convention : <br>\r\n                            (a) à ne pas céder, transférer ou autrement disposer, ou permettre ou consentir\r\n                            que soit cédé, transféré ou qu'il soit disposé du Compte nanti, du Solde, ou de\r\n                            l'un quelconque de ses droits y afférents, au bénéfice d'une autre partie que le\r\n                            Bénéficiaire sans l'accord préalable et écrit de ce dernier ;\r\n                        </p>\r\n                        <p class=\"mb-10\">\r\n                            (b) à exécuter toute mesure ou à signer tout document ou acte requis ou qui\r\n                            pourrait, le cas échéant, être requis par le Bénéficiaire, en vue de l'exécution du\r\n                            Nantissement, ou à toute autre fin pour les besoins de la convention ;\r\n                        </p>\r\n                        <p class=\"mb-10\">\r\n                            (c) à supporter sur simple demande du Bénéficiaire, l'ensemble des dépenses et\r\n                            frais raisonnables, y compris sans caractère limitatif, les frais de conseils que la\r\n                            Banque aurait exposé au titre de la convention ou à l'occasion de la constitution,\r\n                            défense, préservation ou de la réalisation du nantissement ;\r\n                        </p>\r\n                        <p class=\"mb-10\">\r\n                            (d) à maintenir le Compte Nanti ouvert dans les livres de la Banque aussi\r\n                            longtemps que l’intégralité des Obligations Garanties ne sera pas éteinte.\r\n                        </p>\r\n                        <p class=\"mb-10\">\r\n                            (e) à ne pas constituer de sûreté ou permettre la prise de nantissement, gage ou\r\n                            autre sûreté sur le Compte nanti et le Solde ;\r\n                        </p>\r\n                        <p class=\"mb-10\">\r\n                            (f) sous réserve des lois applicables, à ne pas consentir à ce qu'une personne\r\n                            autre que le Bénéficiaire exerce une réclamation ou autre demande à l'égard\r\n                            d'une somme figurant sur le Compte nanti ou à l'égard du Solde.\r\n                        </p>\r\n                        <p class=\"mb-10\">\r\n                            - La Banque est fondée à exercer sur la Créance Nantie qu’il constate, dans la\r\n                            limite des Obligations Garanties, les droits qui lui sont conférés en sa qualité de\r\n                            créancier nanti, dans les conditions et limites des articles 127 et suivants de\r\n                            l'Acte Uniforme sur les Sûretés.\r\n                        </p>\r\n                        <p class=\"mb-10\">\r\n                            A défaut de paiement de l’une quelconque des sommes dues au titre de la Facilité\r\n                            mise en place au profit du Constituant, la Banque pourra exercer sur les Créances\r\n                            Nanties tous les droits, actions et privilèges dont elle est investie en vertu de la\r\n                            convention, sans préjudice de tout autre droit ou action qui pourrait être exercé\r\n                            ou engagé indépendamment ou concurremment, et, notamment poursuivre la\r\n                            réalisation du nantissement, conformément aux dispositions de l'article 134 de\r\n                            l'Acte Uniforme sur les Sûretés.\r\n                        </p>\r\n                        <p class=\"mb-10\">\r\n                            La Banque deviendra de plein droit propriétaire des sommes constituant le Solde\r\n                            du Compte Nanti ci-dessus, huit jours après une mise en demeure adressée au\r\n                            Constituant demeurée sans effet, et ce, sans avoir à épuiser préalablement les\r\n                            autres recours dont elle pourrait disposer, ni à mettre en œuvre d’autres sûretés\r\n                            ou garanties dont elle pourrait bénéficier par ailleurs.\r\n                        </p>\r\n                        <p class=\"mb-10\">\r\n                            Conformément à l’article 134 de l’Acte Uniforme, la Banque aura la faculté, à\r\n                            tout moment, de percevoir le Solde par débit du Compte nanti et de l'affecter au\r\n                            paiement de toute somme exigible au titre des Obligations Garanties.\r\n                            A cet effet, le Constituant autorise à tout moment, le Bénéficiaire à débiter ledit\r\n                            Compte Nanti en vue du remboursement des sommes dues.\r\n                        </p>\r\n                        <p class=\"mb-10\">\r\n                            Même après sa réalisation, le Nantissement du compte subsiste tant que la\r\n                            Créance Garantie n'a pas été intégralement payée.\r\n                        </p>\r\n                        <p class=\"mb-10\">\r\n                            -Toute somme prélevée au titre de la présente convention sera affectée au\r\n                            remboursement et paiement des Obligations Garanties, à leur date d’échéance\r\n                            normale ou anticipée.\r\n                        </p>\r\n\r\n                        <p class=\"mb-10\">\r\n                            Le reliquat après prélèvement et apurement de l’encours du client sera reversé\r\n                            sur le compte courant du client ouvert dans les livres de\r\n                            <span class=\"title-background\">\r\n                                {{banque}}.\r\n                            </span>\r\n                        </p>\r\n\r\n                    </div>\r\n\r\n                    <div class=\"article\">\r\n                        <div class=\"article-content\">\r\n                            <div class=\"article-subsection\">\r\n                                <span class=\"subsection-number\">6.2-</span> <strong>NANTISSEMENT BON DE CAISSE N°<span\r\n                                        class=\"title-background\">{{numero_bon_de_caisse}}</span> APPARTENANT A <span\r\n                                        class=\"title-background\">{{nom_constituant}}</span> {{is_nantissement_bon_de_caisse_applicable}}</strong><br>\r\n                                - En sûreté et à la garantie du remboursement intégral des avances de trésorerie d'un\r\n                                montant global en principal de <span\r\n                                    class=\"title-background\">{{montant_global_bon_caisse}} {{devise}}</span> (La \"Facilité\" ou les\r\n                                \"Obligations Garanties\") accordées en date du <span\r\n                                    class=\"title-background\">{{date_souscription}}</span> à <span\r\n                                    class=\"title-background\">{{date_echeance_bon}}</span> par la Banque aux termes de la\r\n                                Convention de Crédit, le Constituant affecte irrévocablement en nantissement, au profit\r\n                                de la Banque, l'ensemble de ses droits et intérêts qu'il détient relativement au titre\r\n                                de créance nantie, conformément aux dispositions des articles 127 et suivants de l'Acte\r\n                                Uniforme OHADA relatif aux Sûretés, au profit de la Banque.\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n\r\n\r\n\r\n\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"page-footer\">\r\n            <strong>{{banque}}</strong><br>\r\n            Siège social : <span class=\"title-background\">{{siege_filiale}}</span>, \r\n            B.P. : <span class=\"title-background\">{{boite_postale}}</span>, \r\n            Tél : <span class=\"title-background\">{{numero_filiale}}</span> | \r\n            SA au capital social de : <span class=\"title-background\">{{capital_social}}</span> {{devise}} | \r\n            <span class=\"title-background\">{{agrement}}</span> | <span class=\"title-background\">{{siteweb}}</span>\r\n        </div>\r\n        <div class=\"page-number\">3</div>\r\n    </div>\r\n\r\n    <!-- PAGE 4 -->\r\n    <div class=\"print-page\">\r\n        <div class=\"content-body\">\r\n            <div class=\"two-columns\">\r\n                <div class=\"column\">\r\n                    <div class=\"article\">\r\n                        <div class=\"article-content\">\r\n                            <div class=\"article-subsection\">\r\n                                La Créance Nantie est constatée par un (01) Bon de Caisse Nominatif souscrit\r\n                                par le Constituant auprès de {{banque}} lequel présente les\r\n                                caractéristiques suivantes :\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <table class=\"conditions-table mb-10\">\r\n                        <tr>\r\n                            <td class=\"label-col\"><strong>BON DE CAISSE N° </strong></td>\r\n                            <td>\r\n                                <span class=\"value-col\"> <span class=\"title-background\">{{numero_bon_de_caisse}}</span></span>\r\n                            </td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td class=\"label-col\">Date de souscription :</td>\r\n                            <td class=\"value-col\"><span class=\"title-background\">{{date_souscription}}</span></td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td class=\"label-col\">Date d'Echéance :</td>\r\n                            <td class=\"value-col\"><span class=\"title-background\">{{date_echeance_bon}}</span></td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td class=\"label-col\">Montant :</td>\r\n                            <td class=\"value-col\"><span class=\"title-background\">{{montant_bon_caisse_nanti}} {{devise}}</span></td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td class=\"label-col\">Souscripteur :</td>\r\n                            <td class=\"value-col\"><span class=\"title-background\">{{souscripteur_bon}}</span></td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td class=\"label-col\">Etablissement dépositaire :</td>\r\n                            <td class=\"value-col\">{{etablissement_depositaire}}</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td class=\"label-col\">Compte d'affectation :</td>\r\n                            <td class=\"value-col\"><span class=\"title-background\">{{compte_affectation_bon}}</span></td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td class=\"label-col\">Bénéficiaire :</td>\r\n                            <td class=\"value-col\"><span class=\"title-background\">{{beneficiaire_bon}}</span></td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td class=\"label-col\">Lieu de Souscription :</td>\r\n                            <td class=\"value-col\"><span class=\"title-background\">{{lieu_souscription_bon}}</span></td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td class=\"label-col\">Lieu de Paiement :</td>\r\n                            <td class=\"value-col\"><span class=\"title-background\">{{lieu_paiement_bon}}</span></td>\r\n                        </tr>\r\n                    </table>\r\n                    <div class=\"article\">\r\n                        <div class=\"article-content\">\r\n                            <div class=\"article-subsection\">\r\n                                <p class=\"mb-10\">\r\n                                    Tous droits détenus par le Constituant sur toutes sommes versées au crédit du\r\n                                    Compte nanti sont automatiquement compris dans l'assiette du nantissement.\r\n                                </p>\r\n                                <p class=\"mb-10\">\r\n                                    La Créance Nantie correspond à la valeur faciale du Bon de Caisse Nanti, soit\r\n                                    <span class=\"title-background\"> {{montant_bon_caisse_nanti}} ({{montant_bon_caisse_nanti_lettre}})\r\n                                        {{devise}}</span>\r\n                                    en principal.\r\n                                </p>\r\n                                <p class=\"mb-10\">\r\n                                    Le nantissement résultant de la présente Convention aura notamment pour effet\r\n                                    de :\r\n                                </p>\r\n                                <p class=\"mb-10\">\r\n                                    ° Grever le compte d’affectation du Bon de Caisse Nanti dans les livres de la\r\n                                    Banque, ainsi que tout compte qui serait ultérieurement créé pour traduire le\r\n                                    renouvellement du Bon de Caisse ;\r\n                                </p>\r\n                                <p class=\"mb-10\">\r\n                                    ° Rendre inopérante toute action ou saisie initiée par tous tiers sur les Créances\r\n                                    Nanties.\r\n                                </p>\r\n                                <p class=\"mb-10\">\r\n                                    Le Nantissement s'ajoutera à toutes sûretés dont bénéficie la Banque, et ne\r\n                                    pourra en aucun cas porter atteinte à, ni être compromis ou affecté, par lesdites\r\n                                    sûretés.\r\n                                </p>\r\n                                <p class=\"mb-10\">\r\n                                    Le Constituant renonce à se prévaloir des droits dont il pourrait être investi aux\r\n                                    fins d’exiger de la Banque qu’elle procède ou exerce toute Sûreté à l’encontre de\r\n                                    toute autre personne avant de procéder à l’exercice des droits constitués aux\r\n                                    termes de la présente convention et de tout droit qu’elle pourrait avoir d’exiger\r\n                                    que la Banque exerce ses droits dans un ordre spécifique au titre de la présente\r\n                                    convention.\r\n                                </p>\r\n                                <p class=\"mb-10\">\r\n                                    Le présent nantissement est opposable de plein droit à la Banque conformément\r\n                                    à l'article 132 de l'Acte Uniforme sur les Sûretés, l’intervention de la Banque en\r\n                                    qualité de Bénéficiaire dispensant les parties des formalités de notification\r\n                                    prévues à l'article 132 de l'Acte Uniforme sur les Sûretés.\r\n                                </p>\r\n                                <p class=\"mb-10\">\r\n                                    Conformément à l’article 138 de l’Acte Uniforme sur les Sûretés, tant qu’une\r\n                                    somme quelconque restera due par le Constituant à la Banque consécutivement\r\n                                    à l’utilisation de la Facilité Garantie, les avoirs rattachés au Bon de Caisse Nanti\r\n                                    ci-dessus demeureront nantis en faveur de la Banque, et ne pourront être payés\r\n                                    par la Banque que dans les conditions ci-définies.\r\n                                </p>\r\n                                <p class=\"mb-10\">\r\n                                    - La Banque procèdera, aux frais du Constituant qui s’y engage, à toutes les\r\n                                    formalités nécessaires à la constitution, à la validité, à l’opposabilité et à\r\n                                    l’efficacité du Nantissement, notamment par son inscription et, le cas échéant,\r\n                                    son enregistrement auprès du Registre du Commerce et du Crédit Mobilier\r\n                                    compétent.\r\n                                </p>\r\n                                <p class=\"mb-10\">\r\n                                    La Banque procèdera en outre, à tout moment pendant la durée de la Convention,\r\n                                    aux frais du Constituant qui s’y engage, autant que nécessaire, au\r\n                                    renouvellement de l’inscription du Nantissement, et à toute autre formalité\r\n                                    nécessaire pour en assurer la validité, l’opposabilité et l’efficacité, dans les\r\n                                    conditions et délais légaux en vigueur.\r\n                                </p>\r\n                                <p class=\"mb-10\">\r\n                                    Conformément aux dispositions de l’article 58 de l’Acte Uniforme sur les\r\n                                    Sûretés, l’inscription du nantissement conservera les droits de la Banque\r\n                                    pendant une durée de dix (10) ans à compter de l’inscription au RCCM.\r\n                                    Tous pouvoirs sont donnés au porteur d’un original, d’une copie ou d’un extrait\r\n                                    de la Convention pour l’accomplissement de toute formalité.\r\n                                </p>\r\n                                <p class=\"mb-10\">\r\n                                    - La Banque procèdera, aux frais du Constituant qui s’y engage, à toutes les\r\n                                    formalités nécessaires à la constitution, à la validité, à l’opposabilité et à\r\n                                    l’efficacité du Nantissement, notamment par son inscription et, le cas échéant,\r\n                                </p>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"column\">\r\n                    <div class=\"article\">\r\n                        <div class=\"article-content\">\r\n                            <div class=\"article-subsection\">\r\n                                <p class=\"mb-10\">\r\n                                    son enregistrement auprès du Registre du Commerce et du Crédit Mobilier\r\n                                    compétent.\r\n                                </p>\r\n                                <p class=\"mb-10\">\r\n                                    La Banque procèdera en outre, à tout moment pendant la durée de la Convention,\r\n                                    aux frais du Constituant qui s’y engage, autant que nécessaire, au\r\n                                    renouvellement de l’inscription du Nantissement, et à toute autre formalité\r\n                                    nécessaire pour en assurer la validité, l’opposabilité et l’efficacité, dans les\r\n                                    conditions et délais légaux en vigueur.\r\n                                </p>\r\n                                <p class=\"mb-10\">\r\n                                    Conformément aux dispositions de l’article 58 de l’Acte Uniforme sur les\r\n                                    Sûretés, l’inscription du nantissement conservera les droits de la Banque\r\n                                    pendant une durée de dix (10) ans à compter de l’inscription au RCCM.\r\n                                </p>\r\n                                <p class=\"mb-10\">\r\n                                    Tous pouvoirs sont donnés au porteur d’un original, d’une copie ou d’un extrait\r\n                                    de la Convention pour l’accomplissement de toute formalité.\r\n                                </p>\r\n                                <p class=\"mb-10\">\r\n                                    - Il résulte des termes des Bons de Caisse constatant les Créances Nanties que\r\n                                    la Banque est le Dépositaire des Créances Nanties. En cette qualité, le\r\n                                    Dépositaire sera tenu de :\r\n                                </p>\r\n                                <p class=\"mb-10\">\r\n                                    a) Détenir et Conserver les Créances Nanties conformément aux stipulations de\r\n                                    la présente Convention, et ne s'en dessaisir que conformément aux stipulations\r\n                                    de la présente Convention ;\r\n                                </p>\r\n                                <p class=\"mb-10\">\r\n                                    b) faire tout ce qui est nécessaire pour la bonne exécution de sa mission de\r\n                                    Dépositaire, conformément aux dispositions de l'Acte Uniforme sur les Sûretés et\r\n                                    aux stipulations de la présente Convention ; et\r\n                                </p>\r\n                                <p class=\"mb-10\">\r\n                                    c) En cas de survenance anticipée du terme du Bon de Caisse avec la date de\r\n                                    libération du Constituant, procéder au renouvellement de ladite valeur pour une\r\n                                    période identique, laquelle demeurera nantie en vertu des présentes en faveur de\r\n                                    la Banque ;\r\n                                </p>\r\n                                <p class=\"mb-10\">\r\n                                    d)Faute de renouvellement, et sauf libération du Constituant, sécuriser la\r\n                                    Créance Nantie dans un compte de dépôt de garantie jusqu’à l’échéance de la\r\n                                    Facilité.\r\n                                </p>\r\n\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"article\">\r\n                        <div class=\"article-content\">\r\n                            <div class=\"article-subsection\">\r\n                                <span class=\"subsection-number\">6.4-</span> <strong>CAUTIONNEMENT SOLIDAIRE ET\r\n                                    PERSONNEL {{is_cautionnement_applicable}} </strong><br>\r\n                                - En sûreté et à la garantie du remboursement intégral du Crédit, du paiement de tous\r\n                                intérêts, indemnités, du remboursement de toutes avances, frais, accessoires\r\n                                quelconques, comme du solde éventuellement débiteur du compte courant et d'une manière\r\n                                générale, à la garantie de l'exécution de toutes obligations résultant pour l'emprunteur\r\n                                du présent acte, la Caution déclare se constituer caution solidaire, personnelle et\r\n                                indivisible de <span class=\"title-background\">{{civilite_caution}}</span> <span\r\n                                    class=\"title-background\">{{nom_caution}}</span> Titulaire du compte numéro <span\r\n                                    class=\"title-background\">{{numero_compte_caution}}</span> pour toutes les sommes\r\n                                que le Cautionné doit, peut ou pourra devoir à la Banque à raison de tous engagements,\r\n                                de toutes opérations et d'une façon générale, de toutes les obligations nées, sans\r\n                                aucune exception, directement ou indirectement à l'égard de la Banque pour quelque cause\r\n                                que ce soit. C'est ainsi que le Cautionnement s'applique, sans que cette énumération\r\n                                soit limitative, à toutes les obligations résultantes notamment :\r\n                            </div>\r\n\r\n                            <ul class=\"article-list\">\r\n                                <li>° De tous crédits par caisse ou par signature, des soldes exigibles en faveur de la\r\n                                    Banque de tous comptes courants ouverts au nom du Cautionné, des opérations de\r\n                                    bourse traitées par lui, de tous chèques, billets ou effets comportant sa signature\r\n                                    à quelque titre que ce soit et pour lesquels la Banque aura été dispensée ou non de\r\n                                    tout protêt ou de tout avis de non-paiement, des négociations de lettres de change\r\n                                    relevé, d'actes de cession de créances, de tous engagements d'aval, de caution ou de\r\n                                    garantie de paiement fournis par le Cautionné ;</li>\r\n                                <li>° De tous engagements d'avals, de caution, de garantie ou de contre garantie ou\r\n                                    encore de toutes acceptations données par la Banque pour le compte du Cautionné ou\r\n                                    sur son ordre.</li>\r\n                                <li>° Les obligations de la Caution en exécution du présent cautionnement sont limitées\r\n                                    au montant maximal de <span\r\n                                        class=\"title-background\">{{montant_caution}}</span> {{devise}} ( <span\r\n                                        class=\"title-background\">{{montant_caution_lettres}}</span>\r\n                                    {{devise}}), garantissant tant le principal des engagements de l'Emprunteur que tous\r\n                                    intérêts, frais et accessoires venant en sus, étendus au solde éventuellement\r\n                                    débiteur de son compte courant tel qu'il apparaîtrait à sa clôture.</li>\r\n                                <li> - Le présent engagement oblige la Caution, à titre solidaire et personnel, sur tous\r\n                                    ses biens meubles et immeubles, à payer à la Banque ce que lui doit ou devra le</li>\r\n                            </ul>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"page-footer\">\r\n            <strong>{{banque}}</strong><br>\r\n            Siège social : <span class=\"title-background\">{{siege_filiale}}</span>, \r\n            B.P. : <span class=\"title-background\">{{boite_postale}}</span>, \r\n            Tél : <span class=\"title-background\">{{numero_filiale}}</span> | \r\n            SA au capital social de : <span class=\"title-background\">{{capital_social}}</span> {{devise}} | \r\n            <span class=\"title-background\">{{agrement}}</span> | <span class=\"title-background\">{{siteweb}}</span>\r\n        </div>\r\n        <div class=\"page-number\">4</div>\r\n    </div>\r\n\r\n    <!-- PAGE 5 -->\r\n    <div class=\"print-page\">\r\n        <div class=\"content-body\">\r\n            <div class=\"two-columns\">\r\n                <div class=\"column\">\r\n                    <div class=\"article\">\r\n                        <div class=\"article-content\">\r\n                            <p class=\"mb-10\">\r\n                                Cautionné, dans la limite du Montant Maximal Garanti, au cas où le Cautionné ne pourrait\r\n                                faire face à ses obligations au titre des Obligations Garanties.\r\n                            </p>\r\n\r\n                            <p class=\"mb-10\">\r\n                                - La Caution renonce expressément aux bénéfices de discussion et de division tant avec\r\n                                le Cautionné qu'avec tous coobligé\r\n                            </p>\r\n\r\n                            <p class=\"mb-10\">\r\n                                - La Caution renonce à se prévaloir :\r\n                            </p>\r\n                            <p class=\"mb-10\">\r\n\r\n                                ° Des dispositions de l'article 23 de l'acte uniforme de l'OHADA (NOUVEAU) portant\r\n                                organisation des sûretés qui, sans la décharger de ses engagements, l'autoriseraient à\r\n                                poursuivre la débitrice garantie pour la forcer au paiement au cas où des délais de\r\n                                paiement lui seraient accordés par la Banque ; et<br>\r\n                            </p>\r\n                            <p class=\"mb-10\">\r\n\r\n                                ° De toutes subrogations, de toutes actions qui auraient pour résultat de la faire venir\r\n                                en concours avec la Banque à l'encontre de la débitrice garantie tant que la banque\r\n                                n'aura pas été désintéressée de la totalité des sommes en principal, intérêts,\r\n                                commissions, frais, indemnités et accessoires qui lui sont dues au titre des Obligations\r\n                                Garanties.\r\n                            </p>\r\n\r\n                            <p class=\"mb-10\">\r\n                                - La Caution renonce expressément, dans l’hypothèse de la déclaration de\r\n                                l’exigibilité anticipée des Crédits conformément aux stipulations de la Convention\r\n                                de Crédit, à se prévaloir, à l’égard de la Banque, de l’inopposabilité de la\r\n                                déchéance du terme encourue par le Débiteur Garanti.\r\n                            </p>\r\n                            <p class=\"mb-10\">- La Caution s’engage, pour toute la durée du présent cautionnement :</p>\r\n                            <p class=\"mb-10\">\r\n                                ° À informer la Banque par écrit dès qu’elle aura connaissance de tout événement\r\n                                susceptible d’entraîner une détérioration de sa situation financière ou de sa\r\n                                capacité à faire face à ses obligations au titre du présent cautionnement ;\r\n                            </p>\r\n                            <p class=\"mb-10\">\r\n                                ° À ne pas céder ou transférer la propriété d’un de ses actifs si cette cession ou\r\n                                ce transfert devait avoir un effet négatif important sur sa situation financière ou\r\n                                sa capacité à faire face à ses obligations au titre du présent cautionnement.\r\n                            </p>\r\n                            <p class=\"mb-10\">- La caution déclare que la banque a suffisamment attiré son attention sure\r\n                                :</p>\r\n                            <p class=\"mb-10\">° La nature et l’étendue de son engagement ;</p>\r\n                            <p class=\"mb-10\">\r\n                                ° La proportionnalité entre la valeur de ses biens et le montant du cautionnement,\r\n                                ce à quoi il atteste sur l’honneur disposé d’un patrimoine suffisant pour couvrir le\r\n                                montant cautionné\r\n                            </p>\r\n                            <p class=\"mb-10\">\r\n                                - La Caution déclare que son patrimoine est constitué des éléments actifs et\r\n                                passifs ci-après :\r\n                            </p>\r\n                            {{avoirs_investissements}}\r\n                            <p class=\"mb-10\">\r\n                                - La Banque est tenue d’informer la Caution de toute défaillance du Cautionné au\r\n                                titre des Obligations Garantie, ainsi que de la déchéance ou de la prorogation du\r\n                                terme en indiquant le montant restant dû par lui en principal, intérêts et frais au\r\n                                jour de la défaillance, déchéance ou prorogation du terme.\r\n                            </p>\r\n                            <p class=\"mb-10\">\r\n                                La Banque est tenue, dans le mois qui suit le terme de chaque semestre civil, de\r\n                                communiquer à la Caution l’état des dettes du Cautionné précisant leurs causes,\r\n                                leurs échéances et leurs montants en principal, intérêts, commissions, frais et\r\n                                accessoires restants dus à la fin de chaque semestre écoulé, en lui rappelant la\r\n                                faculté de révocation par reproduction littérale des stipulations du présent article\r\n                                et celles de l’article 19 de l’Acte Uniforme portant organisation des sûretés.\r\n                            </p>\r\n                            <p class=\"mb-10\">\r\n                                Pour la bonne exécution de cet engagement, la caution s’oblige et s’engage à\r\n                                informer la Banque de tout changement d’adresse le concernant.\r\n                            </p>\r\n                            <p class=\"mb-10\">\r\n                                - En cas de non-paiement à son échéance, par le Cautionné, d'une quelconque\r\n                                somme due au titre des Obligations Garanties, la Caution sera tenue de payer à\r\n                                la Banque, dans la limite du Montant Maximal Garanti, le montant concerné,\r\n                                quinze (15) jours après une mise en demeure adressée au Cautionné restée sans\r\n                                effet. La Caution ne pourra pas se prévaloir des délais de paiement accordés\r\n                                conventionnellement ou judiciairement au Cautionné.\r\n                            </p>\r\n                            <p class=\"mb-10\">\r\n                                - Le présent cautionnement entre en vigueur à la date de sa signature et restera en\r\n                                vigueur tant que l’ensemble des Obligations Garanties n’aura pas été intégralement\r\n                                remboursé ou payé.\r\n                            </p>\r\n\r\n\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"column\">\r\n                    <div class=\"article\">\r\n                        <div class=\"article-content mb-10\">\r\n                            - La Caution peut décider à tout moment de révoquer son engagement par\r\n                            notification écrite à la Banque. La révocation prendra effet à l’expiration d’un délai\r\n                            de quatre-vingt-dix (90) jours à compter de la date de réception de la lettre de\r\n                            notification. La Caution restera tenue jusqu’au remboursement intégral et définitif à\r\n                            la Banque de tous les engagements du Cautionné nés.\r\n\r\n                        </div>\r\n                        <div class=\"article-content\">\r\n                            <div class=\"article-subsection\">\r\n                                <span class=\"subsection-number\">6.5-</span> <strong>TRANSFERT FIDUCIAIRE DE SOMME\r\n                                    D'ARGENT {{is_cash_collateral_applicable}}</strong><br>\r\n                                En sûreté et à la garantie du remboursement intégral du Crédit, du paiement de tous\r\n                                intérêts, indemnités, du remboursement de toutes avances, frais, accessoires\r\n                                quelconques, comme du solde éventuellement débiteur du compte courant et d'une manière\r\n                                générale, à la garantie de l'exécution de toutes obligations résultant pour l'emprunteur\r\n                                du présent acte, <span class=\"title-background\">{{titre_client}}</span> <span\r\n                                    class=\"title-background\">{{nom_cedant}}</span> cède et abandonne par les présentes\r\n                                au profit de La Banque qui l'accepte, à titre de garantie du remboursement de toutes\r\n                                sommes en principal, intérêts, frais, commissions, taxes et accessoires que le Cédant\r\n                                pourrait devoir à la Banque en raison du financement ci-dessus mentionné, la somme\r\n                                correspondant à {{devise}} <span\r\n                                    class=\"title-background\">{{cashcoll}}</span> ( <span\r\n                                    class=\"title-background\">{{cashcoll_lettres}}</span> {{devise}})\r\n                                dont elle autorise le prélèvement dans son compte courant, et la conservation en fiducie\r\n                                sur le Compte Bloqué jusqu'à l'extinction des engagements bancaires.\r\n                            </div>\r\n                            <p>\r\n                                - Les fonds cédés à la banque seront bloqués sur le compte <span\r\n                                    class=\"title-background\">{{numero_compte_cashcoll}}</span> ouvert dans les livres de\r\n                                {{banque}} et en son nom en qualité de créancière de l'obligation du Cédant (le\r\n                                Compte Bloqué ou le Compte de Fiducie).\r\n                            </p>\r\n\r\n                            <p>\r\n                                - De commun accord entre les parties, le Compte Bloqué constitue un compte de fiducie au\r\n                                sens des dispositions de l'acte uniforme de l'OHADA relatif aux sûretés encadrant le\r\n                                mécanisme de transfert fiduciaire ; il n'est ouvert dans l'environnement comptable du\r\n                                Cédant que pour une meilleure gestion des Obligations Garanties.\r\n                            </p>\r\n\r\n                            <p class=\"mb-10\">\r\n                                - Le CEDANT ne peut disposer de cette somme bloquée de quelque manière\r\n                                que ce soit, tant qu’elle demeurera affectée en fiducie à la garantie des\r\n                                Obligations Garanties envers Le BENEFICIAIRE.\r\n                            </p>\r\n                            <p class=\"mb-10\">\r\n                                - Les fonds cédés au profit de la banque, en vertu de la présente convention,\r\n                                ne produisent pas d’intérêt.\r\n                            </p>\r\n                            <p class=\"mb-10\">\r\n                                - Le Cédant renonce à se prévaloir des droits dont il pourrait être investi aux\r\n                                fins d’exiger de la Banque qu’elle procède ou exerce toute sûreté à l’encontre\r\n                                de toute autre personne avant de procéder à l’exercice des droits constitués\r\n                                aux termes de la présente convention et de tout droit qu’elle pourrait avoir\r\n                                d’exiger que la Banque exerce ses droits dans un ordre spécifique au titre de\r\n                                la présente convention.\r\n                            </p>\r\n                            <p class=\"mb-10\">\r\n                                - En cas de défaillance de l’Emprunteur et huit jours après que le Cédant en ait\r\n                                été dûment averti, la banque pourra, si bon lui semble, affecter les fonds cédés\r\n                                à l’apurement des engagements du Cédant, dans la limite du montant des\r\n                                créances garanties demeurant impayées.\r\n                            </p>\r\n                            <p class=\"mb-10\">\r\n                                - La présente convention est opposable de plein droit à la Banque\r\n                                conformément à l'article 88 de l'Acte Uniforme OHADA portant sur les\r\n                                Sûretés, l’intervention de la Banque en qualité de Bénéficiaire dispensant les\r\n                                parties des formalités de notification prévues à l'article au dit article.\r\n                            </p>\r\n                            <p class=\"mb-10\">\r\n                                - A l'échéance stipulée à l’article 2.1 ci-dessus, et en cas de complète extinction\r\n                                des facilités, les fonds inscrits sur le compte de fiducie sont restitués au Cédant.\r\n                            </p>\r\n                            <p class=\"mb-10\">\r\n                                - La présente Convention et le Transfert Fiduciaire bénéficieront au Bénéficiaire\r\n                                ainsi qu'à ses successeurs, ayants droit et cessionnaires respectifs.\r\n                            </p>\r\n                            <p class=\"mb-10\">\r\n                                - En cas de cession ou transfert par voie de novation de tout ou partie de ses\r\n                                droits et obligations au titre de la présente Convention par le Bénéficiaire, le\r\n                                Bénéficiaire réserve et maintient expressément ses droits, actions et privilèges\r\n                                au titre des présentes au profit de ses successeurs, ayants droit et\r\n                                cessionnaires\r\n                            </p>\r\n                        </div>\r\n                    </div>\r\n\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"page-footer\">\r\n            <strong>{{banque}}</strong><br>\r\n            Siège social : <span class=\"title-background\">{{siege_filiale}}</span>, \r\n            B.P. : <span class=\"title-background\">{{boite_postale}}</span>, \r\n            Tél : <span class=\"title-background\">{{numero_filiale}}</span> | \r\n            SA au capital social de : <span class=\"title-background\">{{capital_social}}</span> {{devise}} | \r\n            <span class=\"title-background\">{{agrement}}</span> | <span class=\"title-background\">{{siteweb}}</span>\r\n        </div>\r\n        <div class=\"page-number\">5</div>\r\n    </div>\r\n\r\n    <!-- PAGE 6 -->\r\n    <div class=\"print-page\">\r\n        <div class=\"content-body\">\r\n            <div class=\"two-columns\">\r\n                <div class=\"column\">\r\n                    <div class=\"article\">\r\n                        <div class=\"article-content\">\r\n                            - Le fait pour le Bénéficiaire de ne pas exercer un droit, une option ou un\r\n                            privilège quelconque dont il est titulaire au titre de la présente Convention ou\r\n                            le fait pour lui d'exercer un tel droit, une telle option ou un tel privilège avec\r\n                            retard ne vaudra pas renonciation à ce droit, à cette option ou à ce privilège.\r\n                            Les droits et recours du Bénéficiaire aux termes de la présente Convention sont\r\n                            cumulatifs et non exclusifs d'autres droits ou recours prévus par la loi.\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"article\">\r\n                        <div class=\"article-title\">Article 7 : Durée, Main levée et effets</div>\r\n                        <div class=\"article-content\">\r\n                            <div class=\"article-subsection\">\r\n                                <span class=\"subsection-number\">7.1.</span> La présente convention prend effet à compter\r\n                                sa signature par les Parties, et demeurera en vigueur en toutes ses stipulations et\r\n                                produira ses effets jusqu'à la date de délivrance, par la Banque, d'un acte formel de\r\n                                mainlevée emportant libération du Constituant.\r\n                            </div>\r\n                            <div class=\"article-subsection\">\r\n                                <span class=\"subsection-number\">7.2.</span> La délivrance de l'acte de mainlevée\r\n                                ci-dessus indiqué permettra au Constituant de recouvrer la pleine possession de ses\r\n                                droits, et notamment, de poursuivre la radiation de l'inscription au RCCM le cas\r\n                                échéant.\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"article\">\r\n                        <div class=\"article-title\">Article 8 : Assurance Invalidité-Décès</div>\r\n                        <div class=\"article-content\">\r\n                            <p>\r\n                                Pour plus de sûreté, l'EMPRUNTEUR s'oblige à souscrire, auprès d'une compagnie\r\n                                d'assurance notoirement solvable, une Police d'Assurance contre les Risques d'Invalidité\r\n                                et de Décès avec clause d'indemnité régulièrement déléguée au profit de la Banque en cas\r\n                                de sinistre.\r\n                            </p>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"article\">\r\n                        <div class=\"article-title\">Article 9 : Pénalités et indemnités</div>\r\n                        <div class=\"article-content\">\r\n                            <div class=\"article-subsection\">\r\n                                <span class=\"subsection-number\">9.1 –</span> <strong>Teneur des engagements de\r\n                                    l'Emprunteur :</strong> La présente convention de Crédit fait naître à la charge de\r\n                                l'Emprunteur et de ses coobligés :\r\n                                <ul class=\"article-list\">\r\n                                    <li>- L'obligation de satisfaire aux conditions stipulées à l'article 5.1 supra ;\r\n                                    </li>\r\n                                    <li>- L'obligation de remboursement, à bonne date, des traites d'amortissement du\r\n                                        Crédit effectivement débloqué.</li>\r\n                                </ul>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"article\">\r\n                        <div class=\"article-content\">\r\n                            <div class=\"article-subsection\">\r\n                                <span class=\"subsection-number\">9.2 –</span> <strong>Clause pénale :</strong> A défaut\r\n                                de remboursement du Crédit à bonne date, l'Emprunteur se verra imputer, sur l'encours\r\n                                restant des engagements non remboursés, des pénalités calculées au taux de dix pourcent\r\n                                (10%) des sommes restant dues.\r\n                            </div>\r\n\r\n                            <div class=\"article-subsection\">\r\n                                <span class=\"subsection-number\">9.3 –</span> <strong>Frais d'externalisation :</strong>\r\n                                En cas de déclassement des engagements, la Banque aura la faculté d'externaliser le\r\n                                recouvrement auprès des Cabinets Spécialisés de Recouvrement. Dans ce cas, l'Emprunteur\r\n                                se verra imputer des indemnités de recouvrement externalisé représentant Vingt Pourcent\r\n                                (20%) des sommes restant dues ;\r\n                            </div>\r\n                            <div class=\"article-subsection\">\r\n                                <span class=\"subsection-number\">9.4 –</span> <strong>Frais et honoraires de recouvrement\r\n                                    :</strong> Dans le cas où pour parvenir au recouvrement de la créance résultant du\r\n                                présent acte, la Banque se retrouverait obligé d’avoir recours à un mandataire de\r\n                                justice (détectives, Huissiers, Avocats, experts) ou d’exercer des poursuites,\r\n                                l’emprunteur s’oblige à assumer les frais de justice, émoluments, honoraires, frais de\r\n                                procédure et dépens mis à sa charge, et en outre, payera à la Banque une indemnité\r\n                                forfaitaire représentant deux pour cent (2%) des sommes exigibles pour couvrir les\r\n                                pertes d’intérêts, de frais et de dommages de toutes sortes occasionnés par la nécessité\r\n                                du recours ou des poursuites.\r\n                            </div>\r\n                            <div class=\"article-subsection\">\r\n                                <span class=\"subsection-number\">9.5 –</span> <strong>Dès à présent ,</strong>\r\n                                l’Emprunteur s’oblige dans les termes ci-dessus, et donne d'ores et déjà l’ordre\r\n                                irrévocable à la BANQUE de débiter son compte le cas échéant.\r\n                            </div>\r\n\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"article\">\r\n                        <div class=\"article-title\">Article 10 : Risques d'interdiction et de poursuite pénale</div>\r\n                        <div class=\"article-content\">\r\n                            <div class=\"article-subsection\">\r\n                                <span class=\"subsection-number\">10.1 –</span> Le non-remboursement des facilités\r\n                                accordées en vertu de la présente convention, tout comme le non-respect d'un moratoire,\r\n                                constitue un Incident de Crédit au sens de la loi N°2019/021 du 24 décembre 2019 fixant\r\n                                certaines règles relatives à l'activité de crédit dans les secteurs bancaires et de la\r\n                                Microfinance au Cameroun ;\r\n                            </div>\r\n\r\n                            <div class=\"article-subsection\">\r\n                                <span class=\"subsection-number\">10.2 –</span> En cas de survenance d'un Incident de\r\n                                Crédit, l'Emprunteur s'expose à une interdiction de crédit, emportant interdiction de\r\n                                conclure une opération de crédit auprès de tout autre établissement bancaire ou de\r\n                                Microfinance ; l'Emprunteur ne recouvrera la faculté de conclure une opération de crédit\r\n                                que s'il justifie avoir régularisé sa situation en remboursant en principal et intérêts,\r\n                                la créance objet de l'incident de crédit.\r\n                            </div>\r\n                            <div class=\"article-subsection\">\r\n                                <span class=\"subsection-number\">10.3 –</span> L’Emprunteur s’expose pareillement aux\r\n                                sanctions pénales édictées par la loi susvisée, laquelle dispose :\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n\r\n                </div>\r\n\r\n                <div class=\"column\">\r\n                    <div class=\"article\">\r\n                        <div class=\"article-content\">\r\n                            <p class=\"mb-10\">\r\n                                « Art.20 : Est punie d'un emprisonnement de six (06) mois à cinq (05) ans et d'une\r\n                                amende de cent mille (100.000) à cent millions (100.000.000) de {{devise}}, ou\r\n                                de l'une de ces deux peines seulement, toute personne qui, de mauvaise foi, n'a\r\n                                pas remboursé le crédit qui lui a été accordé par un établissement assujetti ».\r\n                            </p>\r\n                            <p class=\"mb-10\">\r\n                                Art.21 (2) : Les sanctions ci-dessus peuvent également être prises en cas de\r\n                                moratoire non respecté\r\n                            </p>\r\n                            <div class=\"article-subsection\">\r\n                                <span class=\"subsection-number\">10.4 –</span> En cas d’usage de faux documents, le\r\n                                BENEFICIAIRE et ses coobligés\r\n                                s’exposent en vertu des dispositions de la loi N°2019/021 du 24 décembre 2019\r\n                                fixant certaines règles relatives à l’activité de crédit dans les secteurs bancaires\r\n                                et de la Microfinance au Cameroun qui dispose à son article 22 : « Est punie d'un\r\n                                emprisonnement de six (06) mois à trois (03) ans et d'une amende de cent mille\r\n                                (100.000) à cinq millions (5.000.000) de {{devise}}, ou de l'une de ces deux\r\n                                peines seulement, toute personne qui, avec l'intention de porter atteinte aux droits\r\n                                de l'établissement assujetti, fait usage ou tente de faire usage de faux documents\r\n                                dans le cadre de la conclusion d'une opération de crédit »\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"article\">\r\n                        <div class=\"article-title\">Article 11 : Frais – Impôts et Taxes</div>\r\n                        <div class=\"article-content\">\r\n                            <p>\r\n                                Tous impôts, taxes, frais et accessoires éventuels liés à la conclusion, à l'exécution\r\n                                de la présente convention et de ses suites sont à la charge de L'EMPRUNTEUR qui s'y\r\n                                oblige expressément, et d'ores et déjà, autorise la BANQUE à débiter son compte à telle\r\n                                date qu'il conviendra en vue du règlement desdites charges.\r\n                            </p>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"article\">\r\n                        <div class=\"article-title\">Article 12 : Clauses finales</div>\r\n                        <div class=\"article-content\">\r\n                            <div class=\"article-subsection\">\r\n                                <span class=\"subsection-number\">12.1 –</span> Les droits de L'EMPRUNTEUR résultant du\r\n                                présent contrat ne peuvent être cédés, ni grevés.\r\n                            </div>\r\n                            <div class=\"article-subsection\">\r\n                                <span class=\"subsection-number\">12.2 –</span> Les modifications au présent contrat\r\n                                doivent être faites par voie d'avenant écrit.\r\n                            </div>\r\n                            <div class=\"article-subsection\">\r\n                                <span class=\"subsection-number\">12.3 –</span> L'invalidation d'une clause du présent\r\n                                contrat n'entache pas la validité des autres dispositions. Les clauses invalides seront\r\n                                aussitôt remplacées, à la diligence des parties contractantes, par des dispositions\r\n                                conformes à la législation en vigueur.\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"article\">\r\n                        <div class=\"article-content\">\r\n                            <div class=\"article-subsection\">\r\n                                <span class=\"subsection-number\">12.6 -</span> L'Emprunteur consent à ce que ses données\r\n                                soient traitées par la Banque dans le cadre de la présente et de ses suites. Ce\r\n                                traitement a pour finalité la gestion des concours accordés à l'Emprunteur, animation\r\n                                commerciale et études statistiques, évaluation du risque, sécurité et prévention des\r\n                                impayés et de la fraude, recouvrement, lutte contre le blanchiment d'argent et le\r\n                                financement du terrorisme, réponse aux obligations légales et réglementaires.\r\n                            </div>\r\n\r\n                            <div class=\"article-subsection\">\r\n                                <span class=\"subsection-number\">12.7 -</span> Ces données personnelles sont protégées\r\n                                par le secret professionnel auquel est tenu la Banque. Le Client accepte expressément et\r\n                                pendant toute la durée du concours que les données personnelles le concernant soient\r\n                                transmises :\r\n                                <ul class=\"article-list\">\r\n                                    <li>- aux prestataires de service et sous-traitants exécutant pour le compte de la\r\n                                        Banque certaines tâches liées aux finalités décrites ci-dessus ;</li>\r\n                                    <li>- aux sociétés du Groupe Atlantic Financial Group (AFG) exécutant pour le compte\r\n                                        de la Banque certaines tâches liées aux finalités décrites ci-dessus ;</li>\r\n                                    <li>- aux sociétés du Groupe AFG en vue de la présentation des produits et services\r\n                                        gérés par ces sociétés, en cas de regroupement de moyens ;</li>\r\n                                    <li>- aux sociétés du Groupe AFG avec lesquelles il est ou sera en relation\r\n                                        contractuelle aux fins d'actualisation des données collectées par ces sociétés ;\r\n                                    </li>\r\n                                    <li>- à des organismes chargés de réaliser des enquêtes ou sondages ;</li>\r\n                                    <li>- et à des organismes tels que l'administration fiscale et la Banque Centrale\r\n                                        afin de satisfaire aux obligations légales ou réglementaires incombant à la\r\n                                        Banque.</li>\r\n                                </ul>\r\n                            </div>\r\n                            <div class=\"article-subsection\">\r\n                                <span class=\"subsection-number\">12.8 -</span> Les données personnelles transmises par le\r\n                                Client conformément aux\r\n                                finalités ci-dessus peuvent à l’occasion de diverses opérations, faire l’objet d’un\r\n                                transfert vers un pays tiers, des règles assurant la protection et la sécurité des\r\n                                données ont été mises en place conformément à la législation en vigueur.\r\n                            </div>\r\n\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"page-footer\">\r\n            <strong>{{banque}}</strong><br>\r\n            Siège social : <span class=\"title-background\">{{siege_filiale}}</span>, \r\n            B.P. : <span class=\"title-background\">{{boite_postale}}</span>, \r\n            Tél : <span class=\"title-background\">{{numero_filiale}}</span> | \r\n            SA au capital social de : <span class=\"title-background\">{{capital_social}}</span> {{devise}} | \r\n            <span class=\"title-background\">{{agrement}}</span> | <span class=\"title-background\">{{siteweb}}</span>\r\n        </div>\r\n        <div class=\"page-number\">6</div>\r\n    </div>\r\n\r\n    <!-- PAGE 7 -->\r\n    <div class=\"print-page\">\r\n        <div class=\"content-body\">\r\n\r\n            <div class=\"two-columns\">\r\n                <div class=\"column\">\r\n                    <div class=\"article\">\r\n                        <div class=\"article-subsection\">\r\n                            <span class=\"subsection-number\">12.9 -</span> Ces données personnelles peuvent être\r\n                            communiquées, à leur requête,\r\n                            aux organismes officiels et aux autorités administratives ou judiciaires,\r\n                            notamment dans le cadre de la lutte contre le blanchiment des capitaux ou la lutte\r\n                            contre le financement du terrorisme.\r\n                        </div>\r\n                        <div class=\"article-subsection\">\r\n                            <span class=\"subsection-number\">12.10 -</span> Ces données personnelles pourront donner lieu\r\n                            à l’exercice du droit\r\n                            d’accès, de rectification et d’opposition dans les conditions prévues par la loi en\r\n                            vigueur. Le Client peut obtenir une copie des données le concernant et, le cas\r\n                            échéant, les faire rectifier par courrier adressé au siège social de la Banque.\r\n                        </div>\r\n                        <div class=\"article-subsection\">\r\n                            <span class=\"subsection-number\">12.11 -</span> L’Emprunteur autorise la Banque à initier,\r\n                            auprès de tous services\r\n                            administratifs nationaux et étrangers, toute vérification, certification ou demande\r\n                            afin d’obtenir des informations le concernant.\r\n                        </div>\r\n\r\n                        <div class=\"article-subsection\">\r\n                            <span class=\"subsection-number\">12.12 -</span> Pour toute difficulté éventuelle ou\r\n                            réclamation relative au fonctionnement de son compte ou à l'utilisation des services mis à\r\n                            sa disposition, l'EMPRUNTEUR peut se référer aux interlocuteurs suivants :\r\n                            <ul class=\"article-list\">\r\n                                <li>- Son Gestionnaire de Compte ou le chef d'agence ; ceux-ci sont ses premiers\r\n                                    interlocuteurs et servent de relai entre la Banque et le Client.</li>\r\n                                <li>- Le Service ''Service Expérience Client'', en charge du suivi centralisé des\r\n                                    réclamations. Ce service est joignable aux coordonnées suivantes :</li>\r\n                            </ul>\r\n                        </div>\r\n\r\n                        <div class=\"service-client-box\">\r\n                            Expérience Client,<br>\r\n                            B.P. : 2933 Douala – Cameroun,<br>\r\n                            Centre de Relation Client : 8086 / (+237) 659 901 111 ;<br>\r\n                            Courriel : customer.care@afgbank.cm.\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"column\">\r\n                    <div class=\"article\">\r\n                        <div class=\"article-content\">\r\n                            <span class=\"subsection-number\">12.12 -</span> La Banque s’engage à accuser réception de la\r\n                            réclamation sous dix (10)\r\n                            jours et à apporter une réponse sous quarante-cinq (45) jours ouvrés maximum,\r\n                            sauf cas exceptionnels.\r\n\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"article\">\r\n                        <div class=\"article-title\">Article 13 : Successeurs et ayants droit</div>\r\n                        <div class=\"article-content\">\r\n                            <p>\r\n                                La présente Convention et le Transfert Fiduciaire bénéficieront au Bénéficiaire ainsi\r\n                                qu'à ses successeurs, ayants droit et cessionnaires respectifs.\r\n                            </p>\r\n                            <p>\r\n                                En cas de cession ou transfert par voie de novation de tout ou partie de ses droits et\r\n                                obligations au titre de la présente Convention par le Bénéficiaire, le Bénéficiaire\r\n                                réserve et maintient expressément ses droits, actions et privilèges au titre des\r\n                                présentes au profit de ses successeurs, ayants droit et cessionnaires\r\n                            </p>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"article\">\r\n                        <div class=\"article-title\">Article 14 : Election de domicile-juridiction compétente</div>\r\n                        <div class=\"article-content\">\r\n                            <div class=\"article-subsection\">\r\n                                <span class=\"subsection-number\">14.1 –</span> Pour l'exécution des présentes et de ses\r\n                                suites, comme pour tous différends pouvant intervenir entre la BANQUE et L'EMPRUNTEUR\r\n                                dans leurs rapports d'affaires, le demandeur à l'instance pourra assigner devant le\r\n                                Tribunal compétent dans le ressort duquel est situé le siège social ou le domicile du\r\n                                défendeur.\r\n                            </div>\r\n                            <div class=\"article-subsection\">\r\n                                <span class=\"subsection-number\">14.2 –</span> A cet effet, chaque partie élit domicile à\r\n                                son adresse ci-dessus.\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"text-right mb-15\">\r\n                        <p>Fait à <span class=\"title-background\">{{lieu_redaction}}</span> le <span\r\n                                class=\"title-background\">{{date_redaction}}</span></p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"two-columns mb-15\" style=\"margin-bottom: 5rem;\">\r\n\r\n                <div class=\"signature-title\">\r\n                    L'EMPRUNTEUR/ LE CEDANT\r\n                    <small class=\"\">(précédé de la mention lu et approuvé)</small> {{is_cash_collateral_applicable}}\r\n                </div>\r\n                <div class=\"signature-title\" style=\"text-align: end;\">Pour LA BANQUE</div>\r\n\r\n            </div>\r\n            <div class=\"manuscript-mention\" style=\"margin-bottom: 8rem;\">\r\n                <div class=\"font-bold\" style=\"text-align: center;\">LE CONSTITUANT {{is_nantissement_applicable}}</div class=\"font-bold\"><br>\r\n                1/ Faire précéder la signature de la mention manuscrite \"<strong>Bon pour nantissement du Bon de\r\n                    caisse N°<span class=\"title-background\">{{numero_bon_de_caisse}}</span> d'un montant de {{devise}} <span\r\n                        class=\"title-background\">{{montant_bon_caisse_nanti}}</span></strong>\" +SIGNATURE + NOM<br><br>\r\n                2/ Faire précéder la signature de la mention manuscrite \"<strong>Bon pour nantissement de mon Compte\r\n                    épargne N°<span class=\"title-background\">{{numero_compte_nanti}}</span> d'un montant de {{devise}}\r\n                    <span class=\"title-background\">{{montant_nantissement_epargne}}</span></strong>\" +SIGNATURE +\r\n                NOM\r\n            </div>\r\n\r\n            <div class=\"manuscript-mention\">\r\n                <div class=\"font-bold\" style=\"text-align: center;\">LA CAUTION PERSONNELLE ET SOLIDAIRE {{is_cautionnement_applicable}}</div class=\"font-bold\"><br>\r\n\r\n                Faire précéder la signature de la mention manuscrite \"<strong>Bon pour caution personnelle et\r\n                    solidaire des sommes dues et à devoir par <span\r\n                        class=\"title-background\">{{nom_caution}}</span> En principal, (sous réserve des intérêts\r\n                    de retard, commissions, primes, pénalités, frais, charges, taxes et autres accessoires), à\r\n                    hauteur du montant maximal garanti de <span\r\n                        class=\"title-background\">{{montant_caution}}</span> {{devise}} (<span\r\n                        class=\"title-background\">{{montant_caution_lettres}}</span>) comme indiqué\r\n                    ci-dessus</strong>\" +SIGNATURE + NOM<br>\r\n                si cautionnement personnel et solidaire)\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"page-footer\">\r\n            <strong>{{banque}}</strong><br>\r\n            Siège social : <span class=\"title-background\">{{siege_filiale}}</span>, \r\n            B.P. : <span class=\"title-background\">{{boite_postale}}</span>, \r\n            Tél : <span class=\"title-background\">{{numero_filiale}}</span> | \r\n            SA au capital social de : <span class=\"title-background\">{{capital_social}}</span> {{devise}} | \r\n            <span class=\"title-background\">{{agrement}}</span> | <span class=\"title-background\">{{siteweb}}</span>\r\n        </div>\r\n        <div class=\"page-number\">7</div>\r\n    </div>\r\n\r\n</body>\r\n\r\n</html>");

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/conventions/fr/CONVENTION_CREDIT_AMORTISSAGE_NEW.vue?vue&type=style&index=0&id=359faca9&scoped=true&lang=css":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/conventions/fr/CONVENTION_CREDIT_AMORTISSAGE_NEW.vue?vue&type=style&index=0&id=359faca9&scoped=true&lang=css ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CONVENTION_CREDIT_AMORTISSAGE_NEW_vue_vue_type_style_index_0_id_359faca9_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CONVENTION_CREDIT_AMORTISSAGE_NEW.vue?vue&type=style&index=0&id=359faca9&scoped=true&lang=css */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/conventions/fr/CONVENTION_CREDIT_AMORTISSAGE_NEW.vue?vue&type=style&index=0&id=359faca9&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CONVENTION_CREDIT_AMORTISSAGE_NEW_vue_vue_type_style_index_0_id_359faca9_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CONVENTION_CREDIT_AMORTISSAGE_NEW_vue_vue_type_style_index_0_id_359faca9_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/offview/bank/afg/memo/conventions/fr/CONVENTION_CREDIT_AMORTISSAGE_NEW.vue":
/*!************************************************************************************************************!*\
  !*** ./resources/js/components/offview/bank/afg/memo/conventions/fr/CONVENTION_CREDIT_AMORTISSAGE_NEW.vue ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CONVENTION_CREDIT_AMORTISSAGE_NEW_vue_vue_type_template_id_359faca9_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CONVENTION_CREDIT_AMORTISSAGE_NEW.vue?vue&type=template&id=359faca9&scoped=true */ "./resources/js/components/offview/bank/afg/memo/conventions/fr/CONVENTION_CREDIT_AMORTISSAGE_NEW.vue?vue&type=template&id=359faca9&scoped=true");
/* harmony import */ var _CONVENTION_CREDIT_AMORTISSAGE_NEW_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CONVENTION_CREDIT_AMORTISSAGE_NEW.vue?vue&type=script&lang=js */ "./resources/js/components/offview/bank/afg/memo/conventions/fr/CONVENTION_CREDIT_AMORTISSAGE_NEW.vue?vue&type=script&lang=js");
/* harmony import */ var _CONVENTION_CREDIT_AMORTISSAGE_NEW_vue_vue_type_style_index_0_id_359faca9_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CONVENTION_CREDIT_AMORTISSAGE_NEW.vue?vue&type=style&index=0&id=359faca9&scoped=true&lang=css */ "./resources/js/components/offview/bank/afg/memo/conventions/fr/CONVENTION_CREDIT_AMORTISSAGE_NEW.vue?vue&type=style&index=0&id=359faca9&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _CONVENTION_CREDIT_AMORTISSAGE_NEW_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _CONVENTION_CREDIT_AMORTISSAGE_NEW_vue_vue_type_template_id_359faca9_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _CONVENTION_CREDIT_AMORTISSAGE_NEW_vue_vue_type_template_id_359faca9_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "359faca9",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/offview/bank/afg/memo/conventions/fr/CONVENTION_CREDIT_AMORTISSAGE_NEW.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/offview/bank/afg/memo/conventions/fr/CONVENTION_CREDIT_AMORTISSAGE_NEW.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************!*\
  !*** ./resources/js/components/offview/bank/afg/memo/conventions/fr/CONVENTION_CREDIT_AMORTISSAGE_NEW.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CONVENTION_CREDIT_AMORTISSAGE_NEW_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CONVENTION_CREDIT_AMORTISSAGE_NEW.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/conventions/fr/CONVENTION_CREDIT_AMORTISSAGE_NEW.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CONVENTION_CREDIT_AMORTISSAGE_NEW_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/offview/bank/afg/memo/conventions/fr/CONVENTION_CREDIT_AMORTISSAGE_NEW.vue?vue&type=style&index=0&id=359faca9&scoped=true&lang=css":
/*!********************************************************************************************************************************************************************!*\
  !*** ./resources/js/components/offview/bank/afg/memo/conventions/fr/CONVENTION_CREDIT_AMORTISSAGE_NEW.vue?vue&type=style&index=0&id=359faca9&scoped=true&lang=css ***!
  \********************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CONVENTION_CREDIT_AMORTISSAGE_NEW_vue_vue_type_style_index_0_id_359faca9_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CONVENTION_CREDIT_AMORTISSAGE_NEW.vue?vue&type=style&index=0&id=359faca9&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/conventions/fr/CONVENTION_CREDIT_AMORTISSAGE_NEW.vue?vue&type=style&index=0&id=359faca9&scoped=true&lang=css");


/***/ }),

/***/ "./resources/js/components/offview/bank/afg/memo/conventions/fr/CONVENTION_CREDIT_AMORTISSAGE_NEW.vue?vue&type=template&id=359faca9&scoped=true":
/*!******************************************************************************************************************************************************!*\
  !*** ./resources/js/components/offview/bank/afg/memo/conventions/fr/CONVENTION_CREDIT_AMORTISSAGE_NEW.vue?vue&type=template&id=359faca9&scoped=true ***!
  \******************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CONVENTION_CREDIT_AMORTISSAGE_NEW_vue_vue_type_template_id_359faca9_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CONVENTION_CREDIT_AMORTISSAGE_NEW_vue_vue_type_template_id_359faca9_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CONVENTION_CREDIT_AMORTISSAGE_NEW_vue_vue_type_template_id_359faca9_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CONVENTION_CREDIT_AMORTISSAGE_NEW.vue?vue&type=template&id=359faca9&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/conventions/fr/CONVENTION_CREDIT_AMORTISSAGE_NEW.vue?vue&type=template&id=359faca9&scoped=true");


/***/ })

}]);