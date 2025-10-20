(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_offview_bank_afg_memo_conventions_en_CAUTIONNEMENT_PERSONNEL_SOLIDAIRE_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/conventions/en/CAUTIONNEMENT_PERSONNEL_SOLIDAIRE.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/conventions/en/CAUTIONNEMENT_PERSONNEL_SOLIDAIRE.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_ebapis_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../services/ebapis.service */ "./resources/js/services/ebapis.service.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../services/auth.service */ "./resources/js/services/auth.service.js");
/* harmony import */ var _raw_loader_html_afg_fr_convention_cautionnement_solidaire_perso_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !!raw-loader!../../../../../../../html/afg/fr/convention_cautionnement_solidaire_perso.html */ "./node_modules/raw-loader/dist/cjs.js!./resources/js/html/afg/fr/convention_cautionnement_solidaire_perso.html");
/* harmony import */ var _raw_loader_html_afg_en_convention_cautionnement_solidaire_perso_html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !!raw-loader!../../../../../../../html/afg/en/convention_cautionnement_solidaire_perso.html */ "./node_modules/raw-loader/dist/cjs.js!./resources/js/html/afg/en/convention_cautionnement_solidaire_perso.html");
/* harmony import */ var qrcode_generator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! qrcode-generator */ "./node_modules/qrcode-generator/qrcode.js");
/* harmony import */ var qrcode_generator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(qrcode_generator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! crypto-js */ "./node_modules/crypto-js/index.js");
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _html2canvas__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../html2canvas */ "./resources/js/html2canvas.js");
/* harmony import */ var _html2canvas__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_html2canvas__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jspdf */ "./node_modules/jspdf/dist/jspdf.es.min.js");
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
var _methods;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return r; }; var t, r = {}, e = Object.prototype, n = e.hasOwnProperty, o = "function" == typeof Symbol ? Symbol : {}, i = o.iterator || "@@iterator", a = o.asyncIterator || "@@asyncIterator", u = o.toStringTag || "@@toStringTag"; function c(t, r, e, n) { Object.defineProperty(t, r, { value: e, enumerable: !n, configurable: !n, writable: !n }); } try { c({}, ""); } catch (t) { c = function c(t, r, e) { return t[r] = e; }; } function h(r, e, n, o) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype); return c(a, "_invoke", function (r, e, n) { var o = 1; return function (i, a) { if (3 === o) throw Error("Generator is already running"); if (4 === o) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var u = n.delegate; if (u) { var c = d(u, n); if (c) { if (c === f) continue; return c; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (1 === o) throw o = 4, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = 3; var h = s(r, e, n); if ("normal" === h.type) { if (o = n.done ? 4 : 2, h.arg === f) continue; return { value: h.arg, done: n.done }; } "throw" === h.type && (o = 4, n.method = "throw", n.arg = h.arg); } }; }(r, n, new Context(o || [])), !0), a; } function s(t, r, e) { try { return { type: "normal", arg: t.call(r, e) }; } catch (t) { return { type: "throw", arg: t }; } } r.wrap = h; var f = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var l = {}; c(l, i, function () { return this; }); var p = Object.getPrototypeOf, y = p && p(p(x([]))); y && y !== e && n.call(y, i) && (l = y); var v = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(l); function g(t) { ["next", "throw", "return"].forEach(function (r) { c(t, r, function (t) { return this._invoke(r, t); }); }); } function AsyncIterator(t, r) { function e(o, i, a, u) { var c = s(t[o], t, i); if ("throw" !== c.type) { var h = c.arg, f = h.value; return f && "object" == _typeof(f) && n.call(f, "__await") ? r.resolve(f.__await).then(function (t) { e("next", t, a, u); }, function (t) { e("throw", t, a, u); }) : r.resolve(f).then(function (t) { h.value = t, a(h); }, function (t) { return e("throw", t, a, u); }); } u(c.arg); } var o; c(this, "_invoke", function (t, n) { function i() { return new r(function (r, o) { e(t, n, r, o); }); } return o = o ? o.then(i, i) : i(); }, !0); } function d(r, e) { var n = e.method, o = r.i[n]; if (o === t) return e.delegate = null, "throw" === n && r.i["return"] && (e.method = "return", e.arg = t, d(r, e), "throw" === e.method) || "return" !== n && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + n + "' method")), f; var i = s(o, r.i, e.arg); if ("throw" === i.type) return e.method = "throw", e.arg = i.arg, e.delegate = null, f; var a = i.arg; return a ? a.done ? (e[r.r] = a.value, e.next = r.n, "return" !== e.method && (e.method = "next", e.arg = t), e.delegate = null, f) : a : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f); } function w(t) { this.tryEntries.push(t); } function m(r) { var e = r[4] || {}; e.type = "normal", e.arg = t, r[4] = e; } function Context(t) { this.tryEntries = [[-1]], t.forEach(w, this), this.reset(!0); } function x(r) { if (null != r) { var e = r[i]; if (e) return e.call(r); if ("function" == typeof r.next) return r; if (!isNaN(r.length)) { var o = -1, a = function e() { for (; ++o < r.length;) if (n.call(r, o)) return e.value = r[o], e.done = !1, e; return e.value = t, e.done = !0, e; }; return a.next = a; } } throw new TypeError(_typeof(r) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, c(v, "constructor", GeneratorFunctionPrototype), c(GeneratorFunctionPrototype, "constructor", GeneratorFunction), c(GeneratorFunctionPrototype, u, GeneratorFunction.displayName = "GeneratorFunction"), r.isGeneratorFunction = function (t) { var r = "function" == typeof t && t.constructor; return !!r && (r === GeneratorFunction || "GeneratorFunction" === (r.displayName || r.name)); }, r.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, c(t, u, "GeneratorFunction")), t.prototype = Object.create(v), t; }, r.awrap = function (t) { return { __await: t }; }, g(AsyncIterator.prototype), c(AsyncIterator.prototype, a, function () { return this; }), r.AsyncIterator = AsyncIterator, r.async = function (t, e, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(h(t, e, n, o), i); return r.isGeneratorFunction(e) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, g(v), c(v, u, "Generator"), c(v, i, function () { return this; }), c(v, "toString", function () { return "[object Generator]"; }), r.keys = function (t) { var r = Object(t), e = []; for (var n in r) e.unshift(n); return function t() { for (; e.length;) if ((n = e.pop()) in r) return t.value = n, t.done = !1, t; return t.done = !0, t; }; }, r.values = x, Context.prototype = { constructor: Context, reset: function reset(r) { if (this.prev = this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(m), !r) for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0][4]; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(r) { if (this.done) throw r; var e = this; function n(t) { a.type = "throw", a.arg = r, e.next = t; } for (var o = e.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i[4], u = this.prev, c = i[1], h = i[2]; if (-1 === i[0]) return n("end"), !1; if (!c && !h) throw Error("try statement without catch or finally"); if (null != i[0] && i[0] <= u) { if (u < c) return this.method = "next", this.arg = t, n(c), !0; if (u < h) return n(h), !1; } } }, abrupt: function abrupt(t, r) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var n = this.tryEntries[e]; if (n[0] > -1 && n[0] <= this.prev && this.prev < n[2]) { var o = n; break; } } o && ("break" === t || "continue" === t) && o[0] <= r && r <= o[2] && (o = null); var i = o ? o[4] : {}; return i.type = t, i.arg = r, o ? (this.method = "next", this.next = o[2], f) : this.complete(i); }, complete: function complete(t, r) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), f; }, finish: function finish(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[2] === t) return this.complete(e[4], e[3]), m(e), f; } }, "catch": function _catch(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[0] === t) { var n = e[4]; if ("throw" === n.type) { var o = n.arg; m(e); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(r, e, n) { return this.delegate = { i: x(r), r: e, n: n }, "next" === this.method && (this.arg = t), f; } }, r; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }





// import { PlusIcon, TrashIcon } from "vue-feather-icons";



// import GetDefaultValue from "./Utils";




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    PlusIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_8__.PlusIcon,
    TrashIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_8__.TrashIcon
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
  created: function created() {},
  data: function data() {
    var _this$annexe, _formData;
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
        name: 'Une demande de financement',
        value: false
      }, {
        name: 'Une attestation de service ou contrat de travail ;',
        value: false
      }, {
        name: 'Une Attestation de Virement Irrévocable des salaires, régulièrement délivrée par l’employeur ;',
        value: false
      }, {
        name: 'Un bulletin individuel d’adhésion au contrat d’Assurance-invalidité décès Groupe Emprunteur, dûment approuvé par l’Assureur',
        value: false
      }, {
        name: 'Un formulaire d’adhésion au fonds de garantie dûment souscrit par  l’Emprunteur ;',
        value: false
      }, {
        name: '',
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
      formData: (_formData = {
        table: "cred_pub_tb_15503",
        banque_name: "",
        banque_abreviation: "",
        statut_juridique: "",
        capital_social: "",
        siege_social: "",
        boîte_postale: "",
        bp: "",
        lieu_immatriculation: "",
        date_immatriculation: "",
        immatriculation_rccm: "",
        date_en_lettre: "",
        // modification_rccm: "",
        // designation: "",
        nom_client: "",
        civilite_client: "",
        civilite_caution: "",
        nom_caution: "",
        date_de_naissance: "",
        lieu_de_naissance: "",
        nom_du_pere: "",
        nom_de_la_mere: "",
        adresse_client: "",
        num_cni: "",
        date_de_delivration: "",
        lieu_delivration: "",
        // designation_de_la_caution: "",

        montant_sollicite: "",
        montant_sollicite_en_lettre: "",
        objet_de_la_demande: "",
        montant_maximum_garanti: "",
        montant_maximum_garanti_en_lettre: "",
        titre_client: "",
        // nom_caution: "",
        num_compte_bancaire: "",
        montant_maximal_garanti: "",
        montant_maximal_garanti_lettre: "",
        patrimoine_caution: "",
        bien_actifs: "",
        valeur_actifs: "",
        bien_passifs: "",
        valeur_passifs: "",
        pays_legislatives: "",
        lieu_edition: "",
        date_edition: this.getFormattedDate(),
        // titre_client: '',
        nom_prenom: ''
      }, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_formData, "montant_maximum_garanti", ''), "montant_maximum_garanti_lettres", ''), "key", "Convention_de_cautionnement"), "indexSelectionne", this.indexSelectionne), "telephones", []), "annexe_id", (_this$annexe = this.annexe) === null || _this$annexe === void 0 ? void 0 : _this$annexe.id), "devise", ""), "avoirs_investissements", []), "date_de_naissance_caution", ""), "lieu_naissance_caution", ""), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_formData, "nom_du_pere_caution", ""), "nom_de_la_mere_caution", ""), "adresse_de_la_caution", ""), "type_piece_identite_caution", ""), "num_piece_identite_caution", ""), "date_delivrance_piece_identite_caution", ""), "lieu_delivrance_piece_identite_caution", "")),
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
      titre_identification: "",
      authcheckUsr: null,
      logo: null,
      load_data: true,
      text_avoirs_investissements: "",
      lang: "fr"
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
      var compteCourant;
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
            _this.$on('generate-pdf-process', function (data) {
              _this.pdf_process = data;
            });
            _this.$on('build-off-printable', function () {
              _this.buildOffPrintable();
            });
            compteCourant = _this.comptesAFGBank.find(function (c) {
              return c.type === 'Compte courant';
            });
            if (compteCourant) {
              _this.formData.num_compte_bancaire = compteCourant.code;
            }
          case 7:
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
      console.log('onCheckField', check, field);
      if (['var_2', 'var_4', 'var_7'].includes(field)) {
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

      if (['var_2', 'var_4', 'var_7'].includes(field)) {
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
      var _this$meta_data$dossi, _this$meta_data$dossi2, _this$meta_data$dossi4, _this$meta_data$dossi16, _this$meta_data$dossi17, _this$meta_data$dossi18, _this$meta_data$dossi19;
      var createdKey = "Convention_de_cautionnement";
      // console.log('this.annexe');

      this.formData.boîte_postale = "P.O. Box: 2933 Douala, Cameroun";
      console.log("this.authenticatedUser.filiale", this.formData.boîte_postale);
      var found = (_this$meta_data$dossi = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi === void 0 || (_this$meta_data$dossi = _this$meta_data$dossi[createdKey]) === null || _this$meta_data$dossi === void 0 ? void 0 : _this$meta_data$dossi[this.indexSelectionne];
      if (this.authenticatedUser.filiale == 'AFGB ML') {
        var _this$authcheckUsr$si, _this$authcheckUsr;
        this.siege_filiale = "Immeuble M1, rue 286, Hamdallaye ACI 2 000 BP 72, Bamako, Mali";
        this.numero_filiale = "(+223) 44 98 07 00";
        this.mail_filiale = "assistance@afgbank.ml";
        this.formData.banque_name = "AFG MALI";
        this.formData.banque_abreviation = this.authenticatedUser.filiale;
        this.formData.capital_social = "10 000 060 000";
        this.formData.siege_social = "Bamako, quartier du fleuve, boulevard Abdelaziz BOUTEFLIKA";
        this.formData.boîte_postale = "BP 72";
        this.formData.bp = "BP 72";
        this.formData.pays_legislatives = "Mali";
        this.formData.devise = (_this$authcheckUsr$si = (_this$authcheckUsr = this.authcheckUsr) === null || _this$authcheckUsr === void 0 ? void 0 : _this$authcheckUsr.sigle_devise) !== null && _this$authcheckUsr$si !== void 0 ? _this$authcheckUsr$si : "";
        this.formData.lieu_immatriculation = "Bamako";
        this.formData.lieu_edition = "Bamako";
        this.formData.date_immatriculation = "1999-01-01";
        // console.log("this.formData", this.formData.banque);
        this.formData.statut_juridique = "Société Anonyme avec Conseil d’Administration";
        this.formData['immatriculation_rccm'] = "MA BKO 2007 B 1183";
      } else if (this.authenticatedUser.filiale == 'AFGB CM') {
        var _this$authcheckUsr$si2, _this$authcheckUsr2;
        this.siege_filiale = "1112 Boulevard de la Liberté - Akwa Douala, Cameroun";
        this.numero_filiale = "(+237) 233 50 99 00";
        this.mail_filiale = "customer.care@afgbank.cm";
        this.formData.banque_name = "AFG CAMEROUN";
        this.formData.banque_abreviation = this.authenticatedUser.filiale;
        this.formData.capital_social = "28 853 520 000";
        this.formData.siege_social = "1112 Boulevard de la Liberté - Akwa Douala, Cameroun";
        this.formData.boîte_postale = "P.O. Box: 2933 Douala, Cameroun";
        this.formData.bp = "P.O. Box: 2933 Douala, Cameroun";
        this.formData.pays_legislatives = "Cameroun";
        this.formData.devise = (_this$authcheckUsr$si2 = (_this$authcheckUsr2 = this.authcheckUsr) === null || _this$authcheckUsr2 === void 0 ? void 0 : _this$authcheckUsr2.sigle_devise) !== null && _this$authcheckUsr$si2 !== void 0 ? _this$authcheckUsr$si2 : "";
        this.formData.lieu_immatriculation = "Douala";
        this.formData.lieu_edition = "Douala";
        this.formData.date_immatriculation = "2008-09-19";
        this.formData.statut_juridique = "Société Anonyme avec Conseil d’Administration";
        this.formData['immatriculation_rccm'] = "RC/DLA/2008/B/1195";
      }
      if (((_this$meta_data$dossi2 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi2 === void 0 ? void 0 : _this$meta_data$dossi2.cred_pub_tb_120004) != undefined) {
        var _this$meta_data$dossi3, _this$cautionnement_p, _this$cautionnement_p2, _this$cautionnement_p3, _this$cautionnement_p4, _this$cautionnement_p5, _this$cautionnement_p6, _this$cautionnement_p7, _this$cautionnement_p8, _this$cautionnement_p9, _this$cautionnement_p0, _this$cautionnement_p1, _this$cautionnement_p10, _this$cautionnement_p11, _this$cautionnement_p12, _this$cautionnement_p13, _this$formData$avoirs;
        var tb4 = (_this$meta_data$dossi3 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi3 === void 0 ? void 0 : _this$meta_data$dossi3.cred_pub_tb_120008;
        var data = tb4 === null || tb4 === void 0 ? void 0 : tb4.garanties.find(function (el) {
          return el.id == 'caution';
        });
        this.cautionnement_personnel = data.infos.find(function (el) {
          return el.isPrincipal == "Oui";
        });
        this.formData.civilite_caution = ((_this$cautionnement_p = this.cautionnement_personnel) === null || _this$cautionnement_p === void 0 ? void 0 : _this$cautionnement_p['sexe']) == 'Masculin' ? 'Monsieur' : 'Madame';

        // this.formData.nom_caution = this.cautionnement_personnel?.['firstname'] + ' ' + this.cautionnement_personnel?.['lastname'];
        this.formData.nom_caution = [(_this$cautionnement_p2 = (_this$cautionnement_p3 = this.cautionnement_personnel) === null || _this$cautionnement_p3 === void 0 ? void 0 : _this$cautionnement_p3.firstname) !== null && _this$cautionnement_p2 !== void 0 ? _this$cautionnement_p2 : '', (_this$cautionnement_p4 = (_this$cautionnement_p5 = this.cautionnement_personnel) === null || _this$cautionnement_p5 === void 0 ? void 0 : _this$cautionnement_p5.lastname) !== null && _this$cautionnement_p4 !== void 0 ? _this$cautionnement_p4 : ''].filter(Boolean).join(' ');
        this.formData.date_de_naissance_caution = (_this$cautionnement_p6 = this.cautionnement_personnel) === null || _this$cautionnement_p6 === void 0 ? void 0 : _this$cautionnement_p6['date_naissance'];
        this.formData.lieu_naissance_caution = (_this$cautionnement_p7 = this.cautionnement_personnel) === null || _this$cautionnement_p7 === void 0 ? void 0 : _this$cautionnement_p7['lieu_naissance'];
        this.formData.nom_du_pere_caution = (_this$cautionnement_p8 = this.cautionnement_personnel) === null || _this$cautionnement_p8 === void 0 ? void 0 : _this$cautionnement_p8['nom_du_pere'];
        this.formData.nom_de_la_mere_caution = (_this$cautionnement_p9 = this.cautionnement_personnel) === null || _this$cautionnement_p9 === void 0 ? void 0 : _this$cautionnement_p9['nom_de_la_mere'];
        this.formData.adresse_de_la_caution = (_this$cautionnement_p0 = this.cautionnement_personnel) === null || _this$cautionnement_p0 === void 0 ? void 0 : _this$cautionnement_p0['lieu_habitation'];
        this.formData.type_piece_identite_caution = (_this$cautionnement_p1 = this.cautionnement_personnel) === null || _this$cautionnement_p1 === void 0 ? void 0 : _this$cautionnement_p1['type_piece'];
        this.formData.num_piece_identite_caution = (_this$cautionnement_p10 = this.cautionnement_personnel) === null || _this$cautionnement_p10 === void 0 ? void 0 : _this$cautionnement_p10['piece'];
        this.formData.date_delivrance_piece_identite_caution = (_this$cautionnement_p11 = this.cautionnement_personnel) === null || _this$cautionnement_p11 === void 0 ? void 0 : _this$cautionnement_p11['date_delivrance_piece'];
        this.formData.lieu_delivrance_piece_identite_caution = (_this$cautionnement_p12 = this.cautionnement_personnel) === null || _this$cautionnement_p12 === void 0 ? void 0 : _this$cautionnement_p12['lieu_delivration'];
        this.formData.avoirs_investissements = (_this$cautionnement_p13 = this.cautionnement_personnel) === null || _this$cautionnement_p13 === void 0 ? void 0 : _this$cautionnement_p13['avoirsInvestissements'];
        if (((_this$formData$avoirs = this.formData.avoirs_investissements) === null || _this$formData$avoirs === void 0 ? void 0 : _this$formData$avoirs.length) > 0) {
          this.text_avoirs_investissements = "";
          for (var index = 0; index < this.formData.avoirs_investissements.length; index++) {
            var _this$formData;
            var el = this.formData.avoirs_investissements[index];
            this.text_avoirs_investissements += "<li> ".concat(el.label, " ").concat(el.value, " ").concat((_this$formData = this.formData) === null || _this$formData === void 0 ? void 0 : _this$formData.devise, "</li>");
          }
        }
      }
      if ((_this$meta_data$dossi4 = this.meta_data["dossier_credit"]) !== null && _this$meta_data$dossi4 !== void 0 && _this$meta_data$dossi4['cred_pub_tb_120001']) {
        var _this$meta_data$dossi5, _this$meta_data$dossi6, _this$meta_data$dossi7, _this$meta_data$dossi8, _this$meta_data$dossi9, _this$meta_data$dossi0, _this$meta_data$dossi1, _this$meta_data$dossi10, _this$meta_data$dossi11, _this$meta_data$dossi12, _this$meta_data$dossi13, _this$meta_data$dossi14, _this$meta_data$dossi15;
        // this.formData.lieu_residence = this.meta_data["dossier_credit"]?.['cred_pub_tb_120001']?.['ville_residence'];
        this.formData.nom_client = ((_this$meta_data$dossi5 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi5 === void 0 || (_this$meta_data$dossi5 = _this$meta_data$dossi5['cred_pub_tb_120001']) === null || _this$meta_data$dossi5 === void 0 ? void 0 : _this$meta_data$dossi5['nom']) + ' ' + ((_this$meta_data$dossi6 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi6 === void 0 || (_this$meta_data$dossi6 = _this$meta_data$dossi6['cred_pub_tb_120001']) === null || _this$meta_data$dossi6 === void 0 ? void 0 : _this$meta_data$dossi6['prenoms']);
        // this.formatData.civilite_caution = this.meta_data["dossier_credit"]?.['cred_pub_tb_120001']?.['sexe'] == 'Masculin' ? 'Monsieur' : 'Madame';
        // this.formData.nom_caution = this.meta_data["dossier_credit"]?.['cred_pub_tb_120001']?.['nom'] + ' ' + this.meta_data["dossier_credit"]?.['cred_pub_tb_120001']?.['prenoms'];
        // this.formData.telephone = this.meta_data["dossier_credit"]?.['cred_pub_tb_120001']?.['telephone'];
        // this.formData.telephone_bureau = this.meta_data["dossier_credit"]?.['cred_pub_tb_120001']?.['telephone_bureau'];
        this.formData.civilite_client = ((_this$meta_data$dossi7 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi7 === void 0 || (_this$meta_data$dossi7 = _this$meta_data$dossi7['cred_pub_tb_120001']) === null || _this$meta_data$dossi7 === void 0 ? void 0 : _this$meta_data$dossi7['sexe']) == 'Masculin' ? 'Monsieur' : 'Madame';
        this.formData.date_de_naissance = (_this$meta_data$dossi8 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi8 === void 0 || (_this$meta_data$dossi8 = _this$meta_data$dossi8['cred_pub_tb_120001']) === null || _this$meta_data$dossi8 === void 0 ? void 0 : _this$meta_data$dossi8['date_naissance'];
        this.formData.lieu_de_naissance = (_this$meta_data$dossi9 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi9 === void 0 || (_this$meta_data$dossi9 = _this$meta_data$dossi9['cred_pub_tb_120001']) === null || _this$meta_data$dossi9 === void 0 ? void 0 : _this$meta_data$dossi9['ville_naissance'];
        this.formData.adresse_client = (_this$meta_data$dossi0 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi0 === void 0 || (_this$meta_data$dossi0 = _this$meta_data$dossi0['cred_pub_tb_120001']) === null || _this$meta_data$dossi0 === void 0 ? void 0 : _this$meta_data$dossi0['adresse'];
        this.formData.boite_postale_client = (_this$meta_data$dossi1 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi1 === void 0 || (_this$meta_data$dossi1 = _this$meta_data$dossi1['cred_pub_tb_120001']) === null || _this$meta_data$dossi1 === void 0 ? void 0 : _this$meta_data$dossi1['adresse_postale'];
        // this.formData.email = this.meta_data["dossier_credit"]?.['cred_pub_tb_120001']?.['email_client'];

        this.formData.lieu_delivration = (_this$meta_data$dossi10 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi10 === void 0 || (_this$meta_data$dossi10 = _this$meta_data$dossi10['cred_pub_tb_120001']) === null || _this$meta_data$dossi10 === void 0 ? void 0 : _this$meta_data$dossi10['lieu_delivrance_piece'];
        this.formData.date_de_delivration = (_this$meta_data$dossi11 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi11 === void 0 || (_this$meta_data$dossi11 = _this$meta_data$dossi11['cred_pub_tb_120001']) === null || _this$meta_data$dossi11 === void 0 ? void 0 : _this$meta_data$dossi11['date_delivrance_piece'];
        this.formData.titre_identification = (_this$meta_data$dossi12 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi12 === void 0 || (_this$meta_data$dossi12 = _this$meta_data$dossi12['cred_pub_tb_120001']) === null || _this$meta_data$dossi12 === void 0 ? void 0 : _this$meta_data$dossi12['type_piece'];
        this.formData.num_cni = (_this$meta_data$dossi13 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi13 === void 0 || (_this$meta_data$dossi13 = _this$meta_data$dossi13['cred_pub_tb_120001']) === null || _this$meta_data$dossi13 === void 0 ? void 0 : _this$meta_data$dossi13['num_piece'];
        // console.log('numero_dossier', this.meta_data["numero_dossier"]);
        this.formData.nom_du_pere = (_this$meta_data$dossi14 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi14 === void 0 || (_this$meta_data$dossi14 = _this$meta_data$dossi14['cred_pub_tb_120001']) === null || _this$meta_data$dossi14 === void 0 ? void 0 : _this$meta_data$dossi14['dad'];
        this.formData.nom_de_la_mere = (_this$meta_data$dossi15 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi15 === void 0 || (_this$meta_data$dossi15 = _this$meta_data$dossi15['cred_pub_tb_120001']) === null || _this$meta_data$dossi15 === void 0 ? void 0 : _this$meta_data$dossi15['mum'];
        // this.formData.avoirs_investissements = this.meta_data["dossier_credit"]?.['cred_pub_tb_120001']?.['avoirs_investissements'];      
      }
      if ((_this$meta_data$dossi16 = this.meta_data["dossier_credit"]) !== null && _this$meta_data$dossi16 !== void 0 && _this$meta_data$dossi16['cred_pub_tb_120004']) {
        // console.log('facilite_index', this.facilite_index)
        var facilite = this.facilite_index;
        // console.log('facilite',facilite);

        this.formData['montant_sollicite'] = facilite.montant_credit;
        this.formData['objet_de_la_demande'] = facilite.type_facilite;
        this.formData['montant_maximum_garanti'] = facilite.montant_credit;
        this.formData['montant_maximal_garanti'] = facilite.montant_credit;
      }
      if (!((_this$meta_data$dossi17 = this.meta_data["dossier_credit"]) !== null && _this$meta_data$dossi17 !== void 0 && _this$meta_data$dossi17[createdKey])) {
        this.check_fields = _objectSpread(_objectSpread(_objectSpread({}, this.var_2), this.var_4), this.var_7);
      } else if (found !== null && found !== void 0 && found.check_fields) {
        this.check_fields = found.check_fields;
      }
      if ((_this$meta_data$dossi18 = this.meta_data["dossier_credit"]) !== null && _this$meta_data$dossi18 !== void 0 && (_this$meta_data$dossi18 = _this$meta_data$dossi18.caf_recorded_file) !== null && _this$meta_data$dossi18 !== void 0 && _this$meta_data$dossi18.indicatif) {
        this.mask_telephone = "+".concat(this.meta_data["dossier_credit"].caf_recorded_file.indicatif, " ## ## ### ###");
        this.formData.indicatif_telephone = "+".concat(this.meta_data["dossier_credit"].caf_recorded_file.indicatif);
      }
      if (found) {
        // this.formData = { ...this.formData, ...found };
        this.check_fields = found.check_fields || {};
        this.telephones = found.telephones || [];
      }
      if ((_this$meta_data$dossi19 = this.meta_data["dossier_credit"]) !== null && _this$meta_data$dossi19 !== void 0 && _this$meta_data$dossi19['cred_pub_tb_120003']) {
        var _this$meta_data$dossi20;
        this.comptes = (_this$meta_data$dossi20 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi20 === void 0 || (_this$meta_data$dossi20 = _this$meta_data$dossi20['cred_pub_tb_120003']) === null || _this$meta_data$dossi20 === void 0 ? void 0 : _this$meta_data$dossi20['comptes'];
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
    // async generatePdf(download) {
    //     this.pdf_process = true; // Activer l'indicateur de chargement
    //     let conventionName = this.annexe?.type_facilite.trim().replace(/\s+/g, "_").toLowerCase();
    //     let filename = conventionName + ".pdf";
    //     const pages = document.querySelectorAll(".print-page");
    //     if (!pages.length) {
    //         console.error("❌ Aucun élément `.print-page` trouvé.");
    //         this.pdf_process = false;
    //         return;
    //     }
    //     const pdf = new jsPDF("p", "mm", "a4");
    //     const pageWidth = pdf.internal.pageSize.width;
    //     const pageHeight = pdf.internal.pageSize.height;
    //     try {
    //         for (let i = 0; i < pages.length; i++) {
    //             let page = pages[i];
    //             page.style.paddingLeft = "40px";
    //             page.style.paddingRight = "40px";
    //             const canvas = await html2canvas(page, {
    //                 scale: 2,
    //                 useCORS: true,
    //                 logging: false
    //             });
    //             const imgWidth = pageWidth;
    //             const imgHeight = pageHeight;
    //             let imgData = canvas.toDataURL("image/jpeg", 0.7);
    //             if (i > 0) pdf.addPage();
    //             pdf.addImage(imgData, "JPEG", 0, 0, imgWidth, imgHeight);
    //         }
    //         const pdfBlob = pdf.output("blob");
    //         this.pdfFile = new File([pdfBlob], filename, { type: "application/pdf" });
    //         if (download) {
    //             pdf.save(filename);
    //         } else {
    //             this.handleDoubleClickOrClick(this.contratIndex, this.pdfFile);
    //         }
    //     } catch (error) {
    //         console.error("Erreur lors de la génération du PDF :", error);
    //     } finally {
    //         this.pdf_process = false; // Désactiver l'indicateur, même en cas d'erreur
    //     }
    // },
    handleDoubleClickOrClick: function handleDoubleClickOrClick(index, pdfFile) {
      var _this4 = this;
      EventBus.$emit("open-extra-file-explorer");
      EventBus.$emit("transmission-file", {
        pdfFile: pdfFile
      });
      setTimeout(function () {
        EventBus.$emit("data-extra-file-explorer", {
          name: "Cautionnement {(*)}personnel_" + index + "_" + _this4.$route.params.templateId,
          is_auto: true
        });
      }, 1000);
    },
    buildOffPrintable: function buildOffPrintable() {
      var _arguments = arguments,
        _this5 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var retryCount, targetElement, preloader_content, elements, printableContainer, PAGE_WIDTH, PAGE_HEIGHT, MARGIN, PADDING, FOOTER_HEIGHT, QR_HEIGHT, AVAILABLE_HEIGHT, currentPage, currentHeight, pageCounter, createPage, createFooter, _applyStyleToFirstP, paginationDiv, qrCode;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              retryCount = _arguments.length > 0 && _arguments[0] !== undefined ? _arguments[0] : 0;
              _this5.build_off = false;
              targetElement = _this5.$refs.contentToCapture;
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
              return _context3.abrupt("return", _this5.buildOffPrintable(retryCount + 1));
            case 10:
              return _context3.abrupt("return");
            case 11:
              if (_this5.logo) {
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
              return _context3.abrupt("return", _this5.buildOffPrintable(retryCount + 1));
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
                if (pageCounter == 3) {
                  page.style.paddingBottom = "".concat(QR_HEIGHT + FOOTER_HEIGHT, "px");
                }
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
                footer.innerHTML = "\n                <strong>".concat(_this5.formData.banque_name, "</strong><br>\n                Si\xE8ge social : ").concat(_this5.formData.siege_social, ", B.P. : ").concat(_this5.formData.boite_postale, ", T\xE9l : ").concat(_this5.numero_filiale, " |\n                SA au capital social de : ").concat(_this5.formData.capital_social, " ").concat(_this5.formData.devise, " |\n                R.C N\xB0 DLA/2008/B/1195 | N\xB0 Contrib M0 608 000 250 28 W | Agr\xE9ment N\xB0 00000 322/MINFI du 06 juillet 2015 | www.afgbank.cm\n                ");
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
                  if (pageCounter === 1 && _this5.logo) {
                    var logoImg = document.createElement("img");
                    logoImg.src = "/images/".concat(_this5.logo);
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
                qrCode = _this5.generateQRCode(100);
                qrCode.style.position = "absolute";
                qrCode.style.right = "".concat(PADDING / 2, "px");
                qrCode.style.bottom = "".concat(FOOTER_HEIGHT - 50, "px");
                currentPage.appendChild(qrCode);
                currentPage.appendChild(createFooter());
                printableContainer.appendChild(currentPage);
              }
              document.querySelector('#preloader-content').textContent = "";
              document.querySelector('#preloader-content').remove();
              _this5.build_off = true;
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
    var _this6 = this;
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
      var _this6$annexe;
      var conventionName, filename, iframe, doc, pages, pdf, pageWidth, pageHeight, i, page, canvas, imgWidth, imgHeight, imgData, pdfBlob;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            _this6.pdf_process = true;
            conventionName = (_this6$annexe = _this6.annexe) === null || _this6$annexe === void 0 ? void 0 : _this6$annexe.type_facilite.trim().replace(/\s+/g, "_").toLowerCase();
            filename = "Convention de pr\xEAt/ ".concat(conventionName) + ".pdf"; // Vérifier que l'iframe existe
            iframe = _this6.$refs.monIframe;
            if (!(!iframe || !iframe.contentWindow || !iframe.contentWindow.document)) {
              _context4.next = 8;
              break;
            }
            console.error("❌ Iframe ou document de l'iframe introuvable.");
            _this6.pdf_process = false;
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
            _this6.pdf_process = false;
            return _context4.abrupt("return");
          case 17:
            pdf = new jspdf__WEBPACK_IMPORTED_MODULE_7__.jsPDF("p", "mm", "a4");
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
            return _html2canvas__WEBPACK_IMPORTED_MODULE_6___default()(page, {
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
            _this6.pdfFile = new File([pdfBlob], filename, {
              type: "application/pdf"
            });
            if (download) {
              pdf.save(filename);
            } else {
              _this6.handleDoubleClickOrClick(_this6.indexSelectionne, _this6.pdfFile);
            }
            _context4.next = 45;
            break;
          case 42:
            _context4.prev = 42;
            _context4.t0 = _context4["catch"](20);
            console.error("Erreur lors de la génération du PDF :", _context4.t0);
          case 45:
            _context4.prev = 45;
            _this6.pdf_process = false; // Désactiver l'indicateur, même en cas d'erreur
            return _context4.finish(45);
          case 48:
          case "end":
            return _context4.stop();
        }
      }, _callee4, null, [[20, 42, 45, 48]]);
    }))();
  }), "handleDoubleClickOrClick", function handleDoubleClickOrClick(index, pdfFile) {
    var _this7 = this;
    EventBus.$emit("open-extra-file-explorer");
    EventBus.$emit("transmission-file", {
      pdfFile: pdfFile
    });

    // let name= "Lettre {(*)}notifications_" + index +"_" +this.$route.params.templateId

    setTimeout(function () {
      EventBus.$emit("data-extra-file-explorer", {
        name: "Cautionnement {(*)}personnel_" + index + "_" + _this7.$route.params.templateId,
        is_auto: true
      });
    }, 1000);
  }), "encryptData", function encryptData(data, secretKey) {
    return crypto_js__WEBPACK_IMPORTED_MODULE_5___default().AES.encrypt(JSON.stringify(data), secretKey).toString();
  }), "checkParagraphs", function checkParagraphs(keys, check) {
    var _this8 = this;
    //    2. mettre a jour la section
    this.check_fields = _objectSpread({}, this.check_fields);
    keys.forEach(function (key) {
      _this8.check_fields[key] = check;
    });
    // console.log(typeof this.check_fields , this.check_fields);
    //    3. mettre a jour le formulaire
    this.formData['check_fields'] = _objectSpread({}, this.check_fields);
  }), "send2Backend", function send2Backend(newVal) {
    var _this$dossier_credit2,
      _this9 = this;
    this.on_saving = true;
    this.$emit("autosaving");
    this.$axios.post(this.ebapisHost + "creditbuilder/api/v1/redaction-fiche-annexe/", {
      cred_pub_key: (_this$dossier_credit2 = this.dossier_credit) === null || _this$dossier_credit2 === void 0 ? void 0 : _this$dossier_credit2.cred_pub_key,
      filledData: newVal
    }).then(function () {
      _this9.on_saving = false;
      _this9.$emit("autosaving");
      if (!_this9.local_edit_mode) {
        _this9.$emit("edit-mode", {
          convention_id: _this9.formData.id
        });
        _this9.local_edit_mode = true;
      }
      if (!_this9.local_close_edit_mode) {
        _this9.$emit("edit-mode", {
          close: true
        });
        _this9.local_close_edit_mode = true;
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
    var qr = qrcode_generator__WEBPACK_IMPORTED_MODULE_4___default()(0, "L");
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
    return crypto_js__WEBPACK_IMPORTED_MODULE_5___default().AES.encrypt(JSON.stringify(data), secretKey).toString();
  }), "getFormattedDate", function getFormattedDate() {
    var date = new Date();
    var year = date.getFullYear();
    var month = String(date.getMonth() + 1).padStart(2, '0');
    var day = String(date.getDate()).padStart(2, '0');
    return "".concat(year, "-").concat(month, "-").concat(day);
  }), "updateDateOuvertureCompte", function updateDateOuvertureCompte() {
    var _this0 = this;
    var selectedCompte = this.comptes.find(function (compte) {
      return compte.numero_compte === _this0.formData.num_compte;
    });
    if (selectedCompte) {
      this.formData.date_ouverture_compte = selectedCompte.date_ouverture_compte || '';
    } else {
      this.formData.date_ouverture_compte = '';
    }
    this.handleInput();
  }), _defineProperty(_defineProperty(_defineProperty(_methods, "getAgenceLocation", function getAgenceLocation() {
    var _this1 = this;
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
      var _this1$authcheckUsr, _yield$axios$post, data;
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _context5.next = 3;
            return axios.post("/api/Helpdatabase/get-agence-location", {
              'codeagence': (_this1$authcheckUsr = _this1.authcheckUsr) === null || _this1$authcheckUsr === void 0 ? void 0 : _this1$authcheckUsr.codeagence
            });
          case 3:
            _yield$axios$post = _context5.sent;
            data = _yield$axios$post.data;
            _this1.formData.lieu_edition = data.data;
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
    var selectedTemplate = this.lang == "en" ? _raw_loader_html_afg_en_convention_cautionnement_solidaire_perso_html__WEBPACK_IMPORTED_MODULE_3__["default"] : _raw_loader_html_afg_fr_convention_cautionnement_solidaire_perso_html__WEBPACK_IMPORTED_MODULE_2__["default"];
    // Remplacement des placeholders personnalisés
    var htmlModifié = injectPlaceholders(selectedTemplate, {
      "logo": this.logo || "",
      "banque_name": this.formData.banque_name || "",
      "banque_abreviation": this.formData.banque_abreviation || "",
      "statut_juridique": this.formData.statut_juridique || "",
      "capital_social": this.formData.capital_social || "",
      "siege_social": this.formData.siege_social || "",
      "boîte_postale": this.formData.boîte_postale || "",
      "bp": this.formData.bp || "",
      "lieu_immatriculation": this.formData.lieu_immatriculation || "",
      "date_immatriculation": this.formData.date_immatriculation || "",
      "immatriculation_rccm": this.formData.immatriculation_rccm || "",
      "date_en_lettre": this.formData.date_en_lettre || "",
      "nom_client": this.formData.nom_client || "",
      "civilite_client": this.formData.civilite_client || "",
      "civilite_caution": this.formData.civilite_caution || "",
      "nom_caution": ((_this$facilite = this.facilite) === null || _this$facilite === void 0 ? void 0 : _this$facilite.nom_caution) || "",
      "date_de_naissance": this.formatDate(this.formData.date_de_naissance) || "",
      "lieu_de_naissance": ((_this$facilite2 = this.facilite) === null || _this$facilite2 === void 0 ? void 0 : _this$facilite2.lieu_de_naissance) || "",
      "nom_du_pere": this.formData.nom_du_pere || "",
      "nom_de_la_mere": this.formData.nom_de_la_mere || "",
      "adresse_client": this.formData.adresse_client || "",
      "num_cni": this.formData.num_cni || "",
      "date_delivrance": this.formatDate(this.formData.date_delivrance) || "",
      "date_de_naissance_caution": this.formatDate(this.formData.date_de_naissance_caution) || "",
      "date_delivrance_piece_identite_caution": this.formatDate(this.formData.date_delivrance_piece_identite_caution) || "",
      "date_edition": this.formatDate(this.formData.date_edition) || "",
      "lieu_delivration": this.formData.lieu_delivration || "",
      "montant_sollicite": this.formatMontant(this.formData.montant_sollicite) || "",
      "montant_maximum_garanti": this.formatMontant(this.formData.montant_maximum_garanti) || "",
      "montant_sollicite_en_lettre": this.convertirEnLettres(String(this.formData.montant_sollicite).replace(/\s+/g, '')),
      "montant_maximum_garanti_en_lettre": this.convertirEnLettres(String(this.formData.montant_maximum_garanti).replace(/\s+/g, '')),
      "objet_de_la_demande": this.formData.objet_de_la_demande || "",
      "titre_client": this.formData.titre_client || "",
      "num_compte_bancaire": this.formData.num_compte_bancaire || "",
      "patrimoine_caution": this.formData.patrimoine_caution || "",
      "valeur_actifs": this.formData.valeur_actifs || "",
      "bien_passifs": this.formData.bien_passifs || "",
      "devise": this.formData.devise || "",
      "avoirs_investissements": this.formData.avoirs_investissements || "",
      "lieu_naissance_caution": this.formData.lieu_naissance_caution || "",
      "nom_du_pere_caution": this.formData.nom_du_pere_caution || "",
      "nom_de_la_mere_caution": this.formData.nom_de_la_mere_caution || "",
      "adresse_de_la_caution": this.formData.adresse_de_la_caution || "",
      "type_piece_identite_caution": this.formData.type_piece_identite_caution || "",
      "num_piece_identite_caution": this.formData.num_piece_identite_caution || "",
      "lieu_delivrance_piece_identite_caution": this.formData.lieu_delivrance_piece_identite_caution || "",
      "pays_legislatives": this.formData.pays_legislatives || "",
      "lieu_edition": this.formData.lieu_edition || "",
      "text_avoirs_investissements": this.text_avoirs_investissements || ""
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
  },
  beforeDestroy: function beforeDestroy() {
    this.$off("build-off-printable");
    this.$off("generate-pdf-process");
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/conventions/en/CAUTIONNEMENT_PERSONNEL_SOLIDAIRE.vue?vue&type=template&id=61ef7e6c&scoped=true":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/conventions/en/CAUTIONNEMENT_PERSONNEL_SOLIDAIRE.vue?vue&type=template&id=61ef7e6c&scoped=true ***!
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
      title: "Importer dans le dossier"
    }
  }), _vm._v("\n                        Importer dans le dossier\n                    ")]), _vm._v(" "), _c("button", {
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
  }), _vm._v("\n                        Télécharger le fichier\n                    ")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.lang,
      expression: "lang"
    }],
    attrs: {
      name: "lang",
      id: "language"
    },
    on: {
      change: [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.lang = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }, _vm.loadContentHtml]
    }
  }, [_c("option", {
    attrs: {
      value: "fr"
    }
  }, [_vm._v("Francais")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "en"
    }
  }, [_vm._v("English")])])] : _c("div", {
    staticStyle: {
      display: "inline-block"
    }
  }, [_vm._m(1), _vm._v(" "), _c("span", {
    staticStyle: {
      "font-size": "0.9rem",
      "margin-left": "5px"
    }
  }, [_vm._v("\n                        Génération du PDF en cours...\n                    ")])])], 2), _vm._v(" "), _c("iframe", {
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
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/conventions/en/CAUTIONNEMENT_PERSONNEL_SOLIDAIRE.vue?vue&type=style&index=0&id=61ef7e6c&lang=css&scoped=true":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/conventions/en/CAUTIONNEMENT_PERSONNEL_SOLIDAIRE.vue?vue&type=style&index=0&id=61ef7e6c&lang=css&scoped=true ***!
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
___CSS_LOADER_EXPORT___.push([module.id, "\nfieldset[data-v-61ef7e6c] {\r\n    border: 1px solid #ddd !important;\r\n    position: relative;\r\n    padding-left: 10px !important;\r\n    width: 100%;\r\n    background-color: #f5f5f5;\r\n    margin-top: 15px;\r\n    min-width: -moz-max-content;\r\n    min-width: max-content\n}\nlegend[data-v-61ef7e6c] {\r\n    font-weight: bold;\r\n    padding: 4px;\r\n    width: -moz-max-content;\r\n    width: max-content;\r\n    padding: 0 15px;\r\n    font-size: 16px;\r\n    float: none;\r\n    background-color: #ffffff;\r\n    border: 1px solid #ddd;\r\n    border-radius: 4px;\n}\nfieldset[data-v-61ef7e6c] {\r\n    border: 1px solid #ddd !important;\r\n    position: relative;\r\n    padding-left: 10px !important;\r\n    width: 100%;\r\n    background-color: #f5f5f5;\r\n    margin-top: 15px;\n}\nlegend[data-v-61ef7e6c] {\r\n    font-weight: bold;\r\n    padding: 4px;\r\n    width: -moz-max-content;\r\n    width: max-content;\r\n    padding: 0 15px;\r\n    font-size: 16px;\r\n    float: none;\r\n    background-color: #ffffff;\r\n    border: 1px solid #ddd;\r\n    border-radius: 4px;\n}\n.box[data-v-61ef7e6c] {\r\n    border-color: #212529;\r\n    border-style: solid;\r\n    border-width: 1px;\r\n    padding: 5px;\n}\n.actd[data-v-61ef7e6c] {\r\n    border-color: #212529;\r\n    border-style: solid;\r\n    border-width: 1px;\r\n    padding: 5px;\n}\n.pre[data-v-61ef7e6c] {\r\n    font-size: 0.6rem\n}\n.form-control[data-v-61ef7e6c] {\r\n    display: initial;\r\n    width: initial;\n}\n.paragraph[data-v-61ef7e6c] {\r\n    margin: 20px 0px;\r\n    position: relative;\r\n    padding: 5px;\n}\ninput[data-v-61ef7e6c],\r\nselect[data-v-61ef7e6c] {\r\n    margin: 2px;\r\n    border-color: #34495e;\r\n    color: black;\r\n    font-size: 13px;\r\n    height: 34px;\r\n    font-weight: bold;\r\n    background-color: #ffffad;\r\n    margin-right: 0px;\r\n    min-width: 45px;\r\n    /* border-top-right-radius: 0;\r\n    border-bottom-right-radius: 0; */\r\n    /* border-right: none; */\n}\n.input-group-append[data-v-61ef7e6c] {\r\n    margin: 0 2px;\n}\n.input-group-text-right[data-v-61ef7e6c] {\r\n    border-radius: 0 .375rem .375rem 0;\r\n    margin-left: 0px;\r\n    cursor: pointer;\n}\n.input-group-text-left[data-v-61ef7e6c] {\r\n    border-radius: .375rem 0 0 .375rem;\n}\n.li-convention[data-v-61ef7e6c] {\r\n    list-style-type: disc;\r\n    margin: 0;\r\n    padding: 0;\r\n    margin-left: 20px;\n}\n.input-group-text[data-v-61ef7e6c] {\r\n    font-size: 13px;\r\n    line-height: 1.5;\r\n    height: 34px;\r\n    padding: .375rem .75rem;\r\n    border: 1px solid #34495e;\r\n    min-width: 45px;\r\n    text-align: center;\r\n    justify-content: center;\r\n    /*margin: 2px;*/\r\n    background-color: #ffffad;\r\n    color: black;\n}\r\n\r\n\r\n\r\n/* checkbox */\n.checkbox-container .checkbox-input[data-v-61ef7e6c] {\r\n    position: absolute;\r\n    opacity: 0;\r\n    cursor: pointer;\r\n    height: 80%;\r\n    width: 80%;\r\n    top: 0;\r\n    left: 0;\r\n    z-index: 1;\n}\n.checkbox-container[data-v-61ef7e6c] {\r\n    display: block;\r\n    position: relative;\r\n    cursor: pointer;\r\n    -webkit-user-select: none;\r\n       -moz-user-select: none;\r\n            user-select: none;\n}\n.checkbox-container .checkbox-icon-cancel[data-v-61ef7e6c] {\r\n    position: relative;\r\n    top: 0;\r\n    left: 0;\r\n    height: 50px;\r\n    width: 50px;\r\n    transition: all 0.3s;\r\n    font-size: 1.5em;\r\n    color: red;\n}\n.checkbox-container .checkbox-icon-success[data-v-61ef7e6c] {\r\n    position: relative;\r\n    top: 0;\r\n    left: 0;\r\n    height: 50px;\r\n    width: 50px;\r\n    transition: all 0.3s;\r\n    font-size: 1.5em;\r\n    color: green;\n}\r\n\r\n/*.checkbox-container .checkbox-icon-cancel:hover {\r\n    transform: scale(1.1);\r\n}\r\n\r\n.checkbox-container .checkbox-icon-success:hover {\r\n    transform: scale(1.1);\r\n}*/\n.checkbox-container .checkbox-icon-success[data-v-61ef7e6c] {\r\n    display: none;\n}\n.checkbox-container .checkbox-input:checked~.checkbox-icon-cancel[data-v-61ef7e6c] {\r\n    display: none;\n}\n.checkbox-container .checkbox-input:checked~.checkbox-icon-success[data-v-61ef7e6c] {\r\n    display: contents;\n}\n.valid-section[data-v-61ef7e6c] {\r\n    pointer-events: auto;\r\n    top: 50%;\r\n    transform: translateY(-50%);\r\n    width: -moz-fit-content;\r\n    width: fit-content\n}\n.st-valide[data-v-61ef7e6c] {\r\n    position: absolute;\r\n    z-index: 99;\r\n    right: -147px;\r\n    top: 15%;\n}\r\n\r\n/*this is the new approach*/\n.position-relative[data-v-61ef7e6c]:has(.valid-section:hover) {\r\n    background: #3498db6f;\n}\nul[data-v-61ef7e6c],\r\nli[data-v-61ef7e6c] {\r\n    list-style-type: inherit;\n}\n.custom-list[data-v-61ef7e6c] {\r\n    counter-reset: section;\r\n    list-style: none;\r\n    /* Supprime les puces par défaut */\r\n    padding-left: 0;\r\n    /* Enlève l'indentation */\n}\n.custom-list>li[data-v-61ef7e6c] {\r\n    counter-increment: section;\n}\n.custom-list>li[data-v-61ef7e6c]::before {\r\n    content: counter(section) \". \";\r\n    font-weight: bold;\n}\r\n\r\n/* Pour les sous-listes */\n.custom-list>li>ol[data-v-61ef7e6c] {\r\n    counter-reset: subsection;\r\n    list-style: none;\r\n    padding-left: 20px;\n}\n.custom-list>li>ol>li[data-v-61ef7e6c] {\r\n    counter-increment: subsection;\n}\n.custom-list>li>ol>li[data-v-61ef7e6c]::before {\r\n    content: counter(section) \".\" counter(subsection) \" \";\r\n    font-weight: normal;\n}\n.title_[data-v-61ef7e6c] {\r\n    padding: 8px 64px;\n}\n.block[data-v-61ef7e6c] {\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n  gap: 10px;\r\n  margin-bottom: 5px;\r\n  align-items: stretch;\n}\n.column[data-v-61ef7e6c] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 10px;\r\n  padding: 5px;\n}\n.article[data-v-61ef7e6c] {\r\n  text-align: justify;\r\n  margin-top: 5px;\n}\n.article p[data-v-61ef7e6c] {\r\n  margin: 5px 0;\n}\n.list[data-v-61ef7e6c] {\r\n  margin-left: 20px;\r\n  list-style-type: disc;\n}\n.list li[data-v-61ef7e6c] {\r\n  margin-bottom: 5px;\r\n  text-align: justify;\n}\n.highlight_[data-v-61ef7e6c] {\r\n  font-weight: bold;\n}\r\n", ""]);
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

/***/ "./node_modules/raw-loader/dist/cjs.js!./resources/js/html/afg/en/convention_cautionnement_solidaire_perso.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./resources/js/html/afg/en/convention_cautionnement_solidaire_perso.html ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!DOCTYPE html>\r\n<html lang=\"en\">\r\n\r\n<head>\r\n    <meta charset=\"UTF-8\">\r\n    <title>Personal and Joint Guarantee Agreement</title>\r\n    <style>\r\n        .page-pdf {\r\n            padding: 35px;\r\n            width: 714px;\r\n            height: 1040px;\r\n            margin: 50px auto;\r\n            box-sizing: border-box;\r\n            border: 1px solid rgb(221, 221, 221);\r\n            background: white;\r\n            position: relative;\r\n        }\r\n\r\n        .column-pdf {\r\n            padding: 5px;\r\n            flex: 1;\r\n        }\r\n\r\n        .d-flex {\r\n            display: flex;\r\n        }\r\n\r\n        .souligne-espace {\r\n            text-decoration: underline;\r\n            text-decoration-color: #000;\r\n            text-underline-offset: 3px;\r\n        }\r\n\r\n        .X-size {\r\n            padding: 0px 0px 1px 0px !important;\r\n            margin: 0;\r\n            font-weight: 700;\r\n            text-decoration: underline;\r\n        }\r\n\r\n        .Xx-size {\r\n            padding: 4px 0px 1px 0px !important;\r\n            margin: 0;\r\n            font-weight: 700;\r\n            /* text-decoration: underline; */\r\n        }\r\n\r\n        .footer {\r\n            position: absolute;\r\n            bottom: 55px;\r\n            width: 80%;\r\n            text-align: center;\r\n        }\r\n\r\n        .surligne {\r\n            /* background-color: yellow; */\r\n            /* padding: 0 2px; */\r\n            /* line-height: 1.2; */\r\n            display: inline-block;\r\n            box-shadow: inset 0 -0.4em 0 yellow;\r\n        }\r\n\r\n    </style>\r\n</head>\r\n\r\n<body>\r\n\r\n    <div style=\"font-size: 8.5pt; line-height: 8.5pt; background-color: #fff; color: #000; margin: 40px; text-align: justify;\">\r\n        <div class=\"page-pdf\">\r\n            <div style=\"width: 80px;\">\r\n                <img src=\"/images/{{logo}}\" alt=\"\" style=\"width: 100%; height: auto;\">\r\n            </div>\r\n\r\n            <div style=\"width: 80%; margin: 0 auto; border-right: 1px solid; border-left: 1px solid; border-top: 1px solid; \r\n                border-bottom: 4px solid; padding: 10px 20px; text-align: center;\">\r\n                <b>PERSONAL AND JOINT GUARANTEE AGREEMENT</b>\r\n            </div>\r\n\r\n            <div style=\"padding: 4px;\">\r\n                <p> <b>BETWEEN THE UNDERSIGNED</b> </p>\r\n                <p style=\"margin-left: 15px;\">I. <b>{{ banque_name }}</b> abbreviated as « <b>{{banque_abreviation}}</b> », {{statut_juridique}} with share capital of {{capital_social}} {{devise}}  \r\n                    whose registered office is located at {{siege_social}}, {{ bp}}, registered in the Trade and Movable Credit Register \r\n                    of {{lieu_immatriculation}} on {{date_immatriculation}} <span class=\"surligne\">under number</span> {{immatriculation_rccm}}, with amendatory registration made on May sixth, two thousand twenty-four \r\n                    <span class=\"surligne\">under number</span> RC/DLA/2024/M/1031 ;</p>\r\n            </div>\r\n            <p style=\"text-align: right;\">Hereinafter referred to as: <b>the Bank or the beneficiary, on the one hand.</b> </p>\r\n\r\n            <div style=\"border: solid 1px black; padding: 5px; margin: 5px 0;\">\r\n                II. {{civilite_caution}}, Born on {{date_de_naissance_caution}} in {{lieu_naissance_caution}} and {{nom_de_la_mere_caution}} Residing at {{adresse_de_la_caution}} ; \r\n                Identification Document: {{type_piece_identite_caution}} No.  {{num_piece_identite_caution}} issued on {{date_delivrance_piece_identite_caution}} in {{lieu_delivrance_piece_identite_caution}} ;\r\n            </div>\r\n            <p style=\"text-align: right;\">Hereinafter referred to as: <b>the Guarantor, on the other hand;</b> </p>\r\n\r\n            <div style=\"width: 30%; margin: 0 auto; border-right: 1px solid; border-left: 1px solid; border-top: 1px solid; \r\n                border-bottom: 4px solid; padding: 10px 20px; text-align: center;\">\r\n                <b>PREAMBLE</b>\r\n            </div>\r\n\r\n            <div style=\"margin: 5px 0;\">\r\n                <p>\r\n                    <b>{{civilite_client}}</b> <span class=\"surligne\">{{nom_client}}</span>, (Debtor) has requested from the BANK, facilities totaling <span class=\"surligne\"> {{montant_sollicite}} {{devise}}, ({{montant_sollicite_en_lettre}} {{devise}}) </span> \r\n                    for {{objet_de_la_demande}}. The Bank has agreed to the request as formulated, subject to the establishment of consequent securities. \r\n                </p>\r\n                <p>\r\n                    In order to guarantee the repayment of all sums owed by the Borrower under the financial documents, it has been agreed that the CONSTITUENT \r\n                    provides Personal and Joint Guarantee to the Bank, and commits to remedy any default by the Borrower up to \r\n                    the amount of {{montant_maximum_garanti}} {{devise}} ( {{montant_maximum_garanti_en_lettre}} {{devise}} ) constituting the Maximum Guaranteed Amount.\r\n                </p>\r\n                <p>\r\n                    The parties have therefore come together and at the end of their discussions and negotiations, have established \r\n                    as follows the terms and conditions of personal and joint guarantee, in repayment of the facility granted \r\n                    by the BANK.\r\n                </p>\r\n            </div>\r\n\r\n            <div style=\"width: 80%; margin: 0 auto; border-right: 1px solid; border-left: 1px solid; border-top: 1px solid; \r\n                border-bottom: 4px solid; padding: 10px 20px; text-align: center;\">\r\n                <b>HAVING STATED THE ABOVE, THE PARTIES HAVE AGREED TO THE FOLLOWING:</b>\r\n            </div>\r\n\r\n            <div class=\"d-flex\">\r\n                <div class=\"column-pdf\">\r\n                    <h4 style=\"margin: 3px 0;\"><b>ARTICLE 1 : <u>GUARANTEE</u></b></h4>\r\n                    <div>\r\n                        <p>\r\n                            <b style=\"font-size: 10px;\">1.1</b> The Guarantor declares to constitute himself as joint, personal and indivisible guarantor of <b>{{civilite_client}}</b> <span class=\"surligne\">{{nom_client}} </span>\r\n                            holder of account number {{num_compte_bancaire}}, for all sums that the Guaranteed party owes, may or could owe to the Bank by reason of all commitments, \r\n                            all operations and in general, all obligations arising, without any exception, directly or indirectly towards the Bank \r\n                            for any cause whatsoever. Thus the Guarantee applies, without this enumeration being exhaustive, to all obligations resulting in particular from:\r\n                        </p>\r\n                    \r\n                        <ul style=\"margin-left: -20px !important;\">\r\n                            <li>\r\n                                all cash or signature credits, balances payable in favor of the Bank from all current accounts opened in the name of the Guaranteed party, \r\n                                stock exchange operations conducted by him, all checks, notes or instruments bearing his signature in any capacity whatsoever and for which \r\n                                the Bank may or may not have been dispensed from any protest or any notice of non-payment, negotiations of bills of exchange statement, acts of assignment of claims, \r\n                                all guarantee, surety or payment guarantee commitments provided by the Guaranteed party;\r\n                            </li>\r\n                            <li>\r\n                                All guarantee commitments, surety, guarantee or counter-guarantee or also all acceptances given by the Bank for \r\n                                the account of the Guaranteed party or on his order.\r\n                            </li>\r\n                        </ul>\r\n\r\n                        <p>\r\n                            <b style=\"font-size: 10px;\">1.2</b> The Guarantor's obligations in execution of this guarantee are limited to the maximum amount   \r\n                            of <span class=\"surligne\">{{montant_maximum_garanti}} {{devise}} ({{montant_maximum_garanti_en_lettre}} {{devise}})</span> , guaranteeing both the principal of the Borrower's commitments and all interest, fees and accessories in addition, \r\n                            extended to the potentially debtor balance of his current account as it would appear upon closure.\r\n                        </p>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"column-pdf\">\r\n                    <h4 style=\"margin: 3px 0;\"><b>ARTICLE 2 : <u>SCOPE OF THE GUARANTEE</u></b></h4>\r\n                    <div style=\"padding: 4px 0 0 0;\">\r\n                        This commitment binds the Guarantor, jointly and personally, on all his movable and immovable property, \r\n                        to pay to the Bank what the Guaranteed party owes or will owe, within the limit of the Maximum Guaranteed Amount, in the event that the Guaranteed party could not meet \r\n                        his obligations under the Guaranteed Obligations.\r\n                    </div>\r\n\r\n                    <div>\r\n                        <h4 style=\"margin: 5px 0\"><b>ARTICLE 3 : <u>GUARANTOR'S COMMITMENTS</u></b></h4>\r\n                        <p> <b style=\"font-size: 10px;\">3.1</b> The Guarantor expressly waives the benefits of discussion and division \r\n                            both with the Guaranteed party and with all co-obligors.\r\n                        </p>\r\n    \r\n                        <p> <b style=\"font-size: 10px;\">3.2</b> The Guarantor waives the right to invoke:\r\n                            <ul style=\"margin-left: -20px !important;\">\r\n                                <li>\r\n                                    The provisions of article 23 of the uniform act of OHADA (NEW) on the organization of securities which, without discharging him from his commitments, \r\n                                    would authorize him to pursue the guaranteed debtor to force payment in the event that payment deadlines are granted by the Bank; and\r\n                                </li>\r\n                                <li>\r\n                                    All subrogations, all actions that would result in bringing him into competition with the Bank against the guaranteed debtor \r\n                                    as long as the bank has not been compensated for all amounts in principal, interest, commissions, fees, indemnities and accessories owed to it under the Guaranteed Obligations.\r\n                                </li>\r\n                            </ul>\r\n                        </p>\r\n\r\n                        <p> <b style=\"font-size: 10px;\">3.3</b> The Guarantor expressly waives, in the event of the declaration of early enforceability of Credits in accordance with the stipulations of the Credit Agreement, \r\n                            to claim, against the Bank, the unenforceability of the forfeiture of term incurred by the Guaranteed Debtor.\r\n                        </p>\r\n\r\n                        <p> <b style=\"font-size: 10px;\">3.4</b> The Guarantor undertakes, for the entire duration of this guarantee:\r\n                        </p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n        <div class=\"page-pdf\">\r\n            <div class=\"d-flex\">\r\n                <div class=\"column-pdf\">\r\n                    <ul style=\"margin-left: -20px !important;\">\r\n                        <li>\r\n                            To inform the Bank in writing as soon as he becomes aware of any event likely to cause a deterioration in his financial situation or his ability to \r\n                            meet his obligations under this guarantee;\r\n                        </li>\r\n                        <li>\r\n                            Not to assign or transfer ownership of any of his assets if such assignment or transfer would have a significant negative effect on his financial situation or his ability to meet \r\n                            his obligations under this guarantee.\r\n                        </li>\r\n                    </ul>\r\n\r\n                    <p> <b style=\"font-size: 10px;\">3.5</b> The guarantor declares that the bank has sufficiently drawn his attention to:\r\n                        <ul style=\"margin-left: -20px !important;\">\r\n                            <li>\r\n                                The nature and extent of his commitment;\r\n                            </li>\r\n                            <li>\r\n                                The proportionality between the value of his assets and the amount of the guarantee, to which he attests on his honor having \r\n                                sufficient assets to cover the guaranteed amount\r\n                            </li>\r\n                        </ul>\r\n                    </p>\r\n\r\n                    <div>\r\n                        <h4 style=\"margin: 5px 0\"><b>ARTICLE 4 : <u>BANK'S COMMITMENTS</u></b></h4>\r\n                        <p> <b style=\"font-size: 10px;\">4.1</b> The Bank is required to inform the Guarantor of any default by the Guaranteed party under the Guaranteed Obligations, \r\n                            as well as the forfeiture or extension of the term by indicating the amount remaining due by him in principal, interest and fees on the day of default, forfeiture or extension of the term.\r\n                        </p>\r\n\r\n                        <p> <b style=\"font-size: 10px;\">4.2</b> The Bank is required, within the month following the end of each civil semester, to communicate to the Guarantor the state of the Guaranteed party's debts specifying their causes, \r\n                            their maturities and their amounts in principal, interest, commissions, fees and accessories remaining due at the end of each elapsed semester, reminding him of the right \r\n                            of revocation by literal reproduction of the stipulations of this article and those of article 19 of the Uniform Act on the organization of securities.\r\n                        </p>\r\n\r\n                        <p> <b style=\"font-size: 10px;\">4.3</b>\r\n                            For the proper execution of this commitment, the guarantor undertakes and commits to inform the Bank of any change of address concerning him.\r\n                        </p>\r\n                    </div>\r\n\r\n                    <div>\r\n                        <h4 style=\"margin: 5px 0\"><b>ARTICLE 5 : <u>IMPLEMENTATION OF THE GUARANTEE</u></b></h4>\r\n                        <p>\r\n                            In case of non-payment at its due date, by the Guaranteed party, of any amount due under the Guaranteed Obligations, the Guarantor shall be required to pay to the Bank, \r\n                            within the limit of the Maximum Guaranteed Amount, the amount concerned, fifteen (15) days after a formal notice addressed to the Guaranteed party remains without effect. The Guarantor may \r\n                            not claim the payment deadlines granted conventionally or judicially to the Guaranteed party.\r\n                        </p>\r\n                    </div>\r\n\r\n                    <div>\r\n                        <h4 style=\"margin: 5px 0\"><b>ARTICLE 6 : <u>DURATION</u></b></h4>\r\n                        <p> <b style=\"font-size: 10px;\">6.1</b> This guarantee enters into force on the date of its signature and will remain in force as long as \r\n                            all of the Guaranteed Obligations have not been fully repaid or paid.\r\n                        </p>\r\n\r\n                        <p> <b style=\"font-size: 10px;\">6.2</b> The Guarantor may decide at any time to revoke his commitment by written notification to the Bank. The revocation will take effect upon expiration \r\n                            of a period of ninety (90) days from the date of receipt of the notification letter. The Guarantor will remain bound until the full and final repayment to \r\n                            the Bank of all commitments of the Guaranteed party arising \r\n                        </p>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"column-pdf\">\r\n                    <div style=\"margin-left: 15px;\">\r\n                        prior to the effective date of this revocation, including those whose maturities and enforceability will be subsequent to this date\r\n                    </div>\r\n\r\n                    <div>\r\n                        <h4 style=\"margin: 5px 0\"><b>ARTICLE 7 : <u>MISCELLANEOUS</u></b></h4>\r\n                        <p> <b style=\"font-size: 10px;\">7.1</b> This guarantee is added and will be added to all real or personal guarantees \r\n                            that may have been or may be provided for the benefit of the Bank by the Guarantor, by the Guaranteed party or by any third party.\r\n                        </p>\r\n\r\n                        <p> <b style=\"font-size: 10px;\">7.2</b> All obligations resulting from this guarantee for the Guarantor are stipulated indivisible, \r\n                            such that their execution may be claimed in full from any of the heirs or successors in title of the Guarantor.\r\n                        </p>\r\n\r\n                        <p> <b style=\"font-size: 10px;\">7.3</b>\r\n                            All notifications to which this guarantee may give rise shall be made in writing and shall be addressed by registered letter with \r\n                            acknowledgment of receipt, delivered by bearer with discharge, or transmitted by an international courier service of good reputation, to the Parties, at their respective address mentioned at the head of these presents.\r\n                        </p>\r\n                    </div>\r\n\r\n                    <div>\r\n                        <h4 style=\"margin: 5px 0\"><b>ARTICLE 8 : <u>DECLARATION OF ASSETS</u></b></h4>\r\n                        <p style=\"margin-bottom: 0;\"> \r\n                            The Guarantor declares that his assets consist of the following active and passive elements:\r\n                            <ul style=\"margin: 5px;\">{{ text_avoirs_investissements }}</ul>\r\n                        </p>\r\n                    </div>\r\n\r\n                    <div>\r\n                        <h4 style=\"margin: 5px 0\"><b>ARTICLE 9 : <u>TAXES AND FEES</u></b></h4>\r\n                        <p> \r\n                            All rights, tax fees, stamps, taxes and other fees, related to this guarantee and its consequences or which may result from their execution, \r\n                            including the costs and commissions for informing the guarantor are borne by the guaranteed party who undertakes to pay them.\r\n                        </p>\r\n                    </div>\r\n\r\n                    <div>\r\n                        <h4 style=\"margin: 5px 0\"><b>ARTICLE 10 : <u>ELECTION OF DOMICILE</u></b></h4>\r\n                        <p> \r\n                            For the execution of these presents and their consequences, the Parties elect domicile at their respective registered office indicated above.\r\n                        </p>\r\n                    </div>\r\n\r\n                    <div>\r\n                        <h4 style=\"margin: 5px 0\"><b>ARTICLE 11 : <u>APPLICABLE LAW – JURISDICTION</u></b></h4>\r\n                        <p> <b style=\"font-size: 10px;\">11.1</b> This guarantee is subject to the provisions of the Uniform Acts of OHADA \r\n                            and to the legislative and regulatory provisions in force in {{pays_legislatives}}, not contrary to those of the Uniform Acts of OHADA.\r\n                        </p>\r\n\r\n                        <p> <b style=\"font-size: 10px;\">11.2</b> All disputes and litigation relating to the interpretation of this guarantee, \r\n                            its execution, consequences and effects, shall be under the sole jurisdiction of the courts of {{pays_legislatives}}.\r\n                        </p>\r\n                    </div>\r\n\r\n                    <div style=\"margin-left: 15px;\">\r\n                        <p style=\"margin-bottom: 0px;\">Done in {{lieu_edition}}, on {{date_edition}}.</p>\r\n                        <p style=\"margin-top: 3px;\">In three (03) original copies</p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div style=\"margin-top: 20px;\">\r\n                <hr>\r\n                <table style=\"width: 100%;\">\r\n                    <tr>\r\n                        <td style=\"width: 50%; text-align: center;\"><b><u>THE GUARANTOR (1) </u></b></td>\r\n                        <td style=\"width: 50%; text-align: center;\"><b><u>THE BANK</u></b></td>\r\n                    </tr>\r\n                </table>\r\n            </div>\r\n\r\n            <div class=\"footer\">\r\n                <p style=\"line-height: 14px;\">\r\n                    (1)\tPrecede the signature with the handwritten mention <b> Good for personal and joint guarantee of amounts due and to be owed by \r\n                    {{civilite_client}} {{nom_client}}. in principal, (subject to late interest, commissions, premiums, penalties, fees, charges, taxes and other accessories), \r\n                    up to the maximum guaranteed amount of <span class=\"surligne\">{{montant_maximum_garanti}} {{devise}} ({{montant_maximum_garanti_en_lettre}} {{devise}})</span> as indicated above.</b>\r\n                </p>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n\r\n</body>\r\n\r\n</html>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./resources/js/html/afg/fr/convention_cautionnement_solidaire_perso.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./resources/js/html/afg/fr/convention_cautionnement_solidaire_perso.html ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!DOCTYPE html>\r\n<html lang=\"fr\">\r\n\r\n<head>\r\n    <meta charset=\"UTF-8\">\r\n    <title>Convention de cautionnement solidaire et personnel</title>\r\n    <style>\r\n        .page-pdf {\r\n            padding: 35px;\r\n            width: 714px;\r\n            height: 1040px;\r\n            margin: 50px auto;\r\n            box-sizing: border-box;\r\n            border: 1px solid rgb(221, 221, 221);\r\n            background: white;\r\n            position: relative;\r\n        }\r\n\r\n        .column-pdf {\r\n            padding: 5px;\r\n            flex: 1;\r\n        }\r\n\r\n        .d-flex {\r\n            display: flex;\r\n        }\r\n\r\n        .souligne-espace {\r\n            text-decoration: underline;\r\n            text-decoration-color: #000;\r\n            text-underline-offset: 3px;\r\n        }\r\n\r\n        .X-size {\r\n            padding: 0px 0px 1px 0px !important;\r\n            margin: 0;\r\n            font-weight: 700;\r\n            text-decoration: underline;\r\n        }\r\n\r\n        .Xx-size {\r\n            padding: 4px 0px 1px 0px !important;\r\n            margin: 0;\r\n            font-weight: 700;\r\n            /* text-decoration: underline; */\r\n        }\r\n\r\n        .footer {\r\n            position: absolute;\r\n            bottom: 55px;\r\n            width: 80%;\r\n            text-align: center;\r\n        }\r\n\r\n        .surligne {\r\n            /* background-color: yellow; */\r\n            /* padding: 0 2px; */\r\n            /* line-height: 1.2; */\r\n            display: inline-block;\r\n            box-shadow: inset 0 -0.4em 0 yellow;\r\n        }\r\n\r\n    </style>\r\n</head>\r\n\r\n<body>\r\n\r\n    <div style=\"font-size: 8.5pt; line-height: 8.5pt; background-color: #fff; color: #000; margin: 40px; text-align: justify;\">\r\n        <div class=\"page-pdf\">\r\n            <div style=\"width: 80px;\">\r\n                <img src=\"/images/{{logo}}\" alt=\"\" style=\"width: 100%; height: auto;\">\r\n            </div>\r\n\r\n            <div style=\"width: 80%; margin: 0 auto; border-right: 1px solid; border-left: 1px solid; border-top: 1px solid; \r\n                border-bottom: 4px solid; padding: 10px 20px; text-align: center;\">\r\n                <b>CONVENTION DE CAUTIONNEMENT SOLIDAIRE ET PERSONNEL</b>\r\n            </div>\r\n\r\n            <div style=\"padding: 4px;\">\r\n                <p> <b>ENTRE LES SOUSSIGNEES</b> </p>\r\n                <p style=\"margin-left: 15px;\">I. <b>{{ banque_name }}</b> par abréviation « <b>{{banque_abreviation}}</b> », {{statut_juridique}} au capital social de {{capital_social}} {{devise}}  \r\n                    dont le siège social est à {{siege_social}}, {{ bp}}, immatriculée au Registre du Commerce et du Crédit Mobilier \r\n                    de {{lieu_immatriculation}} le {{date_immatriculation}} <span class=\"surligne\">sous le numéro</span> {{immatriculation_rccm}}, avec inscription modificative intervenue en date du six mai deux mille vingt-quatre \r\n                    <span class=\"surligne\">sous le numéro</span> RC/DLA/2024/M/1031 ;</p>\r\n            </div>\r\n            <p style=\"text-align: right;\">Ci-après désignée : <b>la Banque ou le bénéficiaire, d’une part.</b> </p>\r\n\r\n            <div style=\"border: solid 1px black; padding: 5px; margin: 5px 0;\">\r\n                II. {{civilite_caution}}, Né le {{date_de_naissance_caution}} à {{lieu_naissance_caution}} et {{nom_de_la_mere_caution}} Demeurant à {{adresse_de_la_caution}} ; \r\n                Titre d’Identification : {{type_piece_identite_caution}} N°  {{num_piece_identite_caution}} délivré(e) le {{date_delivrance_piece_identite_caution}} à {{lieu_delivrance_piece_identite_caution}} ;\r\n            </div>\r\n            <p style=\"text-align: right;\">Ci-après désigné(e) : <b>la Caution, d’autre part ;</b> </p>\r\n\r\n            <div style=\"width: 30%; margin: 0 auto; border-right: 1px solid; border-left: 1px solid; border-top: 1px solid; \r\n                border-bottom: 4px solid; padding: 10px 20px; text-align: center;\">\r\n                <b>PREAMBULE</b>\r\n            </div>\r\n\r\n            <div style=\"margin: 5px 0;\">\r\n                <p>\r\n                    <b>{{civilite_client}}</b> <span class=\"surligne\">{{nom_client}}</span>, (Débiteur) a sollicité auprès de la BANQUE, des facilités d’un montant total de <span class=\"surligne\"> {{montant_sollicite}} {{devise}}, ({{montant_sollicite_en_lettre}} {{devise}}) </span> \r\n                    pour {{objet_de_la_demande}}. La Banque a consenti à la demande ainsi formulée, moyennant la constitution des sûretés conséquentes. \r\n                </p>\r\n                <p>\r\n                    Afin de garantir le remboursement de toutes les sommes dues par l’Emprunteur au titre des documents financiers, il a été convenu que le CONSTITUANT \r\n                    se porte Caution Personnelle et Solidaire auprès de la Banque, et s’engage à pallier toute défaillance de l’Emprunteur jusqu’à concurrence \r\n                    du montant de {{montant_maximum_garanti}} {{devise}} ( {{montant_maximum_garanti_en_lettre}} {{devise}} ) constituant le Montant Maximum Garanti.\r\n                </p>\r\n                <p>\r\n                    Les parties se sont donc rapprochées et au terme de leurs discussions et négociations, ont arrêté, \r\n                    ainsi qu’il suit les conditions et modalités de cautionnement personnel et solidaire, en remboursement de la facilité accordée \r\n                    par la BANQUE.\r\n                </p>\r\n            </div>\r\n\r\n            <div style=\"width: 80%; margin: 0 auto; border-right: 1px solid; border-left: 1px solid; border-top: 1px solid; \r\n                border-bottom: 4px solid; padding: 10px 20px; text-align: center;\">\r\n                <b>CECI EXPOSE, LES PARTIES SONT CONVENUES DE CE QUI SUIT :</b>\r\n            </div>\r\n\r\n            <div class=\"d-flex\">\r\n                <div class=\"column-pdf\">\r\n                    <h4 style=\"margin: 3px 0;\"><b>ARTICLE 1 : <u>CAUTIONNEMENT</u></b></h4>\r\n                    <div>\r\n                        <p>\r\n                            <b style=\"font-size: 10px;\">1.1</b> La Caution déclare se constituer caution solidaire, personnelle et indivisible de <b>{{civilite_client}}</b> <span class=\"surligne\">{{nom_client}} </span>\r\n                            titulaire du compte numéro {{num_compte_bancaire}}, pour toutes les sommes que le Cautionné doit, peut ou pourra devoir à la Banque à raison de tous engagements, \r\n                            de toutes opérations et d’une façon générale, de toutes les obligations nées, sans aucune exception, directement ou indirectement à l’égard de la Banque \r\n                            pour quelque cause que ce soit. C’est ainsi que le Cautionnement s’applique, sans que cette énumération soit limitative, à toutes les obligations résultantes notamment :\r\n                        </p>\r\n                    \r\n                        <ul style=\"margin-left: -20px !important;\">\r\n                            <li>\r\n                                de tous crédits par caisse ou par signature, des soldes exigibles en faveur de la Banque de tous comptes courants ouverts au nom du Cautionné, \r\n                                des opérations de bourse traitées par lui, de tous chèques, billets ou effets comportant sa signature à quelque titre que ce soit et pour lesquels \r\n                                la Banque aura été dispensée ou non de tout protêt ou de tout avis de non-paiement, des négociations de lettres de change relevé, d’actes de cession de créances, \r\n                                de tous engagements d’aval, de caution ou de garantie de paiement fournis par le Cautionné ;\r\n                            </li>\r\n                            <li>\r\n                                De tous engagements d’avals, de caution, de garantie ou de contre garantie ou encore de toutes acceptations données par la Banque pour \r\n                                le compte du Cautionné ou sur son ordre.\r\n                            </li>\r\n                        </ul>\r\n\r\n                        <p>\r\n                            <b style=\"font-size: 10px;\">1.2</b> Les obligations de la Caution en exécution du présent cautionnement sont limitées au montant maximal   \r\n                            de <span class=\"surligne\">{{montant_maximum_garanti}} {{devise}} ({{montant_maximum_garanti_en_lettre}} {{devise}})</span> , garantissant tant le principal des engagements de l’Emprunteur que tous intérêts, frais et accessoires venant en sus, \r\n                            étendus au solde éventuellement débiteur de son compte courant tel qu’il apparaîtrait à sa clôture.\r\n                        </p>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"column-pdf\">\r\n                    <h4 style=\"margin: 3px 0;\"><b>ARTICLE 2 : <u>ETENDUE DU CAUTIONNEMENT</u></b></h4>\r\n                    <div style=\"padding: 4px 0 0 0;\">\r\n                        Le présent engagement oblige la Caution, à titre solidaire et personnel, sur tous ses biens meubles et immeubles, \r\n                        à payer à la Banque ce que lui doit ou devra le Cautionné, dans la limite du Montant Maximal Garanti, au cas où le Cautionné ne pourrait faire \r\n                        face à ses obligations au titre des Obligations Garanties.\r\n                    </div>\r\n\r\n                    <div>\r\n                        <h4 style=\"margin: 5px 0\"><b>ARTICLE 3 : <u>ENGAGEMENTS DE LA CAUTION</u></b></h4>\r\n                        <p> <b style=\"font-size: 10px;\">3.1</b> La Caution renonce expressément aux bénéfices de discussion et de division \r\n                            tant avec le Cautionné qu’avec tous coobligés.\r\n                        </p>\r\n    \r\n                        <p> <b style=\"font-size: 10px;\">3.2</b> La Caution renonce à se prévaloir :\r\n                            <ul style=\"margin-left: -20px !important;\">\r\n                                <li>\r\n                                    Des dispositions de l’article 23 de l’acte uniforme de l’OHADA (NOUVEAU) portant organisation des sûretés qui, sans la décharger de ses engagements, \r\n                                    l’autoriseraient à poursuivre la débitrice garantie pour la forcer au paiement au cas où des délais de paiement lui seraient accordés par la Banque ; et\r\n                                </li>\r\n                                <li>\r\n                                    De toutes subrogations, de toutes actions qui auraient pour résultat de la faire venir en concours avec la Banque à l’encontre de la débitrice \r\n                                    garantie tant que la banque n’aura pas été désintéressée de la totalité des sommes en principal, intérêts, commissions, frais, indemnités et accessoires qui lui sont dues au titre des Obligations Garanties.\r\n                                </li>\r\n                            </ul>\r\n                        </p>\r\n\r\n                        <p> <b style=\"font-size: 10px;\">3.3</b> La Caution renonce expressément, dans l’hypothèse de la déclaration de l’exigibilité anticipée des Crédits conformément aux stipulations de la Convention de Crédit, \r\n                            à se prévaloir, à l’égard de la Banque, de l’inopposabilité de la déchéance du terme encourue par le Débiteur Garanti.\r\n                        </p>\r\n\r\n                        <p> <b style=\"font-size: 10px;\">3.4</b> La Caution s’engage, pour toute la durée du présent cautionnement :\r\n                        </p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n        <div class=\"page-pdf\">\r\n            <div class=\"d-flex\">\r\n                <div class=\"column-pdf\">\r\n                    <ul style=\"margin-left: -20px !important;\">\r\n                        <li>\r\n                            À informer la Banque par écrit dès qu’elle aura connaissance de tout événement susceptible d’entraîner une détérioration de sa situation financière ou de sa capacité à \r\n                            faire face à ses obligations au titre du présent cautionnement ;\r\n                        </li>\r\n                        <li>\r\n                            À ne pas céder ou transférer la propriété d’un de ses actifs si cette cession ou ce transfert devait avoir un effet négatif important sur sa situation financière ou sa capacité à faire face \r\n                            à ses obligations au titre du présent cautionnement.\r\n                        </li>\r\n                    </ul>\r\n\r\n                    <p> <b style=\"font-size: 10px;\">3.5</b> La caution déclare que la banque a suffisamment attiré son attention sure :\r\n                        <ul style=\"margin-left: -20px !important;\">\r\n                            <li>\r\n                                La nature et l’étendue de son engagement ;\r\n                            </li>\r\n                            <li>\r\n                                La proportionnalité entre la valeur de ses biens et le montant du cautionnement, ce à quoi il atteste sur l’honneur disposé \r\n                                d’un patrimoine suffisant pour couvrir le montant cautionné\r\n                            </li>\r\n                        </ul>\r\n                    </p>\r\n\r\n                    <div>\r\n                        <h4 style=\"margin: 5px 0\"><b>ARTICLE 4 : <u>ENGAGEMENT DE LA BANQUE</u></b></h4>\r\n                        <p> <b style=\"font-size: 10px;\">4.1</b> La Banque est tenue d’informer la Caution de toute défaillance du Cautionné au titre des Obligations Garantie, \r\n                            ainsi que de la déchéance ou de la prorogation du terme en indiquant le montant restant dû par lui en principal, intérêts et frais au jour de la défaillance, déchéance ou prorogation du terme.\r\n                        </p>\r\n\r\n                        <p> <b style=\"font-size: 10px;\">4.2</b> La Banque est tenue, dans le mois qui suit le terme de chaque semestre civil, de communiquer à la Caution l’état des dettes du Cautionné précisant leurs causes, \r\n                            leurs échéances et leurs montants en principal, intérêts, commissions, frais et accessoires restants dus à la fin de chaque semestre écoulé, en lui rappelant la faculté \r\n                            de révocation par reproduction littérale des stipulations du présent article et celles de l’article 19 de l’Acte Uniforme portant organisation des sûretés.\r\n                        </p>\r\n\r\n                        <p> <b style=\"font-size: 10px;\">4.3</b>\r\n                            Pour la bonne exécution de cet engagement, la caution s’oblige et s’engage à informer la Banque de tout changement d’adresse le concernant.\r\n                        </p>\r\n                    </div>\r\n\r\n                    <div>\r\n                        <h4 style=\"margin: 5px 0\"><b>ARTICLE 5 : <u>MISE EN JEU DU CAUTIONNEMENT</u></b></h4>\r\n                        <p>\r\n                            En cas de non-paiement à son échéance, par le Cautionné, d'une quelconque somme due au titre des Obligations Garanties, la Caution sera tenue de payer à la Banque, \r\n                            dans la limite du Montant Maximal Garanti, le montant concerné, quinze (15) jours après une mise en demeure adressée au Cautionné restée sans effet. La Caution ne pourra \r\n                            pas se prévaloir des délais de paiement accordés conventionnellement ou judiciairement au Cautionné.\r\n                        </p>\r\n                    </div>\r\n\r\n                    <div>\r\n                        <h4 style=\"margin: 5px 0\"><b>ARTICLE 6 : <u>DUREE</u></b></h4>\r\n                        <p> <b style=\"font-size: 10px;\">6.1</b> Le présent cautionnement entre en vigueur à la date de sa signature et restera en vigueur tant que \r\n                            l’ensemble des Obligations Garanties n’aura pas été intégralement remboursé ou payé.\r\n                        </p>\r\n\r\n                        <p> <b style=\"font-size: 10px;\">6.2</b> La Caution peut décider à tout moment de révoquer son engagement par notification écrite à la Banque. La révocation prendra effet à l’expiration \r\n                            d’un délai de quatre-vingt-dix (90) jours à compter de la date de réception de la lettre de notification. La Caution restera tenue jusqu’au remboursement intégral et définitif à \r\n                            la Banque de tous les engagements du Cautionné nés \r\n                        </p>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"column-pdf\">\r\n                    <div style=\"margin-left: 15px;\">\r\n                        antérieurement à la date de prise d’effet de cette révocation, y compris de ceux dont les échéances et l’exigibilité seront postérieurs à cette date\r\n                    </div>\r\n\r\n                    <div>\r\n                        <h4 style=\"margin: 5px 0\"><b>ARTICLE 7 : <u>DIVERS</u></b></h4>\r\n                        <p> <b style=\"font-size: 10px;\">7.1</b> Le présent cautionnement s’ajoute et s’ajoutera à toutes garanties réelles ou personnelles \r\n                            qui ont pu ou qui pourront être fournies au profit de la Banque par la Caution, par le Cautionné ou par tout tiers.\r\n                        </p>\r\n\r\n                        <p> <b style=\"font-size: 10px;\">7.2</b> Toutes les obligations résultant du présent cautionnement pour la Caution sont stipulées indivisibles, \r\n                            de telle sorte que leur exécution pourra être réclamée pour leur totalité à n’importe lequel des héritiers ou ayant-droit de la Caution.\r\n                        </p>\r\n\r\n                        <p> <b style=\"font-size: 10px;\">7.3</b>\r\n                            Toutes les notifications auxquelles le présent cautionnement pourra donner lieu seront faites par écrit et seront adressées par lettre recommandée avec \r\n                            accusé de réception, remises par porteur avec décharge, ou transmises par un service de courrier de réputation internationale, aux Parties, à leur adresse respective mentionnée en tête des présentes.\r\n                        </p>\r\n                    </div>\r\n\r\n                    <div>\r\n                        <h4 style=\"margin: 5px 0\"><b>ARTICLE 8 : <u>DECLARATION DE PATRIMOINE</u></b></h4>\r\n                        <p style=\"margin-bottom: 0;\"> \r\n                            La Caution déclare que son patrimoine est constitué des éléments actifs et passifs ci-après :\r\n                            <ul style=\"margin: 5px;\">{{ text_avoirs_investissements }}</ul>\r\n                        </p>\r\n                    </div>\r\n\r\n                    <div>\r\n                        <h4 style=\"margin: 5px 0\"><b>ARTICLE 9 : <u>IMPOTS ET FRAIS</u></b></h4>\r\n                        <p> \r\n                            Tous les droits, frais fiscaux, timbres, impôts et autres frais, relatifs au présent cautionnement et de ses suites ou pouvant résulter de leur exécution, \r\n                            en ce compris les frais et commissions d’information de la caution sont à la charge du cautionné qui s’y oblige.\r\n                        </p>\r\n                    </div>\r\n\r\n                    <div>\r\n                        <h4 style=\"margin: 5px 0\"><b>ARTICLE 10 : <u>ELECTION DE DOMICILE</u></b></h4>\r\n                        <p> \r\n                            Pour l’exécution des présentes et de leurs suites, les Parties font élection de domicile en leur siège social respectif ci-dessus indiqué.\r\n                        </p>\r\n                    </div>\r\n\r\n                    <div>\r\n                        <h4 style=\"margin: 5px 0\"><b>ARTICLE 11 : <u>DROIT APPLICABLE – ATTRIBUTION DE COMPETENCE</u></b></h4>\r\n                        <p> <b style=\"font-size: 10px;\">11.1</b> Le présent cautionnement est soumis aux dispositions des Actes Uniformes de l’OHADA \r\n                            et aux dispositions législatives et réglementaires en vigueur au {{pays_legislatives}}, non contraires à celles des Actes Uniformes de l’OHADA.\r\n                        </p>\r\n\r\n                        <p> <b style=\"font-size: 10px;\">11.2</b> Tous différends et litiges relatifs à l’interprétation du présent cautionnement, \r\n                            à son exécution, ses suites et ses conséquences, seront de la seule compétence des tribunaux du {{pays_legislatives}}.\r\n                        </p>\r\n                    </div>\r\n\r\n                    <div style=\"margin-left: 15px;\">\r\n                        <p style=\"margin-bottom: 0px;\">Fait à {{lieu_edition}}, le {{date_edition}}.</p>\r\n                        <p style=\"margin-top: 3px;\">En trois (03) exemplaires originaux</p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div style=\"margin-top: 20px;\">\r\n                <hr>\r\n                <table style=\"width: 100%;\">\r\n                    <tr>\r\n                        <td style=\"width: 50%; text-align: center;\"><b><u>LA CAUTION (1) </u></b></td>\r\n                        <td style=\"width: 50%; text-align: center;\"><b><u>LA BANQUE</u></b></td>\r\n                    </tr>\r\n                </table>\r\n            </div>\r\n\r\n            <div class=\"footer\">\r\n                <p style=\"line-height: 14px;\">\r\n                    (1)\tFaire précéder la signature de la mention manuscrite <b> Bon pour caution personnelle et solidaire des sommes dues et à devoir par \r\n                    {{civilite_client}} {{nom_client}}. en principal, (sous réserve des intérêts de retard, commissions, primes, pénalités, frais, charges, taxes et autres accessoires), \r\n                    à hauteur du montant maximal garanti de <span class=\"surligne\">{{montant_maximum_garanti}} {{devise}} ({{montant_maximum_garanti_en_lettre}} {{devise}})</span> comme indiqué ci-dessus.</b>\r\n                </p>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n\r\n</body>\r\n\r\n</html>");

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/conventions/en/CAUTIONNEMENT_PERSONNEL_SOLIDAIRE.vue?vue&type=style&index=0&id=61ef7e6c&lang=css&scoped=true":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/conventions/en/CAUTIONNEMENT_PERSONNEL_SOLIDAIRE.vue?vue&type=style&index=0&id=61ef7e6c&lang=css&scoped=true ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CAUTIONNEMENT_PERSONNEL_SOLIDAIRE_vue_vue_type_style_index_0_id_61ef7e6c_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CAUTIONNEMENT_PERSONNEL_SOLIDAIRE.vue?vue&type=style&index=0&id=61ef7e6c&lang=css&scoped=true */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/conventions/en/CAUTIONNEMENT_PERSONNEL_SOLIDAIRE.vue?vue&type=style&index=0&id=61ef7e6c&lang=css&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CAUTIONNEMENT_PERSONNEL_SOLIDAIRE_vue_vue_type_style_index_0_id_61ef7e6c_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CAUTIONNEMENT_PERSONNEL_SOLIDAIRE_vue_vue_type_style_index_0_id_61ef7e6c_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/offview/bank/afg/memo/conventions/en/CAUTIONNEMENT_PERSONNEL_SOLIDAIRE.vue":
/*!************************************************************************************************************!*\
  !*** ./resources/js/components/offview/bank/afg/memo/conventions/en/CAUTIONNEMENT_PERSONNEL_SOLIDAIRE.vue ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CAUTIONNEMENT_PERSONNEL_SOLIDAIRE_vue_vue_type_template_id_61ef7e6c_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CAUTIONNEMENT_PERSONNEL_SOLIDAIRE.vue?vue&type=template&id=61ef7e6c&scoped=true */ "./resources/js/components/offview/bank/afg/memo/conventions/en/CAUTIONNEMENT_PERSONNEL_SOLIDAIRE.vue?vue&type=template&id=61ef7e6c&scoped=true");
/* harmony import */ var _CAUTIONNEMENT_PERSONNEL_SOLIDAIRE_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CAUTIONNEMENT_PERSONNEL_SOLIDAIRE.vue?vue&type=script&lang=js */ "./resources/js/components/offview/bank/afg/memo/conventions/en/CAUTIONNEMENT_PERSONNEL_SOLIDAIRE.vue?vue&type=script&lang=js");
/* harmony import */ var _CAUTIONNEMENT_PERSONNEL_SOLIDAIRE_vue_vue_type_style_index_0_id_61ef7e6c_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CAUTIONNEMENT_PERSONNEL_SOLIDAIRE.vue?vue&type=style&index=0&id=61ef7e6c&lang=css&scoped=true */ "./resources/js/components/offview/bank/afg/memo/conventions/en/CAUTIONNEMENT_PERSONNEL_SOLIDAIRE.vue?vue&type=style&index=0&id=61ef7e6c&lang=css&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _CAUTIONNEMENT_PERSONNEL_SOLIDAIRE_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _CAUTIONNEMENT_PERSONNEL_SOLIDAIRE_vue_vue_type_template_id_61ef7e6c_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _CAUTIONNEMENT_PERSONNEL_SOLIDAIRE_vue_vue_type_template_id_61ef7e6c_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "61ef7e6c",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/offview/bank/afg/memo/conventions/en/CAUTIONNEMENT_PERSONNEL_SOLIDAIRE.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/offview/bank/afg/memo/conventions/en/CAUTIONNEMENT_PERSONNEL_SOLIDAIRE.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************!*\
  !*** ./resources/js/components/offview/bank/afg/memo/conventions/en/CAUTIONNEMENT_PERSONNEL_SOLIDAIRE.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CAUTIONNEMENT_PERSONNEL_SOLIDAIRE_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CAUTIONNEMENT_PERSONNEL_SOLIDAIRE.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/conventions/en/CAUTIONNEMENT_PERSONNEL_SOLIDAIRE.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CAUTIONNEMENT_PERSONNEL_SOLIDAIRE_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/offview/bank/afg/memo/conventions/en/CAUTIONNEMENT_PERSONNEL_SOLIDAIRE.vue?vue&type=style&index=0&id=61ef7e6c&lang=css&scoped=true":
/*!********************************************************************************************************************************************************************!*\
  !*** ./resources/js/components/offview/bank/afg/memo/conventions/en/CAUTIONNEMENT_PERSONNEL_SOLIDAIRE.vue?vue&type=style&index=0&id=61ef7e6c&lang=css&scoped=true ***!
  \********************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CAUTIONNEMENT_PERSONNEL_SOLIDAIRE_vue_vue_type_style_index_0_id_61ef7e6c_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CAUTIONNEMENT_PERSONNEL_SOLIDAIRE.vue?vue&type=style&index=0&id=61ef7e6c&lang=css&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/conventions/en/CAUTIONNEMENT_PERSONNEL_SOLIDAIRE.vue?vue&type=style&index=0&id=61ef7e6c&lang=css&scoped=true");


/***/ }),

/***/ "./resources/js/components/offview/bank/afg/memo/conventions/en/CAUTIONNEMENT_PERSONNEL_SOLIDAIRE.vue?vue&type=template&id=61ef7e6c&scoped=true":
/*!******************************************************************************************************************************************************!*\
  !*** ./resources/js/components/offview/bank/afg/memo/conventions/en/CAUTIONNEMENT_PERSONNEL_SOLIDAIRE.vue?vue&type=template&id=61ef7e6c&scoped=true ***!
  \******************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CAUTIONNEMENT_PERSONNEL_SOLIDAIRE_vue_vue_type_template_id_61ef7e6c_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CAUTIONNEMENT_PERSONNEL_SOLIDAIRE_vue_vue_type_template_id_61ef7e6c_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CAUTIONNEMENT_PERSONNEL_SOLIDAIRE_vue_vue_type_template_id_61ef7e6c_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CAUTIONNEMENT_PERSONNEL_SOLIDAIRE.vue?vue&type=template&id=61ef7e6c&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/conventions/en/CAUTIONNEMENT_PERSONNEL_SOLIDAIRE.vue?vue&type=template&id=61ef7e6c&scoped=true");


/***/ })

}]);