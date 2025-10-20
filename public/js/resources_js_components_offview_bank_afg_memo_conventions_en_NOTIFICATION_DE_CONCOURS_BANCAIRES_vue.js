(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_offview_bank_afg_memo_conventions_en_NOTIFICATION_DE_CONCOURS_BANCAIRES_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/conventions/en/NOTIFICATION_DE_CONCOURS_BANCAIRES.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/conventions/en/NOTIFICATION_DE_CONCOURS_BANCAIRES.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_ebapis_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../services/ebapis.service */ "./resources/js/services/ebapis.service.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../services/auth.service */ "./resources/js/services/auth.service.js");
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
/* harmony import */ var qrcode_generator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! qrcode-generator */ "./node_modules/qrcode-generator/qrcode.js");
/* harmony import */ var qrcode_generator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(qrcode_generator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! crypto-js */ "./node_modules/crypto-js/index.js");
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _html2canvas__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../html2canvas */ "./resources/js/html2canvas.js");
/* harmony import */ var _html2canvas__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_html2canvas__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jspdf */ "./node_modules/jspdf/dist/jspdf.es.min.js");
/* harmony import */ var _services_afg_f8_data_extractor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../services/afg/f8-data-extractor */ "./resources/js/services/afg/f8-data-extractor.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
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
  name: "LettreNotificationEntreprise",
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
    annexe: {
      type: Object,
      "default": function _default() {
        return {};
      }
    },
    authcheckUsr: {
      type: Object
    },
    facilite_uuid: {
      type: String
    }
  },
  components: {
    PlusIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_8__.PlusIcon,
    TrashIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_8__.TrashIcon
  },
  created: function created() {
    if (this.authenticatedUser.filiale) {
      if (this.authenticatedUser.filiale == "AFGB ML") {
        this.formData.preteur = "AFG BANK MALI";
      }
      if (this.authenticatedUser.filiale == "AFGB CM") {
        this.formData.preteur = "AFG BANK CAMEROUN";
      }
    }
  },
  data: function data() {
    var _this$annexe;
    return {
      ebapisHost: _services_ebapis_service__WEBPACK_IMPORTED_MODULE_0__["default"].host,
      fonction: "",
      debounce: null,
      on_saving: false,
      first_time: true,
      frais_credits: [],
      mask_telephone: "",
      res: 0,
      taxe: 0,
      check_fields: {},
      listGaranties: [{
        name: "Une demande de financement",
        value: false
      }, {
        name: "Une attestation de service ou contrat de travail ;",
        value: false
      }, {
        name: "Une Attestation de Virement Irrévocable des salaires, régulièrement délivrée par l’employeur ;",
        value: false
      }, {
        name: "Un bulletin individuel d’adhésion au contrat d’Assurance-invalidité décès Groupe Emprunteur, dûment approuvé par l’Assureur",
        value: false
      }, {
        name: "Un formulaire d’adhésion au fonds de garantie dûment souscrit par  l’Emprunteur ;",
        value: false
      }, {
        name: "",
        value: false
      }],
      formData: {
        facilites_date: "",
        preteur: "",
        emprunteur: "",
        adresse: "",
        principal_dirigeant: "",
        frais_dossier: "",
        garantie_suports: "",
        taux_ttb: "",
        droit_applicable: "",
        tribunaux: "",
        notification_expiration: "",
        convenants_additionnels: "",
        fais_de_dossier: "",
        date: "",
        expire_date: "",
        // directeur: "",
        // directeur_engagement: "",
        // directeur_filiere_metier: "",
        selectedSignatories: [{
          name: "",
          slug: "directeur_filiere_metier",
          selected: true,
          role_uuid: ["qeGxDizueuWrEf9N2Ukv", "pda2zWez20CdA2cBEsHH", "FrUwaxAvAfJFqKn82oxe"]
        }, {
          name: "",
          slug: "directeur_engagement",
          selected: true,
          role_uuid: ['s3eTvnt96zLe9Khbhmfx']
        }, {
          name: "",
          slug: "directeur",
          selected: true,
          role_uuid: ['yqCL4bkXfRFuUhiBtqgX']
        }],
        titre: "",
        ville: "",
        ref: "",
        facilites_sollicitees: [],
        key: "notification_de_concours_bancaires",
        indexSelectionne: this.indexSelectionne,
        annexe_id: (_this$annexe = this.annexe) === null || _this$annexe === void 0 ? void 0 : _this$annexe.id,
        table: "cred_pub_tb_15507",
        autres_conditions_particulieres: "",
        conditions_prealables: "",
        non_respect_bloc_engagement: "",
        nom_signataire: ""
      },
      local_edit_mode: true,
      local_close_edit_mode: true,
      telephones: [],
      build_off: false,
      pdf_process: false,
      meta_parseable: {
        cred_pub_key: this.meta_data["cred_pub_key"],
        tb_name: this.tb_name
      },
      logo: null,
      siege_filiale: null,
      numero_filiale: null,
      mail_filiale: null,
      banque: null,
      abreviation: null,
      capital_social: null,
      siege: null,
      boite_postale: null,
      immatriculation: null,
      devise: null,
      lieu_immatriculation: null,
      date_immatriculation: null,
      f8Data: null,
      f8DataExtractor: _services_afg_f8_data_extractor__WEBPACK_IMPORTED_MODULE_6__["default"],
      load_data: true,
      hovered: null
    };
  },
  computed: {
    bref_produit_eventuellement_souscrits_checked: function bref_produit_eventuellement_souscrits_checked() {
      return Array.isArray(this.bref_produit_eventuellement_souscrits) ? this.bref_produit_eventuellement_souscrits.filter(function (el) {
        return el === null || el === void 0 ? void 0 : el.checked;
      }) : [];
    },
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
    },
    getIndicatif: function getIndicatif() {
      var _this$authcheckUsr;
      var current_filiale = (_this$authcheckUsr = this.authcheckUsr) === null || _this$authcheckUsr === void 0 ? void 0 : _this$authcheckUsr.filiale.replace(" ", "_");
      var list_indicatif = {
        AFG_CIV: "+225",
        AFG_BF: "+226",
        AFG_CG: "+242",
        AFG_GN: "+224",
        AFG_ML: "+223",
        FINL: "+225",
        AFG_SN: "+221",
        AFG_TG: "+228",
        AFG_GB: "+241"
      };
      return list_indicatif[current_filiale] || "";
    },
    totalSiganture: function totalSiganture() {
      return this.formData.selectedSignatories.length;
    },
    signatureAuthorize: function signatureAuthorize() {
      var signatureFiltered = this.formData.selectedSignatories.filter(function (signature) {
        return signature.selected;
      });
      return signatureFiltered === null || signatureFiltered === void 0 ? void 0 : signatureFiltered.length;
    },
    selectedSignatoriesOnly: function selectedSignatoriesOnly() {
      return this.formData.selectedSignatories.filter(function (s) {
        return s.selected;
      });
    }
  },
  mounted: function mounted() {
    var _this = this;
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var _this$dossier_credit;
      var cred_pub_keys;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            // await this.userSession();

            _this.loadRetrieved();
            _this.$on("generate-pdf-process", function (data) {
              _this.pdf_process = data;
            });
            _this.$on("build-off-printable", function () {
              _this.buildOffPrintable();
            });
            EventBus.$on("dossier-updated-dcpp-1", function (data) {
              var _data$avoirs_investis;
              var check = data === null || data === void 0 || (_data$avoirs_investis = data.avoirs_investissements) === null || _data$avoirs_investis === void 0 ? void 0 : _data$avoirs_investis.some(function (el) {
                return !["", null, undefined].includes(el.value);
              });
              if (check) {
                _this.avoirs_investissements = avoirs_investissements.filter(function (el) {
                  return ![0].includes(el.value) && !["", null, undefined].includes(el.label);
                });
              }
            });
            if (_this.authenticatedUser.filiale == "AFGB ML") {
              _this.siege_filiale = "Immeuble M1, rue 286, Hamdallaye ACI 2 000 BP 72, Bamako, MalI";
              _this.numero_filiale = "(+223) 44 98 07 00";
              _this.mail_filiale = "assistance@afgbank.ml";
              _this.banque = "AFG BANK MALI";
              _this.abreviation = _this.authenticatedUser.filiale;
              _this.capital_social = "10 000 060 000";
              _this.siege = "Immeuble M1, rue 286, Hamdallaye ACI 2 000 BP 72, Bamako, MalI";
              _this.boite_postale = "BP 72";
              _this.immatriculation = "Mali";
              _this.devise = "XOF";
              _this.lieu_immatriculation = "MA BKO 2007 B 1183";
              _this.date_immatriculation = "01/01/1999";
              // console.log("this.formData", this.formData.banque);
            } else if (_this.authenticatedUser.filiale == "AFGB CM") {
              _this.siege_filiale = "1112 Boulevard de la Liberté - Akwa Douala, Cameroun";
              _this.numero_filiale = "(+237) 233 50 99 00";
              _this.mail_filiale = "customer.care@afgbank.cm";
              _this.banque = "AFG BANK CAMEROUN";
              _this.abreviation = _this.authenticatedUser.filiale;
              _this.capital_social = "28 853 520 000";
              _this.siege = "1112 Boulevard de la Liberté - Akwa Douala, Cameroun";
              _this.boite_postale = "P.O. Box: 2933 Douala, Cameroun";
              _this.immatriculation = "Cameroun";
              _this.devise = "XAF";
              _this.lieu_immatriculation = "RC/DLA/2008/B/1195";
              _this.date_immatriculation = "19/09/2008";
            }
            cred_pub_keys = _this.determineCredPubTables((_this$dossier_credit = _this.dossier_credit) === null || _this$dossier_credit === void 0 ? void 0 : _this$dossier_credit.applied_templ_name);
            _this.f8Data = _this.f8DataExtractor.getData(_this.dossier_credit, cred_pub_keys[2]);
            _context.next = 9;
            return _this.getAgenceLocation();
          case 9:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }))();
  },
  methods: {
    getAgenceLocation: function getAgenceLocation() {
      var _this2 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var _yield$axios$post, data;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return axios.post("/api/Helpdatabase/get-agence-location", {
                codeagence: _this2.dossier_credit.caf_recorded_file.codeagence
              });
            case 3:
              _yield$axios$post = _context2.sent;
              data = _yield$axios$post.data;
              _this2.formData.ville = data.data;
              _context2.next = 11;
              break;
            case 8:
              _context2.prev = 8;
              _context2.t0 = _context2["catch"](0);
              console.log("Something went wrong");
            case 11:
            case "end":
              return _context2.stop();
          }
        }, _callee2, null, [[0, 8]]);
      }))();
    },
    generateReference: function generateReference(options) {
      var _options$organisation = options.organisationCode,
        organisationCode = _options$organisation === void 0 ? "OC" : _options$organisation,
        _options$departmentCo = options.departmentCode,
        departmentCode = _options$departmentCo === void 0 ? "#NA" : _options$departmentCo,
        _options$documentType = options.documentType,
        documentType = _options$documentType === void 0 ? "DCPP" : _options$documentType,
        _options$location = options.location,
        location = _options$location === void 0 ? "#NA" : _options$location,
        _options$sequenceNumb = options.sequenceNumber,
        sequenceNumber = _options$sequenceNumb === void 0 ? "#NA" : _options$sequenceNumb,
        _options$date = options.date,
        date = _options$date === void 0 ? "#NA" : _options$date;

      // Assemblage de la référence
      return "".concat(organisationCode, "/").concat(departmentCode, "/").concat(documentType, "/").concat(location, "/").concat(sequenceNumber, "/").concat(date);
    },
    extraireTroisDerniersChiffres: function extraireTroisDerniersChiffres(suite) {
      var parties = suite.split("-");
      var dernierePartie = parties[parties.length - 1];
      return dernierePartie.slice(-3);
    },
    extraireMoisAnnee: function extraireMoisAnnee(suite) {
      var parties = suite.split("-");
      if (parties.length >= 5) {
        return "".concat(parties[3], "-").concat(parties[4]);
      }
      return null;
    },
    allGarantie: function allGarantie() {
      var _this$f8Data, _this$f8Data2;
      return [].concat(_toConsumableArray(((_this$f8Data = this.f8Data) === null || _this$f8Data === void 0 ? void 0 : _this$f8Data.newLinesgarantiesGenerales) || []), _toConsumableArray(((_this$f8Data2 = this.f8Data) === null || _this$f8Data2 === void 0 ? void 0 : _this$f8Data2.newLinesgarantiesSpecifiques) || []));
    },
    reorderIndex: function reorderIndex(indexKey) {
      var backups = [];
      for (var _i2 = 0, _Object$entries2 = Object.entries(this.check_fields); _i2 < _Object$entries2.length; _i2++) {
        var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i2], 2),
          key = _Object$entries2$_i[0],
          value = _Object$entries2$_i[1];
        var k = key.split("_");
        if (key.indexOf("_") !== -1 && k[0] === indexKey) {
          backups.push(value);
          delete this.check_fields[key];
        }
      }
      if (backups.length > 0) {
        for (var i = 0; i < backups.length; i++) {
          this.$set(this.check_fields, indexKey + "_" + i, backups[i]);
          // this.check_fields_emprunteur[indexKey + "_" + i] = backups[i];
        }
      }
      this.handleInput();
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
    setEditMode: function setEditMode() {
      var _this3 = this;
      this.$emit("edit-mode");
      this.local_edit_mode = false;
      if (!this.on_saving) {
        this.local_edit_mode = true;
      }
      this.build_off = false;
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
    formDataVars: function formDataVars(event) {
      this.formData[event[0]] = event[1];
      this.handleInput();
    },
    handleInput: function handleInput() {},
    loadRetrieved: function loadRetrieved() {
      var _this$meta_data$dossi, _dossierCredit$cred_p, _dossierCredit$cred_p2, _tb_8$nouvelles_ligne, _dossierCredit$caf_re, _this$authcheckUsr2, _dossierCredit$caf_re2, _ref, _dossierCredit$numero, _this$extraireTroisDe, _this$authcheckUsr3, _this$generateReferen;
      var dossierCredit = (_this$meta_data$dossi = this.meta_data["dossier_credit"]) !== null && _this$meta_data$dossi !== void 0 ? _this$meta_data$dossi : {};
      var ficheKey = "notification_de_concours_bancaires";
      var fiche = (_dossierCredit$cred_p = dossierCredit['cred_pub_tb_15507']) === null || _dossierCredit$cred_p === void 0 || (_dossierCredit$cred_p = _dossierCredit$cred_p[ficheKey]) === null || _dossierCredit$cred_p === void 0 ? void 0 : _dossierCredit$cred_p[this.indexSelectionne];
      var tb1 = dossierCredit["cred_pub_tb_00"];
      var tb_2 = dossierCredit["cred_pub_tb_1"];
      var tb_3 = dossierCredit["cred_pub_tb_1"];
      var tb_8 = dossierCredit["cred_pub_tb_8"];
      var workflow = dossierCredit["pub_workflow"];
      console.log('workflow', workflow);
      var notification_de_concours_bancaires = (_dossierCredit$cred_p2 = dossierCredit['cred_pub_tb_15507']) === null || _dossierCredit$cred_p2 === void 0 ? void 0 : _dossierCredit$cred_p2["notification_de_concours_bancaires"];
      // console.log(workflow.filter(obj => obj.responsible_role_uuid ==="s3eTvnt96zLe9Khbhmfx")[0].responsible)

      this.formData.conditions_prealables = this.getDefaultConditionsPrealables();
      this.formData.autres_conditions_particulieres = this.getDefaultAutresConditions();
      this.formData.non_respect_bloc_engagement = this.getListeRemiseEnCause();
      if (((_tb_8$nouvelles_ligne = tb_8["nouvelles_lignes_signature"]) === null || _tb_8$nouvelles_ligne === void 0 ? void 0 : _tb_8$nouvelles_ligne.length) > 0) {
        var facilites = tb_8["nouvelles_lignes_signature"].filter(function (obj) {
          return obj.montant !== 0;
        });
        var facilites2 = tb_8["nouvelles_lignes_caisse"].filter(function (obj) {
          return obj.montant !== 0;
        });
        var faciliteFull = facilites.concat(facilites2);
        // console.log("faciliteFull", faciliteFull);

        this.formData.facilites_sollicitees = faciliteFull;
        // this.formData.facilites_sollicitees = faciliteFull.filter((obj) => obj.id == this.facilite_uuid);
        this.formData.facilites_date = this.formatDate(dossierCredit.created_at);
        this.formData.emprunteur = tb1 === null || tb1 === void 0 ? void 0 : tb1.denomination_client;
        this.formData.principal_dirigeant = tb1 === null || tb1 === void 0 ? void 0 : tb1.principal_dirigeant;
        this.formData.adresse = tb1 === null || tb1 === void 0 ? void 0 : tb1.adresse;
        var date = new Date();
        this.formData.date = date.toISOString().split('T')[0];
        this.formData.selectedSignatories.forEach(function (signature) {
          var _workflow$filter$0$re;
          var element = signature;
          element.name = (_workflow$filter$0$re = workflow.filter(function (obj) {
            return element.role_uuid.includes(obj.responsible_role_uuid);
          })[0].responsible) !== null && _workflow$filter$0$re !== void 0 ? _workflow$filter$0$re : '';
        });

        // this.formData.directeur_engagement = workflow.filter(
        //     (obj) =>
        //         obj.responsible_role_uuid === "s3eTvnt96zLe9Khbhmfx"
        // )[0].responsible;
        // this.formData.directeur = workflow.filter(
        //     (obj) =>
        //         obj.responsible_role_uuid === "yqCL4bkXfRFuUhiBtqgX"
        // )[0].responsible;
        // this.formData.directeur_filiere_metier = workflow.filter(
        //     (obj) =>
        //         [
        //             "qeGxDizueuWrEf9N2Ukv",
        //             "pda2zWez20CdA2cBEsHH",
        //             "FrUwaxAvAfJFqKn82oxe",
        //         ].includes(obj.responsible_role_uuid)
        // )[0].responsible;
      }
      if (notification_de_concours_bancaires !== undefined && notification_de_concours_bancaires.length > 0) {
        var _notification_de_conc, _notification_de_conc2, _notification_de_conc3, _notification_de_conc4;
        this.formData.taux_ttb = notification_de_concours_bancaires[this.indexSelectionne].taux_ttb;
        this.formData.frais_dossier = notification_de_concours_bancaires[this.indexSelectionne].frais_dossier;
        this.formData.convenants_additionnels = notification_de_concours_bancaires[this.indexSelectionne].convenants_additionnels;
        this.formData.droit_applicable = notification_de_concours_bancaires[this.indexSelectionne].droit_applicable;
        this.formData.tribunaux = notification_de_concours_bancaires[this.indexSelectionne].tribunaux;
        this.formData.expire_date = notification_de_concours_bancaires[this.indexSelectionne].expire_date;
        this.formData.ville = notification_de_concours_bancaires[this.indexSelectionne].ville;
        this.formData.titre = notification_de_concours_bancaires[this.indexSelectionne].titre;
        this.formData.facilites_sollicitees = (_notification_de_conc = notification_de_concours_bancaires[this.indexSelectionne]) === null || _notification_de_conc === void 0 ? void 0 : _notification_de_conc.facilites_sollicitees;
        this.formData.conditions_prealables = (_notification_de_conc2 = notification_de_concours_bancaires[this.indexSelectionne]) === null || _notification_de_conc2 === void 0 ? void 0 : _notification_de_conc2.conditions_prealables;
        this.formData.autres_conditions_particulieres = (_notification_de_conc3 = notification_de_concours_bancaires[this.indexSelectionne]) === null || _notification_de_conc3 === void 0 ? void 0 : _notification_de_conc3.autres_conditions_particulieres;
        this.formData.non_respect_bloc_engagement = (_notification_de_conc4 = notification_de_concours_bancaires[this.indexSelectionne]) === null || _notification_de_conc4 === void 0 ? void 0 : _notification_de_conc4.non_respect_bloc_engagement;
      }
      if (!dossierCredit[ficheKey]) {
        this.check_fields = _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, this.var_1), this.var_3), this.var_5), this.var_6);
      } else if (fiche !== null && fiche !== void 0 && fiche.check_fields) {
        this.check_fields = fiche.check_fields;
      }

      // Section: Indicatif CAF
      var indicatif = (_dossierCredit$caf_re = dossierCredit.caf_recorded_file) === null || _dossierCredit$caf_re === void 0 ? void 0 : _dossierCredit$caf_re.indicatif;
      if (indicatif) {
        this.mask_telephone = "+".concat(indicatif, " ## ## ### ###");
        this.formData.indicatif_telephone = "+".concat(indicatif);
      }

      // console.log("this.formData",this.authcheckUsr?.filiale?.trim())
      var BCITY = "".concat((_this$authcheckUsr2 = this.authcheckUsr) === null || _this$authcheckUsr2 === void 0 || (_this$authcheckUsr2 = _this$authcheckUsr2.filiale) === null || _this$authcheckUsr2 === void 0 || (_this$authcheckUsr2 = _this$authcheckUsr2.split(" ")) === null || _this$authcheckUsr2 === void 0 ? void 0 : _this$authcheckUsr2[0]);
      var agence = dossierCredit === null || dossierCredit === void 0 || (_dossierCredit$caf_re2 = dossierCredit.caf_recorded_file) === null || _dossierCredit$caf_re2 === void 0 ? void 0 : _dossierCredit$caf_re2.num_agence;
      var numdoss = (_ref = (_dossierCredit$numero = dossierCredit === null || dossierCredit === void 0 ? void 0 : dossierCredit.numero_dossier) !== null && _dossierCredit$numero !== void 0 ? _dossierCredit$numero : doss_name) !== null && _ref !== void 0 ? _ref : "";
      var sequenceNumber = (_this$extraireTroisDe = this.extraireTroisDerniersChiffres(numdoss)) !== null && _this$extraireTroisDe !== void 0 ? _this$extraireTroisDe : (_this$authcheckUsr3 = this.authcheckUsr) === null || _this$authcheckUsr3 === void 0 ? void 0 : _this$authcheckUsr3.agence_number;
      var DATE_CREATION = this.extraireMoisAnnee(numdoss);
      var options = {
        departmentCode: BCITY,
        sequenceNumber: sequenceNumber,
        location: agence,
        date: DATE_CREATION
      };
      this.formData.ref = (_this$generateReferen = this.generateReference(options)) !== null && _this$generateReferen !== void 0 ? _this$generateReferen : dossierCredit === null || dossierCredit === void 0 ? void 0 : dossierCredit["numero_dossier"];
      this.load_data = false;
    },
    truncateString: function truncateString(str, maxLength) {
      if (!str) return "";
      return str.length > maxLength ? str.substring(0, maxLength - 3) + "..." : str;
    },
    send2Backend: function send2Backend(newVal) {
      var _this$dossier_credit2,
        _this4 = this;
      this.on_saving = true;
      this.$emit("autosaving");
      this.$axios.post(this.ebapisHost + "creditbuilder/api/v1/redaction-fiche-annexe/", {
        cred_pub_key: (_this$dossier_credit2 = this.dossier_credit) === null || _this$dossier_credit2 === void 0 ? void 0 : _this$dossier_credit2.cred_pub_key,
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
              conventionName = (_this5$annexe = _this5.annexe) === null || _this5$annexe === void 0 ? void 0 : _this5$annexe.type_facilite.trim().replace(/\s+/g, "_").toLowerCase();
              filename = "conversation de concours bancaires/ ".concat(conventionName) + ".pdf";
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
              _this5.pdf_process = false;
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
      setTimeout(function () {
        EventBus.$emit("data-extra-file-explorer", {
          name: "Notification {(*)}concours_bancaire_" + index + "_" + _this6.$route.params.templateId,
          is_auto: true
        });
      }, 1000);
    },
    buildOffPrintable: function buildOffPrintable() {
      var _arguments = arguments,
        _this7 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        var _this7$authcheckUsr;
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
              if ((_this7$authcheckUsr = _this7.authcheckUsr) !== null && _this7$authcheckUsr !== void 0 && _this7$authcheckUsr.logo) {
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
                footer.innerHTML = "\n                    <strong>".concat(_this7.banque, "</strong><br>\n                    Si\xE8ge social : ").concat(_this7.siege, ", B.P. : ").concat(_this7.boite_postale, ", T\xE9l : ").concat(_this7.numero_filiale, " |\n                    SA au capital social de : ").concat(_this7.capital_social, " ").concat(_this7.devise, " |\n                    R.C N\xB0 DLA/2008/B/1195 | N\xB0 Contrib M0 608 000 250 28 W | Agr\xE9ment N\xB0 00000 322/MINFI du 06 juillet 2015 | www.afgbank.cm\n                    ");
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
                  var _this7$authcheckUsr2;
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
                  if (pageCounter === 1 && (_this7$authcheckUsr2 = _this7.authcheckUsr) !== null && _this7$authcheckUsr2 !== void 0 && _this7$authcheckUsr2.logo) {
                    var _this7$authcheckUsr3;
                    var logoImg = document.createElement("img");
                    logoImg.src = "/images/".concat((_this7$authcheckUsr3 = _this7.authcheckUsr) === null || _this7$authcheckUsr3 === void 0 ? void 0 : _this7$authcheckUsr3.logo);
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
                qrCode = _this7.generateQRCode(100);
                qrCode.style.position = "absolute";
                qrCode.style.right = "".concat(PADDING / 2, "px");
                qrCode.style.bottom = "".concat(FOOTER_HEIGHT - 50, "px");
                currentPage.appendChild(qrCode);
                currentPage.appendChild(createFooter());
                printableContainer.appendChild(currentPage);
              }
              document.querySelector("#preloader-content").textContent = "";
              document.querySelector("#preloader-content").remove();
              _this7.build_off = true;
            case 39:
            case "end":
              return _context4.stop();
          }
        }, _callee4);
      }))();
    },
    generateQRCode: function generateQRCode() {
      var _this$dossier_credit3, _this$dossier_credit4, _this$authenticatedUs, _this$authenticatedUs2, _this$authenticatedUs3, _this$dossier_credit5;
      var size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 100;
      var MIX_APP_KEY = "base64:gdjlPSs3+sKaDi+/SNwOI9pjIE/c9dlYM78gSikIAjY=";
      var secretKey = MIX_APP_KEY.replace("base64:", "");

      // construction de data
      var payload = {
        num_doss: (_this$dossier_credit3 = this.dossier_credit) === null || _this$dossier_credit3 === void 0 ? void 0 : _this$dossier_credit3.numero_dossier,
        cred_pub_key: (_this$dossier_credit4 = this.dossier_credit) === null || _this$dossier_credit4 === void 0 ? void 0 : _this$dossier_credit4.cred_pub_key,
        user: {
          name: (_this$authenticatedUs = this.authenticatedUser) === null || _this$authenticatedUs === void 0 ? void 0 : _this$authenticatedUs.name,
          role: (_this$authenticatedUs2 = this.authenticatedUser) === null || _this$authenticatedUs2 === void 0 ? void 0 : _this$authenticatedUs2.role[0].display_name,
          email: (_this$authenticatedUs3 = this.authenticatedUser) === null || _this$authenticatedUs3 === void 0 ? void 0 : _this$authenticatedUs3.email
        },
        client: (_this$dossier_credit5 = this.dossier_credit) === null || _this$dossier_credit5 === void 0 || (_this$dossier_credit5 = _this$dossier_credit5.client_core_banking) === null || _this$dossier_credit5 === void 0 ? void 0 : _this$dossier_credit5.name
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
    encryptData: function encryptData(data, secretKey) {
      return crypto_js__WEBPACK_IMPORTED_MODULE_3___default().AES.encrypt(JSON.stringify(data), secretKey).toString();
    },
    calculateTotalMonthlyRevenue: function calculateTotalMonthlyRevenue() {
      if (!Array.isArray(this.revenus)) return 0;
      return this.revenus.reduce(function (total, revenu) {
        // Vérifier la validité de periodicite
        if (!revenu || !revenu.periodicite) return total;
        var monthlyAmount = 0;
        var periodicite = revenu.periodicite.toLowerCase();
        switch (periodicite) {
          case "mensuelle":
            monthlyAmount = revenu.mensualite;
            break;
          case "bimensuelle":
            monthlyAmount = revenu.mensualite * 2;
            break;
          case "trimestrielle":
            monthlyAmount = revenu.mensualite / 3;
            break;
          case "annuelle":
            monthlyAmount = revenu.mensualite / 12;
            break;
          default:
            monthlyAmount = revenu.mensualite;
        }
        if (revenu.checked && revenu.eligible) {
          return total + (monthlyAmount || 0);
        }
        return total;
      }, 0);
    },
    calculateEmploymentDuration: function calculateEmploymentDuration() {
      if (!this.formData.date_embauche) return "Non défini";
      var hireDate = new Date(this.formData.date_embauche);
      var today = new Date();

      // Calculer la différence en millisecondes
      var diffTime = today - hireDate;

      // Calculer le nombre total de mois
      var totalMonths = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 30.42));

      // Extraire les années et les mois
      var years = Math.floor(totalMonths / 12);
      var months = totalMonths % 12;

      // Construire la chaîne de résultat
      var result = "";
      if (years > 0) result += "".concat(years, " an").concat(years > 1 ? "s" : "");
      if (months > 0) result += "".concat(years > 0 ? " " : "").concat(months, " mois");
      return result || "Moins d'un mois";
    },
    filterValidFacilites: function filterValidFacilites() {
      if (!Array.isArray(this.facilites_existantes)) {
        this.facilites_existantes = [];
        return;
      }
      this.facilites_existantes = this.facilites_existantes.filter(function (facilite) {
        var typeFacilite = facilite === null || facilite === void 0 ? void 0 : facilite.type_facilite;
        return !["", null, undefined].includes(typeFacilite);
      });
    },
    updateDateOuvertureCompte: function updateDateOuvertureCompte() {
      var _this8 = this;
      var selectedCompte = this.comptes.find(function (compte) {
        return compte.numero_compte === _this8.formData.num_compte;
      });
      if (selectedCompte) {
        this.formData.date_ouverture_compte = selectedCompte.date_ouverture_compte || "";
      } else {
        this.formData.date_ouverture_compte = "";
      }
      this.handleInput();
    },
    addAvoirInvestissement: function addAvoirInvestissement() {
      this.avoirs_investissements.push({
        description: ""
      });
      var index = this.avoirs_investissements.length - 1;
      var field = "avoir_" + index;
      this.$set(this.check_fields, field, null);
      this.var_3[field] = null;
      this.handleInput();
    },
    removeAvoirInvestissement: function removeAvoirInvestissement(index) {
      var _this9 = this;
      this.avoirs_investissements.splice(index, 1);
      // Supprimer le champ de validation correspondant
      var field = "avoir_" + index;
      this.$delete(this.check_fields, field);
      this.$delete(this.check_fields_emprunteur, field);
      // Réindexer les champs de validation pour les avoirs restants
      this.avoirs_investissements.forEach(function (_, i) {
        var oldField = "avoir_" + (i + 1);
        var newField = "avoir_" + i;
        if (_this9.check_fields[oldField]) {
          _this9.$set(_this9.check_fields, newField, _this9.check_fields[oldField]);
          _this9.$delete(_this9.check_fields, oldField);
        }
      });
      this.handleInput();
    },
    formatNumber: function formatNumber(number) {
      return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    },
    addFacilite: function addFacilite() {
      // Ajouter une nouvelle facilité avec des valeurs par défaut
      this.formData.facilites_sollicitees.push({
        ligne: '',
        objet: '',
        echeance: '',
        duree: '',
        taux: '',
        montant: 0,
        id: this.generateUniqueId(),
        is_new: true
      });
      this.handleInput();
    },
    removeFacilite: function removeFacilite(index) {
      // Supprimer une facilité à l'index donné
      if (this.formData.facilites_sollicitees.length > 1) {
        this.formData.facilites_sollicitees.splice(index, 1);
        this.handleInput();
      }
    },
    updateFaciliteField: function updateFaciliteField(index, field, value) {
      // Mettre à jour un champ spécifique d'une facilité
      if (this.formData.facilites_sollicitees[index]) {
        this.formData.facilites_sollicitees[index][field] = value;
        this.handleInput();
      }
    },
    generateUniqueId: function generateUniqueId() {
      // Générer un ID unique simple (ou utilisez uuid si disponible)
      return Date.now().toString(36) + Math.random().toString(36).substr(2);
    },
    getDefaultConditionsPrealables: function getDefaultConditionsPrealables() {
      return "\n                <p>\n                    Le pr\xE9sent document, m\xEAme accept\xE9 par le Client,\n                    constitue les termes et conditions des facilit\xE9s\n                    envisag\xE9es.\n                </p>\n                <p>\n                    Toute mise en place est conditionn\xE9e de fa\xE7on\n                    cumulative \xE0 :\n                </p>\n                <ul style=\"list-style-type: disc; padding-left: 20px;\">\n                    <li>\n                        L'accus\xE9 de r\xE9ception de la copie dument\n                        approuv\xE9e de la pr\xE9sente lettre de\n                        Notification ;\n                    </li>\n                    <li>\n                        La conclusion d'une documentation\n                        contractuelle satisfaisante (convention de\n                        cr\xE9dit ou convention de compte courant) ;\n                    </li>\n                    <li>\n                        La fourniture de tous les documents\n                        juridiques demand\xE9s dans le cadre de la\n                        documentation contractuelle ;\n                    </li>\n                    <li>\n                        La constitution pr\xE9alable, effective, et la\n                        mise \xE0 disposition de la Banque des\n                        garanties requises suscit\xE9es ; le respect de\n                        tous les covenants suscit\xE9es ;\n                    </li>\n                    <li>\n                        La signature de tous les documents\n                        juridiques et du Billet \xE0 ordre (le cas\n                        \xE9ch\xE9ant).\n                    </li>\n                </ul>\n            ";
    },
    getDefaultAutresConditions: function getDefaultAutresConditions() {
      return "\n                <ul style=\"list-style-type: disc; padding-left: 20px;\">\n                    <li>\n                        Le Taux de base bancaire (TBB) \xE0 la date de\n                        signature de la pr\xE9sente est de\n                        <strong>".concat(this.formData.taux_ttb || '__________', "</strong>\n                        HT\n                    </li>\n                    <li>\n                        Le Taux d'int\xE9r\xEAt est sujet aux variations\n                        des conditions de march\xE9\n                    </li>\n                    <li>\n                        La mise en place des pr\xE9sentes facilit\xE9s,\n                        apr\xE8s r\xE9alisation des conditions pr\xE9alables,\n                        est subordonn\xE9e \xE0 la disponibilit\xE9 de la\n                        liquidit\xE9 au niveau de la Banque\n                    </li>\n                    <li>\n                        Tous imp\xF4ts, taxes, frais et droits pr\xE9sents\n                        ou \xE0 venir en relation avec la convention de\n                        facilit\xE9 \xE0 intervenir ou son ex\xE9cution ou la\n                        constitution des garanties, seront\n                        uniquement \xE0 la charge de l'Emprunteur.\n                    </li>\n                    <li>\n                        L'Emprunteur autorise la Banque \xE0 d\xE9biter\n                        son compte courant des frais n\xE9cessaires \xE0\n                        l'accomplissement des formalit\xE9s\n                        d'enregistrement et d'inscription des\n                        s\xFBret\xE9s r\xE9elles mobili\xE8res au RCCM\n                    </li>\n                    <li>\n                        La Banque se r\xE9serve le droit de remettre en\n                        cause ces facilit\xE9s avant leurs termes et\n                        sans pr\xE9avis dans les cas repris ci-dessous\n                        (*) ;\n                    </li>\n                    <li>\n                        Droit applicable :\n                        <strong>").concat(this.formData.droit_applicable || '__________', "</strong>\n                        avec attribution exclusive de comp\xE9tence aux\n                        tribunaux de\n                        <strong>").concat(this.formData.tribunaux || '__________', "</strong>.\n                    </li>\n                </ul>\n            ");
    },
    getListeRemiseEnCause: function getListeRemiseEnCause() {
      return "\n                <ol>\n                    <li>Non-respect de l\u2019un des engagements contenus dans la convention de pr\xEAt apr\xE8s sa signature</li>\n                    <li>Utilisation du compte pour des op\xE9rations illicites</li>\n                    <li>Cl\xF4ture du compte courant</li>\n                    <li>Ouverture d\u2019une proc\xE9dure d\u2019apurement collectif du passif</li>\n                    <li>Production et usage de faux document</li>\n                </ol>\n            ";
    },
    toggleSignatory: function toggleSignatory(index) {
      var newSelectedState = !this.formData.selectedSignatories[index].selected;

      // Optional: Prevent deselecting all signatories
      // if (!newSelectedState) {
      //     const selectedCount = this.formData.selectedSignatories.filter(s => s.selected).length;
      //     if (selectedCount <= 1) {
      //         alert('Au moins un signataire doit être sélectionné.');
      //         return;
      //     }
      // }

      this.$set(this.formData.selectedSignatories[index], 'selected', newSelectedState);
      this.handleInput(); // Trigger save to backend
    },
    getSignatoryTitle: function getSignatoryTitle(slug) {
      var titles = {
        directeur_filiere_metier: 'Directeur Filière Métier',
        directeur_engagement: 'Directeur des Engagements',
        directeur: 'Direction Générale'
      };
      return titles[slug] || slug;
    },
    updateFormData: function updateFormData(slug, value) {
      // Sync formData signatory field with selectedSignatories.name
      this.formData[slug] = value;
      this.handleInput(); // Trigger save to backend
    },
    getSignatoryColumnClass: function getSignatoryColumnClass(count) {
      switch (count) {
        case 1:
          return 'col-md-6 offset-md-3';
        // centré
        case 2:
          return 'col-md-6';
        case 3:
          return 'col-md-4';
        case 4:
          return 'col-md-3';
        default:
          return 'col-md-3';
        // plus de 4
      }
    }
  },
  watch: {
    formData: {
      handler: function handler(newVal) {
        var _this0 = this;
        if (!this.first_time) {
          clearTimeout(this.debounce);
          this.debounce = setTimeout(function () {
            _this0.send2Backend(newVal);
          }, 3000);
        } else {
          this.first_time = false;
        }
      },
      deep: true,
      immediate: true
    }
  },
  beforeDestroy: function beforeDestroy() {
    this.$off("build-off-printable");
    this.$off("generate-pdf-process");
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/conventions/en/NOTIFICATION_DE_CONCOURS_BANCAIRES.vue?vue&type=template&id=9f22b8f6&scoped=true":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/conventions/en/NOTIFICATION_DE_CONCOURS_BANCAIRES.vue?vue&type=template&id=9f22b8f6&scoped=true ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", [_c("div", [_vm.load_data ? _c("div", {
    staticClass: "card-body"
  }, [_vm._m(0)]) : _c("div", {
    staticClass: "p-5 position-relative",
    staticStyle: {
      width: "845px",
      margin: "0 auto",
      border: "1px solid #c6c6c6",
      "background-color": "#ffffff",
      "text-align": "justify"
    },
    style: {
      width: !_vm.edit_mode ? "845px" : "84%",
      margin: "0 auto",
      border: "1px solid #c6c6c6",
      backgroundColor: "#ffffff"
      // textAlign: 'justify'
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
  }), _vm._v("\n                    Visualiser\n                ")]) : _c("button", {
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
  }), _vm._v("\n                    Modifier\n                ")]), _vm._v(" "), !_vm.pdf_process ? [!_vm.edit_mode ? _c("button", {
    staticClass: "btn btn-sm m-1 btn mx-2",
    staticStyle: {
      background: "#27ae60",
      color: "white",
      "box-shadow": "rgba(12, 11, 11, 0.39) 0px 0px 2px"
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
  }), _vm._v("\n                        Importer dans le dossier\n                    ")]) : _vm._e(), _vm._v(" "), !_vm.edit_mode ? _c("button", {
    staticClass: "btn btn-sm m-1 btn mx-2",
    staticStyle: {
      background: "#2c3e50",
      color: "white",
      "box-shadow": "rgba(12, 11, 11, 0.39) 0px 0px 2px"
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
  }), _vm._v("\n                        Télécharger le fichier\n                    ")]) : _vm._e()] : _c("div", {
    staticStyle: {
      display: "inline-block"
    }
  }, [_vm._m(1), _vm._v(" "), _c("span", {
    staticStyle: {
      "font-size": "0.9rem !important",
      "margin-left": "5px"
    }
  }, [_vm._v("\n                        Génération du PDF en cours...\n                    ")])])], 2), _vm._v(" "), _c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: !_vm.build_off,
      expression: "!build_off"
    }],
    ref: "contentToCapture",
    attrs: {
      id: "contentToCapture"
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12 p-2 d-flex"
  }, [_vm.edit_mode ? _c("div", {
    staticStyle: {
      "font-style": "italic"
    }
  }, [_vm._v("\n                            Ville\n                            "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formData.ville,
      expression: "formData.ville"
    }],
    staticClass: "form-control",
    staticStyle: {
      "max-width": "200px !important"
    },
    attrs: {
      type: "text"
    },
    domProps: {
      value: _vm.formData.ville
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formData, "ville", $event.target.value);
      }
    }
  }), _vm._v(", le \n                            "), _c("span", {
    staticStyle: {
      display: "inline !important"
    }
  }, [_vm.edit_mode ? _c("date-input", {
    staticStyle: {
      "max-width": "250px !important"
    },
    attrs: {
      value: _vm.formData.date,
      id: "date",
      background: "background: #ffffad;"
    },
    on: {
      input: function input($event) {
        return _vm.formDataVars($event);
      }
    }
  }) : _vm._e()], 1)]) : _c("div", {
    staticStyle: {
      "text-align": "right",
      "font-style": "italic",
      width: "100%",
      display: "block"
    }
  }, [_vm._v("\n                            Ville " + _vm._s(_vm.formData.ville) + ", le\n                            " + _vm._s(_vm._f("formatDate")(_vm.formData.date)) + "\n                        ")])])]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12 mt-4"
  }, [_c("div", {
    staticStyle: {
      "text-align": "right",
      "font-weight": "bold",
      width: "100%",
      display: "block"
    }
  }, [_vm._v("\n                            " + _vm._s(_vm.formData.emprunteur) + "\n                        ")]), _vm._v(" "), _c("div", {
    staticStyle: {
      "text-align": "right",
      width: "100%",
      display: "block"
    }
  }, [_vm._v("\n                            " + _vm._s(_vm.formData.adresse) + "\n                        ")]), _vm._v(" "), _c("div", {
    staticStyle: {
      "text-align": "right",
      "font-style": "italic",
      width: "100%",
      display: "block"
    }
  }, [_vm._v("\n                            A l’attention de\n                            "), _vm.edit_mode ? _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formData.principal_dirigeant,
      expression: "formData.principal_dirigeant"
    }],
    staticClass: "form-control",
    staticStyle: {
      width: "300px"
    },
    attrs: {
      type: "text"
    },
    domProps: {
      value: _vm.formData.principal_dirigeant
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formData, "principal_dirigeant", $event.target.value);
      }
    }
  }) : _c("span", [_c("b", [_vm._v(_vm._s(_vm.formData.principal_dirigeant))])])]), _vm._v(" "), _c("div", [_vm._v("\n                            N/Réf. :\n                            "), _vm.edit_mode ? _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formData.ref,
      expression: "formData.ref"
    }],
    staticClass: "form-control",
    staticStyle: {
      width: "300px"
    },
    attrs: {
      type: "text"
    },
    domProps: {
      value: _vm.formData.ref
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formData, "ref", $event.target.value);
      }
    }
  }) : _c("span", [_vm._v(_vm._s(_vm.formData.ref))])]), _vm._v(" "), _c("div", {
    staticStyle: {
      "text-align": "center",
      "text-transform": "uppercase",
      "font-weight": "bold",
      margin: "15px 0"
    }
  }, [_vm._v("\n                            NOTIFICATION DE CONCOURS BANCAIRES\n                        ")])])]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12 mt-4"
  }, [_c("p", [_vm._v("Monsieur, Madame,")]), _vm._v(" "), _c("p", [_vm._v("\n                            Nous faisons suite à votre demande de concours\n                            en date du\n                            "), _c("b", [_vm._v(_vm._s(_vm.formData.facilites_date))]), _vm._v(" et nous\n                            avons le plaisir de vous informer que notre\n                            Comité de Crédit a marqué son accord pour\n                            l’octroi des facilités dans les termes et\n                            conditions qui suivent :\n                        ")]), _vm._v(" "), _c("span", [_vm._v("\n                            Prêteur: "), _c("b", [_vm._v(_vm._s(_vm.formData.preteur))])]), _c("br"), _vm._v(" "), _c("span", [_vm._v("\n                            Emprunteur: "), _c("b", [_vm._v(_vm._s(_vm.formData.emprunteur))])]), _vm._v(" "), _vm.edit_mode ? _c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-bordered"
  }, [_c("thead", [_c("tr", {
    staticClass: "text-center"
  }, [_vm._m(2), _vm._v(" "), _vm._m(3), _vm._v(" "), _vm._m(4), _vm._v(" "), _vm._m(5), _vm._v(" "), _c("td", {
    staticClass: "th fw-bold"
  }, [_c("button", {
    staticStyle: {
      "background-color": "#2c3e50",
      color: "#ffffff",
      "border-radius": "15%",
      border: "none",
      "font-size": "16px"
    },
    attrs: {
      type: "button",
      title: "Ajouter une facilité"
    },
    on: {
      click: function click($event) {
        return _vm.addFacilite();
      }
    }
  }, [_c("plus-icon", {
    staticClass: "custom-class",
    attrs: {
      size: "21"
    }
  })], 1)])])]), _vm._v(" "), _c("tbody", _vm._l(_vm.formData.facilites_sollicitees, function (el, ind) {
    return _c("tr", {
      key: ind
    }, [_c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: el.ligne,
        expression: "el.ligne"
      }],
      staticClass: "form-control",
      staticStyle: {
        "min-width": "150px !important"
      },
      attrs: {
        type: "text",
        placeholder: "Type de crédit"
      },
      domProps: {
        value: el.ligne
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(el, "ligne", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: el.ligne,
        expression: "el.ligne"
      }],
      staticClass: "form-control",
      staticStyle: {
        "min-width": "150px !important"
      },
      attrs: {
        type: "text",
        placeholder: "Objet du crédit"
      },
      domProps: {
        value: el.ligne
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(el, "ligne", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", [_c("div", {
      staticClass: "d-flex gap-2"
    }, [_c("date-input", {
      attrs: {
        value: el.echeance,
        id: "echeance_" + ind,
        background: "background: #ffffad;"
      },
      on: {
        input: function input($event) {
          return _vm.updateFaciliteField(ind, "echeance", $event[1]);
        }
      }
    }), _vm._v(" "), _c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: el.duree,
        expression: "el.duree"
      }],
      staticClass: "form-control",
      staticStyle: {
        "min-width": "10px !important",
        "max-width": "50px !important"
      },
      attrs: {
        type: "text",
        placeholder: "Durée"
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
    })], 1)]), _vm._v(" "), _c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: el.taux,
        expression: "el.taux"
      }],
      staticClass: "form-control",
      staticStyle: {
        "min-width": "100px !important"
      },
      attrs: {
        type: "number",
        step: "0.01",
        placeholder: "Taux"
      },
      domProps: {
        value: el.taux
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(el, "taux", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", [_c("div", {
      staticClass: "d-flex gap-1"
    }, [el.is_new ? _c("button", {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: _vm.formData.facilites_sollicitees.length > 1,
        expression: "formData.facilites_sollicitees.length > 1"
      }],
      staticStyle: {
        "background-color": "transparent",
        border: "none"
      },
      attrs: {
        type: "button",
        title: "Supprimer cette facilité"
      },
      on: {
        click: function click($event) {
          return _vm.removeFacilite(ind);
        }
      }
    }, [_c("trash-icon", {
      staticClass: "custom-class",
      attrs: {
        size: "21"
      }
    })], 1) : _vm._e()])])]);
  }), 0)])]) : _c("div", [_c("table", {
    staticStyle: {
      width: "100%",
      "border-collapse": "collapse",
      "margin-top": "20px"
    }
  }, [_c("tr", [_c("td", {
    staticStyle: {
      border: "1px solid black",
      padding: "8px",
      "font-weight": "bold"
    }
  }, [_vm._v("\n                                        Prêteur\n                                    ")]), _vm._v(" "), _c("td", {
    staticStyle: {
      border: "1px solid black",
      padding: "8px"
    }
  }, [_vm._v("\n                                        " + _vm._s(_vm.formData.preteur) + "\n                                    ")])]), _vm._v(" "), _c("tr", [_c("td", {
    staticStyle: {
      border: "1px solid black",
      padding: "8px",
      "font-weight": "bold"
    }
  }, [_vm._v("\n                                        Emprunteur\n                                    ")]), _vm._v(" "), _c("td", {
    staticStyle: {
      border: "1px solid black",
      padding: "8px"
    }
  }, [_vm._v("\n                                        " + _vm._s(_vm.formData.emprunteur) + "\n                                    ")])]), _vm._v(" "), _c("tr", [_c("td", {
    staticStyle: {
      border: "1px solid black",
      padding: "8px",
      "font-weight": "bold"
    }
  }, [_vm._v("\n                                        Facilités\n                                    ")]), _vm._v(" "), _c("td", {
    staticStyle: {
      border: "1px solid black",
      padding: "8px"
    }
  }, [_c("table", {
    staticStyle: {
      width: "100%",
      "border-collapse": "collapse"
    }
  }, [_vm._m(6), _vm._v(" "), _c("tbody", _vm._l(_vm.formData.facilites_sollicitees, function (el, ind) {
    return _c("tr", {
      key: ind
    }, [_c("td", {
      staticStyle: {
        border: "1px solid black",
        padding: "5px"
      }
    }, [_vm._v("\n                                                        " + _vm._s(el.ligne) + "\n                                                    ")]), _vm._v(" "), _c("td", {
      staticStyle: {
        border: "1px solid black",
        padding: "5px"
      }
    }, [_vm._v("\n                                                        " + _vm._s(el.objet || el.ligne) + "\n                                                    ")]), _vm._v(" "), _c("td", {
      staticStyle: {
        border: "1px solid black",
        padding: "5px"
      }
    }, [_vm._v("\n                                                        " + _vm._s(_vm._f("formatDate")(el.echeance)) + " / " + _vm._s(el.duree) + "\n                                                    ")]), _vm._v(" "), _c("td", {
      staticStyle: {
        border: "1px solid black",
        padding: "5px"
      }
    }, [_vm._v("\n                                                        " + _vm._s(el.taux) + "%\n                                                    ")])]);
  }), 0)])])])])]), _vm._v(" "), _vm.edit_mode ? _c("span", [_vm._v("\n                            Fais de dossier/ Structuration\n                            "), _c("currency-input2", {
    staticStyle: {
      "min-width": "150px !important"
    },
    attrs: {
      value: _vm.formData.frais_dossier,
      id: "frais_dossier"
    },
    on: {
      input: function input($event) {
        return _vm.formDataVars($event);
      }
    }
  })], 1) : _vm._e(), _vm._v(" "), _vm.edit_mode ? _c("span", [_vm._v("\n                            Convenants additionnels\n                            "), _c("currency-input2", {
    staticStyle: {
      "min-width": "150px !important"
    },
    attrs: {
      value: _vm.formData.convenants_additionnels,
      id: "convenants_additionnels"
    },
    on: {
      input: function input($event) {
        return _vm.formDataVars($event);
      }
    }
  })], 1) : _vm._e()])]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12 mt-4"
  }, [_c("div", {
    staticStyle: {
      "font-weight": "bold"
    }
  }, [_vm._v("\n                            CONDITIONS PRÉALABLES AU DÉCAISSEMENT\n                        ")]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12 mt-4"
  }, [_vm.edit_mode ? _c("div", [_c("vue-editor", {
    attrs: {
      maximum: 2000,
      id: "conditions_prealables"
    },
    on: {
      "update-value": function updateValue($event) {
        return _vm.formDataVars($event);
      }
    },
    model: {
      value: _vm.formData.conditions_prealables,
      callback: function callback($$v) {
        _vm.$set(_vm.formData, "conditions_prealables", $$v);
      },
      expression: "formData.conditions_prealables"
    }
  })], 1) : _c("div", {
    domProps: {
      innerHTML: _vm._s(_vm.formData.conditions_prealables)
    }
  })])])])]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12 mt-4"
  }, [_c("div"), _vm._v(" "), _c("div", {
    staticStyle: {
      "font-weight": "bold"
    }
  }, [_vm._v("\n                            AUTRES CONDITIONS PARTICULIÈRES :\n                        ")]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12 mt-4"
  }, [_vm.edit_mode ? _c("div", [_c("vue-editor", {
    attrs: {
      maximum: 2500,
      id: "autres_conditions_particulieres"
    },
    on: {
      "update-value": function updateValue($event) {
        return _vm.formDataVars($event);
      }
    },
    model: {
      value: _vm.formData.autres_conditions_particulieres,
      callback: function callback($$v) {
        _vm.$set(_vm.formData, "autres_conditions_particulieres", $$v);
      },
      expression: "formData.autres_conditions_particulieres"
    }
  })], 1) : _c("div", {
    domProps: {
      innerHTML: _vm._s(_vm.formData.autres_conditions_particulieres)
    }
  })])])])]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12 mt-4"
  }, [_c("div", {
    staticStyle: {
      "font-weight": "bold"
    }
  }, [_vm._v("VALIDITÉ")]), _vm._v(" "), _c("p", [_vm._v("\n                            Cette offre expirera dans les quinze (15) jours\n                            à compter de la date de notification et nous\n                            vous remercions de bien vouloir accuser\n                            réception de la présente au plus tard le\n                            "), _vm.edit_mode ? _c("date-input", {
    staticStyle: {
      "max-width": "250px !important"
    },
    attrs: {
      value: _vm.formData.expire_date,
      id: "expire_date",
      background: "background: #ffffad;"
    },
    on: {
      input: function input($event) {
        return _vm.formDataVars($event);
      }
    }
  }) : _c("span", [_vm._v(_vm._s(_vm.formData.expire_date))]), _vm._v("\n                            , date à laquelle cette notification deviendra\n                            nulle et non avenue si elle n’est pas acceptée.\n                        ")], 1), _vm._v(" "), _c("p", [_vm._v("\n                            En cas d’acceptation des termes et conditions\n                            des facilités, veuillez nous faire parvenir\n                            votre accord sur ce qui précède, en nous\n                            retournant la copie dûment revêtue de votre\n                            signature, du cachet de votre société, et\n                            précédée de la mention « BON POUR ACCEPTATION ».\n                        ")]), _vm._v(" "), _c("p", [_vm._v("\n                            Nous vous remercions de la confiance que vous\n                            accordez à notre Institution et vous prions de\n                            recevoir, Monsieur, Madame, l’expression de nos\n                            salutations distinguées.\n                        ")]), _vm._v(" "), _c("p"), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12 mt-4"
  }, [_vm.edit_mode ? _c("div", [_c("vue-editor", {
    attrs: {
      maximum: 2500,
      id: "non_respect_bloc_engagement"
    },
    on: {
      "update-value": function updateValue($event) {
        return _vm.formDataVars($event);
      }
    },
    model: {
      value: _vm.formData.non_respect_bloc_engagement,
      callback: function callback($$v) {
        _vm.$set(_vm.formData, "non_respect_bloc_engagement", $$v);
      },
      expression: "formData.non_respect_bloc_engagement"
    }
  })], 1) : _c("div", {
    domProps: {
      innerHTML: _vm._s(_vm.formData.non_respect_bloc_engagement)
    }
  })])]), _vm._v(" "), _c("p")])]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12 mt-4"
  }, [_c("div", {
    staticStyle: {
      "font-weight": "bold",
      "text-align": "center"
    }
  }, [_vm._v("\n                            SIGNATURES AUTORISÉES POUR LE PRÊTEUR "), _vm.edit_mode ? _c("span", [_vm._v("(" + _vm._s(_vm.signatureAuthorize) + " / " + _vm._s(_vm.totalSiganture) + ")")]) : _vm._e()]), _vm._v(" "), _vm.edit_mode ? _c("div", {
    staticStyle: {
      "text-align": "center",
      "font-size": "15px"
    }
  }, [_c("i", [_vm._v("Veuillez cocher les signatures autorisées pour le prêteur.")])]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "row justify-content-center mt-3",
    "class": {
      "text-center": !_vm.edit_mode && _vm.selectedSignatoriesOnly.length === 1
    }
  }, [_vm.edit_mode ? _vm._l(_vm.formData.selectedSignatories, function (signatory, index) {
    return _c("div", {
      key: signatory.slug,
      staticClass: "col-md-4 mb-3"
    }, [_c("div", {
      staticClass: "signatory-card h-100",
      staticStyle: {
        padding: "16px",
        "border-radius": "10px",
        border: "2px solid rgba(128,128,128,0.3)"
      }
    }, [_c("div", {
      staticClass: "d-flex align-items-center gap-2 mb-2"
    }, [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: signatory.selected,
        expression: "signatory.selected"
      }],
      staticClass: "form-check-input me-2",
      attrs: {
        type: "checkbox"
      },
      domProps: {
        checked: Array.isArray(signatory.selected) ? _vm._i(signatory.selected, null) > -1 : signatory.selected
      },
      on: {
        click: function click($event) {
          return _vm.toggleSignatory(index);
        },
        change: function change($event) {
          var $$a = signatory.selected,
            $$el = $event.target,
            $$c = $$el.checked ? true : false;
          if (Array.isArray($$a)) {
            var $$v = null,
              $$i = _vm._i($$a, $$v);
            if ($$el.checked) {
              $$i < 0 && _vm.$set(signatory, "selected", $$a.concat([$$v]));
            } else {
              $$i > -1 && _vm.$set(signatory, "selected", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
            }
          } else {
            _vm.$set(signatory, "selected", $$c);
          }
        }
      }
    }), _vm._v(" "), _c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: signatory.name,
        expression: "signatory.name"
      }],
      staticClass: "form-control",
      attrs: {
        type: "text"
      },
      domProps: {
        value: signatory.name
      },
      on: {
        input: [function ($event) {
          if ($event.target.composing) return;
          _vm.$set(signatory, "name", $event.target.value);
        }, function ($event) {
          return _vm.updateFormData(signatory.slug, $event.target.value);
        }]
      }
    })]), _vm._v(" "), _c("div", {
      staticClass: "text-center text-muted",
      staticStyle: {
        "font-size": "13px"
      }
    }, [_vm._v("\n                                    " + _vm._s(_vm.getSignatoryTitle(signatory.slug)) + "\n                                    ")])])]);
  }) : _vm._l(_vm.selectedSignatoriesOnly, function (signatory, index) {
    return _c("div", {
      key: signatory.slug,
      staticClass: "mb-3",
      "class": _vm.getSignatoryColumnClass(_vm.selectedSignatoriesOnly.length)
    }, [_c("div", {
      staticClass: "signatory-card text-center h-100",
      staticStyle: {
        padding: "16px",
        "border-radius": "10px",
        border: "2px solid rgba(128,128,128,0.3)"
      }
    }, [_c("div", {
      staticClass: "fw-bold mb-2"
    }, [_vm._v("\n                                    " + _vm._s(signatory.name || _vm.formData[signatory.slug] || _vm.getSignatoryTitle(signatory.slug)) + "\n                                    ")]), _vm._v(" "), _c("div", {
      staticClass: "text-muted",
      staticStyle: {
        "font-size": "13px"
      }
    }, [_vm._v("\n                                    " + _vm._s(_vm.getSignatoryTitle(signatory.slug)) + "\n                                    ")])])]);
  })], 2)])]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12 mt-4"
  }, [_c("div", {
    staticStyle: {
      "font-weight": "bold",
      "text-align": "center"
    }
  }, [_vm._v("\n                            SIGNATURE DE L’EMPRUNTEUR\n                        ")]), _vm._v(" "), _c("div", {
    staticStyle: {
      "margin-top": "20px"
    }
  }, [_c("div", [_vm._v("\n                                Nom :\n                                "), _vm.edit_mode ? _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formData.nom_signataire,
      expression: "formData.nom_signataire"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text"
    },
    domProps: {
      value: _vm.formData.nom_signataire
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formData, "nom_signataire", $event.target.value);
      }
    }
  }) : _c("span", [_vm._v(_vm._s(_vm.formData.nom_signataire))])]), _vm._v(" "), _c("div", [_vm._v("\n                                Titre :\n                                "), _vm.edit_mode ? _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formData.titre,
      expression: "formData.titre"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text"
    },
    domProps: {
      value: _vm.formData.titre
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formData, "titre", $event.target.value);
      }
    }
  }) : _c("span", [_vm._v(_vm._s(_vm.formData.titre))])]), _vm._v(" "), _c("div", [_vm._v("\n                                Signature (précédée de la mention\n                                obligatoire + cachet de l’Entreprise) :\n                                "), _c("br"), _c("br"), _vm._v(" "), _c("div", [_vm._v("\n                                    Date :\n                                        "), _vm.edit_mode ? _c("date-input", {
    staticStyle: {
      "max-width": "250px !important"
    },
    attrs: {
      value: _vm.formData.date,
      id: "date",
      background: "background: #ffffad;"
    },
    on: {
      input: function input($event) {
        return _vm.formDataVars($event);
      }
    }
  }) : _c("span", [_vm._v(_vm._s(_vm._f("formatDate")(_vm.formData.date)))]), _vm._v(" "), _c("b")], 1)])])])])])]), _vm._v(" "), !_vm.edit_mode ? _c("div", {
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
  })]) : _vm._e(), _vm._v(" "), !_vm.edit_mode ? _c("div", {
    ref: "contentToPdf",
    staticStyle: {
      "text-align": "justify"
    },
    attrs: {
      id: "printable"
    }
  }) : _vm._e()])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "d-flex justify-content-center text-center align-items-center text-muted py-4"
  }, [_c("div", [_c("span", {
    staticClass: "spinner-border spinner-border",
    staticStyle: {
      "font-size": "1.25rem !important"
    }
  }), _vm._v(" "), _c("h5", {
    staticStyle: {
      "font-size": "1.25rem !important"
    }
  }, [_vm._v("\n                        Chargement des données en cours ... "), _c("br"), _vm._v("\n                        Ceci peut prendre un peu de temps\n                    ")])])]);
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
  return _c("td", {
    staticClass: "th fw-bold"
  }, [_c("label", [_vm._v("Type de credit")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {
    staticClass: "th fw-bold"
  }, [_c("label", [_vm._v("Objets")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {
    staticClass: "th fw-bold"
  }, [_c("label", [_vm._v("Echéances/ Durée")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {
    staticClass: "th fw-bold"
  }, [_c("label", [_vm._v("Tarifications(%)")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("th", {
    staticStyle: {
      border: "1px solid black",
      padding: "5px"
    }
  }, [_vm._v("\n                                                        Type\n                                                    ")]), _vm._v(" "), _c("th", {
    staticStyle: {
      border: "1px solid black",
      padding: "5px"
    }
  }, [_vm._v("\n                                                        Objet\n                                                    ")]), _vm._v(" "), _c("th", {
    staticStyle: {
      border: "1px solid black",
      padding: "5px"
    }
  }, [_vm._v("\n                                                        Échéance / Durée\n                                                    ")]), _vm._v(" "), _c("th", {
    staticStyle: {
      border: "1px solid black",
      padding: "5px"
    }
  }, [_vm._v("\n                                                        Tarification (%)\n                                                    ")])])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/conventions/en/NOTIFICATION_DE_CONCOURS_BANCAIRES.vue?vue&type=style&index=0&id=9f22b8f6&lang=css&scoped=true":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/conventions/en/NOTIFICATION_DE_CONCOURS_BANCAIRES.vue?vue&type=style&index=0&id=9f22b8f6&lang=css&scoped=true ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\nfieldset[data-v-9f22b8f6] {\r\n    border: 1px solid #ddd !important;\r\n    position: relative;\r\n    padding-left: 10px !important;\r\n    width: 100%;\r\n    background-color: #f5f5f5;\r\n    margin-top: 15px;\r\n    min-width: -moz-max-content;\r\n    min-width: max-content;\n}\nlegend[data-v-9f22b8f6] {\r\n    font-weight: bold;\r\n    padding: 4px;\r\n    width: -moz-max-content;\r\n    width: max-content;\r\n    padding: 0 15px;\r\n    font-size: 16px;\r\n    float: none;\r\n    background-color: #ffffff;\r\n    border: 1px solid #ddd;\r\n    border-radius: 4px;\n}\nfieldset[data-v-9f22b8f6] {\r\n    border: 1px solid #ddd !important;\r\n    position: relative;\r\n    padding-left: 10px !important;\r\n    width: 100%;\r\n    background-color: #f5f5f5;\r\n    margin-top: 15px;\n}\nlegend[data-v-9f22b8f6] {\r\n    font-weight: bold;\r\n    padding: 4px;\r\n    width: -moz-max-content;\r\n    width: max-content;\r\n    padding: 0 15px;\r\n    font-size: 16px;\r\n    float: none;\r\n    background-color: #ffffff;\r\n    border: 1px solid #ddd;\r\n    border-radius: 4px;\n}\n.box[data-v-9f22b8f6] {\r\n    border-color: #212529;\r\n    border-style: solid;\r\n    border-width: 1px;\r\n    padding: 10px;\n}\n.actd[data-v-9f22b8f6] {\r\n    border-color: #212529;\r\n    border-style: solid;\r\n    border-width: 1px;\r\n    padding: 10px;\n}\n.pre[data-v-9f22b8f6] {\r\n    font-size: 0.6rem;\n}\n.form-control[data-v-9f22b8f6] {\r\n    display: initial;\r\n    width: initial;\n}\n.paragraph[data-v-9f22b8f6] {\r\n    margin: 20px 0px;\r\n    position: relative;\r\n    padding: 5px;\n}\ninput[data-v-9f22b8f6],\r\nselect[data-v-9f22b8f6] {\r\n    margin: 2px;\r\n    border-color: #34495e;\r\n    color: black;\r\n    font-size: 13px;\r\n    height: 34px;\r\n    font-weight: bold;\r\n    background-color: #ffffad;\r\n    margin-right: 0px;\r\n    min-width: 45px;\r\n    /* border-top-right-radius: 0;\r\n        border-bottom-right-radius: 0; */\r\n    /* border-right: none; */\n}\n.input-group-append[data-v-9f22b8f6] {\r\n    margin: 0 2px;\n}\n.input-group-text-right[data-v-9f22b8f6] {\r\n    border-radius: 0 0.375rem 0.375rem 0;\r\n    margin-left: 0px;\r\n    cursor: pointer;\n}\n.input-group-text-left[data-v-9f22b8f6] {\r\n    border-radius: 0.375rem 0 0 0.375rem;\n}\n.li-convention[data-v-9f22b8f6] {\r\n    list-style-type: disc;\r\n    margin: 0;\r\n    padding: 0;\r\n    margin-left: 20px;\n}\n.input-group-text[data-v-9f22b8f6] {\r\n    font-size: 13px;\r\n    line-height: 1.5;\r\n    height: 34px;\r\n    padding: 0.375rem 0.75rem;\r\n    border: 1px solid #34495e;\r\n    min-width: 45px;\r\n    text-align: center;\r\n    justify-content: center;\r\n    /*margin: 2px;*/\r\n    background-color: #ffffad;\r\n    color: black;\n}\ndate-input[data-v-9f22b8f6] {\r\n    background-color: #ffffad !important;\n}\r\n/* checkbox */\n.checkbox-container .checkbox-input[data-v-9f22b8f6] {\r\n    position: absolute;\r\n    opacity: 0;\r\n    cursor: pointer;\r\n    height: 80%;\r\n    width: 80%;\r\n    top: 0;\r\n    left: 0;\r\n    z-index: 1;\n}\n.checkbox-container[data-v-9f22b8f6] {\r\n    display: block;\r\n    position: relative;\r\n    cursor: pointer;\r\n    -webkit-user-select: none;\r\n       -moz-user-select: none;\r\n            user-select: none;\n}\n.checkbox-container .checkbox-icon-cancel[data-v-9f22b8f6] {\r\n    position: relative;\r\n    top: 0;\r\n    left: 0;\r\n    height: 50px;\r\n    width: 50px;\r\n    transition: all 0.3s;\r\n    font-size: 1.5em;\r\n    color: red;\n}\n.checkbox-container .checkbox-icon-success[data-v-9f22b8f6] {\r\n    position: relative;\r\n    top: 0;\r\n    left: 0;\r\n    height: 50px;\r\n    width: 50px;\r\n    transition: all 0.3s;\r\n    font-size: 1.5em;\r\n    color: green;\n}\r\n\r\n/*.checkbox-container .checkbox-icon-cancel:hover {\r\n        transform: scale(1.1);\r\n    }\r\n\r\n    .checkbox-container .checkbox-icon-success:hover {\r\n        transform: scale(1.1);\r\n    }*/\n.checkbox-container .checkbox-icon-success[data-v-9f22b8f6] {\r\n    display: none;\n}\n.checkbox-container .checkbox-input:checked ~ .checkbox-icon-cancel[data-v-9f22b8f6] {\r\n    display: none;\n}\n.checkbox-container .checkbox-input:checked ~ .checkbox-icon-success[data-v-9f22b8f6] {\r\n    display: contents;\n}\n.valid-section[data-v-9f22b8f6] {\r\n    pointer-events: auto;\r\n    top: 50%;\r\n    transform: translateY(-50%);\r\n    width: -moz-fit-content;\r\n    width: fit-content;\n}\n.st-valide[data-v-9f22b8f6] {\r\n    position: absolute;\r\n    z-index: 99;\r\n    right: -149px;\r\n    top: 10px;\n}\r\n\r\n/*this is the new approach*/\n.position-relative[data-v-9f22b8f6]:has(.valid-section:hover) {\r\n    background: #3498db6f;\n}\n.onAutoSave[data-v-9f22b8f6] {\r\n    cursor: wait !important;\n}\n.onAutoSave > span[data-v-9f22b8f6] {\r\n    pointer-events: none;\r\n    opacity: 0.6;\r\n    cursor: wait !important;\n}\nul[data-v-9f22b8f6],\r\nli[data-v-9f22b8f6] {\r\n    list-style-type: inherit;\n}\n.custom-list[data-v-9f22b8f6] {\r\n    counter-reset: section;\r\n    list-style: none;\r\n    /* Supprime les puces par défaut */\r\n    padding-left: 0;\r\n    /* Enlève l'indentation */\n}\n.custom-list > li[data-v-9f22b8f6] {\r\n    counter-increment: section;\n}\n.custom-list > li[data-v-9f22b8f6]::before {\r\n    content: counter(section) \". \";\r\n    font-weight: bold;\n}\r\n\r\n/* Pour les sous-listes */\n.custom-list > li > ol[data-v-9f22b8f6] {\r\n    counter-reset: subsection;\r\n    list-style: none;\r\n    padding-left: 20px;\n}\n.custom-list > li > ol > li[data-v-9f22b8f6] {\r\n    counter-increment: subsection;\n}\n.custom-list > li > ol > li[data-v-9f22b8f6]::before {\r\n    content: counter(section) \".\" counter(subsection) \" \";\r\n    font-weight: normal;\n}\n.title_[data-v-9f22b8f6] {\r\n    padding: 8px 64px;\n}\nth[data-v-9f22b8f6],\r\ntd[data-v-9f22b8f6] {\r\n    font-size: 13px;\n}\n.table[data-v-9f22b8f6] {\r\n    border-color: unset;\n}\n.vhtml[data-v-9f22b8f6] {\r\n    word-wrap: break-word; /* Casse les mots trop longs */\r\n    overflow-wrap: break-word;\r\n    overflow: hidden; /* Cache tout débordement */\r\n    max-width: 100%; /* Empêche le dépassement horizontal */\n}\n.document-container[data-v-9f22b8f6] {\r\n    position: relative;\n}\n.document-content[data-v-9f22b8f6] {\r\n    width: 100%;\n}\n.page-break[data-v-9f22b8f6] {\r\n    page-break-inside: avoid;\r\n    margin-bottom: 20px;\r\n    position: relative;\r\n    height: 1000px; /* Approximate height to simulate a page */\n}\n.selected-signatory[data-v-9f22b8f6] {\r\n    border: 2px solid #27ae60; /* Green border for selected signatories */\r\n    border-radius: 4px;\r\n    transition: border 0.3s ease;\n}\r\n\r\n/* Ensure inputs in edit mode inherit the green border if selected */\n.selected-signatory input.form-control[data-v-9f22b8f6] {\r\n    border: 2px solid #27ae60;\n}\n.signatory input[type=\"checkbox\"][data-v-9f22b8f6],\r\n.engagement input[type=\"checkbox\"][data-v-9f22b8f6],\r\n.garantie input[type=\"checkbox\"][data-v-9f22b8f6] {\r\n    height: 26px;\r\n    width: 24px;\r\n    margin-right: 5px;\n}\r\n", ""]);
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

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/conventions/en/NOTIFICATION_DE_CONCOURS_BANCAIRES.vue?vue&type=style&index=0&id=9f22b8f6&lang=css&scoped=true":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/conventions/en/NOTIFICATION_DE_CONCOURS_BANCAIRES.vue?vue&type=style&index=0&id=9f22b8f6&lang=css&scoped=true ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NOTIFICATION_DE_CONCOURS_BANCAIRES_vue_vue_type_style_index_0_id_9f22b8f6_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NOTIFICATION_DE_CONCOURS_BANCAIRES.vue?vue&type=style&index=0&id=9f22b8f6&lang=css&scoped=true */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/conventions/en/NOTIFICATION_DE_CONCOURS_BANCAIRES.vue?vue&type=style&index=0&id=9f22b8f6&lang=css&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NOTIFICATION_DE_CONCOURS_BANCAIRES_vue_vue_type_style_index_0_id_9f22b8f6_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NOTIFICATION_DE_CONCOURS_BANCAIRES_vue_vue_type_style_index_0_id_9f22b8f6_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/offview/bank/afg/memo/conventions/en/NOTIFICATION_DE_CONCOURS_BANCAIRES.vue":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/components/offview/bank/afg/memo/conventions/en/NOTIFICATION_DE_CONCOURS_BANCAIRES.vue ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _NOTIFICATION_DE_CONCOURS_BANCAIRES_vue_vue_type_template_id_9f22b8f6_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NOTIFICATION_DE_CONCOURS_BANCAIRES.vue?vue&type=template&id=9f22b8f6&scoped=true */ "./resources/js/components/offview/bank/afg/memo/conventions/en/NOTIFICATION_DE_CONCOURS_BANCAIRES.vue?vue&type=template&id=9f22b8f6&scoped=true");
/* harmony import */ var _NOTIFICATION_DE_CONCOURS_BANCAIRES_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NOTIFICATION_DE_CONCOURS_BANCAIRES.vue?vue&type=script&lang=js */ "./resources/js/components/offview/bank/afg/memo/conventions/en/NOTIFICATION_DE_CONCOURS_BANCAIRES.vue?vue&type=script&lang=js");
/* harmony import */ var _NOTIFICATION_DE_CONCOURS_BANCAIRES_vue_vue_type_style_index_0_id_9f22b8f6_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NOTIFICATION_DE_CONCOURS_BANCAIRES.vue?vue&type=style&index=0&id=9f22b8f6&lang=css&scoped=true */ "./resources/js/components/offview/bank/afg/memo/conventions/en/NOTIFICATION_DE_CONCOURS_BANCAIRES.vue?vue&type=style&index=0&id=9f22b8f6&lang=css&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _NOTIFICATION_DE_CONCOURS_BANCAIRES_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _NOTIFICATION_DE_CONCOURS_BANCAIRES_vue_vue_type_template_id_9f22b8f6_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _NOTIFICATION_DE_CONCOURS_BANCAIRES_vue_vue_type_template_id_9f22b8f6_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "9f22b8f6",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/offview/bank/afg/memo/conventions/en/NOTIFICATION_DE_CONCOURS_BANCAIRES.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/offview/bank/afg/memo/conventions/en/NOTIFICATION_DE_CONCOURS_BANCAIRES.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************!*\
  !*** ./resources/js/components/offview/bank/afg/memo/conventions/en/NOTIFICATION_DE_CONCOURS_BANCAIRES.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NOTIFICATION_DE_CONCOURS_BANCAIRES_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NOTIFICATION_DE_CONCOURS_BANCAIRES.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/conventions/en/NOTIFICATION_DE_CONCOURS_BANCAIRES.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NOTIFICATION_DE_CONCOURS_BANCAIRES_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/offview/bank/afg/memo/conventions/en/NOTIFICATION_DE_CONCOURS_BANCAIRES.vue?vue&type=style&index=0&id=9f22b8f6&lang=css&scoped=true":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./resources/js/components/offview/bank/afg/memo/conventions/en/NOTIFICATION_DE_CONCOURS_BANCAIRES.vue?vue&type=style&index=0&id=9f22b8f6&lang=css&scoped=true ***!
  \*********************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NOTIFICATION_DE_CONCOURS_BANCAIRES_vue_vue_type_style_index_0_id_9f22b8f6_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NOTIFICATION_DE_CONCOURS_BANCAIRES.vue?vue&type=style&index=0&id=9f22b8f6&lang=css&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/conventions/en/NOTIFICATION_DE_CONCOURS_BANCAIRES.vue?vue&type=style&index=0&id=9f22b8f6&lang=css&scoped=true");


/***/ }),

/***/ "./resources/js/components/offview/bank/afg/memo/conventions/en/NOTIFICATION_DE_CONCOURS_BANCAIRES.vue?vue&type=template&id=9f22b8f6&scoped=true":
/*!*******************************************************************************************************************************************************!*\
  !*** ./resources/js/components/offview/bank/afg/memo/conventions/en/NOTIFICATION_DE_CONCOURS_BANCAIRES.vue?vue&type=template&id=9f22b8f6&scoped=true ***!
  \*******************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NOTIFICATION_DE_CONCOURS_BANCAIRES_vue_vue_type_template_id_9f22b8f6_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NOTIFICATION_DE_CONCOURS_BANCAIRES_vue_vue_type_template_id_9f22b8f6_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NOTIFICATION_DE_CONCOURS_BANCAIRES_vue_vue_type_template_id_9f22b8f6_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NOTIFICATION_DE_CONCOURS_BANCAIRES.vue?vue&type=template&id=9f22b8f6&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/conventions/en/NOTIFICATION_DE_CONCOURS_BANCAIRES.vue?vue&type=template&id=9f22b8f6&scoped=true");


/***/ })

}]);