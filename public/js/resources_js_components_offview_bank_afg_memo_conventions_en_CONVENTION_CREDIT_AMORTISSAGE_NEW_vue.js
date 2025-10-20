(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_offview_bank_afg_memo_conventions_en_CONVENTION_CREDIT_AMORTISSAGE_NEW_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/conventions/en/CONVENTION_CREDIT_AMORTISSAGE_NEW.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/conventions/en/CONVENTION_CREDIT_AMORTISSAGE_NEW.vue?vue&type=script&lang=js ***!
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
/* harmony import */ var _raw_loader_html_afg_en_convention_pret_html__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!raw-loader!../../../../../../../html/afg/en/convention_pret.html */ "./node_modules/raw-loader/dist/cjs.js!./resources/js/html/afg/en/convention_pret.html");
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
      load_data: true
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
      var _this$dossier_credit2, _this$meta_data$dossi, _this$facilite2, _this$facilite3, _this$facilite4, _this$facilite5, _this$facilite6, _this$dossier_credit$, _this$dossier_credit3, _this$dossier_credit$2, _this$dossier_credit4, _this$dossier_credit5, _this$facilite7, _this$facilite8, _this$dossier_credit$3, _this$dossier_credit6, _this$dossier_credit7, _this$dossier_credit8, _this$dossier_credit9, _this$meta_data$dossi2, _this$meta_data$dossi16, _this$meta_data$dossi20, _this$meta_data$dossi24, _this$meta_data$dossi25;
      var _this$facilite, _this$authcheckUsr$si, _this$authcheckUsr, _this$authcheckUsr$si2, _this$authcheckUsr2, _this$meta_data$dossi3, _this$meta_data$dossi4, _this$meta_data$dossi5, _this$meta_data$dossi6, _this$meta_data$dossi7, _this$meta_data$dossi8, _this$meta_data$dossi9, _this$meta_data$dossi0, _this$meta_data$dossi1, _this$meta_data$dossi10, _this$meta_data$dossi11, _this$meta_data$dossi12, _this$meta_data$dossi13, _this$meta_data$dossi14, _this$meta_data$dossi15, _this$meta_data$dossi17, _this$meta_data$dossi18, _this$meta_data$dossi19, _this$meta_data$dossi21, _this$meta_data$dossi22, _this$formData, _this$meta_data$dossi23, _this$dossier_credit0, _this$dossier_credit1, duree, echeancierMapping, echeancier, montant_echeance, montant_credit, now, day, month, year, cashcollAmount, tb4, _this$cautionnement_p, _this$cautionnement_p2, _this$cautionnement_p3, _this$cautionnement_p4, _this$cautionnement_p5, _this$cautionnement_p6, _this$cautionnement_p7, _this$cautionnement_p8, _this$cautionnement_p9, _this$cautionnement_p0, _this$cautionnement_p1, _this$cautionnement_p10, _this$cautionnement_p11, _this$cautionnement_p12, _this$cautionnement_p13, _this$cautionnement_p14, _this$cautionnement_p15, _this$cautionnement_p16, _this$cautionnement_p17, _this$cautionnement_p18, _this$cautionnement_p19, _this$cautionnement_p20, _principal$firstname, _principal$lastname, data, nantissement, compte_epargne, bon_de_casse, principal, cash_collateral, _cash_collateral, _cash_collateral2, _this$meta_data$dossi26, _this$comptes, compte;
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
              _this.formData.statut_juridique = "Public Limited Company with a Board of Directors";
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
              montant_echeance = _this.convertNumber(_this.facilite.montant_echeance) || 0;
              montant_credit = _this.convertNumber(_this.facilite.montant_credit) || 0;
              _this.formData.nombre_echeance = Math.ceil(montant_credit / montant_echeance);
              console.log({
                montant_echeance: montant_echeance,
                montant_credit: montant_credit,
                nombre_echeance: _this.formData.nombre_echeance
              });
              now = new Date();
              day = String(now.getDate()).padStart(2, "0");
              month = String(now.getMonth() + 1).padStart(2, "0");
              year = now.getFullYear();
              _this.formData.date_octroit = (_this$meta_data$dossi23 = _this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi23 === void 0 || (_this$meta_data$dossi23 = _this$meta_data$dossi23["cred_pub_tb_120004"]) === null || _this$meta_data$dossi23 === void 0 ? void 0 : _this$meta_data$dossi23["date_deblocage_prev"];
              _this.formData.date_redaction = "".concat(day, "/").concat(month, "/").concat(year);
              cashcollAmount = _this.formatMontant((_this$dossier_credit0 = _this.dossier_credit) === null || _this$dossier_credit0 === void 0 || (_this$dossier_credit0 = _this$dossier_credit0.cred_pub_tb_120004) === null || _this$dossier_credit0 === void 0 || (_this$dossier_credit0 = _this$dossier_credit0.facilites_selectionnees[_this.facilite_index.index]) === null || _this$dossier_credit0 === void 0 ? void 0 : _this$dossier_credit0.cash_call_amount);
              _this.cashcollAcount = (_this$dossier_credit1 = _this.dossier_credit) === null || _this$dossier_credit1 === void 0 || (_this$dossier_credit1 = _this$dossier_credit1.cred_pub_tb_120004) === null || _this$dossier_credit1 === void 0 || (_this$dossier_credit1 = _this$dossier_credit1.facilites_selectionnees[_this.facilite_index.index]) === null || _this$dossier_credit1 === void 0 ? void 0 : _this$dossier_credit1.compte_cash_coll;
              _this.cashcollAmount = cashcollAmount || "......";
            }
            tb4 = (_this$meta_data$dossi24 = _this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi24 === void 0 ? void 0 : _this$meta_data$dossi24.cred_pub_tb_120008;
            if (tb4) {
              data = tb4 === null || tb4 === void 0 ? void 0 : tb4.garanties.find(function (el) {
                return el.id == 'caution';
              });
              _this.cautionnement_personnel = data.infos.find(function (el) {
                return el.isPrincipal == "Oui";
              });
              _this.formData.civilite_caution = ((_this$cautionnement_p = _this.cautionnement_personnel) === null || _this$cautionnement_p === void 0 ? void 0 : _this$cautionnement_p['sexe']) == 'Masculin' ? 'Monsieur' : 'Madame';

              // this.formData.nom_caution = this.cautionnement_personnel?.['firstname'] + ' ' + this.cautionnement_personnel?.['lastname'];
              _this.formData.nom_caution = [(_this$cautionnement_p2 = (_this$cautionnement_p3 = _this.cautionnement_personnel) === null || _this$cautionnement_p3 === void 0 ? void 0 : _this$cautionnement_p3.firstname) !== null && _this$cautionnement_p2 !== void 0 ? _this$cautionnement_p2 : '', (_this$cautionnement_p4 = (_this$cautionnement_p5 = _this.cautionnement_personnel) === null || _this$cautionnement_p5 === void 0 ? void 0 : _this$cautionnement_p5.lastname) !== null && _this$cautionnement_p4 !== void 0 ? _this$cautionnement_p4 : ''].filter(Boolean).join(' ');
              _this.formData.date_de_naissance_caution = (_this$cautionnement_p6 = _this.cautionnement_personnel) === null || _this$cautionnement_p6 === void 0 ? void 0 : _this$cautionnement_p6['date_naissance'];
              _this.formData.lieu_naissance_caution = (_this$cautionnement_p7 = _this.cautionnement_personnel) === null || _this$cautionnement_p7 === void 0 ? void 0 : _this$cautionnement_p7['lieu_naissance'];
              _this.formData.nom_du_pere_caution = (_this$cautionnement_p8 = _this.cautionnement_personnel) === null || _this$cautionnement_p8 === void 0 ? void 0 : _this$cautionnement_p8['nom_du_pere'];
              _this.formData.nom_de_la_mere_caution = (_this$cautionnement_p9 = _this.cautionnement_personnel) === null || _this$cautionnement_p9 === void 0 ? void 0 : _this$cautionnement_p9['nom_de_la_mere'];
              _this.formData.adresse_de_la_caution = (_this$cautionnement_p0 = _this.cautionnement_personnel) === null || _this$cautionnement_p0 === void 0 ? void 0 : _this$cautionnement_p0['lieu_habitation'];
              _this.formData.type_piece_identite_caution = (_this$cautionnement_p1 = _this.cautionnement_personnel) === null || _this$cautionnement_p1 === void 0 ? void 0 : _this$cautionnement_p1['type_piece'];
              _this.formData.num_piece_identite_caution = (_this$cautionnement_p10 = _this.cautionnement_personnel) === null || _this$cautionnement_p10 === void 0 ? void 0 : _this$cautionnement_p10['piece'];
              _this.formData.telephone_caution = (_this$cautionnement_p11 = _this.cautionnement_personnel) === null || _this$cautionnement_p11 === void 0 ? void 0 : _this$cautionnement_p11['telephone'];
              _this.formData.date_delivrance_piece_identite_caution = (_this$cautionnement_p12 = _this.cautionnement_personnel) === null || _this$cautionnement_p12 === void 0 ? void 0 : _this$cautionnement_p12['date_delivrance_piece'];
              _this.formData.lieu_delivrance_piece_identite_caution = (_this$cautionnement_p13 = _this.cautionnement_personnel) === null || _this$cautionnement_p13 === void 0 ? void 0 : _this$cautionnement_p13['lieu_delivration'];
              _this.formData.avoirs_investissements = (_this$cautionnement_p14 = _this.cautionnement_personnel) === null || _this$cautionnement_p14 === void 0 ? void 0 : _this$cautionnement_p14['avoirsInvestissements'];
              _this.formData.employeur_caution = (_this$cautionnement_p15 = _this.cautionnement_personnel) === null || _this$cautionnement_p15 === void 0 ? void 0 : _this$cautionnement_p15['nomEmployeur'];
              _this.formData.montant_caution = (_this$cautionnement_p16 = _this.cautionnement_personnel) === null || _this$cautionnement_p16 === void 0 ? void 0 : _this$cautionnement_p16['valeur_caution'];
              _this.formData.fonction_caution = (_this$cautionnement_p17 = _this.cautionnement_personnel) === null || _this$cautionnement_p17 === void 0 ? void 0 : _this$cautionnement_p17['fonction'];
              _this.formData.boite_postale_employeur_caution = (_this$cautionnement_p18 = _this.cautionnement_personnel) === null || _this$cautionnement_p18 === void 0 ? void 0 : _this$cautionnement_p18['bpEmployeur'];
              _this.formData.email_caution = (_this$cautionnement_p19 = _this.cautionnement_personnel) === null || _this$cautionnement_p19 === void 0 ? void 0 : _this$cautionnement_p19['email'];
              _this.formData.boite_postale_caution = (_this$cautionnement_p20 = _this.cautionnement_personnel) === null || _this$cautionnement_p20 === void 0 ? void 0 : _this$cautionnement_p20['boite_postale'];

              // nantissement compte epargne, bon de caisse, depot a terme ( DAT )
              nantissement = tb4 === null || tb4 === void 0 ? void 0 : tb4.garanties.find(function (el) {
                return el.id == 'nantissement';
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
                return el.id == 'cash_collateral';
              });
              if (cash_collateral) {
                cash_collateral = cash_collateral.infos[0];
                _this.cashcollAmount = ((_cash_collateral = cash_collateral) === null || _cash_collateral === void 0 ? void 0 : _cash_collateral.montant) || "......";
                _this.cashcollAccount = ((_cash_collateral2 = cash_collateral) === null || _cash_collateral2 === void 0 ? void 0 : _cash_collateral2.numero_compte_garanti) || ".....";
              }

              // information constituant
              _this.formData.nom_constituant = [(_principal$firstname = principal === null || principal === void 0 ? void 0 : principal.firstname) !== null && _principal$firstname !== void 0 ? _principal$firstname : '', (_principal$lastname = principal === null || principal === void 0 ? void 0 : principal.lastname) !== null && _principal$lastname !== void 0 ? _principal$lastname : ''].filter(Boolean).join(' ') || ".....";
              _this.formData.date_naissance_constituant = (principal === null || principal === void 0 ? void 0 : principal['date_naissance']) || ".....";
              _this.formData.lieu_naissance_constituant = (principal === null || principal === void 0 ? void 0 : principal['lieu_naissance']) || ".....";
              _this.formData.nom_pere_constituant = (principal === null || principal === void 0 ? void 0 : principal['nom_du_pere']) || ".....";
              _this.formData.nom_mere_constituant = (principal === null || principal === void 0 ? void 0 : principal['nom_de_la_mere']) || ".....";
              _this.formData.adresse_constituant = (principal === null || principal === void 0 ? void 0 : principal['lieu_habitation']) || ".....";
              _this.formData.type_piece_identite_constituant = (principal === null || principal === void 0 ? void 0 : principal['type_piece']) || ".....";
              _this.formData.num_piece_identite_constituant = (principal === null || principal === void 0 ? void 0 : principal['piece']) || ".....";
              _this.formData.telephone_constituant = (principal === null || principal === void 0 ? void 0 : principal['telephone']) || ".....";
              _this.formData.email_constituant = (principal === null || principal === void 0 ? void 0 : principal['email']) || ".....";
              _this.formData.boite_postale_constituant = (principal === null || principal === void 0 ? void 0 : principal['boite_postale']) || ".....";
              _this.formData.date_delivrance_piece_identite_constituant = (principal === null || principal === void 0 ? void 0 : principal['date_delivrance_piece']) || ".....";
              _this.formData.lieu_delivrance_piece_identite_constituant = (principal === null || principal === void 0 ? void 0 : principal['lieu_delivration']) || ".....";
              _this.formData.avoirs_investissements = (principal === null || principal === void 0 ? void 0 : principal['avoirsInvestissements']) || ".....";
              _this.formData.employeur_constituant = (principal === null || principal === void 0 ? void 0 : principal['nomEmployeur']) || ".....";
              _this.formData.fonction_constituant = (principal === null || principal === void 0 ? void 0 : principal['fonction']) || ".....";
              _this.formData.civilite_constituant = (principal === null || principal === void 0 ? void 0 : principal['sexe']) == 'Masculin' ? 'Monsieur' : 'Madame';
              _this.formData.boite_postale_employeur_constituant = (principal === null || principal === void 0 ? void 0 : principal['bpEmployeur']) || ".....";
              // compte d'epargne
              _this.formData.numero_compte_nanti = (compte_epargne === null || compte_epargne === void 0 ? void 0 : compte_epargne.numero_compte_nanti) || ".....";
              _this.formData.montant_nantissement_epargne = (compte_epargne === null || compte_epargne === void 0 ? void 0 : compte_epargne.montant_nanti) || ".....";

              // bon de caisse
              _this.formData.numero_bon_de_caisse = bon_de_casse === null || bon_de_casse === void 0 ? void 0 : bon_de_casse.numero_bon_de_caisse;
              _this.formData.date_souscription = bon_de_casse === null || bon_de_casse === void 0 ? void 0 : bon_de_casse.date_souscription;
              _this.formData.date_echeance = bon_de_casse === null || bon_de_casse === void 0 ? void 0 : bon_de_casse.date_echeance;
              _this.formData.montant_bon_caisse_nanti = bon_de_casse === null || bon_de_casse === void 0 ? void 0 : bon_de_casse.montant_nanti;
              _this.formData.souscripteur = bon_de_casse === null || bon_de_casse === void 0 ? void 0 : bon_de_casse.souscripteur;
              _this.formData.etablissement_depositaire = bon_de_casse === null || bon_de_casse === void 0 ? void 0 : bon_de_casse.etablissement_depositaire;
              _this.formData.compte_affectation = bon_de_casse === null || bon_de_casse === void 0 ? void 0 : bon_de_casse.compte_affectation;
              _this.formData.beneficiaire = bon_de_casse === null || bon_de_casse === void 0 ? void 0 : bon_de_casse.beneficiaire;
              _this.formData.lieu_souscription = bon_de_casse === null || bon_de_casse === void 0 ? void 0 : bon_de_casse.lieu_souscription;
              _this.formData.lieu_paiement = bon_de_casse === null || bon_de_casse === void 0 ? void 0 : bon_de_casse.lieu_paiement;
            }
            if ((_this$meta_data$dossi25 = _this.meta_data["dossier_credit"]) !== null && _this$meta_data$dossi25 !== void 0 && _this$meta_data$dossi25["cred_pub_tb_120003"]) {
              _this.comptes = (_this$meta_data$dossi26 = _this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi26 === void 0 || (_this$meta_data$dossi26 = _this$meta_data$dossi26["cred_pub_tb_120003"]) === null || _this$meta_data$dossi26 === void 0 ? void 0 : _this$meta_data$dossi26["comptes"];
              compte = (_this$comptes = _this.comptes) === null || _this$comptes === void 0 ? void 0 : _this$comptes.filter(function (x) {
                return x.type == "Compte courant";
              })[0]; // console.log("compte", this.comptes);
              _this.formData.code_guichet = (compte === null || compte === void 0 ? void 0 : compte.type_code) || "";
              _this.formData.numero_de_compte = (compte === null || compte === void 0 ? void 0 : compte.numero_compte) || "";
              _this.formData.cle_rib = compte === null || compte === void 0 ? void 0 : compte.iban;
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
      this.local_close_edit_mode = false;
      if (!this.on_saving) {
        this.$emit("edit-mode", {
          close: true
        });
        this.local_close_edit_mode = true;
      }
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
        _this4 = this;
      this.on_saving = true;
      this.$emit("autosaving");
      this.$axios.post(this.ebapisHost + "creditbuilder/api/v1/redaction-fiche-annexe/", {
        cred_pub_key: (_this$dossier_credit10 = this.dossier_credit) === null || _this$dossier_credit10 === void 0 ? void 0 : _this$dossier_credit10.cred_pub_key,
        filledData: newVal
      }).then(function () {
        _this4.on_saving = false;
        _this4.$emit("autosaving");
        if (!_this4.local_edit_mode) {
          _this4.$emit("edit-mode", {
            convention_id: _this4.formData.id
          });
          _this4.local_edit_mode = true;
        }
        if (!_this4.local_close_edit_mode) {
          _this4.$emit("edit-mode", {
            close: true
          });
          _this4.local_close_edit_mode = true;
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
      var _this5 = this;
      this.$nextTick(function () {
        _this5.loadContentHtml(true);
      });
      this.generatePdf(download);
    },
    generatePdf: function generatePdf(download) {
      var _this6 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var _this6$annexe;
        var conventionName, filename, iframe, doc, pages, pdf, pageWidth, pageHeight, i, page, canvas, imgWidth, imgHeight, imgData, pdfBlob;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _this6.pdf_process = true;
              conventionName = (_this6$annexe = _this6.annexe) === null || _this6$annexe === void 0 ? void 0 : _this6$annexe.type_facilite.trim().replace(/\s+/g, "_").toLowerCase(); // let filename = conventionName + ".pdf";
              filename = "Convention de cr\xE9dit amortissable - Particulier/ ".concat(conventionName) + ".pdf"; // const pages = document.querySelectorAll(".print-page");
              // if (!pages.length) {
              //     console.error("❌ Aucun élément `.print-page` trouvé.");
              //     this.pdf_process = false;
              //     return;
              // }
              // Vérifier que l'iframe existe
              iframe = _this6.$refs.monIframe;
              if (!(!iframe || !iframe.contentWindow || !iframe.contentWindow.document)) {
                _context3.next = 8;
                break;
              }
              console.error("❌ Iframe ou document de l'iframe introuvable.");
              _this6.pdf_process = false;
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
              _this6.pdf_process = false;
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
              _this6.pdfFile = new File([pdfBlob], filename, {
                type: "application/pdf"
              });
              if (download) {
                pdf.save(filename);
              } else {
                _this6.handleDoubleClickOrClick(_this6.indexSelectionne, _this6.pdfFile);
              }
              _context3.next = 43;
              break;
            case 40:
              _context3.prev = 40;
              _context3.t0 = _context3["catch"](20);
              console.error("Erreur lors de la génération du PDF :", _context3.t0);
            case 43:
              _context3.prev = 43;
              _this6.pdf_process = false; // Désactiver l'indicateur, même en cas d'erreur
              _this6.$nextTick(function () {
                _this6.loadContentHtml(false);
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
      var _this7 = this;
      EventBus.$emit("open-extra-file-explorer");
      EventBus.$emit("transmission-file", {
        pdfFile: pdfFile
      });

      // let name= "Lettre {(*)}notifications_" + index +"_" +this.$route.params.templateId

      setTimeout(function () {
        EventBus.$emit("data-extra-file-explorer", {
          name: "Convention {(*)}credits_amortissable_".concat(index, "_").concat(_this7.$route.params.templateId),
          is_auto: true
        });
      }, 1000);
    },
    encryptData: function encryptData(data, secretKey) {
      return crypto_js__WEBPACK_IMPORTED_MODULE_3___default().AES.encrypt(JSON.stringify(data), secretKey).toString();
    },
    buildOffPrintable: function buildOffPrintable() {
      var _arguments = arguments,
        _this8 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        var retryCount, targetElement, preloader_content, elements, printableContainer, PAGE_WIDTH, PAGE_HEIGHT, MARGIN, PADDING, FOOTER_HEIGHT, QR_HEIGHT, AVAILABLE_HEIGHT, currentPage, currentHeight, pageCounter, createPage, createFooter, _applyStyleToFirstP, paginationDiv, qrCode;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              retryCount = _arguments.length > 0 && _arguments[0] !== undefined ? _arguments[0] : 0;
              _this8.build_off = false;
              targetElement = _this8.$refs.contentToCapture;
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
              return _context4.abrupt("return", _this8.buildOffPrintable(retryCount + 1));
            case 10:
              return _context4.abrupt("return");
            case 11:
              if (_this8.logo) {
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
              return _context4.abrupt("return", _this8.buildOffPrintable(retryCount + 1));
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
                footer.innerHTML = "\n          <strong>".concat(_this8.formData.banque, "</strong><br>\n          Si\xE8ge social : ").concat(_this8.formData.siege, ", B.P. : ").concat(_this8.formData.boite_postale, ", T\xE9l : ").concat(_this8.numero_filiale, " |\n          SA au capital social de : ").concat(_this8.formData.capital_social, " ").concat(_this8.formData.devise, " |\n          R.C N\xB0 DLA/2008/B/1195 | N\xB0 Contrib M0 608 000 250 28 W | Agr\xE9ment N\xB0 00000 322/MINFI du 06 juillet 2015 | www.afgbank.cm\n        ");
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
                  if (pageCounter === 1 && _this8.logo) {
                    var logoImg = document.createElement("img");
                    logoImg.src = "/images/".concat(_this8.logo);
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
                qrCode = _this8.generateQRCode(100);
                qrCode.style.position = "absolute";
                qrCode.style.right = "".concat(PADDING / 2, "px");
                qrCode.style.bottom = "".concat(FOOTER_HEIGHT - 50, "px");
                currentPage.appendChild(qrCode);
                currentPage.appendChild(createFooter());
                printableContainer.appendChild(currentPage);
              }
              document.querySelector("#preloader-content").textContent = "";
              document.querySelector("#preloader-content").remove();
              _this8.build_off = true;
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
        _this9 = this;
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
          _this9.detail_garantie.push(_objectSpread({}, garantie));
        }
      });
      return this.detail_garantie;
    },
    getAgenceLocation: function getAgenceLocation() {
      var _this0 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
        var _this0$authcheckUsr, _yield$axios$post, data;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              _context5.prev = 0;
              _context5.next = 3;
              return axios.post("/api/Helpdatabase/get-agence-location", {
                codeagence: (_this0$authcheckUsr = _this0.authcheckUsr) === null || _this0$authcheckUsr === void 0 ? void 0 : _this0$authcheckUsr.codeagence
              });
            case 3:
              _yield$axios$post = _context5.sent;
              data = _yield$axios$post.data;
              _this0.formData.lieu_redation = data.data;
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
        _this1 = this;
      if (((_this$dossier_credit14 = this.dossier_credit) === null || _this$dossier_credit14 === void 0 || (_this$dossier_credit14 = _this$dossier_credit14.cred_pub_tb_15502) === null || _this$dossier_credit14 === void 0 || (_this$dossier_credit14 = _this$dossier_credit14.conventions) === null || _this$dossier_credit14 === void 0 ? void 0 : _this$dossier_credit14.length) > 0 && (_this$facilite9 = this.facilite) !== null && _this$facilite9 !== void 0 && _this$facilite9.type_facilite) {
        var _this$dossier_credit$4;
        // console.log("this.dossier_credit?.cred_pub_tb_15502?.conventions?.length", this.dossier_credit?.cred_pub_tb_15502?.conventions?.length)
        // console.log("this.facilite.type_facilite", this.facilite.type_facilite)
        var index = this.dossier_credit.cred_pub_tb_15502.conventions.findIndex(function (convention) {
          return convention.type_facilite === _this1.facilite.type_facilite;
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
      var _this$dossier_credit15, _this$dossier_credit16, _this$formData2, _this$formData3, _this$formData4, _this$formData5, _this$formData6, _this$formData7, _this$formData8, _this$formData9, _this$formData0, _this$formData1, _this$formData10, _this$formData11, _this$formData12, _this$formData13, _this$formData14, _this$formData15, _this$formData16, _this$formData17, _this$formData18, _this$formData19, _this$formData20, _this$formData21, _this$formData22, _this$facilite0, _this$facilite1, _this$facilite10, _this$facilite11, _this$dossier_credit17, _this$dossier_credit18, _this$dossier_credit19, _this$dossier_credit20, _this$dossier_credit21, _this$dossier_credit22, _this$formData23, _this$facilite12, _this$formData24, _this$formData25, _this$formData26, _this$formData27, _this$formData28, _this$formData29, _this$formData30, _this$formData31, _this$formData32, _this$formData33, _this$formData34, _this$formData35, _this$formData36, _this$formData37, _this$formData38, _this$formData39, _this$formData40, _this$formData41, _this$formData42, _this$formData43, _this$formData44, _this$formData45, _this$formData46, _this$formData47, _this$formData48, _this$formData49, _this$formData50, _this$formData51, _this$formData52, _this$formData53, _this$formData54, _this$formData55, _this$formData56, _this$formData57, _this$formData58, _this$formData59, _this$formData60, _this$formData61, _this$formData62, _this$formData63, _this$formData64, _this$formData65, _this$formData66, _this$formData67, _injectPlaceholders;
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
      var htmlModifié = injectPlaceholders(_raw_loader_html_afg_en_convention_pret_html__WEBPACK_IMPORTED_MODULE_6__["default"], (_injectPlaceholders = {
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
      }, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_injectPlaceholders, "boite_postale", ((_this$formData26 = this.formData) === null || _this$formData26 === void 0 ? void 0 : _this$formData26.boite_postale) || "....."), "numero_filiale", this.numero_filiale || "....."), "agrement", ((_this$formData27 = this.formData) === null || _this$formData27 === void 0 ? void 0 : _this$formData27.agrement) || "....."), "siteweb", ((_this$formData28 = this.formData) === null || _this$formData28 === void 0 ? void 0 : _this$formData28.siteweb) || "....."), "billett_ordre_mt", this.formatMontant(this.formData.montant_credit) || "....."), "billett_ordre_mt_lettres", this.convertirEnLettres(this.formatMontant(this.formData.montant_credit)) || "....."), "rib", ((_this$formData29 = this.formData) === null || _this$formData29 === void 0 ? void 0 : _this$formData29.cle_rib) || "....."), "lieu_redaction", ((_this$formData30 = this.formData) === null || _this$formData30 === void 0 ? void 0 : _this$formData30.lieu_redation) || "....."), "date_redaction", ((_this$formData31 = this.formData) === null || _this$formData31 === void 0 ? void 0 : _this$formData31.date_redaction) || "....."), "boite_postale_employeur", ((_this$formData32 = this.formData) === null || _this$formData32 === void 0 ? void 0 : _this$formData32.boite_postale_employeur) || "....."), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_injectPlaceholders, "logo", this.logo || "....."), "statut_juridique", (_this$formData33 = this.formData) === null || _this$formData33 === void 0 ? void 0 : _this$formData33.statut_juridique), "nombre_echeances", ((_this$formData34 = this.formData) === null || _this$formData34 === void 0 ? void 0 : _this$formData34.nombre_echeance) || "....."), "nombre_echeances_lettre", this.convertirEnLettres((_this$formData35 = this.formData) === null || _this$formData35 === void 0 ? void 0 : _this$formData35.nombre_echeance) || "....."), "nom_caution", ((_this$formData36 = this.formData) === null || _this$formData36 === void 0 ? void 0 : _this$formData36.nom_caution) || "....."), "date_naissance_caution", ((_this$formData37 = this.formData) === null || _this$formData37 === void 0 ? void 0 : _this$formData37.date_de_naissance_caution) || "....."), "lieu_naissance_caution", ((_this$formData38 = this.formData) === null || _this$formData38 === void 0 ? void 0 : _this$formData38.lieu_naissance_caution) || "....."), "nom_pere_caution", ((_this$formData39 = this.formData) === null || _this$formData39 === void 0 ? void 0 : _this$formData39.nom_du_pere_caution) || "....."), "nom_mere_caution", ((_this$formData40 = this.formData) === null || _this$formData40 === void 0 ? void 0 : _this$formData40.nom_de_la_mere_caution) || "....."), "adresse_caution", ((_this$formData41 = this.formData) === null || _this$formData41 === void 0 ? void 0 : _this$formData41.adresse_de_la_caution) || "....."), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_injectPlaceholders, "type_piece_identite_caution", ((_this$formData42 = this.formData) === null || _this$formData42 === void 0 ? void 0 : _this$formData42.type_piece_identite_caution) || "....."), "num_piece_identite_caution", ((_this$formData43 = this.formData) === null || _this$formData43 === void 0 ? void 0 : _this$formData43.num_piece_identite_caution) || "....."), "date_delivrance_piece_identite_caution", ((_this$formData44 = this.formData) === null || _this$formData44 === void 0 ? void 0 : _this$formData44.date_delivrance_piece_identite_caution) || "....."), "telephone_caution", ((_this$formData45 = this.formData) === null || _this$formData45 === void 0 ? void 0 : _this$formData45.telephone_caution) || "....."), "employeur_caution", ((_this$formData46 = this.formData) === null || _this$formData46 === void 0 ? void 0 : _this$formData46.employeur_caution) || "....."), "fonction_caution", ((_this$formData47 = this.formData) === null || _this$formData47 === void 0 ? void 0 : _this$formData47.fonction) || "....."), "lieu_delivrance_piece_identite_caution", ((_this$formData48 = this.formData) === null || _this$formData48 === void 0 ? void 0 : _this$formData48.lieu_delivrance_piece_identite_caution) || "....."), "civilite_caution", ((_this$formData49 = this.formData) === null || _this$formData49 === void 0 ? void 0 : _this$formData49.civilite_caution) || "....."), "email_caution", this.formData.email_caution || "....."), "bp_caution", this.formData.boite_postale_caution || "....."), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_injectPlaceholders, "bp_employeur_caution", ((_this$formData50 = this.formData) === null || _this$formData50 === void 0 ? void 0 : _this$formData50.boite_postale_employeur_caution) || "....."), "montant_caution", this.formData.montant_caution), "montant_caution_lettres", this.convertirEnLettres(this.formData.montant_caution)), "nom_cedant", this.cashcollAmount ? (_this$formData51 = this.formData) === null || _this$formData51 === void 0 ? void 0 : _this$formData51.nom_client : "....."), "date_naissance_cedant", this.cashcollAmount ? this.formatDate(this.formData.date_naissance) : "....."), "lieu_naissance_cedant", this.cashcollAmount ? (_this$formData52 = this.formData) === null || _this$formData52 === void 0 ? void 0 : _this$formData52.lieu_naissance : "....."), "nom_du_pere_cedant", this.cashcollAmount ? (_this$formData53 = this.formData) === null || _this$formData53 === void 0 ? void 0 : _this$formData53.nom_du_pere : "....."), "nom_de_la_mere_cedant", this.cashcollAmount ? (_this$formData54 = this.formData) === null || _this$formData54 === void 0 ? void 0 : _this$formData54.nom_de_la_mere : "....."), "adresse_cedant", this.cashcollAmount ? (_this$formData55 = this.formData) === null || _this$formData55 === void 0 ? void 0 : _this$formData55.adresse : "....."), "boite_postale_cedant", this.cashcollAmount ? (_this$formData56 = this.formData) === null || _this$formData56 === void 0 ? void 0 : _this$formData56.boite_postale_client : "....."), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_injectPlaceholders, "telephone_cedant", this.cashcollAmount ? (_this$formData57 = this.formData) === null || _this$formData57 === void 0 ? void 0 : _this$formData57.telephone : "....."), "email_cedant", this.cashcollAmount ? (_this$formData58 = this.formData) === null || _this$formData58 === void 0 ? void 0 : _this$formData58.email : "....."), "fonction_cedant", this.cashcollAmount ? (_this$formData59 = this.formData) === null || _this$formData59 === void 0 ? void 0 : _this$formData59.fonction : "....."), "employeur_cedant", this.cashcollAmount ? (_this$formData60 = this.formData) === null || _this$formData60 === void 0 ? void 0 : _this$formData60.employeur : "....."), "titre_identification_cedant", this.cashcollAmount ? (_this$formData61 = this.formData) === null || _this$formData61 === void 0 ? void 0 : _this$formData61.titre_identification : "....."), "num_identification_cedant", this.cashcollAmount ? (_this$formData62 = this.formData) === null || _this$formData62 === void 0 ? void 0 : _this$formData62.num_identification : "....."), "date_delivrance_cedant", this.cashcollAmount ? this.formatDate(this.formData.date_delivrance) : "....."), "lieu_delivrance_cedant", this.cashcollAmount ? (_this$formData63 = this.formData) === null || _this$formData63 === void 0 ? void 0 : _this$formData63.lieu_delivrance : "....."), "boite_postale_employeur_cedant", this.cashcollAmount ? (_this$formData64 = this.formData) === null || _this$formData64 === void 0 ? void 0 : _this$formData64.boite_postale_employeur : "....."), "nom_constituant", ((_this$formData65 = this.formData) === null || _this$formData65 === void 0 ? void 0 : _this$formData65.nom_constituant) || "....."), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_injectPlaceholders, "date_naissance_constituant", this.formData.date_naissance_constituant || "....."), "lieu_naissance_constituant", this.formData.lieu_naissance_constituant || "....."), "nom_pere_constituant", this.formData.nom_pere_constituant || "....."), "nom_mere_constituant", this.formData.nom_mere_constituant || "....."), "adresse_constituant", this.formData.adresse_constituant || "....."), "type_piece_identite_constituant", this.formData.type_piece_identite_constituant || "....."), "num_piece_identite_constituant", this.formData.num_piece_identite_constituant || "....."), "telephone_constituant", this.formData.telephone_constituant || "....."), "email_constituant", this.formData.email_constituant || "....."), "boite_postale_constituant", this.formData.boite_postale_constituant), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_injectPlaceholders, "date_delivrance_piece_identite_constituant", this.formData.date_delivrance_piece_identite_constituant || "....."), "lieu_delivrance_piece_identite_constituant", this.formData.lieu_delivrance_piece_identite_constituant || "....."), "avoirs_investissements", this.formData.avoirs_investissements || "....."), "employeur_constituant", this.formData.employeur_constituant || "....."), "fonction_constituant", this.formData.fonction_constituant || "....."), "civilite_constituant", this.formData.civilite_constituant || "....."), "boite_postale_employeur_constituant", this.formData.boite_postale_employeur_constituant || "....."), "numero_compte_nanti", this.formData.numero_compte_nanti || "....."), "montant_nantissement_epargne", this.formData.montant_nantissement_epargne || "....."), "numero_bon_de_caisse", this.formData.numero_bon_de_caisse || "....."), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_injectPlaceholders, "date_souscription", this.formData.date_souscription || "....."), "date_echeance_bon", this.formData.date_echeance || "....."), "montant_bon_caisse_nanti", this.formData.montant_bon_caisse_nanti || "....."), "montant_bon_caisse_nanti_lettre", this.convertirEnLettres(this.formData.montant_bon_caisse_nanti) || "....."), "souscripteur_bon", this.formData.souscripteur || "....."), "etablissement_depositaire", this.formData.etablissement_depositaire || "....."), "compte_affectation_bon", this.formData.compte_affectation || "....."), "beneficiaire_bon", this.formData.beneficiaire || "....."), "lieu_souscription_bon", this.formData.lieu_souscription || "....."), "lieu_paiement_bon", this.formData.lieu_paiement || "....."), _defineProperty(_defineProperty(_defineProperty(_injectPlaceholders, "date_octroi_credit", this.formData.date_octroit || "....."), "type_financement", ((_this$formData66 = this.formData) === null || _this$formData66 === void 0 ? void 0 : _this$formData66.type_financement) || "....."), "code_type_financement", ((_this$formData67 = this.formData) === null || _this$formData67 === void 0 ? void 0 : _this$formData67.code_type_financement) || ".....")));

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
        var _this10 = this;
        if (!this.first_time) {
          clearTimeout(this.debounce);
          this.debounce = setTimeout(function () {
            _this10.send2Backend(newVal);
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
        var _this11 = this;
        if (!newVal) {
          this.$nextTick(function () {
            _this11.loadContentHtml();
          });
        }
      },
      deep: true,
      immediate: true
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/conventions/en/CONVENTION_CREDIT_AMORTISSAGE_NEW.vue?vue&type=template&id=8b044274&scoped=true":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/conventions/en/CONVENTION_CREDIT_AMORTISSAGE_NEW.vue?vue&type=template&id=8b044274&scoped=true ***!
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
  }, [!_vm.pdf_process ? [_c("button", {
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
  }), _vm._v("\n                    Attach to File\n                ")]), _vm._v(" "), _c("button", {
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
  }), _vm._v("\n                    Download generated file\n                ")])] : _c("div", {
    staticStyle: {
      display: "inline-block"
    }
  }, [_vm._m(1), _vm._v(" "), _c("span", {
    staticStyle: {
      "font-size": "0.9rem",
      "margin-left": "5px"
    }
  }, [_vm._v("\n                Generating  PDF please wait...\n            ")])])], 2), _vm._v(" "), _c("iframe", {
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

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/conventions/en/CONVENTION_CREDIT_AMORTISSAGE_NEW.vue?vue&type=style&index=0&id=8b044274&scoped=true&lang=css":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/conventions/en/CONVENTION_CREDIT_AMORTISSAGE_NEW.vue?vue&type=style&index=0&id=8b044274&scoped=true&lang=css ***!
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
___CSS_LOADER_EXPORT___.push([module.id, "\nfieldset[data-v-8b044274] {\r\n    border: 1px solid #ddd !important;\r\n    position: relative;\r\n    padding-left: 10px !important;\r\n    width: 100%;\r\n    background-color: #f5f5f5;\r\n    margin-top: 15px;\r\n    min-width: -moz-max-content;\r\n    min-width: max-content;\n}\nlegend[data-v-8b044274] {\r\n    font-weight: bold;\r\n    padding: 4px;\r\n    width: -moz-max-content;\r\n    width: max-content;\r\n    padding: 0 15px;\r\n    font-size: 16px;\r\n    float: none;\r\n    background-color: #ffffff;\r\n    border: 1px solid #ddd;\r\n    border-radius: 4px;\n}\nfieldset[data-v-8b044274] {\r\n    border: 1px solid #ddd !important;\r\n    position: relative;\r\n    padding-left: 10px !important;\r\n    width: 100%;\r\n    background-color: #f5f5f5;\r\n    margin-top: 15px;\n}\nlegend[data-v-8b044274] {\r\n    font-weight: bold;\r\n    padding: 4px;\r\n    width: -moz-max-content;\r\n    width: max-content;\r\n    padding: 0 15px;\r\n    font-size: 16px;\r\n    float: none;\r\n    background-color: #ffffff;\r\n    border: 1px solid #ddd;\r\n    border-radius: 4px;\n}\n.box[data-v-8b044274] {\r\n    border-color: #212529;\r\n    border-style: solid;\r\n    border-width: 1px;\r\n    padding: 10px;\n}\n.actd[data-v-8b044274] {\r\n    border-color: #212529;\r\n    border-style: solid;\r\n    border-width: 1px;\r\n    padding: 10px;\n}\n.pre[data-v-8b044274] {\r\n    font-size: 0.6rem;\n}\n.form-control[data-v-8b044274] {\r\n    display: initial;\r\n    width: initial;\n}\n.paragraph[data-v-8b044274] {\r\n    margin: 20px 0px;\r\n    position: relative;\r\n    padding: 5px;\n}\ninput[data-v-8b044274],\r\nselect[data-v-8b044274] {\r\n    margin: 2px;\r\n    border-color: #34495e;\r\n    color: black;\r\n    font-size: 13px;\r\n    height: 34px;\r\n    font-weight: bold;\r\n    background-color: #ffffad;\r\n    margin-right: 0px;\r\n    min-width: 45px;\r\n    border-top-right-radius: 0;\r\n    border-bottom-right-radius: 0;\r\n    border-right: none;\n}\n.input-group-append[data-v-8b044274] {\r\n    margin: 0 2px;\n}\n.input-group-text-right[data-v-8b044274] {\r\n    border-radius: 0 0.375rem 0.375rem 0;\r\n    margin-left: 0px;\r\n    cursor: pointer;\n}\n.input-group-text-left[data-v-8b044274] {\r\n    border-radius: 0.375rem 0 0 0.375rem;\n}\n.li-convention[data-v-8b044274] {\r\n    list-style-type: disc;\r\n    margin: 0;\r\n    padding: 0;\r\n    margin-left: 20px;\n}\n.input-group-text[data-v-8b044274] {\r\n    font-size: 13px;\r\n    line-height: 1.5;\r\n    height: 34px;\r\n    padding: 0.375rem 0.75rem;\r\n    border: 1px solid #34495e;\r\n    min-width: 45px;\r\n    text-align: center;\r\n    justify-content: center;\r\n    background-color: #ffffad;\r\n    color: black;\n}\n.checkbox-container .checkbox-input[data-v-8b044274] {\r\n    position: absolute;\r\n    opacity: 0;\r\n    cursor: pointer;\r\n    height: 80%;\r\n    width: 80%;\r\n    top: 0;\r\n    left: 0;\r\n    z-index: 1;\n}\n.checkbox-container[data-v-8b044274] {\r\n    display: block;\r\n    position: relative;\r\n    cursor: pointer;\r\n    -webkit-user-select: none;\r\n       -moz-user-select: none;\r\n            user-select: none;\n}\n.checkbox-container .checkbox-icon-cancel[data-v-8b044274] {\r\n    position: relative;\r\n    top: 0;\r\n    left: 0;\r\n    height: 50px;\r\n    width: 50px;\r\n    transition: all 0.3s;\r\n    font-size: 1.5em;\r\n    color: red;\n}\n.checkbox-container .checkbox-icon-success[data-v-8b044274] {\r\n    position: relative;\r\n    top: 0;\r\n    left: 0;\r\n    height: 50px;\r\n    width: 50px;\r\n    transition: all 0.3s;\r\n    font-size: 1.5em;\r\n    color: green;\n}\n.checkbox-container .checkbox-icon-success[data-v-8b044274] {\r\n    display: none;\n}\n.checkbox-container .checkbox-input:checked ~ .checkbox-icon-cancel[data-v-8b044274] {\r\n    display: none;\n}\n.checkbox-container .checkbox-input:checked ~ .checkbox-icon-success[data-v-8b044274] {\r\n    display: contents;\n}\n.valid-section[data-v-8b044274] {\r\n    pointer-events: auto;\r\n    top: 50%;\r\n    transform: translateY(-50%);\r\n    width: -moz-fit-content;\r\n    width: fit-content;\n}\n.st-valide[data-v-8b044274] {\r\n    position: absolute;\r\n    z-index: 99;\r\n    right: -252px;\r\n    top: 10px;\n}\r\n\r\n/*this is the new approach*/\n.position-relative[data-v-8b044274]:has(.valid-section:hover) {\r\n    background: #3498db6f;\n}\n.onAutoSave[data-v-8b044274] {\r\n    cursor: wait !important;\n}\n.onAutoSave > span[data-v-8b044274] {\r\n    pointer-events: none;\r\n    opacity: 0.6;\r\n    cursor: wait !important;\n}\nul[data-v-8b044274],\r\nli[data-v-8b044274] {\r\n    list-style-type: inherit;\n}\n.telephone-container[data-v-8b044274] {\r\n    white-space: nowrap;\r\n    overflow-x: auto;\r\n    padding: 5px 0;\n}\n.telephone-container[data-v-8b044274]::-webkit-scrollbar {\r\n    height: 8px;\n}\n.telephone-container[data-v-8b044274]::-webkit-scrollbar-thumb {\r\n    background-color: #ccc;\r\n    border-radius: 4px;\n}\ninput[type=\"checkbox\"][data-v-8b044274] {\r\n    height: 20px !important;\r\n    width: 20px !important;\n}\n.block[data-v-8b044274] {\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr;\r\n    gap: 5px;\r\n    margin-bottom: 10px;\r\n    align-items: stretch;\n}\n.column[data-v-8b044274] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 5px;\r\n    padding: 5px;\n}\n.article[data-v-8b044274] {\r\n    text-align: justify;\r\n    margin-top: 10px;\n}\n.article p[data-v-8b044274] {\r\n    margin: 10px 0;\n}\n.list[data-v-8b044274] {\r\n    margin-left: 20px;\r\n    list-style-type: disc;\n}\n.list li[data-v-8b044274] {\r\n    margin-bottom: 10px;\r\n    text-align: justify;\n}\n.highlight_[data-v-8b044274] {\r\n    font-weight: bold;\n}\r\n", ""]);
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

/***/ "./node_modules/raw-loader/dist/cjs.js!./resources/js/html/afg/en/convention_pret.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./resources/js/html/afg/en/convention_pret.html ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!DOCTYPE html>\r\n<html lang=\"fr\">\r\n\r\n<head>\r\n    <meta charset=\"UTF-8\">\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n    <title>Amortizing Credit Agreement with Security Interests - Individuals</title>\r\n    <style>\r\n        :root {\r\n            --primary-color: #000;\r\n            --font-size-small: 7.5pt;\r\n            --font-size-normal: 8.5pt;\r\n            --font-size-large: 10pt;\r\n            --page-margin: 2rem;\r\n            --content-padding: 15px;\r\n        }\r\n\r\n        * {\r\n            margin: 0;\r\n            padding: 0;\r\n            box-sizing: border-box;\r\n        }\r\n\r\n        body {\r\n            font-family: \"Arial Narrow\", Arial, sans-serif;\r\n            font-size: var(--font-size-normal);\r\n            line-height: 1.2;\r\n            color: var(--primary-color);\r\n            font-size: calc(8.5px * 1.33);\r\n        }\r\n\r\n        .print-page {\r\n            width: 210mm;\r\n            height: 297mm;\r\n            margin: 20px auto;\r\n            margin-top: 40px;\r\n            padding: var(--page-margin);\r\n            border: 1px solid #ddd;\r\n            position: relative;\r\n            page-break-after: always;\r\n            display: flex;\r\n            flex-direction: column;\r\n        }\r\n\r\n        @media print {\r\n            body {\r\n                background: white;\r\n            }\r\n\r\n            .print-page {\r\n                margin: 0;\r\n                border: none;\r\n                page-break-after: always;\r\n            }\r\n\r\n            @page {\r\n                size: A4;\r\n                margin: 0;\r\n            }\r\n        }\r\n\r\n        /* Header */\r\n        /* .page-header {\r\n            margin-bottom: 15px;\r\n            \r\n        } */\r\n\r\n        .logo-container {\r\n            width: 80px;\r\n            margin-bottom: 10px;\r\n        }\r\n\r\n        .logo-container img {\r\n            width: 100%;\r\n            height: auto;\r\n        }\r\n\r\n        .title-background {\r\n            background: #ffff00;\r\n\r\n        }\r\n\r\n        .document-title {\r\n            border-top: 2px solid #000;\r\n            border-right: 2px solid #000;\r\n            border-left: 2px solid #000;\r\n            border-bottom: 4px solid #000;\r\n            padding: 8px 15px;\r\n            text-align: center;\r\n            font-weight: bold;\r\n            font-size: var(--font-size-large);\r\n            margin-bottom: 15px;\r\n        }\r\n\r\n        /* Footer */\r\n        .page-footer {\r\n            position: absolute;\r\n            bottom: 5mm;\r\n            left: var(--page-margin);\r\n            right: var(--page-margin);\r\n            text-align: center;\r\n            font-size: var(--font-size-small);\r\n            line-height: 1.3;\r\n            /* border-top: 1px solid #000; */\r\n            /* padding-top: 5px; */\r\n        }\r\n\r\n        .page-number {\r\n            position: absolute;\r\n            bottom: 3mm;\r\n            right: var(--page-margin);\r\n            font-weight: bold;\r\n            font-size: var(--font-size-small);\r\n        }\r\n\r\n        /* Content sections */\r\n        .parties-section {\r\n            margin-bottom: 15px;\r\n        }\r\n\r\n        .border {\r\n            border: 1px solid #000;\r\n        }\r\n\r\n        .party-box {\r\n            padding: 3px;\r\n            line-height: 1.5;\r\n            /* margin-bottom: 10px; */\r\n        }\r\n\r\n        .party-title {\r\n            font-weight: bold;\r\n        }\r\n\r\n        .party-designation {\r\n            margin-top: 5px;\r\n            padding-top: 3px;\r\n        }\r\n\r\n        /* Articles */\r\n        .content-body {\r\n            flex: 1;\r\n        }\r\n\r\n        .article {\r\n            margin-bottom: 15px;\r\n        }\r\n\r\n        .article-title {\r\n            font-weight: bold;\r\n            text-decoration: underline;\r\n            margin-bottom: 8px;\r\n            font-size: var(--font-size-large);\r\n        }\r\n\r\n        .article-content {\r\n            text-align: justify;\r\n            line-height: 1.3;\r\n        }\r\n\r\n        .article-subsection {\r\n            margin-bottom: 10px;\r\n        }\r\n\r\n        .subsection-number {\r\n            font-weight: bold;\r\n            font-size: var(--font-size-small);\r\n        }\r\n\r\n        /* Tables */\r\n        .conditions-table {\r\n            width: 100%;\r\n            border-collapse: collapse;\r\n            /* margin: 10px 0; */\r\n        }\r\n\r\n        .conditions-table td {\r\n            border: 1px solid #000;\r\n            padding: 1px 2px;\r\n            vertical-align: top;\r\n        }\r\n\r\n        .conditions-table .label-col {\r\n            width: 60%;\r\n        }\r\n\r\n        .conditions-table .value-col {\r\n            width: 40%;\r\n        }\r\n\r\n        .teg-table {\r\n            width: 100%;\r\n            border-collapse: collapse;\r\n            margin: 10px 0;\r\n            text-align: center;\r\n        }\r\n\r\n        .teg-table th,\r\n        .teg-table td {\r\n            border: 1px solid #000;\r\n            padding: 4px;\r\n            font-size: var(--font-size-small);\r\n        }\r\n\r\n        .teg-table th {\r\n            background: white;\r\n            font-style: italic;\r\n        }\r\n\r\n        /* Two column layout */\r\n        .two-columns {\r\n            display: grid;\r\n            gap: 20px;\r\n            margin-top: 10px;\r\n            grid-template-columns: repeat(2, 1fr);\r\n        }\r\n\r\n        .column {\r\n            flex: 1;\r\n        }\r\n\r\n        /* Lists */\r\n        .article-list {\r\n            margin-left: 5px;\r\n            margin-bottom: 5px;\r\n        }\r\n\r\n        .article-list li {\r\n            margin-bottom: 5px;\r\n            text-align: justify;\r\n            list-style: none;\r\n        }\r\n\r\n        /* Signature section */\r\n        .signature-section {\r\n            margin-top: 30px;\r\n            padding-top: 15px;\r\n        }\r\n\r\n        .signature-table {\r\n            width: 100%;\r\n            text-align: center;\r\n        }\r\n\r\n        .signature-table td {\r\n            width: 33.33%;\r\n            vertical-align: top;\r\n            padding: 20px 10px;\r\n            border-bottom: 1px solid #000;\r\n        }\r\n\r\n        .signature-title {\r\n            font-weight: bold;\r\n            text-decoration: underline;\r\n            margin-bottom: 10px;\r\n        }\r\n\r\n        .manuscript-mention {\r\n            font-size: var(--font-size-small);\r\n            padding: 5px;\r\n            margin: 10px 0;\r\n            /* border: 1px dashed #000; */\r\n        }\r\n\r\n        /* Highlight boxes */\r\n        .highlight-box {\r\n            padding: 8px;\r\n            border: 1px solid #000;\r\n            margin: 10px 0;\r\n        }\r\n\r\n        /* Service client box */\r\n        .service-client-box {\r\n            border: 3px solid #000;\r\n            border-radius: 10px;\r\n            padding: 10px;\r\n            margin: 10px 0;\r\n        }\r\n\r\n        /* Spacing utilities */\r\n        .mb-5 {\r\n            margin-bottom: 5px;\r\n        }\r\n\r\n        .mb-7 {\r\n            margin-bottom: 7px;\r\n        }\r\n\r\n        .mb-10 {\r\n            margin-bottom: 10px;\r\n        }\r\n\r\n        .mb-15 {\r\n            margin-bottom: 15px;\r\n        }\r\n\r\n        .text-center {\r\n            text-align: center;\r\n        }\r\n\r\n        .text-right {\r\n            text-align: right;\r\n        }\r\n\r\n        .font-bold {\r\n            font-weight: bold;\r\n        }\r\n\r\n        .font-semibold {\r\n            font-weight: 600;\r\n        }\r\n\r\n        .underline {\r\n            text-decoration: underline;\r\n        }\r\n\r\n        /* Print optimizations */\r\n        @media print {\r\n            .print-page {\r\n                box-shadow: none;\r\n            }\r\n\r\n            * {\r\n                -webkit-print-color-adjust: exact !important;\r\n            }\r\n        }\r\n    </style>\r\n</head>\r\n\r\n<body>\r\n    <!-- PAGE 1 -->\r\n    <div class=\"print-page\">\r\n        <div class=\"page-header\">\r\n            <div class=\"logo-container\">\r\n                <img src=\"/images/{{logo}}\" alt=\"AFG Bank Logo\">\r\n            </div>\r\n            <div class=\"document-title\">\r\n                <span class=\"title-background\">\r\n                    AMORTIZING CREDIT AGREEMENT WITH SECURITY INTERESTS – INDIVIDUALS\r\n                </span>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"content-body\">\r\n            <div class=\"parties-section\">\r\n                <h3 class=\"font-bold mb-15\" style=\"font-size: 10px; margin-bottom: 2rem\">Between the undersigned\r\n                    parties:</h3>\r\n\r\n                <div class=\"party-box border\">\r\n                    <div class=\"\">\r\n                        I- <span class=\"party-title \"> <span class=\"title-background\"> {{banque}} </span> abbreviated as\r\n                            «\r\n                            <span class=\"title-background\"> {{abreviation}}</span> »</span>, <span\r\n                            class=\"title-background\">{{statut_juridique}}</span> with share capital of <span\r\n                            class=\"title-background\">{{capital_social}}</span> {{devise}} whose registered office is\r\n                        located at <span class=\"title-background\">{{siege}}</span>, post office box <span\r\n                            class=\"title-background\">{{boite_postale}}</span>, registered in the Trade and Personal\r\n                        Property Credit Register of <span class=\"title-background\">{{lieu_immatriculation}}</span> on\r\n                        <span class=\"title-background\">{{date_immatriculation}}</span> under number <span\r\n                            class=\"title-background\">{{immatriculation}}</span>.\r\n                    </div>\r\n                    <div class=\"party-designation\">\r\n                        Hereinafter referred to as the \"Bank\" as first party;\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"party-title\">AND:</div>\r\n                <div class=\"party-box border\">\r\n                    <div>\r\n                        <span class=\"font-bold\">II- {{titre_client}} <span class=\"title-background\">{{nom_client}}</span>\r\n                        </span><br>\r\n                        Born on <span class=\"title-background\">{{date_naissance}}</span> in <span\r\n                            class=\"title-background\">{{lieu_naissance}}</span> son/daughter of <span\r\n                            class=\"title-background\">{{nom_du_pere}}</span> and <span\r\n                            class=\"title-background\">{{nom_de_la_mere}}</span><br>\r\n                        Residing at <span class=\"title-background\">{{adresse}}</span>; P.O. Box: <span\r\n                            class=\"title-background\">{{boite_postale_client}}</span>; Telephone: <span\r\n                            class=\"title-background\">{{telephone}}</span>; <span class=\"font-bold\">email\r\n                            :</span> <span class=\"title-background\">{{email}}</span><br>\r\n                        Position: <span class=\"title-background\">{{fonction}}</span> Employer: <span\r\n                            class=\"title-background\">{{employeur}}</span> P.O. Box: <span\r\n                            class=\"title-background\">{{boite_postale_employeur}}</span>; <span\r\n                            class=\"title-background\">{{titre_identification}}</span> No. <span\r\n                            class=\"title-background\">{{num_identification}}</span> Issued on <span\r\n                            class=\"title-background\">{{date_delivrance}}</span> in <span\r\n                            class=\"title-background\">{{lieu_delivrance}}</span>\r\n                    </div>\r\n                    <div class=\"party-designation mb-5\">\r\n                        Hereinafter referred to as the <span class=\"font-bold\"> \"BORROWER\" </span> as second party;\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"party-box\">\r\n                    <div class=\"\">AND:</div>\r\n                    <div>\r\n                        {{civilite_caution}} <span class=\"title-background\">{{nom_caution}}</span><br>\r\n                        Born on <span class=\"title-background\">{{date_naissance_caution}}</span> in <span\r\n                            class=\"title-background\">{{lieu_naissance_caution}}</span> son/daughter of <span\r\n                            class=\"title-background\">{{nom_pere_caution}}</span> and <span\r\n                            class=\"title-background\">{{nom_mere_caution}}</span><br>\r\n                        Residing at <span class=\"title-background\">{{adresse_caution}}</span>; P.O. Box: <span\r\n                            class=\"title-background\">{{bp_caution}}</span>; Telephone: <span\r\n                            class=\"title-background\">{{telephone_caution}}</span>; <span class=\"font-bold\">email\r\n                            :</span><span class=\"title-background\">{{email_caution}}</span><br>\r\n                        Position: <span class=\"title-background\">{{fonction_caution}}</span> Employer: <span\r\n                            class=\"title-background\">{{employeur_caution}}</span> P.O. Box: <span\r\n                            class=\"title-background\">{{bp_employeur_caution}}</span>; Identification Document: <span\r\n                            class=\"title-background\">{{type_piece_identite_caution}}</span> No. <span\r\n                            class=\"title-background\">{{num_piece_identite_caution}}</span> Issued on <span\r\n                            class=\"title-background\">{{date_delivrance_piece_identite_caution}}</span> in <span\r\n                            class=\"title-background\">{{lieu_delivrance_piece_identite_caution}}</span>\r\n                    </div>\r\n                    <div class=\"party-designation border mb-10\" style=\"padding: 5px; text-align: right;\">\r\n                        designated as the <span class=\"font-bold\">\"Personal and Joint Guarantor\"</span> as third\r\n                        party;\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"party-box font-semibold border mb-15\">\r\n                    <div class=\"party-title\">AND:</div>\r\n                    <div>\r\n                        {{civilite_constituant}} <span class=\"title-background\">{{nom_constituant}}</span><br>\r\n                        Born on <span class=\"title-background\">{{date_naissance_constituant}}</span> in <span\r\n                            class=\"title-background\">{{lieu_naissance_constituant}}</span> son/daughter of <span\r\n                            class=\"title-background\">{{nom_pere_constituant}}</span> and <span\r\n                            class=\"title-background\">{{nom_mere_constituant}}</span><br>\r\n                        Residing at <span class=\"title-background\">{{adresse_constituant}}</span> P.O. Box: <span\r\n                            class=\"title-background\">{{boite_postale_constituant}}</span> Telephone: <span\r\n                            class=\"title-background\">{{telephone_constituant}}</span> <span class=\"font-bold\">email\r\n                            :</span><span class=\"title-background\">{{email_constituant}}</span> Position: <span\r\n                            class=\"title-background\">{{fonction_constituant}}</span><br>\r\n                        Employer <span class=\"title-background\">{{employeur_constituant}}</span> P.O. Box: <span\r\n                            class=\"title-background\">{{boite_postale_employeur_constituant}}</span> <span\r\n                            class=\"title-background\">{{type_piece_identite_constituant}}</span> No.: <span\r\n                            class=\"title-background\">{{num_piece_identite_constituant}}</span> Issued on <span\r\n                            class=\"title-background\">{{date_delivrance_piece_identite_constituant}}</span> in <span\r\n                            class=\"title-background\">{{lieu_delivrance_piece_identite_constituant}}</span>\r\n                    </div>\r\n                    <div class=\"party-designation\">\r\n                        Hereinafter referred to as <span class=\"font-bold\">\"THE GRANTOR\"</span> as third party/\r\n                        fourth party;\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"party-box border font-semibold\">\r\n                    <div>\r\n                        Mr./Mrs. <span class=\"title-background\">{{nom_cedant}}</span> Born on <span\r\n                            class=\"title-background\">{{date_naissance_cedant}}</span> in <span\r\n                            class=\"title-background\">{{lieu_naissance_cedant}}</span> son/daughter of <span\r\n                            class=\"title-background\">{{nom_du_pere_cedant}}</span> and <span\r\n                            class=\"title-background\">{{nom_de_la_mere_cedant}}</span> Residing at <span\r\n                            class=\"title-background\">{{adresse_cedant}}</span>; P.O. Box: <span\r\n                            class=\"title-background\">{{boite_postale_cedant}}</span>; Telephone Communication Channel: <span\r\n                            class=\"title-background\">{{telephone_cedant}}</span>; Electronic Communication Channel\r\n                        (email) <span class=\"title-background\">{{email_cedant}}</span> Position: <span\r\n                            class=\"title-background\">{{fonction_cedant}}</span> Employer: <span\r\n                            class=\"title-background\">{{employeur_cedant}}</span> : <span\r\n                            class=\"title-background\">{{boite_postale_employeur_cedant}}</span>; Identification Document: <span\r\n                            class=\"title-background\">{{titre_identification_cedant}}</span>; No. <span\r\n                            class=\"title-background\">{{num_identification_cedant}}</span> Issued on <span\r\n                            class=\"title-background\">{{date_delivrance_cedant}}</span> in <span\r\n                            class=\"title-background\">{{lieu_delivrance_cedant}}</span>\r\n                    </div>\r\n                    <div class=\"party-designation\">\r\n                        Hereinafter referred to as <span class=\"font-bold\">\"THE ASSIGNOR\"</span> as third party/ fourth\r\n                        party;\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"text-center mb-15\">\r\n                <h3 class=\"font-bold underline\">IT HAS BEEN AGREED AND DECIDED AS FOLLOWS</h3>\r\n                <hr style=\"border: 1px solid #000; margin-top: 10px;\">\r\n            </div>\r\n\r\n            <div class=\"two-columns\">\r\n\r\n                <div class=\"column\">\r\n                    <div class=\"article\">\r\n                        <div class=\"article-title\">Article 1: Credit Facility</div>\r\n                        <div class=\"article-content\">\r\n                            <div class=\"article-subsection\">\r\n                                <span class=\"subsection-number\">1.1 -</span> Following the application, the BANK hereby\r\n                                grants\r\n                                to the Borrower who consents thereto, an amortizing credit facility in the amount of\r\n                                <span class=\"title-background\">{{montant_credit}}</span> {{devise}} (the Credit), valid\r\n                                and\r\n                                repayable according to the terms and conditions defined below.\r\n                            </div>\r\n                            <div class=\"article-subsection\">\r\n                                <span class=\"subsection-number\">1.2 –</span> The Borrower acknowledges that the terms,\r\n                                conditions and modalities of this financing have been duly communicated to them\r\n                                for their prior acceptance.\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"article\">\r\n                        <div class=\"article-title\">Article 2: Specific Conditions</div>\r\n                        <div class=\"article-content\">\r\n                            <div class=\"article-subsection\">\r\n                                <span class=\"subsection-number\">2.1 -</span> The Credit is granted under the following\r\n                                terms and\r\n                                conditions, to which the Borrower irrevocably undertakes:\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"column\">\r\n                    <table class=\"conditions-table\">\r\n                        <tr>\r\n                            <td class=\"label-col\"><strong>Financing type:</strong></td>\r\n                            <td class=\"value-col\"><span class=\"title-background\">{{objet}}</span></td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td class=\"label-col\"><strong>Purpose:</strong></td>\r\n                            <td class=\"value-col\"><span class=\"title-background\">{{objet}}</span></td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td class=\"label-col\"><strong>Amount:</strong></td>\r\n                            <td class=\"value-col\"><span class=\"title-background\">{{montant_credit}}</span></td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td class=\"label-col\"><strong>Term:</strong></td>\r\n                            <td class=\"value-col\"><span class=\"title-background\">{{duree}}</span></td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td class=\"label-col\"><strong>Annual Interest Rate:</strong></td>\r\n                            <td class=\"value-col\"><span class=\"title-background\">{{taux}}</span></td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td class=\"label-col\"><strong>Processing and Setup Fees:</strong></td>\r\n                            <td class=\"value-col\"><span class=\"title-background\">{{frais}}</span></td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td class=\"label-col\"><strong>Cash coll :</strong></td>\r\n                            <td class=\"value-col\"><span class=\"title-background\">{{cashcoll}}</span></td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td class=\"label-col\"><strong>Prime d'assurance Décès Emprunteur :</strong></td>\r\n                            <td class=\"value-col\"><span class=\"title-background\">{{prime}}</span></td>\r\n                        </tr>\r\n                    </table>\r\n                    <div class=\"article-subsection\">\r\n                        <span class=\"subsection-number\">2.2 -</span> The Borrower acknowledges that, in connection with\r\n                        its\r\n                        credit offer, the Bank has previously provided the Borrower with comprehensive information on\r\n                        the\r\n                        cost, eligibility criteria, and the terms and conditions of financing, in order to enable the\r\n                        Borrower to determine whether the proposed credit is suitable for the Borrower's needs and\r\n                        financial\r\n                        situation.\r\n                    </div>\r\n\r\n                </div>\r\n\r\n\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"page-footer\">\r\n            <strong>{{banque}}</strong><br>\r\n            Head office: <span class=\"title-background\">{{siege_filiale}}</span>,\r\n            P.O. Box: <span class=\"title-background\">{{boite_postale}}</span>,\r\n            Tel: <span class=\"title-background\">{{numero_filiale}}</span> |\r\n            Public limited company with a share capital of: <span class=\"title-background\">{{capital_social}}</span>\r\n            {{devise}} |\r\n            <span class=\"title-background\">{{agrement}}</span> | <span class=\"title-background\">{{siteweb}}</span>\r\n        </div>\r\n\r\n        <div class=\"page-number\">1</div>\r\n    </div>\r\n\r\n    <!-- PAGE 2 -->\r\n    <div class=\"print-page\">\r\n        <div class=\"content-body\">\r\n\r\n\r\n            <div class=\"two-columns\">\r\n                <div class=\"column\">\r\n                    <div class=\"article\">\r\n                        <div class=\"article-content\" style=\"margin-bottom: 40px;\">\r\n                            <div class=\"article-subsection\">\r\n                                <span class=\"subsection-number\">2.3 –</span> The borrower has a right of\r\n                                withdrawal after consideration, which may be exercised within three (03) days following\r\n                                the\r\n                                conclusion of this agreement. This period is extended to fourteen (14) calendar days\r\n                                in case of door-to-door banking solicitation. The use of the Credit during the course of\r\n                                the\r\n                                withdrawal period constitutes irrevocable acceptance of the terms and conditions of the\r\n                                financing. In case of withdrawal within the aforementioned deadlines, the cancellation\r\n                                of the Credit\r\n                                is not subject to any penalty.\r\n                            </div>\r\n                            <div class=\"article-subsection\">\r\n                                <span class=\"subsection-number\">2.4 –</span> The Borrower further acknowledges that the\r\n                                Annual Percentage Rates (APR) and Usury Rates below have been brought to their\r\n                                attention:\r\n                            </div>\r\n                        </div>\r\n\r\n                        <table class=\"teg-table\">\r\n                            <tr>\r\n                                <th>Facility <br> Amount</th>\r\n                                <th>Interest <br> Rate</th>\r\n                                <th>Processing <br> Fees</th>\r\n                                <th>Annual <br> APR</th>\r\n                                <th>Periodic <br> APR</th>\r\n                                <th>Usury <br> Rate</th>\r\n                            </tr>\r\n                            <tr>\r\n                                <td><span class=\"title-background\">{{montant_credit}} {{devise}}</span></td>\r\n                                <td><span class=\"title-background\">{{taux}}</span></td>\r\n                                <td><span class=\"title-background\">{{frais}}</span></td>\r\n                                <td><span class=\"title-background\">{{teg}}</span></td>\r\n                                <td><span class=\"title-background\">{{tegperiodique}}</span></td>\r\n                                <td><span class=\"title-background\">{{tauxusure}}</span></td>\r\n                            </tr>\r\n                        </table>\r\n                    </div>\r\n                    <div class=\"article\" style=\"margin-bottom: 40px;\">\r\n                        <div class=\"article-title\">Article 3: Interest and Commissions</div>\r\n                        <div class=\"article-content\">\r\n                            <div class=\"article-subsection\">\r\n                                <span class=\"subsection-number\">3.1 –</span> The Credit bears interest at the Rate\r\n                                of <span class=\"title-background\">{{taux}}</span> % excluding or including tax per\r\n                                annum. Value\r\n                                Added Tax (VAT), calculated at the legal rate in force, will be added to the interest\r\n                                and commissions provided above.\r\n                            </div>\r\n                            <div class=\"article-subsection\">\r\n                                <span class=\"subsection-number\">3.2 –</span> The Borrower undertakes to scrupulously\r\n                                honor\r\n                                the repayment schedule of the Credit. Any amount unpaid at its\r\n                                due date shall bear default interest calculated at the standard overdraft rate\r\n                                of seventeen percent (17%) excluding tax in accordance with the general banking\r\n                                conditions\r\n                                (Standard Interest Rate).\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"article\">\r\n                        <div class=\"article-title\">Article 4: Disbursement and Repayment</div>\r\n                        <div class=\"article-content\">\r\n                            <div class=\"article-subsection\">\r\n                                <div class=\"subsection-title mb-5\">\r\n                                    <span class=\"subsection-number\">4.1 –</span> <strong>Disbursement\r\n                                        Terms</strong><br>\r\n                                </div>\r\n                                Upon exhaustive and effective collection of the required documentation, the Credit will\r\n                                be\r\n                                disbursed for the benefit of the Borrower by crediting their account <span\r\n                                    class=\"title-background\">{{numero_de_compte}}</span>;<br>\r\n                                If advances are granted or promised by the BANK, it may require that\r\n                                bills of exchange be drawn, subscribed or accepted to its order by the BENEFICIARY.<br>\r\n                                The transfer of ownership of these bills to the benefit of the BANK will produce the\r\n                                consequences provided for in article 1, whose provisions will be applicable following\r\n                                the transaction.\r\n                            </div>\r\n                            <div class=\"article-subsection\">\r\n                                <div class=\"subsection-title mb-5\"><span class=\"subsection-number\">4.2 –</span>\r\n                                    <strong>Repayment Terms</strong><br>\r\n                                </div>\r\n                                The Credit will be repaid in <span class=\"title-background\">{{nombre_echeances}}</span>\r\n                                (<span class=\"title-background\">{{nombre_echeances_lettre}}</span>) consecutive monthly\r\n                                installments of <span class=\"title-background\">{{montant_echeance}} {{devise}}</span>\r\n                                (<span class=\"title-background\">{{montant_echeance_lettre}}</span>) in accordance with\r\n                                the amortization\r\n                                schedule established by the parties and communicated to the Borrower. For this purpose,\r\n                                the Borrower shall constitute sufficient provision on account No. <span\r\n                                    class=\"title-background\">{{numero_de_compte}}</span>, which they authorize the\r\n                                Bank to debit for debt service.\r\n                            </div>\r\n                            <div class=\"article-subsection\">\r\n                                <div class=\"subsection-title mb-5\"><span class=\"subsection-number\">4.3 –</span>\r\n                                    <strong>Early Repayment</strong><br>\r\n                                </div>\r\n                                The Borrower shall have the option to repay in advance all or part of the borrowed\r\n                                amounts,\r\n                                upon payment of an early repayment penalty (ERP)\r\n                                representing two percent (2%) of the outstanding amount prepaid. However, it is\r\n                                specified that the\r\n                                ERP shall not exceed the cumulative unaccrued interest. Any partial early repayment\r\n                                will be allocated to the installments of the amortization schedule in reverse\r\n                                chronological order\r\n                                and thus to the most distant installments, with the Credit term being reduced\r\n                                accordingly.\r\n                            </div>\r\n                            <div class=\"article-subsection\">\r\n                                <div class=\"subsection-title mb-5\"><span class=\"subsection-number\">4.4 –</span>\r\n                                    <strong>Early Acceleration</strong><br>\r\n                                </div>\r\n                                The BANK may, by written notification to the Borrower, require early repayment\r\n                                of the outstanding Credit balance in any of the following cases:\r\n                                <ul class=\"article-list\">\r\n                                    <li>a) in case of default in timely payment by the Borrower of any amount\r\n                                        due under this agreement;</li>\r\n                                    <li>b) in case of occurrence of any event affecting the financial\r\n                                        or professional situation of the Borrower, and likely to threaten the\r\n                                        repayment of the Credit, particularly in case of job loss, suspension, placement\r\n                                        on\r\n                                        availability, lockout;</li>\r\n                                    <li>c) in case of occurrence of any event likely to affect the\r\n                                        legality or validity of the Credit, or of the documentation;</li>\r\n                                </ul>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"column\">\r\n                    <div class=\"article\">\r\n                        <div class=\"article-content\">\r\n                            <div class=\"article-subsection\">\r\n                                <ul class=\"article-list\">\r\n                                    <li>d) in case of cessation of operations, judicial reorganization or\r\n                                        amicable or judicial liquidation of the Borrower's Employer;</li>\r\n                                    <li>e) in case of default by the Borrower in the performance of obligations\r\n                                        undertaken with third parties and/or any acceleration or early maturity\r\n                                        of an obligation of the Borrower vis-à-vis a third party;</li>\r\n                                    <li>f) in case of account closure, fraudulent de-domiciliation of income,\r\n                                        non-execution of the terms of the Irrevocable Transfer Certificate by\r\n                                        the Employer;</li>\r\n                                    <li>g) In case of production or use of false documents;</li>\r\n                                    <li>h) In case of disappearance of the financing purpose or the source of\r\n                                        repayment, particularly in case of job loss not followed by obtaining, within\r\n                                        a period of one (01) month, new employment;</li>\r\n                                    <li>i) If any of the declarations, or any financing or\r\n                                        security document, proves to be fraudulent, erroneous or inaccurate;</li>\r\n                                </ul>\r\n                                <p>Subsequent payments or regularizations shall not prevent this\r\n                                    acceleration.</p>\r\n                            </div>\r\n\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"article\">\r\n                        <div class=\"article-content\">\r\n                            <div class=\"article-subsection\">\r\n                                <span class=\"subsection-number\">4.5 –</span> <strong>Order of Payment\r\n                                    Application</strong><br>\r\n                                In the absence of Default, the order of application of repayments is as follows:\r\n                                <ul class=\"article-list\">\r\n                                    <li>a) First, taxes and duties payable;</li>\r\n                                    <li>b) Second, commissions, fees and other accessories;</li>\r\n                                    <li>c) Third, default interest payable on the Credit as well as\r\n                                        any amount due and unpaid at its due date;</li>\r\n                                    <li>d) Fourth, Credit interest (excluding default interest);\r\n                                    </li>\r\n                                    <li>e) Fifth, repayment of payable principal credit.</li>\r\n                                    <li>f) Sixth, voluntary early repayment of the Credit.</li>\r\n                                </ul>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"article\">\r\n                        <div class=\"article-title\">Article 5: Privileges, Documentation</div>\r\n                        <div class=\"article-content\">\r\n                            <div class=\"article-subsection\">\r\n                                <span class=\"subsection-number\">5.1 –</span> <strong>Documentation</strong><br>\r\n                                The BORROWER undertakes for the security and guarantee of Credit repayment to constitute\r\n                                and\r\n                                produce to the BANK, prior to the establishment of the credit line, and in\r\n                                satisfactory form, the following guarantees:\r\n                                <ul class=\"article-list\">\r\n                                    <li>- A financing application</li>\r\n                                    <li>- A service certificate or employment contract;</li>\r\n                                    <li>- Last three pay slips</li>\r\n                                    <li>- An Irrevocable Salary Transfer Certificate, duly issued\r\n                                        by the employer;</li>\r\n                                    <li>- An individual membership certificate for the Group Borrower Disability-Death\r\n                                        Insurance contract, duly approved by the Insurer;</li>\r\n                                    <li>- A guarantee fund membership form duly subscribed by the Borrower\r\n                                        ;</li>\r\n                                    <li>- A promissory note in the amount of <span\r\n                                            class=\"title-background\">{{billett_ordre_mt}}</span> {{devise}} (<span\r\n                                            class=\"title-background\">{{billett_ordre_mt_lettres}}</span> FRANCS)\r\n                                        representing the total amount of the debt in principal, interest and any tax\r\n                                        in force, in accordance with the amortization schedule;</li>\r\n                                </ul>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"article-content\">\r\n                            <div class=\"article-subsection\">\r\n                                <span class=\"subsection-number\">5.2 –</span> <strong>Irrevocable Domiciliation of\r\n                                    Income and Salaries</strong><br>\r\n                                As security and guarantee for the repayment of the Credit, the Borrower declares to\r\n                                irrevocably domicile\r\n                                the entirety of their salaries, benefits, allowances and other social rights\r\n                                in their account with the Bank Account Details below:\r\n                            </div>\r\n\r\n                            <div class=\"highlight-box text-center\">\r\n                                <span class=\"title-background\">{{rib}}</span>\r\n                            </div>\r\n\r\n                            <p>\r\n                                As long as the Borrower remains liable to the Bank for any debt, the\r\n                                above domiciliation shall remain in effect, notwithstanding change of profession or\r\n                                employer. For the above purposes, the Borrower undertakes to spontaneously produce, upon\r\n                                change of employment, an Irrevocable Transfer Certificate for their salaries, benefits\r\n                                and social rights to the domiciliation account, issued by the new employer.\r\n                            </p>\r\n\r\n\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"page-footer\">\r\n            <strong>{{banque}}</strong><br>\r\n            Head office: <span class=\"title-background\">{{siege_filiale}}</span>,\r\n            P.O. Box: <span class=\"title-background\">{{boite_postale}}</span>,\r\n            Tel: <span class=\"title-background\">{{numero_filiale}}</span> |\r\n            Public limited company with a share capital of: <span class=\"title-background\">{{capital_social}}</span>\r\n            {{devise}} |\r\n            <span class=\"title-background\">{{agrement}}</span> | <span class=\"title-background\">{{siteweb}}</span>\r\n        </div>\r\n\r\n        <div class=\"page-number\">2</div>\r\n    </div>\r\n\r\n    <!-- PAGE 3 -->\r\n    <div class=\"print-page\">\r\n        <div class=\"content-body\">\r\n            <div class=\"two-columns\">\r\n                <div class=\"column\">\r\n                    <div class=\"article\">\r\n                        <div class=\"article-content\">\r\n                            <div class=\"article-subsection\">\r\n                                <p>\r\n                                    The Bank acknowledges that the Borrower has satisfied this obligation, by\r\n                                    providing them with an IRREVOCABLE TRANSFER CERTIFICATE issued by their\r\n                                    aforementioned employer.\r\n                                </p>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"article\">\r\n                        <div class=\"article-title\">Article 6: Securities Constituted</div>\r\n                        <div class=\"article-content\">\r\n                            <p>\r\n                                In order to guarantee payment of the credit granted under this agreement,\r\n                                the borrower undertakes to constitute the following securities:\r\n                            </p>\r\n                            <ul class=\"article-list\">\r\n                                <li>- SAVINGS ACCOUNT PLEDGE</li>\r\n                                <li>- CASHIER'S CHECK PLEDGE</li>\r\n                                <li>- TIME DEPOSIT PLEDGE</li>\r\n                                <li>- JOINT AND SEVERAL GUARANTEE</li>\r\n                                <li>- FIDUCIARY TRANSFER (CASH COLLATERAL <span\r\n                                        class=\"title-background\">{{pourcentage_cashcoll}}</span>%)</li>\r\n                            </ul>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"article\">\r\n                        <div class=\"article-content\">\r\n                            <div class=\"article-subsection\">\r\n                                <span class=\"subsection-number\">6.1-</span> <strong>Savings Account\r\n                                    Pledge</strong><br>\r\n                                As security and guarantee for the full repayment of the credit, the Grantor irrevocably\r\n                                pledges,\r\n                                for the benefit of the Bank, an amount of <span\r\n                                    class=\"title-background\">{{montant_nantissement_epargne}}</span> {{devise}} held\r\n                                in Account No.<span class=\"title-background\">{{numero_compte_nanti}}</span> opened\r\n                                in the Bank's books (the Pledged Account), in accordance with the provisions of\r\n                                articles 127 et seq. of the OHADA Uniform Act on Securities, for the benefit of the\r\n                                Bank.\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"article\">\r\n                        <div class=\"article-content\">\r\n                            <p class=\"mb-10\">\r\n                                - The Bank will proceed, where applicable, at the expense of the Grantor who undertakes\r\n                                it, to all\r\n                                formalities necessary for the constitution, validity, enforceability and\r\n                                effectiveness of the Pledge through its registration and, where applicable, its\r\n                                recording\r\n                                with the competent Trade and Personal Property Credit Register.\r\n                            </p>\r\n                            <p class=\"mb-10\">\r\n                                The Bank will furthermore proceed, at any time during the term of the Agreement, at the\r\n                                expense\r\n                                of the Grantor who undertakes it, as necessary, to renew the registration\r\n                                of the Pledge, and to any other formality necessary to ensure its validity,\r\n                                enforceability and effectiveness, under the conditions and legal deadlines in force.\r\n                            </p>\r\n                            <p class=\"mb-10\">\r\n                                In accordance with the provisions of article 58 of the Uniform Act on Securities,\r\n                                the registration of the pledge will preserve the Bank's rights for a period\r\n                                of ten (10) years from registration with the RCCM.\r\n                            </p>\r\n                            <p class=\"mb-10\">\r\n                                All powers are given to the bearer of an original, copy or extract of\r\n                                the Agreement for the accomplishment of any formality.\r\n                            </p>\r\n                            <p class=\"mb-10\">\r\n                                - All rights held by the Pledgor over any amounts credited to the Pledged Account are\r\n                                automatically included within the scope of the pledge.\r\n                            </p>\r\n                            <p class=\"mb-10\">\r\n                                The pledge resulting from this Agreement shall, in particular, have the effect of\r\n                                rendering ineffective any action or attachment carried out by any third party against\r\n                                the Pledged Account.\r\n                            </p>\r\n                            <p class=\"mb-10\">\r\n                                The Pledge shall be in addition to any other security interests held by the Bank, and\r\n                                shall in no event prejudice, be compromised by, or otherwise be affected by such other\r\n                                security interests.\r\n                            </p>\r\n                            <p class=\"mb-10\">\r\n                                The Pledgor waives the right to invoke any entitlement it may have to require the Bank\r\n                                to enforce or exercise any security interest against any other person before exercising\r\n                                the rights constituted under this Agreement, and waives any right to require the Bank to\r\n                                exercise its rights in any specific order under this Agreement.\r\n                            </p>\r\n                            <p class=\"mb-10\">\r\n                                This Agreement shall be enforceable as of right against the Bank in accordance with\r\n                                Article 132 of the Uniform Act on Security Interests, the Bank’s intervention as\r\n                                Beneficiary dispensing the parties from the notification formalities provided for in\r\n                                Article 132 of the Uniform Act on Security Interests.\r\n                            </p>\r\n                            <p class=\"mb-10\">\r\n                                In accordance with Article 138 of the Uniform Act on Security Interests, for as long as\r\n                                any amount remains owed by the Pledgor to the Bank as a result of the use of the\r\n                                Guaranteed Facility, account number\r\n                                <span class=\"title-background\">{{ numero_de_compte }}</span>\r\n                                shall remain pledged in favor of the Bank, and its balance may only be paid by the Bank\r\n                                under the conditions defined herein.\r\n                            </p>\r\n\r\n\r\n                        </div>\r\n                    </div>\r\n\r\n                </div>\r\n\r\n                <div class=\"column\">\r\n                    <div class=\"article\">\r\n\r\n                        <p class=\"mb-10\">\r\n                            In accordance with article 133 of the Uniform Act on Securities, the Bank\r\n                            undertakes to block and retain all amounts credited to the Pledged\r\n                            Account, within the limit of the Pledged Claim\r\n                        </p>\r\n                        <p class=\"mb-10\">\r\n                            - The Grantor undertakes, under the terms of the Agreement: <br>\r\n                            (a) not to assign, transfer or otherwise dispose of, or permit or consent\r\n                            to the assignment, transfer or disposal of the Pledged Account, the Balance, or\r\n                            any of its related rights, to the benefit of any party other than the\r\n                            Beneficiary without the prior written consent of the latter;\r\n                        </p>\r\n                        <p class=\"mb-10\">\r\n                            (b) to execute any measure or sign any document or deed required or which\r\n                            may, where applicable, be required by the Beneficiary, for the execution of the\r\n                            Pledge, or for any other purpose for the needs of the agreement;\r\n                        </p>\r\n                        <p class=\"mb-10\">\r\n                            (c) to bear upon simple request of the Beneficiary, all reasonable expenses and\r\n                            costs, including without limitation, advisory fees that the\r\n                            Bank would have incurred under the agreement or in connection with the constitution,\r\n                            defense, preservation or realization of the pledge;\r\n                        </p>\r\n                        <p class=\"mb-10\">\r\n                            (d) to maintain the Pledged Account open in the Bank's books as\r\n                            long as the entirety of the Secured Obligations is not extinguished.\r\n                        </p>\r\n                        <p class=\"mb-10\">\r\n                            (e) not to constitute security or permit the taking of pledge, lien or\r\n                            other security over the Pledged Account and the Balance;\r\n                        </p>\r\n                        <p class=\"mb-10\">\r\n                            (f) subject to applicable laws, not to consent to any person\r\n                            other than the Beneficiary exercising a claim or other demand in respect of\r\n                            any amount appearing on the Pledged Account or in respect of the Balance.\r\n                        </p>\r\n                        <p class=\"mb-10\">\r\n                            – The Bank is entitled to exercise, over the Pledged Receivable it holds, within the limits of the Guaranteed Obligations, the rights granted to it as a secured creditor, under the terms and within the limits of Articles 127 et seq. of the Uniform Act on Security Interests.\r\n                        </p>\r\n                        \r\n                        <p class=\"mb-10\">\r\n                            In the event of non-payment of any amount due under the Facility granted to the Pledgor, the\r\n                            Bank may exercise, over the Pledged Receivables, all rights, actions, and privileges vested\r\n                            in it under this Agreement, without prejudice to any other right or action that may be\r\n                            exercised or initiated independently or concurrently, including, in particular, the\r\n                            enforcement of the pledge in accordance with the provisions of Article 134 of the Uniform\r\n                            Act on Security Interests.\r\n                        </p>\r\n                        <p class=\"mb-10\">\r\n                            The Bank shall, by operation of law, become the owner of the amounts constituting the\r\n                            balance of the above-mentioned Pledged Account, eight days after a formal notice addressed\r\n                            to the Pledgor has remained without effect, without being required to exhaust other remedies\r\n                            available to it or to enforce other securities or guarantees to which it may otherwise be\r\n                            entitled.\r\n                        </p>\r\n                        <p class=\"mb-10\">\r\n                            In accordance with Article 134 of the Uniform Act, the Bank shall have the right, at any\r\n                            time, to collect the balance by debiting the Pledged Account and applying it to the payment\r\n                            of any amount due under the Guaranteed Obligations.\r\n                            For this purpose, the Pledgor hereby authorizes the Beneficiary, at any time, to debit the\r\n                            said Pledged Account for the repayment of the amounts owed.\r\n                        </p>\r\n                        <p class=\"mb-10\">\r\n                            Even after its enforcement, the pledge over the account shall remain in effect until the\r\n                            Guaranteed Debt has been paid in full.\r\n                        </p>\r\n                        <p class=\"mb-10\">\r\n                            Any amount withdrawn under this Agreement shall be applied to the repayment and payment of\r\n                            the Guaranteed Obligations, whether at their normal or accelerated maturity date.\r\n                        </p>\r\n                        <p class=\"mb-10\">\r\n                            The remaining balance, after deduction and settlement of the Client’s outstanding debt,\r\n                            shall be credited to the Client’s current account opened in the books of\r\n                            <span class=\"title-background\">\r\n                                {{banque}}.\r\n                            </span>\r\n                        </p>\r\n\r\n\r\n                    </div>\r\n\r\n                    <div class=\"article\">\r\n                        <div class=\"article-content\">\r\n                            <div class=\"article-subsection\">\r\n                                <span class=\"subsection-number\">6.2-</span>\r\n                                <strong>PLEDGE OF CERTIFICATE OF DEPOSIT No.<span\r\n                                        class=\"title-background\">{{numero_bon_de_caisse}}</span> OWNED BY <span\r\n                                        class=\"title-background\">{{souscripteur_bon}}</span></strong><br>\r\n                                – As security and guarantee for the full repayment of the cash advances in a total\r\n                                principal amount of\r\n                                <span class=\"title-background\">{{montant_bon_caisse_nanti}}</span> (the “Facility” or the\r\n                                “Guaranteed Obligations”) granted\r\n                                on <span class=\"title-background\">{{date_octroi_credit}}</span> to <span\r\n                                    class=\"title-background\">{{nom_client}}</span> by the Bank under the terms of the\r\n                                Credit Agreement,\r\n                                the Pledgor irrevocably pledges, in favor of the Bank, all rights and interests it holds\r\n                                in relation to the pledged receivable,\r\n                                in accordance with the provisions of Articles 127 et seq. of the OHADA Uniform Act on\r\n                                Security Interests, for the benefit of the Bank.\r\n                            </div>\r\n\r\n                        </div>\r\n                    </div>\r\n\r\n\r\n\r\n\r\n\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"page-footer\">\r\n            <strong>{{banque}}</strong><br>\r\n            Head office: <span class=\"title-background\">{{siege_filiale}}</span>,\r\n            P.O. Box: <span class=\"title-background\">{{boite_postale}}</span>,\r\n            Tel: <span class=\"title-background\">{{numero_filiale}}</span> |\r\n            Public limited company with a share capital of: <span class=\"title-background\">{{capital_social}}</span>\r\n            {{devise}} |\r\n            <span class=\"title-background\">{{agrement}}</span> | <span class=\"title-background\">{{siteweb}}</span>\r\n        </div>\r\n\r\n        <div class=\"page-number\">3</div>\r\n    </div>\r\n\r\n    <!-- PAGE 4 -->\r\n    <div class=\"print-page\">\r\n        <div class=\"content-body\">\r\n            <div class=\"two-columns\">\r\n                <div class=\"column\">\r\n                    <div class=\"article\">\r\n                        <div class=\"article-content\">\r\n                            <div class=\"article-subsection\">\r\n                                The Pledged Claim is evidenced by one (01) Registered Cashier's Certificate subscribed\r\n                                by the Grantor with {{banque}} which has the\r\n                                following characteristics:\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <table class=\"conditions-table mb-10\">\r\n                        <tr>\r\n                            <td colspan=\"2\" class=\"label-col text-center\"><strong>CASHIER'S CERTIFICATE No. <span\r\n                                        class=\"title-background\">{{numero_bon_de_caisse}}</span></strong></td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td class=\"label-col\">Subscription Date:</td>\r\n                            <td class=\"value-col\"><span class=\"title-background\">{{date_souscription}}</span></td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td class=\"label-col\">Maturity Date:</td>\r\n                            <td class=\"value-col\"><span class=\"title-background\">{{date_echeance_bon}}</span></td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td class=\"label-col\">Amount:</td>\r\n                            <td class=\"value-col\"><span class=\"title-background\">{{montant_bon_caisse_nanti}}</span></td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td class=\"label-col\">Subscriber:</td>\r\n                            <td class=\"value-col\"><span class=\"title-background\">{{souscripteur_bon}}</span></td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td class=\"label-col\">Depository Institution:</td>\r\n                            <td class=\"value-col\">{{etablissement_depositaire}}</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td class=\"label-col\">Designated Account:</td>\r\n                            <td class=\"value-col\"><span class=\"title-background\">{{compte_affectation_bon}}</span></td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td class=\"label-col\">Beneficiary:</td>\r\n                            <td class=\"value-col\"><span class=\"title-background\">{{beneficiaire_bon}}</span></td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td class=\"label-col\">Place of Subscription:</td>\r\n                            <td class=\"value-col\"><span class=\"title-background\">{{lieu_souscription_bon}}</span></td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td class=\"label-col\">Place of Payment:</td>\r\n                            <td class=\"value-col\"><span class=\"title-background\">{{lieu_paiement_bon}}</span></td>\r\n                        </tr>\r\n                    </table>\r\n                    <div class=\"article\">\r\n                        <div class=\"article-content\">\r\n                            <div class=\"article-subsection\">\r\n                                <p class=\"mb-10\">\r\n                                    All rights held by the Grantor over all amounts credited to the\r\n                                    Pledged Account are automatically included in the pledge base.\r\n                                </p>\r\n                                <p class=\"mb-10\">\r\n                                    The Pledged Claim corresponds to the face value of the Pledged Cashier's\r\n                                    Certificate, being\r\n                                    <span class=\"title-background\"> {{montant_credit}} ({{montant_credit_lettre}})\r\n                                        {{devise}}</span>\r\n                                    in principal.\r\n                                </p>\r\n                                <p class=\"mb-10\">\r\n                                    The pledge resulting from this Agreement will have the particular effect\r\n                                    of:\r\n                                </p>\r\n                                <p class=\"mb-10\">\r\n                                    ° Encumbering the designated account of the Pledged Cashier's Certificate in the\r\n                                    Bank's\r\n                                    books, as well as any account that would subsequently be created to reflect the\r\n                                    renewal of the Cashier's Certificate;\r\n                                </p>\r\n                                <p class=\"mb-10\">\r\n                                    ° Rendering ineffective any action or seizure initiated by any third parties on the\r\n                                    Pledged\r\n                                    Claims.\r\n                                </p>\r\n                                <p class=\"mb-10\">\r\n                                    The Pledge will be added to all securities from which the Bank benefits, and may\r\n                                    under no circumstances affect, compromise or be affected by said\r\n                                    securities.\r\n                                </p>\r\n                                <p class=\"mb-10\">\r\n                                    The Pledgor waives any rights it may have to require the Bank to enforce or exercise\r\n                                    any Security Interest against any other person before exercising the rights created\r\n                                    under this Agreement, as well as any right it may have to require the Bank to\r\n                                    exercise its rights in any specific order under this Agreement.\r\n                                </p>\r\n                                <p class=\"mb-10\">\r\n                                    This pledge is enforceable by operation of law against the Bank in accordance with\r\n                                    Article 132 of the Uniform Act on Security Interests, the Bank’s intervention as\r\n                                    Beneficiary relieving the parties from the notification formalities provided for in\r\n                                    Article 132 of the Uniform Act on Security Interests.\r\n                                </p>\r\n                                <p class=\"mb-10\">\r\n                                    In accordance with Article 138 of the Uniform Act on Security Interests, for as long\r\n                                    as any amount remains owed by the Pledgor to the Bank as a result of the use of the\r\n                                    Guaranteed Facility, the assets linked to the above-mentioned Pledged Certificate of\r\n                                    Deposit shall remain pledged in favor of the Bank and may only be paid by the Bank\r\n                                    under the conditions defined herein.\r\n                                </p>\r\n                                <p class=\"mb-10\">\r\n                                    – The Bank shall, at the Pledgor’s expense, undertake all formalities necessary for\r\n                                    the creation, validity, enforceability, and effectiveness of the Pledge, including,\r\n                                    in particular, its registration and, where applicable, its filing with the competent\r\n                                    Trade and Personal Property Credit Register.\r\n                                </p>\r\n                                <p class=\"mb-10\">\r\n                                    The Bank shall furthermore, at any time during the term of this Agreement and at the\r\n                                    Pledgor’s expense, as often as necessary, renew the registration of the Pledge, and\r\n                                    carry out any other formalities necessary to ensure its validity, enforceability,\r\n                                    and effectiveness, in compliance with the applicable legal conditions and time\r\n                                    limits.\r\n                                </p>\r\n                                <p class=\"mb-10\">\r\n                                    Pursuant to Article 58 of the Uniform Act on Security Interests, the registration of\r\n                                    the pledge shall preserve the Bank’s rights for a period of ten (10) years from its\r\n                                    registration with the RCCM. Full authority is granted to the holder of an original,\r\n                                    a copy, or an extract of this Agreement to carry out any such formality.\r\n                                </p>\r\n                                <p class=\"mb-10\">\r\n                                    – The Bank shall, at the Pledgor’s expense, undertake all formalities necessary for\r\n                                    the creation, validity, enforceability, and effectiveness of the Pledge, including,\r\n                                    in particular, its registration and, where applicable,\r\n                                </p>\r\n\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"column\">\r\n                    <div class=\"article\">\r\n                        <div class=\"article-content\">\r\n                            <div class=\"article-subsection\">\r\n                                <p class=\"mb-10\">\r\n                                    its registration with the competent Trade and Personal Property Credit\r\n                                    Register.\r\n                                </p>\r\n                                <p class=\"mb-10\">\r\n                                    The Bank shall furthermore, at any time during the term of this Agreement and at the\r\n                                    Pledgor’s expense, as often as necessary, renew the registration of the Pledge, and\r\n                                    carry out any other formalities necessary to ensure its validity, enforceability,\r\n                                    and effectiveness, in compliance with the applicable legal conditions and time\r\n                                    limits.\r\n                                </p>\r\n                                <p class=\"mb-10\">\r\n                                    Pursuant to the provisions of Article 58 of the Uniform Act on Security Interests,\r\n                                    the registration of the pledge shall preserve the Bank’s rights for a period of ten\r\n                                    (10) years from its registration with the RCCM.\r\n                                </p>\r\n                                <p class=\"mb-10\">\r\n                                    Full authority is granted to the holder of an original, a copy, or an extract of\r\n                                    this Agreement to carry out any such formality.\r\n                                </p>\r\n                                <p class=\"mb-10\">\r\n                                    – It follows from the terms of the Certificates of Deposit evidencing the Pledged\r\n                                    Receivables that the Bank is the Custodian of the Pledged Receivables. In such\r\n                                    capacity, the Custodian shall be required to:\r\n                                </p>\r\n                                <p class=\"mb-10\">\r\n                                    a) Hold and preserve the Pledged Receivables in accordance with the provisions of\r\n                                    this Agreement, and not dispose of them except in accordance with the provisions of\r\n                                    this Agreement;\r\n                                </p>\r\n                                <p class=\"mb-10\">\r\n                                    b) Do whatever is necessary for the proper performance of its duties as Custodian,\r\n                                    in accordance with the provisions of the Uniform Act on Security Interests and the\r\n                                    provisions of this Agreement; and\r\n                                </p>\r\n                                <p class=\"mb-10\">\r\n                                    c) In the event of early maturity of the Certificate of Deposit prior to the release\r\n                                    date of the Pledgor, renew said instrument for an identical period, which shall\r\n                                    remain pledged hereunder in favor of the Bank;\r\n                                </p>\r\n                                <p class=\"mb-10\">\r\n                                    d) Failing such renewal, and unless the Pledgor has been released, secure the\r\n                                    Pledged Receivable in a guarantee deposit account until the maturity of the\r\n                                    Facility.\r\n                                </p>\r\n\r\n\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"article\">\r\n                        <div class=\"article-content\">\r\n                            <div class=\"article-subsection\">\r\n                                <span class=\"subsection-number\">6.4-</span> <strong>JOINT AND SEVERAL PERSONAL\r\n                                    GUARANTEE</strong><br>\r\n                                – As security and guarantee for the full repayment of the Credit, the payment of all\r\n                                interest, indemnities, the reimbursement of all advances, costs, and any accessories, as\r\n                                well as any possible debit balance of the current account and, more generally, to\r\n                                guarantee the performance of all obligations incumbent upon the Borrower under this\r\n                                deed, the Guarantor declares to act as joint, several, personal, and indivisible\r\n                                guarantor of <span class=\"title-background\">{{titre_client}}</span> <span\r\n                                    class=\"title-background\">{{nom_client}}</span>, holder of account number <span\r\n                                    class=\"title-background\">{{numero_de_compte}}</span>, for all amounts that the\r\n                                Guaranteed Party owes, may owe, or will owe to the Bank as a result of all commitments,\r\n                                all transactions, and, in general, all obligations arising, without any exception,\r\n                                directly or indirectly, towards the Bank, for any reason whatsoever. Accordingly, this\r\n                                Guarantee applies, without this list being exhaustive, to all obligations arising in\r\n                                particular from:\r\n                            </div>\r\n\r\n                            <ul class=\"article-list\">\r\n                                <li>° All cash or signature credits, the payable balances in favor of the Bank of all\r\n                                    current accounts opened in the name of the Guaranteed Party, stock exchange\r\n                                    transactions carried out by the latter, all checks, notes, or instruments bearing\r\n                                    their signature for any reason whatsoever and for which the Bank has been dispensed\r\n                                    or not from any protest or notice of non-payment, the negotiation of sight bills of\r\n                                    exchange, assignments of receivables, all endorsements, guarantees, or payment\r\n                                    guarantees provided by the Guaranteed Party;</li>\r\n                                <li>° All undertakings of endorsements, guarantees, counter-guarantees, or any\r\n                                    acceptances given by the Bank on behalf of or at the request of the Guaranteed\r\n                                    Party.</li>\r\n                                <li>° The Guarantor’s obligations under this guarantee are limited to the maximum amount\r\n                                    of <span class=\"title-background\">{{montant_caution}}</span> {{devise}}\r\n                                    (<span class=\"title-background\">{{montant_caution_lettres}}</span>\r\n                                    {{devise}}), covering both the principal commitments of the Borrower and all\r\n                                    interest, costs, and accessories in addition, extended to any possible debit balance\r\n                                    of their current account as it would appear upon closure.</li>\r\n                                <li>– This undertaking binds the Guarantor, jointly and personally, on all their movable\r\n                                    and immovable property, to pay the Bank whatever is owed or will be owed by the</li>\r\n                            </ul>\r\n\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"page-footer\">\r\n            <strong>{{banque}}</strong><br>\r\n            Head office: <span class=\"title-background\">{{siege_filiale}}</span>,\r\n            P.O. Box: <span class=\"title-background\">{{boite_postale}}</span>,\r\n            Tel: <span class=\"title-background\">{{numero_filiale}}</span> |\r\n            Public limited company with a share capital of: <span class=\"title-background\">{{capital_social}}</span>\r\n            {{devise}} |\r\n            <span class=\"title-background\">{{agrement}}</span> | <span class=\"title-background\">{{siteweb}}</span>\r\n        </div>\r\n\r\n        <div class=\"page-number\">4</div>\r\n    </div>\r\n\r\n    <!-- PAGE 5 -->\r\n    <div class=\"print-page\">\r\n        <div class=\"content-body\">\r\n            <div class=\"two-columns\">\r\n                <div class=\"column\">\r\n                    <div class=\"article\">\r\n                        <div class=\"article-content\">\r\n                            <p class=\"mb-10\">\r\n                                Principal Debtor, within the limit of the Maximum Guaranteed Amount, in case the\r\n                                Principal Debtor could not\r\n                                meet their obligations under the Secured Obligations.\r\n                            </p>\r\n\r\n                            <p class=\"mb-10\">\r\n                                - The Guarantor expressly waives the benefits of discussion and division both with\r\n                                the Principal Debtor and with all co-obligors\r\n                            </p>\r\n\r\n                            <p class=\"mb-10\">\r\n                                - The Guarantor waives the right to invoke:\r\n                            </p>\r\n                            <p class=\"mb-10\">\r\n\r\n                                ° The provisions of article 23 of the OHADA Uniform Act (NEW) on\r\n                                organization of securities which, without discharging them from their commitments, would\r\n                                authorize them to\r\n                                pursue the guaranteed debtor to force payment in case payment deadlines\r\n                                would be granted by the Bank; and<br>\r\n                            </p>\r\n                            <p class=\"mb-10\">\r\n\r\n                                ° All subrogations, all actions that would result in competing\r\n                                with the Bank against the guaranteed debtor as long as the bank\r\n                                has not been fully compensated for all amounts in principal, interest,\r\n                                commissions, fees, indemnities and accessories owed to it under the Secured\r\n                                Obligations.\r\n                            </p>\r\n\r\n                            <p class=\"mb-10\">\r\n                                - The Guarantor expressly waives, in the event of declaration of\r\n                                early acceleration of Credits in accordance with the stipulations of the Credit\r\n                                Agreement, the right to invoke, against the Bank, the unenforceability of the\r\n                                term forfeiture incurred by the Secured Debtor.\r\n                            </p>\r\n                            <p class=\"mb-10\">- The Guarantor undertakes, for the entire duration of this guarantee:</p>\r\n                            <p class=\"mb-10\">\r\n                                ° To inform the Bank in writing as soon as they become aware of any event\r\n                                likely to cause a deterioration in their financial situation or their\r\n                                ability to meet their obligations under this guarantee;\r\n                            </p>\r\n                            <p class=\"mb-10\">\r\n                                ° Not to assign or transfer ownership of any of their assets if such assignment or\r\n                                transfer would have a significant negative effect on their financial situation or\r\n                                their ability to meet their obligations under this guarantee.\r\n                            </p>\r\n                            <p class=\"mb-10\">\r\n                                – The Guarantor declares that the Bank has sufficiently drawn their attention to:\r\n                            </p>\r\n                            <p class=\"mb-10\">° The nature and scope of their commitment;</p>\r\n                            <p class=\"mb-10\">\r\n                                ° The proportionality between the value of their assets and the amount of the guarantee,\r\n                                for which they solemnly attest to possessing sufficient assets to cover the guaranteed\r\n                                amount.\r\n                            </p>\r\n                            <p class=\"mb-10\">\r\n                                – The Guarantor declares that their assets consist of the following assets and\r\n                                liabilities:\r\n                            </p>\r\n\r\n                            <p class=\"mb-10\">\r\n                                – The Bank is required to inform the Guarantor of any default by the Guaranteed Party\r\n                                with respect to the Guaranteed Obligations, as well as any forfeiture or extension of\r\n                                the term, specifying the amount remaining due in principal, interest, and fees on the\r\n                                date of the default, forfeiture, or extension of the term.\r\n                            </p>\r\n                            <p class=\"mb-10\">\r\n                                The Bank is required, within one month following the end of each civil semester, to\r\n                                provide the Guarantor with a statement of the debts of the Guaranteed Party, specifying\r\n                                their causes, due dates, and amounts in principal, interest, commissions, fees, and\r\n                                accessories still owed at the end of each elapsed semester, while reminding them of the\r\n                                right of revocation by literal reproduction of the provisions of this article and those\r\n                                of Article 19 of the Uniform Act on the Organization of Securities.\r\n                            </p>\r\n                            <p class=\"mb-10\">\r\n                                For the proper performance of this commitment, the Guarantor undertakes and agrees to\r\n                                inform the Bank of any change of address concerning them.\r\n                            </p>\r\n                            <p class=\"mb-10\">\r\n                                – In the event of non-payment at maturity by the Guaranteed Party of any amount due\r\n                                under the Guaranteed Obligations, the Guarantor shall be required to pay the Bank,\r\n                                within the limit of the Maximum Guaranteed Amount, the amount concerned, fifteen (15)\r\n                                days after a formal notice addressed to the Guaranteed Party has remained without\r\n                                effect. The Guarantor may not invoke any payment extensions granted conventionally or\r\n                                judicially to the Guaranteed Party.\r\n                            </p>\r\n                            <p class=\"mb-10\">\r\n                                – This guarantee shall take effect on the date of its signature and shall remain in\r\n                                force until all Guaranteed Obligations have been fully repaid or settled.\r\n                            </p>\r\n\r\n\r\n\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"column\">\r\n                    <div class=\"article\">\r\n                        <div class=\"article-content mb-10\">\r\n                            - The Guarantor may decide at any time to revoke their commitment by\r\n                            written notification to the Bank. The revocation will take effect upon expiration of a\r\n                            period\r\n                            of ninety (90) days from the date of receipt of the notification letter.\r\n                            The Guarantor will remain liable until full and final repayment to\r\n                            the Bank of all obligations of the Principal Debtor incurred.\r\n\r\n                        </div>\r\n                        <div class=\"article-content\">\r\n                            <div class=\"article-subsection\">\r\n                                <span class=\"subsection-number\">6.5-</span> <strong>FIDUCIARY TRANSFER OF MONEY\r\n                                </strong><br>\r\n                                As security and guarantee for the full repayment of the Credit, payment of all\r\n                                interest, indemnities, repayment of all advances, fees, accessories\r\n                                of any kind, as well as any debit balance on the current account and in a general\r\n                                manner, as guarantee for the execution of all obligations resulting for the borrower\r\n                                from this deed, <span class=\"title-background\">{{titre_client}}</span> <span\r\n                                    class=\"title-background\">{{nom_cedant}}</span> hereby assigns and abandons\r\n                                for the benefit of The Bank which accepts it, as guarantee for the repayment of all\r\n                                amounts in principal, interest, fees, commissions, taxes and accessories that the\r\n                                Assignor\r\n                                could owe to the Bank by reason of the above-mentioned financing, the amount\r\n                                corresponding to {{devise}} <span\r\n                                    class=\"title-background\">{{cashcoll}}</span> ( <span\r\n                                    class=\"title-background\">{{cashcoll_lettres}}</span> {{devise}})\r\n                                for which they authorize the withdrawal from their current account, and the fiduciary\r\n                                custody\r\n                                on the Blocked Account until extinction of banking commitments.\r\n                            </div>\r\n                            <p>\r\n                                - The funds assigned to the bank will be blocked on account <span\r\n                                    class=\"title-background\">{{numero_compte_cashcoll}}</span> opened in the books of\r\n                                {{banque}} and in its name as creditor of the Assignor's obligation (the\r\n                                Blocked Account or the Fiduciary Account).\r\n                            </p>\r\n\r\n                            <p>\r\n                                – By mutual agreement between the parties, the Blocked Account constitutes a trust\r\n                                account within the meaning of the provisions of the OHADA Uniform Act on securities\r\n                                governing the fiduciary transfer mechanism; it is opened in the Cedant’s accounting\r\n                                system solely for better management of the Guaranteed Obligations.\r\n                            </p>\r\n\r\n                            <p class=\"mb-10\">\r\n                                – The CEDANT may not dispose of this blocked amount in any way whatsoever, as long as it\r\n                                remains held in trust as security for the Guaranteed Obligations towards the\r\n                                BENEFICIARY.\r\n                            </p>\r\n                            <p class=\"mb-10\">\r\n                                – The funds transferred to the benefit of the Bank under this agreement do not bear\r\n                                interest.\r\n                            </p>\r\n                            <p class=\"mb-10\">\r\n                                – The Cedant waives any rights they might have to require the Bank to enforce or\r\n                                exercise any security against any other person before enforcing the rights created under\r\n                                this agreement, and any right they might have to require the Bank to exercise its rights\r\n                                in a specific order under this agreement.\r\n                            </p>\r\n                            <p class=\"mb-10\">\r\n                                – In the event of the Borrower’s default, and eight days after the Cedant has been duly\r\n                                notified thereof, the Bank may, at its discretion, apply the transferred funds to the\r\n                                settlement of the Cedant’s obligations, within the limit of the unpaid guaranteed\r\n                                claims.\r\n                            </p>\r\n                            <p class=\"mb-10\">\r\n                                – This agreement is enforceable as of right against the Bank in accordance with Article\r\n                                88 of the OHADA Uniform Act on Securities, with the Bank’s participation as Beneficiary\r\n                                exempting the parties from the notification formalities provided for in said article.\r\n                            </p>\r\n                            <p class=\"mb-10\">\r\n                                – On the maturity date stipulated in Article 2.1 above, and in the event of the complete\r\n                                repayment of the facilities, the funds recorded in the trust account shall be returned\r\n                                to the Cedant.\r\n                            </p>\r\n                            <p class=\"mb-10\">\r\n                                – This Agreement and the Fiduciary Transfer shall benefit the Beneficiary as well as its\r\n                                respective successors, assigns, and transferees.\r\n                            </p>\r\n                            <p class=\"mb-10\">\r\n                                – In the event of an assignment or transfer by way of novation of all or part of its\r\n                                rights and obligations under this Agreement by the Beneficiary, the Beneficiary\r\n                                expressly reserves and maintains its rights, actions, and privileges under this\r\n                                Agreement for the benefit of its successors, assigns, and transferees.\r\n                            </p>\r\n\r\n                        </div>\r\n                    </div>\r\n\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"page-footer\">\r\n            <strong>{{banque}}</strong><br>\r\n            Head office: <span class=\"title-background\">{{siege_filiale}}</span>,\r\n            P.O. Box: <span class=\"title-background\">{{boite_postale}}</span>,\r\n            Tel: <span class=\"title-background\">{{numero_filiale}}</span> |\r\n            Public limited company with a share capital of: <span class=\"title-background\">{{capital_social}}</span>\r\n            {{devise}} |\r\n            <span class=\"title-background\">{{agrement}}</span> | <span class=\"title-background\">{{siteweb}}</span>\r\n        </div>\r\n\r\n        <div class=\"page-number\">5</div>\r\n    </div>\r\n\r\n    <!-- PAGE 6 -->\r\n    <div class=\"print-page\">\r\n        <div class=\"content-body\">\r\n            <div class=\"two-columns\">\r\n                <div class=\"column\">\r\n                    <div class=\"article\">\r\n                        <div class=\"article-content\">\r\n                            - The fact that the Beneficiary does not exercise any right, option or\r\n                            privilege which they hold under this Agreement or\r\n                            the fact that they exercise such right, option or privilege with\r\n                            delay shall not constitute waiver of such right, option or privilege.\r\n                            The rights and remedies of the Beneficiary under this Agreement are\r\n                            cumulative and not exclusive of other rights or remedies provided by law.\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"article\">\r\n                        <div class=\"article-title\">Article 7: Duration, Release and Effects</div>\r\n                        <div class=\"article-content\">\r\n                            <div class=\"article-subsection\">\r\n                                <span class=\"subsection-number\">7.1.</span> This agreement takes effect from\r\n                                its signature by the Parties, and shall remain in force in all its stipulations and\r\n                                shall produce its effects until the date of delivery, by the Bank, of a formal act of\r\n                                release resulting in liberation of the Grantor.\r\n                            </div>\r\n                            <div class=\"article-subsection\">\r\n                                <span class=\"subsection-number\">7.2.</span> The delivery of the release act\r\n                                indicated above will allow the Grantor to recover full possession of their\r\n                                rights, and in particular, to pursue cancellation of the registration with the RCCM\r\n                                where\r\n                                applicable.\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"article\">\r\n                        <div class=\"article-title\">Article 8: Disability-Death Insurance</div>\r\n                        <div class=\"article-content\">\r\n                            <p>\r\n                                For additional security, the BORROWER undertakes to subscribe, with a\r\n                                notoriously solvent insurance company, an Insurance Policy against Disability\r\n                                and Death Risks with indemnity clause duly assigned for the benefit of the Bank in case\r\n                                of loss.\r\n                            </p>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"article\">\r\n                        <div class=\"article-title\">Article 9: Penalties and Indemnities</div>\r\n                        <div class=\"article-content\">\r\n                            <div class=\"article-subsection\">\r\n                                <span class=\"subsection-number\">9.1 –</span> <strong>Content of the Borrower's\r\n                                    Commitments:</strong> This Credit agreement creates obligations for\r\n                                the Borrower and their co-obligors:\r\n                                <ul class=\"article-list\">\r\n                                    <li>- The obligation to satisfy the conditions stipulated in article 5.1 above;\r\n                                    </li>\r\n                                    <li>- The obligation to repay, on due date, the amortization installments of the\r\n                                        Credit actually disbursed.</li>\r\n                                </ul>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"article\">\r\n                        <div class=\"article-content\">\r\n                            <div class=\"article-subsection\">\r\n                                <span class=\"subsection-number\">9.2 –</span> <strong>Penalty Clause:</strong> In the\r\n                                event of failure\r\n                                to repay the Credit on the due date, the Borrower shall be charged, on the outstanding\r\n                                balance\r\n                                of the unpaid commitments, penalties calculated at a rate of ten percent (10%) of the\r\n                                amounts\r\n                                remaining due.\r\n                            </div>\r\n\r\n                            <div class=\"article-subsection\">\r\n                                <span class=\"subsection-number\">9.3 –</span> <strong>Outsourcing Fees:</strong>\r\n                                In the event of reclassification of commitments, the Bank shall have the right to\r\n                                outsource\r\n                                the collection to Specialized Debt Recovery Agencies. In such case, the Borrower shall\r\n                                be charged\r\n                                outsourced recovery fees amounting to twenty percent (20%) of the amounts remaining due;\r\n                            </div>\r\n\r\n                            <div class=\"article-subsection\">\r\n                                <span class=\"subsection-number\">9.4 –</span> <strong>Recovery Costs and Fees:</strong>\r\n                                In the event that, in order to recover the debt arising from this agreement, the Bank is\r\n                                obliged\r\n                                to resort to a legal representative (investigators, bailiffs, lawyers, experts) or to\r\n                                initiate legal proceedings,\r\n                                the Borrower undertakes to bear the legal costs, fees, attorney’s fees, procedural\r\n                                expenses and court costs\r\n                                charged to him, and in addition, shall pay the Bank a lump-sum indemnity amounting to\r\n                                two percent (2%)\r\n                                of the amounts due, to cover the loss of interest, expenses and damages of all kinds\r\n                                caused by the need\r\n                                for such recourse or proceedings.\r\n                            </div>\r\n\r\n                            <div class=\"article-subsection\">\r\n                                <span class=\"subsection-number\">9.5 –</span> <strong>As of now,</strong>\r\n                                the Borrower undertakes under the above terms, and hereby gives the Bank irrevocable\r\n                                instructions\r\n                                to debit his account, if applicable.\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n\r\n                    <div class=\"article\">\r\n                        <div class=\"article-title\">Article 10: Risks of Prohibition and Criminal Prosecution</div>\r\n                        <div class=\"article-content\">\r\n                            <div class=\"article-subsection\">\r\n                                <span class=\"subsection-number\">10.1 –</span> Failure to repay the facilities granted\r\n                                under this agreement, as well as any failure to comply with a moratorium, shall\r\n                                constitute a Credit Incident within the meaning of Law No. 2019/021 of 24 December 2019,\r\n                                establishing certain rules governing credit activities in the banking and microfinance\r\n                                sectors in Cameroon;\r\n                            </div>\r\n\r\n                            <div class=\"article-subsection\">\r\n                                <span class=\"subsection-number\">10.2 –</span> In the event of a Credit Incident, the\r\n                                Borrower shall be subject to a credit prohibition, which entails being barred from\r\n                                entering into any credit transaction with any other banking or microfinance institution;\r\n                                the Borrower shall only regain the right to enter into a credit transaction upon\r\n                                providing proof that the situation has been regularized by repaying, in principal and\r\n                                interest, the debt subject to the credit incident.\r\n                            </div>\r\n\r\n                            <div class=\"article-subsection\">\r\n                                <span class=\"subsection-number\">10.3 –</span> The Borrower shall likewise be subject to\r\n                                the criminal sanctions prescribed by the aforementioned law, which provides:\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"column\">\r\n                    <div class=\"article\">\r\n                        <div class=\"article-content\">\r\n                            <p class=\"mb-10\">\r\n                                “Art. 20: Shall be punishable by imprisonment from six (06) months to five (05) years\r\n                                and a fine ranging from one hundred thousand (100,000) to one hundred million\r\n                                (100,000,000)\r\n                                {{devise}}, or by either of these two penalties alone, any person who, in bad faith,\r\n                                has failed to repay the credit granted to him by a regulated institution.”\r\n                            </p>\r\n                            <p class=\"mb-10\">\r\n                                Art. 21 (2): The above sanctions may also be applied in the event of non-compliance\r\n                                with a moratorium.\r\n                            </p>\r\n                            <div class=\"article-subsection\">\r\n                                <span class=\"subsection-number\">10.4 –</span> In the event of the use of forged\r\n                                documents, the BENEFICIARY\r\n                                and his co-obligors shall be liable, pursuant to the provisions of Law No. 2019/021 of\r\n                                24 December 2019,\r\n                                establishing certain rules governing credit activities in the banking and microfinance\r\n                                sectors in Cameroon,\r\n                                which provides in its Article 22: “Shall be punishable by imprisonment from six (06)\r\n                                months to three (03) years\r\n                                and a fine ranging from one hundred thousand (100,000) to five million (5,000,000) {{devise}}\r\n                                francs, or by either of\r\n                                these two penalties alone, any person who, with the intention of prejudicing the rights\r\n                                of the regulated institution,\r\n                                uses or attempts to use forged documents in the context of entering into a credit\r\n                                transaction.”\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"article\">\r\n                        <div class=\"article-title\">Article 11: Fees – Duties and Taxes</div>\r\n                        <div class=\"article-content\">\r\n                            <p>\r\n                                All duties, taxes, fees, and any incidental charges related to the conclusion and\r\n                                execution\r\n                                of this agreement and its consequences shall be borne by the BORROWER, who expressly\r\n                                undertakes\r\n                                to do so, and hereby authorizes the BANK to debit his account, on such date as it deems\r\n                                appropriate,\r\n                                for the settlement of said charges.\r\n                            </p>\r\n                        </div>\r\n                    </div>\r\n\r\n\r\n                    <div class=\"article\">\r\n                        <div class=\"article-title\">Article 12: Final Provisions</div>\r\n                        <div class=\"article-content\">\r\n                            <div class=\"article-subsection\">\r\n                                <span class=\"subsection-number\">12.1 –</span> The rights of the BORROWER arising from\r\n                                this agreement\r\n                                may neither be assigned nor encumbered.\r\n                            </div>\r\n                            <div class=\"article-subsection\">\r\n                                <span class=\"subsection-number\">12.2 –</span> Any amendments to this agreement must be\r\n                                made by means\r\n                                of a written addendum.\r\n                            </div>\r\n                            <div class=\"article-subsection\">\r\n                                <span class=\"subsection-number\">12.3 –</span> The invalidation of any clause of this\r\n                                agreement shall\r\n                                not affect the validity of the other provisions. Invalid clauses shall be promptly\r\n                                replaced,\r\n                                at the initiative of the contracting parties, with provisions that comply with the\r\n                                legislation\r\n                                in force.\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"article\">\r\n                        <div class=\"article-content\">\r\n                            <div class=\"article-subsection\">\r\n                                <span class=\"subsection-number\">12.6 -</span> The Borrower agrees that their data may be\r\n                                processed by the Bank\r\n                                in connection with this agreement and its subsequent consequences. Such processing is\r\n                                intended for the\r\n                                management of facilities granted to the Borrower, commercial promotion and statistical\r\n                                studies, risk\r\n                                assessment, security and prevention of defaults and fraud, debt recovery, combating\r\n                                money laundering and\r\n                                terrorist financing, and compliance with legal and regulatory obligations.\r\n                            </div>\r\n\r\n                            <div class=\"article-subsection\">\r\n                                <span class=\"subsection-number\">12.7 -</span> This personal data is protected by the\r\n                                professional secrecy to\r\n                                which the Bank is bound. The Client expressly agrees, for the entire duration of the\r\n                                facility, that the\r\n                                personal data concerning them may be transmitted:\r\n                                <ul class=\"article-list\">\r\n                                    <li>- to service providers and subcontractors performing, on behalf of the Bank,\r\n                                        certain tasks related\r\n                                        to the purposes described above;</li>\r\n                                    <li>- to companies within the Atlantic Financial Group (AFG) performing, on behalf\r\n                                        of the Bank, certain\r\n                                        tasks related to the purposes described above;</li>\r\n                                    <li>- to companies within the AFG Group for the presentation of products and\r\n                                        services managed by such\r\n                                        companies, in cases of resource pooling;</li>\r\n                                    <li>- to companies within the AFG Group with which the Client is or will be in a\r\n                                        contractual\r\n                                        relationship, for the purpose of updating data collected by such companies;</li>\r\n                                    <li>- to organizations tasked with conducting surveys or polls;</li>\r\n                                    <li>- and to bodies such as the tax authorities and the Central Bank, in order to\r\n                                        comply with the legal\r\n                                        or regulatory obligations incumbent upon the Bank.</li>\r\n                                </ul>\r\n                            </div>\r\n\r\n                            <div class=\"article-subsection\">\r\n                                <span class=\"subsection-number\">12.8 -</span> The personal data provided by the Client\r\n                                in accordance with the\r\n                                above purposes may, in the course of various operations, be transferred to a third\r\n                                country. Rules ensuring\r\n                                the protection and security of the data have been implemented in accordance with\r\n                                applicable legislation.\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"page-footer\">\r\n            <strong>{{banque}}</strong><br>\r\n            Head office: <span class=\"title-background\">{{siege_filiale}}</span>,\r\n            P.O. Box: <span class=\"title-background\">{{boite_postale}}</span>,\r\n            Tel: <span class=\"title-background\">{{numero_filiale}}</span> |\r\n            Public limited company with a share capital of: <span class=\"title-background\">{{capital_social}}</span>\r\n            {{devise}} |\r\n            <span class=\"title-background\">{{agrement}}</span> | <span class=\"title-background\">{{siteweb}}</span>\r\n        </div>\r\n\r\n        <div class=\"page-number\">6</div>\r\n    </div>\r\n\r\n    <!-- PAGE 7 -->\r\n    <div class=\"print-page\">\r\n        <div class=\"content-body\">\r\n\r\n            <div class=\"two-columns\">\r\n                <div class=\"column\">\r\n                    <div class=\"article\">\r\n                        <div class=\"article-subsection\">\r\n                            <span class=\"subsection-number\">12.9 -</span> Such personal data may be disclosed, upon\r\n                            their request,\r\n                            to official bodies and administrative or judicial authorities,\r\n                            particularly in the context of anti-money laundering or\r\n                            counter-terrorism financing.\r\n                        </div>\r\n                        <div class=\"article-subsection\">\r\n                            <span class=\"subsection-number\">12.10 -</span> Such personal data may be subject to\r\n                            the exercise of rights of\r\n                            access, rectification and objection under the conditions provided by applicable law. The\r\n                            Client may obtain a copy of data concerning them and, where\r\n                            applicable, have it rectified by mail addressed to the Bank's registered office.\r\n                        </div>\r\n                        <div class=\"article-subsection\">\r\n                            <span class=\"subsection-number\">12.11 -</span> The Borrower authorizes the Bank to initiate,\r\n                            with any national and foreign\r\n                            administrative services, any verification, certification or request\r\n                            in order to obtain information concerning them.\r\n                        </div>\r\n                        <div class=\"article-subsection\">\r\n                            <span class=\"subsection-number\">12.12 -</span> For any potential difficulty or\r\n                            complaint regarding the operation of their account or the use of services made available to\r\n                            them, the BORROWER may refer to the following contacts:\r\n                            <ul class=\"article-list\">\r\n                                <li>- Their Account Manager or branch manager; they are their primary\r\n                                    contacts and serve as intermediaries between the Bank and the Client.</li>\r\n                                <li>- The ''Customer Experience Service'', responsible for centralized monitoring of\r\n                                    complaints. This service can be reached at the following contact details:</li>\r\n                            </ul>\r\n                        </div>\r\n\r\n                        <div class=\"service-client-box\">\r\n                            Customer Experience,<br>\r\n                            P.O. Box: {{siege_filiale}},<br>\r\n                            Customer Relations Center: 8086 / {{numero_filiale}} ;<br>\r\n                            Email: {{ email_filiale}}\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"column\">\r\n                    <div class=\"article\">\r\n                        <div class=\"article-content\">\r\n                            <span class=\"subsection-number\">12.12 -</span> The Bank undertakes to acknowledge receipt of\r\n                            the\r\n                            complaint within ten (10)\r\n                            days and to provide a response within a maximum of forty-five (45) business days,\r\n                            except in exceptional cases.\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"article\">\r\n                        <div class=\"article-title\">Article 13: Successors and assigns</div>\r\n                        <div class=\"article-content\">\r\n                            <p>\r\n                                This Agreement and the Fiduciary Transfer shall benefit the Beneficiary as well as\r\n                                their respective successors, assigns and transferees.\r\n                            </p>\r\n                            <p>\r\n                                In the event of assignment or transfer by way of novation of all or part of its rights\r\n                                and\r\n                                obligations under this Agreement by the Beneficiary, the Beneficiary\r\n                                expressly reserves and maintains its rights, actions and privileges hereunder for the\r\n                                benefit of its successors, assigns and transferees\r\n                            </p>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"article\">\r\n                        <div class=\"article-title\">Article 14: Election of domicile - competent jurisdiction</div>\r\n                        <div class=\"article-content\">\r\n                            <div class=\"article-subsection\">\r\n                                <span class=\"subsection-number\">14.1 –</span> For the performance hereof and any\r\n                                consequences thereof, as well as for all disputes that may arise between the BANK and\r\n                                THE BORROWER\r\n                                in their business relations, the plaintiff may bring suit before the\r\n                                competent Court within whose jurisdiction the registered office or domicile of the\r\n                                defendant is located.\r\n                            </div>\r\n                            <div class=\"article-subsection\">\r\n                                <span class=\"subsection-number\">14.2 –</span> For this purpose, each party elects\r\n                                domicile at\r\n                                its address above.\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"text-right mb-15\">\r\n                        <p>Done at <span class=\"title-background\">{{lieu_redaction}}</span> on <span\r\n                                class=\"title-background\">{{date_redaction}}</span></p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"two-columns mb-15\" style=\"margin-bottom: 5rem;\">\r\n\r\n                <div class=\"signature-title\">\r\n                    THE BORROWER / THE CEDANT\r\n                    <small class=\"\">(preceded by the mention \"read and approved\")</small>\r\n                </div>\r\n                <div class=\"signature-title\" style=\"text-align: end;\">For THE BANK</div>\r\n\r\n\r\n            </div>\r\n            <div class=\"manuscript-mention\" style=\"margin-bottom: 8rem;\">\r\n                <div class=\"font-bold\" style=\"text-align: center;\">THE PLEDGOR</div><br>\r\n                1/ The signature must be preceded by the handwritten statement \"<strong>Good for pledge of Certificate\r\n                    of Deposit No.<span class=\"title-background\">{{numero_bon_de_caisse}}</span> in the amount of\r\n                    {{devise}} <span class=\"title-background\">{{montant_bon_caisse_nanti}}</span></strong>\" + SIGNATURE +\r\n                NAME<br><br>\r\n                2/ The signature must be preceded by the handwritten statement \"<strong>Good for pledge of my Savings\r\n                    Account No.<span class=\"title-background\">{{numero_compte_nanti}}</span> in the amount of\r\n                    {{devise}} <span class=\"title-background\">{{montant_nantissement_epargne}}</span></strong>\" +\r\n                SIGNATURE + NAME\r\n            </div>\r\n\r\n\r\n            <div class=\"manuscript-mention\">\r\n                <div class=\"font-bold\" style=\"text-align: center;\">JOINT AND SEVERAL PERSONAL GUARANTEE</div><br>\r\n            \r\n                The signature must be preceded by the handwritten statement \"<strong>Good for joint and several personal guarantee of the amounts owed and to be owed by <span class=\"title-background\">{{nom_client}}</span> in principal (subject to late interest, commissions, premiums, penalties, fees, charges, taxes, and other accessories), up to the maximum guaranteed amount of <span class=\"title-background\">{{montant_caution}}</span> {{devise}} (<span class=\"title-background\">{{montant_caution_lettres}}</span>) as indicated above</strong>\" + SIGNATURE + NAME<br>\r\n                (if joint and several personal guarantee)\r\n            </div>\r\n            \r\n        </div>\r\n\r\n        <div class=\"page-footer\">\r\n            <strong>{{banque}}</strong><br>\r\n            Head office: <span class=\"title-background\">{{siege_filiale}}</span>,\r\n            P.O. Box: <span class=\"title-background\">{{boite_postale}}</span>,\r\n            Tel: <span class=\"title-background\">{{numero_filiale}}</span> |\r\n            Public limited company with a share capital of: <span class=\"title-background\">{{capital_social}}</span>\r\n            {{devise}} |\r\n            <span class=\"title-background\">{{agrement}}</span> | <span class=\"title-background\">{{siteweb}}</span>\r\n        </div>\r\n\r\n        <div class=\"page-number\">7</div>\r\n    </div>\r\n\r\n</body>\r\n\r\n</html>");

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/conventions/en/CONVENTION_CREDIT_AMORTISSAGE_NEW.vue?vue&type=style&index=0&id=8b044274&scoped=true&lang=css":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/conventions/en/CONVENTION_CREDIT_AMORTISSAGE_NEW.vue?vue&type=style&index=0&id=8b044274&scoped=true&lang=css ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CONVENTION_CREDIT_AMORTISSAGE_NEW_vue_vue_type_style_index_0_id_8b044274_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CONVENTION_CREDIT_AMORTISSAGE_NEW.vue?vue&type=style&index=0&id=8b044274&scoped=true&lang=css */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/conventions/en/CONVENTION_CREDIT_AMORTISSAGE_NEW.vue?vue&type=style&index=0&id=8b044274&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CONVENTION_CREDIT_AMORTISSAGE_NEW_vue_vue_type_style_index_0_id_8b044274_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CONVENTION_CREDIT_AMORTISSAGE_NEW_vue_vue_type_style_index_0_id_8b044274_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/offview/bank/afg/memo/conventions/en/CONVENTION_CREDIT_AMORTISSAGE_NEW.vue":
/*!************************************************************************************************************!*\
  !*** ./resources/js/components/offview/bank/afg/memo/conventions/en/CONVENTION_CREDIT_AMORTISSAGE_NEW.vue ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CONVENTION_CREDIT_AMORTISSAGE_NEW_vue_vue_type_template_id_8b044274_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CONVENTION_CREDIT_AMORTISSAGE_NEW.vue?vue&type=template&id=8b044274&scoped=true */ "./resources/js/components/offview/bank/afg/memo/conventions/en/CONVENTION_CREDIT_AMORTISSAGE_NEW.vue?vue&type=template&id=8b044274&scoped=true");
/* harmony import */ var _CONVENTION_CREDIT_AMORTISSAGE_NEW_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CONVENTION_CREDIT_AMORTISSAGE_NEW.vue?vue&type=script&lang=js */ "./resources/js/components/offview/bank/afg/memo/conventions/en/CONVENTION_CREDIT_AMORTISSAGE_NEW.vue?vue&type=script&lang=js");
/* harmony import */ var _CONVENTION_CREDIT_AMORTISSAGE_NEW_vue_vue_type_style_index_0_id_8b044274_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CONVENTION_CREDIT_AMORTISSAGE_NEW.vue?vue&type=style&index=0&id=8b044274&scoped=true&lang=css */ "./resources/js/components/offview/bank/afg/memo/conventions/en/CONVENTION_CREDIT_AMORTISSAGE_NEW.vue?vue&type=style&index=0&id=8b044274&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _CONVENTION_CREDIT_AMORTISSAGE_NEW_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _CONVENTION_CREDIT_AMORTISSAGE_NEW_vue_vue_type_template_id_8b044274_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _CONVENTION_CREDIT_AMORTISSAGE_NEW_vue_vue_type_template_id_8b044274_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "8b044274",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/offview/bank/afg/memo/conventions/en/CONVENTION_CREDIT_AMORTISSAGE_NEW.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/offview/bank/afg/memo/conventions/en/CONVENTION_CREDIT_AMORTISSAGE_NEW.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************!*\
  !*** ./resources/js/components/offview/bank/afg/memo/conventions/en/CONVENTION_CREDIT_AMORTISSAGE_NEW.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CONVENTION_CREDIT_AMORTISSAGE_NEW_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CONVENTION_CREDIT_AMORTISSAGE_NEW.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/conventions/en/CONVENTION_CREDIT_AMORTISSAGE_NEW.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CONVENTION_CREDIT_AMORTISSAGE_NEW_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/offview/bank/afg/memo/conventions/en/CONVENTION_CREDIT_AMORTISSAGE_NEW.vue?vue&type=style&index=0&id=8b044274&scoped=true&lang=css":
/*!********************************************************************************************************************************************************************!*\
  !*** ./resources/js/components/offview/bank/afg/memo/conventions/en/CONVENTION_CREDIT_AMORTISSAGE_NEW.vue?vue&type=style&index=0&id=8b044274&scoped=true&lang=css ***!
  \********************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CONVENTION_CREDIT_AMORTISSAGE_NEW_vue_vue_type_style_index_0_id_8b044274_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CONVENTION_CREDIT_AMORTISSAGE_NEW.vue?vue&type=style&index=0&id=8b044274&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/conventions/en/CONVENTION_CREDIT_AMORTISSAGE_NEW.vue?vue&type=style&index=0&id=8b044274&scoped=true&lang=css");


/***/ }),

/***/ "./resources/js/components/offview/bank/afg/memo/conventions/en/CONVENTION_CREDIT_AMORTISSAGE_NEW.vue?vue&type=template&id=8b044274&scoped=true":
/*!******************************************************************************************************************************************************!*\
  !*** ./resources/js/components/offview/bank/afg/memo/conventions/en/CONVENTION_CREDIT_AMORTISSAGE_NEW.vue?vue&type=template&id=8b044274&scoped=true ***!
  \******************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CONVENTION_CREDIT_AMORTISSAGE_NEW_vue_vue_type_template_id_8b044274_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CONVENTION_CREDIT_AMORTISSAGE_NEW_vue_vue_type_template_id_8b044274_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CONVENTION_CREDIT_AMORTISSAGE_NEW_vue_vue_type_template_id_8b044274_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CONVENTION_CREDIT_AMORTISSAGE_NEW.vue?vue&type=template&id=8b044274&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/conventions/en/CONVENTION_CREDIT_AMORTISSAGE_NEW.vue?vue&type=template&id=8b044274&scoped=true");


/***/ })

}]);