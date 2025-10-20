(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_offview_bank_afg_memo_conventions_fr_FICHE_DE_SUIVI_DU_CLIENT_PARTICU-0f040a"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/conventions/fr/FICHE_DE_SUIVI_DU_CLIENT_PARTICULIER.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/conventions/fr/FICHE_DE_SUIVI_DU_CLIENT_PARTICULIER.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
var _excluded = ["type", "code"];
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
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
  name: 'ConventionPret',
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
    annexe: {
      type: Object,
      "default": function _default() {
        return {};
      }
    },
    authcheckUsr: {
      type: Object
    }
  },
  components: {
    PlusIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_6__.PlusIcon,
    TrashIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_6__.TrashIcon
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
      var_1: {
        // nom_prenom: null,
        // date_naissance: null,
        // adresse: null,
        // num_tel: null,
        // telephone_bureau: null,
        date_ouverture_compte: null,
        num_compte: null
      },
      var_2: {
        // autorisation_cmt: null,
        // duree_cmt: null,
        // taux_cmt: null,
        // encours_cmt: null,
        // echeance_cmt: null,

        // autorisation_cresco: null,
        // duree_cresco: null,
        // taux_cresco: null,
        // encours_cresco: null,
        // echeance_cresco: null,

        // autorisation_decouvert: null,
        // duree_decouvert: null,
        // taux_decouvert: null,
        // encours_decouvert: null,
        // echeance_decouvert: null,

        // autorisation_autre: null,
        // duree_autre: null,
        // taux_autre: null,
        // encours_autre: null,
        // echeance_autre: null,

        // commentaire_historique_relation: null
      },
      var_3: {
        // revenu_mensuel: null,
        // employeur: null,
        secteur_activite: null
        // fonction: null,
        // nature_du_contrat: null,
        // date_embauche: null,
        // date_expiration_contrat: null,
        // nombre_annee_experience: null,
        // anciennete_employeur: null,
        // avoir_investissement: null,
        // autre_compte_bancaire: null
      },
      var_4: {
        // compte_courant: null,
        // compte_epargne: null,
        // type_carte: null,
        // b2w: null,
        // e_banque: null,
        // sms_banking: null
      },
      var_5: {
        date_deniere_rencontre: null,
        motif_deniere_rencontre: null,
        lieu_rencontre: null,
        resume_echange: null
      },
      var_6: {
        // note_observation: null,
      },
      formData: {
        table: 'cred_pub_tb_15505',
        nom_prenom: '',
        date_naissance: '',
        adresse: '',
        num_tel: '',
        telephone_bureau: null,
        email_client: '',
        date_ouverture_compte: '',
        // autorisation_cmt: '',

        duree_cmt: '',
        taux_cmt: '',
        encours_cmt: '',
        echeance_cmt: '',
        autorisation_cresco: '',
        duree_cresco: '',
        taux_cresco: '',
        encours_cresco: '',
        echeance_cresco: '',
        // autorisation_decouvert: '',
        // duree_decouvert: '',
        // taux_decouvert: '',
        // encours_decouvert: '',
        // echeance_decouvert: '',
        // autorisation_autre: '',
        // duree_autre: '',
        // taux_autre: '',
        // encours_autre: '',
        // echeance_autre: '',
        commentaire_historique_relation: '',
        revenu_mensuel: '',
        employeur: '',
        secteur_activite: '',
        fonction: '',
        nature_du_contrat: '',
        date_embauche: '',
        date_expiration_contrat: '',
        // nombre_annee_experience: '',
        // anciennete_employeur: '',
        autre_compte_bancaire: '',
        // compte_courant: '',
        // compte_epargne: '',
        // type_carte: '',
        // b2w: '',
        // e_banque: '',
        // sms_banking: '',

        date_deniere_rencontre: '',
        motif_deniere_rencontre: '',
        lieu_rencontre: '',
        resume_echange: '',
        note_observation: '',
        note_observation_gestionnaire: '',
        key: "fiche_de_suivi_client_particulier",
        indexSelectionne: this.indexSelectionne,
        telephones: [],
        annexe_id: (_this$annexe = this.annexe) === null || _this$annexe === void 0 ? void 0 : _this$annexe.id,
        avoirs_investissements: []
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
      comptes: [],
      facilites_existantes: [],
      revenus: [],
      bref_produit_eventuellement_souscrits: [],
      comptes_chez_confrere: [],
      avoirs_investissements: [],
      // authcheckUsr: null,
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
      tb120001: null,
      tb120002: null,
      tb120003: null,
      tb120004: null
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
        return compte.banque === 'AFG BANK';
      });
    },
    getIndicatif: function getIndicatif() {
      var _this$authcheckUsr;
      var current_filiale = (_this$authcheckUsr = this.authcheckUsr) === null || _this$authcheckUsr === void 0 ? void 0 : _this$authcheckUsr.filiale.replace(" ", "_");
      var list_indicatif = {
        "AFG_CIV": "+225",
        "AFG_BF": "+226",
        "AFG_CG": "+242",
        "AFG_GN": "+224",
        "AFG_ML": "+223",
        "FINL": "+225",
        "AFG_SN": "+221",
        "AFG_TG": "+228",
        "AFG_GB": "+241"
      };
      return list_indicatif[current_filiale] || "";
    }
  },
  created: function created() {
    var _this = this;
    // Définir les gestionnaires d'événements pour mettre à jour les données les plus récentes
    EventBus.$on('dossier-updated-dcpp-1', function (data) {
      _this.tb120001 = (data === null || data === void 0 ? void 0 : data.data_tb2) || {};
      // Mettre à jour les données personnelles immédiatement si nécessaire
      if (_this.tb120001) {
        _this.updatePersonalData();
      }
    });
    EventBus.$on('dossier-updated-dcpp-2', function (data) {
      _this.tb120002 = (data === null || data === void 0 ? void 0 : data.data_tb2) || {};
      // Mettre à jour les données d'emploi immédiatement si nécessaire
      if (_this.tb120002) {
        _this.updateEmploymentData();
      }
    });
    EventBus.$on('dossier-updated-dcpp-3', function (data) {
      _this.tb120003 = (data === null || data === void 0 ? void 0 : data.data_tb3) || {};
      // Mettre à jour les données des comptes immédiatement si nécessaire
      if (_this.tb120003) {
        _this.updateAccountData();
      }
    });
    EventBus.$on('dossier-updated-dcpp-4', function (data) {
      _this.tb120004 = (data === null || data === void 0 ? void 0 : data.data_tb4) || {};
      // Mettre à jour les facilités existantes immédiatement si nécessaire
      if (_this.tb120004) {
        _this.updateFacilitiesData();
      }
    });
  },
  mounted: function mounted() {
    var _this2 = this;
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            // await this.userSession();

            _this2.loadRetrieved();
            _this2.$on('generate-pdf-process', function (data) {
              _this2.pdf_process = data;
            });
            _this2.$on('build-off-printable', function () {
              _this2.buildOffPrintable();
            });
            if (_this2.authenticatedUser.filiale == 'AFGB ML') {
              _this2.siege_filiale = "Immeuble M1, rue 286, Hamdallaye ACI 2 000 BP 72, Bamako, MalI";
              _this2.numero_filiale = "(+223) 44 98 07 00";
              _this2.mail_filiale = "assistance@afgbank.ml";
              _this2.banque = "AFG BANK MALI";
              _this2.abreviation = _this2.authenticatedUser.filiale;
              _this2.capital_social = "10 000 060 000";
              _this2.siege = "Immeuble M1, rue 286, Hamdallaye ACI 2 000 BP 72, Bamako, MalI";
              _this2.boite_postale = "BP 72";
              _this2.immatriculation = "Mali";
              _this2.devise = "XOF";
              _this2.lieu_immatriculation = "MA BKO 2007 B 1183";
              _this2.date_immatriculation = "01/01/1999";
              // console.log("this.formData", this.formData.banque);
            } else if (_this2.authenticatedUser.filiale == 'AFGB CM') {
              _this2.siege_filiale = "1112 Boulevard de la Liberté - Akwa Douala, Cameroun";
              _this2.numero_filiale = "(+237) 233 50 99 00";
              _this2.mail_filiale = "customer.care@afgbank.cm";
              _this2.banque = "AFG BANK CAMEROUN";
              _this2.abreviation = _this2.authenticatedUser.filiale;
              _this2.capital_social = "28 853 520 000";
              _this2.siege = "1112 Boulevard de la Liberté - Akwa Douala, Cameroun";
              _this2.boite_postale = "P.O. Box: 2933 Douala, Cameroun";
              _this2.immatriculation = "Cameroun";
              _this2.devise = "XAF";
              _this2.lieu_immatriculation = "RC/DLA/2008/B/1195";
              _this2.date_immatriculation = "19/09/2008";
            }
          case 4:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }))();
  },
  methods: {
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
      this.$nextTick(function () {
        var input = document.querySelector("input[placeholder=\"T\xE9l\xE9phone\"]:nth-child(".concat(index + 1, ")"));
        if (input) {
          input.focus();
          input.blur(); // Simuler une interaction pour forcer l'application du masque
        }
      });
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
    handleInput: function handleInput() {
      this.formData.telephones = this.telephones;
      this.formData.check_fields = this.check_fields;
    },
    onCheckField: function onCheckField(check, field) {
      // console.log('onCheckField', check, field);

      if ([, 'var_1', 'var_3', 'var_5', 'var_6'].includes(field)) {
        for (var _i3 = 0, _Object$entries3 = Object.entries(this[field]); _i3 < _Object$entries3.length; _i3++) {
          var _Object$entries3$_i = _slicedToArray(_Object$entries3[_i3], 1),
            key = _Object$entries3$_i[0];
          console.log("key", key);
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

      if (['var_1', 'var_3', 'var_5', 'var_6'].includes(field)) {
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
      var _this$meta_data$dossi, _dossierCredit$this$f, _dossierCredit$this$f2, _dossierCredit$caf_re;
      var lentb = this.meta_data["dossier_credit"]["tbs_in_use"];
      var dossierCredit = (_this$meta_data$dossi = this.meta_data["dossier_credit"]) !== null && _this$meta_data$dossi !== void 0 ? _this$meta_data$dossi : {};
      var ficheKey = "fiche_de_suivi_client_particulier";
      var fiche = (_dossierCredit$this$f = dossierCredit[this.formData.table]) === null || _dossierCredit$this$f === void 0 || (_dossierCredit$this$f = _dossierCredit$this$f[ficheKey]) === null || _dossierCredit$this$f === void 0 ? void 0 : _dossierCredit$this$f[this.indexSelectionne];
      // Section: Données spécifiques à la fiche sélectionnée
      if (lentb.length > 0) {
        if (fiche != undefined) {
          this.formData = fiche;
          // this.formData.date_deniere_rencontre = fiche.date_deniere_rencontre;
          // this.formData.motif_deniere_rencontre = fiche.motif_deniere_rencontre;
          // this.formData.lieu_rencontre = fiche.lieu_rencontre;
          // this.formData.resume_echange = fiche.resume_echange;
          // this.formData.note_observation = fiche.note_observation;
          // this.formData.note_observation_gestionnaire = fiche.note_observation_gestionnaire;

          this.check_fields = fiche.check_fields || {};
          this.telephones = fiche.telephones || [];
        }
      }

      // Initialiser tb12000X uniquement si les événements n'ont pas encore mis à jour les données
      if (this.tb120001 === null) {
        this.tb120001 = dossierCredit["cred_pub_tb_120001"] || {};
        this.updatePersonalData();
      }
      if (this.tb120002 === null) {
        this.tb120002 = dossierCredit["cred_pub_tb_120002"] || {};
        this.updateEmploymentData();
      }
      if (this.tb120003 === null) {
        this.tb120003 = dossierCredit["cred_pub_tb_120003"] || {};
        this.updateAccountData();
      }
      if (this.tb120004 === null) {
        this.tb120004 = dossierCredit["cred_pub_tb_120004"] || {};
        this.updateFacilitiesData();
      }

      // Section: Fiche ou initialisation des champs de contrôle
      if (!((_dossierCredit$this$f2 = dossierCredit[this.formData.table]) !== null && _dossierCredit$this$f2 !== void 0 && _dossierCredit$this$f2[ficheKey])) {
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
    },
    truncateString: function truncateString(str, maxLength) {
      if (!str) return '';
      return str.length > maxLength ? str.substring(0, maxLength - 3) + '...' : str;
    },
    send2Backend: function send2Backend(newVal) {
      var _this$dossier_credit,
        _this4 = this;
      this.on_saving = true;
      this.$emit("autosaving");
      this.$axios.post(this.ebapisHost + "creditbuilder/api/v1/redaction-fiche-annexe/", {
        cred_pub_key: (_this$dossier_credit = this.dossier_credit) === null || _this$dossier_credit === void 0 ? void 0 : _this$dossier_credit.cred_pub_key,
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
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var _this5$annexe;
        var conventionName, filename, pages, pdf, pageWidth, pageHeight, i, page, canvas, imgWidth, imgHeight, imgData, pdfBlob;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _this5.pdf_process = true;
              conventionName = (_this5$annexe = _this5.annexe) === null || _this5$annexe === void 0 ? void 0 : _this5$annexe.type_facilite.trim().replace(/\s+/g, "_").toLowerCase();
              filename = "Fiche de suivi de client particulier/ ".concat(conventionName) + ".pdf";
              pages = document.querySelectorAll(".print-page");
              if (pages.length) {
                _context2.next = 8;
                break;
              }
              console.error("❌ Aucun élément `.print-page` trouvé.");
              _this5.pdf_process = false;
              return _context2.abrupt("return");
            case 8:
              pdf = new jspdf__WEBPACK_IMPORTED_MODULE_5__.jsPDF("p", "mm", "a4");
              pageWidth = pdf.internal.pageSize.width;
              pageHeight = pdf.internal.pageSize.height;
              _context2.prev = 11;
              i = 0;
            case 13:
              if (!(i < pages.length)) {
                _context2.next = 28;
                break;
              }
              page = pages[i];
              page.style.paddingLeft = "40px";
              page.style.paddingRight = "40px";
              _context2.next = 19;
              return _html2canvas__WEBPACK_IMPORTED_MODULE_4___default()(page, {
                scale: 2,
                useCORS: true,
                logging: false
              });
            case 19:
              canvas = _context2.sent;
              imgWidth = pageWidth;
              imgHeight = pageHeight;
              imgData = canvas.toDataURL("image/jpeg", 0.7);
              if (i > 0) pdf.addPage();
              pdf.addImage(imgData, "JPEG", 0, 0, imgWidth, imgHeight);
            case 25:
              i++;
              _context2.next = 13;
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
              _context2.next = 36;
              break;
            case 33:
              _context2.prev = 33;
              _context2.t0 = _context2["catch"](11);
              console.error("Erreur lors de la génération du PDF :", _context2.t0);
            case 36:
              _context2.prev = 36;
              _this5.pdf_process = false; // Désactiver l'indicateur, même en cas d'erreur
              return _context2.finish(36);
            case 39:
            case "end":
              return _context2.stop();
          }
        }, _callee2, null, [[11, 33, 36, 39]]);
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
          name: "Fiche {(*)}suivi_client_" + index + "_" + _this6.$route.params.templateId,
          is_auto: true
        });
      }, 1000);
    },
    buildOffPrintable: function buildOffPrintable() {
      var _arguments = arguments,
        _this7 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var _this7$authcheckUsr;
        var retryCount, targetElement, preloader_content, elements, printableContainer, PAGE_WIDTH, PAGE_HEIGHT, MARGIN, PADDING, FOOTER_HEIGHT, QR_HEIGHT, AVAILABLE_HEIGHT, currentPage, currentHeight, pageCounter, createPage, createFooter, _applyStyleToFirstP, paginationDiv, qrCode;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              retryCount = _arguments.length > 0 && _arguments[0] !== undefined ? _arguments[0] : 0;
              _this7.build_off = false;
              targetElement = _this7.$refs.contentToCapture;
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
              return _context3.abrupt("return", _this7.buildOffPrintable(retryCount + 1));
            case 10:
              return _context3.abrupt("return");
            case 11:
              if ((_this7$authcheckUsr = _this7.authcheckUsr) !== null && _this7$authcheckUsr !== void 0 && _this7$authcheckUsr.logo) {
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
              return _context3.abrupt("return", _this7.buildOffPrintable(retryCount + 1));
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
              return _context3.stop();
          }
        }, _callee3);
      }))();
    },
    generateQRCode: function generateQRCode() {
      var _this$dossier_credit2, _this$dossier_credit3, _this$authenticatedUs, _this$authenticatedUs2, _this$authenticatedUs3, _this$dossier_credit4;
      var size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 100;
      var MIX_APP_KEY = "base64:gdjlPSs3+sKaDi+/SNwOI9pjIE/c9dlYM78gSikIAjY=";
      var secretKey = MIX_APP_KEY.replace("base64:", "");

      // construction de data
      var payload = {
        num_doss: (_this$dossier_credit2 = this.dossier_credit) === null || _this$dossier_credit2 === void 0 ? void 0 : _this$dossier_credit2.numero_dossier,
        cred_pub_key: (_this$dossier_credit3 = this.dossier_credit) === null || _this$dossier_credit3 === void 0 ? void 0 : _this$dossier_credit3.cred_pub_key,
        user: {
          name: (_this$authenticatedUs = this.authenticatedUser) === null || _this$authenticatedUs === void 0 ? void 0 : _this$authenticatedUs.name,
          role: (_this$authenticatedUs2 = this.authenticatedUser) === null || _this$authenticatedUs2 === void 0 ? void 0 : _this$authenticatedUs2.role[0].display_name,
          email: (_this$authenticatedUs3 = this.authenticatedUser) === null || _this$authenticatedUs3 === void 0 ? void 0 : _this$authenticatedUs3.email
        },
        client: (_this$dossier_credit4 = this.dossier_credit) === null || _this$dossier_credit4 === void 0 || (_this$dossier_credit4 = _this$dossier_credit4.client_core_banking) === null || _this$dossier_credit4 === void 0 ? void 0 : _this$dossier_credit4.name
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
          case 'mensuelle':
            monthlyAmount = revenu.mensualite;
            break;
          case 'bimensuelle':
            monthlyAmount = revenu.mensualite * 2;
            break;
          case 'trimestrielle':
            monthlyAmount = revenu.mensualite / 3;
            break;
          case 'annuelle':
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
      if (!this.formData.date_embauche) return 'Non défini';
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
      var result = '';
      if (years > 0) result += "".concat(years, " an").concat(years > 1 ? 's' : '');
      if (months > 0) result += "".concat(years > 0 ? ' ' : '').concat(months, " mois");
      return result || 'Moins d\'un mois';
    },
    filterValidFacilites: function filterValidFacilites() {
      if (!Array.isArray(this.facilites_existantes)) {
        this.facilites_existantes = [];
        return;
      }
      this.facilites_existantes = this.facilites_existantes.filter(function (facilite) {
        var typeFacilite = facilite === null || facilite === void 0 ? void 0 : facilite.type_facilite;
        var facilite_libelle = facilite === null || facilite === void 0 ? void 0 : facilite.facilite_libelle;
        return !["", null, undefined].includes(typeFacilite) || !["", null, undefined].includes(facilite_libelle);
      });
    },
    updateDateOuvertureCompte: function updateDateOuvertureCompte() {
      var _this8 = this;
      var selectedCompte = this.comptes.find(function (compte) {
        return compte.numero_compte === _this8.formData.num_compte;
      });
      if (selectedCompte) {
        this.formData.date_ouverture_compte = selectedCompte.account_open_date || '';
      } else {
        this.formData.date_ouverture_compte = '';
      }
      this.handleInput();
    },
    addAvoirInvestissement: function addAvoirInvestissement() {
      this.avoirs_investissements.push({
        description: ''
      });
      var index = this.avoirs_investissements.length - 1;
      var field = 'avoir_' + index;
      this.$set(this.check_fields, field, null);
      this.var_3[field] = null;
      this.handleInput();
    },
    removeAvoirInvestissement: function removeAvoirInvestissement(index) {
      var _this9 = this;
      this.avoirs_investissements.splice(index, 1);
      // Supprimer le champ de validation correspondant
      var field = 'avoir_' + index;
      this.$delete(this.check_fields, field);
      this.$delete(this.check_fields_emprunteur, field);
      // Réindexer les champs de validation pour les avoirs restants
      this.avoirs_investissements.forEach(function (_, i) {
        var oldField = 'avoir_' + (i + 1);
        var newField = 'avoir_' + i;
        if (_this9.check_fields[oldField]) {
          _this9.$set(_this9.check_fields, newField, _this9.check_fields[oldField]);
          _this9.$delete(_this9.check_fields, oldField);
        }
      });
      this.handleInput();
    },
    formatNumber: function formatNumber(number) {
      return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    },
    updatePersonalData: function updatePersonalData() {
      if (this.tb120001) {
        var _this$tb = this.tb120001,
          nom = _this$tb.nom,
          prenoms = _this$tb.prenoms,
          telephone = _this$tb.telephone,
          telephone_bureau = _this$tb.telephone_bureau,
          date_naissance = _this$tb.date_naissance,
          adresse = _this$tb.adresse,
          revenu_domicilie = _this$tb.revenu_domicilie,
          bref_produit_eventuellement_souscrits = _this$tb.bref_produit_eventuellement_souscrits,
          agence = _this$tb.agence,
          avoirs_investissements = _this$tb.avoirs_investissements,
          email_client = _this$tb.email_client;
        this.formData.nom_prenom = "".concat(nom, " ").concat(prenoms);
        this.formData.num_tel = telephone;
        this.formData.email_client = email_client;
        if (![null, undefined, '', 'undefined', 'null'].includes(telephone_bureau)) {
          this.formData.telephone_bureau = telephone_bureau;
        }
        this.formData.date_naissance = date_naissance;
        this.formData.adresse = adresse;
        this.formData.agence = agence;
        this.revenus = revenu_domicilie || [];
        this.bref_produit_eventuellement_souscrits = bref_produit_eventuellement_souscrits || [];

        // Traitement indicatif du téléphone bureau
        if (![null, undefined, '', 'undefined', 'null'].includes(telephone_bureau) && this.getIndicatif) {
          var parts = telephone_bureau.split(' ');
          this.formData.telephone_bureau = this.getIndicatif + ' ' + (parts.length > 1 ? parts[1] : telephone_bureau);
        }
        if (Array.isArray(avoirs_investissements) && avoirs_investissements.length > 0) {
          var check = avoirs_investissements.some(function (el) {
            return !['', null, undefined].includes(el.value);
          });
          if (check) {
            this.avoirs_investissements = avoirs_investissements.filter(function (el) {
              return ![0].includes(el.value) && !['', null, undefined].includes(el.label);
            });
          } else {
            this.avoirs_investissements = [];
          }
        } else {
          this.avoirs_investissements = [];
        }
      }
    },
    // Méthode pour mettre à jour les données d'emploi
    updateEmploymentData: function updateEmploymentData() {
      if (this.tb120002) {
        var _this$tb2 = this.tb120002,
          entreprise = _this$tb2.entreprise,
          fonction = _this$tb2.fonction,
          type_contrat = _this$tb2.type_contrat,
          secteur_activite = _this$tb2.secteur_activite,
          date_debut_cdd_interim = _this$tb2.date_debut_cdd_interim,
          data_expiration_cdd_interim = _this$tb2.data_expiration_cdd_interim,
          annee_act_emploi = _this$tb2.annee_act_emploi;
        this.formData.employeur = entreprise;
        this.formData.fonction = fonction;
        this.formData.type_contrat = type_contrat;
        this.formData.secteur_activite = secteur_activite;
        if (type_contrat === "CDD") {
          this.formData.date_embauche = date_debut_cdd_interim;
          this.formData.date_expiration_contrat = data_expiration_cdd_interim;
        } else {
          this.formData.date_embauche = annee_act_emploi;
        }
      }
    },
    // Méthode pour mettre à jour les données des comptes
    updateAccountData: function updateAccountData() {
      if (this.tb120003) {
        var _this$comptes;
        var _this$tb3 = this.tb120003,
          _this$tb3$comptes = _this$tb3.comptes,
          comptes = _this$tb3$comptes === void 0 ? [] : _this$tb3$comptes,
          _this$tb3$comptes_che = _this$tb3.comptes_chez_confrere,
          comptes_chez_confrere = _this$tb3$comptes_che === void 0 ? [] : _this$tb3$comptes_che;
        this.comptes = comptes.length ? comptes.map(function (_ref) {
          var type = _ref.type,
            code = _ref.code,
            rest = _objectWithoutProperties(_ref, _excluded);
          return _objectSpread(_objectSpread({}, rest), {}, {
            original_lib: rest.libelle,
            libelle: type,
            numero_compte: code,
            type: type,
            code: code
          });
        }) : [];
        var hasCompteCourant = (_this$comptes = this.comptes) === null || _this$comptes === void 0 ? void 0 : _this$comptes.some(function (cpte) {
          return cpte.libelle === 'Compte courant';
        });
        if (hasCompteCourant) {
          var _this$comptes$find$nu, _this$comptes2;
          this.formData.num_compte = (_this$comptes$find$nu = (_this$comptes2 = this.comptes) === null || _this$comptes2 === void 0 || (_this$comptes2 = _this$comptes2.find(function (cpte) {
            return cpte.libelle === 'Compte courant';
          })) === null || _this$comptes2 === void 0 ? void 0 : _this$comptes2.numero_compte) !== null && _this$comptes$find$nu !== void 0 ? _this$comptes$find$nu : '';
          this.updateDateOuvertureCompte();
        }
        this.comptes_chez_confrere = comptes_chez_confrere.filter(function (cpte) {
          return cpte.libelle !== null && ![0, null, undefined].includes(cpte.montant);
        });
      }
    },
    // Méthode pour mettre à jour les facilités existantes
    updateFacilitiesData: function updateFacilitiesData() {
      if (this.tb120004) {
        var _this$tb4;
        this.facilites_existantes = ((_this$tb4 = this.tb120004) === null || _this$tb4 === void 0 ? void 0 : _this$tb4.facilites_existante) || [];
        this.filterValidFacilites();
      }
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/conventions/fr/FICHE_DE_SUIVI_DU_CLIENT_PARTICULIER.vue?vue&type=template&id=6df6b1b6&scoped=true":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/conventions/fr/FICHE_DE_SUIVI_DU_CLIENT_PARTICULIER.vue?vue&type=template&id=6df6b1b6&scoped=true ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", [_c("div", [_c("div", {
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
  }), _vm._v("\n                        Visualiser\n                    ")]) : _c("button", {
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
  }), _vm._v("\n                        Modifier\n                    ")]), _vm._v(" "), !_vm.pdf_process ? [!_vm.edit_mode ? _c("button", {
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
  }), _vm._v("\n                            Importer dans le dossier\n                        ")]) : _vm._e(), _vm._v(" "), !_vm.edit_mode ? _c("button", {
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
  }), _vm._v("\n                            Télécharger le fichier\n                        ")]) : _vm._e()] : _c("div", {
    staticStyle: {
      display: "inline-block"
    }
  }, [_vm._m(0), _vm._v(" "), _c("span", {
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
  }, [_vm._m(1), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12 mt-4"
  }, [_c("ul", {
    staticClass: "mb-3 position-relative",
    staticStyle: {
      "list-style-type": "none"
    }
  }, [_c("li", [_c("div", {
    staticClass: "id"
  }, [_c("div", {
    staticStyle: {
      display: "flex",
      "justify-content": "space-between",
      "margin-bottom": "10px"
    }
  }, [_c("div", [_c("span", {
    staticStyle: {
      "font-weight": "bold"
    }
  }, [_vm._v("AGENCE :")]), _vm._v(" "), [_c("span", [_vm._v("\n                                                    " + _vm._s(_vm.formData["agence"]) + "\n                                                ")])]], 2), _vm._v(" "), _c("div", [_c("span", {
    staticStyle: {
      "font-weight": "bold"
    }
  }, [_vm._v("NUMERO DE COMPTE :")]), _vm._v(" "), [_c("div", {
    staticStyle: {
      display: "inline-block"
    }
  }, [!_vm.edit_mode ? _c("span", [_vm._v(_vm._s(_vm.formData.num_compte))]) : _c("div", {
    staticStyle: {
      display: "flex",
      "align-items": "center"
    }
  }, [_c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formData.num_compte,
      expression: "formData.num_compte"
    }],
    staticClass: "form-control",
    attrs: {
      name: "num_compte"
    },
    on: {
      change: [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.formData, "num_compte", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }, _vm.updateDateOuvertureCompte]
    }
  }, [_c("option", {
    attrs: {
      value: ""
    }
  }, [_vm._v("Sélectionner un numéro de compte")]), _vm._v(" "), _vm._l(_vm.comptesAFGBank, function (val, ind_) {
    return _c("option", {
      key: ind_,
      domProps: {
        value: val.numero_compte
      }
    }, [_vm._v("\n                                                                " + _vm._s(val.original_lib) + " - " + _vm._s(val.numero_compte) + "\n                                                            ")]);
  })], 2)])])]], 2)])])])])])]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12 mt-4"
  }, [_c("ul", {
    staticClass: "mb-3 position-relative",
    staticStyle: {
      "list-style-type": "none",
      border: "1px solid"
    }
  }, [_vm.edit_mode ? _c("div", {
    staticClass: "valid-section st-valide mt-5 d-none",
    staticStyle: {
      cursor: "pointer"
    }
  }, [!_vm.checkField("var_1") ? _c("span", {
    staticStyle: {
      "font-size": "9px",
      "font-weight": "bold",
      color: "red"
    },
    on: {
      click: function click($event) {
        return _vm.onCheckField(true, "var_1");
      }
    }
  }, [_c("i", {
    staticClass: "icofont-close-circled"
  }), _vm._v(" Valider la section\n                                ")]) : _c("span", {
    staticStyle: {
      "font-size": "9px",
      "font-weight": "bold",
      color: "green"
    },
    on: {
      click: function click($event) {
        return _vm.onCheckField(false, "var_1");
      }
    }
  }, [_c("i", {
    staticClass: "icofont-check-circled"
  }), _vm._v(" Valider la section\n                                ")])]) : _vm._e(), _vm._v(" "), _c("li", [_c("div", {
    staticClass: "renseignements"
  }, [_c("div", {
    staticStyle: {
      "text-align": "center",
      "font-weight": "bold",
      margin: "15px 0"
    }
  }, [_vm._v("\n                                        I - RENSEIGNEMENTS GENERAUX\n                                    ")]), _vm._v(" "), _c("div", {
    staticStyle: {
      padding: "10px"
    }
  }, [_c("div", {
    staticStyle: {
      margin: "8px 0"
    }
  }, [_c("span", {
    staticStyle: {
      "font-weight": "bold"
    }
  }, [_vm._v("Noms et prénoms :")]), _vm._v(" "), [!_vm.edit_mode ? _c("span", [_vm._v("\n                                                    " + _vm._s(_vm.formData["nom_prenom"]) + "\n                                                ")]) : _c("span", {
    staticStyle: {
      "background-color": "#ffffad",
      padding: "2px 5px",
      "border-radius": "5px"
    }
  }, [_vm._v("\n                                                    " + _vm._s(_vm.formData["nom_prenom"]) + "\n                                                ")])]], 2), _vm._v(" "), _c("div", {
    staticStyle: {
      margin: "8px 0"
    }
  }, [_c("span", {
    staticStyle: {
      "font-weight": "bold"
    }
  }, [_vm._v("Date de naissance :")]), _vm._v(" "), [!_vm.edit_mode ? _c("span", [_vm._v("\n                                                " + _vm._s(_vm._f("formatDate")(_vm.formData["date_naissance"])) + "\n                                            ")]) : _c("span", {
    staticStyle: {
      "background-color": "#ffffad",
      padding: "2px 5px",
      "border-radius": "5px"
    }
  }, [_vm._v("\n                                                " + _vm._s(_vm._f("formatDate")(_vm.formData["date_naissance"])) + "\n                                            ")])]], 2), _vm._v(" "), _c("div", {
    staticStyle: {
      margin: "8px 0"
    }
  }, [_c("span", {
    staticStyle: {
      "font-weight": "bold"
    }
  }, [_vm._v("Adresse :")]), _vm._v(" "), [!_vm.edit_mode ? _c("span", [_vm._v("\n                                                    " + _vm._s(_vm.formData["adresse"]) + "\n                                                ")]) : _c("span", {
    staticStyle: {
      "background-color": "#ffffad",
      padding: "2px 5px",
      "border-radius": "5px"
    }
  }, [_vm._v("\n                                                    " + _vm._s(_vm.formData["adresse"]) + "\n                                                ")])]], 2), _vm._v(" "), _c("div", {
    staticStyle: {
      margin: "8px 0"
    }
  }, [_c("span", {
    staticStyle: {
      "font-weight": "bold"
    }
  }, [_vm._v("Numéro de téléphone :")]), _vm._v(" "), [_vm.isNumeroComplet(_vm.formData.num_tel) ? _c("span", [!_vm.edit_mode ? _c("span", [_vm._v("\n                                                        " + _vm._s(_vm.formData["num_tel"]) + "\n                                                    ")]) : _c("span", {
    staticStyle: {
      "background-color": "#ffffad",
      padding: "2px 5px",
      "border-radius": "5px"
    }
  }, [_vm._v("\n                                                        " + _vm._s(_vm.formData["num_tel"]) + "\n                                                    ")])]) : _vm._e(), _vm._v(" "), _vm.isNumeroComplet(_vm.formData.num_tel) && _vm.isNumeroComplet(_vm.formData.telephone_bureau) ? _c("span", [_vm._v("\n                                                    /\n                                                ")]) : _vm._e(), _vm._v(" "), _vm.isNumeroComplet(_vm.formData.telephone_bureau) ? _c("span", [!_vm.edit_mode ? _c("span", [_vm._v("\n                                                        " + _vm._s(_vm.formData["telephone_bureau"]) + "\n                                                    ")]) : _c("span", {
    staticStyle: {
      "background-color": "#ffffad",
      padding: "2px 5px",
      "border-radius": "5px"
    }
  }, [_vm._v("\n                                                        " + _vm._s(_vm.formData["telephone_bureau"]) + "\n                                                    ")])]) : _vm._e()]], 2), _vm._v(" "), _c("div", {
    staticStyle: {
      margin: "8px 0"
    }
  }, [_c("span", {
    staticStyle: {
      "font-weight": "bold"
    }
  }, [_vm._v("Adresse email :")]), _vm._v(" "), !["", null, undefined].includes(_vm.formData.email_client) ? [!_vm.edit_mode ? _c("span", [_vm._v("\n                                                    " + _vm._s(_vm.formData["email_client"]) + "\n                                                ")]) : _c("span", {
    staticStyle: {
      "background-color": "#ffffad",
      padding: "2px 5px",
      "border-radius": "5px"
    }
  }, [_vm._v("\n                                                    " + _vm._s(_vm.formData["email_client"]) + "\n                                                ")])] : _vm._e()], 2), _vm._v(" "), _c("div", {
    staticStyle: {
      margin: "8px 0"
    }
  }, [_c("span", {
    staticStyle: {
      "font-weight": "bold"
    }
  }, [_vm._v("Date d’ouverture de compte :")]), _vm._v(" "), [!_vm.edit_mode ? _c("span", [_vm._v("\n                                                    " + _vm._s(_vm.formData["date_ouverture_compte"]) + "\n                                                ")]) : _c("div", {
    staticStyle: {
      display: "inline-block",
      "background-color": "#ffffad",
      padding: "2px 5px",
      "border-radius": "5px"
    }
  }, [_c("span", [_vm._v(" " + _vm._s(_vm.formData["date_ouverture_compte"]) + " ")])])]], 2)])])])])])]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12 mt-4"
  }, [_c("ul", {
    staticClass: "mb-3 position-relative",
    staticStyle: {
      "list-style-type": "none",
      border: "1px solid"
    }
  }, [_c("li", [_c("div", {
    staticClass: "historique table-responsive p-2"
  }, [_c("div", {
    staticStyle: {
      "text-align": "center",
      "font-weight": "bold",
      margin: "15px 0"
    }
  }, [_vm._v("\n                                        II - HISTORIQUE DE LA RELATION & UTILISATION DES LIGNES\n                                    ")]), _vm._v(" "), _c("table", {
    staticClass: "table table-bordered",
    staticStyle: {
      "border-collapse": "collapse",
      width: "100%",
      "margin-bottom": "20px"
    }
  }, [_vm._m(2), _vm._v(" "), _c("tbody", _vm._l(_vm.facilites_existantes, function (facilites_existante, indexF) {
    var _facilites_existante$, _vm$facilite, _facilites_existante$2, _vm$facilite2;
    return _c("tr", {
      key: "fac" + indexF
    }, [_c("td", {
      staticClass: "vertical-middle text-center",
      staticStyle: {
        border: "1px solid black",
        padding: "8px"
      }
    }, [!_vm.edit_mode ? _c("span", [_vm._v("\n                                                        " + _vm._s((_facilites_existante$ = facilites_existante === null || facilites_existante === void 0 ? void 0 : facilites_existante.facilite_libelle) !== null && _facilites_existante$ !== void 0 ? _facilites_existante$ : (_vm$facilite = _vm.facilite) === null || _vm$facilite === void 0 ? void 0 : _vm$facilite.type_facilite) + "\n                                                    ")]) : _c("span", {
      staticStyle: {
        "background-color": "#ffffad",
        padding: "2px 5px",
        "border-radius": "5px"
      }
    }, [_vm._v("\n                                                        " + _vm._s((_facilites_existante$2 = facilites_existante === null || facilites_existante === void 0 ? void 0 : facilites_existante.facilite_libelle) !== null && _facilites_existante$2 !== void 0 ? _facilites_existante$2 : (_vm$facilite2 = _vm.facilite) === null || _vm$facilite2 === void 0 ? void 0 : _vm$facilite2.type_facilite) + "\n                                                    ")])]), _vm._v(" "), _c("td", {
      staticClass: "vertical-middle text-center",
      staticStyle: {
        border: "1px solid black",
        padding: "8px"
      }
    }, [!_vm.edit_mode ? _c("span", [_vm._v("\n                                                        " + _vm._s(_vm.formatNumber(facilites_existante.montant_credit)) + "\n                                                        \n                                                    ")]) : _c("span", {
      staticStyle: {
        "background-color": "#ffffad",
        padding: "2px 5px",
        "border-radius": "5px"
      }
    }, [_vm._v("\n                                                        " + _vm._s(_vm.formatNumber(facilites_existante.montant_credit)) + "\n                                                    ")])]), _vm._v(" "), _c("td", {
      staticClass: "vertical-middle text-center",
      staticStyle: {
        border: "1px solid black",
        padding: "8px"
      }
    }, [!_vm.edit_mode ? _c("span", [_vm._v("\n                                                        " + _vm._s(facilites_existante.duree) + "\n                                                    ")]) : _c("span", {
      staticStyle: {
        "background-color": "#ffffad",
        padding: "2px 5px",
        "border-radius": "5px"
      }
    }, [_vm._v("\n                                                        " + _vm._s(facilites_existante.duree) + "\n                                                    ")])]), _vm._v(" "), _c("td", {
      staticClass: "vertical-middle text-center",
      staticStyle: {
        border: "1px solid black",
        padding: "8px"
      }
    }, [!_vm.edit_mode ? _c("span", [_vm._v("\n                                                        " + _vm._s(facilites_existante.taux) + "\n                                                    ")]) : _c("span", {
      staticStyle: {
        "background-color": "#ffffad",
        padding: "2px 5px",
        "border-radius": "5px"
      }
    }, [_vm._v("\n                                                        " + _vm._s(facilites_existante.taux) + "\n                                                    ")])]), _vm._v(" "), _c("td", {
      staticClass: "vertical-middle text-center",
      staticStyle: {
        border: "1px solid black",
        padding: "8px"
      }
    }, [!_vm.edit_mode ? _c("span", [_vm._v("\n                                                        " + _vm._s(_vm.formatNumber(facilites_existante.encours)) + "\n                                                    ")]) : _c("span", {
      staticStyle: {
        "background-color": "#ffffad",
        padding: "2px 5px",
        "border-radius": "5px"
      }
    }, [_vm._v("\n                                                        " + _vm._s(_vm.formatNumber(facilites_existante.encours)) + "\n                                                    ")])]), _vm._v(" "), _c("td", {
      staticClass: "vertical-middle text-center",
      staticStyle: {
        border: "1px solid black",
        padding: "8px"
      }
    }, [!_vm.edit_mode ? _c("span", [_vm._v("\n                                                        " + _vm._s(_vm.formatNumber(facilites_existante.montant_echeance)) + "\n                                                    ")]) : _c("span", {
      staticStyle: {
        "background-color": "#ffffad",
        padding: "2px 5px",
        "border-radius": "5px"
      }
    }, [_vm._v("\n                                                        " + _vm._s(_vm.formatNumber(facilites_existante.montant_echeance)) + "\n                                                    ")])])]);
  }), 0)]), _vm._v(" "), _c("div", {
    staticStyle: {
      border: "1px solid black",
      padding: "10px"
    }
  }, [_c("span", {
    staticStyle: {
      "font-weight": "bold"
    }
  }, [_vm._v("Commentaire")]), _c("br"), _c("br"), _vm._v(" "), [_c("div", [!_vm.edit_mode ? _c("p", {
    staticClass: "vhtml",
    domProps: {
      innerHTML: _vm._s(_vm.formData.commentaire_historique_relation)
    }
  }) : _c("div", {}, [_c("vue-editor", {
    attrs: {
      id: "commentaire_historique_relation"
    },
    on: {
      "update-value": function updateValue($event) {
        _vm.formData[$event[0]] = $event[1];
      }
    },
    model: {
      value: _vm.formData.commentaire_historique_relation,
      callback: function callback($$v) {
        _vm.$set(_vm.formData, "commentaire_historique_relation", $$v);
      },
      expression: "formData.commentaire_historique_relation\n                                                            "
    }
  })], 1)])]], 2)])])])])]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12 mt-4"
  }, [_c("ul", {
    staticClass: "mb-3 position-relative",
    staticStyle: {
      "list-style-type": "none",
      border: "1px solid"
    }
  }, [_vm.edit_mode ? _c("div", {
    staticClass: "valid-section st-valide mt-5 d-none",
    staticStyle: {
      cursor: "pointer"
    }
  }, [!_vm.checkField("var_3") ? _c("span", {
    staticStyle: {
      "font-size": "9px",
      "font-weight": "bold",
      color: "red"
    },
    on: {
      click: function click($event) {
        return _vm.onCheckField(true, "var_3");
      }
    }
  }, [_c("i", {
    staticClass: "icofont-close-circled"
  }), _vm._v(" Valider la section\n                                ")]) : _c("span", {
    staticStyle: {
      "font-size": "9px",
      "font-weight": "bold",
      color: "green"
    },
    on: {
      click: function click($event) {
        return _vm.onCheckField(false, "var_3");
      }
    }
  }, [_c("i", {
    staticClass: "icofont-check-circled"
  }), _vm._v(" Valider la section\n                                ")])]) : _vm._e(), _vm._v(" "), _c("li", [_c("div", {
    staticClass: "profil"
  }, [_c("div", {
    staticStyle: {
      "text-align": "center",
      "font-weight": "bold",
      margin: "15px 0"
    }
  }, [_vm._v("\n                                        III - PROFIL FINANCIER\n                                    ")]), _vm._v(" "), _c("div", {
    staticStyle: {
      padding: "10px"
    }
  }, [_c("div", {
    staticStyle: {
      margin: "8px 0"
    }
  }, [_c("span", {
    staticStyle: {
      "font-weight": "bold"
    }
  }, [_vm._v("Revenu mensuel :")]), _vm._v(" "), [!_vm.edit_mode ? _c("span", [_vm._v("\n                                                    " + _vm._s(_vm.formatNumber(_vm.calculateTotalMonthlyRevenue())) + "\n                                                ")]) : _c("span", {
    staticStyle: {
      "background-color": "#ffffad",
      padding: "2px 5px",
      "border-radius": "5px"
    }
  }, [_vm._v("\n                                                    " + _vm._s(_vm.formatNumber(_vm.calculateTotalMonthlyRevenue())) + "\n                                                ")])]], 2), _vm._v(" "), _c("div", {
    staticStyle: {
      margin: "8px 0"
    }
  }, [_c("span", {
    staticStyle: {
      "font-weight": "bold"
    }
  }, [_vm._v("Employeur :")]), _vm._v(" "), [!_vm.edit_mode ? _c("span", [_vm._v("\n                                                    " + _vm._s(_vm.formData.employeur) + "\n                                                ")]) : _c("span", {
    staticStyle: {
      "background-color": "#ffffad",
      padding: "2px 5px",
      "border-radius": "5px"
    }
  }, [_vm._v("\n                                                    " + _vm._s(_vm.formData.employeur) + "\n                                                ")])]], 2), _vm._v(" "), _c("div", {
    staticStyle: {
      margin: "8px 0"
    }
  }, [_c("span", {
    staticStyle: {
      "font-weight": "bold"
    }
  }, [_vm._v("Secteur d’activité :")]), _vm._v(" "), [!_vm.edit_mode ? _c("span", [_vm._v("\n                                                    " + _vm._s(_vm.truncateString(_vm.formData["secteur_activite"], 30)) + "\n                                                ")]) : _c("span", {
    staticStyle: {
      "background-color": "#ffffad",
      padding: "2px 5px",
      "border-radius": "5px"
    }
  }, [_vm._v("\n                                                    " + _vm._s(_vm.truncateString(_vm.formData["secteur_activite"], 30)) + "\n                                                ")])]], 2), _vm._v(" "), _c("div", {
    staticStyle: {
      margin: "8px 0"
    }
  }, [_c("span", {
    staticStyle: {
      "font-weight": "bold"
    }
  }, [_vm._v("Fonction :")]), _vm._v(" "), [!_vm.edit_mode ? _c("span", [_vm._v("\n                                                    " + _vm._s(_vm.formData["fonction"]) + "\n                                                ")]) : _c("span", {
    staticStyle: {
      "background-color": "#ffffad",
      padding: "2px 5px",
      "border-radius": "5px"
    }
  }, [_vm._v("\n                                                    " + _vm._s(_vm.formData["fonction"]) + "\n                                                ")])]], 2), _vm._v(" "), _c("div", {
    staticStyle: {
      margin: "8px 0"
    }
  }, [_c("span", {
    staticStyle: {
      "font-weight": "bold"
    }
  }, [_vm._v("Type de contrat :")]), _vm._v(" "), !_vm.edit_mode ? _c("span", [_vm._v("\n                                                " + _vm._s(_vm.formData["type_contrat"]) + "\n                                            ")]) : _c("span", {
    staticStyle: {
      "background-color": "#ffffad",
      padding: "2px 5px",
      "border-radius": "5px"
    }
  }, [_vm._v("\n                                                " + _vm._s(_vm.formData["type_contrat"]) + "\n                                            ")])]), _vm._v(" "), _c("div", {
    staticStyle: {
      margin: "8px 0"
    }
  }, [_c("span", {
    staticStyle: {
      "font-weight": "bold"
    }
  }, [_vm._v("Date d’embauche :")]), _vm._v(" "), [!_vm.edit_mode ? _c("span", [_vm._v("\n                                                    " + _vm._s(_vm._f("formatDate")(_vm.formData["date_embauche"])) + "\n                                                ")]) : _c("span", {
    staticStyle: {
      "background-color": "#ffffad",
      padding: "2px 5px",
      "border-radius": "5px"
    }
  }, [_vm._v("\n                                                    " + _vm._s(_vm._f("formatDate")(_vm.formData["date_embauche"])) + "\n                                                ")])]], 2), _vm._v(" "), this.formData.type_contrat == "CDD" ? _c("div", {
    staticStyle: {
      margin: "8px 0"
    }
  }, [_c("span", {
    staticStyle: {
      "font-weight": "bold"
    }
  }, [_vm._v("Date d’expiration du contrat (CDD uniquement) :")]), _vm._v(" "), !_vm.edit_mode ? _c("span", [_vm._v("\n                                                " + _vm._s(_vm._f("formatDate")(_vm.formData["date_expiration_contrat"])) + "\n                                            ")]) : _c("span", {
    staticStyle: {
      "background-color": "#ffffad",
      padding: "2px 5px",
      "border-radius": "5px"
    }
  }, [_vm._v("\n                                                " + _vm._s(_vm._f("formatDate")(_vm.formData["date_expiration_contrat"])) + "\n                                            ")])]) : _vm._e(), _vm._v(" "), _vm._m(3), _vm._v(" "), _c("div", {
    staticStyle: {
      margin: "8px 0"
    }
  }, [!_vm.edit_mode ? _c("span", [_vm._v("\n                                                " + _vm._s(_vm.calculateEmploymentDuration()) + "\n                                            ")]) : _c("span", {
    staticStyle: {
      "background-color": "#ffffad",
      padding: "2px 5px",
      "border-radius": "5px"
    }
  }, [_vm._v("\n                                                " + _vm._s(_vm.calculateEmploymentDuration()) + "\n                                            ")])]), _vm._v(" "), _vm.avoirs_investissements.length > 0 ? _c("div", {
    staticStyle: {
      margin: "8px 0"
    }
  }, [_c("span", {
    staticStyle: {
      "font-weight": "bold"
    }
  }, [_vm._v("Avoirs ou investissements (immobilier,\n                                                titres, BDC, etc) \n                                                :")]), _vm._v(" "), [_c("div", [_c("ul", {
    staticStyle: {
      "list-style-type": "disc",
      "margin-left": "20px"
    }
  }, _vm._l(_vm.avoirs_investissements, function (avoir, index) {
    return _c("li", {
      key: "avoir_" + index
    }, [!_vm.edit_mode ? _c("span", [_vm._v("\n                                                            " + _vm._s(avoir.label) + " : " + _vm._s(avoir.value) + "\n                                                        ")]) : _c("span", {
      staticStyle: {
        "background-color": "#ffffad",
        padding: "2px 5px",
        "border-radius": "5px"
      }
    }, [_vm._v("\n                                                            " + _vm._s(avoir.label) + " : " + _vm._s(avoir.value) + "\n                                                        ")])]);
  }), 0)])]], 2) : _vm._e(), _vm._v(" "), _vm.comptes_chez_confrere.length > 0 ? _c("div", {
    staticStyle: {
      margin: "8px 0"
    }
  }, [_c("span", {
    staticStyle: {
      "font-weight": "bold"
    }
  }, [_vm._v("Autres comptes bancaires :")]), _vm._v(" "), [_c("ul", {
    staticStyle: {
      "list-style-type": "disc",
      "margin-left": "20px"
    }
  }, _vm._l(_vm.comptes_chez_confrere, function (compte, index) {
    return _c("li", {
      key: "compte_" + index
    }, [!_vm.edit_mode ? _c("span", [_vm._v("\n                                                            " + _vm._s(compte.banque) + " - " + _vm._s(compte.libelle) + " (" + _vm._s(compte.numero_compte) + ")\n                                                        ")]) : _c("span", {
      staticStyle: {
        "background-color": "#ffffad",
        padding: "2px 5px",
        "border-radius": "5px"
      }
    }, [_vm._v("\n                                                            " + _vm._s(compte.banque) + " - " + _vm._s(compte.libelle) + " (" + _vm._s(compte.numero_compte) + ")\n                                                        ")])]);
  }), 0)]], 2) : _vm._e()])])])])])]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12 mt-4"
  }, [_c("ul", {
    staticClass: "mb-3 position-relative",
    staticStyle: {
      "list-style-type": "none",
      border: "1px solid"
    }
  }, [_c("li", [_c("div", {
    staticClass: "produit_service",
    staticStyle: {
      padding: "2px"
    }
  }, [_c("div", {
    staticStyle: {
      "text-align": "center",
      "font-weight": "bold",
      margin: "15px 0"
    }
  }, [_vm._v("\n                                        IV - PRODUITS ET SERVICES SOUSCRITS\n                                    ")]), _vm._v(" "), _c("div", [_c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-bordered full-width-table"
  }, [_vm._m(4), _vm._v(" "), _c("tbody", _vm._l(_vm.bref_produit_eventuellement_souscrits_checked, function (el, ind_) {
    return _c("tr", {
      key: ind_
    }, [_c("td", [_c("div", {
      staticClass: "d-flex align-items-center",
      staticStyle: {
        width: "max-content"
      }
    }, [_vm._v("\n                                                            • "), _c("label", {
      staticStyle: {
        "margin-left": "10px"
      }
    }, [!_vm.edit_mode ? _c("span", [_vm._v("\n                                                                    " + _vm._s(el.libelle) + "\n                                                                ")]) : _c("span", {
      staticStyle: {
        "background-color": "#ffffad",
        padding: "2px 5px",
        "border-radius": "5px"
      }
    }, [_vm._v("\n                                                                    " + _vm._s(el.libelle) + "\n                                                                ")])])])]), _vm._v(" "), _c("td", [_c("label", {
      staticStyle: {
        "margin-left": "10px"
      }
    }, [_c("span", [_vm._v("\n                                                                " + _vm._s(el.commentaire) + "\n                                                            ")])])])]);
  }), 0)])])])])])])])]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12 mt-4"
  }, [_c("ul", {
    staticClass: "mb-3 position-relative",
    staticStyle: {
      "list-style-type": "none",
      border: "1px solid"
    }
  }, [_vm.edit_mode ? _c("div", {
    staticClass: "valid-section st-valide mt-5 d-none",
    staticStyle: {
      cursor: "pointer"
    }
  }, [!_vm.checkField("var_5") ? _c("span", {
    staticStyle: {
      "font-size": "9px",
      "font-weight": "bold",
      color: "red"
    },
    on: {
      click: function click($event) {
        return _vm.onCheckField(true, "var_5");
      }
    }
  }, [_c("i", {
    staticClass: "icofont-close-circled"
  }), _vm._v(" Valider la section\n                                ")]) : _c("span", {
    staticStyle: {
      "font-size": "9px",
      "font-weight": "bold",
      color: "green"
    },
    on: {
      click: function click($event) {
        return _vm.onCheckField(false, "var_5");
      }
    }
  }, [_c("i", {
    staticClass: "icofont-check-circled"
  }), _vm._v(" Valider la section\n                                ")])]) : _vm._e(), _vm._v(" "), _c("li", [_c("div", {
    staticClass: "produit_service"
  }, [_c("div", {
    staticStyle: {
      "text-align": "center",
      "font-weight": "bold",
      margin: "15px 0"
    }
  }, [_vm._v("\n                                        V - HISTORIQUE DES INTERACTIONS\n                                    ")]), _vm._v(" "), _c("div", {
    staticStyle: {
      padding: "10px"
    }
  }, [_c("div", {
    staticStyle: {
      margin: "8px 0"
    }
  }, [_c("span", {
    staticStyle: {
      "font-weight": "bold"
    }
  }, [_vm._v("Date de la dernière rencontre :")]), _vm._v(" "), [!_vm.edit_mode ? _c("span", [_vm._v("\n                                                    " + _vm._s(_vm._f("formatDate")(_vm.formData["date_deniere_rencontre"])) + "\n                                                ")]) : _c("div", {
    staticStyle: {
      display: "inline-block"
    }
  }, [_c("div", {
    staticStyle: {
      display: "flex",
      "align-items": "center"
    }
  }, [_c("div", {
    staticStyle: {
      width: "230px"
    }
  }, [_c("date-input", {
    attrs: {
      id: "date_deniere_rencontre",
      value: _vm.formData["date_deniere_rencontre"],
      background: "background-color: #ffffad",
      color: "color: #000"
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1)])])]], 2), _vm._v(" "), _c("div", {
    staticStyle: {
      margin: "8px 0"
    }
  }, [_c("span", {
    staticStyle: {
      "font-weight": "bold"
    }
  }, [_vm._v("Motif de la dernière rencontre :")]), _vm._v(" "), [!_vm.edit_mode ? _c("span", [_vm._v("\n                                                    " + _vm._s(_vm.formData["motif_deniere_rencontre"]) + "\n                                                ")]) : _c("div", {
    staticStyle: {
      display: "inline-block"
    }
  }, [_c("div", {
    staticStyle: {
      display: "flex",
      "align-items": "center"
    }
  }, [_c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formData["motif_deniere_rencontre"],
      expression: "formData['motif_deniere_rencontre']"
    }],
    staticClass: "form-control",
    attrs: {
      rows: "1"
    },
    domProps: {
      value: _vm.formData["motif_deniere_rencontre"]
    },
    on: {
      input: [function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formData, "motif_deniere_rencontre", $event.target.value);
      }, _vm.handleInput]
    }
  })])])]], 2), _vm._v(" "), _c("div", {
    staticStyle: {
      margin: "8px 0"
    }
  }, [_c("span", {
    staticStyle: {
      "font-weight": "bold"
    }
  }, [_vm._v("Lieu de la rencontre :")]), _vm._v(" "), [!_vm.edit_mode ? _c("span", [_vm._v("\n                                                    " + _vm._s(_vm.formData["lieu_rencontre"]) + "\n                                                ")]) : _c("div", {
    staticStyle: {
      display: "inline-block"
    }
  }, [_c("div", {
    staticStyle: {
      display: "flex",
      "align-items": "center"
    }
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formData["lieu_rencontre"],
      expression: "formData['lieu_rencontre']"
    }],
    staticClass: "form-control",
    staticStyle: {
      width: "200px"
    },
    attrs: {
      type: "text",
      placeholder: ""
    },
    domProps: {
      value: _vm.formData["lieu_rencontre"]
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formData, "lieu_rencontre", $event.target.value);
      }
    }
  })])])]], 2), _vm._v(" "), _c("div", {
    staticStyle: {
      margin: "8px 0"
    }
  }, [_c("span", {
    staticStyle: {
      "font-weight": "bold"
    }
  }, [_vm._v("Résumé des échanges :")]), _vm._v(" "), [_c("div", [!_vm.edit_mode ? _c("p", {
    staticClass: "vhtml",
    domProps: {
      innerHTML: _vm._s(_vm.formData.resume_echange)
    }
  }) : _c("div", {}, [_c("vue-editor", {
    attrs: {
      id: "resume_echange"
    },
    on: {
      "update-value": function updateValue($event) {
        _vm.formData[$event[0]] = $event[1];
      }
    },
    model: {
      value: _vm.formData.resume_echange,
      callback: function callback($$v) {
        _vm.$set(_vm.formData, "resume_echange", $$v);
      },
      expression: "formData.resume_echange\n                                                                "
    }
  })], 1)])]], 2)])])])])])]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12 mt-4"
  }, [_c("ul", {
    staticClass: "mb-3 position-relative",
    staticStyle: {
      "list-style-type": "none",
      border: "1px solid"
    }
  }, [_c("li", [_c("div", {
    staticClass: "observation"
  }, [_c("div", {
    staticStyle: {
      "text-align": "center",
      "font-weight": "bold",
      margin: "15px 0"
    }
  }, [_vm._v("\n                                        VI - NOTES ET OBSERVATIONS\n                                    ")]), _vm._v(" "), _c("div", [[_c("div", [!_vm.edit_mode ? _c("p", {
    staticClass: "vhtml",
    domProps: {
      innerHTML: _vm._s(_vm.formData.note_observation)
    }
  }) : _c("div", {}, [_c("vue-editor", {
    attrs: {
      id: "note_observation"
    },
    on: {
      "update-value": function updateValue($event) {
        _vm.formData[$event[0]] = $event[1];
      }
    },
    model: {
      value: _vm.formData.note_observation,
      callback: function callback($$v) {
        _vm.$set(_vm.formData, "note_observation", $$v);
      },
      expression: "formData.note_observation\n                                                            "
    }
  })], 1)])]], 2)])])])])]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12 mt-4"
  }, [_c("ul", {
    staticClass: "mb-3 position-relative",
    staticStyle: {
      "list-style-type": "none",
      border: "1px solid"
    }
  }, [_c("li", [_c("div", {
    staticClass: "observation"
  }, [_c("div", {
    staticStyle: {
      "text-align": "center",
      "font-weight": "bold",
      margin: "15px 0"
    }
  }, [_vm._v("\n                                        VII - Avis du gestionnaire sur le client et la relation bancaire \n                                    ")]), _vm._v(" "), _c("div", [[_c("div", [!_vm.edit_mode ? _c("p", {
    staticClass: "vhtml",
    domProps: {
      innerHTML: _vm._s(_vm.formData.note_observation_gestionnaire)
    }
  }) : _c("div", {}, [_c("vue-editor", {
    attrs: {
      id: "note_observation_gestionnaire"
    },
    on: {
      "update-value": function updateValue($event) {
        _vm.formData[$event[0]] = $event[1];
      }
    },
    model: {
      value: _vm.formData.note_observation_gestionnaire,
      callback: function callback($$v) {
        _vm.$set(_vm.formData, "note_observation_gestionnaire", $$v);
      },
      expression: "formData.note_observation_gestionnaire\n                                                            "
    }
  })], 1)])]], 2)])])])])]), _vm._v(" "), _vm._m(5)])]), _vm._v(" "), !_vm.edit_mode ? _c("div", {
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
  }, [_vm._v("\n                                    FICHE DE SUIVI DU CLIENT PARTICULIER\n                                ")])])])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("th", {
    staticClass: "th vertical-middle",
    staticStyle: {
      border: "1px solid black",
      padding: "8px",
      "background-color": "#f2f2f2",
      "text-align": "center"
    }
  }, [_vm._v("\n                                                    TYPE DE FACILITE / CONCOURS")]), _vm._v(" "), _c("th", {
    staticClass: "th vertical-middle",
    staticStyle: {
      border: "1px solid black",
      padding: "8px",
      "background-color": "#f2f2f2",
      "text-align": "center"
    }
  }, [_vm._v("\n                                                    AUTORISATION")]), _vm._v(" "), _c("th", {
    staticClass: "th vertical-middle",
    staticStyle: {
      border: "1px solid black",
      padding: "8px",
      "background-color": "#f2f2f2",
      "text-align": "center"
    }
  }, [_vm._v("\n                                                    DUREE (mois)")]), _vm._v(" "), _c("th", {
    staticClass: "th vertical-middle",
    staticStyle: {
      border: "1px solid black",
      padding: "8px",
      "background-color": "#f2f2f2",
      "text-align": "center"
    }
  }, [_vm._v("\n                                                    TAUX(%)")]), _vm._v(" "), _c("th", {
    staticClass: "th vertical-middle",
    staticStyle: {
      border: "1px solid black",
      padding: "8px",
      "background-color": "#f2f2f2",
      "text-align": "center"
    }
  }, [_vm._v("\n                                                    ENCOURS")]), _vm._v(" "), _c("th", {
    staticClass: "th vertical-middle",
    staticStyle: {
      border: "1px solid black",
      padding: "8px",
      "background-color": "#f2f2f2",
      "text-align": "center"
    }
  }, [_vm._v("\n                                                    ECHEANCE")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticStyle: {
      margin: "8px 0"
    }
  }, [_c("span", {
    staticStyle: {
      "font-weight": "bold"
    }
  }, [_vm._v("Nombre d’années d’expérience\n                                                professionnelle\n                                                cumulées\n                                                :")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("th", [_vm._v("Produit")]), _vm._v(" "), _c("th", [_vm._v("Commentaire")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12 p-2"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12 p-2"
  }, [_c("div", {
    staticClass: "d-flex justify-content-around"
  }, [_c("div", [_c("h6", {
    staticStyle: {
      "text-decoration": "underline"
    }
  }, [_c("b", [_vm._v(" Le Gestionnaire de comptes ")])])]), _vm._v(" "), _c("div", [_c("h6", {
    staticStyle: {
      "text-decoration": "underline"
    }
  }, [_c("b", [_vm._v(" Le Chef d’agence ")])])])])])])])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/conventions/fr/FICHE_DE_SUIVI_DU_CLIENT_PARTICULIER.vue?vue&type=style&index=0&id=6df6b1b6&lang=css&scoped=true":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/conventions/fr/FICHE_DE_SUIVI_DU_CLIENT_PARTICULIER.vue?vue&type=style&index=0&id=6df6b1b6&lang=css&scoped=true ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\nfieldset[data-v-6df6b1b6] {\n    border: 1px solid #ddd !important;\n    position: relative;\n    padding-left: 10px !important;\n    width: 100%;\n    background-color: #f5f5f5;\n    margin-top: 15px;\n    min-width: -moz-max-content;\n    min-width: max-content;\n}\nlegend[data-v-6df6b1b6] {\n    font-weight: bold;\n    padding: 4px;\n    width: -moz-max-content;\n    width: max-content;\n    padding: 0 15px;\n    font-size: 16px;\n    float: none;\n    background-color: #ffffff;\n    border: 1px solid #ddd;\n    border-radius: 4px;\n}\nfieldset[data-v-6df6b1b6] {\n    border: 1px solid #ddd !important;\n    position: relative;\n    padding-left: 10px !important;\n    width: 100%;\n    background-color: #f5f5f5;\n    margin-top: 15px;\n}\nlegend[data-v-6df6b1b6] {\n    font-weight: bold;\n    padding: 4px;\n    width: -moz-max-content;\n    width: max-content;\n    padding: 0 15px;\n    font-size: 16px;\n    float: none;\n    background-color: #ffffff;\n    border: 1px solid #ddd;\n    border-radius: 4px;\n}\n.box[data-v-6df6b1b6] {\n    border-color: #212529;\n    border-style: solid;\n    border-width: 1px;\n    padding: 10px;\n}\n.actd[data-v-6df6b1b6] {\n    border-color: #212529;\n    border-style: solid;\n    border-width: 1px;\n    padding: 10px;\n}\n.pre[data-v-6df6b1b6] {\n    font-size: 0.6rem;\n}\n.form-control[data-v-6df6b1b6] {\n    display: initial;\n    width: initial;\n}\n.paragraph[data-v-6df6b1b6] {\n    margin: 20px 0px;\n    position: relative;\n    padding: 5px;\n}\ninput[data-v-6df6b1b6],\nselect[data-v-6df6b1b6] {\n    margin: 2px;\n    border-color: #34495e;\n    color: black;\n    font-size: 13px;\n    height: 34px;\n    font-weight: bold;\n    background-color: #ffffad;\n    margin-right: 0px;\n    min-width: 45px;\n    /* border-top-right-radius: 0;\n    border-bottom-right-radius: 0; */\n    /* border-right: none; */\n}\n.input-group-append[data-v-6df6b1b6] {\n    margin: 0 2px;\n}\n.input-group-text-right[data-v-6df6b1b6] {\n    border-radius: 0 0.375rem 0.375rem 0;\n    margin-left: 0px;\n    cursor: pointer;\n}\n.input-group-text-left[data-v-6df6b1b6] {\n    border-radius: 0.375rem 0 0 0.375rem;\n}\n.li-convention[data-v-6df6b1b6] {\n    list-style-type: disc;\n    margin: 0;\n    padding: 0;\n    margin-left: 20px;\n}\n.input-group-text[data-v-6df6b1b6] {\n    font-size: 13px;\n    line-height: 1.5;\n    height: 34px;\n    padding: 0.375rem 0.75rem;\n    border: 1px solid #34495e;\n    min-width: 45px;\n    text-align: center;\n    justify-content: center;\n    /*margin: 2px;*/\n    background-color: #ffffad;\n    color: black;\n}\n\n/* checkbox */\n.checkbox-container .checkbox-input[data-v-6df6b1b6] {\n    position: absolute;\n    opacity: 0;\n    cursor: pointer;\n    height: 80%;\n    width: 80%;\n    top: 0;\n    left: 0;\n    z-index: 1;\n}\n.checkbox-container[data-v-6df6b1b6] {\n    display: block;\n    position: relative;\n    cursor: pointer;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n            user-select: none;\n}\n.checkbox-container .checkbox-icon-cancel[data-v-6df6b1b6] {\n    position: relative;\n    top: 0;\n    left: 0;\n    height: 50px;\n    width: 50px;\n    transition: all 0.3s;\n    font-size: 1.5em;\n    color: red;\n}\n.checkbox-container .checkbox-icon-success[data-v-6df6b1b6] {\n    position: relative;\n    top: 0;\n    left: 0;\n    height: 50px;\n    width: 50px;\n    transition: all 0.3s;\n    font-size: 1.5em;\n    color: green;\n}\n\n/*.checkbox-container .checkbox-icon-cancel:hover {\n    transform: scale(1.1);\n}\n\n.checkbox-container .checkbox-icon-success:hover {\n    transform: scale(1.1);\n}*/\n.checkbox-container .checkbox-icon-success[data-v-6df6b1b6] {\n    display: none;\n}\n.checkbox-container .checkbox-input:checked~.checkbox-icon-cancel[data-v-6df6b1b6] {\n    display: none;\n}\n.checkbox-container .checkbox-input:checked~.checkbox-icon-success[data-v-6df6b1b6] {\n    display: contents;\n}\n.valid-section[data-v-6df6b1b6] {\n    pointer-events: auto;\n    top: 50%;\n    transform: translateY(-50%);\n    width: -moz-fit-content;\n    width: fit-content;\n}\n.st-valide[data-v-6df6b1b6] {\n    position: absolute;\n    z-index: 99;\n    right: -149px;\n    top: 10px;\n}\n\n/*this is the new approach*/\n.position-relative[data-v-6df6b1b6]:has(.valid-section:hover) {\n    background: #3498db6f;\n}\n.onAutoSave[data-v-6df6b1b6] {\n    cursor: wait !important;\n}\n.onAutoSave>span[data-v-6df6b1b6] {\n    pointer-events: none;\n    opacity: 0.6;\n    cursor: wait !important;\n}\nul[data-v-6df6b1b6],\nli[data-v-6df6b1b6] {\n    list-style-type: inherit;\n}\n.custom-list[data-v-6df6b1b6] {\n    counter-reset: section;\n    list-style: none;\n    /* Supprime les puces par défaut */\n    padding-left: 0;\n    /* Enlève l'indentation */\n}\n.custom-list>li[data-v-6df6b1b6] {\n    counter-increment: section;\n}\n.custom-list>li[data-v-6df6b1b6]::before {\n    content: counter(section) \". \";\n    font-weight: bold;\n}\n\n/* Pour les sous-listes */\n.custom-list>li>ol[data-v-6df6b1b6] {\n    counter-reset: subsection;\n    list-style: none;\n    padding-left: 20px;\n}\n.custom-list>li>ol>li[data-v-6df6b1b6] {\n    counter-increment: subsection;\n}\n.custom-list>li>ol>li[data-v-6df6b1b6]::before {\n    content: counter(section) \".\" counter(subsection) \" \";\n    font-weight: normal;\n}\n.title_[data-v-6df6b1b6] {\n    padding: 8px 64px;\n}\nth[data-v-6df6b1b6],\ntd[data-v-6df6b1b6] {\n    font-size: 13px;\n}\n.table[data-v-6df6b1b6] {\n    border-color: unset;\n}\n.vhtml[data-v-6df6b1b6] {\n    word-wrap: break-word;   /* Casse les mots trop longs */\n    overflow-wrap: break-word;\n    overflow: hidden;        /* Cache tout débordement */\n    max-width: 100%;         /* Empêche le dépassement horizontal */\n}\n", ""]);
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

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/conventions/fr/FICHE_DE_SUIVI_DU_CLIENT_PARTICULIER.vue?vue&type=style&index=0&id=6df6b1b6&lang=css&scoped=true":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/conventions/fr/FICHE_DE_SUIVI_DU_CLIENT_PARTICULIER.vue?vue&type=style&index=0&id=6df6b1b6&lang=css&scoped=true ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FICHE_DE_SUIVI_DU_CLIENT_PARTICULIER_vue_vue_type_style_index_0_id_6df6b1b6_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FICHE_DE_SUIVI_DU_CLIENT_PARTICULIER.vue?vue&type=style&index=0&id=6df6b1b6&lang=css&scoped=true */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/conventions/fr/FICHE_DE_SUIVI_DU_CLIENT_PARTICULIER.vue?vue&type=style&index=0&id=6df6b1b6&lang=css&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FICHE_DE_SUIVI_DU_CLIENT_PARTICULIER_vue_vue_type_style_index_0_id_6df6b1b6_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FICHE_DE_SUIVI_DU_CLIENT_PARTICULIER_vue_vue_type_style_index_0_id_6df6b1b6_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/offview/bank/afg/memo/conventions/fr/FICHE_DE_SUIVI_DU_CLIENT_PARTICULIER.vue":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/components/offview/bank/afg/memo/conventions/fr/FICHE_DE_SUIVI_DU_CLIENT_PARTICULIER.vue ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _FICHE_DE_SUIVI_DU_CLIENT_PARTICULIER_vue_vue_type_template_id_6df6b1b6_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FICHE_DE_SUIVI_DU_CLIENT_PARTICULIER.vue?vue&type=template&id=6df6b1b6&scoped=true */ "./resources/js/components/offview/bank/afg/memo/conventions/fr/FICHE_DE_SUIVI_DU_CLIENT_PARTICULIER.vue?vue&type=template&id=6df6b1b6&scoped=true");
/* harmony import */ var _FICHE_DE_SUIVI_DU_CLIENT_PARTICULIER_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FICHE_DE_SUIVI_DU_CLIENT_PARTICULIER.vue?vue&type=script&lang=js */ "./resources/js/components/offview/bank/afg/memo/conventions/fr/FICHE_DE_SUIVI_DU_CLIENT_PARTICULIER.vue?vue&type=script&lang=js");
/* harmony import */ var _FICHE_DE_SUIVI_DU_CLIENT_PARTICULIER_vue_vue_type_style_index_0_id_6df6b1b6_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FICHE_DE_SUIVI_DU_CLIENT_PARTICULIER.vue?vue&type=style&index=0&id=6df6b1b6&lang=css&scoped=true */ "./resources/js/components/offview/bank/afg/memo/conventions/fr/FICHE_DE_SUIVI_DU_CLIENT_PARTICULIER.vue?vue&type=style&index=0&id=6df6b1b6&lang=css&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _FICHE_DE_SUIVI_DU_CLIENT_PARTICULIER_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _FICHE_DE_SUIVI_DU_CLIENT_PARTICULIER_vue_vue_type_template_id_6df6b1b6_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _FICHE_DE_SUIVI_DU_CLIENT_PARTICULIER_vue_vue_type_template_id_6df6b1b6_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "6df6b1b6",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/offview/bank/afg/memo/conventions/fr/FICHE_DE_SUIVI_DU_CLIENT_PARTICULIER.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/offview/bank/afg/memo/conventions/fr/FICHE_DE_SUIVI_DU_CLIENT_PARTICULIER.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************!*\
  !*** ./resources/js/components/offview/bank/afg/memo/conventions/fr/FICHE_DE_SUIVI_DU_CLIENT_PARTICULIER.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FICHE_DE_SUIVI_DU_CLIENT_PARTICULIER_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FICHE_DE_SUIVI_DU_CLIENT_PARTICULIER.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/conventions/fr/FICHE_DE_SUIVI_DU_CLIENT_PARTICULIER.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FICHE_DE_SUIVI_DU_CLIENT_PARTICULIER_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/offview/bank/afg/memo/conventions/fr/FICHE_DE_SUIVI_DU_CLIENT_PARTICULIER.vue?vue&type=style&index=0&id=6df6b1b6&lang=css&scoped=true":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./resources/js/components/offview/bank/afg/memo/conventions/fr/FICHE_DE_SUIVI_DU_CLIENT_PARTICULIER.vue?vue&type=style&index=0&id=6df6b1b6&lang=css&scoped=true ***!
  \***********************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FICHE_DE_SUIVI_DU_CLIENT_PARTICULIER_vue_vue_type_style_index_0_id_6df6b1b6_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FICHE_DE_SUIVI_DU_CLIENT_PARTICULIER.vue?vue&type=style&index=0&id=6df6b1b6&lang=css&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/conventions/fr/FICHE_DE_SUIVI_DU_CLIENT_PARTICULIER.vue?vue&type=style&index=0&id=6df6b1b6&lang=css&scoped=true");


/***/ }),

/***/ "./resources/js/components/offview/bank/afg/memo/conventions/fr/FICHE_DE_SUIVI_DU_CLIENT_PARTICULIER.vue?vue&type=template&id=6df6b1b6&scoped=true":
/*!*********************************************************************************************************************************************************!*\
  !*** ./resources/js/components/offview/bank/afg/memo/conventions/fr/FICHE_DE_SUIVI_DU_CLIENT_PARTICULIER.vue?vue&type=template&id=6df6b1b6&scoped=true ***!
  \*********************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FICHE_DE_SUIVI_DU_CLIENT_PARTICULIER_vue_vue_type_template_id_6df6b1b6_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FICHE_DE_SUIVI_DU_CLIENT_PARTICULIER_vue_vue_type_template_id_6df6b1b6_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FICHE_DE_SUIVI_DU_CLIENT_PARTICULIER_vue_vue_type_template_id_6df6b1b6_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FICHE_DE_SUIVI_DU_CLIENT_PARTICULIER.vue?vue&type=template&id=6df6b1b6&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/conventions/fr/FICHE_DE_SUIVI_DU_CLIENT_PARTICULIER.vue?vue&type=template&id=6df6b1b6&scoped=true");


/***/ })

}]);