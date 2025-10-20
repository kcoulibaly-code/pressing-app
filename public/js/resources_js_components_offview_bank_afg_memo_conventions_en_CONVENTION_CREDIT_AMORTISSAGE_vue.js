"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_offview_bank_afg_memo_conventions_en_CONVENTION_CREDIT_AMORTISSAGE_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/conventions/en/CONVENTION_CREDIT_AMORTISSAGE.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/conventions/en/CONVENTION_CREDIT_AMORTISSAGE.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_ebapis_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../services/ebapis.service */ "./resources/js/services/ebapis.service.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../services/auth.service */ "./resources/js/services/auth.service.js");
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
/* harmony import */ var qrcode_generator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! qrcode-generator */ "./node_modules/qrcode-generator/qrcode.js");
/* harmony import */ var qrcode_generator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(qrcode_generator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! crypto-js */ "./node_modules/crypto-js/index.js");
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _html2canvas__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../html2canvas */ "./resources/js/html2canvas.js");
/* harmony import */ var _html2canvas__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_html2canvas__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jspdf */ "./node_modules/jspdf/dist/jspdf.es.min.js");
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
  name: 'ConventionCreditAmortissable',
  components: {
    PlusIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_6__.PlusIcon,
    TrashIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_6__.TrashIcon
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
      "default": ''
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
        table: 'cred_pub_tb_15501',
        banque: '',
        abreviation: '',
        capital_social: null,
        devise: '',
        siege: '',
        boite_postale: '',
        lieu_immatriculation: '',
        date_immatriculation: null,
        immatriculation: '',
        titre_client: '',
        nom_client: '',
        date_naissance: null,
        lieu_naissance: '',
        nom_du_pere: '',
        nom_de_la_mere: '',
        adresse: '',
        telephone: '',
        telephones: [],
        indicatif_telephone: "",
        email: '',
        fonction: '',
        employeur: '',
        boite_postale_employeur: '',
        titre_identification: '',
        num_identification: '',
        date_delivrance: null,
        lieu_delivrance: '',
        date_redaction: '',
        // designation: '',
        type_financement: '',
        objet: '',
        duree: null,
        taux_interets_annuel: null,
        // frais_dossier_mise_place: null,
        fonds_garantie: null,
        // prime_assurance_deces_emprunteur: null,
        montant_facilite: null,
        taux_interets: null,
        frais: null,
        // teg_annuel: null,
        // teg_periodique: null,
        // taux_usure: null,
        taux_interet_annuel: null,
        taux_interet_retard_lettres: '',
        taux_interet_retard: null,
        // billet_ordre_montant: null,
        code_guichet: '',
        num_bq: '',
        numero_de_compte: '',
        cle_rib: '',
        // addGaranties: [],
        key: "convention_credit_amortissement",
        indexSelectionne: this.indexSelectionne,
        montant_credit: 0,
        num_compte: "",
        num_compte_2: "",
        lieu_redation: '',
        // listGaranties: [],
        boite_postale_client: '',
        conditions_data: [],
        facilites: [],
        detail_garantie: []
      },
      telephones: [],
      check_fields: {},
      // listGaranties: [
      //   { index: 0, value: 'Oui', garantie: 'Nantissement de compte' },
      //   { index: 1, value: 'Non', garantie: 'Hypothèque' },
      //   { index: 2, value: 'Non', garantie: 'Caution solidaire' },
      //   { index: 3, value: 'Non', garantie: 'Gage sur véhicule' },
      //   { index: 4, value: 'Non', garantie: 'Assurance décès' },
      //   { index: 5, value: 'Non', garantie: 'Autres garanties' },
      // ],
      detail_garantie: [],
      conditions_data: [],
      facilites: [],
      var_1: {
        // titre_client: true,
        // nom_client: true,
        // date_naissance: true, lieu_naissance: true,
        nom_du_pere: false,
        nom_de_la_mere: false,
        // adresse: true,
        // telephone: true,
        // email: true,
        // fonction: true, employeur: true,
        boite_postale_employeur: false
        // titre_identification: true,
        // num_identification: true,
        // date_delivrance: true,
        // lieu_delivrance: true,
        // designation: true,
      },
      var_2: {
        // banque: true,
        // abreviation: true,
        // capital_social: true,
        // devise: true,
        // siege: true,
        // boite_postale: true,
        // lieu_immatriculation: true,
        // date_immatriculation: true,
        // immatriculation: true
      },
      var_3: {
        // montant_credit: true,
        // montant_credit: true,
        num_compte: false,
        num_compte_2: false
        // billet_ordre_montant:false,
        // type_financement: false,
        // objet: false,
        // duree: false,
        // taux_interets_annuel:false,
        // frais_dossier_mise_place:false,
        // fonds_garantie:false,
        // prime_assurance_deces_emprunteur:false,
        // montant_facilite:false,
        // taux_interets:false,
        // frais:false,
        // teg_annuel:false,
        // teg_periodique:false,
        // taux_usure:false,
        // taux_interet_annuel:false,
        // taux_interet_retard_lettres:false,
        // taux_interet_retard:false,
        // code_guichet:false,
        // numero_de_compte:false,
        // cle_rib:false,
      },
      var_4: {
        // type_financement: true,
        // objet: true,
        // nombre_jour_remboursement_chiffre: true,
        // nombre_jour_remboursement_lettre: true,
        // modalite_remboursement_chiffre: true,
        // modalite_remboursement_lettre: true,
        lieu_redation: false
        // date_delivrance: true,
        // duree: true,
        // taux_interets_annuel: true,
        // frais_dossier_mise_place: false,
        // fonds_garantie: false,
        // prime_assurance_deces_emprunteur: false,
      },
      var_5: {
        // montant_facilite: true,
        // taux_interets: true,
        // frais: true,
        // teg_annuel: false,
        // teg_periodique: false,
        // taux_usure: false,
        taux_interet_annuel: false,
        taux_interet_retard_lettres: false,
        taux_interet_retard: false
      },
      var_6: {
        // billet_ordre_montant: false,
        code_guichet: false,
        num_bq: false,
        numero_de_compte: false,
        cle_rib: false,
        date_delivrance: false
      },
      pdf_process: false,
      mask_telephone: "",
      // first_time: true,
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
        return compte.banque === 'AFG BANK';
      });
    }
  },
  mounted: function mounted() {
    var _this = this;
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var _this$dossier_credit2, _this$meta_data$dossi, _this$facilite2, _this$facilite3, _this$facilite4, _this$facilite5, _this$facilite6, _this$dossier_credit$, _this$dossier_credit3, _this$dossier_credit$2, _this$dossier_credit4, _this$dossier_credit5, _this$facilite7, _this$facilite8, _this$dossier_credit$3, _this$dossier_credit6, _this$dossier_credit7, _this$dossier_credit8, _this$dossier_credit9, _this$meta_data$dossi2, _this$meta_data$dossi16, _this$meta_data$dossi20, _this$meta_data$dossi23;
      var _this$facilite, _this$authcheckUsr$si, _this$authcheckUsr, _this$authcheckUsr$si2, _this$authcheckUsr2, _this$meta_data$dossi3, _this$meta_data$dossi4, _this$meta_data$dossi5, _this$meta_data$dossi6, _this$meta_data$dossi7, _this$meta_data$dossi8, _this$meta_data$dossi9, _this$meta_data$dossi0, _this$meta_data$dossi1, _this$meta_data$dossi10, _this$meta_data$dossi11, _this$meta_data$dossi12, _this$meta_data$dossi13, _this$meta_data$dossi14, _this$meta_data$dossi15, _this$meta_data$dossi17, _this$meta_data$dossi18, _this$meta_data$dossi19, _this$meta_data$dossi21, _this$meta_data$dossi22, _this$formData, duree, echeancierMapping, echeancier, now, day, month, year, _this$meta_data$dossi24, _this$comptes, compte;
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
                      // console.log('authcheckUsr', this.authcheckUsr.codeagence);
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
            _this.$on('generate-pdf-process', function (data) {
              _this.pdf_process = data;
            });
            _this.$on('build-off-printable', function () {
              _this.buildOffPrintable();
            });
            // this.loadConvention();

            // Initialiser facilites_selectionnees et facilite
            _this.facilites_selectionnees = (_this$meta_data$dossi = _this.meta_data['dossier_credit']) === null || _this$meta_data$dossi === void 0 ? void 0 : _this$meta_data$dossi['cred_pub_tb_120004'].facilites_selectionnees;
            _this.facilite = _this.facilite_index;
            if (_this.facilites_selectionnees && _this.facilite) {
              _this.facilites_selectionnee = _this.facilites_selectionnees[(_this$facilite = _this.facilite) === null || _this$facilite === void 0 ? void 0 : _this$facilite.index];
            }
            // console.log(">facilite", this.facilite);

            // Initialiser conditions_data
            _this.conditions_data = [{
              id: 1,
              libelle: 'Type de financement',
              value: ((_this$facilite2 = _this.facilite) === null || _this$facilite2 === void 0 ? void 0 : _this$facilite2.facilite_libelle) || '',
              checked: true,
              disabled: true
            }, {
              id: 2,
              libelle: 'Objet',
              value: ((_this$facilite3 = _this.facilite) === null || _this$facilite3 === void 0 ? void 0 : _this$facilite3.type_facilite) || '',
              checked: true,
              disabled: true
            }, {
              id: 3,
              libelle: 'Montant',
              value: ((_this$facilite4 = _this.facilite) === null || _this$facilite4 === void 0 ? void 0 : _this$facilite4.montant_credit) || 0,
              checked: true,
              disabled: true
            }, {
              id: 4,
              libelle: 'Durée',
              value: ((_this$facilite5 = _this.facilite) === null || _this$facilite5 === void 0 ? void 0 : _this$facilite5.duree) + " Mois" || 0,
              checked: true,
              disabled: true
            }, {
              id: 5,
              libelle: 'Taux d\'intérêt annuel',
              value: ((_this$facilite6 = _this.facilite) === null || _this$facilite6 === void 0 ? void 0 : _this$facilite6.taux) + " %" || 0,
              checked: true,
              disabled: true
            }, {
              id: 6,
              libelle: 'Frais de dossier et de mise en place',
              value: _this.formatMontant((_this$dossier_credit$ = (_this$dossier_credit3 = _this.dossier_credit) === null || _this$dossier_credit3 === void 0 || (_this$dossier_credit3 = _this$dossier_credit3.cred_pub_tb_120004) === null || _this$dossier_credit3 === void 0 || (_this$dossier_credit3 = _this$dossier_credit3.facilites_selectionnees[_this.facilite_index.index]) === null || _this$dossier_credit3 === void 0 ? void 0 : _this$dossier_credit3.frais_dossier) !== null && _this$dossier_credit$ !== void 0 ? _this$dossier_credit$ : 0),
              checked: true,
              disabled: true
            }, {
              id: 7,
              libelle: 'Cash coll',
              value: _this.formatMontant((_this$dossier_credit$2 = (_this$dossier_credit4 = _this.dossier_credit) === null || _this$dossier_credit4 === void 0 || (_this$dossier_credit4 = _this$dossier_credit4.cred_pub_tb_120004) === null || _this$dossier_credit4 === void 0 || (_this$dossier_credit4 = _this$dossier_credit4.facilites_selectionnees[_this.facilite_index.index]) === null || _this$dossier_credit4 === void 0 ? void 0 : _this$dossier_credit4.cash_call_amount) !== null && _this$dossier_credit$2 !== void 0 ? _this$dossier_credit$2 : 0),
              checked: true,
              disabled: true
            }, {
              id: 8,
              libelle: 'Prime assurance décès emprunteur',
              value: ((_this$dossier_credit5 = _this.dossier_credit) === null || _this$dossier_credit5 === void 0 || (_this$dossier_credit5 = _this$dossier_credit5.cred_pub_tb_120004) === null || _this$dossier_credit5 === void 0 || (_this$dossier_credit5 = _this$dossier_credit5.facilites_selectionnees[_this.facilite_index.index]) === null || _this$dossier_credit5 === void 0 ? void 0 : _this$dossier_credit5.montant_assurance) || 0,
              checked: true,
              disabled: true
            }];

            // Initialiser facilites
            _this.facilites = [{
              id: 1,
              libelle: 'Montant facilité',
              value: ((_this$facilite7 = _this.facilite) === null || _this$facilite7 === void 0 ? void 0 : _this$facilite7.montant_credit) || '',
              checked: true,
              disabled: true
            }, {
              id: 2,
              libelle: 'Taux intérêt',
              value: ((_this$facilite8 = _this.facilite) === null || _this$facilite8 === void 0 ? void 0 : _this$facilite8.taux) + " %" || 0,
              checked: true,
              disabled: true
            }, {
              id: 3,
              libelle: 'Frais',
              value: _this.formatMontant((_this$dossier_credit$3 = (_this$dossier_credit6 = _this.dossier_credit) === null || _this$dossier_credit6 === void 0 || (_this$dossier_credit6 = _this$dossier_credit6.cred_pub_tb_120004) === null || _this$dossier_credit6 === void 0 || (_this$dossier_credit6 = _this$dossier_credit6.facilites_selectionnees[_this.facilite_index.index]) === null || _this$dossier_credit6 === void 0 ? void 0 : _this$dossier_credit6.frais_dossier) !== null && _this$dossier_credit$3 !== void 0 ? _this$dossier_credit$3 : 0),
              checked: true,
              disabled: true
            }, {
              id: 4,
              libelle: 'TEG annuel',
              value: ((_this$dossier_credit7 = _this.dossier_credit) === null || _this$dossier_credit7 === void 0 || (_this$dossier_credit7 = _this$dossier_credit7.cred_pub_tb_120004) === null || _this$dossier_credit7 === void 0 || (_this$dossier_credit7 = _this$dossier_credit7.facilites_selectionnees[_this.facilite_index.index]) === null || _this$dossier_credit7 === void 0 ? void 0 : _this$dossier_credit7.TEG) + " %" || 0,
              checked: true,
              disabled: true
            }, {
              id: 5,
              libelle: 'TEG Périodique',
              value: ((_this$dossier_credit8 = _this.dossier_credit) === null || _this$dossier_credit8 === void 0 || (_this$dossier_credit8 = _this$dossier_credit8.cred_pub_tb_120004) === null || _this$dossier_credit8 === void 0 || (_this$dossier_credit8 = _this$dossier_credit8.facilites_selectionnees[_this.facilite_index.index]) === null || _this$dossier_credit8 === void 0 ? void 0 : _this$dossier_credit8.taux_periodique) + " %" || 0,
              checked: true,
              disabled: true
            }, {
              id: 6,
              libelle: 'Taux d\'usure',
              value: ((_this$dossier_credit9 = _this.dossier_credit) === null || _this$dossier_credit9 === void 0 || (_this$dossier_credit9 = _this$dossier_credit9.cred_pub_tb_120004) === null || _this$dossier_credit9 === void 0 || (_this$dossier_credit9 = _this$dossier_credit9.facilites_selectionnees[_this.facilite_index.index]) === null || _this$dossier_credit9 === void 0 ? void 0 : _this$dossier_credit9.taux_usure) + " %" || 0,
              checked: true,
              disabled: true
            }];
            if (_this.authenticatedUser.filiale == 'AFGB ML') {
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
              // console.log("this.formData", this.formData.banque);
            } else if (_this.authenticatedUser.filiale == 'AFGB CM') {
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
            }
            if ((_this$meta_data$dossi2 = _this.meta_data["dossier_credit"]) !== null && _this$meta_data$dossi2 !== void 0 && _this$meta_data$dossi2['cred_pub_tb_120001']) {
              // this.formData.lieu_residence = this.meta_data["dossier_credit"]?.['cred_pub_tb_120001']?.['ville_residence'];
              _this.formData.nom_client = ((_this$meta_data$dossi3 = _this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi3 === void 0 || (_this$meta_data$dossi3 = _this$meta_data$dossi3['cred_pub_tb_120001']) === null || _this$meta_data$dossi3 === void 0 ? void 0 : _this$meta_data$dossi3['nom']) + ' ' + ((_this$meta_data$dossi4 = _this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi4 === void 0 || (_this$meta_data$dossi4 = _this$meta_data$dossi4['cred_pub_tb_120001']) === null || _this$meta_data$dossi4 === void 0 ? void 0 : _this$meta_data$dossi4['prenoms']);
              _this.formData.telephone = (_this$meta_data$dossi5 = _this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi5 === void 0 || (_this$meta_data$dossi5 = _this$meta_data$dossi5['cred_pub_tb_120001']) === null || _this$meta_data$dossi5 === void 0 ? void 0 : _this$meta_data$dossi5['telephone'];
              // this.formData.telephone_bureau = this.meta_data["dossier_credit"]?.['cred_pub_tb_120001']?.['telephone_bureau'];
              _this.formData.titre_client = ((_this$meta_data$dossi6 = _this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi6 === void 0 || (_this$meta_data$dossi6 = _this$meta_data$dossi6['cred_pub_tb_120001']) === null || _this$meta_data$dossi6 === void 0 ? void 0 : _this$meta_data$dossi6['sexe']) == 'Masculin' ? 'Monsieur' : 'Madame';
              _this.formData.date_naissance = (_this$meta_data$dossi7 = _this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi7 === void 0 || (_this$meta_data$dossi7 = _this$meta_data$dossi7['cred_pub_tb_120001']) === null || _this$meta_data$dossi7 === void 0 ? void 0 : _this$meta_data$dossi7['date_naissance'];
              _this.formData.lieu_naissance = (_this$meta_data$dossi8 = _this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi8 === void 0 || (_this$meta_data$dossi8 = _this$meta_data$dossi8['cred_pub_tb_120001']) === null || _this$meta_data$dossi8 === void 0 ? void 0 : _this$meta_data$dossi8['ville_naissance'];
              _this.formData.adresse = (_this$meta_data$dossi9 = _this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi9 === void 0 || (_this$meta_data$dossi9 = _this$meta_data$dossi9['cred_pub_tb_120001']) === null || _this$meta_data$dossi9 === void 0 ? void 0 : _this$meta_data$dossi9['adresse'];
              _this.formData.boite_postale_client = (_this$meta_data$dossi0 = _this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi0 === void 0 || (_this$meta_data$dossi0 = _this$meta_data$dossi0['cred_pub_tb_120001']) === null || _this$meta_data$dossi0 === void 0 ? void 0 : _this$meta_data$dossi0['adresse_postale'];
              _this.formData.email = (_this$meta_data$dossi1 = _this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi1 === void 0 || (_this$meta_data$dossi1 = _this$meta_data$dossi1['cred_pub_tb_120001']) === null || _this$meta_data$dossi1 === void 0 ? void 0 : _this$meta_data$dossi1['email_client'];
              _this.formData.lieu_delivrance = (_this$meta_data$dossi10 = _this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi10 === void 0 || (_this$meta_data$dossi10 = _this$meta_data$dossi10['cred_pub_tb_120001']) === null || _this$meta_data$dossi10 === void 0 ? void 0 : _this$meta_data$dossi10['lieu_delivrance_piece'];
              _this.formData.date_delivrance = (_this$meta_data$dossi11 = _this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi11 === void 0 || (_this$meta_data$dossi11 = _this$meta_data$dossi11['cred_pub_tb_120001']) === null || _this$meta_data$dossi11 === void 0 ? void 0 : _this$meta_data$dossi11['date_delivrance_piece'];
              _this.formData.titre_identification = (_this$meta_data$dossi12 = _this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi12 === void 0 || (_this$meta_data$dossi12 = _this$meta_data$dossi12['cred_pub_tb_120001']) === null || _this$meta_data$dossi12 === void 0 ? void 0 : _this$meta_data$dossi12['type_piece'];
              _this.formData.num_identification = (_this$meta_data$dossi13 = _this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi13 === void 0 || (_this$meta_data$dossi13 = _this$meta_data$dossi13['cred_pub_tb_120001']) === null || _this$meta_data$dossi13 === void 0 ? void 0 : _this$meta_data$dossi13['num_piece'];
              _this.formData.nom_du_pere = (_this$meta_data$dossi14 = _this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi14 === void 0 || (_this$meta_data$dossi14 = _this$meta_data$dossi14['cred_pub_tb_120001']) === null || _this$meta_data$dossi14 === void 0 ? void 0 : _this$meta_data$dossi14['dad'];
              _this.formData.nom_de_la_mere = (_this$meta_data$dossi15 = _this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi15 === void 0 || (_this$meta_data$dossi15 = _this$meta_data$dossi15['cred_pub_tb_120001']) === null || _this$meta_data$dossi15 === void 0 ? void 0 : _this$meta_data$dossi15['mum'];
              // console.log('numero_dossier', this.meta_data["numero_dossier"]);
            }
            if ((_this$meta_data$dossi16 = _this.meta_data["dossier_credit"]) !== null && _this$meta_data$dossi16 !== void 0 && _this$meta_data$dossi16['cred_pub_tb_120002']) {
              _this.formData.fonction = (_this$meta_data$dossi17 = _this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi17 === void 0 || (_this$meta_data$dossi17 = _this$meta_data$dossi17['cred_pub_tb_120002']) === null || _this$meta_data$dossi17 === void 0 ? void 0 : _this$meta_data$dossi17['fonction'];
              _this.formData.employeur = (_this$meta_data$dossi18 = _this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi18 === void 0 || (_this$meta_data$dossi18 = _this$meta_data$dossi18['cred_pub_tb_120002']) === null || _this$meta_data$dossi18 === void 0 ? void 0 : _this$meta_data$dossi18['entreprise'];
              _this.formData.boite_postale_employeur = (_this$meta_data$dossi19 = _this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi19 === void 0 || (_this$meta_data$dossi19 = _this$meta_data$dossi19['cred_pub_tb_120002']) === null || _this$meta_data$dossi19 === void 0 ? void 0 : _this$meta_data$dossi19['boite_postale_employeur'];
            }
            if ((_this$meta_data$dossi20 = _this.meta_data["dossier_credit"]) !== null && _this$meta_data$dossi20 !== void 0 && _this$meta_data$dossi20['cred_pub_tb_120004']) {
              // console.log('facilite_index', this.facilite_index)
              // this.facilite = this.facilite_index
              // let facilites_selectionnees = this.meta_data["dossier_credit"]?.['cred_pub_tb_120004'].facilites_selectionnees

              _this.facilites_selectionnee = _this.facilites_selectionnees[_this.facilite_index.index];
              // console.log('facilites_selectionnee', this.facilites_selectionnee)

              _this.formData.demande_effectue = (_this$meta_data$dossi21 = _this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi21 === void 0 || (_this$meta_data$dossi21 = _this$meta_data$dossi21['cred_pub_tb_120004']) === null || _this$meta_data$dossi21 === void 0 ? void 0 : _this$meta_data$dossi21['date_reception_demande_client'];
              _this.formData.objet = (_this$meta_data$dossi22 = _this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi22 === void 0 || (_this$meta_data$dossi22 = _this$meta_data$dossi22['cred_pub_tb_120004']) === null || _this$meta_data$dossi22 === void 0 ? void 0 : _this$meta_data$dossi22['objet_du_pret'];
              _this.formData.montant_facilite = _this.facilite.montant_demande;
              // console.log('montant_facilite', facilite.montant_demande)
              _this.formData.montant_credit = _this.facilite.montant_credit;
              _this.formData.taux_interets = _this.facilite.taux;
              _this.formData.nombre_jour_remboursement_chiffre = _this.facilite.duree;
              duree = _this.facilite.duree;
              _this.formData.nombre_jour_remboursement_chiffre = duree;
              // this.formData.nombre_jour_remboursement_lettre = duree ? this.nombreEnLettres(duree?.replace(/\s+/g, '')) : '';
              _this.formData.nombre_jour_remboursement_lettre = duree ? _this.nombreEnLettres(String(duree).replace(/\s+/g, '')) : '';
              _this.formData.modalite_remboursement_chiffre = _this.facilite.montant_echeance;
              // this.formData.modalite_remboursement_lettre = this.nombreEnLettres(this.formData?.modalite_remboursement_chiffre?.replace(/\s+/g, ''))
              _this.formData.modalite_remboursement_lettre = (_this$formData = _this.formData) !== null && _this$formData !== void 0 && _this$formData.modalite_remboursement_chiffre ? _this.nombreEnLettres(String(_this.formData.modalite_remboursement_chiffre).replace(/\s+/g, '')) : '';
              echeancierMapping = {
                Mensuelle: 'mensualité',
                Bimensuelle: 'bimestrialité',
                Trimestrielle: 'trimestrialité',
                Semestrielle: 'semestrialité',
                Annuelle: 'annualité'
              };
              echeancier = _this.facilite.echeancier;
              _this.formData.echeancier = echeancierMapping[echeancier] || echeancier;
              now = new Date();
              day = String(now.getDate()).padStart(2, '0');
              month = String(now.getMonth() + 1).padStart(2, '0');
              year = now.getFullYear();
              _this.formData.date_redaction = "".concat(day, "/").concat(month, "/").concat(year);
            }
            if ((_this$meta_data$dossi23 = _this.meta_data["dossier_credit"]) !== null && _this$meta_data$dossi23 !== void 0 && _this$meta_data$dossi23['cred_pub_tb_120003']) {
              _this.comptes = (_this$meta_data$dossi24 = _this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi24 === void 0 || (_this$meta_data$dossi24 = _this$meta_data$dossi24['cred_pub_tb_120003']) === null || _this$meta_data$dossi24 === void 0 ? void 0 : _this$meta_data$dossi24['comptes'];
              compte = (_this$comptes = _this.comptes) === null || _this$comptes === void 0 ? void 0 : _this$comptes.filter(function (x) {
                return x.type == 'Compte courant';
              })[0]; // console.log('compte', compte)
              _this.formData.code_guichet = (compte === null || compte === void 0 ? void 0 : compte.type_code) || '';
              _this.formData.numero_de_compte = (compte === null || compte === void 0 ? void 0 : compte.numero_compte) || '';
              _this.formData.cle_rib = compte === null || compte === void 0 ? void 0 : compte.iban;
            }

            // this.facilites_selectionnees = this.meta_data["dossier_credit"]?.['cred_pub_tb_120004'].facilites_selectionnees

            EventBus.$on('facilites-updated', function (data) {
              _this.facilites_selectionnees = data.facilites_selectionnees;
              // console.log("facilites-updated", this.ligne_sollicites);
            });
            _this.setBilletOrdre();
          case 18:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }))();
  },
  methods: {
    // loadConvention() {
    //     this.isLoading = true;
    //     setTimeout(() => {
    //         this.isLoading = false;
    //     }, 1000);
    // },
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
      // this.formData.listGaranties = this.listGaranties
      // console.log('this.formData >> check_fields', this.formData.check_fields);
    },
    checkField: function checkField(field) {
      var _this$check_fields$fi;
      // console.log("checkField >> includes", field);
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
      // console.log(">onCheckField", check, field)
      if (["var_1", "var_2", "var_3", "var_4", "var_5", "var_6"].includes(field)) {
        // console.log('>onCheckField > check_fields', this.check_fields)
        for (var _i3 = 0, _Object$entries3 = Object.entries(this[field]); _i3 < _Object$entries3.length; _i3++) {
          var _Object$entries3$_i = _slicedToArray(_Object$entries3[_i3], 1),
            key = _Object$entries3$_i[0];
          this.check_fields[key] = check;
        }
      } else {
        this.check_fields[field] = check;
        // console.log('onCheckField > check_fields', this.check_fields[field])
      }
      this.handleInput();
    },
    // initializeGarantiesKeys() {
    //   // console.log('>this.var_6', this.var_4);
    //   if (Object.keys(this.var_6).length > 0) {
    //     if (this.listGaranties.length > 0) {
    //       this.listGaranties.forEach((garantie, idx) => {
    //         const key = `listGaranties_${idx}`;
    //         if (!this.var_6.hasOwnProperty(key)) {
    //           this.var_6[key] = false;
    //         }
    //         if (!(key in this.check_fields)) {
    //           this.check_fields[key] = false;
    //         }
    //       });
    //     }
    //   }
    //   // console.log('>this.var_6', this.var_6);
    //   this.handleInput()
    // },
    // addMoreGarantie() {*
    //   const newIndex = this.listGaranties.length;
    //   const newGarantie = { index: newIndex, value: 'Non', garantie: '' };
    //   this.listGaranties.push(newGarantie);
    //   const key = `listGaranties_${newIndex}`;
    //   this.var_6.push(key);
    //   this.check_fields[key] = false;
    //   this.formData.listGaranties.push(newGarantie);
    // },
    // removeGarantie(index) {
    //   if (index >= 6) {
    //     const key = `listGaranties_${index}`;
    //     this.listGaranties.splice(index, 1);
    //     this.var_6 = this.var_6.filter(k => k !== key);
    //     delete this.check_fields[key];
    //     this.formData.listGaranties.splice(index, 1);
    //     // Reorder indices
    //     this.reorderGaranties();
    //   }
    // },
    // reorderGaranties() {
    //   this.listGaranties.forEach((garantie, idx) => {
    //     garantie.index = idx;
    //   });
    //   const newVar4 = [];
    //   const newCheckFields = {};
    //   this.listGaranties.forEach((garantie, idx) => {
    //     const key = `listGaranties_${idx}`;
    //     newVar4.push(key);
    //     newCheckFields[key] = this.check_fields[`listGaranties${garantie.index}`] || false;
    //   });
    //   this.var_6 = newVar4;
    //   this.check_fields = { ...this.check_fields, ...newCheckFields };
    //   this.formData.listGaranties = [...this.listGaranties];
    // },
    // checkboxValGarantie(value, index) {
    //   this.listGaranties[index].value = value;
    //   // this.check_fields[`listGaranties${index}`] = value === 'Oui';
    //   this.formData.listGaranties[index] = this.listGaranties[index];
    // },
    send2Backend: function send2Backend(newVal) {
      var _this$dossier_credit0,
        _this4 = this;
      this.on_saving = true;
      this.$emit("autosaving");
      this.$axios.post(this.ebapisHost + "creditbuilder/api/v1/redaction-fiche-annexe/", {
        cred_pub_key: (_this$dossier_credit0 = this.dossier_credit) === null || _this$dossier_credit0 === void 0 ? void 0 : _this$dossier_credit0.cred_pub_key,
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
      var _this$dossier_credit1, _this$dossier_credit10, _this$authenticatedUs, _this$authenticatedUs2, _this$authenticatedUs3, _this$dossier_credit11;
      var size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 100;
      var MIX_APP_KEY = "base64:gdjlPSs3+sKaDi+/SNwOI9pjIE/c9dlYM78gSikIAjY=";
      var secretKey = MIX_APP_KEY.replace("base64:", "");
      // const secretKey = "maCléSecrète123";

      // construction de data
      var payload = {
        num_doss: (_this$dossier_credit1 = this.dossier_credit) === null || _this$dossier_credit1 === void 0 ? void 0 : _this$dossier_credit1.numero_dossier,
        cred_pub_key: (_this$dossier_credit10 = this.dossier_credit) === null || _this$dossier_credit10 === void 0 ? void 0 : _this$dossier_credit10.cred_pub_key,
        user: {
          name: (_this$authenticatedUs = this.authenticatedUser) === null || _this$authenticatedUs === void 0 ? void 0 : _this$authenticatedUs.name,
          role: (_this$authenticatedUs2 = this.authenticatedUser) === null || _this$authenticatedUs2 === void 0 ? void 0 : _this$authenticatedUs2.role[0].display_name,
          email: (_this$authenticatedUs3 = this.authenticatedUser) === null || _this$authenticatedUs3 === void 0 ? void 0 : _this$authenticatedUs3.email
        },
        client: (_this$dossier_credit11 = this.dossier_credit) === null || _this$dossier_credit11 === void 0 || (_this$dossier_credit11 = _this$dossier_credit11.client_core_banking) === null || _this$dossier_credit11 === void 0 ? void 0 : _this$dossier_credit11.name
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
      // qrImg.style.top = "20px";
      // qrImg.style.right = "20px";
      // qrImg.style.top = "50%";
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
      // this.check_fields_teg[field] = null;
      this.handleInput();
    },
    removeTelephone: function removeTelephone(index) {
      this.telephones.splice(index, 1);
      var field = "telephone_" + index;
      delete this.check_fields[field];
      delete this.var_1[field];
      // delete this.check_fields_teg[field];
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
      var _this$meta_data$dossi25, _this$meta_data$dossi26, _this$meta_data$dossi27;
      var createdKey = "convention_credit_amortissement";
      var found = (_this$meta_data$dossi25 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi25 === void 0 || (_this$meta_data$dossi25 = _this$meta_data$dossi25[createdKey]) === null || _this$meta_data$dossi25 === void 0 ? void 0 : _this$meta_data$dossi25[this.indexSelectionne];
      if (!((_this$meta_data$dossi26 = this.meta_data["dossier_credit"]) !== null && _this$meta_data$dossi26 !== void 0 && _this$meta_data$dossi26[createdKey])) {
        this.check_fields = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, this.var_1), this.var_2), this.var_3), this.var_4), this.var_5), this.var_6);
      } else if (found !== null && found !== void 0 && found.check_fields) {
        this.check_fields = found.check_fields;
      }
      if ((_this$meta_data$dossi27 = this.meta_data["dossier_credit"]) !== null && _this$meta_data$dossi27 !== void 0 && (_this$meta_data$dossi27 = _this$meta_data$dossi27.caf_recorded_file) !== null && _this$meta_data$dossi27 !== void 0 && _this$meta_data$dossi27.indicatif) {
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
      this.generatePdf(download);
    },
    generatePdf: function generatePdf(download) {
      var _this5 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var _this5$annexe;
        var conventionName, filename, pages, pdf, pageWidth, pageHeight, i, page, canvas, imgWidth, imgHeight, imgData, pdfBlob;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _this5.pdf_process = true;
              conventionName = (_this5$annexe = _this5.annexe) === null || _this5$annexe === void 0 ? void 0 : _this5$annexe.type_facilite.trim().replace(/\s+/g, "_").toLowerCase(); // let filename = conventionName + ".pdf";
              filename = "Convention de cr\xE9dit amortissable - Particulier/ ".concat(conventionName) + ".pdf";
              pages = document.querySelectorAll(".print-page");
              if (pages.length) {
                _context3.next = 8;
                break;
              }
              console.error("❌ Aucun élément `.print-page` trouvé.");
              _this5.pdf_process = false;
              return _context3.abrupt("return");
            case 8:
              pdf = new jspdf__WEBPACK_IMPORTED_MODULE_5__.jsPDF("p", "mm", "a4");
              pageWidth = pdf.internal.pageSize.width;
              pageHeight = pdf.internal.pageSize.height;
              _context3.prev = 11;
              i = 0;
            case 13:
              if (!(i < pages.length)) {
                _context3.next = 28;
                break;
              }
              page = pages[i];
              page.style.paddingLeft = "40px";
              page.style.paddingRight = "40px";
              _context3.next = 19;
              return _html2canvas__WEBPACK_IMPORTED_MODULE_4___default()(page, {
                scale: 2,
                useCORS: true,
                logging: false
              });
            case 19:
              canvas = _context3.sent;
              imgWidth = pageWidth;
              imgHeight = pageHeight;
              imgData = canvas.toDataURL("image/jpeg", 0.7);
              if (i > 0) pdf.addPage();
              pdf.addImage(imgData, "JPEG", 0, 0, imgWidth, imgHeight);
            case 25:
              i++;
              _context3.next = 13;
              break;
            case 28:
              pdfBlob = pdf.output("blob");
              _this5.pdfFile = new File([pdfBlob], filename, {
                type: "application/pdf"
              });
              if (download) {
                pdf.save(filename);
              } else {
                _this5.handleDoubleClickOrClick(_this5.indexSelectionne, _this5.pdfFile);
              }
              _context3.next = 36;
              break;
            case 33:
              _context3.prev = 33;
              _context3.t0 = _context3["catch"](11);
              console.error("Erreur lors de la génération du PDF :", _context3.t0);
            case 36:
              _context3.prev = 36;
              _this5.pdf_process = false; // Désactiver l'indicateur, même en cas d'erreur
              return _context3.finish(36);
            case 39:
            case "end":
              return _context3.stop();
          }
        }, _callee3, null, [[11, 33, 36, 39]]);
      }))();
    },
    handleDoubleClickOrClick: function handleDoubleClickOrClick(index, pdfFile) {
      var _this6 = this;
      EventBus.$emit("open-extra-file-explorer");
      EventBus.$emit("transmission-file", {
        pdfFile: pdfFile
      });

      // let name= "Lettre {(*)}notifications_" + index +"_" +this.$route.params.templateId

      setTimeout(function () {
        EventBus.$emit("data-extra-file-explorer", {
          name: "Convention {(*)}credits_amortissable_".concat(index, "_").concat(_this6.$route.params.templateId),
          is_auto: true
        });
      }, 1000);
    },
    encryptData: function encryptData(data, secretKey) {
      return crypto_js__WEBPACK_IMPORTED_MODULE_3___default().AES.encrypt(JSON.stringify(data), secretKey).toString();
    },
    buildOffPrintable: function buildOffPrintable() {
      var _arguments = arguments,
        _this7 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        var retryCount, targetElement, preloader_content, elements, printableContainer, PAGE_WIDTH, PAGE_HEIGHT, MARGIN, PADDING, FOOTER_HEIGHT, QR_HEIGHT, AVAILABLE_HEIGHT, currentPage, currentHeight, pageCounter, createPage, createFooter, _applyStyleToFirstP, paginationDiv, qrCode;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              retryCount = _arguments.length > 0 && _arguments[0] !== undefined ? _arguments[0] : 0;
              _this7.build_off = false;
              targetElement = _this7.$refs.contentToCapture;
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
              return _context4.abrupt("return", _this7.buildOffPrintable(retryCount + 1));
            case 10:
              return _context4.abrupt("return");
            case 11:
              if (_this7.logo) {
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
              return _context4.abrupt("return", _this7.buildOffPrintable(retryCount + 1));
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
                footer.innerHTML = "\n          <strong>".concat(_this7.formData.banque, "</strong><br>\n          Si\xE8ge social : ").concat(_this7.formData.siege, ", B.P. : ").concat(_this7.formData.boite_postale, ", T\xE9l : ").concat(_this7.numero_filiale, " |\n          SA au capital social de : ").concat(_this7.formData.capital_social, " ").concat(_this7.formData.devise, " |\n          R.C N\xB0 DLA/2008/B/1195 | N\xB0 Contrib M0 608 000 250 28 W | Agr\xE9ment N\xB0 00000 322/MINFI du 06 juillet 2015 | www.afgbank.cm\n        ");
                return footer;
              };
              _applyStyleToFirstP = function applyStyleToFirstP(element) {
                if (!element) return;
                if (element.tagName === 'P') {
                  element.style.margin = '0px';
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
                  if (pageCounter === 1 && _this7.logo) {
                    var logoImg = document.createElement("img");
                    logoImg.src = "/images/".concat(_this7.logo);
                    logoImg.width = 80;
                    logoImg.alt = "";
                    logoImg.style.marginBottom = "20px";
                    currentPage.appendChild(logoImg);
                  }
                }
                if (clone.classList.contains('to-span')) {
                  var innerHTML = clone.innerHTML;
                  clone = document.createElement('span');
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
                qrCode = _this7.generateQRCode(100);
                qrCode.style.position = "absolute";
                qrCode.style.right = "".concat(PADDING / 2, "px");
                qrCode.style.bottom = "".concat(FOOTER_HEIGHT - 50, "px");
                currentPage.appendChild(qrCode);
                currentPage.appendChild(createFooter());
                printableContainer.appendChild(currentPage);
              }
              document.querySelector('#preloader-content').textContent = "";
              document.querySelector('#preloader-content').remove();
              _this7.build_off = true;
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
      if (level === 'section') {
        this.counters.section++;
        this.counters.subsection = 0; // Réinitialise le sous-compteur
      } else if (level === 'subsection') {
        this.counters.subsection++;
      }
    },
    addMoreConvention: function addMoreConvention() {
      var id = this.conditions_data.length + 1;
      this.conditions_data.push({
        "id": id,
        "libelle": "",
        "value": "",
        "checked": false,
        "disabled": false
      });
      this.handleInput2("conditions_data");
    },
    addMoreFacilite: function addMoreFacilite() {
      var id = this.conditions_data.length + 1;
      this.facilites.push({
        "id": id,
        "libelle": "",
        "value": "",
        "checked": false,
        "disabled": false
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
        _this8 = this;
      // Validate inputs
      if (!creditLineUuid || typeof creditLineUuid !== 'string') {
        console.warn('Invalid or missing creditLineUuid');
        return [];
      }
      if (!((_this$data_tb = this.data_tb) !== null && _this$data_tb !== void 0 && _this$data_tb.garanties_proposees) || !Array.isArray(this.data_tb.garanties_proposees)) {
        console.warn('No valid garanties_proposees found');
        return [];
      }
      if (!((_this$data_tb2 = this.data_tb) !== null && _this$data_tb2 !== void 0 && _this$data_tb2.facilites_sollicitees) || !Array.isArray(this.data_tb.facilites_sollicitees)) {
        console.warn('No valid facilites_sollicitees found');
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
          _this8.detail_garantie.push(_objectSpread({}, garantie));
        }
      });
      return this.detail_garantie;
    },
    getAgenceLocation: function getAgenceLocation() {
      var _this9 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
        var _this9$authcheckUsr, _yield$axios$post, data;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              _context5.prev = 0;
              _context5.next = 3;
              return axios.post("/api/Helpdatabase/get-agence-location", {
                'codeagence': (_this9$authcheckUsr = _this9.authcheckUsr) === null || _this9$authcheckUsr === void 0 ? void 0 : _this9$authcheckUsr.codeagence
              });
            case 3:
              _yield$axios$post = _context5.sent;
              data = _yield$axios$post.data;
              _this9.formData.lieu_redation = data.data;
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
      var montantStr = String(montant).replace(/[^0-9.-]/g, '');
      if (!montantStr || isNaN(montantStr)) {
        return '0';
      }
      var nombre = parseFloat(montantStr);
      var parties = nombre.toString().split('.');
      var partieEntiere = parties[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
      return parties.length > 1 ? "".concat(partieEntiere, ".").concat(parties[1]) : partieEntiere;
    },
    isNumeroComplet: function isNumeroComplet(numero) {
      // Vérifier si le numéro est une chaîne non vide
      if (!numero || typeof numero !== 'string') {
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
      var _this$dossier_credit12,
        _this$facilite9,
        _this0 = this;
      if (((_this$dossier_credit12 = this.dossier_credit) === null || _this$dossier_credit12 === void 0 || (_this$dossier_credit12 = _this$dossier_credit12.cred_pub_tb_15502) === null || _this$dossier_credit12 === void 0 || (_this$dossier_credit12 = _this$dossier_credit12.conventions) === null || _this$dossier_credit12 === void 0 ? void 0 : _this$dossier_credit12.length) > 0 && (_this$facilite9 = this.facilite) !== null && _this$facilite9 !== void 0 && _this$facilite9.type_facilite) {
        var _this$dossier_credit$4;
        var index = this.dossier_credit.cred_pub_tb_15502.conventions.findIndex(function (convention) {
          return convention.type_facilite === _this0.facilite.type_facilite;
        });
        if (((_this$dossier_credit$4 = this.dossier_credit.cred_pub_tb_15502) === null || _this$dossier_credit$4 === void 0 || (_this$dossier_credit$4 = _this$dossier_credit$4.billet_ordre) === null || _this$dossier_credit$4 === void 0 ? void 0 : _this$dossier_credit$4.length) > 0) {
          var _this$dossier_credit$5;
          if (index !== -1 && (_this$dossier_credit$5 = this.dossier_credit.cred_pub_tb_15502) !== null && _this$dossier_credit$5 !== void 0 && _this$dossier_credit$5.billet_ordre[index]) {
            this.billet_ordre = this.dossier_credit.cred_pub_tb_15502.billet_ordre[index];
          }
        }
      }
    }
  },
  watch: {
    formData: {
      handler: function handler(newVal) {
        var _this1 = this;
        if (!this.first_time) {
          clearTimeout(this.debounce);
          this.debounce = setTimeout(function () {
            _this1.send2Backend(newVal);
          }, 3000);
        } else {
          this.first_time = false;
        }
      },
      deep: true,
      immediate: true
    },
    'dossier_credit.cred_pub_tb_15502.billet_ordre': {
      handler: function handler() {
        this.setBilletOrdre();
      },
      deep: true,
      immediate: true
    }
    // listGaranties: {
    //     handler() {
    //         this.send2Backend();
    //     },
    //     deep: true,
    // },
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/conventions/en/CONVENTION_CREDIT_AMORTISSAGE.vue?vue&type=template&id=e98a6df6&scoped=true":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/conventions/en/CONVENTION_CREDIT_AMORTISSAGE.vue?vue&type=template&id=e98a6df6&scoped=true ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm$formData, _vm$formData2, _vm$facilite, _vm$facilite2;
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_vm.load_data ? _c("div", {
    staticClass: "card-body"
  }, [_vm._m(0)]) : _c("div", {
    staticClass: "p-5 position-relative",
    staticStyle: {
      width: "845px",
      margin: "0 auto",
      border: "1px solid #c6c6c6",
      "background-color": "#ffffff",
      "text-align": "justify"
    }
  }, [_c("div", {
    staticClass: "position-absolute delete-element",
    staticStyle: {
      top: "10px",
      right: "0",
      "margin-right": "48px"
    }
  }, [_vm.edit_mode ? _c("button", {
    staticClass: "btn btn-sm m-1 btn",
    staticStyle: {
      background: "#ee6a00",
      color: "white",
      "box-shadow": "rgba(12, 11, 11, 0.39) 0px 0px 2px 1px"
    },
    on: {
      click: _vm.setEditMode
    }
  }, [_c("i", {
    staticClass: "icofont-pencil",
    attrs: {
      title: "Visualiser la convention"
    }
  }), _vm._v("\n          Visualiser\n      ")]) : _c("button", {
    staticClass: "btn btn-sm m-1 btn",
    staticStyle: {
      background: "#ee6a00",
      color: "white",
      "box-shadow": "rgba(12, 11, 11, 0.39) 0px 0px 2px 1px"
    },
    on: {
      click: _vm.setEditMode
    }
  }, [_c("i", {
    staticClass: "icofont-pencil",
    attrs: {
      title: "Modifier la convention"
    }
  }), _vm._v("\n          Modifier\n      ")]), _vm._v(" "), !_vm.pdf_process ? [!_vm.edit_mode ? _c("button", {
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
  }), _vm._v("\n              Importer dans le dossier\n          ")]) : _vm._e(), _vm._v(" "), !_vm.edit_mode ? _c("button", {
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
  }), _vm._v("\n              Télécharger le fichier\n          ")]) : _vm._e()] : _c("div", {
    staticStyle: {
      display: "inline-block"
    }
  }, [_vm._m(1), _vm._v(" "), _c("span", {
    staticStyle: {
      "font-size": "0.9rem",
      "margin-left": "5px"
    }
  }, [_vm._v("\n          Génération du PDF en cours...\n        ")])])], 2), _vm._v(" "), _c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: !_vm.build_off,
      expression: "!build_off"
    }],
    ref: "contentToCapture",
    staticClass: "mt-5"
  }, [_vm._m(2), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12 mt-4"
  }, [_vm._m(3), _vm._v(" "), _c("ul", {
    staticClass: "mb-2 position-relative",
    staticStyle: {
      "list-style-type": "none",
      border: "1px solid"
    }
  }, [_c("li", [_c("div", {
    staticClass: "p-2"
  }, [[_c("span", [_c("b", [_vm._v(_vm._s(_vm.formData.banque))])])], _vm._v(" "), _c("b", [_vm._v("en abrégé ")]), _vm._v("«\n                "), [_c("span", [_c("b", [_vm._v(_vm._s(_vm.formData.abreviation))])])], _vm._v("», Société Anonyme avec Conseil d’Administration au capital\n                social de\n                "), [_c("span", [_c("b", [_vm._v(_vm._s(_vm.formData.capital_social))])])], _vm._v(" "), [_c("span", [_c("b", [_vm._v(_vm._s(_vm.formData.devise))])])], _vm._v("\n                dont le siège social est à\n                "), [_c("span", [_c("b", [_vm._v(_vm._s(_vm.formData.siege))])])], _vm._v(", boite postale\n                "), [_c("span", [_c("b", [_vm._v(_vm._s(_vm.formData.boite_postale))])])], _vm._v(", immatriculée au Registre du Commerce et du Crédit Mobilier\n                de\n                "), [_c("span", [_c("b", [_vm._v(_vm._s(_vm.formData.lieu_immatriculation))])])], _vm._v("\n                le\n                "), [_c("div", {
    staticStyle: {
      display: "inline-block"
    }
  }, [_c("span", [_c("b", [_vm._v(" " + _vm._s(_vm.formData.date_immatriculation))]), _vm._v(",")])])], _vm._v("\n                sous le numéro\n                "), [_c("span", [_c("b", [_vm._v(_vm._s(_vm.formData.immatriculation))])])], _vm._v(", avec inscription modificative intervenue en date du six mai deux mille vingt-quatre sous le numéro RC/DLA/2024/M/1031 ; et au registre des contribuables sous le NIU M060800025028W.\n              ")], 2)])]), _vm._v(" "), _vm._m(4), _vm._v(" "), _c("ul", {
    staticClass: "position-relative",
    staticStyle: {
      "list-style-type": "none",
      border: "1px solid"
    }
  }, [_c("li", [_c("div", {
    staticClass: "p-1 mb-2"
  }, [[!_vm.edit_mode ? _c("span", [_c("b", [_vm._v(_vm._s(_vm.formData.titre_client))])]) : _c("span", {
    staticStyle: {
      "background-color": "#ffffad",
      padding: "2px 5px",
      "border-radius": "5px"
    }
  }, [_vm._v(_vm._s(_vm.formData.titre_client))])], _vm._v(" "), [!_vm.edit_mode ? _c("span", [_c("b", [_vm._v(_vm._s(_vm.formData.nom_client))])]) : _c("span", {
    staticStyle: {
      "background-color": "#ffffad",
      padding: "2px 5px",
      "border-radius": "5px"
    }
  }, [_vm._v(_vm._s(_vm.formData.nom_client))])], _vm._v("\n                Né le\n                "), [!_vm.edit_mode ? _c("span", [_c("b", [_vm._v(" " + _vm._s(_vm._f("formatDate")(_vm.formData.date_naissance)))])]) : _c("span", {
    staticStyle: {
      "background-color": "#ffffad",
      padding: "2px 5px",
      "border-radius": "5px"
    }
  }, [_vm._v(_vm._s(_vm._f("formatDate")(_vm.formData.date_naissance)))])], _vm._v("\n                à\n                "), [!_vm.edit_mode ? _c("span", [_c("b", [_vm._v(_vm._s(_vm.formData.lieu_naissance))])]) : _c("span", {
    staticStyle: {
      "background-color": "#ffffad",
      padding: "2px 5px",
      "border-radius": "5px"
    }
  }, [_vm._v(_vm._s(_vm.formData.lieu_naissance))])], _vm._v("\n                de\n                "), [!_vm.edit_mode ? _c("span", [_c("b", [_vm._v(_vm._s(_vm.formData.nom_du_pere))])]) : _c("span", {
    staticStyle: {
      "background-color": "#ffffad",
      padding: "2px 5px",
      "border-radius": "5px"
    }
  }, [_vm._v(_vm._s(_vm.formData.nom_du_pere))])], _vm._v("\n                et\n                "), [!_vm.edit_mode ? _c("span", [_c("b", [_vm._v(_vm._s(_vm.formData.nom_de_la_mere))])]) : _c("span", {
    staticStyle: {
      "background-color": "#ffffad",
      padding: "2px 5px",
      "border-radius": "5px"
    }
  }, [_vm._v(_vm._s(_vm.formData.nom_de_la_mere))])], _vm._v("\n                Demeurant à\n                "), [!_vm.edit_mode ? _c("span", [_c("b", [_vm._v(_vm._s(_vm.formData.adresse))])]) : _c("span", {
    staticStyle: {
      "background-color": "#ffffad",
      padding: "2px 5px",
      "border-radius": "5px"
    }
  }, [_vm._v(_vm._s(_vm.formData.adresse))])], _vm._v("\n                ; BP :\n                "), [!_vm.edit_mode ? _c("span", [_c("b", [_vm._v(_vm._s(_vm.formData.boite_postale_client))])]) : _c("span", {
    staticStyle: {
      "background-color": "#ffffad",
      padding: "2px 5px",
      "border-radius": "5px"
    }
  }, [_vm._v(_vm._s(_vm.formData.boite_postale_client))])], _vm._v(" "), _vm.isNumeroComplet(_vm.formData.telephone) ? [_vm._v("\n                  , Canal de communication Téléphonique :                  \n                  "), _c("span", [!_vm.edit_mode ? _c("span", [_c("b", [_vm._v(_vm._s(_vm.formData.telephone))])]) : _c("span", {
    staticStyle: {
      "background-color": "#ffffad",
      padding: "2px 5px",
      "border-radius": "5px"
    }
  }, [_vm._v(_vm._s(_vm.formData.telephone))])])] : _vm._e(), _vm._v("\n                ; Canal de communication électronique (email) :\n                "), [!_vm.edit_mode ? _c("span", [_c("b", [_vm._v(_vm._s(_vm.formData.email))])]) : _c("span", {
    staticStyle: {
      "background-color": "#ffffad",
      padding: "2px 5px",
      "border-radius": "5px"
    }
  }, [_vm._v(_vm._s(_vm.formData.email))])], _vm._v("\n                ; Fonction :\n                "), [!_vm.edit_mode ? _c("span", [_c("b", [_vm._v(_vm._s(_vm.formData.fonction))])]) : _c("span", {
    staticStyle: {
      "background-color": "#ffffad",
      padding: "2px 5px",
      "border-radius": "5px"
    }
  }, [_vm._v(_vm._s(_vm.formData.fonction))])], _vm._v("\n                Employeur :\n                "), [!_vm.edit_mode ? _c("span", [_c("b", [_vm._v(_vm._s(_vm.formData.employeur))])]) : _c("span", {
    staticStyle: {
      "background-color": "#ffffad",
      padding: "2px 5px",
      "border-radius": "5px"
    }
  }, [_vm._v(_vm._s(_vm.formData.employeur))])], _vm._v("\n                BP :\n                "), [!_vm.edit_mode ? _c("span", [_c("b", [_vm._v(_vm._s(_vm.formData.boite_postale_employeur))])]) : _c("span", {
    staticStyle: {
      "background-color": "#ffffad",
      padding: "2px 5px",
      "border-radius": "5px"
    }
  }, [_vm._v(_vm._s(_vm.formData.boite_postale_employeur))])], _vm._v("\n                ; Titre d’Identification :\n                "), [!_vm.edit_mode ? _c("span", [_c("b", [_vm._v(_vm._s(_vm.formData.titre_identification))])]) : _c("span", {
    staticStyle: {
      "background-color": "#ffffad",
      padding: "2px 5px",
      "border-radius": "5px"
    }
  }, [_vm._v(_vm._s(_vm.formData.titre_identification))])], _vm._v("\n                ; N°\n                "), [!_vm.edit_mode ? _c("span", [_c("b", [_vm._v(_vm._s(_vm.formData.num_identification))])]) : _c("span", {
    staticStyle: {
      "background-color": "#ffffad",
      padding: "2px 5px",
      "border-radius": "5px"
    }
  }, [_vm._v(_vm._s(_vm.formData.num_identification))])], _vm._v("\n                délivré(e) le\n                "), [_c("div", {
    staticStyle: {
      display: "inline-block"
    }
  }, [!_vm.edit_mode ? _c("span", [_c("b", [_vm._v(" " + _vm._s(_vm._f("formatDate")(_vm.formData.date_delivrance)))]), _vm._v(",")]) : _c("span", {
    staticStyle: {
      "background-color": "#ffffad",
      padding: "2px 5px",
      "border-radius": "5px"
    }
  }, [_vm._v(_vm._s(_vm._f("formatDate")(_vm.formData.date_delivrance)))])])], _vm._v("\n                à\n                "), [!_vm.edit_mode ? _c("span", [_c("b", [_vm._v(_vm._s(_vm.formData.lieu_delivrance))])]) : _c("span", {
    staticStyle: {
      "background-color": "#ffffad",
      padding: "2px 5px",
      "border-radius": "5px"
    }
  }, [_vm._v(_vm._s(_vm.formData.lieu_delivrance))])], _vm._v(".\n              ")], 2), _vm._v(" "), _c("br"), _vm._v(" "), _vm._m(5)])])])]), _vm._v(" "), _vm._m(6), _vm._v(" "), _c("div", {
    staticClass: "block",
    staticStyle: {
      "margin-bottom": "0 !important"
    }
  }, [_c("div", {
    staticClass: "column"
  }, [_c("div", {
    staticClass: "article"
  }, [_c("p", {
    staticClass: "highlight_"
  }, [_vm._v("Article 1 : Du crédit")]), _vm._v(" "), _c("p", [_vm._v("1.1 - Suivant sa demande, la BANQUE accorde par la présente à l’Emprunteur qui y consent, un crédit amortissable d’un montant de "), !_vm.edit_mode ? _c("span", [_vm._v(_vm._s(_vm.formData.montant_credit) + " " + _vm._s((_vm$formData = _vm.formData) === null || _vm$formData === void 0 ? void 0 : _vm$formData.devise))]) : _c("span", {
    staticStyle: {
      "background-color": "#ffffad",
      padding: "2px 5px",
      "border-radius": "5px"
    }
  }, [_vm._v(_vm._s(_vm.formData.montant_credit) + " " + _vm._s((_vm$formData2 = _vm.formData) === null || _vm$formData2 === void 0 ? void 0 : _vm$formData2.devise))]), _vm._v(" (Le Crédit), valable et remboursable suivant les modalités ci-dessous définies.")]), _vm._v(" "), _c("p", [_vm._v("1.2 – L’Emprunteur reconnaît que les termes, conditions et modalités du présent financement lui ont été régulièrement communiqués pour son acceptation préalable.")]), _vm._v(" "), _c("p", {
    staticClass: "highlight_"
  }, [_vm._v("Article 2 : Conditions Particulières")]), _vm._v(" "), _c("p", [_vm._v("2.1 - Le Crédit est consenti aux termes et conditions ci-après, auxquelles l’Emprunteur s’oblige irrévocablement :")])])]), _vm._v(" "), _c("div", {
    staticClass: "column"
  }, [_c("div", {
    staticClass: "article"
  }, [_c("table", {
    staticClass: "table table-bordered w-100"
  }, [_c("tbody", [!_vm.edit_mode ? _vm._l(_vm.conditions_data, function (offre, index) {
    return _c("tr", {
      key: "offre" + offre.id
    }, [_c("td", {
      staticStyle: {
        padding: ".3rem .3rem",
        "font-weight": "800"
      }
    }, [_vm._v(_vm._s(offre.libelle))]), _vm._v(" "), _c("td", {
      staticStyle: {
        padding: ".3rem .3rem"
      }
    }, [_vm._v(_vm._s(offre.value))])]);
  }) : _vm._l(_vm.conditions_data, function (offre, index) {
    return _c("tr", {
      key: "offre" + offre.id
    }, [_c("td", {
      staticStyle: {
        padding: ".3rem .3rem",
        "font-weight": "800"
      }
    }, [_vm._v(_vm._s(offre.libelle))]), _vm._v(" "), _c("td", {
      staticStyle: {
        padding: ".3rem .3rem",
        "background-color": "#ffffad"
      }
    }, [_vm._v(_vm._s(offre.value) + " ")])]);
  })], 2)])])])]), _vm._v(" "), _c("div", {
    staticClass: "block"
  }, [_c("div", {
    staticClass: "column"
  }, [_vm._m(7), _vm._v(" "), _c("div", {
    staticClass: "article"
  }, [_c("p", [_vm._v("2.4 – L’Emprunteur reconnaît en outre que les Taux Effectifs Globaux (TEG) et d’Usure ci-après ont été portés à sa connaissance :")]), _vm._v(" "), _c("table", {
    staticClass: "table table-bordered"
  }, [_c("tbody", [!_vm.edit_mode ? _vm._l(_vm.facilites, function (offre, index) {
    return _c("tr", {
      key: "offre" + offre.id
    }, [_c("td", {
      staticStyle: {
        "font-weight": "800"
      }
    }, [_vm._v(_vm._s(offre.libelle))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(offre.value))])]);
  }) : _vm._l(_vm.facilites, function (offre, index) {
    return _c("tr", {
      key: "offre" + offre.id
    }, [_c("td", {
      staticStyle: {
        "font-weight": "800"
      }
    }, [_vm._v(_vm._s(offre.libelle))]), _vm._v(" "), _c("td", {
      staticStyle: {
        "background-color": "#ffffad"
      }
    }, [_c("span", {
      staticStyle: {
        padding: ".3rem .3rem",
        "background-color": "#ffffad"
      }
    }, [_vm._v(_vm._s(offre.value))])])]);
  })], 2)])])]), _vm._v(" "), _c("div", {
    staticClass: "column"
  }, [_c("div", {
    staticClass: "article"
  }, [_c("p", {
    staticClass: "highlight_"
  }, [_vm._v("Article 3 : Intérêts et Commissions")]), _vm._v(" "), _c("p", [_vm._v("3.1 – Le Crédit est productif d’intérêts au Taux de "), !_vm.edit_mode ? _c("span", [_c("b", [_vm._v(_vm._s(_vm.formData.taux_interets))])]) : _c("span", {
    staticStyle: {
      "background-color": "#ffffad",
      padding: "2px 5px",
      "border-radius": "5px"
    }
  }, [_vm._v(_vm._s(_vm.formData.taux_interets))]), _vm._v(" % hors taxes par an. La Taxe sur la Valeur Ajoutée (TVA), calculée au taux légal en vigueur, s’ajoutera aux intérêts et commissions prévus ci-dessus.")]), _vm._v(" "), _c("p", [_vm._v("3.2 – L’Emprunteur s’engage à honorer scrupuleusement l’échéancier de remboursement du Crédit. Toute somme impayée à son échéance sera productive des intérêts de retard calculés au taux de découvert standard de 17% (" + _vm._s(_vm.nombreEnLettres(17)) + "%) hors taxes conformément aux conditions générales de Banque (Taux d’Intérêt Standard).")]), _vm._v(" "), _c("p", {
    staticClass: "highlight_"
  }, [_vm._v("Article 4 : Déblocage et Remboursement")]), _vm._v(" "), _c("p", [_vm._v("4.1 – Modalités de déblocage")]), _vm._v(" "), _c("p", [_vm._v("Dès le recueil exhaustif et effectif de la documentation exigible, le Crédit sera débloqué au profit de l’Emprunteur par le crédit de son compte N° "), !_vm.edit_mode ? _c("span", [_c("b", [_vm._v(_vm._s(_vm.formData.numero_de_compte))])]) : _c("span", {
    staticStyle: {
      "background-color": "#ffffad",
      padding: "2px 5px",
      "border-radius": "5px"
    }
  }, [_vm._v(_vm._s(_vm.formData.numero_de_compte))]), _vm._v(" ;")]), _vm._v(" "), _c("p", [_vm._v("Si des avances sont consenties ou promises par la BANQUE, celle-ci pourra exiger que des effets soient tirés, souscrits ou acceptés à son ordre par le BENEFICIAIRE.")]), _vm._v(" "), _c("p", [_vm._v("Le transfert de la propriété de ces effets au profit de la BANQUE produira les conséquences prévues à l’article 1, dont les dispositions seront applicables à la suite de l’opération.")])])])]), _vm._v(" "), _c("div", {
    staticClass: "block"
  }, [_c("div", {
    staticClass: "column"
  }, [_c("div", {
    staticClass: "article"
  }, [_c("p", [_vm._v("4.2 – Modalités de remboursement")]), _vm._v(" "), _c("p", [_vm._v("Le Crédit sera remboursé en "), !_vm.edit_mode ? _c("span", [_c("b", [_vm._v(_vm._s(_vm.formData.nombre_jour_remboursement_chiffre))])]) : _c("span", {
    staticStyle: {
      "background-color": "#ffffad",
      padding: "2px 5px",
      "border-radius": "5px"
    }
  }, [_vm._v(_vm._s(_vm.formData.nombre_jour_remboursement_chiffre))]), _vm._v(" ("), !_vm.edit_mode ? _c("span", [_c("b", [_vm._v(_vm._s(_vm.formData.nombre_jour_remboursement_lettre))])]) : _c("span", {
    staticStyle: {
      "background-color": "#ffffad",
      padding: "2px 5px",
      "border-radius": "5px"
    }
  }, [_vm._v(_vm._s(_vm.formData.nombre_jour_remboursement_lettre))]), _vm._v(") "), !_vm.edit_mode ? _c("span", [_c("b", [_vm._v(_vm._s(_vm.formData.echeancier))])]) : _c("span", {
    staticStyle: {
      "background-color": "#ffffad",
      padding: "2px 5px",
      "border-radius": "5px"
    }
  }, [_vm._v(_vm._s(_vm.formData.echeancier))]), _vm._v(" consécutives de "), !_vm.edit_mode ? _c("span", [_c("b", [_vm._v(_vm._s(_vm.formData.montant_echeance))])]) : _c("span", {
    staticStyle: {
      "background-color": "#ffffad",
      padding: "2px 5px",
      "border-radius": "5px"
    }
  }, [_vm._v(_vm._s(_vm.formData.montant_echeance))]), _vm._v(" ("), !_vm.edit_mode ? _c("span", [_c("b", [_vm._v(_vm._s(_vm.nombreEnLettres(String((_vm$facilite = _vm.facilite) === null || _vm$facilite === void 0 ? void 0 : _vm$facilite.montant_echeance).replace(/\s+/g, ""))))])]) : _c("span", {
    staticStyle: {
      "background-color": "#ffffad",
      padding: "2px 5px",
      "border-radius": "5px"
    }
  }, [_vm._v(_vm._s(_vm.nombreEnLettres(String((_vm$facilite2 = _vm.facilite) === null || _vm$facilite2 === void 0 ? void 0 : _vm$facilite2.montant_echeance).replace(/\s+/g, ""))))]), _vm._v(") conformément au tableau d’amortissement établi par les parties et communiqué à l’Emprunteur. A cet effet, l’Emprunteur constituera provision suffisante sur le compte N° "), !_vm.edit_mode ? _c("span", [_c("b", [_vm._v(_vm._s(_vm.formData.numero_de_compte))])]) : _c("span", {
    staticStyle: {
      "background-color": "#ffffad",
      padding: "2px 5px",
      "border-radius": "5px"
    }
  }, [_vm._v(_vm._s(_vm.formData.numero_de_compte))]), _vm._v(", qu’il autorise la Banque de débiter pour le service de la dette.")]), _vm._v(" "), _c("p", {
    staticClass: "highlight_"
  }, [_vm._v("Article 4 : Déblocage et Remboursement ")]), _vm._v(" "), _c("p", [_vm._v("4.3 – Remboursement anticipé")]), _vm._v(" "), _c("p", [_vm._v("L’Emprunteur aura la faculté de rembourser par anticipation tout ou partie des sommes empruntées, moyennant le paiement d’une pénalité de remboursement anticipé (PRA) représentant deux pourcent (2%) de l’encours anticipé. Toutefois, il est précisé que la PRA ne devra pas dépasser le cumul des intérêts non courus. Tout remboursement anticipé partiel sera imputé sur les échéances du tableau d’amortissement en ordre chronologique inversé et ainsi sur les échéances les plus lointaines, la durée du Crédit étant réduite à due concurrence.")]), _vm._v(" "), _c("p", [_vm._v("4.4 – Exigibilité anticipée")]), _vm._v(" "), _c("p", [_vm._v("La BANQUE pourra par notification écrite à l’Emprunteur, exiger le remboursement anticipé de l’encours du Crédit dans l’un quelconque des cas suivants :")])])]), _vm._v(" "), _vm._m(8)]), _vm._v(" "), _c("div", {
    staticClass: "block"
  }, [_vm._m(9), _vm._v(" "), _c("div", {
    staticClass: "column"
  }, [_c("div", {
    staticClass: "article"
  }, [_c("p", {
    staticClass: "highlight_"
  }, [_vm._v("Article 5 : Privilèges, documentation et garanties")]), _vm._v(" "), _c("p", [_vm._v("5.1 – Documentation")]), _vm._v(" "), _c("p", [_vm._v("L’EMPRUNTEUR s’engage à la sûreté et garantie de remboursement du Crédit à constituer et produire à la BANQUE, préalablement à la mise en place de la ligne de crédit, et en la forme satisfaisante, les garanties suivantes :")]), _vm._v(" "), _c("ul", {
    staticClass: "list"
  }, [_c("li", [_vm._v("Une demande de financement")]), _vm._v(" "), _c("li", [_vm._v("Une attestation de service ou contrat de travail ;")]), _vm._v(" "), _c("li", [_vm._v("Trois derniers bulletins de paie")]), _vm._v(" "), _c("li", [_vm._v("Une Attestation de Virement Irrévocable des salaires, régulièrement délivrée par l’employeur ;")]), _vm._v(" "), _c("li", [_vm._v("Un bulletin individuel d’adhésion au contrat d’Assurance-invalidité décès Groupe Emprunteur, dûment approuvé par l’Assureur ;")]), _vm._v(" "), _c("li", [_vm._v("Un formulaire d’adhésion au fonds de garantie dûment souscrit par l’Emprunteur ;")]), _vm._v(" "), _vm.billet_ordre ? _c("li", [_vm._v("Un billet à ordre d’un montant de "), !_vm.edit_mode ? _c("span", [_c("b", [_vm._v(_vm._s(_vm.billet_ordre.montant_chiffres))])]) : _c("span", {
    staticStyle: {
      "background-color": "#ffffad",
      padding: "2px 5px",
      "border-radius": "5px"
    }
  }, [_vm._v(_vm._s(_vm.billet_ordre.montant_chiffres))]), _vm._v(" représentant le montant total de la créance en principal, intérêts et toute taxe en vigueur, conformément au tableau d’amortissement ;")]) : _vm._e()])])])]), _vm._v(" "), _c("div", {
    staticClass: "block",
    staticStyle: {
      display: "flex",
      "flex-wrap": "nowrap"
    }
  }, [_c("div", {
    staticClass: "column",
    staticStyle: {
      flex: "1",
      width: "50%",
      "box-sizing": "border-box",
      padding: "0 10px",
      "overflow-wrap": "break-word"
    }
  }, [_c("div", {
    staticClass: "article",
    staticStyle: {
      "word-break": "break-word"
    }
  }, [_c("p", [_vm._v("5.2 – Domiciliation irrévocable des revenus et salaires")]), _vm._v(" "), _c("p", [_vm._v("En sûreté et à la garantie du remboursement du Crédit, l’Emprunteur déclare domicilier irrévocablement l’intégralité de ses salaires, avantages, indemnités et autres droits sociaux sur son compte au Relevé d’identité Bancaire ci-après :")]), _vm._v(" "), _c("div", {
    staticClass: "table-responsive p-2"
  }, [_c("table", {
    staticClass: "table table-bordered"
  }, [_c("tbody", [_c("tr", [_c("td", [[!_vm.edit_mode ? _c("span", [_c("b", [_vm._v(_vm._s(_vm.formData.cle_rib))])]) : _c("span", {
    staticStyle: {
      "background-color": "#ffffad",
      padding: "2px 5px",
      "border-radius": "5px",
      "font-size": "10px"
    }
  }, [_vm._v(_vm._s(_vm.formData.cle_rib))])]], 2)])])])]), _vm._v(" "), _c("p", [_vm._v("Tant que l’Emprunteur demeurera tenu envers la Banque d’une quelconque dette, la domiciliation ci-dessus subsistera, nonobstant le changement de profession ou d’employeur. Aux effets ci-dessus, l’Emprunteur s’oblige à produire spontanément, dès le changement d’emploi, une Attestation de Virement Irrévocable de ses salaires, avantages et droits sociaux sur le compte de domiciliation, délivrée par nouvel employeur.")]), _vm._v(" "), _c("p", [_vm._v("5.3 – Assurance Invalidité-Décès")]), _vm._v(" "), _c("p", [_vm._v("Pour plus de sûreté, l’EMPRUNTEUR s’oblige à souscrire, auprès d’une compagnie d’assurance notoirement solvable, une Police d’Assurance contre les Risques d’Invalidité et de Décès avec clause d’indemnité régulièrement déléguée au profit de la Banque en cas de sinistre.")]), _vm._v(" "), _c("p", {
    staticClass: "highlight_"
  }, [_vm._v("Article 6 : Pénalités et indemnités")]), _vm._v(" "), _c("p", [_vm._v("6.1 – Teneur des engagements de l’Emprunteur : La présente convention de Crédit fait naître à la charge de l’Emprunteur et de ses coobligés :")])])]), _vm._v(" "), _vm._m(10)]), _vm._v(" "), _vm._m(11), _vm._v(" "), _vm._m(12), _vm._v(" "), _c("div", {
    staticClass: "block"
  }, [_vm._m(13), _vm._v(" "), _c("div", {
    staticClass: "column"
  }, [_c("div", {
    staticClass: "article"
  }, [_c("p", [_vm._v("9.12 - Pour toute difficulté éventuelle ou réclamation relative au fonctionnement de son compte ou à l’utilisation des services mis à sa disposition, l’EMPRUNTEUR peut se référer aux interlocuteurs suivants :")]), _vm._v(" "), _vm._m(14), _vm._v(" "), _c("p", [_vm._v("9.12 - La Banque s’engage à accuser réception de la réclamation sous dix (10) jours et à apporter une réponse sous quarante-cinq (45) jours ouvrés maximum, sauf cas exceptionnels.")]), _vm._v(" "), _c("p", {
    staticClass: "highlight_"
  }, [_vm._v("Article 10 : Election de domicile-juridiction compétente")]), _vm._v(" "), _c("p", [_vm._v("10.1 – Pour l’exécution des présentes et de ses suites, comme pour tous différends pouvant intervenir entre la BANQUE et L’EMPRUNTEUR dans leurs rapports d’affaires, le demandeur à l’instance pourra assigner devant le Tribunal compétent dans le ressort auquel est situé le siège social ou le domicile du défendeur.")]), _vm._v(" "), _c("p", [_vm._v("10.2 – A cet effet, chaque partie élit domicile à son adresse ci-dessus.")]), _vm._v(" "), _c("div", {
    staticClass: "p-3",
    staticStyle: {
      border: "3px solid",
      "border-radius": "8px"
    }
  }, [_c("ul", {
    staticStyle: {
      "list-style-type": "none",
      "font-size": "13px"
    }
  }, [_vm._m(15), _vm._v(" "), _c("li", [_c("b", [_vm._v(_vm._s(_vm.siege_filiale) + " / " + _vm._s(_vm.numero_filiale))])]), _vm._v(" "), _c("li", [_c("b", [_vm._v("Courriel : " + _vm._s(_vm.mail_filiale) + " ")])])])]), _vm._v(" "), _c("ul", {
    staticStyle: {
      "list-style-type": "none"
    }
  }, [_c("li", [_c("div", {
    staticClass: "p-2 text-wrap"
  }, [_vm._v("\n                Fait à\n                "), [_c("span", [_c("b", [_vm._v(_vm._s(_vm.formData.lieu_redation))])])], _vm._v("\n                le\n                "), [_c("span", [_c("b", [_vm._v(_vm._s(_vm.formData.date_redaction))])])]], 2)])])])])]), _vm._v(" "), _vm._m(16)])]), _vm._v(" "), [!_vm.edit_mode ? _c("div", {
    staticStyle: {
      "text-align": "justify"
    }
  }, [_c("div", {
    staticStyle: {
      width: "714px",
      height: "1040px",
      margin: "50px auto",
      "box-sizing": "border-box",
      border: "1px solid rgb(221, 221, 221)",
      background: "white",
      position: "relative"
    },
    attrs: {
      id: "preloader-content"
    }
  })]) : _vm._e(), _vm._v(" "), _c("div", {
    ref: "contentToPdf",
    staticStyle: {
      "text-align": "justify"
    },
    attrs: {
      id: "printable"
    }
  })]], 2);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "d-flex justify-content-center text-center align-items-center text-muted py-4"
  }, [_c("div", [_c("span", {
    staticClass: "spinner-border spinner-border"
  }), _vm._v(" "), _c("h5", [_vm._v("\n                  Chargement des données en cours ... "), _c("br"), _vm._v("\n                  Ceci peut prendre un peu de temps\n              ")])])]);
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
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12"
  }, [_c("div", {
    staticClass: "d-flex align-items-center justify-content-center"
  }, [_c("div", {
    staticClass: "text-center title_",
    staticStyle: {
      width: "max-content",
      "text-transform": "uppercase",
      "border-bottom": "5px solid",
      "border-top": "1px solid",
      "border-left": "1px solid",
      "border-right": "1px solid"
    }
  }, [_c("h5", {
    staticStyle: {
      "text-decoration": "underline"
    }
  }, [_vm._v("\n                CONVENTION DE CREDIT AMORTISSABLE –PARTICULIERS\n              ")])])])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("h6", [_c("b", [_vm._v("ENTRE :")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("h6", [_c("b", [_vm._v("ET :")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticStyle: {
      position: "absolute",
      right: "0",
      bottom: "0"
    }
  }, [_c("b", [_c("i", [_vm._v("\n                    Ci-dénommé(e) ‘‘"), _c("b", [_vm._v("l’EMPRUNTEUR")]), _vm._v("’’ d’autre part ;\n                  ")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12 p-1"
  }, [_c("h6", {
    staticStyle: {
      "text-decoration": "underline",
      "text-align": "center"
    }
  }, [_c("b", [_vm._v("IL A ETE CONVENU ET ARRETE CE QUI SUIT :")])]), _vm._v(" "), _c("hr", {
    staticStyle: {
      border: "1px solid",
      opacity: "1",
      margin: "0.2rem 0"
    }
  })])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "article"
  }, [_c("p", [_vm._v("2.2 – L’Emprunteur reconnaît que dans le cadre de son offre de crédit, la Banque lui a préalablement communiqué les informations complètes sur le coût, les critères d’éligibilité, les conditions et modalités de financement, afin de lui permettre de déterminer si le crédit proposé est adapté à ses besoins et à sa situation financière.")]), _vm._v(" "), _c("p", [_vm._v("2.3 – L’emprunteur dispose d’un droit de rétractation après réflexion, qu’il peut exercer dans les trois (03) jours suivant la conclusion de la présente convention. Ce délai est porté à quatorze (14) jours calendaires en cas de démarchage bancaire. L’utilisation du Crédit pendant le cours du délai de rétractation vaut irrévocablement acceptation des termes et conditions du financement.")]), _vm._v(" "), _c("p", [_vm._v("En cas de rétractation dans les délais susdits, l’annulation du Crédit n’est assujettie à aucune pénalité.")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "column"
  }, [_c("div", {
    staticClass: "article"
  }, [_c("ul", {
    staticClass: "list"
  }, [_c("li", [_vm._v("a. en cas de défaut de paiement à bonne date par l’Emprunteur d’une somme quelconque due en vertu de la présente convention ;")]), _vm._v(" "), _c("li", [_vm._v("b. en cas de survenance d’un quelconque événement, affectant la situation financière ou professionnelle de l’Emprunteur, et susceptible menacer le remboursement du Crédit, notamment en cas de perte d’emploi, suspension, mise en disponibilité, lock-out ;")]), _vm._v(" "), _c("li", [_vm._v("c. en cas de survenance d’un quelconque événement susceptible d’affecter la légalité ou la validité du Crédit, ou de la documentation ;")]), _vm._v(" "), _c("li", [_vm._v("d. en cas de cessation d’exploitation, de redressement judiciaire ou de liquidation amiable ou judiciaire de l’Employeur de l’Emprunteur ;")]), _vm._v(" "), _c("li", [_vm._v("e. en cas de défaillance de l’Emprunteur dans l’exécution d’obligations souscrites avec des tiers et/ou toute accélération ou exigibilité anticipée d’une obligation de l’Emprunteur vis à vis d’un tiers ;")]), _vm._v(" "), _c("li", [_vm._v("f. en cas de clôture du compte, de dé-domiciliation frauduleuse des revenus, d’inexécution des termes de l’Attestation de Virement Irrévocable par l’Employeur ;")]), _vm._v(" "), _c("li", [_vm._v("g. En cas de production ou d’usage de faux documents ;")])])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "column"
  }, [_c("div", {
    staticClass: "article"
  }, [_c("ul", {
    staticClass: "list"
  }, [_c("li", [_vm._v("h. En cas de disparition de l’objet du financement ou de la source de remboursement, notamment en cas de perte d’emploi non-suivi de l’accession, dans le délai d’un (01) mois, à un nouvel emploi ;")]), _vm._v(" "), _c("li", [_vm._v("i. Si l’une quelconque des déclarations, voire tout document de financement ou de sûreté, s’avère frauduleux, erroné ou inexact ;")])]), _vm._v(" "), _c("p", [_vm._v("Les paiements ou régularisations postérieurs ne feront pas obstacle à cette exigibilité.")]), _vm._v(" "), _c("p", [_vm._v("4.5 – Ordre d’affectation des paiements")]), _vm._v(" "), _c("p", [_vm._v("En l’absence de Défaut, l’ordre d’affectation des remboursements est le suivant :")]), _vm._v(" "), _c("ul", {
    staticClass: "list"
  }, [_c("li", [_vm._v("a. Premièrement, taxes et impôts exigibles ;")]), _vm._v(" "), _c("li", [_vm._v("b. Deuxièmement, commissions, frais et autres accessoires ;")]), _vm._v(" "), _c("li", [_vm._v("c. Troisièmement, intérêts de retard exigibles au titre du Crédit ainsi que toute somme due et impayée à sa date d’exigibilité ;")]), _vm._v(" "), _c("li", [_vm._v("d. Quatrièmement, intérêts du Crédit (à l’exception des intérêts de retard) ;")]), _vm._v(" "), _c("li", [_vm._v("e. Cinquièmement, remboursement du crédit en capital exigible.")]), _vm._v(" "), _c("li", [_vm._v("f. Sixièmement, remboursement anticipé volontaire du Crédit.")])])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "column",
    staticStyle: {
      flex: "1",
      width: "50%",
      "box-sizing": "border-box",
      padding: "0 10px",
      "overflow-wrap": "break-word"
    }
  }, [_c("div", {
    staticClass: "article",
    staticStyle: {
      "word-break": "break-word"
    }
  }, [_c("ul", {
    staticClass: "list"
  }, [_c("li", [_vm._v("l’obligation de satisfaire aux conditions stipulées à l’article 5.1 supra ;")]), _vm._v(" "), _c("li", [_vm._v("l’obligation de remboursement, à bonne date, des traites d’amortissement du Crédit effectivement débloqué.")])]), _vm._v(" "), _c("p", [_vm._v("6.2 – Clause pénale : A défaut de remboursement du Crédit à bonne date, l’Emprunteur se verra imputer, sur l’encours restant des engagements non remboursés, des pénalités calculées au taux de dix pourcent (10%) des sommes restant dues.")]), _vm._v(" "), _c("p", {
    staticClass: "highlight_"
  }, [_vm._v("Article 6 : Pénalités et indemnités ")]), _vm._v(" "), _c("p", [_vm._v("6.3 – Frais d’externalisation : En cas de déclassement des engagements, la Banque aura la faculté d’externaliser le recouvrement auprès des Cabinets Spécialisés de Recouvrement. Dans ce cas, l’Emprunteur se verra imputer des indemnités de recouvrement externalisé représentant Vingt Pourcent (20%) des sommes restant dues ;")]), _vm._v(" "), _c("p", [_vm._v("6.4 – Frais et honoraires de recouvrement : Dans le cas où pour parvenir au recouvrement de la créance résultant du présent acte, la Banque se retrouverait obligé d’avoir recours à un mandataire de justice (détectives, Huissiers, Avocats, experts) ou d’exercer des poursuites, l’emprunteur s’oblige à assumer les frais de justice, émoluments, honoraires, ")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "block"
  }, [_c("div", {
    staticClass: "column"
  }, [_c("div", {
    staticClass: "article"
  }, [_c("p", [_vm._v("frais de procédure et dépens mis à sa charge, et en outre, payera à la Banque une indemnité forfaitaire représentant deux pour cent (2%) des sommes exigibles pour couvrir les pertes d’intérêts, de frais et de dommages de toutes sortes occasionnés par la nécessité du recours ou des poursuites.")]), _vm._v(" "), _c("p", [_vm._v("6.5 – Dès à présent, l’Emprunteur s’oblige dans les termes ci-dessus, et donne d’ores et déjà l’ordre irrévocable à la BANQUE de débiter son compte le cas échéant.")]), _vm._v(" "), _c("p", {
    staticClass: "highlight_"
  }, [_vm._v("Article 7 : Risques d’interdiction et de poursuite pénale")]), _vm._v(" "), _c("p", [_vm._v("7.1 – Le non-remboursement des facilités accordées en vertu de la présente convention, tout comme le non-respect d’un moratoire, constitue un Incident de Crédit au sens de la loi N°2019/021 du 24 décembre 2019 fixant certaines règles relatives à l’activité de crédit dans les secteurs bancaires et de la Microfinance au Cameroun ;")]), _vm._v(" "), _c("p", [_vm._v("7.2 – En cas de survenance d’un Incident de Crédit, l’Emprunteur s’expose à une interdiction de crédit, emportant interdiction de conclure une opération de crédit auprès de tout autre établissement bancaire ou de Microfinance ; l’Emprunteur ne recouvrera la faculté de conclure une opération de crédit que s’il justifie avoir régularisé sa situation en remboursant en principal et intérêts, la créance objet de l’incident de crédit.")])])]), _vm._v(" "), _c("div", {
    staticClass: "column"
  }, [_c("div", {
    staticClass: "article"
  }, [_c("p", [_vm._v("7.3 – L’Emprunteur s’expose pareillement aux sanctions pénales édictées par la loi susvisée, laquelle dispose :")]), _vm._v(" "), _c("p", [_c("em", [_vm._v("« Art.20 : Est punie d'un emprisonnement de six (06) mois à cinq (05) ans et d'une amende de cent mille (100.000) à cent millions (100.000.000) de francs CFA, ou de l’une de ces deux peines seulement, toute personne qui, de mauvaise foi, n’a pas remboursé le crédit qui lui a été accordé par un établissement assujetti ».")])]), _vm._v(" "), _c("p", [_c("em", [_vm._v("Art.21 (2) : Les sanctions ci-dessus peuvent également être prises en cas de moratoire non respecté")])]), _vm._v(" "), _c("p", [_vm._v("7.4 – En cas d’usage de faux documents, le BENEFICIAIRE et ses coobligés s’exposent en vertu des dispositions de la loi N°2019/021 du 24 décembre 2019 fixant certaines règles relatives à l’activité de crédit dans les secteurs bancaires et de la Microfinance au Cameroun qui dispose à son article 22 : « "), _c("em", [_vm._v("Est punie d’un emprisonnement de six (06) mois à trois (03) ans et d’une amende de cent mille (100.000) à cinq millions (5.000.000) de francs CFA, ou de l’une de ces deux peines seulement, toute personne qui, avec l’intention de porter atteinte aux droits de l’établissement assujetti, fait usage ou tente de faire usage de faux documents dans le cadre de la conclusion d’une opération de crédit ».")])])])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "block"
  }, [_c("div", {
    staticClass: "column"
  }, [_c("div", {
    staticClass: "article"
  }, [_c("p", {
    staticClass: "highlight_"
  }, [_vm._v("Article 8 : Frais – Impôts et Taxes")]), _vm._v(" "), _c("p", [_vm._v("Tous impôts, taxes, frais et accessoires éventuels liés à la conclusion, à l’exécution de la présente convention et de ses suites sont à la charge de L’EMPRUNTEUR qui s’y oblige expressément, et d’ores et déjà, autorise la BANQUE à débiter son compte à telle date qu’il conviendra en vue du règlement desdites charges.")]), _vm._v(" "), _c("p", {
    staticClass: "highlight_"
  }, [_vm._v("Article 9 : Clauses finales")]), _vm._v(" "), _c("p", [_vm._v("9.1 – Les droits de L’EMPRUNTEUR résultant du présent contrat ne peuvent être cédés, ni grevés.")]), _vm._v(" "), _c("p", [_vm._v("9.2 – Les modifications au présent contrat doivent être faites par voie d’avenant écrit.")]), _vm._v(" "), _c("p", [_vm._v("9.3 – L’invalidation d’une clause du présent contrat n’entache pas la validité des autres dispositions. Les clauses invalides seront aussitôt remplacées, à la diligence des parties contractantes, par des dispositions conformes à la législation en vigueur.")]), _vm._v(" "), _c("p", [_vm._v("9.4 – Le fait pour la BANQUE de ne pas user d’un droit dont elle jouit en vertu du présent contrat n’emporte pas renonciation à ce droit.")]), _vm._v(" "), _c("p", [_vm._v("9.5 – La présente convention est soumise au droit camerounais. Il entre en vigueur dès sa signature par les parties contractantes (date de dernière signature) et engagera les parties jusqu’à plein accomplissement de la totalité des obligations de paiement au bénéfice de la BANQUE.")])])]), _vm._v(" "), _c("div", {
    staticClass: "column"
  }, [_c("div", {
    staticClass: "article"
  }, [_c("p", [_vm._v("9.6 - L’Emprunteur consent à ce que ses données soient traitées par la Banque dans le cadre de la présente et de ses suites. Ce traitement a pour finalité la gestion des concours accordés à l’Emprunteur, animation commerciale et études statistiques, évaluation du risque, sécurité et prévention des impayés et de la fraude, recouvrement, lutte contre le blanchiment d’argent et le financement du terrorisme, réponse aux obligations légales et réglementaires.")]), _vm._v(" "), _c("p", [_vm._v("9.7 - Ces données personnelles sont protégées par le secret professionnel auquel est tenu la Banque. Le Client accepte expressément et pendant toute la durée du concours que les données personnelles le concernant soient transmises :")]), _vm._v(" "), _c("ul", {
    staticClass: "list"
  }, [_c("li", [_vm._v("aux prestataires de service et sous-traitants exécutant pour le compte de la Banque certaines tâches liées aux finalités décrites ci-dessus ;")]), _vm._v(" "), _c("li", [_vm._v("aux sociétés du Groupe Atlantic Financial Group (AFG) exécutant pour le compte de la Banque certaines tâches liées aux finalités décrites ci-dessus ;")]), _vm._v(" "), _c("li", [_vm._v("aux sociétés du Groupe AFG en vue de la présentation des produits et services gérés par ces sociétés, en cas de regroupement de moyens ;")]), _vm._v(" "), _c("li", [_vm._v("aux sociétés du Groupe AFG avec lesquelles il est ou sera en relation contractuelle aux fins d’actualisation des données collectées par ces sociétés ;")])])])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "column"
  }, [_c("div", {
    staticClass: "article"
  }, [_c("ul", {
    staticClass: "list"
  }, [_c("li", [_vm._v("à des organismes chargés de réaliser des enquêtes ou sondages ;")]), _vm._v(" "), _c("li", [_vm._v("et à des organismes tels que l’administration fiscale et la Banque Centrale afin de satisfaire aux obligations légales ou réglementaires incombant à la Banque.")])]), _vm._v(" "), _c("p", [_vm._v("9.8 - Ces données personnelles transmises par le Client conformément aux finalités ci-dessus peuvent à l’occasion de diverses opérations, faire l’objet d’un transfert vers un pays tiers, des règles assurant la protection et la sécurité des données ont été mises en place conformément à la législation en vigueur.")]), _vm._v(" "), _c("p", [_vm._v("9.9 - Ces données personnelles peuvent être communiquées, à leur requête, aux organismes officiels et aux autorités administratives ou judiciaires, notamment dans le cadre de la lutte contre le blanchiment des capitaux ou la lutte contre le financement du terrorisme.")]), _vm._v(" "), _c("p", [_vm._v("9.10 - Ces données personnelles pourront donner lieu à l’exercice du droit d’accès, de rectification et d’opposition dans les conditions prévues par la loi en vigueur. Le Client peut obtenir une copie des données le concernant et, le cas échéant, les faire rectifier par courrier adressé au siège social de la Banque.")]), _vm._v(" "), _c("p", [_vm._v("9.11 – La Banque est responsable, vis-à-vis de l’Abonné, du bon dénouement de toute opération réalisée par un Distributeur, Sous-distributeur ou intermédiaire de banque commis par ses soins dans le cadre d’une externalisation des services.")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("ul", {
    staticClass: "list"
  }, [_c("li", [_vm._v("Son Gestionnaire de Compte ou le chef d’agence ; ceux-ci sont ses premiers interlocuteurs et servent de relai entre la Banque et le Client.")]), _vm._v(" "), _c("li", [_vm._v("Le Service ‘‘Service Expérience Client’’, en charge du suivi centralisé des réclamations. Ce service est joignable aux coordonnées suivantes :")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("li", [_c("b", [_vm._v("Expérience Client, ")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "row",
    attrs: {
      id: "section-row"
    }
  }, [_c("div", {
    staticClass: "col-12 p-2"
  }, [_c("hr", {
    staticStyle: {
      border: "1px solid black",
      opacity: "1"
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "d-flex justify-content-around"
  }, [_c("div", [_c("h6", {
    staticStyle: {
      "text-decoration": "underline"
    }
  }, [_c("b", [_vm._v("L’EMPRUNTEUR")])])]), _vm._v(" "), _c("div", [_c("h6", {
    staticStyle: {
      "text-decoration": "underline"
    }
  }, [_c("b", [_vm._v("Pour LA BANQUE")])])])])])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/conventions/en/CONVENTION_CREDIT_AMORTISSAGE.vue?vue&type=style&index=0&id=e98a6df6&scoped=true&lang=css":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/conventions/en/CONVENTION_CREDIT_AMORTISSAGE.vue?vue&type=style&index=0&id=e98a6df6&scoped=true&lang=css ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\nfieldset[data-v-e98a6df6] {\r\n  border: 1px solid #ddd !important;\r\n  position: relative;\r\n  padding-left: 10px !important;\r\n  width: 100%;\r\n  background-color: #f5f5f5;\r\n  margin-top: 15px;\r\n  min-width: -moz-max-content;\r\n  min-width: max-content\n}\nlegend[data-v-e98a6df6] {\r\n  font-weight: bold;\r\n  padding: 4px;\r\n  width: -moz-max-content;\r\n  width: max-content;\r\n  padding: 0 15px;\r\n  font-size: 16px;\r\n  float: none;\r\n  background-color: #ffffff;\r\n  border: 1px solid #ddd;\r\n  border-radius: 4px;\n}\nfieldset[data-v-e98a6df6] {\r\n  border: 1px solid #ddd !important;\r\n  position: relative;\r\n  padding-left: 10px !important;\r\n  width: 100%;\r\n  background-color: #f5f5f5;\r\n  margin-top: 15px;\n}\nlegend[data-v-e98a6df6] {\r\n  font-weight: bold;\r\n  padding: 4px;\r\n  width: -moz-max-content;\r\n  width: max-content;\r\n  padding: 0 15px;\r\n  font-size: 16px;\r\n  float: none;\r\n  background-color: #ffffff;\r\n  border: 1px solid #ddd;\r\n  border-radius: 4px;\n}\n.box[data-v-e98a6df6] {\r\n  border-color: #212529;\r\n  border-style: solid;\r\n  border-width: 1px;\r\n  padding: 10px;\n}\n.actd[data-v-e98a6df6] {\r\n  border-color: #212529;\r\n  border-style: solid;\r\n  border-width: 1px;\r\n  padding: 10px;\n}\n.pre[data-v-e98a6df6] {\r\n  font-size: 0.6rem;\n}\n.form-control[data-v-e98a6df6] {\r\n  display: initial;\r\n  width: initial;\n}\n.paragraph[data-v-e98a6df6] {\r\n  margin: 20px 0px;\r\n  position: relative;\r\n  padding: 5px;\n}\ninput[data-v-e98a6df6],\r\nselect[data-v-e98a6df6] {\r\n  margin: 2px;\r\n  border-color: #34495e;\r\n  color: black;\r\n  font-size: 13px;\r\n  height: 34px;\r\n  font-weight: bold;\r\n  background-color: #ffffad;\r\n  margin-right: 0px;\r\n  min-width: 45px;\r\n  border-top-right-radius: 0;\r\n  border-bottom-right-radius: 0;\r\n  border-right: none;\n}\n.input-group-append[data-v-e98a6df6] {\r\n  margin: 0 2px;\n}\n.input-group-text-right[data-v-e98a6df6] {\r\n  border-radius: 0 0.375rem 0.375rem 0;\r\n  margin-left: 0px;\r\n  cursor: pointer;\n}\n.input-group-text-left[data-v-e98a6df6] {\r\n  border-radius: 0.375rem 0 0 0.375rem;\n}\n.li-convention[data-v-e98a6df6] {\r\n  list-style-type: disc;\r\n  margin: 0;\r\n  padding: 0;\r\n  margin-left: 20px;\n}\n.input-group-text[data-v-e98a6df6] {\r\n  font-size: 13px;\r\n  line-height: 1.5;\r\n  height: 34px;\r\n  padding: 0.375rem 0.75rem;\r\n  border: 1px solid #34495e;\r\n  min-width: 45px;\r\n  text-align: center;\r\n  justify-content: center;\r\n  /*margin: 2px;*/\r\n  background-color: #ffffad;\r\n  color: black;\n}\r\n\r\n/* checkbox */\n.checkbox-container .checkbox-input[data-v-e98a6df6] {\r\n  position: absolute;\r\n  opacity: 0;\r\n  cursor: pointer;\r\n  height: 80%;\r\n  width: 80%;\r\n  top: 0;\r\n  left: 0;\r\n  z-index: 1;\n}\n.checkbox-container[data-v-e98a6df6] {\r\n  display: block;\r\n  position: relative;\r\n  cursor: pointer;\r\n  -webkit-user-select: none;\r\n     -moz-user-select: none;\r\n          user-select: none;\n}\n.checkbox-container .checkbox-icon-cancel[data-v-e98a6df6] {\r\n  position: relative;\r\n  top: 0;\r\n  left: 0;\r\n  height: 50px;\r\n  width: 50px;\r\n  transition: all 0.3s;\r\n  font-size: 1.5em;\r\n  color: red;\n}\n.checkbox-container .checkbox-icon-success[data-v-e98a6df6] {\r\n  position: relative;\r\n  top: 0;\r\n  left: 0;\r\n  height: 50px;\r\n  width: 50px;\r\n  transition: all 0.3s;\r\n  font-size: 1.5em;\r\n  color: green;\n}\r\n\r\n/*.checkbox-container .checkbox-icon-cancel:hover {\r\n    transform: scale(1.1);\r\n}\r\n\r\n.checkbox-container .checkbox-icon-success:hover {\r\n    transform: scale(1.1);\r\n}*/\n.checkbox-container .checkbox-icon-success[data-v-e98a6df6] {\r\n  display: none;\n}\n.checkbox-container .checkbox-input:checked~.checkbox-icon-cancel[data-v-e98a6df6] {\r\n  display: none;\n}\n.checkbox-container .checkbox-input:checked~.checkbox-icon-success[data-v-e98a6df6] {\r\n  display: contents;\n}\n.valid-section[data-v-e98a6df6] {\r\n  pointer-events: auto;\r\n  top: 50%;\r\n  transform: translateY(-50%);\r\n  width: -moz-fit-content;\r\n  width: fit-content;\n}\n.st-valide[data-v-e98a6df6] {\r\n  position: absolute;\r\n  z-index: 99;\r\n  right: -252px;\r\n  top: 10px;\n}\r\n\r\n/*this is the new approach*/\n.position-relative[data-v-e98a6df6]:has(.valid-section:hover) {\r\n  background: #3498db6f;\n}\n.onAutoSave[data-v-e98a6df6] {\r\n  cursor: wait !important;\n}\n.onAutoSave>span[data-v-e98a6df6] {\r\n  pointer-events: none;\r\n  opacity: 0.6;\r\n  cursor: wait !important;\n}\nul[data-v-e98a6df6],\r\nli[data-v-e98a6df6] {\r\n  list-style-type: inherit;\n}\r\n\r\n/* .custom-list {\r\n  list-style: none;\r\n  padding-left: 0;\r\n}\r\n\r\n.custom-list > li {\r\n  counter-increment: section;\r\n  position: relative;\r\n}\r\n\r\n.custom-list > li::before {\r\n  content: counter(section) \" \";\r\n  position: absolute;\r\n  left: -2em;\r\n}\r\n\r\n.custom-list ol {\r\n  list-style: none;\r\n  padding-left: 2em;\r\n  counter-reset: subsection;\r\n}\r\n\r\n.custom-list ol li {\r\n  counter-increment: subsection;\r\n  position: relative;\r\n}\r\n\r\n.custom-list ol li::before {\r\n  content: counter(section) \".\" counter(subsection) \" \";\r\n  position: absolute;\r\n  left: -3em;\r\n}\r\n\r\n.custom-list ol[type=\"a\"] {\r\n  list-style: lower-alpha;\r\n  padding-left: 2em;\r\n  counter-reset: none; \r\n}\r\n\r\n.custom-list ol[type=\"a\"] li {\r\n  position: relative;\r\n}\r\n\r\n.custom-list ol[type=\"a\"] li::before {\r\n  content: none; \r\n}\r\n\r\n.custom-list ul, .custom-list ol:not([type=\"a\"]) {\r\n  counter-reset: none;\r\n}\r\n\r\n.custom-list li {\r\n  margin-bottom: 0.5em;\r\n}\r\n\r\n.custom-list .p-2 {\r\n  margin-left: 3em; \r\n  \r\n} */\n.telephone-container[data-v-e98a6df6] {\r\n  white-space: nowrap;\r\n  overflow-x: auto;\r\n  padding: 5px 0;\n}\n.telephone-container[data-v-e98a6df6]::-webkit-scrollbar {\r\n  height: 8px;\n}\n.telephone-container[data-v-e98a6df6]::-webkit-scrollbar-thumb {\r\n  background-color: #ccc;\r\n  border-radius: 4px;\n}\ninput[type=checkbox][data-v-e98a6df6] {\r\n  height: 20px !important;\r\n  width: 20px !important;\n}\n.block[data-v-e98a6df6] {\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n  gap: 5px;\r\n  margin-bottom: 10px;\r\n  align-items: stretch;\n}\n.column[data-v-e98a6df6] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 5px;\r\n  padding: 5px;\n}\n.article[data-v-e98a6df6] {\r\n  text-align: justify;\r\n  margin-top: 10px;\n}\n.article p[data-v-e98a6df6] {\r\n  margin: 10px 0;\n}\n.list[data-v-e98a6df6] {\r\n  margin-left: 20px;\r\n  list-style-type: disc;\n}\n.list li[data-v-e98a6df6] {\r\n  margin-bottom: 10px;\r\n  text-align: justify;\n}\n.highlight_[data-v-e98a6df6] {\r\n  font-weight: bold;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/conventions/en/CONVENTION_CREDIT_AMORTISSAGE.vue?vue&type=style&index=0&id=e98a6df6&scoped=true&lang=css":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/conventions/en/CONVENTION_CREDIT_AMORTISSAGE.vue?vue&type=style&index=0&id=e98a6df6&scoped=true&lang=css ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CONVENTION_CREDIT_AMORTISSAGE_vue_vue_type_style_index_0_id_e98a6df6_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CONVENTION_CREDIT_AMORTISSAGE.vue?vue&type=style&index=0&id=e98a6df6&scoped=true&lang=css */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/conventions/en/CONVENTION_CREDIT_AMORTISSAGE.vue?vue&type=style&index=0&id=e98a6df6&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CONVENTION_CREDIT_AMORTISSAGE_vue_vue_type_style_index_0_id_e98a6df6_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CONVENTION_CREDIT_AMORTISSAGE_vue_vue_type_style_index_0_id_e98a6df6_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/offview/bank/afg/memo/conventions/en/CONVENTION_CREDIT_AMORTISSAGE.vue":
/*!********************************************************************************************************!*\
  !*** ./resources/js/components/offview/bank/afg/memo/conventions/en/CONVENTION_CREDIT_AMORTISSAGE.vue ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CONVENTION_CREDIT_AMORTISSAGE_vue_vue_type_template_id_e98a6df6_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CONVENTION_CREDIT_AMORTISSAGE.vue?vue&type=template&id=e98a6df6&scoped=true */ "./resources/js/components/offview/bank/afg/memo/conventions/en/CONVENTION_CREDIT_AMORTISSAGE.vue?vue&type=template&id=e98a6df6&scoped=true");
/* harmony import */ var _CONVENTION_CREDIT_AMORTISSAGE_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CONVENTION_CREDIT_AMORTISSAGE.vue?vue&type=script&lang=js */ "./resources/js/components/offview/bank/afg/memo/conventions/en/CONVENTION_CREDIT_AMORTISSAGE.vue?vue&type=script&lang=js");
/* harmony import */ var _CONVENTION_CREDIT_AMORTISSAGE_vue_vue_type_style_index_0_id_e98a6df6_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CONVENTION_CREDIT_AMORTISSAGE.vue?vue&type=style&index=0&id=e98a6df6&scoped=true&lang=css */ "./resources/js/components/offview/bank/afg/memo/conventions/en/CONVENTION_CREDIT_AMORTISSAGE.vue?vue&type=style&index=0&id=e98a6df6&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _CONVENTION_CREDIT_AMORTISSAGE_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _CONVENTION_CREDIT_AMORTISSAGE_vue_vue_type_template_id_e98a6df6_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _CONVENTION_CREDIT_AMORTISSAGE_vue_vue_type_template_id_e98a6df6_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "e98a6df6",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/offview/bank/afg/memo/conventions/en/CONVENTION_CREDIT_AMORTISSAGE.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/offview/bank/afg/memo/conventions/en/CONVENTION_CREDIT_AMORTISSAGE.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************!*\
  !*** ./resources/js/components/offview/bank/afg/memo/conventions/en/CONVENTION_CREDIT_AMORTISSAGE.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CONVENTION_CREDIT_AMORTISSAGE_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CONVENTION_CREDIT_AMORTISSAGE.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/conventions/en/CONVENTION_CREDIT_AMORTISSAGE.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CONVENTION_CREDIT_AMORTISSAGE_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/offview/bank/afg/memo/conventions/en/CONVENTION_CREDIT_AMORTISSAGE.vue?vue&type=style&index=0&id=e98a6df6&scoped=true&lang=css":
/*!****************************************************************************************************************************************************************!*\
  !*** ./resources/js/components/offview/bank/afg/memo/conventions/en/CONVENTION_CREDIT_AMORTISSAGE.vue?vue&type=style&index=0&id=e98a6df6&scoped=true&lang=css ***!
  \****************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CONVENTION_CREDIT_AMORTISSAGE_vue_vue_type_style_index_0_id_e98a6df6_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CONVENTION_CREDIT_AMORTISSAGE.vue?vue&type=style&index=0&id=e98a6df6&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/conventions/en/CONVENTION_CREDIT_AMORTISSAGE.vue?vue&type=style&index=0&id=e98a6df6&scoped=true&lang=css");


/***/ }),

/***/ "./resources/js/components/offview/bank/afg/memo/conventions/en/CONVENTION_CREDIT_AMORTISSAGE.vue?vue&type=template&id=e98a6df6&scoped=true":
/*!**************************************************************************************************************************************************!*\
  !*** ./resources/js/components/offview/bank/afg/memo/conventions/en/CONVENTION_CREDIT_AMORTISSAGE.vue?vue&type=template&id=e98a6df6&scoped=true ***!
  \**************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CONVENTION_CREDIT_AMORTISSAGE_vue_vue_type_template_id_e98a6df6_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CONVENTION_CREDIT_AMORTISSAGE_vue_vue_type_template_id_e98a6df6_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CONVENTION_CREDIT_AMORTISSAGE_vue_vue_type_template_id_e98a6df6_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CONVENTION_CREDIT_AMORTISSAGE.vue?vue&type=template&id=e98a6df6&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/conventions/en/CONVENTION_CREDIT_AMORTISSAGE.vue?vue&type=template&id=e98a6df6&scoped=true");


/***/ })

}]);