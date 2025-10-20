"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_modals_GreenLightModal_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/modals/GreenLightModal.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/modals/GreenLightModal.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_ebapis_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/ebapis.service */ "./resources/js/services/ebapis.service.js");
/* harmony import */ var _johmun_vue_tags_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @johmun/vue-tags-input */ "./node_modules/@johmun/vue-tags-input/dist/vue-tags-input.js");
/* harmony import */ var _johmun_vue_tags_input__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_johmun_vue_tags_input__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_credit_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/credit.service */ "./resources/js/services/credit.service.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./resources/js/services/auth.service.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return r; }; var t, r = {}, e = Object.prototype, n = e.hasOwnProperty, o = "function" == typeof Symbol ? Symbol : {}, i = o.iterator || "@@iterator", a = o.asyncIterator || "@@asyncIterator", u = o.toStringTag || "@@toStringTag"; function c(t, r, e, n) { Object.defineProperty(t, r, { value: e, enumerable: !n, configurable: !n, writable: !n }); } try { c({}, ""); } catch (t) { c = function c(t, r, e) { return t[r] = e; }; } function h(r, e, n, o) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype); return c(a, "_invoke", function (r, e, n) { var o = 1; return function (i, a) { if (3 === o) throw Error("Generator is already running"); if (4 === o) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var u = n.delegate; if (u) { var c = d(u, n); if (c) { if (c === f) continue; return c; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (1 === o) throw o = 4, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = 3; var h = s(r, e, n); if ("normal" === h.type) { if (o = n.done ? 4 : 2, h.arg === f) continue; return { value: h.arg, done: n.done }; } "throw" === h.type && (o = 4, n.method = "throw", n.arg = h.arg); } }; }(r, n, new Context(o || [])), !0), a; } function s(t, r, e) { try { return { type: "normal", arg: t.call(r, e) }; } catch (t) { return { type: "throw", arg: t }; } } r.wrap = h; var f = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var l = {}; c(l, i, function () { return this; }); var p = Object.getPrototypeOf, y = p && p(p(x([]))); y && y !== e && n.call(y, i) && (l = y); var v = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(l); function g(t) { ["next", "throw", "return"].forEach(function (r) { c(t, r, function (t) { return this._invoke(r, t); }); }); } function AsyncIterator(t, r) { function e(o, i, a, u) { var c = s(t[o], t, i); if ("throw" !== c.type) { var h = c.arg, f = h.value; return f && "object" == _typeof(f) && n.call(f, "__await") ? r.resolve(f.__await).then(function (t) { e("next", t, a, u); }, function (t) { e("throw", t, a, u); }) : r.resolve(f).then(function (t) { h.value = t, a(h); }, function (t) { return e("throw", t, a, u); }); } u(c.arg); } var o; c(this, "_invoke", function (t, n) { function i() { return new r(function (r, o) { e(t, n, r, o); }); } return o = o ? o.then(i, i) : i(); }, !0); } function d(r, e) { var n = e.method, o = r.i[n]; if (o === t) return e.delegate = null, "throw" === n && r.i["return"] && (e.method = "return", e.arg = t, d(r, e), "throw" === e.method) || "return" !== n && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + n + "' method")), f; var i = s(o, r.i, e.arg); if ("throw" === i.type) return e.method = "throw", e.arg = i.arg, e.delegate = null, f; var a = i.arg; return a ? a.done ? (e[r.r] = a.value, e.next = r.n, "return" !== e.method && (e.method = "next", e.arg = t), e.delegate = null, f) : a : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f); } function w(t) { this.tryEntries.push(t); } function m(r) { var e = r[4] || {}; e.type = "normal", e.arg = t, r[4] = e; } function Context(t) { this.tryEntries = [[-1]], t.forEach(w, this), this.reset(!0); } function x(r) { if (null != r) { var e = r[i]; if (e) return e.call(r); if ("function" == typeof r.next) return r; if (!isNaN(r.length)) { var o = -1, a = function e() { for (; ++o < r.length;) if (n.call(r, o)) return e.value = r[o], e.done = !1, e; return e.value = t, e.done = !0, e; }; return a.next = a; } } throw new TypeError(_typeof(r) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, c(v, "constructor", GeneratorFunctionPrototype), c(GeneratorFunctionPrototype, "constructor", GeneratorFunction), c(GeneratorFunctionPrototype, u, GeneratorFunction.displayName = "GeneratorFunction"), r.isGeneratorFunction = function (t) { var r = "function" == typeof t && t.constructor; return !!r && (r === GeneratorFunction || "GeneratorFunction" === (r.displayName || r.name)); }, r.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, c(t, u, "GeneratorFunction")), t.prototype = Object.create(v), t; }, r.awrap = function (t) { return { __await: t }; }, g(AsyncIterator.prototype), c(AsyncIterator.prototype, a, function () { return this; }), r.AsyncIterator = AsyncIterator, r.async = function (t, e, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(h(t, e, n, o), i); return r.isGeneratorFunction(e) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, g(v), c(v, u, "Generator"), c(v, i, function () { return this; }), c(v, "toString", function () { return "[object Generator]"; }), r.keys = function (t) { var r = Object(t), e = []; for (var n in r) e.unshift(n); return function t() { for (; e.length;) if ((n = e.pop()) in r) return t.value = n, t.done = !1, t; return t.done = !0, t; }; }, r.values = x, Context.prototype = { constructor: Context, reset: function reset(r) { if (this.prev = this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(m), !r) for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0][4]; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(r) { if (this.done) throw r; var e = this; function n(t) { a.type = "throw", a.arg = r, e.next = t; } for (var o = e.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i[4], u = this.prev, c = i[1], h = i[2]; if (-1 === i[0]) return n("end"), !1; if (!c && !h) throw Error("try statement without catch or finally"); if (null != i[0] && i[0] <= u) { if (u < c) return this.method = "next", this.arg = t, n(c), !0; if (u < h) return n(h), !1; } } }, abrupt: function abrupt(t, r) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var n = this.tryEntries[e]; if (n[0] > -1 && n[0] <= this.prev && this.prev < n[2]) { var o = n; break; } } o && ("break" === t || "continue" === t) && o[0] <= r && r <= o[2] && (o = null); var i = o ? o[4] : {}; return i.type = t, i.arg = r, o ? (this.method = "next", this.next = o[2], f) : this.complete(i); }, complete: function complete(t, r) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), f; }, finish: function finish(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[2] === t) return this.complete(e[4], e[3]), m(e), f; } }, "catch": function _catch(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[0] === t) { var n = e[4]; if ("throw" === n.type) { var o = n.arg; m(e); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(r, e, n) { return this.delegate = { i: x(r), r: e, n: n }, "next" === this.method && (this.arg = t), f; } }, r; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }




// import $ from 'jquery'
window.$ = window.jQuery = __webpack_require__(/*! jquery/dist/jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "DemandeException",
  components: {
    VueTagsInput: (_johmun_vue_tags_input__WEBPACK_IMPORTED_MODULE_1___default())
  },
  props: {
    cred_pub_key: String,
    tables: Array,
    dossier_credit: Object
  },
  mounted: function mounted() {
    var _this = this;
    _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["default"].loadUserData().then(function (res) {
      _this.authcheckUsr = res.data;
    });
    EventBus.$on('set-exception-user', function () {
      _this.tag = "";
      _this.initItems(true);
    });
  },
  data: function data() {
    return {
      search: "",
      type_exception: "levée d'exception",
      current_right_tab: "add",
      current_exception: null,
      current_tab: "received",
      current_green_light: null,
      is_answering: false,
      message_response: "",
      ebapisHost: _services_ebapis_service__WEBPACK_IMPORTED_MODULE_0__["default"].host,
      authcheck: false,
      authcheckUsr: null,
      authcheckStatus: null,
      cafs: [],
      tag: "",
      tags: [],
      tableTag: "",
      tableTags: [],
      autocompleteItems: [],
      // dossier_credit: null,
      users: [],
      idsFromDossier: [],
      addComment: false,
      // loading_save: true,
      all: false,
      listOfWhatTobeProduced1: [{
        docName: "Fiche de présentation du client",
        docSlug: "fiche_de_presentation_du_client",
        tbToBeUsed: [],
        categorie_client: ["Corporate"],
        linkedTo: ["MEMORANDUM_CREDIT"],
        isDefault: false,
        inPP: true
      }, {
        docName: "Fiche de Screening E&S de Crédit",
        docSlug: "fiche_de_screening_es_de_credit",
        tbToBeUsed: ["tb4001", "tb4002", "tb4003", "tb4004"],
        categorie_client: ["Corporate"],
        linkedTo: ["MEMORANDUM_CREDIT"],
        isDefault: false
      }, {
        docName: "Carcasse PPI",
        docSlug: "carcasse_ppi",
        tbToBeUsed: ["tb30001", "tb30002", "tb30003", "tb30004", "tb30005", "tb30006", "tb001", "tb200601"],
        categorie_client: ["Retail"],
        linkedTo: ["MEMORANDUM_CREDIT"],
        isDefault: false
      }, {
        docName: "Fiche de cotation environnementale et sociale",
        docSlug: "fiche_de_cotation_environnementale_et_sociale",
        tbToBeUsed: ["tb5001"],
        categorie_client: ["Corporate"],
        linkedTo: ["MEMORANDUM_CREDIT"],
        isDefault: false
      }, {
        docName: "CR2",
        docSlug: "cr2",
        tbToBeUsed: ["tb0", "tb00", "tb1", "tb2", "tb3", "tb4", "tb5", "tb6", "tb7", "tb8", "tb9", "tb10", "tb11", "tb12", "tb13", "tb14", "tb15", "tb16", "tb17", "tb18", "tb19", "tb20", "tb21", "tb001", "tb200601"],
        //'tb002',
        categorie_client: ["Corporate"],
        linkedTo: ["MEMORANDUM_CREDIT"],
        isDefault: true
      }, {
        docName: "Fiche d’endettement / Simulateur de prêt",
        docSlug: "fiche_d_endettement_simulateur_de_pret",
        tbToBeUsed: ["tb10009"],
        categorie_client: ["Retail"],
        linkedTo: ["MEMORANDUM_CREDIT"],
        isDefault: false
      }, {
        docName: "Carcasse PPO",
        docSlug: "carcasse_ppo",
        tbToBeUsed: ["tb10001", "tb10002", "tb10003", "tb10004", "tb10005", "tb001", "tb200601"],
        //"tb10007"
        categorie_client: ["Retail"],
        linkedTo: ["MEMORANDUM_CREDIT"],
        isDefault: false
      }, {
        docName: "Fiche de scoring",
        docSlug: "fiche_de_scoring",
        tbToBeUsed: ["tb10008"],
        categorie_client: ["Retail"],
        linkedTo: ["MEMORANDUM_CREDIT"],
        isDefault: false
      }, {
        docName: "Tamor (Tableau d’amortissement)",
        docSlug: "tamor_tableau_d_amortissement",
        tbToBeUsed: ["tb10010"],
        categorie_client: ["Retail"],
        linkedTo: ["MEMORANDUM_CREDIT"],
        isDefault: false
      }, {
        docName: "Décision de crédit",
        docSlug: "decision_de_credit",
        tbToBeUsed: ["tb10006"],
        categorie_client: ["Retail"],
        linkedTo: ["MEMORANDUM_CREDIT"],
        isDefault: false
      }],
      listOfWhatTobeProduced2: [{
        docName: "Revue fiche d'engagement",
        docSlug: "revue_fiche_d_engagement",
        tbToBeUsed: ["tb13101"],
        categorie_client: ["Retail"],
        linkedTo: ["CONTRE_ANALYSE_FILIALE"],
        isDefault: false
      }, {
        docName: "PPI Resultat scoring",
        docSlug: "ppi_resultat_scoring",
        tbToBeUsed: ["tb11001", "tb11002", "tb11003"],
        categorie_client: ["Retail"],
        linkedTo: ["CONTRE_ANALYSE_FILIALE"],
        isDefault: false
      }, {
        docName: "PPO Resultat scoring",
        docSlug: "ppo_resultat_scoring",
        tbToBeUsed: ["tb13001", "tb13002", "tb13003"],
        categorie_client: ["Retail"],
        linkedTo: ["CONTRE_ANALYSE_FILIALE"],
        isDefault: false
      }, {
        docName: "Fiche Analyse CCDG",
        docSlug: "canevas_fiche_analyse_tpe_pme_pmi",
        tbToBeUsed: ["tb17001", "tb17002", "tb17003", "tb17004", "tb17005"],
        categorie_client: ["Corporate"],
        linkedTo: ["CONTRE_ANALYSE_FILIALE"],
        isDefault: true
      },
      // PORIX
      {
        docName: "Fiche de Decision CRCCA et CA",
        docSlug: "fiche_de_decisioncrcca_et_ca",
        tbToBeUsed: ["tb19001", "tb19002", "tb19003", "tb19004", "tb19005", "tb19006", "tb19007", "tb19008", "tb19009", "tb19011", "tb19012", "tb19013"],
        //"tb19010"
        categorie_client: ["Corporate"],
        linkedTo: ["CONTRE_ANALYSE_FILIALE"],
        isDefault: true
      },
      // PORIX
      {
        docName: "Fiche d'engagement Groupe",
        docSlug: "fiche_d_engagement_groupe",
        tbToBeUsed: ["tb21001"],
        categorie_client: ["Corporate"],
        linkedTo: ["CONTRE_ANALYSE_FILIALE"],
        isDefault: false
      }, {
        docName: "Fiche d'informations E&S au comité de credit",
        docSlug: "Fiche_d_informations_E&S_au_comité_de_credit",
        tbToBeUsed: ["tb22001", "tb22002", "tb22003", "tb22004", "tb22005", "tb22006", "tb22007", "tb22008"],
        categorie_client: ["Corporate"],
        linkedTo: ["CONTRE_ANALYSE_RSE"],
        isDefault: true
      },
      // PORIX
      {
        docName: "Fiche d'évaluation des risques à l'octroi des prêts",
        docSlug: "Fiche_avis_risques",
        tbToBeUsed: ["tb28001", "tb28002", "tb28003", "tb28004", "tb28005", "tb28006", "tb28007", "tb28008", "tb28009"],
        categorie_client: ["Corporate"],
        linkedTo: ["CONTRE_ANALYSE_DGR"],
        isDefault: true
      },
      // PORIX
      // CONTRE_ANALYSE_GROUPE
      {
        docName: "Fiche de synthèse à l'attention du CCCA",
        docSlug: "Fiche_de_synthèse_à_l_attention_du_ccca",
        tbToBeUsed: ["tb40001", "tb40002", "tb40003", "tb40004", "tb40005", "tb40006", "tb40007", "tb40008", "tb40009", "tb40010", "tb40011", "tb40012", "tb40013", "tb40014"],
        categorie_client: ["Corporate"],
        linkedTo: ["CONTRE_ANALYSE_GROUPE"],
        isDefault: false
      },
      // PV_CONTRE_ANALYSE_FILIALE
      {
        docName: "Courrier de transmission",
        docSlug: "courrier_de_transmission",
        tbToBeUsed: ["tb20500", "tb20501", "tb20502", "tb20503"],
        categorie_client: ["Corporate"],
        linkedTo: ["PV_CONTRE_ANALYSE_FILIALE"],
        isDefault: false
      },
      // PV_CONTRE_ANALYSE_FILIALE
      // CONTRE_ANALYSE_GROUPE
      {
        docName: "Checklist critère d'éligibilité à l'analyse de risque",
        docSlug: "checklist_critere_d_eligibilte_analyse_risque_groupe",
        tbToBeUsed: ["tb1001"],
        categorie_client: ["Corporate"],
        linkedTo: ["CONTRE_ANALYSE_FILIALE"],
        isDefault: false
      },
      // CONTRE_ANALYSE_GROUPE
      {
        docName: "PV CRCCA",
        docSlug: "pv_crcca",
        tbToBeUsed: ["tb50001", "tb50002"],
        categorie_client: ["Corporate"],
        linkedTo: ["PV_CONTRE_ANALYSE_GROUPE"],
        isDefault: true
      }, {
        docName: "PV CA",
        docSlug: "pv_ca",
        tbToBeUsed: ["tb50501", "tb50502"],
        categorie_client: ["Corporate"],
        linkedTo: ["PV_CONTRE_ANALYSE_GROUPE"],
        isDefault: true,
        isCA: true
      }, {
        docName: "Contre analyse (Optionnelle)",
        docSlug: "contre_analyse",
        tbToBeUsed: ["tb13102"],
        categorie_client: ["Retail"],
        linkedTo: ["CONTRE_ANALYSE_FILIALE"],
        isDefault: false
      }, {
        docName: "Revue Tamor (Tableau d’amortissement)",
        docSlug: "revue_tamor_tableau_d_amortissement",
        tbToBeUsed: ["tb13103"],
        categorie_client: ["Retail"],
        linkedTo: ["CONTRE_ANALYSE_FILIALE"],
        isDefault: false
      }, {
        docName: "Revue de la documentation",
        docSlug: "revue_de_la_documentation",
        tbToBeUsed: ["tb200601", "tb200101", "tb200102", "tb200103", "tb200104"],
        categorie_client: ["Corporate", "Retail"],
        linkedTo: ["CONTRE_ANALYSE_DAJC"],
        isDefault: true
      }, {
        docName: "Rédaction des contrats",
        docSlug: "redaction_des_contrats",
        tbToBeUsed: ["tb200201", "tb200202"],
        categorie_client: ["Corporate", "Retail"],
        linkedTo: ["CONTRE_ANALYSE_DAJC"],
        isDefault: true
      }, {
        docName: "Fiche de revue de la documentation pour la mise en place",
        docSlug: "fiche_de_revue_de_la_documentation_pour_la_mise_en_place",
        tbToBeUsed: ["tb200301"],
        categorie_client: ["Corporate", "Retail"],
        linkedTo: ["CONTRE_ANALYSE_DAJC"],
        isDefault: true
      },
      // {
      //     "docName": "Notification de crédit",
      //     "docSlug": "notification_d_accord_de_credit",
      //     "tbToBeUsed" : ["tb200501", "tb200502", "tb200503"],
      //     "categorie_client": ["Corporate", "Retail"],
      //     "linkedTo" : ['CONTRE_ANALYSE_FILIALE'],
      //     "isDefault" : true
      // },
      {
        docName: "Contrôle/Vérification",
        docSlug: "controle_verification",
        tbToBeUsed: ["tb300101", "tb300102",, "tb300103", "tb300106"],
        categorie_client: ["Corporate", "Retail"],
        linkedTo: ["CONTRE_ANALYSE_GAC"],
        isDefault: true
      }, {
        docName: "Saisie",
        docSlug: "saisie",
        tbToBeUsed: ["tb300104"],
        categorie_client: ["Corporate", "Retail"],
        linkedTo: ["CONTRE_ANALYSE_GAC"],
        isDefault: true
      }, {
        docName: "Emission d'avis",
        docSlug: "emission_d_avis",
        tbToBeUsed: ["tb300105"],
        categorie_client: ["Corporate", "Retail"],
        linkedTo: ["CONTRE_ANALYSE_GAC"],
        isDefault: true
      }],
      message: "",
      role_uuid_reviewers: ["4bCvuFcDoKsrvFoBV2Dj", "cW8z1J3Au0FrFAFJXzDs", "4mmxGX8F56XGFpdzXGMQ", "jH5XRMMLq2C85RUH7KYW", "XjGH1ZjmHVECJVv0"],
      debounce: null,
      searchUser: false,
      loading_save: false,
      loading_answer: false,
      types: [{
        label: "Green Light",
        value: "green light",
        icon: "icofont-lamp-light"
      }, {
        label: "Levée d'exception",
        value: "levée d'exception",
        icon: "icofont-warning-alt"
      }],
      isRotating: false
    };
  },
  methods: {
    refreshData: function refreshData() {
      var _this2 = this;
      this.isRotating = true;
      EventBus.$emit("value-updatedT1");
      setTimeout(function () {
        _this2.isRotating = false;
      }, 2000);
    },
    str_title: function str_title(str) {
      if (!str) return "";
      return str.split(" ").map(function (el) {
        return el.charAt(0).toUpperCase() + el.slice(1).toLowerCase();
      }).join(" ");
    },
    sendResponse: function sendResponse(id, response) {
      var _this3 = this;
      // const current_green_light = this.green_lights.find(el => el.id === id)
      this.loading_answer = true;
      this.$axios.post(this.ebapisHost + "creditbuilder/api/v1/answer-green-light/", {
        green_light_id: id,
        response: response,
        type: this.type_exception,
        message: this.message_response,
        cred_pub_key: this.cred_pub_key
      }).then(function (res) {
        _this3.$toasted.show("Bravo votre reponse a été enregistrée !");
        EventBus.$emit("value-updatedT1");
        _this3.message_response = "";
        _this3.current_green_light = null;
      })["finally"](function () {
        return _this3.loading_answer = false;
      });
    },
    didIAnswered: function didIAnswered(green_light) {
      var _green_light$response,
        _this4 = this;
      if (!green_light) return false;
      var my_answer = (_green_light$response = green_light.responses) === null || _green_light$response === void 0 ? void 0 : _green_light$response.find(function (el) {
        var _this4$authenticatedU;
        return el.user_id === ((_this4$authenticatedU = _this4.authenticatedUser) === null || _this4$authenticatedU === void 0 ? void 0 : _this4$authenticatedU.id);
      });
      return Boolean(my_answer === null || my_answer === void 0 ? void 0 : my_answer.response);
    },
    getMyAnswer: function getMyAnswer(green_light) {
      var _green_light$response2,
        _this5 = this;
      if (!green_light) return false;
      var my_answer = (_green_light$response2 = green_light.responses) === null || _green_light$response2 === void 0 ? void 0 : _green_light$response2.find(function (el) {
        var _this5$authenticatedU;
        return el.user_id === ((_this5$authenticatedU = _this5.authenticatedUser) === null || _this5$authenticatedU === void 0 ? void 0 : _this5$authenticatedU.id);
      });
      return my_answer;
    },
    toggleAll: function toggleAll() {
      if (this.tableTags.length < this.filteredTable.length) {
        this.tableTags = this.filteredTable;
      } else {
        this.tableTags = [];
      }
    },
    pass: function pass() {
      //
    },
    getUsers: function getUsers() {
      var _this6 = this;
      var crb = this.$route.params.templateId;
      if (!["", null].includes(crb)) {
        _services_credit_service__WEBPACK_IMPORTED_MODULE_2__["default"].usersListsById(crb).then(function (data) {
          _this6.users = data.data;
        })["catch"](function (err) {
          console.dir(err);
        });
      } else {
        this.users = [];
      }
    },
    setShareDoc: function setShareDoc(dossier) {
      // this.dossier_credit = dossier
      this.$modal.show("green_light");
    },
    usersData: function usersData(res) {
      var l0 = res.data;
      this.autocompleteItems = [];

      // console.log("res", res.data)
      for (var i = 0; i < l0.length; i++) {
        // else {
        if (l0[i]["role_id"] != "EPxUVOLNEjngVhRO") {
          // add by El
          this.autocompleteItems.push({
            email: l0[i]["email"],
            text: l0[i]["name"] + " (" + l0[i]["role_name"] + ")",
            role: l0[i]["role_name"],
            contact_whatsap: l0[i]["contact_whatsap"],
            id: l0[i]["id"]
          });
        }

        // }
      }
    },
    loadWithError: function loadWithError(err) {
      console.log(err);
      //            // window.location.href = "/login"
    },
    send2Backend: function send2Backend() {
      var _this7 = this;
      this.loading_save = true;
      if (this.authenticatedUser) {
        this.$axios.post(this.ebapisHost + "creditbuilder/api/v1/request-green-light/", {
          users_id: this.users_id,
          receivers: this.tags,
          type: this.type_exception,
          senders: this.authenticatedUser,
          message: this.message,
          cred_pub_key: this.cred_pub_key
        }).then(function (response) {
          _this7.message = "";
          _this7.$emit("value-updated");
          _this7.$toasted.show("Demande d'exception envoyée avec succès !");
          _this7.all = false;
          _this7.addComment = false;
          _this7.tags = [];
          EventBus.$emit("value-updatedT1");

          // this.$modal.hide('green_light');
        })["catch"](function (error) {
          if (error.status === 400) {
            _this7.$toasted.show(error.data.message);
          }
          console.error(error);
        })["finally"](function () {
          return _this7.loading_save = false;
        });
      } else {
        this.loading_save = true;
        this.$toasted.show("Vous n'avez pas les droits necessaires");
      }
    },
    share: function share() {
      if (this.users_id.length <= 0) {
        this.$toasted.show("Aucun collaborateur choisi");
        return;
      }
      // else if (this.tableTags.length <= 0) {
      //     this.$toasted.show("Aucun tableau choisi")
      //     return
      // }
      this.loading_save = false;
      this.send2Backend();
    },
    check: function check(e) {
      var _this8 = this;
      this.$nextTick(function () {
        _this8.addComment = !_this8.addComment;
      });
    },
    updateTags: function updateTags(newTags) {
      this.autocompleteItems = [];
      newTags = newTags.filter(function (el) {
        return el === null || el === void 0 ? void 0 : el.email;
      });
      this.tags = newTags;
    },
    initItems: function initItems() {
      var _arguments = arguments,
        _this9 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var is_exception;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              is_exception = _arguments.length > 0 && _arguments[0] !== undefined ? _arguments[0] : false;
              if (!(_this9.tag.trim().length < 3 && !is_exception)) {
                _context2.next = 3;
                break;
              }
              return _context2.abrupt("return");
            case 3:
              clearTimeout(_this9.debounce);
              _this9.debounce = setTimeout(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
                var url, data, _this9$authenticatedU;
                return _regeneratorRuntime().wrap(function _callee$(_context) {
                  while (1) switch (_context.prev = _context.next) {
                    case 0:
                      _this9.searchUser = true;
                      url = "/api/search_user";
                      data = {
                        search: _this9.tag,
                        limit: 10
                      };
                      if (_this9.dossier_credit.is_exception) {
                        // data = data.filter((el) => el.email == "vacaba.diaby2@cofinacorp.com");
                        // this.$axios.post('/api/get-user-by-role-and-entite', { role: 'sZFLzN7vpthh9XGthnf', entite: this.authenticatedUser?.filiale })
                        // .then(r => { 
                        //   console.log({r})
                        //   this.$toasted.show("api appelée")
                        // })

                        _services_credit_service__WEBPACK_IMPORTED_MODULE_2__["default"].getUserByRoleAndEntite('sZFLzN7vpthh9XGthnf', (_this9$authenticatedU = _this9.authenticatedUser) === null || _this9$authenticatedU === void 0 ? void 0 : _this9$authenticatedU.filiale).then(function (res) {
                          var _data;
                          var data = res.data;
                          if (((_data = data) === null || _data === void 0 ? void 0 : _data.length) > 0) {
                            data = data.filter(function (el) {
                              return !el.name.includes('DEFAULT_');
                            });
                            data = data.map(function (a) {
                              return {
                                email: a["email"],
                                text: a["name"] + " (" + a["role_name"] + ")",
                                role: a["role_name"],
                                contact_whatsap: a["contact_whatsap"],
                                id: a["id"],
                                name: a["name"]
                              };
                            });
                            _this9.autocompleteItems = data;
                            _this9.tags = [data[0]];
                          }
                        });
                      } else {}
                      _this9.$axios.post(url, data).then(function (response) {
                        var data = response.data.data;
                        var message = response.data.message;
                        if (!["", null, undefined].includes(data) && data.length > 0) {
                          _this9.autocompleteItems = data.map(function (a) {
                            return {
                              email: a["email"],
                              text: a["name"] + " (" + a["role_name"] + ")",
                              role: a["role_name"],
                              contact_whatsap: a["contact_whatsap"],
                              id: a["id"],
                              name: a["name"]
                            };
                          });
                        } else {
                          _this9.autocompleteItems = [];
                          _this9.$toasted.show(message, {
                            duration: 5000
                          });
                        }
                        _this9.searchUser = false;
                      })["catch"](function (error) {
                        _this9.searchUser = false;
                        console.error(error);
                      });
                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }, _callee);
              })), 800);
            case 5:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }))();
    }
  },
  computed: {
    dType: function dType() {
      var _this$dossier_credit;
      return (_this$dossier_credit = this.dossier_credit) === null || _this$dossier_credit === void 0 ? void 0 : _this$dossier_credit.applied_templ_name;
    },
    tableTodisplay: function tableTodisplay() {
      var _this0 = this;
      var tables = [];
      if (true) {
        var _this$authenticatedUs;
        if (((_this$authenticatedUs = this.authenticatedUser) === null || _this$authenticatedUs === void 0 ? void 0 : _this$authenticatedUs.what_tobe_produced) == "MEMORANDUM_CREDIT") {
          var _this$authenticatedUs2, _this$authenticatedUs3;
          if (((_this$authenticatedUs2 = this.authenticatedUser) === null || _this$authenticatedUs2 === void 0 || (_this$authenticatedUs2 = _this$authenticatedUs2.categorie_client) === null || _this$authenticatedUs2 === void 0 ? void 0 : _this$authenticatedUs2.toLowerCase()) == "retail") {
            var _this$dossier_credit2;
            var t = this.listOfWhatTobeProduced1.filter(function (el) {
              return el.categorie_client.includes("Retail");
            }).map(function (el) {
              return {
                docSlug: el.docSlug,
                tbToBeUsed: el.tbToBeUsed
              };
            });
            var t_ = t.filter(function (el) {
              return !el.docSlug.includes("carcasse_");
            });
            var symb = ((_this$dossier_credit2 = this.dossier_credit) === null || _this$dossier_credit2 === void 0 || (_this$dossier_credit2 = _this$dossier_credit2.caf_recorded_file) === null || _this$dossier_credit2 === void 0 ? void 0 : _this$dossier_credit2.type_de_pret) == "Crédit immobilier" ? "ppi" : "ppo";
            t = t.find(function (el) {
              return el.docSlug == "carcasse_" + symb;
            });
            t = t == null ? [] : t.tbToBeUsed;
            t_.forEach(function (el) {
              t = [].concat(_toConsumableArray(t), _toConsumableArray(el.tbToBeUsed));
            });
            tables = this.tables.filter(function (table) {
              return t.includes(table.component_name);
            });
          } else if (((_this$authenticatedUs3 = this.authenticatedUser) === null || _this$authenticatedUs3 === void 0 ? void 0 : _this$authenticatedUs3.categorie_client) == "Corporate") {
            var _t = this.listOfWhatTobeProduced1.filter(function (el) {
              return el.categorie_client == "Corporate";
            }).map(function (el) {
              return {
                docSlug: el.docSlug,
                tbToBeUsed: el.tbToBeUsed
              };
            });
            if ([undefined, null, "", "cr2", "CR2", "Cr2", "cR2"].includes(this.dType)) {
              _t = _t.map(function (el) {
                return el.tbToBeUsed;
              }).flat();
            } else {
              _t = _t.filter(function (el) {
                return el.docSlug != "cr2";
              });
              var t2 = this.tableMappingNSIA.find(function (el) {
                return el.creditType == _this0.dType;
              });
              _t.push(t2);
              _t = _t.map(function (el) {
                return el.tbToBeUsed;
              }).flat();
            }
            tables = this.tables.filter(function (table) {
              return _t.includes(table.component_name);
            });
          }
        } else {
          var _this$dossier_credit$, _this$dossier_credit3, _this$dossier_credit4, _this$authenticatedUs4, _this$authenticatedUs5, _this$authenticatedUs6;
          // const pathType = this.dossier_credit?.selected_path_type

          var type_fiche = (_this$dossier_credit$ = (_this$dossier_credit3 = this.dossier_credit) === null || _this$dossier_credit3 === void 0 || (_this$dossier_credit3 = _this$dossier_credit3.cred_pub_tb_1001) === null || _this$dossier_credit3 === void 0 ? void 0 : _this$dossier_credit3.fiche_a_utilise) !== null && _this$dossier_credit$ !== void 0 ? _this$dossier_credit$ : null;
          var clientType = (_this$dossier_credit4 = this.dossier_credit) === null || _this$dossier_credit4 === void 0 ? void 0 : _this$dossier_credit4.categorie_client;
          var _t2 = this.listOfWhatTobeProduced2.filter(function (el) {
            var _this0$authenticatedU;
            return el.categorie_client.includes(clientType) && el.linkedTo.includes((_this0$authenticatedU = _this0.authenticatedUser) === null || _this0$authenticatedU === void 0 ? void 0 : _this0$authenticatedU.what_tobe_produced);
          });
          if (((_this$authenticatedUs4 = this.authenticatedUser) === null || _this$authenticatedUs4 === void 0 ? void 0 : _this$authenticatedUs4.what_tobe_produced) == "CONTRE_ANALYSE_FILIALE") {
            if (clientType == "Retail") {
              var _this$dossier_credit5;
              var _symb = ((_this$dossier_credit5 = this.dossier_credit) === null || _this$dossier_credit5 === void 0 || (_this$dossier_credit5 = _this$dossier_credit5.caf_recorded_file) === null || _this$dossier_credit5 === void 0 ? void 0 : _this$dossier_credit5.type_de_pret) == "Crédit immobilier" ? "ppi" : "ppo";
              var _t_ = _t2.filter(function (el) {
                return !el.docSlug.includes("_resultat_scoring");
              });
              _t2 = _t2.filter(function (el) {
                return el.docSlug == _symb + "_resultat_scoring";
              });
              _t2 = [].concat(_toConsumableArray(_t2), _toConsumableArray(_t_));
            } else {
              if (type_fiche == "Fiche de Décision CCCA et CA") {
                _t2 = _t2.filter(function (el) {
                  if (el.docSlug != "canevas_fiche_analyse_tpe_pme_pmi") {
                    if (el.docSlug == "fiche_de_decisioncrcca_et_ca") {
                      var _this0$authenticatedU2;
                      if (_this0.role_uuid_reviewers.includes((_this0$authenticatedU2 = _this0.authenticatedUser) === null || _this0$authenticatedU2 === void 0 ? void 0 : _this0$authenticatedU2.role_uuid)) {
                        el["tbToBeUsed"] = ["tb19501", "tb19502", "tb19503", "tb19504", "tb19505", "tb19506", "tb19507", "tb19508", "tb19509", "tb19511", "tb19512", "tb19513"];
                      }
                    }
                    return el;
                  }
                });
              } else if (type_fiche == "Fiche de Décision CCCA et CA") {
                _t2 = _t2.filter(function (el) {
                  if (el.docSlug != "fiche_de_decisioncrcca_et_ca") {
                    if (el.docSlug == "canevas_fiche_analyse_tpe_pme_pmi") {
                      var _this0$authenticatedU3;
                      if (_this0.role_uuid_reviewers.includes((_this0$authenticatedU3 = _this0.authenticatedUser) === null || _this0$authenticatedU3 === void 0 ? void 0 : _this0$authenticatedU3.role_uuid)) {
                        el["tbToBeUsed"] = ["tb17500", "tb17501", "tb17502", "tb17503", "tb17504", "tb17505"];
                      }
                    }
                    return el;
                  }
                });
              } else {
                _t2 = _t2.filter(function (el) {
                  return el.docSlug != "fiche_de_decisioncrcca_et_ca";
                });
              }
              // tables = this.tables.filter(table => !table.name.toLowerCase().includes('dcei'))
            }
          }
          if (((_this$authenticatedUs5 = this.authenticatedUser) === null || _this$authenticatedUs5 === void 0 ? void 0 : _this$authenticatedUs5.what_tobe_produced) == "CONTRE_ANALYSE_DAJC") {
            var _t3 = this.listOfWhatTobeProduced2.filter(function (el) {
              var _this0$authenticatedU4;
              return el.linkedTo.includes((_this0$authenticatedU4 = _this0.authenticatedUser) === null || _this0$authenticatedU4 === void 0 ? void 0 : _this0$authenticatedU4.what_tobe_produced);
            });
          }
          if (((_this$authenticatedUs6 = this.authenticatedUser) === null || _this$authenticatedUs6 === void 0 ? void 0 : _this$authenticatedUs6.what_tobe_produced) == "CONTRE_ANALYSE_GAC") {
            var _t4 = this.listOfWhatTobeProduced2.filter(function (el) {
              var _this0$authenticatedU5;
              return el.linkedTo.includes((_this0$authenticatedU5 = _this0.authenticatedUser) === null || _this0$authenticatedU5 === void 0 ? void 0 : _this0$authenticatedU5.what_tobe_produced);
            });
          }
          _t2 = _t2.map(function (el) {
            return el.tbToBeUsed;
          }).flat();
          tables = this.tables.filter(function (table) {
            return _t2.includes(table.component_name);
          });
        }
      } else // removed by dead control flow
{}
      return tables.filter(function (table) {
        var _this0$authenticatedU6;
        return ((_this0$authenticatedU6 = _this0.authenticatedUser) === null || _this0$authenticatedU6 === void 0 ? void 0 : _this0$authenticatedU6.what_tobe_produced) && table.is_partof.includes(_this0.authenticatedUser.what_tobe_produced) || table.is_partof == "ALL";
      }).map(function (el) {
        el.text = el.name + " : " + el.description;
        return el;
      });
    },
    filteredItems: function filteredItems() {
      var _this1 = this;
      return this.autocompleteItems.filter(function (item) {
        // console.log("itemss", item)
        return item.text.toLowerCase().indexOf(_this1.tag.toLowerCase()) > -1 || item.email.toLowerCase().indexOf(_this1.tag.toLowerCase()) > -1;
      });
    },
    filteredTable: function filteredTable() {
      var _this10 = this;
      return this.tableTodisplay.filter(function (item) {
        var _item$text, _this10$tableTag;
        return ((_item$text = item.text) === null || _item$text === void 0 ? void 0 : _item$text.toLowerCase().indexOf((_this10$tableTag = _this10.tableTag) === null || _this10$tableTag === void 0 ? void 0 : _this10$tableTag.toLowerCase())) > -1;
      });
    },
    users_id: function users_id() {
      var _this$dossier_credit6,
        _this11 = this;
      var ids = this.tags.map(function (el) {
        return el.id;
      });
      if (((_this$dossier_credit6 = this.dossier_credit) === null || _this$dossier_credit6 === void 0 || (_this$dossier_credit6 = _this$dossier_credit6.shared_with_intentionally) === null || _this$dossier_credit6 === void 0 ? void 0 : _this$dossier_credit6.filter(function (el) {
        return el.user_id === _this11.authenticatedUser.user_id;
      }).length) < 1) {
        ids.push(this.authenticatedUser.user_id);
      }
      return ids;
    },
    greenLights: function greenLights() {
      var _this$dossier_credit7,
        _this12 = this;
      return ((_this$dossier_credit7 = this.dossier_credit) === null || _this$dossier_credit7 === void 0 || (_this$dossier_credit7 = _this$dossier_credit7.green_lights) === null || _this$dossier_credit7 === void 0 ? void 0 : _this$dossier_credit7.filter(function (el) {
        var _el$responses;
        return el.sender.user_id === _this12.authenticatedUser.user_id || ((_el$responses = el.responses) === null || _el$responses === void 0 ? void 0 : _el$responses.some(function (elm) {
          return elm.user_id === _this12.authenticatedUser.user_id;
        }));
      })) || [];
    },
    historicalGreenLights: function historicalGreenLights() {
      var _this$greenLights,
        _this13 = this;
      return ((_this$greenLights = this.greenLights) === null || _this$greenLights === void 0 ? void 0 : _this$greenLights.filter(function (el) {
        var _el$responses2;
        return (_el$responses2 = el.responses) === null || _el$responses2 === void 0 ? void 0 : _el$responses2.some(function (elm) {
          return el.sender.user_id === _this13.authenticatedUser.user_id || elm.user_id === _this13.authenticatedUser.user_id && elm.response;
        });
      })) || [];
    },
    greenLightsSent: function greenLightsSent() {
      var _this$greenLights2,
        _this14 = this;
      return ((_this$greenLights2 = this.greenLights) === null || _this$greenLights2 === void 0 ? void 0 : _this$greenLights2.filter(function (el) {
        var _this14$authenticated;
        return el.sender.user_id === ((_this14$authenticated = _this14.authenticatedUser) === null || _this14$authenticated === void 0 ? void 0 : _this14$authenticated.user_id);
      })) || [];
    },
    greenLightsToAnswer: function greenLightsToAnswer() {
      var _this$greenLights3,
        _this15 = this;
      if (!this.authenticatedUser) return [];
      return (_this$greenLights3 = this.greenLights) === null || _this$greenLights3 === void 0 ? void 0 : _this$greenLights3.filter(function (el) {
        var _el$responses3;
        return (_el$responses3 = el.responses) === null || _el$responses3 === void 0 ? void 0 : _el$responses3.some(function (elm) {
          return elm.user_id === _this15.authenticatedUser.user_id && !elm.response;
        });
      });
    },
    requestToShow: function requestToShow() {
      var _this16 = this;
      if (this.search) {
        var _this$greenLights4;
        return (_this$greenLights4 = this.greenLights) === null || _this$greenLights4 === void 0 ? void 0 : _this$greenLights4.filter(function (el) {
          return el.message.toLowerCase().includes(_this16.search.toLowerCase());
        });
      } else if (this.current_tab == "received") {
        return this.greenLightsToAnswer;
      } else if (this.current_tab == "sent") {
        return this.greenLightsSent;
      }
      return [];
    }
  },
  watch: {
    dossier_credit: {
      handler: function handler() {
        if (this.dossier_credit != null) {
          var _this$dossier_credit8;
          this.idsFromDossier = (_this$dossier_credit8 = this.dossier_credit) === null || _this$dossier_credit8 === void 0 || (_this$dossier_credit8 = _this$dossier_credit8.shared_with_intentionally) === null || _this$dossier_credit8 === void 0 ? void 0 : _this$dossier_credit8.map(function (el) {
            return el.user_id;
          });
          // this.getUsers();
        }
      },
      immediate: true,
      deep: true
    },
    "dossier_credit.is_exception": {
      handler: function handler(newVal) {
        if (newVal) {
          this.tag = "vacaba";
        }
      }
    },
    tag: "initItems"
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/modals/GreenLightModal.vue?vue&type=template&id=2dad155c&scoped=true":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/modals/GreenLightModal.vue?vue&type=template&id=2dad155c&scoped=true ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm$greenLightsToAnsw, _vm$greenLightsSent, _vm$greenLightsToAnsw2, _vm$dossier_credit, _vm$historicalGreenLi;
  var _vm = this,
    _c = _vm._self._c;
  return _c("modal", {
    staticClass: "pb-5",
    attrs: {
      name: "green_light",
      width: 1300,
      height: 700,
      adaptive: true
    }
  }, [_c("div", {
    staticClass: "px-2 py-3 mb-2 d-flex flex-column justify-content-between"
  }, [_c("h5", {
    staticClass: "mb-3 py-2 d-flex justify-content-between",
    staticStyle: {
      height: "5vh"
    }
  }, [_c("span", [_vm._v("Demandes d'exceptions")]), _vm._v(" "), _c("span", {
    staticClass: "cursor-pointer",
    on: {
      click: function click($event) {
        return _vm.$modal.hide("green_light");
      }
    }
  }, [_c("i", {
    staticClass: "icofont-close"
  })])]), _vm._v(" "), _c("div", {
    staticClass: "px-3 border",
    staticStyle: {
      height: "80vh"
    }
  }, [_c("div", {
    staticClass: "row pb-3"
  }, [_c("div", {
    staticClass: "col-7 border-end",
    staticStyle: {
      height: "500px",
      "overflow-y": "auto"
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12 pt-2 ps-0 mb-1 d-flex justify-content-between"
  }, [_c("h5", [_vm._v("Liste des demandes d'exceptions")]), _vm._v(" "), _c("div", {
    staticClass: "d-flex justify-content-end align-items-center gap-2"
  }, [_c("div", {
    staticClass: "input-group"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.search,
      expression: "search"
    }],
    staticClass: "form-control border-end-0",
    attrs: {
      type: "search",
      id: "search",
      placeholder: "Rechercher"
    },
    domProps: {
      value: _vm.search
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.search = $event.target.value;
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "input-group-text bg-white border-start-0"
  }, [_c("i", {
    staticClass: "icofont-search"
  })])]), _vm._v(" "), _c("span", {
    staticClass: "border td-btn rounded p-1 d-flex justify-content-center align-items-center gap-1 shadow-sm cursor-pointer",
    attrs: {
      title: "Actualiser les dossiers"
    },
    on: {
      click: _vm.refreshData
    }
  }, [_c("span", {
    staticClass: "icofont icofont-refresh cursor-pointer",
    "class": {
      "rotate-180": _vm.isRotating
    }
  }), _vm._v("\n                  Rafraichir\n                ")])])]), _vm._v(" "), _c("div", {
    staticClass: "col p-2 text-center",
    "class": _vm.current_tab == "received" ? "bg-white text-orange border fw-semibold" : "bg-deep-blue border-end",
    on: {
      click: function click($event) {
        _vm.current_tab = "received";
      }
    }
  }, [_vm._v("\n              Exceptions recues "), _c("span", [_vm._v("( " + _vm._s((_vm$greenLightsToAnsw = _vm.greenLightsToAnswer) === null || _vm$greenLightsToAnsw === void 0 ? void 0 : _vm$greenLightsToAnsw.length) + " )")])]), _vm._v(" "), _c("div", {
    staticClass: "col p-2 text-center",
    "class": _vm.current_tab == "sent" ? "bg-white text-orange border fw-semibold" : "bg-deep-blue border-end",
    on: {
      click: function click($event) {
        _vm.current_tab = "sent";
      }
    }
  }, [_vm._v("\n              Exceptions envoyées "), _c("span", [_vm._v("( " + _vm._s((_vm$greenLightsSent = _vm.greenLightsSent) === null || _vm$greenLightsSent === void 0 ? void 0 : _vm$greenLightsSent.length) + " )")])])]), _vm._v(" "), _c("greenlight-list", {
    attrs: {
      singleOpened: _vm.current_tab == "received",
      search: _vm.search,
      containerClass: "row flex-column mb-3",
      greenLights: _vm.requestToShow,
      forceOpen: ((_vm$greenLightsToAnsw2 = _vm.greenLightsToAnswer) === null || _vm$greenLightsToAnsw2 === void 0 ? void 0 : _vm$greenLightsToAnsw2.length) > 0
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-5",
    staticStyle: {
      height: "500px",
      "overflow-y": "auto"
    }
  }, [_c("div", {
    staticClass: "row flex-column gap-1 pt-2"
  }, [_c("expandable-item", {
    attrs: {
      icon: "icofont-plus",
      label: "Nouvelle demande",
      forceOpen: !((_vm$dossier_credit = _vm.dossier_credit) !== null && _vm$dossier_credit !== void 0 && (_vm$dossier_credit = _vm$dossier_credit.green_lights) !== null && _vm$dossier_credit !== void 0 && _vm$dossier_credit.length)
    }
  }, [_c("div", {
    staticClass: "col-12 p-2",
    attrs: {
      id: "add_exception"
    }
  }, [_c("div", {
    staticClass: "row flex-column gap-3"
  }, [_c("div", {
    staticClass: "col form-group"
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "message"
    }
  }, [_vm._v("\n                      Veuillez choisir le type d'exception\n                    ")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.type_exception,
      expression: "type_exception"
    }],
    staticClass: "form-select",
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.type_exception = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }
    }
  }, _vm._l(_vm.types, function (type) {
    return _c("option", {
      key: type.value,
      domProps: {
        value: type.value
      }
    }, [_vm._v("\n                        " + _vm._s(type.label) + "\n                      ")]);
  }), 0)]), _vm._v(" "), _c("div", {
    staticClass: "col form-group"
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "message"
    }
  }, [_vm._v("\n                      Veuillez choisir les collaborateurs\n                    ")]), _vm._v(" "), _c("vue-tags-input", {
    staticClass: "w-100",
    staticStyle: {
      "max-width": "100%"
    },
    attrs: {
      "autocomplete-items": _vm.autocompleteItems,
      tags: _vm.tags,
      placeholder: "Ajouter vos collaborateurs"
    },
    on: {
      "tags-changed": _vm.updateTags,
      "adding-duplicate": _vm.pass
    },
    model: {
      value: _vm.tag,
      callback: function callback($$v) {
        _vm.tag = $$v;
      },
      expression: "tag"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col form-group"
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "message"
    }
  }, [_vm._v(" Message ")]), _vm._v(" "), _c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.message,
      expression: "message"
    }],
    staticClass: "form-control",
    attrs: {
      id: "message",
      rows: "4",
      cols: "50"
    },
    domProps: {
      value: _vm.message
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.message = $event.target.value;
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col"
  }, [_c("button", {
    staticClass: "btn bg-deep-blue w-100 d-block",
    attrs: {
      disabled: _vm.loading_save || _vm.tags.length == 0 || _vm.type_exception == null || _vm.message == ""
    },
    on: {
      click: _vm.share
    }
  }, [_vm.loading_save ? _c("div", {
    staticClass: "spinner-border spinner-border-sm text-light me-2",
    attrs: {
      role: "status"
    }
  }, [_c("span", {
    staticClass: "visually-hidden"
  }, [_vm._v("Loading...")])]) : _vm._e(), _vm._v("\n                      Envoyer\n                    ")])])])])]), _vm._v(" "), _c("expandable-item", {
    attrs: {
      icon: "icofont-history",
      label: "Historique de demandes (".concat((_vm$historicalGreenLi = _vm.historicalGreenLights) === null || _vm$historicalGreenLi === void 0 ? void 0 : _vm$historicalGreenLi.length, ")")
    }
  }, [_c("greenlight-list", {
    attrs: {
      greenLights: _vm.historicalGreenLights
    }
  })], 1)], 1)])])]), _vm._v(" "), _c("div", {
    staticClass: "row justify-content-between text-end p-2",
    staticStyle: {
      height: "5vh"
    }
  }, [_c("div", {
    staticClass: "w-25"
  }), _vm._v(" "), _c("div", {
    staticClass: "col-auto text-end"
  }, [_c("button", {
    staticClass: "btn bg-deep-blue",
    on: {
      click: function click($event) {
        return _vm.$modal.hide("green_light");
      }
    }
  }, [_vm._v("\n          Fermer\n        ")])])])])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/modals/GreenLightModal.vue?vue&type=style&index=0&id=2dad155c&lang=css&scoped=true":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/modals/GreenLightModal.vue?vue&type=style&index=0&id=2dad155c&lang=css&scoped=true ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.Mstatus[data-v-2dad155c] {\r\n  font-size: 14px;\n}\n.Mmail[data-v-2dad155c] {\r\n  /* position: absolute; */\r\n  margin-top: 17px;\r\n  /* left: 55px; */\r\n  font-size: 11px;\r\n  color: grey;\r\n  /* display: block !important; */\n}\n.Mname[data-v-2dad155c] {\r\n  margin-left: 10px;\r\n  font-size: 14px;\r\n  font-weight: bold;\n}\n.Msigle[data-v-2dad155c] {\r\n  width: 25px;\r\n  height: 25px;\r\n  border: 1px solid grey;\r\n  border-radius: 25vh;\r\n  position: relative;\r\n  padding-left: 8px;\n}\n*[data-v-2dad155c] {\r\n  font-family: ui-sans-serif, system-ui, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\",\r\n    \"Segoe UI Symbol\", \"Noto Color Emoji\";\n}\n.card[data-v-2dad155c] {\r\n  height: auto;\n}\n.bg-deep-blue[data-v-2dad155c] {\r\n  background-color: rgb(52, 73, 94);\r\n  color: white;\n}\n.bg-folder[data-v-2dad155c] {\r\n  background-color: #eaecefff;\n}\n.bg-orange[data-v-2dad155c] {\r\n  background-color: #fd7e14;\r\n  color: white;\r\n  /* font-weight: bold; */\n}\n.rotate-180[data-v-2dad155c] {\r\n  transform: rotate(3turn);\r\n  transition: transform 2s linear;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/modals/GreenLightModal.vue?vue&type=style&index=0&id=2dad155c&lang=css&scoped=true":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/modals/GreenLightModal.vue?vue&type=style&index=0&id=2dad155c&lang=css&scoped=true ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GreenLightModal_vue_vue_type_style_index_0_id_2dad155c_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GreenLightModal.vue?vue&type=style&index=0&id=2dad155c&lang=css&scoped=true */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/modals/GreenLightModal.vue?vue&type=style&index=0&id=2dad155c&lang=css&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GreenLightModal_vue_vue_type_style_index_0_id_2dad155c_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GreenLightModal_vue_vue_type_style_index_0_id_2dad155c_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/modals/GreenLightModal.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/modals/GreenLightModal.vue ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _GreenLightModal_vue_vue_type_template_id_2dad155c_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GreenLightModal.vue?vue&type=template&id=2dad155c&scoped=true */ "./resources/js/components/modals/GreenLightModal.vue?vue&type=template&id=2dad155c&scoped=true");
/* harmony import */ var _GreenLightModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GreenLightModal.vue?vue&type=script&lang=js */ "./resources/js/components/modals/GreenLightModal.vue?vue&type=script&lang=js");
/* harmony import */ var _GreenLightModal_vue_vue_type_style_index_0_id_2dad155c_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GreenLightModal.vue?vue&type=style&index=0&id=2dad155c&lang=css&scoped=true */ "./resources/js/components/modals/GreenLightModal.vue?vue&type=style&index=0&id=2dad155c&lang=css&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _GreenLightModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _GreenLightModal_vue_vue_type_template_id_2dad155c_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _GreenLightModal_vue_vue_type_template_id_2dad155c_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "2dad155c",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/modals/GreenLightModal.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/modals/GreenLightModal.vue?vue&type=script&lang=js":
/*!************************************************************************************!*\
  !*** ./resources/js/components/modals/GreenLightModal.vue?vue&type=script&lang=js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GreenLightModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GreenLightModal.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/modals/GreenLightModal.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GreenLightModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/modals/GreenLightModal.vue?vue&type=style&index=0&id=2dad155c&lang=css&scoped=true":
/*!********************************************************************************************************************!*\
  !*** ./resources/js/components/modals/GreenLightModal.vue?vue&type=style&index=0&id=2dad155c&lang=css&scoped=true ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GreenLightModal_vue_vue_type_style_index_0_id_2dad155c_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GreenLightModal.vue?vue&type=style&index=0&id=2dad155c&lang=css&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/modals/GreenLightModal.vue?vue&type=style&index=0&id=2dad155c&lang=css&scoped=true");


/***/ }),

/***/ "./resources/js/components/modals/GreenLightModal.vue?vue&type=template&id=2dad155c&scoped=true":
/*!******************************************************************************************************!*\
  !*** ./resources/js/components/modals/GreenLightModal.vue?vue&type=template&id=2dad155c&scoped=true ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GreenLightModal_vue_vue_type_template_id_2dad155c_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GreenLightModal_vue_vue_type_template_id_2dad155c_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GreenLightModal_vue_vue_type_template_id_2dad155c_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GreenLightModal.vue?vue&type=template&id=2dad155c&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/modals/GreenLightModal.vue?vue&type=template&id=2dad155c&scoped=true");


/***/ })

}]);