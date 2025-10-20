(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_offview_bank_afg_memo_conventions_en_DECOUVERT_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/conventions/en/DECOUVERT.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/conventions/en/DECOUVERT.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_ebapis_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../services/ebapis.service */ "./resources/js/services/ebapis.service.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../services/auth.service */ "./resources/js/services/auth.service.js");
/* harmony import */ var _raw_loader_html_afg_en_convention_decouvert_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !!raw-loader!../../../../../../../html/afg/en/convention_decouvert.html */ "./node_modules/raw-loader/dist/cjs.js!./resources/js/html/afg/en/convention_decouvert.html");
/* harmony import */ var qrcode_generator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! qrcode-generator */ "./node_modules/qrcode-generator/qrcode.js");
/* harmony import */ var qrcode_generator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(qrcode_generator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! crypto-js */ "./node_modules/crypto-js/index.js");
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _html2canvas__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../html2canvas */ "./resources/js/html2canvas.js");
/* harmony import */ var _html2canvas__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_html2canvas__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jspdf */ "./node_modules/jspdf/dist/jspdf.es.min.js");
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
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
              _this.formData.montant_credit = _this.facilite.montant_credit;
              // this.formData.nom_du_pere = this.meta_data["dossier_credit"]?.['cred_pub_tb_20000']?.['dad'];
              // this.formData.nom_de_la_mere = this.meta_data["dossier_credit"]?.['cred_pub_tb_20000']?.['mum']; 
              // console.log('numero_dossier', this.meta_data["numero_dossier"]);
            }
            _this.$nextTick(function () {
              _this.loadContentHtml();
            });

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
          case 12:
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
      var conventionName, filename, iframe, doc, pages, pdf, pageWidth, pageHeight, i, page, canvas, imgWidth, imgHeight, imgData, pdfBlob;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            _this5.pdf_process = true;
            conventionName = (_this5$annexe = _this5.annexe) === null || _this5$annexe === void 0 ? void 0 : _this5$annexe.type_facilite.trim().replace(/\s+/g, "_").toLowerCase();
            filename = "Convention de pr\xEAt/ ".concat(conventionName) + ".pdf"; // Vérifier que l'iframe existe
            iframe = _this5.$refs.monIframe;
            if (!(!iframe || !iframe.contentWindow || !iframe.contentWindow.document)) {
              _context4.next = 8;
              break;
            }
            console.error("❌ Iframe ou document de l'iframe introuvable.");
            _this5.pdf_process = false;
            return _context4.abrupt("return");
          case 8:
            _context4.next = 10;
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
            pages = doc.querySelectorAll(".print-page");
            if (pages.length) {
              _context4.next = 17;
              break;
            }
            console.error("❌ Aucun élément `.print-page` trouvé dans l'iframe.");
            _this5.pdf_process = false;
            return _context4.abrupt("return");
          case 17:
            pdf = new jspdf__WEBPACK_IMPORTED_MODULE_6__.jsPDF("p", "mm", "a4");
            pageWidth = pdf.internal.pageSize.width;
            pageHeight = pdf.internal.pageSize.height;
            _context4.prev = 20;
            i = 0;
          case 22:
            if (!(i < pages.length)) {
              _context4.next = 37;
              break;
            }
            page = pages[i];
            page.style.paddingLeft = "40px";
            page.style.paddingRight = "40px";
            _context4.next = 28;
            return _html2canvas__WEBPACK_IMPORTED_MODULE_5___default()(page, {
              scale: 2,
              useCORS: true,
              logging: false
            });
          case 28:
            canvas = _context4.sent;
            imgWidth = pageWidth;
            imgHeight = pageHeight;
            imgData = canvas.toDataURL("image/jpeg", 0.7);
            if (i > 0) pdf.addPage();
            pdf.addImage(imgData, "JPEG", 0, 0, imgWidth, imgHeight);
          case 34:
            i++;
            _context4.next = 22;
            break;
          case 37:
            pdfBlob = pdf.output("blob");
            _this5.pdfFile = new File([pdfBlob], filename, {
              type: "application/pdf"
            });
            if (download) {
              pdf.save(filename);
            } else {
              _this5.handleDoubleClickOrClick(_this5.indexSelectionne, _this5.pdfFile);
            }
            _context4.next = 45;
            break;
          case 42:
            _context4.prev = 42;
            _context4.t0 = _context4["catch"](20);
            console.error("Erreur lors de la génération du PDF :", _context4.t0);
          case 45:
            _context4.prev = 45;
            _this5.pdf_process = false; // Désactiver l'indicateur, même en cas d'erreur
            return _context4.finish(45);
          case 48:
          case "end":
            return _context4.stop();
        }
      }, _callee4, null, [[20, 42, 45, 48]]);
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
    return crypto_js__WEBPACK_IMPORTED_MODULE_4___default().AES.encrypt(JSON.stringify(data), secretKey).toString();
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
    var qr = qrcode_generator__WEBPACK_IMPORTED_MODULE_3___default()(0, "L");
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
    return crypto_js__WEBPACK_IMPORTED_MODULE_4___default().AES.encrypt(JSON.stringify(data), secretKey).toString();
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
  }), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_methods, "getAgenceLocation", function getAgenceLocation() {
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
    var n = parseInt(input.replace(/\s+/g, ''));
    if (isNaN(n)) return "non numérique";
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
  }), "loadContentHtml", function loadContentHtml() {
    var _this$facilite, _this$facilite2;
    var iframe = this.$refs.monIframe;
    function injectPlaceholders(template, data) {
      return template.replace(/{{\s*(\w+)\s*}}/g, function (match, key) {
        return key in data ? data[key] : match;
      });
    }

    // Remplacement des placeholders personnalisés
    var htmlModifié = injectPlaceholders(_raw_loader_html_afg_en_convention_decouvert_html__WEBPACK_IMPORTED_MODULE_2__["default"], {
      "logo": this.logo || "",
      "banque": this.formData.banque || "",
      "fullName": this.formData.nom_client || "",
      "dateNaissance": this.formatDate(this.formData.date_naissance) || "",
      "lieu_naissance": this.formData.lieu_naissance || "",
      "lieuHabitation": this.formData.adresse || "",
      "profession": this.formData.fonction || "",
      "employeur": this.formData.employeur || "",
      "adresse": this.formData.adresse || "",
      "telephone": this.formData.telephone || "",
      "email": this.formData.email || "",
      "numero_piece": this.formData.num_identification || "",
      "date_delivrance": this.formatDate(this.formData.date_delivrance) || "",
      "lieu_delivrance": this.formData.lieu_delivrance || "",
      "duree": ((_this$facilite = this.facilite) === null || _this$facilite === void 0 ? void 0 : _this$facilite.duree) || "",
      "taux": ((_this$facilite2 = this.facilite) === null || _this$facilite2 === void 0 ? void 0 : _this$facilite2.taux) || "",
      "abreviation": this.formData.abreviation || "",
      "capital_social": this.formData.capital_social || "",
      "devise": this.formData.devise || "",
      "siege": this.formData.siege || "",
      "boite_postale": this.formData.boite_postale || "",
      "lieu_immatriculation": this.formData.lieu_immatriculation || "",
      "date_immatriculation": this.formData.date_immatriculation || "",
      "immatriculation": this.formData.immatriculation || "",
      "titre_client": this.formData.titre_client || "",
      "boite_postale_client": this.formData.boite_postale_client || "",
      "titre_identification": this.formData.titre_identification || "",
      "num_identification": this.formData.num_identification || "",
      "montant_credit": this.formatMontant(this.formData.montant_credit) || "",
      "civilite": this.civilite,
      "numero_filiale": this.numero_filiale,
      "mail_filiale": this.mail_filiale,
      "capital_social_lettre": this.convertirEnLettres(String(this.formData.capital_social).replace(/\s+/g, ''))
    });

    // Créer un vrai document HTML autour du contenu
    var page = "".concat(htmlModifié);

    // Injecter le contenu dans l’iframe
    var doc = iframe.contentWindow.document;
    doc.open();
    doc.write(page);
    doc.close();
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
    },
    load_data: {
      handler: function handler(newVal) {
        var _this10 = this;
        if (!newVal) {
          this.$nextTick(function () {
            _this10.loadContentHtml();
          });
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/conventions/en/DECOUVERT.vue?vue&type=template&id=168a1a0a&scoped=true":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/conventions/en/DECOUVERT.vue?vue&type=template&id=168a1a0a&scoped=true ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
      title: "Attach to File"
    }
  }), _vm._v("\n                        Attach to File\n                    ")]), _vm._v(" "), _c("button", {
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
      title: "Download generated file"
    }
  }), _vm._v("\n                        Download generated file\n                    ")])] : _c("div", {
    staticStyle: {
      display: "inline-block"
    }
  }, [_vm._m(1), _vm._v(" "), _c("span", {
    staticStyle: {
      "font-size": "0.9rem",
      "margin-left": "5px"
    }
  }, [_vm._v("\n                        PDF generation in progress...\n                    ")])])], 2), _vm._v(" "), _c("iframe", {
    ref: "monIframe",
    staticStyle: {
      width: "100%",
      height: "80vh"
    }
  })])])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "d-flex justify-content-center text-center align-items-center text-muted py-4"
  }, [_c("div", [_c("span", {
    staticClass: "spinner-border spinner-border"
  }), _vm._v(" "), _c("h5", [_vm._v("\n                        Data loading in progress... "), _c("br"), _vm._v("\n                        This may take some time\n                    ")])])]);
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

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/conventions/en/DECOUVERT.vue?vue&type=style&index=0&id=168a1a0a&lang=css&scoped=true":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/conventions/en/DECOUVERT.vue?vue&type=style&index=0&id=168a1a0a&lang=css&scoped=true ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\nfieldset[data-v-168a1a0a] {\r\n    border: 1px solid #ddd !important;\r\n    position: relative;\r\n    padding-left: 10px !important;\r\n    width: 100%;\r\n    background-color: #f5f5f5;\r\n    margin-top: 15px;\r\n    min-width: -moz-max-content;\r\n    min-width: max-content;\n}\nlegend[data-v-168a1a0a] {\r\n    font-weight: bold;\r\n    padding: 4px;\r\n    width: -moz-max-content;\r\n    width: max-content;\r\n    padding: 0 15px;\r\n    font-size: 16px;\r\n    float: none;\r\n    background-color: #ffffff;\r\n    border: 1px solid #ddd;\r\n    border-radius: 4px;\n}\nfieldset[data-v-168a1a0a] {\r\n    border: 1px solid #ddd !important;\r\n    position: relative;\r\n    padding-left: 10px !important;\r\n    width: 100%;\r\n    background-color: #f5f5f5;\r\n    margin-top: 15px;\n}\nlegend[data-v-168a1a0a] {\r\n    font-weight: bold;\r\n    padding: 4px;\r\n    width: -moz-max-content;\r\n    width: max-content;\r\n    padding: 0 15px;\r\n    font-size: 16px;\r\n    float: none;\r\n    background-color: #ffffff;\r\n    border: 1px solid #ddd;\r\n    border-radius: 4px;\n}\n.box[data-v-168a1a0a] {\r\n    border-color: #212529;\r\n    border-style: solid;\r\n    border-width: 1px;\r\n    padding: 10px;\n}\n.actd[data-v-168a1a0a] {\r\n    border-color: #212529;\r\n    border-style: solid;\r\n    border-width: 1px;\r\n    padding: 10px;\n}\n.pre[data-v-168a1a0a] {\r\n    font-size: 0.6rem;\n}\n.form-control[data-v-168a1a0a] {\r\n    display: initial;\r\n    width: initial;\n}\n.paragraph[data-v-168a1a0a] {\r\n    margin: 20px 0px;\r\n    position: relative;\r\n    padding: 5px;\n}\ninput[data-v-168a1a0a],\r\nselect[data-v-168a1a0a] {\r\n    margin: 2px;\r\n    border-color: #34495e;\r\n    color: black;\r\n    font-size: 13px;\r\n    height: 34px;\r\n    font-weight: bold;\r\n    background-color: #ffffad;\r\n    margin-right: 0px;\r\n    min-width: 45px;\r\n    /* border-top-right-radius: 0;\r\n    border-bottom-right-radius: 0; */\r\n    /* border-right: none; */\n}\n.input-group-append[data-v-168a1a0a] {\r\n    margin: 0 2px;\n}\n.input-group-text-right[data-v-168a1a0a] {\r\n    border-radius: 0 0.375rem 0.375rem 0;\r\n    margin-left: 0px;\r\n    cursor: pointer;\n}\n.input-group-text-left[data-v-168a1a0a] {\r\n    border-radius: 0.375rem 0 0 0.375rem;\n}\n.li-convention[data-v-168a1a0a] {\r\n    list-style-type: disc;\r\n    margin: 0;\r\n    padding: 0;\r\n    margin-left: 20px;\n}\n.input-group-text[data-v-168a1a0a] {\r\n    font-size: 13px;\r\n    line-height: 1.5;\r\n    height: 34px;\r\n    padding: 0.375rem 0.75rem;\r\n    border: 1px solid #34495e;\r\n    min-width: 45px;\r\n    text-align: center;\r\n    justify-content: center;\r\n    /*margin: 2px;*/\r\n    background-color: #ffffad;\r\n    color: black;\n}\r\n\r\n/* checkbox */\n.checkbox-container .checkbox-input[data-v-168a1a0a] {\r\n    position: absolute;\r\n    opacity: 0;\r\n    cursor: pointer;\r\n    height: 80%;\r\n    width: 80%;\r\n    top: 0;\r\n    left: 0;\r\n    z-index: 1;\n}\n.checkbox-container[data-v-168a1a0a] {\r\n    display: block;\r\n    position: relative;\r\n    cursor: pointer;\r\n    -webkit-user-select: none;\r\n       -moz-user-select: none;\r\n            user-select: none;\n}\n.checkbox-container .checkbox-icon-cancel[data-v-168a1a0a] {\r\n    position: relative;\r\n    top: 0;\r\n    left: 0;\r\n    height: 50px;\r\n    width: 50px;\r\n    transition: all 0.3s;\r\n    font-size: 1.5em;\r\n    color: red;\n}\n.checkbox-container .checkbox-icon-success[data-v-168a1a0a] {\r\n    position: relative;\r\n    top: 0;\r\n    left: 0;\r\n    height: 50px;\r\n    width: 50px;\r\n    transition: all 0.3s;\r\n    font-size: 1.5em;\r\n    color: green;\n}\r\n\r\n/*.checkbox-container .checkbox-icon-cancel:hover {\r\n    transform: scale(1.1);\r\n}\r\n\r\n.checkbox-container .checkbox-icon-success:hover {\r\n    transform: scale(1.1);\r\n}*/\n.checkbox-container .checkbox-icon-success[data-v-168a1a0a] {\r\n    display: none;\n}\n.checkbox-container .checkbox-input:checked ~ .checkbox-icon-cancel[data-v-168a1a0a] {\r\n    display: none;\n}\n.checkbox-container .checkbox-input:checked ~ .checkbox-icon-success[data-v-168a1a0a] {\r\n    display: contents;\n}\n.valid-section[data-v-168a1a0a] {\r\n    pointer-events: auto;\r\n    top: 50%;\r\n    transform: translateY(-50%);\r\n    width: -moz-fit-content;\r\n    width: fit-content;\n}\n.st-valide[data-v-168a1a0a] {\r\n    position: absolute;\r\n    z-index: 99;\r\n    right: -147px;\r\n    top: 15%;\n}\r\n\r\n/*this is the new approach*/\n.position-relative[data-v-168a1a0a]:has(.valid-section:hover) {\r\n    background: #3498db6f;\n}\nul[data-v-168a1a0a],\r\nli[data-v-168a1a0a] {\r\n    list-style-type: inherit;\n}\n.custom-list[data-v-168a1a0a] {\r\n    counter-reset: section;\r\n    list-style: none;\r\n    /* Supprime les puces par défaut */\r\n    padding-left: 0;\r\n    /* Enlève l'indentation */\n}\n.custom-list > li[data-v-168a1a0a] {\r\n    counter-increment: section;\n}\n.custom-list > li[data-v-168a1a0a]::before {\r\n    content: counter(section) \". \";\r\n    font-weight: bold;\n}\r\n\r\n/* Pour les sous-listes */\n.custom-list > li > ol[data-v-168a1a0a] {\r\n    counter-reset: subsection;\r\n    list-style: none;\r\n    padding-left: 20px;\n}\n.custom-list > li > ol > li[data-v-168a1a0a] {\r\n    counter-increment: subsection;\n}\n.custom-list > li > ol > li[data-v-168a1a0a]::before {\r\n    content: counter(section) \".\" counter(subsection) \" \";\r\n    font-weight: normal;\n}\n.title_[data-v-168a1a0a] {\r\n    padding: 8px 64px;\n}\n.block[data-v-168a1a0a] {\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr;\r\n    gap: 10px;\r\n    margin-bottom: 20px;\r\n    align-items: stretch;\n}\n.column[data-v-168a1a0a] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 10px;\r\n    padding: 10px;\n}\n.article[data-v-168a1a0a] {\r\n    text-align: justify;\r\n    margin-top: 20px;\n}\n.article p[data-v-168a1a0a] {\r\n    margin: 10px 0;\n}\n.list[data-v-168a1a0a] {\r\n    margin-left: 20px;\r\n    list-style-type: disc;\n}\n.list li[data-v-168a1a0a] {\r\n    margin-bottom: 10px;\r\n    text-align: justify;\n}\n.highlight_[data-v-168a1a0a] {\r\n    font-weight: bold;\n}\r\n", ""]);
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

/***/ "./node_modules/raw-loader/dist/cjs.js!./resources/js/html/afg/en/convention_decouvert.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./resources/js/html/afg/en/convention_decouvert.html ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!DOCTYPE html>\r\n<html lang=\"en\">\r\n\r\n<head>\r\n    <meta charset=\"UTF-8\">\r\n    <title>Privilege Overdraft Agreement</title>\r\n    <style>\r\n        .page-pdf {\r\n            padding: 35px;\r\n            width: 714px;\r\n            height: 1040px;\r\n            margin: 50px auto;\r\n            box-sizing: border-box;\r\n            border: 1px solid rgb(221, 221, 221);\r\n            background: white;\r\n            position: relative;\r\n        }\r\n\r\n        .column-pdf {\r\n            padding: 5px;\r\n            flex: 1;\r\n        }\r\n\r\n        .d-flex {\r\n            display: flex;\r\n        }\r\n\r\n        .souligne-espace {\r\n            text-decoration: underline;\r\n            text-decoration-color: #000;\r\n            text-underline-offset: 3px;\r\n        }\r\n\r\n        .X-size {\r\n            padding: 0px 0px 1px 0px !important;\r\n            margin: 0;\r\n            font-weight: 700;\r\n            text-decoration: underline;\r\n        }\r\n\r\n        .Xx-size {\r\n            padding: 4px 0px 1px 0px !important;\r\n            margin: 0;\r\n            font-weight: 700;\r\n            /* text-decoration: underline; */\r\n        }\r\n\r\n    </style>\r\n</head>\r\n\r\n<body>\r\n\r\n    <div style=\"font-size: 7pt; line-height: 7pt; background-color: #fff; color: #000; margin: 40px; text-align: justify;\">\r\n        <div class=\"page-pdf\">\r\n            <div style=\"width: 80px;\">\r\n                <img src=\"/images/{{logo}}\" alt=\"\" style=\"width: 100%; height: auto;\">\r\n            </div>\r\n\r\n            <div style=\"width: 50%; margin: 0 auto; border-right: 1px solid; border-left: 1px solid; border-top: 1px solid; border-bottom: 4px solid; padding: 10px 20px;\r\n                text-align: center;\">\r\n                <b>PRIVILEGE OVERDRAFT AGREEMENT</b>\r\n            </div>\r\n\r\n            <div class=\"d-flex\">\r\n                <div class=\"column-pdf\">\r\n                    <h4 style=\"margin-top: 3px; margin-bottom: 3px;\"><b>BETWEEN:</b></h4>\r\n                    <div style=\"border: 1px solid; padding: 4px;\">\r\n                        <b>{{banque}} abbreviated as </b> « {{abreviation}} », a Public Limited Company with a Board of Directors \r\n                        with a share capital of {{capital_social}} {{devise}}, headquartered at {{siege}}, P.O. Box {{boite_postale}}, \r\n                        registered with the Trade and Personal Property Credit Register of {{lieu_immatriculation}} on {{date_immatriculation}} under number {{immatriculation}}, \r\n                        with an amendment registered on May 6, 2024, under number RC/DLA/2024/M/1031; and registered with the taxpayer registry under the TIN M060800025028W.\r\n                        <p style=\"margin: 3px 0 0 0;\">Hereinafter referred to as \"THE BANK\" on the one hand.</p>\r\n                    </div>\r\n\r\n                    <h4 style=\"margin-top: 3px; margin-bottom: 3px;\"><b>AND:</b></h4>\r\n                    <div style=\"border: 1px solid; padding: 3px;\">\r\n                        <b>Mr./Ms.</b>\r\n                        <p style=\"margin: 2px 0 0 0;\">{{ fullName }} </p>\r\n                        <p style=\"margin: 2px 0 0 0;\">Born on {{ dateNaissance }} in {{ lieu_naissance }};</p>\r\n                        <p style=\"margin: 2px 0 0 0;\">Residing at {{ adresse }}; Occupation: {{ profession }} </p>\r\n                        <p style=\"margin: 2px 0 0 0;\">Employer: {{ employeur }}; P.O. Box: {{ boite_postale_client }} </p>\r\n                        <p style=\"margin: 2px 0 0 0;\">Tel: {{ telephone }}; Email: {{ email }} </p>\r\n                        <p style=\"margin: 2px 0 0 0;\">ID No.: {{ num_identification }}; issued on: {{ date_delivrance }} in {{ lieu_delivrance }} </p>\r\n                        <p style=\"margin: 2px 0 0 0;\">Hereinafter referred to as \"the Client\" on the other hand.</p>\r\n                    </div>\r\n\r\n                    <div style=\"padding: 3px 0 0 0;\">\r\n                        This agreement sets out the general terms and conditions of the \"PRIVILEGE OVERDRAFT\" offer to be provided by \r\n                        {{ banque }}, a public limited company with a board of directors and a share capital of {{ capital_social_lettre }} {{devise}}, \r\n                        registered with the Trade Register under number {{ lieu_immatriculation}}, hereinafter referred to as the \r\n                        Lender, to the Beneficiary designated in the subscription form, which forms an integral part of this agreement \r\n                        and constitutes the law of the parties. \r\n                    </div>\r\n\r\n                    <div style=\"padding: 3px 0 0 0;\">\r\n                        The \"PRIVILEGE OVERDRAFT\" offer is linked to the PRIVILEGE bank card held by the subscriber, or co-held in the case of a joint account, \r\n                        with {{ banque }} (AFG BANK CM). This agreement specifies the content and conditions of the offer.  \r\n                    </div>\r\n\r\n                    <div style=\"padding: 4px 0 0 0;\">\r\n                        The Client acknowledges that, as part of the \"PRIVILEGE OVERDRAFT\" offer, the Bank has provided them with complete information \r\n                        regarding the cost, eligibility criteria, terms, and financing conditions, enabling them to determine whether the proposed credit \r\n                        is suitable for their needs and financial situation. \r\n                    </div>\r\n\r\n                    <div style=\"padding: 4px 0 0 0;\">\r\n                        The Client is informed that they have a right of withdrawal after consideration, which they may exercise within \r\n                        three (03) days following the conclusion of this agreement. This period is extended to fourteen (14) calendar days \r\n                        in the case of bank canvassing. Use of the overdraft during the withdrawal period constitutes irrevocable acceptance \r\n                        of the terms and conditions of the financing.\r\n                        <p style=\"margin: 4px 0 2px 0;\">In the event of withdrawal within the aforementioned periods, cancellation of the overdraft incurs no penalties.</p>\r\n                    </div>\r\n\r\n                    <div style=\"padding: 4px 0 0 0;\">\r\n                        <p class=\"X-size\">I- RIGHT TO OVERDRAFT</p>\r\n                        {{ banque }} grants the Client, who by signing this agreement accepts its terms and conditions, \r\n                        an overdraft right governed by the following provisions: \r\n                        <p class=\"Xx-size\">1.1- Conditions to be met:</p>\r\n                        <p style=\"margin: 2px 0 0 5px;\">- Be a client of {{ banque }}, holding a checking account</p>\r\n                        <p style=\"margin: 0 0 0 5px;\">- Be aged between 18 and 59 at the time of subscription</p>\r\n                        <p style=\"margin: 0 0 0 5px;\">- Irrevocably domicile their income in the Bank’s books </p>\r\n                        <p style=\"margin: 0 0 0 5px;\">- Be a holder of a PRIVILEGE card </p>\r\n                        <p style=\"margin: 0 0 0 2px;\">- Have subscribed to overdraft insurance</p>\r\n                    </div>\r\n\r\n                    <div style=\"padding: 0 0 0 0;\">\r\n                        <p class=\"Xx-size\">1.2- Approval of the overdraft right:</p>\r\n                        The approval of the overdraft right will be notified to the Client by {{banque}} after review and decision by the \r\n                        Credit Committee. \r\n                    </div>\r\n\r\n                    <div style=\"padding: 0 0 0 0;\">\r\n                        <p class=\"Xx-size\">1.3- Overdraft terms</p>\r\n                        <p style=\"margin: 0;\">1.3.1- Initial amount: The overdraft amount is specified in the attached Specific Conditions. It remains \r\n                        in effect unless an amendment is signed, the terms of which are defined in the paragraph ‘Revision of the overdraft amount’ below.</p>\r\n\r\n                        <p style=\"margin: 0; padding-top: 2px;\">1.3.2- Exceeding the limit: Any exceeding of the overdraft ceiling will be considered an unauthorized overdraft, \r\n                        which will immediately result in the early repayment of all amounts due and the cancellation of the overdraft right provided in this agreement.</p> \r\n\r\n                        <p style=\"margin: 0; padding-top: 2px;\">1.3.3- Revision of the overdraft amount: The overdraft amount may be revised at the initiative of either party, \r\n                        duly expressed in the forms indicated below: </p> \r\n                        <p style=\"margin: 5px 0 0 5px;\">- At the subscriber’s request: After approval by {{ banque }}, the subscriber(s) must sign an amendment. The revision takes effect immediately.</p>\r\n                        <p style=\"margin: 0; padding-top: 5px;\">- At the request of {{ banque }}: In the event of a significant reduction in the amount of income domiciled in the deposit account. </p>\r\n\r\n                        <div style=\"padding: 4px 0 0 0;\">\r\n                            The new amount will be communicated to the subscriber by any means providing proof, at the discretion of {{ banque }}. \r\n                        </div>\r\n\r\n                        <div style=\"padding: 4px 0 0 0;\">\r\n                            1.3.4- Overdraft duration: It is limited to 35 consecutive calendar days. In the event of non-repayment at this deadline, \r\n                            the overdraft will be considered unauthorized, resulting in the immediate demand for repayment of all amounts due, \r\n                            temporary suspension of the overdraft authorization until the account balance returns to a credit position, and the regularization of any outstanding debts to the Bank. \r\n                            <p class=\"Xx-size\">1.3.5- Rate</p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"column-pdf\">\r\n                    <div style=\"padding: 4px 0 0 0;\">\r\n                        a) Rate setting: Each overdraft will accrue interest in favor of {{banque}} until full repayment of the amounts due. \r\n                        The interest rate is that provided in the Bank’s fee schedule on the subscription date, as indicated in the subscription form. \r\n                        This rate may be modified at any time under the conditions set out in the following paragraph.\r\n                    </div>\r\n\r\n                    <div style=\"padding: 4px 0 0 0;\">\r\n                        b) Rate modification: Upon each modification, the new rate will be communicated to the subscriber by any means providing proof, \r\n                        at the discretion of {{banque}}, at least one (01) month before the effective date of the modification. \r\n                        Acceptance of the notified rate will result from the subscriber’s informed decision to initiate transactions that render the checking account overdrawn. \r\n                        In case of refusal of the new rate, the subscriber may terminate the PRIVILEGE OVERDRAFT offer without charge, under the conditions provided in the Termination paragraph. \r\n                    </div>\r\n\r\n                    <div style=\"padding: 4px 0 0 0;\">\r\n                        1.3.6 - Interest collection: Interest will be calculated and debited according to the terms specified in the checking account agreement.  \r\n                    </div>\r\n\r\n                    <div style=\"padding: 4px 0 0 0;\">\r\n                        1.3.6 – Annual and Periodic Effective Global Rate – Usury Rate: The Client acknowledges that the Annual and Periodic Effective Global Rates (TEG) \r\n                        and the Usury Rate have been duly communicated to them at the bottom of the overdraft request form attached hereto.  \r\n                    </div>\r\n\r\n                    <div style=\"padding: 0 0 0 0;\">\r\n                        <p class=\"Xx-size\">1.4- Duration of the overdraft right</p>\r\n                        <p style=\"margin: 0;\">It is set for one year, renewable by tacit agreement until the subscriber’s 60th birthday. \r\n                        In the event of termination of this offer, for any reason, the overdraft will be considered unauthorized, \r\n                        resulting in the immediate demand for repayment of all amounts due and the cancellation of the overdraft right provided in these conditions. </p>\r\n                    </div>\r\n\r\n                    <div style=\"padding: 0 0 0 0;\">\r\n                        <p class=\"Xx-size\">1.5- Guarantees </p>\r\n                        <p style=\"margin: 0;\">The overdraft right is granted to the Client based on their professional situation, the regularity of their salaried income, \r\n                        and the permanent, full, and irrevocable domiciliation of said income in the Bank’s books.  </p>\r\n                    </div>\r\n\r\n                    <div style=\"padding: 4px 0 0 0;\">\r\n                        <p class=\"X-size\">II- APPROVED SPECIFIC CONDITIONS </p>\r\n                        <p style=\"margin: 1px 0 0 3px;\">- Type: PRIVILEGE Overdraft </p>\r\n                        <p style=\"margin: 1px 0 0 3px;\">- Authorized ceiling: {{ montant_credit }} {{devise}}</p>\r\n                        <p style=\"margin: 1px 0 0 3px;\">- Duration: {{ duree }} Months</p>\r\n                        <p style=\"margin: 1px 0 0 3px; font-size: 9px;\">- Renewal: Annual, until the age of 60 (at the Bank’s discretion) </p>\r\n                        <p style=\"margin: 1px 0 0 3px;\">- Interest rate: {{ taux }} %</p>\r\n                    </div>\r\n\r\n                    <div style=\"padding: 4px 0 0 0;\">\r\n                        <p class=\"X-size\">III- COST OF THE OVERDRAFT OFFER </p>\r\n                        The \"PRIVILEGE OVERDRAFT\" offer is a component of the ATLANTIC PRIVILEGE CARD offers (Liberty / Harmony / Quiétude / Plénitude / Exclusive).  \r\n                    </div>\r\n\r\n                    <div style=\"padding: 0 0 0 0;\">\r\n                        <p class=\"Xx-size\">3.1- Amount </p>\r\n                        <p style=\"margin: 0;\">The subscriber undertakes to pay the annual flat fee for their ATLANTIC PRIVILEGE CARD, \r\n                        which includes the overdraft setup fees. This fee does not include the interest charges related to an overdraft situation.  </p>\r\n                    </div>\r\n\r\n                    <div style=\"padding: 0 0 0 0;\">\r\n                        <p class=\"Xx-size\">3.2- Revision of the amount </p>\r\n                        <p style=\"margin: 0;\">The card fee amount may be modified by {{ banque }}, which will inform the subscriber \r\n                        by any means providing proof, at its discretion, and notably through the General Banking Conditions, \r\n                        at least one (01) month before the effective date of the changes.  </p>\r\n\r\n                        <p style=\"margin: 3px 0 0 0\">Acceptance of this modification will result from the beneficiary’s use of the services and benefits \r\n                        of the \"ATLANTIC PRIVILEGE\" card offer. In case of refusal of the new amount, the subscriber may terminate this offer \r\n                        without charge, and thereby the \"PRIVILEGE OVERDRAFT\" offer, under the conditions provided for termination.  </p>\r\n                    </div>\r\n\r\n                    <div style=\"padding: 0 0 0 0;\">\r\n                        <p class=\"Xx-size\">3.3- Payment </p>\r\n                        <p style=\"margin: 0;\">The payment of this fee is made annually via automatic debit from the checking account. \r\n                        The first debit is made in the month of receipt of your card at the AFG BANK CAMEROON branch.  </p>\r\n                    </div>\r\n\r\n                    <div style=\"padding: 3px 0 0 0;\">\r\n                        <p class=\"X-size\">IV- TERMINATION </p>\r\n                        The \"PRIVILEGE OVERDRAFT\" offer may be terminated at the initiative of either party under the conditions indicated below:  \r\n                    </div>\r\n\r\n                    <div style=\"padding: 0 0 0 0;\">\r\n                        <p class=\"Xx-size\">4.1- At the subscriber’s request: </p>\r\n                        <p style=\"margin: 0;\">By a termination letter addressed to {{banque}}. The termination takes effect immediately, \r\n                        subject to ongoing transactions.  </p>\r\n                    </div>\r\n\r\n                    <div style=\"padding: 0 0 0 0;\">\r\n                        <p class=\"Xx-size\">4.2- At the Bank’s request: </p>\r\n                        <p style=\"margin: 0;\">In case of non-compliance with the offer’s operating conditions, particularly: </p>\r\n                        <p style=\"margin: 2px 0 0 3px;\">- Serious incident affecting the checking account, cessation of income domiciliation;  </p>\r\n                        <p style=\"margin: 2px 0 0 3px;\">- To companies of the Atlantic Financial Group (AFG) performing certain tasks on behalf of the Bank related to the purposes described above;</p>\r\n                        <p style=\"margin: 2px 0 0 3px;\">- Serious incident affecting the checking account, cessation of income domiciliation;</p>\r\n                        <p style=\"margin: 2px 0 0 3px;\">- Inability to debit the card fee for any reason (insufficient balance, account freeze, seizure, etc.);  </p>\r\n                        <p style=\"margin: 2px 0 0 3px;\">- Failure to repay the overdraft by the due dates, evidenced by the absence of a return to a credit balance at the end of the period specified in the overdraft duration paragraph;</p>\r\n                        <p style=\"margin: 2px 0 0 3px;\">- Exceeding the overdraft ceiling; </p>\r\n                        <p style=\"margin: 2px 0 0 3px;\">- Refusal by the holder to sign an amendment providing for a reduction in the overdraft amount.  </p>\r\n                        The termination decision with immediate effect will be communicated to the subscriber by any means providing proof, at the discretion of {{ banque }}.\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"page-pdf\">\r\n            <div class=\"d-flex\">\r\n                <div class=\"column-pdf\">\r\n                    <div style=\"padding: 0 0 5px 0;\">\r\n                        <p style=\"margin: 5px 0 0 5px;\">- Subscriber’s 60th birthday;</p>\r\n                        <p style=\"margin: 5px 0 0 5px;\">- Loss of employment;</p>\r\n                        <p style=\"margin: 5px 0 0 5px;\">- Closure of the checking account.</p>\r\n                    </div>\r\n\r\n                    <div style=\"padding: 0 0 5px 0;\">\r\n                        <p class=\"X-size\">V- PENALTIES AND INDEMNITIES</p>\r\n\r\n                        <div style=\"padding: 8px 0 0 0;\">\r\n                            In the event of non-repayment of the overdraft by the due date, penalties calculated at a rate of ten percent \r\n                            (10%) of the outstanding amounts will be automatically charged to the Client.\r\n                        </div>\r\n\r\n                        <div style=\"padding: 8px 0 0 0;\">\r\n                            In case of outsourcing the debt collection to specialized recovery agencies, \r\n                            the management fees due to said agencies, representing twenty percent (20%) of the amounts under recovery, \r\n                            will be automatically charged to the Client. \r\n                        </div>\r\n\r\n                        <div style=\"padding: 8px 0 0 0;\">\r\n                            All costs incurred with judicial representatives (detectives, bailiffs, lawyers, experts) for enforced recovery \r\n                            will be automatically charged to the Client.\r\n                        </div>\r\n\r\n                    </div>\r\n\r\n                    <div style=\"padding: 0 0 5px 0;\">\r\n                        <p class=\"X-size\">VI- RISKS OF PROHIBITION AND CRIMINAL PROSECUTION </p>\r\n\r\n                        <div style=\"padding: 8px 0 0 0;\">\r\n                            Failure to repay the facilities granted under this agreement, like non-compliance with the terms of a moratorium, \r\n                            constitutes a Credit Incident under Law No. 2019/021 of December 24, 2019, governing certain rules related to credit activities \r\n                            in the banking and microfinance sectors in Cameroon.\r\n                        </div>\r\n\r\n                        <div style=\"padding: 8px 0 0 0;\">\r\n                            In the event of a Credit Incident, the BENEFICIARY risks a credit ban, prohibiting them from entering into credit transactions \r\n                            with any other banking or microfinance institution. The BENEFICIARY may only regain the ability to enter into credit transactions \r\n                            upon proof of regularization of their situation by repaying the principal and interest of the debt subject to the credit incident, \r\n                            without prejudice to the criminal penalties provided by law. \r\n                        </div>\r\n                    </div>\r\n\r\n                    <div style=\"padding: 0 0 0 0;\">\r\n                        <p class=\"X-size\">VII- Final clauses. </p>\r\n\r\n                        <div style=\"padding: 8px 0 0 0;\">\r\n                            The BENEFICIARY’s rights under this agreement may not be assigned or encumbered. \r\n                        </div>\r\n                        <div style=\"padding: 8px 0 0 0;\">\r\n                            Amendments and addenda to this agreement must be made in writing. \r\n                        </div>\r\n\r\n                        <div style=\"padding: 8px 0 0 0;\">\r\n                            The invalidation of any clause of this agreement does not affect the validity of the other provisions. Invalid clauses \r\n                            will be promptly replaced, at the diligence of the contracting parties, with provisions compliant with applicable legislation. \r\n                        </div>\r\n\r\n                        <div style=\"padding: 8px 0 0 0;\">\r\n                            The BANK’s failure to exercise a right under this agreement does not constitute a waiver of that right.\r\n                        </div>\r\n\r\n                        <div style=\"padding: 8px 0 0 0;\">\r\n                            This agreement is governed by {{ civilite }} law. It takes effect upon its signing by the contracting parties \r\n                            (date of the last signature) and binds the parties until full performance of all payment obligations in favor of the BANK. \r\n                        </div>\r\n\r\n                        <div style=\"padding: 8px 0 0 0;\">\r\n                            The BENEFICIARY consents to the processing of their data by the Bank in connection with this agreement and its consequences. \r\n                            This processing is for the purpose of managing the facilities granted to the BENEFICIARY, commercial activities, statistical studies, \r\n                            risk assessment, security, prevention of defaults and fraud, debt collection, anti-money laundering, combating terrorist financing, \r\n                            and compliance with legal and regulatory obligations.\r\n                        </div>\r\n\r\n                        <div style=\"padding: 8px 0 0 0;\">\r\n                            These personal data are protected by the professional secrecy to which the Bank is bound. \r\n                            The Client expressly agrees, for the entire duration of the facility, that their personal data may be transmitted: \r\n                            <p style=\"margin: 5px 0 0 5px;\">- to service providers and subcontractors performing certain tasks on behalf of the Bank related to the purposes described above; </p>\r\n                            <p style=\"margin: 5px 0 0 5px;\">- to companies of the Atlantic Financial Group (AFG) performing certain tasks on behalf of the Bank related to the purposes described above;</p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"column-pdf\">\r\n                    <div style=\"padding: 0 0 0 0;\">\r\n                        <p class=\"Xx-size\">4.3- Automatic termination </p>\r\n                        <p style=\"margin: 0;\">The \"PRIVILEGE OVERDRAFT\" offer automatically terminates in the event of:  </p>\r\n                        <p style=\"margin: 5px 0 0 5px;\">- Death of the subscriber; </p>\r\n                        <p style=\"margin: 5px 0 0 5px;\">- To AFG Group companies for the purpose of presenting products and services managed by these companies, in case of resource pooling; </p>\r\n                        <p style=\"margin: 5px 0 0 5px;\">- To AFG Group companies with which the subscriber is or will be in a contractual relationship for the purpose of updating data collected by these companies;  </p>\r\n                        <p style=\"margin: 5px 0 0 5px;\">- To organizations tasked with conducting surveys or polls;  </p>\r\n                        <p style=\"margin: 5px 0 0 5px;\">- To organizations such as the tax administration and the Central Bank to meet the legal or regulatory obligations incumbent on the Bank.  </p>\r\n                    </div>\r\n\r\n                    <div style=\"padding: 8px 0 0 0;\">\r\n                        The personal data provided by the Client in accordance with the purposes above may, during various operations, \r\n                        be transferred to a third country, with rules ensuring data protection and security in place in accordance with applicable legislation. \r\n                    </div>\r\n\r\n                    <div style=\"padding: 8px 0 0 0;\">\r\n                        These personal data may be communicated, upon their request, to official bodies and administrative or judicial authorities, \r\n                        particularly in the context of combating money laundering or terrorist financing. \r\n                    </div>\r\n\r\n                    <div style=\"padding: 8px 0 0 0;\">\r\n                        These personal data may be subject to the exercise of the right of access, rectification, and opposition under the conditions provided by applicable law. \r\n                        The Client may obtain a copy of the data concerning them and, if applicable, have it rectified by sending a letter to the Bank’s registered office.  \r\n                    </div>\r\n\r\n                    <div style=\"padding: 8px 0 0 0;\">\r\n                        For any potential issues or complaints regarding the operation of their account or the use of the services provided, \r\n                        the BORROWER may refer to the following contacts: \r\n                    </div>\r\n\r\n                    <div style=\"padding: 0 0 0 0;\">\r\n                        <p style=\"margin: 5px 0 0 5px;\">- Their Account Manager or the branch manager; these are their primary contacts and serve as intermediaries between the Bank and the Client. </p>\r\n                        <p style=\"margin: 5px 0 0 5px;\">- The \"Customer Experience Service,\" responsible for centralized complaint handling. This service can be reached at the following contact details: </p>\r\n                    </div>\r\n\r\n                    <div style=\"margin: 5px 10px; border: 3px solid; padding: 10px; border-radius: 10px; font-weight: 700; text-align: center;\">\r\n                        <b>Customer Experience Service,</b> <br>\r\n                        <b>P.O. Box: 2933 Douala – Cameroon,</b>  <br>\r\n                        <b>Customer Relations Center: {{ numero_filiale }} ;</b> <br>\r\n                        <b>Email: <span style=\"color: blue;\">{{ mail_filiale }}</span> </b>\r\n                    </div>\r\n\r\n                    <div style=\"padding: 8px 0 5px 0;\">\r\n                        The Bank undertakes to acknowledge receipt of the complaint within ten (10) days and to provide a response within a maximum of forty-five (45) business days, \r\n                        except in exceptional cases.  \r\n                    </div>\r\n\r\n                    <div style=\"padding: 0 0 5px 0;\">\r\n                        <p class=\"X-size\">VIII - Applicable law - Dispute resolution</p>\r\n\r\n                        <div style=\"padding: 8px 0 0 0;\">\r\n                            This agreement is exclusively governed by Cameroonian law. \r\n                            In the event of a dispute between the Parties concerning the validity, interpretation, performance, or non-performance of this agreement, \r\n                            the Parties undertake to consult and seek an amicable resolution within thirty (30) days following notification by one Party to the other \r\n                            of the subject of the dispute, whether existing or potential. This period may be extended for an equal duration by mutual agreement of the Parties. \r\n                        </div>\r\n\r\n                        <div style=\"padding: 8px 0 0 0;\">\r\n                            Any dispute not resolved amicably within the aforementioned periods will be submitted to the competent jurisdiction \r\n                            in the district where the registered office or domicile of the defendant is located.  \r\n                        </div>\r\n\r\n                        <div style=\"padding: 8px 0 0 0;\">\r\n                            For the execution of this agreement and its consequences, the Parties elect their domicile at their respective registered offices as indicated above.\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div style=\"margin-top: 20px;\">\r\n                <hr>\r\n                <table style=\"width: 100%;\">\r\n                    <tr>\r\n                        <td style=\"width: 50%; text-align: center;\"><b><u>Client’s signature</u></b></td>\r\n                        <td style=\"width: 50%; text-align: center;\"><b><u>Bank’s signature</u></b></td>\r\n                    </tr>\r\n                </table>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n</body>\r\n\r\n</html>");

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/conventions/en/DECOUVERT.vue?vue&type=style&index=0&id=168a1a0a&lang=css&scoped=true":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/conventions/en/DECOUVERT.vue?vue&type=style&index=0&id=168a1a0a&lang=css&scoped=true ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DECOUVERT_vue_vue_type_style_index_0_id_168a1a0a_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DECOUVERT.vue?vue&type=style&index=0&id=168a1a0a&lang=css&scoped=true */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/conventions/en/DECOUVERT.vue?vue&type=style&index=0&id=168a1a0a&lang=css&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DECOUVERT_vue_vue_type_style_index_0_id_168a1a0a_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DECOUVERT_vue_vue_type_style_index_0_id_168a1a0a_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/offview/bank/afg/memo/conventions/en/DECOUVERT.vue":
/*!************************************************************************************!*\
  !*** ./resources/js/components/offview/bank/afg/memo/conventions/en/DECOUVERT.vue ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DECOUVERT_vue_vue_type_template_id_168a1a0a_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DECOUVERT.vue?vue&type=template&id=168a1a0a&scoped=true */ "./resources/js/components/offview/bank/afg/memo/conventions/en/DECOUVERT.vue?vue&type=template&id=168a1a0a&scoped=true");
/* harmony import */ var _DECOUVERT_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DECOUVERT.vue?vue&type=script&lang=js */ "./resources/js/components/offview/bank/afg/memo/conventions/en/DECOUVERT.vue?vue&type=script&lang=js");
/* harmony import */ var _DECOUVERT_vue_vue_type_style_index_0_id_168a1a0a_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DECOUVERT.vue?vue&type=style&index=0&id=168a1a0a&lang=css&scoped=true */ "./resources/js/components/offview/bank/afg/memo/conventions/en/DECOUVERT.vue?vue&type=style&index=0&id=168a1a0a&lang=css&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _DECOUVERT_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _DECOUVERT_vue_vue_type_template_id_168a1a0a_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _DECOUVERT_vue_vue_type_template_id_168a1a0a_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "168a1a0a",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/offview/bank/afg/memo/conventions/en/DECOUVERT.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/offview/bank/afg/memo/conventions/en/DECOUVERT.vue?vue&type=script&lang=js":
/*!************************************************************************************************************!*\
  !*** ./resources/js/components/offview/bank/afg/memo/conventions/en/DECOUVERT.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DECOUVERT_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DECOUVERT.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/conventions/en/DECOUVERT.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DECOUVERT_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/offview/bank/afg/memo/conventions/en/DECOUVERT.vue?vue&type=style&index=0&id=168a1a0a&lang=css&scoped=true":
/*!********************************************************************************************************************************************!*\
  !*** ./resources/js/components/offview/bank/afg/memo/conventions/en/DECOUVERT.vue?vue&type=style&index=0&id=168a1a0a&lang=css&scoped=true ***!
  \********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DECOUVERT_vue_vue_type_style_index_0_id_168a1a0a_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DECOUVERT.vue?vue&type=style&index=0&id=168a1a0a&lang=css&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/conventions/en/DECOUVERT.vue?vue&type=style&index=0&id=168a1a0a&lang=css&scoped=true");


/***/ }),

/***/ "./resources/js/components/offview/bank/afg/memo/conventions/en/DECOUVERT.vue?vue&type=template&id=168a1a0a&scoped=true":
/*!******************************************************************************************************************************!*\
  !*** ./resources/js/components/offview/bank/afg/memo/conventions/en/DECOUVERT.vue?vue&type=template&id=168a1a0a&scoped=true ***!
  \******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DECOUVERT_vue_vue_type_template_id_168a1a0a_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DECOUVERT_vue_vue_type_template_id_168a1a0a_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DECOUVERT_vue_vue_type_template_id_168a1a0a_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DECOUVERT.vue?vue&type=template&id=168a1a0a&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/conventions/en/DECOUVERT.vue?vue&type=template&id=168a1a0a&scoped=true");


/***/ })

}]);