"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_offview_bank_afg_memo_conventions_fr_DECOUVERT_old_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/conventions/fr/DECOUVERT_old.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/conventions/fr/DECOUVERT_old.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_ebapis_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../services/ebapis.service */ "./resources/js/services/ebapis.service.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../services/auth.service */ "./resources/js/services/auth.service.js");
/* harmony import */ var qrcode_generator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! qrcode-generator */ "./node_modules/qrcode-generator/qrcode.js");
/* harmony import */ var qrcode_generator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(qrcode_generator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! crypto-js */ "./node_modules/crypto-js/index.js");
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _html2canvas__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../html2canvas */ "./resources/js/html2canvas.js");
/* harmony import */ var _html2canvas__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_html2canvas__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jspdf */ "./node_modules/jspdf/dist/jspdf.es.min.js");
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _methods;
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



// import { PlusIcon, TrashIcon } from "vue-feather-icons";



// import GetDefaultValue from "./Utils";




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
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
  created: function created() {},
  data: function data() {
    return {
      ebapisHost: _services_ebapis_service__WEBPACK_IMPORTED_MODULE_0__["default"].host,
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
      var_2: {
        // civilite_caution: null,
        // nom_caution: null,
        // date_de_naissance: null,
        // lieu_de_naissance: null,
        nom_du_pere: null,
        nom_de_la_mere: null
        // adresse_client: null,
        // num_cni: null,
        // date_de_delivration: null,
        // lieu_delivration: null,
        // designation_de_la_caution: null
      },
      var_4: {
        // titre_client: null,
        // nom_caution: null,
        num_compte_bancaire: null
        // montant_maximal_garanti: null,
        // montant_maximal_garanti_lettre: null
      },
      var_7: {
        // lieu_edition: null,
        date_edition: null
      },
      formData: {
        table: "cred_pub_tb_20006",
        key: "decouvert_privilege",
        indexSelectionne: this.indexSelectionne,
        banque: "",
        abreviation: "",
        capital_social: "",
        devise: "",
        siege: "",
        boite_postale: "",
        lieu_immatriculation: "",
        date_immatriculation: "",
        immatriculation: "",
        titre_client: "",
        nom_client: "",
        telephone: "",
        date_naissance: "",
        lieu_naissance: "",
        adresse: "",
        fonction: "",
        employeur: "",
        boite_postale_client: "",
        num_identification: "",
        titre_identification: "",
        date_delivrance: "",
        lieu_delivrance: "",
        facilites: []
      },
      comptes: [],
      local_edit_mode: true,
      local_close_edit_mode: true,
      telephones: [],
      build_off: false,
      pdf_process: false,
      meta_parseable: {
        cred_pub_key: this.meta_data["cred_pub_key"],
        tb_name: this.tb_name
      },
      authcheckUsr: null,
      logo: null,
      siege_filiale: null,
      numero_filiale: null,
      mail_filiale: null,
      civilite: null,
      facilites: [],
      facilite: null,
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
      var _this$meta_data$dossi, _this$meta_data$dossi2;
      var compteCourant, _this$authcheckUsr$si2, _this$authcheckUsr2, _this$authcheckUsr$si3, _this$authcheckUsr3, _this$meta_data$dossi3, _this$meta_data$dossi4, _this$meta_data$dossi5, _this$meta_data$dossi6, _this$meta_data$dossi7, _this$meta_data$dossi8, _this$meta_data$dossi9, _this$meta_data$dossi0, _this$meta_data$dossi1, _this$meta_data$dossi10, _this$meta_data$dossi11, _this$meta_data$dossi12, _this$meta_data$dossi13, _this$meta_data$dossi14, _this$meta_data$dossi15;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["default"].loadUserData().then(/*#__PURE__*/function () {
              var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(res) {
                var _this$authcheckUsr$si, _this$authcheckUsr;
                return _regeneratorRuntime().wrap(function _callee$(_context) {
                  while (1) switch (_context.prev = _context.next) {
                    case 0:
                      _this.authcheckUsr = res.data;
                      _this.logo = _this.authcheckUsr["logo"];
                      _this.formData.devise = (_this$authcheckUsr$si = (_this$authcheckUsr = _this.authcheckUsr) === null || _this$authcheckUsr === void 0 ? void 0 : _this$authcheckUsr.sigle_devise) !== null && _this$authcheckUsr$si !== void 0 ? _this$authcheckUsr$si : "";
                      _context.next = 5;
                      return _this.getAgenceLocation();
                    case 5:
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
            _this.$on("generate-pdf-process", function (data) {
              _this.pdf_process = data;
            });
            _this.$on("build-off-printable", function () {
              _this.buildOffPrintable();
            });
            _this.facilites_selectionnees = (_this$meta_data$dossi = _this.meta_data['dossier_credit']) === null || _this$meta_data$dossi === void 0 ? void 0 : _this$meta_data$dossi['cred_pub_tb_20001'].facilites_selectionnees;
            _this.facilite = _this.facilite_index;
            _this.loadRetrieved();
            // console.log('>facilites_selectionnees',this.facilite);
            compteCourant = _this.comptesAFGBank.find(function (c) {
              return c.type === "Compte courant";
            });
            if (compteCourant) {
              _this.formData.num_compte_bancaire = compteCourant.code;
            }
            if (_this.authenticatedUser.filiale == 'AFGB ML') {
              _this.siege_filiale = "Immeuble M1, rue 286, Hamdallaye ACI 2 000 BP 72, Bamako, MalI";
              _this.numero_filiale = "(+223) 44 98 07 00";
              _this.mail_filiale = "assistance@afgbank.ml";
              _this.formData.banque = "AFG BANK MALI";
              _this.formData.abreviation = _this.authenticatedUser.filiale;
              _this.formData.capital_social = "10 000 060 000";
              _this.formData.siege = "Immeuble M1, rue 286, Hamdallaye ACI 2 000 BP 72, Bamako, MalI";
              _this.formData.boite_postale = "BP 72";
              _this.formData.immatriculation = "Mali";
              _this.formData.devise = (_this$authcheckUsr$si2 = (_this$authcheckUsr2 = _this.authcheckUsr) === null || _this$authcheckUsr2 === void 0 ? void 0 : _this$authcheckUsr2.sigle_devise) !== null && _this$authcheckUsr$si2 !== void 0 ? _this$authcheckUsr$si2 : "";
              _this.formData.lieu_immatriculation = "MA BKO 2007 B 1183";
              _this.formData.date_immatriculation = "01/01/1999";
              _this.formData.lieu_redation = "Bamako";
              _this.civilite = "malien";
              // console.log("this.formData", this.formData.banque);
            } else if (_this.authenticatedUser.filiale == 'AFGB CM') {
              _this.siege_filiale = "1112 Boulevard de la Liberté - Akwa Douala, Cameroun";
              _this.numero_filiale = "(+237) 233 50 99 00";
              _this.mail_filiale = "customer.care@afgbank.cm";
              _this.formData.banque = "AFG BANK CAMEROUN";
              _this.civilite = "camerounais";
              _this.formData.abreviation = _this.authenticatedUser.filiale;
              _this.formData.capital_social = "28 853 520 000";
              _this.formData.siege = "1112 Boulevard de la Liberté - Akwa Douala, Cameroun";
              _this.formData.boite_postale = "P.O. Box: 2933 Douala, Cameroun";
              _this.formData.immatriculation = "Cameroun";
              _this.formData.lieu_redation = "Douala";
              _this.formData.devise = (_this$authcheckUsr$si3 = (_this$authcheckUsr3 = _this.authcheckUsr) === null || _this$authcheckUsr3 === void 0 ? void 0 : _this$authcheckUsr3.sigle_devise) !== null && _this$authcheckUsr$si3 !== void 0 ? _this$authcheckUsr$si3 : "";
              _this.formData.lieu_immatriculation = "RC/DLA/2008/B/1195";
              _this.formData.date_immatriculation = "19/09/2008";
            }
            if ((_this$meta_data$dossi2 = _this.meta_data["dossier_credit"]) !== null && _this$meta_data$dossi2 !== void 0 && _this$meta_data$dossi2['cred_pub_tb_20000']) {
              _this.formData.titre_client = ((_this$meta_data$dossi3 = _this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi3 === void 0 || (_this$meta_data$dossi3 = _this$meta_data$dossi3['cred_pub_tb_20000']) === null || _this$meta_data$dossi3 === void 0 ? void 0 : _this$meta_data$dossi3['sexe']) == 'Masculin' ? 'Monsieur' : 'Madame';
              _this.formData.nom_client = ((_this$meta_data$dossi4 = _this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi4 === void 0 || (_this$meta_data$dossi4 = _this$meta_data$dossi4['cred_pub_tb_20000']) === null || _this$meta_data$dossi4 === void 0 ? void 0 : _this$meta_data$dossi4['nom']) + ' ' + ((_this$meta_data$dossi5 = _this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi5 === void 0 || (_this$meta_data$dossi5 = _this$meta_data$dossi5['cred_pub_tb_20000']) === null || _this$meta_data$dossi5 === void 0 ? void 0 : _this$meta_data$dossi5['prenoms']);
              _this.formData.telephone = (_this$meta_data$dossi6 = _this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi6 === void 0 || (_this$meta_data$dossi6 = _this$meta_data$dossi6['cred_pub_tb_20000']) === null || _this$meta_data$dossi6 === void 0 ? void 0 : _this$meta_data$dossi6['telephone'];
              // this.formData.lieu_residence = this.meta_data["dossier_credit"]?.['cred_pub_tb_20000']?.['ville_residence'];
              // this.formData.telephone_bureau = this.meta_data["dossier_credit"]?.['cred_pub_tb_20000']?.['telephone_bureau'];
              _this.formData.date_naissance = (_this$meta_data$dossi7 = _this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi7 === void 0 || (_this$meta_data$dossi7 = _this$meta_data$dossi7['cred_pub_tb_20000']) === null || _this$meta_data$dossi7 === void 0 ? void 0 : _this$meta_data$dossi7['date_naissance'];
              _this.formData.lieu_naissance = (_this$meta_data$dossi8 = _this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi8 === void 0 || (_this$meta_data$dossi8 = _this$meta_data$dossi8['cred_pub_tb_20000']) === null || _this$meta_data$dossi8 === void 0 ? void 0 : _this$meta_data$dossi8['ville_naissance'];
              _this.formData.adresse = (_this$meta_data$dossi9 = _this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi9 === void 0 || (_this$meta_data$dossi9 = _this$meta_data$dossi9['cred_pub_tb_20000']) === null || _this$meta_data$dossi9 === void 0 ? void 0 : _this$meta_data$dossi9['adresse'];
              _this.formData.fonction = (_this$meta_data$dossi0 = _this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi0 === void 0 || (_this$meta_data$dossi0 = _this$meta_data$dossi0['cred_pub_tb_20000']) === null || _this$meta_data$dossi0 === void 0 ? void 0 : _this$meta_data$dossi0['fonction'];
              _this.formData.employeur = (_this$meta_data$dossi1 = _this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi1 === void 0 || (_this$meta_data$dossi1 = _this$meta_data$dossi1['cred_pub_tb_20000']) === null || _this$meta_data$dossi1 === void 0 ? void 0 : _this$meta_data$dossi1['entreprise'];
              _this.formData.boite_postale_client = (_this$meta_data$dossi10 = _this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi10 === void 0 || (_this$meta_data$dossi10 = _this$meta_data$dossi10['cred_pub_tb_20000']) === null || _this$meta_data$dossi10 === void 0 ? void 0 : _this$meta_data$dossi10['adresse_postale'];
              _this.formData.email = (_this$meta_data$dossi11 = _this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi11 === void 0 || (_this$meta_data$dossi11 = _this$meta_data$dossi11['cred_pub_tb_20000']) === null || _this$meta_data$dossi11 === void 0 ? void 0 : _this$meta_data$dossi11['email_client'];
              _this.formData.lieu_delivrance = (_this$meta_data$dossi12 = _this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi12 === void 0 || (_this$meta_data$dossi12 = _this$meta_data$dossi12['cred_pub_tb_20000']) === null || _this$meta_data$dossi12 === void 0 ? void 0 : _this$meta_data$dossi12['lieu_delivrance_piece'];
              _this.formData.date_delivrance = (_this$meta_data$dossi13 = _this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi13 === void 0 || (_this$meta_data$dossi13 = _this$meta_data$dossi13['cred_pub_tb_20000']) === null || _this$meta_data$dossi13 === void 0 ? void 0 : _this$meta_data$dossi13['date_delivrance_piece'];
              _this.formData.titre_identification = (_this$meta_data$dossi14 = _this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi14 === void 0 || (_this$meta_data$dossi14 = _this$meta_data$dossi14['cred_pub_tb_20000']) === null || _this$meta_data$dossi14 === void 0 ? void 0 : _this$meta_data$dossi14['type_piece'];
              _this.formData.num_identification = (_this$meta_data$dossi15 = _this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi15 === void 0 || (_this$meta_data$dossi15 = _this$meta_data$dossi15['cred_pub_tb_20000']) === null || _this$meta_data$dossi15 === void 0 ? void 0 : _this$meta_data$dossi15['num_piece'];
              // this.formData.nom_du_pere = this.meta_data["dossier_credit"]?.['cred_pub_tb_20000']?.['dad'];
              // this.formData.nom_de_la_mere = this.meta_data["dossier_credit"]?.['cred_pub_tb_20000']?.['mum']; 
              // console.log('numero_dossier', this.meta_data["numero_dossier"]);
            }

            // this.facilites = [
            //     {
            //         id: 1,
            //         libelle: 'Montant facilité',
            //         value: this.facilite?.montant_credit || '',
            //         checked: true,
            //         disabled: true,
            //     },
            //     {
            //         id: 2,
            //         libelle: 'Taux intérêt',
            //         value: this.facilite?.taux+ " %" || '',
            //         checked: true,
            //         disabled: true,
            //     },
            //     {
            //         id: 3,
            //         libelle: 'Frais',
            //         value: this.formatMontant(this.dossier_credit?.cred_pub_tb_20001?.facilites_selectionnees[this.facilite_index.index]?.frais_dossier ?? 0),
            //         checked: true,
            //         disabled: true,
            //     },
            //     {
            //         id: 4,
            //         libelle: 'TEG annuel',
            //         value: this.dossier_credit?.cred_pub_tb_20001?.facilites_selectionnees[this.facilite_index.index]?.TEG + " %" || 0,
            //         checked: true,
            //         disabled: true,
            //     },
            //     {
            //         id: 5,
            //         libelle: 'TEG Périodique',
            //         value: this.dossier_credit?.cred_pub_tb_20001?.facilites_selectionnees[this.facilite_index.index]?.taux_periodique + " %" || 0,
            //         checked: true,
            //         disabled: true,
            //     },
            //     {
            //         id: 6,
            //         libelle: 'Taux d\'usure',
            //         value: this.dossier_credit?.cred_pub_tb_20001?.facilites_selectionnees[this.facilite_index.index]?.taux_usure + " %" || 0,
            //         checked: true,
            //         disabled: true,
            //     },
            // ];

            // console.log('facilites>', this.facilites);
          case 11:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }))();
  },
  methods: (_methods = {
    addMoreGarantie: function addMoreGarantie() {
      this.listGaranties.push({
        name: this.formData["addGaranties"],
        value: false
      }
      // this.handleInput()
      );
    },
    addTelephone: function addTelephone() {
      this.telephones.push({
        numero: "",
        indicatif: this.formData.indicatif_telephone
      });
      var index = this.telephones.length - 1;
      var field = "telephone_" + index;
      this.$set(this.check_fields, field, null);
      // this.check_fields_emprunteur[field] = null;
      this.handleInput();
    },
    removeTelephone: function removeTelephone(index) {
      this.telephones.splice(index, 1);
      var field = "telephone_" + index;
      delete this.check_fields[field];
      // delete this.check_fields_emprunteur[field];
      this.handleInput();
      this.reorderIndex("telephone");
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
      var _this2 = this;
      this.$emit("edit-mode");
      this.local_edit_mode = false;
      if (!this.on_saving) {
        this.local_edit_mode = true;
      }
      setTimeout(function () {
        if (!_this2.edit_mode) {
          _this2.buildOffPrintable();
        } else {
          _this2.build_off = false;
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
    handleInput: function handleInput() {
      this.formData.telephones = this.telephones;
      this.formData.check_fields = this.check_fields;
    },
    onCheckField: function onCheckField(check, field) {
      console.log("onCheckField", check, field);
      if (["var_2", "var_4", "var_7"].includes(field)) {
        // console.log("onCheckField2");
        for (var _i3 = 0, _Object$entries3 = Object.entries(this[field]); _i3 < _Object$entries3.length; _i3++) {
          var _Object$entries3$_i = _slicedToArray(_Object$entries3[_i3], 1),
            key = _Object$entries3$_i[0];
          this.check_fields[key] = check;
        }
      } else {
        this.check_fields[field] = check;
        // console.log('this.check_fields ==', this.check_fields);
      }
      this.handleInput();
    },
    checkField: function checkField(field) {
      var _this$check_fields$fi;
      // console.log('checkField', field);

      if (["var_2", "var_4", "var_7"].includes(field)) {
        // console.log("checkfield2");

        var pass = true;
        for (var _i4 = 0, _Object$entries4 = Object.entries(this[field]); _i4 < _Object$entries4.length; _i4++) {
          var _Object$entries4$_i = _slicedToArray(_Object$entries4[_i4], 1),
            key = _Object$entries4$_i[0];
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
    loadRetrieved: function loadRetrieved() {
      var _this$meta_data$dossi16, _this$meta_data$dossi17, _this$meta_data$dossi18, _this$meta_data$dossi19, _this$meta_data$dossi20;
      var createdKey = "decouvert_privilege";
      // console.log('this.annexe');

      var found = (_this$meta_data$dossi16 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi16 === void 0 || (_this$meta_data$dossi16 = _this$meta_data$dossi16[createdKey]) === null || _this$meta_data$dossi16 === void 0 ? void 0 : _this$meta_data$dossi16[this.indexSelectionne];
      if ((_this$meta_data$dossi17 = this.meta_data["dossier_credit"]) !== null && _this$meta_data$dossi17 !== void 0 && _this$meta_data$dossi17["cred_pub_tb_20001"]) {
        // console.log('facilite_index', this.facilite_index)
        var facilite = this.facilite_index;
        // console.log('facilite',facilite);

        this.formData["montant_sollicite"] = facilite.montant_credit;
        this.formData["objet_de_la_demande"] = facilite.type_facilite;
        this.formData["montant_maximum_garanti"] = facilite === null || facilite === void 0 ? void 0 : facilite.montant_credit;
        this.formData["montant_maximal_garanti"] = facilite === null || facilite === void 0 ? void 0 : facilite.montant_credit;
      }
      if (!((_this$meta_data$dossi18 = this.meta_data["dossier_credit"]) !== null && _this$meta_data$dossi18 !== void 0 && _this$meta_data$dossi18[createdKey])) {
        this.check_fields = _objectSpread(_objectSpread(_objectSpread({}, this.var_2), this.var_4), this.var_7);
      } else if (found !== null && found !== void 0 && found.check_fields) {
        this.check_fields = found.check_fields;
      }
      if ((_this$meta_data$dossi19 = this.meta_data["dossier_credit"]) !== null && _this$meta_data$dossi19 !== void 0 && (_this$meta_data$dossi19 = _this$meta_data$dossi19.caf_recorded_file) !== null && _this$meta_data$dossi19 !== void 0 && _this$meta_data$dossi19.indicatif) {
        this.mask_telephone = "+".concat(this.meta_data["dossier_credit"].caf_recorded_file.indicatif, " ## ## ### ###");
        this.formData.indicatif_telephone = "+".concat(this.meta_data["dossier_credit"].caf_recorded_file.indicatif);
      }
      if (found) {
        // this.formData = { ...this.formData, ...found };
        this.check_fields = found.check_fields || {};
        this.telephones = found.telephones || [];
      }
      if ((_this$meta_data$dossi20 = this.meta_data["dossier_credit"]) !== null && _this$meta_data$dossi20 !== void 0 && _this$meta_data$dossi20["cred_pub_tb_120003"]) {
        var _this$meta_data$dossi21;
        this.comptes = (_this$meta_data$dossi21 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi21 === void 0 || (_this$meta_data$dossi21 = _this$meta_data$dossi21["cred_pub_tb_120003"]) === null || _this$meta_data$dossi21 === void 0 ? void 0 : _this$meta_data$dossi21["comptes"];
      }
      this.load_data = false;
    },
    send2Backend: function send2Backend(newVal) {
      var _this$dossier_credit,
        _this3 = this;
      this.on_saving = true;
      this.$emit("autosaving");
      this.$axios.post(this.ebapisHost + "creditbuilder/api/v1/redaction-fiche-annexe/", {
        cred_pub_key: (_this$dossier_credit = this.dossier_credit) === null || _this$dossier_credit === void 0 ? void 0 : _this$dossier_credit.cred_pub_key,
        filledData: newVal
      }).then(function () {
        _this3.on_saving = false;
        _this3.$emit("autosaving");
        if (!_this3.local_edit_mode) {
          _this3.$emit("edit-mode", {
            convention_id: _this3.formData.id
          });
          _this3.local_edit_mode = true;
        }
        if (!_this3.local_close_edit_mode) {
          _this3.$emit("edit-mode", {
            close: true
          });
          _this3.local_close_edit_mode = true;
        }
      })["catch"](function (error) {
        console.log(error);
      });
    },
    exportToPDF: function exportToPDF(download) {
      this.generatePdf(download);
    },
    buildOffPrintable: function buildOffPrintable() {
      var _arguments = arguments,
        _this4 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var retryCount, targetElement, preloader_content, elements, printableContainer, PAGE_WIDTH, PAGE_HEIGHT, MARGIN, PADDING, FOOTER_HEIGHT, QR_HEIGHT, AVAILABLE_HEIGHT, currentPage, currentHeight, pageCounter, createPage, createFooter, _applyStyleToFirstP, paginationDiv, qrCode;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              retryCount = _arguments.length > 0 && _arguments[0] !== undefined ? _arguments[0] : 0;
              _this4.build_off = false;
              targetElement = _this4.$refs.contentToCapture;
              if (targetElement) {
                _context3.next = 11;
                break;
              }
              if (!(retryCount < 3)) {
                _context3.next = 10;
                break;
              }
              _context3.next = 7;
              return new Promise(function (resolve) {
                return setTimeout(resolve, 500);
              });
            case 7:
              return _context3.abrupt("return", _this4.buildOffPrintable(retryCount + 1));
            case 10:
              return _context3.abrupt("return");
            case 11:
              if (_this4.logo) {
                _context3.next = 16;
                break;
              }
              if (!(retryCount < 5)) {
                _context3.next = 16;
                break;
              }
              _context3.next = 15;
              return new Promise(function (resolve) {
                return setTimeout(resolve, 2000);
              });
            case 15:
              return _context3.abrupt("return", _this4.buildOffPrintable(retryCount + 1));
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
                footer.innerHTML = "\n                <strong>".concat(_this4.formData.banque, "</strong><br>\n                Si\xE8ge social : ").concat(_this4.siege_filiale, ", B.P. : ").concat(_this4.formData.boite_postale, ", T\xE9l : ").concat(_this4.numero_filiale, " |\n                SA au capital social de : ").concat(_this4.formData.capital_social, " ").concat(_this4.formData.devise, " |\n                R.C N\xB0 ").concat(_this4.formData.lieu_immatriculation, " | N\xB0 Contrib M0 608 000 250 28 W | Agr\xE9ment N\xB0 00000 322/MINFI du 06 juillet 2015 | www.afgbank.cm\n                ");
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
                  if (pageCounter === 1 && _this4.logo) {
                    var logoImg = document.createElement("img");
                    logoImg.src = "/images/".concat(_this4.logo);
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
                qrCode = _this4.generateQRCode(100);
                qrCode.style.position = "absolute";
                qrCode.style.right = "".concat(PADDING / 2, "px");
                qrCode.style.bottom = "".concat(FOOTER_HEIGHT - 50, "px");
                currentPage.appendChild(qrCode);
                currentPage.appendChild(createFooter());
                printableContainer.appendChild(currentPage);
              }
              document.querySelector("#preloader-content").textContent = "";
              document.querySelector("#preloader-content").remove();
              _this4.build_off = true;
            case 39:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }))();
    }
  }, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_methods, "exportToPDF", function exportToPDF(download) {
    this.generatePdf(download);
  }), "generatePdf", function generatePdf(download) {
    var _this5 = this;
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
      var _this5$annexe;
      var conventionName, filename, pages, pdf, pageWidth, pageHeight, i, page, canvas, imgWidth, imgHeight, imgData, pdfBlob;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            _this5.pdf_process = true;
            conventionName = (_this5$annexe = _this5.annexe) === null || _this5$annexe === void 0 ? void 0 : _this5$annexe.type_facilite.trim().replace(/\s+/g, "_").toLowerCase();
            filename = "Convention de pr\xEAt/ ".concat(conventionName) + ".pdf";
            pages = document.querySelectorAll(".print-page");
            if (pages.length) {
              _context4.next = 8;
              break;
            }
            console.error("❌ Aucun élément `.print-page` trouvé.");
            _this5.pdf_process = false;
            return _context4.abrupt("return");
          case 8:
            pdf = new jspdf__WEBPACK_IMPORTED_MODULE_5__.jsPDF("p", "mm", "a4");
            pageWidth = pdf.internal.pageSize.width;
            pageHeight = pdf.internal.pageSize.height;
            _context4.prev = 11;
            i = 0;
          case 13:
            if (!(i < pages.length)) {
              _context4.next = 28;
              break;
            }
            page = pages[i];
            page.style.paddingLeft = "40px";
            page.style.paddingRight = "40px";
            _context4.next = 19;
            return _html2canvas__WEBPACK_IMPORTED_MODULE_4___default()(page, {
              scale: 2,
              useCORS: true,
              logging: false
            });
          case 19:
            canvas = _context4.sent;
            imgWidth = pageWidth;
            imgHeight = pageHeight;
            imgData = canvas.toDataURL("image/jpeg", 0.7);
            if (i > 0) pdf.addPage();
            pdf.addImage(imgData, "JPEG", 0, 0, imgWidth, imgHeight);
          case 25:
            i++;
            _context4.next = 13;
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
            _context4.next = 36;
            break;
          case 33:
            _context4.prev = 33;
            _context4.t0 = _context4["catch"](11);
            console.error("Erreur lors de la génération du PDF :", _context4.t0);
          case 36:
            _context4.prev = 36;
            _this5.pdf_process = false; // Désactiver l'indicateur, même en cas d'erreur
            return _context4.finish(36);
          case 39:
          case "end":
            return _context4.stop();
        }
      }, _callee4, null, [[11, 33, 36, 39]]);
    }))();
  }), "handleDoubleClickOrClick", function handleDoubleClickOrClick(index, pdfFile) {
    var _this6 = this;
    EventBus.$emit("open-extra-file-explorer");
    EventBus.$emit("transmission-file", {
      pdfFile: pdfFile
    });
    setTimeout(function () {
      EventBus.$emit("data-extra-file-explorer", {
        name: "Decouvert privilege {(*)}particuliers_" + index + "_" + _this6.$route.params.templateId,
        is_auto: true
      });
    }, 1000);
  }), "encryptData", function encryptData(data, secretKey) {
    return crypto_js__WEBPACK_IMPORTED_MODULE_3___default().AES.encrypt(JSON.stringify(data), secretKey).toString();
  }), "checkParagraphs", function checkParagraphs(keys, check) {
    var _this7 = this;
    //    2. mettre a jour la section
    this.check_fields = _objectSpread({}, this.check_fields);
    keys.forEach(function (key) {
      _this7.check_fields[key] = check;
    });
    // console.log(typeof this.check_fields , this.check_fields);
    //    3. mettre a jour le formulaire
    this.formData["check_fields"] = _objectSpread({}, this.check_fields);
  }), "send2Backend", function send2Backend(newVal) {
    var _this$dossier_credit2,
      _this8 = this;
    this.on_saving = true;
    this.$emit("autosaving");
    this.$axios.post(this.ebapisHost + "creditbuilder/api/v1/redaction-fiche-annexe/", {
      cred_pub_key: (_this$dossier_credit2 = this.dossier_credit) === null || _this$dossier_credit2 === void 0 ? void 0 : _this$dossier_credit2.cred_pub_key,
      filledData: newVal
    }).then(function () {
      _this8.on_saving = false;
      _this8.$emit("autosaving");
      if (!_this8.local_edit_mode) {
        _this8.$emit("edit-mode", {
          convention_id: _this8.formData.id
        });
        _this8.local_edit_mode = true;
      }
      if (!_this8.local_close_edit_mode) {
        _this8.$emit("edit-mode", {
          close: true
        });
        _this8.local_close_edit_mode = true;
      }
    })["catch"](function (error) {
      console.log(error);
    });
  }), "generateQRCode", function generateQRCode() {
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
  }), "encryptData", function encryptData(data, secretKey) {
    return crypto_js__WEBPACK_IMPORTED_MODULE_3___default().AES.encrypt(JSON.stringify(data), secretKey).toString();
  }), "getFormattedDate", function getFormattedDate() {
    var date = new Date();
    var year = date.getFullYear();
    var month = String(date.getMonth() + 1).padStart(2, "0");
    var day = String(date.getDate()).padStart(2, "0");
    return "".concat(year, "-").concat(month, "-").concat(day);
  }), "updateDateOuvertureCompte", function updateDateOuvertureCompte() {
    var _this9 = this;
    var selectedCompte = this.comptes.find(function (compte) {
      return compte.numero_compte === _this9.formData.num_compte;
    });
    if (selectedCompte) {
      this.formData.date_ouverture_compte = selectedCompte.date_ouverture_compte || "";
    } else {
      this.formData.date_ouverture_compte = "";
    }
    this.handleInput();
  }), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_methods, "getAgenceLocation", function getAgenceLocation() {
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
            _this0.formData.lieu_edition = data.data;
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
  }), "isNumeroComplet", function isNumeroComplet(numero) {
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
    return (parties === null || parties === void 0 ? void 0 : parties.length) > 1 && /^[0-9]+$/.test(parties[1]);
  }), "nombreEnLettres", function nombreEnLettres(input) {
    console.log("input", input);
    var n = parseInt(input.replace(/\s+/g, ''));
    if (isNaN(n)) return "non numérique";
    console.log("n", n);
    var unités = ["zéro", "un", "deux", "trois", "quatre", "cinq", "six", "sept", "huit", "neuf"];
    var dizaines = ["", "", "vingt", "trente", "quarante", "cinquante", "soixante", "soixante", "quatre-vingt", "quatre-vingt"];
    var dizainesSpeciales = ["dix", "onze", "douze", "treize", "quatorze", "quinze", "seize"];
    var milliers = ["", "mille", "million", "milliard"];
    var _moinsDeCent = function moinsDeCent(num) {
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
        return "soixante" + (unite === 0 ? "-dix" : "-" + _moinsDeCent(10 + unite));
      }
      return dizaines[dizaine] + (unite === 0 ? dizaine === 8 ? "s" : "" : "-" + unités[unite]);
    };
    var moinsDeMille = function moinsDeMille(num) {
      if (num === 0) return "zéro";
      if (num < 100) return _moinsDeCent(num);
      if (num === 100) return "cent";
      var centaine = Math.floor(num / 100);
      var reste = num % 100;
      return (centaine > 1 ? unités[centaine] + " " : "") + "cent" + (centaine > 1 && reste === 0 ? "s" : "") + (reste > 0 ? " " + _moinsDeCent(reste) : "");
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
          partText += " " + milliers[index] + (part > 1 && index >= 2 ? "s" : "");
        }
        result = partText + (result ? " " + result : "");
      }
      num = Math.floor(num / 1000);
      index++;
    }
    return result.trim();
  }), "formatMontant", function formatMontant(montant) {
    var montantStr = String(montant).replace(/[^0-9.-]/g, '');
    if (!montantStr || isNaN(montantStr)) {
      return '0';
    }
    var nombre = parseFloat(montantStr);
    var parties = nombre.toString().split('.');
    var partieEntiere = parties[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    return parties.length > 1 ? "".concat(partieEntiere, ".").concat(parties[1]) : partieEntiere;
  })),
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
    }
  },
  beforeDestroy: function beforeDestroy() {
    this.$off("build-off-printable");
    this.$off("generate-pdf-process");
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/conventions/fr/DECOUVERT_old.vue?vue&type=template&id=32ed5f74&scoped=true":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/conventions/fr/DECOUVERT_old.vue?vue&type=template&id=32ed5f74&scoped=true ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm$facilite, _vm$formData, _vm$facilite2, _vm$formData2, _vm$facilite3, _vm$facilite4, _vm$facilite5, _vm$facilite6;
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("div", [_vm.load_data ? _c("div", {
    staticClass: "card-body"
  }, [_vm._m(0)]) : _c("div", {
    staticClass: "p-5 position-relative",
    staticStyle: {
      width: "1045px",
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
      "font-size": "0.9rem",
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
    staticClass: "mt-5",
    attrs: {
      id: "contentToCapture"
    }
  }, [_vm._m(2), _vm._v(" "), _c("div", {
    staticClass: "block"
  }, [_c("div", {
    staticClass: "column"
  }, [_c("div", {
    staticClass: "article"
  }, [_c("div", {
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
  }, [[_c("span", [_c("b", [_vm._v(_vm._s(_vm.formData.banque))])])], _vm._v(" "), _c("b", [_vm._v("en abrégé ")]), _vm._v("«\n                                                "), [_c("span", [_c("b", [_vm._v(_vm._s(_vm.formData.abreviation))])])], _vm._v("», Société Anonyme avec\n                                                Conseil d’Administration au\n                                                capital social de\n                                                "), [_c("span", [_c("b", [_vm._v(_vm._s(_vm.formData.capital_social))])])], _vm._v(" "), [_c("span", [_c("b", [_vm._v(_vm._s(_vm.formData.devise))])])], _vm._v("\n                                                dont le siège social est à\n                                                "), [_c("span", [_c("b", [_vm._v(_vm._s(_vm.formData.siege))])])], _vm._v(", boite postale\n                                                "), [_c("span", [_c("b", [_vm._v(_vm._s(_vm.formData.boite_postale))])])], _vm._v(", immatriculée au Registre\n                                                du Commerce et du Crédit\n                                                Mobilier de\n                                                "), [_c("span", [_c("b", [_vm._v(_vm._s(_vm.formData.lieu_immatriculation))])])], _vm._v("\n                                                le\n                                                "), [_c("div", {
    staticStyle: {
      display: "inline-block"
    }
  }, [_c("span", [_c("b", [_vm._v("\n                                                                " + _vm._s(_vm.formData.date_immatriculation))]), _vm._v(",")])])], _vm._v("\n                                                sous le numéro\n                                                "), [_c("span", [_c("b", [_vm._v(_vm._s(_vm.formData.immatriculation))])])], _vm._v(".\n                                            ")], 2)])]), _vm._v(" "), _vm._m(4), _vm._v(" "), _c("ul", {
    staticClass: "position-relative",
    staticStyle: {
      "list-style-type": "none",
      border: "1px solid"
    }
  }, [_c("li", [_c("div", {
    staticClass: "p-1 mb-2"
  }, [[!_vm.edit_mode ? _c("span", [_vm._v(_vm._s(_vm.formData.titre_client))]) : _c("span", {
    staticStyle: {
      "background-color": "#ffffad",
      padding: "2px 5px",
      "border-radius": "5px"
    }
  }, [_vm._v(_vm._s(_vm.formData.titre_client))])], _vm._v(" "), [!_vm.edit_mode ? _c("span", [_vm._v(_vm._s(_vm.formData.nom_client))]) : _c("span", {
    staticStyle: {
      "background-color": "#ffffad",
      padding: "2px 5px",
      "border-radius": "5px"
    }
  }, [_vm._v(_vm._s(_vm.formData.nom_client))])], _vm._v("\n                                                Né le\n                                                "), [!_vm.edit_mode ? _c("span", [_c("b", [_vm._v("\n                                                            " + _vm._s(_vm._f("formatDate")(_vm.formData.date_naissance)))]), _vm._v(",")]) : _c("span", {
    staticStyle: {
      "background-color": "#ffffad",
      padding: "2px 5px",
      "border-radius": "5px"
    }
  }, [_vm._v(_vm._s(_vm._f("formatDate")(_vm.formData.date_naissance)))])], _vm._v("\n                                                à\n                                                "), [!_vm.edit_mode ? _c("span", [_c("b", [_vm._v(_vm._s(_vm.formData.lieu_naissance))])]) : _c("span", {
    staticStyle: {
      "background-color": "#ffffad",
      padding: "2px 5px",
      "border-radius": "5px"
    }
  }, [_vm._v(_vm._s(_vm.formData.lieu_naissance))])], _vm._v(",\n                                                \n                                                Demeurant à\n                                                "), [!_vm.edit_mode ? _c("span", [_c("b", [_vm._v(_vm._s(_vm.formData.adresse))])]) : _c("span", {
    staticStyle: {
      "background-color": "#ffffad",
      padding: "2px 5px",
      "border-radius": "5px"
    }
  }, [_vm._v(_vm._s(_vm.formData.adresse))])], _vm._v(";\n\n                                                Profession :\n                                                "), [!_vm.edit_mode ? _c("span", [_c("b", [_vm._v(_vm._s(_vm.formData.fonction))])]) : _c("span", {
    staticStyle: {
      "background-color": "#ffffad",
      padding: "2px 5px",
      "border-radius": "5px"
    }
  }, [_vm._v("\n                                                        " + _vm._s(_vm.formData.fonction))])], _vm._v(";\n\n                                                Employeur :\n                                                "), [!_vm.edit_mode ? _c("span", [_c("b", [_vm._v(_vm._s(_vm.formData.employeur))])]) : _c("span", {
    staticStyle: {
      "background-color": "#ffffad",
      padding: "2px 5px",
      "border-radius": "5px"
    }
  }, [_vm._v(_vm._s(_vm.formData.employeur))])], _vm._v("\n\n                                                ; BP :\n                                                "), [!_vm.edit_mode ? _c("span", [_c("b", [_vm._v(_vm._s(_vm.formData.boite_postale_client))])]) : _c("span", {
    staticStyle: {
      "background-color": "#ffffad",
      padding: "2px 5px",
      "border-radius": "5px"
    }
  }, [_vm._v(_vm._s(_vm.formData.boite_postale_client))])], _vm._v(";\n                                                "), _vm.isNumeroComplet(_vm.formData.telephone) ? [_vm._v("\n                                                    Tel :\n                                                    "), _c("span", [!_vm.edit_mode ? _c("span", [_c("b", [_vm._v(_vm._s(_vm.formData.telephone))])]) : _c("span", {
    staticStyle: {
      "background-color": "#ffffad",
      padding: "2px",
      "border-radius": "5px"
    }
  }, [_vm._v(_vm._s(_vm.formData.telephone))]), _vm._v(",\n                                                    ")])] : _vm._e(), _vm._v("; \n                                                Email :\n                                                "), [!_vm.edit_mode ? _c("span", [_c("b", [_vm._v(_vm._s(_vm.formData.email))])]) : _c("span", {
    staticStyle: {
      "background-color": "#ffffad",
      padding: "2px 5px",
      "border-radius": "5px"
    }
  }, [_vm._v(_vm._s(_vm.formData.email))])], _vm._v(";\n\n                                                "), [!_vm.edit_mode ? _c("span", [_c("b", [_vm._v(_vm._s(_vm.formData.titre_identification))])]) : _c("span", {
    staticStyle: {
      "background-color": "#ffffad",
      padding: "2px 5px",
      "border-radius": "5px"
    }
  }, [_vm._v(_vm._s(_vm.formData.titre_identification))])], _vm._v("\n                                                N°\n                                                "), [!_vm.edit_mode ? _c("span", [_c("b", [_vm._v(_vm._s(_vm.formData.num_identification))])]) : _c("span", {
    staticStyle: {
      "background-color": "#ffffad",
      padding: "2px 5px",
      "border-radius": "5px"
    }
  }, [_vm._v(_vm._s(_vm.formData.num_identification))])], _vm._v("\n                                                délivré(e) le\n                                                "), [_c("div", {
    staticStyle: {
      display: "inline-block"
    }
  }, [!_vm.edit_mode ? _c("span", [_c("b", [_vm._v("\n                                                                " + _vm._s(_vm._f("formatDate")(_vm.formData.date_delivrance)))]), _vm._v(",\n                                                        ")]) : _c("span", {
    staticStyle: {
      "background-color": "#ffffad",
      padding: "2px",
      "border-radius": "5px"
    }
  }, [_vm._v(_vm._s(_vm._f("formatDate")(_vm.formData.date_delivrance)) + "\n                                                        ")])])], _vm._v("\n                                                à\n                                                "), [!_vm.edit_mode ? _c("span", [_c("b", [_vm._v(_vm._s(_vm.formData.lieu_delivrance))])]) : _c("span", {
    staticStyle: {
      "background-color": "#ffffad",
      padding: "2px 5px",
      "border-radius": "5px"
    }
  }, [_vm._v(_vm._s(_vm.formData.lieu_delivrance))])], _vm._v(".\n                                            ")], 2), _vm._v(" "), _c("br"), _vm._v(" "), _vm._m(5)])])]), _vm._v(" "), _c("div", {
    staticClass: "col-12 mt-2"
  }, [_c("p", [_vm._v("\n                                        Le présent contrat fixe les conditions générales de l’offre « DECOUVERT PRIVILEGE » à consentir par\n                                        " + _vm._s(_vm.formData.banque) + ", société anonyme avec conseil d’administration au capital de " + _vm._s(_vm.nombreEnLettres(String(_vm.formData.capital_social).replace(/\s+/g, ""))) + " " + _vm._s(_vm.formData.devise) + ",\n                                    ")])])])])]), _vm._v(" "), _c("div", {
    staticClass: "column"
  }, [_c("div", {
    staticClass: "article"
  }, [_c("p", [_vm._v("\n                                immatriculée au registre de commerce sous le numéro " + _vm._s(_vm.formData.lieu_immatriculation) + ", ci-dessous dénommée le\n                                Prêteur, au Bénéficiaire désigné dans le formulaire de souscription qui forme un tout avec les présente et\n                                constitue la loi des parties.\n                            ")]), _vm._v(" "), _c("p", [_vm._v("\n                                L’offre « DECOUVERT PRIVILEGE » est liée à la carte bancaire PRIVILEGE dont est titulaire, ou cotitulaire\n                                en cas de compte-joint, le souscripteur auprès de " + _vm._s(_vm.formData.banque) + " (AFG BANK CM). Le présent\n                                contrat précise le contenu et les conditions de l’offre.\n                            ")]), _vm._v(" "), _c("p", [_vm._v("\n                                Le Client reconnaît que dans le cadre de son offre « DECOUVERT PRIVILEGE », la Banque lui a\n                                préalablement communiqué les informations complètes sur le coût, les critères d’éligibilité, les conditions et\n                                modalités de financement, afin de lui permettre de déterminer si le crédit proposé est adapté à ses besoins\n                                et à sa situation financière.\n                            ")]), _vm._v(" "), _c("p", [_vm._v("\n                                Le Client est informé de ce qu’il dispose d’un droit de rétractation après réflexion, qu’il peut exercer dans\n                                les trois (03 jours suivant la conclusion de la présente convention. Ce délai est porté à quatorze (14) jours\n                                calendaires en cas de démarchage bancaire.\n                            ")])])])]), _vm._v(" "), _c("div", {
    staticClass: "block"
  }, [_c("div", {
    staticClass: "column"
  }, [_c("div", {
    staticClass: "article"
  }, [_c("div", {
    staticClass: "sub-article"
  }, [_c("p", [_vm._v("\n                                    L’utilisation du Découvert pendant le cours du délai de\n                                    rétractation vaut irrévocablement acceptation des termes et conditions du financement.\n                                    En cas de rétractation dans les délais susdits, l’annulation du Découvert n’est assujettie à aucune pénalité.\n                                ")]), _vm._v(" "), _vm._m(6), _vm._v(" "), _c("p", [_vm._v("\n                                    " + _vm._s(_vm.formData.banque) + " consent au Client qui, par la signature du présent acte, en accepte les termes et\n                                    conditions, un droit à découvert régi par les dispositions suivantes :\n                                ")]), _vm._v(" "), _vm._m(7), _vm._v(" "), _c("ul", {
    staticClass: "list"
  }, [_c("li", [_vm._v("\n                                        Être client de " + _vm._s(_vm.formData.banque) + ", titulaire d’un compte chèque\n                                    ")])]), _vm._v(" "), _vm._m(8), _vm._v(" "), _vm._m(9), _vm._v(" "), _vm._m(10), _vm._v(" "), _vm._m(11), _vm._v(" "), _vm._m(12), _vm._v(" "), _c("p", [_vm._v("\n                                    L’accord du droit à découvert sera notifié au Client par " + _vm._s(_vm.formData.banque) + " après étude et décision du Comité de Crédit.\n                                ")])])]), _vm._v(" "), _vm._m(13)]), _vm._v(" "), _c("div", {
    staticClass: "column"
  }, [_c("div", {
    staticClass: "article"
  }, [_vm._m(14), _vm._v(" "), _vm._m(15), _vm._v(" "), _c("ul", {
    staticClass: "list"
  }, [_c("li", [_vm._v("\n                                    A la demande du souscripteur : Après approbation de la " + _vm._s(_vm.formData.banque) + ", signature par\n                                    le(s) souscripteur(s) d’un avenant de modification. La prise d’effet de la modification est alors\n                                    immédiate.\n                                ")]), _vm._v(" "), _c("li", [_vm._v("\n                                    A la demande de la " + _vm._s(_vm.formData.banque) + " : En cas de diminution sensible du montant des\n                                    revenus domiciliés sur le compte de dépôt.\n                                ")])]), _vm._v(" "), _c("p", [_vm._v("\n                                Le nouveau montant sera porté à la connaissance du souscripteur par tout moyen laissant trace à la\n                                convenance de la " + _vm._s(_vm.formData.banque) + ".\n                            ")]), _vm._v(" "), _vm._m(16)])])]), _vm._v(" "), _c("div", {
    staticClass: "block"
  }, [_c("div", {
    staticClass: "column"
  }, [_c("div", {
    staticClass: "article"
  }, [_c("p", [_vm._v("\n                                la régularisation de créances impayées éventuelles envers la Banque.\n                            ")]), _vm._v(" "), _vm._m(17), _vm._v(" "), _c("p", [_c("span", {
    staticClass: "highlight_"
  }, [_vm._v("a)")]), _vm._v("\n                                Fixation du taux : Chaque découvert portera intérêt au profit de la " + _vm._s(_vm.formData.banque) + " jusqu’à\n                                complet remboursement des sommes dues ; Le taux d’intérêt est celui prévu dans le barème tarifaire de la\n                                " + _vm._s(_vm.formData.banque) + " au jour de la souscription, tel que rappelé dans le formulaire de souscription. Ce\n                                taux est modifiable à tout moment dans les conditions fixées au paragraphe suivant.\n                            ")]), _vm._v(" "), _c("p", [_c("span", {
    staticClass: "highlight_"
  }, [_vm._v("b)")]), _vm._v("\n                                Modification du taux : A chaque modification, le nouveau taux sera porté à la connaissance du\n                                souscripteur par tout moyen laissant trace à la convenance de la " + _vm._s(_vm.formData.banque) + ", au moins un\n                                (01) mois avant la date d’effectivité de la modification. L'acceptation du taux ainsi notifié résultera de la\n                                décision d’initier, en toute connaissance de cause, des opérations rendant le compte-chèques débiteur. En\n                                cas de refus du nouveau taux, le souscripteur a la possibilité de dénoncer l’offre DECOUVERT PRIVILEGE\n                                sans frais, dans les conditions prévues au paragraphe Résiliation.\n                            ")]), _vm._v(" "), _vm._m(18)])]), _vm._v(" "), _c("div", {
    staticClass: "column"
  }, [_c("div", {
    staticClass: "article"
  }, [_vm._m(19), _vm._v(" "), _vm._m(20), _vm._v(" "), _c("p", [_vm._v("\n                                Elle est prévue pour un an renouvelable par tacite reconduction jusqu’au 60ième anniversaire du souscripteur.\n                                En cas de rupture de cette offre, pour quelque cause que ce soit, le découvert sera considéré comme non\n                                autorisé, et entraînera immédiatement l’exigibilité anticipée de la totalité des sommes dues, la suppression\n                                du droit à découvert prévu dans les présentes conditions.\n                            ")]), _vm._v(" "), _vm._m(21), _vm._v(" "), _c("p", [_vm._v("\n                                Le droit au Découvert est reconnu au Client en considération de sa situation professionnelle, de la régularité\n                                de son revenu salarial et de la domiciliation permanente, intégrale et irrévocable dudit revenu dans les livres\n                                de la Banque\n                            ")]), _vm._v(" "), _vm._m(22), _vm._v(" "), _c("ul", {
    staticClass: "list"
  }, [_c("li", [_vm._v("\n                                    Nature :\n                                    "), !_vm.edit_mode ? _c("span", [_c("b", [_vm._v("Découvert PRIVILEGE")])]) : _c("span", {
    staticStyle: {
      "background-color": "#ffffad",
      padding: "2px 5px",
      "border-radius": "5px"
    }
  }, [_vm._v("Découvert PRIVILEGE")])]), _vm._v(" "), _c("li", [_vm._v("\n                                    Plafond autorisé : \n                                    "), !_vm.edit_mode ? _c("span", [_c("b", [_vm._v(_vm._s((_vm$facilite = _vm.facilite) === null || _vm$facilite === void 0 ? void 0 : _vm$facilite.montant_credit) + " " + _vm._s((_vm$formData = _vm.formData) === null || _vm$formData === void 0 ? void 0 : _vm$formData.devise))])]) : _c("span", {
    staticStyle: {
      "background-color": "#ffffad",
      padding: "2px 5px",
      "border-radius": "5px"
    }
  }, [_vm._v(_vm._s((_vm$facilite2 = _vm.facilite) === null || _vm$facilite2 === void 0 ? void 0 : _vm$facilite2.montant_credit) + " " + _vm._s((_vm$formData2 = _vm.formData) === null || _vm$formData2 === void 0 ? void 0 : _vm$formData2.devise))])]), _vm._v(" "), _c("li", [_vm._v("\n                                    Durée : \n                                    "), !_vm.edit_mode ? _c("span", [_c("b", [_vm._v(_vm._s((_vm$facilite3 = _vm.facilite) === null || _vm$facilite3 === void 0 ? void 0 : _vm$facilite3.duree) + " mois")])]) : _c("span", {
    staticStyle: {
      "background-color": "#ffffad",
      padding: "2px 5px",
      "border-radius": "5px"
    }
  }, [_vm._v(_vm._s((_vm$facilite4 = _vm.facilite) === null || _vm$facilite4 === void 0 ? void 0 : _vm$facilite4.duree) + " mois")])]), _vm._v(" "), _c("li", [_vm._v("\n                                    Renouvellement : annuel, jusqu’à l’âge de 60 ans (si bon semble à la banque)\n                                ")]), _vm._v(" "), _c("li", [_vm._v("\n                                    Taux d’intérêts : \n                                    "), !_vm.edit_mode ? _c("span", [_c("b", [_vm._v(_vm._s((_vm$facilite5 = _vm.facilite) === null || _vm$facilite5 === void 0 ? void 0 : _vm$facilite5.taux) + " %")])]) : _c("span", {
    staticStyle: {
      "background-color": "#ffffad",
      padding: "2px 5px",
      "border-radius": "5px"
    }
  }, [_vm._v(_vm._s((_vm$facilite6 = _vm.facilite) === null || _vm$facilite6 === void 0 ? void 0 : _vm$facilite6.taux) + " %")])])])])])]), _vm._v(" "), _c("div", {
    staticClass: "block"
  }, [_c("div", {
    staticClass: "column"
  }, [_c("div", {
    staticClass: "article"
  }, [_vm._m(23), _vm._v(" "), _c("p", [_vm._v("\n                                L’offre « DECOUVERT PRIVILEGE » est un élément des offres CARTE ATLANTIQUE PRIVILEGE (Liberty\n                                / Harmony / Quiétude / Plénitude / Exclusive). \n                            ")]), _vm._v(" "), _vm._m(24), _vm._v(" "), _c("p", [_vm._v("\n                                Le souscripteur s’engage à régler la cotisation forfaitaire annuelle de sa carte ATLANTIQUE PRIVILEGE\n                                qui comprend les frais de mise en place du découvert. Cette cotisation n’inclut pas les agios afférents à une\n                                situation de découvert.\n                            ")]), _vm._v(" "), _vm._m(25), _vm._v(" "), _c("p", [_vm._v("\n                                Le montant de la cotisation carte pourra être modifiée par la " + _vm._s(_vm.formData.banque) + " qui en informera le\n                                souscripteur par tout support laissant trace à sa convenance et notamment les Conditions Générales de\n                                Banque, au moins un (01) mois avant la date d’effectivité des modifications.\n                                L'acceptation de cette modification résultera de l’utilisation par le bénéficiaire des prestations et avantages\n                                de l’offre carte « ATLANTIQUE PRIVILEGE ». En cas de refus de ce nouveau montant, le souscripteur a la\n                                possibilité de dénoncer cette offre sans frais, et par là, l’offre « DECOUVERT PRIVILEGE » dans les\n                                conditions prévues pour la résiliation.\n                            ")]), _vm._v(" "), _vm._m(26), _vm._v(" "), _c("p", [_vm._v("\n                                L’offre « DECOUVERT PRIVILEGE » pourra être dénoncée à l’initiative de l’une ou l’autre des parties dans\n                                les formes indiquées ci-après :\n                            ")])])]), _vm._v(" "), _c("div", {
    staticClass: "column"
  }, [_c("div", {
    staticClass: "article"
  }, [_vm._m(27), _vm._v(" "), _c("p", [_vm._v("\n                                Par lettre de résiliation adressée à la " + _vm._s(_vm.formData.banque) + ". La prise d'effet de la résiliation est alors\n                                immédiate, sous réserve des opérations en cours.\n                            ")]), _vm._v(" "), _vm._m(28), _vm._v(" "), _c("p", [_vm._v("\n                                En cas de non-respect des conditions de fonctionnement de l’offre et particulièrement :\n                            ")]), _vm._v(" "), _vm._m(29), _vm._v(" "), _c("p", [_vm._v("\n                                La décision de résiliation avec effet immédiat sera portée à la connaissance du souscripteur par tout moyen\n                                laissant trace à la convenance de la " + _vm._s(_vm.formData.banque) + ".\n                            ")])])])]), _vm._v(" "), _c("div", {
    staticClass: "block"
  }, [_vm._m(30), _vm._v(" "), _c("div", {
    staticClass: "column"
  }, [_c("div", {
    staticClass: "article"
  }, [_c("p", [_vm._v("\n                                En cas de survenance d’un Incident de Crédit, le BENEFICIAIRE s’expose à une interdiction de crédit,\n                                emportant interdiction de conclure une opération de crédit auprès de tout autre établissement bancaire ou\n                                de Microfinance ; le BENEFICIAIRE ne recouvrera la faculté de conclure une opération de crédit que s’il\n                                justifie avoir régularisé sa situation en remboursant en principal et intérêts, la créance objet de l’incident de\n                                crédit, sans préjudice des sanctions pénales prévues par la loi.\n                            ")]), _vm._v(" "), _vm._m(31), _vm._v(" "), _vm._m(32), _vm._v(" "), _c("p", [_vm._v("\n                                L’invalidation d’une clause du présent contrat n’entache pas la validité des autres dispositions. Les\n                                clauses invalides seront aussitôt remplacées, à la diligence des parties contractantes, par des\n                                dispositions conformes à la législation en vigueur.\n                            ")]), _vm._v(" "), _c("p", [_vm._v("\n                                Le fait pour la BANQUE de ne pas user d’un droit dont elle jouit en vertu du présent contrat\n                                n’emporte pas renonciation à ce droit.\n                            ")]), _vm._v(" "), _c("p", [_vm._v("\n                                La présente convention est soumise au droit " + _vm._s(_vm.civilite) + ". Il entre en vigueur dès sa signature par\n                                les parties contractantes (date de dernière signature) \n                            ")])])])]), _vm._v(" "), _vm._m(33), _vm._v(" "), _c("div", {
    staticClass: "block"
  }, [_c("div", {
    staticClass: "column"
  }, [_c("div", {
    staticClass: "article"
  }, [_vm._m(34), _vm._v(" "), _c("div", {
    staticClass: "p-3",
    staticStyle: {
      border: "3px solid",
      "border-radius": "8px"
    }
  }, [_c("ul", {
    staticStyle: {
      "list-style-type": "none",
      "font-size": "13px",
      "text-align": "center"
    }
  }, [_vm._m(35), _vm._v(" "), _c("li", [_c("b", [_vm._v("Centre de Relation Client : " + _vm._s(_vm.numero_filiale))])]), _vm._v(" "), _c("li", [_c("b", [_vm._v("Courriel : " + _vm._s(_vm.mail_filiale) + " ")])])])]), _vm._v(" "), _c("p", [_vm._v("\n                                La Banque s’engage à accuser réception de la réclamation sous dix (10) jours et à apporter une\n                                réponse sous quarante-cinq (45) jours ouvrés maximum, sauf cas exceptionnels.\n                            ")]), _vm._v(" "), _vm._m(36), _vm._v(" "), _c("p", [_vm._v("\n                                Le présent contrat est régi exclusivement par le droit " + _vm._s(_vm.civilite) + ". "), _c("br")])])]), _vm._v(" "), _vm._m(37)]), _vm._v(" "), _vm._m(38)])])]), _vm._v(" "), !_vm.edit_mode ? _c("div", {
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
  }) : _vm._e()]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "d-flex justify-content-center text-center align-items-center text-muted py-4"
  }, [_c("div", [_c("span", {
    staticClass: "spinner-border spinner-border"
  }), _vm._v(" "), _c("h5", [_vm._v("\n                        Chargement des données en cours ... "), _c("br"), _vm._v("\n                        Ceci peut prendre un peu de temps\n                    ")])])]);
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
    staticClass: "col-12 p-2"
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
  }, [_vm._v("\n                                    CONVENTION DE « DECOUVERT PRIVILEGE »\n                                ")])])])])]);
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
  }, [_c("b", [_c("i", [_vm._v("\n                                                        Ci-dénommé(e)\n                                                        ‘‘"), _c("b", [_vm._v("le Client")]), _vm._v("’’\n                                                        d’autre part ;\n                                                    ")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("h6", [_c("b", [_vm._v("I- "), _c("span", [_vm._v("DROIT AU DECOUVERT")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("p", [_c("span", {
    staticClass: "highlight_"
  }, [_vm._v("1.1")]), _vm._v(" - Conditions à remplir :\n                                ")]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("ul", {
    staticClass: "list"
  }, [_c("li", [_vm._v("\n                                        Agé dans l'intervalle de 18 à 59 ans à la date de souscription\n                                    ")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("ul", {
    staticClass: "list"
  }, [_c("li", [_vm._v("\n                                        Domicilier irrévocablement ses revenus dans les livres de la Banque\n                                    ")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("ul", {
    staticClass: "list"
  }, [_c("li", [_vm._v("\n                                        Être titulaire d’une carte PRIVILEGE\n                                    ")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("ul", {
    staticClass: "list"
  }, [_c("li", [_vm._v("\n                                        Avoir souscrit à l'assurance sur les découverts\n                                    ")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("p", [_c("span", {
    staticClass: "highlight_"
  }, [_vm._v("1.2")]), _vm._v(" - Accord du droit à découvert:\n                                ")]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "article"
  }, [_c("div", {
    staticClass: "sub-article"
  }, [_c("p", [_c("span", {
    staticClass: "highlight_"
  }, [_vm._v("1.3")]), _vm._v("\n                                    Modalités du découvert\n                                ")]), _vm._v(" "), _c("p", [_c("span", {
    staticClass: "highlight_"
  }, [_vm._v("1.3.1-")]), _vm._v("\n                                    Montant initial : Le montant du découvert est indiqué aux Conditions Particulières ci-jointes. Il reste\n                                    en vigueur sauf signature d’un avenant dont les conditions sont définies au paragraphe ‘Révision du montant\n                                    du découvert ‘ ci-après.\n                                ")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("p", [_c("span", {
    staticClass: "highlight_"
  }, [_vm._v("1.3.2-")]), _vm._v("\n                                Dépassement : Tout dépassement du plafond de ce découvert sera considéré comme un découvert\n                                non autorisé, ce qui entraînera immédiatement l’exigibilité anticipée de la totalité des sommes dues, la\n                                suppression du droit à découvert prévu dans le présent contrat.\n                            ")]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("p", [_c("span", {
    staticClass: "highlight_"
  }, [_vm._v("1.3.3-")]), _vm._v("\n                                Révision du montant du découvert : Le montant du découvert pourra être révisé à l’initiative de l’une\n                                ou l’autre des parties valablement exprimée dans les formes indiquées ci-après :\n                            ")]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("p", [_c("span", {
    staticClass: "highlight_"
  }, [_vm._v("1.3.4-")]), _vm._v("\n                                Durée du découvert : Elle est limitée à 35 jours calendaires consécutifs. En cas de nonremboursement à cette échéance, le découvert sera considéré comme non autorisé, ce qui entraînera\n                                immédiatement l’exigibilité anticipée de la totalité des sommes dues, la suspension temporaire de\n                                l’autorisation de découvert jusqu’au retour du solde du compte en position créditrice,\n                            ")]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("p", [_c("span", {
    staticClass: "highlight_"
  }, [_vm._v("1.3.5-")]), _vm._v("\n                                Taux\n                            ")]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("p", [_c("span", {
    staticClass: "highlight_"
  }, [_vm._v("1.3.6-")]), _vm._v("\n                                Perception des intérêts : Les intérêts seront calculés et débités selon les modalités précisées dans\n                                la convention de compte chèque.\n                            ")]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("p", [_c("span", {
    staticClass: "highlight_"
  }, [_vm._v("1.3.7-")]), _vm._v("\n                                Taux Effectif Global – Taux d’Usure : Le Client reconnaît que les Taux Effectifs Globaux Annuel et\n                                Périodique (TEG) et le Taux d’Usure ont été régulièrement portés à sa connaissance au pied de la demande\n                                de Découvert annexée aux présentes.\n                            ")]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("p", [_c("span", {
    staticClass: "highlight_"
  }, [_vm._v("1.4")]), _vm._v("\n                                - Durée du droit à découvert\n                            ")]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("p", [_c("span", {
    staticClass: "highlight_"
  }, [_vm._v("1.5")]), _vm._v("\n                                - Garanties\n                            ")]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("h6", [_c("b", [_vm._v("II- "), _c("span", [_vm._v("CONDITIONS PARTICULIERES APPROUVEES")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("h6", [_c("b", [_c("span", [_vm._v("\n                                        III- PRIX DE L’OFFRE DECOUVERT\n                                    ")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("p", [_c("span", {
    staticClass: "highlight_"
  }, [_vm._v("3.1")]), _vm._v("\n                                Montant\n                            ")]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("p", [_c("span", {
    staticClass: "highlight_"
  }, [_vm._v("3.3")]), _vm._v("\n                                Paiement\n                            ")]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("h6", [_c("b", [_c("span", [_vm._v("\n                                        IV- RESILIATION\n                                    ")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("p", [_c("span", {
    staticClass: "highlight_"
  }, [_vm._v("4.1")]), _vm._v("\n                                A la demande du souscripteur :\n                            ")]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("p", [_c("span", {
    staticClass: "highlight_"
  }, [_vm._v("4.2")]), _vm._v("\n                                A la demande de la Banque :\n                            ")]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("ul", {
    staticClass: "list"
  }, [_c("li", [_vm._v("\n                                    Incident grave affectant le compte chèque, cessation de domiciliation des revenus ;\n                                ")]), _vm._v(" "), _c("li", [_vm._v("\n                                    Impossibilité de prélever la cotisation carte pour quelque cause que ce soit (insuffisance de solde,\n                                    blocage, saisie- attribution...) ;\n                                ")]), _vm._v(" "), _c("li", [_vm._v("\n                                    Non remboursement du découvert aux échéances prévues, constaté par l’absence de retour du solde\n                                    du compte en position créditrice au terme de la période indiquée au paragraphe relatif à la durée du\n                                    découvert ;\n                                ")]), _vm._v(" "), _c("li", [_vm._v("\n                                    Dépassement du plafond du droit à découvert ;\n                                ")]), _vm._v(" "), _c("li", [_vm._v("\n                                    Refus par le titulaire de signer l’avenant prévoyant la diminution du montant du droit à découvert.\n                                ")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "column"
  }, [_c("div", {
    staticClass: "article"
  }, [_c("p", [_c("span", {
    staticClass: "highlight_"
  }, [_vm._v("4.3")]), _vm._v("\n                                Rupture automatique\n                            ")]), _vm._v(" "), _c("p", [_vm._v("\n                                L’offre « DECOUVERT PRIVILEGE » prend fin automatiquement en cas de :\n                            ")]), _vm._v(" "), _c("ul", {
    staticClass: "list"
  }, [_c("li", [_vm._v("\n                                    Décès du souscripteur ;\n                                ")]), _vm._v(" "), _c("li", [_vm._v("\n                                    60ième anniversaire du souscripteur ;\n                                ")]), _vm._v(" "), _c("li", [_vm._v("\n                                    Perte d’emploi\n                                ")]), _vm._v(" "), _c("li", [_vm._v("\n                                    Clôture du compte chèque.\n                                ")])]), _vm._v(" "), _c("h6", [_c("b", [_vm._v("V- "), _c("span", [_vm._v("PENALITES ET INDEMNITES")])])]), _vm._v(" "), _c("p", [_vm._v("\n                                A défaut de remboursement du Découvert à bonne date, des pénalités calculées au taux de dix pourcent\n                                (10%) des sommes restant dues seront automatiquement imputées au Client.\n                            ")]), _vm._v(" "), _c("p", [_vm._v("\n                                En cas d’externalisation du recouvrement de sa dette auprès des Cabinets Spécialisés de Recouvrement,\n                                les frais de gestion dus auxdits Cabinets, représentant Vingt Pourcent (20%) des sommes en recouvrement,\n                                seront automatiquement imputés au Client.\n                            ")]), _vm._v(" "), _c("p", [_vm._v("\n                                Tous frais engagé auprès d’un mandataire de justice (détectives, Huissiers, Avocats, experts) pour parvenir\n                                au recouvrement forcé vous seront automatiquement imputés.\n                            ")]), _vm._v(" "), _c("h6", [_c("b", [_vm._v("VI- "), _c("span", [_vm._v("RISQUES D’INTERDICTION ET DE POURSUITE PENALE ")])])]), _vm._v(" "), _c("p", [_vm._v("\n                                Le non-remboursement des facilités accordées en vertu de la présente convention constitue, au même titre\n                                que le non-respect des termes d’un moratoire, un Incident de Crédit au sens de la loi N°2019/021 du 24\n                                décembre 2019 fixant certaines règles relatives à l’activité de crédit dans les secteurs bancaires et de la\n                                Microfinance au Cameroun ;\n                            ")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("h6", [_c("b", [_vm._v("VII- "), _c("span", [_vm._v("Clauses finales")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("p", [_vm._v("\n                                Les droits du BENEFICIAIRE résultant du présent contrat ne peuvent être cédés, ni grevés. "), _c("br"), _vm._v("\n                                Les modifications et les avenants au présent contrat doivent être faits par écrit. "), _c("br")]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "block"
  }, [_c("div", {
    staticClass: "column"
  }, [_c("div", {
    staticClass: "article"
  }, [_c("p", [_vm._v("\n                                et engagera les parties jusqu’à plein\n                                accomplissement de la totalité des obligations de paiement au bénéfice de la BANQUE\n                            ")]), _vm._v(" "), _c("p", [_vm._v("\n                                Le BENEFICIAIRE consent à ce que ses données soient traitées par la Banque dans le cadre de\n                                la présente et de ses suites. Ce traitement a pour finalité la gestion des concours accordés au\n                                BENEFICIAIRE, animation commerciale et études statistiques, évaluation du risque, sécurité et\n                                prévention des impayés et de la fraude, recouvrement, lutte contre le blanchiment d’argent et le\n                                financement du terrorisme, réponse aux obligations légales et réglementaires.\n                            ")]), _vm._v(" "), _c("p", [_vm._v("\n                                Ces données personnelles sont protégées par le secret professionnel auquel est tenu la Banque.\n                                Le Client accepte expressément et pendant toute la durée du concours que les données\n                                personnelles le concernant soient transmises :\n                            ")]), _vm._v(" "), _c("ul", {
    staticClass: "list"
  }, [_c("li", [_vm._v("\n                                    aux prestataires de service et sous-traitants exécutant pour le compte de la Banque certaines\n                                    tâches liées aux finalités décrites ci-dessus ;\n                                ")]), _vm._v(" "), _c("li", [_vm._v("\n                                    aux sociétés du Groupe Atlantic Financial Group (AFG) exécutant pour le compte de la\n                                    Banque certaines tâches liées aux finalités décrites ci-dessus ;\n                                ")]), _vm._v(" "), _c("li", [_vm._v("\n                                    aux sociétés du Groupe AFG en vue de la présentation des produits et services gérés par\n                                    ces sociétés, en cas de regroupement de moyens ;\n                                ")])])])]), _vm._v(" "), _c("div", {
    staticClass: "column"
  }, [_c("div", {
    staticClass: "article"
  }, [_c("ul", {
    staticClass: "list"
  }, [_c("li", [_vm._v("\n                                    aux sociétés du Groupe AFG avec lesquelles il est ou sera en relation contractuelle aux fins\n                                    d’actualisation des données collectées par ces sociétés ;\n                                ")]), _vm._v(" "), _c("li", [_vm._v("\n                                    à des organismes chargés de réaliser des enquêtes ou sondages ;\n                                ")]), _vm._v(" "), _c("li", [_vm._v("\n                                    et à des organismes tels que l’administration fiscale et la Banque Centrale afin de satisfaire\n                                    aux obligations légales ou réglementaires incombant à la Banque.\n                                ")])]), _vm._v(" "), _c("p", [_vm._v("\n                                Les données personnelles transmises par le Client conformément aux finalités ci-dessus peuvent\n                                à l’occasion de diverses opérations, faire l’objet d’un transfert vers un pays tiers, des règles\n                                assurant la protection et la sécurité des données ont été mises en place conformément à la\n                                législation en vigueur.\n                            ")]), _vm._v(" "), _c("p", [_vm._v("\n                                Ces données personnelles peuvent être communiquées, à leur requête, aux organismes officiels\n                                et aux autorités administratives ou judiciaires, notamment dans le cadre de la lutte contre le\n                                blanchiment des capitaux ou la lutte contre le financement du terrorisme.\n                            ")]), _vm._v(" "), _c("p", [_vm._v("\n                                Ces données personnelles pourront donner lieu à l’exercice du droit d’accès, de rectification et\n                                d’opposition dans les conditions prévues par la loi en vigueur. Le Client peut obtenir une copie des\n                                données le concernant et, le cas échéant, les faire rectifier par courrier adressé au siège social de\n                                la Banque.\n                            ")])])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("ul", {
    staticClass: "list"
  }, [_c("li", [_vm._v("\n                                    Son Gestionnaire de Compte ou le chef d’agence ; ceux-ci sont ses premiers interlocuteurs\n                                    et servent de relai entre la Banque et le Client. \n                                ")]), _vm._v(" "), _c("li", [_vm._v("\n                                    Le Service ‘‘Service Expérience Client’’, en charge du suivi centralisé des réclamations. Ce\n                                    service est joignable aux coordonnées suivantes :\n                                ")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("li", [_c("b", [_vm._v("Service Expérience Client,")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("h6", [_c("b", [_vm._v("VIII- "), _c("span", [_vm._v("Loi applicable - Règlement de différends")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "column"
  }, [_c("div", {
    staticClass: "article"
  }, [_c("p", [_vm._v("\n                                \n\n                                En cas de différend entre les Parties ayant trait à la validité, l’interprétation, l’exécution ou\n                                l’inexécution du présent contrat, les Parties s’obligent à se concerter et à rechercher un règlement\n                                amiable dans un délai de trente (30) jours suivant la notification par une Partie au litige à l’autre\n                                Partie, de l’objet du différend né, ou susceptible de naître. Ce délai peut être prorogé d’une durée\n                                égale d’accord Parties. "), _c("br"), _vm._v("\n\n                                Tout différend qui n’aurait pas été réglé à l’amiable dans les délais ci-dessus prévus, sera soumis à\n                                la juridiction compétente dans le ressort de laquelle est situé le siège social ou le domicile du\n                                défendeur. "), _c("br"), _vm._v("\n\n                                Pour l’exécution des présentes et de leurs suites, les Parties font élection de domicile en leur siège\n                                social respectif ci-dessus indiqué.\n                            ")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "row"
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
  }, [_c("b", [_vm._v(" Signature du client ")])])]), _vm._v(" "), _c("div", [_c("h6", {
    staticStyle: {
      "text-decoration": "underline"
    }
  }, [_c("b", [_vm._v(" Signature de la Banque ")])])])])])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/conventions/fr/DECOUVERT_old.vue?vue&type=style&index=0&id=32ed5f74&lang=css&scoped=true":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/conventions/fr/DECOUVERT_old.vue?vue&type=style&index=0&id=32ed5f74&lang=css&scoped=true ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\nfieldset[data-v-32ed5f74] {\r\n    border: 1px solid #ddd !important;\r\n    position: relative;\r\n    padding-left: 10px !important;\r\n    width: 100%;\r\n    background-color: #f5f5f5;\r\n    margin-top: 15px;\r\n    min-width: -moz-max-content;\r\n    min-width: max-content;\n}\nlegend[data-v-32ed5f74] {\r\n    font-weight: bold;\r\n    padding: 4px;\r\n    width: -moz-max-content;\r\n    width: max-content;\r\n    padding: 0 15px;\r\n    font-size: 16px;\r\n    float: none;\r\n    background-color: #ffffff;\r\n    border: 1px solid #ddd;\r\n    border-radius: 4px;\n}\nfieldset[data-v-32ed5f74] {\r\n    border: 1px solid #ddd !important;\r\n    position: relative;\r\n    padding-left: 10px !important;\r\n    width: 100%;\r\n    background-color: #f5f5f5;\r\n    margin-top: 15px;\n}\nlegend[data-v-32ed5f74] {\r\n    font-weight: bold;\r\n    padding: 4px;\r\n    width: -moz-max-content;\r\n    width: max-content;\r\n    padding: 0 15px;\r\n    font-size: 16px;\r\n    float: none;\r\n    background-color: #ffffff;\r\n    border: 1px solid #ddd;\r\n    border-radius: 4px;\n}\n.box[data-v-32ed5f74] {\r\n    border-color: #212529;\r\n    border-style: solid;\r\n    border-width: 1px;\r\n    padding: 10px;\n}\n.actd[data-v-32ed5f74] {\r\n    border-color: #212529;\r\n    border-style: solid;\r\n    border-width: 1px;\r\n    padding: 10px;\n}\n.pre[data-v-32ed5f74] {\r\n    font-size: 0.6rem;\n}\n.form-control[data-v-32ed5f74] {\r\n    display: initial;\r\n    width: initial;\n}\n.paragraph[data-v-32ed5f74] {\r\n    margin: 20px 0px;\r\n    position: relative;\r\n    padding: 5px;\n}\ninput[data-v-32ed5f74],\r\nselect[data-v-32ed5f74] {\r\n    margin: 2px;\r\n    border-color: #34495e;\r\n    color: black;\r\n    font-size: 13px;\r\n    height: 34px;\r\n    font-weight: bold;\r\n    background-color: #ffffad;\r\n    margin-right: 0px;\r\n    min-width: 45px;\r\n    /* border-top-right-radius: 0;\r\n    border-bottom-right-radius: 0; */\r\n    /* border-right: none; */\n}\n.input-group-append[data-v-32ed5f74] {\r\n    margin: 0 2px;\n}\n.input-group-text-right[data-v-32ed5f74] {\r\n    border-radius: 0 0.375rem 0.375rem 0;\r\n    margin-left: 0px;\r\n    cursor: pointer;\n}\n.input-group-text-left[data-v-32ed5f74] {\r\n    border-radius: 0.375rem 0 0 0.375rem;\n}\n.li-convention[data-v-32ed5f74] {\r\n    list-style-type: disc;\r\n    margin: 0;\r\n    padding: 0;\r\n    margin-left: 20px;\n}\n.input-group-text[data-v-32ed5f74] {\r\n    font-size: 13px;\r\n    line-height: 1.5;\r\n    height: 34px;\r\n    padding: 0.375rem 0.75rem;\r\n    border: 1px solid #34495e;\r\n    min-width: 45px;\r\n    text-align: center;\r\n    justify-content: center;\r\n    /*margin: 2px;*/\r\n    background-color: #ffffad;\r\n    color: black;\n}\r\n\r\n/* checkbox */\n.checkbox-container .checkbox-input[data-v-32ed5f74] {\r\n    position: absolute;\r\n    opacity: 0;\r\n    cursor: pointer;\r\n    height: 80%;\r\n    width: 80%;\r\n    top: 0;\r\n    left: 0;\r\n    z-index: 1;\n}\n.checkbox-container[data-v-32ed5f74] {\r\n    display: block;\r\n    position: relative;\r\n    cursor: pointer;\r\n    -webkit-user-select: none;\r\n       -moz-user-select: none;\r\n            user-select: none;\n}\n.checkbox-container .checkbox-icon-cancel[data-v-32ed5f74] {\r\n    position: relative;\r\n    top: 0;\r\n    left: 0;\r\n    height: 50px;\r\n    width: 50px;\r\n    transition: all 0.3s;\r\n    font-size: 1.5em;\r\n    color: red;\n}\n.checkbox-container .checkbox-icon-success[data-v-32ed5f74] {\r\n    position: relative;\r\n    top: 0;\r\n    left: 0;\r\n    height: 50px;\r\n    width: 50px;\r\n    transition: all 0.3s;\r\n    font-size: 1.5em;\r\n    color: green;\n}\r\n\r\n/*.checkbox-container .checkbox-icon-cancel:hover {\r\n    transform: scale(1.1);\r\n}\r\n\r\n.checkbox-container .checkbox-icon-success:hover {\r\n    transform: scale(1.1);\r\n}*/\n.checkbox-container .checkbox-icon-success[data-v-32ed5f74] {\r\n    display: none;\n}\n.checkbox-container .checkbox-input:checked ~ .checkbox-icon-cancel[data-v-32ed5f74] {\r\n    display: none;\n}\n.checkbox-container .checkbox-input:checked ~ .checkbox-icon-success[data-v-32ed5f74] {\r\n    display: contents;\n}\n.valid-section[data-v-32ed5f74] {\r\n    pointer-events: auto;\r\n    top: 50%;\r\n    transform: translateY(-50%);\r\n    width: -moz-fit-content;\r\n    width: fit-content;\n}\n.st-valide[data-v-32ed5f74] {\r\n    position: absolute;\r\n    z-index: 99;\r\n    right: -147px;\r\n    top: 15%;\n}\r\n\r\n/*this is the new approach*/\n.position-relative[data-v-32ed5f74]:has(.valid-section:hover) {\r\n    background: #3498db6f;\n}\nul[data-v-32ed5f74],\r\nli[data-v-32ed5f74] {\r\n    list-style-type: inherit;\n}\n.custom-list[data-v-32ed5f74] {\r\n    counter-reset: section;\r\n    list-style: none;\r\n    /* Supprime les puces par défaut */\r\n    padding-left: 0;\r\n    /* Enlève l'indentation */\n}\n.custom-list > li[data-v-32ed5f74] {\r\n    counter-increment: section;\n}\n.custom-list > li[data-v-32ed5f74]::before {\r\n    content: counter(section) \". \";\r\n    font-weight: bold;\n}\r\n\r\n/* Pour les sous-listes */\n.custom-list > li > ol[data-v-32ed5f74] {\r\n    counter-reset: subsection;\r\n    list-style: none;\r\n    padding-left: 20px;\n}\n.custom-list > li > ol > li[data-v-32ed5f74] {\r\n    counter-increment: subsection;\n}\n.custom-list > li > ol > li[data-v-32ed5f74]::before {\r\n    content: counter(section) \".\" counter(subsection) \" \";\r\n    font-weight: normal;\n}\n.title_[data-v-32ed5f74] {\r\n    padding: 8px 64px;\n}\n.block[data-v-32ed5f74] {\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr;\r\n    gap: 10px;\r\n    margin-bottom: 20px;\r\n    align-items: stretch;\n}\n.column[data-v-32ed5f74] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 10px;\r\n    padding: 10px;\n}\n.article[data-v-32ed5f74] {\r\n    text-align: justify;\r\n    margin-top: 20px;\n}\n.article p[data-v-32ed5f74] {\r\n    margin: 10px 0;\n}\n.list[data-v-32ed5f74] {\r\n    margin-left: 20px;\r\n    list-style-type: disc;\n}\n.list li[data-v-32ed5f74] {\r\n    margin-bottom: 10px;\r\n    text-align: justify;\n}\n.highlight_[data-v-32ed5f74] {\r\n    font-weight: bold;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/conventions/fr/DECOUVERT_old.vue?vue&type=style&index=0&id=32ed5f74&lang=css&scoped=true":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/conventions/fr/DECOUVERT_old.vue?vue&type=style&index=0&id=32ed5f74&lang=css&scoped=true ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DECOUVERT_old_vue_vue_type_style_index_0_id_32ed5f74_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DECOUVERT_old.vue?vue&type=style&index=0&id=32ed5f74&lang=css&scoped=true */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/conventions/fr/DECOUVERT_old.vue?vue&type=style&index=0&id=32ed5f74&lang=css&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DECOUVERT_old_vue_vue_type_style_index_0_id_32ed5f74_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DECOUVERT_old_vue_vue_type_style_index_0_id_32ed5f74_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/offview/bank/afg/memo/conventions/fr/DECOUVERT_old.vue":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/offview/bank/afg/memo/conventions/fr/DECOUVERT_old.vue ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DECOUVERT_old_vue_vue_type_template_id_32ed5f74_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DECOUVERT_old.vue?vue&type=template&id=32ed5f74&scoped=true */ "./resources/js/components/offview/bank/afg/memo/conventions/fr/DECOUVERT_old.vue?vue&type=template&id=32ed5f74&scoped=true");
/* harmony import */ var _DECOUVERT_old_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DECOUVERT_old.vue?vue&type=script&lang=js */ "./resources/js/components/offview/bank/afg/memo/conventions/fr/DECOUVERT_old.vue?vue&type=script&lang=js");
/* harmony import */ var _DECOUVERT_old_vue_vue_type_style_index_0_id_32ed5f74_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DECOUVERT_old.vue?vue&type=style&index=0&id=32ed5f74&lang=css&scoped=true */ "./resources/js/components/offview/bank/afg/memo/conventions/fr/DECOUVERT_old.vue?vue&type=style&index=0&id=32ed5f74&lang=css&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _DECOUVERT_old_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _DECOUVERT_old_vue_vue_type_template_id_32ed5f74_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _DECOUVERT_old_vue_vue_type_template_id_32ed5f74_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "32ed5f74",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/offview/bank/afg/memo/conventions/fr/DECOUVERT_old.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/offview/bank/afg/memo/conventions/fr/DECOUVERT_old.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/components/offview/bank/afg/memo/conventions/fr/DECOUVERT_old.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DECOUVERT_old_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DECOUVERT_old.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/conventions/fr/DECOUVERT_old.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DECOUVERT_old_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/offview/bank/afg/memo/conventions/fr/DECOUVERT_old.vue?vue&type=style&index=0&id=32ed5f74&lang=css&scoped=true":
/*!************************************************************************************************************************************************!*\
  !*** ./resources/js/components/offview/bank/afg/memo/conventions/fr/DECOUVERT_old.vue?vue&type=style&index=0&id=32ed5f74&lang=css&scoped=true ***!
  \************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DECOUVERT_old_vue_vue_type_style_index_0_id_32ed5f74_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DECOUVERT_old.vue?vue&type=style&index=0&id=32ed5f74&lang=css&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/conventions/fr/DECOUVERT_old.vue?vue&type=style&index=0&id=32ed5f74&lang=css&scoped=true");


/***/ }),

/***/ "./resources/js/components/offview/bank/afg/memo/conventions/fr/DECOUVERT_old.vue?vue&type=template&id=32ed5f74&scoped=true":
/*!**********************************************************************************************************************************!*\
  !*** ./resources/js/components/offview/bank/afg/memo/conventions/fr/DECOUVERT_old.vue?vue&type=template&id=32ed5f74&scoped=true ***!
  \**********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DECOUVERT_old_vue_vue_type_template_id_32ed5f74_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DECOUVERT_old_vue_vue_type_template_id_32ed5f74_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DECOUVERT_old_vue_vue_type_template_id_32ed5f74_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DECOUVERT_old.vue?vue&type=template&id=32ed5f74&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/conventions/fr/DECOUVERT_old.vue?vue&type=template&id=32ed5f74&scoped=true");


/***/ })

}]);