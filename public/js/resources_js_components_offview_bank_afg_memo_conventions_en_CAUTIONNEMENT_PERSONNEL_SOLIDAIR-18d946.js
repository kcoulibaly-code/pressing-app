"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_offview_bank_afg_memo_conventions_en_CAUTIONNEMENT_PERSONNEL_SOLIDAIR-18d946"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/conventions/en/CAUTIONNEMENT_PERSONNEL_SOLIDAIRE_old.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/conventions/en/CAUTIONNEMENT_PERSONNEL_SOLIDAIRE_old.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************************************************************************************/
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
        this.formData.pays_legislatives = "Cameroun";
        this.formData.devise = (_this$authcheckUsr$si2 = (_this$authcheckUsr2 = this.authcheckUsr) === null || _this$authcheckUsr2 === void 0 ? void 0 : _this$authcheckUsr2.sigle_devise) !== null && _this$authcheckUsr$si2 !== void 0 ? _this$authcheckUsr$si2 : "";
        this.formData.lieu_immatriculation = "Douala";
        this.formData.lieu_edition = "Douala";
        this.formData.date_immatriculation = "2008-09-19";
        this.formData.statut_juridique = "Société Anonyme avec Conseil d’Administration";
        this.formData['immatriculation_rccm'] = "RC/DLA/2008/B/1195";
      }
      if (((_this$meta_data$dossi2 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi2 === void 0 ? void 0 : _this$meta_data$dossi2.cred_pub_tb_120004) != undefined) {
        var _this$meta_data$dossi3, _this$cautionnement_p, _this$cautionnement_p2, _this$cautionnement_p3, _this$cautionnement_p4, _this$cautionnement_p5, _this$cautionnement_p6, _this$cautionnement_p7, _this$cautionnement_p8, _this$cautionnement_p9, _this$cautionnement_p0, _this$cautionnement_p1, _this$cautionnement_p10, _this$cautionnement_p11, _this$cautionnement_p12, _this$cautionnement_p13;
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
      var conventionName, filename, pages, pdf, pageWidth, pageHeight, i, page, canvas, imgWidth, imgHeight, imgData, pdfBlob;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            _this6.pdf_process = true;
            conventionName = (_this6$annexe = _this6.annexe) === null || _this6$annexe === void 0 ? void 0 : _this6$annexe.type_facilite.trim().replace(/\s+/g, "_").toLowerCase();
            filename = "Cautionnement personnel solidaire/ ".concat(conventionName) + ".pdf";
            pages = document.querySelectorAll(".print-page");
            if (pages.length) {
              _context4.next = 8;
              break;
            }
            console.error("❌ Aucun élément `.print-page` trouvé.");
            _this6.pdf_process = false;
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
            _this6.pdfFile = new File([pdfBlob], filename, {
              type: "application/pdf"
            });
            if (download) {
              pdf.save(filename);
            } else {
              _this6.handleDoubleClickOrClick(_this6.indexSelectionne, _this6.pdfFile);
            }
            _context4.next = 36;
            break;
          case 33:
            _context4.prev = 33;
            _context4.t0 = _context4["catch"](11);
            console.error("Erreur lors de la génération du PDF :", _context4.t0);
          case 36:
            _context4.prev = 36;
            _this6.pdf_process = false; // Désactiver l'indicateur, même en cas d'erreur
            return _context4.finish(36);
          case 39:
          case "end":
            return _context4.stop();
        }
      }, _callee4, null, [[11, 33, 36, 39]]);
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
    return crypto_js__WEBPACK_IMPORTED_MODULE_3___default().AES.encrypt(JSON.stringify(data), secretKey).toString();
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
  }), _defineProperty(_methods, "getAgenceLocation", function getAgenceLocation() {
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
    }
  },
  beforeDestroy: function beforeDestroy() {
    this.$off("build-off-printable");
    this.$off("generate-pdf-process");
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/conventions/en/CAUTIONNEMENT_PERSONNEL_SOLIDAIRE_old.vue?vue&type=template&id=06fc7d9c&scoped=true":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/conventions/en/CAUTIONNEMENT_PERSONNEL_SOLIDAIRE_old.vue?vue&type=template&id=06fc7d9c&scoped=true ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
      top: "5px",
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
  }), _vm._v("\n                        Importer dans le dossier\n                    ")]) : _vm._e(), _vm._v(" "), !_vm.edit_mode ? _c("button", {
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
  }), _vm._v("\n                        Télécharger le fichier\n                    ")]) : _vm._e()] : _c("div", {
    staticStyle: {
      display: "inline-block"
    }
  }, [_vm._m(1), _vm._v(" "), _c("span", {
    staticStyle: {
      "font-size": "0.9rem",
      "margin-left": "5px"
    }
  }, [_vm._v("\n                    Génération du PDF en cours...\n                ")])])], 2), _vm._v(" "), _c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: !_vm.build_off,
      expression: "!build_off"
    }],
    ref: "contentToCapture",
    staticClass: "mt-5",
    staticStyle: {
      "font-size": "8px !important"
    },
    attrs: {
      id: "contentToCapture"
    }
  }, [_vm._m(2), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12 mt-2"
  }, [_vm._m(3), _vm._v(" "), _c("ol", {
    staticClass: "position-relative",
    staticStyle: {
      margin: "0"
    },
    attrs: {
      type: "I"
    }
  }, [_c("li", [_c("div", {
    staticClass: "p-2"
  }, [[_c("span", [_c("b", [_vm._v(_vm._s(_vm.formData["banque_name"]))])])], _vm._v("\n                                    par abréviation\n                                    «\n                                    "), [_c("span", [_c("b", [_vm._v(_vm._s(_vm.formData["banque_abreviation"]))])])], _vm._v("\n                                    »,\n                                    "), [_c("span", [_c("b", [_vm._v(_vm._s(_vm.formData["statut_juridique"]))])])], _vm._v(" au capital social de\n                                    "), [_c("span", [_c("b", [_vm._v(_vm._s(_vm.formData["capital_social"]))])])], _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.formData["devise"]))]), _vm._v(" dont le siège social est à\n                                    "), [_c("span", [_c("b", [_vm._v(_vm._s(_vm.formData["siege_social"]))])])], _vm._v(", boite postale\n                                    "), [_c("span", [_c("b", [_vm._v(_vm._s(_vm.formData["boîte_postale"]))])])], _vm._v(", immatriculée au Registre du Commerce\n                                    et du Crédit Mobilier de\n                                    "), [_c("span", [_c("b", [_vm._v(_vm._s(_vm.formData["lieu_immatriculation"]))])])], _vm._v(" le\n                                    "), [_c("span", [_c("b", [_vm._v(_vm._s(_vm.formatDate(_vm.formData["date_immatriculation"])))])])], _vm._v(" sous le numéro\n\n                                    "), [_c("span", [_c("b", [_vm._v(_vm._s(_vm.formData["immatriculation_rccm"]))])])], _vm._v(",\n                                    "), _vm.authenticatedUser.filiale == "AFGB CM" ? _c("span", [_vm._v(" avec inscription modificative intervenue en date du ")]) : _vm._e(), _vm._v(" "), _vm.authenticatedUser.filiale == "AFGB CM" ? [_vm._m(4)] : _vm._e(), _vm._v(" "), _vm.authenticatedUser.filiale == "AFGB CM" ? _c("span", [_vm._v(" sous le numéro ")]) : _vm._e(), _vm._v(" "), _vm.authenticatedUser.filiale == "AFGB CM" ? [_vm._m(5)] : _vm._e()], 2)]), _vm._v(" "), _c("div", {
    staticClass: "d-flex justify-content-end p-2"
  }, [_c("div", [_vm._v("\n                                    Ci-après désignée :\n                                    “"), [_vm._m(6)], _vm._v(" ”,\n                                    "), _c("b", [_vm._v("\n                                        d’une part.\n                                    ")])], 2)])]), _vm._v(" "), _c("div", {
    staticClass: "col-12 p-2 position-relative"
  }, [_c("div", {
    staticClass: "d-flex align-items-center justify-content-center"
  }, [_c("div", {
    staticClass: "p-2",
    staticStyle: {
      "text-transform": "uppercase",
      border: "1px solid"
    }
  }, [_c("ol", {
    staticStyle: {
      margin: "0"
    },
    attrs: {
      type: "I",
      start: "2"
    }
  }, [_c("li", [_c("div", [[!_vm.edit_mode ? _c("span", [_c("b", [_vm._v(_vm._s(_vm.formData["civilite_caution"]))])]) : _c("span", {
    staticStyle: {
      "background-color": "#ffffad",
      padding: "2px 5px",
      "border-radius": "5px"
    }
  }, [_vm._v(_vm._s(_vm.formData["civilite_caution"]))])], _vm._v(" "), [!_vm.edit_mode ? _c("span", [_c("b", [_vm._v(_vm._s(_vm.formData["nom_caution"]))])]) : _c("span", {
    staticStyle: {
      "background-color": "#ffffad",
      padding: "2px 5px",
      "border-radius": "5px"
    }
  }, [_vm._v(_vm._s(_vm.formData["nom_caution"]))])], _vm._v(", Né le\n                                                "), [!_vm.edit_mode ? _c("span", [_c("b", [_vm._v(_vm._s(_vm.formatDate(_vm.formData["date_de_naissance_caution"])))])]) : _c("span", {
    staticStyle: {
      "background-color": "#ffffad",
      padding: "2px 5px",
      "border-radius": "5px"
    }
  }, [_vm._v(_vm._s(_vm.formatDate(_vm.formData["date_de_naissance_caution"])))])], _vm._v(" à\n                                                "), [!_vm.edit_mode ? _c("span", [_c("b", [_vm._v(_vm._s(_vm.formData["lieu_naissance_caution"]))])]) : _c("span", {
    staticStyle: {
      "background-color": "#ffffad",
      padding: "2px 5px",
      "border-radius": "5px"
    }
  }, [_vm._v(_vm._s(_vm.formData["lieu_naissance_caution"]))])], _vm._v(" de\n                                                "), [!_vm.edit_mode ? _c("span", [_c("b", [_c("a", {
    staticStyle: {
      color: "black",
      "font-weight": "bold",
      "text-decoration": "none"
    },
    attrs: {
      href: "#dcp-ppo1-head"
    },
    on: {
      click: function click($event) {
        return _vm.$modal.hide("redaction_annexe");
      }
    }
  }, [_vm._v(_vm._s(_vm.formData["nom_du_pere_caution"]))])])]) : _c("span", {
    staticStyle: {
      "background-color": "#ffffad",
      padding: "2px 5px",
      "border-radius": "5px"
    }
  }, [_vm._v(_vm._s(_vm.formData["nom_du_pere_caution"]))])], _vm._v("\n                                                et\n                                                "), [!_vm.edit_mode ? _c("span", [_c("b", [_c("a", {
    staticStyle: {
      color: "black",
      "font-weight": "bold",
      "text-decoration": "none"
    },
    attrs: {
      href: "#dcp-ppo1-head"
    },
    on: {
      click: function click($event) {
        return _vm.$modal.hide("redaction_annexe");
      }
    }
  }, [_vm._v(_vm._s(_vm.formData["nom_de_la_mere_caution"]))])])]) : _c("span", {
    staticStyle: {
      "background-color": "#ffffad",
      padding: "2px 5px",
      "border-radius": "5px"
    }
  }, [_vm._v(_vm._s(_vm.formData["nom_de_la_mere_caution"]))])], _vm._v("\n                                                Demeurant à\n                                                "), [!_vm.edit_mode ? _c("span", [_c("b", [_vm._v(_vm._s(_vm.formData["adresse_de_la_caution"]))])]) : _c("span", {
    staticStyle: {
      "background-color": "#ffffad",
      padding: "2px 5px",
      "border-radius": "5px"
    }
  }, [_vm._v(_vm._s(_vm.formData["adresse_de_la_caution"]))])], _vm._v(" ;\n                                                Titre d’Identification :\n                                                "), _vm._v(" "), !_vm.edit_mode ? _c("span", [_c("b", [_vm._v(_vm._s(_vm.formData["type_piece_identite_caution"]))])]) : _c("span", {
    staticStyle: {
      "background-color": "#ffffad",
      padding: "2px 5px",
      "border-radius": "5px"
    }
  }, [_vm._v(_vm._s(_vm.formData["type_piece_identite_caution"]))]), _vm._v(" "), [!_vm.edit_mode ? _c("span", [_vm._v("N°  "), _c("b", [_vm._v(_vm._s(_vm.formData["num_piece_identite_caution"]))])]) : _c("span", {
    staticStyle: {
      "background-color": "#ffffad",
      padding: "2px 5px",
      "border-radius": "5px"
    }
  }, [_vm._v("N°  " + _vm._s(_vm.formData["num_piece_identite_caution"]))])], _vm._v(" délivré(e) le\n                                                "), [!_vm.edit_mode ? _c("span", [_c("b", [_vm._v(_vm._s(_vm.formatDate(_vm.formData["date_delivrance_piece_identite_caution"])))])]) : _c("span", {
    staticStyle: {
      "background-color": "#ffffad",
      padding: "2px 5px",
      "border-radius": "5px"
    }
  }, [_vm._v(_vm._s(_vm.formatDate(_vm.formData["date_delivrance_piece_identite_caution"])))])], _vm._v(" à\n                                                "), [!_vm.edit_mode ? _c("span", [_c("b", [_vm._v(_vm._s(_vm.formData["lieu_delivrance_piece_identite_caution"]))])]) : _c("span", {
    staticStyle: {
      "background-color": "#ffffad",
      padding: "2px 5px",
      "border-radius": "5px"
    }
  }, [_vm._v(_vm._s(_vm.formData["lieu_delivrance_piece_identite_caution"]))])], _vm._v(" ;\n                                            ")], 2)])])])]), _vm._v(" "), _c("div", {
    staticClass: "d-flex justify-content-end p-2"
  }, [_c("div", [_vm._v("\n                                    Ci-après désigné(e) :\n                                    “"), [_vm._m(7)], _vm._v("”,\n                                    "), _c("b", [_vm._v("\n                                        d’autre part\n                                    ")])], 2)])])])]), _vm._v(" "), _c("div", {
    staticClass: "col-12 p-1"
  }, [_vm._m(8), _vm._v(" "), _c("div", {
    staticClass: "col-12 mt-2 position-relative"
  }, [_c("ul", {
    staticStyle: {
      "list-style-type": "none"
    }
  }, [_c("li", {
    staticStyle: {
      "list-style-type": "none"
    }
  }, [_c("div", {
    staticClass: "p-2"
  }, [[!_vm.edit_mode ? _c("span", [_c("b", [_vm._v(_vm._s(_vm.formData.civilite_client))])]) : _c("span", {
    staticStyle: {
      "background-color": "#ffffad",
      padding: "2px 5px",
      "border-radius": "5px"
    }
  }, [_vm._v(_vm._s(_vm.formData.civilite_client))])], _vm._v(" "), [!_vm.edit_mode ? _c("span", [_c("b", [_vm._v(_vm._s(_vm.formData.nom_client))])]) : _c("span", {
    staticStyle: {
      "background-color": "#ffffad",
      padding: "2px 5px",
      "border-radius": "5px"
    }
  }, [_vm._v(_vm._s(_vm.formData.nom_client))])], _vm._v(", (Débiteur) a sollicité auprès de la BANQUE, des facilités d’un\n                                    montant total de\n                                    "), [!_vm.edit_mode ? _c("span", [_c("b", [_vm._v(_vm._s(_vm.formData["montant_sollicite"]))])]) : _c("span", {
    staticStyle: {
      "background-color": "#ffffad",
      padding: "2px 5px",
      "border-radius": "5px"
    }
  }, [_vm._v(_vm._s(_vm.formData["montant_sollicite"]))])], _vm._v(" "), [_c("span", [_c("b", [_vm._v(_vm._s(_vm.formData["devise"]))])])], _vm._v(" (\n                                    "), [!_vm.edit_mode ? _c("span", [_c("b", [_vm._v(_vm._s(_vm.convertirEnLettres(_vm.formData["montant_sollicite"])))])]) : _c("span", {
    staticStyle: {
      "background-color": "#ffffad",
      padding: "2px 5px",
      "border-radius": "5px"
    }
  }, [_vm._v(_vm._s(_vm.convertirEnLettres(_vm.formData["montant_sollicite"])))])], _vm._v(" "), [_c("span", [_c("b", [_vm._v(_vm._s(_vm.formData["devise"]))])])], _vm._v(") pour\n                                    "), [!_vm.edit_mode ? _c("span", [_c("b", [_vm._v(_vm._s(_vm.formData["objet_de_la_demande"]))])]) : _c("span", {
    staticStyle: {
      "background-color": "#ffffad",
      padding: "2px 5px",
      "border-radius": "5px"
    }
  }, [_vm._v(_vm._s(_vm.formData["objet_de_la_demande"]))])], _vm._v(".\n                                    La Banque a consenti à la demande ainsi formulée, moyennant la constitution des\n                                    sûretés conséquentes.\n                                    Afin de garantir le remboursement de toutes les sommes dues par l’Emprunteur au\n                                    titre\n                                    des documents financiers, il a été convenu que le CONSTITUANT se porte\n                                    Caution Personnelle et Solidaire auprès de la Banque, et s’engage à pallier\n                                    toute défaillance de l’Emprunteur jusqu’à concurrence du montant de\n                                    "), [!_vm.edit_mode ? _c("span", [_c("b", [_vm._v(_vm._s(_vm.formData["montant_maximum_garanti"]))])]) : _c("span", {
    staticStyle: {
      "background-color": "#ffffad",
      padding: "2px 5px",
      "border-radius": "5px"
    }
  }, [_vm._v(_vm._s(_vm.formData["montant_maximum_garanti"]))])], _vm._v(" "), [_c("span", [_c("b", [_vm._v(_vm._s(_vm.formData["devise"]))])])], _vm._v(" (\n                                    "), [!_vm.edit_mode ? _c("span", [_c("b", [_vm._v(_vm._s(_vm.convertirEnLettres(_vm.formData["montant_maximum_garanti"])))])]) : _c("span", {
    staticStyle: {
      "background-color": "#ffffad",
      padding: "2px 5px",
      "border-radius": "5px"
    }
  }, [_vm._v(_vm._s(_vm.convertirEnLettres(_vm.formData["montant_maximum_garanti"])))])], _vm._v(" "), [_c("span", [_c("b", [_vm._v(_vm._s(_vm.formData["devise"]))])])], _vm._v(") constituant le Montant Maximum Garanti.\n                                    Les parties se sont donc rapprochées et au terme de leurs discussions et\n                                    négociations,\n                                    ont arrêté, ainsi qu’il suit les conditions et modalités de cautionnement\n                                    personnel\n                                    et solidaire, en remboursement de la facilité accordée par la BANQUE.\n\n                                ")], 2)])])])]), _vm._v(" "), _vm._m(9), _vm._v(" "), _c("div", {
    staticClass: "block"
  }, [_c("div", {
    staticClass: "column"
  }, [_c("div", {
    staticClass: "article"
  }, [_vm._m(10), _vm._v(" "), _c("div", {
    staticClass: "sub-article"
  }, [_c("p", [_c("span", {
    staticClass: "highlight_"
  }, [_vm._v("1.1")]), _vm._v(" La Caution déclare se constituer caution solidaire, personnelle et\n                        indivisible de\n                        "), _c("span", {
    staticClass: "highlight_"
  }, [_vm._v(_vm._s(_vm.formData.civilite_client) + " " + _vm._s(_vm.formData.nom_client))]), _vm._v("\n                        titulaire du compte numéro\n                        "), [!_vm.edit_mode ? _c("span", [_c("b", [_vm._v(_vm._s(_vm.formData.num_compte_bancaire))])]) : _c("div", {
    staticStyle: {
      display: "flex",
      "align-items": "center"
    }
  }, [_c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formData.num_compte_bancaire,
      expression: "formData.num_compte_bancaire"
    }],
    staticClass: "form-control",
    attrs: {
      name: "num_compte_bancaire"
    },
    on: {
      change: [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.formData, "num_compte_bancaire", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }, _vm.updateDateOuvertureCompte]
    }
  }, _vm._l(_vm.comptesAFGBank, function (val, ind_) {
    return _c("option", {
      key: ind_,
      domProps: {
        value: val.numero_compte
      }
    }, [_vm._v("\n                                    " + _vm._s(val.libelle) + " - " + _vm._s(val.numero_compte) + "\n                                ")]);
  }), 0)])], _vm._v(",\n                        pour toutes les sommes que le Cautionné doit, peut ou pourra devoir à la Banque à raison de tous engagements,\n                        de toutes opérations et d’une façon générale, de toutes les obligations nées, sans aucune exception,\n                        directement ou indirectement à l’égard de la Banque pour quelque cause que ce soit.\n                        ")], 2), _vm._v(" "), _c("p", [_vm._v("\n                        C’est ainsi que le Cautionnement s’applique, sans que cette énumération soit limitative, à toutes les\n                        obligations\n                        résultantes notamment :\n                        ")]), _vm._v(" "), _vm._m(11)])])]), _vm._v(" "), _c("div", {
    staticClass: "column"
  }, [_c("div", {
    staticClass: "article"
  }, [_c("div", {
    staticClass: "article"
  }, [_c("div", {
    staticClass: "sub-article"
  }, [_vm._m(12), _vm._v(" "), _c("p", [_c("span", {
    staticClass: "highlight_"
  }, [_vm._v("1.2")]), _vm._v(" Les obligations de la Caution en exécution du présent cautionnement sont\n                            limitées\n                            au montant maximal de\n                            "), _vm._v(" "), !_vm.edit_mode ? _c("span", {
    staticClass: "highlight_"
  }, [_c("b", [_vm._v(_vm._s(_vm.formData["montant_maximum_garanti"]) + " " + _vm._s(_vm.formData.devise))])]) : _c("span", {
    staticStyle: {
      "background-color": "#ffffad",
      padding: "2px 5px",
      "border-radius": "5px"
    }
  }, [_vm._v(_vm._s(_vm.formData["montant_maximum_garanti"]) + " " + _vm._s(_vm.formData.devise))]), _vm._v("\n\n                            (\n                                "), !_vm.edit_mode ? _c("span", {
    staticClass: "highlight_"
  }, [_c("b", [_vm._v(_vm._s(_vm.convertirEnLettres(_vm.formData.montant_maximum_garanti)) + " " + _vm._s(_vm.formData.devise))])]) : _c("span", {
    staticStyle: {
      "background-color": "#ffffad",
      padding: "2px 5px",
      "border-radius": "5px"
    }
  }, [_vm._v(_vm._s(_vm.convertirEnLettres(_vm.formData.montant_maximum_garanti)) + " " + _vm._s(_vm.formData.devise))]), _vm._v("\n                            ),\n                            garantissant tant le principal des engagements de l’Emprunteur que tous intérêts, frais et accessoires\n                            venant en sus, étendus au solde éventuellement débiteur de son compte courant tel qu’il apparaîtrait à sa\n                            clôture.\n                        ")])])]), _vm._v(" "), _vm._m(13)])])]), _vm._v(" "), _vm._m(14), _vm._v(" "), _vm._m(15), _vm._v(" "), _c("div", {
    staticClass: "block"
  }, [_c("div", {
    staticClass: "column"
  }, [_c("div", {
    staticClass: "article"
  }, [_vm._m(16), _vm._v(" "), _c("p", [_vm._v("\n                        La Caution déclare que son patrimoine est constitué des éléments actifs et passifs ci-après :\n                        ")]), _vm._v(" "), !_vm.edit_mode ? [_vm.formData.avoirs_investissements.length > 0 ? [_c("ul", {
    staticClass: "list"
  }, _vm._l(_vm.formData.avoirs_investissements, function (avoir, index) {
    var _vm$formData;
    return _c("li", {
      key: index,
      staticStyle: {
        "padding-bottom": "0px !important"
      }
    }, [_c("span", [_vm._v(_vm._s(avoir === null || avoir === void 0 ? void 0 : avoir.label) + ": " + _vm._s(avoir === null || avoir === void 0 ? void 0 : avoir.value) + " " + _vm._s((_vm$formData = _vm.formData) === null || _vm$formData === void 0 ? void 0 : _vm$formData.devise))])]);
  }), 0)] : [_vm.edit_mode ? _c("span", [_vm._v("Aucun avoir ou investissement déclaré.")]) : _vm._e()]] : [_vm.formData.avoirs_investissements.length > 0 ? [_c("ul", {
    staticClass: "list"
  }, _vm._l(_vm.formData.avoirs_investissements, function (avoir, index) {
    var _vm$formData2;
    return _c("li", {
      key: index,
      staticStyle: {
        "padding-bottom": "0px !important",
        "background-color": "#ffffad"
      }
    }, [_c("span", [_vm._v(_vm._s(avoir === null || avoir === void 0 ? void 0 : avoir.label) + ": " + _vm._s(avoir === null || avoir === void 0 ? void 0 : avoir.value) + " " + _vm._s((_vm$formData2 = _vm.formData) === null || _vm$formData2 === void 0 ? void 0 : _vm$formData2.devise))])]);
  }), 0)] : [_vm.edit_mode ? _c("span", [_vm._v("Aucun avoir ou investissement déclaré.")]) : _vm._e()]], _vm._v(" "), _vm._m(17), _vm._v(" "), _c("p", [_vm._v("\n                        Tous les droits, frais fiscaux, timbres, impôts et autres frais, relatifs au présent cautionnement et de ses\n                        suites\n                        ou pouvant résulter de leur exécution, en ce compris les frais et commissions d’information de la caution sont à\n                        la\n                        charge du cautionné qui s’y oblige.\n                    ")]), _vm._v(" "), _vm._m(18), _vm._v(" "), _c("p", [_vm._v("\n                        Pour l’exécution des présentes et de leurs suites, les Parties font élection de domicile en leur siège social\n                        respectif ci-dessus indiqué.\n                    ")])], 2)]), _vm._v(" "), _c("div", {
    staticClass: "column"
  }, [_c("div", {
    staticClass: "article"
  }, [_vm._m(19), _vm._v(" "), _c("div", {
    staticClass: "sub-article"
  }, [_c("p", [_c("span", {
    staticClass: "highlight_"
  }, [_vm._v("11.1")]), _vm._v(" Le présent cautionnement est soumis aux dispositions des Actes Uniformes\n                        de\n                        l’OHADA et aux dispositions législatives et réglementaires en vigueur au\n                        "), _c("span", {
    staticClass: "highlight_"
  }, [_vm._v(_vm._s(_vm.formData.pays_legislatives))]), _vm._v(",\n                        non contraires à celles des Actes Uniformes de l’OHADA.\n                        ")]), _vm._v(" "), _c("p", [_c("span", {
    staticClass: "highlight_"
  }, [_vm._v("11.2")]), _vm._v(" Tous différends et litiges relatifs à l’interprétation du présent\n                        cautionnement, à son exécution, ses suites et ses conséquences, seront de la seule compétence des tribunaux du\n                        "), _c("span", {
    staticClass: "highlight_"
  }, [_vm._v(_vm._s(_vm.formData.pays_legislatives))]), _vm._v(".\n                        ")])])]), _vm._v(" "), _c("div", {
    staticStyle: {
      padding: "0px 0 0 20%",
      "margin-top": "20px"
    }
  }, [_c("div", [_vm._v("\n                        Fait à\n                        "), [_c("span", [_c("b", [_vm._v(_vm._s(_vm.formData["lieu_edition"]))])])], _vm._v(", le\n                        "), [_c("span", [_c("b", [_vm._v(_vm._s(_vm.formatDate(_vm.formData["date_edition"])))])])], _vm._v("\n                        En trois (03) exemplaires originaux\n                    ")], 2)])])]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_vm._m(20), _vm._v(" "), _c("div", {
    staticClass: "col-12 p-2 mt-5 position-relative"
  }, [_c("ol", {
    staticStyle: {
      margin: "0"
    }
  }, [_c("li", [_c("span", [_vm._v("\n                                    Faire précéder la signature de la mention manuscrite “\n                                ")]), _vm._v(" "), _c("b", [_c("i", [_vm._v("\n                                        Bon pour caution personnelle et solidaire des sommes dues et à devoir par\n                                        "), [!_vm.edit_mode ? _c("span", [_c("b", [_vm._v(_vm._s(_vm.formData["civilite_client"]))])]) : _c("span", {
    staticStyle: {
      "background-color": "#ffffad",
      padding: "2px 5px",
      "border-radius": "5px"
    }
  }, [_vm._v(_vm._s(_vm.formData["civilite_client"]))])], _vm._v(" "), [!_vm.edit_mode ? _c("span", [_c("b", [_vm._v(_vm._s(_vm.formData["nom_client"]))])]) : _c("span", {
    staticStyle: {
      "background-color": "#ffffad",
      padding: "2px 5px",
      "border-radius": "5px"
    }
  }, [_vm._v(_vm._s(_vm.formData["nom_client"]))])], _vm._v(" en principal,\n                                        (sous réserve des intérêts de retard, commissions, primes, pénalités, frais,\n                                        charges, taxes\n                                        et autres\n                                        accessoires), à hauteur du montant maximal garanti de\n\n                                        "), [!_vm.edit_mode ? _c("span", [_c("b", [_vm._v(_vm._s(_vm.formData["montant_maximum_garanti"]))])]) : _c("span", {
    staticStyle: {
      "background-color": "#ffffad",
      padding: "2px 5px",
      "border-radius": "5px"
    }
  }, [_vm._v(_vm._s(_vm.formData["montant_maximum_garanti"]))])], _vm._v(" "), [_c("span", [_c("b", [_vm._v(_vm._s(_vm.formData["devise"]))])])], _vm._v(" (\n                                        "), [!_vm.edit_mode ? _c("span", [_c("b", [_vm._v(_vm._s(_vm.convertirEnLettres(_vm.formData.montant_maximum_garanti).toUpperCase()))])]) : _c("span", {
    staticStyle: {
      "background-color": "#ffffad",
      padding: "2px 5px",
      "border-radius": "5px"
    }
  }, [_vm._v(_vm._s(_vm.convertirEnLettres(_vm.formData.montant_maximum_garanti).toUpperCase()))])], _vm._v(" "), [_c("span", [_c("b", [_vm._v(_vm._s(_vm.formData["devise"]))])])], _vm._v(") comme\n                                        indiqué ci-dessus\n                                    ")], 2)])])])])])])])]), _vm._v(" "), !_vm.edit_mode ? _c("div", {
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
      position: "relative",
      "font-size": "8px !important"
    },
    attrs: {
      id: "preloader-content"
    }
  })]) : _vm._e(), _vm._v(" "), !_vm.edit_mode ? _c("div", {
    ref: "contentToPdf",
    staticStyle: {
      "text-align": "justify",
      "font-size": "8px !important"
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
      "text-decoration": "underline",
      "font-size": "12px !important"
    }
  }, [_vm._v("\n                                    CONVENTION DE CAUTIONNEMENT SOLIDAIRE ET PERSONNEL\n                                ")])])])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("h6", [_c("b", {
    staticStyle: {
      "font-size": "12px"
    }
  }, [_vm._v("\n                                ENTRE LES SOUSSIGNEES\n                            ")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("span", [_c("b", [_vm._v("six mai deux mille vingt-quatre ")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("span", [_c("b", [_vm._v("RC/DLA/2024/M/1031 ")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("span", [_c("b", [_vm._v("Banque ou le bénéficiaire")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("span", [_c("b", [_vm._v("Caution")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "d-flex align-items-center justify-content-center"
  }, [_c("div", {
    staticClass: "text-center title_",
    staticStyle: {
      width: "max-content",
      "text-transform": "uppercase",
      "border-bottom": "3px solid",
      "border-top": "1px solid",
      "border-left": "1px solid",
      "border-right": "1px solid"
    }
  }, [_c("h5", {
    staticStyle: {
      margin: "0",
      "font-size": "10px  !important"
    }
  }, [_vm._v("\n                                PREAMBULE\n                            ")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "row"
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
      margin: "0",
      "font-size": "10px  !important"
    }
  }, [_vm._v("\n                                CECI EXPOSE, LES PARTIES SONT CONVENUES DE CE QUI SUIT :\n                            ")])])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("h6", [_c("b", {
    staticStyle: {
      "font-size": "10px  !important"
    }
  }, [_vm._v("ARTICLE 1 : "), _c("span", {
    staticStyle: {
      "text-decoration": "underline"
    }
  }, [_vm._v("CAUTIONNEMENT")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("ul", {
    staticClass: "list"
  }, [_c("li", [_vm._v("\n                            de tous crédits par caisse ou par signature, des soldes exigibles en faveur de la Banque de tous comptes\n                            courants\n                            ouverts au nom du Cautionné, des opérations de bourse traitées par lui, de tous chèques, billets ou effets\n                            comportant sa signature à quelque titre que ce soit et pour lesquels la Banque aura été dispensée ou non de\n                            tout\n                            protêt ou de tout avis de non-paiement, des négociations de lettres de change relevé, d’actes de cession de\n                            créances, de tous engagements d’aval, de caution ou de garantie de paiement fournis par le Cautionné ;\n                        ")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("ul", {
    staticClass: "list"
  }, [_c("li", [_vm._v("\n                            De tous engagements d’avals, de caution, de garantie ou de contre garantie ou encore de toutes\n                            acceptations données\n                            par la Banque pour le compte du Cautionné ou sur son ordre.\n                            ")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "article"
  }, [_c("h6", [_c("b", {
    staticStyle: {
      "font-size": "10px  !important"
    }
  }, [_vm._v("ARTICLE 2 : "), _c("span", [_vm._v("ETENDUE DU CAUTIONNEMENT")])])]), _vm._v(" "), _c("p", [_vm._v("\n                        Le présent engagement oblige la Caution, à titre solidaire et personnel, sur tous ses biens meubles et\n                        immeubles, à\n                        payer à la Banque ce que lui doit ou devra le Cautionné, dans la limite du Montant Maximal Garanti, au cas où\n                        le\n                        Cautionné ne pourrait faire face à ses obligations au titre des Obligations Garanties.\n                        ")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "block"
  }, [_c("div", {
    staticClass: "column"
  }, [_c("div", {
    staticClass: "article"
  }, [_c("h6", [_c("b", {
    staticStyle: {
      "font-size": "12px !important"
    }
  }, [_vm._v("ARTICLE 3 : "), _c("span", [_vm._v("ENGAGEMENTS DE LA CAUTION")])])]), _vm._v(" "), _c("div", {
    staticClass: "sub-article"
  }, [_c("p", [_c("span", {
    staticClass: "highlight_"
  }, [_vm._v("3.1")]), _vm._v(" La Caution renonce expressément aux bénéfices de discussion et de division\n                        tant\n                        avec le Cautionné qu’avec tous coobligés.\n                        ")]), _vm._v(" "), _c("p", [_c("span", {
    staticClass: "highlight_"
  }, [_vm._v("3.2")]), _vm._v(" La Caution renonce à se prévaloir :\n                        ")]), _vm._v(" "), _c("ul", {
    staticClass: "list"
  }, [_c("li", {
    staticStyle: {
      margin: "2px"
    }
  }, [_vm._v("\n                            Des dispositions de l’article 23 de l’acte uniforme de l’OHADA (NOUVEAU) portant organisation des sûretés\n                            qui,\n                            sans la décharger de ses engagements, l’autoriseraient à poursuivre la débitrice garantie pour la forcer au\n                            paiement au cas où des délais de paiement lui seraient accordés par la Banque ;\n                        ")])]), _vm._v(" "), _c("ul", {
    staticClass: "list"
  }, [_c("li", [_vm._v("\n                            De toutes subrogations, de toutes actions qui auraient pour résultat de la faire venir en concours avec la\n                            Banque\n                            à l’encontre de la débitrice garantie tant que la banque n’aura pas été désintéressée de la totalité des\n                            sommes en\n                            principal, intérêts, commissions, frais, indemnités et accessoires qui lui sont dues au titre des\n                            Obligations\n                            Garanties.\n                        ")])]), _vm._v(" "), _c("p", [_c("span", {
    staticClass: "highlight_"
  }, [_vm._v("3.3")]), _vm._v(" La Caution renonce expressément, dans l’hypothèse de la déclaration de\n                        l’exigibilité anticipée des Crédits conformément aux stipulations de la Convention de Crédit, à se prévaloir,\n                        à\n                        l’égard de la Banque, de l’inopposabilité de la déchéance du terme encourue par le Débiteur Garanti.\n                        ")])])]), _vm._v(" "), _c("div", {
    staticClass: "article"
  }, [_c("div", {
    staticClass: "sub-article"
  }, [_c("p", [_c("span", {
    staticClass: "highlight_"
  }, [_vm._v("3.4")]), _vm._v("\n                        La Caution s’engage, pour toute la durée du présent cautionnement :\n                        ")]), _vm._v(" "), _c("ul", {
    staticClass: "list"
  }, [_c("li", [_vm._v("\n                            À informer la Banque par écrit dès qu’elle aura connaissance de tout événement susceptible\n                        ")])])])])]), _vm._v(" "), _c("div", {
    staticClass: "column"
  }, [_c("div", {
    staticClass: "article"
  }, [_c("p", [_vm._v("\n                        d’entraîner une\n                        détérioration de sa situation financière ou de sa capacité à faire face à ses obligations au titre du présent\n                        cautionnement ;")]), _vm._v(" "), _c("ul", {
    staticClass: "list"
  }, [_c("li", [_vm._v("\n                        À ne pas céder ou transférer la propriété d’un de ses actifs si cette cession ou ce transfert devait avoir un\n                        effet négatif important sur sa situation financière ou sa capacité à faire face à ses obligations au titre du\n                        présent cautionnement.\n                        ")])]), _vm._v(" "), _c("div", {
    staticClass: "sub-article"
  }, [_c("p", [_c("span", {
    staticClass: "highlight_"
  }, [_vm._v("3.5")]), _vm._v(" La caution déclare que la banque a suffisamment attiré son attention sur :\n                        ")]), _vm._v(" "), _c("ul", {
    staticClass: "list"
  }, [_c("li", [_vm._v("La nature et l’étendue de son engagement ;")]), _vm._v(" "), _c("li", [_vm._v("\n                            La proportionnalité entre la valeur de ses biens et le montant du cautionnement, ce à quoi il atteste sur\n                            l’honneur disposé d’un patrimoine suffisant pour couvrir le montant cautionné.\n                        ")])])])]), _vm._v(" "), _c("div", {
    staticClass: "article"
  }, [_c("h6", [_c("b", {
    staticStyle: {
      "font-size": "12px !important"
    }
  }, [_vm._v("ARTICLE 4 : "), _c("span", [_vm._v("ENGAGEMENT DE LA BANQUE")])])]), _vm._v(" "), _c("div", {
    staticClass: "sub-article"
  }, [_c("p", [_c("span", {
    staticClass: "highlight_"
  }, [_vm._v("4.1")]), _vm._v(" La Banque est tenue d’informer la Caution de toute défaillance du\n                        Cautionné au\n                        titre des Obligations Garanties, ainsi que de la déchéance ou de la prorogation du terme en indiquant le\n                        montant\n                        restant dû par lui en principal, intérêts et frais au jour de la défaillance, déchéance ou prorogation du\n                        terme.\n                        ")])])]), _vm._v(" "), _c("div", {
    staticClass: "article"
  }, [_c("div", {
    staticClass: "sub-article"
  }, [_c("p", [_c("span", {
    staticClass: "highlight_"
  }, [_vm._v("4.2")]), _vm._v(" La Banque est tenue, dans le mois qui suit le terme de chaque semestre\n                        civil, de\n                        communiquer à la Caution l’état des dettes du Cautionné précisant leurs causes, leurs échéances et leurs\n                        montants en\n                        principal, intérêts, commissions,\n                        ")])])])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "block"
  }, [_c("div", {
    staticClass: "column"
  }, [_c("div", {
    staticClass: "article"
  }, [_c("div", {
    staticClass: "sub-article"
  }, [_c("p", [_vm._v("\n                        frais et accessoires restants dus à la fin de chaque semestre écoulé, en lui\n                        rappelant la faculté de révocation par reproduction littérale des stipulations du présent article et celles de\n                        l’article 19 de l’Acte Uniforme portant organisation des sûretés.\n                        ")]), _vm._v(" "), _c("p", [_c("span", {
    staticClass: "highlight_"
  }, [_vm._v("4.3")]), _vm._v(" Pour la bonne exécution de cet engagement, la caution s’oblige et s’engage\n                        à\n                        informer la Banque de tout changement d’adresse le concernant.\n                        ")])])]), _vm._v(" "), _c("div", {
    staticClass: "article"
  }, [_c("h6", [_c("b", {
    staticStyle: {
      "font-size": "12px !important"
    }
  }, [_vm._v("ARTICLE 5 : "), _c("span", [_vm._v("MISE EN JEU DU CAUTIONNEMENT")])])]), _vm._v(" "), _c("p", [_vm._v("\n                        En cas de non-paiement à son échéance, par le Cautionné, d’une quelconque somme due au titre des Obligations\n                        Garanties, la Caution sera tenue de payer à la Banque, dans la limite du Montant Maximal Garanti, le montant\n                        concerné, quinze (15) jours après une mise en demeure adressée au Cautionné restée sans effet. La Caution ne\n                        pourra\n                        pas se prévaloir des délais de paiement accordés conventionnellement ou judiciairement au Cautionné.\n                    ")])]), _vm._v(" "), _c("div", {
    staticClass: "article"
  }, [_c("h6", [_c("b", {
    staticStyle: {
      "font-size": "12px !important"
    }
  }, [_vm._v("ARTICLE 6 : "), _c("span", [_vm._v("DURÉE")])])]), _vm._v(" "), _c("div", {
    staticClass: "sub-article"
  }, [_c("p", [_c("span", {
    staticClass: "highlight_"
  }, [_vm._v("6.1")]), _vm._v(" Le présent cautionnement entre en vigueur à la date de sa signature et\n                        restera\n                        en vigueur tant que l’ensemble des Obligations Garanties n’aura pas été intégralement remboursé ou payé.\n                        ")]), _vm._v(" "), _c("p", [_c("span", {
    staticClass: "highlight_"
  }, [_vm._v("6.2")]), _vm._v(" La Caution peut décider à tout moment de révoquer son engagement par\n                        notification écrite à la Banque.\n                        ")])])])]), _vm._v(" "), _c("div", {
    staticClass: "column"
  }, [_c("div", {
    staticClass: "article"
  }, [_c("p", [_vm._v("\n                        La révocation prendra effet à l’expiration d’un délai de quatre-vingt-dix (90)\n                        jours à compter de la date de réception de la lettre de notification.\n                        La Caution restera tenue jusqu’au\n                        remboursement intégral et définitif à la Banque de tous les engagements du Cautionné nés antérieurement à la\n                        date\n                        de prise d’effet de cette révocation, y compris de ceux dont les échéances et l’exigibilité seront postérieurs à\n                        cette date.")]), _vm._v(" "), _c("h6", [_c("b", {
    staticStyle: {
      "font-size": "12px !important"
    }
  }, [_vm._v("ARTICLE 7 : "), _c("span", [_vm._v("DIVERS")])])]), _vm._v(" "), _c("div", {
    staticClass: "sub-article"
  }, [_c("p", [_c("span", {
    staticClass: "highlight_"
  }, [_vm._v("7.1")]), _vm._v(" Le présent cautionnement s’ajoute et s’ajoutera à toutes garanties réelles\n                        ou\n                        personnelles qui ont pu ou qui pourront être fournies au profit de la Banque par la Caution, par le Cautionné\n                        ou\n                        par tout tiers.\n                        ")]), _vm._v(" "), _c("p", [_c("span", {
    staticClass: "highlight_"
  }, [_vm._v("7.2")]), _vm._v(" Toutes les obligations résultant du présent cautionnement pour la Caution\n                        sont\n                        stipulées indivisibles, de telle sorte que leur exécution pourra être réclamée pour leur totalité à n’importe\n                        lequel des héritiers ou ayant-droit de la Caution.\n                        ")]), _vm._v(" "), _c("p", [_c("span", {
    staticClass: "highlight_"
  }, [_vm._v("7.3")]), _vm._v(" Toutes les notifications auxquelles le présent cautionnement pourra donner\n                        lieu\n                        seront faites par écrit et seront adressées par lettre recommandée avec accusé de réception, remises par\n                        porteur\n                        avec décharge, ou transmises par un service de courrier de réputation internationale, aux Parties, à leur\n                        adresse\n                        respective mentionnée en tête des présentes.\n                        ")])])])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("h6", [_c("b", {
    staticStyle: {
      "font-size": "12px !important"
    }
  }, [_vm._v("ARTICLE 8 : "), _c("span", [_vm._v("DÉCLARATION DE PATRIMOINE")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("h6", [_c("b", {
    staticStyle: {
      "font-size": "12px !important"
    }
  }, [_vm._v("ARTICLE 9 : "), _c("span", [_vm._v("IMPÔTS ET FRAIS")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("h6", [_c("b", {
    staticStyle: {
      "font-size": "12px !important"
    }
  }, [_vm._v("ARTICLE 10 : "), _c("span", [_vm._v("ÉLECTION DE DOMICILE")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("h6", [_c("b", {
    staticStyle: {
      "font-size": "12px !important"
    }
  }, [_vm._v("ARTICLE 11 : "), _c("span", [_vm._v("DROIT APPLICABLE – ATTRIBUTION DE COMPÉTENCE")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
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
  }, [_c("b", [_vm._v("\n                                        LA CAUTION (1)\n                                    ")])])]), _vm._v(" "), _c("div", [_c("h6", {
    staticStyle: {
      "text-decoration": "underline"
    }
  }, [_c("b", [_vm._v("\n                                        LA BANQUE\n                                    ")])])])])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/conventions/en/CAUTIONNEMENT_PERSONNEL_SOLIDAIRE_old.vue?vue&type=style&index=0&id=06fc7d9c&lang=css&scoped=true":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/conventions/en/CAUTIONNEMENT_PERSONNEL_SOLIDAIRE_old.vue?vue&type=style&index=0&id=06fc7d9c&lang=css&scoped=true ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\nfieldset[data-v-06fc7d9c] {\r\n    border: 1px solid #ddd !important;\r\n    position: relative;\r\n    padding-left: 10px !important;\r\n    width: 100%;\r\n    background-color: #f5f5f5;\r\n    margin-top: 15px;\r\n    min-width: -moz-max-content;\r\n    min-width: max-content\n}\nlegend[data-v-06fc7d9c] {\r\n    font-weight: bold;\r\n    padding: 4px;\r\n    width: -moz-max-content;\r\n    width: max-content;\r\n    padding: 0 15px;\r\n    font-size: 16px;\r\n    float: none;\r\n    background-color: #ffffff;\r\n    border: 1px solid #ddd;\r\n    border-radius: 4px;\n}\nfieldset[data-v-06fc7d9c] {\r\n    border: 1px solid #ddd !important;\r\n    position: relative;\r\n    padding-left: 10px !important;\r\n    width: 100%;\r\n    background-color: #f5f5f5;\r\n    margin-top: 15px;\n}\nlegend[data-v-06fc7d9c] {\r\n    font-weight: bold;\r\n    padding: 4px;\r\n    width: -moz-max-content;\r\n    width: max-content;\r\n    padding: 0 15px;\r\n    font-size: 16px;\r\n    float: none;\r\n    background-color: #ffffff;\r\n    border: 1px solid #ddd;\r\n    border-radius: 4px;\n}\n.box[data-v-06fc7d9c] {\r\n    border-color: #212529;\r\n    border-style: solid;\r\n    border-width: 1px;\r\n    padding: 5px;\n}\n.actd[data-v-06fc7d9c] {\r\n    border-color: #212529;\r\n    border-style: solid;\r\n    border-width: 1px;\r\n    padding: 5px;\n}\n.pre[data-v-06fc7d9c] {\r\n    font-size: 0.6rem\n}\n.form-control[data-v-06fc7d9c] {\r\n    display: initial;\r\n    width: initial;\n}\n.paragraph[data-v-06fc7d9c] {\r\n    margin: 20px 0px;\r\n    position: relative;\r\n    padding: 5px;\n}\ninput[data-v-06fc7d9c],\r\nselect[data-v-06fc7d9c] {\r\n    margin: 2px;\r\n    border-color: #34495e;\r\n    color: black;\r\n    font-size: 13px;\r\n    height: 34px;\r\n    font-weight: bold;\r\n    background-color: #ffffad;\r\n    margin-right: 0px;\r\n    min-width: 45px;\r\n    /* border-top-right-radius: 0;\r\n    border-bottom-right-radius: 0; */\r\n    /* border-right: none; */\n}\n.input-group-append[data-v-06fc7d9c] {\r\n    margin: 0 2px;\n}\n.input-group-text-right[data-v-06fc7d9c] {\r\n    border-radius: 0 .375rem .375rem 0;\r\n    margin-left: 0px;\r\n    cursor: pointer;\n}\n.input-group-text-left[data-v-06fc7d9c] {\r\n    border-radius: .375rem 0 0 .375rem;\n}\n.li-convention[data-v-06fc7d9c] {\r\n    list-style-type: disc;\r\n    margin: 0;\r\n    padding: 0;\r\n    margin-left: 20px;\n}\n.input-group-text[data-v-06fc7d9c] {\r\n    font-size: 13px;\r\n    line-height: 1.5;\r\n    height: 34px;\r\n    padding: .375rem .75rem;\r\n    border: 1px solid #34495e;\r\n    min-width: 45px;\r\n    text-align: center;\r\n    justify-content: center;\r\n    /*margin: 2px;*/\r\n    background-color: #ffffad;\r\n    color: black;\n}\r\n\r\n\r\n\r\n/* checkbox */\n.checkbox-container .checkbox-input[data-v-06fc7d9c] {\r\n    position: absolute;\r\n    opacity: 0;\r\n    cursor: pointer;\r\n    height: 80%;\r\n    width: 80%;\r\n    top: 0;\r\n    left: 0;\r\n    z-index: 1;\n}\n.checkbox-container[data-v-06fc7d9c] {\r\n    display: block;\r\n    position: relative;\r\n    cursor: pointer;\r\n    -webkit-user-select: none;\r\n       -moz-user-select: none;\r\n            user-select: none;\n}\n.checkbox-container .checkbox-icon-cancel[data-v-06fc7d9c] {\r\n    position: relative;\r\n    top: 0;\r\n    left: 0;\r\n    height: 50px;\r\n    width: 50px;\r\n    transition: all 0.3s;\r\n    font-size: 1.5em;\r\n    color: red;\n}\n.checkbox-container .checkbox-icon-success[data-v-06fc7d9c] {\r\n    position: relative;\r\n    top: 0;\r\n    left: 0;\r\n    height: 50px;\r\n    width: 50px;\r\n    transition: all 0.3s;\r\n    font-size: 1.5em;\r\n    color: green;\n}\r\n\r\n/*.checkbox-container .checkbox-icon-cancel:hover {\r\n    transform: scale(1.1);\r\n}\r\n\r\n.checkbox-container .checkbox-icon-success:hover {\r\n    transform: scale(1.1);\r\n}*/\n.checkbox-container .checkbox-icon-success[data-v-06fc7d9c] {\r\n    display: none;\n}\n.checkbox-container .checkbox-input:checked~.checkbox-icon-cancel[data-v-06fc7d9c] {\r\n    display: none;\n}\n.checkbox-container .checkbox-input:checked~.checkbox-icon-success[data-v-06fc7d9c] {\r\n    display: contents;\n}\n.valid-section[data-v-06fc7d9c] {\r\n    pointer-events: auto;\r\n    top: 50%;\r\n    transform: translateY(-50%);\r\n    width: -moz-fit-content;\r\n    width: fit-content\n}\n.st-valide[data-v-06fc7d9c] {\r\n    position: absolute;\r\n    z-index: 99;\r\n    right: -147px;\r\n    top: 15%;\n}\r\n\r\n/*this is the new approach*/\n.position-relative[data-v-06fc7d9c]:has(.valid-section:hover) {\r\n    background: #3498db6f;\n}\nul[data-v-06fc7d9c],\r\nli[data-v-06fc7d9c] {\r\n    list-style-type: inherit;\n}\n.custom-list[data-v-06fc7d9c] {\r\n    counter-reset: section;\r\n    list-style: none;\r\n    /* Supprime les puces par défaut */\r\n    padding-left: 0;\r\n    /* Enlève l'indentation */\n}\n.custom-list>li[data-v-06fc7d9c] {\r\n    counter-increment: section;\n}\n.custom-list>li[data-v-06fc7d9c]::before {\r\n    content: counter(section) \". \";\r\n    font-weight: bold;\n}\r\n\r\n/* Pour les sous-listes */\n.custom-list>li>ol[data-v-06fc7d9c] {\r\n    counter-reset: subsection;\r\n    list-style: none;\r\n    padding-left: 20px;\n}\n.custom-list>li>ol>li[data-v-06fc7d9c] {\r\n    counter-increment: subsection;\n}\n.custom-list>li>ol>li[data-v-06fc7d9c]::before {\r\n    content: counter(section) \".\" counter(subsection) \" \";\r\n    font-weight: normal;\n}\n.title_[data-v-06fc7d9c] {\r\n    padding: 8px 64px;\n}\n.block[data-v-06fc7d9c] {\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n  gap: 10px;\r\n  margin-bottom: 5px;\r\n  align-items: stretch;\n}\n.column[data-v-06fc7d9c] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 10px;\r\n  padding: 5px;\n}\n.article[data-v-06fc7d9c] {\r\n  text-align: justify;\r\n  margin-top: 5px;\n}\n.article p[data-v-06fc7d9c] {\r\n  margin: 5px 0;\n}\n.list[data-v-06fc7d9c] {\r\n  margin-left: 20px;\r\n  list-style-type: disc;\n}\n.list li[data-v-06fc7d9c] {\r\n  margin-bottom: 5px;\r\n  text-align: justify;\n}\n.highlight_[data-v-06fc7d9c] {\r\n  font-weight: bold;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/conventions/en/CAUTIONNEMENT_PERSONNEL_SOLIDAIRE_old.vue?vue&type=style&index=0&id=06fc7d9c&lang=css&scoped=true":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/conventions/en/CAUTIONNEMENT_PERSONNEL_SOLIDAIRE_old.vue?vue&type=style&index=0&id=06fc7d9c&lang=css&scoped=true ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CAUTIONNEMENT_PERSONNEL_SOLIDAIRE_old_vue_vue_type_style_index_0_id_06fc7d9c_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CAUTIONNEMENT_PERSONNEL_SOLIDAIRE_old.vue?vue&type=style&index=0&id=06fc7d9c&lang=css&scoped=true */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/conventions/en/CAUTIONNEMENT_PERSONNEL_SOLIDAIRE_old.vue?vue&type=style&index=0&id=06fc7d9c&lang=css&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CAUTIONNEMENT_PERSONNEL_SOLIDAIRE_old_vue_vue_type_style_index_0_id_06fc7d9c_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CAUTIONNEMENT_PERSONNEL_SOLIDAIRE_old_vue_vue_type_style_index_0_id_06fc7d9c_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/offview/bank/afg/memo/conventions/en/CAUTIONNEMENT_PERSONNEL_SOLIDAIRE_old.vue":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/components/offview/bank/afg/memo/conventions/en/CAUTIONNEMENT_PERSONNEL_SOLIDAIRE_old.vue ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CAUTIONNEMENT_PERSONNEL_SOLIDAIRE_old_vue_vue_type_template_id_06fc7d9c_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CAUTIONNEMENT_PERSONNEL_SOLIDAIRE_old.vue?vue&type=template&id=06fc7d9c&scoped=true */ "./resources/js/components/offview/bank/afg/memo/conventions/en/CAUTIONNEMENT_PERSONNEL_SOLIDAIRE_old.vue?vue&type=template&id=06fc7d9c&scoped=true");
/* harmony import */ var _CAUTIONNEMENT_PERSONNEL_SOLIDAIRE_old_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CAUTIONNEMENT_PERSONNEL_SOLIDAIRE_old.vue?vue&type=script&lang=js */ "./resources/js/components/offview/bank/afg/memo/conventions/en/CAUTIONNEMENT_PERSONNEL_SOLIDAIRE_old.vue?vue&type=script&lang=js");
/* harmony import */ var _CAUTIONNEMENT_PERSONNEL_SOLIDAIRE_old_vue_vue_type_style_index_0_id_06fc7d9c_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CAUTIONNEMENT_PERSONNEL_SOLIDAIRE_old.vue?vue&type=style&index=0&id=06fc7d9c&lang=css&scoped=true */ "./resources/js/components/offview/bank/afg/memo/conventions/en/CAUTIONNEMENT_PERSONNEL_SOLIDAIRE_old.vue?vue&type=style&index=0&id=06fc7d9c&lang=css&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _CAUTIONNEMENT_PERSONNEL_SOLIDAIRE_old_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _CAUTIONNEMENT_PERSONNEL_SOLIDAIRE_old_vue_vue_type_template_id_06fc7d9c_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _CAUTIONNEMENT_PERSONNEL_SOLIDAIRE_old_vue_vue_type_template_id_06fc7d9c_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "06fc7d9c",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/offview/bank/afg/memo/conventions/en/CAUTIONNEMENT_PERSONNEL_SOLIDAIRE_old.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/offview/bank/afg/memo/conventions/en/CAUTIONNEMENT_PERSONNEL_SOLIDAIRE_old.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************!*\
  !*** ./resources/js/components/offview/bank/afg/memo/conventions/en/CAUTIONNEMENT_PERSONNEL_SOLIDAIRE_old.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CAUTIONNEMENT_PERSONNEL_SOLIDAIRE_old_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CAUTIONNEMENT_PERSONNEL_SOLIDAIRE_old.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/conventions/en/CAUTIONNEMENT_PERSONNEL_SOLIDAIRE_old.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CAUTIONNEMENT_PERSONNEL_SOLIDAIRE_old_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/offview/bank/afg/memo/conventions/en/CAUTIONNEMENT_PERSONNEL_SOLIDAIRE_old.vue?vue&type=style&index=0&id=06fc7d9c&lang=css&scoped=true":
/*!************************************************************************************************************************************************************************!*\
  !*** ./resources/js/components/offview/bank/afg/memo/conventions/en/CAUTIONNEMENT_PERSONNEL_SOLIDAIRE_old.vue?vue&type=style&index=0&id=06fc7d9c&lang=css&scoped=true ***!
  \************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CAUTIONNEMENT_PERSONNEL_SOLIDAIRE_old_vue_vue_type_style_index_0_id_06fc7d9c_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CAUTIONNEMENT_PERSONNEL_SOLIDAIRE_old.vue?vue&type=style&index=0&id=06fc7d9c&lang=css&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/conventions/en/CAUTIONNEMENT_PERSONNEL_SOLIDAIRE_old.vue?vue&type=style&index=0&id=06fc7d9c&lang=css&scoped=true");


/***/ }),

/***/ "./resources/js/components/offview/bank/afg/memo/conventions/en/CAUTIONNEMENT_PERSONNEL_SOLIDAIRE_old.vue?vue&type=template&id=06fc7d9c&scoped=true":
/*!**********************************************************************************************************************************************************!*\
  !*** ./resources/js/components/offview/bank/afg/memo/conventions/en/CAUTIONNEMENT_PERSONNEL_SOLIDAIRE_old.vue?vue&type=template&id=06fc7d9c&scoped=true ***!
  \**********************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CAUTIONNEMENT_PERSONNEL_SOLIDAIRE_old_vue_vue_type_template_id_06fc7d9c_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CAUTIONNEMENT_PERSONNEL_SOLIDAIRE_old_vue_vue_type_template_id_06fc7d9c_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CAUTIONNEMENT_PERSONNEL_SOLIDAIRE_old_vue_vue_type_template_id_06fc7d9c_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CAUTIONNEMENT_PERSONNEL_SOLIDAIRE_old.vue?vue&type=template&id=06fc7d9c&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/conventions/en/CAUTIONNEMENT_PERSONNEL_SOLIDAIRE_old.vue?vue&type=template&id=06fc7d9c&scoped=true");


/***/ })

}]);